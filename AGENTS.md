# Quadrillions film

This branch builds the November Unit One film from the supplied Google Drive production batch. Use a cloud workspace and the GitHub connection. Hadi's personal laptop is outside this workflow. Keep remote commands noninteractive and bounded. Record an executable checkpoint on this branch after verifying each major increment so another session can resume.

## Edit and preview

Open the folder with a loopback web server, for example `python3 -m http.server 8000 --bind 127.0.0.1`, and open `http://127.0.0.1:8000/`. A direct double-click on index.html offers a project-folder chooser in browsers that support directory selection. Select the folder that contains video.json. Tap the play icon for sound. Tap the film to pause, Space to resume, Home to restart and the arrow keys to seek five seconds.

Keep the player reusable. The ordered composition lives in video.json. Each unit owns its own runtime JSON, local visual assets and original storyboard. A unit can reference the one shared narration WAV. Edit the JSON or a mounted image to change content, then refresh. Projects with pending units list those entries without a source. Set the review list to the units being previewed or omit it to play every sourced unit in order.

## Source and playback evidence

Use the original Unit One storyboard and the November asset index. The latest two-part production package supplies 63 selected PNG roles and their comparisons. The mounted WebP artwork comes from those PNGs. Its source identity and mounting envelope are recorded in the unit asset declarations. Use the published voice as supplied. Seven seconds of silent opening precede narration. Keep the entire seventh line and the documented silent boundary before the eighth.

Each unit, scene, group, item and repeated instance needs its own stable browser div. Keep audio and clips in the same authored time system as the picture. Persistent objects retain their identity across scenes. Compare the moving film at desktop and phone widths, capture and check browser audio against the master, and test a cold open, pause, replay, seeking, asset edits, and independent changes to order and styling. Source review alone establishes no playback result.

The baseline branch, earlier film PR, archived art and other units remain separate. Merge, publication, MP4 and fresh narration require their own authorization.

## Unit data

Coordinates use the reference frame in video.json. A `box` is left, top, width, height. Nested boxes are local to their parent. The `time` interval includes the start and excludes the end. Times can be unit seconds, a cue name, or a pair containing a cue and a seconds offset. Tracks contain time/value pairs with optional easing. The default interpolation is smooth. Use `linear` or `hold` as the third value of the destination key to change that segment. Change sibling order or set wrapper CSS `zIndex` to change overlap. Set `contentCSS` to style the image within its own wrapper.

The shot list identifies the storyboard-to-runtime mapping. Objects continuing across shots live under a persistent scene or group. A scene's references name those objects without remounting them. `stage-camera` applies shared projection tracks to fixed world anchors. A grid declares its instance shape, floor slots, row/column stagger and optional keyed overrides. A seeded field declares its palette, size, trajectories and attraction targets. Its numbered instances and the rack IDs remain inspectable when paused or seeking.
