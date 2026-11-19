15,163
Reusability is strong for the demonstrated swaps, but timing controls do not preserve the promised invariant across configurations.

- **Earns credit:** CONFIG binds wordmark content and typography, triangle count, points, sizes, colors, offsets, stage dimensions, blend mode, spacing, easing, and phase durations. The recorded swap uses exact alternate text, assembly duration, and triangle colors; the supplementary fourth-triangle check confirms count-driven construction.
- **Earns credit:** Positive assembly timings and nonnegative stagger values produce a clamped stagger and at least a 1 ms piece duration. Wordmark resolution follows assembly, and pure time-based rendering supports deterministic resets.
- **Costs 12 points — fixed-total invariant fails outside the demonstrated range:** `cycleEff()` returns `Math.max(CONFIG.cycleMs, fadeEnd())`. Setting `holdMs:12000` makes the cycle **15100 ms**, despite `cycleMs:14000`. Reject over-budget configurations or allocate phases within the fixed total; silently extending the cycle contradicts its promised control.
- **Costs 6 points — incomplete timing-validity floors:** Denominator guards do not validate phase boundaries. With `assemblyMs:0`, triangles still need 1 ms while RESOLVE starts immediately. Negative `staggerMs` survives the clamp and starts later-indexed pieces early. Negative resolve, hold, or fade durations can reorder boundaries. Validate finite values and enforce positive assembly/resolve/fade durations and nonnegative stagger/hold before deriving the schedule.
- **Costs 2 points — implicit geometry policy:** Wordmark centering, single-line layout, and automatic font shrinking are fixed outside CONFIG. `fontSize` therefore specifies a preferred size rather than an unconditional applied size. Expose alignment and fit policy, and document the font-size contract.

Next attempt should preserve the cycle by construction, validate timing before rendering, and expose the remaining layout policies. Repeat the recorded swaps and count check, then add over-budget, zero-duration, and negative-stagger cases.

SCORE: 80
BODY-WRITE: none (read-only run)
