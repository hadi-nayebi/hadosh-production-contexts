# T238 — fit-table (guard-measured-fit) · final build sha 3f6dba31…

Instrument: PIL rendered measurement, stand-in font **DejaVu Sans Bold** (`/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf`) — PROXY rows (this seat has no browser binary). Stage 640 px; phone stage 360 px (scale 0.5625). Measured = PIL `getbbox` ink bounds of the actual CONFIG strings at the CONFIG font sizes.

| Element | CONFIG font | String | Measured ink @640 (w×h) | Ink @360 stage | Container | Margin | Verdict |
|---|---|---|---|---|---|---|---|
| inputLabel | labelFontPx 30 | DICE · HOUSES · CUBES | 393×22 | 221.1×12.4 | stage width 640 | 124 px/side @640 | OK (≥11 px floor) |
| toolLabel | toolLabelFontPx 28 | PESTLE MASH | 219×20 | 123.2×11.2 | stage width 640 | 210 px/side @640 | OK |
| outputLabel | labelFontPx 30 | GUACAMOLE | 211×22 | 118.7×12.4 | stage width 640 | 214 px/side @640 | OK |
| swap inputLabel | labelFontPx 30 | BUTTONS · BEADS · COINS | 444×22 | 249.8×12.4 | stage width 640 | 98 px/side @640 | OK |
| swap outputLabel | labelFontPx 30 | PÂTÉ | 81×27 | 45.6×15.2 | stage width 640 | 280 px/side @640 | OK |

Hierarchy: no size hierarchy is claimed between the labels (different acts, exclusive ownership per labelSwitchF); measured ratio 30:28 ≈ 1.07 is printed, not claimed as hierarchy.

## Positioned proxy bounds at the 360 px stage (prewave-cure addition — fitted element + container geometry)

Stage at phone width: 360×225 (scale 0.5625). Baselines from CONFIG: input/output labels at `bowlCy + outputLabelDy/inputLabelDy` = 336 @640 → 189.0 @360; toolLabel at `bowlCy + toolLabelDy` = 62 @640 → 34.9 @360. Ink top = baseline − ink ascent offset (PIL getbbox rel. baseline: −22 px @30 font, −20 px @28 font, −27 px for PÂTÉ's accent). Halo = labelHaloPx 4 @640 = 2.25 @360, deducted from clearances.

| Element | Baseline @360 | Ink bounds @360 (top–bottom) | Container | Top clearance (halo-adj.) | Bottom clearance (halo-adj.) |
|---|---|---|---|---|---|
| inputLabel | 189.0 | 176.6–189.0 | stage 360×225 | 176.6 (174.4) | 36.0 (33.8) |
| toolLabel | 34.9 | 23.6–34.9 | stage 360×225 | 23.6 (21.4) | 23.6 to bowl top edge @58.5 (21.4) |
| outputLabel | 189.0 | 176.6–189.0 | stage 360×225 | 176.6 (174.4) | 36.0 (33.8) |
| swap inputLabel | 189.0 | 176.6–189.0 | stage 360×225 | 176.6 (174.4) | 36.0 (33.8) |
| swap outputLabel (PÂTÉ) | 189.0 | 173.8–189.0 | stage 360×225 | 173.8 (171.6) | 36.0 (33.8) |

All clearances positive with the halo accounted; no label ink crosses its container or the bowl edge.

HIT list: **empty (0 HITs)**.

## Cycle 042 completion re-verification (2026-11-19, final build sha 3f6dba31… — build unchanged)
PIL re-measurement with the same instrument (DejaVu Sans Bold, `/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf`) reproduced every filed ink bound exactly: inputLabel 393×22 · toolLabel 219×20 · outputLabel 211×22 · swap inputLabel 444×22 · swap outputLabel 81×27. Positioned bounds and clearances stand as filed (no label geometry touched). HIT list: **empty (0 HITs)** — re-verified.
