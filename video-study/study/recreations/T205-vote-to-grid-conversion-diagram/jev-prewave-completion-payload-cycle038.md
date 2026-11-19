=== JEV-PREWAVE INSTRUCTION (guards/jev-prewave.md) ===
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

=== BUILD RECORD (build-record.md, incl. Cycle 038 completion cures + A13 index) ===
# T205 — Build record · Wave 34 / Cycle 037 · first attempt (completion cure round applied)

- Item: T205 vote-to-grid conversion diagram · queue #96 · Packet #12 (Vox "The Electoral College, explained", ajavsMbCapY) · digest-local T04.
- Plan authority: `runs/2026-11-18-cycle-037-wave-34/item-T205-observe-plan.md` AS AMENDED by `plan-amendment-cycle037.md` in this directory (9 gate charges cured; filed before any build script, A9.2) AND by `plan-amendment-cycle037-addendum1.md` (completion cure round: governing split-view disposition D1 + receipt completions D2/D3 + blockLabel wiring D4).
- Schedule basis: segment-anchored. Segment = source 37.0–46.0 s (9.0 s). buildMs = sourceMs − 37000.
- Final build (completion-final, after the one cure round): recreation.html sha256 `64c7b905300b689785b981d6723647d6b3357a90b0a6fbb7902e3e320c2d95b3` · 18,570 B. comparison.html sha256 `1f1f9bff4f45302f03625495c08f0b79a14be8bd4ab98fe6c12a5ddb17c10223` · 2,736 B (unchanged by the cure round). Pre-cure build was sha256 `28851f7899801d236606c7df9b5162dd5bafb0a6a0ba8573a9c539b6e1c5ae47` · 16,170 B — jev-prewave firing 1 binds THAT hash; every receipt below binds the NEW hash.
- Construction: SVG + DOM phase machine; pure `stateAt(ms)` over CONFIG `phases[]` (sole timing authority); all geometry generated from CONFIG; zero external assets; no captions/subtitles; segment appears ONLY as comparison's labeled ORIGINAL side.

## jev-prewave firing 1 — outcome + disposition (completion charge step 1)
- Fired on the pre-cure build (hash `28851f…c5ae47`). Raw return filed verbatim at `codex/jev-prewave.raw` (239,985 B) and copied verbatim to `codex/jev-prewave.md` (sha256 `19c8eca185bed90c0a15c82fc0cc70672f349f71815423ad965587131558b259`, identical to the .raw — verified by hash at filing).
- **Verdict: HOLD — ASSERTED-CHECKS.** Dimensions: parameterization **0.75** · purity pre-check **1.00** · own-checks completeness **0.25** · fidelity-plan honesty **1.00**.
- Disposition: **APPLIED — the one cure round of the two-firing form.** Four findings, cured as follows (detail in `plan-amendment-cycle037-addendum1.md`):
  1. Split-view count/mirror receipts stopped at the state model + the split geometry contradiction (renderer placed the split grid at x=850 showing columns 0–4, while Cure 8 prescribed columns 15–33/342 cells, and Plan §2.1 described showing the western blocks) → **D1 governing disposition** from firsthand census: the split view shows the WESTERN edge (first visible column 0, eastern columns cropped at the right edge; the washed block is `west` at the visible left edge, exactly as census 40.0/44.0 s frames show). Cure 8's columns 15–33 disposition retired. Renderer split geometry rebuilt on CONFIG (`geom.connectorGapPx` + pure helpers the renderer itself uses) and RENDERER receipts issued for visible cell count, wash visibility, and connector contact in the full layout, the disc-left split, and the mirrored disc-right split (raw harness output below).
  2. Checkpoint receipts omitted prescribed predicates (CP01 disc absence · CP12 block-keyed west result · CP13 block-keyed comparison vs CP12 · CP14 fade predicate) → **D2**: all CP01–CP14 receipts re-issued from a fresh harness run on the final build, each carrying its CONFIG expression + evaluated value + raw observed result for every Cure-1 predicate (below). `discOpacity` state field added (the exact value the renderer applies to the disc group) so disc absence is an evaluated predicate, not prose.
  3. G5 segment probes partial (43.6/43.8 equivalents unreported, endpoint extraction failed) + X1 palette arithmetic instead of the V2b phone-scale sampling → **D3**: emitted-clip frames decoded and viewed at 6.6 s / 6.8 s / 8.5 s + the clip's last frame (receipts in §Segment binding below); V2b re-issued as a PIL rendered stand-in measurement at the 360 px stage scale with pixel samples read back from the raster (raw below).
  4. Config census overstated `content.blockLabel` coverage (key occurred only at its declaration) → **D4**: the key is WIRED — pure helper `blockLabelText(cfg)` gates a renderer branch that creates the block-label element iff the value is non-null; harness BLOCKLABEL receipts demonstrate both states; config-census.md §2 corrected to the true site.

## Segment binding (guards cmd 5)
Cut: `ffmpeg -ss 37.0 -i source.webm -t 9.0 -c:v libx264 -pix_fmt yuv420p -c:a aac -movflags +faststart segment.mp4` from the archived source in `hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/`.
ffprobe (raw): codec_name=h264 · width=1920 · height=1080 · r_frame_rate=25778/1075 · audio codec_name=aac · **duration=9.006983** · size=869174. segment.mp4 sha256 `02a7abdd47a1226aad3cc181d9d8ece0e1e5f8c9cc07c452b2cdf4fb3386b989`. Frame count (completion re-probe): nb_read_frames=215.
Continuous-playback reconciliation (observe-exit charge 2): frames decoded from the EMITTED clip at 6.2 s and 6.4 s (segment-relative = census 43.2/43.4 s equivalents) extracted successfully (80,758 B / 81,342 B JPEGs), confirming the cast/reappear interval exists in continuous decoded playback, not only in seeks.
**Completion-round completion of this receipt (firing-1 finding 3, Addendum D3) — decoded from the emitted clip and viewed firsthand by the completion builder:**
- 6.6 s (= census 43.6 s equivalent): JPEG 82,282 B, sha256 `5f866aacbffb0cb0f6640cb0fefa0050a6d1b795dd4edef4cb294321f20dfd46` — paper high above the box, check RED, connector bar full and touching the grid's left edge, west block wash PALE pink (graded fill in progress). Matches census 43.6 s.
- 6.8 s (= census 43.8 s equivalent): JPEG 84,341 B, sha256 `2f7f9954285e632e57726caef0b772f65db105ed4dca41f2beb69f3e8d105320` — same composition, wash strengthened to mid-pink. Matches census 43.8 s.
- 8.5 s (= source 45.5 s): JPEG 84,592 B, sha256 `631eb1a48677d069e7735b77137f4ad197c379ad8ba36058292ee572abe49a8f` — converted state holding at full wash, no fade yet visible.
- Endpoint — the emitted clip's LAST frame (extracted via `-sseof -0.05`, PNG 417,153 B, sha256 `1910749ca306b30453af923914fd064d323b61b5c30a0c7d300cd740d1c9d236`): the whole diagram stands FADED to a pale grey wash (disc grey, cells grey, west wash pale pink residual) with the John Quincy Adams portrait disc entering at centre — the diagram is faded, never vanished, exactly the census 46.0 s state. (The earlier 8.99 s mjpeg extraction failure was an encoder range quirk in this seat's ffmpeg; the PNG last-frame route succeeds and binds the endpoint image, closing the gap the first record printed as partial.)

## Count assertion (A9.3) — Execute re-count, completed with renderer geometry (Addendum D1)
Source count (census, item record §1.2/§2.1 as amended + Addendum D1): full lattice 34 cols × 18 rows = **612** cells; converting block 5 cols × 11 rows = **55** cells.
Built count (harness over the final build's renderer helpers, raw below): totalCells = 612 · block west = 55 · full layout visible 612 intersecting / 612 fully within · disc-left split visible **342 intersecting (columns 0–18) / 324 fully within (columns 0–17)**, column 18 partial at the right edge · mirrored split visible 342 intersecting (columns 15–33) / 324 fully within (columns 16–33). **MATCH on source counts; the split visible count is now a renderer-geometry result (the pure helpers are the renderer's own translation functions), and the earlier "(34 − 15) × 18 = 342" derivation is retired — 342 stands as the intersecting count for columns 0–18 under D1.**

