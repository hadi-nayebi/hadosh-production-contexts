Motion fidelity: **86/100**, assessed from the supplied code and source description. Rendered motion remains pixel-unverified.

- **Genuine recursion:** `buildScene()` calls itself for each nested scene. One transform on `zoomWrap` moves all three levels together, preserving their spatial relationship throughout the push.
- **Frame-centred push:** the transform origin matches the outer frame’s centre at `(32%, 64%)`. The movement approaches the framed picture without independent layer drift.
- **Held composition:** a single scene remains present throughout. The push is monotonic and eased, followed by a stationary hold; there are no internal cuts or scene substitutions.
- **Three-level persistence:** all three scene levels remain mounted throughout the movement. The code supports their persistence; this does not establish their rendered visibility.
- **Main deduction — loop discontinuity:** modulo time changes the scale instantly from `1.20` to `0.94` at wrap. That conspicuous backward snap interrupts the source’s uninterrupted held-shot motion. Naming it a hard restart accurately documents the defect but does not cure it.
- **Ornament motion:** default flicker amplitude is zero. No unsupported flame pulsing, staff animation, curtain movement, or figure movement is introduced.

**Next-attempt cure:** play the push once and retain its final state. An automatic reverse or crossfade would also introduce motion absent from the supplied source description.

Filing could not be completed because the execution tool failed to start. No files were changed.

SCORE: 86
BODY-WRITE: This return supplies the verbatim content for codex/attempt-2/lens-motion.md and the scores.md motion entry of 86/100; both filesystem writes remain pending because the execution tool was unavailable.
