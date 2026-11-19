Construction purity passes this lens, with three deductions:

- **−8: Timing curves outside CONFIG.** Post-cut growth and wordmark arrival each hardcode exponent `3` in `pose()`. CONFIG controls their durations, but cannot control these easing decisions. Add independent `settleEasePow` and `wordmarkEasePow` keys.
- **−3: Palette control has an accepted-but-broken domain.** Validation accepts three-digit hex colours, but `mixHex()` parses only six-digit hex. Valid short-hex replacements for `palette.search` or `palette.field` therefore break the rendered blend. Normalize hex before interpolation or restrict validation.
- **−2: Consumption evidence overclaims.** A mutation rejected by validation does not prove that a key controls the rendered subject. The census counts rejected mutations for `searchDimBlend` and `settleScale`; replace those cases with valid mutations and observable output comparisons.

The source contains no specimen media, embedded frames, or traced paths. Both scenes use the same `makeMark()` primitive, with CONFIG-driven triangle geometry, colours, label, and placement. Structural arithmetic and font-measurement constants do not independently prescribe the subject.

**Recommendation:** clears this lens’s threshold; overall RECREATED status requires the other four lenses.

BODY-WRITE: none (read-only run)
SCORE: 87