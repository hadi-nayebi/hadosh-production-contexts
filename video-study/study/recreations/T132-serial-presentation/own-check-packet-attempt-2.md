# own-check packet — T132 serial presentation · attempt 2 (neutral)

Source SHA-256: f2c89c1b8fbd7dc7e1ee65e346dd587216dc21a2d6e138f7ba213988c13b685e
Verification basis: source/logic level (node harness over the file's own inline script). PIXEL-UNVERIFIED: no browser binary in this seat; the comparison page is the render surface.

## Schedule reconciliation (against the measured onset table, segment rows 8–64, onset − 3.00 s)
- 56/56 word rows equal (text, derived onset, dwell) — machine diff, 0 mismatches.
- One measured non-word beat of 160 ms is accounted as a typed transition phase at 13120–13280 ms; during it the plate displays and the word slot is empty by type.
- Measured minimum word dwell in the segment: 120 ms. No 80 ms dwell exists in the segment rows.
- Word time 13880 ms + transition 160 ms = cycle 14040 ms; every millisecond is owned by a named phase; the final word's full 120 ms dwell plays inside the cycle.

## Checks (all passing)
- Timeline contiguity: derived onsets are cumulative; no gaps, no overlaps.
- Index mapping: entry 0 = 'Limits.' (1160 ms), entry 50 = 'You', entry 51 = transition, entry 52 = 'can'.
- Scale mapping: a global dwell scale of 1.5 scales every dwell including the transition (cycle 14040 -> 21060); at 2.0 the cycle is 28080.
- Plate continuity: the landscape is generated as a repeating tile whose closing height is generated from its opening height; pan offset is computed from total elapsed time (never reduced by the cycle), is continuous across the 14040 ms cycle boundary (-12.70 -> -12.74 across the boundary sample), and wraps at the tile period with identical plate state. The sun element is outside the panning group and invariant.
- Contrast: word colour #b91f16 against sky #a9c6d4 computes to 3.58:1 from the two configuration values; the numeral colour carries the same value.
- Fit: every word's modelled ink fits the 360 px stage at its fitted size (fit-table, HITs 0); the longest word 'yourself.' is 190.4 px at full size. Fit is recomputed from the live stage width on every frame, so container resizes re-fit.
- Impossible fit: a word whose ink at the minimum size exceeds the stage width is rejected atomically (timeline unchanged, rejection recorded in an observable record) — asserted for a 72-character word and for a narrowed 80 px canvas; also asserted under a changed canvas aspect (400x400 accepted, words fit; 80 px width rejected).
- Validation: zero/negative/NaN/Infinity/oversized (1e999) and wrong-type values in dwell, scale, pan rate, tile period, font sizes, anchor fraction, and tile points are each rejected atomically with the rejection recorded; an explicit cycle length unequal to the derived total is rejected whether shorter or longer; an empty word list is rejected.
- Mode contracts: each mode declares its required keys; activating a mode with a required key absent is rejected atomically with the missing keys recorded.
- Swap test: a 3-word table carrying words + dwells only (no onsets supplied) regenerates its timeline from configuration alone (onsets 0/360/720 at scale 1.5, cycle 1800); palette-only changes leave the timeline identical; a tile-geometry change changes the generated plate path.
- Configuration consumption: every configuration key has a mutation-based effect mapping (config-census, HITs 0); the former separate wrap key is absent from the source.
- Purity: no external assets, no specimen media, no embedded frames; determinism (no random or wall-clock calls in the schedule path); syntax check passes.
- Self-start: the piece registers its own animation loop at load and reaches its scheduled ending (14040 ms) and loops under its own startup path; the seek hook parses and re-bases both the word phase and the pan offset from the same elapsed basis.
