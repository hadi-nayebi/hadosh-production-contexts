# T20 — Building-as-Display Typography · SCORES

Technique: T20 (packet P1, "Look What I Can Do" @ 2:37–2:50) · Consumer: openings (title at architectural scale)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 2:36.5–2:50.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 007, Wave 5)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 92 | codex/lens-motion.md |
| Timing / tempo match | 84 | codex/lens-timing.md |
| Construction purity | 100 | codex/lens-purity.md |
| Reusability / parameterization | 68 | codex/lens-reusability.md |
| Readability | 68 | codex/lens-readability.md |

**Arithmetic:** (92 + 84 + 100 + 68 + 68) / 5 = 412 / 5 = **82.4 average** · minimum lens **68**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses the bar by 2.6 AND two lenses fall under the 70 floor (reusability 68, readability 68). Tier: **IN PROGRESS** (attempt 2 routes to the practice job).

### Priced gap (what the next attempt — practice job — must cure)

**CONVERGENT 1 (Amendment A1 — reusability 68 + readability 68 name it; primary cure): fit is asserted, never measured.** The facade sampler's auto-fit is width-only with an 8 px floor — a sufficiently long line still overflows, line-band height is never fit (more lines can overlap or lose cell ownership), and the readability lens shows the declared glyph height is overstated: cell pitch is 3.42 px but the bright rect is 76% of pitch, sampling yields ~6–7 ink rows per capital before auto-fit shrinks all lines further, so the build record's "~29 px glyph" claim lacks support. The marquee's full string is never measured against its 136.8 px strip at 360 px. Cure: measure actual sampled glyph bounds after auto-fit (ink rows/cols per letter, stems/counters preserved), fit facade text against width AND line height with a capacity diagnostic, measure + fit the marquee string to its strip, and verify partial/anchor/complete states at 360 px.

**CONVERGENT 2 (Amendment A1 — reusability 68 + readability 68 name it): intensity hierarchy is hue-only.** Lit facade cells are near-white pink and neighbors' lit windows are near-white warm — hue differs, intensity does not clearly separate; the cyan edge (12 px blur) and bright marquee compete at word intensity. Cure: establish the facade letters as the brightest visual group by construction (dimmer neighbor lit windows, priced edge-glow and marquee intensity below the facade's).

1. **Checkpoint normalization postconditions** (reusability 68): `validateCheckpoints` can still return invalid bounds — `{20000, 11000}` normalizes to `{11000, 20000}` (still past duration), `{500, −100}` keeps a negative start, `{14000, 14000}` stays zero-span (division by zero → NaN state). The build record's "checkpoint incoherence cured" claim is overstated. Cure: clamp BOTH endpoints into [0, duration] before ordering, enforce a positive span, report every correction; add these three adversarial tables to the swap test.
2. **Completion-boundary semantics** (timing 84): the 15th glyph lights at 10,300 ms, not at `lightComplete 11000` — the first glyph lights AT lightStart, so the span covers n−1 intervals and "all lit at 11000" misses the early completion; the hold is 3.7 s, not 3.0 s. Cure: adopt first/last-onset semantics (spacing from n−1), recalibrate against the 9-letter anchor, and assert incomplete-just-before / complete-exactly-at the completion checkpoint.
3. **Remaining shaping literals outside CONFIG** (reusability 68): sampler minimum font 8, orbit reference width 960, neon minimum stroke 1.5, marquee font stack, canvas minimum dimensions 300×170 — the census v2 counted hex/rgba/clamp only and missed these. Cure: move them into CONFIG and widen the census to named numeric shaping constants.
4. **Orbit reads as sway** (motion 92): the shared sinusoid reverses twice per loop — lateral sway, not a sustained orbit passage. Cure: a directionally consistent parallax passage during the reveal, verified in playback.

Own checks before the wave (build-record.md §5): swap test PASS 36/36 at logic level (new facade lines + marquee + lightComplete checkpoint + cellLit palette, cardinality 15→8 and 15→23 re-derivation, sampling regeneration with every letter owning cells, reordered/out-of-duration checkpoint cases, anchor 9-at-6.5 s, legibility floors, RNG determinism) · purity grep zero hits · config-census v2 hex/rgba/clamp outside CONFIG = 0 (scope limitation named in cure 3) · `node --check` PASS · segment ffprobe-verified (960×540, 14.000 s). Pixel render not exercisable from the build seat (no Chrome binary) — the comparison page is the render surface; phone rendering is visually unverified, as the readability return also notes.

