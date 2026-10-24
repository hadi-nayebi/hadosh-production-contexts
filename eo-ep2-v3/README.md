# Earth One Ep.2 v3 — "The Story Was the First Backup" — production context

This folder is the complete production context of Earth One
episode 2 in its v3 form: the word-animation rebuild of the published
plate version (https://youtube.com/shorts/0JspT5oOgsk), built under
the HTML-Scene Law — the video is ONE self-contained interactive
HTML scene, and the MP4 is rendered from that file.

The v3 scene is the proof build for the format: if it passes review,
this architecture becomes the template for every Earth One rebuild
(Ep.1 next) and the plate versions are replaced.

## What's in this context

| File | What it is |
| --- | --- |
| `index.html` | The video itself as ONE self-contained playable file — open it in any browser (file:// works, no server, no external references). Scene plates, fonts, and the narration+music mix are embedded; every visual element is a separate hoverable component. |
| `short-eo02-story-script.md` | The locked script — every word, in order, with the production notes. |
| `words.json` | The timeline: every narration word with its measured start/end time (faster-whisper alignment); this drives the word animation in both the HTML and the MP4. |
| `layout_log.json` | The word-placement plan: every phrase's scene, band, per-word position/size/emphasis, exactly as QC-verified — plus the placement-violation counters (all zero). |

## Decision Records (Q-0)

Every element's Decision Record — choice, alternatives considered,
context it serves, why this one won, what would change it — lives
INSIDE `index.html`, in its `#decisions` data block and the on-page
production-context panel. Coverage: **20 of 20 elements recorded,
0 undecided.** An element with an empty record would count as a
random choice and fail the piece's Qualifying Pass; there are none.

## How the video was made (the workflow)

1. **Script first.** Words locked before the build (see the script
   file). The v3 rebuild changed NO words and NO audio: the
   delivered v2 mix is carried bit-exact; only the visual layer
   changed.
2. **Word alignment.** The locked narration was aligned with
   faster-whisper word timestamps → `words.json`.
3. **Scene.** One HTML file: background artwork as full-frame
   plates, narration words as animated HTML/CSS components timed
   from `words.json`, placed per scene in planned negative space
   (sky bands), at most 3 words on screen, key words emphasised.
   NO subtitle plate anywhere — the plate is what v3 removes.
4. **Render.** Headless Chromium steps the scene's `renderAt(t)`
   timeline frame by frame at 30 fps; frames + the bit-exact audio
   make the MP4 (54.54 s, 1080×1920, mastered −14.02 LUFS /
   TP −1.82 dB, measured on the delivered file).

## Copy it and make your own

Take this folder, give it to your agent with your words, your
artwork, your timeline — the same workflow (lock script → align
words → build the scene → render) produces your video with the same
word-perfect timing. The context is disposable; the pattern is the
asset.
