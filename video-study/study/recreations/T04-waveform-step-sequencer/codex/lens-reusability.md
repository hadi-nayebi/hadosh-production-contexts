Reusability is partially implemented: most requested controls are named in CONFIG, URL overrides run before grid/pattern construction, seeded heights are deterministic, and `computeState(tMs, cfg)` is pure. The reported swap tests establish useful coverage, but miss several production reuse failures.

- **Timing can retain specimen state.** Changing CONFIG.bpm alone leaves the original checkpoint table intact. A duration-only URL override also leaves 16 specimen checkpoints unchanged. Derive checkpoints from the resolved duration and tempo unless an explicit checkpoint table is supplied.
- **Grid dimensions and beat count are disconnected.** At `?bpm=180`, step reaches 16 at approximately 5333ms; the default grid has only columns 0–15. No column lights, and the sequencer head moves beyond the grid. Define configurable wrapping or another explicit mapping from beat index to column.
- **Palette coverage is incomplete.** `panelBg` is declared but never applied; CSS retains `#101216`. URL overrides omit background, panel background, sequencer-head color, and active-empty color.
- **Waveform shaping retains embedded choices.** The envelope baseline/amplitude (`0.55`, `0.45`), random gain (`1.15`), and offset (`0.08`) remain inside `barHeights`. Expose these technique variables in CONFIG.
- **Override validation needs guards.** Negative `beatMs` or bpm can create an infinite checkpoint-generation loop. Require finite positive timing values. Support an explicitly empty pattern; `?pattern=` currently preserves the specimen pattern.

Next attempt should add focused swaps for duration alone, CONFIG.bpm alone, faster tempo across the full loop, changed column count, every palette key, empty pattern, and invalid timing input.

BODY-WRITE: Add a configuration-normalization stage that validates inputs, rebuilds dependent timing state, maps beats into configured columns, applies every declared palette key, and exposes waveform-shaping constants; extend the build-record and scores evidence with the missing swap cases.
SCORE: 74
