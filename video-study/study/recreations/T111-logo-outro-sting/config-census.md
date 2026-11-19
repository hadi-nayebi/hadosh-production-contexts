# config-census — T111 logo outro sting (guard-config-census v3.1, A6 pre-wave leg)

_Prices the final recreation.html (SHA-256 b2ac1bdfeb4734dd096c2e6c961262c20278bcc26bf14b424f05cf4b19b47fb7)._

## 1. All-literal scan (outside the CONFIG block)
Distinct literals outside CONFIG: `360` / `203` (SVG viewBox + rect geometry in markup — both are re-bound from CONFIG.stage at init; the markup values are the pre-init identity) · `2000` (SVG namespace URI) · `100` (% CSS) · `8500` (a comment stating the derived REST residual) · `0` · `1` · `2` · `3` (easing exponent) · meta digits (charset/viewport `1`). Per-constant classification:

| literal | site | classification |
|---|---|---|
| `360` / `203` | SVG viewBox + field/seam rect width/height | structural — the coordinate-system identity; CONFIG.stage{width,height} carries the same values as the display size and the viewBox scales to it |
| `2000` | SVG namespace URI string | structural — W3C namespace identifier, not a value |
| `100%` | CSS `#stage svg` width/height | structural — full-container identity |
| `8500` | construction comment | structural — documentation of a DERIVED value (cycleMs − assemblyMs − resolveMs − holdMs − loopFadeMs), not a code literal; no code reads it |
| `3` | easeOutCubic exponent `Math.pow(1-x,3)` | structural — the named easing's mathematical definition; the easing CHOICE is the CONFIG key `ease` |
| `2` | centre arithmetic `(length-1)/2`, `tri.size * 2` (full width from the points half-extent) | structural — identity arithmetic over CONFIG values |
| `0` / `1` | clamp01 bounds, opacity endpoints, Math.max(1,…) timing floors, indices | structural — clamp/floor/loop identities |
| font stack | — | subject-shaping and IN CONFIG (wordmark.fontFamily) per the v3.1 clarification — no CSS font literal stands outside CONFIG |

No subject-shaping literal stands outside CONFIG. All shaping values (triangle colors/sizes/points/offsets, spacing factor, centreY, blend, wordmark text/metrics/position/rise, all durations, ease choice, palette, stage, cycle) live in CONFIG.

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| key | application site(s) |
|---|---|
| triangles[].color | polygon `fill` in piece construction |
| triangles[].size | pointsFor scaling + centre spacing derivation |
| triangles[].points | pointsFor — parsed and scaled per triangle |
| triangles[].from.x / .y | render() translate interpolation per triangle |
| triangles.length | node construction, pieceDuration derivation, centre-index arithmetic |
| assemblyMs | pieceDuration, resolveStart/holdStart phase boundaries |
| staggerMs | per-piece start offsets in render(), pieceDuration derivation |
| wordmark.text | wordEl.textContent |
| wordmark.resolveMs | holdStart derivation + RESOLVE progress divisor |
| wordmark.fontFamily / fontSize / fontWeight / letterSpacing | wordEl style setters; fontSize also drives the runtime fitting policy |
| wordmark.y | wordEl.style.top |
| wordmark.risePx | wordEl translateY in render() |
| holdMs | fadeStart derivation (holdStart + holdMs) — the visible resolved-logo hold span before LOOP-FADE; changing it moves the fade and the REST residual absorbs the difference |
| loopFadeMs | fadeStart derivation + LOOP-FADE progress divisor |
| ease | EASINGS table selection in render() |
| palette.field | stage + body background, field rect fill, seam rect fill |
| palette.ink | wordmark color |
| mark.spacingFactor | finalCentre spacing derivation |
| mark.centreY | finalCentre cy for every triangle (shared centre line) |
| mark.blend | polygon mixBlendMode (screen — produces the measured yellow/cyan overlap regions on black) |
| stage.width / stage.height | stage element CSS size; width also the wordmark fitting bound |
| cycleMs | render/phaseAt modulo, fadeStart derivation |

Unapplied keys: NONE on the final build. **Pre-cure HIT (cured inside this leg, before scoring):** in the first build pass `holdMs` had no direct application site (the hold was implicit between holdStart and fadeStart) — cured by binding it as a phase boundary; in the interim-wave cure it was re-bound as the fadeStart derivation above, a visible timing control. The census above prices the final cured build.

## 3. CSS-variable setter check
No CSS variables are used anywhere in the file — no setter can be missing, no unset-variable reference exists. N/A, PASS.

**HIT list: EMPTY (after the one pre-cure cure above) — leg PASS (advisory).**
