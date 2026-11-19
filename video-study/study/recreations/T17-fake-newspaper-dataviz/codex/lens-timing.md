Timing/tempo score: **68/100**. The six windows sum correctly to 22.5s, but their fidelity to the specimen remains unverified: these are labeled allocations, not measured reference checkpoints.

- **FIG.20:** The fixed dash length of 520 exceeds the approximately 190px path. Visible drawing starts around **1.63s**, finishes at **2.57s**, then holds for **1.03s**. That creates an unintended opening pause.
- **FIG.21:** Dots fill every **0.20s**, finishing at **6.60s**. Summary typing runs from **5.36–7.31s**, leaving only **0.20s** to read the completed joke.
- **FIG.22:** Bars and donut finish at **9.90s**; the stack reaches ten at **10.38s**, with **0.72s** to register the completed figure. This is the strongest completion-and-hold rhythm.
- **FIG.23:** Nodes arrive every **0.54s**, but the badge appears at **14.27s**, leaving only **0.43s** for its punchline.
- **FIG.24:** The cliff begins correctly at **17.42s**. However, the counter reaches the displayed “1” only within roughly **6ms** of replacement—ordinary playback can miss it entirely. The counter’s rapid fall and graph’s accelerating descent also use opposing easing, weakening their shared impact.
- **FIG.25:** The stamp completes its **0.30s** slam at **20.60s**, giving it a useful hold. The second note needs until **22.58s** to finish fading, beyond the scene. At **22.5s**, every figure disappears, removing the final reading hold.

Next attempt must use actual path length, finish typing and badge reveals earlier, synchronize counter and graph through one collapse function, guarantee a visible hold on “1,” and complete both notes before holding the final composition.

BODY-WRITE: Record explicit completion-and-hold checkpoints as timing gates in build-record.md and scores.md; labeled phase allocations alone cannot establish reference fidelity. Filesystem writes were unavailable because the execution tool failed to start.

SCORE: 68
