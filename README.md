# wo-a — 3.2 Quadrillion Tokens a Month — Google Alone (A · industrial framing)

**This package is PARTIAL, and says so first: its decisions layer is incomplete — the word-decisions layer is ABSENT (0 of 131 words carry a recorded decision), because no per-word decision record exists for this piece anywhere in its records. Everything else in the package is complete and verified as far as its records go; nothing here claims the word layer exists.**

**Stage: assembled package — PARTIAL: decisions layer incomplete (word decisions absent); end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-5) — in-package editability absent, a named gap against the full deliverable criteria (file-level data→render linkage proven through the caption-chunk data the renderer consumes; the scene's plan word objects are carried data, not consumed by the renderer).**

Public: https://youtube.com/shorts/YvMMTOwXeGY — the workshop long-form's opening beat (flagship channel; playlist "Workshop — Beats from the Workshop Video"), published 2026-10-21 as version A of the A/B pair against wo-b (industrial framing). The public video still serves the guide-era render; the render in this package is the verified clone candidate — built, verified, and unpublished.

This branch is the piece's complete production package in the repository's standard shape: metadata (the decision scaffold) → transcript (the delivered text) → decisions (element records + the word-layer absence record) → audio (the candidate's narration, with its Pelican provenance) → scene (the shipped scene, byte-identical) → render (the verified clone candidate + its verification record).

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **decided / total: 22 / 158** across the three layers this package counts:
  - scaffold fields decided: **6 / 11** (metadata.json)
  - element decisions recorded with reasons: **16 / 16** (decisions/decisions.json — the 2026-10-23 context audit's inventory)
  - word decisions recorded with reasons: **0 / 131 — ABSENT** (decisions/word-decisions.json is an absence record: what exists instead, why the layer is absent, and the authoring task)

The denominator carries all 131 delivered words, because a word layer that does not exist must still count against the piece: the package does not shrink its total to hide the gap. The authoring task that would close it is stated in metadata.json (`word_decisions`) and in the absence record — a separate development job on this branch, not part of this assembly.

## Open fields, named (undecided decision fields — a coverage inventory; it does not by itself measure the rendered result)

- **audience** — never decided: the board's phase-0 check "Audience + misconception named" stands pending; the misconception is named in the delivered text itself, but no audience record was ever settled for this beat.
- **delivery_structure** — never decided: no pause map or delivery pass exists; the catalogue decision audit rates the piece's delivery NOT-DECIDED. The delivered bed's continuity is a measurement (carried in render/verification.json), not a delivery decision.
- **scene_decomposition** — standing migration layout rule: the scene ships as the one self-contained file it was delivered as.
- **word_decisions** — LAYER ABSENT (0/131): no per-word record exists; authoring task stated in the field and in decisions/word-decisions.json.
- **transcript_line_divergence** — the governing-text divergence: three texts stand on this piece's record (the tokens verbatim prose, 17 lines / 237 words; the two-futures final script, 18 table lines / 134 claimed; the delivered text, 19 lines / 131 words, which governs this package). Reconciliation is a rebuild-time decision per the kit's own note; the divergence is printed in full in transcript/transcript.md.

## How to play / read it

- **Scene** (`scene/index.html`): the shipped scene, byte-identical — and honest about what it is: a 2026-10-24 backfill that reconstructs the published piece from its production data so the board plays the production file itself (its in-scene DEC block is the backfill's own account; the MP4 was NOT re-rendered from this scene). It plays the guide programme — the published mix is embedded in it, as published. The clone performance is in the audio and render layers.
- **Render** (`render/render.mp4`): the verified clone candidate (56.68 s; −14.69 LUFS / TP −2.01, recorded at build and re-measured 2026-10-26, identical) — Hadi's cloned voice on all 19 delivered lines over the piece's bed. Built but unpublished; the public link above still serves the guide-era render (`files/short-02a-two-futures.mp4` in the goal tree, sha256 `b958fe2d…`, measured for this package at −14.22 LUFS / TP −1.42).
- **Audio** (`audio/narration.m4a`): the candidate's audio stream, copied without re-encode, with the full per-line Pelican record (jobs, takes, fits) in `audio/audio.json`.

## Provenance (index)

- **metadata.json** — scaffold from the piece's records: objectives audit (hidden_files/objectives-2026-10-24/catalogue-objectives.md, WO-A row), context annex (files/short-wo-context-annex.md §A2–§A3), board record (production-state.json pieces[wo-a]), both script docs, the catalogue decision audit.
- **transcript/** — the delivered text from the voice kit (hidden_files/voice-upgrade/kits/wo-a.json) and registry (hidden_files/voice-upgrade/registry.json); `source-script.md` is a byte-identical copy of the tokens script (files/short-wo-a-tokens-script.md, sha256 `59bea5f4…`); the two-futures script is cited by path + sha256 (`efd3a698…`).
- **decisions/** — the 2026-10-23 context audit's element inventory, verbatim (hidden_files/context-audit-2026-10-23/audit.json); the word layer as an absence record.
- **audio/** — batch-3 voice-upgrade records (hidden_files/voice-upgrade/batch-3-results.json; classification-registered.json; registry.json).
- **scene/** — master of record files/short-02a-two-futures-scene.html (sha256 `c1153990…`); the board's served edition hashes differently and is recorded in scene/scene.json — identity does not hold here.
- **render/** — candidate files/wo-a-clone-v1.mp4 (sha256 `ddb78d1f…`); verification record cites the published guide render and the tokens iteration's render by hash.
