# eo-ep1 — delivered transcript (the text that governs)

**The delivered text governs.** This is the narration the delivered
v3 build actually speaks — 11 lines / 229 spoken words — extracted
from the production scene's plan (`scene/index.html`; the
voice-upgrade kit's extraction) and carried in the voice registry
(`hidden_files/voice-upgrade/registry.json` pieces[eo-ep1-i7].lines).
Timings are the registry's line windows: start = the line's
phrase-window open / guide-voice onset; guide end = where the guide
narration's voice falls silent inside the window (the registry's
basis: the line's last phrase end — word ends are not recorded in
this scene family); window end = the next line's start (L11: the
scene content end). The v3 build reuses the approved i7's timeline
constants unchanged, so these windows are also the published i7's.

| # | Start (s) | Guide end (s) | Window end (s) | Words | Line |
|---|---|---|---|---|---|
| 1 | 1.95 | 6.53 | 6.93 | 14 | Writing is only five thousand years old. So where did information live before that? |
| 2 | 6.93 | 11.35 | 11.80 | 13 | Inside living bodies. And I mean that directly: a body was the storage. |
| 3 | 11.80 | 15.91 | 16.31 | 12 | Bodies carried information two ways. In the body itself — and in behavior. |
| 4 | 16.31 | 26.45 | 26.90 | 35 | First, in the body. A coat of spots hides an animal from a lion. That pattern is information — how to stay alive. When the animal had young, the pattern was copied into a new body. |
| 5 | 26.90 | 36.96 | 37.36 | 32 | Second, in behavior. A calf learns the way to the water by following its mother. No gene carries that route. It is copied by watching, and by walking it, again and again. |
| 6 | 37.36 | 41.83 | 42.23 | 12 | Two kinds of information. One copied by birth. One copied by watching. |
| 7 | 42.23 | 45.44 | 45.89 | 9 | Copy after copy, both survived for millions of years. |
| 8 | 45.89 | 55.95 | 56.55 | 32 | But there was one fatal rule: die before you pass it on — before you have young, before the young have watched you — and your information dies with you. There was no backup. |
| 9 | 56.55 | 61.05 | 61.55 | 14 | Before there were books, information lived in bodies — and it could die with them. |
| 10 | 61.55 | 70.14 | 70.74 | 25 | The first archive on Earth was not paper or stone. It was a living body — and the copying was having children, and watching, and learning. |
| 11 | 70.74 | 79.11 | 80.31 | 31 | This is only the first chapter of how information evolved on Earth. The story goes on from here — subscribe to Earth One, and take the rest of the walk with us. |

Totals: 11 lines · 229 spoken words · content ends 80.31 s · scene
plan total 83.711 s (render container 83.710 s).

## The two rulers

- **Spoken words: 229.** The alignment record's per-line counts
  (14/13/12/35/32/12/9/32/14/25/31) — faster-whisper mapped 229
  displayed words onto the final voice, 229 tokens, 0 outside their
  line windows (v3 build report). Verified at this migration: the
  counts equal the delivered texts' spoken counts line by line.
- **Mechanical whitespace tokens: 236.** Counted at this migration
  (2026-10-26) over the same punctuated texts. The difference is
  exactly 7 — the standalone em-dash tokens (L3 ×1, L4 ×1, L8 ×2,
  L9 ×1, L10 ×1, L11 ×1), which the spoken count does not pronounce
  as words.

Both rulers are stated because this catalogue has been bitten by
silent ruler changes before; every word count in this package says
which ruler it used.

## Which text governs — a recorded reconciliation, with two decided divergences

The delivered build's script doc (`transcript/source-script.md` in
this package — a byte-identical copy of
`files/short-eo01-i7-script.md`, sha256
`a7c1b6bb843273c162f14cd14e076b0e153832924b4229361fd0bee3b631e837`)
locks the 11 lines — approved by Hadi's ear 2026-10-23 from the
read-aloud; production rewrote nothing at the i7 build. The
**published i7 speaks that locked script verbatim**, banned L11
formula included.

The **delivered v3** diverges from the locked script at exactly two
lines — both of them Decision Records made at the rebuild, re-voiced
on the identical TTS path (same tool, speed, voice; proven by a
byte-identical regeneration of an unchanged line) and re-aligned:

- **L9 — DR-TEXT-9.** Locked script: *"So say it plainly: before
  there were books, information lived in bodies — and it could die
  with them."* Delivered: *"Before there were books, information
  lived in bodies — and it could die with them."* The announcement
  device ("So say it plainly:") is removed; the line is now the
  plain statement itself — every other word and the meaning
  unchanged; the line still does its N-09 job without the stock
  device.
- **L11 — DR-TEXT-11.** Locked script: *"This is only the first
  chapter of how information evolved on Earth. Subscribe, like, and
  follow Earth One — the rest of the story is coming."* Delivered:
  *"This is only the first chapter of how information evolved on
  Earth. The story goes on from here — subscribe to Earth One, and
  take the rest of the walk with us."* The banned formula is
  stripped and replaced with fresh wording carrying the same funnel
  job (it names the series subject — T-18 — and asks plainly).

Every other delivered line is the locked script word for word —
verified at this migration against the registry's extraction of the
shipped scene's plan. **The delivered text governs this package's
shipped layers**, and `metadata.json` carries the question as the
decided field `transcript_line_divergence`.

One doc defect rides with the locked script, carried openly: its
header claims "11 lines, 162 words". Its own lines count 227 spoken
/ 234 mechanical at this migration, and the delivered narration is
229 display words — the 162 matches no ruler. The v3 build report
flags it in terms ("Doc miscount noted, not edited (locked doc)");
neither the locked doc nor its figure is edited here.

## The v5 text (a decided development — NOT this build's transcript)

One further text stands on this piece's record. It is not a
divergence of the governing text; it is the decided script of the
piece's NEXT build, and it is never presented as what the delivered
v3 speaks:

**The v5 draft** — `files/short-eo01-v5-script-draft.md` (sha256
`721fb2d5e5d190ddbe9b1b38747f7740bfbaa45833072f6abfc70cb29816ca97`;
byte-identical copy at `transcript/v5-script-draft.md` in this
package): 11 performance lines, **204 spoken words / 210 mechanical
tokens** (the difference is exactly 6 standalone em dashes, counted
at this migration — the draft's own "204 spoken words (mechanical
count)" is the spoken ruler). Stage 1 content is inherited from v4
(i7 verbatim except v4's C1/C3/C5 — C1 carries the corrected fact:
writing ≈ five and a half thousand years, where the delivered text
says five thousand) with two changes: R1 adds the invite line L2
("Can you guess where it used to live?") and R2 cuts the bridge to
the line the v3 scene already ships (navigation 19/204 = 9.3%).
Stage 2 delivery is the editor pass's decided layer: a pause map
pricing every joint (10 inter-line gaps totalling 9,400 ms + OPEN
1,400 ms + END 1,000 ms + intra-line beats), per-line intonation
intent, and the R5 shuffle (the sting as its own performance line).
Editor Simulation #1 on v4: REVISE AND RESUBMIT. Simulation #2 on
v5: PASS. The scaffold field `rebuild_script` carries the decision
(the converted Action #54); the v5 guide take is carried as
evidence in the audio layer (`audio/audio.json` —
`v5_take_evidence`), not as a render.
