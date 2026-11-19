# fit-table — T184 Occlusion-framed cut landing (guard-measured-fit, A6 pre-wave leg)

Method: priced per guard-measured-fit.md on the final recreation.html (SHA-256 `4ff829ce715e306fa9495de0e92cf604afaed27df5ce6915c17c3ae1e6b921d8`).

## Subject text elements
**NONE.** This build renders NO text at all: no titles, labels, captions, counters, or in-scene words. The technique's subject is a cut landing (scene geometry + occlusion coverage), not typography — RUN §2: "no text is the subject in any item, so no text elements at all in the scenes"; §2c.1(e) prices visible-word fitting INAPPLICABLE for all four Wave-25 items (text-free by construction). `accentLabel` "guitarist" is a data-only CONFIG identifier consumed by the swap harness; it is never rendered (verified: the string occurs only in the CONFIG block and harness assertions — the scene builders never read it).

Text-free leg priced **N/A — no measurement rows are owed**, because there is no subject text element to measure. This is a priced N/A, not an omitted leg: the guard owns fit of subject text; the class is absent by construction.

## Geometry measured instead (the leg's spirit: measured, not asserted)
The fit-analogue quantities for this text-free build were MEASURED by the node harness (§2c.4 evaluator, 100×56 grid, cell covered if an occluder covers its centre, alpha≥0.5 edge rule) on the final build — raw output in build-record.md:

| quantity | measured | bound | result |
|---|---|---|---|
| coverage(cutMs+1), default | 0.6257 | ≥0.55 AND within ±0.01 of landingCoverage 0.62 | PASS |
| coverage(1900), default (post-drift) | 0.6261 | ≥0.51 | PASS |
| coverage(cutMs+1), swapped (landingCoverage 0.45) | 0.4582 | within ±0.07 of 0.45 | PASS |
| guitar visibility @ cutMs+1, default | 0.5833 | ≥0.10 (partly legible inside occlusion) | PASS |
| guitar visibility @ 1900, default | 0.4167 | ≥0.10 | PASS |
| guitar visibility @ 1900+revealMs, default | 1.0000 | ≥0.80 (subject legible) | PASS |

**HIT list: EMPTY — leg PASS (advisory); text-fit class N/A priced above.**
