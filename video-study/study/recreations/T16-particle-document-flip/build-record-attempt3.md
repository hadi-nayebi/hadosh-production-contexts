# T16 — Particle Document Flip · BUILD RECORD (attempt 3)

Technique: T16 (packet #1, "Look What I Can Do" @ 1:35–1:40) · Queue #11
Artifacts: `recreation.html` · `comparison.html` · `segment.mp4` (evidence only)

## Pre-build filings

### Preservation (verified before any mutation)
- Prior source copy filed create-once as `recreation-attempt-2.html`, sha256 `34dd5687df7c72b5f64687f52705fea1ed7f310e6eabb69a4d2ada983709f62a` — hash-matches the run baseline for the working source.
- Earlier preserved source `recreation-attempt-1.html` verified hash-matching the baseline (`fda8540c…`); never overwritten.
- Comparison snapshot filed create-once as `comparison-preserved-attempt-2.html`, sha256 `75e2584a752c2d21ff277477c5bb35c34616e119c5f12fc764a90ec6d6087a88` — hash-matches the baseline.
- No attempt-3 scoring directory existed at preflight.

### Construction decision recorded before building: schedule budget enforcement
The schedule budget (travel + maximum stagger + reserved settled hold, against the minimum page interval) is enforced during configuration validation: if the budget cannot hold, the flip travel time is reduced in steps and a warning is recorded, so execution never proceeds on a schedule whose own budget reports failure.

### Interval budget filing for the rapid pages (pages 6–13)
Preserved anchors: first checkpoint at 0 ms, middle checkpoint at 1500 ms, final page reached at 2200 ms, flip phase ends at 2600 ms, full cycle 6000 ms, title formation/completion and hold anchors unchanged.
- The rapid span (1500 ms → 2200 ms) holds 8 page intervals of 87.5 ms each.
- Scheduling criterion: at least one settled rendered frame per rapid page at multiple frame-phase offsets, at a 60 fps cadence and at permitted 50 ms steps (modelled).
- Reading criterion: settled dwell of at least 80 ms per rapid page (modelled).
- Chosen construction values: flip travel 28 ms, maximum stagger 8.4 ms (fraction 0.30), worst-case arrival 36.4 ms, modelled settled window 87.5 − 36.4 = 51.1 ms per rapid page.
- Scheduling arithmetic: the 51.1 ms settled window exceeds the 50 ms maximum step, so at least one step instant falls inside the window at every phase offset; at 60 fps (16.67 ms period) at least three frame instants fall inside it at every phase offset. The arrival completes inside the position update of the step in which travel elapses, and that step's draw shows the settled position, so the step instant at or after arrival counts as a settled rendered frame.
- Reading arithmetic: an 80 ms dwell inside an 87.5 ms interval leaves at most 7.5 ms for travel plus stagger combined, which is incompatible with any continuous travel motion (the arrival would be an instantaneous snap, not a travel). The 80 ms reading criterion is therefore UNREACHABLE under the preserved anchors. Filed before building: the reading dwell target is NOT carried by this construction; the construction carries the scheduling criterion above and the modelled dwell rises from 23.66 ms to 51.1 ms per rapid page. The dwell trade is priced against the preserved anchors, which are not moved.

### Joint demand note
Pool demand is priced jointly at final settings: denser outline sampling, the maximum-demand page across all pages, title + ring demand together, and the reserve fraction — asserted as one joint case in the diagnostic ledger, not as separate partial cases.

## Construction facts
- Single self-contained HTML file; one canvas particle system; no external assets. Page, title and ring targets are produced at runtime by sampling content rendered from CONFIG values on offscreen canvases. No content value appears in markup or logic outside CONFIG: the counter and label elements start empty and are filled from CONFIG at initialization.
- Phase sequence inside one 6000 ms cycle: flip [0, 2600) · release [2600, 3100) · form [3100, 4600) · hold [4600, 5700) · seam [5700, 6000). At the seam's start the title and ring assignments release; no page target is borrowed until the next cycle begins. Title travel completes by ~4478 ms; ring travel by ~4552 ms; the settled hold begins at 4600 ms.
- Page schedule: derived from the resolved page count and flip duration through anchor fractions (middle page fraction 5/13 at time fraction 1500/2600; last page at time fraction 2200/2600). At the default configuration the resolved schedule is page 1 at 0 ms · page 6 at 1500 ms · page 14 at 2200 ms. An explicitly supplied checkpoint list replaces the derived schedule only when every entry passes strict validation (number-typed finite fields, integer pages within range, strictly increasing pages and times, first entry at time 0, last time before the flip phase ends); any violation derives the schedule and records a warning.
- Schedule budget enforcement: travel + maximum stagger + reserved settled hold is checked against the minimum page interval of the resolved schedule during validation; if it cannot hold, flip travel is reduced in steps (warning recorded) until it holds.
- Motion construction: every particle's rendered position is anchor + stream offset. The offset accumulates the particle's stream velocity every frame in every state. The anchor moves only through a travel profile whose derivative is zero at both ends; jitter amplitude fades in with the same profile and fades out smoothly after release before the anchor freezes. The settled reference frame is the target frame: a settled particle's anchor equals its target plus the faded-in jitter.
- Page turn: during a flip window the front page's anchors (outline, header, lines) compress horizontally toward the page's left edge by a zero-end-derivative profile reaching a minimum factor of 0.15 at mid-window; backing-stack anchors never take part. The turn changes no assignment.
- Release adds no field component: a released particle's anchor freezes and its offset carries it. Silhouette behaviour after release is priced against the constant-field model exactly (centroid translates at stream velocity; spread growth bounded by the drift ranges) and measured against that bound.
- Text fitting prices width AND height: header fits a width box (0.84 of page width) and a height box (0.17 of page height); the title fits a width box (0.86 of stage width) and a height box (0.30 of stage height). The named no-fit policy is CONDENSE-AT-FLOOR: at the minimum font size, a condensation transform brings the rendered bounds inside the box.
- Pool sizing: maximum target demand over EVERY page, and title + ring together, grossed up by the reserve fraction; the pool never grows afterwards. Transition records carry an unassigned count, asserted zero.
- Restart resets all run state: simulation time, phase, current page, trace, transition records, diagnostics, scheduler flags, the animation timestamp, and the re-seeded pool.
- Intensities are named and distinct: travelling 0.38 · settled stack 0.60 · settled page/title 1.0 · ring 0.95 · surplus 0.16 · reserve 0.28.
- Configuration validation runs before sampling: sampling gaps, radii, line pattern, colours, periods, intensities, easing exponent and turn factor are type- and range-checked with recorded warnings; URL numeric overrides are parsed strictly (a value that is not entirely a number is rejected with a warning).
- Outline and stack strokes are sampled at a denser gap (3 px) than filled content (4 px).
- CONFIG carries the technique's values, including the values that prescribe behaviour in code: stack vertical offset factor, line-width floor and thickness floor, fit floors and shrink steps, easing exponent, wrap margin, minimum stage dimensions, sampling alpha threshold. URL overrides: title, titleLabel, pageHeader, pageCount, flipMs, releaseMs, formMs, holdMs, seamReleaseMs, sampleGap, outlineGap, reserveFraction, palette colours, flipCheckpoints.
- comparison.html is unchanged: it embeds the recreation by reference and carries no configuration interface of its own; its ORIGINAL side is untouched (snapshot sha recorded in the preservation section above).

## Per-cure diagnostic ledger (CA-1)
All rows: source revision = the frozen final source (sha256 in the binding section below); fixed controls = default CONFIG at 960×540 stub stage unless the row names a swap; evidence = the node harness check name (stubbed canvas rasterizer). Diagnostics were run per check group during construction and re-run as one integrated regression (33/33) on the identical frozen source. Lens movement is a JOINT outcome of the whole construction; no individual score attribution is claimed for any row.

| # | Check (neutral name) | Changed variables | Expected effect | Measured result |
|---|---|---|---|---|
| D1 | derived schedule anchors | checkpoint derivation from pageCount/flipMs | resolved schedule = 1@0 · 6@1500 · 14@2200 at defaults | PASS — exact match; pageAtTime 0→1, 1499→5, 1500→6, 2200→14 |
| D2 | derived schedule under swaps | pageCount 9; pageCount 9 + flipMs 1800 | coherent schedule ending at the last page before the flip phase ends | PASS — pageCount 9: 1@0 · 4@1500 · 9@2200; flipMs 1800: last page 9 at 1523 ms < 1800 ms |
| D3 | strict checkpoint validation | 10 malformed supplied lists (null entry, string page, unsorted pages, duplicate times, fractional page, out-of-range page, end at/after flip end, nonzero start, non-array, empty) | every case rejected; a valid list accepted | PASS — 10/10 rejected, valid list accepted |
| D4 | schedule budget + enforcement | travel set to 500 ms in a control run | budget reports failure, then enforcement reduces travel until it holds | PASS — enforcement reduced travel to ~42.9 ms and the budget then held; at the construction value (28 ms) budget = 56.4 ms ≤ minimum interval 87.5 ms |
| D5 | settled-frame scheduling model | flip travel 28 ms, stagger fraction 0.30 | ≥1 settled rendered frame per rapid page at 4 phase offsets × 2 cadences (60 fps, 50 ms steps) | PASS — modelled dwell 51.1 ms on each of pages 6–13; a settled instant exists inside every rapid page's window at every tested offset/cadence |
| D6 | configuration guards | zero sampling gap · negative ring radius · malformed line pattern · invalid colour · partial numeric string | each guarded with a recorded warning, no hang/throw | PASS — 5/5 guarded |
| D7 | outline sampling density | outline gap 3 px; stage sizes 960×540, 800×450, 961×541, 1024×576 | top-edge sample points with no gap above the sampling gap at every size | PASS — max gap 3 px at all four sizes |
| D8 | two-dimension text fit | title/header fit boxes (width + height) | fitted rendered bounds inside both boxes | PASS — title rendered 577.5 × 150 px inside an 825.6 × 162 px box |
| D9 | no-fit policy | title text replaced by a 240-character string | condensation engages at the floor; bounds still inside the box | PASS — condensed, bounds hold |
| D10 | counter initialization | counter element starts empty in markup | counter text written from CONFIG at initialization | PASS — counter reads the configured first page / page count |
| D11 | front turn vs backing stack | turn profile (minimum factor 0.15, pivot at page left edge) | front anchors compress toward the pivot at mid-window; stack anchors unmoved | PASS — 847 front anchors measured mid-window, mean factor consistent with the profile's mid-window value for the kept-assignment set; 944 stack anchors, max deviation 0.35 px (jitter amplitude) |
| D12 | assignment completeness + correspondence | pool sized to maximum page demand | no unassigned target in any transition; kept-by-identity fraction stays high | PASS — 16 transitions in the diagnostic window, unassigned 0 in all; mean kept-by-identity 0.825 |
| D13 | reserve + seam | reserve fraction 0.22 | reserve particles never borrowed; no title/ring particle borrowed at flip entry | PASS — violations 0; seam violations 0 |
| D14 | joint demand at denser settings | sampleGap 3 + outlineGap 2 (denser everywhere) with maximum page, title + ring, reserve | assignment completeness holds jointly | PASS — pool 8,804 at the denser settings, 26 transitions, unassigned 0 |
| D15 | trajectory velocity continuity | integrated offset + zero-end-derivative anchor profile | finite-difference velocity of a forming particle is continuous across its settlement instant | PASS — velocity 27.7 px/s before vs 27.6 px/s after settlement (window ±4 ms, 1 ms steps) |
| D16 | release behaviour vs constant-field model | release with no added field component | released silhouette spread ratio stays within the model's drift bound | PASS — measured ratio 1.010 vs model bound 1.010 at 484 ms into the release window |
| D17 | intensity separation | travelling 0.38 vs settled stack 0.60 (distinct named values) | the two values differ by construction | PASS — 0.38 ≠ 0.60 |
| D18 | restart state equality | full run-state reset + re-seeded pool | state after restart + a controlled step sequence equals fresh load, over two restarts | PASS — position snapshots identical across fresh load and two restarts; trace/transition records reset |
| D19 | construction purity grep | — | no media filenames, media tags, image extensions or external URLs in the source | PASS — 0 hits |
| D20 | syntax | — | inline script parses | PASS — `node --check` clean |

PIXEL-UNVERIFIED: a headless render was attempted with the available Chromium (`/opt/meta-chromium/chrome --headless --screenshot`, 390×844); startup failed with "Hatch WebGL domain policy is required for browser startup" and no screenshot was produced. Geometry evidence therefore rests on the deterministic logic harness above; the comparison page remains the human render surface.

## Final source binding
- recreation.html sha256: `9cadd85b0f321f419210862b55e61af423d817705fd9f8153488b9fc3ada4605` (45,050 bytes)
- All five scoring payloads in `codex/attempt-3/` embed this exact source and this record.
