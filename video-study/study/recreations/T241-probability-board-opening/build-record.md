# T241 — build record · Wave 38 · Cycle 041 · attempt 1

- **Item:** T241 — Probability board as the opening shot (formula first, story second) · queue #106 · FIRST ATTEMPT · Packet #14 (@ensan.besham "Hope = Failure (?)") @ 0–13 s · consumer: DLC assembler opening / diagram containers.
- **Phase A:** `runs/2026-11-18-cycle-041-wave-38/item-T241-observe-plan.md` (§1 Observe + §2 Plan as amended + §2b dispositions). Schedule basis: **two-act** (Act 1 t=0 allocation draw-on 0–1400 ms · Act 2 segment-anchored type-on/slot/dissolve at census times; departures D-a/D-b/D-c printed in §2.2).
- **Phase A gates (all fired and consumed before any build script, A9.2):** codex-observe CONFIRMED-WITH-GAPS · jev-observe-exit ADVANCE-WITH-GAPS · codex-plan-review REVISE (all cures applied) · jev-plan-exit REVISE/UNBOUND-SCHEDULE (all cures applied). Returns in the wave run dir (`item-T241-*-return.md`).
- **Segment binding (guards cmd 5):** cut from packet source.mp4 (h264 720×1280, 155.617 s) at 0–13.5 s (window 0–13 + 0.5 handle) → `segment.mp4`: h264 720×1280 + AAC, 13.500 s, 677,077 B, sha256 91451689bd48c025208bc8cded7de7ad79802f8183818e213ace673971519acd.
- **Build:** `recreation.html` — final sha256 **2c4b4e15e25a06994e9c7208a387e13e536c5f30ccc9572ccd6b93e1190b5aca**, 15,157 B. Layered inline SVG, CONFIG at top, pure `stateAt(cfg,t)` + `render(cfg,t)`, `window.__T241` exposed. `comparison.html` sha256 9782dff32ba9bea82023088af1740b839572d85b3cfb9aca885316863730ace5.
- **Pre-wave cures (builder-side, before prewave):** (1) fit cures — expansionPx 24→22 (measured overflow 778/768 > 720 at 24), calloutX 492→404 (gloss measured to x=801), slotW 86→110 + slotDx 176 (1 px margin + formula-ink overlap). (2) census cures — 16 subject-shaping literals bound as CONFIG keys (starBez, starBigFactor, connFx/Fy, leader*, bracketCyDy, ringRFactor, figureDy, iconGlyphDy, iconLegX/Len, stroke.rule, stroke.slotDash, loopTailMs). Final harness run below is on the final build.

## Own checks — RAW output (harness: `node harness-t241.js`, artifact dir)

```
SCHEDULE {"arrayEndMs":1150,"expandStart":[1400,2000,2600],"expandEndMs":3150,"slotStartMs":3500,"completeAtMs":3900,"dissolveStartMs":5300,"dissolveEndMs":6000,"durationMs":13000,"count":40}
VALIDATE default: null
PASS COUNT source=40 built=40 :: source=40 built=40
PASS CP0@expr(tReticleMs)=0 :: reticleRaw=0 iconsStarted=0
PASS CP1@expr(tMagMs+magDurMs/2)=500 :: magRaw=0.5 reticleRaw=1
PASS CP2@census1000 :: iconsComplete=25 (600+10i+160<=1000 -> i<=24)
PASS CP3@expr(expandStart[1])=2000 :: chars=[65,0,0]
PASS CP4@census3000 :: bracketsRaw=0.3333333333333333 L3chars=29/41
PASS CP5@expr(completeAtMs)=3900 :: slotRaw=1 boardOpacity=1
PASS CP6@census5000 :: reticleOpacity=0.45
PASS CP7@expr(dissolveEndMs)=6000 :: boardOpacity=0 icons=40/40
PASS CP8@expr(durationMs)=13000 hold-identity vs CP7 :: full-state JSON equal=true
PASS GEOM selectedCenter :: center={"x":360,"y":571}
PASS VALIDATOR negative duration rejected :: bad duration expandLineDurMs
PASS VALIDATOR selected out of range rejected :: selected out of range
PASS SWAP content count 40->32 :: swapped count=32
PASS SWAP content render :: formula+slot+result present in swapped render
PASS SWAP content no default claim :: default claim absent under swap at completeAt
PAIRED-TIMING fixed C@3000 L3chars default=29 swapped=0 expectedSwapped=0 (L3 starts 3500)
PASS SWAP timing paired fixed-anchor :: L3 chars move at fixed 3000
PAIRED-TIMING shifted CP5 instant expr slotStartMs+slotDurMs default=3900 swapped=5250 expandEndMs default=3150 swapped=4500
PASS SWAP timing shifted-instant executes :: slotRaw@shifted=1 completeAt 3900->5250 dissolveStart 5300->6650
PASS SWAP timing phase-order holds :: slot after expansion, dissolve after hold, ends in duration
PASS SWAP palette ink :: fill #7fd4ff in render=true
PASS RENDER smoke :: formula+slot+result line in default render
SUMMARY pass=21 fail=0
```

