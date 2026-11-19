Reusability: 80/100 — clears the lens minimum of 70. Overall build passage cannot be determined from this lens alone.

- CONFIG supports the requested scene substitutions on reload: header/date, palette, building/crowd counts, car endpoints and duration, and puff count/timing all feed construction or animation.
- Swap semantics conflict: the opening comment specifies reload-only changes, but `window.__T130.tryOverrides()` accepts live changes. It updates CONFIG without rebuilding the DOM or refreshing cached `G`, `W`, `figX`, or puff slots. Accepted changes can therefore produce mixed configurations. Remove that setter or rebuild the scene after successful validation.
- Shaping remains partly hardcoded: facade margins/window spacing, crowd size/jitter, car contour/wheel proportions, puff vertical placement, and stroke widths sit outside CONFIG. These constrain production variation despite the broad exposed controls.
- Validation covers useful timing and adjacency relationships, but omits count integrality, nonempty building-height patterns, positive geometry, and window-grid feasibility. Arbitrary text fitting is also unspecified; the cited fit-table is absent from this payload.

Limits: Source-based assessment only; own-check results are reported evidence, not independently verified. Referenced fit-table not assessed.

SCORE: 80
BODY-WRITE: none (read-only run); no scores.md filing performed.