# 3.2 Quadrillion Tokens

The editable four-unit film includes a countdown, browser player and compiler (`index.html`), `video.json`, one `unit.json` per chapter, and all referenced images, motion clips, speech and music. The artwork and media live in ZIP archives under `assets/`, grouped by chapter and type. Each archive preserves the editable asset paths. `source-manifest.json` records the SHA-256 of every file.

With Python 3 installed, run `python3 film.py` in this folder and open the displayed address. Playback and sound start when you press Play. To edit loose assets and JSON, run `python3 film.py --unpack editable-film`, then serve that folder with `python3 film.py --serve-directory editable-film`. To generate the portable offline player, run `python3 film.py --standalone Quadrillions.html` and open the file. No account, external media, Python packages, or network connection is needed after checkout.

Music: **Vibe Ace** by Kevin MacLeod, [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/). The film uses an excerpt with fades and level adjustments.
