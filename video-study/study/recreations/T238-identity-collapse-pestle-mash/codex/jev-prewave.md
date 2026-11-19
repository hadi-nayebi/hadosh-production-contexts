**HOLD · T238 first attempt · ASSERTED-CHECKS.** The harness passes its implemented checks, but the receipt index does not establish the checkpoint coverage required by A11–A13.

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.35 |
| Fidelity-plan honesty | 1.00 |

1. **Fixed census probes lack executable CONFIG-derived companions.** The binding mapping calls for both forms. For CP4, `SWAP-TIMING` changes the state sampled at the fixed 4000 ms and reports that the scheduled stroke-2 start and peak moved. The harness does not execute a CP4 state assertion at a moving companion instant. The completion assertion does move from 6000 to 7500 ms, which clears that part of the requirement for CP6. P0 has the opposite problem: its receipt names `tSetupMs`, but the harness passes literal `0` and omits the planned pestle-rest position assertion. The Observe census also lists F-500 and F-2500/F-3500/F-4500 without corresponding receipt-index entries or cited exclusions. The cure is to retain the fixed source comparisons, execute the CONFIG-derived companions and their full predicates, and file the expressions, evaluated instants, and raw results under each checkpoint. The swap receipt should show the corresponding assertion executing at its moved instant. [Observe–Plan §1.3](item-T238-observe-plan.md:24) · [Binding mapping](item-T238-observe-plan.md:79) · [Filed payload, receipt index](payload-T238-jev-prewave.txt:106)

2. **The CONFIG census omits `rngSeed` from its key-to-application-site section.** The seed appears in the literal classification and the build record’s determinism note. The render logic confirms its application in `blobs(cfg)` through `mulberry32(cfg.rngSeed)`. Adding that binding to the census and reconciling guard 7 would clear the A13 omission without changing the build. [Filed CONFIG](payload-T238-jev-prewave.txt:142) · [Filed CONFIG census §2](payload-T238-jev-prewave.txt:279)

3. **The A6 fit table has genuine proxy measurements, with incomplete placement evidence.** I reproduced the `getbbox` dimensions for all five listed strings with the named DejaVu Sans Bold font. The rows give stage width and horizontal clearance. Guard checks 1–2 also call for the fitted element and container geometry. The table omits the label baselines and vertical clearances, including the top clearance for `toolLabel`. The cure is to file the positioned proxy bounds at the 360 px stage against the full container, accounting for the label halo when reporting clearance. [Filed fit table](payload-T238-jev-prewave.txt:246)

4. **The construction and fidelity plan support scoring once the receipts clear.** The content, timing, and palette swaps show that CONFIG affects the build. The procedural SVG route and zero-hit specimen grep support the purity pre-check. The plan implements repeated strokes, stepped identity loss, and paste unification. It explicitly defers hands, the camera cut, chess dressing, and photographic texture, and records the pose and terminal-die departures. [Filed own-checks](payload-T238-jev-prewave.txt:50) · [Observe–Plan §§2.2–2.3](item-T238-observe-plan.md:74)

**Limits.** I matched the on-disk recreation hash to the build record and reran the filed Node harness, which reported 30 passes and zero failures. This is a paperwork and logic-level verdict. Browser-rendered pixels, playback, and source-frame fidelity were outside the assessment. The missing receipts and census entry are absent from the filed evidence, so feeding the same evidence again would leave the HOLD grounds intact.

**Body-write: none (read-only run)**
