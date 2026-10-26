# EXP-02 — wd-01 lines 1–3: WHITEBOARD style specimen

**Kind:** STYLE EXPLORATION specimen (JOB STYLE-EXPLORE-1, under Hadi's
2026-10-26 sleep mandate: "explore more different styles — be a bit
bold"). One specimen, built to be judged later on its own — no baseline
pairing is claimed here; wd-01's shipped visual layer stands in its
package as the lane's reference.
**Style named:** WHITEBOARD — #77 menu style "Whiteboard" (2.5D
explainer family). Starting-set member per the #77 ruling.
**Intention:** test whether the whiteboard grammar — a light board,
words written on as the narration speaks them, and hand-drawn-feel
annotation strokes that DRAW ON in sync — can carry a Word Definitions
piece whose content is itself about text: the term gets circled, the
wrong answer gets crossed, the definition's core phrase gets boxed,
and the closing line's key word gets the same box back.

## The segment

wd-01 lines 1–3, span per the package/registry line windows:
**full-piece 2.200 s → 12.920 s (10.720 s of narration windows)**.
322 frames at 30 fps (10.7333 s of video); the segment audio is the
clone programme audio over the same span (stream copy, below).

- L1 (2.20–3.74): "Quick: what is a token?"
- L2 (3.74–8.94): "Not a word. A token is a chunk of text — sometimes a whole word, often just a piece of one."
- L3 (8.94–12.92): "The machine doesn't read letters, and it doesn't read words. It reads tokens."

Word texts and word start times are the package records verbatim
(`decisions/word-decisions.json`; 38 spoken words in the segment. The
L2 em-dash carries no word object in this piece's records and is not
displayed.)

## Inputs — exact versions

| Input | Version / hash |
|---|---|
| Verified clone render (audio source) | `files/wd-01-clone-v1.mp4`, sha256 `102161d9799c445925822865d23758e68535e564042db87a5d78b0babf07419c` (CLONE-VERIFIED, package `audio/audio.json`) — hash re-verified against the file at build time |
| Segment audio | AAC 48 kHz stereo, stream copy of the clone render's audio over [2.200, +10.7333], sha256 `a6917be37629d9e95426ed88dd78a9ea2d0eaf37325af274b6d22bec112f7562` (10.749 s by packet count) |
| Word timings / texts | package `decisions/word-decisions.json` |
| Line windows | package `transcript/transcript.md` |
| Style | #77 menu (files/a59-motion-brief.md): "Whiteboard" |

## The specimen

`whiteboard-scene.html`, sha256 `3f0f54c47b3f76057d7307fc3be703b59af847ff2b111bab7509d75d4aa3435d`
`whiteboard-segment.mp4`, sha256 `0f86f32ed8c4e64cd48ee70d15a31b1aa844dabb36b121016e6cded06704f3a9`

One self-contained HTML scene (1080×1920, `renderAt(t)` deterministic;
headless Chrome on a private port, 322 PNG frames, libx264 CRF 12
stitch, segment audio stream-copied in). The scene also plays
standalone in a browser (click to play; visuals follow the media
clock; the segment audio is embedded).

Treatment, beat by beat:
- **The board is the world.** A light board fills the frame (no dark
  void, no panel); faint eraser smudges sit in its texture; a board
  tray shadows the bottom edge.
- **Words are written on.** Every spoken word reveals left-to-right
  (clip wipe, 0.22 s) at its spoken start, in a dark ink blue, with a
  deterministic micro-rotation per word (−1.35°…+1.35°).
- **Annotations draw on as strokes** (SVG paths, dash-draw on the
  media clock): a red ellipse circles "token?" as L1 lands; a red
  arrow drops from "Not a word." to the definition; a green
  hand-drawn box sketches itself around "chunk of text" — the
  definition's core becomes the board's central drawn object; a small
  block sketch draws, is cut by a vertical stroke on "piece", and its
  halves separate as "a piece of one." completes.
- **The board is wiped and reused.** At L3 the earlier writing fades
  to an eraser smudge (6% — ghost traces remain, including the early
  ink, which smudges with the same wipe). L3 writes fresh: red X
  strokes cross "letters," and "words." as each lands, and "tokens."
  receives the SAME green box the chunk wore — the annotation grammar
  closes the definition — with a green underline flourish.

## Constants held / what changed

Held: script text verbatim; word timings verbatim; the clone
programme audio (bit-exact stream copy of the verified render's
segment); segment span; frame rate and stage size (1080×1920@30);
loudness (no gain applied).
Changed: the entire visual layer — world (light board vs dark void),
word entry (write-on wipe vs rise/pop), annotation system (drawn
strokes vs tiles/cards), palette and typeface.

