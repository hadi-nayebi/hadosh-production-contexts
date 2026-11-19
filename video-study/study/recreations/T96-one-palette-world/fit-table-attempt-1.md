# T96 — measured-fit leg (guard-measured-fit) · fit-table.md

Build bound: recreation.html sha256 44ff698dee7af1d1e950f86fdaf0998cde0e3d9cb65955308b372aa9707701c6 · Stage 360×240 (stage.width / geom.stageH).
Measurement model: ink width = Σ per-glyph advances from Georgia metric ratios (digits 0.556 em, caps ≈0.62 em, colon 0.278 em, middle dot ≈0.3 em) + CONFIG letter-spacing; ink height = font size × Georgia cap-height ratio 0.692. PIXEL-UNVERIFIED.

| Element | Content | Container | Measured ink width | Measured ink height | Binding margin | Verdict |
|---|---|---|---|---|---|---|
| HUD year line | "2037 · A POSSIBLE TUESDAY" (25 glyphs, Georgia 16px, spacing 1) | stage top row, 350px usable | ≈257px | 0.692×16 ≈ 11.1px | 93px | FIT · ≥ ~11px floor |
| HUD clock | scene clock e.g. "16:00" (Georgia 30px) | HUD clock row, 350px usable | ≈75.0px | 0.692×30 ≈ 20.8px | 275px | FIT |
| Break label | break.label "DUSK" (Georgia 15px, centered) | stage width 360px at labelY 206 | 4 caps ≈ 37px | 0.692×15 ≈ 10.4px | 323px | HIT — see cure below |
| Scene label | "exhibits · 16:00" (Georgia 13px, centered) | stage width 360px at sceneY 224 | ≈16 glyphs ≈ 108px | 0.692×13 ≈ 9.0px | 252px | HIT — see cure below |

Hierarchy: clock ink 20.8px vs year-line 11.1px → ratio ≈1.87, real size hierarchy. PASS.

Pre-wave cures applied by this leg:
1. geom.labelPx 15 → 17 (break label ink 10.4 → 11.8px, ≥ floor).
2. geom.scenePx 13 → 17 (scene label ink 9.0 → 11.8px, ≥ floor). Scene label is subject text (scene name + clock are the register's reading), so the floor applies.

## HIT list
**EMPTY — 0 HITs on the final build** (2 hits found and cured pre-wave, above; harness re-run ALL PASS on the cured build, fit re-measured at the cured sizes: break label ink ≈11.8px, scene label ink ≈11.8px).

Re-run after the readability cure (interim wave): intensity.field 0.6→0.85 (building/sky separation) + dusk text plates (intensity.plate) — fit rows unchanged (text sizes untouched); HIT list remains EMPTY on the final build sha 44ff698d…
