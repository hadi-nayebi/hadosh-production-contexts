# T92 — guard-config-census leg (Amendment A6, v3.1 + Cycle-013 clarification) · config-census

Build bound: recreation.html sha256 `64e8d4a8ce2f11451f70d9a48de66932ea0a76e5d1fa4083b1ea2bb50512ac03` (final build after the interim-wave cures; census re-run on it — the interim build `2c6f0691…` census below stands except: beatMs removed → per-beat slotMs; bars[]/markText/enterBorderShare added; geom.barBaseH/barTallH removed into beats[1].bars[].h).

## 1. All-literal scan (outside the CONFIG block)
- Hex/rgba colors in logic: **0**. Hex in the `<style>` block: `#0b1526` ×1 — the page background OUTSIDE the stage (browser chrome around the artifact) — classified **structural/page**, not subject-shaping: the subject stage background is palette.bg from CONFIG.
- Durations in logic: **0** (all timing derives from beats[].slotMs/leadMs/clearMs + enterMs/endHoldMs via stateAt/cycleMs; chart draw-on sub-windows are phase fractions of the enter progress, not durations).
- Numeric literals in logic: `0`, `1`, `2`, `3` and loop counters — every one classified **structural**: loop indices and bounds (window rows/cols counters, unit counter, step counter bound is geom.stepCount), array-tuple indices (blocks entries b[0..3] — the VALUES are CONFIG data; the index is an identity), bar-slot multipliers (bw+gap)×1/×2/×3 (slot identities, not coefficients — the slot positions derive from CONFIG barW/barGap/barInsetX), phase constants (p bounds 0/1, modulo arithmetic), the shownIdx −1 sentinel, `Math.max(lead,1)` guard identity, string "px"/"em" unit suffixes (not counted as numerics). No geometry, no coefficient, no ratio outside CONFIG after the pre-cure cures below: chart inset, bar inset, step start gap/bar height/mark gap/count, numeral x/gap/baseline ratio, status weight, scene/window generator geometry are ALL CONFIG (geom/type) — including scene-generator geometry, per the Cycle-013 clarification.
- Font stacks: the only font stack in the file is CONFIG `type.font`, applied via `stage.style.fontFamily` (SVG text sets font-family from the same key) — no CSS font stack exists outside CONFIG ✓ (Cycle-013 clarification).
- CSS in `<style>`: positioning/box model only (absolute, flex centering on #units — layout identities), margins 0/auto (page layout, structural). No colors, sizes, spacings, durations, or weights (status weight moved to type.statusWeight in the pre-cures).

## 2. Application-site resolution (every CONFIG key → ≥1 site, incl. nested/array keys)
| Key | Application site(s) |
|---|---|
| hud.sceneYear | frame() lead phase → #hudYear textContent |
| hud.evidenceYear | showBeat() → #hudYear textContent; swap target (2025→2031 verified) |
| hud.dayLine | #hudDay textContent at construction |
| hud.clock | #hudClock textContent at construction |
| beats[0..1].kind | showBeat()/frame() branch (card vs chart construction + per-phase opacity routing) |
| beats[0..1].status | showBeat() → #cardStatus textContent |
| beats[0..1].place, .year | showBeat() → #cardPlace textContent (place + " · " + year; separator is a format identity, structural) |
| beats[0..1].claim | showBeat() → #cardClaim textContent |
| beats[0..1].source | showBeat() → #cardSource textContent + rule/source display toggle |
| beats[0].value | showBeat() → #valueRow textContent; deriveUnits() fraction fallback |
| beats[1].value | buildChart() → SVG numeral textContent; parsePercent() → hangHeight() |
| beats[0].units{total,marked} | deriveUnits() FALLBACK (the value fraction is authoritative and re-derives the units — wave cure) → unit-row construction in showBeat() + per-unit landing progress in frame() |
| beats[0..1].leadMs / slotMs / clearMs | stateAt() lead/slot/clear-phase boundaries; cycleMs() sum |
| beats[1].bars[]{h,fillKey} | buildChart() bar rects (height + palette lookup by fillKey); series length derives the step origin |
| palette.bg / .card / .ink / .accent / .bar | stage background / card background / ink setters (place, claim, HUD, numeral, steps) / accent setters (status, source, rule, card border, beam, tall bars, marked-unit border) / bar setters (unit fill, chart b1 + hanging bar; swap target verified) |
| enterMs / endHoldMs | stateAt() enter + end-hold math; cycleMs() total (swap: slotMs 6000+2000 + endHold 1000 → cycle 9000 verified) |
| type.font | stage.style.fontFamily + SVG text font-family (swap target verified) |
| type.hudYearPx / hudDayPx / clockPx / statusPx / placePx / claimPx / sourcePx / valuePx | fontSize setters on the eight text elements (valuePx also drives the SVG numeral size + baseline) |
| type.statusSpacingEm / placeSpacingEm / sourceSpacingEm / hudDaySpacingEm | letterSpacing setters |
| type.claimLineHeight / statusWeight | #cardClaim lineHeight / #cardStatus fontWeight setters |
| stage.width | stage width setter + valueRow/units row widths |
| geom.stageH | stage height setter |
| geom.hudX / hudY / hudDayGapPx | HUD position + day-line margin setters |
| geom.cardX / cardY / cardW / cardPad / borderW / risePx | card position/width/padding/border setters + enter-phase translateY |
| geom.gapAfterStatus / gapBeforeClaim / gapBeforeRule / gapBeforeSource / ruleH / ruleOpacity | marginTop/height/opacity setters |
| geom.valueY / unitY / unitSize / unitGap / unitBorderW | value row + unit row position/size/gap/border setters |
| geom.chartX / chartY / chartW / chartH / chartInsetX | chart position/size/viewBox + beam inset math |
| geom.beamY / beamH / barW / barGap / barInsetX | beam + bar rect geometry in buildChart() (bar heights are beats[1].bars[].h data) |
| geom.markText / enterBorderShare | "?" mark textContent in buildChart() / border-vs-text split of the enter phase in frame() |
| geom.pxPerPercent / hangGap | hangHeight() derivation (abs(parsed %) × pxPerPercent; swap −25% → 55.0 = 25/17 × 37.4 verified) + hanging-bar offset |
| geom.stepW / stepBarH / stepRise / stepDx / stepMarkGap / markPx / stepCount / stepStartGap | question-step rects + "?" marks in buildChart() |
| geom.numeralX / numeralGap / numeralBaseRatio | SVG numeral position in buildChart() |
| geom.sceneDim | #scene opacity (Cure 1 separation — card/numeral/chart are outside #scene) |
| geom.sceneBlock / sceneWin / sceneWinOpacity | block/window background + window opacity in the scene generator |
| geom.blocks[][] | block position/size in the scene generator |
| geom.winW / winH / winGapX / winGapY / winCols / winRows / winOffX / winOffY / winInset | window grid loop in the scene generator |

No unapplied key. No key lacks a site.

## 3. CSS-variable setter check
The build uses **no CSS variables**: every CONFIG value is consumed through direct JS style setters or SVG attribute setters (listed above), each assigning unconditionally at construction. There is no var() reference whose setter could be missing — the `geom.pieSize` false-negative class cannot occur in this construction. Check result: PASS (class absent by construction, verified by grep: `var(` → 0 hits).

## HIT list — EMPTY (PASS for this leg)
Pre-cure cures landed before the interim census: status font-weight (CSS literal) → type.statusWeight; chart left inset (6), beam width derivation, bar inset (10), step start gap (16), step bar height (2), step mark gap (4), step count (4), numeral x (66) + baseline ratio (0.8) → geom. Interim-wave cures landed before this final census: fixed bar topology + literal "?" (purity lens) → beats[1].bars[] + geom.markText; validation added (validate() runs after override; PROBLEMS exposed). The census above runs on the cured final build.
