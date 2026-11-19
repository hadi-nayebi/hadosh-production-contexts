# Build record — T208 paired dot counts, House stage · Wave 34 · Cycle 037

- Plan authority: `item-T208-observe-plan.md` (run dir) AS AMENDED by `plan-amendment-cycle037.md` in this directory (8 gate charges cured; filed before any build script).
- Schedule basis: **segment-anchored**. Segment = source 83.5–102.5 s; buildMs = (sourceT − 83.5) × 1000.
- Build: recreation.html sha256 `42d33e6be5327b6e059db39a3aa8fc99b5f6d7857889387e5488bc7e4fb9eaca` · 15,115 B. comparison.html sha256 `9d407cd8616a5b7d238b01f43e2fc99b38ed54c9f1d4a6f65e23ecfa9b70d253` · 2,418 B (both hashes sha256sum-verified at filing).
- Segment: segment.mp4 · ffprobe: duration **19.016 s** (prescribed 19.0) · video h264 1920×1080 · audio aac · size 1,056,861 B · sha256 `c9ec90d194c178311a0353d5570f25819a25ed3131f49538a5423c802c48cefc`. Cut command: `ffmpeg -ss 83.5 -i <digest>/source.webm -t 19.0 -c:v libx264 -pix_fmt yuv420p -c:a aac -b:a 96k`.
- Construction: DOM + inline SVG; one compiled schedule (compileSchedule) drives rendering, seek, and checkpoint evaluation; dots and tiles on separate layers; Vermont has exactly one reveal (the square→dot morph); ratios derived (`ratioMode:'derived'`, `ratioRounding:1000`), never literal.
- Loaded-asset inventory: recreation.html loads only its inline CSS/JS (no external scripts, styles, fonts, images, or media; texture = CSS gradient; silhouettes = inline SVG paths from CONFIG tokens). comparison.html loads segment.mp4 (labeled ORIGINAL side only) + recreation.html (iframe).
- Fidelity plan: implements tiles→count-ups→cascade→morph→paired hold→annotation per the census; defers nothing silently — reductions named: entrance transition renders only its incoming half (amendment C4); silhouettes are simplified code-drawn paths by design (G4); prior/next scenes not recreated (R5 handles).
- PIXEL-UNVERIFIED: no browser binary in this seat; fit evidence is PIL rendered measurement with a named stand-in font (fit-table.md); lens verdicts are source-based; comparison.html is the render surface.

## Own checks — RAW output (A9.4, from the final build; harness re-run after both pre-wave cures)

Harness: `node /tmp/t208-harness.js recreation.html` (extracts the `core` script block, evaluates CONFIG/compileSchedule/stateAt, asserts). Exit 0. Full raw output:

