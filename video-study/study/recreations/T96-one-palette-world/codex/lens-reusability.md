**Reusability score: 76/100.** CONFIG can drive a palette swap, scene order/count, clocks, timing, and break placement. The cycle derives from scene count, and the shared palette consistently controls buildings, lights, and HUD.

Production reuse remains limited:

- **Scene content requires code edits.** `sceneBody()` recognizes three fixed names; every other name becomes the same skyline. CONFIG can change the sequence, but cannot define a different piece’s scene content.
- **Geometry is partly hardcoded.** Interior rectangles, lamp positions, and silhouette centering bypass CONFIG. Changing stage dimensions can misalign them.
- **Break settings lack validation.** An invalid scene index silently removes the break; an overflowing offset/duration truncates it. Empty scenes or invalid timing also lack guards.

Next attempt should separate scene labels from renderer types, expose scene-specific geometry in CONFIG, and validate scene/timing/break constraints. Verify with a different scene count, reordered renderer types, swapped palettes, and a nonzero break offset.

This lens alone does **not** establish overall RECREATED-tier status.

SCORE: 76
BODY-WRITE: None; the execution tool failed to start, so I could not persist this verdict to scores.md.
