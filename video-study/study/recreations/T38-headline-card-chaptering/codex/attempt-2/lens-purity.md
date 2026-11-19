Purity is strong: the recreation constructs its objects from data rather than tracing or embedding specimen imagery.

- **Computed pie geometry:** segment values determine normalized angular spans, arc endpoints, large-arc flags, and SVG paths. Center, radii, depth, rotation, stroke, and shading read from CONFIG. The full-circle case uses generated ellipses.
- **Generated content:** percentage labels derive from segment values and their total. Headlines, chips, formula spans, legend entries, and takeaway text are constructed from configured content. Specimen wording is legitimate title-card content under this technique’s definition.
- **No embedded specimen assets:** the supplied source contains no images, video, frame references, external fonts, scripts, or asset requests. The SVG namespace URI identifies an element vocabulary; it does not fetch media.
- **Purity defect — nominal configuration without effect (−10):** `geom.chipOffsetY`, `geom.legendRight`, and `geom.legendTop` are assigned to CSS custom properties but never consumed. The actual legend uses `--padX` and `--heroTop`. Changing those three advertised controls therefore changes no construction. Binding a variable is insufficient evidence that it drives the artifact. Cure: remove the inactive keys or connect them to their intended layout properties, then verify each retained key changes the constructed style or geometry.

The deduction concerns ineffective construction controls, not timing, motion, legibility, or reusability breadth.

SCORE: 90
BODY-WRITE: This return supplies the verbatim codex/attempt-2/lens-purity.md filing and the scores.md purity entry: 90/100, with three inactive geometry controls identified and their cure recorded.
