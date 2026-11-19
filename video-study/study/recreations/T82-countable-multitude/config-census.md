# T82 — config-census leg (guard-config-census v3.1) · config-census

Build: recreation.html (final, sha256 in scores.md). Method: all-literal scan of the final file outside the CONFIG block + key→site resolution + CSS-variable check.

## Literal scan (outside CONFIG)
- Hex colors outside CONFIG: **0** (all six hex values in the file occur once each, inside `palette{}`; pre-census cure: glyph inner-line color was a "#0d2150" literal in `drawGlyph` → now `C.palette.bg`; CSS page background is the named color `black`, page chrome outside the stage).
- Font stacks: the only stack is `type.font` in CONFIG, applied at both fillText sites. No CSS font-family anywhere. ✓ (Cycle-013 clarification)
- Durations: all in CONFIG (buildMs, pulseMs, holdMs, timeline.*). No timing literal in logic.
- Geometry/subject-shaping constants: wall/HUD/amber geometry, glyph inset + line ratios, shade range, pulse gain, glow — all in `geom{}` (pre-census cure moved glyphLineA/B/H, shadeMin/shadeSpan, pulseGain into geom). Remaining numeric literals in logic, classified per constant:
  - `127.1`, `43758.5453` — hash coefficients of the deterministic shade function: **structural** (mathematical identity of the hash; the shade RANGE it feeds is CONFIG `geom.shadeMin/shadeSpan`).
  - `2*Math.PI` — circle identity: **structural**.
  - `+0.5/+0.6/-1/-1.2/+8/+16` cell/panel padding arithmetic derived from CONFIG pitch values: **structural** (sub-pixel inset arithmetic, scales with CONFIG geometry).
  - `0.85`, `0.9`, `0.95` alpha multipliers in draw calls: **structural presentation constants** — printed here per the census; they scale opacity uniformly and do not select content, timing, palette, or geometry. (Named openly; a lens may price them as residual.)
  - Loop bounds / index arithmetic (`i % cols`, `Math.floor(i/cols)`): **structural**.
- Scene-generator geometry (Cycle-013 clarification): the only generator is the grid itself; its geometry is fully in `grid{}` + `geom{}`. ✓

## Key → application-site resolution (incl. nested keys)
| CONFIG key | Site(s) |
|---|---|
| hud.year / hud.dayLine / hud.clock | render(): fillText year line + clock |
| grid.cols / grid.rows | computeState total; render() pitch + loops |
| lit.index | render() lit position (clamped); computeState skip |
| lit.scale | render() lit footprint |
| amber.cols / amber.rows | computeState aTotal; render() amber pitch + loop |
| palette.bg | render() stage fill; drawGlyph inner lines |
| palette.cell | render() cells; lit inner glyph |
| palette.lit | render() lit fill + glow shadowColor |
| palette.amber | render() amber cells |
| palette.hudInk | render() HUD fillText |
| palette.panel | render() wall panel |
| buildMs | computeState build phase end / amber start |
| pulseMs | computeState pulse |
| holdMs | TOTAL derivation |
| timeline.litAloneMs | computeState phase boundary + build start |
| timeline.amberDoneMs | computeState amber completion; TOTAL |
| type.font | render() both ctx.font assignments |
| geom.* (all 20 keys) | render()/computeState()/cellShade() as named |

No unapplied key. **CSS-variable setter check:** this build uses no CSS variables (canvas rendering; the only CSS is page chrome) — check vacuously PASS, no setter can be missing.

**HIT list: EMPTY (0 HITs) — PASS for this leg (advisory).**
