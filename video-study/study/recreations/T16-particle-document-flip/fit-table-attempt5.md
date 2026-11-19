# T16 — measured-fit leg · attempt 5 (guard-measured-fit)

Source: recreation.html sha256 `f912ebe273604baa47c96835f4a50bc3e78fbc5ff0b82ecd2e675820bf9ede0e` (frozen).
Method: the build harness's geometry measurement (stubbed canvas rasterizer, ink bounds from `measureText` actualBoundingBox where the rasterizer provides them) at the 360 px stage (360×640), post-fit. PIXEL-UNVERIFIED stands (A-C002-2): these are measured model bounds, not rendered pixels.

| Element | Container | Measured ink bounds after fitting (w × h, px) | Container bounds (px) | Margin on the binding side |
|---|---|---|---|---|
| Title text ("AI GURU") | title box, centred (180, 358.4) | 300.0 × 75.9 (font 75.9, no condensation) | 309.6 × 192.0 | width: (309.6 − 300.0) / 2 = 4.8 px per side |
| Page header ("RÉSUMÉ") | header box on the page | 89.8 × 24.9 (font 24.9, no condensation) | 99.8 × 80.5 | width: (99.8 − 89.8) / 2 = 5.0 px per side |
| Counter group (label + numeral "14/14") | inline box right of the page/stack region | group width 105.0, numeral font 35 | available width 106.8 (region right edge 202.0 + 8 margin → right anchor 316.8) | 1.8 px total width slack; group box x0 211.8 vs stack rect x1 202.0 → 9.8 px horizontal clearance |
| Title label ("title:") | DOM label at (13%, 37%) | 79.2 × 22.0 (font 22) | stage 360 × 640 | inside stage; nearest priced neighbour is the title box (top edge 358.4 − 75.9/2 = 320.4 vs label bottom 236.8 + 22 = 258.8 → 61.6 px clear) |

Legibility floor (~11 px ink height at 360 px): title 75.9 ✓ · header 24.9 ✓ · counter numeral 35 ✓ · label 22 ✓ — no row below the floor.
Hierarchy (measured ink heights): title 75.9 : counter numeral 35 : header 24.9 : label 22 — ratios 3.05× (title/header), 3.45× (title/label); the hierarchy is carried by measured size, not hue alone.

**HIT list: EMPTY — PASS for this leg** (0 hits). Every subject text element carries a measurement row; every row is a post-fit measurement, not a formula claim.
