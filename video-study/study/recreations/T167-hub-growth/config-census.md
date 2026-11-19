# T167 — config-census (A6 config-census leg v3.1, pre-wave)

Scan of recreation.html (SHA-256 598060cfd7bcd76b29c8e56577605f19dbbe6b86b81d54b9a54a010e82327c64) for literals outside the CONFIG block.

Raw scan output:
```
hex literals outside CONFIG: ["#000000"]
numeric literals outside CONFIG (value x count): {"0":13,"1":5,"2":5,"3":1,"8":1,"50":2,"100":2,"000000":1}
```

## Per-constant classification

| literal | count | class | reason |
|---|---|---|---|
| `#000000` (in ring mask string) | 1 | structural | mask alpha channel only — any fully opaque colour produces the identical ring; the colour value shapes nothing |
| `0` | 13 | structural | zero offsets, array index, gradient stop join, modulo origin |
| `1` | 5 | structural | index 1 (second ring / second stop), identity in (1 − p), initial-scale=1 viewport |
| `2` | 5 | structural | diameter doubling (r × 2), half-stroke (/ 2) |
| `3` | 1 | structural | exponent of the named cubic easing (easeOutCubic's defining identity; the curve NAME is the CONFIG key growth.easing) |
| `8` | 1 | structural | utf-8 charset declaration |
| `50` | 2 | structural | border-radius 50% — the circle identity for hub/ring divs |
| `100` | 2 | structural | percent conversion (stop at × 100) and CSS height 100% |
| strings: element ids, "px", "transparent", "none", "text", gradient-function templates | — | structural | application wiring; every gradient colour inside the templates is read from CONFIG at runtime |
| string "easeOutCubic" in applyEasing dispatch | 1 | structural | dispatch key matching the CONFIG value growth.easing; the value itself lives in CONFIG |

No subject-shaping literal stands outside CONFIG. Subject text ("Nalpak, INC.") occurs exactly once, inside CONFIG.

## CONFIG key → application-site resolution

| key | site |
|---|---|
| stage.w/h | initStatic world size + fitStage scale divisor |
| hub.cx/cy | stateAt return + render hub left/top |
| hub.seedR / hub.hubR | stateAt radius branches |
| hub.colour | stateAt hubColour + render hub background (+ swap-probed) |
| growth.startMs / durMs | stateAt growth phase + cycleMs getter |
| growth.easing | stateAt applyEasing(g.easing, p) for hub and name roll |
| holdAfterMs | cycleMs getter + stateAt cycle computation |
| cycleMs (derived getter) | rAF loop modulo + stateAt cycleMs field |
| name.text | stateAt nameText + render textContent |
| name.rollStartMs / rollDurMs | stateAt roll phase branches |
| name.rollTravelPx | stateAt nameOffsetPx branches |
| footer.ruleY | initStatic rule top (ruleY − ruleStroke/2) |
| footer.ringCx / ringCy / ringR / ringStroke | initStatic ring position/size/mask inner radius |
| footer.ruleStroke | initStatic rule height/top |
| footer.lineH | initStatic name line-height |
| footer.fontPx | initStatic name font-size |
| footer.fontStack | initStatic name font-family |
| footer.clip {x,y,w,h} | initStatic nameClip geometry |
| sheen.stops[] (at + colour, array members resolved individually) | sheenGradient() stop string built per member |
| palette.field | initStatic body + world background |
| palette.ink | render settled name colour |
| palette.ruleFrom / ruleTo | initStatic rule gradient + ringBackground conic gradient |

CSS-variable setter check: no CSS variables are used; no unset-variable references exist. PASS.

## HITs
HITs: 0 (no unapplied CONFIG key; no subject-shaping literal outside CONFIG).
