# T23 — config census (attempt 5, pre-scoring leg: guard-config-census v3.1)

Census runs against attempt 5's own CONFIG (88 scalar leaves walked, incl. array-member data asserted separately below).

## Key -> application-site resolution
| CONFIG key | application sites beyond definition |
|---|---|
| headerText | 14 |
| dwellMs | 7 |
| diveMs | 14 |
| holdZoomMs | 7 |
| loopPauseMs | 7 |
| progress.forceFillTarget | 10 |
| progress.targetOutlinePx | 4 |
| ceilings.maxGridCells | 2 |
| ceilings.maxCirclesRowCount | 2 |
| ceilings.maxGraphNodes | 2 |
| ceilings.maxGraphEdges | 2 |
| limits.maxPanels | 5 |
| limits.maxCols | 3 |
| limits.headerMaxChars | 4 |
| limits.titleMaxChars | 4 |
| limits.numberMaxChars | 4 |
| limits.clampMaxIterations | 2 |
| limits.borderClampStep | 2 |
| diveScale | 7 |
| colsWide | 12 |
| colsNarrow | 10 |
| narrowBreakpointPx | 8 |
| panelAspect | 9 |
| gapPx | 24 |
| borderPx | 25 |
| palette.paper | 2 |
| palette.ink | 6 |
| palette.tab | 58 |
| palette.tabDim | 1 |
| palette.empty | 8 |
| palette.accent | 3 |
| palette.tabTarget | 1 |
| palette.dark | 2 |
| palette.panelBg | 2 |
| fontFamily | 13 |
| layout.stageMaxPx | 4 |
| layout.stageBottomPadPx | 3 |
| layout.headerHeightFactor | 3 |
| layout.headerMinPx | 3 |
| layout.headerFontFactor | 4 |
| layout.headerMinFontPx | 5 |
| layout.headerPaddingPx | 5 |
| layout.tabBorderPx | 5 |
| layout.tabPaddingYPx | 5 |
| layout.tabPaddingLeftPx | 3 |
| layout.tabPaddingRightPx | 3 |
| layout.ghostFontFactor | 3 |
| layout.ghostOpacity | 3 |
| layout.diveEasing | 7 |
| layout.diveCoverMargin | 3 |
| layout.minStepMs | 5 |
| layout.fallbackStagePx | 7 |
| layout.tabTopPx | 3 |
| layout.tabLeftPx | 3 |
| layout.tabZIndex | 3 |
| layout.minPanelPx | 4 |
| layout.warnFontPx | 3 |
| layout.headerReservePx | 3 |
| layout.headerAbsoluteMinPx | 3 |
| layout.minStagePx | 13 |
| layout.minInnerWPx | 5 |
| layout.minInnerHPx | 5 |
| layout.gapClampStepPx | 3 |
| layout.warnPadding | 6 |
| layout.warnZIndex | 3 |
| layout.primDefaultStrokeWidth | 4 |
| layout.primDefaultTextWeight | 7 |
| artViewBox.w | 17 |
| artViewBox.h | 13 |
| artViewBox.preserveAspectRatio | 11 |
| fallbackArtKind | 17 |
| typography.headerWeight | 3 |
| typography.headerLetterSpacingEm | 3 |
| typography.tabWeight | 3 |
| typography.tabLetterSpacingEm | 3 |
| typography.tabLineHeight | 4 |
| typography.headerWrapLineHeight | 4 |
| typography.ghostWeight | 3 |
| labels.baseFactor | 3 |
| labels.maxPx | 7 |
| labels.minPx | 25 |
| labels.glyphEm | 7 |
| labels.chromePx | 5 |
| labels.separator | 9 |
| labels.shrinkStepPx | 5 |
| labels.maxTabHeightFraction | 4 |
| labels.numberPadWidth | 8 |
| labels.generatedTitlePrefix | 7 |

Array-member keys: panels[].n/title/art consumed by the renderer + validation (p.n / p.title / p.art sites in render + validateInto); appearances[].filled/dive consumed by panelState/buildTimeline; artRegistry primitives consumed by primSVG/panelArtSVG; palette tokens consumed via fillOf + direct palette reads in the DOM build.

## CSS-variable setter check
No CSS variables carry CONFIG values in this build (styles are set inline from CONFIG by the DOM build); the false-negative class this check owns does not arise. Class result: 0 hits.

## All-literal scan (outside the CONFIG block)
- Hex/rgba colors outside CONFIG: 0 (all color lives in CONFIG.palette / registry data)
- Distinct numeric literals outside CONFIG: 45 distinct values. Classification: validation guard bounds (the ranges that bound CONFIG values — policy guardrails, printed in validateInto beside the key they bound) · mathematical identities and loop/solver bounds (0, 1, 2, 3, 24 solver iterations, 0.01 coverage tolerance, 1e-9-class epsilons in tests) · string/grammar constants of the parsers. No duration, geometry, color, or tempo value that shapes the subject stands outside CONFIG: dwell/dive/hold/pause, scales, columns, gaps, borders, thresholds, ceilings, limits, and the tab-height fraction are all CONFIG keys resolved in the table above.
- Subject-shaping literals standing outside CONFIG: 0.

## HIT list (0)
- (empty — every key resolves to a site; no shaping literal stands outside CONFIG)
