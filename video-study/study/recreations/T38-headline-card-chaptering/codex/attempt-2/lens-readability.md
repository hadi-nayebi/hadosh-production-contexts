Readability score: 62/100. The configured type sizes and contrast are adequate, but the formed layout has unresolved collisions that the modelled checks do not exclude.

- **High impact — pie labels overlap each other and the pie.** At 360px, the stage is 202.5px tall. The first two labels start at y≈68.9px and y≈77px: only 8.1px apart, while their 11.16px text plus vertical padding requires roughly 18px. Their horizontal extents also need browser measurement. Both occupy the pie’s visible vertical region, so the record does not establish label-to-object separation.
- **High impact — demonstration tag competes with the date chip.** Both start on the same row. The long, unbroken tag is right-aligned, while “1905” occupies the left side with padding. At approximately 11px bold, the tag leaves insufficient reliable clearance from the date chip. This pairing was not included in the reported separation assertions.
- **Positive — headline and formula zoning.** Moving provenance below the headline provides useful separation. The formula’s 56% zone and legend’s 60% starting position provide a plausible gap for the configured formula.
- **Positive — size and palette.** Minimum configured text is 11.02px at 360px and 11.93px at 390px. White and pale lavender on purple, and dark lettering on the colored labels and yellow pills, provide strong contrast.
- **Evidence limitation.** Source-derived rectangles support a layout hypothesis; they do not verify actual font metrics, glyph extents, wrapping, or painted collisions. The build explicitly acknowledges that rendered verification is absent. Its selected disjointness checks therefore cannot establish the whole displayed state.

For the next attempt, separate the pie labels vertically and place them outside the pie’s painted bounds; give the demonstration tag its own row. Then inspect both formed cards at 360px and 390px, measuring actual text and object bounds, including chip–tag and every label–pie pair.

SCORE: 62
BODY-WRITE: This return supplies the verbatim codex/attempt-2/lens-readability.md filing and the scores.md readability entry: 62/100, with collision findings and required verification cures.
