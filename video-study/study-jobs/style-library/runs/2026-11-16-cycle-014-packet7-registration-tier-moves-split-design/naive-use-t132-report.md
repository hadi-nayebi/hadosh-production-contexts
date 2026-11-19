# Naive-use test — T132 “serial presentation” (Honda “Keep Up”, Packet #7)
Cold reader: no prior exposure to this library. Sources used for the answers: ONLY the four library surface files (INDEX.md, TECHNIQUES.md, VIEWS.md, ASSETS.md). No packet, digest, recreation, or run file was opened for the answers.

## (a) Path taken — files opened in order, searches used, tool calls counted

Tool calls, in order (14 total including this report write):

1. `muse.read` — `hidden_files/study/style-library/INDEX.md` (parallel batch 1)
2. `muse.read` — `hidden_files/study/style-library/TECHNIQUES.md` (parallel batch 1; output capped at 50 KB, truncated mid-Packet-#3, around T54)
3. `muse.read` — `hidden_files/study/style-library/VIEWS.md` (parallel batch 1)
4. `muse.read` — `hidden_files/study/style-library/ASSETS.md` (parallel batch 1)
5–10. `muse.read` ×6 — the AGENTS.md chain (`~/workspace/AGENTS.md`, `~/workspace/goals/AGENTS.md`, goal, hidden_files, study, and style-library AGENTS.md) — opened only because the runtime injected a house-rules instruction after the first batch; they contributed nothing to the six answers and are not library sources.
11. `muse.exec` — search inside TECHNIQUES.md only: `grep -n "T132\|Packet #7 techniques\|serial presentation\|Serial presentation" …/TECHNIQUES.md` — returned the locator line, the tier-register line (line 75), the Packet #7 section heading (line 724), and the T132 heading (line 728) + its Mechanics line (line 729).
12. `muse.read` — `TECHNIQUES.md` at offset 724, limit 60 lines — the Packet #7 techniques section (T132–T144), which contains the full T132 entry (heading, Mechanics, Feeds).
13. `muse.exec` — `date` (America/New_York) to ground the elapsed-time estimate: 11:29:24 EST, against the task start tag 11:28:05 EST.
14. `muse.write` — this report (the only file written).

Searches used: the single grep in step 11 (above). No other search tool, no browser, no packet/digest/recreation/run file opened.

What each surface file contributed:
- INDEX.md: confirmed Packet #7 is Honda “Keep Up”, that its techniques are T132–T144, that T132 is in the 7 OWED at queue #65–#71, and the adoption caution “T132 is serial presentation, NOT a Spritz-variant”.
- TECHNIQUES.md: the authoritative entry — locator (T132–T144 = P7), tier register (line 75), and the full entry at lines 728–730.
- VIEWS.md: cross-check — T132 appears only in the Word animation view, as “one word at a time, centre-anchored; dwell is the only variable”, P7 @ 0:03–0:38, DESCRIBED — OWED #65.
- ASSETS.md: no T132 entry; only indirect corroboration (AS-54 cites P7 §3 T01 at 03.00–38.04). Otherwise a dead end for this question.

## (b) Elapsed time

**79 seconds** — best honest estimate, measured, not guessed: task start tag Mon 2026-11-16 11:28:05 EST to the `date` check at 11:29:24 EST. All six answers were already in hand before that date check (they were complete on the targeted TECHNIQUES.md read in step 12), so 79 s is a slight over-estimate of time-to-answers, by a few seconds at most. Basis: 12 substantive tool calls before the report write, ~120 KB of surface-file text returned in the first parallel batch (TECHNIQUES.md alone capped at 50 KB), plus one grep and one 60-line targeted re-read.

## (c) The six answers

1. **Library technique number and packet-local number**
   - Library: **T132**
   - Packet-local: **P7 T01** — heading in TECHNIQUES.md: “### T132 — Serial presentation (RSVP replacement) (P7 T01) ◆ — OWED #65”

2. **One-line mechanics, in the entry's own terms**
   > “one word at a time replaces the last by hard cut at a fixed centre position over a continuous moving landscape plate; nothing accumulates, nothing can be re-read; dwell is the only variable. In Brownie's temporal-typography taxonomy this is serial presentation — still compositions replaced by cut, no motion within a composition — not kinetic typography proper; removing saccades and regressions makes reading speed a property of the film, not the viewer.”
   - (TECHNIQUES.md, T132 Mechanics line. VIEWS.md compresses the same point to: “one word at a time, centre-anchored; dwell is the only variable”.)

3. **Feeds (container view)**
   - **word animation** — and only word animation.
   - Full Feeds field: “Feeds: word animation — P7 @ 03.00–38.04 (the whole manifesto; 138 word onsets)”
   - In VIEWS.md it is listed only under the “Word animation” view; it does not appear under Openings, Transitions, Diagrams, Endings, Thumbnails, or Cross-container systems.

4. **Packet timestamps**
   - **03.00–38.04** (P7), described in the entry as “the whole manifesto; 138 word onsets”.
   - VIEWS.md prints the same span rounded: “P7 @ 0:03–0:38”.

5. **Exact evidence frame filenames / data records cited**
   - `ev/3.0-limits.jpg`
   - `ev/7.84-do-period.jpg`
   - `onset-table.csv` — cited as “(all 138 word rows)”
   - `transcript.txt`
   - Verbatim Feeds tail: “— ev/3.0-limits.jpg, ev/7.84-do-period.jpg · onset-table.csv (all 138 word rows) · transcript.txt”

6. **Tier and recreation obligation (including queue position if owed)**
   - Tier: **DESCRIBED**
   - Obligation: **OWED — queue #65** (the first of Packet #7's seven owed items, queue #65–#71).
   - Tier-register wording (TECHNIQUES.md, Cycle-014): “DESCRIBED — **OWED #65** | classified at registration (Cycle-014): borderline vs system — priced OWED: a container form itself, a word stream whose only variable is dwell; precedent T01/T45 timing-form techniques owed”
   - It is not IN PROGRESS and not RECREATED; no recreation attempt / scores are cited for T132 in any of the four surface files.

## (d) Confusion, misleading points, backtracks

- **TECHNIQUES.md does not fit in one cold read.** The first read was capped at 50 KB and stopped mid-Packet-#3 (~T54), so T132 was not in the returned text at all. Recovery required the file's own Locator (“T132–T144 = P7 … Search this file for the exact `T##` heading”) plus a grep to line 724/728 and a second, offset read. The file itself flags this (“this register outgrew a single cold read (naive-use FAILs at 112 and 131 entries)” and a §8 split “migrates in the next library cycle”) — a cold reader who only reads top-down would fail or take far longer.
- **“(RSVP replacement)” in the heading nearly misleads.** It invites reading T132 as RSVP / a Spritz variant. INDEX.md's adoption note and the Packet #7 section preamble both have to correct that: “T132 is serial presentation, NOT a Spritz-variant (centre anchoring measured — no optimal-recognition-point pivot, no pivot highlighting)”. The Mechanics line itself also separates “serial presentation” from “kinetic typography proper”. Without those two cautions, the heading alone points the wrong way.
- **Timestamp precision differs by surface.** TECHNIQUES.md: 03.00–38.04. VIEWS.md: 0:03–0:38 (rounded, no hundredths). INDEX.md gives no T132 timestamp. A reader who stops at VIEWS.md would report a less precise span and miss the “138 word onsets” qualifier, which is only in TECHNIQUES.md.
- **Evidence denominator mismatch risk.** INDEX.md describes the packet's `onset-table.csv` as “179 rows: onset · dwell · content · instantaneous wpm”, while the T132 entry cites `onset-table.csv (all 138 word rows)`. Both can be true (179 packet rows vs 138 word onsets for this technique), but nothing on the T132 line explains the difference — a cold reader could think one number is wrong.
- **`transcript.txt` is listed with the frames.** In the Feeds line it sits in the same evidence string as the two `ev/*.jpg` frames and the CSV, with no label distinguishing frame / data record / text record. Q5's wording (“frame filenames / data records”) is the only hint that the list is mixed-type.
- **ASSETS.md is a near-miss trap for this technique.** AS-54 “Experiential proof” cites “P7 §3 T01 (03.00–38.04)” — the same packet-local number and timestamps as T132 — but AS-54 is a different library item (an asset, not the technique). A reader scanning ASSETS.md first could easily report AS-54 as the answer to Q1/Q4.
- **Name collisions in the neighbourhood.** T133 is also called “Countdown pre-announcement…” (near-identical to P5's T110 “Countdown pre-announcement”), and T132/T134/T135 all share the word stream, overlapping timestamps, and the same `onset-table.csv`. Only the library number + packet-local number together pin the right entry.
- **Obligation is split across three places that must be reconciled.** Heading: “◆ — OWED #65”; tier register: DESCRIBED — OWED #65 with the classification rationale; INDEX.md: only the aggregate “7 OWED at queue #65–#71”. No single surface states tier + queue + rationale in one place; Q6 requires joining all three.
- **Feeds vs container-view terminology.** VIEWS.md's regeneration note says “repeat-after-me placements map to the Word animation view, its container family”, and Packet #7's consumer in INDEX.md is “the assembler's repeat-after-me and word-animation containers”. That makes it briefly ambiguous whether T132's container is repeat-after-me or word animation. The TECHNIQUES.md Feeds field settles it — word animation only — and VIEWS.md in fact lists it only there, but the cross-references cost a re-check.
- **ASSETS.md contributed nothing and cost a full read.** It was one of the four parallel first reads (~30 KB) and contains no T132 entry. For this specific lookup it was pure overhead, though it did provide the AS-54 corroboration / trap noted above.
- **No backtrack on the answers themselves:** once the grep located line 728, the heading, Mechanics, and Feeds lines (728–730) answered Q1, Q2, Q3, Q4, and Q5 directly, and the tier register (line 75) + heading answered Q6. All six were cross-checked against VIEWS.md and INDEX.md with no contradictions except the timestamp rounding noted above.
