# config-census — T145 · Cycle 024 Wave 21 · attempt 1 (guard-config-census, Amendment A6 + A9.6)
Instrument: node census script over the final recreation.html — every CONFIG leaf key resolved to application sites in the code after the CONFIG block; value-flow read by the builder (a site counts only where the value constructs its named subject). Per-entry planet fields (x/y/r/hue) share leaf names across the 5 table entries and resolve through the single planets[] loop (p.x / p.y / p.r / p.hue) — grouped below, per the T139 census form.

## Key -> application-site resolution
| CONFIG key | sites | value-flow note |
|---|---|---|
| stageW | 8 | field generation bounds, canvas translate/scale centre, planet/observer placement |
| stageH | 8 | same, vertical |
| cycleMs | 3 | stateAt cycle modulo + hold boundary |
| cascadeMs | 2 | scaleAt settle window end |
| holdMs | 1 | stateAt hold flag (t ≥ cycleMs − holdMs) |
| void | 3 | stateAt void passthrough → canvas background fill |
| seed | 3 | buildField RNG construction (nodes + end stars) |
| twinkleAmp | 2 | stateAt node + end-star twinkle factors |
| twinkleRate | 2 | stateAt twinkle phase advance, both star classes |
| stageAEndMs | 1 | dissolve start derivation (stageAEndMs − dissolveMs) |
| stageBEndMs | 4 | scaleAt A+B span + settle start |
| dissolveMs | 4 | web out / planets in / planets out windows |
| scaleABFrom | 2 | scaleAt A+B start |
| scaleABTo | 3 | scaleAt A+B end + settle start |
| scaleEndTo | 2 | scaleAt settle end + hold value |
| web.nodeCount | 2 | buildField node generation loop bound |
| web.linkDistPx | 1 | buildField link pair test |
| web.linkColor | 1 | canvas link stroke |
| web.nodeColor | 1 | canvas node fill |
| web.nodeRMin | 2 | node radius generation |
| web.nodeRMax | 1 | node radius generation |
| web.linkWidth | 1 | canvas link line width |
| web.linkAlpha | 1 | canvas link alpha |
| planets[] (array) | 9 | buildField/stateAt count + draw loop |
| planets[].x / .y | loop | planet centre placement (p.x × stageW, p.y × stageH) in draw |
| planets[].r | loop | planet disc radius + highlight geometry in draw |
| planets[].hue | 1 per entry | planet disc fill in draw |
| planet.highlightFrac | 3 | highlight disc offset + radius |
| planet.highlightAlpha | 1 | highlight alpha |
| planet.highlightColor | 1 | highlight fill |
| observer.x / .y | loop | observer anchor placement in drawObserver |
| observer.scale | 19 (leaf-name count incl. ctx.scale calls) | drawObserver group scale |
| observer.startMs | 3 | planets-out start + observer fade start |
| observer.fadeEndMs | 1 | observer fade window end |
| observer.robeColor | 1 | robe fill |
| observer.skinColor | 1 | head fill |
| observer.scopeColor | 2 | tripod stroke + tube fill |
| observer.rockColor | 1 | rock fill |
| observer.birdColor | 1 | bird fill |
| observer.robeW | 7 | robe path + telescope anchor geometry |
| observer.robeH | 4 | robe path + head/telescope heights |
| observer.headR | 4 | head + bird radii |
| observer.scopeLen | 2 | telescope tube rect |
| observer.scopeTubeR | 3 | tripod line width + tube height |
| observer.scopeAng | 1 | telescope tube rotation |
| observer.legLen | 5 | tripod legs + tube pivot height |
| observer.rockW | 5 | rock path width |
| observer.rockH | 6 | rock path + tripod foot + bird perch heights |
| observer.birdScale | 2 | bird group scale |
| endStars.count | 1 | buildField end-star generation loop bound |
| endStars.color | 1 | canvas end-star fill |
| endStars.rMin | 2 | end-star radius generation |
| endStars.rMax | 1 | end-star radius generation |
| endStars.baseAlpha | 1 | end-star alpha in draw |

Unapplied keys: [] (first census run found holdMs + observer.darkColor unapplied; cured before the wave — holdMs now flows into stateAt's hold flag, darkColor removed from CONFIG — and the census re-run on the final build prints [].)

## Literal scan (code after the CONFIG block)
- Hex colour literals outside CONFIG: [] — every colour in the build is a CONFIG value. HITs: 0.
- Numeric literals outside CONFIG: 0 · 1 (clamp bounds, alpha resets, loop starts — structural) · 2 · 3 · 4 · 6 (unit-fraction divisors applied to CONFIG geometry in drawObserver, the easeOutCubic exponent 3, Math.PI × 2 — structural arithmetic on CONFIG values, not subject values) · 1664525 · 1013904223 · 4294967296 (the seeded LCG's algorithm constants — structural; the seed itself is CONFIG `seed` 14521). Subject-shaping literals outside CONFIG: none. HITs: 0.

HITs: 0
