# T219 — scores · Cycle 039 Wave 36 · FIRST ATTEMPT

## Verdict: NO VERDICT — the scoring wave never fired

- **Build:** recreation.html sha256 `877ba1e2b3d22f320c88e4ee5abb9de60cb7d45e9a0e039d9f00a56c17ccba91`, 12,822 B · segment.mp4 sha256 `2c215921c4359364948135dbb5d6cf72f1e1f2a2eac5b6ebf0109b6801e3b7f5`, 2,343,683 B, 27.023 s (304.5–331.5 s) · comparison.html sha256 `a2e4b0d53f2effa3a40c62cf02e9d5054ec20340c7e8bf2832967b2dd8a9fd77`, 3,020 B.
- **Own checks:** harness v2, 25/25 PASS with raw output in build-record.md (all probe instants CONFIG expressions; content/timing/palette swaps separate; two negative tests; count assertion source 21+15=36 = built 36).
- **A6 legs:** fit-table.md (12 measured rows, PIL/DejaVu Serif PROXY) HIT list EMPTY · config-census.md HIT list EMPTY.
- **PIXEL-UNVERIFIED limitation (A10.1):** no browser binary exists in this seat; all state claims are logic-level (pure stateAt); the comparison page is the render surface for the owner's visual verdict. No lens scores exist to average — this limitation is recorded, not scored around.

## Gate record

- **Phase A (all four fired before any build script, returns verbatim in the wave run dir, dispositions at observe-plan §2b):** codex-observe **CONFIRMED-WITH-GAPS** · jev-observe-exit **ADVANCE-WITH-GAPS** (queue 1.0 · prior-scores 1.0 · mechanics 0.5 · variables 0.5 · guidance 1.0 · consumer 1.0) · codex-plan-review **REVISE** (cures P1–P4 applied) · jev-plan-exit **REVISE**, primary UNBOUND-SCHEDULE (parameter 0.75 · construction 0.90 · execute 0.90 · verify 0.65 · failure 0.85 · plateau 1.00; cures applied). Execute opened on the amended Plan.
- **jev-prewave firing 1: HOLD** — ASSERTED-CHECKS (parameterization 0.85 · purity 0.95 · own-checks 0.35 · fidelity-plan 0.95). Return: run dir `item-T219-jev-prewave-return.md`.
- **Cure round applied** (the one permitted round): every A11 probe instant re-expressed as a CONFIG expression with probe-mobility receipts (SWAP-TIMING-TILES) · CP0 banner assertion added · CP11/CP12 portrait-coda deferral + CP13 item-boundary dispositions indexed · fit rows for "1,700", "539,000", "15" measured and added · A13 index reconciled (fit/census as applicable guards) · comparison clamp bound to the recreation's live `derive(CONFIG).durationMs` (COMPARISON-CLAMP receipt).
- **jev-prewave firing 2: HOLD** — ASSERTED-CHECKS (parameterization 0.90 · purity 0.95 · own-checks 0.40 · fidelity-plan 0.95). Return: run dir `item-T219-jev-prewave-2-return.md`. Second HOLD → the wave does not fire (A12.3 stop rule); lens scores: NONE.

## Cures carried to the next attempt (from firing 2, verbatim substance)

1. **Complete the CP1 receipt:** at `tTilesMs + tileDurMs/13`, assert and print `iconP=0` alongside Pennsylvania's progress/scale and Virginia's absence — the separate icon-exit probe evaluates an earlier instant and does not cover CP1's own instant.
2. **Reconcile binding assertions with harness v2:** replace the literal-time CP10 call in the binding census-anchor mapping with the CONFIG-derived HOLD-LATE probe and its COUNTS baseline; replace the stale `C@18000` count reference in the build record with the filed `COUNTS@expr(completeAtMs+500)=17000` receipt.
3. **Repair the receipt index against the supplied guard list:** map each actual guards.md command to its receipt, mark score arithmetic as due after the wave, reconcile the fit summary with the 12 measured rows, and index the purity command with its exact invocation and output.

## Lens scores

