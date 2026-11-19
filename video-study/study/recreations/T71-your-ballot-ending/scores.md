# T71 — Your-ballot ending · scores (attempt 1, Cycle 013 Wave 11)
Bound build: recreation.html sha256 cffa1da8728ba4bb8b811dbe29a4eac4fa49d09700295c244c1338c3da2fe542 (identical for all five final lens runs; no post-wave source change).
Feeding: score-blind allowed packet per lens (lens instruction with standing header + neutral technique facts + recreation.html + score-blind build summary); scores.md never fed; no lens saw a prior score or another lens's return. Interim firings on a superseded build are preserved verbatim and NEVER averaged: codex/lens-motion-interim1.md (74) · codex/lens-timing-interim1.md (45), both on build c64520f0… — their CONVERGENT timing defect (ballot completed at 2100 ms vs the measured ~7000 ms boundary) was cured with the CONFIG revealAtMs segment-time offset + positivity validation, and the wave re-fired in full on the final build (identical-hash rule).
Pre-wave gate: jev-prewave FIRE-WAVE (parameterization 0.85 · purity pre-check 1.00 · own-checks completeness 0.90 · fidelity-plan honesty 0.95) — jev-prewave.md.
A6 legs (Amendment A6, final build): fit-table.md (8 measured rows, 0 hits carried) · config-census.md (0 hits carried; 4 pre-cure literals cured into CONFIG).

| Lens | Score | Return |
|---|---|---|
| motion | 82 | codex/lens-motion.md |
| timing | 92 | codex/lens-timing.md |
| purity | 96 | codex/lens-purity.md |
| reusability | 80 | codex/lens-reusability.md |
| readability | 84 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 82 + 92 + 96 + 80 + 84 = 434; average = 434 / 5 = 86.8; minimum = 80.
Bar: average ≥ 85 AND minimum ≥ 70 → 86.8 ≥ 85 ✓ · 80 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. CONVERGENT (reusability −10 + readability −4 + motion residual): text fitting is estimated (char count × CONFIG fraction), not measured — at fitMinPx an overlong choice is silently clipped by nowrap/hidden overflow. Cure: measure real text bounds (canvas measureText in-browser), and wrap or explicitly reject/fall-back on overflow instead of clipping.
2. CONVERGENT (reusability −6 + motion residual): stage height derives only from backdrop geometry — more choices or wrapped org/prompt text can push the card past the stage and clip. Cure: derive stage height from measured card height + backdrop geometry.
3. Readability (−8, single lens): org line at 11 px (at the fit floor) and date at 12 px are small at phone size; org letter-spacing tightens it further. Cure: enlarge the small labels (org/date) with re-measured fit rows.
4. Reusability (−4, single lens): invalid overrides fall back to the specimen defaults silently — no rejection status reaches the caller. Cure: expose the validation outcome (e.g. __T71.validation = {ok, restored}) so production can detect a restored default.
5. Motion (−8 residual, single lens): the entrance lift + staggered choice/prompt fades are an allocation model — the 1 fps evidence shows the ballot already complete at its first frame, so the intra-ballot stagger is not directly evidenced. Cure: finer-grained source sampling (sub-second frames around 924–926 s) to verify or replace the stagger.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser in this seat): all lens verdicts are source-based; fit evidence is the build's measured-estimate geometry (fit-table.md) + the comparison page as render surface. The three-claim replay is DEFERRED-named (transcript structure outside the ballot mechanic, RUN §2b) — its segment time is carried as the CONFIG revealAtMs offset, not rebuilt. The choice stagger inside the ballot act is a labeled ALLOCATION MODEL (ballot complete at first evidenced frame, ~7 s).
