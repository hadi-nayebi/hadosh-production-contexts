Readability does not yet justify RECREATED. The color choices provide strong apparent contrast, and the green/purple headings make the split understandable. However, the font-floor calculation does not establish that the labels fit.

Defects and priced cures:

1. **Provenance pill exceeds the stage horizontally.** At 360px, `split.right.panelXPct:56` places it at 201.6px. Its content width is 136.8px (`panelWPct:38`), plus 24.75px horizontal padding. Its right edge reaches **363.15px**, where `#stage{overflow:hidden}` clips it. Apply `box-sizing:border-box` and constrain the complete pill to its intended panel bounds.

2. **“SCHEMATIC POTENTIAL” has a substantial clipping risk.** `artworkTags[1].xPct:58` leaves only 151.2px. `.smalltag` adds `.14em` tracking and prohibits wrapping; the build’s fit summary does not measure this label. Measure its actual bounding rectangle at 360px, then adjust placement, tracking, or wrapping while retaining the font floor.

3. **The bottom artwork labels compete for space.** `stylizedTag` starts at 86% height; `schematicTag` starts at 93%. The cyan pill’s padding extends it into the schematic label’s vertical band. Their horizontal separation remains unverified. Give both labels explicit, nonoverlapping bounds.

4. **The settled-items panel crosses the split boundary.** Its content-box width, padding, and borders total **158.6px** at 360px. Starting at 21.6px, it ends at **180.2px**, across the divider’s 180px origin. Use border-box sizing and reserve a visible gutter around the divider.

The **11.25px text floor passes numerically**, and the palette is promising. PIXEL-UNVERIFIED matters specifically here: actual text wrapping, clipping, separation, and glance readability have not been demonstrated. Cure requires 360px rendered checks of the fully populated artwork and split states, including element bounds and a visual reading pass.

SCORE: 61
BODY-WRITE: This return supplies codex/lens-readability.md with a readability-only verdict, calculated overflow evidence, unverified layout risks, and the cure list for the next attempt.
