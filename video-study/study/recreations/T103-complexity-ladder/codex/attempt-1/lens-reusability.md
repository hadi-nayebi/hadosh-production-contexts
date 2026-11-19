**Reusability/parameterization: 86/100.** Clears this lens’s ≥70 floor; the five-lens tier decision remains pending.

The source supports CONFIG-only changes to rows, item text, marker shape/color/start row, palette, typography, geometry, and timing. Row count drives stage height and cycle duration; `render(t)` derives the selected row without accumulated state. The reported swap test supports content, marker-color, and timing reuse.

Priced deductions:

- **−7: Layout requires manual fitting.** Longer names remain `nowrap` inside an overflow-hidden stage. More items can overlap the next row because `rowH` does not derive from item count. Cure: derive row heights from content or provide fit validation with explicit limits.
- **−4: Configuration has no validity guard.** Empty rows, zero/negative `stepMs`, or negative/fractional `startRow` can produce invalid selection or timing. Cure: validate inputs and reject unsupported values clearly.
- **−3: Some styling remains outside CONFIG.** Bold names, italic items, bullet glyphs, and square-marker corner radius are hard-coded. Cure: expose these choices or document them as fixed technique constraints.

The disclosed surface and timing allocations receive no deduction under this lens.

The tool host failed before filesystem access, so this assessment uses the supplied source and reported checks; I could not file the return or update `scores.md`.

BODY-WRITE: None — filesystem tooling unavailable; assessment and cure list returned here only.
SCORE: 86
