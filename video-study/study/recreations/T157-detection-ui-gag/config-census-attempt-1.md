# config-census — T157 · Cycle 025 Wave 22 · attempt 1 (guard-config-census v3.1, Amendment A6 + A9.6)
Instrument: node census script over the final recreation.html — every CONFIG leaf key resolved to application sites in the code after the CONFIG block (occurrence counts below; generic property names shared across objects, e.g. `.x`/`.colour`, are counted across all objects of that name class and the value-flow read is per object in the build: scope/region/badge/homeMarker/banner keys each flow into their named subject's geometry or state). Zero-site keys: [] (one interim zero-site key, bezel.fadeMs, was cured by removal before the wave — the bezel fade is driven by the banner slam progress, banner.slamDurMs).

## Key -> application-site resolution
| CONFIG key | sites |
|---|---|
| stageW | 7 |
| stageH | 8 |
| cycleMs | 3 |
| fontFamily | 2 |
| textDyFrac | 2 |
| easePow | 1 |
| scope.cx | 7 |
| scope.cy | 11 |
| scope.rx | 5 |
| scope.ry | 5 |
| scope.armTurns | 1 |
| scope.armCoeff | 1 |
| scope.armExpBase | 1 |
| scope.armSteps | 1 |
| grid.step | 4 |
| grid.colour | 13 |
| grid.opacity | 2 |
| specks.count | 6 |
| specks.seed | 1 |
| specks.reserveIntensity | 4 |
| specks.rMin | 2 |
| specks.rMax | 1 |
| specks.twinklePeriodMs | 1 |
| specks.colour | 13 |
| specks.twinkleBase | 1 |
| specks.twinkleSwing | 1 |
| bars.count | 6 |
| bars.panel.x | 11 |
| bars.panel.y | 10 |
| bars.panel.w | 4 |
| bars.panel.h | 5 |
| bars.baseHeights[] | 2 |
| bars.jitterAmp | 1 |
| bars.barColour | 1 |
| bars.panelColour | 1 |
| bars.panelStroke | 1 |
| bars.barGap | 2 |
| bars.barPad | 4 |
| bars.animPeriodMs | 1 |
| bars.jitterPhaseStep | 1 |
| bars.minH | 2 |
| bars.panelStrokeW | 1 |
| region.cx | 7 |
| region.cy | 11 |
| region.rx | 5 |
| region.ry | 5 |
| region.drawStartMs | 1 |
| region.drawMs | 1 |
| region.dashColour | 1 |
| region.dashW | 1 |
| region.dashSeg | 1 |
| region.dashGap | 1 |
| badge.x | 11 |
| badge.y | 10 |
| badge.r | 5 |
| badge.popMs | 3 |
| badge.popDurMs | 1 |
| badge.pulseMs | 1 |
| badge.pulseAmp | 1 |
| badge.colour | 13 |
| badge.glyph | 2 |
| badge.glyphColour | 1 |
| badge.glyphFontPx | 2 |
| badge.glyphWeight | 1 |
| homeMarker.x | 11 |
| homeMarker.y | 10 |
| homeMarker.r | 5 |
| homeMarker.colour | 13 |
| homeMarker.ringW | 1 |
| homeMarker.dotR | 1 |
| banner.text | 2 |
| banner.w | 4 |
| banner.h | 5 |
| banner.cy | 11 |
| banner.colour | 13 |
| banner.textColour | 1 |
| banner.fontPx | 2 |
| banner.fontWeight | 1 |
| banner.slamMs | 2 |
| banner.slamDurMs | 1 |
| banner.chevron | 1 |
| banner.overshoot | 3 |
| banner.overshootSplit | 4 |
| bezel.colour | 13 |
| bezel.strokeW | 1 |
| bezel.inset | 4 |
| bezel.sideW | 3 |
| bezel.maxOpacity | 3 |
| palette.plate | 1 |
| palette.galaxy | 1 |
| palette.core | 1 |
| palette.galaxyW | 1 |
| palette.coreR | 1 |
| palette.galaxyOpacityBoost | 2 |

## Literal scan outside CONFIG
- Hex colours outside CONFIG: [] — every subject colour (plate, grid, galaxy, specks, bars, region, badge, home marker, banner, bezel) reads from CONFIG. The page void #000 in CSS is the page background outside the stage (structural, not a subject colour).
- Numeric literals outside CONFIG, classified: 0 / 1 / 2 — loop bounds, index arithmetic, unit identities, clamp bounds — structural. 3 — the Ramanujan ellipse-circumference approximation coefficients in regionCirc (3(rx+ry) form) — mathematical identity, structural (the radii it scales are CONFIG region.rx/ry). 7 / 14 / 15 / 61 / 4294967296 and the mulberry32 shift constants — the seeded PRNG algorithm's constants (structural; the seed itself is CONFIG specks.seed). 2000 — the SVG namespace URI string, structural.
- Subject geometry: scope spiral computed FROM CONFIG scope coefficients (galaxyPoints: arm angle from armTurns, radius from armCoeff + armExpBase over armSteps); region ellipse, badge, home marker, bars panel + bars, banner chevron ribbon (bannerPoints from banner.w/h/chevron/scale) all computed from CONFIG — no literal scene paths exist.
- Background coefficients (A9.6 clause): specks.reserveIntensity / twinkleBase / twinkleSwing and palette.galaxyOpacityBoost are CONFIG keys (the dim-reserve intensity the badge/banner separate from — Owner Cure 1), not structural classifications.
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — check not applicable, no unset-variable references exist.

HITs: 0
