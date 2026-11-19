# T241 — config-census (A6 census leg v3.1) · attempt 1 · Wave 38

Build: recreation.html sha256 2c4b4e15e25a06994e9c7208a387e13e536c5f30ccc9572ccd6b93e1190b5aca (15,157 B). Scan: literal census over everything outside the CONFIG block (regex over the post-CONFIG source), per-constant classification, key→site resolution incl. nested/array keys, CSS-variable check (no CSS variables are used — CONFIG is read directly in JS; check prints NOT-APPLICABLE with that reason).

## §1 Literal scan (outside CONFIG)
- Hex/rgba colors outside CONFIG: **0** (page-chrome `#111` body background in the <style> block is the standalone page's chrome, not the stage — the stage background is palette.bg; classified structural page chrome, printed here).
- Numeric literals outside CONFIG after cures: `0`, `1`, `2`, `1000`, and small integers inside path/index arithmetic.
  - `1000` (×4) — stroke-dasharray normalization constant for draw-on (≥ any path length in the stage; the dash fraction, not the length, carries the animation) — **structural**, printed.
  - `0` / `1` / `2` — clamp bounds, array indices, `2 * bez` (starBez doubling, CONFIG-driven base), loop bounds — **structural**.
  - All subject-shaping coefficients found in the first scan were CURED into CONFIG before filing: starBez 0.14 · starBigFactor 2.2 · connFx/connFy 0.32/0.94 · leaderFx/leaderDy/leaderDotR/leaderGap · bracketCyDy 2 · ringRFactor 0.62 · figureDy −92 · iconGlyphDy 13 · iconLegX/iconLegLen 3/12 · stroke.rule 1.5 · stroke.slotDash "5 4" · timing.loopTailMs 400 · slotDx 176 (fit cure) — each now resolves in §2.
- Font-family stacks: only in CONFIG type.family — applied at every <text> site. No CSS font stack outside CONFIG.

## §2 Key → application-site resolution (every key; value flows into its named subject)
- stage.w/h → svg viewBox + bg rect (render). palette.bg → bg rect · palette.ink → reticle/magnifier/callout/formula strokes+fills · palette.dim → connectors, array figures, rule · palette.faint → expansion texts · palette.slot → slot rect stroke.
- texts.callout[0]/[1] → the two callout <text> sites · texts.formula → formula <text> · texts.slotWord → slot <text> (harness swap receipt) · texts.expansion[0..2] → type-on <text> sites via expandChars (harness CP3/CP4 receipts).
- array.cols/rows → derive count + iconOrigin loops · array.selected → derive selectedCenter/selRow/selCol + ring + connectors · array.iconW/iconH → iconOrigin pitch + ring radius (×ringRFactor) · array.gapX/gapY → iconOrigin · array.originX/originY → iconOrigin.
- geom.reticleCx/Cy/R/InnerR/DotR/tick/tickGap → reticle group · geom.magCx/Cy/R → magnifier circle + leader origin · geom.figureScale → magnifier figureGroup scale · geom.starR → star glyph (×starBigFactor) + bracket span · geom.iconHeadR/iconBodyW/iconBodyTop/iconBodyH/iconGlyphR/iconLegX/iconLegLen/iconGlyphDy → figureGroup glyph construction · geom.starBez → starPath control ratios · geom.connFx/connFy → connector origins · geom.formulaY/ruleY/ruleHalfW → formula + rule · geom.expansionY[0..2] → expansion <text> y sites (array key, each member resolved) · geom.calloutX/calloutY/calloutDy → callout texts + leader endpoint · geom.bracketLen/bracketGap/bracketCyDy → bracket paths · geom.slotW/slotH/slotDx → slot rect + slot text x · geom.leaderFx/leaderDy/leaderDotR/leaderGap → leader line + dot · geom.ringRFactor → ring radius · geom.figureDy → magnifier figure y.
- type.family → every <text> font-family · type.formulaPx → formula font-size · type.expansionPx → expansion font-size · type.calloutPx → callout font-size (slot text derives formulaPx−12, a CONFIG expression).
- stroke.figure/circle/reticle/connector/bracket/rule/slotDash → their named stroke sites.
- timing.* (all 21 keys) → stateAt raws + derive chaining (slotStartMs/dissolveStartMs) + bootstrap loop (durationMs/loopTailMs); each timing key has a stateAt or derive site — verified by the harness SCHEDULE line + CP receipts.
- CSS-variable setter check: NOT-APPLICABLE — no CSS variables exist in the build (grep `--` custom properties: 0); CONFIG flows through JS only.

**HIT list: EMPTY (0 HITs)** — after the §1 cures, every CONFIG key resolves to a value-flowing site and no subject-shaping literal stands outside CONFIG.

## §2b Addendum (prewave firing-1 cure — per-key timing resolution)
The §2 line "timing.* (all 21 keys)" was wrong in count and grouping. Mechanical count of the final CONFIG `timing` object: **27 fields**, each with its individual application site:
| key | site |
|---|---|
| tReticleMs | stateAt reticleRaw start |
| reticleDurMs | stateAt reticleRaw duration |
| tMagMs | stateAt magRaw start |
| magDurMs | stateAt magRaw duration |
| tArrayMs | stateAt icon starts + ringRaw start |
| iconDurMs | stateAt icon completion + derive arrayEndMs |
| arrayStaggerMs | stateAt icon starts + derive arrayEndMs |
| tFormulaMs | stateAt formulaRaw start (CP2b instant) |
| formulaDurMs | stateAt formulaRaw duration |
| tExpandMs | expandStartOf base (derive expandStart) |
| expandLineDurMs | expandStartOf step + stateAt expandChars duration |
| expandGapMs | expandStartOf step |
| tBracketsMs | stateAt bracketsRaw start |
| bracketsDurMs | stateAt bracketsRaw duration |
| tPulseMs | stateAt pulseRaw start |
| pulseDurMs | stateAt pulseRaw duration |
| pulseScale | stateAt pulse amplitude |
| tDimMs | stateAt reticleOpacity dim threshold (CP6b instant) |
| reticleDimOpacity | stateAt reticleOpacity dim value |
| tSlotMs | derive slotStartMs floor |
| slotDurMs | derive completeAtMs + stateAt slotRaw duration |
| slotGapMs | derive slotStartMs (expandEndMs + slotGapMs) |
| tDissolveMs | derive dissolveStartMs floor |
| dissolveDurMs | derive dissolveEndMs + stateAt dissolveRaw duration |
| holdMs | derive dissolveStartMs (completeAtMs + holdMs) |
| loopTailMs | bootstrap loop modulus (durationMs + loopTailMs) |
| durationMs | bootstrap clamp + comparison duration read |
HIT list remains EMPTY.

## §2c Completion addendum (Cycle 042 · Wave 39, A12.3 — explicit per-key naming + mechanical reconciliation)
Re-run on the UNCHANGED final build (sha256 2c4b4e15e25a06994e9c7208a387e13e536c5f30ccc9572ccd6b93e1190b5aca). A mechanical walk of the build's CONFIG object (109 leaf/array paths incl. nested + array members; timing object = 27 fields, matching §2b) was checked by full path name against this census. The first pass flagged 11 paths carried only in combined/range notation in §2; each is now named explicitly with its value-flowing site:
| key | site |
|---|---|
| texts.callout[1] | second callout <text> site (y = calloutY + calloutDy) |
| texts.expansion[0] | expansion type-on <text> site 0 via expandChars[0] (harness CP3 receipt) |
| texts.expansion[1] | expansion type-on <text> site 1 via expandChars[1] |
| texts.expansion[2] | expansion type-on <text> site 2 via expandChars[2] (harness CP4 receipt) |
| geom.reticleCy | reticle group centre cy (circles + ticks + corners) |
| geom.reticleInnerR | reticle inner circle r (× pulse) |
| geom.reticleDotR | reticle centre dot r |
| geom.magCy | magnifier circle cy + figure/bracket/leader y base |
| geom.expansionY[0] | expansion <text> site 0 y |
| geom.expansionY[1] | expansion <text> site 1 y |
| geom.expansionY[2] | expansion <text> site 2 y |
Literal re-scan: hex colors in the post-CONFIG script source = 0; the file's only hex outside CONFIG remains `#111` page chrome in the <style> block, classified structural in §1 (stands). CSS-variable check stands NOT-APPLICABLE (no CSS variables; grep `--` custom properties: 0). After this addendum the reconciliation prints **missing = [] (0)**. **HIT list remains EMPTY (0 HITs).**
