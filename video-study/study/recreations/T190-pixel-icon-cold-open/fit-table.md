# fit-table — T190 pixel-icon cold open (guard-measured-fit, A6 pre-wave leg; cured form after jev-prewave HOLD finding 2)

Method: PIL glyph measurement with DejaVu Sans Mono as the Courier-class monospace stand-in (fleet precedent T57: stand-in font, post-fit wrapped geometry, PIXEL-UNVERIFIED — no browser route from this seat). Font: DejaVuSansMono.ttf at CONFIG `captionFontPx` 28; measured advance 16.8594 px → factor 0.6021 (CONFIG carries 0.6023). Each row is a POST-LAYOUT measurement: the line as the build's `captionLayout` actually lays it out (word-boundary two-line split minimizing the longest line; fit-shrink of fontPx when the best split still exceeds avail), rendered to a bitmap and measured (ink bbox). Container avail = stageWPx 640 − 2×captionPadPx 6 = 628 px. Ink height also printed at the 360 px stage (×360/640). Raw measurement output is filed verbatim in build-record.md.

| element (layout line) | container | measured ink bounds | container bounds | margin (binding side) |
|---|---|---|---|---|
| L1 line 1 "MORE THAN 430 MILLION PEOPLE" | caption band | 470 px wide · ink height 20 px (11.25 @360) | 628 px avail · band 64 px | 158 px |
| L1 line 2 "WITH DISABLING HEARING LOSS" | caption band | 453 px · 20 px (11.25 @360) | 628 px · band 64 px | 175 px |
| L2 line 1 "RELY ON CAPTIONS TO" | caption band | 318 px · 20 px (11.25 @360) | 628 px · band 64 px | 310 px |
| L2 line 2 "WATCH MOVIES AND SHOWS" | caption band | 369 px · 20 px (11.25 @360) | 628 px · band 64 px | 259 px |
| BLANK (6000–8000 ms) | caption band | no ink (scheduled blank) | — | — |
| L3 line 1 "HOWEVER, THE CURRENT CAPTIONING" | caption band | 521 px · 24 px (13.50 @360) | 628 px · band 64 px | 107 px |
| L3 line 2 "SYSTEM HAS SEVERAL SHORTCOMINGS" | caption band | 520 px · 20 px (11.25 @360) | 628 px · band 64 px | 108 px |
| L4 line 1 "THAT CAN MAKE THE VIEWING" | caption band | 421 px · 20 px (11.25 @360) | 628 px · band 64 px | 207 px |
| L4 line 2 "EXPERIENCE FRUSTRATING" | caption band | 368 px · 20 px (11.25 @360) | 628 px · band 64 px | 260 px |
| L5 "FOR DEAF AUDIENCES" (1 line) | caption band | 299 px · 20 px (11.25 @360) | 628 px · band 64 px | 329 px |
| swap L3 line 1 (71-char case, fitted fontPx 27.4) | caption band | 625 px · 24 px (13.50 @360) | 628 px · band 64 px | 3 px |
| swap L3 line 2 (fitted fontPx 27.4) | caption band | 525 px · 20 px (11.25 @360) | 628 px · band 64 px | 103 px |

Legibility floor (~11 px at 360 px stage): every measured line's ink height at 360 px is 11.25–13.50 px — PASS (floor met, thin margin +0.25 px on caps-only lines; the readability lens prices legibility in motion, which this leg does not own).
Two-line stack: 2 × 28 × 1.1 (CONFIG line-height factor) = 61.6 px ≤ 64 px usable band — fits with 2.4 px margin. (Band accounting corrected at the post-HOLD cure: the caption box is content-box, so the usable band is the full `captionSafeBandPx` 64 px and the box totals 64 + 18 bottom offset = 82 px; rendered text top = 280.4 px vs the icon sweep's max bottom 279.8 px — 0.6 px clearance. The border-box form priced by jev-prewave's second HOLD left only 46 px usable and did not fit; that form is cured in the filed build.)
Hierarchy: single caption slot, one size per caption (fit-shrink varies it by ≤0.6 px across captions) — no hierarchy claimed, none to measure.

Icon geometry (renderer-matching projected bounds, HOLD cure 2 — `boundsFor` projects the map corners through CONFIG perspective + rotateY exactly as the renderer transforms them): at the camera scale peak (9500 ms) top −48.3 px (intentional top-edge crop, census f010) · bottom 264.3 px vs band limit 296 px. Whole-timeline sweep on a 100 ms grid (139 samples): max bottom 279.8 px, 0 band violations; min top −63.8 px (turn excursions only).

**HIT list: EMPTY — leg PASS (advisory).** (First-run form of this leg carried formula-estimated rows; jev-prewave HOLD finding 2 priced them as unsupported and they were replaced by the measured rows above before scoring.)

**Completion re-confirmation (Cycle 036 Wave 33, Amendment A12.3):** this table is confirmed against the post-HOLD cured build — recreation.html 14,989 B · sha256 `1996454c4c69593c85b4de1aea4770c27981b0f9e690963d3b12bfe81ea78a23`. A fresh PIL measurement run (DejaVu Sans Mono stand-in, same instrument as above) executed in the completion reproduced every row; raw output filed as Receipt R7 in build-record.md's completion section (swap line 1 measured 624 px fresh vs 625 px filed — 1 px fractional-size rendering difference, margin 4 px; all rows PASS, legibility floor met). HIT list stands EMPTY — leg PASS (advisory).
