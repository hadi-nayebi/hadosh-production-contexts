Construction purity: **PASS — 100/100** on the supplied source.

- **Original-media reuse: no deduction.** `recreation.html` contains no images, video, embedded frames, asset URLs, or media-loading code. The comparison’s `segment.mp4` is outside the recreation.
- **Tracing: no deduction.** Rows are ordinary DOM text; the marker is a CSS border triangle. There are no traced paths, pixel maps, or frame-derived contours.
- **Parameterized construction: no deduction.** CONFIG supplies row content, colors, typography, geometry, and timing. `build(c)` constructs the elements; `stateAt(c,t)` derives selection; `render(t)` updates one persistent marker and the active items.
- **Disclosed allocations: no purity penalty.** The added marker steps, allocated timing, and card surface affect other lenses; they introduce no original media or traced construction.

**Next-attempt purity cures: none.** This lens clears the ≥70 floor. The overall RECREATED-tier decision requires the other four scores.

Verification was limited to the supplied full source. The tool host failed before filesystem access, so I could not independently inspect or file local artifacts.

BODY-WRITE: None — filing to `codex/` and `scores.md` was blocked by the unavailable tool host; this return is provided in chat.
SCORE: 100
