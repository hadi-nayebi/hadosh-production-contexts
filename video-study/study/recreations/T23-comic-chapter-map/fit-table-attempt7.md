# T23 — measured-fit table (attempt 7, pre-scoring leg: guard-measured-fit)

Final source sha256: `73e864cde1dd57a5b85b89e8d99049744d9973f6abb92aba1ac010301a02fafb`

Stage width 360px. Bounds are POST-FIT measurements from the build's own geometry functions (`labelPolicy` / `headerFitPx` / `computeLayout` / `resolvedArtRect`) evaluated on the final source — the same functions the DOM layer consumes; rendered-pixel measurement does not exist in this environment (PIXEL-UNVERIFIED), so rows are modelled measurements, printed as such, never as rendered evidence. Attempt 7 layout: each panel is a reserved tab band over an art region; the tab estimator now includes the configured tab letter spacing, and panel 07's row below is that recomputed state, filed as computed.

| element | container | ink height (px) | ink width (px) | container bounds (px) | margin on binding side | state |
|---|---|---|---|---|---|---|
| header | strip | 11.0 | 314.2 | 360 x 18.0 | 29.8 (width) | floor |
| tab 01 | panel tab band | 38.3 | 71.5 | 98.7 x 60.8 (panel interior) | 27.2 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 02 | panel tab band | 19.8 | 96.9 | 98.7 x 60.8 (panel interior) | 1.7 (width), band fraction 0.325, art height 41.1 | single @ 11.81px |
| tab 03 | panel tab band | 21.0 | 97.0 | 98.7 x 60.8 (panel interior) | 1.6 (width), band fraction 0.346, art height 39.8 | single @ 12.81px |
| tab 04 | panel tab band | 38.3 | 71.5 | 98.7 x 60.8 (panel interior) | 27.2 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 05 | panel tab band | 38.3 | 78.7 | 98.7 x 60.8 (panel interior) | 20.0 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 06 | panel tab band | 18.8 | 97.2 | 98.7 x 60.8 (panel interior) | 1.5 (width), band fraction 0.308, art height 42.1 | single @ 11.00px |
| tab 07 | panel tab band | 34.5 | 96.9 | 98.7 x 60.8 (panel interior) | 1.7 (width), band fraction 0.568, art height 26.3 | two-line @ 11.81px |
| tab 08 | panel tab band | 38.3 | 71.5 | 98.7 x 60.8 (panel interior) | 27.2 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 09 | panel tab band | 38.3 | 71.5 | 98.7 x 60.8 (panel interior) | 27.2 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 10 | panel tab band | 18.8 | 97.2 | 98.7 x 60.8 (panel interior) | 1.5 (width), band fraction 0.308, art height 42.1 | single @ 11.00px |
| tab 11 | panel tab band | 38.3 | 93.1 | 98.7 x 60.8 (panel interior) | 5.6 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| tab 12 | panel tab band | 38.3 | 85.9 | 98.7 x 60.8 (panel interior) | 12.8 (width), band fraction 0.629, art height 22.5 | two-line @ 13.31px |
| ghost numeral | art region centre | 32.0 | n/a | 98.7 x art height (per panel) | n/a (centred, subordinate at 0.16 opacity) | numeral |
| inscription (ship) | miniature artwork (art region) | 3.6 | n/a | 98.7 x 39.8 | artwork detail | size 9 in viewBox units |
| inscription (paper) | miniature artwork (art region) | 5.5 | n/a | 98.7 x 26.3 | artwork detail | size 21 in viewBox units |
| inscription (slam) | miniature artwork (art region) | 10.1 | n/a | 98.7 x 42.1 | artwork detail | size 24 in viewBox units |

Hierarchy: tab ink (band, floor 11px) vs ghost numeral (32.0px at 0.16 opacity, inside the art region) vs header (11.0px) — size + opacity + spatial separation (band vs art region) separate the layers; no hue-only hierarchy claim.

Resolved-geometry states (attempt 7 leg requirement): art heights per width — 240px: 16.3–16.3 · 360px: 22.5–42.1 · 520px: 24.5–49.1 · 960px: 111.3–112.5.

## HIT list (3)
- HIT: inscription in kind 'ship' renders at 3.6px ink height at 360px — artwork detail inside a miniature, not a subject label; priced as a HIT by the leg's letter, disposition: carried into the wave as artwork-scale text (the miniature is itself a picture of a scene; its internal signage is depiction, and the panel's subject text is its tab, measured above).
- HIT: inscription in kind 'paper' renders at 5.5px ink height at 360px — artwork detail inside a miniature, not a subject label; priced as a HIT by the leg's letter, disposition: carried into the wave as artwork-scale text (the miniature is itself a picture of a scene; its internal signage is depiction, and the panel's subject text is its tab, measured above).
- HIT: inscription in kind 'slam' renders at 10.1px ink height at 360px — artwork detail inside a miniature, not a subject label; priced as a HIT by the leg's letter, disposition: carried into the wave as artwork-scale text (the miniature is itself a picture of a scene; its internal signage is depiction, and the panel's subject text is its tab, measured above).
