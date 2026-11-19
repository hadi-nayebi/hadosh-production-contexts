# build-record — T204 dot-grid identity system + withheld title · Cycle 037 · Wave 34

Item: T204 · queue #95 · Packet #12 (Vox, "The Electoral College, explained", ajavsMbCapY) · Plan authority: `item-T204-observe-plan.md` §§2.1–2.11 AS AMENDED by `plan-amendment-cycle037.md` (filed in this directory BEFORE any build script). Schedule basis: **segment-anchored** (segment = source 30.8–37.0 s; build clock = segment-relative ms).

## MOTION-VIEWING RECEIPT (observe-exit cure — filed FIRST, before the build)

Cures jev-observe-exit RETURN-TO-OBSERVE / MECHANICS-UNSEEN (the record carried frame inspection but no continuous-motion viewing record).

- **What was viewed, firsthand by the builder:** the archived clip `clips/t03-grid-build.mp4` (source 28–36 s, ffprobe h264 1920×1080, 7.965 s) played through as a dense frame sequence — 32 frames extracted at 4 fps and inspected in sequence — plus two direct source.webm frames (32.0 s mid-growth · 36.5 s handoff), each checked against the wave run's census frames in `runs/2026-11-18-cycle-037-wave-34/census/`.
- **Growth/fade:** the field enters at the top-left as a 2×2 group with the top-left cell already black and the other three gray (sequence frame at clip ≈3.3 s = census c3.3s) — confirming the pre-roll fade ages the amendment prices (A1). The rectangle expands rightward + downward continuously; the newest right column and bottom row ride gray while the interior is black (clip ≈4.3 s frame = census c5.5s form; source 32.0 s frame: 17×8 body, right column gray = census c4.0s). The partial last row fades in below the completed body, offset right, still gray while the body is black (clip ≈5.5 s frame).
- **Band entry:** the color-block band (teal head · red main) is present at full width across the field's middle while its text is still partial — band precedes text, as censused.
- **Title reveal:** left-to-right at letter pace inside the band — a mid-reveal frame shows "Electo" (clip ≈6.3 s), then "Electoral College" complete and static (clip ≈6.8 s = census c6.8s).
- **Handoff:** source 36.5 s frame viewed directly: title still up, dark state-outline strokes drawing over the field's top rows — the T210 onset, exactly census frame src36.5s; T204's window closes there (departure D2 stands).
- **Verdict of the viewing:** the census states and the amendment's schedule agree with the motion at every checked beat; no mechanic was found that the census had not already priced.

## Segment binding (guards.md command 5)

Cut at Execute: source.webm 30.8–37.0 s → `segment.mp4`, re-encoded libx264/yuv420p for browser playback. ffprobe on the filed segment: `codec_name=h264 · width=1920 · height=1080 · duration=6.171930 · size=687231`. Duration 6.172 s vs the prescribed 6.2 s window: the 28 ms delta is the source's frame boundary at the out-point; the build clock (`buildMs` 6200) is slaved to the video's currentTime in comparison, so sync is by the shared clock, not by nominal duration. Window carries the broadcast-insert tail (context, departure D1) + the outline onset at its tail (D2).

## Construction (as built)

One self-contained `recreation.html` (16,922 B · sha256 `8e1551ad7c5e9035378f36abdb77c2205dafdcc072fd150d54849928aadf681d`): CONFIG object first (51 top-level keys, every §2.1/§2.11/amendment value), then one pure `stateAt(cfg, t)` — continuous fronts from the exact-fraction keyframe table, three separately probed quantities per cell (VISIBLE = front entered · FULL = front covered · BLACKENED = opacity ≥ 0.98 under the floor+fade rule), band gated by the completion predicate (`bandStartEff = max(bandInStartMs, assemblyDone)`), title reveal by the CONFIG char-fraction table under the shared footprint mask (`clipApplied` = min(reveal clip, band footprint)) — and a DOM renderer (538 cell divs + band blocks + canvas-fitted title span) driven by the same state function. Ground texture is procedural (seeded mulberry32 speckles from CONFIG); zero external assets. No captions/subtitles; the title text is the technique's subject.

## Own checks — FIRST DRAFT raw output (A9.4: filed from the first draft, not summarized)

Harness: node, script extracted from recreation.html (`node /tmp/t204-harness.js recreation.html`). First-draft failures, verbatim lines:

