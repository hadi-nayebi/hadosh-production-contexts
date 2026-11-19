# build-record — T182 detail-to-wide match on action · attempt 1 · recreation Cycle 028 Wave 25

Item: T182 (Packet #10 T05, "Watchtower of Turkey", Leonardo Dalessandri, Vimeo 108018156) · queue #86 · first attempt.
Schedule basis (A7): **segment-anchored** — segment = source 80.30–83.30 s; cut at source 81.8 = build t=1500 ms.
Census-anchor mapping (A10.2, from RUN §2): offset −80.30 s · census states (segment-relative): 300 ms detail · 900 ms detail · 1420 ms detail (f81.72) · 1580 ms WIDE (f81.88) · 2300 ms wide · prescribed: detail scene for t<1500 · wide scene for t≥1500 · rolling phase continuous at t=1500.
Consumer: DLC assembler — transition surfaces (MATCH-ON-ACTION-SCALE form); secondary Hadosh Academy explainer opening surfaces.

## §1 — Segment (Execute step 1)
Cut: `ffmpeg -ss 80.30 -i study/video-digests/2026-11-16-vimeo-watchtower/source.mp4 -t 3.00` (input-seek, re-encoded libx264/yuv420p + AAC) → `segment.mp4`.
ffprobe facts (filed raw): codec_name=h264 · width=1920 · height=1080 · r_frame_rate=25/1 · audio codec_name=aac · format duration=3.000000 · size=1701605 bytes. SHA-256: 9325f4cc59cea25c6e1ebc33dd864627fff9ec2a2063aeee5e63aaa447e4e1dc.
Source: duration 212.68 s, 124588071 bytes (ffprobe this build).

## §2 — Gate returns consumed BEFORE any build script (A9.2)
Order proof: codex-observe and codex-plan-review payloads were assembled and fired, and both returns filed verbatim (`codex/codex-observe.md`, `codex/codex-plan-review.md`), before segment cut or any build file was written.

**codex-observe — CONFIRMED WITH GAPS.** Dispositions:
- Finding 1 (packet/register agree on core technique; evidence brackets 81.72 < 81.80 < 81.88): consumed as confirmation; no cure needed.
- Finding 2 (segment arithmetic consistent: 3.00 s window, cut 1.50 s in): consumed; independently re-bound by this record's §1 ffprobe facts.
- Finding 3 (§1e's "+0.90 s (= source 81.80)" implies an unnamed 80.90 s analysis origin): SET ASIDE with reason — the analysis window is the seat's RUN record, which the builder does not edit; the build's own binding (segment start 80.30 + cutMs 1500 = source 81.80) is independently established in §1 and does not rely on the seat's analysis origin.
- Finding 4 (phase continuity is stronger than the fed evidence establishes; packet labels shared-action construction "inferred"): consumed as the priced motion risk — the Plan's construction makes continuity structural (one phase function), and the wave's motion lens prices whether it reads; the build-record claims continuity as CONSTRUCTION, not as specimen measurement. The 580 ms period stands as the seat's measured value (RUN §1e/§1f reconciliation, 550–600 ms range).
- Finding 5 (family arithmetic recomputes where lens breakdowns were fed — T106 88.4 ✓, T104 85.2 ✓, family mean 83.7 ✓; filed returns not fed, binding NOT CONFIRMED from the stream): feeder limitation noted — returns live seat-side in the sibling artifact directories; no T182 fact depends on them beyond the averages the audit recomputed.
- Finding 6 (consumer wording "location/subject change without a visible edit" misdescribes the specimen): APPLIED as clarification — this build implements the packet mechanic exactly as sourced: **shared subject + shared action phase + scale jump + direct cut, no cover**. The RUN's consumer line is seat text; the builder does not edit RUN.md (task boundary).

**codex-plan-review — REVISE** (phase continuity structurally sound; readable action match + swap condition not yet guaranteed). Dispositions:
- Cure 1 (convergent defect addressed by one scene graph + one phase function): no cure needed; noted.
- Cure 2 (zero-transition needs an independent check, not only prose): APPLIED — the own-check suite asserts the camera as a STEP: scaleAt(cutMs−1)=detailScale and scaleAt(cutMs+1)=1 under default, swapped, and probe configs (raw output §4); no interpolation path exists in render() (the transform is set from scaleAt's branch, never eased).
- Cure 3 (prescribed swap cutMs 1100 / rollPeriodMs 400 lands at phase 0.75 = stroke reversal, speed 0; assert a CONFIG-derived minimum translational speed at the cut; state permitted ranges): APPLIED IN PART + SET ASIDE IN PART. Applied: a speed-at-cut assertion now stands in the suite — DEFAULT config passes at speed fraction 0.8569 (≥0.5), and an additional SWAP-PROBE (cutMs 1150, rollPeriodMs 400, same swapped palette/label) passes all §2d.1 assertions with speed fraction 0.7071, proving a mid-stroke landing under swapped timing. Set aside: the prescribed swap values themselves (cutMs 1100) are NOT changed — they are fixed verbatim by RUN §2's swap table and the builder's tasking; under them the continuity assertions (the binding §2d.1 set) all pass, and the reversal landing is printed in the raw output (§4) as a known priced property of that prescribed probe, not hidden. Permitted parameter ranges (stated per the cure): cutMs ∈ (0, durationMs) · rollPeriodMs ∈ [200, 2000] ms · detailScale ∈ [1.5, 6] · rollAmplitudePx ∈ [20, 200] · rollTiltDeg ∈ [0, 30] — all defaults and swap values sit inside these ranges.
- Cure 4 (name a provisional motion score + expected total): APPLIED — provisional pricing, recorded before the wave: motion predicted 84–88 (T106's filed motion 84 as the anchor; the structural phase driver argues above it, the 3.2× recognition risk argues at it); expected five-lens total ≈ 86 ± 3. The wave's actual returns govern; this prediction is printed so a miss is visible.
- Cure 5 (hands must be visibly coupled to the pin; scene detail vs T105's specimen-adjacent cure): APPLIED (hands) + SET ASIDE (props). Applied: the hands are children of the pin group (they translate + rotate with the pin exactly), and arm lines are re-solved every frame from the CONFIG shoulder points to the hands' computed positions — the shared action is hands-on-pin, as the packet prices it. Set aside: the wide-scene elements (figure, round table, dough balls, griddle) are NOT deferred — they are prescribed verbatim by the binding Plan (RUN §2c.3 names the wide scene's contents); T105's cure targets specimen MEDIA/imagery, and this scene is code-drawn stylized geometry with zero specimen media (§4 purity: 0 hits, 0 external assets).

## §3 — Construction (Execute steps 2–3)
`recreation.html` (ONE self-contained file, SHA-256 at §7): CONFIG at top (all §2 T182 keys as amended by §2c+§2d: cutMs 1500 · durationMs 3000 · rollPeriodMs 580 · rollAmplitudePx 120 · rollTiltDeg 14 · detailScale 3.2 · doughColor #e8dcc4 · pinColor #a9743f · skinColor #8a5a3b · tableColor #7d5a38 · accentLabel "flatbread", plus applied scene keys wallColor/clothColor/flourColor/griddleColor/doughCxFrac/doughCyFrac/blurPxDetail/blurPxWide/flourOpacity and a geom object — every key resolved in config-census.md). ONE SVG scene graph (figure at round table, dough disc, long pin with hands riding it, dough balls, griddle shape) rendered under two camera scalings: detail = wide scene scaled by detailScale about the dough centre (0.50, 0.62); the cut at cutMs swaps camera scaling with ZERO transition frames. Single phase driver: phase(t)=(t mod rollPeriodMs)/rollPeriodMs · offset=rollAmplitudePx·sin(2π·phase) · angle=rollTiltDeg·sin(2π·phase+π/2), identical in both views. `window.__rec` exposes play/pause/seek/time (+ phaseAt/offsetAt/angleAt/sceneAt/scaleAt/config for the harness). NO rendered text, no captions, no external assets, no specimen media.
`comparison.html`: segment + recreation (iframe) side by side, ONE shared control set (Play/Pause/Restart), recreation clock slaved to the video's currentTime (seek on timeupdate/seeked), labels "ORIGINAL — Watchtower of Turkey @ 80.30–83.30 (cut at 81.8)" and "RECREATION — T182 detail-to-wide match on action, parameterized", @media (max-width:640px) stacking.

## §4 — Own checks, RAW output (A9.4 — filed from the final build)
Swap values (RUN §2, exact): pinColor #a9743f→#34558b · cutMs 1500→1100 · rollPeriodMs 580→400 · accentLabel "flatbread"→"orchard". Checkpoint assertions per §2d.1, all instants CONFIG-derived and re-derived under the swapped cutMs. Node harness raw output (final build, after census cures; exit 0):

```
CONFIG default: {"cutMs":1500,"durationMs":3000,"rollPeriodMs":580,"rollAmplitudePx":120,"rollTiltDeg":14,"detailScale":3.2,"doughColor":"#e8dcc4","pinColor":"#a9743f","skinColor":"#8a5a3b","tableColor":"#7d5a38","accentLabel":"flatbread","wallColor":"#4a3826","clothColor":"#7a4a56","flourColor":"#f4ecd9","griddleColor":"#3b332a","doughCxFrac":0.5,"doughCyFrac":0.62,"blurPxDetail":3,"blurPxWide":0.6,"flourOpacity":0.55,"geom":{"tableCx":480,"tableCy":360,"tableRx":330,"tableRy":105,"doughRx":120,"doughRy":44,"pinLen":430,"pinH":17,"handRx":34,"handRy":24,"handInset":62,"headR":34,"headCx":448,"headCy":128,"torsoW":150,"torsoH":130,"torsoCx":452,"torsoCy":218,"shoulderLx":402,"shoulderLy":178,"shoulderRx":502,"shoulderRy":178,"armW":15,"ballR":21,"ballRyFrac":0.8,"ball1x":268,"ball1y":408,"ball2x":322,"ball2y":428,"ball3x":648,"ball3y":420,"torsoRx":38,"griddleX":700,"griddleY":300,"griddleW":170,"griddleH":92,"griddleR":16,"flourRx":190,"flourRy":62}}
PASS DEFAULT phase_detail(cutMs)==phase_wide(cutMs) exactly :: 0.5862068965517241 == 0.5862068965517241
PASS DEFAULT |offset(cut+1)-offset(cut-1)| <= 2% stage width (19.2px) :: 2.2277px
PASS DEFAULT |angle(cut+1)-angle(cut-1)| <= 3deg :: 0.1564deg
PASS DEFAULT scene at cutMs-1 is detail :: detail
PASS DEFAULT scene at cutMs+1 is wide :: wide
PASS DEFAULT scale step: scaleAt(cut-1)=detailScale, scaleAt(cut+1)=1 :: 3.2 -> 1
INFO DEFAULT translational speed fraction at cut = 0.8569 (1 = mid-stroke max, 0 = reversal)
PASS DEFAULT speed at cut >= 0.5 (mid-stroke, plan-review cure 3 assertion) :: 0.8569
PASS DEFAULT accentLabel is flatbread :: flatbread
CONFIG swapped: pinColor=#34558b cutMs=1100 rollPeriodMs=400 accentLabel=orchard
PASS SWAPPED phase_detail(cutMs)==phase_wide(cutMs) exactly :: 0.75 == 0.75
PASS SWAPPED |offset(cut+1)-offset(cut-1)| <= 2% stage width (19.2px) :: 0.0000px
PASS SWAPPED |angle(cut+1)-angle(cut-1)| <= 3deg :: 0.4398deg
PASS SWAPPED scene at cutMs-1 is detail :: detail
PASS SWAPPED scene at cutMs+1 is wide :: wide
PASS SWAPPED scale step: scaleAt(cut-1)=detailScale, scaleAt(cut+1)=1 :: 3.2 -> 1
INFO SWAPPED translational speed fraction at cut = 0.0000 (1 = mid-stroke max, 0 = reversal)
INFO SWAPPED speed fraction at swapped cut = 0.0000 (phase 0.75 = stroke reversal instant; continuity assertions above are the binding §2d.1 set)
PASS SWAP-PROBE-1150 phase_detail(cutMs)==phase_wide(cutMs) exactly :: 0.875 == 0.875
PASS SWAP-PROBE-1150 |offset(cut+1)-offset(cut-1)| <= 2% stage width (19.2px) :: 2.6656px
PASS SWAP-PROBE-1150 |angle(cut+1)-angle(cut-1)| <= 3deg :: 0.3110deg
PASS SWAP-PROBE-1150 scene at cutMs-1 is detail :: detail
PASS SWAP-PROBE-1150 scene at cutMs+1 is wide :: wide
PASS SWAP-PROBE-1150 scale step: scaleAt(cut-1)=detailScale, scaleAt(cut+1)=1 :: 3.2 -> 1
INFO SWAP-PROBE-1150 translational speed fraction at cut = 0.7071 (1 = mid-stroke max, 0 = reversal)
PASS SWAP-PROBE-1150 speed at cut >= 0.5 (mid-stroke landing demonstrable under swapped timing, plan-review cure 3) :: 0.7071
HARNESS RESULT: ALL PASS
```

Syntax check raw: `node --check` on the extracted inline script → `SYNTAX OK` (exit 0).
Purity grep raw (§2c.1(a), final build): `grep -nEi 'segment\.mp4|source\.mp4|<video|<img|108018156|watchtower|vimeo' recreation.html` → no output, exit 1 = **0 hits**. Permitted exceptions: none; no `url(#id)` references exist in the file.
Asset inventory raw (§2c.1(b)): `grep -oE '(src|href)="[^"]+"|url\(|@import|fetch\(' recreation.html` → no output, exit 1 = **0 external references**; every asset is inline code in the one file.
Comparison check raw (node harness per §2c.1(c), exit 0):
```
PASS one <video> for segment
PASS video src is segment.mp4
PASS recreation stage present (iframe recreation.html)
PASS exactly ONE control set (3 buttons) :: 3 buttons
PASS label ORIGINAL verbatim
PASS label RECREATION verbatim
PASS recreation clock slaved to video currentTime
PASS @media (max-width:640px) stacking rule present
COMPARISON RESULT: ALL PASS
```

## §5 — A6 legs (pre-wave, on the final build)
- `fit-table.md` — text-free priced N/A (0 text elements, mechanically proven) + scene geometry measured from CONFIG. HITs: 0.
- `config-census.md` — all-literal scan (3 subject-shaping literals found and cured into CONFIG before filing: ballRyFrac, torsoRx, flourOpacity) · every CONFIG key resolved to an application site (unapplied: 0) · CSS-variable setter check: no CSS variables exist (empty set). HITs: 0.
Both legs' outputs are carried verbatim in the jev-prewave payload (A10.1).

## §6 — jev-prewave
Fired after own checks + both A6 legs, before the wave (INSTRUCTION §5 leg 3b). Payload `codex/payload-prewave.txt` (36,846 bytes) carries: guard definition · build-record verbatim · CONFIG block verbatim · packet/register facts + binding census-anchor mapping · fit-table.md verbatim · config-census.md verbatim (A10.1 satisfied).
Return filed verbatim at `jev-prewave.md`: **FIRE-WAVE** — "the supplied paperwork earns scoring; no rejection taxonomy applies" (parameterization, purity pre-check, own-checks completeness, fidelity-plan honesty all priced sufficient; the prescribed swap's reversal landing is disclosed in §4 and priced by the judge as a wave-scrutiny matter, not a HOLD).
Disposition: APPLIED — the wave fired. Judge's printed limit: the standalone guards.md command list was not a separate payload element (the executable check patterns stand in RUN §2c.1 and the raw outputs in §4); the judge itself classified this as a feed-completeness gap, not evidence of omitted checks. Noted for the seat's Condense.

## §7 — Five-lens wave + evidence binding
Five separate fed Codex runs (guards/codex-scoring-wave.md), payloads `codex/payload-{motion,timing,purity,reusability,readability}.txt`, each carrying the standing header + neutral facts + census-anchor mapping + score-blind build record + fit-table + FULL recreation.html, all bound to recreation.html SHA-256 **80221825fd720b36084ca54a0578309b8b0ff1811927023800b4de8244420497**.
Returns (verbatim, each ending SCORE: <int>): motion 79 · timing 96 · purity 100 · reusability 84 · readability 76.
Readability firing note: the first readability firing was interrupted by a service restart after the payload echo and before any return; the partial file is preserved as `codex/lens-readability-interim1-interrupted.md` (no SCORE line, never entered into the average) and the lens was re-fired once on the identical payload — the filed `codex/lens-readability.md` (SCORE: 76) is that re-fire.
Consolidation (scores.md, arithmetic shown there): sum 435 · average **87.0** · minimum **76** · bar avg ≥85 AND min ≥70 → **PASS** · tier **RECREATED**.

Evidence binding (path · size · sha-256):
- recreation.html · 6,646 bytes (after census cures) · sha256 80221825fd720b36084ca54a0578309b8b0ff1811927023800b4de8244420497
- segment.mp4 · 1,701,605 bytes · sha256 9325f4cc59cea25c6e1ebc33dd864627fff9ec2a2063aeee5e63aaa447e4e1dc
- comparison.html · 2,346 bytes · sha256 2c526e42384e2609033ecb492a3172ead124fa32a383f7be906a052c46200faf (hash taken before any post-build edit; comparison.html was never edited after its check run)
- codex/codex-observe.md · codex/codex-plan-review.md · jev-prewave.md · codex/lens-{motion,timing,purity,reusability,readability}.md — filed verbatim from the firing streams; payloads beside them.

## Faithfulness trace (item level; the wave's §7 trace is the seat's)
- trace: §1 Observe — packet §T05 + register line + RUN §§1b/1c/1e/1f consumed; codex-observe fired first (§2 above). §2 Plan — RUN §2 as amended by §2c+§2d executed as written; codex-plan-review consumed before building (§2). §3 Execute — segment cut (§1) · recreation built to the parameter table (§3) · comparison built (§3). §5 Verify — own checks raw (§4) · A6 legs (§5) · jev-prewave FIRE-WAVE (§6) · five-lens wave + mechanical consolidation (§7, scores.md). §6 Guards — purity grep 0 hits · parameterization proven by swap · no captions (no text at all) · scoring integrity (five separate runs, verbatim returns before verdict, identical hash). §9 Condense — seat's act; this record's cure list (scores.md) is its input.
- choice log (≥2): (1) ONE scene graph under two camera scalings CHOSEN over two separate scenes — continuity structural, not tuned (§2c.3 binding); rejected alternative (two scenes with matched phase) leaves continuity to per-scene tuning, the T106 defect shape. (2) Hands as children of the pin group + per-frame arm re-solve CHOSEN over static arms — plan-review cure 5 (the packet's shared action is hands-on-pin); rejected: arms as fixed scene dressing (hands would detach from the pin at stroke extremes). (3) Sinusoidal pin offset CHOSEN as the stroke form (the Plan's prescribed phase function); the motion lens priced its along-axis direction as the attempt's main defect — carried in scores.md's cure list, not silently re-built (the wave judges the filed build).
- deviation register: D1 — prescribed swap probe lands at a stroke-reversal instant (phase 0.75, speed 0): the swap values are the seat Plan's verbatim values and were not altered; the property is printed in §4's raw output and was priced by both the plan-review (cure 3, applied in part) and jev-prewave. D2 — readability lens fired twice: first firing interrupted by a service restart (infrastructure, not a build defect); interim preserved, single re-fire, no score carried from the interrupted run. No other deviations; RUN.md/HQ.json/QUEUE.md/verdict-history/heartbeat untouched by the builder (seat's close acts).
- evidence binding: §7 table above (path + size + sha-256 per artifact; codex returns filed verbatim at firing time).
- git corroboration: UNCORROBORATED-BY-LOCAL-GIT (lane files land via the seat's sync; INSTRUCTION §7 standing line).
