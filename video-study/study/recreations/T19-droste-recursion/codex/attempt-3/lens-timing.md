Timing score: **72/100**. Logic-level review only; rendered playback remains unverified.

- **Window allocation — deduct 18.** The model assigns 0.8 s settle, 8.7 s push, and 4.5 s stationary hold. That is coherent as an authored 14 s study, but the supplied sampling places the Droste shot at approximately 3.5–6.5 s within a montage. Extending that shot across the whole window substantially changes its temporal emphasis. The source comment asserting an uninterrupted shot conflicts with this evidence. Cure: distinguish the 14 s segment from the observed shot interval, and time the reconstruction against that interval.
- **4.5 s anchor — deduct 6.** At 4.5 s, the default model is mid-push: normalized push time ≈0.425, eased progress ≈0.389. This satisfies the limited observation of a held composition mid-push. However, `anchorMs` affects diagnostics and checkpoint repair, not the playback curve directly. Moving the anchor alone does not retime the push. Cure: describe it explicitly as an observation marker, or give it a defined temporal constraint without inventing a source scale.
- **Boundary semantics — no deduction.** Default once playback clamps at 14 s and retains the terminal frame. The 13–14 s interval continues the same hold; it introduces no extra event. Explicit loop mode wraps to the opening state, producing an intentional reset rather than a seamless loop. These semantics are clear.
- **Malformed checkpoints — deduct 4.** Repair preserves roles and produces ordered, duration-bounded checkpoints; invalid numeric overrides are rejected. Compressed allocations are flagged, but still play. The suitability flag measures hold only through `holdEndMs`, although stationary time continues through `durationMs`; it can therefore flag insufficient hold despite ample actual hold. Cure: assess total stationary duration separately from named phase intervals.

The timing lens clears the 70 floor, but does not establish the wave-average gate.

Filing could not be performed because the execution tool failed to start; the text above is the return for the named consumer to file.

SCORE: 72
BODY-WRITE: Intended filing is codex/attempt-3/lens-timing.md verbatim and a timing score of 72 in scores.md; neither filesystem write was completed in this run.