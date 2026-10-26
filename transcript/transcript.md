# intro-v4 — the development transcript (the text that governs)

**The governing text is the v4 script draft** — `transcript/source-script.md` in
this package, a byte-identical copy of `files/intro-v4-script-draft.md`
("Flagship Channel Intro — A1 v4 (SCRIPT DRAFT, not locked, not built)",
Draft i1, 2026-10-23; sha256
`04f5f38f876b9741674d5aa53bd541a3c2a1190641b15ce6cc3434d5c6148fd7`). Its
standing is exactly what its header says: a **draft** — not locked, not
built. No narration has ever been performed from it as a whole: L1–L11
have intro-v3's locked timings in intro-v3's package (see the
reconciliation below); L12–L13 have no timings anywhere.

The draft's base is intro-v3's locked script
(`files/short-intro-a1-v3-script.md`, sha256
`fe2855e35b6ab9e421c40d7fc46cd3f4c68d46069aa22cf83e9dbd09279529e1`,
byte-carried in intro-v3's package as its `source-script.md`; published
at youtube.com/shorts/7x-m1idAKPU). The v4 draft changes exactly ONE
thing against that base: the new beat L12–L13 (marked ★ in the draft),
required by the **Intro Evolution Plan** (Hadi, 2026-10-22) — the Hadosh
Academy connection stated in the video itself.

## The governing script — 13 lines + cover close

Counts per line: mechanical = whitespace tokens. Spoken = mechanical
minus standalone em-dash tokens. Both counted at this migration
(JOB MIGRATION-29) from the draft's §1 text.

| # | Line | Mech | Spoken |
|---|---|---|---|
| 1 | Welcome. This is Let's Build It Together. | 7 | 7 |
| 2 | Here we learn one thing: how to use agentic AI as a tool. | 13 | 13 |
| 3 | You may have seen AGI drawn as Artificial — a machine apart from us. | 14 | 13 |
| 4 | We mean the other AGI: Augmented. The same tools, in your hands, helping you do more. | 16 | 16 |
| 5 | An agentic LLM can create files and work on them. Give it a goal, and it builds a file system: notes, plans, drafts, and finished work. | 26 | 26 |
| 6 | We start simple. We make videos together, one step at a time. | 12 | 12 |
| 7 | Later, new ideas and examples will come. For now, let's build. | 11 | 11 |
| 8 | This video is an example. An agent made it, step by step, from files. | 14 | 14 |
| 9 | And nothing about its making is hidden. The script, the timings, the code — the whole production context is open. | 20 | 19 |
| 10 | Take it. Give it to your agent. Change it, and make your own. | 13 | 13 |
| 11 | That is how we build here. We make the thing, and we share how it's made. | 16 | 16 |
| 12 ★ | Let's Build It Together is the public front of Hadosh Academy — a project teaching people to build their own software with AI. | 23 | 22 |
| 13 ★ | The Academy lives at hadi-nayebi.github.io. Start there — then come back and build here. | 14 | 13 |
| | **Total** | **199** | **195** |

Inherited (L1–L11): 162 mechanical / 160 spoken. New beat (L12–L13):
37 mechanical / 35 spoken. Four standalone em-dash tokens in total
(L3, L9, L12, L13 — one each).

Cover close (not a narration line): "LET'S BUILD IT TOGETHER." —
carried from v3, held over the end of the final line (v3's production
notes: a 1.2 s hold), and per the draft's DR-1 held unchanged in v4 so
the beat change stays measurable against v3.

The spoken total (195) is the denominator the word-decision layer
carries (`decisions/word-decisions.json`).

## The reconciliation — no divergence

The draft claims L1–L11 are "v3 verbatim". Verified at this migration,
programmatically: each of the eleven lines in the v4 draft is
**character-identical** to the corresponding line of intro-v3's
governing transcript (intro-v3's package, `transcript/transcript.md` —
the locked text), and the counts reproduce intro-v3's two rulers
exactly (162 mechanical / 160 spoken; the same two standalone em-dash
tokens, at L3 "Artificial — a" and L9 "code — the"). The draft governs
nothing yet — it is a draft — but as a copy it is exact: there is one
inherited text, and it is v3's locked one. The scaffold field
`transcript_line_divergence` is DECIDED on this reconciliation.

The standing is mixed, and stated per part: the inherited eleven lines
carry v3's **locked** standing; the two new lines carry **draft**
standing; the whole is not locked, and nothing in this package locks
it. L12's wording additionally carries the owner's open call
(Action #30 — see `metadata.json`, field `academy_beat_wording`); the
line as written above is the text of record until that call lands.

## What is NOT in the governing text — the proposed line

The visual plan (`scene/visual-plan.md`, §3) proposes one more line,
to be inserted after L10: "The link is in the description. Point your
agent at it — and let it shape the whole pattern around your own
videos." (23 mechanical / 22 spoken), with a compact variant — "It is
linked in the description. Point your agent at it — make it yours."
(15 mechanical / 14 spoken). It is **not** part of the governing text:
the plan states in terms that the line goes to Hadi's ear and that the
plan does not edit the script file — and the draft file indeed carries
no such line (verified at this migration: the governing text is 13
lines). Its adoption is board Action #46 (field `proposed_line`). This
package's spoken denominator (195) excludes it; it grows by 22 (full)
or 14 (compact) only if and when the line is adopted into the text.

## Runtime — the draft's projection, and the recomputation

The draft projects ≈71 s: v3's narration (56.184 s, measured —
intro-v3's record) plus "L12–L13 add 30 words at the intro's measured
pace (≈0.51 s/word incl. the 0.4 s line gaps, derived from v3)
≈ +15 s". Two of its three inputs do not reproduce from the records
it cites, counted at this migration:

- The beat is **35 spoken words** (37 mechanical), not 30.
- v3's measured pace from its own record is 56.184 s ÷ 160 spoken
  words = **0.351 s/word** (narration basis; the container basis,
  57.366 s ÷ 160, gives 0.359). The stated 0.51 s/word does not
  reproduce on either basis.

Recomputed on v3's measured pace, the beat adds ≈12.3 s → projected
narration ≈68.5 s, container ≈69.7 s (v3's container adds the 1.2 s
cover hold to its narration). The visual plan's runtime ledger (§4)
inherits the draft's ≈71 s and prices the proposed line at the
catalogue's 0.45 s/word planning pace (+9.9 s full / +6.3 s compact);
recomputed at 0.351 s/word, the same configurations run ≈77.4 s
(full), ≈74.6 s (compact) and ≈73.5 s (full + the draft's pre-logged
L7 cut — L7 is 11 spoken words) on the container basis. Every figure
here is a projection — no v4 timings exist — and the package carries
each document's figures as that document's record, with this
recomputation as the package's own count record; no source file is
edited. The draft's S-03 justification (channel trailer — identity +
proof + invitation — with v3's 57 s as the approved precedent) does
not depend on which projection is used, and stands as the draft
states it.

## The spoken URL (L13)

L13 speaks the Academy's address. The draft's production note 2
pre-decides the spoken rendering ("hadi-nayebi dot github dot io",
with the build's A-05 spot-check verifying it letter by letter) and a
fallback line if the TTS mangles it: "The Academy lives on the web —
its address is on screen." (the URL carried visually only). The
canonical URL stands in the line as written (one mechanical token);
the fallback is a build-time decision already recorded in the draft,
not a second governing text.
