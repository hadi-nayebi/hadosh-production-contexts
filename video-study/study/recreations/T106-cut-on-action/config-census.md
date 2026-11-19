# T106 — guard-config-census output v3.1 (A6 leg 2, FINAL build, pre-wave)

## 1. All-literal scan (outside CONFIG block)
Style block literals: `#111` (page backdrop behind the stage — structural, page chrome, not subject) · `0` margins/paddings (structural) · `0 50%` transform-origin on .lid/.glyphLid (structural — the hinge's vertical-centre identity; the origin's x=0 is the hinge itself) · flex/layout keywords (structural).
Script literals outside CONFIG, each classified:
- `4`, `3`, `2`, `0.5` in easeInOutCubic — structural (mathematical identity of the cubic ease).
- `"polygon(0 100%, 100% 0, 100% 100%)"` beam clip-path — structural (the beam is a right triangle by construction identity; its size/position/opacity are CONFIG: beamW/beamH/beamDx/beamDy/beamOpacity).
- `600` in the __render manual-drive handoff window — structural (driver plumbing, shapes nothing on stage).
- `"rotate("`, `"translate("`, `"scale("`, `"px"` format strings — structural (construction syntax; every value CONFIG-derived).
- First-pass HITs found by this census and CURED pre-wave (re-verified by harness after cure): hero screen aspect `0.62` → `sceneB.glyph.screenAspect` · glyph base gap `4` → `sceneB.glyph.baseGap` · desk gap `3` → `laptop.deskGap` · beam offsets `6`/`26` → `laptop.beamDx`/`beamDy`. Earlier in the same pass, the fit leg's geometry cured sceneB cards/bars values inside CONFIG (see fit-table.md).

## 2. Application-site resolution (every CONFIG key → ≥1 site)
lid.fromDeg/toDeg → thetaAt (hold + action + glyph θcut) ✓ · lid.actionMs → thetaAt + CUT_MS ✓ · lid.len/thick → lid element + heroScreen/glyph sizing ✓ · lid.baseW/baseH → base + glyphBase ✓ · lid.hingeX/baseY → desk/beam/base/lid placement ✓ · lid.screenOnDeg/screenFullDeg → screenOpacityAt ✓ · lid.screenInset → lidScreen insets ✓ · cutAt → CUT_MS ✓ · framingA/framingB {scale,x,y} → frameA/frameB transforms ✓ · holdBeforeMs → thetaAt + CUT_MS ✓ · openHoldMs → CUT_MS ✓ · cycleMs → CYCLE (render wrap + fade) ✓ · loopFadeMs → render fade envelope ✓ · palette.field → sceneA background ✓ · palette.fieldB → sceneB background ✓ · palette.body → base/lid/glyphBase/glyphLid ✓ · palette.screen → lidScreen/beam/heroScreen ✓ · palette.ink → desk + bars ✓ · palette.card → heroCard + cards ✓ · palette.accent → headerBar ✓ · laptop.beamOpacity/beamW/beamH/beamDx/beamDy → beam ✓ · laptop.deskW/deskH/deskGap/deskOpacity → desk ✓ · sceneB.headerH → headerBar ✓ · sceneB.hero{x,y,w,h} → heroCard ✓ · sceneB.glyph{x,y,scale,screenAspect,baseGap} → heroScreen/glyphBase/glyphLid ✓ · sceneB.cards[]{x,y,w,h} → card elements ✓ · sceneB.bars{h,gap,opacity,count,inset} → bar elements ✓ · type.font → body font-family ✓ · stage{width,height} → stage + scenes + fadeWrap sizing ✓. No unapplied key.

## 3. CSS-variable setter check
No CSS variables are used; CONFIG is consumed directly in JS. No setter-missing class possible. ✓

HIT list: **empty — PASS for this leg (0 HITs on the final build).**
