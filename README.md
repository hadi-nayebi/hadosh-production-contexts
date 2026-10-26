# EO-EP4 — "A Song Remembers What Words Forget" (Earth One)

**Video package — branch `video/eo-ep4`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** eo-ep4 · Earth One channel · The Planet's Story — Observations
- **Title:** A Song Remembers What Words Forget
- **Stage:** assembled package (package verification not yet run) —
  locked transcript, shipped scene (the v4 HTML-scene build, from
  the locked v2 script text), delivered guide-voice render
  in-branch. The clone upgrade is **Tier B** — one dead line (L10,
  the spoken bridge: its registered take errored at 0.8387 and its
  one ICL spent and failed at 0.875 on the verifier's final-words
  condition) — so the audio layer carries the guide programme and
  the open voice record, not a swapped voice. The piece itself sits
  at board stage qc, unpublished and unscored; an unlisted Studio
  review copy is live as the publish ask's specimen.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 189 / 198**
  - metadata scaffold: 6 / 15 fields decided (`metadata.json`)
  - element decisions: 18 / 18 elements carry a record
    (`decisions/decisions.json` — 18 decision records; the scene
    DEC coverage header's figure — its classes' numbered entries
    sum to 17 plus the script class, which the header carries as
    'recorded (cited)' with no number, so the header does not
    fully decompose; the board's info audit independently counts
    18/18 from the same 18 records, and the 2026-10-23 context
    audit counts 25/25 under its older ruler. All three rulers
    are cited in the file's provenance, not merged)
  - word decisions: 165 / 165 spoken words carry a recorded
    decision (`decisions/word-decisions.json` — the standalone
    word-decision container standing in the shipped scene,
    extracted verbatim; 20 key pops, every other word a
    deliberate as-is. The script's 3 standalone em-dash tokens
    are punctuation and carry no word objects)
- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `audience` — no record names this piece's audience or
    misconception; the board's phase-0 item stands pending (the
    Phase 0 brief is a facts brief, not an audience record)
  - `delivery_structure` — no pause map / delivery-pass record
    exists for this piece (catalogue audit: NOT-DECIDED); the
    script's pace projection and the build's timings are not
    per-gap delivery decisions
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision
  - `orientation_line` — STRUCT-2 classes H3 = W: orientation by
    container/title card only, no orientation line exists, and no
    in-scene record closes the question (optional polish per the
    audit, not a publish blocker)
  - `voice_tier_b` — no clone candidate exists; the one
    unresolved line, L10 (the spoken bridge), failed its
    registered take (0.8387; ASR heard 'subscribed' / 'earth1')
    and SPENT its one ICL (both takes 0.875 — above the bar; the
    verifier's final-words condition failed; diagnostics 404), so
    the remainder is a second-ICL exception (the converted
    Action #74; the Tier B disposition's recommendation A — 'the
    strongest A in the set'). L1–L9 are Tier A
  - `cover_ink_verdict` — the scene-matched dark ink + rust card
    title stand in the artifact PROVISIONALLY (taken at build,
    Gap B6/B7; the rust-on-gold cover line measures 2.52 vs the
    3.0 floor); ratifying or reverting to series defaults is
    Hadi's open verdict, Action #33 — a change means a re-render
    before publish
  - `l8_pictorial_layer` — L8's recap speaks its four referents as
    words only; Track B recorded the glyph-set spec (DR-TB-EP4-2)
    and deliberately did not build it — the piece's #1 next-class
    item and its top capping layer
  - `rescore_verdict` — whether v4 replaces v3 as the publish
    specimen (Action #56, recommendation B: 'improved, not
    pattern-grade', capped by DR-TB-EP4-2) stands open, while the
    board's cycle note asserts the swap — the divergence is
    carried in the field, not smoothed
  - `publish_verdict` — publish to Earth One (Action #45, the
    board's primary request) is Hadi's open verdict; it carries
    the script's own L9 flag for his ear (the alphabet-song
    bookend crosses cultures unevenly — STRUCT-2 H9 = W) and
    rides with #33 (an ink change means a re-render first)

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — they are the named remainder, not hidden gaps.
No accepted exception rides with this piece: the department-doc
exceptions ledger (§5) was read directly at this migration and
no entry names Ep.4 — the one class-level entry touching the
delivered state (ledger #7, guide voice final-for-now, its
timing superseded by the voice-upgrade mandate) is cited as
class context in `audio/audio.json`, and ledger #8 (fastlane
mono) was checked and does not apply (this file's audio is
stereo). The L1 scrim defect the first v4 render exposed
(DR-TB-EP4-1-Z) was FIXED and frame-verified, not accepted —
it is recorded in `scene/scene.json` and
`render/verification.json`, not in the exceptions.

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece (guide-era audio, as
  shipped) and shows its decision records in-page.
- **The voice:** `audio/narration.m4a` — the delivered programme
  audio extracted from the render (locked guide narration over
  the bed). The clone swap has not happened for this piece; no
  candidate exists.
- **The render:** `render/render.mp4` — the delivered v4 build
  (63.061 s, −14.03 LUFS, −1.79 dBTP, guide voice), with its
  measurements in `render/verification.json`.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → open fields) | the piece's v2 script doc + Phase 0 brief + catalogue objectives audit + STRUCT-2 audit + board record + voice registry + Tier B disposition (per-field citations inside) |
| `transcript/` | Locked transcript (10 lines, timings) + its source script document | script doc governs text (v2, the build script of record); timings from the voice registry's PLAN lines; both word-count rulers reconciled inside |
| `decisions/` | Element decision records + per-word decisions (no accepted exceptions — the ledger was read directly) | the shipped scene's own DEC block (18 records, 18/18 header) + its standalone word-decision container (165 entries), extracted verbatim |
| `audio/` | Delivered programme audio + Tier B provenance (the spent L10 as a structured sub-record) | the delivered MP4's audio stream; Pelican jobs from the voice registry + batch-2 results (registered + L10 ICL spent) |
| `scene/` | The shipped scene (v4 build), byte-identical + provenance | `files/earthone-ep04-v4-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | The delivered guide-voice render in-branch + verification measurements | `files/earthone-ep04-v4.mp4` (delivered build of record) + board QC measurements + migration re-measurement |
