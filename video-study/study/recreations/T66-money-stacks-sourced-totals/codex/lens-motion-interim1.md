Motion fidelity: **76/100**, source-based; PIXEL-UNVERIFIED.

Bound artifact: `recreation.html` sha256 `1a067ddf19969bcd6e8f5810def5fa9346edf4d9b3ac8a58d75ab5fc568d38bc`.

The default animation preserves the allocation model’s essential sequence: bottom-up rows, each tag entering after its rows finish, and the second stack starting only when the first tag completes. Completed elements persist. Both stacks and tags finish at 3.2 seconds and hold through 14 seconds.

Priced deductions:

- **−12: No automatic playback.** Loading the HTML calls only `render(0)`, where all bundles and tags are invisible. Movement requires an external call to `__T66.play()` or `restart()`. **Cure:** start playback on load or provide a visible playback control.
- **−5: The first completed beat has no exclusive hold.** The first tag finishes at 1.6 seconds, exactly when stack two begins. The specimen establishes the completed first stack alone through approximately 2 seconds. The labeled allocation model permits constructing the rows, but should preserve a readable first-complete beat. **Cure:** add a configurable completed-stack dwell and begin the second stack around 2 seconds.
- **−7: Phase exclusivity is checked rather than constructed.** `startMs = si * stackStaggerMs` happens to prevent overlap with the defaults. Increasing rows or entrance durations can start the next stack before the previous tag finishes; `checkpointsOk()` detects this but never governs playback. Tags can also overlap their final row’s pop when `popMs > rowMs`. **Cure:** derive each stack’s start from the previous tag’s completion, and derive tag entry from the final row’s actual animation end.

The motion lens clears the 70-point floor. This return cannot establish the five-lens average or award RECREATED tier.

BODY-WRITE: none; intended consumer filing: `hidden_files/study/recreations/T66-money-stacks-sourced-totals/codex/lens-motion.md`.
Body-write: none (read-only run)
SCORE: 76
