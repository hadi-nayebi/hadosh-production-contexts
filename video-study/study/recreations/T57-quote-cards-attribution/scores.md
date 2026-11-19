# T57 — Quote cards with named attribution · scores (attempt 1, Cycle 012 Wave 10)
Bound build: recreation.html sha256 519ed37ea30664630113aba12b53612031c8d9769bc293bd45e07dd092f6e646 (identical for all five lens runs; verified unchanged after the wave).
Feeding: score-blind allowed packet per lens (lens instruction + neutral technique facts + recreation.html + score-blind build record); scores.md never fed; no lens saw another's return. Returns filed verbatim under codex/.
Pre-wave gate: jev-prewave FIRE-WAVE (parameterization 0.92 · purity pre-check 0.98 · own-checks completeness 0.88 · fidelity-plan honesty 0.95) — jev-prewave.md.

| Lens | Score | Return |
|---|---|---|
| motion | 68 | codex/lens-motion.md |
| timing | 58 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 68 | codex/lens-reusability.md |
| readability | 74 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 68 + 58 + 100 + 68 + 74 = 368; average = 368 / 5 = 73.6; minimum = 58.
Bar: average ≥ 85 AND minimum ≥ 70 → 73.6 < 85 ✗ · 58 < 70 ✗.
**VERDICT: FAIL — tier IN PROGRESS** (attempt 1 filed; attempt 2 routes to the practice job).

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. CONVERGENT (motion −24/−18 + timing −18/−10) — THE card lands as a unit in the specimen; the build reveals line-by-line. Firsthand 2 fps evidence: card complete by ~0.5 s with attribution already present; the build finishes lines at 2.00 s and attribution at 2.76 s. Cure: make the unit entrance the default mode (card + all lines + attribution together inside the 500 ms entrance, scale not translateY); keep line staggering as an optional CONFIG variant, not the specimen default. This also re-prices the Plan's prescribed construction: the wave evidence says the RUN §2 line-reveal hypothesis was wrong for this specimen — practice should carry this finding back to the seat.
2. CONVERGENT (motion −3 + timing −8) — first-card lifecycle overruns: specimen card exits with its scene ~8.5 s and a second card lands ~10.0 s; the build holds one card to 14 s. Cure: specimen mode with exit ≈8.5 s and a second CONFIG quote scheduled ≈10.0 s (its attribution stays explicitly unresolved — partially legible in the source); indefinite hold remains an explicit reusable mode only.
3. Reusability (−12, the wave's one true build bug) — quoteSpan() prices uncached quotes at 3 lines, so direct seeks past unvisited quotes can select the wrong card and shift later timings. Cure: pre-wrap every quote and precompute all start times before playback; verify seek-vs-sequential equivalence with mixed-length quotes. (Filed as a cure, not an interim re-fire: all five returns bind to the same final build and the defect does not touch the scored single-quote default path.)
4. Reusability (−6/−5/−4/−3) — durationMs independent of combined quote spans (truncation possible); vertical fit prices quote lines only (glyph/chip/padding excluded) and never re-measures on resize; contrast correction substitutes hidden specimen colors; pageBg set on the stage not the root; entrance distance 14, vertical budget 0.52, shadow remain literals. Cure: derive or validate duration against the sequence, fit the complete card, CONFIG the fallback policy + remaining literals, re-measure on resize.
5. Readability (−12/−5) — attribution at 10.8 px is too small at phone size and the gold occasion (4.46:1) sits under the 4.5:1 small-text line; the chip contrast guard's 2:1 floor treats text as decoration. Cure: attribution ≥13–14 px (widen card or trim padding to fit), occasion contrast floor 4.5:1 verified against the actual card color.
6. Motion (−5) — entrance is fade + 14 px rise; the specimen reads fade/scale. Cure rides with cure 1 (scale entrance, amount priced from finer source sampling).

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser in this seat): all lens verdicts are source-based; fit evidence is font-metric measurement (DejaVu stand-in) + logic harness. Timing sub-beats at 0.5 s sampling: any specimen line stagger <0.5 s is unresolvable — the convergent cure prices the entrance at the resolution the evidence supports. Segment incident (two racing encodes interleaved a corrupt first file) was cured and frame-verified before the wave; the filed segment decodes 420/420 frames.

## Attempt 2 — Plan section (Cycle 009 Wave 8, pre-drafted WHY scaffold)
Anchor re-observation (A-C006-1, 2 fps segment frames viewed firsthand by the item agent): unit landing ≈0.5s CONFIRMED with nuance (mid-fade at 0.5s, complete by 1.0s); first-card exit 8.0–8.5s CONFIRMED; second card ≈10.0s CONTRADICTED — no card at 10.0/10.5/11.0s, entrance begins ≈11.0–11.5s, complete by 12.5s → build binds startAt 11500ms; second-card attribution "unresolved" CONTRADICTED — settled hold frame reads in full: "Range far beyond his public ones." — Semafor on Schumer's private commitments → build binds it resolved. Full plan: runs/2026-11-15-cycle-009-wave-8/plan-T57.md.

