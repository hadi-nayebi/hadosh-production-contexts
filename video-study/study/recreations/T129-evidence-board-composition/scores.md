# scores — T129 evidence-board composition · Cycle 020 Wave 17 build, scored Cycle 021 Wave 18 · attempt 1
Hash binding: recreation.html SHA-256 84491b05e3d38bae5111c61fe3ff43077d5fbe489dc0f55b942194ab1b4dabf6 — identical in all five lens payloads (codex/payload-<lens>.txt) and cited in all five returns.
Schedule basis: `t=0 allocation` (recreation cycle 14 s re-based from the 31.000 s evidence segment, source 400.0 s).
PIXEL-UNVERIFIED: no browser binary in this seat; verification logic-level, comparison.html is the render surface.
Pre-wave: jev-prewave FIRE-WAVE (parameterization 0.90 · purity pre-check 1.00 · own-checks completeness 0.90 · fidelity-plan honesty 0.85) — jev-prewave.md.
A6 legs: fit-table.md HITs 0 (watch: 16 px subject text ink 11.46 px, 0.46 px above floor) · config-census.md HITs 0 (both pre-wave, final build).
Predicted stuck lens (Cycle-021 Plan, family evidence T54 readability 55 · T17 readability 28): readability — actual: 62.

| lens | score | return |
|---|---|---|
| motion | 87 | codex/lens-motion.md |
| timing | 90 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 66 | codex/lens-reusability.md |
| readability | 62 | codex/lens-readability.md |

Arithmetic: 87+90+100+66+62 = 405; 405/5 = 81.0 average. Minimum = 62 (readability).
Verdict vs bar (avg ≥85 AND min ≥70): 81.0 < 85 AND 62 < 70 → **FAIL → IN PROGRESS** (attempt 2 routes to practice).

Priced cures (lenses <85):
- readability 62 — PRIMARY (predicted stuck lens, confirmed): (1) stamp obscures the exhibit label — FAILED sits across the car card's caption area with a transparent background leaving competing text underneath; cure: reserve separate caption and stamp regions. (2) Car caption lacks vertical clearance — 24 px glyph SVG + two 20 px caption lines consume 64 px against the card's 62 px inner height; cure: size the photo card for its actual rendered contents (photoGlyphH + lines × lineHeight + pads as a CONFIG-bound sum) and re-run measured-fit on rendered bounds. (3) Completed-board hold is only 50 ms — note typing ends 13950 ms, cycle resets 14000 ms; cure: extend cycleMs / add a hold key so the accumulated board holds several seconds fully readable (CONVERGENT with the motion lens's cure at 87 — the next attempt's primary cure pair with (1)).
- reusability 66 — cure: (1) exhibits are index-bound in render (only exhibits[0]/[1] animate, portrait/photo behavior by index; added/removed exhibits break or go unanimated) — give exhibits stable IDs and per-exhibit timing/entrance, render/animate the whole array; (2) noteRoute.from is ignored and the target assumes photo-card height — resolve connector endpoints by ID with configurable anchors and actual target dimensions; (3) consolidate duplicate stamp ownership (stamp.text + exhibits[].stamp) into one key, support an absent stamp, validate references before layout (removing all stamp targets currently crashes computeLayout before its checkpoint); (4) wire or remove ineffective keys (geom.chipPadY does not affect map labels; type.exhibitLineHeight does not affect portrait chips; palette.field is covered by the full-stage map rect); (5) verify CONFIG-only variants (reordered/added/removed exhibits, changed endpoints, longer text, palette, geometry, timing) in the next attempt's swap test.

## Attempt 2 — plan scaffold (practice Cycle 017)

