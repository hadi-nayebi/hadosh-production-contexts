# T13 attempt 5 — config-census leg (guard-config-census form)

Source bound: `recreation-attempt-5-frozen.html` sha256 `2712dc5ed115a1a34c4817d64d155c89b4b7cb6b4559ff71d611e17dc6f5389d`.
Instrument: `t13-verify-attempt5.js` — 122 PASS, 0 FAIL on the frozen source; the consumption section (K) carries 17 checks including two negative controls.

## 1. Consumption by key type (displayed-effect criterion)

A key counts as consumed only when changing it changes a displayed state — a rendered style, a modelled geometry value the validation binds, or a derived schedule instant. Checks are typed by the kind of key:

| Key type | Test form | Result |
|---|---|---|
| Layout geometry tokens (both modes) | assigned as CSS variables at layout; model reads the same tokens (dual consumption) | consumed |
| Line-height / weight tokens (head, foot, time, card foot) | stylesheet rules reference the variables (5 rules priced); removing the timestamp rule or the post-footer line-height rule is detected by negative controls K9/K10 | consumed, controls live |
| Timing keys (beats, charMs, finalHoldMs, entranceOverlapMs) | exempt from the computed-style test by type; consumed by the schedule derivation — mutating charMs moves its card's type end (K11); the ending budget is an independent input and the schedule end is an independent equality (12000) | consumed |
| Content keys (card texts, highlights, prefix) | exempt from the computed-style test by type; mutating a card text changes the derived schedule count (K12: 31 → 30) and the fitted title set; highlights drive modelled mark ranges and rendered mark spans | consumed |
| Palette keys | inline styles and CSS variables at build/layout (card surface, accent, banner, caret, fresh-gradient stop) | consumed |
| Every CONFIG leaf key | walked mechanically (K1): **unconsumed keys: 0** | — |

## 2. All-literal scan (outside the CONFIG block)

- Colours outside CONFIG: stylesheet carries `#000` (page backdrop outside the stage surface — structural) and `#ffffff` inside the fresh-gradient rule (the gradient's fixed light stop; the dark stop is the accent variable). No other colour literal stands in the stylesheet or script.
- Durations outside CONFIG: none — every duration is a beat value, a configured token, or derived from them.
- Geometry outside CONFIG: the stylesheet's `100%` (stage width), `50%` (avatar roundness), z-index `9`, flex `0 0 auto`, and the gradient's `180deg`/`20%` stops (a fixed two-stop gradient identity) — structural, classified here.
- Retired colour-interpolation tokens have no binding anywhere in the source (suite M12 asserts absence); the interpolation helpers were removed with them.
- Numeric constants in script, classified: channel/bit arithmetic removed with the interpolation helpers · 100 (cqw basis) · 180/360 (gradient/hue identities) · loop indices and 0/1/2/3 arithmetic identities · grapheme script threshold 0x2E80 (estimate-table class boundary, a property of Unicode) · policy constants named in place (estimate acceptance band 0.9, avatar disc allowance 0.92, per-line epsilon 1px, override acceptance bounds).

## 3. CSS-variable setter check

`applyLayout()` assigns every key of the active mode's layout set as a CSS variable, plus the palette banner colours, the accent (fresh-gradient stop) and the derived stack-gap / title-max-height variables. No variable is referenced by the stylesheet without a setter: **setter gaps: 0**.

## 4. Displayed-state census

Displayed states are functions of the schedule and the configuration only: card visibility/opacity from appear instants, typed grapheme counts from type instants, the frontier gradient from the typed count and the landing window, the caret from the typing state and blink phase, the comments count label from the number of landed cards, the stamp and chrome from layout tokens. The suite's displayed-state section (D, 12 checks) binds each to its source quantity, including restart reproduction and self-start.

## HIT list

**HITS: 0** — no subject-shaping literal stands outside CONFIG unclassified, no CONFIG key is unapplied under the displayed-effect criterion, and no CSS variable lacks a setter, on the frozen attempt-5 source.
