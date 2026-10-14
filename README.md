# Hadosh Production Contexts — video production

**Who Owns the Toaster?** is a music-video working example from [Hadosh Academy](https://hadi-nayebi.github.io/). It follows the web, social media and personal AI tools, asking who keeps the final say.

This branch contains the personal dashboard and illustrated video workflow. The point is not to build a complete production system: software is cheap enough to make a temporary, good-enough tool around one person and one project. It is a context example to study, run and adapt with your own agent—not a one-click generator. Human direction, revisions, timing correction and visual review are part of the workflow.

[Watch the finished music video](https://youtu.be/fg2cV8sh3kY) · [Publication checklist](PUBLISHING.md)

## Choose a workflow

- [Song production](https://github.com/hadi-nayebi/hadosh-production-contexts/tree/song-production): context → lyrics → musical direction → candidate recordings → a selected song.
- **Video production (this branch):** selected recording → word and tempo anchors → scene plans → independent artwork → live HTML animation → reviewed export.
- [Repository overview](https://github.com/hadi-nayebi/hadosh-production-contexts/tree/main).

## Run the dashboard

Requirements: Node.js 22.22.2+, npm, a modern browser. Rendering also requires Chrome and FFmpeg. Match the versions in package-lock.json.

```sh
git clone --branch video-production https://github.com/hadi-nayebi/hadosh-production-contexts.git
cd hadosh-production-contexts
npm ci
npm run dev
```

Use the local URL printed by the server. The song workspace is `/songs/lyrics`; scene creation is phase 4. The illustrative source and artwork are included. Original recordings and personal browser edits are not automatically supplied by a clone. Attach your own authorized audio through the audio workflow. The included take-specific timestamps are examples: they must be replaced or recomputed for another recording.

## Give this context to your agent

Start with [START-HERE.md](START-HERE.md). Ask your agent to inspect this working example, explain which pieces it will reuse, then create a separate project for your song. Keep your own originals and review checkpoints. Do not ask it to silently replace this example or publish anything automatically.

## What to reuse

1. Separate source evidence, human choices and generated suggestions.
2. Tie timing to the exact recording, not merely a song title or duration.
3. Describe a scene, illustrate a visual plan, revise it, then implement it.
4. Give every visual a scene lifetime. Keep backgrounds, words and overlays independent.
5. Make animation deterministic from the audio clock. Use stem-derived cues for rhythmic movement.
6. Review motion and transitions at actual timestamps; still images and passing tests alone do not establish quality.
7. Preserve the selected state before rendering. Review the finished export with sound.

`src/canvas/song/lyricFocus/` contains the later dashboard and scene code. `public/scene-assets/` includes working artwork and retained alternatives. `public/scene-plans/` contains the illustrated plans. [WORKFLOW.md](WORKFLOW.md) maps these patterns to a new song.

## Scope and licenses

The dashboard is a personal tool, with song-specific data, local media paths and experimental features. It needs adaptation; hosted multi-user deployment and automatic music-provider integration are not promised. A port to another agent is engineering work, not a model-name switch.

Code is MIT licensed. See [ASSETS.md](ASSETS.md) for the separate status of artwork, trademarks and music. No credentials, private feedback logs, original audio stems or private repository history are included.

## Development and export context

Read the [development story](https://github.com/hadi-nayebi/hadosh-production-contexts/blob/main/docs/DEVELOPMENT-STORY.md) and [different-song workflow](https://github.com/hadi-nayebi/hadosh-production-contexts/blob/main/docs/ANOTHER-SONG.md). Public branches are curated snapshots, not the original development history. Follow [EXPORT.md](EXPORT.md) for this branch’s exact UI snapshot and rendering recipe.
