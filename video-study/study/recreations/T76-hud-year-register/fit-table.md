# T76 — measured-fit leg (guard-measured-fit) · fit-table.md

Build bound: recreation.html sha256 2111a898988054b7f06e3d6b39ceb33c3a981faee76df3c3e0a27da091fc33f3 · Stage: 360 px wide (CONFIG stage.width) · HUD left offset 12 px (geom.hudLeft) · usable row width = 360 − 12 − 12 = 336 px.
Measurement instrument (stated, per the leg's definition): a node-harness geometry model — ink width = Σ per-glyph advances from the named font's metric ratios (Verdana caps/digits ≈ 0.60 em average advance; Georgia digits 0.556 em, colon 0.278 em) + CONFIG letter-spacing; ink height = font size × cap-height ratio (Verdana 0.716, Georgia 0.692). Post-fit geometry estimates from font metrics at the 360 px stage — the same instrument class as the lane's prior fit tables. PIXEL-UNVERIFIED (no browser binary in this seat).

| Element | Content | Container | Measured ink width | Measured ink height | Binding margin | Verdict |
|---|---|---|---|---|---|---|
| #yearLine | "2037 · A POSSIBLE TUESDAY" (25 glyphs, Verdana 16 px, spacing 1 px) | HUD row, 336 px usable | 25 × (0.60×16 + 1) ≈ 265 px | 0.716 × 16 ≈ 11.5 px | 336 − 265 = 71 px | FIT · ink ≥ ~11 px floor |
| #clock | "12:00" (Georgia 34 px) | HUD clock row, 336 px usable | 4 × (0.556×34) + 0.278×34 ≈ 85.1 px | 0.692 × 34 ≈ 23.5 px | row total (clock 85.1 + gap 8 + tick 34) ≈ 127.1 px → margin ≈ 208.9 px | FIT |
| #cardStatus | "ALREADY BEING BUILT" (19 glyphs, Verdana 16 px, spacing 1 px) | card inner width = cardW 252 − padding 20 − accent bar 3 = 229 px | 19 × (0.60×16 + 1) ≈ 201.4 px | 0.716 × 16 ≈ 11.5 px | 229 − 201.4 ≈ 27.6 px | FIT · ink at floor |
| #cardPlace | "UK · 2026" (9 glyphs, Verdana 17 px) | card inner width 229 px | 9 × (0.60×17) ≈ 91.8 px | 0.716 × 17 ≈ 12.2 px | 229 − 91.8 ≈ 137.2 px | FIT |
| #tick (non-text subject element) | progress line + dot, width = geom.tickWidthPx 34 px | clock row | 34 px (CONFIG-bound) | 2 px line + 6 px dot (geom) | inside row margin above | FIT |

Hierarchy check (guard §4): clock ink height 23.5 px vs year-line ink height 11.5 px → measured ratio ≈ 2.04 (the HUD's claimed size hierarchy is real, not hue-only). Card status vs place claim NO size hierarchy (11.5 vs 12.2 px, near-equal by design — status leads by position + accent color); no hierarchy is asserted there, so no hue-only hierarchy is presented as a size hierarchy. Card-vs-scene separation is an intensity claim, measured in CONFIG: scene container at intensity.sceneSeed 0.55 vs card/HUD at intensity.fg 1.0 during the seed state.

Pre-census cure recorded: the first fit pass over the draft CONFIG (yearPx 15 → ink ≈ 10.7 px; cardStatusPx 11 → ink ≈ 7.9 px; cardPlacePx 12 → ink ≈ 8.6 px) fell below the ~11 px floor on three elements; type sizes were raised in CONFIG (yearPx 16 · cardStatusPx 16 · cardPlacePx 17) and this table was re-measured on the final build.

Swapped-config fit (re-checked): swap cardPlace "FRANCE · 2031" (13 glyphs, Verdana 17 px) ≈ 13 × (0.60×17) ≈ 132.6 px ≤ 229 ✓; swap seedYear 2031 same digit geometry as the default year ✓.

## HIT list
**EMPTY — 0 HITs** (after the pre-wave type-size cure recorded above). Every subject text element carries a measured row; all ink heights clear the ~11 px floor; the one claimed size hierarchy is measured.
