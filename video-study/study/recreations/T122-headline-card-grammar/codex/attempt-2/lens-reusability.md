**Reusability verdict — 84/100.** The unchanged renderer can produce a different piece through CONFIG edits. This lens clears the 70-point floor. The overall pass depends on the other four scores.

- **Content and timing.** `CONFIG.beats` controls headline spans, insert text, checklist items, and warnings. `tick` and `seek` both use `cycleMs`. In `effCheck`, shortening the checklist beat from 4000 to 2000 ms halves its reveal offsets from `[0, 600, 1200]` to `[0, 300, 600]` and moves the warning from 1800 to 900 ms.
- **Appearance.** The stage, chip, card, row, and warning styles take their colors from CONFIG, including both accent borders. Dimensions, font family and sizes, border widths, radii, and padding are configurable. The `.headline` CSS rule fixes font weight at `800` and line height at `1.25`, so changing either requires a renderer edit.
- **Overflow.** `headlineFont` supports a configurable size floor, and the headline builder enables wrapping inside long tokens. Its width estimate omits chip padding and uses fixed character widths regardless of the configured font. A headline that wraps onto enough lines can therefore overlap the support zone, whose top position is fixed independently by `CONFIG.support.top`.
- **Numeric validation.** `validateConfig` rejects `NaN` and infinities in numeric fields. It accepts zero for `check.baseBeatMs`, which makes the first default reveal threshold `0 × Infinity = NaN` and leaves that row hidden. It also accepts a numeric string for `cycleMs`, even though the addition in `tick` then concatenates strings and distorts playback timing.

**Limits.** I assessed the supplied source and logic-check packet. Browser rendering, font fit, and the packet’s reported check totals were not independently verified.

Body-write: none (read-only run)

SCORE: 84