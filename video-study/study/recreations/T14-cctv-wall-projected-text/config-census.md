# T14 — config census · Attempt 2 (A-C008 config-census leg, fired on the NEW source before the wave)

Source: `recreation.html` sha256 `b530b7372e768f291053dfa5ab1523cc633597fa117cec4702121fce04ee1525` (final, after the in-cycle cures; census re-run on the final source) · Census runs against THIS attempt's CONFIG (96 leaf keys incl. the 3 checkpoint subkeys). Instruments: own-checks-T14-attempt2.js consumption census (site resolution for every key + mutation effect mappings for the functional keys) and literal census.

## Key → application-site resolution (summary)
Every one of the 96 leaf keys resolves to at least one application site outside the CONFIG block — 0 unapplied keys. Groups: texts/chrome (camLabel, recLabel, ptzLabel, timestampBase, tvPrompt, tvLine1, wallText, tvLine2 → render/computeState/DOM text) · speeds + checkpoints (tvCharMs, wallCharMs, checkpoints.* → computeState/completionTimes/validateSchedule) · wall fit (wallLineMaxChars, wallCharWidthFactor, wallMaxFontPx, wallMinFontPx, wallFitMarginFraction, wallLineHeight, wallBox* → splitLines/measureLineWidthPx/fitWallFont/DOM sizing) · palette (17 color keys → DOM styles/gradient strings) · geometry (blinds*, tvGlow*, stand*, tv*, chrome*Pct → DOM positioning) · glow/fonts (tvTextShadowBlurPx, wallGlowBlurPx/2Px, chrome/tv font clamps, tvLineHeight, letter spacing, font weights, recDot* → DOM styles) · overlay construction (wallpaperShadeStopPct, vignetteStopPct/Alpha, scanlineAlpha/LinePx/PeriodPx/ColorRgb, scanline/vignetteIntensity → gradient strings + opacity) · fontFamilyMono → body font family. Mutation-proven effect mappings (6 asserted in the suite): wallWriteAt → gating; wallBoxWidthFraction → fit; wallLineHeight → height fit; tvTextPaddingYPct → TV inner height; wallCharMs → completion time; wallLineMaxChars → wrap.

## All-literal scan (outside CONFIG)
Distinct numeric literals found: `0, 0px, 0%, 1, 2, 3, 4, 5, 6, 7, 10, 50%, 90, 100, 100%, 1000` — every one classified **structural** per-literal in build-record-attempt2.md (indices/loop bounds, zero offsets, percent conversions, z-index order, gradient direction/centre, the override duration guard bound). Hex colors outside CONFIG: **0**. No content literal (text, label, symbol) stands outside CONFIG — the texts are CONFIG strings.

## CSS-variable setter check
No CSS variables are used; every CONFIG key is consumed by a direct JS application site — no setter-never-assigns case exists. PASS.

## HIT list
Empty — PASS for this leg (0 unapplied keys, 0 unlisted literals, 0 hex colors outside CONFIG).

Leg verdict (advisory): fired on the new source before the wave; HIT count 0.
