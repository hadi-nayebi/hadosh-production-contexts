# T243 — build record · Wave 38 · Cycle 041 · attempt 1

- **Item:** T243 — Calendar-of-days panel with crossed-out dates · queue #108 · FIRST ATTEMPT · Packet #14 (@ensan.besham "Hope = Failure (?)") @ ≈13–27 s, packet-local T04.
- **Phase A:** `runs/2026-11-18-cycle-041-wave-38/item-T243-observe-plan.md` (§1 Observe + §2 Plan + §2b gate dispositions). Schedule basis: **t=0 allocation** (build 0 = source 17.0 s; offset −4000 ms from segment-relative; window head = T242 departure + opening-expansion departure tabled in Plan §2.3).
- **Phase A gates (all fired before any build script, A9.2):** codex-observe CONFIRMED-WITH-GAPS (2 cell-level cures applied: day-16 ring conversion · day-35 slash/final target 35) · jev-observe-exit ADVANCE-WITH-GAPS (anchor reconciliation + one label-strike treatment applied) · codex-plan-review REVISE (all cures applied: one ring-cross authority · order scope · drop2P swap observable · state-anchor comparison map · set-geometry disposition) · jev-plan-exit REVISE/UNBOUND-SCHEDULE (payload predated the plan-review cures; remaining charges completed: anchor table · P5 full predicate · count rule · controls/Node check · validator bounds). Returns in the wave run dir (`item-T243-*-return.md`).
- **Segment binding (guards cmd 5):** cut from packet `source.mp4` (h264 720×1280, 155.617 s) at 12.5–27.5 s (window 13–27 ± 0.5 handles) → `segment.mp4`: h264 720×1280 + AAC, duration 15.000 s, 535,305 B, sha256 d5cee28bd0da61dd1c9f18a4e56d4da95efbae599e19e4951e2e4ebf9733ed33.
- **Build:** `recreation.html` — final sha256 **c79885d23815c052dba1893089317af573a5668c4981a087c671e65483df18fb**, 18,170 B (the prewave cure round added `labelLayout`; the first-draft build f9226074… is superseded — all receipts below the cure section are on the final build). SVG single-stage scene, CONFIG at top, pure `stateAt(cfg,t)`, `window.__T243` exposed. `comparison.html` sha256 f76a0bbe7e0c4503e493c48583da96e7d6c70ef331bd0558f966f433734fa1b3, 3,471 B.
- **Pre-wave cures (builder-side, before prewave):** (1) FIT restage — first-draft stage 640×440 with numeralFontPx 15 / labelFontPx 13 measures ≈6 px ink at the 360 px stage (under guard-measured-fit's floor): restaged to the specimen's portrait proportions 480×520, fonts raised (numeral 21 · label 21), label A gloss shortened to "THAT DATE"; second measurement round showed title ink 8 px → titleFontPx 21 + tab enlarged (80×26). Final fit-table: all rows ink height 12 px, HITs 0. (2) CENSUS binding — set-geometry literals (figure, arc, tasks rows, stroke widths, extent fractions, tab geometry) bound as CONFIG keys (config-census §2); remaining outside-CONFIG literals all structural. (3) Palette-hierarchy assertion corrected during harnessing: the invariant is faint ≠ ink ∧ faint ≠ strike (default ink == strike, specimen monochrome) — Plan §2.1 wording cured in the same pass.

## Own checks — RAW output (harness: `node harness-t243.js`, artifact dir, on the final build)

```
SCHEDULE {"gridStart":0,"strikes1Start":1200,"dropStart":3200,"labelsStart":3800,"hold1End":4400,"tasksStart":5400,"sweep3Start":6400,"finalStart":8400,"completeAtMs":10400,"durationMs":12400}
VALIDATE default: null
PASS COUNTS source=35 built=35 :: cols*rows=7*5
PASS P0@0 :: gridP=0 tasksP=0 drop2P=0
PASS P1 grid-complete ZERO-anchor :: expr stateAt(CONFIG, CONFIG.gridDurMs)=1200ms per-cell strikeSum=0 ringEarlyO=1
PASS P2 strikes1-mid@2200 :: strikeFloat=10 full=10
PASS P3 strikes1-complete@3200 :: float=20 earlyCross=1 lateO=0.9999999999999998 lateCross=0
PASS ORD drop2 zero before dropStart :: drop2P=0 @3199
PASS ORD labels zero before labelsStart :: labelAStrikeP=0 labelBO=0
PASS P4 drop2-complete@3800 :: drop2P=1
PASS P5 labels-complete FULL@4400 :: expr labelsStart+labelsDurMs=4400
PASS P6 hold-identity :: JSON equal=true
PASS P7 tasks-joined@6400 :: rows=3 float=26 shift=100
PASS P8 sweep3-complete@8400 :: float=32 rows=5
PASS P9 final-complete@10400 :: full=35 slashes=33 crosses=2 day35 strikeP=1
PASS P9 count rule 33+2=35 :: 33+2
PASS P10 hold-identity :: durationMs=12400
PASS C@4400 CP6000 :: fixed@4400 float=20 | companion expr instant=4400 predicate=true
PASS C@5400 CP7000-hold :: fixed@5400 float=20 | companion expr instant=5400 predicate=true
PASS C@6400 CP8000 :: fixed@6400 float=26 | companion expr instant=6400 predicate=true
PASS C@8400 CP10000 :: fixed@8400 float=32 | companion expr instant=8400 predicate=true
PASS C@10400 CP12000 :: fixed@10400 float=35 | companion expr instant=10400 predicate=true
PASS SWAP content labels :: firstDay 1->10 labels 10..44
PASS SWAP grid 6x4 :: validate=null cells=24 full=24
PASS SWAP timing paired :: fixed@4400 drop2P default=1 swapped=0.3333333333333333 | companion expr labelsStart+labelsDurMs default=4400 swapped=5400
PASS SWAP timing companion FULL predicate at moved instant :: evaluated @5400 under strikes1DurMs=3000
PASS SWAP palette strike + hierarchy :: strike #f4f4f4->#e8b13a in render; faint (struck numerals) distinct from ink and strike in both configs (default ink==strike: specimen monochrome)
PASS VALIDATOR ringLate outside band rejected :: ringLateIdx outside its sweep band
PASS VALIDATOR panel overflow rejected :: panels overflow stage
PASS RENDER smoke + faint role :: faint struck numerals present
PASS CMP labels verbatim x1
PASS CMP segment ref x1 + stacking :: segment refs=1
PASS CMP anchor map :: map(6.5)=4400 map(12.5)=10400 knots from CONFIG schedule
SUMMARY pass=31 fail=0
```

- **Swap test (cmd 2):** content — firstDay 1→10 (labels 10..44), daysTitle→"WEEKS", timelineLabelA→"AFTER THE DEADLINE", timelineLabelB→"NEXT TIME" (harness SWAP content line). Grid — cols 7→6, rows 5→4, targets 14/18/22/24, ring indices 9/22: validates, 24 cells, all marked at its final instant. Timing — strikes1DurMs 2000→3000, PAIRED receipt: fixed probe @4400 drop2P 1 → 0.3333 (strikeFloat 20 under both) + companion instant (labelsStart + labelsDurMs) 4400 → 5400 with P5's FULL predicate executed at the moved instant. Palette — palette.strike → #e8b13a observed in render; faint-role hierarchy holds in both configs. Technique reads correctly under all swaps.
- **Purity (cmd 1):** `grep -nE "segment\.mp4|source\.mp4|<video|<img|DFFiiPMMAC3" recreation.html` → **no hits (rc=1), specimen hits 0**. `url(#id)` refs: none present. External loads: none (the only URL string is the SVG xmlns identifier). Asset inventory: recreation.html alone.
- **Syntax + seeded RNG (cmd 3):** `node --check` on both extracted scripts (recreation + comparison) → OK. Seeded RNG: NOT APPLICABLE — the build contains no randomness (no RNG anywhere; every mark is a deterministic function of CONFIG + t). Census: `Math.random` occurrences 0.
- **Comparison check:** labels verbatim ×1 each ("ORIGINAL — ensan.besham Hope = Failure (?) @ 13–27 s" · "RECREATION — T243 Calendar-of-days panel, parameterized") · segment.mp4 referenced ×1 (original side only) · anchor map knots (4.5/6.5/8.5/10.5/12.5) present with build knots CONFIG-derived at runtime · map evaluated in harness (map(6.5)=4400 · map(12.5)=10400 · map(15)=12400) · `@media (max-width:560px)` stacking ×1 · shared Play/Pause/Restart per Plan §2.4. **PIXEL-UNVERIFIED** — no browser binary in this seat; the comparison page is the render surface (standing limitation, carried to scores.md).
- **A6 legs:** fit-table.md — 9 measured PROXY rows (PIL, DejaVu Sans), HITs **0** after cures. config-census.md — all literals classified, every key incl. `figureStarPts[]` and `palette.*` resolved to value-flowing sites, HITs **0** after the binding cure.

## A13 RECEIPT INDEX (reconciled before prewave payload assembly)
(a) guards.md commands:
- cmd 1 purity — RECEIPT: grep above, 0 specimen hits.
- cmd 2 swap — RECEIPT: harness SWAP lines (content / grid / timing-paired + companion full predicate / palette + hierarchy) above.
- cmd 3 syntax + seeded-RNG census — RECEIPT: node --check OK ×2; RNG census: no RNG present (deterministic build), `Math.random` 0 occurrences — the determinism leg is satisfied by absence, printed here as its disposition (governing: guards.md cmd 3 prices seeded-RNG presence where an RNG exists).
- cmd 4 scores arithmetic — NOT-DEMANDED at builder stage: seat-side recompute after the wave; scores.md will carry the arithmetic with this disposition cited (governing: guards.md cmd 4 is the seat's filing check).
- cmd 5 segment binding — RECEIPT: segment facts above (window, ffprobe, sha).
- cmd 6 fit leg — RECEIPT: fit-table.md, 0 HITs.
- cmd 7 census leg — RECEIPT: config-census.md, 0 HITs.
- cmd 8 census-anchor probes (zero-state anchors stand: P1 strikes = 0 at grid end; P0 tasks/drop2 = 0) — RECEIPT: harness P1 line (per-cell strike sum = 0 from the CONFIG expression stateAt(CONFIG, CONFIG.gridDurMs)) + P0 line.
(b) A11 assertions (each: harness command `node harness-t243.js`, CONFIG expression, raw result):
- P0 `stateAt(CONFIG, 0)` — PASS (gridP 0, strikesFull 0, tasksP 0, drop2P 0).
- P1 `stateAt(CONFIG, CONFIG.gridDurMs)` → 1200 ms — PASS (gridP 1, 35 numerals, strike sum 0, ringEarlyO 1).
- P2 `stateAt(CONFIG, strikes1Start + CONFIG.strikes1DurMs/2)` → 2200 ms — PASS (strikeFloat 10, full 10).
- P3 `stateAt(CONFIG, strikes1Start + CONFIG.strikes1DurMs)` → 3200 ms — PASS (float 20, earlyCross 1, lateO ≈1, lateCross 0).
- P4 `stateAt(CONFIG, dropStart + CONFIG.dropDurMs)` → 3800 ms — PASS (drop2P 1, drop1P 1); pre-conditions ORD lines (drop2P 0 @3199; labelAStrikeP/labelBO 0 @3799).
- P5 `stateAt(CONFIG, labelsStart + CONFIG.labelsDurMs)` → 4400 ms — PASS, FULL CP6000 predicate.
- P6 hold identity @4900 vs P5 — PASS (full-state JSON equal).
- P7 `stateAt(CONFIG, tasksStart + CONFIG.tasksDurMs)` → 6400 ms — PASS (tasksP 1, rows 3, float 26, shift 100).
- P8 `stateAt(CONFIG, sweep3Start + CONFIG.sweep3DurMs)` → 8400 ms — PASS (float 32, rows 5).
- P9 `stateAt(CONFIG, finalStart + CONFIG.finalDurMs)` → 10400 ms — PASS (full 35 = 33 slashes + 2 crosses, day-35 strikeP 1, ringLateCross 1, labelBStrike 1, arc 0).
- P10 hold identity @10900 vs P9 — PASS. durationMs 12400.
- C@4400/5400/6400/8400/10400 fixed census probes + CONFIG-derived companions — PASS ×5 (harness lines; timing swap moves the C@4400 companion 4400→5400 and changes the fixed probe's drop2P 1→0.3333, paired receipt above).
Reconciliation: index lines = 8 guard commands (7 receipts + 1 NOT-DEMANDED with disposition) + 11 P-assertions (incl. 2 ORD pre-conditions) + 5 C-probes; planned assertion set (Plan §2.3 as amended at §2b) fully covered; expected CONFIG keys incl. nested `palette.*` and array `figureStarPts[]` reconciled in config-census.md §2. No missing line. Prewave may be spent.

## Prewave firing 1 → HOLD · ASSERTED-CHECKS (own-checks 0.35; parameterization 0.90 · purity 1.00 · fidelity 1.00)
Return: run dir `item-T243-jev-prewave-return.md` + artifact `codex/jev-prewave.md`. Named defects, ALL cured in the one cure round below: (1) paired census probes did different work on their two legs (fixed leg read strikeFloat only; CP8000/CP12000 companions omitted shift / label-B strike / arc) and the CP13000 hold had no receipt — harness now executes the SAME full predicate on both legs of all six pairs, incl. the new C@11400 CP13000-hold pair (companion expression `completeAtMs + holdMs/2`); (2) config-census omitted `labelStrikeDyPx` — §2 now carries the explicit late-bound key entries (labelStrikeDyPx · labelStrikeTopFrac · titleBaselineDy · figureHeadGap · tabR · tasksBoxR · tasksDash); (3) fit table missed the swapped label pair's shared space — the build gains `labelLayout` (CONFIG-box collision resolution, two-pass, stage-clamped; exported for the harness) and fit-table rows 10–11 measure both pairs IN POSITION (default gap 7.1 px · swapped gap 2.3 px, no overlap). The return's Limits note (payload omitted CONFIG excerpt/packet/guard list) is a feeder limitation of the assembled payload; the judge read the filed sources directly and the hold rests on filed evidence — the re-fire payload carries the same form plus this cure section.

### Cure-round own checks — RAW output (`node harness-t243.js` on the cured build, sha c79885d2…)
```
SCHEDULE {"gridStart":0,"strikes1Start":1200,"dropStart":3200,"labelsStart":3800,"hold1End":4400,"tasksStart":5400,"sweep3Start":6400,"finalStart":8400,"completeAtMs":10400,"durationMs":12400}
VALIDATE default: null
PASS COUNTS source=35 built=35 :: cols*rows=7*5
PASS P0@0 :: gridP=0 tasksP=0 drop2P=0
PASS P1 grid-complete ZERO-anchor :: expr stateAt(CONFIG, CONFIG.gridDurMs)=1200ms per-cell strikeSum=0 ringEarlyO=1
PASS P2 strikes1-mid@2200 :: strikeFloat=10 full=10
PASS P3 strikes1-complete@3200 :: float=20 earlyCross=1 lateO=0.9999999999999998 lateCross=0
PASS ORD drop2 zero before dropStart :: drop2P=0 @3199
PASS ORD labels zero before labelsStart :: labelAStrikeP=0 labelBO=0
PASS P4 drop2-complete@3800 :: drop2P=1
PASS P5 labels-complete FULL@4400 :: expr labelsStart+labelsDurMs=4400
PASS P6 hold-identity :: JSON equal=true
PASS P7 tasks-joined@6400 :: rows=3 float=26 shift=100
PASS P8 sweep3-complete@8400 :: float=32 rows=5
PASS P9 final-complete@10400 :: full=35 slashes=33 crosses=2 day35 strikeP=1
PASS P9 count rule 33+2=35 :: 33+2
PASS P10 hold-identity :: durationMs=12400
PASS C@4400 CP6000 :: fixed@4400 fullPred=true float=20 | companion expr instant=4400 fullPred=true float=20
PASS C@5400 CP7000-hold :: fixed@5400 fullPred=true float=20 | companion expr instant=5400 fullPred=true float=20
PASS C@6400 CP8000 :: fixed@6400 fullPred=true float=26 | companion expr instant=6400 fullPred=true float=26
PASS C@8400 CP10000 :: fixed@8400 fullPred=true float=32 | companion expr instant=8400 fullPred=true float=32
PASS C@10400 CP12000 :: fixed@10400 fullPred=true float=35 | companion expr instant=10400 fullPred=true float=35
PASS C@11400 CP13000-hold :: fixed@11400 fullPred=true float=35 | companion expr instant=11400 fullPred=true float=35
PASS LABELS default layout :: ax=301.4 bx=178.6 boxSep=5.7
PASS LABELS swap layout resolved :: ax 301.4->327.9 bx 178.6->152.1 boxSep=0.000
PASS SWAP content labels :: firstDay 1->10 labels 10..44
PASS SWAP grid 6x4 :: validate=null cells=24 full=24
PASS SWAP timing paired :: fixed@4400 drop2P default=1 swapped=0.3333333333333333 | companion expr labelsStart+labelsDurMs default=4400 swapped=5400
PASS SWAP timing companion FULL predicate at moved instant :: evaluated @5400 under strikes1DurMs=3000
PASS SWAP palette strike + hierarchy :: strike #f4f4f4->#e8b13a in render; faint (struck numerals) distinct from ink and strike in both configs (default ink==strike: specimen monochrome)
PASS VALIDATOR ringLate outside band rejected :: ringLateIdx outside its sweep band
PASS VALIDATOR panel overflow rejected :: panels overflow stage
PASS RENDER smoke + faint role :: faint struck numerals present
PASS CMP labels verbatim x1
PASS CMP segment ref x1 + stacking :: segment refs=1
PASS CMP anchor map :: map(6.5)=4400 map(12.5)=10400 knots from CONFIG schedule
SUMMARY pass=34 fail=0
```
A6 legs on the cured build: fit-table.md re-filed (rows 10–11 in position; measurements of rows 1–9 unchanged — the cure changed label PLACEMENT only, and only when boxes would overlap) HITs 0 · config-census.md re-filed (§2 late-bound entries) HITs 0. A13 index additions: the C@11400 CP13000-hold pair and the two LABELS layout receipts join section (b); all other index lines stand (the build's stateAt/schedule/CONFIG values are unchanged by the cure — labelLayout is render-side only, so every P/C receipt above re-executes identically, now 34/34).

## Prewave firing 2 → HOLD · ASSERTED-CHECKS (own-checks 0.45; parameterization 0.90 · purity 1.00 · fidelity 1.00)
Return: run dir `item-T243-jev-prewave-2-return.md` + artifact `codex/jev-prewave-2.md`. **Second HOLD — per A12.3 the item STOPS here: NO VERDICT, the five-lens wave is NOT fired on this build.** Firing-1's three findings are recorded by the judge as CLEARED on the filed evidence. The priced cure list for the completion cycle stands in scores.md: (1) P10's fixed hold offset (completeAtMs + 500) → a CONFIG-derived hold position (e.g. completeAtMs + holdMs/4) with the evaluated instant printed; P6's raw line likewise prints its evaluated instant beside the equality result; (2) CP13000's pair must carry a LITERAL fixed leg (11400 ms as the filed reference) distinct from its derived companion, and every census companion (not only CP6000's) files its evaluated instant + full-predicate result under the timing swap; (3) the A13 index reconciles to one entry per census pair, each naming its CONFIG expression + evaluated instant + raw predicate result, and the ORD labels receipt prints its evaluated instant (labelsStart − 1 = 3799).

## Cycle 042 completion (Wave 39 · A12.3) — priced cures from prewave firing 2, applied to the record/harness layer only

- **Build UNCHANGED:** `recreation.html` sha256 **c79885d23815c052dba1893089317af573a5668c4981a087c671e65483df18fb**, 18,170 B — re-verified firsthand this run (the firing-2 HOLD faulted receipts, not the build; parameterization 0.90 · purity 1.00 · fidelity 1.00). `comparison.html` sha256 f76a0bbe7e0c4503e493c48583da96e7d6c70ef331bd0558f966f433734fa1b3 · `segment.mp4` sha256 d5cee28bd0da61dd1c9f18a4e56d4da95efbae599e19e4951e2e4ebf9733ed33 stand. All cure edits are in `harness-t243.js` + this record + the A6 re-filings.
- **Cure 1 — hold positions CONFIG-derived + instants printed:** P10's fixed offset `completeAtMs + 500` is replaced by the CONFIG-derived hold position `completeAtMs + holdMs/4` (evaluated instant 10900 ms — same value at the default holdMs 2000, now derived, and it moves if holdMs changes); its raw line prints the expression, the evaluated instant, and the equality result. P6's raw line likewise prints its evaluated instant (`hold1End + hold1DurMs/2` = 4900 ms) beside the JSON equality result.
- **Cure 2 — CP13000 pair form + swap receipts for ALL companions:** CP13000's fixed leg now stands in the harness as the LITERAL filed reference `11400` (printed `fixed@11400 (LITERAL filed reference)`), distinct from its separately derived companion expression `completeAtMs + holdMs/2` = 11400 ms. Every census companion — CP6000 · CP7000 · CP8000 · CP10000 · CP12000 · CP13000 — now files its evaluated instant + full-predicate result under the timing swap (strikes1DurMs 2000→3000): 4400→5400 · 5400→6400 · 6400→7400 · 8400→9400 · 10400→11400 · 11400→12400, all fullPred=true (harness SWAP timing companion lines below).
- **Cure 3 — receipt-index granularity:** the A13 index below carries ONE entry per census pair, each naming its CONFIG expression, evaluated instant, and raw predicate result; the ORD labels receipt prints its evaluated instant (`labelsStart − 1` = 3799 ms). Census-pair harness lines now print the companion expression itself (`companion expr <expression>=<instant>ms`), not the instant alone.
- **A6 legs re-filed on the unchanged build:** fit-table.md HITs **0** (header re-verified; harness LABELS receipts re-executed: default ax=301.4 bx=178.6 boxSep=5.7 · swap ax 301.4→327.9 bx 178.6→152.1 boxSep=0.000) · config-census.md HITs **0** (fresh scan: hex outside CONFIG 0 · `Math.random` 0 · `url(#` 0 · only outside-CONFIG `2000` is the SVG xmlns identifier, structural).

### Completion own checks — RAW output (`node harness-t243.js`, artifact dir, on the unchanged build c79885d2…)

```
SCHEDULE {"gridStart":0,"strikes1Start":1200,"dropStart":3200,"labelsStart":3800,"hold1End":4400,"tasksStart":5400,"sweep3Start":6400,"finalStart":8400,"completeAtMs":10400,"durationMs":12400}
VALIDATE default: null
PASS COUNTS source=35 built=35 :: cols*rows=7*5
PASS P0@0 :: gridP=0 tasksP=0 drop2P=0
PASS P1 grid-complete ZERO-anchor :: expr stateAt(CONFIG, CONFIG.gridDurMs)=1200ms per-cell strikeSum=0 ringEarlyO=1
PASS P2 strikes1-mid@2200 :: strikeFloat=10 full=10
PASS P3 strikes1-complete@3200 :: float=20 earlyCross=1 lateO=0.9999999999999998 lateCross=0
PASS ORD drop2 zero before dropStart :: drop2P=0 @3199
PASS ORD labels zero before labelsStart :: expr labelsStart-1=3799ms labelAStrikeP=0 labelBO=0
PASS P4 drop2-complete@3800 :: drop2P=1
PASS P5 labels-complete FULL@4400 :: expr labelsStart+labelsDurMs=4400
PASS P6 hold-identity@4900 :: expr hold1End+hold1DurMs/2=4900ms JSON equal=true
PASS P7 tasks-joined@6400 :: rows=3 float=26 shift=100
PASS P8 sweep3-complete@8400 :: float=32 rows=5
PASS P9 final-complete@10400 :: full=35 slashes=33 crosses=2 day35 strikeP=1
PASS P9 count rule 33+2=35 :: 33+2
PASS P10 hold-identity@10900 :: expr completeAtMs+holdMs/4=10900ms JSON equal=true durationMs=12400
PASS C@4400 CP6000 :: fixed@4400 fullPred=true float=20 | companion expr labelsStart+labelsDurMs=4400ms fullPred=true float=20
PASS C@5400 CP7000-hold :: fixed@5400 fullPred=true float=20 | companion expr hold1End+hold1DurMs=5400ms fullPred=true float=20
PASS C@6400 CP8000 :: fixed@6400 fullPred=true float=26 | companion expr tasksStart+tasksDurMs=6400ms fullPred=true float=26
PASS C@8400 CP10000 :: fixed@8400 fullPred=true float=32 | companion expr sweep3Start+sweep3DurMs=8400ms fullPred=true float=32
PASS C@10400 CP12000 :: fixed@10400 fullPred=true float=35 | companion expr finalStart+finalDurMs=10400ms fullPred=true float=35
PASS C@11400 CP13000-hold :: fixed@11400 (LITERAL filed reference) fullPred=true float=35 | companion expr completeAtMs+holdMs/2=11400ms fullPred=true float=35
PASS LABELS default layout :: ax=301.4 bx=178.6 boxSep=5.7
PASS LABELS swap layout resolved :: ax 301.4->327.9 bx 178.6->152.1 boxSep=0.000
PASS SWAP content labels :: firstDay 1->10 labels 10..44
PASS SWAP grid 6x4 :: validate=null cells=24 full=24
PASS SWAP timing paired :: fixed@4400 drop2P default=1 swapped=0.3333333333333333 | companion expr labelsStart+labelsDurMs default=4400 swapped=5400
PASS SWAP timing companion CP6000 FULL predicate at moved instant :: expr labelsStart+labelsDurMs default=4400 swapped=5400 fullPred=true evaluated @5400 under strikes1DurMs=3000
PASS SWAP timing companion CP7000-hold :: expr hold1End+hold1DurMs default=5400 swapped=6400 fullPred=true float=20 under strikes1DurMs=3000
PASS SWAP timing companion CP8000 :: expr tasksStart+tasksDurMs default=6400 swapped=7400 fullPred=true float=26 under strikes1DurMs=3000
PASS SWAP timing companion CP10000 :: expr sweep3Start+sweep3DurMs default=8400 swapped=9400 fullPred=true float=32 under strikes1DurMs=3000
PASS SWAP timing companion CP12000 :: expr finalStart+finalDurMs default=10400 swapped=11400 fullPred=true float=35 under strikes1DurMs=3000
PASS SWAP timing companion CP13000-hold :: expr completeAtMs+holdMs/2 default=11400 swapped=12400 fullPred=true float=35 under strikes1DurMs=3000
PASS SWAP palette strike + hierarchy :: strike #f4f4f4->#e8b13a in render; faint (struck numerals) distinct from ink and strike in both configs (default ink==strike: specimen monochrome)
PASS VALIDATOR ringLate outside band rejected :: ringLateIdx outside its sweep band
PASS VALIDATOR panel overflow rejected :: panels overflow stage
PASS RENDER smoke + faint role :: faint struck numerals present
PASS CMP labels verbatim x1
PASS CMP segment ref x1 + stacking :: segment refs=1
PASS CMP anchor map :: map(6.5)=4400 map(12.5)=10400 knots from CONFIG schedule
SUMMARY pass=39 fail=0
```

- **Purity (cmd 1), fresh:** `grep -nE "segment\.mp4|source\.mp4|<video|<img|DFFiiPMMAC3" recreation.html` → **no hits (rc=1), specimen hits 0**. External loads: none.
- **Syntax + seeded RNG (cmd 3), fresh:** `node --check` on both extracted scripts (recreation + comparison) → OK ×2. `Math.random` occurrences 0 — deterministic build, no RNG (disposition as filed at attempt 1).

## A13 RECEIPT INDEX — Cycle 042 completion (reconciled whole; supersedes the attempt-1 index for this re-fire)

(a) guards.md commands:
- cmd 1 purity — RECEIPT: grep above, 0 specimen hits (rc=1).
- cmd 2 swap — RECEIPT: harness SWAP lines above (content / grid / timing-paired / timing companions ×6 / palette + hierarchy).
- cmd 3 syntax + seeded-RNG census — RECEIPT: node --check OK ×2; RNG census: no RNG present (deterministic build), `Math.random` 0 occurrences (governing: guards.md cmd 3 prices seeded-RNG presence where an RNG exists).
- cmd 4 scores arithmetic — NOT-DEMANDED at builder stage: seat-side recompute after the wave; scores.md carries the arithmetic with this disposition cited (governing: guards.md cmd 4 is the seat's filing check).
- cmd 5 segment binding — RECEIPT: segment facts at attempt 1 stand (cut 12.5–27.5 s from packet source.mp4 → segment.mp4 h264 720×1280 + AAC, 15.000 s, 535,305 B, sha256 d5cee28bd0da61dd1c9f18a4e56d4da95efbae599e19e4951e2e4ebf9733ed33 — sha re-verified this run).
- cmd 6 fit leg — RECEIPT: fit-table.md, 0 HITs (completion re-filed, build unchanged).
- cmd 7 census leg — RECEIPT: config-census.md, 0 HITs (completion re-filed, build unchanged; fresh scan in its header).
- cmd 8 census-anchor probes (zero-state anchors stand: P1 strikes = 0 at grid end; P0 tasks/drop2 = 0) — RECEIPT: harness P1 line (per-cell strike sum = 0 from the CONFIG expression `stateAt(CONFIG, CONFIG.gridDurMs)` = 1200 ms) + P0 line.

(b) A11 assertions — inherited WHOLE from the filed prior harness (every checkpoint it evaluated, by name; harness command for each: `node harness-t243.js`):
- COUNTS source=35 built=35 — PASS (cols*rows=7*5).
- P0 `stateAt(CONFIG, 0)` → 0 ms — PASS (gridP 0, strikesFull 0, tasksP 0, drop2P 0).
- P1 `stateAt(CONFIG, CONFIG.gridDurMs)` → 1200 ms — PASS (gridP 1, 35 numerals, per-cell strikeSum 0, ringEarlyO 1) — zero-state anchor (cmd 8).
- P2 `stateAt(CONFIG, strikes1Start + CONFIG.strikes1DurMs/2)` → 2200 ms — PASS (strikeFloat 10, full 10).
- P3 `stateAt(CONFIG, strikes1Start + CONFIG.strikes1DurMs)` → 3200 ms — PASS (float 20, earlyCross 1, lateO ≈1, lateCross 0).
- ORD drop2 pre-condition `stateAt(CONFIG, dropStart − 1)` → 3199 ms — PASS (drop2P 0 @3199).
- ORD labels pre-condition `stateAt(CONFIG, labelsStart − 1)` → **3799 ms** — PASS (expr labelsStart-1=3799ms, labelAStrikeP 0, labelBO 0).
- P4 `stateAt(CONFIG, dropStart + CONFIG.dropDurMs)` → 3800 ms — PASS (drop2P 1, drop1P 1).
- P5 `stateAt(CONFIG, labelsStart + CONFIG.labelsDurMs)` → 4400 ms — PASS, FULL CP6000 predicate (harness P5 line + C@4400 line).
- P6 hold identity `stateAt(CONFIG, hold1End + CONFIG.hold1DurMs/2)` → **4900 ms** — PASS (expr hold1End+hold1DurMs/2=4900ms, JSON equal=true vs P5 state).
- P7 `stateAt(CONFIG, tasksStart + CONFIG.tasksDurMs)` → 6400 ms — PASS (tasksP 1, rows 3, float 26, shift 100).
- P8 `stateAt(CONFIG, sweep3Start + CONFIG.sweep3DurMs)` → 8400 ms — PASS (float 32, rows 5).
- P9 `stateAt(CONFIG, finalStart + CONFIG.finalDurMs)` → 10400 ms — PASS (full 35 = 33 slashes + 2 crosses, day-35 strikeP 1, ringLateCross 1, labelBStrike 1, arc 0).
- P9 count rule — PASS (rendered slashes 33 + crosses 2 = 35 = strikesFull).
- P10 hold identity `stateAt(CONFIG, completeAtMs + CONFIG.holdMs/4)` → **10900 ms** — PASS (expr completeAtMs+holdMs/4=10900ms, JSON equal=true vs P9 state, durationMs 12400). CONFIG-derived per cure 1 — no fixed offset remains.
- LABELS default layout — PASS (ax=301.4 bx=178.6 boxSep=5.7, unshifted, separated).
- LABELS swap layout resolved — PASS (ax 301.4→327.9 bx 178.6→152.1 boxSep=0.000).
- VALIDATOR ringLate outside band — PASS (rejected: "ringLateIdx outside its sweep band").
- VALIDATOR panel overflow — PASS (rejected: "panels overflow stage").
- RENDER smoke + faint role — PASS (faint struck numerals present in render).
- CMP labels verbatim ×1 — PASS. CMP segment ref ×1 + stacking — PASS (segment refs=1, @media (max-width:560px) present). CMP anchor map — PASS (map(6.5)=4400, map(12.5)=10400, knots from CONFIG schedule).

(c) Census pairs — ONE entry per pair (cure 3); each: fixed leg · companion CONFIG expression · evaluated instant · raw predicate result · timing-swap receipt (strikes1DurMs 2000→3000):
- **CP6000** — fixed@4400 fullPred=true float=20 · companion expr `labelsStart + labelsDurMs` = 4400 ms fullPred=true float=20 · swap: expr default=4400 swapped=5400 fullPred=true (evaluated @5400) + paired fixed-probe receipt (drop2P 1 → 0.3333 @4400).
- **CP7000 (hold)** — fixed@5400 fullPred=true float=20 · companion expr `hold1End + hold1DurMs` = 5400 ms fullPred=true float=20 (full predicate + full-state equality vs P5 state) · swap: default=5400 swapped=6400 fullPred=true float=20.
- **CP8000** — fixed@6400 fullPred=true float=26 · companion expr `tasksStart + tasksDurMs` = 6400 ms fullPred=true float=26 · swap: default=6400 swapped=7400 fullPred=true float=26.
- **CP10000** — fixed@8400 fullPred=true float=32 · companion expr `sweep3Start + sweep3DurMs` = 8400 ms fullPred=true float=32 · swap: default=8400 swapped=9400 fullPred=true float=32.
- **CP12000** — fixed@10400 fullPred=true float=35 · companion expr `finalStart + finalDurMs` = 10400 ms fullPred=true float=35 · swap: default=10400 swapped=11400 fullPred=true float=35.
- **CP13000 (hold)** — fixed@**11400 (LITERAL filed reference)** fullPred=true float=35 · companion expr `completeAtMs + holdMs/2` = 11400 ms fullPred=true float=35 (full predicate + full-state equality vs P9 state), separately derived from the literal leg · swap: default=11400 swapped=12400 fullPred=true float=35.

Reconciliation: index lines = 8 guard commands (7 receipts + 1 NOT-DEMANDED with disposition) + 21 P/LABELS/VALIDATOR/RENDER/CMP assertions inherited whole (incl. 2 ORD pre-conditions, both now printing evaluated instants) + 6 census-pair entries (one per pair, each with its swap receipt); planned assertion set (Plan §2.3 as amended at §2b) fully covered; expected CONFIG keys incl. nested `palette.*` and array `figureStarPts[]` reconciled in config-census.md §2. No assertion dropped; no missing line. The completion prewave re-fire may be spent.
