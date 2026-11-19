# S4 — Presentation literals → CONFIG + literal census · T02 attempt 3

Construction: the filed list moved into CONFIG, each with a consumed
effect asserted at full load — stage.aspectRatio + stage.maxWidthVh
(stage inline style), palette.outerBg (document + body background),
type.promptWeight / checkWeight / numeralWeight / captionWeight
(element font weights), type.numeralLineHeight +
type.numeralLetterSpacingEm (numeral inline style),
type.chevronOpacity (chevron inline opacity), type.labelSpacingFactor
(label margin computation), controls.buttonWeight +
controls.buttonLineHeight (button font shorthand), type.glyphAdvanceEm
+ type.checkAdvanceEm + type.rowGapEm (fit formula inputs). The
stylesheet no longer carries the aspect/width, background, weight,
line-height, or letter-spacing literals.

Own-check output (group S4 on the S4 source): **31 PASS, 0 FAIL** —
16 key-presence checks · filed values · 8 consumed-effect checks at
full load · 3 stylesheet-literal absences · fit formula reads the
CONFIG metrics (36-char need 249.15 px) · literal census: every numeric
literal outside CONFIG is in the build record's structural whitelist
{0, 1, 2, 3 = indices/bounds · 4 = decimal precision · 10 = speed range
bound · 100 = percent base}; color-literal census outside CONFIG: none.

Checkpoint: S4-source.html sha256 a20ef35113ad8635af8014ba86ee9ae1099532ac7f36d37ea9feabe73f1ebb8d.
Effect record: CONFIG-literal class — PASS per assertion above.
