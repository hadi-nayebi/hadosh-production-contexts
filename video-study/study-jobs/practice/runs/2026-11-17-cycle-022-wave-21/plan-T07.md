# PLAN — T07 permission-dialog gag · Attempt 3 · practice Cycle 022 Wave 21

_PLAN PHASE ONLY — no build in this file's act. Governing: practice INSTRUCTION.md §2/§5; recreation bar; bounded probes (≤6000 chars/return). Seat manifest: this run's RUN.md §1 (pick 4 of 4; 83.8 tie with T17 broken by staleness, T07 last attempted 2026-11-15)._

## Prior vector + delta target

- Attempt 1 (2026-11-14): motion 86 · timing 78 · purity 96 · reusability 68 · readability 72 → **80.0 avg**, min 68. FAIL.
- Attempt 2 (2026-11-15, Cycle 008 Wave 7; source sha256 `6a2146e2…f26abdfc`, all five returns judge that identical source): motion 95 · timing 88 · purity 92 · reusability 66 · readability 78 → **83.8 avg**, min 66 (reusability). Signed delta +3.8; per-lens: motion +9 · timing +10 · purity −4 · reusability −2 · readability +6.
- Bar (five lenses, same instrument — delta is pure movement): **avg ≥85 AND no lens <70**. Attempt 3 must gain ≥+6 lens-points net AND lift reusability ≥+4; a plan aiming only at those minima has no headroom against the purity −4 / reusability −2 regression pattern of attempt 2.
- **Delta target (aim, never fed to any lens — A-C005-2): sum ≥444 → avg ≥88.8.**

| Lens | Prior | Target | Δ | Named cures carrying it |
|---|---|---|---|---|
| Motion | 95 | ≥93 (hold, −2 tolerance) | −2..0 | C2 (wrap-driven height change removed as a stillness risk), C6 verification only |
| Timing | 88 | ≥92 | +4 | C5 rollover anchoring |
| Purity | 92 | ≥95 | +3 | C1 (transparent + fallback text/timing into CONFIG) |
| Reusability | 66 | ≥80 | +14 | C1 + C3 + C4 (centre of gravity; floor lens) |
| Readability | 78 | ≥84 | +6 | C2 (exact fit, enforced rejection, offset-aware height) |
| **Avg** | **83.8** | **≥88.8** | **+5.0** | |

## Read list (firsthand, this session)

