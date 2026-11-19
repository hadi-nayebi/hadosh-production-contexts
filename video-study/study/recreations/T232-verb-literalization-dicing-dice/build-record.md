# T232 — build record · Cycle 039 Wave 36 · FIRST ATTEMPT

- **Item:** T232 — Verb literalization: dicing produces dice · queue #103 · Packet #13 (PES "Fresh Guacamole").
- **Plan authority:** `runs/2026-11-18-cycle-039-wave-36/item-T232-observe-plan.md` AS AMENDED at its §2b (four gates fired before any build script, A9.2: codex-observe CONFIRMED-WITH-GAPS · jev-observe-exit ADVANCE-WITH-GAPS · codex-plan-review REVISE applied · jev-plan-exit REVISE/UNBOUND-SCHEDULE applied).
- **Schedule basis:** segment-anchored (buildMs = segment-relative ms; segment = source 29–36 s), with ONE named allocation: the literalization swap at 2500 ms, the midpoint of the census bracket (2000 still-baseball, 3000 dice) — departure table in the item record §2.3.
- **Final build:** recreation.html sha256 `bbe53950278573b0325e3824c05f7bb4e610fd336d291349d038afe59b9701ef` · 12,081 B. Cure rounds on the build: (1) knife saw-window boundary — at t = sliceDurMs the blade still read "saw" while census CP1 shows it withdrawn; window changed to [0, sliceDurMs); (2) pile bounds — pass-4 scatter ellipse (y factor 0.45 as a code literal) spilled die centers below the board's bottom edge; factor moved to CONFIG `scatterYFrac` 0.32 and the P4 bounds assertion passes; (3) config-census cures — `stackRowPitchFrac`, `pileCenterDyPx`, `pipOffsetFrac`, `stitchRxFrac`, `stitchYFrac` moved from code literals into CONFIG (config-census.md §1); (4) PREWAVE CURE ROUND (jev-prewave firing 1 HOLD, §6): unapplied CONFIG keys `palette.ring`/`palette.core` and `fontFamily` REMOVED from CONFIG (the cut-face interior is T08's deferred subject; the comparison font stack is comparison-local CSS), the plan's P-swap-minus criterion corrected to the exact evaluated progress 0.998, and three receipts extended (C@2000 strip predicate · P-SWAP strip disappearance · C@7000 settle comparison + SWAP-CENSUS-MOVEMENT). All receipts below are from the final build.
- **Construction:** single SVG scene; CONFIG at top; dome strips (drawn half-disc slices with stitch dashes), a drawn knife (blade + handle), and dice as rect+pip groups — all geometry from `stateAt(cfg,t)`, a pure function evaluable in node, exposed as `window.__T232`. No specimen media, no traced redraws (§6.1).

## §1 Segment binding (guards.md command 5)
Cut at Execute from the archived source `hidden_files/study/video-digests/2026-11-17-yt-dnjdjiwcfy/source.mp4` (100.894 s, vp9 1920×1080): `ffmpeg -ss 28.5 -t 8.0`, re-encoded libx264/yuv420p + AAC, faststart.
Raw ffprobe of `segment.mp4`:
```
codec_name=h264
width=1920
height=1080
codec_name=aac
duration=8.000000
size=2887357
d5debada61472adb935bde674a45207c3401ae9634c1436407ed404271c25653  segment.mp4
```
Window check: cut covers source 28.5–36.5 s ⊇ packet window 29–36 s (±0.5 s handles) ✓. Handle content priced at §2b: the +0.5 s handle (36–36.5 s) contains NO gather (post-window census: pile complete at 36.5 s, hands sweeping by 37.5 s).

