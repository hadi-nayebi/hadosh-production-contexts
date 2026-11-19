Configuration covers most content, palette, layout tokens, and per-card typing rates, but production reuse still needs source edits.

- **Fitting validation is unreliable.** Grapheme count × `0.58em` cannot bound arbitrary Unicode glyph widths or actual wrapping. Handles, badges, timestamps, post text, and other chrome have no fitting checks. Narrow post height is assumed through a fixed `42cqw` allowance.
- **Validation does not stop unsupported builds.** Named errors display a banner while rendering continues with `overflow:hidden`; unsupported content can still clip.
- **Geometry remains partly hardcoded.** Stamp placement, shadows, highlight padding, badge geometry, caret dimensions, entrance displacement, and footer spacing sit outside configuration. Card borders always use the wide token, ignoring the configured narrow border.
- **Duration mapping is incomplete.** `landMs` changes a transition declaration, but `.landed` changes no visual property, so it controls no landing effect. Typing rates, holds, and caret blink duration are wired.
- **Replacement and edge behavior need guards.** The `titles` override retains the specimen-specific second-card prefix. A single pre-landed card produces `endMs = -850` with defaults. `charMs=Infinity` passes validation, and numeric overrides accept trailing junk through `parseFloat`.
- **Unicode handling is conditional.** With `Intl.Segmenter`, typing and highlights share grapheme boundaries correctly. The fallback splits combining sequences and ZWJ emoji into code points, so arbitrary Unicode support is not guaranteed.

BODY-WRITE: Require measured fitting checks for all replacement text, enforce named validation failures before playback, complete geometry and duration effect mappings, and validate finite timings plus supported opening states for every card count.
SCORE: 54
