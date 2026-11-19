# T205 — Scores · Wave 34 / Cycle 037 · first attempt

- Item: T205 vote-to-grid conversion diagram · queue #96 · Packet #12 (Vox "The Electoral College, explained", ajavsMbCapY) · digest-local T04.
- Final build: recreation.html sha256 `64c7b905300b689785b981d6723647d6b3357a90b0a6fbb7902e3e320c2d95b3` · 18,570 B (completion cure round applied; pre-cure build was sha256 `28851f7899801d236606c7df9b5162dd5bafb0a6a0ba8573a9c539b6e1c5ae47` · 16,170 B).
- Tier: **IN PROGRESS** — no verdict (below).

## Pre-wave gate (jev-prewave, INSTRUCTION §5 leg 3b) — BOTH firings
**Firing 1** (on the pre-cure build, hash `28851f…c5ae47`): **HOLD — ASSERTED-CHECKS**
| Dimension | Score |
|---|---:|
| Parameterization | 0.75 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.25 |
| Fidelity-plan honesty | 1.00 |
Return filed verbatim: `codex/jev-prewave.md` (239,985 B, sha256 `19c8eca185bed90c0a15c82fc0cc70672f349f71815423ad965587131558b259`; raw stream at `codex/jev-prewave.raw`, identical). Disposition: APPLIED — the one cure round of the two-firing form (governing disposition + cure detail: `plan-amendment-cycle037-addendum1.md`; receipts: `build-record.md`).

**Firing 2** (completion re-fire on the cured build, hash `64c7b9…d95b3`): **HOLD — ASSERTED-CHECKS**
| Dimension | Score |
|---|---:|
| Parameterization | 0.75 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.40 |
| Fidelity-plan honesty | 1.00 |
Return filed verbatim: `codex/jev-prewave-refire.md` (254,001 B, sha256 `2f2fccf0aa389263ab7d70f1299e13c889f56fcecd6376ddbb35eb4921ca9a71`; raw stream at `codex/jev-prewave-refire.raw`, identical). Disposition: APPLIED — this is the second HOLD; the two-HOLD stop binds (below).

## Verdict
**NO VERDICT.** Priced reason: jev-prewave returned HOLD on both firings of the two-firing form (INSTRUCTION §5 leg 3b + Amendment A12.2 — the two-HOLD stop: a second HOLD files NO VERDICT with cures priced, and the wave is not fired on that build). The five-lens Codex scoring wave was therefore **NOT FIRED** — no lens scores exist for this attempt (printed as not-run, never as zeros), and no average or minimum is computed. The item remains IN PROGRESS, mid-attempt in this job (A3 §3); any further cure + re-fire requires the completion/re-attempt authorization path priced by HQ, exactly as Cycle 037 §0b.2 priced the same state for T190/T196/T197.

## Cure list (from firing 2, priced for the next authorized act)
1. **Cure 2 endpoint bound (CP01 receipt gap + a bound the build fails as written).** Plan Amendment Cure 2 prescribes `outlineProgress < 0.30` across the interval ending at the CONFIG-derived 30% point (570 ms); the harness asserted CP01 only at t=0, and firing 2's own evaluation of `stateAt(570)` returned exactly **0.30**, failing the strict bound at the endpoint. Cure: either a governing amendment to the endpoint rule (e.g. `< 0.30` on [0, 570) with `≤ 0.30` at the endpoint) or a build change satisfying the strict bound at 570 ms — plus an indexed executable receipt at the CONFIG-derived instant either way.
2. **CP13 instant printing + swapped CP10/CP11 receipts.** The CP13 receipt prints a fixed `8000ms` label instead of its evaluated CONFIG instant (`phases.convertedHold.startMs + 1000`); Cure 6 lists moved CP10/CP11 probes but the swap receipts file only CP08/CP09/CP12. Cure: print CP13's evaluated instant in the raw receipt and file raw assertions at the swapped CP10 (7350 ms) and CP11 (7550 ms) instants — or cite a governing disposition for their exclusion. (Firing 2 confirms CP09's moved instant 6400→7150 ms IS demonstrated.)
3. **Config-census phases[] coverage wording.** The grouped `phases[].id/startMs/endMs` census row claims application through `phaseOf`/`prog` for every phase, but `substrateHold` has no effect on runtime state and `convertedHold`'s boundaries have no independent renderer effect (they supply harness timing/duration only). Cure: reconcile both census entries against their actual use and record the governing disposition for schedule-metadata phases.

