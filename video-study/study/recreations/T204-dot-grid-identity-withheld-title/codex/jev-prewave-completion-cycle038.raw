OpenAI Codex v0.169.0
--------
workdir: /home/hatch
model: gpt-6.2-sol
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR]
reasoning effort: none
reasoning summaries: none
session id: 01a1efb9-1a99-7983-ba8f-4464ac011fa0
--------
user
TASK: You are the jev-prewave judge for the recreation job. Judge ONLY item T204's build record below, per the call definition that follows. This is the A12.3 COMPLETION re-fire (Cycle 038, Wave 35) after the Cycle 037 two-HOLD stop; the three filed cure defects (endpoint receipts, timing-swap coverage, swap-title raw fit) are addressed in the build record's "Cycle 038 completion cures" section. Return ONE verdict (FIRE-WAVE or HOLD) with the four dimension scores (0-1), the primary classification if held, and named defects if any. End with a BODY-WRITE: line naming what your return files.

# jev-prewave call definition

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


# build-record.md (T204, incl. Cycle 038 completion cures + A13 index)

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


# CONFIG block of recreation.html

```js
const CONFIG = {
  titleText: "Electoral College",
  cols: 32,
  rows: 16,
  lastRowCells: 26,
  lastRowOffsetCols: 3,
  stageW: 960,
  stageH: 540,
  fieldLeftFrac: 0.090,
  fieldTopFrac: 0.114,
  fieldWidthFrac: 0.821,
  fieldHeightFrac: 0.719,
  cellFillFrac: 0.56,
  cellColor: "#111111",
  groundColor: "#ececec",
  groundTextureOpacity: 0.05,
  groundTextureScale: 1.0,
  groundTextureContrast: 1.0,
  groundSpeckleCount: 240,
  groundSpeckleSizeMin: 0.6,
  groundSpeckleSizeVar: 0.8,
  groundSpeckleAlphaMin: 0.5,
  groundSpeckleGain: 8,
  assembleStartMs: 500,
  assembleMs: 2700,
  growthKeyframes: [
    {f: 0.000, colFrac: 0.0625, rowFrac: 0.1250, lastRowFrac: 0},
    {f: 0.074, colFrac: 0.15625, rowFrac: 0.1875, lastRowFrac: 0},
    {f: 0.259, colFrac: 0.53125, rowFrac: 0.5000, lastRowFrac: 0},
    {f: 0.444, colFrac: 0.78125, rowFrac: 0.7500, lastRowFrac: 0},
    {f: 0.630, colFrac: 0.96875, rowFrac: 0.9375, lastRowFrac: 0},
    {f: 0.700, colFrac: 0.96875, rowFrac: 1.0000, lastRowFrac: 0},
    {f: 0.815, colFrac: 1.0000, rowFrac: 1.0000, lastRowFrac: 0},
    {f: 1.000, colFrac: 1.0000, rowFrac: 1.0000, lastRowFrac: 1}
  ],
  cellFadeMs: 60,
  cellFadeFloor: 0.30,
  fadeSettleMs: 350,
  bandBlocks: [
    {c: "#157180", x: 0.000, y: 0.00, w: 0.118, h: 1.00},
    {c: "#ba3844", x: 0.118, y: 0.00, w: 0.882, h: 1.00},
    {c: "#396b84", x: 0.000, y: 0.78, w: 0.470, h: 0.22},
    {c: "#b1cdce", x: 0.745, y: 0.78, w: 0.105, h: 0.22},
    {c: "#43031b", x: 0.155, y: 0.00, w: 0.475, h: 0.07}
  ],
  bandLeftFrac: 0.220,
  bandTopFrac: 0.426,
  bandWidthFrac: 0.565,
  bandHeightFrac: 0.130,
  bandInMs: 200,
  bandInStartMs: 3450,
  titleColor: "#ffffff",
  titleFontFamily: "Georgia, 'Times New Roman', serif",
  titleSizeFrac: 0.107,
  titleFitInnerFrac: 0.94,
  titleLeftFrac: 0.045,
  titleTopFrac: 0.10,
  revealStartMs: 3500,
  revealMs: 500,
  revealKeyframes: [
    {f: 0.00, chars: 0},
    {f: 0.40, chars: 9},
    {f: 0.60, chars: 13},
    {f: 0.80, chars: 16},
    {f: 1.00, chars: 17}
  ],
  glyphWidthEm: {default: 0.52, " ": 0.28, i: 0.26, l: 0.26, t: 0.34, f: 0.30, r: 0.38, E: 0.66, C: 0.72, H: 0.74, A: 0.70, D: 0.72, O: 0.76, S: 0.60, M: 0.88, Y: 0.68},
  holdEndMs: 5400,
  buildMs: 6200,
  seed: 204,
  originCorner: "top-left",
  growthAxes: "right-down",
  revealDirection: "left-to-right"
};
```

