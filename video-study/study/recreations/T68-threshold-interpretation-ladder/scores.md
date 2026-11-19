# T68 — Threshold-interpretation ladder · scores (attempt 1, Cycle 013 Wave 11)
Bound build: recreation.html sha256 110a25fcdab596f487e7324b4000f5dcdf8ec88ed771e6307f2b09bf983af4d8 (identical for all five final lens runs; verified unchanged after the wave).
Feeding: score-blind allowed packet per lens (lens instruction + neutral technique facts + recreation.html); scores.md never fed; no lens saw another's return or any prior score. Returns filed verbatim under codex/.
Pre-wave gate: jev-prewave FIRE-WAVE (parameterization 0.90 · purity pre-check 0.95 · own-checks completeness 0.90 · fidelity-plan honesty 0.75) — jev-prewave.md.
A6 pre-wave legs (final build): fit-table.md — 0 HITs · config-census.md — 0 HITs.

| Lens | Score | Return |
|---|---|---|
| motion | 92 | codex/lens-motion.md |
| timing | 87 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 75 | codex/lens-reusability.md |
| readability | 88 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 92 + 87 + 100 + 75 + 88 = 442; average = 442 / 5 = 88.4; minimum = 75.
Bar: average ≥ 85 AND minimum ≥ 70 → 88.4 ≥ 85 ✓ · 75 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**

## Interim wave (hash-binding rule — preserved, never averaged)
Interim build sha b3195dcb…: motion 74 · timing 79 · purity 100 (codex/lens-{motion,timing,purity}-interim1.md; reusability/readability not fired on the interim). Convergent defect (motion + timing): band 1 arrived after the card landed instead of with it, the band reveal was a fade where the specimen wipes, and exit opacity compounded on the bands. Cured on the final build (band starts anchor to the entrance, horizontal clip wipe, exit rides the parent only) and all five lenses re-fired — motion +18, timing +8 against the interim.

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. CONVERGENT (motion −6 + timing −7) — the default omits the segment's third reveal beat (~9 s, "Van Hollen at 28: a first"): the two-band default is the wave Plan's binding, filed as a discrepancy in build-record §1; the cure is a Plan-level act — promote the evidenced third band into the default (with band timing settling ~9 s) or demonstrate a specimen-matching three-band preset. The machinery already carries it (swap-verified).
2. Reusability (−9) — validation domains incomplete: negative geometry, invalid font bounds, nonpositive line-height, offstage calendar positions can pass; calendar text has no fit check. Cure: per-domain range validation for every CONFIG group + calendar fit checks in fitOk().
3. Reusability (−5) — fadeMs 0 is accepted but render at holdEnd divides 0/0 → NaN opacity. Cure: guard zero-duration phases (instantaneous transition when a phase duration is 0) — applies to enterMs/bandAnimMs too.
4. Reusability (−5) — fallback is silent: a rejected config restores defaults with no diagnostic. Cure: surface a diagnostics object on window.__T68 (rejected keys + reason) so production can see the substitution.
5. Reusability (−4) — fit measurement prices bands at weight 700 while ranges render at 800; the long-word check prices at bandMinPx rather than the selected size. Cure: measure the range span at 800 and the word check at the selected per-band px.
6. Motion (−2) — band 1's wipe completes 50 ms after the card entrance (6450 vs 6400). Cure: shorten band 1's wipe or start it 50 ms earlier so it completes with the landing.
7. Readability (−4) — dark card vs teal ground has modest tonal separation at phone size. Cure: a CONFIG-driven card edge/shadow treatment that raises the boundary without changing the palette.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser in this seat): all lens verdicts are source-based; fit evidence is PIL glyph measurement (DejaVu stand-in) + the Node logic harness; the comparison page is the render surface. Sub-beat timings are 1 fps sampling of the segment — sub-second specimen timing inside a 1 s cell is unresolvable. Catalogue discrepancy (TECHNIQUES window 13:21–14:16 + ev/t815 do not evidence the ladder; the evidenced state is ev/t910 at 910 s, segment 903–917 s) is filed in build-record §1 for style-library/digestion.
