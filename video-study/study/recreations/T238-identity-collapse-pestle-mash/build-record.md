# T238 — build record · Cycle 041 Wave 38 · FIRST ATTEMPT

- **Build:** `recreation.html` — sha256 `3f6dba3118c22ffc273c60a716f7a68e18581423fd2790a30c44849060b21846`, 17,349 B. One self-contained HTML: CONFIG (`t238-config`) + pure logic (`t238-logic`, `stateAt` exposed as `window.__T238`) + SVG render (`t238-render`). No captions/subtitles; no specimen media.
- **Segment:** `segment.mp4` — source.mp4 window 74.5–81.5 s (75–81 ± 0.5 s handles), h264 1920×1080 + AAC, duration 7.000 s, 2,797,305 B, sha256 `9e25397532d53b21dfc0c48d6800e9ebc47dfe16b75829bc42be6601c3a58250`.
- **Comparison:** `comparison.html` — sha256 `7de5b23b5ba3dba3330bb2c65117f5588a1e157fa2c461ed50e7c321dc496136`, 3,222 B.
- **Phase A:** `item-T238-observe-plan.md` in the wave run dir; four Phase A firings filed there with dispositions at its §2b (codex-observe CONFIRMED-WITH-GAPS · jev-observe-exit ADVANCE-WITH-GAPS · codex-plan-review REVISE · jev-plan-exit REVISE — all cures applied to the Plan before Execute; the build implements the AMENDED parameter table).
- **Plan-error caught by own checks:** the pre-Execute Plan's swapped readable count at C@4000 (19) was the builder's arithmetic error; harness v1 computed 14 (cohorts 0–1 fully collapsed under the swap) and the Plan §2.4 + harness expectation were corrected to 14 before the prewave. Recorded here, not hidden.
- **Census cure round (A6):** the first config-census scan found 19 subject-shaping literals outside CONFIG (corner base, pip radius, blend factor, stroke widths, pestle tilt, board band, label halo, union/blob/house coefficients); all bound as CONFIG keys and the build re-verified (harness re-run clean on the cured build; fit rows unchanged — no label geometry touched).

## Own checks — RAW harness output (node, config+logic+render extracted from the final build; 55/55 PASS in the Cycle 042 completion — Wave 38 filed 48/48 after its prewave cure; see the completion section at the end of this record)

