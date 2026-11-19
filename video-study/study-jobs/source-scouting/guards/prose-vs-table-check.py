#!/usr/bin/env python3
"""Mechanical prose-vs-table checker — source-scouting guard (L2 build charge).

Deterministic scope (INSTRUCTION §9, L2 DEMONSTRATED, Cycle-007 Condense;
built Cycle-008; SCOPE CURED Cycle-010 Condense, 2026-11-18, on
codex-condense's REVISE — the checker was blind to non-numeric owner rows
standing in separate entry blocks above the scouted table, e.g. row #0c,
and returned a false PASS on a stale "no owner sends" footer): parse the
digestion-queue section in QUEUE.md — ALL table rows in it, numeric
scouted rows AND non-numeric owner rows (ids like 0c) in any table block
of the section — and match current-state facts against the FOOTER prose
below the table (the italic current-state paragraph after the last
table row):

  1. head row   — the first NUMERIC row's id vs any "head ... row #N"
     claim (the scouted head), AND the first row overall vs any
     "overall head is ... row #X" claim (the queue's overall head)
  2. live count — the numeric-row count vs any "live count ... N" claim
     (the scouted count), AND the all-rows count vs any
     "N live entries in total" claim (the overall count)
  3. owner-send state — whether any live row in the section is an owner
     send (Source column mentions "owner", any id form, any block) vs a
     footer claim of the form "No owner sends are currently queued"
     (or its positive counterpart)

Banners above the table are dated historical statements and are NOT
checked (they qualify their own claims with dates / "at entry"); the
OWNER-SENDS pattern section is a manual semantic check (§5.5 pattern
leg), outside this checker's scope by design.

Usage: prose-vs-table-check.py [path-to-QUEUE.md]
Exit: 0 = PASS (every footer claim found matches the table; a footer
claim class that is absent prints ABSENT, not PASS-by-silence for the
other classes), 1 = FAIL (a contradiction is named), 2 = parse error.
"""
import re
import sys
from pathlib import Path

