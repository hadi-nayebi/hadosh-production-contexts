# T101 — Timeline dive · scores (attempt 1, Cycle 016 Wave 14)

Bound build: recreation.html sha256 **30564a530a7cee20d6a6bd0193fe76c302829304e5bef97f150fe653678f0067** (identical for all five final lens runs; no post-wave source change).
Feeding: score-blind allowed packet per lens (standing header + neutral technique facts + score-blind build record + fit table + FULL recreation.html); payloads preserved before firing at codex/payload-<lens>.txt; scores.md never fed; no lens saw a prior score or another lens's return; identical SHA-256 in all five payloads.
Pre-wave gates: codex-observe CONFIRMED-WITH-GAPS (gaps closed firsthand, build-record §2) · codex-plan-review REVISE — all points applied as construction requirements (build-record §2) · jev-prewave **FIRE-WAVE** (0.86 · 0.95 · 0.88 · 0.82) on the interim build, and **FIRE-WAVE re-fired** on the cured final build (0.92 · 0.96 · 0.88 · 0.84; jev-prewave-refire.md — its finding 5, a stale §6 summary, was cured before the wave fired).
A6 legs (final build): fit-table.md — **1 HIT carried** (brand wide-state ink height 8.6 px vs ~11 px floor; disposition: brand's reading state is the hold, 22.3 px) · config-census.md — **0 HITs** (one census MISS recorded and cured: CSS-block literals under-enumerated in the first scan).
Schedule basis: **t=0 allocation** (Amendment A7) — printed in build-record; the dive lifecycle re-based to build zero, never presented as measured.

| Lens | Score | Return |
|---|---|---|
| motion | 83 | codex/lens-motion.md |
| timing | 80 | codex/lens-timing.md |
| purity | 96 | codex/lens-purity.md |
| reusability | 76 | codex/lens-reusability.md |
| readability | 91 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 83 + 80 + 96 + 76 + 91 = 426; average = 426 / 5 = **85.2**; minimum = **76**.
Bar: average ≥ 85 AND minimum ≥ 70 → 85.2 ≥ 85 ✓ · 76 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**
Family comparison (A2): first attempt — no prior T101 average to beat; no plateau WHY owed. Predicted minimum lens (Plan: timing) was not the minimum — reusability (76) was, below timing (80); the prediction miss is recorded here for the seat's Condense.

## Interim wave (preserved, never averaged)
Interim build 1ebe868f… fired a full wave first: motion 86 · timing 76 · purity 90 · reusability 78 · readability 54 → avg 76.8, min 54 (returns at codex/lens-*-interim1.md, payloads payload-*-interim1.txt). The readability lens caught a real defect — at endScale 2.6 the camera reveals only 138.46 card-local px, so both text lines were cropped for the entire hold. The build was cured (text sizes re-fit to the hold-visible width · single-ease camera · loop fade · residual literals into CONFIG), self-verify re-ran, jev-prewave re-fired FIRE-WAVE, and the wave re-fired on the final build above per the identical-hash rule.

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. **CONVERGENT (motion 83 + timing 80): velocity kink at the travel/dive handoff.** One eased progress removed the zero-velocity pause, but horizontal velocity steps ≈ −105 → −271 px/s at 2600 ms and scale velocity switches 0 → ≈0.509/s. Cure: a tangent-continuous camera path (matched derivatives at the phase boundary) that preserves travel before the push.
2. **CONVERGENT (motion 83 + timing 80): loop reset visibility.** The designed fade bottoms at opacity 0.15, leaving the pose snap partly visible. Cure: fade to 0 at the seam (move the 0.15 floor into CONFIG while at it — purity also named it).
3. **Timing (−20, single lens): active passage stretched.** Movement occupies 6.8 s vs ~4.5 s measured timeline travel (~51% stretch); phase durations are the amended Plan's bound values, so re-proportioning (travel+dive toward ~4.5–5 s, hold absorbing the rest) is a Plan-level change for practice/HQ to price, not a builder improvisation.
4. **Reusability (−24, the minimum lens): geometry robustness.** Flank split hardcoded (`i<2`) with per-clip-width (non-cumulative) positioning — unequal widths can overlap; text swaps have no fit protection (a longer title can re-crop at hold); card coverage depends on endScale staying manually sufficient (no derived minimum/validation); swap evidence is narrow (no clip-count/geometry/stage variant recorded). Cure: cumulative flank layout, a derived endScale floor with validation, a text-fit guard, and a broader recorded swap.
5. **Readability (−9, single lens):** brand approach-state ink 8.6 px (carried fit HIT — mitigated by hold state 22.3 px) and bright yellow/cyan blocks competing during the approach. Cure with (4)'s fit guard; price block intensity during approach against the original's palette before changing it.

## Limitations carried
**PIXEL-UNVERIFIED** — no browser binary in this seat: all lens verdicts are source-based; fit evidence is font-metric geometry (fit-table.md) + the comparison page as render surface. The wide→travel→card-fills progression is the named **t=0 allocation**; the measured segment shows the timeline entering already close and travelling laterally (build-record §3) — the build proves the catalogue mechanic, not the segment's exact camera path.
