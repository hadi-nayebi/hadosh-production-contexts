# Plan — T17 fake-newspaper dataviz · Attempt 3 · practice Cycle 012 Wave 11

Plan agent filing (PLAN ONLY — no build, no recreation.html edit, no lens wave fired in this phase).
Governing: practice INSTRUCTION §1–§2 (A-C002-1/-2 · A-C003-2/-3 · A-C004-1/-2 · A-C005-1/-2 ·
A-C006-1/-2/-3 · A-C007-1 · A-C008-1/-3/-4 · A-C009-3/-4 · A-C010-1a/b/c · A-C010-2) · RUN.md §1
delta target for T17 · Codex Observe corrections 5 + 6 (consumed in RUN.md §1 before Plan opened).

## 0. Delta target + evidence basis (firsthand)

- Prior: attempt 2 avg **81.8** (motion 90 · timing 82 · purity 100 · reusability 72 ·
  readability 65), min lens readability 65. Target: **≥85.0 avg AND every lens ≥70** (gap 3.2).
  Lens aims (sum ≥425): readability 65→≥74 · reusability 72→≥82 · timing 82→≥87 ·
  motion 90→≥92 · purity 100 hold.
- Evidence read firsthand: scores.md FULL (attempt-2 priced gaps 1–4 = the cure inventory below) ·
  ALL five attempt-2 Codex returns under `codex/attempt-2/` in full · build-record-attempt2.md ·
  recreation.html source (sha256 `813318f8…`, matches the run preservation baseline) ·
  TECHNIQUES.md T17 entry (IN PROGRESS, P1 @ 1:40–2:02, ev/t103·t114·t116) · P1 digest §T17
  (digest.md, 2026-11-13-ig-dfk4sfvvjjq: one static broadsheet, ZERO hard cuts, 22.5 s,
  FIG. 20–25 in order — the sequence/timing origin for every anchor below).
