# CONFIG CENSUS — T20 attempt 2 · config-census leg (guard-config-census v3.1) · pre-scoring

Source: recreation.html at CP5/final state, against ITS OWN CONFIG. Instrument: own-check-census.js (widened scope: named numeric shaping constants) + source grep for application sites + harness V1 consumption assertions (mutation → effect) for the keys named below.

## All-literal scan (outside CONFIG)
- Hex colors outside CONFIG: **0**. rgba() literals outside CONFIG: **0** (one `rgb(r,g,b)` string construction in scaleHexColor — its inputs are a CONFIG hex × a CONFIG intensity scale; computed output, not a stranded literal; classified here in print).
- Numeric literals outside CONFIG, classified per literal (A-C008-3 / A-C009-4 — no content literal is classified structural; the file contains no text content literals outside CONFIG — facade/marquee strings live in CONFIG):
  - `100` (percent divisor, ~14 sites) — STRUCTURAL: the percent definition; every value it divides is a CONFIG *Pct key.
  - `255` (8-bit channel maximum, luminance/scale helpers) — STRUCTURAL: color-space constant.
  - `0.2126 / 0.7152 / 0.0722` (BT.709 luma coefficients) — MEASUREMENT STANDARD: they shape a check value, never a rendered value.
  - `4` / `3` (RGBA stride / alpha-channel index in ImageData reads) — STRUCTURAL: platform data layout.
  - `0.5` (cell-centre / line-centre factors) — STRUCTURAL: midpoint definition. (The `0.5` and `42` in the URL-override comment are documentation examples, not code.)
  - `0` / `1` (loop bounds, indices, gradient stops 0/1, globalAlpha reset) — STRUCTURAL: identities/endpoints.
  - `2` (halving divisors; n−1 semantics uses the CONFIG-free count n) — STRUCTURAL.
  - `−1` (owner/sentinel index) — STRUCTURAL.
  - `16`, `>>16/>>8`, `&255` (hex parse) — STRUCTURAL: radix/shift arithmetic.
  - mulberry32 constants `0x6D2B79F5`, `4294967296`, shifts `15/7/14`, `61` — STRUCTURAL: the named algorithm's identity constants; the seed itself is CONFIG (neighborSeed).
  - CSS `<style>`: `min-height:200px` on #stage — LAYOUT-STRUCTURAL: a collapse guard for the stage container; the stage fills its frame and the subject's geometry derives from CONFIG percentages at any size ≥ the stageMin canvas floors (which ARE CONFIG). `100%`/`0` style tokens — STRUCTURAL.
  - Comment numerals (checkpoint values restated in prose) — not code; payload comment scan separately filed in the payload manifest.

## Key → application-site resolution (every key resolves; occurrence counts include declaration)
Root: durationMs→computeState/orbitPassage/validateCheckpoints · facadeLines→letterList/sampleFacade · marqueeText→computeState/marqueeFit/render · marqueeCharMs→computeState · gridCols/gridRows→sampleFacade/cellPxAt/render grid · sampleW/sampleH→sampleFacade · sampleFontPx→fit start · sampleMask→sampler fill · sampleFitRatio→fit width test · sampleAlphaMin→mask scans · sampleCoverageMin→cell ownership (V1 mutation-proven) · sampleMinFontPx→fit floor (V1 mutation-proven) · sampleFitStepPx→fit loops · checkpointMinSpanMs→validateCheckpoints span enforcement (V1 mutation-proven) · fontFamily→sampler font · neighborDensity/neighborSeed→neighborLitMap · neighborCols/neighborRows→neighbor render · neighborTowers[] (xPct/yPct/wPct/hPct/layer per member)→neighbor render · overrideMinDurationMs→applyOverrides · skyTop/skyBottom→sky gradient · neighborTower/neighborLit/neighborUnlit→tower fills (neighborLit consumed via its intensity-scaled render color) · heroFacade→hero fill · heroEdge→edge stroke · cellLit→lit cells (litColor) · cellLitGlow→glow pass · cellUnlit→unlit grid · marqueeBg→marquee strip · marqueeTextColor→marquee text (via intensity-scaled render color) · ground→body/ground fill.
Nested: checkpoints.lightStart/lightComplete→validateCheckpoints→computeState · geom.cellInset/cellSize→unlit grid · geom.litInset/litSize→lit cells · geom.glowPad/glowSize→glow pass · geom.neighborInset/neighborSize→neighbor windows · geom.edgeWidthFactor/edgeMinStrokePx→edge lineWidth · geom.groundPct→ground band · hero.xPct/yPct/wPct/hPct→hero + marquee strip geometry · marquee.hPct→strip · marquee.fontMinPx/fontMaxPx/fontFactor→marqueeFontPx + marqueeFit floor · marquee.fontFamily→marquee measure + draw font · orbit.farPx/midPx/heroPx→orbitOffsetPx call sites · orbit.referenceWidthPx→orbitOffsetPx (V1 mutation-proven) · stageMin.wPx/hPx→resize floors · intensity.neighborLitScale→neighborLitRendered (V1-proven) · intensity.marqueeScale→marqueeTextRendered (V1-proven) · intensity.edgeAlpha→edge globalAlpha (V1-proven) · intensity.edgeBlurPx→edge shadowBlur.
CSS-variable setter check: no CSS variables are used — no setter class applies (printed, not skipped silently).

## HIT list
**Empty — PASS for this leg.** Every literal outside CONFIG is classified above; every CONFIG key resolves to a value-flow application site in its named subject; the five literals the prior wave priced (sampler floor 8, orbit width 960, stroke minimum 1.5, marquee font stack, canvas minima 300×170) are CONFIG keys consumed at named sites.
