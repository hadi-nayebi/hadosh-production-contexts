Reusability score: **86/100**. The machinery supports a different typographic exhibit, eyebrow, main words, palette, and schedule through CONFIG alone. This lens clears the threshold; the overall tier still depends on all five lenses.

- **CONFIG coverage:** Content, colors, dimensions, placement, tracking, fades, and timing have application sites. Fixed bold weights, alignment, and line-height behavior remain outside CONFIG, so the claim that *every* shaping literal is bound is overstated.
- **Timing:** `cycleMs()` derives the loop from word count, word interval, and hold duration. Word reveals use the same CONFIG values; there is no second timing authority.
- **Swap evidence:** The recorded swap changes wording, accent, and word interval, with consistent onset and cycle calculations. It demonstrates a modest substitution, but does not test a different exhibit, eyebrow, word count, or stage size.
- **Production limits:** Text-fit checks use approximate advances rather than browser measurements and do not enforce fit. Longer content can wrap or clip. Overrides silently swallow parsing failures and accept invalid timing relationships, empty word arrays, and unsupported color formats. These cases currently require manual inspection or code changes.

Next attempt must cure:

1. Put font weights and explicit line-height controls in CONFIG.
2. Validate overrides and report invalid content, timing, dimensions, and palette values.
3. Measure rendered text bounds, including wrapping and vertical overflow.
4. Record a browser swap covering exhibit text, eyebrow, three or more main words, palette, stage geometry, and timings; verify fit and loop boundaries.

Assessment uses the supplied bound source and build record. Independent execution and file writing were unavailable because the execution tool failed to start.

BODY-WRITE: none (read-only run). Consumer persists this return verbatim at `codex/lens-reusability.md`.
SCORE: 86
