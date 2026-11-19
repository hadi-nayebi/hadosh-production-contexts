# T219 — fit table (A6 measured-fit leg) · final build sha256 877ba1e2b3d22f320c88e4ee5abb9de60cb7d45e9a0e039d9f00a56c17ccba91 (measurements taken on the identical-geometry build 14cb759e…; the only later change bound the tag/banner text fill to `palette.tagText` — no font, size, or geometry changed)

- **Instrument:** PIL rendered measurement (guard-measured-fit lawful form ii) — PROXY, stand-in font **DejaVu Serif / DejaVu Serif Bold** (`/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf`, `DejaVuSerif-Bold.ttf`) at the CONFIG font sizes, ink bounds from `ImageFont.getbbox` (tight glyph ink), scaled to the 360 px stage by ×(360/960) = 0.375. NOT a character-width×factor model: every row is a rendered-font measurement of the actual string. The build's Georgia stack is unavailable to PIL in this seat, hence PROXY.
- **Subject text elements:** tile names, population row labels + numbers, elector numerals, the clause tag, the clause banner. Clock/controls are page chrome. Containers: tile width 300 (names, row labels, row numbers — rows are centred on the tile column), grid width 104 (numerals), tag width 392, banner width 480.
- **First-pass HITs (cured in CONFIG pre-filing, then re-measured below):** (1) row label "Enslaved people:" at `rowLabelFontPx` 36 measured ink width 311 px > 300 container (margin −11) — cured 36→34 (ink 294, margin +6; ink height @360 12.4 still ≥ floor). (2) Clause tag at `tagFontPx` 30 measured ink height @360 = 8.6 px < ~11 floor — cured 30→40 with `tagWPx` 292→392, `tagHPx` 34→44 and `tileGapPx` 210→190 so the widened tag (ends x=502) clears the Pennsylvania tile (starts x=520). The tag cure changed no schedule, count, or phase logic; the own-checks harness was re-run on the cured build (23/23, build-record.md).

| Row | Element | Measured ink (960 stage) | Ink @360 px | Container | Margin | Floor |
|---|---|---|---|---|---|---|
| 1 | Tile name "Pennsylvania" (42 px) | 278 × 41 px | height 15.4 px | 300 px | +22 px | PASS |
| 2 | Tile name "Virginia" (42 px) | 170 × 40 px | height 15.0 px | 300 px | +130 px | PASS |
| 3 | Row label "Enslaved people:" (34 px) | 294 × 33 px | height 12.4 px | 300 px | +6 px | PASS |
| 4 | Row label "Free people:" (34 px) | 217 × 33 px | height 12.4 px | 300 px | +83 px | PASS |
| 5 | Row number "347,000" (48 px bold) | 217 × 43 px | height 16.1 px | 300 px | +83 px | PASS |
| 6 | Row number "601,000" (48 px bold) | 217 × 43 px | height 16.1 px | 300 px | +83 px | PASS |
| 7 | Row number "1,700" (48 px bold) | 150 × 43 px | height 16.1 px | 300 px | +150 px | PASS |
| 8 | Row number "539,000" (48 px bold) | 217 × 43 px | height 16.1 px | 300 px | +83 px | PASS |
| 9 | Numeral "21" (52 px bold) | 72 × 39 px | height 14.6 px | 104 px | +32 px | PASS |
| 10 | Numeral "15" (52 px bold) | 72 × 40 px | height 15.0 px | 104 px | +32 px | PASS |
| 11 | Clause tag "Three-fifths clause" (40 px) | 378 × 30 px | height 11.2 px | 392 px | +14 px | PASS |
| 12 | Clause banner "Three-fifths clause" (42 px) | 397 × 32 px | height 12.0 px | 480 px | +83 px | PASS |

(Rows 7, 8, 10 added in the prewave cure round — firing 1 named "1,700", "539,000" and "15" as unmeasured subject strings; every rendered subject string is now a measured row.)

- **Hierarchy check:** numerals (14.6) and row numbers (16.1) carry the largest ink — the payoff counts dominate, matching the specimen (the counts are the finding); tile names 15.0–15.4 sit just below; row labels 12.4 are the quietest subject text, matching their supporting role. No inversion, no HIT.
- **Swap-set strings:** the content swap's "120,000" at 48 px bold measures within the row-number row's envelope (7 glyphs, same class as rows 5–6); "Alpha"/"Beta" names are shorter than both filed names. No swap row can overflow a container the default rows pass.
- **HIT list: EMPTY (0 HITs)** on the final build.

## Completion re-verification — Cycle 040 Wave 37 (A12.3)
Refiled on the cured record; the build is unchanged (sha256 `877ba1e2b3d22f320c88e4ee5abb9de60cb7d45e9a0e039d9f00a56c17ccba91`). All 12 rows re-measured with the same instrument (PIL, DejaVu Serif / DejaVu Serif Bold PROXY, `ImageFont.getbbox` ink bounds, ×0.375 to the 360 px stage): ink bounds reproduce the filed table exactly (widths 278/170/294/217/217/217/150/217/72/72/378/397 px; heights @360 15.4/15.0/12.4/12.4/16.1/16.1/16.1/16.1/14.6/15.0/11.2/12.0 px; margins +22/+130/+6/+83/+83/+83/+150/+83/+32/+32/+14/+83). **HIT list: EMPTY (0 HITs) — 12 measured rows.**
