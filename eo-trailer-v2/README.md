# Earth One channel trailer v2 — production context

This folder is the complete production context of the Earth One
channel trailer v2 (live as the channel's spotlight for
non-subscribers: https://youtube.com/shorts/4ovgwcMxGxk, unlisted —
trailers are set as channel spotlight, not published to the feed).

v2 is a one-beat fix of v1: v1's closing "family" line named Hadosh
Academy and Let's Build It Together with no context — a cold viewer
could not tell the Academy is a project or the other name a sister
YouTube channel. The fix follows the standing rule it created
(QC T-18): no name without its context in the same breath. In v2
every name arrives glossed: Earth One grows out of Observations,
a written series from Hadosh Academy — a project teaching people to
build their own software with AI — and that teaching lives on video
on a sister channel, Let's Build It Together.

## What's in this context

| File | What it is |
| --- | --- |
| `index.html` | The trailer as ONE self-contained playable HTML scene — open it in any browser (file:// works). Artwork, fonts and audio embedded; every element a separate hoverable component. |
| `short-eo-trailer-script.md` | The approved script document — the beat map, the narrative declaration, and the v1→v2 iteration log including the T-18 fix. |
| `words.json` | Every narration word with its measured start/end time; drives the word animation in the HTML and the MP4. |
| `layout_log.json` | The word-placement plan, exactly as QC-verified. |

## Decision Records (Q-0)

Every element's Decision Record — choice, alternatives, context,
why this one won, what would change it — lives INSIDE `index.html`
(`#decisions` block + on-page context panel). Coverage: **14 of 14
elements recorded, 0 undecided.**

## How it was made

Lock the script → synthesize narration → align words (whisper
timestamps) → build ONE HTML scene (plates + animated word
components in planned negative space; no subtitle plate) → render
the MP4 from the scene frame by frame at 30 fps (53.87 s,
1080×1920). Same workflow as every piece in this repository:
the context is disposable; the pattern is the asset.
