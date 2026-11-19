# T192 — Build Record · Attempt 1 · Cycle 035 Wave 32 (completion wave)

Item: queue #90 · T192 giant pixel numeral · Packet #11 "Caption with Intention" P11-T03.
Plan authority: `runs/2026-11-18-cycle-034-wave-31/item-T192-observe-plan.md` AS AMENDED by `plan-amendment-cycle035.md` in this directory (clock corrected: formationStartMs 500→1000; anchors 1000/1500/2000/2500/4000/5000; explicit HOLD opacities for every loose class; duration-swap movement split named).
Schedule basis: segment-anchored. Build zero ≡ source 22.0 s; recreationMs = videoMs − 500.
Final build: recreation.html SHA-256 `d01198b79f9dfe8dcb7fe7a50436c07798e43a289730e22a6180c5441749a58f` · 12,288 B. (Hash history: first draft b7c62dd2… → census-cured 8892f056… → prewave-cured final d01198b7…; every cure re-ran the full harness with identical counts and verdicts.)

## Segment binding (guards.md command 5)
- Source: `hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/source.mp4` — 1920×1080, 24 fps, 113.734 s, 10,213,125 B, sha256 68c14baae69f4f05c2ebb28d59afc4c9e3ce28d7d31acb7393a67d8c185c435b (plan record).
- Cut: ffmpeg `-ss 21.5 -t 6.0`, re-encoded libx264/yuv420p CRF 18 + AAC 96k → `segment.mp4` in this directory.
- segment.mp4 ffprobe: h264 1920×1080, 24/1 fps, aac, duration 6.000 s, size 979,348 B, sha256 d5efe6a49754a4aedc3b77217615d3ff6e1c2c83406b387e6a5225831e6b2632.
- Window: catalogue 22–27 s ± 0.5 s handles = cut 21.5–27.5 s. Evidence only; appears solely as the labeled ORIGINAL side of comparison.html.

## Construction
One self-contained HTML file, canvas 2D, logical canvas 960×540. ONE constant flow field (A5.4): every particle always carries stream velocity (flow.directionDeg 90°, 140 px/s downward); FORM = borrowing onto runtime-sampled targets (A1.2: CONFIG.text.numeral rendered offscreen, sampled on grid.sampleStepPx); borrowed particles keep jitter (never zero velocity); reserve fraction 0.25 never borrowed; surplus streams forever (never freezes). LOCK takeover: on arrival the cell renders as a solid filled rect at borrowOpacity and stays the glyph; RELEASE starts from the cell's on-screen position with stream-velocity continuity. Phase machine PRE→FORM→HOLD→RELEASE→DONE is the single stage owner (A5 Cure 2). Intensity separation rides the borrow flag (A5 Cure 1): borrowOpacity 1.0 foreground / reserveOpacity 0.35 background; in HOLD every loose class renders at its explicit HOLD opacity 0.0 (reserveHoldOpacity · surplusHoldOpacity · looseHoldOpacity — amendment §3). Departures: D1 build opens black (signer tail not this technique) · D2 exit = RELEASE allocation A-EXIT (exit form unmeasured, bounded 26.0–27.0 s; allocation wherever the exit remains unmeasured) · D3 line fades in over line.fadeMs in the window [formationStartMs−fadeMs, formationStartMs], crisp at 1,000 ms.

## Count assertion (A9.3)
Harness-sampled target count vs CONFIG pool budget: targets 2,944 (stub rasterizer count; browser count varies by font rasterization, the assertion is structural) · reserve = ceil(2944 × 0.25/0.75) = 982 · surplus 0 (pool 3,926 ≥ poolCountMin 900 floor) · pool = 2,944 + 982 + 0 = 3,926. Borrower particles created = target count exactly (one per target); locked cells at full formation = 2,944 = target count. MATCH — no halt. Raw line: `COUNTS targets=2944 stateCounts={"targets":2944,"reserve":982,"surplus":0,"pool":3926}`.