## Measurements (on the delivered specimen file)

| Measure | Value |
|---|---|
| Duration (ffprobe) | 10.733333 s |
| Video | 1080×1920, 30 fps, 322 frames, h264 |
| Integrated loudness | **−13.07 LUFS** |
| True peak | **−1.49 dBTP** |
| Audio | stream copy of the clone render (bit-exact) |

## Playback verification

- Scene probe (headless Chrome, private port, autoplay policy
  relaxed, standalone file with no `?render` flag): **0 page
  errors**; audio readyState 4, duration 10.749 s; playback advances
  1:1 (currentTime 1.451 → 2.954 over 1.5 s wall); **38 `.word`
  spans** = the segment's 38 spoken words.
- Rendered frames: 322/322 captured by the house capture pipeline.

## Frame inspection (grabs in `frames/`)

g01 t=1.30 (circle mid-draw) · g02 t=2.30 · g03 t=3.80 (chunk box
mid-draw) · g04 t=5.00 · g05 t=6.43 (split block) · g06 t=7.93 ·
g07 t=9.13 · g08 t=10.60 (final).

1. **Full whiteboard world** — light board edge to edge at every
   moment; no dark void, no inset panel. **PASS** (all grabs).
2. **Write-on words** — every word appears on its spoken beat with
   the left-to-right reveal; nothing pre-printed. **PASS**.
3. **Draw-on annotations, in sync** — circle completes after L1;
   arrow lands in the L2 pause; the chunk box is visibly mid-draw at
   g03 and complete by g04; the cut stroke and separation land on
   "piece"/"one." **PASS** (g01–g05).
4. **The defined term is the central sketched object** — "chunk of
   text" boxed at the definition and "tokens." re-boxed at the
   close; the same stroke grammar both times. **PASS** (g03, g08).
5. **Wipe honesty** — early writing AND early ink smudge together
   at the wipe; L3's ink stays full-strength. **PASS** (g08).
6. **No subtitle plate / caption bar** — the written words are the
   narration itself, written as board content; no separate caption
   carrier exists. **PASS**.
7. **Reads sound-off** — question → negation → definition → the
   machine reads tokens (not letters, not words — both crossed):
   the whole segment's logic is on the board. **PASS**.
8. **No overflow** — the longest line ("A token is a chunk of
   text", 64 px) and the closing line (108 px) sit inside the stage
   with margins at every grab. **PASS**.

## Defects found and fixed during this build

1. **Stroke-width distortion on phrase boxes** (first pass): boxes
   drawn inside aspect-stretched wrapper SVGs rendered with fat
   vertical sides (≈5× stroke width). Rebuilt: all annotation
   strokes now live in one stage-coordinate ink layer (1 unit =
   1 px), their paths measured from the laid-out words at first
   render — uniform 6 px marker strokes at any aspect.
2. **Dash-start dot artifacts**: a zero-length dash with round caps
   painted a stray dot at each undrawn stroke's start. Strokes now
   stay opacity 0 until their draw window opens.
3. **Ink surviving the wipe**: the stage-coordinate ink layer does
   not inherit the board wipe, so the early circle/box first stayed
   full-strength over the erased words (empty outlines floating).
   The early-phase ink now smudges with the same wipe factor as the
   writing it annotates.
4. **Composition sat high**: the whole board's content was shifted
   down into the stage's middle band (final composition centres
   ≈ y 570–1250 of 1920).

## Known weaknesses, stated plainly

- **No true handwriting typeface is installed on this machine.**
  The words are set in DejaVu Sans Bold; the hand-feel is carried by
  the write-on reveal, the drawn strokes, and per-word
  micro-rotation — not by letterforms. A marker-style face would
  strengthen the specimen materially.
- **Annotation paths are measured from the laid-out words on first
  render.** If the viewer's font environment differs from the
  render environment, a box could sit a few px off its phrase. In
  the rendered MP4 (the specimen of record) the measurement and the
  frames come from the same environment, so the delivered file is
  exact.
- **Word timings are the package's PLAN starts** — the starts the
  clone takes were tempo-fitted to. Per-word onset drift against
  the clone audio was not independently re-measured (the same bound
  wd-02's exp-01 carries).
- The split-block sketch is deliberately wordless (a pure diagram);
  its meaning rides on its position under the "piece of one" line.
- The wipe's 6% ghost is a judgement call: real boards erase
  cleaner, but the ghost keeps the segment's earlier logic faintly
  present behind the close.

## Outcome

The specimen is built, measured, and verified playing. It explores;
it does not replace anything. Any verdict is Hadi's, later, on the
specimen itself.
