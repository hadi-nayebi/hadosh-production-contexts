**HOLD — ASSERTED-CHECKS.** T242, Wave 38, Cycle 041, attempt 1, authorized re-fire on build `c93bc67ecfae8cd6d574773ae692dfdeac42e041450c5996bd9d605b23f2870e`.

| Dimension | Score | Basis |
|---|---:|---|
| Parameterization | 0.90 | CONFIG drives timing, geometry, labels, and palette. `starPoints(cfg, …)` now uses the supplied configuration. Group layout still assumes two pairs. `recreation.html:9–40, 69–71, 99–102` |
| Purity pre-check | 1.00 | The recreation generates SVG primitives. The purity receipt reports zero specimen hits, and the comparison page loads the segment on the original side. `build-record.md:44`, `comparison.html:17–18` |
| Own-checks completeness | 0.35 | The on-disk SHA-256 matches, and the harness rerun reproduced 26 `PASS` lines and zero failures. The receipts still leave binding checkpoints and predicate results uncovered. `build-record.md:10–40, 49–70`, `harness-t242.js:15–75` |
| Fidelity-plan honesty | 0.90 | The plan records perimeter draw-on, the three stubs, the full-height payoff, the split exit, and the English label substitution. `item-T242-observe-plan.md:13–14, 59–60, 73–84` |

**Findings**

- **A11 coverage remains incomplete.** CP2 still runs only at the literal `1500`, and CP9’s chart-absent predicate still runs only at the literal `10500`, although `schedule(CONFIG).exitEnd` is available. CP1’s zero-bar state at `500` ms has no probe at that anchor. CP7’s combined predicate runs only at `6500` and requires positive stub-3 progress, while the Observe row describes a two-stub hold with the second group label appearing. The §2b schedule prices the label reveal but leaves that stub-state difference unresolved. The cure is to reconcile CP7 explicitly, retain the fixed source-time probes, and index executable CONFIG-derived companions with the full predicates and observed results. `item-T242-observe-plan.md:21–31, 80–84`, `harness-t242.js:15–24, 41–54`, `guards.md` command 8.
- **The timing re-fire moves the stub-1 check, but it checks a narrower predicate.** P3 checks both completion and CONFIG-derived height at `3000` ms. At `3600` ms, P3-SWAP checks and prints only progress. C@5500, C@8500, and P8 also print PASS without their observed predicate values. The command 8 index names CP3 but points to C@3500 instead of its existing C@2500 receipt. The cure is to run the complete P3 predicate at both instants, print the observed values for each indexed predicate, and correct the command 8 cross-reference. The fixed CP3 and CP5 probes themselves now pass, with stub progress `[0,0,0]` and `[1,0,0]` respectively. `harness-t242.js:25–28, 41–54, 61–75`, `build-record.md:58–70`.
- **The fit proxy has measurement provenance, but some margins use stale geometry.** The named PIL font reproduces the `100%` width of 87 px, and the cured axis anchor gives a 9 px left margin for that label. The table still names `axisX=92`, gives the mid-axis label 11 px where the cured geometry gives `110−14−67=29` px, and places the full-label centre at 498 where the current layout gives `110+26+3×96+(88−40)+28=500` px. The cure is to recompute the affected container positions and margins from the cured CONFIG and refile the proxy rows. `fit-table.md:3–15`, `recreation.html:10–13, 40, 82–83, 97`.

This is the second HOLD for attempt 1. The filed two-HOLD disposition is **NO VERDICT** if the advisory HOLD is applied. `INSTRUCTION.md` A12.3.

**Limits.** The submitted payload omitted the standalone guard list, packet section, and binding Observe mapping. I read those records from disk, so the HOLD rests on the filed evidence. Browser pixels, deployed-font fit, and playback were outside this paperwork review.

**Body-write: none (read-only run)**
