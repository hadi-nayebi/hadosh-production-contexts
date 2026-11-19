# T38 — Headline-card chaptering · scores (attempt 1, Cycle 008 Wave 6)

Bound build: recreation.html sha256 `4fd3304c89a0c817344aedfd3fac09aa29f2b437d03f02c66912ad3a585d7c3a` (all five returns below bind to this identical file).

| Lens | Score | Return |
|---|---|---|
| motion | 78 | codex/lens-motion.md |
| timing | 72 | codex/lens-timing.md |
| purity | 94 | codex/lens-purity.md |
| reusability | 68 | codex/lens-reusability.md |
| readability | 68 | codex/lens-readability.md |

Arithmetic: 78 + 72 + 94 + 68 + 68 = 380 · average = 380 / 5 = 76.0 · minimum = 68.
Bar: average ≥ 85 AND minimum ≥ 70. 76.0 < 85 and 68 < 70 — no rounding applied.
**VERDICT: FAIL · Tier: IN PROGRESS** (attempt filed; re-attempt routes to the practice job).

Interim binding record: the first motion firing (against sha a6338cce…) scored 35 and caught two real defects — hero element never appended to its card, and no standalone autoplay. Both cured, self-verify re-run PASS, all five lenses re-fired against the final sha. Interim return preserved verbatim at codex/lens-motion-interim1.md; its score is NOT in this average.

## Priced cures for the next attempt (practice job)
Convergent defects first (Amendment A1 — named by ≥2 lenses):
1. **Chapter handover (motion 78 + timing 72):** card 1 vanishes instantly at 7000ms and card 2's headline starts at 7150ms — 150ms of empty background, then a full serial re-assembly; no anchor evidence supports this transition. Cure: inspect source frames at a real section boundary, record the actual handover behavior, and model the transition from that evidence (or overlap/crossfade per evidence).
2. **Allocation-model evidence limits (motion + timing):** entrance gestures (26px rise, 0.92→1 hero scale, label stagger) and the identical 3.420s-form / 3.580s-hold schedule for both cards are unverified; card 2's reading load differs from card 1's. Cure: measure source onsets/holds across the full segment; allocate per-card holds from information load.
Single-lens cures:
3. **Reusability 68 — unapplied CONFIG key:** `geom.pieSize` is read as `var(--pieSize)` but never set in the CSS-var loop, so CONFIG cannot size the pie; the §5(c) census claim of 0 unapplied keys was therefore wrong (the census grep matched the var() reference, a false negative — census instrument itself needs a binding check, not a name check). Also: font weights (800/700), gradient endpoint 70%, and formula italic are CSS literals outside CONFIG; pie renderer lacks a one-segment (360°) case and zero-total validation; timing fields must be hand-coordinated when cards move.
4. **Readability 68 — card 2 formula/legend collision:** at 360px the centered formula and right-side legend occupy the same region from y≈55–61px with no separating background. Cure: allocate distinct formula and legend regions and verify rendered bounds. Also: card 1 headline↔chip ink gap is only ≈5.5px under the PIL/DejaVu measurement while the browser font stack differs — reserve an explicit gap or move provenance to its own row.
5. **Timing 72 — segment fidelity:** the 7s split replaces the source segment's second half with a card from elsewhere in the video (disclosed, but it caps tempo fidelity); keep the second card as a separately labeled demonstration or extend the segment to a real second chapter boundary.

---

# Attempt 2 — practice Cycle 006 Wave 5 (2026-11-14)

