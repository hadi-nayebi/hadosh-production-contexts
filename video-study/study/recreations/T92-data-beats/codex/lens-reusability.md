The tool host failed to start, so I could not verify the local SHA-256, run override tests, or write `codex/lens-reusability.md`. This return assesses the supplied source; the consumer must persist it verbatim.

**Reusability: 80/100.** The configuration supports substantial reuse: card/chart beat variants, per-beat timing, claims, sources, typography, palette, geometry, and chart series are exposed. Fraction values authoritatively derive countable units, and percentage magnitude drives hanging-bar height. Deep object merge and per-index array merge support focused overrides.

The remaining limits affect production reuse:

1. **Validation reports problems but does not enforce them.** `PROBLEMS` never stops rendering. Malformed structures can throw before useful diagnostics; negative timings, invalid unit counts, nonfinite geometry, and malformed bar data lack checks. Invalid JSON silently restores the default piece.
2. **Arrays cannot shrink through the override surface.** Overriding two beats with one preserves the second; shortening bars or scene blocks preserves trailing entries. Add explicit replacement semantics alongside indexed patches.
3. **Chart semantics remain narrow.** `Math.abs()` renders positive percentages downward too. Bar heights are pixel inputs rather than values mapped through a shared scale. Percent parsing accepts embedded strings and unsigned values despite the validator’s “signed percent” wording.
4. **Series length exceeds the animation’s assumptions.** Bar staggering uses fixed progress offsets; sufficiently long series remain partially drawn at settled progress. With five question steps, the fifth receives a reversed progress interval and stays invisible at `p = 1`. Normalize staggering to configured element counts.
5. **Content and layout remain manually coupled.** Longer claims, larger denominators, additional bars, and larger percentages can overlap or clip. CONFIG exposes dimensions, but provides no fit checks or supported bounds. The HUD also uses one global evidence year even when beat years differ.

**Next-attempt cures:** enforce validation before construction; add array replacement; define percentage direction and value-scaled series; normalize animation for arbitrary supported counts; add layout bounds checks; derive the evidence HUD year per beat.

Production can already swap content within the current two-form composition using CONFIG alone. Changing array lengths, supporting broader chart semantics, and handling varied content reliably still requires code changes.

BODY-WRITE: none (read-only run); consumer must persist this return verbatim at codex/lens-reusability.md.
SCORE: 80
