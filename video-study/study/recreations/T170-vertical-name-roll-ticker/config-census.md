# config-census — T170 Vertical name-roll ticker (A6 config-census leg v3.1, FINAL build)

Build: recreation.html · SHA-256 6817b3feb101925a93d921f517c0b34f146eb70dd67a33255b2e4610edfecc01

## 1. All-literal scan (literals outside the CONFIG block)
| Literal | Location | Classification | Reason |
|---|---|---|---|
| `#111` | CSS body background | structural | page surround OUTSIDE the 1080 stage; not part of the subject (the stage field is palette.field) |
| `min(94vw,720px)` | CSS #stageWrap width | structural | display scaling of the stage container; stage-internal geometry is CONFIG |
| `"0 0 "` + stage w/h | viewBox construction | structural | viewBox origin identity; dimensions read from CONFIG stage |
| `0` (rect x/y origins) | field rect | structural | stage origin identity |
| `"0"`/`"1"` gradient offsets + x1/y1/x2/y2 unit values | ruleGrad definition | structural | unit-square gradient vector endpoints (identities); the gradient COLOURS are palette.ruleFrom/ruleTo (CONFIG) |
| `2` in `ruleY - ruleH/2` | rule rect y | structural | centring identity (half of CONFIG ruleH) |
| loop indices, `0`/`1` progress identities, `i-1`/`i+1` | stateAt | structural | indices and unit-interval identities |
| `""`, `"none"`, attribute-name strings, SVGNS URI, aria text | DOM construction | structural | API constants, not shaping values |
| `url(#ruleGrad)`, `url(#nameClip)`, `url(#sheenGrad)` (×4 occurrences) | fill/stroke/clip-path attributes | structural | internal fragment references to paint servers / clip defined in the same file from CONFIG values; no external resource is loaded (see build-record purity classification) |

No hex colour, duration, geometry value, or coefficient shaping the subject stands outside CONFIG. Two shaping literals found in the first draft (rule thickness `4`, CSS `font-weight:700`/`letter-spacing:1px`) were CURED pre-wave into CONFIG keys `footer.ruleH` and `footer.fontWeight` (letter-spacing dropped) — the census above is of the cured final build.

## 2. CONFIG key → application-site resolution (value-flow)
| Key | Application site (value flows into) |
|---|---|
| stage.w / stage.h | viewBox string + field rect width/height |
| names[0..22] | stateAt outgoing/incoming/currentName + render textContent of both name layers |
| bursts[].startMs / durMs | scaledSchedule → stateAt burst windows + render progress |
| exit.startMs / durMs | scaledSchedule → stateAt exit window |
| timingScale | scaledSchedule multiplies every start/duration/exit (swap-proven: B02 start 1440→2160 at 1.5) |
| footer.ruleY | rule rect y (ruleY − ruleH/2) |
| footer.ringCx[] | ring circle cx per mark |
| footer.ringCy | ring circle cy |
| footer.ringR | ring circle r |
| footer.ringStroke | ring circle stroke-width |
| footer.ruleH | rule rect height + y centring |
| footer.lineH | render settled baseline: baseY = clip.y + (lineH − fontPx)/2 + fontPx (the line box sits at the clip top, baseline centred in it) |
| footer.fontPx | text font-size + settled baseline (baseY = clip.y + (lineH − fontPx)/2 + fontPx) |
| footer.fontWeight | text font-weight attribute |
| footer.fontStack | text font-family attribute |
| footer.clip {x,y,w,h} | clipPath rect + name centre x (clip.x + clip.w/2) + baseline origin (baseY derives from clip.y — see footer.lineH row) |
| rollTravelPx | render: outgoing/incoming y offsets during burst/exit |
| sheen.stops[].at / color | sheenGrad stop offsets/colours (end stops re-bound to palette.ink at build so an ink swap recolours them) |
| palette.field | field rect fill |
| palette.ink | settled text fill + sheen end stops + swap target |
| palette.ruleFrom / ruleTo | ruleGrad stop colours (rule + rings) |
| cycleMs | scaledSchedule cycle wrap in stateAt + animation loop |

Every key resolves to ≥1 value-flow site. No CSS variables are used, so the CSS-variable setter check is vacuous (no setters, no references).

## 3. HIT list
**HITs: 0**
