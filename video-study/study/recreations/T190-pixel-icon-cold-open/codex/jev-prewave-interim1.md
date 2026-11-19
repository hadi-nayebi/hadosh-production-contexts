OpenAI Codex v0.169.0
--------
workdir: /home/hatch
model: gpt-6.2-sol
provider: openai
approval: never
sandbox: read-only
reasoning effort: none
reasoning summaries: none
session id: 01a1edd4-b07a-74d2-909a-adc017b653e5
--------
user
STANDING HEADER
Consumer: recreation INSTRUCTION §5 leg 3b (jev-prewave gate) for T190 attempt 1, Cycle 035 Wave 32.
Decision priced: FIRE-WAVE (spend the five-lens Codex scoring wave on this build) or HOLD (return the build to Execute with named defects).
Working record: hidden_files/study/recreations/T190-pixel-icon-cold-open/ (build-record.md, recreation.html, fit-table.md, config-census.md, plan-amendment-cycle035.md).
Return must end with a BODY-WRITE: line naming what the return filed into the body.

===== guards/jev-prewave.md (full text) =====
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

===== build-record.md =====
# Build record — T190 pixel-icon cold open · attempt 1 · Cycle 035 Wave 32 (completion of Cycle 034 Wave 31 Phase A)

Plan authority: `runs/2026-11-18-cycle-034-wave-31/item-T190-observe-plan.md` AS AMENDED by `plan-amendment-cycle035.md` in this directory (jev-plan-exit REVISE + jev-observe-exit charges, filed before any build script, A9.2). Schedule basis: **segment-anchored** (build t=0 = source 0.000 s). Consumer: Hadosh Academy shorts cold-open slot (opening scene module of the one-HTML piece form).

## Segment binding (guards.md command 5)
- Source: `hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/source.mp4` — 10,213,125 B · av1 1920×1080 @ 24 fps · duration 113.734 s (ffprobe, this run).
- Cut: 0.000–14.417 s (core window 0–13.917 s + 0.5 s tail handle; head handle truncated at file start), re-encoded libx264/yuv420p + aac, faststart → `segment.mp4` in this directory.
- segment.mp4 ffprobe (this run): h264 1920×1080 @ 24 fps + aac · duration 14.458333 s (container) · size 1,515,064 B · sha256 `4b2712618068ca20397e910fab5ff414a1500899fb382f6ab97f81b54a0b1ba1`.
- The segment is EVIDENCE: it appears only as the labeled ORIGINAL side of comparison.html.

