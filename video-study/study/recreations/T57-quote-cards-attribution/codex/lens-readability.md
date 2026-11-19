READABILITY — T57 attempt 1

**74/100 · PIXEL-UNVERIFIED**

The default quote has credible phone-size fit and strong contrast. Attribution size is the main weakness.

- **−12 — Attribution is too small for comfortable phone reading.** At 360 px, speaker and occasion render at 10.8 px; italic occasion text is particularly fragile. Wrapping prevents clipping but does not improve legibility. **Cure:** increase attribution to at least 13–14 px and widen the card or adjust padding to accommodate it.
- **−5 — Occasion contrast is marginal.** Quote contrast 12.97:1 and speaker contrast 14.51:1 are strong. Gold occasion text at 4.46:1 narrowly misses 4.5:1; the swapped green at 2.98:1 is substantially weaker for small text. The 2:1 chip guard treats a text color like decoration. **Cure:** require at least 4.5:1 for occasion text and verify the corrected palette against the actual card background.
- **−2 — Fit arithmetic approximates the rendered layout.** The record uses fractional dimensions, while CSS rounds card width and padding. At 360 px, actual content width is 223 − 32 − 4 = **187 px**, versus the recorded 186.8 px. This difference is harmless here, but substitute font metrics and estimated attribution wrapping do not prove browser fit. **Cure:** measure actual line bounds, chip wrapping, and complete card bounds after fonts load.
- **−7 — Phone readability remains pixel-unverified.** Font measurements support feasibility; they cannot confirm italic clarity, actual fallback font, or clipping in the rendered hold. **Cure:** inspect default and swapped cards at 360 px during full-opacity hold, checking all text bounds and reading the attribution at native size.

The reported quote widths leave useful horizontal margin, and estimated card heights fit the stage. These support provisional readability, but do not resolve the small attribution or replace rendered verification.

BODY-WRITE: Filing `codex/lens-readability.md` was blocked by tool-host failure; this response supplies its intended contents.
SCORE: 74
