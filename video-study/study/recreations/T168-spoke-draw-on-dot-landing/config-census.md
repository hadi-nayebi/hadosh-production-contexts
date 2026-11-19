# config-census — T168 Spoke draw-on with dot landing (A6 config-census leg v3.1, pre-wave)

Guard: guards/guard-config-census.md. Subject: recreation.html SHA-256 267628f24bdb9bb28f2d6aa812674bc09d30c5994d98116a64a776173d80e5d2.
Method: all-literal scan of recreation.html outside the CONFIG block (scripted scan, raw counts below) + per-constant classification + CONFIG key→application-site resolution + CSS-variable setter check.

## 1. All-literal scan (raw scan output)
- HEX colours outside CONFIG: [] — count 0.
- Numbers outside CONFIG: ['0', '1', '100', '2000', '8'] — classification per constant:
  - `0` — structural: coordinate origin (rect x/y, viewBox origin built as "0 0 " + CONFIG.stage), fraction clamp bound, loop/empty initialisers. Mathematical identity, shapes nothing.
  - `1` — structural: fraction completion bound (p>=1 materialisation threshold — the packet's mechanic itself, not a shaping value), aspect-ratio 1/1 (the stage is square by CONFIG.stage 1080x1080), initial-scale=1 viewport token.
  - `100` — structural: CSS 100%/100vw/100vh layout extents (stage fills the viewport; the stage's own geometry comes from CONFIG.stage via viewBox).
  - `2000` — structural: substring of the SVG namespace identifier string "http://www.w3.org/2000/svg" (a fixed identifier, not a value).
  - `8` — structural: substring of the "utf-8" charset token.
- Strings outside CONFIG: element ids, SVG attribute names, "visible"/"hidden" state tokens, the namespace identifier, "use strict", aria-label metadata — all structural identifiers, none subject-shaping.
- No durations, geometry values, or formula coefficients stand outside CONFIG: the fraction function is (ms − start)/dur with start/dur read from CONFIG.satellites (scaled by CONFIG.timingScale); line endpoints interpolate hub→satellite coordinates read from CONFIG. There are no background-layer coefficients in this build (still black field, A9.1) and no generator constants.

## 2. CONFIG key → application-site resolution (value-flow)
| key | application site (value flows into) |
|---|---|
| stage.w / stage.h | viewBox construction + field rect width/height in buildScene |
| hub.cx / hub.cy | hub circle cx/cy; every spoke line x1/y1; endpoint interpolation origin in render |
| hub.r | hub circle r |
| hub.colour | hub circle fill |
| satellites[].x / .y | satellite circle cx/cy; spoke endpoint interpolation target in render/stateAt |
| satellites[].r | satellite circle r |
| satellites[].drawStartMs / .drawDurMs | scaledSatellites → fractionAt in stateAt (draw window + dot materialisation) |
| spoke.w | spoke line stroke-width |
| spoke.colour | spoke line stroke; stateAt().spokeColour |
| spoke.easing ("linear") | applyEasing dispatch in fractionAt — the key selects the interpolation curve (linear default; easeOutCubic / easeInOutQuad also implemented); changing the key changes the draw's interpolation (cured after jev-prewave's non-blocking qualification named this key as declared-but-unproven; default linear behaviour byte-identical in state) |
| timingScale.default | timingScaleValue → scaledSatellites (uniform scaling of every start+duration) |
| palette.field | body/stage background + field rect fill |
| palette.ink | satellite circle fill |
| cycleMs | tick loop modulus; stateAt().cycleMs |

Every key resolves to at least one value-flow site in its named subject. No unapplied keys.

## 3. CSS-variable setter check
The build uses no CSS variables. All styling values are assigned from CONFIG in buildScene/render (inline style + setAttribute). No unset-variable references exist. PASS.

## HIT list
HITs: 0 (empty = PASS for this leg).
