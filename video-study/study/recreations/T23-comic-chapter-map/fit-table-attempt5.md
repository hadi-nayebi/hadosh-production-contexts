# T23 — measured-fit table (attempt 5, pre-scoring leg: guard-measured-fit)

Stage width 360px. Bounds are POST-FIT measurements from the build's own geometry functions (`labelPolicy` / `headerFitPx` / `computeLayout`) evaluated on the final source — the same functions the DOM refinement consumes; rendered-pixel measurement does not exist in this environment (PIXEL-UNVERIFIED), so rows are modelled measurements, printed as such, never as rendered evidence.

| element | container | ink height (px) | ink width (px) | container bounds (px) | margin on binding side | state |
|---|---|---|---|---|---|---|
| header | strip | 11.0 | 305.7 | 360 x 18.0 | 38.3 (width) | floor |
| tab 01 | panel tab | 33.3 | 55.4 | 98.7 x 60.8 | 29.3 (width), tab fraction 0.629 | two-line @ 13.31px |
| tab 02 | panel tab | 15.4 | 83.2 | 98.7 x 60.8 | 1.4 (width), tab fraction 0.335 | single @ 12.31px |
| tab 03 | panel tab | 16.6 | 83.1 | 98.7 x 60.8 | 1.6 (width), tab fraction 0.356 | single @ 13.31px |
| tab 04 | panel tab | 33.3 | 55.4 | 98.7 x 60.8 | 29.3 (width), tab fraction 0.629 | two-line @ 13.31px |
| tab 05 | panel tab | 33.3 | 62.3 | 98.7 x 60.8 | 22.4 (width), tab fraction 0.629 | two-line @ 13.31px |
| tab 06 | panel tab | 14.1 | 82.4 | 98.7 x 60.8 | 2.3 (width), tab fraction 0.315 | single @ 11.31px |
| tab 07 | panel tab | 30.8 | 83.2 | 98.7 x 60.8 | 1.4 (width), tab fraction 0.588 | two-line @ 12.31px |
| tab 08 | panel tab | 33.3 | 55.4 | 98.7 x 60.8 | 29.3 (width), tab fraction 0.629 | two-line @ 13.31px |
| tab 09 | panel tab | 33.3 | 55.4 | 98.7 x 60.8 | 29.3 (width), tab fraction 0.629 | two-line @ 13.31px |
| tab 10 | panel tab | 14.1 | 82.4 | 98.7 x 60.8 | 2.3 (width), tab fraction 0.315 | single @ 11.31px |
| tab 11 | panel tab | 33.3 | 76.2 | 98.7 x 60.8 | 8.5 (width), tab fraction 0.629 | two-line @ 13.31px |
| tab 12 | panel tab | 33.3 | 69.2 | 98.7 x 60.8 | 15.4 (width), tab fraction 0.629 | two-line @ 13.31px |
| ghost numeral | panel centre | 32.0 | 19.2 | 98.7 x 60.8 | n/a (centred, subordinate at 0.16 opacity) | numeral |
| inscription (ship) | miniature artwork | 5.6 | n/a | 98.7 x 60.8 | artwork detail | size 9 in viewBox units |
| inscription (paper) | miniature artwork | 13.0 | n/a | 98.7 x 60.8 | artwork detail | size 21 in viewBox units |
| inscription (slam) | miniature artwork | 14.8 | n/a | 98.7 x 60.8 | artwork detail | size 24 in viewBox units |

Hierarchy: tab ink (13.8px base, floor-clamped) vs ghost numeral (32.0px at 0.16 opacity) vs header (11.0px) — size + opacity both separate the layers; no hue-only hierarchy claim.

## HIT list (1)
- HIT: inscription in kind 'ship' renders at 5.6px ink height at 360px — artwork detail inside a miniature, not a subject label; priced as a HIT by the leg's letter, disposition: carried into the wave as artwork-scale text (the miniature is itself a picture of a scene; its internal signage is depiction, and the panel's subject text is its tab, measured above)
