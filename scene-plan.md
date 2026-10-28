# SOA-01 (scenes style) — SCENE PLAN + THE STYLE'S DECISION MODEL

*Tree: `hidden_files/soa01-scenes/` · text of record:
`transcript-v4.md` (21 lines, 199 words) · style of record per
the owner's pivot of 2026-10-28: **background scene images
switching with the narration (crossfading, story-conveying) +
word animation only. No asset animation.** This plan is the
metadata layer for that style: every variable the style has is
enumerated here and closed. UNDECIDED = 0 (audit in §7).*

The style's virtue is a small variable set. There are no asset
tracks, no per-asset movement, no choreography: a scene is a
still image with a switch point; a word event is text with a
seat, a direction, and an anchor. What remains is decided below,
completely.

---

## §1 The cadence rule — decided, with evidence

**RULE C-1 (the scene-switch cadence).**
- **Target dwell: 2.0–3.5 s per scene.**
- **Hard ceiling: 5.0 s** — no background is ever held longer,
  whatever the word layer is doing (word events add visual
  change inside a dwell; they never extend the ceiling).
- **Floor: 1.4 s** — a narration line shorter than the target
  band gets exactly one scene, whose dwell is its line block.
- **Every switch lands on a narration thought boundary** — a
  measured word anchor (a sentence start, a clause joint marked
  by a dash or comma in the text, an inventory strike) — never
  mid-word and never on a bare metronome tick.
