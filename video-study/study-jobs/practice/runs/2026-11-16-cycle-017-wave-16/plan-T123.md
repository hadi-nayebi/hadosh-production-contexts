# PLAN — T123 step-card segmentation · attempt 2 · Cycle 017 Wave 16 (practice)

_Item: T123 step-card segmentation (Packet #6, Grow With Kaz — digest P6-T11). Artifact: `hidden_files/study/recreations/T123-step-card-segmentation/`. Prior cycle record: recreation Cycle 020 Wave 17 / Cycle 021 Wave 18 (`build-record.md`, `scores.md`). Plan agent tasking under INSTRUCTION §1–§2; bounded probes: every probe in this plan's Observe was per-file, foreground, capped ≤6000 chars in code — 0 breaches._
_Bar: five-lens average ≥ 85 AND no lens < 70. PIXEL-UNVERIFIED stands (no browser binary in this seat; `comparison.html` is the render surface, all verification logic-level)._

## 0. Attempt-1 lens vector (source of truth: `scores.md` + the five returns under `codex/`)

| lens | Attempt 1 | return |
|---|---|---|
| motion | 82 | `codex/lens-motion.md` |
| timing | 60 | `codex/lens-timing.md` |
| purity | 98 | `codex/lens-purity.md` |
| reusability | 79 | `codex/lens-reusability.md` |
| readability | 86 | `codex/lens-readability.md` |

Arithmetic: 82+60+98+79+86 = 405; 405/5 = **81.0 average, minimum 60 (timing) → FAIL → IN PROGRESS** (both bar legs fail). Binding hash, attempt 1: `recreation.html` SHA-256 `49e2e08318bcd973038f099e35f246b58392f87070e107421ed27baf7ff570c2`.

## 1. Premise conflicts found (priced before any cure binds)

- **PC-1 (primary) — binding §2b vs firsthand segment frames.** Recreation's binding Plan amendment §2b fixes per-step shared `atMs` (step 1 headline+tile at 2000 ms, step 2 headline+tile at 12000 ms, cycle 14000 ms). The builder's own 0.25 s frame census of the segment (270–284 s of the Packet #6 source; frames filed at `frames/seg-*.jpg` in the artifact directory) contradicts §2b on step 2 by ≥3.5–5 s and on tile 01 by ~1–1.5 s. The attempt-1 build followed §2b exactly and the timing lens priced the frames, not the plan (60). **Resolution (A-C006-1 + A-C008-1 + A-C010-3): segment evidence governs.** This plan builds to the re-observed anchors in §2 below; the §2b amendment itself is a seat act — Execute Stage 0 files the amendment + both bases + the dispute in the item's `scores.md` and the seat consumes it in RUN.md **before** the schedule changes, and the scoring payloads carry the amended basis with the dispute printed (a lens cannot price an amendment it was never fed).
- **PC-2 — RUN §1b census vs frames.** The recreation RUN §1b census places step 2 at source ~282–283 s (segment ~12–13 s); the frames place tile 02 by segment 7.0 s and headline 2 by 8.5 s. Same conflict as PC-1, second record. The timing cure names resolving these two records as part of the cure; Stage 0's filing is that resolution (frames govern, §1b superseded for step-2 timing, printed).
- **PC-3 — config-census classification vs lens pricing.** Attempt 1's `config-census.md` classified page background `#070a18` and the grid-line `1px` in `gridCSS` as structural/chrome with HITs 0, while the purity (98) and reusability (79) returns both price them as next-attempt cures. **Resolution: the lens pricing governs** — both literals are cures in this plan (C-P1, §3); the attempt-2 census must not re-classify a lens-priced literal as structural without naming the conflict.
- **PC-4 (noted, not load-bearing) — builder forecast vs returns.** Attempt 1's build record forecast timing 74 / reusability 90; the returns filed 60 / 79. No premise in this plan rests on a builder forecast; delta targets below are tied to named cures, not forecasts.

## 2. Quantitative anchors re-observed (A-C006-1 — segment evidence, defined time origin)

Time origin: **segment 0.00 s = source 270.0 s** (the cut filed as `segment.mp4`, 14.000 s, ffprobe-verified at attempt 1). Evidence: the builder's firsthand census in `build-record.md` over `frames/` at 0.25 s steps — identifiable frames, not an observation narrative alone.

Observed event sequence (A-C008-1 — this cure restructures event timing AND the headline/tile event split, so the sequence is filed beside it):

| Event | Observed bracket (segment s) | Evidence | Attempt-1 build | Attempt-2 anchor |
|---|---|---|---|---|
| (insert tail — deferred layer) | 0.00 | `seg-00.00` | empty grid 0–2 s | unchanged, named (D1/T3) |
| Headline 1 onset | present by 2.00 | census at 2.00 | 2000 ms ✓ agrees | `headlineAtMs` 2000 |
| Tile 01 onset | absent 2.75, present 3.50 → onset ∈ (2.75, 3.50] | census at 2.75 / 3.50 | 2000 ms (shared, ~1–1.5 s early) | `tileAtMs` **3250** (bracket midpoint; timing return prescribes 3–3.5 s) |
| Tile 02 onset | only tile 01 at 5.00, both present 7.00 → onset ∈ (5.00, 7.00], under headline 1 | census at 5.00 / 7.00 | 12000 ms (≥5 s late) | `tileAtMs` **6500** (bracket midpoint; return prescribes "by 7 s") |
| Headline 2 onset | headline 1 still active 7.00, headline 2 present 8.50 → onset ∈ (7.00, 8.50] | census at 7.00 / 8.50 | 12000 ms (≥3.5 s late) | `headlineAtMs` **8000** (bracket midpoint; return prescribes "by 8.5 s") |
| Next (non-technique) headline | 12.50 | census at 12.50 | headline 2 held to 14.00 | hold treatment specified in T3, not silently extended |

Bracket risk is priced, not hidden: tile 02 / headline 2 anchors carry ±0.75–1.0 s bracket uncertainty. Under A-C014-1 the adverse scenario is priced from the lens's likely basis (the frames): if the timing lens prices the midpoints at the bracket edges, the deduction estimate is −6..−10 against the timing target below (assumptions: lens re-derives onsets from the same frames at 0.25 s granularity and charges residual offset, not the cured ≥3.5–5 s error; uncertainty ±4). Even the adverse end leaves timing ≥ 78, above the 70 floor.

Entrance durations: attempt 1 uses one `tileEnterMs = 600` for tiles AND headline (`enterP` shared). The timing cure requires measuring them independently and distinguishing onset from fully-visible state: attempt 2 splits `headlineEnterMs` / `tileEnterMs` (both default 600, the only duration the source evidence supports) and the own-check suite asserts, per event, onset time (p first > 0) and fully-visible time (anchor + duration, p = 1) as separate values.

## 3. Cure plan — convergent-lens cures first

**Cure count: 11 cure lines** (C1, T2, T3, M1, M2, R1, R2, R4/P1, R5, plus R3 and the readability watch carried inside C1/C-P1 as noted) — **2 convergent**: C1 (three lenses) and C-P1/R4 (two lenses). No owner cures stand on this item (RUN §1).

### C1 — CONVERGENT (timing 60 · motion 82 · reusability 79): separate headline/tile anchors, gated on the §2b amendment
Named by all three returns as one root defect: one shared `atMs` per step. Timing: "the shared headline/card anchors compress distinct beats (its primary defect)". Motion: "the shared headline/tile anchor also removes the observed stagger". Reusability cure 3: "support separate headline/tile anchors with shared-anchor defaults".
- **Construction change:** each step gains `headlineAtMs` + `tileAtMs` (defaults: when only the legacy `atMs` is supplied, both derive from it — shared-anchor default preserved). `stateAt` selects the active headline by the greatest eligible `headlineAtMs` (see R5 — array-order selection is cured in the same change, per A-C012-2 dependent re-derivation: every consumer of the old `atMs` — headline selection, tile presence, `enterP`, `headlineP` — is re-derived from the split anchors in this stage, and the suite asserts each). Default CONFIG carries the §2 anchors: step 1 headline 2000 / tile 3250; step 2 headline 8000 / tile 6500 (note the observed order: tile 02 joins under headline 1 BEFORE headline 2 replaces it — the split anchors are what make that sequence expressible at all).
- **Gate:** Execute does not bind these anchors until Stage 0 files the §2b amendment (PC-1).

### T2 — Timing: independent entrance measurement, onset vs fully-visible
- **Construction change:** split `tileEnterMs` → `tileEnterMs` + `headlineEnterMs` in CONFIG, both consumed by `enterP` call sites (headline path / tile path separately); state samples in the own-check suite record onset and fully-visible per event (see §2).

### T3 — Timing: opening + post-12.5 s treatment specified explicitly (within the deferred-layer scope)
- **Construction change:** no schedule change beyond C1; the build record + CONFIG comment + comparison caption name the treatment: 0–2000 ms = grid ground only, standing in for the deferred insert tail (D1); 12500–14000 ms = accumulated state (headline 2 + both tiles) held to the cycle wrap, printed as a cycle-hold, NOT a specimen claim — the specimen's next headline at 12.50 s is outside this technique's two steps (D4). The neutral facts fed to the lenses carry this treatment printed (A-C010-3).

### M1 — Motion: tile 01's 85 px snap when tile 02 joins
Attempt 1: tile 01 sits centred; when tile 02 flips `display:none → block`, flex reflow shifts tile 01 left 85 px instantly; only tile 02 animates.
- **Construction change:** tile positions become computed, not reflowed — `layoutModel` returns each tile's slot offset for the currently-present set, and `stateAt` exposes a per-tile `shiftP` driven by the newest tile's entrance progress (`enterP` of the joining tile); `applyFrame` composes tile 01's transform as entrance (scale/rise) **plus** eased `translateX` from its previous slot offset to its new one over the joining tile's entrance window, same ease-out-cubic. No instant reposition at any sampled time (suite asserts tile 01's x is continuous across the tile-02 boundary at 10 ms sampling). Fixed slots were the return's alternative and are NOT taken: the frames show tile 01 centred alone at 3.50 s, so fixed final slots would contradict the segment evidence.

### M2 — Motion: headline replacement boundary + easing verification
Attempt 1: the incoming headline begins at opacity 0 (`enterFromOpacity`), leaving no visible headline at the exact replacement boundary.
- **Construction change:** headline crossfade — during the incoming headline's entrance window, the outgoing headline remains rendered at opacity (1 − p) while the incoming renders at its eased opacity; logical exclusivity in `stateAt` (exactly one *active* headline) is unchanged, the crossfade is a render-layer composition in `applyFrame`/`renderHeadline` (previous headline node retained until p = 1). New CONFIG key `headlineEnterFromOpacity` is NOT introduced — the incoming keeps `enterFromOpacity`; the cure is the outgoing hold, so at every sampled instant at least one headline has opacity ≥ 0.5 after the first headline lands (suite asserts this at the 8000 ms boundary, 10 ms sampling).
- Easing/boundary verification in rendered playback is deferred (D2, PIXEL-UNVERIFIED); the logic-level boundary sampling above is the priced substitute.

### R1 — Reusability cure 1: atomic array overrides
Attempt 1: `deepMerge` retains trailing base entries — a one-step `?cfg=` override leaves step 02; a shorter headline override retains unwanted spans.
- **Construction change:** `deepMerge` array branch replaced with atomic replacement (an override array replaces the base array whole; element-wise merging removed). Demonstrations (own-check + build record): (i) two steps → one step via override, state sweep shows no step-02 tile/headline at any t; (ii) a shorter headline (fewer spans) renders exactly the override spans.

### R2 — Reusability cure 2: three steps with fitting geometry + changed operative style
Attempt 1 geometry: 3 × tileW 158 + 2 × gap 12 = 498 px in a clipped 360 px stage — no demonstrated three-step layout.
- **Construction change:** no default-geometry change (the two-step specimen fit stands); the cure is a demonstrated production configuration + capacity validation (R5): demo override with three steps, `tileW`/`tileGap` set so the row fits (starting price tileW 104, gap 8 → 328 px ≤ 360), shorter demo texts, `tileH` raised within the stage (tileY 66 + tileH ≤ 203), and one step's operative span in the other style (blue ↔ chip) vs the default set. **A-C011-4 feasibility:** the demo's fit is measured at Execute by the fit leg run against the demo configuration (ink heights at the demo `tileW`, wrapped sub states enumerated per A-C006-3) before it counts as demonstrated; if tile text ink falls under the ~11 px floor at the demo size, the demo adjusts `titlePx`/`subPx` upward via CONFIG and re-measures — an unmeasured demo is not a cure.

### R4 / C-P1 — CONVERGENT (reusability cure 4 · purity 98's only cure): residual literals into CONFIG + honest palette documentation
- **Construction changes:** (i) page background `#070a18` → new CONFIG key `palette.pageBg`, consumed at build (body background set from CONFIG); (ii) grid-line `1px` in `gridCSS` → new CONFIG key `grid.linePx`, consumed in both gradient stops; (iii) easing → CONFIG key `geom.enterEasing` (`"cubic-out"` default) selecting the easing branch in `enterP`; (iv) headline line-height → new CONFIG key `type.headlineLH`, consumed inline at build (attempt 1 leaves it to the CSS `line-height:1` placeholder class); (v) grid angle: the `90deg` second gradient is the grid construction's axis constant — classified structural in the attempt-2 census WITH the classification printed against this cure (PC-3 rule), not silently; (vi) palette documentation corrected in the build record + CONFIG comment: numerals and blue spans consume `palette.blue`; card borders consume the separate `palette.cardEdge` — changing `blue` alone does not recolor borders, and no text claims it does.

### R5 — Reusability cure 5: timing/layout validation + rejected-configuration record
- **Construction changes:** `resolveConfig` gains validation after merge: anchors finite, ≥ 0, < `cycleMs`; per-step `headlineAtMs`/`tileAtMs` present after defaulting; durations (`tileEnterMs`, `headlineEnterMs`, `cycleMs`) positive; steps non-empty after atomic replacement (an empty-steps override is rejected, not silently defaulted); tile-row capacity (Σ tileW + gaps ≤ stage width) checked in `layoutModel` and surfaced as a validation error. Active-headline selection follows the greatest eligible timestamp, not array order (cured inside C1's stage). Rejected configurations return `{cfg: null, errors: [...]}` through the existing error path, and the own-check suite asserts a rejected set: unsorted/duplicate anchors, negative duration, anchor ≥ cycleMs, empty steps, over-capacity row — each recorded in the build record's rejected-configurations list. Per A-C011-2 the suite also probes beyond the named cases: non-finite anchor (`Infinity`/`NaN` via JSON-representable forms), null step entry, single-oversized-token sub (overflow surfaces in the fit model, not a silent clip).

### W1 — Readability watch (86, at/above the cure threshold — conditional, not a priced cure)
Tile title/sub ink models at 11.46 px, 0.46 px above the floor (attempt-1 `fit-table.md`).
- **Construction change (conditional):** none by default. Execute Stage 4 inspects the settled states at native 360 px width by the logic-level fit model re-run on the new build (all wrapped states, incl. "link in the description" two-line wrap) + the comparison surface; **if** any settled tile text measures < 11 px ink or the wrap breaks the tile's vertical fit, title/sub sizes rise via CONFIG (`titlePx`/`subPx` 16 → 17) with `tileH` adjusted in the same change and the fit leg re-run. The deferral of the unconditional raise is priced in §6 (D3).

## 4. Delta target (prior avg 81.0 → target 90.8, +9.8)

| lens | Attempt 1 | Target | Δ | Tied to |
|---|---|---|---|---|
| timing | 60 | 88 | +28 | C1 anchors on the frame basis + T2 onset/visible split + T3 named opening/hold; adverse bracket scenario −6..−10 priced in §2 (floor-safe) |
| motion | 82 | 90 | +8 | M1 snap cured by construction + C1 stagger restored + M2 crossfade boundary |
| purity | 98 | 98 | 0 (hold; floor 96) | C-P1 removes the only named gap; no new media, no traced anything — a rise is not claimed |
| reusability | 79 | 90 | +11 | R1 atomic arrays + R2 demonstrated 3-step + C1 anchors (cure 3) + R4 literals (cure 4) + R5 validation record (cure 5) — all five named cures landed |
| readability | 86 | 88 | +2 | W1 settled-state check passes (or the conditional raise lands); no regression from R2 demo geometry (demo is an override, default fit unchanged) |
| **average** | **81.0** | **90.8** | **+9.8** | target sum 454 / 5 |

PASS arithmetic: target clears avg ≥ 85 with 5.8 headroom and min ≥ 70 with 18 (timing). These are targets tied to cures, not forecasts fed to any lens (anchor-leak rule, §7d).

## 5. Preservation steps (before ANY touch — A-C004-1 · A-C005-1 · A-C010-1b)

Machine baseline already captured for this wave at the run directory's `preservation-baseline.txt` (318 files validated by the seat — 64-hex + count checked before any mutation; the original capture stands unedited).

1. **Content copy, create-once:** copy `recreation.html` → `recreation-attempt-1.html` in the artifact directory (a real content copy, never a hardlink). If the destination already exists: matching sha vs the baseline → reuse untouched; mismatching sha → STOP and report (A-C005-1).
2. **Complete prior-evidence inventory (A-C010-1b):** before the working file is touched, hash-verify against the baseline every file attempt 2 will overwrite or supersede — `build-record.md`, `fit-table.md`, `config-census.md`, `scores.md` (append-only this cycle), `comparison.html` — and file attempt-1 copies of the two A6 legs + build record under attempt-tagged create-once names (`fit-table-attempt-1.md`, `config-census-attempt-1.md`, `build-record-attempt-1.md`) since the A-C008 legs re-file under the standing names for attempt 2.
3. `comparison.html` is re-pointed/re-captioned only after the new attempt passes its own checks (§7), and only if the interface changed (it does: new CONFIG keys + split anchors); its ORIGINAL side never changes.
4. **Post-overwrite re-verification (A-C004-1):** after `recreation.html`'s first overwrite, re-hash `recreation-attempt-1.html` and assert equality with the baseline entry AND inode ≠ the working file's inode; repeat in the close census.
5. Lens payload/return paths for attempt 2 take fresh run-tagged paths (A-C005-1) — no attempt-1 `codex/` file is overwritten.

## 6. Deferred cures — each priced under EVERY lens that can see the beat (A-C009-3)

- **D1 — Screen inserts + prompt bar (standing named deferral from §2b; specimen media, purity-barred).** Priced: **purity** — positive, the deferral is what keeps this lens refusal-free (the return itself rules the omission does not reduce purity). **timing** — the 0–2 s grid-only opening is an inactive substitute for the insert tail; the attempt-1 return legitimized the omission via the named deferral while pricing the lost momentum inside its 60 — with C1/T3 the residual price is estimated −0..−2, carried in the timing target. **motion** — no insert motion is claimed or missed by the return (−0). **reusability** — inserts are not a CONFIG surface in either attempt (−0). **readability** — no deferred text (−0).
- **D2 — Rendered-playback verification of easing + replacement boundaries (PIXEL-UNVERIFIED; no browser binary in this seat).** Priced: **motion** — source inspection establishes programmed behaviour, not rendered easing; residual −2..−4 if the rendered easing/boundary differs from the model, carried against the motion target's headroom. **timing** — onset vs fully-visible is logic-asserted only (−0..−2). **readability** — settled-frame inspection is model-level (see D3). **purity / reusability** — no surface (−0).
- **D3 — Unconditional tile-text raise (readability watch W1 made conditional instead).** Priced: **readability** — the 0.46 px margin stands if Stage 4 passes; residual −0..−2. **motion / timing / purity** — no surface (−0). **reusability** — an unconditional raise would force `tileH`/row re-geometry and put the demonstrated default fit at risk; the conditional form keeps the raise CONFIG-only when it fires (−0).
- **D4 — The specimen's next headline at 12.50 s ("The plugin: Kaz Documentary") — outside this technique's two steps.** Priced: **timing** — the lens may price the 12.5–14.0 hold as an extension of headline 2's observed window: −2..−4 adverse, inside T3's named treatment and the §2 adverse pricing. **motion** — a third headline replacement is not part of the technique's accumulation mechanics as catalogued (−0). **purity / reusability / readability** — no surface (−0).

No other attempt-1 finding is deferred: every priced cure in `scores.md` maps to C1/T2/T3/M1/M2/R1/R2/R4/R5 above. §8 size check: this is a targeted cure set on one file, not a rebuild-from-scratch — no split is taken, and none is evaded (the full priced inventory is attempted).

## 7. Failure-point evaluation — jev-plan-exit §2.4 standing points, priced for T123

- **(a) Big-rebuild / multi-cure attribution risk — PRICED, mitigated.** C1 alone touches the timing core that three lenses price, and C1+R5 land in the same construction stage. Mitigation is procedural, not aspirational: staged checkpoints per cure stage (A-C010-1a) with the A-C012-4 gate (§8), so a regression is attributable stage-by-stage; where stages still bundle (C1+R5's selection fix), attribution prints **BUNDLED** for those cures in the close record — never finer than the checkpoints support.
- **(b) Cure interaction — PRICED (three named interactions).** (i) Split anchors × headline selection: array-order selection would pick the wrong headline once tile 02 (6500) precedes headline 2 (8000) — R5's greatest-eligible-timestamp selection is part of C1's stage, asserted by boundary sweeps at every anchor ±1 ms. (ii) M1 × entrance transform: tile 01's transform carries entrance scale/rise AND reposition translateX — composed in one transform string from separate state fields; the suite asserts no component resets the other at the join boundary. (iii) R2 demo geometry × readability: the three-step demo narrows tiles — it is an override configuration only, the default two-step fit is untouched, and the demo's own fit is measured before it counts (A-C011-4, R2).
- **(c) Prior-attempt overwrite / early comparison re-pointing — RULED OUT by construction of the checklists.** §5 steps run before any touch, create-once + post-overwrite re-verification are Execute steps 1–2, and comparison re-pointing is a Verify-gated step (§9), never an Execute step.
- **(d) Anchor leak — PRICED, controlled.** Prior scores and this plan's targets are named in seat tasking only; lens payloads are assembled from the neutral packet (mechanics + amended basis + dispute per A-C010-3) with a payload manifest + anchor scan filed before any firing (A-C010-1c), filenames/labels/comments included. The seat computes the delta from filed returns of both attempts; no lens is fed a target.
- **(e) Instrument-change misread — RULED OUT.** Attempt 1 was scored under the same five lenses (motion · timing · purity · reusability · readability) this attempt is re-scored under; RUN §1 confirms no instrument change for any Cycle 017 pick. The 81.0 → attempt-2 delta is like-for-like.
- **(f) Wave fan-out cross-contamination — PRICED, controlled.** One item per directory: this plan's Execute writes only inside `recreations/T123-step-card-segmentation/` plus its own run-tagged files in this run directory; plan/own-check/checkpoint filenames carry the T123 tag; the seat's close census checks the other three picks' baselines for foreign writes.
- **(g) Size-split evasion — RULED OUT.** No rebuild-from-scratch is taken (§6, §8 note): the construction is the attempt-1 file plus the named cure stages. Nothing in the priced inventory is split off; the only non-attempted items are D1–D4, each deferred in writing with per-lens prices above.

## 8. Execute checklist (staged — A-C010-1a checkpoints + A-C012-4 checkpoint gate)

_Stage order is cure order (convergent first). A stage's Execute work may not begin until the PRIOR stage's checkpoint (source copy + that stage's own-check output) is filed create-once; checkpoints are content copies, inode ≠ working file, sha frozen at filing. Attribution prints BUNDLED unless checkpoints isolate an effect._

- [ ] **Stage 0 — §2b amendment filing (no build change).** File the PC-1 resolution in `scores.md` (both bases + dispute + resolved anchors, A-C010-3 form) for seat consumption in RUN.md; confirm the seat's consumption is recorded before Stage 1 binds the anchors.
- [ ] **Preservation first (§5 steps 1–2, 5)** — `recreation-attempt-1.html` + attempt-1 leg/record copies filed create-once and hash-verified; only then is the working file touched.
- [ ] **Stage 1 — C1 + T2 (+ R5 selection fix).** Split `headlineAtMs`/`tileAtMs` with shared-anchor defaults; §2 default anchors; split `headlineEnterMs`; greatest-eligible-timestamp headline selection; re-derive every `atMs` consumer (A-C012-2). Own-checks for this stage green → **checkpoint-T123-a2-stage1** (source copy + stage own-check output, create-once).
- [ ] **Stage 2 — M1 + M2.** Computed slot offsets + eased tile-01 reposition; headline crossfade hold. Boundary-continuity assertions green → **checkpoint-T123-a2-stage2**.
- [ ] **Stage 3 — R1 + R5 + R4/C-P1.** Atomic array replacement; validation + rejected-config record; literals into CONFIG (`palette.pageBg`, `grid.linePx`, `geom.enterEasing`, `type.headlineLH`) + palette documentation correction. Consumption assertions green → **checkpoint-T123-a2-stage3**.
- [ ] **Stage 4 — R2 + W1.** Three-step demo configuration measured by the fit leg before it counts; two→one + shorter-headline demonstrations; W1 settled-state inspection at 360 px (conditional raise only if it fails, §3 W1). → **checkpoint-T123-a2-stage4**.
- [ ] Post-overwrite preservation re-verification (§5 step 4). Purity held throughout: no specimen media, no traced redraw, config-first — every visual generated in-code from CONFIG.
- [ ] Build record filed (attempt-2, score-blind): stages, checkpoint paths, demonstrations, rejected-configurations list, deviations — before any lens firing.

## 9. Verify checklist (instruments named — executed in this order)

- [ ] **A-C008 pre-scoring legs (non-skippable, BEFORE the re-scoring wave):** guard-measured-fit → new `fit-table.md` and guard-config-census → new `config-census.md`, both run on the NEW attempt's `recreation.html` against its OWN CONFIG; RUN cites each leg's path + hit count. Attempt-1 legs stand preserved under their attempt-tagged names (§5).
- [ ] **Own-check suite — effect-mapping + CONFIG consumption (A-C002-1 · A-C006-2):** for EVERY CONFIG key (including the four new keys and both split anchors) a consumed-effect assertion (key → rendered/computed effect, mutation-style where the harness supports it); a bound-but-unconsumed key fails the suite. Suite also asserts: anchor boundary sweeps (±1 ms at 2000/3250/6500/8000), onset vs fully-visible per event, tile-01 x-continuity at the join, headline-opacity floor at the replacement boundary, wrapped states enumerated for every text element (A-C006-3), CSS-parse leg on the recreation's own stylesheet (A-C012-3), and the R5 rejected-configuration set (A-C011-2 adversarial cases included).
- [ ] **Literal census:** grep/classify every shaping literal outside the CONFIG block on the new file; the census output files with classifications printed per literal — a lens-priced literal (PC-3) may not be classified structural without the conflict named. Expected survivors: error-banner chrome + measurement-model constants, classified as attempt 1.
- [ ] **Swap test (logic level; pixel where a browser exists — none does, printed):** the attempt-1 swap (words · timing scale · palette) re-run on the new anchors, PLUS the R1 demonstrations (two→one, shorter headline) and the R2 three-step demo — each state-asserted, not eyeballed.
- [ ] **Purity grep + asset inventory:** G1-A patterns over `recreation.html` = 0 hits; inventory confirms no external assets load; `comparison.html` excluded from the grep as before.
- [ ] **Comparison check:** both sides present with their labels; video 14.000 s vs cycle `cycleMs`; shared controls wired; re-point/re-caption only now, and only because the interface changed (new keys/anchors) — ORIGINAL side byte-identical to baseline.
- [ ] **Checkpoint staging verification (A-C010-1a · A-C012-4):** seat reads checkpoint file times/order against the §8 stage sequence; each checkpoint create-once, content copy, inode ≠ working file, sha frozen at filing; any stage begun without its predecessor's checkpoint files as a deviation AND caps attribution at BUNDLED; a reconstructed checkpoint, if any, is filed as RECONSTRUCTED with probe evidence, never as a stage copy.
- [ ] **Payload manifest + anchor scan (A-C010-1c)** filed before any lens firing; neutral facts carry the amended timing basis + the PC-1 dispute printed (A-C010-3) and the T3 opening/hold treatment.
- [ ] **Five-lens re-score wave** via `guards/codex-rescore-wave.md` — one stream per lens, prior scores named in seat tasking, NEVER inside a lens payload (§7d).
- [ ] **Mechanical guards (guards.md):** (1) delta arithmetic recomputed from the filed returns of both attempts; (2) attempt-preservation census — sha before/after on `recreation-attempt-1.html` + the full baseline subset for this item; (3) floor-rule gate check — beating vs non-beating determined mechanically before close.
- [ ] **Floor rule:** if the attempt does not beat 81.0, the WHY from §10's scaffold is completed and filed at close, and `guards/jev-plateau.md` fires at its call point; a PASS files the tier hand-off to the style-library board (the tier move is style-library's act).

## 10. WHY scaffold (pre-drafted — a non-beating attempt files this, completed, at close)

_Full scaffold also appended to the item's `scores.md` as "## Attempt 2 — plan scaffold (practice Cycle 017)"._

- **Outcome slots (per cure):** C1 anchors — landed / partial / missed + the timing+motion+reusability return wording that prices it · T2 entrance split — … · T3 named opening/hold — … · M1 snap — … · M2 crossfade — … · R1 atomic arrays — … · R2 three-step demo — … · R4/C-P1 literals — … · R5 validation — … · W1 settled check — passed / conditional raise landed / failed-unraised.
- **Stuck-lens hypothesis (pre-committed):** timing is the hypothesized sticking lens — not because the anchors are unobserved, but because (i) the tile-02/headline-2 brackets are the widest (±0.75–1.0 s) and a midpoint miss is the cheapest remaining deduction, and (ii) the lens may retain the RUN §1b census basis despite the A-C010-3 both-bases feeding. Secondary hypothesis: motion sticks if the lens prices the logic-level boundary evidence as unrendered (D2) rather than as programmed behaviour.
- **Plateau evidence slots (per `jev-plateau.md`'s dimensions):** causal — which cure's construction change failed to move which lens, quoted from the return, not the score · specificity — the exact anchor/bracket or construction term named · lens attribution — convergent vs single-lens pricing of the residue · consequence — what attempt 3 must change (family change vs re-tune) · evidence citation — frame ids / checkpoint ids / return lines the claim rests on.
- **What would name a plateau vs excuse it:** a plateau is named only if a cure landed as constructed (checkpoints + own-checks green) AND its lens return prices the SAME defect in the SAME terms as attempt 1; a miss where the construction did not land, or the return prices a new defect, is a failed cure, not a plateau, and files as such.

## Gate-out summary (for the seat)

Plan file: `plan-T123.md` (this file). Attempt-1 vector: motion 82 · timing 60 · purity 98 · reusability 79 · readability 86 → avg 81.0, min 60, FAIL. Cure count: 11 lines, 2 convergent (C1 triple-lens, C-P1/R4 dual-lens). Delta target: **81.0 → 90.8 (+9.8)**, target min 88 (timing). Premise conflicts: PC-1 (§2b vs frames — resolved against §2b on segment evidence, seat amendment at Stage 0), PC-2 (§1b census vs frames), PC-3 (census classification vs lens pricing), PC-4 noted. Preservation: baseline pre-captured (318 files validated); §5 steps precede any touch. Nothing built; `recreation.html` untouched by this plan.
