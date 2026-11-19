# T218 — build record · Cycle 039 Wave 36 · FIRST ATTEMPT

- **Item:** T218 — North/South population tiles (free vs enslaved) · queue #100 · Packet #12 (Vox "The Electoral College, explained").
- **Plan authority:** `runs/2026-11-18-cycle-039-wave-36/item-T218-observe-plan.md` AS AMENDED at its §2b (four gates fired before any build script, A9.2: codex-observe CONFIRMED-WITH-GAPS · jev-observe-exit RETURN-TO-OBSERVE/MECHANICS-UNSEEN cured by the fine census + §1.5 sibling-cure carry · codex-plan-review REVISE applied · jev-plan-exit REVISE/UNBOUND-SCHEDULE applied).
- **Schedule basis:** t=0 allocation (buildMs = sourceMs − 277000; tile lifecycle source 277–298 s inside the 271–305 s window; departure table in the item record §2.3).
- **Final build:** recreation.html sha256 `50b854e7ca8b2cec267e94a698154578823c812bd69f24bdc3204a3b6c28c182` · 16,968 B. Cure rounds on the build: (1) fit cure ×2 — CONFIG fonts raised on PIL measured ink (fit-table.md); (2) census cure — arrow geometry literals (9 / 0.42 / 18) bound into CONFIG as arrowHeadPx/arrowHeadSpread/arrowLiftPx; (3) **prewave cure round** (after jev-prewave firing 1 HOLD, §6): schedule correction tFreeMs 2500→3000 + freeDurMs 2500→2000 (F-9000 growth-start cure — free end unchanged at 5000), camp-gated frame thickness in stateAt, free-arrow opacity decoupled from the free label (`freeArrowOpacity`). All receipts below are from the final build.
- **Construction:** single SVG scene; CONFIG at top; per-tile frame rect (enslaved colour, behind, grows outward, South camp only) + tile rect (grey→teal lerp) + wrapped name label; camp headers; centre rule labels with target-resolved arrows; one pure `stateAt(cfg,t)` evaluator exposed as `window.__T218`.

## §1 Segment binding (guards.md command 5)
Cut at Execute from the archived source `hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/source.webm` (488.301 s, vp9 1920×1080): `ffmpeg -ss 270.5 -t 35.0`, re-encoded libx264/yuv420p + AAC, faststart.
Raw ffprobe of `segment.mp4`:
```
codec_name=h264
width=1920
height=1080
codec_name=aac
duration=35.029870
size=4817921
f6a87a23ff8aeb32918ae4abe0d58a3a0f9114ec16c004a063eb65e012ca40a3  segment.mp4
```
Window check: cut covers source 270.5–305.5 s ⊇ packet window 271–305 s (±0.5 s handles) ✓.

