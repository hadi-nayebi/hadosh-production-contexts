# T96 — measured-fit leg (guard-measured-fit) · fit-table-attempt2.md (practice Cycle 011 Wave 10)

Build bound: recreation.html sha256 38ffd531648ff0b155947401a776f15de86fe31844b90032127b9d192c9f625f · Stage 360×240 (stage.width / geom.stageH).
Measurement model: ink width = Σ per-glyph advances from Georgia metric ratios (per-letter cap/lower tables, digits 0.556 em, colon 0.278 em, middle dot 0.3 em) + CONFIG letter-spacing; ink height = font size × Georgia cap-height ratio 0.692. Model executed in the own-check suite (S5), not formula-asserted: the suite computes displayed glyph boxes from the same ratios and asserts containment against the CONFIG plate/ground geometry the source actually draws. PIXEL-UNVERIFIED.

| Element | Content | Container | Measured ink width | Measured ink height | Binding margin | Verdict |
|---|---|---|---|---|---|---|
| HUD year line | "2037 · A POSSIBLE TUESDAY" (25 glyphs, Georgia 16px, spacing 1) | dusk HUD plate, geom.plateW 267 × plateH 62 at (4,4) | ≈242px (this leg's per-letter model); ≈257px on the attempt-1 leg's coarser cap-average model — plate bound set from the larger figure | 0.692×16 ≈ 11.1px | plate 267 ≥ 257 + 5px each side; glyph box [10, 252] ⊂ plate [4, 271] | FIT · ≥ ~11px floor |
| HUD clock | scene clock e.g. "16:00" (Georgia 30px) | HUD clock row under the same plate in non-blue modes; stage top row in blue | ≈75.0px | 0.692×30 ≈ 20.8px | plate width margin ≥ 190px | FIT |
| Break label | turn.label "DUSK" (Georgia 17px, centered) | label plate 120×26 centered, labelY 206 | 4 caps ≈ 45px | 0.692×17 ≈ 11.8px | 323px stage margin; plate covers ink + margins | FIT · ≥ ~11px floor |
| Scene label | "exhibits · 16:00" (Georgia 17px, centered) | scene plate geom.scenePlateW 136 × groundH 22, seated over the ground strip [218, 240] in every mode | ≈113px | 0.692×17 ≈ 11.8px cap height; glyph box [222.2, 237.6] | plate margin ≈11px each side; glyph box ⊂ ground strip ⊂ plate box | FIT · ≥ ~11px floor |

Cross-checks (suite S5): HUD plate ∩ sun bound box = ∅ (plate ends x=271; sun spans x [285, 319]) — holds in warming and dusk, the only modes where both are on stage · at stage width 480 the plate still covers the header ink and clears the sun, and the centered scene plate still covers the label ink · renamed/reordered scene labels (longest: "gallery · 10:00", ink ≈108px) fit the 136px plate · occlusion at holds t=9000 (dusk) and t=13500 (dinner): every priced element's plate is drawn before its text and nothing is drawn over the texts afterward — visible fraction 100% for HUD line, HUD clock, scene label, break label.
Hierarchy: clock ink 20.8px vs year-line 11.1px → ratio ≈1.87, real size hierarchy. PASS.
Blue-mode building/sky separation (printed per plan C2.3): palette.building #274b8f vs palette.sky #1d3f8f — relative-luminance separation ≈10.7 (of 255), computed by the suite from the CONFIG hexes; the fields additionally render at intensity.field 0.85 over the sky. The figure is printed, not cured: palette values are the specimen register and were not altered for separation.

## HIT list
**EMPTY — 0 HITs on the attempt-2 build** (suite S5: 10/10 displayed-state assertions pass on sha 38ffd531…).
