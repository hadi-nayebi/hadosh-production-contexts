# WD-01 — locked transcript (6 delivered lines, 101 spoken words, 37 phrases) — with the 7-line divergence carried openly

Text of record for the DELIVERED artifact: the six lines below —
the locked i2 text as the shipped scene speaks it. The scene's
PLAN (`scene/index.html`) and the voice registry kit
(`hidden_files/voice-upgrade/registry.json` pieces[wd-01].lines)
carry the same six lines word for word, and the shipped scene's
own DR-SCRIPT names the locked text "all 6 lines". Timings:
the registry kit (start → window end per line; phrase counts
from the same kit's PLAN extraction — the scene PLAN agrees:
37 phrases, 101 word objects). The final QC confirmed the
delivered close verbatim on the delivered file (T-16 PASS).

Source script document: `transcript/source-script.md`, a byte
copy of `files/short-wd01-token-script.md` (sha256
b5591390166ca47ded01ea1ed1be60756ac4f74623439076d82e1086a37956d1),
carried byte-identical and unedited — including the parts that
diverge from the delivered artifact, below.

## THE DIVERGENCE (script states 7 lines; the delivered scene speaks 6)

The general rule (script governs text, registry governs
timings) meets its exception here, and the exception is the
record. The script doc's draft table states SEVEN lines; the
board transcript (`production-state.json`
pieces[wd-01].transcript) carries the same seven lines
verbatim. The delivered scene speaks SIX. The two unspoken
script lines are:

- Script L6: "And remember directions? A token is the smallest
  piece of text that gets one." — ABSENT from the delivered
  artifact. Nothing in the delivered scene speaks it.
- Script L7: "A token: a chunk of text, counted by machines."
  — not spoken as written; the delivered close (L6 below) is
  its rewrite: "So that's a token: not a word — a chunk of
  text, counted by machines."

The 2026-10-26 reconciliation audit records the absence as
"recorded nowhere before the audit"
(hidden_files/jobs/2026-10-26-package-reconciliation.md,
wd-01 row). Two complicating records stand beside that
finding, cited here and NOT reconciled with it:

1. The script doc's own appended "Iteration i2" note
   (2026-10-22) records a deletion decision for the i2 build:
   the old L6 "DELETED, along with its sphere scene", the old
   L7 "absorbed" into a new L6 with exactly the delivered
   wording — Hadi's critique (the i1 ending dropped
   "directions", a concept this short never builds) and the
   T-16 fix. So a decision record exists, inside the same
   document whose draft table still presents seven lines as
   "the script" and whose table was never updated; the board
   transcript still carries all seven lines today.
2. The shipped scene's DR-SCRIPT calls the locked text
   "Script — all 6 lines … (files/short-wd01-token-script.md,
   i2/i1 text)" — the artifact's own record sides with six.

Which text governs what: the DELIVERED six lines govern the
delivered artifact (this transcript, the audio layer, the
verification layer). The script doc governs the piece's
history and is carried unedited. This package does not repair
the divergence — no record updates the script table or the
board transcript — it ships it as the scaffold's open field
`transcript_line_divergence`.

Counts, each under its own ruler: (1) the script table's
mechanical count: **112 tokens** over 7 lines (per line
5/21/13/23/27/14/9 — including the 2 standalone em-dash
tokens at L2/L4). (2) Spoken words in the delivered artifact:
**101** (per line 5/20/13/22/27/14), the registry kit's and
the scene PLAN's word objects. The arithmetic closes:
112 − 2 dashes − 14 (the directions line) − 9 (script L7)
+ 14 (the delivered L6 rewrite) = 101. (3) The registry's
line texts strip the 2 em dashes the script and the board
transcript carry (L2, L4); the spoken text is identical. The
dashes carry no word objects and — per this piece's own
word-decision container — no word decisions (unlike WD-02,
whose container decided its dashes as DROP-PUNCT entries).
Narration ends at the last window end, 34.658 s; the silent
3.0 s NEXT bridge and the container outro carry the file to
41.998 s (final QC method note: content lines + 3.0 s silent
bridge + outro = 41.998 s).

L1 — start 2.2 s → window end 3.74 s · 5 words · 2 phrases
Quick: what is a token?

L2 — start 3.74 s → window end 8.94 s · 20 words · 7 phrases
Not a word. A token is a chunk of text — sometimes a whole word, often just a piece of one.

L3 — start 8.94 s → window end 12.92 s · 13 words · 5 phrases
The machine doesn't read letters, and it doesn't read words. It reads tokens.

L4 — start 12.92 s → window end 22.84 s · 22 words · 8 phrases
In English, one token is roughly four characters — about three-quarters of a word. Count with me: The. Machine. Reads. Tokens. Five tokens.

L5 — start 22.84 s → window end 30.0 s · 27 words · 10 phrases
Why should you care? Because everything is measured in tokens: what the model reads, what it writes, what you pay, how much it can hold at once.

L6 — start 30.0 s → window end 34.658 s · 14 words · 5 phrases
So that's a token: not a word — a chunk of text, counted by machines.
