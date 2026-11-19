Readability is marginal at 360px, assessed from source rather than rendered pixels.

- **Typography during holds:** before framing, title = **18.72px**, chat body = **11.16px**, sender/time = **9.36px**, stat values = **14px**, stat labels = **9px**. Across framing scales, these become approximately **17.8–19.5px**, **10.6–11.6px**, **8.9–9.7px**, **13.3–14.6px**, and **8.6–9.4px** respectively. The title and stat values are readable; chat body is small, while metadata and stat labels are uncomfortable phone reading.
- **Separation:** the 179.7px title column and 124.4px chat column leave a nominal **24.2px gap**. Adequate horizontal separation, although the long first title line wraps and needs rendered inspection.
- **Contrast:** white title and pale chat text contrast well against the dark screen. After each sweep, yellow text remains clear. **During the sweep, the entire target word turns dark immediately, while yellow covers only its advancing portion.** Uncovered letters become nearly invisible against the screen; this is a definite readability defect.
- **Bounds:** the clamp protects the declared rectangle, not measured text bounds. Moreover, its arithmetic assumes unscaled translation, while `scale(...) translate(...)` scales translation too. The generous title/chat insets make default horizontal stage clipping unlikely, but viewport height, wrapping, screen overflow clipping, and perspective remain unverified. The modelled checks cannot establish actual content containment.

Residual fixes: increase chat and secondary text sizes, preserve readable foreground contrast across the entire sweep, and verify actual phone rendering and content bounds at every framing.

BODY-WRITE: Record the sweep’s dark uncovered letters as a confirmed defect; require larger secondary typography and rendered 360px bounds checks before readability clearance.
SCORE: 73
