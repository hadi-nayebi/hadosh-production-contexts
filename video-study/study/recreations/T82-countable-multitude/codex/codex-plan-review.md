**REVISE before Execute.** The amended Plan leaves its predicted weakest lens unresolved. The guard and working files could not be opened because the tool host failed; this review uses the supplied Plan.

1. **Convergent defect analogue — density/readability.** T53’s ordered accumulation cures flicker, but does not cure T06’s density failure. “~8px cells” plus a glowing, three-cell-wide highlight can converge on the same phone-size blur. **Cure:** define the target phone viewport, wall dimensions, cell pitch, glyph footprint, and minimum separation. Verify a full-density still at that size before animation.

2. **Owner Cure 1 — prominence needs a construction guarantee.** “Larger + brighter + glow” does not establish findability; glow may erase neighboring structure. **Cure:** specify the highlight’s footprint, contrast, glow radius, and overlap policy. Preserve one lit logical cell while making its visual emphasis distinguishable from the amber block.

3. **Owner Cure 2 — phase ownership is contradictory.** Immediate population over `buildMs` eliminates the observed lit-alone interval. Amber appears during build, while the stated exclusivity leaves its ownership unclear. **Cure:** specify one CONFIG-driven timeline with explicit lit onset, population start/end, amber start/end, and pulse start. Preserve the observed ordering and bounds: lit alone through 4.5s, expansion at 5s, wall complete by 5.5s, amber complete by 6.5s. Explain how the deferred opening maps into this timeline.

4. **Parameterization reality.** `buildMs=1400` must move all dependent boundaries coherently. A hardcoded 4.5s population start would break that swap. Index 123 also needs a defined edge-safe emphasis policy. **Cure:** derive phase boundaries from CONFIG; validate index bounds; specify how emphasis behaves at wall edges. State whether the timing swap preserves a 14-second loop or changes its duration.

5. **Bar arithmetic / predicted minimum.** Average ≥85 requires a five-lens total ≥425. Readability at 70 requires the other four to average **88.75**. If those four score 85.6, readability must reach **82.6**. T53’s aggregate score is not evidence for individual lens scores. **Cure:** give five explicit predictions with evidence and arithmetic; target readability above its calculated requirement.

6. **Size discipline.** Runtime cell count alone says nothing about implementation size. **Cure:** generate cells from one reusable primitive and bounded CONFIG, with no per-cell authored markup, coordinates, or embedded media. Record the actual size limit from the unavailable guard before Execute.

BODY-WRITE: none (read-only run)
