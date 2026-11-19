Verdict: READABILITY 88/100 — clears this lens’s 85 target and 70 floor. Five-lens tier remains NOT ASSESSED without the other four scores.

Findings:

- **Foreground separation passes structurally.** In supplied `recreation.html`, `galaxyOpacity()` caps arms/core opacity at 0.5; default is 0.45. Badge and banner have no inherited reserve opacity and render after the scope.
- **Banner fits with useful phone-scale size.** `CONFIG.banner` specifies a 470 × 66 px ribbon and 30 px font: at 360 px display width, these become 235 × 33 px and 15 px. The supplied ink estimate of 177.6 px leaves 57.4 px total horizontal room; that ink measurement is UNVERIFIED here. Fixed dimensions throughout entrance preserve text size.
- **Badge is readable but relatively small at pulse minimum.** `CONFIG.badge` and `stateAt()` produce settled scales of 0.84–1.16. At 360 px width, the disc diameter therefore ranges from 14.28–19.72 px, and the glyph font from 10.08–13.92 px. White “!” on solid orange supports recognition; the brief initial growth from zero is intentional.
- **Region clearance is generous.** Badge and ellipse share centre `(218,292)`. Maximum badge radius is `17 × 1.16 = 19.72` stage px versus ellipse vertical radius 50. The banner ends at stage y=233; the pulsing badge starts no higher than y=272.28, leaving 39.28 stage px clearance.

Practice cure: increase `badge.r` to 20 and `glyphFontPx` to 28 if stronger minimum-pulse readability is desired. Confirm the final rendered banner fit and badge recognition at 360 px width across pop, pulse minimum, and banner hold.

Limits: supplied text only; no tools, rendered frames, font measurements, or pixel contrast checks. Reported own-check results were considered evidence, not independently reproduced.

SCORE: 88
BODY-WRITE: none (read-only run)