**Reusability/parameterization: 76/100.** CONFIG supports useful production swaps, but geometry changes still require implementation knowledge.

Priced findings:

- **−7: Flank placement is brittle.** The two-left/rest-right split is hardcoded (`i<2`, `i-2`). Positions multiply the current clip’s width instead of accumulating preceding widths, so unequal widths can overlap. Changing `flankCount` does not preserve balanced placement.
- **−6: Text swaps lack fit protection.** Sizes are configurable, but longer titles or brands can crop during hold. The fit table verifies two short titles; construction provides no fitting, wrapping, or overflow guard.
- **−5: Card coverage depends on manual coordination.** Centering derives correctly from CONFIG, but coverage requires `endScale` to remain sufficiently large for the configured card and stage. No derived minimum or validation preserves that property.
- **−3: Shaping literals remain outside CONFIG.** Loop opacity endpoints (`0.15`, `0.85`), easing choice, initial camera pose, graph endpoint height (`h/2`), and CSS page background (`#111`) remain fixed. The record’s “every shaping decision CONFIG-bound” claim is too strong.
- **−3: Swap evidence is narrow.** The recorded test demonstrates title, color, and duration replacement. It does not exercise changed clip counts, unequal widths, stage/card geometry, or the broader palette. Panels riding the camera transform does not establish that changed panel CONFIG values work.

Credit: all declared CONFIG keys appear applied; empty clip arrays are guarded; configurable colors, typography, curve controls, durations, and deterministic rendering provide a solid reusable base.

Next cure: use cumulative flank placement with configurable distribution; enforce text fit and minimum cover scale; expose remaining aesthetic constants; record geometry and clip-count stress swaps.

This lens clears the **70 minimum**. Overall tier eligibility requires the five-lens aggregate.

BODY-WRITE: none (read-only run)
SCORE: 76
