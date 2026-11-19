# T233 — build record · Wave 37 · Cycle 040 · attempt 1

- **Item:** T233 — Tool transformation: pincushion tomato through the grid press · queue #104 · FIRST ATTEMPT · Packet #13 (PES "Fresh Guacamole") @ 39–46 s.
- **Phase A:** `runs/2026-11-18-cycle-040-wave-37/item-T233-observe-plan.md` (§1 Observe + §2 Plan + §2b gate dispositions). Schedule basis: **t=0 allocation** (build 0 = source 40.0 s; offset −1000 ms from segment-relative; CP0 prior-episode departure named).
- **Phase A gates (all fired before any build script, A9.2):** codex-observe CONFIRMED-WITH-GAPS · jev-observe-exit ADVANCE-WITH-GAPS · codex-plan-review REVISE (all cures applied to the Plan) · jev-plan-exit REVISE/UNBOUND-SCHEDULE (all cures applied). Returns in the wave run dir (`item-T233-*-return.md`).
- **Segment binding (guards cmd 5):** cut from packet `source.mp4` (VP9 1920×1080, 100.894 s) at 38.5–46.5 s (window 39–46 ± 0.5 handles) → `segment.mp4`: h264 1920×1080 + AAC, duration 8.000 s, 4,365,662 B, sha256 215c59c90b48bcc04d0e9b29d290cbdc2b11902e67119e5fca11065c852420da.
- **Build:** `recreation.html` — final sha256 **0cac34f496aa0ca3c865b19ff1cdfb3c41ebf75a72ef064bfa16f04652e2cc06**, 16,832 B. SVG single-stage scene, CONFIG at top, pure `stateAt(cfg,t)`, `window.__T233` exposed. `comparison.html` sha256 681ebb1ff408541d8b80b7a6fcedd88a67070253df3c6a84c8f915c5de8288a5 (see cure note: comparison unchanged by the recreation cures; its durationMs derives from recreation.html at runtime).
- **Pre-wave cures (builder-side, before prewave):** (1) occluder float defect — ramp formula returned 0.9999999999999999 at press bottom; cured with explicit branch so opacity = occluderMax exactly at pressRaw ≥ 1 (harness P4/P5/P11 receipts). (2) Fit cure — labelFontPx 21→30, toolLabelFontPx 16→28 under guard-measured-fit's floor (measured rows in fit-table.md). (3) Census cure — 23 subject-shaping literals bound as CONFIG keys + `easeSettle` given a value-flowing site (settleRaw/settleE in stateAt); two sed quote-mangling incidents during the cure were caught by `node --check` and repaired before any check ran on the cured build (recorded here, not hidden). Final harness run below is on the final build.

## Own checks — RAW output (harness: `node harness-t233.js`, artifact dir)

```
SCHEDULE {"stemStart":0,"stemEnd":1000,"pressStart":2000,"pressEnd":3000,"holdEnd":3250,"liftEnd":3500,"gatherStart":4250,"completeAt":6000,"durationMs":7000,"swapAt":3125}
VALIDATE default: null
COUNTS pins=12 stemStar=10 cubes source=18 built=18 cubePx=34 slabW=106 gridCellSpan3=108
PASS P0@0 :: stemRaw=0 stemOp=1
PASS P1 :: raw=0.5 easedOp=0.5
PASS P2@expr(stemEnd+settleDurMs)=2000 :: gridOff=-170
PASS P3 :: raw=0.5 squash=0.81
PASS P4 press-bottom ZERO-anchor :: occ=1 cubeVisible expr cubeTotal*revealP=18*0=0 covers=true
PASS P5 swap@3125 :: inOp=0 armed=1
PASS P6 lift-mid :: liftRaw=0.5 visible=15
PASS P7 reveal-complete :: visible=18/18
PASS P8 gather-mid@5125 :: gatherRaw=0.5 bowlOp=0.5
PASS P9 complete@6000 :: gather=1
PASS P10 hold-identity full-state (t excluded — the instant is not state) :: JSON equal=true
PASS P11 boundary-jump :: diffKeys=["inputOpacity","cubesArmed"] occ[-1,0,+1]=1,1,1
PASS C@0 CP1 stem-on ::
PASS C@1000 CP2 stem-off ::
PASS C@1500 F-2500 settled ::
PASS C@2000 CP3 solo ::
PASS C@2500 F-3500 press-mid==P3 ::
PASS C@3000 CP4 press-bottom==P4 ::
PASS C@3500 F-4500 reveal==P7 ::
PASS C@4000 CP5 slab-hold ::
PASS C@4500 F-5500 gather-departed ::
PASS C@5000 CP6 gather-continues ::
PASS C@6000 CP7 bowl==P9 ::
PASS GEOM cover-covers variant subjectR*1.2 :: covers=true
PASS GEOM slab<=grid :: slabW=106 gridW=252
PASS VALIDATOR occluder<1 rejected :: occluderMax must equal 1
PASS VALIDATOR negative duration rejected :: bad duration pressDurMs
PASS SWAP content pipStyle plain->0 pips :: swapPips=0 defaultPips(top cubes sum)=29
PASS SWAP content labels render :: labels+cubeFill in render
PAIRED-TIMING fixed C@3000 rawPress default=1 swapped=0.625 expectedSwapped=0.625
PAIRED-TIMING shifted P4 instant expr pressStart+pressDurMs default=3000 swapped=3600 swapAt default=3125 swapped=3725
PASS SWAP timing paired ::
PASS SWAP palette cube fill :: fill #2e7ec8 in render=true
RENDER smoke ok
SUMMARY pass=31 fail=0
```

