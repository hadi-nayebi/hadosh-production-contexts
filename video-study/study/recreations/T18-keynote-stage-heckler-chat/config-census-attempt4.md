# T18 — config census · attempt 4

Source: recreation.html sha256 7ae1ef9936c59246477eb4ad23c8e4abb066e64635ad80c459e9f2675dea9968 (frozen for the scoring wave). Census against this build's own CONFIG.

## Literal scan (outside the CONFIG block; comments, string literals and regex literals stripped; identifier-aware)

- Script numeric literals by value: {"0":108,"1":51,"2":14,"3":9,"4":4,"5":6,"6":3,"50":8,"100":38,"255":3,"-1":3} — every value classified structural: 0/1 indices and identities · 2 pair counts · 3 field positions and print precision · 4/5/6 record-field indices · 50 stage-centre percent · 100 percent whole · 255 RGB channel maximum · -1 pre-first-cut sentinel · -50 translateX centring identity (half of own width, speaker/spot).
- Script colour literals: none.
- Style numeric literals by value: {"0":11,"1":1,"100%":4,"50%":8,"-1":1} — classified structural: 0 offsets/resets · 100% full extent · 50% circle radius / centre · 1 square aspect · -1 highlight-bar layering.
- Style colour literals: none (all style colour arrives through CONFIG-driven custom properties).
- Content-carrying literals outside CONFIG: none — configured wording occurs only inside the CONFIG block (suite-asserted).

## Key resolution

- CONFIG leaves total: 300 (incl. 76 glyph-table entries, consumed by lookup in the width function — effect-asserted in the own-check suite).
- Leaves resolved to at least one application site: 300 / 300 (glyph-table entries resolve by lookup in the width function; every other leaf resolves by name to a code site).
- CSS custom properties: 41 set from CONFIG, 41 used in the style block; set-but-unused: none; used-but-unset: none.

## HIT list (0)

- none
