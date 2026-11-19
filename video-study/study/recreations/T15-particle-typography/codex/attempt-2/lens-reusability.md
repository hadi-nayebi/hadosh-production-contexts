Reusability score: **58/100**. Common word, palette, and preset swaps work, but the configuration contract does not yet support reliable production reuse across the requested extremes.

- **Timing overrides are misleading.** Editing `CONFIG.formMs`, `holdMs`, or `dissolveMs` directly has no effect: preset resolution overwrites them. URL overrides work. A 3-second beat is configurable through those overrides, but frame overshoot is discarded at each transition, and zero-duration phases still consume a frame.
- **Motion parameters remain hardcoded.** Stagger (`0.45`), drift ranges (`16`, `10`), release ranges (`60`, `45`), release decay (`900 ms`), jitter frequencies, trail opacity (`0.32`), and wrap margins sit inside logic. Changing tempo does not scale these values, so a short beat changes the technique’s proportions.
- **Long phrases and tiny canvases can clip.** The width-fit loop stops at a minimum font size even if the phrase still exceeds the width bound. It never fits height or wraps text. Sampling only inside the canvas conceals clipping: “all sampled targets are in bounds” does not prove that all glyphs survived.
- **Content edges are partly supported.** One phrase loops correctly. An empty string yields no letterform targets and an ambient-only beat. An empty phrase array is unguarded, eventually producing invalid phrase indexing. Spaces and diacritics use browser text shaping, but actual font coverage and complex-script rendering were not verified by the rectangle-based stub.
- **Pool behavior depends on phrase history.** Growth covers larger target sets, but a later short or empty phrase retains the largest pool and reserve population. `capped-ambient` limits surplus drawing only; reserve drawing and particle updates remain uncapped. Large-to-small swaps can therefore retain excessive ambient density and processing cost.
- **Unsafe configuration values can freeze execution.** `reserveFraction >= 1` makes reserve growth nonterminating when targets exist; `sampleGap <= 0` makes sampling nonterminating. Fractional sample gaps can index noninteger image-array properties and silently lose targets.
- **Seeded randomness gives conditional reproducibility.** Matching config, viewport, fonts, and frame timestamps can reproduce a fresh run. Config alone cannot: integration depends on frame cadence, resize consumes additional randomness, and restart resets neither the pool nor RNG state.
- **Requested duration extremes:** `holdMs: 10000` is supported through a preset edit or URL override. `formMs: 0` avoids division by zero but skips visible formation and snaps into the hold state.

The reported swap test demonstrates a useful ordinary case. It does not establish long-text fit, real multilingual glyph coverage, extreme-duration fidelity, or repeatable restart behavior.

This finding is supplied for verbatim filing; the local write could not be completed because the execution tool failed to start.

BODY-WRITE: Require validated configuration, explicit preset/direct-duration precedence, full text containment checks, configurable motion constants, bounded pool behavior, and a resettable fixed-step simulation before treating T15 as production-reusable across arbitrary phrases and beat lengths.
SCORE: 58
