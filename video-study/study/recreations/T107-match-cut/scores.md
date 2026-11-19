# T107 — Match cut · scores (attempt 1, Cycle 018 Wave 15 RE-TAKE)

Bound build: recreation.html sha256 **5a874eb3d683f7df6dcf64408a1c5dd03ef747fe5fc255b755be8593b40778ba** (identical for all five lens runs; no post-wave source change).
Feeding: score-blind allowed packet per lens (standing header + neutral technique facts + score-blind build record + fit table + FULL recreation.html); payloads preserved before firing at codex/payload-<lens>.txt; scores.md never fed; no lens saw a prior score or another lens's return; identical SHA-256 in all five payloads.
Pre-wave gates: codex-observe CONFIRMED-WITH-GAPS (gaps closed firsthand, build-record §2) · codex-plan-review REVISE — all points applied as construction requirements (build-record §2) · jev-prewave **HOLD** (0.72 · 0.92 · 0.55 · 0.85, ASSERTED-CHECKS — its two decisive findings were correct and cured in construction, build-record §7) then **FIRE-WAVE on re-fire** (0.95 · 0.92 · 0.90 · 0.93; jev-prewave-refire.md).
A6 legs (final build): fit-table.md — **1 HIT carried** (anchor label approach-state ink height 9.7 px vs ~11 px floor; disposition in fit-table.md — one clause of that disposition is falsified by the readability lens, see cure 3) · config-census.md — **0 HITs** (one census MISS recorded and cured: dead pushFrom key + two unlisted literals, caught by jev-prewave).
Schedule basis: **t=0 allocation** (Amendment A7) — printed in build-record; the lifecycle re-based to build zero, never presented as measured. No lens priced against segment anchoring (the timing lens explicitly declined to), so no lens-miss is recorded this wave.