# Packet section for T204 (style-library techniques-openings.md)

### T204 — Dot-grid identity system + withheld title (P12 T03) ◆ — OWED #95
- Tier: **DESCRIBED — OWED #95**
- Mechanics: a field of black dots on a newsprint-textured ground assembles; the words "Electoral College" land across it as red/blue split lettering. The same dot field is the substrate for the title, the threshold map (T210) and the outro (T223). The title is withheld until 0:28 — after the misconception (T202) and the normal-system diagram (T203) are installed — so the title reads as an answer, not a label. The assembly order is the claim (clip, not stills).
- Feeds: opening · diagram · ending — P12 @ 0:28–0:37 (system recurs throughout) — ev/t32-title-dotgrid.jpg · clips/t03-grid-build.mp4


# guards.md command list

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


# fit-table.md

# fit-table — T204 (guard-measured-fit leg, A6) · final build sha256 8e1551ad…

Instrument for every row: PIL rendered measurement (Pillow ImageFont/ImageDraw) with the NAMED stand-in font **DejaVuSerif.ttf** — rows are PROXY (this seat has no browser binary; A12.2 form ii). Stage geometry: logical 960×540 rendered at the 360 px phone stage (scale 0.375). The build's own fit rule (canvas measure in the renderer, `titleFitInnerFrac` = 0.94 of band width) is simulated with the stand-in's measured ink, so each row is a POST-FIT measurement of the fitted span, per guard checks 1–2. Census ground truth (builder-measured on census frame c6.8s, 1920×1080): band 1083×145 px · title ink 1016×120 px (93.8% of band width) → at phone scale ink 190.5 px on a 203.4 px band.

