# T13 attempt 4 — config-census leg (guard-config-census v3.1 form)

Source bound: `recreation.html` sha256 `05cfe65526fb4d80a5a72b4264fca99a183a17fe1f06482c3655178e46af4fc5` (frozen attempt-4 source).
Instrument: `t13-verify-attempt4.js` checks K1–K9 (every CONFIG leaf key consumed outside the CONFIG block; dual-consumption mutations; stylesheet literal checks) — 79 PASS, 0 FAIL on the frozen source.

## 1. All-literal scan (outside the CONFIG block)

- Hex/rgba colours outside CONFIG: **none in script**; stylesheet carries only `#000` (page backdrop outside the stage surface — classified structural, per-literal below). Banner colours `#7a1020`/`#ffffff` no longer stand in the stylesheet: they are palette values consumed through variables (suite K7 asserts their absence as literals).
- Durations outside CONFIG: none — every duration is a beat value, a configured duration token, or derived from them.
- Geometry values outside CONFIG: the stylesheet's `100%` (stage width), `50%` (avatar roundness), z-index `9`, flex `0 0 auto` — structural layout identities, classified below. The stage maximum width literal is removed from the stylesheet and applied from configuration (suite K6).
- Numeric constants / formula coefficients in script, classified per constant:
  - Subject-shaping → **moved into CONFIG this attempt**: estimate-table class factors (now `estimateEm.*`), line heights and font weights (now per-mode layout tokens, dual-consumed), caret duty fraction (`caretDuty`), added-card defaults (`addedCardBeat`), prefix length (`opening.prefixGraphemes`), stage maximum width (`stageMaxWidthPx`), banner colours (`palette.bannerBg/bannerInk`).
  - Structural (exempt, per constant): channel maximum 255 and bit shifts 16/8 (colour arithmetic identities) · 100 (cqw basis) · 180/360 (degree conversion, hue wrap) · loop indices and 0/1/2/3 arithmetic identities · grapheme script threshold 0x2E80 (estimate-table class boundary, a property of Unicode, not of the subject).
  - Policy constants (named, not design values): estimate acceptance band 0.9 · avatar disc inner allowance 0.92 · per-line epsilon 1px · override acceptance bounds (rate ≤1000, gap ≤20).

## 2. Application-site resolution (key → site)

Every CONFIG leaf key resolves to at least one consumption site outside the CONFIG block (suite K1 walks all leaf keys, including nested groups `opening.*`, `post.*`, `cardTemplate.*`, `addedCardBeat.*`, `estimateEm.*`, `layout.{wide,narrow}.*`, `palette.*`, `cards[]/beats[]` members): **unconsumed keys: 0**. Dual-consumption spot assertions: a line-height token changes both the modelled stack height and the stylesheet variable (K3); the stage maximum width token changes the applied stage style (K4); banner palette values reach the banner variables (K5). The retired accounting token has no binding anywhere in the source (K2).

## 3. CSS-variable setter check

`applyLayout()` assigns every key of the active mode's layout set as a CSS variable (string and numeric values alike), plus the palette banner colours and the derived stack-gap / title-max-height variables; the stylesheet consumes those variables for the post card, stamp, marks, badges, caret, cards, banner, and headers. No variable is referenced by the stylesheet without a setter: **setter gaps: 0**.

## HIT list

**HITS: 0** — no subject-shaping literal stands outside CONFIG unclassified, no CONFIG key is unapplied, and no CSS variable lacks a setter, on the frozen attempt-4 source.