- Quantitative anchors re-observed per A-C006-1 against identifiable evidence (source CONFIG +
  the timing return's source-derived timestamps), origin = figure window start:
  FIG.20 0.0+3.6 draw complete 2.76 / hold 0.84 · FIG.21 3.6+3.9 summary fully typed 6.735 /
  hold 0.765 · FIG.22 7.5+3.6 last sub-animation complete 10.20 / hold 0.90 · FIG.23 11.1+3.6
  badge 13.50 / hold 1.20 · FIG.24 14.7+4.0 collapse complete 18.10 / hold 0.60 ·
  FIG.25 18.7+3.8 notes complete 21.516 / hold 0.984 · total 22.5 s. No anchor conflict found
  between the priced cures and the source CONFIG windows; the conflicts that DO exist are
  premise conflicts P-1…P-3 (§7), resolved against the source.

## 1. Cure plan — HEAD: factory extraction (Codex Observe correction 5)

### C1 — Dependency-injected factory extraction (HEAD; reusability gap 2e + scores.md DEFERRED note)
The attempt-2 DEFERRED note and correction 5 put this at the head: extraction lands, or the
plan prints why the item rests. **It lands — no rest reason exists:** the extraction boundary
already exists (BUILDERS registry), the defect is purely the coupling the reusability return
prices verbatim: builders "close over global `P` and helpers that read global CONFIG. Their
actual signatures accept no palette argument, despite the record's claim."
Construction change:
- Each builder becomes a factory with an explicit dependency signature —
  `builders.<type>(mount, figData, deps)` where `deps = { palette, timing, layout, dom }`
  (dom = the el/svgEl/svgNode helpers; layout = figureGeom/computeLayout passed in, not read
  from globals). No builder body references the scene globals `P`, `CONFIG`, `stage`, the
  masthead, the clock, or the controls.
- A single `createScene(deps)` / mount entry assembles the six factories into THIS stage;
  the factories are independently mountable into a foreign container element with a foreign
  palette + figure record (the DLC diagram-container use the technique feeds).
- The public interface comparison.html consumes is preserved exactly:
  `window.T17 = { config, render, fitReport, validate, setTime, play, pause, restart }`
  (comparison.html slaves `w.T17.render(...)` — verified firsthand in its source).
- Build-record claims are corrected in the same cure (reusability return's closing demand):
  the attempt-3 record states the real signatures and distinguishes computed state from
  observed visible output everywhere (see also P-1).

### Convergent cures next (≥2 lenses name the defect — INSTRUCTION §2.2 order)

### C2 — Content-sensitive completed-text hold (readability gap 1e + timing gap 3a — CONVERGENT)
One cure, two lenses: summary ~100 chars types in ~1.485 s and gets only ~0.765 s fully
readable (timing return) / ~0.77 s (readability return).
- New named CONFIG value `timing.readMsPerChar` (reading budget per completed character);
  the FIG.21 typing window is derived from text length so the COMPLETED hold is
  ≥ max(`timing.minHoldSec`, summaryText.length × readMsPerChar), funded by shrinking the
  typing/fill fractions INSIDE the figure's animation portion — never by eating the hold
  and never by extending the 22.5 s total (A-C007-1: every ms stays allocated in-window).
- The same content-sensitive rule is stated generally (any typed/completed text block:
  hold scales with its character count), not hard-wired to the summary string.
- Boundary behaviour: if a swapped summary is too long to type + hold inside its window,
  validation rejects it with a named warning (existing "Unsupported data" path) instead
  of silently mistiming it.

### C3 — Stamp cluster (readability gap 1d + timing gap 3c + motion gap 4b — CONVERGENT, 3 lenses)
- (a) Display type: the fit model + own-check suite assert the stamp element's DISPLAYED
  transformable type in the rendered-state model (see premise conflict P-3 — the assertion
  is made from the computed CSS cascade, and the rendered check stays PIXEL-UNVERIFIED).
- (b) Transformed bounds in the fit model: the stamp's rotated AABB —
  (w·|cos θ| + h·|sin θ|) × scale, θ = the CONFIG stamp rotation — is computed at the
  entrance checkpoints (initial scale, impact overshoot, settle) and allocated inside
  FIG.25's block + the stage at 360/390/960; if the AABB at the entrance scale cannot fit,
  the entrance scale is constrained by CONFIG, not clipped by `overflow:hidden`.
- (c) Impact shape (motion): the linear shrink is replaced by a rapid eased approach +
  brief compression/rebound + settle, all inside the existing stampAt/stampDur allocation;
  the easing parameters are CONFIG values (see C7), and the bounds model in (b) prices the
  overshoot state the easing actually reaches.

### Readability cures (blocking lens 65 → ≥70; source-bound displayed-state models per A-C003-3/A-C004-2)

### C4 — FIG.22 fit-model vs builder spacing reconciliation (readability gap 1a)
Verified in source: the layout model budgets a phone inter-block gap of **8 px**
(`figureGeom` stackBars phone blockH = counterH + stackH + 8 + chartH) while the builder's
flex wrap uses **gap: 26px** — and FIG.22's modelled required already equals its entire
allocation (388.2 / 388.2), so the unmodelled 18 px pushes the displayed figure past the
stage and the source line is the clipping candidate.
- Single source of truth: the inter-block gap (and every gap/margin/line-height the model
  budgets) becomes a named layout value consumed by BOTH the builder's flex gap and
  `figureGeom` — builder and model can no longer carry different numbers.
- The model is rebuilt source-bound (A-C004-2): it measures the DISPLAYED state — actual
  gaps, heading margins, line heights, SVG baseline space, border-inclusive sizes — at
  FIG.22's completion state, at 360/390/960.
- Re-verification prints FIG.22's corrected required vs the stage's real content height
  AND an explicit assertion that the source line's displayed bottom sits inside the stage
  at completion (the exact assertion attempt 2's tautological phone allocation —
  allocated := max required — could not make).

### C5 — Masthead metadata phone arrangement (readability gap 1b)
Verified in source: `.meta` is a single flex row, three spans in 360 − 2×28 = **304 px**,
no wrap policy; `computeLayout.headerH` prices exactly one meta line, and `--figtop`
is set from that modelled headerH.
- Phone arrangement specified: at phone widths the meta line wraps to a defined two-row
  arrangement (date + clock on row 1, price on row 2 — or an equivalent named arrangement
  the builder and model share); desktop keeps one row.
- The layout model ENUMERATES the wrapped states (A-C006-3): headerH is computed from the
  ACTUAL wrapped line count at each width (span text widths measured at labelPx), and the
  figure offset (`--figtop`) + phone stage height derive from that actual header height —
  never from the single-line proxy.

### C6 — FIG.20 endpoint x-label gutters (readability gap 1c)
Verified in source: x-labels are `text-anchor:middle` at x0 + w·(i/(n−1)) with
geom = {x0:48, w:chartW−58} — the final label centres exactly **10 px** from the SVG right
edge, so "post 2" can extend past it.
- Reserve measured text gutters: endpoint labels are anchored inward (first label
  start-anchored / last label end-anchored at the axis ends) OR their centres are shifted
  by half their measured text width; measured width uses the model's named per-character
  width at labelPx (the same estimator the heading model uses — one estimator, named).
- The fit model asserts each x-label's DISPLAYED bounds (centre ± half measured width,
  after anchoring) lie inside the SVG at 360/390/960, for the default labels and for a
  swapped longer-label set (swap leg, §3).

### Reusability / budget cures (72 → ≥82)

### C7 — Literals + palette consumption (reusability gaps 2a + 2b; A-C008-3 / A-C009-4)
Verified in source, each literal located: badge scale `1.6` (orgChart renderer) ·
stamp rotation `-8` (correction renderer transform string) · graph sampling step `0.02`
(counterGraph path loop) · cliff-marker threshold `p > 0.5` (counterGraph dash opacity) ·
warning colour `#c1271f` hardcoded in the `.warn` CSS · `palette.muted` defined
("#77705f") and consumed nowhere.
- All five literals move into CONFIG (timing/figure/layout sections as each belongs);
  the stamp easing parameters from C3 land in CONFIG at the same time.
- `palette.muted`: CONSUMED (assigned to the secondary-text role it names — source lines /
  counter sub-label — subject to the attempt-1 E1 constraint that muted reading text keeps
  its minimum size/opacity treatment) — removal is the fallback only if consumption would
  break that constraint, and the choice prints in the build record. The warning colour is
  routed through the palette (CSS custom property set from palette at build, or inline
  style from the injected palette under C1).
- A-C009-4 binds: no content-carrying literal (stamp text, labels, check symbols) may be
  whitelisted as "structural"; any structural classification prints per-literal (§3 census).

### C8 — Animation-budget distribution + cliff validation (reusability gaps 2c)
Verified in source: notes timing noteStart 0.55 / noteGap 0.18 / noteFade 0.15 with
maxNotes 4 → the 4th note completes at normalized 0.55 + 3×0.18 + 0.15 = **1.24** (never
appears; the 3rd finishes inside the promised hold); `cliffAt` is validated only against
0.1–0.95 while FIG.24's animation fraction is (4.0−0.6)/4.0 = **0.85**, so a permitted
cliffAt in (0.85, 0.95) loses its cliff segment to the completion snap.
- Note timing is DISTRIBUTED within the budget: note starts/gaps derive from the note
  count so the last note completes at ≤ the animation fraction, for every permitted count
  1…maxNotes (span-derived subordinate durations, A-C006-4 pattern).
- Validation gains the budget check: `cliffAt` must be < the figure's animation fraction
  (with the named margin the collapse shape needs), rejected with a named warning outside
  it; the same budget validation covers any timing key whose completion can exceed its
  figure's animation portion.

### C9 — Stack unit height derivation (reusability gap 2d)
Verified in source: `figureGeom` stackBars sets `unitH = phone ? 13 : 15` — fixed per
device mode, while build-record-attempt2 claimed derivation from count.
- unitH derives from the stack count and the figure's allocated block height
  (unitH = floor((blockBudget − counterH − gaps) / stackCount) − gap, clamped to the
  legibility floor the model names), consumed identically by builder and model (C4's
  single-source rule); if derivation cannot hold the floor at maxStack, validation
  rejects the count instead of shrinking silently. The attempt-3 build record's claim
  is written to match the construction, whichever branch lands.

### Motion residuals (90 → ≥92)

### C10 — Motion residuals (motion gaps 4a + 4c; 4b is C3c)
- (a) Stack units: opacity steps in final positions → short DOWNWARD arrivals: each unit
  translates from a named CONFIG offset above its slot and settles onto the pile, the
  discrete count increments retained; arrival duration derives from the stack span
  (A-C006-4 pattern) and the fit model prices the arrival state's bounds (a unit at its
  highest arrival offset stays inside the figure block).
