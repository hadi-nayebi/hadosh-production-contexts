# config-census — T139 · Cycle 023 Wave 20 · attempt 1 (guard-config-census v3.1, Amendment A6 + Cycle-021 addenda)
Instrument: node census script over the final recreation.html — every CONFIG leaf key resolved to application sites in the code after the CONFIG block (counts below); value-flow read by the builder per the Cycle-021 addendum (a site counts only where the value constructs its named subject).

## Key -> application-site resolution
| CONFIG key | sites | value-flow note |
|---|---|---|
| fontPx | 1 | word.style.fontSize at init |
| fontWeight | 2 | CSS #word + word.style.fontWeight |
| wordColor | 1 | word.style.color at init |
| anchorYFrac | 1 | word.style.top at init |
| fontFamily | 2 | word.style.fontFamily (+ census grep) |
| cycleMs | 3 | frame cycle modulo |
| vehicleYFrac | 2 | vehicle group y in frame (side + rear branches) |
| plate.sky | 2 | sky rect fill |
| plate.far | 3 | far ridge fill + path build |
| plate.near | 4 | near ridge fill + ground fill + path build |
| plate.panPxPerSec | 1 | pan offset derivation in frame |
| plate.panTilePx | 3 | tile duplication offset + pan modulo |
| plate.stageW | 3 | viewBox geometry read in frame travel/centre maths |
| plate.stageH | 2 | vehicle y derivation |
| plate.groundY | 1 | ground rect y |
| plate.groundH | 1 | ground rect height |
| plate.farPoints | 2 | far path pts() at both tile offsets |
| plate.nearPoints | 2 | near path pts() at both tile offsets |
| vehicles.*.shape | 2 | buildVehicle branch selection |
| vehicles.*.color | 8 | body/cabin/jet path + rect fills in buildVehicle |
| vehicles.*.dir | 4 | travel direction + inner flip in frame |
| vehicles.*.bodyW | 5 | body rect width, cabin path, wheel cx, dust cx — constructs the silhouette |
| vehicles.*.bodyH | 3 | body rect height, cabin path, wheel cy — constructs the silhouette |
| vehicles.*.cabinFrac | 3 | cabin polygon points (side) + rear cabin width |
| vehicles.*.wheelR | 3 | wheel circles r + zero-wheel branch (jet) |
| vehicles.*.wheelColor | 4 | wheel fills |
| vehicles.*.scale | 5 | group transform scale + travel span |
| vehicles.*.risePx | 1 | frame y offset over cross progress (jet takeoff; 0 = level for the other vehicles, value still flows) |
| vehicles.*.dustColor | 1 | dust-trail ellipse fills |
| vehicles.*.dustOpacity | 1 | dust-trail ellipse opacity |
| vehicles.*.lightColor | 2 | rear light rects (sport-rear branch — the only shape carrying lights; shape-conditional application, printed not hidden) |
| vehicles.*.recedeTo | 1 | dir-0 scale interpolation in frame (NSX rear; 1 = no recession for crossing vehicles, value still flows) |
| events[] (array) | 2 | buildTimeline iteration |
| events[].kind | — | read in buildTimeline + stateAt dispatch (word/flash/gap) |
| events[].t | — | buildTimeline text for word events -> word slot |
| events[].vehicle | — | buildTimeline + frame vehicle lookup |
| events[].atMs | — | buildTimeline sort + stateAt window test |
| events[].dwellMs | — | stateAt window test |
| events[].crossMs | — | buildTimeline (defaults to dwellMs) + frame cross progress — independent of dwellMs per A-T139-2 |

Vehicle rows are per-vehicle identical in form (hrv · jazz · typer · jet · nsxFar · nsx); the census script resolved each of the 6 vehicle objects' 13 keys individually — all applied, none zero-site (full per-vehicle counts in the builder's census run, summarised here by key class).

## Literal scan outside CONFIG
- Hex colours outside CONFIG: ['#000'] — '#000' is the page void outside the stage (structural, not a subject colour; sky/plate/word/vehicle colours all read from CONFIG).
- Subject geometry: ridge point arrays, ground band, vehicle silhouette geometry (body/cabin/wheels/dust) all read from CONFIG plate.* / vehicles.* keys (Cycle-021 geometry-site addendum applied at build: silhouette path coordinates are computed FROM bodyW/bodyH/cabinFrac, never literals).
- Numeric literals in engine code: loop bounds, index arithmetic, unit identities (1000 ms-per-second in the pan derivation, 100 % in anchor top), path-fraction coefficients inside buildVehicle that position cabin/wheel/dust features RELATIVE to the CONFIG bodyW/bodyH (proportional construction ratios of the silhouette, classified subject-shaping-adjacent: they scale with the CONFIG geometry they subdivide; changing bodyW/bodyH rescales the whole vehicle — printed per v3.1 classification rule, not exempted silently).
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — check not applicable, no unset-variable references exist.

HITs: 0
