# T94 — config-census leg (guard-config-census v3.1) · config-census.md

Build bound: recreation.html sha256 8509d420b6a520fbdbe15890b9c123ed128d341f3a811e395c2c8ca8a454fa39.

## 1. All-literal scan (outside the CONFIG block)
- Hex colors outside CONFIG: **0** (all fills/strokes read palette.*).
- Font stacks outside CONFIG: **0** — the only font declaration is `stage.style.fontFamily = CFG.type.font` in JS; the CSS block carries no font-family (Cycle-013 clarification applied).
- Numeric literals outside CONFIG, classified per constant:
  - Logistic ease coefficients (10, 0.44 in easeFlip): **subject-shaping by design, declared ownership: the flip-easing function** — fitted to the measured 0.5 s samples (2034@2.0 · 2030@2.5 · 2027@3.0); changing them changes the count's tempo shape. They are a fitted curve, not specimen values; the flip window itself (flipStartMs/flipEndMs) is CONFIG. Classified here per the census's generator-clarification (a coefficient that shapes motion is not silently structural).
  - RNG constant 0x6D2B79F5 + shifts (mulberry32): **structural** (algorithm identity; the seed that selects the city is CONFIG city.seed).
  - Figure-glyph proportions (head r 3.4, body path offsets ±4/±2.6, head offset +4/9): **subject-shaping by design, declared ownership: the generic figure glyph** (rulerSVG); its SCALE is CONFIG-bound (geom.figureH), its color is palette.accent, its identity is ruler.figure. Generic person silhouette, not a tracing.
  - Moon mask offsets (0.45 / −0.18 / 0.88 of moonR): **declared ownership: the crescent construction** in buildCity; scale/position CONFIG (geom.moonX/Y/R).
  - Far-row height factor 0.7, star field vertical extent 0.45, building slot inset −3/+2: **generator proportions, declared ownership: buildCity**; their ranges are CONFIG (buildingMin/Max W/H, starCount, win* grid). Subject scale is CONFIG-bound.
  - Tick/figure geometry offsets in rulerSVG derive from CONFIG geom (tickSizePx, tickGapAbovePx, figureH, figureGapPx, markGapPx) — no free literals beyond the glyph proportions above.
  - Validation domains (year 1900/2200, buildings 1–40, string cap 90, ms cap 60000, px bounds, stage bounds 240–720/200–720): **structural** (override-schema bounds).
  - CSS 0 margins/padding, inset 0, z-index 4/5, label box 40 px width + −36 px left offset (ruler-label box geometry, derived from rulerX1 in code): **structural** (the label's font size and text are CONFIG typeSize.rulerYearPx + ruler.toYear; the box is sized to the measured fit row in fit-table.md).
  - Sub-line marginTop 6 px, ruler label top offset −12 px: **structural** layout constants (fixed spacing inside CONFIG-positioned groups).
  - Subject-shaping literals outside CONFIG with no declared ownership: **0**.

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| Key | Application site |
|---|---|
| hud.year / hud.dayLine | hudYearEl.textContent (composed HUD line) |
| hud.clock | hudClockEl.textContent |
| city.buildings | buildCity near-row loop count (harness-verified: 14 default, 8 swapped) |
| city.litRatio | buildCity window-lit test `rng() < litRatio` |
| city.seed | mulberry32(CFG.city.seed) |
| cards[0].year / cards[1].year (array members) | yearAt() flip endpoints (from/to) |
| cards[0].sub / cards[1].sub | cardSubEl.textContent — cards[0].sub during the flip, cards[1].sub once settled (cure-verified with distinct subs) |
| cards[].ruler (member flag) | stateAt(): ruler phases gate on `cards[1].ruler === true` |
| ruler.fromYear | read in rulerSVG (figure x derived from the year domain) + tickCount() domain span + validateMerged consistency (fromYear must equal cards[1].year) |
| ruler.toYear | rulerLabel.textContent (swap-verified: 2040 renders) + tickCount() domain span |
| ruler.figure | figure selector in rulerSVG: "viewer" silhouette / "dot" figure (cure-verified) |
| ruler.mark | rulerSVG mark text (the "?" above the figure) |
| palette.bg | stage background · sky rect · moon mask disc |
| palette.ink | HUD/card/ruler-line/end-label/mark/star fills |
| palette.accent | sub-line color · figure fill |
| palette.building / buildingFar | near-row / far-row building fills (swap-verified) |
| palette.window | lit windows + ruler ticks |
| cardMs | tickStepMs(): ticks complete at flipStartMs + cardMs (the card's active window drives tick spacing) |
| descendMs | stateAt() entry progression (hudMs → hudMs+descendMs); swap-verified at 400 |
| endHoldMs | stateAt() hold state (t ≥ totalMs − endHoldMs): during the terminal hold the ruler line + end dot render in palette.accent (the settled form's gold ruler, cf. the seg-13.5 frame); cure-verified at endHoldMs 3000 (hold boundary moves to 11000) + validateMerged relationship (figureMs < totalMs − endHoldMs) |
| type.font | stage.style.fontFamily (single setter; swap-verified) |
| timing.totalMs | render() loop modulus |
| timing.hudMs | stateAt() HUD/card boundary (harness-verified 749/750) |
| timing.flipStartMs / flipEndMs | yearAt() flip window |
| timing.rulerStartMs / rulerDrawMs | stateAt() rulerProg |
| timing.tickStartMs | stateAt() tick phase start (+ cardMs-derived step) |
| timing.figureMs | stateAt() figure gate |
| stage.width / stage.height | stage style · both SVG viewBoxes |
| typeSize.hudYearPx / hudClockPx / yearPx / subPx / subSpacingPx / rulerYearPx / markPx | the corresponding element style setters / rulerSVG mark font-size |
| geom.* (all members) | hud position · moon · stars · card position/entry · ruler geometry · ticks · figure · window grid + building ranges in buildCity (each member read at its site in buildCity/rulerSVG/stateAt) |
| geom.windowOpacity / starOpacity | window rect opacity / star circle opacity (Cure 1 separation values) |

Override surface (?cfg=, allowlisted + validated): hud · city · cards (both members, descending enforced) · ruler · cardMs · descendMs · endHoldMs · palette · type.font · timing · typeSize · stage · geom. **Atomic merged validation (validateMerged, added by the interim-wave reusability cure):** the merged config must satisfy hudMs<flipStart<flipEnd≤rulerStart, rulerStart+rulerDraw≤tickStart<figureMs<totalMs−endHoldMs, flipStart+cardMs>tickStart, descendMs>0, building ranges ordered, winGapX/Y ≥2, rulerX0<rulerX1, ruler.fromYear === cards[1].year, toYear>fromYear — any violation rejects the WHOLE override (the default build stands); cure-verified with a reversed flip window and a zero window gap, both rejected atomically. Unapplied keys: **0**.

## 3. CSS-variable setter check
The build uses NO CSS variables: every CONFIG value is consumed by a direct JS style assignment or string construction, each setter verified present in §2. Unset-variable references: **0** (class not applicable — no var() references exist).

## HIT list
**EMPTY — 0 HITs** (final cured build; generator geometry + font stacks classified per the v3.1 clarification; flip-easing coefficients and glyph proportions carry declared ownership; every CONFIG key resolves to a verified application site — the interim wave's reusability findings on contract keys were cured and re-verified before this filing, see build-record.md).
