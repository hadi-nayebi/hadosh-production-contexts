# Intro v3 — a video whose production context is the product

This is the complete production context of the **Let's Build It
Together** channel intro (v3). The video's closing promise is the
point of this folder:

> "This video is an example. An agent made it, step by step, from
> files. And nothing about its making is hidden… Take it. Give it to
> your agent. Change it, and make your own."

Everything that made the video is here, open, and copyable.

## What's in this context

| File | What it is |
| --- | --- |
| `index.html` | The video itself as ONE self-contained playable file — open it in any browser and press Play. Audio and images are embedded inside it; it needs nothing else. |
| `short-intro-a1-v3-script.md` | The locked script — every word, in order, with the production notes. |
| `words.json` | The timeline: every word of the script with its measured start/end time (this is what drives the word-by-word animation in both the HTML and the rendered MP4). |

The rendered MP4 (`intro-v3.mp4`, 1080×1920) is produced from this
same context; the HTML and the MP4 are two renders of one timeline,
so they cannot drift apart.

## How the video was made (the workflow)

1. **Script first.** The words were locked before anything was built
   (see the script file — lines 1–7 are the channel intro; lines 8–11
   are the closing section that describes this very context).
2. **Narration.** Each line was synthesized separately (stock TTS
   voice, calm speed), then the lines were joined with short, even
   gaps into one narration track.
3. **Word alignment.** The narration was run through speech
   recognition with word timestamps (Whisper, base model), and the
   script's exact words were mapped onto the measured timings. That
   mapping is `words.json`. No hand-timing: every word's on-screen
   moment is measured from the audio.
4. **Scenes.** Each line gets one type-led scene in a fixed house
   palette (dark charcoal, cyan, amber), drawn programmatically —
   the words are the visuals: a word appears at its timestamp, lights
   amber while spoken, then settles. The middle of the video uses the
   channel's AGI-vs-AGI panels (Artificial, dimmed → Augmented, lit).
   The closing scenes show this production's own file tree, the open
   context, and the copy move to a second project.
5. **Render.** One timeline renders both outputs: the playable HTML
   (CSS/SVG scenes + embedded audio) and the MP4 (frames rendered at
   30 fps, mastered to ≈ −14 LUFS / true peak ≤ −1 dBTP).

## Copy it and make your own

1. Take this whole folder — that's the context.
2. Give it to your agent and say what should change: your words in
   the script, your name, your panels/images, your scenes.
3. The agent re-runs the same workflow: synthesize → align → rebuild
   `words.json` → render. Your video comes out with the same
   word-perfect timing, saying your thing.
4. Keep what you like, throw the rest away. The context is
   disposable; the pattern is the asset.

That is how we build here: we make the thing, and we share how it's
made.
