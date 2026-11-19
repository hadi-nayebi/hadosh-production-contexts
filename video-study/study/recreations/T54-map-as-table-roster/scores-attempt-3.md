# T54 — Map-as-table roster · scores (attempt 1, Cycle 012 Wave 10)
Bound build: recreation.html sha256 00679517e35c410aab6230d7691860110b33477f69c65ce62410882f9c57e704 (identical for all five lens runs; no post-wave source change — hash re-verified at filing).
Feeding: score-blind allowed packet per lens (lens instruction + neutral technique facts + recreation.html + score-blind build-record.md); scores.md never fed; no lens saw another lens's return. Returns filed verbatim under codex/ (byte-diffed against the raw returns at filing).
Pre-wave gate: jev-prewave FIRE-WAVE (parameterization 0.90 · purity pre-check 1.00 · own-checks completeness 1.00 · fidelity-plan honesty 0.90) — jev-prewave.md.

| Lens | Score | Return |
|---|---|---|
| motion | 73 | codex/lens-motion.md |
| timing | 57 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 76 | codex/lens-reusability.md |
| readability | 55 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 73 + 57 + 100 + 76 + 55 = 361; average = 361 / 5 = 72.2; minimum = 55.
Bar: average ≥ 85 AND minimum ≥ 70 → 72.2 < 85 ✗ · 55 < 70 ✗.
**VERDICT: FAIL — tier IN PROGRESS (attempt 1). Attempt 2 routes to the practice job.**

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. CONVERGENT (motion −16/−6 + timing −12/−5 + readability −4 + reusability −5 — four lenses, one defect): the full-roster arrival is broken as a beat — `cameraAt()` snaps from the East zoom to identity at fullAtMs, and fullAtMs = durationMs (14,000) leaves the completed map zero scheduled hold; the 800 ms holdAfterPlaceMs is spent still zoomed. Cure: author an interpolated return-to-identity transition finishing before the full moment, derive durationMs from full-view arrival + an explicit full-state dwell (a CONFIG hold), and re-derive the swap/compression arithmetic against the new duration rule (an unchanged-cadence 56-chip roster must also fit: completion 14,240 > 14,000 today).
2. CONVERGENT (readability −16 + motion −5): identity access at the completed state — at full view only the latest chip keeps its name plate (54 of 55 names hidden), and much placement happens outside the camera window. Cure: a readable regional sequence or keyed roster pass that exposes every identity without simultaneous plates, and camera coverage coordinated with placement groups so introductions stay visible.
3. Timing (−20, single lens, structural): the recreation's timeline displaces the segment's measured state sequence (Midwest zoom 0–3 s → full map 3–6 s → pan away 6–7 s) with an inferred empty→full lifecycle. Cure: provide a specimen-aligned timeline mode (opening on the regional zoom, full map by ~6 s) and retain the placement lifecycle as a separately identified demonstration — or price the lifecycle form against the packet's 1:30–throughout build-up with evidence from outside the 14 s window.
4. Readability (−12, single lens): disc overlap threatens identity marks — 46 overlapping pairs, minimum centre distance 9.4 units = 36% of the 26-unit diameter; later chips paint over earlier initials/tags. Cure: displaced anchors with connectors or regional layouts preserving every identity mark; per-chip visibility check in the harness.
5. Readability (−6, single lens, a concrete build bug): label plates are clamped to the un-zoomed viewBox, not the camera window — the HI chip's plate runs y 248→261, past the 260-unit stage bottom, into the full-roster plate's space. Cure: position plates against the current camera window, reserve the full-plate's space, add plate/tag intersection checks.
6. Reusability (−8, single lens): presentation literals outside CONFIG (Elect tag geometry/wording, label metrics, pop scale 0.6, easing exponent, font family, stage aspect, full-plate styling, CSS colors bypassing the palette). Cure: move them into CONFIG/style tokens; derive stage geometry from viewBox.
7. Timing (−3) + reusability (−4/−4): compressed-schedule mechanics — popMs 180 overlaps the 110 ms swapped cadence by 70 ms (scale pop against spacing); same-state offsets wrap after 5 chips at one anchor (generate offsets deterministically or validate a per-state capacity); checkpointsOk() is never invoked at render startup and silently tolerates unknown/duplicate state IDs (validate the full config before DOM construction, field-specific errors).
8. Readability (−7, single lens): full-view type is small (initials 9 px, labels 8.5 px, Elect 7 px at 360 px). Cure: phone-readable identity/status sizes accommodated through the regional presentation of cure 2.

