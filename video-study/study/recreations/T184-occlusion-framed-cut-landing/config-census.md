# config-census — T184 Occlusion-framed cut landing (guard-config-census v3.1, A6 pre-wave leg)

_Prices the final recreation.html (SHA-256 `4ff829ce715e306fa9495de0e92cf604afaed27df5ce6915c17c3ae1e6b921d8`). All-literal scan of the full file performed by the builder (grep census over numeric/hex literals, classified per constant below)._

## Retired-key check (§2d.2 — binding)
`coverageAt1900` — scanned for explicitly: **ABSENT** from CONFIG and from the whole file (harness raw line: `hasCoverageAt1900: false` · assertion `config.noCoverageAt1900Key` PASS). The 1900 ms checkpoint is a Plan bound in code (see literal `1900` classification below), not a CONFIG key. **No HIT.**

## 1. All-literal scan (outside the CONFIG block)
| literal | site | classification |
|---|---|---|
| `1900` | `revealStartMs` formula `Math.max(cfg.cutMs, 1900)` · drift span `1900 - cfg.cutMs` | structural-prescribed — the §2c.4/§2d.2 census-checkpoint bound, carried in code BY DESIGN (§2d.2 retired it as a CONFIG key; a key would recreate the retired semantics). Not subject-shaping: it names WHEN the checkpoint sits, a Plan constant identical for every drive of this technique |
| `100` / `56` | coverage evaluator grid (COLS/ROWS) | structural — the §2c.4 prescribed measurement instrument |
| `0.5` | grid cell-centre offsets `(r+0.5)`, `(c+0.5)` | structural — centre-sampling identity |
| `0.06` / `0.97` / `0.005` / `0.01` / `240` | solver anchors, step, tolerance, bound | structural-prescribed — §2d.2's deterministic placement prescription, verbatim |
| `+0.06` (count-1 width) | solver single-figure branch | structural-prescribed — §2d.2's count-1 rule, verbatim |
| `24` / `18` | guitar-visibility sampling grid (NX/NY) | structural — measurement instrument resolution |
| `1000` | ms↔s conversions (pan, clock) | structural — unit identity |
| `2` | drift halving (`-driftPx/2` per §2d.2) · width halves · full-box sampling `2*ry` | structural-prescribed / arithmetic identity |
| `0` / `1` | clamp01 bounds, indices, phase endpoints | structural — clamp/index identities |
| `#000` | CSS page background (furniture around the stage) | structural — page chrome, not scene content (both scenes paint their own CONFIG colours over the full stage) |
| `177.78vh` / `16/9` | stage max-width / aspect-ratio | structural — 16:9 stage identity |
| `"-5%"` / `"110%"` | SVG filter region bounds | structural — filter-region identity (blur strength itself is CONFIG `occluderBlurPx`) |
| `http://www.w3.org/2000/svg` | SVG namespace string | structural — platform identity |
| meta digits (`utf-8`, viewport `1`) | document head | structural |

No subject-shaping literal stands outside CONFIG. All shaping values (cut/duration/pan, occluder count/widths/colour/drift, landing coverage, reveal duration, guitar/sky/interior/town palettes, stage, occluder head/torso geometry, townscape hills/houses/minaret/roof/balcony geometry, musician + guitar geometry) live in CONFIG.

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| key | application site(s) |
|---|---|
| cutMs | stateAt scene switch · render scene swap · drift span · revealStartMs formula input |
| durationMs | render clock clamp · __rec.seek clamp |
| panPxPerSec | stateAt panPx · town group translate in render |
| occluderCount | solveOccluders branch + CONFIG-error halt (≠1,2 throws) |
| occluderWidths[] | solveOccluders figure widths (both members consumed) |
| occluderColor | occluder head circle + torso rect fills |
| occluderDriftPx | occluderOffsetsAt drift (left +full, right −half) |
| landingCoverage | solveOccluders target + count-1 width derivation |
| revealMs | occluderOffsetsAt clearing progress divisor |
| guitarColor | guitar body ellipse + neck rect fills |
| skyColor | scene-A sky rect fill |
| accentLabel | data-only — consumed by the swap harness (build loads + all assertions pass under the swapped label, §2c.1e); no render site BY DESIGN (never rendered) |
| stage.w / stage.h | SVG viewBox · coverage/visibility evaluators · solver anchors · clearing exit distances |
| occluderHeadR / occluderHeadCy / occluderTorsoTop | makeOccluder primitives → coverage test + rendered head/torso |
| occluderBlurPx | feGaussianBlur stdDeviation (soft edge) |
| town.hillColor / wallColor / roofColor / minaretColor / minaretCapColor | hills / house walls / roofs / minaret body+balcony / cap fills |
| town.hills[] / houses[] / minaret{} | hill rects / house rects+roof polygons / minaret rects+cap polygon (all members consumed by the render loops) |
| town.roofOverhang / roofRise / balconyOver / balconyH / capOver | roof polygon points / balcony rect / cap polygon points |
| interior.bgColor / figureColor / skinColor | scene-B background rect / musician torso+legs / musician head |
| interior.musicianCx / headCy / headR / torsoTop / torsoW / torsoH / legY / legW / legH | musician head circle + torso rect + leg rect |
| interior.guitar.cx/cy/rx/ry | guitar ellipse + visibility evaluator bbox |
| interior.guitar.neckX/neckY/neckW/neckH/neckAngleDeg | guitar neck rect + rotate transform |

## 3. CSS-variable setter check
No CSS variables are used; CONFIG values flow through JS directly. The one `url(` occurrence in the file is `url(#soften)` — an in-file SVG filter reference whose stdDeviation is set from CONFIG `occluderBlurPx` at build; classified per guards.md command 1 (Cycle-026 precision): an in-file fragment reference, not an external asset and not a specimen reference. No unassigned-variable class present.

**HIT list: EMPTY — leg PASS (advisory).**
