CONFIG covers the roster, geography, palette, cadence, camera and most style values. Duration and placement counts derive from roster size, and validation precedes generated SVG construction. However, the source does not support the build record’s claim of complete CONFIG-driven reuse.

Deductions from 100:

- **−8 — `passWaves` is only partially consumed.** `labelVisible()` calculates group size using the configured value but hardcodes the selected wave to `0` or `1`. With three waves, the third group never receives its regional identity exposure. **Cure:** derive the wave index from elapsed regional time, bounded to `passWaves − 1`, and verify exposure for every member.

- **−8 — Validation leaves consequential CONFIG combinations unchecked.** Examples include empty opening regions, pass regions containing no roster members, invalid viewBox dimensions, nonpositive `authoredPlaceEndMs`, and `cameraMoveMs > passStepMs`. These can produce NaN camera centres, invalid derived durations or unordered keyframes. Zero `tagGridStep` can hang validation itself. **Cure:** validate types, finite values, bounds, populated regions and cross-field constraints before invoking layout or timeline calculations.

- **−5 — Cardinality support lacks a feasibility gate.** Per-state capacity and distinct starting positions do not guarantee a feasible final layout. Relaxation can finish with collisions; tag and plate searches can return overlapping fallbacks without validation rejecting the configuration. Increasing roster density, chip size or label length can therefore silently degrade a reused build. **Cure:** validate final separation, tag placement and plate feasibility across all identity waves; adapt the layout or reject infeasible configurations explicitly.

- **−4 — Initials are Unicode-aware only at letter matching.** `charAt(0)` splits supplementary-plane letters, `slice(0, 2)` counts UTF-16 units, and `\p{L}+` excludes combining marks. Decomposed accented names and some Indic names can tokenize incorrectly. **Cure:** normalize names and extract grapheme clusters using `Intl.Segmenter`, with a documented locale and initials policy.

- **−3 — Typography changes require manually synchronized geometry.** Label and Elect widths use string length times fixed width factors; changing `fontFamily`, script or wording does not derive corresponding metrics. This undermines CONFIG-only typography swaps and their layout guarantees. **Cure:** measure the configured font before layout, or require and validate a matching font-metrics profile.

- **−2 — Some reusable presentation policy remains outside CONFIG.** The one-unit layout inset, two-initial limit and full-view scale threshold are embedded in logic. The English accessibility label and configuration-error prefix also remain literal. **Cure:** expose meaningful policy and localization values in CONFIG, while documenting arithmetic constants separately.

SCORE: 70
BODY-WRITE: This return files the attempt-2 reusability deductions and cures for the practice job’s Verify step and permanent score record.