# Build record — T190 pixel-icon cold open · attempt 1 · Cycle 035 Wave 32 (completion of Cycle 034 Wave 31 Phase A)

Plan authority: `runs/2026-11-18-cycle-034-wave-31/item-T190-observe-plan.md` AS AMENDED by `plan-amendment-cycle035.md` in this directory (jev-plan-exit REVISE + jev-observe-exit charges, filed before any build script, A9.2). Schedule basis: **segment-anchored** (build t=0 = source 0.000 s). Consumer: Hadosh Academy shorts cold-open slot (opening scene module of the one-HTML piece form).

## Segment binding (guards.md command 5)
- Source: `hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/source.mp4` — 10,213,125 B · av1 1920×1080 @ 24 fps · duration 113.734 s (ffprobe, this run).
- Cut: 0.000–14.417 s (core window 0–13.917 s + 0.5 s tail handle; head handle truncated at file start), re-encoded libx264/yuv420p + aac, faststart → `segment.mp4` in this directory.
- segment.mp4 ffprobe (this run): h264 1920×1080 @ 24 fps + aac · duration 14.458333 s (container) · size 1,515,064 B · sha256 `4b2712618068ca20397e910fab5ff414a1500899fb382f6ab97f81b54a0b1ba1`.
- The segment is EVIDENCE: it appears only as the labeled ORIGINAL side of comparison.html.

## Frame-resolution check over 8.5–10.0 s (plan §3 step 2, retained by the amendment — ran BEFORE scalePeakMs was fixed)
Frames extracted from the source at 0.25 s spacing; white-pixel bounding box measured (threshold >100, 2 px sampling grid):
```
t=8.5s size=1920x1080 white_bbox x[196,1724] y[132,958] height=826 topcrop=False samples=87117
t=8.75s size=1920x1080 white_bbox x[196,1724] y[128,958] height=830 topcrop=False samples=86450
t=9.0s size=1920x1080 white_bbox x[196,1724] y[112,958] height=846 topcrop=False samples=82699
t=9.25s size=1920x1080 white_bbox x[196,1724] y[42,958] height=916 topcrop=False samples=83562
t=9.5s size=1920x1080 white_bbox x[196,1724] y[0,1036] height=1036 topcrop=True samples=130033
t=9.75s size=1920x1080 white_bbox x[0,1918] y[0,1078] height=1078 topcrop=True samples=223107
t=10.0s size=1920x1080 white_bbox x[196,1724] y[320,958] height=638 topcrop=False samples=55645
```
Finding (reconciled wording, jev-prewave HOLD finding 3): the rotating form grows through the window and the **first sampled crop is at 9.5 s** (at 9.0 s the top edge is still 112 px inside the frame). 9,500 ms is therefore the chosen build anchor for the crop probe: camera turn-out window [8000, 10000] ms, camera `scalePeakAt` 0.75, `scenes[3].scalePeakMs` (CONFIG-derived: turnOutStartMs + scalePeakAt × (turnOutEndMs − turnOutStartMs)) = **9500 ms**. The source's true peak instant is **UNVERIFIED**: this whole-frame white-pixel statistic does not isolate the icon (it includes the caption and, at 9.75 s, a near-full-frame white mass larger than at 9.5 s), so no source-peak claim is made from it. The census f010 is a 1 fps packet extraction whose "≈9 s" label spans the 9.0–10.0 s sampling cell in which the crop onsets. The 9,000 ms instant is asserted as a rotating form mid-turn (CP5b), its instant derived from the CONFIG turn-out window midpoint (8000+10000)/2.

## Count assertion (A9.3)
Source counts (plan + amendment 4): scenes 5 · readable poses 6 (5 × mapFront + couch mapProfile) · caption entries 6 (5 lines + 1 BLANK).
Built counts (harness, raw output below): scenes=5 poses=6 captions=6, with `poses == 6` inside the executable predicate (jev-prewave HOLD cure 1). MATCH — no halt.

