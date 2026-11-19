Reusability is strong for swaps within the existing layout, but incomplete for different geometry. **Recommended score: 80/100.**

- **−8: Canvas dimensions bypass CONFIG.** The backing canvas is fixed at `720×640`. Changing `stageW`, `stageH`, or `dpr` changes rendering coordinates without resizing the canvas, causing clipping or unused space. Cure: initialize canvas dimensions from CONFIG.
- **−6: Shaping constants remain outside CONFIG.** Panel padding (`8`), wall gutters (`0.6`, `1.2`), amber gutters (`0.5`, `1`), and glyph opacity values are embedded in rendering code. Different grid densities cannot tune these through CONFIG alone. Cure: expose panel padding, separate grid gaps, and glyph opacities.
- **−4: Parameter boundaries lack guards.** Invalid grid counts or timing order can break the machinery. The lit index is clamped for foreground placement but remains unclamped when excluding the ordinary cell, producing inconsistent behavior for out-of-range values. Cure: validate CONFIG once and use one normalized lit index throughout.
- **−2: Glyph structure and reveal order are fixed.** Two scan bars and row-major population suit this piece, but another piece requires code changes to vary either. Cure: expose bar definitions and reveal-order options.

Credit: grid dimensions, lit placement and scale, palette, HUD text and typography, phase timing, pulse, and major layout geometry are configurable. The reported swap test supports those ordinary substitutions; source inspection reveals the limits above. Pixel behavior remains unverified.

The filesystem tool failed before execution, so this verdict could not be filed. It supplies the consumer’s cure list here; it does not establish the five-lens tier decision.

SCORE: 80
BODY-WRITE: none (read-only run).
