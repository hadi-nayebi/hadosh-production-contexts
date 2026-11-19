# T210 — build record · Cycle 037 Wave 34 · first attempt

- **Item:** T210 — threshold grid-map (the road to 270) · queue #98 · Packet #12 (Vox "The Electoral College, explained", ajavsMbCapY).
- **Plan authority:** `runs/2026-11-18-cycle-037-wave-34/item-T210-observe-plan.md` AS AMENDED by `plan-amendment-cycle037.md` in this directory (15 charges cured: jev-plan-exit REVISE/UNBOUND-SCHEDULE ×4 charges with all sub-points + jev-observe-exit ADVANCE-WITH-GAPS charges). Where this record and the item record differ, the amendment governs.
- **Schedule basis:** segment-anchored (buildMs = segment-relative ms; segment = source 139–147 s).
- **Final build:** recreation.html sha256 `254add09d9893154b845977434d620affb04b635146c56f3705ef806085e5df5` · 16,597 B. (Cure rounds: one pre-check CONFIG cure — fit, see fit-table.md — and one prewave-HOLD cure round, §6; all receipts below are from the final build.)
- **Construction:** single SVG scene; CONFIG at top; geometry DERIVED from `regions[].cells` (boundary edges computed at runtime; fills are the same cell union); one `stateAt(t)` evaluator exposed as `window.__T210`; layer order ground → fills → cells → outlines → post → plate (plate opaque, top layer — B3 cured by construction).

## §1 Segment binding (guards.md command 5)
Cut at Execute from the archived source `hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/source.webm` (488.301 s, vp9 1920×1080 — the file covering the 138.5 s in-handle; the census clip begins at 139.0 s and cannot supply handles, amendment C14): `ffmpeg -ss 138.5 -t 9.0` (window 139–147 s ± 0.5 s handles), re-encoded libx264/yuv420p + AAC, faststart.
Raw ffprobe of `segment.mp4`:
```
codec_name=h264
width=1920
height=1080
codec_name=aac
duration=9.007681
size=950828
84408d967b0f1bccfd8d50d265f75ab9b79420d3ef0cc0275a7d8b84f7e2c8f7  segment.mp4
```
Window check: cut covers source 138.5–147.5 s ⊇ packet window 139–147 s ✓ · duration 9.008 s vs 9.0 s target ✓.

## §2 Own checks — raw harness output (A9.4; harness = node, CONFIG + logic scripts extracted from recreation.html and evaluated directly)

