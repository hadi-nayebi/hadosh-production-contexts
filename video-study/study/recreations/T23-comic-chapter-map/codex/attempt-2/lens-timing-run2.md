**Timing lens: conditional pass; not ready to lift unchanged.**

- **Timeline arithmetic is correct.** Each appearance lasts 1,950 ms: dwell 0–900, dive 900–1,550, hold 1,550–1,700, pause 1,700–1,950. Three appearances total **5,850 ms**. `stateAt` uses half-open intervals and wraps correctly. Zero-duration phases are skipped; validation restores defaults for an all-zero schedule.

- **900 ms fits the stated specimen rhythm, narrowly.** It is a sub-second flash suitable for recognizing filled-versus-empty progress and locating a familiar chapter. It does not establish enough time to read twelve titles, especially two-line phone labels. The reading rationale is credible for returning viewers, but unverified for first exposure.

- **Deadline derivation prevents cumulative phase drift, but rendering costs are omitted.** `tick` samples elapsed time before `applyStep` rebuilds the grid, then schedules the previously calculated remainder. A callback entering dive at 937 ms requests 613 ms of animation, but starts that animation after rendering; it therefore finishes after 1,550 ms by that processing cost. Subsequent ticks correct against the original clock, so this does **not** compound indefinitely. Cost: shortened settle time or a snap when hold forces the endpoint. Recalculate remaining time immediately before starting the transition and scheduling its callback.

- **Skipped-phase recovery has a motion defect.** Entering dive directly after a stall restores the due appearance but does not establish its starting transform. If the previous visible phase was another appearance’s hold, the new dive animates from that old enlarged transform. Cost: a pan between enlarged panels instead of a page-to-panel dive. Define explicit recovery behavior for entry without the preceding dwell.

- **650 ms has sufficient scale travel for a dive.** Effective cover scale exceeds the configured 3.1: approximately **4.35× at 960 px** and **5.23× at 360 px**. The accelerating easing concentrates movement toward the end, supporting a plunge rather than a uniform slow zoom. That is a source-based assessment; perceptual tempo remains unverified without playback. The 150 ms settle and 250 ms dark punctuation also remain unmeasured against the specimen.

SCORE: 84
BODY-WRITE: This verdict records correct timeline arithmetic and conditional tempo suitability; the next attempt must remove render-cost deadline slippage, define skipped-dwell dive recovery, and verify flash readability and dive tempo in playback before unchanged reuse.
