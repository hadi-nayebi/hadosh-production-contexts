# ws01-v2 — "A Word Is a Direction" (Workshop Prose)

**This package is PARTIAL, and says so first: its decisions layer is incomplete — the word-decisions layer is ABSENT (0 of 323 words carry a recorded decision), because no per-word decision record exists for this piece anywhere in its records. Everything else in the package is complete and verified as far as its records go; nothing here claims the word layer exists.**

**Stage: assembled package — PARTIAL: decisions layer incomplete (word decisions absent); end-to-end checks 1–6 verified 2026-10-26 on this branch's bytes (JOB PACKAGE-VERIFY-6) — the word-layer absence claim itself verified against the workspace records; editability (a) proven for the data the renderer consumes (plates/segments): the carried plan word objects are not renderer input (the scene's own account, confirmed by direct edit test); in-package editability (b) absent.**

**Video package — branch `video/ws01-v2`.** This file system IS the video's production layer: it ships with the video, and this branch's commit history is the video's development history, in developmental order. The MP4 is a derivative export of this package.

- **Piece:** ws01-v2 · flagship channel · Workshop — Beats from the Workshop Video
- **Title:** A Word Is a Direction
- **Public:** https://youtube.com/shorts/4C2Tfyx2JYc — published by Hadi himself, 2026-10-22. The piece itself sits at board stage **published**.
- **The voice:** the delivered render speaks the **guide voice** — and is live public in it. The clone upgrade is **Tier B**: dead line L2 (its one ICL spent and failed), lines L3 and L4 unresolved (their ICLs withheld, never submitted) — so the audio layer carries the guide programme and the open voice record, not a swapped voice.

This branch is the piece's complete production package in the repository's standard shape: metadata (the decision scaffold) → transcript (the locked text) → decisions (element records + the word-layer absence record) → audio (the delivered programme, with its Tier B provenance) → scene (the shipped scene, byte-identical) → render (the delivered guide-voice render + its verification record).

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 23 / 351**
  - metadata scaffold: 7 / 12 fields decided (`metadata.json`)
  - element decisions: 16 / 16 elements carry a record
    (`decisions/decisions.json` — the 2026-10-23 context audit's
    element inventory, carried verbatim)
  - word decisions: 0 / 323 words — **ABSENT**
    (`decisions/word-decisions.json` is an absence record: what
    exists instead, why the layer is absent, and the authoring
    task)

The denominator carries all 323 delivered words, because a word layer that does not exist must still count against the piece: the package does not shrink its total to hide the gap. The authoring task that would close it is stated in `metadata.json` (`word_decisions`) and in the absence record — a separate development job on this branch, not part of this assembly.

- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `orientation_line` — STRUCT-2 H3 = W: L1 orients the
    question, not the piece; no decision record settles an
    orientation form. The audit's fix (add a one-line
    orientation beat) is named for the next iteration
  - `delivery_structure` — no pause map / delivery-pass record
    exists for this piece (decision audit: NOT-DECIDED)
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision
  - `word_decisions` — LAYER ABSENT (0/323): no per-word record
    exists; authoring task stated in the field and in
    `decisions/word-decisions.json`
  - `voice_tier_b` — no clone candidate exists, and the three
    unresolved lines differ in kind: L2 (the live-experiment
    line) failed its registered take (0.7368) and SPENT its one
    ICL (0.700 on both takes, diagnostics 404, no audio on
    record); L3 (0.96, final-words fail) and L4 (0.9545, final
    word heard "build" vs "built") were never submitted — their
    ICLs are WITHHELD under the recorded skip rule and remain
    submittable as the standard's own remedy, while L2 alone
    needs a second-ICL exception (the converted Action #74; the
    Tier B disposition recommends A: all three in one run, only
    L2's an exception — with its caution standing: this piece's
    exception is the weakest-scoring of the set)

Every decided field carries a rationale and a named source (research / agent reasoning / Hadi's taste). Open fields stay visibly open — they are the named remainder, not hidden gaps. **No accepted exception rides with this piece** (the exceptions ledger §5 was read directly: no entry names it; class entry #7 — guide voice final-for-now, its timing superseded by the voice-upgrade mandate — is cited as context in the audio layer; class entry #8 — mono fastlane finals — was checked and does not attach: the delivered audio is stereo). Two decided fields carry their weak structural marks in the open: `hook_form` (STRUCT-2 H1 = W, and its click record is the annex's labeled DR-1 reconstruction) and `end_referral` (STRUCT-2 H6 = W — no forward tease to DIR-01 was recorded at build).

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece (the published mix, as
  published) and shows its decision records in-page. Honest
  about what it is: a 2026-10-24 backfill that reconstructs the
  published piece from its production data so the board plays
  the production file itself (its in-scene DEC block is the
  backfill's own account; the MP4 was NOT re-rendered from this
  scene; between its sampled plates, motion is a crossfade —
  the scene's own flagged caveat).
- **The voice:** `audio/narration.m4a` — the delivered programme
  audio extracted from the render (guide narration over the
  bed). The clone swap has not happened for this piece; no
  candidate exists.
- **The render:** `render/render.mp4` — the delivered v2 build
  (106.700 s, −14.30 LUFS, −1.09 dBTP, guide voice), the live
  public video's own file, with its measurements in
  `render/verification.json`.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → open fields) | the piece's script doc + Phase 0 study brief + context annex + catalogue objectives audit + STRUCT-2 audit + board record + voice registry + Tier B disposition (per-field citations inside) |
| `transcript/` | Locked transcript (12 lines, timings) + its source script document | script doc governs text (locked at Phase 1, 2026-10-22; built verbatim); timings from the voice registry; both word-count rulers reconciled inside |
| `decisions/` | Element decision records (16/16) + the word-layer absence record + the (empty) accepted-exceptions set | the 2026-10-23 context audit's element inventory, verbatim; the absence from the catalogue decision audit + the shipped scene; the exceptions set from the department-doc exceptions ledger §5, read directly |
| `audio/` | Delivered programme audio + Tier B provenance (spent vs withheld lines as structured sub-records) | the delivered MP4's audio stream; Pelican jobs from the voice registry + batch-3 results + the serial-resume report (registered + L2 ICL spent + L3/L4 ICLs withheld) |
| `scene/` | The shipped scene (the board backfill), byte-identical + provenance | `files/short-ws01-single-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | The delivered guide-voice render in-branch + verification measurements | `files/short-ws01-single.mp4` (the published build of record) + board QC standing + migration re-measurement |
