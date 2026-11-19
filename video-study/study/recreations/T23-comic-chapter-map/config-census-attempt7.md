# T23 — config census (attempt 7, pre-scoring leg: guard-config-census v3.1)

Final source sha256: `73e864cde1dd57a5b85b89e8d99049744d9973f6abb92aba1ac010301a02fafb`

Census runs against attempt 7's own CONFIG (89 scalar leaves walked, incl. array-member data asserted separately below). Changed/new keys this attempt: artDefaults.stroke (new), labels.titleCase / labels.maxLines / labels.fallbackMode (new), artDefaults nested cfg: route (new), registryMap route (new). Removed leaf: layout.minStepMs — the census proves removal below (0 occurrences in the source; the old URL warns as an unknown field). Panel 07's tab state under the corrected estimator: two-line @ 11.81px at 360px (fit-table.md).

## Key -> application-site resolution
| CONFIG key | application sites beyond definition |
|---|---|
| headerText | 14 |
| dwellMs | 7 |
| diveMs | 16 |
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
| colsWide | 14 |
| colsNarrow | 12 |
| narrowBreakpointPx | 12 |
| panelAspect | 13 |
| gapPx | 26 |
| borderPx | 30 |
| palette.paper | 4 |
| palette.ink | 17 |
| palette.tab | 68 |
| palette.tabDim | 1 |
| palette.empty | 8 |
| palette.accent | 6 |
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
| artViewBox.w | 63 |
| artViewBox.h | 56 |
| artViewBox.preserveAspectRatio | 11 |
| fallbackArtKind | 17 |
| artDefaults.fill | 87 |
| artDefaults.stroke | 40 |
| typography.headerWeight | 3 |
| typography.headerLetterSpacingEm | 5 |
| typography.tabWeight | 3 |
| typography.tabLetterSpacingEm | 6 |
| typography.tabLineHeight | 5 |
| typography.headerWrapLineHeight | 4 |
| typography.ghostWeight | 3 |
| labels.baseFactor | 3 |
| labels.maxPx | 7 |
| labels.minPx | 26 |
| labels.glyphEm | 7 |
| labels.chromePx | 5 |
| labels.separator | 13 |
| labels.shrinkStepPx | 6 |
| labels.maxTabHeightFraction | 4 |
| labels.numberPadWidth | 8 |
| labels.generatedTitlePrefix | 10 |
| labels.titleCase | 8 |
| labels.maxLines | 9 |
| labels.fallbackMode | 9 |

## Consumed-effect mappings for changed/new keys (A-C006-2)
- artDefaults.stroke -> primSVG default-stroke resolution for line primitives and graph edges (mutation probes in the full suite render the mutated colour); validated per-field with palette-membership checking, and reachable via cfg:artDefaults.stroke.
- labels.titleCase -> the panel pass applies the configured casing (preserve default / upper); both-ways effect mapping in the suite (" Mixed Case " verbatim under preserve, uppercased under upper).
- labels.maxLines -> labelPolicy two-line eligibility AND the DOM refinement's measured line-count ceiling (one policy, both layers).
- labels.fallbackMode -> labelPolicy's fallback outcome (number-only default / single-line at floor, fits:false) AND the DOM refinement's final drop.
- labels.generatedTitlePrefix / numberPadWidth -> consumed only AFTER validation (validation-before-generation pass order); the adversarial corpus in the suite is the witness.
- typography.tabLetterSpacingEm -> now consumed by estWidth and the two-line estimator as well as the DOM tab style (mutation: spacing 0 vs 0.08 changes panel 07's policy outcome, combined probe).

## Removed leaves (C4)
- layout.minStepMs: 0 occurrences in the final source (definition, validation guard, scheduler consumption, and the phase-warning all removed); ?cfg:layout.minStepMs= now warns 'unknown field ignored' by name. No dangling consumption, no dead binding.

## Literal census (A-C008-3) — literals outside CONFIG vs the build record's whitelist
- Hex colour literals outside CONFIG: 2 (#000000) — the renderer's last-resort paint fallbacks, whitelisted as structural in build-record-attempt7.md.
- Numeric literals outside CONFIG fall in the whitelisted structural classes only: validation range bounds, CSS easing keyword coordinates, the bezier solver's iteration count/tolerance, index/count arithmetic, and the frame count of the presented-endpoint interval (1 frame by construction). No technique content literal stands outside CONFIG; content literals (separator, generated-title prefix, panel titles) are configuration, never structural constants (A-C009-4).
- CSS-variable setter check: this build uses no CSS variables; CONFIG is consumed from JS directly. N/A, no HIT.

## Field-class table (C7a — which surfaces handle free text verbatim)
| field | class | surfaces |
|---|---|---|
| labels.separator | FREE-TEXT | validation layer, cfg: route, panels rendering |
| labels.generatedTitlePrefix | FREE-TEXT | validation layer, cfg: route, panel generation |
| headerText | FREE-TEXT | validation layer, header route |
| panel titles | FREE-TEXT | validation layer (casing per labels.titleCase policy), cfg:-independent panels route (stored verbatim, no trim) |
| enums / art kinds / easing / palette tokens / colours | TOKEN | trimmed before validation on every route |

## HIT list (0)
No scalar leaf lacks an application site. Consumption (not only binding) for the changed keys is asserted by mutation probes in the full own-check suite (own-checks-attempt7-stage5.txt).
