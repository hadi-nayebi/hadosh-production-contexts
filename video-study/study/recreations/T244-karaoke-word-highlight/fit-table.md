# fit-table — T244 · attempt 1 (guard-measured-fit)
Method: RENDERED MEASUREMENT with PIL/ImageFont in **Noto Sans Arabic Regular** (named stand-in font, installed in this seat; the CONFIG stack's Tahoma is not) at ×4 supersampling; ink width/height are the rendered glyphs' actual ink bounding boxes. The build's own fit rule (shrink per line while ink width > fitWidthFraction × stageW, bound 0.94) was executed here on rendered ink — the same rule the renderer's canvas measureText loop applies. No character-width×factor model is used anywhere.
Build: recreation.html SHA-256 73010b0fb1cf5fbd2a0f4a6a7e148aceef142b723b5843d5ad3e8a19a21b4a72 (5,887 B).

## 360 px stage (reference stage; base size 44 × 360/720 = 22.00 px; bound 338.4 px)
| element | container | fitted size (px) | measured ink width (px) | ink height (px) | margin, binding side (px) | flag |
|---|---|---|---|---|---|---|
| L0 carry-in (8 words) | band line @ bandTopFraction 0.845 | 19.80 (shrunk by rule) | 337.8 | 20.2 | 11.1 (horizontal, centred) | |
| L1 (5 words) | band line | 22.00 | 201.5 | 21.0 | 79.2 | |
| L2 (4 words) | band line | 22.00 | 203.8 | 24.2 | 78.1 | |
| L3 (6 words) | band line | 22.00 | 264.2 | 21.0 | 47.9 | |
| L4 (5 words) | band line | 22.00 | 208.2 | 23.8 | 75.9 | |

## 720 px stage (design stage; base 44.00 px; bound 676.8 px)
| element | fitted size (px) | ink width (px) | ink height (px) | margin (px) | flag |
|---|---|---|---|---|---|
| L0 | 39.61 (shrunk) | 675.2 | 40.5 | 22.4 | |
| L1 | 44.00 | 402.5 | 41.8 | 158.8 | |
| L2 | 44.00 | 407.2 | 48.5 | 156.4 | |
| L3 | 44.00 | 528.5 | 41.8 | 95.8 | |
| L4 | 44.00 | 416.2 | 47.0 | 151.9 | |

Legibility floor (~11 px at 360 stage): smallest fitted ink height 20.2 px (L0) — above floor. First-draft measurement (pre-fit-rule) found L0 ink 376.0 px > 360 stage — that HIT was cured by the measured-fit shrink rule now in the build; the cured rows above are the final build's.
HITs: 0 (final build).
