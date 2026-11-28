# Quadrillions · L r4 with the radio opening

This edition restores the L r4 cut. The first chapter opens with the later receiver sequence. The rack comparison uses the original L rising graph, the two amounts, the numerical multiplier, and the years below their respective racks. Units Two, Three, and Four retain L r4's editable chapters, artwork, audio, and timings.

## Play and edit

The following commands run from the repository's `film/` directory. Python 3 is sufficient to build and verify the single-file offline player.

```sh
python3 film.py --standalone Quadrillions-L-r4-radio.html
python3 film.py --unpack editable-L-radio
python3 film.py --serve-directory editable-L-radio --port 8000
```

Open the HTML locally, or visit the local server to review changes to the unpacked scene tree. Source timing, positions, artwork and audio references are in each chapter's `unit.json`. The manifest verifies every active asset and the built HTML.

## Render from the editable chapters

Install FFmpeg, FFprobe and Chromium, then run the following commands. The renderer captures the authored scene at 24 fps and mixes its 24 kHz stems. The output is 1280 × 720. Browser and codec versions affect compressed bytes.

```sh
python3 -m pip install playwright
python3 -m playwright install chromium
python3 render.py Quadrillions-L-r4-radio.mp4 --cache render-cache
```

The review master carries forward L r4's original encoded picture after the revised opening. To recreate this edit from the checksum-pinned original MP4, use the following command.

```sh
python3 authoring/m6/build_master.py Quadrillions-V03-L-r4.mp4 Quadrillions-L-r4-radio.mp4 --chromium /path/to/chromium
```

## Sources of the edit

The authoritative L r4 files are the `Quadrillions-V03-L-r4-editable-verified.html` and `Quadrillions-V03-L-r4.mp4`. Their SHA-256 digests are `e97950f47f36584ce0535bf7ffd9a7c6628ac3b46238c1fe9f31f5e3d8a350f8` and `dd9c21a4438eb188f2b3b8275917fb6a2a0911fa7b9e7736b8dd343c7a33e324`, respectively. The receiver donor is production commit `dcd873cfe8aafe3b3294667033d60a68fe7b87dd`. The included `authoring/m6/build_intro.py` recreates the first chapter from the two editable source chapters with NumPy and SciPy. Their active media are included here.

The receiver includes an excerpt of [AM Tuning.wav by NobodyYouKnowOf](https://freesound.org/people/NobodyYouKnowOf/sounds/261873/) under CC0. The instrumental track uses an excerpt of *Vibe Ace* by Kevin MacLeod, edited for timing and level, under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
