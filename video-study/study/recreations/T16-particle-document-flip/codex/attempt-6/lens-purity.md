**Construction purity passes.** The supplied recreation uses self-contained HTML, CSS, and JavaScript. I found no embedded video, frame sequence, traced redraw, external asset load, or specimen media filename. Under Amendment A1, its runtime canvas sampling is lawful construction.

`samplePageTargets()` draws the page and stack from configurable ratios and offsets, renders `CONFIG.pageHeader`, and generates line widths from `CONFIG.pageLinePattern` and seeded variation. `sampleTitleTargets()` fits and renders `CONFIG.titleText`, and `sampleHaloTargets()` draws an ellipse from configurable radii and position. `sampleDrawn()` and `sampleDrawnRegion()` turn the alpha pixels of those freshly drawn shapes into targets. The source contains no stored target geometry for those elements.

The specimen’s page count, title, and checkpoint anchors reside in `DEFAULTS`, which initializes `CONFIG`. The URL override handler accepts replacements for the page count, title, flip duration, and checkpoint list. `deriveCheckpoints()` computes the default anchors from the resolved page count and duration, while `strictCheckpoints()` validates an explicit replacement. The default anchors calculate to page 1 at 0 ms, page 6 at `2600 × (1500/2600)` ms, and page 14 at `2600 × (2200/2600)` ms.

I applied a small deduction for duplicated presentation defaults. The stylesheet repeats config-controlled counter and label positions, sizes, and colors. The initial `cA`, `cB`, and `cHalo` arrays also repeat the configured palette. `initDom()` and `refreshColors()` overwrite those values during startup, so the duplication does not defeat the swap mechanism. If carried forward, the purity cure is to keep those configurable values in `DEFAULTS` and initialize the DOM styles and palette from `CONFIG`.

The reported rapid-page dwell, coarse sampling, and wall-clock residue concern timing. Pixel verification and perceptual clearance remain unverified. The clearance experiment and tested scatter minimum do not change the origin of the targets. The build record’s release description does conflict with `releaseParticle()`, which uses seeded `rng()` calls for per-release scatter. That scatter is procedural and does not incur a purity deduction.

**Limits.** The workspace contained no run files. Opening `build-record-blind-attempt6.md` returned `No such file or directory`. The on-disk recreation and separate comparison page were not assessed. This score covers the source and build record supplied in the request. Browser rendering, swap execution, and harness results were not independently verified.

**Body-write: none (read-only run)**. This return supplies the score, findings, and conditional cure for the attempt record.

SCORE: 98
