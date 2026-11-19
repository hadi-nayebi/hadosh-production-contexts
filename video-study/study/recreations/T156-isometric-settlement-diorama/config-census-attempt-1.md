# config-census — T156 · Cycle 025 Wave 22 · attempt 1 (guard-config-census v3.1, Amendment A6 + A9.6)
Instrument: node/python census over the final recreation.html — every CONFIG leaf key resolved to application sites in code after the CONFIG block; literal scan outside CONFIG.

## Key -> application-site resolution
| CONFIG key | sites | value-flow note |
|---|---|---|
| stageW | 2 | viewBox + bg width |
| stageH | 2 | viewBox + bg height |
| cycleMs | 3 | frame cycle modulo + state |
| enterMs | 1 | elementState enter progress divisor |
| easePow | 1 | easeOut exponent (enter + rocket) |
| bg | 1 | background rect fill |
| tile.originX / originY | 1+1 | gridToScreen |
| tile.tileW / tileH | 1+1 | gridToScreen |
| tile.cols / rows | 1+1 | tile corner polygon + grid-line bounds |
| palette.grass | 1 | tile polygon fill |
| palette.grassDark | 1 | grid lines (second set) |
| palette.grassEdge | 2 | tile stroke + grid lines (first set) |
| palette.hutWall | 1 | hut glyph wall (swap target, harness-verified #d94a90) |
| palette.hutRoof | 1 | hut glyph roof |
| palette.field / fieldRow / fieldLine | 1+1+1 | field glyph fill / row lines |
| palette.path | 1 | path glyph |
| palette.pen | 1 | pen glyph stroke |
| palette.tree | 1 | tree glyph canopy |
| palette.teepee / fire / fireCore | 1+1+1 | teepee + fire glyphs |
| palette.sheep / figure / trunk / rocketTip / rocketStroke / generic | 1 each | sheep/figure/trunk/rocket glyphs |
| palette.cloud | 1 | cloud ellipses |
| elements[] (21) | 3 | stateAt + DOM build iteration + sort |
| elements[].kind / gx / gy / onsetMs | 2+2+2+1 | glyph selection / gridToScreen / enter onset |
| rocket.padGx / padGy | 1+1 | rocketState pad via gridToScreen |
| rocket.riseStartMs / riseMs | 2+1 | rocketState rise progress |
| rocket.w / h | 1+1 | rocket body rect |
| rocket.flame / body | 1+1 | flame polygon + body fill (body is palette-adjacent CONFIG rocket.body) |
| rocket.travelPx | 1 | rocketState y travel |
| clouds[] (7) / clouds[].x,y,r | 1 / 1+1+1 | cloud ellipse cx/cy/rx+ry |
| cloudTravelPx | 1 | stateAt cloudOffsetY = eased × cloudTravelPx (0→130) |

Zero-site keys: none.

## Literal scan outside CONFIG
- Hex colours outside CONFIG: [] — 0 hits (all glyph/detail colours moved into palette: trunk, fieldLine, fireCore, rocketTip, rocketStroke, generic).
- Numeric literals outside CONFIG, classified: 0 / 1 / 2 / 0.5 / -0.5 — indices, unit identities, half-tile corner offsets (structural); Math.PI-free design (no circle identity needed beyond SVG elements); glyph local coordinates (-28..20 box in glyphPath) — glyph geometry is the parameterized glyph function's own local coordinate system, selected by CONFIG kind and coloured from CONFIG palette; classified structural-local with reason: changing the settlement requires CONFIG (kind/position/onset/palette), glyph proportions are the glyph definition itself, as in T154's blob geometry constants. 6.5-former literals cured to cols/rows+0.5.
- CSS-variable setter check: no CSS variables used; CONFIG consumed directly in JS — not applicable, no unset references.

HITs: 0
