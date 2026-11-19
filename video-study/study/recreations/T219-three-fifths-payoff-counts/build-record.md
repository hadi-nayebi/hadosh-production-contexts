# T219 — build record · Cycle 039 Wave 36 · FIRST ATTEMPT

- **Build:** `recreation.html` — sha256 `877ba1e2b3d22f320c88e4ee5abb9de60cb7d45e9a0e039d9f00a56c17ccba91`, 12,822 B. One self-contained HTML: CONFIG (`t219-config`) + pure logic (`t219-logic`, `stateAt` exposed as `window.__T219`) + SVG render (`t219-render`). No captions/subtitles; no specimen media.
- **Segment:** `segment.mp4` — source.webm window 304.5–331.5 s (305–331 ± 0.5 s handles), h264 1920×1080 + AAC, duration 27.023 s, 2,343,683 B, sha256 `2c215921c4359364948135dbb5d6cf72f1e1f2a2eac5b6ebf0109b6801e3b7f5`.
- **Comparison:** `comparison.html` — sha256 `a2e4b0d53f2effa3a40c62cf02e9d5054ec20340c7e8bf2832967b2dd8a9fd77`, 3,020 B.
- **Phase A:** `item-T219-observe-plan.md` in the wave run dir; four Phase A firings filed there with dispositions at its §2b (codex-observe CONFIRMED-WITH-GAPS · jev-observe-exit ADVANCE-WITH-GAPS · codex-plan-review REVISE · jev-plan-exit REVISE — all cures applied to the Plan before Execute; the build implements the AMENDED parameter table).
- **Fit cure during Verify (A6):** two first-pass fit HITs cured in CONFIG (rowLabelFontPx 36→34; tagFontPx 30→40 + tagWPx/tagHPx widened + tileGapPx 210→190) and the tag/banner text fill bound to `palette.tagText`; harness re-run on the cured build (below). Recorded in fit-table.md.

## Own checks — RAW harness output (node, config+logic extracted from the final build; harness v2 after the prewave cure round — every probe instant is a CONFIG expression; 25/25 PASS)

```
PASS VALIDATE-DEFAULT :: ok=true errors=[]
PASS DERIVE :: completeAtMs=16500 durationMs=26000
PASS COUNT-SOURCE :: states=2 sourceElectors=21+15=36 builtSum=36
PASS CP0@expr(tIconMs)=0 :: iconP=1 bannerP=1 tileP=0,0 squares=0,0
PASS P1@expr(tIconMs+iconHoldMs+iconOutDurMs)=1800 :: iconP=0
PASS TILE-EARLY@expr(tTilesMs+tileDurMs/13)=2000 :: PA tileP=0.2135 PA scale=0.5281 VA tileP=0
PASS TILE-MID@expr(tTilesMs+tileDurMs*11/13)=4000 :: PA tileP=0.9964 VA tileP=0.9585 freeP=0
PASS P2@expr(tTilesMs+maxEnter*tileStaggerMs+tileDurMs)=4900 :: tileP=1,1 freeP=0
PASS FREE-DONE@expr(tFreeMs+freeDurMs)=5600 :: freeP=1 frameP=0 squares=0
PASS MID-HOLD@expr((freeEnd+tFrameMs)/2)=7050 :: priced fields equal to FREE-DONE probe
PASS P3@expr(tFrameMs+frameDurMs/2)=9000 :: frameP=0.5 (raw phase 0.5, eased printed separately) VA=0.5 PA=0
PASS FRAME-DONE@expr(tFrameMs+frameDurMs)=9500 :: frameP=1 tagP=0 squares=0
PASS TAG-ZERO@expr((frameEnd+tTagMs)/2)=11000 :: tagP=0 frameP=1 squares=0
PASS TAG-DONE@expr(tTagMs+tagDurMs)=13000 :: tagP=1 squares=0
PASS P4@expr(tSquaresMs+14*squareStaggerMs+squareFadeMs*0.575)=16000 :: VA sq[0]=1 sq[14]=0.6117 (raw phase 0.575) sq[20]=0 PA visSum=14.35 numeralP=1
PASS COUNTS@expr(completeAtMs+500)=17000 :: VA full=21 PA full=15 numerals=21/15 builtSum=36
PASS HOLD-LATE@expr(completeAtMs+holdMs*7/19)=20000 :: priced fields equal to COUNTS probe
PASS P5@expr(completeAtMs+500) :: priced fields (excl. t) identical
PASS SWAP-CONTENT :: frame on Beta=1 Alpha=0 counts 7/9 Beta enslavedText=120,000
PASS SWAP-TIMING :: P4 probe instant 16000 -> 17500; completeAt 16500 -> 18000
PASS SWAP-TIMING-TILES :: tileEarly 2000 -> 2500 (PA tileP=0.2135) tileMid 4000 -> 4500 (VA tileP=0.9585) — probes moved AND values reproduce
PASS SWAP-NEGATIVE-SQUARES :: errors=["phase order: squares start 9000 before tag end 13000"]
PASS SWAP-NEGATIVE-ICONSTART :: errors=["phase order: tiles start 1800 before icon exit end 3800"]
PASS SWAP-PALETTE :: frameFill=#2e9e6b enslavedNumFill=#2e9e6b
PASS COMPARISON-CLAMP :: comparison reads derive(CONFIG).durationMs live; timing-swapped CONFIG duration = 27500 (default 26000) so the clamp moves with CONFIG
SUMMARY pass=25 fail=0
```

