# T16 — Particle Document Flip · BUILD RECORD (attempt 4)

Technique: T16 (packet #1, "Look What I Can Do" @ 1:35–1:40) · Queue #11
Artifacts: `recreation.html` · `comparison.html` · `segment.mp4` (evidence only)
Governing: practice Cycle 005 Wave 4 RUN.md T16 plan + amendments CA-1..CA-5.

## Pre-build filings (thresholds fixed BEFORE building — CA-3 / T16 plan amendment)

### Preservation (verified before any mutation)
- Prior source copied as a CONTENT copy (cp, never hardlink) to `recreation-attempt-3.html`, sha256 `9cadd85b0f321f419210862b55e61af423d817705fd9f8153488b9fc3ada4605` — hash-matches the wave baseline for the working source. Earlier preserved copies (`recreation-attempt-1.html` fda8540c…, `recreation-attempt-2.html` 34dd5687…) untouched.
- comparison.html sha256 `75e2584a752c2d21ff277477c5bb35c34616e119c5f12fc764a90ec6d6087a88` — baseline-matching; it embeds the recreation by reference and enumerates no configuration keys, so it is not re-pointed (E5 not triggered); ORIGINAL side untouched.
- No `codex/attempt-4/` directory existed at preflight.

### Phase-budget table (preserved anchors — not moved)
Anchors: checkpoints 1@0 · 6@1500 · 14@2200 ms; flip ends 2600 · release 500 · form 1500 · hold 1100 · seam 300 · cycle 6000 ms. Rapid span 1500→2200 ms = 8 intervals × 87.5 ms.

| Phase | Window (ms) | Budget inside the window |
|---|---|---|
| flip | 0–2600 | travel 28 + max stagger 8.4 = arrival ≤36.4 per page change; reserved settled hold 20 → budget 56.4 ≤ 87.5 min interval; turn overlay 140 (own parameter, consumes no travel budget); registration fade 300 runs after settlement, inside the interval remainder / final-page dwell |
| release | 2600–3100 | scatter travel window = full 500 (zero-end-derivative anchor scatter, radius in CONFIG); clearance asserted at form start (t=3100) |
| form | 3100–4600 | title travel 950 + max stagger 427.5 = 1377.5 ≤ formMs 1500 (formation budget enforced); ring delay 350 + ring travel 760×1.45 max stagger factor → ring arrival ≤ 350+760+342=1452 ≤ form+hold |
| hold | 4600–5700 | registration fade (300) completes for every title/ring particle well inside hold (last settle 4552 + 300 = 4852 < 5700) |
| seam | 5700–6000 | title+ring release at seam start; release fade re-emerges the stream contribution over 400 |

### Acceptance thresholds (ALL fixed here, before building)
- **T-REG (displayed bounds, cures 1+5):** at phone stage 390×844 AND desktop 960×540, at hold sample instants in cycles 1 and 2 (t = 5000, 5600, 11000, 11600 ms): every settled title particle's DISPLAYED position (anchor + displayed offset) lies inside the stage AND inside the fitted title box expanded by 6 px; every settled page particle at the final-page settled instant (t=2550, cycle 1) lies inside the page rect expanded by 6 px. PASS = zero violations at all sample instants.
- **T-VEL (retained velocity continuity, cure 1+5 second assertion):** finite-difference trajectory velocity of a forming title particle across its settlement instant (window ±4 ms, 1 ms steps): |v_after − v_before| ≤ 3 px/s on each axis' speed magnitude basis as in attempt 3's D15 (speed before vs after within 3 px/s).
- **T-TURN (turn visibility, cure 2):** turnMs = 140 as its own CONFIG parameter. Stepping the actual simulation at 60 fps (16.667 ms) and at 50 ms steps, at 4 phase offsets each: for each rapid page change, count rendered frames inside the turn window whose mean front-page horizontal compression factor ≤ 0.90. PASS = ≥1 such frame for ≥90% of rapid page changes at 60 fps AND ≥80% at 50 ms steps, at every tested offset.
- **T-CLEAR (visual clearance, cure 3 — metric priced BEFORE mechanism choice):** metric = (a) fraction of released page particles whose displayed position at form start (release + 500 ms) lies inside the fitted title box; (b) bounding-box area overlap of the released silhouette with its release-instant bounding box, at form start. Baseline priced on the prior construction's model (pure constant stream, mean displacement ≈13 px over 500 ms): overlap ≈ high (silhouette essentially unmoved). Thresholds: (a) ≤ 0.15 AND (b) ≤ 0.35 at form start. The perceptual claim "stops reading as a page" stays UNVERIFIED without rendering — only this metric is asserted.
- **T-SETTLE (runtime settlement, cure 4):** step the ACTUAL simulation (not interval arithmetic) at 4 phase offsets × 2 cadences (60 fps, 50 ms steps); a rapid page (6–13) counts settled-rendered in a run if ≥1 rendered frame shows it current with ≥90% of its borrowed particles settled (captured and travel elapsed). PASS = 100% of rapid pages at 60 fps at every offset AND ≥70% at 50 ms steps at every offset.
- **T-DWELL (conditional 80 ms reading-dwell rule):** measured during Execute by the T-SETTLE runtime runs: the maximum rendered settled dwell observed for any rapid page. If ≥80 ms is reachable under the preserved anchors with the new construction, the 80 ms criterion is ADOPTED as a pass condition; if the measured maximum is <80 ms, the written deferral from attempts 2–3 STANDS. Decision recorded from the measurement in the ledger below.
- **T-VAL (validation table, cures 6+7):** enumerated cases V1–V12 in the ledger, each with diagnostic ID + expected outcome (endpoint completeness incl. singleton lists · shrink-factor termination · fractional sampling indices · formation/formMs coupling · budget refusal · runtime mutation revalidation · residual literals in CONFIG).
- **T-DEF (shared defaults, cure 8):** one DEFAULTS object is the single source of every default value; CONFIG is built from it; validation fallbacks read DEFAULTS only. Asserted by grep: no validation fallback literal repeats a content default outside DEFAULTS.
- Purity: grep 0 hits for media/external references; syntax `node --check` clean; PIXEL-UNVERIFIED stands (A-C002-2) — no claim in this record cites a rendered pixel check.

## Construction facts
(To be completed at build close, with the per-cure diagnostic ledger, staged per construction change and re-run on the combined build per CA-3.)

## Construction facts (at build close)
- Single self-contained HTML file; one canvas particle system; no external assets. Page, title and ring targets are produced at runtime by sampling content rendered from CONFIG values on offscreen canvases. CONFIG is built from ONE shared DEFAULTS object; every validation fallback reads DEFAULTS. The counter and label elements start empty and are filled from CONFIG at initialization, including the counter label's letter spacing.
- Registration construction: rendered position = anchor + (stream offset − reference offset). The reference is constant while free/travelling (full stream contribution, trajectory velocity continuous; capture and travel progress happen in the SAME update — no capture/update lag). Once a particle settles, the reference eases (zero-end-derivative profile) to the live stream offset over the registration window (300 ms), so the displayed offset decays to zero and the settled structure registers on its fitted target and holds there across cycles. On release, the displayed offset re-emerges over the release window while the anchor scatters.
- Release construction: a released particle's anchor travels (zero-end-derivative profile) from its settled anchor to a dispersed anchor = coherent stream-direction component (biasX +240 px, biasY −200 px — every released anchor travels at least the bias) + a seeded random component (range 130 px horizontal, 0.9 factor vertical), then freezes; the displayed offset re-emerges across the same window. Clearance is asserted by the T-CLEAR metric below; the perceptual claim stays UNVERIFIED without rendering.
- Page turn: turnMs = 140 as its own CONFIG parameter, decoupled from the 28 ms travel time. Front-page anchors compress toward the page's left edge across the turn window (minimum factor 0.15 at mid-window); a turn already in progress is not restarted by the next rapid change — the gesture chains across consecutive flips. Backing-stack anchors never turn.
- Phase sequence and anchors unchanged: flip [0,2600) · release [2600,3100) · form [3100,4600) · hold [4600,5700) · seam [5700,6000); checkpoints 1@0 · 6@1500 · 14@2200 derived from anchor fractions; schedule budget enforced (travel reduced in steps; an infeasible pageCount/flipMs combination is REFUSED — reset to DEFAULTS with a warning — instead of running past a failed budget). Formation budget enforced the same way (title travel + stagger inside formMs; ring delay + travel inside formMs + holdMs; an infeasible formMs is refused by raising it to the feasible minimum with a warning).
- Checkpoint validation is endpoint-complete: a supplied list must start at page 1 / time 0 and end at the final page (a singleton list is complete only for a one-page stack), in addition to the strict type/shape rules. Sampling gaps are rounded to integers. Shrink factors are validated into (0, 0.98] so text fitting always terminates (plus an iteration cap in the fit loop). Runtime CONFIG mutation revalidates through the exposed revalidate() entry (validation, colours, checkpoints, both budgets, DOM, run reset).
- Pool sizing, reserve/seam behaviour, restart determinism, intensity separation (travelling 0.38 · settled stack 0.60 · settled page/title 1.0 · ring 0.95 · surplus 0.16 · reserve 0.28), two-dimension fit with CONDENSE-AT-FLOOR, and denser outline sampling are carried from the prior construction unchanged.
- comparison.html unchanged (sha `75e2584a…`): it embeds the recreation by reference and enumerates no configuration keys; its ORIGINAL side is untouched.

## Per-cure diagnostic ledger (CA-3: baseline · threshold fixed pre-build · post-change result · evidence)
All rows: source revision = the frozen final source (sha256 in the binding section below); fixed controls = default CONFIG at 960×540 stub stage unless the row names a swap; evidence = the node harness check name (stubbed canvas rasterizer). Diagnostics were staged per construction change and re-run as one integrated regression (30/30 PASS) on the identical frozen source. Lens movement is a JOINT outcome of the whole construction; no individual score attribution is claimed for any row.

| # | Check (neutral name) | Baseline (prior construction) | Acceptance threshold (fixed pre-build) | Measured result |
|---|---|---|---|---|
| D1 | derived schedule anchors | exact | exact match 1@0 · 6@1500 · 14@2200 | PASS — exact |
| D2 | derived schedule under swaps | coherent | pageCount 9 / flipMs 1800 coherent, last page before flip end | PASS |
| D4 | schedule budget at defaults | 56.4 ≤ 87.5 | budget holds | PASS — 56.4 ≤ 87.5 |
| T-REG | displayed bounds of settled title + final page (cures 1+5, assertion 1) | displayed title at target + ≈104–136 px lifetime offset; fitted bounds did not bound the display | zero violations: displayed positions inside stage AND fitted box + 6 px at hold instants in cycles 1+2, desktop + phone; final page inside page rect + 6 px | PASS — desktop: 24,776 title particles checked, 0 violations; 3,389 final-page particles, 0 violations · phone 390×844: 6,232 checked, 0 violations; 2,187 final-page, 0 violations |
| T-VEL | trajectory velocity continuity across settlement (cures 1+5, assertion 2 — retained) | 27.7 vs 27.6 px/s (anchor-relative measure) | \|Δspeed\| ≤ 3 px/s across the settlement instant (±4 ms, 1 ms steps) | PASS — 28.03 before vs 28.00 after (Δ 0.03 px/s) |
| T-TURN | sampled turn visibility (cure 2) | turn window = 28 ms travel time; gesture can fall between 50 ms steps | turnMs own parameter (140); ≥1 frame with mean front compression ≤ 0.90 for ≥90% of rapid changes @60 fps and ≥80% @50 ms steps, 4 offsets each | PASS — 9/9 changes at every offset at BOTH cadences |
| T-CLEAR | visual clearance at form start (cure 3) | pure constant stream: mean silhouette displacement ≈13 px / 500 ms; overlap ≈ unmoved | title-region fraction ≤ 0.15 AND released-bbox overlap ≤ 0.35 at form start; metric priced before mechanism choice | PASS — title fraction 0.141, bbox overlap 0.247 (n=3,389). Control (scatter zeroed): 0.242 / 0.955 — metric discriminates. Perceptual "stops reading as a page" claim: UNVERIFIED (no rendering) |
| T-SETTLE | runtime settlement, actual simulation (cure 4) | interval-arithmetic model falsified at runtime in the prior attempt | ≥1 rendered settled frame (≥90% of borrowed settled) per rapid page: 100% @60 fps, ≥70% @50 ms steps, 4 offsets each | PASS — 8/8 rapid pages at every offset at both cadences |
| T-DWELL | 80 ms reading-dwell reachability (conditional rule) | modelled dwell 51.1 ms; criterion deferred in writing | measured by the T-SETTLE runtime runs during Execute; adopt the 80 ms criterion only if reachable | MEASURED max rendered settled dwell 66.7 ms < 80 ms → criterion NOT adopted; the written deferral from attempts 2–3 STANDS, decision recorded from this measurement |
| V1/V1b | checkpoint endpoint completeness (cure 6) | singleton [{page:5,atMs:0}] passed and skipped the sequence | singleton/short lists rejected; full list accepted; one-page singleton accepted | PASS — all cases as expected |
| V2 | strict checkpoint validation (carried) | 10/10 malformed rejected | 10/10 rejected | PASS |
| V3 | shrink-factor termination (cure 7) | shrink factor 1 loops forever in fit | factor 1 refused to DEFAULTS; 240-char title fits with condensation, bounds hold | PASS |
| V4 | fractional sampling indices (cure 7) | sampleGap 2.5 produced fractional indices | gaps rounded to integers in validation | PASS — 2.5 → integer |
| V5 | formation/formMs coupling (cure 7) | shortened formMs could leave title/ring unsettled at the seam | formation budget enforced; feasibility flag true after enforcement | PASS — travel reduced until title need ≤ formMs at formMs=300 control |
| V6 | budget refusal (cure 7) | enforcement could return failure and the schedule still ran | infeasible pageCount/flipMs refused: reset to DEFAULTS + warning, budgetFeasible true | PASS — pageCount 40 + flipMs 50 refused as specified |
| V7 | runtime mutation revalidation (cure 7) | mutation did not revalidate | revalidate() applies mutated title/pageCount to checkpoints, counter and pool | PASS |
| V8 | residual literals in CONFIG (cure 7) | region padding 4, min travel 5, enforcement step 0.8, DOM letter-spacing outside CONFIG | all named values are CONFIG keys; letter spacing applied from CONFIG | PASS — keys present in CONFIG + DEFAULTS; DOM letterSpacing reads 0.14em from CONFIG |
| V9/T-DEF | shared defaults object (cure 8) | validation fallbacks repeated page-count + line-pattern literals outside CONFIG | one DEFAULTS object; pattern literal occurs once; fallbacks read DEFAULTS | PASS |
| D7 | outline sampling density | max gap 3 px | ≤ outline gap at the top edge | PASS |
| D8 | two-dimension text fit | bounds hold for targets | fitted bounds inside both boxes | PASS — 651×150 inside 825.6×162 |
| D10 | counter initialization | from CONFIG | counter reads configured first page / count | PASS — "1/14" |
| D12 | assignment completeness + correspondence | unassigned 0, kept 0.825 | unassigned 0 across a full cycle | PASS — 13 transitions, unassigned 0, kept-by-identity 0.884 |
| D13 | reserve + seam | violations 0 | violations 0 over a full cycle | PASS |
| D14 | joint demand at denser settings | unassigned 0 | sampleGap 3 + outlineGap 2: unassigned 0 | PASS |
| D17 | intensity separation | 0.38 vs 0.60 distinct | distinct named values | PASS |
| D18 | restart state equality | exact over two restarts | fresh load == restarted under controlled steps | PASS |
| D19 | construction purity grep | 0 hits | 0 hits | PASS |
| D20 | syntax | clean | `node --check` clean | PASS |

PIXEL-UNVERIFIED: headless Chromium startup remains blocked in this environment ("Hatch WebGL domain policy is required for browser startup", standing A-C002-2 state); geometry evidence rests on the deterministic logic harness above; the comparison page remains the human render surface.

## Final source binding
- recreation.html sha256: `b721a6c45440a61a2f79a4a2c16f0bc946a555c96651e1061acfca1a0a8a0aa0` (57,051 bytes)
- All five scoring payloads in `codex/attempt-4/` embed this exact source and the neutral check packet derived from the 30/30 harness run above.
