# T242 — config-census (guard-config-census v3.1) · final build sha c93bc67e… (cured build; first-draft sha b460a8fb… superseded by the jev-prewave cure)

Method: scripted all-literal scan of recreation.html outside the CONFIG block + key→application-site resolution (this run; counts are the scan's output). **Completion re-run (Cycle 042 Wave 39):** build unchanged (sha c93bc67e… verified firsthand); leg re-run fresh — hex census reproduces exactly 4 colour literals, all inside the CONFIG block (#000000 ×1 · #ffffff ×3), 0 outside; key→site resolution unchanged; HITs **0**. Two cure rounds preceded this filing: the fit-font/geometry cure and the figure-geometry binding cure (figure offsets, tick/label offsets, barAxisGap, baselineOver bound as CONFIG keys; figure body derived from figureW/figureH).

## 1. Literal scan (outside CONFIG)
- Hex/rgba colours outside CONFIG: **0**.
- Numeric literals outside CONFIG after cures: {0 ×33 · 1 ×24 · 2 ×16 · 3 ×9 · 4 ×1 · 6 ×2 · 8 ×1 · 100 ×6 · 2000 ×1 · figure-proportion fractions 0.21/0.27/0.31/0.35/0.4/0.44/0.48/0.56/0.79}.
- Classification per constant:
  - 0, 1, 2, 3, 4, 6, 8 — **structural**: loop bounds, array indices, clamp identities, `toFixed(3)` precision, star polygon point count (8 points of a 4-point star), message-type comparisons.
  - 100 — **structural**: the percent identity (÷100 converting barHeightsPct/stubPercent to fractions) — a unit conversion, not a shaping value; the percents themselves are CONFIG.
  - 2000 — **structural**: digit string inside the SVG namespace identifier `http://www.w3.org/2000/svg`.
  - Figure-proportion fractions (0.21–0.79) — **structural glyph data**: they are the figure glyph's internal proportions, applied multiplicatively to CONFIG `figureH`/`figureW`, so the CONFIG keys exert the control (size/position); the fractions are the glyph's layout table, per the T233 pip-layout precedent. Changing them redraws the glyph's anatomy, which is data, not a parameter of the technique.
  - Every subject-shaping value found by the first scan (figure offsets 4/10/13/14/21/24/26/27/30/38/44/58/62/70/76 · tick 8 · star ratio 0.38) was **bound as a CONFIG key in the cure** (figureW, headRPx, starRPx, starInnerF, tickHalfPx, barAxisGapPx, baselineOverPx, axisLabelGapPx, stubLabelGapPx, fullLabelDyPx, barLabelDyPx, groupLineDyPx, groupLabelDyPx) — none remains unbound.

## 2. Key → application-site resolution
Every CONFIG key resolves to ≥1 value-flowing site (scan counts, CONFIG definition excluded):
- Stage/geometry: stageW ×2 · stageH ×2 · axisX ×10 · baselineY ×1 (+derived top/base in render) · axisHeightPx ×8 · barW ×9 · barGap ×3 · groupGap ×1 (barX) · barAxisGapPx ×1 · tickHalfPx ×3 · baselineOverPx ×1.
- Bars/data (incl. nested/array): barCount ×12 · barHeightsPct[] ×5 · stubPercent ×5 · stubBarIndices[] ×4 · fullBarIndex ×7 · stubInsetPx ×4 · barLabels[] ×4 · groupLabels[] ×3.
- Figure: figureX ×2 · figureH ×1 (+fractions in render) · figureW ×3 · headRPx ×2 · starRPx ×1 · starInnerF ×1 · figureStartMs ×1 · figureDurMs ×2.
- Type/labels: axisTopLabel ×1 · axisMidLabel ×1 · stubLabel ×1 · fullLabel ×1 · axisFontPx ×2 · stubFontPx ×2 · barLabelFontPx ×1 · groupFontPx ×2 · fontFamily ×1 · axisLabelGapPx ×2 · stubLabelGapPx ×1 · fullLabelDyPx ×1 · barLabelDyPx ×1 · groupLineDyPx ×2 · groupLabelDyPx ×2.
- Palette (nested): palette.bg ×1 · palette.line ×8 · palette.fill ×3 · palette.label ×7 — all set via CSS/SVG attributes directly from CONFIG (no CSS-variable layer in this build, so the v3.1 setter check is NOT-DEMANDED with this disposition).
- Timing (all consumed by schedule()/stateAt derivations): riseStartMs ×2 · riseStaggerMs ×2 · riseDurMs ×3 · stub1GapMs ×1 · stubGapMs ×1 · stubDurMs ×3 · fullStartOffsetMs ×1 · fullDurMs ×3 · groupLabelDurMs ×2 · fillClearStartMs ×1 · fillClearDurMs ×2 · exitStartMs ×2 · exitDurMs ×3 · durationMs ×3.
- strokePx ×6.

HIT list: **empty (0 HITs)** after cures. Unapplied keys: none. Unset-variable references: none (no CSS variables used).
