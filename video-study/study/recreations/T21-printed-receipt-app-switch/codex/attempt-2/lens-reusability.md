Production can swap content, colors, and timing through CONFIG, but layout and overflow handling still require source edits.

- **No wholly unused CONFIG keys found.** All palette keys—including shadows—reach styles; both tab labels reach elements; receipt length controls affect tiers or overflow calculations. However, several geometry keys control the model without controlling the rendered geometry.
- **Receipt geometry is incompletely parameterized.** `receiptHeaderHPx`, `receiptLineHPx`, and `modelCharsPerLine` determine feed length and row exposure, while CSS independently determines actual header height, line height, and wrapping. Changing these keys can desynchronize exposure from the paper.
- **Receipt caps are diagnostic only.** `receiptMaxHPct`, `receiptGrowCapHPct`, and `modelColumnHPx` calculate `windowCapPx`, but render never applies that cap. The wrapper grows to `fedPx` regardless. Many rows can overlap later content or disappear beyond the stage; `receiptOverflow` reports model overflow without implementing a containment policy.
- **Shaping constants remain outside CONFIG.** Typography, widths, heights, padding, breakpoint, shadow geometry, and opacity endpoints remain literals. Travel and reply-scale endpoints are configurable. The bridge never dims the phone as claimed: opacity reads only `phoneProgress`.
- **URL coverage meets the requested minimum.** Texts, receipt lines, timing, and palette values are supported. Duration-only overrides scale checkpoints and subordinate durations together; changing `phoneAt` recomputes typing’s start and window. Individual checkpoint overrides are validated sequentially, so a valid combined replacement can suffer partial rejection.
- **Extreme swaps are partly priced.** Long replies receive a size tier and eventual overflow flag, but no height-aware fitting or scrolling; `#chatArea` hides overflow. Long prompts and headers have no capacity policy. A 1000 ms duration preserves phase ordering; shorter URL durations are explicitly rejected. Direct CONFIG edits lack equivalent validation enforcement.

The source-bound checks support the intended mappings, but do not establish that modeled receipt geometry matches browser layout.

BODY-WRITE: Make receipt geometry and capacity controls govern actual layout, expose typography and opacity shaping through CONFIG, and validate complete configurations atomically with explicit handling for oversized prompts, headers, and replies.
SCORE: 74
