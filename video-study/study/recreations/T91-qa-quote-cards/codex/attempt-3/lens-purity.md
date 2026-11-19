Verdict: Attempt 3 beats 82.4 and passes the construction-purity lens.

Findings: no findings.

- Content and palette originate in `CONFIG.hud`, `cards`, `labels`, and `palette`; DOM setters consume those values.
- Timing originates in `CONFIG.enterMs`, `schedule`, and card timing fields. `resolveSchedule`, `revealTimes`, and `stateAt` derive the playback without additional subject-specific timing literals.
- Fonts and geometry originate in `CONFIG.type`, `fit`, `stage`, and `geom`. Rendering, fitting, and resizing consume those groups.
- Remaining constants define structural identities, indexing, unit conversions, validation bounds, or diagnostic formatting. No specimen media, traced assets, or external resource references appear in the supplied source.

Limits: Reviewed the complete supplied source; did not independently verify its SHA, execute the own-check packet, or inspect browser output. No separate numerical passing threshold was supplied.

Body-write: none (read-only run)
SCORE: 100