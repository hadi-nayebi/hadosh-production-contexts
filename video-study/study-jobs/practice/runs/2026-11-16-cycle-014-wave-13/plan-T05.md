# PLAN — T05 Pop-in Collage Grid · Attempt 3 · Cycle 013 Wave 12 (2026-11-16)

_Item: T05 (packet P1, "Look What I Can Do" @ 0:24–0:35) · Artifact dir: `hidden_files/study/recreations/T05-pop-in-collage-grid/` · Plan agent filing; Execute spawns only after the seat fires `codex-plan-review` on this plan and `jev-plan-exit` (A-C009-1 fan-out split)._
_Prior: attempt 2 = **82.4 avg** (motion 87 · timing 84 · purity 100 · reusability 68 · readability 73), FAIL — avg misses bar (≥85) by 2.6, reusability 68 breaks the 70 floor. Delta target: beat 82.4 AND clear every lens ≥70; the binding lens is reusability (68 → ≥70 minimum, realistically ≥78 to carry the average), readability 73 the second constraint._
_Instrument: same five lenses, same bar (avg ≥85 AND no lens <70) — no instrument change; deltas vs attempt 2 are pure movement._

## (a) Cure plan — convergent first (Amendment A1), construction change per cure

### Quantitative anchors re-observed (A-C006-1) — segment evidence, origin defined

Time origin: recreation t=0 = source 0:23.5 = segment t=0. Segment verified firsthand this Plan: ffprobe — h264, 960×540, 30 fps, duration 12.000 s. Frames extracted (ffmpeg, segment times) and viewed by the Plan agent:

| Segment t | Recreation t | Frame observation |
|---|---|---|
| 0.2 s | 200 ms | Exactly 2 panels (waveform + sequencer) — initial pair confirmed |
| 3.5 s | 3500 ms | 5 panels (waveform, sequencer, scene, room, planet) — matches the filed arrival table (5 at recreation 3500 ms) |
| 5.6 s | 5600 ms | 6 panels (spiral present, bottom-right) — sixth panel present by this frame |
| 7.5 s | 7500 ms | Specimen grid continues densifying/rearranging beyond 6 panels (smaller cells, new content) — outside the priced inventory (see Deferral D-2) |

**A-C006-1 verdict: NO CONFLICT on the priced anchors.** The filed schedule (initial pair at 0; arrivals 1200/2300/3400 → 5 panels at 3500 ms; spiral 5600 ms) is consistent with every frame observation at frame granularity. The **2200 ms planet→spiral exception (T-2)** stands as recorded, not hidden: the frames bound planet present by segment 3.5 s and spiral present by segment 5.6 s, so the true gap lies inside that window and sparse frames cannot settle its exact moment — the exception is evidence-bounded, not contradicted. No replacement anchors are established; Execute binds the filed anchors.
One non-priced observation, recorded so it is not silently carried: the specimen's lyric line 2 is already typing at segment 0.2 s, while the recreation starts line 2 at 2300 ms. The attempt-2 timing lens (84) did not price lyric start times; they are not a priced anchor for this attempt — disposition in Deferral D-2 with per-lens risk priced (A-C009-3).

### Convergent cures (named by 2+ lenses — first)

