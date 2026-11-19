OpenAI Codex v0.169.0
--------
workdir: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
model: gpt-6.2-sol
provider: openai
approval: never
sandbox: read-only
reasoning effort: none
reasoning summaries: none
session id: 01a1edd8-b6b7-75e3-8249-2b847da28119
--------
user
STANDING HEADER
Consumer: recreation INSTRUCTION section 5 leg 3b (jev-prewave gate), item T197 attempt 1, Cycle 035 Wave 32 - RE-FIRE after a HOLD cure (firing 1 returned HOLD ASSERTED-CHECKS; its findings and the cures are recorded in the build record's prewave section).
Decision priced: FIRE-WAVE (spend the five-lens Codex scoring wave on this build) or HOLD (return the build to Execute).
Working record: this artifact directory (hidden_files/study/recreations/T197-volume-ramp/) - build-record.md, recreation.html, fit-table.md, config-census.md, plan-amendment-cycle035.md.
Your return must end with a BODY-WRITE: line naming what it wrote into the body.


===== JEV-PREWAVE INSTRUCTION (guards/jev-prewave.md, full) =====
# Jev call — jev-prewave (recreation)

_Per-call definition from jev-call-template.md. Designed 2026-11-14. The judgment: a scoring wave is the lane's expensive instrument — this call prices whether a build has EARNED its wave before the wave spends._

## 1. What it judges
- Deliverable: an attempt's build record (parameter table · construction route · own-checks results) BEFORE the Codex wave fires.
- Call point: recreation INSTRUCTION §4, between the builder's own checks (§5.2) and the wave (§5.3). The verdict is advisory: applied, a HOLD returns the build to the builder with named defects and the wave does not fire on that item; set aside, the miss is recorded in Condense. An unfired call makes the cycle INCOMPLETE.

## 2. Instruction (the model's charge)
Judge whether this build record shows a recreation ready to be scored, or one whose defects are already visible in its own paperwork. Price: (1) PARAMETERIZATION — is the piece genuinely CONFIG-driven (fields named, ranges sane), or hard-coded with a config costume? (2) PURITY PRE-CHECK — does the construction route describe generation from parameters, with no tracing/embedding step hiding in the prose? (3) OWN-CHECKS COMPLETENESS — are the mechanical guards' results recorded (purity grep, swap test, syntax), or asserted? **Census-checkpoint mapping (Amendment A11, landed 2026-11-17, Cycle 028 Condense): every Observe census checkpoint for the item must map to an executable own-check assertion whose evaluation instant is CONFIG-derived; the build-record identifies checkpoint · assertion · CONFIG expression · evaluated result. ASSERTED-CHECKS is returned if any checkpoint lacks this mapping, any evaluation instant uses hardcoded defaults, or execution evidence is absent; a CONFIG timing swap must be shown to move the corresponding assertion's evaluation instant.** (4) TECHNIQUE FIDELITY PLAN — does the record state which packet mechanics the build implements and which it deliberately defers (a deferral named is lawful; a mechanic silently absent is not)? Score 0–1 per dimension, classify defects. You judge paperwork only: a build can pass you and still fail its wave — your job is that no wave is spent on a build its own record already condemns.

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

===== BUILD RECORD (build-record.md, full) =====
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

===== CONFIG BLOCK (from recreation.html, verbatim) =====
var CONFIG = {
  "baseSizePctOfStage": 6.1,
  "baseWeight": 400,
  "easingName": "easeInOut",
  "plateColor": "#000000",
  "guideColor": "#7fd4e6",
  "guideInsetPct": 8,
  "guideThicknessPx": 2,
  "guideGapPctOfStage": 34,
  "unspokenColor": "#f2f2f2",
  "spokenColor": "#ffe600",
  "fontStack": "'Roboto Flex','Inter var',system-ui,-apple-system,'Segoe UI',sans-serif",
  "minSizePctOfStage": 2.7,
  "lineExitMs": 350,
  "lineGapMs": 320,
  "endHoldMs": 1800,
  "coreMs": 10000,
  "segmentHandleOffsetMs": -500,
  "ownershipPolicy": "clamp-and-print",
  "lineTopPctOfStage": [30, 56],
  "lineHeight": 1.25,
  "censusAnchorsMs": { "sizesPeak": 3000, "weightsBold": 3500, "louderBase": 7000, "louderPeak": 7500, "shrinkSmall": 8000, "shrinkLanded": 8500, "shrinkPersist": 9500 },
  "sharedEnvelopes": {
    "shrink": { "envOnsetMs": 7560, "rampMs": 340, "sizePeak": 0.45, "weightPeak": 300, "persist": true }
  },
  "lines": [
    { "id": "lineA", "speechEndMs": 4500, "words": [
      { "text": "The", "onsetMs": 240, "envOnsetMs": 240, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "system", "onsetMs": 920, "envOnsetMs": 920, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "brings", "onsetMs": 1140, "envOnsetMs": 1140, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "in", "onsetMs": 1380, "envOnsetMs": 1380, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "varying", "onsetMs": 1540, "envOnsetMs": 1540, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "type", "onsetMs": 1780, "envOnsetMs": 1780, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "sizes,", "onsetMs": 2080, "envOnsetMs": 2080, "sizePeak": 1.35, "weightPeak": 760, "rampUpMs": 920, "rampDownMs": 900, "peakHoldMs": 0, "persist": false },
      { "text": "weights", "onsetMs": 2760, "envOnsetMs": 2760, "sizePeak": 1.0, "weightPeak": 800, "rampUpMs": 500, "rampDownMs": 900, "peakHoldMs": 0, "persist": false },
      { "text": "and", "onsetMs": 3980, "envOnsetMs": 3980, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "animation,", "onsetMs": 4140, "envOnsetMs": 4140, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false }
    ]},
    { "id": "lineB", "speechEndMs": 8800, "words": [
      { "text": "so", "onsetMs": 4820, "envOnsetMs": 4820, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "you", "onsetMs": 4920, "envOnsetMs": 4920, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "can", "onsetMs": 5040, "envOnsetMs": 5040, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "feel", "onsetMs": 5160, "envOnsetMs": 5160, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "when", "onsetMs": 5560, "envOnsetMs": 5560, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "my", "onsetMs": 5900, "envOnsetMs": 5900, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "voice", "onsetMs": 6100, "envOnsetMs": 6100, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "gets", "onsetMs": 6400, "envOnsetMs": 6400, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
      { "text": "louder", "onsetMs": 6640, "envOnsetMs": 7300, "sizePeak": 2.0, "weightPeak": 820, "rampUpMs": 200, "rampDownMs": 1000, "peakHoldMs": 0, "persist": false },
      { "text": "or", "onsetMs": 7760, "envelopeRef": "shrink" },
      { "text": "softer", "onsetMs": 8400, "envelopeRef": "shrink" }
    ]}
  ]
};
===== PACKET SECTION (Packet #11 digest, T08) =====
### T08 — Volume ramp: size and weight track vocal emphasis (48–58 s)
- **Mechanics:** the narration line "types sizes, weights and animation," sets the demo's own terms (~50 s: "sizes" stands larger and bolder than its neighbours). Then the line "so you can feel when my voice gets louder or softer" performs the mapping: the channel the film's own grid names "Font Size Range (percentage of the screen height)" (T05) is performed: "louder" grows transiently at its onset (~55.3 s, ev/t055-louder-onset.jpg, bound by the clip), and the persistent frame-verifiable end state is the shrink — at 56 s "or softer" sits visibly smaller and lighter while the line's earlier words hold full size (ev/t056-ramp-softer.jpg); at 55 s the ramp words are still white and unscaled (ev/t055-line-before-ramp.jpg). Size is a continuous-feeling ramp tied to the phrase's dynamics, not a per-word pop. Easing curve: UNMEASURED (no frame-level size series was extracted; the claim is the before/after states + the clip).
- **Why it works:** loudness becomes a spatial fact a Deaf viewer can see — the sentence about volume is itself set at two volumes.
- **Evidence:** ev/t050-types-sizes.jpg ("sizes" enlarged in its line) · ev/t055-line-before-ramp.jpg (the ramp line before its size states) · ev/t055-louder-onset.jpg ("louder" at its onset) · ev/t056-ramp-softer.jpg ("or softer" shrunk, the end state). Clip: clips/050-volume-ramp-7s.mp4 (50–57 s).


===== A6 LEG 1: fit-table.md (VERBATIM) =====
# fit-table — T197 volume ramp · Cycle 035 Wave 32 · attempt 1 (guard-measured-fit, Amendment A6)

Method: glyph-ink geometry from the build harness's character-width model (upper 0.72em · lower 0.56em · digit 0.62em · punct 0.28em) at the 360 px stage (360×640 portrait stage; basePx = 640 × baseSizePctOfStage 6.1% = 39.0 px; ink height = fontPx × 0.72 cap-height factor). The recreation lays words as inline spans in a centred, wrapping block, so the binding fit row per word is its unbreakable ink width at its LARGEST envelope state vs the 360 px container; line blocks wrap inside the container by construction (unwrapped widths printed for the record). Min-state ink height prices the persisted shrink words against the ~11 px legibility floor. Raw harness output filed in build-record.md.

| element | state | fontPx | ink w (px) | ink h (px) | container w | margin (px) | flag |
|---|---|---|---|---|---|---|---|
| The | base | 39.0 | 71.8 | 28.1 | 360 | 144.1 | |
| system | base | 39.0 | 131.2 | 28.1 | 360 | 114.4 | |
| brings | base | 39.0 | 131.2 | 28.1 | 360 | 114.4 | |
| in | base | 39.0 | 43.7 | 28.1 | 360 | 158.1 | |
| varying | base | 39.0 | 153.0 | 28.1 | 360 | 103.5 | |
| type | base | 39.0 | 87.4 | 28.1 | 360 | 136.3 | |
| sizes, | PEAK 1.35× | 52.7 | 162.3 | 37.9 | 360 | 98.8 | |
| weights | base (weight-only) | 39.0 | 153.0 | 28.1 | 360 | 103.5 | |
| and | base | 39.0 | 65.6 | 28.1 | 360 | 147.2 | |
| animation, | base | 39.0 | 207.7 | 28.1 | 360 | 76.2 | widest Line A word |
| so | base | 39.0 | 43.7 | 28.1 | 360 | 158.1 | |
| you | base | 39.0 | 65.6 | 28.1 | 360 | 147.2 | |
| can | base | 39.0 | 65.6 | 28.1 | 360 | 147.2 | |
| feel | base | 39.0 | 87.4 | 28.1 | 360 | 136.3 | |
| when | base | 39.0 | 87.4 | 28.1 | 360 | 136.3 | |
| my | base | 39.0 | 43.7 | 28.1 | 360 | 158.1 | |
| voice | base | 39.0 | 109.3 | 28.1 | 360 | 125.3 | |
| gets | base | 39.0 | 87.4 | 28.1 | 360 | 136.3 | |
| louder | PEAK 2.0× | 78.1 | 262.3 | 56.2 | 360 | 48.8 | widest element overall |
| or | SHRUNK 0.45× | 17.6 | 19.7 | 12.6 | 360 | 170.2 | min-state row |
| softer | SHRUNK 0.45× | 17.6 | 59.0 | 12.6 | 360 | 150.5 | min-state row |
| lineA block | base, unwrapped | 39.0 | 1270.4 | — | 360 | wraps | inline flow wraps inside container |
| lineB block | base, unwrapped | 39.0 | 1013.5 | — | 360 | wraps | inline flow wraps inside container |
| guide rules | — | — | 302.4 (84% of 360) | 2.0 thick | 360 | 28.8/side | guideInsetPct 8 |

Hierarchy (measured): louder peak ink height 56.2 vs base 28.1 = 2.00× ✓ (the claimed ratio, measured) · sizes, peak 37.9 vs base 28.1 = 1.35× ✓ · shrunk words 12.6 vs base 28.1 = 0.45× ✓.
Legibility floor ~11 px: smallest measured ink height is the persisted shrink state at 12.6 px — clear, by 1.6 px (the source's own 0.45× ratio; the CONFIG floor minSizePctOfStage 2.7 → ratio floor 0.4426 sits just below it, and the build's FIT-FAIL state arms if any computed size crosses it — plan-review finding 2's guard, not a ratio change).

## Comparison surface (360×203 iframe) — added at the jev-prewave HOLD cure, Cycle 035
The comparison page renders both sides at 360×203. At that stage height the same model gives: base fontPx = 203 × 6.1% = 12.4 · base ink height 8.9 px · louder peak ink 17.8 px · shrink-state ink = 203 × 0.061 × 0.45 × 0.72 ≈ **4.0 px** — below the ~11 px floor. **HIT (this surface only), carried with disposition:** the comparison iframe is a reduced-scale inspection surface, and the reduction is IDENTICAL on the original side — the source's own text at 6.1% of its 1080 px height, scaled to a 203 px-high frame, is the same ≈8.9 px base / ≈4.0 px shrink ink. The recreation matches the original's physical text size in the comparison exactly (that parity is the comparison's purpose); the legibility floor governs the recreation's own playback stage (full-viewport / 360×640 phone stage above), where every state clears it. Shrinking the comparison ratio or enlarging type only in comparison would break size parity with the ORIGINAL — the defect would be the cure. Disposition: CARRIED, priced, not cured by construction.
HITs: 1 carried (comparison-surface scale parity, disposition above) · 0 on the recreation's own stage

===== A6 LEG 2: config-census.md (VERBATIM) =====
# config-census — T197 volume ramp · Cycle 035 Wave 32 · attempt 1 (guard-config-census v3.1, Amendment A6 + A9.6)

Scan run on the FINAL recreation.html (SHA-256 42578a0d59fc2f05ace09f4fcf28b9d372b40941a047c8300bb98e70e0dca32b — re-scanned after the jev-prewave HOLD cure: CSS line-height removed in fact, censusAnchorsMs bound) + comparison.html for cross-file application sites. Reference counts are occurrences in code after the CONFIG block (seat script, this run).

## Key → application-site resolution (value-flow checked, Cycle-021 rule)
| CONFIG key | sites | flows to |
|---|---|---|
| baseSizePctOfStage | 3 | wordStateAt ratio math + render basePx |
| baseWeight | 4 | envelope weight lerp (wordStateAt) |
| easingName | 1 | EASINGS selection in envelopeAt |
| plateColor | 1 | stage background |
| guideColor | 1 | guide-rule background |
| guideInsetPct | 2 | guide left/width geometry |
| guideThicknessPx | 1 | guide height |
| guideGapPctOfStage | 2 | guide top positions |
| unspokenColor / spokenColor | 1 each | render color branch on spoken state |
| fontStack | 1 | stage fontFamily (typography as CONFIG, Cycle-013 clarification) |
| minSizePctOfStage | 1 | ratio floor + FIT-FAIL arming in wordStateAt |
| lineExitMs | 3 | release derivation + Line A fade |
| lineGapMs | 1 | release derivation |
| endHoldMs | 1 | standalone loop period |
| coreMs | 5 | persist end, comparison clamp (read cross-file by comparison.html), seek clamp |
| segmentHandleOffsetMs | cross-file | comparison.html buildMs() reads it from the recreation CONFIG via window.__T197.config — applied; NO duplicated literal in comparison.html (cured at first draft, see below) |
| ownershipPolicy | 2 | clamp branch predicate in computeOwnership/effectiveEnvOnset |
| lineTopPctOfStage[] | 1 (array-indexed) | line row tops in layout (cured at first draft, see below) |
| lineHeight | 1 | line leading in layout (cured at first draft; the CSS copy was removed in fact at the prewave cure — the stylesheet carries no line-height now) |
| censusAnchorsMs.* | harness-side | the A11 checkpoints' evaluation instants (bound at the prewave cure; the harness derives every CP instant from these anchors + envelope expressions and prints the agreement checks) |
| sharedEnvelopes.shrink.* | envOnset 9 · rampMs 1 · sizePeak 7 · weightPeak 7 · persist 6 (shared resolver refs) | resolveEnv — the SINGLE canonical shrink definition; `or`/`softer` carry envelopeRef only, no inline copies (amendment §E) |
| lines[].speechEndMs | 1 | lineReleaseMs speech-end term (bound at first-draft cure — amendment §C note) |
| lines[].words[].text/onsetMs/envOnsetMs/sizePeak/weightPeak/rampUpMs/rampDownMs/peakHoldMs/persist/envelopeRef | 1–12 each | span construction, color timing, envelope resolution |

## Literal scan outside CONFIG
- Hex colors in JS logic: NONE. In CSS: `#000` (page void outside the stage — structural, T137 precedent; the stage plate color itself reads plateColor) · `#ff5252` (FIT-FAIL diagnostic banner only — structural-diagnostic, not subject matter).
- CSS layout constants: `.line` padding `0 2vw` (container inset — structural), `line-height` REMOVED from CSS (now CONFIG lineHeight), `#fitfail` bottom 2% / 13px / monospace (diagnostic banner geometry — structural-diagnostic).
- JS numeric literals: 0 / 1 / 2 (indices, identity, clamp bounds — structural) · 100 (percent divisor — mathematical identity) · 0.5 / 2 in easing formulas (the named curves' defining constants — structural; the curve itself is CONFIG-selected by easingName) · 50 in guide-centre math (= 100/2 — structural identity).
- JS strings: easing names (EASINGS map keys, selected via CONFIG easingName — structural) · 'clamp-and-print' (the policy token the CONFIG value is compared against — structural; the value lives in CONFIG) · element ids / 'px' / 'span' / 'block'/'none' (DOM mechanics — structural).

## First-draft HITs — cured before this filing (not carried)
1. `segmentHandleOffsetMs` resolved to 0 sites in recreation.html and comparison.html carried its own −500 / 10000 literals → CURED: comparison.html now reads segmentHandleOffsetMs + coreMs from the recreation CONFIG at sync time; no fallback literals remain.
2. Line row tops (0.30 / 0.56) and line-height 1.25 stood as code/CSS literals (subject-shaping geometry per A9.6) → CURED as CONFIG keys lineTopPctOfStage + lineHeight, applied in layout.

HITs (final build): 0

warning: Codex could not find bubblewrap on PATH. Install bubblewrap with your OS package manager. See the sandbox prerequisites: https://developers.openai.com/codex/concepts/sandboxing#prerequisites. Codex will use the bundled bubblewrap in the meantime.
warning: Loaded only 32768 of 99110 bytes from `/home/hatch/AGENTS.md` in environment `local` under the 32768-byte project instruction budget. Trim your project instructions to fit the budget. If you need to keep them all, increase `project_doc_max_bytes`.
warning: Skipped project instructions in environment `local` starting at `/home/hatch/workspace/AGENTS.md` because the 32768-byte budget was exhausted. Trim your project instructions to fit the budget. If you need to keep them all, increase `project_doc_max_bytes`.
warning: Combined user instructions use 37824 bytes, above the 32768-byte `project_doc_max_bytes` setting. The total includes global and thread instructions. The limit applies only to project files.
codex
I’ll read the T197 files from disk and check the re-fire evidence against the prewave criteria.
exec
/bin/bash -lc "pwd && rg --files -g '"'!*.mp4'"' .. && ls -la" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
 succeeded in 723ms:
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
../jev-prewave.md
../build-record.md
../config-census.md
../fit-table.md
../comparison.html
../recreation.html
../plan-amendment-cycle035.md
../AGENTS.md
../codex/prewave-refire-return.raw
../codex/payload-prewave-refire.txt
../codex/prewave-return.raw
../codex/payload-prewave.txt
../codex/AGENTS.md
../codex/codex-plan-review.md
../codex/payload-plan.txt
../codex/codex-observe.md
../codex/payload-observe.txt
total 276
drwxrws--- 1 root nogroup    336 Nov 18 08:49 .
drwxrws--- 1 root nogroup    276 Nov 18 08:48 ..
-rw-rw---- 1 root nogroup   1268 Nov 18 06:27 AGENTS.md
-rw-rw---- 1 root nogroup   5405 Nov 18 05:31 codex-observe.md
-rw-rw---- 1 root nogroup   5583 Nov 18 05:34 codex-plan-review.md
-rw-rw---- 1 root nogroup   5820 Nov 18 05:28 payload-observe.txt
-rw-rw---- 1 root nogroup  10120 Nov 18 05:33 payload-plan.txt
-rw-rw---- 1 root nogroup  38099 Nov 18 08:48 payload-prewave-refire.txt
-rw-rw---- 1 root nogroup  32322 Nov 18 08:44 payload-prewave.txt
-rw-rw---- 1 root nogroup  39702 Nov 18 08:49 prewave-refire-return.raw
-rw-rw---- 1 root nogroup 123331 Nov 18 08:46 prewave-return.raw

exec
/bin/bash -lc 'nl -ba ../build-record.md; nl -ba ../fit-table.md; nl -ba ../config-census.md; sha256sum ../recreation.html ../comparison.html' in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
exec
/bin/bash -lc "cat AGENTS.md ../plan-amendment-cycle035.md; rg --files ../../.. | rg 'guards.md"'$|item-T197-observe-plan|caption-with-intention/.*'"\\.md"'$|harness.*197|197.*harness'"'" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
exec
/bin/bash -lc 'nl -ba ../recreation.html; nl -ba ../comparison.html' in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
 succeeded in 616ms:
# AGENTS.md — goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex — codex

Local working memory for `goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex` (codex). It currently holds 4 file(s) and 0 subdirectories. Representative files: `codex-observe.md`, `codex-plan-review.md`, `payload-observe.txt`, `payload-plan.txt`.

Read the AGENTS.md chain root→local before working here (tool: ~/workspace/tools/agents-chain.sh <dir>). Work here runs under named skills/standards — never improvised. Lessons learned here are written HERE, in this file. Information that proves true for sibling directories moves UP to the parent directory's AGENTS.md.

Governing skills/standards for work here:
- Study curriculum: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/CURRICULUM.md (daily craft study; every session converts to a skill/filesystem improvement or an explicit no-conversion finding)
- Global method: /home/hatch/AGENTS.md
- Nearest ancestor AGENTS.md in this tree (the chain above this directory)
- Immediate parent memory in force: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/AGENTS.md
# plan-amendment — T197 volume ramp · Cycle 035 Wave 32 (completion wave)

Filed BEFORE any build script (A9.2), per the task charge: the jev-plan-exit REVISE + jev-observe-exit charges for T197, as carried verbatim in Cycle 035 RUN.md §2b. The Cycle-034 item record (`runs/2026-11-18-cycle-034-wave-31/item-T197-observe-plan.md`) is NOT retro-edited (A8); the build executes the filed Plan AS AMENDED by this file. Where this amendment and the filed Plan conflict, this amendment governs and the conflict is printed here.

## A. Evaluation instants moved to the ACTUAL source twins (gate charge 1)

Build t=0 ≡ source 48.0 s. Census twins (build ms): sizes peak state 51.0 s → **3000** · weights bold 51.5 s → **3500** · Line B base / louder still base 55.0 s → **7000** · louder peak 55.5 s → **7500** · shared shrink ALREADY SMALL 56.0 s → **8000** · louder decayed + shrink landed 56.5 s → **8500 (CP4)** · shrink persists 57.5 s → **9500 (CP5)**.

The filed CP instants evaluated the CONFIG expressions instead of the census states (CP1 2480, CP2 3260, CP4 8560, CP5 9800) and three filed envelopes contradict the census at the twins. Cures (envelope values are CONFIG data; the evaluator semantics in §F are unchanged in form):

| Word / envelope | Filed | Amended | Reason (census) |
|---|---|---|---|
| `sizes,` rampUpMs | 400 (peak 2480 ≡ 50.48 s) | **920** (peak **3000** ≡ 51.0 s) | At the filed values the envelope is 520 ms into its 900 ms decay at the census peak instant and reads ≈1.12× where the census reads ~1.35×. Amended: env(3000)=1 exactly. Decay 900 ms retained → base at 3900 (51.9 s); census bracket: back at base by 52.0–52.5 ✓. |
| `weights` envelope | onset 2760, rampUp 500, rampDown 900 (peak 3260) | **unchanged values; assertion instant moved to the twin 3500** | At 3500 the envelope is 240 ms into decay: env = 1 − easeInOut(240/900 = 0.2667) = 1 − 0.1422 = 0.8578 → wght ≈ 743, size exactly 1.0 (weight-only) — matches census "bold at 51.5". |
| `louder` envelope | env onset = speech onset 6640, rampUp 860 (peak 7500) | **visual onset separated: `envOnsetMs` 7300, rampUpMs 200 (peak 7500)** | Filed form is 360 ms into its rise at build 7000 (source 55.0) where the census says BASE. Codex-observe G2 + packet: first visible change ≈55.3 s, peak 55.5 s. Amended: env(7000)=0 (base, wght 400) ✓ · env(7500)=1 (size 2.0, wght 820) ✓ · rampDown 1000 → base at 8500 (56.5) ✓. Speech/color onset stays 6640 (color flips at speech onset; visual envelope timing is separate — plan-review finding 3's own rule). Schema consequence: every word carries `envOnsetMs` (defaults to `onsetMs`); only `louder` and the shared shrink set it differently in the specimen CONFIG. |
| shared shrink (`or`+`softer`) | onset 7760, rampMs 700 (lands 8460) | **`envOnsetMs` 7560, rampMs 340 (lands 7900 ≡ 55.9 s)** | Filed form is 240 ms into 700 ms at build 8000 (source 56.0) where the census says ALREADY SMALL. Amended: env(8000)=1 → size 0.45, wght 300 ✓. Census bracket honoured: base at 55.5 (env(7500)=0, shrink not started) · small by 56.0–56.5 ✓. |

**CP table as amended (A11 — checkpoint · assertion · CONFIG expression → instant · expected result):**

| CP | Twin (build ms) | Assertion | CONFIG expression | Expected |
|---|---|---|---|---|
| CP1 | **3000** | sizes size ∈ [1.28, 1.42] AND wght ≥ 700 | envOnset+rampUp = 2080+920 = 3000 | size 1.35, wght 760 → PASS |
| CP2 | **3500** | weights size ∈ [0.97, 1.03] AND wght ≥ 740 | twin-anchored (source state); envelope value derived from onset 2760 + rampUp 500 + decay position | size 1.00, wght ≈743 → PASS |
| CP2b | **7000** | louder size ∈ [0.97, 1.03] AND wght ∈ [380, 420] (BASE at 55.0) | envOnset 7300 not yet reached | size 1.00, wght 400 → PASS |
| CP3 | **7500** | louder size ∈ [1.90, 2.10] AND wght ≥ 780 | envOnset+rampUp = 7300+200 = 7500 | size 2.00, wght 820 → PASS |
| CP3b | **8000** | or/softer size ∈ [0.40, 0.50] AND wght ≤ 340 (ALREADY SMALL at 56.0) | shrink envOnset+ramp = 7560+340 = 7900 ≤ 8000 | size 0.45, wght 300 → PASS |
| CP4 | **8500** | louder size ≤ 1.08 AND or/softer size ∈ [0.40, 0.50] AND wght ≤ 340 | louder decay end 7500+1000 = 8500; shrink persist | louder 1.00 · shrink 0.45/300 → PASS |
| CP5 | **9500** | softer size ∈ [0.40, 0.50] at end hold | persist envelope, t inside core | size 0.45, wght 300 → PASS |

A timing swap must move CP3's instant via the same expression (envOnset+rampUp) — see §D.

## B. Comparison policy (gate charge 2 — the 10,000 + 1,800 vs 11,000 reconciliation)

Filed numbers: recreation core 10,000 ms (source 48.0–58.0) + endHoldMs 1,800 = an 11,800 ms standalone loop; the comparison clip (segment 47.5–58.5 s) is 11,000 ms. 11,800 ≠ 11,000, so the two cannot run in sync through the clip without a policy. **Policy (binding):**

- The comparison clock is the segment's `currentTime`. Build time = clamp(videoMs + segmentHandleOffsetMs, 0, coreMs) with segmentHandleOffsetMs = −500: video 0.0–0.5 s (source 47.5–48.0, the header handle) maps to build 0 (both lines pre-visible at baseline — the source's own pre-state); video 0.5–10.5 s maps 1:1 onto build 0–10,000.
- Video 10.5–11.0 s (source 58.0–58.5): the recreation HOLDS its end state (build time clamped at 10,000; the persisted shrink state) — matching the source, whose 58.0 census frame is "the tail of the hold". No loop restart occurs inside the comparison; restart happens only via the Restart control.
- Standalone, recreation.html loops with period coreMs + endHoldMs = 11,800 ms (the end hold is a standalone-loop property; in comparison the hold is supplied by the clamp, and endHoldMs still governs how long the end state persists after core end before a standalone loop resets — printed here so the two numbers never read as a contradiction again).

## C. The `louder`-onset vs Line-A-release conflict — ONE outcome chosen (gate charge 3a)

Filed Plan prescribed both rejection and clamp-and-print for a CONFIG whose next line's first envelope onset precedes the prior line's release (Line A release = max(speechEnd 4500, lastTransientEnd 4160) + lineExitMs 350 + lineGapMs 320 = **5170 ms**), which yield different outcomes. **Chosen outcome: CLAMP-AND-PRINT.** The evaluator clamps the offending envelope's effective onset to the release instant, sets a machine-readable `ownershipClamp` record ({word, requestedOnset, clampedOnset, releaseMs}) on the build's state, and prints the clamp in the build-record. Rejection (throw/halt) is NOT used: a clamped build still demonstrates the technique, and the print makes the violation visible rather than silent. This choice is CONFIG-visible: `ownershipPolicy: 'clamp-and-print'` is a CONFIG key; the alternative string is not implemented.

## D. Swap separation + complete replacement envelope table (gate charge 3b)

The filed swap conflated two different tests. They are now separate:

**D1 — Intentional-violation test (NOT a reuse swap):** set `louder.envOnsetMs` = 5000 (< release 5170) on a scratch copy. Expected: `ownershipClamp` = {word:'louder', requestedOnset:5000, clampedOnset:5170, releaseMs:5170}; CP3's instant moves to 5170+200 = 5370 via the expression; the build still renders. This test proves the clamp; it is never presented as a content swap.

**D2 — Valid reuse swap (content + timing + palette), complete replacement envelope table.** Replacement phrase (single line, own envelope set): "watch the quiet part grow still"

| word | onsetMs | envOnsetMs | sizePeak | weightPeak | rampUpMs | rampDownMs | peakHoldMs | persist |
|---|---|---|---|---|---|---|---|---|
| watch | 0 | 0 | 1.0 | 400 | 0 | 0 | 0 | false |
| the | 300 | 300 | 1.0 | 400 | 0 | 0 | 0 | false |
| quiet | 600 | 600 | 1.0 | 400 | 0 | 0 | 0 | false |
| part | 1000 | 1000 | 1.0 | 400 | 0 | 0 | 0 | false |
| grow | 1400 | 1400 | 1.7 | 780 | 500 | 800 | 0 | false |
| still | 2400 | 2400 | 0.5 | 300 | 400 | 0 | 0 | true |

Expected outputs (evaluator, easeInOut): grow at its peak instant 1400+500 = **1900 → size 1.70, wght 780** · grow mid-decay at 2300 (p = 400/800 = 0.5 → env 0.5) → **size 1.35, wght 590** · still landed at 2400+400 = **2800 → size 0.50, wght 300**, persisting at 5000 → **0.50 / 300**. Palette leg (same scratch copy): spokenColor #ffe600 → **#ff9f1c**, guideColor #7fd4e6 → **#3a86ff**; expected: a spoken word's computed color = #ff9f1c, guide-rule background = #3a86ff (asserted at the CONFIG-consumption sites).

**D3 — Timing swap (on the specimen CONFIG, scratch copy):** louder envOnsetMs 7300 → **5300** (≥ release 5170, so NO clamp fires — this is what makes it a valid timing swap rather than the D1 violation), rampUpMs 200 → **300**. Expected: CP3 instant moves 7500 → **5600** via envOnset+rampUp; at 5600 → size 2.00, wght 820; at the old instant 7500 louder is fully decayed (decay 5600+1000 = 6600) → size 1.00.

## E. Bound defaults (gate charge 4)

- `guideInsetPct: 8` — horizontal inset of each guide rule, as % of stage width (rules are horizontal, above and below the text block; geometry is CONFIG data per A9.6). Companion key bound in the same act: `guideThicknessPx: 2`, `guideGapPctOfStage: 34` (rule offset from stage centre, % of stage height).
- `fontStack: "'Roboto Flex','Inter var',system-ui,-apple-system,'Segoe UI',sans-serif"` — Roboto Flex is named first because the packet demonstrates it as the system's own design font (digest §3 T05/T08; register limit: mechanism DEMONSTRATED as stated design). **No webfont is fetched** (purity: zero external assets); the stack resolves to whatever variable font the playback stack holds locally, else its static faces — see §G.
- Canonical reference to the shared shrink envelope (gate charge 5): CONFIG carries `sharedEnvelopes: { shrink: { envOnsetMs: 7560, rampMs: 340, sizePeak: 0.45, weightPeak: 300, persist: true } }` as the SINGLE definition. The words `or` and `softer` carry `envelopeRef: 'shrink'` and NO inline envelope peaks; the evaluator resolves the reference. Any other form (duplicated inline copies) is a census HIT by construction. In the per-word schema, a referenced word's own ramp fields are absent, not duplicated.

**Release derivation source (clarified at Execute, own-check catch):** the release formula's speech-end term is a line-level CONFIG field `speechEndMs` (Line A 4500 ≡ source 52.50 speech end; Line B 8800 ≡ 56.80), NOT the last word's onset — the filed derivation "max(speechEnd 4500, …)" prices the ASR segment end. First-draft harness computed releases [4830, …] from last-onset and the D1 clamp test exposed it (no clamp fired at onset 5000); cured by binding `speechEndMs` as CONFIG data, releases recompute to [5170, 10670]. Recorded in build-record as the first-draft defect + cure (A9.4 raw outputs filed for both drafts).

## F. Evaluator semantics (as amended — one schema, A9.6)

Per word: `{text, onsetMs, envOnsetMs, sizePeak, weightPeak, rampUpMs, rampDownMs, peakHoldMs, persist}` or `{text, onsetMs, envelopeRef}`. env(t): 0 before envOnset · easeInOut ramp over rampUpMs · 1 through peakHoldMs · if persist, 1 until loop end · else 1 − easeInOut over rampDownMs · 0 after. For a referenced envelope, rampUpMs := the shared `rampMs` and there is no decay (persist). sizeRatio = 1 + (sizePeak − 1)·env, floored at minSizePctOfStage / baseSizePctOfStage = 2.7/6.1 ≈ 0.4426 (softer's 0.45 clears the floor: 6.1 × 0.45 = 2.745 ≥ 2.7 ✓); a computed size below minSizePctOfStage raises the visible FIT-FAIL state (plan-review finding 2). wght = baseWeight + (weightPeak − baseWeight)·env, applied as `font-variation-settings 'wght'`. Spoken color flips at `onsetMs` (speech), independent of `envOnsetMs` (visual). Line A fades out over lineExitMs starting at the derived release (5170); envelopes only are gated by ownership (Line B speech onsets are segment-anchored and unmoved — filed Plan disposition stands).

## G. 57.167 s boundary + weight-evidence charges (jev-observe-exit, applied)

- T196's record (Cycle-034 item-T196 §1) shows the next section header ("Character Identification") first appearing at source **57.167 s** = build **9167 ms**, inside T197's claimed hold through 57.5–58.0. Execute must play/evaluate across that boundary and record the last visible ramp state in build-record: the expected state at 9167, 9500 and 10000 is IDENTICAL (shrink persisted: or/softer 0.45× / wght 300, all other words base, Line A exited) — the header is the next section's furniture (T196/T09's surface), not a T197 state change; the build neither builds it nor lets it disturb the hold. Segment-frame evidence at the boundary is filed in build-record.
- Continuous weight is claimed ONLY with rendered intermediate-weight evidence from the actual playback stack (plan-review finding 1). If the seat's stack offers no browser render, the build-record files the evaluator's mid-ramp `font-variation-settings` values as logic-level evidence and the limitation prints on the build's face (build-record + scores.md): continuous weight UNVERIFIED on this stack; static/stepped fallback = declared limitation, never a silent claim.

Filed: Cycle 035 Wave 32, before Execute (A9.2 satisfied for this item by this filing).
../../../video-digests/2026-11-17-lia-caption-with-intention/production-record.md
../../../video-digests/2026-11-17-lia-caption-with-intention/digest.md
../../../video-digests/2026-11-17-lia-caption-with-intention/AGENTS.md
../../../video-digests/2026-11-17-lia-caption-with-intention/clips/AGENTS.md
../../../video-digests/2026-11-17-lia-caption-with-intention/ev/AGENTS.md
../../../video-digests/2026-11-17-lia-caption-with-intention/frames/AGENTS.md

 succeeded in 689ms:
     1	<!DOCTYPE html>
     2	<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
     3	<title>T197 volume ramp — recreation</title>
     4	<style>
     5	html,body{margin:0;padding:0;background:#000;overflow:hidden}
     6	#stage{position:relative;width:100vw;height:100vh;overflow:hidden}
     7	.guide{position:absolute;pointer-events:none}
     8	.line{position:absolute;left:0;right:0;text-align:center;white-space:normal;padding:0 2vw}
     9	.word{display:inline-block;white-space:nowrap}
    10	#fitfail{position:absolute;left:0;right:0;bottom:2%;text-align:center;color:#ff5252;font-family:monospace;font-size:13px;display:none}
    11	</style></head><body>
    12	<div id="stage">
    13	<div class="guide" id="guideTop"></div>
    14	<div class="guide" id="guideBottom"></div>
    15	<div class="line" id="lineA"></div>
    16	<div class="line" id="lineB"></div>
    17	<div id="fitfail">FIT-FAIL</div>
    18	</div>
    19	<script>
    20	var CONFIG = {
    21	  "baseSizePctOfStage": 6.1,
    22	  "baseWeight": 400,
    23	  "easingName": "easeInOut",
    24	  "plateColor": "#000000",
    25	  "guideColor": "#7fd4e6",
    26	  "guideInsetPct": 8,
    27	  "guideThicknessPx": 2,
    28	  "guideGapPctOfStage": 34,
    29	  "unspokenColor": "#f2f2f2",
    30	  "spokenColor": "#ffe600",
    31	  "fontStack": "'Roboto Flex','Inter var',system-ui,-apple-system,'Segoe UI',sans-serif",
    32	  "minSizePctOfStage": 2.7,
    33	  "lineExitMs": 350,
    34	  "lineGapMs": 320,
    35	  "endHoldMs": 1800,
    36	  "coreMs": 10000,
    37	  "segmentHandleOffsetMs": -500,
    38	  "ownershipPolicy": "clamp-and-print",
    39	  "lineTopPctOfStage": [30, 56],
    40	  "lineHeight": 1.25,
    41	  "censusAnchorsMs": { "sizesPeak": 3000, "weightsBold": 3500, "louderBase": 7000, "louderPeak": 7500, "shrinkSmall": 8000, "shrinkLanded": 8500, "shrinkPersist": 9500 },
    42	  "sharedEnvelopes": {
    43	    "shrink": { "envOnsetMs": 7560, "rampMs": 340, "sizePeak": 0.45, "weightPeak": 300, "persist": true }
    44	  },
    45	  "lines": [
    46	    { "id": "lineA", "speechEndMs": 4500, "words": [
    47	      { "text": "The", "onsetMs": 240, "envOnsetMs": 240, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    48	      { "text": "system", "onsetMs": 920, "envOnsetMs": 920, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    49	      { "text": "brings", "onsetMs": 1140, "envOnsetMs": 1140, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    50	      { "text": "in", "onsetMs": 1380, "envOnsetMs": 1380, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    51	      { "text": "varying", "onsetMs": 1540, "envOnsetMs": 1540, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    52	      { "text": "type", "onsetMs": 1780, "envOnsetMs": 1780, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    53	      { "text": "sizes,", "onsetMs": 2080, "envOnsetMs": 2080, "sizePeak": 1.35, "weightPeak": 760, "rampUpMs": 920, "rampDownMs": 900, "peakHoldMs": 0, "persist": false },
    54	      { "text": "weights", "onsetMs": 2760, "envOnsetMs": 2760, "sizePeak": 1.0, "weightPeak": 800, "rampUpMs": 500, "rampDownMs": 900, "peakHoldMs": 0, "persist": false },
    55	      { "text": "and", "onsetMs": 3980, "envOnsetMs": 3980, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    56	      { "text": "animation,", "onsetMs": 4140, "envOnsetMs": 4140, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false }
    57	    ]},
    58	    { "id": "lineB", "speechEndMs": 8800, "words": [
    59	      { "text": "so", "onsetMs": 4820, "envOnsetMs": 4820, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    60	      { "text": "you", "onsetMs": 4920, "envOnsetMs": 4920, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    61	      { "text": "can", "onsetMs": 5040, "envOnsetMs": 5040, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    62	      { "text": "feel", "onsetMs": 5160, "envOnsetMs": 5160, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    63	      { "text": "when", "onsetMs": 5560, "envOnsetMs": 5560, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    64	      { "text": "my", "onsetMs": 5900, "envOnsetMs": 5900, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    65	      { "text": "voice", "onsetMs": 6100, "envOnsetMs": 6100, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    66	      { "text": "gets", "onsetMs": 6400, "envOnsetMs": 6400, "sizePeak": 1.0, "weightPeak": 400, "rampUpMs": 0, "rampDownMs": 0, "peakHoldMs": 0, "persist": false },
    67	      { "text": "louder", "onsetMs": 6640, "envOnsetMs": 7300, "sizePeak": 2.0, "weightPeak": 820, "rampUpMs": 200, "rampDownMs": 1000, "peakHoldMs": 0, "persist": false },
    68	      { "text": "or", "onsetMs": 7760, "envelopeRef": "shrink" },
    69	      { "text": "softer", "onsetMs": 8400, "envelopeRef": "shrink" }
    70	    ]}
    71	  ]
    72	};
    73	var EASINGS = {
    74	  "easeInOut": function(p){ return p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2)/2; },
    75	  "linear": function(p){ return p; },
    76	  "easeOut": function(p){ return 1 - Math.pow(1 - p, 3); },
    77	  "easeIn": function(p){ return p*p*p; }
    78	};
    79	function resolveEnv(cfg, w){
    80	  if (w.envelopeRef) {
    81	    var s = cfg.sharedEnvelopes[w.envelopeRef];
    82	    return { envOnsetMs: s.envOnsetMs, rampUpMs: s.rampMs, rampDownMs: 0, peakHoldMs: 0, sizePeak: s.sizePeak, weightPeak: s.weightPeak, persist: !!s.persist };
    83	  }
    84	  return { envOnsetMs: w.envOnsetMs, rampUpMs: w.rampUpMs, rampDownMs: w.rampDownMs, peakHoldMs: w.peakHoldMs || 0, sizePeak: w.sizePeak, weightPeak: w.weightPeak, persist: !!w.persist };
    85	}
    86	function lineReleaseMs(cfg, line){
    87	  var speechEnd = line.speechEndMs || 0, transientEnd = 0, i, w, e;
    88	  for (i = 0; i < line.words.length; i++) {
    89	    w = line.words[i]; e = resolveEnv(cfg, w);
    90	    var end = e.persist ? cfg.coreMs : e.envOnsetMs + e.rampUpMs + e.peakHoldMs + e.rampDownMs;
    91	    if ((e.sizePeak !== 1.0 || e.weightPeak !== cfg.baseWeight) && end > transientEnd) transientEnd = end;
    92	  }
    93	  return Math.max(speechEnd, transientEnd) + cfg.lineExitMs + cfg.lineGapMs;
    94	}
    95	function computeOwnership(cfg){
    96	  var clamps = [], releases = [], prevRelease = 0, li, wi;
    97	  for (li = 0; li < cfg.lines.length; li++) {
    98	    var line = cfg.lines[li], rel = lineReleaseMs(cfg, line);
    99	    releases.push(rel);
   100	    if (li > 0) {
   101	      for (wi = 0; wi < line.words.length; wi++) {
   102	        var w = line.words[wi], e = resolveEnv(cfg, w);
   103	        if ((e.sizePeak !== 1.0 || e.weightPeak !== cfg.baseWeight) && e.envOnsetMs < prevRelease && cfg.ownershipPolicy === "clamp-and-print") {
   104	          clamps.push({ word: w.text, requestedOnset: e.envOnsetMs, clampedOnset: prevRelease, releaseMs: prevRelease });
   105	        }
   106	      }
   107	    }
   108	    prevRelease = rel;
   109	  }
   110	  return { releases: releases, clamps: clamps };
   111	}
   112	function effectiveEnvOnset(cfg, ownership, lineIdx, w){
   113	  var e = resolveEnv(cfg, w), onset = e.envOnsetMs;
   114	  if (lineIdx > 0 && cfg.ownershipPolicy === "clamp-and-print") {
   115	    for (var i = 0; i < ownership.clamps.length; i++) {
   116	      if (ownership.clamps[i].word === w.text && ownership.clamps[i].requestedOnset === e.envOnsetMs) onset = ownership.clamps[i].clampedOnset;
   117	    }
   118	  }
   119	  return onset;
   120	}
   121	function envelopeAt(cfg, e, onset, t){
   122	  var ease = EASINGS[cfg.easingName] || EASINGS.easeInOut;
   123	  if (t < onset) return 0;
   124	  var peakAt = onset + e.rampUpMs;
   125	  if (t < peakAt) return e.rampUpMs > 0 ? ease((t - onset)/e.rampUpMs) : 1;
   126	  if (t < peakAt + e.peakHoldMs) return 1;
   127	  if (e.persist) return 1;
   128	  var decayStart = peakAt + e.peakHoldMs;
   129	  if (t < decayStart + e.rampDownMs) return e.rampDownMs > 0 ? 1 - ease((t - decayStart)/e.rampDownMs) : 0;
   130	  return 0;
   131	}
   132	function wordStateAt(cfg, ownership, lineIdx, w, t){
   133	  var e = resolveEnv(cfg, w);
   134	  var onset = effectiveEnvOnset(cfg, ownership, lineIdx, w);
   135	  var env = envelopeAt(cfg, e, onset, t);
   136	  var minRatio = cfg.minSizePctOfStage / cfg.baseSizePctOfStage;
   137	  var ratio = 1 + (e.sizePeak - 1) * env;
   138	  var fitFail = false;
   139	  if (ratio < minRatio) { ratio = minRatio; fitFail = true; }
   140	  return {
   141	    env: env,
   142	    sizeRatio: ratio,
   143	    sizePctOfStage: cfg.baseSizePctOfStage * ratio,
   144	    weight: Math.round(cfg.baseWeight + (e.weightPeak - cfg.baseWeight) * env),
   145	    spoken: t >= w.onsetMs,
   146	    fitFail: fitFail
   147	  };
   148	}
   149	function buildStateAt(cfg, t){
   150	  var ownership = computeOwnership(cfg);
   151	  var out = { t: t, ownership: ownership, lines: [], fitFail: false };
   152	  for (var li = 0; li < cfg.lines.length; li++) {
   153	    var line = cfg.lines[li], lo = { id: line.id, opacity: 1, words: [] };
   154	    if (li < cfg.lines.length - 1) {
   155	      var rel = ownership.releases[li];
   156	      if (t >= rel + cfg.lineExitMs) lo.opacity = 0;
   157	      else if (t >= rel) lo.opacity = 1 - (t - rel)/cfg.lineExitMs;
   158	    }
   159	    for (var wi = 0; wi < line.words.length; wi++) {
   160	      var st = wordStateAt(cfg, ownership, li, line.words[wi], t);
   161	      if (st.fitFail) out.fitFail = true;
   162	      lo.words.push({ text: line.words[wi].text, env: st.env, sizeRatio: st.sizeRatio, sizePctOfStage: st.sizePctOfStage, weight: st.weight, spoken: st.spoken });
   163	    }
   164	    out.lines.push(lo);
   165	  }
   166	  return out;
   167	}
   168	if (typeof module !== "undefined" && module.exports) {
   169	  module.exports = { CONFIG: CONFIG, EASINGS: EASINGS, resolveEnv: resolveEnv, lineReleaseMs: lineReleaseMs, computeOwnership: computeOwnership, envelopeAt: envelopeAt, wordStateAt: wordStateAt, buildStateAt: buildStateAt };
   170	}
   171	if (typeof document !== "undefined") {
   172	  var stage = document.getElementById("stage");
   173	  stage.style.background = CONFIG.plateColor;
   174	  stage.style.fontFamily = CONFIG.fontStack;
   175	  var ownership0 = computeOwnership(CONFIG);
   176	  if (ownership0.clamps.length) { try { console.log("OWNERSHIP-CLAMP " + JSON.stringify(ownership0.clamps)); } catch (e) {} }
   177	  var guides = [document.getElementById("guideTop"), document.getElementById("guideBottom")];
   178	  var spans = [];
   179	  function layout(){
   180	    var H = stage.clientHeight, W = stage.clientWidth;
   181	    guides.forEach(function(g, i){
   182	      g.style.left = (W * CONFIG.guideInsetPct/100) + "px";
   183	      g.style.width = (W * (1 - 2 * CONFIG.guideInsetPct/100)) + "px";
   184	      g.style.height = CONFIG.guideThicknessPx + "px";
   185	      g.style.background = CONFIG.guideColor;
   186	      g.style.top = (H * (i === 0 ? (50 - CONFIG.guideGapPctOfStage/2)/100 : (50 + CONFIG.guideGapPctOfStage/2)/100)) + "px";
   187	    });
   188	    CONFIG.lines.forEach(function(line, li){
   189	      var el = document.getElementById(line.id);
   190	      el.style.top = (H * CONFIG.lineTopPctOfStage[li]/100) + "px";
   191	      el.style.lineHeight = CONFIG.lineHeight;
   192	    });
   193	    return H;
   194	  }
   195	  CONFIG.lines.forEach(function(line, li){
   196	    var el = document.getElementById(line.id), arr = [];
   197	    line.words.forEach(function(w, wi){
   198	      var s = document.createElement("span");
   199	      s.className = "word"; s.textContent = w.text;
   200	      el.appendChild(s);
   201	      if (wi < line.words.length - 1) el.appendChild(document.createTextNode(" "));
   202	      arr.push(s);
   203	    });
   204	    spans.push(arr);
   205	  });
   206	  var startStamp = null, externalMs = null;
   207	  function render(now){
   208	    var H = layout();
   209	    var loopMs = CONFIG.coreMs + CONFIG.endHoldMs;
   210	    var t;
   211	    if (externalMs !== null && externalMs !== undefined) t = Math.max(0, Math.min(CONFIG.coreMs, externalMs));
   212	    else {
   213	      if (startStamp === null) startStamp = now;
   214	      t = (now - startStamp) % loopMs;
   215	      if (t > CONFIG.coreMs) t = CONFIG.coreMs;
   216	    }
   217	    var state = buildStateAt(CONFIG, t), anyFitFail = state.fitFail;
   218	    state.lines.forEach(function(lo, li){
   219	      document.getElementById(lo.id).style.opacity = lo.opacity;
   220	      lo.words.forEach(function(ws, wi){
   221	        var s = spans[li][wi], basePx = H * CONFIG.baseSizePctOfStage/100;
   222	        s.style.fontSize = (basePx * ws.sizeRatio) + "px";
   223	        s.style.fontVariationSettings = "'wght' " + ws.weight;
   224	        s.style.fontWeight = ws.weight;
   225	        s.style.color = ws.spoken ? CONFIG.spokenColor : CONFIG.unspokenColor;
   226	      });
   227	    });
   228	    document.getElementById("fitfail").style.display = anyFitFail ? "block" : "none";
   229	    requestAnimationFrame(render);
   230	  }
   231	  requestAnimationFrame(render);
   232	  window.__T197 = { seek: function(ms){ externalMs = ms; }, config: CONFIG, stateAt: function(ms){ return buildStateAt(CONFIG, ms); } };
   233	}
   234	</script>
   235	</body></html>
     1	<!DOCTYPE html>
     2	<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
     3	<title>T197 comparison</title>
     4	<style>body{background:#111;color:#fff;font-family:Arial,sans-serif;margin:0;padding:12px}.wrap{max-width:380px;margin:0 auto;display:flex;flex-direction:column;gap:10px}video,iframe{width:360px;height:203px;border:0;background:#000}.lab{font-size:13px;font-weight:700}button{padding:10px 14px;font-size:14px}</style></head><body>
     5	<div class="wrap">
     6	<div class="lab">ORIGINAL — Caption with Intention @ 0:48–0:58</div>
     7	<video id="v" src="segment.mp4" playsinline></video>
     8	<div class="lab">RECREATION — T197 volume ramp, parameterized</div>
     9	<iframe id="r" src="recreation.html" title="recreation"></iframe>
    10	<div><button id="play">Play</button> <button id="pause">Pause</button> <button id="restart">Restart</button></div>
    11	</div>
    12	<script>
    13	// Comparison policy (plan-amendment-cycle035.md §B): build time = clamp(videoMs + segmentHandleOffsetMs, 0, coreMs),
    14	// with both values read from the recreation's own CONFIG (window.__T197.config) — no duplicated literals here.
    15	// Video 0.0-0.5 s (header handle) holds build 0; video 10.5-11.0 s holds the recreation end state; no mid-comparison loop restart.
    16	const v=document.getElementById('v'),r=document.getElementById('r');
    17	function recCfg(){ try{const w=r.contentWindow;if(w&&w.__T197)return w.__T197.config;}catch(e){} return null; }
    18	function buildMs(){ const c=recCfg(); if(!c) return null; return Math.max(0, Math.min(c.coreMs, v.currentTime*1000 + c.segmentHandleOffsetMs)); }
    19	function sync(){try{const w=r.contentWindow,b=buildMs();if(w&&w.__T197&&b!==null)w.__T197.seek(b);}catch(e){}}
    20	v.addEventListener('timeupdate',sync);
    21	v.addEventListener('seeked',sync);
    22	document.getElementById('play').onclick=()=>{v.play();sync();};
    23	document.getElementById('pause').onclick=()=>{v.pause();sync();};
    24	document.getElementById('restart').onclick=()=>{v.currentTime=0;v.play();sync();};
    25	</script></body></html>

 succeeded in 805ms:
     1	# build-record — T197 volume ramp · Cycle 035 Wave 32 · attempt 1 (COMPLETION of Cycle 034 Wave 31 Phase A)
     2	
     3	Artifact: `hidden_files/study/recreations/T197-volume-ramp/`
     4	Technique: Packet #11 ("Caption with Intention", FCB Chicago) P11-T08 — volume ramp: size and weight track vocal emphasis. Window 48–58 s. Queue #93.
     5	Plan authority: `runs/2026-11-18-cycle-034-wave-31/item-T197-observe-plan.md` AS AMENDED by `plan-amendment-cycle035.md` in this directory (filed before any build script, A9.2; jev-plan-exit REVISE + jev-observe-exit charges from Cycle 035 RUN.md §2b applied there). Consumed, not re-fired: `codex/codex-observe.md` (CONFIRMED-WITH-GAPS) + `codex/codex-plan-review.md` (REVISE, findings applied in the Plan + amendment).
     6	Schedule basis: **segment-anchored** (A7). Segment 47.5–58.5 s; build t=0 ≡ source 48.0 s; comparison handle offset −500 ms as CONFIG (`segmentHandleOffsetMs`).
     7	
     8	## Segment binding (guards.md command 5)
     9	- Source: `hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/source.mp4` — ffprobe 113.734 s · 1920×1080 · 24 fps · 10,213,125 B (re-verified this run).
    10	- Cut: `ffmpeg -ss 47.5 -t 11` re-encoded (libx264, yuv420p, crf 18, faststart; aac 128k) → `segment.mp4`: **11.000 s · 927,929 B · h264 1920×1080 @24fps + aac** (ffprobe, this run). Evidence only; appears solely as the labeled ORIGINAL side of comparison.html.
    11	
    12	## Construction
    13	One self-contained HTML file; DOM word spans on a STILL black plate (A9.1 — any background motion exceeds this technique) with CONFIG guide rules; a rAF clock evaluates each word's envelope from CONFIG (single schema per A9.6, amendment §F) and sets font-size (baseSizePctOfStage × ratio) + `font-variation-settings 'wght'` on the CONFIG variable-font stack. Spoken color flips at each word's speech `onsetMs`; the visual envelope runs on its own `envOnsetMs` (plan-review finding 3's separation). `or`+`softer` carry `envelopeRef:'shrink'` → the single canonical `sharedEnvelopes.shrink` definition (amendment §E). Line ownership: Line A release derived = max(speechEndMs 4500, lastTransientEnd 4160) + lineExitMs 350 + lineGapMs 320 = **5170 ms**, envelopes gated with clamp-and-print (amendment §C — the ONE chosen outcome). Inline spans reflow as a word grows (font-metric reflow, by construction). No external assets; NO captions/subtitles — the ramped words ARE the subject (§6.5).
    14	Fidelity plan — deferred/named: header card (48.0) NOT BUILT (section furniture) · strip pan NOT BUILT (T195/T196 mechanics) · "animation," letter-bounce NOT BUILT (§8 ornament split) · guide rules built as the two horizontal strip rules; the source frame also shows vertical grid lines right of the strip (segment frame @55.0 s viewed this run) — not built, named here as a framing approximation · easing `easeInOut` is a labeled CONFIG choice, UNMEASURED in the specimen (register limit carried on the face).
    15	
    16	## Count assertion (A9.3)
    17	CONFIG word count **21** (Line A 10 + Line B 11) vs built span count **21** — MATCH (harness, raw output below). No halt.
    18	
    19	## A11 checkpoint → assertion mapping (amended twins; CONFIG-derived instants)
    20	All executed by the node harness over the build's own inline script (buildStateAt). Final-build results (raw in §Own-checks):
    21	CP1 @3000 sizes, 1.3500/760 PASS · CP2 @3500 weights 1.0000/743 PASS · CP2b @7000 louder 1.0000/400 (BASE) PASS · CP3 @7500 louder 2.0000/820 PASS · CP3b @8000 or+softer 0.4500/300 (ALREADY SMALL) PASS · CP4 @8500 louder 1.0000 + softer 0.4500/300 PASS · CP5 @9500 softer 0.4500 PASS. Timing swap D3 moves CP3's instant via envOnset+rampUp (7500→5600) — executed, PASS (§Own-checks).
    22	
    23	## 57.167 s boundary observation (jev-observe-exit charge; amendment §G)
    24	Segment frames extracted from the cut segment and viewed firsthand this run:
    25	- @ source 55.0 s (segment 7.5 s): Line B at base, spoken prefix yellow through "gets", "louder or softer" still white/unscaled — census CP2b state confirmed firsthand.
    26	- @ source **57.167 s** (segment 9.667 s): the frame shows the NEXT section's header — "Character Identification" (white, first letters yellowing) on black, with a yellow bar fragment at top. **The ramp line is no longer on screen in the source at 57.167**: the source's last visible ramp state is the persisted shrink (or/softer small+light, line otherwise base), which holds from its landing (≤56.5 s) until the section change at 57.167 s replaces the line. The filed Plan's "holds through 57.5–58.0" is therefore true of the RAMP STATE (nothing resets it) but not of the line's screen presence — the header is the next section's furniture (T196/T09 surface), not a T197 state change, and is NOT BUILT (departure named).
    27	- @ source 57.5 s (segment 10.0 s): header mid-speech ("Characte" yellow) with the next section's falling-bar animation — confirms the boundary is a section change, not a ramp event.
    28	- Build side (evaluator, raw below): state at build 9167 / 9500 / 10000 is IDENTICAL — softer+or 0.4500 / wght 300 persisted, louder back at 1.0000/400, Line A opacity 0. The build holds the technique's end state through its core end per the persist semantics; the comparison policy (amendment §B) holds that same state under the segment's final seconds.
    29	
    30	## Rendered-weight evidence (plan-review finding 1) — LOGIC LEVEL + LIMITATION
    31	No browser binary exists in this seat (`which chromium/google-chrome` empty, this run), so rendered intermediate-weight frames cannot be captured. Evaluator mid-ramp `font-variation-settings` values on the build's own code (raw below): sizes, mid-ramp @2540 → wght **580** (env 0.5) · weights mid-ramp @3010 → wght **600** (env 0.5) · louder mid-ramp @7400 → wght **610** (env 0.5) · shrink mid-ramp @7730 → wght **350** (env 0.5). The evaluator produces true intermediate axis values; whether the playback stack's local fonts render them continuously depends on the stack's variable fonts (CONFIG fontStack names Roboto Flex first — the packet's demonstrated design font — with local fallbacks; no webfont is fetched, purity).
    32	**LIMITATION (printed on the build's face here and in scores.md): PIXEL-UNVERIFIED — no browser binary in this seat; continuous weight UNVERIFIED on this stack; if the stack holds only static faces, weight renders stepped — a declared fidelity limitation, never a silent claim. Lens scores are source/logic-level; comparison.html is the render surface.**
    33	
    34	## Own checks (§5 legs 1–3) — RAW harness output (A9.4)
    35	
    36	### First draft — defect found + cured (raw excerpts, harness run 1)
    37	```
    38	== OWNERSHIP ==
    39	Line releases: [4830,10670]
    40	== SWAP D1: INTENTIONAL VIOLATION (clamp-and-print) ==
    41	clamps: []
    42	CP3 instant moved to 5170+200=5370; louder @5370: size=1.9422 sizePct=11.847 wght=796 env=0.9422 spoken=false => PASS (peak at clamped instant)
    43	```
    44	Defect: release computed 4830 (last-onset used as speech end) so the D1 violation (onset 5000) never crossed it and NO clamp fired — the amendment §C mechanism was inert. Cure: `speechEndMs` bound as a line-level CONFIG field (Line A 4500, Line B 8800 — the filed derivation's own numbers); releases recompute [5170, 10670]. Census cures in the same pass: comparison.html literals (−500/10000) removed — it now reads both from the recreation CONFIG; line tops + line-height moved into CONFIG (config-census.md).
    45	
    46	### Final build — full own-check output (harness run 3, verbatim excerpts; complete output retained in the run's harness log)
    47	```
    48	== COUNT ASSERTION (A9.3) ==
    49	CONFIG word count: 21
    50	Built span count (state model): 21
    51	Count match: MATCH
    52	== OWNERSHIP ==
    53	Line releases: [5170,10670]
    54	Ownership clamps (specimen CONFIG): []
    55	== A11 CHECKPOINTS (amended twins) ==
    56	CP1 @3000ms sizes,: size=1.3500 sizePct=8.235 wght=760 env=1.0000 spoken=true => PASS
    57	CP2 @3500ms weights: size=1.0000 sizePct=6.100 wght=743 env=0.8578 spoken=true => PASS
    58	CP2b @7000ms louder: size=1.0000 sizePct=6.100 wght=400 env=0.0000 spoken=true => PASS
    59	CP3 @7500ms louder: size=2.0000 sizePct=12.200 wght=820 env=1.0000 spoken=true => PASS
    60	CP3b @8000ms softer: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=false => PASS
    61	CP3b @8000ms or: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=true => PASS
    62	CP4-louder @8500ms louder: size=1.0000 sizePct=6.100 wght=400 env=0.0000 spoken=true => PASS
    63	CP4-softer @8500ms softer: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=true => PASS
    64	CP5 @9500ms softer: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=true => PASS
    65	== 57.167s BOUNDARY (build 9167) ==
    66	@9167ms softer: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=true | or: size=0.4500 sizePct=2.745 wght=300 env=1.0000 spoken=true | louder: size=1.0000 sizePct=6.100 wght=400 env=0.0000 spoken=true | lineA opacity=0.000
    67	@9500ms softer: (identical) | lineA opacity=0.000
    68	@10000ms softer: (identical) | lineA opacity=0.000
    69	== MID-RAMP WEIGHT EVIDENCE (evaluator font-variation values) ==
    70	@2540ms sizes,: size=1.1750 sizePct=7.167 wght=580 env=0.5000
    71	@3010ms weights: size=1.0000 sizePct=6.100 wght=600 env=0.5000
    72	@7400ms louder: size=1.5000 sizePct=9.150 wght=610 env=0.5000
    73	@7730ms softer: size=0.7250 sizePct=4.422 wght=350 env=0.5000
    74	== SWAP D1: INTENTIONAL VIOLATION (clamp-and-print) ==
    75	clamps: [{"word":"louder","requestedOnset":5000,"clampedOnset":5170,"releaseMs":5170}]
    76	CP3 instant moved to 5170+200=5370; louder @5370: size=2.0000 sizePct=12.200 wght=820 env=1.0000 => PASS (peak at clamped instant)
    77	== SWAP D3: TIMING SWAP (louder envOnset 7300->5300, rampUp 200->300) ==
    78	clamps (must be empty): []
    79	CP3 instant via expression envOnset+rampUp = 5600
    80	louder @5600: size=2.0000 sizePct=12.200 wght=820 env=1.0000 => PASS
    81	louder @7500 (old instant, must be decayed to base): size=1.0000 sizePct=6.100 wght=400 => PASS
    82	== SWAP D2: REPLACEMENT PHRASE (complete envelope table, amendment §D2) ==
    83	grow @1900 (peak): size=1.7000 wght=780 => PASS
    84	grow @2300 (mid-decay p=0.5): size=1.3500 wght=590 expected size=1.3500 wght=590 => PASS
    85	still @2800 (landed): size=0.5000 wght=300 => PASS
    86	still @5000 (persist): size=0.5000 wght=300 => PASS
    87	palette: spokenColor=#ff9f1c guideColor=#3a86ff (consumption sites: render color branch + guide background)
    88	== DETERMINISM CENSUS ==
    89	Math.random present: false | Date.now present: false
    90	```
    91	Harness tally: 16 PASS / 0 FAIL.
    92	
    93	### Leg 2 — purity (guards.md command 1)
    94	`grep -n -E "segment\.mp4|source\.mp4|<video|<img" recreation.html` → **exit 1, zero hits**. Frame-id pattern (`t050|t055|t056`) → 0. No `url(#id)` occurrences exist in this build (nothing to classify). Asset inventory: **zero external assets** — recreation.html is code only (HTML/CSS/JS); segment.mp4 is evidence, referenced ONLY by comparison.html as the labeled ORIGINAL.
    95	### Leg 3 — comparison check
    96	comparison.html: both sides at 360×203, labels "ORIGINAL — Caption with Intention @ 0:48–0:58" / "RECREATION — T197 volume ramp, parameterized" exactly as charged; ONE control set (Play/Pause/Restart) drives the video and slaves the recreation via `__T197.seek(buildMs())` under the amendment §B policy (offset + core read from the recreation CONFIG — no duplicated literals); phone stacking via the shared prior-wave form (max-width 380 column). Both inline scripts pass `node --check` (raw: BOTH_NODE_CHECK_PASS).
    97	### Syntax
    98	`node --check` on recreation.html's extracted inline script: PASS · comparison.html's: PASS.
    99	
   100	## A6 legs (pre-wave, final build)
   101	fit-table.md HITs **0 on the recreation's own stage; 1 carried** (comparison-surface scale parity, disposition in fit-table.md — added at the prewave cure below) · config-census.md HITs **0** (two first-draft census HITs cured pre-scoring, recorded in config-census.md).
   102	
   103	## jev-prewave firing 1 — HOLD · ASSERTED-CHECKS (filed: jev-prewave.md) → CURED → re-fire
   104	Dimensions: parameterization 0.9 · purity pre-check 1.0 · own-checks completeness **0.4** · fidelity-plan honesty 0.9. Findings + dispositions (all APPLIED):
   105	1. **A11 mapping incomplete** — CP2b/CP3b/CP5 instants lacked CONFIG derivations; CP4's log showed only `softer`. Cure: `censusAnchorsMs` bound in CONFIG (the seven census twins as data); harness v2 derives every CP instant from the anchors + envelope expressions and prints the agreement checks (CP1 anchor == sizes peak expression 3000 · CP3 anchor == louder peak expression 7500 · CP4 anchor == louder decay-end 8500 · CP3b anchor ≥ shrink landing 7900 · CP5 landing < anchor < coreMs); CP4 now asserts BOTH `or` and `softer` at 8500. The CP3 timing swap re-proves the expression governs under swap (7500→5600). Raw harness-v2 output:
   106	```
   107	CP1 instant: CONFIG.censusAnchorsMs.sizesPeak=3000 ; expression sizes.envOnset+rampUp=3000 ; agree=true
   108	CP1 @3000 sizes,: size=1.3500 wght=760 env=1.0000 => PASS
   109	CP2 instant: CONFIG.censusAnchorsMs.weightsBold=3500 ; weights envelope at anchor: peak=3260 decayEnd=4160 anchor inside decay=true
   110	CP2 @3500 weights: size=1.0000 wght=743 env=0.8578 => PASS
   111	CP2b instant: CONFIG.censusAnchorsMs.louderBase=7000 ; louder.envOnsetMs=7300 ; anchor<envOnset=true
   112	CP2b @7000 louder: size=1.0000 wght=400 env=0.0000 => PASS
   113	CP3 instant: CONFIG.censusAnchorsMs.louderPeak=7500 ; expression louder.envOnset+rampUp=7500 ; agree=true
   114	CP3 @7500 louder: size=2.0000 wght=820 env=1.0000 => PASS
   115	CP3b instant: CONFIG.censusAnchorsMs.shrinkSmall=8000 ; shrink landing expression envOnset+rampMs=7900 ; anchor>=landing=true
   116	CP3b @8000 or: size=0.4500 wght=300 env=1.0000 => PASS
   117	CP3b @8000 softer: size=0.4500 wght=300 env=1.0000 => PASS
   118	CP4 instant: CONFIG.censusAnchorsMs.shrinkLanded=8500 ; louder decay-end expression=8500 ; agree=true
   119	CP4 @8500 louder: size=1.0000 wght=400 env=0.0000 => PASS
   120	CP4 @8500 or: size=0.4500 wght=300 env=1.0000 => PASS
   121	CP4 @8500 softer: size=0.4500 wght=300 env=1.0000 => PASS
   122	CP5 instant: CONFIG.censusAnchorsMs.shrinkPersist=9500 ; shrink landing=7900 ; coreMs=10000 ; landing<anchor<core=true
   123	CP5 @9500 softer: size=0.4500 wght=300 env=1.0000 => PASS
   124	swapped expression instant=5600 (anchor 7500 no longer governs; expression governs under swap)
   125	louder @5600: size=2.0000 wght=820 env=1.0000 => PASS
   126	CONFIG words=21 built=21 match=true
   127	releases=[5170,10670] clamps=[]
   128	```
   129	Full own-check suite re-run on the cured build: harness v1 16 PASS / 0 FAIL · node --check PASS.
   130	2. **Fit result covered a different playback size** (comparison 360×203 → shrink ink ≈4.0 px). Cure: comparison-surface rows + the parity computation filed in fit-table.md; HIT carried with its disposition printed there (curing by enlargement would break size parity with the ORIGINAL — the comparison's purpose).
   131	3. **Census inaccuracy** — the CSS `line-height:1.25` had NOT in fact been removed (JS overrode it inline). Cure: removed from the stylesheet in fact; census text corrected.
   132	4. **Noted, recorded (not a HOLD ground):** at the 55.0 s twin the build already marks `louder` spoken (color flips at the ASR onset 6640 ≡ 54.64 s) while the source frame at 55.0 still shows it white. Priced: the ASR onset is the binding timing authority (packet + filed Plan); the frame sits inside the word's spoken span (54.64–55.76) before its visible flip. CP2b's assertion covers size/weight only, as filed. Named here as a micro-departure, not silently absorbed.
   133	
   134	recreation.html SHA-256 (FINAL, post-cure): **42578a0d59fc2f05ace09f4fcf28b9d372b40941a047c8300bb98e70e0dca32b** (12,610 B) · comparison.html a0e283a78a145c5be7295544757c405d4379fd6e41fc69c922c40a0a82e50414 (2,016 B) · segment.mp4 899128ba75b34d8c62489bc328f0d6bc7cdf573e632adddc49ac100af39456c6 (927,929 B). (Pre-cure build 831046a4… was never scored; the wave binds the final SHA only.)
     1	# fit-table — T197 volume ramp · Cycle 035 Wave 32 · attempt 1 (guard-measured-fit, Amendment A6)
     2	
     3	Method: glyph-ink geometry from the build harness's character-width model (upper 0.72em · lower 0.56em · digit 0.62em · punct 0.28em) at the 360 px stage (360×640 portrait stage; basePx = 640 × baseSizePctOfStage 6.1% = 39.0 px; ink height = fontPx × 0.72 cap-height factor). The recreation lays words as inline spans in a centred, wrapping block, so the binding fit row per word is its unbreakable ink width at its LARGEST envelope state vs the 360 px container; line blocks wrap inside the container by construction (unwrapped widths printed for the record). Min-state ink height prices the persisted shrink words against the ~11 px legibility floor. Raw harness output filed in build-record.md.
     4	
     5	| element | state | fontPx | ink w (px) | ink h (px) | container w | margin (px) | flag |
     6	|---|---|---|---|---|---|---|---|
     7	| The | base | 39.0 | 71.8 | 28.1 | 360 | 144.1 | |
     8	| system | base | 39.0 | 131.2 | 28.1 | 360 | 114.4 | |
     9	| brings | base | 39.0 | 131.2 | 28.1 | 360 | 114.4 | |
    10	| in | base | 39.0 | 43.7 | 28.1 | 360 | 158.1 | |
    11	| varying | base | 39.0 | 153.0 | 28.1 | 360 | 103.5 | |
    12	| type | base | 39.0 | 87.4 | 28.1 | 360 | 136.3 | |
    13	| sizes, | PEAK 1.35× | 52.7 | 162.3 | 37.9 | 360 | 98.8 | |
    14	| weights | base (weight-only) | 39.0 | 153.0 | 28.1 | 360 | 103.5 | |
    15	| and | base | 39.0 | 65.6 | 28.1 | 360 | 147.2 | |
    16	| animation, | base | 39.0 | 207.7 | 28.1 | 360 | 76.2 | widest Line A word |
    17	| so | base | 39.0 | 43.7 | 28.1 | 360 | 158.1 | |
    18	| you | base | 39.0 | 65.6 | 28.1 | 360 | 147.2 | |
    19	| can | base | 39.0 | 65.6 | 28.1 | 360 | 147.2 | |
    20	| feel | base | 39.0 | 87.4 | 28.1 | 360 | 136.3 | |
    21	| when | base | 39.0 | 87.4 | 28.1 | 360 | 136.3 | |
    22	| my | base | 39.0 | 43.7 | 28.1 | 360 | 158.1 | |
    23	| voice | base | 39.0 | 109.3 | 28.1 | 360 | 125.3 | |
    24	| gets | base | 39.0 | 87.4 | 28.1 | 360 | 136.3 | |
    25	| louder | PEAK 2.0× | 78.1 | 262.3 | 56.2 | 360 | 48.8 | widest element overall |
    26	| or | SHRUNK 0.45× | 17.6 | 19.7 | 12.6 | 360 | 170.2 | min-state row |
    27	| softer | SHRUNK 0.45× | 17.6 | 59.0 | 12.6 | 360 | 150.5 | min-state row |
    28	| lineA block | base, unwrapped | 39.0 | 1270.4 | — | 360 | wraps | inline flow wraps inside container |
    29	| lineB block | base, unwrapped | 39.0 | 1013.5 | — | 360 | wraps | inline flow wraps inside container |
    30	| guide rules | — | — | 302.4 (84% of 360) | 2.0 thick | 360 | 28.8/side | guideInsetPct 8 |
    31	
    32	Hierarchy (measured): louder peak ink height 56.2 vs base 28.1 = 2.00× ✓ (the claimed ratio, measured) · sizes, peak 37.9 vs base 28.1 = 1.35× ✓ · shrunk words 12.6 vs base 28.1 = 0.45× ✓.
    33	Legibility floor ~11 px: smallest measured ink height is the persisted shrink state at 12.6 px — clear, by 1.6 px (the source's own 0.45× ratio; the CONFIG floor minSizePctOfStage 2.7 → ratio floor 0.4426 sits just below it, and the build's FIT-FAIL state arms if any computed size crosses it — plan-review finding 2's guard, not a ratio change).
    34	
    35	## Comparison surface (360×203 iframe) — added at the jev-prewave HOLD cure, Cycle 035
    36	The comparison page renders both sides at 360×203. At that stage height the same model gives: base fontPx = 203 × 6.1% = 12.4 · base ink height 8.9 px · louder peak ink 17.8 px · shrink-state ink = 203 × 0.061 × 0.45 × 0.72 ≈ **4.0 px** — below the ~11 px floor. **HIT (this surface only), carried with disposition:** the comparison iframe is a reduced-scale inspection surface, and the reduction is IDENTICAL on the original side — the source's own text at 6.1% of its 1080 px height, scaled to a 203 px-high frame, is the same ≈8.9 px base / ≈4.0 px shrink ink. The recreation matches the original's physical text size in the comparison exactly (that parity is the comparison's purpose); the legibility floor governs the recreation's own playback stage (full-viewport / 360×640 phone stage above), where every state clears it. Shrinking the comparison ratio or enlarging type only in comparison would break size parity with the ORIGINAL — the defect would be the cure. Disposition: CARRIED, priced, not cured by construction.
    37	HITs: 1 carried (comparison-surface scale parity, disposition above) · 0 on the recreation's own stage
     1	# config-census — T197 volume ramp · Cycle 035 Wave 32 · attempt 1 (guard-config-census v3.1, Amendment A6 + A9.6)
     2	
     3	Scan run on the FINAL recreation.html (SHA-256 42578a0d59fc2f05ace09f4fcf28b9d372b40941a047c8300bb98e70e0dca32b — re-scanned after the jev-prewave HOLD cure: CSS line-height removed in fact, censusAnchorsMs bound) + comparison.html for cross-file application sites. Reference counts are occurrences in code after the CONFIG block (seat script, this run).
     4	
     5	## Key → application-site resolution (value-flow checked, Cycle-021 rule)
     6	| CONFIG key | sites | flows to |
     7	|---|---|---|
     8	| baseSizePctOfStage | 3 | wordStateAt ratio math + render basePx |
     9	| baseWeight | 4 | envelope weight lerp (wordStateAt) |
    10	| easingName | 1 | EASINGS selection in envelopeAt |
    11	| plateColor | 1 | stage background |
    12	| guideColor | 1 | guide-rule background |
    13	| guideInsetPct | 2 | guide left/width geometry |
    14	| guideThicknessPx | 1 | guide height |
    15	| guideGapPctOfStage | 2 | guide top positions |
    16	| unspokenColor / spokenColor | 1 each | render color branch on spoken state |
    17	| fontStack | 1 | stage fontFamily (typography as CONFIG, Cycle-013 clarification) |
    18	| minSizePctOfStage | 1 | ratio floor + FIT-FAIL arming in wordStateAt |
    19	| lineExitMs | 3 | release derivation + Line A fade |
    20	| lineGapMs | 1 | release derivation |
    21	| endHoldMs | 1 | standalone loop period |
    22	| coreMs | 5 | persist end, comparison clamp (read cross-file by comparison.html), seek clamp |
    23	| segmentHandleOffsetMs | cross-file | comparison.html buildMs() reads it from the recreation CONFIG via window.__T197.config — applied; NO duplicated literal in comparison.html (cured at first draft, see below) |
    24	| ownershipPolicy | 2 | clamp branch predicate in computeOwnership/effectiveEnvOnset |
    25	| lineTopPctOfStage[] | 1 (array-indexed) | line row tops in layout (cured at first draft, see below) |
    26	| lineHeight | 1 | line leading in layout (cured at first draft; the CSS copy was removed in fact at the prewave cure — the stylesheet carries no line-height now) |
    27	| censusAnchorsMs.* | harness-side | the A11 checkpoints' evaluation instants (bound at the prewave cure; the harness derives every CP instant from these anchors + envelope expressions and prints the agreement checks) |
    28	| sharedEnvelopes.shrink.* | envOnset 9 · rampMs 1 · sizePeak 7 · weightPeak 7 · persist 6 (shared resolver refs) | resolveEnv — the SINGLE canonical shrink definition; `or`/`softer` carry envelopeRef only, no inline copies (amendment §E) |
    29	| lines[].speechEndMs | 1 | lineReleaseMs speech-end term (bound at first-draft cure — amendment §C note) |
    30	| lines[].words[].text/onsetMs/envOnsetMs/sizePeak/weightPeak/rampUpMs/rampDownMs/peakHoldMs/persist/envelopeRef | 1–12 each | span construction, color timing, envelope resolution |
    31	
    32	## Literal scan outside CONFIG
    33	- Hex colors in JS logic: NONE. In CSS: `#000` (page void outside the stage — structural, T137 precedent; the stage plate color itself reads plateColor) · `#ff5252` (FIT-FAIL diagnostic banner only — structural-diagnostic, not subject matter).
    34	- CSS layout constants: `.line` padding `0 2vw` (container inset — structural), `line-height` REMOVED from CSS (now CONFIG lineHeight), `#fitfail` bottom 2% / 13px / monospace (diagnostic banner geometry — structural-diagnostic).
    35	- JS numeric literals: 0 / 1 / 2 (indices, identity, clamp bounds — structural) · 100 (percent divisor — mathematical identity) · 0.5 / 2 in easing formulas (the named curves' defining constants — structural; the curve itself is CONFIG-selected by easingName) · 50 in guide-centre math (= 100/2 — structural identity).
    36	- JS strings: easing names (EASINGS map keys, selected via CONFIG easingName — structural) · 'clamp-and-print' (the policy token the CONFIG value is compared against — structural; the value lives in CONFIG) · element ids / 'px' / 'span' / 'block'/'none' (DOM mechanics — structural).
    37	
    38	## First-draft HITs — cured before this filing (not carried)
    39	1. `segmentHandleOffsetMs` resolved to 0 sites in recreation.html and comparison.html carried its own −500 / 10000 literals → CURED: comparison.html now reads segmentHandleOffsetMs + coreMs from the recreation CONFIG at sync time; no fallback literals remain.
    40	2. Line row tops (0.30 / 0.56) and line-height 1.25 stood as code/CSS literals (subject-shaping geometry per A9.6) → CURED as CONFIG keys lineTopPctOfStage + lineHeight, applied in layout.
    41	
    42	HITs (final build): 0
42578a0d59fc2f05ace09f4fcf28b9d372b40941a047c8300bb98e70e0dca32b  ../recreation.html
a0e283a78a145c5be7295544757c405d4379fd6e41fc69c922c40a0a82e50414  ../comparison.html

exec
/bin/bash -lc "rg --files --hidden ../../.. | rg 'guards\\.md"'$|item-T197-observe-plan|harness|2026-11-18-cycle-035'"' | head -65
nl -ba ../recreation.html | sed -n '70,275p'
nl -ba ../comparison.html
rg -A5 '"'^### T08'"' ../../../video-digests/2026-11-17-lia-caption-with-intention/digest.md" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
 succeeded in 326ms:
../../../recreations/T105-dissolve/codex/attempt-2/own-check-harness.js
../../../recreations/T20-building-as-display-typography/checkpoints/attempt-2/own-check-harness.js
    70	    ]}
    71	  ]
    72	};
    73	var EASINGS = {
    74	  "easeInOut": function(p){ return p < 0.5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2)/2; },
    75	  "linear": function(p){ return p; },
    76	  "easeOut": function(p){ return 1 - Math.pow(1 - p, 3); },
    77	  "easeIn": function(p){ return p*p*p; }
    78	};
    79	function resolveEnv(cfg, w){
    80	  if (w.envelopeRef) {
    81	    var s = cfg.sharedEnvelopes[w.envelopeRef];
    82	    return { envOnsetMs: s.envOnsetMs, rampUpMs: s.rampMs, rampDownMs: 0, peakHoldMs: 0, sizePeak: s.sizePeak, weightPeak: s.weightPeak, persist: !!s.persist };
    83	  }
    84	  return { envOnsetMs: w.envOnsetMs, rampUpMs: w.rampUpMs, rampDownMs: w.rampDownMs, peakHoldMs: w.peakHoldMs || 0, sizePeak: w.sizePeak, weightPeak: w.weightPeak, persist: !!w.persist };
    85	}
    86	function lineReleaseMs(cfg, line){
    87	  var speechEnd = line.speechEndMs || 0, transientEnd = 0, i, w, e;
    88	  for (i = 0; i < line.words.length; i++) {
    89	    w = line.words[i]; e = resolveEnv(cfg, w);
    90	    var end = e.persist ? cfg.coreMs : e.envOnsetMs + e.rampUpMs + e.peakHoldMs + e.rampDownMs;
    91	    if ((e.sizePeak !== 1.0 || e.weightPeak !== cfg.baseWeight) && end > transientEnd) transientEnd = end;
    92	  }
    93	  return Math.max(speechEnd, transientEnd) + cfg.lineExitMs + cfg.lineGapMs;
    94	}
    95	function computeOwnership(cfg){
    96	  var clamps = [], releases = [], prevRelease = 0, li, wi;
    97	  for (li = 0; li < cfg.lines.length; li++) {
    98	    var line = cfg.lines[li], rel = lineReleaseMs(cfg, line);
    99	    releases.push(rel);
   100	    if (li > 0) {
   101	      for (wi = 0; wi < line.words.length; wi++) {
   102	        var w = line.words[wi], e = resolveEnv(cfg, w);
   103	        if ((e.sizePeak !== 1.0 || e.weightPeak !== cfg.baseWeight) && e.envOnsetMs < prevRelease && cfg.ownershipPolicy === "clamp-and-print") {
   104	          clamps.push({ word: w.text, requestedOnset: e.envOnsetMs, clampedOnset: prevRelease, releaseMs: prevRelease });
   105	        }
   106	      }
   107	    }
   108	    prevRelease = rel;
   109	  }
   110	  return { releases: releases, clamps: clamps };
   111	}
   112	function effectiveEnvOnset(cfg, ownership, lineIdx, w){
   113	  var e = resolveEnv(cfg, w), onset = e.envOnsetMs;
   114	  if (lineIdx > 0 && cfg.ownershipPolicy === "clamp-and-print") {
   115	    for (var i = 0; i < ownership.clamps.length; i++) {
   116	      if (ownership.clamps[i].word === w.text && ownership.clamps[i].requestedOnset === e.envOnsetMs) onset = ownership.clamps[i].clampedOnset;
   117	    }
   118	  }
   119	  return onset;
   120	}
   121	function envelopeAt(cfg, e, onset, t){
   122	  var ease = EASINGS[cfg.easingName] || EASINGS.easeInOut;
   123	  if (t < onset) return 0;
   124	  var peakAt = onset + e.rampUpMs;
   125	  if (t < peakAt) return e.rampUpMs > 0 ? ease((t - onset)/e.rampUpMs) : 1;
   126	  if (t < peakAt + e.peakHoldMs) return 1;
   127	  if (e.persist) return 1;
   128	  var decayStart = peakAt + e.peakHoldMs;
   129	  if (t < decayStart + e.rampDownMs) return e.rampDownMs > 0 ? 1 - ease((t - decayStart)/e.rampDownMs) : 0;
   130	  return 0;
   131	}
   132	function wordStateAt(cfg, ownership, lineIdx, w, t){
   133	  var e = resolveEnv(cfg, w);
   134	  var onset = effectiveEnvOnset(cfg, ownership, lineIdx, w);
   135	  var env = envelopeAt(cfg, e, onset, t);
   136	  var minRatio = cfg.minSizePctOfStage / cfg.baseSizePctOfStage;
   137	  var ratio = 1 + (e.sizePeak - 1) * env;
   138	  var fitFail = false;
   139	  if (ratio < minRatio) { ratio = minRatio; fitFail = true; }
   140	  return {
   141	    env: env,
   142	    sizeRatio: ratio,
   143	    sizePctOfStage: cfg.baseSizePctOfStage * ratio,
   144	    weight: Math.round(cfg.baseWeight + (e.weightPeak - cfg.baseWeight) * env),
   145	    spoken: t >= w.onsetMs,
   146	    fitFail: fitFail
   147	  };
   148	}
   149	function buildStateAt(cfg, t){
   150	  var ownership = computeOwnership(cfg);
   151	  var out = { t: t, ownership: ownership, lines: [], fitFail: false };
   152	  for (var li = 0; li < cfg.lines.length; li++) {
   153	    var line = cfg.lines[li], lo = { id: line.id, opacity: 1, words: [] };
   154	    if (li < cfg.lines.length - 1) {
   155	      var rel = ownership.releases[li];
   156	      if (t >= rel + cfg.lineExitMs) lo.opacity = 0;
   157	      else if (t >= rel) lo.opacity = 1 - (t - rel)/cfg.lineExitMs;
   158	    }
   159	    for (var wi = 0; wi < line.words.length; wi++) {
   160	      var st = wordStateAt(cfg, ownership, li, line.words[wi], t);
   161	      if (st.fitFail) out.fitFail = true;
   162	      lo.words.push({ text: line.words[wi].text, env: st.env, sizeRatio: st.sizeRatio, sizePctOfStage: st.sizePctOfStage, weight: st.weight, spoken: st.spoken });
   163	    }
   164	    out.lines.push(lo);
   165	  }
   166	  return out;
   167	}
   168	if (typeof module !== "undefined" && module.exports) {
   169	  module.exports = { CONFIG: CONFIG, EASINGS: EASINGS, resolveEnv: resolveEnv, lineReleaseMs: lineReleaseMs, computeOwnership: computeOwnership, envelopeAt: envelopeAt, wordStateAt: wordStateAt, buildStateAt: buildStateAt };
   170	}
   171	if (typeof document !== "undefined") {
   172	  var stage = document.getElementById("stage");
   173	  stage.style.background = CONFIG.plateColor;
   174	  stage.style.fontFamily = CONFIG.fontStack;
   175	  var ownership0 = computeOwnership(CONFIG);
   176	  if (ownership0.clamps.length) { try { console.log("OWNERSHIP-CLAMP " + JSON.stringify(ownership0.clamps)); } catch (e) {} }
   177	  var guides = [document.getElementById("guideTop"), document.getElementById("guideBottom")];
   178	  var spans = [];
   179	  function layout(){
   180	    var H = stage.clientHeight, W = stage.clientWidth;
   181	    guides.forEach(function(g, i){
   182	      g.style.left = (W * CONFIG.guideInsetPct/100) + "px";
   183	      g.style.width = (W * (1 - 2 * CONFIG.guideInsetPct/100)) + "px";
   184	      g.style.height = CONFIG.guideThicknessPx + "px";
   185	      g.style.background = CONFIG.guideColor;
   186	      g.style.top = (H * (i === 0 ? (50 - CONFIG.guideGapPctOfStage/2)/100 : (50 + CONFIG.guideGapPctOfStage/2)/100)) + "px";
   187	    });
   188	    CONFIG.lines.forEach(function(line, li){
   189	      var el = document.getElementById(line.id);
   190	      el.style.top = (H * CONFIG.lineTopPctOfStage[li]/100) + "px";
   191	      el.style.lineHeight = CONFIG.lineHeight;
   192	    });
   193	    return H;
   194	  }
   195	  CONFIG.lines.forEach(function(line, li){
   196	    var el = document.getElementById(line.id), arr = [];
   197	    line.words.forEach(function(w, wi){
   198	      var s = document.createElement("span");
   199	      s.className = "word"; s.textContent = w.text;
   200	      el.appendChild(s);
   201	      if (wi < line.words.length - 1) el.appendChild(document.createTextNode(" "));
   202	      arr.push(s);
   203	    });
   204	    spans.push(arr);
   205	  });
   206	  var startStamp = null, externalMs = null;
   207	  function render(now){
   208	    var H = layout();
   209	    var loopMs = CONFIG.coreMs + CONFIG.endHoldMs;
   210	    var t;
   211	    if (externalMs !== null && externalMs !== undefined) t = Math.max(0, Math.min(CONFIG.coreMs, externalMs));
   212	    else {
   213	      if (startStamp === null) startStamp = now;
   214	      t = (now - startStamp) % loopMs;
   215	      if (t > CONFIG.coreMs) t = CONFIG.coreMs;
   216	    }
   217	    var state = buildStateAt(CONFIG, t), anyFitFail = state.fitFail;
   218	    state.lines.forEach(function(lo, li){
   219	      document.getElementById(lo.id).style.opacity = lo.opacity;
   220	      lo.words.forEach(function(ws, wi){
   221	        var s = spans[li][wi], basePx = H * CONFIG.baseSizePctOfStage/100;
   222	        s.style.fontSize = (basePx * ws.sizeRatio) + "px";
   223	        s.style.fontVariationSettings = "'wght' " + ws.weight;
   224	        s.style.fontWeight = ws.weight;
   225	        s.style.color = ws.spoken ? CONFIG.spokenColor : CONFIG.unspokenColor;
   226	      });
   227	    });
   228	    document.getElementById("fitfail").style.display = anyFitFail ? "block" : "none";
   229	    requestAnimationFrame(render);
   230	  }
   231	  requestAnimationFrame(render);
   232	  window.__T197 = { seek: function(ms){ externalMs = ms; }, config: CONFIG, stateAt: function(ms){ return buildStateAt(CONFIG, ms); } };
   233	}
   234	</script>
   235	</body></html>
     1	<!DOCTYPE html>
     2	<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
     3	<title>T197 comparison</title>
     4	<style>body{background:#111;color:#fff;font-family:Arial,sans-serif;margin:0;padding:12px}.wrap{max-width:380px;margin:0 auto;display:flex;flex-direction:column;gap:10px}video,iframe{width:360px;height:203px;border:0;background:#000}.lab{font-size:13px;font-weight:700}button{padding:10px 14px;font-size:14px}</style></head><body>
     5	<div class="wrap">
     6	<div class="lab">ORIGINAL — Caption with Intention @ 0:48–0:58</div>
     7	<video id="v" src="segment.mp4" playsinline></video>
     8	<div class="lab">RECREATION — T197 volume ramp, parameterized</div>
     9	<iframe id="r" src="recreation.html" title="recreation"></iframe>
    10	<div><button id="play">Play</button> <button id="pause">Pause</button> <button id="restart">Restart</button></div>
    11	</div>
    12	<script>
    13	// Comparison policy (plan-amendment-cycle035.md §B): build time = clamp(videoMs + segmentHandleOffsetMs, 0, coreMs),
    14	// with both values read from the recreation's own CONFIG (window.__T197.config) — no duplicated literals here.
    15	// Video 0.0-0.5 s (header handle) holds build 0; video 10.5-11.0 s holds the recreation end state; no mid-comparison loop restart.
    16	const v=document.getElementById('v'),r=document.getElementById('r');
    17	function recCfg(){ try{const w=r.contentWindow;if(w&&w.__T197)return w.__T197.config;}catch(e){} return null; }
    18	function buildMs(){ const c=recCfg(); if(!c) return null; return Math.max(0, Math.min(c.coreMs, v.currentTime*1000 + c.segmentHandleOffsetMs)); }
    19	function sync(){try{const w=r.contentWindow,b=buildMs();if(w&&w.__T197&&b!==null)w.__T197.seek(b);}catch(e){}}
    20	v.addEventListener('timeupdate',sync);
    21	v.addEventListener('seeked',sync);
    22	document.getElementById('play').onclick=()=>{v.play();sync();};
    23	document.getElementById('pause').onclick=()=>{v.pause();sync();};
    24	document.getElementById('restart').onclick=()=>{v.currentTime=0;v.play();sync();};
    25	</script></body></html>
### T08 — Volume ramp: size and weight track vocal emphasis (48–58 s)
- **Mechanics:** the narration line "types sizes, weights and animation," sets the demo's own terms (~50 s: "sizes" stands larger and bolder than its neighbours). Then the line "so you can feel when my voice gets louder or softer" performs the mapping: the channel the film's own grid names "Font Size Range (percentage of the screen height)" (T05) is performed: "louder" grows transiently at its onset (~55.3 s, ev/t055-louder-onset.jpg, bound by the clip), and the persistent frame-verifiable end state is the shrink — at 56 s "or softer" sits visibly smaller and lighter while the line's earlier words hold full size (ev/t056-ramp-softer.jpg); at 55 s the ramp words are still white and unscaled (ev/t055-line-before-ramp.jpg). Size is a continuous-feeling ramp tied to the phrase's dynamics, not a per-word pop. Easing curve: UNMEASURED (no frame-level size series was extracted; the claim is the before/after states + the clip).
- **Why it works:** loudness becomes a spatial fact a Deaf viewer can see — the sentence about volume is itself set at two volumes.
- **Evidence:** ev/t050-types-sizes.jpg ("sizes" enlarged in its line) · ev/t055-line-before-ramp.jpg (the ramp line before its size states) · ev/t055-louder-onset.jpg ("louder" at its onset) · ev/t056-ramp-softer.jpg ("or softer" shrunk, the end state). Clip: clips/050-volume-ramp-7s.mp4 (50–57 s).

### T09 — Speaker-color coding: persistent color as identity (58–75 s and throughout the scene demos)

exec
/bin/bash -lc "find /home/hatch/workspace -type f \\( -name guards.md -o -name item-T197-observe-plan.md -o -iname '*t197*harness*' -o -name jev-prewave.md \\) 2>/dev/null | head -60
command -v node chromium google-chrome
rg -n 'T08 —|CP[1-5]|57.167|"'^## '"' ../plan-amendment-cycle035.md | head -22
ls -l ../segment.mp4
rg -n 'guards\\.md|harness' payload-prewave-refire.txt | tail -14" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
 succeeded in 10408ms:
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/agent-chat/push-mst-def/root/jobs/main-session-tldr/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/drift-check/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T59-column-cards/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T57-quote-cards-attribution/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T56-recreated-press-cards/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T53-ballot-arc-count-board/codex/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T54-map-as-table-roster/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T71-your-ballot-ending/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T75-clock-stamp-hud-chaptering/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T64-calendar-prop-stakes/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T68-threshold-interpretation-ladder/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T66-money-stacks-sourced-totals/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T83-building-cutaway-grid/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T81-seed-cards-status-taxonomy/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T82-countable-multitude/codex/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T82-countable-multitude/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T76-hud-year-register/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T90-counterfactual-reel/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T96-one-palette-world/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T94-years-count-down-coda/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T91-qa-quote-cards/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T92-data-beats/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T99-logo-mark-assembly-opening/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T103-complexity-ladder/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T101-timeline-dive/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T100-pencil-check-task-sting/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T102-definition-card/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T105-dissolve/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T106-cut-on-action/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T104-hard-cut/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T108-dynamic-zoom/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T107-match-cut/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T109-element-morph/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T111-logo-outro-sting/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T110-countdown-pre-announcement/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T122-headline-card-grammar/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T128-title-card-chaptering/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T123-step-card-segmentation/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T124-strikethrough-negation-list/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T129-evidence-board-composition/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T130-vintage-2d-diagram-animation/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T132-serial-presentation/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T133-countdown-scaling-numerals/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T134-sentence-band-acceleration/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T135-sentence-final-dwell-weighting/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T137-case-emphasis-stream/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T139-product-flash-phrase-boundary/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T140-repetition-chant/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T145-scale-cascade-cold-open/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T149-isometric-hard-steps-path/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T151-galaxy-of-candles-emergence/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T153-duration-as-rows-bars/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T153-duration-as-rows-bars/prior-evidence-attempt-1/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T154-window-ellipse-players-joined/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T156-isometric-settlement-diorama/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T157-detection-ui-gag/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T160-expansion-front-envelopment/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T162-galaxy-race-table/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T167-hub-growth/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T168-spoke-draw-on-dot-landing/jev-prewave.md
/usr/bin/node
5:## A. Evaluation instants moved to the ACTUAL source twins (gate charge 1)
7:Build t=0 ≡ source 48.0 s. Census twins (build ms): sizes peak state 51.0 s → **3000** · weights bold 51.5 s → **3500** · Line B base / louder still base 55.0 s → **7000** · louder peak 55.5 s → **7500** · shared shrink ALREADY SMALL 56.0 s → **8000** · louder decayed + shrink landed 56.5 s → **8500 (CP4)** · shrink persists 57.5 s → **9500 (CP5)**.
9:The filed CP instants evaluated the CONFIG expressions instead of the census states (CP1 2480, CP2 3260, CP4 8560, CP5 9800) and three filed envelopes contradict the census at the twins. Cures (envelope values are CONFIG data; the evaluator semantics in §F are unchanged in form):
22:| CP1 | **3000** | sizes size ∈ [1.28, 1.42] AND wght ≥ 700 | envOnset+rampUp = 2080+920 = 3000 | size 1.35, wght 760 → PASS |
23:| CP2 | **3500** | weights size ∈ [0.97, 1.03] AND wght ≥ 740 | twin-anchored (source state); envelope value derived from onset 2760 + rampUp 500 + decay position | size 1.00, wght ≈743 → PASS |
24:| CP2b | **7000** | louder size ∈ [0.97, 1.03] AND wght ∈ [380, 420] (BASE at 55.0) | envOnset 7300 not yet reached | size 1.00, wght 400 → PASS |
25:| CP3 | **7500** | louder size ∈ [1.90, 2.10] AND wght ≥ 780 | envOnset+rampUp = 7300+200 = 7500 | size 2.00, wght 820 → PASS |
26:| CP3b | **8000** | or/softer size ∈ [0.40, 0.50] AND wght ≤ 340 (ALREADY SMALL at 56.0) | shrink envOnset+ramp = 7560+340 = 7900 ≤ 8000 | size 0.45, wght 300 → PASS |
27:| CP4 | **8500** | louder size ≤ 1.08 AND or/softer size ∈ [0.40, 0.50] AND wght ≤ 340 | louder decay end 7500+1000 = 8500; shrink persist | louder 1.00 · shrink 0.45/300 → PASS |
28:| CP5 | **9500** | softer size ∈ [0.40, 0.50] at end hold | persist envelope, t inside core | size 0.45, wght 300 → PASS |
30:A timing swap must move CP3's instant via the same expression (envOnset+rampUp) — see §D.
32:## B. Comparison policy (gate charge 2 — the 10,000 + 1,800 vs 11,000 reconciliation)
40:## C. The `louder`-onset vs Line-A-release conflict — ONE outcome chosen (gate charge 3a)
44:## D. Swap separation + complete replacement envelope table (gate charge 3b)
48:**D1 — Intentional-violation test (NOT a reuse swap):** set `louder.envOnsetMs` = 5000 (< release 5170) on a scratch copy. Expected: `ownershipClamp` = {word:'louder', requestedOnset:5000, clampedOnset:5170, releaseMs:5170}; CP3's instant moves to 5170+200 = 5370 via the expression; the build still renders. This test proves the clamp; it is never presented as a content swap.
63:**D3 — Timing swap (on the specimen CONFIG, scratch copy):** louder envOnsetMs 7300 → **5300** (≥ release 5170, so NO clamp fires — this is what makes it a valid timing swap rather than the D1 violation), rampUpMs 200 → **300**. Expected: CP3 instant moves 7500 → **5600** via envOnset+rampUp; at 5600 → size 2.00, wght 820; at the old instant 7500 louder is fully decayed (decay 5600+1000 = 6600) → size 1.00.
65:## E. Bound defaults (gate charge 4)
73:## F. Evaluator semantics (as amended — one schema, A9.6)
77:## G. 57.167 s boundary + weight-evidence charges (jev-observe-exit, applied)
79:- T196's record (Cycle-034 item-T196 §1) shows the next section header ("Character Identification") first appearing at source **57.167 s** = build **9167 ms**, inside T197's claimed hold through 57.5–58.0. Execute must play/evaluate across that boundary and record the last visible ramp state in build-record: the expected state at 9167, 9500 and 10000 is IDENTICAL (shrink persisted: or/softer 0.45× / wght 300, all other words base, Line A exited) — the header is the next section's furniture (T196/T09's surface), not a T197 state change; the build neither builds it nor lets it disturb the hold. Segment-frame evidence at the boundary is filed in build-record.
-rw-rw---- 1 root nogroup 927929 Nov 18 08:39 ../segment.mp4
21:- FED: build-record.md · the CONFIG block of recreation.html · the technique's packet section · guards.md command list (what own-checks should exist) · **the item's A6 leg outputs (fit-table.md + config-census.md) — added 2026-11-16, recreation Cycle 024 Condense, on the Wave-21 pattern: prewave firings for T151, T153 and T154 all HOLDed or re-fired on feed completeness (the A6 files and packet section existed complete in the artifact directory but were not in the payload), the lane's recurring ASSERTED-CHECKS false-positive class. A payload lacking any FED element is a feeder defect, printed as such in the build record; a HOLD whose only named cure is feeding an already-filed FED element is disposed as a feed-completeness miss, with the miss recorded.**
40:- Exemplars: T15 attempt 1's build record (must FIRE-WAVE: checks recorded, deferral of the interlude named in its Plan) · a constructed record claiming a swap test with no harness output (must HOLD as ASSERTED-CHECKS) · a constructed record whose CONFIG is decorative over hard-coded phrases (must HOLD as HARDCODED-CONFIG).
57:## Segment binding (guards.md command 5)
66:CONFIG word count **21** (Line A 10 + Line B 11) vs built span count **21** — MATCH (harness, raw output below). No halt.
69:All executed by the node harness over the build's own inline script (buildStateAt). Final-build results (raw in §Own-checks):
83:## Own checks (§5 legs 1–3) — RAW harness output (A9.4)
85:### First draft — defect found + cured (raw excerpts, harness run 1)
95:### Final build — full own-check output (harness run 3, verbatim excerpts; complete output retained in the run's harness log)
142:### Leg 2 — purity (guards.md command 1)
154:1. **A11 mapping incomplete** — CP2b/CP3b/CP5 instants lacked CONFIG derivations; CP4's log showed only `softer`. Cure: `censusAnchorsMs` bound in CONFIG (the seven census twins as data); harness v2 derives every CP instant from the anchors + envelope expressions and prints the agreement checks (CP1 anchor == sizes peak expression 3000 · CP3 anchor == louder peak expression 7500 · CP4 anchor == louder decay-end 8500 · CP3b anchor ≥ shrink landing 7900 · CP5 landing < anchor < coreMs); CP4 now asserts BOTH `or` and `softer` at 8500. The CP3 timing swap re-proves the expression governs under swap (7500→5600). Raw harness-v2 output:
178:Full own-check suite re-run on the cured build: harness v1 16 PASS / 0 FAIL · node --check PASS.
249:Method: glyph-ink geometry from the build harness's character-width model (upper 0.72em · lower 0.56em · digit 0.62em · punct 0.28em) at the 360 px stage (360×640 portrait stage; basePx = 640 × baseSizePctOfStage 6.1% = 39.0 px; ink height = fontPx × 0.72 cap-height factor). The recreation lays words as inline spans in a centred, wrapping block, so the binding fit row per word is its unbreakable ink width at its LARGEST envelope state vs the 360 px container; line blocks wrap inside the container by construction (unwrapped widths printed for the record). Min-state ink height prices the persisted shrink words against the ~11 px legibility floor. Raw harness output filed in build-record.md.
312:| censusAnchorsMs.* | harness-side | the A11 checkpoints' evaluation instants (bound at the prewave cure; the harness derives every CP instant from these anchors + envelope expressions and prints the agreement checks) |

exec
/bin/bash -lc "find /home/hatch/workspace -type f \\( -name guards.md -o -name item-T197-observe-plan.md -o -iname '*t197*harness*' \\) 2>/dev/null | rg 'recreation|T197'
command -v node chromium google-chrome
ls -l ../segment.mp4
rg -n 'guards\\.md|harness' payload-prewave-refire.txt | tail -18
rg -n '"'^### T08'"' ../../../video-digests/2026-11-17-lia-caption-with-intention/digest.md" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
 succeeded in 11592ms:
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-034-wave-31/item-T197-observe-plan.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/runs/2026-11-18-cycle-034-wave-31/item-T197-observe-plan.md
/usr/bin/node
-rw-rw---- 1 root nogroup 927929 Nov 18 08:39 ../segment.mp4
21:- FED: build-record.md · the CONFIG block of recreation.html · the technique's packet section · guards.md command list (what own-checks should exist) · **the item's A6 leg outputs (fit-table.md + config-census.md) — added 2026-11-16, recreation Cycle 024 Condense, on the Wave-21 pattern: prewave firings for T151, T153 and T154 all HOLDed or re-fired on feed completeness (the A6 files and packet section existed complete in the artifact directory but were not in the payload), the lane's recurring ASSERTED-CHECKS false-positive class. A payload lacking any FED element is a feeder defect, printed as such in the build record; a HOLD whose only named cure is feeding an already-filed FED element is disposed as a feed-completeness miss, with the miss recorded.**
40:- Exemplars: T15 attempt 1's build record (must FIRE-WAVE: checks recorded, deferral of the interlude named in its Plan) · a constructed record claiming a swap test with no harness output (must HOLD as ASSERTED-CHECKS) · a constructed record whose CONFIG is decorative over hard-coded phrases (must HOLD as HARDCODED-CONFIG).
57:## Segment binding (guards.md command 5)
66:CONFIG word count **21** (Line A 10 + Line B 11) vs built span count **21** — MATCH (harness, raw output below). No halt.
69:All executed by the node harness over the build's own inline script (buildStateAt). Final-build results (raw in §Own-checks):
83:## Own checks (§5 legs 1–3) — RAW harness output (A9.4)
85:### First draft — defect found + cured (raw excerpts, harness run 1)
95:### Final build — full own-check output (harness run 3, verbatim excerpts; complete output retained in the run's harness log)
142:### Leg 2 — purity (guards.md command 1)
154:1. **A11 mapping incomplete** — CP2b/CP3b/CP5 instants lacked CONFIG derivations; CP4's log showed only `softer`. Cure: `censusAnchorsMs` bound in CONFIG (the seven census twins as data); harness v2 derives every CP instant from the anchors + envelope expressions and prints the agreement checks (CP1 anchor == sizes peak expression 3000 · CP3 anchor == louder peak expression 7500 · CP4 anchor == louder decay-end 8500 · CP3b anchor ≥ shrink landing 7900 · CP5 landing < anchor < coreMs); CP4 now asserts BOTH `or` and `softer` at 8500. The CP3 timing swap re-proves the expression governs under swap (7500→5600). Raw harness-v2 output:
178:Full own-check suite re-run on the cured build: harness v1 16 PASS / 0 FAIL · node --check PASS.
249:Method: glyph-ink geometry from the build harness's character-width model (upper 0.72em · lower 0.56em · digit 0.62em · punct 0.28em) at the 360 px stage (360×640 portrait stage; basePx = 640 × baseSizePctOfStage 6.1% = 39.0 px; ink height = fontPx × 0.72 cap-height factor). The recreation lays words as inline spans in a centred, wrapping block, so the binding fit row per word is its unbreakable ink width at its LARGEST envelope state vs the 360 px container; line blocks wrap inside the container by construction (unwrapped widths printed for the record). Min-state ink height prices the persisted shrink words against the ~11 px legibility floor. Raw harness output filed in build-record.md.
312:| censusAnchorsMs.* | harness-side | the A11 checkpoints' evaluation instants (bound at the prewave cure; the harness derives every CP instant from these anchors + envelope expressions and prints the agreement checks) |
56:### T08 — Volume ramp: size and weight track vocal emphasis (48–58 s)

exec
/bin/bash -lc "command -v node chromium google-chrome
ls -l ../segment.mp4
rg -n 'guards\\.md|harness' payload-prewave-refire.txt | tail -18
rg --files --hidden /home/hatch/workspace/jobs | rg 'recreation/.+(guards\\.md|item-T197-observe-plan\\.md)|item-T197-observe-plan'" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
 succeeded in 834ms:
/usr/bin/node
-rw-rw---- 1 root nogroup 927929 Nov 18 08:39 ../segment.mp4
21:- FED: build-record.md · the CONFIG block of recreation.html · the technique's packet section · guards.md command list (what own-checks should exist) · **the item's A6 leg outputs (fit-table.md + config-census.md) — added 2026-11-16, recreation Cycle 024 Condense, on the Wave-21 pattern: prewave firings for T151, T153 and T154 all HOLDed or re-fired on feed completeness (the A6 files and packet section existed complete in the artifact directory but were not in the payload), the lane's recurring ASSERTED-CHECKS false-positive class. A payload lacking any FED element is a feeder defect, printed as such in the build record; a HOLD whose only named cure is feeding an already-filed FED element is disposed as a feed-completeness miss, with the miss recorded.**
40:- Exemplars: T15 attempt 1's build record (must FIRE-WAVE: checks recorded, deferral of the interlude named in its Plan) · a constructed record claiming a swap test with no harness output (must HOLD as ASSERTED-CHECKS) · a constructed record whose CONFIG is decorative over hard-coded phrases (must HOLD as HARDCODED-CONFIG).
57:## Segment binding (guards.md command 5)
66:CONFIG word count **21** (Line A 10 + Line B 11) vs built span count **21** — MATCH (harness, raw output below). No halt.
69:All executed by the node harness over the build's own inline script (buildStateAt). Final-build results (raw in §Own-checks):
83:## Own checks (§5 legs 1–3) — RAW harness output (A9.4)
85:### First draft — defect found + cured (raw excerpts, harness run 1)
95:### Final build — full own-check output (harness run 3, verbatim excerpts; complete output retained in the run's harness log)
142:### Leg 2 — purity (guards.md command 1)
154:1. **A11 mapping incomplete** — CP2b/CP3b/CP5 instants lacked CONFIG derivations; CP4's log showed only `softer`. Cure: `censusAnchorsMs` bound in CONFIG (the seven census twins as data); harness v2 derives every CP instant from the anchors + envelope expressions and prints the agreement checks (CP1 anchor == sizes peak expression 3000 · CP3 anchor == louder peak expression 7500 · CP4 anchor == louder decay-end 8500 · CP3b anchor ≥ shrink landing 7900 · CP5 landing < anchor < coreMs); CP4 now asserts BOTH `or` and `softer` at 8500. The CP3 timing swap re-proves the expression governs under swap (7500→5600). Raw harness-v2 output:
178:Full own-check suite re-run on the cured build: harness v1 16 PASS / 0 FAIL · node --check PASS.
249:Method: glyph-ink geometry from the build harness's character-width model (upper 0.72em · lower 0.56em · digit 0.62em · punct 0.28em) at the 360 px stage (360×640 portrait stage; basePx = 640 × baseSizePctOfStage 6.1% = 39.0 px; ink height = fontPx × 0.72 cap-height factor). The recreation lays words as inline spans in a centred, wrapping block, so the binding fit row per word is its unbreakable ink width at its LARGEST envelope state vs the 360 px container; line blocks wrap inside the container by construction (unwrapped widths printed for the record). Min-state ink height prices the persisted shrink words against the ~11 px legibility floor. Raw harness output filed in build-record.md.
312:| censusAnchorsMs.* | harness-side | the A11 checkpoints' evaluation instants (bound at the prewave cure; the harness derives every CP instant from these anchors + envelope expressions and prints the agreement checks) |
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/runs/2026-11-18-cycle-034-wave-31/item-T197-observe-plan.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md

exec
/bin/bash -lc 'r=/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation
cat "$r/guards/guards.md"
cat "$r/runs/2026-11-18-cycle-034-wave-31/item-T197-observe-plan.md"
rg --files "$r/runs" | rg '"'035|harness' | tail -30" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
 succeeded in 199ms:
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
# Item T197 — Observe + Plan · recreation Cycle 034 Wave 31 · PHASE A ONLY (A9.2 — no build written)

- **Item:** queue #93 · T197 — volume ramp: size and weight track vocal emphasis · Packet #11 ("Caption with Intention", FCB Chicago) technique P11-T08, window 48–58 s.
- **Artifact dir:** `hidden_files/study/recreations/T197-volume-ramp/` (+ `codex/`).
- **Tier at open:** DESCRIBED — OWED #93. No prior attempt (codex-observe finding 6 confirms: no scores.md, no lens returns, T199 sibling has no artifact dir).
- **Fleet law stated:** NO captions/subtitles in the build (§3.2/§6.5) — the ramped text IS the technique subject, not a caption.
- **Registration limits carried on the face:** trade-press re-upload, version fidelity UNVERIFIED · variable-font mechanism DEMONSTRATED as stated design (Roboto Flex grid @37.5 s), automatic real-time operation UNVERIFIED · easing curve UNMEASURED (packet + register) — the build's easing is a named CONFIG choice, never claimed as measured.

## §1 Observe

### Mechanics + sub-beats (census-verified firsthand; ASR word timings from packet transcript.json)
Plate: black, still (no plate motion in-window), thin cyan guide rules framing the text strip (still plate priced per A9.1 — motion here is typographic only). Two lines, each FULLY PRE-VISIBLE at base size/weight before it is spoken (pre-lighting rides along as surface; it is T196's claim, not T197's); spoken prefix flips white→yellow at each word onset (T195's surface, supporting state only).

- **Sub-beat 0 — header (48.0–48.24):** "Intonation" section card (bars icon + title). Window furniture, NOT the technique; excluded from the build (departure table).
- **Sub-beat 1 — Line A terms (speech 48.24–52.50):** "The system brings in varying type sizes, weights, and animation," — visible tail in-frame: "types sizes, weights and animation," (head off-frame left in the original's panning strip; pan = T195/T196 strip mechanics, not built).
  - **1a "sizes," (50.08–50.48):** size+weight ramp UP to ~1.35× / bold; peak state at census 51.0; DECAYS to base by 52.5 (transient).
  - **1b "weights" (50.76–51.58):** WEIGHT-ONLY ramp (~400→~800, size stays 1.0); bold at census 51.5; decays after.
  - **1c "animation," (52.14–52.50):** per-letter bounce flourish at line end (census 52.5, trailing letters raised) — census-observed, packet-unclaimed; NOT BUILT (§8 split, departure table).
- **Sub-beat 2 — Line B performance (speech 52.82–56.80):** "so you can feel when my voice gets louder or softer" — all words base until their events:
  - **2a "louder" (54.64–55.76):** continuous ramp UP to ~2.0× size + heavy weight; PEAK at census 55.5; DECAYS to base by 56.5 (transient).
  - **2b "or softer" (55.76–56.80):** shared ramp DOWN to ~0.45× size + light weight (~300); small state already present at census 56.0–56.5; PERSISTS as the line's end state through 57.5+ (no following word resets it; resets only at loop boundary).
- **Envelope shape as OBSERVED:** up-ramps and the weight ramp are transient (peak inside/just after the word, decay to base); the down-ramp lands and holds. Ramp up/down durations are CONFIG allocations from census brackets (louder: onset 54.64 → peak by 55.5 → base by 56.5; shrink: base at 55.5 → small by 56.0–56.5). **Easing UNMEASURED** — no frame-level size series was extracted; the claim is the bracketed states + ordering, per the register limit.

### Motion census (A10.3) — 21 frames @ 0.5 s, 48.0–58.0 s, `census/T197/` in this run dir
Extraction note: the platform write fault (TOOLS.md) zeroed several first-pass frames; every frame was retried until non-empty — all 21 frames are real extractions (sizes 23–63 KB). Per-instant findings (viewed firsthand: 48.0, 50.0, 51.0, 51.5, 52.5, 53.5, 54.5, 55.5, 56.5, 57.0 + the 4 packet evidence frames):
- 48.0 Intonation header card · 48.5–49.5 header→Line A transition, Line A pre-visible forming · 50.0 Line A full, all base, prefix yellow through "types" — sizes NOT yet enlarged (ramp starts inside its word) · 51.0 "sizes," at ~1.35× bold peak · 51.5 "weights" bold (weight-only), "sizes," back at base · 52.0–52.5 Line A fully yellow, all base size/weight; "animation" tail letters bounced up at 52.5 · 53.0–53.5 Line B pre-visible, all base, prefix through "feel" · 54.0–54.5 Line B all base, "louder" still white/unscaled · 55.0 ramp words still base (ev t055 form) · 55.5 "louder" at ~2.0× + heavy, yellow · 56.0 "or softer" already small (ev t056 form) · 56.5 "louder" back at base; "or softer" ~0.45× light, persists · 57.0–57.5 end state holds · 58.0 window closes on the held end state (next section begins 56.80 speech-wise; frame at 58.0 is the tail of the hold).

SHA-256 (full, per frame):
```
f1824a5b0db6c092a2eea0d3dfb6e8104aa1a80b2a91214bfc720d2697df0cbc  f-48.0.jpg
9b9cd7b9ef55b3728ad7ade2341a86544eb666cdde97075dbe25d94289a36b72  f-48.5.jpg
05346aa1fbc12fbee68a13e36b0146c32850fa9777eb6bd23ef275b6ffedc467  f-49.0.jpg
376811dfce205345132648de460b42f9f174ad9fad431f886f1ec3442c31f376  f-49.5.jpg
7f0458dd788115fdd140ec9dc22f224727e6b66dab8d3a54e1f6d054c3871f03  f-50.0.jpg
a404948c8cdf2f91a6b71bf5fec46ab70f2e6b5ce7d5962b06bcb702f250c468  f-50.5.jpg
177721b8d6bbe64a9971c1ed614892b51f33cb6bf034f18c1ae2bd720f0a1c1f  f-51.0.jpg
b843403250cb584812587062aca1b29757fe6ce1585264e3f7c205ca3fbd935a  f-51.5.jpg
d07e52bb07b899ca1d767d089b3cb6219b6af4b5ff39bda3675296c325316471  f-52.0.jpg
ca08f9a5b2d02d9c9cf1199281c41d2ad5bf79c7541551cbdfd8023aa5ba8deb  f-52.5.jpg
593ad5fca07b7ec33f4397aa3ace51981385063fa1cd1d5becda15a7861645f4  f-53.0.jpg
f32a03ca713e9ea3b1fb36e4ce5465c69efa3871de2eb783eadb6717527f0f6b  f-53.5.jpg
7cbdf4190228a0e7e76ae22f7b492d19eb5b4cf5126a287b34811876940703ce  f-54.0.jpg
87d08fe7597e1df70f0a724eb9100c437e71a544e11953898295a0eaff85c359  f-54.5.jpg
cf27c55c34ce077d37671e42fe5ec8c37b99962ce28c46db61cbda4a4a8470b4  f-55.0.jpg
bc8099f3ee8f2a0d9fb78e4020972975a69509c49490a1af757ab2c9cd45b174  f-55.5.jpg
1b3e65a97056a383a540cef8c5b7af9bd5a509474a8b1d8c60a0a4573fe261a8  f-56.0.jpg
dba187808c80faf4fdef72738613f19c9af9b38ff74aaa7453d6e36607e42c2c  f-56.5.jpg
c6afd6ca4bc8553e49f2645a8afbb1efb43a8c2e8d3ddeb37ca5baa5e946d328  f-57.0.jpg
bf82f78f80d993cd310f81aafd5214caffa538a44414986afb30e3725cfce010  f-57.5.jpg
10933033da126f50def3280892fc4866748ad4ab43d3adaf642fe0c3af4eb1ea  f-58.0.jpg
```
Source: `source.mp4` 113.734 s · 1920×1080 · 24 fps · 10,213,125 B (ffprobe, this run).

### Variables (§1.3)
Phrase text (both lines, per-word tokens) · per-word onset times · per-word size peak · per-word weight peak · ramp-up duration · ramp-down duration · persist flag · shared-envelope grouping (or+softer) · base size (one canonical unit: % of stage height) · base weight · easing name · plate color · guide-rule color/geometry · unspoken/spoken colors · line gap + exit duration · end hold · min-size floor.

### Consumer
Word-animation family surface: DLC / multilingual + Academy shorts' expressive-caption machinery — a parameterized emphasis envelope a production line can bind to any phrase's dynamics (the Caption-with-Intention channel "Font Size Range (% of screen height)" + variable weight, as data). Sibling techniques T195 (sync sweep) / T196 (pre-lighting) supply the surrounding states in their own items; T197's liftable unit is the envelope evaluator alone.

### codex-observe — CONFIRMED-WITH-GAPS (filed verbatim: artifact `codex/codex-observe.md`)
Firing note: first firing died on the Codex sandbox (bubblewrap `/tmp/.agents` panic, exit 101, empty redirect — write fault); the filed return is the second firing (`-s read-only`, one stream, stdout captured and filed verbatim via the file tool — deviation from the redirect form, machinery only, content verbatim). Dispositions — ALL APPLIED:
- G1 caption fragment vs narration: Observe logs the VISIBLE line ("types sizes, weights and animation," = tail of the ASR sentence) — done above; build CONFIG carries the full spoken sentence's words with the visible-window priced as a layout fact, not a text change.
- G2 onset conflation: speech onset / first change / peak / return / shrink onset+hold recorded separately — done in census findings (louder: onset 54.64 · peak 55.5 · base 56.5; shrink: onset ∈(55.5, 56.0) · landed by 56.5 · held ≥57.5).
- G3 peak ratios from T197's own window: sizes ~1.35× · louder ~2.0× · softer ~0.45× (visual estimates from census frames, printed as estimates).
- G4 T12 attempt-1 label corrected: five filed lenses, denominator 5 (75.4 stands).
- Sibling arithmetic recomputed by the audit and matched: T137 455/5 = 91.0 PASS · T12 a1 377/5 = 75.4 FAIL · T12 a2 435/5 = 87.0 PASS.

## §2 Plan

### Schedule basis + census-anchor mapping (A7 / A10.2)
**Schedule basis: segment-anchored.** Proposed §3 segment window: **source 47.5–58.5 s** (catalogue 48–58 ± 0.5 handles). Build timeline: segment-relative ms, build t=0 ≡ source 48.0 s (comparison clock maps segment currentTime 0.5 s → build 0; the −500 ms handle offset is a CONFIG key, per plan-review finding 3). Build duration 10,000 ms + endHoldMs.
Census anchors (source → build rel): sizes peak state 51.0 → 3000 (configured envelope peak endpoint 2480 ≡ source 50.48 — 520 ms before the census state, which sits inside the peak/decay window; printed per plan-review) · weights bold 51.5 → 3500 · Line A all-base + bounce 52.5 → 4500 · Line B base 54.5 → 6500 · louder peak 55.5 → 7500 · softer small 56.5 → 8500 · end state held 57.5 → 9500.

### Departure table (A10.2)
| Census/source fact | Build treatment | Reason |
|---|---|---|
| Strip pans left; Line A head off-frame | Static centered rows; full sentence visible | Pan is T195/T196 strip mechanics; T197's claim is the envelope (§8 split) |
| "animation," letter-bounce (52.5) | NOT BUILT | Census-observed, packet-unclaimed flourish; ornament split per §8, deferred to a later attempt |
| "Intonation" header card (48.0) | NOT BUILT | Section furniture, not the technique |
| T12 cure: action ≈⅓ of cycle | NOT ADOPTED | Segment-anchored timing governs; envelope action 50.1–56.8 s of the 10 s window is the source's own proportion |
| Easing curve | CONFIG `easingName:'easeInOut'` | Source easing UNMEASURED — a named choice, printed on the build's face, never claimed as measured |

### Parameter table (CONFIG — single envelope schema per A9.6 + plan-review finding 3)
One schema for every word: `{text, onsetMs, sizePeak, weightPeak, rampUpMs, rampDownMs, persist}` — no alternative "emphasis" form. Inert words carry sizePeak 1.0 / weightPeak = baseWeight (envelope mathematically inert, not a code branch).
Globals: `baseSizePctOfStage 6.1` (sole base-size unit) · `baseWeight 400` · `easingName 'easeInOut'` (UNMEASURED in source) · `plateColor #000000` · `guideColor #7fd4e6` · `guideInsetPct` (geometry as data) · `unspokenColor #f2f2f2` · `spokenColor #ffe600` · `fontStack` (variable-font stack, CONFIG) · `minSizePctOfStage 2.7` (legibility floor; if floor and ratio tolerance conflict at phone size the build prints a visible FIT-FAIL state — plan-review finding 2) · `lineExitMs 350` · `lineGapMs 320` · `endHoldMs 1800` · `segmentHandleOffsetMs -500`.
Line A words (onsetMs rel; speech = source − 48.0): The 240 · system 920 · brings 1140 · in 1380 · varying 1540 · type 1780 · **sizes, {2080, 1.35, 760, 400, 900, false}** · **weights {2760, 1.0, 800, 500, 900, false}** · and 3980 · animation, 4140 (all unlisted = inert).
Line B words: so 4820 · you 4920 · can 5040 · feel 5160 · when 5560 · my 5900 · voice 6100 · gets 6400 · **louder {6640, 2.0, 820, 860, 1000, false}** · **or {7760, 0.45, 300, shared-shrink}** · **softer {8400, 0.45, 300, shared-shrink}** — or+softer bind ONE shared shrink envelope (plan-review finding 3): visual onset 7760, rampMs 700, lands 8460 (source 56.46 — inside the census bracket "small by 56.0–56.5"), persist=true through end hold, resets at loop boundary. Visual envelope timing is separate from spoken-color timing (color flips at each word's own onset).
**Line ownership (plan-review finding 2, A5 Cure-2 analogue):** both lines may be pre-visible at baseline; only the OWNING line's envelopes animate. Line A release = max(speechEnd 4500, lastTransientEnd 4160) + lineExitMs 350 + lineGapMs 320 = **5170** — CONFLICT with Line B's first onset 4820: disposition — Line B's onsets are speech-anchored and cannot move; the ownership rule therefore gates ENVELOPES only, and Line A's exit is priced as a fade of Line A to baseline (it carries no active envelope after 4160), completing under Line B's inert head (4820–6640, no B envelope fires until louder at 6640 > A's release 5170 ✓). The build's phase machine must REJECT (clamp + print) any CONFIG whose next line's first envelope onset precedes the prior line's release. Within Line B, louder's decay and the shared shrink coexist lawfully (same owning line, census-verified coexistence).

### Construction choice + rejected alternatives
**Chosen:** one self-contained HTML; DOM word spans on a still black plate + CONFIG guide rules; a rAF clock evaluates each word's envelope from CONFIG and sets `font-size` (base × lerp(1, sizePeak, env)) + `font-variation-settings 'wght'` (lerp(baseWeight, weightPeak, env)) on a CONFIG variable-font stack. Inline spans reflow as a word grows — the original's neighbour-shift is font-metric reflow, reproduced by construction. **Priced risk (plan-review finding 1):** no webfont may be fetched (purity — zero external assets); if the playback stack lacks a variable font, weight renders stepped/static — Execute MUST capture rendered intermediate-weight evidence on the actual stack, and if only static faces exist, the build declares the fidelity limitation on its face and the continuous-weight claim prints UNVERIFIED on that stack.
Rejected: (a) CSS keyframes per word — envelope becomes CSS literals, fails A9.6, swap cannot retime; (b) canvas text — loses variable-font axis + DOM reflow; (c) transform scale() — no reflow, no weight axis, contradicts the observed font-metric mechanism; (d) panning strip / header / letter-bounce — sibling mechanics + unclaimed ornament (§8).

### Verification plan
- **Swap test:** different phrase (e.g. "watch the quiet part grow still" with its own envelope set: grow→1.7×/780, still→0.5×/300 persist) · one timing (louder onsetMs 6640→5000 AND rampUpMs 860→500 — CP3's evaluation instant must move with the CONFIG expression, A11) · one palette (spokenColor #ffe600→#ff9f1c, guideColor #7fd4e6→#3a86ff). Technique must still read.
- **Purity:** greps for `segment.mp4`, `source.mp4`, `t050`/`t055`/`t056`, `<video`, `<img` in recreation.html — zero hits allowed; asset inventory = zero external assets (code only).
- **A6 legs** pre-wave: fit-table.md + config-census.md filed in the artifact dir.
- **Comparison sync:** comparison.html shared controls; recreation clock slaved to segment currentTime with `segmentHandleOffsetMs -500` applied; labels ORIGINAL — Caption with Intention @ 48–58 s · RECREATION — T197 volume ramp, parameterized; phone-width stacking verified.
- **Rendered-weight evidence (plan-review finding 1):** frame captures at weights-envelope mid-ramp on the actual playback stack filed in build-record.

### Census-checkpoint → assertion mapping (A11) — CONFIG-derived instants + source-time twins
| CP | Checkpoint (census) | Assertion | CONFIG expression → instant |
|---|---|---|---|
| CP1 | sizes peak (51.0) | size ratio ∈ [1.28, 1.42] AND wght ≥ 700 | onset+rampUp = 2080+400 = **2480** (≡ source 50.48; census state 51.0 sits in peak/decay window — mapping printed) |
| CP2 | weights weight-only (51.5) | size ∈ [0.97, 1.03] AND wght ≥ 740 | 2760+500 = **3260** |
| CP3 | louder peak (55.5) | size ∈ [1.90, 2.10] AND wght ≥ 780 (heavy-at-peak, plan-review) | 6640+860 = **7500** |
| CP4 | louder decayed + shrink landed (56.5) | louder size ≤ 1.08 AND or/softer size ∈ [0.40, 0.50] AND wght ≤ 340 | shared shrink onset+ramp = 7760+700 = 8460; assertion at **8560** (post-landing, source-anchored twin) |
| CP5 | shrink persists (57.5) | softer size ∈ [0.40, 0.50] at end hold | **9800** (inside endHold) |
A timing swap (louder onset/rampUp) must move CP3's instant via the same expression — hardcoded 7500 in a check = ASSERTED-CHECKS at prewave.

### Failure-point evaluation + plateau priced in Plan (A2)
Family record: T137 PASS 91.0 (min reusability 80 — emphasis-targeting semantics) · T12 a1 FAIL 75.4 (min readability 62) → a2 PASS 87.0 (min reusability 72). Priced failure points for T197: (1) **weight-beat disappearance** on a static-font stack (finding 1 — the attempt's likeliest motion/readability hit); (2) **reflow wrap** at louder 2.0× (fit leg owns it; single-line rows + measured fit); (3) **down-ramp legibility** — 0.45× is the source's own ratio; fidelity vs readability conflict is real and priced, floor key + visible FIT-FAIL is the guard, not a ratio change; (4) **phrase overlap** — cured by the ownership predicate above, envelopes-only gating with the clamp printed; (5) **render-proof limitation** — no browser binary guarantee in this seat (T137 printed PIXEL-UNVERIFIED); if playback capture is unavailable, scores print as source/logic-level with the limitation on the face. **Plateau prediction:** predicted minimum lens = **reusability ~82** (per-word envelope objects answer T137's targeting cure, but envelope semantics are specimen-shaped until the swap proves them); forecast motion 88 · timing 92 · purity 98 · reusability 82 · readability 90 → avg 90.0, min 82 — clears the bar (≥85 / ≥70) IF the weight evidence and CP4 cure land; timing or readability becomes the minimum if either fails (plan-review finding 4, adopted).

### Execute checklist (§3 — for Phase B, NOT run in Phase A)
1. Cut segment 47.5–58.5 s from source.mp4 → artifact `segment.mp4`, re-encoded for browser playback (evidence only).
2. Build `recreation.html` from the parameter table above (count assertion A9.3: CONFIG word count vs built span count printed in build-record, halt on mismatch).
3. Build `comparison.html` (shared controls, −500 ms handle offset, labels, phone stacking).
4. Self-verify legs 1–3 (swap · purity greps + inventory · comparison check) with RAW harness output filed in build-record from the first draft (A9.4); A6 legs; A11 assertions executed at CONFIG-derived instants; rendered-weight evidence captured.
5. jev-prewave with A6 outputs in payload (A10.1) → five-lens Codex wave → scores.md (avg ≥85 AND min ≥70 = PASS).

### Verify checklist (per deliverable property)
Swap values altered + result recorded · purity grep patterns run, hits = 0 · asset inventory complete · comparison both sides play from one control, durations matched · CP1–CP5 assertions pass at CONFIG-derived instants · weight mid-ramp rendered evidence on file · five lens returns filed verbatim BEFORE the verdict is computed (§6.3).

### codex-plan-review — REVISE (filed verbatim: artifact `codex/codex-plan-review.md`) — dispositions, ALL APPLIED above
1. Rendered-weight evidence required; static fallback = declared limitation, continuous-weight claim UNVERIFIED on that stack → Execute checklist step 4 + Verify checklist. **APPLIED.**
2. Ownership as render rules: release derived from speech/transient completion + exit + gap; clamp-and-print on violation; shrink resets at loop boundary; inert-neighbour baseline + FIT-FAIL visibility → ownership paragraph + floor rule. **APPLIED** (with the priced resolution that B's speech onsets are segment-anchored: gating binds envelopes, whose first B onset 6640 > A release 5170 ✓).
3. Single schema, canonical unit, handle offset as CONFIG, shared or+softer envelope, CP4 re-timed, CP1 mapping printed, source-time twin assertions, heavier-at-peak check in CP3. **APPLIED.**
4. Forecast stands conditionally (avg 90.0 / min 82); timing/readability named as alternate minima. **APPLIED** in plateau pricing.
5. Size discipline PASS — no action.

## Phase A close
Observe + Plan complete; both Codex calls fired and filed verbatim with dispositions applied. NO HTML built (A9.2). Remaining for the wave seat: jev-observe-exit / jev-plan-exit firings are the wave record's gate calls (not charged to this per-item Phase A task); Phase B (Execute) opens only after those returns are filed and consumed in the wave's §2b.
/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/runs/2026-11-18-cycle-035-wave-32/payload-plan-exit.txt
/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/runs/2026-11-18-cycle-035-wave-32/payload-observe-exit.txt
/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/runs/2026-11-18-cycle-035-wave-32/jev-plan-exit-return.md
/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/runs/2026-11-18-cycle-035-wave-32/jev-observe-exit-return.md
/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/runs/2026-11-18-cycle-035-wave-32/RUN.md
/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/runs/2026-11-18-cycle-035-wave-32/AGENTS.md

exec
/bin/bash -lc 'r=/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation
cat "$r/guards/guard-measured-fit.md"
rg -n '"'T197|57.167' \""'$r/runs/2026-11-18-cycle-035-wave-32/RUN.md"
node <<'"'JS'
const fs=require('fs'), vm=require('vm'), cp=require('child_process');
const get=f=>fs.readFileSync('../'+f+'.html','utf8').match(/<script>([\\s\\S]*?)<\\/script>/)[1];
for(const f of ['recreation','comparison']) console.log(f,cp.spawnSync(process.execPath,['--check'],{input:get(f)}).status);
const x={module:{exports:{}}}; vm.runInNewContext(get('recreation'),x);
const {CONFIG:c,buildStateAt,resolveEnv}=x.module.exports;
for(const [k,t] of Object.entries(c.censusAnchorsMs)){const words=buildStateAt(c,t).lines.flatMap(l=>l.words);console.log(k,t,words.filter(w=>['sizes,','weights','louder','or','softer'].includes(w.text)).map(w=>[w.text,w.sizeRatio,w.weight]));}
const d=JSON.parse(JSON.stringify(c)), w=d.lines[1].words.find(w=>w.text==='louder'); w.envOnsetMs=5300;w.rampUpMs=300;console.log('swap',[5600,7500].map(t=>buildStateAt(d,t).lines[1].words[8]));
console.log('counts',c.lines.map(l=>l.words.length));
const H=640, f=H*.061, width=360-2*.02*360;
for(const t of [0,3000,7500,8500]){
 for(const [i,l] of buildStateAt(c,t).lines.entries()){
 if("'!l.opacity)continue;
 const rows=[[]];let used=0;
 for(const w of l.words){
 const ink=[...w.text].reduce((n,ch)=>n+(/[A-Z]/.test(ch)?.72:/[a-z]/.test(ch)?.56:.28),0)*f*w.sizeRatio;
 if(used+ink>width){rows.push([]);used=0;}
 rows.at(-1).push(w.text);used+=ink;
 }
 console.log(t,i,JSON.stringify(rows),H*c.lineTopPctOfStage[i]/100+rows.length*f*1.25);
 }
}
JS
rg -ni '"'segment\\.mp4|source\\.mp4|<video|<img|t050|t055|t056|url\\(' ../recreation.html
sha256sum ../segment.mp4" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
 succeeded in 1500ms:
cat: /home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/guards/guard-measured-fit.md: No such file or directory
rg: /home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/runs/2026-11-18-cycle-035-wave-32/RUN.md: IO error for operation on /home/hatch/workspace/jobs/sync-staging/study-jobs/recreation/runs/2026-11-18-cycle-035-wave-32/RUN.md: No such file or directory (os error 2)
recreation 0
comparison 0
sizesPeak 3000 [
  [ 'sizes,', 1.35, 760 ],
  [ 'weights', 1, 584 ],
  [ 'louder', 1, 400 ],
  [ 'or', 1, 400 ],
  [ 'softer', 1, 400 ]
]
weightsBold 3500 [
  [ 'sizes,', 1.1382716049382715, 542 ],
  [ 'weights', 1, 743 ],
  [ 'louder', 1, 400 ],
  [ 'or', 1, 400 ],
  [ 'softer', 1, 400 ]
]
louderBase 7000 [
  [ 'sizes,', 1, 400 ],
  [ 'weights', 1, 400 ],
  [ 'louder', 1, 400 ],
  [ 'or', 1, 400 ],
  [ 'softer', 1, 400 ]
]
louderPeak 7500 [
  [ 'sizes,', 1, 400 ],
  [ 'weights', 1, 400 ],
  [ 'louder', 2, 820 ],
  [ 'or', 1, 400 ],
  [ 'softer', 1, 400 ]
]
shrinkSmall 8000 [
  [ 'sizes,', 1, 400 ],
  [ 'weights', 1, 400 ],
  [ 'louder', 1.5, 610 ],
  [ 'or', 0.44999999999999996, 300 ],
  [ 'softer', 0.44999999999999996, 300 ]
]
shrinkLanded 8500 [
  [ 'sizes,', 1, 400 ],
  [ 'weights', 1, 400 ],
  [ 'louder', 1, 400 ],
  [ 'or', 0.44999999999999996, 300 ],
  [ 'softer', 0.44999999999999996, 300 ]
]
shrinkPersist 9500 [
  [ 'sizes,', 1, 400 ],
  [ 'weights', 1, 400 ],
  [ 'louder', 1, 400 ],
  [ 'or', 0.44999999999999996, 300 ],
  [ 'softer', 0.44999999999999996, 300 ]
]
swap [
  {
    text: 'louder',
    env: 1,
    sizeRatio: 2,
    sizePctOfStage: 12.2,
    weight: 820,
    spoken: false
  },
  {
    text: 'louder',
    env: 0,
    sizeRatio: 1,
    sizePctOfStage: 6.1,
    weight: 400,
    spoken: true
  }
]
counts [ 10, 11 ]
0 0 [["The","system","brings"],["in","varying","type"],["sizes,","weights","and"],["animation,"]] 387.2
0 1 [["so","you","can","feel"],["when","my","voice","gets"],["louder","or","softer"]] 504.79999999999995
3000 0 [["The","system","brings"],["in","varying","type"],["sizes,","weights"],["and","animation,"]] 387.2
3000 1 [["so","you","can","feel"],["when","my","voice","gets"],["louder","or","softer"]] 504.79999999999995
7500 1 [["so","you","can","feel"],["when","my","voice","gets"],["louder","or"],["softer"]] 553.5999999999999
8500 1 [["so","you","can","feel"],["when","my","voice","gets"],["louder","or","softer"]] 504.79999999999995
899128ba75b34d8c62489bc328f0d6bc7cdf573e632adddc49ac100af39456c6  ../segment.mp4

exec
/bin/bash -lc 'p=/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation
ls -ld "$p" /home/hatch/workspace/jobs/sync-staging/study-jobs/recreation
rg --files --hidden /home/hatch/workspace/jobs/sync-staging/study-jobs/recreation "$p" | rg '"'guard-measured-fit\\.md|035.*RUN\\.md'
nl -ba ../plan-amendment-cycle035.md | sed -n '16,33p'
rg -n '"'^### T08'"' ../../../video-digests/2026-11-17-lia-caption-with-intention/digest.md
rg -n 'PASS' ../build-record.md | awk -F: '"'$1>=48 && $1<=89'"' | wc -l" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
 succeeded in 291ms:
ls: cannot access '/home/hatch/workspace/jobs/sync-staging/study-jobs/recreation': No such file or directory
drwxrws--- 1 root nogroup 140 Nov 14 14:40 /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation
rg: /home/hatch/workspace/jobs/sync-staging/study-jobs/recreation: No such file or directory (os error 2)
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/guards/guard-measured-fit.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-035-wave-32/RUN.md
    16	| shared shrink (`or`+`softer`) | onset 7760, rampMs 700 (lands 8460) | **`envOnsetMs` 7560, rampMs 340 (lands 7900 ≡ 55.9 s)** | Filed form is 240 ms into 700 ms at build 8000 (source 56.0) where the census says ALREADY SMALL. Amended: env(8000)=1 → size 0.45, wght 300 ✓. Census bracket honoured: base at 55.5 (env(7500)=0, shrink not started) · small by 56.0–56.5 ✓. |
    17	
    18	**CP table as amended (A11 — checkpoint · assertion · CONFIG expression → instant · expected result):**
    19	
    20	| CP | Twin (build ms) | Assertion | CONFIG expression | Expected |
    21	|---|---|---|---|---|
    22	| CP1 | **3000** | sizes size ∈ [1.28, 1.42] AND wght ≥ 700 | envOnset+rampUp = 2080+920 = 3000 | size 1.35, wght 760 → PASS |
    23	| CP2 | **3500** | weights size ∈ [0.97, 1.03] AND wght ≥ 740 | twin-anchored (source state); envelope value derived from onset 2760 + rampUp 500 + decay position | size 1.00, wght ≈743 → PASS |
    24	| CP2b | **7000** | louder size ∈ [0.97, 1.03] AND wght ∈ [380, 420] (BASE at 55.0) | envOnset 7300 not yet reached | size 1.00, wght 400 → PASS |
    25	| CP3 | **7500** | louder size ∈ [1.90, 2.10] AND wght ≥ 780 | envOnset+rampUp = 7300+200 = 7500 | size 2.00, wght 820 → PASS |
    26	| CP3b | **8000** | or/softer size ∈ [0.40, 0.50] AND wght ≤ 340 (ALREADY SMALL at 56.0) | shrink envOnset+ramp = 7560+340 = 7900 ≤ 8000 | size 0.45, wght 300 → PASS |
    27	| CP4 | **8500** | louder size ≤ 1.08 AND or/softer size ∈ [0.40, 0.50] AND wght ≤ 340 | louder decay end 7500+1000 = 8500; shrink persist | louder 1.00 · shrink 0.45/300 → PASS |
    28	| CP5 | **9500** | softer size ∈ [0.40, 0.50] at end hold | persist envelope, t inside core | size 0.45, wght 300 → PASS |
    29	
    30	A timing swap must move CP3's instant via the same expression (envOnset+rampUp) — see §D.
    31	
    32	## B. Comparison policy (gate charge 2 — the 10,000 + 1,800 vs 11,000 reconciliation)
    33	
56:### T08 — Volume ramp: size and weight track vocal emphasis (48–58 s)
16

exec
/bin/bash -lc 'p=/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation
nl -ba "$p/guards/guard-measured-fit.md" | head -100
rg -n '"'T197|57.167' \""'$p/runs/2026-11-18-cycle-035-wave-32/RUN.md"' in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T197-volume-ramp/codex
 succeeded in 308ms:
     1	# guard-measured-fit — the measured-fit leg (recreation + practice)
     2	
     3	_Built 2026-11-15 on HQ's charge (owed checks, 2026-11-15 ~08:02 EST), from the candidate spec filed in recreation Cycle-007 Wave-5's Condense and applied ad hoc since. This file is the leg's standing definition; before this build the leg existed only as candidacy text inside RUN records (Waves 5–6) and as a builder-side instrument — never as a guard with a call point. It owns ONE defect class: readability failures whose mechanism is **fit asserted, not measured** (readability stuck/under-floor in Waves 2, 3, 4, 5 and again in Wave 10 — T54 density, T57 attribution typography). It does NOT own timing anchors, density judgment, or any content-level failure; those classes stay with their own guards._
     4	
     5	## What the leg checks (per item, on the final recreation.html)
     6	For EVERY text element that carries subject content (titles, labels, captions-in-scene, cards, marquees, counters):
     7	1. **A measurement row exists.** The item's build record contains a fit table with one row per subject text element: element id · container (box/strip/line) · MEASURED ink bounds after fitting (glyph ink height and width, from the build harness's geometry measurement at the 360 px stage) · container bounds · margin on the binding side. A text element with no row is a HIT.
     8	2. **Fit is measured, never formula-claimed.** A row whose bounds are derived from the fitting formula's own assertion (font size × assumed factor) rather than from a post-fit measurement of the rendered geometry is a HIT — the formula is the claim, not the evidence (founding instances: T20's glyph-height overstatement, ink at 76% of claimed cell pitch; T19's floored 11 px phrase in a box that could not hold it; T57's attribution lines).
     9	3. **Legibility floor.** Measured subject-text ink height below ~11 px at the 360 px stage width is a HIT, whatever the formula claimed.
    10	4. **Hierarchy is measured too.** Where the design claims an intensity/size hierarchy between neighbouring text elements, the rows must show the measured ratio; a hue-only hierarchy against near-equal measured sizes is a HIT (T20's neighbour-window failure).
    11	
    12	## Output form (filed per item, pre-wave)
    13	`fit-table.md` in the item's artifact directory: the full row set + a HIT list (empty = PASS for this leg). The wave's RUN cites the table's path + hit count per item. The leg's verdict is ADVISORY (owner's 2026-11-14 ruling): hits are priced into the build before scoring where the builder can cure them; hits carried into the scoring wave are printed in the RUN with their disposition. What is NOT advisory is the firing: a wave whose record lacks the fit table for any item prints INCOMPLETE.
    14	
    15	## Call point
    16	Pre-wave, per item, after the build and BEFORE the five-lens scoring wave (wired into recreation INSTRUCTION Amendment A6 and practice INSTRUCTION Amendment A-C008 — the legs run before scoring, not after). Practice re-attempts fire the same leg on the new attempt's file.
    17	
    18	## Scope honesty
    19	This leg proves text fits its container at phone width, measured. It does not prove the text is the right text, the right density, or readable in motion — timing, density judgment, and content stay with the scoring wave and their own guards.
    20	
    21	## Firing record
    22	- 2026-11-15: BUILT (this file). First firing owed: the next recreation wave + the next practice wave, unconditionally.
5:Pre-action judgment: (1) objective — complete Wave 31 under the A8 completion form: consume Cycle 034's filed Phase A whole (five item Observe+Plan records + per-item codex-observe + codex-plan-review returns), fire the two Plan-close gates that never fired, write the §2b dispositions, then carry queue #89 T190 · #90 T192 · #91 T195 · #92 T196 · #93 T197 (all Packet #11, "Caption with Intention") to scored five-lens verdicts on builds executed from the filed plans. (2) Forward movement — Wave 31 stopped at the Plan-close gates and left five fully-planned first attempts unbuilt and the refilled pool (13 owed, #89–#101) unconsumed; this wave is the named resumption on Cycle 034's own close face. (3) Cost to owner — none; no ask, no schedule change. (4) Why now — scheduled firing; A8 makes the completing cycle the next cycle, and queue order is the only triage (A3). (5) Body-write — this RUN.md, five artifact directories' builds + records under `hidden_files/study/recreations/`, HQ.json skeleton→closed entry (same id `rec-2026-11-18-wave32`), heartbeat skeleton→closed beat 112, verdict-history ×5 + the T102 transposition correction (§0b.3), QUEUE.md rows #89–#93 entered + WAVE 32 footer. (6) Order check — this record's §1 prices each unfinished item's on-disk state BEFORE any firing; the wave-level gates fire and are consumed in §2b BEFORE Execute opens (A9.2); per-item Execute+Verify fans out as five parallel agent tasks (§0 fan-out form) only after §2b stands.
20:2. Catalogue register (style-library Cycle-019 state, as read by Cycle 034 and re-confirmed against QUEUE/TECHNIQUES this run): 223 techniques · OWED 13 at queue #89–#101 (T190 · T192 · T195 · T196 · T197 · T199 · T204 · T205 · T208 · T210 · T212 · T218 · T219). This wave's five completion items occupy all five §0 slots; the remaining 8 owed items (#94–#101) stand for Waves 33–34.
29:- **T197 — volume ramp** (`T197-volume-ramp/`): same shape. codex-observe.md (5,405 B, CONFIRMED-WITH-GAPS) + codex-plan-review.md (5,583 B, REVISE applied) + payloads (payload-plan.txt naming variant, same content role). No build artifacts. Item record 20,688 chars.
33:A1.2 runtime text sampling BINDS T192 (its letterforms are sampled from config-rendered text — the lawful construction, purity-100 precedent) and does not bind the DOM-text items (T190/T195/T196/T197 render text as DOM, where no sampling exists to trace). A5's flow-field model + Owner Cures 1–2 BIND T192 only (the wave's sole particle field): reserve fraction never borrowed, borrow-flag intensity separation, phase exclusivity. For the DOM items the Cures' underlying defect class is priced as state-style separation (T195/T196: unspoken-vs-spoken contrast floor) and single-slot phase exclusivity (T190's caption slot, T196's card slot, T197's line-ownership rule). A9.1 plate construction: T197 still plate (any background motion exceeds the technique); T192's field is the A5 flow field, not a plate. A9.6: every subject-shaping value is CONFIG data in all five plans. A11: every item record maps census checkpoints to executable assertions with CONFIG-derived instants.
40:- **T197:** DOM word spans, still plate (A9.1); rAF envelope evaluator driving font-size × variable-font `wght` from a per-word CONFIG envelope (A9.6); one canonical envelope schema; Line A release derived (max(speech end, transient end) + exit + gap = 5,170 ms) with clamp-and-print; segment 47.5–58.5 s, build t=0 ≡ source 48.0 s, comparison handle offset (−500 ms) as CONFIG. Forecast avg 90.0, reusability ~82 predicted minimum. Schedule basis: segment-anchored.
42:- **Per-item codex-plan-review (consumed, filed in each artifact's `codex/codex-plan-review.md`):** T190 REVISE (4 groups, all applied) · T192 REVISE (5 findings, all applied) · T195 REVISE (4 applied + 1 sub-point rebutted with ASR citation) · T196 REVISE (5 cure groups, all applied) · T197 REVISE (4 findings, all applied). No plan stands unrevised-into-Execute: each Cycle-034 item record carries the revised Plan as its Execute authority, and this cycle does not re-author any plan (A8); a plan found unexecutable at Execute is recorded against the plan.
47:**jev-observe-exit: ADVANCE-WITH-GAPS ×5** (T190 · T192 · T195 · T196 · T197 — no item held). Leg scores: queue/prior/mechanics/variables/guidance/consumer = 1.0 across except mechanics 0.5 (T192 · T195 · T197) and prior-scores 0.5 (T195). Disposition: **APPLIED as charges into Execute** — every gap names a bounded act already inside or beside the filed plans: T190 retain the §3 frame-resolution check over 8.5–10.0 s before fixing `scalePeakMs` + the T102 baseline reconciliation (seat act at close, §9) · T192 record playback evidence for formation + exit, D2 release stays an explicit allocation, census-mapping reconciliation (priced by plan-exit below) · T195 G-µ carried as the filed prerequisite to finalizing the sweep (already the plan's own Execute step 1) + sibling-cure dispositions recorded with T03's practice result UNVERIFIED-labeled · T196 D2 card-2 frame-measurement refresh in the 49–50 s bracket before freezing its visual anchor, D3 stays an explicit ASR approximation, CP1 logical-vs-painted distinction preserved · T197 reconcile the hold-through-57.5–58.0 claim against T196's next-header onset at 57.167 s (playback across the boundary in Execute), easing stays a labeled CONFIG choice, continuous weight conditional on rendered intermediate-weight evidence. The return's Limits note (cycle-035 §1 census wording: 94 total / 88 scored / T19 ambiguous, UNVERIFIED from the feed) is accepted — the seat cures it at Verify with a mechanical recount printed in §5.
49:**jev-plan-exit: T190 REVISE · T192 REVISE · T195 RETURN-TO-OBSERVE · T196 REVISE · T197 REVISE** — primary class UNBOUND-SCHEDULE ×4 (the A10.2 census-anchor defect class) + RETURN-TO-OBSERVE-ROOT (T195). Disposition: **APPLIED in full, all five items.** Rationale: every finding is a concrete, mechanically checkable contradiction between an item's own §1 census anchors and its §2 schedule/assertions — the exact defect class Amendments A10.2/A11 were promoted to catch, and this job's record (Wave 22: T160 timing 68 · T162 timing 64 on allocation-vs-census schedules) prices building on an unbound schedule as a spent wave. Setting the verdicts aside would repeat that spend with the defect named in advance. Application form: each item's builder task carries the gate's amendment text verbatim (below); the amendment is filed as the item's `plan-amendment-cycle035.md` in its artifact directory BEFORE any build script is written, and the build executes the filed Plan AS AMENDED. The Cycle-034 item records are not retro-edited (A8 consumption stands); a plan found unexecutable even as amended is recorded against the plan. T195's RETURN-TO-OBSERVE is cured by its own prescribed route: the G-µ 24 fps micro-census (41.50–42.00 s + 46.00–46.80 s) is executed and filed as an Observe addendum in its build-record BEFORE the sweep function is finalized, resolving direction/lag/lift from evidence or recording a bounded approximation, and its schedule/assertions are rebuilt per the amendment — Observe work inside this completing cycle, not a new cycle.
56:- **T197:** envelopes evaluate at the actual source twins (CP1 peak at the 3,000 ms census instant · CP2 at 3,500 ms · `louder` base at 7,000 ms · shared shrink already small at 8,000 ms · CP4 8,500 ms · CP5 9,500 ms) with the expected result stated at each; reconcile the 10,000 ms core + 1,800 ms end hold against the 11,000 ms comparison clip (10,000 + 1,800 = 11,800 — a defined comparison policy is required); choose ONE outcome for the `louder` onset 5,000 ms vs Line A release 5,170 ms conflict, separate the intentional-violation test from a valid reuse swap, and provide a complete replacement envelope table with expected outputs; bind `guideInsetPct` + `fontStack` defaults; define a canonical reference to the shared shrink envelope; record the last visible ramp state across the 57.167 s boundary (cross-item charge shared with T196's window).

codex
**HOLD · ASSERTED-CHECKS — T197 attempt 1, Cycle 035 Wave 32 re-fire.** The seven amended A11 checkpoints have recorded results, including the CP3 timing swap. The A6 fit record still reports zero standalone hits using assumed ink dimensions where the guard requires post-fit measurements.

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.40 |
| Fidelity-plan honesty | 0.90 |

1. **Parameterization.** The inline evaluator consumes CONFIG for word content, envelope timing, size, weight, and easing. `or` and `softer` resolve one shared envelope. I counted 10 + 11 CONFIG words, reproduced 21 evaluator entries, and confirmed that layout reads `lineHeight` from CONFIG and comparison reads the offset and core duration from the recreation. This supports the census cure at the code level. [recreation.html, CONFIG](../recreation.html#L20) · [recreation.html, layout and span creation](../recreation.html#L179) · [comparison.html, clock](../comparison.html#L16) · [config-census.md, application sites](../config-census.md#L5)

2. **Purity pre-check.** The recreation creates word spans from CONFIG on a still plate. A fresh scan found zero matches for the recorded specimen filenames, media tags, frame markers, or `url(`. The comparison references `segment.mp4` on the labeled original side. All three artifact hashes matched the final build record. [recreation.html, span creation](../recreation.html#L195) · [comparison.html, original](../comparison.html#L6) · [build-record.md, final hashes](../build-record.md#L134)

3. **Own checks.** I reproduced the states at all seven amended CONFIG anchors and checked both inline scripts with `node --check`. CP4 gave `louder` at 1.00×/400 and both shrink words at 0.45×/300. Changing the `louder` onset and rise to 5300 and 300 ms moved the peak to 5600 ms at 2.00×/820, with the old 7500 ms instant back at 1.00×/400. The re-fire record covers the prior checkpoint gaps against the amended binding table. [plan-amendment-cycle035.md, §A](../plan-amendment-cycle035.md#L18) · [build-record.md, harness v2](../build-record.md#L105)

   **Open HOLD finding.** The 21 word rows in the fit table use character-width coefficients and a `fontPx × 0.72` height model. A6 explicitly counts assumed-factor rows as hits. The table also tests words individually for width and leaves wrapped block bounds unmeasured. Using its own width model, even with spaces omitted, Line A at CP1 takes four rows inside the padded 345.6 px box. Its modeled line boxes extend to about y=387 px, while Line B starts at y=358.4 px. That flags a region to measure for overlap. The comparison’s ≈4.0 px shrink ink is a model estimate, and its exact parity claim uses the recreation’s typography assumptions for the source. **Cure:** record post-fit ink and container bounds for both wrapped blocks and their words on the final 360 px stage, including the `sizes,` and `louder` peaks and the persisted shrink. Revise the hit list with the measured results and carry any remaining comparison hit with its documented disposition. [fit-table.md, method and rows](../fit-table.md#L3) · [fit-table.md, comparison disposition](../fit-table.md#L35) · [recreation.html, stage CSS](../recreation.html#L5) · [measured-fit guard, checks 1–4](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/guards/guard-measured-fit.md:5)

4. **Fidelity-plan honesty.** The record names the header, pan, letter bounce, and vertical-grid omissions, carries the unmeasured easing and pixel-unverified weight limits, and documents the color departure at 55.0 s. It resolves the earlier hold-through-57.5 s wording by recording the source’s 57.167 s section change and the recreation’s deliberate continuation of the shrink state. [build-record.md, construction and departures](../build-record.md#L11) · [build-record.md, boundary and weight evidence](../build-record.md#L21) · [build-record.md, color departure](../build-record.md#L132)

**Limits** — Playback pixels, rendered ink bounds, source-side text-size parity, and continuous weight on the playback font stack remain unverified. Checkpoint reproduction used the final inline evaluator. The original builder harness source was unavailable for inspection.

**Body-write: none (read-only run)**
tokens used
61,459
**HOLD · ASSERTED-CHECKS — T197 attempt 1, Cycle 035 Wave 32 re-fire.** The seven amended A11 checkpoints have recorded results, including the CP3 timing swap. The A6 fit record still reports zero standalone hits using assumed ink dimensions where the guard requires post-fit measurements.

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.40 |
| Fidelity-plan honesty | 0.90 |

1. **Parameterization.** The inline evaluator consumes CONFIG for word content, envelope timing, size, weight, and easing. `or` and `softer` resolve one shared envelope. I counted 10 + 11 CONFIG words, reproduced 21 evaluator entries, and confirmed that layout reads `lineHeight` from CONFIG and comparison reads the offset and core duration from the recreation. This supports the census cure at the code level. [recreation.html, CONFIG](../recreation.html#L20) · [recreation.html, layout and span creation](../recreation.html#L179) · [comparison.html, clock](../comparison.html#L16) · [config-census.md, application sites](../config-census.md#L5)

2. **Purity pre-check.** The recreation creates word spans from CONFIG on a still plate. A fresh scan found zero matches for the recorded specimen filenames, media tags, frame markers, or `url(`. The comparison references `segment.mp4` on the labeled original side. All three artifact hashes matched the final build record. [recreation.html, span creation](../recreation.html#L195) · [comparison.html, original](../comparison.html#L6) · [build-record.md, final hashes](../build-record.md#L134)

3. **Own checks.** I reproduced the states at all seven amended CONFIG anchors and checked both inline scripts with `node --check`. CP4 gave `louder` at 1.00×/400 and both shrink words at 0.45×/300. Changing the `louder` onset and rise to 5300 and 300 ms moved the peak to 5600 ms at 2.00×/820, with the old 7500 ms instant back at 1.00×/400. The re-fire record covers the prior checkpoint gaps against the amended binding table. [plan-amendment-cycle035.md, §A](../plan-amendment-cycle035.md#L18) · [build-record.md, harness v2](../build-record.md#L105)

   **Open HOLD finding.** The 21 word rows in the fit table use character-width coefficients and a `fontPx × 0.72` height model. A6 explicitly counts assumed-factor rows as hits. The table also tests words individually for width and leaves wrapped block bounds unmeasured. Using its own width model, even with spaces omitted, Line A at CP1 takes four rows inside the padded 345.6 px box. Its modeled line boxes extend to about y=387 px, while Line B starts at y=358.4 px. That flags a region to measure for overlap. The comparison’s ≈4.0 px shrink ink is a model estimate, and its exact parity claim uses the recreation’s typography assumptions for the source. **Cure:** record post-fit ink and container bounds for both wrapped blocks and their words on the final 360 px stage, including the `sizes,` and `louder` peaks and the persisted shrink. Revise the hit list with the measured results and carry any remaining comparison hit with its documented disposition. [fit-table.md, method and rows](../fit-table.md#L3) · [fit-table.md, comparison disposition](../fit-table.md#L35) · [recreation.html, stage CSS](../recreation.html#L5) · [measured-fit guard, checks 1–4](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/guards/guard-measured-fit.md:5)

4. **Fidelity-plan honesty.** The record names the header, pan, letter bounce, and vertical-grid omissions, carries the unmeasured easing and pixel-unverified weight limits, and documents the color departure at 55.0 s. It resolves the earlier hold-through-57.5 s wording by recording the source’s 57.167 s section change and the recreation’s deliberate continuation of the shrink state. [build-record.md, construction and departures](../build-record.md#L11) · [build-record.md, boundary and weight evidence](../build-record.md#L21) · [build-record.md, color departure](../build-record.md#L132)

**Limits** — Playback pixels, rendered ink bounds, source-side text-size parity, and continuous weight on the playback font stack remain unverified. Checkpoint reproduction used the final inline evaluator. The original builder harness source was unavailable for inspection.

**Body-write: none (read-only run)**
