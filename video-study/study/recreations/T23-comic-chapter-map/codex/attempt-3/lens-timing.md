The default tempo is plausible, but the timing machinery needs corrections before an as-is production lift. This is a source review; perceived motion remains playback-unverified.

- **Timeline arithmetic passes.** Each appearance lasts 900 + 650 + 150 + 250 = **1,950 ms**; three total **5,850 ms**. First-appearance boundaries are 900 / 1,550 / 1,700 / 1,950 ms. `stateAt` uses half-open intervals correctly, wraps across cycles, and skips zero-duration phases. Validation restores defaults when all four durations are zero.

- **900 ms meets the supplied “<1 s” description, narrowly.** It gives viewers time to recognize progress and locate the next chapter, rather than read twelve titles. That suits a recurring, familiar tracker. It does not establish an exact specimen tempo match: the evidence supplied bounds the flash duration but does not measure it. Cost: limited confidence in fidelity, rather than a demonstrated timing defect.

- **650 ms has enough scale travel for a dive.** Coverage overrides the nominal 3.1 scale: default geometry produces approximately **3.85× at 960 px** and **5.92× at 360 px**. The accelerating easing supports a plunge, although its restrained opening concentrates movement toward the end. This is credible dive construction; whether it feels sufficiently sharp requires playback.

- **Deadline scheduling avoids cumulative callback drift, but camera motion does not catch up faithfully.** Elapsed time stays anchored to `startStamp`, and scheduling from `remainingMs` fixes the prior cycle-coordinate error. However, a late dive starts at identity and runs the entire easing curve over the shortened remainder. Pausing and resuming also restarts easing from the frozen position. Cost: variable acceleration and compressed dives despite correct phase deadlines. Use elapsed-phase animation progress for consistent motion.

- **Post-render reconciliation is bounded, not guaranteed.** `tick` reconciles once after the first application. If that second `applyStep` itself crosses another boundary, the newly due phase is calculated but not applied before scheduling its end. Entire phases can also pass during callback suspension. The supplement’s “a phase is never silently skipped” claim is therefore too strong. Cost: stale visuals under substantial rendering delay; reconcile until current, with a bounded recovery policy.

- **Preview punctuation changes the production rhythm.** The 150 ms enlarged hold and 250 ms dark pause occupy **400 ms per appearance**. They are correctly configured, but the supplied specimen describes takeover by the next scene. Production needs an explicit handoff before this sequence can transfer unchanged.

SCORE: 83
BODY-WRITE: This verdict records correct default arithmetic and nonaccumulating phase deadlines, while requiring elapsed-progress dive recovery, robust post-render reconciliation, narrower skip claims, and a production handoff decision before an as-is lift.
