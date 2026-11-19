Construction is substantially parameterized, but the “every value lives in CONFIG” claim fails.

- **Content outside CONFIG:** `QUOTE` is literal HTML; the opening quotation mark is literal HTML and assigned again in JavaScript. Neither can change through `?cfg=`.
- **Typography outside CONFIG:** quote italic, mark normal, and mark line-height `"1"` are hardcoded.
- **Palette outside CONFIG:** the page background `#0b1526` remains fixed when `palette.bg` changes. The override changes only the stage background.
- **Overrides genuinely drive construction:** source inspection confirms deep merging and consumption of cards, HUD, timing, palette, font, stage dimensions, and geometry. Array overrides retain untouched entries. This conclusion is static; I could not independently execute the harness.
- **No specimen embedding or tracing found:** the supplied recreation contains no media elements, external assets, specimen references, traced paths, or frame data. Structural zeros, unit conversions, and phase arithmetic are construction logic rather than subject-specific tracing.

Next attempt must move tag text, mark glyph, font styles, mark line-height, and page background into CONFIG and consume them directly. Verify overrides for those cures plus stage dimensions, geometry, `enterMs`, and `endHoldMs`; the reported swap test leaves those surfaces untested.

The supplied payload is the assessment basis. Filesystem tooling failed to start, so the local hash was not independently checked and `codex/lens-purity.md` was not written.

BODY-WRITE: none (read-only run); consumer must persist this return verbatim at codex/lens-purity.md.
SCORE: 78
