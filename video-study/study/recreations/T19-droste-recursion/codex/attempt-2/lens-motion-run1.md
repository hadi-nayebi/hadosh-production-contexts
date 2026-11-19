Motion fidelity: **87/100**, based on source inspection; rendered motion remains unverified.

- **Genuine recursion:** `buildScene()` calls itself for each nested interior. One transform on `zoomWrap` moves all three levels together, preserving their spatial relationship throughout the push.
- **Frame-centred push:** the transform origin `(32%, 64%)` matches the outer picture’s centre. Increasing the wrapper’s scale advances toward that picture without independent nested zooms.
- **Held composition:** the scene remains assembled continuously, without cuts, scene swaps, or depth changes. All three scene levels persist structurally through movement; their visible persistence needs rendered confirmation.
- **Main deduction — loop discontinuity:** modulo time abruptly changes scale from `1.20` to `0.94` at wrap. This visibly reverses the accumulated push in one frame and breaks the source’s uninterrupted held-shot behaviour. Calling it a hard restart accurately documents the defect but does not resolve it.
- **Ornament motion:** default flame amplitude is zero. No unsupported pulsing, figure movement, curtain animation, or independently moving recursion is introduced.

**Next-attempt cure:** play the push once and retain its terminal state. If replay is required, make restart an explicit playback action rather than an automatic interruption. Verify the complete movement and boundary in rendered playback before closing the motion finding.

SCORE: 87
BODY-WRITE: This return supplies the verbatim codex/attempt-2/lens-motion.md filing and the scores.md motion entry: 87/100, source-reviewed and pixel-unverified, with automatic loop discontinuity as the principal deduction.
