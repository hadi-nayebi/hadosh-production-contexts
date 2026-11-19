# config-census — T140 Repetition chant · attempt 1 (guard-config-census v3.1, A6 leg)

Build: recreation.html · SHA-256 62afd9080a700d340bcf691ad331597fa83015b45dbaa735f3918245447763a2

## Key → application site resolution (every CONFIG key)
| CONFIG key | application site (value flows into) |
|---|---|
| tokens | onsets computation + cycleMs derivation + tokenIndexAt/renderAt (the schedule itself) |
| tokens[].t | wordEl.textContent in renderAt; repeatIndices filter |
| tokens[].dwellMs | cycleMs sum (× dwellScale) + cumulative onsets |
| repeatWord | repeatIndices derivation (`tk.t === CONFIG.repeatWord`) → dust progression keying |
| dwellScale | cycleMs derivation + cumulative onsets scaling (real site; swap at 1.5 yields derived 840 ms) |
| fontPx | wordEl.style.fontSize |
| fontWeight | wordEl.style.fontWeight |
| fontFamily | wordEl.style.fontFamily |
| wordColor | wordEl.style.color |
| anchorYFrac | wordEl.style.top (anchorYFrac × 100%) |
| stageW | stage.style.width |
| stageH | stage.style.height |
| dust.growthPerSec | dust scale computation in renderAt (`0.7 + growthPerSec × (cyclePos/1000) × 0.55`) |
| dust.maxOpacity | dustEl.style.opacity ceiling (`dustLevel × maxOpacity`); A-PARTICLE bound ≤0.85 holds by construction |
| dust.color | dustEl background radial gradients (solid stop + rgbaFromHex alpha stops derived from the same key) |
| plate.sky | stage background gradient (sky band) |
| plate.far | stage background gradient (far ridge band) |
| plate.near | stage background gradient (near salt-flat band) |
| plate.skyFrac | stage gradient band boundary (skyPct) |
| plate.farFrac | stage gradient band boundary (farPct) |
| plate.stripeA | platePan repeating gradient stripe colour |
| plate.stripeB | platePan repeating gradient stripe colour |
| plate.panPxPerSec | panOffset computation in renderAt |
| plate.panTilePx | platePan width (×2 tiles), backgroundSize, panShift modulo (the seamless wrap period) |

Unapplied keys: none.

## CSS-variable setter check
No CSS variables are used; CONFIG is consumed directly in JS style assignments. No setter-missing class applies. Check result: no HIT.

## Literal scan outside CONFIG (classified per constant)
- Hex/rgba colours outside CONFIG: `rgba(255,255,255,0)` transparent gradient stops in the pan texture (structural — transparency stop, no colour of its own; the visible stripe colours are CONFIG plate.stripeA/stripeB) · page background `#111` on html/body in the style block (structural — the page outside the stage, not the subject) · comparison-only colours live in comparison.html, outside this census's build.
- Durations outside CONFIG: none — every dwell, the cycle, and the pan rate derive from CONFIG.
- Geometry/numeric constants outside CONFIG, classified:
  - Dust box position (left 18%, right −6%, top 30%, bottom 4%) and radial-gradient centres/sizes — structural layout of the background layer's shape; no CONFIG key promises dust geometry (CONFIG promises dust growth rate, opacity ceiling, and colour — all applied above). Classification: structural.
  - Gradient alpha stops (0.55/0.4/0.35/0) inside rgbaFromHex calls — alpha falloff of the dust colour; the colour itself flows from dust.color. Classification: structural formula coefficients.
  - Dust blend coefficients (0.75 cycle / 0.25 repeat) and scale coefficients (0.7 base, 0.55 rate factor) in renderAt — structural formula coefficients combining the two CONFIG-driven progressions; no CONFIG key promises a blend ratio.
  - Pan stripe offsets within the tile (170–367 px positions) — structural texture geometry inside one panTilePx tile; the tile period itself is CONFIG panTilePx.
  - zIndex 1 (dust) / 2 (word) — structural stacking constants; the A-PARTICLE rule (dust below word at all times) holds by these assignments.
  - 1000 (ms↔s conversion), 100 (% conversion), 2 (tile count), loop bounds/indices — structural mathematical identities.

HITs: 0 — PASS for this leg (after the pre-wave refinement that moved plate band fractions, pan stripe colours, and dust alpha stops onto CONFIG-derived values; recorded in build-record.md).
