Reusability score: **68/100**. The core single-quote swap works, but production cannot reliably drive arbitrary quote sequences from CONFIG alone.

- **−12: Quote-array timing depends on playback history.** `quoteSpan()` assumes three lines for uncached quotes. Direct seeking past an unvisited quote can select the wrong card; building that card changes subsequent timing. Cure: pre-wrap every quote and compute all start times before playback. Verify direct seeks against sequential playback with quotes of different lengths.
- **−6: Duration can truncate configured content.** `durationMs` is independent of the quotes’ combined spans. Additional quotes or longer timing values can leave the final card unrevealed at the endpoint. Cure: derive duration from the sequence or reject insufficient duration explicitly.
- **−5: Content fitting has a limited operating range.** The vertical budget considers quote lines alone, excluding glyph, attribution, gaps and padding. Long content can overflow at the font floor; viewport resizing does not trigger remeasurement. Cure: fit the complete card, report content that cannot fit, and rebuild measurements on resize.
- **−4: Palette swaps are not reliably preserved or corrected.** Contrast failures substitute hidden specimen colors, which may still fail against a swapped light card. Cure: expose fallback policy in CONFIG and verify contrast after correction against the actual background.
- **−3: Configuration coverage is incomplete.** `pageBg` is assigned on the stage, so its ancestor body cannot inherit it. Entrance distance (`14`), vertical budget (`0.52`), shadow and occasion styling remain literals. Cure: apply page variables at the root and expose production-relevant styling and motion controls.
- **−2: Swap evidence covers one quote only.** The reported harness supports text, attribution, cadence, hold and accent substitution, but does not establish array handling, seek invariance or browser layout. Cure: add multi-quote boundary tests, empty-array validation and a browser swap check.

The strongest reusable features are measured wrapping, atomic card replacement, structured attribution and a URL-based configuration override. The principal cure is a fully precomputed timeline independent of navigation history.

BODY-WRITE: No file written; the execution tool failed to start. This return is intended for `codex/lens-reusability.md`.
SCORE: 68
