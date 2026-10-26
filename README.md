# WD-05 — "What Is a Tool?" (Word Definitions)

**Video package — branch `video/wd-05`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** wd-05 · flagship channel · Word Definitions
- **Title:** What Is a Tool?
- **Stage:** assembled package; end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-3) — in-package editability (b) PROVEN on branch bytes (JOB EDITABILITY-2: inspector joins PLAN ↔ word-decision records 1:1 on all 115 words; edit → save → reopen rendered the change exact at +200.0 px; no-overlay playback pixel-identical to the master scene; ?render fully inert; stripping the additive layer restores the master scene byte-for-byte; gate re-run against the committed layered scene and every leg re-passed on the branch bytes, JOB PACKAGE-VERIFY-7, 2026-10-26) — CLONE-VERIFIED candidate audio, locked transcript, shipped scene (the v1 build, from script v3), verified clone render in-branch.
  The piece itself sits at board stage qc, unpublished.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 189 / 191**
  - metadata scaffold: 9 / 11 fields decided (`metadata.json`)
  - element decisions: 65 / 65 elements carry a record
    (`decisions/decisions.json` — 12 decision records; the scene
    DEC coverage header's figure — its classes name the 53 scene
    components and the numbered non-component layers sum to 62, so
    the header does not decompose; the board audit independently
    counts 65/65. Both rulers are cited in the file's provenance,
    not merged)
  - word decisions: 115 / 115 spoken words carry a recorded
    decision (`decisions/word-decisions.json` — the in-DEC array;
    the script's 3 em-dash tokens are punctuation and carry no
    word objects in this scene)
- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `skills_tools_canon` — Action #28 / canon O-1: the Skills-vs-
    Tools ruling embodied at L6 (and L3's one word) is
    PROVISIONAL, derived from Hadi's own library and shipped for
    his correction on the artifact; if he rules otherwise, those
    are the only lines that move. This is the piece's primary
    open ask (req-canon-o1-skills-tools)
  - `cover_phrase` — DR-1's chosen cover line 'PERFECT. AND
    UNSENT.' vs the shipped frame's plan-verbatim state line:
    flagged by the build job, carried as a pending board
    extra_check; an overlay line is a separate decision

Finishing decisions, 2026-10-26 (JOB FINISH-FIELDS-1 — dated
finishing decisions, recorded as such, not backfilled history;
see `metadata.json` for the full values, reasoning and evidence):
  - `delivery_structure` — DECIDED as the delivery structure of
    record, measured off the delivered artifact: nine lines on
    DR-AUDIO's measured timeline (inter-line gaps 0.35–0.45,
    ENDPAD 1.10), one decided visual beat per line (B1–B9), the
    C-05 phrase system, the silent 3.0 s bridge. No separate
    pause-map pass was ever performed; a future retrofit amends
    this by a new dated decision.
  - `scene_decomposition` — DECIDED as the compartment inventory
    the shipped file itself embodies (container / per-line beat
    compartments B1–B9 / bridge / word-animation layer / audio /
    in-page decision layer / player chrome); the scene stays one
    self-contained file (DR-CONTAINER, H-01).

Every decided field carries a rationale and a named source
(research / agent reasoning / Hadi's taste). Open fields stay
visibly open — they are the named remainder, not hidden gaps.
No accepted exception rides with this piece (no ledger entry
names it; `decisions/decisions.json` records the empty set with
its revisability note).

## How to play

- **The scene:** open `scene/index.html` in any browser — one
  self-contained file; it plays the piece (guide-era audio, as
  shipped) and shows its decision records in-page.
- **The voice:** `audio/narration.m4a` — the CLONE-VERIFIED
  candidate programme audio, extracted from the candidate render.
- **The render:** `render/render.mp4` — the CLONE-VERIFIED
  candidate itself, copied in-branch (2,964,887 B), with its
  measurements in `render/verification.json`. The delivered
  guide-voice render is cited there by hash.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → open fields) | the piece's script docs (Phase 1 Narrative Gate / HS record / DR-1/DR-2) + catalogue objectives audit + board record + board ask req-canon-o1-skills-tools (per-field citations inside) |
| `transcript/` | Locked final transcript + its source script document | script v3 governs text; voice registry timings; board transcript agrees line for line (the 118/115 count reconciliation is noted inside) |
| `decisions/` | Element decision records + per-word decisions | the shipped scene's own DEC block (12 records + the in-block word_decisions array, 115 entries), extracted verbatim |
| `audio/` | Clone candidate programme audio + provenance | Pelican jobs (registered + L2/L7 ICL) + the CLONE-VERIFIED registry entry + batch-1 take/fit records + the WD level-rule rebuild |
| `scene/` | The shipped scene (v1 build), byte-identical + provenance | `files/short-wd05-tool-v1-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | The verified clone render in-branch + verification measurements | `files/wd-05-clone-v1.mp4` (CLONE-VERIFIED); delivered guide render `files/short-wd05-tool-v1.mp4` cited by hash |
