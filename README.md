# intro-v3 — video package

This branch is the file system of one video: the flagship channel
intro "Welcome — Let's Build It Together", board piece intro-v3,
shipped build v3 (published 2026-10-22) — the channel trailer,
first in "Start Here — The Funnel", and the build that became the
channel's H-01 word-animation pattern.

**This package is PARTIAL — by design, and visibly.** Its
decisions layer is incomplete: the element level is fully
recorded (18/18), but no per-word decision record exists for this
piece anywhere, so the word layer ships as a named absence
(0/160) with its authoring task stated in the scaffold. Every
other layer is complete. The partial state is the honest state;
filling the word layer is new decision work, not assembly.

- **Stage:** assembled package — PARTIAL: decisions layer
  incomplete (word decisions absent) (package verification not
  yet run)
- **Public:** https://youtube.com/shorts/7x-m1idAKPU — the public
  link still serves the guide-era render; the verified clone
  render in this package is built but unpublished.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 25 / 190**
  - metadata scaffold: 7 / 12 fields decided (`metadata.json`)
  - element decisions: 18 / 18 elements carry a record
    (`decisions/decisions.json` — the 2026-10-23 context audit's
    inventory, carried verbatim)
  - word decisions: **0 / 160 — ABSENT** (no per-word record
    exists; `decisions/word-decisions.json` is an absence record
    stating the gap and its authoring task)
- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `delivery_structure` — no pause map / delivery-pass record
    exists for this piece
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision
  - `word_decisions` — the absent layer itself: 160 words with
    timings on record and no treatment decisions; the authoring
    task is stated in the field and in
    `decisions/word-decisions.json`
  - `academy_connection` — the Hadosh Academy connection is never
    stated in the video itself (named only in the description);
    the recorded fix is intro-v4, a different piece
  - `said_shown_gap` — the board's Bestness audit (SAID = SHOWN)
    stands open on L9/L10: drawn panels where the real repo and
    link are claimed; fix recorded in intro-v4's visual plan

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — no field in this package was filled from silence.

## How to play

Open `scene/index.html` in a browser and press play — it is the
shipped scene, byte-identical (guide-era audio embedded, as
published). `render/render.mp4` is the CLONE-VERIFIED candidate
render (Hadi's cloned voice; built but unpublished). The package
is the deliverable alongside the video: the MP4 is a derivative
of this file system, not the other way round.

## Provenance index

- `metadata.json` — the decision scaffold (12 fields; 7 decided,
  5 OPEN, each OPEN field citing its governing record)
- `transcript/` — the locked script (11 lines, 160 spoken words)
  + its source script document, byte-identical
- `decisions/` — the element audit verbatim (18 records) + the
  word layer's absence record
- `audio/` — the candidate's programme audio (stream copy) +
  Pelican provenance (registered job, per-line takes, fit)
- `scene/` — the shipped scene, byte-identical, + its provenance
  (the board edition hashes identically — recorded)
- `render/` — the clone candidate render, byte-identical, + its
  verification record (the published guide render cited by hash)