## Own checks — RAW harness output (A9.4; node harness over the PURE block of the final build; exit 0)
```
validateConfig: true
PASS A9.3 full-lattice count :: built 612 = grid.cols*grid.rows = 34*18 vs source census 612
PASS A9.3 block cell count :: block west cells = 55 (5 cols x 11 rows = 55)
RENDERER full layout: gridX=77 gridY=59 intersecting=612 fullyWithin=612 visibleCols=0-33
PASS RENDERER full visible count :: full lattice fully within stage: 612
RENDERER split layout (disc-left): gridX expr = geom.discCenterXPx 190 + geom.discDiameterPx/2 170 + geom.connectorGapPx 160 = 520 intersecting=342 fullyWithin=324 visibleCols=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
PASS RENDERER split visible count :: columns 0-18 intersect (342), columns 0-17 fully within (324), column 18 partial at right edge
RENDERER split wash visibility: washRect stage x=516 y=127 w=118 h=262 visibleFraction=1.000 renderedOpacity at 7000ms = fillByBlock.west 1 * palette.fillAlpha 0.82 = 0.820
PASS RENDERER split wash visibility :: west wash rect fully within stage, opacity 0.82 at wash end
RENDERER split connector: from disc right edge 360 to grid left edge 520 lengthAtFull=160 contact diff at connectorProgress=1 = 0
PASS RENDERER split connector contact :: connector end == grid left edge, diff 0
durations derived: connectorExtend = 1200 layoutShift = 500
PASS derived connector duration :: 1200
PASS derived layout duration :: 500
CP01 instant=0ms state={"outline":0,"discOpacity":0,"layout":"full","paper":0,"lift":0,"check":0,"checkColor":"#5b7a99","conn":0,"fillByBlock":{"west":0},"fade":0,"opacity":1}
PASS CP01 :: outline=0 exactly (CONFIG expr phases.outlineDraw.startMs=0), layout=full, fillByBlock.west=0, disc absent (discOpacity=layoutProgress=0, the value renderer applies to disc group) :: outline=0, layout=full, fill west=0, discOpacity=0 absent
CP02 instant=1000ms state={"outline":0.526,"discOpacity":0,"layout":"full","paper":0,"lift":0,"check":0,"checkColor":"#5b7a99","conn":0,"fillByBlock":{"west":0},"fade":0,"opacity":1}
PASS CP02 :: outline in (0.40,0.95) (expr phases.outlineDraw.startMs+1000) :: outlineProgress=0.526
CP03 instant=2000ms state={"outline":1,"discOpacity":0,"layout":"full","paper":0,"lift":0,"check":0,"checkColor":"#5b7a99","conn":0,"fillByBlock":{"west":0},"fade":0,"opacity":1}
PASS CP03 :: outline=1 (expr phases.outlineDraw.endMs+100=2000), layout=full, fillByBlock.west=0 (zero anchor) :: outline=1, fill=0
CP04 instant=3000ms state={"outline":1,"discOpacity":1,"layout":"split","paper":0.15,"lift":0,"check":0.08,"checkColor":"#5b7a99","conn":0,"fillByBlock":{"west":0},"fade":0,"opacity":1}
PASS CP04 :: layout=split (expr phases.layoutShift.endMs=3000), paper=geom.paperStubFraction 0.15 exactly, check=geom.checkStubTick 0.08 exactly, conn=0, fill=0 :: paper=stub 0.15, check=tick 0.08
CP05 instant=4000ms state={"outline":1,"discOpacity":1,"layout":"split","paper":0.717,"lift":0,"check":0,"checkColor":"#5b7a99","conn":0,"fillByBlock":{"west":0},"fade":0,"opacity":1}
PASS CP05 :: paper in (0.50,0.95) (expr phases.checkDraw.startMs=4000), check in [0,0.50] :: paper taller, check drawing
CP06 instant=5000ms state={"outline":1,"discOpacity":1,"layout":"split","paper":1,"lift":0,"check":1,"checkColor":"#5b7a99","conn":0,"fillByBlock":{"west":0},"fade":0,"opacity":1}
PASS CP06 :: paper=1, check=1, checkColor=palette.checkIdle #5b7a99 (expr phases.checkDraw.endMs=5000), conn=0, fill=0 (zero anchor) :: paper=1, check=1 idle, conn=0, fill=0
CP07 instant=6000ms state={"outline":1,"discOpacity":1,"layout":"split","paper":0.667,"lift":0,"check":0.667,"checkColor":"#5b7a99","conn":0.833,"fillByBlock":{"west":0},"fade":0,"opacity":1}
PASS CP07 :: connector in (0.30,0.90) (expr phases.connectorExtend.startMs+1000), fill=0 :: connector=0.833
CP08 instant=6200ms state={"outline":1,"discOpacity":1,"layout":"split","paper":0,"lift":0,"check":0,"checkColor":"#5b7a99","conn":1,"fillByBlock":{"west":0},"fade":0,"opacity":1}
PASS CP08 :: connector=1 contact (expr phases.connectorExtend.endMs=6200), paper=0 cast complete, fill=0 (zero anchor) :: contact=1, cast paper=0, fill=0
CP09 instant=6400ms state={"outline":1,"discOpacity":1,"layout":"split","paper":1,"lift":46,"check":1,"checkColor":"#d94f5c","conn":1,"fillByBlock":{"west":0},"fade":0,"opacity":1}
PASS CP09 :: paper=1 reappeared, lift=geom.paperLiftPx 46 (expr phases.blockWash.startMs=6400), fillByBlock.west in [0,0.20] wash onset, checkColor=palette.checkActive #d94f5c :: reappeared high lift=46, wash onset, check active
CP10 instant=6600ms state={"outline":1,"discOpacity":1,"layout":"split","paper":1,"lift":46,"check":1,"checkColor":"#d94f5c","conn":1,"fillByBlock":{"west":0.3333333333333333},"fade":0,"opacity":1}
PASS CP10 :: fillByBlock.west in (0.20,0.80) graded pale (expr phases.blockWash.startMs+200), checkColor=active :: wash graded 0.333
CP11 instant=6800ms state={"outline":1,"discOpacity":1,"layout":"split","paper":1,"lift":46,"check":1,"checkColor":"#d94f5c","conn":1,"fillByBlock":{"west":0.6666666666666666},"fade":0,"opacity":1}
PASS CP11 :: fillByBlock.west in (0.50,0.95) strengthening (expr phases.blockWash.startMs+400) :: wash 0.667
CP12 instant=7000ms state={"outline":1,"discOpacity":1,"layout":"split","paper":1,"lift":46,"check":1,"checkColor":"#d94f5c","conn":1,"fillByBlock":{"west":1},"fade":0,"opacity":1}
PASS CP12 :: fillByBlock={west:1} block-keyed (expr phases.blockWash.endMs=7000), connector=1, checkColor=active :: wash full, block-keyed west=1
CP13 instant=8000ms state={"outline":1,"discOpacity":1,"layout":"split","paper":1,"lift":46,"check":1,"checkColor":"#d94f5c","conn":1,"fillByBlock":{"west":1},"fade":0,"opacity":1} blockKeyedComparison vs CP12: CP12.fillByBlock={"west":1} CP13.fillByBlock={"west":1} deepEqual=true connEqual=true fade=0 opacity=1
PASS CP13 :: converted hold block-keyed identical to CP12, fadeProgress=0, diagramOpacity=1 :: identity shown by printed comparison, not claimed
CP14 instant=9000ms state={"outline":1,"discOpacity":1,"layout":"split","paper":1,"lift":46,"check":1,"checkColor":"#d94f5c","conn":1,"fillByBlock":{"west":1},"fade":1,"opacity":0.25}
PASS CP14 :: fadeProgress=1 AND diagramOpacity=fade.residualOpacity 0.25 exactly in [0.15,0.45] (expr phases.fadeOut.endMs=9000) — both predicates asserted :: fade=1, opacity=0.25 residual, not vanished
SWAP delta = 750 swapped phases: outlineDraw[0,1900] substrateHold[1900,2500] layoutShift[2500,3000] paperGrow[3000,4500] checkDraw[4000,5000] connectorExtend[5000,6950] paperRetract[6650,6950] paperReappear[6950,7150] blockWash[7150,7750] convertedHold[7750,8200] fadeOut[8200,9000]
SWAP convertedHold duration redistributed: 1200 -> 450
PASS SWAP label :: CAST
PASS SWAP connector duration derived :: 1950
SWAP CP08 moved instant=6950 state conn=1 paper=0 fillByBlock={"west":0}
PASS SWAP CP08 at moved instant 6950 :: contact/cast/zero-fill at 6950
SWAP CP09 moved instant (CONFIG expr phases.blockWash.startMs) = 7150 fillByBlock.west=0 checkColor=#2563eb paper=1
PASS SWAP CP09 wash onset moved 6400->7150 :: wash window 7150-7750, check blue-active
SWAP CP12 moved instant=7750 fillByBlock={"west":1} fillColor=#2563eb
PASS SWAP wash full blue at 7750 :: blue wash full
PASS SWAP segment still ends 9000 :: 9000
MIRROR validate: true east cells = 55
MIRROR state at wash end: fillByBlock = {"east":1}
RENDERER mirror split layout: gridX=-366 intersecting=342 fullyWithin=324 visibleCols=15-33
RENDERER mirror wash visibility: washRect stage x=326.0 w=118 visibleFraction=1.000 renderedOpacity = 0.820
RENDERER mirror connector: from disc left edge 600 to grid right edge 440 lengthAtFull=160 contact diff = 0
PASS MIRROR+partition exercise :: ID-keyed east block fills, wash fully visible in mirror, connector contacts grid right edge diff 0; no west literal survives
BLOCKLABEL specimen: blockLabelText(CONFIG) = null -> renderer branch creates NO label element (absence applied)
BLOCKLABEL scratch: blockLabelText(scratch) = "WEST" -> renderer branch creates label element with this text
PASS BLOCKLABEL wiring :: helper gates the renderer branch; null = absence, set = element created
TOTAL FAILS = 0
```
Harness command: `node harness.js recreation.html` (harness extracts the /*PURE-START*/…/*PURE-END*/ block and evaluates stateAt + the renderer's own geometry helpers — fullGridX/fullGridY, splitGridX/splitGridXMirror, visibleCellStats, washVisibility, connectorGeometry, blockLabelText; exit 0).

## Other own-check raw outputs
- Syntax (guards cmd 3): inline script extracted → `node --check` → **OK** (no output, exit 0) — re-run on the final build.
- Seeded-RNG census (guards cmd 3): `grep -c "Math.random" recreation.html` → **0** — NONE-BY-DESIGN (no RNG anywhere in the build; generation is deterministic loops over CONFIG).
- Purity grep (guards cmd 1): `grep -nE "segment\.mp4|source\.webm|source\.mp4|<video|<img|ajavsMbCapY|t52-vote" recreation.html` → **exit 1, zero hits** on the final build. `url(#` references: none present (no classification needed). Asset inventory: recreation.html loads **ZERO external assets** — all geometry generated from CONFIG; ground texture is generated line elements, not an image.
- Comparison check (§5 leg 3): comparison.html carries both labels verbatim (ORIGINAL — Vox @ source 37.0–46.0 s, evidence frames census 40/43/44 s · RECREATION — T205 parameterized); ONE shared control set (Play both / Restart both) drives the video, and the recreation is slaved via `timeupdate`/`seeked` → `__T205.setElapsed(video.currentTime × 1000)`; segment duration 9.007 s vs recreation duration CONFIG stage.durationMs 9000 ms — matched; phone stacking: `@media (max-width:700px)` column layout, controls above the pair, min-height 44 px buttons. Verified by source inspection (no browser binary in this seat — PIXEL-UNVERIFIED limitation stands). comparison.html unchanged by the cure round (hash in header).
- Swap test (§5 leg 1): exact altered values — content.ballotLabel "VOTE"→"CAST" · phases.connectorExtend.endMs 6200→6950 (duration 1200→1950 derived) · palette.fill/connector/checkActive #d94f5c→#2563eb. Result: PASS (raw above) — label swaps, connector extends at the new duration, cast/wash probes move with the schedule (CP09 instant 6400→7150 shown in the receipt), west block washes blue, check turns blue-active, converted hold redistributes 1200→450, segment still ends 9000. Plus the mirrored-layout + changed-partition exercise: PASS (east block fills by ID; renderer receipts for mirror wash visibility + connector contact above; no west/left-edge literal survives).
- V2b contrast (Verify V2b) — **completion-round rendered receipt (Addendum D3, replacing palette arithmetic):** PIL stand-in rendering at the 360 px stage scale (scale 0.375): canvas 360×203 drawn from CONFIG geometry (split gridX 520→195 px, pitch 24→9.0 px, cell 14→5.25 px); west block (cols 0–4, rows 3–13) drawn washed (fill #d94f5c at palette.fillAlpha 0.82 composited over palette.ground), neighbouring block (cols 6–10) drawn unwashed, black cells drawn over both. Pixel samples read back from the raster: washed gap-centre sample at (220,101) = **(222,108,118)** · unwashed gap-centre sample at (274,101) = **(244,241,234)** · euclidean distance **177.8 > 60** · cell pixel sampled over the wash = (17,17,17) — cells stay #111 over both. Limit printed: this is a named stand-in renderer (PIL rasterization of CONFIG geometry), not a browser pixel sample — no browser binary exists in this seat.

## A6 legs (on the final build, re-run in the completion cure round)
- fit-table.md: 2 measured rows (VOTE + swap CAST), PROXY rendered measurement (PIL, DejaVu Sans Bold named) — **0 HITs**. Ink height 11.3 px at 360 px stage vs ~11 px floor (thin margin, printed; re-measured on the final build: ink 116.0×30.2 / 114.5×30.2 design px).
- config-census.md: all-literal scan + key→site resolution incl. nested blocks[]/outlines[] keys + CSS-var check (none by design) — **0 HITs** on the final build (completion round: blockLabel site corrected to the wired branch; splitFirstVisibleCol/splitRightMarginPx removals + connectorGapPx addition reconciled in that file).

## RECEIPT INDEX (A13) — re-reconciled on the final build before the prewave re-fire payload
Reconciliation basis: guards.md commands 1–8 · the amended Plan's A11 assertions (CP01–CP14, as completed by Addendum 1 D2) · expected CONFIG keys from config-census.md §2 on the FINAL build (all keys resolved, incl. the wired blockLabel branch and the D1 removals/addition). Result: **RECONCILED — every line below carries its receipt or a NOT-DEMANDED line with a governing citation; no expected line missing; every receipt below is from the final build (hash `64c7b9…d95b3`) unless it binds the segment/comparison, which the cure round did not change.**

| # | Line | Receipt / disposition |
|---|---|---|
| G1 | guards cmd 1 — purity grep | RECEIPT: grep command above on the final build, exit 1, zero hits (raw in Other own-checks) |
| G2 | guards cmd 2 — swap test | RECEIPT: harness SWAP block above — altered values exact, moved CP09 instant 6400→7150 evaluated from CONFIG expression phases.blockWash.startMs, raw state printed |
| G3 | guards cmd 3 — syntax + RNG census | RECEIPT: node --check OK on the final build; Math.random count 0, NONE-BY-DESIGN |
| G4 | guards cmd 4 — scores arithmetic | NOT-DEMANDED at this step: seat-side recompute happens at consolidation in scores.md (guards.md cmd 4 is defined as the seat's recompute before scores.md prints a verdict) |
| G5 | guards cmd 5 — segment binding | RECEIPT: cut command + ffprobe facts above (duration 9.006983 s, h264 1920×1080, 215 frames, sha256 filed) + completion-round decoded frames at 6.6/6.8/8.5 s + last frame, hashes + viewed content filed in §Segment binding |
| G6 | guards cmd 6 — measured-fit leg | RECEIPT: fit-table.md re-run on the final build (2 PROXY measured rows, 0 HITs) |
| G7 | guards cmd 7 — config-census leg | RECEIPT: config-census.md re-scanned on the final build (0 HITs) |
| G8 | guards cmd 8 — census-anchor zero-state probes | RECEIPT: CP03 (2000 ms, fillByBlock.west=0), CP06 (5000 ms, fillByBlock.west=0), CP08 (6200 ms, fillByBlock.west=0) harness lines above — stateAt probed at each zero-state anchor, raw results printed |
| A11-CP01 | 0 ms — outline start, disc absent | RECEIPT: harness CP01 — instant = CONFIG expr phases.outlineDraw.startMs = 0; outlineProgress 0 exactly, layout full, fillByBlock.west 0, discOpacity 0 (disc absent — the predicate firing 1 found omitted, now evaluated) |
| A11-CP02 | 1000 ms — outlines nearly complete | RECEIPT: harness CP02 — instant = phases.outlineDraw.startMs + 1000; outlineProgress 0.526 ∈ (0.40, 0.95) |
| A11-CP03 | 2000 ms — outlines complete, zero fill | RECEIPT: harness CP03 — instant = phases.outlineDraw.endMs + 100 = 2000; outline 1, fillByBlock.west 0 |
| A11-CP04 | 3000 ms — split, stub + tick | RECEIPT: harness CP04 — instant = phases.layoutShift.endMs = 3000; paper = geom.paperStubFraction 0.15, check = geom.checkStubTick 0.08 (CONFIG expressions + evaluated values) |
| A11-CP05 | 4000 ms — paper taller, check drawing | RECEIPT: harness CP05 — instant = phases.checkDraw.startMs = 4000; paper 0.717 ∈ (0.50,0.95), check 0 ∈ [0,0.50] |
| A11-CP06 | 5000 ms — paper/check complete idle, zero fill | RECEIPT: harness CP06 — instant = phases.checkDraw.endMs = 5000; checkColor = palette.checkIdle #5b7a99, fillByBlock.west 0 |
| A11-CP07 | 6000 ms — connector ~83% | RECEIPT: harness CP07 — instant = phases.connectorExtend.startMs + 1000; connector 0.833 ∈ (0.30,0.90), fill 0 |
| A11-CP08 | 6200 ms — contact + cast + zero fill | RECEIPT: harness CP08 — instant = phases.connectorExtend.endMs = 6200; connector 1, paper 0, fillByBlock.west 0 |
| A11-CP09 | 6400 ms — reappeared high, wash onset | RECEIPT: harness CP09 — instant = phases.blockWash.startMs = 6400; lift = geom.paperLiftPx 46, fillByBlock.west 0 ∈ [0,0.20], checkColor = palette.checkActive |
| A11-CP10 | 6600 ms — wash graded pale | RECEIPT: harness CP10 — instant = phases.blockWash.startMs + 200; fillByBlock.west 0.333 ∈ (0.20,0.80) |
| A11-CP11 | 6800 ms — wash strengthening | RECEIPT: harness CP11 — instant = phases.blockWash.startMs + 400; fillByBlock.west 0.667 ∈ (0.50,0.95) |
| A11-CP12 | 7000 ms — wash full, block-keyed | RECEIPT: harness CP12 — instant = phases.blockWash.endMs = 7000; fillByBlock = {"west":1} printed block-keyed (the scalar-fill omission firing 1 named, now cured), connector 1, checkColor active |
| A11-CP13 | 8000 ms — converted hold, block-keyed comparison vs CP12 | RECEIPT: harness CP13 — instant = phases.convertedHold.startMs + 1000; CP12 and CP13 fillByBlock objects both printed, deepEqual=true, connEqual=true, fade 0, opacity 1 (identity shown by the printed comparison) |
| A11-CP14 | 9000 ms — fade complete, residual opacity | RECEIPT: harness CP14 — instant = phases.fadeOut.endMs = 9000; fadeProgress = 1 AND diagramOpacity = fade.residualOpacity 0.25 exactly ∈ [0.15,0.45] — both predicates asserted and printed |
| X1 | V2b filled-vs-unfilled contrast at 360 px stage | RECEIPT: PIL rendered stand-in receipt above (washed sample (222,108,118) vs unwashed (244,241,234), distance 177.8, samples read back from the raster) |
| X2 | Mirror + partition renderer exercise | RECEIPT: harness MIRROR + RENDERER mirror lines above (east fillByBlock=1, mirror visible 342 intersecting/324 fully within cols 15–33, wash visibleFraction 1.000, connector contact diff 0) |
| X3 | A9.3 count assertion + renderer visible counts | RECEIPT: harness count + RENDERER lines above (612 / 55; full 612/612; split disc-left 342 intersecting cols 0–18 / 324 fully within) |
| X4 | blockLabel wiring (Addendum D4) | RECEIPT: harness BLOCKLABEL lines above (specimen null → no element; scratch "WEST" → element text returned) + grep: `blockLabel` occurs 6× in the final build (declaration, helper, renderer branch) |

## Fidelity plan (jev-prewave leg 4)
Implemented from Packet #12 digest §3 T04 + census: ballot icon + connector bar + per-BLOCK graded wash behind persistent black cells, left-to-right, one block converting; substrate outline draw-on; layout shift to split view; ballot cast (retract) → reappear-high hinge; global fade-out. Deliberately deferred/named: full US state-polygon partition (simplified rectilinear outline blocks in CONFIG — §8 size discipline, named in the item record §2.2) · the 46–60 s portrait carousel (a different technique, gap G-T205-1) · newsprint texture as generated lines, not a scanned texture (purity).

## jev-prewave firing 2 — outcome + disposition (completion re-fire)
- Fired on the cured final build (hash `64c7b9…d95b3`); payload 71,720 chars, size+tail verified before firing; one stream (`cat payload | codex exec`, local binary), exit 0; return 254,001 B, size+tail verified. Raw return filed verbatim at `codex/jev-prewave-refire.md` (sha256 `2f2fccf0aa389263ab7d70f1299e13c889f56fcecd6376ddbb35eb4921ca9a71`, identical to `codex/jev-prewave-refire.raw`).
- **Verdict: HOLD — ASSERTED-CHECKS (second HOLD).** Dimensions: parameterization **0.75** · purity pre-check **1.00** · own-checks completeness **0.40** · fidelity-plan honesty **1.00**.
- Disposition: **APPLIED — the two-HOLD stop binds (A12.2): NO VERDICT is filed, the five-lens wave is NOT fired on this build.** scores.md carries both prewave outcomes, the NO VERDICT with its priced reason, and firing 2's three cure items (Cure-2 endpoint bound at 570 ms + its missing receipt · CP13 evaluated-instant printing + swapped CP10/CP11 receipts · config-census phases[] coverage wording for substrateHold/convertedHold). Firing 2 expressly confirms the firing-1 cures landed: D1 western-crop geometry (612 full / 342 intersecting / 324 fully within, harness re-run by the judge with zero failures), blockLabel wired, fit-row provenance satisfied. The item stands IN PROGRESS, mid-attempt in this job; further cure + re-fire requires the HQ authorization path (scores.md, Verdict section).

---

## Feeder defect — prewave firing 1 payload (entered 2026-11-18, Wave 34 Condense)

Per guards/jev-prewave.md §3 (a feeder defect is printed in the build record): the payload assembled for this item's prewave firing 1 omitted the guards.md command-8 text from the supplied guard excerpt. The firing's return (`codex/jev-prewave.md`, Limits) states the omission and records that the reviewer retrieved command 8 from disk. The omission is the feeder's (payload assembly), not the build's; firing 1's HOLD (ASSERTED-CHECKS — parameterization 0.75 · purity 1.00 · own-checks 0.25 · fidelity-plan honesty 1.00) stands unchanged. Full disposition: `build-record-feeder-disposition.md` in this directory; cycle record: recreation Cycle 037 RUN.md §9 disposition 4 + §7 deviation register.

---

## Supersessions — firing-2 authority + playback claim (dated 2026-11-18, Wave 34 Condense)

Filed at the direction of recreation Cycle 037's codex-condense firing 13 (points 1–2).

**Authority.** Any statement in this record (including the completion section) that calls prewave firing 2 a completion re-fire, or that requires HQ authorization for this item's next re-fire, is superseded: firing 2 was the original attempt's second firing inside Cycle 037 under the two-firing form. The item's completion — cures → fresh own-checks + A6 legs → ONE prewave re-fire → wave on FIRE-WAVE — is the next recreation cycle's first charge, authorized under Amendment A12.3 (see `scores.md`'s dated supersession of the same date for the full statement).

**Playback claim.** The G5 receipt text near the head of this record describes the decoded emitted-clip frames as a continuous-playback reconciliation confirming the swap interval "in continuous decoded playback." That wording is superseded: the decoded frames are frame evidence, not continuous playback. The jev-observe-exit playback charge for this item stands **SET ASIDE — continuous-playback gap carried** (the seat's §1.2 debt, consumer the next recreation Condense), per `plan-amendment-cycle037-supersession.md` in this directory and the cycle record §2b/§9b.3. The frame evidence itself stands as filed; only its characterization as playback is withdrawn.


---

## Cycle 038 completion cures (Wave 35, A12.3 completion — 2026-11-18)

- Authority: Amendment A12.3 completion re-fire. Firing 2 was the ORIGINAL attempt's second firing (see the supersessions at the end of this record and in scores.md) — this Cycle 038 re-fire IS the authorized completion re-fire; no HQ authorization was needed or sought.
- Governing amendment: `plan-amendment-cycle038.md` (C38-1 endpoint rule · C38-2 receipt form · C38-3 census disposition).
- **Build: UNCHANGED.** recreation.html sha256 `64c7b905300b689785b981d6723647d6b3357a90b0a6fbb7902e3e320c2d95b3` · 18,570 B — all three cures are rule/receipt/census cures; no build change was required, and C38-1 option (a) was chosen over (b) precisely because the build's linear draw reaching exactly 0.30 at the 30% instant is the faithful behavior (reasoning in the amendment).
- Cure 1 (CP01 endpoint bound): plan-amendment-cycle038.md C38-1 amends Cure 2's rule to `outlineProgress < 0.30` on [0, 570) with `≤ 0.30` at the endpoint 570 ms (the endpoint IS the 30% instant by construction). Measured receipt (raw harness below, line CP01-ENDPOINT): CONFIG expression `phases.outlineDraw.startMs + 0.30*(phases.outlineDraw.endMs - phases.outlineDraw.startMs)` evaluated = **570 ms**; interior samples stateAt(0) = 0, stateAt(285) = 0.15, stateAt(569) = 0.29947368421052634 — all < 0.30; endpoint stateAt(570).outlineProgress = **0.3** exactly, satisfying the amended `≤ 0.30` endpoint rule.
- Cure 2 (CP13 instant printing + swapped CP10/CP11): the Cycle 038 harness CP13 line prints its evaluated CONFIG instant — expression `phases.convertedHold.startMs+1000` evaluated = **8000 ms** — in the raw receipt (not a fixed label). Raw assertions filed at the swapped CP10 instant (expression `phases.blockWash.startMs+200` on the swapped schedule evaluated = **7350 ms**; measured fillByBlock.west = **0.3333333333333333** ∈ (0.20, 0.80), checkColor = #2563eb swapped active) and the swapped CP11 instant (`phases.blockWash.startMs+400` swapped = **7550 ms**; measured fillByBlock.west = **0.6666666666666666** ∈ (0.50, 0.95)). Cure 6's moved-probe set {CP08 6950 · CP09 7150 · CP10 7350 · CP11 7550 · CP12 7750} is now receipted whole.
- Cure 3 (config-census phases[] wording): config-census.md §2's grouped `phases[].id/startMs/endMs` row is split — runtime phases (read by `stateAt` via `prog()`) vs schedule-metadata phases (`substrateHold`: no state field reads it; `convertedHold`: boundaries supply harness timing only — startMs anchors the CP13 instant, no `prog()` read) — with the governing disposition for schedule-metadata phases recorded in that file (lawful CONFIG data keeping phases[] the sole contiguous timing authority; not an unapplied key; not a HIT). Census HIT count unchanged: **0 HITs**.
- A6 legs on the (unchanged) build: fit-table.md — **0 HITs** (label geometry untouched by the cures; rows stand bound to the same hash). config-census.md — **0 HITs** (wording reconciled per Cure 3).

### Own checks — RAW harness output, Cycle 038 (node harness over the PURE block of the filed build; exit 0)
Harness command: `node harness-t205-cycle038.js recreation.html` (harness extracts the /*PURE-START*/…/*PURE-END*/ block and evaluates stateAt + the renderer's own geometry helpers — fullGridX/fullGridY, splitGridX/splitGridXMirror, visibleCellStats, washVisibility, connectorGeometry, blockLabelText; exit 0).
```
validateConfig: true
PASS A9.3 full-lattice count :: built 612 = grid.cols*grid.rows = 34*18 vs source census 612
PASS A9.3 block cell count :: block west cells = 55 (5 cols x 11 rows = 55)
RENDERER full layout: gridX=77 gridY=59 intersecting=612 fullyWithin=612 visibleCols=0-33
PASS RENDERER full visible count :: full lattice fully within stage: 612
RENDERER split layout (disc-left): gridX expr = geom.discCenterXPx 190 + geom.discDiameterPx/2 170 + geom.connectorGapPx 160 = 520 intersecting=342 fullyWithin=324 visibleCols=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
PASS RENDERER split visible count :: columns 0-18 intersect (342), columns 0-17 fully within (324), column 18 partial at right edge
RENDERER split wash visibility: washRect stage x=516 y=127 w=118 h=262 visibleFraction=1.000 renderedOpacity at 7000ms = fillByBlock.west 1 * palette.fillAlpha 0.82 = 0.820
PASS RENDERER split wash visibility :: west wash rect fully within stage, opacity 0.82 at wash end
RENDERER split connector: from disc right edge 360 to grid left edge 520 lengthAtFull=160 contact diff at connectorProgress=1 = 0
PASS RENDERER split connector contact :: connector end == grid left edge, diff 0
durations derived: connectorExtend = 1200 layoutShift = 500
PASS derived connector duration :: 1200
PASS derived layout duration :: 500
CP01 instant expr phases.outlineDraw.startMs evaluated=0ms state={"ms":0,"outlineProgress":0,"layoutProgress":0,"discOpacity":0,"layout":"full","paperProgress":0,"paperLiftPx":0,"checkProgress":0,"checkColor":"#5b7a99","connectorProgress":0,"fillByBlock":{"west":0},"fadeProgress":0,"diagramOpacity":1}
PASS CP01 :: outline=0 exactly, layout=full, fill west=0, discOpacity=0 absent
CP01-ENDPOINT instant expr phases.outlineDraw.startMs + 0.30*(phases.outlineDraw.endMs - phases.outlineDraw.startMs) evaluated=570ms interior samples stateAt(0).outlineProgress=0 stateAt(285).outlineProgress=0.15 stateAt(569).outlineProgress=0.29947368421052634 endpoint state={"ms":570,"outlineProgress":0.3,"layoutProgress":0,"discOpacity":0,"layout":"full","paperProgress":0,"paperLiftPx":0,"checkProgress":0,"checkColor":"#5b7a99","connectorProgress":0,"fillByBlock":{"west":0},"fadeProgress":0,"diagramOpacity":1}
PASS CP01-ENDPOINT (amended rule, plan-amendment-cycle038.md C38-1) :: outlineProgress <0.30 on [0,570) at samples 0ms=0, 285ms=0.15, 569ms=0.29947368421052634; outlineProgress=0.3 <=0.30 at endpoint 570ms (endpoint IS the 30% instant by construction)
CP02 instant expr phases.outlineDraw.startMs+1000 evaluated=1000ms state={"ms":1000,"outlineProgress":0.5263157894736842,"layoutProgress":0,"discOpacity":0,"layout":"full","paperProgress":0,"paperLiftPx":0,"checkProgress":0,"checkColor":"#5b7a99","connectorProgress":0,"fillByBlock":{"west":0},"fadeProgress":0,"diagramOpacity":1}
PASS CP02 :: outline in (0.40,0.95) :: outlineProgress=0.5263157894736842
CP03 instant expr phases.outlineDraw.endMs+100 evaluated=2000ms state={"ms":2000,"outlineProgress":1,"layoutProgress":0,"discOpacity":0,"layout":"full","paperProgress":0,"paperLiftPx":0,"checkProgress":0,"checkColor":"#5b7a99","connectorProgress":0,"fillByBlock":{"west":0},"fadeProgress":0,"diagramOpacity":1}
PASS CP03 :: outline=1, layout=full, fillByBlock.west=0 (zero anchor)
CP04 instant expr phases.layoutShift.endMs evaluated=3000ms state={"ms":3000,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":0.15,"paperLiftPx":0,"checkProgress":0.08,"checkColor":"#5b7a99","connectorProgress":0,"fillByBlock":{"west":0},"fadeProgress":0,"diagramOpacity":1}
PASS CP04 :: layout=split, paper=geom.paperStubFraction 0.15 exactly, check=geom.checkStubTick 0.08 exactly, conn=0, fill=0
CP05 instant expr phases.checkDraw.startMs evaluated=4000ms state={"ms":4000,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":0.7166666666666667,"paperLiftPx":0,"checkProgress":0,"checkColor":"#5b7a99","connectorProgress":0,"fillByBlock":{"west":0},"fadeProgress":0,"diagramOpacity":1}
PASS CP05 :: paper in (0.50,0.95), check in [0,0.50] :: paper=0.7166666666666667 check=0
CP06 instant expr phases.checkDraw.endMs evaluated=5000ms state={"ms":5000,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":1,"paperLiftPx":0,"checkProgress":1,"checkColor":"#5b7a99","connectorProgress":0,"fillByBlock":{"west":0},"fadeProgress":0,"diagramOpacity":1}
PASS CP06 :: paper=1, check=1, checkColor=palette.checkIdle #5b7a99, conn=0, fill=0 (zero anchor)
CP07 instant expr phases.connectorExtend.startMs+1000 evaluated=6000ms state={"ms":6000,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":0.6666666666666667,"paperLiftPx":0,"checkProgress":0.6666666666666667,"checkColor":"#5b7a99","connectorProgress":0.8333333333333334,"fillByBlock":{"west":0},"fadeProgress":0,"diagramOpacity":1}
PASS CP07 :: connector in (0.30,0.90), fill=0 :: connector=0.8333333333333334
CP08 instant expr phases.connectorExtend.endMs evaluated=6200ms state={"ms":6200,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":0,"paperLiftPx":0,"checkProgress":0,"checkColor":"#5b7a99","connectorProgress":1,"fillByBlock":{"west":0},"fadeProgress":0,"diagramOpacity":1}
PASS CP08 :: connector=1 contact, paper=0 cast complete, fill=0 (zero anchor)
CP09 instant expr phases.blockWash.startMs evaluated=6400ms state={"ms":6400,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":1,"paperLiftPx":46,"checkProgress":1,"checkColor":"#d94f5c","connectorProgress":1,"fillByBlock":{"west":0},"fadeProgress":0,"diagramOpacity":1}
PASS CP09 :: paper=1 reappeared, lift=geom.paperLiftPx 46, fillByBlock.west in [0,0.20] wash onset, checkColor=palette.checkActive #d94f5c
CP10 instant expr phases.blockWash.startMs+200 evaluated=6600ms state={"ms":6600,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":1,"paperLiftPx":46,"checkProgress":1,"checkColor":"#d94f5c","connectorProgress":1,"fillByBlock":{"west":0.3333333333333333},"fadeProgress":0,"diagramOpacity":1}
PASS CP10 :: fillByBlock.west in (0.20,0.80) graded pale :: wash=0.3333333333333333
CP11 instant expr phases.blockWash.startMs+400 evaluated=6800ms state={"ms":6800,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":1,"paperLiftPx":46,"checkProgress":1,"checkColor":"#d94f5c","connectorProgress":1,"fillByBlock":{"west":0.6666666666666666},"fadeProgress":0,"diagramOpacity":1}
PASS CP11 :: fillByBlock.west in (0.50,0.95) strengthening :: wash=0.6666666666666666
CP12 instant expr phases.blockWash.endMs evaluated=7000ms state={"ms":7000,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":1,"paperLiftPx":46,"checkProgress":1,"checkColor":"#d94f5c","connectorProgress":1,"fillByBlock":{"west":1},"fadeProgress":0,"diagramOpacity":1}
PASS CP12 :: fillByBlock={west:1} block-keyed, connector=1, checkColor=active
CP13 instant expr phases.convertedHold.startMs+1000 evaluated=8000ms state={"ms":8000,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":1,"paperLiftPx":46,"checkProgress":1,"checkColor":"#d94f5c","connectorProgress":1,"fillByBlock":{"west":1},"fadeProgress":0,"diagramOpacity":1} blockKeyedComparison vs CP12: CP12.fillByBlock={"west":1} CP13.fillByBlock={"west":1} deepEqual=true connEqual=true fade=0 opacity=1
PASS CP13 :: converted hold at evaluated instant 8000ms block-keyed identical to CP12, fadeProgress=0, diagramOpacity=1 :: identity shown by printed comparison, not claimed
CP14 instant expr phases.fadeOut.endMs evaluated=9000ms state={"ms":9000,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":1,"paperLiftPx":46,"checkProgress":1,"checkColor":"#d94f5c","connectorProgress":1,"fillByBlock":{"west":1},"fadeProgress":1,"diagramOpacity":0.25}
PASS CP14 :: fadeProgress=1 AND diagramOpacity=fade.residualOpacity 0.25 exactly in [0.15,0.45] — both predicates asserted :: fade=1, opacity=0.25 residual, not vanished
SWAP delta = 750 swapped phases: outlineDraw[0,1900] substrateHold[1900,2500] layoutShift[2500,3000] paperGrow[3000,4500] checkDraw[4000,5000] connectorExtend[5000,6950] paperRetract[6650,6950] paperReappear[6950,7150] blockWash[7150,7750] convertedHold[7750,8200] fadeOut[8200,9000]
SWAP convertedHold duration redistributed: 1200 -> 450
PASS SWAP label :: CAST
PASS SWAP connector duration derived :: 1950
SWAP CP08 moved instant expr phases.connectorExtend.endMs evaluated=6950 state conn=1 paper=0 fillByBlock={"west":0}
PASS SWAP CP08 at moved instant 6950 :: contact/cast/zero-fill at 6950
SWAP CP09 moved instant (CONFIG expr phases.blockWash.startMs) = 7150 fillByBlock.west=0 checkColor=#2563eb paper=1
PASS SWAP CP09 wash onset moved 6400->7150 :: wash window 7150-7750, check blue-active
SWAP CP10 moved instant expr phases.blockWash.startMs+200 evaluated on swapped schedule=7350ms state={"ms":7350,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":1,"paperLiftPx":46,"checkProgress":1,"checkColor":"#2563eb","connectorProgress":1,"fillByBlock":{"west":0.3333333333333333},"fadeProgress":0,"diagramOpacity":1}
PASS SWAP CP10 at moved instant 7350 :: fillByBlock.west in (0.20,0.80) graded pale on swapped schedule :: wash=0.3333333333333333, checkColor=swapped active #2563eb
SWAP CP11 moved instant expr phases.blockWash.startMs+400 evaluated on swapped schedule=7550ms state={"ms":7550,"outlineProgress":1,"layoutProgress":1,"discOpacity":1,"layout":"split","paperProgress":1,"paperLiftPx":46,"checkProgress":1,"checkColor":"#2563eb","connectorProgress":1,"fillByBlock":{"west":0.6666666666666666},"fadeProgress":0,"diagramOpacity":1}
PASS SWAP CP11 at moved instant 7550 :: fillByBlock.west in (0.50,0.95) strengthening on swapped schedule :: wash=0.6666666666666666
SWAP CP12 moved instant=7750 fillByBlock={"west":1} fillColor=#2563eb
PASS SWAP wash full blue at 7750 :: blue wash full
PASS SWAP segment still ends 9000 :: 9000
MIRROR validate: true east cells = 55
MIRROR state at wash end: fillByBlock = {"east":1}
RENDERER mirror split layout: gridX=-366 intersecting=342 fullyWithin=324 visibleCols=15-33
RENDERER mirror wash visibility: washRect stage x=326.0 w=118 visibleFraction=1.000 renderedOpacity = 0.820
RENDERER mirror connector: from disc left edge 600 to grid right edge 440 lengthAtFull=160 contact diff = 0
PASS MIRROR+partition exercise :: ID-keyed east block fills, wash fully visible in mirror, connector contacts grid right edge diff 0; no west literal survives
BLOCKLABEL specimen: blockLabelText(CONFIG) = null -> renderer branch creates NO label element (absence applied)
BLOCKLABEL scratch: blockLabelText(scratch) = "WEST" -> renderer branch creates label element with this text
PASS BLOCKLABEL wiring :: helper gates the renderer branch; null = absence, set = element created
TOTAL FAILS = 0
```

### Other own-check raw outputs, Cycle 038 (on the unchanged build)
- Purity grep (guards cmd 1): `grep -nE "segment\.mp4|source\.webm|source\.mp4|<video|<img|ajavsMbCapY|t52-vote" recreation.html` → **exit 1, zero hits**. Asset inventory unchanged: recreation.html loads ZERO external assets.
- Syntax (guards cmd 3): inline script extracted → `node --check` → **OK** (exit 0).
- Seeded-RNG census (guards cmd 3): `grep -c "Math.random" recreation.html` → **0** — NONE-BY-DESIGN.
- `blockLabel` occurrences in the build: **6** (declaration, helper, renderer branch) — unchanged, X4 stands.
- Comparison check (§5 leg 3): comparison.html unchanged in Cycle 038 (sha256 `1f1f9bff4f45302f03625495c08f0b79a14be8bd4ab98fe6c12a5ddb17c10223` · 2,736 B); the Cycle 037 receipt stands. PIXEL-UNVERIFIED limitation stands (no browser binary in this seat).

### RECEIPT INDEX (A13) — re-reconciled for the Cycle 038 completion re-fire (A13.1 + A13.2 inheritance)
Reconciliation basis: guards.md commands 1–8 · the amended Plan's A11 assertions (CP01–CP14 as completed by Addendum 1 D2) INHERITED WHOLE from the Cycle 037 harness (A13.2 — every checkpoint the prior harness evaluated is carried below by name; the only additions are the three Cycle 038 cure receipts, each tied to plan-amendment-cycle038.md; NO assertion was dropped) · expected CONFIG keys from config-census.md §2 as revised in Cycle 038 (incl. the schedule-metadata disposition). Result: **RECONCILED — every line carries its receipt or a NOT-DEMANDED line with a governing citation; every receipt below is from the filed build (hash `64c7b9…d95b3`, unchanged in Cycle 038) unless it binds the segment/comparison, which no cure round changed.**

| # | Line | Receipt / disposition |
|---|---|---|
| G1 | guards cmd 1 — purity grep | RECEIPT: Cycle 038 re-run above, exit 1, zero hits |
| G2 | guards cmd 2 — swap test | RECEIPT: Cycle 038 harness SWAP block above — altered values exact (ballotLabel VOTE→CAST · connectorExtend.endMs 6200→6950 · palette fill/connector/checkActive #d94f5c→#2563eb); moved probes CP08 6950 · CP09 7150 · CP10 7350 · CP11 7550 · CP12 7750, each evaluated from its CONFIG expression on the swapped schedule, raw states printed |
| G3 | guards cmd 3 — syntax + RNG census | RECEIPT: Cycle 038 re-run above — node --check OK; Math.random count 0, NONE-BY-DESIGN |
| G4 | guards cmd 4 — scores arithmetic | NOT-DEMANDED at this step: seat-side recompute happens at consolidation in scores.md (guards.md cmd 4 is defined as the seat's recompute before scores.md prints a verdict) |
| G5 | guards cmd 5 — segment binding | RECEIPT: Cycle 037 filing stands (cut + ffprobe: duration 9.006983 s, h264 1920×1080, 215 frames, sha256 filed; decoded frames at 6.6/6.8/8.5 s + last frame) — segment.mp4 unchanged in Cycle 038; the playback characterization supersession at the end of this record stands |
| G6 | guards cmd 6 — measured-fit leg | RECEIPT: fit-table.md (2 PROXY measured rows, 0 HITs) — build unchanged in Cycle 038, rows re-bound to the same hash |
| G7 | guards cmd 7 — config-census leg | RECEIPT: config-census.md as revised in Cycle 038 (0 HITs; §2 phases[] row split runtime vs schedule-metadata with governing disposition, C38-3) |
| G8 | guards cmd 8 — census-anchor zero-state probes | RECEIPT: Cycle 038 harness CP03 (2000 ms, fillByBlock.west=0), CP06 (5000 ms, fillByBlock.west=0), CP08 (6200 ms, fillByBlock.west=0) lines above — raw results printed |
| A11-CP01 | 0 ms — outline start, disc absent | RECEIPT: Cycle 038 harness CP01 — instant = CONFIG expr phases.outlineDraw.startMs = 0; outlineProgress 0 exactly, layout full, fillByBlock.west 0, discOpacity 0 |
| A11-CP01-ENDPOINT | 570 ms — Cure 2 partial-outline bound at the CONFIG-derived 30% instant (NEW in Cycle 038, plan-amendment-cycle038.md C38-1) | RECEIPT: Cycle 038 harness CP01-ENDPOINT — instant = expr phases.outlineDraw.startMs + 0.30*(endMs − startMs) evaluated = 570 ms; interior samples 0 → 0, 285 → 0.15, 569 → 0.29947368421052634 (all < 0.30 on [0, 570)); endpoint outlineProgress = 0.3 exactly, satisfying the amended ≤ 0.30 endpoint rule |
| A11-CP02 | 1000 ms — outlines nearly complete | RECEIPT: Cycle 038 harness CP02 — instant = phases.outlineDraw.startMs + 1000; outlineProgress 0.5263157894736842 ∈ (0.40, 0.95) |
| A11-CP03 | 2000 ms — outlines complete, zero fill | RECEIPT: Cycle 038 harness CP03 — instant = phases.outlineDraw.endMs + 100 = 2000; outline 1, fillByBlock.west 0 |
| A11-CP04 | 3000 ms — split, stub + tick | RECEIPT: Cycle 038 harness CP04 — instant = phases.layoutShift.endMs = 3000; paper = geom.paperStubFraction 0.15, check = geom.checkStubTick 0.08 |
| A11-CP05 | 4000 ms — paper taller, check drawing | RECEIPT: Cycle 038 harness CP05 — instant = phases.checkDraw.startMs = 4000; paper 0.7166666666666667 ∈ (0.50, 0.95), check 0 ∈ [0, 0.50] |
| A11-CP06 | 5000 ms — paper/check complete idle, zero fill | RECEIPT: Cycle 038 harness CP06 — instant = phases.checkDraw.endMs = 5000; checkColor = palette.checkIdle #5b7a99, fillByBlock.west 0 |
| A11-CP07 | 6000 ms — connector ~83% | RECEIPT: Cycle 038 harness CP07 — instant = phases.connectorExtend.startMs + 1000; connector 0.8333333333333334 ∈ (0.30, 0.90), fill 0 |
| A11-CP08 | 6200 ms — contact + cast + zero fill | RECEIPT: Cycle 038 harness CP08 — instant = phases.connectorExtend.endMs = 6200; connector 1, paper 0, fillByBlock.west 0 |
| A11-CP09 | 6400 ms — reappeared high, wash onset | RECEIPT: Cycle 038 harness CP09 — instant = phases.blockWash.startMs = 6400; lift = geom.paperLiftPx 46, fillByBlock.west 0 ∈ [0, 0.20], checkColor = palette.checkActive |
| A11-CP10 | 6600 ms — wash graded pale | RECEIPT: Cycle 038 harness CP10 — instant = phases.blockWash.startMs + 200; fillByBlock.west 0.3333333333333333 ∈ (0.20, 0.80) |
| A11-CP11 | 6800 ms — wash strengthening | RECEIPT: Cycle 038 harness CP11 — instant = phases.blockWash.startMs + 400; fillByBlock.west 0.6666666666666666 ∈ (0.50, 0.95) |
| A11-CP12 | 7000 ms — wash full, block-keyed | RECEIPT: Cycle 038 harness CP12 — instant = phases.blockWash.endMs = 7000; fillByBlock = {"west":1} printed block-keyed, connector 1, checkColor active |
| A11-CP13 | converted hold, block-keyed comparison vs CP12 — instant printing cured in Cycle 038 (C38-2) | RECEIPT: Cycle 038 harness CP13 — instant printed AS its CONFIG expression `phases.convertedHold.startMs+1000` with evaluated value 8000 ms; CP12 and CP13 fillByBlock objects both printed, deepEqual=true, connEqual=true, fade 0, opacity 1 |
| A11-CP14 | 9000 ms — fade complete, residual opacity | RECEIPT: Cycle 038 harness CP14 — instant = phases.fadeOut.endMs = 9000; fadeProgress = 1 AND diagramOpacity = fade.residualOpacity 0.25 exactly ∈ [0.15, 0.45] — both predicates asserted and printed |
| SWAP-CP08 | swapped 6950 ms — contact + cast + zero fill | RECEIPT: Cycle 038 harness SWAP CP08 — instant = swapped phases.connectorExtend.endMs evaluated = 6950; conn 1, paper 0, fillByBlock {"west":0} |
| SWAP-CP09 | swapped 7150 ms — wash onset | RECEIPT: Cycle 038 harness SWAP CP09 — instant = swapped phases.blockWash.startMs = 7150; fillByBlock.west 0, checkColor #2563eb, paper 1 (movement 6400→7150 demonstrated) |
| SWAP-CP10 | swapped 7350 ms — wash graded pale (NEW receipt in Cycle 038, C38-2) | RECEIPT: Cycle 038 harness SWAP CP10 — instant = swapped phases.blockWash.startMs + 200 evaluated = 7350 ms; raw state printed; fillByBlock.west 0.3333333333333333 ∈ (0.20, 0.80), checkColor #2563eb |
| SWAP-CP11 | swapped 7550 ms — wash strengthening (NEW receipt in Cycle 038, C38-2) | RECEIPT: Cycle 038 harness SWAP CP11 — instant = swapped phases.blockWash.startMs + 400 evaluated = 7550 ms; raw state printed; fillByBlock.west 0.6666666666666666 ∈ (0.50, 0.95) |
| SWAP-CP12 | swapped 7750 ms — wash full blue | RECEIPT: Cycle 038 harness SWAP CP12 — instant = swapped phases.blockWash.endMs = 7750; fillByBlock {"west":1}, fillColor #2563eb |
| X1 | V2b filled-vs-unfilled contrast at 360 px stage | RECEIPT: Cycle 037 PIL rendered stand-in receipt stands (washed sample (222,108,118) vs unwashed (244,241,234), distance 177.8) — build unchanged in Cycle 038 |
| X2 | Mirror + partition renderer exercise | RECEIPT: Cycle 038 harness MIRROR + RENDERER mirror lines above (east fillByBlock=1, mirror visible 342 intersecting/324 fully within cols 15–33, wash visibleFraction 1.000, connector contact diff 0) |
| X3 | A9.3 count assertion + renderer visible counts | RECEIPT: Cycle 038 harness count + RENDERER lines above (612 / 55; full 612/612; split disc-left 342 intersecting cols 0–18 / 324 fully within) |
| X4 | blockLabel wiring (Addendum D4) | RECEIPT: Cycle 038 harness BLOCKLABEL lines above (specimen null → no element; scratch "WEST" → element text returned) + grep: `blockLabel` occurs 6× in the build (declaration, helper, renderer branch) |

=== CONFIG + PURE BLOCK (recreation.html, sha256 64c7b905300b689785b981d6723647d6b3357a90b0a6fbb7902e3e320c2d95b3, 18570 B) ===
/*PURE-START*/
const CONFIG = {
  content: {
    ballotLabel: "VOTE",
    blockLabel: null,
    checkPath: "M22 54 L42 74 L80 30"
  },
  grid: { cols: 34, rows: 18, cellPx: 14, gapPx: 10 },
  blocks: [
    { id: "west", colRange: [0, 4], rowRange: [3, 13], fillOrder: 1 }
  ],
  blocksToFill: 1,
  outlines: [
    { colRange: [0, 9], rowRange: [0, 6] },
    { colRange: [10, 20], rowRange: [0, 8] },
    { colRange: [21, 33], rowRange: [0, 5] },
    { colRange: [0, 12], rowRange: [7, 17] },
    { colRange: [13, 24], rowRange: [9, 17] },
    { colRange: [25, 33], rowRange: [6, 17] }
  ],
  palette: {
    ground: "#f4f1ea",
    cell: "#111111",
    outline: "#4a4a4a",
    disc: "#111111",
    box: "#e8e6e1",
    paper: "#ffffff",
    connector: "#d94f5c",
    fill: "#d94f5c",
    fillAlpha: 0.82,
    checkIdle: "#5b7a99",
    checkActive: "#d94f5c",
    texture: "#e3ded2",
    paperStroke: "#999999",
    boxStroke: "#555555",
    slot: "#333333",
    labelInkOnBox: "#222222"
  },
  ground: { textureOn: true },
  geom: {
    discDiameterPx: 340,
    boxScale: 1.0,
    connectorThicknessPx: 26,
    paperLiftPx: 46,
    paperStubFraction: 0.15,
    checkStubTick: 0.08,
    labelFontPx: 40,
    discCenterXPx: 190,
    paperWPx: 120,
    paperHPx: 170,
    boxWPx: 170,
    boxHPx: 74,
    ballotStackOffsetPx: 30,
    connectorGapPx: 160,
    outlinePadPx: 5,
    outlineStrokePx: 2.5,
    washPadPx: 4,
    paperStrokePx: 1.5,
    checkStrokePx: 11,
    checkOffsetXPx: 18,
    checkOffsetYPx: 34,
    checkScale: 0.84,
    checkPathLength: 120,
    boxStrokePx: 2,
    boxRadiusPx: 8,
    slotInsetPx: 14,
    slotHeightPx: 7,
    labelBaselineOffsetPx: 22,
    textureStepPx: 21,
    textureOffsetPx: 12,
    textureStrokePx: 1
  },
  layout: { side: "disc-left" },
  fade: { residualOpacity: 0.25 },
  stage: { widthPx: 960, heightPx: 540, durationMs: 9000 },
  phases: [
    { id: "outlineDraw",    startMs: 0,    endMs: 1900 },
    { id: "substrateHold",  startMs: 1900, endMs: 2500 },
    { id: "layoutShift",    startMs: 2500, endMs: 3000 },
    { id: "paperGrow",      startMs: 3000, endMs: 4500 },
    { id: "checkDraw",      startMs: 4000, endMs: 5000 },
    { id: "connectorExtend",startMs: 5000, endMs: 6200 },
    { id: "paperRetract",   startMs: 5900, endMs: 6200 },
    { id: "paperReappear",  startMs: 6200, endMs: 6400 },
    { id: "blockWash",      startMs: 6400, endMs: 7000 },
    { id: "convertedHold",  startMs: 7000, endMs: 8200 },
    { id: "fadeOut",        startMs: 8200, endMs: 9000 }
  ]
};
function phaseOf(cfg, id){ for (const p of cfg.phases) if (p.id === id) return p; throw new Error("unknown phase " + id); }
function phaseDuration(cfg, id){ const p = phaseOf(cfg, id); return p.endMs - p.startMs; }
function prog(cfg, id, ms){ const p = phaseOf(cfg, id); if (ms <= p.startMs) return 0; if (ms >= p.endMs) return 1; return (ms - p.startMs) / (p.endMs - p.startMs); }
function validateConfig(cfg){
  const ids = new Set();
  for (const b of cfg.blocks){
    if (ids.has(b.id)) throw new Error("duplicate block id " + b.id);
    ids.add(b.id);
    if (b.colRange[0] < 0 || b.colRange[1] >= cfg.grid.cols || b.rowRange[0] < 0 || b.rowRange[1] >= cfg.grid.rows)
      throw new Error("block " + b.id + " range outside grid");
  }
  if (cfg.blocksToFill > cfg.blocks.length) throw new Error("blocksToFill exceeds blocks");
  for (const p of cfg.phases){
    if (!(p.endMs > p.startMs)) throw new Error("phase " + p.id + " endMs<=startMs");
    if (p.startMs < 0 || p.endMs > cfg.stage.durationMs) throw new Error("phase " + p.id + " outside duration");
  }
  return true;
}
function pitch(cfg){ return cfg.grid.cellPx + cfg.grid.gapPx; }
function latticeSize(cfg){ return { w: cfg.grid.cols * cfg.grid.cellPx + (cfg.grid.cols - 1) * cfg.grid.gapPx, h: cfg.grid.rows * cfg.grid.cellPx + (cfg.grid.rows - 1) * cfg.grid.gapPx }; }
function fullGridX(cfg){ return (cfg.stage.widthPx - latticeSize(cfg).w) / 2; }
function fullGridY(cfg){ return (cfg.stage.heightPx - latticeSize(cfg).h) / 2; }
function splitGridX(cfg){ return cfg.geom.discCenterXPx + cfg.geom.discDiameterPx / 2 + cfg.geom.connectorGapPx; }
function splitGridXMirror(cfg){ return cfg.stage.widthPx - splitGridX(cfg) - latticeSize(cfg).w; }
function gridXAt(cfg, mirror, layoutProgress){ const fx = fullGridX(cfg); const sx = mirror ? splitGridXMirror(cfg) : splitGridX(cfg); return fx + (sx - fx) * layoutProgress; }
function visibleCellStats(cfg, mirror, split){
  const gx = split ? gridXAt(cfg, mirror, 1) : fullGridX(cfg), gy = fullGridY(cfg), pt = pitch(cfg);
  let intersecting = 0, fullyWithin = 0; const cols = new Set(), fullyCols = new Set();
  for (let r = 0; r < cfg.grid.rows; r++) for (let c = 0; c < cfg.grid.cols; c++){
    const x = gx + c * pt, y = gy + r * pt;
    const inter = x < cfg.stage.widthPx && x + cfg.grid.cellPx > 0 && y < cfg.stage.heightPx && y + cfg.grid.cellPx > 0;
    const full = x >= 0 && x + cfg.grid.cellPx <= cfg.stage.widthPx && y >= 0 && y + cfg.grid.cellPx <= cfg.stage.heightPx;
    if (inter){ intersecting++; cols.add(c); }
    if (full){ fullyWithin++; fullyCols.add(c); }
  }
  const sorted = a => Array.from(a).sort((p, q) => p - q);
  return { gridX: gx, gridY: gy, intersecting, fullyWithin, visibleCols: sorted(cols), fullyWithinCols: sorted(fullyCols) };
}
function washVisibility(cfg, b, mirror){
  const gx = gridXAt(cfg, mirror, 1), gy = fullGridY(cfg), br = blockRect(cfg, b);
  const x = gx + br.x - cfg.geom.washPadPx, y = gy + br.y - cfg.geom.washPadPx, w = br.w + 2 * cfg.geom.washPadPx, h = br.h + 2 * cfg.geom.washPadPx;
  const ix = Math.max(0, Math.min(x + w, cfg.stage.widthPx) - Math.max(x, 0)), iy = Math.max(0, Math.min(y + h, cfg.stage.heightPx) - Math.max(y, 0));
  return { x, y, w, h, visibleFraction: (ix * iy) / (w * h) };
}
function connectorGeometry(cfg, mirror){
  const discCx = mirror ? cfg.stage.widthPx - cfg.geom.discCenterXPx : cfg.geom.discCenterXPx;
  const from = mirror ? discCx - cfg.geom.discDiameterPx / 2 : discCx + cfg.geom.discDiameterPx / 2;
  const gx = gridXAt(cfg, mirror, 1);
  const target = mirror ? gx + latticeSize(cfg).w : gx;
  return { from, target, lengthAtFull: Math.abs(target - from) };
}
function blockLabelText(cfg){ return cfg.content.blockLabel; }
function totalCells(cfg){ return cfg.grid.cols * cfg.grid.rows; }
function blockCellCount(cfg, b){ return (b.colRange[1] - b.colRange[0] + 1) * (b.rowRange[1] - b.rowRange[0] + 1); }
function blockRect(cfg, b){
  const pt = pitch(cfg);
  return { x: b.colRange[0] * pt, y: b.rowRange[0] * pt, w: (b.colRange[1] - b.colRange[0] + 1) * pt - cfg.grid.gapPx, h: (b.rowRange[1] - b.rowRange[0] + 1) * pt - cfg.grid.gapPx };
}
function stateAt(cfg, ms){
  const outlineProgress = prog(cfg, "outlineDraw", ms);
  const layoutProgress = prog(cfg, "layoutShift", ms);
  const layout = layoutProgress >= 1 ? "split" : (layoutProgress > 0 ? "shifting" : "full");
  const grow = prog(cfg, "paperGrow", ms);
  let paperProgress = cfg.geom.paperStubFraction + (1 - cfg.geom.paperStubFraction) * grow;
  if (ms < phaseOf(cfg, "paperGrow").startMs) paperProgress = 0;
  const retract = prog(cfg, "paperRetract", ms);
  if (retract > 0) paperProgress = paperProgress * (1 - retract);
  const reappear = prog(cfg, "paperReappear", ms);
  if (phaseOf(cfg, "paperReappear").startMs <= ms) paperProgress = reappear;
  const paperLiftPx = cfg.geom.paperLiftPx * reappear;
  let checkProgress = prog(cfg, "checkDraw", ms);
  if (ms < phaseOf(cfg, "checkDraw").startMs && paperProgress > 0 && retract === 0) checkProgress = cfg.geom.checkStubTick;
  if (retract > 0 && reappear === 0) checkProgress = checkProgress * (1 - retract);
  if (phaseOf(cfg, "paperReappear").startMs <= ms) checkProgress = reappear > 0 ? 1 : checkProgress;
  const connectorProgress = prog(cfg, "connectorExtend", ms);
  const washStart = phaseOf(cfg, "blockWash").startMs;
  const checkColor = ms >= washStart ? cfg.palette.checkActive : cfg.palette.checkIdle;
  const fillByBlock = {};
  const ordered = cfg.blocks.slice().sort((a, b) => a.fillOrder - b.fillOrder);
  for (const b of cfg.blocks) fillByBlock[b.id] = 0;
  for (let i = 0; i < Math.min(cfg.blocksToFill, ordered.length); i++) fillByBlock[ordered[i].id] = prog(cfg, "blockWash", ms);
  const fadeProgress = prog(cfg, "fadeOut", ms);
  const diagramOpacity = 1 - (1 - cfg.fade.residualOpacity) * fadeProgress;
  return { ms, outlineProgress, layoutProgress, discOpacity: layoutProgress, layout, paperProgress, paperLiftPx, checkProgress, checkColor, connectorProgress, fillByBlock, fadeProgress, diagramOpacity };
}
/*PURE-END*/

=== PACKET SECTION (T205, techniques-diagrams.md + segment binding) ===
### T205 — Vote-to-grid conversion diagram (P12 T04) ◆ — OWED #96
- Tier: DESCRIBED — OWED #96
- Mechanics: the ballot icon connects by a red bar to a grid of squares that fills red in blocks — a vote entering at left exits as allocated blocks at right. Operation: dot/square fill as conversion, drawn left-to-right in reading order. The film's central abstraction (your vote is converted, not counted) drawn as a literal machine before any state is named.
- Feeds: diagram — P12 @ 0:37–1:00 — ev/t52-vote-to-grid.jpg
- Source: Packet #12 (Vox "The Electoral College, explained", ajavsMbCapY), digest-local T04; segment bound at source 37.0–46.0 s (buildMs = sourceMs − 37000). Census anchors CP01–CP14 per plan-amendment-cycle037.md Cure 1 as amended by plan-amendment-cycle037-addendum1.md and plan-amendment-cycle038.md.

=== GUARDS COMMAND LIST (guards/guards.md) ===
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

=== A6 LEG 1: FIT TABLE (fit-table.md) ===
# T205 — Measured-fit leg (A6 / guard-measured-fit) — final build (completion cure round, Cycle 037)

Build: recreation.html sha256 `64c7b905300b689785b981d6723647d6b3357a90b0a6fbb7902e3e320c2d95b3` (18,570 B). Re-run on the cured final build by the completion builder (label geometry unchanged by the cure round; hash re-bound, measurements re-measured, not carried).
Instrument (A12.2 form (ii)): rendered measurement with a NAMED stand-in font — PIL 10.2.0, DejaVu Sans Bold (`/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf`), rendered at 4× supersample and divided back; rows labeled PROXY. Stage scale: 360/960 = 0.375. The build's label font stack is Georgia/serif bold; DejaVu Sans Bold is the stand-in (wider than Georgia bold, so widths are conservative).

| Element | Container | Instrument | Fitted geometry | Measured ink bounds | Container bounds | Margin (binding side) |
|---|---|---|---|---|---|---|
| content.ballotLabel "VOTE" (SVG text on ballot box) | ballot box, geom.boxWPx 170 design px | PIL rendered measurement, PROXY DejaVu Sans Bold, font geom.labelFontPx 40 design px → 15.00 px at 360 stage | text-anchor middle at disc centre | ink 116.0 × 30.2 design px → **43.5 × 11.3 px at 360 stage** | 170 design px → 63.8 px at 360 stage | width margin 20.2 px at stage; ink height 11.3 px vs ~11 px floor — PASS (above floor, thin margin noted) |
| content.ballotLabel swap "CAST" | same box | same instrument, same size | same | ink 114.5 × 30.2 design px → **42.9 × 11.3 px at 360 stage** | 63.8 px at stage | width margin 20.8 px; ink height 11.3 px — PASS |
| content.blockLabel | — | NOT APPLICABLE: CONFIG value is null (absence is the specimen value; the converting block carries no label) — no text element exists to measure | — | — | — | — |

Hierarchy check (guard check 4): only one subject text element exists; no neighbouring-text hierarchy is claimed. N/A printed, not skipped silently.

## HIT list
**EMPTY — 0 HITs.** Note carried (not a HIT): the label ink height at phone width is 11.3 px against the ~11 px floor — the floor passes with 0.3 px margin under a wider-than-build stand-in font; the readability lens prices motion legibility separately.

=== A6 LEG 2: CONFIG CENSUS (config-census.md, Cycle 038 revised) ===
# T205 — Config-census leg (A6 / guard-config-census v3.1) — final build (completion cure round, Cycle 037)

Build: recreation.html sha256 `64c7b905300b689785b981d6723647d6b3357a90b0a6fbb7902e3e320c2d95b3` (18,570 B). Re-scanned on the cured final build by the completion builder (cure round changed renderer geometry + wired `content.blockLabel`; see §2/§4 updates below). **Cycle 038 completion revision (2026-11-18, Wave 35):** the build is UNCHANGED in Cycle 038 (same hash/size); this census is revised ONLY in §2's grouped `phases[]` row — split into runtime phases vs schedule-metadata phases (substrateHold · convertedHold) with the governing disposition for schedule-metadata phases recorded (plan-amendment-cycle038.md C38-3, curing jev-prewave firing-2 finding 3). All other rows and the 0-HIT count stand as re-verified against the unchanged build.
Method: all-literal scan over (a) the PURE block after the CONFIG literal and (b) the DOM/render section; per-constant classification; key→site resolution incl. nested/array keys; CSS-variable setter check.

## 1. All-literal scan
- PURE logic after CONFIG: numeric literals = {0, 1, 2} only (identity/boundary constants in prog/stateAt + halving in centre derivations and `2 * pad` in wash geometry — structural). Hex literals after CONFIG: **none**.
- DOM/render section: hex literals: **none** (the texture tint `#e3ded2` found in the first draft was CURED pre-filing by moving it to `palette.texture`; paper/box/slot strokes likewise moved to palette keys). Numeric literals: {0, 1, 2, 3, 2000} — classified: 0/1 = SVG attribute zeros and opacity identities (structural) · 2 = halving in centre derivations `(width − gridW)/2` and `2 * pad` (structural identity) · 3 = `toFixed(3)` opacity print precision (structural) · 2000 = the SVG namespace URI `http://www.w3.org/2000/svg` (structural string, not a value).
- Page CSS (head style): `#e9e6df` page background + control sizing — page chrome outside the stage subject; classified structural (does not shape the diagram; the stage ground is `palette.ground`).
- Subject-shaping literals outside CONFIG: **0**.

## 2. Key → application-site resolution (every CONFIG key; value-flow sites)
| Key | Site(s) where the value flows into the subject |
|---|---|
| content.ballotLabel | label text element textContent |
| content.blockLabel | renderer branch (WIRED in the completion cure round, Addendum 1 D4): pure helper `blockLabelText(cfg)` returns the value; the DOM renderer creates a block-label text element over each block's rect iff the helper returns non-null — specimen value null → no element created (absence applied, demonstrated in the harness BLOCKLABEL receipts) |
| content.checkPath | check path `d` attribute (specimen + swap, one binding) |
| grid.cols / grid.rows | cell generation loops; totalCells; block range validation |
| grid.cellPx / grid.gapPx | pitch(); every cell rect x/y/width/height; blockRect |
| blocks[].id | wash rect map key; fillByBlock key; stateAt fill assignment |
| blocks[].colRange / rowRange | blockRect (wash geometry); blockCellCount; validateConfig bounds |
| blocks[].fillOrder | stateAt ordering of fills |
| blocksToFill | stateAt fill loop bound |
| outlines[].colRange / rowRange | outline path geometry generation |
| palette.ground | stage background rect fill |
| palette.cell | every cell rect fill |
| palette.outline | outline group stroke |
| palette.disc | disc circle fill |
| palette.box / palette.paper | box rect fill / paper rect fill |
| palette.connector / palette.fill | connector rect fill / wash rect fill |
| palette.fillAlpha | wash rect opacity = fillProgress × fillAlpha (render) |
| palette.checkIdle / palette.checkActive | stateAt checkColor → check path stroke |
| palette.texture / paperStroke / boxStroke / slot / labelInkOnBox | texture lines stroke / paper stroke / box stroke / slot fill / label fill |
| ground.textureOn | texture line generation branch |
| geom.discDiameterPx | disc circle r |
| geom.boxScale | paper/box width+height scaling |
| geom.connectorThicknessPx | connector rect height |
| geom.paperLiftPx | stateAt paperLiftPx → paper/check y in render |
| geom.paperStubFraction | stateAt paperProgress during paperGrow |
| geom.checkStubTick | stateAt checkProgress before checkDraw |
| geom.labelFontPx | label font-size |
| geom.discCenterXPx / paperWPx / paperHPx / boxWPx / boxHPx / ballotStackOffsetPx / connectorGapPx / outlinePadPx / outlineStrokePx / washPadPx / paperStrokePx / checkStrokePx / checkOffsetXPx / checkOffsetYPx / checkScale / checkPathLength / boxStrokePx / boxRadiusPx / slotInsetPx / slotHeightPx / labelBaselineOffsetPx / textureStepPx / textureOffsetPx / textureStrokePx | each read at its named render site (disc centre, paper/box rects, stack offsets, outline/wash padding, strokes, check transform, slot, label baseline, texture loop); connectorGapPx specifically: `splitGridX()` derives the split grid left edge (disc centre + disc radius + gap) → renderer split translation + `connectorGeometry` target + `visibleCellStats`/`washVisibility` receipts |
| layout.side | mirror branch (disc centre + connector direction + split geometry mirrored via `splitGridXMirror`) |
| layout.splitFirstVisibleCol | REMOVED in the completion cure round (Addendum 1 D1): its only sites were the superseded split formula that priced the crop on the wrong side; split visibility is now derived geometrically by `visibleCellStats` from `splitGridX`. Not a CONFIG key on the final build — printed here so the removal is reconciled, not silent |
| fade.residualOpacity | stateAt diagramOpacity → root group opacity |
| stage.widthPx / heightPx / durationMs | SVG viewBox; texture loop bound; validateConfig phase bounds; player end |
| phases[].id/startMs/endMs — RUNTIME phases (outlineDraw · layoutShift · paperGrow · checkDraw · connectorExtend · paperRetract · paperReappear · blockWash · fadeOut) | phaseOf/prog — the SOLE timing authority; each of these phases' progress value is read by `stateAt` via `prog()` and drives a rendered state field |
| phases[].id/startMs/endMs — SCHEDULE-METADATA phases (substrateHold · convertedHold) — Cycle 038 reconciliation (plan-amendment-cycle038.md C38-3, curing jev-prewave firing-2 finding 3) | NO independent runtime/renderer effect, named as metadata: `substrateHold` is read by NO state field — its interval [1900, 2500] is the gap the outline-complete state persists through between outlineDraw completion and layoutShift start. `convertedHold`'s boundaries supply HARNESS TIMING ONLY — its startMs anchors the CP13 evaluation instant (`phases.convertedHold.startMs + 1000`) and its endMs coincides with fadeOut's start; the held rendered state itself is produced by blockWash completion (fillByBlock.west = 1) persisting while fadeOut has not started, not by any convertedHold progress read (no `prog(cfg, "convertedHold", …)` call exists in the build). GOVERNING DISPOSITION for schedule-metadata phases: a phases[] entry whose only role is schedule metadata is lawful CONFIG data — it keeps phases[] the sole, contiguous timing authority (plan-amendment-cycle037.md Cure 5) — and is NOT an unapplied key, provided the census names it as metadata, as this row now does. It is counted neither as a value-flow site nor as a HIT. |

## 3. CSS-variable setter check
The build uses **no CSS variables** for CONFIG consumption (values flow through JS/SVG attributes). No unset-variable references exist. Check prints: NONE-BY-DESIGN.

## HIT list
**EMPTY — 0 HITs on the final build (unchanged in Cycle 038; §2 phases[] wording reconciled per C38-3 — a wording/disposition cure, not a HIT cure: the two schedule-metadata phases are now named as metadata under the governing disposition in §2, and no key's application state changed).** Cure history (priced, not hidden): the first-draft scan found two unapplied keys (`palette.labelInk`, `content.checkViewBox`) and one subject-shaping literal outside CONFIG (`#e3ded2` texture tint, plus paper/box/slot stroke hexes in the renderer). All were cured BEFORE any firing — keys deleted, hexes moved to palette keys, renderer geometry moved to geom.* keys — and own-checks + this census were re-run on the cured build. Completion cure round (Cycle 037, jev-prewave firing-1 finding 4): the earlier version of this census claimed a renderer branch for `content.blockLabel` that the build did not carry (the key occurred only at its declaration) — cured by WIRING the branch (Addendum 1 D4, harness BLOCKLABEL receipts in build-record.md), not by editing the claim. The same round removed `layout.splitFirstVisibleCol` + `geom.splitRightMarginPx` (superseded split formula, Addendum 1 D1) and added `geom.connectorGapPx`. The census on the completion-final build finds: 0 subject-shaping literals outside CONFIG · every CONFIG key resolved to a value-flow site · no CSS variables in play.

=== PLAN AMENDMENT CYCLE 038 (plan-amendment-cycle038.md) ===
# T205 — Plan Amendment, Cycle 038 completion (Wave 35) — A12.3 completion cures

Authority: filed by the Cycle 038 completion builder under Amendment A12.3, curing jev-prewave firing 2 (HOLD — ASSERTED-CHECKS; return filed verbatim at `codex/jev-prewave-refire.md`, 254,001 B, sha256 `2f2fccf0aa389263ab7d70f1299e13c889f56fcecd6376ddbb35eb4921ca9a71`). Firing 2 was the ORIGINAL attempt's second firing inside Cycle 037 under the two-firing form — NOT a completion re-fire (scores.md supersession, 2026-11-18 Wave 34 Condense). This completion re-fire is therefore authorized under A12.3 with no HQ authorization. This amendment governs where it differs from `plan-amendment-cycle037.md` and `plan-amendment-cycle037-addendum1.md`; neither earlier file is retro-edited. The build is NOT changed by this amendment: recreation.html stands at sha256 `64c7b905300b689785b981d6723647d6b3357a90b0a6fbb7902e3e320c2d95b3` · 18,570 B.

## Cure C38-1 — CP01 endpoint bound: governing endpoint rule amended (firing-2 finding 1, option (a))

**The defect as priced.** `plan-amendment-cycle037.md` Cure 2 prescribes `outlineProgress < 0.30` across the interval ending at the CONFIG-derived 30% point (570 ms = `phases.outlineDraw.startMs + 0.30 × (phases.outlineDraw.endMs − phases.outlineDraw.startMs)` = 0 + 0.30 × 1900). The build's `prog()` is linear in the phase, so at the endpoint instant itself `stateAt(570).outlineProgress` is exactly 0.30 by construction — the strict bound as written is unsatisfiable AT the very instant it names, for any faithful linear draw-on. Firing 2 evaluated `stateAt(570)` itself and returned exactly 0.30.

**Option chosen: (a) amend the governing endpoint rule — not (b) change the build.** Reasoning: the build's intent, and the census intent Cure 2 encodes, is that the outline draw REACHES exactly 30% at the 30% instant — the 570 ms point is defined as the moment the draw crosses 30%, not a moment before it. Option (b) (making `stateAt(570) < 0.30`) would require the draw to lag its own linear schedule at exactly one instant — a non-linear kink or an epsilon offset — which would falsify every other CP02/CP03 outline receipt that prices the same linear `prog()` (CP02 at 1000 ms = 0.526 is the same line evaluated later) and would make the build LESS faithful to the measured draw-on, curing a wording defect by introducing a motion defect. The defect is in the rule's endpoint quantifier, not in the build.

**Amended rule (governs from this filing):** Cure 2's bound reads — `outlineProgress < 0.30` on the half-open interval **[0, 570)**, and `outlineProgress ≤ 0.30` **at the endpoint 570 ms itself**, where the value is exactly 0.30 by construction (the endpoint IS the 30% instant). CP01's prescribed state is otherwise unchanged (outlineProgress = 0 exactly at t = 0; layout = full; fill = 0; disc absent). The substrate is never prescribed complete before CP03 — unchanged.

**Receipt required and filed:** an indexed executable receipt at the CONFIG-derived instant (570 ms, expression printed + evaluated) with the raw `stateAt` result, plus interior samples on [0, 570) demonstrating the strict bound — filed in `build-record.md` under "Cycle 038 completion cures" (receipt line A11-CP01-ENDPOINT in the A13 index) from an actual harness run over the filed build.

## Cure C38-2 — CP13 evaluated-instant printing + swapped CP10/CP11 receipts (firing-2 finding 2)

No plan text changes; this is a receipt-form cure, executed in the Cycle 038 harness run and filed raw in `build-record.md`:
- The CP13 receipt prints its evaluated CONFIG instant — expression `phases.convertedHold.startMs + 1000` with its evaluated value — in the raw harness line, not a fixed `8000ms` label. (The evaluated value IS 8000 ms on the specimen schedule; what changes is that the receipt now shows the expression and its evaluation, per A12/A13 receipt validity.)
- Raw assertions are filed at the swapped CP10 instant (CONFIG expression `phases.blockWash.startMs + 200` evaluated on the SWAPPED schedule = 7350 ms; prescribed: fillByBlock.west ∈ (0.20, 0.80), checkColor = swapped active) and the swapped CP11 instant (`phases.blockWash.startMs + 400` on the swapped schedule = 7550 ms; prescribed: fillByBlock.west ∈ (0.50, 0.95)). These join the already-filed swapped CP08 (6950 ms), CP09 (7150 ms) and CP12 (7750 ms) receipts, completing Cure 6's moved-probe set {CP08, CP09, CP10, CP11, CP12}.

## Cure C38-3 — Config-census phases[] coverage wording (firing-2 finding 3)

Executed in `config-census.md` (Cycle 038 revision of §2's grouped `phases[].id/startMs/endMs` row + a governing-disposition note): the row is split by actual use — phases whose boundaries drive `stateAt` progress values via `prog()` are runtime phases; `substrateHold` and `convertedHold` are **schedule-metadata phases**: their boundaries have no independent renderer effect — `substrateHold`'s interval is the gap the outline-complete state persists through (no state field reads it), and `convertedHold`'s boundaries supply harness timing/duration (its startMs anchors the CP13 evaluation instant; its endMs bounds the fade start derivation) while the held state itself is produced by `blockWash` completion + `fadeOut` not yet started. Governing disposition: a phase entry whose only role is schedule metadata is lawful CONFIG data (it keeps `phases[]` the sole, contiguous timing authority per Cure 5) and is NOT an unapplied key, provided the census names it as metadata — which the revised census now does. No build change; no HIT is created or hidden by this disposition: the census HIT count is re-printed in the revised file.