```
== CONFIG census ==
columns=2 dots=37 ratios=702,000,630,000
PASS | A9.3 columns | expr: CONFIG.columns.length | raw: 2 | expect: 2
PASS | A9.3 dots total | expr: sum(columns[].count) | raw: 37 | expect: 37
PASS | A9.3 TX ratio | expr: derivedRatio(tx)=round(25268000/36/1000)*1000 | raw: 702000 | expect: 702000
PASS | A9.3 VT ratio | expr: derivedRatio(vt) | raw: 630000 | expect: 630000
== compiled schedule (default) ==
{"cols":[{"idx":0,"entranceStart":500,"entranceEnd":1500,"countUpStart":1500,"countUpEnd":3300,"revealStart":6430,"revealSettle":7780,"stagger":32.285714285714285},{"idx":1,"entranceStart":3630,"entranceEnd":4630,"countUpStart":4130,"countUpEnd":5630,"revealStart":10210,"revealSettle":10810,"stagger":0}],"annotationStart":13000,"arrowEnd":16000,"maxRevealSettle":10810}
== A11 census assertions (default CONFIG, fixed census instants) ==
PASS | CP1@2000 | expr: cols[0].visible && 0<popDisplay<population && !cols[1].visible | raw: true
   CP1 popDisplay raw=7018889
PASS | CP2@6000 | expr: cols.every(popDisplay===population) && totalStarted===0 | raw: true
PASS | CP3@7000 | expr: tx.settled in [8,16] && tx.inFlight>=1 && tx.tileOpacity<0.5 && vt.roundDots===0 | raw: true
   CP3 raw settled=11 inFlight=7 started=18 tileOpacity=0.120
PASS | CP4@8000 zero-state | expr: tx.settled===36 && tx.tileOpacity===0 && vt.roundDots===0 | raw: true
PASS | VT94.0@10500 | expr: vt.morphProgress in (0,1) | raw: true
   morphProgress raw=0.483
PASS | VT94.5@11000 | expr: vt.morphProgress===1 | raw: 1 | expect: 1
PASS | CP5@11500 | expr: vt.roundDots===1 && tx.settled===36 && ratioVisible===0 | raw: true
PASS | CP6@14500 | expr: ratioVisible===2 && ratios=[702,000,630,000] && 0<arrowProgress<1 | raw: true
   CP6 arrowProgress raw=0.5
PASS | CP7@17000 | expr: arrowProgress===1 && tx.settled===36 && vt.roundDots===1 | raw: true
== A11 CONFIG-expression evaluation instants ==
CP3-eval expr revealAnchorMs+round(0.42*cascadeMs) = 6997
CP4-eval expr revealAnchorMs+cascadeMs+dotSettleMs = 8000
PASS | CP3-eval@6997 | expr: tx.inFlight>=1 && tx.settled>=1 | raw: true
PASS | CP4-eval@8000 | expr: tx.settled===36 | raw: 36 | expect: 36
== contrast gate: earliest landing ==
firstDotStart=6430 tileOpacity=0.413 gate=0.55
PASS | EARLIEST contrast | expr: tileOpacityAt(firstDotStart) <= tileContrastGate | raw: true
== annotation gate ==
PASS | ANNOT-GATE@12999 | expr: ratioVisible===0 | raw: 0 | expect: 0
annotationStart compiled=13000
== SWAP: timing cascadeMs x1.5 ==
swapped cascadeMs=2025 CP3-eval 6997 -> 7281 CP4-eval 8000 -> 8675
PASS | TIMING swap moves CP3-eval | expr: cp3eval2>cp3eval | raw: true
PASS | TIMING swap moves CP4-eval | expr: cp4eval2>cp4eval | raw: true
PASS | TIMING CP4-eval swapped | expr: tx.settled===36 under swapped CONFIG | raw: 36 | expect: 36
PASS | TIMING CP3-eval swapped | expr: tx.inFlight>=1 under swapped CONFIG | raw: true
== SWAP: palette arrow ==
PASS | PALETTE swap | expr: CONFIG.palette.arrow | raw: "#c2543a" | expect: "#c2543a"
== SWAP fixtures: content 2-col / 1-col / 3-col ==
fixture content2 ratios=[100000,100000] totals@18999=[12,3] revealStarts=[6430,7780]
PASS | FIXTURE content2 ratios | expr: derivedRatio per column | raw: true
PASS | FIXTURE content2 dot totals | expr: settled@18999 per column | raw: true
PASS | FIXTURE content2 event order | expr: compiled reveals clamped/ordered | raw: true
fixture one ratios=[100000] totals@18999=[12] revealStarts=[6430]
PASS | FIXTURE one ratios | expr: derivedRatio per column | raw: true
PASS | FIXTURE one dot totals | expr: settled@18999 per column | raw: true
PASS | FIXTURE one event order | expr: compiled reveals clamped/ordered | raw: true
fixture three ratios=[100000,100000,50000] totals@18999=[12,3,5] revealStarts=[6430,7780,9130]
PASS | FIXTURE three ratios | expr: derivedRatio per column | raw: true
PASS | FIXTURE three dot totals | expr: settled@18999 per column | raw: true
PASS | FIXTURE three event order | expr: compiled reveals clamped/ordered | raw: true
== SUMMARY pass=31 fail=0 ==
```