_Pre-drafted at Plan (practice Cycle 017 Wave 16, plan-T129.md in the cycle's run directory) so a non-beating attempt's WHY is filed at close, not improvised at close. Prior avg 81.0 (motion 87 · timing 90 · purity 100 · reusability 66 · readability 62) → target 89.6 (motion 90 · timing 90 · purity 100 · reusability 82 · readability 86). This scaffold pre-commits the evidence the filing will need; it does not pre-judge the outcome._

- Cure-by-cure outcome slots (each: landed as planned? / lens movement it was priced to carry / return wording that credits or refuses it):
  - C-HOLD (convergent — readability + motion + timing): outcome —
  - C-STAMP-SEP (readability): outcome —
  - C-CARD-FIT (readability): outcome —
  - R1 exhibits by stable ID, whole-array render (reusability): outcome —
  - R2 connector resolved by ID with configurable anchors (reusability): outcome —
  - R3 single stamp ownership, absent stamp lawful (reusability): outcome —
  - R4 ineffective keys wired or removed (reusability): outcome —
  - R5 CONFIG-only variant executions (reusability, Verify cure): outcome —
- Stuck-lens hypothesis (pre-committed): readability — the family's binding margin (all 16 px subject text ink 11.46 px, 0.46 px above the ~11 px floor; family evidence T54 readability 55 · T17 readability 28) means the three priced defects can be cured and the lens can still hold below target on the type margin (deferred item D3 in the plan, risk priced under every lens). Second candidate: reusability, if the Stage-2 structural refactor lands partially and the lens prices the remainder as the same index-binding class in new form.
- Evidence `jev-plateau` will need (named at Plan, per its dimensions — causal specificity · lens attribution · consequence · evidence citation): the five filed Attempt-2 returns verbatim (the passages that credit or refuse each cure), the staged checkpoint set under A-C010-1a/A-C012-4 (which stage's change moved or failed to move its lens), the pre-scoring leg outputs on the new build (fit-table.md + config-census.md per Amendment A-C008), and the plan's deferral table (D1 newspaper exhibit · D2 note line "HOSPITAL" premise conflict · D3 type enlargement) with whichever priced risk actually fired, if any.
- Plateau vs excuse discriminator (pre-committed): a plateau claim requires a cure that landed as specified (own checks + leg assertions green) AND a return that prices the cured surface and still deducts on a named residual; a cure that did not land as specified is an execution gap, not a plateau, and files as such.
- What the next attempt would do differently (slot, completed at close if owed): —

## Attempt 2 — practice Cycle 018 Wave 17 (executing the Cycle 017 plan)
Hash binding: recreation.html SHA-256 936578a6dd7cff92df7a043dca70dd2191673ad640021d011c2a933e88106553 — identical in all five lens payloads (codex/attempt-2/instr-<lens>.txt) and verified on disk by the timing, purity, motion, and readability returns.
PIXEL-UNVERIFIED: no browser binary in this seat; verification logic-level, comparison.html is the render surface.
Pre-scoring legs (Amendment A-C008): fit-table-attempt-2.md HITs 0 (watch carried: all 16 px subject text ink 11.46 px, 0.46 px above the ~11 px floor) · config-census-attempt-2.md HITs 0 (consumption census 87/87 leaf keys). Own-check suite on the final source: 35/35 PASS. Attribution: BUNDLED (staged checkpoints isolate stage bundles, not individual cures — plan-review finding 2's form).

| lens | score | prior | signed Δ | return |
|---|---|---|---|---|
| motion | 93 | 87 | +6 | codex/attempt-2/lens-motion.md |
| timing | 96 | 90 | +6 | codex/attempt-2/lens-timing.md |
| purity | 100 | 100 | 0 | codex/attempt-2/lens-purity.md |
| reusability | 78 | 66 | +12 | codex/attempt-2/lens-reusability.md |
| readability | 84 | 62 | +22 | codex/attempt-2/lens-readability.md |

Arithmetic: 93+96+100+78+84 = 451; 451/5 = 90.2 average. Minimum = 78 (reusability).
Delta vs prior average: 90.2 − 81.0 = **+9.2** (beating attempt — WHY not owed under the floor rule).
Verdict vs bar (avg ≥85 AND min ≥70): 90.2 ≥ 85 AND 78 ≥ 70 → **PASS → RECREATED** (tier move is style-library's act; hand-off pointer is this section).

Cure-by-cure outcomes (scaffold slots completed; return wording cited, attribution BUNDLED):
- C-HOLD: landed as planned (holdMs 3000; cycleMs 16950 asserted as typing end 13950 + hold). Motion return: "Accumulation and hold are cured… giving the completed board a full 3,000 ms hold." Timing return credits the same arithmetic (96). Readability return credits "3000ms of completed-board reading time."
- C-STAMP-SEP: landed (stamp zone at the top of the photo card; stamp bbox y 112.4–152.6 disjoint from the caption zone at y 155). Readability return: "Prior cures substantially land… a separate 40px caption region. The modeled stamp ends at y≈152.57; caption begins at y=155."
- C-CARD-FIT: landed (photo card height is the asserted CONFIG-bound sum; 89 px at the 2-line wrap; wrapped states enumerated, a longer label grows the card by the same formula). Readability return credits photoCardHeight()/computeLayout() yielding the 89px card. Feasibility (§2.1 conflict 2) resolved by measurement in the build record: photo exhibit moved y 128→110, portrait card 60→54 px with its glyph refit, portrait chip bottom 108 ≤ photo top 110, photo bottom 199 ≤ 203.
- R1 exhibits by stable ID, whole-array render: landed (ids princip/car-photo; per-exhibit enterAtMs/enterKind; render iterates the whole array; progress keyed by id). Reusability rose 66→78 bundled with R2–R4; the return's residual findings (below) do not name index-binding.
- R2 connector resolved by ID with configurable anchors: landed (noteRoute from/to are ids; fromAnchor/toAnchor resolve against the target's actual layout rect). Residual priced by the reusability return: anchors use unrotated card rectangles while wrappers rotate in render.
- R3 single stamp ownership, absent stamp lawful: landed (the stamped exhibit's own stamp string is the only stamp-text source; the global stamp key keeps angle/timing only; a no-stamp board validates and lays out with stamp null; validation runs before layout). Residual priced by the reusability return: optional-element handling is not uniform across the whole config surface (a null note is rejected by validation; unresolved references report through checkpointsOk but construction is not stopped in the page's startup path).
- R4 ineffective keys wired or removed: landed (geom.chipPadY now drives map-chip text offset and portrait-chip padding; type.exhibitLineHeight now drives the portrait chip's line height and height sum as well as the photo caption; palette.field REMOVED — the stage ground renders palette.map). Consumption census 87/87.
- R5 CONFIG-only variant executions: landed (own-check swap variants S1–S10 executed: reordered/added/removed exhibits, no-stamp board, changed endpoints/anchors, longer multi-line label, palette, geometry, timing — each asserting its effect).

Residual findings carried forward (priced by the attempt-2 returns, for the next attempt or the library record):
- reusability 78 — (a) connector anchors unrotated vs rotated display; (b) palette.ink is consumed by contrast checks but colors no rendered content; (c) holdMs is an asserted sum against an independently supplied cycleMs (the plan's chosen form) — changing holdMs alone does not change playback duration; (d) exhibit glyphs are shared by kind, with no per-exhibit glyph override or kind validation; (e) optional-element handling not uniform (see R3).
- readability 84 — stamp line box (26 px) exceeds its 20 px content height inside the border box, and the note's four line boxes (76.8 px) marginally exceed its padded inner height (76 px): neither establishes clipped glyphs at source level, but both weaken the container-fit assurance; rendered clearance remains PIXEL-UNVERIFIED, and the lens again prices perception against source proxies (the A-C011-3 trigger is now met for this item: two consecutive attempts — attempt 3's plan must change the construction family for the priced surface or obtain pixel/render evidence).

## Attempt 2 — CLEAN RE-SCORE (Cycle 018, Codex Condense REGRADE cure)
Why: the run-1 attempt-2 wave's payload header carried the prior average ("whether attempt 2 beats 81.0…") — that wave is contaminated evidence, preserved untouched (codex/attempt-2/lens-*.md, scores 93 · 96 · 100 · 78 · 84, avg 90.2 as filed above). This clean re-score fired score-blind run-2 payloads (codex/attempt-2/instr-<lens>-run2.txt; header names only the consumer, the bar decision, and the working record; anchor scan CLEAN — see codex/attempt-2/payload-manifest.md run-2 section) against the IDENTICAL final source, SHA-256 936578a6dd7cff92df7a043dca70dd2191673ad640021d011c2a933e88106553 (verified on disk before firing). No rebuild.

| lens | clean score | return |
|---|---|---|
| motion | 94 | codex/attempt-2/lens-motion-run3.md (run-2 firing returned 0 bytes, preserved as codex/attempt-2/lens-motion-run2-empty.md; re-fired once as run-3) |
| timing | 98 | codex/attempt-2/lens-timing-run2.md |
| purity | 100 | codex/attempt-2/lens-purity-run2.md |
| reusability | 68 | codex/attempt-2/lens-reusability-run2.md |
| readability | 86 | codex/attempt-2/lens-readability-run2.md |

Arithmetic: 94+98+100+68+86 = 446; 446/5 = 89.2 average. Minimum = 68 (reusability).
Delta vs the prior attempt's average 81.0: 89.2 − 81.0 = **+8.2** (clean average beats the prior attempt's average).
Verdict vs bar (avg ≥85 AND min ≥70): 89.2 ≥ 85 BUT 68 < 70 → **FAIL** (supersedes the contaminated wave's PASS for verdict purposes; the clean reusability lens prices optional-element handling, rotation-blind connector anchors, and a timing-validation gap — a stamped exhibit with enterAtMs 18000 passes checkpoints although the cycle is 16950 ms — lower than the contaminated return did).
WHY: not owed under the clean-re-score rule — the clean average (89.2) beats the prior attempt's average (81.0). The failure here is a minimum-lens failure (reusability 68), not a non-beating average.
