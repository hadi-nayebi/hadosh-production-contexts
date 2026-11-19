The six windows form a coherent 22.5-second sequence, with a completed-state hold in each figure. These are source-derived timings; the reference allocations are labeled rather than measured checkpoints, and no playback evidence establishes perceptual tempo fidelity.

- **FIG.20:** draw completes at 2.76s, leaving 0.84s to register the outcome.
- **FIG.21:** dots fill over 1.82s, approximately one every 121ms. Summary typing runs from 5.25–6.735s, leaving 0.765s fully readable. This is the weakest beat: roughly 100 characters arrive in 1.485s, making the final joke difficult to absorb before replacement.
- **FIG.22:** bars/donut finish at 10.05s; the tenth stack unit arrives at 10.20s. The resulting 0.90s completed hold gives the simultaneous animations a clear landing.
- **FIG.23:** nodes arrive approximately 428ms apart; the badge appears at 13.50s, leaving 1.20s for the punchline. This is the clearest setup–completion–hold rhythm.
- **FIG.24:** the cliff begins at 17.42s, correctly 68% through its window. Collapse reaches 1 at 18.10s, leaving 0.60s. The 0.68s accelerating fall provides a distinct payoff after the slow countdown.
- **FIG.25:** correction appears at 18.956s; the intended stamp entrance runs 19.82–20.204s. Final notes finish at 21.516s, leaving 0.984s before the scene ends on its completed state.

The build record overstates uniformity: sub-animations finish at different relative points. The construction generally guarantees **at least** 0.6s after completion, rather than exactly 0.6s. Also, the stamp is a plain inline span; its transform cannot reliably produce the intended timed slam until it has a transformable display type.

Next-attempt cures: give summary typing a reading-time budget that scales with text length; validate actual completion timestamps and holds per figure; make the stamp transformable; and verify uninterrupted playback, especially the summary, collapse, and final reading hold. For DLC diagrams, preserving a nominal hold alone does not guarantee time to understand a completed relationship.

BODY-WRITE: Replace the uniform-completion claim with per-figure completion/hold timestamps, and require content-length reading budgets plus playback verification before consolidating this timing mechanic.
SCORE: 82
