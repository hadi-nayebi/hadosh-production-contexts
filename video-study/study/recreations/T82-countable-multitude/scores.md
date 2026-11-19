# T82 — Countable multitude · scores (attempt 1, Cycle 014 Wave 12)

Bound build: recreation.html sha256 ff3f24271d5df45cd7a8eef9d9117a3a3eb4d3e64f9368fe8992d6f9544c9a66 (identical for all five final lens runs; no post-wave source change; no interim firings — the wave fired once, on the final build).
Feeding: score-blind allowed packet per lens (standing header + neutral technique facts incl. measured anchors + score-blind build record + FULL recreation.html); payloads preserved at `codex/payload-<lens>.txt` before firing; scores.md never fed; no lens saw a prior score or another lens's return.
Pre-wave gates: codex-observe CONFIRMED-WITH-GAPS (`codex/codex-observe.md`, gaps disposed in build-record) · codex-plan-review REVISE, applied as construction requirements (`codex/codex-plan-review.md`, disposition in build-record) · jev-prewave **FIRE-WAVE** (parameterization 1.0 · purity pre-check 1.0 · own-checks completeness 1.0 · fidelity-plan honesty 1.0) — `codex/jev-prewave.md`.
A6 legs (final build, pre-wave): measured-fit `fit-table.md` HITs **0** · config-census `config-census.md` HITs **0**.

| Lens | Score | Return |
|---|---|---|
| motion | 80 | codex/lens-motion.md |
| timing | 89 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 80 | codex/lens-reusability.md |
| readability | 87 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 80 + 89 + 100 + 80 + 87 = 436; average = 436 / 5 = **87.2**; minimum = **80**.
Bar: average ≥ 85 AND minimum ≥ 70 → 87.2 ≥ 85 ✓ · 80 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**

Plateau check (A2): 87.2 vs grid-family average T53 85.6 → above the family line (+1.6); no WHY owed. Predicted stuck lens was readability (predicted 76) — it scored 87; the actual minima are motion + reusability (80).

## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
1. **CONVERGENT (motion −16 + timing −7): the reveal shape.** The measured original expands as an OVAL from the lit cell before completing the rectangle; the build populates in index (row-major) order, so at 5000 ms it shows a top-half rectangle instead of the reference's oval. Cure: order cell reveals by distance from the lit cell (expanding oval/ellipse front), reaching the full rectangle by buildMs 5500; re-measure the mid-build frame against segment b-frames.
2. **Motion (−4): pulse onset.** Pulsing runs during the amber phase and its absolute-time sine jumps at onset. Cure: start the pulse at amberDoneMs (6500) computed from elapsed hold time.
3. **Timing (−4): amber starts slightly late.** At 5500 ms the build shows zero amber cells while the reference already shows a partial block at wall completion. Cure: begin amber growth marginally before/with wall completion inside the measured window, retaining completion by 6500 ms.
4. **Reusability (−8/−6/−4/−2): CONFIG surface limits.** Canvas backing size (720×640) is fixed in markup while stageW/stageH/dpr are CONFIG — resizing CONFIG clips; panel padding (8), cell gutters (0.6/1.2), amber gutters (0.5/1) and glyph alpha constants (0.85/0.9/0.95, classified structural in the census) sit in rendering code; no CONFIG validation (lit index clamped at draw but not at the skip site); glyph structure + reveal order are fixed code. Cure: initialize canvas from CONFIG, move padding/gutter/alpha constants into geom, validate + normalize CONFIG once (one lit-index normalization), expose reveal-order as a CONFIG option (pairs with cure 1).
5. **Readability (next-attempt evidence, no score cure claimed):** demonstrate with a rendered 360 px frame that cell boundaries survive downsampling and the lit cell's white dominance holds — the lens's named evidence gap, tied to the PIXEL-UNVERIFIED limitation below.

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser in this seat): all lens verdicts are source-based; fit evidence is geometry arithmetic (fit-table.md) + the comparison page as render surface. Schedule: measured anchors bind (lit-alone ≤4.5 s · wall complete (5.0, 5.5] s · amber complete (5.5, 6.5] s · 14 000 ms loop); the lit-alone state's extension back to loop 0 and the deferred lung-scan pre-beats are labeled allocation/deferral in build-record.