## §2 Own checks — raw harness output (A9.4; harness = node, CONFIG + logic scripts extracted from recreation.html and evaluated via vm; final build)
```
PASS VALIDATE-DEFAULT :: errors=[]
PASS DERIVE :: completeAtMs=18500 durationMs=21000 freeEndMs=5000
PASS COUNT-SOURCE-VS-BUILT :: source=12 built=12
PASS GEOMETRY-NO-TILE-OVERLAP :: all 66 pairs disjoint
PASS GEOMETRY-FRAMES-IN-STAGE :: all frames within 640x400
PASS Z0@0 :: expr tAppearMs=0 opacity=0.55 scale=0.18
PASS P1@1500 :: expr tAppearMs+appearDurMs=1500 scale=0.5
PASS P2@4000 :: expr tFreeMs+freeDurMs/2=4000 rawPhase=0.5 eased=0.5 scales=0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75
PASS P3@5000 :: expr tFreeMs+freeDurMs=5000 freeLabelP=1 arrowsP=1 freeArrowOpacity=1
PASS P4@10500 :: expr labelOutMid=10500 freeLabelOpacity=0.5
PASS P5@11000 :: expr labelOutEnd=11000 frames=0,0,0,0,0,0,0,0,0,0,0,0
PASS P6@14500 :: expr tEnslavedMs+enslavedDurMs/2=14500 rawPhase=0.5 eased=0.5 frames=7.5,5.5,4,1.5,4,2,1.5,0,0,0,0,0 scales=1,1,1,1,1,1,1,1,1,1,1,1
PASS P7@15000 :: expr framesEnd=15000 frames=Virginia:15 North Carolina:11 South Carolina:8 Delaware:3 Maryland:8 Georgia:4 New Jersey:3 New York:0 Pennsylvania:0 Connecticut:0 Massachusetts:0 New Hampshire:0 scales=1,1,1,1,1,1,1,1,1,1,1,1
PASS P8@18500 :: expr completeAtMs=18500 frames=15,11,8,3,8,4,3,0,0,0,0,0
PASS P9@19000 :: expr completeAtMs+500=19000 full tile-state equality vs P8
PASS C@2000 :: census CP4 8000 small-tile: scale=0.5 freeP=0
PASS C@3000-F9000 :: fine F-9000 (source 280) small hold at growth start: expr tFreeMs=3000 rawPhase=0 scale=0.5
PASS C@4000 :: census CP5 10000 mid-growth: freeP=0.5 arrowsP=1 freeLabelP=0.2222222222222222 freeArrowOpacity=1
PASS C@6000 :: census CP6 12000 = fine F-11000 (source 282): tiles equal P3, freeLabelOpacity=1
PASS C@8000 :: census CP7 14000 free hold with label: freeLabelOpacity=1 frames=0,0,0,0,0,0,0,0,0,0,0,0
PASS C@10000 :: census CP8 16000 label present at label-out start: freeLabelOpacity=1
PASS C@11000-F17000 :: fine F-17000 (source 288) label gone: freeLabelOpacity=0 (= P5 instant)
PASS C@12000 :: census CP9 18000 label gone: freeLabelOpacity=0
PASS C@14000 :: census CP10 20000 bare hold at enslaved start: enslavedRaw=0 frames=0,0,0,0,0,0,0,0,0,0,0,0
PASS C@15500-F21000 :: fine F-21000 (source 292) frames full + label mid-reveal: enslavedLabelP=0.5 frames=15,11,8,3,8,4,3,0,0,0,0,0
PASS C@16000 :: census CP11 22000 enslaved complete: frames=15,11,8,3,8,4,3,0,0,0,0,0 enslavedLabelP=1
PASS C@17000-F23000 :: fine F-23000 (source 294) label complete before out: enslavedLabelOpacity=1
PASS C@18000 :: census CP12 24000 label-out mid: enslavedLabelOpacity=0.5 frames=15,11,8,3,8,4,3,0,0,0,0,0
PASS C@20000 :: census CP13 26000 = fine F-27000 form: enslavedLabelOpacity=0 frames=15,11,8,3,8,4,3,0,0,0,0,0
PASS SWAP-CONTENT :: frames Alpha:10 Beta:5 Gamma:0 (north tile WITH enslavedPx 9 camp-gated to 0) Delta:0 arrowTargets=Alpha,Gamma
PASS SWAP-TIMING-ENSLAVED :: tEnslavedMs 14000->15000 (+label phases ride): P6 14500->15500 P7 15000->16000 completeAt 18500->19500; at C@16000 instant: default enslavedLabelP=1 swapped enslavedLabelP=0 frames identical at this instant (both full) — the frame movement is receipted at the P7 instant by MOVE@15000
MOVE@15000 :: default VA frame=15 swapped(tEnslavedMs=15000) VA frame=0
PASS SWAP-TIMING-REJECTED-LABEL :: errors=["phase order: free label end 8500 after free end 5000"]
PASS SWAP-TIMING-REJECTED-ENSLAVED :: errors=["phase order: enslaved start 9000 before label-out end 11000"]
PASS SWAP-TIMING-BOUNDARY :: tEnslavedMs=labelOutEnd(11000) accepted
SUMMARY pass=34 fail=0
```
Renderer-level receipts (stub-DOM execution of the actual render script, final build):
```
MOVE@15000 :: default VA frame=15 swapped(tEnslavedMs=15000) VA frame=0
ARROW-RENDER@4000 :: free arrow path opacities=[1,1] (renderer-level: arrows fully visible at C@4000 while free label partial)
PALETTE-RENDERED :: default frame fills contain #c85a2e: true (count 12) :: swapped frame fills contain #2e7ec8: true (count 12) :: swapped still contains #c85a2e: false
```
Syntax (command 3): `node --check` rc=0 on all three recreation script blocks (t218-config · t218-logic · t218-render) and on the comparison script, re-run on the final build. RNG census: `Math.random` grep count 0 — **RNG ABSENT**.
Purity grep (command 1) raw, re-run on the final build: pattern `segment\.mp4|source\.webm|source\.mp4|<video|<img|ajavsMbCapY` over recreation.html → **0 hits**. `url(#id)` scan → no occurrences. External-asset scan (`src=|href=|@import|url(`) → no matches (the SVG namespace string is an identifier URI in `createElementNS` calls, never fetched) — **NO EXTERNAL REFERENCES**; asset inventory = recreation.html alone.
Comparison check: comparison.html receipts — labels verbatim ("ORIGINAL — Vox Electoral College @ 4:31–5:05" · "RECREATION — T218 North/South population tiles, parameterized") · sync mapping evaluates (video 13.0 s → sourceMs 283500 → buildMs 6500; formula `sourceMs = 270500 + currentTime×1000`, clamp derived at runtime from recreation.html's CONFIG: durationMs 21000) · phone stacking `@media (max-width:560px)` column rule + sticky controls · comparison script syntax rc=0. Browser playback is not exercisable in this seat — PIXEL-UNVERIFIED, carried to scores.md.

**Checkpoint-to-assertion index (jev-prewave firing-1 cure 1):** every in-scope census checkpoint now carries an executable assertion above — CP0/CP1 (map lead-in, outside the technique) and CP2 (transition) are covered by the Plan §2.3 departure table; CP3 = Z0 (mid-fade zero-state); CP4 = C@2000; CP5 = C@4000; CP6 = C@6000; CP7 = C@8000; CP8 = C@10000; CP9 = C@12000; CP10 = C@14000; CP11 = C@16000; CP12 = C@18000; CP13 = C@20000; CP14–CP17 (exit + T219) are covered by the Plan §2.3 departure table. Fine frames: F-9000 = C@3000-F9000 (schedule corrected so the small-tile hold matches: tFreeMs 3000) · F-11000 = C@6000 · F-17000 = C@11000-F17000 · F-21000 = C@15500-F21000 · F-23000 = C@17000-F23000 · F-27000 = C@20000 form.

## §3 A6 legs (on the final build)
- fit-table.md — REPLACED in the cure round (firing-1 finding 3): complete re-measure on the final build with per-row container bounds + signed stage margins; **5 HITs carried with dispositions** (ink floor proximity min 10.41 px @360 · Pennsylvania proxy stage margin −5.5 · Massachusetts −12.1 · Delaware left-edge −0.8 · tile-label box-overflow class priced in Plan §2.5).
- config-census.md — 0 HITs: all literals classified, every CONFIG key incl. nested `tiles[]` keys (and `tiles[].labelFontPx`) resolved to value-flowing sites, no CSS variables in use. Re-verified on the cured build (cure changed two values, no keys/sites).

## §4 Fidelity plan (implemented / deferred)
Implemented: two labelled camps with headers (SB-A) · tile fade-in at small size · growth to free-population area with grey→teal shift (SB-B) · twin free arrows drawn on their own phase, fully visible while the free label is still revealing (renderer receipt ARROW-RENDER@4000; the arrows fade with the label-out via `freeArrowOpacity = arrowsP × (1 − labelOutP)`) + free label completing with the growth (SB-C) · free label/arrows removal, bare free hold (SB-D) · enslaved frames growing outward on South-camp tiles only — camp-gated in stateAt, so a north tile carrying an enslavedPx value still renders no frame (SWAP-CONTENT receipt) — tile scale unchanged (SB-E) · enslaved label + arrow reveal, then its removal (SB-F) · final hold (SB-G). Deferred (named, lawful): the colonial-map lead-in (source 271–277 s — a different visual device) · state-silhouette glyphs inside tiles (tracing risk; identity carried by name labels) · the three-fifths banner/person at the window tail (T219, queue #101).

## §5 RECEIPT INDEX (A13) — reconciled before payload assembly
Reconciliation performed against: guards.md commands 1–8 · the amended Plan's A11 assertions (Z0, P1–P9, C@2000/3000/4000/6000/8000/10000/11000/12000/14000/15500/16000/17000/18000/20000) · expected CONFIG keys incl. nested/array `tiles[]` keys (config-census §2 = the expected set). Result: **no missing expected line; every line below carries its receipt or a NOT-DEMANDED line with a governing citation.**

| Index line | Receipt / disposition |
|---|---|
| cmd 1 — purity grep | §2 raw: 0 hits on the final build; `url(#id)` none to classify |
| cmd 2 — swap test | §2 raw: SWAP-CONTENT (camp-gated north tile) · SWAP-TIMING-ENSLAVED (moved instants P6 14500→15500, P7 15000→16000, completeAt 18500→19500; C@16000 label change printed, frame identity at that instant stated plainly) · MOVE@15000 movement receipt · SWAP-TIMING-REJECTED-LABEL · SWAP-TIMING-REJECTED-ENSLAVED · SWAP-TIMING-BOUNDARY · PALETTE-RENDERED · ARROW-RENDER@4000 — all PASS |
| cmd 3 — syntax + RNG census | §2: node --check rc=0 ×4 scripts on the final build · RNG ABSENT (grep 0) |
| cmd 4 — scores arithmetic | NOT-DEMANDED for the builder record — seat-side at consolidation (INSTRUCTION §5.5) |
| cmd 5 — segment binding | §1 raw ffprobe: 35.029870 s, h264 1920×1080, covers 270.5–305.5 ⊇ window 271–305 |
| cmd 6 — measured-fit leg | fit-table.md (cure-round replacement): 5 HIT rows carried with dispositions; PIL rows + geometry on its face |
| cmd 7 — config-census leg | config-census.md: 0 HITs; key→site table on its face; re-verified on the cured build |
| cmd 8 — census-anchor zero-state probe | §2 Z0@0 PASS — the window's tile zero-state is a MID-FADE state by census (CP3), prescribed as opacity = CONFIG.appearStartOpacity at t = CONFIG.tAppearMs with the departure printed in Plan §2.3; no zero-tile census anchor exists in this window |
| A11 Z0 @0 | §2 Z0@0 — CONFIG expression: stateAt(CONFIG, CONFIG.tAppearMs) = 0 ms; opacity 0.55, scale 0.18 |
| A11 P1 @1500 | §2 P1 — expression: tAppearMs + appearDurMs = 1500; scale = smallFraction |
| A11 P2 @4000 | §2 P2 — expression: tFreeMs + freeDurMs/2 = 4000 (instant moved by the cure-round schedule correction); rawPhase 0.5 and eased 0.5 printed separately; all 12 scales printed |
| A11 P3 @5000 | §2 P3 — expression: tFreeMs + freeDurMs = 5000; freeLabelP 1, arrowsP 1, freeArrowOpacity 1 |
| A11 P4 @10500 | §2 P4 — expression: tFreeLabelOutMs + freeLabelOutDurMs/2 = 10500; freeLabelOpacity 0.5 |
| A11 P5 @11000 | §2 P5 — expression: label-out end = 11000; all 12 frames 0 (full predicate printed) |
| A11 P6 @14500 | §2 P6 — expression: tEnslavedMs + enslavedDurMs/2 = 14500; rawPhase 0.5 / eased 0.5 separately; all 12 frames AND all 12 scales printed (full predicate) |
| A11 P7 @15000 | §2 P7 — expression: frames end = 15000; per-tile frames for all 12 + all scales printed |
| A11 P8 @18500 | §2 P8 — expression: completeAtMs (derived) = 18500; frames printed, equal to P7 |
| A11 P9 @19000 | §2 P9 — expression: completeAtMs + 500; full tile-state equality vs P8 |
| A11 C@2000 | §2 C@2000 — census CP4 (8000): scale = smallFraction, freeP 0 |
| A11 C@3000 | §2 C@3000-F9000 — fine F-9000 (source 280): rawPhase 0 at growth start (cure-round schedule correction) |
| A11 C@4000 | §2 C@4000 — census CP5 (10000): 0 < freeP < 1, arrowsP 1, 0 < freeLabelP < 1, freeArrowOpacity 1 |
| A11 C@6000 | §2 C@6000 — census CP6 (12000) = fine F-11000: tiles equal P3, freeLabelOpacity 1 |
| A11 C@8000 | §2 C@8000 — census CP7 (14000): free hold, label 1, frames 0 |
| A11 C@10000 | §2 C@10000 — census CP8 (16000): freeLabelOpacity 1 at label-out start |
| A11 C@11000 | §2 C@11000-F17000 — fine F-17000 (source 288): freeLabelOpacity 0 |
| A11 C@12000 | §2 C@12000 — census CP9 (18000): freeLabelOpacity 0 |
| A11 C@14000 | §2 C@14000 — census CP10 (20000): bare hold, enslavedRaw 0, frames 0 |
| A11 C@15500 | §2 C@15500-F21000 — fine F-21000 (source 292): frames = P7, enslavedLabelP 0.5 |
| A11 C@16000 | §2 C@16000 — census CP11 (22000): frames printed = P7 frames, enslavedLabelP 1; under the timing swap the label value moves (1→0) and the frame movement is receipted at the P7 instant (MOVE@15000) — the firing-1 record's contrary implication is corrected here |
| A11 C@17000 | §2 C@17000-F23000 — fine F-23000 (source 294): enslavedLabelOpacity 1 |
| A11 C@18000 | §2 C@18000 — census CP12 (24000): frames = P7, enslavedLabelOpacity 0.5 |
| A11 C@20000 | §2 C@20000 — census CP13 (26000) = fine F-27000 form: frames = P7, enslavedLabelOpacity 0 |
| Geometry assertions | §2 GEOMETRY-NO-TILE-OVERLAP (66 pairs) + GEOMETRY-FRAMES-IN-STAGE — both PASS |
| Count assertion (A9.3) | §2 COUNT-SOURCE-VS-BUILT: source 12 = built 12 |
| Phase-order invariant | §2 VALIDATE-DEFAULT ok + three validator probes (2 rejected, 1 boundary accepted) |
| Census rows for expected CONFIG keys | config-census.md §2 — every expected key (nested/array incl.) carries its site; no expected key lacks a row |

## §6 Prewave disposition
- **Firing 1** (build 7c8b681a…, record as first filed): **HOLD — ASSERTED-CHECKS** · dimensions: parameterization 0.90 · purity pre-check 1.00 · own-checks completeness 0.35 · fidelity-plan honesty 0.85. Return verbatim at `codex/jev-prewave.md`.
- **Cure round (the one permitted round), all five findings cured:**
  1. Checkpoint coverage — assertions added for CP7/CP10/CP12 + all six fine frames (index in §2); the F-9000 discrepancy cured by schedule correction (tFreeMs 2500→3000, freeDurMs 2500→2000; free end unchanged 5000) with C@3000-F9000 receipting rawPhase 0 at the growth start.
  2. Overstated receipts — harness re-run prints complete predicates (P6/P7 frames AND scales; C@16000/C@20000 frame lists against P7); the C@16000 swap claim corrected on the record (label moves 1→0 at that instant; frame movement receipted at the P7 instant by MOVE@15000).
  3. Fit geometry — fit-table.md replaced with a full re-measure on the final build: container bounds + signed stage margins per row; Massachusetts proxy overflow carried explicitly (HIT 3, −12.1 px) alongside Pennsylvania (−5.5) and Delaware (−0.8).
  4. Camp predicate — stateAt now gates frame thickness on `camp === "south"`; SWAP-CONTENT exercises a north tile carrying enslavedPx 9 → frame 0.
  5. Arrow coupling — renderer decoupled: `freeArrowOpacity = arrowsP × (1 − labelOutP)`; ARROW-RENDER@4000 receipts both free arrow paths at opacity 1 while the free label is at 0.22.
- **Firing 2** (cured build 50b854e7…, this record): **HOLD — ASSERTED-CHECKS** again · dimensions: parameterization 0.95 · purity pre-check 1.00 · own-checks completeness 0.45 · fidelity-plan honesty 0.90. Return verbatim at `codex/jev-prewave-refire.md`. The cure round fixed the schedule, camp gating and arrow visibility (finding 4 clears those dimensions); three receipt-class findings remain: (1) three fine checkpoints credited to receipts at non-bound instants (F-11000→5000 not C@6000 · F-21000→15000 not 15500 · F-27000→21000 not C@20000); (2) several predicates still partial (Z0 header opacity · P1 opacities · P3 scales · P5 label opacity · P8 label opacities) and fixed C probes lack paired moving probes with evaluated CONFIG expressions; (3) fit-table rows not bound to the final rendered geometry (New Hampshire measured as one line vs two rendered lines · Virginia measured 29.7 px vs the renderer's CONFIG-derived size · zone rows without positions/margins).
- **Two-HOLD stop (A12.3):** the attempt closes **NO VERDICT** — no scoring wave fires this cycle. The three cures above are priced in scores.md; completion = next cycle.

## §7 Completion (Cycle 040 Wave 37 · A12.3 completion form) — cures from jev-prewave firing 2 applied

- **Build:** recreation.html sha256 `50b854e7ca8b2cec267e94a698154578823c812bd69f24bdc3204a3b6c28c182` · 16,968 B — **UNCHANGED (sha before = sha after)**. None of the three firing-2 cure groups requires a build change: cure 1 binds receipts to the instants the filed build already evaluates, cure 2 completes receipt predicates on the same build, cure 3 aligns the fit instrument to the renderer's own geometry rules. No build byte was edited; the new sha therefore equals the filed sha and no re-hash divergence exists.
- **Cure 1 — fine-checkpoint instant binding (finding 1):** F-11000 now files at its bound instant build 5000 (census 11000 − 6000) with the full-state P3 receipt (F-11000@5000: full-state equality vs P3, all-tile scales, both label opacities, frames). F-21000 files at its bound instant build 15000 (census 21000 − 6000 = `tEnslavedLabelMs`): frames = P7 full predicate, enslavedLabelP = 0, enslavedLabelOpacity = 0 — PLUS the explicit **+500 ms departure** printed in the harness output: the census frame's mid-reveal state (enslavedLabelP 0.5) sits at `tEnslavedLabelMs + enslavedLabelDurMs/2` = 15500, receipted as C@15500. F-27000 files at its bound instant build 21000 (census 27000 − 6000 = `durationMs` = completeAtMs + holdMs): frames = P7, both label opacities 0, all-tile scales 1.
- **Cure 2 — full-predicate receipts + paired moving probes (finding 2):** Z0 now prints header opacity (headerP) alongside tile opacities/scales · P1 prints tile scales + tile opacities + headerP · P3 prints the all-tile scale result · P5 prints freeLabelOpacity (+ freeArrowOpacity) · P8 prints both label opacities. Every fixed C probe (C@2000…C@20000) carries its evaluated CONFIG expression on its receipt line, and every C probe is paired with a moving probe under its phase's timing swap: PAIR-C2000-APPEAR (appearDurMs 1500→2000, P1 instant 1500→2000, scale@1000 0.428889→0.34) · PAIR-C3000/C4000/C6000-FREE (freeDurMs 2000→3000, P2 4000→4500, P3 5000→6000, freeP@4000 0.5→0.222222) · PAIR-C4000/C8000-FREELABEL (tFreeLabelMs 3500→3000, label end 5000→4500, freeLabelP@4000 0.222222→0.777778) · PAIR-C10000/C11000/C12000-LABELOUT (tFreeLabelOutMs 10000→9500, P4 10500→10000, P5 11000→10500, freeLabelOpacity@10000 1→0.5) · PAIR-C14000-ENSLAVED (tEnslavedMs 14000→15000 + label phases ride, P6 14500→15500, P7 15000→16000, completeAt 18500→19500, enslavedP@14500 0.5→0, VA frame 7.5→0; MOVE@15000 re-receipted) · PAIR-C15500/C16000-ENSLAVEDLABEL (tEnslavedLabelMs 15000→15500, mid instant 15500→16000, enslavedLabelP@15500 0.5→0, @16000 1→0.5) · PAIR-C17000/C18000/C20000-LABELOUT (tEnslavedLabelOutMs 17500→17000, completeAt 18500→18000, enslavedLabelOpacity@18000 0.5→0).
- **Cure 3 — fit-table bound to final rendered geometry (finding 3):** fit-table.md REPLACED with the completion re-measure: Virginia at the renderer's CONFIG-derived `tileFontPx` = clamp(140 × 0.22, 26, 32) = **30.8 px** (ink 124.2 × 29.5, CONTAINED) · New Hampshire measured as its two rendered lines "New"/"Hampshire" (inkW 145.8 = widest line, block inkH 55.1, stage margins +389.1/+105.1) — all twelve tile rows re-measured on rendered lines at exact `tileFontPx` · camp and centre-label rows carry rendered positions (cx + baseline y derived from the render code) and signed zone/stage margins. **5 HITs carried** (same classes, membership re-measured: box-overflow class now 6 tiles — North Carolina, New Jersey, New York leave it as CONTAINED).
- **Finding 4 (no cure owed):** parameterization/purity/camp-gate/arrow/fidelity stood cleared at firing 2; re-verified this cycle by the fresh receipts below (purity 0 · SWAP-CONTENT camp-gated · ARROW-RENDER@4000).

### §7.1 Fresh own-checks on the cured record (raw harness output, A9.4 — node, CONFIG + logic extracted from recreation.html sha 50b854e7… and evaluated via vm; completion harness run this cycle)
```
PASS VALIDATE-DEFAULT :: errors=[]
PASS DERIVE :: completeAtMs=18500 durationMs=21000 freeEndMs=5000
PASS COUNT-SOURCE-VS-BUILT :: source=12 built=12
PASS GEOMETRY-NO-TILE-OVERLAP :: all 66 pairs disjoint (overlaps=0)
PASS GEOMETRY-FRAMES-IN-STAGE :: all frames within 640x400 (out=0)
PASS Z0@0 :: expr t=CONFIG.tAppearMs=0 headerP(header opacity)=0 tileOpacities=0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55,0.55 tileScales=0.18,0.18,0.18,0.18,0.18,0.18,0.18,0.18,0.18,0.18,0.18,0.18
PASS P1@1500 :: expr tAppearMs+appearDurMs=1500 tileScales=0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5,0.5 tileOpacities=1,1,1,1,1,1,1,1,1,1,1,1 headerP(header opacity)=1
PASS P2@4000 :: expr tFreeMs+freeDurMs/2=4000 rawPhase=0.5 eased=0.5 scales=0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75,0.75
PASS P3@5000 :: expr tFreeMs+freeDurMs=5000 tileScales=1,1,1,1,1,1,1,1,1,1,1,1 freeLabelP=1 arrowsP=1 freeArrowOpacity=1 freeLabelOpacity=1 enslavedLabelOpacity=0 frames=0,0,0,0,0,0,0,0,0,0,0,0
PASS F-11000@5000 :: bound expr census11000-6000=5000 == tFreeMs+freeDurMs=5000 full-state equality vs P3=true tileScales=1,1,1,1,1,1,1,1,1,1,1,1 freeLabelOpacity=1 frames=0,0,0,0,0,0,0,0,0,0,0,0
PASS P4@10500 :: expr tFreeLabelOutMs+freeLabelOutDurMs/2=10500 freeLabelOpacity=0.5
PASS P5@11000 :: expr labelOutEnd=tFreeLabelOutMs+freeLabelOutDurMs=11000 freeLabelOpacity=0 freeArrowOpacity=0 frames=0,0,0,0,0,0,0,0,0,0,0,0
PASS P6@14500 :: expr tEnslavedMs+enslavedDurMs/2=14500 rawPhase=0.5 eased=0.5 frames=7.5,5.5,4,1.5,4,2,1.5,0,0,0,0,0 scales=1,1,1,1,1,1,1,1,1,1,1,1
PASS P7@15000 :: expr framesEnd=tEnslavedMs+enslavedDurMs=15000 frames=Virginia:15 North Carolina:11 South Carolina:8 Delaware:3 Maryland:8 Georgia:4 New Jersey:3 New York:0 Pennsylvania:0 Connecticut:0 Massachusetts:0 New Hampshire:0 scales=1,1,1,1,1,1,1,1,1,1,1,1
PASS F-21000@15000 :: bound expr census21000-6000=15000 == tEnslavedLabelMs=15000 frames=15,11,8,3,8,4,3,0,0,0,0,0 enslavedLabelP=0 enslavedLabelOpacity=0
DEPARTURE F-21000 :: explicit +500 ms departure for the label reveal — the census frame's mid-reveal state (enslavedLabelP=0.5) sits at expr tEnslavedLabelMs+enslavedLabelDurMs/2=15500 (build 15500), NOT at the bound instant 15000 where enslavedLabelP=0; at 15500 enslavedLabelP=0.5 frames=15,11,8,3,8,4,3,0,0,0,0,0
PASS P8@18500 :: expr completeAtMs=18500 frames=15,11,8,3,8,4,3,0,0,0,0,0 freeLabelOpacity=0 enslavedLabelOpacity=0 enslavedLabelP=1
PASS P9@19000 :: expr completeAtMs+500=19000 full tile-state equality vs P8
PASS F-27000@21000 :: bound expr census27000-6000=21000 == durationMs=completeAtMs+holdMs=21000 frames=15,11,8,3,8,4,3,0,0,0,0,0 freeLabelOpacity=0 enslavedLabelOpacity=0 tileScales=1,1,1,1,1,1,1,1,1,1,1,1
PASS C@2000 :: expr census8000-6000=2000 :: scale=0.5 freeP=0
PASS C@3000 :: expr census9000-6000=3000 == CONFIG.tFreeMs :: F-9000 growth start rawPhase=0 scale=0.5
PASS C@4000 :: expr census10000-6000=4000 :: freeP=0.5 arrowsP=1 freeLabelP=0.222222 freeArrowOpacity=1
PASS C@6000 :: expr census12000-6000=6000 :: tiles equal P3 scales=1,1,1,1,1,1,1,1,1,1,1,1 freeLabelOpacity=1
PASS C@8000 :: expr census14000-6000=8000 :: freeLabelOpacity=1 frames=0,0,0,0,0,0,0,0,0,0,0,0
PASS C@10000 :: expr census16000-6000=10000 == CONFIG.tFreeLabelOutMs :: freeLabelOpacity=1
PASS C@11000 :: expr census17000-6000=11000 == labelOutEnd :: F-17000 label gone freeLabelOpacity=0
PASS C@12000 :: expr census18000-6000=12000 :: freeLabelOpacity=0
PASS C@14000 :: expr census20000-6000=14000 == CONFIG.tEnslavedMs :: enslavedRaw=0 frames=0,0,0,0,0,0,0,0,0,0,0,0
PASS C@15500 :: expr census21000-6000+500(departure)=15500 == tEnslavedLabelMs+enslavedLabelDurMs/2 :: F-21000 mid-reveal enslavedLabelP=0.5 frames=15,11,8,3,8,4,3,0,0,0,0,0
PASS C@16000 :: expr census22000-6000=16000 :: frames=15,11,8,3,8,4,3,0,0,0,0,0 enslavedLabelP=1
PASS C@17000 :: expr census23000-6000=17000 :: F-23000 enslavedLabelOpacity=1
PASS C@18000 :: expr census24000-6000=18000 :: enslavedLabelOpacity=0.5 frames=15,11,8,3,8,4,3,0,0,0,0,0
PASS C@20000 :: expr census26000-6000=20000 :: enslavedLabelOpacity=0 frames=15,11,8,3,8,4,3,0,0,0,0,0
PASS PAIR-C2000-APPEAR :: swap appearDurMs 1500->2000 :: P1 instant expr tAppearMs+appearDurMs 1500->2000 :: at t=1000 (expr tAppearMs+appearDurMs/2 default) tileScale default=0.428889 swapped=0.34
PASS PAIR-C3000/C4000/C6000-FREE :: swap freeDurMs 2000->3000 :: P2 instant expr tFreeMs+freeDurMs/2 4000->4500 P3 instant expr tFreeMs+freeDurMs 5000->6000 :: at C@4000 freeP default=0.5 swapped=0.222222 tileScale default=0.75 swapped=0.611111
PASS PAIR-C4000/C8000-FREELABEL :: swap tFreeLabelMs 3500->3000 :: label-end expr tFreeLabelMs+freeLabelDurMs 5000->4500 :: at C@4000 freeLabelP default=0.222222 swapped=0.777778
PASS PAIR-C10000/C11000/C12000-LABELOUT :: swap tFreeLabelOutMs 10000->9500 :: P4 instant expr tFreeLabelOutMs+freeLabelOutDurMs/2 10500->10000 P5 instant 11000->10500 :: at C@10000 freeLabelOpacity default=1 swapped=0.5
PASS PAIR-C14000-ENSLAVED :: swap tEnslavedMs 14000->15000 (+label phases ride) :: P6 instant expr tEnslavedMs+enslavedDurMs/2 14500->15500 P7 instant 15000->16000 completeAt 18500->19500 :: at t=14500 enslavedP default=0.5 swapped=0 VAframe default=7.5 swapped=0
MOVE@15000 :: default VA frame=15 swapped(tEnslavedMs=15000) VA frame=0
PASS PAIR-C15500/C16000-ENSLAVEDLABEL :: swap tEnslavedLabelMs 15000->15500 :: mid instant expr tEnslavedLabelMs+enslavedLabelDurMs/2 15500->16000 :: at t=15500 enslavedLabelP default=0.5 swapped=0 :: at C@16000 default=1 swapped=0.5
PASS PAIR-C17000/C18000/C20000-LABELOUT :: swap tEnslavedLabelOutMs 17500->17000 :: P8 instant expr completeAtMs 18500->18000 :: at C@18000 enslavedLabelOpacity default=0.5 swapped=0
PASS SWAP-CONTENT :: frames Alpha:10 Beta:5 Gamma:0 (north tile WITH enslavedPx 9 camp-gated to 0) Delta:0 arrowTargets=Alpha,Gamma
PASS SWAP-TIMING-REJECTED-LABEL :: errors=["phase order: free label end 8500 after free end 5000"]
PASS SWAP-TIMING-REJECTED-ENSLAVED :: errors=["phase order: enslaved start 9000 before label-out end 11000"]
PASS SWAP-TIMING-BOUNDARY :: tEnslavedMs=labelOutEnd(11000) accepted errors=[]
SUMMARY pass=43 fail=0
```
Renderer-level receipts (stub-DOM execution of the actual render script, re-run this cycle on the same build):
```
ARROW-RENDER@4000 :: free arrow path opacities=[1,1] (renderer-level: arrows fully visible at C@4000 while free label partial)
PALETTE-RENDERED :: default frame fills contain #c85a2e: true (count 12)
PALETTE-RENDERED-SWAP :: swapped frame fills contain #2e7ec8: true (count 12) :: swapped still contains #c85a2e: false
```
Syntax (command 3): `node --check` rc=0 on all three recreation script blocks (t218-config · t218-logic · t218-render) and on the comparison script, re-run this cycle. RNG census: `Math.random` grep count 0 — **RNG ABSENT**.
Purity grep (command 1) raw, re-run this cycle: pattern `segment\.mp4|source\.webm|source\.mp4|<video|<img|ajavsMbCapY` over recreation.html → **0 hits**. `url(#id)` scan → 0 occurrences. External-asset scan (`src=|href=|@import|url(`) → 0 matches — **NO EXTERNAL REFERENCES**; asset inventory = recreation.html alone.
Comparison check: unchanged file (sha b35e32b5…), receipts from §2 stand (labels verbatim · sync mapping evaluates · phone stacking rule · comparison script syntax rc=0 re-run this cycle). Browser playback is not exercisable in this seat — PIXEL-UNVERIFIED, carried to scores.md.
A6 legs re-filed this cycle: fit-table.md (completion re-measure, **5 HITs carried**) · config-census.md (re-verified, **0 HITs**).

### §7.2 RECEIPT INDEX (A13) — completion reconciliation, performed BEFORE payload assembly
Reconciliation performed against: guards.md commands 1–8 · the amended Plan's A11 assertions · **the prior attempt's assertion set inherited WHOLE (A13.2)** — Z0 · P1–P9 · C@2000/3000/4000/6000/8000/10000/11000/12000/14000/15500/16000/17000/18000/20000 · geometry · count · phase-order — no assertion dropped; the three fine checkpoints F-11000/F-21000/F-27000, previously credited to receipts at other instants, now stand as their own bound-instant lines (additions, not substitutions) · expected CONFIG keys incl. nested/array `tiles[]` keys (config-census §2 = the expected set). **Readiness result (A13.3): every line below carries its executable receipt with the evidence its assertion requires (CONFIG expression + evaluated value, raw result), or an explicit NOT-DEMANDED line with a governing disposition. No missing expected line; no unsupported exclusion. The record passes its own readiness gate and the single authorized completion re-fire is spent on it.**

| Index line | Receipt / disposition |
|---|---|
| cmd 1 — purity grep | §7.1 raw: 0 hits on the completion build; `url(#id)` 0 occurrences, none to classify |
| cmd 2 — swap test | §7.1 raw: SWAP-CONTENT (camp-gated north tile) · 7 PAIR moving probes (appear · free · free-label · label-out · enslaved · enslaved-label · enslaved-label-out), each with evaluated CONFIG expressions + moved instants + default/swapped values · MOVE@15000 · SWAP-TIMING-REJECTED-LABEL · SWAP-TIMING-REJECTED-ENSLAVED · SWAP-TIMING-BOUNDARY · PALETTE-RENDERED + PALETTE-RENDERED-SWAP · ARROW-RENDER@4000 — all PASS |
| cmd 3 — syntax + RNG census | §7.1: node --check rc=0 ×4 scripts on the completion build · RNG ABSENT (grep 0) |
| cmd 4 — scores arithmetic | NOT-DEMANDED for the builder record — seat-side at consolidation (INSTRUCTION §5.5); becomes due only if the wave fires |
| cmd 5 — segment binding | §1 raw ffprobe: 35.029870 s, h264 1920×1080, covers 270.5–305.5 ⊇ window 271–305 (segment unchanged, sha f6a87a23…) |
| cmd 6 — measured-fit leg | fit-table.md (completion re-measure): 5 HIT rows carried with dispositions; every row bound to rendered geometry (tileFontPx + labelLines + positions/margins) |
| cmd 7 — config-census leg | config-census.md: 0 HITs; key→site table on its face; re-verified this cycle on the unchanged build |
| cmd 8 — census-anchor zero-state probe | §7.1 Z0@0 PASS — the window's tile zero-state is a MID-FADE state by census (CP3), prescribed as opacity = CONFIG.appearStartOpacity at t = CONFIG.tAppearMs with the departure printed in Plan §2.3; no zero-tile census anchor exists in this window |
| A11 Z0 @0 | §7.1 Z0 — expression: stateAt(CONFIG, CONFIG.tAppearMs) = 0 ms; headerP (header opacity) 0, tile opacities all 0.55, tile scales all 0.18 (full predicate) |
| A11 P1 @1500 | §7.1 P1 — expression: tAppearMs + appearDurMs = 1500; tile scales all 0.5, tile opacities all 1, headerP 1 (full predicate) |
| A11 P2 @4000 | §7.1 P2 — expression: tFreeMs + freeDurMs/2 = 4000; rawPhase 0.5 and eased 0.5 printed separately; all 12 scales printed |
| A11 P3 @5000 | §7.1 P3 — expression: tFreeMs + freeDurMs = 5000; all-tile scales all 1 (full predicate), freeLabelP 1, arrowsP 1, freeArrowOpacity 1, both label opacities printed |
| A11 P4 @10500 | §7.1 P4 — expression: tFreeLabelOutMs + freeLabelOutDurMs/2 = 10500; freeLabelOpacity 0.5 |
| A11 P5 @11000 | §7.1 P5 — expression: label-out end = 11000; freeLabelOpacity 0 (full predicate), freeArrowOpacity 0, all 12 frames 0 |
| A11 P6 @14500 | §7.1 P6 — expression: tEnslavedMs + enslavedDurMs/2 = 14500; rawPhase 0.5 / eased 0.5 separately; all 12 frames AND all 12 scales printed |
| A11 P7 @15000 | §7.1 P7 — expression: frames end = 15000; per-tile frames for all 12 + all scales printed |
| A11 P8 @18500 | §7.1 P8 — expression: completeAtMs (derived) = 18500; frames = P7, freeLabelOpacity 0 AND enslavedLabelOpacity 0 (both label opacities, full predicate) |
| A11 P9 @19000 | §7.1 P9 — expression: completeAtMs + 500; full tile-state equality vs P8 |
| A11 F-11000 @5000 (bound) | §7.1 F-11000@5000 — bound expression: census 11000 − 6000 = 5000 = tFreeMs + freeDurMs; full-state equality vs P3 printed (cure 1) |
| A11 F-21000 @15000 (bound) | §7.1 F-21000@15000 — bound expression: census 21000 − 6000 = 15000 = tEnslavedLabelMs; frames = P7, enslavedLabelP 0, enslavedLabelOpacity 0; explicit +500 ms departure for the mid-reveal state receipted at C@15500 (cure 1) |
| A11 F-27000 @21000 (bound) | §7.1 F-27000@21000 — bound expression: census 27000 − 6000 = 21000 = durationMs; frames = P7, both label opacities 0, all-tile scales 1 (cure 1) |
| A11 C@2000 | §7.1 C@2000 — expression census8000−6000=2000: scale = smallFraction, freeP 0 · paired PAIR-C2000-APPEAR (moved instant + moved value) |
| A11 C@3000 | §7.1 C@3000 — fine F-9000: expression census9000−6000=3000 = CONFIG.tFreeMs, rawPhase 0 · paired PAIR-C3000/C4000/C6000-FREE |
| A11 C@4000 | §7.1 C@4000 — census CP5: expression census10000−6000=4000, freeP 0.5, arrowsP 1, freeLabelP 0.222222, freeArrowOpacity 1 · paired PAIR-C3000/C4000/C6000-FREE + PAIR-C4000/C8000-FREELABEL |
| A11 C@6000 | §7.1 C@6000 — census CP6: tiles equal P3, freeLabelOpacity 1 · paired PAIR-C3000/C4000/C6000-FREE (P3 instant moves 5000→6000) |
| A11 C@8000 | §7.1 C@8000 — census CP7: free hold, label 1, frames 0 · paired PAIR-C4000/C8000-FREELABEL (label-end instant moves 5000→4500) |
| A11 C@10000 | §7.1 C@10000 — census CP8: expression = CONFIG.tFreeLabelOutMs, freeLabelOpacity 1 · paired PAIR-C10000/C11000/C12000-LABELOUT (value moves 1→0.5 at this instant) |
| A11 C@11000 | §7.1 C@11000 — fine F-17000: label-out end, freeLabelOpacity 0 · paired PAIR-C10000/C11000/C12000-LABELOUT (P5 instant moves 11000→10500) |
| A11 C@12000 | §7.1 C@12000 — census CP9: freeLabelOpacity 0 · paired PAIR-C10000/C11000/C12000-LABELOUT |
| A11 C@14000 | §7.1 C@14000 — census CP10: expression = CONFIG.tEnslavedMs, enslavedRaw 0, frames 0 · paired PAIR-C14000-ENSLAVED (value at 14500 moves 0.5→0; MOVE@15000) |
| A11 C@15500 | §7.1 C@15500 — F-21000 mid-reveal under the printed +500 ms departure: expression tEnslavedLabelMs + enslavedLabelDurMs/2 = 15500, enslavedLabelP 0.5, frames = P7 · paired PAIR-C15500/C16000-ENSLAVEDLABEL (value moves 0.5→0 at this instant) |
| A11 C@16000 | §7.1 C@16000 — census CP11: frames = P7, enslavedLabelP 1 · paired PAIR-C15500/C16000-ENSLAVEDLABEL (value moves 1→0.5) + MOVE@15000 frame movement |
| A11 C@17000 | §7.1 C@17000 — fine F-23000: enslavedLabelOpacity 1 · paired PAIR-C17000/C18000/C20000-LABELOUT (completeAt moves 18500→18000) |
| A11 C@18000 | §7.1 C@18000 — census CP12: frames = P7, enslavedLabelOpacity 0.5 · paired PAIR-C17000/C18000/C20000-LABELOUT (value moves 0.5→0 at this instant) |
| A11 C@20000 | §7.1 C@20000 — census CP13 form: frames = P7, enslavedLabelOpacity 0 · paired PAIR-C17000/C18000/C20000-LABELOUT (P8 instant moves) |
| Geometry assertions | §7.1 GEOMETRY-NO-TILE-OVERLAP (66 pairs) + GEOMETRY-FRAMES-IN-STAGE — both PASS |
| Count assertion (A9.3) | §7.1 COUNT-SOURCE-VS-BUILT: source 12 = built 12 |
| Phase-order invariant | §7.1 VALIDATE-DEFAULT ok + three validator probes (2 rejected, 1 boundary accepted) |
| Census rows for expected CONFIG keys | config-census.md §2 — every expected key (nested/array incl.) carries its site; no expected key lacks a row |

### §7.3 Prewave disposition (completion)
- **Completion re-fire** (the single authorized A12.3 re-fire, build 50b854e7… unchanged, this cured record): fired this cycle; return filed at `codex/jev-prewave-completion-cycle040.md` + run dir `item-T218-jev-prewave-completion-return`. Disposition + dimension scores are recorded in scores.md's completion section (appended at filing) and summarized in the wave RUN.

### §7.4 Completion prewave outcome (filed at the firing's return)
- **Verdict: HOLD — ASSERTED-CHECKS** · parameterization 0.95 · purity pre-check 1.00 · own-checks completeness 0.45 · fidelity-plan honesty 0.90. Return verbatim at `codex/jev-prewave-completion-cycle040.md`.
- **Disposition: APPLIED.** NO VERDICT for the item; the five-lens wave was NOT fired and prewave was NOT re-fired. The return's three findings are receipt-form defects in this completion record itself (seat-verified against the filed paperwork: (1) the PAIR-C2000-APPEAR line labels t=1000 with the expression `tAppearMs+appearDurMs/2`, which evaluates to 750 — the label is wrong though both measured states are real; (2) the P2 receipt omits the fill-lerp value the Plan §2.3 predicate requires, and the Plan's §2.3 annotation still prints the pre-cure 3750 ms midpoint against the final CONFIG's 4000 ms; (3) the fit-table's HIT 5 membership omits Pennsylvania and Massachusetts, whose measured ink widths also exceed their boxes — eight width-overflow tiles, not six). The three cures are priced in scores.md's completion section; the item's next re-fire stands **PENDING AUTHORIZATION**.
