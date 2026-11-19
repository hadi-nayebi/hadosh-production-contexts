# T100 — config-census leg (guard-config-census v3.1) · attempt 1, final build

## Literal scan (outside the CONFIG block)
Counted and classified per constant:
- Hex/rgba colors in logic/CSS: **0** — every color is read from CONFIG (field, pencil, checkbox, tick, burst).
- Durations in logic: **0** — all phase times derive from CONFIG (enterMs, tick.drawMs, burstMs, endHoldMs, cycleMs).
- Geometry in logic: SVG canvas `viewBox="0 0 360 360"` + field rect 360×360 — **structural** (fixed coordinate space; the stage's CSS size is CONFIG `stage.width`, and all subject geometry — checkbox centre/size, tick path, pencil path/tip, burst radius/size — is in CONFIG/geom).
- Numeric constants in logic: `2 * Math.PI` (circle identity — structural) · loop index/bounds from `burst.count` (CONFIG-driven) · clamp bounds 0/1 (mathematical identities — structural) · opacity bounds 0/1 (structural). Ease exponent and enter fade gain were found as shaping constants during this census and **bound into CONFIG** (`geom.easePow`, `geom.enterFadeGain`) before scoring — cured, not classified away.
- Strings: SVG namespace URI (structural protocol) · postMessage protocol words "pause/play/restart" (structural) · CSS `margin:0` (structural).

## Key → application-site resolution (every CONFIG key applied)
| Key | Site |
|---|---|
| field.color | field rect fill + stage background |
| pencil.color | pencil path fill |
| pencil.enterFrom | READ in the ENTER phase: corner signs derived from the string ("right"/"bottom"), geom.pencilEnterDx/Dy supply magnitude (cured after jev-prewave priced the key as inert) |
| pencil.path | pencil path `d` at build |
| checkbox.size / stroke / color | checkbox rect x/y/width/height, stroke-width, stroke |
| tick.color / stroke | tick path stroke, stroke-width |
| tick.drawMs | DRAW phase bounds + residual-hold derivation |
| tick.path | tick path `d` at build; draw-on animates its measured length |
| burst.count | burst generation loop (marks rebuilt per cycle) |
| burst.color | burst rect fill |
| enterMs / burstMs / endHoldMs / cycleMs | phase machine bounds; cycle modulo; hold = cycleMs − enter − draw − burst (default residual 10900 = endHoldMs ✓) |
| stage.width | stage CSS width |
| geom.stageH | stage CSS height |
| geom.checkboxCx/Cy | checkbox rect position, burst centre |
| geom.pencilTipX/Y | pencil group translate (rest + entry vector base) |
| geom.pencilEnterDx/Dy | ENTER phase interpolation |
| geom.burstRadius / burstW / burstH / burstStartScale | burst mark placement, size, scale-in |
| geom.easePow / enterFadeGain | easeOut exponent; ENTER opacity ramp |

## CSS-variable setter check
No CSS variables are used; CONFIG is consumed directly in JS. No setter gap possible. **No HIT.**

**HIT list: EMPTY** (after the easePow/enterFadeGain binding cure above).
Leg verdict: advisory — fired and filed pre-wave per Amendment A6.
