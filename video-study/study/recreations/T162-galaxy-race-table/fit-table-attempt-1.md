# fit-table — T162 · Cycle 025 Wave 22 · attempt 1 (guard-measured-fit, Amendment A6)
Method: glyph-ink geometry from the build harness's per-class character-width table (upper 0.72em · lower 0.56em · digit 0.62em · space 0.32em · punct 0.28em) at the 360 px stage (design px / 2), run in node over the build's own CONFIG (harness output filed verbatim in build-record.md). Ink height = cap height 0.72em plus descender depth 0.21em where the string carries a descender glyph (g j p q y) — the canvas measureText actualBoundingBox equivalent; instrument: node logic harness (DOM-free text metrics) — no browser binary in this seat; PIXEL-UNVERIFIED.
Subject text elements: ONE — the first marker's speech bubble (the technique's subject text, CONFIG-carried). Comparison labels are page furniture, excluded per RUN §2c.
Bubble sizing basis: CONFIG bubble.fontPx 15 is the size AT the 360 px stage; the SVG text renders at fontPx / renderScale = 30 design px, so the effective font at 360 px display width is exactly 15 px. Bubble box: boxW 250 design px = 125 px at the 360 px stage.

| element | ink w (px) | ink h (px) | container w (px) | margin (px) | effective font (px) | flag |
|---|---|---|---|---|---|---|
| bubble "Hello? Anyone?" | 110.4 | 13.9 | 125 | 14.6 | 15 |  |

Swap-text check: the §2 swap text "Anyone else?" measures ink width 95.4 px at the same stage — fits the same 125 px container (margin 29.6 px).
Legibility floor ~11 px: effective font 15 px — clear; measured ink height 13.9 px (the string carries the descender glyph "y") — clear.
HITs: 0