- **Count assertion (A9.3):** source states = 2, source electors 21 + 15 = 36 — built squaresFull at completion = 21 + 15 = 36 (COUNT-SOURCE + `COUNTS@expr(completeAtMs+500)=17000` receipt). MATCH. [Cycle 040 completion cure 2: the stale `C@18000` reference that stood here is replaced by the filed COUNTS receipt, per prewave firing 2.]
- **Swaps run SEPARATELY** (jev-plan-exit cure): content (tagged + enterIdx slots flipped — frame/tag follow `tagged`, entry order follows `enterIdx`, counts follow data) · timing (probe instant + completeAt both moved by the CONFIG delta) · palette (frame rect fill AND enslaved-number fill both derive from `palette.frame`) · two negative tests (phase-order violations rejected by validateConfig with named errors).
- **Syntax:** `node --check` rc=0 on all three recreation scripts + the comparison script.
- **Purity grep** on recreation.html for `segment\.mp4|source\.webm|source\.mp4|<video|<img|ajavsMbCapY` → **0 hits**; `Math.random` → **0 hits** (no RNG anywhere). One `src=` pattern hit is the JS identifier `const src=cfg.states[idx]` — a local variable, never fetched. No external references in the recreation (no src/href/@import/url() loads).
- **Comparison checks:** labels "ORIGINAL — Vox Electoral College @ 5:05–5:31" ×1 · "RECREATION — T219 three-fifths payoff counts, parameterized" ×1 · `HANDLE_OFFSET_S = 0.5` ×1 · clamp bound to the recreation's live `derive(CONFIG).durationMs` (COMPARISON-CLAMP harness line below) · `@media (max-width:560px)` stacking ×1 · one shared control set driving both sides.
- **A6 legs:** fit-table.md — PIL rendered measurement, DejaVu Serif/Serif-Bold PROXY, 12 rows, **HIT list EMPTY** (2 first-pass HITs cured in CONFIG pre-filing). config-census.md — every CONFIG key incl. palette-nested and states[]-nested resolved to value-flowing sites; CSS variables: none used; **HIT list EMPTY**. [Cycle 040 completion cure 3: the fit summary that read "9 rows" here is reconciled with the 12 measured rows in fit-table.md, per prewave firing 2.]
- **PIXEL-UNVERIFIED limitation (A10.1, carried to scores.md):** no browser binary exists in this seat; the comparison page is the render surface for the owner's visual verdict. All state claims above are logic-level (pure stateAt), not rendered-pixel claims.

