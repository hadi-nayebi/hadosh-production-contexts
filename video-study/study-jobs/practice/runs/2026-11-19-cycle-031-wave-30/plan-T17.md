# Plan — T17 fake-newspaper dataviz, attempt 11 (practice Cycle-031, Wave 30)

Plan agent filing, PLAN ONLY — no recreation file is built or edited by this plan.
Governing: practice INSTRUCTION §2 (Plan) + §5 amendments cited per cure; RUN.md
§1 + §1a (Cycle-031) — the §1a Codex Observe correction 3 restorations for T17
bind this plan and are consumed verbatim in §0.3 below. Prior attempt: attempt 10,
Cycle 030, average 73.4, lens vector motion 84 · timing 84 · purity 68 ·
reusability 62 · readability 69, minimum 62. Bar: average ≥85 AND minimum ≥70.
Artifact: `hidden_files/study/recreations/T17-fake-newspaper-dataviz/`
(`recreation.html` a10 sha256 `0bd6e70fa1a687b45737cd3994f8eb7dc6355f1e71d2bf99d400f2a861cb3bb4`,
761 lines at Plan read; `comparison.html` sha `f6d34482…`).

## 0 — Observe basis consumed (firsthand, this Plan)

### 0.1 Sources read firsthand
- INSTRUCTION §2 in full and §5 amendments A-C026-2, A-C030-2, A-C029-1,
  A-C029-2, A-C011-3 (plus A-C002-1, A-C006-1, A-C006-2, A-C008, A-C009-3,
  A-C010-1a, A-C012-4, A-C014-1, A-C024-2, A-C027-1, A-C027-2, A-C028-1,
  A-C028-2, A-C030-1, A-C030-3 as they bind the checklists below).
- RUN.md §1 + §1a in full (delta target + 5 Codex Observe corrections).
- scores.md in full — all attempts 1–10, esp. attempt 10's WHY, its four
  class-level plateau tests, its regression/interaction branch, its residual
  queue in binding order, and the seat verdict with NAMED PLATEAUS:
  validation RESTS, single-source RESTS, model↔mounted bound to D1; plus the
  Cycle-030 second-Condense correction separating the S1 `HTMLCollection`
  exception (regression branch) from the model↔mounted class (FIG.23 centers
  + FIG.22 line height) — this plan does NOT merge them.
- All ten Codex lens returns under `codex/attempt-10/` and `codex/attempt-9/`
  read in full (not scores.md summaries). Key verbatim anchors are cited per
  cure below.
- Prior `recreation.html` skimmed structurally: CONFIG (338 leaves at a10
  freeze) → state functions (`lineChartState`, `waffleState`/`summaryTiming`,
  `stackState`, `orgState`, `correctionState`, `figProg`, `transitionState`)
  → `computeLayout`/`figureGeom`/`positionedText`/`fitReport` →
  `validateConfig` + `TIMING_REQUIRED`/`LAYOUT_REQUIRED`/`FIG_REQUIRED_FIELDS`/
  `FIG_CONTAINER_FIELDS`/`figShapeChecks` → builders (`browserDom`, BUILDERS)
  → `createScene`/`buildDetached`/`commitBuilt`/`buildAll`/`render` →
  `window.T17.rebuild` (the `.slice()` call stands at the snapshot line,
  outside the try block that follows it — source-confirmed at Plan read).
- `build-record-attempt10.md` in full (stage ledger S0–S7, intake census,
  expected-result table, DEV-1…DEV-4).
- `guards/jev-plan-exit.md` §2.4 standing failure points (a)–(g) — priced in §7.

### 0.2 What attempt 10 actually established (the plan's premises)
- The regression is a BROWSER-CONTRACT defect, not a model defect: purity a10 —
  "The public swap is broken in a browser… `stage.children` is a browser
  `HTMLCollection`, which has no `.slice()` method"; reusability a10 convergent —
  a valid candidate "throws before publication, including on the no-argument
  path", and rollback omits "the stage class, sizing and CSS variables,
  document width variable, or body and clock colors changed by `commitBuilt`".
  Checkpoint archaeology (scores.md a10): `.slice()` absent in stage-0-base,
  present from stage-1-validation onward — the regression entered at S1,
  inside R-A10-1's own construction.
- The stub-DOM suite structurally could not see it (A-C030-2's founding
  instance): 87/87 staged checks + a 452-leaf + 82-per-figure generative
  sweep green on a stub whose children collection is a plain array and whose
  style model does not price presentation restore.
- Three classes fired their A-C029-2 plateau tests at a10 (same terms priced ·
  Δ≤0 on the primary lens · cure stage landed): validation (reusability −15),
  single-source (purity −16), model↔mounted (readability −9). B1 hold/handoff
  fired via the motion leg only (timing +2 acquits its leg) and RESTS.
- Attempt 9 → 10 is the control case for enumeration: a9's three verbatim
  probes (`bars` non-array, `counterLocale "!"`, deleted `donutFraction`)
  were all cured by name at a10, and the lenses found the NEXT siblings on the
  widened surface (empty `points`, zero `drawEnd`, `counterLabelOpacity`
  domain). Any a11 plan that enumerates siblings again repeats the rested
  construction; the family changes in C3/C4 are therefore the plan, not an
  option inside it.

### 0.3 Codex Observe correction 3 restorations for T17 (RUN §1a — binding)
1. Browser contract stays FIRST, with its real-DOM discriminating test on
   three paths: valid-candidate, no-argument, and injected-publication-failure.
2. Validation item names the timing-domain family beyond zero `drawEnd`,
   and `minTypeSec`/`minFillSec` as the validation-only siblings (read by
   validation, not driving `summaryTiming`).
3. Single-source item specifies BUILD-TIME generation and the concrete
   example: `layout.yLabelGapPx` (fit model) vs the builder's literal `6`
   in `geom.x0-6` (values coincide at 6; ownership is split — purity a10 +
   reusability a10 convergent).
4. B1's rest is pending D1-c; the regression branch stays DISTINCT from
   mounted-layout derivation (see §0.2, Cycle-030 correction).

### 0.4 Quantitative-anchor re-observation (A-C006-1)
Every quantitative anchor a cure carries was re-observed against identifiable
evidence before being bound here. Segment evidence for this technique is the
packet's frame-evidenced facts (`codex/attempt-10/neutral-technique-facts.md`):
figure windows are LABELLED ALLOCATIONS across 22.5 s (FIG.20 0.0–3.3 ·
FIG.21 3.3–7.8 · FIG.22 7.8–11.4 · FIG.23 11.4–15.0 · FIG.24 15.0–18.7 ·
FIG.25 18.7–22.5), NOT measured per-figure checkpoints, and no per-beat
segment timings exist in the packet. Therefore:
- NO cure in this plan binds a per-beat time as segment-measured. All times
  below are allocation-derived or source-derived and are printed as such.
- FIG.25 correction-to-stamp gap 0.864 s: re-observed from the a10 timing
  return's source arithmetic (correction onset 18.956 s, stamp onset
  19.820 s; 19.820 − 18.956 = 0.864) — a SOURCE/ALLOCATION figure, not a
  segment measurement. Bound in C6 as allocation-derived.
- FIG.23 endpoint offset 2.5 px: re-observed from the a10 readability
  return's flex arithmetic (two equal nodes, 10 px gap, `space-around` →
  centers at W/4 − 2.5 and 3W/4 + 2.5; SVG ends at W/4 and 3W/4) — a
  source-derived model figure. Bound in C5 as source-derived; its mounted
  truth is exactly what D1 must measure.
- Donut label 54 px vs ring inner diameter 46.4 px: re-observed from the
  a10 readability return (54 modelled; inner = 2 × 130 × 0.24 − 16 = 46.4).
  Model figures both; the glyph-level verdict is D1-a. Bound in C5 as such.
- `yLabelGapPx` = 6 vs builder literal 6: values COINCIDE (build-record a10
  census: "values coincide at 6; ownership is split"). No numeric conflict;
  the defect is ownership, priced in C4.
- FIG.21 zero-count opening: a10 timing — FIG.21 "begins filling 80 ms after
  its nominal start, while still fading in" (fill step = `fillSec` 1.2 s /
  15 positions = 80 ms — source-derived, consistent). Bound in C6 as such.
- FIG.20 title margin 9.1 px @360 / 4.4 px @390: reproduced exactly on the
  a10 basis (build-record S5) — no conflict; NOT re-cured at a11 (landed).
- PREMISE CONFLICT FOUND: none between a priced anchor and identifiable
  segment evidence — because the segment evidence carries no per-beat
  anchors to conflict with. The one conflict in the record is internal:
  RUN §1's first-draft T17 item 3 omitted the timing-domain family and the
  build-time/`yLabelGapPx` specification; §1a correction 3 resolved it
  against the fuller record, and this plan binds the corrected form (§0.3).
  A second internal tension is priced, not hidden: scores.md a10's seat
  profile first called the S1 exception the model↔mounted class's "priced
  instance"; the Cycle-030 correction withdrew that attribution. This plan
  follows the correction (C1 = regression branch; C5 = model↔mounted).

## 1 — Cure plan (binding residual order from scores.md a10; convergent first)

Order is the RUN's binding order. Within it, convergent-lens cures (≥2 lenses
naming the same defect) head their cure and are marked CONVERGENT. Owner
cures: none stand on this item (RUN §1b) — none are invented here.

