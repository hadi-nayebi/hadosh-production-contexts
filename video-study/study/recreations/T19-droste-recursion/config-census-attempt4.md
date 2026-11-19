# T19 attempt 4 — config-census leg (guard-config-census v3.1, by reference)

Source: recreation.html sha256 `388a0e65cad533724ae774531dc312e0de783fd36c0ab9fe60efe0b3171794df` (frozen before the wave). Census against THIS attempt's own CONFIG (**122 leaf keys** — attempt 3's 124, minus the three removed independent literals `levelScale` / `zoomAnchorXPercent` / `zoomAnchorYPercent`, plus `geometry.stageFallbackWidthPx`). The removed values exist only as resolution-time derived values, asserted in the own-check suite (derived levelScale = 0.486, anchors 32 / 64 on default geometry; a geometry edit moves them by the derived amounts) and published in the playback diagnostics — they are not CONFIG leaves and are not counted here. Consumption is mutation-checked in the suite for the changed keys (geometry swaps, stage aspect, fallback width), not counted alone (A-C006-2).

## Key -> application-site resolution

| CONFIG key = value | Resolution |
|---|---|
| durationMs = 3625 | applied (36 site refs outside CONFIG) |
| playbackMode = "once" | applied (10 site refs outside CONFIG) |
| labelText = "THIS VIDEO" | applied (9 site refs outside CONFIG) |
| depth = 3 | applied (18 site refs outside CONFIG) |
| candleCount = 3 | applied (10 site refs outside CONFIG) |
| figureButtons = 3 | applied (7 site refs outside CONFIG) |
| checkpoints.pushStartMs = 500 | applied (10 site refs outside CONFIG) |
| checkpoints.anchorMs = 875 | applied (5 site refs outside CONFIG) |
| checkpoints.pushEndMs = 2500 | applied (12 site refs outside CONFIG) |
| checkpoints.holdEndMs = 3100 | applied (6 site refs outside CONFIG) |
| checkpointPolicy.minSeparationMs = 250 | applied (5 site refs outside CONFIG) |
| zoomStart = 0.94 | applied (17 site refs outside CONFIG) |
| zoomEnd = 1.2 | applied (10 site refs outside CONFIG) |
| labelFontFactor = 0.05 | applied (5 site refs outside CONFIG) |
| labelMinPx = 11 | applied (5 site refs outside CONFIG) |
| medallionText = "✶" | applied (7 site refs outside CONFIG) |
| typography.letterSpacingEm = 0.08 | applied (2 site refs outside CONFIG) |
| typography.lineHeight = 1 | applied (6 site refs outside CONFIG) |
| typography.medallionFactor = 0.8 | applied (2 site refs outside CONFIG) |
| typography.medallionMinPx = 6 | applied (2 site refs outside CONFIG) |
| typography.glyphAdvanceEm = 0.62 | applied (2 site refs outside CONFIG) |
| typography.medallionAdvanceEm = 0.62 | applied (1 site refs outside CONFIG) |
| typography.fontFamily = "Georgia, 'Times New Roman', serif" | applied (2 site refs outside CONFIG) |
| flicker.amp = 0 | applied (19 site refs outside CONFIG) |
| flicker.periodDivisorMs = 170 | applied (5 site refs outside CONFIG) |
| flicker.phaseStepRad = 2.1 | applied (5 site refs outside CONFIG) |
| palette.bg = "#07050a" | applied (1 site refs outside CONFIG) |
| palette.hall = "#171019" | applied (9 site refs outside CONFIG) |
| palette.drape = "#7e1f2b" | applied (36 site refs outside CONFIG) |
| palette.drapeDark = "#4a121d" | applied (3 site refs outside CONFIG) |
| palette.drapeFold = "#5d1724" | applied (4 site refs outside CONFIG) |
| palette.candleBody = "#e8dcc0" | applied (2 site refs outside CONFIG) |
| palette.flame = "#ffca7a" | applied (28 site refs outside CONFIG) |
| palette.flameCore = "#fff3d0" | applied (2 site refs outside CONFIG) |
| palette.glow = "#ffb35c" | applied (2 site refs outside CONFIG) |
| palette.staffWood = "#6e3b22" | applied (1 site refs outside CONFIG) |
| palette.staffOrb = "#ffc46b" | applied (1 site refs outside CONFIG) |
| palette.robe = "#2c3a5e" | applied (18 site refs outside CONFIG) |
| palette.robeShade = "#1d2742" | applied (1 site refs outside CONFIG) |
| palette.hood = "#14100e" | applied (15 site refs outside CONFIG) |
| palette.face = "#f0d7ae" | applied (31 site refs outside CONFIG) |
| palette.faceRim = "#caa06a" | applied (1 site refs outside CONFIG) |
| palette.button = "#ffd98c" | applied (10 site refs outside CONFIG) |
| palette.table = "#3d1420" | applied (29 site refs outside CONFIG) |
| palette.frameBg = "#10182e" | applied (2 site refs outside CONFIG) |
| palette.frameBorder = "#d9b96a" | applied (5 site refs outside CONFIG) |
| palette.frameInner = "#05070f" | applied (1 site refs outside CONFIG) |
| palette.curtain = "#8e2434" | applied (22 site refs outside CONFIG) |
| palette.label = "#e9cf8f" | applied (47 site refs outside CONFIG) |
| geometry.drapeLeftPercent = 55 | applied (4 site refs outside CONFIG) |
| geometry.drapeWidthPercent = 45 | applied (2 site refs outside CONFIG) |
| geometry.drapeTransitionOffsetPercent = 6 | applied (1 site refs outside CONFIG) |
| geometry.drapeFoldPeriodPx = 18 | applied (3 site refs outside CONFIG) |
| geometry.backdropGradientDeg = 90 | applied (1 site refs outside CONFIG) |
| geometry.drapeGradientDeg = 90 | applied (2 site refs outside CONFIG) |
| geometry.drapeSplitPercent = 50 | applied (1 site refs outside CONFIG) |
| geometry.stageAspectW = 16 | applied (3 site refs outside CONFIG) |
| geometry.stageAspectH = 9 | applied (3 site refs outside CONFIG) |
| geometry.stageFallbackWidthPx = 960 | applied (3 site refs outside CONFIG) |
| geometry.candleLeftPercent = 33 | applied (2 site refs outside CONFIG) |
| geometry.candleTopPercent = 10 | applied (2 site refs outside CONFIG) |
| geometry.candleWidthPercent = 9 | applied (5 site refs outside CONFIG) |
| geometry.candleHeightPercent = 34 | applied (3 site refs outside CONFIG) |
| geometry.staffLeftPercent = 43 | applied (2 site refs outside CONFIG) |
| geometry.staffTopPercent = 10 | applied (2 site refs outside CONFIG) |
| geometry.staffWidthPercent = 2.2 | applied (3 site refs outside CONFIG) |
| geometry.staffHeightPercent = 46 | applied (2 site refs outside CONFIG) |
| geometry.figureRightPercent = 3 | applied (2 site refs outside CONFIG) |
| geometry.figureTopPercent = 6 | applied (2 site refs outside CONFIG) |
| geometry.figureWidthPercent = 36 | applied (4 site refs outside CONFIG) |
| geometry.figureHeightPercent = 82 | applied (3 site refs outside CONFIG) |
| geometry.tableLeftPercent = 0 | applied (2 site refs outside CONFIG) |
| geometry.tableTopPercent = 86 | applied (2 site refs outside CONFIG) |
| geometry.tableWidthPercent = 62 | applied (2 site refs outside CONFIG) |
| geometry.tableHeightPercent = 14 | applied (2 site refs outside CONFIG) |
| geometry.frameLeftPercent = 5 | applied (4 site refs outside CONFIG) |
| geometry.frameTopPercent = 38 | applied (6 site refs outside CONFIG) |
| geometry.frameWidthPercent = 54 | applied (6 site refs outside CONFIG) |
| geometry.frameHeightPercent = 52 | applied (6 site refs outside CONFIG) |
| geometry.frameHeaderPercent = 28 | applied (10 site refs outside CONFIG) |
| geometry.curtainWidthPercent = 5 | applied (8 site refs outside CONFIG) |
| geometry.frameBorderPx = 2 | applied (2 site refs outside CONFIG) |
| geometry.frameBorderMinPx = 1 | applied (2 site refs outside CONFIG) |
| geometry.tableRadiusPercent = 50 | applied (2 site refs outside CONFIG) |
| components.candle.stepCapPercent = 30 | applied (5 site refs outside CONFIG) |
| components.candle.widthPercent = 22 | applied (11 site refs outside CONFIG) |
| components.candle.baseHeightPercent = 62 | applied (2 site refs outside CONFIG) |
| components.candle.altHeightDeltaPercent = 16 | applied (2 site refs outside CONFIG) |
| components.candle.borderRadiusPercent = 12 | applied (2 site refs outside CONFIG) |
| components.candle.flameLeftPercent = 22 | applied (1 site refs outside CONFIG) |
| components.candle.flameTopPercent = -26 | applied (2 site refs outside CONFIG) |
| components.candle.flameWidthPercent = 56 | applied (1 site refs outside CONFIG) |
| components.candle.flameHeightPercent = 24 | applied (1 site refs outside CONFIG) |
| components.candle.flameGradientStopPercent = 62 | applied (1 site refs outside CONFIG) |
| components.staff.borderRadiusPercent = 40 | applied (2 site refs outside CONFIG) |
| components.staff.orbLeftPercent = -90 | applied (1 site refs outside CONFIG) |
| components.staff.orbTopPercent = -7 | applied (1 site refs outside CONFIG) |
| components.staff.orbSizePercent = 280 | applied (2 site refs outside CONFIG) |
| components.staff.orbGradientStopPercent = 55 | applied (1 site refs outside CONFIG) |
| components.robe.leftPercent = 6 | applied (5 site refs outside CONFIG) |
| components.robe.topPercent = 34 | applied (7 site refs outside CONFIG) |
| components.robe.widthPercent = 88 | applied (11 site refs outside CONFIG) |
| components.robe.heightPercent = 66 | applied (4 site refs outside CONFIG) |
| components.robe.radiusTopPercent = 44 | applied (2 site refs outside CONFIG) |
| components.robe.gradientDeg = 180 | applied (1 site refs outside CONFIG) |
| components.hood.leftPercent = 14 | applied (5 site refs outside CONFIG) |
| components.hood.topPercent = 0 | applied (7 site refs outside CONFIG) |
| components.hood.widthPercent = 72 | applied (11 site refs outside CONFIG) |
| components.hood.heightPercent = 46 | applied (4 site refs outside CONFIG) |
| components.hood.radiusBottomPercent = 46 | applied (2 site refs outside CONFIG) |
| components.hood.radiusTopLeftPercent = 50 | applied (1 site refs outside CONFIG) |
| components.hood.radiusTopRightPercent = 50 | applied (1 site refs outside CONFIG) |
| components.face.leftPercent = 27 | applied (5 site refs outside CONFIG) |
| components.face.topPercent = 9 | applied (7 site refs outside CONFIG) |
| components.face.widthPercent = 46 | applied (11 site refs outside CONFIG) |
| components.face.heightPercent = 30 | applied (4 site refs outside CONFIG) |
| components.face.gradientStopPercent = 58 | applied (1 site refs outside CONFIG) |
| components.button.leftPercent = 47 | applied (5 site refs outside CONFIG) |
| components.button.topStartPercent = 56 | applied (2 site refs outside CONFIG) |
| components.button.stepCapPercent = 11 | applied (5 site refs outside CONFIG) |
| components.button.sizePercent = 6 | applied (3 site refs outside CONFIG) |
| components.button.maxTopPercent = 92 | applied (1 site refs outside CONFIG) |

