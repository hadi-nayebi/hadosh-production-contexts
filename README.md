# SOA-01 — "1.2 Billion Renters" (State of Adoption)

**Video package — branch `video/soa-01`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** soa-01 · flagship channel · State of Adoption lane
- **Title:** 1.2 Billion People Use AI Every Week. Almost None Own It.
- **Stage:** complete package — CLONE-VERIFIED audio, locked
  transcript, shipped scene, verified render.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 131 / 134**
  - metadata scaffold: 6 / 9 fields decided (`metadata.json`)
  - element decisions: 44 / 44 elements carry a record
    (`decisions/decisions.json` — 11 decision records)
  - word decisions: 81 / 81 words carry a recorded treatment or a
    deliberate as-is (`decisions/word-decisions.json`)
- **Open fields, named** (undecided decision fields — a coverage inventory; it does not by itself measure the rendered result):
  - `audience` — the record never named the audience or the
    misconception (board phase-0 check still pending)
  - `delivery_structure` — no pause map / delivery-pass record
    exists for this piece
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — they are the named remainder, not hidden gaps.
One accepted exception rides with the piece: phrase #9's
completed-phrase hold (0.46 s vs the 0.50 s floor, bound-capped) —
recorded in `decisions/decisions.json` with its acceptor.

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece and shows its decision
  records in-page.
- **The render:** `render/render.mp4` — the CLONE-VERIFIED
  delivered file (34.348 s, −14.42 LUFS, −1.46 dBTP).
- **The voice:** `audio/narration.m4a` — the delivered programme
  audio extracted from the render (clone narration over the bed).

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure) | the piece's script doc + board record (per-field citations inside) |
| `transcript/` | Locked final transcript + its source script document | board transcript + voice registry timings; script doc verbatim |
| `decisions/` | Element decision records + per-word decisions | the shipped scene's own DEC block + word-decision container, extracted verbatim |
| `audio/` | Delivered programme audio + provenance | Pelican jobs + the CLONE-VERIFIED registry entry |
| `scene/` | The shipped scene, byte-identical + provenance | `files/short-soa01-renters-v3-scene.html` (sha256 in `scene/scene.json`) |
| `render/` | The delivered render + its verification measurements | `files/soa01-clone-v1.mp4` + delivered-file measurements |
