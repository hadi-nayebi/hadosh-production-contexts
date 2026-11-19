**HOLD — ASSERTED-CHECKS.** T242, Wave 38, Cycle 041, queue #107, attempt 1, build `b460a8fb9b45a…`.

| Dimension | Score | Evidence |
|---|---:|---|
| Parameterization | 0.85 | `recreation.html` derives chart geometry and timing from CONFIG. The harness exercises content, timing, and palette swaps. `starPoints()` reads the global `CONFIG.starInnerF`, so the render override for that key has no effect. |
| Purity pre-check | 1.00 | `build-record.md` cmd 1 records zero specimen hits. The recreation constructs the chart and figure from SVG primitives, with the source clip confined to the comparison page. |
| Own-checks completeness | 0.25 | The harness rerun reproduced 22 passes and zero failures. The receipts leave binding states untested, and the filed schedule contradicts two of those states. |
| Fidelity-plan honesty | 0.90 | `item-T242-observe-plan.md` §1 and §2b carry the packet’s height-ratio mechanic through perimeter draw-on, three stubs, full fill, and the two-stage exit. The plan explicitly records the English label substitution and the full-fill timing departure. |

**Findings**

- **Guard 8 fails at CP3.** Observe §1 requires four complete outlines and zero stubs at 2500 ms. `harness-t242.js:41` checks only outline completion. The filed schedule starts stub 1 at 2400 ms with a 400 ms duration, so its progress is `(2500−2400)/400 = 0.25` at CP3. The same issue occurs at CP5, where Observe requires stub 1 only at 4500 ms and stub 2 is already at `(4500−4400)/400 = 0.25`. The cure is to reconcile the schedule with those states and file the raw stub values at both fixed anchors.
- **A11–A13 coverage is incomplete.** CP2’s only drawing check runs at the fixed 1500 ms sample. CP7’s P8 checks the group-label animation’s endpoints while leaving the checkpoint’s combined stub-and-label state untested. The swap re-evaluates P2 at 2900 ms, but the claimed P3 receipt logs stub **start** at 3000 ms without executing P3’s completion predicate at 3400 ms. P7 also runs only on the default CONFIG despite §2b requiring phase exclusivity under both configurations. The cure is to execute the full checkpoint predicates at CONFIG-derived instants, retain the fixed source-time probes, and index the expressions, evaluated instants, and raw outcomes.
- **A6 records a proxy measurement and a fit defect.** `fit-table.md` names PIL and DejaVu Sans Bold as its instrument and stand-in. Its own axis-top row places the ink 9 px beyond the left edge at stage width, so the empty HIT list overstates the measured fit. The cure is to remeasure after repositioning or carry the proxy overflow explicitly in the fit disposition.

**Limits.** Reviewed the filed records and reran the Node harness against the matching HTML SHA-256. Browser pixels, deployed-font fit, and source playback were outside this paperwork review.

**Body-write: none (read-only run)**
