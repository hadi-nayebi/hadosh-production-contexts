# soa-03 — the development transcript (the text that governs)

**The governing text is the fact-refreshed draft i2 (v2)** — `transcript/source-script.md`
in this package, a byte-identical copy of `files/short-soa03-workplace-script-draft.md`
("Script draft i2 (v2), 2026-10-24"; sha256
`b8ccd525a4bfec3f5a803e237a4ccfd92297ecc9d892abcb3792713aec1a5be5`). Its standing is
exactly what its header says: a script **draft** — not locked, not built. The board record
agrees (stage "script"; `links.script` → this doc; cycle 2 records the refresh). No
narration has ever been performed from it; there are no timings, and the voice registry
states the consequence in terms: the script "has no locked line starts".

The draft exists because of the fact. Draft i1 (2026-10-23) carried Gallup's Q3 2025 wave
(45% / 10% daily); Hadi caught the numbers as stale ("Why is it for last year?",
2026-10-24), and JOB SOA03-REFRESH replaced the fact with the same series' Q2 2026 wave
and redrafted — i2 is that redraft. Its §1 is the fact of record (below).

## The fact (settled — carried verbatim, never altered in this package)

Gallup Workforce Panel, **Q2 2026 — surveyed May 6–20, 2026** (22,573 U.S. employees,
±0.9 pp); headline numbers published by Gallup July 28, 2026 (*Front Page*): **52% of U.S.
employees use AI in their role at least a few times a year** (21% in Q2 2023; 45% in
Q3 2025); **only 15% use it daily**; 30% use it a few times a week or more; 47% say their
organization has integrated AI tools. (Script §1, with the Gallup URLs; the refresh job's
wave table is the research record.)

**How the draft uses the figures** — placement is structure (metadata.json,
`story_structure`): L1 dates the piece inside the piece ("May 2026" — the survey month).
L2 states the 52% headline **clean** — the bar is not in the line as drafted. L3 carries
the 21% baseline as the scale line (the climb as one motion — "the office flipped in
thirty-six months"). L4 lands the second read: the 15% daily figure, and Gallup's bar
itself as shorthand ("The rest dip in a few times a year" — the caveat on that shorthand
is the script's own §8.3, carried below). L5's "tools their employer rents" frame is backed
by the 47% org-integration reading, which is **not** scripted as a number. The 30% weekly
figure is not scripted either. The build's on-screen source line is prescribed in §7:
"Gallup Workforce Panel — survey May 6–20, 2026."

## The governing script (draft i2) — 7 lines, as drafted (Option A)

Counts per line: mechanical = whitespace tokens; spoken = mechanical minus standalone
em-dash tokens. Both counted at this migration (JOB MIGRATION-27) from the file's own §4
table; the spoken text of L7 excludes the table's bracketed stage label, which is not
narration.

| # | Line | Job (N-05) | Mech | Spoken |
|---|---|---|---|---|
| 1 | State of adoption — May 2026. | Dateline — the survey's month, inside the piece | 6 | 5 |
| 2 | Fifty-two percent of American employees have now used AI at work. | THE FACT, huge on screen with date + source | 11 | 11 |
| 3 | Three years earlier, it was twenty-one. The office flipped in thirty-six months. | Scale: the climb from 21%, as one motion | 12 | 12 |
| 4 | But look closer: only fifteen percent use it every day. The rest dip in a few times a year. | The second read — the shallowness inside the headline | 19 | 19 |
| 5 | A few times a year, inside tools their employer rents — nothing set up for them, nothing that remembers how they work. | The gap: whose tools, whose memory | 22 | 21 |
| 6 | Adoption reached the whole office. A practice reached almost nobody. | Close (N-09, unannounced): the two counts in one breath | 10 | 10 |
| 7 | The count continues here — and so does the craft of owning your layer. Subscribe. | Bridge, after the close (T-16) — the ask, spoken after the close | 15 | 14 |
| | **Total** | | **95** | **92** |

The spoken total (92) is the denominator the word-decision layer carries
(`decisions/word-decisions.json`). All seven lines are spoken — L7 is a spoken bridge,
not a silent card.

## The one open wording: Option B (the #29 alternative, logged in the script §4 + §8.1)

**OPTION B** — L2 reads "Fifty-two percent of American employees have now used AI at work
— at least a few times a year." L4 then reads "But look closer: only fifteen percent use
it every day." All other lines identical. Counted at this migration, Option B's text is
94 mechanical / 90 spoken. The choice between the drafted text (A) and B is the owner's
open pick — metadata.json, field `fact_line_bar` (board Action #29). This package carries
the draft as written (A) and the alternative verbatim; it does not take the pick.

## The script's runtime figure does not reproduce — carried openly

The script doc's §4 runtime line states "≈ 80 spoken words at ~171 wpm ≈ 28 s speech;
+ flagship container → ≈ 38–40 s total". Counted from the governing text, the spoken
count over L1–L7 is **92** (≈32 s at the same pace). The doc's 80 is exactly the
**mechanical** count of the six content lines L1–L6 with the bridge excluded (their
spoken count is 78). The doc does not say which text its figure counts. The projection
stands in the script doc as written — a projection, never a delivery decision (there are
no timings); the counts in this package are the counted ones, and the build will price
duration from performed timings. (The script-factory report's "95 tokens" for this piece
— counted 2026-10-23 over draft i1's text — DOES reproduce: the refresh's word swaps are
token-neutral, and both drafts count 95 mechanical.)

## The superseded draft (i1) — no file survives; its record is the refresh job's diff

i1 ran the same 7-line structure on the previous Gallup wave: L1 "State of adoption —
December 2025." (the publication month); L2 "Forty-five percent…"; L3 "Two years earlier,
it was twenty-one. The office flipped in twenty-four months."; L4 "…only ten percent…";
L5, L6, L7 **unchanged, word for word**, into i2. Title: "The Office Flipped in Two
Years". No standalone i1 script file exists in the catalogue — the i1→i2 changes are
enumerated line by line in the refresh job (`hidden_files/jobs/2026-10-24-soa03-refresh.md`),
which is cited as the i1 record, and i1's fact statement survives in the phase-0 brief.

`transcript/phase0-brief.md` is that brief, carried byte-identical (a copy of
`files/short-soa03-workplace-phase0.md`, sha256
`b6b0ef3060d9a40a422c47fcb901b68cfff2ad76759e7a9631b67d220322d90f`): Phase 0 complete
2026-10-23, the i1 development record. Its figures (45% / 10%, December 2025) are
**superseded** and stand unedited as its date's record; its Academy read, essence ("The
office adopted; the worker rents") and restatement shape carry into i2 unchanged in kind
— only the numbers refreshed. Its honesty flags stand as written (the low bar is the
piece's subject; industry spread is wide; the Q2 2025 fallback named pre-publish).

What did **not** change between i1 and i2: the structure (The Count and the Shallowness),
the villain (The Occasional Dip), the essence and the T-17's shape, the close (L6, word
for word), the bridge (L7), and the DR-1 packaging decisions' form (title/cover updated
to the new numbers: "52% of Employees Now Use AI at Work." / "ONLY 15% DAILY.").
