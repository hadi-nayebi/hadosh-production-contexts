**Reusability / parameterization: 72/100 — IN PROGRESS.**

CONFIG exposes the main content and timing controls: PRs, approval ranges, counter duration, check sequences, reviewer counts, arch dimensions, stamp properties, card interval, and loop length. The supplied URL overrides support a useful content swap.

Production reuse still requires changes outside CONFIG:

- **Palette wiring is incomplete.** Panel, foreground, muted, and check colors remain CSS literals. The accent override changes the stamp and status pill, while checks and reviewers retain green. `archRed` and `archDark` are unused.
- **Motion constants remain embedded.** CSS fixes whip transitions at 180 ms despite configurable `whipMs`. Whip distance, blur, opacity, stamp scale, slam duration/easing, and hide duration remain literals.
- **Merge behavior assumes the original sequence.** `drawChecks(3)` hardcodes the merge-state index. Status-pill color depends on the English substring `"down"` rather than explicit state data.
- **Configuration lacks validation.** Empty arrays, invalid dimensions/colors, unsupported check states, and incompatible timing values are unchecked.
- **The requested swap exposes a counter conflict.** At `cardMs=900`, the default 950 ms counter overlaps the next card’s counter. Previous animation frames are not cancelled before a new counter starts.
- **Diagram reuse is limited.** Dimensions are configurable, but arch geometry, texture, and glyphs remain embedded in the drawing function.

To reach production reuse, wire palette and motion settings throughout, configure merge state explicitly, validate configuration, and cancel the previous counter animation on each card change.

The filesystem tool failed to start, so I could not inspect or update `codex/lens-reusability.md`, `build-record.md`, or `scores.md`. This assessment uses the supplied source; runtime behavior was not independently tested.

SCORE: 72
BODY-WRITE: No files written because the filesystem tool failed to start; pending record findings are incomplete palette/motion wiring, hardcoded merge semantics, missing validation, counter overlap at the requested 900 ms swap, and embedded arch geometry.
