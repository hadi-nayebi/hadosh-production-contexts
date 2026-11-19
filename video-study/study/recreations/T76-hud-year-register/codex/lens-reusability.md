Reusability verdict: **80/100**. T75’s font and override-coverage gaps are closed, but validation and state-transition assumptions still limit production reuse.

**CONFIG application:** The supplied source applies every declared key. Both font stacks are configurable and assigned; clock and card-place typography inherit `type.font`, while year, day and card-status text use `type.sans`. The `?cfg=` parser covers every CONFIG group, including complete replacement of `states[]` and its members.

**Recorded swap:** The reported 2031 / FRANCE / shortened phases / green-accent swap is consistent with the source: cumulative `durMs` boundaries, card text, year and accent all read the overridden values. Its reported 9200 ms cycle follows directly from the configuration. I could inspect these paths but could not independently rerun the harness.

**Remaining cures:**

- **Geometry validation permits a browser hang.** Setting `bWMin`, `bWVar`, `bGapMin` and `bGapVar` to zero passes validation but makes the scene generator’s `while (x < W)` loop advance by zero. Validate a strictly positive minimum step.
- **Timing validation lacks cross-field constraints.** Accepted `flipMs` values can exceed phase durations, truncating transitions at subsequent boundaries or snapping into the settled end hold. Reject incompatible schedules or define their behavior explicitly.
- **State-list generality is partial.** Every transition is gated by a year difference. Same-year scene→seed transitions therefore snap despite a card change. Consecutive seed states with different years fade the replacement card in and brighten the already-dimmed scene before dimming it again. Separate year-transition progress from card-presence and scene-intensity transitions.
- **Some shaping choices remain outside CONFIG.** Window padding and spacing (`5/6/7/8`), star radius, star-band fraction and the fixed scene seed affect appearance; they are not mathematical identities. Expose them or explicitly narrow the completeness claim.
- **Validation domains need refinement.** Years accept fractions; counts accept fractions; opacity-like geometry values accept values up to 720; empty day text cannot be requested. Use field-specific validation.

The machinery can drive another ordinary scene→different-year seed sequence from CONFIG alone. It does not yet safely support the full sequence and geometry space its override surface accepts.

BODY-WRITE: No file written: the execution tool failed to start. This response is the review text intended for `hidden_files/study/recreations/T76-hud-year-register/codex/lens-reusability.md`.
SCORE: 80
