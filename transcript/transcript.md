# obs-01-a — delivered transcript (the text that governs)

**The delivered text governs.** This is the narration the delivered
build actually speaks — 6 lines / 75 spoken words — locked at Phase 1
on 2026-10-21 and performed unchanged by the build. Timings are the
shipped scene plan's phrase windows (`scene/index.html`, parsed at
this migration): start = the phrase window's open, which is also the
line's first word's spoken onset (the plan's construction sets them
equal on all 6 phrases); end = the phrase window's close. The voice
registry built no kit for this piece (its scope is out of the clone
sprint), so the scene plan is the timing record; the gaps between
windows reproduce the build's recorded GAPS exactly (see below).

| # | Start (s) | End (s) | Spoken | Mech. | Line |
|---|---|---|---|---|---|
| 1 | 2.550 | 6.783 | 10 | 12 | Before books — before stone carvings — something was already keeping records. |
| 2 | 7.183 | 9.669 | 5 | 5 | Not paper. Not stone. Bodies. |
| 3 | 10.219 | 16.175 | 23 | 25 | A pattern that worked — a shape, a colour, a way to hide, a way to hunt — was never written down. It was copied. |
| 4 | 16.575 | 18.721 | 10 | 10 | Every new generation was a fresh copy of the archive. |
| 5 | 19.121 | 23.980 | 18 | 18 | But this archive had a fatal weakness: die before you copy yourself, and the information dies with you. |
| 6 | 24.580 | 27.176 | 9 | 9 | The planet's first archive wasn't built. It was alive. |

Totals: 6 lines · 75 spoken words · 79 mechanical tokens · content
ends 27.176 s (last phrase close; scene plan contentEnd 28.776 s
includes the closing hold) · scene plan total 32.277 s · render
container 32.288 s.

## The two rulers

- **Spoken words: 75.** Counted at this migration (2026-10-26) from
  the locked text: 10/5/23/10/18/9 per line — whitespace tokens that
  are words, excluding standalone punctuation tokens.
- **Mechanical whitespace tokens: 79.** Counted at this migration
  over the same 6 texts: 12/5/25/10/18/9. The difference is exactly
  4 — the standalone em-dash tokens (L1 ×2, L3 ×2), which the
  narration does not pronounce as words.
Both rulers are stated because this catalogue has been bitten by
silent ruler changes before; every word count in this package says
which ruler it used. The script doc's header figure ("6 lines, 79
words") is the mechanical count and is exact under that ruler; the
shipped scene's plan likewise carries 79 word objects (the
mechanical tokens, dashes included). This package's coverage
denominator for the absent word layer is the spoken 75 (the
migration's convention).

## Which text governs — a recorded reconciliation

Three independent carriers of the text agree exactly, verified line
by line at this migration:

- the script doc's locked table (`transcript/source-script.md` in
  this package — a byte-identical copy of
  `files/short-obs01-a-first-archive-script.md`, sha256
  `e4a52b88…`; "Phase 1 script LOCKED 2026-10-21");
- the build's LINES constant (`hidden_files/obs-ep01/build_obs_a.py`
  — the identical six strings, which the delivered MP4 was assembled
  from);
- the shipped scene plan (`scene/index.html` — its 79 word objects
  join, per line, to the locked lines character-for-character,
  punctuation included).

The package reconciliation records the same identity
(`hidden_files/jobs/2026-10-26-package-reconciliation.md`: "plan 6
lines = delivered 6 phrases, 79 words").

**The study brief's skeleton does not govern.** The Phase-0 brief
(`hidden_files/obs-ep01-short-a-study-brief.md`) prints an earlier
draft of the lines — L2 "Not paper. Bodies.", L3 "didn't get
written down. It got copied.", L5 "if the body died before it
copied itself, the information died with it." — and labels them
"Phase 1 draft — lines, to be iterated". The lock iterated them;
the locked text above is what was built, and the skeleton is
carried here as development evidence only.

## Two flagged record errors (carried, not corrected)

1. **The Q2 annex's word allocation does not reproduce.** The
   upload package's Q2 annex (`files/short-obs01-a-upload.md`)
   states "L1 16 words · L2 13 · L3 15 · L4 13 · L5 11 · L6 14 =
   82 display words", counted — it says — mechanically from the
   build's LINES. The counts above, taken from those exact LINES
   at this migration, are 12/5/25/10/18/9 mechanical and
   10/5/23/10/18/9 spoken: the annex's figures match neither ruler
   on any line. The annex's allocation is the record the context
   audit cites for the prose-per-scene element's rationale (the
   rationale — allocation tied to the intent table — stands); its
   arithmetic is an error in the record, flagged here and in
   `decisions/decisions.json`, and not edited in its source.
2. **DR-1's quoted essence line is unattested.** The same annex's
   title reconstruction quotes L6 as "The first archive was a body
   — and it is still alive." No locked line reads that way; the
   wording restates the script doc's Essence ("The first archive
   was a body"). The annex labels DR-1 a reconstruction and the
   title itself stands on record in the upload package — only the
   quoted line is flagged.
