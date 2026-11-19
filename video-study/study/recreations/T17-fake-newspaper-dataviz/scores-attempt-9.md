# T17 — Fake-newspaper animated dataviz · SCORES

Technique: T17 (packet P1, "Look What I Can Do" @ 1:40–2:02) · Consumer: diagram container (DLC sentence diagrams)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 1:39.5–2:02.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 004, Wave 2)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 78 | codex/lens-motion.md |
| Timing / tempo match | 68 | codex/lens-timing.md |
| Construction purity | 100 | codex/lens-purity.md |
| Reusability / parameterization | 64 | codex/lens-reusability.md |
| Readability | 28 | codex/lens-readability.md |

**Arithmetic:** (78 + 68 + 100 + 64 + 28) / 5 = 338 / 5 = **67.6 average** · minimum lens **28**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 17.4; three lenses under the 70 floor (readability 28, reusability 64, timing 68). Tier: **IN PROGRESS** — attempt 2 routes to the practice job (A3 division of labour); the tier move itself is the style-library job's act on this evidence.

### Priced gaps — what attempt 2 (practice) must cure

**CONVERGENT (Amendment A1 — ≥2 lenses name the same defect; primary cures):**
1. **FIG.20 draw-on dash length** (motion 78 + timing 68): hardcoded dash length 520 exceeds the actual ~190px path, so visible drawing stalls ~1.6s then rushes. Cure: `path.getTotalLength()` for dasharray/dashoffset.
2. **FIG.24 counter–graph divergence + no final hold** (motion 78 + timing 68): counter loses ~94% of its value halfway through the cliff while the graph has dropped only ~33%; both must derive from one normalized collapse function. The exact endpoint 1 renders only within ~6ms of replacement, and `render(22.5)` hides FIG.25 entirely (exclusive end boundary) — no final reading hold. Cure: shared collapse trajectory, explicit completion states, hold the final figure at duration end.

**Single-lens, priced:**
3. **Readability 28 — the blocking defect:** fixed 960px-stage typography/charts inside a `max-width:100vw` shrinking 16:9 stage: at 390px wide the stage is 219px tall, figures start at 118px, 42px masthead and 30px titles wrap, fixed 380–420px SVGs overflow beside cards, `overflow:hidden` clips figure content (waffle summary, stack counter, org badge, counter card, notes). Cure: coherent phone layout — minimum readable type, reflow charts/cards, reserve wrapped-heading space, verify all six figures at 360px and 390px at fullest states.
4. **Reusability 64:** unused CONFIG fields (`chartTitle`, `xLabels`, `barLabels` never render; `scale` has no effect); animation parameters (draw/typing/node/stamp/note rates, FIG.24 pre-cliff decrement 1,800,000, graph constants) are literals; content-dependent logic (`lab==='doomed'` red rule, hardcoded "you →"); builders bound to fixed `figEls.fig20–fig25` keys — not independently mountable factories; fixed spacing/timing breaks at other data counts (a 6th org node at p>1 never appears); counter uses `counterEnd` only as a floor. Cure: consumed-only config, parameterized animation rates, factories taking (container, figure data, palette), layout/timing derived from data length, explicit endpoint interpolation, visible-output swap tests across data sizes.
5. **Timing 68:** labeled allocation is not measured fidelity; completion-and-hold rhythm is weak — FIG.21 summary finishes ~0.20s before replacement, FIG.23 badge leaves 0.43s, FIG.25 second note needs until 22.58s (past the end). Cure: finish typing/badge/notes earlier, explicit completion-and-hold checkpoints as timing gates.

**What passed:** purity 100 — fully procedural DOM/SVG from CONFIG, no specimen media, no external assets; core sequence and all six figure mechanisms present (motion 78).

## Attempt 2 — 2026-11-14 (practice Cycle 003 Wave 2)

