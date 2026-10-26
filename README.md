# EO-EP2 — "The Story Was the First Backup" (Earth One Ep.2)

**Video package — branch `video/eo-ep2`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** eo-ep2-v3 (board record) · Earth One channel ·
  The Planet's Story — Observations
- **Title:** The Story Was the First Backup
- **Stage:** assembled package; end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-2) — in-package editability absent, a named gap against the full deliverable criteria — locked transcript, shipped scene,
  verified render. The delivered build speaks the **guide voice**
  (clone upgrade Tier B) and carries the catalogue's richest open
  record: ten named open fields, two of them accepted by nobody.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 166 / 176**
  - metadata scaffold: 7 / 17 fields decided (`metadata.json`)
  - element decisions: 20 / 20 elements carry a record
    (`decisions/decisions.json` — 31 scene records + the C-06
    build record)
  - word decisions: 139 / 139 words carry a recorded treatment or
    a deliberate as-is (`decisions/word-decisions.json`)
- **Open fields, named** (undecided decision fields — a coverage inventory; it does not by itself measure the rendered result):
  - `banned_formula_L12` — the locked narration speaks the banned
    formula at L12 (≈44.85–49.94 s); ship named / hold / trim is
    Action #57, and **nobody has accepted it**
  - `onset_repairs` — three phrase windows open late (By +450 ms,
    But +157 ms, Tell +183 ms); fix = windows open at first-word
    onset, at this piece's next plan rebuild — the package's
    stated next build step
  - `final_phrase_extension` — the final phrase's end extends to
    ≥ 50.200 s at the same rebuild (its acceptance rationale was
    withdrawn by erratum E-2; the residual stands measured)
  - `voice_tier_b` — no clone candidate exists: L1's one ICL
    failed at 0.6957, L8/L12 ICLs were never submitted; the
    second-ICL question (Action #74) rides here
  - `template_verdict` — v4 HTML vs the published plate build as
    the rebuild template is Action #19, unscored
  - `editor_pass` — no editor simulation exists for this version;
    the badge's five items stand open together
  - `delivery_structure` — no pause map / delivery pass exists;
    the only pause record keeps the locked mix's measured gaps
  - `ambience_layer` — the fire-world ambience is proposed
    in-scene (DR-GAP-SFX) and NOT built; Action #39 governs it
  - `engagement_overlays` — silent subscribe/bell symbols vs
    spoken-only is Action #35; the absence is still a default
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — they are the named remainder, not hidden gaps.
One exception rides with the piece: the final phrase's dwell
residual — accepted by Archer in 2026-10-25, reclassified in
2026-10-26 when its cap rationale was withdrawn (recorded in
`decisions/decisions.json`). Two further deviations are recorded
as accepted by **nobody**: the banned formula (ledger #6) and
the late window-open onsets (ledger #11).

Also on the record, from the 2026-10-23 context audit
(`context_v2.absent_classes_open`): the distribution classes
`pinned-comment-timing`, `publish-time-of-day`, `loop-seam` and
`auto-captions-check` remain unrecorded for this piece; the other
two absent classes (`engagement-overlays`, `sfx-ambience-layer`)
are carried above as scaffold fields.

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece and shows its decision
  records in-page.
- **The render:** `render/render.mp4` — the delivered v4 build
  (54.540 s, −14.02 LUFS, −1.82 dBTP, guide voice).
- **The voice:** `audio/narration.m4a` — the delivered programme
  audio extracted from the render (locked guide narration over
  the bed). The clone swap has not happened for this piece.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → the open fields) | the piece's script doc + board record + voice registry (per-field citations inside) |
| `transcript/` | Locked final transcript (12 lines, timings) + its source script document | script doc verbatim; timings from the voice registry's PLAN lines |
| `decisions/` | Element decision records + per-word decisions + the C-06 build record + exception/open records + evidence citations | the shipped scene's own DEC block, extracted verbatim; QC + ledger records appended with citations |
| `audio/` | Delivered programme audio + Tier B provenance | the delivered MP4's audio stream; Pelican jobs from the voice registry |
| `scene/` | The shipped scene, byte-identical + provenance | `files/earthone-ep02-v4-scene.html` (sha256 in `scene/scene.json`) |
| `render/` | The delivered render + its verification measurements | `files/earthone-ep02-v4-wordanim.mp4` + delivered-file measurements + Dot's independent verification of supplied stills and source records (not the MP4 bytes, playback or audio) |
