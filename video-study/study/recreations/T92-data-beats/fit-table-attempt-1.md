# T92 — guard-measured-fit leg (Amendment A6) · fit-table

Method: PIL measurement with DejaVu Serif / DejaVu Serif Bold as stand-ins for the CONFIG Georgia stack (fleet precedent, T56/T81) at the 360 px stage. Card inner width = cardW 320 − 2×cardPad 14 = **292 px**. Ink bounds are post-fit rendered-geometry measurements (textbbox at the configured px size, letter-spacing added), not formula claims. PIXEL-UNVERIFIED: no browser binary in this seat.
Build bound: recreation.html sha256 `64e8d4a8ce2f11451f70d9a48de66932ea0a76e5d1fa4083b1ea2bb50512ac03` (final build after the interim-wave cures; table re-measured after the fit cures below — the interim build `2c6f0691…` differed only in hudDayPx 12→13 / spacing 0.18→0.12 among fit-relevant keys).

| Element | Container | Font px | Measured ink W × H (px) | Lines | Margin (binding side) |
|---|---|---|---|---|---|
| hud.year "2025" | stage line | 26 | 66.0 × 19.0 | 1 | — |
| hud.day "A POSSIBLE TUESDAY" | stage line | 13 | 181.5 × 9.0 | 1 | — |
| hud.clock "19:00" | stage line | 30 | 86.0 × 22.0 | 1 | — |
| beat0.status "ALREADY MEASURED" | card line | 15 bold | 219.5 × 11.0 | 1 | R 72.5 |
| beat0.place "USA · 2025" | card line | 15 | 102.2 × 11.0 | 1 | R 189.8 |
| beat0.claim "AI research system: about 1 in 5 claims did not hold up" | card body | 20 | 562 × 19.0 | 2 (wraps by design) | — |
| beat0.source "KOSMOS · ARXIV 2511.02824" | card foot | 15 | 245.4 × 11.0 | 1 | R 46.6 |
| beat0.value "1 in 5" | stage row | 46 | 132.0 × 35.0 | 1 | — |
| beat1.status "ALREADY TESTED" | card line | 15 bold | 184.3 × 11.0 | 1 | R 107.7 |
| beat1.place "TURKEY · 2025" | card line | 15 | 139.6 × 11.0 | 1 | R 152.4 |
| beat1.claim "Plain chatbot: exam scores 17% lower without it · tutor with guardrails: no such drop" | card body | 20 | 868 × 19.0 | 4 (wraps by design) | — |
| beat1.source "BASTANI ET AL. · PNAS 2025" | card foot | 15 | 244.0 × 11.0 | 1 | R 48.0 |
| beat1.value "-17%" (SVG text) | chart | 46 | 118.0 × 35.0 | 1 | — |
| swap.claim "About 1 in 4 claims did not hold up" | card body | 20 | 357 × 19.0 | 2 (wraps by design) | — |
| swap.value "-25%" (SVG text) | chart | 46 | 118.0 × 35.0 | 1 | — |

Hierarchy (measured): value ink 35.0 vs claim ink 19.0 → ratio 1.84; value vs status 11.0 → 3.18 (a size hierarchy, not hue-only) ✓ — the value numeral is measurably the largest text on each beat (T45 bound lesson).

Pre-cure history: at place 14 px / source 13 px / hudDay 11 px, caps ink measured place 10.0, source 9.0, day-line 8.0. Cured pre-wave: placePx 14→15 (ink 11.0), sourcePx 13→15 in two steps (ink 11.0, one-line fit kept: 245.4 ≤ 292), hudDayPx 11→12 (ink 9.0 — see HIT). All rows re-measured on the final build (table above).

## HIT list — 1 marginal HIT carried into the wave (advisory disposition)
- **H1 (marginal):** hud.day "A POSSIBLE TUESDAY" caps ink height **9.0 px** at 13 px font (spacing tightened 0.18→0.12 em on the interim readability cure; cap height is the binding term) vs the ~11 px floor. It is the HUD register's label line (supporting text, accent-colored), the specimen's own day-line is proportionally the smallest text in its HUD, and the stand-in font (DejaVu) is wider/heavier than Georgia. Raising it further unbalances the HUD register against the measured specimen proportions. Carried printed for the readability lens to price; NOT presented as cured.
All other rows: PASS (ink ≥ 11.0 px; every subject element has a row; no formula-claimed bounds).
