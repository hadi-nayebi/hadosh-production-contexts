# scores — T204 dot-grid identity system + withheld title · Cycle 037 · Wave 34 · attempt 1

**Verdict: NO VERDICT** (two-HOLD stop, Amendment A12.3). The five-lens scoring wave was NOT fired on this build. The item stands IN PROGRESS; its completion — cures filed, fresh own-checks + A6 legs on the cured record, ONE jev-prewave re-fire, then the wave on FIRE-WAVE — is the next recreation cycle's charge in completion form (A12.3/A8), exactly as T199's completion was charged to this cycle.

## Prewave outcomes (jev-prewave, both firings on the identical build)

Build bound by both firings: `recreation.html` sha256 `8e1551ad7c5e9035378f36abdb77c2205dafdcc072fd150d54849928aadf681d` · 16,922 B (unchanged across the cure round — the cures were record-only).

- **Firing 1** — return `codex/jev-prewave.md` (65,300 B): **HOLD · ASSERTED-CHECKS** — parameterization 0.95 · purity pre-check 0.90 · own-checks completeness 0.35 · fidelity-plan honesty 0.95. Defects: missing census-anchor receipts (onset · 33.0 s · band landing) · observed zero-state anchor (400 ms) unprobed · CP6b probe instant not CONFIG-expressed. Disposition: APPLIED — one cure round filed in build-record.md (CP0 · CP-ONSET · CP3b · CP-BAND/+100 · CP6b expression), full cured harness run with zero failed assertions.
- **Firing 2** — return `codex/jev-prewave-refire.md` (68,383 B): **HOLD · ASSERTED-CHECKS** — parameterization 0.94 · purity pre-check 0.95 · own-checks completeness 0.40 · fidelity-plan honesty 0.95. Defects priced below as the completion cure list.

## Cure list (from firing 2, priced for the completion cycle)

1. **Endpoint receipts missing.** The §2.3 mapping prescribes zero cells at segment start (0 ms, D1) and a static lockup across the tail (5700–6200 ms, D2); neither carries an indexed executable receipt. Cure: add indexed probes at segment start (expr: build start, t=0 → visible=0) and across the D2 tail (e.g. state hash at 5700 and at `buildMs` = 6200 equal to the CP8/CP9 lockup hash), each with its CONFIG expression and raw result, and carry both in the A13 index.
2. **Timing-swap coverage incomplete.** The `assembleMs` 2700 → 2100 swap receipts show moved instants for CP2/CP4/CP5 only; CP2a, CP3, CP3a, CP3b, and CP5b also derive from `assembleMs`. Cure: file the swap run's moved instants + raw results for those five checkpoints (expected moved instants at assembleMs 2100: CP2a 577.7 · CP3 1043.9 · CP3a 1432.4 · CP3b 1823.0 · CP5b 2950 = swap completion + fadeSettleMs).
3. **Swap-title fit receipt is a calculation, not a measurement.** fit-table row 2 reports the post-fit width as base ink × fitScale (= the inner width by construction). Cure: file the RAW post-fit PIL bounds for the swapped title — render "HADOSH ACADEMY" at the fitted size (21.67 × 0.839 ≈ 18.18 px phone, DejaVuSerif stand-in) and print the measured ink bbox, not the product.

No build defect was named by either firing: parameterization (0.95/0.94), purity (0.90/0.95), and fidelity honesty (0.95/0.95) all scored high; both HOLDs are the ASSERTED-CHECKS class on receipt completeness — the same class A12/A13 were landed against, priced here at the record layer, not the construction layer.

## Own checks + A6 legs on the filed build (for the completion cycle's starting state)

- Own checks: all A11 assertions pass with A12 receipts (build-record.md, final raw output + cure round; zero failed assertions in the full cured run) · swap test passes at the exact §2.5 values · purity grep 0 hits · `node --check` clean · A9.3 count print source 538 = built 538.
- A6 measured-fit leg: `fit-table.md` — **HITs: 0** (one pre-cure HIT cured by the titleSizeFrac amendment + fit rule; firing 2's defect 3 above prices the swap row's evidence form, not a fit failure).
- A6 config-census leg: `config-census.md` — **HITs: 0** (51 CONFIG keys resolved, nested included; subject-shaping literals outside CONFIG: 0).