## Frame-resolution check over 8.5–10.0 s (plan §3 step 2, retained by the amendment — ran BEFORE scalePeakMs was fixed)
Frames extracted from the source at 0.25 s spacing; white-pixel bounding box measured (threshold >100, 2 px sampling grid):
```
t=8.5s size=1920x1080 white_bbox x[196,1724] y[132,958] height=826 topcrop=False samples=87117
t=8.75s size=1920x1080 white_bbox x[196,1724] y[128,958] height=830 topcrop=False samples=86450
t=9.0s size=1920x1080 white_bbox x[196,1724] y[112,958] height=846 topcrop=False samples=82699
t=9.25s size=1920x1080 white_bbox x[196,1724] y[42,958] height=916 topcrop=False samples=83562
t=9.5s size=1920x1080 white_bbox x[196,1724] y[0,1036] height=1036 topcrop=True samples=130033
t=9.75s size=1920x1080 white_bbox x[0,1918] y[0,1078] height=1078 topcrop=True samples=223107
t=10.0s size=1920x1080 white_bbox x[196,1724] y[320,958] height=638 topcrop=False samples=55645
```
Finding: the rotating form grows monotonically through the window; the top-edge crop onsets between 9.25 s and 9.5 s and the excursion peaks at ~9.5 s. This contradicts a crop AT 9,000 ms exactly (at 9.0 s the form's top is still 112 px inside the frame), so per the amendment's rule the default was narrowed by evidence: camera turn-out window stands at [8000, 10000] ms, camera `scalePeakAt` = 0.75, and `scenes[3].scalePeakMs` (CONFIG-derived: turnOutStartMs + scalePeakAt × (turnOutEndMs − turnOutStartMs)) = **9500 ms**. The 9,000 ms instant is asserted as what the census shows there — a rotating form mid-turn at scale 1.52 (assertion CP5b) — and the crop assertion CP5 sits at the CONFIG-derived peak instant 9500 ms. (The census f010 is a 1 fps packet extraction; its "≈9 s" label spans the 9.0–10.0 s sampling cell in which the crop onsets.)

## Count assertion (A9.3)
Source counts (plan + amendment 4): scenes 5 · readable poses 6 (5 × mapFront + couch mapProfile) · caption entries 6 (5 lines + 1 BLANK).
Built counts (harness, raw output below): scenes=5 poses=6 captions=6. MATCH — no halt.

## A11 checkpoint → assertion mapping (executed; every instant CONFIG-derived)
| CP | census anchor | CONFIG expression | evaluated result |
|---|---|---|---|
| CP1 | f003 blank center | `captionOnlyMs − 1` (scaled, −1 ms after rounding) = 1999 | PASS — map null |
| CP2 | f004 globe | `scenes[0].readableMs` = 3000 | PASS — globe HOLD |
| CP3 | f006 ear + L2 | `scenes[1].readableMs` = 5000 | PASS — ear + L2 |
| CP4 | f008 blank caption, mid-turn | BLANK entry midpoint = 7000 | PASS — caption "" + phase TURN |
| CP5 | f010 top crop | `scenes[3].scalePeakMs` = 9500 (re-anchored, above) | PASS — bounds top −48.4 < 0, bottom 284.4 < 296 (band intact), scale 1.600 |
| CP5b | f010 at census instant | fixed census instant 9000 | PASS — phase TURN, scale 1.520, angle 69.8° (rotating form, not a hold) |
| CP6 | f012 couch front | `scenes[4].readableMs` = 11000 | PASS — mapFront + L4 |
| CP7 | f014 profile + "?" | `scenes[4].profileReadableMs` = 13000 (field inside the couch scene object, amendment 5) | PASS — mapProfile + L5 |
| CP8 | end / cut | `endMs` = 13917 | PASS — CUT, no scene |

## Own checks — RAW harness output (A9.4, from the final build; the same harness ran on the first draft with identical results except the two census cures noted in config-census.md)
```
PASS CP1 :: t=1999 (captionOnlyMs-1) phase=CAPTION-ONLY scene=null map=null
PASS CP2 :: t=3000 scene=globe phase=HOLD
PASS CP3 :: t=5000 scene=ear caption="RELY ON CAPTIONS TO WATCH MOVIES AND SHOWS"
PASS CP4 :: t=7000 (blank midpoint, census 7000) phase=TURN scene=camera caption=""
PASS CP5 :: t=9500 (camera scalePeakMs) phase=TURN scale=1.600 bounds top=-48.4 bottom=284.4 bandLimit=296
PASS CP5b-9000-rotating :: t=9000 phase=TURN scale=1.520 angle=69.8
PASS CP6 :: t=11000 scene=couch map=mapFront caption="THAT CAN MAKE THE VIEWING EXPERIENCE FRUSTRATING"
PASS CP7 :: t=13000 scene=couch map=mapProfile caption="FOR DEAF AUDIENCES"
PASS CP8 :: t=13917 (endMs) phase=CUT scene=null
COUNTS source: scenes=5 poses=6 captions=6 | built: scenes=5 poses=6 captions=6
PASS COUNT :: scenes==5 && captions==6
FIT caption "MORE THAN 430 MILLION PEOPLE..." chars=56 lines=1 lineWidthPx=616.0 availPx=628 fontPx=20 inkHeightPx=20 at360=11.25
PASS FIT-0 :: line width within stage
FIT caption "RELY ON CAPTIONS TO WATCH MO..." chars=42 lines=1 lineWidthPx=462.0 availPx=628 fontPx=20 inkHeightPx=20 at360=11.25
PASS FIT-4000 :: line width within stage
FIT caption BLANK :: no ink
FIT caption "HOWEVER, THE CURRENT CAPTION..." chars=63 lines=2 lineWidthPx=341.0 availPx=628 fontPx=20 inkHeightPx=20 at360=11.25
PASS FIT-8000 :: line width within stage
FIT caption "THAT CAN MAKE THE VIEWING EX..." chars=48 lines=1 lineWidthPx=528.0 availPx=628 fontPx=20 inkHeightPx=20 at360=11.25
PASS FIT-10000 :: line width within stage
FIT caption "FOR DEAF AUDIENCES..." chars=18 lines=1 lineWidthPx=198.0 availPx=628 fontPx=20 inkHeightPx=20 at360=11.25
PASS FIT-12000 :: line width within stage
SWAP L3 char count: 71
PASS SWAP-CP1 :: t=1599 (expected 1599) phase=CAPTION-ONLY map=null
PASS SWAP-CP8 :: t=11134 (expected 11134) phase=CUT
PASS SWAP-CP2 :: t=2400 (expected 2400) scene=globe phase=HOLD
PASS SWAP-CP4 :: t=5600 (expected 5600) phase=TURN caption=""
PASS SWAP-9000-scaled-caption :: t=7200 caption="HOWEVER, THE PRESENT CAPTIONIN..."
SWAP FIT 71-char: lines=2 lineWidthPx=418.0 availPx=628 fontPx=20
PASS SWAP-FIT :: swapped L3 fits stage via layout
PASS SWAP-INK :: palette swap applied in CONFIG
HARNESS RESULT: ALL PASS
```

## Swap test (§5 leg 1) — exact altered values
- `captions[3].text` → "HOWEVER, THE PRESENT CAPTIONING SYSTEM HAS SEVERAL SERIOUS SHORTCOMINGS" (71 chars, harder than the 63-char specimen longest).
- `beatScale` → 0.8 (rule, amendment 6: every instant × 0.8, Math.round, boundary −1 ms after scaling). Moved instants verified: CP1 1999→1599 · CP2 3000→2400 · CP4 7000→5600 · CP8 13917→11134 — states AND instants both asserted (raw output above).
- `ink` → "#ffd23f".
Result: technique still reads correctly under swap (all swap assertions PASS, swapped L3 fits via the two-line layout at 418.0 px ≤ 628 px).

## Construction purity (§5 leg 2) — RAW grep output (A9.4)
Task pattern on recreation.html (`segment.mp4|source.mp4|<video|<img|xmo3_URTIlg|106334`):
```
grep exit=1
```
Plan pattern set (`source\.mp4|segment\.mp4|<video|<img|\.jpg|f0[0-9][0-9]|url\(|http`):
```
grep exit=1
```
0 hits on both. No `url(#id)` in-file references exist in this build (nothing to classify). Asset inventory: recreation.html loads ZERO external assets — no video, no images, no fonts, no scripts; every pixel map is a code-authored row-string array inside CONFIG; the only files the artifact loads are itself (and, in comparison.html only, segment.mp4 as the labeled ORIGINAL + recreation.html in an iframe).

## Syntax check — RAW output (A9.4)
```
extracted logic 10587
extracted render 2759
logic syntax OK
render syntax OK
comparison script 1147
comparison syntax OK
```
(`node --check` on each extracted inline script; post-cure re-run: logic OK · render OK.)

## Comparison check (§5 leg 3)
comparison.html: original (segment.mp4, 14.458 s container / 13.917 s core + tail handle) and the live recreation (iframe) at matched 640×360; ONE control set (Play both / Restart both) drives the video and slaves the recreation clock to the video's `currentTime` via `__T190.setExternalTime` — the handle region beyond 13.917 s shows the recreation's CUT state and is labeled on the page. Labels verbatim: "ORIGINAL — Caption with Intention @ 0:00–0:14" / "RECREATION — T190 pixel-icon cold open, parameterized". Phone width: `@media (max-width: 760px)` stacks the figures vertically, controls stay above both at 96 vw with ≥44 px-class tap targets. Verified by construction + script syntax; pixel-level render proof is NOT exercisable from this seat (guards.md command 2) — the comparison page is the render surface.

## Technique fidelity (implemented vs deferred)
Implemented: caption-only opening · five scenes / six poses with continuous signed rotateY turns (shared pivot + perspective, cubic-bezier(0.4,0,0.2,1) solver) · single map swap at the couch internal turn's edge-on midpoint · per-scene scale curves incl. the camera turn-out excursion cropping the top edge at its 9500 ms peak · single-slot caption schedule (5 lines + BLANK interval) with measured two-line layout for over-wide lines · caption-safe band as the caption layer's box, with transformed icon bounds asserted clear of it at the crop instant · CUT end state at 13917 ms.
Deferred (named): per-pixel 3D redraw of intermediate turn poses — the rotateY-of-flat-maps approximation is the plan's priced construction, forecast as the motion lens's minimum risk; the specimen's exact pixel maps are approximated by code-authored maps of the same forms (not traced — purity leg above).

## Final build binding
recreation.html — 14,639 B · sha256 `8fc34af56ddf39a91963ac62087de17ac44d49fdd6735870c70e4b0945c93a48`. A6 legs: `fit-table.md` + `config-census.md` in this directory (both filed pre-wave, Amendment A6/A10.1).
Registration limits carried from the packet: bound film is a trade-press re-upload — version fidelity UNVERIFIED · cut count UNVERIFIED (printed on scores.md).

===== CONFIG block of recreation.html =====
const CONFIG = {
  "beatScale": 1,
  "captionOnlyMs": 2000,
  "endMs": 13917,
  "turnDeg": 90,
  "turnDir": 1,
  "turnBezier": [
    0.4,
    0,
    0.2,
    1
  ],
  "pivot": "50% 50%",
  "perspectivePx": 900,
  "scalePeak": 1.35,
  "scalePeakAt": 0.5,
  "bg": "#000000",
  "ink": "#ffffff",
  "pixelUnitPx": 13,
  "stageWPx": 640,
  "stageHPx": 360,
  "iconCenterYPx": 118,
  "captionFontPx": 20,
  "captionBottomPx": 18,
  "captionSafeBandPx": 64,
  "captionPadPx": 6,
  "captionCharWidthFactor": 0.55,
  "captionLineHeightFactor": 1.2,
  "fontStack": "'Courier New', Courier, monospace",
  "captions": [
    {
      "text": "MORE THAN 430 MILLION PEOPLE WITH DISABLING HEARING LOSS",
      "fromMs": 0,
      "toMs": 4000
    },
    {
      "text": "RELY ON CAPTIONS TO WATCH MOVIES AND SHOWS",
      "fromMs": 4000,
      "toMs": 6000
    },
    {
      "text": "",
      "fromMs": 6000,
      "toMs": 8000
    },
    {
      "text": "HOWEVER, THE CURRENT CAPTIONING SYSTEM HAS SEVERAL SHORTCOMINGS",
      "fromMs": 8000,
      "toMs": 10000
    },
    {
      "text": "THAT CAN MAKE THE VIEWING EXPERIENCE FRUSTRATING",
      "fromMs": 10000,
      "toMs": 12000
    },
    {
      "text": "FOR DEAF AUDIENCES",
      "fromMs": 12000,
      "toMs": 13917
    }
  ],
  "scenes": [
    {
      "id": "globe",
      "mapFront": [
        ".....######.....",
        "...##########...",
        "..####.##.####..",
        ".###...##...###.",
        ".##....##....##.",
        "##.....##.....##",
        "##.....##.....##",
        "##.....##.....##",
        "##.....##.....##",
        "##.....##.....##",
        "##.....##.....##",
        ".##....##....##.",
        ".###...##...###.",
        "..####.##.####..",
        "...##########...",
        ".....######....."
      ],
      "turnStartMs": 2000,
      "readableMs": 3000,
      "turnOutStartMs": 3500,
      "turnOutEndMs": 4000,
      "scalePeak": 1.35,
      "scalePeakAt": 0.5
    },
    {
      "id": "ear",
      "mapFront": [
        ".....#####......",
        "...##.....##....",
        "..#.........##..",
        ".#.....####...#.",
        ".#....#....#..#.",
        "#....#......#.#.",
        "#....#......#.#.",
        "#.....#....#..#.",
        ".#.....####.#.#.",
        ".#..........#.#.",
        "..#.........#...",
        "...#.......#....",
        "....##...##.....",
        "......###.......",
        "................",
        "................"
      ],
      "turnStartMs": 4000,
      "readableMs": 5000,
      "turnOutStartMs": 5000,
      "turnOutEndMs": 5250,
      "scalePeak": 1.35,
      "scalePeakAt": 0.5
    },
    {
      "id": "cc",
      "mapFront": [
        ".##################.",
        "####################",
        "####...######...####",
        "###.###.####.###.###",
        "###.########.#######",
        "###.########.#######",
        "###.########.#######",
        "###.###.####.###.###",
        "####...######...####",
        "####################",
        "####################",
        ".##################.",
        "....................",
        "....................",
        "....................",
        "...................."
      ],
      "turnStartMs": 5250,
      "readableMs": 6000,
      "turnOutStartMs": 6500,
      "turnOutEndMs": 7000,
      "scalePeak": 1.35,
      "scalePeakAt": 0.5
    },
    {
      "id": "camera",
      "mapFront": [
        "...###.....###........",
        "..#...#...#...#.......",
        "..#...#...#...#.......",
        "...###.....###........",
        "..################....",
        ".##################...",
        ".###################..",
        ".####################.",
        ".###################..",
        ".##################...",
        "..################....",
        "..###..........###....",
        "..#.#..........#.#....",
        ".#...#........#...#...",
        "......................",
        "......................"
      ],
      "turnStartMs": 7000,
      "readableMs": 8000,
      "turnOutStartMs": 8000,
      "turnOutEndMs": 10000,
      "scalePeak": 1.6,
      "scalePeakAt": 0.75
    },
    {
      "id": "couch",
      "mapFront": [
        ".############...........",
        ".#..........#...........",
        ".#..........#...........",
        ".#..........#...........",
        ".############...........",
        "......##................",
        "....######..............",
        "..##################....",
        ".####################...",
        ".##................##...",
        ".##................##...",
        ".####################...",
        "..##################....",
        "..##...##....##...##....",
        "..##...##....##...##....",
        "........................"
      ],
      "mapProfile": [
        "..........###...........",
        ".........#...#..........",
        ".............#..........",
        "............#...........",
        "....................#...",
        ".........###............",
        "........#...#...........",
        ".........###............",
        "..........##............",
        "..#......####...........",
        "..#....########.........",
        "..##################....",
        "..###################...",
        "...#.....#......#.......",
        "...##....##.....##......",
        "........................"
      ],
      "turnStartMs": 10000,
      "readableMs": 11000,
      "turnOutStartMs": 13917,
      "turnOutEndMs": 13917,
      "scalePeak": 1.35,
      "scalePeakAt": 0.5,
      "profileTurnStartMs": 12000,
      "profileReadableMs": 13000
    }
  ]
};
===== item packet section / Observe+Plan record (Cycle-034 item-T190-observe-plan.md) =====
# Item T190 — Observe + Plan · Cycle 034 Wave 31 · PHASE A ONLY (A9.2: no build before wave gate returns are consumed by the seat)

Queue #89 · T190 pixel-icon cold open with a stat line · Packet #11 ("Caption with Intention", FCB Chicago) technique P11-T01, window 0–13 s (corrected below to 0–13.917 s).
Artifact dir: `hidden_files/study/recreations/T190-pixel-icon-cold-open/` (created this phase, with `codex/`).
Registration limits carried: bound film is a trade-press re-upload (ReelChicago Reel360, YouTube xmo3_URTIlg) — version fidelity UNVERIFIED · cut count UNVERIFIED.

## §1 Observe

### Mechanics summary (census-corrected — supersedes the packet's "builds / substitution" wording for this item's Plan)
On black, a single white pixel-art form occupies center stage on a ~2 s beat. Each form holds a readable front pose briefly, then TURNS — a turntable-style rotation carrying scale and framing change — into the next form. Sequence: globe → ear → CC badge → film camera → couch+TV scene; the couch scene itself rotates front-three-quarter → side profile, and the seated figure with a "?" above his head is the profile state of that same scene, not a sixth substitution. One form owns the stage at a time; no competing element. A separate caption track in small-caps pixel type at the bottom carries FIVE lines (not the packet's three), changes not locked 1:1 to icon beats, with at least one blank interval. At one turn (~9 s sample) the rotating form grows oversized and is cropped by the top frame edge — a specimen excursion, priced as content, not a containment defect.

### Sub-beat timings (segment-relative, census + codex-observe playback samples; ±500 ms sampling tolerance unless noted)
| instant | state |
|---|---|
| 0 ms | black; caption line 1 onset window opens |
| ~2000 ms | caption 1 fully present, center BLANK (census f003 = the packet's ev/t002, misdescribed there as showing the globe) |
| ~3000 ms | globe readable, front pose (f004) |
| ~5000 ms | ear readable; caption 2 (f006) |
| ~6000 ms | CC badge readable (codex-observe playback sample, between census frames) |
| ~7000 ms | mid-turn, large tilted form; caption BLANK (f008) |
| ~8000 ms | film camera readable (codex-observe playback sample) |
| ~9000 ms | turn excursion: oversized form cropped at top edge; caption 3 (f010) |
| ~11000 ms | couch+TV front three-quarter; caption 4 (f012) |
| ~13000 ms | couch profile + seated figure + "?"; caption 5 (f014) |
| 13917 ms | editorial cut to first signer (frame 334, zero-based) — true end of the cold open |

Caption lines (exact): L1 "MORE THAN 430 MILLION PEOPLE WITH DISABLING HEARING LOSS" (56 chars) · L2 "RELY ON CAPTIONS TO WATCH MOVIES AND SHOWS" · L3 "HOWEVER, THE CURRENT CAPTIONING SYSTEM HAS SEVERAL SHORTCOMINGS" (63 chars — the longest, binding fit row) · L4 "THAT CAN MAKE THE VIEWING EXPERIENCE FRUSTRATING" · L5 "FOR DEAF AUDIENCES".

### Motion census (A10.3) — findings per instant
Census dir: `runs/2026-11-18-cycle-034-wave-31/census/T190/` — 14 frames at 1 s spacing (≤2 s as required), f00N ≈ (N−1) s. Extraction note: direct ffmpeg writes into the run dir hit the platform write fault (EPERM, 0-byte files — TOOLS.md measured fault); the census frames are the packet's own 1 fps extraction of the same source.mp4, hardlinked into the census dir (metadata-only route per TOOLS.md) and viewed firsthand by the builder. The three frames ffmpeg did land before the fault (t2/t3/t12 equivalents) agree in kind with the packet frames at the same instants.
- f001 (≈0 s) `ff11133c184d23c8b3d2a677ea56a18af0638be513ccc4a5a8f159811df59dbd` — black, opening state.
- f002 (≈1 s) `06444a959a83793c233c345cc39842223244c265d12cc80f910afe0c3b3bf6a3` — black/caption onset window.
- f003 (≈2 s) `3866e7743890ff54f8be7e3a2d54d42a27d10bd33689eeb2c35f020dc77c0105` — caption 1 present, center blank. MOTION: none (hold of the caption-only state). Identical hash to ev/t002-globe-430m.jpg — the packet's evidence caption is wrong on its face.
- f004 (≈3 s) `41fc5789471d3a33ef3f5721f6529d513e7d1f4e6e18f269df79de9e7cf5dbf7` — globe fully formed over caption 1. CHANGE from f003: icon has arrived (turn-in completed inside the 2–3 s interval).
- f005 (≈4 s) `c72c0ed56907d8296265a1f02a40b9e05b4c37bd864ef664bf9d1f9c51406af6` — globe/turn-out interval (not individually viewed; priced as transition window).
- f006 (≈5 s) `58d359922506c47dc67d6404b6f638763bf51c936b66e8851ef5664450a1f3da` — ear fully formed, caption 2. CHANGE: second readable pose seated.
- f007 (≈6 s) `848ba7c1cd7faacdf17c81a4b02259e37180c285b29a652b9282ae01b7585bb1` — CC-badge window (readable pose priced from codex-observe playback sample ~6 s).
- f008 (≈7 s) `21b580705d13b3804ddca1a3b29fab64cc37d1ce8da39edc6d8962a79c2eebfd` — large white form mid-ROTATION, tilted off-axis, NO caption. MOTION: this is the turn itself — the census's key frame; it kills the "builds in place / substitution" reading.
- f009 (≈8 s) `14aeac941a92dae5a791471a6d93949d3ab48438a4c2a2742ae61310c2fdd7be` — camera window (readable pose ~8 s per codex-observe sample).
- f010 (≈9 s) `b9363cde7c7b32962770ab2ad71734b38a66cb36e780ddd0843b90d2b239f6b4` — oversized rotating form CROPPED by the top frame edge over caption 3. MOTION: scale excursion peaks inside this interval.
- f011 (≈10 s) `95a77bb6fadf5d277a5e6502821e6098486a46140a23e6c5fcdaa975e0ae097f` — couch-scene arrival window.
- f012 (≈11 s) `a1728502e3e2804fd73f0db4da925fc48cd987245e07ea66824d7fe091b0853e` — couch+TV front three-quarter, caption 4. HOLD: readable pose.
- f013 (≈12 s) `2e377de87ee03b97cda6fd156c8e952e8e2119fbef943d0c3cd48e9ad761f5a6` — couch internal turn window.
- f014 (≈13 s) `56cb3dbd51fb24849e4ae268fac27e422c7dc7e1b548a9133952a54c8edb1f1a` — couch side profile, seated figure + "?", TV edge-on, caption 5. HOLD to the 13917 ms cut.
Motion summary: motion lives INSIDE each ~2 s beat (turn-in → readable hold → turn-out); holds are the readable poses only; exits are rotations, not cuts (the window's only editorial cut is its end, per codex-observe's detector classification: the 9.6667 s detector hit is an expanding pixel graphic, not a cut).

### Variable list (§1.3)
Scene set + order · per-scene pixel maps (front view ×5, profile view for couch) · per-event times (turn starts, readable instants, end) · hold vs turn split · turn direction, easing, pivot, perspective · scale curve + per-scene scale peak (incl. the cropping excursion) · caption texts ×5 · caption schedule (onsets/offsets/blank) · palette (bg, ink) · pixel unit size · stage size · caption font size, bottom offset, caption-safe band height.

### Consumer
Hadosh Academy shorts production — the cold-open slot of explainer shorts on the Let's Build It Together lane: a stat-first opening that lands an argument before narration. The machinery is lifted as the opening scene module of the one-HTML piece form; the production surface is the short's opening 14 s container segment.

### Codex-observe — verdict + disposition
Verdict: **CONFIRMED-WITH-GAPS** (filed verbatim at artifact `codex/codex-observe.md`). Disposition: APPLIED in full — (1) mechanics rewritten from census (rotation, not build/substitution); (2) caption count corrected to five with a blank interval; (3) window end corrected to the 13917 ms signer cut; (4) evidence-frame misdescription recorded (f003 = stat-only; globe seated at f004); (5) family arithmetic verified (T99 90.0, T102 88.8, mean 89.4, five lenses each); (6) side finding carried to the seat: recreation verdict-history.md line 63 transposes T102's reusability/readability (prints 84/88; filed returns support 86/84, row total 446→89.2 vs printed 88.8) — a seat-side record correction, not a T190 build input. Registration limits priced: re-upload suffices for a recreation scoped to this specimen; equivalence to the LIA submission stays UNVERIFIED and prints on scores.md at Verify.

## §2 Plan

### Schedule basis + census-anchor mapping (A7 / A10.2)
**Schedule basis: segment-anchored.** Window offset: build t=0 = source 0.000 s. All build times are segment-relative ms from the resolved timeline below (a normalized CONFIG timeline — codex-plan-review revision 3 applied: every assertion instant derives from this one timeline).
Resolved timeline (CONFIG data; per-event where the sampled rhythm varies):
- `captionOnlyMs` [0, 2000) — caption 1 on, no map.
- Scenes (turnStartMs → readableMs, turnMs = readable − turnStart): globe 2000→3000 · ear 4000→5000 · cc 5250→6000 · camera 7000→8000 · couchFront 10000→11000 · couchProfile (same scene, internal turn) 12000→13000.
- `endMs` 13917 — cut state (no scene after couchProfile).
- Caption schedule (single slot, ordered half-open intervals, overlaps rejected at load — revision 2 applied): [0,4000) L1 · [4000,6000) L2 · [6000,8000) BLANK · [8000,10000) L3 · [10000,12000) L4 · [12000,13917) L5.
Census-anchor mapping: each census state above maps to the timeline state at the same segment-relative ms (f003 2000 ms → captionOnly end/turn start, center blank ✓ · f004 3000 → globe readable ✓ · f006 5000 → ear readable + L2 ✓ · f008 7000 → camera turn start + BLANK ✓ · f010 9000 → camera hold, excursion priced inside the 8000–10000 turn-out/scale window — departure noted: census shows the crop at ~9000, the timeline prices the scale peak at the camera turn-out midpoint 9500, within the ±500 ms sampling tolerance extended by one half-beat; the Execute builder must sample the 8500–10000 window at frame resolution and re-anchor `scalePeakMs` before the wave · f012 11000 → couchFront readable + L4 ✓ · f014 13000 → couchProfile readable + L5 ✓).
Departure table (A10.2): packet nominal poses 2/4/6/8/10/12 s vs census readable poses ~3/5/6/8/11/13 s — the build follows the CENSUS; the packet's times mix transition states with poses (codex-observe finding 2). Packet caption list (3 lines) departs from census (5 lines + blank) — census governs.

### Parameter table (every variable = named CONFIG key, specimen default; ALL content/timing/palette from CONFIG)
| CONFIG key | default | role |
|---|---|---|
| `scenes` | 5 entries {id, mapFront, mapProfile (couch only), turnStartMs, readableMs, scalePeak} | scene set, order, pixel maps (code-authored row-string arrays), per-event timing |
| `captionOnlyMs` | 2000 | initial caption-only phase length |
| `endMs` | 13917 | cycle end / cut instant |
| `turnDeg` | 90 | turn sweep per half (0→90 swap → 0) |
| `turnDir` | +1 (left-to-right turntable) | signed transform direction |
| `turnEasing` | "cubic-bezier(0.4, 0, 0.2, 1)" | MOVE intent class (library easing-by-intent rule) |
| `pivot` | "50% 50%" + `perspectivePx` 900 | shared pivot/framing for all turns |
| `scalePeak` | 1.35 (global) / 1.6 on camera scene | scale curve peak; camera override reproduces the top-edge crop |
| `scalePeakAt` | 0.5 (fraction of turn) | scale-peak position in the turn |
| `bg` / `ink` | "#000000" / "#ffffff" | palette (single-ink specimen) |
| `pixelUnitPx` | 10 | rendered pixel cell size |
| `stageWPx` / `stageHPx` | 640 / 360 | stage |
| `captions` | [{text, fromMs, toMs} ×5 + one BLANK entry] | the single-slot caption schedule above |
| `captionFontPx` | 15 | caption type size |
| `captionBottomPx` | 18 | caption offset from stage bottom |
| `captionSafeBandPx` | 64 | bottom band the transformed icon bounds may never enter |
| `cycleMs` | derived = `endMs` | no literal in logic |

### Construction choice + rejected alternatives
CHOSEN: one self-contained HTML; a single DOM-grid renderer (square cells) drawing the active CONFIG pixel map; ONE signed rotateY transform with shared pivot + perspective and a continuous CONFIG scale curve; a single map swap at the edge-on instant; a phase machine driven by the resolved timeline (caption-only → per-scene turn/hold → couch internal turn → cut). Caption layer is a separate single-slot resolver over the CONFIG schedule. (Revision 1 applied: renderer/transform/swap specified as construction, both sides of the swap sampled at Verify.)
Rejected: canvas particle system — no particle mechanic exists in the specimen; surplus machinery that re-imports T15's freeze class. · SVG draw-on — wrong register: the forms are filled pixel masses, not strokes. · CSS keyframes + <img> sprites — sprites would be frame-derived (purity) and keyframes scatter the schedule out of CONFIG. · Video / frame-sequence embed — refusal-class (§6.1). · WebGL true-3D model — a whole scene wearing a technique's name (§8); the rotateY approximation is priced openly in the motion-lens forecast instead.

### Verification plan
- Swap test (values): `captions` L3 text → "HOWEVER, THE PRESENT CAPTIONING SYSTEM HAS SEVERAL SERIOUS SHORTCOMINGS" (71 chars — a HARDER fit case than the 63-char specimen longest; revision 2 applied, the first-draft 53-char swap was not) · tempo: `beatScale` 0.8 applied uniformly to every timeline instant (normalization rule declared: all CONFIG times × 0.8; predicted moved instants — captionOnly ends 1600, globe readable 2400, blank midpoint 5600, endMs/cut 11133.6→11134 rounded; assertions must check BOTH moved instants and expected states) · palette: `ink` → "#ffd23f". Technique must still read correctly; results recorded with exact values.
- Purity greps on recreation.html (0 hits demanded, raw output filed per A9.4): `source\.mp4` · `segment\.mp4` · `<video` · `<img` · `\.jpg` · `f0[0-9][0-9]` · `url\(` · `http` — plus asset inventory: single HTML file, zero external assets, pixel maps code-authored in CONFIG.
- A6 legs pre-wave: guard-measured-fit (fit rows: L3 63 chars and swapped 71 chars at `captionFontPx` in actual glyphs vs stage width; icon transformed bounds vs stage + caption-safe band at every turn sample) → `fit-table.md`; guard-config-census → `config-census.md`.
- Comparison sync method: comparison.html drives both sides from one control set; recreation clock slaved to the segment video's `currentTime` (source-time offset + handles kept in the comparison harness, separate from the recreation's own timeline — revision 3 applied); durations matched (segment cut 0.000–14.417 s with handles vs recreation cycle 13917 ms, handle region labeled).
- Codex wave composition: five separate lens runs (motion · timing · purity · reusability · readability), fed per §5, returns filed verbatim before consolidation.

### Failure-point evaluation (priced from this job's record)
- Convergent freeze (T15): no particle pool exists; the analogue is slideshow stasis — cured by construction (continuous signed turn inside every beat; holds are CONFIG-bounded readable poses; both sides of each swap sampled at Verify).
- Intensity collapse: single-ink specimen — icon/caption separation is positional (caption-safe band enforced on TRANSFORMED bounds through the whole turn, incl. the intentional top crop) + measured caption size at phone width; shared ink is specimen-faithful.
- Phrase overlap: two single-slot machines (one active map; one caption slot resolved from ordered half-open intervals, overlaps rejected at load) — overlap is a CONFIG validation failure, not a runtime possibility.
- Fitting limits: binding rows are L3 (63 chars) and the 71-char swap; measured-fit leg owns them with actual-glyph measurement.
- Render-proof limitation: PIXEL-UNVERIFIED (family precedent T99/T102) — logic-level node harness + comparison page as the render surface; printed on scores.md, never upgraded in prose.

### Plateau priced in Plan (A2 — before Execute)
Family baseline: T99 PASS 90.0 (motion 80 · timing 100 · purity 100 · reuse 80 · readability 90) · T102 PASS 88.8 (88 · 86 · 100 · 86 · 84) · family mean 89.4, both five-lens, both t=0 allocation (this item is segment-anchored — a deliberate, census-forced difference). Five-lens estimate for T190 (revision 4 applied): motion 81 · timing 86 · purity 98 · reusability 85 · readability 87 → sum 437, average 87.4. Predicted minimum: MOTION — the rotateY-of-flat-maps turn approximates a per-pixel 3D redraw; intermediate turn poses will read flatter than the specimen. Stuck-lens hypothesis: motion sticks first (turn credibility is a playback judgment no logic check can pre-clear); timing second (1 s census sampling, ±500 ms onsets; the f010 scale-peak anchor carries a priced half-beat tolerance the builder must close at frame resolution). Floor arithmetic: at motion 78 the other four must total ≥347 (avg 86.75) — the estimate's 356 clears it; at motion <70 the item FAILs on the floor regardless of average, and that outcome is a lawful filed verdict, not a cue to grind.

### Census-checkpoint → executable own-check assertions (A11; every instant is a CONFIG expression)
| CP | census anchor | evaluation instant (CONFIG-derived) | assertion |
|---|---|---|---|
| CP1 | f003 blank center | `captionOnlyMs − 1` | activeMap == null (strict — no fallback; revision 3 applied) |
| CP2 | f004 globe | `scenes[0].readableMs` | activeScene == globe && phase == HOLD |
| CP3 | f006 ear + L2 | `scenes[1].readableMs` | activeScene == ear && captionAt(t) == L2 |
| CP4 | f008 blank caption, mid-turn | midpoint of the BLANK caption entry (`(fromMs+toMs)/2`) | captionAt(t) == "" && phase == TURN |
| CP5 | f010 top crop | `scenes[3].scalePeakMs` (derived: turn window start + `scalePeakAt` × window) | TRANSFORMED map bounds top < 0 (crop) && bounds bottom < stageH − `captionSafeBandPx` (band intact) |
| CP6 | f012 couch front | `scenes[4].readableMs` | activeMap == couch.mapFront && captionAt(t) == L4 |
| CP7 | f014 profile + "?" | `scenes[4].profileReadableMs` | activeMap == couch.mapProfile && captionAt(t) == L5 |
| CP8 | end / cut | `endMs` | state == CUT (no further scene; comparison offset lives in the harness, not here) |
A CONFIG timing swap (beatScale 0.8) must move every positive CP instant by the declared rule — the swap harness asserts moved instants AND states (CP1 1999→1599, CP8 13917→11134).

### Execute checklist (itemized — §3, fires only after the seat consumes the wave gate)
1. Cut segment from source.mp4: 0.000–14.417 s (13.917 window + 0.5 s tail handle; head handle truncated at file start), re-encoded for browser playback → artifact `segment.mp4`, labeled ORIGINAL in comparison only.
2. Frame-resolution sampling of the 8500–10000 ms window; re-anchor `scalePeakMs` from it; record the re-anchor in build-record.
3. Build `recreation.html` from the parameter table (CONFIG first, logic literal-free); count assertion (A9.3): CONFIG scenes == 5, captions == 6 entries (5 lines + BLANK) — print source vs built counts in build-record.
4. Build `comparison.html` (labels ORIGINAL — Caption with Intention PR film @ 0–13.9 s · RECREATION — T190, parameterized; shared controls; phone stacking).
5. Self-verify legs 1–3 (swap · purity · comparison) with raw output filed (A9.4); run A11 assertions; run A6 legs → `fit-table.md`, `config-census.md`.
6. jev-prewave → five-lens Codex wave → scores.md + tier hand-off.

### Verify checklist (itemized instruments)
Swap values as above with recorded results · purity grep patterns as above (raw output) · comparison check (both sides play from shared control; durations matched; labels correct; phone-width stacking holds; tappable controls reachable) · A11 assertion table executed with CONFIG-derived instants, results in build-record · A6 leg outputs filed and cited in the wave record · five lens returns filed verbatim before arithmetic · scores.md shows the arithmetic (no rounding up across the bar).

### Codex-plan-review — verdict + dispositions
Verdict: **REVISE** (filed verbatim at artifact `codex/codex-plan-review.md`). Dispositions — ALL APPLIED into this Plan: (1) continuous-turn construction specified (single renderer, signed transform, shared pivot/perspective, single edge-on swap, both-sides sampling; CP5 asserts transformed bounds) · (2) caption single-slot schedule with the draft's overlap cured (L2 now ends 6000; BLANK is a schedule entry); caption-safe band enforced on transformed bounds; swap text replaced with a 71-char harder fit case; character counts corrected (L1 56, L3 63 — L3 is the binding row) · (3) normalized timeline declared (caption-only phase, per-event times, couch internal turn, explicit endMs); scene `captionIndex` removed as a caption source; CP1 made strict; tempo-swap normalization rule + predicted moved instants declared; comparison offset separated from recreation state · (4) five-lens estimate filed with floor arithmetic · (5) size discipline — reviewer's PASS noted, no change. No point set aside.
codex-observe disposition: APPLIED (see §1). Gate state: Phase A complete; Execute does NOT open until the seat consumes the wave gate returns (A9.2).

===== plan-amendment-cycle035.md =====
# Plan amendment — Cycle 035 (jev-plan-exit REVISE + jev-observe-exit charges, APPLIED before any build script)

Filed FIRST in Execute, per the Cycle 035 Wave 32 RUN.md §2b disposition for T190. The Cycle-034 item record (`runs/2026-11-18-cycle-034-wave-31/item-T190-observe-plan.md`) is the Execute authority AS AMENDED by this file. Source: `runs/2026-11-18-cycle-035-wave-32/RUN.md` §2b (jev-plan-exit: T190 REVISE, primary class UNBOUND-SCHEDULE; jev-observe-exit: ADVANCE-WITH-GAPS with the frame-resolution charge).

## Amendments applied

1. **Turn windows, scale curve and the couch's internal turn move INTO the five scene objects.** Each entry of CONFIG `scenes` now carries its own `turnStartMs`, `readableMs`, `turnOutStartMs`, `turnOutEndMs`, `scalePeak` and `scalePeakMs` (derived, see 2), and the couch scene additionally carries `profileTurnStartMs` + `profileReadableMs` for its internal turn. No turn/scale timing lives in the animation logic or in loose top-level timeline literals beyond the shared defaults (`turnDeg`, `turnDir`, `turnEasing`, `pivot`, `perspectivePx`, `scalePeakAt`) that the scene objects consume.

2. **Observed turn + crop asserted at 7,000 ms and 9,000 ms.** CP4 evaluates at the BLANK caption midpoint (7,000 ms) asserting phase == TURN (camera turn-in start). CP5 evaluates at the census instant 9,000 ms — `scenes[3].scalePeakMs`, derived as `turnOutStartMs + scalePeakAt × (turnOutEndMs − turnOutStartMs)` = 8000 + 0.5 × 2000 = 9,000 ms — asserting the TRANSFORMED bounds crop the top edge (top < 0) with the caption-safe band intact (bottom < stageHPx − captionSafeBandPx). f010 at 9,000 ms is priced as a rotating cropped form, NOT a camera hold: the camera scene's turn-out window is [8000, 10000] ms, so 9,000 ms is mid-turn-out at the scale peak. The crop check sits at the census instant.

3. **Frame-resolution refinement narrows windows only after a consistent default stands.** The plan §3 check over 8.5–10.0 s runs FIRST against the default above (turn-out [8000,10000], peak at 9,000 ms); it may narrow `turnOutStartMs`/`turnOutEndMs` only if the sampled frames contradict the default, and any re-anchor is recorded in build-record.md with the sampled evidence. (Executed: see build-record.md §Frame-resolution — sampled frames are consistent with the default; no re-anchor.)

4. **Six-pose-rows vs five-scenes count resolved.** The census names six readable poses (globe · ear · CC badge · film camera · couch front three-quarter · couch profile). CONFIG `scenes` holds FIVE scene objects; the sixth pose (couch profile) is the couch scene's `mapProfile`, reached by that scene's internal turn — it is not a sixth scene. Count assertion (A9.3): scenes == 5, readable poses == 6 (5 × mapFront + couch mapProfile), captions == 6 entries (5 lines + 1 BLANK).

5. **CP7's `profileReadableMs` enters the scene schema.** It is a field of the couch scene object (`scenes[4].profileReadableMs` = 13000); CP7 evaluates at that CONFIG field. It does not leave CP7.

6. **`beatScale` default + one scaling/rounding rule for all boundary checks.** CONFIG carries `beatScale: 1`. RULE (the only scaling rule): every CONFIG timeline instant (scene turn/readable/turn-out/profile instants, caption fromMs/toMs, captionOnlyMs, endMs, and every CP evaluation instant derived from them) is multiplied by `beatScale` and rounded with Math.round to integer ms; a "just before" boundary check (CP1) evaluates at (scaled instant − 1 ms), the 1 ms offset applied AFTER scaling and rounding. At beatScale 0.8: CP1 1999 → 1599, CP8 13917 → 11134. The swap harness asserts both the moved instants and the expected states at them.

7. **CP7 profile readability also asserts the "?"** — the profile map includes the seated figure and the "?" glyph as code-authored pixels of `mapProfile`; CP7 asserts activeMap == couch.mapProfile (which contains them by construction) and captionAt(t) == L5.

Retained from the plan unchanged: segment-anchored schedule basis; caption single-slot half-open schedule ([0,4000) L1 · [4000,6000) L2 · [6000,8000) BLANK · [8000,10000) L3 · [10000,12000) L4 · [12000,13917) L5); the frame-resolution check over 8.5–10.0 s before fixing scalePeakMs (executed per amendment 3); swap values (71-char L3 replacement · beatScale 0.8 · ink #ffd23f); five-lens estimate and plateau pricing.

===== A6 leg 1: fit-table.md (VERBATIM) =====
# fit-table — T190 pixel-icon cold open (guard-measured-fit, A6 pre-wave leg)

Method: every subject text element is a caption-schedule line rendered by the build's own `captionLayout` (CONFIG `captionFontPx` 20 × `captionCharWidthFactor` 0.55 = 11.0 px/char advance, declared measurement model in CONFIG; avail = stageWPx − 2×captionPadPx = 628 px). Rows below are the harness's POST-LAYOUT measurements on the final build (raw output in build-record.md) — measured from the layout function the renderer itself uses, not from the fitting formula's promise: a line whose single-line width exceeds avail is split at the word boundary minimizing the longest line, and the row reports the resulting longest line. Ink height = fontPx (single advance row per line; two-line rows stack inside the 64 px caption-safe band: 2 × 20 × 1.2 line height = 48 px ≤ 64 px). Stage 640 px; the 360 px column scales by 360/640.

| element | container | measured ink bounds | container bounds | margin (binding side) |
|---|---|---|---|---|
| caption L1 (56 chars) | caption band, 1 line | width 616.0 px · ink height 20 px (11.25 px @360) | 628 px avail · band 64 px | width margin 12.0 px |
| caption L2 (42 chars) | caption band, 1 line | width 462.0 px · ink height 20 px (11.25 px @360) | 628 px avail · band 64 px | width margin 166.0 px |
| caption BLANK | caption band | no ink (scheduled blank interval 6000–8000 ms) | — | — |
| caption L3 (63 chars, specimen longest) | caption band, 2 lines | longest line 341.0 px · ink height 20 px/line, 48 px stacked (11.25 px @360 per line) | 628 px avail · band 64 px | width margin 287.0 px · band margin 16 px |
| caption L4 (48 chars) | caption band, 1 line | width 528.0 px · ink height 20 px (11.25 px @360) | 628 px avail · band 64 px | width margin 100.0 px |
| caption L5 (18 chars) | caption band, 1 line | width 198.0 px · ink height 20 px (11.25 px @360) | 628 px avail · band 64 px | width margin 430.0 px |
| swap L3 (71 chars, swap-test case) | caption band, 2 lines | longest line 418.0 px · ink height 20 px/line | 628 px avail · band 64 px | width margin 210.0 px |

Legibility floor (~11 px at 360 px stage): every caption line measures 11.25 px at 360 px — PASS, margin +0.25 px (thin; the readability lens prices phone legibility in motion, which this leg does not own).
Hierarchy: single caption slot, single size — no hierarchy claimed, none to measure.
Icon geometry (the technique's other fit surface, measured by the harness's bounds evaluator): at the camera scale peak (9500 ms) transformed bounds top −48.4 px (intentional top-edge crop, census f010) with bottom 284.4 px vs band limit 296 px — caption-safe band intact through the excursion.

**HIT list: EMPTY — leg PASS (advisory).**

===== A6 leg 2: config-census.md (VERBATIM) =====
# config-census — T190 pixel-icon cold open (guard-config-census v3.1, A6 pre-wave leg)

Run on the final recreation.html (sha256 `8fc34af56ddf39a91963ac62087de17ac44d49fdd6735870c70e4b0945c93a48`).

## 1. All-literal scan (outside the CONFIG block)
Numeric literals outside CONFIG (counted mechanically): `1` ×27 · `0` ×22 · `2` ×14 · `3` ×5 · `0.5` ×3 · `50` ×3 · `8` ×3 · `100` ×1 · `24` ×1 · `180` ×1 · `5` ×1.
Per-constant classification:
- `0`, `1`, `2`, `3` — loop bounds, array indices, phase-split halves (0.5 in the couch internal turn = the edge-on midpoint fraction of that turn, a mathematical identity of the two-half swap) — **structural**.
- `50` ×3 — CSS `transform-origin: 50% 50%` static default in the style block; the renderer overwrites it from CONFIG `pivot` at runtime — **structural** (default, not a shaping site).
- `8` ×3 — comparison-control chrome offsets in the recreation's own control corner (right/top 8 px) — **structural** (page chrome, not subject).
- `100` — `min-height:100vh` page layout — **structural**. `5` — controls z-index — **structural**. `24` — cubic-bezier solver iteration count — **structural**. `180` — degrees→radians identity (Math.PI/180) in the bounds evaluator — **structural**.
- Hex colors outside CONFIG: `#111` ×1 — the page surround behind the stage (body background); the stage itself renders CONFIG `bg`. **Structural** (surround, never inside the subject stage).
- Strings outside CONFIG: phase names (TURN/HOLD/CUT/CAPTION-ONLY), DOM ids, `"#"` (the pixel-map ink glyph the renderer tests — the map data itself is CONFIG), `"transparent"`, button labels — **structural** identifiers, none subject-shaping.
- Subject-shaping literals outside CONFIG: **NONE** after the two cures below. Every subject value (times, scale peaks, palette, pixel unit, stage, icon center, caption metrics, maps, bezier points) is a CONFIG key.

Cures applied during this leg's first run on the draft (before scoring, per A6):
1. `captionSafeBandPx` initially occurred only at its declaration (the band was an assertion bound, not a build input) → CURED: the caption layer's box is now sized by `captionSafeBandPx` (height + flex-end layout + `captionBottomPx` padding) in the render script — the key shapes the built caption band.
2. A literal `800` (loop-restart padding) sat in the render frame loop → CURED: the loop now wraps at `sc(CONFIG.endMs)`, CONFIG-derived.

## 2. Application-site resolution (every CONFIG key → ≥1 value-flow site)
| key | application site(s) |
|---|---|
| beatScale | `sc()` — scales every timeline comparison in stateAt + sceneScalePeakMs |
| captionOnlyMs | stateAt caption-only branch |
| endMs | stateAt CUT branch · render loop wrap |
| turnDeg / turnDir | stateAt turn-in, turn-out, couch internal turn angles |
| turnBezier | `bez()` easing solver used by every turn |
| pivot | render: icon transformOrigin |
| perspectivePx | render: icon transform perspective() |
| scalePeak / scalePeakAt | per-scene fallbacks in stateAt scale curves + sceneScalePeakMs derivation |
| bg | render: stage background |
| ink | render: cell fill + caption color (swap-verified) |
| pixelUnitPx | mapDims → grid geometry + bounds |
| stageWPx / stageHPx | render stage size · captionLayout avail · bounds center/limits |
| iconCenterYPx | boundsFor center + render icon top |
| captionFontPx | captionLayout + render caption fontSize |
| captionBottomPx | render caption band padding-bottom |
| captionSafeBandPx | render caption band height (cure 1) · CP5 band limit |
| captionPadPx | captionLayout avail width |
| captionCharWidthFactor | captionLayout measurement model |
| captionLineHeightFactor | render caption lineHeight · band stack accounting |
| fontStack | render caption fontFamily |
| captions[].text/fromMs/toMs | captionAt single-slot resolver (ordered half-open intervals) |
| scenes[].mapFront / mapProfile | stateAt active map + renderer grid |
| scenes[].turnStartMs/readableMs | stateAt turn-in window |
| scenes[].turnOutStartMs/turnOutEndMs | stateAt turn-out window + sceneScalePeakMs |
| scenes[].scalePeak/scalePeakAt | stateAt turn-out scale curve (peak at scalePeakAt of the window) |
| scenes[4].profileTurnStartMs/profileReadableMs | stateAt couch internal turn window (amendment 5: inside the scene schema) |

Nested/array-member keys resolve through the scene/caption objects they live on (v3.1 §2). No unapplied key remains.

## 3. CSS-variable setter check
The build uses no CSS variables — CONFIG flows through JS style assignments only. No unset-variable references exist. N/A, reason printed.

**HIT list: EMPTY — leg PASS (advisory).** (Two draft-stage hits cured pre-scoring, recorded above per A6.)

warning: Codex could not find bubblewrap on PATH. Install bubblewrap with your OS package manager. See the sandbox prerequisites: https://developers.openai.com/codex/concepts/sandboxing#prerequisites. Codex will use the bundled bubblewrap in the meantime.
warning: Loaded only 32768 of 99110 bytes from `/home/hatch/AGENTS.md` in environment `local` under the 32768-byte project instruction budget. Trim your project instructions to fit the budget. If you need to keep them all, increase `project_doc_max_bytes`.
warning: Combined user instructions use 37824 bytes, above the 32768-byte `project_doc_max_bytes` setting. The total includes global and thread instructions. The limit applies only to project files.
codex
I’ll check whether the on-disk build record and implementation support firing the five-lens wave.
exec
/bin/bash -lc "pwd; rg --files --hidden -g 'build-record.md' -g 'jev-prewave.md' -g 'item-T190-observe-plan.md' -g '"'!**/.git/**'"' | rg 'T190|jev-prewave'" in /home/hatch
 exited 1 in 295ms:
/home/hatch

exec
/bin/bash -lc "ls -a
find /home/hatch -name '*T190*' -o -name 'jev-prewave.md' -o -name 'guards.md'
d=hidden_files/study/recreations/T190-pixel-icon-cold-open
for f in \""'$d"/{build-record.md,recreation.html,fit-table.md,config-census.md,plan-amendment-cycle035.md}; do cat "$f"; done' in /home/hatch
exec
/bin/bash -lc 'cd /home/hatch/workspace/goals/diy-building-and-real-learning
d=hidden_files/study/recreations/T190-pixel-icon-cold-open
ls -la "$d"
rg --files --hidden --no-ignore hidden_files/study-jobs | rg '"'recreation/.+(guards.md|jev-prewave.md|item-T190-observe-plan.md|035-wave-32/RUN.md)"'$'"'
for f in \""'$d"/{build-record.md,recreation.html,fit-table.md,config-census.md,plan-amendment-cycle035.md}; do nl -ba "$f"; done' in /home/hatch
 succeeded in 151ms:
total 1536
drwxrws--- 1 root nogroup     248 Nov 18 08:44 .
drwxrws--- 1 root nogroup    4820 Nov 18 05:26 ..
-rw-rw---- 1 root nogroup    1212 Nov 18 06:27 AGENTS.md
-rw-rw---- 1 root nogroup   10603 Nov 18 08:43 build-record.md
drwxrws--- 1 root nogroup     256 Nov 18 08:44 codex
-rw-rw---- 1 root nogroup    2872 Nov 18 08:41 comparison.html
-rw-rw---- 1 root nogroup    4792 Nov 18 08:44 config-census.md
-rw-rw---- 1 root nogroup    2787 Nov 18 08:44 fit-table.md
-rw-rw---- 1 root nogroup    4391 Nov 18 08:37 plan-amendment-cycle035.md
-rw-rw---- 1 root nogroup   14639 Nov 18 08:43 recreation.html
-rw-rw---- 1 root nogroup 1515064 Nov 18 08:38 segment.mp4
hidden_files/study-jobs/recreation/guards/jev-prewave.md
hidden_files/study-jobs/recreation/guards/guards.md
hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-035-wave-32/RUN.md
hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-034-wave-31/item-T190-observe-plan.md
     1	# Build record — T190 pixel-icon cold open · attempt 1 · Cycle 035 Wave 32 (completion of Cycle 034 Wave 31 Phase A)
     2	
     3	Plan authority: `runs/2026-11-18-cycle-034-wave-31/item-T190-observe-plan.md` AS AMENDED by `plan-amendment-cycle035.md` in this directory (jev-plan-exit REVISE + jev-observe-exit charges, filed before any build script, A9.2). Schedule basis: **segment-anchored** (build t=0 = source 0.000 s). Consumer: Hadosh Academy shorts cold-open slot (opening scene module of the one-HTML piece form).
     4	
     5	## Segment binding (guards.md command 5)
     6	- Source: `hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/source.mp4` — 10,213,125 B · av1 1920×1080 @ 24 fps · duration 113.734 s (ffprobe, this run).
     7	- Cut: 0.000–14.417 s (core window 0–13.917 s + 0.5 s tail handle; head handle truncated at file start), re-encoded libx264/yuv420p + aac, faststart → `segment.mp4` in this directory.
     8	- segment.mp4 ffprobe (this run): h264 1920×1080 @ 24 fps + aac · duration 14.458333 s (container) · size 1,515,064 B · sha256 `4b2712618068ca20397e910fab5ff414a1500899fb382f6ab97f81b54a0b1ba1`.
     9	- The segment is EVIDENCE: it appears only as the labeled ORIGINAL side of comparison.html.
    10	
    11	## Frame-resolution check over 8.5–10.0 s (plan §3 step 2, retained by the amendment — ran BEFORE scalePeakMs was fixed)
    12	Frames extracted from the source at 0.25 s spacing; white-pixel bounding box measured (threshold >100, 2 px sampling grid):
    13	```
    14	t=8.5s size=1920x1080 white_bbox x[196,1724] y[132,958] height=826 topcrop=False samples=87117
    15	t=8.75s size=1920x1080 white_bbox x[196,1724] y[128,958] height=830 topcrop=False samples=86450
    16	t=9.0s size=1920x1080 white_bbox x[196,1724] y[112,958] height=846 topcrop=False samples=82699
    17	t=9.25s size=1920x1080 white_bbox x[196,1724] y[42,958] height=916 topcrop=False samples=83562
    18	t=9.5s size=1920x1080 white_bbox x[196,1724] y[0,1036] height=1036 topcrop=True samples=130033
    19	t=9.75s size=1920x1080 white_bbox x[0,1918] y[0,1078] height=1078 topcrop=True samples=223107
    20	t=10.0s size=1920x1080 white_bbox x[196,1724] y[320,958] height=638 topcrop=False samples=55645
    21	```
    22	Finding: the rotating form grows monotonically through the window; the top-edge crop onsets between 9.25 s and 9.5 s and the excursion peaks at ~9.5 s. This contradicts a crop AT 9,000 ms exactly (at 9.0 s the form's top is still 112 px inside the frame), so per the amendment's rule the default was narrowed by evidence: camera turn-out window stands at [8000, 10000] ms, camera `scalePeakAt` = 0.75, and `scenes[3].scalePeakMs` (CONFIG-derived: turnOutStartMs + scalePeakAt × (turnOutEndMs − turnOutStartMs)) = **9500 ms**. The 9,000 ms instant is asserted as what the census shows there — a rotating form mid-turn at scale 1.52 (assertion CP5b) — and the crop assertion CP5 sits at the CONFIG-derived peak instant 9500 ms. (The census f010 is a 1 fps packet extraction; its "≈9 s" label spans the 9.0–10.0 s sampling cell in which the crop onsets.)
    23	
    24	## Count assertion (A9.3)
    25	Source counts (plan + amendment 4): scenes 5 · readable poses 6 (5 × mapFront + couch mapProfile) · caption entries 6 (5 lines + 1 BLANK).
    26	Built counts (harness, raw output below): scenes=5 poses=6 captions=6. MATCH — no halt.
    27	
    28	## A11 checkpoint → assertion mapping (executed; every instant CONFIG-derived)
    29	| CP | census anchor | CONFIG expression | evaluated result |
    30	|---|---|---|---|
    31	| CP1 | f003 blank center | `captionOnlyMs − 1` (scaled, −1 ms after rounding) = 1999 | PASS — map null |
    32	| CP2 | f004 globe | `scenes[0].readableMs` = 3000 | PASS — globe HOLD |
    33	| CP3 | f006 ear + L2 | `scenes[1].readableMs` = 5000 | PASS — ear + L2 |
    34	| CP4 | f008 blank caption, mid-turn | BLANK entry midpoint = 7000 | PASS — caption "" + phase TURN |
    35	| CP5 | f010 top crop | `scenes[3].scalePeakMs` = 9500 (re-anchored, above) | PASS — bounds top −48.4 < 0, bottom 284.4 < 296 (band intact), scale 1.600 |
    36	| CP5b | f010 at census instant | fixed census instant 9000 | PASS — phase TURN, scale 1.520, angle 69.8° (rotating form, not a hold) |
    37	| CP6 | f012 couch front | `scenes[4].readableMs` = 11000 | PASS — mapFront + L4 |
    38	| CP7 | f014 profile + "?" | `scenes[4].profileReadableMs` = 13000 (field inside the couch scene object, amendment 5) | PASS — mapProfile + L5 |
    39	| CP8 | end / cut | `endMs` = 13917 | PASS — CUT, no scene |
    40	
    41	## Own checks — RAW harness output (A9.4, from the final build; the same harness ran on the first draft with identical results except the two census cures noted in config-census.md)
    42	```
    43	PASS CP1 :: t=1999 (captionOnlyMs-1) phase=CAPTION-ONLY scene=null map=null
    44	PASS CP2 :: t=3000 scene=globe phase=HOLD
    45	PASS CP3 :: t=5000 scene=ear caption="RELY ON CAPTIONS TO WATCH MOVIES AND SHOWS"
    46	PASS CP4 :: t=7000 (blank midpoint, census 7000) phase=TURN scene=camera caption=""
    47	PASS CP5 :: t=9500 (camera scalePeakMs) phase=TURN scale=1.600 bounds top=-48.4 bottom=284.4 bandLimit=296
    48	PASS CP5b-9000-rotating :: t=9000 phase=TURN scale=1.520 angle=69.8
    49	PASS CP6 :: t=11000 scene=couch map=mapFront caption="THAT CAN MAKE THE VIEWING EXPERIENCE FRUSTRATING"
    50	PASS CP7 :: t=13000 scene=couch map=mapProfile caption="FOR DEAF AUDIENCES"
    51	PASS CP8 :: t=13917 (endMs) phase=CUT scene=null
    52	COUNTS source: scenes=5 poses=6 captions=6 | built: scenes=5 poses=6 captions=6
    53	PASS COUNT :: scenes==5 && captions==6
    54	FIT caption "MORE THAN 430 MILLION PEOPLE..." chars=56 lines=1 lineWidthPx=616.0 availPx=628 fontPx=20 inkHeightPx=20 at360=11.25
    55	PASS FIT-0 :: line width within stage
    56	FIT caption "RELY ON CAPTIONS TO WATCH MO..." chars=42 lines=1 lineWidthPx=462.0 availPx=628 fontPx=20 inkHeightPx=20 at360=11.25
    57	PASS FIT-4000 :: line width within stage
    58	FIT caption BLANK :: no ink
    59	FIT caption "HOWEVER, THE CURRENT CAPTION..." chars=63 lines=2 lineWidthPx=341.0 availPx=628 fontPx=20 inkHeightPx=20 at360=11.25
    60	PASS FIT-8000 :: line width within stage
    61	FIT caption "THAT CAN MAKE THE VIEWING EX..." chars=48 lines=1 lineWidthPx=528.0 availPx=628 fontPx=20 inkHeightPx=20 at360=11.25
    62	PASS FIT-10000 :: line width within stage
    63	FIT caption "FOR DEAF AUDIENCES..." chars=18 lines=1 lineWidthPx=198.0 availPx=628 fontPx=20 inkHeightPx=20 at360=11.25
    64	PASS FIT-12000 :: line width within stage
    65	SWAP L3 char count: 71
    66	PASS SWAP-CP1 :: t=1599 (expected 1599) phase=CAPTION-ONLY map=null
    67	PASS SWAP-CP8 :: t=11134 (expected 11134) phase=CUT
    68	PASS SWAP-CP2 :: t=2400 (expected 2400) scene=globe phase=HOLD
    69	PASS SWAP-CP4 :: t=5600 (expected 5600) phase=TURN caption=""
    70	PASS SWAP-9000-scaled-caption :: t=7200 caption="HOWEVER, THE PRESENT CAPTIONIN..."
    71	SWAP FIT 71-char: lines=2 lineWidthPx=418.0 availPx=628 fontPx=20
    72	PASS SWAP-FIT :: swapped L3 fits stage via layout
    73	PASS SWAP-INK :: palette swap applied in CONFIG
    74	HARNESS RESULT: ALL PASS
    75	```
    76	
    77	## Swap test (§5 leg 1) — exact altered values
    78	- `captions[3].text` → "HOWEVER, THE PRESENT CAPTIONING SYSTEM HAS SEVERAL SERIOUS SHORTCOMINGS" (71 chars, harder than the 63-char specimen longest).
    79	- `beatScale` → 0.8 (rule, amendment 6: every instant × 0.8, Math.round, boundary −1 ms after scaling). Moved instants verified: CP1 1999→1599 · CP2 3000→2400 · CP4 7000→5600 · CP8 13917→11134 — states AND instants both asserted (raw output above).
    80	- `ink` → "#ffd23f".
    81	Result: technique still reads correctly under swap (all swap assertions PASS, swapped L3 fits via the two-line layout at 418.0 px ≤ 628 px).
    82	
    83	## Construction purity (§5 leg 2) — RAW grep output (A9.4)
    84	Task pattern on recreation.html (`segment.mp4|source.mp4|<video|<img|xmo3_URTIlg|106334`):
    85	```
    86	grep exit=1
    87	```
    88	Plan pattern set (`source\.mp4|segment\.mp4|<video|<img|\.jpg|f0[0-9][0-9]|url\(|http`):
    89	```
    90	grep exit=1
    91	```
    92	0 hits on both. No `url(#id)` in-file references exist in this build (nothing to classify). Asset inventory: recreation.html loads ZERO external assets — no video, no images, no fonts, no scripts; every pixel map is a code-authored row-string array inside CONFIG; the only files the artifact loads are itself (and, in comparison.html only, segment.mp4 as the labeled ORIGINAL + recreation.html in an iframe).
    93	
    94	## Syntax check — RAW output (A9.4)
    95	```
    96	extracted logic 10587
    97	extracted render 2759
    98	logic syntax OK
    99	render syntax OK
   100	comparison script 1147
   101	comparison syntax OK
   102	```
   103	(`node --check` on each extracted inline script; post-cure re-run: logic OK · render OK.)
   104	
   105	## Comparison check (§5 leg 3)
   106	comparison.html: original (segment.mp4, 14.458 s container / 13.917 s core + tail handle) and the live recreation (iframe) at matched 640×360; ONE control set (Play both / Restart both) drives the video and slaves the recreation clock to the video's `currentTime` via `__T190.setExternalTime` — the handle region beyond 13.917 s shows the recreation's CUT state and is labeled on the page. Labels verbatim: "ORIGINAL — Caption with Intention @ 0:00–0:14" / "RECREATION — T190 pixel-icon cold open, parameterized". Phone width: `@media (max-width: 760px)` stacks the figures vertically, controls stay above both at 96 vw with ≥44 px-class tap targets. Verified by construction + script syntax; pixel-level render proof is NOT exercisable from this seat (guards.md command 2) — the comparison page is the render surface.
   107	
   108	## Technique fidelity (implemented vs deferred)
   109	Implemented: caption-only opening · five scenes / six poses with continuous signed rotateY turns (shared pivot + perspective, cubic-bezier(0.4,0,0.2,1) solver) · single map swap at the couch internal turn's edge-on midpoint · per-scene scale curves incl. the camera turn-out excursion cropping the top edge at its 9500 ms peak · single-slot caption schedule (5 lines + BLANK interval) with measured two-line layout for over-wide lines · caption-safe band as the caption layer's box, with transformed icon bounds asserted clear of it at the crop instant · CUT end state at 13917 ms.
   110	Deferred (named): per-pixel 3D redraw of intermediate turn poses — the rotateY-of-flat-maps approximation is the plan's priced construction, forecast as the motion lens's minimum risk; the specimen's exact pixel maps are approximated by code-authored maps of the same forms (not traced — purity leg above).
   111	
   112	## Final build binding
   113	recreation.html — 14,639 B · sha256 `8fc34af56ddf39a91963ac62087de17ac44d49fdd6735870c70e4b0945c93a48`. A6 legs: `fit-table.md` + `config-census.md` in this directory (both filed pre-wave, Amendment A6/A10.1).
   114	Registration limits carried from the packet: bound film is a trade-press re-upload — version fidelity UNVERIFIED · cut count UNVERIFIED (printed on scores.md).
     1	<!DOCTYPE html>
     2	<html lang="en">
     3	<head>
     4	<meta charset="utf-8">
     5	<meta name="viewport" content="width=device-width, initial-scale=1">
     6	<title>T190 — pixel-icon cold open, parameterized recreation</title>
     7	<style>
     8	  body { margin:0; background:#111; display:flex; align-items:center; justify-content:center; min-height:100vh; font-family:'Courier New', Courier, monospace; }
     9	  #stage { position:relative; overflow:hidden; }
    10	  #icon { position:absolute; left:50%; top:0; transform-origin:50% 50%; display:grid; }
    11	  #icon .cell { display:block; }
    12	  #caption { position:absolute; left:0; right:0; text-align:center; white-space:pre-line; }
    13	  #controls { position:absolute; right:8px; top:8px; z-index:5; }
    14	  #controls button { font:inherit; cursor:pointer; }
    15	</style>
    16	</head>
    17	<body>
    18	<div id="stage">
    19	  <div id="icon"></div>
    20	  <div id="caption"></div>
    21	  <div id="controls"><button id="playBtn" type="button">Pause</button><button id="restartBtn" type="button">Restart</button></div>
    22	</div>
    23	<script id="logic">
    24	"use strict";
    25	const CONFIG = {
    26	  "beatScale": 1,
    27	  "captionOnlyMs": 2000,
    28	  "endMs": 13917,
    29	  "turnDeg": 90,
    30	  "turnDir": 1,
    31	  "turnBezier": [
    32	    0.4,
    33	    0,
    34	    0.2,
    35	    1
    36	  ],
    37	  "pivot": "50% 50%",
    38	  "perspectivePx": 900,
    39	  "scalePeak": 1.35,
    40	  "scalePeakAt": 0.5,
    41	  "bg": "#000000",
    42	  "ink": "#ffffff",
    43	  "pixelUnitPx": 13,
    44	  "stageWPx": 640,
    45	  "stageHPx": 360,
    46	  "iconCenterYPx": 118,
    47	  "captionFontPx": 20,
    48	  "captionBottomPx": 18,
    49	  "captionSafeBandPx": 64,
    50	  "captionPadPx": 6,
    51	  "captionCharWidthFactor": 0.55,
    52	  "captionLineHeightFactor": 1.2,
    53	  "fontStack": "'Courier New', Courier, monospace",
    54	  "captions": [
    55	    {
    56	      "text": "MORE THAN 430 MILLION PEOPLE WITH DISABLING HEARING LOSS",
    57	      "fromMs": 0,
    58	      "toMs": 4000
    59	    },
    60	    {
    61	      "text": "RELY ON CAPTIONS TO WATCH MOVIES AND SHOWS",
    62	      "fromMs": 4000,
    63	      "toMs": 6000
    64	    },
    65	    {
    66	      "text": "",
    67	      "fromMs": 6000,
    68	      "toMs": 8000
    69	    },
    70	    {
    71	      "text": "HOWEVER, THE CURRENT CAPTIONING SYSTEM HAS SEVERAL SHORTCOMINGS",
    72	      "fromMs": 8000,
    73	      "toMs": 10000
    74	    },
    75	    {
    76	      "text": "THAT CAN MAKE THE VIEWING EXPERIENCE FRUSTRATING",
    77	      "fromMs": 10000,
    78	      "toMs": 12000
    79	    },
    80	    {
    81	      "text": "FOR DEAF AUDIENCES",
    82	      "fromMs": 12000,
    83	      "toMs": 13917
    84	    }
    85	  ],
    86	  "scenes": [
    87	    {
    88	      "id": "globe",
    89	      "mapFront": [
    90	        ".....######.....",
    91	        "...##########...",
    92	        "..####.##.####..",
    93	        ".###...##...###.",
    94	        ".##....##....##.",
    95	        "##.....##.....##",
    96	        "##.....##.....##",
    97	        "##.....##.....##",
    98	        "##.....##.....##",
    99	        "##.....##.....##",
   100	        "##.....##.....##",
   101	        ".##....##....##.",
   102	        ".###...##...###.",
   103	        "..####.##.####..",
   104	        "...##########...",
   105	        ".....######....."
   106	      ],
   107	      "turnStartMs": 2000,
   108	      "readableMs": 3000,
   109	      "turnOutStartMs": 3500,
   110	      "turnOutEndMs": 4000,
   111	      "scalePeak": 1.35,
   112	      "scalePeakAt": 0.5
   113	    },
   114	    {
   115	      "id": "ear",
   116	      "mapFront": [
   117	        ".....#####......",
   118	        "...##.....##....",
   119	        "..#.........##..",
   120	        ".#.....####...#.",
   121	        ".#....#....#..#.",
   122	        "#....#......#.#.",
   123	        "#....#......#.#.",
   124	        "#.....#....#..#.",
   125	        ".#.....####.#.#.",
   126	        ".#..........#.#.",
   127	        "..#.........#...",
   128	        "...#.......#....",
   129	        "....##...##.....",
   130	        "......###.......",
   131	        "................",
   132	        "................"
   133	      ],
   134	      "turnStartMs": 4000,
   135	      "readableMs": 5000,
   136	      "turnOutStartMs": 5000,
   137	      "turnOutEndMs": 5250,
   138	      "scalePeak": 1.35,
   139	      "scalePeakAt": 0.5
   140	    },
   141	    {
   142	      "id": "cc",
   143	      "mapFront": [
   144	        ".##################.",
   145	        "####################",
   146	        "####...######...####",
   147	        "###.###.####.###.###",
   148	        "###.########.#######",
   149	        "###.########.#######",
   150	        "###.########.#######",
   151	        "###.###.####.###.###",
   152	        "####...######...####",
   153	        "####################",
   154	        "####################",
   155	        ".##################.",
   156	        "....................",
   157	        "....................",
   158	        "....................",
   159	        "...................."
   160	      ],
   161	      "turnStartMs": 5250,
   162	      "readableMs": 6000,
   163	      "turnOutStartMs": 6500,
   164	      "turnOutEndMs": 7000,
   165	      "scalePeak": 1.35,
   166	      "scalePeakAt": 0.5
   167	    },
   168	    {
   169	      "id": "camera",
   170	      "mapFront": [
   171	        "...###.....###........",
   172	        "..#...#...#...#.......",
   173	        "..#...#...#...#.......",
   174	        "...###.....###........",
   175	        "..################....",
   176	        ".##################...",
   177	        ".###################..",
   178	        ".####################.",
   179	        ".###################..",
   180	        ".##################...",
   181	        "..################....",
   182	        "..###..........###....",
   183	        "..#.#..........#.#....",
   184	        ".#...#........#...#...",
   185	        "......................",
   186	        "......................"
   187	      ],
   188	      "turnStartMs": 7000,
   189	      "readableMs": 8000,
   190	      "turnOutStartMs": 8000,
   191	      "turnOutEndMs": 10000,
   192	      "scalePeak": 1.6,
   193	      "scalePeakAt": 0.75
   194	    },
   195	    {
   196	      "id": "couch",
   197	      "mapFront": [
   198	        ".############...........",
   199	        ".#..........#...........",
   200	        ".#..........#...........",
   201	        ".#..........#...........",
   202	        ".############...........",
   203	        "......##................",
   204	        "....######..............",
   205	        "..##################....",
   206	        ".####################...",
   207	        ".##................##...",
   208	        ".##................##...",
   209	        ".####################...",
   210	        "..##################....",
   211	        "..##...##....##...##....",
   212	        "..##...##....##...##....",
   213	        "........................"
   214	      ],
   215	      "mapProfile": [
   216	        "..........###...........",
   217	        ".........#...#..........",
   218	        ".............#..........",
   219	        "............#...........",
   220	        "....................#...",
   221	        ".........###............",
   222	        "........#...#...........",
   223	        ".........###............",
   224	        "..........##............",
   225	        "..#......####...........",
   226	        "..#....########.........",
   227	        "..##################....",
   228	        "..###################...",
   229	        "...#.....#......#.......",
   230	        "...##....##.....##......",
   231	        "........................"
   232	      ],
   233	      "turnStartMs": 10000,
   234	      "readableMs": 11000,
   235	      "turnOutStartMs": 13917,
   236	      "turnOutEndMs": 13917,
   237	      "scalePeak": 1.35,
   238	      "scalePeakAt": 0.5,
   239	      "profileTurnStartMs": 12000,
   240	      "profileReadableMs": 13000
   241	    }
   242	  ]
   243	};
   244	function sc(v){ return Math.round(v * CONFIG.beatScale); }
   245	function bez(p){
   246	  const b = CONFIG.turnBezier, x1=b[0], y1=b[1], x2=b[2], y2=b[3];
   247	  let lo=0, hi=1, t=p;
   248	  for(let i=0;i<24;i++){ t=(lo+hi)/2; const u=1-t;
   249	    const x=3*u*u*t*x1 + 3*u*t*t*x2 + t*t*t;
   250	    if(x<p) lo=t; else hi=t; }
   251	  const u=1-t; return 3*u*u*t*y1 + 3*u*t*t*y2 + t*t*t;
   252	}
   253	function captionEntryAt(t){
   254	  for(const c of CONFIG.captions){ if(t >= sc(c.fromMs) && t < sc(c.toMs)) return c; }
   255	  return null;
   256	}
   257	function captionAt(t){ const e = captionEntryAt(t); return e ? e.text : ""; }
   258	function captionLayout(text){
   259	  const fontPx = CONFIG.captionFontPx;
   260	  const charW = fontPx * CONFIG.captionCharWidthFactor;
   261	  const avail = CONFIG.stageWPx - 2 * CONFIG.captionPadPx;
   262	  if(!text) return { lines: [], fontPx, lineWidthPx: 0 };
   263	  if(text.length * charW <= avail) return { lines: [text], fontPx, lineWidthPx: text.length * charW };
   264	  const words = text.split(" ");
   265	  let best = null;
   266	  for(let i=1;i<words.length;i++){
   267	    const a = words.slice(0,i).join(" "), b = words.slice(i).join(" ");
   268	    const w = Math.max(a.length, b.length) * charW;
   269	    if(!best || w < best.w) best = { lines:[a,b], w };
   270	  }
   271	  return { lines: best.lines, fontPx, lineWidthPx: best.w };
   272	}
   273	function sceneScalePeakMs(s){
   274	  return Math.round((s.turnOutStartMs + (s.scalePeakAt != null ? s.scalePeakAt : CONFIG.scalePeakAt) * (s.turnOutEndMs - s.turnOutStartMs)) * CONFIG.beatScale);
   275	}
   276	function mapDims(map){ return { cols: map[0].length, rows: map.length, wPx: map[0].length * CONFIG.pixelUnitPx, hPx: map.length * CONFIG.pixelUnitPx }; }
   277	function boundsFor(map, angleDeg, scale){
   278	  const d = mapDims(map);
   279	  const w = d.wPx * scale * Math.abs(Math.cos(angleDeg * Math.PI / 180));
   280	  const h = d.hPx * scale;
   281	  const cx = CONFIG.stageWPx / 2, cy = CONFIG.iconCenterYPx;
   282	  return { left: cx - w/2, right: cx + w/2, top: cy - h/2, bottom: cy + h/2, wPx: w, hPx: h };
   283	}
   284	function stateAt(t){
   285	  const cap = captionAt(t);
   286	  if(t >= sc(CONFIG.endMs)) return { phase:"CUT", sceneId:null, map:null, mapName:null, angleDeg:0, scale:1, caption:cap, bounds:null };
   287	  if(t < sc(CONFIG.captionOnlyMs)) return { phase:"CAPTION-ONLY", sceneId:null, map:null, mapName:null, angleDeg:0, scale:1, caption:cap, bounds:null };
   288	  for(const s of CONFIG.scenes){
   289	    const tIn0 = sc(s.turnStartMs), tIn1 = sc(s.readableMs);
   290	    const hasProfile = !!s.mapProfile;
   291	    const prof0 = hasProfile ? sc(s.profileTurnStartMs) : Infinity;
   292	    const prof1 = hasProfile ? sc(s.profileReadableMs) : Infinity;
   293	    const out0 = sc(s.turnOutStartMs), out1 = sc(s.turnOutEndMs);
   294	    if(t >= tIn0 && t < tIn1){
   295	      const p = (t - tIn0) / Math.max(1, tIn1 - tIn0);
   296	      const angle = -CONFIG.turnDeg * CONFIG.turnDir * (1 - bez(p));
   297	      const scale = 1 + ((s.scalePeak != null ? s.scalePeak : CONFIG.scalePeak) - 1) * Math.sin(Math.PI * p);
   298	      return { phase:"TURN", sceneId:s.id, map:s.mapFront, mapName:"mapFront", angleDeg:angle, scale, caption:cap, bounds:boundsFor(s.mapFront, angle, scale) };
   299	    }
   300	    if(hasProfile && t >= prof0 && t < prof1){
   301	      const p = (t - prof0) / Math.max(1, prof1 - prof0);
   302	      const first = p < 0.5;
   303	      const angle = first ? CONFIG.turnDeg * CONFIG.turnDir * bez(p * 2) : -CONFIG.turnDeg * CONFIG.turnDir * (1 - bez((p - 0.5) * 2));
   304	      const scale = 1 + ((s.scalePeak != null ? s.scalePeak : CONFIG.scalePeak) - 1) * Math.sin(Math.PI * p);
   305	      const map = first ? s.mapFront : s.mapProfile;
   306	      return { phase:"TURN", sceneId:s.id, map, mapName: first ? "mapFront" : "mapProfile", angleDeg:angle, scale, caption:cap, bounds:boundsFor(map, angle, scale) };
   307	    }
   308	    if(hasProfile && t >= prof1 && t < sc(CONFIG.endMs)){
   309	      return { phase:"HOLD", sceneId:s.id, map:s.mapProfile, mapName:"mapProfile", angleDeg:0, scale:1, caption:cap, bounds:boundsFor(s.mapProfile, 0, 1) };
   310	    }
   311	    if(!hasProfile && t >= tIn1 && t < out0){
   312	      return { phase:"HOLD", sceneId:s.id, map:s.mapFront, mapName:"mapFront", angleDeg:0, scale:1, caption:cap, bounds:boundsFor(s.mapFront, 0, 1) };
   313	    }
   314	    if(!hasProfile && t >= out0 && t < out1){
   315	      const p = (t - out0) / Math.max(1, out1 - out0);
   316	      const angle = CONFIG.turnDeg * CONFIG.turnDir * bez(p);
   317	      const pa = (s.scalePeakAt != null ? s.scalePeakAt : CONFIG.scalePeakAt);
   318	      const q = p <= pa ? p / (2 * pa) : 0.5 + (p - pa) / (2 * (1 - pa));
   319	      const sc2 = 1 + ((s.scalePeak != null ? s.scalePeak : CONFIG.scalePeak) - 1) * Math.sin(Math.PI * q);
   320	      return { phase:"TURN", sceneId:s.id, map:s.mapFront, mapName:"mapFront", angleDeg:angle, scale:sc2, caption:cap, bounds:boundsFor(s.mapFront, angle, sc2) };
   321	    }
   322	    if(hasProfile && t >= tIn1 && t < prof0){
   323	      return { phase:"HOLD", sceneId:s.id, map:s.mapFront, mapName:"mapFront", angleDeg:0, scale:1, caption:cap, bounds:boundsFor(s.mapFront, 0, 1) };
   324	    }
   325	  }
   326	  return { phase:"CUT", sceneId:null, map:null, mapName:null, angleDeg:0, scale:1, caption:cap, bounds:null };
   327	}
   328	</script>
   329	<script id="render">
   330	"use strict";
   331	(function(){
   332	  const stage = document.getElementById("stage");
   333	  const icon = document.getElementById("icon");
   334	  const capEl = document.getElementById("caption");
   335	  stage.style.width = CONFIG.stageWPx + "px";
   336	  stage.style.height = CONFIG.stageHPx + "px";
   337	  stage.style.background = CONFIG.bg;
   338	  capEl.style.height = CONFIG.captionSafeBandPx + "px";
   339	  capEl.style.bottom = "0px";
   340	  capEl.style.display = "flex";
   341	  capEl.style.alignItems = "flex-end";
   342	  capEl.style.justifyContent = "center";
   343	  capEl.style.paddingBottom = CONFIG.captionBottomPx + "px";
   344	  capEl.style.boxSizing = "border-box";
   345	  capEl.style.fontSize = CONFIG.captionFontPx + "px";
   346	  capEl.style.lineHeight = String(CONFIG.captionLineHeightFactor);
   347	  capEl.style.color = CONFIG.ink;
   348	  capEl.style.fontFamily = CONFIG.fontStack;
   349	  let curMapKey = null;
   350	  function drawMap(map){
   351	    const key = map ? map.join("\n") : "";
   352	    if(key === curMapKey) return;
   353	    curMapKey = key;
   354	    icon.innerHTML = "";
   355	    if(!map) return;
   356	    const d = mapDims(map);
   357	    icon.style.gridTemplateColumns = "repeat(" + d.cols + ", " + CONFIG.pixelUnitPx + "px)";
   358	    icon.style.width = d.wPx + "px";
   359	    icon.style.marginLeft = (-d.wPx / 2) + "px";
   360	    icon.style.top = (CONFIG.iconCenterYPx - d.hPx / 2) + "px";
   361	    for(const row of map){ for(const ch of row){
   362	      const cell = document.createElement("span");
   363	      cell.className = "cell";
   364	      cell.style.width = CONFIG.pixelUnitPx + "px";
   365	      cell.style.height = CONFIG.pixelUnitPx + "px";
   366	      cell.style.background = ch === "#" ? CONFIG.ink : "transparent";
   367	      icon.appendChild(cell);
   368	    } }
   369	  }
   370	  function render(t){
   371	    const st = stateAt(t);
   372	    drawMap(st.map);
   373	    icon.style.transform = "perspective(" + CONFIG.perspectivePx + "px) rotateY(" + st.angleDeg + "deg) scale(" + st.scale + ")";
   374	    icon.style.transformOrigin = CONFIG.pivot;
   375	    const lay = captionLayout(st.caption);
   376	    capEl.textContent = lay.lines.join("\n");
   377	    capEl.style.color = CONFIG.ink;
   378	  }
   379	  let startStamp = null, pausedAt = 0, playing = true, externalT = null;
   380	  function frame(now){
   381	    if(externalT != null){ render(externalT); requestAnimationFrame(frame); return; }
   382	    if(playing){
   383	      if(startStamp == null) startStamp = now - pausedAt;
   384	      const t = (now - startStamp) % Math.max(1, sc(CONFIG.endMs));
   385	      render(t);
   386	    }
   387	    requestAnimationFrame(frame);
   388	  }
   389	  requestAnimationFrame(frame);
   390	  document.getElementById("playBtn").addEventListener("click", function(){
   391	    playing = !playing;
   392	    if(!playing){ pausedAt = performance.now() - startStamp; this.textContent = "Play"; }
   393	    else { startStamp = null; this.textContent = "Pause"; }
   394	  });
   395	  document.getElementById("restartBtn").addEventListener("click", function(){ startStamp = null; pausedAt = 0; externalT = null; });
   396	  window.__T190 = { CONFIG, stateAt, captionAt, captionLayout, sceneScalePeakMs, setExternalTime: function(ms){ externalT = ms; }, clearExternalTime: function(){ externalT = null; } };
   397	})();
   398	</script>
   399	</body>
   400	</html>
     1	# fit-table — T190 pixel-icon cold open (guard-measured-fit, A6 pre-wave leg)
     2	
     3	Method: every subject text element is a caption-schedule line rendered by the build's own `captionLayout` (CONFIG `captionFontPx` 20 × `captionCharWidthFactor` 0.55 = 11.0 px/char advance, declared measurement model in CONFIG; avail = stageWPx − 2×captionPadPx = 628 px). Rows below are the harness's POST-LAYOUT measurements on the final build (raw output in build-record.md) — measured from the layout function the renderer itself uses, not from the fitting formula's promise: a line whose single-line width exceeds avail is split at the word boundary minimizing the longest line, and the row reports the resulting longest line. Ink height = fontPx (single advance row per line; two-line rows stack inside the 64 px caption-safe band: 2 × 20 × 1.2 line height = 48 px ≤ 64 px). Stage 640 px; the 360 px column scales by 360/640.
     4	
     5	| element | container | measured ink bounds | container bounds | margin (binding side) |
     6	|---|---|---|---|---|
     7	| caption L1 (56 chars) | caption band, 1 line | width 616.0 px · ink height 20 px (11.25 px @360) | 628 px avail · band 64 px | width margin 12.0 px |
     8	| caption L2 (42 chars) | caption band, 1 line | width 462.0 px · ink height 20 px (11.25 px @360) | 628 px avail · band 64 px | width margin 166.0 px |
     9	| caption BLANK | caption band | no ink (scheduled blank interval 6000–8000 ms) | — | — |
    10	| caption L3 (63 chars, specimen longest) | caption band, 2 lines | longest line 341.0 px · ink height 20 px/line, 48 px stacked (11.25 px @360 per line) | 628 px avail · band 64 px | width margin 287.0 px · band margin 16 px |
    11	| caption L4 (48 chars) | caption band, 1 line | width 528.0 px · ink height 20 px (11.25 px @360) | 628 px avail · band 64 px | width margin 100.0 px |
    12	| caption L5 (18 chars) | caption band, 1 line | width 198.0 px · ink height 20 px (11.25 px @360) | 628 px avail · band 64 px | width margin 430.0 px |
    13	| swap L3 (71 chars, swap-test case) | caption band, 2 lines | longest line 418.0 px · ink height 20 px/line | 628 px avail · band 64 px | width margin 210.0 px |
    14	
    15	Legibility floor (~11 px at 360 px stage): every caption line measures 11.25 px at 360 px — PASS, margin +0.25 px (thin; the readability lens prices phone legibility in motion, which this leg does not own).
    16	Hierarchy: single caption slot, single size — no hierarchy claimed, none to measure.
    17	Icon geometry (the technique's other fit surface, measured by the harness's bounds evaluator): at the camera scale peak (9500 ms) transformed bounds top −48.4 px (intentional top-edge crop, census f010) with bottom 284.4 px vs band limit 296 px — caption-safe band intact through the excursion.
    18	
    19	**HIT list: EMPTY — leg PASS (advisory).**
     1	# config-census — T190 pixel-icon cold open (guard-config-census v3.1, A6 pre-wave leg)
     2	
     3	Run on the final recreation.html (sha256 `8fc34af56ddf39a91963ac62087de17ac44d49fdd6735870c70e4b0945c93a48`).
     4	
     5	## 1. All-literal scan (outside the CONFIG block)
     6	Numeric literals outside CONFIG (counted mechanically): `1` ×27 · `0` ×22 · `2` ×14 · `3` ×5 · `0.5` ×3 · `50` ×3 · `8` ×3 · `100` ×1 · `24` ×1 · `180` ×1 · `5` ×1.
     7	Per-constant classification:
     8	- `0`, `1`, `2`, `3` — loop bounds, array indices, phase-split halves (0.5 in the couch internal turn = the edge-on midpoint fraction of that turn, a mathematical identity of the two-half swap) — **structural**.
     9	- `50` ×3 — CSS `transform-origin: 50% 50%` static default in the style block; the renderer overwrites it from CONFIG `pivot` at runtime — **structural** (default, not a shaping site).
    10	- `8` ×3 — comparison-control chrome offsets in the recreation's own control corner (right/top 8 px) — **structural** (page chrome, not subject).
    11	- `100` — `min-height:100vh` page layout — **structural**. `5` — controls z-index — **structural**. `24` — cubic-bezier solver iteration count — **structural**. `180` — degrees→radians identity (Math.PI/180) in the bounds evaluator — **structural**.
    12	- Hex colors outside CONFIG: `#111` ×1 — the page surround behind the stage (body background); the stage itself renders CONFIG `bg`. **Structural** (surround, never inside the subject stage).
    13	- Strings outside CONFIG: phase names (TURN/HOLD/CUT/CAPTION-ONLY), DOM ids, `"#"` (the pixel-map ink glyph the renderer tests — the map data itself is CONFIG), `"transparent"`, button labels — **structural** identifiers, none subject-shaping.
    14	- Subject-shaping literals outside CONFIG: **NONE** after the two cures below. Every subject value (times, scale peaks, palette, pixel unit, stage, icon center, caption metrics, maps, bezier points) is a CONFIG key.
    15	
    16	Cures applied during this leg's first run on the draft (before scoring, per A6):
    17	1. `captionSafeBandPx` initially occurred only at its declaration (the band was an assertion bound, not a build input) → CURED: the caption layer's box is now sized by `captionSafeBandPx` (height + flex-end layout + `captionBottomPx` padding) in the render script — the key shapes the built caption band.
    18	2. A literal `800` (loop-restart padding) sat in the render frame loop → CURED: the loop now wraps at `sc(CONFIG.endMs)`, CONFIG-derived.
    19	
    20	## 2. Application-site resolution (every CONFIG key → ≥1 value-flow site)
    21	| key | application site(s) |
    22	|---|---|
    23	| beatScale | `sc()` — scales every timeline comparison in stateAt + sceneScalePeakMs |
    24	| captionOnlyMs | stateAt caption-only branch |
    25	| endMs | stateAt CUT branch · render loop wrap |
    26	| turnDeg / turnDir | stateAt turn-in, turn-out, couch internal turn angles |
    27	| turnBezier | `bez()` easing solver used by every turn |
    28	| pivot | render: icon transformOrigin |
    29	| perspectivePx | render: icon transform perspective() |
    30	| scalePeak / scalePeakAt | per-scene fallbacks in stateAt scale curves + sceneScalePeakMs derivation |
    31	| bg | render: stage background |
    32	| ink | render: cell fill + caption color (swap-verified) |
    33	| pixelUnitPx | mapDims → grid geometry + bounds |
    34	| stageWPx / stageHPx | render stage size · captionLayout avail · bounds center/limits |
    35	| iconCenterYPx | boundsFor center + render icon top |
    36	| captionFontPx | captionLayout + render caption fontSize |
    37	| captionBottomPx | render caption band padding-bottom |
    38	| captionSafeBandPx | render caption band height (cure 1) · CP5 band limit |
    39	| captionPadPx | captionLayout avail width |
    40	| captionCharWidthFactor | captionLayout measurement model |
    41	| captionLineHeightFactor | render caption lineHeight · band stack accounting |
    42	| fontStack | render caption fontFamily |
    43	| captions[].text/fromMs/toMs | captionAt single-slot resolver (ordered half-open intervals) |
    44	| scenes[].mapFront / mapProfile | stateAt active map + renderer grid |
    45	| scenes[].turnStartMs/readableMs | stateAt turn-in window |
    46	| scenes[].turnOutStartMs/turnOutEndMs | stateAt turn-out window + sceneScalePeakMs |
    47	| scenes[].scalePeak/scalePeakAt | stateAt turn-out scale curve (peak at scalePeakAt of the window) |
    48	| scenes[4].profileTurnStartMs/profileReadableMs | stateAt couch internal turn window (amendment 5: inside the scene schema) |
    49	
    50	Nested/array-member keys resolve through the scene/caption objects they live on (v3.1 §2). No unapplied key remains.
    51	
    52	## 3. CSS-variable setter check
    53	The build uses no CSS variables — CONFIG flows through JS style assignments only. No unset-variable references exist. N/A, reason printed.
    54	
    55	**HIT list: EMPTY — leg PASS (advisory).** (Two draft-stage hits cured pre-scoring, recorded above per A6.)
     1	# Plan amendment — Cycle 035 (jev-plan-exit REVISE + jev-observe-exit charges, APPLIED before any build script)
     2	
     3	Filed FIRST in Execute, per the Cycle 035 Wave 32 RUN.md §2b disposition for T190. The Cycle-034 item record (`runs/2026-11-18-cycle-034-wave-31/item-T190-observe-plan.md`) is the Execute authority AS AMENDED by this file. Source: `runs/2026-11-18-cycle-035-wave-32/RUN.md` §2b (jev-plan-exit: T190 REVISE, primary class UNBOUND-SCHEDULE; jev-observe-exit: ADVANCE-WITH-GAPS with the frame-resolution charge).
     4	
     5	## Amendments applied
     6	
     7	1. **Turn windows, scale curve and the couch's internal turn move INTO the five scene objects.** Each entry of CONFIG `scenes` now carries its own `turnStartMs`, `readableMs`, `turnOutStartMs`, `turnOutEndMs`, `scalePeak` and `scalePeakMs` (derived, see 2), and the couch scene additionally carries `profileTurnStartMs` + `profileReadableMs` for its internal turn. No turn/scale timing lives in the animation logic or in loose top-level timeline literals beyond the shared defaults (`turnDeg`, `turnDir`, `turnEasing`, `pivot`, `perspectivePx`, `scalePeakAt`) that the scene objects consume.
     8	
     9	2. **Observed turn + crop asserted at 7,000 ms and 9,000 ms.** CP4 evaluates at the BLANK caption midpoint (7,000 ms) asserting phase == TURN (camera turn-in start). CP5 evaluates at the census instant 9,000 ms — `scenes[3].scalePeakMs`, derived as `turnOutStartMs + scalePeakAt × (turnOutEndMs − turnOutStartMs)` = 8000 + 0.5 × 2000 = 9,000 ms — asserting the TRANSFORMED bounds crop the top edge (top < 0) with the caption-safe band intact (bottom < stageHPx − captionSafeBandPx). f010 at 9,000 ms is priced as a rotating cropped form, NOT a camera hold: the camera scene's turn-out window is [8000, 10000] ms, so 9,000 ms is mid-turn-out at the scale peak. The crop check sits at the census instant.
    10	
    11	3. **Frame-resolution refinement narrows windows only after a consistent default stands.** The plan §3 check over 8.5–10.0 s runs FIRST against the default above (turn-out [8000,10000], peak at 9,000 ms); it may narrow `turnOutStartMs`/`turnOutEndMs` only if the sampled frames contradict the default, and any re-anchor is recorded in build-record.md with the sampled evidence. (Executed: see build-record.md §Frame-resolution — sampled frames are consistent with the default; no re-anchor.)
    12	
    13	4. **Six-pose-rows vs five-scenes count resolved.** The census names six readable poses (globe · ear · CC badge · film camera · couch front three-quarter · couch profile). CONFIG `scenes` holds FIVE scene objects; the sixth pose (couch profile) is the couch scene's `mapProfile`, reached by that scene's internal turn — it is not a sixth scene. Count assertion (A9.3): scenes == 5, readable poses == 6 (5 × mapFront + couch mapProfile), captions == 6 entries (5 lines + 1 BLANK).
    14	
    15	5. **CP7's `profileReadableMs` enters the scene schema.** It is a field of the couch scene object (`scenes[4].profileReadableMs` = 13000); CP7 evaluates at that CONFIG field. It does not leave CP7.
    16	
    17	6. **`beatScale` default + one scaling/rounding rule for all boundary checks.** CONFIG carries `beatScale: 1`. RULE (the only scaling rule): every CONFIG timeline instant (scene turn/readable/turn-out/profile instants, caption fromMs/toMs, captionOnlyMs, endMs, and every CP evaluation instant derived from them) is multiplied by `beatScale` and rounded with Math.round to integer ms; a "just before" boundary check (CP1) evaluates at (scaled instant − 1 ms), the 1 ms offset applied AFTER scaling and rounding. At beatScale 0.8: CP1 1999 → 1599, CP8 13917 → 11134. The swap harness asserts both the moved instants and the expected states at them.
    18	
    19	7. **CP7 profile readability also asserts the "?"** — the profile map includes the seated figure and the "?" glyph as code-authored pixels of `mapProfile`; CP7 asserts activeMap == couch.mapProfile (which contains them by construction) and captionAt(t) == L5.
    20	
    21	Retained from the plan unchanged: segment-anchored schedule basis; caption single-slot half-open schedule ([0,4000) L1 · [4000,6000) L2 · [6000,8000) BLANK · [8000,10000) L3 · [10000,12000) L4 · [12000,13917) L5); the frame-resolution check over 8.5–10.0 s before fixing scalePeakMs (executed per amendment 3); swap values (71-char L3 replacement · beatScale 0.8 · ink #ffd23f); five-lens estimate and plateau pricing.

exec
/bin/bash -lc 'cd /home/hatch/workspace/goals/diy-building-and-real-learning
j=hidden_files/study-jobs/recreation
d=hidden_files/study/recreations/T190-pixel-icon-cold-open
cat "$d/AGENTS.md"
cat "$j/guards/jev-prewave.md"
rg -n '"'T190|frame-resolution' \""'$j/runs/2026-11-18-cycle-035-wave-32/RUN.md"
rg -n '"'Commands|syntax|comparison|fit|A11' \""'$j/guards/guards.md"
cat "$j/runs/2026-11-18-cycle-034-wave-31/item-T190-observe-plan.md" >/dev/null
sed -n '"'224,282p' \""'$d/recreation.html"
sha256sum "$d/recreation.html"
ls "$d/codex"
' in /home/hatch
 succeeded in 338ms:
# AGENTS.md — goals/diy-building-and-real-learning/hidden_files/study/recreations/T190-pixel-icon-cold-open — T190 pixel icon cold open

Local working memory for `goals/diy-building-and-real-learning/hidden_files/study/recreations/T190-pixel-icon-cold-open` (T190 pixel icon cold open). It currently holds 0 file(s) and 1 subdirectory. Subdirectories: `codex/`.

Read the AGENTS.md chain root→local before working here (tool: ~/workspace/tools/agents-chain.sh <dir>). Work here runs under named skills/standards — never improvised. Lessons learned here are written HERE, in this file. Information that proves true for sibling directories moves UP to the parent directory's AGENTS.md.

Governing skills/standards for work here:
- Study curriculum: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/CURRICULUM.md (daily craft study; every session converts to a skill/filesystem improvement or an explicit no-conversion finding)
- Global method: /home/hatch/AGENTS.md
- Nearest ancestor AGENTS.md in this tree (the chain above this directory)
- Immediate parent memory in force: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/AGENTS.md
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
5:Pre-action judgment: (1) objective — complete Wave 31 under the A8 completion form: consume Cycle 034's filed Phase A whole (five item Observe+Plan records + per-item codex-observe + codex-plan-review returns), fire the two Plan-close gates that never fired, write the §2b dispositions, then carry queue #89 T190 · #90 T192 · #91 T195 · #92 T196 · #93 T197 (all Packet #11, "Caption with Intention") to scored five-lens verdicts on builds executed from the filed plans. (2) Forward movement — Wave 31 stopped at the Plan-close gates and left five fully-planned first attempts unbuilt and the refilled pool (13 owed, #89–#101) unconsumed; this wave is the named resumption on Cycle 034's own close face. (3) Cost to owner — none; no ask, no schedule change. (4) Why now — scheduled firing; A8 makes the completing cycle the next cycle, and queue order is the only triage (A3). (5) Body-write — this RUN.md, five artifact directories' builds + records under `hidden_files/study/recreations/`, HQ.json skeleton→closed entry (same id `rec-2026-11-18-wave32`), heartbeat skeleton→closed beat 112, verdict-history ×5 + the T102 transposition correction (§0b.3), QUEUE.md rows #89–#93 entered + WAVE 32 footer. (6) Order check — this record's §1 prices each unfinished item's on-disk state BEFORE any firing; the wave-level gates fire and are consumed in §2b BEFORE Execute opens (A9.2); per-item Execute+Verify fans out as five parallel agent tasks (§0 fan-out form) only after §2b stands.
10:3. **Verdict-history defect** (Cycle 034 §0b.3, found by T190's codex-observe): verdict-history.md line 63 transposes T102's reusability/readability (84/88 printed vs 86/84 in the filed returns) — seat correction with citation at this cycle's close filings.
16:Consumer (all): word-animation containers (the DLC assembler's word-animation surface + Hadosh Academy explainer production) — T190 additionally the opening surface. In every build the text IS the technique subject, not a caption (INSTRUCTION §3.2/§6.5).
20:2. Catalogue register (style-library Cycle-019 state, as read by Cycle 034 and re-confirmed against QUEUE/TECHNIQUES this run): 223 techniques · OWED 13 at queue #89–#101 (T190 · T192 · T195 · T196 · T197 · T199 · T204 · T205 · T208 · T210 · T212 · T218 · T219). This wave's five completion items occupy all five §0 slots; the remaining 8 owed items (#94–#101) stand for Waves 33–34.
25:- **T190 — pixel-icon cold open** (`T190-pixel-icon-cold-open/`): directory holds AGENTS.md + codex/ only. Filed: codex-observe.md (7,168 B, CONFIRMED-WITH-GAPS) + codex-plan-review.md (5,574 B, REVISE, findings applied in the item record) + both payloads. NOT present: segment.mp4 · recreation.html · comparison.html · build-record.md · A6 legs · jev-prewave · lens returns · scores.md. Item record: Cycle-034 `item-T190-observe-plan.md` (20,654 B chars) — Observe+Plan complete, Execute checklist stands. Hash binding (A8): no build exists, so no payload is hash-bound to a build; the two filed returns bind to the item record + packet record they judged, consumed as filed.
33:A1.2 runtime text sampling BINDS T192 (its letterforms are sampled from config-rendered text — the lawful construction, purity-100 precedent) and does not bind the DOM-text items (T190/T195/T196/T197 render text as DOM, where no sampling exists to trace). A5's flow-field model + Owner Cures 1–2 BIND T192 only (the wave's sole particle field): reserve fraction never borrowed, borrow-flag intensity separation, phase exclusivity. For the DOM items the Cures' underlying defect class is priced as state-style separation (T195/T196: unspoken-vs-spoken contrast floor) and single-slot phase exclusivity (T190's caption slot, T196's card slot, T197's line-ownership rule). A9.1 plate construction: T197 still plate (any background motion exceeds the technique); T192's field is the A5 flow field, not a plate. A9.6: every subject-shaping value is CONFIG data in all five plans. A11: every item record maps census checkpoints to executable assertions with CONFIG-derived instants.
36:- **T190:** continuous-turn construction (single renderer, signed transform, edge-on swap, transformed-bounds crop assertion); caption track as a single-slot half-open schedule (five captions); normalized CONFIG timeline from which every A11 checkpoint derives; segment cut 0.000–14.417 s (core 0–13.917 + tail handle). Five-lens estimate 81/86/98/85/87 → 87.4, motion predicted minimum. Schedule basis: segment-anchored.
42:- **Per-item codex-plan-review (consumed, filed in each artifact's `codex/codex-plan-review.md`):** T190 REVISE (4 groups, all applied) · T192 REVISE (5 findings, all applied) · T195 REVISE (4 applied + 1 sub-point rebutted with ASR citation) · T196 REVISE (5 cure groups, all applied) · T197 REVISE (4 findings, all applied). No plan stands unrevised-into-Execute: each Cycle-034 item record carries the revised Plan as its Execute authority, and this cycle does not re-author any plan (A8); a plan found unexecutable at Execute is recorded against the plan.
47:**jev-observe-exit: ADVANCE-WITH-GAPS ×5** (T190 · T192 · T195 · T196 · T197 — no item held). Leg scores: queue/prior/mechanics/variables/guidance/consumer = 1.0 across except mechanics 0.5 (T192 · T195 · T197) and prior-scores 0.5 (T195). Disposition: **APPLIED as charges into Execute** — every gap names a bounded act already inside or beside the filed plans: T190 retain the §3 frame-resolution check over 8.5–10.0 s before fixing `scalePeakMs` + the T102 baseline reconciliation (seat act at close, §9) · T192 record playback evidence for formation + exit, D2 release stays an explicit allocation, census-mapping reconciliation (priced by plan-exit below) · T195 G-µ carried as the filed prerequisite to finalizing the sweep (already the plan's own Execute step 1) + sibling-cure dispositions recorded with T03's practice result UNVERIFIED-labeled · T196 D2 card-2 frame-measurement refresh in the 49–50 s bracket before freezing its visual anchor, D3 stays an explicit ASR approximation, CP1 logical-vs-painted distinction preserved · T197 reconcile the hold-through-57.5–58.0 claim against T196's next-header onset at 57.167 s (playback across the boundary in Execute), easing stays a labeled CONFIG choice, continuous weight conditional on rendered intermediate-weight evidence. The return's Limits note (cycle-035 §1 census wording: 94 total / 88 scored / T19 ambiguous, UNVERIFIED from the feed) is accepted — the seat cures it at Verify with a mechanical recount printed in §5.
49:**jev-plan-exit: T190 REVISE · T192 REVISE · T195 RETURN-TO-OBSERVE · T196 REVISE · T197 REVISE** — primary class UNBOUND-SCHEDULE ×4 (the A10.2 census-anchor defect class) + RETURN-TO-OBSERVE-ROOT (T195). Disposition: **APPLIED in full, all five items.** Rationale: every finding is a concrete, mechanically checkable contradiction between an item's own §1 census anchors and its §2 schedule/assertions — the exact defect class Amendments A10.2/A11 were promoted to catch, and this job's record (Wave 22: T160 timing 68 · T162 timing 64 on allocation-vs-census schedules) prices building on an unbound schedule as a spent wave. Setting the verdicts aside would repeat that spend with the defect named in advance. Application form: each item's builder task carries the gate's amendment text verbatim (below); the amendment is filed as the item's `plan-amendment-cycle035.md` in its artifact directory BEFORE any build script is written, and the build executes the filed Plan AS AMENDED. The Cycle-034 item records are not retro-edited (A8 consumption stands); a plan found unexecutable even as amended is recorded against the plan. T195's RETURN-TO-OBSERVE is cured by its own prescribed route: the G-µ 24 fps micro-census (41.50–42.00 s + 46.00–46.80 s) is executed and filed as an Observe addendum in its build-record BEFORE the sweep function is finalized, resolving direction/lag/lift from evidence or recording a bounded approximation, and its schedule/assertions are rebuilt per the amendment — Observe work inside this completing cycle, not a new cycle.
52:- **T190:** turn windows, scale curve and the couch's internal turn move INTO the five scene objects; the observed turn + crop are asserted at 7,000 ms and 9,000 ms (f010 at 9,000 is a rotating cropped form, not a camera hold; the crop check sits at the census instant, with the frame-resolution refinement narrowing windows only after a consistent default stands); resolve the six-pose-rows vs five-scenes count; CP7's `profileReadableMs` enters the scene schema or leaves CP7; add the `beatScale` default + one rule for scaling/rounding boundary checks incl. CP1's 1 ms offset.
11:   Demonstrated: 2026-11-13, T15 attempt 1, LOGIC level (node harness, stubbed canvas: 5,060 → 2,728 targets). Pixel-level render proof is NOT exercisable from this seat (no browser binary) — printed limitation, carried in scores.md; the comparison page is the render surface.
18:6. **Measured-fit leg** — `guard-measured-fit.md` in this directory. Per item, pre-wave: every subject text element carries a MEASURED fit row (post-fit ink bounds vs container at the 360 px stage, legibility floor ~11 px); a formula-claimed fit or a missing row is a HIT. Owns the "fit asserted, not measured" readability class (Waves 2–5, 10). **Built 2026-11-15 (HQ owed-checks charge); fires unconditionally at the pre-wave step from the next cycle; a wave record lacking a fit table for any item prints INCOMPLETE.** Verdict advisory; firing is not.
        "..........##............",
        "..#......####...........",
        "..#....########.........",
        "..##################....",
        "..###################...",
        "...#.....#......#.......",
        "...##....##.....##......",
        "........................"
      ],
      "turnStartMs": 10000,
      "readableMs": 11000,
      "turnOutStartMs": 13917,
      "turnOutEndMs": 13917,
      "scalePeak": 1.35,
      "scalePeakAt": 0.5,
      "profileTurnStartMs": 12000,
      "profileReadableMs": 13000
    }
  ]
};
function sc(v){ return Math.round(v * CONFIG.beatScale); }
function bez(p){
  const b = CONFIG.turnBezier, x1=b[0], y1=b[1], x2=b[2], y2=b[3];
  let lo=0, hi=1, t=p;
  for(let i=0;i<24;i++){ t=(lo+hi)/2; const u=1-t;
    const x=3*u*u*t*x1 + 3*u*t*t*x2 + t*t*t;
    if(x<p) lo=t; else hi=t; }
  const u=1-t; return 3*u*u*t*y1 + 3*u*t*t*y2 + t*t*t;
}
function captionEntryAt(t){
  for(const c of CONFIG.captions){ if(t >= sc(c.fromMs) && t < sc(c.toMs)) return c; }
  return null;
}
function captionAt(t){ const e = captionEntryAt(t); return e ? e.text : ""; }
function captionLayout(text){
  const fontPx = CONFIG.captionFontPx;
  const charW = fontPx * CONFIG.captionCharWidthFactor;
  const avail = CONFIG.stageWPx - 2 * CONFIG.captionPadPx;
  if(!text) return { lines: [], fontPx, lineWidthPx: 0 };
  if(text.length * charW <= avail) return { lines: [text], fontPx, lineWidthPx: text.length * charW };
  const words = text.split(" ");
  let best = null;
  for(let i=1;i<words.length;i++){
    const a = words.slice(0,i).join(" "), b = words.slice(i).join(" ");
    const w = Math.max(a.length, b.length) * charW;
    if(!best || w < best.w) best = { lines:[a,b], w };
  }
  return { lines: best.lines, fontPx, lineWidthPx: best.w };
}
function sceneScalePeakMs(s){
  return Math.round((s.turnOutStartMs + (s.scalePeakAt != null ? s.scalePeakAt : CONFIG.scalePeakAt) * (s.turnOutEndMs - s.turnOutStartMs)) * CONFIG.beatScale);
}
function mapDims(map){ return { cols: map[0].length, rows: map.length, wPx: map[0].length * CONFIG.pixelUnitPx, hPx: map.length * CONFIG.pixelUnitPx }; }
function boundsFor(map, angleDeg, scale){
  const d = mapDims(map);
  const w = d.wPx * scale * Math.abs(Math.cos(angleDeg * Math.PI / 180));
  const h = d.hPx * scale;
  const cx = CONFIG.stageWPx / 2, cy = CONFIG.iconCenterYPx;
  return { left: cx - w/2, right: cx + w/2, top: cy - h/2, bottom: cy + h/2, wPx: w, hPx: h };
8fc34af56ddf39a91963ac62087de17ac44d49fdd6735870c70e4b0945c93a48  hidden_files/study/recreations/T190-pixel-icon-cold-open/recreation.html
AGENTS.md
codex-observe.md
codex-plan-review.md
jev-prewave-return.raw
payload-observe.txt
payload-plan-review.txt
payload-prewave.txt

 exited 1 in 40112ms:
.
..
.cache
.codex
.config
.git
.gitignore
.hatch-db-change-signals
.local
.npm
.pki
.postgres-ready
.ssh
.stagged-uploads
.venvs
.wget-hsts
AGENTS.md
GROWTH.md
HEARTBEAT.md
IDENTITY.md
MEMORY.md
PROACTIVE_PREFERENCES.md
RESTORE.md
SOUL.md
TOOLS.md
USER.md
agents
asr-venv
assets
chrome.log
config
data
docs
dreams
eo2t2
eo2tmp
google-word-clean-v1.png
hidden_files
hooks
jev-err.txt
jev-out.txt
keys-run.log
memory
probe-v4-D.log
pt1.bin
render_head.log
round1-form.log
runtime.lock
subscriptions
user
wd3tmp
workspace
/home/hatch/workspace/.hatch-browser/snapshots/browser-task:7c313871-f35f-55f0-aeed-ae3415bc10f1/20261117T190648.906760548Z
/home/hatch/workspace/.hatch-browser/snapshots/browser-task:7c313871-f35f-55f0-aeed-ae3415bc10f1/20261117T190658.757092885Z
/home/hatch/workspace/.hatch-browser/snapshots/browser-task:7c313871-f35f-55f0-aeed-ae3415bc10f1/20261117T190702.117948002Z
/home/hatch/workspace/.hatch-browser/snapshots/browser-task:7c313871-f35f-55f0-aeed-ae3415bc10f1/20261117T190713.925134070Z
/home/hatch/workspace/.hatch-browser/snapshots/browser-task:7c313871-f35f-55f0-aeed-ae3415bc10f1/20261117T190737.567068999Z
/home/hatch/workspace/.hatch-browser/snapshots/browser-task:7c313871-f35f-55f0-aeed-ae3415bc10f1/20261117T190748.262943007Z
/home/hatch/workspace/.hatch-browser/snapshots/browser-task:7c313871-f35f-55f0-aeed-ae3415bc10f1/20261117T190757.275006182Z
/home/hatch/workspace/.hatch-browser/snapshots/browser-task:7c313871-f35f-55f0-aeed-ae3415bc10f1/20261117T190805.293233929Z
/home/hatch/workspace/.hatch-browser/snapshots/browser-task:7c313871-f35f-55f0-aeed-ae3415bc10f1/20261117T190815.600388057Z
/home/hatch/workspace/.hatch-browser/snapshots/browser-task:7c313871-f35f-55f0-aeed-ae3415bc10f1/20261117T190821.056493496Z
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/hourly-tldr/run-2026-11-02T1906-replan.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/hourly-tldr/tldr-2026-11-02T1906-EST.txt
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/hourly-tldr/run-2026-11-08T1901-replan.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/hourly-tldr/tldr-2026-11-08T1901-ET.txt
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
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T170-vertical-name-roll-ticker/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T175-name-exit-ending/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T178-fade-from-black-colonnade-reveal/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T182-detail-to-wide-match-on-action/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T184-occlusion-framed-cut-landing/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T186-foreground-pass-mid-coverage/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T190-pixel-icon-cold-open
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/core-files-review/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/dream-review/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/thumbnail-creation/instructions/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/thumbnail-creation/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/assembler-maintenance/instructions/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/assembler-maintenance/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/experiment/instructions/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/experiment/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/video-production/instructions/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/video-production/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/asset-creation/instructions/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/asset-creation/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/guard-battery/instructions/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/guard-battery/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/review-dashboard/instructions/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/review-dashboard/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/community-posts/instructions/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/community-posts/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/publication/instructions/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/language-challenge/jobs/publication/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/supervision/plants/full/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/video-digestion/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/source-scouting/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/reception-analysis/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/style-library/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-034-wave-31/census/T190
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-034-wave-31/item-T190-observe-plan.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/guards/jev-prewave.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/effectiveness-review/guards/guards.md
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/practice/guards/guards.md
/home/hatch/workspace/jobs/job-ledger/guards/guards.md
/home/hatch/workspace/jobs/JOB-THUMB-thumbnail-creation/guards/guards.md
/home/hatch/workspace/jobs/JOB-07-UPGRADE-generic-focus/guards/guards.md
/home/hatch/workspace/jobs/_template/instructions/guards.md
/home/hatch/workspace/jobs/job-migration/instructions/guards.md
/home/hatch/workspace/jobs/spine-watch/guards/guards.md
/home/hatch/workspace/jobs/hourly-tldr/guards/guards.md
/home/hatch/workspace/jobs/opevc-alignment/guards/guards.md
/home/hatch/workspace/jobs/self-eval/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-340/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/video-digestion/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T153-duration-as-rows-bars/prior-evidence-attempt-1/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T167-hub-growth/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T168-spoke-draw-on-dot-landing/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T170-vertical-name-roll-ticker/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T175-name-exit-ending/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/video-digestion/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T153-duration-as-rows-bars/prior-evidence-attempt-1/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T167-hub-growth/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T168-spoke-draw-on-dot-landing/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T170-vertical-name-roll-ticker/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T175-name-exit-ending/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/video-digestion/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T153-duration-as-rows-bars/prior-evidence-attempt-1/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T167-hub-growth/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T168-spoke-draw-on-dot-landing/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T170-vertical-name-roll-ticker/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T175-name-exit-ending/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/recreation/guards/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study-jobs/video-digestion/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T153-duration-as-rows-bars/prior-evidence-attempt-1/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T167-hub-growth/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T168-spoke-draw-on-dot-landing/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T170-vertical-name-roll-ticker/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/firing-340/freeze/study/recreations/T175-name-exit-ending/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/firing-342/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/firing-343/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/study-jobs/recreation/guards/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/study/recreations/T178-fade-from-black-colonnade-reveal/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/study/recreations/T182-detail-to-wide-match-on-action/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/study/recreations/T184-occlusion-framed-cut-landing/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-344/freeze/study/recreations/T186-foreground-pass-mid-coverage/jev-prewave.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-354/freeze/jobs/craft-study/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-354/freeze/jobs/job-evolution/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-354/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-354/freeze/jobs/power-station/guards/guards.md
/home/hatch/workspace/jobs/jobs-repo-sync/firing-354/freeze/study-jobs/source-scouting/guards/guards.md
/home/hatch/workspace/jobs/quadrillion-piece/guards/guards.md
/home/hatch/workspace/jobs/cadence-delivery/guards/guards.md
/home/hatch/workspace/jobs/dot-channel/guards/guards.md
/home/hatch/workspace/jobs/hourly-anatomy/guards/guards.md
/home/hatch/workspace/jobs/job-evolution/guards/guards.md
/home/hatch/workspace/jobs/frustration-check/guards/guards.md
/home/hatch/workspace/jobs/constitution-recheck/guards/guards.md
/home/hatch/workspace/jobs/summary-chain/guards/guards.md
/home/hatch/workspace/jobs/craft-study/pilot-form/instructions/guards.md
/home/hatch/workspace/jobs/craft-study/guards/guards.md
/home/hatch/workspace/jobs/video-production/guards/guards.md
/home/hatch/workspace/jobs/misunderstanding-review/guards/guards.md
/home/hatch/workspace/jobs/power-station/guards/guards.md
/home/hatch/workspace/jobs/t2-oneoff-quadrillion-visuals/guards/guards.md
/home/hatch/workspace/jobs/community-post/guards/guards.md
/home/hatch/workspace/jobs/channel-growth/guards/guards.md
/home/hatch/workspace/jobs/visual-story/guards/guards.md
/home/hatch/workspace/jobs/agents-health/guards/guards.md
/home/hatch/workspace/jobs/storage-maintenance/guards/guards.md
/home/hatch/workspace/jobs/firing-336/freeze/jobs/jobs-repo-sync/guards/guards.md
/home/hatch/workspace/jobs/main-session-tldr/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/agents-health/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/cadence-delivery/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/channel-growth/guards/guards.md
/home/hatch/workspace/jofind: ‘/home/hatch/.stagged-uploads’: Permission denied
bs/sync-staging/jobs/community-post/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/constitution-recheck/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/craft-study/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/craft-study/pilot-form/instructions/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/dot-channel/guards/guards.md
/home/hatch/workspace/jobs/sync-staging/jobs/frustration-check/guards/guards.md
/home/hatch/workspace/push-v9-2026-11-17/jobs/main-session-tldr/guards/guards.md
/home/hatch/workspace/push-v10-2026-11-17/jobs/main-session-tldr/guards/guards.md
cat: hidden_files/study/recreations/T190-pixel-icon-cold-open/build-record.md: No such file or directory
cat: hidden_files/study/recreations/T190-pixel-icon-cold-open/recreation.html: No such file or directory
cat: hidden_files/study/recreations/T190-pixel-icon-cold-open/fit-table.md: No such file or directory
cat: hidden_files/study/recreations/T190-pixel-icon-cold-open/config-census.md: No such file or directory
cat: hidden_files/study/recreations/T190-pixel-icon-cold-open/plan-amendment-cycle035.md: No such file or directory

exec
/bin/bash -lc 'cd /home/hatch/workspace/goals/diy-building-and-real-learning
d=hidden_files/study/recreations/T190-pixel-icon-cold-open
j=hidden_files/study-jobs/recreation
cat "$j/guards/guard-measured-fit.md"
cat "$j/guards/guards.md"
nl -ba "$j/runs/2026-11-18-cycle-034-wave-31/item-T190-observe-plan.md" | rg '"'A11|timing swap|actual glyph|every turn'
{ sed -n '/"'^"use strict";$/,/''^<'"\\/script>/p' \""'$d/recreation.html" | sed '"'/"'^<'"\\/script>/,"'$d'"'
cat <<'JS'
for (const s of [1,0.8]) {
CONFIG.beatScale=s;
for(const t of [sc(9000),sceneScalePeakMs(CONFIG.scenes[3])]) {
const st=stateAt(t);
const ys=st.map.flatMap((r,y)=>[...r].flatMap((c,x)=>c===\"#\"?[0,1].flatMap(dx=>[0,1].map(dy=> {
const z=-(x+dx-st.map[0].length/2)*13*st.scale*Math.sin(st.angleDeg*Math.PI/180);
return 118+(y+dy-st.map.length/2)*13*st.scale*900/(900-z);
})):[]));
console.log(s,t,st.angleDeg,st.scale,Math.min(...ys),Math.max(...ys));
}}
console.log(CONFIG.captions.map(c=>c.text.length));
console.log(CONFIG.scenes.length, CONFIG.scenes.reduce((n,s)=>n+1+Number("'!!s.mapProfile),0));
JS
} | node' in /home/hatch
 succeeded in 518ms:
# guard-measured-fit — the measured-fit leg (recreation + practice)

_Built 2026-11-15 on HQ's charge (owed checks, 2026-11-15 ~08:02 EST), from the candidate spec filed in recreation Cycle-007 Wave-5's Condense and applied ad hoc since. This file is the leg's standing definition; before this build the leg existed only as candidacy text inside RUN records (Waves 5–6) and as a builder-side instrument — never as a guard with a call point. It owns ONE defect class: readability failures whose mechanism is **fit asserted, not measured** (readability stuck/under-floor in Waves 2, 3, 4, 5 and again in Wave 10 — T54 density, T57 attribution typography). It does NOT own timing anchors, density judgment, or any content-level failure; those classes stay with their own guards._

## What the leg checks (per item, on the final recreation.html)
For EVERY text element that carries subject content (titles, labels, captions-in-scene, cards, marquees, counters):
1. **A measurement row exists.** The item's build record contains a fit table with one row per subject text element: element id · container (box/strip/line) · MEASURED ink bounds after fitting (glyph ink height and width, from the build harness's geometry measurement at the 360 px stage) · container bounds · margin on the binding side. A text element with no row is a HIT.
2. **Fit is measured, never formula-claimed.** A row whose bounds are derived from the fitting formula's own assertion (font size × assumed factor) rather than from a post-fit measurement of the rendered geometry is a HIT — the formula is the claim, not the evidence (founding instances: T20's glyph-height overstatement, ink at 76% of claimed cell pitch; T19's floored 11 px phrase in a box that could not hold it; T57's attribution lines).
3. **Legibility floor.** Measured subject-text ink height below ~11 px at the 360 px stage width is a HIT, whatever the formula claimed.
4. **Hierarchy is measured too.** Where the design claims an intensity/size hierarchy between neighbouring text elements, the rows must show the measured ratio; a hue-only hierarchy against near-equal measured sizes is a HIT (T20's neighbour-window failure).

## Output form (filed per item, pre-wave)
`fit-table.md` in the item's artifact directory: the full row set + a HIT list (empty = PASS for this leg). The wave's RUN cites the table's path + hit count per item. The leg's verdict is ADVISORY (owner's 2026-11-14 ruling): hits are priced into the build before scoring where the builder can cure them; hits carried into the scoring wave are printed in the RUN with their disposition. What is NOT advisory is the firing: a wave whose record lacks the fit table for any item prints INCOMPLETE.

## Call point
Pre-wave, per item, after the build and BEFORE the five-lens scoring wave (wired into recreation INSTRUCTION Amendment A6 and practice INSTRUCTION Amendment A-C008 — the legs run before scoring, not after). Practice re-attempts fire the same leg on the new attempt's file.

## Scope honesty
This leg proves text fits its container at phone width, measured. It does not prove the text is the right text, the right density, or readable in motion — timing, density judgment, and content stay with the scoring wave and their own guards.

## Firing record
- 2026-11-15: BUILT (this file). First firing owed: the next recreation wave + the next practice wave, unconditionally.
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
    96	- A6 legs pre-wave: guard-measured-fit (fit rows: L3 63 chars and swapped 71 chars at `captionFontPx` in actual glyphs vs stage width; icon transformed bounds vs stage + caption-safe band at every turn sample) → `fit-table.md`; guard-config-census → `config-census.md`.
   110	### Census-checkpoint → executable own-check assertions (A11; every instant is a CONFIG expression)
   121	A CONFIG timing swap (beatScale 0.8) must move every positive CP instant by the declared rule — the swap harness asserts moved instants AND states (CP1 1999→1599, CP8 13917→11134).
   128	5. Self-verify legs 1–3 (swap · purity · comparison) with raw output filed (A9.4); run A11 assertions; run A6 legs → `fit-table.md`, `config-census.md`.
   132	Swap values as above with recorded results · purity grep patterns as above (raw output) · comparison check (both sides play from shared control; durations matched; labels correct; phone-width stacking holds; tappable controls reachable) · A11 assertion table executed with CONFIG-derived instants, results in build-record · A6 leg outputs filed and cited in the wave record · five lens returns filed verbatim before arithmetic · scores.md shows the arithmetic (no rounding up across the bar).
1 9000 69.80051189836422 1.5196152422706632 -71.22409779449262 267.2820786375865
1 9500 86.34309658525336 1.6 -86.04970787584222 280.2128621471848
0.8 7200 69.80051189836422 1.5196152422706632 -71.22409779449262 267.2820786375865
0.8 7600 86.34309658525336 1.6 -86.04970787584222 280.2128621471848
[ 56, 42, 0, 63, 48, 18 ]
5 6

exec
/bin/bash -lc "cd /home/hatch/workspace/goals/diy-building-and-real-learning
j=hidden_files/study-jobs/recreation
d=hidden_files/study/recreations/T190-pixel-icon-cold-open
ls hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention
rg --files --hidden --no-ignore hidden_files/study | rg -i 'packet.?11|caption-with-intention' | head -35
nl -ba \""'$j/guards/jev-prewave.md" | sed -n '"'10,32p'
rg -n 'function boundsFor|perspective\\(|function captionLayout|function sceneScalePeakMs' \""'$d/recreation.html"
cat "$d/comparison.html"' in /home/hatch
 succeeded in 403ms:
AGENTS.md
clips
digest.md
digest.pdf
ev
frames
post.json
probe.json
probe_raw.json
production-record.md
source.mp4
transcript.json
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/digest.pdf
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/production-record.md
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/digest.md
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/transcript.json
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/post.json
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/probe.json
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/AGENTS.md
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/probe_raw.json
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/source.mp4
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/clips/096-gasp-3.6s.mp4
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/clips/074-gump-shout-4.6s.mp4
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/clips/058-speaker-color-7s.mp4
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/clips/050-volume-ramp-7s.mp4
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/clips/040-sync-highlight-7s.mp4
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/clips/AGENTS.md
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t037-system-grid.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t055-louder-onset.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t056-ramp-softer.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t036-film-area-diagram.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t034-yes-drill-crop.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t099-mechelle-mood.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t080-jason-wow.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t062-whos-speaking.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t098-my-ship.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t070-gump-this.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t073-gump-drill-line.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t074-gump-goddamnit.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t076-focus-group-title.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t077-focus-group.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t055-line-before-ramp.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t111-end-card.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t106-following-story.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t102-michelle-gasps.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t094-beep-command.jpg
hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/ev/t084-buzz-rex.jpg
    10	Judge whether this build record shows a recreation ready to be scored, or one whose defects are already visible in its own paperwork. Price: (1) PARAMETERIZATION — is the piece genuinely CONFIG-driven (fields named, ranges sane), or hard-coded with a config costume? (2) PURITY PRE-CHECK — does the construction route describe generation from parameters, with no tracing/embedding step hiding in the prose? (3) OWN-CHECKS COMPLETENESS — are the mechanical guards' results recorded (purity grep, swap test, syntax), or asserted? **Census-checkpoint mapping (Amendment A11, landed 2026-11-17, Cycle 028 Condense): every Observe census checkpoint for the item must map to an executable own-check assertion whose evaluation instant is CONFIG-derived; the build-record identifies checkpoint · assertion · CONFIG expression · evaluated result. ASSERTED-CHECKS is returned if any checkpoint lacks this mapping, any evaluation instant uses hardcoded defaults, or execution evidence is absent; a CONFIG timing swap must be shown to move the corresponding assertion's evaluation instant.** (4) TECHNIQUE FIDELITY PLAN — does the record state which packet mechanics the build implements and which it deliberately defers (a deferral named is lawful; a mechanic silently absent is not)? Score 0–1 per dimension, classify defects. You judge paperwork only: a build can pass you and still fail its wave — your job is that no wave is spent on a build its own record already condemns.
    11	
    12	## 3. Context contract (masked view)
    13	- FED: build-record.md · the CONFIG block of recreation.html · the technique's packet section · guards.md command list (what own-checks should exist) · **the item's A6 leg outputs (fit-table.md + config-census.md) — added 2026-11-16, recreation Cycle 024 Condense, on the Wave-21 pattern: prewave firings for T151, T153 and T154 all HOLDed or re-fired on feed completeness (the A6 files and packet section existed complete in the artifact directory but were not in the payload), the lane's recurring ASSERTED-CHECKS false-positive class. A payload lacking any FED element is a feeder defect, printed as such in the build record; a HOLD whose only named cure is feeding an already-filed FED element is disposed as a feed-completeness miss, with the miss recorded.**
    14	- FED (added 2026-11-17, Cycle 026 Condense — the T167 miss): **the wave record's binding census-anchor mapping for the item + any Observe dispositions pricing source ambiguities** (the §1d-form: where a packet caption or digest line admits two readings, the wave record's priced reading governs). A HOLD founded on a source ambiguity the wave record has already priced is a feeder defect, disposed as such in the build record — the judge prices the build against the binding mapping, not against raw source prose. (Founding miss: Cycle 026 T167 — HOLD priced a packet caption's ambiguous reading against a build that followed the gate-approved mapping; the seat upheld the set-aside at §5.)
    15	- NEVER FED: the builder's confidence prose · prior attempts' scores (each build is priced on its own record).
    16	- Ceiling: ≤32k tokens; the HTML enters as its CONFIG + construction sections, not media.
    17	
    18	## 4. Output space
    19	- Verdict classes: **FIRE-WAVE · HOLD**.
    20	- Dimensions (0–1): parameterization · purity pre-check · own-checks completeness · fidelity-plan honesty.
    21	- Rejection taxonomy (one primary): HARDCODED-CONFIG · TRACING-STEP · ASSERTED-CHECKS (results claimed, not recorded) · SILENT-DEFERRAL.
    22	- Accepted profile travels: cited in scores.md's pre-wave line; a wave fired over a HOLD is a deviation (WAVE-OVER-HOLD).
    23	
    24	## 5. Floors and disposition
    25	- Any dimension < 0.5 → HOLD · ASSERTED-CHECKS at any score on other dimensions → HOLD (unrecorded checks are the lane's named failure class).
    26	- Disposition: the verdict is advisory — reviewed by the runner, applied or set aside with the miss recorded in Condense. The verdict + classification + disposition land in the build record either way; an applied HOLD leaves the item IN PROGRESS and the wave moves to its next item (a held item never holds the wave hostage).
    27	
    28	## Call command
    29	- BINDING OWED AT FIRST FIRING — the call fires in this job's next live cycle (owner's ruling 2026-11-14: arming = firing); binding it to the fleet's decision-model runner and recording the exact command here is the first firing's own first step, and the raw response files in the run record.
    30	
    31	## 6. Firing record and improvement
    32	- Exemplars: T15 attempt 1's build record (must FIRE-WAVE: checks recorded, deferral of the interlude named in its Plan) · a constructed record claiming a swap test with no harness output (must HOLD as ASSERTED-CHECKS) · a constructed record whose CONFIG is decorative over hard-coded phrases (must HOLD as HARDCODED-CONFIG).
258:function captionLayout(text){
273:function sceneScalePeakMs(s){
277:function boundsFor(map, angleDeg, scale){
373:    icon.style.transform = "perspective(" + CONFIG.perspectivePx + "px) rotateY(" + st.angleDeg + "deg) scale(" + st.scale + ")";
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>T190 comparison — Caption with Intention cold open</title>
<style>
  body { margin:0; background:#181818; color:#eee; font-family:Georgia, serif; }
  .wrap { display:flex; gap:16px; justify-content:center; align-items:flex-start; flex-wrap:wrap; padding:16px; }
  figure { margin:0; width:640px; max-width:96vw; }
  figcaption { padding:8px 4px; font-size:17px; }
  video, iframe { width:640px; max-width:96vw; height:360px; background:#000; border:1px solid #444; display:block; }
  #controls { text-align:center; padding:14px; }
  #controls button { font-size:19px; padding:12px 22px; margin:0 6px; cursor:pointer; }
  #clock { font-size:16px; margin-left:10px; }
  @media (max-width: 760px) {
    .wrap { flex-direction:column; align-items:center; }
    figure { width:96vw; }
    video, iframe { width:96vw; height:54vw; }
    #controls button { padding:14px 20px; }
  }
</style>
</head>
<body>
<div id="controls">
  <button id="playBtn" type="button">Play both</button>
  <button id="restartBtn" type="button">Restart both</button>
  <span id="clock">0.00 s / segment 14.46 s · recreation cycle 13.917 s (+0.5 s tail handle on the original)</span>
</div>
<div class="wrap">
  <figure>
    <figcaption>ORIGINAL — Caption with Intention @ 0:00–0:14</figcaption>
    <video id="orig" src="segment.mp4" preload="auto" playsinline></video>
  </figure>
  <figure>
    <figcaption>RECREATION — T190 pixel-icon cold open, parameterized</figcaption>
    <iframe id="rec" src="recreation.html" title="T190 recreation"></iframe>
  </figure>
</div>
<script>
"use strict";
(function(){
  var video = document.getElementById("orig");
  var frame = document.getElementById("rec");
  var clock = document.getElementById("clock");
  function recWin(){ try { return frame.contentWindow; } catch(e){ return null; } }
  function drive(){
    var w = recWin();
    if(w && w.__T190){ w.__T190.setExternalTime(video.currentTime * 1000); }
    clock.textContent = video.currentTime.toFixed(2) + " s / segment 14.46 s · recreation cycle 13.917 s (+0.5 s tail handle on the original)";
    if(!video.paused && !video.ended) requestAnimationFrame(drive);
  }
  document.getElementById("playBtn").addEventListener("click", function(){
    if(video.paused){ video.play(); this.textContent = "Pause both"; requestAnimationFrame(drive); }
    else { video.pause(); this.textContent = "Play both"; }
  });
  document.getElementById("restartBtn").addEventListener("click", function(){
    video.currentTime = 0; video.play();
    document.getElementById("playBtn").textContent = "Pause both";
    requestAnimationFrame(drive);
  });
  video.addEventListener("seeked", drive);
  video.addEventListener("pause", drive);
})();
</script>
</body>
</html>

exec
/bin/bash -lc "cd /home/hatch/workspace/goals/diy-building-and-real-learning
rg -n -A17 -B2 'P11-T01|pixel-icon cold' hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/digest.md
d=hidden_files/study/recreations/T190-pixel-icon-cold-open
python - \""'$d" <<'"'PY'
import pathlib,re,subprocess,sys
d=pathlib.Path(sys.argv[1])
for name in ['recreation.html','comparison.html']:
 s=(d/name).read_text()
 for m in re.finditer(r'<script(["'^>]*)>(.*?)</script>'"',s,re.S):
  x=subprocess.run(['node','--check'],input=m[2],text=True,capture_output=True)
  print(name,m[1],x.returncode)
 if name=='recreation.html':
  for p in [r'segment\\.mp4|source\\.mp4|<video|<img|xmo3_URTIlg|106334',r'source\\.mp4|segment\\.mp4|<video|<img|\\.jpg|f0[0-9][0-9]|url\\(|http']:
   print('purity hits',len(re.findall(p,s)))
PY" in /home/hatch
 exited 127 in 104ms:
/bin/bash: line 4: python: command not found

exec
/bin/bash -lc "cd /home/hatch/workspace/goals/diy-building-and-real-learning
rg -n -i 'globe|430 million' hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/digest.md | head -14
python3 - <<'PY'
import pathlib,re,subprocess
d=pathlib.Path('hidden_files/study/recreations/T190-pixel-icon-cold-open')
for name in ['recreation.html','comparison.html']:
 s=(d/name).read_text()
 for m in re.finditer(r'<script(["'^>]*)>(.*?)</script>'"',s,re.S):
  x=subprocess.run(['node','--check'],input=m[2],text=True,capture_output=True)
  print(name,m[1],x.returncode)
 if name=='recreation.html':
  for p in [r'segment\\.mp4|source\\.mp4|<video|<img|xmo3_URTIlg|106334',r'source\\.mp4|segment\\.mp4|<video|<img|\\.jpg|f0[0-9][0-9]|url\\(|http']:
   print('purity hits',len(re.findall(p,s)))
PY" in /home/hatch
 succeeded in 1813ms:
21:- **Mechanics:** on black, a white pixel-art icon builds at center in sequence — globe (2 s), ear (4 s), CC badge (6 s), film camera (8 s), couch-and-screen (10 s), seated figure with a question mark (12 s) — each held under a single small-caps caption line at the bottom ("MORE THAN 430 MILLION PEOPLE WITH DISABLING HEARING LOSS" · "RELY ON CAPTIONS TO WATCH MOVIES AND SHOWS" · "HOWEVER, THE CURRENT CAPTIONING SYSTEM HAS SEVERAL SHORTCOMINGS"). One icon at a time; no competing element; the argument advances by icon substitution at a steady ~2 s beat.
23:- **Evidence:** ev/t002-globe-430m.jpg (the globe icon over the 430-million stat line).
recreation.html  id="logic" 0
recreation.html  id="render" 0
purity hits 0
purity hits 0
comparison.html  0

codex
**HOLD — ASSERTED-CHECKS.** Return T190 attempt 1 to Execute before spending the Cycle 035 Wave 32 scoring wave.

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.25 |
| Fidelity-plan honesty | 0.90 |

## Findings

1. **A11 timing evidence is incomplete.** CP5b is filed at a fixed 9,000 ms. The 7,200 ms swap receipt checks the replacement caption and leaves the corresponding rotation assertion untested. The filed swap log also lacks paired instant-and-state receipts for CP3, CP5, CP6, and CP7. Derive CP5b from the midpoint of the configured camera turn-out window and file the same state predicate at both tempos. The current CONFIG gives 9,000 → 7,200 ms for that midpoint and 9,500 → 7,600 ms for the crop probe, using the configured 8,000–10,000 ms window, peak fraction `0.75`, and tempo factor `0.8`. Rerun and file the remaining checkpoint pairs. The count receipt also prints six poses but its PASS predicate lists only scenes and captions. Add `poses == 6` to the executable count assertion. (`build-record.md:28–79`, `recreation.html:188–193,273–275`, `item-T190-observe-plan.md:110–121`, `plan-amendment-cycle035.md:13–17`.)

2. **The fit table’s empty HIT list is unsupported.** The caption widths come from character count × font size × `0.55`, and the stated ink height comes from font size. The measured-fit guard requires post-layout glyph geometry at the 360 px surface. CP5 has a separate geometry gap: `boundsFor` uses an unprojected vertical extent while the renderer applies perspective. Replace the caption estimates with measured glyph bounds, including both L3 cases, and file crop and caption-band results from geometry that matches the renderer across the planned turn samples. Until measured, the affected rows are HITs. (`fit-table.md:3–19`, `guard-measured-fit.md` §What the leg checks, `recreation.html:258–282,370–376`, `item-T190-observe-plan.md:96`.)

3. **The crop re-anchor needs a consistent record.** Wave 32 §2b binds the turn and crop checks to the amended schedule and retains the frame-resolution refinement. Amendment 3 says no re-anchor occurred. The build record moves the crop probe to 9,500 ms, the first sampled crop after a clear top edge at 9,250 ms. Its claim that the source peaks at about 9,500 ms is unverified: the logged white-pixel box is larger at 9,750 ms, and that whole-frame statistic does not isolate the icon. Record 9,500 ms as the first sampled crop and the chosen build anchor, qualify the source peak, and reconcile the amendment and build record. The HOLD stands on the executable evidence gaps even if the runner accepts the re-anchor. (`RUN.md` §2b, `plan-amendment-cycle035.md:9–11`, `build-record.md:11–22`.)

4. **The core construction clears the parameterization, purity, and fidelity-plan pre-checks.** CONFIG contains five scene objects, five front maps plus one profile map, and six caption slots including one blank. The renderer consumes the maps, timeline, palette, and transform settings. Both purity patterns returned zero hits, and all three inline scripts across the recreation and comparison passed syntax checks. The build record explicitly names the flat-map turn approximation and defers per-pixel 3D redraw, consistent with the census-corrected plan. (`recreation.html:25–240,284–376`, `config-census.md:20–53`, `build-record.md:83–110`, `item-T190-observe-plan.md` §§1–2.)

**Limits.** This review covered the on-disk paperwork, source inspection, and targeted logic checks. Browser playback, rendered glyph bounds, and source-frame measurements were not independently verified. Specimen version fidelity and cut count remain UNVERIFIED as recorded in `build-record.md:114`.

**Body-write: none (read-only run)**
tokens used
60,259
**HOLD — ASSERTED-CHECKS.** Return T190 attempt 1 to Execute before spending the Cycle 035 Wave 32 scoring wave.

| Dimension | Score |
|---|---:|
| Parameterization | 0.90 |
| Purity pre-check | 1.00 |
| Own-checks completeness | 0.25 |
| Fidelity-plan honesty | 0.90 |

## Findings

1. **A11 timing evidence is incomplete.** CP5b is filed at a fixed 9,000 ms. The 7,200 ms swap receipt checks the replacement caption and leaves the corresponding rotation assertion untested. The filed swap log also lacks paired instant-and-state receipts for CP3, CP5, CP6, and CP7. Derive CP5b from the midpoint of the configured camera turn-out window and file the same state predicate at both tempos. The current CONFIG gives 9,000 → 7,200 ms for that midpoint and 9,500 → 7,600 ms for the crop probe, using the configured 8,000–10,000 ms window, peak fraction `0.75`, and tempo factor `0.8`. Rerun and file the remaining checkpoint pairs. The count receipt also prints six poses but its PASS predicate lists only scenes and captions. Add `poses == 6` to the executable count assertion. (`build-record.md:28–79`, `recreation.html:188–193,273–275`, `item-T190-observe-plan.md:110–121`, `plan-amendment-cycle035.md:13–17`.)

2. **The fit table’s empty HIT list is unsupported.** The caption widths come from character count × font size × `0.55`, and the stated ink height comes from font size. The measured-fit guard requires post-layout glyph geometry at the 360 px surface. CP5 has a separate geometry gap: `boundsFor` uses an unprojected vertical extent while the renderer applies perspective. Replace the caption estimates with measured glyph bounds, including both L3 cases, and file crop and caption-band results from geometry that matches the renderer across the planned turn samples. Until measured, the affected rows are HITs. (`fit-table.md:3–19`, `guard-measured-fit.md` §What the leg checks, `recreation.html:258–282,370–376`, `item-T190-observe-plan.md:96`.)

3. **The crop re-anchor needs a consistent record.** Wave 32 §2b binds the turn and crop checks to the amended schedule and retains the frame-resolution refinement. Amendment 3 says no re-anchor occurred. The build record moves the crop probe to 9,500 ms, the first sampled crop after a clear top edge at 9,250 ms. Its claim that the source peaks at about 9,500 ms is unverified: the logged white-pixel box is larger at 9,750 ms, and that whole-frame statistic does not isolate the icon. Record 9,500 ms as the first sampled crop and the chosen build anchor, qualify the source peak, and reconcile the amendment and build record. The HOLD stands on the executable evidence gaps even if the runner accepts the re-anchor. (`RUN.md` §2b, `plan-amendment-cycle035.md:9–11`, `build-record.md:11–22`.)

4. **The core construction clears the parameterization, purity, and fidelity-plan pre-checks.** CONFIG contains five scene objects, five front maps plus one profile map, and six caption slots including one blank. The renderer consumes the maps, timeline, palette, and transform settings. Both purity patterns returned zero hits, and all three inline scripts across the recreation and comparison passed syntax checks. The build record explicitly names the flat-map turn approximation and defers per-pixel 3D redraw, consistent with the census-corrected plan. (`recreation.html:25–240,284–376`, `config-census.md:20–53`, `build-record.md:83–110`, `item-T190-observe-plan.md` §§1–2.)

**Limits.** This review covered the on-disk paperwork, source inspection, and targeted logic checks. Browser playback, rendered glyph bounds, and source-frame measurements were not independently verified. Specimen version fidelity and cut count remain UNVERIFIED as recorded in `build-record.md:114`.

**Body-write: none (read-only run)**
