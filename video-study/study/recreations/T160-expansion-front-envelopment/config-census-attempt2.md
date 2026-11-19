# config-census — T160 · attempt 2 · Practice Cycle 025 Wave 24 (guard-config-census v3.1, A-C008 leg against attempt 2's OWN CONFIG)
Source: recreation.html sha256 e6676f689794bb4c2dd4661354efa9e774e0aab39e42aff78ab58a224ee766fd
Instrument: builder census over the final recreation.html — every CONFIG leaf key resolved to application sites in the code after the CONFIG block (programmatic reference count cross-checked against value-flow reading; a site counts only where the value constructs its named subject). Zero-site keys: none (38/38 keys consumed; the programmatic count's ZERO list is empty).

## Key -> application-site resolution
| CONFIG key | sites | value-flow note |
|---|---|---|
| stageW | 10 | right-front origin, star x range, front along-axis span, canvas backing width at init, stage aspect at init, frame clear width |
| stageH | 10 | bottom-front origin, star y range, front along-axis span, canvas backing height at init, stage aspect at init, frame clear height |
| cycleMs | 3 | frame cycle modulo (both signs) |
| endHoldFromMs | 3 | stateAt holding flag + frontier-progress hold clamp (two references in the clamp expression) — the key now CONTROLS progress, not only labels state |
| palette.void | 2 | stage background fill + pin eye cut-out fill |
| stars.count | 1 | starField loop bound (harness count 200 verified) |
| stars.seed | 1 | starField RNG seeding |
| stars.reserveIntensity | 1 | star twinkle opacity base in frame (≤0.5) |
| stars.colour | 1 | star fill |
| stars.rMin | 2 | star radius base (radius expression references it twice via the span form) |
| stars.rMax | 1 | star radius span |
| stars.twinkleAmp | 2 | twinkle amplitude in frame (base + swing terms) |
| stars.twinklePeriodMs | 1 | twinkle phase divisor |
| planet.x | 6 | front end-centre derivation (both sides) + ring-clearance clamp bounds + disc/ring/pin render x + stateAt |
| planet.y | 6 | top/bottom front end-centre + clearance span bounds + disc/ring render y + stateAt |
| planet.discR | 2 | disc arc radius + stateAt |
| planet.ringR | 8 | ring arc radius + pin tip offset + stateAt + clearance span/clamp geometry (ring outer edge = ringR + ringW/2) |
| planet.discColour | 1 | disc fill |
| planet.ringColour | 1 | ring stroke |
| planet.ringDash | 1 | setLineDash for the ring |
| planet.ringRotateMs | 1 | stateAt ringAngle (24000 ms rotation) |
| planet.ringW | 6 | ring stroke width + pin stem width + clearance geometry (outer radius + span bounds + clamp bounds) |
| pin.h | 2 | pin head centre derivation + stateAt (raw substring count is inflated by pin.headR; value-flow sites are these) |
| pin.headR | 6+ | head arc, stem base, eye offsets/radii derived from it, stateAt |
| pin.colour | 2 | pin stem stroke + head fill |
| pin.gapPx | 1 | pin tip offset above the ring |
| fronts[] | 3 | stateAt iteration + frame draw iteration + frontState calls |
| fronts[].side | 8 | frontState origin/end derivation + clamp branch + polygon construction branch |
| fronts[].colour | 1 (+1 via state) | frontState colour into state; the draw path fills from the state colour |
| fronts[].startMs | 2 | growth progress onset (progress expression + started flag) |
| fronts[].growMs | 1 | growth progress divisor |
| fronts[].easePow | 1 | progress exponent in frontState — drives the per-front progress curve (asserted by the Stage-1 anchor deltas + interpolation invariant) |
| fronts[].points | 6 | wobble array length + frontier point loop + along-fraction denominator |
| fronts[].wobbleAmp | 1 | seeded wobble amplitude in wobbles() |
| fronts[].seed | 1 | per-front RNG seeding in wobbles() |
| trappedGapPx | 4 | every front's end-centre derivation (planet ± gap/2) — the halt geometry |
| ringClearancePx | 2 | the endpoint clamp bounds for the left and right fronts (asserted by the Stage-2 local-clearance minima) |

## Literal scan outside CONFIG
- Hex colours outside CONFIG: ['#000'] — the page void outside the stage in CSS (structural, not a subject colour). All subject colours read from CONFIG (the full hex set in the file is exactly the CONFIG palette + #000).
- Numeric literals in the post-CONFIG script, classified: 0 / 1 / 2 / 3 / 6 / 7 — indices, loop bounds, unit identities, halves (ringW/2 in the clearance geometry), pin eye fractions derived from pin.headR (÷3, ÷6, ÷7 ratios applied to a CONFIG value); 1000 — frontier-mean rounding precision (a rounding identity, structural); 14 / 15 / 61 / 4294967296 + the hex constant 0x6D2B79F5 — the seeded mulberry32 PRNG's shift/multiplier constants (structural; seeds are CONFIG). Math.PI×2 — circle identity, structural.
- Markup geometry: canvas width="720" height="405" attributes and the CSS 56.25vw stage ratio are PRE-SCRIPT FALLBACK values only — at init the canvas backing and the stage aspect are assigned from CONFIG.stageW/stageH before the first frame (Stage-3 effect check, incl. a non-16:9 swap, in the build record), so the effective geometry is CONFIG-driven, not literal-driven.
- Subject geometry: frontier points are computed per point from growth progress × mean-normalized seeded wobble, with the in-span endpoint clamp; no literal blob paths, no scale/slide transform exists in the file.
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — not applicable, no unset-variable references exist.
- CSS declaration parse (A-C012-3): 13 declarations across the stylesheet, every declaration parses with a well-formed property:value form — PASS.
- Source comments: three neutral descriptive comments (pin glyph / planet disc / rotating dashed ring); no amendment labels, no check names, no evaluative text — clean for payload use.

HITs: 0
