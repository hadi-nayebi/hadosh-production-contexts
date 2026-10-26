# wd-03 — development transcript (the text that governs)

This piece is UNBUILT: there is no delivered text, because there is no delivery. What governs is the development script — **draft i2** (`files/short-wd03-model-script-v2.md`, "Script draft i2 — polish round", 2026-10-23), carried byte-identical in this layer as `transcript/source-script.md`. Its exact standing, stated as its own records state it and no further: i2 is a polish-round script draft; its Phase 1 Narrative Gate (drafted in i1, before the script) was re-run against the edited lines and passes (N-01, N-05, N-08; T-17 audit + cold restatement); the script was never locked against a build, because no build exists. Board stage: "script". The piece's decided next step is the build (board next_move; voice registry sequence).

No timings exist for this text — no scene, no PLAN, no locked line starts (voice registry, verbatim: "No delivered scene, no locked timings, no delivered audio"). The script doc's duration figures (≈42 s speech at ~171 wpm; ≈48–50 s with the flagship container; target ≤60 s) are PROJECTIONS printed in the doc, not measurements; they are recorded as projections in `render/verification.json` and promised nowhere in this package.

## The text (draft i2, governing — 7 lines)

| # | Line | Words (spoken / mechanical) | Job (the script doc's own N-05 column) |
|---|---|---|---|
| L1 | You have never actually seen the model. | 7 / 7 | Opens the hunt — the thing you have never seen |
| L2 | You see an app. You see a chat window. The model sits behind both. | 14 / 14 | Names what you HAVE seen — and where the model is |
| L3 | A model is a pattern learned in training: it read billions of words and learned which words tend to follow which. | 21 / 21 | **The definition lands** — pattern, learned, follower |
| L4 | Picture a cook who trained for years before the restaurant opened. The app is only the door. The cook is the model. | 22 / 22 | The analogy — cook (model), door (app), training = years of practice |
| L5 | That is why one model can work inside many different apps — and swapping the app never swaps the cook. | 19 / 20 | Consequence cashed — the misconception's dead solution named |
| L6 | When you chat, the window sends your words to the model. The model continues them. The window itself knows nothing. | 20 / 20 | Mechanism — routing vs. continuing; the window's ignorance |
| L7 | So a model is not the app. It is the trained pattern that does the continuing. | 16 / 16 | Closes on the definition only — the cook retired |
| | **Total** | **119 spoken / 120 mechanical** | |

After the close (not part of the 7 lines, and silent — bed only, no narration, so it carries no words in either count): the **T-16 NEXT card** (3 s) — "NEXT / The window sends more than your words. / WHAT IS CONTEXT? / tap to watch →" — the piece's only forward pointer, routing to WD-04 (decided: metadata field `end_referral`; script doc §7).

Every line also carries a Sugar carrier in the script doc's table (N-07: L1 the unseen thing · L2 the villain's territory · L3 the sentence that defines by doing · L4 a picture you can hold · L5 a swapping test you can run · L6 a window that confesses · L7 the bookend) — the doc's full table governs and is carried in `transcript/source-script.md`.

## Two rulers — and an error in the record, carried openly

Counts in this package were recounted at this migration from the governing text (whitespace split of the table's lines):

- **Spoken ruler** (words a voice would speak; a standalone "—" is not a word): **119**.
- **Mechanical ruler** (whitespace tokens; a standalone "—" is a token): **120**.

The difference is exactly one token: L5's standalone em dash.

**The script doc's own count does not reproduce.** Both drafts state per-line counts "counted mechanically (whitespace split, em dash = token)" with L5 = 19 and a total of 119 — and i2's change log (§1 item 3) says the counts were "recounted mechanically" in the polish round, "Total unchanged: 119 words." Under the stated ruler, L5's line as written carries **20** tokens; the stated 19 is the line's SPOKEN count. The doc's total (119) is exact under the spoken ruler and wrong under the mechanical ruler it claims. The error originates in i1's identical per-line table and survived i2's claimed recount. It is flagged here, in `metadata.json` (`transcript_line_divergence`), in `decisions/decisions.json` provenance and in `render/verification.json` tensions — and corrected nowhere at source: both script docs stand as written, and every count in this package names its ruler. (Consequence for the lane's ≤120-word cap, stated in the script doc's header: the piece sits at 119 spoken — inside — and at exactly 120 mechanical — at the cap, not over it.)

## Which text governs — the reconciliation

Draft i2 governs, per its own header ("Supersedes `files/short-wd03-model-script-draft.md` (i1)") and the board record (its script link names i2). Draft i1 is carried byte-identical in this layer as `transcript/script-draft-i1.md`, labeled for what it is: the superseded first draft — and the piece's richest development record (it holds the full Phase 1 Narrative Gate, declared before drafting).

The two drafts' spoken texts differ at **exactly one word** (verified line by line at this migration): L2 — i1 "The model **hides** behind both." → i2 "The model **sits** behind both." I1's own weak points had flagged "hides" (it implies intent, a hiding agent) and deferred the question to build-phase visuals; the polish round fixed it in the script instead — and i2's build note (§1 item 4) carries the companion warning to the build: the cook must never be drawn peeking or lurking, so the art does not undo the verb fix. Everything else in the spoken text is identical; i2 additionally ADDS §5 (the DR-1/DR-2 retention decision records, absent from i1) and the H-01 build note, and applies small doc-level edits (beat splits in L4/L5's prose columns, the canon-flag box, the counts line) that do not touch the spoken text.

The governing text stands **with one open flag attached**: L3's "billions of words" (metadata field `accuracy_flag`, OPEN) — flagged by the script doc itself as the owner's minor call ("HADI'S CALL (minor — not a canon block)"), by the objectives audit (the piece's Partial alignment grade rests on it), and by the script-factory report (owner-call list item 5). The remedy is written in the doc (drop "billions of"). The flag does not unsettle which text governs; it rides the text until the owner rules.
