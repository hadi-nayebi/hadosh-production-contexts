# T83 — measured-fit leg (guard-measured-fit) · fit-table.md

Build bound: recreation.html sha256 3ca26cdeb2abada8f539f4263632250909c6e84af13f598907ad8d9d5058a170 · Stage 360×240 (geom.stageW/stageH) · HUD at geom.hudX 10.
Measurement model (stated, not formula-claimed): ink width = Σ per-glyph advances from Georgia metric ratios (digits 0.556 em, caps ≈0.62 em average, colon 0.278 em) + CONFIG letter-spacing; ink height = font size × Georgia cap-height ratio 0.692. Post-fit geometry estimates at the 360 px stage — the lane's standing instrument class. PIXEL-UNVERIFIED (no browser binary in this seat).

| Element | Content | Container | Measured ink width | Measured ink height | Binding margin | Verdict |
|---|---|---|---|---|---|---|
| HUD year line | "2037 · A POSSIBLE TUESDAY" (25 glyphs, Georgia 16 px, spacing 1 px) | stage top row, 350 px usable (360 − hudX 10) | ≈ 25 × (0.58×16 + 1) ≈ 257 px | 0.692 × 16 ≈ 11.1 px | 350 − 257 = 93 px | FIT · ink ≥ ~11 px floor (after cure: yearPx 10→16, see below) |
| HUD clock | "16:00" (Georgia 30 px) | HUD clock row, 350 px usable | 4 × 0.556×30 + 0.278×30 ≈ 75.0 px | 0.692 × 30 ≈ 20.8 px | 350 − 75 = 275 px | FIT |
| Device glyph (non-text subject element, ×10) | earbud-case mark, geom.glyphW 30 × glyphH 19 | flat cell 83 × 36 px (inner 166×180 / 2 cols / 5 floors) | 30 px | 19 px | 53 px horizontal · 17 px vertical | FIT |
| Notice ring (non-text, ×10) | circle r = geom.ringR 16 (⌀ 32) | flat cell 83 × 36 px | 32 px | 32 px | 51 px horizontal · 4 px vertical | FIT (after cure: ringR 21→16, see below) |
| Window cross (non-text, ×10) | geom.winW 17 × winH 21 | flat cell 83 × 36 px | 17 px | 21 px | inside cell with glyph (17 + gap + 30 ≤ 83) | FIT |

Hierarchy check (guard §4): clock ink height 20.8 px vs year-line ink height 11.1 px → measured ratio ≈ 1.87 — a real size hierarchy, not hue-only. PASS.
Intensity hierarchy (Cure 1, construction): glyph group opacity = intensity.glyph 1.0 at palette.glyph #f0c93f (luminance ≈ 0.78) vs flat field at intensity.flatField 0.55 of palette.flat #3d5ea6 over wall #274b8f — foreground/background separation is a CONFIG-bound step, verified in the generated markup by the node harness (glyph groups carry opacity 1; flat rects carry 0.55).

Pre-wave cures applied by this leg:
1. HUD yearPx 10 → 16 and clockPx 25 → 30 (geom): the 10 px year line's ink height (≈6.9 px) breached the ~11 px floor; cured and re-measured above.
2. Ring radius 21 → 16 (geom.ringR): ⌀42 overflowed the 36 px floor height; ⌀32 fits with 4 px vertical margin.

Swapped-config fit (re-checked): swap changes no text content; floors 3 → cell height (180/3) = 60 px — glyph/ring fit improves. PASS.

## HIT list
**EMPTY — 0 HITs on the final build** (2 hits found and cured pre-wave, above; legs re-run on the final build: harness ALL PASS, sha bound above).
