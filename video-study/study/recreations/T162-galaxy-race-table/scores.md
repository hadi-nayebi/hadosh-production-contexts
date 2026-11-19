# scores — T162 Galaxy race table · attempt 1 · Cycle 025 Wave 22 (2026-11-16)
recreation.html SHA-256: e613df885593c60182f589c9800861589cd7ab8aa130d77d706256642b3a2954 (identical across all five lens payloads and returns)
Segment: 518.00–530.00 s, cut 517.5–530.5 with ±0.5 s handles; segment.mp4 13.000 s, h264/aac, ffprobe-verified. Schedule basis: t=0 allocation (named, printed in build-record and told to the timing lens explicitly): census binds 1 marker at ~2 s into the window and the crowded state by ~7 s; individual onsets are the RUN §2c even-stepped allocation (0/1800/3600/5400/7200/9000/10800 ms).
PIXEL-UNVERIFIED: no browser binary in this seat; lens scores are source/logic-level (LOGIC-level harness; no browser binary; comparison page is the render surface).
jev-prewave: HOLD (parameterization 0.90 · purity pre-check 0.95 · own-checks completeness 0.40 · fidelity-plan honesty 0.90; primary ASSERTED-CHECKS; jev-prewave.md) — SET ASIDE by the builder under the advisory-verdicts ruling, reason recorded: the HOLD's sole cure charge is the A6 measured-fit instrument itself (a character-width table priced as formula-claimed rather than measured rendered ink). That instrument is the lane's demonstrated fit instrument — the identical method and identical HOLD disposition stand at T154 attempt 1 — and no browser binary exists in this seat to produce rendered ink bounds; the limitation is printed as PIXEL-UNVERIFIED in every record of this attempt. No other prewave charge was raised.
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.
Own checks: swap PASS (exact §2 swap: 4 markers human/robot/dome/orb onsets 0/2500/5000/7500 · bubble text "Anyone else?" in effect at 1000 ms · core #57c7e8 in effect; no exception) · purity grep 0 hits · node --check PASS.
Count assertion: RUN §2c table 7 markers vs built 7 — MATCH (harness counts in build-record.md).

| lens | score | return |
|---|---|---|
| motion | 76 | codex/lens-motion.md |
| timing | 64 | codex/lens-timing.md |
| purity | 97 | codex/lens-purity.md |
| reusability | 91 | codex/lens-reusability.md |
| readability | 82 | codex/lens-readability.md |

Arithmetic (recomputed from the filed SCORE lines): 76+64+97+91+82 = 410; average 82.0; minimum 64. Bar: average ≥85 AND minimum ≥70.
**Verdict: FAIL — IN PROGRESS.**
Family baselines: T151 a1 PASS 90.4 · T154 a1 PASS 86.0 — this attempt's 82.0 sits below both.
WHY (against the predicted stuck lens): the Plan predicted REUSABILITY as the stuck lens (icon-glyph literal temptation); that prediction MISSED — reusability scored 91, the glyphSpecs parameterization held under both the swap test and the lens. The actual stuck lens is TIMING at 64 (below the 70 floor; the average also fails at 82.0). Root: the binding §2c even-stepped allocation spreads arrivals across the full 12000 ms, which contradicts the census anchors the schedule was named from — 1 marker at ~2 s (the build has 2 by 2000 ms) and the crowded state by ~7 s (the build has 4 at 7000 ms; the seventh only completes at 11300 ms). Two lenses converge on this (timing primary, motion concurring), and the motion lens additionally names the build-record's own wording — describing 4-at-7000 as "the census crowded-by-~7 s shape" — as unsupported; that wording defect is recorded against the builder. The allocation was RUN-bound for this attempt; the cure belongs to practice (and to the next Plan's allocation form).

Priced cures (for the practice pool):
- timing 64 (<70, blocking): re-allocate the arrival table against the census anchors — second onset after the ~2000 ms lone-marker census point, all seven entrances COMPLETE by ~7000 ms (last onset ≤6500 with enterMs 500), keeping serial pops; this also restores a true settled end hold (entrances complete before endHoldFromMs, with the hold re-based to the crowded state, ~7000–12000).
- motion 76 (<85): (1) the same allocation cure (convergent with timing). (2) Speck twinkle loop discontinuity — the sine's effective period (~6912 ms from cyc/1100) does not divide the 12000 ms cycle, so speck brightness jumps at reset; cure = a continuous twinkle clock or an integer number of sine periods per cycle.
- readability 82 (<85): glyph detail is sub-pixel at 360 px (head diameter 13 px; robot eye dots ~1.3 px, strokes ~1.0–1.4 px) — cure = enlarge pin heads or simplify glyphs so recognition rests on silhouettes, robot and human first. Bubble fit itself passed the lens (ink 110.4 vs 125 container, effective font 15 px, no cure).
Verdict stands FAIL — IN PROGRESS; cures recorded for practice, not blocking this filing.

