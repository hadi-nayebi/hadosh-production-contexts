Readability: strong numeral and caption hierarchy, but the listing still loses meaningful text at phone size.

- **Listing size and vertical fit:** At 360/390 px stage widths, listing text is 11.00/11.91 px with 14.30/15.49 px rows. Nine visible rows fit completely within the window; previously revealed rows are removed before they can push visible text below it. This preserves the minimum font floor, although 11 px remains small for first-time reading.
- **Horizontal clipping remains a material defect:** The two named longest lines exceed their columns by approximately 24/26 px under the filed estimate. `white-space: nowrap` and `overflow: hidden` cut their endings without wrapping or another means of recovery. Their full names cannot be read. The blanket claim that all shorter lines fit also needs correction: the filed formula predicts overflow for 33–35-character lines, too.
- **Contrast is strong:** Against `#050505`, approximate contrast ratios are 14.4:1 for listing text and label, 7.7:1 for green checks, 16.6:1 for the prompt, 20.4:1 for white caption text, and 9.5:1 for the orange numeral and caption zero. Contrast does not cause the listing failure.
- **Numeral dominance holds:** Its 67.49/73.12 px font size substantially exceeds the supporting type. The filed two-digit width estimate fits its column. Default scale remains exactly 1, so scaling introduces no clipping, blur fluctuation, or transient competition.
- **Caption and controls:** Caption type is approximately 15.80/17.11 px, with the zero enlarged to 19.74/21.39 px. The reserved bottom area separates it from the listing; the default caption has a plausible horizontal fit. Controls sit outside the presentation area.
- **Reading time is limited:** Nine-row retention gives most entries roughly 1.2–1.6 seconds on screen during accumulation. That supports scanning more readily than reading every title. The landing caption appears at seven seconds and remains visible after the timeline clamps.

These findings are source-and-geometry judgments. Actual glyph bounds, font fallback, and perceived phone-size readability remain pixel-unverified.

BODY-WRITE: Record horizontal listing fit as unresolved; require the next build to preserve complete titles at the 11 px floor, audit every title rather than only the longest, and verify rendered phone-size frames before claiming readability closure.
SCORE: 76
