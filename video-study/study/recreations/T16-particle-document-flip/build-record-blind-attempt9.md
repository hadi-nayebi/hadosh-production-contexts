# Build record (score-blind) — T16 particle document flip, attempt 9

Final source: recreation.html, sha256 c7bdd713ac188769d7c8e3810c09cf1b351952abed0e20192a3098f3cdbd78bb.
PIXEL-UNVERIFIED: no pixel/render verification was available for this attempt; all verification is source-level and instrument-level (stub-canvas harness).

## What the construction is

A single self-contained HTML file: a particle system forms a multi-page document (header, ruled lines, a ring diagram) page by page with page-turn folds, then a title formation, a hold, and a seam back to page one, looping. All behavior is parameterized by one config object (131 keys) with a validation gate: an infeasible config is refused atomically and the running presentation is left untouched.

## Neutral technique facts

- Presented-readable accounting: the page counter is written only inside the draw routine, and only with values whose page was actually drawn in a readable state at that draw instant. A per-draw trace records callback timestamp, simulation time, cycle and page identity, required vs registered target identities, and two readability predicates (a strict one — complete front-page assignment with every assigned particle registered by the draw instant — and a geometric one — particles inside their readability window at the draw instant). Dwell accounting derives from the trace.
- A measurement dispute from the prior attempt is reconciled by instrument (both bases printed): counting simulation STEP states inside the frame loop gives 26 of 32 page-opportunities strict-readable at coarse steps, but that counts states never drawn; counting actual DRAWS gives: at 60 fps, 32/32 opportunities strict-presented-readable; at 50 ms callback steps, opportunities (draws inside a page's readability window) 8/32, strict presented-readable 0/32, geometric presented-readable 24/32. The construction binds its counter to the draw-timestamp definition; both bases are stated here so the stricter one is the priced one.
- Outgoing continuity: at each page change the departing page's full sampled target set is retained by identity and folds away from its own targets; there is no separate edge-particle mechanism. The exit fold deepens and then stays past the pivot for the rest of the exit (it does not return over the incoming page).
- Release intensity: a released particle's scatter starts at the intensity it held at the release instant, capped at the travel intensity cap (0.38) from the release instant on every exit branch, and declines from there.
- Shared end-time accounting: phase-exit and flip-exit scatter end times come from one pair of helpers consumed by the feasibility gate, the pool-size bound, and the runtime; formation borrowing is blocked while scatter is outstanding and the delay is accounted. The pool is priced for four concurrent page sets (two scatter sets can overlap a handoff at the fastest tempo step).
- Borrow budget: initial borrowing prices the schedule-derived duration of the first flip (the same dwell table the transitions use), not a nominal constant.
- Boundary evaluation: an absolute stream clock integrates offsets to each event instant exactly once; segment entries and page dispatches evaluate particle state at their scheduled boundary instants before capture/release decisions, so settled state does not depend on callback granularity. The registration record is finalized from event times when a page is claimed departing.
- Config edges: header samples are asserted separately by the gate; sampling padding is floored at the boundary; checkpoint schedules are deep-copied on the way in and out; derived schedules for one/two pages anchor the final page at the end time; zero-duration fades are guarded; text is fitted by true ink extents; a resize commits new dimensions only if the feasibility gate passes at them.
- Restart: a refused revalidation leaves the live presentation byte-identical (no DOM rebuild); a reset clears every run-local diagnostic maximum and record.

## Own-check summary (stub-canvas harness, final source)

30 checks, all passing on the final source, including: counter == independent instrument at actual draw timestamps (exact set equality, incl. the empty strict set at 50 ms steps); repeat draws never double-count; scatter intensity ≤ cap over ~249k samples on all branches; overlap bound > 0 on the shared-end-time case with projected ends printed; formation delay accounted; initial-borrow registration inside a 60 ms one-page flip; checkpoint/schedule/copy/fade/ring/header edge cases; an 81-probe generative sweep over the validation grammar (no throw, defined gate outcome); refused-revalidation presentation preservation; reset residue zero; settled-set identity across 120 ms vs 10 ms steps (839/839 keys, worst position difference 0.00 px); dense combined config (40 pages, 6000 ms flips, long title) with zero unassigned targets and a resolved hold; self-start reaching the seam unaided.

## Fit and census (on the final source)

- Fit at 360 px stage: header ink 89.8×24.9 in a 99.8×30.2 box; title ink 299.8 wide in a 309.6 box; counter worst string fits inline (group 105 ≤ 106.8 available). No condensing.
- Config census by enumeration: 131 keys (117 numeric, 14 non-numeric), every key consumed (≥1 read site and named in a validation/route list); 6 frozen schema constants sit outside the config object.

## Schedule census-anchor mapping (default config)

Cycle length 5600 ms. Window-start offset 0 = cycle start (page 1 presented at the load draw).

| census state | cycle ms | segment | segment-relative ms | prescribed state at that instant |
|---|---|---|---|---|
| page 1 | 0 | flip | 0 | page 1 fully assigned; counter drawn "1/14" |
| page 6 | 1500 | flip | 1500 | page 6 flip begins (checkpoint anchor); pages step at the dwell table's tempo (300 ms early, tightening to 87.5 ms) |
| page 14 | 2200 | flip end / release start | 2200 / 0 | last page reached; flip phase ends, release phase begins |
| release end | 2700 | form start | 0 | title/ring formation borrowing begins (subject to outstanding-scatter blocking) |
| form end | 4200 | hold start | 0 | title formed; hold begins |
| hold end | 5300 | seam start | 0 | seam phase begins |
| cycle end | 5600 | next cycle | 0 | page 1 of the next cycle |

Checkpoints (derived schedule): 1 @ 0 ms, 6 @ 1500 ms, 14 @ 2200 ms; minimum page interval 87.5 ms.
