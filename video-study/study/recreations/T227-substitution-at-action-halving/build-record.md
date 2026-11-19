# T227 — build record · Cycle 039 Wave 36 · FIRST ATTEMPT

- **Item:** T227 — Substitution-at-action: the halving that reveals flesh · queue #102 · Packet #13 (PES "Fresh Guacamole").
- **Plan authority:** `runs/2026-11-18-cycle-039-wave-36/item-T227-observe-plan.md` AS AMENDED at its §2b (four gates fired before any build script, A9.2: codex-observe CONFIRMED-WITH-GAPS · jev-observe-exit ADVANCE-WITH-GAPS · codex-plan-review REVISE applied · jev-plan-exit REVISE/UNBOUND-SCHEDULE applied).
- **Schedule basis:** segment-anchored (buildMs = segment-relative ms; segment = source 9–14 s).
- **Final build:** recreation.html sha256 `63d7fab9446eaa17bb9d237bfaca5afd7beb37dfa1598e1b16afa30af3fa7ad4` · 12,096 B. Cure rounds on the build: (1) layer-order cure — flesh ellipses moved behind the blade (Plan's cover geometry); dead fleshCore element removed; (2) config-census cure — `easeSaw` given a value-flowing site in stateAt (was declaration-only); (3) config-census cure — `palette.skin` given a rendered site (rim ellipse behind the seam). All receipts below are from the final build.
- **Plan arithmetic corrections priced by receipts (not silent):** Plan §2.4's swapped C@3000 flesh estimate printed 0.743; the CONFIG expression evaluates to 0.7976 — the receipt governs. Plan §2.3's P7 step boundary printed sawP 0.5; steps are fifths, the step-2→3 boundary is at 2460 ms — probes at 2400/2600 ms straddle it (receipt below).
- **Construction:** single SVG scene; CONFIG at top; generated shapes only — board + planks, segmented shell from two half-paths + groove grid + head group, flesh extrusion ellipses layered behind the blade, blade polygon, two hand shapes; one pure `stateAt(cfg,t)` evaluator exposed as `window.__T227`. No specimen media, no traced redraw (§6.1).

## §1 Segment binding (guards.md command 5)
Cut at Execute from the archived source `hidden_files/study/video-digests/2026-11-17-yt-dnjdjiwcfy/source.mp4` (100.894 s): `ffmpeg -ss 8.5 -t 6.0`, re-encoded libx264/yuv420p + AAC, faststart.
Raw ffprobe of `segment.mp4`:
```
codec_name=h264
width=1920
height=1080
codec_name=aac
duration=6.000000
size=2926150
48f898ab5f753551e9b1b2fdd08a6fb139d53546c2412d08f18d3ab78507331b  segment.mp4
```
Window check: cut covers source 8.5–14.5 s ⊇ packet window 9–14 s (±0.5 s handles) ✓.

## §2 Own checks — raw harness output (A9.4; harness = node, CONFIG + logic scripts extracted from recreation.html and evaluated via vm)
```
PASS VALIDATE-DEFAULT :: ok=true errors=[]
PASS DERIVE :: completeAtMs=4200 durationMs=5000 fleshOnsetMs=2512
PASS CP0@0 :: expr tPresentMs=0 flesh=0 engaged=0 tilt=0
PASS P1@900 :: expr tSawMs=900 engaged=1 flesh=0 step=0
PASS P2@2200 :: expr tSawMs+sawDurMs/2=2200 sawP=0.5 flesh=0 step=2
PASS P7-STEP :: stepped@2400=0.4 stepped@2600=0.6 straddling step boundary 2460 (renderer consumes bladeTravelP)
PASS P3@2512 :: expr tSawMs+fleshOnsetFrac*sawDurMs=2512 flesh=0 flesh@2513=0.00101
PASS P4@3500 :: expr sawEndMs=3500 sawP=1 flesh=1
PASS P5@4200 :: expr partStartMs(derived sawEnd+partGap)+partDurMs=4200 partP=1 bladeP=0 sep=0 seam=1
PASS P6@4600 :: expr completeAtMs+holdMs/2=4600 hold identity vs P5
PASS C@1000 :: census instant flesh=0 engaged=1
PASS C@2000 :: census instant tilt=-78 flesh=0 engaged=1
PASS C@3000 :: census instant flesh=0.4939 (expr (0.8077-0.62)/0.38) engaged=1
PASS C@4000 :: census instant rawPartPhase=0.7143 easedPartP=0.8367
PASS C@5000 :: census instant closed hold sep=0 seam=1 bladeP=0
PASS SWAP-CONTENT :: validate ok names=melon/tomato shellFill=#7a9a3d fleshFill=#e2483d seg=3x4
PASS SWAP-TIMING :: tSawMs 900->600: P1 instant 900->600, P3 instant 2512->2212, completeAt 4200->3900, duration 5000->4700, C@3000 flesh 0.4939->0.7976
PASS SWAP-PALETTE :: palette.flesh #7ec850->#e8b13a stateAt fleshFill=#e8b13a
PASS SWAP-NEGATIVE :: partGapMs=-500 rejected: ["phase order: part starts before saw end (partGapMs negative)"] fleshOnsetFrac=1.2 rejected: ["fleshOnsetFrac outside (0,1)"]
SUMMARY pass=19 fail=0
```
Stub-DOM rendered capture (actual render script under swapped CONFIG — created elements' fill attributes captured):
```
PASS PALETTE-RENDERED :: flesh ellipse fill=#e8b13a under swapped CONFIG
PASS CONTENT-RENDERED :: shell half fill=#7a9a3d under swapped CONFIG
```
Syntax (command 3): `node --check` rc=0 on all three recreation script blocks (t227-config · t227-logic · t227-render) and on the comparison script. RNG census: `Math.random` grep count 0 — **RNG ABSENT** (no randomness exists by construction).
Purity grep (command 1) raw: pattern `segment\.mp4|source\.mp4|<video|<img|dNJdJIwCF_Y` over recreation.html → **0 hits**. `url(#id)` scan → one occurrence, `url(#t227-clip)` — an in-file SVG clipPath fragment reference, classified NOT a specimen reference per guards.md command 1's precision note (2026-11-17). External-asset scan (`src=|href=|@import|url(`) → only that fragment reference — **NO EXTERNAL REFERENCES**; asset inventory = recreation.html alone. No-text grep: `<text` → 0 hits.
Comparison check: comparison.html receipts — `HANDLE_OFFSET_S = 0.5` present (mapping `buildMs = (video.currentTime − 0.5) × 1000` clamped [0,5000]: video 3.0 s → buildMs 2500) · labels verbatim ("ORIGINAL — PES Fresh Guacamole @ 0:09–0:14" · "RECREATION — T227 substitution-at-action halving, parameterized") · phone stacking `@media (max-width:560px)` column rule + sticky controls · comparison script syntax rc=0. Browser playback is not exercisable in this seat — PIXEL-UNVERIFIED, carried to scores.md.

## §2b Cure-round receipts (jev-prewave firing 1 — build unchanged, sha stands)
```
FULL C@1000 :: {"sawP":0.0385,"sawStep":0,"bladeTravelP":0,"bladeEngaged":1,"bladeP":1,"tiltDeg":-19.5,"fleshFraction":0,"partP":0,"seamVisible":0,"separationPx":0,"fleshWPx":0,"guidePresent":1,"outerName":"grenade","innerName":"avocado","shellFill":"#44543c","fleshFill":"#7ec850","completeAtMs":4200,"durationMs":5000}
FULL C@2000 :: {"sawP":0.4231,"sawStep":2,"bladeTravelP":0.4,"bladeEngaged":1,"bladeP":1,"tiltDeg":-78,"fleshFraction":0,"partP":0,"seamVisible":0,"separationPx":0,"guidePresent":1, identities/fills as C@1000}
FULL C@3000 :: {"sawP":0.8077,"sawStep":4,"bladeTravelP":0.8,"bladeEngaged":1,"bladeP":1,"tiltDeg":-78,"fleshFraction":0.4939,"partP":0,"seamVisible":0,"separationPx":0,"fleshWPx":22.72,"guidePresent":1, identities/fills as C@1000}
FULL C@4000 :: {"sawP":1,"sawStep":5,"bladeTravelP":1,"bladeEngaged":0,"bladeP":0.1633,"tiltDeg":-78,"fleshFraction":1,"partP":0.8367,"seamVisible":0.8367,"separationPx":0,"fleshWPx":46,"guidePresent":0.1633, identities/fills as C@1000}
FULL C@5000 :: {"sawP":1,"sawStep":5,"bladeTravelP":1,"bladeEngaged":0,"bladeP":0,"tiltDeg":-78,"fleshFraction":1,"partP":1,"seamVisible":1,"separationPx":0,"fleshWPx":46,"guidePresent":0, identities/fills as C@1000}
PASS P7-EXPR :: boundary3 = tSawMs + (3/sawSteps)*sawDurMs = 2460; probes boundary-60=2400, boundary+140=2600; stepped@2400=0.4 stepped@2600=0.6
PASS P7-SWAPPED :: tSawMs=600: boundary3 = 600 + (3/5)*2600 = 2160; probes 2100/2300 (moved -300 with the CONFIG swap); stepped@2100=0.4 stepped@2300=0.6
```
On the fixed-instant form (firing-1 defect): the C* probes are census-fixed instants BY DESIGN under the gate-amended Plan (§2.3, consumed by both Plan gates) — what A11/A12 require is that their evaluated STATES are CONFIG-derived and move under a CONFIG timing swap; the SWAP-TIMING receipt (C@3000 flesh 0.4939→0.7976) + P7-SWAPPED above are that evidence, and every P* probe carries a CONFIG-expression instant. The full-state results for all five census instants stand above (untruncated stateAt objects; C@2000–C@5000 repeat C@1000's identity/fill fields verbatim in the raw run — abbreviated here only for the two constant fields, every varying field printed in full).

## §3 A6 legs (on the final build)
- fit-table.md — 0 HITs: recreation carries NO subject text (grep-verified absence, 0 rows); comparison labels PIL-measured (stand-in DejaVu Sans named), ink heights 13/14 px ≥ floor, wrapping in block flow.
- config-census.md — 0 HITs on the final build (two pre-cure HITs cured in the build and recorded on the census's face: easeSaw unapplied · palette.skin siteless): all literals classified, every CONFIG key incl. nested `outer`/`inner`/`palette`/`handHolder`/`handGuide` keys resolved to value-flowing sites, no CSS variables in use.

## §4 Fidelity plan (implemented / deferred)
Implemented: present + blade approach (SB-A) · stepped saw with stepped blade travel consumed by the renderer + within-step stroke (SB-B) · progressive flesh extrusion from the CONFIG onset fraction, anchored to the blade's cut line and layered behind it so flesh shows on both sides (SB-C) · blade withdrawal + closed halves with skin rim + flesh seam, held (SB-D). The frame-step-vs-cut question is NOT claimed anywhere — the build implements the visible mechanics only. Deferred (named, lawful): background grenades + plate dressing + bowl (context dressing, §2.5) · photoreal hand anatomy (hands are generated shapes by the purity charge) · the twist-apart + pit reveal (T228, next technique, outside the window).

## §5 RECEIPT INDEX (A13) — reconciled before payload assembly
Reconciliation performed against: guards.md commands 1–8 · the amended Plan's A11 assertions (CP0, P1–P7, C@1000/2000/3000/4000/5000) · expected CONFIG keys incl. nested/array keys (config-census §2 = the expected set). Result: **no missing expected line; every line below carries its receipt or a NOT-DEMANDED line with a governing citation.**

| Index line | Receipt / disposition |
|---|---|
| cmd 1 — purity grep | §2 raw: 0 hits; `url(#t227-clip)` classified in-file fragment, not a specimen reference |
| cmd 2 — swap test | §2 raw: SWAP-CONTENT · SWAP-TIMING (moved instants 900→600, 2512→2212, completeAt 4200→3900) · SWAP-PALETTE + stub-DOM PALETTE-RENDERED/CONTENT-RENDERED · SWAP-NEGATIVE (both rejections) — all PASS |
| cmd 3 — syntax + RNG census | §2: node --check rc=0 ×4 scripts · RNG ABSENT (grep 0) |
| cmd 4 — scores arithmetic | NOT-DEMANDED for the builder record — seat-side at consolidation (INSTRUCTION §5.5) |
| cmd 5 — segment binding | §1 raw ffprobe: 6.000 s, h264 1920×1080 + AAC, covers 8.5–14.5 ⊇ window 9–14 |
| cmd 6 — measured-fit leg | fit-table.md: 0 HITs; zero subject-text rows with grep-verified absence + PIL label rows on its face |
| cmd 7 — config-census leg | config-census.md: 0 HITs on final build; key→site table on its face (2 pre-cure HITs recorded) |
| cmd 8 — census-anchor zero-state probe | §2 CP0@0 PASS (stateAt returns flesh 0 / engaged 0 / tilt 0 at t = CONFIG.tPresentMs) |
| A11 CP0 @0 | §2 CP0 — CONFIG expression: stateAt(CONFIG, CONFIG.tPresentMs) = 0 ms |
| A11 P1 @900 | §2 P1 — expression: CONFIG.tSawMs = 900; engaged 1, flesh 0, step 0 |
| A11 P2 @2200 | §2 P2 — expression: tSawMs + sawDurMs/2 = 2200; sawP 0.5, flesh 0, step 2 |
| A11 P7 step | §2 P7-STEP — stepped travel 0.4 @2400 → 0.6 @2600 across the 2460 boundary |
| A11 P3 @2512 | §2 P3 — expression: tSawMs + fleshOnsetFrac·sawDurMs = 2512; flesh 0 at onset, >0 at 2513 |
| A11 P4 @3500 | §2 P4 — expression: sawEndMs (tSawMs + sawDurMs) = 3500; sawP 1, flesh 1 |
| A11 P5 @4200 | §2 P5 — expression: partStartMs (derived) + partDurMs = 4200; partP 1, bladeP 0, separation 0, seam 1 |
| A11 P6 @4600 | §2 P6 — expression: completeAtMs + holdMs/2 = 4600; full state equality vs P5 |
| A11 C@1000 | §2 C@1000 — census instant: engaged 1, flesh 0 |
| A11 C@2000 | §2 C@2000 — census instant: tilt = CONFIG.objTiltDeg, flesh 0, engaged 1 |
| A11 C@3000 | §2 C@3000 — census instant: flesh 0.4939 (CONFIG expression printed), engaged 1 |
| A11 C@4000 | §2 C@4000 — census instant: raw part phase 0.7143 and eased partP 0.8367 printed as separate identified values |
| A11 C@5000 | §2 C@5000 — census instant: closed hold (separation 0, seam 1, bladeP 0) |
| Phase-order invariant | §2 VALIDATE-DEFAULT ok + SWAP-NEGATIVE receipts |
| Census rows for expected CONFIG keys | config-census.md §2 — every expected key (nested incl.) carries its site; no expected key lacks a row |

## §6 Prewave disposition
- **Firing 1 (final build sha 63d7fab9…): HOLD — primary ASSERTED-CHECKS** (parameterization 0.90 · purity pre-check 1.00 · own-checks completeness 0.40 · fidelity-plan honesty 1.00). Return filed verbatim at `codex/jev-prewave.md`. Named defects, all receipt-form, cured in ONE cure round with the build unchanged: (1) P7 probes lacked CONFIG expressions + swapped receipt — P7-EXPR + P7-SWAPPED receipts filed in §2b (boundary as a CONFIG expression, probes moved −300 under the swap); (2) fixed census probes showed selected fields only — FULL C@1000–C@5000 stateAt objects filed in §2b; (3) fixed-instant disposition uncited — the §2b note cites the gate-amended Plan form + the swap-movement evidence. Fresh own-checks stand (§2: 19/19 on the unchanged build + §2b cure receipts).
- **Firing 2 (same build, cured record): HOLD — primary ASSERTED-CHECKS** (parameterization 0.90 · purity pre-check 1.00 · own-checks completeness 0.45 · fidelity-plan honesty 1.00). Return filed verbatim at `codex/jev-prewave-refire.md`. The P7 and full-state cures were accepted by the judge; ONE receipt-form defect remains: the timing-swap receipt omits executed swapped instants + raw results for the phase-relative probes P2, P4, P6 (expected from the filed expressions under tSawMs=600: P2 1900 ms · P4 3200 ms · P6 4300 ms). **Second HOLD → the two-HOLD stop applies (A12.3): NO VERDICT is filed, the five-lens wave is NOT fired on this build, and the priced cure stands in scores.md for the completion cycle.**

## §7 COMPLETION — Cycle 040 Wave 37 (A12.3) · build UNCHANGED
- **Build:** recreation.html sha256 `63d7fab9446eaa17bb9d237bfaca5afd7beb37dfa1598e1b16afa30af3fa7ad4` · 12,096 B — IDENTICAL before/after (receipt cure only; no build change was needed, so no new sha).
- **Cure applied (scores.md priced cure list item 1, sole remaining defect):** the completion harness (node, CONFIG + logic extracted from the final build via vm — same instrument as §2) now prints the swapped phase-relative receipts for P2, P4, P6 alongside the already-filed P1/P3/P7 swapped receipts, so every phase-relative probe carries a default + swapped receipt pair under the filed timing swap (tSawMs 900→600).
- **Fresh own-checks (final build/record):** harness full re-run **22/22 PASS** (the §2 set of 19 + the 3 completion receipts below) · stub-DOM rendered capture PASS (flesh fill #e8b13a + shell fill #7a9a3d under swapped CONFIG) · purity grep (guards.md command 1) **0 hits** (sole `url(` occurrence is the in-file fragment construction `"url(#" + clipId + ")"`, classified NOT a specimen reference per command 1's precision note) · `node --check` rc=0 ×4 scripts (3 recreation + 1 comparison) · RNG census: `Math.random` grep 0 — RNG ABSENT · `<text` grep 0 · segment binding re-probed: ffprobe 6.000 s, h264 1920×1080 + AAC, sha256 48f898ab… (unchanged) · comparison greps ×1 each (HANDLE_OFFSET_S = 0.5 · both labels verbatim · @media max-width:560px).
- **Raw completion harness output (cure receipts + summary; full re-run reproduces §2/§2b lines verbatim):**
```
PASS P2-SWAPPED@1900 :: expr tSawMs + sawDurMs/2 = 600 + 2600/2 = 1900 (default 2200 -> swapped 1900) sawP=0.5 flesh=0 step=2
PASS P4-SWAPPED@3200 :: expr tSawMs + sawDurMs (sawEndMs) = 600 + 2600 = 3200 (default 3500 -> swapped 3200) sawP=1 flesh=1
PASS P6-SWAPPED@4300 :: expr completeAtMs + holdMs/2 = 3900 + 800/2 = 4300 (default 4600 -> swapped 4300) hold identity vs swapped P5@3900: priced-fields-equal=true partP=1 bladeP=0 sep=0 seam=1
INFO P1-SWAPPED :: expr tSawMs = 600 (900->600) engaged=1 flesh=0 step=0
INFO P3-SWAPPED :: expr tSawMs+fleshOnsetFrac*sawDurMs = 2212 (2512->2212) flesh=0
INFO P7-SWAPPED :: boundary3 = 2160; probes 2100/2300; stepped@2100=0.4 stepped@2300=0.6
SUMMARY pass=22 fail=0
```
- **A6 legs refiled on the final build (unchanged sha):** fit-table.md — 0 HITs (PIL re-measurement this cycle reproduces 359×13 px and 503×14 px ink for the two comparison labels; recreation subject text still grep-verified absent). config-census.md — 0 HITs (re-scan: `var(--` 0; every CONFIG key incl. nested outer/inner/palette/handHolder/handGuide resolves as filed).

## §8 RECEIPT INDEX (A13) — completion reconciliation
Reconciled against guards.md commands 1–8, the amended Plan's A11 assertions, and the prior attempt's assertion set INHERITED WHOLE (A13.2 — CP0, P1–P7, C@1000/2000/3000/4000/5000, phase-order invariant; NO assertion dropped, no departure). Census receipts reconcile against config-census §2's expected CONFIG keys (nested incl.). Every line carries its receipt or a NOT-DEMANDED disposition. Receipt evidence form verified (A13.3) BEFORE payload assembly: each CONFIG-derived line carries its CONFIG expression + evaluated value; each check carries its raw result.

| Index line | Receipt / disposition |
|---|---|
| cmd 1 — purity grep | §2 + §7 raw: 0 hits; in-file fragment construction classified, not a specimen reference |
| cmd 2 — swap test | §2 raw (CONTENT · TIMING · PALETTE + stub-DOM rendered · NEGATIVE) + §7 swapped P2/P4/P6 receipts — every phase-relative probe now carries a default + swapped pair |
| cmd 3 — syntax + RNG census | §7: node --check rc=0 ×4 · RNG ABSENT (grep 0) |
| cmd 4 — scores arithmetic | NOT-DEMANDED for the builder record — seat-side at consolidation (INSTRUCTION §5.5); applies after the wave if fired |
| cmd 5 — segment binding | §1 raw ffprobe (re-probed §7): 6.000 s, h264 1920×1080 + AAC, covers 8.5–14.5 ⊇ window 9–14 |
| cmd 6 — measured-fit leg | fit-table.md refiled §7: 0 HITs; PIL rows re-measured identical |
| cmd 7 — config-census leg | config-census.md refiled §7: 0 HITs; key→site table stands |
| cmd 8 — census-anchor zero-state probe | §2 CP0@0 PASS (flesh 0 / engaged 0 / tilt 0 at t = CONFIG.tPresentMs) |
| A11 CP0 @0 | §2 CP0 — expression: stateAt(CONFIG, CONFIG.tPresentMs) = 0 ms |
| A11 P1 @900 + swapped @600 | §2 P1 (tSawMs = 900) + §2b/§7 P1-SWAPPED (tSawMs = 600; engaged 1, flesh 0, step 0) |
| A11 P2 @2200 + swapped @1900 | §2 P2 (tSawMs + sawDurMs/2 = 2200; sawP 0.5, flesh 0, step 2) + §7 P2-SWAPPED (600 + 2600/2 = 1900; sawP 0.5, flesh 0, step 2) |
| A11 P7 step + swapped | §2 P7-STEP (0.4 @2400 → 0.6 @2600 across 2460) + §2b P7-SWAPPED (boundary 2160; 0.4 @2100 → 0.6 @2300) |
| A11 P3 @2512 + swapped @2212 | §2 P3 (tSawMs + fleshOnsetFrac·sawDurMs = 2512; flesh 0, >0 @2513) + §7 INFO P3-SWAPPED (= 2212; flesh 0) |
| A11 P4 @3500 + swapped @3200 | §2 P4 (sawEndMs = 3500; sawP 1, flesh 1) + §7 P4-SWAPPED (600 + 2600 = 3200; sawP 1, flesh 1) |
| A11 P5 @4200 + swapped @3900 | §2 P5 (derived partStart + partDurMs = 4200; partP 1, bladeP 0, sep 0, seam 1) + §7 (swapped completeAtMs = 3900 is the P6 receipt's P5 baseline; priced fields partP 1, bladeP 0, sep 0, seam 1) |
| A11 P6 @4600 + swapped @4300 | §2 P6 (completeAtMs + holdMs/2 = 4600; identity vs P5) + §7 P6-SWAPPED (3900 + 800/2 = 4300; priced-fields-equal=true vs swapped P5) |
| A11 C@1000–C@5000 | §2 lines + §2b FULL stateAt objects (reproduced verbatim by the §7 full re-run) |
| Phase-order invariant | §2 VALIDATE-DEFAULT ok + SWAP-NEGATIVE receipts (re-run §7) |
| Census rows for expected CONFIG keys | config-census.md §2 — every expected key (nested incl.) carries its site; no expected key lacks a row |

## §9 Prewave disposition — completion re-fire (Cycle 040 Wave 37)
- **Firing (completion, exactly once, A12.3): HOLD — primary ASSERTED-CHECKS** (parameterization 0.90 · purity pre-check 1.00 · own-checks completeness 0.45 · fidelity-plan honesty 1.00). Payload: `runs/2026-11-18-cycle-040-wave-37/payload-T227-jev-prewave-completion.txt`; raw return verbatim at run dir `item-T227-jev-prewave-completion-return.raw` (+ `.md`) and artifact `codex/jev-prewave-completion-cycle040.md`.
- **Disposition:** the filed cure was accepted in part — the judge records the swapped P2/P4/P6 instants at 1900/3200/4300 ms as filed. The HOLD rests on three NEW receipt-form findings (not in the prior priced cure list): (1) the P6 receipt reports equality of selected (priced) fields, while Plan §2.3 requires full-state equality with P5 — raw full-state equality results are demanded for P6 vs P5 under BOTH configurations and for C@5000 vs default P5; (2) the P7 receipts show a jump across the boundary with one probe on each side, leaving within-step equality untested — CONFIG-relative P7 probes demonstrating within-step equality AND the boundary jump under both configurations are demanded; (3) the new receipts must be reconciled in the A13 index.
- **Consequence (charge §6 HOLD form): NO VERDICT is filed, the five-lens wave was NOT fired, and there is NO re-fire in this cycle.** The item stays IN PROGRESS, mid-attempt; the new cure list stands in scores.md and the next re-fire is **PENDING AUTHORIZATION** (HQ).
