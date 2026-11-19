#!/usr/bin/env python3
"""Assemble T91 attempt-3 lens payloads (allowlist only) + anchor scan."""
import pathlib, hashlib, re, json

ART = pathlib.Path("/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T91-qa-quote-cards")
RUN = pathlib.Path("/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/practice/runs/2026-11-16-cycle-018-wave-17")
SHA = "10a4da2d1a78664f910ab20fdd27d0f0b588b6372d7a9a94e78a48c819184e83"
source = (ART / "recreation.html").read_text()
assert hashlib.sha256(source.encode()).hexdigest() == SHA, "source sha mismatch"

# lens paragraphs + neutral facts modeled on attempt-2 payloads
a2 = (ART / "codex/attempt-2/instr-reusability.txt").read_text()
facts = a2[a2.index("## Neutral specimen facts"):a2.index("## Build record")]
facts = facts.replace("derived cycle 26500ms", "derived cycle 27900ms")
facts = facts.replace(' Its "uniform" mode is a legacy equal-slot mode, labeled as such.', '')
facts = facts.replace("## Neutral specimen facts (observations only)", "## Neutral specimen facts (observations only)")

lenses = {}
for lens in ["motion", "timing", "purity", "reusability", "readability"]:
    t = (ART / f"codex/attempt-2/instr-{lens}.txt").read_text()
    para = t[t.index("Lens:"):t.index("## Neutral specimen facts")].strip()
    lenses[lens] = para

neutral_record = (ART / "build-record-neutral-attempt3.md").read_text()
out_lines = (RUN / "own-checks-T91-attempt3-output.txt").read_text().splitlines()
packet_lines = [ln for ln in out_lines if (ln.startswith("PASS ") or ln.startswith("RESULT ") or ln.startswith("INFO perline") or ln.startswith("INFO consumption") or ln.startswith("INFO literals") or ln.startswith("INFO derived")) and "preserved build" not in ln and "finalSha" not in ln]
packet = "\n".join(packet_lines)

HEADER = """Consumer: practice INSTRUCTION §5 Verify + the scores.md filing for this item.
Decision priced: whether attempt 3 beats 82.4 and passes the bar.
Working record: this payload is the whole record for the run — the neutral specimen facts, the neutral build record, the own-check packet, and the full recreation source bound to sha256 10a4da2d1a78664f910ab20fdd27d0f0b588b6372d7a9a94e78a48c819184e83.
BODY-WRITE: return your findings and end with the score line; the consumer files your return verbatim.
Scores are integers from 0 to 100. Judge only the lens named below, on the build in front of you.
"""

SCAN_PATTERNS = ["76.4", "cure", "plateau", "delta", "WHY", "verdict", "scores.md", "target", "attempt 1", "attempt 2", "attempt-1", "attempt-2", "prior average", "82.4"]
results = {}
outdir = ART / "codex/attempt-3"
outdir.mkdir(exist_ok=True)
for lens, para in lenses.items():
    payload = (HEADER + "\n" + para + "\n\n" + facts + "\n## Neutral build record\n" + neutral_record +
               "\n\n## Own-check packet (check names and results only)\n" + packet +
               "\n\n## Recreation source (sha256 " + SHA + ")\n" + source +
               "\nEnd your return with exactly one line: SCORE: <integer>\n")
    p = outdir / f"instr-{lens}.txt"
    assert not p.exists(), f"create-once violation: {p}"
    p.write_text(payload)
    # anchor scan: evidence sections = everything after the standing header block
    body = payload[len(HEADER):]
    hits = {pat: len(re.findall(re.escape(pat), body, flags=re.IGNORECASE)) for pat in SCAN_PATTERNS}
    hits = {k: v for k, v in hits.items() if v}
    results[lens] = {"bytes": len(payload.encode()), "hits": hits}
    print(lens, len(payload.encode()), "hits:", hits)
print(json.dumps(results, indent=1))
