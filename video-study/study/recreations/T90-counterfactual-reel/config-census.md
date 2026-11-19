# T90 — config-census leg (guard-config-census v3.1) · config-census.md

Build bound: recreation.html sha256 657f15b73cb26d34aa79a0516e8b932d81251398e6529b11ca23964e516962a1 (final cured build; re-run after the interim-wave cures).

## 1. All-literal scan (outside the CONFIG block)
- Hex colors outside CONFIG: **0** (all fills/strokes read palette.* or CFG.palette.bg inside glyph code).
- Font stacks outside CONFIG: **0** — the only font declaration is `stage.style.fontFamily = CFG.type.font` in JS; the CSS block carries no font-family (Cycle-013 clarification applied).
- Numeric literals outside CONFIG, classified per constant:
  - Cubic coefficients (3, and the u/u²/u³ products): **structural** (mathematical identity of the Bézier evaluation; the control points themselves are CONFIG geom.branchP0–P3).
  - Branch sampling steps 240: **structural** (polyline resolution of the CONFIG-defined curve; changing it changes smoothness of sampling, not the subject's shape or timing).
  - Validation domains — string cap 90, year bounds 1900/2200, shelf cap 8, beats cap 6, ms cap 60000, px bounds 4/120, frac bounds (0,1), offset bounds ±260, point bounds 0/400, stage bounds 240–720 / 200–720, spacing cap 8: **structural** (override-schema bounds).
  - CSS 0 margins/padding, inset 0, z-index 5/4: **structural**.
  - Glyph-definition constants — the proportional fractions inside `glyph()` (radii/widths as fractions of the size argument, stroke-width 2, dash pattern "4 3", rotate −8, tag offsets −14/+2/+8): **subject-shaping by design, declared ownership: the glyph library** (the build's header comment states the boundary: a fixed generic icon set; customization = CONFIG iconPx/glyphPx sizes + palette; glyph-internal proportions are library-owned). Their SCALE is CONFIG-bound (geom.iconPx, geom.shelfIconPx, typeSize.glyphPx). No specimen-specific value hides there (glyphs are generic, not tracings).
  - Figure-definition constants — the proportional offsets inside the static scene builder's two watcher figures: **declared ownership: the static scene builder** (header comment); their SCALE is CONFIG-bound (geom.figChildH/figParentH, positions figChildX/figParentX/figBaseY).
  - Subject-shaping literals outside CONFIG with no declared ownership: **0** (cures bound the intensity steps — geom.shelfOpacity/iconOpacity/contextOpacity — the branch dot radius geom.branchDotPx, the shelf icon size geom.shelfIconPx, the projection inset geom.projInsetPx, and the line clear-field pad geom.linePadPx into CONFIG).

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| Key | Application site |
|---|---|
| hud.year / hud.dayLine | yearEl.textContent (composed year line) |
| hud.clock | clockEl.textContent |
| shelf.icons[] (array member) | staticSVG shelf loop → glyph(name, …) per member, positions from shelfX0/X1 ÷ count |
| beats[].icon (array member) | render() → glyph(b.icon, nodePoint(i), …) |
| beats[].line (array member) | lineEls[i].textContent |
| beats[].atMs (array member) | render() discrete visibility test `t >= b.atMs` (validated < timing.totalMs at the override surface) |
| beats[].frac / dx / dy (array members) | beatFrac() → nodePoint(i) · lineEls[i] left/top (geom.nodeFracs/lineDx/lineDy are the documented fallbacks) |
| beats[].completeMs (array member) | beatCompleteAt() → counter-part completion test for that beat (fallback: timing.reelEndMs) |
| introMs | render() branch progress `min(1, t / introMs)` (validated < totalMs) |
| endHoldMs | cycle identity: timing.totalMs = timing.reelEndMs + endHoldMs (the post-reel segment-handle hold; harness-asserted) |
| palette.bg | stage background · projection panel rect · line clear-field background · glyph counter-strokes |
| palette.ink | HUD colors · line colors · glyph strokes/fills · figure fill |
| palette.accent | shelf line · glyph accents · travelling dot · table fill · parent figure |
| palette.branch | branch path stroke in render() |
| palette.scene | room background rect |
| type.font | stage.style.fontFamily (single setter) |
| timing.totalMs | render() loop modulus (authoritative cycle length) |
| timing.reelEndMs | beatCompleteAt() fallback + cycle identity above |
| stage.width / stage.height | stage style · SVG viewBox/width/height |
| typeSize.yearPx / yearSpacingPx / clockPx | yearEl / clockEl style setters |
| typeSize.linePx / lineHeightPx | beat-line div style setters |
| typeSize.glyphPx | "?" glyph font-size in glyph() |
| geom.hudTop / hudLeft / clockGapPx | hudEl position · clock margin |
| geom.projTop / projBottom / projInsetPx | projection panel rect |
| geom.shelfY / shelfX0 / shelfX1 / shelfIconY / shelfIconPx / shelfWidthPx / shelfOpacity | shelf line + icon loop in staticSVG |
| geom.branchP0–P3 / nodeFracs | cubic() / nodePoint() — branch path + beat icon positions + line positions |
| geom.iconPx / branchWidthPx / branchDotPx / iconOpacity | beat glyph size · branch stroke · travelling dot · beat-icon fills |
| geom.lineDx[] / lineDy[] / lineWidthPx / linePadPx (array members) | beat-line div left/top/width/padding fallbacks + clear field |
| geom.tableY / tableH / tableX0 / tableX1 | context table rect |
| geom.figChildX / figParentX / figBaseY / figChildH / figParentH | context figure paths |
| geom.contextOpacity | context group opacity |
| context.enabled / figures / table | staticSVG context-group inclusion tests |

Override surface (?cfg=, allowlisted + validated): hud · shelf.icons · beats (all members, with relationship validation: atMs < totalMs, completeMs in (atMs, totalMs)) · introMs · endHoldMs · palette · type.font · typeSize · stage · geom (branch points, node fractions, line offsets, sizes, opacities, pad) · timing (totalMs, reelEndMs < totalMs) · context. Unapplied keys: **0**.

## 3. CSS-variable setter check
The build uses NO CSS variables: every CONFIG value is consumed by a direct JS style assignment or string construction, each setter verified present in §2. Unset-variable references: **0** (class not applicable — no var() references exist).

## HIT list
**EMPTY — 0 HITs** (after the pre-scoring cures and the interim-wave reusability cures recorded in build-record.md: override surface extended to timing/typeSize/stage/geom, per-beat frac/dx/dy/completeMs members, timing relationship validation, projection inset + line pad bound into CONFIG, glyph/figure ownership declared in the build header).
