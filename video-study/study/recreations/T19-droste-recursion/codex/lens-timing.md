Timing lens: **82/100**. The default allocation is coherent and honestly labeled, but reset semantics and malformed-checkpoint handling need correction.

- **Window and phase allocation — passes.** `durationMs: 14000` matches the handled cut, 2:16.5–2:30.5. `computeState()` allocates 800 ms settle (5.7%), 8700 ms push (62.1%), 3500 ms hold (25%), and 1000 ms labeled reset (7.1%). A long push followed by a sustained hold reasonably serves the held-composition technique. These proportions remain an allocation model, not measured source timing; the build record makes that distinction clearly.

- **4500 ms anchor — arithmetic passes; evidentiary scope is limited correctly.** With `pushStartMs: 800` and `pushEndMs: 9500`, normalized time is 3700/8700 ≈ 0.4253. `smoothstep()` produces progress ≈ 0.3888 and scale ≈ 1.0411. This agrees with the recorded rounded values. The source anchor establishes a mid-push composition; it does not independently establish that progress or scale. **Cure: low effort:** preserve that distinction in subsequent scoring records.

- **Reset and loop boundary — material temporal defect.** `computeState()` returns progress 1 throughout 13000–14000 ms. Consequently, `holdEndMs` changes only the phase label: the actual hold lasts 4500 ms, and no reset occurs during the advertised reset interval. At 14000 ms, modulo wrapping abruptly changes scale from 1.20 to 0.94. A discontinuous replay can be acceptable for a bounded segment, but this implementation should explicitly identify it as a hard loop restart. **Cure: low effort:** label the final interval truthfully and document the boundary, or implement a deliberately prescribed reset interval.

- **Reordered overrides — reported, but not strictly repaired.** `validateCheckpoints()` exposes incoherence, and sorting/clamping prevents backward push progression. However, `effectiveCheckpoints()` reassigns checkpoint identities; the anchor can move away from its supplied timestamp. Clamping also permits equal checkpoints, collapsing phases despite the strict-order claim. **Cure: moderate effort:** reject invalid timing overrides and use a coherent fallback, or enforce strictly separated checkpoints with explicit effective-anchor reporting.

This timing score clears the individual ≥70 floor; it cannot establish the five-lens tier decision. Assessment is based on the supplied source and record. Local execution and filing were unavailable because the execution host failed to start.

SCORE: 82
BODY-WRITE: This return supplies the timing-only findings and priced cures for consumer filing at codex/lens-timing.md and citation in scores.md; no local file was written.
