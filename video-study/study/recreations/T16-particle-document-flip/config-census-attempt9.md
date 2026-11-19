# Config census — attempt 9 (A-C008 leg 2, on the attempt-9 final source)

Source: recreation.html attempt-9 final (sha256 c7bdd713ac188769d7c8e3810c09cf1b351952abed0e20192a3098f3cdbd78bb), measured by mechanical scan of the source text: for every key of the defaults table, the count of `CONFIG.<key>` read sites and whether the key is named in a validation/route list.

## Count reconciliation (the 118-vs-131 dispute, resolved by enumeration)

The defaults table carries **131 keys: 117 numeric and 14 non-numeric** (pageHeader, pageLinePattern, titleLabel, titleText, haloColor, fontFamily, colorA, colorB, background, counterColor, counterLabelText, counterLabelColor, labelColor, flipCheckpoints). The attempt-8 filing's "118" figure undercounts by 13 and ships no per-key table that reproduces it; this census is the enumerated table below and is the basis for attempt 9. Separately, 6 frozen schema constants (maxAbsValue, contrastColorA, contrastColorB, contrastHalo, contrastDom, minAlphaSeparation) live outside the config object as validation invariants — they are not config keys and are not counted in the 131. Two former keys (a magnitude bound and a minimum separation) were retired into that schema set in attempt 8 and remain retired.

## Consumption

Every one of the 131 keys is consumed: read sites ≥ 1 for all keys, and every key is also named in a validation or route list. Unconsumed keys: **0**.

