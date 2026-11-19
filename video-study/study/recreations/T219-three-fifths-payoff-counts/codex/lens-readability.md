**Verdict — The fit and hierarchy support readability on a 360 px stage. The orange enslaved-population figure is the main weakness.**

- **Fit.** The Cycle 040 A6 receipt reports 12 PIL measurements with positive margins. The smallest reported clearance is +6 px in the fit table, and the proxy ink heights at 360 px range from 11.2 to 16.1 px. The lower end clears the review’s approximate 11 px floor by only 0.2 px.
- **Hierarchy.** In `recreation.html` (`t219-config`, `t219-render`), the elector totals and population figures use the largest bold type at 52 and 48 SVG units. State names sit below them at 42 units, and the 34-unit row labels are quieter. The light state names against the dark tiles and the white clause text against both halves of the banner and tag support that hierarchy.
- **Contrast and cure.** In `t219-render`, the Virginia enslaved-population figure `347,000` uses `P.frame` (`#c96f4a`) on `P.ground` (`#f4f1ea`), approximately 3.2:1 from the supplied hex values. Its bold type is 18 CSS px on a 360 px stage. A dedicated darker text color such as `#9a492d` would raise that pairing to approximately 5.5:1 while preserving the orange frame.

**Limits —** The A6 fit receipt uses DejaVu Serif as a proxy for the configured browser font stack. Browser-rendered fit and legibility remain pixel-unverified under A10.1. The score applies to the specified build at a 360 px stage width. On a 360 px viewport, the standalone page’s 12 px padding on each side reduces the stage to 336 px.

SCORE: 84  
BODY-WRITE: none (read-only run). This return supplies the readability score and contrast cure for filing in `codex/lens-readability.md` and use in `scores.md`.
