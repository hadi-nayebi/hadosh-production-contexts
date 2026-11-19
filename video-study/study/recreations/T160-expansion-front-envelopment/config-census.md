# config-census — T160 · Cycle 025 Wave 22 · attempt 1 (guard-config-census v3.1, Amendment A6 + A9.6)
Instrument: builder census over the final recreation.html — every CONFIG leaf key resolved to application sites in code after the CONFIG block; value-flow read per key (a site counts only where the value constructs its named subject). Zero-site keys: none.

## Key -> application-site resolution
| CONFIG key | sites | value-flow note |
|---|---|---|
| stageW | 6 | canvas geometry, right-front origin, star x range, front along-axis span |
| stageH | 5 | canvas geometry, bottom-front origin, star y range, front along-axis span |
| cycleMs | 1 | frame cycle modulo |
| endHoldFromMs | 1 | stateAt holding flag (9000–10000 hold) |
| palette.void | 2 | stage background fill + pin eye cut-out fill |
| stars.count | 2 | starField loop bound + harness count |
| stars.seed | 1 | starField RNG seeding |
| stars.reserveIntensity | 1 | star twinkle opacity base in frame (A9.1 reserve, ≤0.5) |
| stars.colour | 1 | star fill |
| stars.rMin | 1 | star radius base |
| stars.rMax | 1 | star radius span |
| stars.twinkleAmp | 1 | twinkle amplitude in frame |
| stars.twinklePeriodMs | 1 | twinkle phase divisor |
| planet.x | 4 | front end-centre derivation (both sides) + disc/ring/pin render x + stateAt |
| planet.y | 4 | top/bottom front end-centre + disc/ring render y + stateAt |
| planet.discR | 2 | disc arc radius + stateAt |
| planet.ringR | 3 | ring arc radius + pin tip offset + stateAt |
| planet.discColour | 1 | disc fill |
| planet.ringColour | 1 | ring stroke |
| planet.ringDash | 1 | setLineDash for the ring |
| planet.ringRotateMs | 1 | stateAt ringAngle (24000 ms rotation) |
| planet.ringW | 2 | ring stroke width + pin stem width |
| pin.h | 2 | pin head centre derivation + stateAt |
| pin.headR | 6 | head arc, stem base, eye offsets/radii derived from it, stateAt |
| pin.colour | 2 | pin stem stroke + head fill |
| pin.gapPx | 1 | pin tip offset above the ring |
| fronts[] | 3 | stateAt iteration + frame draw iteration |
| fronts[].side | 5 | frontState origin/end derivation + polygon construction branch |
| fronts[].colour | 2 | front fill + stateAt colour |
| fronts[].startMs | 1 | growth progress onset |
| fronts[].growMs | 1 | growth progress divisor |
| fronts[].points | 3 | wobble array length + frontier point loop |
| fronts[].wobbleAmp | 1 | seeded wobble amplitude in wobbles() |
| fronts[].seed | 1 | per-front RNG seeding in wobbles() |
| trappedGapPx | 3 | every front's end-centre derivation (planet ± gap/2) — the halt geometry |

## Literal scan outside CONFIG
- Hex colours outside CONFIG: ['#000'] — the page void outside the stage in CSS (structural, not a subject colour). All subject colours (void, stars, planet disc/ring, pin, both fronts) read from CONFIG.
- Numeric literals outside CONFIG, classified: 0 / 1 / 2 / 3 / 6 / 7 — indices, loop bounds, unit identities, mean-rounding precision (1000/1000 in the frontier mean rounding — a rounding identity, structural), pin eye fractions are derived from pin.headR (÷3, ÷6, ÷7 ratios applied to a CONFIG value, not independent sizes). Math.PI×2 — circle identity, structural. 720 / 405 in the canvas width/height attributes and CSS 56.25vw — the stage geometry markup carrying the same CONFIG stageW/stageH values (markup geometry, as in the T154 census form). 4294967296 + mulberry32 shift constants — the seeded PRNG algorithm's constants (structural; seeds are CONFIG).
- Subject geometry: frontier points are computed per point from growth progress × mean-normalized seeded wobble (frontState/wobbles); no literal blob paths, no scale/slide transform exists in the file.
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — not applicable, no unset-variable references exist.

HITs: 0