```
PASS VALIDATE-DEFAULT :: ok=true errors=[]
PASS DERIVE :: completeAtMs=6000 durationMs=6000 steps=9 peaks=1900,2800,3700,4600,5500
PASS COUNT-SOURCE :: objects=24 kinds={"die":8,"house":6,"minidie":6,"cube":4} cohorts=5,5,5,5,4 builtSum=24
PASS P0@expr(tSetupMs)=0 :: readable=24 flecks=0 pasteP=0.34 inputO=1 pestleRest=(516,144)=(516,144)
PASS P1@expr(tSetupMs+setupDurMs/2)=750 :: readable=24 strokeIdx=-1
PASS C1000@1000 :: strokeIdx=-1 readable=24 liftP=0.3333
PASS C1250@1250 :: strokeIdx=-1 readable=24 liftP=0.6667
PASS P2@expr(setupEnd)=1500 :: q=1500 readable=24 strokeIdx=0 step=0 liftP=1
PASS P3@expr(setupEnd+2*stepMs)=1700 :: step=2 cs0integrity=0.65 marksO=0.4615 readable=24
PASS C1750@1750 :: strokeIdx=0 step=2 pressRaw=0.5
PASS P4@expr(setupEnd+pressSteps*stepMs)=1900 :: step=4 pressRaw=1 pressE=1 cs0integrity=0.30000000000000004 readable=19
PASS C2000@2000 :: strokeIdx=0 step=5 cs0integrity=0.24 readable=19
PASS C2750@2750 :: strokeIdx=1 step=3 pressRaw=0.75
PASS C3000@3000 :: strokeIdx=1 step=6 cs1integrity=0.18000000000000005 readable=14
PASS C3750@3750 :: strokeIdx=2 step=4 pressRaw=1
PASS C4000@4000 :: strokeIdx=2 step=7 cs2integrity=0.12 readable=9
PASS C4750@4750 :: strokeIdx=3 step=5 pressRaw=0.8
PASS C5000@5000 :: strokeIdx=3 step=8 cs3integrity=0.06000000000000005 readable=4
PASS C5500@5500 :: strokeIdx=4 step=4 pressRaw=1 readable=0 flecks=20
PASS C5750@5750 :: strokeIdx=4 step=6 pressRaw=0.6 readable=0
PASS P5@expr(completeAtMs)=6000 :: readable=0 flecks=24 pasteP=1 union=1 boundary=0 outputO=1
PASS P6@expr(completeAtMs+150)=6150 :: full-state equality P5 vs +150ms: true
PASS P7-QUANT :: sig(2001)==sig(2000): true step(2100)=6 step(2000)=5
PASS P8-LABEL-EXCL :: input/output opacity pairs=1/0,1/0,1/0,0/1,0/1,0/1
PASS P7-DERIVED@expr(setupEnd+pressSteps*stepMs+stepMs)=2000 :: expr=setupEnd+pressSteps*stepMs+stepMs=1500+400+100=2000 full-field equality (every field except the raw t echo) stateAt(expr) vs stateAt(expr+1): true q(expr+1)=2000 step transition step(expr)=5 -> step(expr+stepMs)=6
PASS P7-SWAPPED@expr(setupEnd+2*strokeDurMs+7*stepMs)=4600 (moved 4000->4600) :: same CONFIG expression under the timing swap (strokeDurMs 900->1200): default instant 4000 -> moved instant 4600 full-field equality stateAt(moved) vs stateAt(moved+1): true q(moved+1)=4600 step transition step(moved)=7 -> step(moved+stepMs)=8 cs2integrity=0.1875 readable=9
PASS P8-DERIVED@exprs=2500,3000,3500,4000 :: expressions->evaluated instants: setupEnd+strokeDurMs+stepMs=2500 · setupEnd+strokeDurMs+6*stepMs=3000 · setupEnd+2*strokeDurMs+2*stepMs=3500 · setupEnd+2*strokeDurMs+7*stepMs=4000 opacity predicates (product 0, sum 1) at derived interior samples: pairs=1/0,1/0,1/0,0/1 collapsedFractions=0.2448,0.3792,0.4896,0.6000
PASS P8-SWAPPED@exprs=2800,3300,4100,4600 (moved 2500,3000,3500,4000->2800,3300,4100,4600) :: same CONFIG expressions under the timing swap (strokeDurMs 900->1200): moved instants 2500->2800, 3000->3300, 3500->4100, 4000->4600 opacity predicates at moved interior samples: pairs=1/0,1/0,1/0,0/1 collapsedFractions=0.2448,0.3698,0.4896,0.5859
PASS SWAP-CONTENT :: die=7 house=7 labels in render=true/true
PASS SWAP-TIMING :: steps=12 stroke2start 3300->3900 peak 3700->4300 completeAt 6000->7500 @4000 step=1 cs2integrity=0.825 readable 9->14 (cohorts 0-1 collapsed, cs2 at 0.825, cs3-4 intact) @7500 readable=0 flecks=24
PASS SWAP-PALETTE :: paste fill #79c142->#c8b13a in render@6000: true
PASS SWAP-NEGATIVE-DIV :: errors=["strokeDurMs must be divisible by stepMs"]
PASS SWAP-NEGATIVE-CS :: errors=["objects[3].cs out of range"]
PASS COMPARISON-CLAMP :: comparison derives durationMs live (default 6000, timing-swapped 7500); HANDLE_OFFSET_S=0.5 present=true
PASS COMP-C500@expr=500 (fixed 500) :: readable=24 liftP=0 pestleAtRest=true
PASS COMP-C1000@expr=1000 (fixed 1000) :: readable=24 readableCount===24:true liftP=0.3333
PASS COMP-C1250@expr=1250 (fixed 1250) :: readable=24 readableCount===24:true liftP=0.6667
PASS COMP-C1750@expr=1750 (fixed 1750) :: step=2 pressRaw=0.5
PASS COMP-C2000@expr=2000 (fixed 2000) :: step=5 cs0=0.24 readable=19
PASS C2500-DERIVED@expr(setupEnd+strokeDurMs+stepMs)=2500 (fixed 2500, expr==fixed:true) :: expr=setupEnd+strokeDurMs+stepMs=1500+900+100=2500 equality expr==2500:true step=1 cs1integrity=0.825 readable=19
PASS C2500-FIXED@2500 :: fixed side executed separately at literal 2500: step=1 cs1integrity=0.825 readable=19
PASS COMP-C2750@expr=2750 (fixed 2750) :: step=3 pressRaw=0.75
PASS COMP-C3000@expr=3000 (fixed 3000) :: step=6 cs1=0.18000000000000005 readable=14
PASS C3500-DERIVED@expr(setupEnd+2*strokeDurMs+2*stepMs)=3500 (fixed 3500, expr==fixed:true) :: expr=setupEnd+2*strokeDurMs+2*stepMs=1500+1800+200=3500 equality expr==3500:true step=2 cs2integrity=0.65 readable=14
PASS C3500-FIXED@3500 :: fixed side executed separately at literal 3500: step=2 cs2integrity=0.65 readable=14
PASS COMP-C3750@expr=3750 (fixed 3750) :: step=4 pressRaw=1
PASS COMP-C4000@expr=4000 (fixed 4000) :: step=7 cs2=0.12 readable=9
PASS C4500-DERIVED@expr(setupEnd+3*strokeDurMs+3*stepMs)=4500 (fixed 4500, expr==fixed:true) :: expr=setupEnd+3*strokeDurMs+3*stepMs=1500+2700+300=4500 equality expr==4500:true step=3 cs3integrity=0.4750000000000001 readable=4
PASS C4500-FIXED@4500 :: fixed side executed separately at literal 4500: step=3 cs3integrity=0.4750000000000001 readable=4
PASS COMP-C4750@expr=4750 (fixed 4750) :: step=5 pressRaw=0.8
PASS COMP-C5000@expr=5000 (fixed 5000) :: step=8 cs3=0.06000000000000005 readable=4
PASS COMP-C5500@expr=5500 (fixed 5500) :: step=4 readable=0 flecks=20
PASS COMP-C5750@expr=5750 (fixed 5750) :: step=6 pressRaw=0.6
PASS COMP-C4000-SWAPPED@expr=4600 :: companion instant moved 4000->4600; step=7 cs2=0.1875 readable=9 (same step bucket at the moved instant; integrity 0.1875 not 0.12 because the post-press tail denominator stepsPerStroke-pressSteps widens 5->8 under the swap — the step/quantization predicate is what the companion carries)
PASS COMP-C6000-SWAPPED@expr(completeAtMs)=7500 :: completion companion moved 6000->7500; readable=0 flecks=24 pasteP=1
SUMMARY pass=55 fail=0
```

