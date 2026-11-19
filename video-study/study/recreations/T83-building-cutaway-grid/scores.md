# T83 — Building cutaway grid · scores (attempt 1, Cycle 014 Wave 12)

Bound build: recreation.html sha256 3ca26cdeb2abada8f539f4263632250909c6e84af13f598907ad8d9d5058a170 (identical for all five final lens runs; no post-wave source change).
Feeding: score-blind allowed packet per lens (standing header + neutral technique facts + score-blind build record + FULL recreation.html); payloads preserved before firing at codex/payload-<lens>.txt; scores.md never fed; no lens saw a prior score or another lens's return; identical SHA-256 in all five payloads.
Pre-wave gates: codex-observe CONFIRMED-WITH-GAPS (gaps closed firsthand, build-record §2) · codex-plan-review REVISE — all points applied as construction requirements (build-record §2) · jev-prewave **FIRE-WAVE** (parameterization 0.95 · purity pre-check 0.95 · own-checks completeness 0.85 · fidelity-plan honesty 0.80) — jev-prewave.md; its two timing concerns cured pre-wave (zoomMs 3000, ringStartMs 9500) and the wave fired on the cured build.
A6 legs (final build): fit-table.md — 0 HITs (2 cured pre-wave) · config-census.md — 0 HITs.

| Lens | Score | Return |
|---|---|---|
| motion | 95 | codex/lens-motion.md |
| timing | 94 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 80 | codex/lens-reusability.md |
| readability | 84 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 95 + 94 + 100 + 80 + 84 = 453; average = 453 / 5 = **90.6**; minimum = **80**.
Bar: average ≥ 85 AND minimum ≥ 70 → 90.6 ≥ 85 ✓ · 80 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**
Family comparison (A2): grid-family average T53 85.6 — this attempt (90.6) is ABOVE it; no plateau WHY owed. Predicted stuck lens (Plan: reusability) was indeed the minimum (80), above the floor.

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. **CONVERGENT (reusability 80 + timing 94): schedule bookkeeping vs operational phases.** `holdMs` moves only the derived arithmetic — the visible settled interval (3000–9500 ms) is governed by the independent geom.zoomMs / geom.ringStartMs, so the CONFIG phase names do not enforce the boundaries they advertise (timing lens: "holdMs does not describe this actual visible interval; it is schedule bookkeeping"). Cure: make the phase boundaries operational (derive ringStart/zoom completion from the phase schedule) or rename/re-document the independent schedule keys and drop inert controls; add a harness test proving a holdMs change alters the intended phase behavior.
2. **Readability (−16, single lens): the notice-rings compete with the subject.** Near-white rings reach opacity 1.0 (intensity.ring), matching the glyph's opacity and exceeding its luminance — ten bright outlines can become the dominant inventory cue in the ending. Cure: reduce intensity.ring (≈0.6) so the amber cases remain the first-read subject throughout the ending; re-verify.
3. **Reusability (single lens): registry depth + residual literals.** Only one glyph renderer exists (a second device requires source editing) and an unknown cell.glyph key throws without a validation error; the terrace figure's `rx="2"` and the flat border's default stroke width remain outside CONFIG (census classified rx as structural — the lens prices it as shaping). Cure: validate CONFIG at init with actionable errors, add a second registered glyph to prove the registry, and move rx + flat stroke width into geom.
4. **Motion (−5, single lens): interpolation unverified.** The linear pull-back and 300 ms ring fades are approximations — the measured facts establish timing bounds, not intermediate progression. Cure: sample intermediate segment frames (t=0.5/1.5/2.5 s; ring window at 0.25 s steps) and fit the interpolation/fade curves to them.
5. **Timing (documentation precision, single lens):** label the precise ring onset, stagger spacing, fade duration, and dim interval as allocations within their observed bounds in the build record's phase table (the honesty is present in prose; make it a table).

## Limitations carried
**PIXEL-UNVERIFIED** — no browser binary in this seat: all lens verdicts are source-based; fit evidence is font-metric geometry (fit-table.md) + the comparison page as render surface. Measured bounds are OBSERVED at 1 s frame sampling; the per-floor ring order, exact ring onset (inside (8 s, 10 s]), pull-back interpolation, and dim interval are labeled ALLOCATIONs.
