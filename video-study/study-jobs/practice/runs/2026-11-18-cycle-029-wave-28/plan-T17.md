# Plan — T17 fake-newspaper dataviz, attempt 9 (practice Cycle 029, Wave 28)

Plan agent product ONLY — no build, no firing, no source mutation in this act.
Governing: practice INSTRUCTION §2 (Plan) + §5 (Verify) · RUN.md §1 + §1a (Codex Observe
corrections 3 for T17 consumed) · scores.md Attempt 8 filing + its Attempt-9 queue ·
build-record-attempt8.md · codex/attempt-8/ five lens returns read firsthand.
Prior governing attempt 8: **79.0 avg** (motion 86 · timing 83 · purity 82 ·
reusability 68 · readability 76), min 68 (reusability). Bar: avg ≥85.0 AND min ≥70.
Target: ≥85.0, min ≥70 — route needs +6.0 average, with reusability +2 minimum to
clear its floor and the balance spread; no single cure carries the route (a8's repriced
route was 83.4 and landed 79.0 — forecasts print as routes, never as expectations).
Attribution: **BUNDLED** unless a stage checkpoint isolates a construction effect
(A-C010-1a); paired probes isolate construction, never lens deltas.
PIXEL-UNVERIFIED stands entering the attempt (D1, 9th attempt — §3 deferral D-A9-1).

Convergent-first ordering (INSTRUCTION §2.2, recreation A1): the queue as filed in
scores.md lists validation first; the CONVERGENT cure is the remount contract
(reusability + purity both price the swap surface — reusability finding 3, purity's
swap-coverage finding). Execution order below therefore runs the remount stage first
and validation second; queue numbers Q1–Q6 are retained beside every cure so the
mapping to the filed queue is auditable. This re-ordering is printed here, in Plan,
not discovered at close (the a8 Finding-6 conflict is not repeated silently).

---

## 1. Cure plan — Q1–Q6, convergent first, each mapped to its construction change

### Stage order (checkpoint gate A-C012-4 binds every stage boundary — §4)

| Stage | Cure | Queue | Lenses pricing it |
|---|---|---|---|
| 1 | K1 remount contract | Q2 | reusability + purity (CONVERGENT) |
| 2 | K2 validation completeness, second pass | Q1 | reusability (purity on totality claim) |
| 3 | K3 callout shaft routing + glyph | Q3 | readability |
| 4 | K4 fit surface completion | Q4 | reusability |
| 5 | K5 literal census scope completion | Q5 | purity |
| 6 | K6 Branch-B1 disposition (defer — §3) + freeze | Q6 | timing (priced, unbuilt) |

### K1 — Remount contract (Q2, CONVERGENT — reusability 68 finding 3 · purity 82 swap finding)

A8 defect, verbatim basis: `buildAll` "removes the live roots and header before the
candidate finishes building. The catch path tries to recreate the old scene and
suppresses any failure during that recreation"; "Successful swaps also call
`render(offset)` after `buildAll` renders `lastT`, which can rewind an in-flight
preview"; "The 800 px swap returns success even though the subsequent fit probe
reports `ok=false`. The API needs a defined fit and playback contract for callers."
Purity, same surface: the a8 swap "covers the masthead, palette, and figure titles. It
leaves replacement of all subject-bearing fields … unverified."

