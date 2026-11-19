# T101 — guard-config-census output v3.1 (A6 leg 2, FINAL build after interim-wave cure, pre-wave re-fire)

## 1. All-literal scan (outside CONFIG block)
Style block literals: `#111` (page backdrop behind the stage — structural, page chrome, not subject), `0` margins/paddings (structural), flex/layout keywords (structural). Script literals outside CONFIG, each classified:
- `0.5`, `2` in ease() — structural (mathematical identity of the ease-in-out curve).
- `"linear-gradient(...)"`, `"translate(...) scale(...)"` format strings — structural (construction syntax, values all CONFIG-derived).
- First-pass HITs found by this census and CURED pre-wave (re-verified by harness after cure): grid division `6` → `layout.gridDiv` · gradient angle `160deg` → `layout.gradAngle` · flank offsets `8`/`24` → `layout.flankTopGap`/`layout.flankGap` · clip border `2px solid rgba(10,10,40,.45)` (was in CSS) → `layout.clipBorderW`/`layout.clipBorder`, applied in JS · playhead span `0.8` → `graph.span`.

## 2. Application-site resolution (every CONFIG key → ≥1 site)
clips[].color → clip blocks + toolbar tools + flank clips ✓ · clips[].w/h → clip + flank sizing ✓ · card.brand/title → text nodes ✓ · card.x/y/w/h → card placement + camera end-pose derivation ✓ · curve.show → panel conditional ✓ · curve.points[0..3] → SVG path P(0..3) ✓ · panels.curve{x,y,w,h} → panel placement/sizing ✓ · panels.toolbar.h → toolbar height + flank Y ✓ · dive.endScale → pose dive/hold + end-pose ✓ · dive.travelX → travelPx ✓ · palette.bg → stage background ✓ · palette.toolbar → toolbar background ✓ · palette.cardFrom/cardTo → card gradient ✓ · palette.ink → card color ✓ · layout.worldW → world/toolbar/graph widths + playhead range ✓ · layout.clipsX/clipsY/gap → clip row layout ✓ · layout.panelBg/gridLine/curveStroke/curveStrokeW/gridDiv/gradAngle/flankGap/flankTopGap/clipBorder/clipBorderW → panel, SVG, card gradient, flanks, clip borders ✓ · graph.y/h/color/bg/lineW/span → graph strip, bezier, playhead ✓ · type.font → body font-family ✓ · type.brandSize/titleSize → text sizing ✓ · diveMs/travelMs/holdMs → CYCLE + pose phases ✓ · stage.width/height → stage sizing + end-pose center ✓. No unapplied key.

## 3. CSS-variable setter check
No CSS variables are used; CONFIG is consumed directly in JS. No setter-missing class possible. ✓

HIT list: **empty — PASS for this leg (0 HITs on the final build).**

## Final-build addendum (after interim1 wave + jev-prewave)
- **Census MISS recorded:** jev-prewave finding 1 named literals this census's first scan missed — CSS `.tool` 9×9, toolbar gap 6 / padding 10, `.playhead` width 2, flank height factor `c.h*2`, graph-bezier coefficients, SVG grid stroke-width 1, brand letter-spacing / title line-height / font weights in CSS. All are now CONFIG-bound on the final build (`layout.toolSize/toolGap/toolPad/gridStrokeW/flankHFactor/flankCount/loopFadeMs` · `graph.playheadW/bezier{x1,y1,x2,y2}` · `type.brandWeight/titleWeight/brandSpacing/titleLineHeight`), applied in JS, and the flank loop is guarded against an empty clips array. The miss is the guard's improvement material: the first scan enumerated the script but under-enumerated the CSS block.
- Key→site resolution extended: every key added above resolves to ≥1 application site (toolbar layout, tool glyphs, grid strokes, flank construction, loop fade in render, playhead sizing, graph bezier path, brand/title typography). No unapplied key on the final build.
