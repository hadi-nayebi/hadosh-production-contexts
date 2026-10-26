# wd-04 — the development transcript (the text that governs)

**The governing text is the v2 polish script** — `transcript/source-script.md` in this
package, a byte-identical copy of `files/short-wd04-context-script-v2.md` ("Script draft
i2 — polish round, 2026-10-23"; sha256
`4fd15d95e9e64afee773c975c353fa0fbf14fe02849b0a4c605fd99359aabac8`). Its standing is
exactly what its header says: a polish-round **draft** — not locked, not built. The board
record agrees (stage "script"; `links.script` → the v2 doc). No narration has ever been
performed from it; there are no timings, and the voice registry states the consequence in
terms: the script "has no locked line starts".

The superseded i1 draft is carried beside it as development evidence
(`transcript/script-draft-i1.md`, a byte-identical copy of
`files/short-wd04-context-script-draft.md`; sha256
`d69643b1cf936ad190b6e4b908b4aad93ccd1f2a9a99550cb9d1fe25e64fbf84`). The i1→i2 changes are
enumerated in v2 §1: the old L6 split into L6+L7 (the drawer's two jobs — files keep / the
harness restores — get separate landings; DR-2), three lines tightened to pay for the
split, the close's "So" dropped, word counts recounted mechanically, retention decisions
DR-1/DR-2 added, and a build note (H-01) added: desk, drawer and papers are separate
HTML-scene components, and the drawer's meaning-change must be staged as a visible
transformation (drawer opens, label changes) — the Chekhov table is the build's contract.

## The governing script (v2) — 8 lines

Counts per line: mechanical = whitespace tokens (the ruler the v2 doc declares; a
standalone em dash is a token). Spoken = mechanical minus standalone em-dash tokens.
Both counted at this migration (JOB MIGRATION-26) from the file's own §3 table; the doc's
printed mechanical counts reproduce exactly.

| # | Line | Mech | Spoken |
|---|---|---|---|
| 1 | Your AI forgot what you told it yesterday. It is not being rude. | 13 | 13 |
| 2 | It cannot see yesterday. It can only see its context — everything in front of it right now. | 18 | 17 |
| 3 | Context is this chat, your instructions, and any files handed to it. | 12 | 12 |
| 4 | Picture a desk. The model reads only the papers on it. Nothing in the drawer exists for it. | 18 | 18 |
| 5 | A long chat stacks new papers on top. The oldest slide off — not erased, just out of sight. | 19 | 18 |
| 6 | Your files are the drawer. They keep what slid off. | 10 | 10 |
| 7 | The harness — the layer around the model — puts the right paper back on the desk. | 17 | 15 |
| 8 | Context is everything the model can see right now — and nothing else. | 13 | 12 |
| | **Total** | **120** | **115** |

The spoken total (115) is the denominator the word-decision layer carries
(`decisions/word-decisions.json`). The script's own projection stands as a projection
only: ≈42 s of speech at the measured ~171 wpm guide pace, ≈48–50 s with the flagship
container, target ≤60 s (v2 §3) — no timings exist to measure.

After the close, packaging only (T-16): a silent NEXT card (3 s, bed only, no narration) —
"NEXT / Seeing is not doing. / WHAT IS A TOOL? / tap to watch →". The card's ROUTING is
the owner's open call (see `metadata.json`, field `end_referral`); its text above is the
card as written in both script versions.

## The superseded draft (i1) — and its ruler discrepancy, carried openly

i1 runs 7 lines. Counted at this migration from its own table, the lines as written total
**124 mechanical / 119 spoken** (per line: 13/19/16/21/19/22/14 mechanical; five
standalone em-dash tokens — L2 ×1, L5 ×1, L6 ×2, L7 ×1).

The i1 doc's own printed counts do not reproduce under the mechanical ruler: it prints
13/18/16/21/18/20/13 = "119 words". The printed figures are, line for line, the **spoken**
counts — each shortfall equals that line's standalone-dash count (L2 −1, L5 −1, L6 −2,
L7 −1) — and the printed total (119) is exact under the spoken ruler. The doc never names
its ruler; the v2 round then recounted explicitly ("Word counts recounted mechanically
(whitespace split, em dash = token)", v2 §1). The i1 document is carried byte-identical
and unedited; the discrepancy is recorded here and in `render/verification.json`, not
corrected in the evidence. (The board's "Script drafted" evidence line — "Draft complete
(~119 words)" — quotes i1's figure; the governing v2 counts 120 mechanical / 115 spoken.)

What did **not** change between i1 and i2: the essence and the T-17 learning sentence
(verbatim in both), the misconception (The Rude Robot), the orientation design, the hook
variation, and the T-16 bridge text.
