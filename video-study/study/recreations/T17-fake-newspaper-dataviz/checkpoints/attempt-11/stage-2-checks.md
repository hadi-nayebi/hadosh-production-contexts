# Stage 2 checks — T17 attempt 11 (CP2, schema-derived validation)

Source: `stage-2-validation.html` sha256 6027f9214e8f14d05a2f6c3f1d9cb9f7d17e604b2ffb6cdac1b2506217b8caed (content copy, inode independent). Stage-1 suite re-run on this source: 17 passed, 0 failed (no regression).

## What landed
- The validator now carries a renderer-read schema: a per-type table of every field each builder, state function, and geometry function reads (derived from the Stage-0 field-read census), and a schema pass generated from that table checks presence and per-kind domains for every figure. A field a renderer reads that the schema does not govern is visible in the table itself; the census leg at Verify walks the same table.
- Timing-domain family: 38 timing keys carry domains derived from their consumers' arithmetic (fraction bounds for the draw/stack/bar ends, onset bounds, positive spans and durations, exponent positivity, ordering relations for the node thresholds and the stamp scale), enforced as named errors — the family, not another sibling list.
- Seed siblings inside the schema: an empty points array and an empty bars array are named errors (an empty array draws nothing); the counter label opacity gained its 0..1 domain.
- Validation-only keys disposition (chosen and filed HERE, before the motion stage opens): `timing.minTypeSec` and `timing.minFillSec` are reclassified honestly as validation bounds — each is enforced against a derived duration (the summary typing duration, the waffle fill duration) and neither is counted as consumed by rendering in the census. They remain in the schema's domain table as non-negative bounds.

## Probe evidence (stub level)
Valid configuration validates clean. Each of these now files a named error: empty points · empty bars · drawEnd 0 · drawEnd 1.5 · counterLabelOpacity 2 · nodeStart after nodeEnd · stampAt 1 · connectorDrawSpan 0 · cliffExponent −1 · donutFraction absent. The generative sweep at Verify extends this corpus mechanically; a green named-case corpus alone supports no class-closure claim.
