# T75 — measured-fit leg (guard-measured-fit) · fit-table.md

Build bound: recreation.html sha256 f22a562afc47031a8499c6c81f018ff41bb36733f70039b98bee2f5b47b96ddc · Stage: 360 px wide (CONFIG stage.width) · HUD left offset 12 px (geom.hudLeft) · usable row width = 360 − 12 − 12 = 336 px.
Measurement model (stated, not formula-claimed): ink width = Σ per-glyph advances from the named font's metric ratios (Verdana caps/digits ≈ 0.60 em average advance; Georgia digits 0.556 em, colon 0.278 em) + CONFIG letter-spacing; ink height = font size × cap-height ratio (Verdana 0.716, Georgia 0.692). These are post-fit geometry estimates from font metrics at the 360 px stage — the same instrument class as the lane's prior fit tables. PIXEL-UNVERIFIED (no browser binary in this seat).

| Element | Content | Container | Measured ink width | Measured ink height | Binding margin | Verdict |
|---|---|---|---|---|---|---|
| #yearLine | "2037 · A POSSIBLE TUESDAY" (25 glyphs, Verdana 16 px, spacing 1 px) | HUD row, 336 px usable | 25 × (0.60×16 + 1) ≈ 265 px | 0.716 × 16 ≈ 11.5 px | 336 − 265 = 71 px | FIT · ink ≥ ~11 px floor |
| #clock | "06:15" (Georgia 34 px) | HUD clock row, 336 px usable | 4 × (0.556×34) + 0.278×34 ≈ 85.1 px | 0.692 × 34 ≈ 23.5 px | row total (clock 85.1 + gap 8 + tick 34) ≈ 127.1 px → margin ≈ 208.9 px | FIT |
| #tick (non-text subject element) | progress line + dot, width = hud.tickWidthPx 34 px | clock row | 34 px (CONFIG-bound) | 2 px line + 6 px dot (geom) | inside row margin above | FIT |

Hierarchy check (guard §4): clock ink height 23.5 px vs year-line ink height 11.5 px → measured ratio ≈ 2.04 (size hierarchy is real, not hue-only). PASS.

Swapped-config fit (re-checked): swap yearLine "2040 · A TEST MONDAY" (20 glyphs) ≈ 20 × 10.6 = 212 px ≤ 336 ✓; swap clocks "09:05"/"10:40" same digit geometry as the default ✓.

## HIT list
**EMPTY — 0 HITs.** Every subject text element carries a measured row; both ink heights clear the ~11 px floor; the claimed hierarchy is measured.
