Motion fidelity is close, but phase leakage and the return path need correction.

The field, top card, and triangles share eased progress. Triangle size and position grow continuously from the centroid; the field interpolates to black. There is no whole-scene opacity crossfade, and countdown/outline visibility ends at morph start.

Three defects remain:

- **Collapse extends into settle.** At morph end, 7000 ms, cardMid is only 98.4% collapsed and cardLow 93.9%. They continue changing until 7120 and 7240 ms, violating the requirement that settle affect triangles alone.
- **Return does not reverse the staggered motion.** Both lower cards return using the same unstaggered progress. Their forward trajectories differ, so this does not retrace the forward transformation.
- **“Collapse-down” moves the centres upward.** Because height shrinks while the top moves only 10 px downward, cardMid’s centre rises 8 px and cardLow’s rises 5 px.

The top-card-to-triangle identity is also weaker than a continuous shape transformation: separate triangles grow over a rounding, darkening rectangle, which then yields through opacity. This satisfies the prescribed construction but only partly conveys preserved identity.

Next attempt: normalize staggered collapses to finish within the morph interval, reverse those exact trajectories, and calculate sinking from element centres.

Assessment is based on the supplied code; tool execution was unavailable, so the file hash and rendered movement were not independently verified.

BODY-WRITE: none (read-only run)
SCORE: 81