```
PASS VALIDATE-DEFAULT :: ok=true errors=[] sumA=258 sumB=264 ownedCells=356
PASS DERIVE :: completeAtMs=6000 durationMs=8000 latestFillEnd=6000 latestDrawEnd=2350 postEnd=3300
PASS POST-FRACTION-DEFAULT :: CONFIG.threshold/CONFIG.total = 270/538 = 0.5018587360594795
PASS CP1@500 :: stateAt(CONFIG, CONFIG.tGridSettleMs=500): drawn=0 drawing=0 credited=0/0 filledCells=0 maxFillProgress=0 postPresent=false gridProgress=1
PASS CP0b@250-GRIDSETTLE :: stateAt(CONFIG, CONFIG.tGridSettleMs/2=250): gridProgress=0.5 filledCells=0 (renderer binds gCells opacity to gridProgress)
PASS CP2@1000 :: stateAt(CONFIG, min(regions[].startMs)+400 = 600+400 = 1000): drawing=["R01","R02","R03","R04","R05","R06"] filledCells=0 maxFillProgress=0 credited=0/0 postPresent=false
PASS CP3@1600 :: stateAt(CONFIG, fillStartMs(R01)+100 = 1500+100 = 1600): R01.fillProgress=0.0055 ((1600-1500)/1900 eased) R02.fillProgress=0.0013 credited=0/0 drawing=8 (draw-on continuing)
PASS CP4@2000 :: stateAt(CONFIG, fillStartMs(R01)+500 = 2000): fillInProgress A=4 B=4 drawing=5 credited=0/0 postPresent=false R01.fill=0.139
PASS CP5@3000 :: stateAt(CONFIG, CONFIG.tPostMs + CONFIG.postDurMs/2 = 3000): postProgress=(3000-CONFIG.tPostMs)/CONFIG.postDurMs=(3000-2700)/600=0.5 plateOpacity=1 plateLayer=top
PASS CP6@4000 :: stateAt(CONFIG, completeAtMs - CONFIG.holdMs = 4000): postProgress=1 creditedA=63 creditedB=58 pendingCells=95
PASS CP7@5000 :: stateAt(CONFIG, completeAtMs-1000 = 5000): pendingCells=17 neverClaimed=8 creditedTotal=252 (denominator CONFIG.total=538; final 522)
PASS CP8@6000 :: stateAt(CONFIG, completeAtMs = 6000): credited=258/264 filledCells=356 pendingCells=0 neverClaimed=8
PASS CP9@7000 :: stateAt(CONFIG, completeAtMs+1000 = 7000) FULL equality vs CP8: perRegion(fill,draw,credited) identical=true credited=258/264 filled=356 pending=0 post=1 — stateAt carries no dissolve/fade term at any t (hold is identity)
PASS ZERO@0 :: stateAt(CONFIG,0): filledCells=0 credited=0/0 postPresent=false drawn=0
PASS COUNT-SCHEMATIC :: regions=16 weights A=258 B=264 ownedCells=356 neverClaimed=8 perRegion R01:21 R02:21 R03:21 R04:21 R05:21 R06:21 R07:19 R08:19 R09:28 R10:28 R11:27 R12:27 R13:21 R14:21 R15:20 R16:20
PASS COUNT-SOURCEFIDELITY :: CONFIG.gridCols*CONFIG.gridRows = 28*13 = 364 built grid cells
PASS SWAP-CONTENT :: swapped CONFIG {threshold:80,total:200,weights:C9 set}: validate ok=true postXFraction=CONFIG.threshold/CONFIG.total=80/200=0.4 label=80 credited@6000=91/96 (sum 187 <= 200)
PASS SWAP-TIMING-POST :: swapped CONFIG {tPostMs:1800}: probe instant = tPostMs + postDurMs/2 = 2100 (CONFIG expression, moved from default 3000 by the swap) postProgress=(2100-1800)/600=0.5 (same 0.5 phase as default CP5) durationMs=8000 (unchanged, post not controlling)
PASS SWAP-TIMING-HOLD :: swapped CONFIG {holdMs:1200}: durationMs=completeAtMs+holdMs=6000+1200=7200; moved hold probe at completeAtMs+1000=7000 (<= durationMs 7200): credited=258/264 filled=356 (completed hold state inside the shortened duration)
PASS SWAP-PALETTE :: swapped CONFIG {palette.sideA:#2e9e6b}: single key value=#2e9e6b; renderer reads palette.sideA for both outline stroke and fill (config-census sites)
PASS SWAP-DIRECTION :: swapped CONFIG {accumulationDirection:outward}: effStart(R01)=(600+1650)-600=1650 effStart(R16)=600
PASS VALIDATION-REJECTS-OLD-SWAP :: record's unamended swap (weights sum 522 > total 200) rejected: errors=["weight sums 522 exceed total 200"]
PASS BOUNDARY :: R01 7x3 block boundary edges=20 (perimeter 2*(7+3)=20)
SUMMARY pass=23 fail=0
```
Syntax (command 3): `node --check` rc=0 on all three recreation script blocks (t210-config · t210-logic · t210-render) and on the comparison script. RNG census: `Math.random` grep count 0 — **RNG ABSENT** (no jitter exists by construction).
Purity grep (command 1) raw: pattern `segment\.mp4|source\.webm|<video|<img|ajavsMbCapY` over recreation.html → **0 hits**. `url(#id)` scan → no occurrences (nothing to classify). External-asset scan (`src=|href=|@import|url(`) → **NO EXTERNAL REFERENCES**; asset inventory = recreation.html alone (zero external assets).
Comparison check (C14 instruments): comparison.html structural receipts — `HANDLE_OFFSET_S` present (offset constant, mapping `buildMs = (video.currentTime − 0.5) × 1000` evaluates: video 3.0 s → buildMs 2500 · buildMs 3000 → video 3.5 s) · phone stacking rule present (`@media (max-width:560px)` column stack + sticky controls) · both sides labeled (ORIGINAL with timestamps · RECREATION parameterized) · comparison script syntax rc=0. Browser playback itself is not exercisable in this seat — PIXEL-UNVERIFIED, carried to scores.md.