Construction changes (all inside `buildAll` / `rebuild` / `createScene` plumbing;
figure builders and timeline stand — §8 incremental scope):
1. **Candidate built offstage:** `rebuild(candidateCfg)` deep-copies the candidate,
   validates it (K2's validator, inside the failure boundary), and constructs the
   full candidate scene into a DETACHED root (no live DOM mutation, no live CONFIG
   mutation, no width/chrome side effects) — sizing/geometry derived from the
   candidate's own stage width read from the candidate config, never from the live
   scene (a8 C4's width-derivation cure is preserved, not regressed).
2. **Swap only on success:** the live scene (roots, header, width styles, chrome,
   playback state) is replaced in ONE commit step only after candidate construction
   AND candidate validation both succeed. Any throw during candidate construction
   leaves the mounted tree, width, chrome, and playback state byte- and state-
   identical to pre-call — asserted, not assumed.
3. **Rollback never reconstructs:** the failure path DISCARDS the detached candidate
   and returns a named error; there is no code path that re-creates / re-runs a
   builder for the old scene, and no suppressed recreation failure (the a8 catch's
   suppression is deleted, not wrapped). Probe: sabotage a candidate builder to
   throw AFTER sizing (the a8 Stage-4 probe form) and assert zero builder invocations
   against the live config during the failure path.
4. **Defined fit + playback contract (printed in the build record, asserted in suite):**
   - FIT: a swap whose candidate `fitReport` returns `ok:false` is **REPORTED** —
     `rebuild` returns `{ok:false, fit:<report>}` (or the named-error equivalent the
     suite asserts) and does NOT print/return unqualified success; whether the swap
     commits on fit-failure is ONE named policy, chosen here: **fit-failure does not
     commit** (the candidate is well-formed but unfit; committing it would mount a
     known-overflow scene) — the live scene stands and the caller receives the fit
     report. This resolves the a8 "800 px swap returns success while fit ok=false"
     contradiction in the conservative direction.
   - PLAYBACK: a successful swap **does not rewind playback** — the post-swap render
     uses the CURRENT playback position (`lastT` at swap time), never `offset`; if
     playing, playback continues from that position; if paused on a preview frame,
     the preview frame stands. Probe: set an in-flight preview time ≠ offset, swap,
     assert rendered t == preview t.
5. **Complete DLC-class preset swap:** a second full preset in the CONFIG's subject
   shape for the DLC sentence-diagram consumer (different masthead, author, palette,
   figure titles, x/y labels, point data, waffle counts + callout text, stack items,
   org nodes + badge text, counter start/end + labels, correction/stamp/notes text —
   EVERY subject-bearing field enumerated by name in the build record) is swapped via
   the public `rebuild` path; the suite asserts EVERY enumerated field's rendered
   effect changes (A-C002-1 effect mapping, not a field count) and no specimen string
   from the default preset survives in the mounted candidate.

Checkpoint CP1 (after this stage): create-once source copy + stage suite output;
paired probes on predecessor (a8 final) vs CP1 with identical inputs: dismantle-first
probe (live mutated before candidate success — predecessor FAIL / CP1 PASS),
rollback-reconstruction probe, rewind probe, fit-failure-report probe, DLC preset
field-effect table. Next stage may not begin until CP1 is filed (A-C012-4).

### K2 — Validation completeness, second pass (Q1 — reusability 68 finding 2; A-C011-2 · A-C028-2)

A8 defect, verbatim basis: "deleting `timing.drawEnd` passes the loop over existing
timing keys, leaving `lineChartState` to compute a `NaN`"; "A null `yLabels` entry
passes the array check and reaches `yAxisPad`, which reads `.text`"; "`fitReport`
also calls `computeLayout` before validation"; "the sample bound uses
`animFraction / sampleStep`, but `BUILDERS.counterGraph` loops over `0..aq`, where
`aq` can reach 1 … roughly 649 loop iterations" pass a 512 bound.

Construction changes (in `validateConfig` + `fitReport` ordering + the counter
renderer bound — validator schema/defaults stay OUTSIDE the editable CONFIG object
per A-C024-1's trusted-defaults separation, as landed in prior attempts):
1. **Required members enumerated BY NAME, never key-iteration:** the validator holds
   explicit name lists — every required `timing.*` member (incl. `drawEnd` and every
   member any state function dereferences: the enumeration is derived by grepping
   every `T.<name>` / `c.timing.<name>` dereference in the source and listing each
   in the build record), every required `layout.*` member consumed by
   `computeLayout`/`figureGeom`, every required `palette.*` member (a7 cure,
   retained), every required `formatting.*` member. A missing OR non-finite OR
   wrong-typed named member is a named error. Deleting each named member one at a
   time is a corpus case (see 5).
2. **Per-entry shape checks for label and point arrays:** every entry of `yLabels`,
   `xLabels`, and each figure's point/data arrays is shape-checked per entry —
   object present, required fields present and typed (`text` a string for labels;
   point coordinates finite numbers) — a null/primitive/missing-field entry at ANY
   index is a named error naming figure + index. Same per-entry rule for nodes,
   notes, bars, and stack entries (the class, not only the two arrays the return
   named — A-C011-2 completeness probing).
3. **Fit path validates before it computes:** `fitReport` runs `validateConfig`
   FIRST and, on any error, returns the failure result (`ok:false` + the errors)
   without calling `computeLayout`/`figureGeom`; no fit-path throw on a missing
   layout group. Probe: delete a required layout group, call `fitReport`, assert
   named-error return and zero layout computation (spy/counter or throw-free return).
4. **Sample bound from the renderer's full loop domain:** the counter renderer's
   loop runs `p` over `0..1` in steps of `sampleStep` (aq can reach 1), so the bound
   is **iterations = 1 ÷ sampleStep** (plus the endpoint sample), and validation
   requires `1/sampleStep ≤ timing.maxSamples` with `maxSamples` single-sourced in
   CONFIG. The a8 arithmetic is the regression probe: the step that yielded ≈649
   iterations under the old `animFraction/step` pricing must now be REJECTED by
   name. The bound the validator enforces and the loop the renderer runs are the
   same quantity — asserted by instrumenting the renderer's actual iteration count
   at the bound edge (count == bound passes, bound+1 rejects).
5. **Generative sweep beside the named cases (A-C028-2 — first trial of the form):**
   beside the named-case corpus (the four a8 cases above + all prior corpora), the
   suite mechanically enumerates a sweep over the input grammar —
   value-type (missing · null · string-typed · non-finite · negative · zero ·
   oversized-magnitude incl. the 400-nines class per A-C021-3) × route (direct
   CONFIG edit · override/query · `rebuild` candidate · `fitReport` entry) ×
   boundary (at bound · bound±1) for every enumerated required member and every
   per-entry array — each generated case asserting the FINAL consumer's behaviour
   (named error, no throw, no NaN state reaching a state function). The filing
   prints the sweep's enumeration counts; a green named-case corpus alone supports
   NO class-closure claim (A-C028-2's wording binds the WHY scaffold, §7).

Checkpoint CP2: paired corpus predecessor vs CP2 (a8's four holes FAIL→PASS named),
sweep enumeration + results filed; Stage-1 public `rebuild` rejection cases re-run
through the K1 path (cross-stage retest, a8 Finding-2 form).

### K3 — Callout shaft routing + glyph alignment (Q3 — readability 76, FIG.21)

A8 defect, verbatim basis: "The zero-gap tip check misses the shaft. Recomputing the
route puts the shaft at the center of the third dot in the bottom row before it
reaches the third dot in the middle row. The label also carries a right arrow while
the leader runs upward. Route the leader through an inter-dot gap and use plain
'you' at its origin."

Construction changes (waffle builder + callout geometry, single-sourced keys):
1. **Shaft routed through an inter-dot gap:** the leader's path from the lane label
   to the target ("you") dot is constructed as segments whose x (or stepped path)
   runs in the inter-dot gap channel (gap centre derived from the grid geometry
   keys — dot size + waffle spacing, single-sourced under K5), never through a dot
   centre or disc. If a straight segment cannot stay in a gap, the route steps
   (vertical in a column gap, then horizontal in a row gap) — the stepped form is
   the default construction, chosen in Plan, not improvised in Execute.
2. **Shaft × every dot in the clearance-pair set (A-C028-1 — §2 owns the derivation):**
   the mounted census asserts shaft-segment × every non-target dot (and the target
   dot's approach) at each hold checkpoint — §2.
3. **Label glyph aligned with the leader's direction:** the label's arrow glyph
   matches the leader's actual initial direction (an upward-running leader carries
   an up glyph — or, per the return's own alternative, plain "you" with no arrow);
   Plan binds: **plain text + a direction-true glyph only if the glyph's direction
   equals the leader's first-segment direction**, asserted in the census by reading
   the emitted glyph and the emitted first segment's direction from the mounted
   structure. No right-arrow on an upward leader survives.

Checkpoint CP3: paired probe — predecessor shaft route recomputed (crosses the named
dot, filed coordinates) vs CP3 route (every shaft×dot pair's clearance printed);
FIG.21 lane + summary clearances from a8 Stage 2 retested unchanged (28.8 MIN /
8 summary must not regress).

### K4 — Fit surface completion (Q4 — reusability 68 finding 4)

A8 defect, verbatim basis: "The public row contains neither `titleOcc` nor `maxW`,
so the caller cannot recover the occupied width from that row"; the 100×`W` card
token: "`figureGeom` counts the token as one line for height and uses the card box
width for `maxW`. That leaves `widthOk` true when the modeled token exceeds the
card interior" (modelled 1,056px vs 301px interior at 360).

Construction changes (`figureGeom` / `fitReport` row shape):
1. **Occupied widths carried on fit rows:** every fit row carries its occupied
   width(s) by name (title occupied, figure `maxW` = the figure's ACTUAL maximum
   rendered width, per-element maximum — the row's fields are enumerated in the
   build record) beside the available width and `widthOk`; a caller reading only
   the row can recover occupied vs available for every figure. The a8 title case
   (598.4 occupied vs 328 available, `widthOk:false`) must now ALSO print 598.4
   on its row.
2. **Per-element occupied widths inside cards modelled:** `figureGeom` computes
   occupied width per contained element (text tokens at the char-width model —
   an unbreakable token's occupied width is its full modelled width, never the
   card box width; wrapped text's occupied width is its widest line) and the
   figure's `maxW` is the maximum over its elements, not the container's width.
   Regression probe: the return's own 100×`W` FIG.20 card case — occupied 1,056
   vs interior 301 → `widthOk:false` on the final source.
3. Cross-check (A-C012-2 dependent re-derivation): `figureGeom`'s title width must
   consume `chartTitleLetterSpacingEm` (reusability finding 1's named model↔renderer
   gap — same construction surface, cured here or explicitly deferred in §3; Plan
   binds: CURED here, it is a one-key consumption in the same function K4 rewrites).

Checkpoint CP4: paired fit probes predecessor vs CP4 (title row fields absent→present;
100×`W` case true→false); mounted fit re-run at 360/390/960 on the final stage source.

### K5 — Literal census scope completion (Q5 — purity 82)

A8 defect, verbatim basis: "The stylesheet still repeats `960px` as the stage and
controls fallback, contrary to the literal census listing only the `CONFIG`
occurrence. Waffle spacing repeats the 6px and 8px values across the geometry model
and renderer, and the counter path still embeds a 3px stroke." Scores filing: "The
literal census's stated scope (script lines) is the gap — attempt 9's census covers
the stylesheet and every builder."

Construction changes:
1. **Census scope = whole file:** the literal census scans the stylesheet + ALL
   builders + the geometry model + state functions (the full source, no script-only
   scope); every numeric/color literal outside CONFIG is either single-sourced or
   printed per-literal as a named structural constant in the build record
   (A-C008-3 + A-C009-4: no content-carrying literal may be classified structural).
2. **Waffle spacing single-sourced:** the 6px/8px waffle spacing values live in ONE
   CONFIG owner each (named keys, e.g. under `layout.waffle*`); model and renderer
   both read the keys — mutation probe: change each key, assert model geometry AND
   mounted dot positions move together (this also supplies K3's gap geometry).
3. **Counter stroke single-sourced:** the counter path's 3px stroke becomes a named
   CONFIG key consumed by the renderer (and the model where it prices stroke);
   mutation probe as above.
4. **Stylesheet stage-width fallbacks resolved to their single owner:** the stage
   and `#controls` `960px` fallbacks cease to repeat the value — the stylesheet
   reads the one owner (the CSS variable the build sets from
   `layout.stageWidthPx`, with the fallback chain arranged so the literal appears
   ONLY at its single owner site in CONFIG, per the §1a correction: "stylesheet
   stage-width fallbacks resolved to their single owner"). Census asserts the
   value `960` occurs at exactly the owner site(s) the build record names.

Checkpoint CP5: full-scope census output filed (stylesheet + builders enumerated);
mutation probes for waffle spacing + counter stroke + stage width across the
CSS/model/renderer boundary (a7/a8 single-source probe form, widened in scope).

### K6 — Branch-B1 residuals (Q6) — disposition in §3 (deferred, priced)

No construction in this stage. Stage 6 is the freeze stage: comment neutralization
BEFORE the freeze (A-C008-4 — source comments scanned; any cure-code/amendment-label
comment neutralized, comments only, full suite re-run), scored-source freeze, sha
recorded, THEN the A-C008 legs + payload manifest (§4/§5).

---

## 2. Mounted-census plan (A-C026-2 · A-C027-2 · A-C028-1)

The census asserts against the MOUNTED/emitted structure (stub-DOM mount of the
final source), never the source model alone — a6's plateau class and A-C026-2 bind.
At EACH hold checkpoint (the checkpoints are the six figures' completed/hold states
plus each handoff midpoint — the states the a8 census used, re-enumerated by name in
the build record), the census enumerates from the MOUNTED element inventory:

1. **Clearance pairs (A-C027-2), two distinct relations, distinctly asserted:**
   - MINIMUM clearance — label–marker pairs: every text label × every marker/dot/
     node co-present at the checkpoint; assert mounted clearance ≥ the named floor
     (callout lane floor 8px = dot gap, carried from a8; FIG.21's a8 result 28.8 is
     the regression floor, not the target).
   - MAXIMUM endpoint gap — connector–anchor pairs: every connector endpoint × its
     anchor; assert mounted gap ≤ the named maximum (FIG.23 target 0, a8 result;
     start gap ≤ `connectorMarginTopPx` as in a8 Stage 3).
   The pair set is printed as the census's stated scope (a scoped census is lawful;
   an unscoped "all clear" claim over a sampled set is not — A-C019-1/A-C027-2).
2. **Shaft-pair derivation (A-C028-1 — the amendment's UNTRIED test, first trial):**
   pairs are DERIVED, not hand-listed: from the mounted inventory at each
   checkpoint, generate every applicable **shaft/body × non-target-marker** pair —
   each linear body in the mounted scene (callout leader segments · connector
   strokes · graph path segments) × each marker/dot/node that is not that body's
   own target — and assert each pair's mounted relation (no crossing; clearance
   ≥ floor where the pair is a clearance pair). The derivation's inputs (mounted
   body inventory × marker inventory per checkpoint) print in the census output,
   and the census VERIFIES it detects the filed a8 crossing: run against the a8
   frozen source, the derived set must contain the shaft × third-dot-bottom-row
   pair and report the crossing (predecessor detection probe, filed beside CP3).
   A priced surface from an omitted pair class files at close as a COVERAGE gap
   (A-C028-1), never as a fidelity gap.
3. **Coverage accounting (A-C026-2):** the census prints its counts in the a7/a8
   form — emitted-structure assertions · source-derived geometry · browser
   measurements (0 expected; PIXEL-UNVERIFIED) — and every modelled claim in the
   build record maps to a mounted counterpart or prints as model-only with its
   reason. Badge/stamp transformed bounds at entrance states are census rows
   (mounted AABB vs cleared space), carried from a8, not dropped.

---

## 3. Changes deliberately deferred — reason + per-lens risk pricing (A-C009-3)

Every deferral prices EVERY lens that can see the beat, not only the suggesting lens.

### D-A9-1 — D1 render route (PIXEL-UNVERIFIED, 9th attempt) — DEFERRED (lane charge)
Reason: no working render route exists in-session (Chromium startup blocked,
"Hatch WebGL domain policy is required", eight consecutive attempts); it is a
lane-level build charge, not an item cure — the item cannot cure it by construction.
Per-lens adverse (a8 build record's priced bands, carried): motion −2..−5 (playback,
entrances, handoff dip unassessed) · timing −2..−4 (perceived holds unverified) ·
purity 0 · reusability −1..−3 (rendered swaps unverified) · readability −3..−6
(glyph containment, badge/stamp entrances, handoff readability capped). Surfaces
staying PIXEL-UNVERIFIED by name (§1a correction 3): glyph containment · badge/stamp
entrances · handoff playback.

### D-A9-2 — Branch-B1: timing hold-budget + handoff-curve construction (Q6) — DEFERRED to attempt 10
The deferred work, named (§1a correction 3): FIG.20 hold budget (0.591s fully-drawn
hold, timing a8) · FIG.23 hold budget (0.525s settled hold) · handoff midpoint and
curve (outgoing 35% / incoming ≈2.3% at midpoint, priced by timing a8 and a5–a7
convergently as a dip). Reason for deferral: (a) the attempt's construction surface
is already the remount plumbing + validator + fit model — adding the transition
curve (a shared timing/layout construction every figure passes through) widens the
interaction surface against K1–K4 in the a6 pattern (broader cure set, mounted
divergence); (b) the handoff curve interacts directly with a6's C1 lesson (the
visibility floor's release step) — it deserves its own stage-isolated attempt, not
a sixth stage here; (c) §8 size discipline: convergent cures in, the rest deferred
in writing. TAKE/DEFER decision: **DEFER, whole** (hold budgets and curve together —
the holds are partly SPENT by the handoff's 0.225s fade lead, so splitting them
prices a false independence).
Per-lens adverse if deferred (priced from a8 returns' own deductions):
- timing: the dip + both holds remain priced — adverse −3..−6 against a construction
  that cured them; timing expected flat ≈83 (its a8 score with no timing cure).
- motion: handoff visibility + FIG.23 hold surfaces remain — adverse −1..−3
  (motion prices the dip as continuity-adjacent, less than timing).
- readability: handoff-midpoint unreadability ("both figure bodies become
  effectively unreadable for a brief handoff", a5 wording, still live) — adverse
  −1..−3, capped by D-A9-1 (unverifiable at playback either way).
- reusability: 0 (no configuration surface). · purity: 0.
Route consequence printed: PASS then requires the K1/K2/K4/K5 gains to carry the
full +6.0 with timing flat — the route is reusability-led (68 → high-70s/80s) +
readability/purity holding or gaining; if the wave lands below bar with timing
flat and its deductions verbatim, that is the deferral's priced cost, filed as such.

### D-A9-3 — FIG.23 continuous CEO trunk across both rows — DEFERRED
Named in a8 readability ("A shared connector layer or a continuous trunk through
both rows would make the parent relationship traceable") and motion ("no connecting
segment back to the CEO"). Not in the filed a9 queue (Q3 is the callout; Q-adjacent
connector ATTACHMENT was cured a8, gap 18→0). Reason: queue fidelity — the filed
queue governs (§2.2 mapping completeness is judged against it); the trunk is a new
construction on the org builder that belongs in attempt 10's queue, filed there
from this plan. Per-lens adverse: readability −2..−4 (routing ambiguity is its
remaining FIG.23 deduction) · motion −1..−3 · timing 0 · purity 0 · reusability 0.

### D-A9-4 — Badge entrance-scale clearance + stamp glyph containment (rendered) — DEFERRED under D-A9-1
Readability a8 leaves both as rendered-check items. Mounted-model rows stand in the
census (§2.3); the rendered forms are D1's. Per-lens adverse: readability −1..−3 ·
motion −0..−2 (stamp approach shortened at phone widths, motion a8) · others 0.

No other a8-priced surface is deferred silently: K4.3 absorbs reusability finding
1's letter-spacing gap; the DLC preset (purity) is inside K1.5, not deferred.

---

## 4. Execute checklist (numbered — Execute runs this, item by item)

Preservation FIRST, before any mutation (INSTRUCTION §2.3):
1. Machine-written sha256 baseline BEFORE mutation (A-C003-2): `sha256sum` output
   redirected to the baseline file in a write-first exec invocation (or script-
   generated) covering the item's COMPLETE prior evidence set (A-C010-1b):
   recreation.html, all recreation-attempt-*.html, comparison.html + its ORIGINAL
   asset `segment.mp4`, scores.md, all build records, all fit-table/config-census
   legs, all codex/ payloads+returns (attempts 1–8), all checkpoints/ trees.
   Validate at capture: every hash exactly 64 hex chars, file count == expected
   path-list count; a malformed capture is refused and re-captured BEFORE mutation;
   the original capture is preserved unedited (corrections appended as dated notes).
2. Content-copy preservation (A-C004-1/A-C005-1): copy the a8 final source to
   `recreation-attempt-8.html` as a CONTENT copy (never a hardlink — assert
   inode(candidate copy) ≠ inode(working file)); destination is CREATE-ONCE — if
   it exists: matching sha → reuse untouched; mismatching sha → STOP and report.
   Same create-once rule for scores.md's pre-append copy (`scores-attempt-8.md`),
   build records, checkpoints, payload/return paths. Preservation census re-verifies
   preserved copies AFTER the working file's first overwrite, not only at close.
3. Build against an attempt-specific CANDIDATE file (a8 form); the live
   `recreation.html` keeps the a8 build until the candidate passes mandatory
   own-checks, then publishes by content copy; post-overwrite census runs
   IMMEDIATELY after that first replacement and stops the build on any mismatch.

Staged construction (A-C010-1a + checkpoint gate A-C012-4 — a stage begins only
after the PRIOR stage's checkpoint is filed create-once and read back):
4. Stage 0: file CP0 (a8-source copy + a8 suite re-run + the §2 predecessor
   detection probe: A-C028-1 derived pair set run on the a8 source detects the
   filed shaft crossing). No cure work in Stage 0.
5. Stage 1 (K1 remount): implement §1-K1.1–K1.5; stage suite incl. all K1 probes +
   Stage-0 regression suite; file CP1 (source copy + checks, inode ≠ working file,
   sha frozen in the stage record) BEFORE Stage 2 opens.
6. Stage 2 (K2 validation): implement §1-K2.1–K2.5 incl. the generative sweep;
   cross-stage retest of Stage-1 rebuild rejections through the new validator;
   file CP2 before Stage 3 opens.
7. Stage 3 (K3 callout): implement §1-K3; §2 census rows for FIG.21 at all hold
   checkpoints; a8 lane clearances retested; file CP3 before Stage 4 opens.
8. Stage 4 (K4 fit): implement §1-K4.1–K4.3; paired fit probes; mounted fit re-run
   360/390/960; file CP4 before Stage 5 opens.
9. Stage 5 (K5 census scope): implement §1-K5.1–K5.4; full-scope literal census
   output filed; mutation probes across CSS/model/renderer; file CP5 before
   Stage 6 opens.
10. Stage 6 (freeze): source-comment contamination scan (A-C008-4) → neutralize
    comments only if contaminated → FULL suite re-run on the neutralized source →
    freeze the scored source, record its sha256 in the build record. No source
    change after the freeze except by re-freeze with the incident printed.
11. A-C008 pre-scoring legs on the NEW (frozen) source — non-skippable, filed as
    **`fit-table-attempt9.md`** and **`config-census-attempt9.md`** in the artifact
    directory (the census against attempt 9's own CONFIG, never a8's); each leg's
    path + hit count cited in the wave RUN. The legs carry LEAF-LEVEL tables
    (see §5 packet rule).
12. Comparison check: `comparison.html` re-pointed ONLY if the interface changed
    (K1's contract is a behaviour contract — if `rebuild`'s return shape changes,
    that IS an interface change and the comparison + build record print it);
    ORIGINAL side never changes — probe both resolved sides (ORIGINAL media hash
    == baseline; recreation side sha == frozen sha) before scoring.
13. Build record `build-record-attempt9.md` filed: cure-by-cure construction,
    checkpoint shas, paired-probe values (predecessor/current), the K1 fit/playback
    contract text, the K2 enumerated member lists, the §2 census scope + counts,
    deferral dispositions D-A9-1..4, PIXEL-UNVERIFIED per sub-item (completed
    figures ×360/390 · entrances · playback · rendered swaps — each OUTSTANDING
    named, D1 re-attempt outcome recorded).

## 5. Verify checklist (numbered — instruments named, not intentions)

Own legs first (all on the frozen source):
1. **Effect mappings (A-C002-1):** every cure's probe asserts an index→effect /
   field→rendered-effect mapping (K1.5 preset: per-field rendered change; K5:
   per-key model+mounted movement), never counts alone.
2. **CONFIG consumption (A-C006-2):** mutation census over attempt 9's CONFIG —
   every leaf consumed by a rendered/computed effect or carrying a named-consumer
   disposition; a bound-but-unconsumed key fails the suite. Leaf-level table filed
   in `config-census-attempt9.md`.
3. **Literal census (A-C008-3):** full-scope scan (stylesheet + all builders +
   model) vs the build record's per-literal structural whitelist (A-C009-4: no
   content literal classified structural); unlisted literal fails.
4. **Displayed/mounted state (A-C004-2/A-C026-2):** the §2 mounted census on the
   frozen source — MIN label–marker clearance + MAX connector endpoint gap +
   A-C028-1 derived shaft pairs at every hold checkpoint; wrapped states enumerated
   (A-C006-3); counts printed (emitted / geometry / browser=0).
5. **Swap test:** logic-level minimum — default → DLC preset (K1.5) → back, plus
   width swap, failure-path swap (live untouched), fit-failure swap (reported, not
   committed), playback no-rewind swap. Pixel swap only if a browser route exists
   (it does not — PIXEL-UNVERIFIED printed, A-C002-2).
6. **Purity grep + asset inventory:** 0 specimen-media / external-asset hits;
   namespace-string exception named as in prior attempts.
7. **Comparison check:** per Execute step 12 (both sides probed, hashes vs baseline).
8. **PIXEL-UNVERIFIED:** printed in the filing with the D1 re-attempt outcome;
   no filing cites a pixel step as rendered verification.
9. **Mechanical guards (guards.md):** guard 1 delta arithmetic recomputed from the
   filed returns · guard 2 attempt-preservation census (baseline vs close, 0
   mismatches outside lawful changes) · guard 3 floor-rule gate (beat 79.0 or WHY).

Scoring packet rule (a8 packet-scope note — two lenses priced summaries UNVERIFIED):
10. The fed packet carries the **leaf-level leg tables** (`fit-table-attempt9.md` +
    `config-census-attempt9.md` in full) — OR the packet itself prints its scope
    limit in its own text ("leaf-level leg results not carried; census summaries
    are UNVERIFIED") so no lens is asked to credit an unshown table. Silence on
    scope is the a8 defect and fails this checklist item.

Five-lens Codex rescore (guards/codex-rescore-wave.md):
11. Score-blind allowlist payloads ONLY: lens instruction + neutral technique facts
    + frozen recreation.html + score-blind build record + own-check packet (with
    §5.10's tables/scope print). scores.md, RUN.md, prior returns, target/prior
    scores, cure-to-lens commentary EXCLUDED (A-C005-2); prior average named only
    in the seat's tasking, never in a payload.
12. Payload manifest filed BEFORE firing (A-C010-1c): exact allowlist, exclusions,
    assembled-payload anchor scan (scores/deltas/cure labels/evaluative wording —
    incl. filenames, labels, comments).
13. Source-comment contamination scan (A-C008-4) on the frozen source as payload
    content — done at Execute step 10, re-verified against the manifest scan.
14. Firing form per lens: dedicated per-lens scratch cwd containing ONLY content
    copies of the allowlist packet (byte-identical to the fed payload) +
    `--skip-git-repo-check` (A-C021-1/A-C022-2); closed stdin (A-C026-1); returns
    `-o` to /tmp FIRST, then content-copied to the create-once destination under
    `codex/attempt-9/` with sha256 verified identical to the `-o` original
    (A-C021-2/A-C007-2). Every firing (incl. interim/re-fires) preserved create-once
    BEFORE any subsequent source change (A-C003-1). Session read scope printed per
    lens (A-C019-2).
15. Filing: scores + arithmetic appended to scores.md as Attempt 9 (average, min
    lens, signed delta vs 79.0, verdict vs bar); WHY from §7's scaffold if the
    average does not beat 79.0 (floor rule §5.4; jev-plateau fires at close on a
    non-beating attempt); PASS → tier hand-off to style-library's board with the
    scores.md pointer.

## 6. Failure-point evaluation (jev-plan-exit §2.4 — each priced or ruled out)

- **(a) Big-rebuild / bundled-attribution risk — PRICED, live.** K1 rewrites the
  remount plumbing every figure passes through; a regression there is
  unattributable cure-by-cure at the lens level. Mitigation as designed: staged
  checkpoints + paired probes isolate CONSTRUCTION effects per stage; lens
  attribution still prints BUNDLED. Residual risk: a K1 defect that only a lens
  sees (e.g. a subtle playback-state change) lands on all five lenses at once —
  adverse scenario in §8.
- **(b) Cure interaction — PRICED, three named pairs.** (i) K2's stricter validator
  × K1.5's DLC preset: the preset is new content; if it trips a newly enumerated
  member/entry check, the swap test fails on the cure's own evidence — the preset
  is validated against the FINAL validator in Stage 2's cross-retest order (K1
  stage's preset probe uses the a8 validator; the binding probe is Stage 2's).
  (ii) K5's waffle-spacing single-sourcing × K3's gap routing: K3's gap geometry
  derives from K5's keys, but K3 is staged BEFORE K5 — Execute binds K3 to the
  CURRENT spacing values and Stage 5 re-runs CP3's pair census after single-
  sourcing (cross-stage retest, printed in step 9); a value change in K5 that
  moves the gap invalidates CP3 unless retested. (iii) K4's fit-row shape change
  × K1's fit contract: the contract (step 4 of K1) consumes `fitReport`'s `ok` —
  K4 changes row FIELDS, not `ok` semantics; asserted in CP4's probes.
- **(c) Prior-attempt overwrite / early comparison re-point — RULED OUT by
  construction:** baseline + create-once copies before mutation (steps 1–2),
  candidate-file build with publish-after-checks (step 3), post-overwrite census
  immediately after first replacement, comparison probed before scoring (step 12).
  The a8 incident class (orphan root) is inside K1's probes, not this point.
- **(d) Anchor leak — PRICED, standing risk.** Prior scores reach a lens only via
  payload contamination; controls: allowlist + anchor scan over assembled bytes +
  source-comment scan + per-lens scratch cwd (steps 11–14). a8's first assembly
  carried three anchor classes and was caught pre-firing — the scan is load-
  bearing, not ceremonial; a scan that finds anchors voids the payloads, which
  are preserved unfired and regenerated (A-C008-4 detection form).
- **(e) Instrument-change misread — RULED OUT:** attempts 8 and 9 both use the
  five-lens instrument; the 79.0 delta is pure movement, lens counts printed anyway.
- **(f) Wave fan-out cross-contamination — RULED OUT for this item:** all writes
  stay inside this item's artifact directory + this cycle's run directory (paths
  pinned); per-lens scratch cwds are item- and lens-specific; no other wave item's
  directory is written by this item's agents.
- **(g) Size-split evasion — RULED OUT, with the split trigger printed:** the plan
  is incremental (builders + timeline stand; plumbing/validator/model/census
  change). Split trigger: if K1's offstage construction requires replacing
  `createScene`'s architecture rather than building into a detached root through
  it, the attempt splits — K1+K2 (convergent + floor lens) execute, K3–K5 defer
  in writing to attempt 10 — and the split prints in the build record, not at close.
- **Top failure point (priced highest): (a)+(b)(i) combined** — the remount stage
  is the attempt's widest shared surface and its failure mode is silent: a candidate
  that builds offstage but commits subtly different state (chrome, width, playback)
  passes logic probes and is priced by every lens at once. This is the a6 plateau
  class (shared change widening faster than assertions) one level up, and it is
  why K1 is staged FIRST with the widest paired-probe set.

## 7. WHY scaffold — pre-drafted for scores.md (floor rule §5.4)

Filed into scores.md at Plan close (seat act) in the a3–a6 scaffold form. Decisions
explicit: beating = new average > 79.0; PASS = avg ≥85.0 AND every lens ≥70.
Attribution BUNDLED unless a checkpoint isolates a construction effect.

### Branch A — attempt 9 does NOT beat 79.0: WHY owed; jev-plateau fires at close
Cure-by-cure slots (LANDED / PARTIAL / FAILED, (a) implementation probe and
(b) final-return wording kept separate for each):
- K1 remount contract (offstage · no-reconstruct rollback · fit REPORTED ·
  no-rewind · DLC preset field effects): probe ___ · reusability wording ___ ·
  purity wording ___
- K2 validation second pass (named members · per-entry shapes · fit-validates-first ·
  1÷step bound · generative sweep counts): probe ___ · reusability wording ___
- K3 shaft routing + glyph (derived pair set incl. predecessor detection): probe ___
  · readability wording ___
- K4 fit surface (occupied on rows · per-element card widths · 100×`W` probe ·
  letter-spacing consumption): probe ___ · reusability wording ___
- K5 census scope (stylesheet+builders · waffle spacing · counter stroke ·
  stage-width owner): probe ___ · purity wording ___
- K6/D-A9-2 deferral disposition: did timing's flat-price fire verbatim (dip +
  FIG.20/FIG.23 holds priced again, no timing construction attempted)? ___
- Deferral dispositions D-A9-1 (per lens, §3 bands) · D-A9-3 (trunk) · D-A9-4: fired
  or not, in which lens's words ___

Stuck-lens hypothesis (pre-committed, falsifiable): primary — REUSABILITY sticks
below 75 even with K1/K2/K4 landed, because its priced class has deepened past the
named cases on THREE consecutive attempts (a7 traversal order · a8 named members/
fit order/bound domain) — each pass cures the named set and the lens finds the next
sibling; the discriminating evidence is whether a9's return prices a NEW sibling
class (hypothesis confirmed: the class is generative, and attempt 10's charge is
the sweep's widening, not another named-case pass) or prices the SAME cases (cure
failed on its own surface). Secondary — the plateau is the verification form's
(a6 filing): if the decisive deductions again live on surfaces the mounted census
did not derive (a COVERAGE gap under A-C028-1), the WHY names the census's pair
derivation as the stuck construction, not any cure. jev-plateau evidence pointers:
per-cure outcomes above tied to filed return passages · per-lens signed deltas vs
a8 (86·83·82·68·76) and the average delta vs 79.0 · checkpoint attribution ·
fit-table-attempt9.md + config-census-attempt9.md paths + hit counts ·
payload-manifest · PIXEL-UNVERIFIED status (9th attempt) · what attempt 10 does
differently (pre-drafted: D-A9-2 timing construction + D-A9-3 trunk + D1, in that
order, unless the returns re-rank them).

### Branch B — attempt 9 beats 79.0: no WHY owed
- B1 (beating, below bar): the same slots file as the residual inventory (attempt-10
  queue) in the Attempt-9 filing, not as a WHY; jev-plateau does not fire.
- B2 (PASS): slots file as the PASS cure-evidence summary; tier hand-off to
  style-library's board with the scores.md pointer.

## 8. Per-lens adverse pricing for disputed bases (A-C014-1 · A-C027-1)

Two disputed/shared bases are fed to the wave; both are priced PER LENS from the
basis the evidence supports, not from the builder's retained basis (A-C014-1), and
the repricing extends to every lens the corrected facts touch (A-C027-1).

**Dispute 1 — the sample bound's domain (builder's a8 basis vs the renderer's).**
A8 priced the bound on `animFraction/step`; the reusability return's recomputation
(≈649 iterations over the full `0..1` domain) is the evidence basis and K2.4 builds
to it. No construction dispute remains (the build adopts the lens's basis), so the
adverse case is the reverse: if a lens re-prices the bound on yet another domain
(e.g. counting the endpoint sample or a sub-window loop), the validator could be
charged over- or under-strict. Priced adverse: reusability −0..−3 (its own basis
was adopted verbatim; a further domain shift is speculative) · all other lenses 0
(no priced surface). Uncertainty stated: the renderer's loop text is the evidence;
the suite's instrumented iteration count (K2.4) is the discriminating probe.

**Dispute 2 — the shared packet's corrected facts (A-C027-1 repricing).** Attempt
9's packet corrects three facts every lens reads: (i) the remount contract (the
a8 packet described a dismantle-first swap; a9's describes offstage+commit), (ii)
the fit rows' shape (occupied widths now present), (iii) the census scope (full-
file literal census; leaf-level tables carried or the limit printed, §5.10). A
correction that helps its owning lens can reprice others adversely — priced:
- motion: corrected fit/remount facts touch no motion surface — adverse 0; upside
  unclaimed.
- timing: the packet now states the handoff midpoint values beside the DEFERRED
  curve (D-A9-2) — a lens pricing the stated dip harder because it is now
  packet-visible: adverse −0..−2 beyond §3's deferral price.
- purity: the widened census may surface literals K5's whitelist classifies
  structural that the lens prices as content (A-C009-4 disagreement class, live
  since a3): adverse −0..−4, assumptions printed (depends on how many per-literal
  classifications the return disputes; a8 disputed none by name, priced scope only).
- reusability: the DLC preset's field-effect table invites per-field probing
  beyond the enumerated set — an unenumerated subject-bearing field found by the
  lens prices as a coverage miss: adverse −0..−3.
- readability: the derived shaft-pair census (§2) states its scope; a priced
  surface from a pair class the derivation omits files as COVERAGE — adverse
  −0..−3 if the return prices routing on a non-derived body (e.g. the graph path
  as a "shaft" over markers in FIG.20/24, a class this plan's derivation DOES
  include for connectors/leader/graph segments — the residual is bodies outside
  those three families).
Central route (for the seat's arithmetic, not a forecast fed anywhere): K1+K2+K4
carry reusability 68 → 78–84; K3 carries readability 76 → 79–83; K5 holds purity
82 → 82–86; motion flat-to-+1 on K3-adjacent surfaces only; timing flat 83 under
D-A9-2. Route total ≈ 415–425 / 83.0–85.0 — PASS sits at the route's top edge and
requires the reusability leg to land near-fully; the adverse scenario (K1 shared-
surface regression, §6 top point) totals ≈ 385–395 / 77–79, non-beating, and is
the branch §7 exists for.
