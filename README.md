# wo-b — "What Kind of AGI?" (Workshop Opening, Version B)

**This package is PARTIAL, and says so first: its decisions layer is incomplete — the word-decisions layer is ABSENT (0 of 132 words carry a recorded decision), because no per-word decision record exists for this piece anywhere in its records. Everything else in the package is complete and verified as far as its records go; nothing here claims the word layer exists.**

**Stage: assembled package — PARTIAL: decisions layer incomplete (word decisions absent) (package verification not yet run).**

**Video package — branch `video/wo-b`.** This file system IS the video's production layer: it ships with the video, and this branch's commit history is the video's development history, in developmental order. The MP4 is a derivative export of this package.

- **Piece:** wo-b · flagship channel · Workshop — Beats from the Workshop Video
- **Title (of record, board):** 3.2 Quadrillion Tokens a Month — Google Alone (B · planetary framing) — the board's title attaches to the tokens iteration; the delivered build this package assembles is the "What Kind of AGI?" video. Both facts are recorded, not merged (see `transcript/transcript.md`).
- **Public:** https://youtube.com/shorts/IRHIduGQun4 — the piece sits at board stage **published**.
- **The voice:** the delivered render speaks the **guide voice** — and is live public in it. The clone upgrade is **Tier B**: dead line L4 (its one ICL spent — a verifier-passed take that cannot fit its slot; the take's audio is retained on record), lines L8, L10, L12 and L14 unresolved (their remedies withheld, never submitted) — so the audio layer carries the guide programme and the open voice record, not a swapped voice.

This branch is the piece's complete production package in the repository's standard shape: metadata (the decision scaffold) → transcript (the delivered text, which governs, with the three-text divergence recorded) → decisions (element records + the word-layer absence record) → audio (the delivered programme, with its Tier B provenance) → scene (the shipped scene, byte-identical) → render (the delivered guide-voice render + its verification record).

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 22 / 161**
  - metadata scaffold: 6 / 13 fields decided (`metadata.json`)
  - element decisions: 16 / 16 elements carry a record
    (`decisions/decisions.json` — the 2026-10-23 context audit's
    element inventory, carried verbatim)
  - word decisions: 0 / 132 words — **ABSENT**
    (`decisions/word-decisions.json` is an absence record: what
    exists instead, why the layer is absent, and the authoring
    task)

The denominator carries all 132 delivered words, because a word layer that does not exist must still count against the piece: the package does not shrink its total to hide the gap. The authoring task that would close it is stated in `metadata.json` (`word_decisions`) and in the absence record — a separate development job on this branch, not part of this assembly.

- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `audience` — the board's phase-0 item "Audience + misconception
    named" stands pending; no record names this piece's audience
  - `orientation_line` — STRUCT-2 H3 = W: the tokens text's
    orientation sits late (its L14) and the delivered build carries
    no decided orientation line; no decision record settles an
    orientation form
  - `delivery_structure` — no pause map / delivery-pass record
    exists for this piece (decision audit: NOT-DECIDED)
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision
  - `word_decisions` — LAYER ABSENT (0/132): no per-word record
    exists; authoring task stated in the field and in
    `decisions/word-decisions.json`
  - `transcript_line_divergence` — three texts stand in the record
    (tokens script 15 lines / 207 words · the delivered build's
    script doc, an 18-line table rewritten in the 2026-10-21
    doctrine restructure and never re-recorded · the delivered
    text, 18 lines / 132 words, which governs). Reconciling them
    is a rebuild decision; full evidence in
    `transcript/transcript.md`
  - `voice_tier_b` — no clone candidate exists, and the five
    unresolved lines differ in kind: L4 (the two-word inventory
    header, "Six parts.") failed its registered take and SPENT its
    one ICL — the ICL's take 2 passed the verifier (alignment 1.0)
    but cannot fit its 0.76 s budget (atempo 1.684 over the 1.35
    cap), with the take's audio retained on record; L8, L10 and
    L12 failed their registered takes and L14 passed the verifier
    but is over the fit cap (1.4755) — all four still HOLD their
    ICL remedy, withheld unsubmitted under the serial run's skip
    rule. The Tier B disposition recommends A (a second ICL for
    L4 — a standards amendment — plus standard ICLs for the four
    withheld lines), with Option C pre-named as L4's fallback
    (assemble the retained take at 1.684 as a named cap exception;
    it exists only because the audio is on record, and it cannot
    be labelled CLONE-VERIFIED) — undecided (the converted
    Action #74)

Every decided field carries a rationale and a named source (research / agent reasoning / Hadi's taste). Open fields stay visibly open — they are the named remainder, not hidden gaps. **No accepted exception rides with this piece** (the exceptions ledger §5 was read directly in the departments repo: 11 entries, none names wo-b; class entry #7 — guide voice final-for-now, its timing superseded by the voice-upgrade mandate — is cited as context in the audio layer; class entry #8 — mono fastlane finals — was checked and does not attach: the delivered audio is stereo). Two evidence conflicts inside the records are carried openly, never corrected: the context audit's element inventory contains the pair's A-iteration figures in three places (EL-03 and the companion structure values read 17 lines / 237 words — WO-A's tokens counts — where wo-b's own tokens script is 15 lines / 207 words), and its companion structure dict is a stale pre-Q2 copy — both noted in `decisions/decisions.json` provenance, with the elements list + header governing.

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece (the published mix, as
  published) and shows its decision records in-page. Honest
  about what it is: a 2026-10-24 backfill that reconstructs the
  published piece from its production data so the board plays
  the production file itself (its in-scene DEC block is the
  backfill's own account; the MP4 was NOT re-rendered from this
  scene).
- **The voice:** `audio/narration.m4a` — the delivered programme
  audio extracted from the render (guide narration over the
  bed). The clone swap has not happened for this piece; no
  candidate exists.
- **The render:** `render/render.mp4` — the delivered build
  (56.384 s, −14.08 LUFS, −1.31 dBTP, guide voice), the live
  public video's own file, with its measurements in
  `render/verification.json`.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → open fields) | the piece's two script docs + upload package + pair annex + catalogue objectives audit + STRUCT-2 audit + board record + package reconciliation + voice registry + Tier B disposition (per-field citations inside) |
| `transcript/` | Delivered transcript (18 lines, timings; governs) + the delivered build's source script document, byte-identical | delivered text + timings from the voice registry / kit extraction of the shipped scene's plan; the divergence and all three word-count rulers reconciled inside |
| `decisions/` | Element decision records (16/16) + the word-layer absence record + the (empty) accepted-exceptions set | the 2026-10-23 context audit's element inventory, verbatim; the absence from the catalogue decision audit + the shipped scene; the exceptions set from the department-doc exceptions ledger §5, read directly in the departments repo |
| `audio/` | Delivered programme audio + Tier B provenance (spent vs withheld lines as structured sub-records) | the delivered MP4's audio stream; Pelican jobs from the voice registry + batch-3 results + the serial-resume report (registered + L4 ICL spent + L8/L10/L12/L14 remedies withheld) |
| `scene/` | The shipped scene (the board backfill), byte-identical + provenance | `files/short-02b-what-kind-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | The delivered guide-voice render in-branch + verification measurements | `files/short-02b-what-kind.mp4` (the published build of record) + board QC standing + migration re-measurement |
