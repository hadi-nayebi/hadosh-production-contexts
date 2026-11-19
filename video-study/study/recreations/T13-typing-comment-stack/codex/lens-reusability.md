Reusability is partial: the typing schedule transfers well, but production reuse still requires editing markup and CSS beyond CONFIG.

- **Content:** post text, handles, titles, highlights, badges, and timestamps are configurable. Comment footers hardcode `♡` and `Reply`; post action icons and the close icon also remain literal markup. A production job cannot replace all content through CONFIG.
- **Timing:** schedule derivation supports arbitrary card counts and title lengths, preserving sequential typing for valid, nonnegative timing values. Start delay, per-card appear/typing/hold, and final hold are configurable. However, CSS hardcodes appearance transitions, landing transitions, and caret blink timing. Changing `appearMs` does not change the visual appearance duration.
- **Geometry:** only card height and stack gap are configurable. Column positions, widths, typography, padding, avatar dimensions, and badge sizing remain CSS literals. More cards extend beyond the fixed stage rather than triggering fitting or validation.
- **Long titles:** `white-space:nowrap` plus `overflow:hidden` silently clips titles beyond available width. The approximate 62-character allowance is a content constraint, not a general fit guarantee; character widths vary. The supplied successful swap establishes reuse within that constraint.
- **Overrides:** `gapPx` actually sets **cqw**, and `0` falls back to the original gap. Titles of a different count inherit identity and timing through modulo reuse; this generalizes scheduling but can repeat unintended metadata.
- **Palette and text flow:** avatar gradient saturation/lightness and white avatar/badge text remain fixed. Long handles or badges have no fitting policy. Highlight reveal compares a grapheme count with UTF-16 string offsets, so Unicode substitutions can reveal highlighting at the wrong point.

Cures for the next attempt: move footer/action content, remaining palette values, geometry, and visual timing into CONFIG; define and validate supported card counts and text widths; provide a configurable long-title policy; correct override units and zero handling; and compute highlight boundaries in graphemes. Keep the sequential schedule derivation.

BODY-WRITE: Record that CONFIG-only reuse currently covers a constrained six-card, short-title template; require configurable remaining literals and explicit content/geometry validation before claiming general production parameterization.
SCORE: 74
