# T57 attempt 3 — measured-fit table (guard-measured-fit leg, pre-scoring)

File measured: recreation.html sha256 f8b0735ca57335f6fca2486b8936c3e785ca8dcaf34950c2bedc05b24c8f19e3
Method: PIL glyph measurement with DejaVu Serif (Bold for quote/speaker, Regular for occasion) as the Georgia stand-in, at the 360 px stage; card geometry from the source's own rounding (card width round(360×0.72)=259, padding round(360×0.045)=16 per side, rule 4 → available 223 px, wrap guard 216.3 px). Stage 360×202.5 (aspect from the configured 16/9). Ink heights measured with PIL textbbox on "Mg" at 4× and scaled back. **This leg is MODEL-LEVEL while PIXEL-UNVERIFIED stands: no fit result here is a guarantee of browser layout.** The attribution estimator's handling, stated explicitly: tokens are split on whitespace runs (each run collapses to one space, as the rendered inline spans do); every token is measured in its own role font; the speaker–occasion separator gap (configured, 0.45 em) is counted once and only when the occasion's first token lands on the same line as preceding content; a token wider than the available width is hard-split at character level; the line count is unbounded.

| Element | Container | Measured ink / bounds | Container bounds | Margin (binding side) |
|---|---|---|---|---|
| Q1 quote line 1 "Made a career of doing" | card text block | 188.3 px wide · ink height 13.8 px at 14.4 px font | 216.3 px guard width | 28.0 px |
| Q1 quote line 2 "favors for his colleagues." | card text block | 203.7 px wide · ink 13.8 px | 216.3 px | 12.6 px |
| Q1 attribution "— Associated Press on Byrd" | attribution block | 212.4 px on one line (speaker 150.4 + gap 6.3 + occasion 55.7) · 1 wrapped line · ink 13.2 px at 14.04 px font · block height 1 × 14.04 × 1.3 (configured attribution line height) = 18.3 px | 223 px available | 10.6 px |
| Q2 quote line 1 "Range far beyond his" | card text block | 172.5 px wide · ink 13.8 px | 216.3 px | 43.8 px |
| Q2 quote line 2 "public ones." | card text block | 98.4 px wide · ink 13.8 px | 216.3 px | 117.9 px |
| Q2 attribution "— Semafor on Schumer's private commitments" | attribution block | 343.0 px on one line → 2 wrapped lines by the simulation · ink 13.2 px · block height 2 × 14.04 × 1.3 = 36.5 px | 223 px available | wraps, no clipping (no nowrap, no fixed height) |
| Long-attribution swap state (suite fixture: long organisation name + long occasion) | attribution block | 6 wrapped lines by the simulation · block height 6 × 14.04 × 1.3 = 109.5 px — the count is unbounded, not capped | 223 px available | priced in the card height for that swap; overflow, if any, is reported by the build's diagnostics |
| Q1 complete card | stage | height 111.5 px (padding 25.2 + glyph 27×0.6 configured glyph line height = 16.2 + gaps 14.4 + quote 37.4 + attribution 18.3) | 182.25 px budget (0.9 × stage height) | 70.8 px |
| Q2 complete card | stage | height 129.7 px (attribution at 2 wrapped lines) | 182.25 px budget | 52.6 px |
| Glyph "“" | card head | 15.5 px wide · ink height 25.8 px at 27 px font (line box 16.2 px at the configured glyph line height — the glyph is a decorative quote mark; its ink overflows its line box symmetrically, priced here, not hidden) | card width 259 px | — (decorative) |

Hierarchy: quote 14.4 px vs attribution 14.04 px — near-equal sizes by design; hierarchy is carried by weight (600 vs 700/400) and color, measured sizes printed here so the claim is not hue-only: ratio 1.03.

Wrapped-state enumeration (per the wrapped-states rule): attribution measured at 1-line (Q1), 2-line (Q2), and ≥3-line (long swap, 6 lines) states; quote blocks measured at their wrapped line counts; complete-card heights priced at each default state.

## HIT list
**0 HITs — PASS for this leg (model level).** Notes carried (not hits): (1) measured ink heights (quote 13.8 px, attribution 13.2 px) clear the ~11 px legibility floor at phone width. (2) PIXEL-UNVERIFIED: stand-in font metrics cannot establish actual Georgia wrapping or the absence of browser clipping; the model's internal caps are removed, the residual is measurement fidelity.
