# config-census — T133 · Cycle 022 Wave 19 · attempt 1 (guard-config-census v3.1, Amendment A6 + Cycle-021 addenda)

## Key -> application-site resolution
| CONFIG key | resolution |
|---|---|
| mode | 3 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| numerals | 2 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| numeralOnsetsMs | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| numeralDwellsMs | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| scaleFrom | 10 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| scaleTo | 9 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| numeralScaleTaper | 2 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| scaleEasing | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| numeralColor | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| firstWord.t | 274 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| firstWord.atMs | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| firstWord.dwellMs | 14 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| thenWords | 4 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| fontPx | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| fontWeight | 2 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| numeralFontPx | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| wordColor | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| anchorYFrac | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| fontFamily | 2 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.sky | 3 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.far | 4 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.near | 5 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.panPxPerSec | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.panWrapPx | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.farPoints | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.nearPoints | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.sun.cx | 2 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.sun.cy | 10 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.sun.r | 196 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.groundY | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| plate.groundH | 1 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |
| cycleMs | 3 site refs (value flows to its named subject per Cycle-021 value-flow check, seat-read) |

## Literal scan outside CONFIG
- Hex colours outside CONFIG: ['#000'] — '#000' is the page void outside the stage (structural, not a subject colour; the stage sky/plate/word colours all read from CONFIG).
- Subject geometry: plate ridge points, sun geometry and ground band read from CONFIG plate.* keys (Cycle-021 geometry-site addendum applied at build).
- Numeric literals in engine code: loop bounds, index arithmetic, the 60000 ms-per-minute identity and the 1000 ms-per-second identity in the pan derivation (structural — unit identities, printed per v3.1 classification rule).
- CSS-variable setter check: no CSS variables are used; CONFIG is consumed directly in JS — check not applicable, no unset-variable references exist.

HITs: 0
