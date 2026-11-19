Source-only reusability score: **70/100**. The recorded swap is supported by the code, but broader CONFIG-only reuse remains fragile. **PIXEL-UNVERIFIED**; no runtime tests performed.

Priced findings:

- **−11 — Incomplete validation.** Negative gaps, padding, offsets, and first-line delays can pass. Typography bounds and geometry relationships go unchecked. Invalid configurations can reach build despite the “full validation” claim.
- **−10 — Text fit is not guaranteed.** `fitFont()` stops at `fitMinPx` even when text still exceeds available width; titles and lines then clip. Opposition labels have no height-fit check. Vertical capacity uses an 8 px floor without checking the actual font height.
- **−5 — Hidden construction constants remain.** Line-height bounds `8/26`, title divisor `15`, label divisor `5`, font family, and weights sit outside CONFIG. `textWidth()` also reads global CONFIG instead of its caller’s configuration.
- **−4 — Phase validation misses count completion.** `holdMs: 0` passes with a positive count delay, allowing the exit fade to begin when the count entrance starts.

Credit: content, cardinality, primary box dimensions, palette, and timing are configurable. Five lines / count 24 / cardW 236 follows the source’s derivation without specimen-specific edits. No unused CONFIG keys identified.

Next attempt: validate all configuration domains and cross-field constraints; reject or accommodate text that cannot fit; expose remaining construction constants; require count entrance completion before the hold ends.

**BODY-WRITE:** None. Filing `codex/lens-reusability.md` was blocked because the execution tool failed to start (`codex-code-mode-host` missing). This return is therefore incomplete as a filing task.

SCORE: 70
