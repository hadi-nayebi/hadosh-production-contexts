# Plan — T23 comic chapter map · Attempt 11 (practice Cycle 026, Wave 25)

Plan agent product under practice INSTRUCTION §2. Governing prior: attempt 10 = **65.2 avg**
(62 motion / 66 timing / 77 purity / 61 reusability / 60 readability), min 60, delta −11.8 vs
attempt 9 (77.0). Trajectory a8–a10: 81.6 → 77.0 → 65.2 (decay — this is a recovery attempt).
Bar: avg ≥ 85.0 AND min ≥ 70. Evidence read firsthand for this plan: scores.md Attempt 10
filing in full (WHY + scaffold outcome slots), all five attempt-10 lens returns
(`codex/attempt-10/lens-{motion,timing,purity,reusability,readability}.md`),
`build-record-attempt10.md`, RUN.md §1 (seat Observe), and the current `recreation.html`
structure via capped probes (CONFIG/labels/geometry/approach-entry sections; bounded_probe_discipline
observed — every probe capped in code ≤6000 chars, 0 breaches).

## Cure plan — convergent-lens first (Amendment A1 order)

### C-11-01 · Wrapper transform reset on approach entry — CONVERGENT (motion −18, timing −16)
The a10 headline regression interaction: C-10-16 moved the approach transform from `zoomwrap`
to `gridEl` (masthead cure, landed), removing the side effect that used to overwrite the dive
endpoint transform on `zoomwrap` every appearance. Nothing now resets `zoomwrap` on approach
entry; the pause branch that clears it never runs at defaults (hold/pause 0), so every
appearance after the first — including cycle wrap — starts under the previous dive's zoom.
**Construction change:** approach entry becomes a single named entry act that (1) resets
`zoomwrap` to identity, (2) releases/hides any cut overlay, (3) applies the approach pose —
in that order, before the grid is revealed. The reset lives in the entry path itself, not in
any conditional branch (pause/hold), so it fires at every default and configured rhythm.
Companion (motion −5, partial): the entry pose and the dive share one camera-pose function —
the approach no longer scales `gridEl` alone about its top-left while the masthead stays
fixed; entry and dive interpolate through the same pose the resolved rectangle (C-11-02)
defines. Priced as partial: +3 of the −5 (see delta route).