## Plateau (Amendment A2)
FIRST-ATTEMPT — no prior average; this attempt sets the baseline practice inherits (72.2, min 55). Expected stuck lens named in Plan: readability — CONFIRMED stuck (55, the minimum; the family precedent T17's readability failure repeats). Unpredicted second stuck lens: timing (57), driven by the full-state beat (cure 1) and the specimen-sequence displacement (cure 3).

## Limitations carried
PIXEL-UNVERIFIED (no exercisable Chrome in this seat): all lens verdicts are source/arithmetic-based; the comparison page is the render surface. Placement lifecycle is a labelled ALLOCATION MODEL (in-window specimen shows zoom + full states; build-up priced from the packet's 1:30–throughout span). Source-record gap: ev/t190.jpg is captioned "full 55-chip map" in the packet but depicts the ballot-arc board — the full-map state is evidenced by ev/t95.jpg and segment frames instead (recorded in build-record §1).


## Attempt 2 — Plan scaffold (Cycle 009 Wave 8, pre-drafted WHY; completed at filing if non-beating)
Plan: runs/2026-11-15-cycle-009-wave-8/plan-T54.md. Anchor re-observation (A-C006-1/A-C008-1): segment frames at 2fps viewed firsthand — Midwest zoom 0–3s (f01) → full map 3–6s (f06/f08) → pan away 6–7s (f14) → ballot board 7–14s (T53 device). Sequence confirmed; no premise conflict.
Cure-by-cure outcome slots (fill at filing: effect-verified / lens-observation / attribution):
- C1 arrival+dwell: effect-verified (own-checks: interpolated arrival at 3000 ms, no-snap sampling, derived duration) · lens-observation: motion credits the continuous return (+); timing/motion both price placement completing at 4400 ms, after the full arrival — the arrival is continuous but the roster it reveals is still assembling.
- C2 identity pass + camera coverage: effect-verified (all 55 labels exposed; every placement inside its camera window; pass framing contains every region) · lens-observation: readability prices the exposure as too brief to read (waves share a 1200 ms step with a 900 ms move — ~150 ms settled per wave); motion prices plate relocation jumps between beats.
- C3 specimen-aligned timeline: effect-verified (zoom 0–3 s, full from 3000 ms) · lens-observation: timing prices two displacements — the pan-away is absent (the pass occupies 6000 ms instead) and the Midwest dwell ends at 2100 ms with the move inside the measured window. H2 (timeline class) CONFIRMED as the binding constraint on timing.
- C4 relaxation + connectors: effect-verified (0 overlapping pairs, min centre distance 28.0, connectors on 35 displaced chips) · lens-observation: readability credits the separation but prices a new occlusion class — plates render inside chip groups, so later chips can overpaint earlier plates/tags; tags protect centres, not full initials bounds.
- C5 camera-window plates: effect-verified (backtracking search; plates inside the window at all sampled holds, reserve respected, pairwise disjoint) · lens-observation: readability prices the fit as estimated geometry (formula width, not measured text) and the full-plate reserve (24 units) as under its rendered bounds (~34 px).
- C6 literals→CONFIG: effect-verified (literal census clean; config-census leg 0 HITs) · lens-observation: reusability still finds policy in logic (layout inset, two-initial limit, full-view threshold, accessibility/error strings) and typography metrics not derived from the configured font.
- C7 pop scaling + generated offsets + pre-DOM validation: effect-verified (pop 72 < 80 spacing; spiral offsets distinct at 6-per-state; field-specific validation errors) · lens-observation: reusability prices three real gaps — passWaves hardcodes wave 0/1 (a 3-wave config silently loses its third group), cross-field validation gaps (cameraMoveMs > passStepMs accepted, empty regions, zero tagGridStep can hang), and no feasibility gate on the final layout.
- C8 type sizes: effect-verified (initials/elect 16, labels 15; fit-table ink ≥11.5 px except one borderline row) · lens-observation: readability credits workable sizes; the binding readability defect is exposure time + occlusion layering, not size. H3 (typography class) RULED OUT as primary; H1 (layout class) PARTIALLY confirmed in its new occlusion form; H4 (interaction) confirmed secondarily (plate search vs camera motion).
Stuck-lens hypothesis (pre-committed): readability (intrinsic 55-chip density); second risk timing (roster pass priced as padding vs demonstration).
Competing hypotheses if non-beating: H1 layout class — relaxation leaves marks occluded at full view · H2 timeline class — pass priced as displacement · H3 typography class — full-view sizes still under phone floor · H4 interaction class — displacement vs pass framing regressed motion.


## Attempt 2 (practice Cycle 009 Wave 8, 2026-11-15)
Bound build: recreation.html sha256 02f31dd34dd13fccd3041233578adfb55dddb95fc674a7cfa7644a9f51a36ed4 (identical for all five lens runs; payloads preserved create-once at codex/attempt-2/instr-<lens>.txt, returns verbatim at codex/attempt-2/lens-<lens>.md; no post-wave source change — hash re-verified at filing). Attempt 1 preserved as recreation-attempt-1.html, sha256 00679517e35c410aab6230d7691860110b33477f69c65ce62410882f9c57e704 (content copy, verified before and after the rebuild).
Feeding: score-blind allowlist packet per lens (lens instruction + neutral technique facts + score-blind build-record-attempt2.md + final source); scores.md never fed; source comments anchor-scanned (no cure codes/labels). Pre-scoring legs (A-C008): fit-table.md — 1 borderline HIT (latest-chip plate ink 10.7 px at full view, carried with disposition) · config-census.md — 0 HITs. Own checks: 56/56 pass (own-checks-T54.js in the run directory).
PIXEL-UNVERIFIED (no exercisable Chrome in this seat): all lens verdicts are source/arithmetic-based.

| Lens | Score | Δ vs attempt 1 | Return |
|---|---|---|---|
| motion | 80 | +7 | codex/attempt-2/lens-motion.md |
| timing | 66 | +9 | codex/attempt-2/lens-timing.md |
| purity | 100 | 0 | codex/attempt-2/lens-purity.md |
| reusability | 70 | −6 | codex/attempt-2/lens-reusability.md |
| readability | 64 | +9 | codex/attempt-2/lens-readability.md |

Arithmetic (shown): sum = 80 + 66 + 100 + 70 + 64 = 380; average = 380 / 5 = 76.0; minimum = 64.
Delta vs prior average: 76.0 − 72.2 = **+3.8** (signed, one decimal).
Bar: average ≥ 85 AND minimum ≥ 70 → 76.0 < 85 ✗ · 64 < 70 ✗.
**VERDICT: FAIL — tier IN PROGRESS (attempt 2). Beating attempt (+3.8), so no WHY is owed under the floor rule; the Plan scaffold's cure-by-cure outcome slots above are completed with effect-verified / lens-observation / attribution for Condense.**

### What the wave priced (for the next attempt)
- Timing (66, stuck lens now): the roster pass displaced the specimen's pan-away and the waves starve reading time (900 ms move inside each 1200 ms step, ~150 ms settled per wave); placement completes at 4400 ms, after the 3000 ms full arrival; cross-field ordering (step vs move) unvalidated.
- Readability (64, min): exposure time per wave, plate/tag occlusion by later chip groups (labels need a foreground layer + full identity-bounds collision checks), formula-width fit vs measured text, full-plate reserve under-measured (~34 px actual vs 24 units reserved), completed overview's thin name access.
- Reusability (70, the one regression −6): passWaves wave index hardcoded 0/1; cross-field validation gaps; no layout-feasibility gate; initials grapheme handling (charAt/slice on supplementary planes); font-metric coupling.
- Motion (80): plate relocation jumps between beats; connector endpoints scale with the pop group; count plate appears at last placement start, before the last pop settles; full arrival precedes roster completion.


## Attempt 3 — Plan section (Cycle 010 Wave 9, pre-drafted WHY scaffold)

Plan: runs/2026-11-15-cycle-010-wave-9/plan-T54.md. Prior average 76.0 (motion 80 · timing 66 · purity 100 · reuse 70 · readability 64); target beat 76.0, aim ≥85 with every lens ≥70. Anchor re-observation (A-C006-1): all quantitative anchors CONFIRMED against source (placement end 4400 ms vs full arrival 3000 ms; passStepMs 1200 / cameraMoveMs 900, ~150 ms settled per wave; fullPlate reserveUnits 24 vs ≥34 px rendered need from sizePx 16 + padY 5×2 + bottomPx 8). One CONFLICT filed: attempt-2 motion return gives the missing pan-away no deduction ("outside this mechanic") while attempt-2 timing prices it −14 — resolved in the plan for the segment evidence (frames: full 3–6 s → pan-away 6–7 s) with the motion risk priced explicitly (plan §1 C-T1, §2 D1), per A-C009-3. Preservation: recreation-attempt-2.html content copy created in Plan, sha256 02f31dd34dd13fccd3041233578adfb55dddb95fc674a7cfa7644a9f51a36ed4 = recreation.html = seat baseline entry. PIXEL-UNVERIFIED stands (D2 in plan).

Cure-by-cure outcome slots (fill at filing: effect-verified / lens-observation / attribution):
- C-X1 derived step + reading dwell [timing+readability convergent]: slot —
- C-X2 placement completes ≤ 3000 ms full arrival [motion+timing convergent]: slot —
- C-X3 measured text for plates/tags/initials [readability+reuse convergent]: slot —
- C-T1 pan-away restored 6000–7000 ms, roster pass re-homed after it [timing −14]: slot —
- C-T2 Midwest dwell budgeted to the ~3000 ms boundary [timing −4]: slot —
- C-T3 cross-field ordering validation (step vs move) [timing −3]: slot —
- C-R1 foreground plate/tag layer + full identity-bounds collision + tag-extent camera fitting [readability −8/−5]: slot —
- C-R2 full-plate reserve derived from measured bounds (24 → ≥34) [readability −5]: slot —
- C-R3 completed-overview name access + longer final hold [readability −4]: slot —
- C-Ru1 passWaves generalized (no hardcoded 0/1) [reuse −8]: slot —
- C-Ru2 cross-field + population validation incl. zero tagGridStep hang guard [reuse −8]: slot —
- C-Ru3 layout-feasibility gate on final layout [reuse −5]: slot —
- C-Ru4 grapheme-safe initials via Intl.Segmenter [reuse −4]: slot —
- C-Ru5 policy/localization literals into CONFIG [reuse −2]: slot —
- C-M1 plate positions held per beat, interpolated between beats [motion −7]: slot —
- C-M2 connectors outside the pop group [motion −3]: slot —
- C-M3 count plate revealed after last pop settles [motion −2]: slot —
- Purity (no cure owed; protection only): slot —

Stuck-lens hypothesis (pre-committed): timing — its two largest deductions (−14 pan-away, −7 wave dwell) require timeline restructuring, and the attempt-2 deferral of the pan-away on motion's no-deduction ruling (A-C009-3 failure) is the named mechanism that kept it stuck; if attempt 3 restructures and timing still does not move, the binding cause is the lifecycle-vs-specimen-sequence dispute itself (plan deferral D3: the labelled allocation model priced as displacement), not any single beat. Second risk: readability — if C-R1's foreground packing forces fitted regional scales down (plan failure point F3), exposure gains (C-X1) are spent on smaller type. Competing hypotheses if non-beating: H1 timeline class — specimen windows rescaled by timeScale instead of pinned (F1) · H2 interaction class — dwell bought by shrinking the final hold (F2) · H3 packing class — measured plates + foreground layer infeasible at regional windows · H4 jurisdiction class — pan-away cured for timing but newly priced by motion as an exit defect.

Evidence jev-plateau will need if the attempt does not beat 76.0 (pre-committed list):
1. The five filed attempt-3 lens returns verbatim (codex/attempt-3/lens-<lens>.md) with shown delta arithmetic vs attempt 2 per lens.
2. The completed cure-by-cure slots above (effect-verified vs lens-observation per cure) — which cures' own-checks passed yet their lens did not move.
3. The attempt-3 build record's per-cure own-check evidence (step arithmetic · pan-away keyframes · placement-end ≤ arrival assertion) for attribution under plan failure point (a).
4. fit-table.md + config-census.md on the NEW attempt (A-C008 legs) with HIT dispositions, incl. fitted (not ceiling) regional scales.
5. The displayed-state assertion results (plan Verify V8/V9): plate/tag vs full identity-bounds collisions, camera-continuity sampling across 5900–7100 ms, within-beat plate displacement.
6. The timeline/ordering assertion results (plan Verify V10): absolute anchors 3000/6000/7000 at default and swapped rosters, dwell per wave as built, final hold as built.
7. Any MID-CYCLE PREMISE AMENDMENT filed in Execute (A-C008-1), or its absence.
8. Preservation census at close: recreation-attempt-2.html sha unchanged after the working file's overwrite.

---

## Attempt 3 (practice Cycle 010 Wave 9, 2026-11-15)
Bound build: recreation.html sha256 1ee27ef80cd62382bfdb561e0446034e416e2191e3dd1664fa0bdb9506e629c2 (identical for all five lens runs; payloads preserved create-once at codex/attempt-3/instr-<lens>.txt, returns verbatim at codex/attempt-3/lens-<lens>.md; payload manifest + assembled-payload anchor scan at codex/attempt-3/payload-manifest.md; no post-wave source change — hash re-verified at filing). Attempt 2 preserved as recreation-attempt-2.html, sha256 02f31dd34dd13fccd3041233578adfb55dddb95fc674a7cfa7644a9f51a36ed4 (re-verified after the working file's first overwrite and at close).
Feeding: score-blind allowlist packet per lens (lens instruction + neutral technique facts + neutral facts packet codex/attempt-3/neutral-packet.md + final source); scores.md never fed; source comments anchor-scanned (no cure codes/labels; no neutralization needed). Pre-scoring legs (A-C008): fit-table-attempt3.md — 3 HITs carried with dispositions (initials ink 8.6 px at full view · plate ink 10.7 px at full view, borderline · tag ink 9.3 px at full view; all three elements measure above floor at regional/wave scales) · config-census-attempt3.md — 0 HITs. Own checks: 50/50 pass (own-checks-T54-attempt3.js in the run directory).
STEP 0 / premise amendment (A-C008-1, filed in build-record-attempt3.md §0 before any build write): 5 fps segment frames show the full map settled at 2.0 s and widening underway at 1.2 s, contradicting the plan's 3000 ms full arrival; the build bound hold-end 1100 + move 900 = arrival 2000, and every dependent assertion was amended together (placement bound, full dwell 2000–6000, count-plate settle). Pan-away anchors 6000–7000 stood (observed underway by 6.4 s).
PIXEL-UNVERIFIED (no exercisable Chrome in this seat): all lens verdicts are source/arithmetic-based.

| Lens | Score | Δ vs attempt 2 | Return |
|---|---|---|---|
| motion | 80 | 0 | codex/attempt-3/lens-motion.md |
| timing | 58 | −8 | codex/attempt-3/lens-timing.md |
| purity | 100 | 0 | codex/attempt-3/lens-purity.md |
| reusability | 70 | 0 | codex/attempt-3/lens-reusability.md |
| readability | 68 | +4 | codex/attempt-3/lens-readability.md |

Arithmetic (shown): sum = 80 + 58 + 100 + 70 + 68 = 376; average = 376 / 5 = 75.2; minimum = 58.
Delta vs prior average: 75.2 − 76.0 = **−0.8** (signed, one decimal).
Bar: average ≥ 85 AND minimum ≥ 70 → 75.2 < 85 ✗ · 58 < 70 ✗.
**VERDICT: FAIL — tier IN PROGRESS (attempt 3). NON-BEATING (−0.8), so the WHY below is owed under the floor rule and is filed in full.**

### Cure-by-cure outcome slots (from the pre-drafted scaffold; attribution BUNDLED throughout per W1/D-A3-1)
- C-X1 derived step + reading dwell: effect-verified (step = move + dwell per wave entry; dwell = formula(name count + longest label), ≥1200 ms floor; continuous settled exposure asserted for default + three-wave fixtures) · lens-observation: timing credits dwell starting after movement and the derived pass; readability prices the exposure as eventual rather than sufficient (−4: four names per 1200 ms wave ≈ 300 ms/name) — the dwell floor is a floor, not a reading budget.
- C-X2 placement completes ≤ arrival: effect-verified (1870 + 30.6 ≤ 2000 on the amended arrival) · lens-observation: timing credits the settle (−0 on that defect) but prices its cost: pop compressed to 30.6 ms (−4 timing, −8 motion as a flash), and motion prices introductions outside the camera window (−12) — completing placement by arrival, at one cadence, moved the defect from "arrival reveals an assembling roster" to "chips enter already placed".
- C-X3 measured text: effect-verified (single glyph-metrics table for plates/tags/initials; font without a matching profile rejected) · lens-observation: reuse credits the configurability but prices the contract as string-matching only (−4: unsupported glyphs silently take the default width; weight/fallback changes unvalidated).
- C-T1 pan-away restored 6000–7000, pass re-homed after it: effect-verified (keys 6000 full / 7000 exit-shifted; continuity sampled incl. 5900–7100; first pass entry at 7000) · lens-observation: timing confirms "the 6–7 s exit matches" — the −14 displacement defect is cured; motion finds no snap. This cure landed and is not the reason timing fell (see WHY).
- C-T2 Midwest dwell to the boundary: effect-verified against the RESOLVED timeline (1100 + 900 = 2000) · lens-observation: timing priced the opening against the packet's coarse 0–3 s / 3–6 s sequence anyway (−12) — the premise-amendment dispute, priced in the WHY.
- C-T3 cross-field ordering validation: effect-verified (derived dwell positivity, placement-overrun and step/move checks reject with field errors) · lens-observation: reuse found the adjacent unguarded field — plateGridStep 0/negative makes candidate generation non-terminating (−9, with several schema fields lacking range checks and errors not stopping layout).
- C-R1 foreground layer + full identity-bounds collision + tag-extent fitting: effect-verified (foreground group after all chip groups; displayed plates disjoint from discs/tags/plates and inside the window at every checkpoint; tag extents inside fitted wave windows; exposure union 55/55) · lens-observation: readability credits the guarded plate geometry; its remaining identity deductions are different defects (tag covering its OWN initials −12; plate-to-chip attribution −7) — the occlusion class attempt 2 priced is cured.
- C-R2 derived full-plate reserve: effect-verified (38 units computed from tokens; no stored reserve literal) · lens-observation: reuse prices the reserve's other half (−4: lineHeightFactor changes the reserve but never sets CSS line-height; CSS px treated as SVG units).
- C-R3 completed-overview access: effect-verified (final index cycles groups of five over a 6600 ms hold; union covers all 55) · lens-observation: readability prices the index as too brief to read (−9: 600 ms per five names ≈ 120 ms/name) and timing prices its derivation gap (−8: the hold is a literal, not derived from group count — a 56-chip roster's twelfth group starts at the duration boundary with no exposure).
- C-Ru1 generalized waves: effect-verified (wave entries derive from the CONFIG wave count for any count; three-wave fixture exposes every member continuously) · lens-observation: no reuse deduction on wave generalization this wave.
- C-Ru2 cross-field + population validation: effect-verified for the named fixtures (empty opening/pass region, zero tagGridStep, non-finite, invalid viewBox, font profile) · lens-observation: reuse's −9 above — the validation net has a hole at plateGridStep and does not early-return before layout on structural errors.
- C-Ru3 feasibility gate: effect-verified (gate computed on the final layout; PASS with 0 failures after the recorded adaptations R1–R5 in the build record) · lens-observation: timing notes feasibility checkpoints can sample beyond the playable duration in the 56-chip case (rides with C-R3's −8).
- C-Ru4 grapheme initials: effect-verified (segmenter-based extraction; supplementary-plane and decomposed fixtures pass; all 55 default initials identical to attempt 2) · lens-observation: reuse prices the remaining internationalization details (−7: the word regex strips combining marks before segmentation; the fallback is code-point-based; casing ignores the configured locale; initialsCount applies only to single-word names).
- C-Ru5 policy/localization literals: effect-verified (inset, initials count, full-view threshold, error prefix, accessibility label, plate policy all CONFIG keys consumed by code; literal census 0 unlisted) · lens-observation: no reuse deduction on literals this wave.
- C-M1 plate stability / hide-relocate-reveal: effect-verified (no plates while the camera moves; recomputation within a beat identical) · lens-observation: motion credits names hiding during travel and revealing in stationary windows; readability prices the relocation's other side (−7 attribution, above).
- C-M2 connectors outside the pop group: effect-verified (connector drawn in the unscaled group; endpoints a pure function of anchor/laid position) · lens-observation: no motion deduction on connectors this wave.
- C-M3 count plate after settle: effect-verified (first up instant = placement end + effective pop; hidden during the pan; up at the final hold) · lens-observation: no deduction on count-plate timing this wave.
- Purity (protection only): effect-verified (0 specimen media / 0 external loads) · lens-observation: 100, no defects found.

### WHY (floor rule — non-beating attempt, −0.8)
**What was tried.** A full timeline restructure on a re-observed frame basis (hold 1100 + move 900 = arrival 2000; pan-away restored at 6000–7000; pass re-homed after it as wave-group beats with formula-derived dwells ≥1200 ms), placement compressed to complete + settle before arrival, a foreground plate/tag layer with full identity-bounds collision checks and a feasibility gate, measured text from one glyph table, generalized waves, broader validation, grapheme initials, and a final full-view identity index.
**What did not move.** The average fell 0.8: readability +4 (68) and purity held at 100; motion (80) and reusability (70) were flat — in both, the attempt-2 defects were cured and new defects of the same lenses, created or exposed by this attempt's own constructions, replaced them at similar prices; timing fell 66 → 58 and is the stuck lens.
**Which lens is stuck, and the hypothesized cause.** Timing. Three of its four deductions were not in the cure inventory: (1) −18 — playback never starts inside the file (initialization renders t=0 with playing=false; all 54,400 ms depend on an external caller invoking the play API) — a real defect no prior return had priced and no cure targeted; (2) −12 — the opening was priced against the packet's coarse 0–3 s / 3–6 s state sequence, while the build followed the fine-grained frame evidence (full map settled at the 2.0 s frame) under a filed A-C008-1 premise amendment: the pre-committed H4/jurisdiction hypothesis is CONFIRMED in a new form — the dispute is no longer which lens owns the pan-away but which evidence granularity owns the opening, and the lens scored to the coarse window the neutral packet's facts also stated; (3) −8 — the final hold is a literal rather than derived from the index group count, so coverage and duration can diverge on a swapped roster. The fourth, −4 (pop compression), is C-X2's own side effect, shared with motion's −8 flash and −12 outside-window introductions: one compressed cadence bought the arrival bound at the price of the introduction beats.
**What the next attempt would do differently.** (1) Settle the opening's evidence basis at Observe, not mid-build: either build to the packet's 3000 ms arrival or carry the frame-granularity dispute into the open as the attempt's named risk with both windows printed — do not let a premise amendment silently choose the basis the scoring lens does not use. (2) Start playback inside the file (autoplay on load, with the comparison surface as a control, not the only starter) and verify the scheduled ending is reached. (3) Schedule placement inside camera holds — regional groups introduce during their region's stationary beats with a perceptible pop (budget cadence and pop together, pops may overlap), so completion-by-arrival stops costing the introductions. (4) Derive the final hold from index group count × per-group reading dwell (dwell per name, not per group), and validate the full schema (plateGridStep included) with an early return before any layout or search runs. (5) Protect the tag owner's own initials in the tag search, and keep displayed plates attributable to their chips (distance-capped placement or a plate-to-chip leader). The technique should NOT rest: three of this attempt's four timing deductions and both of motion's are single-construction cures, and the pan-away/dwell/occlusion cures demonstrably landed — the plateau is in the timeline's evidence basis and the placement schedule, not in the technique.
