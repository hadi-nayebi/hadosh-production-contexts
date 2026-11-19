**Verdict: REVISE.** The nested-scene construction supports a continuous zoom, but the parameter test and loop schedule remain contradictory. Resolve these before Execute.

1. **Convergent defect — structurally addressed.** T15’s particle-reserve failure is inapplicable: there is no particle pool. Rendering the inner scene inside the screen from t=0 prevents an arrival-time scene swap. One camera pose function with cubic easing can provide continuous position and velocity, provided holds use its exact endpoint poses. Verify this across phase boundaries.

2. **Owner catches — partly addressed.** Inner ink and screen colors establish a readable default, but arbitrary palette swaps do not preserve contrast. Record the default contrast and validate supported replacements. Phrase exclusivity is inapplicable to simultaneous webpage content; the relevant requirement is mutually exclusive camera phases. Implement one phase selector with explicit half-open intervals, including reset/fade phases.

3. **Parameterization — revise the binding contract.**
   - The exact swap test still uses superseded geometry: `120→96`, yielding `3.0→3.75`. With the measured baseline, it must test `177→96`, yielding approximately `2.034→3.75`. Preserve the old case separately as a legacy fixture if required.
   - Put `stage`, `startScale`, the extended hold, cursor fade thresholds, and loop timing in CONFIG or explicitly derive them. Otherwise these are likely hiding places for literals.
   - Recompute content layout from the **current** visible viewport after every geometry change. At width 96, the visible local height becomes about **54.1 px**; layout sized only for the baseline 99.8 px band will crop.
   - Define valid screen geometry and whether width changes preserve its center or left edge.

4. **Timing and loop — construction remains incomplete.** The stated holds and zoom already total 14,000 ms, leaving `loopFadeMs:500` without a defined allocation. Specify fade-out, invisible reset, and fade-in intervals within the cycle. Zero opacity at a single seam sample is insufficient: the entire reset must occur while invisible. The 2.6-second zoom is also a deliberate departure from the measured approximately 1.1-second camera move; retain the allocation rationale and score that departure honestly.

5. **Five-lens bar — weak lens named, prediction unpriced.** Readability is a credible risk, but no numeric prediction establishes average ≥85 and minimum ≥70. T101’s final minimum was **reusability 76**; the stale swap test and width-dependent crop make that lens especially exposed here. Record all five predicted scores with reasons, retaining readability’s historical 54 as evidence of the crop failure’s severity.

6. **Size discipline — passes.** Laptop, nested webpage, and one camera move isolate the core mechanic. Keep typing and result-card choreography outside this attempt’s required mechanism.

**Required before Execute:** reconcile the swap fixture, make layout respond to changed geometry, fully allocate the loop phases, and file numeric lens predictions. Then verify endpoint mapping, boundary continuity, reset invisibility, and hold readability under both baseline and swap configurations.

The filesystem tool failed to start, so this review was not saved locally; the consumer must persist this return verbatim.

BODY-WRITE: none (read-only run); verdict: REVISE.
