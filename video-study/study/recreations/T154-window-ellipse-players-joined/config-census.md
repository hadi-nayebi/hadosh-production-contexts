# config-census — T154 · Cycle 024 Wave 21 · attempt 1 (guard-config-census v3.1, Amendment A6 + A9.6)
Instrument: node census script over the final recreation.html — every CONFIG leaf key resolved to application sites in the code after the CONFIG block (occurrence counts below); value-flow read by the builder per the Cycle-021 addendum (a site counts only where the value constructs its named subject — generic property names shared across objects, e.g. `.x`/`.r`, are resolved per object class in the notes). Zero-site keys: none (script output: zeroSite []).

## Key -> application-site resolution
| CONFIG key | sites | value-flow note |
|---|---|---|
| stageW | 1 | star placement x range in init (viewBox carries the same 720 as markup geometry) |
| stageH | 1 | star placement y range in init |
| cycleMs | 3 | frame cycle modulo |
| endHoldFromMs | 1 | stateAt `holding` flag (ms >= endHoldFromMs) — the end-hold state the cycle holds from 19000 |
| bg | 1 | background rect fill |
| fontFamily | 4 | axis label + entrant labels + feed style font-family |
| starSeed | 1 | star RNG seeding in init |
| starCount | 1 | star creation loop bound |
| starColor | 1 | star circle fill |
| starRMin | 2 | star radius range base |
| starRMax | 1 | star radius range span |
| twinkleAmp | 2 | star opacity twinkle amplitude in frame |
| starOpacity | 2 | star circle opacity at creation + twinkle base in frame |
| twinklePeriodMs | 1 | twinkle phase divisor in frame |
| window.cx | 2 | ellipse cx + baseYAt centre |
| window.cy | 9 | ellipse cy, axis endpoints, baseYAt, label rotation centre |
| window.rx | 3 | ellipse rx + baseYAt + coverage ellipse area |
| window.ry | 5 | ellipse ry, axis endpoints, baseYAt |
| window.stroke | 2 | ellipse stroke (swap target — harness-verified #d42a7f takes effect) |
| window.strokeW | 1 | ellipse stroke-width |
| window.fill | 2 | ellipse fill |
| window.fillOpacity | 1 | ellipse fill-opacity |
| axis.x | 9 | axis line x1/x2, label x + rotation (per-object resolution: axis reads) |
| axis.label | 10 | axis text content (the "Time" string exists only in CONFIG) |
| axis.colour | 5 | axis line stroke + label fill |
| axis.fontPx | 2 | axis label font-size |
| axis.fontWeight | 3 | axis label font-weight |
| axis.lineW | 1 | axis line stroke-width |
| axis.labelDy | 2 | axis label y offset |
| axis.labelDx | 3 | axis label x offset + rotation centre |
| seeds[] | 6 | seed-dot creation loop |
| seeds[].x | 9 | seed circle cx (per-object: seeds loop) |
| seeds[].y | 1 | seed circle cy |
| seeds[].color | 3 | seed circle fill |
| seeds[].r | 22 | seed circle r (count includes generic `.r` reads on other objects; the seeds-loop read is the value-flow site) |
| riseMs | 2 | entrantState rise progress + swell start (joinMs + riseMs) |
| easePow | 1 | easeOut exponent — the rise/swell easing curve |
| labelFontWeight | 1 | entrant label font-weight |
| territory.growMs | 1 | entrantState swell progress divisor (swap target 2500→1200, harness-verified) |
| territory.swellScale | 1 | territory disc end radius = topR × swellScale |
| territory.blobPoints | 1 | blobPath vertex count |
| territory.blobWobble | 1 | blobPath per-vertex radius wobble amplitude |
| territory.capFrac | 1 | pre-swell cap radius = topR × capFrac |
| territory.centreFrac | 3 | territory centre migration down the column during swell (stateAt discY + render disc centre + end-radius floor) |
| territory.wideFrac | 2 | territory horizontal stretch (blobPath x-radius + occupancy test) |
| renderScale | 5 | feed CSS sizing scale (right/bottom/font/line-height/width from design px) |
| occupancyGrid | 1 | stateAt grid-sampled occupancy resolution |
| entrants[] | 7 | stateAt + DOM build iteration |
| entrants[].label | 10 | entrant label text content ("Humans" exists only in CONFIG; empty labels build no text node) |
| entrants[].joinMs | 3 | entrantState phase onsets |
| entrants[].colour | 5 | column rect fill + territory path fill + label fill |
| entrants[].x | 9 | column x, territory centre, baseYAt |
| entrants[].colW | 2 | column rect x/width |
| entrants[].topR | 2 | cap + swell radius derivation |
| entrants[].colTopY | 1 | entrantState topY → column rise target + territory centre |
| entrants[].seed | 6 | blobPath per-entrant RNG seed |
| entrants[].labelDx | 3 | label x offset |
| entrants[].labelDy | 2 | label y offset |
| entrants[].labelFontPx | 1 | label font-size |
| feedEvents[] | 4 | feedState iteration |
| feedEvents[].atMs | 2 | feedState visibility test |
| feedEvents[].kind | 2 | feedText generation (kind is data; the line text is generated, never literal) |
| feedEvents[].n | 4 | feedText player number |
| feed.rightPx | 1 | feed container right offset (÷2 = 720→360 stage scale) |
| feed.bottomPx | 1 | feed container bottom offset (÷2 scale) |
| feed.maxLines | 2 | feedState slice to the last maxLines events |
| feed.fontPx | 2 | feed font size (÷2 scale → 13 px at the 360-scaled stage, the RUN §2b value) |
| feed.lineH | 2 | feed line height (÷2 scale) |
| feed.dimStep | 1 | feedState per-line opacity dimming |
| feed.color | 3 | feed text colour |
| feed.fontWeight | 3 | feed font weight |
| feed.boxW | 1 | feed container width (÷2 scale) |

## Literal scan outside CONFIG
- Hex colours outside CONFIG: ['#000', '#feed'] — '#000' is the page void outside the stage (structural, not a subject colour); '#feed' is the CSS id selector for the feed container, not a colour. All subject colours (ellipse, axis, seeds, entrants, stars, background, feed) read from CONFIG.
- Feed line literals in logic: NONE (census grep for literal joined/left line strings: []). Feed text is generated by feedText(ev) = "Player " + ev.n + " " + ev.kind — the two fragments are the generation template; every line's content (player number + kind) comes from the feedEvents CONFIG table, and the swap test proves the feed follows a swapped table.
- Numeric literals outside CONFIG, classified: 0 / 1 / 2 — loop bounds, index arithmetic, unit identities, the 720→360 stage-scale divisor (÷2 on feed CSS), Math.PI×2 circle identity, toFixed precision (3) — structural. 7 / 14 / 15 / 61 / 4294967296 and the mulberry32 shift constants — the seeded PRNG algorithm's constants (structural; the seeds themselves are CONFIG: starSeed + entrants[].seed). 90 — the axis label's right-angle rotation identity (rotate(-90)), structural. 2000 — the SVG namespace URI string ("http://www.w3.org/2000/svg"), structural. 0.5 — the centred-uniform centre in blobPath's wobble distribution (the amplitude it scales is CONFIG territory.blobWobble), structural identity printed per v3.1.
- Subject geometry: ellipse, axis, seed dots, columns, territory blob paths are all computed FROM CONFIG (window.* / axis.* / seeds[] / entrants[] / territory.*); blob vertex angles derive from blobPoints, radii from topR × capFrac/swellScale with per-entrant seed wobble — no literal territory paths exist.
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — check not applicable, no unset-variable references exist.

HITs: 0
