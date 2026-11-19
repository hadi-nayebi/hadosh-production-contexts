Verdict: **88/100 — readability meets this lens’s bar, with moderate confidence pending a rendered-frame check.**

Findings:

- **The value leads clearly.** Measured ink heights are 35 px for the value and 19 px for the claim, with status/place at 13 px and source at 12 px. This supports a strong hierarchy at the 360 px stage. Both numeral paths use `type.valuePx:46` (`valueRow` construction; `buildChart()`).
- **Card fit is supported, but close.** The supplied measured-fit record gives a 277.3 px secondary line within 289 px of inner width, leaving 11.7 px. Claims occupy two and four lines respectively; chart-beat clearance is 11.4 px. These measurements support fit without establishing actual browser wrapping. **Next-attempt cure:** verify both settled cards in browser frames at 360 px using the resolved font; adjust only if those frames expose wrapping, clipping, or collisions.
- **Foreground separation is convincing in source.** `scene.style.opacity` applies `sceneDim:0.5` to a separate sibling. Card, numeral, and chart reach opacity 1 during holds (`frame()` hold branch), keeping their light ink and gold accents clear against dark blue backgrounds. No source-evidenced hold-time fading compromises reading.
- **Reading time is adequate.** `stateAt()` and the configured cues yield five seconds fully settled for Act 1, and six seconds plus a one-second end hold for Act 2. The longer, four-line claim receives the longer reading window. Act 2’s timing is explicitly allocated, so this supports demonstration readability rather than measured timing fidelity.
- **The missing render carries a moderate deduction.** Stand-in font measurements and DOM-stub checks cannot establish actual glyph rasterization, final line breaks, or perceived crowding. This uncertainty matters most for the small source/HUD text and narrow clearances. It does not outweigh the positive source and fit evidence. **Next-attempt cure:** provide settled browser frames for both beats and confirm small-text legibility at native phone size.

Limits: Assessed only the supplied payload and source. No rendered frame or actual browser-font measurements were available; the supplied hash and harness results were not independently verified. Overall tier eligibility requires the other four lens scores.

SCORE: 88
BODY-WRITE: none (read-only run)