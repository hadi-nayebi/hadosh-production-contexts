# T06 attempt 3 — CONFIG consumption census (A-C006-2) + literal census (A-C008-3)

Source: recreation.html sha256 dbae736f1d496348e251f78ac558478dae49e33d2115ed387f9e58d6b7540080

## CONFIG consumption (every key -> consumed effect; references counted in source after the CONFIG block)

| CONFIG key | CONFIG.* references after definition | Effect |
|---|---|---|
| durationMs | 7 | clock clamp + setTime clamp |
| phase2StartMs | 2 | derived: normalized to first phase-2 wave time in validate(), warning on disagreement |
| counterLabel1 | 2 | phase-1 badge label text |
| counterLabel2 | 2 | phase-2 badge label text |
| waves | 12 | schedule: waveAt/birthInfo/maxCount |
| timeMs (wave entry field) | consumed via wave objects (w.timeMs) | wave field (schedule) |
| phase (wave entry field) | consumed via wave objects (w.phase) | wave field (phase switch) |
| tileCount (wave entry field) | consumed via wave objects (w.tileCount) | wave field (tile counts) |
| counterValue (wave entry field) | consumed via wave objects (w.counterValue) | wave field (badge counter) |
| waveEntranceMs | 5 | tile entrance progress (incl. zero-duration stagger path) |
| tileStaggerMs | 5 | cohort stagger offsets |
| entranceStartScale | 4 | entrance scale interpolation |
| heroTileCount | 5 | hero build count + heroRect rows |
| heroAppearMs | 3 | hero activation time |
| heroEntranceMs | 5 | hero entrance progress (incl. zero-duration stagger path) |
| heroStaggerMs | 5 | hero stagger offsets |
| tileSeed | 1 | seeded tile content |
| palette | 12 | tile/hero gradients + figure colors |
| tileNames | 5 | tile tag text |
| heroNames | 5 | hero name text |
| bg | 4 | stage background |
| counterColor | 4 | phase-1 numeral color |
| counterColor2 | 3 | phase-2 numeral color |
| badge1LeftPct | 2 | badge-1 position |
| badge1TopPct | 1 | badge-1 position |
| badge1NumCqw | 2 | phase-1 numeral size |
| badge1LabelCqw | 2 | phase-1 label proportional size |
| badge1LabelMaxWidthPx | 1 | phase-1 label max width (wrapped state bound) |
| badge1LabelMarginTopPx | 1 | phase-1 label margin |
| badge1LabelMinPx | 2 | phase-1 label px floor in max() |
| badge2RightPct | 1 | badge-2 position |
| badge2TopPct | 2 | badge-2 position |
| badge2NumCqw | 2 | phase-2 numeral proportional size |
| badge2LabelCqw | 2 | phase-2 label proportional size |
| badge2LabelMinPx | 2 | phase-2 label px floor in max() |
| badge2NumMinPx | 2 | phase-2 numeral px floor in max() |
| badgeSmallWidthPx | 3 | small-width state threshold (reserved band + geometry model) |
| badge2LabelTrackingSmallPx | 2 | phase-2 label letter-spacing at small widths |
| wall2TopPctSmall | 2 | wall-2 top in reserved band at small widths |
| wall2HeightPctSmall | 3 | wall-2 height at small widths (containment) |
| badge2Bg | 1 | badge-2 backing |
| badge2PaddingPx | 2 | badge-2 padding (modelled box height) |
| badge2RadiusPx | 1 | badge-2 radius |
| wall1RightPct | 2 | wall-1 position + badge-1 zone model |
| wall1TopPct | 1 | wall-1 position |
| wall1WidthPct | 4 | wall-1 width + cell model |
| wall1HeightPct | 3 | wall-1 height + cell model |
| wall1GapPct | 1 | phase-1 cell gap |
| gridAspect1 | 1 | phase-1 grid columns |
| wall2LeftPct | 1 | wall-2 position |
| wall2TopPct | 2 | wall-2 top (large widths) |
| wall2WidthPct | 3 | wall-2 width + cell model |
| wall2HeightPct | 3 | wall-2 height (large widths) |
| wall2GapPct | 1 | phase-2 cell gap |
| gridAspect2 | 1 | phase-2 grid columns |
| tileTagCqw | 1 | tile tag size |
| tileInitialsCqw | 1 | tile initials size |
| tileInteriorSimplifyCellPx | 1 | density threshold for simplified interiors |
| tileTagMinCellPx | 1 | tag visibility threshold |
| motifBarWidthCellPct | 1 | dense motif bar width (% of cell) |
| motifDenseBarScale | 1 | dense motif bar count scale |
| motifBarMin | 1 | motif bar count base |
| motifBarExtra | 1 | motif bar count range |
| motifBarBottomPct | 1 | motif bar bottom offset |
| motifBarWidthPx | 1 | motif bar width at full density |
| motifBarMinHeightPct | 1 | motif bar height base |
| motifBarHeightSpanPct | 1 | motif bar height range |
| motifBlockCount | 1 | block motif count |
| motifOrbitWidthPct | 1 | orbit motif diameter |
| motifOrbitCorePct | 1 | orbit core diameter |
| heroRightPct | 1 | heroes position |
| heroBottomPct | 2 | heroes position + heroes-top model |
| heroWidthPct | 2 | heroes width + hero cell model |
| heroHeightPct | 3 | heroes height + hero cell model |
| heroGapPct | 1 | hero cell gap |
| heroCols | 1 | hero grid columns |
| heroBorder | 1 | hero border |
| heroShadow | 1 | hero shadow |
| heroNameCqw | 1 | hero name proportional size |
| heroNameMinPx | 1 | hero name px floor in max() |
| controlFontPx | 2 | control font size |
| controlPadding | 2 | control padding |

**Unconsumed keys: 0** — wave entry fields (timeMs/phase/tileCount/counterValue) are consumed through wave objects, counted in their row

## Literal census (A-C008-3) — literals outside the CONFIG block

Hex color literals outside CONFIG: ['#05070a', '#3a6ea5', '#e8a33d', '#ffd34d']
Numeric literals outside CONFIG are the named structural constants of the construction, whitelisted in the build record: 0/1 (clamps, counts), 2/3/4/6/7/8/9/14/15/16 (grid, motif, and control structure), 9/16 stage aspect in the geometry model, 26/65 (initial letter generation), 50/70/75/80/88/100/512 (motif placement percentages, override length/range bounds, percent bases), 360 (gradient angle range), 960 (fallback stage width), 0.52 (modelled Arial average char-width factor), 1.2 (label line factor in the geometry model), 255 (motif ink channel), validation fallback defaults and range bounds that restate CONFIG defaults at the validation boundary (23000, 380, 420, 45, 90, 1234, 60000/600000/3600000/10000/1000000000), and the mulberry32 PRNG constants (4294967296, 97 as the per-tile seed stride). Hex literals outside CONFIG are exactly the four validation fallback colors (#05070a, #3a6ea5, #e8a33d, #ffd34d), which restate the CONFIG defaults they fall back to. No production-facing value is stranded outside CONFIG beyond this whitelist.

## Purity grep

Terms scanned: ['http://', 'https://', '<img', 'segment.mp4', 'url(', '@import', 'fetch(', 'XMLHttpRequest']
Hits: {'http://': 0, 'https://': 0, '<img': 0, 'segment.mp4': 0, 'url(': 0, '@import': 0, 'fetch(': 0, 'XMLHttpRequest': 0} — ZERO external/asset hits (the only listed term present is none). All tiles and panels are code-drawn by this build; no specimen frames, no traced imagery, no external assets.
