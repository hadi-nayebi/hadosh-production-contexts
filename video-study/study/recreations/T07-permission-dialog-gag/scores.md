# T07 — Permission-dialog gag · SCORES

Technique: T07 (packet P1, "Look What I Can Do" @ 0:35–0:43) · Consumer: openings (hook) · fake-UI family
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 0:34.5–0:43.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 005, Wave 3)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 86 | codex/lens-motion.md |
| Timing / tempo match | 78 | codex/lens-timing.md |
| Construction purity | 96 | codex/lens-purity.md |
| Reusability / parameterization | 68 | codex/lens-reusability.md |
| Readability | 72 | codex/lens-readability.md |

**Arithmetic:** (86 + 78 + 96 + 68 + 72) / 5 = 400 / 5 = **80.0 average** · minimum lens **68**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 5.0 AND reusability (68) breaks the 70 floor. Tier: **IN PROGRESS** (attempt filed; re-attempt routes to the practice job).

### Priced gap (what the next attempt — practice job — must cure)

**CONVERGENT (Amendment A1 — primary cure): the highlight trajectory and its timing architecture.** Motion (86) + timing (78) independently name it: the build produces 0 → [0,1] → [0,1,2] — each modal resets to option 1 and re-descends — rather than the specimen's clean cross-modal step-down 0 → 1 → 2; the reset adds an upward jump that dilutes the escalation. Timing adds: modal dwells run 25% / 33% / 42% against the specimen's roughly equal thirds; escalation comes only from extra traversal, and every final selection effectively holds the same 1.75 s (650 step + 1100 hold), so the third modal's punchline selection gets no distinctive held breath. Cure: initialize each modal at (or step only through evidenced positions toward) its prescribed final selection with no reset; give modal 3 an explicit, distinctly longer final hold; target near-equal modal windows; schedule from absolute elapsed time instead of chained relative timers; align the loop to the segment boundary.

**CONVERGENT (second): fit is BOUNDED, not unconditional — and phone readability is small.** Reusability (68) + readability (72) both name: the 11px/10px font floors can override the measured fit, so with `nowrap` a long swapped line overflows rather than fits; measurement omits the 4px border, option padding, marker box, and the selected row's bold weight. Readability adds: at a 360 px stage the modal is 223 px wide with 11/10 px type — legible but not effortless, with weak title/option hierarchy (1 px). The build's fit claim is therefore bounded to the specimen defaults and the tested swap values. Cure: widen the modal at phone sizes (target ≥14 px options, visibly larger title), measure lines in their actual rendered weight including border/padding/marker, and define an explicit long-text policy (expand to the stage cap, then wrap or reject).