| Lens | Score | Return |
|---|---|---|
| motion | 85 | codex/lens-motion.md |
| timing | 76 | codex/lens-timing.md |
| purity | 92 | codex/lens-purity.md |
| reusability | 78 | codex/lens-reusability.md |
| readability | 79 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 85 + 76 + 92 + 78 + 79 = 410; average = 410 / 5 = **82.0**; minimum = **76**.
Bar: average ≥ 85 AND minimum ≥ 70 → 82.0 < 85 ✗ · 76 ≥ 70 ✓.
**VERDICT: FAIL — tier IN PROGRESS (attempt 2 routes to the practice job).**
Family comparison (A2): first attempt — no prior T107 average to beat; no plateau WHY owed. Predicted minimum lens (Plan forecast: timing) WAS the minimum (76) — the forecast held.

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. **CONVERGENT (motion 85 + timing 76): push duration.** pushMs 1500 runs 2–3× the measured specimen push (≈0.5–0.75 s); both lenses price the same stretch (motion −8, timing −18). Cure: pushMs → 500–750 ms band with the accelerating ease and peak-at-cut preserved. This is a Plan-level change (RUN §2 bound pushMs 1500 as the default) — practice prices it against the wave RUN before building; the swap semantics (hold-A residual absorbs it, cycle stays 14 000 ms) already support it.
2. **CONVERGENT (motion 85 + timing 76): settle profile.** Mark growth reaches only settleScale 1.6× linearly over 700 ms vs the measured ≈2× over ≈500 ms with a fast start and slowing finish; the linear ramp stops abruptly. Cure: settleScale → ≈2.0, settleMs → ≈500, growth eased (fast start, slow finish), wordmark arrival timed independently of the growth.
3. **Readability (−21): label size + triangle contrast.** (a) The fit-table disposition's claim that a larger label overflows the anchor box is FALSIFIED by the lens's arithmetic: labelSize 18 gives a ≈60.1 px vertical extent inside the 64 px box and raises approach ink height to ≈10.9 px — the builder's disposition was wrong, recorded here as a builder error the lens caught. Cure: labelSize 16 → 18 and re-measure (approach ink ≈10.9 px, still marginally under the floor — pair with (b) or a glyphTop reduction to close it). (b) The blue triangle (#3b4a8f, mark.tri3) measures ≈2.2:1 against the dark fields — one third of the anchor is weak. Cure: brighten tri3 while keeping the shared primitive. (c) Pre-cut competition: accent bars + search strip stay conspicuous into the cut; price dimming them during the push.
4. **Reusability (−22): robustness gaps.** (a) A real logic defect the lens caught: `outlineOpacityAt()` tests its draw interval before its capped off-time, so an extreme pushMs swap (e.g. 4200) lets the outline keep drawing past its off-time and survive toward the push — cure: test the off-time first. (The filed §2 swap range does not reach it; the defect is real regardless.) (b) No validation for zero/negative durations, invalid scales, or fade overlap — cure: CONFIG domain validation with the derived-hold throw extended. (c) Wordmark is stage-centred while the mark follows the anchor — cure: anchor-relative wordmark placement + a bounds/text-fit guard; demonstrate a resized/repositioned anchor and longer text in the next swap record.
5. **Purity (−8): two remaining outside-CONFIG items.** (a) The clip-path triangle vertices `polygon(50% 0, 100% 100%, 0 100%)` — the builder classified them structural (a triangle's defining identity); the lens prices them as subject geometry. Disposition: accepted as a priced cure without conceding a tracing class — bind the vertices as `mark.triPoints` in CONFIG so the question closes mechanically. (b) The `#111` page backdrop shows through at the loop-seam fade — accepted: bind as `palette.backdrop`.
6. **Motion (−2, single lens): outline gesture.** The outline fades in rather than drawing around its target as the specimen's drag-selection does. Cure with cure 4(a)'s reorder: render draw progress as a perimeter draw (or price the fade as the named simplification in the record).

## Limitations carried
**PIXEL-UNVERIFIED** — no browser binary in this seat: all lens verdicts are source-based; fit evidence is font-metric geometry (fit-table.md) + the comparison page as render surface. The lifecycle inside the 14 s cycle is the named **t=0 allocation**; the build proves the catalogue mechanic (accelerating push → cut at peak velocity on a shared anchor → settle), not the segment's exact phase positions.

---

# T107 — Match cut · scores (attempt 2, practice Cycle 016 Wave 15)

Bound build: recreation.html sha256 **102f04208805b908027bd1caa8d709fd33afd33e9495fe77c22d25b1f70dd018** (identical for all five lens runs; snapshotted at `codex/attempt-2/final-source.html`; no post-wave source change).
Feeding: one authoritative allowlist schema (payload-manifest-attempt2.md) — standing header + explicit integer scale line + neutral technique facts carrying the A-C010-3 both-bases dispute print (Basis R: the earlier bound push default of 1500 ms under the t=0 allocation, superseded; Basis E: the segment-evidence basis this build binds) + the frozen recreation.html + score-blind build record + fit-table-attempt2 + neutral own-check packet. scores.md never fed; no lens saw a prior score or another lens's return. Comparability limitation (plan-review finding 2): the packet arrangement differs from attempt 1's (an own-check packet section and the dispute print are added); the instrument — five lenses, same bar — is unchanged, and the delta below is read with that limitation named.
Pre-scoring legs (A-C008): fit-table-attempt2.md — **0 HITs** (attempt 1's carried label HIT cured: approach ink 11.53 px at the closing labelSize 19, extent 59.20/64) · config-census-attempt2.md — **0 HITs** (90/90 CONFIG leaves mutation-verified consumed). Own checks: **196 PASS / 0 FAIL**; six staged checkpoints filed create-once before each next stage (A-C012-4). Attribution: **attempt-level BUNDLED** (plan-review finding 1 — only the final build was scored; checkpoints are construction history, not score attribution).
Preservation: recreation-attempt-1.html stands at the attempt-1 sha (content copy, re-verified after the first overwrite and at close); closing census — 48 immutable baseline files exact, scores.md by the prefix rule below.

| Lens | Score | Δ vs attempt 1 | Return |
|---|---|---|---|
| motion | 93 | +8 | codex/attempt-2/lens-motion.md |
| timing | 92 | +16 | codex/attempt-2/lens-timing.md |
| purity | 87 | −5 | codex/attempt-2/lens-purity.md |
| reusability | 80 | +2 | codex/attempt-2/lens-reusability.md |
| readability | 87 | +8 | codex/attempt-2/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 93 + 92 + 87 + 80 + 87 = 439; average = 439 / 5 = **87.8**; minimum = **80**.
Delta vs attempt 1 (82.0): **+5.8** (signed). Bar: average ≥ 85 AND minimum ≥ 70 → 87.8 ≥ 85 ✓ · 80 ≥ 70 ✓.
**VERDICT: PASS — RECREATED tier recommended (tier move is style-library's act, on this pointer).**
Floor rule: the attempt beats 82.0, so no WHY is owed; the jev-plateau call point is recorded as not-owed on the beating delta. The plan's WHY scaffold is retired unspent for this attempt; its primary hypothesis (hold structure caps timing) survives as a priced cure below — the timing return charged hold proportions −8 at the new 70.5% hold-A share, above the dispute block's −2..−4 adverse price (recorded in build-record-attempt2.md §5).

## Priced cures carried forward (from the attempt-2 returns, convergent first)
1. **CONVERGENT (purity −3 + reusability −5): short-hex break.** Validation accepts three-digit hex colours, but the colour mixer parses only six digits — an accepted palette swap (e.g. "#fc0") breaks the rendered blend. Cure: normalize hex before interpolation or restrict validation to six-digit values. A real defect in the passing build, on the record.
2. **Purity (−8): easing exponents outside CONFIG.** The growth and wordmark easeOutCubic exponent 3 is hardcoded in pose(); bind settleEasePow / wordmarkEasePow.
3. **Reusability (−6, −4): guard completeness.** Combined fit guards (wordmarkGap vs stage bottom, label/glyph extent combinations, page dimensions) and timing-dependency validation (wordmarkMs vs the remaining post-cut interval; a long push silently suppressing the outline) are unguarded.
4. **CONVERGENT (purity −2 + reusability −3): consumption-evidence form.** Two census leaves (searchDimBlend, settleScale) counted as consumed via validation-rejected mutations; replace with valid mutations and observable-output comparisons.
5. **Timing (−8): hold proportions.** Hold-A at 70.5% of cycle; redistribute idle time toward the completed logo state while preserving the push/cut/growth/wordmark timings.
6. **Motion (−7): outline scope (deferral D3, repriced).** The perimeter draw is credited; the remaining deduction is the tile scope vs the specimen's page-wide rectangle + cursor — priced at −7 by the return, above the deferral's −0..−3 estimate.
7. **Readability (−5, −2):** search strip still competes at the cut despite dimming (the 50% blend cap leaves it bright); the label's floor clearance (11.53 px) carries thin tolerance for font-rendering variation.
8. **Scene substitution (deferral D1)** stands as reusability's residual −2, inside its priced −3..−6 band's neighbourhood (return prices it −2 this wave).

## Limitations carried
**PIXEL-UNVERIFIED** — no browser binary in this seat: all lens verdicts are source-based; readability's return prices the missing rendered evidence at −6 and motion's closes on the same limitation. The lifecycle inside the 14 s cycle remains the named **t=0 allocation**; absolute cut placement drew no penalty under that basis (timing return, verbatim basis acceptance). Post-append census: this section was appended to the baseline scores.md bytes without altering them — the baseline sha (d0a7740f…) is the exact prefix of the closing file, verified at close.
