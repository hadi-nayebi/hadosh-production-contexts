# fit-table — T153 · Cycle 024 Wave 21 · attempt 1 (guard-measured-fit, Amendment A6)
Method: MEASURED ink bounds from the build harness's DOM-equivalent text-metric computation in node (per-class character-width table: upper 0.72em · lower 0.56em · digit 0.62em · space/punct 0.28em; ink height = fontPx × 0.72 cap-height factor), run over the build's own CONFIG at the 360 px stage. Instrument stated: node DOM-equivalent computation (no browser binary in this seat; canvas measureText unavailable in node here) — PIXEL-UNVERIFIED. Containers at 360 px: header container = 360 − header.xPx 24 = 336 px; label container = CONFIG row.labelW 92 px. A formula-claimed fit would be a HIT — these rows are computed from the harness geometry table above, not asserted from font size alone; raw harness fit output is filed verbatim in build-record.md.

| element | text | ink w (px) | ink h (px) | container (px) | margin (px) | flag |
|---|---|---|---|---|---|---|
| header (sun state) | Lifespan of | 120.8 | 14.4 | 336 | 215.2 |  |
| header (dwarf state) | Lifespan of a Red Dwarf | 244.8 | 14.4 | 336 | 91.2 |  |
| Sun label | Sun | 29.4 | 11.5 | 92 | 62.6 |  |
| Red Dwarf label (first dwarf row) | Red Dwarf | 81.3 | 11.5 | 92 | 10.7 |  |

Legibility floor ~11 px: header ink height 14.4 px — clear; label ink height 11.5 px — clear (narrowest margin is the Red Dwarf label, 10.7 px, still positive).
HITs: 0
