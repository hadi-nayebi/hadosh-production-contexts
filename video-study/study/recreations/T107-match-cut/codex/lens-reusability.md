**Score: 78/100 — reusable within the supplied scene templates, with configuration hazards still exposed.**

- **Strong shared geometry.** Both scenes use one mark constructor and derive their cut position from CONFIG. Moving or resizing the anchor preserves cut alignment algebraically. The recorded swap proves an x-position change, label replacement, accent replacement, and push-duration change; it does not demonstrate resizing, y-position changes, longer words, or replacement scenes.
- **Clear timing semantics.** Increasing `pushMs` consumes hold-A while leaving the cut fixed; changing `settleMs` moves the cut while preserving settle-end. These are useful, documented semantics. However, zero/negative durations, invalid scales, and fade overlap have no comprehensive validation.
- **Outline safety has a surviving defect.** `outlineOpacityAt()` checks its draw interval before its capped off-time. With `pushMs: 4200`, push starts at 6100 ms, but the outline continues drawing until 6100 ms despite a calculated off-time of 5600 ms. Larger values let it survive into the push.
- **Moved anchors expose layout coupling.** The wordmark remains centred on the stage while the mark follows the anchor. Resizing or moving the anchor can also clip the settled mark or wordmark; no bounds or text-fit guard detects this.
- **Scene substitution remains limited.** CONFIG changes text, palette, and webpage geometry, but replacing the webpage/logo scene structures or the triangle primitive requires code edits.

Next attempt should enforce timing domains, apply outline cutoff before drawing logic, define anchor-relative wordmark placement, and demonstrate a resized/repositioned anchor plus longer text with rendered fit checks. Browser-level swap evidence remains absent.

BODY-WRITE: none (read-only run)
SCORE: 78
