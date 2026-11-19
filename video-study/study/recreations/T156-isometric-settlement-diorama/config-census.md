# config-census — T156 · Cycle 019 Wave 18 · attempt 2 (guard-config-census v3.1, practice Amendment A-C008)
Instrument: node mutation census over the final attempt-2 recreation.html (sha 7a82f7851e38a36b6821e601f1ed76953c5eaaeb5000b0e265e14cf9e0ff8d61) — every CONFIG leaf mutated in turn; a leaf counts CONSUMED when the mutation changes the observable surface (stateAt probes · glyph markup · modelled DOM construction: viewBox/bg · frame cycle · tile polygon/grid lines · rocket draw geometry · cloud ellipses per layer). 73 leaf rows + 10 array-member probes = 83 rows, ALL consumed. Zero-site / no-effect keys: NONE.

## Key -> consumed-effect resolution (grouped; full 83-row mutation output in the attempt-2 build record's census summary)
| CONFIG key(s) | consumed effect |
|---|---|
| stageW / stageH | viewBox + bg rect dimensions (DOM model) |
| cycleMs | frame cycle modulo (DOM model) |
| enterMs | elementState enter progress divisor; derived fillComplete threshold |
| easePow | cfg-passed easeOut(p, cfg) exponent for element enters |
| bg | background rect fill |
| tile.originX / originY / tileW / tileH | gridToScreen for every position |
| tile.cols / rows | tile polygon corners + the two independent grid loops' bounds and cross-derived endpoints (rectangular 4×7 swap probe PASS) |
| palette.* (24 keys) | glyph fills/strokes, tile polygon + grid lines, cloud ellipses, rocket tip/stroke — each mutation changes its markup/model string |
| elements[] kind/gx/gy/onsetMs (21) | glyph selection / gridToScreen / enter onset / stateAt rows |
| elements[].dx / dy (sheep 4,4) | elementState displayed position offset (separation 12.00 px from pen centre) |
| rocket.padGx / padGy | rocketState pad via gridToScreen |
| rocket.riseStartMs / riseMs | rise progress; derived holding threshold |
| rocket.w / h | body rect + derived tip/flame geometry |
| rocket.flame / body | flame polygon + body rect fills |
| rocket.travelPx (195) | rocketState y travel (derived: padY 141 + extent 42 + margin 12) |
| rocket.easePow (1) | rocket rise easing via cfg view in rocketState — decoupled from element easePow (swap probes PASS both directions) |
| rocket.tipHRatio / flameLenRatio / flameWRatio | derived tip height / flame length / flame half-width in drawRocket |
| clouds[] x/y/r (9) | cloud ellipse cx/cy/rx/ry per layer group |
| clouds[].layer | drawClouds group membership (front/back) — rocket renders between the layers |
| cloudTravelPx | stateAt cloudOffsetY = riseP × cloudTravelPx (raw rise progress) |
| cloudRyRatio / cloudOpacity | cloud ellipse ry ratio / group opacity |
| glyphScale.* (8 keys) | sheep/figure/fire glyph geometry in glyphPath |
| fieldRows.y1/y2/x1/x2/strokeW | field glyph row line positions + stroke width |

## Changes vs attempt-1 census
- NEW keys, all consumed: rocket.easePow · rocket.tipHRatio · rocket.flameLenRatio · rocket.flameWRatio · clouds[].layer · cloudRyRatio · cloudOpacity · glyphScale.* · fieldRows.* · elements[].dx/dy.
- REMOVED key: palette.fieldLine — attempt 2's field rows both draw from palette.fieldRow; the first mutation census caught fieldLine bound-but-unconsumed (a genuine HIT at build time) and the key was removed before scoring rather than carried as a dead key. HIT cured in-cycle; filed here as the leg's one catch.
- easeOut now takes the supplied cfg (no global CONFIG read inside any state function — asserted).

## Literal scan outside CONFIG
- Hex colours outside CONFIG: [] — 0 hits.
- Numeric literals outside CONFIG, classified per-literal (A-C008-3 + A-C009-4 — no technique-content literal is classified structural):
  - 0 / 1 / 2 / 0.5 / −0.5 — indices, unit identities, half-tile corner offsets (structural).
  - 2000 — fragment of the SVG namespace URI "http://www.w3.org/2000/svg" (structural, named in the plan's whitelist).
  - 0.01 — element scale floor in the frame loop (structural rendering guard).
  - Glyph local coordinates in glyphPath (tree/teepee/hut/path/pen shape numbers in the −20..20 × −30..0 local box) — reusable glyph shape definitions, printed as such per the attempt-1 precedent; every SIZE the readability surface prices (sheep/figure/fire) is carried by CONFIG glyphScale, and field-row geometry by CONFIG fieldRows — the remaining local numbers are fixed shape proportions of the glyph definitions themselves.
  - 0.68 / 0.32 — flame growth profile coefficients in drawRocket's derived flame length (local shape constants of the flame profile; the length scale itself is CONFIG flameLenRatio).
  - 0.7 — grid-line stroke width · 3 — tile polygon stroke width · 7 — rocket body corner radius rx: DOM construction styling constants for the frame/body, uniform across any settlement driven from CONFIG (structural).
- CSS-variable setter check: no CSS variables used; CONFIG consumed directly in JS — not applicable, no unset references.

HITs: 0 (one build-time catch — palette.fieldLine bound-but-unconsumed — cured in-cycle by removing the key, recorded above)
