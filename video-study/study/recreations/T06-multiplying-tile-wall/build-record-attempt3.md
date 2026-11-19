# T06 — Multiplying Tile Wall · BUILD RECORD (Attempt 3)

Artifact dir: `hidden_files/study/recreations/T06-multiplying-tile-wall/` · Plan: `hidden_files/study-jobs/practice/runs/2026-11-18-cycle-026-wave-25/plan-T06.md` (incl. the Addendum — plan-review consumption, landed before building, disposing all 8 findings of `codex-plan-review-T06-return.md`). PIXEL-UNVERIFIED stands over every geometry claim (A-C002-2): all geometry is modelled from the source's own configuration and executed against the real source in a Node harness; no rendered-pixel verification is claimed.

## Construction contract (what changed, by cure)

- **C1 — Phone-size badge treatment.** Both badge labels and the phase-2 numeral and hero names now size through displayed-size floor functions: label sizes are the larger of their proportional size and an 11px floor; the phase-2 numeral floors at 17px; hero names floor at 10px. At stage widths ≤480px the phase-2 badge occupies a reserved band: its label letter-spacing takes the small-width value (0.5px) and wall 2 moves to a small-width top (30%) and height (66%) so the floored badge never overlaps the wall or the heroes. A source-bound geometry model in the recreation prices containment and legibility at any stage width and is exported for checking. The phase-1 numeral is untouched (41.4px @360, no shrink).
- **C2 — Density-gated tile interiors.** Each tile's interior mode is a function of its phase's modelled cell width at the current stage width: below 40px cells render simplified (tag text hidden, motif bar counts scaled ×0.6, motif bar widths cell-relative with a 1px minimum; initials retained); at and above the threshold interiors render full. At 360/390px phase-1 cells (31.2/33.8px) are simplified and phase-2 cells (42.9/46.5px) are full; at desktop widths both phases are full.
- **C3 — Hero size step.** Hero container 44%→50% width, 52%→58% height. Modelled @360/390: hero/cell area ratio 3.63× (target ≥2.0×), height ratio 1.80× (target ≥1.30×); the 56% fallback was not invoked (both ratios and separation pass at 58, and the fallback itself passes both ratios at 360/390 per the plan addendum).
- **C4 — Bounded reusability bundle.** (a) The phase-switch time is documented in the configuration as a derived value: validation normalizes it to the schedule's first phase-2 wave time and records a warning on disagreement (harness-asserted: override → warning + schedule unchanged). (b) Zero entrance duration now holds stagger: at duration 0 each tile appears at its own stagger instant (cohort position × stagger) and each hero at its stagger instant (harness-asserted both). (c) Non-finite values are rejected: validation sweeps every numeric configuration field for finiteness and guards all four duration/stagger fields, warning and falling back (harness-asserted on non-finite overrides: warning + fallback value).

## Parameter boundary

CONFIG (production-facing): all of attempt 2's boundary plus — both badge label px floors · phase-2 numeral px floor · hero name px floor · small-width threshold, phase-2 small-width label tracking, wall-2 small-width top and height · tile interior simplification threshold, tag visibility threshold, dense motif bar width (% of cell) and bar-count scale. The phase-switch time is a DERIVED parameter (normalized to the schedule; see C4a). Construction (not parameters): the per-tile birth-cohort calculation, the fixed-cell layout, the density-mode calculation, the geometry model, the seeded content generator, the clock, and the validation rules themselves.

## Checkpoint ledger (A-C010-1a / A-C012-4)

| Stage | Cure | Checkpoint (content copy) | sha256 (head) | Own-checks |
|---|---|---|---|---|
| 1 | C1 badge floors + reserved band + geometry model | checkpoint-attempt3-stage1.html | d06d29a8df75 | own-checks-attempt3-stage1.txt — PASS |
| 2 | C2 density interiors | checkpoint-attempt3-stage2.html | 555873fd915b | own-checks-attempt3-stage2.txt — PASS |
| 3 | C3 hero step | checkpoint-attempt3-stage3.html | ba6b1ed1d00f | own-checks-attempt3-stage3.txt — PASS |
| 4 | C4 reuse bundle | checkpoint-attempt3-stage4.html (= final source) | dbae736f1d49 | own-checks-attempt3-stage4.txt — PASS |

