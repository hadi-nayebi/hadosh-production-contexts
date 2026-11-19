# T94 — measured-fit leg (guard-measured-fit) · fit-table.md

Build bound: recreation.html sha256 8509d420b6a520fbdbe15890b9c123ed128d341f3a811e395c2c8ca8a454fa39 · Stage: 360 px wide (CONFIG stage.width), 330 px high.
Measurement model (stated, not formula-claimed): ink width = Σ per-glyph advances from Georgia metric ratios (digits 0.556 em, caps per-glyph table ≈0.28–0.72 em, mixed-case average ≈0.475 em) + CONFIG letter-spacing; ink height = font size × Georgia cap-height ratio 0.692. Element geometry is computed from the build's own CONFIG positions. PIXEL-UNVERIFIED (no browser binary in this seat).

| Element | Content | Container | Measured ink width | Measured ink height | Binding margin | Verdict |
|---|---|---|---|---|---|---|
| #hudYear | "2037 · A POSSIBLE TUESDAY" (25 glyphs, Georgia 16 px) | HUD row, 336 px usable (12–348) | ≈220 px | 0.692 × 16 ≈ 11.1 px | 336 − 220 = 116 px | FIT · ink ≥ ~11 px floor |
| #hudClock | "22:30" (Georgia 30 px) | HUD clock row, 336 px usable | 4 × (0.556×30) + 0.278×30 ≈ 75.0 px | 0.692 × 30 ≈ 20.8 px | 336 − 75 = 261 px | FIT |
| #cardYear | "2026" (Georgia 80 px) | card zone x 16 → ruler start x 200 | 4 × 0.556 × 80 ≈ 177.9 px → right edge 193.9 | 0.692 × 80 ≈ 55.4 px | 200 − 193.9 = 6.1 px to the ruler's left end | FIT |
| #cardSub | "A POSSIBLE TUESDAY" (18 glyphs, Georgia 16 px, spacing 1 px) | full stage width under the card (y ≈138–154; ruler band occupies y 94–134 — vertical separation ≥4 px from the ruler label row) | ≈10.69 em × 16 ≈ 171 px + 17 px spacing ≈ 188 px → right edge ≈204 | 0.692 × 16 ≈ 11.1 px | 360 − 204 = 156 px (stage side); no horizontal collision with ruler elements (different y band) | FIT · ink ≥ floor (see note) |
| ruler end label | "2037" (Georgia 16 px) | label box 40 px wide, right-aligned at rulerX1 330 | 4 × 0.556 × 16 ≈ 35.6 px | 11.1 px | 40 − 35.6 = 4.4 px | FIT |
| ruler mark | "?" (Georgia 17 px) | above the figure at the ruler's left end | ≈9.4 px | 0.692 × 17 ≈ 11.8 px | inside sky field, no neighbour text | FIT |

Note (priced, not hidden): the specimen's own sub-line and ruler label sit below the ~11 px ink floor at a 360 px stage (specimen sub cap-height ≈8.6 px stage-equivalent). The build raises subPx/hudYearPx/rulerYearPx to 16 px so every subject text clears the floor — a deliberate fit cure over exact specimen proportion, recorded here and in build-record.md. The specimen's typeface is a condensed serif narrower than Georgia: at equal ink height the build's card numeral is wider (177.9 px vs ≈99 px stage-equivalent width at specimen proportions is NOT claimed — specimen numeral ink is ≈64 px tall stage-equivalent vs the build's 55.4 px; the width/height trade is the typeface substitution's, priced by the readability lens).

Hierarchy check (guard §4): cardYear ink 55.4 px vs hudClock 20.8 px vs sub/hudYear 11.1 px — measured size hierarchy ≈5.0 : 1.9 : 1.0, not hue-only. Intensity hierarchy (Cure 1): register/ruler/figure at full palette ink/accent against city windows at geom.windowOpacity 0.85 in 4×6 px cells and stars at geom.starOpacity 0.5 — separation by size + opacity, measured above. PASS.

Swapped-config fit (re-checked): swap year 2031 has the same 4-digit geometry as 2026 ✓; ruler label "2040" same width ✓; Arial swap changes advances (Arial digit 0.556 em, caps similar) — no container bound is within 4 px except the ruler label (4.4 px margin; Arial digit advance equals Georgia's 0.556 em, so the swapped label width is unchanged) ✓.

## HIT list
**EMPTY — 0 HITs** (after the pre-wave fit cures recorded in build-record.md: hudYearPx 13→16, subPx 14→16, rulerYearPx 13→16, yearPx 88→80 with rulerX0 176→200 / rulerX1 318→330 so the Georgia-width numeral clears the ruler's left end by a measured 6.1 px).
