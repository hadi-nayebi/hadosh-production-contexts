CONFIG supports useful variation within this six-panel composition: panel labels/types/arrival times, grid geometry, lyric text/start times/speed, principal colors, seed, duration, and intended pop controls. The clock and playback/seek interface are useful for production containers. The supplied swap test demonstrates a narrow reuse path.

It does not yet support reliable transition or diagram reuse through CONFIG alone:

- **Pop scale is ineffective:** the inline `transform:scale(CONFIG.popScaleFrom)` overrides `.panel.on {transform:scale(1)}`. Panels remain scaled down after arrival. `popMs` overrides both transition durations, while easing and the separate opacity timing remain embedded in CSS.
- **Presentation controls remain scattered:** lyric placement/width, typography and minimum sizes, brand styling, cursor dimensions, check appearance, border radius, and line spacing require CSS or logic edits. Canvas resolution is fixed at 320×180; SVG coordinates use a fixed 160×96 design space. Several drawing colors bypass the configured palette; `mutedColor` is unused.
- **Panel content is closed:** adding a diagram, image, or new renderer requires modifying conditional branches. Unknown types silently create blank panels. CONFIG also acquires `_cv` DOM references, mixing declarative input with runtime state.
- **Geometry lacks safeguards:** panel counts exceeding `gridCols × gridRows` overflow the intended area. Invalid dimensions, excessive gaps, overlapping lyric regions, and long lyric lines receive no validation or fitting policy.
- **Overrides are partial and permissive:** URL controls cover a useful demonstration subset, including every indexed pop time, but omit panel types/count, geometry, lyric starts/speed, seed, and most styling. Invalid pop values silently become zero; invalid colors are unchecked; shortened duration can make scheduled content unreachable. Direct CONFIG editing could supply broader control, so URL coverage alone is not the principal limitation.

Cures: establish a validated configuration schema; separate runtime state; drive transforms and both transition tracks from configuration; expose typography, lyric layout, drawing palettes, and sizing policies; provide a renderer registry with per-panel data; reject unsupported types and impossible geometry/timelines with actionable errors. Verify configuration-only swaps into both a transition composition and a diagram composition.

BODY-WRITE: Record this build as insufficient for CONFIG-only production reuse; require effective configurable pop transforms, validated layout/timing inputs, complete presentation controls, and extensible panel renderers before claiming transition/diagram portability.
SCORE: 62