1. Artifact `scores.md` in full — both attempts, attempt-2 priced gap (5 items), attempt-2 outcome slots per cure (all "effect verified" in own checks, lens observations diverging — the plan's central lesson: own-check effect ≠ lens credit where the probe surface is incomplete).
2. All attempt-2 Codex returns under `codex/attempt-2/` in full: motion 95, timing 88, purity 92, reusability 66, readability 78 (quoted findings drive §Cures below).
3. `build-record-attempt2.md` — construction facts: grouped CONFIG (79/79 consumption census), finals [0,0,2], windows/landDelays/holds, absolute event table with within-cycle catch-up, pause origin-shift, expand-wrap/reject policy diagnostic-only, signals + cmd-only schema.
4. Packet evidence as referenced in scores/build record: P1 "Look What I Can Do" @0:35–0:43, specimen `segment.mp4` (960×540, 9.000 s, sha in attempt-2 record); cited frame ev/t41.jpg (third modal, row 3 orange).
5. INSTRUCTION.md §2/§5 amendments: A-C006-1, A-C006-2, A-C008-3, A-C010-1, A-C005-2 (+A-C008-4 comment scan), A-C021-1, A-C021-2, A-C021-3; plus A-C004-1/A-C005-1 preservation and A-C002-2 PIXEL-UNVERIFIED as they bind Execute/Verify.

## Anchor re-observation (A-C006-1) — binding, no new conflict

Attempt 2 already resolved the priced-cure conflict against segment evidence, and attempt 3 **inherits the resolved basis, not the attempt-1 narrative**: finals **[0,0,2]** (not 0→1→2), modal windows **1700/1830/2500 ms**, land delays **930/1000/1370 ms**, derived holds **770/830/1130 ms**, cycle **6030 ms**, segment-time origin as in the attempt-2 build record (spot re-derivation at n75/n165/n195 consistent within ±100 ms). Execute binds these unchanged; any new frame measurement that conflicts must file the conflict + resolution in scores.md before binding — a priced cure is evidence, not specification. No quantitative anchor in the attempt-2 returns conflicts with this basis (timing return credits the measured windows verbatim).

## Cure plan — convergent first (A1 order)

### C1 · CONVERGENT (reusability 66 + purity 92) — CONFIG completeness, single source
Move every remaining technique value into grouped CONFIG: marker glyph + numbering format; flash opacity 0.92; tile border width + opacity pattern; padding floors/multipliers; expansion factor 1.2; font-cap offset 14; `"transparent"` literals (option backgrounds, marker colours); fallback subject text (`"Allow?"`/`"Yes"`/`"No"`) and fallback timing constants (1000/930/1700/120). Apply CONFIG typography to rendered styles: CSS-fixed title weight and line heights become CONFIG-driven rendered values (attempt 2: changing CONFIG line heights changed fit maths but not rendering — a bound-not-consumed defect, A-C006-2). Carries: reusability target, purity target.

### C2 · CONVERGENT (reusability 66 + readability 78) — fit model exactness + enforcement
(a) Measure the real row: marker box at its rendered width (not approximated), option-row horizontal padding subtracted from available text width, bold weight as now. (b) Replace `ceil(textWidth/innerWidth)` wrap estimate with a model that enumerates every reachable wrap state per text element (A-C006-3): 1-line, 2-line wrapped, per request × selected/unselected. (c) **Enforce, don't diagnose:** rejected long text does not render `nowrap` — under `expand-wrap` it wraps within the cap or is withheld/replaced per the CONFIG policy with a validation-record entry; under `reject` it does not render overflowing. (d) `fitsHeight` becomes offset-aware (modal height vs stage height minus the 28% top offset) and is enforced — a failing height blocks the state, recorded. (e) Title cap may not invert the title/option hierarchy on short stages: hierarchy floor asserted in the model. Carries: readability target; removes motion's wrap→height-change stillness risk.

### C3 · Reusability — validation completeness + magnitude sweep (A-C021-3)
Validate **every** CONFIG field and cross-field constraint, all outcomes recorded in the validation record (no silent clamps): direct string finals (`"bad"` → recorded rejection/default, never NaN-with-no-selected-row); `arrivalFlashMs` strictly numeric-parsed (no string concatenation), constrained < landDelay and < window; negative timing recorded-and-rejected/clamped-with-record, never silent; layout/type/tiles/palette/fallback-selection groups validated (today unvalidated); `container.runs` must be a positive integer (zero/negative/fractional rejected with record — zero must not execute a cycle). **Magnitude sweep:** a 400-nines-class extreme value probed against **every** numeric field (not only return-named fields), asserting no field resolves to Infinity/NaN and the timeline stays finite (A-C021-3; T23 attempt-7's `dwellMs`→Infinity is the founding failure).

### C4 · Reusability — container contract completion
Namespaced message schema with payload schema per command (not `cmd`-only); message-source + origin allowlist retained from attempt 2. Completion semantics disambiguated: a per-cycle signal distinct from a single **final** completion emitted only when `container.runs` is exhausted (unbounded runs emit no final completion). Finite-run enforcement lands with C3's runs validation.

### C5 · Timing — drift-safe rollover
`origin += cycleMs` at rollover (never `origin = performance.now()` at the terminal callback); catch-up across missed cycles (apply all passed boundaries in order, skip-rendering stale cycles per the event-table rule); first-arrival flash stays inside its 120 ms / land-delay envelope. Measured arrays unchanged (§Anchor). Carries: timing target.

### C6 · Motion — stillness, verification-only (no construction change claimed)
No new motion construction. The Verify leg (below) asserts modal bounding-box invariance across all three requests and every selection boundary in the displayed-state model; any variance found routes back to C2's wrap states, not to a new cure. Priced honestly: if the pixel route stays blocked, this remains model-level evidence and PIXEL-UNVERIFIED prints (A-C002-2).

## Deferrals — priced per lens (A-C009-3 discipline: every lens that can see the deferred beat)

| Deferral | Motion | Timing | Purity | Reusability | Readability |
|---|---|---|---|---|---|
| D1 Rendered/pixel 360 px proof, if Chrome route still blocked (A-C002-2) | −risk: stillness stays model-proven only; return already capped confidence at 95 for this — hold target assumes no new deduction | none (arithmetic/scheduler tests unaffected) | none | none | **principal risk**: attempt-2 return asks for rendered evidence by name; target +6 assumes fit-model exactness + enforcement earns partial credit without it; if Execute finds a working render route, D1 is cancelled, not deferred |
| D2 No new specimen beats / no content change (finals, texts, escalation untouched) | none — faithfulness preserved | none | none | none — reuse is a CONFIG/contract property, not content breadth | none |
| D3 No additional container commands beyond namespaced schema + existing play/pause/restart set | none | none | none | −risk small: a lens could price command breadth; priced acceptable — the priced defect was schema/completion ambiguity, not breadth | none |

No other attempt-2 finding is deferred: every priced gap item 1–5 in scores.md maps to C1–C6.

## Preservation + staging (A-C004-1, A-C005-1, A-C010-1) — Execute obligations priced here

- Before any mutation: machine-written sha256 baseline (A-C003-2 form) of the complete prior evidence set — `recreation.html` (attempt-2 source), `recreation-attempt-1.html`, both build records, `scores.md`, `comparison.html` + `segment.mp4`, all `codex/` returns + payloads. Preservation copy `recreation-attempt-2.html` is a **content copy, create-once**; census re-verifies preserved copies **after** the working file's first overwrite; checkpoint copies assert inode ≠ working-file inode.
- Staged checkpoints (A-C010-1a): after each cure stage (C1, C2, C3+C4, C5) preserve a create-once checkpoint (source copy + that stage's own-check output). Attribution prints **BUNDLED** unless checkpoints isolate an effect.
- Payload manifest (A-C010-1c) filed before any lens firing.

## Execute checklist

- [ ] Preservation baseline + `recreation-attempt-2.html` content copy landed and censused pre-mutation; post-first-overwrite re-census scheduled.
- [ ] C1: all named constants + transparent + fallbacks in CONFIG; CONFIG line heights/weight applied to rendered styles; stylesheet carries no palette/technique literals outside the whitelist.
- [ ] Checkpoint 1 (C1) + stage own-checks filed.
- [ ] C2: exact row measurement; wrap-state enumeration; rejection enforced (no `nowrap` overflow render); offset-aware `fitsHeight` enforced; hierarchy floor asserted.
- [ ] Checkpoint 2 (C2) + stage own-checks filed.
- [ ] C3: full-field + cross-field validation with recorded outcomes; runs-count semantics; magnitude sweep wired into the suite.
- [ ] C4: namespaced schema + payload schemas; final-vs-cycle completion split.
- [ ] Checkpoint 3 (C3+C4) + stage own-checks filed.
- [ ] C5: `origin += cycleMs` rollover + cross-cycle catch-up; measured timing arrays byte-identical to the bound anchors.
- [ ] Checkpoint 4 (C5) + stage own-checks filed.
- [ ] Source comments neutral (no cure codes / amendment labels / target scores — A-C008-4); comparison page re-pointed only after own checks pass; build record for attempt 3 filed score-blind, final source sha256 recorded.

## Verify checklist

**Fit leg**
- [ ] Displayed-state model enumerates every reachable wrap state (A-C006-3) for title + every option row × 3 requests × selected/unselected + the wrapped fixture; bounds asserted per state, not single-line proxies.
- [ ] Offset-aware height: modal bottom (28% top offset + modelled height) ≤ stage height at 360 px and at segment scale, per wrap state.
- [ ] Long-text fixtures: expand-wrap renders ≤2 lines inside cap with no overflow; reject-policy fixture renders no overflowing `nowrap` line; both leave validation-record entries.
- [ ] Hierarchy: title size > option size at every stage height in the fixture set, cap notwithstanding.

**Config-census legs**
- [ ] Consumption census (A-C006-2): every CONFIG leaf key (attempt-2 baseline 79, attempt-3 count printed) asserts a **consumed effect mapping** (key → rendered/computed effect), mutation-proven — binding alone fails.
- [ ] Literal census (A-C008-3): source scan for numeric/colour literals outside CONFIG against a build-record whitelist of named structural constants; any unlisted literal (incl. `"transparent"`, fallback strings, timing fallbacks) fails the suite.
- [ ] Effect mappings (A-C002-1): every documented override (URL/CONFIG) → parsed behaviour asserted, incl. finals policies, runs, long-text policy switch.

**Validation / scheduler legs**
- [ ] Adversarial set: string finals, string `arrivalFlashMs`, negative timing, fractional/zero/negative runs, malformed colours, missing finals ([0,0]→previous-policy inheritance retained from attempt 2) — each asserts recorded outcome + no NaN/Infinity/no-row state.
- [ ] **Magnitude sweep (A-C021-3):** 400-nines-class input against **every** numeric field; assert finite resolution + finite cycleMs for all.
- [ ] Rollover test: delayed terminal callbacks across ≥3 cycles assert boundaries stay anchored to the original clock (`origin += cycleMs`), lateness does not accumulate; within-cycle catch-up test retained from attempt 2.
- [ ] Pause/resume origin-shift test retained (200 ms remaining-dwell case); count-changing swap retained (4 requests × 4 options, finals [0,0,2,3], 4th-row style, fit at 360 px).
- [ ] Motion stillness: bounding-box invariance across requests/boundaries in the model (C6); PIXEL-UNVERIFIED printed if no render route (A-C002-2).

**Re-score wave (score-blind discipline)**
- [ ] Payloads allowlist-only (A-C005-2): neutral recreation source + neutral own-check packet (names/results, no cure interpretation); RUN.md/scores.md/prior returns/targets excluded; final payloads anchor-scanned **including source comments and filenames** (A-C008-4/A-C010-1c manifest).
- [ ] Per-lens sessions in dedicated scratch cwds containing only content copies of the allowlisted packet (A-C021-1); returns `-o`-written to /tmp first, then content-copied create-once with sha256 verified identical (A-C021-2).
- [ ] Mechanical guards: delta arithmetic recomputed from filed returns; preservation census; floor-rule gate check. Verdict vs bar printed with signed per-lens deltas.

## Failure-point evaluation

1. **Reusability completeness probe expands again** (attempts 1→2 pattern: each CONFIG expansion surfaced a new outside-CONFIG class). Priced HIGH — mitigated, not eliminated, by the literal census (A-C008-3) making the class mechanically visible pre-firing; residual risk is a class neither census enumerates (e.g. a behaviour, not a literal). Target +14 carries this risk; a landing at 74–79 still clears the floor and likely the average.
2. **Fit enforcement changes rendering the specimen doesn't have** — withholding/replacing rejected text could price as unfaithfulness under readability/motion if a default (non-fixture) line trips rejection. Guard: fixtures prove defaults never trip either policy; any default-trip is a build defect, stopped at Checkpoint 2.
3. **Rollover cure destabilises within-cycle timing** — `origin += cycleMs` with aggressive catch-up could skip the arrival flash or compress holds after a stall. Guard: delayed-callback test asserts flash + holds survive a one-cycle stall; timing arrays untouched.
4. **Validation strictness breaks the count-change path** — attempt 2's credited machinery (timing extension, previous-policy finals) must survive C3; the retained swap/pause tests are the regression net, run at Checkpoint 3, not only at Verify.
5. **Payload/session contamination** — A-C021-1/A-C021-2 failure modes are loss-class, not noise-class: shared cwd ingestion, empty-cwd NOT ASSESSED, `-o` hardlink loss. All three priced into the Verify checklist as procedure, with run-tagged re-fire paths (A-C005-1).
6. **Checkpoint hardlink recurrence** (A-C010-1 founding evidence) — inode assertion is mechanical in the checklist, not a restatement.
7. **Anchor drift** — any Execute temptation to "improve" finals/windows back toward the attempt-1 narrative is an A-C006-1 breach; anchors are bound in this plan.
8. **Purity regression repeats** (−4 in attempt 2 while curing neighbours): C1 touches purity's exact surface; Checkpoint 1 re-runs the literal census before later stages spend.

## WHY scaffold (pre-drafted, §2 standing — fill at close if non-beating)

_Owed only if attempt 3 fails to beat 83.8 (floor rule); slots pre-registered so a WHY is filed from evidence, not improvised._

Outcome slots (fill: LANDED-EFFECT / LANDED-NO-EFFECT / NOT-LANDED + lens evidence per cure):
- C1 CONFIG completeness + literal single-source: effect verified by ___ · lens observation: ___ · attribution: BUNDLED unless checkpoint-isolated
- C2 fit exactness + enforcement: effect verified by ___ · lens observation: ___ · attribution: ___
- C3 validation + magnitude sweep: effect verified by ___ · lens observation: ___ · attribution: ___
- C4 container contract: effect verified by ___ · lens observation: ___ · attribution: ___
- C5 rollover anchoring: effect verified by ___ · lens observation: ___ · attribution: ___
- C6 stillness model check: effect verified by ___ · lens observation: ___ · attribution: ___

Stuck-lens hypothesis (pre-registered): **reusability is the plateau candidate** — 68→66 across attempts 1–2 despite a 79/79 consumption census, i.e. the lens prices a completeness surface (literals + validation + enforcement + contract) that each attempt's census defined more narrowly than the lens does; attempt 3's discriminating test is whether the A-C008-3 literal census + A-C021-3 magnitude sweep — both completeness probes defined independently of the returns — close that definition gap. Secondary candidate: readability, if D1 (pixel evidence) is what the lens is actually pricing rather than fit exactness.
Evidence `jev-plateau` will need: these slots filled per cure · both prior attempts' reusability/readability returns cited per slot · the anchor basis (§Anchor) · attempt-3 build record's per-cure own-check results + consumption census + literal census + magnitude-sweep output · final-source sha binding · recomputed delta arithmetic · a named next discriminating test per stuck lens.
