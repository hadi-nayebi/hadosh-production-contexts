# T81 — guard-config-census leg (Amendment A6, v3.1 + Cycle-013 clarification) · config-census

Build bound: recreation.html sha256 `b7d84a63dcc8bb73d4dc8a16bec6eb3f3ae62c73d0ef71b1cdafb3936f5d0294` (final build; census re-run after the fit cures).

## 1. All-literal scan (outside the CONFIG block)
- Hex/rgba colors in logic: **0**. Hex in the `<style>` block: `#0b1526` ×1 — the page background OUTSIDE the stage (browser chrome around the artifact) — classified **structural/page**, not subject-shaping: the subject stage background is palette.bg from CONFIG.
- Durations in logic: **0** (all timing derives from enterMs/holdMs/endHoldMs via stateAt/cycleMs).
- Numeric literals in logic (counted): `0` ×13, `1` ×10, `2` ×3, `3` ×2 — every one classified **structural**: loop indices and bounds (win rows/cols counters, for-loop starts), array-tuple indices (blocks entries b[0..3] — the VALUES are CONFIG data; the index is an identity), phase constants (p bounds 0/1, modulo arithmetic), the shownIdx −1 sentinel, string "px"/"em" unit suffixes (not counted as numerics). No geometry, no coefficient, no ratio outside CONFIG: rise, gaps, rule height/opacity, window offsets/inset/opacity, scene dim, sun geometry, block geometry, stage/card geometry are ALL CONFIG (geom) — including scene-generator geometry, per the Cycle-013 clarification (generator constants are subject-shaping).
- Font stacks: the only font stack in the file is CONFIG `type.font`, applied via `stage.style.fontFamily` — no CSS font stack exists outside CONFIG ✓ (Cycle-013 clarification).
- CSS in `<style>`: positioning/box model only (absolute, border-radius:50% on #sun = circle identity, structural), margins 0/auto (page layout, structural). No colors, sizes, spacings, or durations.

## 2. Application-site resolution (every CONFIG key → ≥1 site, incl. array members)
| Key | Application site(s) |
|---|---|
| taxonomy[] (each of 5) | validate() membership check on every cards[].status (runs AFTER ?cfg= merge); the swap's "ALREADY MEASURED" resolves through it |
| cards[0..2].status | showCard() → #cardStatus textContent |
| cards[0..2].place, .year | showCard() → #cardPlace textContent (place + " · " + year; the separator is a format identity, structural) |
| cards[0..2].claim | showCard() → #cardClaim textContent |
| cards[0..2].source | showCard() → #cardSource textContent |
| palette.card | card.style.background |
| palette.ink | #cardPlace / #cardClaim color |
| palette.accent | #cardStatus / #cardSource color, card borderLeft, rule background, sun background |
| palette.bg | stage.style.background |
| enterMs / holdMs / endHoldMs | stateAt() slot + phase math; cycleMs() total |
| type.font | stage.style.fontFamily (inherits to all card text) |
| type.claimPx / statusPx / placePx / sourcePx | fontSize setters on the four text elements |
| type.statusSpacingEm / placeSpacingEm / sourceSpacingEm | letterSpacing setters |
| type.claimLineHeight | #cardClaim lineHeight |
| geom.stageW / stageH | stage width/height setters |
| geom.cardX / cardY / cardW / cardPad / borderW | card position/width/padding/border setters |
| geom.risePx | enter-phase translateY in frame() |
| geom.gapAfterStatus / gapBeforeClaim / gapBeforeRule / gapBeforeSource / ruleH / ruleOpacity | marginTop/height/opacity setters |
| geom.sceneDim | #scene opacity (Cure 1 separation — card is outside #scene) |
| geom.sceneBlock / sceneWin / sceneWinOpacity | block/window background + window opacity in the scene generator |
| geom.sunX / sunY / sunD | sun position/size in the scene generator |
| geom.blocks[][] | block position/size in the scene generator |
| geom.winW / winH / winGapX / winGapY / winCols / winRows / winOffX / winOffY / winInset | window grid loop in the scene generator |

No unapplied key. No key lacks a site.

## 3. CSS-variable setter check
The build uses **no CSS variables**: every CONFIG value is consumed through direct JS style setters (listed above), each of which assigns unconditionally at construction. There is no var() reference whose setter could be missing — the `geom.pieSize` false-negative class cannot occur in this construction. Check result: PASS (class absent by construction, verified by grep: `var(` → 0 hits).

## HIT list — EMPTY (PASS for this leg)
Pre-cure cures landed before this final census: letter-spacings (.14em/.12em CSS literals) → type.*SpacingEm; card gaps (4/12/14/8 px) and rule height/opacity → geom; window generator offsets (10/12), inset (6), window opacity (0.5) → geom. The census above runs on the cured final build.
