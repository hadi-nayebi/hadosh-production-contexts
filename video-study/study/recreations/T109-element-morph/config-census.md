# T109 — guard-config-census output v3.1 (A6 leg 2, final build, pre-wave)

## 1. All-literal scan (outside CONFIG block)
Style block literals: `#111` (page backdrop behind the stage — structural, page chrome, not subject), `0` margins/paddings (structural), positioning keywords (structural). Script literals outside CONFIG, each classified:
- `0`, `1`, `2` in easeFn/clamp01/phase logic — structural (mathematical identities of the smoothstep curve and phase boundaries).
- `Math.PI` in the settle decay — structural (mathematical identity).
- `"px"`, `"center"`, `"solid"`, format/keyword strings — structural (construction syntax; all values CONFIG-derived).
- CYCLE `14000` — structural (the segment-matched cycle length; every phase boundary derives from CONFIG durations, and the residual absorbs the remainder — verified ≥0 for default and swap configs).
- First-pass HITs found by this census and CURED pre-wave (re-verified by harness after cure): cluster bbox `72/52` → `morph.clusterW/clusterH` · centroid `180/90` → `morph.centroidX/centroidY` · collapse sink `10` → `morph.sinkPx` · radius cap `24` → `morph.radiusMax` · yield band `0.9` → `morph.yieldStart` · settle amplitude `0.06` → `morph.settleAmp` · title pad `8` → `morph.titlePadX` · countdown offset `34` → `morph.countTopOffset`.

## 2. Application-site resolution (every CONFIG key → ≥1 site)
sceneA.kind → (record only: names the fixture class; no code branch — see note) · sceneA.title → title text node ✓ · sceneA.geometry.searchBar/cardTop/cardMid/cardLow {x,y,w,h} → element construction + per-frame interpolation ✓ (each member resolved) · sceneB.kind → (record only, as sceneA.kind) · sceneB.triangles[].color/cx/cy/s → triangle construction + growth interpolation (array members each resolved) ✓ · sceneB.triClip → triangle clip-path ✓ · correspondence[] {a,b,mode,stagger} → staggerOf() + the per-mode render branches (array members each resolved) ✓ · countdown.label → countdown text template ✓ · countdown.steps[] → step index + text (each member) ✓ · countdown.stepMs → phase boundary C1 + step index divisor ✓ · holdAMs → C0 ✓ · morphMs → localP divisor + C2 ✓ · settleMs → C3 + settle decay ✓ · holdBMs → C4 ✓ · loopFadeMs → C5 + return interpolation ✓ · ease → easeFn selector ✓ · palette.field → field construction + mix endpoint ✓ · palette.black → mix endpoint + title colour ✓ · palette.ink → countdown colour ✓ · palette.cardA → cardTop construction + mix start ✓ · palette.cardB → cardMid/cardLow construction ✓ · palette.accent → search bar background ✓ · outline.color/width/inset → outline border + geometry ✓ · morph.* → cluster/centroid/sink/radius/yield/settle/pad/offset sites ✓ · stage.width/height → stage sizing + field + countdown width ✓ · type.font → stage + text font-family ✓ · type.titleSize/countSize → text sizing ✓ · type.titleWeight/countWeight → font weights ✓.
Note on sceneA.kind / sceneB.kind: descriptive kind tags carried in CONFIG per the RUN §2 table; they name the fixture classes and exert no branch. Classified NOT a hit — the keys promise identification, not control, and the census prints them rather than hiding them (T105 precedent: kind keys resolved to layer ids; here the single-field construction has no layer ids to bind — printed as the leg's one MISS-risk, carried for Condense).

## 3. CSS-variable setter check
No CSS variables are used; CONFIG is consumed directly in JS. No setter-missing class possible. ✓

HIT list: **empty — PASS for this leg (0 HITs on the final build, after the eight pre-wave cures above).**
