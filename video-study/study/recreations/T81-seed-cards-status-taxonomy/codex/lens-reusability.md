Reusability is substantial: content, taxonomy, timing, palette, typography, and geometry are configurable. Cards bind to taxonomy names, membership is checked after overrides, and cycle duration derives from card count and configured timing. The reported swap test demonstrates changed claim, status, hold duration, and palette, with the cycle correctly recalculated to 9,200 ms.

Deductions and required cures:

- **Array overrides cannot shorten lists.** `deepMerge` preserves trailing defaults: supplying one card still leaves three cards; `cards: []` also retains all defaults. Taxonomy and scene-block arrays have the same limitation. Replace arrays wholesale, then demonstrate one-card and four-card configurations with correct cycles and no leftover content.
- **Validation diagnoses but does not guard execution.** `PROBLEMS` is exposed while rendering proceeds. Missing fields, malformed arrays, empty cards, and nonfinite timing lack adequate checks. Validate the complete overridden configuration and stop rendering with an actionable error when invalid.
- **Longer content has no fit contract.** Natural wrapping accommodates some variation, but card height is unbounded inside an overflow-hidden stage. Longer claims or sources can disappear below the stage; no browser evidence establishes safe limits. Define minimum type sizes and overflow behavior, then verify long claims, statuses, and sources in the actual browser.
- **Production scheduling remains constrained.** Every card receives the same duration and appears in a sequential loop. A different piece can change the global rhythm through CONFIG, but cannot schedule individual claim moments or durations. Add per-card timing or configurable cue times if production requires claim-synchronized firing.

The supplied swap evidence supports reuse within the current three-card pattern. Array replacement and content-fit guards are the main barriers to dependable reuse across different pieces.

SCORE: 78
BODY-WRITE: none (read-only run); consumer to persist this return verbatim at hidden_files/study/recreations/T81-seed-cards-status-taxonomy/codex/lens-reusability.md.