## Attempt 2 — 2026-11-16 (practice Cycle 016, Wave 15 — executing the Cycle 015 plan)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 79 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 95 | codex/attempt-2/lens-timing.md |
| Construction purity | 100 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 70 | codex/attempt-2/lens-reusability.md |
| Readability | 79 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (79 + 95 + 100 + 70 + 79) / 5 = 423 / 5 = **84.6 average** · minimum lens **70**.
**Delta vs Attempt 1 (82.4): +2.2** (signed). Per-lens: motion 92 → 79 (**−13**) · timing 84 → 95 (**+11**) · purity 100 → 100 (**0**) · reusability 68 → 70 (**+2**) · readability 68 → 79 (**+11**).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL — beats the prior average but misses the bar:** average 84.6 is 0.4 under 85; the floor is met exactly (minimum 70). Tier stays **IN PROGRESS**; routing = continued practice work (the beats-but-fails-bar branch). **WHY section NOT owed** (the attempt beats 82.4; floor rule binds only non-beating attempts) — residual cures + stuck-lens record file below instead. All five returns bind to the identical frozen source: recreation.html sha256 `afa38d8144ce91642c27917fdf2139f74a444d908fd58665fe1b1e228b6dd285`. **PIXEL-UNVERIFIED** — and the fit measurements behind this attempt are SYNTHETIC-PIPELINE (stub raster); actual browser rasterization remains BLOCKED (fit-table-attempt2.md hit H1).

### Cure outcomes (observed mechanism effect · final lens movement · attribution confidence — BUNDLED throughout)
- **Measured fit:** coverage ownership + two-axis fit + capacity diagnostic landed; measured ink rows 7–8/letter, stems/counters asserted, marquee measured 125.5px ≤ 136.8px strip · lens movement: readability +11, reusability +2 (shared with the census cure) · confidence BUNDLED.
- **Intensity hierarchy:** luminance facade 0.936 > marquee 0.520 > neighbor 0.390, edge priced below facade · readability +11 (shared) · BUNDLED.
- **Checkpoint postconditions + completion semantics (one stage):** adversarial tables normalize with corrections reported; first/last-onset spacing 750ms, anchor exact both sides, hold exactly 3000ms · timing +11 · BUNDLED between the two.
- **Literals → CONFIG + widened census:** leg HIT list empty · reusability +2 (shared) · BUNDLED.
- **Orbit passage:** sinusoid replaced by a monotonic passage · motion **−13** — the cure landed mechanically and the lens priced the RESULT weaker as an orbit (see residual 1). BUNDLED, negatively.

### Residual cures (next attempt)
1. **Orbit presence (motion 79):** at 360px the passage totals ≈1.1px (hero) / 1.9px (far) / 4.1px (mid) — differential drift too small to read as an orbit, and no perspective/face change. Next attempt: raise CONFIG orbit amplitudes to a phone-visible passage and/or add a perspective cue; the loop-wrap reset is also priced — the seamless-wrap deferral (priced low in the plan) fired and cost.
2. **Validation domains round 2 (reusability 70):** checkpointMinSpanMs itself is unvalidated (zero/negative values can permit zero spacing / NaN state); marqueeCharMs = 0 produces NaN at t = 0. Next attempt: domain-validate the CONFIG scalars the normalization depends on, with adversarial cases.
3. **Capacity must have consequences (reusability 70 + readability 79):** an over-capacity marquee is still drawn unclipped at full width, and facade rendering ignores its fit status. Next attempt: clip the marquee to its strip and give fitStatus a rendering consequence (or a printed refusal state).
4. **Vertical fit measurement (reusability 70):** ink height is counted inside each line's band, so a clipped glyph cannot fail the height axis. Next attempt: measure ink extent against the full line region before banding.
5. **Census classification disagreement (reusability 70):** the CSS stage min-height (200px) was classified layout-structural in config-census-attempt2.md; the lens priced it as a shaping value outside CONFIG. Recorded as a classification dispute — next attempt moves it into CONFIG rather than re-arguing the class.
6. **Browser-raster block (readability 79, reusability 70):** per-char band ownership vs whole-string kerning, and all glyph-survival claims, remain unverifiable until a render route exists (H1). Not a construction plateau — an instrument limitation, printed as such.

### Stuck-lens record
Reusability is the near-stuck lens: 68 → 70 across two attempts, its remaining findings now in the validation-domain and capacity-consequence classes (residuals 2–4) rather than the literal-census class, which closed. Motion's −13 is a construction regression on a changed basis, not a plateau: the priced defect is amplitude/perspective (residual 1), directly addressable next attempt.

## Attempt 3 — 2026-11-18 (practice Cycle 029, Wave 28 — executing the Cycle 029 plan + its Codex plan review)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 84 | codex/attempt-3/lens-motion.md |
| Timing / tempo match | 97 | codex/attempt-3/lens-timing.md |
| Construction purity | 100 | codex/attempt-3/lens-purity.md |
| Reusability / parameterization | 79 | codex/attempt-3/lens-reusability.md |
| Readability | 79 | codex/attempt-3/lens-readability.md |