- **Count assertion (A9.3):** source cohort sum 5+5+5+5+4 = 24 = built objects.length 24 (COUNT-SOURCE receipt). MATCH. (24 is the build allocation against the source's ≈28–30 census estimates — the reduction disposition is printed in the Plan §2.1.)
- **Swaps run SEPARATELY:** content (labels + objects[0].kind die→house, kind counts move) · timing (paired receipt: fixed C@4000 state changes AND stroke-2 start/peak/completeAt move; swapped completion receipted standalone at 7500) · palette (paste fill observed in render) · two negative tests (divisibility, cs range).
- **Syntax:** `node --check` rc=0 on all three recreation scripts + the comparison script.
- **Purity grep** on recreation.html for `segment\.mp4|source\.mp4|<video|<img|DnjdJiwcfY` → **0 hits**; `Math.random` → **0 hits** (seeded mulberry32 only). No `url(#` references arise. No external references in the recreation (no src/href/@import/url() loads).
- **Comparison checks:** labels "ORIGINAL — PES \"Fresh Guacamole\" @ 75–81 s" ×1 · "RECREATION — T238 Identity collapse: pestle mash, parameterized" ×1 · `HANDLE_OFFSET_S = 0.5` ×1 · clamp bound to the recreation's live `schedule(CONFIG).durationMs` (COMPARISON-CLAMP harness line) · `@media (max-width:560px)` stacking ×1 · one shared control set driving both sides.
- **A6 legs:** fit-table.md — PIL rendered measurement, DejaVu Sans Bold PROXY, 5 rows, **HIT list EMPTY**. config-census.md — every CONFIG key incl. palette-nested, slabs[]-nested and objects[]-nested resolved to value-flowing sites; CSS variables: none used; **HIT list EMPTY** (19 first-scan shaping literals cured in CONFIG pre-filing).
- **PIXEL-UNVERIFIED limitation (A10.1, carried to scores.md):** no browser binary exists in this seat; the comparison page is the render surface for the owner's visual verdict. All state claims above are logic-level (pure stateAt), not rendered-pixel claims.

## Prewave cure (jev-prewave HOLD #1 — ASSERTED-CHECKS, own-checks 0.35)

The first jev-prewave firing returned HOLD on three grounds; all cured WITHOUT changing the build (recreation.html sha unchanged — the cures are harness + A6-file completions):
1. **Companions:** every fixed census probe now executes a CONFIG-derived companion with its full predicate (harness COMP-* lines, raw output above); the CP4 companion executes under the timing swap at its moved instant 4600 with the step-bucket predicate intact (`COMP-C4000-SWAPPED`), and the CP6 completion companion at the moved 7500 (`COMP-C6000-SWAPPED`). P0 now evaluates at `stateAt(C, C.tSetupMs)` (not a literal 0) and asserts the planned pestle-rest position from CONFIG (`pestleRest=(516,144)=(516,144)` — bowlCx+pestleRestDx = 320+196, bowlCy+pestleRestDy = 208−64; the coordinates (536,246) printed in this paragraph's first filing were the builder's transcription error, caught by jev-prewave #2 and corrected here). The previously unindexed census rows F-500 and F-2500/F-3500/F-4500 now carry receipts (`COMP-C500`, `C2500`, `C3500`, `C4500` — each with its companion expression). One expectation corrected during the cure: the swapped CP4 companion's cs-2 integrity is 0.1875, not 0.12, because the post-press tail denominator (stepsPerStroke−pressSteps) widens 5→8 under the swap — printed on the harness line itself.
2. **rngSeed:** bound in config-census.md §2 (`mulberry32(cfg.rngSeed)` inside `blobs(cfg)`), reconciling guard 7.
3. **Fit placement:** fit-table.md gains positioned proxy bounds at the 360 px stage (baselines, ink bounds, container, top/bottom clearances with the 4 px halo deducted) for all five label rows.

Harness after cure: **48/48 PASS** (raw output above replaces the 30-line v1 output; v1's 30 lines are a subset — the cure added 18 lines and amended P0).

## RECEIPT INDEX (A13) — every applicable check → its executable receipt

### (a) guards.md commands 1–8
1. **Construction-purity grep** → RECEIPT: invocation `grep -c -E 'segment\.mp4|source\.mp4|<video|<img|DnjdJiwcfY' recreation.html`, raw output `0` hits. The `url(#id)` precision note does not arise (no such reference in the build).
2. **Swap test** → RECEIPT: harness lines SWAP-CONTENT · SWAP-TIMING · SWAP-PALETTE · SWAP-NEGATIVE-DIV · SWAP-NEGATIVE-CS (raw output above), run as separate altered-CONFIG invocations; probe-mobility shown (stroke-2 start 3300→3900, peak 3700→4300, completeAt 6000→7500, C@4000 readable 9→14 with cs-2 integrity 0.12→0.825).
3. **Syntax + determinism check** → RECEIPT: `node --check` rc=0 ×4 scripts (3 recreation + 1 comparison); seeded-RNG census — `Math.random` grep output `0`; the only RNG is mulberry32 seeded by CONFIG `rngSeed` (deterministic pure `stateAt` + `blobs`).
4. **Scores arithmetic** → NOT-DEMANDED AT PREWAVE — DUE AFTER THE WAVE: seat-side recomputation of the five-lens average + minimum from the filed lens returns before scores.md prints a verdict (guards.md command 4's own definition places it at verdict filing). Disposition: INSTRUCTION §5 leg 5 + guards.md command 4.
5. **Segment binding** → RECEIPT: ffprobe on segment.mp4 — h264 1920×1080 + AAC, duration 7.000 s = the 74.5–81.5 s window (75–81 ± 0.5 s handles); sha256 `9e253975…` filed at the head of this record; no subtitle stream (video+audio only — also the no-captions receipt for the segment side).
6. **Measured-fit leg (guard-measured-fit.md)** → RECEIPT: fit-table.md — 5 measured rows, PIL/DejaVu Sans Bold PROXY, HIT list EMPTY.
7. **Config-census leg (guard-config-census.md)** → RECEIPT: config-census.md — every CONFIG key (top-level, palette-nested, slabs[]-nested, objects[]-nested incl. `objects[].kind/x/y/s/rot/pips/cs`) resolved to value-flowing sites; CSS variables none used (`var(--` = 0); HIT list EMPTY.
8. **Census-anchor probes (zero-state anchors)** → APPLICABLE, RECEIPTS: the END state is the zero-identity anchor — `P5@expr(completeAtMs)=6000 :: readable=0 flecks=24 pasteP=1 union=1 boundary=0 outputO=1`, where readable is evaluated from the CONFIG expression Σ(integrity > readableThresh) over all 24 objects (raw line above); the setup zero-stroke anchor — `P0@expr(tSetupMs)=0 :: readable=24 flecks=0 pasteP=0.34` (no stroke has run, no object collapsed).

### (b) A11 census assertions (checkpoint → assertion → CONFIG expression → evaluated result → receipt line)
- CP0/P0 → full set, pestle at rest → `tSetupMs` = 0 → `P0@expr(tSetupMs)=0` (readable 24, flecks 0, pasteP = pasteStart 0.34, inputO 1).
- Setup mid (P1) → no stroke yet → `tSetupMs + setupDurMs/2` = 750 → `P1@expr(...)=750` (strokeIdx −1).
- CP1 (C@1000) → setup lift in progress → fixed 1000 → `C1000@1000` (liftP 0.3333 from `EASE[cfg.easeSetup]` over the CONFIG setup window).
- Fine-1250 (close-up state) → full set still → fixed 1250 → `C1250@1250` (liftP 0.6667; the build's single stage binds the STATE, Plan §2.2 deferral (2)).
- CP1500/P2 → mash start → `setupEnd` (= tSetupMs+setupDurMs) = 1500 → `P2@expr(setupEnd)=1500` (q = 1500 exactly, step 0).
- Press mid (P3) → cs-0 integrity 0.65, marks 0.4615 → `setupEnd + 2×stepMs` = 1700 → `P3@expr(...)=1700`.
- Fine-1750 CONTACT → stroke 0 step 2 → fixed 1750 → `C1750@1750` (pressRaw 0.5).
- Stroke-0 peak (P4) → pressRaw/pressE 1, cs-0 integrity 0.3, readable 19 → `setupEnd + pressSteps×stepMs` = 1900 → `P4@expr(...)=1900`.
- CP2 (C@2000) → step 5, cs-0 integrity 0.24, readable 19 → fixed 2000 → `C2000@2000` (census ≈20 printed beside in the Plan).
- Fine-2750 RAISED → stroke 1 step 3 → fixed 2750 → `C2750@2750` (pressRaw 0.75; the pose departure is priced in the Plan §2.3 departure table).
- CP3 (C@3000) → cs-1 integrity 0.18, readable 14 → fixed 3000 → `C3000@3000` (census ≈18, tension printed in the Plan).
- Fine-3750 CONTACT → stroke 2 peak → fixed 3750 → `C3750@3750` (pressRaw 1.0 ✓).
- CP4 (C@4000) → cs-2 integrity 0.12, readable 9 → fixed 4000 → `C4000@4000` (census ≈10).
- Fine-4750 CONTACT → stroke 3 step 5 → fixed 4750 → `C4750@4750` (pressRaw 0.8).
- CP5 (C@5000) → cs-3 integrity 0.06, readable 4 → fixed 5000 → `C5000@5000` (census ≈6).
- F-5500 (C@5500) → stroke 4 peak, readable 0, flecks 20 → fixed 5500 → `C5500@5500`.
- Fine-5750 → stroke 4 step 6, readable 0 → fixed 5750 → `C5750@5750` (pressRaw 0.6).
- CP6/P5 → complete → `completeAtMs` (= setupEnd + strokeCount×strokeDurMs) = 6000 → `P5@expr(completeAtMs)=6000` (zero-state anchor, command 8 above; late-die departure named in the Plan §2.3).
- Hold identity (P6) → full-state equality → `completeAtMs + 150` = 6150 → `P6@expr(...)=6150`.
- Quantization (P7) → same-bucket equality + next-step difference → fixed 2001/2100 vs 2000 → `P7-QUANT` (step(2100) = 6 ≠ step(2000) = 5; the timing swap moves C@4000's step 7→1, shown in SWAP-TIMING). **Completion additions (Cycle 042):** CONFIG-derived run → `P7-DERIVED@expr(setupEnd+pressSteps*stepMs+stepMs)=2000` — expression `setupEnd+pressSteps*stepMs+stepMs` = 1500+400+100 = 2000, full-field equality (every state field except the raw t echo) between stateAt(expr) and stateAt(expr+1) = true with q(expr+1) = 2000, step transition step(expr) = 5 → step(expr+stepMs) = 6 (raw line above). Moved under the timing swap → `P7-SWAPPED@expr(setupEnd+2*strokeDurMs+7*stepMs)=4600 (moved 4000->4600)` — the same expression evaluates 4000 on the default CONFIG and 4600 under strokeDurMs 900→1200; full-field equality at the moved instant = true, q(moved+1) = 4600, step transition 7 → 8, cs-2 integrity 0.1875, readable 9.
- Label exclusivity (P8) → exactly one label owns the stage at every probe → probes at 0/2000/3000/4000/5000/6000 → `P8-LABEL-EXCL` (pairs 1/0,1/0,1/0,0/1,0/1,0/1; switch rides `labelSwitchF`). **Completion additions (Cycle 042):** CONFIG-derived interior samples → `P8-DERIVED@exprs=2500,3000,3500,4000` — expressions `setupEnd+strokeDurMs+stepMs` = 2500 · `setupEnd+strokeDurMs+6*stepMs` = 3000 · `setupEnd+2*strokeDurMs+2*stepMs` = 3500 · `setupEnd+2*strokeDurMs+7*stepMs` = 4000, opacity predicates (inputO×outputO = 0, inputO+outputO = 1) at each: pairs 1/0,1/0,1/0,0/1 with collapsedFractions 0.2448,0.3792,0.4896,0.6000 (the label switch is crossed inside the derived sample set). Moved under the timing swap → `P8-SWAPPED@exprs=2800,3300,4100,4600` — the same four expressions evaluate 2800,3300,4100,4600 under strokeDurMs 900→1200 (moved 2500→2800, 3000→3300, 3500→4100, 4000→4600); predicates hold at every moved sample: pairs 1/0,1/0,1/0,0/1, collapsedFractions 0.2448,0.3698,0.4896,0.5859.
- Comparison receipt → `COMPARISON-CLAMP` (durationMs derived live; timing-swapped duration 7500 moves the clamp).
- CONFIG-derived companions (A11 dual form, prewave cure + Cycle 042 completion) → every fixed probe above also executes at its CONFIG expression (expression → evaluated instant printed on every receipt line): `COMP-C500` (tSetupMs + setupDurMs/3 = 500) · `COMP-C1000` (tSetupMs + 2·setupDurMs/3 = 1000 — completion: predicate now includes readableCount === 24, printed `readable=24 readableCount===24:true`) · `COMP-C1250` (tSetupMs + 5·setupDurMs/6 = 1250 — completion: predicate now includes readableCount === 24, printed the same way) · `COMP-C1750` (setupEnd + 2·stepMs + stepMs/2 = 1750) · `COMP-C2000` (setupEnd + pressSteps·stepMs + stepMs = 2000) · `C2500-DERIVED` (setupEnd + strokeDurMs + stepMs = 1500+900+100 = 2500, equality expr==2500 printed true, step 1, cs-1 integrity 0.825, readable 19) + `C2500-FIXED@2500` (the fixed side executed separately at the literal 2500, same predicate values) · `COMP-C2750` (setupEnd + strokeDurMs + 3·stepMs + stepMs/2 = 2750) · `COMP-C3000` (setupEnd + strokeDurMs + 6·stepMs = 3000) · `C3500-DERIVED` (setupEnd + 2·strokeDurMs + 2·stepMs = 1500+1800+200 = 3500, equality expr==3500 printed true, step 2, cs-2 integrity 0.65, readable 14) + `C3500-FIXED@3500` (fixed side executed separately at the literal 3500) · `COMP-C3750` (setupEnd + 2·strokeDurMs + 4·stepMs + stepMs/2 = 3750) · `COMP-C4000` (setupEnd + 2·strokeDurMs + 7·stepMs = 4000) · `C4500-DERIVED` (setupEnd + 3·strokeDurMs + 3·stepMs = 1500+2700+300 = 4500, equality expr==4500 printed true, step 3, cs-3 integrity 0.475, readable 4) + `C4500-FIXED@4500` (fixed side executed separately at the literal 4500) · `COMP-C4750` (setupEnd + 3·strokeDurMs + 5·stepMs + stepMs/2 = 4750) · `COMP-C5000` (setupEnd + 3·strokeDurMs + 8·stepMs = 5000) · `COMP-C5500` (setupEnd + 4·strokeDurMs + 4·stepMs = 5500) · `COMP-C5750` (setupEnd + 4·strokeDurMs + 6·stepMs + stepMs/2 = 5750) — each companion line asserts expression == fixed instant AND the checkpoint predicate. Moved under the timing swap: `COMP-C4000-SWAPPED@expr=4600` (step 7, readable 9, cs-2 integrity 0.1875 with the widened tail denominator printed) · `COMP-C6000-SWAPPED@expr(completeAtMs)=7500` · `P7-SWAPPED` + `P8-SWAPPED` (P7/P8 bullets above). Census rows F-500/F-2500/F-3500/F-4500 receipts: `COMP-C500` · `C2500-DERIVED` + `C2500-FIXED` · `C3500-DERIVED` + `C3500-FIXED` · `C4500-DERIVED` + `C4500-FIXED`. Assertion inheritance (A13.2): the Wave-38 harness's 48 assertions are inherited WHOLE — no assertion was dropped; the completion renames the three `C2500/C3500/C4500 (+companion expr)` lines into their DERIVED+FIXED pairs (same checkpoints, same predicates, fuller receipts) and adds P7-DERIVED · P7-SWAPPED · P8-DERIVED · P8-SWAPPED, for 55 lines total.
- NOT-DEMANDED: rendered-pixel assertions at census instants — no browser binary exists in this seat (A10.1 PIXEL-UNVERIFIED limitation; INSTRUCTION §5 prices stateAt-level receipts + the comparison surface for the owner's visual verdict).

### Readiness self-check (A13.3, before payload assembly)
Every index line above carries its executable receipt (harness line + CONFIG expression + evaluated instant + raw result) or an explicit NOT-DEMANDED/DUE-AFTER line with its governing disposition (command 4 → §5 leg 5; pixel assertions → A10.1). Census receipts reconcile against the build's CONFIG keys incl. nested/array keys (config-census.md). The jev-prewave call follows this section.

## Completion (Cycle 042 Wave 39 — A12.3 completion of the Wave-38 attempt)

The Wave-38 second jev-prewave HOLD priced four cures (scores.md, firing-2 list); cure 4 (the cure-paragraph coordinate (536,246) → (516,144)) was already corrected in this record at Wave-38 filing. This completion applies ONLY the remaining priced cures, all in the harness (`harness-t238.js`) — **the build is unchanged: recreation.html sha256 `3f6dba3118c22ffc273c60a716f7a68e18581423fd2790a30c44849060b21846`, 17,349 B (re-verified firsthand this cycle); comparison.html and segment.mp4 shas likewise unchanged.**

1. **COMP-C1000 / COMP-C1250 readable-count predicate:** both companions now assert `readableCount === 24` alongside stroke index and lift, and print it (`readable=24 readableCount===24:true` on both raw lines above).
2. **C2500 / C3500 / C4500 dual-form receipts:** each now files a DERIVED receipt printing the CONFIG expression, its expansion, its evaluated value and the equality check against the fixed instant (`expr=setupEnd+strokeDurMs+stepMs=1500+900+100=2500 equality expr==2500:true` · `setupEnd+2*strokeDurMs+2*stepMs=1500+1800+200=3500` · `setupEnd+3*strokeDurMs+3*stepMs=1500+2700+300=4500`), plus a FIXED receipt executing the fixed side separately at the literal instant with the same predicate values.
3. **P7 / P8 CONFIG-derived runs + moved samples:** `P7-DERIVED` (full-field equality + step transition at the derived instant 2000) · `P7-SWAPPED` (the stroke-2 expression's instant moves 4000→4600 under the timing swap; full-field equality + step transition 7→8 at the moved instant) · `P8-DERIVED` (opacity predicates at four derived interior samples 2500/3000/3500/4000, crossing the label switch) · `P8-SWAPPED` (the same expressions move to 2800/3300/4100/4600 under the swap; predicates hold at every moved sample). Expressions, evaluated instants and raw results are printed on each raw line above and indexed in the RECEIPT INDEX (P7/P8 bullets + companion bullet, updated in this filing).

- **Fresh own-checks (this cycle, on the final build):** harness `node harness-t238.js` → **55/55 PASS, exit 0** (raw output in the Own checks section above, replaced in this filing; the 48 Wave-38 lines are a subset — 3 lines expanded into DERIVED+FIXED pairs, 4 lines added, 2 companion lines amended). Syntax `node --check` rc=0 ×4 scripts (3 recreation + 1 comparison), re-run this cycle. Purity grep on recreation.html for `segment\.mp4|source\.mp4|<video|<img|DnjdJiwcfY` → **0 hits**; `Math.random` → **0 hits** (re-run this cycle). Count assertion unchanged: cohort sum 5+5+5+5+4 = 24 = built 24 — MATCH (COUNT-SOURCE receipt).
- **Fresh A6 legs (this cycle, on the final build):** fit-table.md — PIL/DejaVu Sans Bold re-measurement reproduced all five filed ink bounds exactly (393×22 · 219×20 · 211×22 · 444×22 · 81×27); **HIT list EMPTY (0)**. config-census.md — re-scan: hex outside CONFIG = `#241a10` ×1 only (page chrome, as filed) · `var(--` = 0 · `rngSeed` resolves to its `mulberry32(cfg.rngSeed)` site; no new subject-shaping literal (build unchanged); **HIT list EMPTY (0)**. Re-verification notes appended to both leg files in this filing.
- **Segment binding (re-probed this cycle):** ffprobe on segment.mp4 — h264 1920×1080 + AAC, duration 7.000 s, sha256 `9e25397532d53b21dfc0c48d6800e9ebc47dfe16b75829bc42be6601c3a58250` (unchanged).
- **PIXEL-UNVERIFIED limitation stands:** no browser binary in this seat; all state claims are logic-level (pure stateAt); the comparison page is the render surface for the owner's visual verdict.

### Readiness self-check (A13.3, completion — before payload assembly)
The RECEIPT INDEX above is reconciled whole for this completion: (a) every applicable guards.md command 1–8 carries its executable receipt or its explicit NOT-DEMANDED/DUE-AFTER line (command 4 → INSTRUCTION §5 leg 5, due after the wave); (b) every A11 assertion — the planned set in the Wave-38 observe-plan §2.3 AND the assertion set inherited whole from the filed Wave-38 harness (48 lines, A13.2) — carries its receipt with CONFIG expression + evaluated value + raw result; the completion's renames/additions are dispositioned in the companion bullet. Census receipts reconcile against the build's CONFIG keys incl. nested/array keys (config-census.md, HIT 0). The single authorized jev-prewave completion re-fire follows this section.
