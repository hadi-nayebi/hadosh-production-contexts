# T90 — Counterfactual reel · scores (attempt 1, Cycle 014 Wave 12)

Bound build: recreation.html sha256 `657f15b73cb26d34aa79a0516e8b932d81251398e6529b11ca23964e516962a1` (identical for all five final lens runs; the interim wave on sha a06f6fd5… is preserved separately and never enters this average).
Feeding: score-blind allowed packet per lens (lens instruction + neutral technique facts incl. the R1 allocation disclosure + score-blind build record + full recreation.html), payloads preserved at `codex/payload-<lens>.txt`; scores.md never fed. Returns filed verbatim under `codex/`.
Pre-wave gate: jev-prewave → **FIRE-WAVE** on the final build (re-fire 2: parameterization 0.88 · purity pre-check 0.94 · own-checks completeness 0.87 · fidelity-plan honesty 0.95) — returns at `jev-prewave.md` (first firing), `jev-prewave-refire.md`, `jev-prewave-refire2.md` (final build).
Plan gate: codex-plan-review → **REVISE** (verbatim at `codex/codex-plan-review.md`); all seven points disposed in the build (see build-record §2).
A6 legs (final build, pre-wave): `fit-table.md` — 0 HITs · `config-census.md` — 0 HITs.

**T90-R1 (verbatim, binding):** the ALLOCATION label on the icon↔line pairing and beat-3's handle-anchored timing (f373 = seg 13 s, 1 s past the 360–372 window) — **ALLOCATION:** transcript-order icon/line pairing is an implementation allocation; frames establish accumulation order, not semantic pairing. **HANDLE-ANCHORED:** beat 3 completion uses f373, segment 13 s, one second beyond the 360–372 window; it is not an in-window measured completion. No measured-pairing or measured-beat-3 claim is made. (Builder's own 1 s frames refine the completion bracket to seg 9–10 s — the set is already formed at seg 10 s and 12 s — and completion is modeled at the beat's completeMs 10000; the R1 labels stand as charged.)

| Lens | Score | Return |
|---|---|---|
| motion | 92 | codex/lens-motion.md |
| timing | 88 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 76 | codex/lens-reusability.md |
| readability | 86 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 92 + 88 + 100 + 76 + 86 = 442; average = 442 / 5 = 88.4; minimum = 76.
Bar: average ≥ 85 AND minimum ≥ 70 → 88.4 ≥ 85 ✓ · 76 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED** (tier move is the style-library job's act, via the seat's hand-off).

## Interim wave (preserved, excluded from the verdict)
First firing on build sha a06f6fd5…: motion 86 · timing 86 · purity 100 · reusability 66 · readability 78 → average 83.2, min 66 (would FAIL). Returns at `codex/lens-<lens>-interim1.md`, payloads at `codex/payload-<lens>-interim1.txt`. Cures applied before the final firing (build-record.md, "Interim scoring wave + cures"): override surface extended to all CONFIG groups with relationship validation + per-beat frac/dx/dy/completeMs · completion re-priced to completeMs 10000 from the builder's seg-10/12 frames (the timing lens's proposed 13000 was set aside on that stronger firsthand evidence; its "12000 unpriced" point was applied) · branch sampling 40 → 240 steps, t=0 stub eliminated · subject text 16 → 17 px + clear fields behind every line block. Every final lens moved or held: motion 86→92 · timing 86→88 · purity 100→100 · reusability 66→76 · readability 78→86.

## Plateau (A2)
Transition-family average: T22 PASS 88.2. T90 attempt 1 scores **88.4** — above the family average on its first attempt, so no below-family WHY is owed. The Plan's predicted stuck lenses (motion/timing, evidence-thin) scored 92/88; the actual minimum is reusability (76) — the same override-surface class that priced T75's minimum (76). The prediction is recorded as missed in kind: the evidence-thin risk did not bind; the CONFIG-surface risk did, for the second HUD/transition-family item in a row.

## Priced cures for any future refinement (filed for the record; the item passes and leaves the pool)
1. **Reusability (76):** the ?cfg= surface still ignores the remaining geom fields (HUD placement, projection bounds, shelf coordinates, table/figure geometry); merged-config validation is per-group rather than atomic (reducing totalMs can strand inherited beats/introMs/reelEndMs); endHoldMs is accepted but only descriptive (the identity totalMs = reelEndMs + endHoldMs is asserted, not enforced at the surface); isPx ranges are inconsistent with two defaults (branch/shelf widths of 3, lineWidthPx 140). Cure: expose every production-facing geometry field, validate the merged configuration atomically with field-appropriate ranges, derive endHoldMs from the identity, and verify with a changed-stage five-beat specimen.
2. **Timing (88):** landings remain within-bound allocations (door at 4000 vs the 4–5 s bound; tag+box at 7000 vs the 5–9 s appearance bracket) — finer frame sampling (≤0.25 s) around seg 4–5 and 7–9 would tighten both.
3. **Readability (86):** ink ≈11.8 px still carries limited margin at phone size; a rendered-pixel pass (when a browser exists in this seat) should verify the final accumulation and HUD clearance directly.
4. **Motion (92):** the opening camera pullback remains a named deferral; restoring it is a scene-motion refinement, not a mechanic gap.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser in this seat): all lens verdicts are source-based; the comparison page is the render surface. The icon↔line pairing is ALLOCATION (R1, above); beat 3's completion is HANDLE-ANCHORED in the seat's record (R1, above) with the builder's in-window bracket refinement noted. The specimen's narration captions are excluded by fleet law and appear nowhere in the build; the flipped lines appear as wall-projected text beside their icons (named fidelity choice). The catalogue-fidelity observation (digest gloss under-describes the branching-projection device; ev/t382 citation mistimed) stands in RUN.md §2b for style-library/digestion.
