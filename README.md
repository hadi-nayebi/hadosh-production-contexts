# vocab-v3 — "I Drink Water in 5 Languages" (Earth One — Vocabulary Packs)

**Stage: assembled package — PARTIAL (word decisions absent; element decisions 14/15). All six layers are in; package verification has NOT been run on this branch.**

This branch is one video's complete production package, in the repository's standard shape (metadata → transcript → decisions → audio → scene → render). The piece: Earth One's vocabulary drill — one simple sentence ("I drink water") in five languages, spoken twice — published at https://youtube.com/shorts/xX4-60ily0Y by Hadi's direct instruction on 2026-10-22, which also named it a standard-setting floor piece for the lane. The design viewer is Hadi's mother (70, a Turkish and Persian speaker learning English, German and French); the lane's pronunciation gate is Hadi's ear.

**This package is partial by design, and says so from its first layer.** Three honest states ride the package itself:

- **The decisions layer is incomplete at the word level.** The element level is nearly complete (14/15 — context audit, 2026-10-23; the one random element is the published description's unwritten rationale, gated on Action #41) but **no per-word decision record exists for this piece anywhere**: the word layer ships as a named absence (0/30) with its authoring task stated. The build's decisional grain is the sentence line and the target word; authoring word decisions is new decision work, and this migration does not author them.
- **Two versions travel under this piece, and the package keeps them apart.** The DELIVERED build — the v3 sentence build (one sentence × five languages × two passes, PIL-composited, 27.348 s) — is the piece this package assembles: its transcript, its audio, its render. The v1 PILOT (one word × five languages, 15.400 s) was published once, rejected by Hadi within the hour and pulled to Private; it survives as the earlier version. Several standing records conflate the two, and the package carries the conflation openly wherever it touches: the scene this package ships is a backfill OF THE PILOT (the sentence build has no HTML scene — it predates the scene law and was PIL-rendered; the board serves the pilot's scene for this piece), the voice registry's kit row cites the pilot's file and its five single words, and the catalogue decision table's loudness column and delivered-file hash check for "vocab-v3" are the pilot's. Every figure in this package is attached to its own file — both builds were re-measured at assembly — and nothing is corrected at source.
- **The voice is GUIDE, and the clone upgrade is HELD.** Not declined, not in flight: HELD on Hadi's separate decision — whether the English clone voice speaks the non-English words is his call (voice registry, §vocab-v3). The registry's stated basis ("5 single-word pronunciations") describes the pilot's audio; the published build speaks 10 sentence pronunciations. The hold's substance is unaffected and is recorded as the decided field `voice_state`. No Pelican job exists for this piece.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

Scaffold fields 9/15 decided · element decisions 14/15 recorded with reasons · word decisions 0/30 (layer absent — named, not padded) · **total 23/60**.

Open fields, named (undecided decision fields — a coverage inventory, not an alignment score):

- `hook_form` — the opening is decided-by-foreclosure at format level (STRUCT-2 H1), but hook mechanics were never recorded as design (H2 weak), and the title's rationale stands as a labeled reconstruction.
- `delivery_structure` — no delivery layer was ever priced (the build's joints are construction constants), and the pacing question stands unresolved: spec ~3.5 s per language vs delivered slots of 1.83–2.24 s — mismatch M3, board Action #40 (this piece's primary request): re-time, or amend the spec with the reason written.
- `end_referral` — the end card teases the next word and the description names the series, but no onward-referral decision beyond pack cards was ever recorded (STRUCT-2 H6 weak).
- `scene_decomposition` — the standing catalogue open, sharpened here: the shipped scene belongs to the earlier version, and the published build's panels were never decomposed.
- `word_decisions` — layer absent (0/30); see `decisions/word-decisions.json` for what exists instead and the authoring task.
- `packaging_verdict` — board Action #41: approve a standard lane packaging set (cover, description, tags, pinned comment)? The description's text is recovered and on record; its rationale — the audit's one random element — waits on this verdict.

## The layers

- `metadata.json` — the decision scaffold: 15 fields, each with its reason and its record. Objective FIRST (GROUNDED by the catalogue objectives audit; its alignment grade Partial, carried — the pacing short-changes the repeat the objective promises). `publish_verdict` DECIDED affirmative-and-standing (published by the owner's direct instruction; the lane's later demotion gates future pieces, not this artefact).
- `transcript/` — the delivered text (the five sentences × two passes, with the build's timings and both word rulers — they coincide at 30), the governing records beside it: the lane format spec (`source-script.md`, the document the board links as this piece's script record — there is no per-piece script document, and the reconciliation in `transcript.md` shows why none is needed) and the piece's context annex (`context-annex.md` — the title record and the Studio-recovered description).
- `decisions/` — the context audit's 15 element records verbatim (14 with rationale, 1 random) and the word layer's absence record. `accepted_exceptions` is EMPTY: ledger §5 was read directly in the departments repo; no entry names this piece or its lane.
- `audio/` — the delivered programme audio (AAC mono stream copy of the published render) with its 10 spoken lines keyed to the build's timings; the bed state is NONE — by format decision; the registry-kit discrepancy is recorded in the layer, not smoothed over.
- `scene/` — the board-linked scene, byte-identical, with its provenance stated in terms: a 2026-10-24 backfill of the v1 pilot. Its plan holds the pilot's five words; its embedded audio is the pilot's own track. The published build's scene does not exist and none is fabricated.
- `render/` — the published sentence-build render, in-branch, with assembly-time measurements: 27.348 s, −14.25 LUFS / TP −1.47 / LRA 3.10 (exact against the board checklist's QC item and the job file), and the tensions carried openly — the two-build conflation itemized, the pacing fork, the description rationale, the two build scripts writing one output, the mono measurement.

## How to read this package

Start with `metadata.json` for what is decided and what is open, then `transcript/transcript.md` for what the piece says and how its text is known. Where a number appears twice in the wider record with different values (loudness, duration, line counts), the difference is almost always the two builds — `render/verification.json`'s tensions list says which figure belongs to which file. Nothing in this package claims package verification; that round runs against the branch bytes after assembly, as with every package in the catalogue.
