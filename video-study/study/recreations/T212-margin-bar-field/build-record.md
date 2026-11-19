# T212 — build record · Cycle 038 Wave 35 · FIRST ATTEMPT

- **Item:** T212 — margin bar field · queue #99 · Packet #12 (Vox "The Electoral College, explained").
- **Plan authority:** `runs/2026-11-18-cycle-038-wave-35/item-T212-observe-plan.md` AS AMENDED at its §2b (four gates fired before any build script, A9.2: codex-observe CONFIRMED-WITH-GAPS · jev-observe-exit RETURN-TO-OBSERVE cured in §1 · codex-plan-review REVISE applied · jev-plan-exit REVISE/UNBOUND-SCHEDULE applied).
- **Schedule basis:** segment-anchored (buildMs = segment-relative ms; segment = source 157–172 s), with ONE named allocation: sub-second stacked-field growth at the cut (census departure table in the item record §2.3).
- **Final build:** recreation.html sha256 `05cf7ad79c95ff0146e212196b4ef3449c3741793797c6b049f52a5e17ac7e03` · 15,617 B. Cure rounds on the build: (1) flatten-formula cure — the swap test caught the winner segment capping at (1 − winner share) instead of the full bar (stateAt winner term `fP·(1−share)` → `fP`); (2) fit cure — labelFontPx 20→28, stageH 440→480 (fit-table.md); (3) census cure — unapplied keys `palette.paper` + `title` removed (config-census.md). All receipts below are from the final build.
- **Construction:** single SVG scene; CONFIG at top; per-state stacked rects (dem/grey/rep) morphing to winner colour at flatten, dotted winner-colour extension per state; one pure `stateAt(cfg,t)` evaluator exposed as `window.__T212`.

## §1 Segment binding (guards.md command 5)
Cut at Execute from the archived source `hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/source.webm` (488.301 s, vp9 1920×1080): `ffmpeg -ss 156.5 -t 16.0`, re-encoded libx264/yuv420p + AAC, faststart.
Raw ffprobe of `segment.mp4`:
```
codec_name=h264
width=1920
height=1080
codec_name=aac
duration=16.012957
size=1528784
d3545a122bb813596d8f11c0563592a1c39fd88d2c718fae839b80d36afbaad1  segment.mp4
```
Window check: cut covers source 156.5–172.5 s ⊇ packet window 157–172 s (±0.5 s handles) ✓.

