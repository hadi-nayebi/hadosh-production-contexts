Reusability: **82/100**. CONFIG supports meaningful variations, but several settings need coordinated edits or have misleading behavior.

Hash binding: `4097261127138c7adc93de5fe632a25dc4d1ae7d0ef71b3e82f3db0e1f68ead4` identifies the supplied source. Independent hash confirmation and filing were unavailable because the execution tool failed to start.

Priced findings:

- **−7 — Tick-path swaps require manual entry alignment.** ENTER ends at `geom.pencilTipX/Y`, while DRAW starts at `tick.path`’s first point. Defaults already differ: `(205,181)` versus `(160,198)`. Changing the path can increase that jump. Derive the entry destination from `getPointAtLength(0)`.
- **−5 — Stage geometry is partly fixed outside CONFIG.** SVG viewBox and background dimensions remain hardcoded at 360×360. Changing stage width/height alters the viewport without consistently changing scene coordinates or field coverage. Derive these attributes from an explicit CONFIG coordinate system.
- **−3 — `endHoldMs` is inert.** Hold duration actually follows the cycle residual. Remove the unused setting or expose and validate a single timing contract.
- **−3 — Overrides lack constraint checks.** Active durations can exceed `cycleMs`, eliminating phases; invalid counts or timings are accepted. Validate positive durations, integer burst counts, and active-duration totals.

Positive evidence: the recorded swap changes field color, burst count, and draw duration through CONFIG alone while preserving the cycle and clean hold. Paths, palette, checkbox geometry, entry corner, easing, and burst geometry are also wired into construction. Evidence remains limited to the reported harness; geometry and path swaps were not demonstrated.

SCORE: 82
BODY-WRITE: No file written; execution-tool startup failure prevented filing codex/lens-reusability.md.