Final source: `recreation.html` sha256 `813318f8118436e6aa3272ed67c613fc75f0ab82a50c70827b07a77a0cbcd073` (attempt-1 source preserved byte-identical at `recreation-attempt-1.html`, sha e76948bf… per the run's preservation baseline; all immutable files — build-record.md, segment.mp4, codex/lens-*.md — hash-match the baseline at filing).

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 90 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 82 | codex/attempt-2/lens-timing.md |
| Construction purity | 100 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 72 | codex/attempt-2/lens-reusability.md |
| Readability | 65 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (90 + 82 + 100 + 72 + 65) / 5 = 409 / 5 = **81.8 average** · minimum lens **65**.
**Signed delta vs attempt 1:** 81.8 − 67.6 = **+14.2** (beats the prior average — floor rule satisfied, no WHY owed).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 3.2; one lens under the 70 floor (readability 65). Tier stays **IN PROGRESS**; attempt 3 routes to the practice job.

**Own-check summary (logic harness, node — 42 checks, all PASS; evidence in build-record-attempt2.md):** measured-length draw-on (386.4 computed for default points; draw state maps 0→full offset, completion→0; swapped points change the length); normalized collapse checkpoints asserted separately (half-cliff loss = exactly half the pre-cliff drop · cliff onset at 0.68 of window with exactly the pre-cliff drop lost · endpoint exactly 1 at animation end and at p=1 · constant through the hold) plus counter↔graph normalized agreement at 7 samples and an exact current-progress graph endpoint at 5 progress values; inclusive end boundary (state at t=duration = FIG.25 at p=1); completion allocation with the 0.6s minimum hold consumed from CONFIG (waffle full + summary fully typed, stack/bars/donut complete, all org nodes + badge present, stamp at rest scale, all notes fully visible at animation-portion end); computed fit at 360/390/960px (all six figures contained, widths within content width, type at floors — masthead 20 · title 17 · body 12 · label 11 · big counter 20 · hand 14; longest title reserves 2 lines / 40.8px at 360px); visible-output swaps across data sizes (waffle 15→30 filled 13→27 at mid progress · org nodes 4→6 with the 6th present at completion · bars 4→7 geometry changes · counter-range change changes mid-window text); boundary validation (defaults zero warnings; waffle 500 / bars 20 / nodes 20 rejected with named warnings); purity grep 0 hits; inline script parses.
**PIXEL-UNVERIFIED:** rendered-pixel check attempted with the environment's Chromium build (`/opt/meta-chromium/chrome --headless=new --window-size=390,844 --screenshot`); startup failed with "Hatch WebGL domain policy is required for browser startup", no screenshot produced. Geometry evidence rests on the deterministic layout model, not rendered pixels.
**comparison.html:** unchanged — the config interface it consumes (`T17.render` / shared clock) did not change; ORIGINAL side semantically unchanged (file hash still matches the preservation baseline).

**DEFERRED (per the run's Plan amendment for this item):** figure factories' extraction as independently mountable modules for OTHER containers — separable API work beyond this stage. This attempt made the builders data-driven within the stage (registry keyed by figure type, per-figure data records, layout/timing from data length). Attempt 3's plan carries the extraction at its head or prints why the item rests; the attempt-2 reusability return (72) prices the remaining coupling directly (builders close over scene globals; no palette argument in the actual signatures).

**Private cure → neutral-check mapping (seat record, per the lens-packet hygiene rule):** dash cure → "measured-length draw" checks · collapse+hold cure → "normalized collapse checkpoints" + "counter↔graph agreement" + "inclusive end boundary" + "completion allocation" checks · phone-layout cure → "computed fit" table at 360/390/960 · reuse cure → "visible-output data swaps" + "boundary validation" checks · timing cure → "completion allocation" checks. The lens-facing build record (build-record-attempt2.md) carries only the neutral names and construction facts.

### Priced gaps — what attempt 3 (practice) must cure

1. **Readability 65 (the blocking lens):** (a) the fit model and the builder disagree on FIG.22 spacing (model budgets an 8px phone gap; the builder uses 26px) and FIG.22 already consumes its entire modelled allocation — reconcile modelled gaps/margins/line-heights with the builder's actual values and re-verify the source line stays visible; (b) masthead metadata crowds at 360px (three spans in 304px, no wrap policy) — specify a phone arrangement and derive the figure offset from the header's actual height; (c) FIG.20's final x-label is centred 10px from the SVG right edge and can extend past it — reserve measured text gutters or anchor endpoint labels inward; (d) the stamp's 2.4× rotated entrance state is absent from the fit model — allocate its transformed bounds or constrain the entrance scale; (e) completed-text reading time is short (summary gets ~0.77s after typing) — a content-sensitive completed hold (see gap 3).
2. **Reusability 72:** (a) `palette.muted` is never consumed — consume or remove it; the warning colour is hardcoded in CSS — route it through the palette; (b) embedded literals remain: badge scale 1.6, stamp rotation −8, graph sampling step 0.02, cliff-marker threshold p>0.5 — move them into CONFIG; (c) supported-boundary data can overrun its animation budget: 4 permitted notes need normalized progress 1.24 (the 4th never appears) — distribute note timing within the budget or tighten the boundary; a permitted cliffAt beyond the animation fraction loses its cliff segment — validate cliff position against the budget; (d) stack unit height is fixed per device mode, not derived from count as the build record claimed — derive it or correct the claim; (e) factory extraction (deferred above) — inject palette/timing dependencies instead of scene globals.
3. **Timing 82:** (a) summary typing needs a reading-time budget that scales with text length (its ~100 characters type in ~1.5s); (b) the allocation claim must print per-figure completion/hold timestamps (sub-animations complete at different relative points; the guarantee is ≥0.6s after completion, not a uniform point); (c) verify the stamp's transformable display type in the rendered state; (d) playback verification remains outstanding (PIXEL-UNVERIFIED above).
4. **Motion 90:** (a) stack units arrive as opacity steps in final positions — add short downward arrivals that settle onto the pile; (b) the stamp entrance is a linear shrink — give it an impact shape (rapid eased approach, brief compression/rebound, settle inside the existing allocation); (c) the counter graph keeps extending horizontally during its completion hold (x uses raw window progress while value/y freeze) — complete the trace at animation completion and freeze the whole path through the hold.

**What passed:** purity 100 held; motion 90 and timing 82 confirm the two convergent animation repairs and the shared collapse construction; readability rose 28 → 65 and reusability 64 → 72 on the layout and parameterization rework, with the remaining distance concentrated in the priced gaps above.

## Attempt 3 — WHY scaffold (pre-drafted, practice C012)

Pre-drafted in Plan (practice Cycle 012 Wave 11, plan-T17.md) per INSTRUCTION §2 standing
Plan product: if attempt 3 does NOT beat the attempt-2 average of 81.8, the WHY section
owed under the floor rule (§5.4) is completed from this scaffold at close — cure by cure —
not improvised at close. If attempt 3 beats 81.8, this scaffold stands unused as the plan
record. (Pre-append bytes preserved in the run baseline: scores.md sha256 bfacf4fa…;
Execute files the attempt-tagged copy `scores-attempt-2.md` before any further mutation.)

### Cure-by-cure outcome slots (fill at close: LANDED / PARTIAL / FAILED + the lens evidence)

- C1 factory extraction (deps-injected signatures; scene globals removed): outcome ___
- C2 content-sensitive completed-text hold (readMsPerChar; FIG.21 completed hold): outcome ___
- C3 stamp cluster (display-type assertion · rotated AABB in fit model · impact easing): outcome ___
- C4 FIG.22 fit-model vs builder spacing reconciliation (single-source gaps; source line visible): outcome ___
- C5 masthead phone arrangement (wrapped meta states; figtop from actual header height): outcome ___
- C6 FIG.20 endpoint x-label gutters (displayed bounds inside SVG): outcome ___
- C7 literals + palette (badge 1.6 · stamp −8 · step 0.02 · cliff p>0.5 · warning colour · palette.muted): outcome ___
- C8 note-budget distribution + cliffAt-vs-animation-fraction validation: outcome ___
- C9 stack unit height derived from count (or claim corrected): outcome ___
- C10 motion residuals (stack downward arrivals · counter-graph trace freeze through hold): outcome ___
- Deferral dispositions D1–D5 (pixel route · mounted-DOM swaps · window derivation ·
  long-content desktop adaptation · FIG.25 entrance-overlap rendered inspection) — did any
  deferral's priced risk fire, and in which lens's words: ___

### Stuck-lens hypothesis (pre-drafted)

Primary hypothesis: READABILITY sticks at or below 70 even with C4–C6 landed, because the
lens prices modelled fit as unverified ("credits the construction without treating it as
pixel verification", attempt-2 return) and no render route exists in-session
(PIXEL-UNVERIFIED, deferral D1) — a third modelled-only filing may be discounted on
evidence class, not on geometry. Secondary hypothesis: REUSABILITY sticks if the C1
extraction is judged cosmetic (signatures changed, coupling retained) — the checkpoint
CP1 suite + foreign-container mount test are the discriminating evidence. If neither
hypothesis matches the returns, the actual stuck lens + its verbatim pricing language
replaces this section at close.

### Evidence jev-plateau will need (file pointers, completed at close)

- Per-cure outcome for C1–C10 above, each tied to a filed lens return passage (not scores).
- Per-lens signed deltas vs attempt 2 (motion 90 · timing 82 · purity 100 · reusability 72 ·
  readability 65) and the average delta vs 81.8.
- Checkpoint attribution (A-C010-1a): which stage (CP1–CP4) isolates which movement, or
  BUNDLED where no checkpoint isolates it.
- Per-figure completion/hold timestamp table from build-record-attempt3 (timing evidence).
- A-C008 legs on the new attempt: fit-table.md + config-census.md paths + hit counts.
- PIXEL-UNVERIFIED status + the Chrome-route re-attempt outcome.
- What the next attempt would do differently, or why the technique should rest: ___

## Attempt 3 — 2026-11-15 (practice Cycle 012 Wave 11)

Final source: `recreation.html` sha256 `b2012a7a9fd8eaef1b6187754f52d233699be0528357fbd29949819a7bf0fc91` (attempt-2 source preserved byte-identical at `recreation-attempt-2.html`, sha 813318f8…; attempt-2 close bytes of this file preserved at `scores-attempt-2.md`, sha bfacf4fa… = the run baseline; comparison.html unchanged, sha f6d34482…).

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 88 | codex/attempt-3/lens-motion.md |
| Timing / tempo match | 80 | codex/attempt-3/lens-timing.md |
| Construction purity | 100 | codex/attempt-3/lens-purity.md |
| Reusability / parameterization | 81 | codex/attempt-3/lens-reusability.md |
| Readability | 64 | codex/attempt-3/lens-readability.md |

**Arithmetic:** (88 + 80 + 100 + 81 + 64) / 5 = 413 / 5 = **82.6 average** · minimum lens **64**.
**Signed delta vs attempt 2:** 82.6 − 81.8 = **+0.8** (beats the prior average — floor rule satisfied, no WHY owed; the pre-drafted WHY scaffold above stands unused as the plan record).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL (beating, below bar)** — average misses by 2.4; one lens under the 70 floor (readability 64). Tier stays **IN PROGRESS**; attempt 4 routes to the practice job. No style-library hand-off (PASS branch not taken).

**Own-check summary (logic harness, node — 84 checks, all PASS; evidence in build-record-attempt3.md + checkpoints/attempt-3/):** factory mounting into a foreign container with a foreign palette/fonts (no scene-global references in any factory); retained-mechanism state consistency with the previous build; per-index effect mappings (notes, stack arrivals, waffle fill/typing); content-derived summary hold (89 chars × 12 ms/char = 1.068s; typing 1.832s ≥ named minima); stamp transformable display type in the cascade model + rotated bounding box inside the block at entrance/overshoot/settle (caps 1.83/1.99/1.91) + notes band below the stamp box; fit report at 360/390/960 with the fit constraint defined before stack derivation (phone stage budget 640px; FIG.22 fits with the wrapped two-row masthead, including at the maximum supported stack count 14 with the arrival reserve, 608.8px); masthead meta enumerated at 2 rows (360/390) and 1 row (960) with the figure offset derived from the actual header height; endpoint label displayed bounds inside the SVG (default + longer swapped labels); note distribution for counts 1–4 all completing inside the animation portion (last at 0.925); cliff boundary pair 0.79 accepted / 0.81 rejected with a named warning; counter path identical at completion and at hold end; stack unit height derived from count and budget (16px at default count, floor 13px); mutation-based CONFIG consumption census, 240/240 leaves consumed; visible-output swaps (waffle, org 4→6, bars 4→7, counter range, notes 1→4, labels, summary); adversarial validation set (non-finite values, absent records, oversized summary/stack) all rejected with named warnings, defaults zero warnings; purity grep 0 subject hits.
**A-C008 legs on the new attempt (pre-wave):** `fit-table-attempt3.md` (25 rows; HIT list 17 rows — label-class text at the 11px type floor models to 7.9px ink height against the leg's ~11px ink floor; advisory disposition filed in the leg) · `config-census-attempt3.md` (240 leaves, 0 unapplied; literal scan 0 hex outside CONFIG, remaining literals classified structural per-literal; HIT list empty).
**PIXEL-UNVERIFIED:** rendered-pixel check re-attempted with the environment's Chromium build; startup failed with "Hatch WebGL domain policy is required for browser startup", no screenshot produced. Geometry evidence rests on the deterministic layout model.
**comparison.html:** unchanged — the interface it consumes is preserved exactly; ORIGINAL side unchanged (hash matches the preservation baseline).
**Named limitation (self-start):** the piece renders its first frame on load but does not start playback on its own; playback requires the Play control or the comparison page's slave clock (printed in build-record-attempt3.md, not as a scoring exemption).
**Payload discipline:** manifest filed at `codex/attempt-3/payload-manifest.md` (allowlist-only; assembled-payload anchor scan 0 hits for prior/target scores, attempt comparisons, cure labels and evaluative wording; two standing-header phrases retained under contextual review, printed in the manifest); all five payloads hash-bound before firing and preserved create-once; all five returns bind the identical frozen source sha above.

### Residual inventory — what attempt 4 must cure (priced from the attempt-3 returns)

1. **Readability 64 (the blocking lens):** (a) the stamp's transformed POSITION is unmodelled — it scales around its centre from the left edge, so the capped bounding box can still extend outside the content area and be clipped; position the stamp from its transformed bounds. (b) Model-vs-CSS spacing disagreements remain: figure padding, heading margins (model 6px vs rendered 11px), FIG.20/FIG.24 phone gaps (model 8px vs rendered 18px/24px — those two figures' row gaps, not FIG.22's reconciled gap) — reconcile every spacing the model budgets with the rendered values and retain bottom clearance instead of fitting exactly at the stage bottom. (c) Secondary text: 11px labels/nodes/source lines, source lines weakened by muted colour at 0.8 opacity — strengthen secondary text treatment. (d) The 1.068s completed-summary hold is still priced as a demanding reading allowance — a longer completed hold (the timing lens prices the same surface). (e) Rendered phone verification remains outstanding (PIXEL-UNVERIFIED, deferral D1 priced again).
2. **Motion 88:** (a) the cliff marker's position no longer matches the graph's time-to-x mapping (marker at 0.68 of width, cliff onset at 0.80 under the animation-progress mapping) — derive the marker from the same mapping. (b) The bounding-box cap truncates the stamp's entrance curve (scale held at the cap before contraction) — construct the entrance from the fitted scale. (c) FIG.20's final point is a modest rise, not the stated spike (CONFIG content).
3. **Timing 80:** the build record's per-figure completion table states the animation-portion end, while sub-animations complete earlier per figure (draw 2.760s, stack 2.700s, badge 2.400s within their windows) — print actual sub-animation completion times; the stack counter reaches its final count ~0.43s before the last unit settles; the badge has no timed entrance; reading allowance remains playback-unverified.
4. **Reusability 81:** easing exponents and the animation-fraction floor remain embedded literals; figure scheduling is manually coordinated (derive windows from ordered durations or validate overlap/gaps/total coverage); waffle dot spacing and org row capacity still diverge between model and builder spacing; counter locale, "of" wording, node symbols and badge separators are embedded formatting; unsupported figure types mount silently empty and global validation errors are collected but never displayed.

**What passed:** purity 100 held; reusability rose 72 → 81 on the factory extraction (the return: extraction "passes structurally"); the average beat the prior attempt (+0.8) with readability the sole sub-floor lens.

## Attempt 3 — cure-by-cure outcomes (seat record, appended separately; attribution BUNDLED per W-G(1))

Attribution prints BUNDLED: construction was a single authored pass (deviation D-EXEC-1, printed in checkpoints/attempt-3/); stage checkpoints carry per-stage check outputs against the final source, and no checkpoint isolates a single cure's lens effect. Per-cure status below is implementation-verified against the filed returns, not a per-cure lens attribution.

- C1 factory extraction — IMPLEMENTED-VERIFIED (foreign-container/foreign-palette mount test green; zero scene-global references). Lens evidence: reusability 72 → 81, return credits the extraction structurally; residual = rendered swap evidence unverified + guards over the full CONFIG interface.
- C2 content-sensitive completed-text hold — IMPLEMENTED-VERIFIED (89 chars × 12 ms/char = 1.068s hold; typing 1.832s). Lens evidence: readability + timing both still price the allowance as demanding — the cure landed, the priced risk (rate too fast) fired; next attempt raises the rate or the window share.
- C3 stamp cluster — PARTIAL: display type + bounding-box size + impact curve implemented; the motion return prices the cap truncating the entrance curve, and the readability return prices the unmodelled transformed POSITION. Both residuals carried to attempt 4.
- C4 FIG.22 spacing reconciliation — IMPLEMENTED-VERIFIED for FIG.22 (single 8px value; fit at budget incl. max stack). Lens evidence: readability prices the same disagreement class at FIG.20/FIG.24 gaps + heading margins + figure padding — the reconciliation did not sweep every figure.
- C5 masthead phone arrangement — IMPLEMENTED-VERIFIED (2-row enumeration; offset from actual header height). No return prices a masthead residual.
- C6 FIG.20 endpoint gutters — IMPLEMENTED-VERIFIED (anchored endpoints; bounds asserted default + swapped). No return prices a label-overflow residual.
- C7 literals + palette — IMPLEMENTED-VERIFIED (240-leaf mutation census; five named literals in CONFIG; muted consumed; warning colour via palette variable). Lens evidence: reusability prices a remaining embedded class (easing exponents, animation-fraction floor, formatting strings) — a different literal family than the five named.
- C8 note distribution + cliff validation — IMPLEMENTED-VERIFIED (counts 1–4 complete ≤ 0.925; boundary pair asserted). No return prices a note-budget residual; the cliff residual that fired is the marker's x position (motion), a different surface.
- C9 stack unit height derivation — IMPLEMENTED-VERIFIED (derived, clamped, floor-rejecting validation). Lens evidence: timing prices the counter reaching its count before the last unit settles — an arrival/counter synchronisation residual, not a height residual.
- C10 motion residuals — PARTIAL: downward arrivals + trace freeze implemented and asserted (path identical at completion and hold end). Lens evidence: motion 90 → 88 — the trace freeze changed the graph's time-to-x mapping and the cliff marker was not moved with it (the attempt's one self-inflicted regression, priced above).
- Deferral dispositions: D1 (pixel route) — risk FIRED in readability's words ("modelled fit does not establish phone readability") and in the fit leg's 17 advisory hits; D2 (mounted-DOM swaps) — risk fired in reusability's words (rendered swap evidence unverified); D3 (window derivation) — risk fired in reusability's words (scheduling manually coordinated); D4 (long-content adaptation) — no priced hit; D5 (FIG.25 entrance-overlap rendered inspection) — partially fired as the stamp position/clipping pricing in readability.

## Attempt 4 — WHY scaffold (pre-drafted, practice Cycle 020 Wave 19, plan-T17.md §7)

Pre-drafted in Plan per INSTRUCTION §2: if attempt 4 does NOT beat the attempt-3 average of 82.6, the WHY owed under the floor rule (§5.4) is completed from this scaffold at close; if it beats 82.6, Branch B applies (see below). Pre-append bytes preserved at `scores-attempt-3.md` (sha b19277d4…). Numerical attribution is BUNDLED (plan-review finding 5): checkpoints isolate construction changes only; per-cure slots cite (a) implementation probes and (b) final-return wording separately, never a per-cure score delta.

### Branch A — attempt 4 does NOT beat 82.6 (average ≤ 82.6): WHY owed before the cycle may close; jev-plateau fires at close

Cure-by-cure outcome slots (fill at close: LANDED / PARTIAL / FAILED, with (a) implementation probe and (b) final-return wording kept separate for each):
- C1 hold rate (20ms/char, hold 1.780s): probe ___ · readability wording ___ · timing wording ___
- C2 spacing sweep + clearance + secondary text: probe ___ · readability wording ___ · fit-leg HIT disposition ___ · reusability wording on single-source spacing ___
- C3 stamp position + entrance-from-cap: probe ___ · readability wording ___ · motion wording ___
- C4 cliff marker + spike: probe ___ · motion wording (marker alignment; spike) ___
- C5 completion table + settled counter + badge entrance: probe ___ · timing wording ___
- C6 literals/formatting (incl. formatting.ofWord)/schedule/spacing-model/validation surface: probe ___ · reusability wording ___
- Deferral dispositions D1–D5: did each priced risk fire, in which lens's words ___ (D1 expected to be priced first)

Stuck-lens hypothesis (pre-committed): primary — READABILITY sticks below 70, or holds the average down, on the evidence class, not on geometry (priced modelled fit against rendered readability for two consecutive attempts; A-C011-3 trigger met; D1 render route still blocked). Secondary — TIMING sticks if the lens prices the raised hold as still insufficient without playback (D1 timing leg) or prices the settled-counter change against the figure's rhythm. If neither hypothesis matches the returns, the actual stuck lens + its verbatim pricing language replaces this section at close.

Evidence jev-plateau will need (assembled at close): (1) per-cure outcomes above, each tied to a filed return passage; (2) per-lens signed deltas vs attempt 3 (motion 88 · timing 80 · purity 100 · reusability 81 · readability 64) and the average delta vs 82.6; (3) attribution BUNDLED (checkpoints cited for construction isolation only); (4) the actual sub-animation completion/hold table from build-record-attempt4; (5) A-C008 leg paths + hit counts; (6) PIXEL-UNVERIFIED status + the Execute step-10 record per sub-item (completed-figure frames × both widths · stamp entrance/overshoot frames × both widths · normal-speed playback results · rendered swap results — each with its own outcome); (7) what attempt 5 does differently — pre-drafted consequence: if readability stuck on evidence class, attempt 5 does NOT re-tune proxies a fourth time (A-C011-3): it either obtains a render route (a charged build) or the technique RESTS at IN PROGRESS with the plateau named as evidence-class, and the render-route charge files to the seat; if timing stuck, finer specimen evidence replaces allocation claims.

### Branch B — attempt 4 beats 82.6: no floor-rule WHY is owed; this scaffold converts, it does not vanish
- B1, beating but below bar (82.6 < average < 85, OR any lens < 70): the same cure-by-cure slots are filled as the attempt's residual inventory in scores.md (the attempt-5 cure queue), NOT as a WHY — jev-plateau does not fire on a beating attempt.
- B2, PASS (average ≥ 85 AND every lens ≥ 70): the slots are filled as the PASS filing's cure-evidence summary; tier hand-off files to style-library's board with the scores.md pointer (the tier move is style-library's act).

## Attempt 4 — 2026-11-17 (practice Cycle 020 Wave 19)

Final source: `recreation.html` sha256 `0d04b443a030185001cbfcba280afbd6547de2ef68fd1a8f08ac3408537fe803` (attempt-3 source preserved byte-identical at `recreation-attempt-3.html`, sha b2012a7a…; attempt-3 close bytes of this file preserved at `scores-attempt-3.md`, sha b19277d4… = the Cycle-020 baseline; comparison.html unchanged, sha f6d34482…).

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 78 | codex/attempt-4/lens-motion.md |
| Timing / tempo match | 81 | codex/attempt-4/lens-timing.md |
| Construction purity | 100 | codex/attempt-4/lens-purity.md |
| Reusability / parameterization | 82 | codex/attempt-4/lens-reusability.md |
| Readability | 78 | codex/attempt-4/lens-readability.md |

**Arithmetic:** (78 + 81 + 100 + 82 + 78) / 5 = 419 / 5 = **83.8 average** · minimum lens **78**.
**Signed delta vs attempt 3:** 83.8 − 82.6 = **+1.2** (beats the prior average — floor rule satisfied, no WHY owed; Branch B of the pre-drafted scaffold applies).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL (beating, below bar)** — average misses by 1.2; no lens under the 70 floor (minimum 78). Tier stays **IN PROGRESS**; attempt 5 routes to the practice job. No style-library hand-off (PASS branch not taken).
**Per-lens deltas vs attempt 3:** motion 88 → 78 (−10) · timing 80 → 81 (+1) · purity 100 → 100 (0) · reusability 81 → 82 (+1) · readability 64 → 78 (+14). **Numerical attribution: BUNDLED** — checkpoints isolate construction changes only; one final scoring wave, no staged lens evaluations exist.

**Own-check summary (six stage suites + Verify suite re-run on the frozen final source, all PASS; evidence in build-record-attempt4.md + checkpoints/attempt-4/):** staged build under the checkpoint gate (7 checkpoints, each filed create-once before the next stage began, inode independence asserted); completed hold 1.780s at 20ms/char with typing 1.420s; every-figure spacing sweep with single-source keys and CSS-parse equality; fit recomputed after all spacing/label changes (553.0px default, 619.0px at maximum stack count 14, both ≤ 640) with 8px bottom clearance; stamp positioned AABB inside the block at entrance/overshoot/settle × 360/390/960 with the entrance built from the fitted cap; cliff marker at the graph's own mapping (0.80 at defaults, swap-asserted); settled-unit stack counter (counter-final == settle, defaults + swapped count); timed badge entrance (onset 2.400s, completion 2.850s, derived hold 0.750s); mutation-based CONFIG consumption census 258/258 leaves; literal census clean (attempt-3 residual content literals absent outside CONFIG); schedule contiguity/coverage validation; unknown-type named error + global warn display (both branches); purity grep 0 subject hits.
**A-C008 legs on the new attempt (pre-wave):** `fit-table-attempt4.md` (HIT list 17 rows — label-class ink 8.6px at the raised 12px floor vs the leg's ~11px ink floor; re-priced disposition filed in the leg: floor raised 11→12, source contrast strengthened to a modelled 6.03:1, containment + 8px clearance pass) · `config-census-attempt4.md` (258 leaves, 0 unconsumed; HIT list empty).
**PIXEL-UNVERIFIED (per sub-item):** the Chromium route was re-attempted once; startup failed with "Hatch WebGL domain policy is required for browser startup", no screenshot produced. Sub-items: (i) completed-figure frames × 360/390 — OUTSTANDING; (ii) stamp entrance/overshoot frames × both widths — OUTSTANDING; (iii) normal-speed playback checks — OUTSTANDING; (iv) rendered swap checks — OUTSTANDING (logic-level swaps pass).
**comparison.html:** unchanged — the interface it consumes is preserved exactly; ORIGINAL side unchanged (hash matches the preservation baseline).
**Named limitation (self-start):** the piece renders its first frame on load but does not start playback on its own; playback requires the Play control or the comparison page's slave clock (printed in build-record-attempt4.md, not as a scoring exemption).
**Payload discipline:** manifest filed at `codex/attempt-4/payload-manifest.md` (five-component allowlist incl. specimen basis + verification limitations + score-blind build record; the full cure-labelled build record excluded in full; anchor scan over the COMPLETE assembled packets — 0 hits in all five); all five payloads + returns preserved create-once under `codex/attempt-4/`; all five returns bind the identical frozen source sha above. Session scope (A-C019-2): FED route only, `codex exec - -s read-only` from a cwd outside the artifact directory, no --add-dir; two returns note the recreation file was absent from their workspace listing and assess the supplied stream only — no return references material outside its packet; no score is printed session-contaminated.
**Mechanical guards:** guard 1 — arithmetic recomputed from the filed returns (419/5 = 83.8 exact; all scores integers in 0–100, scale valid). Guard 2 — preservation census over the 54-file baseline: 0 mismatches outside the two lawful changes (working recreation.html; this file's appends); preserved attempt-3 copies + all six stage checkpoints re-hashed at filing, shas frozen. Guard 3 — floor-rule gate: 83.8 > 82.6, beating → no WHY owed; Branch B1 residual inventory filed below instead (no plateau call).

### Residual inventory — what attempt 5 must cure (Branch B1; priced from the attempt-4 returns)

Cure-by-cure outcomes for attempt 4 (implementation probe and final-return wording cited separately; numerical movement BUNDLED):

- C1 hold rate — **PARTIAL.** (a) Probe: stage-1 checks — hold 1.780s, typing 1.420s ≥ minimum, swapped-summary rejection at the new rate. (b) Wording: timing credits the completion/hold structure but prices the summary as "the principal tempo weakness" — typing at ≈62.7 chars/s with the final joke arriving "amid fast text revelation after competing dot activity"; readability: the summary "needs more reading time… shorten the summary or extend its completed hold, then verify comprehension during normal-speed phone playback."
- C2 spacing sweep + clearance + secondary text — **PARTIAL.** (a) Probe: stage-2 checks — per-key model == CSS/builder equality, recomputed totals 553.0/619.0 ≤ 640, clearance 8px, contrast 6.03:1 modelled. (b) Wording: readability credits the surface ("full-opacity secondary source text improves separation"; hierarchy "serviceable") but prices the evidence class: "the fit model does not establish actual text containment" (character-count wrapping, no font metrics). Reusability found the same model↔builder class at a new site (card padding: the model assumes 24 from `.card`'s 12px padding stated separately). Fit-leg disposition: 17 HITs re-priced at the raised floor (ink 7.9 → 8.6px).
- C3 stamp position + entrance-from-cap — **LANDED.** (a) Probe: stage-3 checks — AABB inside at all sampled scales × 3 widths, max scale == cap, no flat segment, DOM margin/scale bound to the model. (b) Wording: motion lists the stamp curve among the supported mechanisms ("approach, overshoot, compression and settle"); readability does not price the stamp's position — its entrance residual moved to the BADGE's unreserved transformed bounds (a new item, below).
- C4 cliff marker + spike — **LANDED.** (a) Probe: stage-4 checks — marker fraction == cliffAt/animFraction at defaults and under both swaps; DOM line at the mapped position; rise 0.44 asserted from CONFIG. (b) Wording: no attempt-4 return prices the marker's alignment or the spike adversely (motion credits the shared counter/graph construction; timing quotes the cliff's calculated punctuation as sound). The spike's dispute price did not fire.
- C5 completion table + settled counter + badge entrance — **LANDED.** (a) Probe: stage-5 checks — counter-final == settle (defaults + swapped stackCount), badge onset/mid/completion states + derived 0.750s hold. (b) Wording: timing credits both by name — the settled counter "makes the stack's numerical payoff coincide with physical completion"; the badge sequence is "a credible setup, accent, hold sequence" (its 0.750s hold quoted without penalty — the priced hold reduction did not fire as a deduction).
- C6 literals/formatting/schedule/spacing-model/validation surface — **PARTIAL.** (a) Probe: stage-6 checks — mutation census rows for every new key incl. the ofWord rendered-string mutation, schedule gap/overlap/total rejections, waffle model == builder, warn display both branches; census leg 258/258. (b) Wording: reusability notes the census as reported-not-independently-verified and prices a remaining literal family the open inventory missed (stack unit symbol '▭', waffle inactive opacity .18, shared component geometry), plus text-length handling gaps (masthead height not derived from the masthead string; org node sizing excludes the node symbol; source lines reserve one line regardless of length) and validation boundaries (first figure start not required to be 0; no positive-integer checks for counts/columns; empty org-node arrays unguarded).
- Deferral dispositions: D1 (pixel route) — risk FIRED in readability's and motion's words (modelled fit / source curves do not establish rendered readability or perceived motion) and in reusability's rendered-swap pricing; D2 (derivation vs validation) — validation stood; the lens priced validation BOUNDARIES instead (above), not the absence of derivation; D3 (self-start) — risk FIRED in motion's words ("Playback requires intervention… provide automatic playback when used as a standalone specimen"); D4 (long-content adaptation) — risk FIRED in reusability's words (masthead/source-length handling, above); D5 (spike measurement) — did not fire.

**Attempt-5 cure queue (from the returns, convergent first):**
1. **Motion 78 (the new blocking lens):** figure transitions — the whole-panel hard swap at each window boundary vs the broadsheet's continuity (stage arrivals without whole-panel replacement); the stack's first unit starts mid-arrival (arrival span 1.6 puts it at 0.375 progress at q=0 — start the first unit at zero progress, retaining sequential settling + the synchronized counter). Both surfaces pre-date this attempt (unchanged constructions) and were priced for the first time here.
2. **Timing 81 + readability 78 (convergent):** summary readability — shorten the summary text or extend its completed hold (typing ≈62.7 chars/s priced by both lenses); playback verification remains the outstanding evidence (D1).
3. **Readability 78:** rendered phone text-bound checks (the evidence-class pricing fired a third time — but the pre-drafted A-C011-3 consequence was conditioned on readability remaining BELOW 70 on evidence-class wording; at 78 that condition is NOT met and the rest consequence does not trigger; the render route remains the lane's top evidence gap regardless); badge transformed bounds reserved (stamp model extended to the badge); counter subtext still on the weaker muted colour + counter emphasis.
4. **Reusability 82:** stack unit symbol + waffle inactive opacity + shared component geometry (card padding) into the single-source CONFIG contract; masthead height derived from the actual string + source-line wrap reserve + node sizing including the node symbol; validation boundaries (first start == 0, positive-integer counts/columns, empty collections rejected with named errors).
5. **Self-start (D3, now priced by motion):** automatic playback for standalone use, or the consumer's clock contract made explicit in the build.

**What passed:** purity 100 held for the fourth consecutive attempt; readability rose 64 → 78 (the attempt's target lens, +14, clearing the 70 floor) on the spacing sweep + secondary text + hold bundle; the average beat the prior attempt (+1.2) with no lens under the floor — the remaining distance to the bar is 1.2 points of average, concentrated in motion's two newly priced surfaces.

## Attempt 5 — WHY scaffold (pre-drafted, practice Cycle 024 Wave 23, plan-T17.md §10 as amended at the Cycle-024 plan-review consumption)
- Decisions explicit: beating = new average > 83.8; PASS = average ≥85 AND every lens ≥70.
- Cure-by-cure outcome slots (final-source evidence + lens disposition each): C1 figure continuity/fade curves ___ · C2 first-unit arrival + counter sync (intermediate thresholds) ___ · C3 summary pace (effective hold, net timing) ___ · C4 badge bounds + counter emphasis ___ · C5 fit family (renderer-consumed layout OR browser measurements; else ESCALATION DEVIATION printed) ___ · Q7 shared geometry ___ · Q8 text length ___ · Q9 validation-before-layout ___ · Q10 self-start ___.
- Signed per-lens deltas: motion ___ · timing ___ · purity ___ · reusability ___ · readability ___.
- What failed to move: ___
- Stuck-lens hypothesis + discriminators (pre-committed): effective hold + overlap for C1/C3 · intermediate count synchronization for C2 · actual bounds or explicitly unresolved render check for C4/C5. A missing browser route supports an evidence-class diagnosis ONLY when the final returns price that gap AND competing construction failures are ruled out as far as evidence permits; otherwise the WHY names the charged regression or states the cause UNRESOLVED.
- jev-plateau evidence: this scaffold + attempt-4/5 filed returns + build-record-attempt5.md + deferral dispositions (D1 render route priced per lens, A-C009-3).

## Attempt 5 — 2026-11-17 (practice Cycle 024 Wave 23)

Final source: `recreation.html` sha256 `3d5d108a9f3bb4d0e89c076673c7936a88c17f4e0c5092e4d9fac900fc7a1a47` (attempt-4 source preserved byte-identical at `recreation-attempt-4.html`, sha 0d04b443…; attempt-4 close bytes of this file preserved at `scores-attempt-4.md`, sha 03e42e12… = the Cycle-024 baseline; comparison.html unchanged, sha f6d34482…).

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 82 | codex/attempt-5/lens-motion.md |
| Timing / tempo match | 82 | codex/attempt-5/lens-timing.md |
| Construction purity | 100 | codex/attempt-5/lens-purity.md |
| Reusability / parameterization | 81 | codex/attempt-5/lens-reusability.md |
| Readability | 77 | codex/attempt-5/lens-readability.md |

**Arithmetic:** (82 + 82 + 100 + 81 + 77) / 5 = 422 / 5 = **84.4 average** · minimum lens **77**.
**Signed delta vs attempt 4:** 84.4 − 83.8 = **+0.6** (beats the prior average — floor rule satisfied, no WHY owed; Branch B of the pre-drafted scaffold applies).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL (beating, below bar)** — average misses by 0.6; no lens under the 70 floor (minimum 77). Tier stays **IN PROGRESS**; attempt 6 routes to the practice job. No style-library hand-off (PASS branch not taken).
**Per-lens deltas vs attempt 4:** motion 78 → 82 (+4) · timing 81 → 82 (+1) · purity 100 → 100 (0) · reusability 82 → 81 (−1) · readability 78 → 77 (−1). **Numerical attribution: BUNDLED** — checkpoints isolate construction changes only; one final scoring wave, no staged lens evaluations exist.

**Own-check summary (six stage suites, cumulative, re-run on the frozen final source, 78/78 PASS; evidence in build-record-attempt5.md + checkpoints/attempt-5/):** staged build under the checkpoint gate (8 checkpoint filings incl. the stage-2 cured re-filing, each create-once before the next stage began, inode independence asserted); transition boundary samples with no hard swap and no blank frame; stack ladder with counter synchronisation before-and-at every threshold under counts 10/14/1/2; summary at 33.3 chars/s with effective hold 1.535s; schedule dependents re-derived (cliff marker at cliffAt/animFraction ≈ 0.812, asserted against the SVG line); badge entrance fitted (cap 1.117 @360) with transformed bounds reserved; word-boundary fit family with renderer-consumed line spans for titles/source/summary; mutation-based CONFIG consumption census 278/278 leaves; validation adversarial set (named cases + non-finite/null/string-typed/magnitude/direct-edit + override paths, validation before layout); self-start asserted in both top-level and embedded modes; purity grep 0 subject hits.
**A-C008 legs on the new attempt (pre-wave):** `fit-table-attempt5.md` (HIT list 19 rows — label-class ink 8.6px at the 12px floor vs the leg's ~11px ink floor; disposition filed in the leg: containment + wrapped reserves + 8px clearance pass at all widths) · `config-census-attempt5.md` (278 leaves, 0 unconsumed; HIT list empty — but see the reusability outcome below: the lens independently prices one census-scope residue).
**PIXEL-UNVERIFIED (per sub-item):** the Chromium route was re-attempted once; startup failed with "Hatch WebGL domain policy is required for browser startup", no screenshot produced. Sub-items: (i) completed-figure frames × 360/390 — OUTSTANDING; (ii) transition frames — OUTSTANDING; (iii) normal-speed playback checks — OUTSTANDING; (iv) rendered swap checks — OUTSTANDING (logic-level swaps pass). Fifth consecutive attempt on this evidence class.
**comparison.html:** unchanged — total duration and the T17 interface it consumes are preserved (one additive `playing` getter); ORIGINAL side unchanged (hash matches the preservation baseline).
**Payload discipline:** manifest filed at `codex/attempt-5/payload-manifest.md` (allowlist-only; anchor scan over the COMPLETE assembled packets — 0 hits in all five); all five payloads + returns preserved create-once under `codex/attempt-5/`; returns `-o`-written to /tmp then content-copied with sha256 verified identical; per-lens scratch cwds containing only packet copies; all five returns bind the identical frozen source sha above and reference only packet material (no session contamination). One incident: the first motion firing produced a 0-byte output (no return material existed; recorded NOT ASSESSED in the build record) and was re-fired clean — the filed return is the clean re-fire.
**Mechanical guards:** guard 1 — arithmetic recomputed from the filed returns (422/5 = 84.4 exact; all scores integers in 0–100, scale valid). Guard 2 — preservation census over the 97-file baseline: exactly the lawful changes (working recreation.html; this file's appends) — preserved attempt-4 copies + all stage checkpoints re-hashed at filing, shas frozen. Guard 3 — floor-rule gate: 84.4 > 83.8, beating → no WHY owed; Branch B1 residual inventory filed below instead (no plateau call).
**A-C011-3 escalation disposition:** satisfied through the renderer-consumed leg — the word-boundary model's line breaks are enforced by the renderer itself (titles/source/summary render as the model's line spans, DOM-asserted equal); the browser-measurements leg remains open (D1). No proxy re-tune was filed as a cure.

### Residual inventory — what attempt 6 must cure (Branch B1; priced from the attempt-5 returns)

Cure-by-cure outcomes for attempt 5 (implementation probe and final-return wording cited separately; numerical movement BUNDLED; signed per-lens deltas in the header above):

- C1 figure transitions — **PARTIAL.** (a) Probe: stage-1 checks — no hard swap, no blank frame at any sample, masthead untouched, incoming mechanism starts at its boundary. (b) Wording: motion credits the continuity ("avoids a hard cut and leaves the paper visible") and rises 78 → 82, but all three perception lenses price the midpoint: at the boundary both figures sit at ≈2.3% opacity — "the figure area briefly approaches blank" (motion), "could read as a brief blank in the figure area at speed" (timing), "both figure bodies become effectively unreadable for a brief handoff" (readability). New surface priced by motion: FIG.23 mounts no reporting connectors, so the CEO-to-report branches never assemble; and the FIG.24 trace endpoint is forced to ≥2% progress, leading the counter for ≈0.062s.
- C2 stack zero-progress + counter synchronisation — **LANDED.** (a) Probe: first arrival exactly 0, last settle exactly at stackEnd, count == settled count before-and-at every threshold under counts 10/14/1/2 (the stage's first checkpoint caught the count-1 settle defect; clamp cured in-stage). (b) Wording: timing credits it directly — "the counter advancing on each settle… the tenth unit and count as the last beat"; no return prices a stack residual.
- C3 summary + reallocation — **PARTIAL.** (a) Probe: 68 chars, typing 2.04s at 33.3 chars/s, completion 2.74s, effective hold 1.535s; dependents re-derived (FIG.20 effective hold 0.592s, FIG.24 0.375s). (b) Wording: timing credits the summary explicitly — its fully opaque hold "clears the configured 1.360s reading floor by 0.175s" — and timing still lands 82, priced down on the handoff dip and FIG.24's 0.375s fully opaque hold for the final "1"; readability no longer prices the summary's pace (its points moved to the stamp/badge/label surfaces below). The net-timing risk priced at Plan (finding 1) fired in this form: the summary gain was partly spent on the shortened FIG.24 hold.
- C4 badge bounds + counter emphasis — **PARTIAL.** (a) Probe: badgeCap 1.117 @360, AABB inside content along the entrance curve, transformed height reserved; counter subtext on palette.secondary. (b) Wording: readability credits the counter card ("secondary subtext with good contrast", 6.03:1 in its calculated table) but prices the badge's edge-to-edge fit — the cap "uses the entire 328px modeled content width at entrance… the model’s edge-to-edge fit does not establish glyph clearance" (mixed-font badge text unmeasured) — and a NEW stamp surface: the stamp model "omits the CSS borders and tracking from its stamp box and reserves height below the stamp without accounting for its upward extension around the center origin… the correction card exposed to overlap during the slam" (≈35px upward extension vs a 16px gap in the lens's arithmetic).
- C5 fit family / renderer-consumed layout — **LANDED as construction; evidence class still open.** (a) Probe: word-boundary model + DOM line-span equality for titles/source/summary; fit containment at 360/390/960. (b) Wording: readability prices the remaining gaps inside the family — span text "can still wrap inside a span", several rendered line heights use browser defaults where the model assumes explicit values, y-axis text relies on a fixed 42px anchor with no measured glyph bounds — and the standing evidence class (no rendered phone evidence). The escalation's construction leg landed; its render leg is attempt 6's head charge with D1.
- Q7 shared geometry — **PARTIAL.** (a) Probe: keys landed across builders/CSS/model; census leg 278/278. (b) Wording: reusability (82 → 81) independently prices the census as overstated — `palette.muted` is written to a `--muted` variable with no rendering reader (an assignment, not an effective consumption) — plus two named literal residues: the transition overlap fractions 0.45/0.55 and the 5% pre-cliff validation bound (both inventoried as structural in the build record; the lens prices them as named CONFIG candidates).
- Q8 text-length handling — **PARTIAL.** (a) Probe: masthead-from-string, source-line reserves, node sizing with symbol — all asserted, incl. longer-string swaps. (b) Wording: reusability prices two further instances — editing the public config and calling render() leaves stale output (no rebuild entry point on the public interface), and an accepted wide swap breaks fit silently: a 60-dot waffle at 20 columns passes validation and fitReport while its grid is 392px wide inside 328px of content (figureGeom reports maxW as the content width, not the grid width — the width check cannot see the overflow).
- Q9 validation-before-layout — **LANDED for the priced set.** (a) Probe: first-start, positive-integer, span/count relation, safe-integer, string-typed, absent-group/collection and magnitude cases all route to named errors before geometry/mounting; both warn branches asserted. (b) Wording: no return prices a validation-boundary residual; reusability's remaining points are the census/mount/swap classes above (the wide-waffle case is filed under Q8 as a fit defect — validation accepting it is the same hole seen from the fit side).
- Q10 self-start — **LANDED.** (a) Probe: top-level auto-start driven to the scheduled ending under its own startup path; embedded no-start asserted. (b) Wording: timing notes "standalone playback stops on that completed frame" without deduction; motion prices no self-start residual.
- Deferral dispositions: D1 (pixel route) — risk FIRED in all four perception/reuse returns' limits (fifth consecutive attempt); D2 (derivation) — did not fire; D3 (long-content beyond named surfaces) — FIRED via the stale-config and wide-waffle instances (Q8); D4 (allocation) — priced in timing's limits; D5 (spike) — did not fire.

**Attempt-6 cure queue (from the returns, convergent first):**
1. **Render route (the head charge, D1 — five attempts outstanding):** obtain rendered evidence — completed figures + transition/badge/stamp frames at 360/390 + normal-speed playback — or the evidence-class discount now priced by four lenses stays the ceiling.
2. **Transition midpoint dip (motion + timing + readability, convergent):** both panels at ≈2.3% opacity at the boundary — raise the overlap floor so the handoff never approaches blank (e.g. outgoing holds a visibility floor until the incoming is established), then re-verify at playback.
3. **FIG.23 connectors (motion):** reporting branches that assemble with their nodes.
4. **FIG.24 (motion + timing + readability):** trace starts at the counter's actual progress (remove the 2% endpoint lead); the final "1" gets more than 0.375s fully opaque — reallocate inside FIG.24's window or re-price the transition's share of its hold.
5. **Stamp vertical bounds (readability):** model the stamp box with its CSS borders/tracking and reserve its upward extension around the centre origin, not only the band below.
6. **Badge glyph clearance (readability):** entrance fit with clearance inside the content width (not edge-to-edge), mixed-font text accounted.
7. **Fit-model width truth (reusability):** figureGeom maxW must be the figure's actual maximum rendered width (waffle grid width included); accepted swaps either fit or receive a named validation error (the 60-dot/20-column case is the regression probe).
8. **Census honesty + mount contract (reusability):** palette.muted gains a rendering reader or leaves CONFIG; transition overlap fractions + the 5% pre-cliff bound become named CONFIG keys; the public interface gains a rebuild/remount entry point for edited configuration.
9. **Readability residuals:** "you" label anchored to its dot; bar-label baseline clearance for descenders; explicit line heights where the model assumes them; y-axis label glyph bounds.

**What passed:** purity 100 held for the fifth consecutive attempt; motion rose 78 → 82 on the transition + ladder bundle (the plan's delta lens, exactly its target); the average beat the prior attempt (+0.6) with no lens under the floor for the second consecutive attempt — the remaining distance to the bar is 0.6 points of average, concentrated in the transition midpoint, the FIG.24 hold, and the evidence class.

## Attempt 6 — Plan WHY scaffold (Cycle 026)

Pre-drafted in Plan per INSTRUCTION §2 (practice Cycle 026 Wave 25, plan-T17.md in the cycle run dir): if attempt 6 does NOT beat the attempt-5 average of 84.4, the WHY owed under the floor rule (§5.4) is completed from this scaffold at close; if it beats 84.4, Branch B applies. Decisions explicit: beating = new average > 84.4; PASS = average ≥85 AND every lens ≥70. Numerical attribution is BUNDLED unless the stage checkpoints (checkpoints/attempt-6/, A-C010-1a/A-C012-4) isolate an effect. Q10 self-start LANDED at attempt 5 — regression slot only, not a cure slot.

### Branch A — attempt 6 does NOT beat 84.4 (average ≤ 84.4): WHY owed before the cycle may close; jev-plateau fires at close

Cure-by-cure outcome slots (fill at close: LANDED / PARTIAL / FAILED, with (a) implementation probe and (b) final-return wording kept separate for each):
- C1 transition visibility floor (convergent motion+timing+readability): probe ___ · motion wording ___ · timing wording ___ · readability wording ___
- C2 FIG.23 reporting connectors: probe ___ · motion wording ___
- C3 FIG.24 trace origin (no 2% lead) + final-"1" hold ≥0.6s: probe ___ · motion wording ___ · timing wording ___ · readability wording ___
- C4 stamp vertical bounds (borders/tracking in the box, upward extension reserved): probe ___ · readability wording ___
- C5 badge glyph clearance (cleared width, mixed-font measurement): probe ___ · readability wording ___
- C6 fit width truth + census honesty + mount/rebuild contract (figureGeom actual maxW · wide-waffle named error · palette.muted effective consumer · overlap fractions + 5% bound as CONFIG keys · rebuild entry point): probe ___ · reusability wording ___
- C7 readability residuals ("you" anchored to dot · bar-label descender clearance · explicit line heights · y-axis glyph bounds): probe ___ · readability wording ___
- Q10 self-start regression (asserted, not re-cured): probe ___ · any return pricing ___

Signed per-lens deltas vs attempt 5 (motion 82 · timing 82 · purity 100 · reusability 81 · readability 77): motion ___ · timing ___ · purity ___ · reusability ___ · readability ___ · average delta vs 84.4 ___.
What failed to move: ___
Deferral dispositions D1–D5 (render route priced per lens, A-C009-3 · schedule derivation · long-content beyond named surfaces · allocation-not-measurement · cliff spike) — did any deferral's priced risk fire, and in which lens's words: ___

### Stuck-lens hypothesis (pre-drafted, falsifiable)

Primary hypothesis: READABILITY is the stuck lens — it sticks at or below 79 even with C4/C5/C7 landed, because its attempt-5 Limits price the evidence class itself ("the packet contains no rendered phone evidence", PIXEL-UNVERIFIED, D1 undischargeable in-lane for a sixth attempt), not the geometry the cures fix. Falsifier: if readability reaches ≥82 on source-only evidence with C4/C5/C7 landed, the hypothesis is FALSE and the discount was never structural — the a5 plan's (i) ceiling claim dies with it. Secondary hypothesis: MOTION+TIMING fall TOGETHER if C1's visibility floor is priced as occlusion/dwell distortion rather than continuity (the convergent pair has moved together on shared surfaces before); discriminator: both returns name the floor/hold construction itself, not a new surface. If neither hypothesis matches the returns, the actual stuck lens + its verbatim pricing language replaces this section at close.

### Evidence jev-plateau will need (file pointers, completed at close)

- Per-cure outcome for C1–C7 above, each tied to a filed attempt-6 lens return passage (not scores).
- Per-lens signed deltas vs attempt 5 and the average delta vs 84.4.
- Checkpoint attribution (A-C010-1a): which stage (1–5) isolates which movement, or BUNDLED where no checkpoint isolates it.
- Deferral dispositions D1–D5 with per-lens risk priced (plan-T17.md §6) and fired/not-fired per return.
- build-record-attempt6.md (hold table incl. FIG.24 final-"1" hold; literal census) + fit-table-attempt6.md + config-census-attempt6.md + codex/attempt-6/payload-manifest.md.
- The plateau context: six attempts, averages 81.8 (a2, five-lens) → 82.6 → 83.8 → 84.4 → attempt 6 ___; if a6 does not beat 84.4, the increments have flattened (+1.2, +1.2, +0.6, ≤0) across four attempts on source-only evidence — the plateau filing should price the render route (D1) as a lane-level build charge, not a seventh source-only cure wave.

### Branch B — attempt 6 beats 84.4: no WHY owed

Residual inventory files in the Attempt 6 filing instead (Branch B1 form, as at attempt 5): what remains priced, per lens, with the next cure queue. On PASS (≥85, min ≥70): tier hand-off to the style-library board with this file's pointer.

## Attempt 6 — Filing (practice Cycle 026 Wave 25)

Source: `recreation.html` sha256 `96341c01696d67b0be4578ce81332258287cf7101b5ebe09acabc9fc916c9780` (frozen before payload assembly; payload manifest `codex/attempt-6/payload-manifest.md` filed before firing; anchor scan 0 hits incl. source comments). Append-only filing; pre-append content survival verified (62159 bytes, sha a796e3c9… before this append).

**Scores: motion 81 · timing 86 · purity 78 · reusability 62 · readability 64 → average 74.2, min 62 (reusability). Signed delta vs attempt 5 (84.4): −10.2. Verdict: FAIL — NON-BEATING (average ≤ 84.4), below the bar (≥85, min ≥70) on both terms.** Per-lens deltas vs a5: motion −1 · timing +4 · purity −22 · reusability −19 · readability −13. Read scopes (A-C019-2): all five sessions cite only their own lens payload file — no out-of-allowlist read evidenced; scores stand uncontaminated. PIXEL-UNVERIFIED stands (sixth attempt; D1 Chromium re-attempt failed at startup, same domain-policy block).

### WHY (floor rule §5.4 — completed from the Plan scaffold, Branch A)

Cure-by-cure (implementation probe kept separate from return wording):
- **C1 transition floor:** probe LANDED (combined displayed opacity ≥0.35 at every sample; minimum exactly 0.350). Return wording — motion: the floor's RELEASE is a hard step: "When the incoming figure reaches 0.50, the outgoing figure drops from 0.35 to 0 because its raw fade has already ended. The sampled opacity-floor check can pass despite that discontinuity." Timing credited the handoff programme (86, +4) while naming the same release in its BODY-WRITE. The cure fixed the dip and introduced a cliff at its edge — a continuity defect the sample-based assertion cannot see.
- **C2 FIG.23 connectors:** probe LANDED in the state model (fractions = threshold formula). Return wording — motion + readability convergent: the mounted connector SVG is appended BELOW the report row (not between CEO and reports), and endpoints keyed by column alone make wrapped reports share endpoints: "the links fail to assemble the hierarchy" (motion); "the reporting lines are detached" (readability). Model-vs-mounted divergence: the state probe asserted the fractions, never the mounted geometry.
- **C3 FIG.24 origin + hold:** probe LANDED (origin exact, displayed hold 0.625s ≥ 0.6s asserted). Return wording — timing rose +4 with the hold credited in its accounting; no return prices the origin or hold against the build. The one cure whose priced surface moved as planned.
- **C4 stamp bounds:** probe LANDED in the model (borders/tracking in the box; reserve 22.2/24.2/35.5px inside the block). Return wording — readability: the reserve "contributes to stage height but does not clear the correction copy" — the mounted wrapper carries no top inset, so the entrance transform still projects ≈34.6–39.4px above the box against a 16px gap. Model reserve ≠ mounted clearance, same divergence class as C2.
- **C5 badge clearance:** probe LANDED in the model (cleared width, per-font segments). Return wording — readability: the badge model measures its handwritten segment at 14px "while the mounted span inherits the 12px badge size" — the mounted badge does not render at the modelled size, so the clearance proof does not describe the mounted badge.
- **C6 fit/census/mount:** probe PARTIAL — width truth + wide-waffle named error + length bounds landed, and the census resolved 0 unconsumed. Return wording — reusability (62, floor breach): validation still accepts a string-typed top-level duration, missing fonts, missing xLabels, and a zero sample step (which stalls the counter trace loop); a null figure and missing org nodes throw instead of naming errors; `fitReport` drops a rejected figure and then reports ok:true (and reports ok:true at 960 with a 1000px stack column the geometry does not price); `rebuild` mutates the live config and clears the scene before replacement construction succeeds; the muted palette reader looks up the meta element after the old one was removed and before the new one is appended, so it never fires on remount. Purity (78, −22) priced the same family from its side: parallel rendered/modelled values (stylesheet line-height 1.3 vs model lineHeights; stamp letter-spacing in CSS vs the new CONFIG key; stamp padding CSS pair vs model pair) and the pre-cliff diagnostic still printing a fixed "5%". The validation-completeness assertion set tested the figure-level direct-edit path and missed the top-level + group-absence classes the lens probed.
- **C7 readability residuals:** probe PARTIAL — y-axis pad derived + shared (credited: "FIG. 20 budgets y-label width from the text estimate, and FIG. 22 places bar-label baselines 6 px above the SVG edge"), descender room landed. Return wording — readability (64, −13): the "you →" label sits right of its dot with the arrow pointing AWAY from it into the neighbour's space ("points toward the neighboring dot"); the non-wrapping title rule targets a class the builder does not emit (.figtitle vs the emitted class), so the asserted nowrap does not exist in the mounted page.
- **Q10 self-start regression:** probe asserted (form check); no return prices it.

**What failed to move:** the attempt's centre of failure is not any single cure's model — it is the MODEL-vs-MOUNTED divergence class across C2/C4/C5/C7 plus the validation-depth class in C6. Every stage's own-checks asserted the pure-logic model; the mounted DOM geometry, class names, font sizes, and scene-assembly order were asserted nowhere, and four of five lenses found their largest deductions exactly there. The pre-drafted stuck-lens hypothesis (readability capped by the evidence class) is FALSIFIED as the primary explanation: readability fell on named mounted defects, not on the evidence ceiling; the secondary hypothesis (motion+timing fall together on C1) half-fired — motion −1 on the release step while timing +4 credited the same handoff's hold programme.

**Deferral dispositions:** D1's priced risk FIRED in every lens's Limits (rendered evidence absent; entrances/handoffs unverified) and is now the binding constraint on the divergence class — the mounted defects are precisely the ones a single rendered frame or a stub-DOM mount assertion would have caught. D2/D4/D5 did not fire as priced deductions. D3 fired in part: unnamed mounted surfaces (connector layer placement, title class) priced under readability/reusability.

### jev-plateau disposition (seat judging, transport unbound — INSTRUCTION §5.4)

**PLATEAU NAMED.** Six attempts: 81.8 → 82.6 → 83.8 → 84.4 → **74.2**. The four-attempt climb on source-only evidence has reversed: attempt 6's broader cure set widened the mounted surface faster than the model-only own-checks could cover it, and the lenses priced the gap. The plateau is not the technique's ceiling — it is the verification form's ceiling: model-only assertions have now produced two consecutive attempts whose decisive defects lived outside the model (a5's mounted/evidence residues; a6's mounted divergence class). Next attempt's first charge is therefore NOT another cure wave on this plan: it is (1) a mounted-state assertion layer (stub-DOM or rendered) covering placement, class, font-size, and scene-order for every modelled claim, (2) validation schema/range completeness at the top level and per group, probed adversarially beyond the named cases, (3) the render route (D1) as a lane-level build charge. The WHY scaffold's plateau evidence pointers stand in build-record-attempt6.md + fit-table-attempt6.md + config-census-attempt6.md + codex/attempt-6/ (manifest + five returns).


## Attempt 7 — 2026-11-18 (practice Cycle 027 Wave 26)

Final source: `recreation.html` sha256 `50c38b6fd3aed9a8aff5fc14f2862d7be40e6d657a561bc41714de714265ea71` (attempt-6 source preserved byte-identical at `recreation-attempt-6.html`, sha 96341c01…; comparison.html unchanged, sha f6d34482…; the attempt-6-bound comparison view stands as `comparison-attempt-6.html`). Append-only filing; pre-append bytes verified against the run baseline (69,899 bytes, sha 2411d3ba… = baseline capture).

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 84 | codex/attempt-7/lens-motion.md |
| Timing / tempo match | 84 | codex/attempt-7/lens-timing.md |
| Construction purity | 83 | codex/attempt-7/lens-purity.md |
| Reusability / parameterization | 64 | codex/attempt-7/lens-reusability.md |
| Readability | 68 | codex/attempt-7/lens-readability.md |

**Arithmetic:** (84 + 84 + 83 + 64 + 68) / 5 = 383 / 5 = **76.6 average** · minimum lens **64** (reusability).
**Signed delta vs attempt 6:** 76.6 − 74.2 = **+2.4** (beats the prior average — floor rule satisfied, no WHY owed). **Per-lens deltas vs a6:** motion 81 → 84 (+3) · timing 86 → 84 (−2) · purity 78 → 83 (+5) · reusability 62 → 64 (+2) · readability 64 → 68 (+4). **Numerical attribution: BUNDLED** — checkpoints isolate construction changes only; one final scoring wave.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL (beating, below bar)** — average misses by 8.4; two lenses under the 70 floor (reusability 64, readability 68). Tier stays **IN PROGRESS**; attempt 8 routes to the practice job. No style-library hand-off (PASS branch not taken).
**Read scopes (A-C019-2):** all five sessions cite only their own lens payload — no out-of-allowlist read evidenced; scores stand uncontaminated. One incident: the first motion firing returned 0 bytes (no material existed), preserved labelled NOT ASSESSED, re-fired clean once; the filed return is the clean re-fire.
**PIXEL-UNVERIFIED:** seventh consecutive attempt — the Chromium re-attempt on the final source failed at startup ("Hatch WebGL domain policy is required for browser startup"), no screenshot produced. Coverage counts: emitted-structure assertions 30 · source-derived geometry 15 · browser measurements 0.

**Own-check summary (mounted-state harness on the frozen final source, 45/45 PASS; evidence in build-record-attempt7.md + checkpoints/attempt-7/):** Stage 0 pre-cure probes detected all five a6 divergence cases on the frozen a6 source (9/9 DETECTED); post-cure — connector layers mounted between CEO and report rows with 4 distinct per-node endpoints at 360/390 · stamp mounted top inset == modelled reserve at 360/390/960 with projected AABB inside the cleared space · badge mounted hand size == modelled size (14 = 14) · 0 dead CSS selectors, nowrap rule on the emitted title class · handoff opacity continuous (max step 0.0061 @1 ms, floor held) · validation corpus 12 malformed classes → named errors, never throws (defaults valid) · fit report retains rejected figures (ok:false) · atomic rebuild (invalid rejected untouched; sabotaged construction restores prior config with a named error; palette swap effective on the new scene) · single-source mutation checks (stamp padding/letter-spacing, label line height, stage aspect, pre-cliff diagnostic text) · self-start + FIG.24 final-"1" displayed hold 0.625 s regression.
**A-C008 legs on the new attempt (pre-wave):** `fit-table-attempt7.md` (18 rows, HIT list 0) · `config-census-attempt7.md` (206 leaves probed, 164 consumed by the generic probe, 42 with named-consumer dispositions).

### Residual inventory — what attempt 8 must cure (Branch B1 form; priced from the attempt-7 returns)

Cure-by-cure outcomes for attempt 7 (implementation probe and final-return wording cited separately; numerical movement BUNDLED; signed per-lens deltas in the header above):

- **M1 mounted layer:** probe — census 45 checks (E 30 / G 15 / B 0), 0 model-only claims in the inventory; five a6 cases FAIL pre-cure / PASS post-cure. Return wording — no lens priced a mounted defect on an ASSERTED surface. Two deductions name surfaces the inventory did not assert (callout neighbour clearance; connector visible attachment) — under the plan-review finding-6 branch this is a **coverage gap**, not a stub-fidelity failure: the next discriminating test is extending the census to neighbour-clearance and attachment rows before any further cure on those surfaces.
- **M2 validation:** probe — 12-class adversarial corpus, all named errors, defaults valid; atomic-rebuild probes pass. Return wording — reusability (64) traced three residual classes the corpus did not include: (i) `figures: {}` (non-array) records a count error then throws in traversal, and a null first/last figure reaches an unguarded schedule dereference — both escape rebuild's try because validation runs before it; (ii) an empty palette passes (required members not enumerated); (iii) arbitrarily small positive sampleStep passes while the counter renderer's loop advances by it (no sample-count bound). Purity independently traced the same `figures: {}` throw against the packet's totality claim. The corpus tested the named classes; the lens probed the traversal order itself.
- **C3 connectors:** probe LANDED (per-row layers, distinct endpoints, order asserted). Return wording — motion credits the assembly order; readability prices what the stub cannot assert: each connector ends at its layer's bottom, then an 18 px row margin interrupts the visible path to the labels, and the second layer sits below the first report row — visible attachment unresolved (class-B/G surface, PIXEL-UNVERIFIED).
- **C4 stamp inset:** probe LANDED (inset == reserve at three widths; AABB inside cleared space). Return wording — readability credits it directly ("FIG.25 has a stronger construction check because the stamp's modeled upward reserve is mounted as real padding"); its entrance glyph bounds remain a rendered-check item.
- **C5 badge size:** probe LANDED (14 = 14 mounted). Return wording — no return prices the badge's font size; readability leaves the scaled badge's clearance unresolved (rendered surface).
- **C6 callout/nowrap/stack:** probe PARTIAL — nowrap + stack line-height landed unpriced adversely; the callout's target clearance asserted PASS, but readability shows the label box (x≈26.6–60 @360) crosses the NEIGHBOUR dot (x=32–56) on the same row: the left-of-dot placement spends the neighbour's space. Attempt 8: a dedicated callout lane (below the grid or in the margin), with neighbour clearance asserted in the census.
- **C1 release continuity:** probe LANDED (max step 0.0061 @1 ms; floor held; joins continuous). Return wording — motion sampled the first handoff (outgoing 0.350 / incoming 0.023) and credits the continuity probe while leaving the visible dip unassessed in playback; timing prices the handoff midpoint's low figure opacity as a deduction — the floor's level, not its continuity, is now the priced surface.
- **C7 single-source values:** probe LANDED (parallel keys deleted; mutation census across the CSS/model boundary; diagnostic derives its bound). Return wording — purity rose 78 → 83 and prices a smaller remaining family: `#controls` fixed at 960 px and the 960 width fallback in buildAll sit outside the stage-width key; renderer literals (chart-title letter-spacing/margin, path stroke width) and the chart-title margin encoded independently in the geometry model; page background / clock ink applied only at startup, outside the remount path (reusability prices the same stale-chrome gap from its side).
- **Regressions:** Q10 self-start asserted, unpriced · FIG.24 origin/hold asserted (0.625 s), timing credits the counter/graph synchrony ("the countdown and graph drop are synchronized by construction", motion).

**Attempt-8 cure queue (from the returns, convergent first):**
1. **Validation totality, traversal-first (reusability 64 + purity convergent):** shape checks before any traversal (figures must be an array before counting/iterating; schedule dereferences guarded at both ends); required palette members enumerated; a sample-count bound so the counter loop is guaranteed to finish; rebuild's validation inside its failure boundary.
2. **Callout lane (readability 68):** dedicated lane for the waffle callout with neighbour clearance asserted in the mounted census (the coverage-gap test from M1's outcome).
3. **Connector visible attachment (readability):** close the row-margin interruption (connector layer flush to its row, or the margin carried inside the layer) and assert attachment in the census; rendered check remains D1.
4. **Remount completeness (reusability + purity convergent):** candidate built and sized from an independent configuration (stage width read after the new width is set); page chrome (background, clock ink) inside the remount path; nested configuration copied, not referenced.
5. **Fit truth for changed content (reusability):** widest occupied element reported (single-token overflow), errors retained for every supported figure ID shape, global validation failures included in the fit result's ok; counter's mounted vertical margins inside the geometry model (readability).
6. **Remaining parallel values (purity):** controls width + width fallback under the stage-width key; chart-title spacing/margin and stroke widths single-sourced.
7. **D1 render route** remains a lane-level build charge (seventh attempt PIXEL-UNVERIFIED) — timing's handoff-dip and FIG.20/FIG.23 hold deductions, and motion's playback items, stay capped by that evidence class until it lands.

## Attempt 8 — 2026-11-18 (practice Cycle 028 Wave 27)

Final source: `recreation.html` sha256 `63e602939c61ad7e2aaa24396486bb26f2d302e4cf08839a43f33738af33a74d` (attempt-7 source preserved byte-identical at `recreation-attempt-7.html`, sha 50c38b6f…ea71; comparison.html unchanged, sha f6d34482…; ORIGINAL side `segment.mp4` sha 6375084a… verified against the run baseline). Append-only filing; pre-append bytes verified against the run baseline (79,620 bytes, sha f5dc0ecf… = baseline capture). Build record: `build-record-attempt8.md` (plan-review addendum consuming all 6 REVISE findings + stage record). Checkpoints: `checkpoints/attempt-8/` stages 0–7, each filed create-once before the next stage opened; paired probes on both adjacent snapshots per cure; lens movements **BUNDLED**.

| Lens | Score | Δ vs a7 | Return |
|---|---|---|---|
| Motion fidelity | 86 | +2 | codex/attempt-8/lens-motion.md |
| Timing / tempo | 83 | −1 | codex/attempt-8/lens-timing.md |
| Construction purity | 82 | −1 | codex/attempt-8/lens-purity.md |
| Reusability | 68 | +4 | codex/attempt-8/lens-reusability.md |
| Readability | 76 | +8 | codex/attempt-8/lens-readability.md |

**Average 79.0 · minimum 68 (reusability) · signed delta +2.4 vs attempt 7 (76.6) · Verdict: FAIL — beating, below bar** (bar avg ≥85.0 AND min ≥70; average short by 6.0, reusability floor missed by 2). Floor rule satisfied by the beat — **no WHY owed**. PIXEL-UNVERIFIED — eighth consecutive attempt (D1 render route remains a lane charge).

**Cure outcomes (checkpoint-isolated construction effects; lens wording cited):**
- **C1 validation totality — LANDED, lens-partial.** Paired corpus 8/26 → 26/26 (shape-first traversal, palette enumerated, schedule ends guarded, rebuild boundary at Stage 4). Reusability (+4) prices remaining holes of the same class: required timing members not enumerated (deleting `timing.drawEnd` passes), null `yLabels` entries pass the array check, `fitReport` computes layout before validation, and the sample bound under-counts the renderer's full loop domain (loop runs over 0..1, bound priced the animation fraction — ≈649 iterations pass a 512 bound). The traversal class is deeper than the named cases again — attempt 9's first reusability charge.
- **C2 callout lane + A-C027-2 first trial — LANDED.** Readability credits the lane directly ("a modeled 28.8 px minimum dot clearance and 8 px summary clearance at both widths", +8). Residual named by the same return: the census asserted the arrow TIP pair; the arrow SHAFT crosses a non-target dot on its route — a pair-set coverage gap in the trial census (shaft × every dot is attempt 9's pair), and the label's arrow glyph points right while the leader runs upward.
- **C3 connector attachment — LANDED.** Margin carried inside the layer; mounted end gap 18 → 0 at both widths, both layers; readability's remaining connector deduction is routing ambiguity, not the interruption.
- **C4 remount completeness — LANDED with an in-stage cure.** Width swap derives geometry from the candidate width, chrome rides the remount, deep-copy isolation asserted; the failure probe exposed and cured an orphan figure root left by a mid-build throw. Reusability prices the rollback FAMILY, not the probes: the live scene is dismantled before the candidate succeeds and rollback reconstructs (with recreation failure suppressed), and a successful swap's render can rewind an in-flight preview — attempt 9: candidate-offstage build with a defined fit/playback contract.
- **C5 fit truth — LANDED, lens-partial.** The return's own counterexample now reports occupied 598.4px with width-ok false; global failures enter fit.ok; counter margins modelled. Residuals: fit rows do not carry the occupied width the model computes (callers cannot recover it from the row), and per-element occupied widths inside cards are unmodelled (a 100×`W` card token passes width-ok).
- **C6 single-source — LANDED, lens-partial.** Purity (−1) prices what the census scope missed: stylesheet stage/controls fallbacks repeat the width value, waffle spacing values repeat across model and renderer, and the counter path's stroke width stands outside the single-source pass. The literal census's stated scope (script lines) is the gap — attempt 9's census covers the stylesheet and every builder.
- **Packet-scope note (two lenses):** reusability and purity both price the census summaries as UNVERIFIED because leaf-level leg results were not in the fed packet. The legs are filed in full (`fit-table-attempt8.md` 18/18 · `config-census-attempt8.md` 312 leaves, 0 unconsumed); attempt 9's packet carries the leaf-level tables or prints the scope limit in the packet itself.

**Attempt-9 cure queue (from the returns, convergent first):**
1. **Validation completeness, second pass (reusability 68):** required timing/layout members enumerated by name (not key-iteration); per-entry shape checks for label/point arrays; fit path validates before it computes layout; sample bound derived from the renderer's full loop domain (1 ÷ step).
2. **Remount contract (reusability + purity convergent on the swap surface):** candidate built offstage and swapped in only on success; rollback never reconstructs; a defined fit + playback contract for rebuild callers (a swap whose fit fails is reported, a successful swap does not rewind playback); complete DLC-class preset swap covering every subject-bearing field.
3. **Callout shaft routing (readability 76):** leader routed through an inter-dot gap; shaft × every dot added to the clearance-pair set; label glyph aligned with the leader's direction.
4. **Fit surface completion (reusability):** occupied widths carried on fit rows; per-element occupied widths inside cards modelled.
5. **Literal census scope (purity 82):** stylesheet + all builders inside the census; waffle spacing and counter stroke single-sourced; stage-width fallbacks resolved to the one owner.
6. **Branch-B1 residuals (deferred construction, priced at plan review):** timing hold-budget + handoff-curve construction (timing 83 — the FIG.20/FIG.23 holds and the handoff midpoint remain priced, unbuilt); **D1 render route** (ninth attempt PIXEL-UNVERIFIED if it stands) — readability's glyph containment, badge/stamp entrances and handoff playback stay capped by that evidence class.

---

## Attempt 9 — 2026-11-18 (Cycle 029 Wave 28)

**Source:** `recreation.html` sha256 `ae5b68d4f42b30ea425a94f67fa8654cd87a6ef8e1d7e3e462cc530fb70f1729` (frozen at stage 6, 19/19 freeze checks; published by content copy from the frozen candidate — the working file carried the predecessor build until the freeze). Preservation baseline: `preservation-baseline-T17-attempt9.txt` (run dir, 255 files, script-generated before any mutation); predecessor preserved create-once at `recreation-attempt-8.html` sha `63e602939c61ad7e2aaa24396486bb26f2d302e4cf08839a43f33738af33a74d`. Post-publish census: 255/255 baseline files checked, only `recreation.html` differs. Comparison probe: ORIGINAL `segment.mp4` sha `6375084a61b958ce` == baseline; recreation side == frozen sha; wrapper unchanged (the rebuild return gained a `fit` field — additive; the wrapper consumes `render` only). Scored blind: allowlist payloads only (instruction + technique facts + current-source construction facts + own-check packet carrying the leaf-level leg tables in full + source), payload manifest filed before firing (`codex/attempt-9/payload-manifest.md`); anchor scan over the assembled payloads: one benign hit class (the word "checkpoints" inside the standing technique facts, a specimen-timing evidence word), all other terms zero. Five governing firings, one per lens, each return exactly one SCORE line; filed at `codex/attempt-9/lens-<lens>.md`, sha-verified against the `-o` originals in the same invocation. Session read scopes: each lens session's cwd held only the five allowlist copies. PIXEL-UNVERIFIED stands (9th attempt; seat record D-A9-1).

**Own checks (final source):** staged suites CP0 12/12 (predecessor defects all reproduced) · CP1 21/21 · CP2 40/40 · CP3 19/19 · CP4 11/11 · CP5 17/17 · freeze 19/19. Legs: fit-table-attempt9 HIT 18/18; config-census-attempt9 323 leaves — 152 consumed by measured-effect mutation, 171 named-consumer, 0 unconsumed.

| Lens | Score | Δ vs attempt 8 |
|---|---|---|
| Motion fidelity | 87 | +1 (86) |
| Timing | 82 | −1 (83) |
| Purity | 84 | +2 (82) |
| Reusability | 77 | +9 (68) |
| Readability | 78 | +2 (76) |
| **Average** | **81.6** | **+2.6 vs 79.0** |
| **Minimum** | **77** | |

**Verdict: NOT PASS — IN PROGRESS stands.** Average 81.6 < 85 (the min condition is met for the first time: every lens ≥ 77). WHY section: **not owed** — the average beats 79.0 (+2.6).

**Pre-committed plateau test (from the attempt-9 plan's WHY scaffold, printed because the scaffold committed to it):** the plateau conditions were (average fails to beat 79.0) AND (minimum below 70). Neither holds: 81.6 > 79.0 and minimum 77 ≥ 70. **PLATEAU NOT DECLARED.** The scaffold's falsifiable hypothesis — reusability sticks below 75 because the class is generative — is **falsified in its strict form on its first test**: reusability scored 77 (+9, the largest single-lens movement in this item's history). The generative mechanism the hypothesis named is nonetheless confirmed in kind by this attempt's reusability return: the lens found the next sibling cases on the new surface (below, R-A10-1/2/4). The hypothesis is retired as stated; its mechanism survives as the residual queue's organizing fact, not as a score prediction.

### Cure-by-cure outcome slots (plan §1)
- **K1 transactional remount — CURED for the contract as specified.** Reusability 68 → 77; the lens confirms the public remount works for the supplied presets, with the mounted roots surviving the tested validation, fit, and builder failures, and preview/playing positions surviving successful swaps. Priced limits found by the same lens are filed as R-A10-4 (the fit gate does not cover the resize path; a width-changing candidate is fit-checked at the standing width under browser conditions).
- **K2 validation — PARTIAL.** The enumerated surface holds (324-case sweep clean; named cases 16/16; the shared sample-count rule with instrumented renderer equality). The lens's direct probes found three escapes on the per-figure container/value-domain surface the sweep did not generate: a non-array `bars` and an invalid `counterLocale` value each throw uncaught through the public rebuild (the locale case throws in the post-commit render), and a deleted `donutFraction` validates clean. Seat-verified firsthand after the returns (all three reproduce; the locale throw does not reproduce in the build harness's Intl implementation but does through the lens's runtime and in the post-commit render path). → R-A10-1.
- **K3 stepped shaft — CURED at the geometry class.** Readability confirms the target attachment and clearance ("supports a clear association in the model"); readability 76 → 78. Residual: the builder's leader vertical offset assumes the modelled count-row height while the row renders with browser line-height — a model/renderer divergence in the pixel class → R-A10-5.
- **K4 fit surface — PARTIAL.** Occupied/available/titleOcc stand on every row and the unbreakable-token card case is refused with its fit report (occupied 1083 vs available 328). The lens found positioned SVG text outside the occupied model: a 100-`W` bar label passes fit (occupied 328, ok) because the model measures the SVG box and omits the labels the builder centers at each bar. → R-A10-2.
- **K5 single-sourcing — PARTIAL.** Purity 82 → 84. The lens prices what remains: stylesheet letter-spacing literals (masthead, metadata, figure number), a hard-coded counter-label opacity, header geometry held in both the stylesheet and the layout model, and census named-consumers that carry no measured effect (the shaft edge floor is read by checks, never by the geometry; the badge font keys move the model while the badge builder uses fixed font roles). → R-A10-3.
- **K6 process (freeze + packet scope) — EXECUTED as designed** (no score slot): candidate-only build, freeze-gated publish, leaf-level leg tables inside the packet.

### Lens findings carried (one line each; full returns in `codex/attempt-9/`)
- Motion (87): mechanisms all present and ordered; asks that FIG.24's opening value hold through the handoff and for normal-speed captures (joins Branch-B1 / D1).
- Timing (82): windows exact; the handoff midpoint dip is now measured by the lens (outgoing 35% opacity, incoming ~2.3%); FIG.21's completed summary holds 1.535s at full opacity against the 1.36s reading budget — a 0.18s margin (joins Branch-B1).
- Purity (84): self-contained construction and replaceable subject confirmed; remaining literal/dual-source cases at R-A10-3.
- Reusability (77): remount contract confirmed; validation escapes, the bar-label fit blind spot, and the resize/width gating asymmetry at R-A10-1/2/4.
- Readability (78): type floors and attachment confirmed in the model; line-height divergences, FIG.20's post-label anchoring, and FIG.20's 4.4px title margin at 390 at R-A10-5.

### Residual queue — attempt 10
- **R-A10-1 Validation completeness, layer 2:** per-figure container shapes enforced by name (a non-array `bars` is a named error, never a throw); value-domain checks before geometry (an invalid `counterLocale` is named, not thrown); the full per-figure field set required by name (`donutFraction` first); every throw inside the public rebuild contained to a returned failure; regression checks for the lens's three probes.
- **R-A10-2 Positioned-text fit:** every positioned SVG text (bar labels first) checked by its positioned left/right extents against its own viewport in the fit model.
- **R-A10-3 Single-sourcing, layer 2:** stylesheet letter-spacing literals, the counter-label opacity, and the dual header geometry get single owners; effect checks (not named references) for renderer keys — the badge font keys and the builder aligned; the shaft edge floor either consumed by the geometry or reclassified in the census as a check-only constant.
- **R-A10-4 Fit-gating symmetry:** the resize path applies the same fit gate as rebuild; a width-changing candidate's fit is derived from the candidate's prospective width.
- **R-A10-5 Model/renderer alignment:** line heights aligned between the model and the builders (FIG.20 chart title, FIG.24 counter text, FIG.21 count row); FIG.20's post labels anchored to the observations they name; FIG.20's title margin at 390px.
- **Branch-B1 (deferred whole from attempt 9, D-A9-2; per-lens priced there):** handoff-curve visibility (midpoint dip measured by the timing lens this attempt) + the FIG.24 opening-value hold + the FIG.21 summary hold budgeted through the fade start.
- **D1 render route (D-A9-1):** PIXEL-UNVERIFIED, 9th attempt — browser glyph bounds, swapped-preset measurements at 360/390, handoff distinguishability; all three relevant lens BODY-WRITEs ask for the same captures.

**Deviations (named; full register in `build-record-attempt9.md`):** publish-at-freeze form adopted over the plan's earlier publish point (plan-review finding 4); freeze attempt 1 filed 18/19 on a check-side counting error and re-frozen at the identical source sha (19/19); the stage-5 coupled-fit probe's candidate corrected twice (probe-side; the candidate source untouched); CP1 and CP4 each filed twice over harness/preset defects with checkpoint bytes identical where the candidate was unchanged; an in-stage validator throw found by the stage-2 sweep (null locale) cured by widening the geometry guards; the validator's max-width overflow error retired to the fit surface (stage-4 construction decision); the generative sweep's field set excluded per-figure container fields — the scope limit the reusability lens's escapes landed in.