- motion — NOT FIRED (prewave HOLD ×2)
- timing — NOT FIRED
- purity — NOT FIRED
- reusability — NOT FIRED
- readability — NOT FIRED
- **Average / minimum: n/a — PASS/FAIL not computable. Item state: NO VERDICT, returns to the queue for a fresh attempt carrying the cures above. Prior-attempt scores never carry into a new attempt (none exist).**

## Seat reconciliation (Cycle 039 close, under codex-condense firing 1 finding 5)
Any "fresh attempt" wording above is superseded: this item is carried to an authorized A12.3 completion of its existing attempt (cures above → fresh own-checks + A6 legs → ONE jev-prewave completion re-fire → on FIRE-WAVE the five-lens wave), as the next recreation cycle's charge. It is not a fresh attempt and does not route to practice unscored.

## COMPLETION — Cycle 040 Wave 37 (A12.3) · SCORED VERDICT

- **Cures applied (ONLY the three filed above):** (1) CP1 receipt completed — harness v3 TILE-EARLY at `tTilesMs + tileDurMs/13` = 2000 now asserts/prints `iconP=0` alongside PA tileP=0.2135 / scale 0.5281 / VA tileP=0. (2) Binding assertions reconciled with harness v2 — CP10 in the binding census-anchor mapping replaced by the CONFIG-derived `HOLD-LATE@expr(completeAtMs+holdMs*7/19)=20000` probe with the COUNTS baseline; stale `C@18000` reference replaced by the filed `COUNTS@expr(completeAtMs+500)=17000` receipt. (3) Receipt index repaired against the supplied guard list — every guards.md command 1–8 mapped to its receipt, score arithmetic marked due after the wave, fit summary reconciled with the 12 measured rows, purity command indexed with exact invocation + output. **Build UNCHANGED:** recreation.html sha256 `877ba1e2b3d22f320c88e4ee5abb9de60cb7d45e9a0e039d9f00a56c17ccba91` before = after (no cure required a build change).
- **Fresh own-checks on the cured record:** harness v3 **25/25 PASS** (raw output in build-record.md completion section) · purity grep (guards.md command 1, exact invocation filed) **0 hits** · `Math.random` census **0 hits** · `node --check` rc=0 ×4 scripts · count assertion (A9.3) source 21+15=36 = built 36, MATCH.
- **A6 legs refiled:** fit-table.md — 12 rows re-measured, identical ink bounds, **HITs 0** · config-census.md — re-checked (`var(--` = 0, hex census matches), **HITs 0**.
- **jev-prewave completion re-fire (single authorized, A12.3): FIRE-WAVE** — parameterization 0.90 · purity pre-check 0.95 · own-checks completeness 0.95 · fidelity-plan honesty 0.95. Return: run dir `item-T219-jev-prewave-completion-return.md` + artifact `codex/jev-prewave-completion-cycle040.md`. Payload: run dir `payload-T219-jev-prewave-completion.txt`.
- **Five-lens Codex scoring wave** (all five bound to sha256 `877ba1e2…`; payloads in the Cycle-040 run dir; returns verbatim in `codex/`):
  - motion — **92** (`codex/lens-motion.md`)
  - timing — **100** (`codex/lens-timing.md`)
  - purity — **100** (`codex/lens-purity.md`)
  - reusability — **87** (`codex/lens-reusability.md`)
  - readability — **84** (`codex/lens-readability.md`)
- **Arithmetic (guards.md command 4, recomputed seat-side after the wave):** (92 + 100 + 100 + 87 + 84) = 463; 463 / 5 = **92.6** average; minimum = **84**. Bar: average ≥ 85 AND minimum ≥ 70 → **PASS**.
- **Verdict: PASS — RECREATED.** Tier move is the style-library's act. PIXEL-UNVERIFIED limitation (A10.1) stands as recorded above: state claims are logic-level; the comparison page is the render surface.
- **Condense notes from the wave (non-blocking):** timing lens — label 17,000 ms as the build completion probe associated with CP9, keep 18,000 ms as the source census checkpoint (receipt-label clarification). reusability lens — the HTML `<title>` and SVG `aria-label` hardcode the technique name; binding both to a CONFIG title is a candidate cure for a future attempt. readability lens — a contrast cure candidate on one pairing (raise toward ~5.5:1 while preserving the orange frame). motion lens — the specimen's square-fade overlap remains unverified at render level.
