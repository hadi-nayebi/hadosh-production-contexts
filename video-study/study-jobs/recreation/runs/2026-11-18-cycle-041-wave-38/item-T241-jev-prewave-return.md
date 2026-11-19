**HOLD — T241 attempt 1 — ASSERTED-CHECKS**

| Dimension | Score | Evidence |
|---|---:|---|
| Parameterization | 0.85 | The CONFIG block names content, geometry, palette, and timing inputs. The build record’s raw swap receipts show the array count moving from 40 to 32, the replacement claim rendering, and slot completion moving from 3900 to 5250 ms. |
| Purity pre-check | 1.00 | The build record reports zero specimen hits from the purity grep. Observe-plan §2.3 describes parameterized SVG geometry, stroke reveal, and text generated from CONFIG strings. |
| Own-checks completeness | 0.35 | The raw output leaves A11 checkpoint requirements and A13 census reconciliation incomplete. |
| Fidelity-plan honesty | 1.00 | Observe-plan §2.2 names the opening draw-on departure, the expansion timing shift, and the decision to hold the array through T242’s bar sequence. These are binding departures from digest §T02. |

**Findings**

- **CP2, CP4, and CP6 use fixed evaluation instants.** The raw harness prints `@census1000`, `@census3000`, and `@census5000`. CP2’s stagger arithmetic derives the expected icon count, and CP6’s CONFIG opacity supplies the expected value. Both probes still evaluate at fixed times. CP5’s shifted receipt shows a valid timing swap for CP5. To clear A11, retain the fixed source-anchor probes and file CONFIG-derived companion assertions with evaluated instants and raw results for CP2, CP4, and CP6. Evidence is in the build record’s raw harness output and A13 index §(b), against Observe-plan §§2.2 and 2.7.
- **Several receipts omit parts of the binding state.** CP2 prints the icon count and omits formula onset and zero expansion characters. CP4’s index claims `slotRaw=0`, which is absent from the raw CP4 output. CP7 shows board opacity and array count but omits the selected ring. CP8 compares the state at 13000 ms with CP7 and leaves the mapped 7000–12900 ms hold unprobed. File raw results for the full predicates, including the hold within its mapped interval. Evidence is in Observe-plan §2.2 and the build record’s raw CP2, CP4, CP7, and CP8 lines.
- **The timing census does not reconcile key by key.** The CONFIG `timing` object contains 28 fields, counted directly from the block. `config-census.md` §2 groups them as “all 21 keys” and cites generic `stateAt`, `derive`, and bootstrap destinations. File an individual application site for each of the 28 fields to clear the A13 reconciliation defect.
- **A6 measurement provenance is present.** The seven fit rows share a named PIL `ImageFont.getbbox` instrument and DejaVu Serif proxy tied to the final build hash. The half-scale bounds are declared conversions of measured proxy bounds. The fit table supplies no independent HOLD ground under measured-fit checks 1–2.

**Limits.** This is a paperwork judgment. Harness execution, artifact hashes, browser rendering, and pixel fit were not independently verified.

**Body-write: none (read-only run)**