## RECEIPT INDEX (A13) — every applicable check → its executable receipt

### guards.md commands 1–8
1. Segment window/binding (§3.3) → RECEIPT: ffprobe on segment.mp4 — h264 1920×1080 + AAC, duration 27.023 s = 304.5–331.5 s window (305–331 ± 0.5); sha256 filed above.
2. Recreation hash (§3.2) → RECEIPT: sha256 `877ba1e2…` + 12,822 B, computed on the final build after the last edit; harness + fit + census all cite this hash (fit-table notes its measurement build differs only by the tagText binding).
3. Segment in sync (§3.5) → RECEIPT: comparison.html carries `HANDLE_OFFSET_S = 0.5` and buildMs = clamp((currentTime − 0.5) × 1000, 0, derive(CONFIG).durationMs read live from the recreation) — COMPARISON-CLAMP harness line above (the fixed-26000 clamp named by prewave firing 1 was cured in the cure round).
4. No captions/subtitles → RECEIPT: recreation.html contains no caption/subtitle track or text element class (subject text census in config-census.md lists every rendered string: names, labels, numbers, numerals, clause text — no narration text); segment.mp4 carries no subtitle stream (ffprobe shows video+audio only).
5. Purity grep (§3.4) → RECEIPT: 0 hits, command + pattern filed above.
6. Swap test (A3/A9.3) → RECEIPT: SWAP-CONTENT / SWAP-TIMING / SWAP-PALETTE / two SWAP-NEGATIVE lines in the raw harness output above, run as separate invocations of the altered CONFIGs.
7. node --check (§3.6) → RECEIPT: rc=0 ×4 scripts, filed above.
8. RNG census → RECEIPT: `Math.random` grep 0 hits; no other RNG source exists in the file (single-pass grep over the whole build).

