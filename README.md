# dir-02 — "Close Meanings Sit Close"

**This package is PARTIAL, and says so first: its decisions layer is incomplete — the word-decisions layer is ABSENT (0 of 96 words carry a recorded decision), because no per-word decision record exists for this piece anywhere in its records. Everything else in the package is complete and verified as far as its records go; nothing here claims the word layer exists.**

**Stage: assembled package — PARTIAL: decisions layer incomplete (word decisions absent) (package verification not yet run).**

**Video package — branch `video/dir-02`.** This file system IS the video's production layer: it ships with the video, and this branch's commit history is the video's development history, in developmental order. The MP4 is a derivative export of this package.

- **Piece:** dir-02 · flagship channel · Workshop — Beats from the Workshop Video
- **Title (of record):** "Close Meanings Sit Close" (script doc, marked designed); slate title: "Why the Machine Groups Cat With Dog"
- **Public:** none — the piece was never published. It sits as a Studio draft (i2, `DWmWqUveK54`) that is STALE after the Oneness audit's fixes — replace at publish, never stack.
- **The voice:** the delivered render speaks the **guide voice**. The clone upgrade stands **HELD** in the voice registry behind the rebuild — no Pelican job exists for this piece — so the audio layer carries the guide programme and the held-upgrade record, not a swapped voice.
- **The owner's verdict on the delivered build: NOT APPROVED** (Action #16, 2026-10-24 — story-structure rework ordered). The rework's text is decided and carried in this package (`rebuild_script`); the delivered build is assembled as it stands.

This branch is the piece's complete production package in the repository's standard shape: metadata (the decision scaffold) → transcript (the delivered text, which governs, with the three-text divergence recorded and the decided rebuild text carried) → decisions (element records + the word-layer absence record + the ledger exception carried) → audio (the delivered guide programme, with its HELD upgrade record) → scene (the shipped backfill scene, byte-identical) → render (the delivered guide-voice render + its verification record).

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 25 / 129**
  - metadata scaffold: 8 / 16 fields decided (`metadata.json`)
  - element decisions: 17 / 17 elements carry a record
    (`decisions/decisions.json` — the 2026-10-23 context audit's
    element inventory, carried verbatim)
  - word decisions: 0 / 96 words — **ABSENT**
    (`decisions/word-decisions.json` is an absence record: what
    exists instead, why the layer is absent, and the authoring
    task)

The denominator carries all 96 delivered words, because a word layer that does not exist must still count against the piece: the package does not shrink its total to hide the gap. The authoring task that would close it is stated in `metadata.json` (`word_decisions`) and in the absence record — a separate development job on this branch, not part of this assembly.

- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `audience` — the board's phase-0 item "Audience + misconception
    named" stands pending; no record names this piece's audience
  - `orientation_line` — STRUCT-2 H3 = R (RANDOM-ABSENT): the
    delivered build has no orientation line and no record settles
    one; the rebuild authors one as its L2 — under the decided
    rebuild, not this build
  - `delivery_structure` — no pause map exists for the delivered
    build (decision table: NOT-DECIDED); the pause map belongs to
    the rebuild script's Stage-2 pass
  - `scene_decomposition` — the scene ships as one self-contained
    file; splitting it is a future, separately recorded decision
  - `word_decisions` — LAYER ABSENT (0/96): no per-word record
    exists; authoring task stated in the field and in
    `decisions/word-decisions.json`
  - `transcript_line_divergence` — three texts stand in the record
    (i1 locked script 9 lines / 110 spoken words · delivered i2
    7 lines / 96, which governs · decided rebuild v2 8 lines / 128).
    The divergence stands until the rebuild ships; full evidence
    in `transcript/transcript.md`
  - `voice_upgrade` — GUIDE delivered; the clone upgrade stands
    HELD in the voice registry, gated on the rebuild ("re-kit
    after the rebuild"); no Pelican job exists for this piece.
    The rebuild script is now decided — the remaining gate is the
    rebuild build itself
  - `publish_verdict` — no publish verdict exists; the piece sits
    as a Studio draft (i2) that is STALE after the Oneness fixes
    (board: "Draft matches current file" FAIL — replace at
    publish, never stack)

Every decided field carries a rationale and a named source (research / agent reasoning / Hadi's taste). Open fields stay visibly open — they are the named remainder, not hidden gaps. **One ledger exception rides with this piece** — §5 entry #5 (the rebuild script's navigation share, 13/128 = 10.2%, over the ~10% target, inside the 20% hard cap): carried in `decisions/decisions.json` with its status_note — the ledger leaves it standing, awaiting the owner; Archer's acceptance on file is the carry (content note CN-1), not the trim decision. Entry #4 (the DIR pair's double QC tax) was checked and is a process entry, not an exception of this piece; entry #7 (guide voice final-for-now) is class context in the audio layer; entry #8 (mono finals) does not attach — the delivered master is stereo. Two evidence conflicts inside the records are carried openly, never corrected: the i2 master carries two loudness figures in the record (−13.97 LUFS / TP −1.80 governs — re-measured at this migration on the delivered file; −14.48 / −1.32 was the pre-fix mono reading, resolved by the upload doc's own QC log), and the script doc's iteration log miscounts its own line list ("the remaining seven lines" where eight remain after the opener — the spoken count is seven only because the closer also left the narration; measured counts ride the transcript layer).

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece (the delivered mix, as
  delivered) and shows its decision records in-page. Honest about
  what it is: a 2026-10-24 backfill that reconstructs the draft
  piece from its production data so the board plays the
  production file itself (its in-scene DEC block is the
  backfill's own account; the MP4 was NOT re-rendered from this
  scene, and between its sampled plates the motion is a
  crossfade, not the render's continuous animation).
- **The voice:** `audio/narration.m4a` — the delivered programme
  audio extracted from the render (guide narration over the
  continuous bed). No clone take exists for this piece; the
  upgrade is HELD behind the rebuild.
- **The render:** `render/render.mp4` — the delivered build
  (46.433 s, −13.97 LUFS, −1.80 dBTP, guide voice), a Studio-draft
  build its owner did not approve, with its measurements in
  `render/verification.json`.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → message → structure → the decided rebuild → open fields) | the piece's script docs (i1 + rework + v2) + upload package + direction slate + catalogue objectives audit + STRUCT-2 audit + catalogue decision table + board record + voice registry (per-field citations inside) |
| `transcript/` | Delivered transcript (7 lines, timings; governs) + the i1 script document + the decided v2 rebuild script, both byte-identical | delivered text + timings from the voice registry / kit extraction of the shipped scene's plan (they agree exactly); the three-text divergence and both word-count rulers reconciled inside |
| `decisions/` | Element decision records (17/17) + the word-layer absence record + the ledger exception carried with its status note | the 2026-10-23 context audit's element inventory, verbatim; the absence from the catalogue decision audit + the shipped scene; the exception from the department-doc exceptions ledger §5, read directly in the departments repo |
| `audio/` | Delivered programme audio (guide) + the HELD upgrade record | the delivered MP4's audio stream; the voice registry's dir-02 record (GUIDE; upgrade HELD; no Pelican jobs) |
| `scene/` | The shipped scene (the board backfill), byte-identical + provenance | `files/short-dir02-close-i2-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | The delivered guide-voice render in-branch + verification measurements | `files/short-dir02-close-i2.mp4` (the delivered build of record) + board QC standing + migration re-measurement |
