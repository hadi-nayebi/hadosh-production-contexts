# T05 attempt 3 — config-census leg (guard-config-census v3.1, fired by reference)

Source: `recreation.html` · sha256 `7d4a5da7d12ec75d1d20ff06836cbc47a12efee30cbe0cbf72ea2b8e1d507cac` (frozen before this leg)
Census runs against attempt 3's own CONFIG (87 top-level keys + 6 array-member keys = 93 keys). Prior shared-path file: none existed (`config-census.md` absent at firing) — nothing to preserve; this attempt-tagged file is the first filing.

## 1. All-literal scan (outside the CONFIG and factory blocks)

- Hex / rgba color literals in logic or stylesheet: **0**. (The stylesheet's former `var(--popFrom,.82)` fallback literal was removed during this census's cure pass; the setter runs at setup, before first render.)
- Duration literals in logic: **0** — the minimum-duration value lives in CONFIG as `minDurationMs`; its sane window lives in CONFIG as `minDurationFloorMs` / `minDurationCeilingMs`.
- Geometry / typography literals in logic, classified per constant:
  - `360` ×7, `960` ×3, `540` ×1 — the modelled reference stage (360×202.5 phone stage; 960×540 reference stage; fallback stage height). Structural: reference-stage identities, named here.
  - `255` ×3 — sRGB channel maximum inside the color validator. Structural: color-space identity.
  - `100.001` ×2 — containment epsilon. Structural: tolerance.
  - `400` ×1 — lyric shrink loop guard bound. Structural: loop bound.
  - `0, 1, 2, 100` — arithmetic identities, indices, percentage base. Structural.
- Drawing-region constants (between the drawing-routines and registry markers): authored shape coordinates in the 160×96 design space, waveform/sequencer drawing coefficients, and the LCG constants (1664525 · 1013904223 · 4294967296 — mathematical identities of the generator). Classification: **authored code** under the build's filed configuration-scope statement (per-type shape coordinates are authored code; every color those routines use is a CONFIG key). Not subject-shaping CONFIG omissions under that scope statement; the classification is printed per the leg's rule, and the scope statement itself is what the scoring wave prices.
- Stylesheet literals: percentages (100%), zero offsets, z-index integers (3/4/5 — stacking order), `inset:0`. Structural scaffolding; all font families, weights, and spacings formerly in the stylesheet are CONFIG keys in this attempt.
- Comment-region numerals (the override-syntax example in a comment): documentation, not logic.

## 2. Application-site resolution — every key resolves to ≥1 application site outside its declaration

93/93 keys resolve (site counts from the census walk): durationMs ×11 · panels ×17 · lyricLines ×12 · panels[].popAtMs ×11 · lyricLines[].text ×14 · lyricLines[].startMs ×9 · gridCols ×8 · panels[].label ×6 · labelMinPx ×6 · lyricMinPx ×6 · panels[].initial ×5 · minDurationFloorMs ×5 · popMs ×5 · accentGreen ×4 · accentOrange ×4 · mutedColor ×3 · panels[].type ×4 · svgWidth ×4 · svgHeight ×4 · seed ×3 · labelFontPxAt960 ×3 · lyricFontPxAt960 ×3 · checkFontPxAt960 ×2 · checkMinPx ×2 · checkRightPx ×2 · cursorMarginPx ×2 · cursorWidthEm ×2 · fadeEasing ×2 · fadeMs ×2 · fitStepPx ×2 · gridLeftPct ×3 · labelPadLeftPx ×2 · lyricWidthPct ×2 · minDurationCeilingMs ×4 · minDurationMs ×6 · modelAdvanceEm ×3 · panelBorderWidthPx ×2 · promptMarginEm ×2 · promptText ×2 · resetFadeMs ×3 · responsiveScaleFloor ×2 · labelStripBg ×3 · all palette keys ×1–4 each · all remaining typography/layout/design-space keys ×1 each. Full per-key table: census walk output retained with the build record's evidence (own-check suite's consumption assertions cover the same keys behaviorally: every key's consumed effect is asserted in `own-check-attempt3.txt` probes s1–s4 + core).

## 3. CSS-variable setter check

- `--popFrom`: setter assigns from CONFIG (`setProperty("--popFrom", CONFIG.popScaleFrom)` at setup) ✓; stylesheet consumes it in the panel transform ✓.
- `--fade`: setter assigns per panel per frame in the render loop ✓; stylesheet consumes it in the panel opacity ✓.
No key is consumed through an unset variable.

## HIT list

**Empty — 0 hits.** Leg hit count for the wave record: **0**.
