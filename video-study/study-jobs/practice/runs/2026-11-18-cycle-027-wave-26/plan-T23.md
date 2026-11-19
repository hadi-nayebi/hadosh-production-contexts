# Plan — T23 comic chapter map · Attempt 12 (practice Cycle 027, Wave 26)

Plan agent product under practice INSTRUCTION §2. PLAN ONLY — this file builds nothing,
edits no `recreation.html`, and fires no scoring lens.

**Governing prior (attempt 11, Cycle 026): avg 70.0** — motion 74 · timing 79 · purity 67 ·
reusability 64 · readability 66 — **min 64 (reusability)**, signed delta +4.8 vs attempt 10
(65.2), verdict FAIL (beating, below the bar). **Bar for attempt 12: avg ≥ 85.0 AND min ≥ 70.**
Trajectory: a9 77.0 → a10 65.2 → a11 70.0. This is the second recovery attempt; a11 recovered
the camera/scheduler route (+12/+13 on motion/timing) and lost ground on the
validation/geometry-consolidation surface (purity −10, reusability +3 only, readability +6
only). Attempt 12's centre of gravity is therefore the consolidation layer a11 claimed but
did not finish — every headline cure below is a11's own filed Next-attempt difference,
priced from the a11 lens returns, not a new invention.

**Evidence read firsthand for this plan:** INSTRUCTION §1–§2 + §5 (incl. amendments
A-C002-1, A-C003-2, A-C004-1, A-C005-1, A-C006-1/-2/-3, A-C008, A-C009-3, A-C010-1,
A-C011-2/-3/-4, A-C012-4, A-C014-1, A-C026-2) · scores.md Attempt 11 filing in full
(scores, cure outcome slots, deferral slots, Next-attempt difference §(1)–(4)) ·
all five attempt-11 lens returns (`codex/attempt-11/lens-{motion,timing,purity,
reusability,readability}.md`) · the Cycle-026 plan (`plan-T23.md`, incl. its plan-review
addendum + A-C011-4 premise amendment) · `guards/jev-plan-exit.md` §2.4 ·
RUN.md §1/§1a of this cycle (pool, picks, Codex Observe corrections — T23 items:
baseline generated at the FINAL stage + completeness assertion; rectangle cure = both
layers use the SAME completion + band rules).

---

## Quantitative anchors re-observed (A-C006-1) — conflicts resolved against the evidence

A cure below carries quantitative anchors only where listed here. Each anchor was
re-observed against identifiable evidence (the a11 lenses' executable probes on the
filed a11 source, sha `0f304609…f436`, and the timing lens's segment-marker evaluation);
conflicts are resolved against that evidence and filed here, per A-C006-1.

1. **Timing allocation — NO CONFLICT, Basis B re-confirmed.** Shipped: approach 365 ms +
   dive 335 ms per appearance, cycle 2,100 ms, hold/pause 0. The a11 timing return
   evaluates the segment markers as implying a 366–400 ms approach and a ≈334 ms dive
   (700–734 ms window) and credits the shipped split ("the 365/335 ms split and the
   2,100 ms cycle are sound in the source model"; dives begin 365 / 1,065 / 1,765 ms,
   cuts due 700 / 1,400 / 2,100 ms). No re-anchor is taken. Basis A stays deferred
   (D-12-4); see the A-C014-1 pricing in the deferral block — no both-bases dispute is
   fed to the a12 lenses, because the a11 wave itself settled the basis.
2. **Label budget at 240 px — CONFLICT, resolved against the DOM/executable evidence.**
   The a11 plan's premise amendment claimed the v3 label family "GATE PASSES, all 12
   panels, all three widths" on the model identity: interior band 49.97 px, three-line
   block minimum 3 × 11 × 1.02 + 3 = **36.66 px**, budget 49.97 × **0.75** = **37.48 px**
   (model fraction `maxTabHeightFractionPhone`). The a11 readability return's executable
   probe of the shipped source establishes that the DOM refinement path tests against
   49.97 × **0.65** = **32.48 px** (the desktop fraction token) — so **all 12 modelled
   tabs fail the DOM check at 240 px** and fall to a clipped single line with only
   58.67 − 5 − 6 − 3 = **44.67 px** nominal text width; the model also estimates 6 px of
   phone chrome where the DOM uses 14 px. **Resolution: the DOM's tokens (0.65, 14 px
   chrome) are the governing measurements of what a11 actually displays; the model's
   0.75 / 6 px figures are superseded as feasibility evidence.** Attempt 12 does not
   re-tune either number in isolation — C-12-02 makes the two paths one computation, and
   its feasibility identity must be re-derived from the unified tokens before binding
   (Execute Stage 0 re-measurement, below). Any a12 claim of title survival at 240 px
   made on the 0.75 figure alone is void under this filing.
3. **Resolved-rectangle / target-strip geometry — lens estimate, rule does not depend on
   its exact value.** Motion return, at 960 px: the completed target's 4 px mark strip
   is subtracted from art height but not added to art origin; with the strip accounting
   the actual art starts ≈13 px below the stage top at the dive endpoint (4 × 5.23 px
   scale minus modelled overscan) — filed by the lens itself as "a geometry estimate,
   with the visible edge still unverified" (PIXEL-UNVERIFIED). The construction rule in
   C-12-01 (strip inside the origin, one record) is independent of whether the rendered
   figure is 13 px; the own-check asserts the source-level identity, not the estimate.
   Companion anchors from the readability return: art-detail threshold 30 px; modelled
   art height at 240 px is only **8.31 px** (49.97 − 36.66 tab − 5 bar); the single-line
   DOM fallback frees ≈22.4 px against the modelled block — which is why detail
   selection must run on the FINAL (post-refinement) rectangle (C-12-01), not the
   pre-refinement one.
4. **Validation probe anchors (lens-reproduced, govern C-12-03/C-12-04 test cases).**
   Reusability/purity probes on the a11 source: direct edit `CONFIG.approachMs = 120000`
   warns "reset" yet returns 120000, while the URL route returns 365 for the same field;
   resetting a malformed `progress` group drops `targetMarkStripPx` from the restored
   group; the strip accepts **9999 px** (purity probe) and **−12** (reusability probe)
   through the URL without warning; `{filled:14, dive:13}` + `?panelCount=16` resolves
   to `{filled:4, dive:4}` (validated against the pre-growth 12-panel list). These are
   the named regression cases the a12 corpora must reproduce-then-clear.
5. **Masthead (minor).** Readability −2: model header 26 px (two-line) at 240 px /
   18 px at 360 px, both floors 11 px; the wrap-growth marker persists across layouts
   and can suppress a later height-only correction after resize. Priced as a companion
   inside C-12-02 (same model/DOM divergence class), not a standalone cure.

