**Verdict — 92/100 for motion fidelity.** T219 attempt 1 preserves the described sequence from the icon exit through the scoreboard hold. The square fades start one at a time within each state, with several fades overlapping.

**Findings**

- **Icon exit and tile entries.** In `recreation.html` (`stateAt` and `render`), the icon and banner fade together and reach zero opacity at the tile-entry boundary. A tile renders only once its entry progress is positive, so there is no visible overlap at the boundary. Harness v3 `TILE-EARLY` confirms the icon is gone while Pennsylvania is visible at scale 0.5281 and Virginia is still absent. Both tiles grow about their final centers. They first appear at a nonzero scale, giving each entry a small pop before the growth.
- **Rows, frame, and tag.** In `recreation.html` (`render`), the free rows fade in after both tiles settle. Virginia’s frame grows outward as its enslaved-population row fades in. The tilted tag then fades in at the corner after the frame completes. Harness v3 `P2`, `FREE-DONE`, `P3`, `FRAME-DONE`, and `TAG-DONE` corroborate that order.
- **Square counts and numerals.** In `recreation.html` (`stateAt`), each square begins fading in index order, and the numerals begin with the first squares. The configured fade lasts longer than the interval between starts, so multiple squares in each grid are partly visible at once. Harness v3 `P4` supports the progressive reveal but does not establish how much overlap the specimen shows. If playback confirms that the specimen finishes each fade before starting the next, the motion cure is to end each square’s fade by the next square’s onset.
- **Completed-board hold.** Harness v3 `COUNTS` and `HOLD-LATE` report the same completed state, with 21 Virginia squares and 15 Pennsylvania squares. The clamped progress functions in `recreation.html` keep the scoreboard fixed through the window end, including the deferred portrait coda.

**Limits —** Assessed the supplied source and receipts under the stated hash binding. Rendered playback and the specimen’s square-fade overlap remain unverified.

SCORE: 92  
BODY-WRITE: none (read-only run). Return for filing at `codex/lens-motion.md`, with the motion score for `scores.md` and the square-fade finding for Condense.
