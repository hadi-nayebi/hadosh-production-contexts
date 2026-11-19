# T92 — guard-config-census leg (Amendment A6, v3.1) · config-census — ATTEMPT 2

Build bound: recreation.html sha256 `c2a74711913d05672e041f9d76a6496d41fd65b170ec0892d891b3b1e9ca53b5` (attempt-2 final candidate, post-neutralization). Census runs against attempt 2's OWN CONFIG (148 leaf keys walked).

## 1. All-literal scan (outside the CONFIG block)
- Hex colors in logic/style: **0** (the page background literal is gone from `<style>`; the body background is set from palette.pageBg at startup; the only hex values in the file live inside CONFIG). Hex found outside CONFIG: none.
- Durations in logic: **0** — every duration derives from beats[].slotMs / dialogue cues / enterBorderMs / clearMs / restoreMs + endHoldMs via stateAt/cycleMs; chart sub-windows are fractions of the construction progress from chartReveal.
- Numeric literals in logic: 0, 1, 10, 1e-9, 2, 3, 4 — each classified **structural**: 0/1 are phase bounds, progress clamps, loop starts and the opacity identity; 2 is the blocks-tuple pair index bound; 3 is the tuple index bound (blocks entries b[0..3] — the VALUES are CONFIG data); 4 appears only in a source comment naming the measured segment second the border-first form was observed at (a citation, not a value the code consumes); 10 is the parseInt radix; 1e-9 is the zero-division guard epsilon in the segment function (a mathematical guard identity, not a shaping coefficient); -1 is the shownIdx sentinel. No geometry value, coefficient, or ratio outside CONFIG: every shaping number (phase timings, cue offsets, reveal windows, stagger spans, type sizes, geometry, palette) is a CONFIG key consumed below.
- Font stacks: only CONFIG type.font (stage fontFamily + SVG text font-family). No CSS font stack outside CONFIG ✓.
- CSS in `<style>`: positioning/box model only; margins/padding 0 (page layout, structural). No colors, sizes, spacings, durations, or weights.

## 2. Application-site resolution (every CONFIG key → ≥1 consumed effect)
| Key group | Consumed effect (site) |
|---|---|
| hud.sceneYear | hudYearAt() restore phase → #hudYear textContent |
| hud.dayLine / hud.clock | #hudDay / #hudClock textContent at construction |
| beats[].kind | showBeat()/frame() branch (card vs chart construction + per-phase opacity routing) |
| beats[].status / .place / .year / .claim / .source | showBeat() → card text nodes; .year → hudYearAt() per-beat HUD year |
| beats[0].value | #valueRow textContent; deriveUnits() fraction authority |
| beats[1].value | buildChart() numeral text; parsePercent() → hangHeight() (signed) |
| beats[0].units{total,marked} | deriveUnits() fallback → unit-row construction + per-unit landing progress |
| beats[].slotMs / .clearMs / .restoreMs | stateAt() slot/clear/restore boundaries; cycleMs() sum |
| beats[].dialogue{numberSpoken,challenge,graphicEntrance,followUp} | stateAt() entrance/settle onsets derive from graphicEntrance/followUp (single onset source); validate() ordering/completion checks |
| beats[].enterBorderMs | stateAt() border/fill split of the entrance; frame() border progress |
| beats[1].bars[]{h,fillKey} | buildChart() bar rects (height + palette lookup); series length derives step origin and stagger count |
| chartReveal{beamStart,beamSpan,barsStart,barsSpan,hangStart,hangSpan,stepsStart,stepsSpan,numeralStart,numeralSpan} | chartStagesFor()/drawChart() per-group reveal windows (beam width, bar scale, hang scale, step opacity, numeral opacity) |
| palette.bg / .card / .ink / .accent / .bar / .pageBg | stage background / card + diagnostic background / ink setters / accent setters / bar setters / document body background |
| endHoldMs | stateAt() end-hold math; cycleMs() total |
| type.font + all type sizes/spacings/claimLineHeight/statusWeight | fontSize/letterSpacing/lineHeight/fontWeight setters on the nine text elements; valuePx also drives the SVG numeral size + baseline |
| stage.width | stage width setter + valueRow/units row widths |
| geom.* (stageH, HUD, card, gaps, rule, value/unit row, chart geometry incl. markText, beam/bar/step geometry, pxPerPercent, hangGap, numeral placement, scene generator incl. blocks[][] and window grid) | position/size setters + buildChart() geometry + scene generator loops — each key read at its construction site; the stage-3/stage-5 checkpoints and the own-check suite assert the effect mappings (consumption), not bindings alone |

Consumption was asserted by the own-check suite's effect mappings (cue shift moves onsets; $replace shrinks arrays; stepCount change completes the fifth step; signed percent flips the hang side; beat-year override changes the HUD) — 148 leaf keys walked, **0 bound-but-unconsumed**.

## 3. CSS-variable setter check
No CSS variables are used: every CONFIG value is consumed through direct JS style setters or SVG attribute setters. `var(` → 0 hits. PASS (class absent by construction).

## HIT list — EMPTY (PASS for this leg)
