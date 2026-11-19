**Verdict: FIRE-WAVE**

- **Parameterization — 0.90:** Genuine CONFIG core in recreation.html (units, columns/counts/colors, threshold, brackets with arc fractions, palette, ballot, arc geometry, assemble/fill/bracket/sweep timings, sweepHand, type) with derived threshold angle, fill/bracket/sweep phase times, and column-mean sweep target in computeLayout; swap test regenerates for new values.
- **Purity pre-check — 0.97:** Construction is DOM/SVG generation from parameters (computeLayout + render layer), traced board image explicitly rejected, and §5b records the exact purity grep at 0 hits with `<video>`/`<img>` counts at 0 and zero external assets.
- **Own-checks completeness — 0.95:** Results recorded, not asserted — swap test 28 checks / 28 PASS with swapped and default values printed, purity grep pattern and counts printed, and `node --check` on both inline scripts recorded CLEAN; pixel-unverified limitation is disclosed.
- **Technique fidelity plan — 0.80:** §2 names implemented P3-T05 mechanics (board + box, sector fill with tabs, threshold line, all four brackets, sweep hand, legend/counts) and names both deferrals with reasons — the in-window annotation card and ballot microtext — and §1 labels the phase timings as an allocation model rather than in-window choreography.

**Named defects (non-blocking, for the scoring wave to price):**
- Sweep-target discrepancy: packet P3-T05 and the record's own §1 evidence place the verdict hand in the undecided zone (~55°), but the default CONFIG targets column "against" (mean angle 15.08° in §5a) — present and CONFIG-retargetable (swap test retargets to undecided), so not a silent deferral, but a fidelity risk the motion lens must price.
- Minor fixed render constants outside CONFIG (ballot-box 74×58 px, chip min-width, 180 ms pop, sweep-from 90°) — residual hard-coding in presentation details, not in the technique's core variables.

BODY-WRITE: none (read-only run)
