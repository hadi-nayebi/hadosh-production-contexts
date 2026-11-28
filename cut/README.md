# 3.2 Quadrillion Tokens · Claude cut

The film kit has three layers, kept strictly apart (see [CONTRACT.md](CONTRACT.md)):

- **Compiler**: `index.html`. Video-agnostic: it draws whatever the JSON and assets describe.
- **JSON**: `video.json` and `units/*/unit.json`. Every decision: structure, timing, placement, motion, camera, styling, sound placement.
- **Assets**: `assets/` and `units/*/assets/`. Everything seen or heard: SVG designs, images, fonts, voice takes, the copy decks with every on-screen string, and the audio specs with every note and sound event.

The director's plan is [PLAN.md](PLAN.md), and the asset list is [ASSETS.md](ASSETS.md).

## Watch

```sh
cd cut
python3 -m http.server 8000 --bind 127.0.0.1
# open http://127.0.0.1:8000/   tap to play with sound; Space pause, Home restart, ← → seek 5 s, ?t=12.5 opens on a frame
```

## Build the MP4

```sh
npm install playwright                       # once; any Chrome/Chromium works (CHROME=/path)
python3 tools/make_audio.py units/*/assets/audio-spec.json   # synthesize music and effect stems (NumPy)
python3 tools/mix.py mix.wav --report        # place every clip as the JSON says; ducking; separation report
node tools/render.mjs video picture.mp4      # 1920x1080, 30 fps, 6-sub-frame motion blur (chunks: --from/--to)
node tools/render.mjs mux picture.mp4 mix.wav film.mp4      # loudness-normalised AAC
python3 tools/qa.py film.mp4                  # frozen-stretch, single-frame-pop and loudness checks (thresholds in video.json "qa")
node tools/validate.mjs                      # the JSON obeys the contract
```

Other render modes: `node tools/render.mjs stills dir 3,8.5,20` and `node tools/render.mjs sheet out.jpg --from 0 --to 40 --every 2`.

## Units

| Unit | Lines | World | Length |
|---|---|---|---|
| 01 · The scale | cold open, L01–L07 | a living swarm of light | 41.4 s |
| 02 · Tokens at work | L08–L17 | a working circuit diagram, then an infinity zoom out to Earth | 49.4 s |
| 03 · What set this in motion? | L18–L23 | a stop-motion paper tabletop that lifts into a library | 37.4 s |
| 04 · Words to work | L24–L25 | chalk on a blackboard | 23.6 s |

Credits and sources: [CREDITS.md](CREDITS.md). Transcript: [../film/authoring/claude/transcript.md](../film/authoring/claude/transcript.md).
