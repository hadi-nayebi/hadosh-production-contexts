# Adapt the production pattern

| Step | Input | Work and review | Durable output |
|---|---|---|---|
| Message | Owner's idea and references | Choose the story and audience | Context and decisions |
| Song | Lyrics, sections, musical direction | Iterate outside/inside the dashboard; compare takes | Selected lyric and recording |
| Timing | Exact audio and optional stems | Estimate words/beats, then correct by listening | Recording-bound anchors |
| Visual planning | Small scene descriptions | Infographics, corrections, clear boundaries | Consolidated visual plans |
| Artwork | Plans and continuity references | Backgrounds, cutouts, image sequences | Assets with provenance |
| Performance | Anchors and scene assets | Camera, typography, lighting, rhythm | Live HTML preview |
| Polish | Timestamped feedback | Watch transitions; preserve good decisions | Selected checkpoint |
| Release | Selected checkpoint | Export, inspect and listen end-to-end | Master, thumbnail, copy; reviewed captions if produced |

## Implementation map

- `src/canvas/song/`: original context, lyric, music and review stages.
- `src/canvas/song/lyricFocus/`: later recording-specific word timing and scene workflow.
- `SceneVideoFrame.tsx`: scene composition and lifetimes.
- `WordVideoRemotion.tsx`: frame-clock export of the same scene implementation.
- `stemAnalysis.ts`: retained rhythmic evidence, not a generic live stem separator.
- `InstructionCortex.tsx`: words forming a file/network metaphor, with deterministic beat-indexed activity.
- `public/scene-plans/`: visual plans and their earlier alternatives.
- `scripts/render-release.mjs`: release-render example. See [EXPORT.md](EXPORT.md) for exact snapshot steps, source verification, portable browser/audio/scratch settings and verification limits.

## Media and saved state

A clean clone does not contain the original workstation's `.origin` audio files or browser localStorage. Import/attach your own inputs. Export reproducible preview JSON from the Source panel before rendering; it includes scene choices and timing. The public example preserves patterns, not a promise of the original soundtrack playing immediately.

For another song, replace candidate records, lyrics, scene boundaries, timing and media URLs together. Do not keep hardcoded example hashes as the identity of your own audio. Review the code's selected-take assumptions before reuse.

## Analysis dependencies and original-path assumptions

Python helpers require Python 3 and FFmpeg/ffprobe. `analyze-song-rhythm.py` and `check-song-audio.py` use the standard library; the scene analyzers and `import-audio-stems.py` additionally need NumPy/SciPy. Use an isolated environment (`python3 -m venv .venv`, activate it, then `python -m pip install numpy scipy`). These are optional offline analyses, not requirements to view the dashboard.

The stem importer hardcodes two original download folders, take IDs, matching MP3 paths and a 12-stem naming convention. It writes `hqAudioAssets.json`, links retained audio on the same filesystem, and expects provider ID metadata. Do **not** run it unchanged for another song. Adapt its input manifest and output path in your own project, validate source identity and time origin, and preserve existing annotations. Cross-filesystem hard links need an explicit copying strategy. Scene-rhythm analysis also contains an original hash/path and `/dev/shm` assumption; inspect before use. Historical JSON paths are not portable source files.

See the [different-song handoffs](https://github.com/hadi-nayebi/hadosh-production-contexts/blob/main/docs/ANOTHER-SONG.md) for decisions and outputs to keep at each step.
