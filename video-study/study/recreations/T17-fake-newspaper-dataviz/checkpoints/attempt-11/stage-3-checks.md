# Stage 3 checks — T17 attempt 11 (CP3, single-source generation)

Source: `stage-3-singlesource.html` sha256 7fe79b8cb4a76d891a9a05a6e5044e686cf4d15ded3599855055211ca6de33a8 (content copy, inode independent). Stage-1 suite re-run on the generated source: 17 passed, 0 failed — including the final write-set == restore-set check, re-run explicitly here after generation (a write set derived before generation would be stale).

## What landed
- One emission table emits every stage variable: a single function derives all 44 stylesheet-facing variables from the one configuration key set (palette, fonts, layout constants, and the computed layout), and both presentation paths — scene construction and stage presentation — apply that emission and nothing else. The commit copy list and the rollback restore set are both derived from the same emission, so a variable cannot exist on one side only.
- Regeneration equality: the mounted stage's variable values equal the emission's values for the mounted configuration, asserted on the mounted stage itself (44/44).
- The priced pair is single-owned: the line-chart builder now places the y-axis labels from the same key the fit model reads. No literal y-label offset remains in the builder.

## Pair probe (isolated effect)
Mutating the gap key 6 → 16 moves the mounted axis from x 61 to x 71 and holds the label-to-axis distance at exactly the key value on both sides (6 at the default, 16 under mutation); the modelled extent and the mounted label agree at both settings. One priced subtlety, printed rather than smoothed: the axis pad absorbs the gap, so the label's absolute right edge is invariant — the governed quantity is the label-to-axis distance, and that is what the probe asserts.

## Literal state after generation
The stylesheet's interface-chrome literals (controls, warning border/padding, dot radius) stand outside the subject key set and are classified per-literal in the pre-scoring census leg, which scans this emitted source. No hand edits were made to emitted regions after generation; the stage candidate is the generated output.
