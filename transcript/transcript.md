# eo-trailer — locked transcript

Source of text: the approved script doc,
`files/short-eo-trailer-script-draft.md` ("Earth One — CHANNEL
TRAILER script (approved; built as HTML scene v1, 2026-10-23;
v2 fix cycle 2026-10-23)" — approved by Hadi, identity approval,
2026-10-23), byte-copied beside this file as `source-script.md`
(sha256 `6bd3f058ea603b2bca97fce2b46d64bd80dc7c1afb5ec9efba2f61b96fbfb5a4`).
The shipped build is v2: the v2 fix cycle (Hadi's gate on v1 —
the closing family line named Hadosh Academy and Let's Build It
Together with no context) rewrote the family beat under QC T-18
as DR-L8B, splitting it into two lines. Timings: the voice
registry's line windows (`hidden_files/voice-upgrade/registry.json`
pieces[eo-trailer].lines), which derive from the piece's own
timing record, `words.json` (127 word objects with start/end —
`hidden_files/push-trailer-v2/eo-trailer-v2/words.json`).

Line numbering: the registry's L1–L9, used throughout this
package. The script doc's numbered list runs 1–11: its items 1
and 11 are the silent opening and end cards, and its items 2–10
are these 9 spoken lines (registry L1 = script item 2, …,
registry L9 = script item 10). The script doc's per-line jobs
table numbers the spoken lines 2–10 the same way.

## The lines (9 spoken, between two silent cards)

Opening card (no narration, 1.6 s): EARTH ONE over the banner's
timeline landscape.

| Line | Start (s) | Window end (s) | Guide voice end (s) | Text |
|---|---|---|---|---|
| L1 | 1.95 | 7.259 | 6.859 | This is Earth One. One clear idea in every video, in plain words. |
| L2 | 7.259 | 10.78 | 10.37 | Our main story: how information evolved on this planet. |
| L3 | 10.78 | 17.92 | 17.519 | It began inside living bodies. Then it learned to travel — in stories, marks, songs, print. |
| L4 | 17.92 | 23.54 | 23.117 | Information lives in words, so we teach words too: one sentence, five languages. |
| L5 | 23.54 | 28.61 | 28.21 | Two shows. One promise: every video teaches one clear idea about this planet. |
| L6 | 28.61 | 33.66 | 33.228 | An AI agent builds these videos in the open. The scripts are published. Copy the making. |
| L7 | 33.66 | 41.48 | 41.08 | Earth One grows out of Observations — a written series from Hadosh Academy, a project teaching people to build their own software with AI. |
| L8 | 41.48 | 46.18 | 45.709 | That teaching is on video too — on a sister YouTube channel, Let's Build It Together. |
| L9 | 46.18 | 50.4377 | 49.238 | Subscribe, like, and follow Earth One. Start with episode one. |

End card (no narration, 3.4 s): FOLLOW FOR THE REST OF THE STORY
+ THE PLANET'S STORY · WORDS IN 5 LANGUAGES + EARTH ONE.
Scene total 53.8377 s (content end 50.4377 s); delivered render
53.867 s.

Timing provenance, one observation carried openly: words.json's
first word object ("This") starts at 1.48 s, while the
registry's first phrase window for L1 opens at 1.95 s — the
timing record and the phrase-window record differ by 0.47 s at
the first line. Both figures are carried as recorded; which one
the shipped scene's display follows is a playback question for
the package-verification pass, not something this layer asserts.

## The two count rulers — stated, not merged

- **127 spoken word objects** — the registry's per-line word
  counts sum to 127, and words.json holds exactly 127 word
  objects. This is the count the build, the kit and the
  reconciliation all carry, and the denominator of this
  package's word layer (0/127 decided — see
  `decisions/word-decisions.json`). The words.json method note
  states the basis: word timestamps from faster-whisper on the
  guide narration, display words are the locked script's exact
  words mapped onto whisper tokens; "The em-dash tokens in the
  script are punctuation, not spoken, and are excluded."
- **130 mechanical tokens** — a whitespace split of the 9 spoken
  lines as printed above counts 130, because three standalone
  em-dash tokens (L3 "travel — in", L7 "Observations — a", L8
  "too — on") count as tokens mechanically and as no word in
  speech. The registry's per-line texts drop those dashes; the
  script governs the TEXT (dashes printed above, as locked);
  the registry/words.json governs the spoken count. Neither
  ruler is corrected into the other.

## Lineage carried in the record

v1 (built 2026-10-23 from the approved draft) carried two
Hadi-sourced line changes, both logged as Decision Records in
the script doc: DR-L6 — the promise line reworded ("Two shows.
One promise: every video teaches one clear idea about this
planet.", replacing "simple, honest explainers…" under the
anti-signature ruling) and DR-L8 — the relationship line
replaced with the Observations-door wording. v2's fix cycle
then superseded DR-L8's wording with DR-L8B: the single family
line failed Hadi's gate (names without context, QC T-18) and
was split into spoken L7 + L8, each name glossed in its own
breath. The v1 family line is preserved verbatim in the script
doc's iteration log. The closing line's formula wording stands
as locked — and as this package's open field
`banned_formula_L9` (see metadata.json); the two records are
carried, not reconciled here.
