# T11 attempt 5 — config-census leg (guard-config-census v3.1) · pre-scoring, 2026-11-15

Target: final recreation.html, sha256 6d3c49d3d48f73b77a5da9d702c161384f7ad3a445ac6323f4b4682c85d7a8ef. Census runs against THIS attempt's CONFIG, generated with own-checks-T11-attempt5.js (consumption census + literal census) and verified against the source.

## 1. All-literal scan (outside the CONFIG block)
24 distinct numeric literals outside CONFIG (suite-printed set: -1, -50, 0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 26, 50, 100, 180, 300, 500, 700, 900, 999), classified per constant:
- **Structural — CSS layout (static presentation scaffolding; the carried per-literal list, printed per A-C009-4):** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (box/gap/border/radius values in the style block: stage padding fallback 8px, card gap 6px, stats gap 14px, main gap 8px, checks radius 8px / padding 7px-class values, pill radii/padding, stamp letter-spacing .08em-class fraction, stamp radius 8px), 14, 26, 50, 300, 999 — none of these sets a technique variable; every subject-shaping CSS value (stamp position, stamp border, panel border width, stage padding/min-height, all type sizes) is set from CONFIG at init and overrides the static defaults.
- **Structural — code identities and validation bounds:** 0/1/2/-1/0.5 (indices, envelope midpoint, sentinels), 100 (percent identity; also the overrideLimits member cap bound in validation), 500 (overrideLimits member cap bound in validation — NEW this attempt, named individually: a validation bound on a CONFIG member, not a technique value), 180 (angle-domain bound in validation, ±180 degrees), 10 (digit-strip construction bound fragment).
- **Structural — documentation:** 700, 900 (the documented swap-example URL in the override comment, incl. its cardMs example value), -50 (centering translate fraction in the stamp transform — a geometric identity of centring, not a position: position itself is CONFIG leftPct/topPct).
- **Content literals outside CONFIG: NONE.** Check symbols and interface labels are CONFIG data (labels.*, marks.*); the suite asserts the glyphs and the hard-coded label texts appear nowhere outside CONFIG.
- **Subject-shaping literals outside CONFIG: NONE.**

## 2. Application-site resolution (key → site)
All 196 CONFIG leaf keys resolve to ≥1 application site (own-checks consumption census: every leaf, 0 unconsumed), including nested/array-member keys and this attempt's new keys: onesStripReps (buildCounter strip construction + validation sufficiency) · stampSettleGapMs (computeTimeline merged-card span derivation) · arch.innerTopStart / arch.innerTopRatio / arch.innerCurveExp (archCell inner opening profile) · overrideLimits members (parseOverrides length policy + validation). Mutation effects asserted in the suite for the pure-path families (stamp offset fraction, first-card duration, carry fraction, crown exponent, arch half-base, dark multiplier, merged flag, streak divisor, approvals target, settle gap, inner top ratio, inner curve exponent, inner top start).

## 3. CSS-variable setter check
Every CONFIG value consumed through a CSS variable has a live setter in applyVars: --fg/--muted/--green/--panel/--panel-border (palette), --ok/--bad/--warn (checkStates), --arch-band/--arch-dark/--arch-base (palette arch entries). No variable is read without a setter. **No HIT.**

## HIT list
**0 HITs** (0 subject-shaping literals outside CONFIG · 0 content literals outside CONFIG · 0 unapplied keys · 0 unset CSS variables). Advisory: the census proves re-drivability from CONFIG; value quality is the scoring wave's question. The CSS-layout class above remains classified structural by the builder — that classification dispute is printed, per the plan, for Condense (deferral D3).
