# SOA-04 — "84% Use It. 46% Don't Trust It." (State of Adoption)

**Video package — branch `video/soa-04`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** soa-04 · flagship channel · State of Adoption
- **Title:** 84% Use It. 46% Don't Trust It.
- **Stage:** assembled package; end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-4) — in-package editability absent, a named gap against the full deliverable criteria —
  locked transcript, shipped scene (the v1 HTML-scene build, from
  the locked draft-i1 script text), delivered guide-voice render
  in-branch. The clone upgrade is **Tier B** — dead line L4, no
  candidate exists — so the audio layer carries the guide
  programme and the open voice record, not a swapped voice. The
  piece itself sits at board stage qc, unpublished and unscored.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 174 / 178**
  - metadata scaffold: 7 / 11 fields decided (`metadata.json`)
  - element decisions: 54 / 54 elements carry a record
    (`decisions/decisions.json` — 12 decision records; the scene
    DEC coverage header's figure — its classes' numbered entries
    sum to 52 plus the script class, which the header carries as
    'recorded (cited)' with no number, so the header does not
    fully decompose; the board's info audit independently counts
    54/54 from the same 12 records, and the 2026-10-23 context
    audit counts 12/12 under its older ruler, where its element
    IS the record. All three rulers are cited in the file's
    provenance, not merged)
  - word decisions: 113 / 113 spoken words carry a recorded
    decision (`decisions/word-decisions.json` — the standalone
    word-decision container standing in the shipped scene,
    restored there by board round b33; the script's 3 standalone
    em-dash tokens are punctuation and carry no word objects)
- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `audience` — no record names this piece's audience or
    misconception; the board's phase-0 item stands pending (the
    Phase 0 brief names a restatement target, not an audience)
  - `delivery_structure` — no pause map / delivery-pass record
    exists for this piece; the build's timing construction is
    recorded (DR-AUDIO, DR-WORD-3), per-gap decisions are not
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision
  - `voice_tier_b` — no clone candidate exists: L4 (the turn
    line) failed its registered take and its one ICL (0.7917,
    both takes, diagnostics 404); L3's ICL resolved on this very
    piece (0.9032), so the open remainder is a single line — the
    second-ICL question (the converted Action #74; the Tier B
    disposition recommends A for this piece) rides here

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — they are the named remainder, not hidden gaps.
No accepted exception rides with this piece: the exceptions
ledger names no soa-04 entry, and `decisions/decisions.json`
records the empty set with its revisability note. Two class-level
ledger entries touch the delivered state and are cited as class
context where they belong — #7 (guide voice final-for-now, its
timing superseded by the voice-upgrade mandate) and #8 (fastlane
finals mono; this file's audio is mono) — in
`audio/audio.json`, not as per-piece acceptances. One decided
field carries its weak mark in the open: `orientation_line` is
decided by the build's DR-STRUCT record, and the structural
audit's H-S3 = W stands quoted in its rationale.

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece (guide-era audio, as
  shipped) and shows its decision records in-page.
- **The voice:** `audio/narration.m4a` — the delivered programme
  audio extracted from the render (locked guide narration over
  the bed). The clone swap has not happened for this piece; no
  candidate exists.
- **The render:** `render/render.mp4` — the delivered v1 build
  (42.310 s, −14.65 LUFS, −1.41 dBTP, guide voice), with its
  measurements in `render/verification.json`.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → open fields) | the piece's script doc + Phase 0 brief + catalogue objectives audit + board record + voice registry + Tier B disposition (per-field citations inside) |
| `transcript/` | Locked transcript (7 lines, timings) + its source script document | script doc governs text (draft i1, locked for build 2026-10-24); timings from the voice registry's PLAN lines; both word-count rulers reconciled inside |
| `decisions/` | Element decision records + per-word decisions | the shipped scene's own DEC block (12 records, 54/54 header) + its standalone word-decision container (113 entries), extracted verbatim |
| `audio/` | Delivered programme audio + Tier B provenance | the delivered MP4's audio stream; Pelican jobs from the voice registry (registered + L3 ICL resolved + L4 ICL spent) |
| `scene/` | The shipped scene (v1 build), byte-identical + provenance | `files/short-soa04-developers-v1-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | The delivered guide-voice render in-branch + verification measurements | `files/short-soa04-developers-v1.mp4` (delivered build of record) + board QC measurements + migration re-measurement |
