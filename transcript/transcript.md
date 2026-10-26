# ws01-v2 — locked transcript

Status: **LOCKED** — the verbatim spoken text of the delivered file
`files/short-ws01-single.mp4` (sha256 `7d477e0d6139ef316af57861d811c618289d0836d3bea375abfb9577cb2b98bc`).
The script was locked at Phase 1 on 2026-10-22 (Archer) and built
verbatim; Hadi published the v2 build himself the same day. The
catalogue decision audit rates this layer MATCH — plan 12 lines =
delivered 12 phrases, 323 words in scene = kit count.

Text of record: the locked script doc (`transcript/source-script.md`
in this layer — `files/short-ws01-single-script.md`, sha256
`6e3eb9a304e9805a3e26504d9796af740a3a155ca118eea1084b78e239e0dd7e`).
Timings: the voice-upgrade registry
(`hidden_files/voice-upgrade/registry.json`, pieces.ws01-v2.lines —
extraction: "D.plan phrases grouped by line field"): each line is
shown as **start → window end**, where the window end is the next
line's start; L12's window end is the scene's contentEnd
(99.914 s — the file continues past it into the container outro;
total 106.700 s). The guide-voice-end column is the guide
performance's end per line (basis stated by the registry itself:
"last phrase end (word ends not recorded in this scene family)").

Word counts, reconciled: the script doc's table counts **329
tokens** mechanically (whitespace split, the em dash counted as a
token). The spoken count is **323 word objects** — the registry
kit count, matching the shipped scene's plan (323 word objects):
six of the 329 tokens are standalone em dashes (L1, L3, L8, L9,
L10, L11), which are punctuation and carry no word objects. The
registry's line texts strip the em dashes (the spoken forms); the
script's text, dashes included, is the locked text and is what is
printed below. Verified at this migration: with the dash tokens
removed, the script's text and the kit's text agree on all 12
lines, word for word. The two counts are two rulers over the same
words, carried openly, not merged.

Iteration history, stated openly: the script doc's header is the
v1→v2 record. v1 (93.50 s; Studio draft `wSaIxfCKW1Y`) was
delivered first at this same file path; Hadi's gate feedback on
v1 (quoted verbatim in the doc: "great improvement… hash out the
transitions… make the direction intuitively understood… use this
direction symbol") drove four enumerated v2 changes — the
address-readout dissolve at the reveal, transitions carried
across every beat boundary, the wireframe-sphere direction
emblem, and two closing beats (L11–L12, Hadi's additions). The
file on disk is the v2 (106.700 s; hash above — the registry's
record and this migration's measurement agree). A two-part v2
expansion (Studio drafts `eZgq094i1M8` / `vq4eqtAr8bs`) was
superseded by Hadi's ruling that the §mental beat is ONE short
carrying the whole arc (QC T-15) and stands as iteration history.
The doc's header title reads "Words Are Directions"; the piece's
title of record — the board's, the upload package's, the public
video's — is "A Word Is a Direction", the essence sentence. The
doc's runtime target (~90 s, 10 lines, ~255 words) predates the
two closing beats: the delivered piece is 12 lines, 323 words,
106.700 s — Hadi's compressed-arc ruling carries the written
justification for exceeding the S-03 50 s budget (context audit,
'Prose per scene': deviation-with-reason).

Total duration: 106.700 s · 12 lines · 323 spoken words ·
12 phrases (one per line).

## L1 — 0.543s → 6.649s (guide voice end 6.11s · 21 words)

A computer can't hold a word. It can only hold numbers — so every word has to become a list of numbers.

## L2 — 6.649s → 13.719s (guide voice end 12.97s · 19 words)

Try giving each word just one number. Cat gets 1, car gets 2, fish 3, boat 4, dog 5.

## L3 — 13.719s → 23.951s (guide voice end 23.312s · 36 words)

Now the words sit on a line, in a row — but the row means nothing. Why is cat next to car? The numbers can sort the words, but they can't say how any two words relate.

## L4 — 23.951s → 31.184s (guide voice end 30.626s · 22 words)

Give each word two numbers instead. The first says where it sits between land and water. The second, between living and built.

## L5 — 31.184s → 38.063s (guide voice end 37.266s · 24 words)

Cat lands up on the land side, among the living things. The boat sits low, on the water. Each word finally has a place.

## L6 — 38.063s → 50.338s (guide voice end 49.698s · 41 words)

And look at what a place really is. Draw an arrow from the starting point to the word. Cat and dog point almost the same way. The boat points somewhere completely different. The words have stopped being labels. They've become directions.

## L7 — 50.338s → 58.83s (guide voice end 58.236s · 29 words)

But two numbers can't say everything. They can't say how big a word's thing is, or what it's for. Every new, independent feature needs a number of its own.

## L8 — 58.83s → 67.628s (guide voice end 66.892s · 29 words)

Real models don't stop at two, or three. They use thousands of numbers per word — learned from how words are actually used, not handed to them with tidy names.

## L9 — 67.628s → 76.481s (guide voice end 75.602s · 30 words)

So the list of numbers is long — but it's still one arrow. For a computer, a word is a direction: a direction in a semantic space too wide to draw.

## L10 — 76.481s → 87.472s (guide voice end 86.742s · 32 words)

And not just words. A sentence gets a direction. A paragraph. An instruction. Anything written in text can point — and that single idea is the key to everything the machine does next.

## L11 — 87.472s → 93.652s (guide voice end 92.908s · 20 words)

This is why it matters. An instruction doesn't just add words — it points the whole context in a new direction.

## L12 — 93.652s → 99.914s (guide voice end 99.914s · 20 words)

And the model's job, underneath everything, is to modulate those directions: to take the direction it's given, and continue it.

## Sources

- `transcript/source-script.md` (byte copy of `files/short-ws01-single-script.md`) — the locked text, its per-line intent column, its W-section and scene map.
- `hidden_files/voice-upgrade/registry.json` — pieces[ws01-v2]: per-line windows, word counts, guide voice ends and their basis.
- `hidden_files/voice-upgrade/kits/ws01-v2.json` — the kit the registry was built from (same lines; its `state_evidence` string is a pre-upgrade plan quote — see the package README's discrepancy note).
- `hidden_files/overnight-2026-10-25/catalogue-decision-table.md` — ws01-v2 row: MATCH (plan 12 lines = delivered 12 phrases; 323 words).
