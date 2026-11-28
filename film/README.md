# Quadrillions · Fixed camera cut

The four editable chapters run 2 minutes 36.96 seconds at 24 fps. The example stage frames the cabinet beside the complete display. The library scene holds the full table while its paper, words, attention arcs and prediction remain animated. The final table pose is also the departing face of the original blackboard turn.

## Build and play the offline HTML

Run these commands from the repository’s `film/` directory with Python 3.

```sh
python3 film.py --standalone Quadrillions-L-radio-fixed-camera.html
python3 film.py --unpack editable-fixed
python3 film.py --serve-directory editable-fixed --port 8000
```

Open the standalone HTML locally, or use the local server to edit each chapter's scene tree and artwork. The manifest verifies the active files and the compiled standalone export.

## Render the film

The editable scene renderer requires FFmpeg, FFprobe, Playwright and Chromium.

```sh
python3 -m pip install playwright
python3 -m playwright install chromium
python3 render.py Quadrillions-L-radio-fixed-camera.mp4 --cache render-cache
```

For the reviewed export, the command below renders the fixed camera shots, retains the original infinity movement, reuses the preceding master’s audio packets, and preserves the later blackboard. Supply the previous **L radio tight** MP4. Its SHA-256 is `9a48f891f1732bae3cccc0cdba327188211af403e31bcd0032122528bd85cd36`. Browser and codec versions can affect compressed bytes.

```sh
python3 authoring/m8/build_master.py Quadrillions-L-radio-tight.mp4 Quadrillions-L-radio-fixed-camera.mp4 --chromium /path/to/chromium
```

## Edit the camera compositions

The previous source revision is `5e8aec9c9d21bebb13e0a8fd806847f8fdd3c526`. The fixed compositions and their new plates are included in the current source. To trace how they were made, see `authoring/m8/lock_frame.py` for the cabinet and display, `fixed_table.py` for the library and table, and `bridge.py` for the departing slate face. The table recomposition uses Pillow, NumPy and SciPy. The previous tight-cut pacing and example frame map are in `authoring/m7/`.

## Credits

The receiver includes an excerpt of [AM Tuning.wav by NobodyYouKnowOf](https://freesound.org/people/NobodyYouKnowOf/sounds/261873/) under CC0. The instrumental track uses an excerpt of *Vibe Ace* by Kevin MacLeod, edited for timing and level, under [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/).
