Construction purity passes: the supplied recreation uses DOM text, CSS shapes, and SVG paths generated from CONFIG. No specimen media, embedded raster images, external assets, frame overlays, or media-loading code appear. The SVG namespace URL identifies SVG elements; it does not fetch an asset. System fonts introduce no external font dependency.

The remaining defects concern the strict “from CONFIG” requirement:

- CSS fixes `#subtitle` opacity at `.85`.
- `.pill` and `.smalltag` hardcode letter spacing at `.02em` and `.14em`.
- `#divider` hardcodes `border-left-style:dashed`, although the plan identifies divider style as a variable.

Cure: expose these values as CONFIG keys and apply them through CSS variables or construction code. The build record’s claim that only structural values remain outside CONFIG is therefore overstated.

`artwork.areaPath`, `artwork.curvePath`, and `split.right.wavePath` are explicit vector geometry. Nothing in the supplied source establishes frame tracing; resemblance or detailed coordinates alone cannot establish that defect.

PIXEL-UNVERIFIED incurs no deduction under this lens: source inspection supports construction purity independently of visual rendering. This score supports the purity gate only; it does not establish overall RECREATED eligibility.

SCORE: 95
BODY-WRITE: This return records the source-only construction-purity verdict and a three-item CONFIG cure list for codex/lens-purity.md and scores.md.
