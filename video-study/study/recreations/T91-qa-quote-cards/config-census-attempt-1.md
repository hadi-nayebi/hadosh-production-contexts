# T91 — guard-config-census leg (Amendment A6, v3.1 + Cycle-013 clarification) · config-census

Build bound: recreation.html sha256 `3b2bd283f26ea17425ba4f7e71ea37d86267a7cb480270860adb1943341cb65e` (final build; census re-run after the fit cures, the H1 cure, and the H2 purity-lens cure below).

## 1. All-literal scan (outside the CONFIG block)
- Hex colors in logic: **0**. Hex in the `<style>` block: **0** (the page background moved into CONFIG as palette.page under the H2 cure and is applied by JS setters on documentElement/body). All 7 subject colors live in CONFIG palette{bg, card, ink, accent, edge, chip, page} (edge/chip/page are palette extensions beyond the §2 minimum four, all applied below).
- Durations in logic: **0** (all timing derives from cardMs/enterMs/endHoldMs via stateAt/cycleMs).
- Numeric literals in logic: `0` ×~10, `1` ×~8, `-1` ×1 — every one classified **structural**: phase constants (p bounds 0/1), the shownIdx −1 sentinel, modulo arithmetic, string "px"/"em" unit suffixes (not numerics). No geometry, coefficient, or ratio outside CONFIG: card/HUD/tag/mark/quote/attribution geometry, gaps, border width, rise distance, and the attribution block height are ALL CONFIG (geom) — including generator-free scene geometry (there is no scene generator; the stage is bg + HUD + card, per the specimen's full-screen card form).
- Font stacks: the only font stack in the file is CONFIG `type.font`, applied via `stage.style.fontFamily` — no CSS font stack exists outside CONFIG ✓ (Cycle-013 clarification).
- CSS in `<style>`: positioning/box model only (absolute, inline-block), margins 0 (page layout, structural), line-height 1.1/1.15/1.3 on #hudClock/#speaker/#role — hmm, see HIT note below: these three CSS line-heights duplicate the CONFIG-driven JS line-height setters for quote/role only; #hudClock and #speaker line-heights exist ONLY in CSS.

## 2. Application-site resolution (every CONFIG key → ≥1 site, incl. array members)
| Key | Application site(s) |
|---|---|
| hud.year, hud.dayLine | hudLine textContent (year + " · " + dayLine; separator is a format identity, structural) |
| hud.clock | hudClock textContent (swap "07:30" verified in harness) |
| cards[0..2].quote | showCard() → #quote textContent |
| cards[0..2].speaker | showCard() → #speaker textContent |
| cards[0..2].role, .year | showCard() → #role textContent (role + " · " + year) |
| palette.bg | stage.style.background |
| palette.card | card.style.background |
| palette.ink | hudLine/hudClock/tag/quote/speaker color setters |
| palette.accent | mark color, role color, attrBar background |
| palette.edge | card border color |
| palette.chip | tag background |
| palette.page | documentElement + body background setters |
| labels.tag | tag textContent |
| labels.mark | mark textContent |
| cardMs / enterMs / endHoldMs | stateAt() slot + phase math; cycleMs() total |
| type.font | stage.style.fontFamily (inherits to all text) |
| type.quotePx / speakerPx / rolePx / tagPx / markPx / hudLinePx / hudClockPx | fontSize setters on the seven text elements |
| type.quoteLineHeight / roleLineHeight / speakerLineHeight / hudClockLineHeight | lineHeight setters on #quote / #role / #speaker / #hudClock |
| type.tagSpacingEm / roleSpacingEm / hudLineSpacingEm | letterSpacing setters |
| type.quoteStyle / markStyle / markLineHeight | fontStyle setters on #quote / #mark + mark lineHeight setter |
| stage.width | stage width setter |
| geom.stageH | stage height setter |
| geom.hudX / hudY / hudClockGap | HUD position + clock marginTop |
| geom.cardX / cardY / cardW / cardH / cardPad / borderW | card position/size/padding (cardPad resolves in the attr width derivation) + border |
| geom.tagX / tagY / tagPadX / tagPadY | tag position + padding |
| geom.markX / markY | mark position |
| geom.quoteX / quoteY / quoteW | quote position + width |
| geom.attrX / attrBottom / attrBarW / attrTextX / attrGap / attrH | attr position/width derivation, bar width, text offset, role marginTop, block height |
| geom.risePx | enter-phase translateY in frame() |

No unapplied key. No key lacks a site.

## 3. CSS-variable setter check
The build uses **no CSS variables**: every CONFIG value is consumed through direct JS style setters (listed above), each assigning unconditionally at construction. No var() reference exists (grep `var(` → 0 hits) — the `geom.pieSize` false-negative class cannot occur. Check result: PASS (class absent by construction).

## HIT list — 2 HITs cured (H1 pre-wave, H2 on the purity lens's interim finding); final list EMPTY
- **H1 (cured):** CSS line-heights 1.1 (#hudClock) and 1.15 (#speaker) lived only in the `<style>` block — subject-shaping typography outside CONFIG. Cured: moved to CONFIG type{hudClockLineHeight: 1.1, speakerLineHeight: 1.15} with JS setters; the CSS declarations removed. (#role's CSS 1.3 duplicated its CONFIG setter — removed as redundant in the same cure.) Census above and the SHA bound here are post-cure; the fit table's measurements do not depend on line-height values beyond the block-height arithmetic, which used the CONFIG values (quote 1.32, role 1.3) throughout.
- **H2 (cured, interim purity lens 78):** the interim census missed four literal classes the purity lens caught — the "QUOTE" tag text and the open-quote glyph as HTML literals, quote/mark font-style and the mark line-height "1" as CSS/JS literals, and the page background #0b1526 in CSS. Cured: labels{tag, mark} + palette.page + type{quoteStyle, markStyle, markLineHeight} added to CONFIG and consumed by setters/textContent; CSS color and font-style declarations removed. Supplementary harness checks verify overrides now reach labels.tag, palette.page, enterMs and endHoldMs (all PASS). This leg's miss is recorded for Condense: the all-literal scan must include HTML text content and CSS font-style/line-height declarations, not only the script block.
