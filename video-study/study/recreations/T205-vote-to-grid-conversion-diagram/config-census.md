# T205 — Config-census leg (A6 / guard-config-census v3.1) — final build (completion cure round, Cycle 037)

Build: recreation.html sha256 `64c7b905300b689785b981d6723647d6b3357a90b0a6fbb7902e3e320c2d95b3` (18,570 B). Re-scanned on the cured final build by the completion builder (cure round changed renderer geometry + wired `content.blockLabel`; see §2/§4 updates below). **Cycle 038 completion revision (2026-11-18, Wave 35):** the build is UNCHANGED in Cycle 038 (same hash/size); this census is revised ONLY in §2's grouped `phases[]` row — split into runtime phases vs schedule-metadata phases (substrateHold · convertedHold) with the governing disposition for schedule-metadata phases recorded (plan-amendment-cycle038.md C38-3, curing jev-prewave firing-2 finding 3). All other rows and the 0-HIT count stand as re-verified against the unchanged build.
Method: all-literal scan over (a) the PURE block after the CONFIG literal and (b) the DOM/render section; per-constant classification; key→site resolution incl. nested/array keys; CSS-variable setter check.

## 1. All-literal scan
- PURE logic after CONFIG: numeric literals = {0, 1, 2} only (identity/boundary constants in prog/stateAt + halving in centre derivations and `2 * pad` in wash geometry — structural). Hex literals after CONFIG: **none**.
- DOM/render section: hex literals: **none** (the texture tint `#e3ded2` found in the first draft was CURED pre-filing by moving it to `palette.texture`; paper/box/slot strokes likewise moved to palette keys). Numeric literals: {0, 1, 2, 3, 2000} — classified: 0/1 = SVG attribute zeros and opacity identities (structural) · 2 = halving in centre derivations `(width − gridW)/2` and `2 * pad` (structural identity) · 3 = `toFixed(3)` opacity print precision (structural) · 2000 = the SVG namespace URI `http://www.w3.org/2000/svg` (structural string, not a value).
- Page CSS (head style): `#e9e6df` page background + control sizing — page chrome outside the stage subject; classified structural (does not shape the diagram; the stage ground is `palette.ground`).
- Subject-shaping literals outside CONFIG: **0**.

