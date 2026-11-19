**Reusability / parameterization: 72/100.** CONFIG supports ordinary two-speaker dialogue swaps well, and the reported swap test confirms content, timing, and palette changes. Production reuse still needs stronger layout handling and input validation.

- **Hidden parameters:** The animation hardcodes the 120 ms banner-to-subtitle pause, cursor blink timing (1060/700 ms), speaker glyphs, three-unit banner height, and line-height/margin arithmetic. CSS also fixes chrome heights, spacing, banner dimensions, and cursor geometry. These limit adaptation through CONFIG alone.
- **Long and numerous lines:** Scrolling counts each dialogue entry as one unit regardless of wrapped height. Long text can therefore extend below the viewport without sufficient scrolling. Many short lines fit the intended model; arbitrary production dialogue does not. Flex text should also have an explicit shrink constraint such as `min-width:0`.
- **Speaker extensibility:** Every speaker except `"ai"` receives the user glyph and colors. A third speaker renders, but cannot acquire its own identity through CONFIG. A configurable speaker map would fix this.
- **Edge cases and validation:** An empty lines array is handled as banner-only playback. No configuration validation exists. Negative timings can reverse timeline intervals; malformed URL numbers introduce `NaN`; zero banner timing causes division by zero at transition boundaries. Missing or non-string text can throw. URL dialogue without a colon is parsed incorrectly.
- **Container control:** `play`, `pause`, `restart`, `seekTo`, elapsed time, and duration provide a useful basic interface. Seeking during playback should reset the frame timestamp; restarting should explicitly define whether it resumes. Unconditional autoplay prevents clean container-owned initialization. Completion notification and validated configuration injection before initialization would improve integration.

The next attempt should prioritize validated inputs and scrolling based on actual rendered heights, followed by configurable speakers and the remaining behavioral constants. These changes would make dialogue substitution dependable beyond the tested specimen.

The filesystem tool failed before reading or writing local records; this return is the finding supplied for the consumer’s verbatim filing.

SCORE: 72
BODY-WRITE: Finding for lens-reusability.md and scores.md: CONFIG-only production reuse requires validated inputs, wrapping-aware scrolling, configurable speaker identities and behavioral constants, and explicit container playback semantics.