Bound build: recreation.html sha256 `3530310a61d5a7e24756c1ec47f6a19f48394f38e8c8b8fdd4b9bc4754ba34b2` (all five returns below bind to this identical file; payloads + returns preserved create-once under `codex/attempt-2/`).
Prior attempt preserved as a content copy at `recreation-attempt-1.html` (different inode, sha256 identical to attempt 1's bound build, verified before and after the rebuild).
Plan review: `guards/codex-plan-review.md` fired on the cure plan; return filed verbatim at the wave run directory (`codex-plan-review-T38-return.md`, verdict REVISE BEFORE GATE); its six findings were consumed before building (per-cure own checks; specified overlap contract; full-segment onset measurement explicitly deferred; ordered preservation; explicit allowlist payload manifest + anchor scan; expanded WHY/PASS scaffolds). Consumption is recorded in `build-record-attempt2.md`'s companion plan at `cure-plan-attempt2.md`.

| Lens | Score | Return |
|---|---|---|
| motion | 80 | codex/attempt-2/lens-motion.md |
| timing | 82 | codex/attempt-2/lens-timing.md |
| purity | 90 | codex/attempt-2/lens-purity.md |
| reusability | 72 | codex/attempt-2/lens-reusability.md |
| readability | 62 | codex/attempt-2/lens-readability.md |

Arithmetic: 80 + 82 + 90 + 72 + 62 = 386 · average = 386 / 5 = 77.2 · minimum = 62.
Delta vs attempt 1 average (76.0): **+1.2** (signed). The attempt BEATS its prior average, so no WHY section is owed under the floor rule.
Bar: average ≥ 85 AND minimum ≥ 70. 77.2 < 85 and 62 < 70 — no rounding applied.
**VERDICT: FAIL · Tier: IN PROGRESS** (stays in the practice pool).

## Cure-by-cure outcome (vs the five priced cure groups, RUN.md correction C2)
1. **Chapter handover (was motion+timing convergent):** instant vanish + 150ms blank + serial reassembly replaced by a derived overlap — incoming formation starts 600ms before the boundary while the outgoing card stays fully opaque until its boundary, then fades over 300ms; own-check trace asserts no blank sample and max-opacity ≥0.9 through the fade. Motion 78→80 (+2), timing 72→82 (+10). Remaining defect (motion −10/−6): the overlap superimposes the two headlines in the same position, mixing chapter identities, and the census evidence supports occupied anchors, not this specific overlap behaviour.
2. **Entrances/holds from information load:** checkpoints are now derived from per-card relative offsets; loadUnits 26 (card 1) vs 30 (card 2, demonstration tag included); holds 2980ms vs 4430ms allocated as load-proportional shares of the hold pool (residuals ±460ms, inside the stated ±600ms). Timing credited the allocation as reasonable and internally consistent, not as specimen fidelity. DEFERRED, explicitly: full-segment onset/hold measurement — only the two anchors plus the digest census were available; the timing lens prices this as the cap on tempo fidelity.
3. **CONFIG binding / pie / coordinated timing:** `geom.pieSize` is bound; a binding-based census passes in the own suite; weights (800/700), gradient endpoint and formula italic moved into a bound CONFIG style group; percentage labels are generated from values; a ≥359.99° segment renders a full-ellipse case; zero-total is a validation error; deriveTimeline()/validateConfig() coordinate timing (moving card 1 by +500ms shifts every card-2 checkpoint by exactly +500ms in the swap suite). Reusability 68→72 (+4), purity 94→90 (−4). NEW convergent defect found by BOTH purity (−10) and reusability (High): three bound-but-never-consumed geometry keys — `geom.chipOffsetY`, `geom.legendRight`, `geom.legendTop` — binding is not an effect mapping; the own suite's binding census cannot see consumption. Also priced for the next attempt: formedMs ignores staggered label completion; zero-total segments still emit NaN% labels; totalDurationMs remains a second authority beside the derived total; a stale CONFIG comment describes the superseded hold formula (timing lens).
4. **Formula/legend regions:** formula occupies a 56% zone, legend starts at 60% of stage width; the displayed-state model asserts them disjoint at 360/390px; card 1's provenance moved to its own row below the headline (readability credited both separations as positives). Readability still fell 68→62 (−6) on defects the model did not cover: pie labels 1–2 sit 8.1px apart vertically (≈18px needed) inside the pie's region, and the demonstration tag shares its row with the "1905" chip with unreliable clearance. PIXEL-UNVERIFIED stands (fleet A-C002-2): no rendered verification was performed; the model is a supplement, never a rendered claim — the readability lens prices exactly that evidence ceiling.
5. **Second-card segment semantics:** card 2 carries role "demonstration" and a rendered tag "SYSTEM DEMONSTRATION — SECOND CHAPTER FORM"; the timing model states the second half is a labelled demonstration. Timing credited the labelling as sound; readability prices the tag's placement (same row as the date chip) as a collision risk — next attempt gives the tag its own row.

## Next attempt's priced cures (from this wave's returns)
- Convergent (purity + reusability): consumption-based census — every CONFIG key must change a constructed property when mutated; remove or wire `chipOffsetY` / `legendRight` / `legendTop`.
- Readability: separate pie labels vertically and outside the pie's painted bounds; demonstration tag on its own row; extend the displayed-state model to label–label, label–pie and chip–tag pairs with glyph-extent estimates.
- Reusability: formedMs = latest completion across ALL elements (incl. staggered labels); suppress labels on invalid pie data; derive totalDurationMs from the timeline.
- Motion/timing: coordinate the handover so only one chapter heading is identifiable at a time (e.g. outgoing headline exits before the incoming headline enters, elements non-overlapping); fix the stale hold-formula comment; label entrance gestures as reconstruction choices in the artifact.

---

# Attempt 3 — practice Cycle 007 Wave 6 (2026-11-15)

Bound build: recreation.html sha256 `2f4348b6cb88833e001647ef86ef7b1b0e0d3f150ca77daad116904c9f2c8e74` (all five returns below bind to this identical file; a frozen content copy stands at `recreation-attempt3-frozen.html` with the identical sha, and the working file was re-verified equal to the frozen sha immediately before this filing; payloads + returns preserved create-once under `codex/attempt-3/`).
Prior attempt preserved as a content copy at `recreation-attempt-2.html` (sha256 identical to attempt 2's bound build, verified before the rebuild and again in the preservation census taken immediately after the working file's first overwrite this attempt; `recreation-attempt-1.html` and comparison.html's ORIGINAL side also match their baseline hashes).
Plan review: the wave's plan-review return (verdict REVISE BEFORE GATE, five findings) was consumed in a "Plan-review consumption" section appended to the item plan before building — boundary/loop-seam continuity contract, full pair enumeration through transforms with C2/C3 results filed separately, discriminating formedMs tests, freeze + hash binding, and WHY attribution separation — and the build follows the plan as amended. Build record: `build-record-attempt3.md` (score-blind).

| Lens | Score | Return |
|---|---|---|
| motion | 82 | codex/attempt-3/lens-motion.md |
| timing | 82 | codex/attempt-3/lens-timing.md |
| purity | 98 | codex/attempt-3/lens-purity.md |
| reusability | 86 | codex/attempt-3/lens-reusability.md |
| readability | 86 | codex/attempt-3/lens-readability.md |

Arithmetic: 82 + 82 + 98 + 86 + 86 = 434 · average = 434 / 5 = 86.8 · minimum = 82.
Delta vs attempt 2 average (77.2): **+9.6** (signed). Per-lens deltas vs attempt 2: motion 80→82 (+2) · timing 82→82 (0) · purity 90→98 (+8) · reusability 72→86 (+14) · readability 62→86 (+24).
Bar: average ≥ 85 AND minimum ≥ 70. 86.8 ≥ 85 and 82 ≥ 70 — no rounding applied.
**VERDICT: PASS · Tier hand-off QUEUED** — the tier move IN PROGRESS → RECREATED is the style-library job's act, queued on its HQ.json board (entry `practice-2026-11-15-t38-a3`) with this section as the scores pointer. The attempt BEATS its prior average, so no WHY section is owed under the floor rule.

## Cure-by-cure outcome (functional outcome from own checks; score attribution per the amended scaffold — individual score effects are unisolated in a combined wave unless a return's wording isolates one)
1. **C1 consumption census (purity + reusability):** FUNCTIONAL — implemented: legendTop/legendRight wired into the legend's CSS rule; chipOffsetY removed (key, binding, references); own census 82/82 keys APPLIED or METADATA-with-named-effect, mutation assertions pass. SCORE — relevant lens evidence: purity's return states no unused construction parameter was identified in the supplied source; reusability rose with the census among its priced evidence; individual score effect unisolated.
2. **C2 pie-label separation + off-pie placement (readability):** FUNCTIONAL — implemented: modelled label tops 85.0/113.4/141.8px at 360px (28.4px separations), every label rect separated from the pie's painted bounds (min gaps 2.8/2.8/5.2px), filed separately in the build record. SCORE — relevant lens evidence: readability's return prices the modelled 2.8px clearances as not-yet-displayed-state proof (browser bounds unmeasured) rather than naming a concrete collision in the enumerated pair set; individual score effect unisolated.
3. **C3 demo tag own row (readability):** FUNCTIONAL — implemented: tag on its own row (top 54.6px at 360px, bottom 65.6px) with the hero zone shifted via CONFIG to 72.9px — 7.3px clearance, filed separately. SCORE — relevant lens evidence: the readability return prices the row's line-box height as unverified (browser-default line-height), not a concrete overlap; individual score effect unisolated.
4. **C4 formedMs across all elements (reusability):** FUNCTIONAL — implemented: formedMs = max over all element completions; the discriminating test (five segments, final staggered label completing last at exactly 6090ms in the test configuration) asserts formedMs equals that completion, and the overrun variant fails validation; last card validated against its end deadline. SCORE — relevant lens evidence; individual score effect unisolated.
5. **C5 invalid-data suppression (reusability):** FUNCTIONAL — implemented: fail-closed construction (stage data-invalid, no card content built over errors); labels generated only from valid spans, so zero-total yields no label elements. SCORE — relevant lens evidence; individual score effect unisolated.
6. **C6 derived total (reusability):** FUNCTIONAL — implemented: totalDurationMs removed; the derived total (14000ms from card durations alone) is the sole authority for the clock modulo and the comparison contract. SCORE — relevant lens evidence; individual score effect unisolated.
7. **C7 sequential handover (motion + timing):** FUNCTIONAL — implemented: outgoing fade ends at the boundary, incoming formation starts at the boundary; trace asserts never both headlines >0.10 opacity, monotonic fade with intermediate values, and the loop seam traced separately as a priced chapter-restart cut over a persistent background. SCORE — relevant lens evidence: motion's return prices the fade-through-background handover and the loop restart as the remaining continuity limitation (anchors neither prove nor disprove the transition) while crediting the heading exclusivity and honesty labelling; timing held flat — no C7 timing-regression outcome was priced by either return. Individual score effect unisolated.
8. **C8 stale comment cure (timing):** FUNCTIONAL — implemented: the CONFIG comment now matches the executed hold rule, scopes the census claim to the two anchors, and distinguishes the chosen ±600ms tolerance from measured uncertainty. SCORE — relevant lens evidence: timing's return asks that the uncertainty field/attribute themselves be renamed as allocation tolerance; individual score effect unisolated.
9. **C9 gesture labelling (motion):** FUNCTIONAL — implemented: rise/scale/stagger labelled as reconstruction choices in the header comment and a stage data attribute (which also carries the key's census effect). SCORE — relevant lens evidence: motion's return credits the explicit labelling as strong evidence honesty; individual score effect unisolated.

## Remaining priced gaps (filed for the record; the item passes and leaves the pool — these price any future refinement, not a next practice attempt)
- **Motion/timing:** transition evidence — the handover shape and entrance gestures remain reconstruction choices; the next evidence step is specimen transition frames, after which the handover and gestures are set from observation rather than design.
- **Readability:** rendered browser bounds at 360/390px (the 2.8px label-to-pie clearances and the demonstration row's line-box height rest on the 0.62 glyph model and browser-default line-height); explicit line heights would make vertical separation deterministic. PIXEL-UNVERIFIED stands.
- **Purity:** the full-ellipse branch is selected by span (≥359.99°) rather than sole-positive-segment — a near-full segment in a multi-segment pie would render as a full ellipse instead of its computed wedge; tighten the branch condition.
- **Reusability:** validation gaps priced by the return (including offset-order validation reading relOffsets by insertion order rather than named fields) — compare named timing fields explicitly and close the remaining validation gaps before treating the container as a fully guarded production interface.
- **Timing:** rename the uncertainty field/attribute as allocation tolerance so downstream readers cannot misread the chosen tolerance as measured uncertainty.
