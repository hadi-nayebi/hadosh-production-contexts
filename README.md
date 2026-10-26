# eo-trailer — video package

This branch is the file system of one video: the Earth One
channel trailer, board piece eo-trailer, shipped build v2
(built 2026-10-23) — the funnel head of the Earth One channel,
public as its channel trailer for non-subscribers.

**This package is PARTIAL — by design, and visibly.** Its
decisions layer is incomplete: the element level is fully
recorded (19/19), but no per-word decision record exists for
this piece anywhere, so the word layer ships as a named absence
(0/127) with its authoring task stated in the scaffold. Every
other layer is complete. The partial state is the honest state;
filling the word layer is new decision work, not assembly.

- **Stage:** assembled package — PARTIAL: decisions layer incomplete (word decisions absent); end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-5) — in-package editability absent, a named gap against the full deliverable criteria (file-level data→render linkage proven through the in-scene PLAN) — CLONE-VERIFIED candidate audio (the delivered render of record), locked transcript, shipped scene, verified clone render in-branch.
- **Public:** https://youtube.com/shorts/4ovgwcMxGxk — public as
  the Earth One channel trailer. The upload is the v2 guide
  build's; the verified clone render in this package is the
  piece's delivered render of record (the board's voice checks
  stand against it), and no record shows it re-uploaded. The
  shipped scene still embeds the guide-era programme. Both
  halves of that asymmetry are stated, not smoothed.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 25 / 159**
  - metadata scaffold: 6 / 13 fields decided (`metadata.json`)
  - element decisions: 19 / 19 elements carry a record
    (`decisions/decisions.json` — the 2026-10-23 context audit's
    inventory, carried verbatim)
  - word decisions: **0 / 127 — ABSENT** (no per-word record
    exists; `decisions/word-decisions.json` is an absence record
    stating the gap and its authoring task)
- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `audience` — the trailer's non-subscriber setting is on
    record, but the phase-0 audience + misconception check was
    never settled for this piece
  - `delivery_structure` — no pause map / delivery-pass record
    exists for this piece
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision
  - `onset_repairs` — the first phrase window opens +470 ms after
    the first word's spoken onset (window 1.95 s vs spoken start
    1.48 s in the piece's own timing record; confirmed by JOB
    PACKAGE-VERIFY-5's playback probe, 2026-10-26 — words 2–4
    align exactly, the offset is phrase-1 specific); fix =
    windows open at first-word onset at the next plan rebuild —
    the same class eo-ep2, eo-ep3, teaser-print-v2 and eo-ep4
    carry
  - `word_decisions` — the absent layer itself: 127 words with
    timings on record and no treatment decisions; the authoring
    task is stated in the field and in
    `decisions/word-decisions.json`
  - `said_shown_gap` — the board's Bestness audit (SAID = SHOWN)
    stands open: the family and making lines claim the real
    things over drawn plates and a facsimile
  - `banned_formula_L9` — the closing line speaks "Subscribe,
    like, and follow", a formula the channel's rules ban
    (recorded against Ep.2's instance, ledger #6 / Action #57);
    this piece's instance has never been ruled

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — no field in this package was filled from silence.

## How to play

Open `scene/index.html` in a browser and press play — it is the
shipped v2 scene, byte-identical (guide-era audio embedded, as
shipped). `render/render.mp4` is the CLONE-VERIFIED candidate —
for this piece, uniquely, it is also the delivered render of
record (Hadi's cloned voice; the board's voice checks stand
against this file). The package is the deliverable alongside
the video: the MP4 is a derivative of this file system, not the
other way round.

## Provenance index

- `metadata.json` — the decision scaffold (12 fields; 6 decided,
  6 OPEN, each OPEN field citing its governing record)
- `transcript/` — the locked script (9 spoken lines, 127 spoken
  words, between two silent cards) + its source script document,
  byte-identical
- `decisions/` — the element audit verbatim (19 records) + the
  word layer's absence record
- `audio/` — the candidate's programme audio (stream copy) +
  Pelican provenance (registered job, two ICL resolutions,
  per-line takes, fit)
- `scene/` — the shipped v2 scene, byte-identical, + its
  provenance (the board edition hashes differently — recorded)
- `render/` — the clone candidate render, byte-identical, + its
  verification record (the published guide build cited by hash)