def main() -> int:
    default = Path(__file__).resolve().parents[2] / "QUEUE.md"
    path = Path(sys.argv[1]) if len(sys.argv) > 1 else default
    text = path.read_text(encoding="utf-8")

    m = re.search(r"## Queue \(head = next\)(.*?)\n## Digested", text, re.S)
    if not m:
        print("PARSE-ERROR: digestion-queue section not found")
        return 2
    section = m.group(1)

    rows = []
    for line in section.splitlines():
        rm = re.match(r"\|\s*([0-9]+[a-z]?)\s*\|(.*)", line)
        if rm:
            rows.append((rm.group(1), line))
    if not rows:
        print("PARSE-ERROR: no table rows in the digestion section")
        return 2
    scouted = [(rid, line) for rid, line in rows if rid.isdigit()]
    if not scouted:
        print("PARSE-ERROR: no numeric scouted rows in the digestion section")
        return 2
    head_id = int(scouted[0][0])
    live_count = len(scouted)
    overall_head = rows[0][0]
    overall_count = len(rows)
    # Source-cell parsing is RIGHT-ANCHORED: a specimen title may itself
    # contain "|" (live row #16, "Whip Pan | What It Is..."), which shifts
    # every left-anchored field index. From the right the columns are
    # stable: ... | Source | Reason |  ->  parts[-3] is always Source.
    def source_cell(line: str) -> str:
        parts = line.split("|")
        return parts[-3].lower() if len(parts) >= 4 else ""
    owner_rows = [rid for rid, line in rows if "owner" in source_cell(line)]
    print(f"TABLE: live_count={live_count} head_row=#{head_id} "
          f"overall_count={overall_count} overall_head=#{overall_head} "
          f"owner_rows={owner_rows if owner_rows else 'none'}")

    # Footer = section text after the last table row.
    last_row_line = rows[-1][1]
    footer = section[section.rfind(last_row_line) + len(last_row_line):]
    if not footer.strip():
        print("PARSE-ERROR: no footer prose below the table")
        return 2

    failures = []

    # 1. Head-row claims in the footer. The claim form is "the head is
    # ... row #N" — a bare "head ... row #N" pattern false-positives on
    # historical references ("formerly row #0"), measured at this
    # checker's first demonstration (Cycle-008 Verify, 2026-11-17).
    head_claims = re.findall(r"(?<!overall )head is[^.\n]*?row\s*#(\d+)", footer, re.I)
    if head_claims:
        for claim in head_claims:
            ok = int(claim) == head_id
            print(f"CHECK head-claim: footer names row #{claim} -> "
                  f"{'MATCH' if ok else 'CONTRADICTION (table head is #' + str(head_id) + ')'}")
            if not ok:
                failures.append(f"head claim #{claim} != table head #{head_id}")
    else:
        print("CHECK head-claim: ABSENT in footer (no claim to contradict)")

    # 2. Live-count claims in the footer.
    count_claims = re.findall(r"live count[^0-9]*(\d+)", footer, re.I)
    if count_claims:
        for claim in count_claims:
            ok = int(claim) == live_count
            print(f"CHECK count-claim: footer names {claim} -> "
                  f"{'MATCH' if ok else 'CONTRADICTION (table count is ' + str(live_count) + ')'}")
            if not ok:
                failures.append(f"count claim {claim} != table count {live_count}")
    else:
        print("CHECK count-claim: ABSENT in footer (no claim to contradict)")

    # 1b. Overall-head claims in the footer ("overall head is ... row #X",
    # X in any id form, e.g. 0c) vs the first row of the whole section.
    overall_head_claims = re.findall(
        r"overall head is[^.\n]*?row\s*#([0-9]+[a-z]?)", footer, re.I)
    if overall_head_claims:
        for claim in overall_head_claims:
            ok = claim == overall_head
            print(f"CHECK overall-head-claim: footer names row #{claim} -> "
                  f"{'MATCH' if ok else 'CONTRADICTION (overall head is #' + overall_head + ')'}")
            if not ok:
                failures.append(
                    f"overall head claim #{claim} != overall head #{overall_head}")
    else:
        print("CHECK overall-head-claim: ABSENT in footer (no claim to contradict)")

    # 2b. Overall-count claims in the footer ("N live entries in total")
    # vs the all-rows count of the section.
    overall_count_claims = re.findall(r"(\d+)\s+live entries in total", footer, re.I)
    if overall_count_claims:
        for claim in overall_count_claims:
            ok = int(claim) == overall_count
            print(f"CHECK overall-count-claim: footer names {claim} -> "
                  f"{'MATCH' if ok else 'CONTRADICTION (overall count is ' + str(overall_count) + ')'}")
            if not ok:
                failures.append(
                    f"overall count claim {claim} != overall count {overall_count}")
    else:
        print("CHECK overall-count-claim: ABSENT in footer (no claim to contradict)")

    # 3. Owner-send state claims in the footer (negative and positive).
    no_owner_claim = re.search(r"no owner sends are currently queued", footer, re.I)
    pos_owner_claim = re.search(
        r"(?<!no )owner sends? (?:is|are) currently queued", footer, re.I)
    if no_owner_claim:
        ok = not owner_rows
        print(f"CHECK owner-state: footer claims none queued -> "
              f"{'MATCH' if ok else 'CONTRADICTION (owner rows present: ' + str(owner_rows) + ')'}")
        if not ok:
            failures.append("footer claims no owner sends queued but owner rows exist")
    elif pos_owner_claim:
        ok = bool(owner_rows)
        print(f"CHECK owner-state: footer claims an owner send queued -> "
              f"{'MATCH' if ok else 'CONTRADICTION (no owner rows in table)'}")
        if not ok:
            failures.append("footer claims an owner send queued but none is in the table")
    else:
        print("CHECK owner-state: ABSENT in footer (no owner-state claim)")

    if failures:
        print("RESULT: FAIL — " + "; ".join(failures))
        return 1
    print("RESULT: PASS — every footer claim found matches the table")
    return 0

if __name__ == "__main__":
    sys.exit(main())
