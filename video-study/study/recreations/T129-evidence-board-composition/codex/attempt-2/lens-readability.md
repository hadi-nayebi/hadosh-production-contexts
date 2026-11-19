Verdict: readability **84/100** — clears the ≥70 lens floor, but falls just below 85. Overall improvement over 81.0 and the five-lens pass remain unassessed.

- **Strong text separation:** `recreation.html`, CONFIG palette/type and `build()`: 16px bold labels have computed contrast of **15.29:1** on black chips and **13.16:1** on cream cards. The 22px red stamp achieves **4.20:1** against cream.
- **Prior cures substantially land:** `photoCardHeight()` and `computeLayout()` yield an **89px** car card with a separate **40px** caption region. The modeled stamp ends at y≈152.57; caption begins at y=155. `stateAt()` provides **16950−13950=3000ms** of completed-board reading time.
- **Remaining clearance is tight:** `build()` gives the stamp a 26px border-box height, 3px borders, and 26px line-height: its line box exceeds the **20px content height**. The note likewise needs **4×19.2=76.8px** of line boxes inside **84−8=76px** available height. These do not establish clipped glyphs, but weaken the claimed container-fit assurance.
- **Measurement limits affect confidence:** `textWidthPx()` uses approximate character factors; `computeLayout()` tests unrotated caption geometry while `render()` rotates exhibits. Actual font wrapping and final stamp/caption clearance therefore remain unverified.

Limits: Source SHA-256 matches the supplied hash. Assessment is source-level; rendered phone-size pixels and playback were not inspected. Reported own-check totals were not independently reproduced.

Body-write: none (read-only run)

SCORE: 84