- (c) Counter-graph trace freeze: the path's x progression is driven by the ANIMATION
  progress (animQ), not raw window progress — the trace completes at animation completion
  and the entire path (x and y) is frozen through the hold; the own-check suite asserts
  path identity at completion vs at hold end (displayed-state assertion, A-C004-2).

### Timing restorations (Codex Observe correction 6 — restored requirements, not new cures)
- Per-figure completion/hold timestamps PRINT in build-record-attempt3 (table computed
  from the state functions at each figure's completion checkpoint — the §0 anchor table
  re-derived for the new build, not copied): the guarantee is stated as ≥ minHold after
  EACH figure's own completion, never as a uniform point (attempt-2 record's overclaim).
- Stamp transformable display type verified in the rendered-state model (C3a).
- Playback verification remains outstanding: **PIXEL-UNVERIFIED** is retained on every
  geometry/readability claim in the filing (A-C002-2); the Chrome route is re-attempted
  once and its outcome recorded, but no filing cites a pixel step as rendered verification
  while the route is blocked.

## 2. Deferrals — each priced under EVERY lens (A-C009-3)

- **D1 — Rendered-pixel verification route.** No working render route exists in-session
  (attempt 2: Chromium startup failed, "Hatch WebGL domain policy is required"). Deferred
  to the route's repair, not to a later attempt's goodwill.
  Motion: playback dynamics (C3c impact, C10a arrivals) are source-judged only — the lens
  may discount them as unverified motion. Timing: perceptual tempo unproven; timestamps
  are state-function-derived. Purity: no risk (construction is source-complete).
  Reusability: swap evidence stays computed-state, not observed-visible (the attempt-2
  return already discounts this class). Readability: the highest-priced risk — attempt 2's
  return explicitly "credits the construction without treating it as pixel verification";
  a third modelled-only filing may hold readability at/below 70 even with C4–C6 landed.
