Verdict: timing machinery is largely sound, but lifting it as-is is not supported: the default endpoint handoff and lateness evidence need correction.

- **Timing contract conflict.** `recreation.html:48–51` uses 300/430/0/0, yielding **3 × (300 + 430) = 2,190 ms**. The charged 900/650/150/250 configuration yields **3 × 1,950 = 5,850 ms**, verified through overrides. These are different presets, not an arithmetic failure. The build record’s “Evidence basis” explicitly chooses the shorter rhythm; the consuming record should retain that distinction.

- **Dwell is flash-like, but tracker comprehension remains unproved.** A 300 ms dwell satisfies the supplied “<1 s” description and avoids the near-second reading beat of 900 ms. However, the build record’s Basis B reports continuous motion without an observed static hold; matching its total window does not establish matching its tempo. Recognizing progress and distinguishing the illustrated target from completed panels within 300 ms remains unverified. Cost: an apparently faithful flash may fail its tracking task.

- **The default dive endpoint is not guaranteed to appear.** In `camTick` (`recreation.html:1337`), camera updates cease once elapsed time leaves the dive. With zero hold, `applyStep` immediately resets the transform for the next dwell; no path explicitly presents progress 1 before that reset. Cost: the miniature may cut away before covering the viewport, contradicting the build record’s endpoint-handoff claim. An explicit endpoint/handoff presentation would clear this.

- **Deadline arithmetic passes; the presentation probe overclaims.** `buildTimeline`/`stateAt` (`:954–978`) correctly derive cumulative boundaries, skip zero-duration phases through half-open intervals, and wrap cycles. `tick` (`:1390`) uses elapsed time from a fixed origin, so callback lateness does not accumulate as schedule drift. But `simulatePresentation` (`:999`) merely subtracts one supplied delay from every phase; it neither executes the scheduler nor observes painted intervals. It cannot substantiate actual phase-collapse reporting.

- **Dive speed is credible in the source model.** Computed endpoint scales are approximately **15.96× at 360 px** and **4.80× at 960 px**, traversed in 430 ms. The easing reaches approximately 14.5% of interpolation halfway through and 40.1% at three quarters, concentrating movement near the end. This supports an accelerating dive rather than a slow zoom, subject to rendered confirmation.

Limits: opened the local source and build record; source SHA matches the supplied hash. Arithmetic and pure-function probes were executed. Rendered tempo, painted endpoint, and tracker comprehension were not assessed. No files changed.

SCORE: 79
BODY-WRITE: none (read-only run); this verdict supplies the build record with verified timing arithmetic, the preset conflict, and unresolved endpoint-presentation and lateness-evidence findings.