**CURE 1 — U-4 · Corrective handling, not warning-only** *(reusability 68 + readability 73 — the wave's only reusability×readability convergence; outranks all single-lens cures)*
Construction changes in `recreation.html`:
- `LABEL_TOO_WIDE`: on trigger, step the effective label size down (0.25 px steps) to the R-1 corrected fit; if still wide at the size floor, shorten the displayed label from the right under a recorded policy (identifying word first is preserved — truncation eats the tail). The corrected size/string is what renders; the warning records `LABEL_CORRECTED:<i>:<from>→<to>`.
- `LYRIC_TOO_WIDE`: step lyric size down to fit the R-1 lyric model (prompt + margin + cursor included); if still wide at `lyricMinPx`, the line is rejected from rendering with `LYRIC_REJECTED:<i>` recorded — never rendered overflowing under `nowrap` + stage clipping.
- `DURATION_STRANDS_CONTENT`: a panel whose `popAtMs + popMs > durationMs` is rejected atomically — the override/schedule edit that strands it does not take effect (prior valid value retained, rejection recorded in the warnings list the suite can assert, A-C006-4 form); a directly-authored CONFIG stranding is clamped to `durationMs − popMs` with the correction recorded.
- Lyric completion vs loop duration (new check, was never performed): for every line, `startMs + text.length × lyricCharMs ≤ durationMs` is validated; a violating line/duration combination is corrected by the same atomic-rejection rule (the duration edit or line edit that breaks completion does not take effect) and the corrected schedule is asserted.
- Every correction asserts its RESULT (rendered size/string/schedule after correction), not the warning's presence — a warning alone no longer counts as a safeguard anywhere in the file.

**CURE 2 — M/T-1 · Loop-boundary reset form** *(motion 87 + timing 84 — convergent)*
Construction changes:
- Reset fade applies ONLY to non-initial arrivals: the `--fade` variable is set per-panel — initial pair holds `--fade = 1` through the reset window and across the wrap; later arrivals fade over `resetFadeMs` as now. The field is never near-empty at any cycle point.
- Transition suppression: a `noanim` class (transition: none) is applied to the stage for (i) the initial render (initial panels' first `.on` assignment cannot animate on load) and (ii) the reset-application frame at wrap; it is removed after that frame renders. State application and visual transition are thereby separable in the source model.
- Lyric wrap: lyric rows no longer vanish instantaneously at wrap — the lyrics container receives the same reset-window fade as the non-initial panels, then rows clear at the wrap instant while faded out.
- Displayed boundary behaviour (sampled `--fade` values vs actual interpolated opacity) remains browser-owed — see Deferral D-1; the source model must at minimum assert the per-panel fade targets and the suppression class's presence at both boundary states.

### Single-lens cures — reusability (68, the floor-breaking lens)

**CURE 3 — U-1 · Independent factory defaults + rgba channel range**
- Replace `const DEFAULTS = JSON.parse(JSON.stringify(CONFIG))` (a clone of the editable CONFIG — an invalid authored value "falls back" to itself) with an independently authored factory-defaults literal (`FACTORY_DEFAULTS`) written as its own object in the source, sharing no reference and no derivation with CONFIG. Every fallback site reads FACTORY_DEFAULTS.
- `isColor` rgba branch: channels validated by range, not digit count — each of r/g/b an integer 0–255, alpha 0–1 (the current `\d{1,3}` accepts 999). Asserted cases: `rgba(999,0,0,1)` rejected → factory fallback; a CONFIG-authored invalid color falls back to the FACTORY value even when CONFIG's own copy of that key is the invalid one (the attempt-2 self-fallback case, asserted directly).

**CURE 4 — U-2 · Registry own-property / prototype-free lookup**
- `RENDERERS` becomes a prototype-free registry (`Object.create(null)`) AND every lookup site uses an own-property test: validation (`RENDERERS[p.type]` truthiness), URL type override (`RENDERERS[ty]`), and panel construction (`RENDERERS[p.type] || RENDERERS.pattern`). A type named `constructor` (also asserted: `toString`, `hasOwnProperty`) falls back to the pattern renderer and renders visible content — no crash. The `constructor` case is a named own-check.

**CURE 5 — U-3 · Numeric validation breadth**
Finite + range validation across ALL numeric keys, each falling back to FACTORY_DEFAULTS with a named warning:
- Grid: `gridCols`/`gridRows` must be finite positive INTEGERS (fractional and infinite values rejected — today `>=1` passes 2.5 and Infinity); gap ≥ 0 finite; grid percents in (0,100]; resolved-geometry containment asserted after resolution (every panel rect inside the stage under the resolved values at 360×202.5 and at the reference size).
- Duration: `durationMs` must be finite (NaN bypasses today's `<2000` comparison) and ≥ CONFIG `minDurationMs` (Cure 8); `resetFadeMs`, `popMs`, `fadeMs` finite, ≥0, and `resetFadeMs < durationMs`.
- Schedule/lyric: every `popAtMs` finite ≥0; lyric `startMs` finite ≥0; `lyricCharMs` finite >0.
- Typography: all `*FontPxAt960` / `*MinPx` finite >0 with min ≤ reference; `labelLineHeight`/`lyricLineHeight` finite >0.
- `seed`: finite integer ≥0 (drawing determinism depends on it).
- Design spaces: `canvasWidth/Height`, `svgWidth/Height` finite positive integers.
- URL overrides inherit the same validation (integer-syntax alone no longer suffices — range/finiteness checked post-parse).

**CURE 6 — U-5 · Scope residue + `initial` operational**
- Into CONFIG: font families (one key per role: label, lyric, brand, check — today `"Courier New",monospace` / `monospace` are CSS/inline literals), lyric font weight (today `700` in CSS), prompt right margin (today `0.45em` inline), cursor margin-left (today `2px` in CSS), responsive scale floor (today the `0.55` literal in both `scaleFor()` and `validateConfig()`) as `responsiveScaleFloor`.
- SVG design-space scaling: the authored shape coordinates are written against the 160×96 authored space; when `svgWidth`/`svgHeight` change, every SVG builder scales its coordinates by `(svgWidth/160, svgHeight/96)` so the artwork scales with its design space instead of only the viewBox changing. Bounding asserted: all scaled coordinates remain inside the new viewBox.
- `initial` flag made operational: render logic is `on ⇔ panel.initial === true OR t ≥ popAtMs` — an initial panel renders arrived at t=0 regardless of arrival-time edits. Asserted as an effect mapping: set an initial panel's `popAtMs` to 5000 via override → it is still on at t=0; a non-initial panel with the same value is not. (The remove-the-flag alternative is NOT taken: the flag carries the M/T-1 reset semantics — initial pair preserved through reset keys off the same flag.)

### Single-lens cure — readability (73)

**CURE 7 — R-1 · Border-aware label-fit model (+ lyric footprint model)**
- Label model: `labelAvail = panelWidth − 2×panelBorderWidthPx − labelPadLeftPx − checkReservation`, where `checkReservation = checkRightPx + checkGlyphAdvance` (check glyph advance modelled at 0.6 em × effective check size). This corrects the attempt-2 model that claimed 49.6 px available vs ≈47.6 px actual against 49.5 px of modelled text for the longest labels ("room walls", "planet pro", 10 chars).
- Lyric model: `lyricAvail = lyricWidth − promptAdvance − promptMargin − cursorFootprint`, prompt advance = promptText length × 0.6 em × lyricPx, cursor footprint = `cursorWidthEm × lyricPx + cursor margin`.
- Both models re-asserted under the longest supported labels/lines AFTER correction, at 360 px and 390 px widths; the corrected model is the one Cure 1's shrink-to-fit consumes (one model, two consumers — no second fit implementation).

### Single-lens cure — timing (84)

**CURE 8 — T-2 · Cadence exception recorded + minimum-duration literal into CONFIG**
- The planet→spiral 2200 ms gap (3400 → 5600) is retained as a filed exception in the build record with its evidence bound (frames bound the gap inside segment 3.5–5.6 s; §(a) anchor table) — recorded, not hidden, not "fixed" by inventing an unevidenced arrival time.
- The `2000` minimum-duration literal (today hardcoded in `validateConfig`) moves into CONFIG as `minDurationMs: 2000`; validation reads only the CONFIG key (literal census, Verify V-4, must find no remaining bare 2000 in logic).

### Deferrals (each with reason + per-lens risk, A-C009-3)

- **D-1 · Rendered boundary/phone evidence** (displayed opacity across the reset, longest-label/check separation as rendered, panel-content recognition at phone size): deferred by environment — no browser binary exists in the session (attempt-2 PATH/cache probe negative; PIXEL-UNVERIFIED stands). Risk priced per lens: motion — MEDIUM (displayed boundary interpolation unproven; source-model assertions only); timing — MEDIUM (same boundary, sampled-vs-displayed gap is exactly what its return priced); readability — MEDIUM (rendered fit rests on the corrected R-1 model, not pixels); reusability — LOW; purity — NONE.
- **D-2 · Specimen behaviour beyond the priced inventory** (post-5600 ms densification visible at segment 7.5 s; lyric line start times — line 2 typing by segment 0.2 s vs recreation 2300 ms): deferred — neither is in the attempt-2 priced inventory, and adopting either changes the piece's event sequence/panel count, a rebuild-scope change that §8 splits out of this attempt rather than bundling silently. Risk per lens: motion — LOW-MEDIUM (the 6-panel hold diverges from the specimen's continued densification; two prior waves did not price it); timing — MEDIUM (lyric starts are the largest unpriced schedule divergence observed this Plan; if the timing lens re-prices schedule fidelity beyond arrivals, this is where it lands); readability — LOW (denser grid would shrink panels further); reusability — NONE; purity — NONE. Named as the first candidate inventory for attempt 4 if attempt 3 passes, or for the WHY's next-attempt line if it does not.
- **D-3 · Configurable completion/loop lifecycle + completion signal** (reusability return's "stronger reuse" suggestion; the mandatory fade-and-repeat lifecycle is unchanged): deferred — a suggestion, not a priced gap; the bar can be met without redesigning the consumer contract mid-attempt. Risk: reusability — LOW (the return priced validation/initial/scope defects, not the lifecycle); all other lenses — NONE.

## (b) Execute checklist (in order; A-C010-1a stages + A-C012-4 gate bind)

- [ ] E-0 Preservation re-verify: `recreation-attempt-2.html` + `comparison-attempt-2.html` exist as CONTENT copies, sha = baseline (see §Preservation below), inode ≠ working files. No Execute step runs if this fails.
- [ ] E-1 Stage gates (A-C012-4): stages run strictly in order 1→4; a stage's work may NOT begin until the PRIOR stage's checkpoint (source copy + that stage's own-check output, create-once, content copy) is filed. Checkpoint copies assert inode ≠ working-file inode and sha frozen at filing. Attribution prints BUNDLED unless checkpoints isolate an effect.
  - Stage 1 — Validation core: Cure 3 (U-1) + Cure 4 (U-2) + Cure 5 (U-3).
  - Stage 2 — Corrective + fit: Cure 1 (U-4) + Cure 7 (R-1) (one shared fit model).
  - Stage 3 — Scope + semantics: Cure 6 (U-5: CONFIG residue, SVG scaling, `initial` operational) + Cure 8 literal move (T-2 config part).
  - Stage 4 — Boundary: Cure 2 (M/T-1) + Cure 8 exception filing (T-2 record part).
- [ ] E-2 Per stage: rebuild `recreation.html` config-first (no specimen media, no traced assets — purity binds exactly as recreation §6); run that stage's own-checks (see Verify V-1/V-2 suites) green before checkpointing.
- [ ] E-3 Source-comment hygiene (A-C008-4): no cure codes, amendment labels, or cure-to-lens commentary in `recreation.html` comments at any stage; the final source is comment-scanned before payloads are built.
- [ ] E-4 Swap test before any wave (logic level minimum): labels + lyric lines + one arrival re-time + one palette entry + one panel type via URL overrides, each asserted as an effect (changed value → changed rendered state), incl. the new `initial`-flag effect (E/Cure 6) and a 2×3 alternate composition contained + completing.
- [ ] E-5 `comparison.html`: re-point ONLY if the interface changed (new CONFIG keys do not break the existing swap surface; if Execute changes override keys/semantics, update the comparison's swap URL + note and preserve the attempt-2 comparison copy untouched — it already exists). ORIGINAL side never changes.
- [ ] E-6 Build record filed as `build-record-attempt3.md` (create-once): construction form, schedule + T-2 exception with evidence bound, exact CONFIG scope statement, named floors, per-check diagnostic ledger (changed variables · controls held · expected effect · measured result), checkpoint ledger with paths/shas, PIXEL-UNVERIFIED carried verbatim.
- [ ] E-7 Freeze: final `recreation.html` sha256 computed and printed in the build record; every lens payload binds that sha; no source change after freeze except through a printed deviation + re-freeze + payload regeneration (create-once, run-tagged paths).

## (c) Verify checklist (instruments, not intentions)

- [ ] V-1 **Effect mappings (A-C002-1):** the own-check suite asserts mappings, not counts — pop scale off/on states; arrival state vector at 0/1199/1200/3500/5600 ms; per-panel reset fade targets (initial = 1, arrivals fade); `initial` override effect (Cure 6); every correction's corrected RESULT (Cure 1); registry fallback rendering for `constructor`/`toString`/unknown types; SVG scaled-coordinate bounds under a changed design space.
- [ ] V-2 **Consumption census (A-C006-2):** for EVERY CONFIG key (including all Cure-6/T-2 additions), a consumed-effect mapping key → rendered/computed effect; a bound-but-unconsumed key fails the suite. Census output filed; hit count cited in the wave RUN.
- [ ] V-3 **Adversarial validation set (A-C011-2 — binding on this validation cure):** beyond the named cases — (i) non-finite values (Infinity/NaN grid dims, duration, pop, charMs, seed); (ii) null/absent groups (missing `panels`, null `lyricLines`, absent optional keys → factory fallback, no throw); (iii) warning/error display paths (warnings reach `window.T05_WARNINGS` AND console, asserted for at least one case per warning family); (iv) single-oversized-token overflow (one very long unbroken label word + one very long lyric word → corrected, not clipped silently); (v) resize recompute (layout at 360 → resize to 960 → back: geometry, fit model, and canvas redraw recompute; no stale panel rects); plus the named set: rgba 999 channel, CONFIG-self-fallback color, fractional cols (2.5), `constructor` type, lyric-completion violation, stranded pop.
- [ ] V-4 **Literal census (A-C008-3):** source scan for numeric/color literals outside CONFIG against a build-record whitelist of named structural constants (authored SVG shape coordinates in the 160×96 space and arithmetic identities — 0, 1, 2, 100 — are the expected whitelist shape; the `2000`, `0.55`, `0.45em`, `2px` cursor margin, and font-family strings must NOT appear outside CONFIG after the build). Unlisted literal = suite failure. Content literals are never classified structural (A-C009-4).
- [ ] V-5 **Plan-semantics assertions (A-C008-2):** the suite asserts the displayed surfaces AS THIS PLAN STATES THEM, derived from plan text — initial pair displayed arrived at t=0 and through the reset; corrected labels fully inside their strips (no intrusion into the check reservation under the R-1 model); a rejected lyric line absent from the rendered rows. A suite written from the build's own state vocabulary does not satisfy this item.
- [ ] V-6 **Displayed-state model (A-C004-2/A-C006-3):** fit/geometry asserted on displayed bounds — border-inclusive label fit, wrapped states enumerated for every text element that can wrap, grid-to-lyric clearance re-measured under the corrected model at 360/390 px; PIXEL-UNVERIFIED printed wherever rendered evidence is claimed.
- [ ] V-7 **A-C008 legs on the NEW attempt, pre-scoring (non-skippable):** measured-fit leg + config-census leg (recreation guards v3.1, fired by reference) run on attempt 3's `recreation.html` against attempt 3's own CONFIG; outputs filed in the artifact dir as `fit-table.md` + `config-census.md`; the wave RUN cites each leg's path + hit count. Missing either output → the wave prints INCOMPLETE.
- [ ] V-8 **Payload manifest (A-C010-1c + A-C005-2 + A-C008-4):** before any lens firing, file the manifest — exact allowlist (neutral recreation source + neutral own-check packet: check names/results only, no cure interpretation), exclusions (RUN.md, scores.md, prior returns, target scores, cure→check commentary), and the assembled-payload anchor scan covering filenames/labels/source comments. Payloads + returns preserved create-once under `codex/attempt-3/` (interim firings as `instr-<lens>-run<N>.txt` / `lens-<lens>-run<N>.md`, A-C003-1) BEFORE any subsequent source change.
- [ ] V-9 **Five-lens re-score wave** (`guards/codex-rescore-wave.md`): motion · timing · purity · reusability · readability, one stream per lens, score-blind packet per V-8; prior scores named ONLY in the seat's tasking, never inside a lens payload (no anchor leak).
- [ ] V-10 **Mechanical guards:** (1) delta arithmetic recomputed from the filed returns of BOTH attempts (incl. scale validation — every SCORE an integer 0–100); (2) attempt-preservation census — attempt-1 + attempt-2 copies and all immutables sha-compared against the baseline after the wave; (3) floor-rule gate check — non-beating close blocked without the WHY (§(e) scaffold → filing).
- [ ] V-11 `jev-plateau` call point fires at close IF the attempt does not beat 82.4 (seat judging under the same floors while transport is unbound, printed as such).
- [ ] V-12 Tier hand-off on PASS: file to the style-library board with the scores.md pointer (the tier move is style-library's act).

## (d) Failure-point evaluation (jev-plan-exit §2.4, priced for THIS item)

- **(a) Big-rebuild attribution risk — PRICED HIGH.** Eight cures land in one file in one attempt; a lens regression would be unattributable cure-by-cure by default. Mitigation is structural, not aspirational: the four A-C010-1a stages with create-once checkpoints (E-1) isolate stage-level effects, and attribution prints BUNDLED wherever checkpoints cannot isolate. Residual risk stands even with checkpoints: Stages 2's two cures (U-4 + R-1) share one fit model by design, so a readability movement inside Stage 2 attributes to the pair, not to one cure.
- **(b) Cure interaction — PRICED HIGH, two named interactions.** (i) U-4 shrink-to-fit vs the readability floors: corrective shrinking can push label/lyric sizes below `labelMinPx`/`lyricMinPx` — the policy floors the shrink AT the mins and escalates to truncation/rejection instead, but a build that shrinks through the floor trades a reusability cure for a readability regression (the exact convergent pair this attempt must move together). (ii) M/T-1 × timing: preserving the initial pair through reset + transition suppression changes the boundary the timing lens priced at 84; a suppression implementation that also suppresses the first animated arrival's pop would regress motion. Both interactions are asserted in V-1/V-5 (floor-respecting correction results; arrival pops still animate at 1200/2300/3400/5600).
- **(c) Prior-attempt overwrite / early comparison re-point — RULED OUT with evidence.** Preservation completed in Plan (below) as content copies with distinct inodes, sha = baseline, BEFORE any mutation; comparison re-pointing is gated at E-5 and the attempt-2 comparison copy already exists. Residual: the A-C012-4 checkpoint files multiply copies in the artifact dir — checkpoint naming must never collide with the preserved names (create-once, stage-tagged).
- **(d) Anchor leak — PRICED MEDIUM.** The payload surface includes the source's own comments (A-C008-4) and the neutral packet; attempt-2's build record is dense with cure language and must stay out of every payload (V-8 manifest + anchor scan incl. filenames). Prior scores (82.4, per-lens vector) live only in seat tasking.
- **(e) Instrument-change misread — RULED OUT.** Attempt 2 and attempt 3 are both five-lens instruments under the same bar; no four-lens boundary is crossed for T05 (that boundary exists for T15, not this item).
- **(f) Wave fan-out cross-contamination — PRICED LOW.** Four items run in parallel (T18/T19/T13/T05), one artifact directory per item; this plan writes only under T05's directory + this run directory. The shared risk is the run directory itself (four plan files) — filenames are item-tagged (`plan-T05.md`).
- **(g) Size-split evasion — RULED OUT with the split printed.** This is a targeted rework of a retained construction (grid, clock, renderers unchanged in kind), not a rebuild-from-scratch; the genuinely rebuild-shaped scope (post-5600 densification, lyric re-timing) is split out in writing as D-2 rather than bundled. The eight in-scope cures are all validation/boundary/scope work on the existing construction.
- **Item-specific — checkpoint-gate slip (A-C012-4): PRICED MEDIUM.** Two consecutive cycle families deviated on staging; E-1's gate (no stage begins without its predecessor's checkpoint filed) is the control, and the seat's Verify reads checkpoint file times/order against the stage sequence. A stage begun early caps attribution at BUNDLED and files as a deviation.
- **Item-specific — validation-cure self-deception (A-C011-2's founding failure): PRICED MEDIUM.** Attempt 2's suite passed 38/38 while missing every defect the reusability lens then priced. V-3's adversarial set exists precisely against this; a suite that only re-asserts the named cases repeats the failure with better paperwork.

## (e) Pre-drafted WHY scaffold (floor rule — filed at close if attempt 3 does not beat 82.4; NOT owed if it beats)

- **Outcome line:** attempt 3 avg ___ vs 82.4 (Δ ___); per-lens: motion ___ (87) · timing ___ (84) · purity ___ (100) · reusability ___ (68) · readability ___ (73). Verdict: ___.
- **Cure-by-cure outcome slots:** U-4 corrective ___ (moved / partial / no movement — evidence: ___) · M/T-1 boundary ___ · U-1 factory defaults ___ · U-2 registry ___ · U-3 numeric breadth ___ · U-5 scope + `initial` ___ · R-1 fit model ___ · T-2 exception + literal ___.
- **Stuck-lens hypothesis (pre-committed):** if non-beating, the stuck lens is expected to be **reusability** — not for the named cases (all cured + adversarially probed under V-3) but for a completeness class the V-3 set still does not enumerate (the A-C011-2 pattern: the lens prices the unprobed class, not the probed one); second candidate **readability**, stuck on rendered evidence — the corrected R-1 model passes while PIXEL-UNVERIFIED means no source model can prove rendered fit, i.e. the plateau would be an evidence plateau, not a construction plateau.
- **Evidence `jev-plateau` will need (pre-committed, per its dimensions):** causal specificity — the stage-checkpoint ledger (which stage's checks turned which behaviour); lens attribution — the filed attempt-3 returns quoted at the priced passages, not scores.md's summary; consequence — the next-attempt line below, or a rest recommendation with its reason; evidence citation — checkpoint shas + V-3 suite output + fit-table/config-census paths for the NEW attempt.
- **What the next attempt would do differently (pre-drafted):** obtain a render route and close D-1 with pixel evidence before any further source-model tuning (a third proxy re-tune of the fit/boundary surfaces without pixels is the A-C011-3-shaped deviation); take D-2 (lyric re-timing + post-5600 densification) as the priced inventory; if reusability sticks on a new unprobed class, widen V-3 by that class in Condense rather than re-running the same set.

## Preservation (completed in Plan, before any mutation — INSTRUCTION §2.3, A-C004-1, A-C005-1)

Baseline source: `runs/2026-11-16-cycle-013-wave-12/preservation-baseline.txt` (machine-written). Destinations were ABSENT at Plan time → created as CONTENT copies (`cp`, no hardlinks), then re-verified after copying:

| Copy | sha256 | Baseline match | Inode (copy vs working) |
|---|---|---|---|
| `recreation-attempt-2.html` | `7a4b25f1a6f0705931b0cebe87f3c690f5e2a1b8025e3491a51bb3e9b6ac182f` | ✓ = baseline `recreation.html` line | 4992564 vs 4341542 — DIFFERENT ✓ |
| `comparison-attempt-2.html` | `0dc698068ebed434fd45fb3fa8f69f8cd59a00ab83166679b9f5908ee1e6a54a` | ✓ = baseline `comparison.html` line | 4992565 vs 4341592 — DIFFERENT ✓ |

Working files untouched by this Plan (sha still = baseline). The seat's closing census re-verifies both copies AFTER the working file's first overwrite (A-C004-1). `scores.md` NOT edited by this Plan.