```
CP2 | t=700 | visible 9..21:false visible=24 | colFront=5.005 rowFront=3.002
CP3a | t=1699 | visible==300:false | visible=338
CP4 | t=2701 | visible==512:false grayCount=17 grayOnlyLastCol:false | visible=513
CP3 (run 2) | t=1199.3000000000002 | visible 116..156:false | visible=162 full=136
CP2 (run 2) | full=12 (front epsilon below the keyframe knot)
```

Diagnosis (builder's, priced before any gate was spent): all five were instant/front epsilon defects, not schedule defects — (a) the harness rounded CONFIG-expression instants to whole ms, pushing evaluations an epsilon past their keyframe knots so the entered-front definition admitted the next cell ring; (b) the build's own fronts landed 1e-9 off their knots in floating point. Cures: harness evaluates at the exact CONFIG expressions (699.8 · 1199.3 · 1698.8 · 2700.5 · swap 655.4/2211.5); `frontsAt` quantizes fronts to 1/1000 cell. Two further first-draft leg findings, cured in the same round: fit leg — title overflow at `titleSizeFrac` 0.125 (stand-in ink 218.5 px > band 203.4 px) → size amended to 0.107 on census ink evidence + CONFIG fit rule (see fit-table.md); config census — 5 unapplied keys + speckle/title-offset literals in code → wired/moved into CONFIG (see config-census.md). The build was cured and ALL checks re-run; the final raw output follows.

## Own checks — FINAL raw output (cured build, sha256 8e1551ad…)

```
CONFIG_KEYS titleText,cols,rows,lastRowCells,lastRowOffsetCols,stageW,stageH,fieldLeftFrac,fieldTopFrac,fieldWidthFrac,fieldHeightFrac,cellFillFrac,cellColor,groundColor,groundTextureOpacity,groundTextureScale,groundTextureContrast,groundSpeckleCount,groundSpeckleSizeMin,groundSpeckleSizeVar,groundSpeckleAlphaMin,groundSpeckleGain,assembleStartMs,assembleMs,growthKeyframes,cellFadeMs,cellFadeFloor,fadeSettleMs,bandBlocks,bandLeftFrac,bandTopFrac,bandWidthFrac,bandHeightFrac,bandInMs,bandInStartMs,titleColor,titleFontFamily,titleSizeFrac,titleFitInnerFrac,titleLeftFrac,titleTopFrac,revealStartMs,revealMs,revealKeyframes,glyphWidthEm,holdEndMs,buildMs,seed,originCorner,growthAxes,revealDirection
A9.3 source=538 built=538 (32*16+26=538) match=true
CP1 | expr=assembleStartMs-50 | t=450 | visible==0:true | visible=0 full=0 black=0 gray=0 colFront=0.000 rowFront=0.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP2a | expr=assembleStartMs+0.037*assembleMs | t=599.9 | visible==12:true full==6:true black>=1:true | visible=12 full=6 black=4 gray=8 colFront=3.500 rowFront=2.500 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP2 | expr=assembleStartMs+0.074*assembleMs | t=699.8 | visible 9..21:true visible=15 | visible=15 full=15 black=8 gray=7 colFront=5.000 rowFront=3.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP3 | expr=assembleStartMs+0.259*assembleMs | t=1199.3000000000002 | visible 116..156:true | visible=136 full=136 black=105 gray=31 colFront=17.000 rowFront=8.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP3a | expr=assembleStartMs+0.444*assembleMs | t=1698.8 | visible==300:true | visible=300 full=300 black=264 gray=36 colFront=25.000 rowFront=12.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP4 | expr=assembleStartMs+0.815*assembleMs | t=2700.5 | visible==512:true blackFrac=0.9688 >=0.95:true grayCount=16 grayOnlyLastCol:true | visible=512 full=512 black=496 gray=16 colFront=32.000 rowFront=16.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP5 | expr=assembleStartMs+assembleMs | t=3200 | visible==538:true bandVisible==false:true grayCount=4 grayOnlyPartialRow:true | visible=538 full=538 black=534 gray=4 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP5b | expr=assembleStartMs+assembleMs+fadeSettleMs | t=3550 | black==538:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=0.500 bandStartEff=3450 clipApplied=0.1214 prefix="El" clipFrac=0.1214
CP6 | expr=revealStartMs-100 | t=3400 | prefix=="":"true" bandNotFull:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP7 | expr=revealStartMs+0.40*revealMs | t=3700 | prefix==Electoral:true clipFracIn[0.40,0.55]:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=1.000 bandStartEff=3450 clipApplied=0.5251 prefix="Electoral" clipFrac=0.5251
CP7b | expr=revealStartMs+0.60*revealMs | t=3800 | prefix==Electoral Col:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=1.000 bandStartEff=3450 clipApplied=0.7599 prefix="Electoral Col" clipFrac=0.7599
CP7c | expr=revealStartMs+0.80*revealMs | t=3900 | prefix==Electoral Colleg:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=1.000 bandStartEff=3450 clipApplied=0.9314 prefix="Electoral Colleg" clipFrac=0.9314
CP8 | expr=revealStartMs+revealMs | t=4000 | prefix==titleText:true bandBlocks==5:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=1.000 bandStartEff=3450 clipApplied=1.0000 prefix="Electoral College" clipFrac=1.0000
CP9 | expr=holdEndMs | t=5400 | hash==CP8hash:true hash=19103235 cp8hash=19103235 | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=1.000 bandStartEff=3450 clipApplied=1.0000 prefix="Electoral College" clipFrac=1.0000
CP6b-ext-3900 | expr=extended assembleMs=3500, probe 3900 | t=3900 | bandFrac==0:true | visible=534 full=533 black=531 gray=3 colFront=32.000 rowFront=16.000 lastRowFront=21.985 bandFrac=0.000 bandStartEff=4000 clipApplied=0.0000 prefix="Electoral Colleg" clipFrac=0.9314
CP6b-ext-4100 | expr=extended assembleMs=3500, probe bandStartEff+100 | t=4100 | bandStartEff==4000:true bandFrac==0.5:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=0.500 bandStartEff=4000 clipApplied=0.5000 prefix="Electoral College" clipFrac=1.0000
GEO | cols=28 | total=474 ==474:true offsetUsed=2 ==2:true rightEdge=28 <=28:true side=13.5891 pitchX=28.1486 pitchY=24.2662 square(side==min(pitch)*fill):true
SWAP | titleText=HADOSH ACADEMY assembleMs=2100 bandBlocks[1].c=#1d4e89
SWAP-CP2 | expr=assembleStartMs+0.074*assembleMs(swap) | t=655.4 | visible=15 in9..21:true | visible=15 full=15 black=6 gray=9 colFront=5.000 rowFront=3.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
SWAP-CP4 | expr=assembleStartMs+0.815*assembleMs(swap) | t=2211.5 | visible==512:true | visible=512 full=512 black=496 gray=16 colFront=32.000 rowFront=16.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
SWAP-CP5 | expr=assembleStartMs+assembleMs(swap) | t=2600 | visible==538:true | visible=538 full=538 black=534 gray=4 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
SWAP-CP7 | expr=revealStartMs+0.40*revealMs(swap title) | t=3700 | prefix="HADOSH " expectedChars7:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=1.000 bandStartEff=3450 clipApplied=0.4729 prefix="HADOSH " clipFrac=0.4729
SWAP-CP8 | expr=revealStartMs+revealMs(swap) | t=4000 | prefix==HADOSH ACADEMY:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=1.000 bandStartEff=3450 clipApplied=1.0000 prefix="HADOSH ACADEMY" clipFrac=1.0000
RNG | seed=204 speckles=240 deterministic:true
```

Notes on the receipts (claims bounded to what the lines show): CP6b's extended run shows the reveal CLOCK prefix at 3900 ("Electoral Colleg") while `clipApplied` = 0.0000 and bandFrac = 0 — the shared mask, not the clock, governs what renders, and the band's entry is deferred to the extended completion (bandStartEff 4000, frac 0.5 at +100 ms). The timing swap (assembleMs 2700 → 2100) moves every assembly checkpoint instant (699.8 → 655.4 · 2700.5 → 2211.5 · 3200 → 2600) with assertions holding at the moved instants.

## Swap test (§5.1, guards.md command 2) — exact altered values

`titleText` "Electoral College" → "HADOSH ACADEMY" · `assembleMs` 2700 → 2100 · `bandBlocks[1].c` #ba3844 → #1d4e89. Result: technique reads correctly under the swap — assembly checkpoints hold at the moved instants (SWAP-CP2/CP4/CP5 above), the reveal binds the new title by the same char-fraction table (SWAP-CP7: 7 chars at f 0.40 · SWAP-CP8: full new title), and the fit leg re-measured the swapped title (fit-table row 2: fitScale 0.839, post-fit ink at inner width, capH 13.2 ≥ 11). Untouched as planned: cellColor, ground, band geometry, reveal/hold timings.

## Purity (guards.md command 1) + asset inventory

Raw grep on the final recreation.html for `segment\.mp4|source\.webm|t03-grid-build|ajavsMbCapY|<video|<img`: **0 hits** (grep exit 1, no matches). `url(` occurrences: 0 — no fragment references to classify. Asset inventory: recreation.html loads **zero external assets**; the ground texture is code-generated from CONFIG (seeded speckles); no specimen media, no frame, no tracing anywhere in the build. The segment appears ONLY as the labeled ORIGINAL side of comparison.html.

## Syntax + seeded-RNG census (guards.md command 3)

Extracted build script: `node --check` → **SYNTAX_OK**. Seeded RNG: CONFIG `seed` 204 drives mulberry32 in `textureSpeckles`; harness census prints `RNG | seed=204 speckles=240 deterministic:true` (two calls byte-identical; count = CONFIG `groundSpeckleCount`).

## Comparison check (§5.3)

comparison.html raw facts (grep-verified): label `ORIGINAL — specimen @ 30.8–37.0 s` ×1 · label `RECREATION — T204, parameterized` ×1 · exactly one `<video` (the original) · the recreation loaded as a live iframe of recreation.html · ONE synchronized control set (Play/Pause + Restart) driving the video, with the recreation's clock slaved to `vid.currentTime` on every animation frame (`currentTime` ×2 in the sync code) · phone stacking `@media (max-width:640px)` ×1 (columns stack vertically, controls remain above and reachable). Durations: segment 6.172 s (ffprobe) vs build 6.200 s nominal — the recreation clock is slaved to the video, so the 28 ms tail is hold, not drift.

## A6 legs (final build)

- `fit-table.md` — measured rows (PIL, DejaVuSerif stand-in, PROXY-labeled): specimen title PASS · swap title PASS (fit rule exercised) · contrast rows 5.62:1 / 5.67:1 specimen, 8.39:1 swap · **HITs: 0**.
- `config-census.md` — 51 CONFIG keys all resolved to application sites (nested `growthKeyframes[]`, `bandBlocks[]`, `revealKeyframes[]`, `glyphWidthEm` included) · subject-shaping literals outside CONFIG: 0 · CSS-variable check: no variables declared or referenced · **HITs: 0**.

## A13 RECEIPT INDEX (reconciled BEFORE payload assembly)

Reconciliation performed against: guards.md commands 1–8 · the amended Plan's assertion set (item record §2.4 + §2.11 CP5b/CP6b + amendment A2/A3: CP1 · CP2 · CP2a · CP3 · CP3a · CP4 · CP5 · CP5b · CP6 · CP6b · CP7 · CP7b · CP7c · CP8 · CP9 · GEO) · the build's expected CONFIG keys (51 top-level keys from the harness CONFIG_KEYS line, nested `bandBlocks[]`/`growthKeyframes[]`/`revealKeyframes[]`/`glyphWidthEm` entries resolved in config-census.md §2). Every line below carries its receipt or a NOT-DEMANDED line with its governing citation. **Result: no missing expected line, no unsupported exclusion.**

### (a) guards.md commands
| Cmd | Receipt |
|---|---|
| 1 purity grep | Raw result above: 0 hits on the final build (grep exit 1); `url(` count 0, nothing to classify |
| 2 swap test | SWAP block in the final raw output (exact §2.5 values; moved instants 655.4/2211.5/2600 shown) + fit-table row 2 + contrast row 4 |
| 3 syntax + RNG census | `node --check` SYNTAX_OK · `RNG seed=204 speckles=240 deterministic:true` |
| 4 scores arithmetic | NOT-DEMANDED at build-record stage — the command is seat-side at consolidation; scores.md shows the recomputed arithmetic from the filed lens returns (governing: guards.md cmd 4 + INSTRUCTION §5.5) |
| 5 segment binding | Segment binding section above: prescribed 30.8–37.0 s · ffprobe h264 1920×1080 · 6.171930 s · 687231 B |
| 6 fit leg | `fit-table.md` filed on the final build · HITs 0 · rows carry instrument + provenance (A12.2 form ii, PROXY stand-in named) |
| 7 census leg | `config-census.md` filed on the final build · HITs 0 · all 51 keys + nested entries resolved |
| 8 census-anchor probes | CP1 line in the final raw output: at the model-probe instant `assembleStartMs − 50` = 450, visible=0 (amendment A2: 450 is a MODEL probe; the last OBSERVED zero-cell sample is 400 ms, census c3.2s) |

### (b) A11 assertions (each: CONFIG expression → raw result, from the final raw output above)
| Assertion | Receipt |
|---|---|
| CP1 | expr `assembleStartMs-50` = 450 → visible=0 ✓ |
| CP2a (amendment A2) | expr `assembleStartMs+0.037*assembleMs` = 599.9 → visible=12, full=6, black=4 ≥ 1, edge colFront=3.500/rowFront=2.500 ✓ |
| CP2 | expr `assembleStartMs+0.074*assembleMs` = 699.8 → visible=15 ∈ [9,21], edge 5.000/3.000 ✓ |
| CP3 | expr `assembleStartMs+0.259*assembleMs` = 1199.3 → visible=136 ∈ [116,156] ✓ |
| CP3a (amendment A2) | expr `assembleStartMs+0.444*assembleMs` = 1698.8 → visible=300 ✓ |
| CP4 (amended A1) | expr `assembleStartMs+0.815*assembleMs` = 2700.5 → visible=512, black 496/512 = 0.9688 ≥ 0.95, gray=16 all in last column ✓ |
| CP5 (amended A1) | expr `assembleStartMs+assembleMs` = 3200 → visible=538 = 32×16+26 (A9.3 print: source 538, built 538, match=true), bandVisible=false, gray=4 all in partial row ✓ |
| CP5b (§2.11 R1) | expr `assembleStartMs+assembleMs+fadeSettleMs` = 3550 → black=538 ✓ |
| CP6 | expr `revealStartMs-100` = 3400 → prefix="", bandWidthFrac=0 < 1 ✓ |
| CP6b (§2.11 R2) | extended-CONFIG run: `assembleMs` 3500 → bandStartEff=4000, bandFrac(3900)=0, bandFrac(4100)=0.5, clipApplied(3900)=0 ✓ |
| CP7 | expr `revealStartMs+0.40*revealMs` = 3700 → prefix="Electoral", clipFrac=0.5251 ∈ [0.40,0.55] ✓ |
| CP7b (amendment A2) | expr `revealStartMs+0.60*revealMs` = 3800 → prefix="Electoral Col" ✓ |
| CP7c (amendment A2) | expr `revealStartMs+0.80*revealMs` = 3900 → prefix="Electoral Colleg" ✓ |
| CP8 | expr `revealStartMs+revealMs` = 4000 → prefix=titleText, bandBlocks rendered = CONFIG bandBlocks.length = 5 ✓ |
| CP9 | expr `holdEndMs` = 5400 → hash 19103235 == CP8 hash 19103235 ✓ |
| GEO (amendment A3) | cols 32→28 run: total=474, offsetUsed=2, rightEdge=28 ≤ 28, side=13.5891 = min(pitchX,pitchY)×cellFillFrac (square) ✓ |
| CP-START (Cycle 038 cure 1) | expr `0` (build start) = 0 → visible=0 ✓ (Cycle 038 completion cures §Cure 1) |
| CP-TAIL-5700 (Cycle 038 cure 1) | expr `5700` (D2 tail) → hash 19103235 == CP8/CP9 lockup hash ✓ |
| CP-TAIL-6200 (Cycle 038 cure 1) | expr `buildMs` = 6200 → hash 19103235 == CP8/CP9 lockup hash ✓ |
| SWAP-CP2a (Cycle 038 cure 2) | expr `assembleStartMs+0.037*assembleMs(swap)` = 577.7 → visible=12, full=6 ✓ |
| SWAP-CP3 (Cycle 038 cure 2) | expr `assembleStartMs+0.259*assembleMs(swap)` = 1043.9 → visible=136 ✓ |
| SWAP-CP3a (Cycle 038 cure 2) | expr `assembleStartMs+0.444*assembleMs(swap)` = 1432.4 → visible=300 ✓ |
| SWAP-CP3b (Cycle 038 cure 2) | expr `assembleStartMs+0.630*assembleMs(swap)` = 1823.0 → visible=465 ✓ |
| SWAP-CP5b (Cycle 038 cure 2) | expr `assembleStartMs+assembleMs(swap)+fadeSettleMs` = 2950 → black=538 ✓ |
| Fit row 2 RAW (Cycle 038 cure 3) | PIL DejaVuSerif at fitted 18.1811 px: textbbox (0,4,192,17) inkW 192 · inkH 13 · capH 13; mask inkW 191 — raw measurement, not base×scale ✓ (fit-table.md row 2) |

**Fidelity plan (jev-prewave leg 4):** implemented — field assembly by exact-fraction fronts with gray→black fade, 538 by construction, band landing under the completion predicate, char-table title reveal under the shared mask, static lockup hold. Deliberately deferred, named: D1 setup (broadcast insert replaced by empty ground; the comparison's ORIGINAL carries it) · D2 handoff outlines (T210's item, queue #98). Estimates labeled: cellColor + bandBlocks colors/spans + geometry fractions are JPEG-sampled census estimates (amendment A4).

## jev-prewave firing 1 — HOLD (disposition: APPLIED, cure round below)

Return filed verbatim at `codex/jev-prewave.md` (65,300 B): **HOLD · ASSERTED-CHECKS** — parameterization 0.95 · purity pre-check 0.90 · own-checks completeness **0.35** · fidelity-plan honesty 0.95. Three named defects, all receipt-completeness defects in this record (the build itself was not faulted): (1) missing census-anchor receipts at the onset instant, at the 33.0 s anchor, and at the band-landing instant; (2) the OBSERVED zero-state anchor (400 ms) unprobed — only the 450 ms model probe stood; (3) the CP6b pre-entry probe's instant (3900) carried no CONFIG-derived expression. Cure round follows; the build is UNCHANGED (sha256 8e1551ad… before and after), so the A6 legs stand as filed.

## Cure round — new executable receipts (same harness, cured build-record)

```
CP0-observed-zero | expr=assembleStartMs-100 | t=400 | visible==0:true | visible=0 full=0 black=0 gray=0 colFront=0.000 rowFront=0.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP-ONSET | expr=assembleStartMs | t=500 | visible==4:true full==4:true black==1:true | visible=4 full=4 black=1 gray=3 colFront=2.000 rowFront=2.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP3b-33.0s | expr=assembleStartMs+0.630*assembleMs | t=2201 | visible 435..495:true visible==465:true | visible=465 full=465 black=420 gray=45 colFront=31.000 rowFront=15.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP-BAND | expr=bandInStartMs | t=3450 | bandStartEff==3450:true bandFrac==0:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000
CP-BAND+100 | expr=bandInStartMs+100 | t=3550 | bandFrac==0.5:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=0.500 bandStartEff=3450 clipApplied=0.1214 prefix="El" clipFrac=0.1214
CP6b-ext-pre | expr=assembleStartMs+assembleMs(extended 3500)-100 | t=3900 | bandFrac==0:true clipApplied==0:true | visible=534 full=533 black=531 gray=3 colFront=32.000 rowFront=16.000 lastRowFront=21.985 bandFrac=0.000 bandStartEff=4000 clipApplied=0.0000 prefix="Electoral Colleg" clipFrac=0.9314
CP6b-ext-4100 | expr=extended assembleMs=3500, probe bandStartEff+100 | t=4100 | bandStartEff==4000:true bandFrac==0.5:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=0.500 bandStartEff=4000 clipApplied=0.5000 prefix="Electoral College" clipFrac=1.0000
```

The full cured harness run (all CP lines + cure lines) contains **zero `:false` assertion results**. A13 index additions from this cure (reconciled the same way as the index above): **CP0** (observed zero anchor, guards cmd 8 — expr `assembleStartMs-100` = 400 → visible=0) · **CP-ONSET** (census onset anchor — expr `assembleStartMs` = 500 → visible=4, full=4, black=1) · **CP3b** (33.0 s census anchor — expr `assembleStartMs+0.630*assembleMs` = 2201 → visible=465 ∈ 465±30) · **CP-BAND / CP-BAND+100** (band-landing anchor — expr `bandInStartMs` = 3450 → bandStartEff=3450, bandFrac=0; expr `bandInStartMs+100` = 3550 → bandFrac=0.5) · **CP6b receipt corrected** (pre-entry probe instant now the CONFIG expression `assembleStartMs+assembleMs(extended 3500)-100` = 3900, with band and clip results on the same line). Guards cmd 8's index line now carries BOTH probes: the observed anchor (CP0, 400 ms) and the model probe (CP1, 450 ms).

## jev-prewave firing 2 — HOLD (two-HOLD stop reached)

Return filed verbatim at `codex/jev-prewave-refire.md` (68,383 B): **HOLD · ASSERTED-CHECKS** — parameterization 0.94 · purity pre-check 0.95 · own-checks completeness 0.40 · fidelity-plan honesty 0.95. Named defects: (1) endpoint receipts missing (segment start · D2 tail); (2) timing-swap moved-instant receipts incomplete (CP2a/CP3/CP3a/CP3b/CP5b); (3) swap-title fit row carries a calculated, not measured, post-fit width. Per Amendment A12.3 the item STOPS here: no further cure round this cycle, the five-lens wave is not fired, and `scores.md` files **NO VERDICT** with these three defects priced as the completion cycle's cure list. The build stands unchanged at sha256 8e1551ad….

## Cycle 038 completion cures (A12.3 — Wave 35, build UNCHANGED sha256 8e1551ad7c5e9035378f36abdb77c2205dafdcc072fd150d54849928aadf681d · 16,922 B)

Harness: node, script extracted from recreation.html (`node /tmp/t204-harness038.js recreation.html`; state function required via module.exports). PIL: Pillow 10.2.0, DejaVuSerif.ttf at /usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf. All values below are MEASURED in this cycle — where a measured value differs from the cure list's expected value it is filed as measured and noted.

### Cure 1 — Endpoint receipts (segment start + D2 tail)
```
CP-START | expr=0 (build start) segment start t=0 | t=0 | visible==0:true | visible=0 full=0 black=0 gray=0 colFront=0.000 rowFront=0.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000 hash=1615416802
CP-TAIL-5700 | expr=5700 (D2 tail probe) | t=5700 | hash==CP8hash:true cp8hash=19103235 | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=1.000 bandStartEff=3450 clipApplied=1.0000 prefix="Electoral College" clipFrac=1.0000 hash=19103235
CP-TAIL-6200 | expr=buildMs | t=6200 | hash==CP8hash:true hash==CP9hash:true cp9hash=19103235 | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=1.000 bandStartEff=3450 clipApplied=1.0000 prefix="Electoral College" clipFrac=1.0000 hash=19103235
CP8-REF | t=4000 hash=19103235 CP9-REF | t=5400 hash=19103235
```
Result: t=0 visible=0 ✓ · state hash at 5700 = 19103235 and at buildMs=6200 = 19103235, both equal to CP8/CP9 lockup hash 19103235 ✓ (static lockup across D2 tail).

### Cure 2 — Timing-swap coverage (assembleMs 2700→2100, titleText "HADOSH ACADEMY", bandBlocks[1].c #1d4e89)
```
SWAPCFG | titleText=HADOSH ACADEMY assembleMs=2100 bandBlocks[1].c=#1d4e89
SWAP-CP2a | expr=assembleStartMs+0.037*assembleMs(swap) | t=577.7 | visible==12:true full==6:true | visible=12 full=6 black=4 gray=8 colFront=3.500 rowFront=2.500 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000 hash=281936684
SWAP-CP3 | expr=assembleStartMs+0.259*assembleMs(swap) | t=1043.9 | visible 116..156:true visibleVal=136 | visible=136 full=136 black=105 gray=31 colFront=17.000 rowFront=8.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000 hash=1678046743
SWAP-CP3a | expr=assembleStartMs+0.444*assembleMs(swap) | t=1432.4 | visible==300:true | visible=300 full=300 black=253 gray=47 colFront=25.000 rowFront=12.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000 hash=5916350
SWAP-CP3b | expr=assembleStartMs+0.630*assembleMs(swap) | t=1823 | visible 435..495:true visible==465:true | visible=465 full=465 black=420 gray=45 colFront=31.000 rowFront=15.000 lastRowFront=0.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000 hash=-89252967
SWAP-CP5b | expr=assembleStartMs+assembleMs(swap)+fadeSettleMs | t=2950 | black==538:true | visible=538 full=538 black=538 gray=0 colFront=32.000 rowFront=16.000 lastRowFront=26.000 bandFrac=0.000 bandStartEff=3450 clipApplied=0.0000 prefix="" clipFrac=0.0000 hash=-1032969010
```
Moved instants match expected exactly: CP2a 577.7 · CP3 1043.9 · CP3a 1432.4 · CP3b 1823.0 (printed 1823) · CP5b 2950. Note (measured, not expected): SWAP-CP3a black=253/gray=47 vs specimen-timing CP3a black=264/gray=36 — the compressed swap schedule ages fades less at the same front fraction; the checkpoint assertion (visible==300) holds. SWAP-CP5b bandFrac=0.000 because bandStartEff remains max(3450, 2600)=3450; black==538 holds.

### Cure 3 — Swap-title fit RAW PIL measurement (fit-table row 2 updated)
```
base_px_phone=21.67 fitScale=0.839 fitted_px_phone=18.1811
base_float size=21.67 textbbox=(0, 5, 228, 21) inkW=228 inkH=16
fitted_float_direct size=18.18113 textbbox=(0, 4, 192, 17) inkW=192 inkH=13 capH_H_bbox=(0, 4, 16, 17) capH=13
rendered_mask_getbbox offset10,10=(11, 14, 202, 27) inkW=191 inkH=13
fitted_10x182 size_arg=182 textbbox=(0, 34, 1916, 172) inkW=1916 inkH=138 (=> 191.6 x 13.8 at 1x)
```
Measured post-fit ink: textbbox inkW 192 px · inkH 13 px · capH 13 px; rendered-mask inkW 191 px · inkH 13 px. This REPLACES the prior calculated product (228 × 0.839 = 191.2, inkH 13.6, capH 13.2 — calculation, not measurement). Measured differs from the product by +0.8 px (textbbox) / −0.2 px (mask) — PIL integer rounding at the inner width 191.2 px; capH 13 ≥ 11 px floor. fit-table.md row 2 now carries these raw bounds. A6 fit leg re-run: HITs 0.

### Fresh own-checks on final build (Cycle 038)
```
PURITY grep -nE 'segment\.mp4|source\.webm|t03-grid-build|ajavsMbCapY|<video|<img' recreation.html -> no matches, grep exit 1 (0 hits); url( count 0
node --check extracted build script -> SYNTAX_OK
A9.3 source=538 built=538 (32*16+26=538) match=true
RNG | seed=204 speckles=240 deterministic:true
CONFIG_KEYS_COUNT 51
FULL_CHECKS total=18 failed=0 allPass=true (CP1,CP2a,CP2,CP3,CP3a,CP3b,CP4,CP5,CP5b,CP6,CP7,CP7b,CP7c,CP8,CP9,CP0,CP-START,CP-TAIL — raw lines in harness run /tmp/t204-full038.js output, all ok:true)
SWAP test: exact §2.5 values above (titleText, assembleMs, bandBlocks[1].c) — all five new swap checkpoints + prior SWAP-CP2/CP4/CP5/CP7/CP8 form hold at moved instants
sha256 8e1551ad7c5e9035378f36abdb77c2205dafdcc072fd150d54849928aadf681d · 16922 B (unchanged)
```

### A6 legs re-run (Cycle 038)
- fit-table.md — row 2 now raw-measurement based (above); all other rows unchanged (build unchanged). HITs: 0.
- config-census.md — build unchanged, census stands: 51 CONFIG keys resolved, subject-shaping literals outside CONFIG: 0. HITs: 0.

### A13 RECEIPT INDEX — Cycle 038 additions (reconciliation)
New index lines, each receipted above: **CP-START** (guards cmd 8 / endpoint — expr `0` build start → visible=0) · **CP-TAIL-5700** (D2 tail — expr `5700` → hash 19103235 == CP8/CP9) · **CP-TAIL-6200** (D2 tail — expr `buildMs` = 6200 → hash 19103235 == CP8/CP9) · **SWAP-CP2a** (guards cmd 2 — expr `assembleStartMs+0.037*assembleMs(swap)` = 577.7 → visible=12, full=6) · **SWAP-CP3** (expr `assembleStartMs+0.259*assembleMs(swap)` = 1043.9 → visible=136) · **SWAP-CP3a** (expr `assembleStartMs+0.444*assembleMs(swap)` = 1432.4 → visible=300) · **SWAP-CP3b** (expr `assembleStartMs+0.630*assembleMs(swap)` = 1823.0 → visible=465) · **SWAP-CP5b** (expr `assembleStartMs+assembleMs(swap)+fadeSettleMs` = 2950 → black=538) · **fit row 2 RAW** (guards cmd 6 — PIL textbbox (0,4,192,17) + mask inkW 191 at fitted 18.1811 px, DejaVuSerif stand-in named).
Reconciliation statement: index lines enumerated = guards cmds 1–8 (cmd 4 NOT-DEMANDED at build stage, seat-side per guards.md cmd 4 + INSTRUCTION §5.5, as before) + A11 assertions CP0, CP1, CP2, CP2a, CP3, CP3a, CP3b, CP4, CP5, CP5b, CP6, CP6b (incl. CP6b-ext-pre CONFIG expression), CP7, CP7b, CP7c, CP8, CP9, GEO, CP-ONSET, CP-BAND, CP-BAND+100 + Cycle 038 additions above. Every line receipted or NOT-DEMANDED with governing citation; no missing expected line, no unsupported exclusion.
