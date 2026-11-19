# config-census — T99 logo-mark assembly opening (guard-config-census v3.1, A6 pre-wave leg)

_Re-run on the cured final build after the interim scoring wave (see build-record cure note); this census prices the final recreation.html._

## 1. All-literal scan (outside the CONFIG block)
Distinct literals found: `#111` · `360` · `2000` (namespace) · `100` (%) · `0` · `1` · `2` · `3` · `8` (charset/viewport meta digits). Per-constant classification:

| literal | site | classification |
|---|---|---|
| `#111` | CSS body background (page chrome outside the stage) | structural — the file's page surround, not the technique subject (stage bg is CONFIG.palette.bg) |
| `360` (viewBox, COORD) | SVG viewBox + `const COORD` | structural — the coordinate-system identity; CONFIG.stage.width is the display size and scales it (wordmark font size, letter spacing, and top position all derive through displayScale / percentage top, so mark and text scale in one system) |
| `sqrt(3)/2` | pieceGeom height | structural — equilateral-triangle height identity (mathematical identity) |
| `3`, `1`, `0` | easing formulas, clamp01 bounds, indices, Math.max timing floors | structural — formula coefficients / clamp and loop identities |
| `2` | centre-index arithmetic `(pieces.length − 1) / 2`, height divisor | structural — identity arithmetic over CONFIG.pieces.length |
| `100%` | CSS svg width; wordmark top percentage derivation | structural — full-container identity |
| `2000` | SVG namespace URI string | structural — W3C namespace identifier, not a value |

All cluster proportions that the interim reusability lens priced as outside-CONFIG design choices now live IN CONFIG: mark.spacing (0.45), mark.baseline (0.52), pieces[].scale (1 / 1.15 / 1), wordmark.gap (0.07), wordmark.revealTravel (0.3), motion.easing ("outCubic", selected from a structural easing table). No subject-shaping literal stands outside CONFIG.

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| key | application site(s) |
|---|---|
| pieces[].color | polygon `fill` in piece construction |
| pieces[].scale | pieceGeom size derivation (growth from the shared baseline) |
| pieces[].from.dx / .dy / .rot | render() transform interpolation per piece |
| pieces.length | pieceDur derivation, centre-index arithmetic, node construction loop |
| wordmark.text | wordEl.textContent |
| wordmark.fontFamily / fontSize / fontWeight / letterSpacing | wordEl style setters (through displayScale); fontSize also drives the reveal-shift derivation and the runtime fitting policy |
| wordmark.gap | wordmark top position derivation |
| wordmark.revealTravel | RESOLVE-phase wordmark shift |
| palette.bg | stage background + SVG field rect fill |
| palette.ink | wordmark color |
| mark.size | pieceGeom size/spacing derivations, polygon points |
| mark.blend | polygon mixBlendMode (screen — produces the measured yellow/cyan overlap regions on black) |
| mark.spacing | pieceGeom centre spacing |
| mark.baseline | baseY derivation (shared baseline for all pieces) |
| motion.easing | easing-table selection for all phase interpolation |
| assembleMs | pieceDur derivation, RESOLVE phase boundary, cycleMs |
| staggerMs | per-piece start offsets, pieceDur derivation |
| resolveMs | resolveDur derivation, RESOLVE progress, cycleMs |
| endHoldMs | cycleMs (residual holder: 2600 + 1200 + 10200 = 14000) |
| stage.width | stage element CSS width/height + displayScale (display size; the SVG scales the coordinate system and the wordmark scales with it) |

Unapplied keys: NONE.

## 3. CSS-variable setter check
No CSS variables are used anywhere in the file — no setter can be missing, no unset-variable reference exists. N/A, PASS.

**HIT list: EMPTY — leg PASS (advisory).**
