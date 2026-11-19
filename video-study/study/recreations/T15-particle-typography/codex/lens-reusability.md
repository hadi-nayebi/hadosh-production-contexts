# Codex return — lens: REUSABILITY / PARAMETERIZATION (T15 attempt 1, filed verbatim 2026-11-13)

**REUSABILITY / PARAMETERIZATION: 64/100**

The reported swap test (5,060 → 2,728 targets) supports real content parameterization. Words, font, palette, phase durations, density, radius, wind, and jitter read from CONFIG. Several limits prevent dependable reuse across production contexts:

- **Long phrases and tiny canvases:** fitting stops around 14 px even if text still exceeds the width. There is no height fit, wrapping, or multiline layout. Long phrases can clip; tiny canvases can lose most targets.
- **Empty and single phrases:** a single phrase loops correctly. An empty phrase produces no targets, but retained particles remain visible as ambient dust. An empty phrase array is unguarded.
- **Languages:** spaces and diacritics reach canvas text rendering unchanged. Actual coverage depends on available fonts; CONFIG provides no font-loading readiness check or language/direction control.
- **Particle pool:** growth accommodates larger phrases, but the pool never shrinks. After a dense phrase, a short or empty phrase retains the maximum particle count as visible dust, changing contrast and preserving peak rendering cost. Surplus particles freeze during formation because their targets equal their starting positions.
- **Timing:** `holdMs: 10000` works under regular frames. Zero durations are not explicitly handled; `0/0` can produce NaN on a zero-delta frame. Transitions discard elapsed overshoot and advance only one phase per frame. The 64 ms delta cap also makes elapsed playback diverge after stalls, weakening precise short-beat reuse.
- **Hardcoded behavior:** trail opacity (`0.32`), formation delay range (`0.45`), dissolve velocities (`90`, `70`), drift multipliers, easing, and wrap margins remain outside CONFIG. Palette parsing supports six-digit hex reliably, rather than general CSS colors. Invalid density values are unguarded; `sampleGap: 0` hangs sampling.
- **Determinism:** the RNG is seeded, but random consumption depends on frame count, particle count, and resize history. Identical config alone does not reproduce choreography across frame schedules. Restart resets neither RNG nor particle positions, so it does not reproduce the initial take.

These findings come from the supplied source; the reported swap test was not independently rerun.

BODY-WRITE: Require bounded width-and-height fitting, explicit empty-input and numeric validation, a configurable surplus-particle policy, and elapsed-time deterministic choreography with a complete restart reset before treating T15 as reliably reusable through config alone.
SCORE: 64
