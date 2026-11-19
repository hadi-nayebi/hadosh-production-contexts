Readability fails at phone size: the wall payoff is large, but the TV follow-up is likely clipped.

At a 360×202.5 stage, the TV’s 36% height is about 73px. Borders and percentage padding leave roughly 42px for text. The question wraps onto two lines; the blank line and “To what?” require four lines at 13.05px line-height, about 52px. The enclosing TV’s `overflow:hidden` therefore cuts into the follow-up.

The wall size is computed correctly as 26.8px, with strong brightness separation from the wallpaper. However, the assumed 0.60 glyph-width factor and rounding do not establish an exact fit across the fallback fonts. Scanlines impose modest attenuation; the vignette mainly reduces peripheral chrome contrast. Wall size establishes a clear hierarchy over the persistent TV question, although its brightness never decreases.

Required cures:
- Fit the complete TV exchange vertically: remove the blank line, increase screen height, or reduce padding while retaining the 9px minimum.
- Measure the actual wall text width and reserve a small fit margin.
- Verify question, wall-answer, and follow-up holds in rendered 360px frames, including chrome clearance.

Assessment is source-based; rendered phone-size inspection was unavailable.

BODY-WRITE: Replace the build record’s TV overflow guarantee with a required vertical-fit check of the complete exchange; wrapping alone does not prevent clipping.
SCORE: 68
