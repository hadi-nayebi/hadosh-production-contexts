Timing-only score: **84/100**. Default allocation is credible; malformed-input fallback needs correction. Assessment is source-level, **PIXEL-UNVERIFIED**.

- **14 s allocation — sound.** Settle: 0–0.8 s; push: 0.8–9.5 s; hold: 9.5–13 s; final continued hold: 13–14 s. The 8.7 s push and 4.5 s terminal dwell support an uninterrupted, contemplative shot. These boundaries are an allocation model, not observed source timings.
- **4.5 s anchor — respected, with limited evidential weight.** At 4.5 s, push progress is approximately 38.9%, yielding scale ≈1.041. That places the supplied still within the push. `anchorMs` does not constrain interpolation: changing it changes diagnostics and potentially repair outcomes, but does not independently pin a visual state. No exact source zoom at that timestamp was supplied.
- **Loop semantics — explicit and correct.** The final interval continues the hold; it introduces no reset animation. At 14 s, modulo time immediately returns scale from 1.20 to 0.94. This is a declared playback seam, not evidence of a cut within the source shot.
- **Finite malformed checkpoints — generally well handled.** Clamp, forward separation, and backward repair preserve checkpoint roles. Reversed, duplicate, and out-of-window values receive effective playback times rather than being silently sorted into different roles.
- **Material defect: non-finite fallback bypasses window repair.** With `durationMs = 2000` and a non-finite checkpoint, fallback returns 800/4500/9500/13000 ms unchanged. Playback wraps before reaching the anchor or hold, repeatedly truncating the push. Cure: pass fallback defaults through the same duration-aware repair before returning diagnostics.
- **Secondary defect: invalid temporal URL inputs can disappear silently.** Non-finite values such as `?pushEnd=NaN` are ignored without an override diagnostic. Cure: distinguish absent parameters from present-but-invalid values and report rejection.

The tool host failed before filesystem access, so neither filing nor the `scores.md` update was completed.

SCORE: 84
BODY-WRITE: This return supplies the verbatim content for codex/attempt-2/lens-timing.md and the scores.md timing entry of 84/100; both filesystem writes remain pending because the tool host was unavailable.