| # | Element | Container | Measured ink (post-fit, 360 px stage) | Container bounds | Margin / floor | Result |
|---|---|---|---|---|---|---|
| 1 | Title span, specimen CONFIG (`titleText` "Electoral College", `titleSizeFrac` 0.107 → font 21.67 px phone) | Band (reserved, CONFIG geometry) | inkW 188.5 px · inkH 21.2 px · capH 15.8 px · fitScale 1.000 (no shrink needed) | inner width 191.2 px (0.94 × band 203.4 px) · band height 26.3 px | width margin +2.7 px inside inner width · capH 15.8 ≥ ~11 px floor ✓ · inkH 21.2 ≤ bandH 26.3 ✓ | PASS |
| 2 | Title span, swap CONFIG (`titleText` "HADOSH ACADEMY", §2.5 swap) | Band (same) | RAW post-fit PIL measurement (Cycle 038 cure, DejaVuSerif.ttf stand-in, fitted size 21.67 × 0.839 = 18.1811 px phone): base at 21.67 px textbbox (0, 5, 228, 21) inkW 228 px · fitted textbbox (0, 4, 192, 17) inkW 192 px · inkH 13 px · capH (H bbox) 13 px · rendered-mask getbbox inkW 191 px · inkH 13 px — NOT the base×scale product (191.2) | inner width 191.2 px · band height 26.3 px | measured ink 191–192 px at inner width (≤1 px PIL integer-bbox rounding) ✓ · capH 13 ≥ ~11 px floor ✓ · inkH 13 ≤ bandH 26.3 ✓ | PASS (fit rule exercised, raw-measured) |
| 3 | Contrast row — title ink vs band, SPECIMEN palette (plan-review R2) | Band main block `#ba3844` · teal head `#157180` | WCAG ratio white on `#ba3844` = **5.62:1** · white on `#157180` = **5.67:1** (computed from CONFIG hex values) | — | both ≥ 4.5:1 | PASS |
| 4 | Contrast row — title ink vs band, SWAP palette (`bandBlocks[1].c` → `#1d4e89`) | Band main block `#1d4e89` | WCAG ratio white on `#1d4e89` = **8.39:1** | — | ≥ 4.5:1 | PASS |
| 5 | Band container itself | Stage | band 203.4 × 26.3 px at 360 px stage (CONFIG fracs 0.565 × 0.130 of 960×540) | stage 360 × 202.5 px | band fully on-stage; cells behind it occluded by construction (opacity 1.0 footprint) | PASS |

**Pre-cure HIT (cured before this table was filed):** at the Plan's original `titleSizeFrac` 0.125 (font 25.31 px phone), the stand-in measured inkW 218.5 px > band 203.4 px — a width overflow. Cure: `titleSizeFrac` 0.125 → **0.107**, grounded in the census ink measurement above (specimen ink 190.5 px phone-scale vs stand-in 188.5 px at 0.107 — a 1% stand-in delta), plus the CONFIG fit rule (`titleFitInnerFrac`) so any future title is fitted by measurement, not hope (T99 wordmark precedent). Rows above are the cured build.

**HIT list: EMPTY (0 hits)** on the final build.


# config-census.md

# config-census — T204 (guard-config-census leg v3.1, A6) · final build sha256 8e1551ad…

Scan: all literals outside the CONFIG block of `recreation.html` counted and classified; every CONFIG key (51 top-level) resolved to its application site(s), nested/array keys included; CSS-variable setter check run.

## 1. Literal scan outside CONFIG

- **Hex/rgba colors outside CONFIG: 0.** Every color is a CONFIG value (`cellColor`, `groundColor`, `titleColor`, `bandBlocks[].c`).
- **Numeric literals outside CONFIG: 126 occurrences**, classified per constant:
  - `0` (58) · `1` (41) · `2` (10) — **structural**: loop bounds, indices, clamp bounds, array offsets. Exempt, printed.
  - `100` (4) — **structural**: percent conversion in the clip-path inset and speckle positioning. Exempt.
  - `1000` (2) — **structural**: the front-quantization constant in `frontsAt` (1/1000-cell snap, the epsilon cure — a precision identity, not a shaping value). Exempt.
  - `0.98` (1) — **structural-definition**: the BLACKENED threshold from plan-amendment A1 (the definition of the black state, fixed by the amendment, not a per-specimen shaping value). Exempt, printed per the guard's per-constant rule.
  - RNG/hash constants (`0x6D2B79F5`, 4294967296, shifts 15/7/61/14, hash multiplier 31, `1e-9`) — **structural**: mathematical identities of the mulberry32 generator and the state hash. Exempt.
  - **Subject-shaping literals outside CONFIG: 0.** (Pre-cure, the speckle count 240, speckle size/alpha coefficients, the speckle gain 8, and the title offsets 0.045/0.10 stood in code; all were moved into CONFIG — `groundSpeckleCount/SizeMin/SizeVar/AlphaMin/Gain`, `titleLeftFrac/titleTopFrac` — before this census was filed.)