## A11 checkpoint → assertion mapping (executed; every instant CONFIG-derived)
| CP | census anchor | CONFIG expression | evaluated result |
|---|---|---|---|
| CP1 | f003 blank center | `captionOnlyMs − 1` (scaled, −1 ms after rounding) = 1999 | PASS — map null |
| CP2 | f004 globe | `scenes[0].readableMs` = 3000 | PASS — globe HOLD |
| CP3 | f006 ear + L2 | `scenes[1].readableMs` = 5000 | PASS — ear + L2 |
| CP4 | f008 blank caption, mid-turn | BLANK entry midpoint = 7000 | PASS — caption "" + phase TURN |
| CP5 | f010 top crop | `scenes[3].scalePeakMs` = 9500 (re-anchored, above) | PASS — projected bounds top −48.3 < 0, bottom 264.3 < 296 (band intact), scale 1.350 |
| CP5b | f010 rotating form | midpoint of `scenes[3]` turn-out window = 9000 (CONFIG-derived, HOLD cure 1) | PASS — phase TURN, scale 1.303, angle 69.8° |
| CP6 | f012 couch front | `scenes[4].readableMs` = 11000 | PASS — mapFront + L4 |
| CP7 | f014 profile + "?" | `scenes[4].profileReadableMs` = 13000 (field inside the couch scene object, amendment 5) | PASS — mapProfile + L5 |
| CP8 | end / cut | `endMs` = 13917 | PASS — CUT, no scene |
Bounds geometry (HOLD cure 2): `boundsFor` projects the map's four corners through the same perspective + rotateY the renderer applies (perspectivePx from CONFIG), so CP5 and the band sweep price renderer-matching geometry, not an unprojected extent. Band sweep on the 100 ms grid: maxBottom 279.8 < 296, 0 violations (raw output below).

## Own checks — RAW harness output (A9.4, final build)
```
PASS CP1 :: t=1999 (captionOnlyMs-1) phase=CAPTION-ONLY scene=null map=null
PASS CP2 :: t=3000 scene=globe phase=HOLD
PASS CP3 :: t=5000 scene=ear caption="RELY ON CAPTIONS TO WATCH MOVIES AND SHOWS"
PASS CP4 :: t=7000 (blank midpoint, census 7000) phase=TURN scene=camera caption=""
PASS CP5 :: t=9500 (camera scalePeakMs) phase=TURN scale=1.350 bounds top=-48.3 bottom=264.3 bandLimit=296
PASS CP5b-turnout-midpoint :: t=9000 (CONFIG-derived midpoint of camera turn-out window) phase=TURN scale=1.303 angle=69.8
PASS CP6 :: t=11000 scene=couch map=mapFront caption="THAT CAN MAKE THE VIEWING EXPERIENCE FRUSTRATING"
PASS CP7 :: t=13000 scene=couch map=mapProfile caption="FOR DEAF AUDIENCES"
PASS CP8 :: t=13917 (endMs) phase=CUT scene=null
BAND SWEEP samples=139 maxBottom=279.8 bandLimit=296 minTop=-63.8 violations=0
PASS BAND-SWEEP :: projected bounds never enter the caption-safe band on the 100 ms grid
COUNTS source: scenes=5 poses=6 captions=6 | built: scenes=5 poses=6 captions=6
PASS COUNT :: scenes==5 && poses==6 (=6) && captions==6
FIT caption "MORE THAN 430 MILLION PEOPLE..." chars=56 lines=2 lineWidthPx=472.2 availPx=628 fittedFontPx=28
PASS FIT-0 :: line width within stage
FIT caption "RELY ON CAPTIONS TO WATCH MO..." chars=42 lines=2 lineWidthPx=371.0 availPx=628 fittedFontPx=28
PASS FIT-4000 :: line width within stage
FIT caption BLANK :: no ink
FIT caption "HOWEVER, THE CURRENT CAPTION..." chars=63 lines=2 lineWidthPx=522.8 availPx=628 fittedFontPx=28
PASS FIT-8000 :: line width within stage
FIT caption "THAT CAN MAKE THE VIEWING EX..." chars=48 lines=2 lineWidthPx=421.6 availPx=628 fittedFontPx=28
PASS FIT-10000 :: line width within stage
FIT caption "FOR DEAF AUDIENCES..." chars=18 lines=1 lineWidthPx=303.6 availPx=628 fittedFontPx=28
PASS FIT-12000 :: line width within stage
SWAP L3 char count: 71
PASS SWAP-CP1 :: t=1599 (expected 1599) phase=CAPTION-ONLY map=null
PASS SWAP-CP8 :: t=11134 (expected 11134) phase=CUT
PASS SWAP-CP2 :: t=2400 (expected 2400) scene=globe phase=HOLD
PASS SWAP-CP4 :: t=5600 (expected 5600) phase=TURN caption=""
PASS SWAP-9000-scaled-caption :: t=7200 caption="HOWEVER, THE PRESENT CAPTIONIN..."
PASS SWAP-CP3 :: t=4000 (expected 4000) scene=ear caption="RELY ON CAPTIONS TO WATCH MOVIES AND SHOWS"
PASS SWAP-CP5 :: t=7600 (expected 7600) scale=1.350 top=-48.3 bottom=264.3
PASS SWAP-CP5b :: t=7200 (expected 7200) phase=TURN scale=1.303
PASS SWAP-CP6 :: t=8800 (expected 8800) map=mapFront caption="THAT CAN MAKE THE VIEWING EXPERIENCE FRUSTRATING"
PASS SWAP-CP7 :: t=10400 (expected 10400) map=mapProfile caption="FOR DEAF AUDIENCES"
SWAP FIT 71-char: lines=2 lineWidthPx=627.1 availPx=628 fontPx=27.4
PASS SWAP-FIT :: swapped L3 fits stage via layout
PASS SWAP-INK :: palette swap applied in CONFIG
HARNESS RESULT: ALL PASS
```