WHY scaffold (completed only if attempt 2 does not beat 73.6):
- Cure C1 unit entrance — outcome slot: [effect-verified / lens-observation / attribution]
- Cure C2 specimen lifecycle (exit 8.5s + second card 11.5s) — outcome slot: [ ]
- Cure C3 pre-wrap/precompute + seek equivalence — outcome slot: [ ]
- Cure C4 duration derivation / complete-card fit / fallback policy / literals — outcome slot: [ ]
- Cure C5 attribution size + text contrast floors — outcome slot: [ ]
- Stuck lens: [slot]
- Competing hypotheses (pre-drafted in plan-T57.md): H1 centered isolation vs lower-third surface; H2 lens anchoring on the superseded ~10s claim vs the score-blind packet's re-observed anchors; H3 wider-card proportion offsetting type gains; H4 explicit-startAt specimen mode read as less general than span-derived timing.
- Next attempt does differently / rest rationale: [slot]

## Attempt 2 (practice Cycle 009 Wave 8, 2026-11-15)
Bound build: recreation.html sha256 52ea12eb3e4b188e937f05faf55821488ab8a0bc152ca7ce3e88b128068b87b9 (identical for all five lens runs; verified unchanged after the wave). Attempt 1 preserved as recreation-attempt-1.html (sha 519ed37e…, content copy, verified after the overwrite). Pre-scoring legs filed: fit-table.md (0 HITs) · config-census.md (0 HITs). Own checks: 34/34 PASS (own-checks-T57.js in the run directory). Feeding: allowlist-only payloads preserved at codex/attempt-2/instr-<lens>.txt; returns verbatim at codex/attempt-2/lens-<lens>.md. PIXEL-UNVERIFIED (no browser render route in this seat).

| Lens | Score | Δ vs attempt 1 |
|---|---|---|
| motion | 74 | +6 |
| timing | 80 | +22 |
| purity | 96 | −4 |
| reusability | 72 | +4 |
| readability | 85 | +11 |

Arithmetic: sum = 74 + 80 + 96 + 72 + 85 = 407; average = 407 / 5 = 81.4; minimum = 72.
Delta vs attempt 1 average: 81.4 − 73.6 = **+7.8** (signed, one decimal). The attempt BEATS its predecessor — no WHY owed under the floor rule.
Bar: average ≥ 85 AND minimum ≥ 70 → 81.4 < 85 ✗ · 72 ≥ 70 ✓.
**VERDICT: FAIL — tier IN PROGRESS** (floor cleared for the first time; average still 3.6 short).

Cure outcomes (from the Plan scaffold): C1 unit entrance — effect-verified (own checks) and lens-credited in timing (+22) and motion (+6), with a residual the motion lens priced: card and children both receive the entrance opacity, so content effectively fades as opacity² rather than uniformly — next attempt sets opacity on the parent only. C2 lifecycle — lens-credited (timing's exit/second-card findings now price boundary placement inside the sampled intervals: entrances should be partial AT the sampled instants — first card complete at 1.0s not 0.5s, second card faint at 11.5s and complete at 12.5s — not starting at them). C3 precompute — effect-verified (seek ≡ sequential with mixed lengths); reusability rose only +4 because its remaining findings moved to schedule validation and variant coverage. C4 duration/fit/literals — effect-verified (50/50 consumption, literal census clean); purity −4 because two lenses now price the 16:9 stage ratio, centered anchor, and glyph line-height 0.6 as fixed geometry outside CONFIG (the census classified them structural; the lenses price them as shaping — the disagreement is recorded, next attempt CONFIGs them or defends the classification in the build record). C5 type/contrast — lens-credited (readability +11 to 85; residual: the attribution line-count model caps at 2 lines while the browser wraps freely, and the chip's CSS line-height is unset while the fit model assumes 1.3).
Priced cures for attempt 3: (1) parent-only entrance opacity; (2) entrance/exit intervals constrained to the sampled states (partial at 0.5/11.5, complete at 1.0/12.5); (3) scene-linked exit character (zoom-out) and the second card's lower-left entrance position; (4) stage aspect, card anchor, and glyph line-height into CONFIG; (5) attribution block measured with an explicit line-height and an unbounded wrap count in the fit model; (6) schedule/bounds validation with reported overflow for the reusable modes.

