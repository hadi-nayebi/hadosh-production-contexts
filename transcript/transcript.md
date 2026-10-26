# dir-01 — delivered transcript (the text that governs)

**The delivered text governs.** This is the narration the delivered
i2 build actually speaks — 7 lines / 96 spoken words — extracted
from the shipped scene's plan (`scene/index.html`; the voice-upgrade
kit's extraction) and carried in the voice registry
(`hidden_files/voice-upgrade/registry.json` pieces[dir-01].lines).
Timings are the registry's line windows: start = the line's
phrase-window open / guide-voice onset; guide end = where the guide
narration's voice falls silent inside the window (the registry's
basis: the line's last phrase end — word ends are not recorded in
this scene family); window end = the next line's start (L7: the
content end).

| # | Start (s) | Guide end (s) | Window end (s) | Words | Line |
|---|---|---|---|---|---|
| 1 | 2.20 | 3.78 | 4.48 | 3 | One word: bank. |
| 2 | 4.48 | 9.86 | 10.76 | 19 | By itself, it points nowhere. It could be the edge of a river — or the place your money sleeps. |
| 3 | 10.76 | 14.38 | 15.38 | 10 | Now watch what context does. The river flooded the bank. |
| 4 | 15.38 | 21.58 | 22.60 | 19 | River got there first — and it pulls bank toward the water, toward the land's edge. Same word. New direction. |
| 5 | 22.60 | 25.08 | 25.82 | 9 | Reset it. I deposited my paycheck at the bank. |
| 6 | 25.82 | 32.00 | 32.82 | 16 | Paycheck pulls the other way — toward buildings, toward money. The word didn't change. Its direction did. |
| 7 | 32.82 | 38.30 | 38.30 | 20 | That's how the machine holds meaning: every word is a direction, and the words before it set where it points. |

Totals: 7 lines · 96 spoken words · content ends 38.30 s · scene
plan total 44.032 s (render container 44.033 s).

## The two rulers

- **Spoken words: 96.** The registry's per-line word counts
  (3/19/10/19/9/16/20) sum to 96 — the same 96 the i2 alignment
  verified word by word (96/96 paired, 0 repairs; upload package QC).
- **Mechanical whitespace tokens: 99.** Counted at this migration
  (2026-10-26) over the same 7 texts: 3/20/10/20/9/17/20. The
  difference is exactly 3 — the standalone em-dash tokens on L2,
  L4 and L6, which the spoken count does not pronounce as words.
Both rulers are stated because this catalogue has been bitten by
silent ruler changes before; every word count in this package says
which ruler it used.

## Which text governs — a recorded reconciliation (no divergence)

The delivered build's script doc (`transcript/source-script.md` in
this package — a byte-identical copy of
`files/short-dir01-bank-script.md`, sha256
`83bdd02751ad67f7cda59aa7858ad9c68d88995423bed5226b8b62f6ded3cda3`)
locks the 7 lines ("Script (locked for i1)"), and its iteration log
records that i2 changed the DELIVERY only: "Hadi's verdict on i1
was delivery-side, so the script is UNCHANGED". Verified at this
migration: the registry's extraction of the shipped scene's plan
matches the locked table verbatim on all 7 lines. **The delivered
text IS the locked script** — the governing-text question that
stands open on other pieces is closed here, and `metadata.json`
carries it as the decided field `transcript_line_divergence`.

## The rebuild texts (a decided supersession — NOT this build's transcript)

Two further texts stand on this piece's record. They are not a
divergence of the governing text; they are the decided script of
the piece's NEXT build, and they are never presented as what the
delivered i2 speaks:

1. **The rebuild draft** — `files/short-dir01-rebuild-script.md`
   (sha256 `a606913390802a0369c12222dd334d42857eca619da7e62c5144364de3bb8b1c`;
   Job DIR-SCRIPT, 2026-10-24): 9 lines / 136 words, written
   against STRUCT-2's REBUILD verdict — a new opening question, an
   orientation line, the double swing (S-11), the naming of
   attention, a spoken end referral to WS01. Its design block,
   per-beat visual spec, pull-strength grammar, Decision Records
   and Section HS record stand in that file.
2. **The v2 editor pass** — `files/short-dir01-rebuild-script-v2.md`
   (sha256 `c59f9608ef8ae40a32a39989b90c452fff190d3a4fc737b2cd3b84a04190db90`):
   the same 136 content words, not one added, cut or moved; what
   v2 adds is the decided DELIVERY layer (pause map: 8 inter-line
   gaps totalling 8,400 ms + OPEN 1,400 ms + END 1,000 ms + 4
   intra-line beats; per-line intonation intent; navigation
   11/136 = 8.1%). Editor Simulation #2: PASS, delivery ≈ 76/100.

The scaffold field `rebuild_script` carries the decision (the
converted Action #53). When the rebuild is built, this transcript
layer is superseded by the rebuilt build's delivered text and the
voice kit is re-extracted first (the registry's standing note).
