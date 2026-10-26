# EXP-02 — soa-01 lines 1–3: CINEMATIC TYPOGRAPHY style specimen

**Kind:** STYLE EXPLORATION specimen (JOB STYLE-EXPLORE-1, under
Hadi's 2026-10-26 sleep mandate: "explore more different styles —
be a bit bold"). One specimen, built to be judged later on its own.
**Style named:** CINEMATIC TYPOGRAPHY — the #77 menu's "Kinetic
Typography" style, in the term Hadi used when he named the starting
set ("cinematic typography"). Starting-set member per #77.
**Intention:** test the boldest end of the type-only spectrum on the
catalogue's most statistic-led piece: no pictorial cutouts, no
objects — the letterforms themselves carry the story, through
dramatic scale contrast, weight contrast, and tracking choreography,
lit like a film title sequence. If type alone can make "1.2 billion"
feel monumental and make a correction ("Not tried it once. *Used*
it") land as a reversal, the style earns a lane.

## The segment

soa-01 lines 1–3, span per the package/registry line windows:
**full-piece 2.200 s → 12.640 s (10.440 s of narration windows)**.
314 frames at 30 fps (10.4667 s of video); container measures
10.466016 s. The segment audio is the clone programme audio over
the same span (stream copy, below).

- L1 (2.20–4.86): "State of adoption — October 2026."
- L2 (4.86–7.68): "One point two billion people used ChatGPT this week."
- L3 (7.68–12.64): "Not tried it once. Used it — this week. A billion people, every week, talking to a model."

Word texts and word start times are the package records verbatim
(`decisions/word-decisions.json`; 31 spoken words in the segment.
The registry's line texts strip the em-dashes; the spoken words are
identical.)

## Inputs — exact versions

| Input | Version / hash |
|---|---|
| Verified clone render (audio source) | `files/soa01-clone-v1.mp4`, sha256 `5b67bea3fc93109e9ea98b36610c0ec3bbc7236d93db8f6f189c96f55491068d` (CLONE-VERIFIED, package `audio/audio.json`) — hash re-verified against the file at build time |
| Segment audio | AAC 48 kHz stereo, stream copy of the clone render's audio over [2.200, +10.4667], sha256 `a52b49ee3928e98cdfcd83fbda8d95e6c8b0766c76e06bc1bc733591085940ea` (10.472 s by packet count) |
| Word timings / texts | package `decisions/word-decisions.json` |
| Line windows | package `transcript/transcript.md`; registry `hidden_files/voice-upgrade/registry.json` pieces[soa-01].lines |
| Style | #77 menu + starting set (files/a59-motion-brief.md) |

## The specimen

`cinematic-scene.html`, sha256 `bd5667346595c782a62ac564b953679bb1c97e914a6ba93db0f42519e594d857`
`cinematic-segment.mp4`, sha256 `1250dcd0944f1028c26bb77b5b9a6a3d842fe87ecf830ea6691aea1727ee963b`

One self-contained HTML scene (1080×1920, `renderAt(t)`
deterministic; headless Chrome on a private port, 314 PNG frames,
libx264 CRF 12 stitch, segment audio stream-copied in). The scene
also plays standalone in a browser (click to play; visuals follow
the media clock; the segment audio is embedded).

Treatment, beat by beat:
- **A film-title opening.** "STATE OF ADOPTION" assembles word by
  word in light-weight capitals whose letter-tracking contracts as
  each word lands (0.30 em → 0.12 em) — the tracking IS the motion.
  A hairline rule draws across; "OCTOBER 2026." lands under it in
  amber, as a dateline. (Display case is a CSS text-transform; the
  word texts themselves are the package's verbatim.)
- **The statistic becomes a monument.** As "One / point / two" are
  spoken in modest light type, the numeral glyphs **1 . 2** assemble
  behind them at 640 px in ghosted warm white — the statistic's
  number as a monumental typographic object. Then "billion" arrives
  at 232 px Black weight, scaling up from 0.72 with its tracking
  tightening, in front of its own numeral. "people used **ChatGPT**
  this week." settles beneath at reading size, ChatGPT in heavy
  weight.
- **Depth instead of exits.** Nothing cuts away: the title pushes
  up and shrinks into a header as the number builds; the whole L2
  composition then recedes to 16% — still faintly readable — as
  L3 takes the stage in front of it.
- **The correction is a scale reversal.** "Not tried it once." is
  set small, muted, in italic serif — and dims further the moment
  the correction lands: "Used it" at 196 px, "Used" in Black
  against a light-weight "it", "this week." bold beneath. "A
  **billion** people," echoes the monument at reading scale;
  "every week," drops back to italic serif; "talking to a model."
  closes in light type. The segment's whole argument is carried by
  type size, weight, and face — nothing else is on screen.

## Constants held / what changed

Held: script text verbatim (display case via text-transform only);
word timings verbatim; the clone programme audio (bit-exact stream
copy of the verified render's segment); segment span; frame rate
and stage size (1080×1920@30); loudness (no gain applied).
Changed: the entire visual layer — pictorial elements removed
altogether; composition, entry grammar (tracking/scale choreography
vs rise/pop), palette (warm key light on near-black), and the
depth-recession transition model.

## Measurements (on the delivered specimen file)

| Measure | Value |
|---|---|
| Duration (ffprobe) | 10.466016 s |
| Video | 1080×1920, 30 fps, 314 frames, h264 |
| Integrated loudness | **−13.39 LUFS** |
| True peak | **−1.48 dBTP** |
| Audio | stream copy of the clone render (bit-exact) |

## Playback verification

- Scene probe (headless Chrome, private port, autoplay policy
  relaxed, standalone file with no `?render` flag): **0 page
  errors**; audio readyState 4, duration 10.472 s; playback
  advances 1:1 (currentTime 1.425 → 2.931 over 1.5 s wall);
  **31 `.word` spans** = the segment's 31 spoken words (the ghost
  numeral glyphs are separate `.glyph` elements, not words).
- Rendered frames: 314/314 captured by the house capture pipeline.

## Frame inspection (grabs in `frames/`)

g01 t=1.50 (title) · g02 t=3.00 (numeral assembling) · g03 t=3.80
(billion) · g04 t=5.00 (L2 complete) · g05 t=7.00 (correction) ·
g06 t=9.00 (echo) · g07 t=10.33 (final).

1. **Type is the only visual carrier** — no pictorial element,
   object, or plate appears at any moment; every visual event is a
   letterform event. **PASS** (all grabs).
2. **The number is monumental** — the ghost "1.2" looms at 640 px
   behind the 232 px "billion"; the statistic reads at a glance,
   sound-off. **PASS** (g03, g04).
3. **Dramatic scale contrast** — 640 px ghost / 232 px billion /
   196 px "Used" against 60 px italic serif for the dismissed
   claim: the hierarchy is the argument. **PASS** (g05, g07).
4. **Tracking choreography** — title and "billion" entries are
   letter-spacing events, verified in code and consistent with the
   grabbed states (title wide at entry, settled tight). **PASS,
   with the standing bound:** motion *feel* is verified by
   construction + frame states, not by a separate
   continuous-motion review.
5. **Reads sound-off** — title → 1.2 billion people used ChatGPT
   this week → not tried once, USED it this week → a billion
   people, every week, talking to a model: the full logic survives
   muting. **PASS**.
6. **No subtitle plate / caption bar.** **PASS**.
7. **No overflow** — after the fix below, every line sits inside
   the stage with margins at every grab. **PASS**.

## Defect found and fixed during this build

**The title bled off both stage edges.** At first capture,
"STATE OF ADOPTION" at 98 px with entry tracking up to 0.38 em
measured wider than the 1080 stage — the S and final N were
clipped at t=1.50. The title was re-set at 74 px with the tracking
choreography re-ranged (0.30 em → 0.12 em) and the rule/dateline
raised to match; the full segment was re-rendered from the fixed
scene. Final grabs show the title card with clean margins
(g01). No other line overflowed at any grab.

## Known weaknesses, stated plainly

- **The ghost numeral is a display element, not a spoken word.**
  "1.2" is the statistic's own number rendered as type — it
  assembles glyph-by-glyph on the spoken "One / point / two" — but
  a strict word-for-word reading of the caption discipline could
  judge any non-spoken glyph a violation. It is recorded here as a
  deliberate, disclosed design decision of this specimen, not
  smuggled in.
- **The receded L2 stays faintly readable behind L3** (16%
  opacity). That depth is the design — earlier lines haunt later
  ones — but behind "Used it" the ghosted "billion" is the busiest
  overlap in the segment (g07). A cleaner variant could recede
  further; this specimen keeps the tension.
- **Typefaces are the system faces** (Noto Sans / Noto Serif).
  A true cinematic treatment would license a display face with
  more character (a condensed grotesque for the monument, a
  Didone for the serif contrast); the choreography transfers,
  the letterforms here are stand-ins.
- **Word timings are the package's PLAN starts** — the starts the
  clone takes were tempo-fitted to. Per-word onset drift against
  the clone audio was not independently re-measured (the same
  bound wd-02's exp-01 carries).
- The title's push-up header and the L2 recession are group
  transforms, so during 2.60–3.10 and 5.48–6.10 the compositions
  are in motion between their settled states; the grabs sample
  settled or near-settled moments.

## Outcome

The specimen is built, measured, and verified playing. It
explores; it does not replace anything. Any verdict is Hadi's,
later, on the specimen itself.
