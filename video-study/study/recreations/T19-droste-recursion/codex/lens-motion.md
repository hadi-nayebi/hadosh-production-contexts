Motion fidelity: **80/100**, assessed from the supplied source; playback and three-level visual legibility remain unverified.

- **Real recursion — strong match.** `buildScene()` calls itself inside each frame interior. All three scene levels share one definition and move together under `zoomWrap`, preserving the recursive composition throughout the push.
- **Frame-centred push — strong match.** `transformOrigin: 28% 64%` matches the outer frame’s centre. `computeState()` increases the wrapper’s scale monotonically with smoothstep easing, enlarging the nested scene without cuts or independent layer drift.
- **Three levels persist, but readability is unproven.** `depth: 3` retains three scenes throughout the movement. Each interior occupies approximately 36.1% of its parent’s width and 41.6% of its height; the third scene therefore starts at roughly 13% of the outer scene’s width. Node counts establish presence, not whether its figure, candles, and frame remain distinguishable. **Cure:** inspect the start, middle, and end at phone size; enlarge the recursive interior if the third scene collapses visually.
- **Hold works; reset visibly snaps.** After the push, `computeState()` keeps scale at `1.20`, including during the phase named `"reset"`. Modulo wrapping then jumps directly to `0.94`. This introduces a discontinuity at the loop boundary; there is no animated reset. **Cure:** verify the boundary in playback and explicitly distinguish the replay jump from the source’s uninterrupted held shot.
- **Flame flicker is an unsupported addition.** `render()` applies the same sine-driven opacity pulse to every flame at every depth. The supplied observation establishes candlelight, but does not establish synchronized pulsing. **Cure:** default `flickerAmp` to zero unless source playback supports this movement.

SCORE: 80
BODY-WRITE: This return supplies the motion verdict and cure list for codex/lens-motion.md; no file was written because the execution tool failed to start.
