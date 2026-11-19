# config-census — T162 · Cycle 019 Wave 18 · attempt 2 (guard-config-census v3.1, Amendment A6 + A-C008)
Instrument: node census over the attempt-2 recreation.html (sha256 f5e156104f04fb2cf0ae092b4d152d681d400bad525874f796276685c4335afe) — every CONFIG leaf resolved to application sites in the code after the CONFIG block; consumption asserted as EFFECT MAPPINGS by the own-check harness (swap + mutation probes), not enumeration alone. Zero-site keys: none.
Attempt-1 version preserved at config-census-attempt-1.md. Changes vs attempt 1: markers[].onsetMs values re-allocated (0/2200/3050/3900/4750/5600/6450); endHoldFromMs 10800 -> 7000; specks.twinklePeriodMs 1100 -> 1200; pin.headR 13 -> 16; NEW key bubble.tailHalfWidth; easePow now consumed via easeOut(p, cfg.easePow).

## Key -> application-site resolution (effect mappings for new/changed keys priced explicitly)
| CONFIG key | sites | value-flow / effect mapping |
|---|---|---|
| markers[].onsetMs | 3 | markerState visibility + enter progress → census states: visibleCount(2000)=1, visibleCount(2200)=2, visibleCount(7000)=7 (harness-probed) |
| endHoldFromMs | 1 | stateAt `holding` flag → boundary probed: holding false at 6999, true at 7000 |
| specks.twinklePeriodMs | 1 | frame() twinkle phase divisor → true-period sine (2*PI*cyc/period); 12000/1200 = 10 integer periods per cycle, wrap-continuous |
| pin.headR | 2 | head circle r + glyphSpecs scale → head diameter 32 design px / 16 px at 360 px; every glyph fraction rescales |
| bubble.tailHalfWidth | 2 | both bubble tail-path vertices (bcx ± bub.tailHalfWidth); the attempt-1 literal 6 is GONE from the source |
| easePow | 1 | markerState passes cfg.easePow into easeOut(p, pow) → mutation probe: supplied cfg easePow 1 gives scale 0.5 at 250 ms vs 0.875 for easePow 3 — the supplied cfg drives the curve |
| stageW | 3 | viewBox + bg width + speck sampling range |
| stageH | 3 | viewBox + bg height + speck sampling range |
| renderScale | 1 | bubble font design size = fontPx / renderScale |
| cycleMs | 3 | frame cycle modulo |
| bg | 1 | background rect fill (site count includes generic reads; value-flow site is the bg rect) |
| fontFamily | 1 | bubble text font-family |
| enterMs | 1 | markerState enter progress divisor |
| disc.cx / cy / rx / ry / coreR / coreColour / armColour / plateColour / armCount / armTurns / armCoeff / armWidth / armOpacity / armPoints / plateStroke / plateStrokeW | as attempt 1 | plate/core/arm/speck/reflection construction; coreColour swap-verified (#57c7e8 in effect in state) |
| specks.count / seed / reserveIntensity / colour / rMin / rMax / twinkleAmp | as attempt 1 | speckField + frame twinkle base; reserveIntensity 0.5 (BACKGROUND reserve) |
| pin.h / stemW / glyphColour / glyphAccent | as attempt 1 | stem length + head/glyph centres; glyph colours |
| markers[] / x / y / icon / colour | as attempt 1 | stateAt + DOM build; glyphSpecs dispatch by icon |
| bubble.text / attachIndex / showMs / hideMs / fadeMs / fontPx / colour / boxW / boxH / boxRx / dx / dy / tailLen / fontWeight | as attempt 1 | bubbleState + DOM bubble construction; text swap-verified ("Anyone else?" in effect at 1000 ms) |
| reflection.gapPx / depth / opacity | as attempt 1 | mirror band construction |

## Literal scan outside CONFIG (A-C008-3)
- Hex colours outside CONFIG: NONE (scan output []). All subject colours read from CONFIG.
- The attempt-1 tail literal 6: GONE — replaced by CONFIG bubble.tailHalfWidth at both sites; not whitelisted.
- Glyph geometry: glyphSpecs fractions of headR (0.62/0.38/0.5/0.78/0.66/0.85…) — structural-relative: they scale WITH the CONFIG head radius and are selected by the table's icon key, never per-marker literals.
- Numeric literals outside CONFIG, classified: 0 / 1 / 2 — loop bounds, index arithmetic, unit identities, Math.PI identities including the twinkle's 2 * Math.PI — structural. mulberry32 constants (0x6D2B79F5, 15, 7, 61, 14, 4294967296) — seeded PRNG algorithm constants (structural; the seed is CONFIG). 0.22 / 1.7 — core glow opacity/radius presentation factors of the CONFIG core (colour and base radius are disc.coreColour/disc.coreR); classified structural-presentation with reason printed, as in attempt 1.
- Content literals: none outside CONFIG — bubble text, marker colours, onsets are all CONFIG-carried.
- CSS-variable setter check: no CSS variables used; CONFIG consumed directly in JS — not applicable, no unset-variable references.

HITs: 0
