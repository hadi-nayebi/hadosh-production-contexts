# Earlier dashboard: exploration and prototype machinery

This branch contains the broad first dashboard, including later experiments in word timing and a live visual stage. It is not the lyrics-first rebuild. Read the [development story](https://github.com/hadi-nayebi/hadosh-production-contexts/blob/main/docs/DEVELOPMENT-STORY.md) and [different-song workflow](https://github.com/hadi-nayebi/hadosh-production-contexts/blob/main/docs/ANOTHER-SONG.md) for the wider sequence.

## Files that exist on this branch

| Purpose | Implementation |
|---|---|
| Idea, lyric and music choices | `src/canvas/song/ContextStage.tsx`, `LyricsStage.tsx`, `MusicStage.tsx` |
| Early lyric alternatives | `src/canvas/song/toaster-iterations.json` (historical drafts) |
| Listening and timestamped notes | `src/canvas/song/ListeningDesk.tsx`, `listening.ts`, `audioCache.ts` |
| Original stage review/export | `src/canvas/song/ReviewStage.tsx`, `export.ts` |
| Experimental animated stage | `src/canvas/song/liveStage/`, `wordMotion/` |
| Legacy rendered previews | `scripts/render-live-scene.mjs`, `render-browser-words.mjs` |

`src/canvas/song/lyricFocus/` and `scripts/render-release.mjs` do **not** exist here. For the later film export, use [video-production](https://github.com/hadi-nayebi/hadosh-production-contexts/tree/video-production) and its own EXPORT.md. Do not pass an early stage JSON file into the later exporter.

## Run and retain a small exploration

From the repository root, use the README's supported Node version, `npm ci`, then `npm run dev`. Open the local URL printed by the server and `/songs`. The production stages retain context → lyrics → music → timing → scenes → review. Other retained listening/live-stage surfaces show the first round of visual experimentation.

Bring your own authorized audio. Generation in an external service is a separate, owner-authorized action. Compare takes for wording, phrasing and pauses; keep the chosen lyric/music revisions with the recording rather than assuming all versions are interchangeable.

In the original Review stage, **Export production context** downloads `canvas-song.json`. The HTML export controls are **Export HTML · attach audio later** and **Export HTML with audio**, subject to the stage's review gates. Listening notes have their own export. These are distinct from the later reproducible scene snapshot. Browser storage and exports preserve different parts of the work: save both project and listening evidence before moving environments.

## Legacy renderer boundary

`render-live-scene.mjs` consumes this branch's scene schema and validates historical source identity. It defaults to a retained L1 source under `.origin/song-media/r7/` and supports `CANVAS_SONG_AUDIO`, but overriding the path does not remove hash, duration, arrangement and approval requirements. It is a historical renderer to inspect/adapt, not a tested one-command exporter for an arbitrary new song. No clean-clone export of that original recording is claimed without its excluded media and state.

## Analysis portability

Basic onset estimation uses Python 3's standard library plus FFmpeg:

```sh
python3 scripts/analyze-song-rhythm.py /absolute/path/to/your-song.wav /absolute/path/to/onsets.json
```

Use a new output file. The result contains candidates, not verified beat or lyric times. `check-song-audio.py SOURCE VIDEO` compares decoded audio windows; correlation is not a listening approval.

`analyze-scene-foundation.py` and `analyze-scene-rhythm.py` also import NumPy/SciPy. Install them in an isolated environment if needed:

```sh
python3 -m venv .venv
. .venv/bin/activate
python -m pip install numpy scipy
```

Inspect arguments/defaults first. The scene-rhythm script hardcodes the original L1 path/hash, a passage window and `/dev/shm`; adapt those deliberately in your working copy. Do not run it expecting to discover your song automatically. Audio, Python environments and generated analysis should stay outside the public source unless explicitly selected for sharing.
