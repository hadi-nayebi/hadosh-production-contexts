# jev-prewave return — T232, firing 2 (verbatim, Cycle 039 Wave 36)

**HOLD — T232, firing 2. Primary classification: ASSERTED-CHECKS.**

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.55 |
| Fidelity-plan honesty | 1.00 |

- **The cure round supplied several missing results.** The three named CONFIG keys are gone. `P-SWAP` now prints `strips.visible=false`, `C@7000-SETTLE` records the evaluated settle state and the P4 comparison, and the amended P-swap-minus criterion agrees with the filed `0.998` result. The build record’s `SWAP-TIMING` receipt moves the phase-relative probe from 2500 to 2900 ms. [Build record §§2 and 6](build-record.md#2-own-checks--raw-harness-output-a94-harness--node-config--logic-scripts-extracted-from-recreationhtml-and-evaluated-via-vm)
- **The receipt index still omits a separately planned assertion.** The raw `C@2000` output now records `dice=0` and `strips.visible=true`, but §5 still indexes only the chop-start predicate. The binding §2.3 mapping lists these as two assertions. Add a strip-visibility index entry pointing to the existing raw result. The fixed census rows also still need their evaluated CONFIG expressions. `SWAP-CENSUS-MOVEMENT` shows a count change at the same 4000 ms under a content swap, so it supplies no evidence of a moved evaluation instant. [Build record §§2 and 5](build-record.md#5-receipt-index-a13--reconciled-before-payload-assembly)
- **The CONFIG census still claims an application site absent from the build.** Census §2 says `pipStyle` drives face data and pip layout selection. In the hash-matched HTML, `pipStyle` appears only in its declaration. Bind the field to rendering and file the result, or remove it and reconcile the plan and census. The count and timing swaps still demonstrate that CONFIG drives the core sequence. [CONFIG census §2](config-census.md#2-key--application-site-resolution-value-flowing-sites) · [Recreation HTML](recreation.html)
- **Purity, fidelity-plan disclosure, and measured-fit provenance clear this review.** The record describes procedural SVG construction and files a zero-hit specimen-reference scan. §4 names the implemented beats and the deferred hands, gather, shell, and micro-steps. The fit table names PIL and DejaVu Serif for its proxy measurements. [Build record §§2–4](build-record.md#3-a6-legs-on-the-final-build) · [Fit table](fit-table.md)

**Limits.** Verified the SHA-256 and 12,081-byte size of the local HTML. Assessed the filed receipts without rerunning the harness or evaluating browser playback.

Body-write: none (read-only run)
