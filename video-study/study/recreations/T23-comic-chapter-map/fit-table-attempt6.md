# T23 — measured-fit table (attempt 6, pre-scoring leg: guard-measured-fit)

Final source sha256: `3b6010fc2edd216ddef04551e3bce0bd613f88cda245bb124ed06c9c556bac53`

Stage width 360px. Bounds are POST-FIT measurements from the build's own geometry functions (`labelPolicy` / `headerFitPx` / `computeLayout` / `artRectFor`) evaluated on the final source — the same functions the DOM layer consumes; rendered-pixel measurement does not exist in this environment (PIXEL-UNVERIFIED), so rows are modelled measurements, printed as such, never as rendered evidence. Attempt 6 layout: each panel is a reserved tab band over an art region; the tab no longer overlays the miniature.

| element | container | ink height (px) | ink width (px) | container bounds (px) | margin on binding side | state |
|---|---|---|---|---|---|---|
| header | strip | 11.0 | 314.2 | 360 x 18.0 | 13.8 (width) | floor |
| tab 01 | panel tab band | 38.3 | 69.4 | 98.7 x 60.8 (panel interior) | 29.3 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 02 | panel tab band | 20.4 | 97.2 | 98.7 x 60.8 (panel interior) | 1.4 (width), band fraction 0.335, art height 40.4 | single @ 12.31px |
| tab 03 | panel tab band | 21.6 | 97.1 | 98.7 x 60.8 (panel interior) | 1.6 (width), band fraction 0.356, art height 39.2 | single @ 13.31px |
| tab 04 | panel tab band | 38.3 | 69.4 | 98.7 x 60.8 (panel interior) | 29.3 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 05 | panel tab band | 38.3 | 76.3 | 98.7 x 60.8 (panel interior) | 22.4 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 06 | panel tab band | 19.1 | 96.4 | 98.7 x 60.8 (panel interior) | 2.3 (width), band fraction 0.315, art height 41.7 | single @ 11.31px |
| tab 07 | panel tab band | 35.8 | 97.2 | 98.7 x 60.8 (panel interior) | 1.4 (width), band fraction 0.588, art height 25.0 | two-line @ 12.31px |
| tab 08 | panel tab band | 38.3 | 69.4 | 98.7 x 60.8 (panel interior) | 29.3 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 09 | panel tab band | 38.3 | 69.4 | 98.7 x 60.8 (panel interior) | 29.3 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 10 | panel tab band | 19.1 | 96.4 | 98.7 x 60.8 (panel interior) | 2.3 (width), band fraction 0.315, art height 41.7 | single @ 11.31px |
| tab 11 | panel tab band | 38.3 | 90.2 | 98.7 x 60.8 (panel interior) | 8.5 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 12 | panel tab band | 38.3 | 83.2 | 98.7 x 60.8 (panel interior) | 15.4 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| ghost numeral | art region centre | 32.0 | n/a | 98.7 x art height (per panel) | n/a (centred, subordinate at 0.16 opacity) | numeral |
| inscription (ship) | miniature artwork (art region) | 3.5 | n/a | 98.7 x 39.2 | artwork detail | size 9 in viewBox units |
| inscription (paper) | miniature artwork (art region) | 5.3 | n/a | 98.7 x 25.0 | artwork detail | size 21 in viewBox units |
| inscription (slam) | miniature artwork (art region) | 10.0 | n/a | 98.7 x 41.7 | artwork detail | size 24 in viewBox units |

Hierarchy: tab ink (band, floor 11px) vs ghost numeral (32.0px at 0.16 opacity, inside the art region) vs header (11.0px) — size + opacity + spatial separation (band vs art region) separate the layers; no hue-only hierarchy claim.

## HIT list (3)
- HIT: inscription in kind 'ship' renders at 3.5px ink height at 360px — artwork detail inside a miniature, not a subject label; priced as a HIT by the leg's letter, disposition: carried into the wave as artwork-scale text (the miniature is itself a picture of a scene; its internal signage is depiction, and the panel's subject text is its tab, measured above). Attempt 6 note: the reserved band shrank the art region, so this ink height is smaller than attempt 5's — the compression is measured in the build record, not hidden.
- HIT: inscription in kind 'paper' renders at 5.3px ink height at 360px — artwork detail inside a miniature, not a subject label; priced as a HIT by the leg's letter, disposition: carried into the wave as artwork-scale text (the miniature is itself a picture of a scene; its internal signage is depiction, and the panel's subject text is its tab, measured above). Attempt 6 note: the reserved band shrank the art region, so this ink height is smaller than attempt 5's — the compression is measured in the build record, not hidden.
- HIT: inscription in kind 'slam' renders at 10.0px ink height at 360px — artwork detail inside a miniature, not a subject label; priced as a HIT by the leg's letter, disposition: carried into the wave as artwork-scale text (the miniature is itself a picture of a scene; its internal signage is depiction, and the panel's subject text is its tab, measured above). Attempt 6 note: the reserved band shrank the art region, so this ink height is smaller than attempt 5's — the compression is measured in the build record, not hidden.
