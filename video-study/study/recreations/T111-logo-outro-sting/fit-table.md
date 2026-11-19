# fit-table — T111 logo outro sting (guard-measured-fit, A6 pre-wave leg)

Method: glyph geometry MEASURED with PIL/ImageFont (DejaVuSans-Bold, a wider-than-Arial bold proxy — a conservative bound for the CONFIG font stack Arial/Helvetica) at the CONFIG font size; container = the 360 px stage. One subject text element exists in this build (the wordmark — the technique's subject text, not a caption).

| element | container | measured ink bounds (post-fit) | container bounds | margin on binding side |
|---|---|---|---|---|
| wordmark text "SCHOOL OF MOTION" (CONFIG.wordmark, 20 px / 700 / letterSpacing 3) | stage width, centred single line | advance 228.9 px + letter-spacing 45 px (15 gaps × 3) = **273.9 px wide**; cap ink height **15 px** | 360 px wide | (360 − 273.9) / 2 = **43.0 px each side** |
| wordmark text under swap "HADOSH ACADEMY" (same CONFIG values) | stage width, centred single line | advance 214.2 px + letter-spacing 39 px (13 gaps × 3) = **253.2 px wide**; cap ink height **15 px** | 360 px wide | 53.4 px each side |

- Legibility floor: measured ink height 15 px ≥ ~11 px floor — PASS.
- Hierarchy: only one text element; no hierarchy claim — no row owed. (The source wordmark renders "OF" smaller and raised; this build renders the line at one size — a fidelity simplification named in build-record, not a fit claim.)
- Fitting policy: the build measures the rendered wordmark at init and scales the font down proportionally if the line exceeds the stage — a longer swapped wordmark cannot clip; the default and swap texts both fit unscaled per the rows above.
- Triangles carry no text; the mark's geometry is priced by the config-census leg, not this leg.

**HIT list: EMPTY — leg PASS (advisory).**
