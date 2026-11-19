# T57 attempt 2 — measured-fit table (guard-measured-fit leg, pre-scoring)
File measured: recreation.html sha256 52ea12eb3e4b188e937f05faf55821488ab8a0bc152ca7ce3e88b128068b87b9
Method: PIL glyph measurement with DejaVu Serif (Bold for quote/speaker, Regular Italic metrics via Regular for occasion) as the Georgia stand-in — the same stand-in as attempt 1 — at the 360 px stage; card geometry from the source's own rounding (card width round(360×0.72)=259, padding round(360×0.045)=16 per side, rule 4 → available 223 px, wrap guard 216.3 px). Stage 360×202.5. PIXEL-UNVERIFIED (no browser route); rows are post-fit measurements of the wrapped geometry, not formula assertions.

| Element | Container | Measured ink / bounds | Container bounds | Margin (binding side) |
|---|---|---|---|---|
| Q1 quote line 1 "Made a career of doing" | card text block | 188.3 px wide · ink height ≈11.0 px at 14.4 px font | 216.3 px guard width | 28.0 px |
| Q1 quote line 2 "favors for his colleagues." | card text block | 203.7 px wide · ink ≈11.0 px | 216.3 px | 12.6 px |
| Q1 attribution "— Associated Press on Byrd" | attribution line | 212.4 px wide (speaker 150.4 + gap 6.3 + occasion 55.7) · 1 line · ink ≈11.0 px at 14.04 px font | 223 px available | 10.6 px |
| Q2 quote line 1 "Range far beyond his" | card text block | 172.5 px wide · ink ≈11.0 px | 216.3 px | 43.8 px |
| Q2 quote line 2 "public ones." | card text block | 98.4 px wide · ink ≈11.0 px | 216.3 px | 117.9 px |
| Q2 attribution "— Semafor on Schumer's private commitments" | attribution line | 343.0 px on one line → wraps to 2 lines by design (occasion alone 252.1 px) · ink ≈11.0 px at 14.04 px font | 223 px available | wraps, no clipping (no nowrap, no fixed height) |
| Q1 complete card | stage | height ≈111.9 px (padding 26 + glyph 16.2 + gaps 14 + quote 37.4 + attribution 18.3) | 182.25 px budget (0.9 × stage height) | 70.3 px |
| Q2 complete card | stage | height ≈130.1 px (attribution at 2 wrapped lines) | 182.25 px budget | 52.2 px |
| Glyph "“" | card head | 15.5 px wide · ink height ≈20.3 px at 27 px font | card width 259 px | — (decorative) |

Hierarchy: quote 14.4 px vs attribution 14.04 px — near-equal sizes by design (the specimen's attribution is set close to quote size); hierarchy is carried by weight (600 vs 700/400) and color, measured sizes printed here so the claim is not hue-only: ratio 1.03.

## HIT list
**0 HITs — PASS for this leg.** Notes carried (not hits): (1) measured ink height ≈11.0 px for quote and attribution sits AT the ~11 px floor, not below it — the floor is met exactly at phone width; larger stages scale up proportionally. (2) Q2's attribution wraps to two lines; the complete-card fit prices the wrapped state and holds with 52.2 px margin.
