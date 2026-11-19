File access failed because the execution tool could not start. The following review uses the supplied source and build record; it was **not filed** to `codex/lens-reusability.md`.

CONFIG drives content, count, palette, primary box dimensions, and the phase schedule. The recorded five-line / count-24 / cardW-236 swap demonstrates a useful reuse path, but general production reuse remains incomplete.

Priced deductions:

- **−12: Validation does not guard execution.** `checkpointsOk()` is exposed but never called before `build()` or playback. Overrides accept negative dimensions, zero animation durations, fractional or negative counts, and schedules exceeding `durationMs`. The checker itself omits positivity, finite derived values, padding capacity, and text-fit checks.
- **−10: Typography does not guarantee fit.** Title sizing ignores title length; line sizing ignores text width. Both use nowrap/hidden overflow. Increasing line count eventually produces zero or negative `lineH`, while font size remains at least 11px. The recorded swap uses short strings and proves only that configuration.
- **−6: Geometry still contains hidden constants.** Rule height `2px`, stage-height addition `48`, count horizontal padding `2px`, title reservation `30`, and typography thresholds remain outside CONFIG. Changing `rowTopPx` can clip the composition because stage height does not derive from it. Thus the “sized only from CONFIG.layout” claim is incomplete.
- **−4: Phase controls lack boundary semantics.** Zero durations can produce `NaN` opacity at transition boundaries; negative timings can invert phases. No enforced rejection or normalization protects playback.

Next attempt should enforce configuration validation before construction, derive all geometry from declared parameters, measure or deterministically constrain text fit, and verify empty, dense, long-text, narrow-layout, and zero-duration cases.

**Tier implication:** this lens is below the 70 floor, so this attempt cannot qualify as RECREATED-tier under the stated rule. Visual claims remain PIXEL-UNVERIFIED.

BODY-WRITE: None; tool failure prevented filing `codex/lens-reusability.md`.

SCORE: 68
