Reusability is strong for dialogue and timing swaps, but CONFIG does not yet control the complete rendered construction.

- **Geometry controls are partly disconnected.** `chromeHeightPx`, `statusHeightPx`, log padding, line gap/margin, and banner dimensions affect the layout model, while the DOM keeps fixed CSS values. Changing these CONFIG keys can make scroll calculations disagree with the rendered content. Apply the same values to CSS and the model.
- **Long-content handling needs hardening.** `wrapRows` does not account for explicit newlines or tabs preserved by `white-space: pre-wrap`. Prompt width is estimated rather than measured, so custom or multi-character speaker glyphs can invalidate wrapping. Scroll construction repeatedly wraps every growing prefix, which also becomes expensive for very long lines.
- **Validation exists but is incomplete.** Timing clamps, empty-array fallback, and ordinary third-speaker support are useful. Geometry values and nested speaker records remain unchecked. URL-override validation warnings are discarded instead of added to `VALIDATION_WARNINGS`.
- **Finale behavior has hidden coupling.** `closingPauseMs` applies before the last line even when `finaleLines` is zero. The eight-line finale cap and 300 ms end-hold cap unnecessarily restrict otherwise configurable production openings.
- **REC_API is sufficient for basic container playback.** Play, pause, restart, seek, elapsed time, and duration cover the stated integration. However, `seekTo(NaN)` corrupts elapsed state; finite-number validation is needed. Configuration is consumed at initialization, so production must supply it before boot rather than mutate it afterward.

The supplied swap test supports ordinary reuse; it does not establish arbitrary geometry or long-content reuse. The highest-priority cure is making CONFIG geometry authoritative in both CSS and scroll calculations.

Filesystem tools failed before execution, so this verdict could not be filed locally.

SCORE: 74
BODY-WRITE: This return records the required cure: bind CONFIG geometry to rendered CSS, then validate multiline/custom-glyph layout and finite API seek inputs; no local file was written because the execution tool could not start.
