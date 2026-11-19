# config-census — T132 · attempt 2 (guard-config-census v3.1 + mutation-based consumption)

## Key -> consumed effect (mutation-based; a bound-but-unconsumed key fails)
| CONFIG key | consumed effect (mutation evidence) |
|---|---|
| mode | selects the timeline branch + the mode contract validated at build; switching to countdown with its keys absent is rejected atomically (contract-missing errors recorded) |
| words | timeline entries: mutating entry 1 text changes displayed word 1; dwells derive all onsets |
| dwellScale | mutating 1 -> 2 scales every dwell including the transition entry; derived cycle 14040 -> 28080 |
| canvasW | drives the SVG viewBox, sky/ground widths and the fit validation width; mutating to 80 makes five words impossible at the minimum size and the configuration is rejected atomically |
| canvasH | drives the viewBox and the stage height ratio set at init (canvasH/canvasW) |
| fitPolicy | 'shrink' fits an over-wide word by reducing size toward the floor; mutating to 'none' returns the full size (no shrink) |
| minFontPx | the shrink floor and the legibility floor in fit validation; mutating 18 -> 30 makes a 100 px-stage fit of the longest word impossible instead of clipped |
| fitModel.* | glyph-class width factors consumed by the ink-width model; mutating the upper factor changes modelled ink width |
| scaleFrom / scaleTo | consumed in countdown mode only (numeral scale interpolation); INACTIVE in the active table mode — named here, not hidden |
| fontPx | base word size consumed at render (before fit) |
| fontWeight | consumed at render init (word weight) |
| numeralFontPx / numeralColor | consumed at render when the displayed entry is a numeral; INACTIVE for displayed content in the active table mode (no numeral entries) — named here, not hidden; numeralColor carries the same value as wordColor |
| wordColor | consumed at render for every word entry |
| anchorYFrac | consumed at render init: word top = anchorYFrac x 100% of stage height (displayed position) |
| fontFamily | consumed at render init |
| plate.sky / plate.far / plate.near | consumed at render init as sky fill / far ridge fill / near ridge + ground fill |
| plate.panPxPerSec | pan rate: mutating 18 -> 36 doubles the pan offset at 1 s (-18 -> -36) |
| plate.tilePx | the pan wrap period and tile repeat: mutating changes the generated plate path; the former separate wrap key is absent (asserted: no panWrapPx anywhere in the source) |
| plate.farTile / plate.nearTile | tile point sets consumed by the tiled path generator; mutating changes the generated path; each tile's closing point is generated from its opening height, so the repeat is periodic by construction |
| plate.sun.cx / cy / r | consumed at render init for the static sun element, which sits outside the panning group |
| plate.groundY / plate.groundH | consumed at render init for the ground band |

Deleted key assertion: `panWrapPx` — 0 occurrences in the final source.

## Literal scan outside CONFIG (per literal, classification printed)
- `#000` in CSS — page void outside the stage (structural; every stage colour reads from CONFIG).
- `100` x2 in engine — percent identity (anchor fraction -> %, canvas ratio -> vw) (structural unit identity).
- `1000` x1 — milliseconds-per-second identity in the pan derivation (structural).
- `60000` x1 — milliseconds-per-minute identity in the bands mode span derivation (structural).
- `3`, `2` x1 each — smoothstep polynomial coefficients in the optional scale-easing expression (structural mathematics).
- `9` x1 — character-class bound '0'..'9' in the ink-width model (structural).
- `0`, `1` — loop indices, zero offsets, and boolean-scale endpoints (structural arithmetic).
- No other numeric or colour literals outside CONFIG. No content-carrying literal (colour, geometry, dwell, position) is classified structural.

HITs: 0