**Arithmetic:** (84 + 97 + 100 + 79 + 79) / 5 = 439 / 5 = **87.8 average** · minimum lens **79**.
**Delta vs Attempt 2 (84.6): +3.2** (signed). Per-lens: motion 79 → 84 (**+5**) · timing 95 → 97 (**+2**) · purity 100 → 100 (**0**) · reusability 70 → 79 (**+9**) · readability 79 → 79 (**0**).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average 87.8 clears the bar by 2.8 and the minimum lens (79) clears the 70 floor by 9. Tier: **RECREATED** pending the style-library tier move (hand-off filed to the style-library board with this scores.md pointer; the tier move is style-library's act). **WHY section NOT owed** (the attempt beats 84.6; floor rule binds only non-beating attempts). All five returns bind to the identical frozen source: recreation.html sha256 `5f6e609d2f249ffec7bd84da5e1a0314a361cdf7f52b2bd5b9ffefca9199f507`. **PIXEL-UNVERIFIED** — and the fit measurements behind this attempt are SYNTHETIC-PIPELINE (stub raster); actual browser rasterization remains BLOCKED (fit-table-attempt3.md hit H1).

### Cure outcomes (observed mechanism effect · final lens movement · attribution confidence — BUNDLED throughout)
- **Orbit presence (amplitudes ×4 + side-face strip):** passage totals on the final source measure hero 4.50 / far 7.50 / mid 16.50px at 360px (mid−hero differential 12.00px, vs 3.00 in attempt 2); the strip grows 0 → 5.25px at 360px on neighbor towers only · motion **+5** — the return credits the distinct layer speeds and the strip cues, and still prices the hero itself as sliding without a perspective change; the retained shared wrap reset was not charged as a primary residual, so the deferred seamless wrap's priced trigger does not fire · BUNDLED.
- **Validation domains round 2:** both scalars validated in one pass (non-finite span scalar → the 250 default; ≤0 → clamped; marquee scalar invalid → 0 characters at every t + named error); generative sweep 440 state evaluations, 0 invariant failures; default-configuration outputs identical to the attempt-2 archive on the time grid · reusability **+9** (shared with the capacity + census cures) · BUNDLED.
- **Capacity consequences:** marquee clipped to its strip at every fit status (recording-stub verified); facade over-capacity withholds both lit-cell passes, switches the edge to the refusal color, and records the refusal on a pure render decision (dual-over-capacity fixture records both causes); the floor jump re-measures and can report a floor fit as fitting · reusability +9 / readability 0 (shared) · BUNDLED.
- **Vertical fit (full-region basis):** each line measured on an isolated padded surface; the default specimen's extents (74px in 160px bands) sit well inside their bands, and constructed crossing / canvas-edge fixtures now fail the height axis that the band-capped basis passed · reusability +9 (shared) · BUNDLED.
- **Census move:** the stage min-height (200px) lives in CONFIG and is applied at startup (mutation 200→333 changes the applied style); the attempt-2 classification dispute is retained on record in config-census-attempt3.md, dispositioned by the move without re-arguing either classification · reusability +9 (shared) · BUNDLED.
- **Browser-raster block H1:** no construction cure — carried as a printed limitation in every filing; no attempt-3 deduction was priced on a claim this attempt printed as unverifiable (both the reusability and readability returns price the stub's limits as limits, and readability held at 79 with the reservation standing).

### Residual queue (next attempt, if the item is re-opened)
1. **Hero perspective (motion 84):** the return's primary remaining pricing — the hero tower slides at fixed dimensions with no changing view of the tower being orbited; the neighbor strip cues lateral movement only. A future attempt would need a hero-side perspective construction (not a re-tune of the strip), or pixel evidence re-pricing the slide.
2. **Validation siblings outside the swept grammar (reusability 79) — CLASS-STILL-OPEN, not a plateau:** a `Number.MIN_VALUE` duration normalizes to a span that rounds to zero spacing; a missing/null `checkpoints` object throws before endpoint validation; a zero fit-step scalar can stall either fit loop; the declared marquee validation default constant is not consumed as a fallback (the invalid path yields 0 + error by construction — printed in the census). The sweep grammar widens to these classes next attempt.
3. **Fit does not assert per-glyph cell ownership (reusability 79):** a glyph can pass both fit axes yet own zero cells after coverage filtering while timing still counts it; ownership bands are built from per-character advances while the browser draws the shaped line (kerning/ligature divergence — partly H1-bound).
4. **Marquee vertical fit + hierarchy under palette swaps (reusability 79):** marquee fit checks width only (a short strip can clip text vertically while fit reports ok); the intensity hierarchy is established for the shipped palette only — a darkened lit-cell color is not re-priced against the marquee/neighbor scales.
5. **Browser-raster block (readability 79, reusability 79):** whole-string kerning vs per-char band ownership and all browser glyph-survival claims remain unverifiable until a render route exists (H1). Not a construction plateau — an instrument limitation, printed as such.

### Stuck-lens record
Reusability: 68 → 70 → **79**. The pre-committed plateau test does **not** fire: the a3 score is ≥76 (the test's rise branch), so the near-stuck record **closes** with the class-migration note as its explanation — the literal-census class closed in attempt 2; the validation-domain / capacity-consequence / measurement-basis classes closed in this attempt; the lens's remaining findings are new siblings outside the swept grammar (residual 2), which is CLASS-STILL-OPEN, not a same-input reproduction. Motion's record: the attempt-2 regression (92 → 79 on the orbit cure) recovered to 84 on the measured-amplitude + strip construction; the wrap deferral's trigger (the reset named as a primary residual) did not fire — the motion return prices the hero's missing perspective change instead (residual 1).