Purity grep (guards.md #1), raw: pattern `segment\.mp4|source\.mp4|source\.webm|<video|<img|ajavsMbCapY|ajavsmbcapy|t95-dot|t100-tx|url\(` over recreation.html → **NO HITS** (zero `url(#id)` fragments exist, so there is nothing to classify). comparison.html contains exactly one segment reference — the labeled ORIGINAL `<video>` side, as designed.
Syntax (guards.md #3): both inline scripts extracted → `node --check` → core OK, render OK. RNG census: no `Math.random` anywhere; `seed` key present but unapplied (config-census HIT 1).
Caption census: grep `caption|subtitle|<track` over both files → NO HITS.
Comparison check (§5 leg 3): comparison.html carries both labels verbatim ("ORIGINAL — Vox Electoral College, paired dot counts @ 83.5–102.5s" · "RECREATION — T208 paired dot counts, House stage, parameterized"), ONE shared control set (Play both / Restart both drives the video; the recreation is slaved via `__T208Render(orig.currentTime*1000)` on a rAF sync + seeked events), durations matched (segment 19.016 s vs recreation durationMs 19000), phone stacking via `@media (max-width:640px)` column layout with the control bar above both sides. Render behavior is source-verified only (PIXEL-UNVERIFIED).

## A6 legs (on the final build)
- fit-table.md — final HIT list EMPTY (0). Two pre-cure floor HITs (population ink 9.4 px @360 at typeScale 30) cured by `typeScale.population` 30→36 and re-measured (11.6 px).
- config-census.md — HIT count carried: **3** after cure round 1 (seed unapplied; arrow-start baseline offset literal 14; countUpEasing unapplied — the third added by the cure, see below) + 1 printed classification note (bounds keys). Census cure before filing: tile-dissolve `80` and the render-layer shaping coefficients (opacity ramps, placeholder/annotation geometry, dash length, stroke width, tint, font stack) were moved into CONFIG; the harness was re-run after the cure (31/31 above, bound to the final hash).

## A13 RECEIPT INDEX (reconciled BEFORE the prewave payload)

Guards.md commands:
- #1 purity grep — RECEIPT: grep command + pattern above → raw result NO HITS (final build).
- #2 swap test — RECEIPT: harness run above → content 2-col + 1-col + 3-col fixtures, timing ×1.5, palette arrow — 14 swap-section PASS lines, raw values printed (ratios, totals, moved instants 6997→7281 / 8000→8675).
- #3 syntax + seeded-RNG census — RECEIPT: `node --check` core OK / render OK; RNG census raw: no `Math.random` hits; seed unapplied (config-census HIT 1).
- #4 scores arithmetic — NOT-DEMANDED at this step: no lens scores exist yet; the seat recomputes at scores.md filing (governing: guards.md #4 + INSTRUCTION §5.5).
- #5 segment binding — RECEIPT: ffprobe facts above (19.016 s, h264 1920×1080, sha256 c9ec90d1…) against the prescribed 83.5–102.5 s / 19.0 s window.
- #6 fit leg — RECEIPT: fit-table.md filed; final HIT list EMPTY (0); pre-cure HITs + cure printed in that file.
- #7 census leg — RECEIPT: config-census.md filed; HIT count **3** carried after cure round 1 (seed · arrow-offset literal · countUpEasing) + 1 classification note; key→site resolution includes nested `columns[]` keys and `columns[].events.*` / `columns[].tile.*`.
- #8 census-anchor probes — RECEIPT: CP4 is a zero-state anchor (VT round dots = 0 at 8000) → harness line `PASS | CP4@8000 zero-state` above; EARLIEST contrast probe and ANNOT-GATE probe also receipted above.

A11 assertions (every checkpoint in the amended Plan):
- CP1 — RECEIPT: harness `CP1@2000` PASS, popDisplay raw 7018889 (CONFIG expression: stateAt(CONFIG,2000).cols[0].popDisplay, population CONFIG 25268000).
- CP2 — RECEIPT: `CP2@6000` PASS.
- CP3 (fixed census instant) — RECEIPT: `CP3@7000` PASS, raw settled=11 inFlight=7 started=18 tileOpacity=0.120.
- CP3-eval (CONFIG-expression instant) — RECEIPT: expression `revealAnchorMs+round(0.42*cascadeMs)` = 6997, PASS; under timing swap the same expression = 7281 with PASS (moved instant shown).
- CP4 (fixed + CONFIG-eval; the two coincide at 8000 by construction) — RECEIPT: `CP4@8000` PASS and `CP4-eval@8000` PASS raw 36; under timing swap CP4-eval = 8675, PASS raw 36.
- VT94.0 — RECEIPT: `VT94.0@10500` PASS, morphProgress raw 0.483 (expression: (10500 − revealAnchorMs 10210)/placeholderMorphMs 600).
- VT94.5 — RECEIPT: `VT94.5@11000` PASS raw 1.
- CP5 — RECEIPT: `CP5@11500` PASS.
- CP6 — RECEIPT: `CP6@14500` PASS, arrowProgress raw 0.5; ratio values are CONFIG-derived (derivedRatio receipts in the census section: 702000 / 630000).
- CP7 — RECEIPT: `CP7@17000` PASS.
- EARLIEST (contrast gate at first landing) — RECEIPT: firstDotStart=6430 (CONFIG revealStart), tileOpacity raw 0.413 ≤ gate 0.55 (CONFIG tileContrastGate), PASS.
- ANNOT-GATE — RECEIPT: `ANNOT-GATE@12999` PASS raw 0 (compiled annotationStart 13000 from CONFIG annotationAnchorMs/holdAfterCountMs).

Reconciliation result: index lines = 8 guard commands + 12 A11 assertions = 20 lines; every line carries its receipt or a NOT-DEMANDED line with a governing citation (#4 only). Expected CONFIG keys (nested/array included) reconcile against config-census.md §2 — every key resolves to a site or a printed HIT/note (seed; bounds keys). No expected line is missing; no exclusion lacks a citation. **RECONCILED — ready for the prewave payload.**

## Binding census-anchor mapping (for the prewave + timing payloads)
Window-start offset: build 0 = source 83.5 s. Census states (segment-relative ms → prescribed state): 2000 TX alone counting · 6000 both pops complete, 0 dots · 7000 cascade mid-flight (≈11 settled) · 8000 TX 36 complete, VT 0 (zero-state anchor) · 10500 VT morph mid-flight (94.0 s sample) · 11000 VT morph complete (94.5 s sample) · 11500 paired state, no annotation · 14500 ratio labels visible, arrows mid-draw · 17000 final state. Departures from the catalogue window are printed in the item record §P3 (segment ends 102.5 s, not 111 s — T209 territory excluded).

## Cure round 1 (on jev-prewave HOLD #1 — ASSERTED-CHECKS; return filed verbatim at codex/jev-prewave.md: parameterization 0.82 · purity 0.98 · own-checks 0.40 · fidelity 0.96)

Cures applied (build UNCHANGED — hash 42d33e6b… stands; all three defects were record/harness defects):
1. **Defect 1 (CONFIG-derived instants for every checkpoint):** extension harness `node /tmp/t208-harness2.js recreation.html` evaluates EVERY checkpoint at a CONFIG-expression instant — CP1 = `columns[tx].events.countUpStartMs+500` · CP2 = `columns[tx].events.revealAnchorMs−430` · CP3 = `revealAnchorMs+round(0.42*cascadeMs)` · CP4 = `revealAnchorMs+cascadeMs+dotSettleMs` · VT40 = `columns[vt].events.revealAnchorMs+290` · VT45 = `revealAnchorMs+placeholderMorphMs+190` · CP5 = `compiledAnnotationStart−holdAfterCountMs−300` · CP6 = `annotationStart+round(arrowDrawMs/2)` · CP7 = `annotationStart+arrowDrawMs+1000` — under BOTH the default CONFIG and the timing-swapped CONFIG (cascadeMs ×1.5). Raw output below: default instants {2000,6000,6997,8000,10500,11000,11500,14500,17000}; swapped instants identical except CP3 6997→7281 and CP4 8000→8675 (the cascade-dependent instants move; the others' expressions do not contain cascadeMs, and their swapped receipts show the same evaluated instant with the full predicate re-evaluated there).
2. **Defect 2 (full predicates at the moved instants):** the extension harness evaluates the COMPLETE checkpoint predicates at the CONFIG-expression instants (CP3: settled range + in-flight ≥1 + tileOpacity <0.5 + VT round dots = 0 · CP4: settled = count + tileOpacity = 0 + VT round dots = 0), default and swapped — raw state values printed (swapped CP3: settled 13, inFlight 4, tileOpacity 0.12; swapped CP4: settled 36, tileOpacity 0).
3. **Defect 3 (census site overstatements):** config-census.md §2 corrected — `countUpEasing` now records NO application site and is added as HIT 4 (carried HIT count 2→3); `tileContrastGate` now records its actual role (harness threshold only; stateAt reads tileFadeLeadMs).

Extension harness RAW output (`node /tmp/t208-harness2.js recreation.html`, exit 0):
```
== CONFIG-expression instants (default, cascadeMs=1350) ==
{"CP1":2000,"CP2":6000,"CP3":6997,"CP4":8000,"VT40":10500,"VT45":11000,"CP5":11500,"CP6":14500,"CP7":17000}
PASS | CP1-eval@2000 (default) | expr: full CP1 predicate at CONFIG-expression instant | raw: true
PASS | CP2-eval@6000 (default) | expr: full CP2 predicate at CONFIG-expression instant | raw: true
PASS | CP3-eval@6997 (default) | expr: full CP3 predicate at CONFIG-expression instant | raw: true
   raw {"settled":11,"inFlight":7,"tileOpacity":0.12,"morph":0,"arrow":0}
PASS | CP4-eval@8000 (default) | expr: full CP4 predicate at CONFIG-expression instant | raw: true
   raw {"settled":36,"inFlight":0,"tileOpacity":0,"morph":0,"arrow":0}
PASS | VT40-eval@10500 (default) | expr: full VT40 predicate at CONFIG-expression instant | raw: true
PASS | VT45-eval@11000 (default) | expr: full VT45 predicate at CONFIG-expression instant | raw: true
PASS | CP5-eval@11500 (default) | expr: full CP5 predicate at CONFIG-expression instant | raw: true
PASS | CP6-eval@14500 (default) | expr: full CP6 predicate at CONFIG-expression instant | raw: true
PASS | CP7-eval@17000 (default) | expr: full CP7 predicate at CONFIG-expression instant | raw: true
== CONFIG-expression instants (timing-swap, cascadeMs=2025) ==
{"CP1":2000,"CP2":6000,"CP3":7281,"CP4":8675,"VT40":10500,"VT45":11000,"CP5":11500,"CP6":14500,"CP7":17000}
PASS | CP1-eval@2000 (timing-swap) | expr: full CP1 predicate at CONFIG-expression instant | raw: true
PASS | CP2-eval@6000 (timing-swap) | expr: full CP2 predicate at CONFIG-expression instant | raw: true
PASS | CP3-eval@7281 (timing-swap) | expr: full CP3 predicate at CONFIG-expression instant | raw: true
   raw {"settled":13,"inFlight":4,"tileOpacity":0.12,"morph":0,"arrow":0}
PASS | CP4-eval@8675 (timing-swap) | expr: full CP4 predicate at CONFIG-expression instant | raw: true
   raw {"settled":36,"inFlight":0,"tileOpacity":0,"morph":0,"arrow":0}
PASS | VT40-eval@10500 (timing-swap) | expr: full VT40 predicate at CONFIG-expression instant | raw: true
PASS | VT45-eval@11000 (timing-swap) | expr: full VT45 predicate at CONFIG-expression instant | raw: true
PASS | CP5-eval@11500 (timing-swap) | expr: full CP5 predicate at CONFIG-expression instant | raw: true
PASS | CP6-eval@14500 (timing-swap) | expr: full CP6 predicate at CONFIG-expression instant | raw: true
PASS | CP7-eval@17000 (timing-swap) | expr: full CP7 predicate at CONFIG-expression instant | raw: true
== SUMMARY pass=18 fail=0 ==
```
Receipt-index update: the A11 lines for CP1/CP2/VT94.0/VT94.5/CP5/CP6/CP7 now ALSO carry the cure-round receipts above (CONFIG-expression instant + full predicate + raw result, default and timing-swapped); CP3/CP4 lines now carry the full-predicate receipts at their moved instants in both configurations. The fixed-census-instant receipts in the first harness remain as the fidelity alignment record. Reconciliation stands: 20 index lines, all receipted or NOT-DEMANDED with citation.

## Cycle 038 completion cures (Wave 35 · A12.3 completion — on jev-prewave firing-2 HOLD; return filed verbatim at codex/jev-prewave-refire.md: parameterization 0.82 · purity 0.98 · own-checks 0.48 · fidelity 0.96)

Build UNCHANGED — recreation.html sha256 `42d33e6be5327b6e059db39a3aa8fc99b5f6d7857889387e5488bc7e4fb9eaca` · 15,115 B (sha256sum-verified at Cycle 038 filing). Both cures are record/harness-only; no build change was required by either cure, so no A6 leg changed its result (fresh legs below).

### Cure 1 — A11 timing-swap movement evidence for the remaining seven checkpoints
Harness: `node /tmp/t208-harness3.js recreation.html` (extracts the `core` script block, evaluates CONFIG/compileSchedule/stateAt/dotOrderIndex from the build under review; each swap is a deep-cloned CONFIG with ONLY the named timing input changed; the full checkpoint predicate from plan-amendment C3 is evaluated at the swapped instant). Exit 0. Each receipt: CONFIG expression · default instant · swapped instant · raw full-predicate result at the swapped instant (+ raw state dump in the harness output).

- CP1 — expression `columns[tx].events.countUpStartMs+500` · default 2000 · swapped 2500 (swap: `countUpStartMs` 1500→2000) · raw predicate result at 2500: **true** (popDisplay 7018889, VT not visible).
- CP2 — expression `columns[tx].events.revealAnchorMs-430` · default 6000 · swapped 6570 (swap: TX `revealAnchorMs` 6430→7000) · raw predicate result at 6570: **true** (both popDisplay at full population, totalStarted 0).
- VT40 — expression `columns[vt].events.revealAnchorMs+round(placeholderMorphMs/2)-10` (= 10210+300−10 = 10500 at default, the morph-fraction form of the cure-round-1 +290 offset) · default 10500 · swapped 10650 (swap: `placeholderMorphMs` 600→900) · raw predicate result at 10650: **true** (morphProgress 0.4889, strictly in (0,1)).
- VT45 — expression `columns[vt].events.revealAnchorMs+placeholderMorphMs+190` · default 11000 · swapped 11300 (swap: `placeholderMorphMs` 600→900) · raw predicate result at 11300: **true** (morphProgress 1, roundDots 1).
- CP5 — expression `compiledAnnotationStart-holdAfterCountMs-300`, compiledAnnotationStart = max(annotationAnchorMs, maxRevealSettle+holdAfterCountMs) · default 11500 · swapped 12100 (swap: `holdAfterCountMs` 1200→600; compiled annotationStart is anchor-bound at 13000 in both configurations, printed in the raw state) · raw predicate result at 12100: **true** (vt.roundDots 1, tx.settled 36, ratioVisible 0).
- CP6 — expression `annotationStart+round(arrowDrawMs/2)` · default 14500 · swapped 15250 (swap: `arrowDrawMs` 3000→4500) · raw predicate result at 15250: **true** (ratioVisible 2, ratios 702000/630000, arrowProgress 0.5).
- CP7 — expression `annotationStart+arrowDrawMs+1000`, annotationStart = max(annotationAnchorMs, maxRevealSettle+holdAfterCountMs) · default 17000 · swapped 18000 (swap: `annotationAnchorMs` 13000→14000; compiled annotationStart moves 13000→14000, printed in the raw state) · raw predicate result at 18000: **true** (arrowProgress 1, tx.settled 36, vt.roundDots 1).
- CP3/CP4 stand as cured in firing 1→2 (cascadeMs swap: CP3 6997→7281, CP4 8000→8675, full predicates, raw in Cure round 1 above and re-run in the fresh extension harness below). All nine checkpoints now carry a timing-swap receipt in which the swapped input is one the checkpoint's own expression reads, the instant moves, and the full predicate is re-evaluated at the moved instant.

### Cure 2 — Guard #2 geometry receipt (logic-level)
Same harness run (harness3, second section): dot positions recomputed from the build's own `dotOrderIndex` + the render formula cx = col.x + pos.col×pitch + dotR, cy = boardTop + pos.row×pitch + dotR (pitch = 2×dotR+dotGap = 47, dotR 13), under the default CONFIG vs the content-swap fixture (Alpha 12 dots @ gridCols 4 · Beta 3 dots @ gridCols 3, the harness-1 content2 fixture).
- DEFAULT TX: count 36, gridCols 6, bbox {xMin 130, xMax 391, yMin 150, yMax 411, cx 143–378, cy 163–398}; sample dots i0 (143,163) · i1 (143,210) · i2 (143,257) · i3 (143,304); last i35 (378,398).
- DEFAULT VT: count 1, gridCols 1, bbox {xMin 570, xMax 596, yMin 150, yMax 176}; dot i0 (583,163).
- SWAP Alpha: count 12, gridCols 4, bbox {xMin 130, xMax 297, yMin 150, yMax 270, cx 143–284, cy 163–257}; sample i0 (143,163) · i1 (143,210) · i2 (143,257) · i3 (190,163) — note i3 moves to column 1 under the swap (rows = ceil(12/4) = 3) vs column 0 in the default (rows 6): the grid geometry regenerates from CONFIG, it is not a traced copy. Last i11 (284,257).
- SWAP Beta: count 3, gridCols 3, bbox {xMin 570, xMax 690, yMin 150, yMax 176, cx 583–677, cy 163}; dots (583,163) · (630,163) · (677,163).
- Result: PASS — geometry regenerates under content swap (default TX bbox xMax 391 / count 36 → swap Alpha bbox xMax 297 / count 12).

### Harness3 RAW output (`node /tmp/t208-harness3.js recreation.html`, exit 0)
```
== Cycle 038 cure 1: A11 timing-swap movement for remaining seven checkpoints ==
PASS | CP1 timing-swap | expr: columns[tx].events.countUpStartMs+500 | default instant: 2000 | swapped instant: 2500 | swap: columns[tx].events.countUpStartMs 1500 -> 2000 | raw full-predicate result at swapped instant: true | raw state: {"popDisplay":7018889,"settled":0,"inFlight":0,"tileOpacity":1,"roundDots":0,"morphProgress":0,"ratioVisible":0,"arrowProgress":0,"totalStarted":0,"annotationStart":13000}
PASS | CP2 timing-swap | expr: columns[tx].events.revealAnchorMs-430 | default instant: 6000 | swapped instant: 6570 | swap: columns[tx].events.revealAnchorMs 6430 -> 7000 | raw full-predicate result at swapped instant: true | raw state: {"popDisplay":25268000,"settled":0,"inFlight":0,"tileOpacity":0.834,"roundDots":0,"morphProgress":0,"ratioVisible":0,"arrowProgress":0,"totalStarted":0,"annotationStart":13000}
PASS | VT40 timing-swap | expr: columns[vt].events.revealAnchorMs+round(placeholderMorphMs/2)-10 | default instant: 10500 | swapped instant: 10650 | swap: placeholderMorphMs 600 -> 900 | raw full-predicate result at swapped instant: true | raw state: {"popDisplay":25268000,"settled":36,"inFlight":0,"tileOpacity":0,"roundDots":0,"morphProgress":0.4888888888888889,"ratioVisible":0,"arrowProgress":0,"totalStarted":36,"annotationStart":13000}
PASS | VT45 timing-swap | expr: columns[vt].events.revealAnchorMs+placeholderMorphMs+190 | default instant: 11000 | swapped instant: 11300 | swap: placeholderMorphMs 600 -> 900 | raw full-predicate result at swapped instant: true | raw state: {"popDisplay":25268000,"settled":36,"inFlight":0,"tileOpacity":0,"roundDots":1,"morphProgress":1,"ratioVisible":0,"arrowProgress":0,"totalStarted":37,"annotationStart":13000}
PASS | CP5 timing-swap | expr: compiledAnnotationStart-holdAfterCountMs-300 (compiledAnnotationStart=max(annotationAnchorMs, maxRevealSettle+holdAfterCountMs)) | default instant: 11500 | swapped instant: 12100 | swap: holdAfterCountMs 1200 -> 600 (compiled annotationStart 13000 in both, anchor-bound) | raw full-predicate result at swapped instant: true | raw state: {"popDisplay":25268000,"settled":36,"inFlight":0,"tileOpacity":0,"roundDots":1,"morphProgress":1,"ratioVisible":0,"arrowProgress":0,"totalStarted":37,"annotationStart":13000}
PASS | CP6 timing-swap | expr: annotationStart+round(arrowDrawMs/2) | default instant: 14500 | swapped instant: 15250 | swap: arrowDrawMs 3000 -> 4500 | raw full-predicate result at swapped instant: true | raw state: {"popDisplay":25268000,"settled":36,"inFlight":0,"tileOpacity":0,"roundDots":1,"morphProgress":1,"ratioVisible":2,"arrowProgress":0.5,"totalStarted":37,"annotationStart":13000}
PASS | CP7 timing-swap | expr: annotationStart+arrowDrawMs+1000 (annotationStart=max(annotationAnchorMs, maxRevealSettle+holdAfterCountMs)) | default instant: 17000 | swapped instant: 18000 | swap: annotationAnchorMs 13000 -> 14000 | raw full-predicate result at swapped instant: true | raw state: {"popDisplay":25268000,"settled":36,"inFlight":0,"tileOpacity":0,"roundDots":1,"morphProgress":1,"ratioVisible":2,"arrowProgress":1,"totalStarted":37,"annotationStart":14000}
== Cycle 038 cure 2: Guard #2 geometry receipt (logic-level, dotOrderIndex + render cx/cy formula) ==
DEFAULT TX {"colId":"tx","count":36,"gridCols":6,"pitch":47,"bbox":{"xMin":130,"xMax":391,"yMin":150,"yMax":411,"cxMin":143,"cxMax":378,"cyMin":163,"cyMax":398},"sample":[{"i":0,"col":0,"row":0,"cx":143,"cy":163},{"i":1,"col":0,"row":1,"cx":143,"cy":210},{"i":2,"col":0,"row":2,"cx":143,"cy":257},{"i":3,"col":0,"row":3,"cx":143,"cy":304}],"last":{"i":35,"col":5,"row":5,"cx":378,"cy":398}}
DEFAULT VT {"colId":"vt","count":1,"gridCols":1,"pitch":47,"bbox":{"xMin":570,"xMax":596,"yMin":150,"yMax":176,"cxMin":583,"cxMax":583,"cyMin":163,"cyMax":163},"sample":[{"i":0,"col":0,"row":0,"cx":583,"cy":163}],"last":{"i":0,"col":0,"row":0,"cx":583,"cy":163}}
SWAP content2 Alpha {"colId":"a","count":12,"gridCols":4,"pitch":47,"bbox":{"xMin":130,"xMax":297,"yMin":150,"yMax":270,"cxMin":143,"cxMax":284,"cyMin":163,"cyMax":257},"sample":[{"i":0,"col":0,"row":0,"cx":143,"cy":163},{"i":1,"col":0,"row":1,"cx":143,"cy":210},{"i":2,"col":0,"row":2,"cx":143,"cy":257},{"i":3,"col":1,"row":0,"cx":190,"cy":163}],"last":{"i":11,"col":3,"row":2,"cx":284,"cy":257}}
SWAP content2 Beta {"colId":"b","count":3,"gridCols":3,"pitch":47,"bbox":{"xMin":570,"xMax":690,"yMin":150,"yMax":176,"cxMin":583,"cxMax":677,"cyMin":163,"cyMax":163},"sample":[{"i":0,"col":0,"row":0,"cx":583,"cy":163},{"i":1,"col":1,"row":0,"cx":630,"cy":163},{"i":2,"col":2,"row":0,"cx":677,"cy":163}],"last":{"i":2,"col":2,"row":0,"cx":677,"cy":163}}
PASS | GEOMETRY regenerates under content swap | expr: dotOrderIndex(CONFIG,col,i) + cx=col.x+pos.col*pitch+dotR, cy=boardTop+pos.row*pitch+dotR (render formula) | raw: default TX bbox xMax=391 vs swap Alpha bbox xMax=297; default TX count=36 vs swap Alpha count=12; swap Beta count=3
== SUMMARY pass=8 fail=0 ==
```

### Fresh own-checks (Cycle 038, on the unchanged build 42d33e6b…)
- Harness 1 re-run (`node /tmp/t208-harness.js recreation.html`, exit 0): **31 PASS / 0 FAIL** — identical summary to Wave 34 (census, compiled schedule, CP1–CP7 + VT samples at fixed instants, CP3/CP4 CONFIG-eval, earliest contrast 0.413 ≤ 0.55, annotation gate, cascade timing swap 6997→7281 / 8000→8675, palette swap, content 2-col/1-col/3-col fixtures). Full raw output stands in the Own checks section above for Wave 34 and was reproduced line-for-line at this re-run (same hash, same summary line `pass=31 fail=0`).
- Extension harness re-run (`node /tmp/t208-harness2.js recreation.html`, exit 0): **18 PASS / 0 FAIL** — all nine checkpoints at CONFIG-expression instants with full predicates, default + cascade timing-swap; swapped CP3 raw {settled 13, inFlight 4, tileOpacity 0.12}, swapped CP4 raw {settled 36, tileOpacity 0}; summary `pass=18 fail=0`, identical to Cure round 1.
- Cure harness (new, above): **8 PASS / 0 FAIL** (7 timing-swap movement receipts + 1 geometry receipt).
- Purity grep (guards.md #1), fresh: pattern `segment\.mp4|source\.mp4|source\.webm|<video|<img|ajavsMbCapY|ajavsmbcapy|t95-dot|t100-tx|url\(` over recreation.html → **NO HITS**. Caption census `caption|subtitle|<track` over both files → NO HITS. RNG census: no `Math.random` hits.
- Syntax (guards.md #3), fresh: both inline scripts extracted → `node --check` → core OK, render OK.
- A9.3 counts, fresh (harness 1 census section): columns **2** · dots **37** · ratios derived 702,000 / 630,000.

### Fresh A6 legs (Cycle 038)
- fit-table.md — fresh PIL re-measurement (DejaVuSans / DejaVuSans-Bold, PROXY, same instrument): ink heights @360 identical to the filed rows (name 12.0 px · population 11.6 px · ratio 13.1 px); ink widths within 2 stage px of the filed rows (Texas 137 · Vermont 212 · TX pop 202 · VT pop 145 · ratios 178/178 stage px) — all rows PASS, margins ≥ +54 stage-scaled px on the binding side. **HIT list: 0** (unchanged). Fresh note appended to fit-table.md.
- config-census.md — fresh scan on the unchanged build: `seed` sites outside CONFIG 0 · `countUpEasing` sites outside CONFIG 0 · arrow-start literal `(ly-14)` present once in the render script · core post-CONFIG literals {0, 1, 2} (2 = the pitch coefficient in `2*cfg.dotR`, structural) · no `Math.random`. Carried HITs re-priced: **3 carried, none resolved** (seed unapplied · countUpEasing unapplied · arrow-start baseline offset literal 14), each with its disposition printed in config-census.md (Cycle 038 re-price note appended there); bounds keys remain a printed classification note, not a counted HIT. No build change was made, so no HIT could resolve — the dispositions stand as filed at Wave 34.

### A13 RECEIPT INDEX — re-reconciliation (Cycle 038, BEFORE the completion prewave payload)
Guards.md commands (8):
- #1 purity grep — RECEIPT: fresh grep above → NO HITS (final build 42d33e6b…).
- #2 swap test — RECEIPT: harness 1 swap sections (timing ×1.5, palette, content 2-col/1-col/3-col fixtures, raw above in Wave 34 section, re-run 31/31) + harness3 geometry receipt (Cycle 038 cure 2: recomputed dot positions/extents, default vs content swap, raw above) + harness3 timing swaps for the seven non-cascade checkpoints (cure 1).
- #3 syntax + seeded-RNG census — RECEIPT: fresh `node --check` core OK / render OK; RNG census NO HITS for `Math.random`; seed unapplied (config-census HIT 1).
- #4 scores arithmetic — NOT-DEMANDED at this step: no lens scores exist yet at payload assembly; the seat recomputes at scores.md filing (governing: guards.md #4 + INSTRUCTION §5.5).
- #5 segment binding — RECEIPT: ffprobe facts in the header above (19.016 s, h264 1920×1080, sha256 c9ec90d1…) against the prescribed 83.5–102.5 s / 19.0 s window; segment hash re-verified at Cycle 038 (c9ec90d194c178311a0353d5570f25819a25ed3131f49538a5423c802c48cefc).
- #6 fit leg — RECEIPT: fit-table.md filed; fresh Cycle 038 re-measurement appended; HIT list 0.
- #7 census leg — RECEIPT: config-census.md filed; fresh Cycle 038 re-price appended; HIT count 3 carried (seed · countUpEasing · arrow-offset literal 14) + 1 classification note (bounds keys).
- #8 census-anchor probes — RECEIPT: CP4 zero-state anchor probed (VT round dots = 0 at 8000, harness 1 `CP4@8000 zero-state` PASS) + EARLIEST contrast probe (0.413 ≤ 0.55) + ANNOT-GATE probe (ratioVisible 0 @12999), all re-run fresh in harness 1.

A11 assertions (inherited WHOLE from the Wave 34 harness + cure-round-1 extension, A13.2 — no assertion dropped, none re-derived):
- CP1 — RECEIPT: harness 1 `CP1@2000` PASS (popDisplay raw 7018889) · extension `CP1-eval@2000` PASS default + cascade-swap · Cycle 038 cure: timing-swap via countUpStartMs, 2000→2500, full predicate raw true (harness3).
- CP2 — RECEIPT: harness 1 `CP2@6000` PASS · extension `CP2-eval@6000` PASS · Cycle 038 cure: timing-swap via revealAnchorMs, 6000→6570, full predicate raw true (harness3).
- CP3 (fixed census instant) — RECEIPT: harness 1 `CP3@7000` PASS, raw settled=11 inFlight=7 tileOpacity=0.120.
- CP3-eval (CONFIG-expression instant) — RECEIPT: `revealAnchorMs+round(0.42*cascadeMs)` = 6997 PASS; cascade swap → 7281, full predicate PASS raw {settled 13, inFlight 4, tileOpacity 0.12} (extension harness).
- CP4 (fixed + CONFIG-eval) — RECEIPT: harness 1 `CP4@8000` PASS · `CP4-eval@8000` PASS raw 36; cascade swap → 8675, full predicate PASS raw {settled 36, tileOpacity 0} (extension harness).
- VT94.0 / VT40 — RECEIPT: harness 1 `VT94.0@10500` PASS morphProgress raw 0.483 · extension `VT40-eval@10500` PASS · Cycle 038 cure: timing-swap via placeholderMorphMs, 10500→10650, full predicate raw true, morphProgress 0.4889 (harness3).
- VT94.5 / VT45 — RECEIPT: harness 1 `VT94.5@11000` PASS raw 1 · extension `VT45-eval@11000` PASS · Cycle 038 cure: timing-swap via placeholderMorphMs, 11000→11300, full predicate raw true, morphProgress 1 (harness3).
- CP5 — RECEIPT: harness 1 `CP5@11500` PASS · extension `CP5-eval@11500` PASS · Cycle 038 cure: timing-swap via holdAfterCountMs, 11500→12100, full predicate raw true (harness3).
- CP6 — RECEIPT: harness 1 `CP6@14500` PASS arrowProgress raw 0.5, ratios CONFIG-derived 702000/630000 · extension `CP6-eval@14500` PASS · Cycle 038 cure: timing-swap via arrowDrawMs, 14500→15250, full predicate raw true, arrowProgress 0.5 (harness3).
- CP7 — RECEIPT: harness 1 `CP7@17000` PASS · extension `CP7-eval@17000` PASS · Cycle 038 cure: timing-swap via annotationAnchorMs, 17000→18000, full predicate raw true, arrowProgress 1 (harness3).
- EARLIEST (contrast gate) — RECEIPT: firstDotStart 6430, tileOpacity raw 0.413 ≤ CONFIG tileContrastGate 0.55, PASS (harness 1, fresh).
- ANNOT-GATE — RECEIPT: `ANNOT-GATE@12999` PASS raw 0; compiled annotationStart 13000 (harness 1, fresh).

Reconciliation result (Cycle 038): index lines = 8 guard commands + 12 A11 assertions = 20 lines, the same set inherited whole from Wave 34 (A13.2); every line carries its receipt or a NOT-DEMANDED line with a governing citation (#4 only). The Cycle 038 cures ADD receipts under #2 and under CP1/CP2/VT40/VT45/CP5/CP6/CP7; no line was removed. Expected CONFIG keys (nested/array included) reconcile against config-census.md §2 as re-priced — every key resolves to a site or a printed HIT/note (seed · countUpEasing · bounds keys). **RECONCILED — ready for the A12.3 completion prewave payload.**
