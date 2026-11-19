# fit-table — T99 logo-mark assembly opening (guard-measured-fit, A6 pre-wave leg)

Method: glyph geometry MEASURED with PIL/ImageFont (DejaVuSans-Bold, a wider-than-Arial bold proxy — a conservative bound for the CONFIG font stack Arial/Helvetica) at the CONFIG font size; container = the 360 px stage. One subject text element exists in this build.

| element | container | measured ink bounds (post-fit) | container bounds | margin on binding side |
|---|---|---|---|---|
| wordmark text "SCHOOL OF MOTION" (CONFIG.wordmark, 24 px / 700 / letterSpacing 2) | stage width, centred single line | advance 274.7 px + letter-spacing 30 px = **304.7 px wide**; cap ink height **≈17–18 px** | 360 px wide | (360 − 304.7) / 2 = **27.6 px each side** |
| wordmark text under swap "HADOSH ACADEMY" (same CONFIG values) | stage width, centred single line | advance 257.1 px + letter-spacing 26 px = **283.1 px wide**; cap ink height ≈17–18 px | 360 px wide | 38.4 px each side |

- Legibility floor: measured ink height ≈17–18 px ≥ ~11 px floor — PASS.
- Hierarchy: only one text element; no hierarchy claim — no row owed.
- Cure applied during this leg: fontSize was 28 in the first build pass; measured advance at 28 px was 350.4 px total (4.8 px margins) — reduced to 24 in CONFIG before scoring; the table above is the FINAL build's measurement.
- Fitting policy (added in the interim-wave cure): the build measures the rendered wordmark at init and scales the font down proportionally if the line exceeds the stage — a longer swapped wordmark cannot clip; the default and §2 swap texts both fit unscaled per the rows above.
- Triangles carry no text; the mark's geometry is priced by the config-census leg, not this leg.

**HIT list: EMPTY — leg PASS (advisory).**
