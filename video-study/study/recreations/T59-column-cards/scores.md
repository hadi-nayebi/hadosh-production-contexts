# T59 — Column cards: a side's whole position in one list · scores (attempt 1, Cycle 012 Wave 10)
Bound build: recreation.html sha256 19cd53b33d1591fb5b4caa8ed4652911ae0b51a0032c341b68b6d7e8e5b8ce61 (identical for all five final lens runs; no post-wave source change).
Feeding: score-blind allowed packet per lens (lens instruction + neutral technique facts + recreation.html + score-blind build record); scores.md never fed. Returns filed verbatim under codex/.
Pre-wave gate: jev-prewave → **FIRE-WAVE** (parameterization 0.95 · purity pre-check 1.00 · own-checks completeness 0.90 · fidelity-plan honesty 1.00) — return verbatim at jev-prewave.md.

| Lens | Score | Return |
|---|---|---|
| motion | 100 | codex/lens-motion.md |
| timing | 84 | codex/lens-timing.md |
| purity | 96 | codex/lens-purity.md |
| reusability | 70 | codex/lens-reusability.md |
| readability | 84 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 100 + 84 + 96 + 70 + 84 = 434; average = 434 / 5 = 86.8; minimum = 70.
Bar: average ≥ 85 AND minimum ≥ 70 → 86.8 ≥ 85 ✓ · 70 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**

## Interim waves (hash-binding rule — preserved, never averaged)
- Interim 1 (sha 9254233c…): motion 84 · timing 82 · purity 68 → purity caught the unvalidated-override external-asset defect + motion caught fade²/unevidenced motion; cured (allowlisted schema, geom CONFIG, opacity-only entrances, single row fade). Returns: codex/lens-{motion,timing,purity}-interim1.md.
- Interim 2 (sha b588a6ca…): motion 94 · timing 84 · purity 92 · reusability 68 → reusability caught unenforced validation + no text-fit guarantee + residual literals; cured (enforced full validation with defaults fallback, measured/estimated fitFont, CONFIG.geom/type completed, derived stage height). Returns: codex/lens-{motion,timing,purity,reusability}-interim2.md.

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. CONVERGENT (reusability −10 + readability residual): fitFont() stops at fitMinPx (9 px) even when text still overflows; overflow then clips silently. Cure: validation rejects (falls back) any config whose text cannot fit at fitMinPx, and add an opposition-label height-fit check.
2. Reusability (−11): validation domains incomplete — negative gap/padding/offsets/delays can pass; typography bounds unchecked. Cure: per-domain range validation for every CONFIG group + cross-field constraints.
3. Reusability (−5): residual constants outside CONFIG — line-height bounds 8/26, title divisor 15, label divisor 5, font family/weights; textWidth() reads global CONFIG instead of the caller's cfg. Cure: move into CONFIG.type; pass cfg through textWidth/fitFont.
4. Reusability (−4): holdMs 0 passes, so the fade can begin as the count entrance starts. Cure: require holdEnd ≥ countAt + lineAnimMs (count entrance completes before hold ends).
5. Readability (−8): the two shapes alone do not communicate the larger opposing membership — equal heights, the smaller side spatially wider; the count must be read numerically. Cure: add a proportional membership cue inside the two-shape composition (e.g. count block internal tick rows scaled to the count).
6. Readability (−5/−3): swapped 5-line list text drops to 11 px; count label at 10 px in 48 px usable width can split mid-word. Cure: redistribute vertical space / grow cardH with line count within layout bounds; deliberate label line breaks with per-word fit verification.
7. Timing (−16, single lens): priced in codex/lens-timing.md on the final build.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser in this seat): all lens verdicts are source-based; the comparison page is the render surface. The source's 18 reads as a full map of portrait chips; the recreation binds the amended Plan's form (opposing count block) — a named surface deviation recorded in build-record.md §1, with the map itself owned by T54.
