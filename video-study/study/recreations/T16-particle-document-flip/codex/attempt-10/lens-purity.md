T16 attempt 10 meets the construction-purity standard. The page and backing stack come from Canvas rectangles sized and positioned by `CONFIG`. The page header and title come from fitted Canvas text, the ruled lines use configured widths with seeded variation, and the halo comes from a configured ellipse. `sampleDrawn()` and `sampleDrawnRegion()` turn the alpha values of those runtime drawings into particle targets, as permitted by Amendment A1. The source contains no baked target coordinates, glyph masks, frame data, external asset loads, or specimen media references. [Runtime target construction](/home/hatch/workspace/.scratch/cycle-030/lens-a10-purity/payload-purity.txt:757)

The 14-page count and `AI GURU` are defaults. The checkpoint defaults derive page 6 as `1 + round((14 − 1) × 5/13)` and the later timestamps as `2600 × 1500/2600` and `2600 × 2200/2600`. URL overrides accept a replacement title, page count, flip duration, and checkpoint list. An explicit list goes through validation before use. [Defaults](/home/hatch/workspace/.scratch/cycle-030/lens-a10-purity/payload-purity.txt:212) · [URL overrides](/home/hatch/workspace/.scratch/cycle-030/lens-a10-purity/payload-purity.txt:346) · [Checkpoint derivation and validation](/home/hatch/workspace/.scratch/cycle-030/lens-a10-purity/payload-purity.txt:542)

Minor deduction for duplicated presentation defaults. The stylesheet repeats counter and title-label positions, sizes, and colors that `initDom()` applies from `CONFIG`. The runtime overrides still work. Removing those redundant CSS values would give the configurable properties a single source. [Stylesheet](/home/hatch/workspace/.scratch/cycle-030/lens-a10-purity/payload-purity.txt:50) · [DOM initialization](/home/hatch/workspace/.scratch/cycle-030/lens-a10-purity/payload-purity.txt:1209)

**Limits** — I reviewed the on-disk payload and verified that its extracted HTML matches the recorded SHA-256. The named attempt directory was absent from the workspace path. Browser rendering and live swap behavior were not tested in this review.

For filing, `lens-purity.md` receives these findings and `scores.md` receives the purity score and findings. If the aggregate verdict is FAIL, the next attempt’s purity cure is to remove the duplicated CSS defaults.

**Body-write: none (read-only run)**

SCORE: 98