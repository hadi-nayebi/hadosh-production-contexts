**Readability verdict — 90/100.** At 360px, the headline reads first, the support text fits at every reported wrap state, and headline replacements avoid overlap. The tightest point is the warning’s bottom margin.

- **Headline hierarchy.** The supplied headlines use 20px type at weight 800 within a 324px text area (360 − 2 × 18). White chips and blue text emphasize the operative words. On a single-line chip beat, the headline ends around y=45, leaving about 41px before support begins at y=86. (`CONFIG.headline`, `.headline`, `.chip`, `CONFIG.support`)
- **Support text and wrapping.** The 13px insert label has 226px of usable width (250 − 2 × [10px padding + 2px border]) and 56px of usable height, giving a second line room. The 12px checklist labels have 188px inside each row, and the 12px warning has 264px inside its box. The fit packet reports containment at every reachable wrap state. The checklist and warning are the smallest text on the stage. (`CONFIG.insert`, `CONFIG.check`, own-check packet “Fit model”)
- **Stack position.** The warning starts at y=176 (86 + 3 × 24px rows + 3 × 6px gaps). That leaves 27px to the stage edge. With 10px of vertical padding and an estimated 14px line box, the warning clears the bottom by about 3px. The completed stack fits, though the warning has little breathing room. (`CONFIG.stage`, `CONFIG.check`, `.check`)
- **Headline transitions.** `render(t)` gives every inactive beat zero opacity immediately. Only the incoming beat fades in over 450ms. Two headlines therefore never appear together, including at loop wrap. (`render`, `tick`, `CONFIG.enterMs`)

**Limits.** This score covers the supplied logic model. Browser font metrics and the exact bottom clearance remain unverified. The overall five-lens pass decision requires the other four scores.

**Body-write: none (read-only run)**

SCORE: 90