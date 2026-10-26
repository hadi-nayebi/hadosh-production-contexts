# EO-EP3 — "The Message That Outlived Its Maker" (Earth One)

**Video package — branch `video/eo-ep3`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** eo-ep3 · Earth One channel · The Planet's Story —
  Observations
- **Title:** The Message That Outlived Its Maker
- **Stage:** assembled package; end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-2) — in-package editability absent, a named gap against the full deliverable criteria — CLONE-VERIFIED candidate audio,
  locked transcript, shipped scene, renders cited by hash
  (both exceed the in-branch size ceiling; see `render/`).

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 193 / 198**
  - metadata scaffold: 9 / 14 fields decided (`metadata.json`)
  - element decisions: 24 / 24 elements carry a record
    (`decisions/decisions.json` — 24 decision records)
  - word decisions: 160 / 160 words carry a recorded treatment or
    a deliberate as-is (`decisions/word-decisions.json`)
- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `audience` — the records source the facts but never named the
    audience or the misconception (board phase-0 check pending)
  - `orientation_line` — STRUCT-2 H3 weak: no standalone
    orientation line; the title card + series container carry it
  - `publication_attribution` — the CC BY-SA block (Pettakere Cave
    photograph) must land verbatim in the live description at
    publish; unfulfilled until it does
  - `rescore_verdict` — Action #55: the v4 exemplar rebuild is
    unscored; Hadi's re-score governs
  - `publish_verdict` — Action #44: publish rides the re-score

Finishing decisions, 2026-10-26 (JOB FINISH-FIELDS-1 — dated
finishing decisions, recorded as such, not backfilled history;
see `metadata.json` for the full values, reasoning and evidence):
  - `delivery_structure` — DECIDED as the delivery structure of
    record, measured off the delivered artifact: scene-led
    narration over the PLAN timeline (inter-line gaps 0.40–0.60 s),
    the L4 mid-line plate cut, the per-phrase scene states of the
    L10 bookend, the ≤3-word phrase system. No separate pause-map
    pass was ever performed; a future retrofit amends this by a
    new dated decision.
  - `scene_decomposition` — DECIDED as the compartment inventory
    the shipped file itself embodies (plate layer incl. the real
    Pettakere photograph component / word layer / container /
    PLAN+CONFIG scene engine / audio / in-page decision layer /
    player chrome); the scene stays one self-contained file.

Onset repair, 2026-10-26 (JOB ONSET-REPAIR-1 — the plan rebuild
this field's fix rode on; see `metadata.json` fields.onset_repairs
for the full evidence record):
  - `onset_repairs` — CLOSED. PLAN phrase-1 window open moved
    1.95 s -> 1.42 s (the first word's spoken onset) and the
    opening-card gate moved with it (1.6 s -> 1.42 s); the
    candidate render was re-rendered from the repaired scene
    (house capture, libx264 CRF 19, the verified clone programme
    audio stream byte-identical), re-probed at word 1's onset
    within probe precision and re-measured at the delivered
    duration/loudness. Package re-verification of the repaired
    bytes rides JOB PACKAGE-VERIFY-6.

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — they are the named remainder, not hidden gaps.
No accepted exception is on record for this piece.

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece (guide-era audio, as
  shipped) and shows its decision records in-page.
- **The voice:** `audio/narration.m4a` — the CLONE-VERIFIED
  candidate programme audio, extracted from the candidate render.
- **The renders:** cited by hash in `render/RENDER.md` (both
  exceed the 40 MB in-branch ceiling) with their measurements in
  `render/verification.json`.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → open fields) | the piece's script docs (v2 gate records + v3 build script) + board record + STRUCT-2 audit (per-field citations inside) |
| `transcript/` | Locked final transcript + its source script document | script v3 governs text; voice registry timings; board transcript agrees line for line |
| `decisions/` | Element decision records + per-word decisions | the shipped scene's own DEC block (24 records; word decisions in its in-DEC array), extracted verbatim |
| `audio/` | Clone candidate programme audio + provenance | Pelican jobs (registered + L1 ICL) + the CLONE-VERIFIED registry entry + batch-2 take records |
| `scene/` | The shipped scene, byte-identical + provenance | `files/earthone-ep03-v4-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | Both renders cited by hash + verification measurements | `files/eo-ep3-clone-v1.mp4` (CLONE-VERIFIED) + `files/earthone-ep03-v4.mp4` (delivered, guide voice) |
