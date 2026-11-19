# T192 — guard-config-census leg output v3.1 (Amendment A6, pre-wave) — RE-FILED Cycle 036 Wave 33 (A12.3 completion, on the cured build)

Build judged: recreation.html SHA-256 `2b80f53973790e295db0c9c128b51923d20f48f58a194003eb72f3c5c9644cdd` · 12,754 B. (Supersedes the Wave 32 filing on d01198b7…. Completion-cure delta, scanned on the cured build: seek() now clamps via `Math.min(CYCLE_MS, Math.max(0, ms))` — both bounds are CYCLE_MS / 0, and CYCLE_MS is derived from CONFIG `time.exitStartMs + time.exitDurationMs`, so the clamp introduces NO new shaping literal; `follower` is a boolean clock-mode flag (STRUCTURAL — clock control, not subject shaping); `api.cycleMs` exposes the CONFIG-derived CYCLE_MS read-only; comparison.html's slave clamp reads `a.cycleMs`. No new CONFIG keys, no new hex colors, no new font stacks: grep on the cured build shows "monospace" exactly 2×, both inside CONFIG, and hex values only in the palette CONFIG + the sampling mask fill + the stage-shell CSS, as classified below.)

## 1. All-literal scan (outside the CONFIG block)
Pre-census cures (applied before the Wave 32 census was filed, harness re-run, all checks PASS): particle.borrowJitterMs · clusterBandRowNorm · releaseMs · releaseRowSpreadMs · releaseJitterMs · jitterPeriod1Ms · jitterPeriod2Ms · numeral.capHeightRatio · numeral.fontWeight/fontFamily · line.fontWeight/fontFamily were literals in the first draft and are CONFIG keys in the build.

Remaining literals, classified per constant:
- W=960, H=540 (logical canvas, also the canvas element attributes): STRUCTURAL — the plan's single coordinate basis, fixed by the Plan, not a §1.3 variable.
- fontPx initial 300 (sampling trial size): STRUCTURAL — normalized away by the measured-width fit on the next line; the result is independent of its value.
- alpha threshold 128 in sampling: STRUCTURAL — binary occupancy decision boundary.
- 0.25 (top-band rowNorm definition), 0.8 (front-band factor), 0.02 (visible-opacity threshold), 0.01 (render skip threshold) in stateAt/render: STRUCTURAL — evaluation/render metric definitions; they shape the reported metrics, not the subject (assertion thresholds themselves live in the harness, not the build).
- Clamp bounds in seek()/frame() (0 and CYCLE_MS): STRUCTURAL clock control — CYCLE_MS is CONFIG-derived (time.exitStartMs + time.exitDurationMs); 0 is the time origin. Neither shapes the subject's look or motion within the cycle.
- /2 centering, *4+3 RGBA stride, 1000 (ms→s), 1e9 sentinels, Math.PI/2π, (r−0.5) centering, ease coefficients 1−(1−u)²: STRUCTURAL — mathematical identities and loop/index arithmetic.
- Hex colors outside CONFIG: none shaping (all palette values are CONFIG keys; "#ffffff" appears once as the sampling fill, immediately overwritten by palette rendering — classified: the sampling fill is a mask color, STRUCTURAL, its value cannot reach the subject, which renders only from palette.fg/reserve; stage-shell CSS #111/#000 mirrors palette.bg default — presentation shell, STRUCTURAL; the canvas itself paints palette.bg every frame).
- Font stacks: "monospace" occurs ONLY as the two CONFIG values numeral.fontFamily / line.fontFamily (grep count 2, both inside CONFIG). No CSS in the build beyond layout.

## 2. CONFIG key → application-site resolution (value-flow checked)
- text.numeral → sampleTargets() fillText + measureText (the sampled subject itself) ✓
- text.line → render() fillText ✓ (execution receipt on the cured build: harness captured fillText receiving both the default line and the swapped line "SAME FRAME, FIFTY YEARS LATER" — build-record completion section)
- palette.bg → render() fillRect clear ✓ · palette.fg → borrower/locked cell fill + line fill ✓ · palette.reserve → streaming particle fill ✓
- flow.directionDeg → dirRad → VX/VY (stream + release velocity) ✓ · flow.streamVelocityPxPerSec → VX/VY ✓
- particle.poolFromTargets → pool sizing branch ✓ · poolCountMin → surplus floor branch ✓ · reserveFraction → reserveCount formula ✓ · sizePx → streaming/borrowing rect size ✓ · jitterPx → borrowerState jitter terms ✓ · borrowOpacity → locked/borrowing opacity + separation ✓ · reserveOpacity → streaming opacity + release ramp ✓ · reserveHoldOpacity / surplusHoldOpacity / looseHoldOpacity → looseOpacity() HOLD branch, one per loose class ✓ · travelMs → lockAt ✓ · clusterFraction → cluster borrow-start branch ✓ · clusterBandRowNorm → cluster branch condition ✓ · borrowJitterMs → borrowStart jitter ✓ · releaseMs → released-state window + ramp ✓ · releaseRowSpreadMs / releaseJitterMs → releaseStart ✓ · jitterPeriod1Ms / jitterPeriod2Ms → jitter waveforms ✓
- grid.sampleStepPx → sampling loops + locked cell size ✓
- numeral.widthFraction → fontPx fit ✓ · heightFractionMax → height cap ✓ · centerYFraction → fillText y ✓ · capHeightRatio → height-cap divisor ✓ · fontWeight/fontFamily → sampling font strings ✓
- line.sizeFraction → line font size ✓ · yFraction → line y ✓ · fadeMs → lineOpacityAt window ✓ · fontWeight/fontFamily → line font string ✓
- time.clusterLeadMs → cluster borrow start + PRE/FORM boundary ✓ · formationStartMs → phase machine, borrow starts, line fade, front ✓ · formationDurationMs → phase machine, front, A11 instants ✓ · frontSweepMs → borrowStart row spread ✓ · exitStartMs → releaseStart base + phase machine + CYCLE_MS ✓ · exitDurationMs → phase machine + CYCLE_MS (the seek clamp bound) ✓
- seed → mulberry32(CONFIG.seed) ✓
No unapplied keys. No nested/array keys exist in this CONFIG.

## 3. CSS-variable setter check
The build uses no CSS variables. N/A — no unset-variable references possible.

## HIT list
EMPTY — 0 HITs on the cured build.

Leg verdict (advisory): PASS for this leg. Firing: FIRED, pre-wave, on the cured build (Cycle 036 completion).
