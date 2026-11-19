# T105 — guard-measured-fit output, attempt 2 (A-C008 leg, pre-scoring, on the NEW recreation.html)

Frozen source: recreation.html sha256 425553f3738f1e8803047c51ddbabd3ccb5e5e79e323bb67ea10f24446ba74fd
Method: font-metric geometry measurement (Arial advance estimates + cap-height factor 0.716) at the 360 px stage — source-bound model, PIXEL-UNVERIFIED (A-C002-2). Reading states priced on hold states; midpoint pairs enumerated in the overlap block below.

| Element | Container | Ink width | Container width | Margin | Ink height |
|---|---|---|---|---|---|
| sceneA.title "Design Training Overview" @16 px | search bar 300 px (inner ≈290 px after pad) | ≈190 px | 290 px | **100 px** | 11.5 px |
| sceneA.label "Webpage scene" @16 px bold | stage 360 px (left-anchored at x=10, y=182) | ≈114 px | 360 px | 236 px | 11.5 px |
| sceneB.wordmark "MOTION STUDIES" @20 px bold | stage 360 px (centred, y=124) | ≈190 px | 360 px | 170 px | 14.3 px |
| sceneB.label "Mark card" @16 px bold | stage 360 px (left-anchored at x=10, y=150) | ≈72 px | 360 px | 278 px | 11.5 px |
| swap label A "Dashboard scene overview" @16 px bold | stage 360 px | ≈190 px | 360 px | 160 px | 11.5 px |
| swap wordmark "MOTION STUDIES COLLECTION" @20 px bold | stage 360 px (centred) | ≈340 px | 360 px | 20 px | 14.3 px |

Hierarchy: wordmark / label ink-height ratio = 14.3 / 11.5 = 1.24 — measured size hierarchy, not hue-only. ✓
Legibility floor (~11 px ink height): every subject text element clears it (minimum 11.5 px). ✓

## Pairwise-overlap row block
Rects from CONFIG geometry (border-inclusive). Intra-scene pairs must be empty in their hold state; cross-scene pairs exist only at the blend midpoint, where both scenes are co-visible by the technique's definition.

| State | Pair | Intersection | Disposition |
|---|---|---|---|
| holdA | result row 2 (y 152–178) × scene A label (y 182–198) | **0** | PASS — rects disjoint, 4 px clear |
| holdA | hero card (y 48–112) × result row 1 (y 118–144) | 0 | PASS (6 px gap) |
| holdA | search bar (y 14–36) × hero card (y 48–112) | 0 | PASS |
| holdB | mark bars (y 44–112) × wordmark (y 124–144) | 0 | PASS |
| holdB | wordmark (y 124–144) × scene B label (y 150–166) | 0 | PASS |
| midpoint | scene A label (y 182–198) × scene B label (y 150–166) | **0** | PASS — rects disjoint at the blend midpoint |
| midpoint | scene B label (y 150–166, x 10–82) × scene A row 2 (y 152–178, x 30–330) | 52 × 14 px region | Blend-inherent: at midpoint both scenes render at weight 0.50 by the technique's definition; every incoming element overlays outgoing geometry. Printed, not hidden; no clean-state pair is affected. |
| midpoint | scene B wordmark (y 124–144) × scene A row 1 (y 118–144) | overlapping region | Blend-inherent, same disposition as above. |

HIT list: **empty — PASS for this leg (0 HITs).** The two midpoint cross-scene rows are enumerations of the blend itself, not fit failures: no text element overflows its container and no same-scene pair collides in any state.
