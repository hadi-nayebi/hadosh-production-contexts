# 3.2 Quadrillion Tokens · M4

M4 is the 2 minute 19.75 second editorial cut of the 24 fps film. The countdown, the four chapter JSON files, the HTML compiler, two voice/music tracks for each chapter, and the media archives in this folder reproduce the film. Python 3 is the only dependency for unpacking, serving, and compiling the portable edition.

Run `python3 film.py` to watch the film locally. For a single offline player, run `python3 film.py --standalone Quadrillions-M4.html`. For the individual runtime assets and editable chapter trees, run `python3 film.py --unpack editable-M4`. The packer compares the standalone SHA-256 with the reviewed edition. The chapter JSON stores layout on a 1,000 × 562.5 artboard and timing in seconds.

## Render an MP4

From the `film/` folder, install Python Playwright and its Chromium browser. Make sure `ffmpeg` and `ffprobe` are on your PATH. FFmpeg needs H.264 and AAC encoding support.

```sh
python3 -m pip install playwright
python3 -m playwright install chromium
python3 render.py Quadrillions-M4.mp4 --cache render-cache
```

Run the same render command after an interruption to reuse completed shots. Use `--chromium /path/to/chromium` to select an existing Chromium executable. The renderer uses the chapter timing in the source and combines the narration and music stems with the picture.

The first paragraph uses a robotic voice that recedes as the camera pulls back. A brief radio tuning sound introduces the original narrator on “3.2 quadrillion tokens.” Opening word timings appear in `authoring/m4/opening-cues.json`. The original recording compares the Industrial Revolution’s physical power with cognitive power in one uninterrupted sentence. The illustrated camera passes from the server to the kitchen, city and Earth. Four spoken examples have been removed. The per-frame optical conversion and dialogue timing are in `authoring/m4/camera-map.json` and `authoring/m4/analogy-cues.json`. The bid prices and the 50-token-per-second draft are worked examples. Sources for the data and AI results are listed below.

- [Alphabet investor presentation, June 2026](https://s206.q4cdn.com/479360582/files/doc_events/2026/Jun/02/Alphabet-Investor-Presentation-June-2026.pdf).
- [Epoch AI, estimating usable public human-generated text](https://epoch.ai/publications/will-we-run-out-of-data-limits-of-llm-scaling-based-on-human-generated-data).
- [DeepMind, Olympiad mathematics](https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/).
- [DeepMind, AlphaEvolve and data-center scheduling](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/).

Music is *Vibe Ace* by Kevin MacLeod, a [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) excerpt with fades and level adjustment. The seven takes recorded for the previous cut are documented in `authoring/m3/narration.json`. M4 replaces T5 and T8 with the continuous original comparison.


## Re-edit the M4 sequences

The opening voice and radio effect can be regenerated with Python, NumPy and SciPy. From the reviewed M3 source at commit `635dbd64082d11fb854c2ef06b5a4ee16f3db0bc`, unpack the film to obtain the original chapter stems. Run `python authoring/m4/author_opening.py INPUT_SPEECH.wav OUTPUT_SPEECH.wav` for chapter one. Chapter two’s `author_analogy.py --help` describes the inputs for restoring its original recording. Each authoring file uses the provided timing map. To regenerate the opening, rack, desk and board camera tracks, run `python authoring/m4/build_picture.py BASE_RUNTIME OUTPUT_RUNTIME` using the unpacked M3 source as the base. Rebuild the Unit Two path using `retime_camera.py --help` and its adjacent motion profile. `compose_unit2.py` takes the original Unit Two JSON, the resulting camera map and the output JSON path. The final scene tracks remain editable in each chapter JSON. Exported previews, review tables and planning materials are kept in the project's shared Google Drive.
