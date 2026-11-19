**HOLD — ASSERTED-CHECKS. T243, Wave 38, attempt 1.** Apply the advisory hold. The filed harness reproduces 31 passes and zero failures against the recorded build hash, but the receipt index claims coverage beyond what the harness executes and records.

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.35 |
| Fidelity-plan honesty | 1.00 |

**Findings**

- **The fixed and CONFIG-derived census probes do different work.** For the five paired rows, the harness reads only `strikeFloat` at the fixed instant and applies the predicate to the companion instant. The CP8000 and CP12000 companion predicates also omit parts of P7 and P9, including calendar shift at CP8000 and label-B strike and arc disappearance at CP12000. The CP13000 hold has no receipt at the mapped mid-hold instant of `completeAtMs + CONFIG.holdMs / 2` (11,400 ms). P10 samples 10,900 ms, and its raw output prints only the total duration. The cure is to execute the same full predicate on both legs of each pair, add the CP13000 hold receipt, and file the expressions, evaluated instants, and observed state or equality results. The existing CP6000 timing swap is valid evidence: its companion moves from 4,400 to 5,400 ms and reruns the full P5 predicate. [Binding plan §2.3](./item-T243-observe-plan.md#23-census-anchor-mapping-a102--a11-assertions) · [Harness, P6–P10 and paired probes](../../../../study/recreations/T243-calendar-of-days-panel/harness-t243.js#L55)
- **The CONFIG census omits `labelStrikeDyPx`.** The SVG renderer uses this key for the lower endpoints of the label-strike diagonals, but the application-site census omits it. Adding that key-to-endpoint entry would clear this A13 omission. The grid, text, palette, and schedule otherwise show real CONFIG value flow, supported by the filed swaps. [CONFIG census §2](../../../../study/recreations/T243-calendar-of-days-panel/config-census.md) · [SVG label-strike construction](../../../../study/recreations/T243-calendar-of-days-panel/recreation.html#L183)
- **The fit table misses the swapped label pair’s shared space.** The PIL/DejaVu Sans method provides measured ink for the listed rows. The table gives each label a 180 px half-stage allotment, but the renderer centers both labels at their ring columns on the same baseline. At a 360 px stage those centers are about 92 px apart, computed as `4 × (215 / 7) × 0.75`. The same 16 px proxy font gives ink widths of 174 px for `AFTER THE DEADLINE` and 86 px for the omitted `NEXT TIME`, implying about 38 px of horizontal overlap between the centered ink bounds. The cure is to measure both swapped labels in their actual positions, resolve the overlap, and file the refreshed fit rows. [Fit table](../../../../study/recreations/T243-calendar-of-days-panel/fit-table.md) · [Label placement](../../../../study/recreations/T243-calendar-of-days-panel/recreation.html#L192)
- **Purity and fidelity planning clear.** The SVG is generated from CONFIG and time, and the purity grep returned zero specimen references. The binding plan accounts for both ring conversions, the final day-35 slash, and the tasks-panel join. It explicitly records the expanded entrance, omitted neighboring scenes, and deferred star crack. [Build record](../../../../study/recreations/T243-calendar-of-days-panel/build-record.md) · [Phase A plan](./item-T243-observe-plan.md#2--plan)

**Limits** — The submitted payload omitted the CONFIG/construction excerpt, packet section, and guard command list. Those are feeder defects, resolved for this review by reading the filed sources directly. The hold rests on the filed build evidence. Browser pixels and playback were outside this paperwork review.

**Body-write: none (read-only run)**