## Own checks + A6 legs (final build)
- Harness (A9.4/A11/A12): exit 0, **TOTAL FAILS = 0** on the implemented assertions (CP01–CP14 with all Cure-1 predicates, renderer geometry receipts for full/disc-left-split/mirrored-split layouts, swap, mirror+partition, blockLabel). Firing 2 priced receipt-completeness gaps (cure list above), not assertion failures.
- Purity grep (guards cmd 1): exit 1, **0 hits**. Syntax `node --check`: OK. Seeded-RNG census: Math.random count 0, NONE-BY-DESIGN.
- **A6 measured-fit leg (fit-table.md): 0 HITs.** Disposition: both rows (VOTE, swap CAST) are PIL rendered measurements with the named stand-in font (DejaVu Sans Bold, A12.2 form (ii)); ink height 11.3 px at the 360 px stage vs the ~11 px floor — passes with a 0.3 px margin, printed in that file; firing 2 confirms the rows satisfy the measurement-provenance requirement.
- **A6 config-census leg (config-census.md): 0 HITs** on the final build. Disposition: the completion round wired `content.blockLabel` (firing-1 finding 4 cured in the build, not in the claim) and reconciled the D1 key removals/addition; firing 2's finding 3 prices a remaining coverage-wording overstatement on the grouped `phases[]` row — carried as cure-list item 3 above, not hidden by the 0-HIT count.

## Limitation
**PIXEL-UNVERIFIED:** no browser binary exists in this seat — no browser playback or pixel sample of recreation.html was performed by any check in this attempt. All render-side evidence is harness evaluation of the build's pure state/geometry functions (the same functions the renderer calls), PIL stand-in renderings/measurements with named instruments, and source inspection; comparison.html is the render surface. Both prewave returns print the same limit.

---

## Supersession — firing-2 authority (dated 2026-11-18, Wave 34 Condense)

Filed at the direction of recreation Cycle 037's codex-condense firing 13 (point 1). The "Firing 2" and "Verdict" sections above describe this item's second prewave firing as a completion re-fire and state that any further re-fire requires HQ authorization. That misstates the authority: firing 2 was the ORIGINAL attempt's second firing inside Cycle 037, under the standing two-firing form (firing 1 HOLD → one cure round → firing 2). It was not an A12.3 completion re-fire — no completion had been charged yet. The correct routing, as the cycle record (`runs/2026-11-18-cycle-037-wave-34/RUN.md` §5), the HQ entry `rec-2026-11-18-wave34`, and QUEUE row #96 all state: this item's completion (cures per the firing-2 list above → fresh own-checks + A6 legs → ONE prewave re-fire → wave on FIRE-WAVE) is the NEXT recreation cycle's first charge, authorized under Amendment A12.3 — the same authority under which T199's completion ran this cycle. No HQ authorization is required for that completion re-fire; authorization would be required only for a re-fire AFTER a completion re-fire HOLDs (the T190/T196/T197/T199 state). The same correction is entered in `build-record.md`.


---

## Cycle 038 completion (Wave 35, A12.3) — prewave completion re-fire: HOLD

