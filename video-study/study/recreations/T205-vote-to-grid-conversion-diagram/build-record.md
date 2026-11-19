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


### jev-prewave completion re-fire (Cycle 038, A12.3) — outcome + disposition
- Fired on the filed build (hash `64c7b9…d95b3`, unchanged); payload 97,027 chars (`jev-prewave-completion-payload-cycle038.md` in this directory), size+tail verified before firing; one stream (`cat payload | codex exec`, local binary, NO stdin field), exit 0; return 189,635 B, size+tail verified. Raw return filed verbatim at `codex/jev-prewave-completion-cycle038.md` (sha256 `a26d79a6873d8daaafd35dd7f41fcfbbce07ff503d3980e98877557a05e5b45e`, identical to `codex/jev-prewave-completion-cycle038.raw`).
- **Verdict: HOLD — ASSERTED-CHECKS.** Dimensions: parameterization **0.85** · purity pre-check **1.00** · own-checks completeness **0.45** · fidelity-plan honesty **1.00**.
- Disposition: **APPLIED — HOLD branch: the five-lens wave is NOT fired; NO VERDICT is filed (scores.md Cycle 038 section).** The return confirms all three Cycle 038 cures landed (570 ms endpoint reproduced · CP13 evaluated instant · swapped CP10/CP11 at 7350/7550 · C38-3 census disposition). Two new receipt defects are priced as the cure list in scores.md: (1) receipt-expression completeness — SWAP-CP12's raw line omits its evaluated expression and the CP01-ENDPOINT interior samples + geometry probe times are fixed timestamps in the harness rather than CONFIG-derived prints; (2) the connector contact receipt evaluates the pure `connectorGeometry()` helper while the SVG renderer computes connector x/width separately — a renderer-attribute receipt (or a shared-function assertion) is required. This was the single A12.3 completion re-fire and it HOLDed: any further cure + re-fire is **PENDING AUTHORIZATION (HQ)**.
