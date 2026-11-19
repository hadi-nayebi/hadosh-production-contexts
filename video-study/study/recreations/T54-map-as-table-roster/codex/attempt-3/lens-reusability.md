Reuse is broadly CONFIG-driven, but several exposed settings and validation paths do not uphold that contract. Deductions from 100:

- **−9 — Validation can hang before returning errors.** `plateGridStep: 0` or a negative value makes candidate generation nonterminating. Several geometry, metrics, count and search settings lack finite/range/type checks. Existing errors generally do not stop layout construction. **Cure:** validate the complete schema first, then return immediately on structural errors before running layout or feasibility searches.

- **−7 — Initials are not reliably internationalized.** `/\p{L}+/gu` removes combining marks before grapheme segmentation, potentially splitting a decomposed name into different words. The fallback uses code points rather than graphemes; casing ignores `segmenterLocale`; `initialsCount` controls only single-word names. **Cure:** normalize names, retain combining marks, segment words and graphemes appropriately, use locale-aware casing, and apply an explicit configurable count policy consistently.

- **−6 — Final identity coverage is not tied to the actual duration.** Final cycling needs `ceil(rosterSize / finalIndexGroupSize) × finalIndexStepMs`, but `finalFullHoldMs` remains independent. Feasibility samples every group even when its checkpoint falls beyond `durationMs`, so an appended roster or changed cadence can receive credit for exposure that playback never reaches. **Cure:** derive or validate the required hold and restrict exposure checks to the playable interval.

- **−4 — A style token affects computation without controlling its rendered counterpart.** `fullPlate.lineHeightFactor` changes reserved space but never sets CSS `line-height`. Reservation also treats CSS pixels as SVG units, making its relationship to the rendered plate vary with stage size and camera scale. **Cure:** apply the configured line height and convert the plate’s screen-space bounds into current SVG units.

- **−4 — Typography swaps lack a dependable geometry contract.** Matching `textMetrics.profileFor` to `fontFamily` only compares strings. Unsupported characters silently receive a generic width, and font fallback or weight changes can invalidate label and tag geometry without rejection. **Cure:** validate supported glyph coverage and font/weight profiles, or measure the loaded configured font before layout.

The source earns substantial credit for configurable roster/geography/palette/camera controls, deterministic same-state placement, derived pass duration, and validation before dynamic SVG construction. The claimed consumption census does not resolve the behavioral gaps above.

SCORE: 70
BODY-WRITE: This return files the attempt’s REUSABILITY lens assessment for the practice job’s Verify step and permanent score record.