### C1 — Browser contract (residual #1; regression-branch head cure) — CONVERGENT (purity 68 + reusability 62)
Construction changes, all inside `window.T17.rebuild` and its helpers:
- C1.1 Snapshot: `stage.children.slice()` → `Array.from(stage.children)`,
  and the snapshot call moves INSIDE the protected (try) publication block,
  so a snapshot failure itself returns `{ok:false}` with the live scene
  intact instead of throwing to the caller. No other live-collection method
  may be called on `stage.children` anywhere in the file (source grep +
  suite assertion, V6). SNAPSHOT-FAILURE GUARD (Cycle-031 plan review,
  finding 2): moving snapshot creation inside the publication try creates
  a distinct pre-mutation failure mode — if snapshot creation itself
  fails part-way, no complete snapshot exists to roll back to. The
  construction therefore carries a completed-snapshot guard: publication
  writes may begin ONLY after the snapshot is verified complete (all
  captured fields present); a snapshot failure before that guard passes
  takes the separate pre-mutation failure path (return `{ok:false}`,
  zero publication writes, live scene untouched by construction, asserted
  in the suite). Two failure paths are tested separately in C1.5/E1:
  (i) snapshot failure (pre-mutation path), and (ii) failure injected
  AFTER presentation writes and the first draw (full rollback path).
- C1.2 Full presentation-state snapshot/restore: the snapshot captures, and
  rollback restores, EVERYTHING `commitBuilt` writes — stage class, stage
  sizing, stage CSS variables, the document width variable, body background,
  and clock colour — beside the existing children/configuration/playback
  snapshot. The restore list is DERIVED from `commitBuilt`'s write set
  (enumerated from source at Execute Stage 1 and printed in the build
  record), not hand-listed from memory; a write added to `commitBuilt`
  without a restore entry fails the suite (write-set == restore-set
  assertion, an A-C002-1 effect mapping).
