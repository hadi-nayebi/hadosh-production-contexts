READABILITY: 78/100 — below the 85 target; above the 70 lens floor. Construction supports a readable phone layout, but reading time and unverified text geometry prevent clearance.

1. **The waffle summary needs more reading time.** `summaryTiming()` allocates 20ms per character: 89 × 20ms = 1.780s fully visible. Typing provides earlier exposure, but viewers must also read the title, count and “you” annotation. Cure: shorten the summary or extend its completed hold, then verify comprehension during normal-speed phone playback.

2. **The fit model does not establish actual text containment.** `textLines()` estimates wrapping from character count; it does not measure word boundaries, font metrics, letter spacing or borders. Consequently, `fitReport()` cannot prove that titles, cards and notes fit their allocated heights. Cure: check actual browser bounds at 360px and 390px, including every completed figure and its source line.

3. **Entrances retain clipping risks outside the tested stamp model.** `orgChart()` scales the badge from 1.6 without reserving transformed bounds. `stampMetrics()` estimates stamp dimensions rather than measuring the CSS box. These are risks, not observed clipping. Cure: inspect intermediate entrance frames and constrain both elements using their rendered transformed bounds.

4. **Phone hierarchy is serviceable but modest.** `computeLayout()` yields 20px masthead/counter, 17px titles, 12px body/labels and 14px notes at both phone widths. One active figure at a time (`render()`) limits competition, and full-opacity secondary source text improves separation. However, the “giant” counter has limited prominence, and `counterGraph()` still uses the weaker `palette.muted` for its subtext. Cure: strengthen counter emphasis and verify all text colours on the rendered paper/card grounds.

Limits: Reviewed the supplied source and packet; `recreation.html` was absent from the workspace listing, so its hash was not verified. No rendered pixels or playback were assessed. Overall BAR outcome requires the other four lens scores.

BODY-WRITE: Add rendered phone text-bound checks, badge/stamp entrance checks and normal-speed summary comprehension to the next attempt’s readability gate; retain modelled fit as preliminary evidence only.
SCORE: 78