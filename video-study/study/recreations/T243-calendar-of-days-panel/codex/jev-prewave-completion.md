**HOLD · ASSERTED-CHECKS — T243, Cycle 042 completion**

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.45 |
| Fidelity-plan honesty | 1.00 |

1. **A11/A12 — Some checkpoint assertions still lack timing-swap receipts.** The completion harness runs all six census companions at their moved instants. The binding CP4000 grid-complete assertion, P1, runs only at the default `gridDurMs = 1200`. P6 and P10 now print their CONFIG-derived instants and equality results, but their own predicates run only at the default instants. CP7000 and CP13000 exercise hold equality at different positions. To clear, run P1 with a changed `gridDurMs` and rerun P6 and P10 under the timing swap. File each expression, default and moved instant, and raw predicate result in the completion index. Evidence: `item-T243-observe-plan.md` §2.3, `harness-t243.js` lines 22–26, 55–58, 77–80 and 118–137, `build-record.md` completion receipt index (b)–(c).

2. **A6 — The filed label-gap evidence needs an in-position ink receipt.** `fit-table.md` names PIL and DejaVu Sans and reports measured glyph widths. Rows 10–11 give spans symmetric around each text centre, which are reproducible from centre ± half the listed width. The cited Node label checks use unshifted cell centres and report separation of the layout’s character-width boxes. They do not establish the final-position ink edges claimed by those rows. To clear, file the actual final SVG text coordinates for both configurations, the PIL draw command and anchor, and the raw positioned ink bounds at 360 px. Recompute the gap from those bounds. Evidence: `fit-table.md` lines 3 and 17–22, `harness-t243.js` lines 98–107, `recreation.html` lines 140–155 and 199–212, `guard-measured-fit.md` checks 1–2.

3. **Parameterization, purity and fidelity clear the floor.** The CONFIG census maps the content, geometry, timing and palette keys to application sites, and the harness exercises content, grid, timing and palette changes. The construction uses CONFIG-driven SVG, and the specimen-reference scan returned zero hits. The plan explicitly accounts for source differences, including the expanded entrance, the deferred star crack and transition, and the Latin text substitution. Evidence: `config-census.md` §§1–3, `recreation.html` CONFIG and renderer, `guards.md` commands 1–3, packet 14 `digest.md` T04, `item-T243-observe-plan.md` §§2.2–2.3.

**Limits** — I reran the on-disk harness and counted 39 `PASS` lines and zero `FAIL` lines. Both inline scripts passed `node --check`, and the recreation, comparison and segment hashes matched the record. Pixel fit, playback and source-frame fidelity were outside this paperwork review. The verdict is advisory for the recreation runner’s disposition in the build record.

**Body-write: none (read-only run)**
