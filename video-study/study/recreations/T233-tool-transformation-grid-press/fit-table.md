# T233 — fit-table (guard-measured-fit) · final build sha 0cac34f4…

Instrument: PIL rendered measurement, stand-in font **DejaVu Sans Bold** (`/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf`) — PROXY rows (this seat has no browser binary). Stage 640 px; phone stage 360 px (scale 0.5625). Measured = PIL `getbbox` ink bounds of the actual CONFIG strings at the CONFIG font sizes, AFTER the fit cure below.

| Element | CONFIG font | String | Measured ink @640 (w×h) | Ink @360 stage | Container | Margin | Verdict |
|---|---|---|---|---|---|---|---|
| inputLabel | labelFontPx 30 | TOMATO PINCUSHION | 366×22 | 205.9×12.4 | stage width 640 | 137 px/side @640 | OK (≥11 px floor) |
| toolLabel | toolLabelFontPx 28 | GRID PRESS | 188×20 | 105.8×11.2 | tool span 364 px (grid 252 + handles 2×56), centred on subjectCx 300 | binding side horizontal: (364−188)/2 = 88 px/side @640 (49.5 px/side @360) | OK |
| outputLabel | labelFontPx 30 | DICED TOMATO | 257×22 | 144.6×12.4 | stage width 640 | 192 px/side @640 | OK |
| swap inputLabel | labelFontPx 30 | ONION | 112×22 | 63.0×12.4 | stage width 640 | 264 px/side | OK |
| swap outputLabel | labelFontPx 30 | DICED ONION | 226×22 | 127.1×12.4 | stage width 640 | 207 px/side | OK |

**Cure recorded:** at the Plan defaults (labelFontPx 21 / toolLabelFontPx 16) the measured ink heights @360 were 8.4 px / 6.8 px — below the ~11 px legibility floor (guard check 3). Cured in CONFIG only (21→30, 16→28) before the prewave; re-measured rows above. Hierarchy: no size hierarchy is claimed between the labels (different acts); measured ratio 30:28 ≈ 1.07 is printed, not claimed as hierarchy.

## Vertical accounting — toolLabel row (Cycle 041 completion, A12.3 cure 4)
The tool label rides the grid group: its SVG baseline is `gy − toolLabelDyPx` where `gy = subjectCy − gridH/2 + gridOffsetY` (subjectCy 188, gridH 216, toolLabelDyPx 12) on the 640×400 stage — baseline = `68 + gridOffsetY`. PIL ink for "GRID PRESS" @28 (re-measured this cycle, identical to the row above): 188×20, ink spanning baseline−20 → baseline. Instrument: harness `stateAt` samples (gridOffsetY) + PIL ink height; builder's priced choice under cure 4: **record the intended visibility interval + measured clearance** (no re-anchor — the label is the press's nameplate; its intended act is the press descent + hold, and it exits with the tool as the grid lifts, which is the tool leaving the stage, not a label defect).

| t (ms) | gridOffsetY | baseline | ink interval (top→bottom) | Vertical state |
|---|---|---|---|---|
| 0–2000 | −170 | −102 | −122 → −102 | fully above stage (grid raised, pre-press) |
| 2500 | −85 | −17 | −37 → −17 | above stage (press mid) |
| 2553 | −67.94 | +0.06 | −19.94 → +0.06 | ink enters stage (bottom edge crosses y=0) |
| ≈2625 | ≈−48 | ≈+20 | ≈0 → ≈+20 | **fully visible from here** (ink top reaches y=0) |
| 3000–3250 | 0 | +68 | +48 → +68 | fully visible; top clearance 48 px, bottom clearance 332 px |
| ≈3392 | ≈−48 | ≈+20 | ≈0 → ≈+20 | fully visible until here (lift carries it back up) |
| 3441 | −67.98 | +0.02 | −19.98 → +0.02 | ink exits stage |
| 3500–7000 | −76.5 | −8.5 | −28.5 → −8.5 | above stage (tool withdrawn; reveal/gather/bowl acts carry no tool label) |

**Intended visibility interval (priced):** fully visible ≈2625–3392 ms (late press descent → hold → early lift), partially visible 2553–2625 and 3392–3441 ms; vertical clearance over the fully-visible interval ranges 0 px (at the crossing edges, by construction) to **48 px top / 332 px bottom at press bottom + hold**, measured from the filed samples above. Outside that interval the label's absence is the priced design (nameplate rides its tool), recorded here so no later read prices it as unaccounted clipping.

HIT list: **empty (0 HITs)** after the cure — horizontal rows re-measured identical at Cycle 041 (TOMATO PINCUSHION 366×22 · GRID PRESS 188×20 · DICED TOMATO 257×22 · ONION 112×22 · DICED ONION 226×22, PIL DejaVu Sans Bold PROXY) and the tool-label vertical edge is now accounted above.
