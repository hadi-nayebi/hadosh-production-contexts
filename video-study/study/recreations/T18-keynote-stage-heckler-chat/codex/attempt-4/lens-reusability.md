Reusability is strong at CONFIG level: title records, highlight targets, stats, counter, messages, pop behavior, framing, palette, stage geometry, audience count, and typography drive construction. Variable-length tables use data-driven loops. The packet reports useful cardinality, rejection, escaping, and atomic-override tests.

Residual defects limit reliable production swaps:

- **Broken `titleMs` override:** it updates `tMs` while retaining `revealStartMs`. Validation requires equality, so changed checkpoints reject instead of moving the reveals.
- **Incomplete title-color overrides:** `?title=` leaves the specimen’s explicit per-line `retainColor` values unchanged. Conversely, replacement `?lines=` records cannot specify retained colors, so they lose the specimen’s white/yellow distinction.
- **Multiword hold inconsistency:** `wordOnsets()` delays only the second word’s onset, but delays every later word’s completion. For three or more words with a positive hold, later onsets can overlap the delayed preceding word. The reported checkpoint tests do not establish this case.
- **Fit validation diverges from construction:** stat height uses the maximum of label/value heights although they render stacked. Title/chat horizontal separation is not enforced for changed layouts. Title word-overflow checks omit the advertised upper error factor and letter spacing.
- **Typography validation is incomplete:** `titleLetterSpacing` accepts arbitrary nonempty strings, while measurement interprets its numeric prefix as em units. Accepted values such as `2px` therefore produce different measured and rendered spacing.

The reported 72 checks support substantial reuse, but do not close these source-visible gaps. This lens passes the 70 floor; consolidation still depends on the other four scores.

BODY-WRITE: Carry forward regression tests and fixes for titleMs synchronization, retained-color URL records, three-plus-word holds, and fit/typography measurement that matches rendered construction before treating swaps as fully validated.
SCORE: 82