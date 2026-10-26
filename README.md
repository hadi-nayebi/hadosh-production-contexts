# EO-EP3 — "The Message That Outlived Its Maker" (Earth One)

**Video package — branch `video/eo-ep3`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** eo-ep3 · Earth One channel · The Planet's Story —
  Observations
- **Title:** The Message That Outlived Its Maker
- **Stage:** assembled package (package verification not yet run) — CLONE-VERIFIED candidate audio,
  locked transcript, shipped scene, renders cited by hash
  (both exceed the in-branch size ceiling; see `render/`).

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 190 / 197**
  - metadata scaffold: 6 / 13 fields decided (`metadata.json`)
  - element decisions: 24 / 24 elements carry a record
    (`decisions/decisions.json` — 24 decision records)
  - word decisions: 160 / 160 words carry a recorded treatment or
    a deliberate as-is (`decisions/word-decisions.json`)
- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `audience` — the records source the facts but never named the
    audience or the misconception (board phase-0 check pending)
  - `delivery_structure` — no pause map / delivery-pass record
    exists for this piece
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision
  - `orientation_line` — STRUCT-2 H3 weak: no standalone
    orientation line; the title card + series container carry it
  - `publication_attribution` — the CC BY-SA block (Pettakere Cave
    photograph) must land verbatim in the live description at
    publish; unfulfilled until it does
  - `rescore_verdict` — Action #55: the v4 exemplar rebuild is
    unscored; Hadi's re-score governs
  - `publish_verdict` — Action #44: publish rides the re-score

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