### C-11-02 · One resolved rectangle — model, detail selection, and camera — CONVERGENT (motion −7, purity consolidation ask, reusability, readability detail residual)
a10 priced the split three ways: the camera's DOM-refined rectangle omits the tab overlap
and the 5px in-flow completion bar (motion −7: final dive can centre too low / show the bar);
purity: model and DOM geometry diverge (assembled-text policy call in `resolvedArtRect`,
overlap omitted from the DOM band); readability: detail is chosen before DOM refinement and
before the bar, so a measured tab-mode change can leave the wrong detail treatment.
**Construction change:** ONE resolved-rectangle function is the sole geometry source —
it accounts for border, tab band, tab overlap (`tabOverlapPx`) AND the completion bar's 5px
in-flow height for completed panels — and its single output record is consumed by (a) the
pure model, (b) miniature detail selection, and (c) the camera endpoint (`diveTransform`).
The model's label-policy call inside the rectangle passes number and title as separate parts
(the parts-based policy the DOM already uses), never the assembled text — closing the
C-10-02 residual. DOM refinement may refine the tab's measured mode, but it writes back into
the same resolved record before detail selection and before any camera use in that render;
no second rectangle is computed anywhere. Detail selection therefore runs on the final
resolved height (discharging C-10-14's survivor).

### C-11-03 · Label construction family change — readability GEOMETRIC floor (A-C011-3 escalation form)
Readability 60 is a proved geometric plateau, not a wiring miss (a10 WHY §2, falsifier run):
at 240px the panel interior is 58.67 × 35.01px; the tab budget is 65% × 35.01 = 22.76px;
two label lines at the 11px floor need 32.5px (2 × 11 × 1.25 leading + padding/border).
All 12 tabs are number-only at 240–309px; panel 07 stays number-only to 337px; titles
survive only from 338px. **No re-tune of counting, fraction alone, or floor is attempted —
that is the prohibited third proxy re-tune under A-C011-3.**
**Construction change — new family: the compact stacked tab on a tall-panel phone regime.**
1. The tab is rebuilt as an explicit two-line BLOCK construction: line 1 = panel number +
   first title part, line 2 = remaining title part, each line its own block span with its
   own leading token (`typography.tabLineHeight` re-based for the tab block: 1.25 → 1.02),
   zero vertical tab padding in the phone regime, and the tab border counted exactly once.
   Two-line height under the new construction: 2 × 11 × 1.02 + 1 = **23.44px** (was 32.5px).
2. A phone-regime panel aspect (a layout regime keyed to stage width, beside the existing
   responsive column regimes) raises panel interior height at ≤360px so the UNCHANGED 65%
   budget covers the new construction: required interior ≥ 23.44 / 0.65 = **36.1px**;
   the regime targets interior height ≥ 38px at 240px (budget 24.7px ≥ 23.44px, margin 1.26px)
   and is identity (no change) at widths where titles already survive (≥338px behaviour
   preserved as a regression guard).
3. The fallback changes family with it: when even the compact construction cannot fit a
   title at the floor, the fallback is a single-line title at the floor inside the same
   block (never silent number-only as the first resort); number-only remains only as the
   terminal fallback and its use at 240/338/360 is asserted per panel in the own-checks.
**Feasibility gate (A-C011-4):** Execute Stage 3 opens by filing the measured feasibility
table (interior H, budget, two-line height under the new leading, per width 240/338/360,
all 12 panels) BEFORE the family is bound; if the measured interior cannot reach 36.1px
without breaking the layout feasibility mirror, Execute stops, files a mid-cycle premise
amendment (A-C008-1), and the seat re-plans — it does not re-tune the old family.
Perception risk is priced, not hidden: 1.02 leading at 11px is compact; if the readability
lens prices it as cramped/illegible the gain collapses (see failure points + delta route).

### C-11-04 · Scheduler reconciliation — applied dive and its cycle stay together (timing −6, motion −3 shared)
Timing: tick advances cycle bookkeeping while `activeStep` is still the outgoing dive under
a pending overlay (duplicate-cut key risk at wrap); the skip cursor advances before apply;
a separate post-render path can advance away from a dive without claiming its endpoint.
**Construction change:** one reconciliation path — a pending transition carries its dive +
scheduled cycle key as one record; bookkeeping, skip accounting, and endpoint claiming all
resolve through that record at flush, in that order; no second path advances phase state.
Companion (motion −3 / timing −3, the pause pose jump priced in both returns): pause records
the last DRAWN elapsed (the pose on screen), not click-time elapsed; resume re-bases from
the drawn pose. Priced partial (+2 of −3 per lens) — callback lateness is not curable in source.

### C-11-05 · Transactional validation at the resolveConfig level (reusability headline; purity −6 shared surface)
a10's both-routes corpus passed at the `validateInto` level while the lens's
`resolveConfig`-level probes found the survivors — the corpus priced the wrong layer
(a10 WHY §3: wiring miss by the scaffold's own definition). Survivors to cure, by name:
cfg: route targeting a null group throws before validation · direct-CONFIG string-typed
values (`layout.paddingPx`, `stageMaxPx`, appearance indices) diverge from URL coercion ·
appearances list displaces a valid `filled` route's schedule before index repair ·
registryMap entry displaces a same-URL registry override · restored registry entry leaves
its panel bound to the fallback kind · mixed valid/invalid primitives commit a partial
miniature · snapshot baseline is the shipped (edited) CONFIG by construction ·
exported `PRIM_KINDS` array is mutable.
**Construction change (carries A-C024-1's separation to completion):** (1) trusted defaults
live in a canonical baseline object built independently of the editable CONFIG (not a
snapshot of it), deep-frozen, unreachable from the edit surface; (2) BOTH routes normalise
(coerce/trim/type) into a staged candidate FIRST — group existence is established during
normalisation, before any member is inspected, so a null group can never throw; (3) the
candidate commits atomically only after validation + dependent-reference resolution
(appearances↔filled, registry↔registryMap↔panel bindings) succeed against the accepted
set — a rejected replacement never displaces an accepted one; (4) `PRIM_KINDS` is frozen
at its single home. The own-check corpus for this cure runs at the `resolveConfig` level
(the layer the lens prices), not at `validateInto`.

### C-11-06 · Purity consolidation set (purity −17 in a10, named findings)
(a) **Per-kind field contract:** one shared per-kind contract table consumed by BOTH the
validator and the renderer (a10: grid `stroke` accepted by validation, applied divergently
by rendering); the dead `detail.fallbackNodeRadius` is removed or made reachable under an
explicit optional-radius rule — no unreachable CONFIG leaf survives the census.
(b) **Header policy gate on the measured path:** DOM refinement honours `headerBreak`
exactly as the model does (no wrap under `normal` — the C-10-15 survivor priced by purity
AND readability), and a wrap-mode header whose measured height exceeds its modelled height
triggers the growth check even after horizontal overflow clears (readability's second gap).
(c) **Bounded presentation state:** presentation history / dive deduplication is scoped to
the active cycle (purity: an unattended loop currently accumulates state until restart).
(d) Runtime operating literals named by purity (overlay stacking offset, reset frame,
validator acceptance limits) are either moved behind CONFIG or printed per-literal as
structural in the build record under A-C009-4 — no silent middle state.

### C-11-07 · Completed-target distinct cue on the final appearance (readability)
On the final grid all 12 panels are complete and panel 12 carries no distinct visible cue
identifying the dive destination before the dive. **Construction change:** the target mark
for a completed target reserves its own strip (the target outline/mark gets a reserved,
art-independent channel — alongside the face tint, tab state, and completion bar asserted
in a10 — that survives the panel being completed), asserted in the occlusion-pair
enumeration for the final appearance's grid state.

## Deferrals — each priced under EVERY lens that can see the beat (A-C009-3)

- **D-11-1 · Chapter-scene content at the cut (sustained chapter playback).** Still deferred:
  the cut-held overlay remains a re-rendered miniature + cut signal; consumer takeover at
  the signal is the production form. Risk: motion −5 (already priced inside a10's 62; no
  further loss expected, no gain claimed) · timing −0..−2 (deferred flush consumes approach
  time — partially mitigated by C-11-04's single reconciliation path, not cured) ·
  purity −0 (the signal/handoff form is the named production use) · reusability −2..−4
  (a separate scene still needs cut-callback integration) · readability −0 (no label or
  glance surface involved).
- **D-11-2 · Rendered/pixel evidence.** Route hunt re-runs at Execute Stage 0; until a
  route exists PIXEL-UNVERIFIED stands. Risk priced as a CAP, not a cure: readability
  −0..−8 adverse (its perception pricing of the new 1.02 leading cannot be pre-verified) ·
  motion −0..−3 (painted endpoint / cut-frame visibility unverified — A-C020-2's assertion
  is source-level) · timing −0..−2 (displayed frame counts unverified) · purity −0 ·
  reusability −0..−2 (rendered consequences of settings unverified). NOT-VERIFIED list
  carried verbatim from a10 (panel 07 title survival rendered · tab/art containment
  rendered · header containment rendered · miniature recognition rendered ·
  completed-vs-target glance rendered · settled + dive-end frames rendered · painted
  endpoint presentation).
- **D-11-3 · Per-appearance timing overrides.** Still deferred (middle appearance only
  evidenced — A-C006-1: no segment evidence binds per-appearance values). Risk:
  reusability −6..−9 of its residual (global-only durations remain a production boundary;
  this deferral is what caps C-11-05's route at 82 — see delta route) · motion −0 ·
  timing −0 (the evidenced basis is the global 365+335 allocation; no lens has priced
  per-appearance values as missing) · purity −0 · readability −0.
- **D-11-4 · Basis A preset (flash→hold→dive interpretation).** Still deferred; Basis B
  (continuous 700ms window, 365+335) binds — no a10 lens re-opened it. Risk: timing
  −0..−2 (curve unverifiability already priced; the split itself was accepted) ·
  motion −0 · all other lenses −0 (no return prices the basis).
- **D-11-5 · Irregular grid / arbitrary completion membership / extra breakpoints.**
  Still deferred (uniform row-major grid, prefix completion — specimen-faithful forms).
  Risk: reusability −4..−6 of its residual · motion −0 (the specimen IS a uniform grid) ·
  timing −0 · purity −0 · readability −0..−1 (no priced finding names grid irregularity).

## Failure-point evaluation — guards/jev-plan-exit.md §2.4, priced per item (T23)

- **(a) Big-rebuild attribution risk — PRICED, live.** Seven cures, three of them structural
  (C-11-02 one rectangle, C-11-03 label family, C-11-05 transactional validation). A lens
  regression cannot be attributed cure-by-cure without staging: the Execute checklist is
  staged one cure-family per stage with create-once checkpoints (A-C010-1a/A-C012-4 gate
  in the Verify checklist); any stage whose checkpoint is missing caps attribution at
  BUNDLED and prints the deviation. Residual risk stands even with staging: C-11-01 and
  C-11-02 both touch the camera path, so a motion regression inside stages 1–2 prices
  BUNDLED between them — accepted, printed here in advance.
- **(b) Cure interaction — PRICED, this item's founding failure class.** a10 WAS a (b)
  failure (C-10-16 × the un-reset wrapper). Named interactions for a11: (i) C-11-03's
  phone-regime aspect change alters panel geometry → C-11-02's resolved rectangle MUST be
  computed from the new regime (stage order enforces: rectangle stage before label stage,
  label stage re-derives from the rectangle, never parallel edits); (ii) C-11-03's taller
  panels change stage height → approach/dive poses re-derive from the same rectangle
  (C-11-01's shared pose), timing's 365+335 allocation is duration-only and unaffected;
  (iii) C-11-05's atomic commit changes startup ordering → self-start assertion
  (A-C010-2) re-run on the final source; (iv) C-11-07's reserved strip consumes panel
  interior → it is INSIDE C-11-02's rectangle accounting, not an after-the-fact offset
  (the a10 bar defect was exactly an un-accounted in-flow element).
- **(c) Prior-attempt overwrite / early comparison re-point — RULED OUT by construction.**
  Preservation baseline is machine-written before any mutation (this plan's §Preservation
  record); `recreation-attempt-10.html` is a create-once CONTENT copy (A-C004-1/A-C005-1);
  comparison re-points only after the final own-check suite passes, verified after.
- **(d) Anchor leak — PRICED, controlled.** Prior scores exist in this plan and in
  scores.md; the Verify checklist's payload discipline (A-C005-2 allowlist, anchor scan
  incl. source comments per A-C008-4, per-lens scratch cwd per A-C021-1, session-scope
  print per A-C019-2) is the control. The seat tasking — never a lens payload — names the
  attempt number and the bar only, never the prior average.
- **(e) Instrument-change misread — RULED OUT.** Both attempts are the five-lens
  instrument (motion/timing/purity/reusability/readability); the delta 65.2 → a11 is a
  same-instrument comparison, printed with lens counts anyway at filing.
- **(f) Wave fan-out cross-contamination — RULED OUT for this item.** One item per
  artifact directory (§8 per-item rule); this plan writes only T23's artifact, this run
  directory's plan file, and T23's scores.md scaffold. Lens sessions run in per-lens
  scratch cwds containing only that lens's allowlist copies (A-C021-1).
- **(g) Size-split evasion — PRICED.** This plan is cure-scoped, not a rebuild-from-scratch:
  the engine, registry, and CONFIG surface stand; seven cures in eight stages. The split
  trigger is named in advance: if C-11-03's feasibility gate fails, the label family splits
  OUT of attempt 11 (attempt proceeds on C-11-01/02/04/05/06/07 and files its WHY against
  the reduced scope) rather than the whole attempt ballooning into a layout rebuild.

## Delta arithmetic — the honest route to ≥85.0 / min ≥70

Prior sum 326 (62/66/77/61/60). PASS needs sum ≥ 425 (**+99 lens-points**) and every lens ≥ 70.

| Lens | Prior | Target | Δ | Route (gross recovery − haircut) |
|---|---|---|---|---|
| Motion | 62 | 86 | +24 | +18 wrapper reset (C-11-01, the lens's own priced deduction, mechanically specified) +7 one rectangle (C-11-02) +3 shared entry pose (C-11-01 companion, of −5) −4 haircut: cut substitute −5 stands (D-11-1), pause residual −2 stands (C-11-04 partial) |
| Timing | 66 | 84 | +18 | +16 wrapper reset at wrap (C-11-01) +4 reconciliation (C-11-04, of −6) −2 haircut: callback lateness / cut-consumes-approach residue (D-11-1/D-11-2) |
| Purity | 77 | 88 | +11 | Consolidation set C-11-06 + C-11-02's shared rectangle/policy: the four named findings (header gate, geometry split, per-kind contract + dead fallback, bounded history) are the whole priced surface except runtime literals, which C-11-06(d) dispositions; −12 residual stands (residual literals/review machinery) |
| Reusability | 61 | 82 | +21 | C-11-05 transactional validation at the priced layer + C-11-06(a) contract: the return's first three sections (route divergence, baseline, rejected-replacement displacement) are the bulk of the 61; capped at 82 BY the deferrals — per-appearance timing (D-11-3) and grid/membership architecture (D-11-5) are priced inside the residual and are NOT cured |
| Readability | 60 | 85 | +25 | C-11-03 family change: title survival at 240px for all 12 panels is the lens's headline defect (its own sweep: ALL titles dropped 240–309px) + C-11-06(b) header gate + C-11-02/C-11-07 (detail from final rect, completed-target cue). **This is the route's weakest leg, stated plainly:** it requires the lens to credit the compact leading (1.02) as legible with no pixel evidence (D-11-2). If the lens prices the leading as cramped, readability lands ~74–80: the attempt still beats 65.2 but FAILS the bar, and the WHY + jev-plateau evidence (below) is pre-filed for exactly that outcome |

Sum at targets: 86+84+88+82+85 = **425 = 85.0 exactly, min 82**. There is no slack in
this route: every target must land. The plan does not claim slack it does not have —
a single lens missing its target by >0 with no compensating over-delivery elsewhere
means FAIL (beating, if the other routes land), and the scaffold's slots file that outcome.

## Execute checklist (INSTRUCTION §3 — Execute follows this item by item)

- [ ] E0 · Stage 0 re-observation, no construction: render-route hunt re-run (outcome
  verbatim; PIXEL-UNVERIFIED stands if not found) · segment basis re-confirm (Basis B) ·
  label feasibility pre-measurement on the CURRENT source (interior/budget identity at
  240/338/360) · predecessor probes for C-11-01 (recurring-appearance transform state)
  and C-11-02 (model vs DOM rectangle divergence per panel) filed as expectations.
- [ ] E1 · Stage 1 — C-11-01 wrapper reset + shared camera pose on approach entry.
- [ ] E2 · Stage 2 — C-11-02 one resolved rectangle (overlap + bar accounted; parts-based
  policy inside the rectangle; detail + camera consume the single record).
- [ ] E3 · Stage 3 — C-11-03 label family: feasibility table FIRST (gate above), then the
  compact stacked tab + phone-regime aspect + fallback family change.
- [ ] E4 · Stage 4 — C-11-04 scheduler reconciliation + pause drawn-pose resume.
- [ ] E5 · Stage 5 — C-11-05 transactional validation (canonical baseline, normalise →
  stage → resolve dependents → atomic commit; PRIM_KINDS frozen).
- [ ] E6 · Stage 6 — C-11-06 purity consolidation (per-kind contract, header gate on the
  measured path + wrap-growth check, bounded history, literal disposition).
- [ ] E7 · Stage 7 — C-11-07 completed-target reserved cue strip (inside C-11-02's
  accounting; final-appearance grid asserted).
- [ ] E8 · Stage 8 — full own-check suite on the final sha · A-C008 legs · payload
  manifest · comparison check (re-point only now, only if the interface changed; the
  ORIGINAL side never changes) · preservation re-verification after the working file's
  first overwrite (already owed at E1 under A-C004-1, re-confirmed here).
- [ ] Every stage: checkpoint filed create-once BEFORE the next stage opens (Verify
  checklist names the paths); a stage begun without its predecessor's checkpoint is a
  printed deviation and caps attribution at BUNDLED (A-C012-4).

## Verify checklist (INSTRUCTION §5 — the wave, again)

- [ ] V1 · Staged checkpoints (A-C010-1a + checkpoint gate A-C012-4): for each stage K,
  `checkpoint-attempt11-stageK.html` (CONTENT copy, inode ≠ working file, sha frozen at
  filing) + `own-checks-attempt11-stageK.txt` in the artifact directory; seat reads file
  order/times against the stage sequence before the wave fires; delta-form checkpoints
  (a10's deviation) are NOT used — full content copies or a printed deviation per stage.
- [ ] V2 · Own-check suite asserts DISPLAYED state (A-C004-2/A-C008-2), including:
  wrapper transform = identity at approach entry for appearances 2, 3 AND cycle wrap
  (displayed state, not code presence) · one-rectangle identity: model rect == detail
  rect == camera rect for all 12 panels × 240/338/360, incl. overlap + 5px bar ·
  wrapped states enumerated (A-C006-3): masthead wrap states, tab two-line wrapped
  states, wrap-mode header growth case · presented endpoint (A-C020-2): dive endpoint
  painted before reset at hold/pause 0 · self-start (A-C010-2) · occlusion pairs at
  hold checkpoints incl. completed-vs-target (A-C019-1 complete pair set or printed scope).
- [ ] V3 · New label family legibility model (A-C003-3 containment AND legibility,
  source-bound): at 240/338/360px — all 12 titles present in the model (no number-only
  except a named terminal-fallback panel), every label line ≥ 11px floor, two-line block
  height ≤ 65% budget identity recomputed from the NEW construction's own tokens,
  containment (rects inside stage) at all three widths. PIXEL-UNVERIFIED printed.
- [ ] V4 · Effect/consumption assertions: A-C002-1 effect mappings + A-C006-2 per-CONFIG-key
  consumed-effect census on the NEW source (incl. the new regime/leading keys; the removed
  or repaired fallback leaf accounted) · A-C008-3 literal census vs build-record whitelist
  (A-C009-4 per-literal structural prints) · validation corpora at the resolveConfig level:
  A-C011-2 adversarial set + A-C021-3 magnitude sweep (400-nines class per numeric field) +
  A-C022-1 direct-edit path (each field class corrupted in source) + the a10 survivor cases
  by name (null-group cfg:, string-typed direct values, filled/appearances displacement,
  registryMap displacement, partial-primitive commit).
- [ ] V5 · A-C008 pre-scoring legs on the NEW source (non-skippable, before the wave):
  `fit-table-attempt11.md` + `config-census-attempt11.md` in the artifact directory
  (census against attempt 11's own CONFIG), paths + hit counts cited in RUN.md §5 ·
  CSS-parse leg (A-C012-3) on the new stylesheet.
- [ ] V6 · Payload manifest + anchor scan (A-C010-1c, A-C008-4): 
  `payload-manifest-T23-attempt11.md` in this run directory — exact allowlist (neutral
  recreation source + neutral own-check packet: check names/results, no cure
  interpretation), exclusions printed, assembled-payload anchor scan INCLUDING the
  source's own comments, filenames and labels; a contaminated source is neutralised
  (comments only, suite re-run) before payloads are generated.
- [ ] V7 · Score-blind firing discipline (A-C005-2 · A-C019-2 · A-C021-1 · A-C021-2 ·
  A-C022-2): per-lens scratch cwd containing ONLY content copies of that lens's
  allowlisted packet (byte-identical to the fed payload) · sessions fired with
  `--skip-git-repo-check` · NO prior scores, RUN.md, scores.md, prior returns, target
  scores, or cure-to-lens commentary in any payload or session scope; each session's
  read scope printed in the firing record (A-C019-2) · returns via the A-C007-2 form:
  Codex `-o` to a /tmp path first, then content-copied to the create-once destination
  under `codex/attempt-11/` with sha256 verified identical to the `-o` original
  (A-C021-2); a stdout-captured return, where the /tmp form is unavailable, is filed
  with its capture bound printed and hash-filed before consumption · every firing's
  payload + return preserved CREATE-ONCE before any subsequent source change (A-C003-1),
  interim firings at run-tagged paths · the seat computes the delta; lenses never see it.
- [ ] V8 · Mechanical guards (guards/guards.md): delta arithmetic recomputed from the
  filed returns · attempt-preservation census (baseline + attempt-10 copy shas re-verified
  AFTER the build) · floor-rule gate check: if a11 ≤ 65.2, the WHY files from the
  pre-drafted scaffold before close and `jev-plateau` fires at §5.4.
- [ ] V9 · Filing: scores.md Attempt 11 (scores · average · minimum · signed delta ·
  verdict · WHY if owed) appended; cure→check mapping lives only in the seat's filing.

## Preservation record (this plan's act — §2.3, A-C003-2/A-C004-1/A-C005-1)

Machine-written baseline: `preservation-baseline-T23-attempt11.txt` in this run directory
(sha256sum over `recreation.html`, `comparison.html`, `scores.md`, and all
`codex/attempt-10/` files, captured in ONE write-first exec invocation; hash-format and
count validation printed in the Plan agent's report). `recreation-attempt-10.html`:
content copy of the pre-build `recreation.html`, create-once — if it already exists it is
never overwritten; sha equality verified after copying (status in the Plan report).

## Addendum — plan-review consumption (Cycle 026)

Filed by the Execute agent BEFORE any build mutation, per RUN §2a. All five findings of `codex-plan-review-T23-return.md` (verdict: REVISE BEFORE EXECUTE) are disposed here; where a disposition changes the plan body, this addendum governs.

- **Finding 1 — A-C011-4 feasibility gate is BINDING (governs C-11-03, E3, and failure point (g)).** Stage E3 opens by measuring the CANDIDATE label construction for all 12 panels at 240/338/360px — per panel: interior height, 65% budget, two-line block height under the candidate construction, line-fit (each line's estimated width at the 11px floor vs interior width), and containment (panel + tab rects inside the stage). The family is bound ONLY if every panel passes at all three widths. On ANY failure: Execute STOPS the label stage, files a premise amendment in the build record, and re-plans a reduced scope with a revised delta route BEFORE proceeding — failure point (g)'s "attempt proceeds on six cures" is superseded by this stop. Regime-overlap resolution: the phone regime applies at stage widths ≤360px; the ≥338px "identity" guard is an OUTCOME guard (titles that survive at 338/360 under the old construction must still survive, with no number-only regression), not a pixel-identity guard — the regime only adds interior height at 338/360, so survival is preserved by construction and asserted in the table. E0's current-source measurements are the baseline only; they do not discharge this gate.
- **Finding 2 — WHY scaffold in the reviewable record.** The scaffold stands in scores.md (Attempt 11 scaffold, appended at Plan close: seven cure outcome slots C-11-01…07, five deferral slots D-11-1…5, the falsifiable stuck-lens hypothesis, and the jev-plateau evidence list). The build record (build-record-attempt11.md) RESTATES all seven cure slots + the stuck-lens hypothesis + plateau evidence block with observed outcomes filled, so the reviewable record for this attempt is self-contained. V8's plateau trigger stands unchanged: WHY + jev-plateau disposition owed iff attempt-11 average ≤ 65.2.
- **Finding 3 — Execute/Verify gaps closed.** Verify gains direct assertions, all filed in the stage/final own-checks: (i) cycle-key pairing at wrap (the presented/cut key's cycle component equals the scheduler's cycle index at wrap), (ii) skip accounting at apply (skipped steps are logged once, never replayed, and the skip cursor resolves through the single reconciliation record), (iii) drawn-pose pause/resume continuity (resume re-bases from the last DRAWN elapsed; pose jump measured and asserted below one frame of dive progress), (iv) ALL EIGHT C-11-05 survivors by name (null-group cfg: throw · direct string-typed divergence · filled/appearances displacement · registryMap displacement · restored-registry panel binding · partial-primitive commit · baseline-from-edited-CONFIG · mutable PRIM_KINDS), (v) restored registry-to-panel binding, (vi) canonical-baseline independence from the edited CONFIG, (vii) PRIM_KINDS immutability (frozen; mutation attempt is a no-op/throw in strict terms and the list is unchanged). Readability re-price rule: if ANY panel falls back to number-only at 240px in the final model, the +25 readability route is re-priced in the build record (per-panel deduction printed) BEFORE the wave fires — the route may not silently assume all-12 survival.
- **Finding 4 — Preservation checks at E1, before first mutation.** E1 opens with: baseline re-verification (preservation-baseline-T23-attempt11.txt, 15/15 hashes) AND recreation-attempt-10.html sha equality against the baseline's recreation.html hash (79f89c06…), inode distinct from the working file. Only after both pass does the first source mutation land. Immediately after the working file's first overwrite, the same two checks re-run and file in the stage-1 own-checks. V8's final preservation census stands at E8. (Executed at this cycle: pre-mutation check PASSED 15/15, attempt-10 copy sha-identical, inode distinct — recorded in build-record-attempt11.md.)
- **Finding 5 — Recovery ledger reconciled.** C-11-04's pause recovery (+2 per lens, motion and timing) is counted EXACTLY ONCE per lens, inside C-11-04's own route line — it is NOT also inside C-11-01's numbers. Motion row restated: gross +18 (wrapper) +7 (rectangle) +3 (shared pose) +2 (pause, via C-11-04) = +30, haircut −6 (cut substitute −5 stands as a DEFERRAL price already embedded in the prior 62 — it is not deducted twice; the −6 haircut is: residual interaction risk −4 + callback/paint residue −2) → net +24 → 86. Timing row restated: gross +16 (wrapper at wrap) +4 (reconciliation) +2 (pause, via C-11-04) = +22, haircut −4 (callback lateness + cut-consumes-approach residue) → net +18 → 84. Deductions already embedded in the prior scores (the priced deductions the cures recover) are distinguished from haircuts (discounts on recoverable points) in the build record's ledger table. The readability downside stands printed: readability 74–80 → total 414–420 → average 82.8–84.0 — a beating FAIL, not a PASS; the plan does not claim otherwise.

### Premise amendment — A-C011-4 gate outcome (filed at Execute Stage 3, binding)
The plan's candidate construction (two-line block, leading 1.02, padY 0, aspect 1.40, UNCHANGED width tokens) was measured for all 12 panels at 240/338/360 BEFORE binding: **GATE FAILED at 240px** — the binding constraint is WIDTH, not height (two-line height 25.44px ≤ budget 25.75px passes; the longest split line at the 11px floor exceeds the 58.67px interior for 11 of 12 panels). Per Finding 1 the bind STOPPED. Re-planned candidate v3 (phone regime ≤360px only): aspect 1.15 · up-to-3-line compact block (splitLinesNT, number may stand alone on line 1) · chrome 6px · fraction 0.75 · leading 1.02 · padY 0 — measured in simulation on the current model: **GATE PASSES, all 12 panels, all three widths, containment holds.** Revised delta route: readability target re-priced 85 → 80 (+20: three-line compact at 240px is a weaker legibility claim than the planned two-line); total target 425 → 420 (avg 84.0) — PASS now requires over-delivery on another lens; the downside print stands (readability 74–80 → avg 82.8–84.0, beating FAIL). All other cures proceed as planned.
