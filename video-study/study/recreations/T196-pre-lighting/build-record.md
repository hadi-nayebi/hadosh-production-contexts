# T196 — Build Record · attempt 1 · Cycle 035 Wave 32 (completion wave)

Item: queue #92 · T196 pre-lighting · Packet #11 "Caption with Intention" (P11-T07). Plan authority: Cycle-034 `item-T196-observe-plan.md` AS AMENDED by `plan-amendment-cycle035.md` in this directory (jev-plan-exit REVISE + jev-observe-exit charges, filed before any build script — A9.2 satisfied). Schedule basis (A7): segment-anchored. Consumed, not re-fired: `codex/codex-observe.md` (CONFIRMED-WITH-GAPS) · `codex/codex-plan-review.md` (REVISE, all applied) · `codex/codex-observe-attempt1-platform-failure.md` (Cycle-034 transport failure filing).

## Segment binding (guards.md command 5)
- Source: `hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/source.mp4` (113.734 s, 10,213,125 B).
- Cut per amendment A4 (ONE clock, head handle): source 47.26–58.82 s = core window 47.76–58.32 s with a 0.5 s head handle and a 0.5 s tail handle. Core build zero ≡ video 0.5 s.
- `segment.mp4` ffprobe: duration 11.582683 s (11.56 nominal + encoder padding) · size 686,604 B · h264 1920×1080 @ 24 fps + aac · re-encoded (libx264, yuv420p, faststart).

