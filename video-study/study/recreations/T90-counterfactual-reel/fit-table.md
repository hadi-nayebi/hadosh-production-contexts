# T90 — measured-fit leg (guard-measured-fit) · fit-table.md

Build bound: recreation.html sha256 657f15b73cb26d34aa79a0516e8b932d81251398e6529b11ca23964e516962a1 (final cured build; re-run after the interim-wave cures) · Stage: 360 px wide (CONFIG stage.width) · projection panel x 8–352, y 58–286 (geom.projInsetPx/projTop/projBottom).
Measurement model (stated, not formula-claimed): ink width = Σ per-glyph advances from Georgia metric ratios (digits 0.556 em, caps ≈0.68 em, mixed-case average ≈0.475 em) + CONFIG letter-spacing; ink height = font size × Georgia cap-height ratio 0.692. Line-block geometry is computed from the build's own cubic node function (nodePoint values below are the function's outputs). Each line block carries a clear field (panel-colored ground, geom.linePadPx 4) behind its letters, so the branch curve never strikes through text. PIXEL-UNVERIFIED (no browser binary in this seat).

| Element | Content | Container | Measured ink width | Measured ink height | Binding margin | Verdict |
|---|---|---|---|---|---|---|
| #yearLine | "2037 · A POSSIBLE TUESDAY" (25 glyphs, Georgia 16 px, spacing 1 px) | HUD row, 336 px usable (12–348) | ≈246 px | 0.692 × 16 ≈ 11.1 px | 336 − 246 = 90 px | FIT · ink ≥ ~11 px floor |
| #clock | "19:00" (Georgia 30 px) | HUD clock row, 336 px usable | 4 × (0.556×30) + 0.278×30 ≈ 75.0 px | 0.692 × 30 ≈ 20.8 px | 336 − 75 = 261 px | FIT |
| .beatLine[0] (door) | "Good checkups only for people who paid extra" (44 glyphs, Georgia 17 px, lh 20 px) | block at node-derived (146.6, 92.5), text width 140 px + 2×4 px clear-field pad → 3 lines, block height 68 px | widest line ≈ 17 glyphs × 8.0 ≈ 136 px | 0.692 × 17 ≈ 11.8 px | width margin 140 − 136 = 4 px (binding side); block bottom 160.5 vs next line top 163.6 → 3.1 px clear | FIT |
| .beatLine[1] (tag-box) | "Tutors that just spat out answers" (34 glyphs) | block at node-derived (199, 163.6), text width 140 px + pad → 2 lines, block height 48 px | widest line ≈ 136 px | 11.8 px | footprint right edge 347 vs stage 360 → 13 px; block bottom 211.6 vs next line top 215.7 → 4.1 px clear | FIT |
| .beatLine[2] (lamp-counter) | "Agents that worked for the shop, not for you" (46 glyphs) | block at node-derived (94.9, 215.7), text width 140 px + pad → 3 lines, block height 68 px | widest line ≈ 136 px | 11.8 px | block bottom 283.7 vs projection bottom 286 → 2.3 px | FIT |
| shelf "?" glyphs (icon text) | "?" ×3 (Georgia 16 px, typeSize.glyphPx) | shelf icon row at geom.shelfIconY | ≈8.9 px each | 11.1 px | inside shelf band (icons 26 px) | FIT |

Node positions (build's cubic, geom branch points + per-beat frac [0.15, 0.5, 0.85]): door (128.6, 123.5) · tag-box (193, 157.6) · lamp-counter (280.9, 184.7). Line offsets are per-beat CONFIG dx/dy; no two line blocks overlap (checked pairwise above), and each block's clear field reserves its ground against the branch curve.

Hierarchy check (guard §4): clock ink 20.8 px vs year-line ink 11.1 px → measured ratio ≈ 1.87 (real size hierarchy). Intensity hierarchy (Cure 1): projection subjects render at opacity 0.92–1.0 (geom.shelfOpacity/iconOpacity, branch opaque) against the context group at geom.contextOpacity 0.55 — a measured opacity step of ≈0.4, not hue-only. PASS.

Swapped-config fit (re-checked): swap line "Good checkups for anyone who asked" (34 glyphs) → 2 lines in the same 140 px block ✓; all other subject texts unchanged in geometry.

## HIT list
**EMPTY — 0 HITs.** Every subject text element carries a measured row; all ink heights clear the ~11 px floor; the claimed hierarchies are measured.
