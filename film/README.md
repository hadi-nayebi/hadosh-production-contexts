# 3.2 Quadrillion Tokens · M3

M3 is the complete, editable 24 fps cut. The countdown, the four chapter JSON files, the HTML compiler, two voice/music tracks for each chapter, and the media archives in this folder reproduce the film. Python 3 is the only dependency for unpacking, serving, and compiling the portable edition.

Run `python3 film.py` to watch the film locally. For a single offline player, run `python3 film.py --standalone Quadrillions-M3.html`. For the individual runtime assets and editable chapter trees, run `python3 film.py --unpack editable-M3`. The packer compares the standalone SHA-256 with the reviewed edition. The chapter JSON stores layout on a 1,000 × 562.5 artboard and timing in seconds.

## Render an MP4

From the `film/` folder, install Python Playwright and its Chromium browser. Make sure `ffmpeg` and `ffprobe` are on your PATH. FFmpeg needs H.264 and AAC encoding support.

```sh
python3 -m pip install playwright
python3 -m playwright install chromium
python3 render.py Quadrillions-M3.mp4 --cache render-cache
```

Run the same render command after an interruption to reuse completed shots. Use `--chromium /path/to/chromium` to select an existing Chromium executable. The renderer uses the chapter timing in the source and combines the narration and music stems with the picture.

The new narration uses the same approved FAL Chatterbox reference as the preceding film. The bid prices and the 50-token-per-second draft are worked examples. Sources for the data and AI results are listed below.

- [Alphabet investor presentation, June 2026](https://s206.q4cdn.com/479360582/files/doc_events/2026/Jun/02/Alphabet-Investor-Presentation-June-2026.pdf).
- [Epoch AI, estimating usable public human-generated text](https://epoch.ai/publications/will-we-run-out-of-data-limits-of-llm-scaling-based-on-human-generated-data).
- [DeepMind, Olympiad mathematics](https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/).
- [DeepMind, AlphaEvolve and data-center scheduling](https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/).

Music is *Vibe Ace* by Kevin MacLeod, a [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/) excerpt with fades and level adjustment. The seven new narration lines are recorded in `authoring/m3/narration.json`.
