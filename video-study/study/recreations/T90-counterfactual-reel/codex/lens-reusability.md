Reusability score: **76/100**. CONFIG supports substantial reuse, but the override surface and relationship validation remain incomplete.

- **Strong parameterization:** shelf icons, beat count/content/timing, per-beat `frac/dx/dy/completeMs`, branch control points, palette, typography, and context switches are configurable. Explicit per-beat placement avoids dependence on three-element fallback arrays.
- **Missing geometry overrides:** `applyOverride()` ignores HUD placement, projection bounds, shelf coordinates, clock gap, table geometry, and figure positions/heights. These exist in CONFIG but cannot be changed through `?cfg=`.
- **Incomplete relationship validation:** reducing `totalMs` can leave inherited beats, `introMs`, or `reelEndMs` outside the cycle. `endHoldMs` is accepted but unused; nothing enforces `totalMs = reelEndMs + endHoldMs`. Beat ordering and fallback completion relationships are unchecked.
- **Inconsistent numeric validation:** `isPx()` rejects valid default branch/shelf widths of 3 and prevents line widths above 120 despite the default being 140. Stage dimensions and coordinate limits also lack a consistent relationship.
- **Ownership boundary:** fixed glyph internals and figure proportions are explicitly declared library/builder-owned; they are not deductions. Geometry, intensity, and subject placement otherwise read from CONFIG.

Next attempt must expose every production-facing geometry field, validate the complete merged configuration atomically, enforce or derive timing relationships, and use field-appropriate numeric ranges. Verify this with changed stage dimensions and a five-beat specimen using distinct positions and completion times.

BODY-WRITE: Filing `codex/lens-reusability.md` was blocked because the execution tool could not start (`codex-code-mode-host` missing). This response contains the review; no file was written.
SCORE: 76
