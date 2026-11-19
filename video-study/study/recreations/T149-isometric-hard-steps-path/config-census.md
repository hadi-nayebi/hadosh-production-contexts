# config-census — T149 · Cycle 024 Wave 21 · attempt 1 (guard-config-census v3.1, Amendment A6 + A9.6)
Instrument: node census over the final recreation.html — every CONFIG leaf key resolved to application sites in the code after the CONFIG block; value-flow read by the builder (a site counts only where the value constructs its named subject). Array members (path.tiles, flights[], path.highlightIdx) are resolved individually below.

## Key -> application-site resolution
| CONFIG key | sites | value-flow note |
|---|---|---|
| stageW | 2 | viewBox set from CONFIG at init + void rect width |
| stageH | 2 | viewBox set from CONFIG at init + void rect height |
| cycleMs | 1 | frame cycle modulo |
| voidBg | 1 | void rect fill |
| origin.x | 1 | tileCenter screen-x derivation |
| origin.y | 1 | tileCenter screen-y derivation |
| tile.sizePx.w | 3 | tileCenter x step (w/2) + diamond half-width + side polygons |
| tile.sizePx.h | 3 | tileCenter y step (h/2) + diamond half-height + climber base offset |
| tile.depthPx | 3 | side-face polygons + drop-trail start offset + dot interpolation |
| tile.flightHeightPx | 1 | tileCenter height offset per flight dh |
| tile.face | 1 | top-face fill (non-highlight branch) |
| tile.edge | 1 | top-face stroke (non-highlight branch) |
| tile.sideLeft | 1 | left side-face fill |
| tile.sideRight | 1 | right side-face fill |
| tile.highlight | 1 | top-face fill (highlight branch) |
| tile.highlightEdge | 1 | top-face stroke (highlight branch) |
| tile.dropTrail | 2 | drop-trail line stroke + falling dot fill |
| tile.dropTrailWidthPx | 1 | drop-trail line stroke-width |
| tile.strokePx | 1 | top-face stroke-width |
| tile.enterFromScale | 1 | ENTER scale-in start (scale = enterFromScale + (1−enterFromScale)×ease) |
| tile.trailOpacity | 1 | drop-trail line opacity |
| tile.dotOpacity | 1 | falling dot opacity |
| tile.dotPeriodMs | 1 | falling dot travel period in frame |
| tile.dropDotR | 1 | falling dot radius |
| tile.dropDotCount | 2 | dot creation loop + fall phase divisor |
| path.buildStartMs | 1 | buildTiles onset derivation |
| path.tileMs | 1 | buildTiles onset derivation |
| path.enterMs | 2 | buildTiles enterMs + stateAt built/entering test |
| path.highlightIdx | 1 | buildTiles highlight flag (indexOf) |
| path.tiles[] (array) | 2 | buildTiles iteration + countTiles |
| path.tiles[].c / .r | 2 | tileCenter via flight-offset absolute grid |
| path.tiles[].f | 2 | flights[] lookup in tileCenter + buildTiles record |
| path.tiles[].drop | 1 | buildTiles drop flag → trail construction branch |
| flights[] (array) | 1 | tileCenter lookup by tile.f |
| flights[].dc / .dr | 2 | absolute grid coordinates in tileCenter |
| flights[].dh | 1 | height offset in tileCenter |
| marker.tile | 2 | marker group anchor tile + stateAt markerVisible test |
| marker.ring | 1 | marker ring stroke |
| marker.core | 1 | marker core fill |
| marker.ringR | 2 | ring rx + ry (× marker.ringRyFrac) |
| marker.ringRyFrac | 1 | ring ry derivation |
| marker.ringTiltDeg | 1 | ring rotation angle |
| marker.ringStrokePx | 1 | ring stroke-width |
| marker.coreR | 1 | core circle r |
| marker.liftPx | 3 | ring cy + core cy + ring rotation centre |
| act2.startMs | 3 | stateAt act2/climber tests + frame climber opacity + inequality assertion |
| act2.climber.tile | 2 | climber anchor tile (index clamped to route) + stateAt climberTile |
| act2.climber.suit | 3 | body rect + helmet circle + leg rects fills |
| act2.climber.visor | 1 | visor ellipse fill |
| act2.climber.pack | 1 | backpack rect fill |
| act2.climber.bodyW | 5 | body/backpack/leg x derivations |
| act2.climber.bodyH | 4 | body/backpack/helmet y derivations |
| act2.climber.headR | 3 | helmet r + visor rx/ry (× visorRxFrac/visorRyFrac) |
| act2.climber.packW / packGapPx / packHFrac / packRx / packLiftPx | 5 | backpack rect x/y/width/height/rx derivations |
| act2.climber.bodyRx | 1 | body rect rx |
| act2.climber.headLiftPx | 2 | helmet + visor cy derivation |
| act2.climber.visorOffsetX / visorRxFrac / visorRyFrac | 3 | visor ellipse cx/rx/ry derivations |
| act2.climber.legW / legH / legLiftPx | 4 | leg rect x/y/width/height derivations |

Per-tile resolution: all 26 path.tiles members were resolved individually by the harness build (flights [8, 8, 10], drop idx [7, 15], highlight idx [0, 25]) — every member's c/r/f/drop flows into tileCenter/buildTiles; no member is inert. flights[] members: [0] {0,0,0} identity origin (value flows: it is the lookup result for flight-1 tiles) · [1] {−2,3,1} · [2] {−1,6,2} — all applied.

## Literal scan outside CONFIG
- Hex colours outside CONFIG: [] — every colour (void, tile faces/edges/sides, highlight, trail, marker, climber) reads from CONFIG; the page background #000 in CSS is the structural page void outside the stage, not a subject colour.
- Subject geometry: NO literal screen coordinates for tiles — every tile centre is computed in tileCenter() from path.tiles + flights[] + tile.sizePx + origin; marker and climber anchor to computed tile centres. Drop-trail endpoints are the computed centres of the drop tile and its successor.
- Numeric literals in engine code: index arithmetic, unit identities, and coordinate halves in tileCenter/interpolation only. (Interim-wave cure: the marker/climber proportional ratios, the ENTER scale-in start, and the dot-fall period that the interim reusability lens priced as literals are now CONFIG keys — marker.ringRyFrac · climber visor/pack/leg keys · tile.enterFromScale · tile.dotPeriodMs — resolved in the table above.)
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — check not applicable, no unset-variable references exist.

HITs: 0
