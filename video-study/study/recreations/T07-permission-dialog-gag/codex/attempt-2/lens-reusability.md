**66/100 — useful CONFIG coverage, but not yet safe to lift through CONFIG alone.**

Count changes work on the intended path: requests and options are generated dynamically; shorter finals inherit the previous selection; shorter timing arrays repeat their last entry with recorded defaults; a fourth option receives its configured style. Pause/resume shifts the timeline origin correctly, preserving position and remaining dwell. Ready/state/complete signals, finite runs, and parent-source/origin/command checks are present.

The remaining gaps are material:

- **Technique values remain outside CONFIG:** marker glyph and numbering format; flash opacity `0.92`; tile border width and opacity pattern; padding floors and multipliers; expansion factor `1.2`; font cap offset `14`; and fallback content/timing. CSS fixes title weight and line heights. Changing CONFIG line heights affects the fit calculation without changing rendered line heights.
- **Validation is incomplete.** Direct CONFIG finals such as `"bad"` become `NaN` after rounding and produce no selected row. `arrivalFlashMs` accepts numeric strings without conversion, so `t + flash` can concatenate; flash duration is not constrained against landing or window boundaries. Negative timing values clamp silently. Layout, type, tiles, fallback selection colours, and several structural types lack validation.
- **Finite-run semantics need enforcement.** Zero, negative, and fractional run counts are accepted; zero still executes one cycle.
- **Long-text rejection is diagnostic only.** Rejected content still renders, generally with `nowrap`, allowing overflow. More options can exceed the available height; `fitsHeight` is calculated but never enforced.
- **The container contract is partial.** Source and origin checks are real, but schema validation checks only `cmd`, without a message namespace or payload schema. Completion is emitted after every cycle, leaving final completion ambiguous.

The reported own checks demonstrate useful supported cases, but do not establish exhaustive validation or CONFIG-only reuse. This assessment is source-based; I did not independently execute the supplied checks.

BODY-WRITE: The next attempt must move remaining technique constants into CONFIG, validate every configurable field and cross-field constraint with recorded outcomes, apply typography settings to rendered styles, enforce long-text/height rejection, and define namespaced commands plus explicit final-completion semantics; retain the existing count-extension and pause/resume machinery.
SCORE: 66