- **Swap test (cmd 2):** content — inputLabel→"ONION", outputLabel→"DICED ONION", palette.cube→#f0ead8, palette.cushion→#e8e0cc, pipStyle "dice"→"plain": pips 29→0, labels + cube fill present in swapped render (harness lines above). Timing — pressDurMs 1000→1600, PAIRED receipt above (fixed C@3000 raw 1→0.625 + shifted P4 instant 3000→3600, swapAt 3125→3725). Palette — palette.cube→#2e7ec8 observed in render. Technique still reads correctly under all three (state assertions re-evaluated under swapped CONFIGs in the harness).
- **Purity (cmd 1):** `grep -nE "segment\.mp4|source\.mp4|<video|<img|DnjdJiwcfY" recreation.html` → **no hits (rc=1), specimen hits 0**. `url(#id)` refs: none present. External loads: none (the only URL string is the SVG xmlns identifier). Asset inventory: recreation.html alone.
- **Syntax + seeded RNG (cmd 3):** `node --check` on both extracted scripts → OK. Seeded RNG present: mulberry32 with `rngSeed` CONFIG (233) — deterministic pip counts (default top-cube pip sum 29 across runs).
- **Comparison check:** labels verbatim ×1 each ("ORIGINAL — PES \"Fresh Guacamole\" @ 39–46 s" · "RECREATION — T233 Tool transformation: grid press, parameterized") · segment.mp4 referenced ×1 (original side only) · `@media (max-width:560px)` stacking ×1 · shared-start clock with the Plan's end-of-clip tail (wall 8500 ms cap; video holds last frame while build completes 6500→7000) · durationMs derived from recreation.html CONFIG at runtime (4 references). **PIXEL-UNVERIFIED** — no browser binary in this seat; the comparison page is the render surface (standing limitation, carried to scores.md).
- **A6 legs:** fit-table.md — 5 measured PROXY rows (PIL, DejaVu Sans Bold), HITs **0** after cure. config-census.md — all literals classified, every key resolved, HITs **0** after cures.

