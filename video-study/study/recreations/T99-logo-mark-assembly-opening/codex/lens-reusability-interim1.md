**Reusability / parameterization: 74/100**

- **Earns credit:** CONFIG drives wordmark content and typography, piece colors and entry poses, background/ink, mark size/blend, stage width, and phase durations. Those keys have real application sites.
- **Earns credit:** The requested swaps—different text, first-piece color, assemble duration 1800 ms—follow direct code paths. Assembly still completes before wordmark resolve; the cycle correctly becomes 13200 ms.
- **Costs points:** Significant shaping decisions remain outside CONFIG: triangle spacing `0.45`, raised-piece index `1`, raise `0.10`, baseline `0.52`, wordmark gap `0.07`, reveal travel `0.3`, and cubic easing. These are design choices, not mathematical identities. Production cannot change them through CONFIG.
- **Costs points:** `stage.width` scales the SVG while wordmark font size and top position remain fixed CSS pixels. Changing width therefore changes the relationship between mark and wordmark.
- **Costs points:** Timing lacks validity checks. When `assembleMs ≤ (pieces.length−1)×staggerMs`, piece duration becomes zero or negative, breaking the claimed completion guarantee. Zero resolve duration also produces an undefined boundary value.
- **Costs points:** Arbitrary wordmark substitutions have no fitting policy; longer text can be clipped by the stage’s hidden overflow.

**Next attempt:** Put layout ratios, raised-piece selection, reveal travel, and easing in CONFIG; use one coordinate scaling system for mark and text; validate timing constraints; and add configurable wordmark fitting. Verify geometry, width, long-text, and invalid-timing swaps alongside the three required swaps.

Filesystem tooling failed before inspection or writing; this assessment uses the supplied source only.

SCORE: 74  
BODY-WRITE: none (read-only run)