## A11 checkpoint → assertion mapping (executed at CONFIG-derived instants, as amended)
| Checkpoint | Assertion | CONFIG expression | Default instant | Swap instant (formationDurationMs 1000→1600) | Result |
|---|---|---|---|---|---|
| CP-23.0 | top-band borrowed fraction ∈ (0.2, 0.6); line opacity = 1 | time.formationStartMs | 1000 | 1000 (FIXED) | PASS (0.4539; line 1) |
| CP-23.5 | rows above front occupancy ≥0.95; rain below front > 0 | formationStartMs + frontSweepMs×0.5 + (formationDurationMs − frontSweepMs)×0.5 | 1500 | 1800 (MOVES) | PASS (1.0; rain 1298) |
| CP-24.0 | occupancy ≥0.98 | formationStartMs + formationDurationMs | 2000 | 2600 (MOVES) | PASS (1.0) |
| CP-24.5 | visible loose (ALL classes incl. reserve, surplus, remaining borrowers, at explicit HOLD opacities) = 0 | formationStartMs + formationDurationMs + 500 | 2500 | 3100 (MOVES) | PASS (0) |
| CP-26.0 | occupancy ≥0.98 | time.exitStartMs | 4000 | 4000 (FIXED) | PASS (1.0) |
| CP-27.0 | occupancy ≤0.02 | exitStartMs + exitDurationMs | 5000 | 5000 (FIXED) | PASS (0.0) |
Continuity assertions: free-particle displacement 1200→1300 ms = 14.000 px > 0 PASS · LOCK position continuity (dist at lockAt−1 = 0.867 px, state at lockAt = locked) PASS · RELEASE starts exactly at the cell position, displacement 14.000 px/100 ms PASS. Separation invariant borrowOpacity 1.0 > reserveOpacity 0.35 PASS, re-asserted under the palette swap PASS.

## Playback evidence — formation + exit (jev-observe-exit charge; logic-harness level, PIXEL-UNVERIFIED)
Formation: occupancy 0.00 (0–800 ms) → 0.04 @900 → 0.09 @1000 → 0.51 @1500 → 1.00 @1900–2000; loose-visible falls 3,926 → 0 at 2,000 ms and stays 0 through 3,900 ms (clean hold). Exit: occupancy 1.00 @4000 → 0.79 @4100 → 0.35 @4200 → 0.05 @4300 → 0.00 @4400–5000 (release allocation A-EXIT, D2). Full 100 ms series in the raw output below. No browser binary exists in this seat: evidence is logic-harness level; pixel rendering is UNVERIFIED from this seat (lane standing limitation).

## Own checks — RAW harness output, from the first draft (A9.4)
The first draft passed every own-check; two pre-wave census cures then moved shaping literals into CONFIG (borrow/release/jitter coefficients, capHeightRatio, font weight/family) and the harness was re-run on the final build — the raw output below is the FINAL build's run (identical verdicts and counts to the first draft's run, which is preserved in this builder's exec record: ALL-CHECKS PASS · SWAP-OVERALL PASS · targets 2944).

