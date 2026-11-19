# T100 — config-census leg (guard-config-census v3.1) · attempt 2

Source bound: recreation.html sha256 `3b13704132f220b8252974b75e67729ddbf58c53e2ab0c6af55738d5dc95be27` (attempt 2 final).

## Literal scan (outside the CONFIG block, script scope)
- Hex/rgba colors in logic/CSS: **0** — every color is read from CONFIG (field, pencil, checkbox, tick, punct1, punct2).
- Durations in logic: **0** — all phase times derive from CONFIG (enterMs, tick.drawMs, punct1.durationMs, punct2.durationMs, cycleMs; hold is the residual).
- Geometry in logic: **0 content literals** — viewBox and field rect derive from CONFIG stage.width/height at build; tick path derives from checkbox centre + CONFIG tick control offsets; arrow paths/heads are CONFIG strings offset by the checkbox centre at build; confetti positions come from CONFIG offset arrays.
- Numeric literals in logic, per-literal classification (all structural, none content): **-1** cycle sentinel (`lastCycle`) · **0 / 1** clamp bounds, opacity bounds, coordinate origin, loop bounds · **2** halving identity (centring rects/marks). SVG namespace URI (structural protocol) · postMessage protocol words "pause/play/restart" (structural) · CSS `margin:0` (structural).
- `endHoldMs`: **absent** — removed, not inert (attempt-1's documentary duplicate cured).

## Key → consumed-effect resolution (every CONFIG leaf key; 55 leaf keys walked by the own-check consumption census, 0 unconsumed)
| Key group | Consumed effect |
|---|---|
| field.color | field rect fill + stage background |
| stage.width / stage.height | stage CSS size + viewBox + field rect size |
| pencil.color / path / enterFrom / enterDx / enterDy | pencil fill · pencil shape · ENTER corner signs · ENTER vector magnitude |
| checkbox.size / stroke / color / cx / cy / exitAt | box rect geometry + stroke · box centre (tick anchor, beat centre) · box exit point inside DRAW |
| tick.color / stroke / drawMs / start / ctrl1 / ctrl2 / end | tick stroke · DRAW bounds + residual derivation · curved path derived from checkbox centre + offsets |
| punct1/punct2 .color / durationMs / arrowStroke / arrowPath / arrowHead / confettiCount / confettiW / confettiH / confettiStartScale / confettiFrom / confettiOffsets | per-beat arrow + confetti colour · beat phase bounds · arrow stroke width · arrow geometry (centre-offset at build) · confetti count/size/onset scale/travel start/scatter positions (cycled modulo array length) |
| enterMs / cycleMs | ENTER bounds · cycle modulo + residual hold derivation |
| validation.minResidualMs / maxConfetti | startup validation bounds (residual floor; confetti count ceiling) |
| geom.easePow / enterFadeGain / confettiRotStep / headAt | ease curve exponent · ENTER opacity ramp · confetti rotation step · arrow-head reveal point |

## CSS-variable setter check
No CSS variables are used; CONFIG is consumed directly in JS. No setter gap possible. **No HIT.**

**HIT list: EMPTY.**
Leg verdict: advisory — fired and filed pre-wave per Amendment A-C008, against attempt 2's own CONFIG.