- C1.3 Fit gating against the EFFECTIVE MOUNTED width: rebuild's fit gate
  and the resize gate both evaluate fit at
  `min(candidate stageWidthPx, mounted viewport width)` under the
  stylesheet's `100vw` cap — never at the candidate's configured width
  alone (reusability a10: a candidate "can pass with desktop geometry and
  mount inside a phone-width stage"). The prospective-width rule landed
  at a10 S4 is retained; its BASIS changes from candidate width to
  effective mounted width.
- C1.4 Named fit failures from the resize gate: the resize gate surfaces
  the fit report's row-level diagnostics (figure id + failing quantity),
  not the a10 generic width message (reusability a10, verbatim pricing).
- C1.5 DISCRIMINATING TEST (real DOM — the priced test from the a10
  regression branch, §0.3.1): run the public rebuild in a real DOM — a
  browser at 360/390, or a DOM implementation with live `HTMLCollection`
  semantics — on five paths: (i) valid candidate, (ii) no-argument
  `rebuild()`, (iii) injected publication failure, (iv) injected
  SNAPSHOT failure (the C1.1 pre-mutation path — pass = `{ok:false}`,
  zero publication writes, live scene intact), and (v) failure injected
  AFTER presentation writes and the first draw (pass = full rollback
  restores presentation state byte-for-byte at the DOM level). Pass on
  (i)/(ii) = publication completes; pass on (iii)/(v) = rollback
  restores presentation state byte-for-byte at the DOM level. IDENTICAL-
  PROBE RULE (Cycle-031 plan review, finding 1): wherever a browser /
  real-DOM route is available, this same probe set runs IDENTICALLY on
  the CP0 baseline source, on the CP1 stage source, and on the frozen
  candidate — the three result sets are filed side by side so C1's
  effect is isolated at its own stage, not inferred from the integrated
  build. This test is the cure's acceptance evidence; the stub-DOM suite
  is explicitly NOT evidence for C1 (A-C030-2). If no real-DOM route
  exists in the Execute session, C1 files as CONSTRUCTION-LANDED /
  TEST-BLOCKED-ON-D1 (paired with C2), never as verified — see the
  adverse pricing in §8.
- A-C030-2 filing duty: the suite prints which mounted behaviours the
  stub cannot execute (host-object APIs incl. live collections,
  layout-dependent reads) and every C1 surface prints
  UNVERIFIED-BY-STUB beside PIXEL-UNVERIFIED until the discriminating
  test runs.

### C2 — D1 render route (residual #2) — EXTERNAL DEPENDENCY, priced as such
D1 is a LANE-LEVEL build charge, not a construction this item's builder can
land alone (tenth consecutive PIXEL-UNVERIFIED attempt at a10; the standing
block is the Chromium startup failure "Hatch WebGL domain policy is required
for browser startup", and at a10 no browser binary existed on PATH in the
executing session). This plan therefore prices D1 as an external dependency
with three named captures, and prices every dependent cure's ceiling if it
does not land (§8):
- D1-a browser glyph bounds at 360/390 (donut label vs 46.4 px ring inner
  diameter first; badge/stamp entrance glyph boxes; FIG.20 title margin).
- D1-b rendered swap measurements at 360/390 (the C1 discriminating test's
  browser form; DLC-preset swap in and back, incl. no-argument rebuild).
- D1-c normal-speed handoff distinguishability (the 216 ms competing band
  from B1-1, FIG.21 zero-count opening, FIG.25 stamp impact — playback
  evidence, not state traces).
Execute's duty toward D1 is bounded and printed: re-attempt the route once
on the frozen a11 source, file per-capture outcomes (a/b/c each LANDED or
OUTSTANDING with the startup error verbatim), and if the route is still
blocked, escalate the lane charge in the cycle record — the item does NOT
substitute an eleventh stub-DOM proxy wave for it (A-C011-3, §5/C5).

### C3 — Validation family change (residual #3; class RESTED at a10) — CONVERGENT (reusability + purity on the class)
The enumeration approach RESTS (seat verdict, a10). Construction = a
construction-FAMILY change, not another sibling list:
- C3.1 Schema-derived validation: the validator is GENERATED from the
  renderers' own field reads. Execute first files a field-read census —
  every field every builder / state function / geometry function actually
  reads, enumerated mechanically from source (per figure type, per group,
  per top-level group) — and the schema (required-by-name, container shape,
  type, domain/range for every field) is derived from that census. A field
  a renderer reads that the schema does not govern fails the build's own
  suite; a schema entry no renderer reads is a validation-only key and
  must be justified or removed (C3.3).
- C3.2 Seed siblings (named in the RUN, bound here — they seed the schema,
  they do not bound it): empty `points` (array present, length 0 — named
  error, never an empty path); zero `drawEnd` AND the timing-domain family
  generally (every timing field's domain derived from its consumer's
  arithmetic — division denominators, fraction bounds 0 < x ≤ 1 where the
  consumer divides or normalizes, ordering relations the consumers assume);
  `formatting.counterLabelOpacity` domain (finite, 0–1); per-figure
  container shapes for every figure type (the a9/a10 escape surface).
- C3.3 Validation-only keys resolved: `timing.minTypeSec` / `minFillSec`
  are read by validation but do not drive `summaryTiming` (reusability
  a10). Disposition per key, printed in the build record: either wire the
  key into the consumer it names (so the census shows a rendered effect,
  A-C006-2) or reclassify it honestly as a validation bound in the schema
  with its bound enforced against the derived durations — never leave it
  counted as consumed-by-rendering. TIMING OF THE DISPOSITION (Cycle-031
  plan review, finding 2): the per-key disposition for `minTypeSec` /
  `minFillSec` is CHOSEN AND FILED BEFORE C6.2 / E5 begins — C6.2's
  FIG.21 assertions (V7) are written against the chosen disposition, so
  a disposition decided after the FIG.21 construction cannot retro-fit
  its checks.
- C3.4 Every throw inside the public rebuild path is contained to a
  returned `{ok:false}` failure (retained from a10 R-A10-1, regression
  slot): validation runs before geometry, geometry evaluation inside
  validation is contained, and the generative sweep (V6) asserts the
  final consumer's behaviour per case, not only the validator's verdict.
- C3.5 Sweep grammar: A-C029-1 + A-C028-2 + A-C030-3 — see V6 (§6). A
  green named-case corpus alone supports NO class-closure claim at a11.

### C4 — Single-source generation (residual #4; class RESTED at a10)
The per-pass census approach RESTS (seat verdict, a10). Construction =
build-time single-source generation:
- C4.1 One key set emits both sides: at build time (a generation step
  inside the artifact's construction, printed in the build record), the
  stylesheet's subject-bearing values AND the geometry/fit model are
  EMITTED from the single CONFIG key set. No value may exist as a literal
  in the stylesheet or a builder while a key for it exists in the model,
  and vice versa; the generation is deterministic and the emitted source
  is the scored source (no post-generation hand edits — a hand edit to an
  emitted region fails the suite's regeneration-equality check).
- C4.2 The concrete example, bound: `layout.yLabelGapPx` vs the builder's
  literal `6` in `geom.x0-6`. Under C4.1 the builder's y-label x is
  emitted as `geom.x0 - <the same key the fit model's positionedText
  reads>`; a mutation of `yLabelGapPx` moves the modelled extent AND the
  mounted label together, asserted as one A-C006-2 effect mapping. This
  pair is the family's regression probe.
- C4.3 Scope of the generation: every value the a10 census classified
  named-consumer or mutation-consumed that appears in BOTH a stylesheet/
  builder surface and the model — including the a10-retained families
  (letter-spacing keys, header geometry, badge font roles, shaft floor)
  re-derived under generation rather than re-patched. The literal census
  (V3, §6) then scans the EMITTED source; a subject-shaping literal
  outside the key set is a HIT, classified per-literal in the build
  record AND carried inside the wave packet (curing a10 DEV-2's packet
  absence — the packet-carriage check itself is V11, §6).
- C4.4 Census honesty: named-consumer rows require a measured effect
  (mutation → observable change in the intended output) to count as
  consumed (A-C006-2); reference-only rows print as reference-only.

### C5 — Mounted-layout derivation (residual #5; model↔mounted class, D1-bound)
The class BINDS TO D1 (seat verdict, a10): no eleventh source-only cure
wave on this class. What a11 builds is the DERIVATION change; what only
D1 can close is printed as such.
- C5.1 FIG.23 connector endpoints from mounted flex centers: endpoints
  are derived from the mounted row's actual layout (the flex container's
  computed node centers under `space-around` + the 10 px gap), not from
  the SVG's own W/4 · 3W/4 coordinates. Construction: one derivation
  function computes node centers from the same inputs the CSS cascade
  uses (content width, node count, gap, padding) and BOTH the model and
  the builder consume it (under C4's generation where it touches the
  stylesheet). The a10 model's zero-gap claim may not be re-asserted
  from SVG coordinates alone (A-C026-2: a modelled quantity with no
  mounted counterpart fails the suite). INDEPENDENT-MEASUREMENT RULE
  (Cycle-031 plan review, finding 2): because the model and the builder
  share this derivation, agreement between them proves nothing about
  the mounted centers — V4 therefore compares the connector endpoints
  INDEPENDENTLY against BROWSER-MEASURED node centers at 360 and 390,
  for the default preset AND the alternate preset. If no browser route
  exists, this comparison files UNVERIFIED-BY-STUB / D1-bound beside
  C5.3 — derivation-vs-derivation agreement is never filed as the check.
- C5.2 FIG.22 count-row line height explicit: the count row's text line
  height is set explicitly (emitted under C4) and consumed by the model —
  the fourth count/text surface, sibling to a10's three cured surfaces
  (chart title, counter text, count row's box). A-C028-1/A-C027-2 census:
  shaft/body × non-target-marker and label–marker / connector–anchor
  pairs are DERIVED from the mounted element inventory at each hold
  checkpoint (minimum clearance for label–marker, maximum endpoint gap
  for connector–anchor, distinctly asserted), not hand-listed.
- C5.3 Donut-label glyph check: model side lands at a11 (label 54 px vs
  inner diameter 46.4 px printed as a modelled OVERFLOW RISK, never as
  fit); the glyph-level verdict is D1-a only. If D1-a does not land, this
  sub-cure files as MODEL-FLAGGED / RENDER-OPEN, and readability's adverse
  case in §8 prices it.
- C5.4 A-C011-3 escalation compliance: readability has priced perception
  (rendered legibility) against source proxies for far more than two
  consecutive attempts on this item. A third proxy re-tune is a printed
  deviation and is NOT in this plan: C5 changes the construction family
  (mounted derivation, C5.1) and routes the perception verdict to D1
  evidence. If neither lands, the WHY scaffold (§10) names the plateau
  as evidence-class, per the a4→a10 line of filings.

### C6 — Motion residuals (residual #6)
Single-lens residuals, built last, none re-opening rested constructions:
- C6.1 FIG.23 connector directional draw-on (motion a10 BODY-WRITE +
  a9/a10 returns: connectors "fade in as a complete line", "no
  directional draw-on"): each connector reveals directionally (CEO →
  report) using the measured-length construction the item already owns
  (path length → dash progression, the FIG.20 cure family), span derived
  from the existing `connectorDrawSpan` key under the C4 key set;
  dependent re-derivation (A-C012-2): node thresholds and badge onset
  re-derived under any mapping change, asserted in the suite.
- C6.2 FIG.21 zero-count opening during fade-in (timing a10): the first
  fill step lands 80 ms (source-derived, §0.4) after nominal start while
  the figure is still fading in, so the zero count is never cleanly
  presented. Construction: the fill clock starts from full opacity
  (fill onset delayed to the fade's completion inside FIG.21's window),
  with FIG.21's dependents re-derived and re-budgeted in the build
  record — summary typing onset, callout target time, completion, and
  the 1.807 s dwell / 0.447 s margin from B1-3 (RESTED construction —
  its budget is re-derived, not re-tuned; any margin change prints as
  an A-C012-2 dependent re-derivation with its arithmetic).
  PRECONDITION + ASSERTION FORM (Cycle-031 plan review, finding 2):
  the `minTypeSec`/`minFillSec` disposition (C3.3) is chosen and filed
  BEFORE this construction begins. The Verify assertions (V7) are then
  three separate measurements, none substitutable for another: (i) a
  POSITIVE full-opacity zero-count interval (the zero count held at
  full opacity for a measured duration > 0 before the first fill step),
  (ii) callout visibility BEFORE typing begins, and (iii) full-opacity
  dwell measured AFTER typing completion only — typing time is NEVER
  added into dwell (superseding the looser allowance priced in §7(b)
  as first drafted; a dwell figure that includes typing time can pass
  while the actual reading hold is short, and does not count).
- C6.3 FIG.25 correction-to-stamp reading gap 0.864 s (timing a10,
  allocation-derived per §0.4): widen the gap by delaying stamp onset
  inside FIG.25's window, funded from the notes' trailing hold (notes
  complete at 21.420 s against a 22.5 s end — 1.080 s at full opacity
  stands after the shift is priced in the build record's FIG.25 budget
  table); the stamp's settled state and both notes' completion remain
  inside the window with a named final hold ≥ the a10 notes hold minus
  the shift, printed before the wave fires. No window boundary moves
  (allocations stand); the shift is intra-window only.

### Cure count
**6 primary cures (C1–C6) in binding order**, carrying 17 named
sub-constructions (C1.1–C1.5, C3.1–C3.5, C4.1–C4.4, C5.1–C5.4 counted as
construction lines; C2 is one external-dependency charge with three
captures; C6 carries 3 residuals). Convergent cures: C1 (purity +
reusability), C3 (reusability + purity on the class). Regression slots
(not cures): Q10 self-start, B1-1/B1-2/B1-3 rested constructions,
R-A10-2 positioned-text fit (LANDED at a10, no return re-priced it).

## 2 — Deferred cures (each priced per lens, A-C009-3)

Deferred count: **5 (D-11-1…D-11-5)**. A deferral's risk is priced under
EVERY lens that can see the beat, not only the suggesting lens.

- **D-11-1 B1 hold/handoff re-budgeting — RESTS as constructed** (class
  test fired via the motion leg at a10; timing leg acquitted, +2).
  No hold re-budgeting without D1-c evidence. Risk if D1-c lands and
  prices the 216 ms band adversely anyway: motion −2…−5 (its a10 return
  already carries the band without deducting the dip), timing −0…−3
  (it prices visual separation as unverified, not failed), readability
  −2…−4 (heading separation during overlap is its stated unknown),
  purity 0, reusability 0…−1. Accepted: the rest is seat-filed law.
- **D-11-2 FIG.23 CEO-trunk routing ambiguity** (readability a8/a10 line:
  routing, not attachment, is the remaining connector deduction beyond
  C5.1's centers). Deferred: C5.1 changes endpoint derivation; trunk
  routing is a separate geometry decision with no segment evidence
  naming a route. Risk: readability −1…−3, motion −0…−2 (assembly
  reads as ambiguous at speed), timing 0, purity 0, reusability 0…−1
  (a later routing change re-opens the derivation surface).
- **D-11-3 Desktop / long-content adaptation beyond the named surfaces**
  (standing deferral since a4 D4; no a10 return priced it). Deferred
  whole. Risk: reusability −0…−2 (long-content swaps remain the
  unpriced surface), readability −0…−1 at 960 only (phone widths are
  the priced surface), motion 0, timing 0, purity 0.
- **D-11-4 Specimen-beat re-measurement beyond the allocations**
  (timing a10 prices windows as allocations; no beat-boundary deduction
  beyond the allocation note was taken). Deferred: no identifiable
  segment evidence exists in the packet to re-measure against (§0.4) —
  inventing beat anchors would violate A-C006-1. Risk: timing −0…−3
  (an allocation-vs-observed dispute, A-C014-1-priced in §8), motion
  −0…−2, readability 0, purity 0, reusability 0.
- **D-11-5 Packet-wording / census-presentation residues from a10**
  (DEV-1: 13 positioned-text entries described as all-SVG, 3 are HTML;
  DEV-2: literal classification absent from the packet). NOT deferred
  as construction — both are filing-form defects cured inside §6's
  Verify checklist: DEV-2's packet carriage is checked at V11, and
  DEV-1 carries its OWN packet check at V3 — the positioned-text packet
  entries are censused by their ACTUAL element kinds (HTML vs SVG
  counted and named separately), never described under one kind.
  Listed here so they are not silent drops: residual
  risk if the filing form slips again — reusability −1…−2, purity
  −1…−2, others 0. Priced as a process risk, not a deferral of work.

## 3 — Preservation plan (INSTRUCTION §2.3 + A-C004-1 / A-C003-2 / A-C005-1)

All steps complete BEFORE the working file is first touched:
1. Machine-written baseline (A-C003-2): sha256sum output redirected to
   `preservation-baseline-T17-attempt11.txt` in the Cycle-031 run
   directory by a write-first exec invocation or script — never
   hand-transcribed. At capture the seat validates: every hash exactly
   64 hex chars, file count == the enumerated path list (a10 baseline
   enumerated 297 files; a11's count is whatever the enumeration finds
   and is printed, not assumed), malformed capture refused and
   re-captured BEFORE any mutation. The original capture is preserved
   unedited; corrections append as dated notes only.
2. Content copies, never hardlinks (A-C004-1): `recreation-attempt-10.html`
   (content copy of the a10 source, sha `0bd6e70f…`), `scores-attempt-10.md`
   (scores.md bytes at Plan close), `comparison-attempt-10.html` (exact
   wrapper bytes). Each copy's inode ≠ the working file's inode,
   asserted mechanically. The preservation census re-verifies every
   preserved copy AFTER the working file's first overwrite, not only
   at close (the Cycle-004 hardlink lesson). REPLAY-WRAPPER RULE
   (Cycle-031 plan review, finding 3): the preserved wrapper copy's
   bytes staying identical does NOT preserve the a10 comparison —
   `comparison.html:15–16` loads `segment.mp4` and the WORKING
   `recreation.html`, so after publication (E8) that copy would display
   a11, not a10. Preservation therefore ALSO files a create-once a10
   REPLAY wrapper (the a10 filing's own form for a9) targeting
   `recreation-attempt-10.html` beside the preserved ORIGINAL media.
   Both replay targets (the replay wrapper's recreation target AND its
   ORIGINAL media target) and the ORIGINAL media hash are verified
   BEFORE and AFTER publication (E8/E10, V10).
3. Create-once destinations (A-C005-1): every destination above, every
   checkpoint (§4), every build record, payload, and return path for
   attempt 11 is create-once — an existing destination is never
   overwritten: matching sha → reused untouched; mismatching sha →
   execution STOPS and reports. Re-fires take fresh run-tagged paths.
4. Complete prior-evidence inventory (A-C010-1b): before any mutation,
   inventory + hash the item's complete prior evidence set (prior build
   records, fit/census legs, returns, comparison + its referenced
   ORIGINAL `segment.mp4`, sha `6375084a…`); every output attempt 11
   overwrites takes an attempt-tagged create-once path; the scored
   source is snapshotted at freeze and bound to its payloads.
5. Comparison rule: `comparison.html` is re-pointed ONLY if the a11
   interface changes (CONFIG keys / durations / the `T17` surface);
   C1–C6 as planned preserve the interface (C1 changes rebuild's
   internals, not its return shape) — the expected disposition is
   UNCHANGED, printed at Verify with its hash. The ORIGINAL side never
   changes. If an interface change becomes necessary mid-Execute, it
   files as a premise amendment (A-C008-1) before the re-point.
   AMENDED-WRAPPER GATE (Cycle-031 plan review, finding 3): for ANY
   amended live wrapper — this re-point case included — an approval
   record and target checks (both sides' targets resolve; ORIGINAL
   media hash matches the baseline) are filed BEFORE the live wrapper
   is changed; no wrapper amendment lands on the builder's word alone.
6. Candidate-only build (the a9/a10 form, retained): construction runs
   on a candidate in workspace scratch; the working `recreation.html`
   is overwritten once, by content copy of the frozen candidate, after
   the freeze suite passes. scores.md appends are append-only, with
   pre-append bytes preserved at `scores-attempt-10.md` (step 2).

## 4 — Staged checkpoints (A-C010-1a + gate A-C012-4 + visibility A-C024-2)

Stages are named in advance; attribution prints BUNDLED unless a stage's
paired probes isolate an effect. GATE (A-C012-4): a stage's Execute work
may not begin until the PRIOR stage's checkpoint (source copy + that
stage's own-check output) is filed create-once; the seat reads both back
before the next stage opens. VISIBILITY (A-C024-2): the builder names
each stage's checkpoint path in its interim stage report AS THE STAGE
CLOSES; the seat reads copy + output back before the next stage opens —
a checkpoint absence first discovered at the close census is a deviation.
Every checkpoint copy is a CONTENT copy with inode independence asserted
(checkpoint inode ≠ working/candidate inode, sha frozen at filing).

- CP0 — Stage 0, baseline probes: a10 source frozen; the C1 discriminating
  defects reproduced at source level (`.slice()` site, commitBuilt
  write-set enumerated, effective-width basis measured), C3 field-read
  census filed, C4 generation inventory filed. IDENTICAL PROBES
  (Cycle-031 plan review, finding 1): wherever a browser / real-DOM
  route is available, the C1.5 five-path probe set runs on THIS CP0
  baseline source and its results file here — the baseline leg of the
  CP0 / CP1 / frozen-candidate identical-probe series. Checkpoint:
  `checkpoints/attempt-11/stage-0-base.html` + `stage-0-checks.md`.
- CP1 — Stage 1, C1 browser contract (code complete; the C1.5 probe set
  runs HERE on the stage-1 source — identically to CP0 and to the
  frozen candidate — wherever a route exists, so C1's own effect is
  isolated at this stage; it additionally runs at CP6/Verify on the
  frozen candidate, or files BLOCKED-ON-D1 here with the
  stub-unverifiable surfaces printed per A-C030-2).
  `stage-1-browser-contract.html` + `stage-1-checks.md`.
- CP2 — Stage 2, C3 schema-derived validation (schema generated from the
  CP0 census; sweep corpus green or NAMED-CASE-ONLY printed).
  `stage-2-validation.html` + `stage-2-checks.md`.
- CP3 — Stage 3, C4 single-source generation (regeneration-equality
  green; `yLabelGapPx` pair probe isolated).
  `stage-3-singlesource.html` + `stage-3-checks.md`.
- CP4 — Stage 4, C5 mounted-layout derivation (derived pair census from
  the mounted inventory; donut risk flagged, not fitted).
  `stage-4-mounted-layout.html` + `stage-4-checks.md`.
- CP5 — Stage 5, C6 motion residuals (three residuals, dependents
  re-derived; FIG.21/FIG.25 budget tables filed). PAIRED PER-RESIDUAL
  RESULTS (Cycle-031 plan review, finding 1): CP5 does NOT bundle the
  three residuals into one stage result — `stage-5-checks.md` records
  a paired result (probe + outcome) for EACH residual separately:
  FIG.23 — connector direction (draw-on direction CEO → report) and
  badge onset; FIG.21 — the full-opacity zero-count interval and the
  summary dwell (measured after completion, per C6.2); FIG.25 — the
  correction-to-stamp gap and the final hold. Lens deltas still print
  BUNDLED (§7(a)); only these implementation probes are separated.
  `stage-5-motion.html` + `stage-5-checks.md`.
- CP6 — Stage 6, freeze. ORDER IS EXPLICIT (Cycle-031 plan review,
  finding 3), no step reorders: (1) freeze the candidate and record
  its SHA; (2) run or file the D1 per-capture outcomes ON THAT SHA
  (incl. the C1.5 identical-probe series' frozen-candidate leg);
  (3) check the preservation baseline and the wrapper disposition
  (live wrapper + a10 replay wrapper targets + ORIGINAL media hash,
  §3.2/§3.5); (4) publish ONCE by content copy; (5) read back the
  published file and re-verify both replay targets and the ORIGINAL
  media hash after publication. Cumulative suite and A-C008 legs run
  on the frozen candidate before step (4); payload manifest files
  before the wave.
  `stage-6-freeze.html` + `stage-6-checks.md`.
Skeleton gate (A-C015-1 + its mechanical consumer): before Execute opens,
RUN.md §2 names the cycle's HQ.json skeleton entry id + lane heartbeat
beat, and both are read back from their files at that moment (board
parses with exactly one entry of that id; heartbeat parses with the beat
in its planned state); the read-back prints in RUN.md §2. This Plan
agent does not write the skeleton — the seat does at Plan close; the
checklist in §5 carries it as Execute's entry condition.

## 5 — Execute checklist (seat executes against this list; §3 of INSTRUCTION)

Entry condition:
- [ ] E0. Skeleton read-back printed in RUN.md §2 (A-C015-1 consumer,
  §4 above); preservation §3 steps 1–4 complete and censused BEFORE
  any mutation; CP0 filed.
Build, in cure order, one stage per checkpoint (gate + visibility, §4):
- [ ] E1. Stage 1 / C1: `Array.from` inside the protected block with
  the completed-snapshot guard and the separate pre-mutation failure
  path (C1.1); full presentation snapshot/restore with write-set ==
  restore-set derived from `commitBuilt`; effective-mounted-width fit
  gating in rebuild AND resize; named fit failures surfaced from the
  resize gate; BOTH failure paths tested (snapshot failure; failure
  after presentation writes + first draw) and the C1.5 identical
  probes run on this stage's source wherever a route exists (CP1).
- [ ] E2. Stage 2 / C3: schema generated from the CP0 field-read census;
  seed siblings (C3.2) inside the schema, not as a list; validation-only
  keys dispositioned (C3.3); all rebuild-path throws contained.
- [ ] E3. Stage 3 / C4: stylesheet + model emitted from the one key set;
  `yLabelGapPx` pair single-owned; regeneration-equality check green;
  no hand edits to emitted regions after generation; the FINAL
  write-set == restore-set check runs EXPLICITLY HERE, after
  generation, on the GENERATED source (the §7(b)(i) binding — a write
  set derived pre-generation is stale and does not discharge C1.2).
- [ ] E4. Stage 4 / C5: FIG.23 endpoints from the mounted-center
  derivation; FIG.22 count-row line height explicit and modelled;
  derived pair census (A-C027-2/A-C028-1) asserted; donut risk flagged.
- [ ] E5. Stage 5 / C6: precondition — the C3.3 `minTypeSec`/`minFillSec`
  disposition is filed BEFORE C6.2 begins; FIG.23 directional draw-on;
  FIG.21 fill onset at full opacity with dependents re-budgeted;
  FIG.25 stamp onset shift with the FIG.25 budget table filed; CP5's
  paired per-residual results recorded separately (FIG.23 direction +
  badge onset · FIG.21 zero-count interval + summary dwell · FIG.25
  stamp gap + final hold). A-C012-2 re-derivation asserted for every
  dependent of every mapping changed in E4/E5.
- [ ] E6. Config-first / purity throughout: no specimen media, no traced
  assets, subject matter only in CONFIG/presets (recreation §6 binds).
- [ ] E7. Swap test BEFORE any wave (logic level minimum): default ↔
  alternate DLC-class preset ↔ default at 360/390 through the public
  API, incl. no-argument rebuild + the resize path; a swap whose fit
  fails is reported, a successful swap does not rewind playback.
- [ ] E8. Freeze (CP6) IN THE CP6 ORDER: candidate frozen + SHA
  recorded; cumulative suite green on the frozen candidate; source
  comments scanned for cure codes / evaluative anchors (A-C008-4) and
  neutralized (comments only, suite re-run) if found; the FINAL
  write-set == restore-set check repeated at freeze on the frozen
  source (§7(b)(i)); preservation baseline + wrapper disposition
  checked; publish ONCE by content copy; post-publish census against
  the §3 baseline (only `recreation.html` + scores.md appends may
  differ) AND the published file read back.
- [ ] E9. D1 re-attempt ON THE FROZEN SHA (CP6 step 2 — before
  publication): per-capture outcomes D1-a/b/c filed (LANDED with
  captures, or OUTSTANDING with the startup error verbatim); C1's
  discriminating test (the identical-probe series' frozen-candidate
  leg) run here if any real-DOM route exists, else filed
  TEST-BLOCKED-ON-D1 beside C2.
- [ ] E10. comparison.html disposition printed (expected UNCHANGED,
  §3.5 — any amendment only under the §3.5 approval-record + target-
  check gate); ORIGINAL side + `segment.mp4` hash verified against
  the baseline; BOTH replay targets verified (the a10 replay wrapper's
  `recreation-attempt-10.html` target AND its ORIGINAL media target)
  before AND after publication (§3.2).
Deviations: any step taken that is in neither this checklist nor §6, and
any checklist step skipped, prints as a deviation in the run record —
never dropped quietly (INSTRUCTION §3).

## 6 — Verify checklist (INSTRUCTION §5; instruments, not intentions)

Own legs (all on the NEW attempt's frozen source, never the prior's):
- [ ] V1. Swap test (A-C002-1 effect mappings, not counts): every
  index→effect and override→parsed-behaviour mapping asserted —
  incl. C1's write-set == restore-set mapping, C4's `yLabelGapPx`
  mutation → model extent AND mounted label moving together, and each
  new CONFIG key's consumed effect (V3).
- [ ] V2. Purity grep + asset inventory: 0 specimen-media hits; only URL
  strings are SVG namespace identifiers; subject strings absent from a
  mounted alternate preset at both phone widths.
- [ ] V3. A-C008 pre-scoring legs (NON-SKIPPABLE, on the NEW attempt):
  guard-measured-fit → `fit-table-attempt11.md` and guard-config-census
  → `config-census-attempt11.md`, filed in the artifact directory
  BEFORE the wave fires; RUN cites each leg's path + hit count. The
  census runs against attempt 11's own CONFIG (338-leaf a10 census is
  evidence, not the instrument). A-C006-2 consumption: for EVERY key,
  a consumed effect mapping (key → rendered/computed effect); a key
  bound but consumed by no effect FAILS the suite; reference-only rows
  print as reference-only (the a9 `palette.muted` / a10 `minTypeSec`
  classes). Literal census (A-C008-3) over the EMITTED source incl.
  stylesheet + every builder, per-literal classification carried
  INSIDE the wave packet (a10 DEV-2 cured). DEV-1 PACKET CHECK
  (Cycle-031 plan review, finding 7): the positioned-text entries in
  the packet are censused by their ACTUAL element kinds — HTML entries
  and SVG entries counted and named separately (a10's DEV-1 described
  13 entries as all-SVG when 3 were HTML); a packet whose entry kinds
  are misnamed fails this leg.
- [ ] V4. Mounted-state assertions (A-C026-2): every modelled quantity
  asserted against what the source actually EMITS — emitted selector
  inventory (0 dead selectors), the DOM effect of every claimed
  reserve, geometry + stacking at named hold states, endpoint/direction
  semantics (FIG.23 endpoints compared INDEPENDENTLY against
  BROWSER-MEASURED node centers at 360/390 for the default AND the
  alternate preset — never only against the C5 derivation the model
  and builder share, and not against the SVG's own coordinates; with
  no browser route this leg files UNVERIFIED-BY-STUB / D1-bound).
  A modelled quantity with no mounted counterpart fails the suite.
- [ ] V5. Mounted-runtime assertions (A-C030-2): the suite prints which
  mounted behaviours the stub cannot execute (host-object APIs, live-
  collection semantics, layout-dependent reads); every surface whose
  priced behaviour depends on one prints UNVERIFIED-BY-STUB beside
  PIXEL-UNVERIFIED; C1's restore claim is evidenced ONLY by the real-DOM
  discriminating test (C1.5) or files as unverified-by-stub.
- [ ] V6. Generative sweep (A-C028-2 + A-C029-1 + A-C030-3): the sweep's
  field×route set is enumerated MECHANICALLY from the intake census
  (every field the intake code reads × every route that reaches it —
  routes R-A direct edit+buildAll · R-B rebuild(candidate) · R-C
  rebuild() no-arg · R-D query-string IIFE · R-E resize→buildAll ·
  R-F fitReport direct · R-G validate direct, per the a10 expected-
  result table form), with explicit test domains for missing/malformed
  containers, value boundaries (0, ±ε, bound, bound+1, fractions,
  string lengths, safe-integer + 400-digit magnitudes), and coupled
  overrides; PLUS A-C030-3's two axes: (a) RECOVERY — for every invalid
  input, the post-input retained state per route (what the live
  presentation/config still holds), and (b) DERIVATION ORDER — every
  derivation runs against the fully-initialized schema, incl. a forced
  recovery from the derived baseline asserting edit-introduced fields
  survive it. Intentional route differences file beside their expected
  outcomes. Generated cases assert the FINAL CONSUMER's behaviour or
  the specified invariant. If any axis is not swept, the filing prints
  NAMED-AXES-ONLY / NAMED-CASE-ONLY and prices the class as still open.
- [ ] V7. Displayed-state completeness: wrapped states enumerated
  (A-C006-3), occlusion pair set complete at hold checkpoints
  (A-C019-1), clearance pairs derived per A-C027-2/A-C028-1 (V4),
  settle-state assertions on displayed (mounted) values, plan-semantics
  assertions from the PLAN's stated surfaces (A-C008-2) — incl. C5.1's
  endpoint claim and C6.2's three separate FIG.21 measurements: a
  POSITIVE full-opacity zero-count interval, callout visibility BEFORE
  typing begins, and full-opacity dwell measured AFTER typing
  completion only (typing time never counted into dwell, per C6.2).
- [ ] V8. Self-start (A-C010-2): the piece reaches its scheduled ending
  under its own startup path in top-level mode; embedded no-start
  asserted; any external-start dependency printed as a named
  limitation, never as a scoring exemption. Regression slots: B1-1
  continuity + floor, B1-2 opening/terminal holds, B1-3 summary margin
  (re-derived budgets from E5), R-A10-2 positioned-text extents,
  FIG.24 marker re-derivation under the shifted mapping (A-C012-2).
- [ ] V9. CSS-parse leg (A-C012-3): the EMITTED stylesheet parses with a
  real parser or declaration-level validator; every declaration the
  displayed-state model prices is sane.
- [ ] V10. Comparison check: comparison.html hash vs baseline; interface
  unchanged or the A-C008-1 amendment filed (with the §3.5 approval
  record + target checks for any amended live wrapper); ORIGINAL side
  untouched; the a10 REPLAY wrapper (§3.2) exists create-once and BOTH
  its targets (recreation-attempt-10.html + ORIGINAL media) verified,
  with the ORIGINAL media hash matching the baseline before AND after
  publication.
Scoring wave:
- [ ] V11. Payload manifest filed BEFORE firing (A-C010-1c): exact
  allowlist (neutral source + neutral own-check packet incl. leaf-level
  leg tables in full — the a8 packet-scope lesson), exclusions printed,
  anchor scan over assembled payloads AND source comments (A-C008-4)
  AND each per-lens scratch cwd's readable file set: 0 hits for prior/
  target scores, attempt comparisons, cure labels, evaluative wording.
  SCAN SCOPE (Cycle-031 plan review, finding 4): the scan covers the
  EXACT launch arguments, the fed stream, the allowlisted files, AND
  the configured read roots of every lens firing — a scratch-directory
  inventory alone cannot establish what a lens can read and does not
  discharge this leg. Any hit quarantines the affected returns
  (preserved, never deleted) and excludes them from the governing
  manifest BEFORE any same-SHA re-fire (V13).
- [ ] V12. Five-lens re-score wave (`guards/codex-rescore-wave.md`):
  FED route only, closed stdin (A-C026-1), per-lens scratch cwds with
  allowlist copies only + `--skip-git-repo-check` (A-C021-1/A-C022-2),
  returns `-o`-written to workspace scratch then content-copied with
  sha256 verified identical (A-C029-3), create-once (A-C003-1);
  session read scopes printed (A-C019-2). Prior average named ONLY in
  seat tasking, never inside a lens payload (A-C005-2).
- [ ] V13. Mechanical guards: guard 1 — delta arithmetic recomputed
  from the filed returns of BOTH attempts, BOUND TO THE EXACT FIVE
  GOVERNING RETURN PATHS FOR EACH ATTEMPT (the five lens returns named
  by path in the filing; quarantined / contaminated returns are
  EXCLUDED from the governing manifest and never pooled into the
  arithmetic — Cycle-031 plan review, finding 3); guard 2 — attempt-
  preservation census, sha before/after (incl. the post-first-overwrite
  re-verification, §3.2); guard 3 — floor-rule gate check (beat or
  WHY owed, §10).
- [ ] V14. PIXEL-UNVERIFIED printed per D1 sub-item (a/b/c), never as a
  single blanket line; no filing cites a pixel step as rendered
  verification while the route is blocked (A-C002-2).
- [ ] V15. Tier hand-off on PASS only (avg ≥85 AND min ≥70): file to
  style-library's board with the scores.md pointer; the tier move is
  style-library's act. On any other verdict the residual inventory /
  WHY files per §10 and NO hand-off is implied. NON-BEATING CLOSE
  STEP (Cycle-031 plan review, finding 5): on a non-beating result,
  close does not complete until the completed a11 WHY is filed, the
  TWO attempts' governing return paths (V13) and build records are
  bound beside it, and the `jev-plateau` judgment, profile, and
  consequence are recorded beside the WHY — all BEFORE close.

## 7 — Failure-point evaluation (jev-plan-exit §2.4, per point)

- (a) Big-rebuild attribution risk — PRICED, HIGH for C3+C4: two family
  changes in one attempt (schema-derived validation; build-time
  generation) plus C1's contract rewrite means a purity/reusability
  regression cannot be attributed cure-by-cure from the wave alone.
  Mitigation priced in: staged checkpoints CP1–CP5 with paired probes
  (the a10 S3/S5 isolation form) isolate IMPLEMENTATION effects;
  lens-delta attribution still prints BUNDLED. Two attribution holes
  in the first draft are closed (Cycle-031 plan review, finding 1):
  CP1 no longer postpones its discriminating test to the integrated
  build — the C1.5 probe set runs IDENTICALLY on CP0, CP1, and the
  frozen candidate wherever a route exists; and CP5 no longer bundles
  its three changes — paired per-residual results file separately
  (FIG.23 direction + badge onset · FIG.21 zero-count interval +
  summary dwell · FIG.25 stamp gap + final hold). Residual risk accepted
  and printed: if purity falls, CP3's regeneration probes vs CP2's
  schema probes are the discriminating evidence, named in advance.
- (b) Cure interaction — PRICED, four named interactions: (i) C4's
  generation rewrites the stylesheet C1's presentation snapshot must
  restore — the write-set derivation (E1) must run on the GENERATED
  source, so stage order C1-code → C4-generation → C1 write-set
  re-derivation is binding; a write set derived pre-generation is a
  stale restore list. The FINAL write-set == restore-set check is
  placed explicitly AFTER generation in E3 and repeated at freeze
  (E8) — this paragraph is its requirement, E3/E8 are its checks.
  (ii) C6.2's fill-onset delay consumes FIG.21 window budget shared
  with B1-3's RESTED summary margin — the E5 budget table must show
  the full-opacity dwell MEASURED AFTER TYPING COMPLETION ≥ the
  rested margin's basis (1.360 s budget, a10 dwell 1.807 s) or C6.2
  does not ship as designed; typing time is never added into dwell
  (the first draft's "typing completion + dwell" form could pass
  while the reading hold is short — withdrawn, Cycle-031 plan review,
  finding 2). (iii) C6.3's stamp shift consumes the notes'
  trailing hold — bounded in C6.3's own text (final hold printed
  before the wave). (iv) C1.1's snapshot-inside-try move creates the
  pre-mutation snapshot-failure mode — carried by the completed-
  snapshot guard and its separate failure path (C1.1, tested in
  C1.5(iv)/(v)). Each interaction has a named suite assertion in §6.
- (c) Prior-attempt overwrite / early comparison re-point — RULED OUT
  by construction, with the mechanism named: candidate-only build +
  freeze-gated single content-copy publish (§3.6), create-once
  destinations with mismatch-stop (§3.3), post-first-overwrite census
  (§3.2), comparison disposition at V10 only. The residual form of
  this risk is a checkpoint hardlink (Cycle-012 class) — excluded by
  the inode-independence assertion at every checkpoint (§4).
- (d) Anchor leak — PRICED: the a10 wave's anchor scan covered payloads
  + scratch cwds (0 hits) and the form is retained (V11/V12); the
  standing leak paths are the source's own comments (A-C008-4 scan +
  neutralization) and the seat's tasking header. HEADER RULE CORRECTED
  (Cycle-031 plan review, finding 4): the first draft's "bar only"
  header is WITHDRAWN — T17's numerical bar (≥85 / ≥70) IS its exact
  central target (§8: central sum 425 = 85.0), so a "bar only" header
  leaks the target vector while V11 requires zero target-score hits.
  Lens-facing headers and tasking text are therefore NEUTRAL (no bar,
  no prior average, no target, no PASS arithmetic); the prior vector,
  the target vector, and the PASS calculation live ONLY in seat
  records (this plan, RUN.md, scores.md), never in anything a lens can
  read. The pre-firing scan (V11) covers the exact launch arguments,
  the fed stream, the allowlisted files, and the configured read
  roots. A leak discovered post-firing files the affected returns as
  CONTAMINATED evidence — PRESERVED, excluded from the governing
  manifest (V13) BEFORE any same-SHA re-fire — and re-fires clean on
  the identical frozen source, per the Cycle-018 disposition — priced
  here so it is procedure, not panic.
- (e) Instrument-change misread — RULED OUT: attempt 11 is scored under
  the same five-lens instrument as attempts 2–10 (motion · timing ·
  purity · reusability · readability); no four-lens average enters any
  delta. Printed in the filing header regardless.
- (f) Wave fan-out cross-contamination — RULED OUT for this item by the
  wave form: one item per artifact directory, one Execute agent per
  item, per-lens scratch cwds unique to T17 attempt 11 (A-C021-1);
  the run-tagged create-once paths (§3.3) make a wrong-directory write
  a mismatch-stop, not a silent overwrite.
- (g) Size-split evasion (§8) — PRICED, the plan's largest structural
  risk: C1–C6 is a full residual queue, not a rebuild-from-scratch —
  every cure is a named construction on the standing source, and the
  two family changes (C3/C4) are the seat-PRESCRIBED forms for rested
  classes, not scope growth. SPLIT VALVE REWRITTEN (Cycle-031 plan
  review, finding 6 — the first draft's "whichever family closes
  first" selection rule is withdrawn; it named no baseline, left
  C5/C6 undefined, and priced nothing):
  · FIXED ACROSS ANY SPLIT, named before Execute: the intake census
    (CP0 field-read census + generation inventory), the generation
    boundary (emitted regions are generated, never hand-edited), the
    publication boundary (candidate-only build, freeze-gated single
    content-copy publish, §3.6), and figure timing (the §0.4 labelled
    allocations and every intra-window budget stand unchanged).
  · If preserving those boundaries requires a rebuild from scratch,
    the CONVERGENT-CURE RULE governs the split: carry C1 (convergent,
    purity + reusability) and any other cure with documented
    convergence that can stand independently; C2 stays an external
    evidence charge under every branch; EVERY omitted cure is priced
    per lens in §2 at the moment of the split (A-C009-3) — an omitted
    cure with no §2 pricing does not defer, it blocks the split.
  · C5/C6 under a split: they ride ONLY on a branch whose fixed
    boundaries they do not disturb; otherwise they defer with §2
    pricing like any other omitted cure — they are never left
    undefined by the valve.
  · RESUME POINT: the split branch resumes from the last clean
    checkpoint or from a separately verified clean candidate — never
    from a half-built family surface.
  · FORECAST + TESTS: §8's forecast is re-issued for the split branch
    when the valve fires (the full-sequence forecast does not carry
    over), and every deferred cure's class test marks NOT ATTEMPTED
    in §10 — a deferred class is never scored as tested.
  B1 remains rested under all branches (D-11-1).

## 8 — Per-lens delta targets + adverse pricing (A-C014-1 / A-C027-1)

Target: 73.4 → **≥85.0 average AND minimum ≥70** (bar). Central route
and adverse scenario are priced PER LENS; the adverse scenario is
derived from each lens's likely basis (the evidence its a9/a10 returns
actually priced), not from the builder's retained basis (A-C014-1),
and a basis correction in the shared packet reprices every lens whose
surface the corrected facts touch (A-C027-1 — here: the packet's C1
facts correct a10's stub-based restore claim, which touches purity,
reusability, AND readability's mounted claims).

| lens | a10 | central a11 | adverse a11 | adverse basis (evidence-grounded) |
|---|---|---|---|---|
| motion | 84 | 87 (+3) | 80 (−4) | C6 lands but D1-c still absent: a10's motion return already carries the handoff band + unverified entrances without full deduction; if it prices playback absence harder on a build that claims more, −4. C6.1 draw-on mis-timed against node thresholds: −2 of the −4. |
| timing | 84 | 86 (+2) | 78 (−6) | C6.2/C6.3 collect (+2…+3), but the allocation dispute (D-11-4) prices at its A-C014-1 adverse end: windows are allocations, and a lens pricing observed-vs-allocation on FIG.21's shifted fill or FIG.25's shifted stamp charges the shift itself, −5…−8 on this lens (Cycle-014 pattern: priced −0..−3, charged −19 — the adverse end here is set from the lens's basis, not the builder's). |
| purity | 68 | 86 (+18) | 70 (+2) | Central: C1 removes the browser-broken swap (the −16 class) and C4 removes the split owner (+2…+4 of headroom). Adverse: C4's generation introduces a NEW split (emitted vs hand-touched region, or a generator literal outside the key set) and purity prices the family change as a new dual-source — recovery only to the floor. This is the plan's widest honest interval and is printed as such. |
| reusability | 62 | 84 (+22) | 66 (+4) | Central: C1's contract + C3's schema close the two priced classes. Adverse: the schema generates a NEW sibling surface (a renderer read the CP0 census missed — the census is itself an enumeration, and this lens has found the missed read five attempts running) and/or C1 files TEST-BLOCKED-ON-D1, letting the lens keep the browser contract priced as unverified: +4 only, floor still missed. |
| readability | 69 | 82 (+13) | 68 (−1) | Central: C5.1 derivation + C5.2 line height + C1's mounted truth. Adverse: D1-a/b/c all OUTSTANDING again — the evidence-class discount that has capped this lens since a4 re-prices at full weight, the donut glyph risk (C5.3) stays open, and the class's seat disposition (bound to D1) is exactly the adverse case: the lens falls or holds despite landed derivations. |

Central sum: 87+86+86+84+82 = 425 → **85.0 exactly** — the central route
meets the bar with ZERO slack, and it depends on purity + reusability
recovering +40 combined, the two lenses whose classes are rested. That
dependence is printed, not smoothed: any single adverse leg firing
(purity, reusability, or readability) defeats PASS on this route, and
timing's adverse leg alone defeats the average while holding the
floor — SENSITIVITY CORRECTED (Cycle-031 plan review, finding 7):
replacing central timing 86 with adverse timing 78 subtracts 8 from
425, yielding 417 ÷ 5 = **83.4**; the −6 printed in the table's timing
row is the change from a10's timing 84, NOT the central-case
sensitivity, and the first draft's "−6 → sum 417" conflated the two.
Adverse sum: 80+78+70+66+68 = 362 → 72.4,
NON-BEATING vs 73.4 — the adverse route owes the WHY in §10. No route
in this plan assumes a lens accepts the builder's basis. SPLIT
FORECAST (finding 6): this forecast prices the FULL C1–C6 sequence
only; if the §7(g) split valve fires, a branch forecast is issued in
the run record at that moment and this table does not carry over.

## 9 — (reserved; Verify instruments live in §6 — V3 carries the literal
census + the DEV-1 packet check, V6 the generative sweep, V11 the
payload/anchor scan; no operative reference points here. Cycle-031
plan review, finding 7.)

## 10 — WHY scaffold (pre-drafted, INSTRUCTION §2 standing product)

Filed here in the plan (the seat copies it into scores.md at Plan close
per §2's named location). Decisions explicit: beating = new average
> 73.4; PASS = average ≥85 AND every lens ≥70. If attempt 11 does NOT
beat 73.4, the WHY owed under the floor rule (§5.4) is completed from
this scaffold at close — cure by cure — not improvised at close. If it
beats 73.4 without PASS, Branch B converts the slots into the residual
inventory (the a4/a5 form). Numerical attribution BUNDLED except where
a checkpoint's paired probes isolate an implementation effect.

### Cure-by-cure outcome slots (fill at close: LANDED / PARTIAL / FAILED, (a) implementation probe and (b) final-return wording kept separate)
- C1 browser contract: probe ___ (write-set==restore-set; effective-width
  gate; named resize failures) · discriminating test outcome (three
  paths, real DOM or BLOCKED-ON-D1) ___ · purity wording ___ ·
  reusability wording ___
- C2 D1 captures: D1-a ___ · D1-b ___ · D1-c ___ (each LANDED with
  captures filed, or OUTSTANDING with the startup error verbatim)
- C3 schema-derived validation: probe ___ (census-derived schema; sweep
  axes swept or NAMED-AXES-ONLY printed) · reusability wording ___ ·
  purity wording ___
- C4 single-source generation: probe ___ (regeneration equality;
  `yLabelGapPx` pair mutation) · purity wording ___ · reusability
  wording ___
- C5 mounted-layout derivation: probe ___ (derived pair census) ·
  readability wording ___ · D1-bound residue (donut glyph) ___
- C6 motion residuals: C6.1 draw-on ___ · C6.2 zero-count + re-derived
  FIG.21 budget ___ · C6.3 stamp gap + FIG.25 budget ___ · motion
  wording ___ · timing wording ___
- Regression slots: Q10 self-start ___ · B1-1/2/3 (rested; re-derived
  budgets only) ___ · R-A10-2 positioned text ___
- NEW-MECHANISM regression/interaction slot (Cycle-031 plan review,
  finding 5 — the slots above only ask whether the OLD browser
  regression was cured; every NEW mechanism a11 introduces gets its
  own slot, one per mechanism): mechanism ___ · checkpoint evidence
  (which CP probe, what result) ___ · lens wording (verbatim, per
  lens that priced it) ___ · the next discriminating test (named, not
  "monitor") ___. Mechanisms in scope by construction: the C1.1
  completed-snapshot guard + pre-mutation failure path · the C3
  schema generation · the C4 build-time generation · the C5 mounted-
  center derivation. A new mechanism with no slot filled files as an
  unexamined interaction at close.
- Deferral dispositions D-11-1…D-11-5: did each priced risk fire, in
  which lens's words ___

### Stuck-lens hypothesis (pre-committed, falsifiable)
Primary: REUSABILITY sticks (≤70) even with C1+C3 landed, because its
class is generative — five consecutive attempts (a6–a10) improved the
enumerated surface and fell on the next sibling, and the CP0 field-read
census is itself an enumeration a renderer read can escape. Falsifier:
reusability ≥78 with no new validation/contract sibling priced — the
generative claim then dies for the schema-derived form specifically.
Secondary: READABILITY sticks (≤72) on the evidence class alone if D1
stays blocked — its a10 fall came on named mounted siblings, so if C5's
derivations land AND no new mounted sibling is priced AND readability
still falls, the evidence-class diagnosis is confirmed for the first
time in its pure form. If neither matches, the actual stuck lens +
verbatim pricing language replaces this section at close.
INCONCLUSIVE OUTCOME (Cycle-031 plan review, finding 5): EACH
hypothesis above (primary and secondary) also carries an INCONCLUSIVE
outcome — filed when the evidence meets NEITHER the hypothesis's
confirmation terms NOR its falsifier (e.g. reusability lands 71–77,
or a new sibling is priced but the schema form also gains): the WHY
prints INCONCLUSIVE beside that hypothesis with the evidence that
failed both tests, and no hypothesis is forced into confirmed/falsified
on evidence that fits neither.

### Class-bound plateau tests (A-C029-2 — per class, regardless of the average)
Each test fires per class on its own legs: (a) same terms priced in the
new return · (b) Δ≤0 on the class's primary lens · (c) the cure stage
landed and checkpointed. A firing class binds even on a beating attempt;
its firing + disposition file in the attempt-11 scores.md entry whether
or not the floor rule owes a WHY. Where a seat-named plateau carries a
prescribed construction, BOTH instruments print separately (A-C030-1):
the A-C029-2 test AND the escalation's own cure test (same-terms
repricing absent · the prescribed construction's own-check trace passing
on the final source · its stage checkpoint filed in order). Neither
instrument discharges the other; a cure under the escalation with the
plateau test not firing files as CURED-BY-ESCALATION, never as a
plateau-test pass.

- **Validation class** (primary lens: reusability; prescribed
  construction: C3 schema-derived validation — the seat's a10 family
  change). Plateau test: (a) ___ (b) reusability Δ ___ (c) CP2 filed
  in order ___ → FIRED / NOT FIRED ___. Escalation cure test:
  same-terms repricing absent ___ · schema trace passing on the final
  source ___ · CP2 in order ___ → PASS / FAIL ___. Disposition if the
  plateau test fires: the schema-derived form RESTS as constructed;
  attempt 12 does not enumerate a third form — the technique rests on
  this class with the plateau named, or HQ prices a different family.
- **Single-source class** (primary lens: purity; prescribed
  construction: C4 build-time generation). Plateau test: (a) ___ (b)
  purity Δ ___ (c) CP3 filed in order ___ → FIRED / NOT FIRED ___.
  Escalation cure test: same-terms repricing absent ___ · generation
  trace (regeneration equality + pair mutation) passing on the final
  source ___ · CP3 in order ___ → PASS / FAIL ___. Disposition if
  fired: generation RESTS; no per-pass census returns in any form.
- **Model↔mounted class** (primary lens: readability; prescribed
  construction: C5 mounted derivation, D1-bound — the seat's a10
  disposition binds this class to D1, which is its escalation form).
  Plateau test: (a) ___ (b) readability Δ ___ (c) CP4 filed in order
  ___ → FIRED / NOT FIRED ___. Escalation cure test: same-terms
  repricing absent ___ · derivation trace passing on the final source
  ___ · CP4 in order ___ · PLUS the D1 leg the seat disposition names:
  D1-a/b outcomes ___ (a cure test claiming PASS on derivation alone,
  with D1 outstanding, overclaims the seat's own disposition and files
  as PARTIAL). Disposition if fired: the technique RESTS at
  IN PROGRESS for this class until D1 lands — no twelfth source-only
  cure wave on this class (A-C011-3: no third proxy re-tune, in any
  wording).
- **Regression branch** (not a plateau class — the Cycle-030 correction
  keeps it separate): its test is C1.5's discriminating test itself.
  Outcome ___ (three paths, real DOM) — if the test cannot run, the
  branch files OPEN with the source-level evidence standing as the
  measurement, exactly as a10 filed it.

### Split-branch class tests (Cycle-031 plan review, finding 6)
If the §7(g) split valve fires, every DEFERRED cure's class test in
the rows below marks **NOT ATTEMPTED** (its (a)/(b)/(c) legs print
NOT ATTEMPTED, never blank, never scored) and the split branch's §8
forecast + §2 per-lens pricing for each omitted cure are bound beside
the WHY. A class deferred by the split cannot fire, pass, or rest on
this attempt's evidence.

### Non-beating close step (Cycle-031 plan review, finding 5; mirrors V15)
On a non-beating result the close sequence is: (1) complete the WHY
from this scaffold, cure by cure; (2) bind BOTH attempts' governing
return paths (the exact five per attempt, V13) and both build records
beside the WHY; (3) record the `jev-plateau` judgment, its profile,
and its consequence beside the WHY (seat judging per RUN.md §1b while
Jev transport is unbound); (4) only then close. A close filed without
steps (1)–(3) is incomplete regardless of the heartbeat/board state.

### Evidence jev-plateau will need (assembled at close)
(1) Per-cure outcomes above, each tied to a filed attempt-11 return
passage. (2) Per-lens signed deltas vs a10 (84·84·68·62·69) and the
average delta vs 73.4. (3) Checkpoint attribution (CP0–CP6; BUNDLED
where no paired probe isolates). (4) A-C008 leg paths + hit counts on
the new attempt. (5) D1 per-capture outcomes + C1.5's discriminating-
test outcome. (6) The three class-test rows + both-instrument prints
above. (7) What attempt 12 does differently, or why the technique
rests — pre-drafted consequence: if validation or single-source fires
its test under its prescribed family change, that class rests (above);
if model↔mounted fires, the item rests at IN PROGRESS pending D1 and
the lane charge is the deliverable, not another attempt.

## 11 — Reduction naming (jev-plan-exit §2.7)
This plan's success criteria are the objective's two lawful outcomes
only: a higher average filed (with PASS / beating-FAIL printed against
the bar), or a non-beating WHY filed from §10. Nothing in §§1–10 drops
a residual-queue item silently: the queue's six items map to C1–C6 in
order, B1's rest is seat-filed law carried as D-11-1, and every other
deferral is written in §2 with per-lens pricing. The one honest
reduction, printed rather than hidden: the central route (§8) meets
PASS with zero slack and depends on the two rested classes recovering
+40 combined — the plan does not claim a comfortable PASS route exists
on the available evidence, and if D1 stays blocked the readability leg
of that route is priced adverse in advance.

## § Plan-review consumption (Cycle-031)

Codex plan review for T17 attempt 11 (return filed at
`codex-plan-review-T17-return.md` in this run directory; verdict:
PLAN: REVISE BEFORE GATE) consumed by the seat, 2026-11-19. Findings:
7. Landed: 7. Rebutted: 0. Every finding was landed by editing the
plan's operative text — the amended sections below carry the fix
themselves; this section is the disposition index, not the fix.

- **Finding 1 — Attribution (identical probes; CP5 unbundled): LANDED.**
  C1.5 now specifies the identical five-path probe set on CP0, CP1,
  and the frozen candidate wherever a browser route is available;
  CP0 and CP1 (§4) carry the series' baseline and stage legs; CP5 (§4)
  and E5 record paired per-residual results separately (FIG.23
  connector direction + badge onset · FIG.21 full-opacity zero-count
  interval + summary dwell · FIG.25 stamp gap + final hold); §7(a)
  names both closures and keeps lens deltas BUNDLED.
- **Finding 2 — Interactions (snapshot guard; post-generation
  write-set check; FIG.23 independent measurement; FIG.21 disposition
  + dwell form): LANDED.** C1.1 gains the completed-snapshot guard
  and the separate pre-mutation failure path; C1.5 gains paths (iv)
  snapshot failure and (v) failure after presentation writes + first
  draw; E1 tests both paths. §7(b) now carries four interactions and
  places the final write-set == restore-set check explicitly after
  generation in E3, repeated at freeze in E8. C5.1 + V4 compare
  FIG.23 endpoints independently against browser-measured node
  centers at 360/390 for default AND alternate presets (shared-
  derivation agreement explicitly not the check). C3.3 fixes the
  `minTypeSec`/`minFillSec` disposition BEFORE C6.2; C6.2 + V7 assert
  a positive full-opacity zero-count interval, callout visibility
  before typing, and dwell measured after completion only — §7(b)'s
  typing-into-dwell allowance is withdrawn in its own text.
- **Finding 3 — Evidence preservation (replay wrapper; CP6 order;
  amended-wrapper gate; V13 binding): LANDED.** §3.2 adds the
  create-once a10 replay wrapper targeting
  `recreation-attempt-10.html`, with both replay targets and the
  ORIGINAL media hash verified before and after publication (also
  E10, V10); §3.5 adds the approval-record + target-check gate for
  any amended live wrapper. CP6 (§4) and E8/E9 now print the explicit
  order: freeze + SHA → D1 outcomes on that SHA → preservation
  baseline + wrapper disposition check → publish once → read back.
  V13 binds guard 1 to the exact five governing return paths per
  attempt and excludes quarantined returns from the arithmetic.
- **Finding 4 — Score anchors (neutral headers; scan scope;
  quarantine before re-fire): LANDED.** §7(d)'s "bar only" header is
  withdrawn in its own text (T17's bar is its exact central target);
  lens-facing headers are neutral, and the prior vector, target
  vector, and PASS calculation live only in seat records. V11's scan
  now covers the exact launch arguments, fed stream, allowlisted
  files, and configured read roots; contaminated returns are
  preserved, excluded from the governing manifest, before any
  same-SHA re-fire (§7(d), V11, V13).
- **Finding 5 — Close branches (non-beating close step; new-
  mechanism slot; inconclusive outcomes): LANDED.** V15 and §10
  ("Non-beating close step") add: completed a11 WHY filed, both
  attempts' governing return paths + build records bound beside it,
  and the `jev-plateau` judgment, profile, and consequence recorded
  beside the WHY before close. §10's cure-by-cure slots gain a
  NEW-MECHANISM regression/interaction slot (checkpoint evidence,
  lens wording, next discriminating test) naming the snapshot guard,
  schema generation, build-time generation, and mounted-center
  derivation. Each stuck-lens hypothesis in §10 now carries an
  INCONCLUSIVE outcome for evidence meeting neither its confirmation
  nor its falsification criteria.
- **Finding 6 — Size split (fixed boundaries; convergent-cure rule;
  resume point; forecast + NOT ATTEMPTED): LANDED.** §7(g)'s split
  valve is rewritten in place: the "whichever family closes first"
  rule is withdrawn; intake, generation, publication, and figure
  timing are named fixed across any split before Execute; a
  rebuild-from-scratch split follows the convergent-cure rule (C1 +
  independently-standing convergent cures carried, C2 stays an
  external evidence charge, every omitted cure priced per lens in
  §2 at split time); C5/C6 ride only on a branch whose fixed
  boundaries they do not disturb, else defer with §2 pricing; resume
  is from the last clean checkpoint or a separately verified clean
  candidate. §8 carries the split-forecast rule (branch forecast
  re-issued; the full-sequence table does not carry over) and §10
  marks deferred class tests NOT ATTEMPTED.
- **Finding 7 — Checklist integrity (§9 pointers; DEV-1 packet check;
  timing sensitivity arithmetic): LANDED.** All operative references
  to the reserved §9 are repointed: C3.5 → V6, C3.4 → V6, C4.3 →
  V3 (census) + V11 (packet carriage), D-11-5 → V3/V11; §9's own
  header now names its instruments' homes. DEV-1 has its own packet
  check at V3 (positioned-text entries censused by actual HTML vs
  SVG element kinds). §8's central-case timing sensitivity is
  corrected in place: central 86 → adverse 78 subtracts 8 from 425,
  yielding 417 ÷ 5 = 83.4; the table's −6 is the change from a10's
  timing 84, and the conflating sentence is replaced.

No finding was rebutted: each was verified against the plan text it
cited before landing (the §9 references, the CP6 order's absence,
the §7(d)/V11 contradiction, and the 425 − 8 = 417 arithmetic all
checked firsthand in the pre-amendment plan). The review's stated
limit — transfer of the amended plan into RUN.md §2 NOT ASSESSED —
stands: RUN.md §2 remains the seat's next act, not this consumption's.
