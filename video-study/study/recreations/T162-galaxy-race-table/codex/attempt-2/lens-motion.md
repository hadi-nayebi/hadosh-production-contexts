Verdict: Motion lens meets the 70-point floor, but the bubble’s prolonged hold weakens the first-marker beat. Overall wave PASS is not assessed without the other four scores.

Findings:
- **Sequential crowd build passes.** `CONFIG.markers` allocates arrivals at 0, 2200, 3050, 3900, 4750, 5600 and 6450 ms. With 500 ms entrances, these remain separate; one marker stands at 2000 ms and all seven finish entering by 6950 ms. This matches the supplied census anchors. Intermediate timing fidelity remains unverified.
- **ENTER form passes.** `markerState()` applies `1 − (1 − p)³`, scaling each marker from zero to full size with deceleration. `frame()` renders that scale about its table contact point, with matching opacity.
- **Speck life passes at source level.** `frame()` varies opacity while leaving speck coordinates fixed. The configured formula produces opacity 0.15–0.50 over a 1200 ms period: continuous in-place twinkle without plate movement.
- **Bubble envelope exists, but its timing dilutes the opening beat.** `bubbleState()` fades in over 500–900 ms, holds fully through 9000 ms, then fades out through 9400 ms. It therefore remains fully visible throughout the crowd’s construction and its initial settled hold. **Cure:** shorten the bubble hold so its exit belongs to the solitary-marker beat; use additional specimen evidence to establish the exit timing rather than treating an invented timestamp as measured.
- **Crowded end hold passes.** The final entrance completes at 6950 ms; marker transforms remain settled until the 12000 ms wrap. This provides a 5050 ms fully populated hold.

Limits: Supplied text and source only; no rendered playback or independent specimen inspection. The packet does not establish the specimen’s bubble exit time, so that finding concerns beat separation rather than a measured timing discrepancy.

SCORE: 86
BODY-WRITE: none by reviewer (read-only fed review); return designated for codex/attempt-2/lens-motion.md and SCORE extraction into scores.md.