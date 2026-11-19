# T71 — config-census leg v3.1 (guard-config-census) · final build sha cffa1da8…

## All-literal scan (outside the CONFIG block)
- Hex/rgba colors outside CONFIG: **0** (all colors: palette.paper/ink/bg, backdrop.arcColor/slotFill).
- Durations outside CONFIG: **0** (enterMs/choiceMs/choiceAnimMs/promptDelayMs/promptMs/holdMs/durationMs all in CONFIG, consumed via schedule()/render()).
- Geometry values outside CONFIG after cure: **0 subject-shaping**. Remaining numeric literals, each classified **structural**: clamp bounds 0/1 (identity) · Math.PI, 180, −90 (angle identities) · (i+0.5)/n slot centering and /2 halves (centering identities) · toFixed(1|2) (formatting precision) · validation floor `fitMinPx >= 9` (guard constant — validates, does not shape) · regex `{6}` (hex-format identity) · loop indices/increments · CSS `margin/padding: 0` resets.
- **Pre-cure HITs (found by this leg's first pass, CURED before scoring):** entrance lift `14` → `geom.enterLiftPx` · ballot-box `52/30/26` → `geom.boxW/boxH` · slot radius `0.78` → `backdrop.slotRadiusFrac`. **HITs carried into the wave: 0.**
- Post-plan-review additions (same classification pass): WCAG luminance coefficients (0.2126/0.7152/0.0722, gamma 2.4, thresholds 0.03928/12.92/0.055/1.055, +0.05) are **structural** standard constants inside contrastRatio(); the contrast floor itself is the CONFIG key `type.contrastMin` (applied in checkpointsOk). No new subject-shaping literal introduced.

## Key → application-site resolution (every CONFIG key applied)
ballot.org → #org textContent · ballot.office → #office · ballot.date → #dateLine · ballot.choices[] → choice rows (build loop) + fitChoicePx + schedule.choiceStarts · prompt.text → #prompt · backdrop.enabled → SVG display branch · backdrop.arcColor → arc path fill + box fill · backdrop.slotFill → slot rect fills + box stroke · backdrop.slotCount → slot loop + validation · backdrop.arcOpacity → backdrop style.opacity · backdrop.slotRadiusFrac → slot radius rr · palette.paper → card background · palette.ink → card color, rule background, oval border · palette.bg → stage background · stage.width → stage width + checkpointsOk · geom.* (23 keys) → card/backdrop/oval/rule/prompt styles in build() + enterLiftPx in render() · type.* (9 keys) → font sizes, line heights, fitChoicePx/estTextWidth, validation · revealAtMs/enterMs/choiceMs/holdMs/promptDelayMs/promptMs/choiceAnimMs/durationMs → schedule() + render() + frame loop (revealAtMs added by the interim-wave timing cure; applied in schedule() + render() + validation).
Unapplied keys: **none.**

## CSS-variable setter check
The build uses **no CSS variables** (all styling set from JS against CONFIG directly) — no unset-variable reference can exist. Check result: PASS (vacuous, printed as such).

HIT LIST: **0 carried** (4 pre-cure hits cured, listed above).
