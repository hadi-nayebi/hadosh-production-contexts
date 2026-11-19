# fit-table — T186 Foreground pass, mid-coverage (guard-measured-fit, A6 pre-wave leg)

Method: guard-measured-fit prices every TEXT element carrying subject content. This build is text-free by construction (RUN §2: no text is the subject in any Wave-25 item; §2c.1e prices visible-word fitting INAPPLICABLE for all four items). The recreation contains NO text elements at all — no rendered text, no captions, no labels inside the scene (the data-only CONFIG key `accentLabel` is never rendered; it exists only as the swap harness's scene identifier). The text-fit class is therefore priced N/A with its reason, and the leg's remaining measurable surface — the pass geometry the technique itself is made of — is measured below with the build's own coverage evaluator (100×56 grid, post-blur alpha≥0.5 rule, harness output filed verbatim in build-record.md).

## Text elements
| element | container | measured ink bounds | container bounds | margin |
|---|---|---|---|---|
| (none — no subject text element exists in this build) | — | — | — | — |

- Text rows owed: 0. Legibility floor (~11 px at 360 px stage): no text to price — N/A, reason printed above, not silently omitted.

## Geometry measured (the technique's own fit: pass shape vs stage, node harness on the final build)
| measurement | value | bound | result |
|---|---|---|---|
| coverage(midMs=1020) | 0.5000 | coverageFraction 0.50 ± 0.07 | PASS |
| coverage(0) | 0.0000 | < 0.05 (street scene legible at t=0) | PASS |
| coverage(durationMs=2500) | 0.0000 | < 0.05 (scene legible again at end) | PASS |
| max coverage, 50 ms sample grid | 0.5000 at t=1000 | ≤ coverageFraction + 0.08 = 0.58 (no full-wipe overshoot) | PASS |
| covered mass right of centre at midMs | 1.0000 of covered mass | majority right (census frame: blur at right, street legible at left) | PASS |
| pass width | 400 px | == coverageFraction × stage width = 0.50 × 800 (CONFIG equality, §2d.3) | PASS |
| pass height | 1.12 × stage height (yFrac −0.06 → 1.06) | covers every grid row at mid-pass (full-height pass) | PASS |

**HIT list: EMPTY — leg PASS (advisory).** Text-fit priced N/A (text-free build, §2c.1e); geometry measured, not asserted.
