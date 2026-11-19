# scores — T168 Spoke draw-on with dot landing · attempt 1 · Cycle 026 Wave 23

- Build: recreation.html · SHA-256 **267628f24bdb9bb28f2d6aa812674bc09d30c5994d98116a64a776173d80e5d2** (identical SHA bound in all five lens payloads: codex/payload-{motion,timing,purity,reusability,readability}.txt; recomputed at filing — match).
- Schedule basis: **t=0 allocation** — allocation starts = source segment-relative starts under one constant −100 ms offset (400/1120/1720/2160/2600), durations preserved exactly (480/400/280/280/240), holds derived = source holds (240/200/160/160), S5 ends 2840, cycleMs 4200.
- PIXEL-UNVERIFIED: no browser binary in this seat — verification is LOGIC-level (stateAt harness probes, raw output in build-record.md); the comparison page is the render surface. Pixel-level render proof was not exercisable.
- Prewave: jev-prewave **FIRE-WAVE** (parameterization 0.85 · purity pre-check 0.95 · own-checks completeness 0.90 · fidelity-plan honesty 1.00; return jev-prewave.md). Disposition: APPLIED — wave fired. Its one non-blocking qualification (spoke.easing declared but not dispatched) was cured before the wave (easing key now selects the interpolation; default linear unchanged; own-checks re-ran clean on the cured build) — the reusability lens independently confirms the cure in its return.
- A6 legs: fit-table.md HITs **0** (no subject text in this item — the table prints that fact as its row set) · config-census.md HITs **0**.
- Own checks: swap PASS · purity grep 0 hits · node --check PASS · count 5 vs 5 MATCH · zero-state probes PASS · schedule invariant PASS at timingScale 1 and 0.5 (raw output in build-record.md).

## Lens table (returns filed verbatim in codex/)
| lens | score | return |
|---|---:|---|
| motion | 100 | codex/lens-motion.md |
| timing | 100 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 90 | codex/lens-reusability.md |
| readability | 87 | codex/lens-readability.md |

## Arithmetic (mechanical, §5.5)
Sum = 100 + 100 + 100 + 90 + 87 = 477 · Average = 477 / 5 = **95.4** · Minimum = **87**.
Bar: average ≥ 85 (95.4 ✓) AND minimum ≥ 70 (87 ✓).

## Verdict: **PASS → RECREATED**

## Family baseline
First SixMap wave — no in-packet prior attempts. Cross-packet family: T132 serial presentation FAIL 83.2 (4-lens-era family form for cadence discipline) · T111 logo outro sting PASS 88.0 (t=0 allocation precedent). This attempt (95.4, five lenses) clears both.

## Findings carried (priced, non-blocking)
- Reusability 90: cycleMs is NOT scaled by timingScale — at timingScale 2 the last landing (5680 ms) would exceed the 4200 ms cycle reset. A reuse trap for future consumers: define cycleMs as scaled or absolute, or validate landings fit. Recorded for practice/production adoption; the filed build's default timingScale 1 schedule is unaffected.
- Readability 87: the specimen's own 1.5 px spoke renders at 0.5 px on a 360 px stage — subpixel-thin during motion (the lens records the risk explicitly and establishes no blocking cure; the value is the specimen's and CONFIG-exposed); the hub conceals each spoke's first ~32 px (emergence reads progressively, ~98 ms for S1); landing/hold states read clear, with a 1360 ms final hold.
- Predicted stuck lens was MOTION (materialisation step read as a pop) — it scored 100: the payload carried the packet's step prescription and the lens judged against the specimen. No WHY section is owed on a PASS (A2 binds FAILs).
