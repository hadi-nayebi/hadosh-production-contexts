Readability score: **76/100**.

The default typography is promising: 24 px italic quotes, 20 px speaker names, and 15 px roles. Cream and gold text on the dark card comfortably exceed 4.5:1 contrast. The plain field avoids competing detail, and the HUD has strong contrast.

The main weaknesses are:

- **Reading time:** Sal Khan’s 22-word quote gets only 3.75 seconds at full opacity—about 352 words per minute before reading the attribution.
- **Unverified fit:** the reported 22 px ink measurement does not establish browser wrapping, quote–attribution clearance, or complete visibility of Schneier’s long role and year. PIL stand-ins cannot verify Georgia rendering.
- **Narrow phones:** the fixed 360 px stage exceeds a 320 px viewport, risking horizontal overflow.

Next attempt must extend the longest quote’s hold, make the stage fit narrower viewports, and verify all three cards in a browser at phone size. Measure text bounds, attribution clearance, and clipping using the actual resolved font. **PIXEL-UNVERIFIED remains applicable**; this score does not clear that limitation.

BODY-WRITE: none (read-only run). The execution tool failed to start, so `codex/lens-readability.md` was not written; the consumer must persist this return verbatim.

SCORE: 76
