# Claude cut · Asset manifest

Every asset the film uses, where it lives, who makes it and its status. The unit JSON points to these by id. The compiler never draws content of its own.

## Requested from ChatGPT / Codex

Deliver by Git commit on `quadrillions/film-source` under `film/assets/claude-in/<unit>/<file>` (the same route as the voice takes). Please also mirror to the `assets-in` folder in Claude's shared Drive project folder for Hadi. Claude copies each file into the path below.

| ID | Destination in this branch | Format and size | Prompt | Acceptance | Fallback (already in branch) |
|---|---|---|---|---|---|
| A1 | `cut/units/03-origin/assets/img/desk.jpg` | JPEG q85, 3840×2160 | Top-down photograph of an empty dark walnut desk surface, warm desk-lamp light from the upper left falling off to soft shadow toward the edges, subtle natural wood grain running horizontally, no objects, no text, photographic, even exposure across the center 60%. | No objects or text. The grain runs horizontally. The center 60% is evenly lit (no hotspot). | `svg/desk-fallback.svg` |
| A2 | `cut/units/03-origin/assets/img/paper.png` | PNG, 2048×2048, seamless tile | Seamless tileable texture of off-white cotton paper, very subtle fibers and tooth, no folds, no stains, no text, flat even light. | It tiles with no visible seam at 2×2. Average color is close to #F4EDDF. | `svg/paper-texture-fallback.svg` |
| A3 | `cut/units/03-origin/assets/img/library.jpg` | JPEG q85, 3840×3840 | Straight top-down view onto a large library: rows of tall bookshelves seen from above, arranged in rings radiating around a small empty circular clearing in the exact center (the clearing about 11% of the image width), warm light, thousands of colorful book spines visible along the shelf tops, no people, no text. | The clearing is centered and spans 10–12% of the width. The view is straight down. | `svg/library-fallback.svg` |
| A4 | `cut/units/04-board/assets/img/board.jpg` | JPEG q85, 3840×3456 (10:9) | Front-on photograph of a large, slightly worn green-black school blackboard filling the whole frame, faint erased-chalk haze, a wooden chalk rail along the bottom edge, no writing, even light. | No writing. The rail is within the bottom 4% of the image. Even light. | `svg/board-fallback.svg` |
| A5 | `cut/units/02-work/assets/img/landmask.png` | PNG grayscale, 2048×1024 | Equirectangular world map, land pure white, ocean pure black, no borders, labels or graticule, accurate coastlines (Natural Earth 1:50m style). | Equirectangular, exactly 2:1. Pure black and white only. | `img/landmask-fallback.png` (coarse outlines) |

## Delivered by ChatGPT / Codex (in branch)

| Asset | Path | Source |
|---|---|---|
| Narration re-takes L01, L04, L07, L20, L22, L23 | `cut/assets/audio/narration/` | Codex, film-source `2e4cdc8` (FAL, Hadi's approved reference) |
| Agent voices A1–A4 | `cut/assets/audio/agents/` | Codex, film-source `2e4cdc8` (Kokoro, four voices) |
| Narration master | `cut/assets/audio/narration/master.wav` | Hadi's original recording |

## Made by Claude (in branch)

| Asset | Path |
|---|---|
| Copy decks (every on-screen string) | `cut/units/*/assets/copy.json` |
| Sound content (scores, effect events) | `cut/units/*/assets/audio-spec.json` → rendered to `assets/audio/*.wav` by `tools/make_audio.py` |
| Unit 1 drawings | `cut/units/01-scale/assets/svg/arc-two-years.svg` |
| Unit 2 drawings | `cut/units/02-work/assets/svg/`: 5 devices, token and electric circuits, 4 electrical loads, building, city, region, 2 engines, mini-wave, mini-search, text-line, landmask fallback |
| Unit 3 drawings | `cut/units/03-origin/assets/svg/`: paper sheet, dictionary, tile, blank tile, tab, stamp, imprint, block, layer, desk / library / paper fallbacks |
| Unit 4 drawings | `cut/units/04-board/assets/svg/`: all chalk strokes, eraser, board fallback |
| Fonts (SIL OFL or free licenses) | `cut/assets/fonts/` |