## §3 A6 legs (on the final build)
- fit-table.md — 0 HITs carried (first-pass label-floor HIT cured in CONFIG pre-filing; cure recorded on the fit table's face). Rows: label ink 58×20 in plate 76×40 (margins 9.0/10.0) · 360 px ink height 12 px ≥ floor · contrast plateInk/plate 18.88:1 · post/ground 15.43:1. (Amendment C10's printed 17.9:1 estimate is superseded by the harness-computed 18.88:1 — the measured value governs.)
- config-census.md — 0 HITs: all literals classified (2 page-chrome hex + structural numbers), every CONFIG key incl. nested `regions[]` keys resolved to a value-flowing site, no CSS variables in use.

## §4 Fidelity plan (what is implemented / deferred)
Implemented: grid settle (SB-A) · per-region outline draw-on from derived boundary geometry (SB-B) · per-region fill accumulation as cell-union wash under the grid squares, fill only after the region's own outline closes (SB-C, derivation-enforced) · post descent + opaque 270 plate in the top layer (SB-D) · completed hold with NO dissolve/fade (SB-E) · tally credit only at fillEnd. Deferred (named, lawful): region/state name labels (specimen carries none) · the CP0 lead-in and CP10 lead-out beats (neighbouring techniques) · the specimen's B3 covered-label defect (cured, not reproduced — digest §5 B3 prices it a defect).

## §5 RECEIPT INDEX (A13) — reconciled before payload assembly
Reconciliation performed against: guards.md commands 1–8 · the amended Plan's A11 assertions (CP1–CP9 + interior probes per amendment C12) · the Phase A plan-review's assertion sets (post-fraction numeric · duration derivation · separated default/swapped sets · validation rejection) · expected CONFIG keys incl. nested/array `regions[]` keys (config-census §2 table = the expected set, 36 rows incl. derived-not-stored list). Result: **no missing expected line; every line below carries its receipt or a NOT-DEMANDED line with a governing citation.**

