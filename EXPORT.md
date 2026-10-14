# Export the later scene workspace

This recipe applies only to `video-production` and descendants containing `lyricFocus/` and `render-release.mjs`. It does not import the earlier dashboard's `canvas-song.json` schema. Start with a small reviewed passage; another song requires adaptation of the example's scene/candidate assumptions.

## Prerequisites

- A Node version allowed by package.json, `npm ci`, Chrome/Chromium, and FFmpeg/ffprobe on PATH.
- The exact authorized audio used by the scene and its SHA-256. Original audio/stems are not included.
- Artwork referenced by the chosen scene, plus enough free space in both the output and scratch filesystem. `public/` assets are linked by default; they must remain available throughout rendering. For systems without symlink support, set `RELEASE_COPY_ASSETS=1` and budget for a full asset copy.
- Your saved annotation and scene state. A clone does not bring over personal browser storage or original local media URLs.

## 1. Export the selected state from the UI

Run `npm run dev` from the repository root. Open the printed local URL, go to `/songs/lyrics`, choose the intended recording, then **Scene creation** (phase 4). Confirm the displayed recording and scene, including manual timing corrections. In **Source**, click **Save reproducible preview data**. Save the JSON outside Git. If downloading is blocked, the read-only “Reproducible preview JSON” field contains the same export.

The JSON must contain `annotation.duration`, `scenePlan`, `audioUrl` and `playbackSha256`; it may also retain original annotations, stem preview IDs, visual timing and scene schedule. Export from scene mode: a word-only snapshot is deliberately rejected. The historical `sceneBuild` label is not a complete source version identity; record your Git commit alongside the snapshot hash.

The audio URL may point to a local server. Keep that server alive, or set `RELEASE_AUDIO_FILE` to the **same bytes** at a new local path. The exporter verifies the hash either way. It never silently substitutes a similar take or rewrites the snapshot on disk.

## 2. Render a short sample

These are POSIX shell examples; replace every path. Use a new output directory for each run.

```sh
node scripts/render-release.mjs --help
CHROMIUM_EXECUTABLE=/path/to/chrome \
RELEASE_AUDIO_FILE=/path/to/selected-master.wav \
RELEASE_SAMPLE_START_SECONDS=10 \
node scripts/render-release.mjs /path/to/scene-snapshot.json /path/to/sample-output sample
```

The sample covers up to two seconds, clipped at the recording end. Choose a time inside your own recording; the former fixed 150-second sample was specific to the Toaster film. The changed helper no longer renders a fixed list of Toaster-only stills.

## 3. Export the complete scene

```sh
CHROMIUM_EXECUTABLE=/path/to/chrome \
RELEASE_AUDIO_FILE=/path/to/selected-master.wav \
node scripts/render-release.mjs /path/to/scene-snapshot.json /path/to/full-output full
```

Output: `who-owns-your-toaster-1080p60.mp4` (historical filename, safe to rename after export), H.264, 1920×1080, 60 fps, requested AAC bitrate 320k. A receipt records frame range and snapshot/audio hashes. Existing output files are refused. Scratch uses the OS temporary directory; set `TMPDIR` to a suitable existing directory when needed. Scratch is retained and printed for diagnosis; remove only that run's directory after it finishes. If no browser path is given, Remotion handles its browser selection/download; use an explicit installed browser to avoid that dependency.

## 4. Check the actual result

```sh
ffprobe -v error -show_streams -show_format /path/to/full-output/who-owns-your-toaster-1080p60.mp4
ffmpeg -v error -i /path/to/full-output/who-owns-your-toaster-1080p60.mp4 -f null -
python3 scripts/check-song-audio.py /path/to/selected-master.wav /path/to/full-output/who-owns-your-toaster-1080p60.mp4
```

The audio comparison is diagnostic, not a listening approval. Watch the whole export with sound: words, transitions, object alignment, credits and first/last frames. Record the owner's acceptance separately from codec or test results. Use [PUBLISHING.md](PUBLISHING.md) for the subsequent upload workflow.

## Verification boundary for this documentation change

CLI help, invalid mode, sample boundary and audio-hash rejection can be checked without generating media. No new full-film or sample render is claimed for this portability increment. The accepted earlier master is unchanged. A newcomer must still run their own sample before trusting the full export on a different system.
