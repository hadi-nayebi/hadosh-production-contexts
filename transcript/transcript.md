# dir-03 — delivered transcript (the text that governs)

**The delivered text governs.** This is the narration the delivered
i1 build actually speaks — 7 lines / 79 spoken words — extracted
from the shipped scene's plan (`scene/index.html`; the voice-upgrade
kit's extraction) and carried in the voice registry
(`hidden_files/voice-upgrade/registry.json` pieces[dir-03].lines).
Timings are the registry's line windows: start = the line's
phrase-window open / guide-voice onset; guide end = where the guide
narration's voice falls silent inside the window (the registry's
basis: the line's last phrase end — word ends are not recorded in
this scene family); window end = the next line's start (L7: the
content end).

| # | Start (s) | Guide end (s) | Window end (s) | Words | Line |
|---|---|---|---|---|---|
| 1 | 2.20 | 5.66 | 6.60 | 13 | A word is just a label. You can't do math with a label. |
| 2 | 6.60 | 11.96 | 12.96 | 16 | But for the machine, every word is a direction. King points one way. Man points another. |
| 3 | 12.96 | 15.58 | 16.64 | 10 | So do the math. Start with the direction of king. |
| 4 | 16.64 | 19.60 | 20.50 | 10 | Subtract the direction of man. Add the direction of woman. |
| 5 | 20.50 | 23.62 | 24.56 | 7 | The arrow lands — almost exactly — on queen. |
| 6 | 24.56 | 28.58 | 29.44 | 14 | Nobody programmed that answer. The directions learned it from the company the words keep. |
| 7 | 29.44 | 32.80 | 32.80 | 9 | Meaning you can add and subtract. Directions do arithmetic. |

Totals: 7 lines · 79 spoken words · content ends 32.80 s · scene
plan total 39.70 s (render container 39.700 s).

## The two rulers

- **Spoken words: 79.** The registry's per-line word counts
  (13/16/10/10/7/14/9) sum to 79 — the same 79 the i1 alignment
  verified word by word (79/79 paired, 0 repairs; script doc QC,
  re-verified in the Oneness audit Q-b, mean |Δ| 0.018 s).
- **Mechanical whitespace tokens: 81.** Counted at this migration
  (2026-10-26) over the same 7 texts: 13/16/10/10/9/14/9. The
  difference is exactly 2 — the standalone em-dash tokens on L5,
  which the spoken count does not pronounce as words.
Both rulers are stated because this catalogue has been bitten by
silent ruler changes before; every word count in this package says
which ruler it used.

## Which text governs — a recorded reconciliation (no divergence)

The delivered build's script doc (`transcript/source-script.md` in
this package — a byte-identical copy of
`files/short-dir03-arithmetic-script.md`, sha256
`12419c70f8530d8599734840a5ba8877c55e3b143bc0d95838b9a3f46fe182b9`)
locks the 7 lines ("Script (locked for i1)"). dir-03 has exactly
one build — i1; the Oneness audit's fix was audio-only (a stereo
re-master; the picture is byte-identical pre/post fix, and no word
changed). Verified at this migration: the registry's extraction of
the shipped scene's plan matches the locked table verbatim on all
7 lines. **The delivered text IS the locked script** — the
governing-text question that stands open on other pieces is closed
here, and `metadata.json` carries it as the decided field
`transcript_line_divergence`.

## The rebuild texts (a decided supersession — NOT this build's transcript)

Two further texts stand on this piece's record. They are not a
divergence of the governing text; they are the decided script of
the piece's NEXT build, and they are never presented as what the
delivered i1 speaks:

1. **The rebuild draft** — `files/short-dir03-rebuild-script.md`
   (sha256 `6ba977ce247795e0a4b9858b2ed32d250cd56b63f41a2dd6d2a5fd75d5c905dd`;
   Job DIR23-SCRIPTS, 2026-10-24): 8 lines / 88 words, written
   against STRUCT-2's REWORK verdict — the misconception-first
   opening recorded at piece level, an orientation line (L2), the
   live construction under a bet (S-11), the algebra grammar
   (free vectors; pull-strength deliberately unused), the real
   TensorFlow Embedding Projector plate at L6 (DR-EVIDENCE), a
   spoken back-referral to WS01 (L8). Its design block, per-beat
   visual spec, Decision Records and Section HS record stand in
   that file.
2. **The v2 editor pass** — `files/short-dir03-rebuild-script-v2.md`
   (sha256 `24d745b8d1ccc47dbb8998e133eb8124d94f56a83851e4c1749d7130d18462f7`):
   the same 88 content words, not one added, cut or moved; what
   v2 adds is the decided DELIVERY layer (pause map: 7 inter-line
   gaps totalling 6,300 ms + OPEN 1,400 ms + END 1,000 ms +
   intra-line beats, including the 500 ms operation beat inside
   L4 and L1 marked deliberately flat; per-line intonation
   intent; navigation 12/88 = 13.6%, carried as content note
   CN-1). Editor Simulation #2: PASS, delivery ≈ 78/100.

The scaffold field `rebuild_script` carries the decision (the
converted Action #53). When the rebuild is built, this transcript
layer is superseded by the rebuilt build's delivered text and the
voice kit is re-extracted first (the registry's standing note).
