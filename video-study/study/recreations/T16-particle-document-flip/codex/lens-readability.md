Readability separation is present by construction: page/title particles use alpha 1.0, reserve particles 0.28, and released/surplus particles immediately drop to 0.16. Drawing borrowed particles last further protects formed content. Stack outlines at 0.45 remain subordinate; the gold halo at 0.95 occupies a separate vertical region from the title.

“AI GURU” should remain legible at phone size: runtime font fitting limits its width to 86% of the stage, while the 4px sampling grid and 1.6px radius provide dense letterforms. The pale blue DOM label and white counter contrast clearly against black. This is a source-based assessment; phone rendering was not visually verified.

Priced findings:

- **Bright traveling dust temporarily competes with content.** `updateParticles()` assigns foreground alpha immediately when `borrowed` becomes true, including during stagger delays and travel. Cost: reduced separation during formation and page changes; the settled title hold avoids this defect.
- **Most pages cannot fully settle before replacement.** Page changes occur approximately every 138–220ms, while `travelFlipMs: 230` plus stagger can require 333.5ms. Cost: page interiors remain less readable through much of the flip, although the DOM counter remains clear and the final page gets a longer hold.
- **Thin page outlines have sampling risk.** A 3px stroke sampled every 4px can omit a straight edge at some viewport alignments. Cost: a less complete page silhouette on affected phone widths. Denser outline sampling would make recognition more reliable.

Body-write status: this return supplies the readability score and findings for `codex/lens-readability.md` and aggregation into `scores.md`. Filesystem access failed, so neither file was written. The findings above are the proposed cure items if the combined review routes attempt 2.

SCORE: 86
