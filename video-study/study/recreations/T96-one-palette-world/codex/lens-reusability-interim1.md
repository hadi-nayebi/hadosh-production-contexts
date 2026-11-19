**78/100 for reusability/parameterization, judged from source only.** CONFIG supports palette swaps, scene reordering/count changes, clocks, break placement, timing, and HUD text. The single phase resolver and derived cycle duration make this a useful reusable foundation.

Production reuse still needs these cures:

- **Separate scene identity from rendering.** `scene.name` selects hardcoded kitchen/street/dinner branches; every new name becomes a skyline. Add CONFIG scene types and per-scene geometry so a different piece can specify its scenes.
- **Finish geometry parameterization.** Furniture, lamps, windows, and dinner positioning contain fixed coordinates and dimensions. Several exposed settings—`counterW`, `tableW`—are unused. Changing stage dimensions therefore leaves parts anchored to the original layout.
- **Validate CONFIG.** Empty scenes, nonpositive timing, invalid break indices, and break windows extending beyond a scene silently fail or shorten the break. Reject invalid configurations with clear errors.
- **Escape configured text.** Scene names, clocks, labels, and HUD strings enter SVG markup directly; ordinary text containing `&` or `<` can break rendering.

This lens supports **partial production reuse**, with the next attempt focused on scene definitions and configuration guarantees. It does not establish overall RECREATED-tier status.

BODY-WRITE: None. The execution tool failed before filesystem access, so this verdict could not be persisted to codex/ or scores.md.
SCORE: 78
