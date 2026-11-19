The source is parameterized construction: quote content, attribution, timing, palette, typography, and most geometry flow from CONFIG. Quote lines are formed through canvas-measured word wrapping, with measured splitting for oversized tokens and font reduction for vertical fit. No specimen line breaks, screenshots, embedded media, traced paths, or external assets appear.

A small deduction applies because some geometry remains outside CONFIG: the 16:9 stage ratio, centered card placement, and glyph line-height of 0.6. These limit configurability without indicating tracing. Pixel verification is unnecessary to establish these source-level findings.

SCORE: 96
BODY-WRITE: Move stage aspect ratio, card anchor coordinates, and glyph line-height into CONFIG so the remaining fixed geometry becomes configurable.