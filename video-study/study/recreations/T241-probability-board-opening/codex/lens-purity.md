T241 attempt 1 clears the construction purity lens. No purity cure is required.

- **Generated geometry.** In `recreation.html`, `render()` constructs the reticle and magnifier from SVG primitives. `figureGroup()` uses the same geometric construction for the magnified figure and the configured 4 × 10 array. `starPath()` calculates its Bézier points from the center, radius, and curve factor. `derive()` calculates the selected icon’s center from its index, and `render()` uses that center for both the ring and the connector endpoints.
- **Runtime text.** In `recreation.html`, `render()` takes the formula, slot word, callout, and expansion lines from `cfg.texts`. Expansion text is sliced by the character counts returned by `stateAt()`.
- **Media isolation.** The supplied `recreation.html` source contains no specimen media, frame sequence, or traced path data. The build record’s Wave 39 comparison check reports one `segment.mp4` reference on the labeled ORIGINAL side of `comparison.html`.

**Limits.** This finding is based on the supplied source and build record. The SHA-256 binding and comparison page were not independently verified.

SCORE: 100  
BODY-WRITE: none (read-only run). Return for the recreation seat to file verbatim at `codex/lens-purity.md` and cite in `scores.md`.
