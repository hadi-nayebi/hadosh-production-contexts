# Config census — T23 attempt 12 (A-C008, against attempt 12's own CONFIG)

Final source sha256: 3e3c084d78a206c7eba36586769b40ee3d48f1b247bd2559221a8fa39561870b
Method: every scalar CONFIG leaf (panels/artRegistry/palette data excluded, as in the prior attempt's census method) counted for consumption in the source (key referenced at least twice: definition + consumer). The full 181-leaf walk (data groups included) is asserted in the final own-check suite: 181/181 consumed.

LEAVES=117
CONSUMED=117
UNCONSUMED=[]

New attempt-12 keys verified consumed individually in the own-check corpus: caps.approachMs/diveMs/holdZoomMs/loopPauseMs, layout.approachEntryProgress, layout.phoneTabPadYPx, limits.maxGapPx/maxBorderPx/minNarrowBreakpointPx/maxNarrowBreakpointPx, progress.targetMarkStripPx (now in the generated baseline), labels.chromePhonePx (derived from the tab padding tokens).
