Motion fidelity: **89/100 — source-based, PIXEL-UNVERIFIED.**

The core motion matches the declared reconstruction:

- Entry rises 46 px over 550 ms, with opacity increasing from 0.15 to 1. Switching `enterMotion` to `"slide"` moves horizontally.
- One DOM card owns the stage. At each 2,950 ms boundary, its content switches and the next entry begins immediately; no exit interval exists.
- The 2,400 ms hold has constant position and opacity.
- The source and record honestly distinguish these reconstruction choices from the specimen’s scale-up and camera settle. No deduction for that declared difference.

Priced deductions:

- **−7: Pause/resume breaks motion continuity.** `pause()` does not capture elapsed time into `baseMs`; `play()` resets `startStamp`, returning playback to the previous base rather than the paused position. **Cure:** preserve elapsed time on pause and resume from that timestamp.
- **−4: Restart can multiply animation loops.** `restart()` schedules another rAF without cancelling the existing chain. **Cure:** track and cancel the pending frame, maintaining one animation loop.

Movement’s perceptual legibility, smoothness, and actual hold stillness remain unverified in a browser. This score supports the motion lens only; it does not establish the overall tier.

BODY-WRITE: Filing `hidden_files/study/recreations/T56-recreated-press-cards/codex/lens-motion.md` was blocked because the execution tool could not start (`codex-code-mode-host` missing). No file was written.
SCORE: 89