1. **Reusability completeness** (68, the floor-breaking lens): presentation constants still live in logic/CSS (padding, type ratios/floors, 94% cap, scrim, tile colors/geometry, radii); count changes are unproven — missing `finalSelections` entries silently default to the request index, fractional/NaN finals are not normalized, URL validation is partial (malformed suffixes accepted, colors unvalidated, negative/infinite scale passes); pause cancels the timer but play RESTARTS the current modal instead of resuming; no ready/state/completion signal, finite-run mode, or message-source validation for a driving container. Cure: structured CONFIG groups for all presentation constants; normalize/validate config at load; explicit missing-finals policy; resumable pause (preserve position + remaining dwell); ready/state/completion events + finite-run option; demonstrate a count-changing swap (different request AND option counts).
2. **Palette single-source** (purity 96, minor): scrim and tile colors/fallback CSS colors remain hardcoded outside CONFIG. Cure: source them from CONFIG (same cure family as reusability #1's CONFIG completeness).

Own checks before the wave (build-record.md §5): swap test PASS at logic level (new request texts + stepMs 400 + cyan palette; strict sequence 0→[0,1]→[0,1,2] preserved; 360 px fit held for the tested values) · purity grep zero hits · segment ffprobe-verified (960×540, 9.000 s). Pixel render not exercisable from the build seat (no Chrome binary) — the comparison page is the render surface; phone rendering is visually unverified, as the readability return also notes.

## Attempt 2 — plan scaffold (practice Cycle 008)

_Pre-drafted at Plan (practice Cycle 008 Wave 7, plan-T07.md in the run dir) so a non-beating attempt's WHY is filed from this scaffold, not improvised at close. No scores are filed here. Anchor note (A-C006-1): frame-stepping of segment.mp4 this cycle measured the specimen's finals as 0→0→2 (row 2 never selected; modal windows ≈1.70/1.83/2.5 s over a ≈6.0 s modal span) — conflicting with the priced cure's 0→1→2 and the ~8 s cycle assumption; resolved against the segment evidence: attempt 2 binds finals [0, 0, 2], the measured windows, and a cycle equal to the modal span. Full conflict table in plan-T07.md._

Outcome slots per cure (fill at close: LANDED-EFFECT / LANDED-NO-EFFECT / NOT-LANDED + lens evidence):

- C1a trajectory (direct landing, finals [0,0,2]): effect verified (own-check sequence mapping: landed [0,0,2], no non-final selection state) · lens observation: motion return credits direct landing, row sequence green/green/orange, longest rejection hold · attribution: undetermined (joint wave evidence, CA-W1)
- C1b absolute timeline + measured windows + boundary loop: effect verified (timeline arithmetic: cycle 6030, holds [770,830,1130], absolute offsets; catch-up within cycle) · lens observation: timing return credits the measured windows/holds AND names a rollover defect — each new cycle re-anchors origin at the terminal callback, so lateness accumulates across loops · attribution: undetermined
- C1c arrival flash + row-dependent selection colour: effect verified (one flash state, modal 0 only, 120 ms, no selection during it; per-row styles resolved + mutation-proven) · lens observation: motion return notes first-arrival-only flash with no stepping/reset; readability return credits green/orange contrast · attribution: undetermined
- C2 bounded fit + phone readability: effect verified in the source-bound model (floors, gap, wrapped states enumerated, height fits) · lens observation: readability return prices model gaps — marker approximated, option padding omitted from text width, wrap estimated not browser-modelled, rejected text still renders nowrap, fitsHeight ignores the 28% top offset, title cap can override hierarchy on short stages · attribution: undetermined
- C3a CONFIG groups: effect verified (grouped CONFIG; consumption census 79/79 leaf keys mutation-proven) · lens observation: reusability return names technique values still outside CONFIG (marker glyph/numbering format, flash opacity, tile border width/opacity pattern, padding floors/multipliers, expansion factor, font-cap offset, CSS line heights not applied to rendered styles) · attribution: undetermined
- C3b validation/normalization + validation record: effect verified for the tested cases (strict numbers, colour grammar, fractional finals, timing-pair rejection, recorded entries) · lens observation: reusability return names incomplete validation — direct CONFIG string finals become NaN with no selected row, arrivalFlashMs accepts numeric strings (concatenation risk), negative timing clamps silently, several groups unvalidated · attribution: undetermined
- C3c missing-finals policy ("previous", recorded): effect verified ([0,0]→[0,0,0,0] with two recorded defaults) · lens observation: reusability return credits shorter finals inheriting the previous selection · attribution: undetermined
- C3d resumable pause: effect verified (origin-shift arithmetic preserves 200 ms remaining dwell) · lens observation: reusability return credits pause/resume origin shift · attribution: undetermined
- C3e signals + finite-run + message-source validation: effect verified (signals emitted; source+origin+schema validation incl different-sender rejection; runs parses) · lens observation: reusability return prices the contract as partial — cmd-only schema (no namespace/payload schema), complete emitted every cycle (final completion ambiguous), zero/negative/fractional run counts accepted · attribution: undetermined
- C3f count-changing swap (4×4): effect verified (4 requests × 4 options, finals [0,0,2,3], timing extended+recorded, 4th-row style, fit at 360 px) · lens observation: reusability return credits the count-change path · attribution: undetermined
- C4 palette single-source: effect verified (stylesheet carries no palette literals; mutation changes computed styles) · lens observation: purity return names small explicit exceptions — "transparent" literals, fallback subject text and timing fallback constants embedded outside CONFIG · attribution: undetermined

Stuck-lens hypothesis (scaffold, pre-registered; attempt BEAT the prior average so no WHY is owed — see Attempt 2 filing below): timing (window-accounting disagreement — frame-measured ≈6.0 s modal span vs the catalogue window's ~8 s framing) and reuse (container priced beyond the inventory's completeness set; seek deferred in writing). Evidence jev-plateau will need: these slots filled per cure · both attempts' lens returns cited per slot · the plan's anchor measurement table · the attempt-2 build record's per-cure own-check results + CONFIG consumption census · final-source sha binding · recomputed delta arithmetic · a named next discriminating test per stuck lens.

## Attempt 2 — 2026-11-15 (practice Cycle 008, Wave 7)

Final source: `recreation.html` sha256 `6a2146e2979a793b80f4129455663c4dcfc115f59df8200e25b575a6f26abdfc` — all five returns below judge this identical source. Build record: `build-record-attempt2.md`. Own checks: run dir `own-checks-T07.js` — 19 pass, 0 fail; CONFIG consumption census 79/79 leaf keys. PIXEL-UNVERIFIED stands (A-C002-2).

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 95 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 88 | codex/attempt-2/lens-timing.md |
| Construction purity | 92 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 66 | codex/attempt-2/lens-reusability.md |
| Readability | 78 | codex/attempt-2/lens-readability.md |

**Arithmetic (guard 1, recomputed from the filed returns of both attempts):** attempt 2: (95 + 88 + 92 + 66 + 78) / 5 = 419 / 5 = **83.8 average** · minimum lens **66**. Attempt 1 recomputed: 400 / 5 = 80.0. **Signed delta vs prior: +3.8.**
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 1.2 AND reusability (66) breaks the 70 floor. Tier: **IN PROGRESS** (stays in the practice pool).
**WHY owed? NO** — the attempt beats the prior average (83.8 > 80.0), so the floor rule's WHY is not triggered; the plan scaffold above is filed with its outcome slots filled and its stuck-lens hypothesis marked unused. Per-lens movement (joint/bundled evidence, CA-W1 — no per-cure score attribution is claimed): motion 86→95 (+9) · timing 78→88 (+10) · purity 96→92 (−4) · reuse 68→66 (−2) · readability 72→78 (+6).

### Priced gap for the next attempt (from the attempt-2 returns)

1. **Reusability 66 (floor lens):** remaining technique constants outside CONFIG (marker glyph + numbering format, flash opacity, tile border width/opacity pattern, padding floors/multipliers, expansion factor, font-cap offset; CSS line heights not applied to rendered styles); validation incomplete (string finals → NaN with no selected row, arrivalFlashMs string concatenation, silent negative clamps, unvalidated groups, zero/negative/fractional run counts); long-text rejection diagnostic only (rejected content still renders, fitsHeight never enforced); container contract partial (cmd-only schema, completion emitted every cycle).
2. **Readability 78:** fit model approximations (marker box, omitted option padding, estimated wrapping), rejected text renders with nowrap, fitsHeight ignores the 28% top offset, title cap can override hierarchy on short stages; rendered 360 px evidence still outstanding (PIXEL-UNVERIFIED).
3. **Timing 88:** loop rollover re-anchors the origin at each terminal callback — lateness accumulates across cycles; cure named by the return: `origin += cycleMs` with catch-up across missed cycles + a delayed-callback loop test.
4. **Purity 92 (−4):** "transparent" literals and fallback subject-text/timing constants embedded outside CONFIG.
5. **Motion 95:** rendered stillness unverified — request-dependent wrapping could change modal height between requests; bounding-box checks across requests/boundaries named by the return.

Firing-history note: the first assembled payload set was preserved unfired as `codex/attempt-2/instr-<lens>-run1.txt` after the pre-firing anchor inspection found amendment-label references in the build record's limitations section; the build record was neutralized and the final payloads (`instr-<lens>.txt`) re-inspected clean (no scores, targets, or cure commentary) before firing.

## Attempt 3 — WHY scaffold (practice Cycle 022 Wave 21, pre-drafted at Plan, appended before build per Codex plan review finding 4)

_Owed only if attempt 3 fails to beat 83.8 (floor rule); slots pre-registered so a WHY is filed from evidence, not improvised._

Outcome slots (fill: LANDED-EFFECT / LANDED-NO-EFFECT / NOT-LANDED + lens evidence per cure):
- C1 CONFIG completeness + literal single-source: LANDED-EFFECT — effect verified by literal census (transparent ×1 in CONFIG, no hex outside CONFIG) + consumption census 106/106 · lens observation: purity 95 credits code-drawn construction and CONFIG-sourced palette/timing, deducting for presentation defaults still outside CONFIG (non-flash opacity "1", flash-index fallback [0], 960×540 stage fallbacks) · attribution: BUNDLED
- C2 fit exactness + enforcement: LANDED-EFFECT with named exceptions — effect verified by fit leg (9 enumerated states/layout, exact marker box, offset-aware height, hierarchy floor, oversized/resize fixtures) · lens observation: readability 87 credits phone type/hierarchy/marker accounting; reusability 74 + readability both name two enforcement exceptions (renderer consults the first request's rejection result for every modal; post-expansion check drops the oversized-token flag) and the selected-row measurement using titleWeight while the renderer uses the selected weight (defaults both 700) · attribution: BUNDLED
- C3 validation + magnitude sweep: LANDED-EFFECT with a named residual class — effect verified by adversarial set + magnitude sweep (67 numeric fields, finite) · lens observation: reusability 74 found a deeper class the suite did not probe: direct CONFIG edits whose malformed values defeat type-derived field discovery (e.g. a string widthRatio passes), impractical magnitudes (tile count 10^12), a 5-digit hex colour passing the grammar, empty option segments shifting indices · attribution: BUNDLED
- C4 container contract: LANDED-EFFECT — effect verified by envelope acceptance/rejection set + completion traces · lens observation: reusability credits the namespaced envelope, payload schema, source/origin checks, distinct cycle vs final completion, pause dwell preservation; residual: outgoing signals use a wildcard target origin and omit protocol version, pause/resume not host-observable · attribution: BUNDLED
- C5 rollover anchoring: LANDED-EFFECT — effect verified by delayed-callback fixtures (finite + unbounded + stall) · lens observation: timing 98 ran the elapsed functions itself — at 13,000 ms the state resolves to 940 ms into the third cycle with lateness not accumulating · attribution: BUNDLED
- C6 stillness model check: LANDED-EFFECT — effect verified by global-max layout (one modal box for all requests/states) · lens observation: motion 98 credits fixed left/top/width at a fixed stage size and no drift/scale/fade/entrance animation; pixel route still blocked, PIXEL-UNVERIFIED stands · attribution: BUNDLED

Stuck-lens hypothesis (pre-registered): **reusability is the plateau candidate** — 68→66 across attempts 1–2 despite a 79/79 consumption census, i.e. the lens prices a completeness surface (literals + validation + enforcement + contract) that each attempt's census defined more narrowly than the lens does; attempt 3's discriminating test is whether the literal census + magnitude sweep — both completeness probes defined independently of the returns — close that definition gap. Secondary candidate: readability, if pixel evidence is what the lens is actually pricing rather than fit exactness.
Evidence `jev-plateau` will need: these slots filled per cure · both prior attempts' reusability/readability returns cited per slot · the anchor basis · attempt-3 build record's per-cure own-check results + consumption census + literal census + magnitude-sweep output · final-source sha binding · recomputed delta arithmetic · a named next discriminating test per stuck lens.

## Attempt 3 — 2026-11-17 (practice Cycle 022, Wave 21)

Final source: `recreation.html` sha256 `bf55ad56e85ba46b4305e7efa590095dd440e16d8fdafd3f1d515709f2ec3f7d` — all five returns below judge this identical source. Build record: `build-record-attempt3.md`. Own checks: run dir `own-checks-T07-attempt3.js` — 57 pass, 0 fail; CONFIG consumption census 106/106; measured-fit leg `fit-table.md`; config-census leg `config-census.md`. PIXEL-UNVERIFIED stands (A-C002-2).

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 98 | codex/attempt-3/lens-motion.md |
| Timing / tempo match | 98 | codex/attempt-3/lens-timing.md |
| Construction purity | 95 | codex/attempt-3/lens-purity.md |
| Reusability / parameterization | 74 | codex/attempt-3/lens-reusability.md |
| Readability | 87 | codex/attempt-3/lens-readability.md |

**Arithmetic (guard 1, recomputed from the filed returns):** attempt 3: (98 + 98 + 95 + 74 + 87) / 5 = 452 / 5 = **90.4 average** · minimum lens **74**. Attempt 2 recomputed: 419 / 5 = 83.8. **Signed delta vs prior: +6.6.**
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average clears by 5.4 AND every lens clears the 70 floor. Tier hand-off: RECREATED candidate — the style-library board hand-off (this scores.md pointer + source hash + five scores) is the seat's filing at wave close.
**WHY owed? NO** — the attempt beats the prior average (90.4 > 83.8); the pre-drafted scaffold above is filed with its outcome slots filled. Per-lens movement (joint/bundled evidence — no per-cure score attribution is claimed): motion 95→98 (+3) · timing 88→98 (+10) · purity 92→95 (+3) · reuse 66→74 (+8) · readability 78→87 (+9). The pre-registered plateau hypothesis is answered for this attempt: the attempt moved reusability from 66 to 74 and exposed two direct-edit validation failures (see priced gap).

### Priced gap for any future attempt (from the attempt-3 returns)

1. **Reusability 74 (floor lens, cleared):** validation must survive direct CONFIG edits — a field schema independent of the edited values' types, safe-integer/practical-workload bounds (tile count), tighter colour grammar (5-digit hex passed), empty option segments not silently dropped; renderer exceptions: per-request (not first-request) rejection at the rendered weight, oversized-token flag retained after expansion, selected-row measurement at the selected weight; outgoing signals carry the protocol version and a non-wildcard target origin; pause/resume host-observable.
2. **Purity 95:** presentation defaults still outside CONFIG (non-flash opacity literal, flash-index fallback, 960×540 stage fallbacks, duplicated policy/scale defaults in normalization).
3. **Readability 87:** rendered 360 px evidence still outstanding (PIXEL-UNVERIFIED); the two enforcement exceptions under reusability above are also priced here.

Preservation: `recreation-attempt-2.html` (content copy, sha 6a2146e2…f26abdfc) + `comparison-attempt-2.html` preserved and censused post-overwrite, clean; deviations (staging compression + census timing) printed in the run's checkpoint record.
