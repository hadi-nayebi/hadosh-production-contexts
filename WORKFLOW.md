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
| Release | Selected checkpoint | Export, inspect and listen end-to-end | Master, captions, thumbnail, copy |

## Implementation map

- `src/canvas/song/`: original context, lyric, music and review stages.
- `src/canvas/song/lyricFocus/`: later recording-specific word timing and scene workflow.
- `SceneVideoFrame.tsx`: scene composition and lifetimes.
- `WordVideoRemotion.tsx`: frame-clock export of the same scene implementation.
- `stemAnalysis.ts`: retained rhythmic evidence, not a generic live stem separator.
- `InstructionCortex.tsx`: words forming a file/network metaphor, with deterministic beat-indexed activity.
- `public/scene-plans/`: visual plans and their earlier alternatives.
- `scripts/render-release.mjs`: release-render example. Its temporary-directory and Chrome defaults reflect the original Linux workstation; adapt them to your environment.

## Media and saved state

A clean clone does not contain the original workstation's `.origin` audio files or browser localStorage. Import/attach your own inputs. Export reproducible preview JSON from the Source panel before rendering; it includes scene choices and timing. The public example preserves patterns, not a promise of the original soundtrack playing immediately.

For another song, replace candidate records, lyrics, scene boundaries, timing and media URLs together. Do not keep hardcoded example hashes as the identity of your own audio. Review the code's selected-take assumptions before reuse.