## 2. Key → application-site resolution (every CONFIG key; value-flow sites)
| Key | Site(s) where the value flows into the subject |
|---|---|
| content.ballotLabel | label text element textContent |
| content.blockLabel | renderer branch (WIRED in the completion cure round, Addendum 1 D4): pure helper `blockLabelText(cfg)` returns the value; the DOM renderer creates a block-label text element over each block's rect iff the helper returns non-null — specimen value null → no element created (absence applied, demonstrated in the harness BLOCKLABEL receipts) |
| content.checkPath | check path `d` attribute (specimen + swap, one binding) |
| grid.cols / grid.rows | cell generation loops; totalCells; block range validation |
| grid.cellPx / grid.gapPx | pitch(); every cell rect x/y/width/height; blockRect |
| blocks[].id | wash rect map key; fillByBlock key; stateAt fill assignment |
| blocks[].colRange / rowRange | blockRect (wash geometry); blockCellCount; validateConfig bounds |
| blocks[].fillOrder | stateAt ordering of fills |
| blocksToFill | stateAt fill loop bound |
| outlines[].colRange / rowRange | outline path geometry generation |
| palette.ground | stage background rect fill |
| palette.cell | every cell rect fill |
| palette.outline | outline group stroke |
| palette.disc | disc circle fill |
| palette.box / palette.paper | box rect fill / paper rect fill |
| palette.connector / palette.fill | connector rect fill / wash rect fill |
| palette.fillAlpha | wash rect opacity = fillProgress × fillAlpha (render) |
| palette.checkIdle / palette.checkActive | stateAt checkColor → check path stroke |
| palette.texture / paperStroke / boxStroke / slot / labelInkOnBox | texture lines stroke / paper stroke / box stroke / slot fill / label fill |
| ground.textureOn | texture line generation branch |
| geom.discDiameterPx | disc circle r |
| geom.boxScale | paper/box width+height scaling |
| geom.connectorThicknessPx | connector rect height |
| geom.paperLiftPx | stateAt paperLiftPx → paper/check y in render |
| geom.paperStubFraction | stateAt paperProgress during paperGrow |
| geom.checkStubTick | stateAt checkProgress before checkDraw |
| geom.labelFontPx | label font-size |
| geom.discCenterXPx / paperWPx / paperHPx / boxWPx / boxHPx / ballotStackOffsetPx / connectorGapPx / outlinePadPx / outlineStrokePx / washPadPx / paperStrokePx / checkStrokePx / checkOffsetXPx / checkOffsetYPx / checkScale / checkPathLength / boxStrokePx / boxRadiusPx / slotInsetPx / slotHeightPx / labelBaselineOffsetPx / textureStepPx / textureOffsetPx / textureStrokePx | each read at its named render site (disc centre, paper/box rects, stack offsets, outline/wash padding, strokes, check transform, slot, label baseline, texture loop); connectorGapPx specifically: `splitGridX()` derives the split grid left edge (disc centre + disc radius + gap) → renderer split translation + `connectorGeometry` target + `visibleCellStats`/`washVisibility` receipts |
| layout.side | mirror branch (disc centre + connector direction + split geometry mirrored via `splitGridXMirror`) |
| layout.splitFirstVisibleCol | REMOVED in the completion cure round (Addendum 1 D1): its only sites were the superseded split formula that priced the crop on the wrong side; split visibility is now derived geometrically by `visibleCellStats` from `splitGridX`. Not a CONFIG key on the final build — printed here so the removal is reconciled, not silent |
| fade.residualOpacity | stateAt diagramOpacity → root group opacity |
| stage.widthPx / heightPx / durationMs | SVG viewBox; texture loop bound; validateConfig phase bounds; player end |
| phases[].id/startMs/endMs — RUNTIME phases (outlineDraw · layoutShift · paperGrow · checkDraw · connectorExtend · paperRetract · paperReappear · blockWash · fadeOut) | phaseOf/prog — the SOLE timing authority; each of these phases' progress value is read by `stateAt` via `prog()` and drives a rendered state field |
| phases[].id/startMs/endMs — SCHEDULE-METADATA phases (substrateHold · convertedHold) — Cycle 038 reconciliation (plan-amendment-cycle038.md C38-3, curing jev-prewave firing-2 finding 3) | NO independent runtime/renderer effect, named as metadata: `substrateHold` is read by NO state field — its interval [1900, 2500] is the gap the outline-complete state persists through between outlineDraw completion and layoutShift start. `convertedHold`'s boundaries supply HARNESS TIMING ONLY — its startMs anchors the CP13 evaluation instant (`phases.convertedHold.startMs + 1000`) and its endMs coincides with fadeOut's start; the held rendered state itself is produced by blockWash completion (fillByBlock.west = 1) persisting while fadeOut has not started, not by any convertedHold progress read (no `prog(cfg, "convertedHold", …)` call exists in the build). GOVERNING DISPOSITION for schedule-metadata phases: a phases[] entry whose only role is schedule metadata is lawful CONFIG data — it keeps phases[] the sole, contiguous timing authority (plan-amendment-cycle037.md Cure 5) — and is NOT an unapplied key, provided the census names it as metadata, as this row now does. It is counted neither as a value-flow site nor as a HIT. |

## 3. CSS-variable setter check
The build uses **no CSS variables** for CONFIG consumption (values flow through JS/SVG attributes). No unset-variable references exist. Check prints: NONE-BY-DESIGN.

## HIT list
**EMPTY — 0 HITs on the final build (unchanged in Cycle 038; §2 phases[] wording reconciled per C38-3 — a wording/disposition cure, not a HIT cure: the two schedule-metadata phases are now named as metadata under the governing disposition in §2, and no key's application state changed).** Cure history (priced, not hidden): the first-draft scan found two unapplied keys (`palette.labelInk`, `content.checkViewBox`) and one subject-shaping literal outside CONFIG (`#e3ded2` texture tint, plus paper/box/slot stroke hexes in the renderer). All were cured BEFORE any firing — keys deleted, hexes moved to palette keys, renderer geometry moved to geom.* keys — and own-checks + this census were re-run on the cured build. Completion cure round (Cycle 037, jev-prewave firing-1 finding 4): the earlier version of this census claimed a renderer branch for `content.blockLabel` that the build did not carry (the key occurred only at its declaration) — cured by WIRING the branch (Addendum 1 D4, harness BLOCKLABEL receipts in build-record.md), not by editing the claim. The same round removed `layout.splitFirstVisibleCol` + `geom.splitRightMarginPx` (superseded split formula, Addendum 1 D1) and added `geom.connectorGapPx`. The census on the completion-final build finds: 0 subject-shaping literals outside CONFIG · every CONFIG key resolved to a value-flow site · no CSS variables in play.
