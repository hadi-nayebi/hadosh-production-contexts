# SOA-05 — "650 Million Guests" (State of Adoption)

**Video package — branch `video/soa-05`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** soa-05 · flagship channel · State of Adoption
- **Title:** 650 Million Guests
- **Stage:** assembled package; end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-4) — in-package editability absent, a named gap against the full deliverable criteria —
  locked transcript, shipped scene (the v1 HTML-scene build, from
  the locked draft-i1 script text), delivered guide-voice render
  in-branch. The clone upgrade is **Tier B** — dead line L2 (its
  one ICL spent and failed) and line L6 still unresolved (its ICL
  withheld, never submitted) — so the audio layer carries the
  guide programme and the open voice record, not a swapped voice.
  The piece itself sits at board stage qc, unpublished and
  unscored.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 151 / 155**
  - metadata scaffold: 7 / 11 fields decided (`metadata.json`)
  - element decisions: 48 / 48 elements carry a record
    (`decisions/decisions.json` — 12 decision records; the scene
    DEC coverage header's figure — its classes' numbered entries
    sum to 46 plus the script class, which the header carries as
    'recorded (cited)' with no number, so the header does not
    fully decompose; the board's info audit independently counts
    48/48 from the same 12 records, and the 2026-10-23 context
    audit counts 12/12 under its older ruler, where its element
    IS the record. All three rulers are cited in the file's
    provenance, not merged)
  - word decisions: 96 / 96 spoken words carry a recorded
    decision (`decisions/word-decisions.json` — the standalone
    word-decision container standing in the shipped scene,
    restored there by board round b33; the script's 3 standalone
    em-dash tokens are punctuation and carry no word objects.
    The container is carried verbatim, including three L6 word
    boundaries it rounds to 2 decimal places against the PLAN's
    3-decimal values, ≤ 0.003 s — recorded in its provenance,
    not corrected)
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
  - `voice_tier_b` — no clone candidate exists, and the two
    unresolved lines differ in kind: L2 (the fact line) failed
    its registered take (0.800) and SPENT its one ICL (0.800 on
    both takes, diagnostics 404); L6 (the close) failed its
    registered take (0.7778) but its ICL was WITHHELD — never
    submitted under the recorded skip rule — so it remains
    submittable as the standard's own remedy, while L2 alone
    needs a second-ICL exception (the converted Action #74; the
    Tier B disposition recommends A: both in one run, only L2's
    an exception)

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — they are the named remainder, not hidden gaps.
One accepted exception rides with this piece: the phrase-#25
sentence-straddle dwell residual ('million guests. The' — the
catalogue rebuild's one remaining C-05(a) residual of 35 phrases,
recorded-not-failed under the named-class mechanism; exceptions
ledger #3, carried in `decisions/decisions.json` with its
status note). Two class-level ledger entries touch the delivered
state and are cited as class context where they belong — #7
(guide voice final-for-now, its timing superseded by the
voice-upgrade mandate) and #8 (fastlane finals mono; this file's
audio is mono) — in `audio/audio.json`, not as per-piece
acceptances; ledger #4 (SOA-01's L2 revalidation under the
verifier normalization fix) is cited as adjacent context in the
`voice_tier_b` field — no revalidation of this piece's L2 takes
is on record. One decided field carries its weak mark in the
open: `orientation_line` is decided by the build's DR-STRUCT
record, and the structural audit's H-S3 = W stands quoted in
its rationale.

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece (guide-era audio, as
  shipped) and shows its decision records in-page.
- **The voice:** `audio/narration.m4a` — the delivered programme
  audio extracted from the render (locked guide narration over
  the bed). The clone swap has not happened for this piece; no
  candidate exists.
- **The render:** `render/render.mp4` — the delivered v1 build
  (37.960 s, −14.56 LUFS, −1.28 dBTP, guide voice), with its
  measurements in `render/verification.json`.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → open fields) | the piece's script doc + Phase 0 brief + catalogue objectives audit + board record + voice registry + Tier B disposition (per-field citations inside) |
| `transcript/` | Locked transcript (7 lines, timings) + its source script document | script doc governs text (draft i1, locked for build 2026-10-24); timings from the voice registry's PLAN lines; both word-count rulers reconciled inside |
| `decisions/` | Element decision records + per-word decisions + the one accepted exception | the shipped scene's own DEC block (12 records, 48/48 header) + its standalone word-decision container (96 entries, carried verbatim incl. its 2dp boundary rounding), extracted verbatim; the exception from the department-doc exceptions ledger §5 |
| `audio/` | Delivered programme audio + Tier B provenance (spent vs withheld lines as structured sub-records) | the delivered MP4's audio stream; Pelican jobs from the voice registry + batch-1 results (registered + L2 ICL spent + L6 ICL withheld) |
| `scene/` | The shipped scene (v1 build), byte-identical + provenance | `files/short-soa05-gemini-v1-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | The delivered guide-voice render in-branch + verification measurements | `files/short-soa05-gemini-v1.mp4` (delivered build of record) + board QC measurements + migration re-measurement |
