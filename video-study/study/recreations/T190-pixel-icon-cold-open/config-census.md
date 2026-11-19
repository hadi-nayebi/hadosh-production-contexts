# config-census — T190 pixel-icon cold open (guard-config-census v3.1, A6 pre-wave leg)

Run on the recreation.html the prewave firings judged (sha256 `c77e922bedcf4e0e6ee8f533e09fed76c792c26805adbef82ffc16951ee7e4bb`), and re-verified after the post-HOLD cure (renderer applies `captionLayout`'s fitted fontPx per frame; caption band content-box) — cured build sha256 `1996454c4c69593c85b4de1aea4770c27981b0f9e690963d3b12bfe81ea78a23`: the key set and application sites below are unchanged by all cures; `captionFontPx` (28, now also the per-caption fitted size's source via `lay.fontPx`) and `captionCharWidthFactor` (0.6023, the PIL-measured mono advance) are the values the sites consume.

## 1. All-literal scan (outside the CONFIG block)
Numeric literals outside CONFIG (counted mechanically): `1` ×27 · `0` ×22 · `2` ×14 · `3` ×5 · `0.5` ×3 · `50` ×3 · `8` ×3 · `100` ×1 · `24` ×1 · `180` ×1 · `5` ×1.
Per-constant classification:
- `0`, `1`, `2`, `3` — loop bounds, array indices, phase-split halves (0.5 in the couch internal turn = the edge-on midpoint fraction of that turn, a mathematical identity of the two-half swap) — **structural**.
- `50` ×3 — CSS `transform-origin: 50% 50%` static default in the style block; the renderer overwrites it from CONFIG `pivot` at runtime — **structural** (default, not a shaping site).
- `8` ×3 — comparison-control chrome offsets in the recreation's own control corner (right/top 8 px) — **structural** (page chrome, not subject).
- `100` — `min-height:100vh` page layout — **structural**. `5` — controls z-index — **structural**. `24` — cubic-bezier solver iteration count — **structural**. `180` — degrees→radians identity (Math.PI/180) in the bounds evaluator — **structural**.
- Hex colors outside CONFIG: `#111` ×1 — the page surround behind the stage (body background); the stage itself renders CONFIG `bg`. **Structural** (surround, never inside the subject stage).
- Strings outside CONFIG: phase names (TURN/HOLD/CUT/CAPTION-ONLY), DOM ids, `"#"` (the pixel-map ink glyph the renderer tests — the map data itself is CONFIG), `"transparent"`, button labels — **structural** identifiers, none subject-shaping.
- Subject-shaping literals outside CONFIG: **NONE** after the two cures below. Every subject value (times, scale peaks, palette, pixel unit, stage, icon center, caption metrics, maps, bezier points) is a CONFIG key.

Cures applied during this leg's first run on the draft (before scoring, per A6):
1. `captionSafeBandPx` initially occurred only at its declaration (the band was an assertion bound, not a build input) → CURED: the caption layer's box is now sized by `captionSafeBandPx` (height + flex-end layout + `captionBottomPx` padding) in the render script — the key shapes the built caption band.
2. A literal `800` (loop-restart padding) sat in the render frame loop → CURED: the loop now wraps at `sc(CONFIG.endMs)`, CONFIG-derived.

## 2. Application-site resolution (every CONFIG key → ≥1 value-flow site)
| key | application site(s) |
|---|---|
| beatScale | `sc()` — scales every timeline comparison in stateAt + sceneScalePeakMs |
| captionOnlyMs | stateAt caption-only branch |
| endMs | stateAt CUT branch · render loop wrap |
| turnDeg / turnDir | stateAt turn-in, turn-out, couch internal turn angles |
| turnBezier | `bez()` easing solver used by every turn |
| pivot | render: icon transformOrigin |
| perspectivePx | render: icon transform perspective() |
| scalePeak / scalePeakAt | per-scene fallbacks in stateAt scale curves + sceneScalePeakMs derivation |
| bg | render: stage background |
| ink | render: cell fill + caption color (swap-verified) |
| pixelUnitPx | mapDims → grid geometry + bounds |
| stageWPx / stageHPx | render stage size · captionLayout avail · bounds center/limits |
| iconCenterYPx | boundsFor center + render icon top |
| captionFontPx | captionLayout + render caption fontSize |
| captionBottomPx | render caption band padding-bottom |
| captionSafeBandPx | render caption band height (cure 1) · CP5 band limit |
| captionPadPx | captionLayout avail width |
| captionCharWidthFactor | captionLayout measurement model |
| captionLineHeightFactor | render caption lineHeight · band stack accounting |
| fontStack | render caption fontFamily |
| captions[].text/fromMs/toMs | captionAt single-slot resolver (ordered half-open intervals) |
| scenes[].id | stateAt `sceneId` return field in every branch (the harness checkpoint receipts CP2–CP8 price scene identity from it) — row ADDED at the Cycle 036 completion's post-HOLD cure: the jev-prewave completion re-fire (finding 2) correctly found this nested key extracted in the build's CONFIG but missing from this table; it is applied, not a HIT |
| scenes[].mapFront / mapProfile | stateAt active map + renderer grid |
| scenes[].turnStartMs/readableMs | stateAt turn-in window |
| scenes[].turnOutStartMs/turnOutEndMs | stateAt turn-out window + sceneScalePeakMs |
| scenes[].scalePeak/scalePeakAt | stateAt turn-out scale curve (peak at scalePeakAt of the window) |
| scenes[4].profileTurnStartMs/profileReadableMs | stateAt couch internal turn window (amendment 5: inside the scene schema) |

Nested/array-member keys resolve through the scene/caption objects they live on (v3.1 §2). No unapplied key remains.

## 3. CSS-variable setter check
The build uses no CSS variables — CONFIG flows through JS style assignments only. No unset-variable references exist. N/A, reason printed.

**HIT list: EMPTY — leg PASS (advisory).** (Two draft-stage hits cured pre-scoring, recorded above per A6.)

**Completion re-confirmation (Cycle 036 Wave 33, Amendment A12.3):** re-verified against the cured build sha256 `1996454c4c69593c85b4de1aea4770c27981b0f9e690963d3b12bfe81ea78a23` (14,989 B) — the CONFIG key set extracted from this build matches the §2 application-site table key-for-key; no key added, removed, or re-sited by the post-HOLD cure. Receipt filed as R8 in build-record.md's completion section. HIT list stands EMPTY — leg PASS (advisory).
