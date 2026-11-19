# build-record — T197 volume ramp · Cycle 035 Wave 32 · attempt 1 (COMPLETION of Cycle 034 Wave 31 Phase A)

Artifact: `hidden_files/study/recreations/T197-volume-ramp/`
Technique: Packet #11 ("Caption with Intention", FCB Chicago) P11-T08 — volume ramp: size and weight track vocal emphasis. Window 48–58 s. Queue #93.
Plan authority: `runs/2026-11-18-cycle-034-wave-31/item-T197-observe-plan.md` AS AMENDED by `plan-amendment-cycle035.md` in this directory (filed before any build script, A9.2; jev-plan-exit REVISE + jev-observe-exit charges from Cycle 035 RUN.md §2b applied there). Consumed, not re-fired: `codex/codex-observe.md` (CONFIRMED-WITH-GAPS) + `codex/codex-plan-review.md` (REVISE, findings applied in the Plan + amendment).
Schedule basis: **segment-anchored** (A7). Segment 47.5–58.5 s; build t=0 ≡ source 48.0 s; comparison handle offset −500 ms as CONFIG (`segmentHandleOffsetMs`).

## Segment binding (guards.md command 5)
- Source: `hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/source.mp4` — ffprobe 113.734 s · 1920×1080 · 24 fps · 10,213,125 B (re-verified this run).
- Cut: `ffmpeg -ss 47.5 -t 11` re-encoded (libx264, yuv420p, crf 18, faststart; aac 128k) → `segment.mp4`: **11.000 s · 927,929 B · h264 1920×1080 @24fps + aac** (ffprobe, this run). Evidence only; appears solely as the labeled ORIGINAL side of comparison.html.

