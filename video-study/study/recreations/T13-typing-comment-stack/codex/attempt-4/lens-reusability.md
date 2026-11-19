Reusability is substantial, but several configuration and fitting claims exceed what the source wires.

- **Strong foundation:** content, chrome labels, palette, layout modes, typing rates, entrances, landing interpolation, and caret phase are configured. Replacement titles regenerate the opening prefix; added beats receive rate overrides; excessive content can produce named failures.
- **Several typography tokens affect measurements without affecting rendered typography.** `headLineHeight` has no CSS consumer. `timeWeight` and `footWeight` never set their elements’ weights. `footLineHeight` applies to card footers but not the post footer. Changing these tokens can therefore change validation while leaving the corresponding display unchanged. Setting every CSS variable does not establish effect mapping.
- **Geometry units are not consistently honored.** `--titleMaxH` takes the numeric part of `titleFont` and always appends `cqw`: configuring `20px` produces a height derived from `20cqw`. Available-height calculations similarly treat `commentsTop` and `commentsBottom` as percentages regardless of their units. Unsupported units silently become numeric pixel values in `lenPx`, while CSS interprets them differently.
- **Replacement fitting is not reliably fail-closed.** Validation runs at two configured reference widths, not the actual viewport. Fixed-pixel geometry or narrower phones can invalidate the accepted result. Stamp fitting checks rotated width without checking its configured position or vertical containment. Card-height estimation assumes the avatar determines header height even when configured text or badge geometry is taller.
- **Text boundaries remain inconsistent.** Fitting collapses JavaScript `\s`, including nonbreaking spaces that CSS preserves. Prefix fitting segments normalized text, while playback segments raw text. Its whitespace-delimited wrapping simulation also does not reproduce browser line-breaking opportunities for arbitrary Unicode text. The disclosed fallback segmentation boundary is useful, but limits full Unicode reuse.
- **Count behavior is bounded and disclosed:** counts above the configured maximum fail, and seven or eight typical titles can freeze on stack overflow. Those named failures are preferable to silent clipping.

The supplied checks establish useful logic behavior, but do not resolve these source-level discrepancies.

I could not save `lens-reusability.md` because the execution tool failed to start; this response is the complete filing text.

BODY-WRITE: Replace the consumption census’s variable-assignment criterion with rendered-effect checks, and make typography, unit conversion, viewport fitting, and Unicode whitespace boundaries agree between validation and display.
SCORE: 64