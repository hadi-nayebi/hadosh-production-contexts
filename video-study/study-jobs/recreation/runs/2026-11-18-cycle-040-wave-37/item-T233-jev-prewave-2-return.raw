**HOLD · ASSERTED-CHECKS** — T233, Wave 37, Cycle 040, attempt 1, prewave firing 2.

| Dimension | Score |
|---|---:|
| Parameterization | 0.9 |
| Purity pre-check | 1.0 |
| Own-checks completeness | 0.3 |
| Fidelity-plan honesty | 1.0 |

1. **A11/A12 — the census probes print CONFIG expressions but execute hardcoded times.** In `harness-t233.js:46–58`, all 11 `C(...)` calls pass numeric times to `stateAt`. The expression is a string used in the receipt. The rerun reproduced 32 passes and zero failures, including a genuine shifted P4 evaluation at 3600 ms after `pressDurMs` changed from 1000 to 1600. That proves P4 moves, while CP4 still runs at the literal 3000 ms. Keep the fixed source-time probes required by Observe/Plan §2.3 and pair each with an executable CONFIG-derived assertion. Print both evaluated times and the observed predicates, and show the corresponding assertion moving under a timing swap.
2. **A13 — several indexed receipts overstate what the harness checks.** `harness-t233.js:33–45,52–54` omits P7’s planned grid-at-rest predicate, prints P11’s post-swap diff without requiring it to be empty, and labels three C probes as matching P3, P4 and P7 while checking only subsets of those predicates. The binding mapping in `item-T233-observe-plan.md:84–89` requires the fuller checks. Enforce those predicates and file their observed results, including P11’s three evaluated instants.
3. **A13 — the CONFIG census omits two expected keys.** `config-census.md` §2 has no application-site entries for `seamStrokePx` and `cushionStrokePx`. Both are declared in `recreation.html:27` and used in rendering at lines 169 and 172. Add both entries and reconcile the census against the final CONFIG.
4. **A6 — the tool-label fit row measures horizontal clearance but omits the binding vertical edge.** All five PIL proxy dimensions reproduced with the named font and sizes. At stem-on, the tool-label baseline is `188 − (6 × 36)/2 − 170 − 12 = −102 px` on the 640 px stage, from `recreation.html:113,149,194`. The 88 px horizontal margin in `fit-table.md:8` leaves that clipping unaccounted for. Record the label’s intended visibility and measure its vertical clearance over that interval.

The CONFIG-driven SVG construction and the content, timing, and palette swaps support the parameterization and purity scores. Observe/Plan §2.2 explicitly accounts for the prior bowl tail, hands, separate bowl shot, background pincushions, and the replacement of the abrupt reveal with a staggered lift.

**Limits:** This review checked the filed records and construction, reran the Node harness, and reproduced the PIL proxy bounds. Browser pixels, source-frame fidelity, and wave scores were outside this call.

**Body-write: none (read-only run)**
