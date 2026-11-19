# T92 — guard-measured-fit leg (Amendment A6) · fit-table — ATTEMPT 2

Method: PIL measurement with DejaVu Serif / DejaVu Serif Bold as stand-ins for the CONFIG Georgia stack (same method as attempt 1; its rows reproduce exactly at the old sizes, verified in the stage-4 check). Card inner width = cardW 320 − 2×cardPad 14 = **292 px**. Ink bounds are post-fit measurements (textbbox at the configured px size, letter-spacing added). PIXEL-UNVERIFIED: no browser binary in this seat. RENDER-FRAME-UNVERIFIED: the 360 px rendered-frame check could not be exercised (no exercisable render route); the fallback is this source-bound model + the PIL re-measurement.
Build bound: recreation.html sha256 `c2a74711913d05672e041f9d76a6496d41fd65b170ec0892d891b3b1e9ca53b5` (attempt-2 final candidate, post-neutralization).

| Element | Container | Font px | Measured ink W × H (px) | Lines | Margin (binding side) |
|---|---|---|---|---|---|
| hud.year "2025" | stage line | 26 | 66.0 × 19 | 1 | — |
| hud.day "A POSSIBLE TUESDAY" | stage line | 15 | 209.6 × 11 | 1 | — |
| hud.clock "19:00" | stage line | 30 | 86.0 × 22 | 1 | — |
| beat0.status "ALREADY MEASURED" | card line | 18 | 263.8 × 13 | 1 | R 28.2 |
| beat0.place "USA · 2025" | card line | 18 | 122.4 × 13 | 1 | R 169.6 |
| beat0.claim "AI research system: about 1 in 5 claims did not hold up" | card body | 20 | 562.0 × 19 | 2 | — |
| beat0.source "KOSMOS · ARXIV 2511.02824" | card foot | 17 | 277.3 × 12 | 1 | R 14.7 |
| beat0.value "1 in 5" | stage row | 46 | 132.0 × 35 | 1 | — |
| beat1.status "ALREADY TESTED" | card line | 18 | 220.8 × 13 | 1 | R 71.2 |
| beat1.place "TURKEY · 2025" | card line | 18 | 167.9 × 13 | 1 | R 124.1 |
| beat1.claim "Plain chatbot: exam scores 17% lower without it · tutor with guardrails: no such drop" | card body | 20 | 868.0 × 19 | 4 | — |
| beat1.source "BASTANI ET AL. · PNAS 2025" | card foot | 17 | 276.0 × 12 | 1 | R 16.0 |
| beat1.value "-17%" (SVG text) | chart | 46 | 118.0 × 35 | 1 | — |
| swap.claim "About 1 in 4 claims did not hold up" | card body | 20 | 357 × 19 | 2 | — |
| swap.value "-25%" (SVG text) | chart | 46 | 118 × 35 | 1 | — |

Hierarchy (measured): value ink 35.0 vs claim ink 19.0 → ratio 1.84; value vs status 13.0 → 2.69 ✓ — the value numeral remains measurably the largest text on each beat.

Wrap states (enumerated): every status/place/source row is exactly 1 line at the configured content and at both swap contents (widest: beat0.source 277.3 ≤ 292, margin R 14.7; source at 18 px would measure 294.3 > 292, which is why sourcePx is 17, ink 12.0). Claims wrap by design: beat0 2 lines, beat1 4 lines, swap claim 2 lines — heights carried in the card model below.

Card-to-chart clearance (source-bound displayed-state model; line heights 1.2×px single-line rows, claim 1.3×px per wrapped line):
- beat0: claim lines 2, card height 176.6, card bottom 268.6, chart top 332.0, clearance 63.4px
- beat1: claim lines 4, card height 228.6, card bottom 320.6, chart top 332.0, clearance 11.4px
- chart bottom 522.0 stageH 540.0
Beat1 clearance is 11.4 px at the new type sizes (chartY 332 in CONFIG); chart bottom 522 ≤ stageH 540.

## HIT list — EMPTY for measured rows (PASS for this leg)
Attempt 1's carried HIT (HUD day-line caps ink 9.0 px) is cured by measurement: hudDayPx 15 → ink **11.0 px**. Secondary text: status/place ink **13.0 px**, source ink **12.0 px** — inside the 12–13 px band. Open item, printed not hidden: **RENDER-FRAME-UNVERIFIED** — no rendered frame at 360 px could be produced in this session (no browser binary), so wrapping/clearance rest on the model above; consumer: the readability lens.
