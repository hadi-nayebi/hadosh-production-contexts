# WD-01 — "What Is a Token?" (Word Definitions) — REBUILD

**Video package — branch `rebuild/wd-01`.** This branch is the
from-scratch rebuild of wd-01, opened 2026-10-26 under the owner's
rebuild order: every video is remade in a new, empty branch, and the
journey of building this file system — visible in this branch's
commit history, layer by layer — is the deliverable. The MP4 is a
derivative of this file system, produced last.

The first build of this piece (branch `video/wd-01` and the
workspace records behind it) is a **first draft**: evidence to
consult — last, and only for facts, raw material and what to avoid —
never a template and never copied as settled. The owner scored its
video **"10 at most"** (2026-10-26: "absolutely zero style in this
video as an explainer") and replaced its structure outright; what
he faulted was the video — its structure and its style — and that
verdict is this rebuild's reason to exist.

- **Piece:** wd-01 · flagship channel · Word Definitions lane
- **Title:** What Is a Token?
- **Stage:** phase 6 of 7 — audio.

## The idea

Word Definitions defines, one short at a time, the terms the
Academy doctrine runs on. This piece defines **token** — the unit
the machines count. Its structure is the owner's own, directed
2026-10-26: start with something exciting — **the quadrillions of
tokens Google processes every month** — use that number as the
entry into what a token is, explain the token, arrive at "right
now our machines processing language are thinking in tokens — this
many quadrillion tokens a month", and **come back to the number at
the end** (bookend). The figure is sourced: **more than 3.2
quadrillion tokens per month** — Sundar Pichai, Google I/O 2026
keynote; *processed* ≠ unique generated text, carried in the
narration's verb.

## The objective (5–20 words)

> **Teach that a token is the chunk of text a machine counts —
> until the quadrillion makes sense.** (17 words)

## Where the branch stands

- **P1 — metadata: idea + objective.** Objective, message and
  audience decided; the rest of the scaffold OPEN with routes.
- **P2 — architecture + style + question.** Eight moves in the
  owner's bookend; narrative architecture designed (promise /
  motivated transitions / SCALE → UNIT → SCALE arc / recall by
  bookend); style decided (A59 spine + cinematic typography for
  the number + 2D cut). **Scaffold 10/10.**
- **P3 — transcript consolidation.** Candidate A drafted fresh
  from the architecture first; Candidate B weighed second with
  provenance; the delivered text read last as evidence only.
  **Settled: 8 lines / 127 spoken words**; editor pass run;
  pause map sized (1.30 s think beat; 0.90 s suspenses; 1.00 s
  concept shift). The owner's text rule checked: zero
  occurrences of the banned word.
- **P4 — scene.** One self-contained HTML file (1080×1920,
  deterministic `renderAt(t)`, `?edit=1` inspector) authored to
  the compartment prescription: the monument (ghost 3.2 + gold
  QUADRILLION), the question tile inside the receded number, the
  persistent token piece (defined → scanned → riding the
  stream), the public cut of "unhappiness", the performed count
  (five tiles, the fifth the full stop), the stakes grid, the
  stream, the silent bridge. **30 elements**, each with a home
  and a reason in `scene/scene.json`. QA: 16 frames viewed, six
  defects found and fixed (word-gap physics, question-tile
  collision, cut overlap, counter centring, sub-label wrap,
  expansion placement), 9 frames re-shot and verified.
- **P5 — decisions.** Every decision field of the package
  recorded with its reason: generated from the scene's own PLAN,
  **167 fields = 10 scaffold + 30 elements + 127 words (16
  principals)**. The randomness register
  (`decisions/randomness-register.md` at phase 7) names what
  stays open — the owner's ear verdict above all.

## Coverage (computed from this package — counts of recorded decisions with reasons, not observed alignment)

Rulers (fixed at phase 1): **decision fields = 10 metadata
scaffold fields + the scene's elements + the settled transcript's
spoken words** (spoken-word ruler: whitespace tokens excluding
standalone em-dash tokens).

- **At this phase: 167 / 167 decision fields decided**
  (10 scaffold + 30 elements + 127 words, 16 of them
  principals) — computed, not asserted: the word count is the
  settled transcript's spoken words, the element count is the
  scene record's, and coverage closes only when every field
  carries a recorded reason.
- **P6 — audio.** Decided line by line: five lines passed the
  cryptographic reuse test (settled text byte-identical to a
  verifier-passed take's requested text; the take files hash to
  the source job's records) — L1, L3, L4, L7, L8. Three lines
  synthesized fresh in one registered-mode job (seed 7101):
  L2 (the rewritten question), L6 (the restored "at once") and
  L5 — the count, whose earlier audio never qualified; its
  take 1 passed at ASR 1.0, no ICL needed, so all eight lines
  carry the one registered voice character. Every line fits at
  atempo 1.000. Programme over the piece's own continuous bed,
  mastered to **−14.45 LUFS / TP −1.40 dBTP** (the delivered MP4 measures −14.47 / −1.28 — phase 7)
  (`audio/audio.json` carries the proofs and the chain).
- **Open, named:** the render (phase 7) and the register's
  open items (the owner's ear verdict first).
