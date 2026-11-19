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
