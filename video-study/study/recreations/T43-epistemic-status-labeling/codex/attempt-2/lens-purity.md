Construction purity is strong: the source contains no specimen media, image/video elements, external loads, or frame overlays. Artwork is drawn with DOM/SVG, with geometry, text, colors, typography, spacing, and entrance times largely supplied by CONFIG. The SVG namespace is an identifier, not an external load.

The remaining exceptions prevent full marks:

- `render()` hardcodes `sp*50` for the outgoing artwork’s clipping. This shaping decision stays centered even when `CONFIG.split.ratioPct` changes.
- Presentation choices remain outside CONFIG: the panel’s `"solid"` border, provenance wrapping (`whiteSpace="normal"`), and SVG stretching (`preserveAspectRatio="none"`).
- Validation hardcodes the `0.62` glyph-width estimate. This affects which configurations are accepted, although it does not directly shape the rendered artwork.

Fixed SVG paths inside CONFIG are explicit configurable geometry; their presence alone is not evidence of specimen tracing. Structural zeros, full-container dimensions, and normalized opacity endpoints are reasonable construction constants.

This assessment comes from inspecting the supplied source. The packet’s configuration-swap observations support it but do not establish runtime behavior.

BODY-WRITE: Move the fixed transition midpoint and remaining presentation policies into CONFIG, then verify that changing the split ratio also changes the outgoing artwork’s clipping consistently.
SCORE: 93
