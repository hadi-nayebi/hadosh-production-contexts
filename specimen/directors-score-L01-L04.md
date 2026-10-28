# DIRECTOR'S SCORE — soa-01 (Academy), L1–L4 — the opening and the container

*Written 2026-10-28 (JOB FULL-FILM-SCORE-PREP) under the DIRECTORIAL
DERANDOMIZATION doctrine (Hadi, 2026-10-27 ~22:49 ET): every directorial
detail of these scenes is decided HERE, before animation — staging geometry,
entries and exits, timing values, easing and weight, dwell, stream behaviour
per clause, cortex-web state per line, sound-sync word points, and the
viewer-learning expectation per beat. Anything the build must decide that is
not in this document (or its machine twin,
`directors-score-full-remainder.json`) is an improvisation and therefore a
defect. This score covers the film's first two scenes — A-S01 (L1–L2) and the
first movement of A-S02 (L3–L4) — and is written to the exact standard of the
judged segment's score (`directors-score-L05-L12.md`), whose Scene 1 this
score joins by construction: Scene B below ENDS in the segment Scene 1's
exact opening state, so the full film's L3–L6 play as one continuous scene.*

*Cast: `specimen/cast-design-1/` ONLY (blessed, ruling #103 A). One master
file per character; every appearance derives from it. The Thinker is ONE
character (Consistency Law): `assets/thinker-master.png`, 1081×1485,
head:total ≈ 1:2.7.*

*MOVEMENT REVISION (2026-10-28, Hadi's #107 steer — the segment scored 55:
assets passed, movement failed as renderer-default randomness): the closing
section of this file, **MOVEMENT SPEC — Scenes A and B**, now carries the
per-asset movement layer for every beat below (paths + velocities, named
curves, anticipation/overshoot, idle, emphasis, opacity, exits), under the
Movement Grammar stated in full in `directors-score-L13-L21.md`. **A
movement value that is not in this score does not ship.***

*Canvas 1080×1920 @ 30 fps. Stage everywhere: void `#05090F`, vignette 0.2,
floor glow (540,1605) rx 640 ry 140 α .10 (the segment's stage values).*

## Audio of record — and the projected timeline

No audio is produced by this score. The full build assembles: the v2
programme takes for the unchanged lines + the phase-A7 takes for the two
changed lines (L3 here; L10 in the segment), gaps per
`inherited-base/phases/phase-26/audio/gaps-v2.json` (gaps[X] = silence AFTER
line X), bed continuous (pauses are narration-only), master ≈ −14 LUFS /
TP ≤ −1 dBTP.

All times below are on the **projected v3 full-film timeline**: line starts
inherited from the measured v2 programme (`phase-26/audio/starts-default.json`),
durations start-to-start from the same records, L3's duration replaced by its
A7 take (4.260 s), and the segment block (L5–L12) placed at the segment
score's own times + 14.756 s. Total projected length **77.023 s ≈ 2311
frames**. As in the segment score, every event time is a projection: the
build re-anchors each event to the assembled master's measured word times
before render, and starts lock at assembly per the transcript's standing
rule.

| line | start | end | text |
|---|---|---|---|
| L1 | 1.200 | 4.474 | One point two billion people use ChatGPT every week. |
| L2 | 5.024 | 5.956 | You are one of them. |
| L3 | 6.756 | 11.016 | Everything you build there sits inside their chat box, accumulating with every session. |
| L4 | 11.416 | 14.456 | Your instructions. Your memory. Your files. |

## Word anchors — measured (all four lines; the L3 record discharged 2026-10-28)

Source: `inherited-base/phases/phase-28/scene/scene-v2-default.json` words[]
— measured per-word times on the takes of record (the v2 default programme;
L1, L2, L4 are verbatim in v3, so their anchors carry), converted to the
projected timeline by line-start offset.

- **L1:** One 1.372 · point 1.589 · two 1.915 · **billion 2.214** · people
  2.649 · use 3.029 · ChatGPT 3.246 · **every 3.681** · week. ends 4.395
- **L2:** You 5.196 · are 5.375 · one 5.415 · of 5.544 · **them. 5.606–5.837**
- **L3:** Everything 6.756 · you 7.136 · build 7.336 · there 7.536 ·
  sits 7.796 · inside 8.016 · their 8.396 · chat 8.596 · **box, 8.816–9.176**
  · **accumulating 9.416–10.036** · with 10.036 · every 10.236 ·
  **session. 10.476–10.816** — measured 2026-10-28 (see the L3 record
  below); clause 1 = 6.756–9.176, inter-clause pause 9.176–9.416,
  clause 2 = 9.416–11.016.
- **L4:** Your 11.564 · **instructions. 11.781–12.763** · Your 12.763 ·
  **memory. 12.981–13.879** · Your 13.879 · **files. 14.096–14.456**

**★ L3 — MEASURED AND LOCKED (2026-10-28, JOB FULL-FILM SCORE CLOSURE —
the missing-record mandate discharged).** The phase-A7 L3 take
(`phases/phase-A7/audio/line-L03-default.wav`, 4.260 s — duration matches
the A7 record) was measured with faster-whisper "small" (the L12
measurement's method): per-word anchors are recorded in the list above
(take-local + 6.756 = the projected times shown). **The locks, executed:**
the Cards' arrival (Scene B, beat 2) starts on the measured
**"accumulating" = 9.416** (arrival window 9.416–10.516); the clause
windows are measured — clause 1 6.756–9.176 · pause 9.176–9.416 ·
clause 2 9.416–11.016 — and the beat windows and glow ramps below are
keyed to them. The shelf pulse (decay 10.3–10.9) brackets the measured
landing (10.516) as written and stands. No L3 value in this score is an
estimate.

## Viewer-learning expectations (viewer terms, written before production)

- **L1:** *The scale: over a billion people use this, every week — this is
  about almost everyone.*
- **L2:** *I'm one of them — this is about me.*
- **L3:** *Everything I build there keeps accumulating inside their
  container — the stock grows with every session, whether I think about it
  or not.*
- **L4:** *What's in there is real and mine-shaped: my instructions, my
  memory, my files — I can name them, and they're behind their glass.*

## Standing laws carried into these scenes

- **Statue-still Thinker** (the segment's named adaptation 5 governs over
  CAST.md's "breathes / turns / gestures" rows): the figure never moves in
  these scenes; address and emphasis are carried by staging, light-points,
  and the nodes.
- **Kinetic type — the C-29 ration is RETIRED (2026-10-28, owner
  doctrine; governing amendment §9A.1-A).** Type appears wherever the
  words carry the story, every appearance fully decided. In these
  scenes: F-T1 (L1) stands; type is **FORECLOSED at L2, L3, L4, each
  with its reason** (word-placement re-audit, 2026-10-28): at L2 the
  singling point's descent IS the line made visible — type would
  caption the mirror; at L3 accumulation is enacted by the Cards'
  arrival into their slot; at L4 the named objects themselves answer
  on their words, in order — type would caption an inventory the stage
  is already speaking.
- **No unscored stillness (defect-3 fix pattern):** every inter-line gap
  carries scored motion; events start early / overlap into the next beat.
- **Legible energy scale (defect-1 lesson):** no stream appears in L1–L4;
  the one energy element is the Case's thread, staged as in the segment.
- **One focus per beat (defect-4 lesson):** Scene A has exactly two elements
  in play (number, Thinker) plus one point; Scene B's focus order is fixed
  per beat below.

## Named adaptations (score level, recorded — not improvised)

- **A-R1 (shared with the L13–L21 score):** CAST's pose rows yield to the
  statue-still law and the blessed cast's single file (see Standing laws).
- **L2's "Address turn" (CAST)** is carried by the singling point's descent
  onto the Thinker's cap — no address pose exists in the blessed cast, and
  inventing one is a cast decision for Hadi, not a score improvisation.
- **L3's accumulation** is staged as the Cards' *arrival into its existing
  slot* — not as an added node — because Scene B must end in the segment
  Scene 1's exact opening state (the matched-stage join below). The stock
  grows by one, on screen, inside their container: the line's claim is
  enacted without breaking the join.

---

## SCENE A — A-S01 · The Counting Stage (0.00–6.756) · L1–L2

*CAST: vertical theatrical void, a low broad golden mist bank, a dark
reflective floor; the monumental centre is where the number stands. Tempo
form: HELD (L1), then MEASURED (L2). Web state: absent — the count precedes
the layer.*

**Staging.** Thinker master **h 380** (w 277), box **(96,1240)–(373,1620)**,
lower-left, facing right toward the number. The Model is **offstage**
(decided): human scale is established before any machinery. Golden mist bank:
glow centre (540,1560), rx 620, ry 90, α .12, slow lateral drift ±18 px,
11 s period, whole scene. Scene fades in 0.00–0.45 from void.

**F-T1 — the number (the film's first type event).** "1.2 BILLION",
in the film's chosen typeface (RE-AUDIT CLOSURE: Noto Serif Display
Bold — see the governing closure, §9A.2), 140 px, cream, centred **(540,700)** — monumental against
the small figure. It assembles 1.20–2.05 (α 0→1, scale .92→1.0, easeOut),
completing on **"billion" (2.214)**; then a slow loom (scale →1.02) through
the line's end. One soft under-glow (centre (540,760), rx 330, ry 54) pulses
α 0→.18→0 across **"every week." (3.681–4.474)** — one pulse, one week: the
recurrence is in the staging, not the words.

**L2 — the mirror.** As the line opens, the number **recedes**: scale
1.02→.86, dy −120, α →.30, 5.02–5.85 easeInOut — the crowd steps back as the
mirror lands. **The singling point** (gold, r 7): descends from the number's
base (540,780) to the Thinker's cap brim **(330,1255)**, 5.42–5.84
easeInOut, landing on **"them." (5.606)**; rests at α .9→.5; dims out inside
the crossfade. Type: absent at L2 (decided).

| beat | window | event | sync (measured) |
|---|---|---|---|
| A·1 | 1.20–4.474 | The number assembles monumental; Thinker small at the lower edge; one under-glow pulse | complete on "billion" 2.214; pulse on "every week." 3.681 |
| A·2 | 5.02–5.956 | Number recedes; one gold point descends from the number to his cap | point lands on "them." 5.606 |
| A·gap | 5.84–6.756 | Point rests, then dims inside the crossfade; recession completes — no dead air | defect-3 pattern |

**Transition A→B:** crossfade 6.36–6.756 (0.40 s) into the Rented Glass Room.

---

## SCENE B — A-S02 · The Rented Glass Room, first movement (6.36–15.256) · L3–L4

*CAST: tall glass cabinet stage-right; the Thinker stage-left among drifting
file fragments. Tempo form: MEASURED (L3), MEASURED (L4). Web state:
**scattered** both lines — the same files that become the web at L8, here
unlinked, in their custody. The film's spine rhyme is set up here.*

**Staging = the segment score's Scene 1 geometry, verbatim.** Thinker master
h 850, box **(0,730)–(619,1580)**, facing right toward the Case. Case h 900,
box **(622,680)–(1072,1580)**; glass rect **(762,774)–(932,1413)**; case
group pivot at the case centre (847,1130). Nodes inside the glass: Book
w 105 centre (847,905) · Folder w 165 centre (847,1090) · Cards w 150 centre
(847,1262). The Thread: bandB w 16 flat on the bottom shelf.
**The Key** (`cast-design-1/assets/key.png`, expansion 2 — scored in the
L13–L21 score's § New cast): rests OUTSIDE the glass on the floor at the
Case's base, centre **(600,1518)**, **w 120**, lying horizontal — in
their room, not yet his; it carries no event in these scenes.

**Entry deltas (L3 start, 6.756).** Book and Folder are placed but **loose**:
bright .85, unsynchronised drift (dx ±10 px sine; Book period 6.3 s, Folder
5.1 s), damping to rest by 11.016. **Cards is NOT yet placed** — its absence
is scored. Interior glow α .42 (rising: →.46 across clause 1, →.48 across
clause 2, →.50 across L4). Thread restless: shimmer (offset 6 px sine, 4 s)
+ lateral slide ±14 px, 3.2 s period, α .30.

**Beat B·1 — L3 clause 1 (measured window 6.756–9.416, incl. the
inter-clause pause).** The room holds its loose
stock: two files drifting out of sync inside the glass, the thread restless,
the glow rising slowly. Nothing links; nothing is his to touch. The viewer
learns the container before its contents are named.

**Beat B·2 — L3 clause 2 (measured window 9.416–11.016).** **The Cards arrive.**
From the glass's right-edge shadow (985,1262) the Cards slide to their slot
(847,1262): dx −138→0, α 0→1, bright .85→1.0, 1.1 s easeOut, with a soft
shelf pulse in the interior glow (+.06, decaying 10.3–10.9) as they land.
Scored to the clause "accumulating with every session"; the entry start is
**locked to the measured word "accumulating" (9.416)** — arrival window
9.416–10.516 (see the L3 record above). The stock has grown by one —
inside their box, on their shelf.

**Beat B·3 — L4 (11.416–14.456), measured anchors.** The inventory answers,
in the line's own order; no links form; after each answer the value returns
to rest:

| answer | window | event | sync (measured) |
|---|---|---|---|
| instructions. | 11.70–13.20 | Cards lift against the glass (dy −26, bright 1.0→1.08, easeOut), then settle back | "instructions." 11.781–12.763 |
| memory. | 12.95–14.456 | Book glows deeper (bright →1.30 + warm glow α →.28, easeInOut), then decays to 1.0 | "memory." 12.981–13.879 |
| files. | 13.90–14.456 | Folder slides into view (dx +34→0, α .92→1.0, easeOut) | "files." 14.096–14.456 |

**The matched-stage join (hard lock).** At **14.456** every value equals the
segment Scene 1's opening state, exactly: interior glow α **.50** · grey veil
0 · Book/Folder/Cards bright **1.0** at the slots above · thread α **.35**,
shimmer running. The full film's A-S02 scene then continues into L5–L6 on
the segment score without a seam.

**Gap L4→L5 (14.456–15.256).** Held room: thread shimmer + glow breathing
(.50 ±.01, 4 s period) only — pre-question tension, scored motion, no freeze
(defect-3 pattern).

| beat | window | event | sync |
|---|---|---|---|
| B·1 | 6.756–9.416 | Loose stock drifts unlinked inside the glass; thread restless; glow rising | measured clause window (anchors locked 2026-10-28) |
| B·2 | 9.416–11.016 | The Cards arrive into their slot and settle; shelf pulse | locked to measured "accumulating" 9.416 |
| B·3 | 11.416–14.456 | The inventory answers in order; all values return to the locked opening state | instructions. 11.781 · memory. 12.981 · files. 14.096 |
| B·gap | 14.456–15.256 | Shimmer + breathing only | defect-3 pattern |

**Type:** FORECLOSED at L3 and L4 (reasons in the standing laws above —
the arrival and the answering nodes carry those lines). **Web state:** scattered (L3),
scattered — nodes answer, still unlinked (L4).

## Gates for these scenes (build-time, by the segment score's method)

- **Gate 1 (staging map):** Scene A proportions (number monumental vs figure
  h 380); Scene B geometry pixel-equal to the segment Scene 1 map; the
  matched-stage join values at 14.456 verified field-by-field against the
  segment score.
- **Gate 2 (per-scene stills):** 50% and 80% frames — A: the number complete
  and looming, the point at rest on the cap; B: drift mid-travel, the Cards
  mid-arrival, each L4 answer at its peak.
- **Gate 3 (frame-difference):** no zero-motion stretch ≥ 2.0 s anywhere in
  0.00–15.256 (QC V-19); the L4→L5 gap's breathing must register.
- **Gate 5 (phone size):** 390×693 frames at t = 2.5 / 10.3 / 12.6 — the
  number monumental, the arrival legible, the answers readable.

---

## MOVEMENT SPEC — Scenes A and B (added 2026-10-28, per the #107 steer)

*Grammar: the Movement Grammar stated in full in
`directors-score-L13-L21.md` — named curves **TRAVEL** (0.42,0,0.58,1) ·
**SETTLE** (0.22,1,0.36,1) · **LAUNCH** (0.55,0,1,0.45) · **STAMP**
(easeOutBack s=1.2) · **SWELL** (sinusoidal) · **CONST** (linear); opacity
SETTLE-in / LAUNCH-out unless marked LINEAR (crossfades) or SWELL; idle laws
per asset class (nodes breathe scale 1±0.008 SWELL, links shimmer at
120 px/s, resting points perfectly still, Models' halos breathe ±.05 @
4.2 s, engraved figures/houses decided-still as diorama plates, type holds
exact). v_avg = path length ÷ duration; endpoint velocities are the named
curve's own.*

### Scene A — movement by asset

| asset | beat | movement |
|---|---|---|
| stage mist | A·1–A·2 | Lateral drift ±18 px **SWELL** (sinusoidal position), period 11 s, v_peak ≈ 10 px/s. α constant .12. The mist is the scene's only idle — everything else is figure, number, or point. |
| the number (F-T1) | A·1 | In place (type does not travel): α 0→1 **SETTLE** and scale .92→1.0 **SETTLE**, 1.20–2.05 — type fades with SETTLE, never linear (decided). Loom: scale 1.0→1.02 **CONST** (≈0.8%/s), 2.05–4.474. No anticipation, no overshoot — the number arrives like a fact. |
| number under-glow | A·1 | α pulse 0→.18→0 **SWELL**, 3.681–4.474 (one pulse = one week). |
| Thinker (small) | A·1–A·2 | **Decided stillness** — reason: statue law; in this scene he is the witness, the number is the actor. No breathing (engraved figures never breathe). |
| singling point (r 7) | A·2 | Path: straight segment (540,780)→(330,1255), 519 px, **TRAVEL**, 5.42–5.84 (v_avg ≈ 1236 px/s, ends at 0 px/s — it must LAND on the cap, not strike it). Rest: α .9→.5 **LAUNCH-curve on α**, 5.84–6.36. Exit: α →0 LINEAR inside the crossfade. At rest it does not drift (grammar). |
| the number (recede) | A·2 | Scale 1.02→.86 + dy −120 + α 1→.30, all **TRAVEL**, 5.02–5.85 (dy v_avg ≈ 145 px/s). The recession is one gesture on one curve — the crowd steps back as a single body. |

### Scene B — movement by asset

| asset | beat | movement |
|---|---|---|
| Thinker · Case | B·1–B·3 | **Decided stillness** (plates). The Case's glass sheen is static; its interior glow is the moving layer (below). |
| case interior glow | B·1–B·3 | α value changes on **TRAVEL-value** ramps: .42→.46 (clause 1 window), →.48 (clause 2), →.50 across L4 — glow never steps. Cards-landing pulse: +.06 bump, **SWELL** decay 10.3–10.9. Gap breathing (B·gap): α .50 ±.01 **SWELL**, period 4 s. |
| Book · Folder (loose drift) | B·1 | Sinusoidal dx ±10 px **SWELL-position**, periods 6.3 s (Book) / 5.1 s (Folder) — deliberately unsynchronised (v_peak ≈ 10 / 12 px/s), with a **decided damping envelope**: amplitude ×(1→0) LINEAR across 9.5–11.016, so the drift dies as L4 approaches. Bright .85 constant during drift; →1.0 TRAVEL-value across L4's first answers (Book by 12.95, Folder by 13.879). Idle after damping: node breathing (grammar) at the locked opening state. |
| Cards (arrival) | B·2 | Entry path: straight horizontal slide (985,1262)→(847,1262), 138 px, **SETTLE**, 1.1 s window **9.416–10.516, locked to the measured "accumulating" (9.416)** (v_avg ≈ 125 px/s, ends at rest). α 0→1 **SETTLE** on the same window; bright .85→1.0 TRAVEL-value. **Overshoot: none** (decided — furniture settles, it does not bounce). **Anticipation: none** (decided — it comes out of the glass's shadow unannounced; the platform does not warn him). Settle: a 0.15 s scale breath 1.02→1.00 SETTLE on landing (the shelf takes the weight). |
| Cards (lift) | B·3 | Anticipation: dip +5 px down **TRAVEL**, 11.68–11.78. Lift: dy +5→−26 (31 px) **SETTLE**, 11.78–12.28 (v_avg ≈ 62 px/s), bright →1.08 SWELL-attack. Hold at −26 to 12.30. Return: dy →0 **TRAVEL**, 12.30–13.20, bright →1.0. Sync: lift starts on "instructions." (11.781). |
| Book (glow answer) | B·3 | No path. Emphasis channel = glow + bright: warm glow disc α 0→.28 **SWELL** attack 12.95–13.30, hold to 13.60, decay →0 by 14.456; bright 1.0→1.30 **TRAVEL-value** 12.95–13.60, decay →1.0 by 14.456. The emphasis fully returns to the locked opening value — the join is exact in motion, not just in state. |
| Folder (slide answer) | B·3 | Entry-from-edge: straight horizontal path from +34 px east (partially clipped by the glass's right interior edge — decided: it slides INTO view, it does not fade in), dx +34→0 **SETTLE**, 13.90–14.40 (v_avg ≈ 68 px/s), α .92→1.0 SETTLE on the same window. Sync: starts on "files." (14.096). |
| the Thread (bandB w 16) | B·1–B·gap | Two scored idle motions, always running: shimmer — texture offset ±6 px **SWELL**, period 4 s; lateral slide ±14 px **SWELL-position**, period 3.2 s. α .30→.35 **TRAVEL-value** across L4, landing on the segment opening value .35. A band is never still while it is a live thread (grammar). |
| the Key | B·1–B·gap | **Decided stillness** (floor furniture, a plate). α 1 from the scene's fade-in; bright .80. Anticipation none; emphasis foreclosed in these scenes (decided — the inventory carries L4's emphasis; the key is noticed, not featured). Rotation 0°. |

**Gate addition (per the #107 doctrine):** Gate 4 (movement audit) from the
L13–L21 score applies here unchanged — every rendered movement traces to a
row above; spot-verify the singling point's landing (ends at rest) and the
Cards' arrival velocity (v_avg ≈ 125 px/s ± 10%) by frame measurement.

---

## RE-AUDIT CLOSURE — residual variables (2026-10-28, JOB SCORE-RE-AUDIT)

*The movement spec above already carries most of §11 for these scenes.
This appendix closes what it did not state, under decision-model §22.
The film-wide GOVERNING CLOSURE (identical in all three scores) follows
this appendix.*

| asset / event | anticipation | settle | rotation | z-order / residence notes |
|---|---|---|---|---|
| the number (F-T1) assemble + loom | none (stated in the spec: "arrives like a fact") | the loom IS its residence motion; at the recede it leaves on TRAVEL (spec) | 0° (policy; type never tilts) | above the mist, below nothing; its under-glow sits below the glyphs |
| singling point descent | **none — decided:** the point simply leaves the number; a wind-up would make the singling feel aimed rather than fated | TRAVEL ends at 0 px/s on the cap (spec); its rest (α .9→.5 LAUNCH-curve) is its settle-into-rest | n/a (radial point) | above the number and above the Thinker's cap — it lands ON him, visibly |
| stage mist drift | n/a (an idle) | n/a | n/a | the mist is the scene's only idle (spec); emphasis foreclosed — mist is never emphasized, decided |
| Book / Folder loose drift (L3) | n/a (idle-class motion) | the damping envelope (spec) is their settle into the locked opening state | 0° — drifting files stay level | inside the glass, below the glass sheen; after damping, node breathing per the film grammar (spec's locked state) |
| Cards arrival (L3) | none (stated in the spec: "it comes out of the glass's shadow unannounced") | the 0.15 s scale breath 1.02→1.00 (spec) IS the settle; overshoot none (spec) | 0° | inside the glass z-step at the shelf (the arrival is a slide within the glass, no layer crossing — decided, distinct from L10's flights) |
| Cards lift (L4) | **scored in the spec** (dip +5 px, 11.68–11.78) — the film's one L1–L4 anticipation | return on TRAVEL to slot-exact + bright →1.0 (spec): the settle is the exact return to the locked state | 0° | against the glass, above the shelf line |
| Book glow answer (L4) | none — decided: memory answers with light, instantly | glow decay →0 and bright →1.0 by 14.456 (spec) — the decay is the settle | n/a | glow disc behind the Book, inside the glass |
| Folder slide answer (L4) | none — decided: files answer when named | SETTLE lands slot-exact; hard stop recorded (slot precision, as Scene 2's travels) | 0° | slides IN from behind the glass's right interior edge — z below the glass frame, above the shelf |
| case interior glow (all ramps) | n/a (value) | ramps land on the locked values (.50 at 14.456) — the join is exact in motion (spec) | n/a | below the nodes, above the case body |
| the Thread (L3–gap) | n/a | α lands on .35 (the segment's opening value) on TRAVEL-value | tangent-entailed | on the bottom shelf, below the nodes |
| Thinker + Case (all beats) | — | — | 0° | decided stillness (spec); emphasis foreclosed for both in these scenes — the number and the inventory carry the emphasis |
| the Key (all beats) | none — decided | n/a (it never arrives; it is simply there from the fade-in) | 0° | on the floor at the Case's base, z above the floor glow, below nothing; decided stillness (movement spec) |

**L3 word-times — DECIDED, from measurement** (2026-10-28, JOB
FULL-FILM SCORE CLOSURE; governing amendment §17A.6-A): faster-whisper
"small" measured the A7 take; the anchors are recorded in the Word
anchors section and the Cards' arrival is locked to the measured
"accumulating" (9.416). The former FORECLOSED-by-measurement state is
discharged — nothing about L3 is estimated or pending.


## GOVERNING CLOSURE — film-wide (RE-AUDIT, 2026-10-28)

*Added by JOB SCORE-RE-AUDIT under decision-model §22: every governing
variable that applies to this film is closed here, in the score of
record. This table is identical in all three scores; a value that lives
only in build code does not count as decided, so each row names where
the value now lives.*

| # | Variable | Closure |
|---|---|---|
| M22 | Easing vocabulary | **DECIDED.** The only curves the film may use are the six named curves of the Movement Grammar (TRAVEL · SETTLE · LAUNCH · STAMP · SWELL · CONST), with their written control points. The segment code's functions map 1:1 and are foreclosed beyond this set: `eio`→TRAVEL, `eout`→SETTLE, `ein`→LAUNCH, `eoutback(s=1.2)`→STAMP, `bump` (sine)→SWELL, `lin`→CONST. |
| M23 | Realization fidelity | **DECIDED.** The full-film bake samples EVERY track at dt = 1/30 s (the segment's mixed 1/15 vs 1/30 densities are superseded); the renderer interpolates linearly between baked keys. Uniform density, chosen so no scene's motion smoothness differs by code habit. |
| M24 | Sync tolerance | **DECIDED.** Every named anchor lands within ±1 frame (0.033 s) of its MEASURED word time, verified post-render; an anchor that cannot be measured does not ship as an estimate (see the L3/L12 rows below). |
| M25 | Transition system | **DECIDED.** Scene joins are LINEAR crossfades only, at the durations scored per join; inside scenes, exits are events, never cuts. |
| M26 | Camera / viewport | **FORECLOSED.** Fixed frame in every scene of the film. Reason: the diorama stage grammar — all motion is the cast's; a camera move would be a new decision requiring a score amendment, not a build choice. |
| M13 | Rotation policy | **DECIDED.** Every asset's rotation is 0° at every moment, with ONE scored exception: the Gear (Scene D/E), rotating CONST 6°/s clockwise. Per class, with reasons: engraved figures, houses, furniture and the Case are plates — they do not tilt; the session cards fly LEVEL (they are documents, not birds — banking in flight is exactly the cartoon read the #107 verdict flagged); the bolt stays unrotated (its wipe reveal is its motion); tiles stay level; the Lens stays level (a held instrument); bands and light points follow their path tangent, which is entailed by the band/point realization, not a rotation choice. A decided 0° is a decision; it is written here so the renderer default is never again mistaken for one. |
| M8 | Anticipation | **DECIDED (governing rule).** Anticipation exists ONLY where a closure table scores it (Cards lift dip, L4 · Cards node dip, L18). Everywhere else anticipation is **none, decided**: furniture settles without warning, facts arrive without wind-up, the flinch has none by definition. An unscored anticipation in a render is an improvisation. |
| M10 | Settle | **DECIDED (governing rule).** Every arrival ends in exactly one of: a scored settle (duration + curve named), a scored squash (tiles), a scored glow/bright decay, or a recorded hard stop with its reason (session cards: dead stop = custody finality; light fronts: absorption at the node edge). Arrivals not covered by a row do not ship. |
| M11 | Opacity shapes | **DECIDED.** The only opacity shapes are SETTLE (in), LAUNCH (out), SWELL (pulses) and LINEAR (scene crossfades + the glass-crossing crossfade). The short linear ramps baked inside events (stamp α 0.05 s · HARNESS α 0.10 s · TWO PLACES α 0.12 s · flight in 0.08 s / out 0.10 s · slot-card 0.10 s) are promoted from `score.py` and decided as written in R-2: they are plaque/card materializations, not fades. |
| M12 | Brightness shapes | **DECIDED.** SWELL (the sine bump) is the film's one pulse shape — promoted from code, where it was universal by default; it is now universal by decision. Non-pulse brightness changes are value ramps on TRAVEL or SETTLE as tabled per event. |
| §9A.2 | Kinetic typeface | **DECIDED — CHOSEN: Noto Serif Display Bold** (`/usr/share/fonts/truetype/noto/NotoSerifDisplay-Bold.ttf`), for every type event in the film (all six tile events + F-T1's number). Reason: the cast world is vintage-engraving bookplate work (CAST-DESIGN: etched hatch, deep blue + brass + cream); a high-contrast display serif with engraved, bookplate letterforms belongs to that world, where DejaVu Serif Bold — a system default chosen by nobody, with screen-document letterforms — did not. The face is a designed face, installed on the build system, and its glyph coverage spans every scored render string (digits, capitals, the minus/hyphen set of the script-forms standard). DejaVu Serif Bold is foreclosed for type events from this closure on. |
| §9A.3 | Plaque design | **DECIDED (promoted from `render.py:plaque_img`, where it lived as code).** Per tile: rounded rectangle inset 2 px; corner radius 0.14 × tile; fill (22,35,60) = cast NAVY `#16233C`; outline (217,169,78) = cast GOLD `#D9A94E`, width max(2, tile/20); glyph height 0.60 × tile, centred (baseline offset −1 px as drawn); letter colour (241,231,206) = cast CREAM `#F1E7CE`. Reason: the plaque furniture is built from the cast's own palette tokens — that is why it read as belonging; it is now decided as score values, and any change is a score amendment. |
| §10B.2 | Glow falloff | **DECIDED (promoted).** Radial sprite 256 px; profile a = (0.5 + 0.5·cos(π·r))^1.6, r normalized to the sprite edge. Reason: the cosine falloff matches the soft halo in the cast plates; exponent 1.6 keeps the core tight so pools read as light, not fog. |
| §10B.6 | Stage light | **DECIDED (promoted).** Vignette: distance field centred (540,900), radii (760,1150), darkening 0.20 × clipped-distance². Floor glow as staged in the scores (centre (540,1605), rx 640, ry 140, GOLD, α .10). |
| §10B.7 | Light points | **DECIDED + FORECLOSED.** Point radii are scored per point (r 7/8/9 as tabled). Trails are **foreclosed**: points draw no trail — the one glow head is the coil's head point, drawn as a glow sprite at r × 3.2 (promoted from `draw_coil`). |
| §10B.5 | Sheen / glint / arc-glow | **DECIDED (promoted).** Case sheen: crop rect_frac [0.325, 0.115, 0.675, 0.805] at α 0.30 (both Cases). Glass glint: strip width 130 px, profile (1−|x|^1.6), sweep angle 18°. Arc-glow: Gaussian blur 0.35 × width. Link arcs draw in the link gold (228,183,92) — distinct from stream gold by decision: links are connections, streams are flow. |
| §10A.4 | Bust edge treatment | **DECIDED.** The bust's alpha dissolves over its bottom 110 rows with ramp (linear)^1.5 (declared in appendix A-2; the exponent is promoted from `render.py` here). |
| §11A.5 | Band anatomy | **DECIDED (promoted).** Texture crops: bandA [0,0,1920,330] · bandB [0,330,1920,642] · bandC [0,60,1920,330] + horizontal flip. Stamping: step = max(6 px, 0.45 × width); slice width 2.4 × step — the overlap hides the seams at band scale. |
| §11A.6 | Coil anatomy | **DECIDED (promoted from `render.py:coil_points`).** Radial profile r = rx · (0.55 + 0.45 · frac) along the trail; vertical squash 0.42; trail 260°; polyline sample step 4°. The wind widens as it newer-end approaches the head — that widening is the custody spiral's shape, now scored. |
| §13 | Audio joins | **DECIDED (promoted from `assemble_segment.py`).** Splice crossfades 0.010 s; bed-patch loop crossfade 0.30 s; master fade-out 1.0 s cosine. The bed never stops (standing law); these are its only joins. |
| §17A | Verification apparatus | **DECIDED.** The gate set is fixed for the whole film, in order: (1) staging maps, (2) per-scene stills, (3) frame-difference (every 0.5 s; no zero-motion stretch ≥ 2.0 s outside the named holds), (4) movement audit (every rendered motion traced to a score row; three velocities spot-measured ±10%), (5) phone size (390×693), (6) loudness/format re-measurement. The named-holds list = every "decided stillness" row in the three scores' closure tables. Sampling densities are as stated here, not per build. |
| §17A.6 | Estimate flags | **FORECLOSED (by measurement).** L3's missing word-times are NOT an undecided variable: they are foreclosed by a measurement mandate — Whisper-measure `line-L03-default.wav` before render, lock the Cards' arrival to the measured "accumulating," record the anchors in the build's score appendix. The same mandate is extended to L12: the segment's estimated anchors (≈29.45 / ≈30.35) are re-measured when the full build re-anchors the segment block; the halo pulse and Case return land measured, not estimated. |
| §12/§14 | Foreclosures | **FORECLOSED:** SFX layer · ambience beds (narration + bed only, lane law) · mechanical loop seam (an excerpt/film ending on a scored fade has no loop to design) · word-by-word subtitle containers (the rationed-type form forecloses them). |
| §3–§8 | Inherited compartments | **ENTAILED.** Objective, content, script text, delivery and voice are decided upstream in the tree (transcript v3 of record, phase-A7 adoptions, verified takes, gaps record) and entailed by those records; this score set inherits them decided and does not re-open them. |
| §9A.1-A | Type-event set (amendment, 2026-10-28) | **DECIDED — the six-event ration is RETIRED** (owner doctrine from Hadi's #108 verdict: the closing mantra is the prime kinetic-type site; type appears wherever the words carry the story, every appearance fully decided). The film's set is now: F-T1 (L1) · F-T2 NOTHING (L6) · F-T3 HARNESS (L8) · F-T4 TWO PLACES (L9) · **M-T1** OPEN IT / READ IT / CHANGE IT plaques (L18) · **M-T2** UNDERSTAND tiles + F-T5 HARNESS (L19; F-T5 seat restaged into the mantra stack) · F-T6 BUILD (L20; seat restaged) · **M-T3** KEEP AN EYE ON IT plaques (L21; held through the tail — replaces the retired "type leaves"). Every other line carries a FORECLOSED type absence with its reason in the scene type notes. §9A.2's typeface decision extends to all mantra events. |
| §9A.3-A | Word-plaque geometry (amendment, 2026-10-28) | **DECIDED.** Height 76 px; width = the word's measured glyph width at 46 px cap height in the chosen face + 56 px total padding (the measurement is a build step; the rule is the decision); corner radius 0.14 x height; fill NAVY #16233C; outline GOLD #D9A94E, width max(2, height/20) = 4 px; letters CREAM #F1E7CE, glyph height 46 px, centred. Entry: drop 26 px STAMP (easeOutBack 1.2), 0.22 s + squash scaleY .92->1.0 SETTLE 0.08 s; alpha materializes 0.10 s (M11 plaque rule). |
| §17A.6-A | L3 measurement (amendment, 2026-10-28) | **DISCHARGED.** The L3 mandate is executed: faster-whisper "small" measured `line-L03-default.wav` (take duration 4.260 s, matching the A7 record); the per-word anchors are recorded in the L01-L04 score's Word anchors section and the Cards' arrival is locked to the measured "accumulating" (projected 9.416). L3 word-times are DECIDED from measurement. The L12 half of the mandate stands for the build. |
