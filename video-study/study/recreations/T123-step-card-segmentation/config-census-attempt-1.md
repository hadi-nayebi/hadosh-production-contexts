# T123 — config-census leg (guard-config-census.md v3.1) · attempt 1 · final build

## All-literal scan (outside the CONFIG block)
- Hex colors outside CONFIG: `#070a18` (page chrome behind the stage), `#fff` / `#a00` (error banner chrome) — **structural/chrome**: none is inside the stage; the stage field is CONFIG `palette.field`. Classification printed per the leg; not subject-shaping.
- Font stack in CSS: none (font applied from CONFIG `type.font` at build). The `#err` rule's `12px monospace` and `4px` padding are error-banner chrome — structural. CSS class line-heights were found as bare `1` placeholders during the census and the real leading values live in CONFIG `type.*LH`, applied inline at build (cured pre-wave; see build-record).
- Grid hairlines: the `1px` stops inside gridCSS() are the minimum visible hairline width rendering CONFIG `palette.grid` at CONFIG `grid.cellPx` spacing — **structural** (a rendering constant of the grid construction, not a shaping choice; the spacing and color are CONFIG keys).
- Numeric constants in logic: CHAR_W advance fractions (0.68/0.52/0.278/0.556/0.30), the bold factor 1.06, and the ink ratio 0.716 — the fit harness's measurement model, **structural** (they measure the subject; they do not shape it). Weight threshold 700 (bold detection in the measurement model) — structural. Array indices, 0/1/2, `Math.min(1, …)` entrance clamp — structural.
- Durations outside CONFIG: none — state logic reads `steps[].atMs`, `tileEnterMs`, `cycleMs` only; the cycle is the CONFIG literal 14000, named as a key.
- Geometry outside CONFIG: none — every position/size in build() derives from `geom`/`type`/`stage` keys.

## Key → application-site resolution (all resolved)
steps[].n → tile numeral textContent · steps[].title → tile title textContent + fit model · steps[].sub → tile sub textContent + wrap model · steps[].atMs → stateAt (active headline selection + tile presence + enterP) · steps[].headline[].t → headline span text · steps[].headline[].style → span rendering branch (blue → palette.blue · chip → chipBg/chipInk + chip geometry · absent → ink) · tileEnterMs → enterP · cycleMs → stateAt modulo · stage.width/height → stage element size + layoutModel · grid.cellPx → backgroundSize · palette.field → stage background · palette.grid → gridCSS · palette.ink → headline + tile title color · palette.blue → operative span + numeral color (the swap-test palette key) · palette.chipBg/chipInk → chip span · palette.card/cardEdge → tile background/border · palette.subInk → tile sub color · type.font → stage fontFamily · type.headlinePx/Weight → headline styles + fit model · type.numeralPx/Weight/LH → numeral styles + fit model · type.titlePx/Weight/LH → title styles + fit model · type.subPx/Weight/LH → sub styles + wrap/fit model · geom.headlineTop/tileY/tileW/tileH/tileGap/tileRadius/tilePadTop/tilePadX/tileBorderPx/numTitleGap/titleSubGap → build() geometry + layoutModel · geom.chipPadX/chipPadY/chipRadius → chip span rendering · geom.enterRisePx/enterFromScale/enterFromOpacity → stateAt tile/headline entrance values.

## CSS-variable setter check
No CSS variables are used anywhere in the build — check vacuous, no unset-variable references.

**HIT list: EMPTY.**
