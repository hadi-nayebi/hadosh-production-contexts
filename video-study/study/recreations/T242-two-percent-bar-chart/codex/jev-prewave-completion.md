**HOLD · ASSERTED-CHECKS** on the supplied T242 Cycle 042 completion record.

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.35 |
| Fidelity-plan honesty | 0.90 |

1. **Seven applicable census checkpoints still lack CONFIG-derived evaluation instants.** The receipt index, §(c), gives literal-time probes for CP1 and CP3–CP8. P8 supplements CP7 with a CONFIG-derived group-label probe at 6400 ms, while the combined stub and label predicate still runs at a literal 6500 ms. CP2 and CP9 have CONFIG-derived receipts, and P3-SWAP demonstrates a moved evaluation instant from 3000 to 3600 ms for stub completion. Under `jev-prewave.md` §2, the remaining seven checkpoints need executable receipts with CONFIG expressions, evaluated instants, and observed results for their mapped predicates. The fixed source-anchor probes can remain as additional evidence.
2. **Several receipts omit observations their predicates require.** In `build-record.md`, “Own checks” and receipt-index §(b), P5’s index says `stubP[2]=1` and `fullP=0`, while its raw output prints only `fullP=0`. At CP3, the receipt prints zero stub progress but omits the completed outlines named in the binding census. At CP8, the receipt prints settled fill and height but omits the `100%` label observation. The raw receipts need to print those values at the relevant evaluation instants.
3. **The fit-table geometry corrections are supported by the supplied measurements.** In `fit-table.md`, the axis-mid margin recomputes to `110 − 14 − 67 = 29 px`, and the full-label centre recomputes to `110 + 26 + 3×96 + (88 − 40) + 28 = 500 px`. The table identifies PIL `getbbox` and DejaVu Sans Bold as its proxy measurement provenance. These rows do not add a HOLD ground.
4. **The other dimensions clear the floor on the paperwork.** The CONFIG block and `config-census.md` §2 identify application sites for timing, geometry, labels, and palette. The build record’s purity receipt reports grep exit code 1 with zero specimen hits and no external loads. The binding mapping and CP7 reconciliation disclose the sampled difference explicitly, with stub 3 at 0.25 progress while group label 2 appears.

**Limits:** Disk-backed assessment was unavailable. The workspace search found no T242 or `jev-prewave.md` files, so the build hash, harness execution, and filed source mapping are **NOT ASSESSED** independently. The verdict prices the supplied paperwork only.

**Body-write: none (read-only run)**
