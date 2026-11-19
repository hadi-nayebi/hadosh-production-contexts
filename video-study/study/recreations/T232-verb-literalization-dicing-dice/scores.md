# T232 — scores · Cycle 039 Wave 36 · FIRST ATTEMPT

## Verdict: NO VERDICT (A12 two-HOLD stop at jev-prewave)

The five-lens scoring wave was **not fired**. jev-prewave held the item twice; under INSTRUCTION Amendment A12 a second HOLD stops the item with NO VERDICT and the priced cures filed here. No lens scores exist for this attempt, and none are estimated.

- **Build scored-state:** recreation.html sha256 `bbe53950278573b0325e3824c05f7bb4e610fd336d291349d038afe59b9701ef` · 12,081 B · segment.mp4 8.000 s h264 1920×1080 (sha256 d5debada…).
- **Own checks on the final build:** harness 28 PASS / 0 FAIL (build-record.md §2, raw output) · purity grep 0 hits · node --check rc=0 ×4 scripts · count assertion built == CONFIG at all five passes · A6 legs: fit-table 0 HITs, config-census 0 HITs (as filed; the prewave's pipStyle finding below qualifies the census's §2 claim for that one key).

## Prewave line
- **jev-prewave firing 1 → HOLD** (primary ASSERTED-CHECKS) · parameterization 0.85 · purity 1.00 · own-checks 0.40 · fidelity-plan honesty 1.00 · return: `codex/jev-prewave.md`.
- **jev-prewave firing 2 → HOLD** (primary ASSERTED-CHECKS) · parameterization 0.90 · purity 1.00 · own-checks 0.55 · fidelity-plan honesty 1.00 · return: `codex/jev-prewave-2.md`.
- Firing 2 confirmed the firing-1 cures on the record's face (unapplied keys removed · P-SWAP strip predicate printed · C@7000-SETTLE evaluated · P-swap-minus criterion reconciled to 0.998 · timing-swap probe movement 2500→2900).

