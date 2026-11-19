READABILITY — PIXEL-UNVERIFIED. **82/100**, based on source and arithmetic.

At a 360 px stage, full-view name plates render at **15 px**, initials at **12 px**, and Elect text at **13 px**. The opening zoom raises these to 24/19.2/20.8 px; regional views scale them by 1–2×. Names are available as surnames plus states, including hyphenated surnames, rather than initials alone.

Disc separation is sound: 22-unit minimum centre spacing leaves 4 units between disc fills and 2 between their outer rings. Tag placement protects initials. The reported plate checks support collision-free, camera-contained name access for all 55 identities at least once. The final completed-map hold provides a substantial **25.3-second** reading interval.

Deductions from 100:

- **−8 — Initial full-view names disappear before they can be read.** During placement, `labelVisible` selects only the latest arrival, replacing most names approximately every **77.6 ms**. The last name remains for only about **198 ms** before departure; the fully settled roster gets approximately **78 ms**. Later passes recover identity access, but this displayed state offers practically none. **Cure:** retain names for a reading-budgeted interval or suppress these fleeting plates and explicitly defer names to the reading pass.

- **−5 — Final groups allow little time to locate and read five identities.** Each five-name group gets **2.3 seconds**, including locating plates and following leaders. Unlike regional dwell, this budget has no longest-name allowance. **Cure:** include label length and locating time in final-group dwell, or show fewer names per group.

- **−3 — Elect ownership is not guaranteed to remain obvious.** Tags avoid initials and other tags, but the search can relocate them without a maximum owner-distance constraint or an ownership leader. Clear text alone does not guarantee a clear association in dense areas. **Cure:** constrain tags to an unambiguous owner attachment or connect displaced tags to their chips.

- **−2 — Plate-to-chip tracing remains a reading burden.** The permitted centre displacement is **240 units**, equivalent to 240 px in the full view. Thin leaders supply an association, but their crossings and passage through unrelated marks are not checked. **Cure:** shorten allowable displacement and route leaders around text and identity marks.

The static glyph table supports arithmetic fit, but does not establish actual font bounds or raster legibility. No additional deduction is assigned solely for the declared pixel-verification limitation.

SCORE: 82
BODY-WRITE: This return files the source-and-arithmetic READABILITY lens record for the practice job’s Verify step and the artifact’s permanent score record.