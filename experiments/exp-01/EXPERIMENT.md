# EXP-01 — wd-02 lines 1–3: A59 visual-family exploration (Variant A vs Variant B)

**Kind:** VISUAL-FAMILY EXPLORATION (a compound object/typography/motion
treatment), not an isolated-variable test — per Dot n=40, recorded in
`files/a59-motion-brief.md` ("wd-02 comparison — corrections from Dot n=40").
**Intention:** give Hadi's style program (#77 menu ruling: motion graphics +
cinematic typography in the starting set) its first built specimen pair:
the same 11.657 s of wd-02, once in the piece's shipped visual layer and
once rebuilt under the A59 motion grammar, against the identical clone
programme audio, so the combined direction can be judged on specimens —
not on descriptions.

## The segment

wd-02 lines 1–3, span per the package/registry line windows:
**full-piece 2.450 s → 14.107 s (11.657 s of narration windows)**.
Both specimens carry frames 0–349 at 30 fps (350 frames, 11.6667 s of
video) and the same 547-packet AAC segment audio; both containers
measure **11.669333 s**.

- L1 (2.450–4.874): "Same AI. Two very different answers."
- L2 (4.874–8.834): "The difference was not luck. It was the prompt — the text typed in."
- L3 (8.834–14.107): "A prompt tells the model three things: what to do, who it's for, and what shape the answer takes."

Word texts and word start times are the package records verbatim
(`decisions/word-decisions.json`, the shipped scene's own container;
38 spoken words in the segment + the L2 em-dash DROP-PUNCT, which is
punctuation and is not displayed in either variant).

## Inputs — exact versions

| Input | Version / hash |
|---|---|
| Verified clone render (source of both specimens' audio; source of Variant A) | `files/wd-02-clone-v1.mp4`, sha256 `e0ebcd732c395856b2505f15057e59e2f26586283dd28245fd63cd8f49e9e3ef` (CLONE-VERIFIED, package `audio/audio.json`) |
| Segment audio (extracted once, used in BOTH specimens) | AAC 48 kHz stereo, stream copy of the clone render's audio over [2.450, +11.6667], sha256 `94906f4fc7cfb89ef6149634ace5d15ba1cf5e04fcc7924f1b0c4d4622a192a7` |
| Word timings / texts | package `decisions/word-decisions.json` (carriage: shipped scene container, scene sha256 `c6b47b9a…`) |
| Transcript / line windows | package `transcript/transcript.md`; registry `hidden_files/voice-upgrade/registry.json` pieces[wd-02].lines |
| Grammar | `files/a59-motion-brief.md` (Dot n=35 brief + n=40 corrections + #76 continuous-motion study) |

## Variant A — the baseline (pinned per Dot n=40)

`variant-a-segment.mp4`, sha256 `f2698ddcccd0af8df03a51b6c4a002a920870ef75a78cc686518423bb050a26e`

The verified clone render's own frames for the segment — the shipped
scene's visual layer (title cards, numbered part-tiles, chunk word
captions) carrying the clone audio. This is the corrected baseline:
the shipped *scene file* embeds guide audio and was NOT used.

**Extraction method, stated plainly:** the clone render's keyframes sit
at 0 s, 8.333 s, … — no keyframe at 2.450 s, so a frame-exact stream-copy
cut does not exist. Variant A's **video was re-encoded** (decode from
2.450 s output-seek, first frame = source frame 74, 350 frames,
libx264 CRF 12, yuv420p). Its **audio is the bit-exact stream copy**
above — the same audio bytes Variant B carries.

## Variant B — the A59-grammar rebuild

`variant-b-scene.html`, sha256 `ae5f8d0420fbcdb0ffa60185803c1c50d007747f9545220752f586ef54934bff`
`variant-b-segment.mp4`, sha256 `42986f9376d7d9eea186004961aba78c5ab35d20d6dee4aae6c2a1a77406a741`

One self-contained HTML scene (1080×1920, `renderAt(t)` deterministic,
house pipeline: headless Chrome on private port 9347, 350 PNG frames,
libx264 CRF 12 stitch, segment audio stream-copied in). The scene file
also plays standalone in a browser (click to play; visuals follow the
media clock; the segment audio is embedded).

