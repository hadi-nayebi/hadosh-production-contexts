**HOLD · ASSERTED-CHECKS** — T244 attempt 1 has six census checkpoints with literal evaluation times, and its CP0 receipt passes a state that contradicts the binding mapping.

| Dimension | Score | Finding |
|---|---:|---|
| Parameterization | 0.75 | The CONFIG block exposes the caption text, line timing, palette, and sweep controls. The CONFIG Census entry for `stageH` points to a fixed CSS `9/16` ratio. Changing `stageH` would therefore leave the aspect ratio fixed. Derive the ratio from `stageW` and `stageH`, or remove `stageH` from CONFIG and declare the aspect ratio as an invariant. |
| Purity pre-check | 1.00 | Build Record §Construction describes DOM spans generated from CONFIG and fills computed by `stateAt`. §Own checks records zero hits in the source-asset grep. The segment is documented as comparison evidence. |
| Own-checks completeness | 0.25 | Build Record §Own checks gives literal times for CP1, CP3, and CP5–CP8, despite the A13 index claiming that every checkpoint has a CONFIG expression. `SWEEP-MOVE` shows one evaluation instant moving from 1003.75 to 1123.75 ms, a 120 ms change. The six literal probes have no corresponding movement receipts. CP0 also runs at 250 ms and passes with L0 active and eight fully lit words, while the binding mapping specifies no active line at 500 ms. That mapping row itself pairs 500 ms with `f-73.5`, which is 0 ms relative to `segmentStartMs: 73500`. Reconcile the CP0 frame, instant, and expected state in the binding Plan. Then file CONFIG-derived receipts for the six literal probes and the corrected CP0, with raw results and timing-swap evidence for each affected assertion. |
| Fidelity-plan honesty | 0.75 | Build Record §Construction names the cumulative word sweep, the band-only scope, and the deferred tail re-chunking. The supplied Census-Anchor Mapping still says “Departure table: none” and attributes CP4 to `holdAfterCompleteMs=340`, a key absent from the supplied CONFIG. Reconcile the governing mapping with the filed deferral and the actual CP4 expression, `lines[2].displayEndMs - segmentStartMs - 50`. Full packet coverage is **NOT ASSESSED** because the technique section was absent. |

The A6 fit table clears the paperwork provenance check. It names the PIL-rendered stand-in font and reports measured ink widths for all ten rows. The widest measured line at each stage, 337.8 px at 360 px and 675.2 px at 720 px, is below its respective bound of 338.4 px and 676.8 px. Browser fit remains **PIXEL-UNVERIFIED**.

**Advisory disposition:** Apply HOLD and keep T244 **IN PROGRESS**. The visible receipt defects independently support HOLD. The feed omissions also prevent full reconciliation.

**Limits:** The workspace search returned no matching job files. This judgment uses the supplied excerpts. The technique packet section, governing `guards.md` command list, and actual Observe Plan §2b dispositions were absent. The build and harness were unavailable for independent execution.

**Body-write: none (read-only run)**
