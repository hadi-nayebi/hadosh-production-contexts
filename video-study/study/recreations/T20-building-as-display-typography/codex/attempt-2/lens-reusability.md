Sufficient for ordinary title, timing, and palette swaps, but not yet safe for production to drive from CONFIG alone.

- Configuration coverage is strong: text, fonts, geometry, sampling thresholds, colors, motion, and timing are exposed. The packet demonstrates consumption of selected keys, not every key. CSS still fixes the stage minimum height at 200px outside CONFIG.
- Letter cadence correctly re-derives from text cardinality. Checkpoint normalization handles the supplied adversarial endpoints and invalid durations. However, CONFIG’s minimum span is itself unvalidated: zero or negative values can permit zero spacing and NaN state. Zero marquee character duration also produces NaN at time zero.
- Horizontal facade fitting measures changed titles, but vertical fitting is unreliable. Ink height is counted only inside each line’s band, so it cannot exceed that band; clipped or overlapping glyphs can pass. The synthetic five-line result does not resolve this.
- Facade fitting can report over-capacity without rechecking whether its final jump to the minimum font actually fits. More seriously, neither facade nor marquee capacity status controls rendering. An oversized marquee is still drawn at full width without strip clipping; facade rendering continues despite failure. Diagnostics alone do not prevent overflow or unreadable output.
- Glyph ownership uses summed individual-character widths while drawing whole strings. Browser kerning and shaping can misalign ownership bands. UTF-16 iteration also limits reuse with emoji and complex scripts.
- Swap cases establish logical cadence changes and fitting under the synthetic model. They do not prove browser glyph survival, actual font metrics, vertical separation, or readable window-grid results after swaps.

The main deductions concern ineffective vertical capacity detection and capacity failures that production cannot safely handle through configuration alone.

BODY-WRITE: This return records the parameterization score, demonstrated reuse coverage, and source-level capacity and validation gaps for the practice Verify record and artifact scores file.
SCORE: 70