# T16 — Particle Document Flip · BUILD RECORD (attempt 5)

Technique: T16 (packet #1, "Look What I Can Do" @ 1:35–1:40) · Queue #11
Run: practice Cycle 016 Wave 15 (plans carried from Cycle 015 Wave 14 per RUN.md §0 / HQ Charge 2)
Bar: average ≥ 85 AND no lens < 70, five lenses. Prior attempt 4: 82.4 avg (motion 74 · timing 85 · purity 100 · reusability 73 · readability 80).
Governing: plan-T16.md in full + codex-plan-review-T16-return.md (every numbered finding disposed below) + practice INSTRUCTION.md §3/§5.
PIXEL-UNVERIFIED stands (A-C002-2) — no check in this record cites a rendered pixel check.

## Stage 0 — Preservation + thresholds (filed BEFORE any source mutation)

### Preservation census (A-C004-1 · A-C005-1 · A-C010-1b)
- Working source verified BEFORE copying: recreation.html sha256 `b721a6c45440a61a2f79a4a2c16f0bc946a555c96651e1061acfca1a0a8a0aa0`, 57,051 bytes, matching preservation-baseline-carried.txt line 169.
- Complete prior evidence inventory verified against the carried baseline: all 61 T16 rows hash-match, 0 mismatches, 0 missing (build records 1–4, all codex/ returns + payloads attempts 1–4, comparison.html + comparison-preserved-attempt-2.html, preserved copies 1–3, scores.md e5a0b999…).
- Attempt-4 copy: CONTENT copy (`cp`, never hardlink) recreation.html → `recreation-attempt-4.html`, sha256 `b721a6c4…` (same), inode 5147545 vs working file 4298205 (distinct). Attempts 1–3 copies untouched. Create-once: destination did not exist at Execute.
- segment.mp4 (ORIGINAL evidence, not in the carried baseline's T16 rows): sha256 `c4f0c6f8e8b77f6793b47367fcb4e53cfd35c607eb27ae137f897b2d4989426f` — closing hash comparison at §Closing must reproduce it.
- A-C008 legs for attempt 4: ABSENT — attempt 4 predates the legs' practice adoption; printed, not papered over. Attempt-5 legs are filed at attempt-tagged paths below.
- comparison.html sha `75e2584a…` baseline-matching. Expectation: NOT re-pointed (interface unchanged in scope; see §Closing).

### Preserved anchors (binding, not moved)
Checkpoints 1@0 · 6@1500 · 14@2200 ms; flip [0,2600) · release [2600,3100) · form [3100,4600) · hold [4600,5700) · seam [5700,6000); cycle exactly 6000 ms. Early interval 300 ms; rapid interval 87.5 ms; final-page hold 400 ms. Arrival ≤ 36.4 ms (travel 28 + max stagger 8.4).

### Plan-review finding dispositions (codex-plan-review-T16-return.md — every numbered finding)
- **F1 [LANDED]:** registration resolved BEFORE the gate — form (i) adopted. Page registration duration is span-derived per particle: `regDur = clamp(turnEff − (delay + travel), 20, registrationMs)` where turnEff is that page's span-derived turn duration. Rapid pages: turnEff 67.5 ms, arrival ≤ 36.4 ms → regDur ≤ 31.1 ms (worst case exactly 31.1 ms); registration completes with the turn; readable tail = interval − turnEff = 20 ms rapid / 160 ms early / 260 ms final. Title/halo particles keep registrationMs 300 (form phase has room). The plan's stray "C7" reference is C6 (registration/intensity). The plan's C6 table value "rapid 51.1 ms" is SUPERSEDED by this 31.1 ms cap — that value would complete at the interval end and leave 0 ms readable dwell, which is form (ii) and is NOT adopted.
- **F2 [LANDED, in part — guarantee split]:** separate thresholds filed below (turn visibility T-TURN5 · readable duration T-READ-DUR · sampled readable frames T-READ-FRAME). A 20 ms readable window always contains ≥1 sample at 60 fps (16.667 ms step < 20 ms window, any phase offset). At 50 ms steps a 20 ms window can fall between samples — the sampled-frame guarantee at 50 ms steps is EXPLICITLY DEFERRED (D1, re-priced in the build record at close: timing/readability may discount it; the schedule still reserves the 20 ms tail by construction).
- **F3 [LANDED]:** Stage 5 split into 5a (C5 counter fit) and 5b (C6 intensity/registration), each with its own checkpoint. C1 (Stage 1) is tested against a FIXED interim registration policy: flat registrationMs 300 for the turn-visibility measurement only (turn visibility does not depend on registration); the final span-derived registration arrives at Stage 5b. Common diagnostics (schedule anchors, budget, assignment completeness, restart) run before Stage 1 and after every stage. Attribution: BUNDLED for the final combined lens scores unless staged checkpoints isolate an effect — FP-1's "LOW as planned" claim is AMENDED to: mechanism attribution is staged (per-stage subset checks isolate construction effects); LENS attribution stays BUNDLED (no independently scored variants exist).
- **F4 [LANDED]:** continuity thresholds pre-filed below (T-CONT): position jump ≤ 1 px; rendered-velocity step ≤ 50 px/s per axis (finite difference over the 16.667 ms step, wrap-crossing samples excluded and counted); sampled at release instant, through the first 25% blend window, and at blend end; cases: settled release, mid-travel release, release during registration (u ≈ 0.25 / 0.5 / 0.75), turn-active release, seam completion (6000/12000 ms boundary). Matched control: the particle's own pre-release velocity (stream + jitter derivative, jitter derivative ≤ ~8 px/s per axis) — a step beyond 50 px/s cannot be attributed to the stream field.
- **F5 [LANDED]:** validation joint postconditions pre-filed (V5-JOINT): after per-field resets, ALL relationship/budget/formation constraints are re-checked; a still-violating joint group is reset wholesale to DEFAULTS and re-checked; if the whole-configuration fallback still fails (defaults are verified to pass at Stage 0), the combination is REFUSED (reset + warning) rather than run. Assignment completeness applies to ACCEPTED configurations only; refused swaps must prove refusal (warning recorded + budgetFeasible/formationFeasible true after reset).
- **F6 [LANDED]:** counter policy fixed at Stage 0 (see §Counter policy below). Floor, fallback coordinates, label bounds, maximum counts and stack offsets are all named here, not improvised at Stage 5a.
- **F7 [LANDED]:** closing hash comparison filed at §Closing (complete Stage-0 inventory re-hashed; only the intended scores.md append + new attempt-5 files may differ). Prior score tables are never replaced or re-averaged. Each lens return is bound to the frozen source sha in the payload manifest and in this record. Comment neutralization finishes BEFORE the first lens firing; any source change after the freeze requires a separately identified complete wave.
- **F8 [LANDED]:** the lens payload's own-check packet is neutralized like the source: check names/results only, no historical comparisons, no "attempt-4 baseline", no cure identifiers, no improvement claims. Baseline comparisons live only in this build record (seat record). The assembled-payload anchor scan covers the full serialized payload, filenames, labels and check output.
- **F9 [LANDED]:** reduced attempt defined at §Reduced attempt (below). C1's arithmetic is feasible (concurrent model, 67.5 + 20 = 87.5 exactly), so the fallback is a contingency, not the plan. FP-7's fallback text (which retained C1 unchanged) is SUPERSEDED by the reduced attempt below.
- **F10 [LANDED]:** beats-but-fails-bar branch is defined in §Closing (append scores, retain IN PROGRESS, file residual cures, mark WHY unused; a changed residual class is evidence against ONE plateau hypothesis, not proof no plateau exists). Feeding limitation recorded: the plan-review stream omitted the required item-specific jev-observe-exit profile; the seat's RUN.md §1 records jev-observe-exit as seat-judged (ADVANCE-WITH-GAPS) — this build record notes the omission rather than inventing a profile.

### D1 decision (finding 1, form (i) — filed here, before building)
Rapid-page registration completes WITH the turn (regDur ≤ 31.1 ms worst case). Readable dwell per rapid page = 20 ms (uncompressed, turn-complete, registration-complete). The 80 ms reading dwell remains DEFERRED: reaching it needs interval ≥ 147.5 ms (turn-first accounting) — 8 × 147.5 = 1180 ms against the preserved 700 ms rapid span; even with no turn, 80 + 36.4 = 116.4 × 8 = 931 ms > 700 ms. The only routes move the preserved anchors or reduce the rapid page count — outside this job's authority. Attempt-4's measured maximum (66.7 ms, `isSettled` predicate) and attempt-5's re-measurement under `isReadable` are both filed in the ledger (FP-5: the two dwell numbers are NOT comparable as pure movement — the predicate changed).

### Counter policy (finding 6 — fixed at Stage 0)
- Numeral floor: `counterNumMinPx` = 24 (new CONFIG key, default 24). Fitted size = largest size in [24, counterNumPx] at which the worst-case string `pageCount + "/" + pageCount` fits the inline box; box x1 = (1 − counterRightRatio) × W, x0 = page/stack region right edge + counterRegionMarginPx (8), where region right edge = (pageXR + pageWR) × W + stackCount × stackOffsetPx.
- Fallback (floor does not fit inline): counter repositions ABOVE the stack region — top ratio = counterFallbackTopRatio (new CONFIG key, default 0.02), same right anchor; the group box then spans the full width above the page top (page top = pageYR × H). Fallback is a named mode in lastCounterFit (`mode: "inline"` | `"above"`).
- Group bounds include the label: group width = max(label width at counterLabelPx, numeral width at fitted size), group height = counterLabelPx × 1.2 + fitted numeral × 1.05 + 4 px gap. Disjointness is asserted for the GROUP box vs page + stack rect at 360 / 390 / 960 px widths.
- Maximum counts: maxPageCount 64 → worst string "64/64" (5 characters, same length as "14/14") — the fit measurement uses the configured pageCount, so the bound is general.

### Reduced attempt (finding 9 — contingency only)
If Stage 1's checks show the derived-turn construction infeasible against the anchors, the attempt ships C2 + C3 + C4 + C5 + C6 with the attempt-4 chained turn retained (C1 NOT taken), and defers the distinct-turn cure in writing with its cost priced under every lens (motion: chained-turn findings stand, expect no motion gain; timing: budget still excludes turn completion, expect timing flat-to-negative; readability: compressed-at-0.38 dwell finding stands; reusability/purity: unaffected). A return to Plan is required before executing any OTHER construction than C1-as-planned or this reduced set.

### Acceptance thresholds (ALL fixed here, before building)
- **T-SCHED:** derived schedule exact (1@0 · 6@1500 · 14@2200) at defaults; coherent under pageCount 9 / flipMs 1800 swaps; last page before flip end.
- **T-BUDGET:** budget = max(arrival 36.4, turnEff) + minSettledHoldMs 20 ≤ interval for every page change (early 140+20=160 ≤ 300; rapid 67.5+20=87.5 ≤ 87.5; final 140+20=160 ≤ 400). enforceBudget refuses a combination whose derived turn cannot leave the reserved hold.
- **T-TURN5 (per-change visibility, C1):** stepping the actual simulation at 60 fps and at 50 ms steps, 4 phase offsets each: for EVERY rapid page change, ≥1 rendered frame with mean front-page compression ≤ 0.90 at 60 fps, and ≥80% of changes at 50 ms steps. (Attempt-4 thresholds, now per-change instead of chained.)
- **T-READ-DUR (readable duration, C1+C6+D1):** modelled readable dwell per rapid page (interval − turnEff, registration-complete by construction) = 20 ms; early 160 ms; final 260 ms. Filed as a duration, not a frame count.
- **T-READ-FRAME (sampled readable frames):** at 60 fps, ≥1 frame per rapid page in the readable state (isReadable true) at every phase offset. At 50 ms steps: measured fraction reported, NO pass threshold (deferred guarantee, F2).
- **T-SETTLE5 (runtime settlement under isReadable):** actual simulation, 4 offsets × 2 cadences: ≥1 rendered frame with isReadable true per rapid page; PASS = 100% @60 fps at every offset, ≥70% @50 ms steps at every offset. isReadable dwell (per rapid page, both predicates) filed alongside: isSettled dwell AND isReadable dwell, labelled (FP-5).
- **T-CONT (release continuity, C3 + F4):** position jump ≤ 1 px and rendered-velocity step ≤ 50 px/s per axis at release instant, through the first 25% blend window, and at blend end; cases: settled release, mid-travel release, release during registration u ≈ 0.25/0.5/0.75, turn-active release; seam completion: no scatActive particle borrowed across 3 simulated cycles; at 6000/12000 ms boundary, formerly-seam-released particles show no position jump > 1 px and no velocity step > 50 px/s beyond the stream field's variation (wrap-crossing samples excluded, count printed).
- **T-CLEAR5 (regression):** mid-cycle release title-region fraction ≤ 0.15 and bbox overlap ≤ 0.35 at form start; scatter-zeroed control still discriminates (control fails thresholds).
- **T-REG5 (displayed bounds, regression):** settled title + final page inside stage AND fitted box + 6 px at hold instants cycles 1+2, desktop 960×540 AND phone 390×844; zero violations. T-VEL5: velocity continuity across settlement ≤ 3 px/s (retained).
- **T-KEYS (C2):** target keys unique within every page's target set (all kinds); kept-by-identity fraction and churn measured vs attempt-4 baseline (kept 0.884, 13 transitions, unassigned 0) — direction must improve or the record prices why not; unassigned stays 0.
- **T-VAL5 (C4, V5-1…V5-14 + V5-JOINT):** each row's expected outcome asserted (see §C4 table in the plan; V5-9 formation-feasibility-reached case: multiplier-3 resolution computed and filed — feasible multiplier ≈ 1.633 at travel 950, delay 350 retained, formMs + holdMs 2600). Adversarial set (A-C011-2): non-finite sweep over every numeric CONFIG key one at a time (no throw, key reset, warning recorded) · null/absent groups · warning display path (WARNINGS grows on every rejected case; diagnostics.budgetFeasible/formationFeasible true post-enforcement; warnings exposed via T16_API) · single-oversized-token overflow (60-char unbroken word as title and as header at 390 and 360 px → condense-at-floor bounds hold) · resize recompute (390×844 then 360×640 mid-run → targets re-sampled, pool rebuilt, no stale-size particle survives, deterministic restart) · zero/negative durations (flipMs 0, formMs −5 → clamped + refusal path, no hang) · malformed colours (#fff, red, empty → DEFAULTS) · extreme-but-legal values (turnCosMin bounds, easingExponent 40, reserveFraction bounds, non-integer seed) · URL-override adversarials (non-strict numbers rejected; pageCount=999999 strict → V5-13 bound).
- **T-CNT5 (C5):** counter GROUP box disjoint from page + stack rect at 360 / 390 / 960 px; numeral never below 24 px inline (else fallback "above" mode, asserted separately).
- **T-ALPHA5 (C6):** alpha at settlement instant < foreground for every kind; alpha reaches the settled value exactly at registration completion for final page, title and ring; alpha × registration table filed.
- **T-SWAP5:** config-only swaps regenerate (title / pageCount 9 / flipMs 1800 / palette) + V5 adversarial table as swaps through revalidate() and URL overrides; unassigned 0 under every asserted swap; self-start asserted (A-C010-2 — file reaches hold/seam under its own rAF startup, no external caller).
- **T-PURITY5:** grep 0 hits for media/external references; asset inventory = single self-contained HTML; node --check clean.
- **T-CSS5 (A-C012-3):** stylesheet parsed declaration-by-declaration; every declaration parses, property/value sanity for the declarations the displayed-state model prices (counter/label positioning included).
- **T-BASIS5 (A-C012-1):** every unit in the fit/geometry models resolves against the same box the CSS cascade resolves against (counter % against the stage box; unit → basis box → rendered consequence at 360 px printed).
- **T-LIT5 (A-C008-3):** source scanned for numeric/colour literals outside CONFIG against the whitelist below; an unlisted literal fails. Whitelist (named structural constants only; technique-content literals are never structural per A-C009-4): 0/1 (bounds, identities) · 2 (π×2 circle, halving) · 100 (percent conversion) · 255 (colour channel) · 360/… (degrees — none expected) · 0.5 (cosine fade midpoint, mathematical) · Math.PI · 4294967296 (mulberry32 2^32) · 0x6D2B79F5 / 61 / 15 / 14 / 7 (mulberry32 constants) · 1000 (ms/s conversion) · 1e9 (sentinel −1e9 for "never" timestamps) · 6 (wrapMargin re-check +6px title-box expansion in the harness only, not source) — source literals are enumerated in the §Literal census at close; any source literal not on this list fails unless added here with a named structural reason BEFORE the census runs.
- **T-CONSUME5 (A-C006-2):** consumed effect mapping for EVERY CONFIG key in the FINAL source, including new keys formationMinTravelMs, sampleGapMin, sampleGapMax, fitFallbackAscentRatio, fitFallbackDescentRatio, fitIterationCap, wrapJumpInsetPx, maxPageCount, maxStackCount, counterRegionMarginPx, counterNumMinPx, counterFallbackTopRatio. A bound-but-unconsumed key fails.
- **T-SELF5 (A-C010-2):** the file reaches its scheduled ending under its own startup path.
- Purity: grep 0 hits; PIXEL-UNVERIFIED stands.

## Stage 1 — C1 turn chaining (checkpoint 1 to follow)
## Stage 2 — C2 line identity keys (checkpoint 2 to follow)
## Stage 3 — C3 seam + release continuity (checkpoint 3 to follow)
## Stage 4 — C4 validation round 2 (checkpoint 4 to follow)
## Stage 5a — C5 counter fit (checkpoint 5a to follow)
## Stage 5b — C6 intensity + registration (checkpoint 5b to follow)
## Stage 6 — Full regression + legs + freeze (to follow)
## Closing (to follow)

---

## Stage outcomes (all subsets green on the frozen source; full regression re-run after the last construction change)

- **Stage 1 (C1 turn chaining) — 13/13 PASS.** Turn restarts per page change, window opening at the change's scheduled instant; effective turn derived per interval (rapid 67.5 ms, readable tail exactly interval − turnEff = 20 ms; early 140/160; final 140/260); budget prices the turn term (need 160 ≤ 2600) and refuses infeasible swaps; turn visibility 8/8 rapid changes at 60 fps and at 50 ms steps, all 4 phase offsets (smoothstep-trapezoid profile: strong-compression zone ≈57.8 ms > the 50 ms step).
- **Stage 2 (C2 line keys) — 5/5 PASS.** Line keys carry the page line index; keys unique on every page at both sizes; same-harness assignment retention 0.990 (prior build measured 0.826 in the same harness), churn 417, unassigned 0.
- **Stage 3 (C3 seam/release) — 12/12 PASS.** Releases built from the rendered position (jump exactly 0) with the rendered derivative captured and blended out over the first quarter of the window; the release-branch jitter term deleted and its CONFIG key `jitterReleaseDecayMs` retired with it; seam releases span-derived to complete at the 6000 ms boundary; velocity steps ≤1.43 px/s against the pre-filed 50 px/s threshold in settled, mid-registration, turn-active and synthetic mid-travel cases; clearance proxy 0.132 / 0.240 with the scatter-zeroed control (0.268 / 0.954) discriminating.
- **Stage 4 (C4 validation round 2) — 38/38 PASS.** V5-1…V5-14 landed (text/font validation, title-box/header/line/DOM ratio ranges, joint postconditions with recheck + wholesale refusal, checkpoint fraction ordering, count clamps, fit ink bounds with configured fallbacks and iteration cap, hold branch honouring haloDelayMs). V5-9 resolution: haloTravelMultiplier 3 → haloDelayMs clamped 350→0, multiplier reduced to 1.887, haloNeed 2599.3 ≤ 2600, formationFeasible = true. Adversarial sweep found and fixed one real defect (haloCyR carried no range check; non-finite survived) — rangeCheck added; the full non-finite sweep over 101 numeric keys then passes.
- **Stage 5a (C5 counter) — 7/7 PASS.** Counter fitted as a group (numeral floor 24 px; fitted 35 px @360, 39 px @390, 64 px @960); group box disjoint from page+stack rectangles at all three widths; above-page fallback mode verified.
- **Stage 5b (C6 registration/alpha) — 8/8 PASS.** Per-particle span-derived registration (worst case delay+travel+regDur = exactly the 67.5 ms turn end on rapid pages); alpha interpolates travel→settled by registration progress (≤0.38 at the settlement instant; title 1.0, ring 0.95 at hold; turning particles hold travel intensity).
- **Stage 6 (integration) — 12/12 PASS.** Displayed bounds 0 violations (11,040 title + 2,116 final-page at 960×540; 3,276 + 1,608 at 390×844); velocity continuity 29.38 vs 29.38 px/s; two-dimension title fit; schedule swaps coherent; form borrow assigns every title target (2,760/2,760); reserve/seam violations 0 over a full cycle; denser joint demand unassigned 0; restart determinism exact; URL swap regenerates with unassigned 0; self-start reaches the seam unaided.
- **Stage-6 construction cure (recorded deviation-class fix, inside Stage 6 before its checkpoint):** the Stage-3 reuse gate was flag-based (`!p.scatActive`), so at formation start it blocked the just-released page set whose scatter was complete in scheduled time but not yet tick-processed — the title could borrow only ~60 particles and denser/swap settings showed unassigned targets. The gate is now time-aware (eligible iff the release's scheduled end has passed), and page-change releases take the entered page's interval as their span. Stage 3's subset re-ran 12/12 after the cure (its gate unit case — an in-flight release at elapsed 0 — still blocks); the Stage-3 checkpoint remains the valid stage record, and the full regression (Stages 1, 2, 4, 5a, 5b) re-ran green on the cured source before freezing.

**Own-check total: 95/95 PASS** (13 + 5 + 12 + 38 + 7 + 8 + 12), filed in the six checkpoint own-check outputs; the stage-6 own-check file carries the combined final regression.

## Checkpoints filed (create-once, content copies, inode ≠ working file)

1. `checkpoint-attempt5-stage1.html` sha `179846830c32582bcc…` + own-check (13)
2. `checkpoint-attempt5-stage2.html` sha `393784a976588373…` + own-check (5)
3. `checkpoint-attempt5-stage3.html` sha `60c3f1966862be28…` + own-check (12)
4. `checkpoint-attempt5-stage4.html` sha `3443497ef4f15d0b…` + own-check (38)
5. `checkpoint-attempt5-stage5a.html` sha `e9e101998d1e4b4…` + own-check (7)
6. `checkpoint-attempt5-stage5b.html` sha `9afe8efac59b355c…` + own-check (8)
7. `checkpoint-attempt5-stage6.html` sha `f912ebe273604baa…` (= frozen source) + own-check (combined 95)

Checkpoint count: **6 stages / 7 source checkpoints** (Stage 5 split 5a/5b per plan-review finding 3).

## Legs (A-C008, on the frozen source, before firing)

- Measured-fit: `fit-table-attempt5.md` — **0 hits** (all ink heights ≥ floor at 360 px; hierarchy by measured size).
- Config-census: `config-census-attempt5.md` — **0 hits** (118 keys all consumed; 0 unclassified content literals).

## Freeze + wave

- Frozen source: recreation.html sha256 `f912ebe273604baa47c96835f4a50bc3e78fbc5ff0b82ecd2e675820bf9ede0e`, 73,540 bytes. Payload manifest: `payload-manifest-attempt5.md` (allowlist, exclusions, anchor scan — source comments 0 contamination hits; payloads 0 prior-score/attempt-history hits).
- Five-lens wave fired from create-once payloads (`codex/attempt-5/payload-<lens>.txt`), one stream per lens, returns verbatim at `codex/attempt-5/lens-<lens>.md`, all binding to the frozen sha through the embedded source:
  motion **78** · timing **86** · purity **100** · reusability **76** · readability **82** → average **84.4**, minimum **76**, signed delta vs attempt 4 **+2.0**.
- **Verdict: FAIL — beats-but-fails-bar branch** (average 84.4 < 85; no lens < 70). WHY scaffold marked UNUSED in scores.md (the attempt beats the prior average); residual cures + stuck-lens record filed in scores.md. Tier remains IN PROGRESS.

## Plan-review finding dispositions (final)

F1 landed (form (i), span-derived registration — Stage 5b evidence). F2 landed with the sampled-frame guarantee at 50 ms steps explicitly deferred (measured 2–4/8, reported in the wave payloads, not gated). F3 landed (Stage 5 split 5a/5b; lens attribution bundled, mechanism attribution staged). F4 landed (continuity thresholds pre-filed at Stage 0: ≤1 px / ≤50 px/s). F5 landed (validation joint postconditions — Stage 4). F6 landed (counter policy fixed at Stage 0: floor 24, fallback "above" at 0.02, group box incl. label, maxPageCount 64). F7/F8 landed (closing hash comparison below; payload packet neutralised — no historical comparisons or cure ids in any payload). F9 not invoked (the full build proved feasible; the reduced-attempt contingency was unnecessary). F10 landed (beats-but-fails-bar branch executed in scores.md; jev-observe-exit feeding limitation recorded in the run's RUN.md §1).
**Findings set aside: NONE.** F2's 50 ms sampled-frame guarantee is a partial deferral inside a landed finding, recorded here and priced in the payloads.

## Premise amendments

- F1's form (i) supersedes the plan C6 early/final registration table values: the cap is uniformly the effective turn (turnEff), so early pages register over ≤140 ms (not the table's larger values) and the final page over ≤140 ms; the plan's stray "C7" reference read as C6; plan C6's "rapid 51.1 ms" figure superseded by the span-derived cap arithmetic (worst case completes exactly at 67.5 ms).
- V5-13 read as two layers: count clamps land at validation (clamp + warning), and infeasible count/timing combinations are then refused by the budget law with a warning — both layers asserted by the Stage-4 subset.
- The Stage-6 time-aware reuse gate amends the Stage-3 gate's form (flag → scheduled-time) without changing its law (no borrowing of a particle whose release is incomplete in scheduled time).

## Deviations

- Dwell predicates: the attempt-5 harness reports two labelled predicates (isReadable 16.7 ms per rapid page; isSettled 83.3–100 ms); neither is comparable to attempt 4's 66.7 ms figure as pure movement — recorded to prevent a false delta reading.
- `segment.mp4` and `codex/attempt-5/AGENTS.md` appear as new files against the carried baseline: segment.mp4 predates the baseline's row set (its Stage-0 sha `c4f0c6f8…` was verified and is unchanged); the AGENTS.md files were seeded by the standing coverage hook, not by this build.
- Attempt-4's A-C008 leg files are absent (that attempt predates the legs' adoption) — printed at Stage 0, not a defect of this attempt.

## Closing hash comparison (A-C010-1b, against the carried baseline)

61 T16 rows: **59 unchanged**; changed = exactly `recreation.html` (this build) and `scores.md` (the Attempt 5 append). Attempt copies 1–4 byte-identical (attempt-4 copy sha `b721a6c4…` re-verified after the working file's first overwrite and at closing). comparison.html unchanged (sha `75e2584a…`); interface unchanged, so no comparison update was made and its ORIGINAL side is untouched. New files are exactly the attempt-5 set: 6 stage checkpoints ×2, build records (full + blind), legs ×2, payload manifest, codex/attempt-5 payloads ×5 + returns ×5, recreation-attempt-4.html.
