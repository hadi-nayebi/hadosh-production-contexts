# T241 — fit-table (A6 measured-fit leg) · attempt 1 · Wave 38

Instrument: PIL rendered measurement (ImageFont.getbbox) with named stand-in font **DejaVuSerif.ttf** (PROXY for the CONFIG Georgia stack), measured at native 720-stage px, reported also at the 360 px stage (×0.5). Build: recreation.html sha256 2c4b4e15e25a06994e9c7208a387e13e536c5f30ccc9572ccd6b93e1190b5aca. Rows measured on the FINAL build's CONFIG values (after the fit cures below).

| element | container | measured ink (native) | ink @360 stage | margin (binding side) | verdict |
|---|---|---|---|---|---|
| texts.formula "P(F|H) ≈ 0.98" @ formulaPx 46 | stage 720 wide, centred x=360 | 325 × 46 | 162.5 × 23.0 | 197.5 px/side | PASS |
| texts.slotWord "hope" @ 34 (formulaPx−12) | slot box slotW 110 @ x=536..646 | 84 × 33 | 42.0 × 16.5 | 13 px/side in box; box ends 74 px from stage edge | PASS |
| texts.callout[0] "cause of failure no. 1" @ calloutPx 29 | x=calloutX 404 → stage edge 720 | 309 × 22 | 154.5 × 11.0 | right margin 7 px | PASS (at legibility floor, printed) |
| texts.callout[1] "failure" @ 29 | x=404 → 720 | 96 × 22 | 48.0 × 11.0 | right margin 220 px | PASS (at floor) |
| texts.expansion[0] @ expansionPx 22 | stage 720, centred | 713 × 22 | 356.5 × 11.0 | 3.5 px/side | PASS (at floor; tight, printed) |
| texts.expansion[1] @ 22 | stage 720, centred | 704 × 22 | 352.0 × 11.0 | 8 px/side | PASS (at floor) |
| texts.expansion[2] @ 22 | stage 720, centred | 466 × 22 | 233.0 × 11.0 | 127 px/side | PASS (at floor) |

Hierarchy (check 4): formula ink height @360 = 23.0 vs expansion 11.0 → measured ratio 2.09 (subject > support, as designed); callout 11.0 sits between. No hue-only hierarchy.
Pitch/collision: expansionY pitch 32 native vs ink height 22 → 10 px clearance ≥ 4 required. PASS.
Cures applied from this leg's first measurement (before filing): expansionPx 24→22 (at 24 the two long lines measured 778/768 wide — stage overflow; the Plan's defined fallback floor is 22) · calloutX 492→404 (at 492 the gloss measured to x=801 — overflow) · slotW 86→110 + slotDx 176 (slot word ink 84 in an 86 box = 1 px margin; slot also cleared of the formula ink, which ends at x=522).
**HIT list: EMPTY (0 HITs).** Carried note: expansion + callout ink heights sit exactly AT the ~11 px floor at 360 stage — the specimen's own expansion is below phone legibility (digest B-a); the recreation holds the floor, it does not beat it. The readability lens prices this with eyes open.

## Cycle 042 completion re-run (Wave 39, A12.3)
Re-measured on the UNCHANGED final build (sha256 2c4b4e15e25a06994e9c7208a387e13e536c5f30ccc9572ccd6b93e1190b5aca) with the same instrument (PIL `ImageFont.getbbox`, DejaVuSerif.ttf PROXY): all 7 rows reproduce the filed ink bounds EXACTLY — formula 325×46 · slotWord 84×33 · callout[0] 309×22 · callout[1] 96×22 · expansion[0] 713×22 · expansion[1] 704×22 · expansion[2] 466×22 (native px). Margins, hierarchy ratio (23.0 vs 11.0 @360 = 2.09), and pitch clearance stand as filed. **HIT list remains EMPTY (0 HITs).**
