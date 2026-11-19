# T23 — config census (attempt 8, pre-scoring leg: guard-config-census v3.1)

Final source sha256: `1ec8cca596895ba9154620b381dbffb2b3916b619bff014ffc7dcfbbcff1e3a3` (a comments-only payload-hygiene neutralization landed after the first Stage-5 run; every suite re-ran clean on this sha — own-checks-attempt8-stage5b.txt)

Census runs against attempt 8's own CONFIG (91 scalar leaves walked, incl. array-member data asserted separately below; site counts = application-site matches in the post-CONFIG source body, the final suite's A-C006-2 census method). Changed/new keys this attempt: limits.headerRefineMaxIterations (new — the header refinement's former hard-coded 200 ceiling, now consumed at its site), handoff.holdOnComplete (new — the completion/handoff boundary). Changed behaviour on existing keys: labels.maxLines exposed surface restricted to the implemented 1–2 (3–4 rejected by name); every numeric leaf now resolves a 400-nines-class input to its default with a true warning (magnitude sweep, final suite stage 2: 67 numeric leaves enumerated from CONFIG + appearances/panelCount magnitudes). Panel 07's tab state: two-line @ 11.81px at 360px (fit-table.md).

## Key -> application-site resolution
| CONFIG key | application sites beyond definition |
|---|---|
| headerText | 12 |
| dwellMs | 4 |
| diveMs | 9 |
| holdZoomMs | 4 |
| loopPauseMs | 4 |
| progress.forceFillTarget | 10 |
| progress.targetOutlinePx | 3 |
| handoff.holdOnComplete | 6 |
| ceilings.maxGridCells | 1 |
| ceilings.maxCirclesRowCount | 1 |
| ceilings.maxGraphNodes | 1 |
| ceilings.maxGraphEdges | 1 |
| limits.maxPanels | 4 |
| limits.maxCols | 2 |
| limits.headerMaxChars | 3 |
| limits.titleMaxChars | 3 |
| limits.numberMaxChars | 3 |
| limits.clampMaxIterations | 1 |
| limits.borderClampStep | 1 |
| limits.headerRefineMaxIterations | 1 |
| diveScale | 4 |
| colsWide | 6 |
| colsNarrow | 6 |
| narrowBreakpointPx | 9 |
| panelAspect | 10 |
| gapPx | 21 |
| borderPx | 25 |
| palette.paper | 2 |
| palette.ink | 6 |
| palette.tab | 2 |
| palette.tabDim | 1 |
| palette.empty | 1 |
| palette.accent | 2 |
| palette.tabTarget | 1 |
| palette.dark | 2 |
| palette.panelBg | 2 |
| fontFamily | 7 |
| layout.stageMaxPx | 3 |
| layout.stageBottomPadPx | 2 |
| layout.headerHeightFactor | 2 |
| layout.headerMinPx | 2 |
| layout.headerFontFactor | 3 |
| layout.headerMinFontPx | 4 |
| layout.headerPaddingPx | 4 |
| layout.tabBorderPx | 5 |
| layout.tabPaddingYPx | 5 |
| layout.tabPaddingLeftPx | 2 |
| layout.tabPaddingRightPx | 2 |
| layout.ghostFontFactor | 2 |
| layout.ghostOpacity | 2 |
| layout.diveEasing | 6 |
| layout.diveCoverMargin | 2 |
| layout.fallbackStagePx | 6 |
| layout.minPanelPx | 3 |
| layout.warnFontPx | 2 |
| layout.headerReservePx | 2 |
| layout.headerAbsoluteMinPx | 4 |
| layout.minStagePx | 11 |
| layout.minInnerWPx | 4 |
| layout.minInnerHPx | 4 |
| layout.gapClampStepPx | 2 |
| layout.warnPadding | 6 |
| layout.warnZIndex | 2 |
| layout.primDefaultStrokeWidth | 3 |
| layout.primDefaultTextWeight | 7 |
| artViewBox.w | 11 |
| artViewBox.h | 11 |
| artViewBox.preserveAspectRatio | 10 |
| fallbackArtKind | 11 |
| artDefaults.fill | 14 |
| artDefaults.stroke | 18 |
| typography.headerWeight | 2 |
| typography.headerLetterSpacingEm | 4 |
| typography.tabWeight | 2 |
| typography.tabLetterSpacingEm | 5 |
| typography.tabLineHeight | 4 |
| typography.headerWrapLineHeight | 3 |
| typography.ghostWeight | 2 |
| labels.baseFactor | 2 |
| labels.maxPx | 6 |
| labels.minPx | 7 |
| labels.glyphEm | 6 |
| labels.chromePx | 4 |
| labels.separator | 11 |
| labels.shrinkStepPx | 5 |
| labels.maxTabHeightFraction | 3 |
| labels.numberPadWidth | 8 |
| labels.generatedTitlePrefix | 9 |
| labels.titleCase | 8 |
| labels.maxLines | 9 |
| labels.fallbackMode | 9 |

## Consumed-effect mappings for changed/new keys (A-C006-2)
- limits.headerRefineMaxIterations -> the header measured-refinement loop's iteration ceiling in layout() (route probe: cfg:limits.headerRefineMaxIterations=7 lands the value the loop consumes; magnitude probe resets it to 200).
- handoff.holdOnComplete -> the presented-endpoint machinery: with the boundary engaged, the final appearance's endpoint claim holds the deferred cut (harness: held state, completion callback, no advance) until __t23Handoff.release() / the releaseHandoff message resumes the schedule at the held dive's end; disengaged (default), the loop runs unchanged (harness: 6 presentations over 2 cycles, never held).
- labels.maxLines (changed surface) -> validation rejects 3–4 by name and installs the default 2; labelPolicy + the DOM refinement's measured line ceiling consume the same value (policy probes at 1 and 2 change the laid-out lines observably).
- panelsJson route (new transport, not a CONFIG key) -> resolveConfig's panels pass: JSON entries land as panel titles/art/numbers verbatim (reserved characters, whitespace, case), asserted in the stage-3 suite and the final swap test.

## Removed leaves
None this attempt. (layout.minStepMs remains absent — 0 occurrences; an old URL naming it still warns as an unknown field.)

## Literal census (A-C008-3) — literals outside CONFIG vs the build record's whitelist
- Hex colour literals outside CONFIG: 0 (the two renderer last-resort `#000000` fallbacks now resolve through CONFIG.artDefaults; no hex literal stands anywhere outside CONFIG).
- Numeric literals outside CONFIG: 44 distinct values, all in the whitelisted structural classes — validation range bounds · CSS easing keyword coordinates · the bezier solver's iteration count (24) · index/count arithmetic · arc-flag values 0/1. No technique content literal stands outside CONFIG; content literals (separator, generated-title prefix, panel titles) are configuration, never structural constants (A-C009-4).
- CSS-variable setter check: this build uses no CSS variables; CONFIG is consumed from JS directly. N/A, no HIT.

## Field-class table (which surfaces handle free text verbatim)
| field | class | surfaces |
|---|---|---|
| labels.separator | FREE-TEXT | validation layer, cfg: route, panels rendering |
| labels.generatedTitlePrefix | FREE-TEXT | validation layer, cfg: route, panel generation |
| headerText | FREE-TEXT | validation layer, header route |
| panel titles | FREE-TEXT | validation layer (casing per labels.titleCase policy), panels route (stored verbatim), panelsJson route (stored verbatim, any character) |
| enums / art kinds / easing / palette tokens / colours | TOKEN | trimmed before validation on every route |

## HIT list (0)
No scalar leaf lacks an application site. Consumption (not only binding) for the changed keys is asserted by effect probes in the stage suites + the final suite (own-checks-attempt8-stage5.txt).
