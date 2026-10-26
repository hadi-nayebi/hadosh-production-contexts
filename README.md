# TEASER-PRINT-V2 — "Two Identical Bibles" (Earth One)

**Video package — branch `video/teaser-print-v2`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** teaser-print-v2 · Earth One channel · The Planet's Story —
  Observations
- **Title:** Two Identical Bibles
- **Stage:** assembled package (package verification not yet run) — CLONE-VERIFIED candidate audio,
  locked transcript, shipped scene (the v3 build), verified clone
  render in-branch.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 150 / 153**
  - metadata scaffold: 7 / 10 fields decided (`metadata.json`)
  - element decisions: 26 / 26 elements carry a record
    (`decisions/decisions.json` — 26 decision records)
  - word decisions: 117 / 117 words carry a recorded treatment or
    a deliberate as-is (`decisions/word-decisions.json`)
- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `delivery_structure` — no pause map / delivery-pass record
    exists for this piece
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision
  - `v3_verdict` — Action #20: the v3 improvement build (the
    shipped scene here) awaits Hadi's re-judgment; the v2 build
    scored 85/100 with headroom above 95 demanded

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — they are the named remainder, not hidden gaps.
No accepted exception is on record for this piece (the v2 build's
one disclosed defect — the press-line graze — was fixed in v3,
not accepted; see `decisions/decisions.json`).

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece (guide-era audio, as
  shipped) and shows its decision records in-page.
- **The voice:** `audio/narration.m4a` — the CLONE-VERIFIED
  candidate programme audio, extracted from the candidate render.
- **The render:** `render/render.mp4` — the CLONE-VERIFIED
  candidate itself, copied in-branch (29,995,053 B), with its
  measurements in `render/verification.json`. The delivered
  guide-voice render is cited there by hash.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → open fields) | the piece's script doc (Phase 0 / narrative declaration / Narrative Gate / DR-1–DR-3) + catalogue objectives audit + board record (per-field citations inside) |
| `transcript/` | Locked final transcript + its source script document | script v2 governs text; voice registry timings; board transcript agrees line for line (em-dash reconciliation noted inside) |
| `decisions/` | Element decision records + per-word decisions | the shipped scene's own DEC block (26 records; word decisions in its in-DEC array), extracted verbatim |
| `audio/` | Clone candidate programme audio + provenance | Pelican jobs (registered + L5/L6/L8 ICL) + the CLONE-VERIFIED registry entry + batch-2 take records |
| `scene/` | The shipped scene (v3 build), byte-identical + provenance | `files/earthone-teaser-print-v3-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | The verified clone render in-branch + verification measurements | `files/teaser-print-v2-clone-v1.mp4` (CLONE-VERIFIED); delivered guide render `files/earthone-teaser-print-v3.mp4` cited by hash |
