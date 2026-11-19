# config-census — T186 Foreground pass, mid-coverage (guard-config-census v3.1, A6 pre-wave leg)

_Prices the final recreation.html (SHA-256 `30cd54815848e7707ab9e2430e183a312fda0bb6a4716d0f8d6671a0727bb869`)._

## 1. All-literal scan (outside the CONFIG block)
Distinct literals outside CONFIG: `100` / `56` / `5600` (coverage grid dimensions + cell count, §2c.5's prescribed evaluator) · `0.5` (grid cell-centre offsets (gx+0.5), (gy+0.5) + the alpha≥0.5 rule's threshold in prose) · `2` (easeInOutQuad's quadratic coefficients · headR×2 body offsets · /2 centre halves) · `0` / `1` (clamp01 bounds, phase endpoints, loop indices) · `5` (stripe rect height px in buildScene) · `8` / `12` / `16` / `20` / `42` / `10` (doorway lintel overhang/height, leg width/height, seated-figure corner rx — scene ornament offsets inside buildScene) · `"-20%"` / `"140%"` (SVG blur filter region) · meta digits (charset/viewport `1`) · CSS `100%` / `800px` max-width / `#111` page background (page furniture outside the stage).

Per-constant classification:
| literal | site | classification |
|---|---|---|
| `100` / `56` / `5600` | coverageAt / coveredRightMass grid | structural — the Plan-prescribed measurement instrument's dimensions (§2c.5), not subject shape |
| `0.5` (cell centres) | grid sampling | structural — sampling identity |
| `2` | easing coefficients, headR×2, /2 halves | structural — mathematical identities over CONFIG values |
| `0` / `1` | clamp01, endpoints, indices | structural — clamp/index identities |
| `5` (stripe height) · `8`/`12`/`16` (lintel overhang/height/total extension) · `20`/`42` (legs) · `10` (seated rx) | buildScene ornament offsets | subject-shaping-ADJACENT ornament detail — classified HIT-1 (carried, dispositioned below): these micro-offsets shape ornament, not the technique (pass coverage/trajectory/palette all CONFIG); priced honestly rather than exempted. (The `16` classification was added on the jev-prewave return's suggestion — the literal was listed in the scan above but not explicitly classified in the version the prewave fired on; text-only cure, the build is unchanged.) |
| `"-20%"` / `"140%"` | blur filter region | structural — filter region must exceed the shape so the blur is not clipped; the blur AMOUNT is CONFIG blurPx |
| CSS furniture (`#111`, max-width 800px, 100%) | page CSS | structural — outside the stage/subject; stage size itself is CONFIG scene.stageW/H |

## 2. Application-site resolution (every CONFIG key → ≥1 site)
| key | application site(s) |
|---|---|
| midMs | centreAt segment boundaries · coverage checkpoint |
| durationMs | seek clamp · tick end · __rec |
| coverageFraction | passWidth (w = coverageFraction × W) · centreAt cMid |
| passColor | passShape fill |
| passDirection | centreAt mirror branch |
| blurPx | feGaussianBlur stdDeviation (blurPx/2) |
| entryMs | centreAt segment 1 span |
| exitMs | centreAt segment 2 span |
| passEasing | centreAt easing lookup |
| streetColor | sky/street rect fill |
| figureColor | standing figure head + body fill |
| accentLabel | data-only scene identifier (swap harness) — no render site BY DESIGN (§2: never rendered); resolved as consumed-by-harness, not unapplied |
| scene.stageW / stageH | viewBox · passWidth · grid evaluator · scene rects |
| scene.skyH / groundColor | street/ground rect split + fill |
| scene.doorway.x/y/w/h/color/lintelColor | doorway rect + lintel rect |
| scene.standingFigure.x/y/w/h/headR/stripeCount/stripeColor/legColor | figure circle/rect · stripe loop · leg rects |
| scene.seatedFigure.x/y/w/h/headR/color | seated figure circle + body rect |
| scene.wallBand.y/h/color | wall band rect |
| pass.heightFrac / yFrac / cornerRx | passRect y-extent · passShape y/height/rx |

Derived equality (§2d.3): pass width = coverageFraction × stageW, computed in passWidth() — passWidthFrac is NOT an independent key; the harness asserts width == coverageFraction × W on both default and swapped builds (400 = 0.50×800 · 280 = 0.35×800).

## 3. CSS-variable setter check
No CSS variables are used; CONFIG values flow through JS setters directly. No unassigned-variable class present.

**HIT list: 1 HIT carried, dispositioned** — HIT-1: buildScene ornament micro-offsets (stripe height 5, lintel 8/12, leg 20/42, seated rx 10) stand as code literals. Disposition: CARRIED into the wave — they shape ornament detail only; every technique-shaping value (coverage, trajectory, timing, palette, scene geometry, stripe count/colour, figure placement) is CONFIG. The scoring wave prices it with this disposition printed.
