The recreation preserves the broad sequence: complete-card entrance, static hold, exit, empty gap, then a second complete-card entrance and hold. Default unit mode avoids an unsupported per-line reveal.

Three motion differences limit fidelity:

- The panel receives opacity `vis`, while its text, glyph, and attribution also receive `vis`. Their effective opacity becomes `vis²`, making the contents emerge more slowly than the panel rather than fading uniformly as one unit.
- The first card exits through an opacity fade at constant scale, missing the observed exit with the scene’s zoom-out.
- The second card enters at the center using the same small scale-up as the first; it does not reproduce the observed lower-left entrance.

The static holds match well. The added entrance scale is not established by the supplied frame evidence.

SCORE: 74
BODY-WRITE: Apply unit opacity only to the parent card, reproduce the first card’s scene-linked zoom-out exit, and give the second card its evidenced lower-left entrance.