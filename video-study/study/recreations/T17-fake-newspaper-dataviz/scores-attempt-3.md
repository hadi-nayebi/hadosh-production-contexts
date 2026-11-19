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