**A-C014-1 (adverse dispute pricing):** no both-bases dispute is fed in attempt 12 —
Basis B is settled by the a11 timing return (anchor 1) and the label-budget conflict
(anchor 2) is an internal model-vs-DOM divergence that C-12-01/C-12-02 eliminate by
construction rather than feed. The adverse scenario is nevertheless priced where a
dispute could re-open: if the unified label computation is NOT in fact consumed by the
DOM path (the a11 failure repeating), the readability lens prices the retained basis
against the build — adverse end **−24 again** (readability ≈66, attempt avg ≈78–80,
beating FAIL at best) — derived from the lens's own a11 deduction, not from the
builder's retained model basis. This adverse price, not the target route, is the
planning assumption for the readability leg's haircut below.

---

## Cure plan — convergent-lens order first (Amendment A1)

Order rationale: convergence count × priced points. C-12-01 is named by four lenses;
C-12-02 carries the wave's largest single deduction (−24) plus two more lenses;
C-12-03/C-12-04 are the resolveConfig layer two lenses price as the reusability floor's
cause; C-12-05 is two-lens; C-12-06/C-12-07 are the motion/timing residuals, each with a
shared companion in the other lens; C-12-08 is single-lens (purity) and last.

### C-12-01 · One resolved rectangle, ONE rule, both layers — CONVERGENT ×4 (motion −8 · purity −8 · reusability · readability −5) — a11 filing difference (2)
a11 landed one rectangle at the model level only. The a11 returns price the surviving
split identically from four sides: the model resolves with the FINAL appearance's
completion count, subtracts tab overlap, and omits the target strip; the DOM camera
record uses CURRENT completion, the full measured tab band, and strip state — and
miniature detail is selected from the pre-refinement model height, with the DOM's later
refined `detailFull` never rebuilding the SVG (readability §4; the cut overlay likewise
uses the modelled height for a full-stage image).
**Construction change:** there is exactly one resolved-rectangle computation and one
result record per (panel, appearance, width): (a) completion basis = the appearance
being rendered (current), used by model, camera, and detail alike — the
final-appearance shortcut is deleted, not parameterised; (b) band basis = one tab-band
rule (measured height including overlap accounting) consumed by all three readers;
(c) the target-mark strip is INSIDE the record: its height is added to the art ORIGIN
as well as subtracted from art height, so the camera's cover check prices the rectangle
that is actually painted (motion's −8 cure, verbatim form); (d) detail selection runs
on the record AFTER DOM refinement, and the SVG for grid + cut overlay is built (or
rebuilt) from that final record — a refined detail decision that changes the class
rebuilds the miniature; no reader computes a second rectangle anywhere. The own-check
asserts record identity (model rect == camera rect == detail rect, all 12 panels ×
240/338/360 × all 3 appearances), not merely coverage.

### C-12-02 · DOM label path consumes the model's split directly — CONVERGENT ×3 (readability −24 · purity −8 shared surface · reusability phone-refinement findings) — a11 filing difference (3)
The a11 readability headline: the model retains 12/12 titles at 240 px as three-line
blocks; DOM refinement re-derives its own decision under different tokens (desktop
fraction 0.65, desktop line cap, 14 px chrome vs the model's 6 px), rejects all 12, and
substitutes a clipped `nowrap` single line — a fallback family (single-line) the plan
never chose as first resort, at a width (44.67 px) where full-title survival is
implausible, panel 07 worst. The scaffold's own falsifier fired on the DOM path; the
a11 filing names this a wiring gap, NOT a plateau.
**Construction change:** the label decision is made ONCE, in the model: split
(`splitLinesNT` output — number/title as separate parts), line count, font size, and
fallback class are fields of the model's per-panel label record, computed from ONE
token set (one phone fraction token, one chrome token, one line-cap token — the DOM
path holds no second copy of any of them). DOM refinement becomes a CONSUMER: it
renders the record's split as emitted spans, measures the ACTUAL wrapped line count of
those spans (A-C006-3 wrapped-state enumeration; `countLines` counts rendered lines,
including internal `pre-line` wraps, not span elements), and may only (i) accept the
record, or (ii) step the font down within the record's own split toward the floor, or
(iii) on measured overflow at the floor, fall to the record's named fallback class —
it may never invent a different split, a different fallback, or a different budget.
Companion (readability −2): the header wrap-growth marker is scoped to a single layout
pass (reset at each layout), so a prior growth cannot suppress a later height-only
correction; `headerBreak: normal` behaviour stays as a11 landed it. Feasibility gate
(A-C011-4, binding, inherited from the Cycle-026 addendum's Finding 1 form): before
this cure binds, Execute re-measures all 12 panels at 240/338/360 on the UNIFIED
tokens — per panel: interior height, unified budget, modelled block height, per-line
width fit at the 11 px floor, containment — and the family binds only if every panel
passes on the tokens the DOM will actually use; on any failure Execute stops, files an
A-C008-1 premise amendment, and re-plans before proceeding (it does not re-tune the
old split).

### C-12-03 · Baseline integrity as ONE act, at the FINAL stage — CONVERGENT ×3 (purity −9 · reusability headline section · readability/reusability strip findings) — a11 filing difference (1)
a11's C-11-05 landed an independent baseline, but three leaks survived at the same
layer, all reproduced by lens probes: (i) `clampInt` resets read the EDITABLE CONFIG
(`CONFIG[key]`) — a direct edit `approachMs = 120000` "resets" to the edited value
while the URL route returns 365 (route divergence at the reset source itself);
(ii) the baseline was generated at Stage 5 and DRIFTED from the final CONFIG —
`progress.targetMarkStripPx` (added by C-11-07, a later stage) is absent from it, so a
group reset silently drops the strip token; (iii) the strip value is unvalidated at
reset/restore: 9999 px and −12 both accepted without warning.
**Construction change:** (a) the baseline is generated from the FINAL source at the
LAST construction stage (after every cure that adds a CONFIG key has landed — the
Cycle-027 Observe correction, verbatim) by a generation step that walks the final
CONFIG and emits the baseline from it mechanically; no hand-maintained baseline
literal survives; (b) EVERY reset path — `clampInt`, group restore, registry restore,
validator fallback — reads the generated baseline only; a source scan asserts no reset
reads `CONFIG[` (the a11 leak's exact shape); (c) the strip (and every baseline key)
passes the same field validation on restore as on intake — range-checked with a
warning on rejection, never silently accepted; (d) **baseline-completeness own-check
(the filing's named assertion): the suite walks the final CONFIG's full key set and
asserts every key exists in the generated baseline with an equal deep value, and the
reverse (no orphan baseline keys); the check runs on the final sha and its key count
prints in the build record.** A baseline generated before the last stage, or a
completeness check asserted on a stage checkpoint instead of the final source, does
not satisfy this cure.

### C-12-04 · Validation ordering + registry preservation at resolveConfig — CONVERGENT ×2 (reusability sections 2–3 · purity shared reset surface)
The surviving half of a11's C-11-05 layer, reproduced fresh by the reusability return:
dependent data is validated against PRE-RESOLUTION state — `{filled:14, dive:13}` is
judged against 12 panels before `?panelCount=16` grows the list, and resolves to
`{4,4}`; a panel bound to a URL-supplied kind is rebound before the URL registry
loads; a mixed valid/invalid registry replacement installs STOCK art over a valid
customised entry (series artwork lost) and can leave a restored entry's panel bound to
the fallback kind; `registryMap` can overwrite a same-request `registry` candidate
before either is checked; restored stock art bypasses active ceilings/palette
(`maxGridCells: 1` still returns the stock 6×4 `tiles`).
**Construction change:** resolveConfig becomes an explicitly ordered pipeline and the
order is the construction: (1) normalise both routes into a staged candidate (group
existence first, as a11 landed); (2) resolve the FINAL panel count and the FINAL
registry (both routes' registry contributions merged under one stated precedence —
a same-request conflict resolves by the printed rule, never by overwrite order)
BEFORE any dependent is inspected; (3) validate dependents (filled/dive/appearances,
panel→kind bindings, fallback binding) against the resolved count + registry only;
(4) registry replacement is preservation-first: a rejected candidate NEVER displaces
the last valid entry — the resolved config retains the working entry and its panel +
fallback bindings as one unit, and a restored/default entry is re-validated against
the ACTIVE palette and ceilings before it is installed; (5) atomic commit, as a11
landed. The corpus for this cure runs at the resolveConfig level (the layer the lens
prices) and includes every a11 reproduction in anchor 4 by name, plus the a10/a11
survivor set as regression cases.

### C-12-05 · KIND_FIELD_CONTRACT dispatch — consumed or removed — CONVERGENT ×2 (purity −7 · reusability) — a11 filing difference (4)
a11 declared the contract and consumed nothing: the table occurs once (its
declaration); `validPrim`/`primSVG` dispatch separately; its grid fields name `w`/`h`
where both consumers use `cellW`/`cellH`; and `detail.fallbackNodeRadius` remains
unreachable because validation requires a positive `nodeR` on every admitted graph —
which also falsifies part of a11's filed consumption census.
**Construction change (one of the filing's two lawful forms, chosen here): CONSUME
it.** The contract becomes the single per-kind field definition — field names,
types, required/optional status, renderer key mapping (`cellW`/`cellH` form) — and
both `validPrim` (validation) and `primSVG` (rendering) dispatch FROM it: a field
not in the contract is rejected by validation and unread by the renderer; a contract
field is validated and rendered under the same name. The graph radius case is
resolved inside the same act: either the contract admits a graph without `nodeR`
and the renderer's fallback radius becomes reachable through the normal route, or
the fallback leaf is deleted from CONFIG and the contract in the same stage — the
decision prints in the build record; a third state (leaf present, route
unreachable) fails the suite. The A-C006-2 consumption census is then re-run with
the contract itself as a walked key set: a contract entry consumed by neither
validator nor renderer is a census HIT, printed, not passed over.

### C-12-06 · One page camera across approach + dive, and a shared drawn-pose clock — CONVERGENT ×2 on the pause companion (motion −7 + −4 · timing pause/release section)
Motion's opening finding: `startApproach` scales only the grid 0.88 → 1 about its
top-left while the masthead stays fixed and the easing starts from rest — the
appearance reads as a grid-only entrance, not the observed cut into an
already-moving camera, weakening the phase C-12-01/C-11-01 spent two attempts
repairing. And the a11 pause cure covered the dive only: `applyCamera` samples
drawn elapsed for dive writes; the approach loop records no equivalent sample, so an
approach pause freezes the last pose while resume re-bases from click time —
skipping ahead, potentially across the approach→dive boundary (timing prices the
same boundary from its side: the recorded timestamp is taken AFTER the pose was
sampled, so even the dive's resume fraction advances by the sampling work).
**Construction change:** (a) approach and dive are one camera: a single page-camera
pose function over the whole wrapper (masthead + grid together) spans both phases,
the approach enters at a NON-ZERO pose velocity continuous with the dive's join at
the full-grid beat (no from-rest grid-only scale about a corner); the wrapper reset
on approach entry (C-11-01, landed) is preserved inside this entry act unchanged.
(b) ONE last-applied-pose record for both phases: every camera write — approach or
dive — stores the elapsed value the pose was SAMPLED at (not the time after the
write), and pause/resume in either phase re-bases from that single record. The
own-check measures the resume pose jump in both phases and asserts < 1 frame of
phase progress.

### C-12-07 · Scheduler reconciliation against the APPLIED phase — timing headline residual (purity −4 shared: duplicate pending-record ownership)
Timing's remaining structural findings, all one mechanism family: `tick` advances
`lastKey`/`lastCycleIdx`/`lastAbsIdx` (last OBSERVED deadline) before the deferred
step is applied, while `activeStep` can remain the outgoing dive — a never-applied
approach can escape the skip log (`logSkipped` starts after the recorded index);
`flushPending` applies whichever phase is due when it runs, so the cut can consume
the following approach (including appearance 1 at wrap) and its `frames: 1` /
`chargedAgainst: "following-approach"` labels are fixed strings, not measurements;
a held-cut release does not clear an already-armed timeout or invalidate its
generation, leaving two possible timer chains. Purity prices the same surface as
duplicate ownership: both `presentEndpoint` and the timer boundary branch write
the pending record and queue a flush, and the flush never reads its `gen` field.
**Construction change:** (a) the scheduler tracks last-APPLIED phase as a state
separate from last-observed deadline; bookkeeping, skip accounting, and endpoint
claiming reconcile against the applied phase at flush (the a11 timing return's own
prescribed cure form) — every phase between applied and due is either applied or
skip-logged exactly once, at wrap included; (b) the pending record has ONE owner:
only the endpoint claim writes it; the timer boundary branch requests a claim
through that owner and writes nothing itself; the flush consumes the record's
generation (a stale generation is a no-op, asserted); (c) the deferred-apply
accounting is MEASURED, not labelled: the record carries the actual flush time and
the phase time it consumed, replacing the fixed `frames: 1` label; (d) release of a
held cut leaves exactly one timer chain — release clears/invalidates any armed
timeout before re-arming, asserted by a timer-count probe in the suite.

### C-12-08 · Policy literals + parser parity — purity −5 (single lens, last)
The a11 consolidation left adjustable policy in executable branches: duration caps
`60000`/`10000` are literals despite C-11-06(d)'s claim; phone vertical padding is
fixed `0` in both layout and rendering with no token; the phone line limit accepts
`4` without warning while the splitter reaches four lines only through the
number-plus-three-words special case; the scalar URL parser rejects
`artDetailMinPx=30.5` although the shared validator permits fractions (parser/
validator definition split — the same class as C-12-05, at the scalar layer).
**Construction change:** every named item moves behind a CONFIG token consumed by
both the layout and rendering paths (caps, phone padY), the line-limit token's
accepted range is the splitter's actual reachable range with a warning outside it,
and scalar URL parsing derives its type/fraction rules from the same field
definitions the validator uses (one definition, two consumers — C-12-05's rule at
the scalar layer). The A-C008-3 literal census re-runs on the final source; any
surviving runtime literal is printed per-literal as structural in the build record
under A-C009-4 — no silent middle state, and no repeat of a11's "all behind CONFIG"
claim over an un-walked surface.

**Cure → stage map (staging is part of the plan, see the checkpoint gate):**
S1 = C-12-01 · S2 = C-12-02 · S3 = C-12-03 (reset-source conversion only; baseline
GENERATION is deferred to S8 by the cure's own terms) · S4 = C-12-04 · S5 = C-12-05
(+ C-12-08 scalar-parity half) · S6 = C-12-06 · S7 = C-12-07 (+ C-12-08 literals
half) · S8 = baseline generation from the final source + completeness check + full
suite + legs. Stage order is load-bearing: S1 before S2 (the label record lives
inside the resolved rectangle's band accounting), S3's conversion before S8's
generation (the baseline must be generated over the converted reset paths), S5
before the final census.

---

## Delta arithmetic — the honest route to ≥ 85.0 / min ≥ 70

Prior sum 350 (74/79/67/64/66). PASS needs sum ≥ 425 (**+75 lens-points**) and
every lens ≥ 70.

| Lens | Prior | Target | Δ | Route (gross recovery − haircut) |
|---|---|---|---|---|
| Motion | 74 | 86 | +12 | +8 strip-in-origin / one rectangle (C-12-01, the lens's own priced deduction) +7 one page camera (C-12-06a, of −7) +4 shared drawn-pose clock (C-12-06b, of −4) −7 haircut: the cut/handoff −7 STANDS (D-12-1 — reframed-miniature cut is the deferred chapter-takeover surface, not cured) and residual paint-order risk is PIXEL-UNVERIFIED (D-12-2) |
| Timing | 79 | 86 | +7 | +5 applied-phase reconciliation + single pending owner (C-12-07a/b) +3 measured deferred-apply accounting (C-12-07c) +2 single timer chain + sampled-pose resume (C-12-07d + C-12-06b) −3 haircut: late-frame/full-grid-pose miss and callback lateness are runtime properties source cannot fully cure; cut-consumes-approach residue inside D-12-1 |
| Purity | 67 | 88 | +21 | +7 baseline single-source + strip validation (C-12-03, of −9; −2 stands as drift risk until S8's generation is itself lens-priced) +6 contract dispatch (C-12-05, of −7) +7 one-rule geometry (C-12-01's purity share, of −8) +4 policy tokens + parser parity (C-12-08, of −5) +2 single pending owner / diagnostics (C-12-07's purity share, of −4) −5 haircut: census-claim risk — a11's census overstated consumption once (contract), so recoveries are discounted until the re-walked census + lens agree |
| Reusability | 64 | 85 | +21 | +8 reset-source parity + baseline completeness (C-12-03: the direct-edit/URL divergence and dropped-key class is the return's first section) +7 ordering + registry preservation (C-12-04: sections 2–3) +4 contract-driven controls + strip token validated (C-12-05 + C-12-03c: the "incomplete or ineffective controls" section) +2 geometry-basis unification (C-12-01: detail/thumbnail decisions on resolved state) −0 further claimed: the route is CAPPED at 85 by the deferrals — per-appearance timing (D-12-3), grid/membership architecture (D-12-5), and new-primitive/media extension (D-12-6) are priced inside the residual 15 and are NOT cured |
| Readability | 66 | 85 | +19 | +16 DOM consumes the model split (C-12-02, of −24: title-preserving tabs at 240 px is the lens's headline; discounted −8 inside the gross because the lens may still price the three-line compact block's perception and entry-scale ≈9.7 px effective size — the A-C014-1 adverse end, −24 again, is printed above and is NOT the planning basis) +4 detail from the final rectangle (C-12-01, of −5) +1 header marker scoping (C-12-02 companion, of −2) −2 haircut: completed-target glance −3 stands in substance (D-12-7; C-12-01 fixes the strip's GEOMETRY, not its salience) |

Sum at targets: 86+86+88+85+85 = **430 = 86.0, min 85** — **+5 points of slack**
over the bar, stated as slack and not spent twice: it exists because purity's and
reusability's routes recover a11's self-inflicted consolidation surface, which is
mechanically specified. **The route's weakest leg is readability**, as it was in
a11: if the lens prices the unified three-line block as cramped perception despite
correct consumption, readability lands ≈74–80, the sum lands 419–425, and the
attempt is a beating FAIL (or a marginal PASS at the top of that band) — the WHY
scaffold below is pre-filed for exactly that outcome, and the a11 falsifier
discipline applies: a DOM-path divergence on the final source is a wiring miss,
never plateau language.

---

## Deferrals — each priced under EVERY lens that can see the beat (A-C009-3)

- **D-12-1 · Chapter-scene content at the cut (sustained chapter playback / host
  takeover).** Deferred, as in a9–a11: the cut-held overlay remains a re-rendered
  miniature + `chapter-cut` signal; takeover is the production form. Motion **−7
  stands** (the reframed-miniature hard cut is this deferral's priced surface —
  claimed in the motion route's haircut, not cured) · timing **−0..−2** (deferred
  flush consumes following-approach time; C-12-07c now MEASURES the consumption
  but does not eliminate it) · purity **−0** (signal/handoff is the named
  production use; the duplicate-ownership half is cured in C-12-07, not deferred)
  · reusability **−2..−4** (a real scene still needs host/callback integration —
  the return's own extension pricing) · readability **−0** (no label/glance
  surface involved).
- **D-12-2 · Rendered/pixel evidence.** Route hunt re-runs at Execute Stage 0;
  until a route exists PIXEL-UNVERIFIED stands (A-C002-2). Priced as a CAP, not a
  cure: readability **−0..−8 adverse** (perception of the three-line compact block,
  clipped-glyph truth, miniature recognition cannot be pre-verified) · motion
  **−0..−3** (painted endpoint, cut-frame framing, camera continuity unverified)
  · timing **−0..−2** (displayed frame counts unverified) · reusability
  **−0..−2** (rendered consequences of settings unverified) · purity **−0**.
  NOT-VERIFIED list carried verbatim from a11 (panel 07 title survival rendered ·
  tab/art containment rendered · header containment rendered · miniature
  recognition rendered · completed-vs-target glance rendered · settled + dive-end
  frames rendered · painted endpoint presentation).
- **D-12-3 · Per-appearance timing / easing / scale overrides.** Deferred (middle
  appearance only evidenced — A-C006-1: no segment evidence binds per-appearance
  values). Reusability **−6..−9 of its residual** (global-only durations/easing/
  scale remain a production boundary; this deferral caps C-12-03/04's route at
  85) · motion **−0** · timing **−0** (the evidenced basis is the global 365+335
  allocation, re-confirmed in anchor 1) · purity **−0** · readability **−0**.
- **D-12-4 · Basis A preset (flash→hold→dive interpretation).** Deferred; Basis B
  binds and was CREDITED by the a11 timing return — no a11 lens re-opened it.
  **A-C014-1 adverse price:** if a future lens re-opens the basis and prices the
  evidence basis against the retained construction in full, the adverse end is
  the a11-class timing charge for a disputed window (**−8..−12** on timing,
  derived from the lens's likely basis — the segment markers it already
  evaluated — not from the builder's preference); planning price for a12 itself:
  timing **−0..−2** · motion **−0** · purity **−0** · reusability **−0** ·
  readability **−0**.
- **D-12-5 · Irregular grid / arbitrary completion membership / extra
  breakpoints.** Deferred (uniform row-major grid, prefix completion —
  specimen-faithful forms). Reusability **−4..−6 of its residual** · readability
  **−0..−1** · motion **−0** (the specimen IS a uniform grid) · timing **−0** ·
  purity **−0**.
- **D-12-6 · New primitive kinds / native image, video, or SVG asset support.**
  Deferred (extension requires allowlist + validator + renderer changes; the
  supported registry/`panelsJson` art route works and is regression-guarded by
  C-12-04's corpus). Reusability **−2..−4 of its residual** · purity **−0..−1**
  (the allowlist boundary is a stated scope, not a leak) · motion **−0** ·
  timing **−0** · readability **−0**.
- **D-12-7 · Completed-target cue SALIENCE beyond geometry.** C-12-01 fixes the
  strip's origin/accounting; enlarging or re-channelling the cue itself (the
  strip reads ≈3.5 px at approach entry; a viewer who misses it cannot identify
  the dive destination on the final grid) is deferred — no construction in this
  attempt claims it. Readability **−3 stands** (priced in the route's haircut) ·
  motion **−0** (its −8 was the origin geometry, cured) · timing **−0** ·
  purity **−0** · reusability **−0** (the strip token's validation IS cured, in
  C-12-03c — token function and cue salience are different surfaces).
- **D-12-8 · Desktop tabs beyond two lines · independently adjustable cut
  stacking · validator enum/range choices as configuration.** Deferred
  (reusability's "other code-defined boundaries" list; no return prices any of
  them as a deduction in a11). Reusability **−1..−3 of its residual** · purity
  **−0..−1** (C-12-08 tokenises the caps/padding the return NAMED; un-named
  enum choices stay code-defined and printed here, not silently claimed) ·
  readability **−0** (desktop-width tabs are not the priced surface) · motion
  **−0** · timing **−0**.

No cure from the a11 filing's Next-attempt difference (1)–(4) is absent from
both the cure plan and this deferral list: (1) → C-12-03 · (2) → C-12-01 ·
(3) → C-12-02 · (4) → C-12-05. (INSTRUCTION §2.2 / jev-plan-exit dimension 5.)

---

## Preservation plan (§2.3 — A-C003-2 machine baseline · A-C004-1 content copies · A-C005-1 create-once · A-C010-1b complete evidence set)

- **Machine-written baseline (A-C003-2):** `preservation-baseline-T23-attempt12.txt`
  in this run directory — sha256sum output over the COMPLETE prior evidence set
  (A-C010-1b): `recreation.html`, `comparison.html`, `scores.md`,
  `build-record-attempt11.md` + `build-record-attempt11-blind.md`,
  `fit-table-attempt11.md`, `config-census-attempt11.md`,
  `payload-manifest-attempt11.md`, all `checkpoint-attempt11-stage*.html`, and
  all `codex/attempt-11/` files — captured in ONE write-first exec invocation
  (hashes written before any read in that invocation), validated at capture:
  every hash exactly 64 hex chars, file count == the expected path list count;
  a malformed capture is refused and re-captured BEFORE any mutation; the
  original capture is preserved unedited (corrections append as dated notes).
- **Content copies (A-C004-1):** `recreation-attempt-11.html` in the artifact
  directory is a CONTENT copy of the pre-build `recreation.html` — never a
  hardlink; the preservation census re-verifies it AFTER the working file's
  first overwrite, not only at close, and asserts inode ≠ working file.
- **Create-once (A-C005-1):** every preservation destination, checkpoint,
  build record, and lens payload/return path in this attempt is create-once:
  an existing destination is never overwritten — matching sha → reused
  untouched; mismatching sha → execution stops and reports. Re-fires take
  fresh run-tagged paths.
- **Comparison:** `comparison.html` re-points only after the new attempt passes
  its own checks (Execute S8), and its preservation copy
  (`comparison-preserved-attempt-11.html`, create-once) is taken in the same
  baseline act; the ORIGINAL side never changes.
- **Scored-source binding (A-C010-1b):** the final source is snapshotted
  (S8 checkpoint) and its sha binds the payload manifest and every lens return.

## Staged checkpoints plan (A-C010-1a + checkpoint gate A-C012-4 + A-C024-2 visibility)

- One stage per cure family (S1–S8 per the cure→stage map above; S0 is the
  no-construction re-observation stage). After EACH stage, BEFORE the next
  stage's work begins, the builder files create-once: `checkpoint-attempt12-
  stageK.html` (CONTENT copy of the source at that stage) +
  `own-checks-attempt12-stageK.txt` (that stage's own-check output).
- **Gate (A-C012-4):** a stage's Execute work may NOT begin until the PRIOR
  stage's checkpoint pair is filed; the seat's Verify reads checkpoint file
  times/order against the stage sequence. A stage begun without its
  predecessor's checkpoint files as a deviation AND caps the item's
  attribution at BUNDLED regardless of any ledger. A reconstructed checkpoint
  files as RECONSTRUCTED with probe evidence, never as a stage copy.
  Delta-form checkpoints (the a10 deviation) are NOT used.
- **Independence assertion (A-C010-1a):** each checkpoint asserts mechanically
  — checkpoint inode ≠ working-file inode, checkpoint sha frozen at filing —
  in its stage's own-check output.
- **Visibility (A-C024-2):** the builder names each stage's checkpoint paths
  in its interim stage report as the stage closes; the seat reads both files
  back before the next stage opens. A checkpoint absence first discovered at
  the close census is a printed deviation (the a9/a12-gate failure class).

---

## Execute checklist (INSTRUCTION §3 — Execute follows this item by item)

- [ ] E0 · Stage 0 — re-observation, no construction: render-route hunt re-run
  (outcome verbatim; PIXEL-UNVERIFIED stands if not found) · Basis B
  re-confirm against anchor 1 · C-12-02 feasibility pre-measurement on the
  CURRENT (a11) source under BOTH token sets (model 0.75/6 px vs DOM
  0.65/14 px) filed as the conflict's baseline · predecessor probes filed as
  expectations: model-vs-DOM rectangle divergence per panel/appearance,
  DOM label fallback census at 240 px (expected: 12/12 single-line),
  `clampInt` reset-source probe (direct `approachMs=120000`), baseline key
  walk (expected: `targetMarkStripPx` missing) · preservation baseline +
  attempt-11 content copy verified BEFORE any mutation (see Preservation
  plan; E1 may not open on a failed check).
- [ ] E1 · Stage 1 — C-12-01 one resolved rectangle, one rule (current-
  appearance completion, one band rule, strip in origin + height, detail
  from the final post-refinement record; grid + cut overlay rebuilt from it).
- [ ] E2 · Stage 2 — C-12-02 DOM label path consumes the model split
  (ONE token set; DOM = consumer with measured wrapped-line count; named
  fallback only; header growth marker scoped per layout pass).
  **Feasibility gate first:** the unified-token measurement table (all 12
  panels × 240/338/360) files BEFORE the cure binds; any failure stops the
  stage under A-C008-1 (premise amendment + re-plan), per anchor 2.
- [ ] E3 · Stage 3 — C-12-03 reset-source conversion only (every reset path
  re-pointed to the baseline object; source scan for `CONFIG[` reads in
  reset paths; strip validation on restore). Baseline GENERATION does not
  happen here — it is S8, by the cure's own terms.
- [ ] E4 · Stage 4 — C-12-04 ordered resolveConfig pipeline (resolve count +
  registry → validate dependents → preservation-first replacement →
  re-validate restored entries against active palette/ceilings → atomic
  commit).
- [ ] E5 · Stage 5 — C-12-05 contract dispatch (validPrim + primSVG from
  KIND_FIELD_CONTRACT; graph-radius case resolved and printed) + C-12-08's
  scalar-parity half (URL parser derives from the shared field definitions).
- [ ] E6 · Stage 6 — C-12-06 one page camera (wrapper pose across both
  phases, non-zero entry velocity, continuous join) + shared sampled-pose
  record for approach and dive writes. C-11-01's entry reset preserved
  unchanged inside the entry act.
- [ ] E7 · Stage 7 — C-12-07 applied-phase reconciliation (applied vs
  observed state, single pending-record owner, generation consumed,
  measured deferred-apply accounting, single timer chain on release) +
  C-12-08's literals half (caps/padY tokenised; line-limit range = reachable
  range).
- [ ] E8 · Stage 8 — C-12-03 completion: baseline GENERATED from the final
  source + baseline-completeness own-check on the final sha · full own-check
  suite on the final sha · A-C008 legs · payload manifest · comparison
  check (re-point only now, only if the interface changed; ORIGINAL side
  never changes) · preservation re-verification (baseline + attempt-11
  copy, after all overwrites).
- [ ] Every stage: checkpoint pair filed create-once BEFORE the next stage
  opens, paths named in the interim report (see the checkpoint plan); a
  stage begun without its predecessor's checkpoint is a printed deviation
  and caps attribution at BUNDLED (A-C012-4).

## Verify checklist (INSTRUCTION §5 — the wave, again)

- [ ] V1 · Staged checkpoints (A-C010-1a + A-C012-4 gate): for each stage K,
  `checkpoint-attempt12-stageK.html` (CONTENT copy, inode ≠ working file,
  sha frozen at filing) + `own-checks-attempt12-stageK.txt`; seat reads
  file order/times against the stage sequence before the wave fires.
- [ ] V2 · Own-check suite asserts DISPLAYED state (A-C004-2 / A-C008-2),
  including: one-rectangle identity (model == camera == detail record, 12
  panels × 240/338/360 × 3 appearances, incl. overlap + 5 px bar + 4 px
  strip in origin) · DOM label record == model label record (split, lines,
  size, fallback class per panel per width — the CONSUMPTION assertion for
  C-12-02, not a token census) · wrapped states enumerated (A-C006-3:
  masthead wrap states, tab multi-line wrapped states incl. internal
  `pre-line` wraps counted as rendered lines, wrap-mode header growth after
  a prior growth) · presented endpoint (A-C020-2: dive endpoint painted
  before reset at hold/pause 0) · self-start (A-C010-2) · occlusion pairs
  at hold checkpoints (A-C019-1 complete ordered pair set or printed
  scope), incl. completed-vs-target on the final grid.
- [ ] V3 · **Mounted-state assertions (A-C026-2 — relevant here: a11's
  headline failures are exactly model-vs-mounted divergences):** every
  displayed quantity the suite asserts is asserted against what the source
  actually EMITS — emitted selector/element inventory vs the model's
  claimed elements (the label spans the DOM emits ARE the model's split,
  counted as mounted; the target strip exists as a mounted element with a
  real DOM inset and its height present in the emitted art origin; the
  detail class the emitted SVG carries is the FINAL record's class, for
  grid and cut overlay alike; no modelled rule rests on a non-emitted
  class). Source inspection establishes emitted structure; mounted
  GEOMETRY remains PIXEL-UNVERIFIED where no render route exists, printed.
- [ ] V4 · **Effect / consumption assertions (A-C002-1 + A-C006-2):**
  effect mappings asserted (index→effect, override→parsed behaviour), and
  a per-CONFIG-key consumed-effect census on the NEW source — every key
  (incl. S8-generated baseline keys, the unified label tokens, the strip
  token, C-12-08's new cap/padding tokens) maps to the rendered/computed
  effect it drives; KIND_FIELD_CONTRACT walked as a key set (an entry
  consumed by neither validator nor renderer is a HIT) · A-C008-3 literal
  census vs the build record's per-literal structural whitelist
  (A-C009-4).
- [ ] V5 · Validation corpora at the resolveConfig level (the priced
  layer): A-C011-2 adversarial set (non-finite, null/absent groups,
  warning/error display paths, single-oversized-token overflow, resize
  recompute) + A-C021-3 magnitude sweep (400-nines class per numeric
  field) + A-C022-1 direct-edit path (each field class corrupted in
  source) + the a11 reproductions BY NAME (anchor 4: direct
  `approachMs=120000` reset divergence · dropped `targetMarkStripPx` on
  group reset · strip 9999 / −12 acceptance · `{filled:14,dive:13}` +
  `panelCount=16` ordering · registry displacement of a valid customised
  entry · restored-entry binding + ceiling bypass · `registryMap`
  same-request overwrite) + the a10 survivor set as regression cases +
  baseline-completeness assertion (C-12-03d: full key walk, both
  directions, on the final sha) + reset-source scan (no reset reads the
  editable CONFIG).
- [ ] V6 · **A-C008 pre-scoring legs on the NEW source (non-skippable,
  before the wave fires):** `fit-table-attempt12.md` +
  `config-census-attempt12.md` in the artifact directory (the census
  against attempt 12's OWN CONFIG, never attempt 11's), paths + hit
  counts cited in RUN.md §5 · CSS-parse leg (A-C012-3) on the new
  stylesheet · legibility + containment model (A-C003-3, source-bound)
  at 240/338/360 with the UNIFIED label tokens.
- [ ] V7 · Payload manifest + anchor scan (A-C010-1c, A-C008-4):
  `payload-manifest-attempt12.md` in the artifact directory (a11's
  location) — exact allowlist (neutral recreation source + neutral
  own-check packet: check names/results, no cure interpretation),
  exclusions printed, assembled-payload anchor scan INCLUDING the
  source's own comments, filenames, and labels; a contaminated source is
  neutralised (comments only, suite re-run) before payloads generate.
- [ ] V8 · Score-blind firing discipline (A-C005-2 · A-C019-2 · A-C021-1 ·
  A-C021-2 · A-C022-2 · A-C026-1): per-lens scratch cwd containing ONLY
  content copies of that lens's allowlisted packet (byte-identical to the
  fed payload) · sessions fired `--skip-git-repo-check`, fed form with
  closed stdin per A-C026-1 · NO prior scores, RUN.md, scores.md, prior
  returns, target scores, or cure-to-lens commentary in any payload or
  session scope; each session's read scope printed in the firing record
  (A-C019-2) · returns via the A-C007-2/A-C021-2 form: Codex `-o` to a
  /tmp path first, then content-copied to the create-once destination
  under `codex/attempt-12/` with sha256 verified identical · every
  firing's payload + return preserved CREATE-ONCE before any subsequent
  source change (A-C003-1), interim firings at run-tagged paths · the
  seat computes the delta; lenses never see it.
- [ ] V9 · Mechanical guards (guards/guards.md): delta arithmetic
  recomputed from the filed returns · attempt-preservation census
  (baseline + attempt-11 copy shas re-verified AFTER the build) ·
  floor-rule gate check: if a12 ≤ 70.0, the WHY files from the
  pre-drafted scaffold below before close and `jev-plateau` fires at
  §5.4.
- [ ] V10 · Filing: scores.md Attempt 12 (scores · average · minimum ·
  signed delta · verdict · WHY if owed) appended; cure→check mapping
  lives only in the seat's filing.

---

## Failure-point evaluation — guards/jev-plan-exit.md §2.4, priced per item (T23)

- **(a) Big-rebuild / multi-cure attribution risk — PRICED, live.** Eight
  cures, four of them structural (C-12-01 one rectangle, C-12-02 one label
  computation, C-12-03/04 the resolveConfig layer, C-12-05 contract
  dispatch). Mitigation is the staged checkpoint plan (one cure family per
  stage, A-C012-4 gate); residual risk stands even with staging: C-12-01
  and C-12-02 both touch the tab band (rectangle band rule vs label
  budget), and C-12-03/C-12-04 both touch resolveConfig — a regression
  inside S1–S2 or S3–S4 prices BUNDLED between the pair. Accepted,
  printed in advance.
- **(b) Cure interaction — PRICED, this item's founding failure class**
  (a10: masthead cure × un-reset wrapper; a11: C-11-07's late strip key ×
  Stage-5 baseline). Named a12 interactions: (i) C-12-02's unified tokens
  change the band the C-12-01 rectangle accounts — stage order enforces
  S1 (rectangle record shape) → S2 (label record inside it), and S2's
  feasibility gate re-measures on the unified tokens, never in parallel;
  (ii) C-12-05's contract dispatch changes which fields validation admits
  → C-12-04's registry corpus re-runs AFTER S5 in the final suite, not
  only at S4; (iii) C-12-03's whole point is an interaction cure (late
  keys × early baseline) — its completeness check is therefore bound to
  the FINAL sha at S8, and any cure landing after S8's generation voids
  the check and re-opens the stage; (iv) C-12-06's single camera changes
  approach geometry → C-12-01's endpoint record re-asserts in the final
  suite on the post-S6 source; (v) C-12-07's single-owner pending record
  changes flush timing → A-C020-2 presented-endpoint assertion re-runs
  on the final source.
- **(c) Prior-attempt overwrite / early comparison re-point — RULED OUT
  by construction.** Machine baseline + create-once content copy before
  any mutation (Preservation plan); E1 may not open on a failed
  pre-mutation check; comparison re-points only at S8 after the final
  suite passes; census re-verified after the first overwrite and at
  close.
- **(d) Anchor leak — PRICED, controlled.** Prior scores exist in this
  plan and in scores.md; the control is V7/V8's payload discipline
  (allowlist, anchor scan incl. source comments per A-C008-4, per-lens
  scratch cwd per A-C021-1, session-scope print per A-C019-2, closed
  stdin per A-C026-1). The seat tasking — never a lens payload — names
  the attempt number and the bar only, never the prior average.
- **(e) Instrument-change misread — RULED OUT.** Both attempts are the
  five-lens instrument; the delta 70.0 → a12 is same-instrument, printed
  with lens counts anyway at filing.
- **(f) Wave fan-out cross-contamination — RULED OUT for this item.** One
  item per artifact directory (§8 per-item rule); this plan writes only
  T23's artifact, this run directory's plan file, and T23's scores.md
  scaffold (appended by the seat at Plan close). Lens sessions run in
  per-lens scratch cwds containing only that lens's allowlist copies.
- **(g) Size-split evasion — PRICED.** This plan is cure-scoped, not a
  rebuild-from-scratch: the engine, registry content, and CONFIG surface
  stand; eight cures in eight stages. The split triggers are named in
  advance: if C-12-02's feasibility gate fails on the unified tokens,
  the label cure splits OUT (premise amendment + re-planned delta route
  in the same act, per the Cycle-026 Finding-1 form) rather than the
  attempt ballooning; if C-12-04's ordering pipeline cannot land without
  rewriting resolveConfig wholesale, it splits at the registry-
  preservation half (C-12-04 steps 4–5) and the ordering half defers
  IN WRITING with its reusability price re-filed — neither split is
  taken silently.

---

## Pre-drafted WHY scaffold (INSTRUCTION §2 standing product — appended conceptually to scores.md at Plan close; slots filled at close if a12 ≤ 70.0, §5.4)

Filed here in full so the seat appends it to T23's scores.md as the
Attempt 12 scaffold at Plan close, verbatim in substance. Outcome slots
are EMPTY — no scores are recorded here; on close this scaffold becomes
the cure-outcome record, or the WHY if the attempt does not beat 70.0.

### Cure-by-cure outcome slots

- C-12-01 One resolved rectangle, one rule (motion/purity/reusability/
  readability): outcome — PENDING · slot: one-rectangle identity
  assertion result (model == camera == detail, 12 × 3 widths × 3
  appearances, strip in origin) filed; any second rectangle found in
  source at census is named here.
- C-12-02 DOM label path consumes the model split (readability/purity/
  reusability): outcome — PENDING · slot: feasibility table on the
  UNIFIED tokens filed before binding; per-width DOM label census
  (split/lines/fallback per panel at 240/338/360) filed beside the
  model's; any panel where DOM ≠ model on the final source is named
  here with the divergent quantity.
- C-12-03 Baseline integrity, final-stage generation (purity/
  reusability): outcome — PENDING · slot: baseline-completeness walk
  result (key count, both directions) on the final sha + reset-source
  scan result + strip range-validation probes (9999 / −12) filed.
- C-12-04 Validation ordering + registry preservation (reusability):
  outcome — PENDING · slot: resolveConfig corpus results per a11
  reproduction BY NAME (anchor 4 set + registry displacement set);
  any surviving case is named here, not summarised.
- C-12-05 KIND_FIELD_CONTRACT dispatch (purity/reusability): outcome —
  PENDING · slot: dispatch evidence (validator + renderer read the
  contract — source + census walk of the contract as a key set) +
  the graph-radius decision as printed in the build record.
- C-12-06 One page camera + shared drawn-pose clock (motion/timing):
  outcome — PENDING · slot: entry-velocity/join continuity measures +
  resume pose-jump measurements in BOTH phases filed.
- C-12-07 Applied-phase reconciliation (timing/purity): outcome —
  PENDING · slot: skip-log completeness probe at wrap (never-applied
  approach case), single-owner/generation probes, measured
  deferred-apply record, timer-chain count on held-cut release filed.
- C-12-08 Policy literals + parser parity (purity): outcome — PENDING ·
  slot: literal census result + per-literal structural prints (if any)
  + fraction-parity probe (`artDetailMinPx=30.5` both routes) filed.

### Deferral outcome slots

- D-12-1 Cut content: PENDING · priced: motion −7 stands · timing
  −0..−2 · reusability −2..−4 · purity −0 · readability −0. Slot:
  whether the returns price the cut substitute at, above, or below
  the priced band.
- D-12-2 Pixel evidence: route found / not found — PENDING ·
  NOT-VERIFIED list carried verbatim (see deferral block). Slot: hunt
  outcome verbatim + which list items, if any, a found route discharges.
- D-12-3 Per-appearance timing: PENDING · reusability prices the
  global-only boundary inside its residual.
- D-12-4 Basis A: PENDING · Basis B binds; adverse price filed in the
  deferral block (A-C014-1 form).
- D-12-5 Grid/membership architecture: PENDING · reusability residual.
- D-12-6 Primitive/media extension: PENDING · reusability residual.
- D-12-7 Target-cue salience: PENDING · readability −3 stands in the
  route; slot: whether the return prices the cue at, above, or below −3
  after the origin fix.
- D-12-8 Code-defined boundaries: PENDING · printed scope, not claimed.

### Falsifiable stuck-lens hypothesis

Reusability is the floor lens (64) and readability (66) the second;
purity (67) is the third — all three price the SAME consolidation
layer, which is why this attempt's hypothesis is about that layer, not
about three separate plateaus.

- **Reusability / purity (the consolidation layer)**: a11's failures
  here were WIRING MISSES by the scaffold's own definition (corpus at
  the wrong layer, baseline generated mid-build, contract declared not
  dispatched). Attempt 12 moves every one of those checks to the priced
  layer and the final sha. If the resolveConfig corpus (anchor-4 cases
  by name + adversarial + magnitude + direct-edit) passes with zero
  surviving cases, the completeness walk is clean both directions, and
  the contract census shows full dispatch — yet reusability still
  scores < 75 or purity < 75 — then the objection has moved to the
  DEFERRED architecture (D-12-3 per-appearance timing, D-12-5
  grid/membership, D-12-6 extension surface): a genuine plateau
  against evidence-bounded deferrals, and the next attempt's first
  decision is whether to lift a deferral, not another consolidation
  re-tune. If any corpus case survives on the final sha, it is a
  wiring miss by definition and no plateau language is used.
- **Readability**: the a11 falsifier FIRED on the DOM path (model
  holds titles, DOM replaces them) — a wiring gap, explicitly not a
  plateau. Attempt 12's test is sharper: if the DOM label census on
  the final source shows DOM == model for all 12 panels at 240 px
  (split, lines, size, fallback) AND the feasibility table passed on
  the unified tokens AND readability still scores < 70, the binding
  constraint has moved to PERCEPTION of the compact three-line block
  — a genuine perception plateau, whose next cure is a render route
  or a different label family (title outside the tab), never a third
  token re-tune (A-C011-3: the family already changed once, in a11;
  a12 changes the CONSUMPTION, which is the priced defect — if
  consumption is proved and perception still binds, the escalation
  trigger is met and the family must change again or pixel evidence
  must exist). Falsifier: any DOM ≠ model divergence on the final
  source names the divergent panel(s) and quantity, and the WHY
  files it as a wiring miss.
- **Motion/timing regression test**: if C-12-01's identity assertion
  and C-12-07's skip-log probe are green on the final sha and either
  lens still prices a rectangle or reconciliation defect, the defect
  is a NEW interaction; the WHY names the interacting cure pair
  before any plateau language is used (the a10/a11 lesson:
  interaction first, plateau last).

### Evidence jev-plateau will need

Per-cure stage own-checks (S0–S8) and before/after probes recomputed
on the final sha · checkpoint filing order vs stage sequence (genuine
stage states, full content copies, A-C012-4) · C-12-02 feasibility
table on the unified tokens + the DOM label census + the readability
lens's own 240–360 sweep on the final source · resolveConfig corpus
with field enumeration (both routes + direct-edit + magnitude sweep)
+ baseline-completeness walk + reset-source scan · contract dispatch
walk + literal census + consumption census + fit-table on the final
source · mounted-state assertion results (A-C026-2: emitted inventory
vs modelled claims) · render-route hunt outcome verbatim +
NOT-VERIFIED list verbatim · per-lens deltas recomputed from the
filed attempt-12 returns · preservation census (baseline + attempt-11
copy shas) · wave session-scope record (per-lens scratch cwd
inventories, A-C019-2/A-C021-1).

---

## Gate note (§2.6 skeleton — seat's act, named here so Plan close is checkable)

This per-item plan is the Plan agent's product. At Plan close the SEAT
(not this agent) writes the §2.6 skeleton — HQ.json board entry +
lane heartbeat beat, state "planned — Execute not yet run" — and
RUN.md §2 names the skeleton entry id + heartbeat beat with both read
back from their files before Execute opens (A-C015-1 mechanical
consumer). Execute agents spawn only after the seat fires the §2.4
Codex plan review on this plan and consumes it, and the jev-plan-exit
verdict/profile is appended to RUN.md (A-C009-1 fan-out split).
