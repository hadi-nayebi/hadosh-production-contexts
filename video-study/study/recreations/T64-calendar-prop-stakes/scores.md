# T64 — Calendar-prop stakes · scores (attempt 1, Cycle 013 Wave 11)
Bound build: recreation.html sha256 1a713024665e3c9cfec7b4b360e678299adfb48c4c483f810ecaa9382b8db79e (identical for all five final lens runs; no post-wave source change).
Feeding: score-blind allowed packet per lens (lens instruction with standing header + neutral technique facts + recreation.html + score-blind build record + fit-table + config-census); scores.md never fed; no lens saw a prior score or another lens's return.
Pre-wave gate: jev-prewave → **FIRE-WAVE** (parameterization 0.90 · purity pre-check 0.98 · own-checks completeness 0.88 · fidelity-plan honesty 0.95) — return verbatim at jev-prewave.md. Two earlier firings preserved: interim 1 HOLD/ASSERTED-CHECKS (missing determinism census — cured, census recorded) at jev-prewave-interim1.md; interim 2 FIRE-WAVE on the pre-cure build at jev-prewave-interim2.md.
A6 legs (Amendment A6, on the final build): fit-table.md — 12 measured rows, **0 hits** · config-census.md — **0 hits**.

| Lens | Score | Return |
|---|---|---|
| motion | 92 | codex/lens-motion.md |
| timing | 74 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 73 | codex/lens-reusability.md |
| readability | 88 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 92 + 74 + 100 + 73 + 88 = 427; average = 427 / 5 = 85.4; minimum = 73.
Bar: average ≥ 85 AND minimum ≥ 70 → 85.4 ≥ 85 ✓ · 73 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**

## Interim wave (hash-binding rule — preserved, never averaged)
- Interim 1 (sha bfda84f0…): motion 83 · timing 74 · purity 100 · reusability 74 · readability 91 → 84.4 FAIL (average). Cured in full: entrance growth + hold zoom/settle (motion), slower early cadence + exit fade removed + measured props phases implemented (timing), validation hardening — fractions validated, fit coverage extended, element bounds enforced (caught a real off-stage coin during the cure), prop completion derived from actual phases, bill padding/radius CONFIG-bound, dead propsMs key removed (reusability), weekday/label sizes raised (readability). Returns: codex/lens-{motion,timing,purity,reusability,readability}-interim1.md. All five lenses re-fired on the final build.

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. CONVERGENT-IN-PRINCIPLE (timing −16 + the single-act question): the timing lens prices the calendar act against the segment's ABSOLUTE anchors (pages ~4/5 s, connector complete ~7 s, props ~11/12/13 s), while the build allocates the act from t=0 because the preceding map beat is T54's surface (RUN §1 single-act form). This is a form question for the seat/HQ, not a builder error: if absolute anchoring is the law, the cure is an explicit leading allocation interval (empty teal stage 0–3.5 s) + shifted phases (entrances ~4/5 s, dots complete ~7 s, bill/body/coin ~11/12/13 s, middle hold ~4 s). Practice should not re-attempt until the seat prices which reading governs; the same question touches every multi-technique segment in the queue.
2. Reusability (−9/−7/−5/−4/−2): fit validation and rendering disagree on the props branch (kicker/body/coin render at base sizes, not fitPx sizes); vertical containment is not summed for the bill stack or checked for header/label/coin; prop arrangement (order/duplicates/count) is assumed, not enforced — phases should derive from the configured items; contrast gate omits weekdayInk/billInk/coinInk/connector roles; dotDiameterPx has no upper bound or containment check. Cure: apply fitPx results at construction for every rendered string, sum vertical stacks in validation, enforce the supported props arrangement (one bill + one coin) or derive phases from items, extend contrastOk to every rendered foreground role, bound dot diameter against connector span/stage.
3. Readability (−7/−5): the hold zoom (stage scale → 0.90) drops the smallest text below the fit table's stated floor in effective terms (kicker/body 11 → 9.9 px effective; title/label 12 → 10.8 px). Cure: enforce the ~11 px floor at FINAL scale (base sizes ≥ 13 px for anything rendered under the zoom, or cap holdScaleTo at 0.95) and re-issue the fit table with effective (post-transform) sizes. Fit evidence remains formula-estimated, not browser-measured (standing PIXEL-UNVERIFIED limitation).
4. Motion (−5/−3): the hold zoom transforms the whole stage including the teal ground (a moving rectangle, not objects settling in a stable ground) — cure: transform an inner composition wrapper, background fixed. Connector dots fade but do not grow, while the record describes the last drawing dot as still growing — cure: per-dot scale growth alongside the staggered fade.
5. Timing (−6/−4 residuals, single lens): middle hold 5.86 s vs ~4 s in the original and late beats ~1 s ahead of their anchors — both are subsumed by cure 1's anchoring decision.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser in this seat): all lens verdicts are source-based; fit evidence is the build's own geometry arithmetic + the comparison page as render surface.
DEVIATION carried (see build-record §3): props ship ENABLED (Plan default was disabled) on firsthand in-window evidence (bill ~11 s, coin ~13 s) + the interim timing finding; the CONFIG gate itself is unchanged. Dot count: Plan binds 11; firsthand frame count is 10 — filed for style-library/digestion.
