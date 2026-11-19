# Naive-use test — T75 (clock-stamp HUD chaptering) — cold reader report

- Reader: cold reader subagent, no prior sight of this library
- Surface restriction honoured: answers taken ONLY from INDEX.md, TECHNIQUES.md, VIEWS.md, ASSETS.md (all in `hidden_files/study/style-library/`) plus the ONE recreation `scores.md` the surface points to for T75. No packet files, job files, or other run records were opened for answers. (System-required AGENTS.md house-rule files in the touched directories were read on entry per runtime instruction; they contain no T75 content and were not used for any answer.)
- Start epoch: 1794759378 (`date +%s`, 2026-11-15T16:16:18+00:00)
- End epoch (all answers in hand): 1794759465 (`date +%s`, 2026-11-15T16:17:45+00:00)
- **Elapsed: 87 seconds**
- Result: **SUCCESS — all six answers located from the surface**

## Path taken (files / sections opened, in order)

1. `INDEX.md` (full read) — packet register; Packet #4 identified, Cycle-010 note confirming T75 moved to RECREATED.
2. TECHNIQUES.md / VIEWS.md / ASSETS.md / INDEX.md — searched for `T75` (grep, head-capped). TECHNIQUES tier register line 44 and §T75 at line 411 surfaced; VIEWS lines 70 and 115 surfaced; ASSETS: no T75 hit.
3. `TECHNIQUES.md` offset 405, lines 405–429 — full T75 entry under "Packet #4 techniques (T74–T98)", plus packet-key header (line 3, via grep) defining P4.
4. `VIEWS.md` offset 60, lines 60–124, then offset 1, lines 1–60 — confirmed T75's two view listings and which section each belongs to: Transitions (line 70) and Diagrams (line 115).
5. `ASSETS.md` — searched for `T75` / `Clock-stamp` / `HUD`: no entry. T75 is not an ASSETS item.
6. Recreation `scores.md` pointed to by TECHNIQUES.md T75 entry — `hidden_files/study/recreations/T75-clock-stamp-hud-chaptering/scores.md` (full read) — verdict and lens scores.

## Answers

### (1) One-line mechanics
Every frame carries the same top-left furniture — a year line ("2037 · A POSSIBLE TUESDAY") above a large diegetic clock; chapters begin exactly on the clock's turns, so a persistent stamp carries the segmentation.
— TECHNIQUES.md, T75 entry, "Mechanics:" line. VIEWS.md short forms agree: "persistent stamp carries the segmentation" (Transitions) and "year line + diegetic clock on every frame" (Diagrams).

### (2) Feeds / containers
**diagram · transition** — TECHNIQUES.md T75 "Feeds:" field. In VIEWS.md the technique is correspondingly listed under both the **Transitions** view and the **Diagrams** view.

### (3) Packet + timestamps
- Packet: **Packet #4 (P4)** — in-packet numbering **P4 T02**
- Packet path (from INDEX.md and the TECHNIQUES.md packet key): `hidden_files/study/video-digests/2026-11-15-yt-jkdbk8qfcyY/`
- Specimen: "A Day in 2037 With Superintelligence" — The Good Takeoff, YouTube, posted 2026-11-11 · 620 s (INDEX.md, Catalogued packets, #4)
- Timestamps: **P4 throughout** — no narrower time window is given in TECHNIQUES.md or VIEWS.md for T75; the surface cites it as present throughout the packet.

### (4) Exact frame filenames
From TECHNIQUES.md T75 "Feeds:" line (frames live in the packet's `ev/` directory):
- `ev/t12.jpg`
- `ev/t81.jpg`
- `ev/t191.jpg`
- `ev/t312.jpg`

### (5) Tier
**RECREATED** — attempt 1 (recreation Wave 11). TECHNIQUES.md tier register (line 44) and T75 entry both state RECREATED, moved at style-library Cycle-010; the entry heading still carries its former owed marker "◆ — OWED #36".

### (6) Recreation artifact + scores.md verdict (RECREATED, so required)
- Recreation directory (as printed in TECHNIQUES.md): `hidden_files/study/recreations/T75-clock-stamp-hud-chaptering/`
  - Full path: `~/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T75-clock-stamp-hud-chaptering/`
  - Consumed artifact named on the surface: `recreation.html` + `scores.md`
- scores.md (attempt 1, Cycle 013 Wave 11) verdict:
  - **Average: 85.2**
  - **Minimum: 76**
  - **Verdict: PASS** — scores.md prints "**VERDICT: PASS — tier RECREATED**"; bar stated as average ≥ 85 AND minimum ≥ 70 (85.2 ≥ 85 ✓ · 76 ≥ 70 ✓)
  - Lens scores behind the arithmetic (sum 426 / 5 = 85.2): motion 82 · timing 90 · purity 100 · reusability 76 · readability 78

## Naive-use notes
- The TECHNIQUES.md locator (T74–T98 = P4, "Packet #4 techniques" section) and the exact-heading search made T75 findable in well under two minutes.
- The only friction: T75's timestamp is only "throughout" — a cold reader cannot narrow it further from the surface, and must infer frame times, if wanted, from the frame filenames themselves (t12 / t81 / t191 / t312).
- ASSETS.md contributes nothing for T75 (no hit) — not a blocker; all six answers were complete from INDEX + TECHNIQUES + VIEWS + the pointed-to scores.md.
