# T16 — measured-fit leg · attempt 6 (guard-measured-fit)

Source: recreation.html sha256 `8455d83217bbba1938ab53f68cbe5313f6f70ccbccc4123a5d7f462ca13e93a7` (frozen).
Method: the build harness's geometry measurement (stubbed canvas rasterizer, ink bounds from `measureText` actualBoundingBox where the rasterizer provides them) at the 360 px stage (360×640), post-fit. PIXEL-UNVERIFIED stands (A-C002-2): these are measured model bounds, not rendered pixels.

Attempt-6 change priced in this leg: the fit metric itself. Attempt 5's fit measured ink width as `actualBoundingBoxRight − actualBoundingBoxLeft`; the corrected metric is the sum `actualBoundingBoxLeft + actualBoundingBoxRight` (the full ink extent for text whose ink overhangs the origin asymmetrically). On this harness's rasterizer (left = 0.08·w, right = 0.92·w) the two forms differ by a factor of 0.84: the fitted title below reports ink width 291.2, the full measure width at the fitted size; the difference form would report 244.6 at the same size and would have kept shrinking from a larger font against an understated width.

| Element | Container | Measured ink bounds after fitting (w × h, px) | Container bounds (px) | Margin on the binding side |
|---|---|---|---|---|
| Title text ("AI GURU") | title box, centred (180, 358.4) | 291.2 × 67.1 (font 67.1, no condensation) | 309.6 × 192.0 | width: (309.6 − 291.2) / 2 = 9.2 px per side |
| Page header ("RÉSUMÉ") | header box on the page | 92.8 × 24.9 (font 24.9, no condensation) | 99.8 × 80.5 | width: (99.8 − 92.8) / 2 = 3.5 px per side |
| Counter group (label + numeral "14/14") | inline box right of the page/stack region | group width 105.4, numeral font 34 | available width 106.8 (right anchor 316.8) | 1.4 px total width slack; group box x0 211.4 |
| Title label ("title:") | DOM label at (13%, 37%) | 79.2 × 22.0 (font 22) | stage 360 × 640 | inside stage; nearest priced neighbour is the title ink box (top edge 324.8 vs label bottom 236.8 + 22 = 258.8 → 66.0 px clear) |

Positioned-bounds assertions (this attempt's addition — a fit is a position, not only a size):
- Title ink box [34.4, 324.8] – [325.6, 392.0]: inside the stage ✓ · inside the fitted box (w ≤ boxW, h ≤ boxH) ✓.
- Header ink box: top edge = page top + header-top offset (116.35 = 83.2 + 0.07 × 473.6) ✓ · height = the fitted height (24.9) ✓ · inside the page box [61.2, 83.2] – [180.0, 556.8] ✓.

Legibility floor (~11 px ink height at 360 px): title 67.1 ✓ · header 24.9 ✓ · counter numeral 34 ✓ · label 22 ✓ — no row below the floor.
Hierarchy (measured ink heights): title 67.1 : counter numeral 34 : header 24.9 : label 22 — ratios 2.69× (title/header), 3.05× (title/label); the hierarchy is carried by measured size, not hue alone.

**HIT list: EMPTY — PASS for this leg** (0 hits). Every subject text element carries a measurement row; every row is a post-fit measurement on the frozen source, not a formula claim.