## Measured glyph evidence — RAW PIL output (guard-measured-fit; DejaVu Sans Mono as the Courier-class stand-in, fleet precedent T57)
```
MEASURE font=/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf fontPx=28 advancePx=16.8594 factor=0.6021 CONFIGfactor=0.6023
MEASURE caption fromMs=0 line="MORE THAN 430 MILLION PEOPLE" inkWidthPx=470 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=158
MEASURE caption fromMs=0 line="WITH DISABLING HEARING LOSS" inkWidthPx=453 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=175
MEASURE caption fromMs=4000 line="RELY ON CAPTIONS TO" inkWidthPx=318 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=310
MEASURE caption fromMs=4000 line="WATCH MOVIES AND SHOWS" inkWidthPx=369 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=259
MEASURE caption BLANK :: no ink
MEASURE caption fromMs=8000 line="HOWEVER, THE CURRENT CAPTIONING" inkWidthPx=521 inkHeightPx=24 inkHeightAt360=13.50 availPx=628 marginPx=107
MEASURE caption fromMs=8000 line="SYSTEM HAS SEVERAL SHORTCOMINGS" inkWidthPx=520 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=108
MEASURE caption fromMs=10000 line="THAT CAN MAKE THE VIEWING" inkWidthPx=421 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=207
MEASURE caption fromMs=10000 line="EXPERIENCE FRUSTRATING" inkWidthPx=368 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=260
MEASURE caption fromMs=12000 line="FOR DEAF AUDIENCES" inkWidthPx=299 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=329
MEASURE swapL3 fit-shrink fontPx 28 -> 27.4 (build captionLayout rule)
MEASURE swapL3 line="HOWEVER, THE PRESENT CAPTIONING SYSTEM" inkWidthPx=625 inkHeightPx=24 inkHeightAt360=13.50 availPx=628 marginPx=3
MEASURE swapL3 line="HAS SEVERAL SERIOUS SHORTCOMINGS" inkWidthPx=525 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=103
BAND two-line stack heightPx=61.6 bandPx=64 fits=True
```

## Swap test (§5 leg 1) — exact altered values
- `captions[3].text` → "HOWEVER, THE PRESENT CAPTIONING SYSTEM HAS SEVERAL SERIOUS SHORTCOMINGS" (71 chars, harder than the 63-char specimen longest).
- `beatScale` → 0.8 (rule, amendment 6: every instant × 0.8, Math.round, boundary −1 ms after scaling). Paired instant+state receipts for ALL checkpoints at both tempos stand in the raw output above (CP1 1999→1599 · CP2 3000→2400 · CP3 5000→4000 · CP4 7000→5600 · CP5 9500→7600 · CP5b 9000→7200 · CP6 11000→8800 · CP7 13000→10400 · CP8 13917→11134).
- `ink` → "#ffd23f".
Result: technique still reads correctly under swap; the swapped L3 fits via the layout's fit-shrink (fitted fontPx 27.4, longest line 627.1 px ≤ 628 px; PIL-measured ink 625 px, margin 3 px).

## Construction purity (§5 leg 2) — RAW grep output (A9.4, final build)
Task pattern on recreation.html (`segment.mp4|source.mp4|<video|<img|xmo3_URTIlg|106334`):
```
grep exit=1
```
Plan pattern set (`source\.mp4|segment\.mp4|<video|<img|\.jpg|f0[0-9][0-9]|url\(|http`):
```
grep exit=1
```
0 hits on both. No `url(#id)` in-file references exist in this build (nothing to classify). Asset inventory: recreation.html loads ZERO external assets — no video, no images, no fonts, no scripts; every pixel map is a code-authored row-string array inside CONFIG; the only files the artifact loads are itself (and, in comparison.html only, segment.mp4 as the labeled ORIGINAL + recreation.html in an iframe).

