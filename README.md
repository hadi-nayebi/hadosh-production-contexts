# SOA-01 — "1.2 Billion Renters" (State of Adoption)

**Video package — branch `video/soa-01`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** soa-01 · flagship channel · State of Adoption lane
- **Title:** 1.2 Billion People Use AI Every Week. Almost None Own It.
- **Stage:** assembled package; end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-1) — in-package editability PROVEN 2026-10-26 (JOB EDITABILITY-1: the scene carries an inspector over its own PLAN + word-decision data — inspect → edit → save → reopen, rendered change exact; ?render inert; re-verification of the layered bytes queued as PACKAGE-VERIFY-6). CLONE-VERIFIED audio, locked
  transcript, shipped scene, verified render.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 133 / 134**
  - metadata scaffold: 8 / 9 fields decided (`metadata.json`)
  - element decisions: 44 / 44 elements carry a record
    (`decisions/decisions.json` — 11 decision records)
  - word decisions: 81 / 81 words carry a recorded treatment or a
    deliberate as-is (`decisions/word-decisions.json`)
- **Open fields, named** (undecided decision fields — a coverage inventory; it does not by itself measure the rendered result):
  - `audience` — the record never named the audience or the
    misconception (board phase-0 check still pending)

Finishing decisions, 2026-10-26 (JOB FINISH-FIELDS-1 — dated
finishing decisions, recorded as such, not backfilled history;
see `metadata.json` for the full values, reasoning and evidence):
  - `delivery_structure` — DECIDED as the delivery structure of
    record, measured off the delivered artifact: contiguous locked
    line windows (dateline → number → restatement → turn →
    mechanism → aphoristic close), the C-05 phrase system, the
    silent bridge. No separate pause-map pass was ever performed;
    a future retrofit amends this by a new dated decision.
  - `scene_decomposition` — DECIDED as the compartment inventory
    the shipped file itself embodies (container / per-line
    compartments / bridge / word-animation layer / audio /
    in-page decision layer / player chrome); the scene stays one
    self-contained file (DR-CONTAINER, H-01).

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
