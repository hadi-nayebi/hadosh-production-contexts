# T16 — Particle Document Flip · BUILD RECORD (attempt 2)

Technique: T16 (packet #1, "Look What I Can Do" @ 1:35–1:40) · Queue #11
Artifacts: `recreation.html` · `comparison.html` (unchanged — the config interface is unchanged) · `segment.mp4` (evidence only)

## Final source binding
- recreation.html sha256: `34dd5687df7c72b5f64687f52705fea1ed7f310e6eabb69a4d2ada983709f62a` (31,536 bytes)
- All five scoring payloads in `codex/attempt-2/` embed this exact source.

## Construction facts
- Single self-contained HTML file; one canvas particle system; no external assets. Page, title and ring targets are produced at runtime by sampling content rendered from CONFIG values on offscreen canvases.
- Phase sequence inside one 6000 ms cycle: flip [0, 2600) · release [2600, 3100) · form [3100, 4600) · hold [4600, 5700) · seam [5700, 6000). At the seam's start the title and ring assignments release; no page target is borrowed until the next cycle begins. The title begins forming at 3100 ms; title travel completes by ~4478 ms; the settled hold begins at 4600 ms.
- Page schedule (CONFIG checkpoints): page 1 at 0 ms · page 6 at 1500 ms · page 14 at 2200 ms.
- Every particle carries a stream velocity assigned at creation. The update moves position only — travel interpolation, settled jitter, the turn cue and release all leave the velocity values untouched.
- A borrowed particle streams during its stagger delay; its travel origin is captured at the moment the delay elapses.
- Page changes retarget assignments: targets carry identity keys (outline, stack and header keys are identical on every page; line keys are line index + column). A particle whose key exists on the next page keeps its assignment and runs a horizontal compression cue centred on the page (peak compression 0.18, sine profile over the travel window); changed line targets are filled by nearest-target reassignment; new targets borrow from the free pool; vanished targets release.
- Release clears the borrowed flag at the particle's current position with its stream velocity intact. During the release window the stream field adds a divergent component away from the stage centre (rate 0.9/s, decaying over 900 ms).
- Borrowed intensity: 0.45 while the stagger is pending, while travelling, or while the cue runs; foreground intensity (page/title 1.0, stack 0.45, ring 0.95 gold) only once settled. Unborrowed: surplus 0.16, reserve 0.28.
- The pool is built once at sizing: size = ceil(max(page targets, title + ring targets) / (1 − reserveFraction)); the first floor(size × reserveFraction) particles are marked unborrowable. The pool never changes size afterwards.
- Checkpoint input guard: a checkpoint list whose entries lack finite page/atMs values is replaced by the built-in default list; the schedule function never reads an unvalidated entry.
- CONFIG carries the technique's values: page geometry ratios and stroke width, header fit ratios, line pattern and spacing, stack geometry, title/ring geometry, checkpoint list, phase durations, flip travel 48 ms and stagger fraction 0.33, form travel 950 ms and stagger fraction 0.45, turn compression, wind and drift ranges, jitter amplitude and periods, release dispersal rate and decay, dispersal factor 1.25, intensities, counter and label typography and positions. URL overrides: title, titleLabel, pageHeader, pageCount, flipMs, releaseMs, formMs, holdMs, seamReleaseMs, sampleGap, reserveFraction, palette colours, flipCheckpoints.

## Interval budget (derived from the final checkpoint schedule)
Page-change intervals from the schedule derivation: pages 1–5 hold 300 ms each; pages 6–13 hold 87.5 ms each; page 14 holds 400 ms (to the end of the flip phase). Minimum interval = **87.5 ms**.
Budget assertion: flip travel 48 ms + maximum stagger 15.84 ms + reserved settled hold 20 ms = **83.84 ms ≤ 87.5 ms** — holds for every transition in the schedule.

Settled dwell per page (interval − travel − maximum stagger): pages 1–5: 236.16 ms · pages 6–13: 23.66 ms · page 14: 336.16 ms.

## Own-check evidence (node harness, stubbed canvas rasterizer; 18/18 checks pass)
| Check | Result |
|---|---|
| Checkpoints | pageAtTime: 0→1, 1499→5, 1500→6, 2200→14 |
| Interval budget | min interval 87.5 ms; budget 83.84 ms; assertion holds |
| Settled dwell table | 14 pages; minimum dwell 23.66 ms |
| Checkpoint guard | list `[null]` and a non-array value both fall back; pageAtTime(1000) = 4, no exception |
| Velocity continuity | stream velocity values of all 6,829 particles identical before and after a 2-loop simulation (travel, jitter, cue and release branches all exercised) |
| Pool + reserve | pool 6,829 at build and after 2 loops; reserve-borrow violations 0 (sampled every 10 steps) |
| Seam exclusivity | 3 seam crossings in 2 loops; title/ring borrowed at flip entry: 0; borrowed particles sampled during seam windows: 0 |
| Dispersal | released silhouette spread ratio measured at the end of the release window, before title formation: 1.369 ≥ factor 1.25 |
| Intensity by phase | travelling borrowed particle renders at 0.45; settled title particle renders at 1.0 |
| Title + ring capacity | at hold: title assignments 4,890 / 4,890 targets; ring assignments 436 / 436 targets |
| Assignment correspondence | 27 page transitions in 2 loops; mean kept-by-identity fraction 0.808 of targets per transition; per-transition record example: page 3 — targets 2,770, kept 2,226, reassigned 514, fresh 30, released 0 |
| Stagger origin | a borrowed particle's captured origin equals its streamed position at the delay's end and differs from its position at assignment time |
| Turn cue | at cue midpoint, 1,158 of 1,158 sampled persistent-set particles with |target − page centre| > 60 px sit compressed toward the centre |
| Swap (logic level) | title "DATA WIZARD" + pageCount 9 + flipMs 1800 + gold palette apply by config alone; page clamps at 9; title target count regenerates 4,890 → 4,800 |
| Swapped schedule budget | checkpoints to page 9 at 1600 ms: minimum interval 175 ms ≥ budget 83.84 ms |
| Dense-title pool state | title "EXTRAORDINARY ACHIEVEMENTS": pool size fixed, reserve violations 0, ring assignments complete at hold (436/436) |
| Construction purity | grep over the source for media filenames, media tags, image extensions and external URLs: 0 hits |
| Syntax | inline script passes `node --check` |

PIXEL-UNVERIFIED: a headless render was attempted with the available Chromium (`/opt/meta-chromium/chrome --headless --screenshot`); startup failed with "Hatch WebGL domain policy is required for browser startup" and no screenshot was produced. Geometry evidence therefore rests on the deterministic logic harness above; the comparison page remains the human render surface.

## Payload assembly + inspection
- Five payloads assembled as `codex/attempt-2/instr-<lens>.txt` (lens instruction + the bound source above + this record), each inspected before firing for excluded content (earlier scores, delta targets, pass thresholds stated as targets, comparative wording): none found.
- All five scoring runs fire against the bound source sha256 `34dd5687df7c72b5f64687f52705fea1ed7f310e6eabb69a4d2ada983709f62a`.
