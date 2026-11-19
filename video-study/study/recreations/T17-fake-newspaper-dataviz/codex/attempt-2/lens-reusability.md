Reusability is substantially improved: figure content, sequence, windows, chart data, waffle counts, counter range, stamp and notes are configurable. The builder registry and progress renderers provide useful extraction boundaries, and node thresholds, bar widths and text reveal counts respond to data length.

The remaining gaps matter for the diagram container:

- **CONFIG coverage is incomplete.** `palette.muted` is never consumed, contradicting the build record. Warning red remains hardcoded in CSS.
- **Animation literals remain embedded.** Badge scale `1.6`, stamp rotation `-8`, graph sampling step `0.02` and cliff-marker appearance at `p > 0.5` are outside CONFIG.
- **Builders remain coupled to this scene.** They close over global `P` and helpers that read global CONFIG. Their actual signatures accept no palette argument, despite the record’s claim. Extracting them requires carrying scene globals or changing their interfaces.
- **Supported data can overrun its animation budget.** Four permitted notes finish at normalized progress `1.24`; the fourth never appears, and the third finishes during the promised hold. A permitted `cliffAt` beyond `animFraction(fig)` loses the intended cliff segment because collapse snaps to completion first.
- **Layout adaptation is partial.** Stack unit height is fixed by device mode, rather than derived from stack count as claimed. Chart label margins, stamp dimensions and desktop height do not adapt reliably to longer content. Figure starts and total duration require manual coordination.
- **Swap evidence establishes computed changes, not verified visible results.** Changed counts, widths and counter strings demonstrate data responsiveness. Without DOM inspection or rendered evidence, “a sixth node on screen” and successful containment remain unproven.

Cures for the next attempt: remove or consume inert fields; expose remaining motion settings; inject palette and timing dependencies; derive or validate sequence windows; distribute note timing within the animation budget; validate cliff position against that budget; and test changed data sizes through mounted DOM measurements and rendered completion states. Correct the build record’s claims about dependency injection, stack sizing and visible-output verification.

BODY-WRITE: Require an executable CONFIG-consumption audit and mounted-output swap checks; supported maximum data must complete before the hold, and build-record claims must distinguish computed state from observed visible output.
SCORE: 72
