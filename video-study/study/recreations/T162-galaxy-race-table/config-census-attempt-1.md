# config-census — T162 · Cycle 025 Wave 22 · attempt 1 (guard-config-census v3.1, Amendment A6 + A9.6)
Instrument: node census script over the final recreation.html — every CONFIG leaf key resolved to application sites in the code after the CONFIG block (occurrence counts below, from the harness run filed in build-record.md); value-flow read by the builder per the Cycle-021 addendum (a site counts only where the value constructs its named subject — generic property names shared across objects, e.g. `.colour`/`.x`/`.y`, are resolved per object class in the notes). Zero-site keys: none (script output: censusZeroSite []).

## Key -> application-site resolution
| CONFIG key | sites | value-flow note |
|---|---|---|
| stageW | 3 | viewBox + bg width + speck sampling range |
| stageH | 3 | viewBox + bg height + speck sampling range |
| renderScale | 1 | bubble font design size = fontPx / renderScale |
| cycleMs | 3 | frame cycle modulo |
| endHoldFromMs | 1 | stateAt `holding` flag (ms >= 10800) — the end-hold state |
| bg | 1 | background rect fill |
| fontFamily | 1 | bubble text font-family |
| enterMs | 1 | markerState enter progress divisor |
| easePow | 1 | easeOut exponent — the ENTER decelerate curve |
| disc.cx | 10 | plate/core/arm/speck/reflection centres |
| disc.cy | 8 | plate/core/arm/speck centres + mirror line |
| disc.rx | 7 | plate rx + arm radius span + speck ellipse test |
| disc.ry | 5 | plate ry + arm vertical squash + mirror line |
| disc.coreR | 5 | core circles + arm start radius + reflection core |
| disc.coreColour | 4 | core fill + glow + reflection core (swap target — harness-verified #57c7e8 takes effect) |
| disc.armColour | 2 | arm path stroke + reflection band |
| disc.plateColour | 2 | plate fill + reflection plate |
| disc.armCount | 2 | arm loop bound + per-arm phase |
| disc.armTurns | 1 | armPath angular sweep |
| disc.armCoeff | 1 | armPath radial reach coefficient |
| disc.armWidth | 1 | arm path stroke-width |
| disc.armOpacity | 1 | arm path opacity (BACKGROUND reserve vs foreground markers) |
| disc.armPoints | 2 | armPath vertex count |
| disc.plateStroke | 1 | plate ellipse stroke |
| disc.plateStrokeW | 1 | plate ellipse stroke-width |
| specks.count | 1 | speckField loop target (harness count 220) |
| specks.seed | 1 | speckField RNG seeding |
| specks.reserveIntensity | 2 | speck base opacity + twinkle base in frame (Owner Cure 1 reserve, ≤0.5) |
| specks.colour | 6 | speck circle fill (count includes generic `.colour` reads on markers/bubble; the specks-loop read is the value-flow site) |
| specks.rMin | 2 | speck radius range base |
| specks.rMax | 1 | speck radius range span |
| specks.twinkleAmp | 2 | speck twinkle amplitude in frame |
| specks.twinklePeriodMs | 1 | twinkle phase divisor in frame |
| pin.h | 5 | stem length + head centre + glyph centre |
| pin.headR | 2 | head circle r + glyph scale |
| pin.stemW | 1 | stem stroke-width |
| pin.glyphColour | 2 | glyph spec colour + bubble text fill (dark on the bubble's colour ground) |
| pin.glyphAccent | 1 | dome glyph inner dot fill |
| markers[] | 8 | stateAt + DOM build iteration |
| markers[].x | 12 | pin position, head/glyph centres, bubble host (per-object: markers reads) |
| markers[].y | 12 | pin position, head/glyph centres, bubble host |
| markers[].onsetMs | 3 | markerState visibility + enter progress |
| markers[].icon | 2 | glyphSpecs dispatch key |
| markers[].colour | 6 | stem + head fill (per-object: markers reads) |
| bubble.text | 2 | bubbleState text + DOM text content (the string exists only in CONFIG) |
| bubble.attachIndex | 3 | bubbleState + DOM host resolution |
| bubble.showMs | 2 | bubbleState fade-in start |
| bubble.hideMs | 3 | bubbleState fade-out start |
| bubble.fadeMs | 3 | bubbleState fade in/out divisors |
| bubble.fontPx | 1 | bubble text size (÷ renderScale to design px; 15 px effective at 360) |
| bubble.colour | 6 | bubble rect + tail fill (count includes generic `.colour` reads) |
| bubble.boxW | 2 | bubble rect width + centring |
| bubble.boxH | 5 | bubble rect height + tail geometry |
| bubble.boxRx | 1 | bubble rect corner radius |
| bubble.dx | 2 | bubble centre x offset from host marker |
| bubble.dy | 2 | bubble centre y offset from host marker |
| bubble.tailLen | 1 | bubble tail length |
| bubble.fontWeight | 1 | bubble text font-weight |
| reflection.gapPx | 1 | mirror line = disc bottom + gapPx |
| reflection.depth | 6 | reflection band centre + radii |
| reflection.opacity | 2 | reflection group opacity |

## Literal scan outside CONFIG
- Hex colours outside CONFIG: NONE (script output: hexOutsideCONFIG []). All subject colours (disc, arms, core, specks, markers, pin, bubble, background) read from CONFIG. Pre-cure note: an earlier draft carried a `#ffffff` dome-glyph accent literal in glyphSpecs; cured before the wave by moving it to CONFIG pin.glyphAccent — the census above is on the final build.
- Glyph geometry: icon glyphs are computed by glyphSpecs(icon, …) from CONFIG pin.headR with per-kind relative coefficients (fractions of headR: 0.62/0.38/0.5/0.78/0.66/0.85…) — these are the glyph functions' internal proportions, classified structural-relative: they scale WITH the CONFIG head radius and are selected by the table's icon key, never per-marker literals; changing headR rescales every glyph.
- Numeric literals outside CONFIG, classified: 0 / 1 / 2 — loop bounds, index arithmetic, unit identities, Math.PI×2 circle identity, toFixed precision — structural. The mulberry32 shift constants (0x6D2B79F5, 15, 7, 61, 14, 4294967296) — the seeded PRNG algorithm's constants (structural; the seed itself is CONFIG specks.seed). 0.22 / 1.7 — the core glow's opacity/radius presentation factors: the glow is a halo of the CONFIG core (its colour and base radius are disc.coreColour/disc.coreR); classified structural-presentation with reason printed — the glow carries no independent subject identity. 6 — bubble tail half-width in the tail path geometry, a fixed join detail of the CONFIG-sized bubble box; structural. -90/rotate identities: none present.
- Subject geometry: plate ellipse, spiral arm paths (armPath from disc coefficients), speck field (seeded, ellipse-tested), pins, glyphs, bubble, reflection are all computed FROM CONFIG — no literal scene markup exists.
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — check not applicable, no unset-variable references exist.

HITs: 0
