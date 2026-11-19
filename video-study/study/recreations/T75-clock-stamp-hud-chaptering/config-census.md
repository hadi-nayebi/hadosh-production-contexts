# T75 — config-census leg (guard-config-census v3.1) · config-census.md

Build bound: recreation.html sha256 f22a562afc47031a8499c6c81f018ff41bb36733f70039b98bee2f5b47b96ddc.

## 1. All-literal scan (outside the CONFIG block)
- Hex colors outside CONFIG: **0** (one pre-census find — the page body background `#0b1226` — was CURED before scoring: the body background is now assigned from `palette.bg` in JS).
- Numeric literals outside CONFIG, classified per constant:
  - Hash/RNG identities — 2166136261, 16777619 (FNV-1a), 0x6D2B79F5 and shift constants 15/61/7/14 (mulberry32): **structural** (mathematical identities of the seeded generator; they do not shape the subject, only which deterministic silhouette a scene name yields).
  - Validation domains — string cap 80, chapter cap 8, ms cap 60000, px bounds 4/120: **structural** (override-schema bounds).
  - Scene-generator formula offsets — window paddings 5/6/7/8 px and building width/height ranges 26/30/52/70 derived FROM CONFIG winW/winH/groundHPx: **structural** (layout arithmetic inside the generator; every scale it multiplies is a CONFIG value).
  - Star-band fraction 0.5 (stars occupy the top half of the ground line): **structural** layout fraction of the context scene.
  - CSS 100% / 50% (scene SVG fill, dot roundness), z-index 5: **structural**.
  - Numerals inside comments (dates, window times): not code literals.
  - Subject-shaping literals outside CONFIG: **0**.

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| Key | Application site |
|---|---|
| hud.yearLine | yearEl.textContent |
| hud.tickColor | tickFill background · tickDot background |
| hud.tickWidthPx | tickEl width · render() tick-fill scale |
| chapters[].clock (array member) | clockEl.textContent at chapter index in render() |
| chapters[].scene (array member) | seedOf() → sceneSVG() silhouette selection |
| chapters[].sceneBg (array member) | scene SVG background rect fill |
| palette.hudInk | clock color · tick track background · star fill |
| palette.bg | stage background · body background · building fill · ground fill |
| palette.accent | year-line color · lit-window fill |
| chapterMs | chapterSpan() |
| holdMs | chapterSpan() |
| stage.width / stage.height | stage style · SVG viewBox |
| type.yearPx / type.yearSpacingPx / type.clockPx | yearEl / clockEl style setters |
| geom.hudTop / geom.hudLeft | hudEl style setters |
| geom.tickGapPx / geom.tickHPx / geom.tickDotPx | tick margin/height · dot size + vertical centering |
| geom.groundHPx / geom.winW / geom.winH | scene generator ground + window geometry |
| geom.starCount / geom.starOpacity / geom.winLitRatio / geom.winOpacity | scene generator stars + lit windows |

Unapplied keys: **0**.

## 3. CSS-variable setter check
The build uses NO CSS variables: every CONFIG value is consumed by a direct JS style assignment or string construction, each setter verified present in §2. Unset-variable references: **0** (class not applicable — no var() references exist).

## HIT list
**EMPTY — 0 HITs** (after the one pre-scoring cure recorded in §1).
