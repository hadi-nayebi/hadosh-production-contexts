# WD-02 — "What Is a Prompt?" (Word Definitions)

**Video package — branch `video/wd-02`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** wd-02 · flagship channel · Word Definitions
- **Title:** What Is a Prompt?
- **Stage:** assembled package; end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-3) — in-package editability absent, a named gap against the full deliverable criteria — CLONE-VERIFIED candidate audio, locked transcript, shipped scene (the v1 build, from script v3), verified clone render in-branch. The piece itself sits at board
  stage qc, unpublished.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 191 / 195**
  - metadata scaffold: 7 / 11 fields decided (`metadata.json`)
  - element decisions: 67 / 67 elements carry a record
    (`decisions/decisions.json` — 11 decision records; the scene
    DEC coverage header's figure — its classes name the 56 scene
    components the board audit counts; both rulers are cited in
    the file's provenance, not merged)
  - word decisions: 117 / 117 counted words carry a recorded
    decision (`decisions/word-decisions.json` — 115 spoken words
    plus the 2 em-dash tokens, decided as DROP-PUNCT)
- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `delivery_structure` — no pause map / delivery-pass record
    exists for this piece; the delivery layer is inherited lane
    TTS pacing, not an editor-passed pass
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision
  - `prompt_instructions_canon` — Action #27: the prompt-vs-
    Instructions ruling embodied at L6 is PROVISIONAL, derived
    from Hadi's own library and shipped for his correction on the
    artifact; if he rules otherwise, L6 is the only line that
    moves
  - `direction_wording` — 'direction' rides in L7/L8 in the
    everyday steering sense only (DR-3, provisional); the swap
    path (L8 'direction' → 'course') is recorded if Hadi prefers
    zero overlap with the direction model

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — they are the named remainder, not hidden gaps.
One accepted exception rides with the piece: the two
sentence-straddle dwell residuals (phrases #23 and #28, under
the C-05(a) floor) — recorded in `decisions/decisions.json`
with their acceptor and a revisability note.

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece (guide-era audio, as
  shipped) and shows its decision records in-page.
- **The voice:** `audio/narration.m4a` — the CLONE-VERIFIED
  candidate programme audio, extracted from the candidate render.
- **The render:** `render/render.mp4` — the CLONE-VERIFIED
  candidate itself, copied in-branch (2,883,604 B), with its
  measurements in `render/verification.json`. The delivered
  guide-voice render is cited there by hash.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → open fields) | the piece's script docs (Phase 0 / Narrative Gate / HS record / DR-1–DR-3) + catalogue objectives audit + board record + board ask req-wd02-prompt-canon (per-field citations inside) |
| `transcript/` | Locked final transcript + its source script document | script v3 governs text; voice registry timings; board transcript agrees line for line (the 117/116/115 count reconciliation is noted inside) |
| `decisions/` | Element decision records + per-word decisions | the shipped scene's own DEC block (11 records) + its standalone word-decision container (117 entries), extracted verbatim |
| `audio/` | Clone candidate programme audio + provenance | Pelican jobs (registered + L1 ICL) + the CLONE-VERIFIED registry entry + batch-1 take/fit records + the WD level-rule rebuild |
| `scene/` | The shipped scene (v1 build), byte-identical + provenance | `files/short-wd02-prompt-v1-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | The verified clone render in-branch + verification measurements | `files/wd-02-clone-v1.mp4` (CLONE-VERIFIED); delivered guide render `files/short-wd02-prompt-v1.mp4` cited by hash |