## Literal scan outside CONFIG

- Hex colors outside CONFIG: 6 occurrences — #10182e, #e9cf8f, #d9b96a (×2 each: the CONFIG header's per-literal naming of the exclusion + the `#diagnostics` badge CSS in the style block); classified per-literal as the named diagnostics-badge exclusion (playback UI, not scene construction; badge text is generated from state, no technique content rides the exclusion).
- px literals outside CONFIG: 13 occurrences — the badge exclusion set (10px font, 2px/6px padding, 1px border, 4px offsets) plus 0px radius/position structural zeros and CONFIG-computed px expressions (fold/border/medallion/label sizes are built from CONFIG values at runtime).
- vh literals outside CONFIG: 1 — `177.78vh`, the stage width cap in the emitted CSS (= 100vh × 16/9, the viewport-height guard for the CONFIG aspect's controlling-dimension form; structural layout arithmetic, whitelisted per-literal here and in the build record).
- deg literals outside CONFIG: 0 — gradient directions are CONFIG fields consumed by the gradient strings.
- Percent literals outside CONFIG: structural fills (0%/100%), the 50% circle form for flame/orb/face/button radial elements, radius corner zeros — classified structural in the build record whitelist; all shaping percents are CONFIG values or expressions over them.
- CSS-variable setter check: this build uses no CSS variables for CONFIG consumption (direct style assignment from CONFIG at build time, plus the stage aspect set from CONFIG at assembly) — class not applicable, printed explicitly.
- Font-family stacks: the scene font stack is the CONFIG key typography.fontFamily, applied to document.body at assembly; no font stack remains in CSS.

**HIT list: EMPTY — PASS for this leg** (unapplied keys: 0; stray deg literals: 0).
