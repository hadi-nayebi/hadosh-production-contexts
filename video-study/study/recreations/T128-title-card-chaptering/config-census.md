# T128 — config-census leg (guard-config-census v3.1) · attempt 3

Build bound: recreation.html sha256 `61771d823dfe0e624ac73773e4d379db1e6141c88823999ee851fe4df7c7d1b1`. Census runs against attempt 3's OWN CONFIG. Consumption is asserted by EFFECT MAPPINGS + the per-key spot-check in the own-check suite (`checkpoints-attempt-3/stage-F-checks-live.txt`, 50 checks, 0 fails; SPOT section: 69 keys varied, 0 NO-EFFECT), not by binding alone. Read together with that spot-check log, never as standalone clearance.

## 1. All-literal scan (outside the CONFIG block; machine scan of the final source)
- Hex colors outside CONFIG: **0**.
- Numeric literals outside CONFIG, classified per class:
  - Measurement-instrument coefficients — advance classes 0.62 / 0.52 / 0.30 / 0.28 / 0.60, cap-height ratios 0.72 / 0.565: **structural** (coefficients of the fit model; they shape the model, not the subject).
  - Contrast-instrument constants — 0.03928 / 12.92 / 0.055 / 1.055 / 2.4 / 0.2126 / 0.7152 / 0.0722 / 0.05, hex-parse offsets 1 / 3 / 5 and divisor 255: **structural** (the WCAG luminance formula).
  - Phase/opacity arithmetic 0 / 1, clamp bounds, the halving 2 in strikeTopPx, array indices and loop bounds, the 100 in percentage/vignette normalization: **structural** (mathematical identities of the phase machine).
  - Typed-state slice lengths 6 / 12 and 1 / 4 in fitRows: **structural** (the fit instrument's enumerated states).
  - CSS/layout identities — "100%" widths/heights, translate(−50%,−50%) centering, gradient alpha endpoints 0 / 1 in the vignette's transparent-to-black ramp (its stops and strength are CONFIG values): **structural** layout.
  - Defensive fallbacks `||700`, `||1.2`, `||1.15`, `||1.3` beside CONFIG weight/line-height reads: **structural-with-note** — defaults for CONFIG keys the filed CONFIG always supplies; never operative on the filed build; the keys themselves are CONFIG-bound and consumed (see §2).
  - SVG path data: carried INSIDE CONFIG (map.contours) — no path literals outside CONFIG.
  - Subject-shaping literals outside CONFIG: **0**.

## 2. Application-site resolution + consumed effect (every CONFIG key)
Consumption for all 69 leaf keys is asserted by the suite's spot-check (each key varied; observable change in its intended output — state vector, fit rows, renderSpec, mapSvg, or label contrast) and by the effect mappings below for the attempt's changed surface:
| Key(s) | Application site | Consumed effect asserted |
|---|---|---|
| map.labelO | stateAt() label opacity = gate × labelO | label opacity varies with the key after the gate; invariant under fadeTo changes |
| map.revealMs | stateAt() gate ramp | gate at 4900 = 0.5 at 200 ms ramp |
| map.vignetteStrength / vignetteInnerPct / vignetteOuterPct | stateAt() vignette value + gradient construction + label-contrast local background | vignette value and contrast background move with the keys |
| map.strokeWidthPx | mapSvg() path template (every contour) | generated SVG carries the configured width; varying it changes the SVG string |
| type.mapLabelWeight / mapLabelLineHeight | mapLab fontWeight/lineHeight setters + renderSpec | setter values and label line box move with the keys |
| type.exhibitSubWeight / exhibitSubLineHeight | sub fontWeight/lineHeight setters + renderSpec | setter values move with the keys |
| exhibit.exitDxPx / exitDyPx | render transform + transformed-bounds model | terminal bounds clear the stage (0.0 px² intersection) |
| segmentMs | segmentStateAt() window boundary | terminal hold inside the window; cycle state beyond it |
| (all attempt-2 keys) | sites as filed in the attempt-2 census | spot-check: every key EFFECT, 0 NO-EFFECT (per-key log in stage-F-checks-live.txt) |
The exhibit onset key carried by attempt 2 is REMOVED in this attempt (absent from CONFIG and from the validator schema; an override carrying it is rejected as an unknown key) — it appears in no consumption row because it no longer exists.

Unapplied keys: **0**.

## 3. CSS-variable setter check
The build uses NO CSS variables: every CONFIG value is consumed by a direct JS style assignment, a string construction, or the stateAt/fit derivations. Unset-variable references: **0** (class not applicable — no var() references exist).

## HIT list
**EMPTY — 0 HITs** (printed together with the Verify-1 spot-check log, which also shows 0 no-effect keys; neither is cited without the other).
