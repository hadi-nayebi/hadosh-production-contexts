# fit-table — T175 Name-exit ending (guard-measured-fit, A6 pre-wave leg)

Method: the lastName element measured with the lane's standing character-width instrument — glyph-ink geometry from the build harness's per-class character-width table (upper 0.72em · lower 0.56em · digit 0.62em · space 0.32em · punct 0.28em), run in node over the build's own CONFIG (harness output filed verbatim in build-record.md). Ink height = cap height 0.72em (the string carries no descender glyphs). Instrument stated: node logic harness (DOM-free text metrics, canvas measureText equivalent) — no browser binary in this seat; PIXEL-UNVERIFIED. One subject text element exists in this build (the footer last name — the technique's subject text, not a caption).

| element | container | measured ink bounds (post-fit) | container bounds | margin on binding side |
|---|---|---|---|---|
| lastName text "NALPAK 3001" (CONFIG.lastName.text, fontPx 54) | footer clip box (CONFIG.footer.clip) | ink width **384.48 px** (7.12em: 6 upper × 0.72 + 1 space × 0.32 + 4 digits × 0.62, × 54 px) at design scale; ink height 38.88 px design = **12.96 px at the 360 px stage** | clip width **700 px** (design scale); clip height 74 px | (700 − 384.48) / 2 = **157.76 px each side** (centred) |
| lastName text under swap "ACME 9000" (same CONFIG values) | footer clip box | ink width **306.72 px** (5.68em × 54 px); ink height 12.96 px at 360 px stage | clip width 700 px | 196.64 px each side |

- Ink width vs clip: 384.48 ≤ 700 — **HITs 0** (the name fits its clip box with margin; no fitting compression is applied or needed).
- Legibility floor: measured ink height at the 360 px stage = 12.96 px ≥ ~11 px floor — **PASS**.
- Hierarchy: only one text element; no hierarchy claim — no row owed.

**HIT list: EMPTY — leg PASS (advisory).**
