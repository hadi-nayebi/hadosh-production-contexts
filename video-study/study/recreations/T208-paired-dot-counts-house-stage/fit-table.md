# fit-table — T208 (A6 measured-fit leg, guard-measured-fit.md)

Instrument for every row: **rendered measurement with a named stand-in font** (A12.2 form ii) — PIL (Pillow) rasterization of the exact label strings with **DejaVuSans / DejaVuSans-Bold** (the recreation's Georgia stack is unavailable to PIL in this seat; rows are therefore PROXY), ink bounds from the rasterized glyph mask, stage geometry from CONFIG (stageW 960; phone stage 360 px → scale 0.375). Reserved bands per the binding badge note: label band 360×104 stage px per column, annotation band 360×96 stage px. Legibility floor ≈11 px ink height at the 360 px stage.

| Element | Text | Instrument / provenance | Ink @ stage size | Ink @ 360 px stage | Container @360 | Margin (binding side) | Floor |
|---|---|---|---|---|---|---|---|
| col-tx-name | Texas | PIL + DejaVuSans-Bold 44px (PROXY) | 136×32 | 51.0×12.0 | 135×39 | W +84.0 | PASS |
| col-vt-name | Vermont | PIL + DejaVuSans-Bold 44px (PROXY) | 211×32 | 79.1×12.0 | 135×39 | W +55.9 | PASS |
| col-tx-pop | 25,268,000 | PIL + DejaVuSans 36px (PROXY) — post-cure size | 200×31 | 75.0×11.6 | 135×39 | W +60.0 | PASS |
| col-vt-pop | 630,000 | PIL + DejaVuSans 36px (PROXY) — post-cure size | 143×31 | 53.6×11.6 | 135×39 | W +81.4 | PASS |
| ratio-tx | 702,000 | PIL + DejaVuSans-Bold 40px (PROXY) | 177×35 | 66.4×13.1 | 135×36 | W +68.6 | PASS |
| ratio-vt | 630,000 | PIL + DejaVuSans-Bold 40px (PROXY) | 178×35 | 66.8×13.1 | 135×36 | W +68.2 | PASS |

Hierarchy (check 4): name ink height 12.0 px vs population 11.6 px @360 — near-equal by design (the census shows name and population at comparable weight; no hierarchy is claimed between them, so no hierarchy HIT). Ratio ink 13.1 px is the largest annotation element, matching its role as the finding.

**Pre-cure HIT (cured before scoring, A6 form):** at the Plan's original `typeScale.population = 30`, both population rows measured ink height **9.4 px @360 < 11 px floor** (25,268,000: 168×25 stage; 630,000: 120×25 stage) — HIT ×2 under check 3. Cure: `typeScale.population` 30 → 36 in CONFIG; re-measured rows above (11.6 px, PASS). The cure changed no schedule or count logic; the own-checks harness was re-run on the cured build (31/31, filed in build-record.md).

**HIT list (final build): EMPTY — 0 hits.**

**Cycle 038 fresh re-measurement (A12.3 completion, build unchanged 42d33e6b…):** PIL + DejaVuSans / DejaVuSans-Bold (PROXY, same instrument) — ink stage px: Texas 137×32 · Vermont 212×32 · 25,268,000 202×31 · 630,000 145×31 · 702,000 178×35 · 630,000 (ratio) 178×35. Ink heights @360 identical to the filed rows (12.0 / 11.6 / 13.1 px); widths within 2 stage px of the filed rows; every row PASS on the binding margin. **HIT list (Cycle 038): EMPTY — 0 hits.**
