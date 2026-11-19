# config-census — T175 Name-exit ending (guard-config-census v3.1, A6 pre-wave leg)

_Prices the final recreation.html (SHA-256 `585ff7517b9dfbc060ed77c2487af917c216d9262650820311861d0817c2a3dc`)._

## 1. All-literal scan (outside the CONFIG block)
Distinct literals outside CONFIG: `0x811c9dc5` / `0x01000193` (FNV-1a hash offset/prime) · `16` (hex radix in parseInt/toString + slice bounds in the colour mixer) · `100` (% / cqw unit conversions) · `2` (Math.PI × 2 full-turn; string padding) · `3` (hex channel count in mixColor loop) · `8` (hash hex width) · `0` / `1` (clamp01 bounds, indices, phase endpoints) · `"INK"` (sheen-stop sentinel resolved against palette.ink at render) · meta digits (charset/viewport `1`) · CSS `100%`/`100vmin` (full-container identities). Per-constant classification:

| literal | site | classification |
|---|---|---|
| `0x811c9dc5` / `0x01000193` | fnv1a | structural — the FNV-1a algorithm's defining constants; the hash is a probe instrument, not subject shape |
| `16`, `3`, `8`, padding strings | hexRgb/mixColor/fnv1a formatting | structural — base/channel-count/format identities |
| `100` | pct() and cqw conversions | structural — percent/unit identity arithmetic over CONFIG values |
| `2` | ring arc sweep Math.PI × 2 | structural — full-turn identity |
| `0` / `1` | clamp01, loop indices, stop endpoints | structural — clamp/index identities |
| `"INK"` | sheen stop resolution | structural sentinel — its VALUE is palette.ink (CONFIG); the sentinel names the key it resolves to |
| font stack | — | subject-shaping and IN CONFIG (footer.fontStack) per the v3.1 clarification — no CSS font literal stands outside CONFIG (the comparison page's furniture stack is outside this leg's scope) |
| node table (22 × {x,y,r}) | — | subject-shaping and IN CONFIG (CONFIG.nodes, verbatim from positions-final.json) — the census data is CONFIG, as required |

No subject-shaping literal stands outside CONFIG. All shaping values (node table, hub, spoke width, name text, holds, exit duration, roll travel, sheen stops, gradient step counts, footer geometry/clip, palette) live in CONFIG.

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| key | application site(s) |
|---|---|
| stage.w / stage.h | SVG viewBox · field rect · rule segment span · name font/line-height cqw scaling · pct() conversions |
| hub.cx / cy / r | networkSerialization · spoke line endpoints (x1/y1) · hub circle |
| nodes[].x / y / r | networkSerialization · spoke line endpoints (x2/y2) · node circles (cx/cy/r) — all 22 entries consumed by the same loops |
| spoke.w | networkSerialization · spoke line stroke-width |
| lastName.text | nameText.textContent · stateAt footerName |
| holds.settledMs | derived() exitStartMs + cycleMs |
| holds.aloneMs | derived() cycleMs |
| exit.durMs | derived() aloneStartMs + cycleMs · stateAt exiting progress divisor |
| name.rollTravelPx | render() exiting translateY |
| sheen.stops[].at / color | sheenCss() gradient stop string (INK sentinel → palette.ink) |
| gradSteps | rule segment loop count |
| ringSteps | ring segment loop count |
| footer.ruleY | rule segment y1/y2 |
| footer.ringCx[] / ringCy / ringR / ringStroke | ring segment geometry + stroke-width (both centres consumed) · rule stroke-width |
| footer.lineH | name line-height |
| footer.fontPx | name font-size · fit instrument input |
| footer.fontStack | name font-family |
| footer.clip.x / y / w / h | nameClip left/top/width/height |
| palette.field | field rect fill |
| palette.ink | networkSerialization · spoke/node/hub fill+stroke · settled name colour · sheen INK stops |
| palette.ruleFrom / ruleTo | mixColor endpoints for rule + ring segments |

## 3. CSS-variable setter check
No CSS variables are used; CONFIG values flow through JS setters directly. No unassigned-variable class present.

**HIT list: EMPTY — leg PASS (advisory).**