## Lens scores

NOT FIRED (two-HOLD stop). No scores exist for this attempt; none are carried, averaged, or implied. Bar for the completion wave, standing: five-lens average ≥ 85 AND minimum ≥ 70.

**PIXEL-UNVERIFIED limitation:** this seat has no browser binary — verification is LOGIC level (node harness over the state function + PIL rendered measurement with the named DejaVuSerif stand-in); `comparison.html` is the render surface. Pixel-level render proof was not exercisable here and is not claimed.

---

# Cycle 038 · Wave 35 · A12.3 completion — completion re-fire HOLD

**Verdict: NO VERDICT.** The five-lens scoring wave was NOT fired (completion re-fire returned HOLD; per task/A12.3 form, no second re-fire this cycle). Item remains IN PROGRESS.

Build: `recreation.html` sha256 `8e1551ad7c5e9035378f36abdb77c2205dafdcc072fd150d54849928aadf681d` · 16,922 B — unchanged (Cycle 038 cures were record-only, as in Cycle 037).

## Completion cures filed (build-record.md "Cycle 038 completion cures" + A13 index additions; fit-table.md row 2)
1. Endpoint receipts: CP-START t=0 → visible=0 · CP-TAIL-5700 hash 19103235 · CP-TAIL-6200 (expr `buildMs`=6200) hash 19103235, both equal to CP8/CP9 lockup hash 19103235.
2. Timing-swap coverage: SWAP-CP2a 577.7 → visible=12, full=6 · SWAP-CP3 1043.9 → visible=136 · SWAP-CP3a 1432.4 → visible=300 · SWAP-CP3b 1823.0 → visible=465 · SWAP-CP5b 2950 → black=538 (all measured, raw lines filed).
3. Swap-title fit: RAW PIL (DejaVuSerif stand-in) at fitted 18.1811 px phone — textbbox (0, 4, 192, 17) inkW 192 · inkH 13 · capH 13; rendered-mask inkW 191 · inkH 13. Replaces the prior base×scale product (191.2 / 13.6 / 13.2). Judge explicitly closed cures 2 and 3 and the segment-start + buildMs endpoint probes.

Fresh own-checks: purity grep 0 hits (exit 1) · `node --check` SYNTAX_OK · swap test passes · A9.3 source 538 = built 538 · full checkpoint run 18/18 pass, 0 failed. A6 legs: fit-table HITs 0 (now raw-measurement based) · config-census HITs 0.

## Completion re-fire (jev-prewave, ONE firing, A12.3 authorized)
Return filed verbatim: `codex/jev-prewave-completion-cycle038.md` (+ `.raw`, 73,117 B each; payload `codex/payload-jev-prewave-completion-cycle038.txt`, 68,529 B).
**HOLD · ASSERTED-CHECKS** — parameterization 0.95 · purity pre-check 0.95 · own-checks completeness 0.48 · fidelity-plan honesty 0.95.

## New cure list (from the completion re-fire — single named defect)
1. **D2 tail receipt uses a hardcoded evaluation instant.** CP-TAIL-5700 is filed as `expr=5700`; jev-prewave §2 / A11 requires a CONFIG-derived evaluation instant for each census checkpoint. Cure: bind the D2 tail probe to segment-relative CONFIG timing (e.g. an expression in CONFIG terms evaluating to 5700, such as `holdEndMs+300` or `buildMs-500` — the exact governing expression to be priced at cure time), file the evaluated expression + raw hash (19103235, already measured) in the receipt and the A13 index, and update both the Cure 1 lines and the A13 CP-TAIL-5700 line to the CONFIG expression form. No build change is implied by the return (the raw hash at 5700 already confirms the lockup).

Next re-fire: **PENDING AUTHORIZATION** (consumer: HQ). No lens scores exist for this item; none are carried, averaged, or implied.
