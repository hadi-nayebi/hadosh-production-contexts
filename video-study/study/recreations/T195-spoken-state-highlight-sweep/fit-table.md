# fit-table — T195 · attempt 1 (guard-measured-fit) — CURED form (jev-prewave HOLD cure, Cycle 035)
Method: POST-FIT MEASUREMENT of rendered geometry — each subject element rendered with PIL/ImageFont in Liberation Sans Regular (metric-compatible with Arial, the CONFIG fontStack's named metric fallback; Roboto Flex is not installed in this seat — the instrument limit is printed, not hidden) at the fitted size the build's measured-width rule produces, supersampled ×8 (360 stage) / ×4 (1920 stage); ink width/height are the rendered glyphs' actual ink bounding boxes, not formula products. Fitted size: start at fontPx × stageW/stageRefWidthPx; shrink by the bound ratio and RE-MEASURE while ink width > fitWidthFraction × stageW (the build's own rule, executed here on rendered ink). No element required shrink at either stage. (The first-filed form of this table used a glyph-factor model; jev-prewave priced every row a formula-derived HIT under guard-measured-fit check 2 and the model rows were replaced by these measurements — the cure is recorded in build-record.md.)
Subject text elements = the four chunks + the label card; per-word/per-letter spans inherit the chunk's fitted size by construction. Container = stage (16:9), text centered, bound = 0.92 × stage width. Ink height is reported three ways: full ink bbox (ascender-to-descender of the glyphs present) · cap height (rendered 'H') · x-height (rendered 'x').

## 360 px stage (the leg's reference stage; base size 86 × 360/1920 = 16.1250 px)
| element | container | measured ink width (px) | container bound (px) | fitted size (px) | ink height full (px) | cap height (px) | x-height (px) | margin, binding side (px) | flag |
|---|---|---|---|---|---|---|---|---|---|
| chunk L1 "Caption with Intention uses" | stage line @ lineTopFraction 0.46 | 192.38 | 331.2 | 16.1250 | 15.00 | 11.12 | 8.50 | 83.8 (horizontal, centered) | |
| chunk L2 "dynamic text animation," | stage line | 167.38 | 331.2 | 16.1250 | 15.00 | 11.12 | 8.50 | 96.3 | |
| chunk L3 "so captions are synchronized" | stage line | 207.50 | 331.2 | 16.1250 | 15.00 | 11.12 | 8.50 | 76.2 | |
| chunk L4 "precisely as each word is spoken." | stage line | 238.75 | 331.2 | 16.1250 | 15.00 | 11.12 | 8.50 | 60.6 | |
| label card "Synchronization" | stage line | 113.12 | 331.2 | 16.1250 | 15.00 | 11.12 | 8.50 | 123.4 | |

## 1920 px stage (design stage; base size 86 px)
| element | measured ink width (px) | bound (px) | fitted size (px) | ink height full (px) | cap height (px) | margin (px) | flag |
|---|---|---|---|---|---|---|---|
| chunk L1 | 1025.25 | 1766.4 | 86.00 | 80.00 | 59.25 | 447.4 | |
| chunk L2 | 892.25 | 1766.4 | 86.00 | 80.00 | 59.25 | 513.9 | |
| chunk L3 | 1106.25 | 1766.4 | 86.00 | 80.00 | 59.25 | 406.9 | |
| chunk L4 | 1272.75 | 1766.4 | 86.00 | 80.00 | 59.25 | 323.6 | |
| label card | 602.50 | 1766.4 | 86.00 | 80.00 | 59.25 | 658.8 | |

Legibility floor check (guard check 3, ~11 px at the 360 px stage): full ink height 15.00 px ≥ 11 on every row; cap height 11.12 px also clears the floor on the stricter reading. Cross-check against the source: L4's rendered ink width at the 1920 stage (1272.75 px, Liberation metrics) vs the source frame's measured text extent (1107 px) — Liberation runs ≈ 15% wider than the film's Roboto Flex, so the fit direction is conservative; the build's runtime rule measures with the actual loaded font.
Hierarchy: one subject size only — no hierarchy claim is made, so no hierarchy row is owed (guard check 4 not engaged).

HITs: 0 — PASS for this leg.