- **String literals outside CONFIG:** DOM element ids and the keyframe field names (`colFrac`/`rowFrac`/`lastRowFrac`) read from CONFIG data — structural addressing, not content. The title text, font stack, and all palette strings live only in CONFIG.

## 2. CONFIG key → application-site resolution (51 keys; site = where the value flows into the subject's construction)

| Key(s) | Application site |
|---|---|
| `titleText` | `revealState` (prefix/clip) · renderer span text + canvas fit measure |
| `cols` / `rows` | `frontsAt` (front scaling) · `totalCells` · renderer cell loops · `geometry` pitch |
| `lastRowCells` | `frontsAt` (lastRowFront scaling) · `totalCells` · renderer partial-row loop |
| `lastRowOffsetCols` | `offsetUsed` → cell x positions (state + renderer) |
| `stageW` / `stageH` | `geometry` · band geometry in `stateAt` · renderer font/band sizing |
| `fieldLeftFrac/fieldTopFrac/fieldWidthFrac/fieldHeightFrac` | `geometry` (field rect, incl. origin-corner branch) |
| `cellFillFrac` | `geometry` (cell side = min(pitch) × fill) |
| `cellColor` | renderer cell background |
| `groundColor` | renderer ground background |
| `groundTextureOpacity/Scale/Contrast` | `textureSpeckles` (speckle alpha/size) |
| `groundSpeckleCount/SizeMin/SizeVar/AlphaMin` | `textureSpeckles` (count + jitter ranges) |
| `groundSpeckleGain` | renderer speckle opacity |
| `assembleStartMs` / `assembleMs` | `frontsAt` · `axisFullTime` · `stateAt` assemblyDone/band predicate |
| `growthKeyframes[]` (nested: `.f/.colFrac/.rowFrac/.lastRowFrac`) | `frontsAt` interpolation · `axisFullTime` inversion — every nested field read |
| `cellFadeMs` / `cellFadeFloor` | `stateAt` cell opacity (fade slope + newborn floor) |
| `fadeSettleMs` | `stateAt` `settled` flag (assemblyDone + fadeSettleMs) |
| `bandBlocks[]` (nested: `.c/.x/.y/.w/.h`) | renderer band block divs — every nested field read |
| `bandLeftFrac/bandTopFrac/bandWidthFrac/bandHeightFrac` | `stateAt` band rect + occlusion · renderer band geometry |
| `bandInMs` / `bandInStartMs` | `stateAt` bandStartEff predicate + band width fraction |
| `titleColor` / `titleFontFamily` | renderer span color/font · canvas fit measure font |
| `titleSizeFrac` | renderer base font size · `stateAt` fit-scale em computation |
| `titleFitInnerFrac` | renderer canvas fit rule · `stateAt` `titleFitScale` |
| `titleLeftFrac` / `titleTopFrac` | renderer span position |
| `revealStartMs` / `revealMs` | `revealState` clock · `stateAt` phase |
| `revealKeyframes[]` (nested: `.f/.chars`) | `revealState` char-fraction interpolation — both fields read |
| `glyphWidthEm` (nested: `.default` + per-char) | `glyphWidth` → `textWidthEm` → clip fraction + fit scale |
| `holdEndMs` | `stateAt` `phase` (hold/tail boundary) |
| `buildMs` | renderer/comparison clock bound |
| `seed` | `textureSpeckles` mulberry32 seed |
| `originCorner` | `geometry` (fromRight/fromBottom branch → field origin) |
| `growthAxes` | `frontsAt` (axis-swap branch → front assignment) |
| `revealDirection` | `revealState` (prefix vs suffix branch) |

Unapplied keys: **none** (pre-cure, `fadeSettleMs`, `holdEndMs`, `originCorner`, `growthAxes`, `revealDirection` had no site; each was wired into `stateAt`/`geometry`/`frontsAt`/`revealState` as tabled above before this census was filed).

## 3. CSS-variable setter check

