Reusability: **82/100**. Production can create meaningful variants through CONFIG and the supported URL overrides without editing renderer logic. Geometry dependencies and incomplete validation still require care.

- **Broad parameter coverage.** Geometry, component shaping, typography, ornament, palette, counts, and flicker have named controls. One recursive renderer applies changes across levels. Candle and button spacing adapt to counts, including zero. The supplied logic tests support these capabilities; rendered pixels remain unverified.

- **Geometry still requires manual synchronization.** `zoomAnchorXPercent`, `zoomAnchorYPercent`, and `levelScale` are independent literals despite their “derived” descriptions. Changing frame position, width, or curtain width does not update them. Recursive font sizing and border scaling can consequently diverge from the configured frame geometry. **Cure:** compute these values from geometry during resolution and use those results throughout rendering and diagnostics.

- **Validation is strong for selected fields but incomplete across CONFIG.** Strict numeric URL parsing, reported integer clamps, and per-field fallback are useful. However, absent `flicker` throws; geometry, components, typography, palette, and flicker period/phase lack comparable validation. Zero flicker period or amplitude above one can produce invalid opacity calculations or values. **Cure:** validate every group and its dependent constraints, preserving unrelated valid edits.

- **Checkpoint repair is a reusable strength.** Repairs preserve named roles, expose supplied versus effective values, adapt separation to the duration window, and flag degraded allocations. Direct CONFIG checkpoint errors are normally replaced per field before repair; diagnostics distinguish that resolution from subsequent repair. This assessment concerns configuration semantics only.

- **Some configuration diagnostics do not describe the actual layout.** Stage aspect controls affect analytical models, while the rendered stage fills its host. Header fitting is callable but absent from published diagnostics, and the width model assumes a single medallion glyph although `medallionText` is configurable. **Cure:** make rendering and models share stage dimensions; publish fit warnings and account for the complete ornament string.

- **URL overrides cover useful swaps, with a narrower surface than CONFIG.** Labels, depth, candles, checkpoints, duration, zoom, playback, and selected colors are supported. Geometry, typography, ornament, buttons, and flicker require CONFIG edits. That meets CONFIG-based reuse, but a documented override schema would improve production integration. Empty supplied labels and colors should also receive explicit handling.

The main next-attempt priority is deriving geometry dependencies automatically, followed by complete configuration validation and surfaced layout diagnostics. No motion, timing fidelity, purity, or visual-legibility score is included.

Filing limitation: the workspace tool failed to start, so I could not write or inspect the destination files. This return is ready for the named consumer to file verbatim.

SCORE: 82
BODY-WRITE: Pending consumer filing: this return supplies codex/attempt-3/lens-reusability.md and the attempt-3 reusability entry in scores.md (82/100); neither file was written during this run.