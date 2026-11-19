**Timing/tempo: 76/100.**

- **Honest allocation:** The record explicitly labels the schedule `t=0 allocation`, distinguishes it from measured timing, and acknowledges the changed camera path.
- **Exact durations:** Travel occupies 0–2600 ms, dive 2600–6800 ms, and hold 6800–14000 ms. Modulo wrapping gives an exact 14-second cycle.
- **Tempo mismatch:** Camera movement lasts 6.8 seconds versus roughly 4.5 seconds of measured timeline presence/travel (~2–6.5 s). The recreation stretches the active passage by about 51%. Its 7.2-second static hold consumes 51.4% of the cycle, weakening the transition’s momentum.
- **Motion pauses between phases:** Both phases use separate ease-in-out curves, bringing the camera to rest at 2600 ms before accelerating into the dive. Position continuity is correct, but the stop makes the progression less flowing.
- **Loop discontinuity:** At 14000 ms, the enlarged card abruptly resets to the initial timeline view. The reported equality of modulo-wrapped samples verifies periodicity, not continuity across the seam.

**Next-attempt cures:** Compress the active passage toward the measured duration, preserve momentum across travel→dive, and design an intentional loop reset. If retaining the 14-second allocation, justify the long hold through its intended opening use.

SCORE: 76
BODY-WRITE: none (read-only run)
