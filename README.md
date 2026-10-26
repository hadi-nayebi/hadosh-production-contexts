# dir-01 — "One Word, Two Directions" (Direction Series)

**Stage: assembled package — PARTIAL (word decisions absent; element decisions complete): metadata + delivered transcript + decision records + delivered guide-voice audio + shipped scene + delivered render in branch.** Package verification has not been run on this branch and is not claimed.

This branch is one video's complete production package, in the repository's standard shape. The package describes the piece as it stands — and this piece stands in **two states at once**, which the package keeps strictly separate:

- **A DELIVERED build** — the i2 word-animation rebuild (2026-10-23): 7 lines / 96 spoken words in the **guide voice**, one evolving semantic map, the locked script unchanged from i1. It passed the Oneness/Qualifying audit after four recorded fixes — and was then **rejected for publication by the owner** (Action #16, 2026-10-24: NOT approved — story structure too weak; the trio does not publish). The Studio draft of it is stale. It is not published.
- **A DECIDED rebuild, not built** — the v2 rebuild script (9 lines / 136 words): Stage-1 content from the 2026-10-24 rebuild draft (written against STRUCT-2's REBUILD verdict), Stage-2 delivery from its editor pass (pause map, intonation intents; Simulation #2 PASS). It rides the scaffold as the field `rebuild_script` — the converted Action #53 — and nothing about it is presented as a property of the delivered build.

Its objective is the catalogue's strongest-grounded: Hadi's own wording (objectives audit, DIR-01 row): **"Visually show attention: context adjusts a word's direction, and the model learns how much each word pulls."** The same audit grades the delivered i2 **MISALIGNED** against it — pull strength is narrated, never shown; the rebuild exists to answer that. The piece's role: the Direction Series' APPLY step, Doorway funnel entry, playlist "Workshop — Beats from the Workshop Video" (flagship channel).

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

Scaffold fields 8/15 decided · element decisions 17/17 recorded with reasons · word decisions 0/96 (layer absent — named, not padded) · **total 25/128**.

## Open fields, named (undecided decision fields — a coverage inventory, not an alignment score)

- **`audience`** — never decided; the board's phase-0 check stands pending and no record names this piece's audience. Deciding one from silence is not done here.
- **`hook_form`** — never decided for the delivered build: STRUCT-2 scores H1 and H2 RANDOM-ABSENT — L1 announces a topic; the slate assigned the form before the piece existed. (The rebuild's question-format hook is decided inside `rebuild_script`.)
- **`orientation_line`** — STRUCT-2 H3 = R: no orientation line in the delivered 7 lines; the container header is a label, not an orientation. (The rebuild supplies one, in its L2.)
- **`delivery_structure`** — no pause map ever priced the delivered build's joints; its silences are build defaults. The decided delivery layer exists only for the rebuild text (the v2 pause map) and rides in `rebuild_script`.
- **`end_referral`** — the records conflict: STRUCT-2 scores H6 RANDOM-ABSENT ("not in lines, end card, or packaging"), while the upload package's description carries the WS01 route line with a literal unresolved placeholder (`[WS01 v2 public link]`). Carried as a conflict, not resolved.
- **`scene_decomposition`** — the scene ships as the one self-contained file it was delivered as; splitting it is a future, separately recorded decision (the standing layout-rule open).
- **`word_decisions`** — **LAYER ABSENT (0/96).** No per-word decision record exists for this piece anywhere. `decisions/word-decisions.json` is an absence record: what exists instead (the scene plan's 96 word objects — timings and display parameters; the 96/96 alignment verification; the script doc's per-line intent table; the board's Tier-2 instance record, 189/225), why the layer is absent, and the authoring task — which is sequenced with the rebuild, not against the superseded i2.

Decided fields whose decisions are **negative or held, recorded so they are never read as oversights**: `publish_verdict` (do not publish the i2; the question re-opens on the rebuilt piece), `voice_state` (GUIDE delivered; clone HELD behind the rebuild — re-kit first, then generate), `transcript_line_divergence` (decided as a reconciliation: the delivered text IS the locked script, verified line by line at assembly; 96 spoken words / 99 mechanical tokens, the difference being exactly 3 standalone em dashes), and `rebuild_script` (the converted #53, decided with its editor-pass record).

## The voice (audio layer)

GUIDE. `audio/narration.m4a` is a stream copy of the delivered render's own audio — guide narration over the continuous bed (−14.03 LUFS / TP −1.48; bed continuous, measured). There is **no Pelican job for this piece** and no clone candidate: generating onto a build the owner has rejected would voice the wrong artefact, and the registry's sequence is recorded — rebuild, re-kit, generate. (Ledger §5 entry #7 is the class context: guide voice counts as final-for-now; its timing was superseded by the 2026-10-25 clone mandate, which lands on this piece at its rebuild gate.)

## The scene and the render

The scene (`scene/index.html`, sha256 `ce4dfdcd…`) is a **2026-10-24 backfill** (JOB BOARD-SCENES-BACKFILL), stated in its own first decision record: rebuilt from the piece's production data — script lines, whisper-aligned word times, and frames sampled from the finished render, because the piece's visuals are code-drawn animation with no static plates. **The MP4 was not re-rendered from it.** The board's served edition (`e715d6dd…`) does not byte-match the master; both hashes are recorded in `scene/scene.json`.

The render (`render/render.mp4`, sha256 `50aec58a…`, 44.033 s, 1080×1920) is the delivered i2 final master — after the Oneness fixes (cover rebuilt; ghost-label collision fixed; mono→stereo re-master). The upload package's earlier QC figures (−14.41 / TP −1.14) describe the pre-fix master of the same build; both are kept with their file states in `render/verification.json`, which also carries the board checklist as counted at assembly (27 items: 19 pass · 7 pending · 1 fail — the fail is the stale Studio draft), the three voice stamps' null state (nothing asserts a clone here), and the tensions carried openly, including the board's unattributed third YouTube ID and the Oneness Q-c renderer discrepancy (reported, judged not a defect).

## How to read this package

`metadata.json` is the living scaffold — every field carries `{value, rationale, source, status, record}`; a null value with status OPEN is an honest gap, and the record field says why, in its own kind. `transcript/transcript.md` prints the delivered text with its timings and both word-count rulers, and says which text governs and why. `decisions/decisions.json` carries the 17 element records verbatim from the context audit plus the provenance of the whole layer. Nothing in this package was invented at assembly: every figure was measured or checked against its artefact, and the assembly's own checks (hash agreement, line-by-line transcript identity, checklist counts) are recorded where they were run.
