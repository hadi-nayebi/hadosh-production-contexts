The source provides substantial configuration coverage: arbitrary quote lists, per-card schedules and anchors, palette overrides, measured quote wrapping, derived sequence timing, and diagnostics. Card selection and opacity are computed from absolute time, supporting history-independent seeks. Reusability still has several material gaps:

- **Attribution fitting diverges from rendering.** `chipWrap()` simulates character-level splitting of long tokens, but the attribution spans have no corresponding `overflow-wrap` or `word-break` rule. A long speaker name or URL can overflow while the model reports adequate fit.
- **Scheduled duration misses staggered completion.** A scheduled card without an exit derives its end from entrance completion and configured duration, excluding the later line and attribution reveals. Playback can stop before its content becomes fully visible.
- **Playback position is not preserved.** Frames never update `pausedAt`; pause/resume restarts from the last explicit seek, and resize or font completion renders that stale position.
- **Validation covers selected cases, rather than the configuration domain.** Zero entrance or exit durations can produce `NaN` opacity at boundaries. Negative durations, invalid geometry, and missing quote text lack guards. Anchors are configurable without content-dependent containment checks.
- **Palette coverage is incomplete.** Shadow color remains hard-coded black. Contrast fallback supports lightening only; light-panel swaps can remain unusable, although diagnostics expose that failure.

The reported mutation checks establish that configuration keys have effects; they do not establish that combinations remain valid. Browser verification is especially consequential for attribution wrapping because its simulated and rendered breaking rules differ. The supplied material supports an independent score, but contains no predecessor source or score from which to establish improvement.

SCORE: 79
BODY-WRITE: Align attribution CSS with its wrap model, derive scheduled duration through all staggered reveals, preserve the live playback position, and validate timing and geometry boundaries before production reuse.