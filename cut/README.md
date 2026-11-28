# 3.2 Quadrillion Tokens · Claude cut

This folder is the whole film kit for Claude's cut. `index.html` is the compiler and player. `video.json` sets the order of the units, and each `units/*/unit.json` holds every picture and sound decision for its unit. To change the film, edit the JSON or an asset, then reload. You never edit the compiler for content.

## Watch

```sh
cd cut
python3 -m http.server 8000 --bind 127.0.0.1
# open http://127.0.0.1:8000/  — tap to play with sound
```

Controls: tap or Space to play and pause, Home to restart, ← / → to seek five seconds. Add `?t=12.5` to the URL to open on a frame.

## Render the MP4

```sh
npm install playwright        # once; any Chrome/Chromium works (set CHROME=/path)
node tools/render.mjs out.mp4                     # 1920×1080, 30 fps, AAC audio
node tools/render.mjs out.mp4 --from 13 --to 20   # a range
node tools/render.mjs --stills 3,8.5,20 stills/   # PNG frames
```

The renderer draws each frame by calling `window.film.renderAt(t)`, so render speed never affects timing. ffmpeg mixes the same clip list the browser plays.

## Sound

`python3 tools/make_audio.py units/01-scale/unit.json` (needs NumPy) rebuilds the unit's music bed, radio-dial cold open and sound effects from its `sound_design` block. All three are synthesized, so they are license-clear. The music is ducked under the narration's measured envelope, with at least 20 dB of speech-to-music separation on every line.

## How a unit is written

- `time`: `[start, end)` in unit seconds. Tracks are `[[t, value, ease?], …]`, where ease is `linear` or `hold` (smooth by default).
- The artboard is 1000 × 562.5. `at` is a position; text `align` is `left` or `center`.
- Every actor renders into its own `<div id="unit-id/actor-id">`. `text` actors are live DOM text; other actor types draw into a canvas inside their div.
- Actor types: `backdrop`, `agentSnippets`, `dotText`, `text`, `calendar`, `rackBank`, `growth`, `props`, `warmLift`, `wordLoop`, `fade`. To add a type, add one `TYPES.name = {mount, draw}` entry in `index.html`.

## Status

| Unit | Lines | State |
|---|---|---|
| 01 · The scale | cold open, L01–L07 | r1 built. L04/L07 use master takes as timing placeholders until the approved re-takes arrive; agent voices pending. |
| 02 · Tokens at work | L08–L17 | not started |
| 03 · What set this in motion? | L18–L23 | not started |
| 04 · Words to work | L24–L25 | not started |

Credits and sources: [CREDITS.md](CREDITS.md). Transcript: [../film/authoring/claude/transcript.md](../film/authoring/claude/transcript.md).
