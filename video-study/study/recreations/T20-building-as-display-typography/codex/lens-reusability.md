Reusability is substantial but incomplete: **68/100**. CONFIG exposes both texts, grid and sampling dimensions, the full palette including glow, tower geometry, orbit amounts, and seeded skyline density/layout. URL overrides cover texts, timing, and palette. Letter cadence re-derives from the live character count.

Three defects prevent a passing floor:

- **Checkpoint normalization can return invalid bounds.** With duration `14000`, `{lightStart:20000, lightComplete:11000}` becomes `{11000,20000}` after swapping—still outside the duration. `{500,-100}` becomes `{-100,500}`. `{14000,14000}` remains zero-span, allowing division by zero and `NaN` state. Clamp **both** endpoints before ordering, enforce a positive span inside the duration, and report every correction.
- **Shaping literals remain outside CONFIG.** These include the sampler’s minimum font size `8`, orbit reference width `960`, neon minimum stroke width `1.5`, and marquee font stack `"bold … Arial, sans-serif"`. Canvas minimum dimensions `300×170` also affect scaling. The claimed census misses these literals; they are not structural math constants.
- **Auto-fit does not guarantee changed titles fit.** Width reduction stops at `8px`, so sufficiently long lines still overflow. Font size never adapts to line-band height, so additional facade lines can overlap or lose cell ownership. Marquee text has no width fitting. The reported stub-canvas test proves regenerated cells exist, not that every changed glyph survives real rasterization.

Next attempt must centralize the remaining shaping values, normalize adversarial checkpoints with explicit postconditions, and fit facade text against both width and line height. Add a defined diagnostic for text beyond grid capacity, plus marquee fitting. Verify real-canvas ownership for every glyph across long-line and increased-line-count cases.

BODY-WRITE: Replace the build record’s “all shaping values centralized” and “checkpoint incoherence cured” claims with these identified gaps; require bounded positive-span normalization and real-raster text-fit evidence before reusability clearance.
SCORE: 68
