CONFIG covers the main production swaps: bands, title, calendar text, palette, geometry and timings are applied. Derived scheduling, automatic duration expansion and seekable rendering support reuse. No clearly unapplied key is evident.

Priced deductions:

- **Incomplete validation (−9):** negative geometry, invalid font bounds, nonpositive line heights and offstage calendar positions can pass. Calendar text has no fit check. Validly typed overrides can therefore produce clipped or unusable output.
- **Zero-duration failure (−5):** `fadeMs: 0` is accepted, but rendering exactly at `holdEnd` computes `0/0`, producing `NaN` opacity. A zero fade needs an explicit instantaneous transition.
- **Silent fallback (−5):** malformed values are ignored; rejected layouts restore the entire default configuration without diagnostics. Production can receive the wrong title, dates and bands without a visible failure signal.
- **Fit checks differ from rendering (−4):** measurement treats every band as weight 700 while ranges render at 800. Space-based wrapping also misses some browser wrapping behavior. The long-word check uses the minimum font size rather than the selected size, allowing underestimated row heights.
- **Hidden design constraints (−2):** aspect ratio, font family and weights, and calendar text layout remain literals. Different formats or typography require source edits.

**Next attempt:** validate every numeric domain and element’s bounds; fit calendar text; measure mixed-weight band text consistently with rendering; handle zero fade explicitly; expose override acceptance, rejection reasons and effective configuration. Make aspect ratio and typography configurable.

Assessment is source-only; recorded measurements do not establish browser behavior.

SCORE: 75
BODY-WRITE: No file written; the execution tool failed to start, so this return remains unfiled in the requested artifact directory.
