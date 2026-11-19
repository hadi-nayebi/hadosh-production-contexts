**Score: 77/100 — reusable for the demonstrated swaps, with layout and timing limitations.**

The camera geometry is well parameterized: `endScale` derives from stage width and screen width, translation derives from their centres, and the visible window updates with geometry. The recorded swaps support this: both width fixtures reach `endScale = 3.75`, and the final-build width swap recomputes `fitScale ≈ 0.738`. Text, palette, typography, device geometry, and cursor settings have clear application sites.

Deductions:

- **−9 — Content fitting assumes exactly two result rows.** `naturalH` hardcodes `2*rowH` and `3*gap`, while construction accepts any number of `inner.lines`. Adding rows does not update the fit budget. `naturalW` also ignores title/text measurements, so longer replacement copy can overflow or wrap beyond the estimated height.
- **−5 — `holdAfterMs` has no observable effect.** Both branches after the zoom return `u = 1`; changing this key merely moves a boundary between identical states. Reading the key does not make the hold independently controllable.
- **−4 — The fit calculation differs from rendered layout.** Gap is multiplied by `fitScale` before the entire content group is scaled, making displayed gaps scale quadratically. Title height assumes `1.3` without setting that line-height, and flex children retain default shrinking behavior.
- **−3 — Some shaping decisions remain outside CONFIG.** Cursor polygon proportions and the title-height multiplier are literals. The ease selector supports only one registered curve.
- **−2 — Geometry swaps have an unstated aspect-ratio constraint.** Width-based scaling fills the stage vertically only when the screen is sufficiently tall. Shorter screen rectangles can expose the surrounding device instead of producing a full-frame webpage.

**Next-attempt cures:** derive dimensions from actual row count and rendered text; apply fit scaling once; set explicit line-height and shrink rules; give `holdAfterMs` observable timing semantics; expose remaining shape constants; and validate screen aspect ratio.

This lens clears the 70-point floor but is below 85. The overall tier requires all five lens results. Assessment uses the supplied source and recorded evidence; no independent browser verification was performed.

BODY-WRITE: none (read-only run)
SCORE: 77
