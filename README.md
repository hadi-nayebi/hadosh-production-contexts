# WD-01 — "What Is a Token?" (Word Definitions)

**Video package — branch `video/wd-01`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** wd-01 · flagship channel · Word Definitions
- **Title:** What Is a Token?
- **Stage:** assembled package; end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-4) — in-package editability absent, a named gap against the full deliverable criteria —
  CLONE-VERIFIED candidate audio, locked delivered transcript,
  shipped scene (the v3 HTML-scene build, from the i2-locked
  script text), verified clone render in-branch. The piece itself
  sits at board stage qc, unpublished; its one divergence of
  record — the script's 7 lines against the delivered 6 — is
  carried openly below and in the scaffold.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 146 / 150**
  - metadata scaffold: 6 / 10 fields decided (`metadata.json`)
  - element decisions: 39 / 39 elements carry a record
    (`decisions/decisions.json` — 8 decision records; the scene
    DEC coverage header's figure — its classes' numbered entries
    sum to 37 plus the unnumbered script class, so the header
    does not decompose; the board audit independently counts
    39/39, and the 2026-10-23 context audit counts 18/18 under
    an older ruler. All three rulers are cited in the file's
    provenance, not merged)
  - word decisions: 101 / 101 spoken words carry a recorded
    decision (`decisions/word-decisions.json` — the standalone
    container restored by board round b33; the script's 2
    em-dash tokens are punctuation and carry no word objects
    in this scene)
- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `audience` — no record names this piece's audience or
    misconception as a phase-0 decision; the board's phase-0
    item stands pending (the misconception is performed at L2,
    never named as an audience record)
  - `delivery_structure` — no pause map / delivery-pass record
    exists for this piece; the build's gaps are build facts,
    not per-gap decisions
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision
  - `transcript_line_divergence` — the script of record's table
    and the board transcript state 7 lines; the delivered scene
    speaks 6 (the "directions" line absent, the close
    rewritten). The reconciliation audit records the absence as
    recorded nowhere before the audit; the script doc's own i2
    note and the scene's DR-SCRIPT stand beside that finding,
    unreconciled. Full account in `transcript/transcript.md`

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — they are the named remainder, not hidden gaps.
No accepted exception rides with this piece (the exceptions
ledger names no wd-01 entry; `decisions/decisions.json`
records the empty set with its revisability note).

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece (guide-era audio, as
  shipped) and shows its decision records in-page.
- **The voice:** `audio/narration.m4a` — the CLONE-VERIFIED
  candidate programme audio, extracted from the candidate render.
- **The render:** `render/render.mp4` — the CLONE-VERIFIED
  candidate itself, copied in-branch (2,467,777 B), with its
  measurements in `render/verification.json`. The delivered
  guide-voice render is cited there by hash.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → open fields) | the piece's script doc (Phase 1 treatment + W-section + i2 iteration) + catalogue objectives audit + STRUCT-2 + board record + reconciliation audit (per-field citations inside) |
| `transcript/` | Locked delivered transcript (6 lines) + its source script document | the delivered scene's PLAN + voice registry kit govern the delivered text; the script doc is carried byte-identical — its 7-line table and the divergence account live in `transcript/transcript.md` |
| `decisions/` | Element decision records + per-word decisions | the shipped scene's own DEC block (8 records) + its standalone word-decision container (101 entries, b33-restored), extracted verbatim |
| `audio/` | Clone candidate programme audio + provenance | Pelican jobs (registered + L1 ICL) + the CLONE-VERIFIED registry entry + batch-1 take/fit records + the WD level-rule rebuild |
| `scene/` | The shipped scene (v3 build), byte-identical + provenance | `files/short-wd01-token-v3-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | The verified clone render in-branch + verification measurements | `files/wd-01-clone-v1.mp4` (CLONE-VERIFIED); delivered guide render `files/short-wd01-token-v3.mp4` cited by hash |