## D2 act — card-2 frame-measurement refresh (amendment A6, BEFORE the anchor was frozen)
Frames extracted from source.mp4 and viewed firsthand this cycle:
- 49.60 s (sha 2c69c909…) + 49.70 s + 49.78 s (b933d30f…) + 49.82 s (2b881bc3…): card 1 "This system brings in varying", fully yellow.
- 49.86 s (18e70684…) + 49.90 s (76a2431d…) + 50.00 s: card 2 "types sizes, weights and animation," COMPLETE and ALL WHITE (no word flipped yet).
- **Measured: card 2 visual onset ∈ (49.82, 49.86] → frozen anchor source 49.84 s = build 2,080 ms** (supersedes the Plan's ASR-derived 2,020 ms). Consequence, same shape as D1: "types" (ASR onset build 2,020 ms) precedes its card by ~60 ms, so at card-2 entry "types" is prescribed SPOKEN and words 2–5 unspoken; the entry assertion was rebuilt accordingly (harness C2entry, PASS). Card 2's interval becomes [2080, 5032); all its flips (2320/3000/4220/4380) remain inside ✓. D2 is thereby CURED as a measurement gap; the residual ±20 ms bracket is named.

## Cross-item observation — source 57.167 s (amendment A11, for the seat's T196↔T197 reconciliation)
Frame at source 57.167 s extracted and viewed this cycle (sha a843ba31…): the "Character Identification" header stands COMPLETE and essentially UNSPOKEN (white) — only its first letter "C" carries a pale yellow tint (its flip just beginning) — with the yellow bars icon descending at top. Card 3 ("so you can feel…") is NO LONGER on screen at 57.167 s. So inside T197's window: by 57.167 s the source has already exited card 3 and entered the next header in its pre-lit (all-white) state. T196's D4 hold (card 3 held to build 10,560 ms = source 58.32) therefore extends card 3 ≥1,153 ms past the source's actual card-3 exit — departure confirmed against direct frame evidence, priced in the Plan.

## Construction
DOM word spans + one rAF clock + one stage slot; all 21 spans prebuilt at load; state is a pure function of timestamp (`spoken iff word.onsetMs < t`, explicit tie rule); entry states computed from onsets, never stored; stage box (CONFIG stageBox 88% × 62%) reserved before first paint; color is the SOLE state-dependent property (shared opacity/weight/scale across states); totalMs DERIVED (lastFlip 8,640 + finalHoldMs 1,920 = 10,560); terminal state for t ≥ totalMs clamps to card 3 fully spoken (amendment A3). No captions/subtitles — the pre-lit line IS the subject (§6.5). Departures D1–D7 stand as filed in the Plan (D2 cured per above; D5 size/weight exclusion incl. "sizes" standing larger in the source; D4 confirmed per the 57.167 s frame).

## Count assertion (A9.3)
CONFIG words 5+5+11 = 21 vs built spans 21 vs source words 21 — MATCH (harness COUNT line below). No halt.

## A11 checkpoint → assertion map (CONFIG-derived instants; evaluated by the harness, RAW output below)
| Checkpoint | CONFIG expression | Evaluated result |
|---|---|---|
| CP1 LOGIC (card-3 line start, all-white) | t = cards[2].onsetMs = 5032 | PASS — 11/11 present+visible+unspoken, outgoing zero visible |
| CP1 PAINTED-FRAME (28 ms interval) | painted frame in [5032, 5060) | NOT EXERCISABLE IN THIS SEAT (no browser binary) — separate outcome per amendment A5, never merged with LOGIC |
| CP2 (card-1 entry) | t = cards[0].onsetMs = 1032 | PASS — "This" spoken, words 2–5 unspoken; P0 at 1031 empty |
| C2 entry (as amended, D2-measured) | t = cards[1].onsetMs = 2080 | PASS — "types" spoken (speech-first), words 2–5 unspoken |
| CP3a (gets flip, schedule) | t = cards[2].words[7].onsetMs + ε = 6641 | PASS — prefix through "gets" spoken; louder/or/softer unspoken; tie at 6640 exact = unspoken |
| CP3b (census @ source 55.0) | t = 7240 (build) | SOURCE-FIDELITY: DEPARTURE-EXPECTED — build shows "louder" spoken (ASR 6880); census shows it white (D3 lag, amendment A1) |
| CP4 (interior-flip stability) | every word onset ±1 ms | PASS — span counts constant 5/5/11, no node created at any onset |
| CP5a (last flip) | t = cards[2].words[10].onsetMs + ε = 8641 | PASS — all 11 spoken; tie at 8640 exact = "softer" unspoken |
| CP5b (last visible) | t = totalMs − ε = 10559 | PASS — card 3 active, all spoken (D4 hold); terminal clamp beyond totalMs PASS |
| Handoff | seek vs playback at same t | PASS — stateAt is a pure function; double-eval at 3000 identical |
Under the timing swap (timingScale 1.25) the CP1-analog instant moved 4500 → 5625 and re-evaluated PASS — assertion instants are CONFIG-derived, not hardcoded.

## Own checks — RAW output from the first draft (A9.4)
Harness: node, DOM-stubbed load of recreation.html's inline script, stateAt/derive exercised directly. First-draft run, exit 0:
```
COUNT configWords=21 perCard=5+5+11
PASS A9.3 count 5+5+11=21 :: config=21 vs source 21
PASS derived totalMs=10560 :: totalMs=10560 lastFlip=8640
PASS CP2 t=1032 active c1, w1 spoken, w2-5 unspoken :: spoken=[This] unspoken=[system,brings,in,varying]
PASS P0 t=1031 stage empty :: active=null
PASS CP1-LOGIC t=5032 c3 11/11 present+visible+unspoken, outgoing zero visible :: spoken=[] c1vis=false c2vis=false
CP1-PAINTED-FRAME :: NOT EXERCISABLE IN THIS SEAT (no browser binary) — recorded separately per amendment A5
PASS C2entry t=2080 types spoken (speech precedes card, D2-measured), rest unspoken :: spoken=[types]
PASS CP3a t=6641 prefix through gets spoken; louder/or/softer unspoken :: spoken=[so,you,can,feel,when,my,voice,gets]
PASS TIE t=6640 gets unspoken (onset < t strict) :: gets.spoken=false
CP3b build-state t=7240 spoken=[so,you,can,feel,when,my,voice,gets,louder] | census@55.0: louder WHITE -> SOURCE-FIDELITY: DEPARTURE-EXPECTED (D3, amendment A1)
PASS CP5a t=8641 all 11 spoken :: unspoken=[]
PASS CP5a-tie t=8640 softer unspoken at exact onset :: softer.spoken=false
PASS CP5b t=10559 c3 active + all spoken (D4 hold) :: active=c3
PASS TERMINAL t>totalMs clamps to c3 fully spoken :: t=10560
PASS CP4 span counts constant at every onset ±1ms :: 5/5/11 at all probed instants
PASS HANDOFF determinism stateAt(3000) twice identical :: len=1409
PASS Interval fit: no flip at/after next card onset :: all flips inside intervals (word onsets may precede own card: D1/D2 speech-first)
CONTRAST unspoken/bg=19.26 spoken/bg=16.57 floor=7 | pairDeltaE default=90.5 min=30
PASS Contrast floor both >= 7 :: 19.26/16.57
PASS Pair DeltaE default >= 30 :: 90.5
SWAP-WORDS count=13 (expect 13=4+4+5) derivedTotalMs=8520 (expect 8520)
PASS SWAP words count + derived total :: 13/8520
PASS SWAP s1 t=0 tie: Presence unspoken at exact 0 :: spoken=false
PASS SWAP s1 t=1 Presence spoken :: 
PASS SWAP s3 entry all unspoken (first flip 4900) :: spoken=[]
PASS SWAP end state s3 all spoken :: 
SWAP-TIMING derivedTotalMs=10650 (expect 10650) s3onset=5625 (expect 5625) hereOnset=8250 (expect 8250)
PASS SWAP timingScale moves totalMs + onsets + assertion instants :: 
PASS SWAP timing CP1-analog at scaled onset: s3 all unspoken :: 
SWAP-PALETTE spoken #00e676 contrast/bg=12.58 pairDeltaE=83.4
PASS SWAP palette contrast >= 7 AND DeltaE >= 30 :: 12.58/83.4
HARNESS-DONE fails=0
```

## Swap test (§5 leg 1) — exact values + result
- Words: the amendment A8 three exact replacement cards (S1 4 words @0 · S2 4 words @2000 · S3 5 words @4500, full onset tables in plan-amendment-cycle035.md A8). Result: PASS — counts 13, derived totalMs 8,520, entry/tie/end states all as derived.
- Timing: timingScale 1.0 → 1.25. Result: PASS — totalMs 10,650, onsets and assertion instants scale together.
- Palette: spoken.color #ffe600 → #00e676. Result: PASS — contrast vs bg 12.58 ≥ 7, pair ΔE (CIE76, amendment A9) 83.4 ≥ 30. Default palette: contrast 19.26/16.57, ΔE 90.5.

## Purity (§5 leg 2) — RAW
Command (guards.md command 1): `grep -nE 'segment\.mp4|source\.mp4|<video|<img|\.jpg|\.png|1235931636|xmo3' recreation.html` → **0 hits** (no output). No `url(#id)` references exist in the file, so no classification is needed. Asset inventory: recreation.html loads NOTHING external — code only (no assets besides the file itself). comparison.html references segment.mp4 (the labeled ORIGINAL side — lawful, §3.1) and recreation.html only.

## Syntax (guards.md command 3)
Inline script extracted → `node --check` → OK (no output). No RNG anywhere in the build (deterministic state function), so the seeded-RNG census is vacuous.

## Comparison check (§5 leg 3)
comparison.html: both sides labeled exactly ("ORIGINAL — Caption with Intention @ 0:48–0:58" / "RECREATION — T196 pre-lighting, parameterized"); ONE synchronized control set (Play/Pause · Restart · Seek-to-card-3) driving the video, with the recreation slaved on the single-clock rule buildMs = (video.currentTime − 0.5) × 1000 (amendment A4); D5 + D4 departures printed on the face; phone stacking via max-width 640px column layout, controls above the sides and reachable. Logic-level verification only — PIXEL-UNVERIFIED (no browser binary in this seat).

## A6 legs (pre-wave, non-skippable)
- `fit-table.md` — HIT list EMPTY (0 hits); all subject rows measured above the 11 px floor at the bound stage-box percentages.
- `config-census.md` — HIT list EMPTY (0 hits); one borderline classification carried in print (0.18em word margin, structural-fixed).

## Fidelity plan (jev-prewave dimension 4)
Implemented: presence contract (prebuilt spans, constant count/visibility/geometry), color-only state change at ASR onsets, single-slot atomic handoff, segment-anchored schedule, contrast floor + ΔE pair separation. Deliberately deferred/excluded (named): per-word VISUAL flip onsets (D3, unmeasured — ASR approximation stands), size/weight ramp (D5 → T197), headers + cyan guides (D6, film UI), Roboto Flex (D7, system stack), painted-frame proof of the 28 ms interval (seat limitation).

## Completion-builder note — Cycle 035 Wave 32 (appended at completion Verify; earlier claims above stand unedited)

**Independent re-verification of the filed build (hash 0077949098833e5d7835f03b2b183080aa0419543ea47d85e7d95460c44f2d37, 7,665 B):** purity grep (guards.md command 1) re-run → 0 hits, no `url(#…)` references; inline script `node --check` OK; no RNG; segment.mp4 ffprobe re-run → 11.582683 s, 686,604 B, h264 1920×1080 @ 24 fps + aac (matches filed). A11 assertions re-run in an independent harness → all PASS (CP1 LOGIC 5032 all-white 11/11 · CP2 1032 · C2 entry 2080 "types" spoken · CP3a 6641 + tie 6640 · CP5a 8641 + tie 8640 · CP5b 10559 · terminal clamp · CP4 counts · handoff determinism · swap words 13/total 8,520 · swap timing on the A8 swap cards total 10,650, S3 onset 5,625, "here" 8,250 · contrast/ΔE as filed). A6 legs as filed: fit-table 0 hits, config-census 0 hits (one borderline, 0.18em margin, carried in print).

**jev-prewave, first firing:** payload `codex/payload-prewave.txt` (30,701 B) verified binding the filed build (build-record + CONFIG + both A6 outputs verbatim; SHA printed in payload). Return filed verbatim at `jev-prewave.md` (+ `codex/jev-prewave-return.raw`, 139,605 B): **HOLD — ASSERTED-CHECKS** (parameterization 0.75 · purity 1.00 · own-checks completeness 0.25 · fidelity-plan honesty 1.00). Named defects: (1) CP3b's instant filed as a literal 7240 with no CONFIG-derived assertion or timing-swap behavior; (2) CP4 filed span counts only — no node-identity/geometry results, handoff row exercised neither seek nor playback path; (3) A6 pass claims conflict with the HTML — `CONFIG.bg` never reached the stage (CSS-fixed background), and fitCard probed `display:none` cards, summed span widths without margins, and estimated lines from aggregate width, so this record's earlier statement (via fit-table.md) that fitCard "applies the same contract in-browser" was **inaccurate as filed** — recorded here as the completion discrepancy, not edited above.

**Cures applied to recreation.html (new SHA-256 d7dfe9409c55b1e351c29e8b358632f7072733ded8c46bea026054c0fdee0953, 8,255 B):** stage background applied from `CONFIG.bg` in the script; fitCard rewritten to the fit-table contract (probe laid out as display:flex/visibility:hidden, per-word ink includes 0.36 em margins, greedy per-word wrap, shrink while not fitting). Both A6 legs refiled against the cured build (hit lists unchanged: EMPTY, 0 hits each).

**Re-verification after cure (RAW summary):** purity grep → 0 hits; `node --check` OK; all filed A11 assertions re-run → PASS; new cure harness (DOM-stubbed full-script load) → CP3b instant derived as `(55.0 − CONFIG.windowStartS) × 1000 × timingScale = 7240` with "louder" SPOKEN asserted as the D3/A1 DEPARTURE-EXPECTED result, and under timingScale 1.25 the sample moves 7240 → 9050 with the departure persisting (scaled "louder" onset 8600 < 9050); CP4 at every word onset ±1 ms → span counts constant 5/5/11, span object identities unchanged, weight/opacity/scale identical across states (color sole state property); handoff at the CONFIG-derived card-2 boundary (2080 ms) → playback-stepped state and rendered colors identical to seek-jump state; `stage.style.background === CONFIG.bg` (#000000) verified in the stub load. CP1 PAINTED-FRAME remains NOT EXERCISABLE IN THIS SEAT (no browser binary), unchanged.

**jev-prewave, second firing (on the cured build, SHA-256 d7dfe940…):** payload reassembled (35,114 B; first payload preserved at `codex/payload-prewave-fired1.txt`), return filed verbatim at `jev-prewave-2.md` (+ `codex/jev-prewave-return2.raw`, 270,078 B): **HOLD — ASSERTED-CHECKS, second consecutive** (parameterization 0.75 · purity 1.00 · own-checks completeness 0.25 · fidelity-plan honesty 1.00). The return confirms CP3b and the stage-background cures closed. Remaining named defects: (1) CP4/handoff evidence still incomplete — active-card geometry across interior flips not filed as executable results, card-3 handoff and a boundary-skipping seek not exercised, and comparison.html's card-3 seek target is hardcoded (5.032 s) rather than CONFIG-derived; (2) measured-fit still overstates the contract — fitCard's `fits` judges total height only (a single word wider than the box can pass) and startup discards the returned `fits` result; fit rows carry modeled, not recorded post-fit, horizontal bounds. **Disposition per the completion charge: STOP — no five-lens wave fired on this attempt, no scores.md written. T196 attempt 1 stands IN PROGRESS; the two findings above are the next attempt's cure list.**

## Completion section — Cycle 036 Wave 33 (Amendment A12.3 completion of attempt 1)

**Build under completion:** the Cycle-035 cured build was verified firsthand at this cycle's start — recreation.html SHA-256 `d7dfe9409c55b1e351c29e8b358632f7072733ded8c46bea026054c0fdee0953`, 8,255 B — MATCH against the filed hash (no stop). The two firing-2 cures below were applied to it; every subsequent payload binds the NEW hash.

**Cures applied (firing-2 defects, both):**
1. **CP4/handoff evidence + CONFIG-derived comparison seek.** (a) comparison.html: the card-3 seek target is no longer the hardcoded 5.032 s — `card3SeekTargetS()` reads the recreation's own CONFIG through the iframe (`CONFIG.headHandleS + derive(CONFIG).cards[2].onsetMs / 1000`), and the button label is filled from the same derivation on load; no `5.032`/`5,032` literal remains anywhere in comparison.html (harness-verified below). (b) The completion harness (below) files EXECUTABLE results for active-card geometry across interior flips, the card-3 handoff, and a boundary-skipping seek.
2. **Fit evidence.** fitCard's `fits` now judges width as well as height (`maxWordW ≤ boxW` and every wrapped line ≤ boxW, alongside total height ≤ boxH), and the startup loop's results are CONSUMED: retained in `fitReport`, exposed on `window.__T196`, branched on (`stage.dataset.fit`, console warning on failure) — no longer discarded. fit-table.md re-filed with POST-FIT RECORDED bounds per A12.2 form (i) (harness post-fit ink measurement of the built spans; span geometry from PIL-rendered Liberation Sans Regular ink — named stand-in font). No character-width × factor model remains in the fit evidence.

**Cured build:** recreation.html 9,210 B, SHA-256 `80f16c832df567465c8a51ceed85794a76df46d34cc0eecfa47f95a286873d18`. comparison.html 3,705 B, SHA-256 `9aa977ddb044bce60b03edaa31558887f96f6fa95b8b1dcff69ee41ab5157c6d`.

**Fresh own-checks on the cured build (RAW):**
- Purity (guards.md command 1): `grep -nE 'segment\.mp4|source\.mp4|<video|<img|\.jpg|\.png|1235931636|xmo3' recreation.html` → **0 hits** (grep exit 1, no output). No `url(#id)` references exist in the file.
- Syntax (guards.md command 3): inline script extracted → `node --check` → **OK** (no output). No RNG anywhere in the build.
- Harness: `node codex/harness-completion036.js` (cwd = this item directory; DOM-stubbed load of the cured build's inline script; span geometry via `python3 codex/measure_spans.py`, PIL Liberation Sans Regular, ×4 supersample, 805 word/size pairs measured) → **exit 0, 38 PASS, 0 FAIL** (`HARNESS-DONE fails=0`). Full raw output filed at `codex/harness-completion036-output.txt`.

**A12 EXECUTABLE RECEIPTS — every A11 assertion on the cured build** (harness run for all rows: `node codex/harness-completion036.js`, raw output `codex/harness-completion036-output.txt`):

| Checkpoint | CONFIG expression evaluated | Raw result (verbatim harness line) |
|---|---|---|
| Count (A9.3) | `CONFIG.cards[].words.length` sum | `COUNT configWords=21 perCard=5+5+11` · `PASS A9.3 count 5+5+11=21 :: config=21 vs source 21` |
| CP2 (card-1 entry) | `t = cards[0].onsetMs = 1032` | `PASS CP2 t=cards[0].onsetMs=1032 :: spoken=[This]` |
| P0 | `t = cards[0].onsetMs − epsilonMs = 1031` | `PASS P0 t=1031 stage empty :: active=null` |
| C2 entry (D2-measured) | `t = cards[1].onsetMs = 2080` | `PASS C2entry t=cards[1].onsetMs=2080 :: spoken=[types]` |
| CP1 LOGIC | `t = cards[2].onsetMs = 5032` | `PASS CP1-LOGIC t=cards[2].onsetMs=5032 :: 11/11 present+visible+unspoken, outgoing zero visible` |
| CP1 PAINTED-FRAME | painted frame in [5032, 5060) | `CP1-PAINTED-FRAME :: NOT EXERCISABLE IN THIS SEAT (no browser binary) — separate outcome per amendment A5` (unchanged, never merged with LOGIC) |
| CP3a (gets flip) | `t = cards[2].words[7].onsetMs + epsilonMs = 6641` | `PASS CP3a t=cards[2].words[7].onsetMs+eps=6641 :: spoken=[so,you,can,feel,when,my,voice,gets]` |
| CP3a tie | `t = cards[2].words[7].onsetMs = 6640` | `PASS TIE t=6640 gets unspoken (onset < t strict)` |
| CP3b (census @ source 55.0) | `t = (55.0 − CONFIG.windowStartS) × 1000 × CONFIG.timingScale = 7240` | `PASS CP3b SOURCE-FIDELITY: DEPARTURE-EXPECTED (D3/A1) — build louder SPOKEN at 7240, census white` |
| CP3b timing-swap (changed instant shown) | same expression under `timingScale 1.25` | `PASS CP3b TIMING-SWAP receipt: instant 7240 -> 9050 under timingScale 1.25; scaled louder onset=8600 < 9050 (departure persists)` |
| CP4 counts + identities | every word onset ± epsilonMs | `PASS CP4 span counts constant at every onset ±1ms :: 5/5/11 at all probed instants` · `PASS CP4 span object identities unchanged across all flips (no node created/destroyed)` |
| CP4 active-card GEOMETRY | geometry snapshot of the active card at every interior flip ± epsilonMs | `PASS CP4 active-card GEOMETRY identical across every interior flip (widths/heights/fontPx constant; color sole state property)` + per-flip raw lines, e.g. `GEOM c3 flip gets@6640: widths=[33.75,51.5,51.5,51.5,76.75,42.75,74.75,60.5,89,28.5,80] heights=[17.5,24,17.5,23.5,23.5,24,23.5,27.5,23.5,17.5,23.5] fontPx=32px identical-across-flip=true colorChanged=true` (one such line per c3 flip, all 11, in the filed raw output) |
| CP5a (last flip) | `t = cards[2].words[10].onsetMs + epsilonMs = 8641` | `PASS CP5a t=words[10].onsetMs+eps=8641 :: all 11 spoken` |
| CP5a tie | `t = 8640` | `PASS CP5a-tie t=8640 softer unspoken at exact onset` |
| CP5b (last visible) | `t = totalMs − epsilonMs = 10559` | `PASS CP5b t=totalMs-eps=10559 :: c3 active + all spoken (D4 hold)` |
| Terminal | `t > totalMs` | `PASS TERMINAL t>totalMs clamps to c3 fully spoken :: t=10560` |
| Handoff — card 2 | stepped playback 0→500→1032→1500→2079→2080 vs seek-jump to `cards[1].onsetMs` | `PASS HANDOFF card-2 exercised: stepped playback 0->500->1032->1500->2079->2080 === seek-jump direct to 2080 (state+rendered colors identical)` |
| Handoff — card 3 | stepped playback …→4380→5031→5032 vs seek-jump to `cards[2].onsetMs` | `PASS HANDOFF card-3 exercised: stepped playback ...->4380->5031->5032 === seek-jump direct to 5032 (state+rendered colors identical)` |
| Handoff — boundary-skipping seek | seek 1000 → 7000 (jumps across card boundaries 2080 + 5032) vs stepped playback 0..7000 (250 ms steps + exact boundaries 1032/2080/5032/6641) | `PASS HANDOFF boundary-skipping seek exercised: playback stepped 0..7000 (250ms steps + exact boundaries 1032/2080/5032/6641) === seek 1000 -> 7000 jumping across card boundaries 2080+5032 (state+colors identical at 7000)` |
| Handoff — determinism | `stateAt(CONFIG, 3000)` twice | `PASS HANDOFF determinism stateAt(3000) twice identical :: len=1409` |
| Stage bg | `stage.style.background === CONFIG.bg` | `PASS STAGE-BG stage.style.background === CONFIG.bg (#000000)` |
| Fit (post-fit recorded) | `fitCard(CONFIG, id)` per card on the built spans | `FITROW {"cardId":"c1","fontSizePx":40,"inkW":544,"inkH":37,"lines":2,"maxWordW":143,"lineWidths":[231,312],"boxW":317,"boxH":126,"fits":true}` · c2 `{"fontSizePx":32,"inkW":526,"inkH":30,"lines":2,"maxWordW":159,"lineWidths":[302,224],"fits":true}` · c3 `{"fontSizePx":32,"inkW":767,"inkH":28,"lines":3,"maxWordW":101,"lineWidths":[234,301,232],"fits":true}` · `PASS FIT all cards fit post-fit at 360px stage (box 317x126)` |
| Fit startup consumption | `window.__T196.fitReport` vs fresh `fitCard` calls | `PASS FIT-STARTUP startup fitReport consumed+retained: fitOk=true stage.dataset.fit=ok per-card=c1@40px/fits=true,c2@32px/fits=true,c3@32px/fits=true` |
| Fit width judgment | probe card, one 40-char word, `fitCard` at shrink floor | `FITLONG {"cardId":"cx","fontSizePx":20,"inkW":387,"inkH":19,"lines":1,"maxWordW":387,"lineWidths":[387],"boxW":317,"boxH":126,"fits":false}` · `PASS FIT-WIDTH single word wider than box FAILS fit on width (maxWordW=387 > boxW=317) even though its height fits` |
| Swap — words | amendment A8 swap cards in CONFIG | `PASS SWAP words count + derived total :: 13/8520 (expect 13/8520)` + entry/tie/end lines all PASS in raw output |
| Swap — timing (changed instant shown) | swap cards under `timingScale 1.25`; CP1-analog instant | `PASS SWAP-TIMING derivedTotalMs=10650 s3onset=5625 hereOnset=8250 (expect 10650/5625/8250)` · `PASS SWAP timing CP1-analog at scaled onset 5625: s3 all unspoken — assertion instant MOVED 4500 -> 5625 with timingScale` · default-CONFIG: `PASS TIMING-SWAP default CONFIG CP1 instant MOVED: cards[2].onsetMs 5032 -> 6290 under timingScale 1.25` + PASS at 6290 |
| Swap — palette | `spoken.color #ffe600 → #00e676` | `SWAP-PALETTE spoken #00e676 contrast/bg=12.58 pairDeltaE=83.4` · `PASS SWAP palette contrast >= 7 AND DeltaE >= 30 :: 12.58/83.4` (default: contrast 19.26/16.57, ΔE 90.5, both PASS) |
| Comparison seek | `CONFIG.headHandleS + derive(CONFIG).cards[2].onsetMs/1000` evaluated against comparison.html source | `PASS COMPARISON no hardcoded 5.032/5,032 seek literal remains in comparison.html` · `COMPARISON-SEEK derived target: CONFIG.headHandleS + derive(CONFIG).cards[2].onsetMs/1000 = 0.5 + 5032/1000 = 5.532 s (video time)` · `PASS COMPARISON card-3 seek target CONFIG-derived in code (derive + headHandleS read from recreation CONFIG)` |

**Census-anchor mapping (binding, carried into the timing-lens payload):** window source 47.76–58.32 s (segment-anchored, head handle 0.5 s; build 0 ms ≡ source 47.76 s). Anchors: card 1 entry build 1032 ms (source ≈48.79) · card 2 entry build 2080 ms (source 49.84, D2 frame-measured) with "types" prescribed SPOKEN at entry (speech-first, D2) · CP3a build 6641 ms · CP3b census source 55.0 s ≡ build 7240 ms — build state "louder" SPOKEN vs census WHITE = DEPARTURE-EXPECTED (D3/A1, ASR schedule vs visual lag) · last flip build 8640 ms · card 3 held to build 10560 ms (D4, past the source's next-header onset at source 57.167 s).

**A6 legs re-filed on the cured build:** `fit-table.md` — 0 HITs (post-fit recorded bounds, form (i)) · `config-census.md` — 0 HITs (one borderline carried in print: 0.18em word margin, structural-fixed).

**jev-prewave A12.3 completion re-fire:** payload `codex/payload-prewave-completion.txt` binds the cured build SHA-256 `80f16c83…` (header + CONFIG + build-record + packet section + guards list + both A6 outputs verbatim + census-anchor mapping). Return filed verbatim at `jev-prewave-completion.md` (+ raw). Disposition recorded in scores.md.