## Priced cures for the next attempt (from firing 2, in firing order)
1. **Receipt-index granularity (ASSERTED-CHECKS):** split the §5 C@2000 line into the two assertions the binding §2.3 mapping lists — chop-start (knife progress 0 at passes[0].tMs − chopLeadMs) and strip-visibility (strips.visible = true at 2000) — each pointing at the existing raw receipt. Audit the whole index once against §2.3 for any other merged pair before refiling.
2. **Census-row expressions:** give every fixed census row (C@1000…C@7000) its evaluated CONFIG expression in the index (active-pass derivation: `passes[max{i : passes[i].tMs ≤ t}].count` evaluated per row), and replace or supplement SWAP-CENSUS-MOVEMENT with a receipt that shows a MOVED evaluation instant at a census-anchored probe (the timing swap's fixed-instant 2700 ms flip already proves probe movement; the census-movement line must show the census instant's own state changing under a swap, e.g. knife mode at C@3000 under the timing swap, where pass 1's chop window opens at 3000).
3. **pipStyle binding (parameterization):** `pipStyle` is declared in CONFIG but read nowhere in the build. Either bind it (render branches on cfg.pipStyle for the pip drawing form, with a stub-DOM or state receipt proving the flow under a swapped value) or remove the key from CONFIG, the plan table, and census §2. Binding is preferred — pip form is a real product variable for the DLC word-animation consumer — but an unbound key may not be carried again.
4. Refile build-record + A6 legs on the cured build and refire jev-prewave as a fresh attempt's gate; the wave fires only on FIRE-WAVE.

## Limitation carried
PIXEL-UNVERIFIED: no browser binary is available in this seat, so comparison.html playback/sync was verified by construction receipts only (handle offset, clamp mapping, labels, stacking rule, script syntax) — the same limitation the prewave returns note. This did not cause either HOLD; both HOLDs were receipt-form findings (ASSERTED-CHECKS), priced above.

## Seat reconciliation (Cycle 039 close, under codex-condense firing 2 finding 2)
Any "fresh attempt" wording above is superseded: this item is carried to an authorized A12.3 completion of its existing attempt (the cure list above → fresh own-checks + A6 legs → ONE jev-prewave completion re-fire → on FIRE-WAVE the five-lens wave), as the next recreation cycle's charge. It is not a fresh attempt and does not route to practice unscored.

---

# COMPLETION (A12.3) — Cycle 040 Wave 37

## Verdict: NO VERDICT (jev-prewave completion re-fire → HOLD)

The five-lens scoring wave was **not fired**. The single authorized A12.3 completion re-fire held the item; under the HOLD form no wave fires, no lens scores exist, and none are estimated. The item remains IN PROGRESS, mid-attempt; its next re-fire is **PENDING AUTHORIZATION**.

- **Build before:** recreation.html sha256 `bbe53950278573b0325e3824c05f7bb4e610fd336d291349d038afe59b9701ef` · 12,081 B.
- **Build after (cured):** recreation.html sha256 `a4ef82acf89d858d8decc0382acbe1ce4fffdd11d53dce7d0f779db28bfc4a1e` · 12,448 B. Only build change: the pipStyle binding (cure 3).
- **Cures applied (the Wave-36 priced list, all 4):** (1) §5/C@2000 index line split into C@2000-CHOP + C@2000-STRIP, whole index audited against §2.3 (one further split, C@7000 vs C@7000-SETTLE, indexed separately); (2) every fixed census row C@1000…C@7000 carries its evaluated CONFIG expression (`passes[max{i : passes[i].tMs ≤ t}].count` per row), and SWAP-CENSUS-MOVEMENT was replaced by a moved-instant receipt (chop-start probe instant `passes[0].tMs − chopLeadMs` moves 2000 → 2400 under the timing swap) plus a fixed-census-instant state-change receipt (at fixed 2000, knife mode chop → rest under the timing swap), with the prior content-swap line retained as a supplement; (3) **pipStyle BOUND** — the render branches on `cfg.pipStyle` (dots → circles · squares → rects · diamonds → rotated rects), proven by stub-DOM receipts under swapped values (dots circle=34/rect=0 · squares rect=34/circle=0 · diamonds rect=34 rotated45=34/circle=0); (4) build-record + A6 legs refiled on the cured build.
- **Fresh own-checks on the cured build:** harness **34 PASS / 0 FAIL** (incl. count assertion built == CONFIG at all five passes) · purity grep **0 hits** · node --check rc=0 ×4 scripts · Math.random grep 0 · A6 legs refiled: fit-table **0 HITs**, config-census **0 HITs** (pipStyle priced by its real render-branch application site in the census refile; the Wave-36 census §2 pipStyle site claim is annotated SUPERSEDED there).

## Prewave line (completion)
- **jev-prewave completion re-fire → HOLD** (primary **ASSERTED-CHECKS**) · parameterization **0.95** · purity pre-check **1.00** · own-checks completeness **0.75** · fidelity-plan honesty **1.00** · return: `codex/jev-prewave-completion-cycle040.md` (also run dir `item-T232-jev-prewave-completion-return.raw`).
- The return credits the completion cures: the C@2000 split, the chop-start probe's moved instant 2000 → 2400, and the pipStyle CONFIG-swap demonstration.

## Priced cures for the next attempt (from the completion re-fire, in firing order)
1. **C@1000 expression form (ASSERTED-CHECKS):** refile C@1000 with the executable CONFIG-derived count expression, including its zero fallback when no pass is active (the filed expression indexes an empty active-pass set), and print the observed strip visibility, gap, and knife mode beside it.
2. **C@2000-STRIP expression completeness:** refile C@2000-STRIP with executable expressions and evaluated results for BOTH predicates the binding §2.3 assertion requires — strip visibility AND zero dice (the filed expression covered visibility alone).
3. Point both §C3 receipt-index entries (C@1000, C@2000-STRIP) to the corrected raw receipts.

## Limitation carried
PIXEL-UNVERIFIED stands (no browser binary in this seat; comparison verified by construction receipts only). It did not cause this HOLD; the HOLD is receipt-expression form (ASSERTED-CHECKS), priced above.
