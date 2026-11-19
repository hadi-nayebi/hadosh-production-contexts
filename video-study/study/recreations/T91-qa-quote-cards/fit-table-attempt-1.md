# T91 — guard-measured-fit leg (Amendment A6) · fit-table

Method: PIL measurement with DejaVu Serif (regular) and Liberation Serif Italic as stand-ins for the CONFIG Georgia stack at the 360 px stage. Ink bounds are post-fit rendered-geometry measurements (textbbox + getlength at the configured px size, letter-spacing added), not formula claims. PIXEL-UNVERIFIED: no browser binary in this seat.
Attribution fit rule (codex-plan-review cure 1, applied): speaker 20 px, one line, no truncation · role 15 px, wraps to at most 3 lines inside the 274 px attribution text width, no truncation, no overflow response needed because the attribution block height (geom.attrH 92) is sized for the worst case (speaker 23.0 + gap 3 + 3 role lines × 19.5 = 84.5 ≤ 92) · attribution is inside the single card node, so it is present from the first entrance frame with the card.
Contrast (computed WCAG ratios on the actual card/background colors): ink on card 14.64:1 · accent (role line, quote mark) on card 10.09:1 · ink on bg (HUD) 8.67:1 · ink on chip (QUOTE tag) 15.89:1 · swap accent #3fd68f on card 8.78:1 — every text/background pair ≥ 4.5:1 ✓ (G-T91-1(b)).

| Element | Container | Font px | Measured ink W × H (px) | Lines | Margin / note |
|---|---|---|---|---|---|
| hud.line "2037 · A POSSIBLE TUESDAY" | stage top-left | 15 | 294 × 11.0 | 1 | R 50 to stage edge |
| hud.clock "19:00" (swap "07:30" same metrics class) | stage top-left | 34 | 98 × 25.0 | 1 | — |
| tag "QUOTE" | chip inside card | 12 | 61.9 × 11.0 | 1 | chip inner width 300 |
| mark "“" | card body left | 46 | 23.5 × 35.0 | 1 | decorative glyph, accent |
| card0.quote (Schneier) | card body, width 256 | 24 italic | line ink H 22.0, block H 95.0 | 3 | quote zone depth 248 (64→312 rel) |
| card1.quote (Sal Khan) | card body, width 256 | 24 italic | line ink H 22.0, block H 126.7 | 4 | fits zone, 121 spare |
| card2.quote (Berners-Lee) | card body, width 256 | 24 italic | line ink H 22.0, block H 95.0 | 3 | fits zone |
| card0.speaker "Bruce Schneier" | attribution, width 274 | 20 | 156.8 × 15.0 | 1 | R 117 |
| card1.speaker "Sal Khan" | attribution, width 274 | 20 | 91.0 × 15.0 | 1 | R 183 |
| card2.speaker "Tim Berners-Lee" | attribution, width 274 | 20 | 169.5 × 15.0 | 1 | R 105 |
| card0.role "SECURITY TECHNOLOGIST, HARVARD KENNEDY SCHOOL · 2026" | attribution, width 274 | 15 | ink H 13.0 | 3 | block priced in attrH (above) |
| card1.role "FOUNDER, KHAN ACADEMY · 2024" | attribution, width 274 | 15 | ink H 13.0 | 2 | — |
| card2.role "INVENTOR OF THE WEB · 2026" | attribution, width 274 | 15 | ink H 11.0 | 2 | at floor |
| swap.speaker "Ada Lovelace" | attribution, width 274 | 20 | 135.3 × 15.0 | 1 | R 139 |
| swap.quote "Teach him how to ask, not what to answer." | card body, width 256 | 24 italic | line ink H 22.0 | 2 | fits zone |

Hierarchy (measured): quote ink 22.0 vs speaker ink 15.0 vs role ink 11.0–13.0 — a size hierarchy, not hue-only ✓.

Pre-cure history: role at 13 px measured caps ink 9.0–11.0 (the T57 failure class) → cured pre-wave: rolePx 13→15 in two steps with attrH 64→92 sized for the 3-line worst case; hudLine 13→15 px (ink 9.0→11.0). All rows above are re-measured on the final build.

## HIT list — EMPTY (PASS for this leg)
Every subject text element has a measured row; no measured ink height below the ~11 px floor; attribution contrast ≥ 4.5:1 on every pair (worst pair: ink on bg 8.67:1).
