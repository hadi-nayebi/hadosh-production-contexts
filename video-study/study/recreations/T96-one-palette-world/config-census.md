# T96 — config-census leg (guard-config-census v3.1 + Cycle-013 clarification) · config-census.md

Build bound: recreation.html sha256 44ff698dee7af1d1e950f86fdaf0998cde0e3d9cb65955308b372aa9707701c6.

## 1. All-literal scan (outside the CONFIG block)
- Hex colors outside CONFIG: **0** (all six hex values live in palette/breakPalette; verified by grep census).
- Font stacks outside CONFIG: **0** — the only font stack is `type.font`, applied to stage, HUD, break label, and scene label.
- Numeric literals outside CONFIG, classified:
  - LCG identities 1664525, 1013904223, 4294967296: **structural** (seeded-generator mathematics; the seed is CONFIG geom.seed).
  - Halves of CONFIG sizes (/2 in silhouette centering, lamp offsets 30/290/32/292 and interior rect coordinates in sceneBody): scene-ornament placement literals — classified **structural-context** for fixed interior furniture coordinates (they position generic silhouettes inside a CONFIG-sized frame and do not shape the technique's subject: the palette register + break). Named here in the open: kitchen counter window (40, −26, 34×26), dinner windows (70/244, 96, 46×34), street lamp x positions (30/290). A lens may price these as shaping; the census records them rather than hiding them.
  - Loop indices, 0/1 clamps, toFixed(1) precision, modulo arithmetic: **structural**.
  - Subject-shaping literals outside CONFIG: **0** for palette, timing, HUD, labels, skyline generator geometry (all in geom), and phase boundaries (derived from scenes/sceneMs/break/endHold).

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| Key | Application site |
|---|---|
| scenes[].name / scenes[].clock | sceneBody dispatch + scene label + HUD clock in render() |
| palette.sky/building/ink/amber | sky rect (blue mode) · buildings/ground/furniture · HUD+labels · lit windows/lamps/sun (blue mode) |
| breakPalette.sky / breakPalette.sun | sky rect + sun disc in dusk mode |
| break.atScene / break.label / break.offsetMs | phaseAt() break test · dusk label text · phaseAt() offset test |
| sceneMs / breakMs / endHoldMs | phaseAt() intervals · cycleMs derivation |
| hud.year / hud.dayLine | HUD year line |
| type.font | stage font-family · SVG text font-family |
| stage.width | stage size · viewBox · skyline spread · label centering |
| intensity.lights / intensity.field / intensity.label | lit windows+lamps · building fields+dinner frame+moon · break label |
| geom.* (all) | stageH/ground, skyline generator (seed/buildings/ranges/jitter/window grid/lit ratio), sun/moon, HUD layout, label/scene text, kitchen/street/dinner furniture geometry |

Unapplied keys: **0**.

## 3. CSS-variable setter check
No CSS variables used; every CONFIG value is consumed by direct JS construction. Unset-variable references: **0**.

## HIT list
**EMPTY — 0 HITs on the final build.**

Re-run after the readability cure: new keys intensity.plate + geom.plateW/plateH/plateX/plateY/labelPlateW/labelPlateH all resolve to the dusk plate rects in render(); intensity.field default cured 0.6→0.85. HIT list remains EMPTY on the final build sha 44ff698d…
