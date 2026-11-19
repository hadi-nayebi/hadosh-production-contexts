**Timing / tempo score: 76/100.** The nominal arithmetic is correct, but the recreation turns the specimen’s flash transition into a slower tracker beat. This lens clears 70; the five-lens consolidation decision remains open.

- **Timeline arithmetic passes.** `buildTimeline` produces 12 steps: three appearances × (1500 + 650 + 350 + 400) = **8700 ms**. Appearance starts are nominally 0, 2900, and 5800 ms.
- **Dwell materially changes the rhythm.** The specimen holds for less than one second; 1500 ms is over 50% longer even against that upper bound. It buys reading time, but loses the quick between-act punctuation. This is a defensible tracker adaptation, with a meaningful fidelity cost.
- **Dive timing is plausible, but visually unverified.** A 3.1× scale over 650 ms with `cubic-bezier(.55,0,.85,.4)` accelerates toward arrival, supporting a dive. The following 350 ms stationary hold weakens its momentum, and the dark pause replaces the specimen’s immediate scene takeover.
- **Runtime timing can drift.** Recursive `setTimeout` schedules each duration after synchronous phase work finishes. Rendering, layout measurements, and callback delays accumulate; 8700 ms is a nominal sum, not a guaranteed measured loop duration. Absolute deadlines would prevent cumulative drift.
- **Configuration and playback have timing exceptions.** `Math.max(30, s.dur)` makes the supported `diveMs=0` consume 30 ms despite a zero-duration CSS transition. `pause()` stops the phase timer but leaves an active CSS dive running; `play()` advances to the next phase rather than preserving the remaining duration.

Verification was limited to the supplied source. The execution tool failed to start, preventing runtime measurements and writes to `build-record.md`, `scores.md`, and `codex/lens-timing.md`.

SCORE: 76
BODY-WRITE: No files written because the execution tool was unavailable; pending record: nominal arithmetic passes, tempo fidelity is reduced, and the next attempt needs deadline-based scheduling plus measured phase and dive playback verification.
