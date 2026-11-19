# Naive-use test — T94 (cold reader)

- Tester role: cold reader, no prior sight of this library
- Timer start: 2026-11-15T22:40:05+00:00 (epoch 1794782405, recorded by `date +%s` before first surface read)
- Timer end / all six answers assembled: 2026-11-15T22:41:06+00:00 (epoch 1794782466)
- **Elapsed: 61 seconds** from first read to having all six answers (evidence gathering complete at the scores.md read; the final timestamp check followed immediately after the mandatory AGENTS.md compliance reads)
- Starting context used: ONLY the library surface files under `hidden_files/study/style-library/` (INDEX.md, TECHNIQUES.md, VIEWS.md, ASSETS.md), plus the ONE recreation artifact the surface pointed to for T94.

## Exact path taken (files opened, in order)

1. `hidden_files/study/style-library/INDEX.md`
2. `hidden_files/study/style-library/TECHNIQUES.md` — first read, capped at 50 KB; T94's full entry was not in this chunk (the Tier register line for T94 was visible)
3. `hidden_files/study/style-library/VIEWS.md` — opened in the same initial batch
4. `hidden_files/study/style-library/ASSETS.md` — opened in the same initial batch; not needed for T94's answers
5. House-rule compliance reads (not evidence sources, required by runtime on entering the folders): `~/workspace/AGENTS.md`, `~/workspace/goals/AGENTS.md`, `~/workspace/goals/diy-building-and-real-learning/AGENTS.md`, `~/workspace/goals/diy-building-and-real-learning/hidden_files/AGENTS.md`, `~/workspace/goals/diy-building-and-real-learning/hidden_files/study/AGENTS.md`, `~/workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library/AGENTS.md`
6. `hidden_files/study/style-library/TECHNIQUES.md` — continuation read at offset 412, which contains the Packet #4 techniques section and the full T94 entry
7. `hidden_files/study/recreations/T94-years-count-down-coda/scores.md` — the ONE recreation artifact followed, via the pointer in TECHNIQUES.md (Tier register + T94 entry)
8. House-rule compliance reads on entering the recreation tree (not evidence sources): `hidden_files/study/recreations/AGENTS.md`, `hidden_files/study/recreations/T94-years-count-down-coda/AGENTS.md`

No packet digest, no other recreation, and no other library file was opened.

## Answers

### 1. Full name and one-line mechanics — SUCCESS
- **Full name:** The years-count-down coda — heading in TECHNIQUES.md: "T94 — The years-count-down coda (P4 T21)"; Tier register short name: "years-count-down coda".
- **One-line mechanics (as printed in TECHNIQUES.md):** "the coda performs the fold-back visually — over the night city, year cards descend (2029, then 2026), the second carrying a timeline ruler with the little figure standing at its left end; the scenario counts down to the viewer's present."
- Cross-check in VIEWS.md (Endings): "year cards descend to the viewer's present".

