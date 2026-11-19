# fit-table — T153 · Cycle 019 Wave 18 · attempt 2 (guard-measured-fit, Amendment A-C008 leg)
Method: MEASURED ink bounds from the build harness's DOM-equivalent text-metric computation in node (per-class character-width table: upper 0.72em · lower 0.56em · digit 0.62em · space/punct 0.28em; ink height = fontPx × 0.72 cap-height factor), run over attempt 2's own CONFIG at the 360 px stage. Instrument stated: node DOM-equivalent computation (no browser binary in this seat) — PIXEL-UNVERIFIED. Containers at 360 px: header container = 360 − header.xPx 24 = 336 px; label container = CONFIG row.labelW 92 px. Attempt 2 changed schedule keys only — text elements, fonts, and geometry are unchanged from attempt 1, and the table below is re-measured on the attempt-2 CONFIG (header states now sampled at the new swapMs 11000: sun state displayed 0–11000 ms, dwarf state from 11000 ms; both states measured).

| element | text | ink w (px) | ink h (px) | container (px) | margin (px) | flag |
|---|---|---|---|---|---|---|
| header (sun state) | Lifespan of | 120.8 | 14.4 | 336 | 215.2 |  |
| header (dwarf state) | Lifespan of a Red Dwarf | 244.8 | 14.4 | 336 | 91.2 |  |
| Sun label | Sun | 29.4 | 11.5 | 92 | 62.6 |  |
| Red Dwarf label (first dwarf row) | Red Dwarf | 81.3 | 11.5 | 92 | 10.7 |  |

Legibility floor ~11 px: header ink height 14.4 px — clear; label ink height 11.5 px — clear (narrowest margin is the Red Dwarf label, 10.7 px, still positive). Row containment: stage min-height derives from CONFIG as firstRowYPx + (1+dwarf.rows)×(heightPx+gapPx) = 84 + 9×24 = 300 px (asserted in the own-check suite), so all nine rows hold inside the stage at phone width.
HITs: 0
