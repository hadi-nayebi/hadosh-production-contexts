# Codex return — lens: PURITY (T12 attempt 1, filed verbatim 2026-11-14)

Construction purity passes. The supplied source constructs the card, marker fills, avatar, and stamp with DOM text and CSS. It contains no embedded specimen, image/video asset, frame sequence, or traced artwork. The stamp uses configurable text and a CSS double border; the avatar uses a configurable initial inside a CSS circle.

The core technique is parameterized: highlight segmentation uses configured phrases, sweep timing derives from CONFIG, and marker/stamp colors and stamp wording read from CONFIG. No specimen wording is smuggled into animation logic. This supports the reported swap-test behavior, though I have not independently executed that test.

The claim that **every** content, timing, and palette value comes from CONFIG is overstated. Hardcoded values include the 150 ms stamp settle, 240 ms shake window, 22 ms oscillation divisor, avatar/badge/heart colors, and “Share” label. These are configuration gaps, not refusal defects.

BODY-WRITE: Move the remaining settle/shake timing constants, decorative colors, and interface labels into CONFIG, or narrow the build record’s “every value” claim to the parameters actually exposed; no construction-purity refusal defect was found.
SCORE: 94