## §2 Own checks — raw harness output (A9.4; harness = node, CONFIG + logic scripts extracted from recreation.html and evaluated via vm)
```
PASS VALIDATE-DEFAULT :: ok=true errors=[]
PASS DERIVE :: completeAtMs=6900 durationMs=7400 maxCount=84
PASS CP0@0 :: dice=0 strips visible gap=0 knife=saw
PASS P-SLICE@1000 :: gap=10 knife=rest (expr sliceDurMs=1000)
PASS C@1000 :: census instant 1000: strips full gap, dice 0, knife rest
PASS C@2000 :: census instant 2000: dice=0 strips.visible=true knife chop progress=0 (expr passes[0].tMs-chopLeadMs=2000)
PASS P-SWAP-MINUS@2499 :: strips visible, dice 0, knife=chop progress=0.998
PASS P-SWAP@2500 :: dice=9 strips.visible=false size=37 (expr passes[0].tMs=2500)
PASS C@3000 :: census instant 3000: dice=9
PASS COUNT-PASS0@2500 :: built=9 CONFIG passes[0].count=9
PASS COUNT-PASS1@3500 :: built=15 CONFIG passes[1].count=15
PASS COUNT-PASS2@4500 :: built=18 CONFIG passes[2].count=18
PASS COUNT-PASS3@5600 :: built=56 CONFIG passes[3].count=56
PASS COUNT-PASS4@6500 :: built=84 CONFIG passes[4].count=84
PASS C@4000 :: dice=15
PASS P2@4500 :: dice=18 pass2 die size=34.78 (expr dieBasePx*passes[2].sizeFactor=34.78)
PASS C@5000 :: dice=18
PASS P3@5600 :: dice=56 meanNew=22.20 meanOld=37.00 die0 migrated (240.0,302.0)->(216.7,281.8) inBoard=true
PASS C@6000 :: dice=56
PASS P4@6500 :: dice=84 minSize=14.06 (expr dieBasePx*passes[4].sizeFactor=14.06) inBoard=true
PASS C@7000 :: census instant 7000: dice=84
PASS C@7000-SETTLE :: settle complete at 7000 (expr settleP=clamp01((7000-passes[4].tMs)/settleDurMs)=1, settleK=settleFrac=0.12); every die no farther from pile center than at P4; differs from P4 only by settle
PASS P5-HOLD@7150 :: hold identity completeAt+250 vs completeAt (expr completeAtMs=6900)
PASS SWAP-CONTENT :: counts [6,10,12,30,44] followed at every pass; dome palette leather=#dce8c8 stitch=#2e6db0 (CONFIG-bound, renderer reads palette.leather/stitch)
PASS SWAP-TIMING :: P-swap instant 2500 -> 2900; fixed instant 2700 dice default=9 swapped=0
PASS SWAP-TIMING-REJECTED :: errors=["phase order: pass 1 tMs not increasing","phase order: chopLeadMs not below smallest inter-pass gap"]
PASS SWAP-PALETTE :: pip=#7a1f6d (stateAt carries palette via CONFIG; renderer binds palette.pip to pip circles)
PASS SWAP-CENSUS-MOVEMENT :: fixed census instant 4000: dice default=15 -> content-swapped=10 (CONFIG expression: passes[active(4000)].count under each table)
SUMMARY pass=28 fail=0
```
Rendered-palette receipt (stub-DOM run of the actual render script under swapped CONFIG, created elements' fill attributes captured):
```
PASS PALETTE-RENDERED :: stub-DOM render under swapped CONFIG: strip fill=#dce8c8 captured=true · pip fill=#7a1f6d captured=true
```
Syntax (command 3): `node --check` rc=0 on all three recreation script blocks (t232-config · t232-logic · t232-render) and on the comparison script. RNG census: `Math.random` grep count 0 — **RNG ABSENT as a call**; all randomness is the seeded mulberry32 stream on CONFIG `seed` (deterministic; the same CONFIG always builds the same dice set, which the count assertions above rely on).
Purity grep (command 1) raw: pattern `segment\.mp4|source\.mp4|<video|<img|dNJdJIwCF_Y` over recreation.html → **0 hits**. External-reference scan (`src=|href=|@import|url(`) → **no matches** (the only URI string is the SVG namespace identifier in the render script, never fetched); asset inventory = recreation.html alone (zero external assets).
Comparison check: comparison.html receipts — `HANDLE_OFFSET_S = 0.5` present (mapping `buildMs = clamp((video.currentTime − 0.5) × 1000, 0, 7400)`: video 3.0 s → buildMs 2500 · video 0 s → 0 · video 8.0 s → 7400) · labels verbatim ("ORIGINAL — PES Fresh Guacamole @ 29–36 s" · "RECREATION — T232 verb literalization: dicing produces dice, parameterized") · phone stacking `@media (max-width:560px)` column rule + sticky controls · comparison script syntax rc=0. Browser playback is not exercisable in this seat — PIXEL-UNVERIFIED, carried to scores.md.
**Count assertion (A9.3):** source table (census visible-die estimates) 9 · ~15 · ~18 · ~55 · ~85 vs CONFIG table 9 · 15 · 18 · 56 · 84 vs built counts at each pass instant (COUNT-PASS0–4 above): built == CONFIG at all five passes ✓. The census figures are estimates of visible dice (occluded dice are uncountable); the assertion binds built↔CONFIG exactly, as priced in the item record §1.3.

## §3 A6 legs (on the final build)
- fit-table.md — 0 HITs: the recreation carries no subject text (census on its face); comparison labels measured with PIL + named stand-in font DejaVu Serif (310×12 fits one line · 519×13 wraps in an auto-height block, no clipping; ink heights 12–13 px ≥ 11 floor).
- config-census.md — 0 HITs: all literals classified (subject-shaping literals found in the first draft were moved into CONFIG during Execute, listed on the census's face); every CONFIG key incl. nested `passes[]` keys resolved to value-flowing sites; no CSS variables in use.

## §4 Fidelity plan (implemented / deferred)
Implemented: slicing tail with strips separating and holding (SB-A) · literalization swap at the dicing onset, blade-coupled (SB-B) · stack growth passes at large size (SB-C) · multiplication chop with per-pass size factors and stack→pile migration (SB-D) · final spread to 84 dice (SB-E) · completed-pile hold with a small settle (SB-F). Deferred (named, lawful): the hands (drawn hands are ornament; the knife and objects carry the mechanic) · the post-window gather/sprinkle into the molcajete (ev/t038 @ 38 s, outside the window; gather onset priced ∈ (36.5, 37.5) s at §2b) · the halved baseball shell resting at back-left in later census frames (T08 set dressing) · sub-pass stop-motion micro-steps (not resolved by the 1 s census, not claimed).

## §5 RECEIPT INDEX (A13) — reconciled before payload assembly
Reconciliation performed against: guards.md commands 1–8 · the amended Plan's A11 assertions (CP0, P-slice, P-swap-minus, P-swap, P1–P5 as COUNT-PASS/P2/P3/P4/P5, C@1000/2000/3000/4000/5000/6000/7000) · expected CONFIG keys incl. nested/array `passes[]` keys (config-census §2 = the expected set). Result: **no missing expected line; every line below carries its receipt or a NOT-DEMANDED line with a governing citation.**

| Index line | Receipt / disposition |
|---|---|
| cmd 1 — purity grep | §2 raw: 0 hits; no `url(#id)` occurrences to classify |
| cmd 2 — swap test | §2 raw: SWAP-CONTENT (counts + dome palette) · SWAP-TIMING (P-swap instant 2500→2900; fixed 2700 ms flips 9→0) · SWAP-TIMING-REJECTED (phase-order validation) · SWAP-PALETTE + PALETTE-RENDERED stub-DOM capture — all PASS |
| cmd 3 — syntax + RNG census | §2: node --check rc=0 ×4 scripts · Math.random grep 0, seeded mulberry32 on CONFIG seed |
| cmd 4 — scores arithmetic | NOT-DEMANDED for the builder record — seat-side at consolidation (INSTRUCTION §5.5) |
| cmd 5 — segment binding | §1 raw ffprobe: 8.000000 s, h264 1920×1080, covers 28.5–36.5 ⊇ window 29–36 |
| cmd 6 — measured-fit leg | fit-table.md: 0 HITs; PIL rows on its face |
| cmd 7 — config-census leg | config-census.md: 0 HITs; key→site table on its face |
| cmd 8 — census-anchor zero-state probe | §2 CP0@0 PASS (stateAt returns dice 0, strips at gap 0, knife sawing at t = 0) |
| A11 CP0 @0 | §2 CP0@0 — CONFIG expression: stateAt(CONFIG, 0) |
| A11 P-slice @1000 | §2 P-SLICE — expression: stateAt(CONFIG, CONFIG.sliceDurMs) = 1000; gap = stripGapPx, knife rest |
| A11 C@1000 | §2 C@1000 — census instant: strips full gap, dice 0, knife rest |
| A11 C@2000 | §2 C@2000 — census instant: dice 0, knife chop progress 0; expression passes[0].tMs − chopLeadMs = 2000 |
| A11 P-swap-minus @2499 | §2 P-SWAP-MINUS — expression: passes[0].tMs − 1; strips visible, knife chop 0.998 |
| A11 P-swap @2500 | §2 P-SWAP — expression: passes[0].tMs = 2500; dice = passes[0].count = 9, size 37 |
| A11 C@3000 | §2 C@3000 — census instant: dice 9 |
| A11 P1 @3500 (COUNT-PASS1) | §2 COUNT-PASS1 — expression: passes[1].tMs; built 15 = CONFIG count |
| A11 C@4000 | §2 C@4000 — census instant: dice 15 |
| A11 P2 @4500 | §2 P2 — expression: passes[2].tMs; dice 18, pass-2 die size 34.78 = dieBasePx × passes[2].sizeFactor |
| A11 C@5000 | §2 C@5000 — census instant: dice 18 |
| A11 P3 @5600 | §2 P3 — expression: passes[3].tMs; dice 56, meanNew 22.20 < meanOld 37.00, die-0 migration + inBoard receipts |
| A11 C@6000 | §2 C@6000 — census instant: dice 56 |
| A11 P4 @6500 | §2 P4 — expression: passes[4].tMs; dice 84, minSize 14.06 = dieBasePx × passes[4].sizeFactor, inBoard |
| A11 C@7000 | §2 C@7000 + C@7000-SETTLE — census instant: dice 84; settle state evaluated (settleP = 1, settleK = settleFrac) and the state compared against P4 (count equal, every die no farther from pile center, differs only by settle) |
| A11 P5 @7150 | §2 P5-HOLD — expression: completeAtMs + 250 (completeAtMs derived = 6900); full dice-set equality vs completeAt |
| Census-instant movement under swap | §2 SWAP-CENSUS-MOVEMENT — fixed census instant 4000: dice 15 → 10 under the content swap, by the CONFIG expression passes[active(4000)].count |
| Count assertion (A9.3) | §2 COUNT-PASS0–4 + the source/CONFIG/built table in §2 |
| Phase-order invariant | §2 VALIDATE-DEFAULT ok + SWAP-TIMING-REJECTED receipt |
| Census rows for expected CONFIG keys | config-census.md §2 — every expected key (nested/array incl.) carries its site; no expected key lacks a row |

## §6 Prewave disposition
- **Firing 1 → HOLD** (primary ASSERTED-CHECKS; return verbatim: `codex/jev-prewave.md`). Dimension scores: parameterization 0.85 · purity 1.00 · own-checks 0.40 · fidelity-plan honesty 1.00. Findings: (a) census claimed a value flow for `fontFamily` the comparison page does not have, and `palette.ring`/`palette.core` had no application sites; (b) the §5 index omitted the C@2000 strip-visibility predicate as its own line; (c) the P-swap receipt did not print strip disappearance; (d) C@7000 recorded only the count, no settle state or P4 comparison; (e) the P-swap-minus receipt (0.998) did not match the plan's stated criterion (progress 1).
- **Cure round (applied, receipts re-filed above on the cured build):** `fontFamily`, `palette.ring`, `palette.core` removed from CONFIG and from the plan's parameter table (with the reasons printed there); plan P-swap-minus criterion amended to the exact evaluated expression = 0.998; harness receipts extended — C@2000 prints strips.visible, P-SWAP prints strips.visible=false, new C@7000-SETTLE line (settle expression evaluated + P4 comparison), new SWAP-CENSUS-MOVEMENT line (fixed census instant 4000 moves 15 → 10 under the content swap); config-census §2 rewritten to the 13 real palette keys with one application site each (grep receipt: one `P.<key>` site per key). Harness on the cured build: 28 PASS / 0 FAIL.
- **Firing 2 → HOLD** (primary ASSERTED-CHECKS; return verbatim: `codex/jev-prewave-2.md`). Dimension scores: parameterization 0.90 · purity 1.00 · own-checks 0.55 · fidelity-plan honesty 1.00. The cure round's fixes were confirmed on the face of the return (keys removed · P-SWAP strip predicate · C@7000-SETTLE · P-swap-minus criterion agreement · timing-swap probe movement). Remaining findings: (a) §5 still indexes C@2000 as one line while the binding §2.3 mapping lists the chop-start and strip-visibility predicates as two assertions; (b) the fixed census rows still lack individually evaluated CONFIG expressions, and SWAP-CENSUS-MOVEMENT shows a count change at a fixed instant rather than a moved evaluation instant; (c) `pipStyle` is declared in CONFIG but never read by the build (census §2 claimed a flow that does not exist).
- **Disposition (A12 two-HOLD stop): NO VERDICT.** The five-lens wave was NOT fired. The priced cures for the next attempt stand in scores.md; no further build or record changes were made after this firing, so the build hash above remains the scored-state hash.

---

# COMPLETION (A12.3) — Cycle 040 Wave 37 · cure round on the Wave-36 build

- **Authority:** scores.md priced cure list (4 items, from jev-prewave firing 2) + RUN.md (Cycle 040) §1 T232 pricing. ONLY the filed cures were applied; no other build or record change.
- **Build before:** recreation.html sha256 `bbe53950278573b0325e3824c05f7bb4e610fd336d291349d038afe59b9701ef` · 12,081 B.
- **Build after:** recreation.html sha256 `a4ef82acf89d858d8decc0382acbe1ce4fffdd11d53dce7d0f779db28bfc4a1e` · 12,448 B. The ONLY build change is cure 3 (pipStyle binding, below); cures 1–2 are record/receipt-form cures and cure 4 is this refile.

## C1 — Cure application
1. **Receipt-index granularity:** the §5 C@2000 line is SPLIT in the completion index below into C@2000-CHOP (knife progress 0 at `passes[0].tMs − chopLeadMs`) and C@2000-STRIP (strips.visible = true at 2000), each pointing at its own raw harness receipt (§C2). Whole-index audit against the Plan §2.3 mapping: one further merged pair found and split — C@7000 (count) vs C@7000-SETTLE (settle state + P4 comparison) already stood as two harness lines and are indexed as two lines below. No other merged pair found: every other §2.3 bullet maps to exactly one index line.
2. **Census-row expressions + census movement:** every fixed census row C@1000…C@7000 carries its evaluated CONFIG expression in the completion index below (`passes[max{i : passes[i].tMs ≤ t}].count` evaluated per row, with the active index printed in each raw receipt). SWAP-CENSUS-MOVEMENT is REPLACED as the primary census-movement line by two receipts (§C2): SWAP-CENSUS-MOVEMENT-MOVED — the census-anchored chop-start probe's evaluation instant (CONFIG expression `passes[0].tMs − chopLeadMs`, which IS C@2000 in the default build) MOVES 2000 → 2400 under the timing swap, with knife mode/progress evaluated at the moved instant; and SWAP-CENSUS-MOVEMENT — at the FIXED census instant 2000 the census instant's own state changes under the timing swap (knife mode chop → rest). The prior content-swap line is retained as a supplement (INFO SWAP-CENSUS-CONTENT, fixed 4000: dice 15 → 10). Note on the scores.md example: knife mode at C@3000 does NOT change under this timing swap (pass 1's chop window [3000, 3500] is untouched by the passes[0] swap, and at 3000 the knife is chop in both builds) — the demonstrable census-anchored instance is C@2000, filed above; the C@3000 fact is printed here rather than a non-changing receipt being dressed as movement.
3. **pipStyle binding — BOUND (preferred form):** the render script now branches on `cfg.pipStyle` for the pip drawing form: `"squares"` → pip rects · `"diamonds"` → pip rects rotated 45° · otherwise (`"dots"`, the default) → pip circles. Receipt proving the flow under swapped values (stub-DOM render of the actual render script, §C2): PIPSTYLE-DOTS circle=34 rect=0 · PIPSTYLE-SQUARES rect=34 circle=0 · PIPSTYLE-DIAMONDS rect=34 rotated45=34 circle=0 (9 dice at 2500 ms). The key stays in CONFIG, the plan table, and census §2 — with its site corrected in config-census.md's completion refile to this real branch (the Wave-36 census §2 site claim for pipStyle is annotated SUPERSEDED there).
4. **Refile:** this completion section + the A6 leg refiles (fit-table.md + config-census.md completion sections, both on sha a4ef82ac…) + the completion receipt index (§C3) stand on the cured build. ONE jev-prewave completion re-fire follows (§C4).

## C2 — Fresh own-checks on the cured build — raw harness output (A9.4)
Harness = node, CONFIG + logic scripts extracted from the cured recreation.html and evaluated via vm; render receipts = stub-DOM run of the actual render script. Count assertion: built == CONFIG at all five passes (COUNT-PASS0–4 below) ✓.
```
PASS VALIDATE-DEFAULT :: ok=true errors=[]
PASS DERIVE :: completeAtMs=6900 durationMs=7400 maxCount=84
PASS CP0@0 :: dice=0 strips visible gap=0 knife=saw
PASS P-SLICE@1000 :: gap=10 knife=rest (expr sliceDurMs=1000)
PASS C@1000 :: census instant 1000: strips full gap, dice 0, knife rest (expr passes[max{i : passes[i].tMs <= 1000}].count = 0, active=-1)
PASS C@2000-CHOP :: census instant 2000 chop-start: knife mode=chop progress=0 (expr passes[0].tMs-chopLeadMs=2000)
PASS C@2000-STRIP :: census instant 2000 strip-visibility: strips.visible=true dice=0 (expr stateAt(CONFIG,2000).strips.visible)
PASS P-SWAP-MINUS@2499 :: strips visible, dice 0, knife=chop progress=0.998
PASS P-SWAP@2500 :: dice=9 strips.visible=false size=37 (expr passes[0].tMs=2500)
PASS C@3000 :: census instant 3000: dice=9 (expr passes[max{i : passes[i].tMs <= 3000}].count = 9, active=0)
PASS COUNT-PASS0@2500 :: built=9 CONFIG passes[0].count=9
PASS COUNT-PASS1@3500 :: built=15 CONFIG passes[1].count=15
PASS COUNT-PASS2@4500 :: built=18 CONFIG passes[2].count=18
PASS COUNT-PASS3@5600 :: built=56 CONFIG passes[3].count=56
PASS COUNT-PASS4@6500 :: built=84 CONFIG passes[4].count=84
PASS C@4000 :: dice=15 (expr passes[max{i : passes[i].tMs <= 4000}].count = 15, active=1)
PASS C@5000 :: dice=18 (expr passes[max{i : passes[i].tMs <= 5000}].count = 18, active=2)
PASS C@6000 :: dice=56 (expr passes[max{i : passes[i].tMs <= 6000}].count = 56, active=3)
PASS C@7000 :: dice=84 (expr passes[max{i : passes[i].tMs <= 7000}].count = 84, active=4)
PASS P2@4500 :: dice=18 pass2 die size=34.78 (expr dieBasePx*passes[2].sizeFactor=34.78)
PASS P3@5600 :: dice=56 meanNew=22.20 meanOld=37.00 die0 migrated (240.0,302.0)->(216.7,281.8) inBoard=true
PASS P4@6500 :: dice=84 minSize=14.06 (expr dieBasePx*passes[4].sizeFactor=14.06) inBoard=true
PASS C@7000-SETTLE :: settle complete at 7000 (expr settleP=clamp01((7000-passes[4].tMs)/settleDurMs)=1, settleK=settleFrac=0.12); every die no farther from pile center than at P4; differs from P4 only by settle (differs=true)
PASS P5-HOLD@7150 :: hold identity completeAt+250 vs completeAt (expr completeAtMs=6900)
PASS SWAP-CONTENT :: counts [6,10,12,30,44] followed at every pass; dome palette leather=#dce8c8 stitch=#2e6db0 (CONFIG-bound, renderer reads palette.leather/stitch)
PASS SWAP-TIMING :: P-swap instant 2500 -> 2900; fixed instant 2700 dice default=9 swapped=0
PASS SWAP-CENSUS-MOVEMENT-MOVED :: moved evaluation instant: chop-start probe instant (expr passes[0].tMs-chopLeadMs) 2000 -> 2400 under timing swap; at the moved instant knife mode=chop progress=0 (default at its instant: chop/0)
PASS SWAP-CENSUS-MOVEMENT :: fixed census instant 2000: knife mode default=chop -> timing-swapped=rest (expr passes[0].tMs-chopLeadMs moves 2000->2400, so at fixed 2000 the swapped build has not entered the chop window)
INFO SWAP-CENSUS-CONTENT :: fixed census instant 4000: dice default=15 -> content-swapped=10 (CONFIG expression: passes[active(4000)].count under each table)
PASS SWAP-TIMING-REJECTED :: errors=["phase order: pass 1 tMs not increasing","phase order: chopLeadMs not below smallest inter-pass gap"]
PASS SWAP-PALETTE :: pip=#7a1f6d (stateAt carries palette via CONFIG; renderer binds palette.pip to pip elements)
PASS PIPSTYLE-DOTS :: render under cfg.pipStyle="dots": pip elements circle=34 rect=0 (dice at 2500=9)
PASS PIPSTYLE-SQUARES :: render under swapped cfg.pipStyle="squares": pip elements rect=34 circle=0 — the render branch on cfg.pipStyle changes the pip drawing form
PASS PIPSTYLE-DIAMONDS :: render under swapped cfg.pipStyle="diamonds": pip elements rect=34 rotated45=34 circle=0
PASS PALETTE-RENDERED :: stub-DOM render under swapped CONFIG: strip fill=#dce8c8 captured=true · pip fill=#7a1f6d captured=true
SUMMARY pass=34 fail=0
```
Purity grep (command 1) raw on the cured build: pattern `segment\.mp4|source\.mp4|<video|<img|dNJdJIwCF_Y` over recreation.html → **0 hits**. External-reference scan (`src=|href=|@import|url(`) → **0 matches**. Asset inventory = recreation.html alone.
Syntax (command 3): `node --check` rc=0 on all three recreation script blocks (t232-config · t232-logic · t232-render) and on the comparison script. RNG census: `Math.random` grep count **0** — seeded mulberry32 on CONFIG `seed`, as before.
Comparison check: stands on the cured build (comparison.html unchanged; handle offset, clamp mapping, labels verbatim, phone stacking rule, script syntax rc=0 all re-verified this round). PIXEL-UNVERIFIED limitation stands (no browser binary in this seat).

## C3 — RECEIPT INDEX (A13, completion) — reconciled before payload assembly
Reconciliation performed against: guards.md commands 1–8 · the amended Plan's A11 assertions · the Wave-36 §5 index INHERITED WHOLE (A13.2 — every prior line stands below; the only changes are the two splits and the census-movement replacement charged by the cure list, each printed) · expected CONFIG keys incl. nested/array `passes[]` keys (config-census §2 completion refile = the expected set, now including pipStyle's real site). Result: **no missing expected line; no assertion dropped without a printed disposition; every line carries its executable receipt or a NOT-DEMANDED line with a governing citation.** Evidence form (A13.3) verified per line before assembly: CONFIG-derived inputs carry their CONFIG expression + evaluated value; checks carry their raw observed result.

| Index line | Receipt / disposition |
|---|---|
| cmd 1 — purity grep | §C2 raw: 0 hits on the cured build; no `url(#id)` occurrences to classify |
| cmd 2 — swap test | §C2 raw: SWAP-CONTENT · SWAP-TIMING (instant 2500→2900; fixed 2700 flips 9→0) · SWAP-TIMING-REJECTED · SWAP-PALETTE + PALETTE-RENDERED · PIPSTYLE-DOTS/SQUARES/DIAMONDS (pipStyle swap) — all PASS |
| cmd 3 — syntax + RNG census | §C2: node --check rc=0 ×4 scripts · Math.random grep 0, seeded mulberry32 on CONFIG seed |
| cmd 4 — scores arithmetic | NOT-DEMANDED for the builder record — seat-side at consolidation (INSTRUCTION §5.5) |
| cmd 5 — segment binding | §1 raw ffprobe stands (segment unchanged): 8.000000 s, h264 1920×1080, covers 28.5–36.5 ⊇ window 29–36 |
| cmd 6 — measured-fit leg | fit-table.md completion refile: 0 HITs on sha a4ef82ac… |
| cmd 7 — config-census leg | config-census.md completion refile: 0 HITs on sha a4ef82ac…; pipStyle priced by its real render-branch site |
| cmd 8 — census-anchor zero-state probe | §C2 CP0@0 PASS (dice 0, strips at gap 0, knife sawing at t = 0) |
| A11 CP0 @0 | §C2 CP0@0 — CONFIG expression: stateAt(CONFIG, 0) |
| A11 P-slice @1000 | §C2 P-SLICE — expression: stateAt(CONFIG, CONFIG.sliceDurMs) = 1000; gap = stripGapPx, knife rest |
| A11 C@1000 | §C2 C@1000 — expression: `passes[max{i : passes[i].tMs ≤ 1000}].count` = 0 (active −1); strips full gap, dice 0, knife rest |
| A11 C@2000-CHOP (split 1 of 2, cure 1) | §C2 C@2000-CHOP — expression: passes[0].tMs − chopLeadMs = 2000; knife mode chop, progress 0 |
| A11 C@2000-STRIP (split 2 of 2, cure 1) | §C2 C@2000-STRIP — expression: stateAt(CONFIG, 2000).strips.visible = true; dice 0 |
| A11 P-swap-minus @2499 | §C2 P-SWAP-MINUS — expression: passes[0].tMs − 1; strips visible, knife chop 0.998 |
| A11 P-swap @2500 | §C2 P-SWAP — expression: passes[0].tMs = 2500; dice = passes[0].count = 9, strips.visible = false, size 37 |
| A11 C@3000 | §C2 C@3000 — expression: `passes[max{i : passes[i].tMs ≤ 3000}].count` = 9 (active 0); dice 9 |
| A11 P1 @3500 (COUNT-PASS1) | §C2 COUNT-PASS1 — expression: passes[1].tMs; built 15 = CONFIG passes[1].count (expression `passes[max{i : passes[i].tMs ≤ 3500}].count` = 15) |
| A11 C@4000 | §C2 C@4000 — expression: `passes[max{i : passes[i].tMs ≤ 4000}].count` = 15 (active 1); dice 15 |
| A11 P2 @4500 | §C2 P2 — expression: passes[2].tMs; dice 18, pass-2 die size 34.78 = dieBasePx × passes[2].sizeFactor |
| A11 C@5000 | §C2 C@5000 — expression: `passes[max{i : passes[i].tMs ≤ 5000}].count` = 18 (active 2); dice 18 |
| A11 P3 @5600 | §C2 P3 — expression: passes[3].tMs; dice 56, meanNew 22.20 < meanOld 37.00, die-0 migration + inBoard receipts |
| A11 C@6000 | §C2 C@6000 — expression: `passes[max{i : passes[i].tMs ≤ 6000}].count` = 56 (active 3); dice 56 |
| A11 P4 @6500 | §C2 P4 — expression: passes[4].tMs; dice 84, minSize 14.06 = dieBasePx × passes[4].sizeFactor, inBoard |
| A11 C@7000 | §C2 C@7000 — expression: `passes[max{i : passes[i].tMs ≤ 7000}].count` = 84 (active 4); dice 84 |
| A11 C@7000-SETTLE | §C2 C@7000-SETTLE — settleP = clamp01((7000 − passes[4].tMs)/settleDurMs) = 1, settleK = settleFrac = 0.12; every die no farther from pile center than at P4; differs from P4 only by settle |
| A11 P5 @7150 | §C2 P5-HOLD — expression: completeAtMs + 250 (completeAtMs derived = 6900); full dice-set equality vs completeAt |
| Census-movement (cure 2, replacing the Wave-36 line) | §C2 SWAP-CENSUS-MOVEMENT-MOVED (evaluation instant `passes[0].tMs − chopLeadMs` moves 2000 → 2400 under the timing swap, knife chop/0 evaluated at the moved instant) + SWAP-CENSUS-MOVEMENT (fixed census instant 2000: knife mode chop → rest under the timing swap); supplement INFO SWAP-CENSUS-CONTENT (fixed 4000: dice 15 → 10 under the content swap, expression passes[active(4000)].count) |
| pipStyle binding (cure 3) | §C2 PIPSTYLE-DOTS/SQUARES/DIAMONDS stub-DOM receipts — render branches on cfg.pipStyle; element type counts change under swapped values (circle 34→0, rect 0→34) |
| Count assertion (A9.3) | §C2 COUNT-PASS0–4: built == CONFIG at all five passes + the source/CONFIG/built table in §2 |
| Phase-order invariant | §C2 VALIDATE-DEFAULT ok + SWAP-TIMING-REJECTED receipt |
| Census rows for expected CONFIG keys | config-census.md §2 + completion refile — every expected key (nested/array incl., pipStyle included) carries its site; no expected key lacks a row |

## C4 — Prewave disposition (completion re-fire)
- **jev-prewave completion re-fire (the single A12.3-authorized re-fire) → HOLD** (primary ASSERTED-CHECKS). Dimension scores: parameterization 0.95 · purity pre-check 1.00 · own-checks completeness 0.75 · fidelity-plan honesty 1.00. Return verbatim: run dir `item-T232-jev-prewave-completion-return.raw` / `.md` + artifact `codex/jev-prewave-completion-cycle040.md`; payload: run dir `payload-T232-jev-prewave-completion.txt`.
- The return confirms the completion cures on their face: §C3's C@2000 split, the chop-start probe's moved instant (2000 → 2400), and the pipStyle CONFIG-swap demonstration are all credited in the own-checks / parameterization reasoning.
- **Remaining findings (the new cure list, filed in scores.md):** (1) C@1000's count expression indexes an empty active-pass set — refile with the executable CONFIG-derived count expression including its zero fallback when no pass is active, and print the observed strip visibility, gap, and knife mode; (2) C@2000-STRIP's expression covers visibility alone while the binding §2.3 assertion also requires zero dice — refile with executable expressions and evaluated results for both predicates; (3) point both §C3 entries to the corrected raw receipts.
- **Disposition: NO VERDICT.** The five-lens wave was NOT fired (HOLD form). No further re-fire is made in this cycle; the item's next re-fire is **PENDING AUTHORIZATION**. The item remains IN PROGRESS, mid-attempt, and does not route to practice unscored.