The build declares **no CSS variables** and references none (`var(--…)` occurrences: 0) — no unset-variable reference can exist. CONFIG reaches CSS only through JS style assignments, each tabled in §2.

**HIT list: EMPTY (0 hits)** on the final build.


# Wave RUN.md (Cycle 038 Wave 35 - census-anchor mapping summary for T204 in S1)

# RUN — recreation Cycle 038 · Wave 35 · 2026-11-18 (A12.3 completions queue #95–#98: T204 · T205 · T208 · T210 + first attempt queue #99: T212, Packet #12)

Opened BEFORE any building (INSTRUCTION §0). Trigger: cron `study-recreation` 2026-11-18 12:20 EST.
Governing: recreation INSTRUCTION.md (§0 wave form incl. completion-wave form Amendment A8 + skeleton-record step · §1–§9 · Amendments A1/A2/A3/A5/A6/A7/A9/A10/A11/A12/A13 + 2026-11-14 ruling: arming=firing, verdicts advisory).

Pre-action judgment: (1) objective — carry T204/T205/T208/T210 (queue #95–#98, Packet #12) to scored verdicts via their authorized A12.3 completion re-fires (cures filed in each scores.md at Wave 34 close), and carry the next owed first attempt in queue order — #99 T212 margin bar field (Packet #12, Vox "The Electoral College, explained") — to a scored verdict; 5 items, the §0 cap. (2) Forward movement — NO-VERDICT pool drops from 8 toward 4 (the four completions scored; T190/T196/T197/T199 stay parked PENDING AUTHORIZATION, consumer HQ) and DESCRIBED-OWED drops from 7 toward 6. (3) Cost to owner — none; no ask, no schedule change; the T190/T196/T197/T199 authorization ask stands with HQ and is NOT re-asked here. (4) Why now — scheduled firing; A12.3 makes the four completions the next cycle's first charge, queue order is the only triage (A3). (5) Body-write — this RUN.md, per-item cured records + (for T212) build under `hidden_files/study/recreations/`, HQ.json skeleton→closed entry (same id `rec-2026-11-18-wave35`), heartbeat skeleton→closed beat 121, verdict-history lines, QUEUE.md rows #95–#99 updates. (6) Order check — §1 prices each completion item's on-disk state BEFORE any firing (A8); T212's Phase A (Observe+Plan + codex-observe + codex-plan-review + both exit gates consumed in §2b) precedes its build (A9.2).

## §0b — Pool census at open (seat, firsthand)
- QUEUE recreation section rows #89–#98 attempted; rows #95–#98 = T204/T205/T208/T210 NO VERDICT, completions charged to this cycle under A12.3 (scores.md cure lists read firsthand by seat).
- PENDING AUTHORIZATION pool (NOT this wave's items): T190 · T196 · T197 · T199 — next re-fires require HQ authorization; no authorization entry found in recreation HQ.json after Wave 34 close. They stay IN PROGRESS, mid-attempt, do NOT route to practice.
- DESCRIBED-OWED after #98: #99 T212 · #100 T218 · #101 T219 · #102 T227 · #103 T232 · #104 T233 · #105 T238 (7, per style-library TECHNIQUES.md register: 12 OWED listed as #94–#105 minus attempted). T212 is the next first attempt.
- Catalogue basis: 239 techniques (style-library register). At Wave 34 close, recreation filed evidence: RECREATED 70 · NO-VERDICT IN PROGRESS 8 · DESCRIBED-OWED 7.

## §0c — Skeleton record (A-C015-1 form, adopted Cycle 021)
HQ.json entry `rec-2026-11-18-wave35` created at Plan close in state "planned — Execute not yet run"; heartbeat beat 121 created in same state. Both updated in place at close. D-SKELETON: NO (skeleton written before Execute opens in this cycle).

## §1 — Observe / completion pricing (per item, summarized; full per-item records in artifact dirs)
- T204: build sha 8e1551ad… 16,922 B unchanged in Wave 34 cure round (record-only). Cure list (3): endpoint receipts (0 ms + D2 tail 5700/6200) · timing-swap moved instants for CP2a/CP3/CP3a/CP3b/CP5b · swap-title fit RAW PIL measurement (not base×scale).
- T205: final build sha 64c7b905… 18,570 B. Cure list (3): CP01 endpoint bound at 570 ms (stateAt=0.30 fails strict <0.30 — governing amendment or build change + indexed receipt) · CP13 evaluated instant printing + swapped CP10/CP11 receipts · config-census phases[] coverage wording reconciliation. NOTE scores.md supersession: firing 2 was original attempt's second firing, NOT a completion re-fire — completion is authorized under A12.3, no HQ authorization needed.
- T208: build sha 42d33e6b… 15,115 B unchanged across Wave 34 firings. Cure list (2): A11 timing-swap movement evidence for remaining 7 checkpoints (swap the input each assertion actually reads) · guard #2 geometry receipt (dot positions/extents under content swap).
- T210: final build sha 254add09… 16,597 B. Cure list (4): hold-dependent swap probe (completeAtMs−holdMs 4000→4800) · stale receipt-index line reconciliation (3000→2100) · CP9 whole-state equality receipt · palette swap observed stroke/fill values.
- T212: NEW — Packet #12 T11, P12 @ 2:37–2:52, ev/t162-margin-bars.jpg, clips/t10-margin-bars.mp4 in packet `hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/`. Mechanics (style-library techniques-diagrams.md §T212): all states become vertical bars in winner colour; above each solid bar a dotted column extension shows losing side's share — "no state is actually all-red or all-blue" (transcript 2:36). Operation: bar growth + dotted extension. Consumer: DLC assembler diagram containers. Schedule basis, variables, census: per-item Phase A record filed by its builder before Execute (A9.2/A10.2/A10.3).

## §2 — Plan (summary)
Completions: apply ONLY the filed cure lists above; fresh own-checks + A6 legs on the cured record/build; A13 receipt index re-reconciled (incl. assertion inheritance A13.2); then ONE jev-prewave completion re-fire per item (A12.3); on FIRE-WAVE, five-lens Codex scoring wave bound to that build's hash; on HOLD, NO VERDICT with cures priced (next re-fire then PENDING AUTHORIZATION).
T212: full first-attempt Plan in its per-item record (parameter table, construction choice, swap values, census-anchor mapping, failure points) before Execute.
Bar (standing): five-lens average ≥85 AND min ≥70 → PASS/RECREATED; else FAIL/IN PROGRESS (attempt 2 to practice for first attempts; completions that FAIL get a scored verdict and route per A3).

## §2b — Gate dispositions
TO BE FILLED as gates fire in Execute/Verify. Completion items' prior gates stand consumed in Cycles 034–037; T212's gates fire this cycle.

## §3–§5 — Execute / Verify
TO BE FILLED per item as builders return. Seat verifies each item firsthand at close: scores.md arithmetic recomputed, purity re-grep, hash binding across lens returns.

## §9 — Condense
TO BE FILLED at close.

## §7 — Faithfulness trace
TO BE FILLED at close (trace table · choice log · deviation register · evidence binding · git corroboration · size discipline).


warning: Codex could not find bubblewrap on PATH. Install bubblewrap with your OS package manager. See the sandbox prerequisites: https://developers.openai.com/codex/concepts/sandboxing#prerequisites. Codex will use the bundled bubblewrap in the meantime.
warning: Loaded only 32768 of 99110 bytes from `/home/hatch/AGENTS.md` in environment `local` under the 32768-byte project instruction budget. Trim your project instructions to fit the budget. If you need to keep them all, increase `project_doc_max_bytes`.
warning: Combined user instructions use 37824 bytes, above the 32768-byte `project_doc_max_bytes` setting. The total includes global and thread instructions. The limit applies only to project files.
codex
**HOLD · ASSERTED-CHECKS — T204, Cycle 038, Wave 35**

| Dimension | Score |
|---|---:|
| Parameterization | 0.95 |
| Purity pre-check | 0.95 |
| Own-checks completeness | 0.48 |
| Fidelity-plan honesty | 0.95 |

- **D2 tail receipt uses a hardcoded evaluation instant.** `build-record.md`, Cycle 038 Cure 1 and the A13 additions, record `CP-TAIL-5700` as `expr=5700`. The raw hash confirms the lockup at that instant. `jev-prewave` §2 requires a CONFIG-derived evaluation instant for each census checkpoint. Bind the D2 tail probe to the segment-relative CONFIG timing and file the evaluated expression and raw hash in the receipt index.
- **The five filed timing-swap gaps are closed.** `build-record.md`, Cycle 038 Cure 2, gives evaluated instants and raw results for CP2a, CP3, CP3a, CP3b, and CP5b. The segment-start and `buildMs` endpoint probes also have raw results in Cure 1.
- **The swap-title fit receipt is measured.** `fit-table.md` row 2 and `build-record.md` Cure 3 show a rendered-mask width of 191 px against a 191.2 px inner width, with a 13 px cap height, using the named DejaVuSerif proxy.
- **The construction and fidelity record support the remaining scores.** `config-census.md` §2 maps CONFIG fields to application sites. `build-record.md` Construction and Fresh own-checks describe procedural generation and record a zero-hit purity grep. Its Fidelity plan names both departures, D1 broadcast setup and D2 handoff outlines.

**Limits** — Reviewed the supplied paperwork and Wave 35 §1 summary. No independent harness execution, browser fit measurement, or full Observe-plan verification.

**BODY-WRITE: none (read-only run).** The consuming seat files this verdict, scores, and named defect in T204’s `build-record.md` for the Cycle 038 completion re-fire.
tokens used
32,295
**HOLD · ASSERTED-CHECKS — T204, Cycle 038, Wave 35**

| Dimension | Score |
|---|---:|
| Parameterization | 0.95 |
| Purity pre-check | 0.95 |
| Own-checks completeness | 0.48 |
| Fidelity-plan honesty | 0.95 |

- **D2 tail receipt uses a hardcoded evaluation instant.** `build-record.md`, Cycle 038 Cure 1 and the A13 additions, record `CP-TAIL-5700` as `expr=5700`. The raw hash confirms the lockup at that instant. `jev-prewave` §2 requires a CONFIG-derived evaluation instant for each census checkpoint. Bind the D2 tail probe to the segment-relative CONFIG timing and file the evaluated expression and raw hash in the receipt index.
- **The five filed timing-swap gaps are closed.** `build-record.md`, Cycle 038 Cure 2, gives evaluated instants and raw results for CP2a, CP3, CP3a, CP3b, and CP5b. The segment-start and `buildMs` endpoint probes also have raw results in Cure 1.
- **The swap-title fit receipt is measured.** `fit-table.md` row 2 and `build-record.md` Cure 3 show a rendered-mask width of 191 px against a 191.2 px inner width, with a 13 px cap height, using the named DejaVuSerif proxy.
- **The construction and fidelity record support the remaining scores.** `config-census.md` §2 maps CONFIG fields to application sites. `build-record.md` Construction and Fresh own-checks describe procedural generation and record a zero-hit purity grep. Its Fidelity plan names both departures, D1 broadcast setup and D2 handoff outlines.

**Limits** — Reviewed the supplied paperwork and Wave 35 §1 summary. No independent harness execution, browser fit measurement, or full Observe-plan verification.

**BODY-WRITE: none (read-only run).** The consuming seat files this verdict, scores, and named defect in T204’s `build-record.md` for the Cycle 038 completion re-fire.
