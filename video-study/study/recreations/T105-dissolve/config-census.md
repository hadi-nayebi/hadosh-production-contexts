# T105 — guard-config-census output v3.1 (A6 leg 2, final build, pre-wave)

## 1. All-literal scan (outside CONFIG block)
Style block literals: `#111` (page backdrop behind the stage — structural, page chrome, not subject), `0` margins/paddings (structural), positioning keywords (structural). Script literals outside CONFIG, each classified:
- `0`, `1`, `2`, `3` in easeFn/progressAt — structural (mathematical identities of the smoothstep curve and phase logic).
- `"px"`, `"center"`, format/keyword strings — structural (construction syntax; all values CONFIG-derived).
- First-pass HITs found by this census and CURED pre-wave (re-verified by harness after cure): result-row count `2` → `geom.rowCount` · triangle clip-path `polygon(50% 0%, 100% 100%, 0% 100%)` → `scene.triClip` (subject-shaping under the Cycle-013 clarification: it defines the triangles' shape).

## 2. Application-site resolution (every CONFIG key → ≥1 site)
sceneA.kind → layerA element id ("layer-webpage") ✓ · sceneA.label → layerA label text node ✓ · sceneA.title → search-bar text node ✓ · sceneB.kind → layerB element id ("layer-logo") ✓ · sceneB.label → layerB label text node ✓ · sceneB.wordmark → wordmark text node ✓ · holdAMs → phase boundary D0 ✓ · dissolveMs → D1 + progressAt divisor ✓ · holdBMs → D2 ✓ · ease → easeFn selector ✓ · loopFadeMs → D3 + return progress ✓ · cycleMs → CYCLE + render wrap ✓ · palette.fieldA → layerA background ✓ · palette.fieldB → stage background + layerB background ✓ · palette.ink → both label nodes + wordmark color ✓ · palette.accent → search-bar background ✓ · stage.width/height → stage sizing + layer sizing + wordmark centring width ✓ · geom.barX/barY/barW/barH/barRadius/barPadX → search bar ✓ · geom.heroX/heroY/heroW/heroH/heroRadius → hero card ✓ · geom.tileX/tileY/tileW/tileH → hero tile ✓ · geom.lineX/lineY/lineW/lineH/lineGap/lineCount → hero lines ✓ · geom.rowX/rowW/rowH/rowGap/rowY/rowRadius/rowCount → result rows ✓ · geom.rowLineX/rowLineY/rowLineW/rowLineH/rowLineGap/rowLineCount → row lines ✓ · geom.triW/triH/triY/triX[] → triangle boxes (array members each resolved) ✓ · geom.wordY → wordmark position ✓ · geom.labelX/labelY → both label positions ✓ · scene.hero/heroTile/heroLine/card/rowLine → scene A fills ✓ · scene.tri[] → triangle fills (each member) ✓ · scene.triClip → triangle clip-path ✓ · scene.dark → title text color ✓ · type.font → stage + text font-family ✓ · type.titleSize/labelSize/wordmarkSize → text sizing ✓ · type.titleWeight/labelWeight/wordmarkWeight → font weights ✓. No unapplied key.

## 3. CSS-variable setter check
No CSS variables are used; CONFIG is consumed directly in JS. No setter-missing class possible. ✓

HIT list: **empty — PASS for this leg (0 HITs on the final build).**
