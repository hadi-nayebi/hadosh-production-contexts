Reusability lens only. **82/100.**

Hash binding: this review addresses the supplied recreation.html identified as SHA-256 `a8c80b2a674e476c06789e0cd5046629a126be38f6ce8e34c71aa2d78b925fab`. Independent hash confirmation and filing were unavailable because the execution tool failed to start.

Production can drive a useful range of variants through CONFIG alone. The URL override supports nested changes; palette, pencil geometry, checkbox geometry, tick path, burst count, entry corner and timing have active consumers. The recorded swap demonstrates three changes together while preserving the fixed cycle and clean hold.

Priced deductions:

- **−8: coupled geometry remains manual.** Changing `tick.path` requires separately matching `geom.pencilTipX/Y` to its start to preserve ENTER→DRAW continuity. Moving the checkbox also requires coordinating the absolute tick coordinates. CONFIG permits this, but does not guard it.
- **−4: swap coverage is narrow.** The recorded swap proves field color, burst count and draw duration. It does not demonstrate a different path, entry corner, pencil shape or checkbox layout—the controls most likely to expose reuse defects.
- **−3: stage geometry is partly fixed outside CONFIG.** The SVG viewBox and background rectangle remain 360×360. Changing stage width or height can produce letterboxing rather than a consistently resized composition.
- **−3: timing controls lack a safe contract.** `endHoldMs` is inert, and no validation rejects phase totals exceeding `cycleMs`, which can truncate phases and remove the hold.

Next-attempt cures: derive the entry landing point from the tick path; anchor tick geometry to the checkbox; derive the viewBox from CONFIG; remove the unused hold setting or validate it; reject invalid timing totals. Record a combined geometry-and-entry swap with continuity checks.

SCORE: 82
BODY-WRITE: No file written; execution tool unavailable. Return supplied here for filing verbatim at hidden_files/study/recreations/T100-pencil-check-task-sting/codex/lens-reusability.md.
