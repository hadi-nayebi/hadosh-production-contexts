# TEASER-PRINT-V2 — "Two Identical Bibles" (Earth One)

**Video package — branch `video/teaser-print-v2`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** teaser-print-v2 · Earth One channel · The Planet's Story —
  Observations
- **Title:** Two Identical Bibles
- **Stage:** assembled package; end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-3) and re-verified on the onset-repaired bytes 2026-10-26 (JOB PACKAGE-VERIFY-6: phrase-1 window independently re-probed — word 1 first visible at audioT 1.470 s against its 1.42 s spoken onset; the repair's two-value confinement re-proven byte-exact) — in-package editability (b) PROVEN 2026-10-26 (JOB EDITABILITY-2 (timeline-engine variant of the soa-01 pattern: start-only word timings + per-word size editable; line windows are PLAN.timeline pairs; records live in the #decisions word_decisions array): inspector joins PLAN ↔ word-decision records 1:1 on all 117 words; edit → save → reopen rendered the change exact at +200.0 px; no-overlay playback pixel-identical to the master scene; ?render fully inert; stripping the additive layer restores the master scene byte-for-byte) — PENDING main-agent commit + verification pass — CLONE-VERIFIED candidate audio, locked transcript, shipped scene (the v3 build, onset-repaired), verified clone render in-branch.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 153 / 154**
  - metadata scaffold: 10 / 11 fields decided (`metadata.json`)
  - element decisions: 26 / 26 elements carry a record
    (`decisions/decisions.json` — 26 decision records)
  - word decisions: 117 / 117 words carry a recorded treatment or
    a deliberate as-is (`decisions/word-decisions.json`)
- **Open fields, named** (undecided decision fields — a coverage
  inventory; it does not by itself measure the rendered result):
  - `v3_verdict` — Action #20: the v3 improvement build (the
    shipped scene here) awaits Hadi's re-judgment; the v2 build
    scored 85/100 with headroom above 95 demanded

Finishing decisions, 2026-10-26 (JOB FINISH-FIELDS-1 — dated
finishing decisions, recorded as such, not backfilled history;
see `metadata.json` for the full values, reasoning and evidence):
  - `delivery_structure` — DECIDED as the delivery structure of
    record, measured off the delivered artifact: mystery-first
    narration over the PLAN timeline (gaps 0.40–0.70 s incl. the
    widened 0.62 s breath before L5), the two mid-line plate cuts
    at measured silences, the slowed L7 close under the bed dip,
    the v3 bed dynamics envelope. No separate pause-map pass was
    ever performed; a future retrofit amends this by a new dated
    decision.
  - `scene_decomposition` — DECIDED as the compartment inventory
    the shipped file itself embodies (plate layer incl. one
    deliberately unused element layer / word layer / container /
    PLAN+CONFIG scene engine / audio / in-page decision layer /
    player chrome); the scene stays one self-contained file.

Onset repair, 2026-10-26 (JOB ONSET-REPAIR-1 — the plan rebuild
this field's fix rode on; see `metadata.json` fields.onset_repairs
for the full evidence record):
  - `onset_repairs` — CLOSED. PLAN phrase-1 window open moved
    1.95 s -> 1.42 s (the first word's spoken onset) and the
    opening-card gate moved with it (1.6 s -> 1.42 s); the
    candidate render was re-rendered from the repaired scene
    (house capture, libx264 CRF 19, the verified clone programme
    audio stream byte-identical), re-probed at word 1's onset
    within probe precision and re-measured at the delivered
    duration/loudness. Package re-verification of the repaired
    bytes rides JOB PACKAGE-VERIFY-6.

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
