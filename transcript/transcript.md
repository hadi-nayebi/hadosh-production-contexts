# lesson1-board — delivered transcript (the text that governs)

**The delivered text governs.** This is the narration the published
build actually speaks — 10 lines / 148 words — taken from the final
script doc (`transcript/source-script.md` in this package, a
byte-identical copy of `files/short-01-agent-harness-final-script.md`,
sha256 `d8264343ff46017729c94e67b5c4b615ea9acd1cb70061fd761f795f181a1c03`),
whose narration table is presented as MEASURED from the rendered
narration (ffprobe per-line + ffmpeg silencedetect at −38 dB, d=0.15
→ 29 speech runs). The doc is titled FINAL (publish standard); its
stated base is "the approved V2 script, kept verbatim".

Timings below are the script doc's measured windows (line start–end
in the delivered file). Two silent cards bracket the narration: the
title card before L1 and the end hold after L10.

| # | Start (s) | End (s) | Words | Line |
|---|---|---|---|---|
| — | 0.00 | 2.20 | — | (music only — title card: YOUR DAILY BITE OF / AGENTIC LITERACY / LESSON 1) |
| 1 | 2.20 | 5.87 | 14 | Your AI model is not your agent. On its own, it's just a brain. |
| 2 | 6.22 | 12.25 | 22 | It can think. But it forgets everything when the chat ends. It can't open your files. It can't check its own work. |
| 3 | 12.60 | 17.23 | 17 | What turns it into an agent is the layer around it. The harness. It has four parts. |
| 4 | 17.53 | 19.59 | 4 | Memory: so it remembers. |
| 5 | 19.73 | 22.49 | 9 | Tools: so it can do things, not just talk. |
| 6 | 22.63 | 25.30 | 8 | Permissions: so it only acts where you say. |
| 7 | 25.44 | 28.72 | 10 | Verification: so it checks its work before calling it done. |
| 8 | 29.22 | 37.17 | 26 | Here's what most people miss. Models come and go. The model is raw intelligence. Every bit of customization, your way of working, lives in the harness. |
| 9 | 37.57 | 44.67 | 23 | And the harness isn't a robot standing apart from you. You wear it, like a second cortex. Your memory. Your rules. Your files. |
| 10 | 45.17 | 50.04 | 15 | That's Augmented intelligence. And because it's yours, it should live with you. Owned by you. |
| — | 50.04 | 52.64 | — | (end hold: finale frame, "OWNED BY YOU." + @letsbuildittogethersp, music fades out) |

Totals: 10 lines · 148 words · narration ends 50.04 s · scene plan
total 52.629 s (render container 52.633 s; contentEnd 52.644 s in
the plan — the three figures are the plan's and the container's own,
stated as measured, no identity claimed beyond them).

Inter-line gaps from the table: 0.35 s as the norm (L1→L2, L2→L3,
L4→L5, L5→L6, L6→L7, L8→L9), 0.30 s before L4, 0.50 s before L8
and before the finale line L10, then the 2.60 s end hold. The
script doc's own header summarises the gaps as "0.35s between
lines, 0.50s before the finale line, 2.60s end hold" — a rounding
of its own table; the table governs, and the summary's imprecision
is carried here rather than silently harmonised. These gaps are
measured build facts, not a decided delivery layer (see the
scaffold field `delivery_structure`).

## The two rulers

- **Spoken words: 148.** The per-line counts above
  (14/22/17/4/9/8/10/26/23/15), counted mechanically at this
  migration from the script doc's verbatim lines.
- **Mechanical whitespace tokens: 148.** The same count by the
  other ruler — this text carries no standalone em-dash tokens, so
  the two rulers agree, unusually for this catalogue.
- **Corroboration:** the shipped scene's plan (`scene/index.html`)
  carries exactly 148 word objects, and their texts match the 10
  lines above token-for-token in sequence (programmatic sequence
  match at this migration: 148/148, no insertions, deletions, or
  substitutions).

Both rulers are stated because this catalogue has been bitten by
silent ruler changes before; every word count in this package says
which ruler it used. One figure in the sources disagrees and is
carried openly: the script doc's closing line ("149 words") and the
upload package's Q2 annex (per-line allocation ending "…16" for
L10) both say **149**. The recount localises the difference to L10,
which has 15 words by either ruler. The package's counts use 148;
the 149 stands in its source documents, flagged here and in
`render/verification.json`.

## Which text governs — a recorded reconciliation (no divergence)

The final script doc governs, and the governing-text question is
closed here (scaffold field `transcript_line_divergence`, DECIDED).
The voice registry holds no competing delivered text for this
piece: its line record is a stub (extraction "none — no delivered
scene", `lines: []`, kit marked out of scope) — stated openly,
because the registry's silence is why the catalogue decision table
labels this piece's line match "UNKNOWN". The sequence match above
is the check that closes it, and its scope is exactly what it says:
the backfill scene's plan words against the script doc's text. The
plan was itself rebuilt from the build's own production data
(captions.ass — 55 timed text events; see `scene/scene.json`), so
the agreement is between the build's caption record and its script
doc, with the published render as their common artefact.

## The pair's other text (a different piece's transcript — NOT this build's)

One further text stands near this piece's record and is named here
only to keep it separate: the Poster version's script
(`files/short-01-agent-harness-poster-script.md` — 8 lines / 127
words, five named pieces, no number stated). It is the transcript
of the pair's OTHER telling, a separate package
(`video/lesson1-poster`). Nothing in it is presented as what this
build speaks; the two-version retrospective in the upload
package's Q2 annex records the tellings as divergent, not as a
controlled form-only A/B.
