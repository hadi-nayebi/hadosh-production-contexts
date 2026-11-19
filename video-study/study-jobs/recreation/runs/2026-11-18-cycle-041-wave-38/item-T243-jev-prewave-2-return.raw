**HOLD · ASSERTED-CHECKS — T243, attempt 1, Wave 38, cured build `c79885d2…`.**

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.45 |
| Fidelity-plan honesty | 1.00 |

The filed harness reproduced **34 passes and 0 failures**, and the HTML hash matched the build record. The re-fire cures add shared predicates for the census pairs, restore the late-bound CONFIG entries, and add measured fit rows for both label pairs. The receipts still have the following defects.

1. **P10 uses a fixed hold offset.** The plan prescribes `completeAtMs + 500`, and the harness executes it. The receipt index names 10,900 ms, while the raw result prints only `durationMs=12400`. The fixed offset conflicts with A11’s CONFIG-derived checkpoint requirement. Use a CONFIG-derived position inside the hold, such as `completeAtMs + holdMs / 4`, and file the evaluated instant and equality result. P6 already uses a CONFIG-derived midpoint, but its raw line likewise needs to print the evaluated instant alongside the equality result. [Observe/Plan §2.3](./item-T243-observe-plan.md#23-census-anchor-mapping-a102--a11-assertions) · [Harness P6](../../../../study/recreations/T243-calendar-of-days-panel/harness-t243.js#L55) · [Harness P10](../../../../study/recreations/T243-calendar-of-days-panel/harness-t243.js#L76)

2. **CP13000’s fixed and companion legs evaluate the same expression.** The new receipt prints `fixed@11400`, but both inputs to the harness are `completeAtMs + holdMs / 2`. The full-state hold assertion is present. The pair still needs the filed fixed reference at 11,400 ms and a separately derived companion. The timing swap proves movement and reruns the full predicate for CP6000 at 4,400 → 5,400 ms. The other census companions have default-run receipts only. File their evaluated swap instants and predicate results, with CP13000’s fixed leg remaining at 11,400 ms. [Census probe definitions](../../../../study/recreations/T243-calendar-of-days-panel/harness-t243.js#L79) · [Timing swap](../../../../study/recreations/T243-calendar-of-days-panel/harness-t243.js#L115)

3. **Several populated receipts omit the values they claim to record.** The CP probe output prints `companion expr instant=…` without the expression itself, and the receipt index groups the probes into one entry. The order check before `labelsStart` prints both zero values but omits its evaluated instant. Reconcile the index against the cured harness with one entry per census pair, each naming its CONFIG expression, evaluated instant, and raw predicate result. Include the evaluated `labelsStart − 1` instant in the order receipt. [A13 receipt index and cure addendum](../../../../study/recreations/T243-calendar-of-days-panel/build-record.md#L55) · [Order assertions](../../../../study/recreations/T243-calendar-of-days-panel/harness-t243.js#L36) · [Census output](../../../../study/recreations/T243-calendar-of-days-panel/harness-t243.js#L91)

The other dimensions clear the floor. CONFIG drives the SVG construction, and the harness exercises changes to content, grid, timing, and palette. The plan names the source departures, including the expanded entrance, the deferred star crack, and the transition out. The fit table identifies PIL-rendered DejaVu Sans proxy measurements, and I reproduced the final-state label centres from `labelLayout`. The first firing’s label-fit and late-bound census findings are cleared on the filed evidence. [Build and receipts](../../../../study/recreations/T243-calendar-of-days-panel/build-record.md) · [Measured fit](../../../../study/recreations/T243-calendar-of-days-panel/fit-table.md) · [CONFIG census §2](../../../../study/recreations/T243-calendar-of-days-panel/config-census.md#L14) · [Phase A construction and departures](./item-T243-observe-plan.md#22-construction-choice)

**Limits** — The assembled re-fire payload omitted the CONFIG/construction excerpt, packet section, and guard command list. I read those from disk, so the feeder omission is separate from the HOLD grounds. Browser pixels and source-motion fidelity were outside this paperwork review. [Re-fire payload](./payload-T243-jev-prewave-2.txt)

**Body-write: none (read-only run)**