- Build: recreation.html sha256 `64c7b905300b689785b981d6723647d6b3357a90b0a6fbb7902e3e320c2d95b3` · 18,570 B — **UNCHANGED in Cycle 038** (all three firing-2 cures were rule/receipt/census cures; governing amendment `plan-amendment-cycle038.md`).
- Cures applied from the firing-2 list: (1) CP01 endpoint bound — governing amendment C38-1 (`< 0.30` on [0, 570), `≤ 0.30` at the endpoint; the endpoint IS the 30% instant by construction) + indexed executable receipt at the CONFIG-derived instant: expression `phases.outlineDraw.startMs + 0.30*(endMs − startMs)` evaluated = 570 ms, interior samples 0 / 0.15 / 0.29947368421052634, endpoint measured exactly 0.3. (2) CP13 receipt prints its evaluated CONFIG instant (`phases.convertedHold.startMs+1000` evaluated = 8000 ms) + raw assertions filed at swapped CP10 (7350 ms, fillByBlock.west 0.3333333333333333) and CP11 (7550 ms, 0.6666666666666666). (3) Config-census phases[] row reconciled: runtime phases vs schedule-metadata phases (substrateHold · convertedHold) with the governing disposition recorded (C38-3).
- Fresh own-checks on the filed build: harness re-run whole (CP01–CP14 + CP01-ENDPOINT + swap set CP08–CP12 + mirror + blockLabel), exit 0, **TOTAL FAILS = 0**; purity grep exit 1, **0 hits**; `node --check` OK; Math.random count 0. A6 legs: fit-table **0 HITs** · config-census **0 HITs**.
- **Pre-wave gate (jev-prewave, A12.3 completion re-fire — the single authorized re-fire): HOLD — ASSERTED-CHECKS**
| Dimension | Score |
|---|---:|
| Parameterization | 0.85 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.45 |
| Fidelity-plan honesty | 1.00 |
Return filed verbatim: `codex/jev-prewave-completion-cycle038.md` (189,635 B, sha256 `a26d79a6873d8daaafd35dd7f41fcfbbce07ff503d3980e98877557a05e5b45e`; raw stream at `codex/jev-prewave-completion-cycle038.raw`, identical). Payload: 97,027 chars, size+tail verified before firing; one stream, exit 0. Disposition: APPLIED — HOLD branch (below).
- The return expressly confirms the Cycle 038 cures landed: the amended 30% endpoint at 570 ms reproduced on its own re-run, CP13 at its evaluated 8000 ms instant, swapped CP10/CP11 at 7350/7550 ms, the C38-3 census disposition, and the fit-row provenance.

## Verdict (Cycle 038)
**NO VERDICT.** The completion re-fire returned HOLD, so per the completion form the five-lens Codex scoring wave was **NOT FIRED** — no lens scores exist for this completion (printed as not-run, never as zeros), and no average or minimum is computed. The item remains **IN PROGRESS**, mid-attempt in this job (A3 §3).

## Cure list (from the completion re-fire, priced for the next authorized act)
1. **Receipt-expression completeness in the harness prints.** The SWAP-CP12 raw line (7750 ms) omits its evaluated CONFIG expression (`swapped phases.blockWash.endMs`) although the index's G2 line claims each moved probe prints its expression; the CP01-ENDPOINT interior samples (0/285/569 ms) and the split wash/connector probes likewise use fixed timestamps in the harness. Cure: derive the interior samples from the outline phase and the geometry probe times from `blockWash.endMs` / `connectorExtend.endMs`, and print expression + evaluated value + observed result on every such line; re-issue the affected receipts.
2. **Connector receipt proves helper geometry, not renderer attributes.** The contact receipt evaluates the pure `connectorGeometry()` helper (160 px length), while the SVG renderer computes the connector's `x`/`width` separately in its render function. Cure: file the actual SVG connector attributes at the CONFIG-derived contact instant in both layouts, or assert over a shared function that supplies those attributes to the renderer. (The governing western-crop disposition D1 stands — the return confirms it.)

## Next step
**PENDING AUTHORIZATION (HQ).** This was the single A12.3 completion re-fire; it HOLDed. Any further cure + re-fire for T205 now requires HQ authorization (the T190/T196/T197/T199 state). No wave fires and no re-fire is attempted from this seat until that authorization lands.

## Limitation (carried)
**PIXEL-UNVERIFIED:** no browser binary exists in this seat — no browser playback or pixel sample was performed by any check in this completion. The filed continuous-playback gap also remains open (scores/build-record supersessions stand).
