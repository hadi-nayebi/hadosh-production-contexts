# T76 — config-census leg (guard-config-census v3.1) · config-census.md

Build bound: recreation.html sha256 2111a898988054b7f06e3d6b39ceb33c3a981faee76df3c3e0a27da091fc33f3. (Re-issued on the post-cure final build: the census's literal scan and key resolution were re-run in full. Changes since the interim build: the timing architecture — per-state `durMs` replacing the single `stateMs` key, per the interim timing cure — and one logic guard (first-cycle seam-flip suppression, per the interim motion cure) introducing no new literals beyond the cycle comparisons classified in §1.)

## 1. All-literal scan (outside the CONFIG block)
- Hex colors outside CONFIG: **0** (verified by scan of the file with the CONFIG block excised).
- Numeric literals outside CONFIG, classified per constant:
  - Hash/RNG identities — 2166136261, 16777619 (FNV-1a), 0x6D2B79F5 and shift constants 15/61/7/14 (mulberry32): **structural** (mathematical identities of the seeded generator; they select which deterministic silhouette the scene name yields, they do not scale the subject).
  - Easing identity — exponent 3 in `Math.pow(1 - p, 3)`: **structural** (the easeOutCubic identity; the easing NAME is a CONFIG key, `flipEasing`, resolved through the EASINGS map).
  - Validation domains — string caps 80/40/120/10, state cap 8, ms cap 60000, year bounds 1900/2200, px bounds 4/120, stage bounds 200/720 and 120/480, unit bound 1, geom bound 720, spacing bounds 0/8: **structural** (override-schema bounds; they reject out-of-domain swaps, they do not shape the default subject).
  - Scene-generator formula offsets — window paddings 5/6 and steps 7/8 px, building start −6, star radius 1: **structural** layout arithmetic inside the generator; every scale it multiplies (winW/winH/bWMin/bWVar/bHMin/bHVar/bGapMin/bGapVar/groundHPx/starCount) is a CONFIG value in `geom` (bound per the Cycle-013 clarification: generator geometry ranges are subject-shaping and therefore live in CONFIG, above).
  - Star-band fraction 0.5 (stars occupy the top half above the ground line): **structural** layout fraction of the context scene.
  - CSS 100% (scene SVG fill), 50% (dot roundness), z-index 5/4, margin/padding 0: **structural**.
  - Numerals inside comments (window times, the 14000 ms cycle, years in prose): not code literals.
  - Subject-shaping literals outside CONFIG: **0**. One pre-census find — the year-wrap height factor 1.25 standing in logic — was CURED before scoring: it is now `geom.wrapEm`, applied at the yearWrap height setter.

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| Key | Application site |
|---|---|
| hud.sceneYear | yearFor() for scene states → year spans in render() |
| hud.dayLine | dayPart.textContent |
| hud.clock | clockEl.textContent (set once) · render() return |
| states[].kind (array member) | state selection + card/scene branches in render() |
| states[].durMs (array member) | statesMs() sum · cumulative state boundaries in render() |
| states[].seedYear (array member) | yearFor() for seed states |
| states[].cardStatus (array member) | cardStatusEl.textContent in render() |
| states[].cardPlace (array member) | cardPlaceEl.textContent in render() |
| palette.bg | body background · stage background · scene SVG base rect |
| palette.hudInk | clock color · cardPlace color · star fill |
| palette.accent | year spans + dayPart color · tick/dot background · card border + cardStatus color · lit-window fill |
| palette.card | cardEl background |
| palette.scene | building fill · ground fill in scene SVG |
| flipMs | flip window test in render() |
| endHoldMs | totalMs() · endHold branch in render() |
| flipEasing | EASINGS lookup in render() |
| stage.width / stage.height | stage style · SVG viewBox |
| type.font | stage fontFamily setter |
| type.sans | year spans + dayPart + cardStatus fontFamily setters |
| type.yearPx | year spans + dayPart fontSize · yearWrap height (via geom.wrapEm) |
| type.clockPx | clockEl fontSize |
| type.cardStatusPx / type.cardPlacePx | card text fontSize setters |
| type.daySpacingPx | year spans + dayPart letterSpacing |
| type.cardSpacingPx | cardStatus letterSpacing |
| intensity.fg | hudEl opacity · cardEl opacity (× cardP in render()) |
| intensity.sceneSeed | scene dim targets in render() |
| geom.hudTop / geom.hudLeft | hudEl style setters |
| geom.tickGapPx / geom.tickHPx / geom.tickDotPx / geom.tickWidthPx | tick margin/height · dot size/position · tick width |
| geom.quietW / geom.quietH | quiet-zone suppression tests in sceneSVG() (stars + lit windows) |
| geom.cardLeft / geom.cardTop / geom.cardW / geom.cardPadPx / geom.cardAccentW | cardEl position/width/padding/border setters |
| geom.flipRisePx | year-span translateY in render() |
| geom.cardTravelPx | card translateX in render() |
| geom.wrapEm | yearWrap height setter |
| geom.groundHPx / geom.winW / geom.winH | scene generator ground + window geometry |
| geom.starCount / geom.starOpacity / geom.winLitRatio / geom.winOpacity | scene generator stars + lit windows |
| geom.bWMin / geom.bWVar / geom.bHMin / geom.bHVar / geom.bGapMin / geom.bGapVar | scene generator building ranges |

Unapplied keys: **0**.

## 3. CSS-variable setter check
The build uses NO CSS variables: every CONFIG value is consumed by a direct JS style assignment or string construction, each setter verified present in §2. Unset-variable references: **0** (class not applicable — no var() references exist; verified by scan).

## HIT list
**EMPTY — 0 HITs** (after the one pre-scoring cure recorded in §1: geom.wrapEm).
