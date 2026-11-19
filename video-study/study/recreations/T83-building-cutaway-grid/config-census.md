# T83 — config-census leg (guard-config-census v3.1 + Cycle-013 clarification) · config-census.md

Build bound: recreation.html sha256 3ca26cdeb2abada8f539f4263632250909c6e84af13f598907ad8d9d5058a170.

## 1. All-literal scan (outside the CONFIG block)
- Hex colors outside CONFIG: **0** (all fills/strokes read palette.* or geom.sunColor).
- Font stacks outside CONFIG: **0** — the only font stack is `type.font`, applied to the stage element and the HUD group (Cycle-013 clarification class).
- Numeric literals outside CONFIG, classified per constant:
  - LCG identities — 1664525, 1013904223, 4294967296 (2^32): **structural** (mathematical identities of the seeded generator; the seed itself is CONFIG geom.citySeed).
  - Halves/quarters of CONFIG sizes — /2, /4 in glyph/window/figure geometry (cx − w/2, bud offsets at w/4): **structural** (identities over CONFIG values).
  - Loop indices, 0/1 clamps in Math.min/max, toFixed precisions (1, 3, 4), the ring's initial opacity "0" attribute (its animated value is computed from CONFIG): **structural**.
  - `rx="2"` on the terrace figure body: a 2 px corner radius on a 4.4 px-wide context silhouette — classified **structural** (sub-pixel corner treatment of a CONFIG-sized context figure; does not shape the subject).
  - Subject-shaping literals outside CONFIG: **0** — after pre-census cures moved city generator ranges/opacity, window opacities + stroke + placement fractions, glyph placement fraction + divider width, ring fade duration, terrace slab/figure geometry, HUD spacing/gap, and the ring radius into geom.* (all listed in §2).
- Per-flat literal class: **NONE** — all 10 flats are emitted by one nested loop over block.floors × block.cols; the generated markup contains no per-flat hand-written element (harness counts: exactly floors×cols flat/glyph/ring groups under default AND swapped configs: 10 → 6 → 15).

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| Key | Application site |
|---|---|
| block.floors / block.cols | flat-generation loops · cellW/cellH derivation · revealPhaseMs derivation |
| cell.glyph | GLYPHS registry lookup in flat generation |
| cell.windowLit | window fill + opacity branch in flat generation |
| terrace.enabled / terrace.figures | terrace group gate + figure loop bound |
| palette.bg | stage background · dim overlay fill |
| palette.wall | flat stroke · block body · ground · terrace slab · window unlit fill + cross stroke |
| palette.flat | flat fill · glyph bud/divider detail fill |
| palette.glyph | glyph group fill · lit-window fill |
| palette.ink | HUD text fill · ring stroke · terrace figure fill |
| revealMs | revealPhaseMs derivation · per-floor ring stagger in render() |
| holdMs | ringStart derivation · endHoldMs derivation |
| durationMs | render() cycle modulo · endHoldMs derivation · dim start |
| hud.year / hud.dayLine / hud.clock | HUD text content |
| type.font | stage font-family · HUD group font-family |
| intensity.glyph / intensity.flatField / intensity.ring | glyph group opacity · flat rect opacity · ring opacity scale in render() |
| geom.stageW/stageH, blockX/blockY/blockW/blockH, wallPad | stage size · viewBox · block + cell geometry |
| geom.glyphW/glyphH/glyphRx, budR, budDividerW | GLYPHS["earbud-case"] renderer |
| geom.winW/winH, winStroke, winXFrac, winGroupOpacity, winLitOpacity, winUnlitOpacity | window cross construction |
| geom.glyphXFrac | glyph + ring center offset |
| geom.zoomFrom / geom.zoomMs | render() pull-back scale interpolation + its completion time (3000 ms, the observed bound) |
| geom.ringStartMs | render() ring onset (9500 ms, inside the observed (8 s, 10 s] bound) |
| geom.ringR/ringStroke/ringFadeMs | ring construction + render() fade |
| geom.sunX/sunY/sunR/sunColor | backdrop sun |
| geom.citySeed/cityCount/cityOpacity/cityWMin/cityWVar/cityHMin/cityHVar/cityJitter/cityClear | city generator (subject-shaping generator geometry — CONFIG per the Cycle-013 clarification) |
| geom.groundH, dimMax, dimMs | ground strip · render() dim ramp |
| geom.hudX/hudY, yearPx, clockPx, yearSpacingPx, clockGapPx | HUD layout |
| geom.terraceFloor/terraceW/figureH/terraceYFrac/terraceSlabH/figOff/figGap/figHeadR/figBodyW/figBodyOff | terrace construction |

Unapplied keys: **0**. Derived key: endHoldMs is NOT a CONFIG literal — it is derived in code (durationMs − floors×revealMs − holdMs) and exposed as window.__derived (codex-plan-review cure; default 6550, swap 8750, both harness-verified).

## 3. CSS-variable setter check
The build uses NO CSS variables: every CONFIG value is consumed by direct JS string construction or style assignment, each setter verified in §2. Unset-variable references: **0** (class not applicable — no var() references exist).

## HIT list
**EMPTY — 0 HITs on the final build** (pre-census literal cures listed in §1 were applied before scoring and the census re-run on the final build, sha bound above).
