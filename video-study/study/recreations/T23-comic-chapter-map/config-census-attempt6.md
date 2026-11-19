# T23 — config census (attempt 6, pre-scoring leg: guard-config-census v3.1)

Final source sha256: `3b6010fc2edd216ddef04551e3bce0bd613f88cda245bb124ed06c9c556bac53`

Census runs against attempt 6's own CONFIG (86 scalar leaves walked, incl. array-member data asserted separately below). Changed/new keys this attempt: dwellMs/diveMs/holdZoomMs/loopPauseMs (new defaults), artDefaults.fill (new group), layout.headerAbsoluteMinPx (new default 11), labels.maxTabHeightFraction (now consumed as the tab BAND cap). Removed as dead bindings (validated but consumed by no effect after the band layout): layout.tabTopPx, layout.tabLeftPx, layout.tabZIndex.

## Key -> application-site resolution
| CONFIG key | application sites beyond definition |
|---|---|
| headerText | 14 |
| dwellMs | 9 |
| diveMs | 16 |
| holdZoomMs | 9 |
| loopPauseMs | 9 |
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
| colsWide | 14 |
| colsNarrow | 12 |
| narrowBreakpointPx | 12 |
| panelAspect | 13 |
| gapPx | 26 |
| borderPx | 26 |
| palette.paper | 2 |
| palette.ink | 18 |
| palette.tab | 92 |
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
| layout.tabBorderPx | 6 |
| layout.tabPaddingYPx | 6 |
| layout.tabPaddingLeftPx | 3 |
| layout.tabPaddingRightPx | 3 |
| layout.ghostFontFactor | 3 |
| layout.ghostOpacity | 3 |
| layout.diveEasing | 7 |
| layout.diveCoverMargin | 3 |
| layout.minStepMs | 9 |
| layout.fallbackStagePx | 7 |
| layout.minPanelPx | 4 |
| layout.warnFontPx | 3 |
| layout.headerReservePx | 3 |
| layout.headerAbsoluteMinPx | 5 |
| layout.minStagePx | 13 |
| layout.minInnerWPx | 5 |
| layout.minInnerHPx | 5 |
| layout.gapClampStepPx | 3 |
| layout.warnPadding | 6 |
| layout.warnZIndex | 3 |
| layout.primDefaultStrokeWidth | 4 |
| layout.primDefaultTextWeight | 7 |
| artViewBox.w | 414 |
| artViewBox.h | 1091 |
| artViewBox.preserveAspectRatio | 11 |
| fallbackArtKind | 17 |
| artDefaults.fill | 64 |
| typography.headerWeight | 3 |
| typography.headerLetterSpacingEm | 5 |
| typography.tabWeight | 3 |
| typography.tabLetterSpacingEm | 3 |
| typography.tabLineHeight | 5 |
| typography.headerWrapLineHeight | 4 |
| typography.ghostWeight | 3 |
| labels.baseFactor | 3 |
| labels.maxPx | 7 |
| labels.minPx | 25 |
| labels.glyphEm | 7 |
| labels.chromePx | 5 |
| labels.separator | 13 |
| labels.shrinkStepPx | 6 |
| labels.maxTabHeightFraction | 4 |
| labels.numberPadWidth | 8 |
| labels.generatedTitlePrefix | 9 |

## Consumed-effect mappings for changed/new keys (A-C006-2)
- dwellMs/diveMs/holdZoomMs/loopPauseMs -> buildTimeline step durations (mutation probes in the full suite change the derived cycle).
- artDefaults.fill -> primSVG default-fill resolution for every primitive kind (mutation probe renders the mutated colour).
- layout.headerAbsoluteMinPx -> headerFitPx floor (mutation probe: a 20px floor raises the 120-char header result to >=20px).
- labels.maxTabHeightFraction -> labelPolicy vertical budget, now the reserved BAND's share of panel interior height (mutation probe: 0.5 shrinks panel 07's band below the default).
- layout.minStepMs -> schedulerDelay boundary cap + validation warning (mutation probes in the full suite).

## HIT list (0)
No scalar leaf lacks an application site. Consumption (not only binding) for the changed keys is asserted by mutation probes in the full own-check suite (29/29) — see build-record-attempt6.md.

Array-member data: panels (12 entries: n/title/art consumed by render + labelPolicy + panelState), appearances (3 entries: filled/dive consumed by panelState + buildTimeline), artRegistry (12 kinds, primitives consumed by panelArtSVG).
