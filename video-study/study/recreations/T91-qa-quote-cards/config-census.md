# T91 — guard-config-census leg (Amendment A-C008, v3.1 + Cycle-013 clarification) · config-census · attempt 3

Build bound: recreation.html sha256 `10a4da2d1a78664f910ab20fdd27d0f0b588b6372d7a9a94e78a48c819184e83`.

## 1. All-literal scan (outside the CONFIG block)
- Hex colors in logic, CSS, or HTML: **0**. All 7 subject colors live in CONFIG palette{bg, card, ink, accent, edge, chip, page}.
- Durations in logic: **0** (all timing derives from CONFIG: per-card slotMs/revealSpanMs and the schedule group; the two schedule modes are specimen and sequence).
- Numeric literals in logic (strings and comments stripped, identifier digits excluded): {0:75, 1:20, 2:8, 3:1, 5:1, 6:1, 9:1, 10:6, 20:1, 500:1, 1000:1, 10000:1, 60000:2, 3600000:1, 0.001:2} — every one classified **structural**, per literal: 0/1/2/3 — phase bounds, the card-free index sentinel (−1 as a sign on 1), loop indices and the reveal interior-division indices ((k−2)/(n−2), loop start 3), array/first-element indices; 5 — the line-height validation bound [1, 5] endpoint; 6 — the hex-length quantifier {6} in the color validator; 9 — the character-range bound in the same validator's [0-9a-fA-F] class; 10 — the fit-overflow rounding factor (round to 0.1px); 20 — the roleMaxLines validation bound [1, 20] endpoint; 500/10000/3600000/1000 — the validator's practical domain caps (MAX_TYPE / MAX_GEOM / MAX_MS / the reading-rate cap), named constants at the validator; 60000 — the milliseconds-per-minute conversion in the reading-interval computation; 0.001 — the region-containment tolerance in the geometry validation. No geometry, coefficient, ratio, or duration outside CONFIG: the second-line reveal anchor (2000ms / 0.25 of span) lives in CONFIG schedule{secondLineMs, secondLineFrac}; the role-line limit lives in CONFIG fit.roleMaxLines; the card border style lives in CONFIG type.borderStyle; the error-panel padding and warning-strip height live in geom{errPad, warnH}.
- Content literals: the separator string lives only in CONFIG labels.sep (consumed at the HUD line and the role/year line). The border style string lives only in CONFIG type.borderStyle (consumed at the border setter). The measurer takes its font style from CONFIG (type.quoteStyle for the quote kind, type.markStyle for the other kinds). HTML text content carries no subject text (all text nodes are filled from CONFIG by setters). Font stacks: the only stack is CONFIG type.font, applied via stage.style.fontFamily and the canvas measurer — no CSS font stack exists outside CONFIG ✓.
- CSS in `<style>`: positioning/box model only + margin 0 (page layout, structural); the stylesheet parses clean (12 rules, every declaration well-formed — own-check suite).

## 2. Application-site resolution + consumption census
Every CONFIG key resolves to at least one application site, and the own-check suite's mutation census asserts a consumed effect for **101/101 leaf keys, 0 unconsumed** (each leaf mutated in place on the module CONFIG; the observable signature — schedules in both modes, state sweeps, derived geometry at both widths, fit outcomes incl. long-quote and wide-token probes, rendered strings, validation probes incl. boundary probes, replacement/derivation probes, reveal tables, reading intervals — must change; the census restores every leaf and re-verifies the base signature). Two leaves the first census pass could not see were cured in the open before this filing: schedule.replaceCards (the merged configuration's flag now drives the wholesale-replacement branch, not only an override-carried flag) and the derivation/reading probes were added for schedule.readingWpm + schedule.defaultRevealSpanMs.

| Key group | Application site(s) |
|---|---|
| hud.year, hud.dayLine | hudLine textContent (joined by labels.sep) |
| hud.clock | hudClock textContent |
| cards[].quote / .speaker / .role / .year | quote line layout (wrapped lines are rendered text), speaker/role textContent (role joined to year by labels.sep), token counts |
| cards[].slotMs / .revealSpanMs | sequence schedule resolution + reveal staging |
| palette.* (7) | stage/card/border/tag/mark/role/bar/page/warning-strip style setters |
| labels.tag / .mark / .sep | tag + mark textContent; sep consumed at both string joins |
| enterMs | sequence-mode schedule (slot entrances) + entrance progress |
| schedule.mode / .specimenCard | schedule resolution (default mode; specimen slot index) |
| schedule.specimenRevealMs / .specimenHoldMs / .specimenExitMs / .specimenFreeMs | specimen slot table (reveal span, full hold, exit, card-free interval) |
| schedule.exitMs / .seqFreeMs | sequence exit phases; sequence card-free interval |
| schedule.minHoldMs / .minHoldFloorMs | validation: reveal + minimum hold + exit inside each sequence slot; the specimen full-hold floor (the floor term follows the selected card's token count) |
| schedule.secondLineMs / .secondLineFrac | reveal stage table for 3+ line wraps |
| schedule.replaceCards | override resolution (wholesale list replacement when the merged flag is set with a cards array) |
| schedule.readingWpm | reading-interval computation (sequence slot validation + replacement slot derivation) |
| schedule.defaultRevealSpanMs | replacement derivation (reveal span filled for replaced cards that omit it) |
| fit.floorPx / .stepPx / .minLegiblePx / .maxSteps / .roleMaxLines | fit contract shrink floor, step, legibility bound, step bound, and role-line limit |
| type.font + sizes + line-heights + styles + spacings + borderStyle | fontFamily/fontSize/lineHeight/fontStyle/letterSpacing setters on all text elements + canvas measurer font string + the card border setter |
| stage.width / .minWidth | effective stage width derivation; the supported-minimum error in the recompute path |
| geom.* (all) | stage/HUD/card/tag/mark/quote/attribution/error-panel/warning-strip geometry setters + derived quote zone and attribution width + region validation |

Scaled/unscaled classification (geometry): the scale factor applies to exactly the H_KEYS list (hudX, cardX, cardW, cardPad, tagX, tagPadX, markX, quoteX, quoteW, attrX, attrTextX); geom.borderW and geom.attrBarW are applied at face value (stroke widths, not layout geometry) — both are consumed, unscaled, asserted in the own-check suite.

## 3. CSS-variable setter check
The build uses **no CSS variables** (grep `var(` → 0 hits): every CONFIG value is consumed through direct JS setters or the pure schedule/fit functions. Check result: PASS (class absent by construction).

## HIT list — EMPTY (PASS for this leg)
Literal count by class: hex 0 · durations 0 · subject-shaping numerics outside CONFIG 0 · structural numerics as itemized in §1, each classified per literal. Consumption 101/101.