- **Swap test (cmd 2):** content — formula→"P(S|R) ≈ 0.87", slotWord→"luck", expansion[0]→S|R Bayes line, expansion[2]→"⇒ P(S | R) = 0.8695 ± 0.006 (p < 0.001)", array.cols 10→8 (count 40→32): swapped render carries the whole new claim unit, default claim absent. Timing — expandLineDurMs 550→1000: PAIRED receipts above (fixed C@3000 L3 chars 29→0; shifted CP5 instant 3900→5250 executed with slotRaw=1; dissolveStart 5300→6650; phase order holds). Palette — palette.ink→#7fd4ff observed in render. Technique reads correctly under all three.
- **Purity (cmd 1):** `grep -nE "segment\.mp4|source\.mp4|<video|<img|DffiIpmMAC3" recreation.html` → **no hits (rc=1), specimen hits 0**. `url(#id)` refs: none. External loads: none (only URL string is the SVG xmlns identifier). Asset inventory: recreation.html alone.
- **Syntax + seeded RNG (cmd 3):** `node --check` on both extracted scripts (recreation + comparison) → OK. Seeded RNG: NOT-APPLICABLE — the construction contains no randomness (deterministic draw-on/type-on); census prints this with its reason.
- **Comparison check:** labels verbatim ×1 each ("ORIGINAL — ensan.besham Hope = Failure (?) @ 0–13 s" · "RECREATION — T241, parameterized") · segment.mp4 referenced ×1 (original side only) · `@media (max-width:560px)` stacking present · one shared control set (play/pause/restart) driving video + recreation clock, recreation durationMs read from CONFIG at runtime · duration policy: recreation 13000 ms vs segment 13.5 s handle tail held. **PIXEL-UNVERIFIED** — no browser binary in this seat; the comparison page is the render surface (standing limitation, carried to scores.md).
- **A6 legs:** fit-table.md — 7 measured PROXY rows (PIL, DejaVu Serif), HITs **0** (expansion/callout at the 11 px floor, printed). config-census.md — all literals classified, every key incl. nested texts.expansion[]/geom.expansionY[] resolved, HITs **0**.

