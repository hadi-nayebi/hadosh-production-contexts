**Reusability/parameterization: 80/100.**

The core machinery is reusable: one shared mark primitive preserves cut alignment, anchor geometry drives the page transform, and the recorded swap changes position, dimensions, text, colour, and push duration together. Schedule semantics are explicit: changing `pushMs` changes the preceding hold while keeping the cut fixed; wordmark arrival remains independent.

Deductions:

- **−6 — Validation accepts configurations that break layout.** `wordmarkGap` can push the wordmark below the stage; label size, glyph extent, and page dimensions lack combined fit guards. Default/swap checks establish those cases only.
- **−5 — Accepted palette values can break rendering.** Validation permits three-digit hex colours, but `mixHex()` assumes six digits. Setting `palette.search` to `"#fc0"` passes validation and produces invalid colour arithmetic.
- **−4 — Timing combinations can silently truncate the mechanism.** `wordmarkMs` can exceed the remaining post-cut interval, preventing arrival before reset. A long push can suppress the outline entirely without rejection or warning.
- **−3 — Consumption evidence overstates assurance.** Some mutations count as “consumed” because validation rejects them. That demonstrates a guard, not successful parameter-driven rendering.
- **−2 — Scene substitution remains narrow.** CONFIG supports variations of the existing webpage/logo composition; substantially different scene structures require code changes.

Next attempt should validate complete text/glyph bounds and timing dependencies, normalize accepted colours, and distinguish successful swaps from rejected mutations.

BODY-WRITE: none (read-only run)
SCORE: 80