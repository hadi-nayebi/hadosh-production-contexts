# Build record — T199 shout scaling inside a real scene · attempt 1 · recreation Cycle 036 Wave 33

Item: queue #94 · Packet #11 ("Caption with Intention") technique P11-T10 · window 67–75 s.
Plan authority: run-dir `item-T199-observe-plan.md` AS AMENDED by `plan-amendment-cycle036.md` in this directory (RUN.md §2b, jev-plan-exit REVISE applied in full; amendment filed BEFORE any build script, A9.2).
Schedule basis: **segment-anchored** — buildMs = segmentTimeMs − 500 (CONFIG segmentHandleOffsetMs −500); governed interval buildMs [0, 8500] ≡ source [67.0, 75.5]. Every onset is a census-bracket ALLOCATION (ASR gap ~66–75 s; transcript.json returns no segments 66.18–75.71 s); envelope durations are design ALLOCATIONS inside the observed brackets. Peak/color coincidence = shared trigger at onsetMs (color flip + scale rise start together; maximum scale lands at onsetMs+attackMs).
Render-proof limitation (guards.md command 2): **PIXEL-UNVERIFIED** — no browser binary in this seat; own checks are source/logic-level (node harness on the build's own stateAt/validateConfig) + PIL rendered measurement; comparison.html is the render surface.
Registration limits: bound film is a trade-press re-upload, version fidelity UNVERIFIED · variable-font automatic operation UNVERIFIED · true cut count UNVERIFIED.

## Motion-viewing receipt (jev-observe-exit charge (a) — Execute step 1)
Watched in motion form available to this seat: frame-sequence playback review of the archived source segment at 2 fps across the full governed window (18 frames, 66.5–75.5 s, extracted from source.mp4 this run and viewed firsthand as a sequence) + the same treatment of `clips/074-gump-shout-4.6s.mp4` (10 frames, 74–78.6 s). What moves when:
- **Hail:** near-black transition frames, then the scene is established and "GUMP!" stands alone, green, enlarged, on its plate; across the next second it decays toward base while still green.
- **Question:** the full line is pre-visible; peaks travel one word at a time — "your" enlarged (prefix green), then "purpose" enlarged with its glyphs crossing both neighbours, then "this" enlarged (prefix through "in" green, "army?" still white); by the next frame the line is complete, ALL green, ALL back at base size — peaks transient, color persists.
- **Reply:** line replaces instantly; spoken prefix turns orange progressively ("To do whatever" first), "me," carries a brief enlargement in the sequence, "Drill" stands enlarged orange with "Sergeant." still white; no second peak coexists with Drill's.
- **Shout:** the line appears all-white at base; "Goddamnit" erupts to ~2× height, bold green, its glyphs crossing into the still-white "Gump!"; then "Goddamnit" is back at base (still green) while "Gump!" stands enlarged green. Two sequential peaks, never simultaneous.
- **Exit:** hard cut to the focus-group room right after the shout pair (clip frames confirm: shout states, then the room) — represented by the segment end itself (amendment §8); no exit animation built.
The census mechanics in the item record are CONFIRMED by this viewing; no schedule change resulted.

## Sibling status line (jev-observe-exit charge (c))
- T195 (spoken-state sweep, same packet): PASS 88.6 — the family's scored precedent.
- T197 (volume ramp): NO VERDICT (prewave HOLD ×2 on its fit leg) — warning priced in the Plan.
- **T196 (pre-lighting, sibling pre-light/speaker-color family): NO VERDICT** — its transferable cure discipline (fit evidence as post-fit recorded bounds + executable receipts for every assertion, never modeled rows) is applied to T199 from this first draft: every A11 assertion below carries its A12 receipt and the fit table is PIL-measured, not modeled.

## Segment binding (guards.md command 5)
Cut in Execute: source.mp4 (1920×1080, 24 fps, 113.734 s, 10,213,125 B) at **66.5–75.5 s** → `segment.mp4`, re-encoded h264/yuv420p + AAC, faststart.
ffprobe (verbatim): codec_name=h264 · width=1920 · height=1080 · avg_frame_rate=24/1 · codec_name=aac · duration=9.000000 · size=2086254.
segment.mp4 SHA-256: 281b795a3299f09c26b2171e630dc9d294ee09caf489aa6e2baaa20f255af694 (2,086,254 B). Evidence only; labeled ORIGINAL in comparison.html; referenced nowhere in recreation.html (purity grep below).

## Construction
One self-contained HTML; DOM word spans in reserved base-width slots (slot width = canvas-measured base ink width) over a code-drawn scene plate (SVG silhouettes + columns + gradient, all geometry/palette from CONFIG scenePlate); rAF clock evaluates each word's envelope from CONFIG and sets font-size (base × lerp(1, peakScale, env)) + font-variation-settings 'wght' (lerp(baseWeight, peakWeight, env)); peaked words paint above neighbours (z-index while env>0) — the source's overlap form. Line ownership: one visible line at a time, instant replace at entryMs, windows partition [0,800) plate-owned · L0 [800,1100) · L1 [1100,4200) · L2 [4200,6950) · L3 [6950, 8500+hold). Validator REJECTS a violating CONFIG (prints CONFIG-REJECTED naming the predicate, animates nothing) — never clamps.
Fidelity plan: implements all seven census peak events, pre-light states, persistent speaker colors, transient peaks, plate strip. Deliberately NOT built (named deferrals = departure table): backdrop motion/acting, header furniture (CONFIG toggle, default off), testimonial "WOW" (T201), an "army?" peak (unobserved), line exit fades (unobserved), L0's pre-light state (unobservable).
Weight fidelity limit: only static Liberation faces exist in this seat; intermediate wght renders UNVERIFIED on this stack (fit-table prints it).

## Own checks — A12 EXECUTABLE RECEIPTS (harness: `node /tmp/t199-harness.js recreation.html` — loads the build's own script with stubbed DOM, evaluates the build's own stateAt/validateConfig; raw output verbatim)
```
COUNT CONFIG words = 18 (expected 18 = 1+7+8+2)
PASS COUNT :: words=18
PASS CP1-entry :: expr L0.entryMs=800 scale=1.3500 color=#2ee66b
PASS CP1-twin :: expr x=(1000-950)/500=0.1 env=(1-x)^3=0.729 expected=1.2551 got=1.2551
PASS CP2 :: expr L1.your.onset+attack=1900 scale@1900=1.500 scale@2000=1.500
PASS CP3 :: expr=2900 scale@2900=1.500 scale@3000=1.500
PASS CP4 :: expr=3500 this scale=1.600
PASS CP5 :: expr end=3950 <=4000 scales=1.000,1.000,1.000,1.000,1.000,1.000,1.000
PASS CP6 :: expr L2.Drill.onset+attack=6000 scale=1.450 color=#f59e2d
PASS CP7 :: expr words[2].onset=4800<=5000<words[3].onset=5150
PASS CP8 :: expr L3.entryMs=6950<=7000<L3.words[0].onset=7300
PASS CP9 :: expr=7500 scale=2.000 weight=880
PASS CP10 :: expr=8000 Gump scale=1.500 Goddamnit scale=1.000
PASS CP11-instant :: expr CP11 instant = lines[3].words[0].onsetMs+attackMs = 7500 (same expression as CP9); plateMaxLuminance=0.35
PASS OWNERSHIP :: plate[0,800) L0[800,1100) L1[1100,4200) L2[4200,6950) L3[6950,..) validator ok=true
PASS SWAP-palette :: validator ok=true L0 color@800=#3a86ff (specimen #2ee66b)
PASS SWAP-orders-peak :: expr orders.onset+attack=2900 scale=1.500
PASS SWAP-CP6-moved :: expr written.onset(5200)+attack(200)=5400 (specimen 6000 -> swap 5400) scale=1.450
PASS SWAP-plate-unchanged :: scenePlate deep-equal specimen
PASS REJECT-negative :: validateConfig(neg) = {"ok":false,"predicate":"onsetMs < entryMs","line":3,"word":"Goddamnit"}
SUMMARY PASS=19 FAIL=0
```
Per-CP receipt mapping (assertion · CONFIG expression · raw result):
- CP1 entry: stateAt(L0.entryMs=800) → scale 1.3500, color #2ee66b ∈ band [1.33,1.37] ✓. CP1 twin: stateAt(1000) → single cubic release equation env=(1−x)³, x=(1000−950)/500=0.10 → expected 1.2551, got 1.2551 ∈ [1.22,1.42] ✓ (amendment §2 — the Plan's linear bound is withdrawn).
- CP2: expression L1.words[1].onsetMs+attackMs=1900 AND census twin 2000 → your scale 1.500 at both (hold phase), What's spoken-base, sole unspoken ✓ (amendment §3 dual instants).
- CP3: 2900 AND twin 3000 → purpose 1.500 at both, "in" unspoken ✓.
- CP4: 3300+200=3500 → this 1.600 ∈ [1.50,1.70], army? unspoken ✓.
- CP5: envelope-end expression 3300+200+150+300(L1 override)=3950 ≤ twin 4000; stateAt(4000) → all 7 words spoken, scales all 1.000 ✓.
- CP6: L2.words[6].onsetMs+attackMs=6000 → Drill 1.450 ∈ [1.38,1.55], color #f59e2d = speakerBColor, Sergeant. unspoken ✓.
- CP7: twin 5000 with precondition expressions words[2].onset 4800 ≤ 5000 < words[3].onset 5150 → prefix spoken, you unspoken, all scales 1.0 ✓.
- CP8: twin 7000 with L3.entryMs 6950 ≤ 7000 < words[0].onset 7300 → both words unspoken, base ✓.
- CP9: 7300+200=7500 → Goddamnit 2.000 ∈ [1.85,2.15], weight 880 ≥ 840, Gump! unspoken ✓.
- CP10: 7800+200=8000 → Gump! 1.500 ∈ [1.42,1.58], Goddamnit 1.000 ≤ 1.10 (L3 override ends its envelope exactly at 7800) ✓.
- CP11: evaluated at the SAME CONFIG expression as CP9 (7500, amendment §5); rendered measurement in fit-table.md — band luminance worst 0.0164 ≤ 0.35, contrasts worst 7.39 ≥ 4.5 for all three text colors ✓.

## Swap test (amendment §5 — COMPLETE replacement CONFIG, CONFIG-only)
Replacement lines (all four lines' word objects, incl. L3's two peak assignments Then 2.00/880 + soldier! 1.50/850) + speakerAColor #2ee66b→#3a86ff + timing written onset 5200. Receipts above: validator ok on the swap CONFIG · L0 color @800 = #3a86ff (palette followed) · orders peak @2900 scale 1.500 in swapped color · **CP6-analog instant moved 6000 → 5400 via the CONFIG expression** (written.onsetMs 5200 + attackMs 200; the Plan's 5600 arithmetic error corrected in amendment §4) · scenePlate deep-equal (plate/backdrop unchanged). Technique still reads: peaks land on the swapped words, colors follow speakers.
**Rejection test:** negative CONFIG (L3.words[0].onsetMs 6300) → validateConfig returns {ok:false, predicate:'onsetMs < entryMs', line:3} — the named P-ENTRY predicate of amendment §5; the build prints CONFIG-REJECTED and animates nothing on such a CONFIG. PASS.

## Purity grep (guards.md command 1)
`grep -nE 'segment\.mp4|source\.mp4|t070|t073|t074|<video|<img|\.jpg|\.mp4' recreation.html` → **0 hits** (grep exit 1). The word "Gump!" appears only as CONFIG line TEXT (content, the technique subject — classified here, not a media reference). Asset inventory: zero external assets; the scene is code-drawn SVG; no specimen media, frames, or traced redraws anywhere in the build.

## Syntax (guards.md command 3)
`node --check` on the extracted inline scripts: recreation.html script **SYNTAX OK** · comparison.html script **SYNTAX OK**. No RNG anywhere in the build (deterministic; seeded-RNG census N/A — no randomness to seed).

## Comparison check (amendment §7 — instrumented, logic level; PIXEL-UNVERIFIED in this seat)
comparison.html: ORIGINAL (segment.mp4, labeled "Caption with Intention (Packet #11) @ source 67–75 s (segment 66.5–75.5 s)") vs RECREATION side by side; ONE control set (Play/Pause/Restart/Seek-to-5.0s) driving the segment, recreation clock slaved as buildMs = segmentTimeMs − 500. Instrumented observations filed from the harness state function at the slaved instants: seek 5.0 s → buildMs 4500 → L2 state (lineIndex 2, prefix spoken, no peak) ✓ offset verified at two sample times (segment 1500 ms → buildMs 1000 = CP1 twin state, scale 1.2551 ✓; segment 8000 ms → buildMs 7500 = CP9 state ✓); play/pause act on the segment element only (the recreation has no independent clock in comparison mode beyond its iframe's stateAt slaving via the shared controls' CHECK log); terminal frame: at segment end the recreation freezes on the terminal governed state (stateAt(8500): L3 both words spoken color, scales 1.000 — harness-verified) and the standalone 1200 ms endHold does NOT extend the comparison (amendment §7). Phone stacking: CSS @media (max-width:700px) stacks columns; controls sit above both panels, reachable. Browser-level play/pause observation is the printed PIXEL-UNVERIFIED limit.

## A6 legs (pre-wave, final build)
- fit-table.md: PIL-measured rows at base + every peak state, both stages; CP11 rendered band rows. HITs carried printed: HIT-OV ×3 peak events (disposition: source-true overlap form; bound was a Plan estimate) · HIT-FLOOR quantity-mismatch (Plan font-px floor passes 11.34 ≥ 11; guard ink-height reading 7.75–8.25 base, peaks 11.00–16.50). Weight intermediate values UNVERIFIED on this seat's static-font stack (printed limit).
- config-census.md: **HITs 0** — every CONFIG key resolved to an application site; first-draft generator literals (column opacity, row geometry, word gap, plate height factor) were moved into CONFIG before filing.

## Deviations
None from the amended Plan. Two fit-leg HIT classes are carried into prewave printed with dispositions (above), per the advisory-leg form.

## PREWAVE CURE ADDENDUM (jev-prewave firing 1: HOLD — ASSERTED-CHECKS; parameterization 0.75 · purity 1.00 · own-checks 0.25 · fidelity-plan honesty 0.75)
Return filed verbatim at codex/jev-prewave.raw (+ jev-prewave.md). Build UNCHANGED by the cure (same SHA-256 edad0b81…); the cures are evidence completions, filed here and in the A6 legs, then ONE re-fire.
- **Cure 1 (finding 1 — CP7/CP8 raw state predicates):** the harness was re-run in extended form (`node /tmp/t199-harness2.js recreation.html`, 20 PASS lines incl. the original 19) dumping the build's FULL raw stateAt JSON at every CP instant. The CP7 raw state @5000: lineIndex 2, words To/do/whatever spoken=true color #f59e2d scales 1, you/tell/me,/Drill/Sergeant. spoken=false color #f2f2f2 scales 1 — every CP7 predicate is visible in the raw dump, not summarized. CP8 raw state @7000: lineIndex 3, Goddamnit + Gump! both spoken=false, color #f2f2f2, scale 1 — full predicates visible. Full dumps for all 14 instants (800/1000/1900/2000/2900/3000/3500/4000/5000/6000/7000/7500/8000/8500) are carried verbatim in the re-fire payload's cure section.
- **Cure 2 (finding 2 — CP11 receipt + 1920 provenance):** the CP11 measurement run is the PIL/python leg whose raw output is now filed verbatim in fit-table.md's cure appendix, keyed to the CP9 expression (evaluation instant lines[3].words[0].onsetMs+attackMs = 7500): sampled surface = the rendered text band (plate #000000 @ opacity 0.55 composited over each scenePlate backdrop color). The 1920 px rows are DIRECT measurements from the same instrument run at the 1920 stage (the raw output prints both stages' per-state lines) — not extrapolations; the appendix labels them so.
- **Cure 3 (finding 3 — swap geometry + easingName):** swap slot geometry measured with the same PIL instrument at the 360 stage (base 11.34 px, gap 3.18 px): SPECIMEN line ink totals L0 36.2 · L1 206.6 · L2 221.3 · L3 97.2 → SWAP L0 "HALT!" 31.2 · L1 230.8 (slots Who 24.0, gave 25.2, your 24.2, squad 32.2, orders 34.5, in 8.8, this 19.8, sector? 39.8) · L2 256.9 (We 16.5, follow 32.8, the 16.5, captain's 47.8, written 36.5, orders, 37.2, Sergeant. 50.5) · L3 113.7 (Then 26.2, prove 30.0, it, 8.5, soldier! 39.5) — replacement words regenerate their slot geometry from CONFIG text (guards.md command 2's geometry evidence); all swap totals inside the 345.6 bound. easingName: reclassified in config-census.md as a descriptive datum naming the construction-spec cubic (per the Plan's parameter table: "the function is construction spec; the name is the CONFIG datum") — it is not a code selector and no site is claimed for it beyond that naming.
- **Cure 5 (finding 5 — "me," accent disposition):** DISPOSED — deliberately excluded under the governing Observe disposition. The binding census (item record §1, census-verified) prices exactly ONE reply peak (Drill); the montage impression of a "me," enlargement in my motion receipt is a 2 fps-sequence read at montage scale, superseded by the binding census per the A10.2 rule (build only observed/governed states; an un-censused peak is not built — the same rule that keeps "army?" at peak 1.0). CONFIG therefore carries me, at peakScale 1.0 deliberately, and this line is its named deferral record.


## COMPLETION — Cycle 037 Wave 34 (A12.3 completion re-fire; cures from Wave-33 firing 2, scores.md cure list 1–4)
Build under completion review: recreation.html SHA-256 **1cde8d927e67215821d834b6e08bcd31e14a1d42cae596186ed2ce5cd19d14a9** (14,978 B). Wave-33 build was edad0b81d6a5bc98d1df494caf0e1f42fde778f25c1014a308e5832990f41d52 (14,730 B), verified firsthand at this completion's open (sha256sum recomputed, matched). The ONLY build change is cure 1's CONFIG addition: a `censusAnchors` table (10 instants) inside CONFIG — no rendering code, geometry, palette, or schedule value changed. Every payload of this completion binds the NEW hash. segment.mp4 unchanged (SHA-256 281b795a3299f09c26b2171e630dc9d294ee09caf489aa6e2baaa20f255af694, ffprobe re-verified this run: h264 1920×1080 24/1 + aac, duration 9.000000, size 2086254 — guards.md command 5 re-receipt). comparison.html unchanged (SHA-256 9fb0625a2301232314663d3f60393e0ec091ea2fc34c031d0c371e2b6725626e).

### Binding census-anchor mapping (the mapping section the prewave payload carries — with the hail-prescription reconciliation, cure 2)
Schedule basis: segment-anchored, buildMs = segmentTimeMs − 500 (CONFIG segmentHandleOffsetMs −500); onsets are census-bracket ALLOCATIONS (ASR gap in-window). Every Build-rel instant below is now a CONFIG expression: primary instants are `lines[].words[].onsetMs+attackMs` expressions; census twins are `CONFIG.censusAnchors.*` expressions (harness receipts below).
| Census state | Source | Build rel | CONFIG expression for the evaluation instant | Prescribed state |
|---|---|---|---|---|
| Hail peak | 68.0 | 1000 (twin) | censusAnchors.hailTwinMs = 1000 (entry state at lines[0].entryMs = 800) | L0 "GUMP!" speaker-A color; scale at the twin is the AMENDED mid-release value 1.2551 — see reconciliation line below |
| your peak | 69.0 | 2000 (twin) | censusAnchors.yourTwinMs = 2000 (primary lines[1].words[1].onsetMs+attackMs = 1900) | L1 "your" at peak; "What's" spoken base; tail unspoken |
| purpose peak | 70.0 | 3000 (twin) | censusAnchors.purposeTwinMs = 3000 (primary 2900) | L1 "purpose" at peak; prefix spoken; "in this army?" unspoken |
| this peak (ev) | ~70.5 | 3500 | lines[1].words[5].onsetMs+attackMs = 3500 (== censusAnchors.thisMs, asserted) | L1 "this" at peak; prefix through "in" spoken; "army?" unspoken |
| Question hold | 71.0 | 4000 (twin) | censusAnchors.questionHoldMs = 4000 (envelope end expression = 3950 ≤ twin) | L1 all spoken color, all scales base |
| Reply prefix | 72.0 | 5000 (twin) | censusAnchors.replyPrefixMs = 5000 | L2 prefix through "whatever" speaker-B color; rest unspoken; no peak |
| Drill peak | 73.0 | 6000 | lines[2].words[6].onsetMs+attackMs = 6000 (== censusAnchors.drillMs, asserted) | L2 "Drill" at peak, speaker-B; "Sergeant." unspoken |
| Shout pre-light | 74.0 | 7000 (twin) | censusAnchors.shoutPreLightMs = 7000 | L3 both words unspoken white, base scale |
| Goddamnit peak (ev) | ~74.5 | 7500 | lines[3].words[0].onsetMs+attackMs = 7500 (== censusAnchors.goddamnitMs, asserted) | L3 "Goddamnit" at peak 2.00, bold, speaker-A; "Gump!" unspoken |
| Gump! peak | 75.0 | 8000 | lines[3].words[1].onsetMs+attackMs = 8000 (== censusAnchors.gumpMs, asserted) | L3 "Gump!" at peak; "Goddamnit" spoken color, scale decayed ≤1.10 |
**HAIL-PRESCRIPTION RECONCILIATION (cure 2 — binding disposition):** the census-anchor table's original wording in the item record ("Hail peak — L0 at peak scale" at the 1000 twin) is **RETIRED**. plan-amendment-cycle036.md §2 GOVERNS over the table wording: L0's peak state (scale 1.35, speaker-A color) stands at its ENTRY instant (lines[0].entryMs = 800); at the census twin (censusAnchors.hailTwinMs = 1000) the envelope is mid-release under the amendment's single cubic equation — x=(1000−950)/500=0.10, env=(1−x)³=0.729, scale 1.2551, asserted in band [1.22,1.42]. Any reading of the retired table wording as prescribing peak scale at 1000 is superseded by this line, which is printed here, in the mapping section the prewave payload carries, per the firing-2 cure.

### Fresh own-checks on the final build — A12 executable receipts (harness: node on the build's own script with stubbed DOM, evaluating the build's own stateAt/validateConfig; EVERY evaluation instant below is a CONFIG expression — cure 1; raw output verbatim, A9.4)
```
PASS COUNT :: expr CONFIG.lines[].words[] count = 18 :: words=18 expected 18 = 1+7+8+2
PASS CP1-entry :: expr lines[0].entryMs = 800 :: scale=1.3500 color=#2ee66b
PASS CP1-twin :: expr censusAnchors.hailTwinMs (release x=(hailTwinMs-(lines[0].entryMs+peakHoldMs))/releaseMs=0.10 env=(1-x)^3=0.729 expected scale=1.2551) = 1000 :: got scale=1.2551
PASS CP2 :: expr lines[1].words[1].onsetMs+attackMs = 1900 :: your scale=1.500
PASS CP2-twin :: expr censusAnchors.yourTwinMs = 2000 :: your scale=1.500 (hold phase)
PASS CP3 :: expr lines[1].words[3].onsetMs+attackMs = 2900 :: purpose scale=1.500
PASS CP3-twin :: expr censusAnchors.purposeTwinMs = 3000 :: purpose scale=1.500
PASS CP4 :: expr lines[1].words[5].onsetMs+attackMs (== censusAnchors.thisMs: true) = 3500 :: this scale=1.600
PASS CP5 :: expr censusAnchors.questionHoldMs (envelope end lines[1].words[5].onsetMs+attackMs+peakHoldMs+lines[1].envelope.releaseMs=3950 <= twin) = 4000 :: scales=1.000,1.000,1.000,1.000,1.000,1.000,1.000
PASS CP6 :: expr lines[2].words[6].onsetMs+attackMs (== censusAnchors.drillMs: true) = 6000 :: Drill scale=1.450 color=#f59e2d
PASS CP7 :: expr censusAnchors.replyPrefixMs (preconditions lines[2].words[2].onsetMs=4800 <= twin < lines[2].words[3].onsetMs=5150) = 5000 :: prefix spoken through whatever, you unspoken, all scales 1
PASS CP8 :: expr censusAnchors.shoutPreLightMs (preconditions lines[3].entryMs=6950 <= twin < lines[3].words[0].onsetMs=7300) = 7000 :: both words unspoken white base
PASS CP9 :: expr lines[3].words[0].onsetMs+attackMs (== censusAnchors.goddamnitMs: true) = 7500 :: Goddamnit scale=2.000 weight=880
PASS CP10 :: expr lines[3].words[1].onsetMs+attackMs (== censusAnchors.gumpMs: true) = 8000 :: Gump scale=1.500 Goddamnit scale=1.000
PASS CP11-instant :: expr lines[3].words[0].onsetMs+attackMs (same expression as CP9) = 7500 :: plateMaxLuminance bound = CONFIG.scenePlate.plateMaxLuminance = 0.35; band sample in the JOINED CP11 receipt (separate single-block instrument)
PASS OWNERSHIP :: expr lines[].entryMs partition + GOVERNED_END_MS = plate[0,800) L0[800,1100) L1[1100,4200) L2[4200,6950) L3[6950,..) :: validator ok=true
PASS TWIN-SWAP-moved :: expr censusAnchors.replyPrefixMs (specimen 5000 -> swap 5100) = 5100 :: CP7-analog predicates hold at the MOVED twin instant 5100
PASS TWIN-SWAP-restored :: expr censusAnchors.replyPrefixMs restored = 5000 :: anchor restored to specimen value after the swap receipt
```
Raw state dumps (full stateAt JSON; every instant named by its CONFIG expression — 14 dumps; the run prints these between its checkpoint PASS lines and its swap PASS lines, and they are filed in the run's own order):
```
STATE expr=lines[0].entryMs t=800 :: {"lineIndex":0,"owner":"L0","words":[{"text":"GUMP!","env":1,"scale":1.35,"weight":850,"spoken":true,"color":"#2ee66b"}]}
STATE expr=censusAnchors.hailTwinMs t=1000 :: {"lineIndex":0,"owner":"L0","words":[{"text":"GUMP!","env":0.7290000000000001,"scale":1.25515,"weight":809.35,"spoken":true,"color":"#2ee66b"}]}
STATE expr=lines[1].words[1].onsetMs+attackMs t=1900 :: {"lineIndex":1,"owner":"L1","words":[{"text":"What's","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"your","env":1,"scale":1.5,"weight":850,"spoken":true,"color":"#2ee66b"},{"text":"sole","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"purpose","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"in","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"this","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"army?","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"}]}
STATE expr=censusAnchors.yourTwinMs t=2000 :: {"lineIndex":1,"owner":"L1","words":[{"text":"What's","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"your","env":1,"scale":1.5,"weight":850,"spoken":true,"color":"#2ee66b"},{"text":"sole","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"purpose","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"in","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"this","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"army?","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"}]}
STATE expr=lines[1].words[3].onsetMs+attackMs t=2900 :: {"lineIndex":1,"owner":"L1","words":[{"text":"What's","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"your","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"sole","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"purpose","env":1,"scale":1.5,"weight":850,"spoken":true,"color":"#2ee66b"},{"text":"in","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"this","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"army?","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"}]}
STATE expr=censusAnchors.purposeTwinMs t=3000 :: {"lineIndex":1,"owner":"L1","words":[{"text":"What's","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"your","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"sole","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"purpose","env":1,"scale":1.5,"weight":850,"spoken":true,"color":"#2ee66b"},{"text":"in","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"this","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"army?","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"}]}
STATE expr=lines[1].words[5].onsetMs+attackMs t=3500 :: {"lineIndex":1,"owner":"L1","words":[{"text":"What's","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"your","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"sole","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"purpose","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"in","env":1,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"this","env":1,"scale":1.6,"weight":850,"spoken":true,"color":"#2ee66b"},{"text":"army?","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"}]}
STATE expr=censusAnchors.questionHoldMs t=4000 :: {"lineIndex":1,"owner":"L1","words":[{"text":"What's","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"your","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"sole","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"purpose","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"in","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"this","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"army?","env":1,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"}]}
STATE expr=censusAnchors.replyPrefixMs t=5000 :: {"lineIndex":2,"owner":"L2","words":[{"text":"To","env":0.21599999999999997,"scale":1,"weight":700,"spoken":true,"color":"#f59e2d"},{"text":"do","env":0.7290000000000001,"scale":1,"weight":700,"spoken":true,"color":"#f59e2d"},{"text":"whatever","env":1,"scale":1,"weight":700,"spoken":true,"color":"#f59e2d"},{"text":"you","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"tell","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"me,","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"Drill","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"Sergeant.","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"}]}
STATE expr=lines[2].words[6].onsetMs+attackMs t=6000 :: {"lineIndex":2,"owner":"L2","words":[{"text":"To","env":0,"scale":1,"weight":700,"spoken":true,"color":"#f59e2d"},{"text":"do","env":0,"scale":1,"weight":700,"spoken":true,"color":"#f59e2d"},{"text":"whatever","env":0,"scale":1,"weight":700,"spoken":true,"color":"#f59e2d"},{"text":"you","env":0,"scale":1,"weight":700,"spoken":true,"color":"#f59e2d"},{"text":"tell","env":0.125,"scale":1,"weight":700,"spoken":true,"color":"#f59e2d"},{"text":"me,","env":0.5120000000000001,"scale":1,"weight":700,"spoken":true,"color":"#f59e2d"},{"text":"Drill","env":1,"scale":1.45,"weight":850,"spoken":true,"color":"#f59e2d"},{"text":"Sergeant.","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"}]}
STATE expr=censusAnchors.shoutPreLightMs t=7000 :: {"lineIndex":3,"owner":"L3","words":[{"text":"Goddamnit","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"},{"text":"Gump!","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"}]}
STATE expr=lines[3].words[0].onsetMs+attackMs t=7500 :: {"lineIndex":3,"owner":"L3","words":[{"text":"Goddamnit","env":1,"scale":2,"weight":880,"spoken":true,"color":"#2ee66b"},{"text":"Gump!","env":0,"scale":1,"weight":700,"spoken":false,"color":"#f2f2f2"}]}
STATE expr=lines[3].words[1].onsetMs+attackMs t=8000 :: {"lineIndex":3,"owner":"L3","words":[{"text":"Goddamnit","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"Gump!","env":1,"scale":1.5,"weight":850,"spoken":true,"color":"#2ee66b"}]}
STATE expr=GOVERNED_END_MS t=8500 :: {"lineIndex":3,"owner":"L3","words":[{"text":"Goddamnit","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"},{"text":"Gump!","env":0,"scale":1,"weight":700,"spoken":true,"color":"#2ee66b"}]}
```
Swap + rejection PASS lines (the same raw run, its final lines):
```
PASS SWAP-validator :: expr validateConfig(swap CONFIG) = {"ok":true} :: ok=true
PASS SWAP-palette :: expr lines[0].entryMs under swap (speakerAColor specimen #2ee66b -> swap #3a86ff) = 800 :: L0 color@800=#3a86ff
PASS SWAP-orders-peak :: expr lines[1].words[4].onsetMs+attackMs (swap orders) = 2900 :: orders scale=1.500
PASS SWAP-CP6-moved :: expr lines[2].words[4].onsetMs+attackMs (swap written; specimen CP6 lines[2].words[6].onsetMs+attackMs = 6000 -> swap 5400) = 5400 :: written scale=1.450 color=#f59e2d
PASS SWAP-plate-unchanged :: expr scenePlate + censusAnchors deep-equal specimen = {"hailTwinMs":1000,"yourTwinMs":2000,"purposeTwinMs":3000,"thisMs":3500,"questionHoldMs":4000,"replyPrefixMs":5000,"drillMs":6000,"shoutPreLightMs":7000,"goddamnitMs":7500,"gumpMs":8000} :: plate/anchors unchanged by the swap
PASS REJECT-negative :: expr validateConfig(negative CONFIG lines[3].words[0].onsetMs=6300) = {"ok":false,"predicate":"onsetMs < entryMs","line":3,"word":"Goddamnit"} :: CONFIG-REJECTED naming P-ENTRY, nothing animated
SUMMARY PASS=24 FAIL=0
```

### Purity grep + syntax + RNG census — raw output (final build)
```
$ grep -nE 'segment\.mp4|source\.mp4|t070|t073|t074|<video|<img|\.jpg|\.mp4' recreation.html
(no output) grep exit=1 → 0 hits
$ grep -nE 'Math\.random|seed' recreation.html
(no output) grep exit=1 → 0 hits (no RNG anywhere in the build; deterministic — seeded-RNG census: nothing to seed)
$ node --check (extracted inline scripts)
recreation.html script SYNTAX OK · comparison.html script SYNTAX OK
```
Asset inventory: zero external assets; the scene is code-drawn SVG; no specimen media, frames, or traced redraws anywhere in the build. The word "Gump!" appears only as CONFIG line TEXT (content, the technique subject — classified here, not a media reference).

### CP11 JOINED RECEIPT (cure 4 — ONE receipt: the evaluated CONFIG expression and the band sample for that state in a single block, from a single instrument run)
```
CP11-JOINED-BEGIN
CONFIG expression evaluated: lines[3].words[0].onsetMs+attackMs = 7300+200 = 7500 ms
State sampled at that instant (build stateAt): lineIndex=3 Goddamnit scale=2.000 weight=880 color=#2ee66b spoken=true ; Gump! spoken=false scale=1.000
Band sample for that state: plate #000000 @ plateOpacity 0.55 composited over each scenePlate backdrop; ceiling = CONFIG.scenePlate.plateMaxLuminance = 0.35
CP11 bg=#3a4149 band=#1a1d21 bandLum=0.0121 (ceiling 0.35) contrasts={unspokenColor: 15.11, speakerAColor: 10.19, speakerBColor: 7.90}
CP11 bg=#2b3036 band=#131618 bandLum=0.0078 (ceiling 0.35) contrasts={unspokenColor: 16.23, speakerAColor: 10.94, speakerBColor: 8.49}
CP11 bg=#1d2126 band=#0d0f11 bandLum=0.0047 (ceiling 0.35) contrasts={unspokenColor: 17.15, speakerAColor: 11.57, speakerBColor: 8.97}
CP11 bg=#454d57 band=#1f2327 bandLum=0.0164 (ceiling 0.35) contrasts={unspokenColor: 14.13, speakerAColor: 9.52, speakerBColor: 7.39}
CP11 WORST luminance=0.0164 <= 0.35 : PASS ; WORST contrast=7.39 (bg=#454d57) >= 4.5 : PASS
CP11-JOINED-END
```
This joined receipt stands under CP11 (A13.3: item-specific evidence under its own assertion). It supersedes the Wave-33 split form (Node CP11-instant in the harness + Python values in fit-table.md) as CP11's receipt; the harness CP11-instant line remains as the instant's cross-check.

### A6 legs (pre-wave, final build — re-filed this completion)
- fit-table.md: PIL-measured rows at base + every peak state, both stages, with cure-3 INTERSECTION rows. HITs carried printed: HIT-OV ×2 neighbour intersections (purpose→in 89.4% · Goddamnit→Gump! 77.0% at 360; disposition: source-true overlap form) · HIT-FLOOR quantity mismatch (Plan font-px floor passes 11.34 ≥ 11; ink-height reading ≤10.00 base per word / 11.00–16.75 peaks).
- config-census.md: **HITs 0** — every CONFIG key resolved to an application site, including the new censusAnchors table (harness-consumer site, printed in its row).

## RECEIPT INDEX (Amendment A13 — completion form)
Every line carries its executable receipt (CONFIG expression + evaluated value for CONFIG-derived inputs; raw observed result for checks) or an explicit NOT-DEMANDED line with a governing citation.

### Part A — guards.md commands applicable to this item (8 of 8 enumerated)
- **A-1 · Command 1 — construction-purity grep:** RECEIPT — grep pattern `segment\.mp4|source\.mp4|t070|t073|t074|<video|<img|\.jpg|\.mp4` on the final recreation.html → 0 hits (grep exit 1), raw output in the purity section above; asset inventory zero external assets.
- **A-2 · Command 2 — swap test:** RECEIPT — harness swap lines above: SWAP-validator ok=true · SWAP-palette L0 color at lines[0].entryMs=800 → #3a86ff (specimen #2ee66b) · SWAP-orders-peak at lines[1].words[4].onsetMs+attackMs=2900 scale 1.500 · SWAP-CP6-moved 6000→5400 via the CONFIG expression · SWAP-plate-unchanged deep-equal · REJECT-negative CONFIG-REJECTED (P-ENTRY) · swap slot geometry regenerated (fit-table.md raw swap rows: L0s 31.2 · L1s 230.7 · L2s 256.8 · L3s 113.8 px at 360, all inside the 345.6 bound). Render-proof limit printed: PIXEL-UNVERIFIED in this seat (guards.md command 2's printed limitation); comparison.html is the render surface.
- **A-3 · Command 3 — syntax + seeded-RNG census:** RECEIPT — node --check: recreation SYNTAX OK · comparison SYNTAX OK (raw above); RNG census grep `Math\.random|seed` → 0 hits (no RNG in the build; deterministic, nothing to seed).
- **A-4 · Command 4 — scores arithmetic:** NOT-DEMANDED (builder side) — guards.md command 4 + codex-scoring-wave.md assign the average/min recomputation to the SEAT from the filed lens returns before scores.md prints a verdict; no lens returns exist at payload-assembly time, so no builder receipt can exist. The seat's recomputation is the receipt when the wave fires.
- **A-5 · Command 5 — segment binding:** RECEIPT — segment.mp4 ffprobe re-verified this completion: h264 1920×1080 avg_frame_rate 24/1 + aac · duration 9.000000 · size 2086254 · SHA-256 281b795a3299f09c26b2171e630dc9d294ee09caf489aa6e2baaa20f255af694; cut plan source 66.5–75.5 s (catalogue 67–75 s ± 0.5 s handles) — matches the Wave-33 binding, unchanged.
- **A-6 · Command 6 — measured-fit leg (guard-measured-fit.md):** RECEIPT — fit-table.md re-filed on the final build (this completion): PIL rendered measurement (Liberation Sans Bold stand-in named), rows at base + all 7 peak states, both stages, positioned-bounds INTERSECTION rows (raw instrument output filed verbatim in fit-table.md and verified byte-identical to the run). HITs: HIT-OV ×2 intersections · HIT-FLOOR ×1 class — dispositions printed in fit-table.md.
- **A-7 · Command 7 — config-census leg (guard-config-census.md v3.1):** RECEIPT — config-census.md re-filed on the final build: HITs 0; every key resolved (grouped rows cover all 178 CONFIG node/leaf paths from the traversal receipt in Part C); CSS-variable setter check: no CSS variables used, no unset references.
- **A-8 · Command 8 — census-anchor probes (zero-state anchors):** RECEIPT — the zero/empty-state anchors stand at CP8 (shout pre-light: both words unspoken at censusAnchors.shoutPreLightMs=7000) and the plate-owned window [0,800) (lineIndex −1 before lines[0].entryMs=800); both are probed by the harness with raw state dumps filed above (STATE at censusAnchors.shoutPreLightMs: both words spoken=false, scale 1, color #f2f2f2; ownership partition PASS). No prescribed schedule is nonzero at a zero-state anchor.

### Part B — A11 assertions INHERITED WHOLE from the prior harness (Wave-33 build-record own-checks, 19 PASS lines + the extended 14-instant state dumps)
Inheritance rule (A13.2): the set below is the prior harness's assertion set, carried WHOLE — no assertion was re-derived, renamed away, or dropped. Additions (twin anchor receipts · twin-swap) are printed as additions, not substitutions. Every inherited assertion carries its NEW executable receipt on the final build (harness run above; SUMMARY PASS=24 FAIL=0 includes all inherited lines).
- **B-1 COUNT** (words=18) — receipt: PASS COUNT, CONFIG.lines[].words[] count = 18.
- **B-2 CP1-entry** — receipt: PASS CP1-entry, expr lines[0].entryMs = 800, scale 1.3500, color #2ee66b.
- **B-3 CP1-twin** — receipt: PASS CP1-twin, expr censusAnchors.hailTwinMs = 1000 with the amendment's cubic release expression (x=0.10, env 0.729, expected 1.2551, got 1.2551). FORM CHANGE PRINTED: the Wave-33 receipt evaluated the twin as a fixed census sample beside the equation; under cure 1 the twin instant itself is now the CONFIG expression censusAnchors.hailTwinMs — the assertion (mid-release scale in [1.22,1.42]) is unchanged.
- **B-4 CP2** — receipt: PASS CP2 (1900, your 1.500) + ADDITION B-4a CP2-twin: PASS CP2-twin, expr censusAnchors.yourTwinMs = 2000, your 1.500 (the prior harness asserted the twin state in prose; the anchor receipt is new evidence for the same dual-instant assertion, amendment §3).
- **B-5 CP3** — receipt: PASS CP3 (2900, purpose 1.500) + ADDITION B-5a CP3-twin: PASS CP3-twin, expr censusAnchors.purposeTwinMs = 3000, purpose 1.500 (same dual-instant form as B-4a).
- **B-6 CP4** — receipt: PASS CP4, expr lines[1].words[5].onsetMs+attackMs = 3500 == censusAnchors.thisMs (equality asserted), this 1.600, army? unspoken.
- **B-7 CP5** — receipt: PASS CP5, expr censusAnchors.questionHoldMs = 4000 with envelope-end expression 3950 ≤ twin; all 7 scales 1.000, all spoken (raw dump at 4000 filed).
- **B-8 CP6** — receipt: PASS CP6, expr lines[2].words[6].onsetMs+attackMs = 6000 == censusAnchors.drillMs, Drill 1.450, color #f59e2d, Sergeant. unspoken.
- **B-9 CP7** — receipt: PASS CP7, expr censusAnchors.replyPrefixMs = 5000 with CONFIG precondition expressions (words[2].onsetMs 4800 ≤ 5000 < words[3].onsetMs 5150); raw dump at 5000 filed. FORM CHANGE PRINTED as B-3 (fixed sample → CONFIG anchor expression; assertion unchanged).
- **B-10 CP8** — receipt: PASS CP8, expr censusAnchors.shoutPreLightMs = 7000 with CONFIG preconditions (entryMs 6950 ≤ 7000 < words[0].onsetMs 7300); raw dump filed. FORM CHANGE PRINTED as B-3.
- **B-11 CP9** — receipt: PASS CP9, expr lines[3].words[0].onsetMs+attackMs = 7500 == censusAnchors.goddamnitMs, scale 2.000, weight 880, Gump! unspoken.
- **B-12 CP10** — receipt: PASS CP10, expr lines[3].words[1].onsetMs+attackMs = 8000 == censusAnchors.gumpMs, Gump! 1.500, Goddamnit 1.000.
- **B-13 CP11-instant** — receipt: PASS CP11-instant, expr lines[3].words[0].onsetMs+attackMs = 7500 (same expression as CP9), bound CONFIG.scenePlate.plateMaxLuminance = 0.35.
- **B-14 CP11 band (rendered measurement, the prior filing's second CP11 leg)** — receipt: the JOINED CP11 receipt block above (cure 4): the same single run prints the evaluated expression (= 7500), the state sampled there, and the band samples — worst luminance 0.0164 ≤ 0.35 PASS, worst contrast 7.39 ≥ 4.5 PASS. FORM CHANGE PRINTED: the Wave-33 filing split this leg across two instruments (Node instant + Python band values in fit-table.md); the joined receipt replaces that split as CP11's evidence, per firing-2 cure 4. The assertion (band luminance + contrasts at CP9's instant) is unchanged.
- **B-15 OWNERSHIP** — receipt: PASS OWNERSHIP, partition plate[0,800) L0[800,1100) L1[1100,4200) L2[4200,6950) L3[6950,..), validator ok=true.
- **B-16 SWAP-palette** — receipt: PASS SWAP-palette (#2ee66b → #3a86ff at 800).
- **B-17 SWAP-orders-peak** — receipt: PASS SWAP-orders-peak (2900, scale 1.500, swapped color).
- **B-18 SWAP-CP6-moved** — receipt: PASS SWAP-CP6-moved (6000 → 5400 via lines[2].words[4].onsetMs+attackMs under the swap CONFIG).
- **B-19 SWAP-plate-unchanged** — receipt: PASS SWAP-plate-unchanged (scenePlate deep-equal; the completion harness also deep-equals censusAnchors under the swap).
- **B-20 REJECT-negative** — receipt: PASS REJECT-negative, validateConfig(negative) = {"ok":false,"predicate":"onsetMs < entryMs","line":3,"word":"Goddamnit"} (P-ENTRY, amendment §5).
- **B-21 Extended state dumps (14 instants)** — receipt: the 14 STATE lines filed above, now each named by its CONFIG expression (Wave-33 dumps were keyed by bare times; the expression naming is cure 1's form, the dumped states are the same assertions).
- **ADDITIONS (not inherited; new under the cures, printed as additions):** B-22 TWIN-SWAP-moved — PASS, censusAnchors.replyPrefixMs 5000 → 5100, CP7-analog predicates hold at the moved instant (cure 1's required twin-moving swap) · B-23 TWIN-SWAP-restored — PASS, anchor restored to 5000 after the receipt · B-24 SWAP-validator — PASS validateConfig(swap CONFIG) ok=true (the Wave-33 record asserted the swap validator in prose beside the palette receipt; it now carries its own line).

### Part C — Census receipts vs expected CONFIG keys
Traversal receipt (node, final build): CONFIG node/leaf paths = **178**. The config-census.md grouped resolution rows cover every path class: 26 top-level scalars · censusAnchors (node + 10 leaves: hailTwinMs/yourTwinMs/purposeTwinMs/thisMs/questionHoldMs/replyPrefixMs/drillMs/shoutPreLightMs/goddamnitMs/gumpMs) · scenePlate (node + gradientStops[3]×{at,color} + columns[4]×{xPct,wPct} + columnColor + columnOpacity + silhouetteLeft/Right×{xPct,wPct,hPct,color} + viewBoxW/H + rowRx/Ry/BaseXPct/BaseYPct/StepPct/RisePx/Count/SpacingPct/Color + plateMaxLuminance) · lines[4]×{speaker,entryMs,entryMode} + lines[].envelope.releaseMs (L1/L3) + lines[].words[18]×{text,onsetMs,peakScale,peakWeight}. Every grouped row's receipt is its application-site resolution in config-census.md (HITs 0). No expected key lacks a row; the founding-miss class (a nested/array key with no row, e.g. a `scenes[].id`) has no instance here — the new nested object censusAnchors.* carries its own row (Part A-7 / census table above).

### Reconciliation (builder's own check, performed BEFORE payload assembly — A13.1)
- Guard commands: guards.md applicable commands enumerated 8/8 (Part A lines A-1…A-8); 7 carry executable receipts, 1 (A-4, seat-side arithmetic) carries a NOT-DEMANDED line citing guards.md command 4 + codex-scoring-wave.md. No command omitted; no exclusion without a citation.
- Planned A11 assertions: the Plan's CP table (item record, as amended) prescribes CP1–CP11 — 11/11 present in Part B (CP1 entry+twin · CP2/CP3 dual instants · CP11 instant+band), each with a receipt on the final build.
- Prior harness inheritance: Wave-33 harness assertion lines 19/19 inherited (B-1…B-20 counting CP11's two legs separately = 20 lines for 19 PASS lines + the band leg; the 14-instant dump set B-21 inherited whole). Assertions removed: **NONE**. Form changes printed on B-3/B-9/B-10 (twin instants → CONFIG anchor expressions, cure 1) and B-14 (split CP11 → joined receipt, cure 4) — each tied to its governing cure in scores.md's cure list + plan-amendment-cycle036.md where applicable. Additions B-4a/B-5a/B-22/B-23/B-24 printed as additions.
- CONFIG keys: 178/178 paths covered by census rows (Part C); the completion's only new keys (censusAnchors.*) carry receipts in both the census and the harness.
- **RECONCILIATION RESULT: PASS** — no missing expected line, no unsupported exclusion, no receipt lacking its required evidence (CONFIG expression + evaluated value for every CONFIG-derived input; raw observed result for every check). The jev-prewave completion re-fire (A12.3-authorized, single) may be assembled on this record.
