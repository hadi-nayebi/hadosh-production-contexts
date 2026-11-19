CONFIG supports routine reuse: phrase sequence, per-phrase colors, background, hold duration, font family/weight, tilt, margins, and maximum size. The supplied 16/16 swap test supports ordinary substitutions; it does not establish arbitrary-length fitting.

Reuse gaps:

- **Overflow remains possible.** The 16px minimum overrides the computed fit for sufficiently long phrases or narrow stages. Canvas measurement excludes CSS `letter-spacing:0.01em`; rotation and glyph overhang also extend beyond the measured width. `overflow:hidden` clips these failures.
- **Some parameters remain embedded in logic:** height allowance `0.62`, minimum font `16`, reference stage width `960`, fallback stage dimensions `960×540`, minimum hold `100`, and fallback content `"SLAM!"`. Letter spacing lives in CSS.
- **Validation is incomplete.** Empty phrase arrays receive a fallback, but whitespace-only phrases survive. Direct CONFIG edits lack validation. Negative/out-of-range weights, nonfinite tilt, invalid colors, and invalid margins or font caps are not rejected. Numeric parsing accepts partial strings; excessive timer values remain unchecked.
- **Restart is logically deterministic:** it clears the pending timer, resets the index, and immediately displays phrase zero. Font readiness is not synchronized, so custom web fonts can change measurement after initial display.

Next attempt should centralize remaining production parameters, normalize and validate CONFIG, and fit using actual rendered bounds including spacing and tilt. Explicitly define handling when text cannot fit at the chosen minimum size. Verify extreme lengths, narrow stages, whitespace input, invalid numbers, and restart after pause.

BODY-WRITE: Replace the build’s unconditional “never overflows” claim with a bounded claim until rendered-bounds fitting and validated configuration pass extreme-length, tilted-text, narrow-stage, and malformed-input checks.
SCORE: 78