Each checkpoint is a content copy filed before the next stage began; every own-check file asserts checkpoint inode ≠ working-file inode and the preserved attempt-2 copy's invariant sha. Final source sha256: dbae736f1d496348e251f78ac558478dae49e33d2115ed387f9e58d6b7540080 (27,420 bytes).

## Own verification (final source)

Node harness over the real source (`own-checks-attempt3-final.txt`): **18 PASS, 0 FAIL** — geometry floors F-LABEL/F-NUM1 (≥41.4px)/F-NUM2 (≥17px), F-FIT one-line, F-SEP @360/390, hero ratios @360/390, cleared pre-wave state, counter anchors 1 @500ms and 24 @16500ms, built counts 32/24/4, C4.1 derived-override warning, C4.2 zero-duration stagger (tiles + heroes), C4.3 non-finite override rejection (warning + fallback, two forms). Inline script compiles clean (node --check). Purity grep: ZERO hits (no external assets, no specimen frames; every tile code-drawn). A-C008 legs filed before scoring: `fit-table-attempt3.md` (18 harness assertions PASS) + `config-census-attempt3.md` (84 CONFIG keys, 0 unconsumed; literal census whitelisted). Effect mappings asserted per CONFIG key family (A-C002-1): stage width → displayed badge sizes and interior modes; density → interior mode per tile; hero keys → modelled ratios; derived-key override → warning + unchanged schedule; zero entrance duration → staggered appearance instants.

## Cure-by-cure outcome slots (WHY scaffold restated — plan-review finding 5)

Filled from the filed attempt-3 returns at close (this filing). Scaffold source: scores.md "Attempt 3 — Plan WHY scaffold (Cycle 026)" (C1–C4 slots, held-lens slots, H-GEOMETRIC falsifiable hypothesis, jev-plateau evidence list). PASS hand-off: on PASS the tier consequence is RECREATED, the tier move being the style-library job's act on the filing's evidence.

- C1 outcome: readability 82 — the return prices the phase-1 numeral at 41.4px @360 and the floored 11px label fitting one line in its zone, and the phase-2 badge at 17–17.94px over an 11px label with 6.5–9.9px clearance in the reserved band; floors met in fit-table-attempt3.md. Attribution BUNDLED across stages 1–4 (no stage-isolated lens firing).
- C2 outcome: readability return prices maximum density as distinguishable (fixed gutters, distinct gradients/motifs, phase-1 tags hidden at 360px); it notes phase-2 tags remain at 3.42px as texture — the density threshold leaves phase-2 cells (42.9px) in full mode, as priced at Plan. Interior-mode mapping asserted in the harness/fit table.
- C3 outcome: readability return prices heroes at ~3.63× area and ~1.80× height of a meeting cell with head-and-body silhouettes and higher stacking — hierarchy cured; it notes hero 2px borders extend beyond the modelled boxes (a next-build item: box-sizing on hero borders).
- C4 outcome: reusability 79 (+2) — the return records the schedule-derived phase switch as accepted and carries forward the D4/D5 residuals (remaining visual literals, warning-backed validation of override indices / integer seeds / timing relationships), exactly the priced ceiling of the bounded bundle.
- Held lenses: motion 86 (0 — the return's residual is the D3 transparent first cohort at the phase switch and heroes transparent at the 24 checkpoint, both deferred in writing at Plan) · timing 88 (−6 — entrances trail the counter at wave onsets; the return asks for opacity assertions at the measured checkpoints in a future build; anchors exact) · purity 100 (0).

## Deviations printed

1. **wall2HeightPctSmall added** beyond the plan's named C1 key list (priced in the plan addendum before building): the reserved band's top move (30%) requires a small-width wall height (66%) or the wall overflows the stage bottom; a containment necessity of C1, not a new cure.
2. **F-NUM2 target reconciled** per plan-review finding 2: the floor function yields 17.00px @360 / 17.94px @390; the target stands at ≥17px @360 (the plan's earlier ≥18px target text is superseded by the addendum).
3. Comparison page NOT re-pointed: the interface it consumes (play/pause/restart/setTime/state queries) is unchanged in kind — RECREATION gains one additive query (geometryAt) and no consumed signature changed; own checks pass on the existing page. Its ORIGINAL side is untouched.
4. No other deviations. Source comments are neutral throughout (no cure codes or score commentary in the recreation source).
