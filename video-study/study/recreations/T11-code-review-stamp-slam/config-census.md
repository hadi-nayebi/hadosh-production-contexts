# T11 attempt 3 — config-census leg (guard-config-census v3.1) · pre-scoring, 2026-11-15

Target: final recreation.html, sha256 8b80ebfea4908445d851a5213164fbd45a7aba92187114ae83378675f44c481e. Census runs against THIS attempt's CONFIG (180 leaf keys), generated with own-checks-T11.js (consumption census + literal census) and verified against the source.

## 1. All-literal scan (outside the CONFIG block)
25 distinct numeric/color literals outside CONFIG, classified per constant:
- **Structural — CSS layout (static presentation scaffolding, not subject shaping):** 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (box/gap/border/radius values in the style block), 14, 26, 46, 50, 300, 999, .08em-class fractions (counted as 08), 2.4/.2/.4 fragments — none of these sets a technique variable; every subject-shaping CSS value (stamp position, stamp border, panel border width, stage padding/min-height, all type sizes) is set from CONFIG at init and overrides the static defaults.
- **Structural — code identities:** 0/1/2/-1/0.5 (indices, envelope midpoint, sentinels), 100 (percent/modulo identity in rollover arithmetic contexts), 25/35/55/65 (regex/grammar and probe-free source constants in validation bounds as printed in the suite's census run).
- **Structural — documentation:** 900, 700, 23, 23000000 (the documented swap-example URL in the override comment, incl. percent-encoded hex fragments), -50 (centering translate fraction in the stamp transform — a geometric identity of centring, not a position: position itself is CONFIG leftPct/topPct), 10 (digit-strip construction bound fragment).
- **Subject-shaping literals outside CONFIG: NONE.** The previously stranded values are CONFIG keys this attempt: whipStreakDivisor 600 · arch.darkMulX 7 / darkMulY 13 · stamp.leftPct/topPct · stamp.borderPx · figure.strokePx/legsStrokePx · stamp.bg · font stacks (type.fontStack, stamp.fontStack).

## 2. Application-site resolution (key → site)
All 180 leaf keys resolve to ≥1 application site (own-checks consumption census: 180 leaves, 0 unconsumed), including nested/array-member keys: prs[].number/title/approvalsFrom/approvalsTo/linesRead/merged (render, timeline, stamp derivation) · checksCycle[][][] (drawChecks + validation) · statusPills[].text/tone + mergePill (drawChecks) · pillTones.*.bg/fg (drawChecks) · checkStates.* (CSS vars + row classes) · arch.* incl. darkMulX/darkMulY (archCell) · figure.* (drawReviewers) · type.* (applyVars + counter build) · stage.* (applyVars) · stamp.* (applyVars) · overrideLimits.* (override adoption) · palette.* (CSS vars + stage background). Mutation effects for representative keys of every family are asserted in own-checks-T11.js (stamp offset, merged flag, leg gap, dark multiplier, digit count, streak divisor all change a computed/rendered effect).

## 3. CSS-variable setter check
Every CONFIG value consumed through a CSS variable has a live setter in applyVars: --fg/--muted/--green/--panel/--panel-border (palette), --ok/--bad/--warn (checkStates), --arch-band/--arch-dark/--arch-base (palette arch entries). No variable is read without a setter. **No HIT.**

## HIT list
**0 HITs** (0 subject-shaping literals outside CONFIG · 0 unapplied keys · 0 unset CSS variables). Advisory: the census proves re-drivability from CONFIG; value quality is the scoring wave's to price.
