# config-census — T151 · Cycle 024 Wave 21 · attempt 1 (guard-config-census, Amendment A6 + A9.6)
Instrument: node census script over the final recreation.html — every CONFIG leaf key resolved to application sites in the code after the CONFIG block (counts below); value-flow read by the builder (a site counts only where the value constructs its named subject). Generator coefficients that shape the subject (arm sweep, radius exponent, angle jitter, radial inner band) are CONFIG keys per A9.6 and are censused as such.

## Key -> application-site resolution
| CONFIG key | sites | value-flow note |
|---|---|---|
| seed | 3 | rng32 stream for buildField (specks then candles, one deterministic stream) |
| stageW | 1 | background fill width in draw |
| stageH | 1 | background fill height in draw |
| cycleMs | 3 | stateAt cycle modulo |
| plateFadeInMs | 1 | plateAlpha derivation in stateAt (the named transition-in replacing the deferred beats) |
| background | 1 | stage background fill |
| galaxy.cx | 8 | disc gradient centre, arm-dot x, speck x, candle x |
| galaxy.cy | 8 | disc gradient centre, arm-dot y, speck y, candle y |
| galaxy.rx | 7 | disc radius, ellipse scale, speck/candle radial x |
| galaxy.ry | 4 | ellipse scale + speck/candle radial y |
| galaxy.armCount | 4 | candle arm assignment + arm-dot loop |
| galaxy.core | 2 | radial gradient core stop |
| galaxy.disc | 3 | radial gradient outer stop |
| galaxy.arm | 7 | gradient mid stop + arm-dot fill |
| galaxy.coreRadiusPx | 1 | gradient mid-stop position (coreRadiusPx / rx) |
| galaxy.armSteps | 2 | arm-dot sampling loop |
| galaxy.armDotPx | 1 | arm-dot radius (tapered by rf) |
| specks.count | 2 | buildField speck loop bound |
| specks.reserveIntensity | 3 | speck intensity cap in stateAt (under the min() with field.reserveIntensity) |
| specks.colour | 3 | speck fill in draw |
| specks.radiusPx | 1 | speck circle radius |
| specks.twinkleAmp | 2 | twinkle modulation depth in stateAt |
| specks.twinkleRateRadPerMs | 1 | twinkle phase advance in stateAt (the freeze instrument) |
| field.reserveIntensity | 3 | the Owner Cure 1 cap: min() ceiling on speck intensity in stateAt + harness reserveCap read |
| candles.count | 2 | buildField candle loop bound |
| candles.armSweepRad | 2 | spiral angle in buildField candle placement + arm-dot drawing — subject-shaping generator coefficient, CONFIG per A9.6 |
| candles.radiusExponent | 2 | radial mapping in buildField + arm-dot drawing — subject-shaping generator coefficient, CONFIG per A9.6 |
| candles.angleJitterRad | 1 | candle angular jitter in buildField |
| candles.innerBandFrac | 2 | candle radial band start in buildField (u = innerBandFrac + (1 − innerBandFrac)·rng) |
| kindle.kindleStartMs | 1 | candle onset base in buildField |
| kindle.kindleIntervalMs | 1 | candle onset step in buildField |
| kindle.rampMs | 1 | kindle glow ramp in stateAt |
| flame.h | 1 | flame height in stateAt (flicker-modulated) |
| flame.colour | 3 | glow-column gradient stop + flame fill |
| flame.glowColumnH | 3 | glow gradient span + glow rect geometry |
| flame.intensity | 4 | kindled-candle foreground intensity in draw (Owner Cure 1 foreground leg) |
| flame.bodyW | 7 | flame teardrop + glow column widths — constructs the flame silhouette |
| flame.glowAlpha | 1 | glow column alpha in draw |
| flame.flickerAmp | 1 | flame height flicker depth in stateAt |
| flame.flickerRateRadPerMs | 1 | flame flicker phase advance in stateAt |

Unapplied keys: [] — every CONFIG leaf resolves to at least one value-flow-valid site.

## Literal scan outside CONFIG
- Hex colours outside CONFIG: [] — none. (The glow gradient's transparent stop is the string 'rgba(0,0,0,0)', a zero-alpha structural stop, not a subject colour; all subject colours read from CONFIG.)
- Subject geometry: galaxy centre/radii, arm sweep, radius exponent, candle band and jitter, flame and glow geometry all read from CONFIG galaxy.* / candles.* / flame.* keys; candle and speck positions are generated from CONFIG seed 15124, never literals.
- Numeric literals in engine code: the mulberry32 hash constants (0x6D2B79F5 · shifts 15/7/14 · 61 · 4294967296 — RNG machinery, not subject values) · loop bounds and index arithmetic · unit identities (Math.PI·2 full turns, gradient stop 0/1) · proportional construction ratios inside the flame teardrop and arm-dot taper (0.5 · 0.6 · 0.45 · 0.55 — they subdivide the CONFIG flame.bodyW / flame.h / galaxy.armDotPx they scale with; printed per the v3.1 classification rule, not exempted silently). The candle radial band coefficient found in the first-draft scan (0.15/0.85) was promoted into CONFIG as candles.innerBandFrac before the wave — the scan above is the final build's.
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — check not applicable, no unset-variable references exist.

HITs: 0