Design: dark void, one focal group. L1/L2 word rows enter per spoken
word and exit quietly. At L2's spoken word "prompt" (segment t=4.384)
the **prompt card** — one persistent textured cutout object — enters
with the principal entry grammar, wearing the word "prompt" as its
face; L2's tail ("the text typed in.") is typed into it word by word.
In L3 the SAME card stays on stage, grows open, and divides into three
bands that receive the definition's three parts at their spoken
moments ("what to do," / "who it's for," / "and what shape the answer
takes."), its L2 face and typed line persisting as its header.

## Constants held / what changed

Held: script text verbatim; word timings verbatim; the clone programme
audio (identical bytes in both specimens); segment span; duration;
frame rate and stage size (1080×1920@30); loudness (no gain applied —
none needed, see measurements).
Changed (the exploration's compound treatment): the entire visual
layer — object model (persistent cutout vs tiles/captions), entry
grammar, composition, and continuity design.

## Measurements (on the delivered specimen files)

| Measure | Variant A | Variant B |
|---|---|---|
| Duration (ffprobe) | 11.669333 s | 11.669333 s |
| Video | 1080×1920, 30 fps, 350 frames, h264 | 1080×1920, 30 fps, 350 frames, h264 |
| Integrated loudness | **−13.24 LUFS** | **−13.24 LUFS** |
| True peak | **−1.49 dBTP** | **−1.49 dBTP** |
| Audio | stream copy of clone render (bit-exact) | the same stream, stream-copied (bit-exact) |

No scalar gain was applied to either specimen; the loudness identity
is by construction (same audio bytes), and it was still measured on
both delivered files.

## Playback verification

- Variant B scene, headless probe (private port, autoplay policy
  relaxed): **0 page errors**; audio element readyState 4, duration
  11.669333 s; playback advances 1:1 (currentTime 0.374 → 1.880 over
  1.5 s wall); 37 `.word` spans + the card face = the segment's 38
  spoken words ("prompt" is carried by the card face).
- Variant B rendered frames: 350/350 captured by the house renderer
  (`page state: words 37, ready 4`).
- Variant A: frame extracted at segment t=8.6 and viewed — the shipped
  L3 treatment (title line + "1 / WHAT TO DO" tile + chunk captions),
  as expected (`frames/a-segment-check.jpg`).

## Grammar checklist (inspected on frame grabs, `frames/`)

Grabs: g01 t=1.72 · g02 t=4.80 · g03 t=6.40 · g04 t=7.55 · g05 t=8.62 ·
g06 t=9.55 · g07 t=11.10 · g08 t=11.55 (segment-relative).

1. **Independent objects** — the prompt card is a separate textured
   cutout, not figures baked into a plate; no plate carries figures.
   **PASS** (g02, g03).
2. **Composition** — dark void, one dominant focal group, generous
   space at every settled moment. **PASS** (all grabs).
3. **Ground light = contact only** — a soft warm ellipse sits under
   the card and follows its base as it grows; it performs no story
   action. **PASS** (g02, g07).
4. **Entry grammar** — principal words ("answers.", "three",
   "shape", and the card itself at "prompt") enter on the media
   clock at their spoken words: rise 24 units, scale 0.82→1 over
   0.28 s, cubic ease-out — implemented literally in `renderAt`
   (code fact) and consistent with the grabbed states (g01: L1
   complete, "answers." settled amber; entries land in narration
   order in every grab). **PASS, with the standing bound:** entry
   *motion feel* is verified by construction + frame states, not
   by a separate continuous-motion review.
5. **Semantic continuity (the core)** — one object, three roles:
   the card enters AS the prompt (L2), receives the typed text,
   persists, and opens into the definition's three parts (L3) with
   its identity (face + typed line) still on it. **PASS**
   (g03 → g04 → g06 → g07 sequence).
6. **No slide accumulation** — L1 rows exit 4.02–4.52, L2 rows exit
   4.92–5.32 (quiet fades); at g03 only the card is on stage.
   **PASS**.
7. **No subtitle plate / caption bar** — word animation is the
   only text carrier; the card's face and content are themselves
   spoken words. **PASS** (all grabs).
8. **Reference defect not reproduced** — no regular data-stream
   rows exist in the scene. **PASS**.
9. **Beat durations from this piece's own narration** — every
   entry time is a package word start; nothing was transplanted
   from the reference's timing. **PASS**.

## Defect found and fixed during this build

First-pass grabs showed three text rows overflowing the stage edges
(L1's second row, L3's intro row, band 3's phrase clipped at the card
edge). Font sizes were reduced and band phrases allowed to wrap;
a DOM measurement pass at 8 settled moments then confirmed **every
visible word inside the stage with ≥ 42 px margins**, and the final
render + grabs above are from the fixed scene.

## Known weaknesses, stated plainly

- The card's "texture" is a CSS gradient weave; at full size it
  reads as a fine graph-paper grid — thinner than the reference's
  engraved texture. It is a texture stand-in, not the finished
  surface treatment.
- Word timings are the package's PLAN starts — the starts the clone
  takes were tempo-fitted to. Per-word onset drift against the
  clone audio was not independently re-measured for this specimen.
- Variant B's L1 is words alone on the void; the focal object
  arrives only when the narration names it (L2). That is the
  design, but it makes B's first ~4 s visually sparser than A's.
- The segment is a mid-piece cut: B opens on an empty void at t=0
  (first word enters at t=0.00), A opens on A's own prior
  composition. The comparison judges the lines 1–3 treatment, not
  openings.
- Entry-motion verdicts rest on construction + frame states (see
  checklist point 4) — the same evidence bound the A59 brief
  itself carries.

## Outcome

Both specimens are built, measured, and verified playing. Per the
agreed evidence order, the next step is Hadi's judgment on the pair
(visual-family preference), then any viewer-response evidence only if
a variant is shipped. Confounds if ever uploaded: same piece, same
audio, same length — the pair is matched on everything except the
visual layer by construction.

## Verdict (Hadi, 2026-10-26 — Action #78)

**Variant B.** Hadi's words in substance: B is better, "more artistic." The A59-grammar direction is adopted for the Word Definitions lane. The same ruling found the piece's transcript not useful (not his description of what a prompt is) and its clone render mixed in voice character and monotonic — the piece is parked for transcript redevelopment; the direction verdict stands independently of the piece's state.
