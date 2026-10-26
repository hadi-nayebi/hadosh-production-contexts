# WD-02 — "What Is a Prompt?" (Word Definitions)

**Video package — branch `video/wd-02`.** This file system IS the
video's production layer: it ships with the video (the published
description links this branch), and this branch's commit history is
the video's development history, in developmental order. The MP4 is
a derivative export of this package.

- **Piece:** wd-02 · flagship channel · Word Definitions
- **Title:** What Is a Prompt?
- **Stage:** assembled package; end-to-end checks 1–6 verified 2026-10-26 (JOB PACKAGE-VERIFY-3) — in-package editability absent, a named gap against the full deliverable criteria — CLONE-VERIFIED candidate audio, delivered transcript (NOT established — owner verdict 2026-10-26, see below), shipped scene (the v1 build, from script v3), verified clone render in-branch. The piece itself sits at board
  stage qc, unpublished. REDEVELOPMENT OPENED 2026-10-26: on the owner's own definition of prompt (direction, accumulated — see the Redevelopment section below), a new transcript draft and a draft clone take are in-branch as a PROPOSAL awaiting his verdict (`transcript/redevelopment-draft-2026-10-26.md`; `audio/draft-take-2026-10-26.mp3`); the shipped scene and render still speak the rejected text, and no rebuild is authorized until he accepts a transcript.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

- **Decided / total decision fields: 193 / 196**
  - metadata scaffold: 9 / 12 fields decided (`metadata.json`)
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
  - `message` — reopened by the owner's 2026-10-26 verdict (the
    delivered definition is rejected as content); a replacement
    essence is PROPOSED in the redevelopment draft, built on his
    own definition — the field closes only when he accepts a
    transcript for this piece
  - Closed 2026-10-26 by the owner's own definition (no longer
    open): `prompt_instructions_canon` — the canon meaning of
    'prompt' is settled (direction + accumulation; the
    prompt↔Instructions boundary is recorded unsettled inside the
    field and is no longer load-bearing); `direction_wording` —
    'direction' is the structural sense and is the piece's
    concept (DR-3's provisional restriction and the 'course'
    swap path are superseded)

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
- **The redevelopment draft take:** `audio/draft-take-2026-10-26.mp3`
  — Hadi's clone reading the PROPOSED 2026-10-26 transcript
  (draft, for transcript judgment at his ear; record in
  `audio/draft-take-2026-10-26.json`). Not the piece's programme
  audio; no fit construction against any scene.
- **The render:** `render/render.mp4` — the CLONE-VERIFIED
  candidate itself, copied in-branch (2,883,604 B), with its
  measurements in `render/verification.json`. The delivered
  guide-voice render is cited there by hash.

## Provenance index

| Path | What it is | Source of record |
|---|---|---|
| `metadata.json` | Decision scaffold (objective → hook → structure → open fields) | the piece's script docs (Phase 0 / Narrative Gate / HS record / DR-1–DR-3) + catalogue objectives audit + board record + board ask req-wd02-prompt-canon (per-field citations inside) |
| `transcript/` | Locked final transcript + its source script document, plus the 2026-10-26 redevelopment draft (proposed replacement, awaiting the owner's verdict) | script v3 governs text; voice registry timings; board transcript agrees line for line (the 117/116/115 count reconciliation is noted inside) |
| `decisions/` | Element decision records + per-word decisions | the shipped scene's own DEC block (11 records) + its standalone word-decision container (117 entries), extracted verbatim |
| `audio/` | Clone candidate programme audio + provenance, plus the redevelopment draft take + its record (2026-10-26) | Pelican jobs (registered + L1 ICL) + the CLONE-VERIFIED registry entry + batch-1 take/fit records + the WD level-rule rebuild |
| `scene/` | The shipped scene (v1 build), byte-identical + provenance | `files/short-wd02-prompt-v1-scene.html` (sha256 in `scene/scene.json`; board edition hash recorded beside it — the edition's bytes differ) |
| `render/` | The verified clone render in-branch + verification measurements | `files/wd-02-clone-v1.mp4` (CLONE-VERIFIED); delivered guide render `files/short-wd02-prompt-v1.mp4` cited by hash |

## Owner verdict (Hadi, 2026-10-26 — supersedes the transcript's settled status)

- **Action #78 — style direction: Variant B.** Judging the exp-01 specimens (lines 1–3), Hadi picked the A59-grammar treatment: "more artistic" than the shipped family. The direction is adopted for this lane; the experiment record carries the verdict.
- **The transcript is NOT established.** In his words, the transcript "is not very useful… this is not how I would describe what prompt is." The delivered text's definition is rejected as content; redevelopment of the transcript comes before any further build on this piece. This package's "locked/delivered transcript" wording records PROVENANCE (which text the shipped artifacts speak), not owner acceptance. The scaffold's `message` field is reopened accordingly (coverage below).
- **Ear verdict on the clone render:** the lines 1–3 segment mixes voice character — it starts in one voice and shifts (the ICL-regenerated line audibly differs from the registered-voice takes) — and the clone reads "very unenergetic and very monotonic." The CLONE-VERIFIED stamp certifies the fit/verification standard (words, fit, loudness), not vocal consistency or energy; both defects are recorded here as owner findings. His direction: a better-developed transcript is what generates better audio with better intonation.
- **Priority:** this piece is parked by the same ruling — effort goes to the more developed videos first.

## Redevelopment (opened 2026-10-26 — the owner's own definition)

Judging this piece's card, the owner supplied the definition the
redevelopment was parked for. Substance, in his framing: connect
prompt to the concept of **direction** — a prompt has a direction;
as the context is produced by the agent, continued and compacted,
prompting is giving **new directions**, and the intermediate
prompts shift the context in a particular direction; a prompt does
not happen just at the beginning, it **accumulates** across the
job; capture a session's prompts into a chained / end summary — a
chain summary — and you hold a **mega prompt**, the accumulated
directions. His words: "the prompt is not just one sentence, but
it's all the directions that the user tries to re-steer the
context in a different direction — that's more close to what I
would describe prompt."

What this round did (JOB WD02-REDEVELOP-1, staging for commit):
- A new transcript draft built on that framing —
  `transcript/redevelopment-draft-2026-10-26.md` (8 lines, 128
  spoken words, editor-passed, with a proposed pause map). It is
  a PROPOSAL: `message` stays OPEN until the owner accepts a
  transcript.
- A draft clone take of the proposed text for his ear
  (`audio/draft-take-2026-10-26.mp3`) — registered-mode takes
  throughout, so the take carries one voice character (his ear
  finding on the superseded render was an ICL line shifting
  character mid-piece).
- The two canon flags open since 2026-10-23 are resolved in
  `metadata.json` as stated in the coverage section above.
- The shipped scene/render and the delivered guide/clone audio
  are untouched: they still speak the rejected text, and they
  stand as its provenance until an accepted transcript authorizes
  a rebuild.
