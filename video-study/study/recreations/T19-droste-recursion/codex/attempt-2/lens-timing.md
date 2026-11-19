Timing score: **91/100**, based on source inspection; rendered playback remains unverified.

- **Window allocation:** 0–0.8 s settle; 0.8–9.5 s push; 9.5–13 s hold; 13–14 s continued hold. The final two intervals form one uninterrupted 4.5 s hold. This supports the pause-worthy composition without introducing cuts. These boundaries are an allocation model, not observed source timings.
- **4.5 s anchor:** Falls within the push, approximately 38.9% through its scale progression, at scale 1.041. That satisfies the packet’s sole timed observation: the composition is held mid-push. `anchorMs` records and constrains checkpoint ordering; it does not independently shape the interpolation. No exact source scale is supplied, so stronger correspondence cannot be claimed.
- **Loop boundary:** At exactly 14 s, modulo timing switches directly from the final hold to the opening scale and settle interval. The hard restart is accurately disclosed. It preserves the uninterrupted shot within each window, but repeated playback introduces a conspicuous temporal break. For the thumbnail consumer, capture or stop before the wrap.
- **Malformed checkpoints:** Finite reversed, duplicate, and out-of-window checkpoints receive deterministic repairs while retaining their roles. Non-finite checkpoints fall back through the same duration-aware repair. Effective timings are exposed during playback. However, repair guarantees ordering rather than useful pacing: four checkpoints beyond the window become 13.25/13.5/13.75/14 s, producing a 13.25 s settle, 0.5 s push, and 0.25 s hold. This is temporally valid but loses the intended slow-push allocation.

**Next-attempt cure:** Add a temporal suitability check after repair: flag or replace schedules whose push and final hold become too short for the declared allocation. Keep the supplied and effective tables visible, and verify one complete playback through the wrap.

SCORE: 91
BODY-WRITE: This return supplies the verbatim codex/attempt-2/lens-timing.md filing and the scores.md timing entry: 91/100, with allocation, anchor, loop-boundary, and malformed-checkpoint findings; rendered playback remains unverified.
