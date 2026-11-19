# T128 — config-census leg (guard-config-census v3.1) · config-census.md

Build bound: recreation.html sha256 `5ab7c6ceb8f0d4891731b7c801b0860916a41018514b705811a958922465e398`.

## 1. All-literal scan (outside the CONFIG block)
- Hex colors outside CONFIG: **0** (two pre-census finds cured before scoring: the CSS body background hex — now assigned in JS from `palette.fieldDark`; the exhibit border width `3px` — now `exhibit.borderPx`).
- Numeric literals outside CONFIG, classified per constant:
  - measureText advance factors 0.30 / 0.52 / 0.62 / 0.78 and cap ratio inputs: **structural** (coefficients of the measurement instrument; they shape the fit model, not the subject).
  - Phase/opacity arithmetic 0 / 1, modulo and clamp bounds: **structural** (mathematical identities of the phase machine).
  - CSS 100% widths in the eyebrow/main line rules (`.eyebrow`/`.mainline` width:100% is expressed as `width:100%` in the stylesheet — line containers spanning the stage): **structural** layout (the stage width itself is `stage.w/h` CONFIG).
  - Numerals inside comments (dates, window times): not code literals.
  - Subject-shaping literals outside CONFIG: **0**.

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| Key | Application site |
|---|---|
| exhibit.label / exhibit.sub | lab / sub textContent |
| exhibit.atMs / exhibit.untilMs / exhibit.fadeMs | stateAt() exhibit opacity window |
| exhibit.wPx / hPx / padPx | exEl width / height / padding setters |
| exhibit.tiltDeg | exEl transform rotate |
| exhibit.mono / monoPx | mono textContent / fontSize |
| exhibit.labelPx / subPx | lab / sub fontSize setters |
| exhibit.borderPx | exEl border construction |
| eyebrow | ebEl textContent |
| mainWords[] (array members) | wordEls spans, one per word, in render loop |
| eyebrowAtMs / mainAtMs / wordMs | stateAt() eyebrow + per-word onset arithmetic |
| holdMs | cycleMs() derived cycle |
| eyebrowFadeMs / wordFadeMs | stateAt() fade denominators |
| darkenMs | stateAt() darken ramp (anchor exhibit.untilMs) |
| serif | stage fontFamily setter |
| type.eyebrowPx / eyebrowTrackingPx | ebEl fontSize / letterSpacing |
| type.mainPx / mainGapPx | mainEl fontSize / word span marginLeft |
| geom.eyebrowTopPx / mainTopPx | ebEl / mainEl top setters |
| palette.field / fieldDark | stage background + mix() darken endpoints · body background (fieldDark) |
| palette.ink | mainEl color |
| palette.accent | ebEl color |
| palette.exhibitBg / exhibitInk / exhibitEdge | exEl background / color / border |
| stage.w / stage.h | stage width / height setters |

Unapplied keys: **0**.

## 3. CSS-variable setter check
The build uses NO CSS variables: every CONFIG value is consumed by a direct JS style assignment or string construction, each setter verified present in §2. Unset-variable references: **0** (class not applicable — no var() references exist).

## HIT list
**EMPTY — 0 HITs** (after the two pre-scoring cures recorded in §1).