## A13 RECEIPT INDEX (reconciled before prewave payload assembly)
(a) guards.md commands:
- cmd 1 purity — RECEIPT: grep above, 0 specimen hits.
- cmd 2 swap — RECEIPT: harness SWAP lines (content/timing-paired/palette) above.
- cmd 3 syntax + seeded-RNG census — RECEIPT: node --check OK ×2; mulberry32/rngSeed present.
- cmd 4 scores arithmetic — NOT-DEMANDED at builder stage: seat-side recompute after the wave; scores.md will carry the arithmetic with this disposition cited (governing: guards.md cmd 4 is the seat's filing check).
- cmd 5 segment binding — RECEIPT: segment facts above (window, ffprobe, sha).
- cmd 6 fit leg — RECEIPT: fit-table.md, 0 HITs.
- cmd 7 census leg — RECEIPT: config-census.md, 0 HITs.
- cmd 8 census-anchor probes (zero-state anchor stands: P4 output zero at press bottom) — RECEIPT: harness P4 line (cubeVisible from CONFIG expression cubeTotal×revealP = 18×0 = 0, occluder = 1, cover ⊇ subject).
(b) A11 assertions (each: harness command `node harness-t233.js`, CONFIG expression, raw result):
- P0 `stateAt(CONFIG, CONFIG.tStemOffMs)` → 0 ms — PASS (stemRaw 0, stemOpacity 1).
- P1 `stateAt(CONFIG, CONFIG.tStemOffMs + CONFIG.stemOffDurMs/2)` → 500 ms — PASS (raw 0.5, eased opacity 0.5).
- P2 `stateAt(CONFIG, stemEnd + CONFIG.settleDurMs)` → 2000 ms — PASS (gridOffset −170 = −pressTravelPx).
- P3 `stateAt(CONFIG, pressStart + CONFIG.pressDurMs/2)` → 2500 ms — PASS (raw 0.5, squash 0.81).
- P4 `stateAt(CONFIG, pressStart + CONFIG.pressDurMs)` → 3000 ms — PASS (pressRaw 1, occluder 1, cubes 0, cover covers).
- P5 `stateAt(CONFIG, pressStart + CONFIG.pressDurMs + CONFIG.pressHoldMs/2)` → 3125 ms — PASS (inputOpacity 0, armed 1, visible 0).
- P6 `stateAt(CONFIG, holdEnd + CONFIG.liftDurMs/2)` → 3375 ms — PASS (liftRaw 0.5, visible 15 ≥ 9).
- P7 `stateAt(CONFIG, holdEnd + CONFIG.liftDurMs)` → 3500 ms — PASS (visible 18/18, all at slab).
- P8 `stateAt(CONFIG, gatherStart + CONFIG.gatherDurMs/2)` → 5125 ms — PASS (raw 0.5, bowlOpacity 0.5, all cubes in transit).
- P9 `stateAt(CONFIG, completeAtMs)` → 6000 ms — PASS (gather 1, all at bowl slots).
- P10 `stateAt(CONFIG, completeAtMs + 500)` vs P9 — PASS (full-state JSON equal, t excluded).
- P11 swap boundary (swapAt−1/swapAt/swapAt+1) — PASS (diff keys exactly [inputOpacity, cubesArmed]; occluder 1,1,1).
- C@0/1000/1500/2000/2500/3000/3500/4000/4500/5000/6000 fixed census probes — PASS ×11 (harness lines above; timing swap moves C@3000's evaluated raw pressP 1→0.625, paired receipt above).
Reconciliation: index lines = 8 guard commands (7 receipts + 1 NOT-DEMANDED with disposition) + 12 P-assertions + 11 C-probes; planned assertion set (§2.3 as amended) fully covered; expected CONFIG keys incl. nested `pins[].dx/dy/ci`, `stemStar[]`, `palette.*` reconciled in config-census.md §2. No missing line. Prewave may be spent.

## Prewave firing 1 → HOLD · ASSERTED-CHECKS (own-checks 0.3; parameterization 0.9 · purity 1.0 · fidelity 1.0)
Return: run dir `item-T233-jev-prewave-return.md` + artifact `codex/jev-prewave.md`. Named defects, ALL cured in the one cure round below (record/harness/fit-table only — the build itself is unchanged, sha stands): (1) C-probe receipts carried empty details → harness now prints each probe's CONFIG expression + evaluated instant + raw predicate values; (2) F-2500 missing the cushion-at-rest predicate → added (squash 1, grid fully raised, printed); CP5 checked x alone → now x AND y with maxCubeDev printed; (3) timing swap computed but did not execute P4 at the shifted instant → added "SWAP timing P4-at-shifted-instant" executing the full P4 predicate at 3600 under pressDurMs=1600 (observed: pressRaw 1, occ 1, cubeVisible 0, inputOpacity 1, covers true); (4) P4 zero-state printed a literal `18×0` → now prints the OBSERVED per-cube revealRaw sum=0/max=0 + observed cubeVisible; (5) P11 lacked the swapAt→swapAt+1 comparison → added (diff keys [] — no state change in the millisecond after the swap); (6) fit-table tool-label row lacked numeric container/margin → now 364 px span, 88 px/side @640.

### Cure-round own checks — RAW output (`node harness-t233.js` on the cured record; build unchanged)
```
SCHEDULE {"stemStart":0,"stemEnd":1000,"pressStart":2000,"pressEnd":3000,"holdEnd":3250,"liftEnd":3500,"gatherStart":4250,"completeAt":6000,"durationMs":7000,"swapAt":3125}
VALIDATE default: null
COUNTS pins=12 stemStar=10 cubes source=18 built=18 cubePx=34 slabW=106 gridCellSpan3=108
PASS P0@0 :: stemRaw=0 stemOp=1
PASS P1 :: raw=0.5 easedOp=0.5
PASS P2@expr(stemEnd+settleDurMs)=2000 :: gridOff=-170
PASS P3 :: raw=0.5 squash=0.81
PASS P4 press-bottom ZERO-anchor :: occ=1 observed per-cube revealRaw sum=0 max=0 observed cubeVisible=0 covers=true
PASS P5 swap@3125 :: inOp=0 armed=1
PASS P6 lift-mid :: liftRaw=0.5 visible=15
PASS P7 reveal-complete :: visible=18/18
PASS P8 gather-mid@5125 :: gatherRaw=0.5 bowlOp=0.5
PASS P9 complete@6000 :: gather=1
PASS P10 hold-identity full-state (t excluded — the instant is not state) :: JSON equal=true
PASS P11 boundary-jump :: diffKeys(-1->0)=["inputOpacity","cubesArmed"] diffKeys(0->+1)=[] occ[-1,0,+1]=1,1,1
PASS C@0 CP1 stem-on :: expr CONFIG.tStemOffMs => 0ms | raw: stemOpacity=1 pressRaw=0 cubeVisible=0
PASS C@1000 CP2 stem-off :: expr CONFIG.tStemOffMs + CONFIG.stemOffDurMs => 1000ms | raw: stemOpacity=0 stemRaw=1
PASS C@1500 F-2500 settled :: expr stemEnd + CONFIG.settleDurMs/2 => 1500ms | raw: stemOpacity=0 pressRaw=0 squash=1 gridOffsetY=-170 (cushion at rest: squash 1, grid fully raised)
PASS C@2000 CP3 solo :: expr stemEnd + CONFIG.settleDurMs (=pressStart) => 2000ms | raw: pressRaw=0 stemOpacity=0 cubeVisible=0
PASS C@2500 F-3500 press-mid==P3 :: expr pressStart + CONFIG.pressDurMs/2 => 2500ms | raw: pressRaw=0.5 pressE=0.5 squash=0.81
PASS C@3000 CP4 press-bottom==P4 :: expr pressStart + CONFIG.pressDurMs => 3000ms | raw: pressRaw=1 occluder=1 cubeVisible=0 inputOpacity=1
PASS C@3500 F-4500 reveal==P7 :: expr holdEnd + CONFIG.liftDurMs => 3500ms | raw: cubeVisible=18/18 inputOpacity=0 liftRaw=1
PASS C@4000 CP5 slab-hold :: expr holdEnd + CONFIG.liftDurMs + 500 [census-fixed CP5 instant inside slabHoldMs window] => 4000ms | raw: cubeVisible=18 gatherRaw=0 maxCubeDev=0
PASS C@4500 F-5500 gather-departed :: expr gatherStart + 250 [census-fixed] => 4500ms | raw: gatherRaw=0.14285714285714285 departedCubes=18
PASS C@5000 CP6 gather-continues :: expr gatherStart + 750 [census-fixed] => 5000ms | raw: gatherRaw=0.42857142857142855 bowlOpacity=0.36734693877551017
PASS C@6000 CP7 bowl==P9 :: expr completeAtMs (=gatherStart + CONFIG.gatherDurMs) => 6000ms | raw: gatherRaw=1 bowlOpacity=1 fullStateEqP9=true
PASS GEOM cover-covers variant subjectR*1.2 :: covers=true
PASS GEOM slab<=grid :: slabW=106 gridW=252
PASS VALIDATOR occluder<1 rejected :: occluderMax must equal 1
PASS VALIDATOR negative duration rejected :: bad duration pressDurMs
PASS SWAP content pipStyle plain->0 pips :: swapPips=0 defaultPips(top cubes sum)=29
PASS SWAP content labels render :: labels+cubeFill in render
PAIRED-TIMING fixed C@3000 rawPress default=1 swapped=0.625 expectedSwapped=0.625
PAIRED-TIMING shifted P4 instant expr pressStart+pressDurMs default=3000 swapped=3600 swapAt default=3125 swapped=3725
PASS SWAP timing paired ::
PASS SWAP timing P4-at-shifted-instant :: at 3600 under pressDurMs=1600: pressRaw=1 occ=1 cubeVisible=0 inputOpacity=1 covers=true
PASS SWAP palette cube fill :: fill #2e7ec8 in render=true
RENDER smoke ok
SUMMARY pass=32 fail=0
```
A6 legs on the cured record: fit-table.md re-filed (tool-label row numeric; measurements unchanged, build unchanged) HITs 0 · config-census.md unchanged (build unchanged) HITs 0. A13 index: the C-probe line and P4/P11 lines above are superseded by these cured receipts; all other index lines stand.

## Prewave firing 2 → HOLD · ASSERTED-CHECKS (own-checks 0.3; parameterization 0.9 · purity 1.0 · fidelity 1.0)
Return: run dir `item-T233-jev-prewave-2-return.md` + artifact `codex/jev-prewave-2.md`. **Second HOLD — per A12.3 the item STOPS here: NO VERDICT, the five-lens wave is NOT fired on this build.** The priced cure list for the completion cycle stands in scores.md. Firing-2 findings (priced, not disputed): (1) the 11 C probes execute literal times with the CONFIG expression as a label string — each fixed probe needs a paired EXECUTABLE CONFIG-derived assertion whose instant is computed, with both evaluated times printed and the assertion shown moving under the timing swap; (2) P7's grid-at-rest predicate unexecuted · P11's post-swap diff printed but not required empty in the check condition · C probes labeled ==P3/P4/P7 check subsets of those predicates — enforce the full predicates with observed results at all three P11 instants; (3) config-census §2 lacks explicit entries for seamStrokePx + cushionStrokePx (both declared + applied at render lines 169/172); (4) fit-table tool-label row omits the vertical edge — at stem-on the tool label's baseline computes to −102 px on the 640 stage (it rides the raised grid, off-stage until the press descends): the completion cure records its intended visibility interval + vertical clearance measurement over that interval.

## Cycle 041 · Wave 38 — A12.3 COMPLETION (the four priced cures from scores.md, applied ONLY)
Build UNCHANGED: recreation.html sha256 **0cac34f496aa0ca3c865b19ff1cdfb3c41ebf75a72ef064bfa16f04652e2cc06** (16,832 B) — all four cures are harness/record/leg cures; no build line was touched. Harness rewritten: `harness-t233.js` sha256 0125f8a67f4eba529e05ab1822fd175e73ee6336e31633a4ef00b6a1c5bdfaf2.
- **Cure 1 — executable CONFIG-derived companions:** every fixed census probe (C@0…C@6000 ×11, census-fixed instants kept) gains a COMP companion whose evaluation instant is COMPUTED in harness code from CONFIG expressions (schedule anchors derived in code: stemEnd/pressStart/holdEnd/liftEnd/gatherStart from CONFIG fields; CP5 via `liftEnd + CONFIG.slabHoldMs*2/3`, F-5500 via `gatherStart + CONFIG.gatherDurMs/7`, CP6 via `gatherStart + CONFIG.gatherDurMs*3/7`). Both evaluated times + observed predicates print on every COMP line. Timing-swap demonstration (pressDurMs 1000→1600): COMPANION CP4 instant moves 3000→3600 with the FULL P4 predicate executed at the moved instant; COMPANION F-3500 moves 2500→2800 with FULL P3 (receipts below).
- **Cure 2 — full-predicate enforcement:** P3/P4/P7/P9 predicates are shared code functions (`predP3/predP4/predP7/predP9`) executed identically by the P assertions, the fixed C probes, and the companions — the ==P3/==P4/==P7 labels are executed equalities. P7 gains its grid-at-rest predicate: gridOffsetY = −76.5 observed vs the CONFIG expression `−pressTravelPx × liftTravelFraction` = −76.5 printed. P11's check condition now REQUIRES the post-swap diff EMPTY (`diffAfter.length===0` is a conjunct of the PASS condition) with all three instants' observed values filed (obs@3124/3125/3126: inOp 1→0→0, armed 0→1→1, occ 1,1,1, squash 0.62, gridOff 0).
- **Cure 3 — census completion:** config-census.md §2 gains explicit application-site entries for `seamStrokePx` (seam line stroke-width, render) and `cushionStrokePx` (cushion circle stroke-width, render); mechanical reconciliation (node): 103 CONFIG keys extracted (incl. palette.* + pins[].dx/dy/ci + stemStar) checked by name against the census — after §2 was amended to name combined-notation keys explicitly, **missing = []**. Census §4 files the reconciliation. HITs 0.
- **Cure 4 — fit vertical edge (builder's choice, priced):** RECORD the intended visibility interval + measured clearance (no re-anchor). Rationale: the tool label is the press's nameplate and rides its tool by construction; re-anchoring it to the stage would detach the label from the tool it names. fit-table.md's new vertical-accounting section files the measured table (instrument: harness stateAt gridOffsetY samples + PIL ink 188×20, ink = baseline−20→baseline): baseline −102 at rest (fully above the 640×400 stage), ink enters at t=2553, fully visible ≈2625–3392 ms with top clearance 48 px / bottom clearance 332 px at press bottom + hold, ink exits at 3441 as the tool withdraws. HITs 0; all five horizontal rows re-measured identical this cycle (PIL DejaVu Sans Bold PROXY).

### Completion own checks — RAW output (`node harness-t233.js`, cured harness on the unchanged build)
```
SCHEDULE {"stemStart":0,"stemEnd":1000,"pressStart":2000,"pressEnd":3000,"holdEnd":3250,"liftEnd":3500,"gatherStart":4250,"completeAt":6000,"durationMs":7000,"swapAt":3125}
VALIDATE default: null
COUNTS pins=12 stemStar=10 cubes source=18 built=18 cubePx=34 slabW=106 gridCellSpan3=108
PASS P0@0 :: stemRaw=0 stemOp=1
PASS P1 :: raw=0.5 easedOp=0.5
PASS P2@expr(stemEnd+settleDurMs)=2000 :: gridOff=-170
PASS P3 :: pressRaw=0.5 pressE=0.5 squash=0.81
PASS P4 press-bottom ZERO-anchor :: occ=1 observed per-cube revealRaw sum=0 max=0 observed cubeVisible=0 covers=true
PASS P5 swap@3125 :: inOp=0 armed=1
PASS P6 lift-mid :: liftRaw=0.5 visible=15
PASS P7 reveal-complete + grid-at-rest :: cubeVisible=18/18 inputOpacity=0 liftRaw=1 gridOffsetY=-76.5 gridRestY(expr -pressTravelPx*liftTravelFraction)=-76.5 maxCubeDev=0
PASS P8 gather-mid@5125 :: gatherRaw=0.5 bowlOp=0.5
PASS P9 complete@6000 :: gatherRaw=1 bowlOpacity=1 maxBowlDev=0
PASS P10 hold-identity full-state (t excluded — the instant is not state) :: JSON equal=true
PASS P11 boundary-jump + post-swap diff EMPTY (required) :: diffKeys(-1->0)=["inputOpacity","cubesArmed"] diffKeys(0->+1)=[] (empty required: true) obs@3124={inOp=1 armed=0 occ=1 squash=0.62 gridOff=0} obs@3125={inOp=0 armed=1 occ=1 squash=0.62 gridOff=0} obs@3126={inOp=0 armed=1 occ=1 squash=0.62 gridOff=0}
PASS C@0 CP1 stem-on :: expr CONFIG.tStemOffMs => 0ms | raw: stemOpacity=1 pressRaw=0 cubeVisible=0
PASS C@1000 CP2 stem-off :: expr CONFIG.tStemOffMs + CONFIG.stemOffDurMs => 1000ms | raw: stemOpacity=0 stemRaw=1
PASS C@1500 F-2500 settled :: expr stemEnd + CONFIG.settleDurMs/2 => 1500ms | raw: stemOpacity=0 pressRaw=0 squash=1 gridOffsetY=-170 (cushion at rest: squash 1, grid fully raised)
PASS C@2000 CP3 solo :: expr stemEnd + CONFIG.settleDurMs (=pressStart) => 2000ms | raw: pressRaw=0 stemOpacity=0 cubeVisible=0
PASS C@2500 F-3500 press-mid==P3 FULL :: expr pressStart + CONFIG.pressDurMs/2 => 2500ms | raw: pressRaw=0.5 pressE=0.5 squash=0.81
PASS C@3000 CP4 press-bottom==P4 FULL :: expr pressStart + CONFIG.pressDurMs => 3000ms | raw: pressRaw=1 occluder=1 cubeVisible=0 inputOpacity=1 covers=true revealRawSum=0
PASS C@3500 F-4500 reveal==P7 FULL :: expr holdEnd + CONFIG.liftDurMs => 3500ms | raw: cubeVisible=18/18 inputOpacity=0 liftRaw=1 gridOffsetY=-76.5 gridRestY(expr -pressTravelPx*liftTravelFraction)=-76.5 maxCubeDev=0
PASS C@4000 CP5 slab-hold :: expr holdEnd + CONFIG.liftDurMs + 500 [census-fixed CP5 instant inside slabHoldMs window] => 4000ms | raw: cubeVisible=18 gatherRaw=0 maxCubeDev=0
PASS C@4500 F-5500 gather-departed :: expr gatherStart + 250 [census-fixed] => 4500ms | raw: gatherRaw=0.14285714285714285 departedCubes=18
PASS C@5000 CP6 gather-continues :: expr gatherStart + 750 [census-fixed] => 5000ms | raw: gatherRaw=0.42857142857142855 bowlOpacity=0.36734693877551017
PASS C@6000 CP7 bowl==P9 :: expr completeAtMs (=gatherStart + CONFIG.gatherDurMs) => 6000ms | raw: gatherRaw=1 bowlOpacity=1 fullStateEqP9=true
PASS COMP CP1 stem-on :: fixed=0ms computed=0ms expr CONFIG.tStemOffMs | raw: stemOpacity=1 pressRaw=0 cubeVisible=0
PASS COMP CP2 stem-off :: fixed=1000ms computed=1000ms expr CONFIG.tStemOffMs + CONFIG.stemOffDurMs | raw: stemOpacity=0 stemRaw=1
PASS COMP F-2500 settled :: fixed=1500ms computed=1500ms expr (CONFIG.tStemOffMs + CONFIG.stemOffDurMs) + CONFIG.settleDurMs/2 | raw: stemOpacity=0 pressRaw=0 squash=1 gridOffsetY=-170
PASS COMP CP3 solo :: fixed=2000ms computed=2000ms expr (CONFIG.tStemOffMs + CONFIG.stemOffDurMs) + CONFIG.settleDurMs | raw: pressRaw=0 stemOpacity=0 cubeVisible=0
PASS COMP F-3500 press-mid==P3 FULL :: fixed=2500ms computed=2500ms expr pressStart + CONFIG.pressDurMs/2 [pressStart derived in code] | raw: pressRaw=0.5 pressE=0.5 squash=0.81
PASS COMP CP4 press-bottom==P4 FULL :: fixed=3000ms computed=3000ms expr pressStart + CONFIG.pressDurMs [pressStart derived in code] | raw: pressRaw=1 occluder=1 cubeVisible=0 inputOpacity=1 covers=true revealRawSum=0
PASS COMP F-4500 reveal==P7 FULL :: fixed=3500ms computed=3500ms expr holdEnd + CONFIG.liftDurMs [holdEnd derived in code] | raw: cubeVisible=18/18 inputOpacity=0 liftRaw=1 gridOffsetY=-76.5 gridRestY(expr -pressTravelPx*liftTravelFraction)=-76.5 maxCubeDev=0
PASS COMP CP5 slab-hold :: fixed=4000ms computed=4000ms expr liftEnd + CONFIG.slabHoldMs*2/3 [liftEnd derived in code] | raw: cubeVisible=18 gatherRaw=0 maxCubeDev=0
PASS COMP F-5500 gather-departed :: fixed=4500ms computed=4500ms expr gatherStart + CONFIG.gatherDurMs/7 [gatherStart derived in code] | raw: gatherRaw=0.14285714285714285 departedCubes=18
PASS COMP CP6 gather-continues :: fixed=5000ms computed=5000ms expr gatherStart + CONFIG.gatherDurMs*3/7 [gatherStart derived in code] | raw: gatherRaw=0.42857142857142855 bowlOpacity=0.36734693877551017
PASS COMP CP7 bowl==P9 FULL :: fixed=6000ms computed=6000ms expr gatherStart + CONFIG.gatherDurMs [gatherStart derived in code] | raw: gatherRaw=1 bowlOpacity=1 maxBowlDev=0 fullStateEqP9=true
PASS GEOM cover-covers variant subjectR*1.2 :: covers=true
PASS GEOM slab<=grid :: slabW=106 gridW=252
PASS VALIDATOR occluder<1 rejected :: occluderMax must equal 1
PASS VALIDATOR negative duration rejected :: bad duration pressDurMs
PASS SWAP content pipStyle plain->0 pips :: swapPips=0 defaultPips(top cubes sum)=29
PASS SWAP content labels render :: labels+cubeFill in render
PAIRED-TIMING fixed C@3000 rawPress default=1 swapped=0.625 expectedSwapped=0.625
PAIRED-TIMING shifted P4 instant expr pressStart+pressDurMs default=3000 swapped=3600 swapAt default=3125 swapped=3725
PASS SWAP timing paired ::
PASS SWAP timing P4-at-shifted-instant FULL :: at 3600 under pressDurMs=1600: pressRaw=1 occluder=1 cubeVisible=0 inputOpacity=1 covers=true revealRawSum=0
SWAP-TIMING COMPANION CP4 instant expr pressStart+pressDurMs default=3000 swapped=3600 | swapped-state: pressRaw=1 occluder=1 cubeVisible=0 inputOpacity=1 covers=true revealRawSum=0
SWAP-TIMING COMPANION F-3500 instant expr pressStart+pressDurMs/2 default=2500 swapped=2800 | swapped-state: pressRaw=0.5 pressE=0.5 squash=0.81
PASS SWAP timing COMPANION CP4 moves + FULL P4 at moved instant :: default 3000 -> swapped 3600
PASS SWAP timing COMPANION F-3500 moves + FULL P3 at moved instant :: default 2500 -> swapped 2800
PASS SWAP palette cube fill :: fill #2e7ec8 in render=true
RENDER smoke ok
SUMMARY pass=45 fail=0
```
- **Purity (cmd 1, re-run):** grep `segment\.mp4|source\.mp4|<video|<img|DnjdJiwcfY` on recreation.html → 0 hits (grep rc=1). **Syntax (cmd 3):** `node --check harness-t233.js` OK; recreation scripts unchanged since Wave-37's OK ×2; seeded RNG mulberry32/rngSeed 233 stands. **Comparison check:** unchanged (comparison.html sha 681ebb1f… stands; PIXEL-UNVERIFIED standing limitation).
- **A6 legs on the cured record:** fit-table.md — HITs **0** (rows re-measured identical + vertical accounting added). config-census.md — HITs **0** (§2 completed + §4 reconciliation, missing = []).

### A13 RECEIPT INDEX — completion reconciliation (assertion set inherited WHOLE from Wave 37; nothing dropped)
(a) guards.md commands:
- cmd 1 purity — RECEIPT: grep above, 0 specimen hits (re-run Cycle 041).
- cmd 2 swap — RECEIPT: harness SWAP lines above (content pips 29→0 + labels/fill · timing paired fixed+shifted · timing companions moved · palette fill observed).
- cmd 3 syntax + seeded-RNG census — RECEIPT: node --check OK (harness; build scripts unchanged); mulberry32/rngSeed present.
- cmd 4 scores arithmetic — NOT-DEMANDED at builder stage: seat-side recompute after the wave (governing: guards.md cmd 4 is the seat's filing check) — disposition stands from Wave 37.
- cmd 5 segment binding — RECEIPT: stands from Wave 37 (segment.mp4 unchanged: 8.000 s, sha256 215c59c9…).
- cmd 6 fit leg — RECEIPT: fit-table.md, 0 HITs (Cycle-041 re-measurement + vertical accounting).
- cmd 7 census leg — RECEIPT: config-census.md, 0 HITs (§4 mechanical reconciliation, 103 keys, missing = []).
- cmd 8 census-anchor probes (zero-state anchor: P4) — RECEIPT: harness P4 line (observed per-cube revealRaw sum=0/max=0, cubeVisible=0, occluder=1, cover covers).
(b) A11 assertions — inherited whole (12 P + 11 fixed C), each with harness command `node harness-t233.js`, CONFIG expression, and raw result in the RAW block above; P7 and P11 strengthened per cure 2 (no assertion removed; two strengthened, none dropped — A13.2 satisfied with no disposition needed). ADDED by cure 1 (new lines, not replacements): 11 COMP companions + 2 SWAP-TIMING COMPANION checks, receipts in the same RAW block.
Reconciliation: 8 guard commands (7 receipts + 1 NOT-DEMANDED with disposition) + 12 P-assertions + 11 fixed C-probes + 11 companions + 2 companion-swap checks; expected CONFIG keys (103, nested/array incl.) reconciled in config-census.md §4. No missing line. The single A12.3 completion jev-prewave re-fire may be spent.

## Prewave completion re-fire (Cycle 041, the ONE A12.3 re-fire) → HOLD · ASSERTED-CHECKS
Return: run dir `item-T233-jev-prewave-completion-return.md` + artifact `codex/jev-prewave-completion-cycle041.md` (verbatim, sha256 452aa011…). Dimensions: parameterization 0.9 · purity 1.0 · own-checks 0.4 · fidelity 1.0. Disposition: APPLIED — **NO VERDICT; the five-lens wave is NOT fired** (per task charge + A12.3 form). Cures 3 (census) and 4 (fit vertical) are priced CURED by the return (§§3–4 of the return, independently reproduced by the judge); cure 1 is priced partially (companions execute; swap receipts cover only 2 of the 7 companions that move under pressDurMs 1000→1600 — F-4500/CP5/F-5500/CP6/CP7 move +600 and file no swapped executions); cure 2 is priced partially (strengthened predicates execute, but inherited P-receipts omit required observations: P0 press progress + cube count · P2 stem opacity + press progress · P5 cube count + occluder · P8 all-cube transit count). The priced next cure list stands in scores.md. The return's Limits note (harness absent at the sync-staging artifact path, ENOENT — the judge read the staging mirror, not this artifact directory, where harness-t233.js stands and ran 45/0) is recorded as a feed/environment note; the two substantive findings are priced on the filed receipts themselves and are not disputed. Any further re-fire is PENDING AUTHORIZATION (per Wave-38 RUN §1–§2) — not fired here.
