Reusability is substantial but incomplete. The card array, content, palette, hero data, weights, gradient endpoint, and formula styling are configurable. The derived timeline supports moving subsequent cards without editing absolute checkpoints. However, the source contradicts the build record’s claim that every geometry key affects construction.

- **High — three geometry keys have no effect.** `chipOffsetY`, `legendRight`, and `legendTop` are assigned CSS variables but never consumed. The legend instead uses `padX` and `heroTop`. Binding a variable through `setProperty()` does not establish an effect mapping. Remove these keys or connect them to their intended properties, then verify that changing each changes its target.

- **High — formation accounting does not scale with segment count.** `formedMs` considers only the takeaway’s completion. Pie labels finish at `labelsMs + (segmentCount − 1) × labelStaggerMs + fadeMs`; headline, chip, and hero completion are also omitted. Extra segments or changed entrance durations can therefore pass validation while formation extends into the next chapter. Compute formation from the latest completion of every constructed element and validate every card, including the last.

- **Medium — invalid data is reported without preventing invalid construction.** Empty and zero-total pies correctly produce no SVG paths. However, zero-valued segments still generate labels containing `NaN%` when the total is zero. Negative segments produce errors but still reach construction. Reject invalid configurations before building, or render a configured empty state that also suppresses invalid labels.

- **Medium — timing remains partly coordinated by hand.** Absolute checkpoints derive correctly, but resizing or adding cards requires updating both card durations and `totalDurationMs`. Validation detects disagreement; it does not remove the duplicate authority. Derive playback duration from the timeline, or explicitly configure a fixed-budget allocation policy. Validate finite positive durations, required offset names, and nonnegative starts rather than relying on object insertion order.

- **Medium — swap evidence is useful but incomplete.** The reported duration-shift, generated-percentage, text-override, and full-pie checks establish specific effects. The binding census does not: the three unused variables demonstrate its limitation. No supplied evidence establishes extra-card construction, reordered-card behavior, or individual geometry/style changes reaching their intended rendered properties.

These defects concern CONFIG-driven reuse and its verification. Motion fidelity, source timing match, purity, and legibility are excluded from this score.

SCORE: 72
BODY-WRITE: This return supplies the verbatim content for codex/attempt-2/lens-reusability.md and the scores.md reusability entry: 72/100, with the findings and cures above; filesystem filing was not performed in this run.
