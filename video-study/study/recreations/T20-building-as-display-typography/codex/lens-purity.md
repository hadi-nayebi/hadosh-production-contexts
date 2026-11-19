Construction purity passes. The supplied recreation contains no specimen media, embedded images, external URLs, asset imports, or media-loading calls.

- `sampleFacade()` rasterizes `CONFIG.facadeLines` at runtime, reads the canvas alpha mask, and derives window cells from that mask. There are no hand-placed glyph-cell maps.
- Changing facade text regenerates the mask, character bands, cell ownership, and letter count through the same machinery.
- The skyline is code-drawn. Window illumination uses deterministic, seeded `makeRng()`; tower geometry is explicit CONFIG data.
- All rendering logic is inline. The system font stack supplies glyph shapes without loading a font asset. This is consistent with the authorized text-sampling construction.

No refusal-class tracing or embedding is present. No purity cure is required. The reported stub-canvas tests do not establish actual browser raster output, but that limitation does not undermine the construction method visible in the source.

BODY-WRITE: Record purity as passing: preserve runtime text-mask sampling, derived cell ownership, seeded skyline illumination, and zero specimen-media dependencies in subsequent attempts.
SCORE: 100
