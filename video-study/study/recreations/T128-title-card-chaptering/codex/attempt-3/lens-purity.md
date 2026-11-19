**Verdict — Attempt 3 clears the purity floor.** The default recreation is built from code and local fonts. The deductions are for visible shaping values outside `CONFIG` and an override path that can introduce markup.

### Findings

- **Assets, geography, and letterforms.** `CONFIG.map.contours` supplies abstract Bézier strokes that `mapSvg()` draws as inline SVG. The supplied paths depict no identifiable geographic features. The exhibit, map label, eyebrow, and main line are DOM text created through `textContent`, with local font stacks. The source embeds no specimen imagery, sampled glyphs, or external asset references. The visible strings serve as exhibit text, a map label, and title-card copy. There is no caption or subtitle layer. Evidence is in `CONFIG`, `mapSvg()`, and the DOM construction block.
- **The rendered strike depends on fixed font metrics.** The source describes the coefficients above `measureText()` as fit-model-only, but `strikeWidthPx()` uses those coefficients to set the rendered strike’s left edge and animated width. Changing the configured font can therefore leave the strike sized to an estimate for a different font. For the next attempt, derive the strike width from the rendered eyebrow in its configured font and tracking, or expose the advance coefficients in `CONFIG` and document their effect on the strike. Evidence is in `measureText()`, `strikeWidthPx()`, and the strike setup and update in `render()`.
- **The vignette color is fixed in the renderer.** `CONFIG.map` controls its stops and strength, while the `vigEl.style.background` assignment hardcodes black. Add the vignette color to `CONFIG.palette`, validate it through `SCHEMA`, and use it in both the gradient and `labelContrastAt()` so the contrast model follows the renderer.
- **The contour override accepts arbitrary markup.** The default paths are clean, but `SCHEMA.groups.map.contours` and `kindErrors()` accept any nonempty string. `mapSvg()` interpolates it into an attribute, and `mapEl.innerHTML` parses the result. That leaves the configurable build’s asset-free construction unenforced. Build the SVG with `createElementNS()` and set each path’s `d` with `setAttribute()`. Validate the path data so malformed overrides are rejected before rendering.

### Limits

Static review of the supplied source. The hash binding and own-check results are reported by the payload and were not independently verified. Rendered pixels, actual font metrics, and provenance of the contour coordinates were not independently checked. The overall bar remains dependent on the other lenses.

SCORE: 94  
Body-write: none (read-only run)