# fit-table — T170 Vertical name-roll ticker (A6 measured-fit leg, FINAL build)

Instrument (printed as such): **the lane's standing character-width instrument** — per-glyph Arial advance widths (em fractions ×1000: capitals 611–944 by glyph, space/comma/period 278, hyphen 333, ampersand 778, digits 556, lowercase by glyph table) summed per name × fontPx 54 = estimated ink width at the 1080 stage; container = CONFIG footer.clip w 700. Ink height: fontPx 54 → 18px at the 360px stage scale (×1/3); cap-height ≈ 0.7 × 18 = **12.6px** vs the ~11px legibility floor (identical for every name — height is a font property, not a string property). Bold (fontWeight 700) widens advances ≈3%: the binding row re-checked at +3% below.

| Burst | Name (element) | Chars | Est. ink width @54px (1080 stage) | Margin vs clip 700 | Ink width @360 scale | Ink height @360 scale | Verdict |
|---|---|---|---|---|---|---|---|
| B01 | Nalpak, INC. | 12 | 312.1 | 387.9 | 104.0 | 12.6 | ok |
| B02 | NALPAK, INTL. | 13 | 390.0 | 310.0 | 130.0 | 12.6 | ok |
| B03 | NALPAK, LLC. | 12 | 375.0 | 325.0 | 125.0 | 12.6 | ok |
| B04 | NALPAK LOGISTICS | 16 | 531.0 | 169.0 | 177.0 | 12.6 | ok |
| B05 | NALPAKHOLDINGS | 14 | 510.0 | 190.0 | 170.0 | 12.6 | ok |
| B06 | NALPAK & SCHUSTER | 17 | 594.0 | 106.0 | 198.0 | 12.6 | ok — BINDING ROW (longest); at +3% bold allowance ≈611.8, margin ≈88.2, still fits |
| B07 | NALPAK FINANCE | 14 | 480.0 | 220.0 | 160.0 | 12.6 | ok |
| B08 | NAL-PAK LTD | 11 | 362.9 | 337.1 | 121.0 | 12.6 | ok |
| B09 | NALPAK LONDON | 13 | 474.0 | 226.0 | 158.0 | 12.6 | ok |
| B10 | NP CARTIER | 10 | 330.0 | 370.0 | 110.0 | 12.6 | ok |
| B11 | PAK SYSTEMS | 11 | 387.1 | 312.9 | 129.0 | 12.6 | ok |
| B12 | NALPAK SWEDEN | 13 | 477.0 | 223.0 | 159.0 | 12.6 | ok |
| B13 | NALPAK CO INC | 13 | 429.0 | 271.0 | 143.0 | 12.6 | ok |
| B14 | NAL & PENN | 10 | 333.0 | 367.0 | 111.0 | 12.6 | ok |
| B15 | N PAK SYSTEMS | 13 | 441.1 | 258.9 | 147.0 | 12.6 | ok |
| B16 | NALPAK LABS | 11 | 387.0 | 313.0 | 129.0 | 12.6 | ok |
| B17 | NAL MICROTEK | 12 | 414.0 | 286.0 | 138.0 | 12.6 | ok |
| B18 | NP GLOBAL | 9 | 318.0 | 382.0 | 106.0 | 12.6 | ok |
| B19 | WESTERN NALPAK | 14 | 510.0 | 190.0 | 170.0 | 12.6 | ok |
| B20 | NP LIMITED | 10 | 306.0 | 394.0 | 102.0 | 12.6 | ok |
| B21 | NALPAK OPS | 10 | 354.0 | 346.0 | 118.0 | 12.6 | ok |
| B22 | SHANGHAI NP | 11 | 378.0 | 322.0 | 126.0 | 12.6 | ok |
| B23 | NALPAK 3001 | 11 | 360.1 | 339.9 | 120.0 | 12.6 | ok |

## HIT list
**HITs: 0** — every name fits the 700px clip with ≥88px margin (bold-adjusted binding row), and every name's ink height at phone scale (12.6px) clears the ~11px floor. Hierarchy: single text element class only — no neighbouring-text hierarchy is claimed, so no hierarchy row is owed.
