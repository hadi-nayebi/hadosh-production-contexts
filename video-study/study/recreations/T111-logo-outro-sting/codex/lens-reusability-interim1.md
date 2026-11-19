14,846
Reusability is substantial, but CONFIG alone does not reliably control every advertised dimension.

- **Earns credit:** triangle count, points, sizes, offsets, colors, spacing, blend mode, wordmark styling, easing and primary timings have application sites. The recorded text/timing/color swap and fourth-triangle check support reuse. Pure-time rendering supports deterministic seeking and reset.
- **−9 — Stage geometry is partially bound.** `CONFIG.stage` changes the container and horizontal centre, but SVG `viewBox` and both rectangle dimensions remain hardcoded to `360 × 203`. Changing stage dimensions produces inconsistent SVG and CSS coordinates; background and fade coverage can become incomplete.
- **−10 — Timing floors prevent division errors, not invalid schedules.** `Math.max(1, …)` cannot guarantee assembly completes before wordmark resolution. For example, five triangles with `assemblyMs:1100` and `staggerMs:300` start the last piece at 1200 ms, after resolution begins. No validation enforces positive cycle duration or nonnegative residual hold. Modulo preserves a configured period, but does not guarantee all phases fit within it.
- **−4 — `holdMs` controls phase labels without changing playback.** Increasing it merely reallocates identical visible time between HOLD and EXTENDED-HOLD. The default residual calculation is correct, but this key promises a timing control with no visible effect.

Next attempt should bind SVG dimensions and coverage to CONFIG, validate schedule constraints before initialization, and give `holdMs` a meaningful documented contract. Repeat the recorded swaps with changed stage dimensions and boundary-case timing/count configurations.

SCORE: 77
BODY-WRITE: none (read-only run)
