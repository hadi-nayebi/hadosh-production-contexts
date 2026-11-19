# T06 — Multiplying Tile Wall · SCORES

Technique: T06 (packet P1, "Look What I Can Do" @ 0:31–0:53) · Consumer: transitions · accumulation visual (DLC/multilingual production containers)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 0:30.5–0:53.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 004, Wave 2)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 66 | codex/lens-motion.md |
| Timing / tempo match | 80 | codex/lens-timing.md |
| Construction purity | 100 | codex/lens-purity.md |
| Reusability / parameterization | 62 | codex/lens-reusability.md |
| Readability | 64 | codex/lens-readability.md |

**Arithmetic:** (66 + 80 + 100 + 62 + 64) / 5 = 372 / 5 = **74.4 average** · minimum lens **62**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses the bar by 10.6 and three lenses (motion 66, reusability 62, readability 64) fall under the 70 floor. Tier consequence: **IN PROGRESS** — attempt 2 routes to the practice job (A3 division of labour); the tier move itself is the style-library job's act on this evidence.

### Priced gaps (what attempt 2 — practice job — must cure)

**CONVERGENT (Amendment A1 — THREE lenses name it; primary cure): established tiles reset at every wave boundary.** Motion (66), timing (80) and readability (64) independently name the same defect: `render(t)` computes entrance progress for ALL tiles of the current wave from that wave's `timeMs`, so tiles established by earlier waves drop in opacity/scale at each new wave and re-grow — the wall visibly resets instead of only the NEW cohort arriving. The seat's own harness missed it because it sampled state at wave checkpoints and well after boundaries, never in the first ~380 ms after a boundary. Cure: entrance progress must be priced per-cohort (a tile's birth wave), established tiles render at full opacity permanently; add a boundary-window check (sample at wave time +50 ms) to the harness before any re-score.

1. **Reusability (62):** CONFIG-only reuse fails on — independent phase timing not fully parameterized, URL overrides unvalidated (malformed values pass through), visual parameters stranded in CSS/logic (badge sizes, wall geometry percentages, hero dimensions, motif constants), and wave/seek state behavior not covered by config. Cure: centralize the stranded constants as config keys; validate/normalize all overrides at load; price the parameter boundary explicitly.
2. **Readability (64):** beyond the convergent reset — invisible grid occupants (tiles beyond the current count still occupy grid cells at opacity 0, distorting geometry at intermediate counts) and badge/hero legibility at phone width and maximum density not proven. Cure: remove non-current tiles from layout flow (display:none, not opacity 0); verify badge + hero separation at 360 px width and at the 32-tile / 24+4 states.
3. **Timing (80):** checkpoint counter values are exact, but temporal fidelity also requires an explicit pre-first-wave reset (badge/tile state before 500 ms) and cold-start/restart/backward-seek rendered-state checks — logical wave-state checks alone missed the visible defects above. Cure: explicit cleared state before wave 1; harness checks at cold start, restart, and backward seek.
4. **Motion (66), secondary:** intermediate wave timings remain an allocation model; their fidelity to the actual sung-line landings is unproven (printed limitation of this attempt — the two measured checkpoints are exact).

### Own verification (filed in build-record.md §5)
Swap test: ALL PASS (9 checkpoints exact; swapped counter value 99, label "objects yesterday", timings phase2StartMs 12000 + waveEntranceMs 900, palette #ff0000 — technique intact). Purity grep: ZERO HITS; asset inventory — every tile code-drawn by this build. Comparison: synced single control set, labels correct, phone stacking. NOTE: the swap harness's sampling blind spot (no boundary-window sample) is itself recorded as a cure above — the convergent Codex finding stands over the harness PASS.

## Attempt 2 — 2026-11-14 (practice Cycle 003 Wave 2)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 86 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 94 | codex/attempt-2/lens-timing.md |
| Construction purity | 100 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 77 | codex/attempt-2/lens-reusability.md |
| Readability | 66 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (86 + 94 + 100 + 77 + 66) / 5 = 423 / 5 = **84.6 average** · minimum lens **66** (readability).
**Signed delta vs attempt 1:** 84.6 − 74.4 = **+10.2**. Per lens: motion 66→86 (+20) · timing 80→94 (+14) · purity 100→100 (0) · reusability 62→77 (+15) · readability 64→66 (+2).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses the bar by 0.4 and readability (66) falls under the 70 floor. Tier consequence: **IN PROGRESS** — attempt 3 routes to the practice job; the tier move itself is the style-library job's act on this evidence. The attempt BEATS the attempt-1 average, so no WHY section is owed under the floor rule.
**Final source:** recreation.html sha256 `ed129cbd87d844f04fbdad0a4c1a24917fd5412adf00c313ffa4a2bd7dde30fb` — all five lenses fired against this identical sha; payloads preserved at codex/attempt-2/instr-<lens>.txt and inspected before firing (result recorded in build-record-attempt2.md).

### Own verification (filed in build-record-attempt2.md; diagnostics in this artifact directory)
Per-cure diagnostics ran BEFORE the integrated build was finalized, then an integrated regression pass re-ran them on the final source (CA-1 staging). Diagnostics prove each mechanism; the lens delta above belongs to the combined attempt — no per-cure score attribution is claimed.
- Cohort cure → per-cohort entrance check, `diag-cohort.txt`: ALL PASS (359 assertions) — established tiles at opacity 1 / scale 1 at boundary −1ms/+0ms/+50ms, cell rects identical across each boundary (including into the 24+4 final state), long-entrance swap (9000ms > 2500ms spacing) priced from birth waves.
- Layout/readability cure → layout occupancy check, `diag-layout.txt`: ALL PASS (32 assertions) — non-current tiles display:none, occupancy equals current count at every wave, modelled badge/wall and badge/hero separation at 360px and 960px and at the 32-tile and 24+4 states.
- Timing cure → combined state check, `diag-combined.txt`: ALL PASS (18 assertions) — explicit cleared state before 500ms, 11 checkpoints exact, cold-start/restart/backward-seek deterministic.
- Reuse cure → override swap check, `diag-swap.txt`: ALL PASS (10 assertions) — changed counter/label/tile count/timings/palette work; invalid values rejected with warnings; phase-switch normalized to the schedule.
- Integrated regression, `diag-integrated.txt`: ALL PASS (419 assertions). Purity grep: ZERO HITS. Inline script compiles clean.
- **PIXEL-UNVERIFIED:** headless Chrome refused to start ("Hatch WebGL domain policy is required for browser startup"); no screenshot exists. Separation/layout numbers are modelled geometry, never cited as rendered proof (CA-4).

### Deferred in writing (not attempted, not counted as attempted)
**Intermediate-wave timing allocation limitation — DEFERRED.** Missing evidence: measured sung-line landings for the intermediate waves (the packet prices two checkpoints only: counter 1 @ 500ms, counter 24 @ 16500ms). Consequence: timing fidelity for intermediate waves stays an allocation model this attempt. It is not curable from the record. Both the motion (86) and timing (94) returns name this same limitation as the remaining timing uncertainty.

### Priced gaps (what attempt 3 must cure, from the attempt-2 returns)
1. **Readability (66) — the blocking lens:** at a 360px stage the phase-2 label prices at ~4.5px and the phase-1 label at ~7.2px (container-relative type scales down with the stage); the phase-2 numeral prices at ~16.6px. Cure: a phone-size badge treatment whose label text stays readable (larger label share, possibly a stacked/reserved badge area at small stage widths), never shrinking the numeral's legibility. Secondary: dense tile interiors (tiny tags, fixed-width motif strokes at ~31×25px phase-1 cells) risk visual noise — simplify tile interiors at high density; hero panels read by placement more than size hierarchy — strengthen the size step. Rendered maximum-density verification remains owed wherever a render route exists.
2. **Reusability (77):** (a) `phase2StartMs` is normalized to the schedule and thereafter inoperative as a control — make it operative or price it explicitly as a derived value in the parameter boundary; (b) visual constants remain in CSS/logic (tile/hero radii, text colors and offsets, label tracking, hero figure proportions, motif selection and block/bar/orbit ranges, gradient-angle range) — expose or price each; (c) validation is incomplete — geometry/motif fields, heroCols, entranceStartScale lack validation, invalid palette entries and filtered waves warn silently, nonexistent wave-index overrides are ignored without a warning, and non-finite durations can pass some checks; (d) a zero entrance duration bypasses stagger — stagger must hold when entrance duration is zero.
3. **Motion (86), secondary:** fixed cells produce progressive occupancy; whether call-wall growth should read as subdivision of existing tiles is unverified against the record — attempt 3 prices the question from packet evidence before changing the layout model. The phase-2 switch also opens on a transparent first cohort (a brief empty-wall reveal) — price whether the re-formation should carry any occupancy at its first instant.
4. **Timing (94):** only the deferred allocation limitation above; anchors, holds, and seek determinism are confirmed by the return.

### Preservation note
recreation-attempt-1.html was copied create-once at preflight and hash-equals the baseline recreation.html sha (592669bc…). Immutable files (build-record.md, segment.mp4, attempt-1 codex/lens-*.md) verified against the baseline at preflight: all match EXCEPT the baseline's own lens-timing.md line, whose printed sha is 62 characters (truncated, missing "4d"); the file's actual sha256 is 3cbfc0b1cf4d4d9848aba2d384f838f13054a6cb9728b2b6d100c65138f8fe41 and its content was read in full at E1. The discrepancy is in the baseline text, not in the preserved file. comparison.html was not edited: the interface it consumes (play/pause/restart/setTime) is unchanged, and its ORIGINAL side is untouched.

## Attempt 3 — Plan WHY scaffold (Cycle 026)

Pre-drafted at Plan (practice Cycle 026, Wave 25; plan: `hidden_files/study-jobs/practice/runs/2026-11-18-cycle-026-wave-25/plan-T06.md`) so a non-beating attempt's WHY is filed at close, not improvised at close (INSTRUCTION §2, §5.4). Prior governing average: **84.6** (attempt 2). Bar: avg ≥85 AND no lens <70. Outcome slots below are filled at close from the filed attempt-3 returns; an empty slot at close = an incomplete WHY.

### Cure-by-cure outcome slots
- **C1 — Phone-size badge treatment** (px floors on both phase labels: ≥11px modelled @360/390 in every displayed state incl. the cleared state; phase-2 numeral floored, never shrunk; stacked/reserved phase-2 badge band at stage ≤480px; hero name floored at 10px): outcome — [ ] readability return's badge pricing @360/390: ___ · modelled floors met in fit-table-attempt3.md: ___ · lens movement attributed (BUNDLED unless stage-1 checkpoint isolates): ___
- **C2 — Density-gated tile interiors** (tags dropped below the cell threshold, motif strokes cell-relative, bar count density-scaled; full interiors at phase-2/desktop density): outcome — [ ] readability return's maximum-density pricing: ___ · own-check interior-mode mapping result: ___
- **C3 — Hero size step** (heroWidthPct 44→50, heroHeightPct 52→58, fallback 56; targets: hero/cell area ≥2.0×, height ratio ≥1.30× @360/390, badge separation jointly asserted): outcome — [ ] readability return's hero pricing (size vs placement): ___ · modelled ratios achieved: ___
- **C4 — Bounded reusability bundle** (phase2StartMs priced as derived + override→warning asserted; stagger holds at zero entrance duration; non-finite values rejected with warnings): outcome — [ ] reusability return's pricing of (a)/(b)/(c): ___ · reusability movement: ___
- **Held lenses:** motion outcome vs the badge/wall geometry risk (−0…−4 priced at Plan): ___ · timing outcome vs the untouched schedule (−0…−1 priced): ___ · purity outcome (construction unchanged in kind): ___

### Stuck-lens hypothesis (falsifiable)
**Readability is the stuck lens (66 → +2 only across attempts 1→2, while motion moved +20 on a construction cure). The live question is GEOMETRIC vs PROXY:** the a2 readability return prices SOURCE-MODELLED type geometry (its own numbers reproduce exactly from CONFIG cqw values; PIXEL-UNVERIFIED stands). Hypothesis H-GEOMETRIC: readability is priced on modelled type size, so flooring both labels at ≥11px and the phase-2 numeral at ≥17px in a source-bound model that asserts the DISPLAYED size (CSS `max()` mirrored in the model, wrapped states enumerated) moves readability to ≥70. Falsifier: attempt 3's fit table shows every floor met at 360/390 in every displayed state AND the readability return still scores <70 — then the lens is pricing something the geometry model does not carry (rendered-density impression, interior noise weight, hierarchy weight, or a higher implicit floor), the hypothesis is dead, and the WHY must name which residual the a3 return itself prices instead of re-asserting geometry.

### Evidence jev-plateau needs if attempt 3 does not beat 84.6
1. The filed attempt-3 returns verbatim (all five, `codex/attempt-3/`), with the readability return's own named residual quoted — not paraphrased.
2. `fit-table-attempt3.md` + `config-census-attempt3.md` (A-C008 legs on the new source): modelled sizes at 360/390 per element per displayed state, floors pass/fail per line.
3. Stage-checkpoint attribution: checkpoints 1–4 + their own-check outputs, so the plateau claim can say which stage moved or failed to move which lens (or print BUNDLED honestly).
4. The a2→a3 return-wording comparison on identical elements (phase-2 label, phase-1 label, dense interiors, heroes): same words at a higher modelled size = proxy-pricing evidence; new words = a moved target, named as such.
5. The delta-route tolerance check from the plan: readability landing + motion/timing movement, against the printed survival line (readability ≥72 survives motion −4 / timing −1; readability 70 with motion −3 fails on average with the floor cured).
6. What attempt 4 would do differently under each branch: H-GEOMETRIC confirmed (push floors higher / attack the return's next named residual) vs falsified (stop tuning geometry; price a rendered-density or construction-family change, with the D2 subdivision split re-examined) vs technique rests (named reason).

## Attempt 3 — 2026-11-18 (practice Cycle 026 Wave 25)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 86 | codex/attempt-3/lens-motion.md |
| Timing / tempo match | 88 | codex/attempt-3/lens-timing.md |
| Construction purity | 100 | codex/attempt-3/lens-purity.md |
| Reusability / parameterization | 79 | codex/attempt-3/lens-reusability.md |
| Readability | 82 | codex/attempt-3/lens-readability.md |

**Arithmetic:** (86 + 88 + 100 + 79 + 82) / 5 = 435 / 5 = **87.0 average** · minimum lens **79** (reusability).
**Signed delta vs attempt 2:** 87.0 − 84.6 = **+2.4**. Per lens: motion 86→86 (0) · timing 94→88 (−6) · purity 100→100 (0) · reusability 77→79 (+2) · readability 66→82 (+16).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average clears the bar by 2.0 and every lens is at or above the 70 floor. Tier consequence: **RECREATED** — the tier move itself is the style-library job's act on this evidence (PASS hand-off, plan addendum finding 5).

### Cure outcomes (from the pre-filed WHY scaffold slots — attempt BEATS, so no WHY is owed; slots completed as the record)

- **C1 — Phone-size badge treatment:** readability return prices the phase-1 numeral at 41.4px @360 with the floored 11px label fitting one line in its 135px zone, and the phase-2 badge at 17–17.94px over an 11px label with 6.5–9.9px clearance in the reserved band. Modelled floors met in `fit-table-attempt3.md` (18 harness assertions PASS, 0 FAIL). Attribution BUNDLED across stages.
- **C2 — Density-gated interiors:** readability return prices maximum density as distinguishable (gutters, gradients, motifs; phase-1 tags hidden @360); phase-2 tags remain at 3.42px as texture — phase-2 cells (42.9px) sit in full mode, as priced at Plan.
- **C3 — Hero step:** readability return prices heroes at ~3.63× area / ~1.80× height of a meeting cell — hierarchy cured. Residual named by the return: hero 2px borders extend beyond the modelled boxes (next-build item: border box-sizing).
- **C4 — Bounded reusability bundle:** reusability 79 (+2); the return records the schedule-derived phase switch as accepted and carries the D4/D5 residuals forward (remaining visual literals; warning-backed validation of override indices, integer seeds, timing relationships) — the priced ceiling of the bounded bundle.
- **Held lenses:** motion 86 (0) — residual is the deferred D3 transparent first cohort at the phase switch (deferred in writing at Plan). Timing 88 (−6) — entrances trail the counter at wave onsets; the return asks a future build for opacity assertions at the measured checkpoints; anchors remain exact. Purity 100 (0).
- **H-GEOMETRIC hypothesis: CONFIRMED.** The fit table shows every floor met at 360/390 in every displayed state and readability moved 66→82 (+16) on the floored geometry — the lens was pricing modelled type geometry, and flooring it in a source-bound model that asserts the displayed size moved it past the floor.

### Firing record (score-blind discipline)

Payloads: `payload-manifest-attempt3.md` filed BEFORE firing (allowlist: lens instruction + neutral technique facts + NEW source + score-blind build record; header names the BAR only). Each lens fired in its own scratch cwd (`~/workspace/.scratch/c026-T06-<lens>/`, payload copy only), single stdin stream, read-only sandbox; returns content-copied to `codex/attempt-3/lens-<lens>.md` with sha256 verified identical to the scratch captures, create-once. **Session read scopes (A-C019-2):** all five sessions read only their payload (source and build record embedded in it) and executed it under DOM stubs; the reusability session additionally attempted the standalone artifact directory path and received "No such file or directory" — no out-of-allowlist content was read by any session. **Contamination gate (plan addendum, finding 4):** no return cites prior scores or out-of-allowlist material — no SESSION-CONTAMINATED returns; the PASS verdict stands on clean evidence. Checkpoints 1–4 + both A-C008 legs + the manifest were present and read back before firing (A-C012-4 gate satisfied). Preservation: post-wave census — all attempt-2 invariants byte-identical (preserved copy ed129cbd… + all attempt-2 returns); only the mutable working source changed, as intended; comparison.html unchanged (interface unchanged in kind; ORIGINAL side untouched).
