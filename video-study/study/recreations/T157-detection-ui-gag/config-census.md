# config-census — T157 · Cycle 019 Wave 18 · attempt 2 (guard-config-census v3.1, Amendment A6 + A9.6 + practice A-C008)
Instrument: node census over attempt 2's own recreation.html (SHA-256 65826bd6e0a298dd102749edec6f27a1ac2ea5e91e4dfdbe704e6545338f8b49) — every CONFIG leaf key resolved to application sites in the code after the CONFIG block (occurrence counts below; generic property names shared across objects, e.g. `.x`/`.colour`, are counted across all objects of that name class and the value-flow read is per object in the build). PLUS the mutation-based consumption census (practice A-C006-2): every one of the 103 leaf keys was perturbed and a consumed effect change asserted — 103/103 consumed, 0 unconsumed. Attempt-1 census preserved at config-census-attempt-1.md.
Deltas vs attempt 1: palette.galaxyOpacityBoost ABSENT (deleted, not zeroed — the surface is gone); new keys present and consumed: scope.armCount (3 sites), grid.strokeW (3), region.maskW (9), banner.travelPx (3), banner.overshootPx (2); banner.overshoot (scale semantics) REMOVED, replaced by the two distance keys; badge.y site count rises 10 → 11 (the badge text element now consumes it).

## Key -> application-site resolution
| CONFIG key | sites |
|---|---|
| stageW | 8 |
| stageH | 9 |
| cycleMs | 3 |
| fontFamily | 2 |
| textDyFrac | 2 |
| easePow | 1 |
| scope.cx | 8 |
| scope.cy | 12 |
| scope.rx | 10 |
| scope.ry | 10 |
| scope.armTurns | 1 |
| scope.armCoeff | 1 |
| scope.armExpBase | 1 |
| scope.armSteps | 1 |
| scope.armCount | 3 |
| grid.step | 4 |
| grid.colour | 13 |
| grid.opacity | 2 |
| grid.strokeW | 3 |
| specks.count | 6 |
| specks.seed | 1 |
| specks.reserveIntensity | 3 |
| specks.rMin | 2 |
| specks.rMax | 1 |
| specks.twinklePeriodMs | 1 |
| specks.colour | 13 |
| specks.twinkleBase | 1 |
| specks.twinkleSwing | 1 |
| bars.count | 6 |
| bars.panel.x | 11 |
| bars.panel.y | 11 |
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
| region.cx | 8 |
| region.cy | 12 |
| region.rx | 10 |
| region.ry | 10 |
| region.drawStartMs | 1 |
| region.drawMs | 1 |
| region.dashColour | 1 |
| region.dashW | 1 |
| region.dashSeg | 1 |
| region.dashGap | 1 |
| region.maskW | 9 |
| badge.x | 11 |
| badge.y | 11 |
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
| homeMarker.y | 11 |
| homeMarker.r | 5 |
| homeMarker.colour | 13 |
| homeMarker.ringW | 1 |
| homeMarker.dotR | 1 |
| banner.text | 2 |
| banner.w | 4 |
| banner.h | 5 |
| banner.cy | 12 |
| banner.colour | 13 |
| banner.textColour | 1 |
| banner.fontPx | 2 |
| banner.fontWeight | 1 |
| banner.slamMs | 2 |
| banner.slamDurMs | 1 |
| banner.chevron | 1 |
| banner.travelPx | 3 |
| banner.overshootPx | 2 |
| banner.overshootSplit | 4 |
| bezel.colour | 13 |
| bezel.strokeW | 3 |
| bezel.inset | 4 |
| bezel.sideW | 3 |
| bezel.maxOpacity | 3 |
| palette.plate | 1 |
| palette.galaxy | 1 |
| palette.core | 1 |
| palette.galaxyW | 1 |
| palette.coreR | 1 |

Zero-site keys: [] · Mutation census: 103/103 keys consumed, 0 unconsumed.

## Literal scan outside CONFIG
- Hex colours outside CONFIG: #000 and #fff only — #000 is (a) the page void in CSS (structural, page background outside the stage) and (b) the mask's background rect fill (the mask specification's black = fully masking); #fff is the mask reveal ellipse's stroke (white = fully revealing). Both mask values are construction constants of the mask mechanism itself, named here per-literal; every subject colour reads from CONFIG.
- Numeric literals outside CONFIG, classified per-literal: 0 / 1 / 2 — loop bounds, index arithmetic, unit identities, clamp bounds — structural. 0.5 (×2) — the galaxy-opacity ceiling bound in the bounded opacity helper (a clamp bound) — structural. 3 — Ramanujan ellipse-circumference coefficients in regionCirc — mathematical identity, structural. 7 / 14 / 15 / 61 / 4294967296 and the mulberry32 hex/shift constants — the seeded PRNG algorithm's constants (structural; the seed itself is CONFIG specks.seed). 100 — percent/vw unit conversions (stage height from CONFIG aspect; CSS 100%/100vh units) — unit identity, structural. 720 / 405 (×1 each) — the static markup viewBox attribute, overwritten at DOM init from CONFIG stageW/stageH (pre-JS initial attribute, same fallback class as the CSS height) — structural fallback. 56 (in 56.25vw) — the pre-JS CSS fallback height for the default 720×405 aspect; any CONFIG aspect overrides it at init — structural fallback, basis printed in the build record. 8 — the charset declaration (utf-8) — structural. 2000 — inside the SVG namespace URI string — structural.
- Content literals: NONE outside CONFIG — the badge glyph "!" and the banner text live in CONFIG (badge.glyph, banner.text); no content literal was found outside CONFIG.
- Subject geometry: scope spiral computed FROM CONFIG scope coefficients (galaxyPoints: arm count from scope.armCount, phase a × 2π/armCount, angle from armTurns, radius from armCoeff + armExpBase over armSteps); region ellipse + its reveal mask, badge, home marker, bars panel + bars, banner chevron ribbon (bannerPoints at full CONFIG w/h/chevron, positioned by the CONFIG travel/overshoot distances) all computed from CONFIG — no literal scene paths exist.
- Background coefficients (A9.6 clause): specks.reserveIntensity / twinkleBase / twinkleSwing are CONFIG keys (the dim-reserve intensity the badge/banner separate from); the galaxy opacity is that reserve passed through a fixed 0.5 ceiling clamp — the ceiling is a clamp bound (classified above), the intensity itself is the CONFIG key.
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — check not applicable, no unset-variable references exist.

HITs: 0