```
CONFIG formationStartMs=1000 formationDurationMs=1000 frontSweepMs=700 exitStartMs=4000 exitDurationMs=1000
COUNTS targets=2944 stateCounts={"targets":2944,"reserve":982,"surplus":0,"pool":3926}
ANCHORS {"cp230":1000,"cp235":1500,"cp240":2000,"cp245":2500,"cp260":4000,"cp270":5000}
CP-23.0 topBandBorrowed in (0.2,0.6) + line==1 @1000ms PASS state={"phase":"FORM","occ":0.091,"topBorrowed":0.4539,"aboveFront":0.1875,"rain":2921,"loose":3658,"line":1}
CP-23.5 aboveFront>=0.95 + rain>0 @1500ms PASS state={"phase":"FORM","occ":0.5088,"topBorrowed":1,"aboveFront":1,"rain":1298,"loose":2428,"line":1}
CP-24.0 occupancy>=0.98 @2000ms PASS state={"phase":"HOLD","occ":1,"topBorrowed":1,"aboveFront":1,"rain":0,"loose":0,"line":1}
CP-24.5 visibleLoose==0 @2500ms PASS state={"phase":"HOLD","occ":1,"topBorrowed":1,"aboveFront":1,"rain":0,"loose":0,"line":1}
CP-26.0 occupancy>=0.98 @4000ms PASS state={"phase":"RELEASE","occ":1,"topBorrowed":1,"aboveFront":1,"rain":267,"loose":982,"line":1}
CP-27.0 occupancy<=0.02 @5000ms PASS state={"phase":"DONE","occ":0,"topBorrowed":1,"aboveFront":0,"rain":1050,"loose":3926,"line":1}
CONTINUITY free-particle displacement 1200->1300ms = 14.000px PASS
CONTINUITY lock: dist(lockAt-1, target)=0.867 stateAtLock=locked PASS
CONTINUITY release: start=(102.5,117.5) target=(102.5,117.5) disp100ms=14.000 PASS
SEPARATION borrowOpacity(1) > reserveOpacity(0.35) PASS
PLAYBACK-SERIES step100ms t:occupancy/looseVisible :: 0:0.00/3926 100:0.00/3926 200:0.00/3926 300:0.00/3926 400:0.00/3926 500:0.00/3926 600:0.00/3926 700:0.00/3926 800:0.00/3926 900:0.04/3805 1000:0.09/3658 1100:0.14/3508 1200:0.21/3298 1300:0.33/2962 1400:0.41/2733 1500:0.51/2428 1600:0.65/2019 1700:0.73/1775 1800:0.84/1457 1900:1.00/982 2000:1.00/0 2100:1.00/0 2200:1.00/0 2300:1.00/0 2400:1.00/0 2500:1.00/0 2600:1.00/0 2700:1.00/0 2800:1.00/0 2900:1.00/0 3000:1.00/0 3100:1.00/0 3200:1.00/0 3300:1.00/0 3400:1.00/0 3500:1.00/0 3600:1.00/0 3700:1.00/0 3800:1.00/0 3900:1.00/0 4000:1.00/982 4100:0.79/1592 4200:0.35/2895 4300:0.05/3767 4400:0.00/3926 4500:0.00/3926 4600:0.00/3926 4700:0.00/3926 4800:0.00/3926 4900:0.00/3926 5000:0.00/3926
ALL-CHECKS PASS
SWAP1 numeral=2049 fg=#ffd23f formationDurationMs=1600 targets=4032 anchors={"cp230":1000,"cp235":1800,"cp240":2600,"cp245":3100,"cp260":4000,"cp270":5000}
SWAP1 moved: cp235 1500->1800 cp240 2000->2600 cp245 2500->3100 | fixed: cp230 1000 cp260 4000 cp270 5000
SWAP1 CP-23.0 @1000 PASS occ=0.073 topB=0.447 aboveFront=0.188 rain=4046 loose=5080 line=1.000
SWAP1 CP-23.5 @1800 PASS occ=0.851 topB=1.000 aboveFront=1.000 rain=1341 loose=1943 line=1.000
SWAP1 CP-24.0 @2600 PASS occ=1.000 topB=1.000 aboveFront=1.000 rain=0 loose=0 line=1.000
SWAP1 CP-24.5 @3100 PASS occ=1.000 topB=1.000 aboveFront=1.000 rain=0 loose=0 line=1.000
SWAP1 CP-26.0 @4000 PASS occ=1.000 topB=1.000 aboveFront=1.000 rain=351 loose=1344 line=1.000
SWAP1 CP-27.0 @5000 PASS occ=0.000 topB=1.000 aboveFront=0.000 rain=1429 loose=5376 line=1.000
SWAP1 separation invariant under palette swap: borrow 1 > reserve 0.35 PASS
SWAP2 numeral=12345 (glyph-count change) targets=2836 vs default 2944 changed=true occ@2000=1.000
SWAP-OVERALL PASS
```

