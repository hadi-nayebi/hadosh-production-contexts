Motion fidelity: **82/100**.

The source preserves the core technique: each step replaces the previous headline, numbered tiles enter cumulatively, and existing tiles remain until the cycle resets. Deferring the screen inserts and prompt bar leaves these mechanics intact.

Each tile enters over `tileEnterMs = 600` with an ease-out cubic fade, scale from 0.94 to 1, and upward settlement from 10 px. At 300 ms, entrance progress is 87.5%; at 600 ms, it is complete. Headline replacement is exclusive, although the incoming headline begins at zero opacity, leaving no visible headline at the exact replacement boundary.

The main movement defect is the accumulating row’s layout jump. Tile 01 initially occupies the centre. When tile 02 changes from `display:none` to `block`, flex layout immediately shifts tile 01 left by **85 px**. Only tile 02 receives an entrance animation; tile 01 snaps to its new position. Accumulation holds logically, but its spatial continuity breaks.

The shared headline/tile anchor also removes the observed stagger: headline 1 precedes tile 01, and tile 02 joins before headline 2 replaces headline 1. Following the binding Plan explains this choice but does not reproduce that movement sequence. The exact timing discrepancy belongs primarily to the timing lens.

Next attempt must cure:

- Animate tile 01’s repositioning when tile 02 joins, or establish evidence-backed fixed slots that avoid the snap.
- Separate headline and tile anchors to preserve the observed stagger, after the binding Plan is amended.
- Verify the entrance easing and replacement boundaries in rendered playback. Source inspection establishes the programmed behavior; the supplied observations do not establish matching source easing.

BODY-WRITE: none (read-only run). Tool execution failed before filesystem access; the consumer must persist this return verbatim at `codex/lens-motion.md`.

SCORE: 82
