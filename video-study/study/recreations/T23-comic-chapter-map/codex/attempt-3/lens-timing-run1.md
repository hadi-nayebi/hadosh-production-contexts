Timing machinery needs correction before lifting as-is. Source review only; perceived motion remains unverified.

- **Correct default arithmetic.** Each appearance lasts 1,950 ms; three total 5,850 ms. `stateAt` uses half-open intervals correctly: 900 ms enters dive, 1,550 enters hold, 1,700 enters pause, and 5,850 wraps to the first dwell. Zero-duration phases are skipped; an all-zero configuration restores defaults.

- **High cost — scheduler loses its deadline coordinate after cycle one.** `tick` passes a cycle-relative endpoint (`ph2.step.startMs + ph2.step.dur`) against absolute `elapsed2`. After 5,850 ms, delays collapse to `minStepMs`—zero by default—causing continuous timer polling. Phase selection remains clock-correct, but recurring playback wastes work and invites jitter. Include `ph2.cycleIndex * tl.totalMs` in the endpoint.

- **High cost — rendering can skip a required visual update.** If dwell rendering crosses into dive, the post-render calculation schedules the dive’s **end**, without applying dive. The page can remain static until hold, then snap enlarged. Reconcile and apply the currently due phase before scheduling its next boundary.

- **Medium cost — lateness preserves deadlines, not camera progress.** The fixed `startStamp` prevents cumulative callback drift. However, late dive entry resets to identity and compresses the entire zoom into the remaining interval; resume restarts the easing curve from the frozen transform. Both change acceleration and tempo. Seek a time-derived transform or animation position for faithful continuity. Resize also snaps immediately to the dive endpoint.

- **Dwell is defensible but near the specimen’s upper limit.** At 900 ms it satisfies “<1 s,” while reading as a deliberate recognition beat. It supports noticing progress across a familiar map; it does not support reading twelve chapter titles. The supplied evidence cannot establish a closer timing match.

- **Dive pairing is plausible.** Coverage raises effective scale above 3.1—approximately 4.35× at 960 px and 5.43× at 360 px. Over 650 ms, the accelerating easing should produce a committed dive, though visual confirmation is still required. The additional 400 ms hold/dark punctuation makes each appearance a preview loop; production handoff tempo remains unresolved.

SCORE: 72
BODY-WRITE: This verdict records correct default timeline arithmetic, blocks lifting the scheduler as-is pending cycle-offset and skipped-phase fixes, and requires time-derived camera continuity plus playback verification in the next attempt.
