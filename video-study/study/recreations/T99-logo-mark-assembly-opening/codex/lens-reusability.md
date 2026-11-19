CONFIG covers and applies the main production controls: piece colors, scatter poses, scales, mark geometry, wordmark styling, palette, easing, and phase durations. Mark and text share the 360-unit coordinate system through `displayScale`. The requested text/color/1800 ms assembly swap preserves the technique.

Two defects limit reuse:

- **Long-wordmark fitting is incomplete.** The overflow correction shrinks font size but leaves letter-spacing unchanged and never remeasures. A sufficiently long string can still overflow; clipping remains possible despite the comment’s guarantee. Scale spacing together with the font and verify the resulting width.
- **Timing normalization breaks the advertised boundary guarantee.** With `assembleMs: 500` and `staggerMs: 350`, `pieceDur` becomes 1 ms, so the last piece finishes at 701 ms. Wordmark progress still starts from 500 ms, causing it to appear partway through its resolve. `cycleMs` also uses raw durations, allowing zero or negative cycles. Validate CONFIG or derive assembly completion, resolve start, and cycle length from one normalized schedule.

The default `html,body` background also remains a palette literal (`#111`) outside CONFIG.

Next attempt should cure these three issues and verify an extreme-length wordmark plus assembly durations below the stagger span.

File writing was unavailable because the execution tool failed to start; this assessment was performed against the supplied source.

SCORE: 80
BODY-WRITE: none (read-only run)