## Syntax check — RAW output (A9.4, final build)
```
extracted logic 10890
extracted render 2994
logic syntax OK
render syntax OK
comparison script 1147
comparison syntax OK
```
(`node --check` on each extracted inline script.)

## Comparison check (§5 leg 3)
comparison.html: original (segment.mp4, 14.458 s container / 13.917 s core + tail handle) and the live recreation (iframe) at matched 640×360; ONE control set (Play both / Restart both) drives the video and slaves the recreation clock to the video's `currentTime` via `__T190.setExternalTime` — the handle region beyond 13.917 s shows the recreation's CUT state and is labeled on the page. Labels verbatim: "ORIGINAL — Caption with Intention @ 0:00–0:14" / "RECREATION — T190 pixel-icon cold open, parameterized". Phone width: `@media (max-width: 760px)` stacks the figures vertically, controls stay above both at 96 vw with large tap targets. Verified by construction + script syntax; pixel-level render proof is NOT exercisable from this seat (guards.md command 2) — the comparison page is the render surface.

## jev-prewave — first firing HOLD (ASSERTED-CHECKS) and its cures (all applied, re-fire follows)
First firing filed at `codex/jev-prewave-interim1.md` (dimensions: parameterization 0.90 · purity 1.00 · own-checks 0.25 · fidelity-plan 0.90). Cures:
1. **A11 evidence completed** — CP5b's instant is now CONFIG-derived (turn-out window midpoint); paired instant+state swap receipts filed for CP3/CP5/CP5b/CP6/CP7 (raw output above); `poses == 6` added to the executable count predicate.
2. **Fit rows measured, not formula-claimed** — caption metrics now come from PIL glyph measurement (DejaVu Sans Mono stand-in; raw output above). This forced three build changes, recorded as deviations from the Cycle-034 parameter table with their reasons: `captionFontPx` 15→**28** and `captionCharWidthFactor` set to the measured **0.6023** (the plan's 15 px at the priced 0.55 factor could not meet the measured-fit floor: real caps ink at 360 px stage must reach ~11 px); `captionLayout` gained a fit-shrink step (a caption whose best two-line split still exceeds avail drops its fontPx until it fits — the 71-char swap case: 28→27.4); camera `scalePeak` 1.6→**1.35**, because under renderer-matching projected bounds the 1.6 peak drove the projected bottom to ≈302 px, inside the caption-safe band (at 1.35: bottom 264.3 at the peak, sweep max 279.8 — band intact; the projected near-edge magnification still makes the excursion read oversized, top −48.3). `boundsFor` now projects corners through perspective+rotateY (renderer-matching geometry) for CP5 and the band sweep.
3. **Re-anchor record reconciled** — amendment §3 and the frame-resolution section above now state one position: 9,500 ms = first sampled crop + chosen build anchor; source peak UNVERIFIED (statistic does not isolate the icon).

## Technique fidelity (implemented vs deferred)
Implemented: caption-only opening · five scenes / six poses with continuous signed rotateY turns (shared pivot + perspective, cubic-bezier(0.4,0,0.2,1) solver) · single map swap at the couch internal turn's edge-on midpoint · per-scene scale curves incl. the camera turn-out excursion cropping the top edge at its 9500 ms peak · single-slot caption schedule (5 lines + BLANK interval) with measured two-line layout + fit-shrink · caption-safe band as the caption layer's box, with projected icon bounds asserted clear of it across the whole timeline (100 ms sweep) · CUT end state at 13917 ms.
Deferred (named): per-pixel 3D redraw of intermediate turn poses — the rotateY-of-flat-maps approximation is the plan's priced construction, forecast as the motion lens's minimum risk; the specimen's exact pixel maps are approximated by code-authored maps of the same forms (not traced — purity leg above).

## jev-prewave — SECOND firing HOLD (ASSERTED-CHECKS) + post-HOLD cure (wave NOT fired)
Second firing filed verbatim at `jev-prewave.md` in this directory (raw: `codex/jev-prewave-return.md`; dimensions: parameterization 0.85 · purity 1.00 · own-checks 0.45 · fidelity-plan 0.90). Its finding 2 confirms the first HOLD's cures (checkpoint mapping, count predicate, re-anchor reconciliation all supported; its own replay reproduced CP5/CP5b at both tempos and the band sweep). Its finding 1 is a REAL defect in the cured build: (a) the renderer never applied `captionLayout`'s fitted fontPx (an earlier patch to the render script had silently failed to land — the init line set 28 px and the per-frame render used only `lay.lines`), so the 71-char swap caption would have rendered at 28 px with a measured 641 px line against the 628 px avail; (b) the caption band's border-box sizing left only 64 − 18 = 46 px usable for a 61.6 px two-line stack.
Disposition per the wave form: a second HOLD stops this item — **the five-lens wave was NOT fired and no scores exist**. The named defect was then cured in the build anyway (fix-the-fixables; the cure does not change the filed HOLD, and prewave was NOT re-fired a third time):
- Render now applies `capEl.style.fontSize = lay.fontPx + "px"` per frame (verified in the filed build, line 378).
- Caption band box-sizing changed to content-box: usable band = `captionSafeBandPx` 64 px (two-line stack 61.6 px fits, margin 2.4 px); total box = 64 + `captionBottomPx` 18 = 82 px; rendered caption text top = 360 − 18 − 61.6 = 280.4 px vs icon projected-bounds sweep maxBottom 279.8 px — clearance 0.6 px, band claim now honest in renderer geometry.
- Own checks re-run on the cured build: harness ALL PASS (identical receipts to the block above — stateAt/captionLayout unchanged) · purity grep exit 1 (0 hits) · `node --check` logic OK / render OK.
NEXT ACT (seat/next cycle): re-fire jev-prewave ONCE on the cured build (sha below); on FIRE-WAVE, fire the five-lens wave bound to that same sha. The two filed HOLDs bind the pre-cure builds, not this one.

## Final build binding
recreation.html (post-HOLD cured build) — 14,989 B · sha256 `1996454c4c69593c85b4de1aea4770c27981b0f9e690963d3b12bfe81ea78a23`. (The build the two prewave firings judged: 14,942 B · sha256 `c77e922bedcf4e0e6ee8f533e09fed76c792c26805adbef82ffc16951ee7e4bb`.) A6 legs: `fit-table.md` + `config-census.md` in this directory (both filed pre-wave, Amendment A6/A10.1; fit-table's stack accounting corrected for the content-box band in the cure).
Registration limits carried from the packet: bound film is a trade-press re-upload — version fidelity UNVERIFIED · cut count UNVERIFIED (printed on scores.md).

## COMPLETION — Cycle 036 Wave 33 (Amendment A12.3): fresh A12 EXECUTABLE RECEIPTS on the cured build

Build under review (verified firsthand at this completion's start, before any check ran): recreation.html — 14,989 B · sha256 `1996454c4c69593c85b4de1aea4770c27981b0f9e690963d3b12bfe81ea78a23` — MATCHES the filed post-HOLD cured hash. No code cure was priced or applied in this completion; the build is byte-identical to the one the Wave-32 close filed.

Receipt form per Amendment A12.1: for every A11 assertion — harness command/run · CONFIG expression evaluated · raw result. All runs below executed 2026-11-18 (Cycle 036) against THIS build's bytes.

### Receipt R0 — harness construction
- Command: node harness extracting the `logic` + `render` inline scripts from recreation.html verbatim (regex extraction, no edits), evaluating the logic script, and probing `stateAt` / `captionLayout` / `sceneScalePeakMs` / `boundsFor`. Extraction receipt: `EXTRACT logicBytes=10890 renderBytes=3041` (render grew 2994→3041 across the post-HOLD cure — the fitted-fontPx application line; logic unchanged).
- CONFIG band limit expression evaluated in-harness: `stageHPx(360) − captionSafeBandPx(64) = 296`.

### Receipts R1 — A11 assertions CP1–CP8 + CP5b + band sweep (base tempo, beatScale 1)
```
PASS CP1 :: expr=sc(captionOnlyMs)-1 t=1999 phase=CAPTION-ONLY map=null
PASS CP2 :: expr=sc(scenes[0].readableMs) t=3000 scene=globe phase=HOLD
PASS CP3 :: expr=sc(scenes[1].readableMs) t=5000 scene=ear caption="RELY ON CAPTIONS TO WATCH MOVIES AND SHOWS"
PASS CP4 :: expr=sc((captions[2].fromMs+captions[2].toMs)/2) t=7000 phase=TURN scene=camera caption=""
PASS CP5 :: expr=sceneScalePeakMs(scenes[3])=turnOutStartMs+scalePeakAt*(turnOutEndMs-turnOutStartMs) scaled t=9500 scale=1.350 top=-48.3 bottom=264.3 bandLimit=296
PASS CP5b :: expr=sc((scenes[3].turnOutStartMs+scenes[3].turnOutEndMs)/2) t=9000 phase=TURN scale=1.303 angle=69.8
PASS CP6 :: expr=sc(scenes[4].readableMs) t=11000 scene=couch map=mapFront caption="THAT CAN MAKE THE VIEWING EXPERIENCE FRUSTRATING"
PASS CP7 :: expr=sc(scenes[4].profileReadableMs) t=13000 map=mapProfile caption="FOR DEAF AUDIENCES"
PASS CP8 :: expr=sc(endMs) t=13917 phase=CUT scene=null
PASS BAND-SWEEP :: grid=100ms samples=140 maxBottom=279.8 bandLimit=296 minTop=-63.8 violations=0
PASS COUNT :: scenes=5 poses=6 (predicate poses==6) captions=6
```
Per-assertion CONFIG expressions: CP1 `sc(captionOnlyMs)−1` · CP2 `sc(scenes[0].readableMs)` · CP3 `sc(scenes[1].readableMs)` · CP4 `sc((captions[2].fromMs+captions[2].toMs)/2)` (BLANK entry midpoint) · CP5 `sceneScalePeakMs(scenes[3])` = `sc(turnOutStartMs + scalePeakAt×(turnOutEndMs−turnOutStartMs))` = sc(8000+0.75×2000) · CP5b `sc((scenes[3].turnOutStartMs+scenes[3].turnOutEndMs)/2)` = sc(9000) · CP6 `sc(scenes[4].readableMs)` · CP7 `sc(scenes[4].profileReadableMs)` · CP8 `sc(endMs)` · band sweep: `stateAt(t).bounds.bottom < stageHPx−captionSafeBandPx` for t on the 100 ms grid over [0, sc(endMs)) — 140 samples, 0 violations. (Sample count 140 here vs 139 in the Wave-32 filing: this run's grid is [0, 13917) step 100 inclusive of t=0; the filed 139-sample grid differed by its endpoint convention. maxBottom/minTop/violations identical.)

### Receipts R2 — renderer-cure assertions (the second HOLD's finding 1, re-proved on this build)
```
PASS RENDER-FONTPX :: render script contains 'capEl.style.fontSize = lay.fontPx + "px"' per frame: true
PASS BAND-STACK :: boxSizing content-box=true stack=2*captionFontPx(28)*captionLineHeightFactor(1.1)=61.6 usable=captionSafeBandPx=64 margin=2.4
PASS BAND-CLEARANCE :: textTop=stageHPx(360)-captionBottomPx(18)-stack(61.6)=280.4 vs sweep maxBottom=279.8 clearance=0.6
```

### Receipts R3 — fit assertions (harness post-layout, base tempo)
```
FIT caption fromMs=0 chars=56 lines=2 lineWidthPx=472.2 availPx=628 fittedFontPx=28 — PASS FIT-0
FIT caption fromMs=4000 chars=42 lines=2 lineWidthPx=371.0 availPx=628 fittedFontPx=28 — PASS FIT-4000
FIT caption BLANK :: no ink
FIT caption fromMs=8000 chars=63 lines=2 lineWidthPx=522.8 availPx=628 fittedFontPx=28 — PASS FIT-8000
FIT caption fromMs=10000 chars=48 lines=2 lineWidthPx=421.6 availPx=628 fittedFontPx=28 — PASS FIT-10000
FIT caption fromMs=12000 chars=18 lines=1 lineWidthPx=303.6 availPx=628 fittedFontPx=28 — PASS FIT-12000
```
Avail expression: `stageWPx − 2×captionPadPx` = 640 − 12 = 628 px.

### Receipts R4 — swap test (CONFIG timing swap moves every assertion instant; A11/A12 paired receipts)
Altered values: `beatScale` 1→0.8 · `captions[3].text` → "HOWEVER, THE PRESENT CAPTIONING SYSTEM HAS SEVERAL SERIOUS SHORTCOMINGS" (71 chars) · `ink` → "#ffd23f". Every instant below is the CONFIG expression of R1 re-evaluated under the swapped CONFIG — the swap moved each evaluation instant exactly as the expression predicts (×0.8, Math.round, −1 ms boundary rule on CP1):
```
SWAP L3 char count: 71
PASS SWAP-CP1 :: t=1599 (expected 1599) phase=CAPTION-ONLY map=null
PASS SWAP-CP2 :: t=2400 (expected 2400) scene=globe phase=HOLD
PASS SWAP-CP3 :: t=4000 (expected 4000) scene=ear caption="RELY ON CAPTIONS TO WATCH MOVIES AND SHOWS"
PASS SWAP-CP4 :: t=5600 (expected 5600) phase=TURN caption=""
PASS SWAP-CP5 :: t=7600 (expected 7600) scale=1.350 top=-48.3 bottom=264.3
PASS SWAP-CP5b :: t=7200 (expected 7200) phase=TURN scale=1.303
PASS SWAP-CP6 :: t=8800 (expected 8800) map=mapFront caption="THAT CAN MAKE THE VIEWING EXPERIENCE FRUSTRATING"
PASS SWAP-CP7 :: t=10400 (expected 10400) map=mapProfile caption="FOR DEAF AUDIENCES"
PASS SWAP-CP8 :: t=11134 (expected 11134) phase=CUT
SWAP FIT 71-char: lines=2 lineWidthPx=627.1 availPx=628 fontPx=27.4
PASS SWAP-FIT :: fitted fontPx=27.4 lineWidthPx=627.1
PASS SWAP-INK :: palette swap applied in CONFIG ink=#ffd23f
HARNESS RESULT: ALL PASS
```

### Receipts R5 — construction purity (guards.md command 1, run on this build)
- Task pattern `segment.mp4|source.mp4|<video|<img|xmo3_URTIlg|106334` on recreation.html: `grep exit=1` — 0 hits.
- Plan pattern set `source\.mp4|segment\.mp4|<video|<img|\.jpg|f0[0-9][0-9]|url\(|http`: `grep exit=1` — 0 hits.
- No `url(#id)` in-file references exist in this build (nothing to classify under the 2026-11-17 pattern-precision note).

### Receipts R6 — syntax (guards.md command 3, `node --check` on extracted scripts, this build)
```
extracted logic 10890
extracted render 3041
logic syntax OK
render syntax OK
```

### Receipts R7 — A6 leg 1 measured fit, FRESH PIL run on this build's CONFIG (A12.2(ii) rendered measurement, named stand-in font)
Instrument: PIL glyph rendering, DejaVu Sans Mono (`/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf`) as the Courier-class monospace stand-in (fleet precedent T57; rows are PROXY/PIXEL-UNVERIFIED — no browser route from this seat). Swap rows rendered at 10× and divided for the exact fractional fitted size 27.4 px. Raw output:
```
MEASURE font=/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf fontPx=28 advancePx=16.8594 factor=0.6021 CONFIGfactor=0.6023
MEASURE caption fromMs=0 line="MORE THAN 430 MILLION PEOPLE" inkWidthPx=470 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=158
MEASURE caption fromMs=0 line="WITH DISABLING HEARING LOSS" inkWidthPx=453 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=175
MEASURE caption fromMs=4000 line="RELY ON CAPTIONS TO" inkWidthPx=318 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=310
MEASURE caption fromMs=4000 line="WATCH MOVIES AND SHOWS" inkWidthPx=369 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=259
MEASURE caption fromMs=8000 line="HOWEVER, THE CURRENT CAPTIONING" inkWidthPx=521 inkHeightPx=24 inkHeightAt360=13.50 availPx=628 marginPx=107
MEASURE caption fromMs=8000 line="SYSTEM HAS SEVERAL SHORTCOMINGS" inkWidthPx=520 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=108
MEASURE caption fromMs=10000 line="THAT CAN MAKE THE VIEWING" inkWidthPx=421 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=207
MEASURE caption fromMs=10000 line="EXPERIENCE FRUSTRATING" inkWidthPx=368 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=260
MEASURE caption fromMs=12000 line="FOR DEAF AUDIENCES" inkWidthPx=299 inkHeightPx=20 inkHeightAt360=11.25 availPx=628 marginPx=329
MEASURE caption BLANK :: no ink
MEASURE swapL3 fit-shrink fontPx 27.4 line="HOWEVER, THE PRESENT CAPTIONING SYSTEM" inkWidthPx=624 inkHeightPx=24 inkHeightAt360=13.56 availPx=628 marginPx=4
MEASURE swapL3 fit-shrink fontPx 27.4 line="HAS SEVERAL SERIOUS SHORTCOMINGS" inkWidthPx=524 inkHeightPx=21 inkHeightAt360=11.64 availPx=628 marginPx=104
BAND two-line stack heightPx=61.6 bandPx=64 fits=True
```
The fresh run reproduces every fit-table.md row (swap line 1: 624 px fresh vs 625 px filed — a 1 px rendering-convention difference at the fractional size; margin 4 px vs 3 px; both PASS with the legibility floor met: every line's ink height at the 360 px stage is 11.25–13.56 px ≥ ~11 px floor). fit-table.md is therefore CONFIRMED against this build's hash without amendment to its rows; a confirmation line binding it to sha256 `1996454c…` is appended to fit-table.md in this completion.

### Receipts R8 — A6 leg 2 config census, re-confirmation on this build
config-census.md already binds the cured build (its header cites sha256 `1996454c4c69593c85b4de1aea4770c27981b0f9e690963d3b12bfe81ea78a23` and records that the cure changed no key and no application site). Re-verified in this completion: the CONFIG key set extracted from this build matches the census §2 table key-for-key (beatScale · captionOnlyMs · endMs · turnDeg/turnDir · turnBezier · pivot · perspectivePx · scalePeak/scalePeakAt · bg · ink · pixelUnitPx · stageWPx/stageHPx · iconCenterYPx · captionFontPx · captionBottomPx · captionSafeBandPx · captionPadPx · captionCharWidthFactor · captionLineHeightFactor · fontStack · captions[] · scenes[] incl. scenes[4].profileTurnStartMs/profileReadableMs); HIT list stands EMPTY. A confirmation line is appended to config-census.md in this completion.

### Completion disposition
All own checks PASS on the cured build with executable receipts filed above. The single Amendment A12.3 jev-prewave re-fire on this build follows in this completion; its return files verbatim at `jev-prewave-completion.md` (raw: `codex/jev-prewave-completion-return.raw`) and its verdict + dimensions are recorded in scores.md. The two prior HOLD returns (`codex/jev-prewave-interim1.md`, `jev-prewave.md` + `codex/jev-prewave-return.md`) are untouched and bind the pre-cure builds only.

## COMPLETION RESULT — jev-prewave A12.3 re-fire: HOLD (ASSERTED-CHECKS) · wave NOT fired

The single authorized re-fire fired once on the cured build (payload `codex/payload-prewave-completion.txt`, 88,646 chars, size+tail verified pre-firing; one stream, `cat | codex exec - -s read-only`, local binary; return 94,995 B, size+tail verified). Return filed verbatim: `jev-prewave-completion.md` (raw `codex/jev-prewave-completion-return.raw`, sha256 `abdc9a67bd6fda4e67f8de6fe730d6524deefa0248e921139fe94d24f27e94e3`). Verdict: **HOLD · ASSERTED-CHECKS** — parameterization 0.90 · purity 1.00 · own-checks 0.45 · fidelity-plan 0.95. The five-lens wave was NOT fired (HOLD branch of the completion charge). The return's findings 3–4 CONFIRM the completion receipts (R0/R1/R4 checkpoint receipts at both tempos, R2 renderer-cure arithmetic, R7 measured fit rows, R5 purity, fidelity deferrals named, 9500 ms anchor agreement). Its findings 1–2 are both REAL, verified firsthand by the completion builder after the firing:

1. **Seeded-RNG census missing (finding 1 — TRUE).** guards.md command 3 is "Syntax + determinism check — `node --check` on inline scripts; seeded-RNG presence census." Receipt R6 filed syntax only; no RNG census result stood anywhere in the record. Cure receipt, run on the cured build in this completion (post-HOLD; it cures the record for the next firing, it does not change this HOLD): `grep -nE 'Math\.random|[Ss]eed|RNG|random' recreation.html` → **grep exit=1, zero hits** — the build contains no RNG at all; `stateAt` is a pure function of (t, CONFIG), so determinism holds by construction and the census result is an explicit zero-hit.
2. **`scenes[].id` missing from the census (finding 2 — TRUE, and R8's claim is corrected).** All five scene objects carry `id` (recreation.html lines 88/115/140/163/188: globe · ear · cc · camera · couch); config-census §2 carried no `scenes[].id` row, and Receipt R8's "key-for-key match" claim was therefore overstated — it is corrected here: the match held for every key R8 enumerated, and the enumeration itself missed `scenes[].id`. The key IS applied: `stateAt` returns it as `sceneId` in every branch, and the CP2–CP8 receipts price scene identity from it. Cure applied in this completion: the `scenes[].id` application-site row is added to config-census.md §2 with its post-HOLD provenance printed on the row. Not a HIT (the key is applied); the defect was census incompleteness, now cured on the face of the leg file.

Disposition: HOLD applied (advisory verdict, applied per the completion charge's own branch rule). Item stays IN PROGRESS, NO VERDICT. Next act (named consumer: the seat / next recreation cycle): the two cure receipts above stand filed; a further prewave firing on this build is NOT authorized by A12.3's single re-fire — the seat prices at its next cycle whether the cured record earns a new firing under a new authorization, or the item's paperwork standard (R6-form receipts must include the command-3 determinism leg; census enumerations must be extracted mechanically, not listed from memory) is amended first. The build itself is unchanged and unindicted: both findings are record defects, and the return's findings 3–4 confirm the build's checkpoint, fit, purity, and fidelity evidence.
