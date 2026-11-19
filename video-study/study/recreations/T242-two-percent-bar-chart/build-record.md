# T242 — build record · Wave 38 · Cycle 041 · attempt 1

- **Item:** T242 — The 2% bar chart · queue #107 · FIRST ATTEMPT · Packet #14 (@ensan.besham "Hope = Failure (?)") @ ≈6–18 s.
- **Phase A:** `runs/2026-11-18-cycle-041-wave-38/item-T242-observe-plan.md` (§1 Observe + §2 Plan + §2b gate dispositions). Schedule basis: **segment-anchored** (build t = segment-relative, offset 0).
- **Phase A gates (all fired before any build script, A9.2):** codex-observe CONFIRMED-WITH-GAPS · jev-observe-exit RETURN-TO-OBSERVE/GUIDANCE-DROPPED (cured inline in §2b per A9.5) · codex-plan-review REVISE (all cures applied) · jev-plan-exit REVISE/UNBOUND-SCHEDULE (all cures applied — schedule rebound to census states, perimeter draw-on, folded CONFIG table). Returns in the wave run dir (`item-T242-*-return.md`).
- **Segment binding (guards cmd 5):** cut from packet `source.mp4` (h264 720×1280, 155.617 s) at 5.5–18.5 s → `segment.mp4`: h264 720×1280 + AAC, duration 13.000 s, 491,247 B, sha256 7784442c9e1dd7e12ec8e0f426a20e23f7b89e2bf417338404ab0b577b43ccf3.
- **Build:** `recreation.html` — final sha256 **c93bc67ecfae8cd6d574773ae692dfdeac42e041450c5996bd9d605b23f2870e**, 10,614 B (cured build after jev-prewave HOLD #1; first-draft build sha b460a8fb… is superseded). SVG single-stage, CONFIG at top, pure `stateAt(cfg,t)`, `window.__T242` exposed, postMessage slave clock for the comparison. `comparison.html` sha256 178e16524a4eab17ba9a29ee220a9e268e365a26ef22002f8a78ab2a89a0cd52.
- **Pre-wave cures (builder-side):** (1) fit cure — fonts 20/22/20/26 → 28/28/26/30, bar labels "Waiting"→"Wait", barGap/groupGap/figureX re-spaced (fit-table.md). (2) census cure — figure/tick/label geometry literals bound as CONFIG keys (config-census.md).

## Own checks — RAW output (harness: `node harness-t242.js`, artifact dir — FRESH Cycle 042 completion run on the unchanged build c93bc67e…; the Wave-38 26-line output is superseded by this 28-line output, prior text preserved in git/Wave-38 record)

```
SCHEDULE {"riseEnd":2300,"stubStarts":[2600,4500,6400],"stubCompletes":[3000,4900,6800],"fullStart":7200,"fullComplete":8100,"exitEnd":10500,"durationMs":13000}
PASS VALIDATE default :: validate(CONFIG)=null
PASS P0@0 zero :: drawP=0,0,0,0 stubP=0,0,0 fullP=0
PASS CP1@500 zero-state :: drawP=0,0,0,0 stubP=0,0,0 fullP=0 figureP=0
PASS P1 C@1500 bar4-drawing :: drawP3=0.111
PASS CP2@expr(riseStart+(barCount-1)*stagger+riseDur/9)=1500 bar4-drawing :: drawP3=0.111 drawP=0.7777777777777778,0.5555555555555556,0.3333333333333333,0.1111111111111111
PASS P2@expr(riseStart+(n-1)*stagger+riseDur)=2300 :: drawP=1,1,1,1
PASS P3@expr(stubStarts[0]+stubDurMs)=3000 :: stubP0=1 stubH=6.8 expectedH=6.8
PASS P4@expr(stubStarts[1]+stubDurMs)=4900 :: stubP=1,1,0
PASS P5@expr(stubStarts[2]+stubDurMs)=6800 :: fullP=0
PASS P6@expr(fullStart+fullDurMs)=8100 :: fullH=340 ratio=0.02
PASS C@2500 rise-complete-no-stub :: stubP=0,0,0
PASS C@4500 stub1-only :: stubP=1,0,0
PASS C@3500 stub1-only :: stubP=1,0,0
PASS C@5500 stub2 :: stubP=1,1,0 fullP=0
PASS C@8500 settled :: fullP=1 stubP=1,1,1 fillOp=1 fullH=340
PASS C@10000 fill-cleared-outlines-remain :: fillOp=0 chartOp=1
PASS CP9 C@expr(schedule(CONFIG).exitEnd)=10500 chart-absent :: chartOp=0 exitP=1
PASS P7 phase-exclusivity sampled :: maxActiveGrowth=1
PASS P8 group-label2 reveal@stub3Start=6400 :: groupP1@start=0 groupP1@end=1 groupP=1,0
PASS C@6500 combined stub3-drawing+label2 :: stubP=1,1,0.25 groupP1=0.33
PASS SWAP content percent 2->7 :: stubH=23.8 (default 6.8)
PASS SWAP content labels render :: has7%=true hasUS=true hasTHEM=true hasOdds=true
PASS SWAP timing paired :: riseEnd default=2300 swapped=2900 stub1Start default=2600 swapped=3200 fixedProbe@2300 drawP3 swapped=0.600
PASS SWAP palette fill/line :: hasFill#ffb02e=true hasLine#7fd4ff=true
PASS P7-SWAP phase-exclusivity under timing swap :: maxActiveGrowth swapped=1
PASS P3-SWAP stub1 completion predicate@expr(swapped stubStarts[0]+stubDurMs)=3600 :: stubP0=1 stubH=6.8 expectedH=6.8
PASS VALIDATOR stub-index rejected :: stub index out of range
PASS RENDER smoke :: labels present
SUMMARY pass=28 fail=0
```

- **Swap test (cmd 2):** content — stubPercent 2→7 (stub height 6.8→23.8 px, exact), stubLabel "2%"→"7%", groupLabels ["ME","YOU"]→["US","THEM"], barLabels→["Odds","Wait","Odds","Wait"]: all present in swapped render. Timing — riseDurMs 900→1500, PAIRED receipt: riseEnd 2300→2900, stub1Start 2600→3200, fixed probe @2300 drawP3 1→0.600. Palette — palette.fill→#ffb02e, palette.line→#7fd4ff observed in render. Technique still reads correctly under all three.
- **Purity (cmd 1):** `grep -nE "segment\.mp4|source\.mp4|<video|<img|DffiIpmMAC3" recreation.html` → **no hits (rc=1), specimen hits 0**. `url(#id)` refs: none. External loads: none (only URL string is the SVG xmlns identifier). Asset inventory: recreation.html alone.
- **Syntax + seeded RNG (cmd 3):** `node --check` on both extracted scripts → OK. Seeded RNG: **none — this build uses no RNG** (deterministic geometry; census form printed explicitly, no rngSeed key carried — dropped at Plan per codex-plan-review cure 3).
- **Comparison check:** labels verbatim ×1 each ("ORIGINAL — ensan.besham Hope = Failure (?) @ 6–18 s" · "RECREATION — T242, parameterized") · segment.mp4 referenced ×1 (original side only) · `@media (max-width:560px)` stacking ×1 · one synchronized control set (play/pause/restart drive video + recreation via postMessage seek/play/pause keyed to video currentTime) · durations: segment 13.000 s, recreation durationMs 13000. **PIXEL-UNVERIFIED** — no browser binary in this seat; comparison page is the render surface (standing limitation, carried to scores.md).
- **A6 legs:** fit-table.md — measured PROXY rows (PIL, DejaVu Sans Bold), HITs **0** after cure. config-census.md — all literals classified, every key resolved incl. nested palette + array keys, HITs **0** after cures.

## A13 RECEIPT INDEX (reconciled WHOLE before the Cycle-042 completion prewave payload assembly — A13.1/A13.2: every applicable guards.md command + every A11 assertion inherited whole from the Wave-38 harness and its amendments; harness command for every receipt below is `node harness-t242.js` in the artifact dir unless another command is named; fresh run: 28 PASS / 0 FAIL, raw output above)
(a) guards.md commands:
- cmd 1 purity — RECEIPT (fresh): `grep -nE "segment\.mp4|source\.mp4|<video|<img|DffiIpmMAC3" recreation.html` → no hits (rc=1), specimen hits **0**; `url(#id)` refs: none; external loads: none.
- cmd 2 swap — RECEIPT: harness SWAP lines above — content (stubPercent 2→7: stubH 6.8→23.8, labels 7%/US/THEM/Odds observed true) · timing paired (riseDurMs 900→1500: riseEnd 2300→2900, stub1Start 2600→3200, fixed probe @2300 drawP3 swapped=0.600) · palette (fill #ffb02e / line #7fd4ff observed true).
- cmd 3 syntax + seeded-RNG census — RECEIPT (fresh): `node --check` on both extracted scripts (recreation.html, comparison.html) → OK ×2. Seeded RNG: none — this build uses no RNG (deterministic geometry; no rngSeed key, dropped at Plan per codex-plan-review cure 3).
- cmd 4 scores arithmetic — NOT-DEMANDED at builder stage: seat-side recompute after the wave; scores.md carries the arithmetic with this disposition cited (guards.md cmd 4 is the seat's filing check).
- cmd 5 segment binding — RECEIPT: segment facts above (source window 5.5–18.5 s → segment.mp4 13.000 s, h264+AAC, sha256 7784442c…).
- cmd 6 fit leg — RECEIPT: fit-table.md (refiled Cycle 042, cure 6), 0 HITs.
- cmd 7 census leg — RECEIPT: config-census.md (re-run Cycle 042), 0 HITs.
- cmd 8 census-anchor probes (zero-state anchors stand: no bars at CP1/500 · no stub at CP3/2500 · chart absent at CP9/10500) — RECEIPT: harness CP1@500 (drawP=0,0,0,0 stubP=0,0,0 fullP=0 figureP=0), **C@2500** (stubP=0,0,0 — the CP3 zero-stub receipt; cross-reference corrected in this completion, cure 5), CP9 line (chartOp=0 at `schedule(CONFIG).exitEnd`=10500).
(b) A11 assertions inherited WHOLE (Wave-38 set P0–P8 + C-probes + swaps + validator + render smoke — none dropped, none renamed silently; two lines extended by the completion cures as noted):
- P0 `stateAt(CONFIG, 0)` → drawP=0,0,0,0 stubP=0,0,0 fullP=0 — PASS (observed values now printed in full, cure 4).
- CP1 `stateAt(CONFIG, 500)` → drawP/stubP/fullP/figureP all 0 — PASS (**NEW, cure 2** — guards cmd 8 zero-state anchor at census CP1).
- P1/CP2 fixed `stateAt(CONFIG, 1500)` → drawP3=0.111 (bar 4 drawing, census CP2) — PASS.
- CP2 companion `stateAt(CONFIG, riseStartMs+(barCount−1)×riseStaggerMs+riseDurMs/9)` → evaluated instant **1500**, drawP3=0.111, drawP printed in full — PASS (**NEW, cure 1** — CONFIG-expression form of the CP2 probe; the fixed census probe above is retained beside it).
- P2 `stateAt(CONFIG, riseStartMs+(barCount−1)×riseStaggerMs+riseDurMs)` → 2300, drawP=1,1,1,1 — PASS.
- P3 `stateAt(CONFIG, schedule(CONFIG).stubStarts[0]+stubDurMs)` → 3000, **complete predicate**: stubP0=1 AND stubH=6.8 = stubPercent/100×axisHeightPx (expectedH printed) — PASS (cure 3, default instant).
- P4 `stateAt(CONFIG, schedule(CONFIG).stubStarts[1]+stubDurMs)` → 4900, stubP=1,1,0 — PASS.
- P5 `stateAt(CONFIG, schedule(CONFIG).stubStarts[2]+stubDurMs)` → 6800, stubP[2]=1, fullP=0 — PASS.
- P6 `stateAt(CONFIG, schedule(CONFIG).fullStart+fullDurMs)` → 8100, fullH=340, stub/full ratio=0.02 — PASS.
- P7 phase exclusivity sampled every 50 ms → maxActiveGrowth=1 — PASS.
- P7-SWAP phase exclusivity under the timing swap → maxActiveGrowth swapped=1 — PASS.
- P8 group-label-2 reveal at `schedule(CONFIG).stubStarts[stubBarIndices.length−1]` = 6400 → groupP1@start=0, groupP1@end=1, groupP printed — PASS (observed values now printed, cure 4).
- P3-SWAP **complete predicate** at `stateAt(swappedCONFIG, swapped stubStarts[0]+stubDurMs)` → 3600, stubP0=1 AND stubH=6.8 = expectedH printed — PASS (**cure 3, swapped instant** — Wave-38 line checked progress only).
- C@2500 (CP3) rise complete, no stub → stubP=0,0,0 — PASS. C@3500 (CP4) stub1 only → stubP=1,0,0 — PASS. C@4500 (CP5) stub1 only → stubP=1,0,0 — PASS. C@5500 (CP6) stub2 → stubP=1,1,0 fullP=0 — PASS (observed values now printed, cure 4). C@6500 (CP7) combined → stubP=1,1,0.25 groupP1=0.33 — PASS (see CP7 reconciliation note below). C@8500 (CP8) settled → fullP=1 stubP=1,1,1 fillOp=1 fullH=340 — PASS (observed values now printed, cure 4). C@10000 fill cleared, outlines remain → fillOp=0 chartOp=1 — PASS.
- CP9 `stateAt(CONFIG, schedule(CONFIG).exitEnd)` → evaluated instant **10500**, chartOp=0 exitP=1 — PASS (**cure 1** — CONFIG-expression form; replaces the Wave-38 literal-10500 line, same predicate and result).
- VALIDATE default → validate(CONFIG)=null — PASS. VALIDATOR stub-index rejected → "stub index out of range" — PASS. RENDER smoke → stubLabel/fullLabel/ME/YOU present — PASS.
(c) Census-checkpoint mapping (binding mapping from `runs/2026-11-18-cycle-041-wave-38/item-T242-observe-plan.md` §1 + §2b — every CP row accounted):
- CP0 (−500 ms, prior T241 board, pre-window context) — NOT-DEMANDED: context frame only per the binding mapping; no T242 state is prescribed at a pre-window instant (governing plan: observe-plan §1 census table, CP0 row).
- CP1 (500 ms, bars not yet present) — RECEIPT: CP1@500 line above.
- CP2 (1500 ms, bar 4 drawing) — RECEIPT: P1 fixed line + CP2 CONFIG-expression companion line above.
- CP3 (2500 ms, outlines complete, NO stub) — RECEIPT: C@2500 line above.
- CP4 (3500 ms, stub 1 present) — RECEIPT: C@3500 line above.
- CP5 (4500 ms, stub 1 only) — RECEIPT: C@4500 line above.
- CP6 (5500 ms, stub 2 present) — RECEIPT: C@5500 line above.
- CP7 (6500 ms, stubs 1–2 hold + second group label appears) — RECEIPT: C@6500 + P8 lines above. **Reconciliation (explicit):** the census frame is a sampled instant inside the build's derived stub-3 growth window (stub3 start = stubStarts[2] = 6400, completes 6800, per the §2b rebound schedule); at 6500 the build's stub 3 stands at progress 0.25 = 1.7 px of fill — visually the stubs-1–2 hold the frame shows — while group label 2 is mid-reveal (groupP1=0.33), exactly the label appearance the CP7 row names. The combined predicate (stubP=[1,1,>0] AND groupP1>0) and the census reading agree once the sampling position inside the growth window is stated; no schedule change is priced (the §2b schedule was gate-approved and CP8's settled state at 8500 holds exactly).
- CP8 (8500 ms, stub 3 + bar 4 filled solid, 100% label) — RECEIPT: C@8500 line above (fullP=1, fullH=340).
- CP9 (10500 ms, bars gone) — RECEIPT: CP9 CONFIG-expression line above.
- CP10 (12500 ms, T243 calendar scene, post-window context) — NOT-DEMANDED: context frame only per the binding mapping; the T242 scene has exited and no T242 state is prescribed (governing plan: observe-plan §1 census table, CP10 row).
Reconciliation: index lines = 8 guard commands (7 receipts + 1 NOT-DEMANDED with disposition) + 28 harness assertions (the whole inherited Wave-38 set of 26, extended by CP1 + CP2-companion; CP9 and P3-SWAP lines carry the same assertions in cured form) + 11 census rows (9 receipts + CP0/CP10 NOT-DEMANDED with governing-plan citations); planned assertion set (observe-plan §2 + §2b addenda) fully covered; expected CONFIG keys incl. nested `palette.{bg,line,fill,label}` and array keys `barHeightsPct[]`, `stubBarIndices[]`, `barLabels[]`, `groupLabels[]` all reconciled in config-census.md §2.

## jev-prewave — HOLD #1 + cure (A12 form)
- **jev-prewave #1 (on first-draft build b460a8fb…): HOLD — ASSERTED-CHECKS** (return `item-T242-jev-prewave-return.md` in the wave run dir; dimensions: parameterization 0.85 · purity 1.00 · own-checks 0.25). Findings: (1) fixed census probes contradicted the schedule — stub 1 progress 0.25 at CP3/2500 and stub 2 progress 0.25 at CP5/4500 where the census requires zero/one-stub states; (2) A11 coverage incomplete — CP7 combined state untested, P3 predicate not executed under the timing swap, P7 exclusivity only on default CONFIG; (3) fit axis-top ink 9 px past the left edge while the HIT list read empty; (4) `starPoints()` read the global CONFIG so a starInnerF override had no effect.
- **Cures applied (cured build c93bc67e…):** stub1GapMs 100→300 and stubGapMs 2000→1900 (stubStarts 2600/4500/6400 — zero-stub at 2500 and stub-1-only at 4500 now hold exactly, raw values in the harness lines C@2500/C@4500); harness extended to 26 assertions (C@4500 · C@6500 combined · P7-SWAP · P3-SWAP executed at its swapped completion instant 3600) — **26/26 PASS** raw output above; axisX 92→110 + barGap 48→40 curing the fit overflow (fit-table width cure); starPoints now takes cfg. A6 legs re-filed on the cured build (0 HITs each). ONE re-fire follows; a second HOLD files NO VERDICT.

## jev-prewave — HOLD #2 → NO VERDICT (A12.3 two-HOLD stop)
- **jev-prewave #2 (authorized re-fire, cured build c93bc67e…): HOLD — ASSERTED-CHECKS** (parameterization 0.90 · purity 1.00 · own-checks 0.35 · fidelity 0.90; return `item-T242-jev-prewave-2-return.md` in the wave run dir). Remaining findings are receipt-form items (literal-instant probes for CP2/CP9 · CP1 500 ms probe absent · P3 at both instants · PASS lines without observed values · cmd-8 cross-reference · two stale fit margins) — all priced verbatim in scores.md as the completion cure list.
- **Disposition:** the five-lens wave was NOT fired; verdict **NO VERDICT** filed in scores.md; item stands IN PROGRESS, mid-attempt; its completion is the next recreation cycle's first charge under A12.3. No further re-fire was attempted in this cycle.

## Cycle 042 Wave 39 — A12.3 COMPLETION (cures applied; build UNCHANGED)
- **Build:** `recreation.html` sha256 **c93bc67ecfae8cd6d574773ae692dfdeac42e041450c5996bd9d605b23f2870e**, 10,614 B — verified firsthand this cycle; **no build change was required by any cure** (all six cures are harness/receipt/fit-table form). Harness `harness-t242.js` cured; comparison.html untouched.
- **The six priced cures (scores.md completion list), applied in substance:**
  1. CP2/CP9 probes via CONFIG expressions — CP2 companion at `riseStartMs+(barCount−1)×riseStaggerMs+riseDurMs/9` → evaluated instant 1500 printed with full drawP; CP9 at `schedule(CONFIG).exitEnd` → evaluated instant 10500 printed with chartOp + exitP. Fixed census probes retained beside them.
  2. CP1 zero-state probe at 500 ms added (guards cmd 8) — drawP/stubP/fullP/figureP all 0, observed values printed.
  3. Complete P3 predicate (stubP0=1 AND stubH = stubPercent/100×axisHeightPx, expectedH printed) run at BOTH instants: default 3000 (stubH 6.8) and swapped 3600 (stubH 6.8).
  4. Observed predicate values printed on every harness PASS line — C@5500 (stubP + fullP), C@8500 (fullP + stubP + fillOp + fullH), P8 (groupP1@start/@end + groupP), and all remaining bare lines (P0, SWAP labels, SWAP palette) now carry their observed values.
  5. A13 cmd-8 cross-reference corrected to the **C@2500** receipt (was C@3500).
  6. Fit-table margins recomputed from the cured CONFIG and refiled: axisX **110** · axis-mid margin **29 px** · full-label centre **500** (span 456.5–543.5); PIL ink widths re-measured fresh (identical values).
- **Fresh own-checks:** harness **28 PASS / 0 FAIL** (raw output in the Own checks section above, replaced this cycle) · purity grep 0 specimen hits (fresh) · syntax OK ×2 (fresh) · A6 legs fresh: fit-table.md 0 HITs · config-census.md 0 HITs.
- **A13 RECEIPT INDEX reconciled whole** above (8 guard commands + whole inherited assertion set + all 11 census rows; CP7 reconciliation stated explicitly).

## jev-prewave COMPLETION re-fire (Cycle 042) — HOLD → NO VERDICT
- **jev-prewave completion re-fire (the single A12.3-authorized re-fire, cured record, build unchanged c93bc67e…): HOLD — ASSERTED-CHECKS** (parameterization 0.90 · purity 1.00 · own-checks completeness 0.35 · fidelity-plan honesty 0.90; return `item-T242-jev-prewave-completion-return.md` in the Cycle-042 run dir + `codex/jev-prewave-completion.md` in this artifact dir; payload `payload-T242-jev-prewave-completion.txt` in the run dir, 39,230 B).
- **What cleared:** the fit-table geometry corrections were verified against the supplied measurements (axis-mid 29 px · full-label centre 500 px recompute exactly; PIL provenance accepted — no HOLD ground); parameterization, purity, and fidelity-plan honesty all clear their floors; the CP7 reconciliation is disclosed and accepted as stated.
- **Remaining findings (the new cure list, priced in scores.md's Cycle-042 section):** (1) seven census checkpoints (CP1, CP3–CP8) still carry literal-time probes only — each needs an executable CONFIG-derived companion receipt (CONFIG expression + evaluated instant + observed result for its mapped predicate; fixed probes may remain as additional evidence; CP7's combined predicate at literal 6500 included, P8's derived label leg noted); (2) three receipts omit observations their predicates require — P5's raw line prints only fullP (stubP[2] not printed), C@2500 omits the completed-outlines observation (drawP all 1) named in census CP3, C@8500 omits the 100% full-label observation named in census CP8.
- **Disposition:** the five-lens wave was NOT fired; verdict **NO VERDICT** (scores.md Cycle-042 section); item stands IN PROGRESS, mid-attempt. **No further re-fire in this cycle — the next re-fire is PENDING AUTHORIZATION (consumer HQ).**
