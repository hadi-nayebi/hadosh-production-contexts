# T81 — guard-measured-fit leg (Amendment A6) · fit-table

Method: PIL measurement with DejaVu Serif / DejaVu Serif Bold as stand-ins for the CONFIG Georgia stack (fleet precedent, T56) at the 360 px stage. Container for all card text: card inner width = cardW 320 − 2×cardPad 16 = **288 px**. Ink bounds are post-fit rendered-geometry measurements (textbbox at the configured px size, letter-spacing added), not formula claims. PIXEL-UNVERIFIED: no browser binary in this seat.

| Element | Container | Font px | Measured ink W × H (px) | Lines | Margin (binding side) |
|---|---|---|---|---|---|
| card0.status "ALREADY IN USE" | card line | 15 bold | 176 × 11.0 | 1 | R 112 |
| card0.place "INDIA · 2025" | card line | 15 | 123 × 11.0 | 1 | R 165 |
| card0.claim "Live translation into any headphones, free" | card body | 24 | 515 × 23.0 | 2 (wraps by design) | — |
| card0.source "GOOGLE TRANSLATE BETA · DEC 2025" | card foot | 13 | 284 × 9.0 | 1 | R 4 |
| card1.status "ALREADY BEING BUILT" | card line | 15 bold | 243 × 11.0 | 1 | R 45 |
| card1.place "UK · 2026" | card line | 15 | 93 × 11.0 | 1 | R 195 |
| card1.claim "An AI assistant for government services" | card body | 24 | 487 × 23.0 | 2 (wraps by design) | — |
| card1.source "GOV.UK · ANTHROPIC PILOT, JAN 2026" | card foot | 13 | 283 × 12.0 | 1 | R 5 |
| card2.status "ALREADY IN THE LAB" | card line | 15 bold | 226 × 11.0 | 1 | R 62 |
| card2.place "USA · 2025" | card line | 15 | 105 × 11.0 | 1 | R 183 |
| card2.claim "AI-designed antibiotics cured infected mice" | card body | 24 | 531 × 23.0 | 2 (wraps by design) | — |
| card2.source "LAB REPORT · 2025" | card foot | 13 | 142 × 9.0 | 1 | R 146 |
| swap.claim "Offline translation on every bus, free" | card body | 24 | 449 × 23.0 | 2 (wraps by design) | — |
| swap.status "ALREADY MEASURED" | card line | 15 bold | 220 × 11.0 | 1 | R 68 |

Hierarchy (measured): claim ink 23.0 vs status ink 11.0 → ratio 2.1 (a size hierarchy, not hue-only) ✓.

Pre-cure history: at status/place 13 px and source 12 px, caps ink measured 9.0 across the small lines and the two long source lines wrapped at 13 px with 0.10 em spacing. Cured pre-wave: status/place 13→15 px (ink 11.0, at floor), source 12→13 px, source letter-spacing 0.10→0.04 em, cardPad 18→16 (inner 284→288). All rows re-measured on the final build (table above).

## HIT list — 1 marginal HIT carried into the wave (advisory disposition)
- **H1 (marginal):** card0.source and card2.source caps ink height **9.0 px** vs the ~11 px floor (all-caps lines: cap height ≈ 0.69 × 13 px font). Not curable inside the binding constraints: at 14 px the card0 source line measures >300 px wide and breaks its one-line fit at cardW 320; widening the card past 320 breaks the stage margin. The line is a foot-line source chip (supporting text, accent-colored on the dark card), the specimen's own source line is proportionally the smallest text on its card, and the stand-in font (DejaVu) is wider/heavier than Georgia. Carried printed for the readability lens to price; NOT presented as cured.
All other rows: PASS (ink ≥ 11.0 px or claim 23.0 px; every element has a row; no formula-claimed bounds).