- **First switch ≤ 3.0 s in** (at L1's "billion" anchor).
- **Two scored exceptions:** (a) the L5→L6 designed silence —
  the darkened scene (S9) holds through the question's end and
  the 1.2 s silence; its total dwell is 2.19 s, inside the
  ceiling anyway; (b) the tail — the final scene holds through
  the 2.0 s tail (total dwell 2.81 s, also inside the ceiling).

**Evidence.** (1) A frame-by-frame measurement of 54 viral
YouTube Shorts (Viibeo's pacing study): median shot length
**4.7 s**, fastest quarter ≤ **2.8 s**, first cut at ≈**1.9 s**;
its edit guidance: change the picture within the first 2 s,
cut or reframe every 3–5 s, and put cuts on pauses in the
voice. (2) A practitioner pacing calibration by video length
(Komet Media): 60+ s videos → a cut every **3–5 s**; 35–60 s →
2–4 s; static shots longer than 4 s are "danger zones" for
scroll-away; educational/B2B content takes the **slower end**
of each range because an idea needs a beat to land. (3) An
analysis of the top-100 Shorts of 2024 (Vidpros): average clip
**2.5 s** correlated with 35% higher completion than clips
averaging 4+ s — entertainment-skewed, so treated as the fast
bound, not the target. (4) Pattern-interrupt guidance (Virvid):
high-performing Shorts average a visual change every **2–4 s**.
(5) The honest counterweight (Viralfaceless, "Cut on the
Thought, Not the Clock"): no sourced study proves one magic
number, and no data shows meaning-cuts beat clock-cuts — which
is why C-1 pairs its band with the anchor rule instead of
trusting either alone, and why the band is a decision to be
tested against this channel's own retention data after publish,
not a law of nature.

**Why this band for this film:** the film is a ≈81 s
educational explainer (the 60+ s bracket), arguing one idea —
it takes the slower, idea-landing end of the evidence: target
2.0–3.5 s sits between the measured median's fast quarter
(2.8 s) and the 60+ s bracket (3–5 s), the ceiling takes the
bracket's own top (5.0 s), and every switch is pinned to the
narration's thoughts, which is the one qualitative rule both
the measurement study and the counterweight agree on. The
owner's prior (≈ every 1–3 s) is honoured at the band's fast
edge; going faster than the band for an argued explainer would
spend comprehension the idea needs. **Result on this film:
33 scenes, mean dwell ≈ 2.45 s, longest dwell 3.45 s (S22),
shortest 1.45 s (S32, floor rule).**

Sources:
- https://www.viibeo.com/blog/youtube-shorts-length-2026
- https://www.kometmedia.com/tutorials/pacing-and-cuts-for-high-retention-short-video
- http://vidpros.com/video-clip-length/
- https://virvid.ai/blog/shorts-retention-blueprint-ai-data-signals
- https://viralfaceless.io/blog/how-often-to-cut-a-short-cut-on-the-thought

## §2 The scene-image style spec — one look for all 33 backgrounds

Lineage: the family that scored up to 85 (soa-01 v2, trunk
phase-28) was dark, minimal, and type-led — near-black fields,
cream serif type, gold stress words, one clear schematic idea
per beat. This style keeps that family's palette, type, and
one-idea discipline, and upgrades the dark field to a real
story-conveying scene image, per the owner's direction.

- **Rendering:** moody cinematic illustration — painterly,
  soft volumetric light, subtle film grain. Not photoreal
  faces, not flat vector, not the rejected engraved cast.
- **Palette (every scene):** deep ink-navy and near-black
  shadows as the base; warm gold practical light; cream
  highlights. The v2 family's colours, carried into imagery.
- **Framing:** 1080×1920. One clear subject per scene, placed
  in the middle band (y ≈ 700–1300). The top and bottom thirds
  stay darker, lower-detail negative space — that is where the
  word layer lives.
- **People:** shown from behind, at distance, or as hands —
  never a close-up face (keeps the faceless discipline and
  removes the face-defect class entirely).
- **No text inside any image.** No logos, no screens with
  readable words, no signage. All words are the word layer's.
- **Consistency mechanism (decided):** every scene prompt is
  built as `[STYLE BLOCK] + [scene subject sentence]`, with the
  STYLE BLOCK used **verbatim** in all 33 prompts:
  *"Moody cinematic illustration, deep ink-navy and near-black
  shadows, warm gold practical light, cream highlights, soft
  volumetric light, subtle film grain, one clear subject in
  the middle band, darker quiet negative space in the top and
  bottom thirds, no text, no logos, no close-up faces,
  vertical 9:16."*
  Seed discipline: seed = 4100 + scene number, fixed generator
  settings across the set. Acceptance check per image at build
  (before any render): ≥55% of pixels in the ink/navy range,
  exactly one dominant subject, no text artifacts, no close-up
  face — one regeneration per scene on failure, then the
  failure is reported, not silently accepted.

## §3 Transitions (decided)

- **Standard crossfade: 0.40 s** (linear α blend) between
  scenes — the family's fade, used everywhere except:
- **Sharp crossfade: 0.25 s** at the two verdict joints: into
  S10 ("Nothing.") and into S14 (the definition resolving).
- **Final fade:** the last scene + word layer fade to black
  over the final **1.00 s** of the tail, with the master audio
  fade (assembly's standing value).
- No other transition types exist in this style. No zooms, no
  pans, no Ken Burns — the images do not move; only switches
  and words move. (Foreclosed, by the style's definition.)

## §4 The word layer — its complete system

- **Typeface:** Noto Serif Display Bold (the face of record).
  **Ink:** cream `#F1E7CE`; the single stress word inside a
  phrase event is cast gold `#D9A94E` (the v2 family's rule).
- **Scale classes (cap height):** HERO 120 px · STANDARD 72 px
  · SMALL 48 px. No other sizes exist.
- **Zone grid (event seats, 1080×1920):** columns x-centres
  300 / 540 / 780; rows y-centres 480 / 800 / 1250 — all inside
  the standing safe zone (x 100–960, y 250–1500):
  Z-TL (300,480) · Z-TC (540,480) · Z-TR (780,480) ·
  Z-ML (300,800) · Z-C (540,800) · Z-MR (780,800) ·
  Z-LL (300,1250) · Z-LC (540,1250) · Z-LR (780,1250).
- **Direction set (closed, 6):** RISE (enters 90 px below the
  seat, settles up) · FALL (90 px above) · SLIDE-R (120 px from
  the left) · SLIDE-L (120 px from the right) · GROW (scale
  0.80→1.00 at the seat) · STAMP (scale 1.18→1.00 at the seat).
- **Entry:** 0.35 s easeOutCubic, starting on the event's word
  anchor. **Exit:** fade 0.30 s, at the point each event row
  states (line end, clause end, or HOLD as stated).
- **Legibility:** type sits on the images' dark negative
  space by design (§2 framing); where a scene's measured mean
  luminance inside an event's zone is high at build QA, a soft
  black scrim at α 0.35 sits behind that event's type. The
  scrim is part of the type layer, never part of the image.
  No subtitle plate, no caption line, ever — the narration
  text is not captioned; only the decided events appear.
- **Density rule:** at most 2 events per line, except the
  three scored strike-lines (L4, L18: strike sequences; L15:
  the persisting accumulation) and the mantra (L19–L21),
  where the doctrine makes type richest.
- **Doctrine:** type appears wherever the words carry the
  story (kinetic-type doctrine, 2026-10-28); the mantra lines
  are the prime site; a line with no event carries a FORECLOSED
  record with its reason (one line: L7).

## §5 Timing basis

Scene windows are stated on the **v3 programme clock** (the
locked A7 timings: lead 1.20 s, line starts/durations and gaps
per the Director's Scores and the locked gap map; programme
0.00–77.02 s). v4 changes one line: L8's block lengthens by Δ =
(new L8 take duration − v3 L8 take duration), estimated
+≈3.7 s. **Standing rule:** every window from L9 onward shifts
by +Δ at build; L8's three windows are set by its clauses and
locked from the new take's measured anchors; all other dwells
are shift-invariant. Absolute times below are therefore the
v3-clock planning values; anchors govern.

---

## §6 The scenes — 33, each fully specified

*Window = v3-clock programme seconds (§5). Switch-in anchor =
the narration event the crossfade centres on. Each scene's
prompt = the §2 STYLE BLOCK + the subject sentence below.*

| # | Line | Window | Dwell | Switch-in anchor | Scene shows |
|---|---|---|---|---|---|
| S1 | L1 | 0.00–≈2.90 | 2.90 | programme start | A sea of people at night, each lit by their own phone's glow — the crowd of users, wide and high. |
| S2 | L1 | ≈2.90–5.02 | 2.12 | the word "billion" | One person alone at a desk, face lit by a chat window — the count becomes people. |
| S3 | L2 | 5.02–6.76 | 1.74 | L2 start (floor rule) | The same figure closer, the screen's glow reflecting them — the mirror: you are one of them. |
| S4 | L3 | 6.76–9.42 | 2.66 | L3 start | A conversation mid-flow, session after session stacking upward like pages — everything you build there. |
| S5 | L3 | 9.42–11.42 | 2.00 | the word "accumulating" (measured 9.416) | The chat window as a glass cabinet on a distant server wall, your sessions filed inside it — it sits in their box, still growing. |
| S6 | L4 | 11.42–12.95 | 1.53 | L4 start | A wooden desk from above: handwritten instruction cards, an open notebook, a stack of folders — your three possessions as objects. |
| S7 | L4 | 12.95–15.26 | 2.31 | the word "memory" | The same desk tighter: notebook and folders in warm light — the inventory, closer. |
| S8 | L5 | 15.26–17.30 | 2.04 | L5 start | A small lit digital home at dusk, its door swinging shut — if that account closed tonight. |
| S9 | L5 | 17.30–19.49 | 2.19 | the words "closed tonight" | The same home dark, windows black, door shut — the question hangs through the designed silence (exception C-1a). |
| S10 | L6 | 19.49–22.04 | 2.55 | L6 start (sharp fade 0.25) | An emptied rented room, bare walls, a set of keys left on the counter — nothing; it was all rented. |
| S11 | L7 | 22.04–24.28 | 2.24 | L7 start | A vast luminous engine core in a dark hall, light pouring from it — the model supplies the intelligence. |
| S12 | L8 | 24.28–cl.1 end | ≈2.8 | L8 start | Hands at a keyboard in warm light; the conversation's words becoming visible notes drifting toward a forming layer — your interaction, becoming material. |
| S13 | L8 | cl.1 end–"preferences," | ≈2.9 | the words "— the harness:" | The three sources as objects on a workbench: instruction cards, feedback notes with corrections marked, preference dials — what the harness is made of. |
| S14 | L8 | "distilled…"–block end | ≈2.9 | the word "distilled" (sharp fade 0.25) | The materials distilled: a clear, ordered, glowing layer of condensed pages settling into place — the harness, distilled from your sessions. |
| S15 | L9 | 29.12–31.55 | 2.44 | L9 start | The finished layer as one object between two doorways — a lit corporate tower on one side, a warm home on the other. |
| S16 | L10 | 31.55–≈33.95 | 2.40 | L10 start | Inside a bright platform facility, a system assembling a layer for a user — their platform builds it for you. |
| S17 | L10 | ≈33.95–≈36.35 | 2.40 | the first dash ("— from your own sessions") | Streams of a user's own past sessions flowing from their devices into the platform's builder. |
| S18 | L10 | ≈36.35–38.35 | 2.00 | the second dash ("— and keeps it") | The finished layer behind glass in the platform's vault — and keeps it on their side. |
| S19 | L11 | 38.35–≈41.30 | 2.95 | L11 start | A home desk at night; the owner building the same layer themselves, tools in hand. |
| S20 | L11 | ≈41.30–43.76 | 2.46 | the dash ("— same model") | The same desk; the engine beneath the layer swapped for a different one, the layer untouched. |
| S21 | L12 | 43.76–46.73 | 2.97 | L12 start | A split frame: the same warm light of intelligence glowing in two different homes. |
| S22 | L13 | 46.73–50.18 | 3.45 | L13 start | A row of identical glowing engines, each wearing a paper "rented" tag (tag carries no readable words — a blank tag shape). |
| S23 | L14 | 50.18–52.20 | 2.02 | L14 start | The owner's layer at home, its light moving outward — your harness works the other way. |
| S24 | L14 | 52.20–54.25 | 2.05 | the sentence "Everything you put into it stays." | Objects being placed on the owner's shelves, remaining there in calm light. |
| S25 | L15 | 54.25–57.35 | 3.10 | L15 start | The layer richer than before: a fresh session note pinned to it, its edge honed bright — adds; sharper. |
| S26 | L15 | 57.35–60.39 | 3.04 | the sentence "It grows and matures by use." | The same layer matured — like a tended workbench after seasons: organized, deep, alive with use. |
| S27 | L16 | 60.39–63.22 | 2.83 | L16 start | The layer kept like a deed in the owner's own strongbox at home, the key in the owner's hand. |
| S28 | L17 | 63.22–66.27 | 3.05 | L17 start | The layer spread open on the owner's screen, every page readable, no locks anywhere. |
| S29 | L18 | 66.27–≈68.90 | 2.63 | L18 start | Hands opening the layer, reading a page, editing a line with a pen. |
| S30 | L18 | ≈68.90–71.17 | 2.27 | the dash ("— any time") | The same desk; beside it an open gate, no permission desk, no guard. |
| S31 | L19 | 71.17–72.76 | 1.60 | L19 start (floor rule) | The layer unrolled as a legible map across the desk, the owner studying it. |
| S32 | L20 | 72.76–74.21 | 1.45 | L20 start (floor rule) | The owner's hands mid-build, the layer half-assembled under warm work light. |
| S33 | L21 | 74.21–77.02 | 2.81 | L21 start | Evening calm: the owner glancing over the finished layer at home, a watchful light over it — holds through the tail (exception C-1b). |

## §7 The word events — 27, each fully specified

*Anchor = the spoken word the entry starts on. Stress word in
an event is gold; the rest cream. Exit is FADE 0.30 unless the
row says HOLD or PERSIST.*

| # | Line | Event text | Zone | Direction | Scale | Anchor | Exit |
|---|---|---|---|---|---|---|---|
| E1 | L1 | 1.2 BILLION | Z-TC | GROW | HERO | "billion" | line end |
| E2 | L2 | ONE OF THEM | Z-LC | RISE | STANDARD | line start | gap end |
| E3 | L3 | ACCUMULATING | Z-MR | RISE | STANDARD | "accumulating" | line end |
| E4a | L4 | Your INSTRUCTIONS. | Z-LL | SLIDE-R | STANDARD | "instructions" | PERSIST to line end |
| E4b | L4 | Your MEMORY. | Z-C | RISE | STANDARD | "memory" | PERSIST to line end |
| E4c | L4 | Your FILES. | Z-LR | SLIDE-L | STANDARD | "files" | line end (all three exit together) |
| E5 | L5 | YOURS? | Z-LC | GROW (slow, 0.60 s entry) | STANDARD | "yours" | holds through the designed silence; fades in its last 0.40 s |
| E6a | L6 | NOTHING. | Z-C | STAMP | HERO | "Nothing." | line end |
| E6b | L6 | IT WAS ALL RENTED | Z-LC | FALL | SMALL | "rented" clause start | line end |
| — | L7 | *(no event — FORECLOSED: a level setup line; scene and narration carry it, mirroring the marked-text record's "unmarked by decision")* | | | | | |
| E7 | L8 | DISTILLED | Z-MR | RISE | STANDARD | "distilled" | exits as E8 lands |
| E8 | L8 | the HARNESS | Z-TC | GROW | HERO | "harness" | HOLD to line end |
| E9 | L9 | TWO PLACES | Z-TC | GROW | STANDARD | "two" | line end |
| E10 | L10 | YOUR OWN SESSIONS | Z-ML | RISE | SMALL | first dash clause | second dash |
| E11 | L10 | THEIR SIDE | Z-LR | FALL | STANDARD | final clause start | line end |
| E12 | L11 | YOUR OWN COMPUTER | Z-LC | RISE | STANDARD | "own" | line end |
| E13a | L12 | SAME INTELLIGENCE. | Z-ML | SLIDE-R | STANDARD | line start | second sentence |
| E13b | L12 | TWO DIFFERENT HOMES. | Z-MR | SLIDE-L | STANDARD | second sentence start | line end |
| E14 | L13 | RENTED | Z-TC | GROW | STANDARD | "rented" | line end |
| E15 | L14 | STAYS | Z-LC | FALL | STANDARD | "stays" | HOLD to line end |
| E16a | L15 | ADDS | Z-LL | RISE | SMALL | "adds" | PERSIST |
| E16b | L15 | SHARPER | Z-C | RISE | SMALL | "sharper" | PERSIST |
| E16c | L15 | GROWS · MATURES | Z-LR | RISE | SMALL | "grows" | line end (all three exit together — the word layer accumulates like the layer) |
| E17 | L16 | YOURS | Z-C | GROW | HERO | "yours" | HOLD through the gap; exits at L17 start |
| E18 | L17 | NOTHING HIDDEN | Z-TC | RISE | STANDARD | "nothing" | line end |
| E19a | L18 | OPEN IT | Z-LL | STAMP | SMALL | "Open" | PERSIST |
| E19b | L18 | READ IT | Z-C | STAMP | SMALL | "read" | PERSIST |
| E19c | L18 | CHANGE IT | Z-LR | STAMP | SMALL | "change" | PERSIST |
| E19d | L18 | WITHOUT ASKING ANYONE | Z-LC | RISE | SMALL | dash clause start | line end (all four exit together) |
| E20a | L19 | UNDERSTAND | Z-TC | GROW | HERO | "Understand" | HOLD to line end |
| E20b | L19 | the harness | Z-TC (beneath E20a) | RISE | STANDARD | +0.15 s after E20a | line end |
| E21a | L20 | BUILD | Z-ML | GROW | HERO | "Build" | HOLD to line end |
| E21b | L20 | your own harness | Z-ML (beside E21a) | RISE | STANDARD | +0.15 s after E21a | line end |
| E22 | L21 | KEEP → AN EYE → ON IT (three strikes, one event) | Z-TL → Z-C → Z-LR | GROW each | HERO | "Keep" / "eye" / "it." | all HOLD through the tail; leave only in the final fade — the title phrase is the film's last type, and the eye travels diagonally across the frame as it lands |

## §8 Audio — per-line take plan (decided)

| Lines | Take plan |
|---|---|
| L8 (v4) | **NEW TAKE at build.** Default voice (`avocado_v2:MAI_03`), synthesized from the marked v4 text in `transcript-v4.md`; ASR fit ≥ 0.85 required; the em-dash breath silence-measured per the markup standard's verification loop. Its measured duration sets Δ (§5); all anchors from L9 onward are re-measured and re-locked at build. |
| L1–L7, L9–L21 | **KEEP the verified takes of record** (v2-programme takes + phase-A7's L3/L10 takes, as assembled in the Academy programme). No re-synthesis. Their anchors stand as measured in the Director's Scores. |

Music bed, gap map (lead 1.20 s; per-line gaps per the locked
map; tail 2.00 s), and mastering targets (−14 LUFS, TP ≤ −1
dBTP, by the permitted deterministic chain of record) are
assembly inheritances from the Academy programme — unchanged,
not re-decided here.

## §9 Audit — the style's variable set, closed

- **Global variables — 33, all DECIDED:** canvas/format (1) ·
  cadence band: target / ceiling / floor (3) · anchor-switch
  rule (1) · first-switch rule (1) · word-events-don't-extend-
  ceiling (1) · scored exceptions (2) · crossfades: standard /
  sharp / final (3) · image style: palette / rendering /
  framing / negative space / people rule / no-text rule /
  style block / seed discipline / acceptance check (9) ·
  typeface (1) · ink colours (2) · scale classes (3) · zone
  grid (1) · direction set (1) · entry profile (1) · exit
  fade (1) · scrim rule + value (2) · density rule (1) ·
  take-plan rule (1).
- **Scene rows — 33**, each with subject, window, switch-in
  anchor: all DECIDED (§6).
- **Word-event rows — 27** (E1–E22 with lettered strikes),
  each with text, zone, direction, scale, anchor, exit: all
  DECIDED (§7). One FORECLOSED absence (L7), reason recorded.
- **Take rows — 21**: 20 KEEP-verified, 1 NEW (§8).
- **UNDECIDED = 0.** Nothing in this style is left to the
  build's discretion except executing the acceptance checks
  and measurements the plan itself prescribes.

## §10 Verification plan (for the build that follows)

1. Contact-sheet all 33 generated scenes against §2 (palette
   fraction, one subject, no text, no close-up face) before
   any render; phone-size (390×693) legibility check of every
   word event over its scene.
2. Switch-point check on the render: every crossfade centre
   within ±1 frame of its scored anchor.
3. Frame-difference pass: no unintended frozen stretch beyond
   the two scored exceptions; every dwell inside C-1.
4. Loudness/format on the final MP4 (−14 LUFS / TP ≤ −1 dBTP,
   1080×1920@30); ASR fit of the new L8 take ≥ 0.85 with its
   dash breath in the standard's band.

---

## Revision — 2026-10-28 (S13 repair): corrections are MARKS, never letterforms

*Recorded revision, appended — the §6 S13 row above is NOT rewritten;
this note supersedes its subject wording wherever the two differ.*

**The contradiction.** §2/§10's global rule bans all text inside
images ("No text inside any image… All words are the word layer's"),
while §6's scored S13 subject ("instruction cards, feedback notes
with corrections marked, preference dials") inherently invited
letterforms. The first generated S13 carried clearly legible English
("adjust strap", "REVISE – tighten", "OK"), and the build's QA note
falsely recorded "no legible words at full size (handwriting
texture)" instead of failing the acceptance (drift-check LOG
2026-10-28 14:40 ET; STEERING freeze on #112).

**The resolution.** Per the owner's ruling of 2026-10-28 ~14:50 ET
(current-work contradictions are fixed in-work, not parked; the
regen/keep owner fork is withdrawn): the plan's no-text rule
GOVERNS, and S13 was regenerated text-free under it. The defective
original is preserved as a rollback asset
(`work/s13-original-with-text.png`); the repair is recorded in
`hidden_files/jobs/2026-10-28-s13-repair.md`.

**S13 subject, clarified (superseding wording):** the three sources
as objects on a workbench — instruction cards with blank faces,
feedback notes corrected with MARKS ONLY (red check marks, red
underlines, red strike-through strokes, abstract ink marks that
never form letters or words), and preference dials — what the
harness is made of. **Corrections are marks, never letterforms.**

**Standing clarification (whole plan):** the global no-text rule
governs wherever any scene's subject description could invite text.
Any scored subject that inherently carries writing (notes, cards,
screens, signs, tags) must carry an explicit text-treatment decision
— blank faces / abstract marks only — reconciled against the
no-text rule at plan closure; a subject description that invites
letterforms without that decision leaves the plan unclosed.
(Recorded instances under this clarification: S22's tag was already
scored "blank tag shape"; S13 now carries the marks-only treatment
above; all other scenes' subjects carry no writing surfaces.)

---

## Revision — 2026-10-28 (word-layer enrichment): the widened palette at 10–20% calibration

*Recorded revision, appended — §7's rows are NOT rewritten; this note
supersedes the FORM of the seven expressive events named below and
corrects one defective exit. Everything else in §7 stands as built.
Authority: the owner's word-animation direction of 2026-10-28
~14:56–15:10 ET (MEMORY ★ WORD-ANIMATION PALETTE; calibration in
`files/style-reference-kinetic-typography-network.md`): words are
scene actors, never subtitles; per-event FORM is a decision from a
wide palette (chosen font · dynamic resize · emphasis strike ·
traversal · image-asset word); the reference ("Mad As Hell!" — 450
words, all performing) is the EXTREME end and this film's dosage is
10–20% of it.*

**Font set (3 faces, roles decided).** BASE — Noto Serif Display
Bold: every calm event, unchanged (the face of record). EXPRESSIVE
— Noto Sans Display Black: the verdict voice, a blunt grotesque set
against the film's serif world. MANTRA — Noto Serif Display Black:
the base family's heaviest weight, the same voice raised — the
naming and the closing mantra. No other faces exist in this film.

**Expressive tally: 7 of 34 events** (E22 counts once; its three
strikes are one event). The other 27 events stay calm — §7 form,
seat, direction, scale, anchor, exit, and the scrim probe exactly
as built and verified. Justification axis: the transcript's own
stress map — the dosage is spent where the argument turns (the
first verdict, the naming, the two-places verdict, the custody
climax) and on the mantra, the doctrine's prime site. The opener
(E1, HERO as built) deliberately stays calm: its job is
orientation, and its scored GROW already carries it.

**The seven, re-decided (FORM + parameters):**

- **E6a NOTHING. (L6) — emphasis strike, EXPRESSIVE face.** The
  calm STAMP hardened: scale trajectory 1.30 → 1.00 over 0.22 s
  (easeOutCubic), seat Z-C, HERO class, anchor/exit as built. The
  film's first verdict lands as a blunt fact in a foreign face.
- **E8 the HARNESS (L8) — dynamic resize (swell), MANTRA face.**
  Scale trajectory 0.70 → 1.06 over 0.45 s (easeOutCubic), then
  settle 1.06 → 1.00 over 0.25 s. Seat Z-TC, HERO, HOLD exit as
  built; segments/ink as built ("the" cream, HARNESS gold). The
  naming: the concept's word grows past its rest size — the only
  overshoot in the film's first half — and settles as the
  definition completes.
- **E9 TWO PLACES (L9) — traversal, EXPRESSIVE face.** Path: from
  centre (240, 480) to seat Z-TC (540, 480) — 300 px of horizontal
  travel over 0.55 s (easeOutCubic), alpha ramping with the
  travel. STANDARD class, anchor/exit as built. The line's claim
  is spatial (the layer sits in two places); the phrase itself
  travels in from the home side and takes its seat.
- **E17 YOURS (L16) — IMAGE-ASSET word (the film's one).** The
  word as an object: five carved serif capitals, dark walnut
  sides, aged gold-leaf faces — generated, keyed, and held at
  `work/wordasset-yours-cutout.png` (generation prompt as scored
  below; source + keying record in the enrichment job report).
  Rest width 600 px (240 px tall) at Z-C over S27's strongbox.
  Entry SETTLE: scale 0.88 → 1.00 and alpha 0 → 1 over 0.50 s
  (easeOutCubic); anchor/exit as built; NO scrim (decided — the
  object carries its own contrast). At the custody climax the
  word stops being type and becomes the kept thing itself.
  Generation prompt of record: "Five three-dimensional serif
  capital letters spelling the word YOURS, standing in a row as
  solid carved objects: dark walnut wood sides, bright aged
  gold-leaf letter faces, warm golden light on the faces. The
  letters stand centred against a pure solid white background,
  evenly lit, no shadows on the background, nothing else in the
  frame. Moody painterly illustration, subtle film grain. No
  other objects, no other text, no people." (The first attempt,
  on black, was unkeyable — its faces measure as dark as its
  background glow; the white-background regeneration is the
  separable asset. Both sources are preserved in work/.)
- **E20a UNDERSTAND (L19) — dynamic resize (swell), MANTRA
  face.** Scale trajectory 0.85 → 1.10 over 0.50 s (easeOutCubic),
  settle 1.10 → 1.00 over 0.30 s. Seat Z-TC, HERO, gold, HOLD as
  built. Mantra line 1: understanding expands past expectation
  and rests. (E20b beneath it stays calm, as built.)
- **E21a BUILD (L20) — traversal, MANTRA face.** Path: from
  centre (90, 800) to seat Z-ML (300, 800) — 210 px of travel
  over 0.50 s (easeOutCubic), the word sliding in from the
  frame's edge to its place; HOLD exit as built. Mantra line 2:
  building is assembly in motion. (E21b beside it stays calm.)
- **E22 KEEP → AN EYE → ON IT (L21) — kinetic strikes, MANTRA
  face.** Each strike swells 0.80 → 1.08 over 0.30 s (easeOutCubic)
  then settles 1.08 → 1.00 over 0.15 s, on its own spoken anchor
  (78.38 / 78.62 / 78.92), seats Z-TL → Z-C → Z-LR (the scored
  diagonal), all HOLD through the tail into the final fade. The
  title phrase is the kinetic peak of the film, as the doctrine
  orders.

**Renderer mechanics (new, closed set).** Four expressive modes
join §4's direction set for these events only: STAMP-HARD
(1.30 → 1.00 / 0.22 s), SWELL (three-point scale trajectory:
start → peak → rest, segments as scored per event), TRAVERSE
(linear seat-ward travel over a scored distance/duration,
alpha ramping with travel), SETTLE (image-asset entry: scale +
alpha over a scored duration). Entry alpha for typed expressive
events follows the entry ease as in §4. The §4 direction set,
entry/exit profiles, scale classes, zone grid, scrim rule, and
frame-fit rule are otherwise unchanged; the frame-fit rule
applies to expressive typed events at rest scale exactly as to
calm ones.

**Defect corrected in this pass — E7 DISTILLED's exit.** The
build's renderer tuple carried E7's exit as 27.22 s — §7's "exits
as E8 lands" transcribed literally — but in the v4 take the word
"harness" (27.22) is spoken BEFORE "distilled" (30.12), so the
exit preceded the entry and E7 never appeared on screen (frame
evidence: the current film at t = 30.6 / 31.2 / 32.0 shows Z-MR
empty while E8 holds). The build report's "34/34" counted the
render list; the gates' presence probes were never implemented.
CORRECTION: E7's exit is the L8 line end, 32.324 s — the same
line end E8 holds to — so DISTILLED rises on its anchor and the
two L8 events co-reside until the line ends (within §4's density
for the naming line). E7's form is otherwise calm and unchanged.
The correction is verified by frame check in the enrichment job
report (`hidden_files/jobs/2026-10-28-word-enrichment.md`).

**Word-layer audit after this revision:** every event carries a
decided FORM (calm §7 form or an expressive form above), face,
scale trajectory, seat/path, anchor, residence, and exit.
UNDECIDED = 0. Expressive tally 7/34 (≈20% of events; the mantra
holds 3 of the 7). Scenes, switches, and audio are untouched by
this revision.

---

## Appendix — 2026-10-28 (gap hunt): additions to the style's standing decision model

*Written by JOB GAP HUNT (report: `hidden_files/jobs/2026-10-28-gap-hunt-soa01-scenes.md`).
The foundation audit (§9) closed the variables the plan listed; the gap hunt
decomposed the deliverable itself and found compartments the list missed.
The next scenes+words piece inherits this fuller map. Until each row below
is decided in a piece's own plan, that piece's undecided count is NOT zero.*

1. **SUBJECT FIDELITY (per scene).** The acceptance check gains a semantic
   gate: the generated image must convey the scored subject's story beat,
   judged by a human/agent eye against the §6 sentence — palette fraction
   and subject count do not imply it. (Failures of record in this film:
   S12's "notes" rendered as sheet music; S28's "layer spread open,
   readable" rendered as a botanical sketchbook in a graphics editor.)
2. **TEXT-TREATMENT (per scene).** Every scene whose subject carries a
   writing surface — cards, notebooks, notes, screens, pages, maps, tags,
   signage — carries its own explicit treatment decision (blank faces /
   abstract marks only / texture-only), reconciled with the no-text rule
   at plan closure. In this film only S13 and S22 carried one; eight more
   scenes (S02, S05, S06, S12, S25, S28, S29, S31) rode on generator
   outcome. The S13-repair revision's sentence "all other scenes'
   subjects carry no writing surfaces" is inaccurate and is corrected by
   this row.
3. **PACKAGE (per piece).** The piece objective is carried in the piece's
   own tree (not only upstream), and title, description, thumbnail, and
   playlist/end-screen are decided variables with a compartment of their
   own — decided before any publish step. This tree shipped with none.
4. **CANON (per piece).** One row: which Academy canon/art governs this
   piece (canon.md sections, accepted reference boards/images, the song,
   the site), where each was consulted, and the date. "Not consulted" is
   a recorded finding, not an oversight discovered later. This film's
   shipped plan consulted none — lineage to trunk v2 only.
5. **FRAME-FIT + LINE CAP (word layer).** Decided at plan level: when a
   scored event's box exceeds its seat's in-frame span, the completion
   rule (this build's: shrink to fit inside a 40 px margin, seat centre
   never moves) applies — and the renderer catalogue's 1000 px
   single-line cap is a plan-layer value, not a code surprise.
6. **SCRIM TRIGGER (word layer).** The scrim's numeric trigger is a
   decided value in the plan (this build's probe — bright fraction ≥0.10
   at luminance ≥0.42, or brightest quartile ≥0.55 — stands as the
   candidate of record until a piece's plan promotes or replaces it).
7. **AUDIO INHERITANCES (named, per piece).** Bed identity (what the bed
   is, not only how it is patched), per-line gap map, lead, tail, and
   splice method are carried as named rows in the piece's own plan —
   inherited values are recorded as inherited, with their source.
8. **CODEC / PIPELINE (per piece).** Encoder, quality value, and preset
   are recorded decisions (this build: libx264, CRF 17, preset medium),
   not code-only defaults.
9. **FIRST FRAME (per piece).** The opening frame is a decided variable
   (subject, composition, what the hook promises in the first second),
   not merely whatever scene 1 entails.
10. **PRESENCE BY PROBE (verification rule).** A word event counts as
    present only when a frame probe at its residence window shows it.
    Render-list counts are not evidence. (Lesson of record: E7 DISTILLED
    had zero on-screen life in the first build while its gate reported
    34/34.)

---

## Revision — 2026-10-28 (ending revision): the Hadosh Academy close

*Recorded revision, appended BEFORE the build, per the causal model —
§6/§7's rows are NOT rewritten; this section supersedes the tail design
(S33's C-1b tail-hold and E22's final-fade-only exit) wherever the two
differ. Everything upstream of L21 is untouched.*

**Authority.** The owner's #112 verdict (2026-10-28 ~16:06 ET): the film
is "a very good example" and publishable, CONDITIONAL on a better
ending — "make a connection to Hadosh Academy at the end… follow us to
learn more about the ways to bring more of the harness to your control…
plug in the Hadosh Academy at the end." The governing standard
(MEMORY ★ ENDING STANDARD): an ending must CARRY the viewer — invite
onward to a named next thing AND plug the Academy in the piece's own
terms; a silent bridge card alone does not satisfy it, and a cold
viewer must understand what the Academy is from the ending itself
(no bare name-drop). The old tail failed that standard: the mantra
completed over S33 and the film simply faded — an invitation to
contemplate (L19–L21), with no onward step and no Academy.

**Design of the close.** The mantra (L19–L21) still completes exactly
as built — it is the film's argument arriving. Then a held breath,
then two new spoken lines (L22–L23) over three new scenes (S34–S36):
the plug states what the Academy teaches in the film's own terms
(the harness, under your control — the owner's substance, nearly
verbatim), and the follow line names the onward step and closes on
the mantra's own action (build your own). The final image is the
doorway onward: the way from this film into the Academy's teaching,
left open.

### The plug lines (content + marked synthesis text)

**L22 — (the plug: the Academy named, its teaching stated)**
- **Clean:** At Hadosh Academy, we teach you to bring the harness under your own control.
- **Marked:** At HADOSH ACADEMY, we teach you to bring the harness under your own control.
- **Intent:** one primary stress — the name itself, set in caps as a
  single stress unit (a proper noun is one stress, as HARNESS was at
  L8; the name is this line's poster moment, E23a). The comma after
  the name is its breath: the institution lands, then the promise.
  The promise clause rides level — a statement of fact, not a sell.
  No exclamation, no ellipsis (the film's standing foreclosures).
- **Why this shape:** a cold viewer who has just learned what the
  harness is hears, in one breath, who teaches it and what the
  teaching does (brings the harness under YOUR control — L18's
  "without asking anyone" cashed as a curriculum). 13 words.

**L23 — (the follow: the onward step + the takeaway action)**
- **Clean:** Follow Hadosh Academy — build your own.
- **Marked:** Follow Hadosh Academy — build your OWN.
- **Intent:** the em dash is the pivot breath (L8's precedent: dash =
  the turn before the point lands). One caps stress: OWN — the word
  the whole film turns on (L11 "your own computer", L16 "yours"),
  landing the L20 mantra's command as the viewer's own next act.
  The name rides level here — it was already posterised one beat
  earlier; repeating the stress would spend it.
- 6 words. Banned-word scan on L22+L23: **0** ("lives" 0).

### The closing scenes (this film's §2 style; STYLE BLOCK verbatim)

*Text-treatment decisions are stated per scene per the gap-hunt
appendix row 2 (writing surfaces carry an explicit decision).*

| # | Line | Switch-in anchor | Scene shows |
|---|---|---|---|
| S34 | L22 | L22 start ("At") | The finished layer — a spread of glowing pages and cards — lifting off the owner's desk and opening toward the viewer like doors swinging toward camera, warm gold light spilling out. The film's world opens to admit the viewer. **Text treatment:** page/card faces blank or abstract marks only, no letterforms. |
| S35 | L22 | the word "bring" (the promise clause's joint) | The owner's hands drawing the opened layer in over their own desk, taking hold of its edges — the harness being brought under the owner's control, warm work light. **Text treatment:** pages blank / abstract marks only. |
| S36 | L23 | L23 start ("Follow") | Evening calm, wide: the home room at rest, the layer open on the desk glowing softly, and in the background a door standing open, warm light beyond it — the way onward, left open. Holds through the tail (the C-1b tail-hold exception transfers from S33 to S36; S33's scored exception lapses — it no longer holds the tail). **Text treatment:** no dominant writing surface; desk pages marks-only. |

Subject reasons: S34 turns S14/S26's settled layer back toward the
viewer — the plug is an act of opening, and the image performs it.
S35 gives the plug's verb ("bring… under your own control") a literal
pair of hands: custody taken, the L29/L30 gesture completed at the
scale of the whole layer. S36 rhymes with S33 (evening calm, the home)
and adds the one element S33 lacked — the open door — so the last
frame is an invitation, not a full stop.

### The closing word events (enriched palette; dosage stays in band)

| # | Line | Event text | Face | Zone | Direction | Scale | Anchor | Exit |
|---|---|---|---|---|---|---|---|---|
| E23a | L22 | HADOSH ACADEMY (all gold — the name is one stress unit, as the mantra strikes are) | MANTRA | Z-TC | SWELL (0.80 → 1.08 over 0.40 s, settle → 1.00 over 0.20 s — the E22 strikes' trajectory, slowed for a two-word poster) | HERO | "Hadosh" | HOLD to line end, then fade 0.30 |
| E23b | L22 | UNDER YOUR **CONTROL** (CONTROL gold) | BASE | Z-LC | RISE | STANDARD | "under" | line end |
| E24 | L23 | BUILD **YOUR OWN** (YOUR OWN gold) | BASE | Z-C | RISE | STANDARD | "build" | HOLD through the tail; leaves only in the final fade — the film's last type is the viewer's takeaway action, succeeding E22 in that office |

- **E22 consequential change:** the mantra strikes no longer leave
  only in the final fade (there is now film after them). They HOLD
  through the post-L21 breath and exit with the standard 0.30 s fade
  completing at S34's switch anchor. Their form, seats, anchors are
  unchanged.
- **Dosage accounting:** expressive tally becomes 8 of 37 event
  entries (E23a joins the seven); the two new lines add ≈9 s of
  mostly calm screen, so the layer's realised intensity stays at the
  ≈15% calibration, inside the owner's 10–20% band. The poster is
  spent on the name — the one moment the ending standard requires
  to be unmissable — and nowhere else in the close.

### The splice design (sample-exact construction; anchors measured after)

- **Cut point:** the current v4 raw assembly is kept whole through
  the end of L21's voice (measured on the v4 master: "it." ends
  79.06). Everything before that sample is byte-identical in
  behaviour: same scenes, switches, events, audio.
- **The breath:** 0.90 s of bed follows L21 — the mantra gets its
  held beat before the close begins (between the designed silence
  after L5, 1.20 s, and the post-L8 gap, 0.873 s; a full second
  would start a new film, less would rush the mantra's landing).
- **Block construction** (the Academy assembly's own method, as
  assemble_v4): [breath 0.90 · L22 take · gap 0.55 · L23 take ·
  tail 2.00] of voice-track (silence where no voice) + a bed patch
  of the same total length, looped from the programme's own gap
  material exactly as the L8 block's bed was made; spliced to the
  kept head with the standing 0.010 s splice crossfade. Gap 0.55
  (the follow follows the plug closely — one gesture, two beats;
  the programme's inter-line gaps run 0.3–0.9). Tail 2.00 s = the
  locked tail value, transferred to the new end.
- **Voice level:** each new take's active-speech RMS is matched to
  the shipped master's L8 span reference, the identical calibration
  that produced the current film's L8 (assemble_v4's method).
- **Mastering:** the programme's deterministic chain of record
  (master_v4's method: final 1.00 s cosine fade applied at the NEW
  end, fixed gain solved to target, fixed-ceiling 0.805 lookahead
  limiter) → ≈ −14.5 LUFS / TP ≤ −1 dBTP. Video final fade likewise
  moves to the new final 1.00 s.
- **New runtime (estimate, locks at build from the measured
  takes):** 79.06 + 0.90 + L22 (≈4.8) + 0.55 + L23 (≈2.2) + 2.00 ≈
  **89.5 s** (recorded estimate band 89–91 s).
- **Dwell check on the estimate (C-1):** S33 78.28→L22 start ≈
  1.68 s ✓ (floor 1.4); S34 ≈ 2.7 s ✓; S35 ≈ 2.7 s (incl. the 0.55
  gap in its window) ✓; S36 ≈ 4.2 s incl. tail ✓ (ceiling 5.0,
  C-1b transferred). Final dwells lock from measured anchors.

### Audit of the ending compartment — UNDECIDED = 0

Decided above: plug text (clean + marked, per line) · banned-word
scan · line count and order · breath length · inter-line gap · tail
length and its transfer · cut point · bed construction · voice-match
reference · mastering chain and targets · final-fade placement ·
3 scene rows (subject + reason + text treatment + switch anchor) ·
3 event rows (text, segments/ink, face, zone, direction +
trajectory, scale, anchor, exit) · E22's consequential exit ·
expressive tally and calibration accounting · C-1b transfer ·
runtime estimate. The PACKAGE compartment (gap-hunt appendix row 3)
remains open by design — it belongs to the publish step, which is
not this job. **UNDECIDED = 0 for the ending compartment.**

### Verification plan (for this build)

1. Scene acceptance for S34–S36 per §2 + appendix row 1 (subject
   fidelity by eye against the scored rows) and row 2 (text
   treatment): ink share ≥ 0.55; one dominant subject; no legible
   text; no close-up face; phone-size (390×693) legibility of
   E23a/E23b/E24 over their scenes. One regeneration per scene on
   failure, then the failure is reported.
2. ASR fit of both new takes ≥ 0.85 (faster-whisper small, the L8
   gate); word anchors for L22/L23 Whisper-measured on the new
   master (measure pass extended); switch anchors locked from
   measurement, not estimate.
3. Presence by probe (appendix row 10) for E23a, E23b, E24, and a
   re-probe of E22a/b/c — frame probes inside each residence
   window against the scene-only composite, the fidelity probe's
   method.
4. Switch audit including S34/S35/S36: every crossfade's 50% mix
   point within 0.15 s of its scored anchor.
5. Loudness/format on the final MP4: ≈ −14.5 LUFS (±0.25), TP ≤
   −1 dBTP, 1080×1920@30, full decode clean; duration = the new
   locked total.
6. Ending specimen extracted (the final ≈20 s, all layers) and
   the plug moment frame-checked at phone size.
