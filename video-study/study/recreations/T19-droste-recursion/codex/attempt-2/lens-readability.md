Readability: **62/100 — below the 70-point lens floor. PIXEL-UNVERIFIED:** rendered phone-size playback was unavailable; findings are source-based.

- **Header text is plausibly readable at levels 0–1.** At 360–390 px, declared font sizes are 18–19.5 px and 11 px, respectively, before the enclosing zoom. Opening-scale sizes are approximately 16.9–18.3 px and 10.3 px. The gold text against the navy header provides strong contrast. Level 2’s approximately 4.0–4.3 px opening-scale text is unreadable, appropriately acknowledged as a glyph band.

- **The header-fit checks overstate their coverage.** `headerModel()` measures the phrase alone, although the rendered flex row also contains the star medallion. It also assumes every nested scene retains a 16:9 ratio. Actual nesting multiplies width by approximately 0.486 and height by approximately 0.3744, before border deductions. Consequently, nested headers have less vertical space than the model reports. Level 1 likely still accommodates the default single line, but the supplied assertions do not establish actual fit.

- **Deepest-level object separation is the main failure.** The foreground frame covers scene coordinates x=5–59%, y=38–90%. Candles occupy x=33–40.38% and end at y=54%. Two candle bodies begin at y=39.12%, so the frame hides them entirely; the taller middle candle begins at y=35.28%, leaving only 2.72% of scene height visible. Under an intended 360 px, 16:9 presentation, that exposed deepest-level body is roughly **0.7 px high at opening**, before border deductions. Flames may survive as bright marks, but three distinguishable candles are not established. The staff’s lower section is also covered.

- **The deepest figure and frame have stronger readable cues.** The pale face and gold border should remain identifiable, supporting recognition of recursion. They do not compensate for the missing candle silhouettes. Nominal candle/staff widths and node counts cannot establish separated, recognizable objects.

**Cures:** reposition candles outside the foreground frame’s occlusion area; derive nested height and header budgets from actual containing boxes; measure the complete medallion-plus-label row. Then inspect 360 px and 390 px captures for recognizable candles, staff, figure, and frame at the deepest level.

SCORE: 62
BODY-WRITE: This return supplies codex/attempt-2/lens-readability.md and the scores.md readability entry: 62/100, PIXEL-UNVERIFIED, with occlusion and geometry findings and next-attempt cures.
