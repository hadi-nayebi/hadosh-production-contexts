Motion fidelity: **95/100**, assessed from the supplied source; rendered movement remains pixel-unverified.

- **Genuine recursion:** `buildScene()` calls itself for each nested interior. A single transform on `zoomWrap` moves all three levels together, preserving their spatial relationship.
- **Frame-centred push:** the transform origin, `(32%, 64%)`, matches the outer frame’s centre. Increasing scale therefore pushes toward the picture without separate nested zooms.
- **Three-level persistence:** all three scene levels remain mounted throughout playback, with no swaps or depth changes. Their framing persists geometrically; visible recognition is outside this lens.
- **Held composition:** no cuts, independent object movement, or camera-direction changes interrupt the composition. **−5:** the smoothstep acceleration/deceleration and eventual stationary hold introduce a specific movement profile that the supplied observation does not establish. Cure: verify those movement transitions against the source shot and retain only observed changes. Exact checkpoint values belong to the timing lens.
- **Boundary behaviour:** default `once` playback retains the terminal frame and stops. It avoids a snap-back that would break the uninterrupted shot. Optional `loop` playback would visibly reset scale, but is not the scored default.
- **Ornament motion:** default flicker amplitude is zero; candles, staff, curtains, and figure gain no unsupported animation.

SCORE: 95
BODY-WRITE: This return supplies the motion review for verbatim filing at codex/attempt-3/lens-motion.md and the attempt-3 motion entry in scores.md: 95/100, source-assessed, pixel-unverified.