### A11 census assertions (checkpoint → assertion → CONFIG expression → evaluated result → receipt line)
- CP0 → icon + banner present, tiles/squares 0 → `tIconMs` = 0 → iconP=1, bannerP=1 → `CP0@expr(tIconMs)=0` (banner assertion added in the cure round).
- Icon exit → iconP=0 → `tIconMs+iconHoldMs+iconOutDurMs` = 1800 → `P1@expr(...)=1800`.
- CP1/CP2 tile entry → PA tileP=easeOut(0.0769)=0.2135, scale 0.528, VA 0 → `tTilesMs+tileDurMs/13` = 2000 → `TILE-EARLY@expr(...)=2000`.
- CP2 tile mid → PA 0.9964, VA 0.9585, freeP=0 → `tTilesMs+tileDurMs*11/13` = 4000 → `TILE-MID@expr(...)=4000`.
- Tiles complete → both tileP=1 → `tTilesMs+maxEnter*tileStaggerMs+tileDurMs` = 4900 → `P2@expr(...)=4900`.
- CP3 free landed → freeP=1, frame/squares 0 → `tFreeMs+freeDurMs` = 5600 → `FREE-DONE@expr(...)=5600`.
- CP4 hold → priced fields identical → `(freeEnd+tFrameMs)/2` = 7050 → `MID-HOLD@expr(...)=7050`.
- CP5 frame mid → frameP=0.5 (raw phase and eased printed separately), VA-only → `tFrameMs+frameDurMs/2` = 9000 → `P3@expr(...)=9000`.
- CP5/CP6 frame complete → frameP=1, tag/squares 0 → `tFrameMs+frameDurMs` = 9500 → `FRAME-DONE@expr(...)=9500`.
- CP6 hold → tagP still 0 → `(frameEnd+tTagMs)/2` = 11000 → `TAG-ZERO@expr(...)=11000`.
- CP7 tag complete → tagP=1, squares 0 → `tTagMs+tagDurMs` = 13000 → `TAG-DONE@expr(...)=13000`.
- CP8 squares mid → per-square VA[0]=1, VA[14] raw 0.575/eased 0.6117, VA[20]=0, PA partial, numeralP=1 → `tSquaresMs+14*squareStaggerMs+squareFadeMs*0.575` = 16000 → `P4@expr(...)=16000`.
- CP9 counts complete → squaresFull 21/15, numerals "21"/"15" → `completeAtMs+500` = 17000 → `COUNTS@expr(...)=17000` (+ `P5` identity at the same instant).
- CP10 hold → priced fields equal to CP9 probe → `completeAtMs+holdMs*7/19` = 20000 → `HOLD-LATE@expr(...)=20000`.
- CP11 (seg-rel 22000) + CP12 (24000) → photographic portrait coda — DEFERRED, disposition: §6.1 photographic content is not code-recreatable; named in the Plan (§1.4, §2.1) before Execute; the completed board holds through these instants (HOLD-LATE probe prices the held state the coda window shows underneath). No assertion demanded beyond the hold — the deferral is the disposition.
- CP13 (seg-rel 26000) → next technique T220 already on screen — OUT OF SCOPE for T219 (item boundary; durationMs ends at 26000). No assertion demanded; the boundary is the disposition.
- Probe-mobility receipt (cure round): `SWAP-TIMING-TILES` — under `tTilesMs 1800→2300` the TILE-EARLY/TILE-MID probe instants move 2000→2500 / 4000→4500 AND the asserted values reproduce at the moved instants; `SWAP-TIMING` — the P4 probe moves 16000→17500 under the squares swap.
- NOT-DEMANDED: rendered-pixel assertions at census instants — no browser binary exists in this seat (A10.1 PIXEL-UNVERIFIED limitation; INSTRUCTION §5 prices stateAt-level receipts + the comparison surface for the owner's visual verdict).

### Applicable guards with receipts filed in this directory
- guard-measured-fit → RECEIPT: fit-table.md (12 measured rows, PIL/DejaVu PROXY, HIT list EMPTY).
- guard-config-census → RECEIPT: config-census.md (all keys incl. nested resolved, HIT list EMPTY).
- jev-prewave → RECEIPT: firing 1 HOLD (ASSERTED-CHECKS; parameterization 0.85 · purity 0.95 · own-checks 0.35 · fidelity 0.95) filed in the run dir as item-T219-jev-prewave-return.md; cure round applied (this record's harness v2, fit rows 7/8/10, comparison clamp binding, CP11–CP13 dispositions); firing 2 receipt filed with scores.md. Score arithmetic is due after the wave (scores.md).

## COMPLETION — Cycle 040 Wave 37 (A12.3 completion of the Wave-36 attempt)

- **Form:** A12.3 completion — ONLY the three cures filed in scores.md from prewave firing 2 are applied. The build itself is UNCHANGED: `recreation.html` sha256 `877ba1e2b3d22f320c88e4ee5abb9de60cb7d45e9a0e039d9f00a56c17ccba91`, 12,822 B (before = after; no cure required a build change — cure 1 is a harness-receipt completion, cures 2–3 are record reconciliations). Segment + comparison hashes unchanged (filed above).
- **Cure 1 — CP1 receipt completed:** harness v3 re-run on the unchanged build; the TILE-EARLY probe at `tTilesMs + tileDurMs/13` = 2000 now asserts and prints `iconP=0` alongside Pennsylvania's progress/scale and Virginia's absence (raw line in the harness v3 output below). The separate P1 icon-exit probe at 1800 no longer stands as CP1's only icon evidence.
- **Cure 2 — binding assertions reconciled with harness v2:** (a) the binding census-anchor mapping's CP10 line is corrected from the literal-time call `stateAt(CONFIG, 20000)` to the CONFIG-derived probe — CP10 hold: `stateAt(CONFIG, completeAtMs + holdMs*7/19)` = 20000, receipt `HOLD-LATE@expr(completeAtMs+holdMs*7/19)=20000 :: priced fields equal to COUNTS probe`, whose baseline is the COUNTS receipt `COUNTS@expr(completeAtMs+500)=17000 :: VA full=21 PA full=15 numerals=21/15 builtSum=36`. The corrected mapping is fed verbatim in the completion prewave payload (FED 7). (b) The stale `C@18000` count reference in the A9.3 line above is replaced in place by the filed `COUNTS@expr(completeAtMs+500)=17000` receipt (edit noted on that line).
- **Cure 3 — receipt index repaired against the supplied guard list:** the corrected A13 RECEIPT INDEX below supersedes the Wave-36 index above for readiness purposes: every actual guards.md command (1–8) is mapped to its receipt; score arithmetic (command 4) is marked DUE AFTER THE WAVE (seat-side, post-wave); the fit summary is reconciled with the 12 measured rows (in-place edit noted on the A6 line above); the purity command (command 1) is indexed with its exact invocation and output.

### Fresh own-checks — harness v3 RAW output (node, config+logic extracted from the final build; 25/25 PASS)

```
PASS VALIDATE-DEFAULT :: ok=true errors=[]
PASS DERIVE :: completeAtMs=16500 durationMs=26000
PASS COUNT-SOURCE :: states=2 sourceElectors=21+15=36 builtSum=36
PASS CP0@expr(tIconMs)=0 :: iconP=1 bannerP=1 tileP=0,0 squares=0,0
PASS P1@expr(tIconMs+iconHoldMs+iconOutDurMs)=1800 :: iconP=0
PASS TILE-EARLY@expr(tTilesMs+tileDurMs/13)=2000 :: iconP=0 PA tileP=0.2135 PA scale=0.5281 VA tileP=0
PASS TILE-MID@expr(tTilesMs+tileDurMs*11/13)=4000 :: PA tileP=0.9964 VA tileP=0.9585 freeP=0
PASS P2@expr(tTilesMs+maxEnter*tileStaggerMs+tileDurMs)=4900 :: tileP=1,1 freeP=0
PASS FREE-DONE@expr(tFreeMs+freeDurMs)=5600 :: freeP=1 frameP=0 squares=0,0
PASS MID-HOLD@expr((freeEnd+tFrameMs)/2)=7050 :: priced fields equal to FREE-DONE probe
PASS P3@expr(tFrameMs+frameDurMs/2)=9000 :: frameP=0.5 (raw phase 0.5, eased printed separately) VA=0.5 PA=0
PASS FRAME-DONE@expr(tFrameMs+frameDurMs)=9500 :: frameP=1 tagP=0 squares=0,0
PASS TAG-ZERO@expr((frameEnd+tTagMs)/2)=11000 :: tagP=0 frameP=1 squares=0,0
PASS TAG-DONE@expr(tTagMs+tagDurMs)=13000 :: tagP=1 squares=0,0
PASS P4@expr(tSquaresMs+14*squareStaggerMs+squareFadeMs*0.575)=16000 :: VA sq[0]=1 sq[14]=0.6117 (raw phase 0.575) sq[20]=0 PA visSum=14.35 numeralP=1
PASS COUNTS@expr(completeAtMs+500)=17000 :: VA full=21 PA full=15 numerals=21/15 builtSum=36
PASS HOLD-LATE@expr(completeAtMs+holdMs*7/19)=20000 :: priced fields equal to COUNTS probe
PASS P5@expr(completeAtMs+500) :: priced fields (excl. t) identical
PASS SWAP-CONTENT :: frame on Beta=1 Alpha=0 counts 7/9 Beta enslavedText=120,000
PASS SWAP-TIMING :: P4 probe instant 16000 -> 17500; completeAt 16500 -> 18000
PASS SWAP-TIMING-TILES :: tileEarly 2000 -> 2500 (PA tileP=0.2135 iconP=0) tileMid 4000 -> 4500 (VA tileP=0.9585) — probes moved AND values reproduce
PASS SWAP-NEGATIVE-SQUARES :: errors=["phase order: squares start 9000 before tag end 13000"]
PASS SWAP-NEGATIVE-ICONSTART :: errors=["phase order: tiles start 1800 before icon exit end 3800"]
PASS SWAP-PALETTE :: frameFill=#2e9e6b enslavedNumFill=#2e9e6b
PASS COMPARISON-CLAMP :: comparison reads derive(CONFIG).durationMs live; timing-swapped CONFIG duration = 27500 (default 26000) so the clamp moves with CONFIG
SUMMARY pass=25 fail=0
```

- **Count assertion (A9.3), fresh:** source states = 2, source electors 21 + 15 = 36 — built squaresFull at completion = 21 + 15 = 36 (COUNT-SOURCE + `COUNTS@expr(completeAtMs+500)=17000` lines above). MATCH.
- **Purity grep (guards.md command 1), fresh, exact invocation:** `grep -c -E 'segment\.mp4|source\.webm|source\.mp4|<video|<img|ajavsMbCapY' recreation.html` → output `0` (grep exit 1 = no lines matched). `Math.random` census: `grep -c 'Math.random' recreation.html` → `0`. The one `src=` pattern occurrence is line 152 `const src=cfg.states[idx];` — a local JS variable, never fetched. External-reference scan (`href=|@import|url(`) → 0 hits.
- **Syntax (guards.md command 3), fresh:** `node --check` rc=0 on all three recreation scripts (t219-config, t219-logic, t219-render) + the comparison script (4/4).
- **A6 legs refiled on the (unchanged) build:** fit-table.md — PIL re-measurement of all 12 rows reproduces the filed ink bounds exactly (margins +22/+130/+6/+83/+83/+83/+150/+83/+32/+32/+14/+83; ink heights @360 all ≥ 11.2 px), **HIT list EMPTY (0 HITs)**. config-census.md — re-checked: `var(--` count 0; hex census matches the filed classification (14 palette values + `#e9e6de` body chrome + `#ffffff` = palette.tagText); every CONFIG key incl. palette-nested and states[]-nested resolves as filed, **HIT list EMPTY**.

### RECEIPT INDEX (A13) — CORRECTED, Cycle 040 completion (supersedes the Wave-36 index for readiness)

#### (a) guards.md commands 1–8 → receipts
1. **Construction-purity grep** → RECEIPT: invocation `grep -c -E 'segment\.mp4|source\.webm|source\.mp4|<video|<img|ajavsMbCapY' recreation.html`, raw output `0` hits (this completion, above). The `url(#id)` precision note does not arise (no such reference in the build).
2. **Swap test** → RECEIPT: harness v3 lines SWAP-CONTENT · SWAP-TIMING · SWAP-TIMING-TILES · SWAP-PALETTE · SWAP-NEGATIVE-SQUARES · SWAP-NEGATIVE-ICONSTART (raw output above), run as separate altered-CONFIG invocations; probe-mobility shown (tileEarly 2000→2500, tileMid 4000→4500, P4 16000→17500, completeAt 16500→18000).
3. **Syntax + determinism check** → RECEIPT: `node --check` rc=0 ×4 scripts (3 recreation + 1 comparison); seeded-RNG census — `Math.random` grep output `0`, no RNG source anywhere in the build (deterministic pure `stateAt`).
4. **Scores arithmetic** → NOT-DEMANDED AT PREWAVE — DUE AFTER THE WAVE: seat-side recomputation of the five-lens average + minimum from the filed lens returns before scores.md prints a verdict (guards.md command 4's own definition places it at verdict filing, after the wave fires). Disposition: INSTRUCTION §5 leg 5 + guards.md command 4.
5. **Segment binding** → RECEIPT: ffprobe on segment.mp4 — h264 1920×1080 + AAC, duration 27.023 s = the 304.5–331.5 s window (305–331 ± 0.5 s handles); sha256 `2c215921…` filed at the head of this record; no subtitle stream (video+audio only — also the no-captions receipt for the segment side).
6. **Measured-fit leg (guard-measured-fit.md)** → RECEIPT: fit-table.md — 12 measured rows, PIL/DejaVu Serif PROXY, re-measured this completion with identical results, HIT list EMPTY.
7. **Config-census leg (guard-config-census.md)** → RECEIPT: config-census.md — every CONFIG key (top-level, palette-nested, states[]-nested incl. `states[].id`-class rows: label/enslaved/free/electors/tagged/enterIdx/silhouette) resolved to value-flowing sites; CSS variables none used (`var(--` = 0); HIT list EMPTY.
8. **Census-anchor probes (zero-state anchors)** → APPLICABLE, RECEIPTS: CP0 zero-state anchor — `CP0@expr(tIconMs)=0 :: iconP=1 bannerP=1 tileP=0,0 squares=0,0` (tiles/squares zero at the window start); tag zero-state anchor — `TAG-ZERO@expr((frameEnd+tTagMs)/2)=11000 :: tagP=0 frameP=1 squares=0,0`; squares zero-state anchors — `FRAME-DONE@expr(tFrameMs+frameDurMs)=9500` and `TAG-DONE@expr(tTagMs+tagDurMs)=13000` (squares=0,0 at both). All raw lines in the harness v3 output above.

#### (b) A11 assertions — inherited WHOLE from the Wave-36 harness (A13.2; no assertion dropped, none added silently)
- CP0 → icon + banner present, tiles/squares 0 → `tIconMs` = 0 → `CP0@expr(tIconMs)=0` (iconP=1, bannerP=1).
- Icon exit (P1) → iconP=0 → `tIconMs+iconHoldMs+iconOutDurMs` = 1800 → `P1@expr(...)=1800`.
- CP1 tile entry → **iconP=0** + PA tileP=0.2135, scale 0.5281, VA tileP=0 → `tTilesMs+tileDurMs/13` = 2000 → `TILE-EARLY@expr(...)=2000` (cure 1: iconP now asserted at CP1's own instant).
- CP2 tile mid → PA 0.9964, VA 0.9585, freeP=0 → `tTilesMs+tileDurMs*11/13` = 4000 → `TILE-MID@expr(...)=4000`.
- Tiles complete (P2) → both tileP=1, freeP=0 → `tTilesMs+maxEnter*tileStaggerMs+tileDurMs` = 4900 → `P2@expr(...)=4900`.
- CP3 free landed → freeP=1, frame/squares 0 → `tFreeMs+freeDurMs` = 5600 → `FREE-DONE@expr(...)=5600`.
- CP4 hold → priced fields equal to FREE-DONE → `(freeEnd+tFrameMs)/2` = 7050 → `MID-HOLD@expr(...)=7050`.
- CP5 frame mid (P3) → frameP=0.5, VA=0.5, PA=0 → `tFrameMs+frameDurMs/2` = 9000 → `P3@expr(...)=9000`.
- Frame complete → frameP=1, tag/squares 0 → `tFrameMs+frameDurMs` = 9500 → `FRAME-DONE@expr(...)=9500`.
- CP6 hold / tag zero → tagP=0, frameP=1 → `(frameEnd+tTagMs)/2` = 11000 → `TAG-ZERO@expr(...)=11000`.
- CP7 tag complete → tagP=1, squares 0 → `tTagMs+tagDurMs` = 13000 → `TAG-DONE@expr(...)=13000`.
- CP8 squares mid (P4) → VA sq[0]=1, sq[14]=0.6117 (raw 0.575), sq[20]=0, PA visSum=14.35, numeralP=1 → `tSquaresMs+14*squareStaggerMs+squareFadeMs*0.575` = 16000 → `P4@expr(...)=16000`.
- CP9 counts complete → squaresFull 21/15, numerals "21"/"15", builtSum=36 → `completeAtMs+500` = 17000 → `COUNTS@expr(...)=17000` (+ P5 identity at the same instant).
- CP10 hold → priced fields equal to the COUNTS probe → `completeAtMs+holdMs*7/19` = 20000 → `HOLD-LATE@expr(...)=20000` (cure 2: CONFIG-derived probe + COUNTS baseline replace the binding mapping's literal-time call).
- CP11 (seg-rel 22000) + CP12 (24000) → photographic portrait coda — DEFERRED, disposition unchanged from Wave 36: §6.1 photographic content is not code-recreatable; named in the Plan before Execute; the completed board holds through these instants (HOLD-LATE probe prices the held state). No assertion demanded beyond the hold — the deferral is the disposition.
- CP13 (seg-rel 26000) → next technique T220 already on screen — OUT OF SCOPE for T219 (item boundary; durationMs ends at 26000). No assertion demanded; the boundary is the disposition.
- Probe-mobility receipts: `SWAP-TIMING-TILES` (tileEarly 2000→2500 with iconP=0 reproduced · tileMid 4000→4500) · `SWAP-TIMING` (P4 16000→17500, completeAt 16500→18000).
- Comparison receipt: `COMPARISON-CLAMP` — comparison reads `derive(CONFIG).durationMs` live; timing-swapped duration 27500 vs default 26000, so the clamp moves with CONFIG. Labels "ORIGINAL — Vox Electoral College @ 5:05–5:31" ×1 · "RECREATION — T219 three-fifths payoff counts, parameterized" ×1 · `HANDLE_OFFSET_S = 0.5` ×1 · `@media (max-width:560px)` stacking ×1 · one shared control set.
- NOT-DEMANDED: rendered-pixel assertions at census instants — no browser binary exists in this seat (A10.1 PIXEL-UNVERIFIED limitation; INSTRUCTION §5 prices stateAt-level receipts + the comparison surface for the owner's visual verdict).

#### Readiness self-check (A13.3, before payload assembly)
Every index line above carries its executable receipt (harness line + CONFIG expression + evaluated instant + raw result) or an explicit NOT-DEMANDED/DUE-AFTER line with its governing disposition (command 4 → §5 leg 5; CP11/CP12 → §6.1 deferral in the Plan; CP13 → item boundary; pixel assertions → A10.1). Census receipts reconcile against the build's CONFIG keys incl. nested/array keys (config-census.md). The single authorized completion re-fire of jev-prewave follows this section.

### Completion outcome — Cycle 040 Wave 37
- **jev-prewave completion re-fire: FIRE-WAVE** (parameterization 0.90 · purity 0.95 · own-checks 0.95 · fidelity-plan 0.95). Return filed: run dir `item-T219-jev-prewave-completion-return.md` (+ `.raw`) and `codex/jev-prewave-completion-cycle040.md` in this artifact directory. Payload: run dir `payload-T219-jev-prewave-completion.txt`.
- **Five-lens wave fired on FIRE-WAVE**, all five payloads bound to recreation.html sha256 `877ba1e2b3d22f320c88e4ee5abb9de60cb7d45e9a0e039d9f00a56c17ccba91` (identical-hash binding; build unchanged through the wave): motion 92 · timing 100 · purity 100 · reusability 87 · readability 84. Returns verbatim: `codex/lens-motion.md` · `codex/lens-timing.md` · `codex/lens-purity.md` · `codex/lens-reusability.md` · `codex/lens-readability.md` (each with its `.raw` twin); payloads in the Cycle-040 run dir as `payload-T219-lens-<name>.txt`.
- **Scores arithmetic (guards.md command 4 — the index's DUE-AFTER-THE-WAVE line, now discharged):** 92 + 100 + 100 + 87 + 84 = 463; 463 / 5 = 92.6 average; minimum 84. Bar avg ≥ 85 AND min ≥ 70 → **PASS — RECREATED** (consolidated in scores.md completion section).
