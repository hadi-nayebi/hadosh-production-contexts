# Production record — Packet #13 (PES, Fresh Guacamole, dNJdJIwCF_Y)

Built by video-digestion Cycle-020 (runs/2026-11-17-cycle-020-pes-fresh-guacamole/RUN.md).

## Tier + counters
- Length tier (Amendment A3): 100.894 s ≤ 5 min → full census tier: 1 fps net (101 frames, frames/net-001..101.jpg) + evidence set (24 ev frames) + 7 clips.
- Scene census (ffmpeg scene-select, DISTINCT pts_time values — A9 cl.1): 31 candidate boundaries @0.35 · 83 @0.20. Threshold sensitivity is high on stop-motion (every frame-step change can fire @0.20); neither total is the shot count — true shot count UNVERIFIED, printed so in digest §4 (A11 cl.1 form).
- Speech census (A11 cl.2): faster-whisper base, array-fed, VAD filter — 0 segments returned over the full 100.894 s (asr-segments.json). Silence census (ffmpeg silencedetect −35 dB, ≥0.8 s): repeated near-silent gaps between performed action sounds (e.g. 0–4.45 s under the cards, 1.2–1.6 s gaps through the first 35 s). RMS census (0.25 s windows >3000): 11 windows, clustered at action accents (26.25 · 34.0–35.5 · 43.25 · 51.25 · 66.25–67.25 s).
- Counts re-counted from disk at close (A5 cl.2): techniques 16 · lessons 12 · ideas 7 · goods 6 · bads 6 · ev frames on disk 29 · ev frames cited in the catalogue 29 (every ev file cited at least once; count includes the §5 own-eyes cures — t064 relabelled to the bulb filament it actually shows, t067 houses-pile and t092 chip-dip extracted at their verified moments — and the jev-packet G1/G2 cures: t001/t099 PES cards and t089 accumulated-bowl state) · net frames 101 · clips 7.

## Beat enumeration (P-B4 — performed actions per episode; extraction checked against the census)
- S1 (0–7 s): PES card · title card · knife drawn across whetstone ×3 passes. Beats: 3.
- S2 (7–21 s): grenade selected from bowl · knife halving (flesh revealed) · twist-open (pit revealed) · pit lifted out · flesh spooned into molcajete ×2 scoops. Beats: 6.
- S3 (21–39 s): baseball taken from bowl · outer skin peeled (white core) · ball set on board · slices ×3 · slices land as a dice stack · chops multiply dice ×4 stages · hands gather tiny dice · dice sprinkled into molcajete. Beats: 8.
- S4 (39–46 s): pincushion selected · pins removed · pincushion set in grid cutter · press-through (red cubes) · cubes gathered · cubes added to molcajete. Beats: 6.
- S5 (46–54 s): golf ball rolls in · hand stops it · ball halved (lime face) · half set in citrus press · squeeze over molcajete. Beats: 5.
- S6 (54–67 s): bulb picked from the tree · bulb set on board · bulb opened · filament "seeds" picked out · chopping — pieces land as green Monopoly houses · houses gathered · houses added. Beats: 7.
- S7 (67–80 s): white pawn ground over bowl · black pawn ground over bowl · pestle mashes ×4 strokes (objects → paste). Beats: 6 (mash strokes counted as one compound beat with 4 intra-beats).
- S8 (80–100.9 s): serape unrolled · bowl set on plate · poker chips scattered · chip dipped (breaks) · end card · PES card. Beats: 6.
Total performed-action beats: 47 over 100.894 s ≈ 0.47 beats/s average; per-episode rates in digest §4.

## Boundary mapping (P-B5 — census/visual cue per boundary)
- S1→S2 at ~7 s: title card ends; cue = first ingredient introduction (bowl of grenades, hand enters). Scene census boundary at 6.916 s.
- S2→S3 at ~21 s: cue = avocado's contribution released into the molcajete; next ingredient introduced (bowl of baseballs). Census boundaries 20.875 / 21.875 s bracket it.
- S3→S4 at ~39 s: cue = dice sprinkled into the molcajete; pincushions enter frame. Census 38.083 / 39.666 s.
- S4→S5 at ~46 s: cue = red cubes released into the molcajete; golf ball rolls in. Census 44.916–46.917 s cluster.
- S5→S6 at ~54 s: cue = squeeze completed over the bowl; cut to the tree (new location — the film's only location change). Census 54.125 s.
- S6→S7 at ~67 s: cue = houses released into the molcajete; chess pawns enter. RMS accent cluster ends 67.25 s.
- S7→S8 at ~80 s: cue = preparation→serving shift (mash complete; empty table, serape unrolled). Census 76.167 / 82.458 s bracket the transition (the unroll itself is the boundary action).

## Shot list / frame uses (P-C1 — frames serving multiple requirements record each use)
- ev/t015-pit-reveal.jpg serves T05 (pit reveal) and T06 (the halved shell the spoon then works from).
- ev/t044-grid-press.jpg serves T10 (press-through) and §5 goods (the press is the film's one tool-transformation).
- ev/t084-plating-chips.jpg serves T16 (chip casting) and §4 tempo (S8's serving shift).
- All other ev frames serve the single entry that cites them.

## Clip table (Amendment A6, final form after P-C2)
| Entry | Ruling |
|---|---|
| T04 grenade halving | CLIP clips/grenade-halving.mp4 (9–16 s) — swap inside the knife pass |
| T09 dicing literalization | CLIP clips/baseball-dicing.mp4 (28–36 s) — multiplication is a sequence claim |
| T10 grid press | CLIP clips/pincushion-grid.mp4 (41–46 s) — press-through is continuous |
| T11 lime press | CLIP clips/golf-lime-press.mp4 (48–54 s) — halving reveal + squeeze sequence |
| T13 chop-to-houses | CLIP clips/bulb-chop-houses.mp4 (58–67 s) — how the change lands inside the chopping action (P-C2) |
| T15 pestle mash | CLIP clips/pestle-mash.mp4 (75–81 s) — identity collapse is the motion |
| T16 chip dip | CLIP clips/chip-dip.mp4 (89–95 s) — dip-and-break payoff timing (span corrected at §5 own-eyes: the dip lands at ~92 s) |
| T01, T02, T03, T05, T06, T07, T08, T12, T14 | NO-CLIP — state, reveal readable from the cited frame pair, or static composition; no order/timing claim |
