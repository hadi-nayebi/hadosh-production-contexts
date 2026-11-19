# config-census — T199 · attempt 1 (guard-config-census v3.1) — recreation Cycle 036 Wave 33, RE-FILED Cycle 037 Wave 34 completion (A12.3)

Build: recreation.html SHA-256 1cde8d927e67215821d834b6e08bcd31e14a1d42cae596186ed2ce5cd19d14a9 (14,978 B). Completion change vs the Wave-33 filing: ONE added CONFIG object, `censusAnchors` (cure 1 — the A11 census-twin evaluation instants are now CONFIG data; its resolution row is below). No other key changed; no key was removed. Key traversal of the final CONFIG (node, this run): 178 node/leaf paths — the grouped rows below cover every path (array members grouped as `[]` classes, per-member counts: gradientStops 3 · columns 4 · lines 4 · words 1+7+8+2=18).

## Key → application-site resolution (value flows into the named subject)
| CONFIG key | application site(s) |
|---|---|
| baseSizePctOfStage | basePx() — every word's rendered size derives from it |
| baseWeight | envelope weight lerp start · slot measurement font · stateAt weight |
| peakWeightDefault | parameter-table default; per-word peakWeight values carry the specimen values (850/880) — declared default for swap-authored words |
| attackMs / peakHoldMs / releaseMs | envParams() globals → envelopeValue() for every word |
| easingName | DESCRIPTIVE DATUM (reclassified at the Wave-33 prewave cure): names the cubic form env(x)=1−(1−x)³ that envelopeValue implements as construction spec (Plan parameter table: "the function is construction spec; the name is the CONFIG datum"). It is not a code selector — no value-dependent selection site exists or is claimed |
| fontStack | line fontFamily at render · canvas measure font in layout() |
| unspokenColor | stateAt color for t < onsetMs, every word |
| speakerAColor / speakerBColor | speakerColor() → stateAt spoken color per line speaker |
| plateColor / plateOpacity / plateRadiusPx | plate element background/opacity/borderRadius in layout() |
| platePadXPct / platePadYPct | plate width/height computation in layout() |
| lineBottomPct | line + plate bottom position in layout() |
| peakLineWidthMaxPctOfStage | fit leg bound (fit-table.md) — the peak-fit guard as data |
| peakOverlapMaxPct | fit leg overlap bound (fit-table.md, HIT-OV intersection rows priced against it) |
| endHoldMs | standalone clock cycle length in frame() |
| segmentHandleOffsetMs | comparison slaving offset (comparison.html applies −500; buildMs definition) |
| censusAnchors.hailTwinMs / yourTwinMs / purposeTwinMs / thisMs / questionHoldMs / replyPrefixMs / drillMs / shoutPreLightMs / goddamnitMs / gumpMs | A11 own-checks harness evaluation instants (build-record completion harness: every census twin/checkpoint evaluation reads its instant from this table — e.g. CP1-twin evaluates stateAt(CONFIG.censusAnchors.hailTwinMs); CP7 stateAt(CONFIG.censusAnchors.replyPrefixMs)); cross-checked in the same harness against the onset+attack expressions where the two forms coincide (thisMs/drillMs/goddamnitMs/gumpMs equality asserted PASS). The twin-swap receipt moves replyPrefixMs 5000→5100 and the CP7-analog evaluation moves with it. This is the fit/census-leg class of application site (a guard/harness consumer named in the Plan's A11 mapping), not a render site — printed explicitly so the resolution is not silent |
| minBasePxAt360 | layout() FIT-FAIL print condition |
| showHeaderFurniture | read at build: false → no header furniture is built (departure table); toggling true is the priced extension point |
| wordGapEm | inter-slot margin in layout() · fit leg positioned-bounds layout (slot accumulation) |
| plateHeightFactor | plate height in layout() |
| stageAspect | stage aspectRatio set at init |
| scenePlate.gradientStops[] | SVG background gradient in buildScene() |
| scenePlate.columns[].xPct/wPct + columnColor + columnOpacity | SVG column rects in buildScene() |
| scenePlate.silhouetteLeft/Right (xPct/wPct/hPct/color) | SVG profile paths in buildScene() |
| scenePlate.rowCount/rowSpacingPct/rowColor/rowRx/rowRy/rowBaseXPct/rowBaseYPct/rowStepPct/rowRisePx | SVG row ellipses in buildScene() |
| scenePlate.viewBoxW/viewBoxH | SVG viewBox in buildScene() |
| scenePlate.plateMaxLuminance | CP11 enforcement bound (fit-table CP11 rows + the joined CP11 receipt in build-record.md) |
| lines[].speaker/entryMs/entryMode | lineIndexAt() ownership + stateAt speaker color |
| lines[].envelope.releaseMs (L1/L3) | envParams() line override → envelopeValue() |
| lines[].words[].text/onsetMs/peakScale/peakWeight | spans built per word · envelope + scale/weight lerp in stateAt/render |

No unapplied key. (peakWeightDefault + showHeaderFurniture are defaults/toggles whose application is the fallback/branch itself — printed here so the resolution is explicit, not silent.)

## All-literal scan (outside CONFIG)
- In-stage construction: the scene generator, slot layout, plate geometry and envelope read CONFIG only. Remaining numeric literals in the script are structural: loop indices/bounds (0, 1, −1), exponent 3 in the named cubic easing (the easing's definition, construction spec), zIndex '3'/'1' paint order flags, 100/1000 unit conversions (percent and ms — mathematical identities), GOVERNED_END_MS 8500 (the governed interval end — derived from the census window end 75.5 s, printed in the Plan's clock definition; classified structural-schedule, it is the interval the census anchors define, not a shaping value).
- Page chrome (outside the stage, not subject content): CSS #111 page background, #eee/#ccc HUD text, #ff6b6b reject text, HUD/button font sizes (13/15/20 px), wrap max-width 960 px, paddings/margins — presentation chrome of the artifact page, classified structural (they shape no subject element; the stage's own background is set from CONFIG at init).
- Hex colors outside CONFIG: only the page-chrome values above. Durations outside CONFIG: none (all envelope/hold values are CONFIG). Geometry outside CONFIG: only chrome values above.

## CSS-variable setter check
No CSS variables are used; CONFIG values are applied via direct style assignment in JS (each setter site is in the resolution table). No unset-variable references.

## HIT list
**HITs: 0.** (The scene-generator coefficients, column opacity, row-silhouette geometry, word gap and plate height factor found as literals in the first build draft were moved into CONFIG before the Wave-33 census was filed — the cure is in the build, not a classification. The completion's one added object, censusAnchors, is resolved above.)