### 2. Tier, and the recreation evidence for that tier — SUCCESS
- **Tier: RECREATED**
- **Evidence (TECHNIQUES.md Tier register and T94 entry, identical):** attempt 1 (recreation Wave 13): **89.8 average, min 82, PASS** — `hidden_files/study/recreations/T94-years-count-down-coda/scores.md` (moved Cycle-011; was DESCRIBED OWED #44)
- VIEWS.md (Endings) corroborates: "RECREATED (attempt 1: 89.8 PASS)".

### 3. Packet, timestamps in that packet, and exact frame filenames — SUCCESS, with the citation flag in §6 applying to one frame
- **Packet:** Packet #4 — **P4** = `hidden_files/study/video-digests/2026-11-15-yt-jkdbk8qfcyY/` — "A Day in 2037 With Superintelligence", The Good Takeoff, YouTube, posted 2026-11-11 · 620 s. Packet-local number: **P4 T21**. (Locator in TECHNIQUES.md: T74–T98 = P4; INDEX.md packet #4 row gives the same specimen and path.)
- **Timestamps:** **P4 @ 9:42–10:05**
- **Exact frame filenames as cited in the T94 entry:** `ev/t592.jpg`, `ev/t582.jpg`
- ⚠ `ev/t582.jpg` is NOT clean evidence — see §6. The technique's clean frame evidence is `ev/t592.jpg` only, per the flag.

### 4. Which container(s) it feeds (its Feeds) — SUCCESS
- **Feeds: ending** — only. (Printed identically in the T94 entry: "Feeds: ending — P4 @ 9:42–10:05"; VIEWS.md places T94 under Endings only.)

### 5. Recreation artifact: directory path the surface points to, and the verdict in its scores.md — SUCCESS
- **Directory the surface points to:** `hidden_files/study/recreations/T94-years-count-down-coda/` (consumed artifact named on the surface: recreation.html + scores.md)
- **Verdict in its scores.md:** **"VERDICT: PASS — tier RECREATED"**
  - Lens scores in scores.md: motion 89 · timing 94 · purity 100 · reusability 84 · readability 82 — sum 449, average 449/5 = **89.8**, minimum **82** (readability).
  - Bar as printed: average ≥ 85 AND minimum ≥ 70 → 89.8 ≥ 85 ✓ · 82 ≥ 70 ✓.
  - scores.md header identifies it as attempt 1, Cycle 015 Wave 13, and notes the tier move itself is the style-library job's act via the seat's hand-off.

### 6. Citation flag attached to the entry — SUCCESS
- **Yes — a citation flag is attached directly under the T94 entry in TECHNIQUES.md.** Its substance, quoted/paraphrased exactly from the entry:
  > ⚠ Citation flag (Cycle-010, on video-digestion Cycle-009 adoption, hand-off vd-2026-11-15-002): **ev/t582.jpg is disputed for this entry — the frame shows the pre-countdown night city (HUD 22:30), not the labeled "2029 card".** The technique stands on ev/t592.jpg + the adoption record's source-interval inspection (the coda's year display is a rapid count-down: 2028 at 585 s · 2026 at 586 s · ruler by 590 s). Correction is video-digestion's to file; the flag stands here until it lands.
- **Handling in this report:** ev/t582.jpg is therefore NOT treated as clean evidence anywhere above; in §3 it is listed only because the task asked for the exact filenames as cited, and it is marked flagged there and here. The clean frame evidence for T94 is ev/t592.jpg plus the packet's §3 description / adoption source-interval inspection named in the flag.
- Corroboration inside the followed recreation (not a second surface source): scores.md's "Catalogue-fidelity observation (G-T94-2)" independently states the cited frame is the pre-card night city (HUD 22:30) and that no 2029 card ever lands — the device is a rapid flip-count 2037→2026. This does not replace the surface flag; it agrees with it.

## Success / fail per answer

| # | Answer | Result |
|---|---|---|
| 1 | Full name + one-line mechanics | SUCCESS |
| 2 | Tier + recreation evidence (attempt, average, minimum lens value, PASS/FAIL) | SUCCESS — attempt 1, Wave 13, avg 89.8, min 82, PASS |
| 3 | Packet + timestamps + exact frame filenames | SUCCESS — P4, 9:42–10:05, ev/t592.jpg + ev/t582.jpg (flagged, see #6) |
| 4 | Feeds / container(s) | SUCCESS — ending only |
| 5 | Recreation directory + scores.md verdict | SUCCESS — `T94-years-count-down-coda/`, VERDICT: PASS — tier RECREATED |
| 6 | Citation flag quoted, flagged frame not treated as clean | SUCCESS — ev/t582.jpg disputed (pre-countdown night city, HUD 22:30, not the "2029 card") |

All six answers found from the surface + the one pointed-to recreation.

## Friction

1. **TECHNIQUES.md size cap (exact step: the first read of TECHNIQUES.md).** The first read was capped at 50 KB and stopped mid-Packet-#3 (at T69), before the Packet #4 section. The Tier register near the top already carried T94's tier, scores and scores.md pointer, so answers 2 and 5 were obtainable from chunk 1, but the full T94 entry (mechanics, Feeds, timestamps, frames, citation flag) required a second, offset read (offset 412). The file's own Locator line ("Search this file for the exact T## heading") assumes a searchable full-file view that the capped read does not give a cold reader.
2. **No other friction.** INDEX.md's Cycle-011 summary, the TECHNIQUES.md locator (T74–T98 = P4), the Tier register, and VIEWS.md's Endings line all agree on T94 (RECREATED, 89.8 PASS, P4 @ 9:42–10:05, ending). ASSETS.md was not needed and contained no T94 entry to reconcile.