| Index line | Receipt / disposition |
|---|---|
| cmd 1 — purity grep | §2 raw: 0 hits; `url(#id)` none to classify |
| cmd 2 — swap test | §2 raw: SWAP-CONTENT · SWAP-TIMING-POST (moved instant 3000→2100 shown) · SWAP-TIMING-HOLD · SWAP-PALETTE · SWAP-DIRECTION — all PASS (stale "3000→1950" cured Cycle 038, see §7) |
| cmd 3 — syntax + RNG census | §2: node --check rc=0 ×4 scripts · RNG ABSENT (grep 0) |
| cmd 4 — scores arithmetic | NOT-DEMANDED for the builder record — seat-side at consolidation (INSTRUCTION §5.5; amendment C13/§2.6 step 6 of the item record) |
| cmd 5 — segment binding | §1 raw ffprobe: 9.007681 s, h264 1920×1080, covers 138.5–147.5 ⊇ window |
| cmd 6 — measured-fit leg | fit-table.md: 0 HITs carried; rows 1–4 receipts on its face |
| cmd 7 — config-census leg | config-census.md: 0 HITs; 36-row key→site table on its face |
| cmd 8 — census-anchor zero-state probe | §2 raw: CP1@500 PASS + ZERO@0 PASS (stateAt returns zero drawn/filled/post at both) |
| A11 CP1 @500 | §2 CP1@500 — CONFIG expression: stateAt(CONFIG, 500), all terms CONFIG-derived |
| A11 CP2 @1000 | §2 CP2@1000 — drawing set R01–R06 from CONFIG startMs/drawDurMs |
| A11 CP3 @1600 (restored checkpoint) | §2 CP3@1600 — R01 fillProgress from (1600 − fillStartMs(R01))/fillDurMs(R01) = (1600−1500)/1900 |
| A11 CP4 @2000 | §2 CP4@2000 — ≥3/side fill progress, credited 0/0 |
| A11 CP5 @3000 | §2 CP5@3000 — postProgress (3000 − CONFIG.tPostMs)/CONFIG.postDurMs = 0.5; plate opaque/top |
| A11 CP6 @4000 | §2 CP6@4000 — credited A 63 / B 58 from fillEndMs credit rule |
| A11 CP7 @5000 | §2 CP7@5000 — pendingCells 17 (pockets) and neverClaimed 8 as SEPARATE quantities; credited 252 < 522 (denominator CONFIG.total 538) |
| A11 CP8 @6000 | §2 CP8@6000 — credited 258/264, filledCells 356 |
| A11 CP9 @7000 | §2 CP9@7000 — state identical to CP8 |
| Plan-review set — validation | §2 VALIDATE-DEFAULT PASS + VALIDATION-REJECTS-OLD-SWAP PASS (loud rejection, errors printed) |
| Plan-review set — boundary derivation | §2 BOUNDARY PASS (R01 perimeter 20 edges from cells) |
| C12 interior probe — CP3 (first-fill, interior of R01's fill interval) | §2 CP3@1600: probe instant = `fillStartMs(R01) + 100` (CONFIG expression, evaluated 1600) with R01/R02 fillProgress + drawing count |
| C12 interior probe — CP5 (post mid-descent) | §2 CP5@3000: probe instant = `CONFIG.tPostMs + CONFIG.postDurMs/2` (evaluated 3000), postProgress 0.5 |
| C12 swapped-set probe — post timing swap | §2 SWAP-TIMING-POST: probe instant = swapped `tPostMs + postDurMs/2` (evaluated 2100, moved from 3000 by the swap, same 0.5 phase) |
| C12 swapped-set probe — hold swap with moved hold probe | §2 SWAP-TIMING-HOLD: durationMs 7200 + hold state probed at `completeAtMs + 1000` = 7000 inside the shortened duration |
| Default post-fraction assertion (separately identifiable) | §2 POST-FRACTION-DEFAULT: `CONFIG.threshold/CONFIG.total` = 270/538 = 0.5018587360594795 |
| Default duration-derivation assertion (separately identifiable) | §2 DERIVE: completeAtMs = max(500, 2350, 6000, 3300) = 6000 · durationMs = completeAtMs + holdMs = 8000 |
| Grid-settle (SB-A) renderer connection | §2 CP0b@250-GRIDSETTLE + CP1 gridProgress=1: `stateAt` gridProgress from `CONFIG.tGridSettleMs`, renderer binds the grid group's opacity to it |
| Census rows for expected CONFIG keys | config-census.md §2 — every expected key (nested/array incl.) carries its site; no expected key lacks a row |

## §6 Prewave disposition
- **Firing 1 (build sha c025574e…): HOLD — primary ASSERTED-CHECKS** (parameterization 0.85 · purity pre-check 1.00 · own-checks completeness 0.35 · fidelity-plan honesty 0.85). Return filed verbatim at `codex/jev-prewave.md`. Four named defects, all cured in ONE cure round: (1) checkpoint instants were literal millisecond arguments → every probe instant is now a CONFIG expression (printed in each §2 receipt: `CONFIG.tGridSettleMs` · `min(regions[].startMs)+400` · `fillStartMs(R01)+100/+500` · `tPostMs + postDurMs/2` · `completeAtMs − holdMs / −1000 / +0 / +1000`); the post-swap probe now uses the SAME expression under the swapped CONFIG (`tPostMs + postDurMs/2` → 2100, phase 0.5 as default, not 1950/0.25) and the hold swap gained its moved hold probe at `completeAtMs+1000` inside the shortened duration. (2) Omitted prescribed state → CP1/CP2 now report maxFillProgress = 0 alongside zero filled cells; CP3 reports the continuing-draw count (8); CP9 asserts FULL per-region state equality (fill/draw/credited) + pending/post/grid terms, with the no-dissolve/no-fade hold verified as identity. (3) Index gaps → §5 gained separately identifiable lines for the C12 interior probes, the swapped-set probes, the default post-fraction, the default duration derivation, and the grid-settle connection. (4) Grid settle unbound → `stateAt` exposes gridProgress from `tGridSettleMs` and the renderer binds the grid group's opacity to it (SB-A is now a visible, CONFIG-driven mechanic; CP0b@250 receipt). Cure-round build diff: stateAt gridProgress term + renderer opacity binding only (no CONFIG value changed except none — CONFIG is byte-identical in values; fit/census measurements stand, hashes updated on their faces). Fresh own-checks on the cured build: 23/23 PASS (§2 above) · purity 0 hits · syntax rc=0 ×3.
- **Firing 2 (cured build sha 254add09…): HOLD — primary ASSERTED-CHECKS** (parameterization 0.90 · purity pre-check 1.00 · own-checks completeness 0.45 · fidelity-plan honesty 0.95). Return filed verbatim at `codex/jev-prewave-refire.md`. **Second HOLD → the two-HOLD stop applies (A12): NO VERDICT is filed, the five-lens wave is NOT fired on this build, and the priced cures stand in scores.md for the completion cycle (A12.3).** The four named defects are receipt-form defects in this record (the underlying harness results exist for three of them; the fourth — a hold-dependent probe — was genuinely not run): (1) the hold-swap probe evaluates `completeAtMs + 1000` = 7000 under both schedules — a hold-DEPENDENT probe (e.g. CP6's expression `completeAtMs − holdMs`: 4000 default → 4800 swapped) with both evaluated instants + observed state is owed; (2) this record's §5 cmd-2 line still printed the superseded "3000→1950" movement after the cure moved the receipt to 2100 — a stale index line contradicting its own receipt (the T199 overstated-index lesson, repeated in miniature); (3) CP9's receipt lacks a whole-state equality result (per-region + aggregate terms printed; no single equality receipt incl. gridProgress); (4) SWAP-PALETTE prints the swapped input value + census citation but no observed stroke/fill output values from the swapped build.

## §7 Cycle 038 completion cures (A12.3) — raw harness output, measured only

Build bound (unchanged): recreation.html sha256 `254add09d9893154b845977434d620affb04b635146c56f3705ef806085e5df5` · 16,597 B. Harness = node, CONFIG + logic scripts extracted from recreation.html and evaluated directly (same form as §2), run fresh in Cycle 038.

### Fresh own-checks on the final build (Cycle 038 re-run)
```
PASS VALIDATE-DEFAULT :: ok=true errors=[] sumA=258 sumB=264 ownedCells=356
PASS DERIVE :: completeAtMs=6000 durationMs=8000 latestFillEnd=6000 latestDrawEnd=2350 postEnd=3300
PASS POST-FRACTION-DEFAULT :: CONFIG.threshold/CONFIG.total = 270/538 = 0.5018587360594795
PASS CP1@500 :: stateAt(CONFIG, CONFIG.tGridSettleMs=500): drawn=0 drawing=0 credited=0/0 filledCells=0 maxFillProgress=0 postPresent=false gridProgress=1
PASS CP0b@250-GRIDSETTLE :: stateAt(CONFIG, CONFIG.tGridSettleMs/2=250): gridProgress=0.5 filledCells=0 (renderer binds gCells opacity to gridProgress)
PASS CP2@1000 :: stateAt(CONFIG, min(regions[].startMs)+400 = 600+400 = 1000): drawing=["R01","R02","R03","R04","R05","R06"] filledCells=0 maxFillProgress=0 credited=0/0 postPresent=false
PASS CP3@1600 :: stateAt(CONFIG, fillStartMs(R01)+100 = 1500+100 = 1600): R01.fillProgress=0.0055 R02.fillProgress=0.0013 credited=0/0 drawing=8 (draw-on continuing)
PASS CP4@2000 :: stateAt(CONFIG, fillStartMs(R01)+500 = 2000): fillInProgress A=4 B=4 drawing=5 credited=0/0 postPresent=false R01.fill=0.139
PASS CP5@3000 :: stateAt(CONFIG, CONFIG.tPostMs + CONFIG.postDurMs/2 = 3000): postProgress=(3000-CONFIG.tPostMs)/CONFIG.postDurMs=(3000-2700)/600=0.5 plateOpacity=1 plateLayer=top
PASS CP6@4000 :: stateAt(CONFIG, completeAtMs - CONFIG.holdMs = 4000): postProgress=1 creditedA=63 creditedB=58 pendingCells=95
PASS CP7@5000 :: stateAt(CONFIG, completeAtMs-1000 = 5000): pendingCells=17 neverClaimed=8 creditedTotal=252 (denominator CONFIG.total=538; final 522)
PASS CP8@6000 :: stateAt(CONFIG, completeAtMs = 6000): credited=258/264 filledCells=356 pendingCells=0 neverClaimed=8
PASS CP9@7000 :: stateAt(CONFIG, completeAtMs+1000 = 7000) FULL equality vs CP8: perRegion(fill,draw,credited) identical=true credited=258/264 filled=356 pending=0 post=1 — stateAt carries no dissolve/fade term at any t (hold is identity)
PASS ZERO@0 :: stateAt(CONFIG,0): filledCells=0 credited=0/0 postPresent=false drawn=0
PASS COUNT-SCHEMATIC :: regions=16 weights A=258 B=264 ownedCells=356 neverClaimed=8 perRegion R01:21 R02:21 R03:21 R04:21 R05:21 R06:21 R07:19 R08:19 R09:28 R10:28 R11:27 R12:27 R13:21 R14:21 R15:20 R16:20
PASS COUNT-SOURCEFIDELITY :: CONFIG.gridCols*CONFIG.gridRows = 28*13 = 364 built grid cells
PASS SWAP-CONTENT :: swapped CONFIG {threshold:80,total:200,weights:C9 set}: validate ok=true postXFraction=CONFIG.threshold/CONFIG.total=80/200=0.4 label=80 credited@6000=91/96 (sum 187 <= 200)
PASS SWAP-TIMING-POST :: swapped CONFIG {tPostMs:1800}: probe instant = tPostMs + postDurMs/2 = 2100 (CONFIG expression, moved from default 3000 by the swap) postProgress=(2100-1800)/600=0.5 (same 0.5 phase as default CP5) durationMs=8000 (unchanged, post not controlling)
PASS SWAP-TIMING-HOLD :: swapped CONFIG {holdMs:1200}: durationMs=completeAtMs+holdMs=6000+1200=7200; moved hold probe at completeAtMs+1000=7000 (<= durationMs 7200): credited=258/264 filled=356 (completed hold state inside the shortened duration)
PASS SWAP-PALETTE :: swapped CONFIG {palette.sideA:#2e9e6b}: single key value=#2e9e6b; renderer reads palette.sideA for both outline stroke and fill (config-census sites); observed swapped stroke/fill in CURE4 below
PASS SWAP-DIRECTION :: swapped CONFIG {accumulationDirection:outward}: effStart(R01)=(600+1650)-600=1650 effStart(R16)=600
PASS VALIDATION-REJECTS-OLD-SWAP :: record's unamended swap (weights sum 522 > total 200) rejected: errors=["weight sums 522 exceed total 200"]
PASS BOUNDARY :: R01 7x3 block boundary edges=20 (perimeter 2*(7+3)=20)
SUMMARY pass=23 fail=0
```
Syntax fresh: `node --check` rc=0 on all three recreation script blocks (t210-config · t210-logic · t210-render). RNG census fresh: `Math.random` grep count 0 — RNG ABSENT. Purity grep fresh (command 1): pattern `segment\.mp4|source\.webm|<video|<img|ajavsMbCapY` → 0 hits; `url(#id)` scan 0 occurrences; external-asset scan → no external references.

### Completion cures — raw output
```
CURE1-HOLD-DEPENDENT :: expression=completeAtMs - holdMs :: default holdMs=2000 completeAtMs=6000 evaluatedInstant=4000 observed={postProgress:1,creditedA:63,creditedB:58,pendingCells:95,filledCells:261,durationMs:8000} :: swapped holdMs=1200 completeAtMs=6000 evaluatedInstant=4800 observed={postProgress:1,creditedA:122,creditedB:113,pendingCells:25,filledCells:331,durationMs:7200} :: instantMoved=4000->4800 pass=true
CURE3-CP9-WHOLE-STATE-EQUALITY :: CP8@t=6000 CP9@t=7000 deepEqual=true differingFields=[] aggregates={credited:258/264,filledCells:356,pendingCells:0,neverClaimed:8} gridPostPlate={gridProgress:1,postProgress:1,postPresent:true,plateOpacity:1,plateLayer:top,label:270,postXFraction:0.5018587360594795}
CURE4-SWAP-PALETTE-OBSERVED :: swapped CONFIG palette.sideA=#2e9e6b :: rendererObserved sideA fill=#2e9e6b stroke=#2e9e6b :: sideB (unchanged control) fill=#5b84ae stroke=#5b84ae :: fillOpacity=0.85 outlineWidthPx=3 pass=true
```
- Cure (1) hold-dependent swap probe: CP6 form `completeAtMs − holdMs` evaluates 4000 (default, holdMs 2000) → 4800 (swapped, holdMs 1200), both instants + observed state printed above.
- Cure (3) CP9 whole-state equality: single deep-equality receipt above — all region terms (drawProgress · fillProgress · credited · fillStartMs · fillEndMs · drawStartMs ×16) + aggregates + grid/post/plate terms; raw boolean `deepEqual=true`, differingFields=[].
- Cure (4) palette swap observed output: renderer side-A fill + stroke both observed `#2e9e6b` under the swapped CONFIG (side-B control unchanged `#5b84ae`), printed above — not the input alone.

### Cure (2) + A13 receipt-index re-reconciliation (diff-against-raw, all lines)
Every §5 index line was diffed against the raw receipt it cites (text vs raw, not presence only) on the fresh Cycle 038 run. Result: ONE stale line found and cured — §5 cmd 2 printed the superseded "3000→1950" while its §2 receipt (and the fresh re-run) record `tPostMs + postDurMs/2` = 2100 under the swap; the index line now reads "3000→2100". All other §5 lines (cmd 1 · 3 · 5 · 6 · 7 · 8 · A11 CP1–CP9 · plan-review sets · C12 interior/swapped probes · post-fraction · duration derivation · grid-settle · census rows) match their cited raw output on the fresh run, values identical to §2. Guards commands + A11 assertions inherited whole from Cycle 037 — none dropped.

### A6 legs fresh re-verification (Cycle 038)
- fit-table.md — re-measured with the same instrument (PIL, DejaVuSans-Bold): "270" @28 px ink 58×20 px (bbox (0,6,58,26)) · @16 px ink height 12 px · contrast plateInk/plate 18.88:1 · post/ground 15.43:1 — all identical to the filed rows. **0 HITs, unchanged; file not edited.**
- config-census.md — re-scanned: hex outside CONFIG = {#e9e6de, #1a1a1a} (page chrome, as filed) · `var(--` 0 · `setProperty` 0 · CONFIG keys 27 top-level + 16 regions, as filed. **0 HITs, unchanged; file not edited.**

### Cycle 038 completion disposition
- **jev-prewave completion re-fire (ONE firing, A12.3): FIRE-WAVE** — parameterization 0.95 · purity pre-check 1.00 · own-checks completeness 0.95 · fidelity-plan honesty 0.95. Return filed verbatim at `codex/jev-prewave-completion-cycle038.md` (+ `.raw`).
- **Five-lens wave fired on FIRE-WAVE** (identical sha `254add09…` all five): motion 72 · timing 90 · purity 98 · reusability 78 · readability 88 → recomputed average **85.2**, min **72** → **PASS** (avg ≥85 & min ≥70). Returns: `codex/lens-{motion,timing,purity,reusability,readability}-cycle038.md`. Full Cycle 038 section in scores.md.
