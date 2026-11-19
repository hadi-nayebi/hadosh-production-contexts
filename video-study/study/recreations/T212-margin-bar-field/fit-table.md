# T212 — fit table (A6 measured-fit leg) · final build sha256 05cf7ad79c95ff0146e212196b4ef3449c3741793797c6b049f52a5e17ac7e03

- **Instrument:** PIL rendered measurement (guard-measured-fit lawful form ii) — PROXY, stand-in font **DejaVu Serif** (`/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf`) at CONFIG `labelFontPx` = 28, ink bounds from `ImageFont.getbbox` (tight glyph ink), scaled to the 360 px stage by ×(360/640) = 0.5625. NOT a character-width×factor model: every row is a rendered-font measurement of the actual string.
- **Subject text elements:** the 50 rotated state labels are the build's only subject text (title is empty by specimen design; clock/controls are page chrome). Label container: the label strip below the baseline — strip height = stageH − baseline − 10 = 480 − 258 − 10 = 212 px; a label rotated −55° fits if its ink width ≤ strip / sin(55°) = **258.8 px** diagonal.
- **First-pass HIT (cured pre-filing):** at labelFontPx 20 / stageH 440 the minimum measured ink height at 360 px was **8.4 px** (below the ~11 px floor) — cured in CONFIG (labelFontPx 20→28, labelMinPx 20→28, stageH 440→480) and re-measured below on the final build.

| Row | Element | Measured ink (640 stage) | Ink @360 px | Container | Margin |
|---|---|---|---|---|---|
| 1 | Label "New Hampshire" (longest ink) | 231 × 27 px | 129.9 × 15.2 px | diagonal 258.8 px | 27.8 px |
| 2 | Label "North Carolina" | 214 × 21 px | 120.4 × 11.8 px | diagonal 258.8 px | 44.8 px |
| 3 | Label "South Carolina" | 213 × 21 px | 119.8 × 11.8 px | diagonal 258.8 px | 45.8 px |
| 4 | Label "Massachusetts" | 210 × 21 px | 118.1 × 11.8 px | diagonal 258.8 px | 48.8 px |
| 5 | Labels, minimum ink height (42 of 50 labels at this bound) | — × 21 px | — × 11.8 px (min over all 50: 11.2 px) | floor ~11 px @360 | ≥0.2 px |
| 6 | Swap-set labels (Alpha/Beta/Gamma/Delta/Epsilon/Zeta) | widths 64–109 px, heights 21–27 px | ink height 11.2–15.2 px | diagonal 258.8 px | ≥149.8 px |

- **Hierarchy check:** one text class only (state labels, uniform size by design — the specimen's labels are uniform); no hierarchy claim, no HIT.
- **HIT list: EMPTY (0 HITs)** on the final build.
