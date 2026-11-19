# T17 attempt 4 — measured-fit leg output (guard-measured-fit, recreation guards)

Source: recreation.html sha256 0d04b443a030185001cbfcba280afbd6547de2ef68fd1a8f08ac3408537fe803 · Stage widths 360/390/960 · PIXEL-UNVERIFIED (render route blocked at startup — "Hatch WebGL domain policy is required for browser startup", re-attempted this attempt; rows are deterministic-model measurements, glyph ink = fontPx x 0.716 named estimator).

Fit constraint: phone stage budget 640px (CONFIG layout.phoneStageBudgetPx); fitReport ok at 360 (stage 553px, meta 2 rows), 390 (553px, 2 rows), 960 (540px, 1 row) — totals RECOMPUTED after all attempt-4 spacing/label changes (stage-2 checkpoint), not carried from attempt 3. Every figure required <= stage at phone widths, including FIG.22 at the maximum supported stack count 14 (619.0px total). Binding-figure displayed bottom sits 8.0px above the stage bottom (layout.bottomClearancePx) at default and at maximum stack — no exact-bottom row stands.

## A-C012-1 basis table (unit -> basis box/value the CSS cascade resolves against -> rendered consequence at 360px)

| Unit | Basis (single-source CONFIG key) | Rendered consequence at 360px |
|---|---|---|
| figure top padding | layout.figPadTopPx = 6 (CSS var --figpadtop; model figureRequired) | figure content starts 6px below figure top in both model and cascade |
| heading margins | layout.headingMarginTopPx 3 + headingMarginBottomPx 8 = 11 (CSS vars --headmt/--headmb; model headH) | heading reserve equals the rendered 11px total (attempt 3 modelled 6px) |
| FIG.20 phone row gap | layout.rowGapPx = 18 (builder flex gap; model blockH) | chart/card stack prices the rendered 18px (attempt 3 modelled 8px) |
| FIG.24 phone gap | layout.counterGapPx = 24 (builder flex gap; model blockH) | card/chart stack prices the rendered 24px (attempt 3 modelled 8px) |
| FIG.22 gap | layout.fig22GapPx = 8 (builder flex gap; model blockH) | unregressed |
| source-line top margin | layout.srcMarginTopPx = 6 (CSS var --srcmt; model srcH) | source reserve equals rendered margin |
| bottom clearance | layout.bottomClearancePx = 8 (stage-height derivation + fit assertion) | binding figure bottom at 545px vs stage 553px |

## Stamp positioned-AABB rows (transformed bounds, left/right edges vs correction block)

| Width | State | Scale | AABB left | AABB right | Block width | Inside |
|---|---|---|---|---|---|---|
| 360 | entrance | 1.825 | 0.0 | 328.0 | 328 | yes |
| 360 | overshoot | 1.100 | 65.2 | 262.8 | 328 | yes |
| 360 | settle | 1.000 | 74.2 | 253.8 | 328 | yes |
| 390 | entrance | 1.992 | 0.0 | 358.0 | 358 | yes |
| 390 | overshoot | 1.100 | 80.2 | 277.8 | 358 | yes |
| 390 | settle | 1.000 | 89.2 | 268.8 | 358 | yes |
| 960 | entrance | 1.910 | 0.0 | 500.0 | 680 | yes |
| 960 | overshoot | 1.100 | 106.0 | 394.0 | 680 | yes |
| 960 | settle | 1.000 | 119.1 | 380.9 | 680 | yes |

## Secondary-text rows at the 12px label floor

Label-class text (figure numbers, source lines, chart labels, org nodes, meta line) renders at 12px at 360/390px (floor raised 11 -> 12). Source lines render in palette.secondary #595344 at full opacity (the 0.8 opacity is deleted); modelled contrast of secondary on paper = 6.03:1 (>= 4.5:1 asserted from the palette values). Modelled ink height at 12px = 8.6px.

## Figure rows (360px)

| Element | Container | Font px @360 | Modelled ink height | Container bounds | Binding margin |
|---|---|---|---|---|---|
| masthead | stage header | 20 | 14.3px | content width 328px | centred, no overflow modelled |
| meta line (date/clock/price) | header meta, wrapped 2 rows @360/390, 1 row @960 | 12 | 8.6px | meta width 304px | rows derived from measured span widths at the 12px floor |
| FIG. 20 figure number | figure head | 12 | 8.6px | content width | — |
| FIG. 20 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 20 source line | figure foot | 12 | 8.6px | displayed bottom at 408.2px vs stage 553px | inside stage at completion, clearance 144.8px |
| FIG. 21 figure number | figure head | 12 | 8.6px | content width | — |
| FIG. 21 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 21 source line | figure foot | 12 | 8.6px | displayed bottom at 349.0px vs stage 553px | inside stage at completion, clearance 204.0px |
| FIG. 22 figure number | figure head | 12 | 8.6px | content width | — |
| FIG. 22 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 22 source line | figure foot | 12 | 8.6px | displayed bottom at 545.0px vs stage 553px | inside stage at completion, clearance 8.0px |
| FIG. 23 figure number | figure head | 12 | 8.6px | content width | — |
| FIG. 23 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 23 source line | figure foot | 12 | 8.6px | displayed bottom at 339.0px vs stage 553px | inside stage at completion, clearance 214.0px |
| FIG. 24 figure number | figure head | 12 | 8.6px | content width | — |
| FIG. 24 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 24 source line | figure foot | 12 | 8.6px | displayed bottom at 418.0px vs stage 553px | inside stage at completion, clearance 135.0px |
| FIG. 25 figure number | figure head | 12 | 8.6px | content width | — |
| FIG. 25 title | figure head | 17 | 12.2px | content width 328px | wrap reserved from modelled line count |
| FIG. 25 source line | figure foot | 12 | 8.6px | displayed bottom at 412.5px vs stage 553px | inside stage at completion, clearance 140.5px |
| FIG.20 x-label "post 1" | SVG chart 328px wide | 12 | 8.6px | displayed bounds [48.0,92.6] | inside |
| FIG.20 x-label "post 2" | SVG chart 328px wide | 12 | 8.6px | displayed bounds [273.4,318.0] | inside |
| FIG.25 stamp text | correction block, rotated positioned AABB | 12 | 8.6px | AABB rows above | positioned inside at entrance/overshoot/settle |
| FIG.24 giant counter | counter card | 20 | 14.3px | card width 328px | — |
| FIG.21 summary text | summary card | 12 | 8.6px | card inner width 304px | typed in full at completion; completed hold 1.780s |

## HIT list (17 rows)

Label-class text at the raised 12px type floor has modelled ink height 8.6px, still below this leg's ~11px ink floor: meta line (date/clock/price) · FIG. 20 figure number · FIG. 20 source line · FIG. 21 figure number · FIG. 21 source line · FIG. 22 figure number · FIG. 22 source line · FIG. 23 figure number · FIG. 23 source line · FIG. 24 figure number · FIG. 24 source line · FIG. 25 figure number · FIG. 25 source line · FIG.20 x-label "post 1" · FIG.20 x-label "post 2" · FIG.25 stamp text · FIG.21 summary text. Disposition (advisory, re-priced against the new floor per plan section 6): the attempt-3 leg's 17 HITs are NOT silently carried — the floor itself moved (11px -> 12px, ink 7.9px -> 8.6px) and source-line contrast was separately strengthened (secondary at full opacity, modelled 6.03:1); the remaining gap is the leg's ink-estimator floor, containment and clearance now pass at every width with 8px bottom clearance, and the legibility question at this size is priced by the scoring wave on this same evidence.
