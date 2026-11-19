# T91 — guard-config-census leg (Amendment A6, v3.1 + Cycle-013 clarification) · config-census · attempt 2

Build bound: recreation.html sha256 `64c636b00e52fe7ae1819749e8e4f6793315f523618999350d59c2527e12e5a7`.

## 1. All-literal scan (outside the CONFIG block)
- Hex colors in logic, CSS, or HTML: **0**. All 7 subject colors live in CONFIG palette{bg, card, ink, accent, edge, chip, page}.
- Durations in logic: **0** (all timing derives from CONFIG: cardMs/enterMs/endHoldMs for the uniform mode; per-card slotMs/revealSpanMs and the schedule group for the other modes).
- Numeric literals in logic (strings and comments stripped): only **0, 1, 2, 3, 6, 10** — every one classified **structural**: phase bounds and the card-free index sentinel (0/−1 class: −1 appears as a sign on 1), loop indices and the reveal interior-division indices (2/3 in (k−2)/(n−2) and the loop start 3), the hex-length quantifier {6} in the color validator, the fit-overflow rounding factor 10 (round to 0.1px). No geometry, coefficient, ratio, or duration outside CONFIG: the second-line reveal anchor (2000ms / 0.25 of span) lives in CONFIG schedule{secondLineMs, secondLineFrac}; the error-panel padding lives in geom.errPad.
- Content literals: the separator string lives only in CONFIG labels.sep (consumed at the HUD line and the role/year line; the own-check suite asserts no separator literal exists after the CONFIG block). HTML text content carries no subject text (all text nodes are filled from CONFIG by setters). Font stacks: the only stack is CONFIG type.font, applied via stage.style.fontFamily and the canvas measurer — no CSS font stack exists outside CONFIG ✓.
- CSS in `<style>`: positioning/box model only + margin 0 (page layout, structural).

## 2. Application-site resolution + consumption census
Every CONFIG key resolves to at least one application site, and the own-check suite's mutation census asserts a consumed effect for **95/95 leaf keys, 0 unconsumed** (each leaf mutated; the observable signature — schedules in all three modes, state sweeps, derived geometry at both widths, fit outcomes incl. long-quote probes, rendered strings, validation probes, replacement probes, reveal tables — must change).

| Key group | Application site(s) |
|---|---|
| hud.year, hud.dayLine | hudLine textContent (joined by labels.sep) |
| hud.clock | hudClock textContent |
| cards[].quote / .speaker / .role / .year | quote line layout, speaker/role textContent (role joined to year by labels.sep), token counts |
| cards[].slotMs / .revealSpanMs | sequence schedule resolution + reveal staging |
| palette.* (7) | stage/card/border/tag/mark/role/bar/page style setters |
| labels.tag / .mark / .sep | tag + mark textContent; sep consumed at both string joins |
| cardMs / enterMs / endHoldMs | uniform-mode schedule + entrance progress |
| schedule.mode / .specimenCard | schedule resolution (default mode; specimen slot index) |
| schedule.specimenRevealMs / .specimenHoldMs / .specimenExitMs / .specimenFreeMs | specimen slot table (reveal span, full hold, exit, card-free interval) |
| schedule.exitMs / .seqFreeMs | sequence exit phases; sequence card-free interval |
| schedule.minHoldMs / .minHoldFloorMs | validation: reveal + minimum hold + exit inside each sequence slot |
| schedule.secondLineMs / .secondLineFrac | reveal stage table for 3+ line wraps |
| schedule.replaceCards | override resolution (wholesale list replacement when set with a cards array) |
| fit.floorPx / .stepPx | fit contract shrink floor and step |
| type.font + sizes + line-heights + styles + spacings | fontFamily/fontSize/lineHeight/fontStyle/letterSpacing setters on all text elements + canvas measurer font string |
| stage.width | effective stage width derivation |
| geom.* (all) | stage/HUD/card/tag/mark/quote/attribution/error-panel geometry setters + derived quote zone and attribution width |

## 3. CSS-variable setter check
The build uses **no CSS variables** (grep `var(` → 0 hits): every CONFIG value is consumed through direct JS setters or the pure schedule/fit functions. Check result: PASS (class absent by construction).

## HIT list — EMPTY (PASS for this leg)
Literal count by class: hex 0 · durations 0 · subject-shaping numerics outside CONFIG 0 · structural numerics 43 occurrences of the whitelisted set {0,1,2,3,6,10}, each classified above. Consumption 95/95.
