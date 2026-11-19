**78/100 — CONFIG drives the main variation, but several shaping decisions remain fixed in code.**

- **Strong coverage:** Every declared CONFIG key is applied. Card content, clip dimensions/colors, palette, panel geometry, typography sizes, durations, and camera destination are configurable. Camera centering derives from card and stage geometry.
- **Residual shaping literals:** Toolbar icon size, spacing, and padding; font weights, letter spacing, and line height; grid stroke width; playhead width; graph Bézier control points; and camera easing remain outside CONFIG. The record’s “0 HITs” census therefore overstates coverage.
- **Clip arrangement is rigid:** Four flank blocks, their two-per-side arrangement, and doubled heights are hardcoded. Width-dependent positioning can overlap blocks when clip widths change. An empty clips array fails during flank construction.
- **Swap evidence is useful but narrow:** The recorded title, one clip color, and dive-duration swap demonstrate basic wiring and continuity. They do not demonstrate a different palette, card geometry, clip population, panel layout, or stage size. Panels riding the world transform does not establish that changed panel settings were tested.
- **Changed dimensions lack safeguards:** Configurable scale does not guarantee card coverage after geometry changes. Longer text has no fitting strategy or overflow check.

**Next cure:** Expose the remaining shaping controls, make flank placement cumulative and configurable, then record a broader CONFIG-only swap with changed geometry, palette, clip count, and timing. Verify text fit and final card coverage on that variant.

BODY-WRITE: none (read-only run)
SCORE: 78