## Swap test (§5 leg 1) — exact altered values + result
- Swap 1 (URL params on a harness load): text.numeral "1971"→"2049" · palette.fg "#ffffff"→"#ffd23f" · time.formationDurationMs 1000→1600 · text.line default retained in swap 1, and separately the plan's line swap "SAME FRAME, FIFTY YEARS LATER" is a CONFIG-only text change (line is drawn from CONFIG.text.line every frame; no geometry depends on its content). Result: PASS — targets regenerate (2,944→4,032 for "2049" under the stub rasterizer), all re-derived A11 instants PASS, the three duration-derived checkpoints MOVED (1500→1800, 2000→2600, 2500→3100) and the three fixed checkpoints STAYED (1000, 4000, 5000), separation invariant holds under the palette swap.
- Swap 2 (glyph-count change): text.numeral "1971"→"12345": targets 2,944→2,836 (changed), occupancy @2000 = 1.000. PASS.
- Technique still reads under both swaps (occupancy, hold cleanliness, and exit all re-verified at the swapped instants).

## Purity (§5 leg 2) — raw output
```
$ grep -nE 'segment\.mp4|source\.mp4|t024|<video|<img' recreation.html
(no output — grep exit 1, 0 hits, 0 bytes)
```
`url(#id)` classification: no `url(` reference exists in recreation.html (0 external references: grep for src=|href=|url\(|@import|fetch\( returned no hits outside the comparison's own controls). Asset inventory: recreation.html loads NO assets — code only (canvas-generated particles + runtime-sampled text). segment.mp4 appears ONLY in comparison.html as the labeled ORIGINAL side (1 hit, lawful). No captions/subtitles anywhere; the line and numeral are the technique subject (§6.5).

## Syntax + determinism (guards.md command 3)
- Inline scripts extracted and checked: recreation.html script (11,000 chars) `node --check` → SYNTAX OK; comparison.html script (960 chars) → SYNTAX OK.
- Seeded RNG: mulberry32(CONFIG.seed = 19211) present; all randomness flows from it; two harness loads produce identical counts and checkpoint values (deterministic).

## Comparison check (§5 leg 3)
comparison.html: ORIGINAL (segment.mp4, 6.0 s incl. 0.5 s handles) + live recreation iframe side by side at matched 16:9; ONE control set (Play/Pause + Restart) driving BOTH sides — the recreation exposes seek(ms)/setPaused(bool) on window.__T192, and the comparison slaves it to the video on timeupdate/seeked/pause/load through the single mapping recreationMs = videoMs − 500 (Restart: video currentTime = 0.5 s = recreation zero, recreation seek(0) + play). This slaving form is the cure for jev-prewave firing 1's comparison finding (see the prewave section below); the first draft's restart-by-reload form is superseded. Labels exactly "ORIGINAL — Caption with Intention @ 0:22–0:27" / "RECREATION — T192 giant pixel numeral, parameterized"; phone-width: flex column stacking under 640 px, controls above the sides, min-height 48 px buttons (reachable, not behind phone navigation). Duration match: recreation cycle = exitStartMs + exitDurationMs = 5,000 ms ≡ segment 22.0–27.0 s inside the 6.0 s cut. PIXEL-UNVERIFIED: no browser binary in this seat — play behaviour is construction-verified (control surface + clock functions exercised in code), not pixel-verified.

## A6 legs (pre-wave, Amendment A6)
- guard-measured-fit → `fit-table.md` in this directory: 1 HIT carried with disposition (line ink height at phone scale — specimen's own small type; see the leg file).
- guard-config-census → `config-census.md` in this directory: 0 HITs after pre-wave cures (motion coefficients + capHeightRatio + font weight/family moved into CONFIG before the census was filed).

## Fidelity plan (jev-prewave FED element)
Implemented from Packet #11 P11-T03 + census: coalescing top-band clusters · top→bottom formation front with rain below · solid block-pixel "1971" at ≈70% width / ≈44% height, centre y 0.47 · clean static hold · line standing at bottom y 0.875. Deliberately deferred/named: exit form (D2 allocation A-EXIT, unmeasured) · signer tail 22.0–22.5 (D1, prior technique) · line's exact entrance frame (bounded by the fade allocation D3).

## jev-prewave (§5 leg 3b) — two firings, STOP on second HOLD
- Firing 1 (build 8892f056…, payload codex/payload-prewave.txt v1): **HOLD · ASSERTED-CHECKS** (parameterization 1.0 · purity 1.0 · own-checks 0.5 · fidelity 1.0). Findings: (a) swap log omitted CP-23.5@1800 and CP-26.0 swap results; (b) comparison Play/Pause did not drive the recreation clock. Verdict verbatim: codex/jev-prewave-interim1.md; raw: codex/prewave-attempt1.raw.
- Cures applied + re-verified: harness swap pass now evaluates ALL SIX checkpoints at swapped instants (raw output above: CP-23.5@1800 aboveFront 1.000 rain 1341 · CP-26.0@4000 occ 1.000, all PASS); recreation gained seek/setPaused/currentMs and the comparison slaves it to the video clock on timeupdate/seeked/pause/load under recreationMs = videoMs − 500. Build advanced to d01198b7…; A6 leg hashes updated (no geometry/config change).
- Firing 2 (final build): **HOLD · ASSERTED-CHECKS** (same dimensions). Swap finding CLEARED. New findings: (a) seek() modulo wraps recreationMs 5,000 → 0 (PRE) at the exit checkpoint and through the trailing handle (video 5.5–6.0 s) — the comparison must be a non-looping follower clamped 0…cycle-end; (b) the planned line swap lacks a harness execution result. Verdict verbatim: jev-prewave.md (artifact root); raw: codex/prewave-attempt2.raw.
- Disposition: APPLIED — second HOLD stops the item per the gate rule; the five-lens wave was NOT fired and no third prewave was attempted. The two firing-2 findings are the next attempt's priced cures (recorded in scores.md). Item state: IN PROGRESS, unscored.

---

# COMPLETION — Cycle 036 Wave 33 · Amendment A12.3 (jev-prewave firing-2 cures)

- Start-state verification (A8): recreation.html on disk at completion start = 12,288 B, SHA-256 `d01198b79f9dfe8dcb7fe7a50436c07798e43a289730e22a6180c5441749a58f` — MATCHES the Wave 32 filed hash. No mismatch; work proceeded.
- **Cured build: recreation.html 12,754 B, SHA-256 `2b80f53973790e295db0c9c128b51923d20f48f58a194003eb72f3c5c9644cdd`.** comparison.html also cured (see Cure 1b), 2,814 B, SHA-256 `8c0624c7426dbcfbbf868b62cd4387f89da5e38d2a68c4d0d0e4fa87eb6c6c9f`.

## Cure 1 — seek() modulo wrap (firing-2 finding a)
- recreation.html `seek()`: was `baseT = Math.max(0, ms); lastT = baseT % CYCLE_MS` (wrapped 5,000→0 PRE). Now a NON-LOOPING CLAMPED FOLLOWER: `follower = true; baseT = Math.min(CYCLE_MS, Math.max(0, ms)); lastT = baseT` — clamps 0…cycle-end (CYCLE_MS = `time.exitStartMs + time.exitDurationMs`, CONFIG-derived), never wraps. The standalone loop lives ONLY in the internal free-running clock: `frame()` computes `follower ? Math.min(rawT, CYCLE_MS) : rawT % CYCLE_MS`, so a never-seeked standalone playback still loops, and a seeked follower clock advancing past cycle end clamps at 5,000 instead of wrapping. `api.cycleMs` exposed.
- Cure 1b — comparison.html `slaveRec()`: after the single mapping recreationMs = videoMs − 500 and the 0 floor, it now also clamps `ms` to `a.cycleMs` before `a.seek(ms)` — the follower is clamped at both ends of the control surface.
- Executable receipts (harness run below): SEEK seek(4999)→4999 RELEASE · seek(5000)→5000 DONE (exit checkpoint, NOT PRE) · seek(5500)→5000 DONE (trailing handle: video 6.0 s maps to recreationMs 5500) · seek(6000)→5000 · seek(−250)→0 PRE · RESTART seek(0)+setPaused(false)→0 PRE · PAUSE seek(2500)+setPaused(true)→2500 HOLD held · PLAY setPaused(false)→2500 resumes from held · FOLLOWER-FRAME seek(4900)+300 ms frames→5000 DONE PASS clamped, no wrap · STANDALONE-LOOP fresh no-seek load, frames 0→5100 ms→currentMs=100 PASS (loop is internal-clock only).

## Cure 2 — line swap harness execution result (firing-2 finding b)
- Harness load with URL param `?line=SAME%20FRAME,%20FIFTY%20YEARS%20LATER`; render at seek(2000) captured on the stub main canvas: `SWAPLINE fillText(main) calls with swapped line: count=1 text="SAME FRAME, FIFTY YEARS LATER" x=480 y=472.5 font=700 15.120000000000001px monospace` → SWAPLINE-OVERALL PASS. The rendering call (render()'s fillText of CONFIG.text.line) actually receives the swapped line text — execution result, not only the CONFIG application site. Default-line contrast in the same run: `LINE-DEFAULT fillText(main) text="DESPITE THIS, CAPTIONS HAVE REMAINED UNCHANGED, SINCE 1971" calls=1`.

## Fresh own-checks on the CURED build — RAW harness output (A12 executable receipts)
Harness: `node /tmp/t192-harness.js recreation.html` (node vm; stub canvas whose measureText uses monospace 0.6 advance and whose offscreen rasterizer is a 3×5 block digit font — target counts are this stub's counts, 4,423 default vs the prior stub's 2,944; every assertion is structural and re-evaluated on THIS build). Every A11 assertion below carries its A12 EXECUTABLE RECEIPT: harness run = this command · CONFIG expression = the A11 table's expression (anchors printed by the run from CONFIG: cp230 = time.formationStartMs · cp235 = formationStartMs + frontSweepMs×0.5 + (formationDurationMs − frontSweepMs)×0.5 · cp240 = formationStartMs + formationDurationMs · cp245 = cp240 + 500 · cp260 = time.exitStartMs · cp270 = exitStartMs + exitDurationMs) · raw result = the printed line. Timing-swap receipts show the changed evaluation instants: SWAP1 anchors cp235 1500→1800 · cp240 2000→2600 · cp245 2500→3100, with cp230/cp260/cp270 fixed at 1000/4000/5000.

```
SYNTAX vm.Script parse OK (script chars 12214)
CONFIG formationStartMs=1000 formationDurationMs=1000 frontSweepMs=700 exitStartMs=4000 exitDurationMs=1000 cycleMs=5000
COUNTS targets=4423 stateCounts={"targets":4423,"reserve":1475,"surplus":0,"pool":5898}
ANCHORS {"cp230":1000,"cp235":1500,"cp240":2000,"cp245":2500,"cp260":4000,"cp270":5000}
DEFAULT CP-23.0 topBandBorrowed in (0.2,0.6) + line==1 @1000ms PASS topB=0.4450 line=1 occ=0.077
DEFAULT CP-23.5 aboveFront>=0.95 + rain>0 @1500ms PASS aboveFront=1.000 rain=2059 occ=0.475
DEFAULT CP-24.0 occupancy>=0.98 @2000ms PASS occ=1.000
DEFAULT CP-24.5 visibleLoose==0 @2500ms PASS loose=0 occ=1.000
DEFAULT CP-26.0 occupancy>=0.98 @4000ms PASS occ=1.000 loose=1475
DEFAULT CP-27.0 occupancy<=0.02 @5000ms PASS occ=0.000
CONTINUITY free-particle displacement 1200->1300ms = 14.000px PASS
CONTINUITY lock: dist(lockAt-1, target)=0.870 stateAtLock=locked PASS
CONTINUITY release: start=(202.5,117.5) target=(202.5,117.5) disp100ms=14.000 PASS
SEPARATION borrowOpacity(1) > reserveOpacity(0.35) PASS
PLAYBACK-SERIES step100ms t:occupancy/looseVisible :: 0:0.00/5898 100:0.00/5898 200:0.00/5898 300:0.00/5898 400:0.00/5898 500:0.00/5898 600:0.00/5898 700:0.00/5898 800:0.00/5898 900:0.03/5748 1000:0.08/5556 1100:0.12/5355 1200:0.18/5089 1300:0.27/4684 1400:0.36/4307 1500:0.48/3796 1600:0.59/3271 1700:0.67/2921 1800:0.83/2213 1900:1.00/1475 2000:1.00/0 2100:1.00/0 2200:1.00/0 2300:1.00/0 2400:1.00/0 2500:1.00/0 2600:1.00/0 2700:1.00/0 2800:1.00/0 2900:1.00/0 3000:1.00/0 3100:1.00/0 3200:1.00/0 3300:1.00/0 3400:1.00/0 3500:1.00/0 3600:1.00/0 3700:1.00/0 3800:1.00/0 3900:1.00/0 4000:1.00/1475 4100:0.81/2294 4200:0.39/4169 4300:0.06/5623 4400:0.00/5898 4500:0.00/5898 4600:0.00/5898 4700:0.00/5898 4800:0.00/5898 4900:0.00/5898 5000:0.00/5898
LINE-DEFAULT fillText(main) text="DESPITE THIS, CAPTIONS HAVE REMAINED UNCHANGED, SINCE 1971" calls=1 font=700 15.120000000000001px monospace
SEEK seek(4999) -> currentMs=4999 phase=RELEASE occupancy=0.000
SEEK seek(5000) -> currentMs=5000 phase=DONE occupancy=0.000
SEEK seek(5500) -> currentMs=5000 phase=DONE occupancy=0.000
SEEK seek(6000) -> currentMs=5000 phase=DONE occupancy=0.000
SEEK seek(-250) -> currentMs=0 phase=PRE occupancy=0.000
SEEK-CLAMP exit+trailing-handle never wrap: PASS
RESTART seek(0)+setPaused(false) -> currentMs=0 phase=PRE
PAUSE seek(2500)+setPaused(true) -> currentMs=2500 phase=HOLD (held)
PLAY setPaused(false) after pause -> currentMs=2500 (resumes from held 2500)
FOLLOWER-FRAME seek(4900) + 300ms frames -> currentMs=5000 phase=DONE PASS clamped, no wrap
ALL-CHECKS PASS
STANDALONE-LOOP no-seek frames 0->5100ms -> currentMs=100 (5100 mod 5000 = 100 expected) PASS loop is internal-clock only
SWAP1 numeral=2049 fg=#ffd23f formationDurationMs=1600 targets=5546 anchors={"cp230":1000,"cp235":1800,"cp240":2600,"cp245":3100,"cp260":4000,"cp270":5000}
SWAP1 moved: cp235 1500->1800 cp240 2000->2600 cp245 2500->3100 | fixed: cp230 1000 cp260 4000 cp270 5000
SWAP1 CP-23.0 topBandBorrowed in (0.2,0.6) + line==1 @1000ms PASS topB=0.4409 line=1 occ=0.072
SWAP1 CP-23.5 aboveFront>=0.95 + rain>0 @1800ms PASS aboveFront=1.000 rain=1717 occ=0.865
SWAP1 CP-24.0 occupancy>=0.98 @2600ms PASS occ=1.000
SWAP1 CP-24.5 visibleLoose==0 @3100ms PASS loose=0 occ=1.000
SWAP1 CP-26.0 occupancy>=0.98 @4000ms PASS occ=1.000 loose=1849
SWAP1 CP-27.0 occupancy<=0.02 @5000ms PASS occ=0.000
SWAP1 separation invariant under palette swap: borrow 1 > reserve 0.35 PASS
SWAP1-OVERALL PASS
SWAPLINE CONFIG.text.line="SAME FRAME, FIFTY YEARS LATER"
SWAPLINE fillText(main) calls with swapped line: count=1 text="SAME FRAME, FIFTY YEARS LATER" x=480 y=472.5 font=700 15.120000000000001px monospace
SWAPLINE-OVERALL PASS
SWAP2 numeral=12345 targets=4014 vs default 4423 changed=true occ@2000=1.000
SWAP2-OVERALL PASS
```

## Purity + syntax on the cured build — raw output
```
$ grep -nE 'segment\.mp4|source\.mp4|t024|<video|<img' recreation.html
(no output — grep exit 1, 0 hits)
$ grep -cE 'src=|href=|url\(|@import|fetch\(' recreation.html
0
$ node vm.Script parse: recreation.html SYNTAX OK script chars 12214 · comparison.html SYNTAX OK script chars 1616
```
Seeded RNG mulberry32(CONFIG.seed = 19211) unchanged; harness loads are deterministic (identical counts across the default loads in this run). PIXEL-UNVERIFIED stands (no browser binary in this seat; logic-harness level evidence).

## Comparison check (cured)
comparison.html slaves the recreation through seek/setPaused under recreationMs = videoMs − 500, now clamped at both the comparison mapping and seek() itself: video 5.5 s → recreationMs 5,000 = DONE (glyph exited, occupancy 0) and video 5.5–6.0 s (trailing handle) holds DONE — never PRE. Play/Pause/Restart/Exit/Trailing-handle observations are the SEEK/RESTART/PAUSE/PLAY receipts above.

## A6 legs re-filed on the cured build (A12.3)
- guard-measured-fit → `fit-table.md` RE-FILED on build 2b80f539…: rows are PIL RENDERED measurements (A12.2(ii), stand-in font DejaVu Sans Mono Bold, labeled PROXY) — numeral ink height 78.9 px at the 360 px stage PASS · line ink height 5.0 px = 1 HIT, carried ONLY with its specimen-geometry disposition · hierarchy ratio 15.9:1 measured.
- guard-config-census → `config-census.md` RE-FILED on build 2b80f539…: 0 HITs (cure delta scanned: the clamp bounds read CYCLE_MS, CONFIG-derived from time.exitStartMs + time.exitDurationMs; `follower` is a boolean clock-mode flag, STRUCTURAL; no new shaping literals, no new CONFIG keys needed, no unapplied keys).

## jev-prewave completion re-fire (A12.3)
Filed in the completion section at the end of this record after firing (payload + return paths + verdict). The two prior HOLDs bind the pre-cure build d01198b7…; this re-fire binds the cured build 2b80f539….

## jev-prewave completion re-fire — RESULT (Cycle 036 Wave 33)
- Payload: `codex/payload-prewave-completion.txt` (60,847 B; FED REVIEW header · jev-prewave guard definition · this build-record · CONFIG · packet section P11-T03 · guards.md list · census-anchor mapping (plan-amendment-cycle035.md) · both A6 leg outputs VERBATIM; size+tail-verified before firing).
- Firing: ONE stream `cat payload | ~/workspace/codex-local/node_modules/.bin/codex exec - -s read-only > codex/prewave-completion.raw`, single exec call, no stdin field. Return complete on first firing (66,378 B raw).
- **Verdict: FIRE-WAVE** — parameterization 1.0 · purity pre-check 1.0 · own-checks completeness 1.0 · fidelity-plan honesty 1.0. Both firing-2 findings priced CURED by the judge (seek clamp receipts + line-swap fillText execution result expressly cited). Verbatim filing: `jev-prewave-completion.md` (artifact root, completion-wave name; prior HOLD filings untouched).
- Disposition: FIRE-WAVE applied; the five-lens scoring wave fires on the cured build 2b80f539… (identical-hash binding). Lens returns: `codex/lens-<name>-completion.raw` + `codex/lens-<name>.md`; verdict in scores.md.