## §2 Own checks — raw harness output (A9.4; harness = node, CONFIG + logic scripts extracted from recreation.html and evaluated via vm)
```
PASS VALIDATE-DEFAULT :: ok=true errors=[]
PASS DERIVE :: completeAtMs=13784 durationMs=14784 maxDots=24 maxDotSpanPx=166.2 headroomPx=166.2
PASS COUNT-SOURCE :: states=50
PASS CP0@0 :: all zero
PASS P1@892 :: CA demF=0.61
PASS P2@4000 :: hold, arcs 0
PASS P3@5550 :: arc1P=0.5
PASS C@6000 :: arc1P=0.9835 (eased value at the census instant; raw phase 1000/1100)
PASS P4@8750 :: bar0 flattenP=0.5 labelOpacity=0.715
PASS C@8000 :: arc2 complete, flatten 0
PASS P5@9892 :: all flat, line/labels 0
PASS C@10000 :: winnerFull all
PASS P6@11100 :: fieldScale=0.26
PASS C@12000 :: CA dotsVisible=6.72
PASS P7@12150 :: bar0 dotP=0.5
PASS P8@13784 :: CA dots=24
PASS P9@14284 :: hold identity
PASS SWAP-CONTENT :: validate ok=true Gamma dotFull=22 winners=dem,rep,dem,rep,rep,dem
PASS SWAP-TIMING-DOTS :: probe instant 12150 -> 13050; completeAt 13784 -> 14684
PASS SWAP-TIMING-REJECTED :: errors=["phase order: dots start 9000 before shrink end 11100"]
PASS SWAP-PALETTE :: swapped rep=#2e9e6b; renderer binds palette.rep to rep rects + rep-winner dots (render script)
SUMMARY pass=21 fail=0
```
Syntax (command 3): `node --check` rc=0 on all three recreation script blocks (t212-config · t212-logic · t212-render) and on the comparison script. RNG census: `Math.random` grep count 0 — **RNG ABSENT** (no randomness exists by construction).
Purity grep (command 1) raw: pattern `segment\.mp4|source\.webm|source\.mp4|<video|<img|ajavsMbCapY` over recreation.html → **0 hits**. `url(#id)` scan → no occurrences. External-asset scan (`src=|href=|@import|url(`) → the only matches are the SVG namespace string in the render script (an identifier URI, never fetched) — **NO EXTERNAL REFERENCES**; asset inventory = recreation.html alone (zero external assets).
Comparison check: comparison.html receipts — `HANDLE_OFFSET_S = 0.5` present (mapping `buildMs = (video.currentTime − 0.5) × 1000` clamped [0,15000]: video 3.0 s → buildMs 2500) · labels verbatim ("ORIGINAL — Vox Electoral College @ 2:37–2:52" · "RECREATION — T212 margin bar field, parameterized") · phone stacking `@media (max-width:560px)` column rule + sticky controls · comparison script syntax rc=0. Browser playback is not exercisable in this seat — PIXEL-UNVERIFIED, carried to scores.md.
Palette-swap observed values (cure-round receipt, stub-DOM render of the actual render script under the swapped CONFIG — created elements' attributes captured):
```
PASS PALETTE-RENDERED :: stub-DOM render under swapped CONFIG: rep rect fill=#2e9e6b (bar 0 rep segment) · rep-winner dot fill=#2e9e6b
```
Cure-round receipts (jev-prewave firing 1, all four named defects; build unchanged, sha stands):
```
PASS C@14000 :: stateAt(CONFIG,14000) full equality vs P8@13784
PASS P4-CA@8750 :: CA flattenP=0.4582 (CONFIG expr: easeFlatten(clamp01((8750-(tFlattenMs+4*flattenStaggerMs))/flattenDurMs)) = eased 0.4787) labelOpacity=0.715 (= 1 - mean flattenP, CONFIG-derived)
PASS SWAP-CENSUS-MOVEMENT :: C@12000 CA dotsVisible default=6.72 -> swapped(tDotsMs=12200)=0 (the census-instant probe moves with the CONFIG timing swap)
PASS PALETTE-RENDERED :: (above)
SUMMARY pass=4 fail=0
```
On the C*/P2 instant form (firing-1 defect 1): the C* probes are census-fixed instants BY DESIGN (their governing Plan form, §2.3 as amended under jev-plan-exit) — what A11/A12 require is that their evaluated states are CONFIG-derived and move under a CONFIG timing swap; SWAP-CENSUS-MOVEMENT is that receipt (the C@12000 probe's value changes 6.72 → 0 under the swap), and every C* receipt in §2 prints its CONFIG-expression evaluation. P2's instant (4000 ms) is the census stacked-hold instant; its state (shares at CONFIG values, arcs 0) is CONFIG-derived at that instant.

## §3 A6 legs (on the final build)
- fit-table.md — 0 HITs carried (first-pass ink-height HIT at font 20 cured in CONFIG pre-filing; cure recorded on the fit table's face). Rows: longest label ink 231×27 in a 258.8 diagonal (margin 27.8) · minimum ink height @360 = 11.2 px ≥ floor · swap-set labels measured.
- config-census.md — 0 HITs (two unapplied keys removed pre-filing, recorded on the census's face): all literals classified, every CONFIG key incl. nested `states[]` keys resolved to value-flowing sites, no CSS variables in use.

## §4 Fidelity plan (implemented / deferred)
Implemented: stacked share field with per-state dem/grey/rep shares + majority line + rotated labels (SB-A/B) · yellow annotation arcs (SB-C) · flatten morph to single winner colour with labels/line fading on the flatten phase (SB-D) · shrink to equal solid winner strip (SB-E) · dotted winner-colour extension growth, counts from loserUnits (SB-F) · completed hold with NO dissolve (SB-G). Deferred (named, lawful): the Minnesota detail card overlaying the tail from ≈171.5 s (T213, a separate technique) · the T211 map that precedes the window and the T214 ranked bars that follow it (neighbouring techniques) · a measured dot-count scaling rule for loserUnits (values carried as VISUAL ESTIMATES, priced in Observe — the packet itself supplies no per-state dot data).

## §5 RECEIPT INDEX (A13) — reconciled before payload assembly
Reconciliation performed against: guards.md commands 1–8 · the amended Plan's A11 assertions (CP0, P1–P9, C@6000/8000/10000/12000/14000) · expected CONFIG keys incl. nested/array `states[]` keys (config-census §2 = the expected set). Result: **no missing expected line; every line below carries its receipt or a NOT-DEMANDED line with a governing citation.**

| Index line | Receipt / disposition |
|---|---|
| cmd 1 — purity grep | §2 raw: 0 hits; `url(#id)` none to classify |
| cmd 2 — swap test | §2 raw: SWAP-CONTENT · SWAP-TIMING-DOTS (moved instants 12150→13050, completeAt 13784→14684) · SWAP-TIMING-REJECTED (phase-order validation) · SWAP-PALETTE — all PASS |
| cmd 3 — syntax + RNG census | §2: node --check rc=0 ×4 scripts · RNG ABSENT (grep 0) |
| cmd 4 — scores arithmetic | NOT-DEMANDED for the builder record — seat-side at consolidation (INSTRUCTION §5.5) |
| cmd 5 — segment binding | §1 raw ffprobe: 16.012957 s, h264 1920×1080, covers 156.5–172.5 ⊇ window |
| cmd 6 — measured-fit leg | fit-table.md: 0 HITs carried; PIL rows on its face |
| cmd 7 — config-census leg | config-census.md: 0 HITs; key→site table on its face |
| cmd 8 — census-anchor zero-state probe | §2 CP0@0 PASS (stateAt returns zero heights/dots at t = CONFIG.tGrowMs) |
| A11 CP0 @0 | §2 CP0@0 — CONFIG expression: stateAt(CONFIG, CONFIG.tGrowMs) = 0 ms |
| A11 P1 @892 | §2 P1 — expression: tGrowMs + growDurMs + growStaggerMs·(states.length−1) = 892; CA demF = 0.61 = CONFIG share |
| A11 P2 @4000 | §2 P2 — stacked hold, arcs 0 |
| A11 P3 @5550 | §2 P3 — expression: tArcMs + arcDurMs/2 = 5550; arc1P = 0.5 |
| A11 P4 @8750 | §2 P4 — expression: tFlattenMs + flattenDurMs/2 = 8750; flattenP 0.5 |
| A11 P5 @9892 | §2 P5 — expression: tFlattenMs + flattenDurMs + flattenStaggerMs·(states.length−1) = 9892; all flat |
| A11 P6 @11100 | §2 P6 — expression: tShrinkMs + shrinkDurMs = 11100; fieldScale = stripFraction |
| A11 P7 @12150 | §2 P7 — expression: tDotsMs + dotsDurMs/2 = 12150; dotP 0.5 (moves to 13050 under the timing swap, §2 SWAP-TIMING-DOTS) |
| A11 P8 @13784 | §2 P8 — expression: completeAtMs (derived) = 13784; CA dots = round(100 × dotsPerUnit) = 24 = max |
| A11 P9 @14284 | §2 P9 — expression: completeAtMs + 500; full state equality vs P8 |
| A11 C@6000 | §2 C@6000 — census instant: arc1P eased 0.9835, arc2P 0 |
| A11 C@8000 | §2 C@8000 — census instant: arc2P 1, flattenP 0 all bars |
| A11 C@10000 | §2 C@10000 — census instant: flattenP 1 all bars |
| A11 C@12000 | §2 C@12000 — census instant: strip at stripFraction, CA dotsVisible 6.72 (partial) |
| A11 C@14000 | §2 cure-round C@14000 PASS — raw: stateAt(CONFIG,14000) full equality vs P8@13784 (bars + fieldScale) |
| Dotted-fit assertion | §2 DERIVE: maxDotSpanPx 166.2 ≤ headroomPx 166.2 (CONFIG expression values printed) |
| Phase-order invariant | §2 VALIDATE-DEFAULT ok + SWAP-TIMING-REJECTED receipt |
| Census rows for expected CONFIG keys | config-census.md §2 — every expected key (nested/array incl.) carries its site; no expected key lacks a row |

## §6 Prewave disposition
- **Firing 1 (final build sha 05cf7ad7…): HOLD — primary ASSERTED-CHECKS** (parameterization 0.93 · purity pre-check 0.95 · own-checks completeness 0.35 · fidelity-plan honesty 0.95). Return filed verbatim at `codex/jev-prewave.md`. Four named defects, all receipt-form, cured in ONE cure round with the build unchanged: (1) C*/P2 instants' CONFIG derivation — answered with the SWAP-CENSUS-MOVEMENT receipt + the design note in §2 (census-fixed instants, CONFIG-derived states); (2) C@14000 lacked a raw evaluation — C@14000 receipt added; (3) P4's planned assertion conflicted with its receipt — the Plan wording was the defect (stagger/mean ignored); item record P4 amended to the CONFIG-derived values and the P4-CA receipt added; (4) palette swap lacked a rendered result — PALETTE-RENDERED stub-DOM capture added. Fresh own-checks stand (§2: 21/21 on the unchanged build + cure round 4/4).
- **Firing 2 (same build, cured record): HOLD — primary ASSERTED-CHECKS** (parameterization 0.93 · purity pre-check 0.95 · own-checks completeness 0.40 · fidelity-plan honesty 0.95). Return filed verbatim at `codex/jev-prewave-refire.md`. **Second HOLD → the two-HOLD stop applies (A12.3): NO VERDICT is filed, the five-lens wave is NOT fired on this build, and the priced cures stand in scores.md for the completion cycle.** Three named defects remain, all receipt-form: (1) the census-fixed P2/C* instants still do not satisfy A11's CONFIG-derived-instant requirement as the sole census assertions (the judge acknowledges the Plan's fixed-sample design but finds no guard exception) — the completion cycle must re-derive the checkpoint set so each census checkpoint's evaluation instant is a CONFIG expression (re-anchoring the schedule so census instants coincide with CONFIG phase expressions, with the timing swap moving them); (2) the P4-CA receipt labels the raw phase (0.4787) and the eased result (0.4582) in one breath — the receipt must print raw phase and eased result as separate identified values; (3) P1/P2/P8 receipts print only CA or summary predicates — the completion harness must print the full predicates (P1: every bar's share sum; P2: per-bar equality vs P1; P8: every state's dot count vs the formula).

## §7 Cycle 039 Wave 36 — A12.3 COMPLETION (cures applied; build UNCHANGED)
- **Build hash before:** sha256 `05cf7ad79c95ff0146e212196b4ef3449c3741793797c6b049f52a5e17ac7e03` · 15,617 B. **Build hash after:** sha256 `05cf7ad79c95ff0146e212196b4ef3449c3741793797c6b049f52a5e17ac7e03` · 15,617 B — **IDENTICAL: recreation.html was NOT modified.** All three filed cures are receipt-form cures; they are discharged in this record's harness and receipts, not in build code.
- **Cure 1 — census-instant form:** every census checkpoint is now carried as a CONFIG-expression probe (never a bare fixed instant as sole assertion): CP4000/P2 = `CONFIG.tArcMs - 1000` → 4000 · C6000 = `CONFIG.tArcMs + 1000` → 6000 · C8000 = `CONFIG.tFlattenMs` → 8000 · C10000 = `CONFIG.tShrinkMs - 300` → 10000 · C12000 = `CONFIG.tDotsMs + 700` → 12000 · C14000 = `derive(CONFIG).completeAtMs + 216` → 14000 · CP0 = `CONFIG.tGrowMs` → 0. The timing swap (tArcMs/tFlattenMs/tShrinkMs/tDotsMs each +900, validateConfig ok=true) moves EVERY census instant by +900 — receipt `SWAP-CENSUS-MOVEMENT (cure 1)` in the raw output below (default→swapped per checkpoint). The prior fixed-instant C* probes stand only as the evaluated values of these expressions, never as sole census assertions.
- **Cure 2 — P4 receipt:** the P4-CA receipt in the raw output below prints `RAW_PHASE_VALUE = 0.478667` and `EASED_RESULT_VALUE = 0.458244` as separately identified values, with the CONFIG expression for each and the observed stateAt flattenP (= EASED_RESULT_VALUE).
- **Cure 3 — full-predicate receipts:** the raw output below prints P1's share sum for all 50 bars, P2's per-bar equality vs P1 for all 50 bars, and P8's dot count vs `round(loserUnits × dotsPerUnit)` for every state (all 50) — raw observed results.
- **Fresh own-checks:** new harness (node, CONFIG + logic scripts extracted from recreation.html and evaluated via vm; palette-rendered via stub-DOM render of the actual render script) — **SUMMARY pass=26 fail=0** + PALETTE-RENDERED PASS. Syntax: `node --check` rc=0 on all three recreation script blocks (fresh, this cycle) and the comparison script stands at rc=0 from §2 (comparison.html unchanged). Purity grep (cmd 1): 0 hits. RNG census: `Math.random` grep count 0 — RNG ABSENT.
- **A6 legs (fresh statement):** build unchanged (hash identical above), so fit-table.md and config-census.md — both measured on this exact hash — stand unmodified: fit-table.md **0 HITs**, config-census.md **0 HITs**. No build change means no leg re-measurement is demanded; the legs' filed hash line matches the current build hash verbatim.

### §7.1 RECEIPT INDEX (A13) — reconciled for Cycle 039 completion
Reconciliation performed against: guards.md commands 1–8 · the inherited A11 assertion set WHOLE (A13.2 — CP0, P1–P9, C@6000/8000/10000/12000/14000; no assertion dropped, none leaves the set) · expected CONFIG keys incl. nested/array `states[]` keys (config-census §2 = the expected set). Result: **no missing expected line; every line carries its receipt (CONFIG expression + evaluated value, raw observed result) or a NOT-DEMANDED line with governing citation.**

| Index line | Receipt / disposition (Cycle 039) |
|---|---|
| cmd 1 — purity grep | §7 fresh: pattern `segment\.mp4\|source\.webm\|source\.mp4\|<video\|<img\|ajavsMbCapY` over recreation.html → 0 hits; `url(#id)` none |
| cmd 2 — swap test | §7.2 raw: SWAP-CONTENT · SWAP-TIMING-DOTS (12150→13050, completeAt 13784→14684) · SWAP-TIMING-REJECTED · SWAP-PALETTE + PALETTE-RENDERED (rects 50, circles 105 at #2e9e6b) · SWAP-CENSUS-MOVEMENT (cure 1) — all PASS |
| cmd 3 — syntax + RNG census | §7 fresh: node --check rc=0 ×3 recreation scripts · RNG ABSENT (grep 0) |
| cmd 4 — scores arithmetic | NOT-DEMANDED for the builder record — seat-side at consolidation (INSTRUCTION §5.5) |
| cmd 5 — segment binding | §1 raw ffprobe stands (segment.mp4 unchanged): 16.012957 s, h264 1920×1080, covers 156.5–172.5 ⊇ window |
| cmd 6 — measured-fit leg | fit-table.md: 0 HITs; build hash unchanged (§7 head) so the filed PIL rows bind to this build |
| cmd 7 — config-census leg | config-census.md: 0 HITs; build hash unchanged so the key→site table binds to this build |
| cmd 8 — census-anchor zero-state probe | §7.2 raw CP0: stateAt(CONFIG, CONFIG.tGrowMs)=0 ms → all zero |
| A11 CP0 | §7.2 CP0 — expr `CONFIG.tGrowMs` evaluated 0 |
| A11 P1 | §7.2 P1-FULL-PREDICATE — expr `CONFIG.tGrowMs+CONFIG.growDurMs+CONFIG.growStaggerMs*(states.length-1)` evaluated 892; share sum printed for all 50 bars (cure 3) |
| A11 P2 / census CP4000 | §7.2 P2-FULL-PREDICATE — expr `CONFIG.tArcMs - 1000` evaluated 4000 (cure 1); per-bar equality vs P1 printed for all 50 bars (cure 3) |
| A11 P3 | §7.2 P3 — expr `CONFIG.tArcMs+CONFIG.arcDurMs/2` evaluated 5550; arc1P 0.5 |
| A11 P4 | §7.2 P4-CA RECEIPT — expr `CONFIG.tFlattenMs+CONFIG.flattenDurMs/2` evaluated 8750; RAW_PHASE_VALUE 0.478667 and EASED_RESULT_VALUE 0.458244 separately identified (cure 2) |
| A11 P5 | §7.2 P5 — expr `CONFIG.tFlattenMs+CONFIG.flattenDurMs+CONFIG.flattenStaggerMs*(states.length-1)` evaluated 9892; all flat |
| A11 P6 | §7.2 P6 — expr `CONFIG.tShrinkMs+CONFIG.shrinkDurMs` evaluated 11100; fieldScale 0.26 |
| A11 P7 | §7.2 P7 — expr `CONFIG.tDotsMs+CONFIG.dotsDurMs/2` evaluated 12150; dotP 0.5 (moves to 13050 under SWAP-TIMING-DOTS) |
| A11 P8 | §7.2 P8-FULL-PREDICATE — expr `derive(CONFIG).completeAtMs` evaluated 13784; dot count vs round(loserUnits × dotsPerUnit) printed for every state (cure 3) |
| A11 P9 | §7.2 P9 — expr `derive(CONFIG).completeAtMs+500` evaluated 14284; full equality vs P8 |
| A11 C@6000 | §7.2 C@6000 CONFIG-EXPR — expr `CONFIG.tArcMs + 1000` evaluated 6000; rawPhase 0.909091, eased arc1P 0.983471 (cure 1) |
| A11 C@8000 | §7.2 C@8000 CONFIG-EXPR — expr `CONFIG.tFlattenMs` evaluated 8000; arc2P 1, flattenP 0 all (cure 1) |
| A11 C@10000 | §7.2 C@10000 CONFIG-EXPR — expr `CONFIG.tShrinkMs - 300` evaluated 10000; winnerFull all (cure 1) |
| A11 C@12000 | §7.2 C@12000 CONFIG-EXPR — expr `CONFIG.tDotsMs + 700` evaluated 12000; CA dotsVisible 6.718273 (cure 1) |
| A11 C@14000 | §7.2 C@14000 CONFIG-EXPR — expr `derive(CONFIG).completeAtMs + 216` evaluated 14000; full equality vs P8 (cure 1) |
| Dotted-fit assertion | §7.2 DOTTED-FIT: maxDotSpanPx 166.2 ≤ headroomPx 166.2 (CONFIG expression values printed) |
| Phase-order invariant | §7.2 VALIDATE-DEFAULT ok + SWAP-TIMING-REJECTED receipt |
| Census rows for expected CONFIG keys | config-census.md §2 — every expected key (nested/array incl.) carries its site; no expected key lacks a row; build unchanged |

### §7.2 Fresh own-checks — raw harness output (Cycle 039, verbatim)
```
PASS VALIDATE-DEFAULT :: ok=true errors=[]
PASS DERIVE :: completeAtMs=13784 durationMs=14784 maxDots=24 maxDotSpanPx=166.2 headroomPx=166.2
PASS COUNT-SOURCE :: states=50
PASS DOTTED-FIT :: maxDotSpanPx=166.2 <= headroomPx=166.2 (CONFIG expr: (maxDots-1)*dotPitchPx+2*dotRadiusPx <= fieldH*(1-stripFraction)-4)
PASS CP0@CONFIG.tGrowMs=0 :: expr=CONFIG.tGrowMs evaluated=0 all zero
P1-FULL-PREDICATE instant expr=CONFIG.tGrowMs+CONFIG.growDurMs+CONFIG.growStaggerMs*(states.length-1) evaluated=892
  P1 bar[0] Alabama demF=0.340000 greyF=0.040000 repF=0.620000 SUM=1.000000 expected=1.000000 OK
  P1 bar[1] Alaska demF=0.360000 greyF=0.130000 repF=0.510000 SUM=1.000000 expected=1.000000 OK
  P1 bar[2] Arizona demF=0.450000 greyF=0.060000 repF=0.490000 SUM=1.000000 expected=1.000000 OK
  P1 bar[3] Arkansas demF=0.330000 greyF=0.070000 repF=0.600000 SUM=1.000000 expected=1.000000 OK
  P1 bar[4] California demF=0.610000 greyF=0.080000 repF=0.310000 SUM=1.000000 expected=1.000000 OK
  P1 bar[5] Colorado demF=0.480000 greyF=0.090000 repF=0.430000 SUM=1.000000 expected=1.000000 OK
  P1 bar[6] Connecticut demF=0.540000 greyF=0.060000 repF=0.400000 SUM=1.000000 expected=1.000000 OK
  P1 bar[7] Delaware demF=0.530000 greyF=0.060000 repF=0.410000 SUM=1.000000 expected=1.000000 OK
  P1 bar[8] Florida demF=0.470000 greyF=0.040000 repF=0.490000 SUM=1.000000 expected=1.000000 OK
  P1 bar[9] Georgia demF=0.450000 greyF=0.050000 repF=0.500000 SUM=1.000000 expected=1.000000 OK
  P1 bar[10] Hawaii demF=0.620000 greyF=0.080000 repF=0.300000 SUM=1.000000 expected=1.000000 OK
  P1 bar[11] Idaho demF=0.270000 greyF=0.140000 repF=0.590000 SUM=1.000000 expected=1.000000 OK
  P1 bar[12] Illinois demF=0.550000 greyF=0.070000 repF=0.380000 SUM=1.000000 expected=1.000000 OK
  P1 bar[13] Indiana demF=0.370000 greyF=0.060000 repF=0.570000 SUM=1.000000 expected=1.000000 OK
  P1 bar[14] Iowa demF=0.410000 greyF=0.080000 repF=0.510000 SUM=1.000000 expected=1.000000 OK
  P1 bar[15] Kansas demF=0.360000 greyF=0.080000 repF=0.560000 SUM=1.000000 expected=1.000000 OK
  P1 bar[16] Kentucky demF=0.320000 greyF=0.060000 repF=0.620000 SUM=1.000000 expected=1.000000 OK
  P1 bar[17] Louisiana demF=0.380000 greyF=0.040000 repF=0.580000 SUM=1.000000 expected=1.000000 OK
  P1 bar[18] Maine demF=0.470000 greyF=0.090000 repF=0.440000 SUM=1.000000 expected=1.000000 OK
  P1 bar[19] Maryland demF=0.600000 greyF=0.070000 repF=0.330000 SUM=1.000000 expected=1.000000 OK
  P1 bar[20] Massachusetts demF=0.600000 greyF=0.080000 repF=0.320000 SUM=1.000000 expected=1.000000 OK
  P1 bar[21] Michigan demF=0.470000 greyF=0.080000 repF=0.450000 SUM=1.000000 expected=1.000000 OK
  P1 bar[22] Minnesota demF=0.460000 greyF=0.090000 repF=0.450000 SUM=1.000000 expected=1.000000 OK
  P1 bar[23] Mississippi demF=0.400000 greyF=0.030000 repF=0.570000 SUM=1.000000 expected=1.000000 OK
  P1 bar[24] Missouri demF=0.380000 greyF=0.060000 repF=0.560000 SUM=1.000000 expected=1.000000 OK
  P1 bar[25] Montana demF=0.350000 greyF=0.090000 repF=0.560000 SUM=1.000000 expected=1.000000 OK
  P1 bar[26] Nebraska demF=0.330000 greyF=0.090000 repF=0.580000 SUM=1.000000 expected=1.000000 OK
  P1 bar[27] Nevada demF=0.470000 greyF=0.080000 repF=0.450000 SUM=1.000000 expected=1.000000 OK
  P1 bar[28] New Hampshire demF=0.470000 greyF=0.070000 repF=0.460000 SUM=1.000000 expected=1.000000 OK
  P1 bar[29] New Jersey demF=0.550000 greyF=0.040000 repF=0.410000 SUM=1.000000 expected=1.000000 OK
  P1 bar[30] New Mexico demF=0.480000 greyF=0.120000 repF=0.400000 SUM=1.000000 expected=1.000000 OK
  P1 bar[31] New York demF=0.590000 greyF=0.050000 repF=0.360000 SUM=1.000000 expected=1.000000 OK
  P1 bar[32] North Carolina demF=0.460000 greyF=0.050000 repF=0.490000 SUM=1.000000 expected=1.000000 OK
  P1 bar[33] North Dakota demF=0.270000 greyF=0.100000 repF=0.630000 SUM=1.000000 expected=1.000000 OK
  P1 bar[34] Ohio demF=0.430000 greyF=0.060000 repF=0.510000 SUM=1.000000 expected=1.000000 OK
  P1 bar[35] Oklahoma demF=0.280000 greyF=0.070000 repF=0.650000 SUM=1.000000 expected=1.000000 OK
  P1 bar[36] Oregon demF=0.500000 greyF=0.110000 repF=0.390000 SUM=1.000000 expected=1.000000 OK
  P1 bar[37] Pennsylvania demF=0.470000 greyF=0.050000 repF=0.480000 SUM=1.000000 expected=1.000000 OK
  P1 bar[38] Rhode Island demF=0.540000 greyF=0.080000 repF=0.380000 SUM=1.000000 expected=1.000000 OK
  P1 bar[39] South Carolina demF=0.400000 greyF=0.060000 repF=0.540000 SUM=1.000000 expected=1.000000 OK
  P1 bar[40] South Dakota demF=0.310000 greyF=0.080000 repF=0.610000 SUM=1.000000 expected=1.000000 OK
  P1 bar[41] Tennessee demF=0.340000 greyF=0.060000 repF=0.600000 SUM=1.000000 expected=1.000000 OK
  P1 bar[42] Texas demF=0.430000 greyF=0.050000 repF=0.520000 SUM=1.000000 expected=1.000000 OK
  P1 bar[43] Utah demF=0.270000 greyF=0.280000 repF=0.450000 SUM=1.000000 expected=1.000000 OK
  P1 bar[44] Vermont demF=0.560000 greyF=0.150000 repF=0.290000 SUM=1.000000 expected=1.000000 OK
  P1 bar[45] Virginia demF=0.490000 greyF=0.070000 repF=0.440000 SUM=1.000000 expected=1.000000 OK
  P1 bar[46] Washington demF=0.520000 greyF=0.120000 repF=0.360000 SUM=1.000000 expected=1.000000 OK
  P1 bar[47] West Virginia demF=0.260000 greyF=0.060000 repF=0.680000 SUM=1.000000 expected=1.000000 OK
  P1 bar[48] Wisconsin demF=0.460000 greyF=0.070000 repF=0.470000 SUM=1.000000 expected=1.000000 OK
  P1 bar[49] Wyoming demF=0.210000 greyF=0.120000 repF=0.670000 SUM=1.000000 expected=1.000000 OK
PASS P1@892 FULL share-sum all-50 :: every bar demF+greyF+repF=1
PASS P1-CA :: CA demF=0.61 CONFIG expr states[4].dem/100=0.61
P2-FULL-PREDICATE instant expr=CONFIG.tArcMs - 1000 evaluated=4000 (census CP@4000 stacked hold)
  P2 bar[0] Alabama demF=0.340000 greyF=0.040000 repF=0.620000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[1] Alaska demF=0.360000 greyF=0.130000 repF=0.510000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[2] Arizona demF=0.450000 greyF=0.060000 repF=0.490000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[3] Arkansas demF=0.330000 greyF=0.070000 repF=0.600000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[4] California demF=0.610000 greyF=0.080000 repF=0.310000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[5] Colorado demF=0.480000 greyF=0.090000 repF=0.430000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[6] Connecticut demF=0.540000 greyF=0.060000 repF=0.400000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[7] Delaware demF=0.530000 greyF=0.060000 repF=0.410000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[8] Florida demF=0.470000 greyF=0.040000 repF=0.490000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[9] Georgia demF=0.450000 greyF=0.050000 repF=0.500000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[10] Hawaii demF=0.620000 greyF=0.080000 repF=0.300000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[11] Idaho demF=0.270000 greyF=0.140000 repF=0.590000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[12] Illinois demF=0.550000 greyF=0.070000 repF=0.380000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[13] Indiana demF=0.370000 greyF=0.060000 repF=0.570000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[14] Iowa demF=0.410000 greyF=0.080000 repF=0.510000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[15] Kansas demF=0.360000 greyF=0.080000 repF=0.560000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[16] Kentucky demF=0.320000 greyF=0.060000 repF=0.620000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[17] Louisiana demF=0.380000 greyF=0.040000 repF=0.580000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[18] Maine demF=0.470000 greyF=0.090000 repF=0.440000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[19] Maryland demF=0.600000 greyF=0.070000 repF=0.330000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[20] Massachusetts demF=0.600000 greyF=0.080000 repF=0.320000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[21] Michigan demF=0.470000 greyF=0.080000 repF=0.450000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[22] Minnesota demF=0.460000 greyF=0.090000 repF=0.450000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[23] Mississippi demF=0.400000 greyF=0.030000 repF=0.570000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[24] Missouri demF=0.380000 greyF=0.060000 repF=0.560000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[25] Montana demF=0.350000 greyF=0.090000 repF=0.560000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[26] Nebraska demF=0.330000 greyF=0.090000 repF=0.580000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[27] Nevada demF=0.470000 greyF=0.080000 repF=0.450000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[28] New Hampshire demF=0.470000 greyF=0.070000 repF=0.460000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[29] New Jersey demF=0.550000 greyF=0.040000 repF=0.410000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[30] New Mexico demF=0.480000 greyF=0.120000 repF=0.400000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[31] New York demF=0.590000 greyF=0.050000 repF=0.360000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[32] North Carolina demF=0.460000 greyF=0.050000 repF=0.490000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[33] North Dakota demF=0.270000 greyF=0.100000 repF=0.630000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[34] Ohio demF=0.430000 greyF=0.060000 repF=0.510000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[35] Oklahoma demF=0.280000 greyF=0.070000 repF=0.650000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[36] Oregon demF=0.500000 greyF=0.110000 repF=0.390000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[37] Pennsylvania demF=0.470000 greyF=0.050000 repF=0.480000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[38] Rhode Island demF=0.540000 greyF=0.080000 repF=0.380000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[39] South Carolina demF=0.400000 greyF=0.060000 repF=0.540000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[40] South Dakota demF=0.310000 greyF=0.080000 repF=0.610000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[41] Tennessee demF=0.340000 greyF=0.060000 repF=0.600000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[42] Texas demF=0.430000 greyF=0.050000 repF=0.520000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[43] Utah demF=0.270000 greyF=0.280000 repF=0.450000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[44] Vermont demF=0.560000 greyF=0.150000 repF=0.290000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[45] Virginia demF=0.490000 greyF=0.070000 repF=0.440000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[46] Washington demF=0.520000 greyF=0.120000 repF=0.360000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[47] West Virginia demF=0.260000 greyF=0.060000 repF=0.680000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[48] Wisconsin demF=0.460000 greyF=0.070000 repF=0.470000 vsP1maxDiff=0.00e+0 EQUAL=true
  P2 bar[49] Wyoming demF=0.210000 greyF=0.120000 repF=0.670000 vsP1maxDiff=0.00e+0 EQUAL=true
PASS P2@CONFIG.tArcMs-1000=4000 FULL per-bar equality vs P1 + arcs 0 :: expr=CONFIG.tArcMs - 1000 evaluated=4000 arcs=0,0
PASS P3@5550 :: expr=CONFIG.tArcMs+CONFIG.arcDurMs/2 evaluated=5550 arc1P=0.5
PASS C@6000 CONFIG-EXPR :: expr=CONFIG.tArcMs + 1000 evaluated=6000 rawPhase=0.909091 eased arc1P=0.983471 arc2P=0
P4-CA RECEIPT instant expr=CONFIG.tFlattenMs+CONFIG.flattenDurMs/2 evaluated=8750 bar=California index=4
  P4-CA RAW_PHASE_VALUE = clamp01((8750-(CONFIG.tFlattenMs+4*CONFIG.flattenStaggerMs))/CONFIG.flattenDurMs) = clamp01((8750-(8000+4*8))/1500) = 0.478667
  P4-CA EASED_RESULT_VALUE = easeFlatten(RAW_PHASE_VALUE) = EASINGS[easeInOut](0.478667) = 0.458244
  P4-CA OBSERVED stateAt flattenP = 0.458244
PASS P4-CA raw/eased separate :: RAW_PHASE_VALUE=0.478667 EASED_RESULT_VALUE=0.458244
  P4-BAR0 RAW_PHASE_VALUE = 0.500000 ; EASED_RESULT_VALUE = 0.500000 ; OBSERVED = 0.500000
PASS P4@8750 bar0 + labelOpacity :: expr=CONFIG.tFlattenMs+CONFIG.flattenDurMs/2 evaluated=8750 bar0flattenP=0.5 labelOpacity=0.715339
PASS C@8000 CONFIG-EXPR :: expr=CONFIG.tFlattenMs evaluated=8000 arc2P=1 flattenP all 0
PASS P5@9892 :: expr=CONFIG.tFlattenMs+CONFIG.flattenDurMs+CONFIG.flattenStaggerMs*(states.length-1) evaluated=9892 all flat, line/labels 0
PASS C@10000 CONFIG-EXPR :: expr=CONFIG.tShrinkMs - 300 evaluated=10000 winnerFull all bars
PASS P6@11100 :: expr=CONFIG.tShrinkMs+CONFIG.shrinkDurMs evaluated=11100 fieldScale=0.26
PASS C@12000 CONFIG-EXPR :: expr=CONFIG.tDotsMs + 700 evaluated=12000 fieldScale=0.26 CA dotsVisible=6.718273
PASS P7@12150 :: expr=CONFIG.tDotsMs+CONFIG.dotsDurMs/2 evaluated=12150 bar0 dotP=0.5
P8-FULL-PREDICATE instant expr=derive(CONFIG).completeAtMs evaluated=13784 formula=round(states[i].loserUnits * CONFIG.dotsPerUnit), CONFIG.dotsPerUnit=0.24
  P8 state[0] Alabama loserUnits=12 formula round(12*0.24)=3 observed dotFull=3 dotsVisible=3.0000 MATCH=true
  P8 state[1] Alaska loserUnits=2 formula round(2*0.24)=0 observed dotFull=0 dotsVisible=0.0000 MATCH=true
  P8 state[2] Arizona loserUnits=17 formula round(17*0.24)=4 observed dotFull=4 dotsVisible=4.0000 MATCH=true
  P8 state[3] Arkansas loserUnits=7 formula round(7*0.24)=2 observed dotFull=2 dotsVisible=2.0000 MATCH=true
  P8 state[4] California loserUnits=100 formula round(100*0.24)=24 observed dotFull=24 dotsVisible=24.0000 MATCH=true
  P8 state[5] Colorado loserUnits=14 formula round(14*0.24)=3 observed dotFull=3 dotsVisible=3.0000 MATCH=true
  P8 state[6] Connecticut loserUnits=9 formula round(9*0.24)=2 observed dotFull=2 dotsVisible=2.0000 MATCH=true
  P8 state[7] Delaware loserUnits=3 formula round(3*0.24)=1 observed dotFull=1 dotsVisible=1.0000 MATCH=true
  P8 state[8] Florida loserUnits=60 formula round(60*0.24)=14 observed dotFull=14 dotsVisible=14.0000 MATCH=true
  P8 state[9] Georgia loserUnits=25 formula round(25*0.24)=6 observed dotFull=6 dotsVisible=6.0000 MATCH=true
  P8 state[10] Hawaii loserUnits=3 formula round(3*0.24)=1 observed dotFull=1 dotsVisible=1.0000 MATCH=true
  P8 state[11] Idaho loserUnits=4 formula round(4*0.24)=1 observed dotFull=1 dotsVisible=1.0000 MATCH=true
  P8 state[12] Illinois loserUnits=28 formula round(28*0.24)=7 observed dotFull=7 dotsVisible=7.0000 MATCH=true
  P8 state[13] Indiana loserUnits=16 formula round(16*0.24)=4 observed dotFull=4 dotsVisible=4.0000 MATCH=true
  P8 state[14] Iowa loserUnits=9 formula round(9*0.24)=2 observed dotFull=2 dotsVisible=2.0000 MATCH=true
  P8 state[15] Kansas loserUnits=7 formula round(7*0.24)=2 observed dotFull=2 dotsVisible=2.0000 MATCH=true
  P8 state[16] Kentucky loserUnits=10 formula round(10*0.24)=2 observed dotFull=2 dotsVisible=2.0000 MATCH=true
  P8 state[17] Louisiana loserUnits=11 formula round(11*0.24)=3 observed dotFull=3 dotsVisible=3.0000 MATCH=true
  P8 state[18] Maine loserUnits=4 formula round(4*0.24)=1 observed dotFull=1 dotsVisible=1.0000 MATCH=true
  P8 state[19] Maryland loserUnits=16 formula round(16*0.24)=4 observed dotFull=4 dotsVisible=4.0000 MATCH=true
  P8 state[20] Massachusetts loserUnits=19 formula round(19*0.24)=5 observed dotFull=5 dotsVisible=5.0000 MATCH=true
  P8 state[21] Michigan loserUnits=24 formula round(24*0.24)=6 observed dotFull=6 dotsVisible=6.0000 MATCH=true
  P8 state[22] Minnesota loserUnits=14 formula round(14*0.24)=3 observed dotFull=3 dotsVisible=3.0000 MATCH=true
  P8 state[23] Mississippi loserUnits=7 formula round(7*0.24)=2 observed dotFull=2 dotsVisible=2.0000 MATCH=true
  P8 state[24] Missouri loserUnits=15 formula round(15*0.24)=4 observed dotFull=4 dotsVisible=4.0000 MATCH=true
  P8 state[25] Montana loserUnits=3 formula round(3*0.24)=1 observed dotFull=1 dotsVisible=1.0000 MATCH=true
  P8 state[26] Nebraska loserUnits=5 formula round(5*0.24)=1 observed dotFull=1 dotsVisible=1.0000 MATCH=true
  P8 state[27] Nevada loserUnits=8 formula round(8*0.24)=2 observed dotFull=2 dotsVisible=2.0000 MATCH=true
  P8 state[28] New Hampshire loserUnits=4 formula round(4*0.24)=1 observed dotFull=1 dotsVisible=1.0000 MATCH=true
  P8 state[29] New Jersey loserUnits=22 formula round(22*0.24)=5 observed dotFull=5 dotsVisible=5.0000 MATCH=true
  P8 state[30] New Mexico loserUnits=5 formula round(5*0.24)=1 observed dotFull=1 dotsVisible=1.0000 MATCH=true
  P8 state[31] New York loserUnits=62 formula round(62*0.24)=15 observed dotFull=15 dotsVisible=15.0000 MATCH=true
  P8 state[32] North Carolina loserUnits=27 formula round(27*0.24)=6 observed dotFull=6 dotsVisible=6.0000 MATCH=true
  P8 state[33] North Dakota loserUnits=2 formula round(2*0.24)=0 observed dotFull=0 dotsVisible=0.0000 MATCH=true
  P8 state[34] Ohio loserUnits=30 formula round(30*0.24)=7 observed dotFull=7 dotsVisible=7.0000 MATCH=true
  P8 state[35] Oklahoma loserUnits=9 formula round(9*0.24)=2 observed dotFull=2 dotsVisible=2.0000 MATCH=true
  P8 state[36] Oregon loserUnits=10 formula round(10*0.24)=2 observed dotFull=2 dotsVisible=2.0000 MATCH=true
  P8 state[37] Pennsylvania loserUnits=34 formula round(34*0.24)=8 observed dotFull=8 dotsVisible=8.0000 MATCH=true
  P8 state[38] Rhode Island loserUnits=3 formula round(3*0.24)=1 observed dotFull=1 dotsVisible=1.0000 MATCH=true
  P8 state[39] South Carolina loserUnits=11 formula round(11*0.24)=3 observed dotFull=3 dotsVisible=3.0000 MATCH=true
  P8 state[40] South Dakota loserUnits=3 formula round(3*0.24)=1 observed dotFull=1 dotsVisible=1.0000 MATCH=true
  P8 state[41] Tennessee loserUnits=15 formula round(15*0.24)=4 observed dotFull=4 dotsVisible=4.0000 MATCH=true
  P8 state[42] Texas loserUnits=66 formula round(66*0.24)=16 observed dotFull=16 dotsVisible=16.0000 MATCH=true
  P8 state[43] Utah loserUnits=8 formula round(8*0.24)=2 observed dotFull=2 dotsVisible=2.0000 MATCH=true
  P8 state[44] Vermont loserUnits=2 formula round(2*0.24)=0 observed dotFull=0 dotsVisible=0.0000 MATCH=true
  P8 state[45] Virginia loserUnits=21 formula round(21*0.24)=5 observed dotFull=5 dotsVisible=5.0000 MATCH=true
  P8 state[46] Washington loserUnits=20 formula round(20*0.24)=5 observed dotFull=5 dotsVisible=5.0000 MATCH=true
  P8 state[47] West Virginia loserUnits=4 formula round(4*0.24)=1 observed dotFull=1 dotsVisible=1.0000 MATCH=true
  P8 state[48] Wisconsin loserUnits=15 formula round(15*0.24)=4 observed dotFull=4 dotsVisible=4.0000 MATCH=true
  P8 state[49] Wyoming loserUnits=1 formula round(1*0.24)=0 observed dotFull=0 dotsVisible=0.0000 MATCH=true
PASS P8@13784 FULL dot-count vs formula all-50 :: CA dots=24 expected round(100*0.24)=24
PASS C@14000 CONFIG-EXPR :: expr=derive(CONFIG).completeAtMs + 216 evaluated=14000 full equality vs P8@13784 =true
PASS P9@14284 :: expr=derive(CONFIG).completeAtMs+500 evaluated=14284 hold identity=true
  SWAP-CENSUS-INSTANT CP4000/P2 expr=CONFIG.tArcMs - 1000 default=4000 swapped=4900 delta=900 MOVED=true
  SWAP-CENSUS-INSTANT C6000 expr=CONFIG.tArcMs + 1000 default=6000 swapped=6900 delta=900 MOVED=true
  SWAP-CENSUS-INSTANT C8000 expr=CONFIG.tFlattenMs default=8000 swapped=8900 delta=900 MOVED=true
  SWAP-CENSUS-INSTANT C10000 expr=CONFIG.tShrinkMs - 300 default=10000 swapped=10900 delta=900 MOVED=true
  SWAP-CENSUS-INSTANT C12000 expr=CONFIG.tDotsMs + 700 default=12000 swapped=12900 delta=900 MOVED=true
  SWAP-CENSUS-INSTANT C14000 expr=derive(CONFIG).completeAtMs + 216 default=14000 swapped=14900 delta=900 MOVED=true
PASS SWAP-CENSUS-MOVEMENT (cure 1) :: timing swap tArcMs/tFlattenMs/tShrinkMs/tDotsMs +900 (validate ok=true); every census instant moves +900
PASS SWAP-CONTENT :: validate ok=true Gamma dotFull=22 winners=dem,rep,dem,rep,rep,dem
PASS SWAP-TIMING-DOTS :: probe instant 12150 -> 13050; completeAt 13784 -> 14684
PASS SWAP-TIMING-REJECTED :: errors=["phase order: dots start 9000 before shrink end 11100"]
PASS SWAP-PALETTE :: swapped rep=#2e9e6b; renderer binds palette.rep to rep rects + rep-winner dots (render script)
SUMMARY pass=26 fail=0
PASS PALETTE-RENDERED :: stub-DOM render under swapped CONFIG: rep rect fill=#2e9e6b count=50 (bar rep segments) · rep-winner dot fill=#2e9e6b count=105
```

### §7.3 Prewave completion re-fire disposition (Cycle 039)
- **Firing (ONE, authorized under A12.3): HOLD — primary ASSERTED-CHECKS** (parameterization 0.93 · purity pre-check 0.95 · own-checks completeness 0.40 · fidelity-plan honesty 0.95). Return filed verbatim at `codex/jev-prewave-completion-cycle039.md` (+ `.raw` session log). Payload (58,416 B) carried: this build-record in full · CONFIG block verbatim · packet section (§T212 + binding priced reading) · guards.md command list · both A6 leg outputs verbatim · census-anchor mapping (A10.2 + cure-1 form).
- **What cleared:** cure 2 (P4 raw 0.478667 / eased 0.458244 separately identified) and cure 3 (P1/P2/P8 full predicates, all 50 rows each) are accepted by the judge by name; the cure-1 CONFIG-expression forms for CP4000–CP14000 are accepted (six movement rows, each +900).
- **What held (new priced cures, filed in scores.md Cycle 039 section):** (1) CP0 has no timing-swap receipt (the swap leaves tGrowMs untouched) and CP2000 has no indexed executable receipt — the judge prices both as unproven census checkpoints; (2) the fit-table minima need reconciliation (row 6's 21 px × 0.5625 = 11.8125, not 11.2; row 5's overall minimum 11.2 px lacks its source measurement/labels).
- **Disposition: HOLD applied — NO VERDICT; the five-lens wave was NOT fired on this build.** The item stays IN PROGRESS, mid-attempt. Its next re-fire is **PENDING AUTHORIZATION** (per the completion form: a further re-fire is not authorized by A12.3's single completion re-fire).
- Note on the firing path: the first firing attempt was interrupted by a service restart before any return existed (no verdict was produced or filed); the single re-fire above is the only completion re-fire that produced a return.