## Construction
One self-contained HTML file; DOM word spans on a STILL black plate (A9.1 — any background motion exceeds this technique) with CONFIG guide rules; a rAF clock evaluates each word's envelope from CONFIG (single schema per A9.6, amendment §F) and sets font-size (baseSizePctOfStage × ratio) + `font-variation-settings 'wght'` on the CONFIG variable-font stack. Spoken color flips at each word's speech `onsetMs`; the visual envelope runs on its own `envOnsetMs` (plan-review finding 3's separation). `or`+`softer` carry `envelopeRef:'shrink'` → the single canonical `sharedEnvelopes.shrink` definition (amendment §E). Line ownership: Line A release derived = max(speechEndMs 4500, lastTransientEnd 4160) + lineExitMs 350 + lineGapMs 320 = **5170 ms**, envelopes gated with clamp-and-print (amendment §C — the ONE chosen outcome). Inline spans reflow as a word grows (font-metric reflow, by construction). No external assets; NO captions/subtitles — the ramped words ARE the subject (§6.5).
Fidelity plan — deferred/named: header card (48.0) NOT BUILT (section furniture) · strip pan NOT BUILT (T195/T196 mechanics) · "animation," letter-bounce NOT BUILT (§8 ornament split) · guide rules built as the two horizontal strip rules; the source frame also shows vertical grid lines right of the strip (segment frame @55.0 s viewed this run) — not built, named here as a framing approximation · easing `easeInOut` is a labeled CONFIG choice, UNMEASURED in the specimen (register limit carried on the face).

## Count assertion (A9.3)
CONFIG word count **21** (Line A 10 + Line B 11) vs built span count **21** — MATCH (harness, raw output below). No halt.

## A11 checkpoint → assertion mapping (amended twins; CONFIG-derived instants)
All executed by the node harness over the build's own inline script (buildStateAt). Final-build results (raw in §Own-checks):
CP1 @3000 sizes, 1.3500/760 PASS · CP2 @3500 weights 1.0000/743 PASS · CP2b @7000 louder 1.0000/400 (BASE) PASS · CP3 @7500 louder 2.0000/820 PASS · CP3b @8000 or+softer 0.4500/300 (ALREADY SMALL) PASS · CP4 @8500 louder 1.0000 + softer 0.4500/300 PASS · CP5 @9500 softer 0.4500 PASS. Timing swap D3 moves CP3's instant via envOnset+rampUp (7500→5600) — executed, PASS (§Own-checks).

## 57.167 s boundary observation (jev-observe-exit charge; amendment §G)
Segment frames extracted from the cut segment and viewed firsthand this run:
- @ source 55.0 s (segment 7.5 s): Line B at base, spoken prefix yellow through "gets", "louder or softer" still white/unscaled — census CP2b state confirmed firsthand.
- @ source **57.167 s** (segment 9.667 s): the frame shows the NEXT section's header — "Character Identification" (white, first letters yellowing) on black, with a yellow bar fragment at top. **The ramp line is no longer on screen in the source at 57.167**: the source's last visible ramp state is the persisted shrink (or/softer small+light, line otherwise base), which holds from its landing (≤56.5 s) until the section change at 57.167 s replaces the line. The filed Plan's "holds through 57.5–58.0" is therefore true of the RAMP STATE (nothing resets it) but not of the line's screen presence — the header is the next section's furniture (T196/T09 surface), not a T197 state change, and is NOT BUILT (departure named).
- @ source 57.5 s (segment 10.0 s): header mid-speech ("Characte" yellow) with the next section's falling-bar animation — confirms the boundary is a section change, not a ramp event.
- Build side (evaluator, raw below): state at build 9167 / 9500 / 10000 is IDENTICAL — softer+or 0.4500 / wght 300 persisted, louder back at 1.0000/400, Line A opacity 0. The build holds the technique's end state through its core end per the persist semantics; the comparison policy (amendment §B) holds that same state under the segment's final seconds.

## Rendered-weight evidence (plan-review finding 1) — LOGIC LEVEL + LIMITATION
No browser binary exists in this seat (`which chromium/google-chrome` empty, this run), so rendered intermediate-weight frames cannot be captured. Evaluator mid-ramp `font-variation-settings` values on the build's own code (raw below): sizes, mid-ramp @2540 → wght **580** (env 0.5) · weights mid-ramp @3010 → wght **600** (env 0.5) · louder mid-ramp @7400 → wght **610** (env 0.5) · shrink mid-ramp @7730 → wght **350** (env 0.5). The evaluator produces true intermediate axis values; whether the playback stack's local fonts render them continuously depends on the stack's variable fonts (CONFIG fontStack names Roboto Flex first — the packet's demonstrated design font — with local fallbacks; no webfont is fetched, purity).
**LIMITATION (printed on the build's face here and in scores.md): PIXEL-UNVERIFIED — no browser binary in this seat; continuous weight UNVERIFIED on this stack; if the stack holds only static faces, weight renders stepped — a declared fidelity limitation, never a silent claim. Lens scores are source/logic-level; comparison.html is the render surface.**

## Own checks (§5 legs 1–3) — RAW harness output (A9.4)

### First draft — defect found + cured (raw excerpts, harness run 1)
```
== OWNERSHIP ==
Line releases: [4830,10670]
== SWAP D1: INTENTIONAL VIOLATION (clamp-and-print) ==
clamps: []
CP3 instant moved to 5170+200=5370; louder @5370: size=1.9422 sizePct=11.847 wght=796 env=0.9422 spoken=false => PASS (peak at clamped instant)
```
Defect: release computed 4830 (last-onset used as speech end) so the D1 violation (onset 5000) never crossed it and NO clamp fired — the amendment §C mechanism was inert. Cure: `speechEndMs` bound as a line-level CONFIG field (Line A 4500, Line B 8800 — the filed derivation's own numbers); releases recompute [5170, 10670]. Census cures in the same pass: comparison.html literals (−500/10000) removed — it now reads both from the recreation CONFIG; line tops + line-height moved into CONFIG (config-census.md).

### Final build — full own-check output (harness run 3, verbatim excerpts; complete output retained in the run's harness log)
```
== COUNT ASSERTION (A9.3) ==
CONFIG word count: 21
Built span count (state model): 21
Count match: MATCH
== OWNERSHIP ==
Line releases: [5170,10670]
Ownership clamps (specimen CONFIG): []
== A11 CHECKPOINTS (amended twins) ==
CP1 @3000ms sizes,: size=1.3500 sizePct=8.235 wght=760 env=1.0000 spoken=true => PASS
CP2 @3500ms weights: size=1.0000 sizePct=6.100 wght=743 env=0.8578 spoken=true => PASS
CP2b @7000ms louder: size=1.0000 sizePct=6.100 wght=400 env=0.0000 spoken=true => PASS
CP3 @7500ms louder: size=2.0000 sizePct=12.200 wght=820 env=1.0000 spoken=true => PASS
CP3b @8000ms softer: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=false => PASS
CP3b @8000ms or: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=true => PASS
CP4-louder @8500ms louder: size=1.0000 sizePct=6.100 wght=400 env=0.0000 spoken=true => PASS
CP4-softer @8500ms softer: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=true => PASS
CP5 @9500ms softer: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=true => PASS
== 57.167s BOUNDARY (build 9167) ==
@9167ms softer: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=true | or: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=true | louder: size=1.0000 sizePct=6.100 wght=400 env=0.0000 spoken=true | lineA opacity=0.000
@9500ms softer: (identical) | lineA opacity=0.000
@10000ms softer: (identical) | lineA opacity=0.000
== MID-RAMP WEIGHT EVIDENCE (evaluator font-variation values) ==
@2540ms sizes,: size=1.1750 sizePct=7.167 wght=580 env=0.5000
@3010ms weights: size=1.0000 sizePct=6.100 wght=600 env=0.5000
@7400ms louder: size=1.5000 sizePct=9.150 wght=610 env=0.5000
@7730ms softer: size=0.7250 sizePct=4.422 wght=350 env=0.5000
== SWAP D1: INTENTIONAL VIOLATION (clamp-and-print) ==
clamps: [{"word":"louder","requestedOnset":5000,"clampedOnset":5170,"releaseMs":5170}]
CP3 instant moved to 5170+200=5370; louder @5370: size=2.0000 sizePct=12.200 wght=820 env=1.0000 => PASS (peak at clamped instant)
== SWAP D3: TIMING SWAP (louder envOnset 7300->5300, rampUp 200->300) ==
clamps (must be empty): []
CP3 instant via expression envOnset+rampUp = 5600
louder @5600: size=2.0000 sizePct=12.200 wght=820 env=1.0000 => PASS
louder @7500 (old instant, must be decayed to base): size=1.0000 sizePct=6.100 wght=400 => PASS
== SWAP D2: REPLACEMENT PHRASE (complete envelope table, amendment §D2) ==
grow @1900 (peak): size=1.7000 wght=780 => PASS
grow @2300 (mid-decay p=0.5): size=1.3500 wght=590 expected size=1.3500 wght=590 => PASS
still @2800 (landed): size=0.5000 wght=300 => PASS
still @5000 (persist): size=0.5000 wght=300 => PASS
palette: spokenColor=#ff9f1c guideColor=#3a86ff (consumption sites: render color branch + guide background)
== DETERMINISM CENSUS ==
Math.random present: false | Date.now present: false
```
Harness tally: 16 PASS / 0 FAIL.

### Leg 2 — purity (guards.md command 1)
`grep -n -E "segment\.mp4|source\.mp4|<video|<img" recreation.html` → **exit 1, zero hits**. Frame-id pattern (`t050|t055|t056`) → 0. No `url(#id)` occurrences exist in this build (nothing to classify). Asset inventory: **zero external assets** — recreation.html is code only (HTML/CSS/JS); segment.mp4 is evidence, referenced ONLY by comparison.html as the labeled ORIGINAL.
### Leg 3 — comparison check
comparison.html: both sides at 360×203, labels "ORIGINAL — Caption with Intention @ 0:48–0:58" / "RECREATION — T197 volume ramp, parameterized" exactly as charged; ONE control set (Play/Pause/Restart) drives the video and slaves the recreation via `__T197.seek(buildMs())` under the amendment §B policy (offset + core read from the recreation CONFIG — no duplicated literals); phone stacking via the shared prior-wave form (max-width 380 column). Both inline scripts pass `node --check` (raw: BOTH_NODE_CHECK_PASS).
### Syntax
`node --check` on recreation.html's extracted inline script: PASS · comparison.html's: PASS.

## A6 legs (pre-wave, final build)
fit-table.md HITs **0 on the recreation's own stage; 1 carried** (comparison-surface scale parity, disposition in fit-table.md — added at the prewave cure below) · config-census.md HITs **0** (two first-draft census HITs cured pre-scoring, recorded in config-census.md).

## jev-prewave firing 1 — HOLD · ASSERTED-CHECKS (filed: jev-prewave.md) → CURED → re-fire
Dimensions: parameterization 0.9 · purity pre-check 1.0 · own-checks completeness **0.4** · fidelity-plan honesty 0.9. Findings + dispositions (all APPLIED):
1. **A11 mapping incomplete** — CP2b/CP3b/CP5 instants lacked CONFIG derivations; CP4's log showed only `softer`. Cure: `censusAnchorsMs` bound in CONFIG (the seven census twins as data); harness v2 derives every CP instant from the anchors + envelope expressions and prints the agreement checks (CP1 anchor == sizes peak expression 3000 · CP3 anchor == louder peak expression 7500 · CP4 anchor == louder decay-end 8500 · CP3b anchor ≥ shrink landing 7900 · CP5 landing < anchor < coreMs); CP4 now asserts BOTH `or` and `softer` at 8500. The CP3 timing swap re-proves the expression governs under swap (7500→5600). Raw harness-v2 output:
```
CP1 instant: CONFIG.censusAnchorsMs.sizesPeak=3000 ; expression sizes.envOnset+rampUp=3000 ; agree=true
CP1 @3000 sizes,: size=1.3500 wght=760 env=1.0000 => PASS
CP2 instant: CONFIG.censusAnchorsMs.weightsBold=3500 ; weights envelope at anchor: peak=3260 decayEnd=4160 anchor inside decay=true
CP2 @3500 weights: size=1.0000 wght=743 env=0.8578 => PASS
CP2b instant: CONFIG.censusAnchorsMs.louderBase=7000 ; louder.envOnsetMs=7300 ; anchor<envOnset=true
CP2b @7000 louder: size=1.0000 wght=400 env=0.0000 => PASS
CP3 instant: CONFIG.censusAnchorsMs.louderPeak=7500 ; expression louder.envOnset+rampUp=7500 ; agree=true
CP3 @7500 louder: size=2.0000 wght=820 env=1.0000 => PASS
CP3b instant: CONFIG.censusAnchorsMs.shrinkSmall=8000 ; shrink landing expression envOnset+rampMs=7900 ; anchor>=landing=true
CP3b @8000 or: size=0.4500 wght=300 env=1.0000 => PASS
CP3b @8000 softer: size=0.4500 wght=300 env=1.0000 => PASS
CP4 instant: CONFIG.censusAnchorsMs.shrinkLanded=8500 ; louder decay-end expression=8500 ; agree=true
CP4 @8500 louder: size=1.0000 wght=400 env=0.0000 => PASS
CP4 @8500 or: size=0.4500 wght=300 env=1.0000 => PASS
CP4 @8500 softer: size=0.4500 wght=300 env=1.0000 => PASS
CP5 instant: CONFIG.censusAnchorsMs.shrinkPersist=9500 ; shrink landing=7900 ; coreMs=10000 ; landing<anchor<core=true
CP5 @9500 softer: size=0.4500 wght=300 env=1.0000 => PASS
swapped expression instant=5600 (anchor 7500 no longer governs; expression governs under swap)
louder @5600: size=2.0000 wght=820 env=1.0000 => PASS
CONFIG words=21 built=21 match=true
releases=[5170,10670] clamps=[]
```
Full own-check suite re-run on the cured build: harness v1 16 PASS / 0 FAIL · node --check PASS.
2. **Fit result covered a different playback size** (comparison 360×203 → shrink ink ≈4.0 px). Cure: comparison-surface rows + the parity computation filed in fit-table.md; HIT carried with its disposition printed there (curing by enlargement would break size parity with the ORIGINAL — the comparison's purpose).
3. **Census inaccuracy** — the CSS `line-height:1.25` had NOT in fact been removed (JS overrode it inline). Cure: removed from the stylesheet in fact; census text corrected.
4. **Noted, recorded (not a HOLD ground):** at the 55.0 s twin the build already marks `louder` spoken (color flips at the ASR onset 6640 ≡ 54.64 s) while the source frame at 55.0 still shows it white. Priced: the ASR onset is the binding timing authority (packet + filed Plan); the frame sits inside the word's spoken span (54.64–55.76) before its visible flip. CP2b's assertion covers size/weight only, as filed. Named here as a micro-departure, not silently absorbed.

recreation.html SHA-256 (FINAL, post-cure): **42578a0d59fc2f05ace09f4fcf28b9d372b40941a047c8300bb98e70e0dca32b** (12,610 B) · comparison.html a0e283a78a145c5be7295544757c405d4379fd6e41fc69c922c40a0a82e50414 (2,016 B) · segment.mp4 899128ba75b34d8c62489bc328f0d6bc7cdf573e632adddc49ac100af39456c6 (927,929 B). (Pre-cure build 831046a4… was never scored; the wave binds the final SHA only.)

## jev-prewave RE-FIRE — HOLD · ASSERTED-CHECKS (second HOLD; filed: jev-prewave-refire.md) — ITEM STOPS HERE
Dimensions: parameterization 0.90 · purity pre-check 1.00 · own-checks completeness **0.40** · fidelity-plan honesty 0.90. The re-fire CONFIRMED the firing-1 cures (all seven A11 checkpoints reproduced incl. both CP4 shrink words and the CP3 swap 7500→5600; census cure supported at code level; hashes matched; fresh purity scan zero). The remaining HOLD ground is the fit leg: this attempt's fit rows are a character-width × 0.72-factor MODEL, and guard-measured-fit §2 counts assumed-factor rows as HITs; the wrapped block bounds were unmeasured, and the judge's overlap flag reproduces from the model itself (Line A wrapped bottom ≈387.0 px vs Line B top 358.4 px at 360×640 — fit-table.md hit-list revision, this pass). Per the item's charge (HOLD = cure + re-fire once; second HOLD = file honestly, STOP, no wave): **the five-lens scoring wave is NOT fired; no verdict is computed; the item stands IN PROGRESS.** Named cure for the next attempt: (1) post-fit rendered-geometry measurement of both wrapped blocks + words (peaks + shrink) on the final 360 px stage — needs a layout/render measurement instrument this seat lacks (no browser binary); a coefficient model is not a measurement and is not filed as one; (2) a CONFIG-priced layout cure for the portrait-stage Line A/Line B overlap region. Disposition of the verdict: APPLIED (not set aside) — the guard text is explicit and the overlap arithmetic is the build's own.

## COMPLETION — Cycle 036 Wave 33 (Amendment A12.3; cures for the jev-prewave re-fire HOLD)

Start-state verification (A8): recreation.html on disk at completion start = **12,610 B, SHA-256 42578a0d59fc2f05ace09f4fcf28b9d372b40941a047c8300bb98e70e0dca32b** — MATCHES the filed Wave-32 hash; the completion builds on the filed build, not over a mismatch.

### Cure 1 — CONFIG-priced layout cure for the portrait-stage overlap
The re-fire's overlap flag is CONFIRMED by measurement before curing (instrument below): on the pre-cure build at 360×640, Line A's measured worst block bottom = 404.28 px (top 192.0 + measured block height 212.28 at the sizes-peak instant) vs Line B top 358.4 px → **45.88 px overlap** (the judge's model estimate was 28.6 px at base state; the measured peak-state overlap is larger). Cure, through CONFIG only (subject-shaping values are CONFIG data per A9.6): two new keys — **`narrowStageAspectMax: 0.75`** and **`narrowLineTopPctOfStage: [11, 49]`** — and one layout() change: when the stage aspect W/H ≤ narrowStageAspectMax, the line tops come from narrowLineTopPctOfStage; otherwise the original lineTopPctOfStage [30, 56] governs. No other value moved: baseSizePctOfStage (the specimen's 6.1% size class), lineHeight, envelopes, and all wide-stage geometry are untouched. Post-cure measurement (fit-table.md, completion filing): at 360×640 Line A top 70.4 → worst bottom **282.68** vs Line B top **313.6** → **30.92 px clearance, NO OVERLAP at any measured instant**; Line B worst bottom 557.60 (82.40 px stage margin). At 640×360 (16:9) the wide predicate is false, the original tops govern, measured clearance 29.09 px — wide behavior unchanged in form.

### Cure 2 — fit evidence re-filed as MEASUREMENT (A12.2)
fit-table.md is re-filed whole: every Wave-32 character-width × factor MODEL row is REMOVED, and every standing row is a rendered measurement — A12.2 form (ii): PIL ImageFont rendering, stand-in font NAMED (Liberation Sans Regular; Liberation Sans Bold for state weight ≥ 600), supersample ×8, ink bounds from the rendered glyph boxes; per-word states from the cured build's own `buildStateAt`; greedy wrap from rendered advance widths in the build's 345.6 px inner box. Rows cover all 21 words at base + sizes, at PEAK (143.75 × 46.38 px) + louder at PEAK (238.75 × 57.38 px, margin 106.9) + or/softer at the persisted SHRUNK state (softer ink height 12.88 ≥ 11 floor ✓; or full ink 9.62, cap height at its fitted size 12.12 — HIT-D carried with disposition) + both wrapped blocks at four census instants + the 16:9 check + the comparison surface re-measured (HIT-C carried, parity disposition unchanged). Revised A6 fit state: HIT-A CURED · HIT-B CURED · HIT-C carried (dispositioned) · HIT-D carried (dispositioned) · 0 undispositioned.

### Fresh own-checks on the cured build — A12 EXECUTABLE RECEIPTS
Harness command (one run, this cycle): the build's inline script extracted verbatim → `node harness.js ./build-cured.js` (completion harness: the filed Wave-32 v1 assertion suite + harness-v2 A11 derivations + the completion layout assertions). Fit instrument command: `node dump-states.js ./build-cured.js 100,3000,7500,8500` → per-word states → `python3 measure.py <states> 360 640 6.1 1.25 0.02` (and the 640×360 wide run). Syntax: `node --check` on both extracted inline scripts. Purity: guards.md command 1 grep on the cured recreation.html.

| assertion | CONFIG expression evaluated | raw result (receipt) |
|---|---|---|
| COUNT (A9.3) | Σ CONFIG.lines[].words vs built spans | `CONFIG words=21 built=21 match=true` → PASS |
| OWNERSHIP | lineReleaseMs = max(speechEndMs, transientEnd) + lineExitMs 350 + lineGapMs 320, per line | `releases=[5170,10670] clamps=[]` → PASS ×2 |
| CP1 @3000 | censusAnchorsMs.sizesPeak=3000 ; sizes.envOnset+rampUp = 2080+920 = 3000 ; agree=true | `CP1@3000 sizes, :: size=1.3500 wght=760` → PASS |
| CP2 @3500 | censusAnchorsMs.weightsBold=3500 ; weights peak=3260 decayEnd=4160, anchor inside decay=true | `CP2@3500 weights :: size=1.0000 wght=743` → PASS |
| CP2b @7000 | censusAnchorsMs.louderBase=7000 < louder.envOnsetMs=7300 → true | `CP2b@7000 louder :: size=1.0000 wght=400` → PASS |
| CP3 @7500 | censusAnchorsMs.louderPeak=7500 ; louder.envOnset+rampUp = 7300+200 = 7500 ; agree=true | `CP3@7500 louder :: size=2.0000 wght=820` → PASS |
| CP3b @8000 | censusAnchorsMs.shrinkSmall=8000 ≥ shrink landing envOnset+rampMs = 7560+340 = 7900 → true | `CP3b@8000 or :: size=0.4500 wght=300` · `CP3b@8000 softer :: size=0.4500 wght=300` → PASS ×2 |
| CP4 @8500 | censusAnchorsMs.shrinkLanded=8500 ; louder decay-end = 7500+1000 = 8500 ; agree=true | `CP4@8500 louder :: size=1.0000 wght=400` · `CP4@8500 softer :: size=0.4500 wght=300` → PASS ×2 |
| CP5 @9500 | shrink landing 7900 < censusAnchorsMs.shrinkPersist=9500 < coreMs=10000 → true | `CP5@9500 softer :: size=0.4500 wght=300` → PASS |
| BOUNDARY 57.167 s | buildStateAt at 9167 / 9500 / 10000 compared field-for-field | identical states, `lineA opacity=0` → PASS |
| MID-RAMP weights | envelopeAt env=0.5 instants 2540/3010/7400/7730 | wght 580 / 600 / 610 / 350, env=0.5000 each → PASS ×4 |
| SWAP D1 (violation) | louder.envOnsetMs 7300→5000 on scratch CONFIG; clamp = Line A release 5170; instant = 5170+200 = 5370 | `D1 clamps=[{"word":"louder","requestedOnset":5000,"clampedOnset":5170,"releaseMs":5170}]` · `@5370 size=2.0000 wght=820` → PASS ×2 |
| SWAP D3 (timing) | louder envOnset 7300→5300, rampUp 200→300 on scratch CONFIG; instant via envOnset+rampUp | `D3 clamps=[] instant via envOnset+rampUp=5600` · `@5600 size=2.0000 wght=820` · `@7500 (old instant) size=1.0000 wght=400` → **the changed instant 7500→5600 is the receipt** → PASS ×3 |
| SWAP D2 (content+palette) | replacement envelope table (amendment §D2) + spokenColor→#ff9f1c, guideColor→#3a86ff | grow @1900 1.7000/780 · grow @2300 1.3500/590 · still @2800 0.5000/300 · still @5000 0.5000/300 · palette CONFIG values at the render color branch + guide background sites (census-verified) → PASS ×5 |
| LAYOUT (completion) | 360/640 = 0.5625 ≤ CONFIG.narrowStageAspectMax 0.75 → narrow tops [11, 49]; 640/360 = 1.7778 ≤ 0.75 → false → wide tops [30, 56] | `PASS LAYOUT-NARROW-SELECTED-360x640 :: tops=[11,49] -> A top 70.4px, B top 313.6px @640H` · `PASS LAYOUT-WIDE-UNCHANGED-640x360` → PASS ×2 |
| FIT (completion) | measure.py on cured-build states at 360×640, narrow tops [70.4, 313.6] | Line A worst bottom 282.68 (t=3000) vs Line B top 313.6 → clearance 30.92, no overlap; Line B worst bottom 557.60 (t=7500) → PASS (full rows: fit-table.md) |
| PURITY (leg 2) | `grep -n -E "segment\.mp4\|source\.mp4\|<video\|<img" recreation.html` (cured) | exit 1, zero hits; `Math.random` count 0 · `Date.now` count 0 → PASS |
| SYNTAX (leg 3) | `node --check` extracted inline scripts | recreation PASS · comparison PASS |
| COMPARISON (leg 3) | comparison.html unchanged this cycle (SHA a0e283a7…) — it reads coreMs + segmentHandleOffsetMs from the cured CONFIG at sync time; CONFIG keys unchanged in name/value | both sides 360×203, labels as charged, one control set → PASS (carried form, re-verified by hash + node --check) |

Harness tally on the cured build: **36 PASS / 0 FAIL** (raw output, verbatim):
```
CONFIG words=21 built=21 match=true
PASS COUNT :: 21==21
releases=[5170,10670] clamps=[]
PASS OWNERSHIP-RELEASES :: [5170,10670]
PASS OWNERSHIP-NOCLAMP-SPECIMEN :: []
PASS CP1@3000 sizes, :: size=1.3500 wght=760
PASS CP2@3500 weights :: size=1.0000 wght=743
PASS CP2b@7000 louder :: size=1.0000 wght=400
PASS CP3@7500 louder :: size=2.0000 wght=820
PASS CP3b@8000 or :: size=0.4500 wght=300
PASS CP3b@8000 softer :: size=0.4500 wght=300
PASS CP4@8500 louder :: size=1.0000 wght=400
PASS CP4@8500 softer :: size=0.4500 wght=300
PASS CP5@9500 softer :: size=0.4500 wght=300
PASS BOUNDARY-9167-9500-10000-IDENTICAL :: lineA opacity=0
PASS MIDRAMP@2540 sizes, :: wght=580 env=0.5000
PASS MIDRAMP@3010 weights :: wght=600 env=0.5000
PASS MIDRAMP@7400 louder :: wght=610 env=0.5000
PASS MIDRAMP@7730 softer :: wght=350 env=0.5000
D1 clamps=[{"word":"louder","requestedOnset":5000,"clampedOnset":5170,"releaseMs":5170}]
PASS D1-CLAMP :: {"word":"louder","requestedOnset":5000,"clampedOnset":5170,"releaseMs":5170}
PASS D1-PEAK-AT-CLAMPED-INSTANT :: @5370 size=2.0000 wght=820
D3 clamps=[] instant via envOnset+rampUp=5600
PASS D3-NOCLAMP :: []
PASS D3-INSTANT-MOVED-7500->5600 :: @5600 size=2.0000 wght=820
PASS D3-OLD-INSTANT-DECAYED :: @7500 size=1.0000 wght=400
PASS D2-GROW-PEAK@1900 :: size=1.7000 wght=780
PASS D2-GROW-MIDDECAY@2300 :: size=1.3500 wght=590
PASS D2-STILL-LANDED@2800 :: size=0.5000 wght=300
PASS D2-STILL-PERSIST@5000 :: size=0.5000 wght=300
PASS D2-PALETTE-CONFIG :: spokenColor=#ff9f1c guideColor=#3a86ff (consumption sites: render color branch + guide background, census-verified)
CP1 instant: CONFIG.censusAnchorsMs.sizesPeak=3000 ; expression sizes.envOnset+rampUp=3000 ; agree=true
PASS V2-CP1-AGREE :: 3000==3000
CP2 instant: CONFIG.censusAnchorsMs.weightsBold=3500 ; weights envelope at anchor: peak=3260 decayEnd=4160 anchor inside decay=true
PASS V2-CP2-ANCHOR-IN-DECAY :: peak=3260 decayEnd=4160
CP2b instant: CONFIG.censusAnchorsMs.louderBase=7000 ; louder.envOnsetMs=7300 ; anchor<envOnset=true
PASS V2-CP2b-ANCHOR-BEFORE-ONSET :: 7000<7300
CP3 instant: CONFIG.censusAnchorsMs.louderPeak=7500 ; expression louder.envOnset+rampUp=7500 ; agree=true
PASS V2-CP3-AGREE :: 7500==7500
CP3b instant: CONFIG.censusAnchorsMs.shrinkSmall=8000 ; shrink landing expression envOnset+rampMs=7900 ; anchor>=landing=true
PASS V2-CP3B-ANCHOR-AFTER-LANDING :: 8000>=7900
CP4 instant: CONFIG.censusAnchorsMs.shrinkLanded=8500 ; louder decay-end expression=8500 ; agree=true
PASS V2-CP4-AGREE :: 8500==8500
CP5 instant: CONFIG.censusAnchorsMs.shrinkPersist=9500 ; shrink landing=7900 ; coreMs=10000 ; landing<anchor<core=true
PASS V2-CP5-WINDOW :: 7900<9500<10000
narrow predicate: 360/640=0.5625 <= CONFIG.narrowStageAspectMax=0.75 -> true ; tops applied=[11,49]
wide predicate: 640/360=1.7778 <= 0.75 -> false ; tops applied=[30,56]
PASS LAYOUT-NARROW-SELECTED-360x640 :: tops=[11,49] -> A top 70.4px, B top 313.6px @640H
PASS LAYOUT-WIDE-UNCHANGED-640x360 :: lineTopPctOfStage=[30,56] governs 16:9
TALLY pass=36 fail=0
```
One harness-form note, printed honestly: the completion harness compares sizeRatio at 4-dp rounding (the evaluator's float arithmetic yields 0.449999… for the 0.45 shrink ratio; the Wave-32 filed values are the same numbers at 4-dp print). No assertion value changed.

### A6 legs on the cured build
fit-table.md HITs **2 carried, both dispositioned (C comparison-surface parity · D `or` full-ink) · 0 undispositioned** · config-census.md HITs **0** (re-scan section filed at its head; the two new CONFIG keys resolve to their layout() application sites).

### Hashes (completion build)
recreation.html SHA-256 (CURED, FINAL for this completion): **65b4de69d1d384601613ba93e5cc892c55693d7b1decd68b593690dcfb9f0dcf** (12,819 B) · comparison.html a0e283a78a145c5be7295544757c405d4379fd6e41fc69c922c40a0a82e50414 (2,016 B, unchanged) · segment.mp4 899128ba75b34d8c62489bc328f0d6bc7cdf573e632adddc49ac100af39456c6 (927,929 B, unchanged). The PIXEL-UNVERIFIED limitation stands as filed (no browser binary in this seat; fit evidence is the A12.2(ii) named-stand-in rendered measurement, labeled PROXY in fit-table.md).

## jev-prewave COMPLETION RE-FIRE (A12.3, Cycle 036) — HOLD · ASSERTED-CHECKS (third HOLD; filed: jev-prewave-completion.md; payload: codex/payload-prewave-completion.txt; raw: codex/prewave-completion-return.raw) — ITEM STOPS HERE, NO WAVE
Dimensions: parameterization **0.95** · purity pre-check **1.00** · own-checks completeness **0.40** · fidelity-plan honesty **0.90**. The re-fire binds the cured build 65b4de69… and CONFIRMS the layout cure's direction (census re-scan, layout receipts, purity, and all named deferrals cleared). Two findings, both APPLIED (not set aside):
1. **CP4 receipt incomplete on the cured build — a builder-side regression in this completion run, named as such.** Firing 1's cure established CP4 asserting BOTH shrink words at 8500; the Wave-32 harness-v2 log shows `CP4 @8500 or` — but the completion harness written for this cycle asserted CP4 for `louder` and `softer` only, dropping `or`. The judge's count is correct: none of the 36 PASS lines records `or` at CP4. Executed receipt, run on the cured build after the HOLD (cure evidence for the next re-fire, NOT part of what this firing judged): `CP4 @8500 or :: size=0.4500 wght=300 env=1.0000` · `CP4 @8500 softer :: size=0.4500 wght=300` · `CP4 @8500 louder :: size=1.0000 wght=400` · anchor agreement: censusAnchorsMs.shrinkLanded=8500 = louder decay-end (7300+200+1000) = 8500, shrink landing 7900 ≤ 8500. The next attempt's harness must carry the full CP4 twin set (louder + or + softer) — the assertion set is inherited whole, never re-derived from memory.
2. **Wrapped-block bounds were a layout calculation, not a placed measurement.** The judge distinguishes the word-level rows (rendered measurements, accepted) from the block rows (greedy wrap over measured advances + summed word ink, which omits word positions and intervening spaces). Cure evidence filed post-HOLD as the fit-table ADDENDUM: placed-line rendered measurement (PIL ImageDraw, words drawn at placed positions, whole-block ink bbox) — Line A worst placed ink bottom 274.40 vs Line B placed ink top 320.85 (46.45 px placed-ink clearance; 30.92 px line-box clearance stands as the conservative bound). The addendum is labeled as post-HOLD evidence; it does not retro-enter this firing's record.
Per the completion charge (ONE A12.3 re-fire; HOLD → no wave): **the five-lens scoring wave is NOT fired; no verdict is computed; the item stands IN PROGRESS.** Named cures for the next attempt: (a) the completion harness carries the full filed assertion set including CP4-`or`, with its executed receipt in the receipt table; (b) the fit table's block rows stand in the placed-line rendered form (addendum form promoted into the table proper). Both cure artifacts already exist on disk (this section + the fit-table addendum); the next re-fire judges them.
