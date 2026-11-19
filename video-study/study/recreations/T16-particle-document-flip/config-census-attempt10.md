# T16 attempt 10 — config census (A-C008 leg, guard-config-census)

Source: recreation.html at the attempt-10 freeze, sha256
f9f9462a985c1e3f8cceb97eebeb6b26e9b3d594305951d8155f7490cfafc4e4
(measured on candidate-attempt10.html at the identical hash, before
promotion). Instrument: the candidate loaded in the frame-loop harness;
the key set is enumerated from the live DEFAULTS object, consumption
sites counted mechanically over the source text.

## Verdict

- **Live keys: 132. Unconsumed keys: 0.** Every key is read by the
  construction (CONFIG.* sites, or the schedule functions' parameter
  aliases cc./c. — the alias-only key is strictDwellMs, read at the
  turn cap, the budget need, and the schedule-cache fingerprint).
- Key arithmetic vs attempt 9: 131 − 2 retired (minSettledHoldMs,
  foldPlateauFraction — both now frozen SCHEMA history, 0 live
  references) + 3 added (strictDwellMs, headerMinShare, frameMaxSteps)
  = 132.
- **Purity scan: 0 hits** for segment.mp4, http:, https:, <video,
  <img, url(, fetch(, XMLHttpRequest, WebSocket, import( — the
  recreation references no external media or network surface.

## Literal census (outside DEFAULTS and the frozen SCHEMA)

Every numeric literal outside the two config blocks, classified:
structural indices/counts (0, 1, 2, 3, 4, 6, 8, 16) · unit and rounding
quanta (100, 1000, 10000, 0.001, 0.0001, 0.01, 0.05) · validation
bounds inside rangeCheck and the fit guards (50, 100, 200, 250, 400,
900, 100000, 600000, −10000, −2000) · the −1e9 / −1e8 "no time"
sentinels and −1 markers · 255 (color channel maximum) · the sRGB
luminance constants (0.03928, 12.92, 0.055, 1.055, 2.4, 0.2126,
0.7152, 0.0722) · typographic line factors in the counter group height
(1.05, 1.2) · the mulberry32 / seed constants (4294967296, 7919) ·
the particle factory's inert initial travel (600, overwritten by
startTravel before any use) · comment prose (the +240 / −200 scatter
bias figures and the 6000 ms cycle figure appear in comments naming
the CONFIG keys that carry them). **No literal carries a
configuration value the census prices as config**: the two a9
offenders are gone — no 0.02 header share (now CONFIG.headerMinShare)
and no bare 40 substep ceiling (now CONFIG.frameMaxSteps) anywhere
outside DEFAULTS.

## Per-key consumption (CONFIG.* hits · alias sites)

| key | CONFIG.* hits | alias sites |
|---|---|---|
| pageCount | 22 | 1 |
| pageHeader | 3 | 0 |
| pageLinePattern | 12 | 0 |
| pageLinesTopRatio | 5 | 0 |
| pageLineGapRatio | 5 | 0 |
| pageXR | 9 | 0 |
| pageYR | 6 | 0 |
| pageWR | 6 | 0 |
| pageHR | 5 | 0 |
| pageHeaderTopRatio | 3 | 0 |
| pageHeaderWidthRatio | 2 | 0 |
| pageHeaderHeightRatio | 2 | 0 |
| pageHeaderFontRatio | 1 | 0 |
| headerMinFontPx | 1 | 0 |
| headerShrink | 1 | 0 |
| pageInnerXRatio | 5 | 0 |
| pageInnerWRatio | 5 | 0 |
| pageLineThicknessRatio | 1 | 0 |
| lineMinThicknessPx | 1 | 0 |
| pageLineJitter | 1 | 0 |
| lineMinFraction | 1 | 0 |
| pageStrokePx | 1 | 0 |
| stackCount | 10 | 0 |
| stackOffsetPx | 4 | 0 |
| stackOffsetYFactor | 2 | 0 |
| stackAlpha | 4 | 0 |
| titleLabel | 2 | 0 |
| titleText | 3 | 0 |
| titleFontPx | 1 | 0 |
| titleCyRatio | 4 | 0 |
| titleCxRatio | 4 | 0 |
| maxWidthRatio | 2 | 0 |
| titleMaxHeightRatio | 2 | 0 |
| titleMinFontPx | 1 | 0 |
| titleShrink | 1 | 0 |
| haloRxR | 3 | 0 |
| haloRyR | 8 | 0 |
| haloCyR | 8 | 0 |
| haloStrokePx | 1 | 0 |
| haloColor | 2 | 0 |
| haloAlpha | 5 | 0 |
| fontFamily | 5 | 0 |
| fontWeight | 6 | 0 |
| sampleGap | 4 | 0 |
| outlineGap | 2 | 0 |
| sampleAlphaThreshold | 2 | 0 |
| regionPaddingPx | 1 | 0 |
| particleRadius | 3 | 0 |
| colorA | 2 | 0 |
| colorB | 2 | 0 |
| background | 5 | 0 |
| counterColor | 1 | 0 |
| counterLabelText | 3 | 0 |
| counterLabelColor | 1 | 0 |
| counterRightRatio | 2 | 0 |
| counterTopRatio | 3 | 0 |
| counterLabelPx | 4 | 0 |
| counterNumPx | 2 | 0 |
| counterLabelLetterSpacingEm | 2 | 0 |
| counterRegionMarginPx | 1 | 0 |
| counterNumMinPx | 2 | 0 |
| counterFallbackTopRatio | 2 | 0 |
| headerMinShare | 1 | 0 |
| frameMaxSteps | 7 | 0 |
| labelColor | 1 | 0 |
| labelLeftRatio | 1 | 0 |
| labelTopRatio | 1 | 0 |
| labelPx | 1 | 0 |
| labelFadeMs | 1 | 0 |
| flipCheckpoints | 7 | 1 |
| checkpointMidPageFraction | 1 | 1 |
| checkpointMidTimeFraction | 3 | 1 |
| checkpointEndTimeFraction | 3 | 1 |
| flipMs | 17 | 1 |
| releaseMs | 9 | 0 |
| formMs | 9 | 0 |
| haloDelayMs | 5 | 0 |
| holdMs | 6 | 0 |
| seamReleaseMs | 4 | 0 |
| travelFlipMs | 9 | 6 |
| staggerFlipFraction | 6 | 3 |
| travelFormMs | 7 | 0 |
| staggerFormFraction | 6 | 0 |
| haloTravelMultiplier | 3 | 0 |
| formationMinTravelMs | 1 | 0 |
| sampleGapMin | 3 | 0 |
| sampleGapMax | 3 | 0 |
| fitFallbackAscentRatio | 1 | 0 |
| fitFallbackDescentRatio | 1 | 0 |
| fitIterationCap | 6 | 0 |
| wrapJumpInsetPx | 4 | 0 |
| maxPageCount | 7 | 0 |
| maxStackCount | 7 | 0 |
| strictDwellMs | 0 | 3 |
| minTravelMs | 1 | 0 |
| turnMs | 5 | 2 |
| turnCosMin | 6 | 0 |
| foldMinFactor | 6 | 0 |
| registrationMs | 6 | 2 |
| registrationFloorMs | 7 | 0 |
| turnRampFraction | 5 | 0 |
| turnOnsetFraction | 2 | 2 |
| readableGeomFactor | 1 | 0 |
| haloCxRatio | 3 | 0 |
| tickLagMs | 1 | 0 |
| releaseBlendFraction | 8 | 0 |
| frameCapMs | 2 | 0 |
| catchUpIntervalMultiple | 1 | 0 |
| fitMinScaleRatio | 2 | 0 |
| releaseClearanceHoldU | 1 | 0 |
| releaseScatterPx | 2 | 0 |
| releaseScatterBiasX | 1 | 0 |
| releaseScatterBiasY | 1 | 0 |
| releaseScatterYFactor | 1 | 0 |
| releaseScatterMs | 5 | 0 |
| easingExponent | 4 | 0 |
| windX | 1 | 0 |
| windY | 1 | 0 |
| driftX | 1 | 0 |
| driftY | 1 | 0 |
| jitter | 3 | 0 |
| jitterPeriodXMs | 2 | 0 |
| jitterPeriodYMs | 1 | 0 |
| reserveFraction | 2 | 0 |
| foregroundAlpha | 7 | 0 |
| travelAlpha | 11 | 0 |
| reserveAlpha | 4 | 0 |
| surplusAlpha | 5 | 0 |
| wrapMarginPx | 1 | 0 |
| minStageW | 1 | 0 |
| minStageH | 1 | 0 |
| seed | 7 | 0 |