## A13 RECEIPT INDEX (reconciled before prewave payload assembly)
(a) guards.md commands:
- cmd 1 purity — RECEIPT: grep above, 0 specimen hits.
- cmd 2 swap — RECEIPT: harness SWAP lines (content claim-unit / timing PAIRED fixed+shifted / palette) above.
- cmd 3 syntax + seeded-RNG census — RECEIPT: node --check OK ×2; seeded RNG NOT-APPLICABLE with reason (no randomness in construction).
- cmd 4 scores arithmetic — NOT-DEMANDED at builder stage: seat-side recompute after the wave; scores.md will carry the arithmetic with this disposition cited (governing: guards.md cmd 4 is the seat's filing check).
- cmd 5 segment binding — RECEIPT: segment facts above (window, ffprobe, sha).
- cmd 6 fit leg — RECEIPT: fit-table.md, 0 HITs.
- cmd 7 census leg — RECEIPT: config-census.md, 0 HITs.
- cmd 8 census-anchor probes — RECEIPT: harness CP2@census1000 (iconsComplete=25, the Act-1 departure state), CP4@census3000 (brackets typing, slotRaw=0), CP6@census5000 (reticleOpacity=0.45 = reticleDimOpacity CONFIG value) — census instants probed against the build's state function with CONFIG expressions printed.
(b) A11 assertions (each: harness command `node harness-t241.js`, CONFIG expression, raw result):
- CP0 `stateAt(CONFIG, CONFIG.timing.tReticleMs)` → 0 ms — PASS (reticleRaw 0, iconsStarted 0).
- CP1 `stateAt(CONFIG, tMagMs + magDurMs/2)` → 500 ms — PASS (magRaw 0.5, reticleRaw 1).
- CP2 census-fixed 1000 ms — PASS (iconsComplete 25 from the CONFIG stagger arithmetic).
- CP3 `stateAt(CONFIG, expandStart[1])` → 2000 ms — PASS (chars [65,0,0]).
- CP4 census-fixed 3000 ms — PASS (bracketsRaw 0.333, L3 chars 29/41, slotRaw 0).
- CP5 `stateAt(CONFIG, completeAtMs)` → 3900 ms — PASS (slotRaw 1, boardOpacity 1, expansion complete).
- CP6 census-fixed 5000 ms — PASS (reticleOpacity = reticleDimOpacity 0.45).
- CP7 `stateAt(CONFIG, dissolveEndMs)` → 6000 ms — PASS (boardOpacity 0, icons 40/40).
- CP8 `stateAt(CONFIG, durationMs)` → 13000 ms — PASS (full-state JSON equal to CP7).
- GEOM selectedCenter from selected index — PASS ({x:360, y:571}).
Reconciliation: index lines = 8 guard commands (7 receipts + 1 NOT-DEMANDED with disposition) + 9 CP assertions + GEOM; planned assertion set (observe-plan §2.7 as amended) fully covered; expected CONFIG keys incl. nested `texts.expansion[]`, `geom.expansionY[]`, `array.*`, `palette.*` reconciled in config-census.md §2. No missing line. Prewave may be spent.

## Prewave firing 1 → HOLD · ASSERTED-CHECKS (parameterization 0.85 · purity 1.00 · own-checks 0.35 · fidelity 1.00)
Return: run dir `item-T241-jev-prewave-return.md` + artifact `codex/jev-prewave.md`. All findings cured in the one cure round (harness + census only — the build is unchanged, sha stands):
(1) CONFIG-derived companions added for the fixed census probes — CP2b@expr(tFormulaMs)=1000 · CP4b@expr(tBracketsMs+bracketsDurMs/2)=3050 · CP6b@expr(tDimMs)=5000 · CP5b@expr(slotStartMs+slotDurMs/2)=3700, with CP5b shown MOVING under the timing swap (3700→5050, slotRaw 0.5 at the shifted instant).
(2) Full predicates printed — CP2 now prints formulaRaw + expandChars · CP4 prints slotRaw · CP7 prints ringRaw · CP8 gains CP8m@9500 mid-hold probe inside the mapped 7000–12900 interval (full-state equality with CP7).
(3) Census timing reconciliation — config-census.md §2b: mechanical count 27 timing fields, each with its individual application site (the §2 "all 21 keys" grouping is corrected on the record).
One builder-side catch inside the cure: CP6b's first predicate expected pulse=1 at tDimMs; the observed pulse=1.12 is correct (tDimMs is the pulse midpoint, sin peak) — the predicate was corrected to pulse===pulseScale with the reason printed in the harness line, not the build changed.

### Cure-round own checks — RAW output (`node harness-t241.js` on the cured record; build unchanged)
```
SCHEDULE {"arrayEndMs":1150,"expandStart":[1400,2000,2600],"expandEndMs":3150,"slotStartMs":3500,"completeAtMs":3900,"dissolveStartMs":5300,"dissolveEndMs":6000,"durationMs":13000,"count":40}
VALIDATE default: null
PASS COUNT source=40 built=40 :: source=40 built=40
PASS CP0@expr(tReticleMs)=0 :: reticleRaw=0 iconsStarted=0
PASS CP1@expr(tMagMs+magDurMs/2)=500 :: magRaw=0.5 reticleRaw=1
PASS CP2@census1000 :: iconsComplete=25 formulaRaw=0 expandChars=[0,0,0]
PASS CP2b@expr(tFormulaMs)=1000 companion :: iconsComplete=25 formulaRaw=0 expandChars=[0,0,0]
PASS CP3@expr(expandStart[1])=2000 :: chars=[65,0,0]
PASS CP4@census3000 :: bracketsRaw=0.3333333333333333 slotRaw=0 L3chars=29/41
PASS CP4b@expr(tBracketsMs+bracketsDurMs/2)=3050 companion :: bracketsRaw=0.5 slotRaw=0 L3chars=33
PASS CP5@expr(completeAtMs)=3900 :: slotRaw=1 boardOpacity=1
PASS CP6@census5000 :: reticleOpacity=0.45 boardOpacity=1 slotRaw=1
PASS CP6b@expr(tDimMs)=5000 companion :: reticleOpacity=0.45 pulse=1.12 (=pulseScale, pulse midpoint)
PASS CP5b@expr(slotStartMs+slotDurMs/2)=3700 companion :: slotRaw=0.5
PASS CP7@expr(dissolveEndMs)=6000 :: boardOpacity=0 icons=40/40 ringRaw=1
PASS CP8@expr(durationMs)=13000 hold-identity vs CP7 :: full-state JSON equal=true
PASS CP8m@9500 mid-hold (mapped interval 7000-12900) :: full-state equal CP7=true boardOpacity=0
PASS GEOM selectedCenter :: center={"x":360,"y":571}
PASS VALIDATOR negative duration rejected :: bad duration expandLineDurMs
PASS VALIDATOR selected out of range rejected :: selected out of range
PASS SWAP content count 40->32 :: swapped count=32
PASS SWAP content render :: formula+slot+result present in swapped render
PASS SWAP content no default claim :: default claim absent under swap at completeAt
PAIRED-TIMING fixed C@3000 L3chars default=29 swapped=0 expectedSwapped=0 (L3 starts 3500)
PASS SWAP timing paired fixed-anchor :: L3 chars move at fixed 3000
PAIRED-TIMING shifted CP5 instant expr slotStartMs+slotDurMs default=3900 swapped=5250 expandEndMs default=3150 swapped=4500
PASS SWAP timing shifted-instant executes :: slotRaw@shifted=1 completeAt 3900->5250 dissolveStart 5300->6650
PAIRED-TIMING companion CP5b instant expr slotStartMs+slotDurMs/2 default=3700 swapped=5050
PASS SWAP timing companion CP5b moves :: slotRaw@swapped-companion=0.5 instant 3700->5050
PASS SWAP timing phase-order holds :: slot after expansion, dissolve after hold, ends in duration
PASS SWAP palette ink :: fill #7fd4ff in render=true
PASS RENDER smoke :: formula+slot+result line in default render
SUMMARY pass=27 fail=0
```
A13 index update: the (b) assertion set gains CP2b · CP4b · CP5b · CP6b · CP8m (all with receipts above); cmd 7's receipt now cites config-census.md §2 + §2b. All other index lines stand.

## Prewave firing 2 → HOLD · ASSERTED-CHECKS (parameterization 0.90 · purity 1.00 · own-checks 0.45 · fidelity 1.00)
Return: run dir `item-T241-jev-prewave-2-return.md` + artifact `codex/jev-prewave-2.md`. **Second HOLD — per A12.3 the item STOPS here: NO VERDICT, the five-lens wave is NOT fired on this build.** Two findings remain, both receipt-form, both priced verbatim in scores.md's cure list: (1) CP0's harness line evaluates the literal `0` while its index entry claims the CONFIG expression — the harness must evaluate `CONFIG.timing.tReticleMs` and print the evaluated instant; (2) CP8m executes at a literal 9500 ms — replace with the CONFIG-derived midpoint `(dissolveEndMs + durationMs) / 2` (= 9500 default, 10175 under the timing swap) with the hold predicate observed at both instants.

## Cycle 042 · Wave 39 — A12.3 COMPLETION (the two priced cures from scores.md, applied ONLY)
- **Cure 1 (CP0):** the harness now evaluates `CONFIG.timing.tReticleMs` in code — `const cp0t = CONFIG.timing.tReticleMs; const S0 = stateAt(CONFIG, cp0t);` — and the PASS line prints the evaluated instant + observed result (`CP0@expr(tReticleMs)=0 :: reticleRaw=0 iconsStarted=0 formulaRaw=0`). No literal `stateAt(CONFIG, 0)` remains.
- **Cure 2 (CP8m):** the literal 9500 ms is replaced by the CONFIG-derived midpoint computed in code — `const cp8mt = (D.dissolveEndMs + CONFIG.timing.durationMs) / 2;` — evaluating to **9500** on the default CONFIG and to **10175** under the filed expandLineDurMs 550→1000 timing swap (dissolveEndMs 6000→7350). The observed hold predicate (full-state equality with CP7 + boardOpacity 0 + iconsComplete 40/40) is filed at BOTH evaluated instants (harness lines `CP8m@expr((dissolveEndMs+durationMs)/2)=9500` and `SWAP timing CP8m moves … instant 9500->10175`).
- **Build UNCHANGED:** recreation.html sha256 **2c4b4e15e25a06994e9c7208a387e13e536c5f30ccc9572ccd6b93e1190b5aca** before = after (both cures are harness-only; no build change was required). Segment binding re-verified this run: segment.mp4 sha256 91451689bd48c025208bc8cded7de7ad79802f8183818e213ace673971519acd (unchanged).

### Completion own checks — RAW output (`node harness-t241.js`, cured harness on the unchanged build)
```
SCHEDULE {"arrayEndMs":1150,"expandStart":[1400,2000,2600],"expandEndMs":3150,"slotStartMs":3500,"completeAtMs":3900,"dissolveStartMs":5300,"dissolveEndMs":6000,"durationMs":13000,"count":40}
VALIDATE default: null
PASS COUNT source=40 built=40 :: source=40 built=40
PASS CP0@expr(tReticleMs)=0 :: reticleRaw=0 iconsStarted=0 formulaRaw=0
PASS CP1@expr(tMagMs+magDurMs/2)=500 :: magRaw=0.5 reticleRaw=1
PASS CP2@census1000 :: iconsComplete=25 formulaRaw=0 expandChars=[0,0,0]
PASS CP2b@expr(tFormulaMs)=1000 companion :: iconsComplete=25 formulaRaw=0 expandChars=[0,0,0]
PASS CP3@expr(expandStart[1])=2000 :: chars=[65,0,0]
PASS CP4@census3000 :: bracketsRaw=0.3333333333333333 slotRaw=0 L3chars=29/41
PASS CP4b@expr(tBracketsMs+bracketsDurMs/2)=3050 companion :: bracketsRaw=0.5 slotRaw=0 L3chars=33
PASS CP5@expr(completeAtMs)=3900 :: slotRaw=1 boardOpacity=1
PASS CP6@census5000 :: reticleOpacity=0.45 boardOpacity=1 slotRaw=1
PASS CP6b@expr(tDimMs)=5000 companion :: reticleOpacity=0.45 pulse=1.12 (=pulseScale, pulse midpoint)
PASS CP5b@expr(slotStartMs+slotDurMs/2)=3700 companion :: slotRaw=0.5
PASS CP7@expr(dissolveEndMs)=6000 :: boardOpacity=0 icons=40/40 ringRaw=1
PASS CP8@expr(durationMs)=13000 hold-identity vs CP7 :: full-state JSON equal=true
PASS CP8m@expr((dissolveEndMs+durationMs)/2)=9500 mid-hold (mapped interval 7000-12900) :: full-state equal CP7=true boardOpacity=0 iconsComplete=40/40
PASS GEOM selectedCenter :: center={"x":360,"y":571}
PASS VALIDATOR negative duration rejected :: bad duration expandLineDurMs
PASS VALIDATOR selected out of range rejected :: selected out of range
PASS SWAP content count 40->32 :: swapped count=32
PASS SWAP content render :: formula+slot+result present in swapped render
PASS SWAP content no default claim :: default claim absent under swap at completeAt
PAIRED-TIMING fixed C@3000 L3chars default=29 swapped=0 expectedSwapped=0 (L3 starts 3500)
PASS SWAP timing paired fixed-anchor :: L3 chars move at fixed 3000
PAIRED-TIMING shifted CP5 instant expr slotStartMs+slotDurMs default=3900 swapped=5250 expandEndMs default=3150 swapped=4500
PASS SWAP timing shifted-instant executes :: slotRaw@shifted=1 completeAt 3900->5250 dissolveStart 5300->6650
PAIRED-TIMING companion CP5b instant expr slotStartMs+slotDurMs/2 default=3700 swapped=5050
PASS SWAP timing companion CP5b moves :: slotRaw@swapped-companion=0.5 instant 3700->5050
PAIRED-TIMING CP8m instant expr (dissolveEndMs+durationMs)/2 default=9500 swapped=10175 dissolveEndMs default=6000 swapped=7350
PASS SWAP timing CP8m moves :: full-state equal CP7-swapped=true boardOpacity=0 iconsComplete=40/40 instant 9500->10175
PASS SWAP timing phase-order holds :: slot after expansion, dissolve after hold, ends in duration
PASS SWAP palette ink :: fill #7fd4ff in render=true
PASS RENDER smoke :: formula+slot+result line in default render
SUMMARY pass=28 fail=0
```
- **Purity (cmd 1, fresh):** `grep -nE "segment\.mp4|source\.mp4|<video|<img|DffiIpmMAC3" recreation.html` → no hits (rc=1), specimen hits **0**.
- **Syntax + RNG (cmd 3, fresh):** `node --check` on both extracted inline scripts (recreation 14,665 chars · comparison 1,504 chars) → OK ×2. `Math.random` grep → 0 hits; seeded RNG NOT-APPLICABLE (deterministic construction, no randomness — stands from the filed census).
- **Comparison check (fresh):** labels verbatim ×1 each · segment.mp4 referenced ×1 (original side only) · `@media (max-width:560px)` stacking present ×1. **PIXEL-UNVERIFIED** stands (no browser binary in this seat).
- **A6 legs (fresh):** fit-table.md — all 7 PIL/DejaVu Serif PROXY rows re-measured, ink bounds identical to filed, HITs **0** (completion re-run section filed in fit-table.md). config-census.md — mechanical CONFIG walk (109 leaf/array paths; timing = 27 fields) reconciled, §2c names every previously combined-notation key explicitly, missing = [], HITs **0**.

### A13 RECEIPT INDEX — completion reconciliation (assertion set inherited WHOLE from Wave 38; nothing dropped)
(a) guards.md commands:
- cmd 1 purity — RECEIPT: grep above, 0 specimen hits (rc=1).
- cmd 2 swap — RECEIPT: harness SWAP lines above (content claim-unit + count 40→32 · timing PAIRED fixed-anchor + shifted CP5 + companion CP5b + CP8m moves + phase-order · palette ink observed).
- cmd 3 syntax + seeded-RNG census — RECEIPT: node --check OK ×2; Math.random 0 hits; seeded RNG NOT-APPLICABLE with reason (no randomness in construction).
- cmd 4 scores arithmetic — NOT-DEMANDED at builder stage: seat-side recompute after the wave; scores.md carries the arithmetic with this disposition cited (governing: guards.md cmd 4 is the seat's filing check).
- cmd 5 segment binding — RECEIPT: segment.mp4 sha256 91451689bd48c025208bc8cded7de7ad79802f8183818e213ace673971519acd re-verified this run; window 0–13.5 s, 13.500 s, h264 720×1280 + AAC (facts as filed at Wave 38).
- cmd 6 fit leg — RECEIPT: fit-table.md, 0 HITs, completion re-run identical on the unchanged build.
- cmd 7 census leg — RECEIPT: config-census.md, 0 HITs, §2c completion reconciliation missing = [] against the build's 109 CONFIG paths (nested/array keys included).
- cmd 8 census-anchor probes — RECEIPT: harness CP2@census1000 (iconsComplete=25 formulaRaw=0 expandChars=[0,0,0]) · CP4@census3000 (bracketsRaw=0.333 slotRaw=0 L3chars=29/41) · CP6@census5000 (reticleOpacity=0.45 boardOpacity=1 slotRaw=1) — census instants probed against the build's state function, raw results above.
(b) A11 assertions (each: harness command `node harness-t241.js`, CONFIG expression, evaluated instant, raw result — all PASS in the raw output above):
- COUNT source vs built — 40 = 40.
- CP0 `stateAt(CONFIG, CONFIG.timing.tReticleMs)` → 0 ms — reticleRaw=0 iconsStarted=0 formulaRaw=0. *(Cure 1: the expression is now evaluated in code and the evaluated instant printed on the PASS line.)*
- CP1 `stateAt(CONFIG, tMagMs + magDurMs/2)` → 500 ms — magRaw=0.5 reticleRaw=1.
- CP2 census-fixed 1000 ms — iconsComplete=25 formulaRaw=0 expandChars=[0,0,0].
- CP2b `stateAt(CONFIG, tFormulaMs)` → 1000 ms companion — iconsComplete=25 formulaRaw=0 expandChars=[0,0,0].
- CP3 `stateAt(CONFIG, expandStart[1])` → 2000 ms — chars=[65,0,0].
- CP4 census-fixed 3000 ms — bracketsRaw=0.333 slotRaw=0 L3chars=29/41.
- CP4b `stateAt(CONFIG, tBracketsMs + bracketsDurMs/2)` → 3050 ms companion — bracketsRaw=0.5 slotRaw=0 L3chars=33.
- CP5 `stateAt(CONFIG, completeAtMs)` → 3900 ms — slotRaw=1 boardOpacity=1.
- CP5b `stateAt(CONFIG, slotStartMs + slotDurMs/2)` → 3700 ms companion — slotRaw=0.5; under the timing swap the instant moves 3700→5050 with slotRaw=0.5 observed (PAIRED-TIMING companion line).
- CP6 census-fixed 5000 ms — reticleOpacity=0.45 boardOpacity=1 slotRaw=1.
- CP6b `stateAt(CONFIG, tDimMs)` → 5000 ms companion — reticleOpacity=0.45 pulse=1.12 (=pulseScale, pulse midpoint).
- CP7 `stateAt(CONFIG, dissolveEndMs)` → 6000 ms — boardOpacity=0 icons=40/40 ringRaw=1.
- CP8 `stateAt(CONFIG, durationMs)` → 13000 ms — full-state JSON equal to CP7 = true.
- CP8m `stateAt(CONFIG, (dissolveEndMs + durationMs)/2)` → 9500 ms — full-state equal CP7=true boardOpacity=0 iconsComplete=40/40; under the timing swap → 10175 ms — full-state equal CP7-swapped=true boardOpacity=0 iconsComplete=40/40. *(Cure 2: CONFIG-derived in both runs, predicate filed at both instants.)*
- GEOM selectedCenter from selected index — center={"x":360,"y":571}.
- VALIDATOR ×2 — negative duration rejected ("bad duration expandLineDurMs") · selected out of range rejected.
- SWAP receipts — content ×3 · timing ×5 (fixed-anchor · shifted-instant · CP5b companion · CP8m moves · phase-order) · palette · render smoke — raw lines above.
Reconciliation: index lines = 8 guard commands (7 receipts + 1 NOT-DEMANDED with disposition) + the full inherited assertion set (COUNT · CP0–CP8 + companions CP2b/CP4b/CP5b/CP6b + CP8m at both instants · GEOM · validators · swaps); planned assertion set (observe-plan §2.7 as amended) fully covered; expected CONFIG keys incl. nested `texts.expansion[]`, `texts.callout[]`, `geom.expansionY[]`, `array.*`, `palette.*` reconciled in config-census.md §2 + §2b + §2c. No missing line. The completion re-fire may be spent.