## Attempt 3 — Plan section (Cycle 010 Wave 9, pre-drafted WHY scaffold)
Plan filed at runs/2026-11-15-cycle-010-wave-9/plan-T57.md (cure plan + Execute/Verify checklists + failure-point evaluation + per-lens targets: motion 74→85 · timing 80→90 · purity 96→100 · reuse 72→82 · readability 85→88; priced sum +38 pts vs the +18 needed to beat 81.4). Anchor re-check (A-C006-1) filed in the plan: the binding sampled states are card 1 partial at 0.5s / complete at 1.0s / full at 8.0s / exiting-not-gone at 8.5s / gone by 9.0s and card 2 absent at 11.0s / faint at 11.5s / complete at 12.5s — attempt 1's ≈10.0s second-card anchor and attempt 2's implemented intervals (entrance complete 0.5s, exit gone at 8.5s, card 2 complete 12.0s) both stand CONTRADICTED by the filed segment evidence in build-record-attempt2.md and the attempt-2 timing return. Preservation: recreation-attempt-2.html created in Plan as a CONTENT copy (sha 52ea12eb… = working file = seat baseline entry, distinct inode, verified).

WHY scaffold (completed only if attempt 3 does not beat 81.4):
- Cure C1 parent-only entrance opacity — outcome slot: [effect-verified / lens-observation / attribution]
- Cure C2 intervals constrained to sampled states (0.5/1.0 · 8.0/8.5/9.0 · 11.0/11.5/12.5) — outcome slot: [ ]
- Cure C3 scene-linked zoom-out exit + second card lower-left entrance — outcome slot: [ ]
- Cure C4 stage aspect / card anchor / glyph line-height into CONFIG — outcome slot: [ ]
- Cure C5 attribution measured, explicit chip line-height + unbounded wrap count — outcome slot: [ ]
- Cure C6 schedule/bounds validation with reported overflow — outcome slot: [ ]
- Deferral D1 card-1 anchor stays centered (segment note: bottom-right; no lens priced it in attempt 2) — outcome slot: [priced by a lens? which / deduction]
- Deferral D4 light-panel contrast repair (report-only in C6) — outcome slot: [ ]
- Stuck lens (hypothesis, pre-drafted): REUSABILITY is the most likely stuck lens — it carried the broadest attempt-2 finding surface (schedule order, staggered span, fit overflow, palette repair, coverage) and D4 deliberately caps its cure at report-not-silent rather than repair; MOTION is second — the exit-zoom scale direction is not fixed by the 0.5s segment evidence (plan FP-l), so C3 may earn only partial credit even if scene-linkage is credited. Competing hypotheses: H1 the interval constraints are priced as overfit to the 0.5s sampling grid rather than as sampled-state fidelity; H2 purity does not return to 100 because the new census surfaces further shaping literals the attempt-2 census's blanket structural classification hid; H3 readability stays capped by PIXEL-UNVERIFIED regardless of the C5 model cure; H4 card-1's centered anchor (D1) is priced by motion for the first time, offsetting C3's card-2 gain.
- Evidence jev-plateau will need (assembled at filing, not improvised): (1) all five filed attempt-3 lens returns under codex/attempt-3/ with their verbatim deduction lines per cure; (2) the attempt-3 own-check results for the nine-instant displayed-state table (0/500/1000/8000/8500/9000/11000/11500/12500 ms), the C1 effective-opacity assertion, and both-anchor containment; (3) the C6 diagnostics output on the adversarial configurations (unsorted schedule, overlap, staggered long quote, min-font overflow, contrast failure); (4) fit-table.md + config-census.md on the NEW attempt with HIT counts and the A-C009-4 per-literal classification printout; (5) the A-C006-2 consumption census for the new CONFIG (keys counted, unconsumed list); (6) mechanical-guard-1 delta arithmetic recomputed from the filed returns of attempts 2 and 3; (7) the preservation census (§C.8) result; (8) for each cure slot above, whether the lens that priced the original defect named the cure, ignored it, or priced a residual — cure-by-cure, not a global impression.
- Next attempt does differently / rest rationale: [slot]

## Attempt 3 (practice Cycle 010 Wave 9, 2026-11-15)
Bound build: recreation.html sha256 f8b0735ca57335f6fca2486b8936c3e785ca8dcaf34950c2bedc05b24c8f19e3 (identical for all five lens runs; verified unchanged after the wave). Attempt 2 preserved as recreation-attempt-2.html (sha 52ea12eb…, content copy, distinct inode; preservation census after the overwrite: all prior attempts, all prior Codex returns, prior legs and build records byte-identical to the seat baseline; the comparison's ORIGINAL side block + segment.mp4 byte-identical to their pre-edit snapshots — only the recreation-side label changed). Staged construction checkpoints (create-once, artifact codex/attempt-3/checkpoints/): stage 1 opacity model (effective opacity = progress, not its square) · stage 2 ten-instant sampled-state table · stage 3 exit transform + anchor bounds — interactions tested on the combined construction; lens deltas below are AGGREGATE (bundled), not per-cure attributions. Pre-scoring legs on the NEW source: fit-table-attempt3.md (0 HITs, MODEL-LEVEL — the estimator's token/whitespace/width handling is stated in the table; no fit guarantee is claimed while PIXEL-UNVERIFIED stands) · config-census-attempt3.md (0 HITs, per-literal classification printed there). Own checks: 108/108 PASS (own-checks-T57-attempt3.js + output in the run directory), including the mutation-based consumption census (60/60 keys consumed, 0 unconsumed) and the literal census. Feeding: allowlist-only payloads preserved at codex/attempt-3/instr-<lens>.txt with payload-manifest.md filed before firing (neutral-packet schema: check names/results only; assembled-payload anchor scan CLEAN ×5, source comments included); returns verbatim at codex/attempt-3/lens-<lens>.md. PIXEL-UNVERIFIED (no browser render route in this seat).

