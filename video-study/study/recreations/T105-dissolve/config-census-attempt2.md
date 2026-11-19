# T105 — guard-config-census output v3.1, attempt 2 (A-C008 leg, pre-scoring, on attempt 2's own CONFIG)

Frozen source: recreation.html sha256 425553f3738f1e8803047c51ddbabd3ccb5e5e79e323bb67ea10f24446ba74fd

## 1. All-literal scan (outside CONFIG block)
Style block literals: `#111` (page backdrop behind the stage — structural, page chrome, not subject), `0` margins/paddings (structural), positioning keywords (structural). Script literals outside CONFIG, each classified:
- `0`, `1`, `2`, `3` in easeFn/progressAt/validation loops — structural (mathematical identities of the smoothstep curve, phase logic, loop bounds).
- `"px"`, `"center"`, `"div"`, `"layer-"`, validation message strings — structural (construction syntax and error reporting; all values CONFIG-derived). Validation messages name CONFIG keys (e.g. "duration holdAMs…") — key names, not content literals (A-C009-4: no technique content is classified structural; the scene wording lives only in CONFIG).
- No colour literals outside CONFIG (scan: 0 hex values). No numeric subject-shaping literal outside CONFIG.
- Removed with the branded fixture: `scene.tri[]` colours and `scene.triClip` no longer exist anywhere in the source (grep 0 hits).

## 2. Application-site resolution (every CONFIG key → ≥1 consumed effect)
Machine census (own-check harness): 90/90 leaf keys consumed — every leaf key name occurs in the construction/clock code beyond its declaration, and the effect assertions below bind the new keys to rendered effects, not occurrences alone (A-C006-2).
- sceneA.kind → builder dispatch (buildersA registry: webpage/panel) + layer id ✓ — attempt-1's generous "applied = id only" wording is SUPERSEDED: kind now selects the construction (structural swap evidence in the own-check suite: A subtree count 5 webpage vs 3 panel).
- sceneB.kind → builder dispatch (buildersB registry: mark/title) + layer id ✓ (B subtree count 5 mark vs 3 title).
- sceneA.label/title → builder text nodes ✓ · sceneB.label/wordmark → builder text nodes ✓
- holdAMs → D0 ✓ · dissolveMs → D1 + progressAt divisor ✓ · holdBMs → D2 ✓ · loopFadeMs → D3 + return progress ✓ · cycleMs → CYCLE + wrap ✓ · ease → easeFn selector ✓
- palette.fieldA → layerA background + mark bar colour ✓ · palette.fieldB → stage background + layerB background ✓ · palette.ink → labels + wordmark + mark bar colour ✓ · palette.accent → search bar / band background + mark bar colour + title rule ✓
- stage.width/height → stage sizing + both layer sizings + wordmark centring width ✓
- geom.bar*/hero*/tile*/line* → webpage builder ✓ · geom.row*/rowLine* → webpage rows ✓ · geom.panel*/panelLine* → panel builder ✓ · geom.rule* → title builder rule ✓
- geom.markBarX/Y/H/Gap/Radius → mark bar boxes + radius ✓ · geom.markBarW[] → mark bar widths, each member rendered and width-asserted in the own-check suite ✓ (array relationship validated in-code: every member finite > 0, count ≥ 1, colour resolution per index asserted by construction over the palette-derived colour list)
- geom.wordY → wordmark position ✓ · geom.labelX → both labels' x ✓ · geom.labelAY → scene A label y (182) ✓ · geom.labelBY → scene B label y (150) ✓ (labelY split; the shared attempt-1 key is removed)
- scene.hero/heroTile/heroLine/card/rowLine → scene A fills ✓ · scene.dark → title text colour ✓
- type.font → stage + text font-family ✓ · type sizes/weights → text sizing/weights ✓
No unapplied key.

## 3. CSS-variable setter check
No CSS variables are used; CONFIG is consumed directly in JS. No setter-missing class possible. ✓

HIT list: **empty — PASS for this leg (0 HITs on attempt 2's build).**
