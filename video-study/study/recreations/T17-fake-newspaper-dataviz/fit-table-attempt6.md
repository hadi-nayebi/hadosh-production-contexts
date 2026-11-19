# T17 attempt 6 — measured-fit leg output (A-C008 leg 1, on the NEW source)

Source: recreation.html sha256 96341c01696d67b0be4578ce81332258287cf7101b5ebe09acabc9fc916c9780 · Stage widths 360/390/960 · PIXEL-UNVERIFIED (D1: one Chromium re-attempt this attempt failed at startup — "Hatch WebGL domain policy is required for browser startup", /opt/meta-chromium/chrome headless, no screenshot produced; rows are deterministic-model measurements from fitReport/figureRequired on the frozen final source).

Fit @360: ok=true stageH=553 contentW=328 fontsOk=true budgetOk=true
Fit @390: ok=true stageH=553 contentW=358 fontsOk=true budgetOk=true
Fit @960: ok=true stageH=540 contentW=872 fontsOk=true budgetOk=true

## Figure rows (required vs allocated, fits / widthOk)

| Width | fig20 | fig21 | fig22 | fig23 | fig24 | fig25 |
|---|---|---|---|---|---|---|
| 360 | 309.0 / 445.8 ✓/✓ | 249.8 / 445.8 ✓/✓ | 445.8 / 445.8 ✓/✓ | 219.7 / 445.8 ✓/✓ | 298.4 / 445.8 ✓/✓ | 330.8 / 445.8 ✓/✓ |
| 390 | 309.0 / 445.8 ✓/✓ | 255.8 / 445.8 ✓/✓ | 445.8 / 445.8 ✓/✓ | 222.1 / 445.8 ✓/✓ | 298.4 / 445.8 ✓/✓ | 342.4 / 445.8 ✓/✓ |
| 960 | 357.6 / 432.5 ✓/✓ | 279.7 / 432.5 ✓/✓ | 339.8 / 432.5 ✓/✓ | 262.5 / 432.5 ✓/✓ | 315.4 / 432.5 ✓/✓ | 429.0 / 432.5 ✓/✓ |

## HIT list (dispositions)

- **HITs requiring cure: 0.** Every figure fits and is width-ok at 360/390/960 on the new source, including fig25 with the C4 upward stamp reserve now inside its block (reserve 22.2px @360 · 24.2px @390 · 35.5px @960).
- **Named tight margin (not a HIT):** fig25 @960 binds with 3.5px of allocated headroom (429.0 of 432.5) — the C4 reserve consumed most of the desktop slack; recorded so a future reserve growth re-prices it first.
- **Wide-waffle probe (C6 regression):** a 60-dot / 20-column waffle swap now reports actual width 392px > 328px content at phone width and is rejected by validation with a named error (see config-census-attempt6.md / build record) — the attempt-5 silent-pass hole is closed from both the fit side (maxW truth) and the validation side.