- **D2 — Mounted-DOM swap verification.** The reusability return asks for mounted DOM
  measurements; without a browser route the swap leg runs at logic level (state/geometry
  functions) only. Motion: no risk. Timing: no risk. Purity: no risk. Reusability:
  "a sixth node on screen" remains a computed claim — priced as the residual half of the
  attempt-2 swap finding. Readability: mounted bounds would have been the strongest
  C4–C6 evidence; the fit leg carries modelled DOM-derived bounds instead (D1's risk).
- **D3 — Sequence-window derivation.** Figure starts/total duration stay manually
  coordinated CONFIG values (reusability tail finding). Deriving starts from durations
  would move every §0 timing anchor the digest evidence fixes (22.5 s, FIG. order).
  Motion: no risk (windows unchanged). Timing: manual coordination is exactly what the
  §0 anchors verify — no deduction expected while anchors hold. Purity: no risk.
  Reusability: the tail finding may be re-priced at a small deduction; accepted because
  the alternative risks the evidenced timing basis. Readability: no risk.
- **D4 — Long-content desktop adaptation beyond the priced cures.** Chart label margins /
  stamp dimensions / desktop height for content longer than the supported boundary are
  handled by validation rejection (C8 pattern), not by adaptive re-layout.
  Motion: no risk. Timing: no risk. Purity: no risk. Reusability: boundary-rejection is
  the attempt-2 record's own stated policy, so the deduction risk is low; a lens pricing
  adaptation-over-rejection is the named residual. Readability: swapped over-boundary
  content shows the "Unsupported data" notice instead of overflowing — readable by
  construction.
- **D5 — FIG.25 notes/correction entrance-overlap rendered inspection** (readability
  return's closing line). Modelled under C3b/C8 (bounds + budget); rendered overlap
  judgment deferred with D1. Motion: entrance overlap is transient and unpriced at source
  level — small risk. Timing: note completion is budget-verified (C8). Purity: none.
  Reusability: none. Readability: overlap at entrance states is the one readability
  surface the model prices only by AABB disjointness at checkpoints, not continuously.

No other priced finding is deferred. Purity (100) carries no cure and no deferral.

## 3. Execute checklist (Execute agent executes in order; any step taken outside this list prints as a deviation)

- [ ] E0. Preservation FIRST (§5 of this plan) — complete, censused, and only then any mutation.
- [ ] E1. WHY-scaffold presence check: scores.md carries the pre-drafted Attempt-3 scaffold
      (appended in Plan); if absent, stop and report — do not improvise it at close.
- [ ] E2. Stage S1 — C1 factory extraction (deps-injected signatures; scene assembly separated;
      `window.T17` interface preserved byte-for-interface). Checkpoint CP1 (§6).
- [ ] E3. Stage S2 — C4 + C5 + C6 fit/readability cures (single-source gap values; wrapped-state
      masthead model; endpoint gutters). Checkpoint CP2.
- [ ] E4. Stage S3 — C7 + C8 + C9 reusability/budget cures (literals → CONFIG; palette.muted
      consumed-or-removed with the choice printed; note distribution; cliff-vs-budget
      validation; unitH derivation). Checkpoint CP3.
- [ ] E5. Stage S4 — C2 + C3 + C10 timing/motion cures (content-sensitive hold; stamp display
      assertion + AABB bounds + impact easing; stack arrivals; trace freeze). Checkpoint CP4.
- [ ] E6. Own-check suite rebuilt/extended to the §4 Verify assertions; run green on the final
      source BEFORE any payload is assembled. Suite asserts EFFECTS, not counts (§4).
- [ ] E7. A-C008 legs on the NEW attempt (§4 V8/V9) — fit-table.md + config-census.md filed in
      the artifact directory before the wave.
- [ ] E8. Per-figure completion/hold timestamp table computed from the new state functions and
      filed in build-record-attempt3.md (create-once path; neutral construction facts only —
      no cure codes, no lens commentary, per A-C008-4).
- [ ] E9. comparison.html: re-point/compare ONLY if the interface changed (it must not — C1
      preserves it); ORIGINAL side never changes; if untouched, its sha still matches baseline.
- [ ] E10. Payload manifest (§6) filed + anchor-scanned; lens payloads assembled allowlist-only;
      source comments scanned/neutralized (comments only, suite re-run) if contaminated.
- [ ] E11. Seat fires the five-lens wave (Execute agent does NOT fire lenses); filing per
      INSTRUCTION §5.3–§5.4 (scores + signed delta + verdict; WHY from the scaffold if non-beating).

## 4. Verify checklist (own legs, pre-wave; every item asserts the DISPLAYED state, A-C004-2)

- [ ] V1. **Effect mappings (A-C002-1):** for every state function, an index→effect assertion
      (e.g. correctionState note i → note i's displayed opacity at its checkpoint; stackState
      unit i → unit i's arrival transform + opacity), not slot counts.
- [ ] V2. **CONFIG consumption (A-C006-2):** mutation census over EVERY CONFIG key — mutate
      the key, assert a consumed rendered/computed effect changes; a bound-but-unconsumed
      key fails. Includes the new C7 keys and `palette.muted`'s disposition.
- [ ] V3. **Wrapped-state / displayed-state fit (A-C006-3 + A-C004-2):** the fit model
      enumerates (i) masthead meta at 1-line (desktop) and wrapped 2-line (phone) states with
      figtop derived from the actual state; (ii) FIG.22 at completion with the builder's real
      gap values — required vs stage content height + source-line bottom inside the stage;
      (iii) FIG.20 endpoint labels' displayed bounds inside the SVG; (iv) the stamp's rotated
      AABB at entrance/overshoot/settle checkpoints inside FIG.25's block + stage;
      (v) stack units at their highest arrival offset inside the figure block. Type floors
      asserted at every state (A-C003-3: containment AND legibility, source-bound).
- [ ] V4. **Literal census (A-C008-3 + A-C009-4):** source scan for numeric/color literals
      outside CONFIG against a build-record whitelist; every whitelisted literal prints
      per-literal with its structural justification; content-carrying literals are never
      whitelisted. The five C7 literals assert ABSENT outside CONFIG.
- [ ] V5. **Budget assertions:** 4 permitted notes all complete ≤ animation fraction with
      the hold intact; cliffAt at the validation boundary (just inside / just outside the
      animation fraction) accepted / rejected-with-named-warning respectively; summary at
      default length completes typing with completed hold ≥ max(minHold, len × readMsPerChar).
- [ ] V6. **Per-figure timestamps:** completion + hold printed for all six figures from the
      state functions; each hold ≥ minHoldSec; FIG.24 trace path identical at completion
      and at hold end (C10c freeze); counter↔graph normalized agreement re-asserted.
- [ ] V7. **Stamp display type:** the suite asserts the stamp's computed display is a
      transformable type in the cascade model; the filing prints PIXEL-UNVERIFIED for the
      rendered state (correction 6).
- [ ] V8. **A-C008 leg 1 — measured fit:** `guards/guard-measured-fit.md` (recreation home)
      run on the NEW recreation.html; output filed as `fit-table.md` in the artifact dir.
- [ ] V9. **A-C008 leg 2 — config census:** `guards/guard-config-census.md` run against the
      NEW attempt's own CONFIG; output filed as `config-census.md` in the artifact dir.
      The wave RUN cites both paths + hit counts; a missing leg prints the cycle INCOMPLETE.
- [ ] V10. **Swap test:** logic-level visible-output swaps across data sizes — waffle total,
      org nodes 4→6 (6th present at completion), bars 4→7, counter range, notes 1→4 (all
      complete in-budget), cliffAt boundary pair, longer FIG.20 endpoint labels (gutters
      hold), longer summary (hold scales or validation rejects). Pixel level: PIXEL-UNVERIFIED.
- [ ] V11. **Purity grep:** specimen/segment filenames, media tags/extensions, external URLs —
      0 hits; asset inventory prints (no external assets).
- [ ] V12. **Self-start (A-C010-2):** the suite asserts the piece reaches its scheduled ending
      under its own startup path, OR build-record-attempt3 prints the external-start
      dependency (Play button / comparison slave clock) as a named limitation — never as a
      scoring exemption.
- [ ] V13. **Preservation census (§5):** preserved copies re-hashed AFTER the working file's
      first overwrite and at close; inode ≠ working inode for every copy; baseline agreement
      for every untouched file.
- [ ] V14. **Playback status:** Chrome route re-attempt recorded; while blocked, every
      geometry/readability/timing claim in the filing carries PIXEL-UNVERIFIED (A-C002-2).

## 5. Preservation plan (A-C004-1 content copies · A-C005-1 create-once · A-C010-1b widened)

Run baseline (preservation-baseline.txt, machine-written per A-C003-2): recreation.html
`813318f8…` · recreation-attempt-1.html `e76948bf…` · comparison.html `f6d34482…` ·
scores.md `bfacf4fa…` (PRE-scaffold bytes — the Plan append below changes scores.md; Execute
re-baselines scores.md with a DATED APPENDED note to the baseline, never a silent rewrite).

Before ANY mutation of the artifact directory, Execute:
1. Re-hash recreation.html — must equal `813318f8…`; mismatch → STOP and report.
2. **Content copy** (cp, NEVER ln/hardlink): recreation.html → `recreation-attempt-2.html`.
   Create-once check first: the name does NOT exist in the artifact dir (verified in Plan —
   only recreation-attempt-1.html exists). If it exists at Execute: matching sha → reuse
   untouched; mismatching sha → STOP and report (A-C005-1).
3. Attempt-tagged copies of the other overwritten/evidence files (A-C010-1b), all
   create-once content copies: comparison.html → `comparison-attempt-2.html` ·
   scores.md → `scores-attempt-2.md` (captures the pre-Execute bytes, scaffold included).
   build-record-attempt2.md is already attempt-tagged — inventory + hash only, never copied
   over itself.
4. Inventory + hash the COMPLETE prior evidence set (no copies needed where already
   attempt-tagged): build-record.md · build-record-attempt2.md · codex/lens-*.md (attempt 1)
   · codex/attempt-2/{instr,lens}-*.md · segment.mp4 (also comparison.html's referenced
   ORIGINAL asset) · comparison.html.
5. Census: after recreation.html's first overwrite AND at close — every preserved copy
   re-hashed, sha frozen at its filing value, inode mechanically ≠ the working file's inode.

## 6. Staged checkpoints (A-C010-1a) + payload manifest (A-C010-1c)

Checkpoints — after each Execute stage (E2…E5), preserve a create-once CONTENT copy of the
working source + that stage's own-check output under the artifact dir:
`checkpoints/attempt-3/stage-1-factory.html` + `stage-1-checks.txt` · `stage-2-fit.*` ·
`stage-3-reuse.*` · `stage-4-timing-motion.*`. Each checkpoint asserts copy independence
mechanically (checkpoint inode ≠ working inode; checkpoint sha frozen at filing). Lens
attribution prints **BUNDLED** unless a stage checkpoint isolates an effect.

Payload manifest — before ANY lens firing, file create-once
`codex/attempt-3/payload-manifest.md` in the artifact dir:
- Exact allowlist per payload: the lens instruction · neutral technique facts (packet
  mechanics + window anchors, no scores) · build-record-attempt3.md (neutral facts only) ·
  the final recreation.html source · the neutral own-check packet (check names + results,
  no cure interpretation).
- Exclusions printed: RUN.md · scores.md · prior lens returns · target scores · cure→lens
  commentary — none may appear in any payload (A-C005-2).
- Anchor scan of each assembled payload: numerical AND qualitative anchors, INCLUDING
  filenames, labels, and source comments (A-C008-4). Current source comments are neutral
  construction notes (verified in Plan — no cure codes/amendment labels); the scan re-runs
  on the final source, and a contaminated comment is neutralized (comments only, suite
  re-run) before payloads are generated.
- The scored source is snapshotted and its sha bound to every payload (A-C010-1b/c);
  every firing's payload + return is preserved create-once under `codex/attempt-3/`
  (interim firings as instr-<lens>-run<N>.txt / lens-<lens>-run<N>.md, A-C003-1), each
  Codex return filed via `-o` to a create-once path (A-C007-2).

## 7. Premise conflicts (resolved against identifiable evidence, A-C006-1 / A-C008-1)

- **P-1 — Build-record claim vs source (builders + stack).** build-record-attempt2 states
  builders take "the palette" and stack height "derives from the stack count"; the source
  signatures are `(mount, fig, L)` closing over global `P`/`CONFIG`, and unitH is a
  device-mode constant. The reusability return prices the source truth. Plan binds the
  SOURCE; C1 + C9 carry the cures and the record-correction.
- **P-2 — Attempt-2 fit PASS vs its own model.** The attempt-2 fit table prints FIG.22
  388.2/388.2 PASS while its model budgets an 8 px gap the builder does not use (26 px) —
  the model's phone "allocated" is defined as the max required, so the fit assertion could
  not fail. C4 replaces the tautology with a displayed-state assertion against the stage's
  real content height; attempt 2's fit PASS is not carried as evidence.
- **P-3 — Stamp display type.** The timing return calls the stamp "a plain inline span"
  whose transform "cannot reliably" apply; the source CSS class `.stamp` sets
  `display:inline-block`. Neither the return's wording nor the CSS alone establishes the
  RENDERED state. Plan binds neither: V7 asserts the computed cascade in the model and the
  rendered verification stays PIXEL-UNVERIFIED (correction 6's exact demand).

## 8. Failure-point evaluation (jev-plan-exit §2.4, priced per item + item-specific)

- (a) **Big-rebuild attribution risk — HIGH, priced.** C1 (factory extraction) touches every
  builder and therefore every lens's surface; a regression after S1 is unattributable
  cure-by-cure without isolation. Mitigation: staged checkpoints (§6) with the suite green
  at CP1 BEFORE any fit/reuse/motion cure lands; attribution prints BUNDLED where a
  checkpoint does not isolate an effect. Residual: extraction + convergent cures still
  bundle inside S2–S4 stages.
- (b) **Cure interactions — priced per pair.** C2's longer completed hold is funded inside
  FIG.21's window; an over-generous readMsPerChar starves the fill/typing it funds from —
  V5 asserts both completion AND hold at default + swapped lengths. C5's wrapped masthead
  grows headerH → figtop + phone stage height move for ALL figures (re-run the full fit
  table after S2, not FIG.22 only). C4's corrected FIG.22 gap (+18 px) grows its required
  height into a stage that had zero reserve — C9's derived unitH is the compensating
  degree of freedom; if both land and FIG.22 still exceeds the stage, the stage height
  grows (phone stage is content-derived) and the growth prints. C3c's impact overshoot
  raises the stamp AABB C3b must allocate — the bounds model prices the overshoot state,
  not the rest state. C8's note redistribution shortens note gaps at maxNotes — the final
  hold (0.984 s anchor) is re-asserted after redistribution (V6).
- (c) **Overwrite / re-pointing risk — controlled.** §5 preservation precedes mutation;
  comparison.html is not re-pointed (interface preserved by C1; E9 verifies sha).
- (d) **Anchor leak — controlled.** §6 manifest + allowlist + comment scan; the seat
  computes the delta from filed returns, never from a payload.
- (e) **Instrument change — RULED OUT with reason.** Attempt 2 and attempt 3 both score
  under the same five-lens wave (motion·timing·purity·reusability·readability), bar
  avg ≥85 + min ≥70. No cross-instrument delta is read as movement.
- (f) **Fan-out cross-contamination — controlled.** This plan touches exactly one artifact
  directory (T17) and one run directory; checkpoint/payload paths are item-namespaced.
- (g) **Size-split evasion — RULED OUT with reason.** The plan is the convergent set + the
  head extraction + priced residuals, not a rebuild-from-scratch: the scene assembly,
  collapse construction, measured-length draw, and state functions are retained. The five
  deferrals (§2) are written with per-lens prices, per §8's split rule.
- **Item-specific 1 — Model tautology relapse.** C4's cure is a model change; a model
  rewritten to simply mirror the builder proves nothing (attempt 2's failure, P-2).
  Guard: the model derives from the shared named layout values but asserts DISPLAYED
  bounds against independent stage geometry (stage height, SVG width, source-line bottom),
  and V3 names the assertion targets in advance (this section).
- **Item-specific 2 — PIXEL-UNVERIFIED ceiling on the blocking lens.** Readability was
  priced 65 on modelled evidence and its return warns the model is not pixel verification;
  C4–C6 may land perfectly and readability may still not clear 70 (D1). This is the
  attempt's largest single failure point: mitigation is DOM-derived bounds in the fit leg
  (the strongest non-pixel evidence available) + the WHY scaffold's stuck-lens hypothesis
  pre-drafted so a plateau is named, not improvised.
- **Item-specific 3 — Interface break via extraction.** C1 rewrites every builder; a silent
  change to `window.T17` breaks comparison.html's slave clock. Guard: E2 asserts the full
  interface surface; E9 verifies comparison.html untouched + the slave mapping intact.
- **Item-specific 4 — Validation tightening rejects the default data.** C8's cliff/budget
  validation and C2's length validation must accept the SHIPPED defaults (cliffAt 0.68 <
  0.85 fraction; default summary fits its window) — V5 asserts defaults produce zero
  warnings before any boundary case is tested.

## 9. WHY scaffold

Pre-drafted in scores.md (Plan append, the only artifact-dir write of this phase):
"Attempt 3 — WHY scaffold (pre-drafted, practice C012)" — cure-by-cure outcome slots
C1–C10 + D1–D5 dispositions · stuck-lens hypothesis · the evidence jev-plateau will need
(per-cure outcomes, per-lens deltas, checkpoint attribution, timestamp table, PIXEL-UNVERIFIED
status). If attempt 3 beats 81.8 the scaffold stands unused as the plan record; if it does
not beat, the WHY is completed from the scaffold before the cycle closes (floor rule,
INSTRUCTION §5.4 — a non-beating attempt filed without WHY is PLATEAU-UNNAMED).
