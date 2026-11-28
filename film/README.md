# Quadrillions · L radio tight cut

The four editable chapters run 2 minutes 36.96 seconds at 24 fps. The two example passages shorten the time between the spoken examples. The blackboard holds a single composition while the original chalk drawings and slate turns play.

## Build and play the offline HTML

Run from the repository's `film/` directory with Python 3.

```sh
python3 film.py --standalone Quadrillions-L-radio-tight.html
python3 film.py --unpack editable-tight
python3 film.py --serve-directory editable-tight --port 8000
```

Open the standalone player locally, or visit the local server to work with the editable chapter files. The manifest verifies the active files and the completed standalone export.

## Export the complete editable film

Install FFmpeg, FFprobe and the Python Playwright package with Chromium, then run the following command. `--chromium /path/to/chromium` selects a system Chromium. Browser and codec versions can change encoded bytes.

```sh
python3 render.py Quadrillions-L-radio-tight.mp4 --cache render-cache
```

## Reproduce the reviewed edit from the preceding master

The review master uses the previous export's picture for the retained frames before the board. Its input is `Quadrillions-L-r4-radio.mp4` with SHA-256 `71172882e44a127a6afd7fc71814a411f450b047e14e948a9be5a4258cfb43ad`. The previous source revision is `ae5b3f9f9ee6b58d4a3c106456a1f4377de9ae14`.

```sh
python3 film.py --unpack editable-tight
python3 authoring/m7/render_board.py editable-tight . /path/to/chromium board-cache board.mp4
python3 authoring/m7/cut_master.py Quadrillions-L-r4-radio.mp4 board.mp4 . editable-tight authoring/m7/edit-map.json mux-cache Quadrillions-L-radio-tight.mp4
```

`authoring/m7/edit-map.json` records each retained original Unit Two frame and both edits to the audio in 24 fps frame units. To re-author the timing from the preceding editable chapter, run `edit_examples.py` with the previous Unit Two directory and an output directory. It requires NumPy and SciPy. `steady_board.py` recreates the board composition from the previous Unit Four JSON. The finished chapter files and audio are also included in the runtime.

## Credits

The receiver includes an excerpt of [AM Tuning.wav by NobodyYouKnowOf](https://freesound.org/people/NobodyYouKnowOf/sounds/261873/) under CC0. The instrumental track uses an excerpt of *Vibe Ace* by Kevin MacLeod, edited for timing and level, under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
