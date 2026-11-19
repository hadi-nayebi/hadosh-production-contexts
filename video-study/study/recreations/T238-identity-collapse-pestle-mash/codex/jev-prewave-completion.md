**HOLD · ASSERTED-CHECKS** — the supplied Cycle 042 receipts leave required predicates unverified. The disk-based review is **NOT ASSESSED** because the T238 run files were not found under `/home/hatch`.

| Dimension | Provisional score | Evidence in the supplied record |
|---|---:|---|
| Parameterization | 0.85 | The CONFIG census §2 maps timing, palette, object fields, and `rngSeed` to application sites. The build record files separate content, timing, and palette swap results. |
| Purity pre-check | 0.80 | Build record, Receipt Index (a), guards 1 and 3, files the construction-purity grep and seeded-RNG checks. The construction scripts were unavailable for inspection. |
| Own-checks completeness | 0.40 | Several receipts omit predicates required by Observe Plan §2.3. The P7 timing-swap receipts also use different expressions for the indexed default and swapped executions. |
| Fidelity-plan honesty | 0.85 | Observe Plan §2.3 names the camera and chess-dressing deferrals, the fitted pose departures, and the choice to complete the collapse at the window edge. The technique packet was unavailable for a full comparison. |

### Findings

1. **Several checkpoint receipts omit required observations.** Observe Plan §2.3 requires output opacity `0` at P0, phase `5/9` and loss `0.76` at CP2, and eased press at C@1750. The build record’s `P0` line prints `inputO=1` alone. `C2000` and `COMP-C2000` omit phase and loss. `C1750` and `COMP-C1750` print `pressRaw` alone, while the CONFIG selects `easeInOut` for the stroke. File raw results for the missing predicates on the required calls, including the fixed and CONFIG-derived calls where the plan requires both.
2. **P7 does not file a paired run at one CONFIG expression.** In the build record’s Own Checks and Receipt Index (b), `P7-DERIVED` executes the full quantization predicate at `setupEnd + pressSteps*stepMs + stepMs = 2000`. `P7-SWAPPED` executes it at `setupEnd + 2*strokeDurMs + 7*stepMs = 4600` and reports that this expression evaluates to `4000` on default CONFIG. The default `C4000` receipts show step, integrity, and readability. They omit the full same-bucket equality and next-step transition. File those results at the same expression under both configurations.
3. **The completion adds substantive execution evidence.** `COMP-C1000` and `COMP-C1250` explicitly print the readable-count predicate. The C2500, C3500, and C4500 pairs file separate fixed and derived calls. P8 files the same four CONFIG expressions under both timing configurations, with evaluated instants and opacity pairs. Those specific additions are visible in the build record’s Own Checks and Receipt Index (b).

**Limits** — The supplied payload lacks the standalone technique packet and `guards.md` command list required by guard §3. I could not inspect the on-disk build, harness, prior harness, or A6 files. The build hash, execution results, inherited assertion inventory, and proxy measurements are filed claims. Rendered pixels remain unassessed.

**Body-write: none (read-only run)**
