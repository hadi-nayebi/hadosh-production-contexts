# lesson1-poster — delivered transcript (the text that governs)

**The delivered text governs.** This is the narration the published
build actually speaks — 8 lines / 127 words — locked in the piece's
script doc (`transcript/source-script.md` in this package, a
byte-identical copy of `files/short-01-agent-harness-poster-script.md`,
sha256 `a96d6f80ac0f7cac7fe9bad77a2340cbc83f9c1756743eccc2758a5412626456`)
and verified word-for-word against the shipped scene's plan at this
migration (see the reconciliation below). Timings are the script
doc's MEASURED timing map (ffprobe + ffmpeg silencedetect @ −38 dB,
d=0.15): start = the line's first speech-run start; end = its last
speech-run end. The narration track is 47.396 s in total, with a
2.20 s intro hold and a 2.60 s end hold; 25 measured speech runs
underlie the 8 lines.

| # | Start (s) | End (s) | Words | Line |
|---|---|---|---|---|
| 1 | 2.364 | 6.924 | 18 | Look at this picture. On the left, a mind made of glowing pieces, standing apart from the person. |
| 2 | 7.830 | 12.709 | 15 | On the right, the same pieces, worn like a helmet. Same material. Two different futures. |
| 3 | 13.581 | 17.048 | 11 | Nothing is added. Nothing is taken away. Only the arrangement changes. |
| 4 | 17.920 | 22.260 | 16 | The pieces are an AI model, plus its instructions, its memory, its files, and its tools. |
| 5 | 23.262 | 27.751 | 15 | Built one way, they stand apart from you: powerful, generic, and owned by someone else. |
| 6 | 28.631 | 33.632 | 19 | Built the other way, they wrap around you: a second cortex that keeps your memory, your rules, your files. |
| 7 | 34.650 | 38.227 | 15 | The model is just raw intelligence. The harness is where your way of working lives. |
| 8 | 39.227 | 44.479 | 18 | So don't just use the mind standing apart. Wear the one that's built around you. Own your harness. |

Totals: 8 lines · 127 words · last speech ends 44.479 s · narration
track 47.396 s · render container 47.400 s.

Component beats inside line 4 (word-proportional within runs, from
the script doc's map): **MODEL 18.85 · INSTRUCTIONS 19.92 · MEMORY
20.52 · FILES 21.24 · TOOLS 22.01** — the worn-build panel lights
each piece exactly on its word.

## The two rulers

- **Spoken words: 127.** The script doc's own count ("Narration
  (127 words, 8 lines)"), confirmed at this migration by the
  shipped scene's plan: its 127 word objects, read in order,
  reproduce the 8 lines exactly (see below). Per line:
  18/15/11/16/15/19/15/18.
- **Mechanical whitespace tokens: 127.** Counted at this migration
  over the same 8 texts: 18/15/11/16/15/19/15/18 — the upload
  package Q2 annex's mechanical count agrees line for line.
The two rulers COINCIDE for this text: it carries no standalone
punctuation tokens (no free-standing em dashes of the kind that
separate the rulers in the DIR trio's scripts). Both rulers are
stated because this catalogue has been bitten by silent ruler
changes before; every word count in this package says which ruler
it used — here, either gives 127.

## Which text governs — a recorded reconciliation (no divergence)

The script doc is the piece's Final Script: the board record's
'Script locked' check stands PASS, and the upload package records
the doc as the published version. This migration ran the check the
voice programme never ran for this piece (its registry entry has
no extraction — "none — no delivered scene"): the shipped scene's
plan, rebuilt by the 2026-10-24 backfill from the build's own
captions data (`hidden_files/short01-poster/captions.ass`), holds
127 word objects in 48 phrases; read in order they reproduce the
script doc's 8 lines **word for word** (case-insensitive
comparison — 30 key words are uppercased in the plan for display,
the build's amber key-word styling, and are the same words). The
catalogue decision table independently records "MATCH on words —
plan 127 words = scene 127 words". There is one text, and it is
the delivered one. The scaffold field `transcript_line_divergence`
is DECIDED on this reconciliation.

## One wording matter, carried openly

The board record attaches a check to this piece — "Canon note:
says 'four parts'" (pending, with the standing-rule evidence
"published Lesson 1 is never re-edited; bridged by expansion in
Lesson 3"). **This piece's text states no number at all:** L4
names five pieces, and the word "four" occurs zero times in the
entire script doc (verified by search at this migration). The
'four parts' wording is the BOARD telling's (objectives audit,
Board row: L3 "It has four parts" — memory, tools, permissions,
verification); the pair-level canon matter is governed by the
K-01 bridge rule. The discrepancy is recorded in full in
`decisions/decisions.json` (provenance) and
`render/verification.json` (tensions); the board's check is
carried exactly as it stands, and no source was edited.
