OpenAI Codex v0.169.0
--------
workdir: /home/hatch
model: gpt-6.2-sol
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR]
reasoning effort: none
reasoning summaries: none
session id: 01a1ef43-152e-7900-b14e-c848a63acf16
--------
user
TASK: You are the jev-prewave judge for the recreation job. Judge ONLY item T210's build record below, per the call definition that follows. Return ONE verdict (FIRE-WAVE or HOLD) with the four dimension scores (0-1), the primary classification if held, and named defects if any. End with a BODY-WRITE: line naming what your return files.

# Jev call — jev-prewave (recreation)

_Per-call definition from jev-call-template.md. Designed 2026-11-14. The judgment: a scoring wave is the lane's expensive instrument — this call prices whether a build has EARNED its wave before the wave spends._

## 1. What it judges
- Deliverable: an attempt's build record (parameter table · construction route · own-checks results) BEFORE the Codex wave fires.
- Call point: recreation INSTRUCTION §4, between the builder's own checks (§5.2) and the wave (§5.3). The verdict is advisory: applied, a HOLD returns the build to the builder with named defects and the wave does not fire on that item; set aside, the miss is recorded in Condense. An unfired call makes the cycle INCOMPLETE.

## 2. Instruction (the model's charge)
Judge whether this build record shows a recreation ready to be scored, or one whose defects are already visible in its own paperwork. Price: (1) PARAMETERIZATION — is the piece genuinely CONFIG-driven (fields named, ranges sane), or hard-coded with a config costume? (2) PURITY PRE-CHECK — does the construction route describe generation from parameters, with no tracing/embedding step hiding in the prose? (3) OWN-CHECKS COMPLETENESS — are the mechanical guards' results recorded (purity grep, swap test, syntax), or asserted? **Census-checkpoint mapping (Amendment A11, landed 2026-11-17, Cycle 028 Condense): every Observe census checkpoint for the item must map to an executable own-check assertion whose evaluation instant is CONFIG-derived; the build-record identifies checkpoint · assertion · CONFIG expression · evaluated result. ASSERTED-CHECKS is returned if any checkpoint lacks this mapping, any evaluation instant uses hardcoded defaults, or execution evidence is absent; a CONFIG timing swap must be shown to move the corresponding assertion's evaluation instant. Receipt form (Amendment A12, landed 2026-11-18, Cycle 035 Condense): the execution evidence for each assertion is its EXECUTABLE RECEIPT — harness command or run · CONFIG expression evaluated · raw result from the build under review (for a timing swap, the receipt shows the changed evaluation instant); a claim without its receipt is execution evidence absent. **Receipt-index ground (Amendment A13, landed 2026-11-18, Cycle 036 Condense): a build-record whose RECEIPT INDEX (INSTRUCTION A13.1) is missing an expected entry (an applicable guards.md command, a planned A11 assertion, an assertion inherited whole from a prior attempt's filed harness, or a census row for an expected CONFIG key), carries an exclusion whose disposition cites no governing plan or guard, or carries a populated receipt lacking the evidence its assertion requires (CONFIG expression + evaluated value for CONFIG-derived inputs; raw observed result for checks) is an ASSERTED-CHECKS ground by name.** The same leg prices the A6 fit evidence: a fit-table row lacking measurement provenance, or carrying model-derived bounds, per guard-measured-fit.md checks 1–2 is an ASSERTED-CHECKS ground.** (4) TECHNIQUE FIDELITY PLAN — does the record state which packet mechanics the build implements and which it deliberately defers (a deferral named is lawful; a mechanic silently absent is not)? Score 0–1 per dimension, classify defects. You judge paperwork only: a build can pass you and still fail its wave — your job is that no wave is spent on a build its own record already condemns.

## 3. Context contract (masked view)
- FED: build-record.md · the CONFIG block of recreation.html · the technique's packet section · guards.md command list (what own-checks should exist) · **the item's A6 leg outputs (fit-table.md + config-census.md) — added 2026-11-16, recreation Cycle 024 Condense, on the Wave-21 pattern: prewave firings for T151, T153 and T154 all HOLDed or re-fired on feed completeness (the A6 files and packet section existed complete in the artifact directory but were not in the payload), the lane's recurring ASSERTED-CHECKS false-positive class. A payload lacking any FED element is a feeder defect, printed as such in the build record; a HOLD whose only named cure is feeding an already-filed FED element is disposed as a feed-completeness miss, with the miss recorded.**
- FED (added 2026-11-17, Cycle 026 Condense — the T167 miss): **the wave record's binding census-anchor mapping for the item + any Observe dispositions pricing source ambiguities** (the §1d-form: where a packet caption or digest line admits two readings, the wave record's priced reading governs). A HOLD founded on a source ambiguity the wave record has already priced is a feeder defect, disposed as such in the build record — the judge prices the build against the binding mapping, not against raw source prose. (Founding miss: Cycle 026 T167 — HOLD priced a packet caption's ambiguous reading against a build that followed the gate-approved mapping; the seat upheld the set-aside at §5.)
- NEVER FED: the builder's confidence prose · prior attempts' scores (each build is priced on its own record).
- Ceiling: ≤32k tokens; the HTML enters as its CONFIG + construction sections, not media.

## 4. Output space
- Verdict classes: **FIRE-WAVE · HOLD**.
- Dimensions (0–1): parameterization · purity pre-check · own-checks completeness · fidelity-plan honesty.
- Rejection taxonomy (one primary): HARDCODED-CONFIG · TRACING-STEP · ASSERTED-CHECKS (results claimed, not recorded) · SILENT-DEFERRAL.
- Accepted profile travels: cited in scores.md's pre-wave line; a wave fired over a HOLD is a deviation (WAVE-OVER-HOLD).

## 5. Floors and disposition
- Any dimension < 0.5 → HOLD · ASSERTED-CHECKS at any score on other dimensions → HOLD (unrecorded checks are the lane's named failure class).
- Disposition: the verdict is advisory — reviewed by the runner, applied or set aside with the miss recorded in Condense. The verdict + classification + disposition land in the build record either way; an applied HOLD leaves the item IN PROGRESS and the wave moves to its next item (a held item never holds the wave hostage).

## Call command
- BINDING OWED AT FIRST FIRING — the call fires in this job's next live cycle (owner's ruling 2026-11-14: arming = firing); binding it to the fleet's decision-model runner and recording the exact command here is the first firing's own first step, and the raw response files in the run record.

## 6. Firing record and improvement
- Exemplars: T15 attempt 1's build record (must FIRE-WAVE: checks recorded, deferral of the interlude named in its Plan) · a constructed record claiming a swap test with no harness output (must HOLD as ASSERTED-CHECKS) · a constructed record whose CONFIG is decorative over hard-coded phrases (must HOLD as HARDCODED-CONFIG).
- Firing: this call fires at its step on every cycle; its firing record and misses are its improvement material. No test precedes firing. The exemplars above stand as its first firing cases — all three must classify correctly when fired, and a miss is recorded in Condense as improvement material, never as a bar to firing.

## 7. Iteration (Condense)
Amendments name forcing evidence + before/after. A text change takes effect on the call's next firing; the call keeps firing every cycle, and Condense prices the change against the returns that follow it.

## Owner's ruling addendum (2026-11-14 ~20:55 EST — supersedes gate phrasing above)
ARMING = FIRING: this call fires unconditionally in its owning job's next live cycle; the raw response files in the run record. There is no BUILT-NOT-FIRED state and no calibration gate — the calibration exemplars above are improvement material the firing record tests, not a precondition. VERDICTS ARE ADVISORY: applied, or set aside with the miss recorded in Condense + the call-file amendment it teaches. Any sentence above phrasing this call as blocking, gating, or preconditioning a step reads superseded by this addendum; the FIRING is the only non-skippable part.


# FED: build-record.md (verbatim)
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
| cmd 2 — swap test | §2 raw: SWAP-CONTENT · SWAP-TIMING-POST (moved instant 3000→1950 shown) · SWAP-TIMING-HOLD · SWAP-PALETTE · SWAP-DIRECTION — all PASS |
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
- **Firing 2:** _(verdict + dimensions + return path filled when fired.)_


# FED: CONFIG block of recreation.html (verbatim)

"use strict";
const CONFIG = {"total":538,"threshold":270,"stageW":640,"stageH":360,"marginPx":24,"gridCols":28,"gridRows":13,"gapRatio":0.45,"palette":{"ground":"#f4f1ea","cell":"#111111","sideA":"#d94f5c","sideB":"#5b84ae","post":"#1a1a1a","plate":"#ffffff","plateInk":"#111111"},"fillOpacity":0.85,"outlineWidthPx":3,"outlineOpacity":1.0,"easing":"easeInOut","postWidthPx":10,"postOverhangPx":24,"plateWPx":76,"plateHPx":40,"labelFontPx":28,"labelMinPx":28,"tGridSettleMs":500,"drawDurMs":700,"fillDelayMs":200,"tPostMs":2700,"postDurMs":600,"holdMs":2000,"accumulationDirection":"inward","regions":[{"id":"R01","side":"A","weight":34,"startMs":600,"fillEndMs":3400,"cells":[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2]]},{"id":"R02","side":"B","weight":31,"startMs":650,"fillEndMs":3550,"cells":[[21,0],[22,0],[23,0],[24,0],[25,0],[26,0],[27,0],[21,1],[22,1],[23,1],[24,1],[25,1],[26,1],[27,1],[21,2],[22,2],[23,2],[24,2],[25,2],[26,2],[27,2]]},{"id":"R03","side":"A","weight":29,"startMs":700,"fillEndMs":3700,"cells":[[7,0],[8,0],[9,0],[10,0],[11,0],[12,0],[13,0],[7,1],[8,1],[9,1],[10,1],[11,1],[12,1],[13,1],[7,2],[8,2],[9,2],[10,2],[11,2],[12,2],[13,2]]},{"id":"R04","side":"B","weight":27,"startMs":750,"fillEndMs":3900,"cells":[[14,0],[15,0],[16,0],[17,0],[18,0],[19,0],[20,0],[14,1],[15,1],[16,1],[17,1],[18,1],[19,1],[20,1],[14,2],[15,2],[16,2],[17,2],[18,2],[19,2],[20,2]]},{"id":"R05","side":"A","weight":21,"startMs":850,"fillEndMs":4100,"cells":[[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5]]},{"id":"R06","side":"B","weight":19,"startMs":900,"fillEndMs":4300,"cells":[[21,3],[22,3],[23,3],[24,3],[25,3],[26,3],[27,3],[21,4],[22,4],[23,4],[24,4],[25,4],[26,4],[27,4],[21,5],[22,5],[23,5],[24,5],[25,5],[26,5],[27,5]]},{"id":"R07","side":"A","weight":38,"startMs":1000,"fillEndMs":4550,"cells":[[7,3],[8,3],[9,3],[10,3],[11,3],[12,3],[13,3],[7,4],[8,4],[9,4],[12,4],[13,4],[7,5],[8,5],[9,5],[10,5],[11,5],[12,5],[13,5]]},{"id":"R08","side":"B","weight":36,"startMs":1050,"fillEndMs":4800,"cells":[[14,3],[15,3],[16,3],[17,3],[18,3],[19,3],[20,3],[14,4],[15,4],[16,4],[19,4],[20,4],[14,5],[15,5],[16,5],[17,5],[18,5],[19,5],[20,5]]},{"id":"R09","side":"A","weight":17,"startMs":1150,"fillEndMs":5000,"cells":[[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[0,9],[1,9],[2,9],[3,9],[4,9],[5,9],[6,9]]},{"id":"R10","side":"B","weight":23,"startMs":1200,"fillEndMs":5200,"cells":[[21,6],[22,6],[23,6],[24,6],[25,6],[26,6],[27,6],[21,7],[22,7],[23,7],[24,7],[25,7],[26,7],[27,7],[21,8],[22,8],[23,8],[24,8],[25,8],[26,8],[27,8],[21,9],[22,9],[23,9],[24,9],[25,9],[26,9],[27,9]]},{"id":"R11","side":"A","weight":25,"startMs":1300,"fillEndMs":5400,"cells":[[7,6],[8,6],[9,6],[10,6],[11,6],[12,6],[13,6],[7,7],[8,7],[9,7],[11,7],[12,7],[13,7],[7,8],[8,8],[9,8],[10,8],[11,8],[12,8],[13,8],[7,9],[8,9],[9,9],[10,9],[11,9],[12,9],[13,9]]},{"id":"R12","side":"B","weight":28,"startMs":1350,"fillEndMs":5550,"cells":[[14,6],[15,6],[16,6],[17,6],[18,6],[19,6],[20,6],[14,7],[15,7],[16,7],[18,7],[19,7],[20,7],[14,8],[15,8],[16,8],[17,8],[18,8],[19,8],[20,8],[14,9],[15,9],[16,9],[17,9],[18,9],[19,9],[20,9]]},{"id":"R13","side":"A","weight":42,"startMs":1450,"fillEndMs":5700,"cells":[[0,10],[1,10],[2,10],[3,10],[4,10],[5,10],[6,10],[0,11],[1,11],[2,11],[3,11],[4,11],[5,11],[6,11],[0,12],[1,12],[2,12],[3,12],[4,12],[5,12],[6,12]]},{"id":"R14","side":"B","weight":47,"startMs":1500,"fillEndMs":5850,"cells":[[21,10],[22,10],[23,10],[24,10],[25,10],[26,10],[27,10],[21,11],[22,11],[23,11],[24,11],[25,11],[26,11],[27,11],[21,12],[22,12],[23,12],[24,12],[25,12],[26,12],[27,12]]},{"id":"R15","side":"A","weight":52,"startMs":1600,"fillEndMs":5950,"cells":[[7,10],[8,10],[9,10],[10,10],[11,10],[12,10],[13,10],[7,11],[8,11],[9,11],[11,11],[12,11],[13,11],[7,12],[8,12],[9,12],[10,12],[11,12],[12,12],[13,12]]},{"id":"R16","side":"B","weight":53,"startMs":1650,"fillEndMs":6000,"cells":[[14,10],[15,10],[16,10],[17,10],[18,10],[19,10],[20,10],[14,11],[15,11],[16,11],[18,11],[19,11],[20,11],[14,12],[15,12],[16,12],[17,12],[18,12],[19,12],[20,12]]}]};


# FED: Packet #12 digest section for T210 (verbatim)
### T09 — Threshold grid-map (the road to 270)
- **Timestamps:** 2:19–2:27
- **Mechanics:** State outlines draw themselves over the full dot field (T03's substrate); red and blue regions accumulate from opposite sides toward a heavy black marker post labelled 270 at the field's centre. Operation: map highlight over a tally grid — the map and the count are the same object. The counted entity is the state block, the increment is its whole dot region, the result is which side of the post the accumulation reaches.
- **Why it works:** The threshold is a place, not a number in a sentence: the viewer watches territory become a tally and can see the finish line before any state is coloured by a result.
- **Evidence:** ev/t142-threshold-270.jpg (outlines mid-draw over the grid, 270 post, 142 s) · ev/t144-gridmap-mid.jpg (formation continuing, 144 s) · Clip: clips/t08-gridmap-formation.mp4 (139–148 s — draw order and the post's arrival are the claim)



# FED: guards.md (command list, verbatim)
# Guards — recreation

## The judgment layer's home (owner's order, 2026-11-14 — 100% form)
Form: **In-job form.** This job's judging = the Codex scoring wave (its review type, defined in `codex-scoring-wave.md` in this directory) + the mechanical guards below + `jev-prewave.md`. The wave's execution may be shared tooling; the definitions are this job's own files.

## The commands (mechanical guards — callable, demonstrated)
1. Construction-purity grep — recreation.html must contain no reference to source media, frames, or tracing (pattern census over the file).
   Demonstrated: 2026-11-13, T15 attempt 1 (zero hits; Codex purity lens independently returned 100).
   Pattern precision (2026-11-17, Cycle 026 Condense — priced across T167 · T170 · T175 in one wave): an in-file fragment reference `url(#id)` (an SVG paint-server or clip definition inside the same file) is NOT a specimen reference; such hits are classified in the item's build record and never counted as purity hits. The refusal class is specimen media, source files, and tracing — the grep's specimen alternatives (`segment.mp4|source.mp4|<video|<img|1235931636`-form source ids) stay unmodified.
2. Swap test (parameterization proof) — headless harness loads the recreation with a swapped CONFIG phrase; target geometry must regenerate for the new words (a traced copy cannot).
   Demonstrated: 2026-11-13, T15 attempt 1, LOGIC level (node harness, stubbed canvas: 5,060 → 2,728 targets). Pixel-level render proof is NOT exercisable from this seat (no browser binary) — printed limitation, carried in scores.md; the comparison page is the render surface.
3. Syntax + determinism check — `node --check` on inline scripts; seeded-RNG presence census.
   Demonstrated: 2026-11-13, T15 attempt 1 (both scripts clean).
4. Scores arithmetic — recompute the wave average + min from the filed lens returns before scores.md prints a verdict.
   Demonstrated: 2026-11-13, T15 attempt 1 (68/82/100/64 → 78.5 recomputed at filing).
5. Segment binding — segment.mp4's timestamps/duration/ffprobe facts recorded against the packet's technique window before any build starts.
   Demonstrated: 2026-11-13, T15 attempt 1 (1:24–1:40 · 16.0 s · ffprobe-cited).
6. **Measured-fit leg** — `guard-measured-fit.md` in this directory. Per item, pre-wave: every subject text element carries a MEASURED fit row (post-fit ink bounds vs container at the 360 px stage, legibility floor ~11 px); a formula-claimed fit or a missing row is a HIT. Owns the "fit asserted, not measured" readability class (Waves 2–5, 10). **Built 2026-11-15 (HQ owed-checks charge); fires unconditionally at the pre-wave step from the next cycle; a wave record lacking a fit table for any item prints INCOMPLETE.** Verdict advisory; firing is not.
7. **Config-census leg (v3.1 codified)** — `guard-config-census.md` in this directory. Per item, pre-wave: all-literal scan with per-constant subject-shaping/structural classification + CONFIG key→application-site resolution (nested/array keys included) + CSS-variable setter check; unapplied keys and unset-variable references are HITs. Owns the config-incompleteness reusability class. **Built 2026-11-15 (HQ owed-checks charge); fires unconditionally at the pre-wave step from the next cycle; a wave record lacking a census for any item prints INCOMPLETE.** Verdict advisory; firing is not.

## Jev call definitions
- `jev-prewave.md` — judges a build record's readiness to spend a scoring wave. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.** (Designed 2026-11-14; attempt 1 predates it and ran under the §5 panel, which runs alongside.)
- `jev-observe-exit.md` — the Observe→Plan gate for a recreation wave (queue state priced · prior/family scores read · mechanics seen · variables extracted · flow-field model + Owner Cures 1–2 carried in working memory · consumer named). Call point: INSTRUCTION §1 gate out. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.** (Phase-guard augmentation, 2026-11-14.)
- `jev-plan-exit.md` — the Plan→Execute gate (parameter table · Execute + Verify checklists as instruments · failure points priced · plateau floor rule priced in Plan). Call point: INSTRUCTION §2 gate out. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.** (2026-11-14.)
- Deliverable Jev: **none separate, by design** — the deliverable class (a scored recreation attempt) is judged by the five-lens Codex scoring wave + §5.5 consolidation; a jev-verify file would duplicate the wave. jev-prewave is its pre-wave gate. (Printed in INSTRUCTION §5 step 3b.)

## Codex review types
- `codex-scoring-wave.md` — the five-lens scoring wave (motion fidelity · timing/tempo · construction purity · reusability · readability). Demonstrated: 2026-11-13, T15 attempt 1 (four lenses then; readability added 2026-11-14 under the owner's order — the five-lens form demonstrates at the next wave).
- `codex-observe.md` — Observe-phase source-record audit (packet-section completeness · prior-attempt record audit · segment facts). Call point: INSTRUCTION §1 step 1, per item. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.** (2026-11-14.)
- `codex-plan-review.md` — Plan attack priced against this job's recorded failure modes (convergent freeze · owner's two catches · parameterization reality · bar arithmetic · §8 size discipline). Call point: INSTRUCTION §2 gate out, alongside jev-plan-exit. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.** (2026-11-14.)
- `codex-condense.md` — Condense review: amendment faithfulness + four-layer coverage attack. Call point: INSTRUCTION §9, at Condense close. Consumer: the job's next cycle. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.** (2026-11-14.)

## Judge facts
- Judges: Codex scoring wave (floors: average ≥85 AND no lens <70 — the recreation law) · jev-prewave (floors per its §5; fires at its step on every cycle).
- Verdict history: ../verdict-history.md

## Presence (2026-11-14, founding of this layer)
JUDGMENT LAYER: **INCOMPLETE** — mechanical guards hosted + demonstrated (5/5); Codex wave defined in-job and demonstrated (four-lens form; five-lens form pending its first wave); jev-prewave designed, DEFINED — it fires at its step on every cycle.

## Presence update (2026-11-14, phase-guard augmentation)
JUDGMENT LAYER: **INCOMPLETE** — phase-transition layer now hosted: jev-observe-exit + jev-plan-exit (both DEFINED) · codex-observe + codex-plan-review + codex-condense (all DEFINED) · jev-prewave DEFINED · five-lens scoring wave still pending its first demonstration. Every call in this layer fires at its step on every cycle; a cycle in which one did not fire prints INCOMPLETE. Build record: `BUILD-LOG.md` in this directory.

## Ruling update (2026-11-14 ~20:55 EST — owner's judgment-call ruling)
ARMING = FIRING abolishes the arming states printed in this index: this job's calls are DEFINED and fire unconditionally in its next live cycle (raw responses filed in the run record); verdicts are advisory (applied, or set aside with the miss + the call-file amendment recorded in Condense). The founding Presence print stands as the 2026-11-14 founding record; from the next cycle, the presence evaluation prices FIRING (fired / not fired — not fired = INCOMPLETE), not arming.

8. **Census-anchor probes (2026-11-16, recreation Cycle 025 Condense — mechanical layer of the allocation/count consistency landing).** Where a census anchor asserts an empty/zero state at a named instant (e.g. "no territory at 449 s"), the builder's own-checks harness MUST probe the recreation's state function at that instant (mapped segment-relative) and file the raw result in build-record.md; a prescribed schedule that is nonzero at a zero-state anchor is a build-record defect to cure BEFORE the wave, not a finding for the timing lens to discover. Forcing evidence: T160 Wave 22 (prescribed purple front 8.33% grown at the 449 s zero-state anchor; timing lens priced it 68 in `hidden_files/study/recreations/T160-expansion-front-envelopment/codex/lens-timing.md`).


# FED: fit-table.md (A6 leg, verbatim)
# T210 — fit-table (guard-measured-fit leg, A6/A12.2)

Build bound: recreation.html sha256 `254add09d9893154b845977434d620affb04b635146c56f3705ef806085e5df5` (16,597 B; the prewave-HOLD cure round changed no CONFIG value this table measures — label/plate/palette values are identical to the first bound build, so every measurement below stands for this build; the cure's diff is named in build-record §6).
Instrument for every row: **rendered measurement with a named stand-in font** (A12.2 form ii) — PIL (Pillow) rendering with **DejaVuSans-Bold.ttf** (`/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf`), the build's browser font being a generic bold serif/sans stack in this seat. Rows labeled PROXY per the guard. No character-width × factor model is used anywhere: every bound below is a measured textbbox of rendered glyphs.
Subject text inventory: the ONLY subject text element in the build is the threshold label on the post plate. There are no region labels (specimen carries none), no tally readouts (removed in the fit cure below), and no captions (fleet law).

| # | Element | Container | Instrument | Measured ink (rendered) | Container bounds | Margin | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | Threshold label "270" (`plateText`, font-size = CONFIG `labelFontPx` 28) | Post plate rect (CONFIG `plateWPx` 76 × `plateHPx` 40), top layer, opaque `palette.plate` | PIL rendered measurement, DejaVuSans-Bold @ 28 px (stage-native size) — PROXY | ink 58 × 20 px (textbbox of "270" @ 28 px) | 76 × 40 px | W (76−58)/2 = 9.0 px/side · H (40−20)/2 = 10.0 px/side | PASS — ink fits with margin on both axes |
| 2 | Threshold label "270" at the 360 px stage (stage scale 360/640 = 0.5625; effective font 28 × 0.5625 = 15.75 px) | Same plate, scaled: 42.8 × 22.5 px | PIL rendered measurement, DejaVuSans-Bold @ 16 px (nearest integer render to 15.75 px) — PROXY | ink height 12 px @ 16 px render ("270" textbbox h = 12) | plate height at scale 22.5 px | ink height 12 px ≥ ~11 px legibility floor | PASS |
| 3 | Contrast row (amendment C10): plate ink vs plate paper | Plate | Computed from CONFIG hex values by the check harness (relative-luminance formula) | `palette.plateInk` #111111 vs `palette.plate` #ffffff = **18.88 : 1** | — | — | PASS |
| 4 | Contrast row: post vs ground | Field | Same instrument | `palette.post` #1a1a1a vs `palette.ground` #f4f1ea = **15.43 : 1** | — | — | PASS |

## Cure applied on this leg's first pass (before this filing)
First-pass measurement at the record's original `labelFontPx` 20: ink height at the 360 px stage measured 8 px (< ~11 px floor) — a HIT. Cured in CONFIG only: `labelFontPx` 20 → 28, `labelMinPx` 20 → 28 (validation now enforces labelFontPx ≥ labelMinPx), `plateWPx` 64 → 76, `plateHPx` 36 → 40. The same first pass found the renderer's two tally readout texts would measure ~6.8 px ink at the 360 px stage; the readouts were REMOVED instead of enlarged — the specimen shows no numeric readouts on this map (the map is the count), so enlarging them would have cured a fit defect by adding non-specimen content. Rows 1–4 above are measured on the cured, final build.

## HIT list
**0 HITs** on the final build (the first-pass label-floor HIT was cured pre-filing as recorded above; no hit is carried into the wave).


# FED: config-census.md (A6 leg, verbatim)
# T210 — config-census (guard-config-census leg v3.1, A6/A9.6)

Build bound: recreation.html sha256 `254add09d9893154b845977434d620affb04b635146c56f3705ef806085e5df5` (16,597 B; re-scanned after the prewave-HOLD cure round — the cure added one renderer site for `tGridSettleMs`, row updated below; no new literal outside CONFIG was introduced).
Method: all-literal scan of everything outside the CONFIG block (script extraction + regex census, run by the builder's check harness) + CONFIG key→application-site resolution (token census over the logic + render scripts, sites named by the construction they feed) + CSS-variable setter check.

## 1. Literal scan outside CONFIG
- Hex colours outside CONFIG: `#e9e6de`, `#1a1a1a` — both in the page-chrome CSS (`body` background / text colour) OUTSIDE the SVG stage. Classification: **structural (page chrome)** — the stage's own ground is painted by the SVG ground rect from `palette.ground`; no subject colour is set by these literals. Disposition: printed, not a HIT (the subject surface is fully CONFIG-painted; the chrome wraps it).
- Numbers outside CONFIG (unique set): `0 · 0.5 · 1 · 1.0 · 1.3 · 2 · 2.1 · 8 · 9 · 100 · 1000 · 2000 · 270`. Classification per group:
  - `0, 1, 2` — loop bounds, clamp bounds, centering divisors (`/2`), array indices: **structural**.
  - `0.5` and the `2` coefficients inside `EASINGS.easeInOut` — the named easing function's own definition; CONFIG selects the function by name (`easing` key): **structural-by-selection** (changing the curve means naming a different CONFIG value, not editing logic).
  - `1000` — ms→s unit conversion in the clock readout (×2 sites): **structural**.
  - `100` — CSS `width:100%` page layout: **structural**.
  - `270, 2000, 1.3, 2.1, 8, 9` — occurrences inside the document `<title>`, HTML comments, and code comments (e.g. "road to 270", section references): **non-construction text**, not code literals.
- Path-data literals: **none** — region geometry exists only as `regions[].cells` CONFIG data; outline paths/edges are derived by `boundaryEdges()` at runtime. No traced geometry exists to classify.
- Font stacks: the renderer's SVG text carries no font-family literal (inherits the page stack); the page CSS font stack (Georgia/serif) is page chrome, printed here: **structural (page chrome)**, same disposition as the chrome colours.

## 2. Key → application-site resolution (every CONFIG key; nested/array included)
| CONFIG key | Application site (value flows into) |
|---|---|
| `total` | `derive()` postXFraction + `validateConfig()` threshold/sum constraints |
| `threshold` | `derive()` postXFraction + thresholdLabel |
| `stageW` / `stageH` | renderer viewBox + `derive()` fieldW |
| `marginPx` | `derive()` fieldX/fieldY/fieldW |
| `gridCols` / `gridRows` | renderer cell loops · `stateAt()` gridCells/neverClaimed · validation grid bounds |
| `gapRatio` | `derive()` cellPx/gapPx |
| `palette.ground` | renderer ground rect fill |
| `palette.cell` | renderer grid cell rects fill |
| `palette.sideA` / `palette.sideB` | renderer fill rects + outline strokes (side-selected per region) |
| `palette.post` | renderer post rect fill + plate stroke |
| `palette.plate` | renderer plate rect fill (opacity 1.0) |
| `palette.plateInk` | renderer plate text fill |
| `fillOpacity` | renderer fill rects opacity |
| `outlineWidthPx` / `outlineOpacity` | renderer outline line stroke-width / opacity |
| `easing` | `stateAt()` fill interpolation via `EASINGS[cfg.easing]` |
| `postWidthPx` / `postOverhangPx` | renderer post rect geometry |
| `plateWPx` / `plateHPx` | renderer plate rect geometry + plate text position |
| `labelFontPx` | renderer plate text font-size |
| `labelMinPx` | `validateConfig()` floor check (labelFontPx ≥ labelMinPx, rejects loudly) |
| `tGridSettleMs` | `derive()` completeAtMs max() term + `stateAt()` gridProgress, bound in the renderer to the grid group's opacity (the visible SB-A settle) |
| `drawDurMs` / `fillDelayMs` | `fillStartMs()` + draw intervals in `stateAt()` |
| `tPostMs` / `postDurMs` | `stateAt()` postProgress + `derive()` postEnd |
| `holdMs` | `derive()` durationMs = completeAtMs + holdMs |
| `accumulationDirection` | `effStartMs()` stagger mirroring |
| `regions` | all construction (cells/fills/outlines/tallies) |
| `regions[].id` | dispatch identity in renderer views + `stateAt()` region map (never value-dispatched) |
| `regions[].side` | palette selection + credited tally side in `stateAt()` |
| `regions[].weight` | credited tallies in `stateAt()` (credited only at fillEnd) |
| `regions[].cells` | renderer fill rects + grid ownership + `boundaryEdges()` outline derivation |
| `regions[].startMs` | `effStartMs()` draw/fill schedule |
| `regions[].fillEndMs` | `fillDurMs()`/`fillEndMs()` + credit instant in `stateAt()` |

Derived-not-stored (no key, by amendment C6): `fillStartMs · fillDurMs · completeAtMs · durationMs · thresholdLabel · postXFraction · cellPx · gapPx · field geometry` — computed in `derive()`/`fillStartMs()` from the inputs above.
Plan departure printed: the record's `platePadPx` derivation key is NOT carried — plate size is direct CONFIG (`plateWPx`/`plateHPx`) and pad adequacy is discharged by the fit leg's measured margins (fit-table rows 1–2: 9.0/10.0 px at stage size), which is a measurement, not a formula claim.

## 3. CSS-variable setter check
No CSS variables are used (`var(--` occurrences: 0 · `setProperty` occurrences: 0) — no setter can be missing. PASS by absence, printed.

## HIT list
**0 HITs** — every CONFIG key resolves to a value-flowing application site (nested/array keys included); no subject-shaping literal stands outside CONFIG.


# FED: binding census-anchor mapping (plan-amendment-cycle037.md, governing — verbatim)
## Amended census-anchor mapping (governing; supersedes record §2.3 where different)

| Checkpoint | Census instant | Probe instant | Prescribed state |
|---|---|---|---|
| CP1 | 500 | 500 | Zero state: drawn 0 · fill progress 0 · credited 0/0 · post absent (command-8 probe) |
| CP2 | 1000 | 1000 | ≥4 regions drawing (R01–R06 interior) · fill progress 0 · credited 0/0 · post absent |
| CP3 | 1500 | 1600 | First fills: R01, R02 fill progress > 0 · credited 0/0 · draws continuing |
| CP4 | 2000 | 2000 | ≥3 regions/side fill progress ∈ (0,1) · ≥1 region still drawing · credited 0/0 · post absent |
| CP5 | 3000 | 3000 | Post fraction 0.5 · plate present, top layer, opaque (B3 cured by construction — named departure from the specimen's defect, not from its timing) |
| CP6 | 4000 | 4000 | Post complete · credited A 63 > 0, B 58 > 0 · not-yet-filled cells > 0 |
| CP7 | 5000 | 5000 | Pending region cells > 0 (pockets, fill by CP8) · never-claimed = 8 (separate) · credited total 252 < 522 |
| CP8 | 6000 | 6000 | All region fills complete · credited A 258 / B 264 · never-claimed still 8 |
| CP9 | 7000 | 7000 | State identical to CP8 (hold; no dissolve/fade) |

Departures named: (1) CP0 lead-in not recreated (record §2.3, stands). (2) CP5 plate legibility cured vs the specimen's covered label (B3 — a defect, not a mechanic). (3) CP10 lead-out not recreated (stands). No timing departures from the census remain: every onset above is consistent with its census instant.


warning: Codex could not find bubblewrap on PATH. Install bubblewrap with your OS package manager. See the sandbox prerequisites: https://developers.openai.com/codex/concepts/sandboxing#prerequisites. Codex will use the bundled bubblewrap in the meantime.
warning: Loaded only 32768 of 99110 bytes from `/home/hatch/AGENTS.md` in environment `local` under the 32768-byte project instruction budget. Trim your project instructions to fit the budget. If you need to keep them all, increase `project_doc_max_bytes`.
warning: Combined user instructions use 37824 bytes, above the 32768-byte `project_doc_max_bytes` setting. The total includes global and thread instructions. The limit applies only to project files.
codex
**HOLD · T210, Firing 2 · Primary classification ASSERTED-CHECKS**

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.45 |
| Fidelity-plan honesty | 0.95 |

**Named defects**

- **Hold-swap probe stays at the default instant.** `build-record.md` §2 and §5 report that `holdMs` changes from 2000 to 1200 and duration changes from 8000 to 7200 ms. The probe still evaluates `completeAtMs + 1000` at 7000 ms in both runs. The receipt needs a hold-dependent probe with both evaluated instants and the observed state. CP6’s existing expression, `completeAtMs − holdMs`, evaluates to 4000 ms by default and 4800 ms under the swap.
- **The post-swap index contradicts its receipt.** `build-record.md` §5 command 2 records 3000 → 1950 ms. The §2 raw receipt and §5 C12 row both record 3000 → 2100 ms from `tPostMs + postDurMs/2`. The raw receipt demonstrates the required movement. The command index needs to match it.
- **The CP9 receipt omits part of the required state comparison.** The binding census mapping requires CP9 state to equal CP8 state. `build-record.md` §2 prints per-region fill, draw, and credit equality and reports aggregate fill, pending, and post values. §6 also claims grid equality, but §2 supplies neither a raw grid comparison nor a whole-state equality result. The receipt needs one of those results.
- **The palette swap reports the input and cites renderer sites without recording the swapped output.** `build-record.md` §2 `SWAP-PALETTE` prints `palette.sideA=#2e9e6b` and points to the census for stroke and fill usage. The command 2 receipt needs the observed stroke and fill values from the swapped build.

The CONFIG and `config-census.md` §2 support value flow through scheduling, geometry, and rendering. `build-record.md` construction and §2 support parameter-generated geometry and the zero-hit purity check. Its §4 names the implemented mechanics and the lead-in, lead-out, and covered-label departures in the binding mapping. `fit-table.md` rows 1–2 identify rendered glyph measurements and their proxy font.

**Limits** — Paperwork review only. Harness execution and browser playback were not independently verified.

**BODY-WRITE: none (read-only run). Return for filing as T210 Firing 2 in the run record and `build-record.md` §6.**
tokens used
27,805
**HOLD · T210, Firing 2 · Primary classification ASSERTED-CHECKS**

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.45 |
| Fidelity-plan honesty | 0.95 |

**Named defects**

- **Hold-swap probe stays at the default instant.** `build-record.md` §2 and §5 report that `holdMs` changes from 2000 to 1200 and duration changes from 8000 to 7200 ms. The probe still evaluates `completeAtMs + 1000` at 7000 ms in both runs. The receipt needs a hold-dependent probe with both evaluated instants and the observed state. CP6’s existing expression, `completeAtMs − holdMs`, evaluates to 4000 ms by default and 4800 ms under the swap.
- **The post-swap index contradicts its receipt.** `build-record.md` §5 command 2 records 3000 → 1950 ms. The §2 raw receipt and §5 C12 row both record 3000 → 2100 ms from `tPostMs + postDurMs/2`. The raw receipt demonstrates the required movement. The command index needs to match it.
- **The CP9 receipt omits part of the required state comparison.** The binding census mapping requires CP9 state to equal CP8 state. `build-record.md` §2 prints per-region fill, draw, and credit equality and reports aggregate fill, pending, and post values. §6 also claims grid equality, but §2 supplies neither a raw grid comparison nor a whole-state equality result. The receipt needs one of those results.
- **The palette swap reports the input and cites renderer sites without recording the swapped output.** `build-record.md` §2 `SWAP-PALETTE` prints `palette.sideA=#2e9e6b` and points to the census for stroke and fill usage. The command 2 receipt needs the observed stroke and fill values from the swapped build.

The CONFIG and `config-census.md` §2 support value flow through scheduling, geometry, and rendering. `build-record.md` construction and §2 support parameter-generated geometry and the zero-hit purity check. Its §4 names the implemented mechanics and the lead-in, lead-out, and covered-label departures in the binding mapping. `fit-table.md` rows 1–2 identify rendered glyph measurements and their proxy font.

**Limits** — Paperwork review only. Harness execution and browser playback were not independently verified.

**BODY-WRITE: none (read-only run). Return for filing as T210 Firing 2 in the run record and `build-record.md` §6.**