| Lens | Score | Δ vs attempt 2 |
|---|---|---|
| motion | 91 | +17 |
| timing | 100 | +20 |
| purity | 97 | +1 |
| reusability | 79 | +7 |
| readability | 83 | −2 |

Arithmetic: sum = 91 + 100 + 97 + 79 + 83 = 450; average = 450 / 5 = 90.0; minimum = 79.
Delta vs attempt 2 average: 90.0 − 81.4 = **+8.6** (signed, one decimal). The attempt BEATS its predecessor — no WHY owed under the floor rule.
Bar: average ≥ 85 AND minimum ≥ 70 → 90.0 ≥ 85 ✓ · 79 ≥ 70 ✓.
**VERDICT: PASS — tier hand-off owed** (the tier move is style-library's act; hand-off note for the seat: file to the style-library board/HQ.json with this scores.md pointer; state SENT-UNRECEIVED until style-library consumes it).

Cure outcomes (from the Plan scaffold slots, COMPLETED; lens deltas are aggregate per the staged-checkpoint rule):
- C1 parent-only entrance opacity — effect-verified (stage-1 checkpoint + own checks: effective opacity equals progress for line, attribution, and glyph) and consistent with the motion return, which credits the unified fade and prices no opacity residual.
- C2 intervals constrained to sampled states — effect-verified (stage-2 checkpoint: all ten instants match the constraints; the exact endpoints are construction values inside the evidence intervals (0.5, 1.0] / (11.5, 12.5]) and are labelled as such in the build record); the timing return found no identifiable timing mismatch (100).
- C3 exit transform + second-card anchor — effect-verified (stage-3 checkpoint: one exit progress drives the scene layer's scale 1→0.92 with the card as its child — a shared scene transform, not a card-only scale; card 2 center at (0.37, 0.66) with transformed-bounds modelled inside the stage across entrance/hold/exit); the motion return credits the shared scene exit.
- C4 aspect / anchor / glyph line-height into CONFIG — effect-verified (consumption census mutation probes for all three, single-sourced across CSS + fit model); purity 96→97, its only remaining deduction being the attribution wrap-model item below, not a CONFIG-coverage item.
- C5 attribution measured, explicit line height + unbounded wrap — effect-verified at model level (wrap simulation 1/2/6 lines across the enumerated states; fit leg 0 HITs); readability priced two residuals (below) and moved −2 in aggregate despite the model cure — the scaffold's H3 hypothesis (readability capped by PIXEL-UNVERIFIED and model-vs-render divergence) is the priced explanation, recorded for Condense.
- C6 schedule/bounds validation with reported overflow — effect-verified (own checks: out-of-order rejected + reported with the timeline unchanged, overlap and early exit flagged, fit overflow reported with amount, contrast failure and non-hex values reported); reusability 72→79, capped by the residuals below (and by deferral D4 as pre-priced).
- Deferral D1 (card-1 anchor stays centered) — outcome: no lens priced card-1 position in attempt 3; the watched risk did not materialize.
- Deferral D4 (light-panel contrast repair report-only) — outcome: priced by reusability ("light-panel swaps can remain unusable, although diagnostics expose that failure") — the pre-priced cap landed as expected.

Residuals priced by the wave (for the record; the item PASSes, so these route to Condense / the style library's notes, not to a floor-rule WHY): (1) CONVERGENT (purity + reusability + readability) — the attribution wrap simulation hard-splits oversized tokens but the rendered spans carry no matching word-breaking rule, so a long unbroken speaker/occasion token can overflow while the model reports fit; (2) readability — the attribution block's line-height computes against its inherited font size, not the attribution size the fit model prices (explicit attribution font size on the block is the named cure); (3) reusability — scheduled staggered cards without an exit derive their end before the staggered reveals complete; playback position (pausedAt) is not advanced by frames, so pause/resume and relayout use the last explicit seek; zero/negative durations and invalid geometry lack guards; the shadow base color remains a constructed black (its alpha is configured; classified per-literal in the census leg).
