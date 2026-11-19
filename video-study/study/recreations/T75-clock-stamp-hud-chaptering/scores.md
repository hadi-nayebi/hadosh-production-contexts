# T75 — Clock-stamp HUD chaptering · scores (attempt 1, Cycle 013 Wave 11)

Bound build: recreation.html sha256 `f22a562afc47031a8499c6c81f018ff41bb36733f70039b98bee2f5b47b96ddc` (identical for all five final lens runs; no post-wave source change; no interim wave — the first firing is the final firing).
Feeding: score-blind allowed packet per lens (lens instruction + neutral technique facts + recreation.html + score-blind build record), payloads preserved at `codex/payload-<lens>.txt`; scores.md never fed. Returns filed verbatim under `codex/`.
Pre-wave gate: jev-prewave → **FIRE-WAVE** (parameterization 1.00 · purity pre-check 1.00 · own-checks completeness 1.00 · fidelity-plan honesty 0.90) — return verbatim at `jev-prewave.md`.
Plan gate: codex-plan-review → **PROCEED** (verbatim at `codex/codex-plan-review.md`); its notes (boundary assertions at turns — covered by the harness at exactly 5000/10000/2800 ms; 15 s loop vs 14 s segment — disclosed in build-record) required no cure.
A6 legs (final build, pre-wave): `fit-table.md` — 0 HITs · `config-census.md` — 0 HITs. NOTE (lens-priced correction): the reusability lens found shaping constants the census classified as structural (scene-generator ranges/offsets, font families in CSS) — the census's classification stands as filed, and the lens's disagreement is recorded here as the leg's miss for Condense (the generator constants scale the CONTEXT scene, not the HUD subject; font families are a genuine gap — priced cure 3 below).

| Lens | Score | Return |
|---|---|---|
| motion | 82 | codex/lens-motion.md |
| timing | 90 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 76 | codex/lens-reusability.md |
| readability | 78 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 82 + 90 + 100 + 76 + 78 = 426; average = 426 / 5 = 85.2; minimum = 76.
Bar: average ≥ 85 AND minimum ≥ 70 → 85.2 ≥ 85 ✓ · 76 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED** (tier move is the style-library job's act, via the seat's hand-off).

## Plateau (A2)
Family sibling T38 (headline-card chaptering): attempt 1 FAIL 76.0 → practice attempt 3 PASS 86.8. T75 attempt 1 scores 85.2 — above T38's first-attempt 76.0 and at the bar on its first attempt; the family's priced stuck lens (motion, predicted in Plan) is indeed the second-lowest here at 82, with reusability (76) the actual minimum — the Plan's prediction is recorded as partially missed (motion was priced as THE minimum; reusability's override-surface gaps were the deeper cut).

## Priced cures for any future refinement (filed for the record; the item passes and leaves the pool)
1. **Motion (82):** scene cuts are coupled to chapter turns — the source also cuts scenes WITHIN a chapter under an unchanged clock (city→interior at 06:15). Cure: allow intra-chapter scene cuts in CONFIG (a scenes[] timeline independent of chapters[]). Tick sweep + holdMs-as-extension are allocation choices: either ground tick motion in evidence or make the tick stationary, and give holdMs a real plateau or rename its semantics (timing 90 concurs on the hold point).
2. **Readability (78):** no exclusion zone behind the HUD — generated lit windows (accent at 0.85) and stars can enter the HUD's top-left territory. Cure: reserve a quiet region behind the HUD in the scene generator (suppress windows/stars in the HUD rect) or add a subtle dark backing; drop window opacity below the HUD accent.
3. **Reusability (76):** font families fixed in CSS; the `?cfg=` override surface does not cover stage/type/geom groups; validation accepts over-long text with no fit/rejection rule; scene selection is seed-only (no scene-class variants); no mount/configure interface (config read once, autoplay unconditional). Cure: bind font families into CONFIG type, extend the override schema to all groups with fit validation, add named scene variants, expose a configure/render interface with optional autoplay.
4. **Timing (90):** comparison's 14 s window ends 1 s before the recreation loop wraps (final chapter at 80% progress) — state explicitly wherever the comparison is presented.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser in this seat): all lens verdicts are source-based; the comparison page is the render surface. Chapter turns are allocation-model (digest throughout-claim); the cold-open HUD assembly is deferred by name to P4-T01. The specimen's narration captions are excluded by fleet law and appear nowhere in the build.
