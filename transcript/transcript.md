# wo-b — delivered transcript (the text that governs)

**The delivered text governs.** This is the narration the published
video actually speaks — 18 lines / 132 words — extracted from the
shipped scene's plan (`scene/index.html`; the voice-upgrade kit's
extraction, `hidden_files/voice-upgrade/kits/wo-b.json`) and carried
in the voice registry (`hidden_files/voice-upgrade/registry.json`
pieces[wo-b].lines). Timings are the registry's line windows:
start = the line's phrase-window open / guide-voice onset;
window end = the line's last phrase-window close; guide end = where
the guide narration's voice falls silent inside the window.

| # | Start (s) | Window end (s) | Guide end (s) | Words | Line |
|---|---|---|---|---|---|
| 1 | 2.35 | 4.78 | 3.84 | 9 | What kind of AGI do we want to build? |
| 2 | 4.78 | 9.69 | 8.86 | 15 | Ask most people: a mind of its own, arriving one day, standing apart from us. |
| 3 | 9.69 | 12.84 | 11.87 | 8 | But first: what is AGI actually made of? |
| 4 | 12.84 | 13.75 | 13.41 | 2 | Six parts. |
| 5 | 13.75 | 15.97 | 15.11 | 5 | The same six, every time. |
| 6 | 15.97 | 19.63 | 18.96 | 8 | The LLM: the language model, the raw intelligence. |
| 7 | 19.63 | 22.12 | 21.46 | 7 | A HARNESS: the layer wrapped around it. |
| 8 | 22.12 | 24.23 | 23.61 | 5 | INSTRUCTIONS: how it should behave. |
| 9 | 24.23 | 27.65 | 26.98 | 8 | HOOKS: automatic checks, firing at the right moment. |
| 10 | 27.65 | 29.62 | 28.98 | 4 | FILES: what it remembers. |
| 11 | 29.62 | 32.36 | 31.34 | 7 | TOOLS: what it can reach and do. |
| 12 | 32.36 | 36.29 | 35.45 | 10 | Stand them apart from you, owned by someone else: ARTIFICIAL. |
| 13 | 36.29 | 39.81 | 38.92 | 9 | Wear the same parts as your digital CORTEX: AUGMENTED. |
| 14 | 39.81 | 40.97 | 40.58 | 3 | Same six parts. |
| 15 | 40.97 | 43.58 | 42.61 | 6 | One difference: who owns the layer. |
| 16 | 43.58 | 46.87 | 46.11 | 9 | So the question was never only when AGI arrives. |
| 17 | 46.87 | 50.54 | 49.66 | 13 | It's where we started: what kind of AGI do we want to build? |
| 18 | 50.54 | 53.228 | 51.37 | 4 | Tell me yours, below. |

Totals: 18 lines · 132 words · 43 phrases in the scene plan ·
content ends 53.228 s · scene total 56.384 s.

## The divergence (recorded, not reconciled)

Three texts stand in this piece's record. They do not agree, and
this package does not pretend they do.

**1. This delivered text (governs).** 18 lines / 132 words. Its
wording is the PRE-restructure wording: L4 is "Six parts.", the six
parts are named one by one (L6–L11), and the split is drawn at
L12–L15. Ruler: the registry's per-line word counts sum to 132,
and a mechanical whitespace count of the 18 line texts at this
migration is also 132 — the two rulers agree exactly.

**2. The delivered build's own script doc**
(`transcript/source-script.md` in this package — a byte-identical
copy of `files/short-02b-what-kind-script.md`, sha256
`4e2401cda0c7426331a59f74f26fd89ca50ec201fb2c87929482692631863225`).
Its narration table has the same 18-line shape but DIFFERENT
wording on most lines: it is the 2026-10-21 doctrine restructure
(its L4 reads "Two parts. Always the same two."; its L12–L15 draw
the apart/worn contrast the delivered text does not speak). The
restructure was written and never re-recorded. The doc's header
calls its table "Narration (verbatim, 137 words)" — three counts
stand against that claim, all recorded: the header's own 137; the
voice-upgrade kit's count of the same table, 138 tokens; and this
migration's mechanical count, 143 whitespace tokens of which 5
are standalone em-dash tokens — 138 excluding them, agreeing with
the kit. The doc's Architecture and Decision sections remain the
delivered build's design record (the scaffold cites them); its
narration table does not govern the text.

**3. The TOKENS script** (`files/short-wo-b-tokens-script.md`,
sha256 `f081c4128f517194b1364af69146e1efee0c2b696fa2cc62ebac1f716ae62586`)
— the sibling iteration the board's title and upload package
attach to: 15 lines / 207 words (verified at this migration: the
mechanical whitespace count of its narration table is exactly its
stated 207). A different text on the same question — the capacity
argument ("3.2 quadrillion tokens a month") where the delivered
build asks which kind of AGI to build. Its render also exists
(`files/short-wo-b-tokens.mp4`, 75.53 s); the published video is
the delivered build above (board public link:
https://youtube.com/shorts/IRHIduGQun4).

Ruling of record (voice-upgrade kit, wo-b): "the DELIVERED PLAN
governs this kit… reconcile wording only at a rebuild." The
package reconciliation
(`hidden_files/jobs/2026-10-26-package-reconciliation.md`) records
the same state: "script 15 lines/207 words vs delivered 18
lines/132 words; script does not govern". The divergence field in
`metadata.json` (`transcript_line_divergence`) ships OPEN:
reconciling the three texts is a rebuild decision.
