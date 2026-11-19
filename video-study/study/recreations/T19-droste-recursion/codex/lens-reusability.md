Reusability / parameterization: **74/100**. The recursive renderer is reusable, but a different composition still requires renderer edits beyond CONFIG. This lens clears the 70 minimum; it does not determine the five-lens tier.

1. **Strong recursive core; low reuse cost.** `buildScene(cfg, level, stageWidthPx)` calls itself until `cfg.depth`. Depths 2/3/4 share one definition, with reported counts of 56/84/112 nodes. Source inspection supports clean structural depth swaps; browser rendering remains unverified.

2. **Census candid about pixels, incomplete about shaping; high cure priority.** The record acknowledges fold spacing `9/18px` and border `2px`. However, classifying percentages as “intra-element” does not remove their reuse cost. Candle spacing/height (`i * 30`, `62 + … * 16`), robe/hood/face boxes, button placement (`56 + b * 11`), gradient stops, corner radii, font family, letter spacing `0.14em`, medallion floor/factor `6/0.8`, and flicker divisor `170` all prescribe appearance outside CONFIG. Numeric arguments to `box()` also escape a census limited to percent-bearing strings. **Cure:** expose meaningful component geometry, typography, ornament, and flicker controls; distinguish structural constants from actual shaping defaults.

3. **Count controls exceed their layout machinery; medium cure cost.** `candleCount` accepts eight, but fixed 30% spacing puts later candles outside their group. `figureButtons` similarly retains fixed spacing as count grows. **Cure:** derive spacing from count and available bounds, or configure spacing plus validated count limits.

4. **Geometry dependencies require manual synchronization; medium cure cost.** Moving the frame does not update `zoomAnchorXPercent/YPercent`; their equality to the frame centre is only asserted for defaults. `levelScale: 0.42` also remains independent of actual frame/interior dimensions. Moreover, recursive calls shrink `stageWidthPx`, while `labelFontPx()` applies `levelScale^level` again: effective raw sizing uses the factor twice. **Cure:** derive the default anchor and nested width from geometry, and apply font scaling once.

5. **Checkpoint validation detects problems but normalization weakens semantics; medium cure cost.** `effectiveCheckpoints()` sorts and clamps, allowing equal checkpoints despite the strict-order contract. Sorting can exchange named checkpoint roles. `anchorMs` has no independent control over interpolation, and validation is returned as a boolean without surfaced errors during ordinary playback. **Cure:** define explicit reject/repair behavior, enforce spacing, expose diagnostics, and document whether the anchor is observational or controlling.

6. **URL coverage is useful but partial; low-to-medium cure cost.** Overrides cover label, depth, checkpoints, zoom range, candle count, and four colors. Geometry, zoom anchor, remaining palette, buttons, typography, medallion, and flicker lack URL access. Empty labels cannot be selected; zoom accepts invalid scales; color overrides lack validation and can break `hexToRgba()`. **Cure:** use a typed override schema with documented coverage and validation.

The 0-hex claim is supported. The residual-literal census is useful disclosure, but it does not substantiate “every shaping variable” living in CONFIG.

SCORE: 74
BODY-WRITE: This return supplies the reusability verdict and prioritized cures for codex/lens-reusability.md and scores.md; filesystem filing could not be completed because the execution tool failed to start.
