# fit-table — T154 · Cycle 024 Wave 21 · attempt 1 (guard-measured-fit, Amendment A6)
Method: glyph-ink geometry from the build harness's per-class character-width table (upper 0.72em · lower 0.56em · digit 0.62em · space 0.32em · punct 0.28em) at the 360 px stage (design px / 2), run in node over the build's own CONFIG + generated feed text (harness output filed verbatim in build-record.md). Ink height = cap height 0.72em, plus descender depth 0.21em where the string carries a descender glyph (g j p q y) — the canvas measureText actualBoundingBox (ascent + descent) equivalent; instrument: node logic harness (DOM-free text metrics, canvas measureText equivalent) — no browser binary in this seat; PIXEL-UNVERIFIED.
Containers: axis label — the axis strip beside the ellipse (110 px at 360 stage); "Humans" callout — the label zone above the P1 column inside the ellipse (150 px); feed lines — feed.boxW 320 design px = 160 px at 360 stage, right-bottom stack.

| element | ink w (px) | ink h (px) | container w (px) | margin (px) | flag |
|---|---|---|---|---|---|
| axis label "Time" | 38.4 | 11.5 | 110 | 71.6 |  |
| entrant label "Humans" | 56.3 | 11.5 | 150 | 93.7 |  |
| feed "Player 1 joined" | 105.8 | 12.1 | 160 | 54.2 |  |
| feed "Player 1 left" | 91.3 | 12.1 | 160 | 68.7 |  |
| feed "Player 2 joined" | 105.8 | 12.1 | 160 | 54.2 |  |
| feed "Player 2 left" | 91.3 | 12.1 | 160 | 68.7 |  |
| feed "Player 3 joined" | 105.8 | 12.1 | 160 | 54.2 |  |
| feed "Player 4 joined" | 105.8 | 12.1 | 160 | 54.2 |  |
| feed "Player 5 joined" | 105.8 | 12.1 | 160 | 54.2 |  |
| feed "Player 6 joined" | 105.8 | 12.1 | 160 | 54.2 |  |
| feed "Player 7 joined" | 105.8 | 12.1 | 160 | 54.2 |  |
| feed "Player 8 joined" | 105.8 | 12.1 | 160 | 54.2 |  |
| feed "Player 9 joined" | 105.8 | 12.1 | 160 | 54.2 |  |

Feed overflow check: at maxLines 6 the stack height is 6 × (lineH 32/2) = 96 px at the 360 px stage against the 202.5 px stage height — no overflow; every visible line's ink width (max 105.8 px) fits the 160 px feed box with ≥54.2 px margin. Feed fontPx is 13 px at the 360-scaled stage per the RUN §2b binding value (CONFIG feed.fontPx 26 design px).
Legibility floor ~11 px: smallest ink height 11.5 px (axis + Humans labels) — clear; feed lines 12.1 px — clear.
HITs: 0