# scores — T162 Galaxy race table · attempt 2 · Cycle 019 Wave 18 (practice, 2026-11-17)
recreation.html SHA-256: f5e156104f04fb2cf0ae092b4d152d681d400bad525874f796276685c4335afe (identical across all five lens payloads and returns, codex/attempt-2/)
Plan: practice/runs/2026-11-17-cycle-019-wave-18/plan-T162.md (as revised). Build record: build-record-attempt-2.md. Payload manifest: payload-manifest-attempt-2.md (basis packet verified in every payload; anchor scan PASS — bar only, no prior scores in any payload).
PIXEL-UNVERIFIED: no browser binary in this seat; lens scores are source/logic-level.
A6 legs (pre-wave, new attempt): fit-table.md HITs 0 · config-census.md HITs 0 (attempt-1 versions preserved as fit-table-attempt-1.md / config-census-attempt-1.md).
Own checks: swap PASS with effect mappings (incl. supplied-cfg easePow probe) · displayed-state probes bind visibleCount(2000)=1 and visibleCount(7000)=7 with every scale 1.0 and holding true · bubble-over-settled-crowd interval asserted at 7000/8000/8999, across the 9000-9400 exit, and at 9400 · purity grep 0 hits · node --check PASS · self-start PASS.
DEVIATION (printed by the Execute agent): the §9.4 occlusion extension was modelled as head-head pairwise disjointness plus bubble-vs-host-head only; bubble-vs-non-host-head occlusion was not enumerated. The readability lens caught what the model missed: the bubble rectangle fully encloses the RING head at the settled hold (see residual record). The stage-3 model followed the plan's named checks; the general occlusion clause was under-enumerated by the suite.

| lens | score | return |
|---|---|---|
| motion | 86 | codex/attempt-2/lens-motion.md |
| timing | 96 | codex/attempt-2/lens-timing.md |
| purity | 96 | codex/attempt-2/lens-purity.md |
| reusability | 93 | codex/attempt-2/lens-reusability.md |
| readability | 64 | codex/attempt-2/lens-readability.md |

Arithmetic (recomputed from the filed SCORE lines): 86+96+96+93+64 = 435; average 87.0; minimum 64. Bar: average ≥85 AND minimum ≥70.
Delta vs attempt 1 average 82.0: +5.0 (signed). The attempt BEATS its predecessor.
**Verdict: FAIL — IN PROGRESS** (average clears the bar at 87.0; the floor fails — readability 64 < 70). No tier hand-off (PASS only). The §5.4 WHY is not owed (the attempt beats 82.0); the beating-below-bar residual record below is filed instead.
Attribution: timing +32 and motion +10 are JOINTLY attributed to C1+C2 (BUNDLED — shared stage 1; the timing return credits the census-bound allocation and the 5000 ms settled hold in its own wording). C3: motion return notes the crowded hold and continuous twinkle without a discontinuity finding. C5: purity 96 / reusability 93 hold above their aims' floors with the tail literal and the global-easePow dependency closed. C4: readability's glyph-size surface improved on the model's numbers (heads 16 px, robot eyes 1.6 px) but the lens's blocking finding is the occlusion below, not glyph size.

RESIDUAL RECORD (beating-below-bar) — the blocking defect for attempt 3:
Readability 64, blocking finding quoted from codex/attempt-2/lens-readability.md: "the bubble hides the ring marker's entire head during the settled crowd… CONFIG places the ring head at (428,98), radius 16: bounds x412-444, y82-114. The bubble rectangle spans x395-645, y71-117, fully enclosing that head. The SVG renders bubbleG after markers, so the opaque bubble covers the ring glyph through 9000 ms, including the seven-marker hold at 7000 ms. Cure: reposition the bubble or ring marker so the bubble rectangle and tail clear every head throughout their shared visibility."
Filing note (against this build's own record, per the wording law): the attempt-2 build record's occlusion sentence asserted every head's visible fraction = 100% at the 7000 ms hold on a pairwise-disjointness basis; that sentence outran its probes — it did not enumerate the bubble against non-host heads — and is corrected here: at the hold, SIX heads are fully visible and the ring head is fully occluded by the bubble. The geometric relationship (bubble rect vs ring head bounds) also held at headR 13 in attempt 1; attempt 1's readability return did not name it. Attempt 3's first cure: reposition the bubble (or the ring marker) so the bubble rectangle and tail clear every head throughout their shared visibility, with the own-check occlusion model extended to bubble-vs-EVERY-head at every hold instant. Secondary residual (same return): robot eye dots at 1.6 px remain fine-detail-uncertain at phone width — the deferred glyph-simplification cure (plan D1) stays first in line behind the occlusion cure.
