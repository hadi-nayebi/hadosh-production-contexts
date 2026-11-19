# T218 — scores · Cycle 039 Wave 36 · FIRST ATTEMPT

- **Item:** T218 — North/South population tiles (free vs enslaved) · queue #100 · Packet #12 (Vox "The Electoral College, explained", YouTube ajavsMbCapY) · source window 271–305 s (4:31–5:05).
- **Attempt state: NO VERDICT** (A12.3 two-HOLD stop at jev-prewave — the five-lens scoring wave did not fire; no lens scores exist this cycle and none are claimed).

## Build
- recreation.html — sha256 `50b854e7ca8b2cec267e94a698154578823c812bd69f24bdc3204a3b6c28c182` · 16,968 B · single self-contained HTML, CONFIG-driven, pure `stateAt` evaluator, no captions, no specimen media.
- comparison.html — 3,720 B · ORIGINAL vs RECREATION, one synchronized control set, runtime-derived clamp (durationMs 21000 from the recreation's CONFIG), phone stacking at ≤560 px.
- segment.mp4 — 35.029870 s · h264 1920×1080 + AAC · 4,817,921 B · sha256 `f6a87a23ff8aeb32918ae4abe0d58a3a0f9114ec16c004a063eb65e012ca40a3` · covers source 270.5–305.5 s ⊇ window 271–305 s.

## Phase A gates (all fired before any build script, A9.2; returns verbatim in the wave run dir)
| Call | Verdict |
|---|---|
| codex-observe | CONFIRMED-WITH-GAPS (4,204 B return) |
| jev-observe-exit | RETURN-TO-OBSERVE — primary MECHANICS-UNSEEN · dims: queue 1.0 · prior-scores 0.5 · mechanics 0.5 · variables 1.0 · guidance 1.0 · consumer 1.0 — cured by the 1 s fine census + sibling-cure carry (§1.5 of the plan) |
| codex-plan-review | REVISE (5,426 B) — applied in the amended plan |
| jev-plan-exit | REVISE — primary UNBOUND-SCHEDULE · dims: parameter 0.75 · construction 0.90 · execute 0.80 · verify 0.65 · failure 0.75 · plateau 1.00 — applied in the amended plan |

(First firing of codex-observe + jev-observe-exit was killed by a platform service restart — 0-byte returns, recorded in the plan §2b; all four gates re-fired and landed before the build.)

## Own checks (final build; raw output in build-record.md §2)
- Node harness: **34/34 PASS** — validate-default, derive (completeAt 18500, duration 21000), count source 12 = built 12, geometry (66 tile pairs disjoint; frames in stage), Z0, P1–P9 (full frame lists; P2/P6 raw+eased printed separately), census/fine checkpoints C@2000…C@20000 incl. C@3000-F9000, C@8000, C@14000, C@18000, swaps (content with camp-gated north tile · timing with moved instants · 2 validator rejections · 1 boundary acceptance).
- Renderer receipts (stub-DOM): MOVE@15000 (frame 15 → 0 under the timing swap) · ARROW-RENDER@4000 (both free arrow paths opacity 1 during partial label) · PALETTE-RENDERED (swapped frame colour in rendered fills, count 12, old colour absent).
- Purity grep 0 hits · no external references · `node --check` rc=0 ×4 scripts · Math.random absent.
- **PIXEL-UNVERIFIED:** no browser binary exists in this seat — no rendered-pixel or playback verification was possible; comparison sync is receipted at the formula/DOM level only.

## A6 legs
- fit-table.md — PIL rendered measurement, PROXY stand-in font DejaVu Serif (named). **5 HITs carried:** ink-height floor proximity (min 10.41 px @360, Massachusetts) · Pennsylvania proxy stage margin −5.5 px · Massachusetts −12.1 px · Delaware left-edge −0.8 px · tile-label box-overflow class (Plan §2.5-priced).
- config-census.md — **0 HITs**: every CONFIG key incl. nested `tiles[]` keys resolved to value-flowing sites; all out-of-CONFIG literals classified structural; no CSS variables in use.

## Prewave (jev-prewave)
- **Firing 1** (build 7c8b681a…): **HOLD — ASSERTED-CHECKS** · parameterization 0.90 · purity 1.00 · own-checks completeness 0.35 · fidelity-plan honesty 0.85. Return: `codex/jev-prewave.md`.
- **Cure round** (the one permitted round): schedule correction (tFreeMs 2500→3000, freeDurMs 2500→2000 — F-9000 growth-start cure) · camp-gated frames in stateAt · free-arrow opacity decoupled from the label (`freeArrowOpacity`, renderer-receipted) · full-predicate harness re-run (34/34) · checkpoint assertions for CP7/CP10/CP12 + all fine frames · fit-table replaced with a full geometry re-measure. Build-record §6 carries the finding-by-finding cure list.
- **Firing 2** (build 50b854e7…): **HOLD — ASSERTED-CHECKS** · parameterization 0.95 · purity 1.00 · own-checks completeness 0.45 · fidelity-plan honesty 0.90. Return: `codex/jev-prewave-refire.md`. Finding 4 of firing 2 clears parameterization, purity, the camp-gate swap and the arrow receipt, and the fidelity plan.
- **Two-HOLD stop → NO VERDICT (A12.3).** The scoring wave does not fire; completion = next cycle.

## Cures priced for the completion cycle (from firing 2, verbatim substance)
1. **Fine-checkpoint instant binding.** File results at the bound instants: F-11000 → build 5000 (receipt = P3 with its full-state print, not C@6000) · F-21000 → build 15000 (enslavedLabelP evaluates 0 there; the mid-reveal state lives at 15500 — either re-file at 15000 or record an explicit +500 ms timing departure for the label reveal) · F-27000 → build 21000 (durationMs end state, not C@20000).
2. **Full-predicate receipts + paired moving probes.** Z0 must print header opacity · P1 tile and header opacity · P3 the all-tile scale result · P5 free-label opacity · P8 both label opacities; each fixed C probe needs its evaluated CONFIG expression on the receipt and a paired probe shown moving under the relevant timing swap (the enslaved swap already receipts P6 14500→15500 and P7 15000→16000 — extend the same form to the free-phase and label probes).
3. **Fit-table bound to final rendered geometry.** Measure New Hampshire as its two rendered lines ("New" / "Hampshire") · measure Virginia at the renderer's CONFIG-derived tile font size (the fit script's min-dimension rule and the renderer's rule disagree — align the instrument to `tileFontPx` exactly and re-measure all tile rows) · give the camp and centre-label rows positions and signed margins. The carried proxy overflows (HITs 2–4) are priced once the measurements bind to the final geometry.

## Lens scores
None — the wave did not fire (NO VERDICT above). Predicted minimum lens at Plan time was motion fidelity, with readability as a separate floor risk (fit HIT 1); both predictions stand unpriced until the completion cycle fires the wave.

## Completion — Cycle 040 Wave 37 (A12.3 completion form)
- **Attempt state: NO VERDICT** (completion prewave HOLD — the five-lens scoring wave did not fire; no lens scores exist and none are claimed). The item's next re-fire stands **PENDING AUTHORIZATION**.
- **Build:** recreation.html sha256 `50b854e7ca8b2cec267e94a698154578823c812bd69f24bdc3204a3b6c28c182` · 16,968 B — **UNCHANGED (before = after)**; none of the three firing-2 cure groups required a build change.
- **Cures applied (from firing 2, finding-by-finding in build-record §7):** (1) fine-checkpoint instant binding — F-11000 filed at build 5000 with the full-state P3 receipt · F-21000 filed at build 15000 (frames = P7, enslavedLabelP 0) with the explicit +500 ms departure for the label mid-reveal receipted at 15500 · F-27000 filed at build 21000 (durationMs end state). (2) Full-predicate receipts (Z0 header opacity · P1 tile + header opacity · P3 all-tile scale · P5 free-label opacity · P8 both label opacities) + every fixed C probe carrying its evaluated CONFIG expression and a paired moving probe under its phase's timing swap (7 PAIR receipts). (3) Fit-table re-measured bound to the final rendered geometry (Virginia at `tileFontPx` = 30.8 px · New Hampshire as its two rendered lines · camp and centre-label rows with positions + signed margins) — 5 HITs carried. Config-census re-verified: 0 HITs.
- **Fresh own-checks on the cured record:** node harness **43/43 PASS** (full predicates + bound fine instants + 7 paired moving probes + swaps) · renderer receipts re-run (ARROW-RENDER@4000 · PALETTE-RENDERED + swap) · purity grep 0 hits · `node --check` rc=0 ×4 scripts · Math.random absent. A13 receipt index reconciled in build-record §7.2 (assertion set inherited whole, A13.2; readiness check passed before the payload was assembled).
- **Completion prewave (jev-prewave, the single authorized re-fire):** **HOLD — ASSERTED-CHECKS** · parameterization 0.95 · purity pre-check 1.00 · own-checks completeness 0.45 · fidelity-plan honesty 0.90. Return verbatim: `codex/jev-prewave-completion-cycle040.md` (run dir: `item-T218-jev-prewave-completion-return.raw`/`.md`; payload: `payload-T218-jev-prewave-completion.txt`, 65,669 B).
- **Cures priced for the next (authorized) re-fire, from the completion return:**
  1. Re-run `PAIR-C2000-APPEAR` at a correctly evaluated CONFIG-bound instant and record both measured states; update its §7.2 index entry. (The filed pair labels t=1000 as the default CONFIG midpoint; `tAppearMs + appearDurMs/2` evaluates to 750 ms — the measured states are real, the expression label is wrong.)
  2. Print the evaluated P2 fill-lerp result (Plan §2.3's P2 predicate includes fill lerp 0.5; the filed P2 receipt prints scales only) and reconcile the Plan §2.3 stale 3750 ms annotation to the final CONFIG midpoint of 4000 ms.
  3. Reconcile the fit-table's box-overflow class with its row measurements: include Pennsylvania (ink 159.0 > box 144) and Massachusetts (180.2 > 132) — eight width-overflow tiles in total — or explicitly give both the box-overflow and stage-edge dispositions.
- **Lens scores:** none — the wave did not fire (NO VERDICT above).