| key | type | CONFIG read sites | named in validation/route list |
|---|---|---|---|
| pageCount | number | 24 | yes |
| pageHeader | string | 3 | yes |
| pageLinePattern | object | 12 | yes |
| pageLinesTopRatio | number | 5 | yes |
| pageLineGapRatio | number | 5 | yes |
| pageXR | number | 7 | yes |
| pageYR | number | 6 | yes |
| pageWR | number | 6 | yes |
| pageHR | number | 5 | yes |
| pageHeaderTopRatio | number | 3 | yes |
| pageHeaderWidthRatio | number | 2 | yes |
| pageHeaderHeightRatio | number | 2 | yes |
| pageHeaderFontRatio | number | 1 | yes |
| headerMinFontPx | number | 1 | yes |
| headerShrink | number | 1 | yes |
| pageInnerXRatio | number | 5 | yes |
| pageInnerWRatio | number | 5 | yes |
| pageLineThicknessRatio | number | 1 | yes |
| lineMinThicknessPx | number | 1 | yes |
| pageLineJitter | number | 1 | yes |
| lineMinFraction | number | 1 | yes |
| pageStrokePx | number | 1 | yes |
| stackCount | number | 10 | no |
| stackOffsetPx | number | 4 | yes |
| stackOffsetYFactor | number | 2 | yes |
| stackAlpha | number | 4 | yes |
| titleLabel | string | 2 | yes |
| titleText | string | 3 | yes |
| titleFontPx | number | 1 | yes |
| titleCyRatio | number | 4 | yes |
| titleCxRatio | number | 4 | yes |
| maxWidthRatio | number | 2 | yes |
| titleMaxHeightRatio | number | 2 | yes |
| titleMinFontPx | number | 1 | yes |
| titleShrink | number | 1 | yes |
| haloRxR | number | 3 | yes |
| haloRyR | number | 8 | yes |
| haloCyR | number | 8 | yes |
| haloStrokePx | number | 1 | yes |
| haloColor | string | 2 | yes |
| haloAlpha | number | 5 | yes |
| fontFamily | string | 5 | no |
| fontWeight | number | 6 | yes |
| sampleGap | number | 4 | yes |
| outlineGap | number | 2 | yes |
| sampleAlphaThreshold | number | 2 | yes |
| regionPaddingPx | number | 1 | yes |
| particleRadius | number | 3 | yes |
| colorA | string | 2 | yes |
| colorB | string | 2 | yes |
| background | string | 5 | yes |
| counterColor | string | 1 | yes |
| counterLabelText | string | 3 | yes |
| counterLabelColor | string | 1 | yes |
| counterRightRatio | number | 2 | yes |
| counterTopRatio | number | 3 | yes |
| counterLabelPx | number | 4 | yes |
| counterNumPx | number | 2 | yes |
| counterLabelLetterSpacingEm | number | 2 | yes |
| counterRegionMarginPx | number | 1 | yes |
| counterNumMinPx | number | 2 | yes |
| counterFallbackTopRatio | number | 2 | yes |
| labelColor | string | 1 | yes |
| labelLeftRatio | number | 1 | yes |
| labelTopRatio | number | 1 | yes |
| labelPx | number | 1 | yes |
| labelFadeMs | number | 1 | yes |
| flipCheckpoints | object | 7 | yes |
| checkpointMidPageFraction | number | 1 | yes |
| checkpointMidTimeFraction | number | 3 | yes |
| checkpointEndTimeFraction | number | 3 | yes |
| flipMs | number | 17 | yes |
| releaseMs | number | 9 | yes |
| formMs | number | 8 | yes |
| haloDelayMs | number | 5 | yes |
| holdMs | number | 6 | yes |
| seamReleaseMs | number | 4 | yes |
| travelFlipMs | number | 9 | yes |
| staggerFlipFraction | number | 6 | yes |
| travelFormMs | number | 7 | yes |
| staggerFormFraction | number | 6 | yes |
| haloTravelMultiplier | number | 3 | yes |
| formationMinTravelMs | number | 1 | yes |
| sampleGapMin | number | 3 | yes |
| sampleGapMax | number | 3 | yes |
| fitFallbackAscentRatio | number | 1 | yes |
| fitFallbackDescentRatio | number | 1 | yes |
| fitIterationCap | number | 6 | no |
| wrapJumpInsetPx | number | 4 | yes |
| maxPageCount | number | 7 | no |
| maxStackCount | number | 7 | no |
| minSettledHoldMs | number | 0 | yes |
| minTravelMs | number | 1 | yes |
| turnMs | number | 5 | yes |
| turnCosMin | number | 6 | no |
| foldMinFactor | number | 5 | no |
| registrationMs | number | 6 | yes |
| registrationFloorMs | number | 7 | yes |
| turnRampFraction | number | 5 | no |
| turnOnsetFraction | number | 2 | yes |
| foldPlateauFraction | number | 1 | yes |
| readableGeomFactor | number | 1 | yes |
| haloCxRatio | number | 3 | yes |
| tickLagMs | number | 1 | yes |
| releaseBlendFraction | number | 8 | no |
| frameCapMs | number | 2 | yes |
| catchUpIntervalMultiple | number | 1 | yes |
| fitMinScaleRatio | number | 2 | yes |
| releaseClearanceHoldU | number | 1 | yes |
| releaseScatterPx | number | 2 | yes |
| releaseScatterBiasX | number | 1 | yes |
| releaseScatterBiasY | number | 1 | yes |
| releaseScatterYFactor | number | 1 | yes |
| releaseScatterMs | number | 5 | yes |
| easingExponent | number | 4 | no |
| windX | number | 1 | yes |
| windY | number | 1 | yes |
| driftX | number | 1 | yes |
| driftY | number | 1 | yes |
| jitter | number | 2 | yes |
| jitterPeriodXMs | number | 1 | yes |
| jitterPeriodYMs | number | 1 | yes |
| reserveFraction | number | 2 | yes |
| foregroundAlpha | number | 7 | yes |
| travelAlpha | number | 11 | yes |
| reserveAlpha | number | 4 | yes |
| surplusAlpha | number | 5 | yes |
| wrapMarginPx | number | 1 | yes |
| minStageW | number | 1 | yes |
| minStageH | number | 1 | yes |
| seed | number | 7 | no |

## Literal census (outside the defaults table)

Mechanical scan of the script body after the defaults table: 54 distinct non-trivial numeric literals (excluding 0, 1, 2). Categories: geometry constants of the sampling grids and fold profile (fractions of stage dimensions), the travel-intensity cap value, easing/profile constants, DOM layout constants, and test-harness thresholds inside the feasibility gate. No literal in the body restates a config default's value as a shadow copy: schedule, pool, and gate arithmetic read the config object (the shared end-time helpers and the dwell table are the single sources the gate, the pool bound, and the runtime all consume).
