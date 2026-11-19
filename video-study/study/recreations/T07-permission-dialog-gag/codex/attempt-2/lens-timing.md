Timing closely matches the measured reference, but the loop restart is not drift-safe.

- Windows are **1700 / 1830 / 2500 ms**, totaling **6030 ms**, with no unallocated interval.
- Selection delays are **930 / 1000 / 1370 ms**; derived holds are **770 / 830 / 1130 ms**. The third hold is distinctly longest, as required.
- The first arrival’s 120 ms flash sits inside its selection delay, so it adds no time. Each final selection appears directly.
- Within each cycle, absolute event offsets and catch-up prevent callback lateness from shifting subsequent scheduled boundaries.

The defect is at rollover: `origin = performance.now()` starts each new cycle after the previous terminal callback, rendering, and completion emission. Callback lateness and processing time therefore accumulate across loops. The first arrival also requires another timer callback. Restart is consequently **not guaranteed at the exact 6030 ms boundary**.

The reported checks verify timeline arithmetic, but do not demonstrate scheduler behavior across delayed cycle boundaries. This is a source-based assessment; runtime execution was unavailable.

BODY-WRITE: Preserve the measured timing arrays; require rollover from the previous scheduled origin (`origin += cycleMs`), catch-up across missed cycles, and a delayed-callback test proving that repeated loop boundaries remain anchored to the original clock.
SCORE: 88