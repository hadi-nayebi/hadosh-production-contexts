# T56 — Recreated press cards as evidence props · scores (attempt 1, Cycle 012 Wave 10)

Bound build: recreation.html sha256 `8d0c6dea8516463d9bfdafcc95f67e8defb7b54b3c36df7e179b56c2e703b276` (all five final returns below bind to this identical file; verified unchanged after the wave).
Feeding: score-blind allowed packet per lens (lens instruction + neutral technique facts + recreation.html + score-blind build record); scores.md never fed; no lens saw another lens's return.
Pre-wave gate: jev-prewave **FIRE-WAVE** (parameterization 0.92 · purity pre-check 0.97 · own-checks completeness 0.94 · fidelity-plan honesty 0.88; return at `jev-prewave.md`).

| Lens | Score | Return |
|---|---|---|
| motion | 94 | codex/lens-motion.md |
| timing | 92 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 86 | codex/lens-reusability.md |
| readability | 82 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 94 + 92 + 100 + 86 + 82 = 454 · average = 454 / 5 = 90.8 · minimum = 82.
Bar: average ≥ 85 AND minimum ≥ 70 → 90.8 ≥ 85 ✓ · 82 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**

Interim binding record: the first wave on sha256 `bbfdd479145963c350f12d9c8bd74db87e9f41caf2b68e45a22badcad93f165d` scored motion 89 · timing 48 · purity 100 · reusability 76 · readability 72 (average 77.0, minimum 48). The timing lens caught the cycle-tempo defect class (plus convergent durationMs non-binding named by timing + reusability); the build was cured (segment-mode timeline replaying the measured window, duration binding, per-card livery inks + auto-contrast, CONFIG style group, replaceCards, clock fixes, type-scale/fit cures — full list in build-record.md), self-verify re-run ALL PASS, and all five lenses re-fired on the final build. Interim returns preserved verbatim at codex/lens-<name>-interim1.md; their scores are NOT in this average.

## Priced cures for any future refinement (practice job) — convergent first
No two final lenses name the same defect. Single-lens cures, largest first:
1. **Timing (−8) + readability (−2, related): recession arrives ~500 ms early** — the recreation recedes 8.5–9.0 s against measured landmarks ~9.0–9.5 s. Cure: segment.recedeAtMs 8500→9000 (recedeMs 500 retained), and allocate cycle-mode holds by content length rather than a flat 2400 ms.
2. **Readability (−8): PIXEL-UNVERIFIED ceiling** — all fit/contrast evidence is font-metric + logic level. Cure: browser inspection of every card + the swap at 360 px, incl. real-time playback, when a browser is exercisable in this seat.
3. **Reusability (−6): bandInk auto-contrast candidates are mechanism literals** — bandInkFor() hardcodes "#ffffff"/"#141414" and bypasses cards[].livery.bandInk while bandInkAutoContrast is on. Cure: place the candidate inks inside each card's livery and select exclusively from those values.
4. **Readability (−5): small supporting text** — date 11.2 px, subline 10.8 px, byline 10.4 px at 360 px, with opacity reducing effective contrast. Cure: enlarge provenance/supporting text or reduce copy; measure contrast after opacity compositing.
5. **Reusability (−3 ×2):** band separator " · " and kind uppercase transform are literals (expose via CONFIG); duration binding is mode-dependent (cycle mode loops indefinitely — expose a finite/loop playback policy and apply durationMs consistently).
6. **Readability (−3): vertical clearance is estimated** — card height ≈198 px vs 202.5 px stage at 360 px; the absolutely positioned kind label reserves no flow space. Cure: browser bounding-box measurement + explicit label clearance.
7. **Reusability (−2): validation gaps** — segment.specimenIndex accepts fractional values; segment.recedeMs lacks an explicit positive check. Cure: integer + positivity validation in checkpointsOk().

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser binary in this seat): all lens verdicts are source/record-based; fit evidence is PIL font-metric measurement (DejaVu stand-ins for Georgia/Arial) + node-harness logic tests; the comparison page is the render surface for the seat's firsthand check. The specimen's entry is a scale-up riding a camera settle; the recreation's rise/slide entries and its recession path are labeled reconstruction choices parameterized in CONFIG. ev/t2.jpg's digest attribution (MS NOW card) could not be reconciled with the frame itself (Capitol over map, no card) and was retired as card evidence — the MS NOW card's content comes from the digest text only.
