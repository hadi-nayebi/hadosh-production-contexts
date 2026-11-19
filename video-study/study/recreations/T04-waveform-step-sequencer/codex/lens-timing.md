Timing score: **88/100**. The default timing and playback clock satisfy this lens; override consistency needs repair.

- **Checkpoint pricing passes.** `computeState` selects the last `beatTimesMs[i] <= t`, without deriving the step from a cadence formula. Default boundaries resolve correctly: 499ms → step 0; 500ms → step 1; 2600ms → step 5; 7999ms → step 15.
- **Valid tempo overrides rebuild correctly.** `beatMs=667` produces 12 checkpoints, from 0 through 7337ms; 1400ms resolves to step 2. `bpm=90` produces 12 rounded checkpoints across 8000ms. Explicit positive `beatMs` takes precedence over BPM.
- **Waveform progress remains proportional.** The playhead uses elapsed time divided by duration. Bar coloring quantizes that progress into 125ms increments by default: 4000ms gives 50% progress and 32 played bars. It trails continuous progress by less than one bar.
- **Playback introduces no cumulative cadence drift.** Each frame samples elapsed clock time rather than adding frame increments. Pause/resume preserves elapsed time, restart resets the origin, and modulo wraps waveform and sequencer together at 8000ms. Frame delays can skip a visible checkpoint but do not shift later timing.

Required cures:

1. **Rebuild checkpoints for duration-only overrides.** `?durationMs=10000` leaves the original table intact, holding step 15 from 7500–10000ms. A shorter duration leaves later checkpoints unreachable.
2. **Define checkpoint-to-column correspondence after tempo changes.** `beatMs=667` leaves 16 columns with only 12 checkpoints; faster tempos can produce step indices beyond column 15, eliminating the live column and moving its head outside the grid. Derive columns from checkpoint count or explicitly define their mapping.
3. **Validate timing inputs before rebuilding.** Negative `beatMs` or BPM can create a nonterminating loop. Require finite, positive effective intervals and bound checkpoint counts.

These findings are source-derived; the supplied 20/20 result is reported evidence. The execution tool failed to start, so I could not independently run checks or write the local records. Sparse reference frames support the technique’s behavior but cannot independently establish its exact beat phase.

BODY-WRITE: Require duration-aware checkpoint rebuilding, explicit checkpoint-to-column mapping, and validated positive timing inputs in this build’s timing instructions; record those three gaps in build-record.md and scores.md.

SCORE: 88
