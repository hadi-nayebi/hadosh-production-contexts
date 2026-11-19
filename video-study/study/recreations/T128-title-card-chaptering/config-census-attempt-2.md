# T128 — config-census leg (guard-config-census v3.1) · attempt 2

Build bound: recreation.html sha256 `d6b9e473b27344c288ece36c95edf46fecea961f4be44cb61d35a0542a75915f`. Census runs against attempt 2's own CONFIG. Consumption is asserted by EFFECT MAPPINGS in the own-check suite (checkpoints/stage-D-checks.txt, 116 checks), not by binding alone (A-C006-2).

## 1. All-literal scan (outside the CONFIG block)
- Hex colors outside CONFIG: **0**.
- Numeric literals outside CONFIG, enumerated by the suite and classified per class:
  - Measurement-instrument coefficients — advance classes 0.62 / 0.52 / 0.30 / 0.28 / 0.60, cap-height ratios 0.72 / 0.565: **structural** (coefficients of the fit model; they shape the model, not the subject).
  - Contrast-instrument constants — 0.03928 / 12.92 / 0.055 / 1.055 / 2.4 / 0.2126 / 0.7152 / 0.0722 / 0.05, hex-parse offsets 1 / 3 / 5 and divisor 255: **structural** (the WCAG luminance formula).
  - Phase/opacity arithmetic 0 / 1, clamp bounds, the halving 2 in strikeTopPx, array indices and loop bounds: **structural** (mathematical identities of the phase machine).
  - Typed-state slice lengths 6 / 12 and 1 / 4 in fitRows: **structural** (the fit instrument's enumerated states).
  - CSS/layout identities — "100%" widths/heights, translate(-50%,-50%) centering: **structural** layout (stage size itself is stage.w/h CONFIG).
  - Defensive fallbacks `||700`, `||1.2`, `||1.15`, `||1.3` beside the CONFIG weight/line-height reads: **structural-with-note** — defaults for CONFIG keys that the filed CONFIG always supplies; never operative on the filed build; the keys themselves are CONFIG-bound and consumed (see §2).
  - SVG path data: carried INSIDE CONFIG (map.contours) — no path literals outside CONFIG.
  - Subject-shaping literals outside CONFIG: **0**.

## 2. Application-site resolution + consumed effect (every CONFIG key)
| Key | Application site | Consumed effect asserted |
|---|---|---|
| exhibit.label / sub / mono | lab / sub / mono textContent | swap changes exhibit text (fit rows) |
| exhibit.atMs / exitAtMs / exitMs | stateAt() exhibit window | exit window moves with keys (4100 EXIT / 4200 MAP under shifted exitAtMs) |
| exhibit.exitDxPx / exitDyPx / exitScale | render transform construction | transform consumes all three (source site + exhibitP progress) |
| exhibit.wPx / hPx / padPx / borderPx / tiltDeg | exEl size / padding / border / rotate setters | construction sites in DOM build |
| exhibit.monoPx / labelPx / subPx | fontSize setters | fit rows for label/sub |
| map.label / labelPx / labelTopPx / labelTrackingPx | mapLab textContent + style setters | fit row + DOM sites |
| map.fadeTo | stateAt() mapO derivation | mapO at main onset = fadeTo exactly |
| map.contourO[] / contours[] | SVG construction (stroke-opacity / path d) | construction consumes both arrays |
| eyebrow | ebEl per-char spans + completion derivation | completion derives from glyph count |
| mainText | mainEl per-char spans + completion derivation | completion derives from glyph count |
| mainFinalCharAccent | final-char colour branch | trailing "." renders in palette.strike |
| eyebrowAtMs / eyebrowCharMs | stateAt() eyebrowChars | chars @5500 = 1; completion 6470 (7490 at charMs 120) |
| strikeAtMs / strikeMs | stateAt() strikeP | progress 0.25 @7700 |
| mainAtMs / mainCharMs | stateAt() mainChars | chars @9500 = 4 |
| holdMs / exitMs | cycleMs() derivation | cycle 13540; 11140 at holdMs 1000 |
| exitStrikeLead | stateAt() strikeO | strike fades ahead of card in EXIT-OUT |
| serif | stage fontFamily setter | construction site |
| type.eyebrowPx / eyebrowTrackingPx | ebEl fontSize / letterSpacing + fit model | eyebrow ink width 270.00 |
| type.mainPx | mainEl fontSize + fit model | main ink height 31.68 |
| type.eyebrowStack | ebEl fontFamily + fit model stack test | mono ink model (11.30) selected by stack |
| type.eyebrowWeight / mainWeight / exhibitWeight | fontWeight setters (mono/lab/ebEl/mainEl) | all three setters consume their key |
| type.lineHeightEyebrow / lineHeightMain / lineHeightExhibit | lineHeight setters; eyebrow line-height also feeds strikeTopPx | strike top 89 from lineHeightEyebrow 1.2 |
| type.strikePx | stEl height + strikeTopPx | strike geometry |
| geom.eyebrowTopPx / mainTopPx | ebEl / mainEl top setters | construction sites |
| palette.field / fieldDark | stage background mix endpoints + body background | darken derivation endpoints |
| palette.ink | mainEl / ebEl / mapLab colour + SVG stroke | construction sites |
| palette.strike | stEl background + final-period span colour | contrast rows (fit-table / build record) |
| palette.exhibitBg / exhibitInk / exhibitEdge | exEl background / colour / border | construction sites |
| stage.w / stage.h | stage size setters + SVG viewBox + fit boxes | swap to 400 re-derives fit boxes |

Unapplied keys: **0** (every key above carries a suite-asserted effect or a named construction site verified in the suite's consumption census, 24 effect mappings, all PASS).

## 3. CSS-variable setter check
The build uses NO CSS variables: every CONFIG value is consumed by a direct JS style assignment, a string construction, or the stateAt/fit derivations in §2. Unset-variable references: **0** (class not applicable — no var() references exist).

## HIT list
**EMPTY — 0 HITs.**
