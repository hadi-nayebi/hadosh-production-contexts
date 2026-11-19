# T96 — config-census leg (guard-config-census v3.1) · config-census-attempt2.md (practice Cycle 011 Wave 10)

Build bound: recreation.html sha256 38ffd531648ff0b155947401a776f15de86fe31844b90032127b9d192c9f625f. Census executed by the own-check suite (S2 mutation-based consumption + S4 literal scan) on this build's own CONFIG.

## 1. All-literal scan (outside the CONFIG block)
- Hex colors outside CONFIG: **0** (suite S4).
- Font stacks outside CONFIG: **0** — the only font stack is `type.font`; the CONFIG-error state's monospace is a diagnostic surface, not scene typography (named here in the open).
- Numeric literals outside CONFIG: 48 tokens, all in the whitelisted structural classes, printed per class:
  - LCG identities 1664525, 1013904223, 4294967296: **structural** (seeded-generator mathematics; the seed and per-scene seed offsets are CONFIG: geom.seed, geom.seedOff).
  - Hex-parse constants (slice bounds 1/3/5/7, radix 16): **structural** (color-string parsing of CONFIG values).
  - Loop indices, 0/1 clamps and state values, /2 centering halves of CONFIG sizes, toFixed(1) precision, modulo arithmetic: **structural**.
  - Subject-shaping literals outside CONFIG: **0** — palette, timing anchors, scene durations, HUD, labels, skyline generator geometry, per-scene furniture (kitchen window, street lamps + head radius, dinner frame/windows, silhouette centering derived from stage.width), and phase boundaries (derived from scenes[].ms + turn anchors) all live in CONFIG. The attempt-1 census's structural-context furniture class is closed: those coordinates are geom.kitchen / geom.street / geom.dinner keys now.
- The sole URL in the file is the SVG xmlns namespace identifier — not an asset reference (suite S7).

## 2. Application-site resolution (every CONFIG key → consumed effect, mutation-verified)
The suite walks **101 CONFIG leaves**; for each leaf it reloads the build via `?cfg=` with that leaf mutated and asserts the rendered/computed output (probe renders at 14 instants across all scenes and modes + phaseAt states + cycleMs + validation state) differs. **101/101 consumed; 0 bound-but-unconsumed; 0 unapplied.**
Resolution summary by group: scenes[].name → scene label text (escaped) · scenes[].type → sceneBody renderer dispatch · scenes[].clock → scene label + HUD clock · scenes[].ms → phase intervals + cycle derivation · palette.* / breakPalette.* → sky (incl. warm-up lerp endpoints), buildings/ground/furniture, ink, amber lights, sun · turn.warmStartMs/duskStartMs → phase resolver mode boundaries · turn.atScene/returnScene → validation + return-start derivation · turn.label → dusk label text (escaped) · endHoldMs → cycle + endHold interval · hud.* → HUD texts (escaped) · type.font → stage + SVG text font-family · stage.width → stage size, viewBox, skyline spread, centering · intensity.* → lights/field/label opacities + all plate opacities · geom.* (incl. seedOff, kitchen/street/dinner furniture groups, plate geometry) → generator + furniture + plate application sites in render/sceneBody.
Dead keys: attempt 1's unconsumed geom.counterW / geom.tableW are **removed** (not present in this CONFIG; the counter/table rects take the stage width, as drawn).

## 3. CSS-variable setter check
No CSS variables used; every CONFIG value is consumed by direct JS construction. Unset-variable references: **0**.

## HIT list
**EMPTY — 0 HITs on the attempt-2 build.**
