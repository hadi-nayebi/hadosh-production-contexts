# Claude cut · Compiler contract (r2)

Status: draft for Hadi's review. This document defines the three layers of the film and the exact boundary between them. Everything in r2 is built to it. Nothing that violates it ships.

## 1. The principle: three compartments, never mixed

The video is split into three file systems. Each holds one kind of information, so each can be improved on its own.

| Layer | Lives in | Holds | Must never hold |
|---|---|---|---|
| **Compiler** | `cut/index.html` | Video-agnostic machinery: loading, the timeline, cue resolution, keyframe interpolation, easing functions, node renderers, reusable components (swarm, infinity zoom, path flow, stroke drawing, stop-motion, sphere, counters, kinetic type), audio playback, and the render interface. | Any word, number, color, coordinate, duration, asset name or shape that belongs to a particular film. No design defaults: if a value would be visible, the compiler requires it from the JSON and refuses to render without it. |
| **JSON** | `cut/video.json`, `cut/units/<unit>/unit.json`, `cut/units/<unit>/scenes/*.json` | Every decision about what, when, where and how: unit and scene structure, cues, timing, placement, size, keyframes, easing, camera, component parameters (forces, speeds, counts, seeds), styling and CSS, palette, which font asset each text uses, audio placement, levels and fades. | Visible or audible content itself, such as drawings, images, sounds, fonts or display text. The JSON *points to* these in the asset layer. |
| **Assets** | `cut/assets/` (shared) and `cut/units/<unit>/assets/` | Everything seen or heard: SVG drawings, raster images, fonts, narration takes, music stems, sound effects, and the copy deck (`copy.json`: every on-screen string). | Timing, placement, motion or styling. |

**Production tools** (`cut/tools/`) are also video-agnostic. They read parameters from the JSON or an asset spec and write assets: the music synthesizer, the sound-effect synthesizer, the renderer and the validator. A tool never holds a film decision.

### Proof that the boundary holds

1. `tools/validate.mjs` checks every JSON file against `cut/schema/film.schema.json`. Required design fields cannot be omitted, and unknown fields are errors.
2. `tools/agnostic-check.mjs` scans `index.html` and `tools/` for film content: any string from any `copy.json`, any asset filename, any hex color, and any numeric literal outside an allow-list of math constants. Any hit fails.
3. `cut/examples/` holds a small second video with its own JSON and assets, unrelated to this film. It compiles with the same `index.html`, untouched. If the compiler needs editing to make the example work, the compiler was wrong.

All three run before every commit that changes the compiler.

## 2. Structure of the JSON

```
video.json
  title, frame [w, h], fps, output {width, height}
  palette { token: "#hex", … }                     // named colors used by every unit
  fonts { token: "assets/fonts/<file>" }           // font assets by name
  audioBus { master: {limit_dBTP, target_LUFS} }
  units: [ { id, src: "units/<id>/unit.json" } ]

unit.json
  id, duration
  copy: "assets/copy.json"                         // the unit's on-screen strings
  assets { id: { src, kind: svg|image|sequence|audio|mask|points, … } }
  cues { name: seconds | [cueName, offset] | [audioClipId, offsetIntoClip] }
  camera { x, y, zoom, rot: track }                // world camera for the unit
  audio: [ clip ]
  scenes: [ scene ]                                 // in order; may live in scenes/*.json via "src"

scene
  id, time: [start, end]                            // times or cue references
  persist: [nodeId]                                 // nodes that continue into the next scene
  nodes: [ node ]                                   // nested tree

node (common fields)
  id                                                // becomes the div id "<unit>/<scene>/<node>"
  type                                              // one of §3
  time: [in, out]
  space: "world" | "frame"                          // moves with the camera, or is fixed to the frame
  at: [x, y], size: [w, h], origin: [ox, oy]
  tracks { property: [[t, value, ease?], …] }       // any animatable property
  style { css }                                     // CSS applied to the node's div
  step { fps, jitter, seed }                        // optional stop-motion cadence for this subtree
  children: [ node ]                                // for group-like types
```

**Animatable properties** (all node types): `x`, `y`, `scale`, `scaleX`, `scaleY`, `rotation`, `opacity`, `blur`, `brightness`, `z`. Type-specific properties are listed per type.

**Easing names** (compiler library): `linear`, `hold`, `smooth`, `smoother`, `in`, `out`, `inout` (cubic), `back(c)`, `elastic(a, p)`, `spring(k, damping)`, `steps(n)`. The JSON names which one; the compiler only implements them.

**Time references:** a number (unit seconds), a cue name, `[cue, offset]`, or `[clipId, offsetIntoClip]`. A visual tied to a word in a narration clip moves automatically when that clip is replaced by a re-take with a different length, once its cue table is updated.

## 3. Node types (generic)

Each type is described by what it renders and its JSON fields. No type knows about tokens, Google, racks or books.

| Type | Renders | Type-specific fields |
|---|---|---|
| `group` | Nothing itself; transforms its children. | `children`, `clip` (optional rect or path mask). |
| `image` | A raster asset. | `asset`, `fit` (fill / contain / cover), `crop`. |
| `svg` | A vector asset, inlined so its inner elements are addressable. | `asset`, `parts { svgElementId: { tracks, style } }`. Any element inside the SVG can be animated by id, e.g. a rotor's rotation, a lamp's opacity or a needle's angle. |
| `sequence` | Frame-by-frame images (stop-motion or pre-rendered motion). | `frames: [asset]`, `fps`, `loop`, `frame` track (optional override). |
| `text` | Live DOM type from the copy deck. | `copy` (key into copy.json), `font` (font token), `size`, `weight`, `color` (palette token), `align`, `tracking`, `lineHeight`, `maxWidth`, `reveal { mode: none / words / chars / type / scramble / counter, stagger, dur, rise, blur, cps, from, to, format }`. |
| `shape` | A primitive: rect, ellipse, line, polyline, arc, ring with ticks. | `shape`, geometry fields, `fill`, `stroke`, `strokeWidth` (palette tokens), `dash`. |
| `path` | A stroke along a path taken from an SVG asset (by element id) or a JSON point list, drawn on progressively. | `source { asset, element } / points`, `draw` track (0–1), `brush { width, color, roughness, grain, substrokes, seed }`, `tip { emitter }` (optional particles at the drawing tip). Chalk, ink, wires and arrows all use this type with different brush parameters. |
| `follow` | Moves any child node along a path. | `path` (as above), `progress` track, `orient` (true / false), `child`. |
| `instance` | Repeats an asset over a layout. | `asset`, `layout { grid / ring / points / random }`, `count`, `stagger { tracks per index }`, `overrides { index: {…} }`. |
| `swarm` | A particle system; see §4. | §4 |
| `flow` | Pulses traveling along one or more paths, splitting at junctions. | `paths`, `speed`, `spacing`, `pulse { size, tail, color }`, `emit` track (pulses per second), `junctions`. |
| `sphere` | Orthographic globe of points sampled from an equirectangular mask asset, plus arcs between lat/lon pairs. | `mask` (asset), `samples`, `radius`, `lon`, `lat`, `rotation` tracks, `point { size, color }`, `arcs: [{from: [lat, lon], to: [lat, lon], flow}]`, `limbGlow { color, width }` track. |
| `zoomstack` | Infinity zoom: an ordered list of layers, each designed at its own scale, crossfaded by the camera's log-zoom so a zoom from 1 to 1/10,000 stays precise. | `layers: [{node, scale, anchor: [x, y], fadeIn, fadeOut}]`, `zoom` track (log space). |
| `audio` | A clip on the unit timeline. | See §5. |

## 4. The swarm component (generic)

A deterministic particle simulation. Its behavior over time is a list of phases, each a set of forces. Everything that makes it *this film's* swarm (counts, colors, sources, shapes, timing) is JSON plus assets.

```
swarm
  seed, step: 1/120                                  // fixed simulation step
  populations: [ { id, count, colors: [paletteToken], weights, size, halo, depthBands: [{share, size, alpha, parallax}] } ]
  hero: { population, index, size, coreColor, haloColor }   // optional single tracked particle
  sources: [                                         // where particles are born
    { population, kind: "textPixels", textNode, charDelay, hold, split: [2, 4], velocity: [min, max] },
    { population, kind: "assetPixels", asset, at, size, sample, birth: [t0, t1] },
    { population, kind: "edges", ribbons: [{from: [x, y], dir: [dx, dy], width}], birth: [t0, t1], speed }
  ]
  render: { streak, maxStreak, blend, breathe: {radius, period: [min, max]} }
  phases: [                                          // in time order; members can be filtered
    { time: [a, b], members: {population, range, fraction},
      forces: {
        flock:   { sep: [radius, weight], ali: [radius, weight], coh: [radius, weight] },
        noise:   { scale, strength, drift },
        attract: { point | track | path, strength },
        seek:    { targets: {text: copyKey + font + size + at} | {asset: mask, at, size} | {ring | cluster | grid: geometry},
                   assign: "angle" | "nearest" | "orderX" | "index", delayBy: "x" | "angle" | "none", delayRange,
                   arrive: {maxSpeed, slowRadius, k, damping} },
        orbit:   { center, radius: [inner, outer], omega, laps, direction },
        contain: { rect, strength },
        damping
      },
      gates: [ { at: [x, y], radius, onPass: {rim: color, flash, label: {copyList, font, size, color, life}} } ]
    }
  ]
```

The same component makes Unit 1's murmuration, the sand in Unit 3 (different population colors, sizes, forces, blend mode and a `step` cadence) and the chalk dust in Unit 4. Future videos reuse it with their own JSON.

**Determinism:** the compiler steps from the swarm's start at the fixed rate and keeps a snapshot every 0.5 s. Seeking restores the nearest earlier snapshot and steps forward, so every frame is identical in playback, seeking and the MP4 render.

## 5. Audio

```
clip  { id, asset, at (time ref), from, to, gain_dB, fadeIn, fadeOut, bus: "voice" | "music" | "fx" | "agents",
        filter?: {type: bandpass, lo, hi} }
duck  { bus: "music", under: "voice", depth_dB, attack, release, threshold_dB }   // in unit.json
```

The compiler plays clips in the browser with Web Audio (filters, gain, ducking). `tools/render.mjs` builds the identical ffmpeg graph from the same JSON (adelay, atrim, afade, bandpass, sidechaincompress, alimiter), so the MP4 mix matches the HTML.

Music and sound effects are assets. When they're synthesized, the tool `tools/make_audio.py` reads a score or spec asset (`assets/audio/score.json`, `sfx.json`: notes, chords, tempo, timbres) and writes WAVs. The score is content, so it lives in the asset layer.

## 6. Render interface

`window.film = { ready, duration, fps, renderAt(t), units }`. `tools/render.mjs` serves `cut/` on loopback, calls `renderAt` for each frame, pipes the frames to ffmpeg, and mixes audio from the JSON. It is video-agnostic and takes its output size and fps from `video.json`. Rendering supports `--from/--to` chunks, so a long film renders in restartable pieces.

## 7. Directory layout

```
cut/
  index.html                 compiler (video-agnostic)
  schema/film.schema.json    the JSON contract, machine-checked
  video.json                 film-level JSON
  units/<id>/unit.json       unit JSON (scenes inline or in scenes/*.json)
  units/<id>/assets/         svg/, img/, audio/, copy.json, points/
  assets/                    shared assets: fonts/, audio/narration/
  tools/                     render.mjs, make_audio.py, validate.mjs, agnostic-check.mjs
  examples/hello/            a different, tiny video compiled by the same compiler
  PLAN.md                    the director's plan (human-readable; mirrors the JSON)
  CONTRACT.md                this file
```

## 8. Reusable components: the start of a library

Each component is generic code in the compiler. Its specific use is JSON plus assets. Over time these become the building blocks for other videos.

| Component | Generic part (compiler) | This film's use (JSON + assets) |
|---|---|---|
| Swarm | Fixed-step particles, forces, sources, gates, snapshots. | Unit 1 murmuration and formations; Unit 3 sand; Unit 4 chalk dust. |
| Infinity zoom (`zoomstack`) | Log-zoom layer selection and crossfade. | Unit 2: circuit → building → city → region → Earth. Unit 3: desk → library. |
| Path flow (`flow`) | Pulses on paths, junction splitting. | Unit 2 circuit current; Unit 2 globe arcs. |
| Stroke drawing (`path` + brush) | Progressive stroke with roughness, grain and tip particles. | Unit 2 wires drawing on; Unit 4 chalk; arrows. |
| Stop-motion (`step`) | Quantized time and pose jitter for a subtree. | Unit 3 tabletop. |
| Sphere | Orthographic mask sampling and arcs. | Unit 2 Earth. |
| Kinetic type | Words, chars, type, scramble and counter reveals. | Every unit; Unit 2 translation (scramble); Unit 1 counters. |

## 9. What this changes in the plan

- The director's plan stays the creative source, but its next pass is written *as the JSON*: every shot becomes a scene with its nodes, times, tracks and component parameters filled in. Every object becomes an SVG design in the asset folder, and every string becomes an entry in `copy.json`.
- Code-drawn fallbacks are removed from the plan. If an image from ChatGPT doesn't arrive, the fallback is another asset file (an SVG I design), never drawing code in the compiler.
- Requests to ChatGPT are an asset manifest posted in HQ.json. Each entry gives the asset id, the destination path in my directory, size, format, the full prompt, and the acceptance criteria.

## 10. Done means

- All three checks in §1 pass.
- Every scene in PLAN.md exists in the JSON with no field left to a compiler default.
- Every asset in the manifest exists at its path, from me or ChatGPT.
- Style frames rendered from the JSON are approved by Hadi before motion tuning.
- The full film renders to MP4 from the JSON and assets alone.

## 11. Field reference (r2 JSON, as used by the four units)

`schema/film.schema.json` is the authoritative list of allowed fields, and `tools/validate.mjs` enforces it. Meanings:

**Styling SVG assets.** `classStyle { className: {fill, stroke, strokeWidth, opacity, fillOpacity, dash, fillPattern} }` styles every element of that class in the SVG. Colors are palette tokens. `fillPattern` names a pattern asset. `parts { elementId: {origin, tracks} }` animates one element inside the SVG.

**Tracks.** A track is `[[t, value, ease?], …]` or a loop `{loop: {time: [a, b], period, phase, keys: [[0..1, value, ease?]], pauseWhen?: [a, b]}}`. Loop key times are fractions of the period.

**Text.**
- `reveal.mode`:
  - `type` (`cps`, optional `caret {blink, width, until}`)
  - `words` (`stagger`, `dur`, `rise`, `blur`)
  - `scramble` (`fromCopy`, `glyphs`, `stagger`, `dur`, `seed`)
  - `counter` (`from`, `to`, `dur`, `ease`, `format`; or `steps: [[t, n]]`; optional `pop`)
  - `write`: left-to-right chalk reveal (`cps`, `grain`, `tip`, optional `skipChar`)
- Layout fields: `valign` (`top` / `middle`), `maxWidth` (wraps), `lineHeight`, `spacing` (em), `out: [a, b]` (fade-out window).
- `dissolve {by: "swarm:<id>", source}`: the text hides glyph by glyph as that swarm source turns its pixels into particles.

**Shapes.**
- `rect` / `ellipse` / `ring`: `at`, `size` or `center` + `radius`.
- `ringTicks`: `center`, `radius`, `ticks`, `tickLength`, `draw` track (0–1), optional `head` and `affects {swarm, flare}`.
- `arc`: `center`, `radius`, `from` / `to` in radians.
- `dot`: `radius`, `halo`, `streak` from its own velocity, `grain`.
- `grid`: `rect`, `step`, `fill`, `line`.
- `fill` may be `{radial: {center, r0, r1, stops}}`.

**Paths.**
- `source {asset, element}` or `points` + `curve` (`linear` / `quadratic`).
- `draw` track (0–1).
- `brush {width (number or track), color, roughness, grain, substrokes, seed, speed}`.
- `tip.emitter {rate, life, size, color, alpha, gravity}`.
- `endsFollow: [startNode, endNode]` keeps the endpoints attached to moving nodes.

**Follow.** `path`, `progress` track, `orient`, `offset`, `child`. Optional `wipe {width, smear}` erases the layers beneath along the travelled path.

**Instance.**
- `layout`: `grid {origin, cols, rows, step}` or `random {rect, seed}`.
- `birthTimes` (per index) or `stagger.birth {from, spread | every}`.
- `stagger.tracks`: per-instance tracks in seconds since that instance's birth. A value `"toward:x"` moves toward that x.

**Swarm.**
- **Population fields:**
  - `size`: a number or a `[min, max]` range.
  - `shape`: `point` or `grain`.
  - `shadow`, `space`, `blend`.
- **Source kinds:**
  - `textPixels`: from a text node or group; `charDelay: typed` releases each glyph `hold` seconds after it was typed; `quota`.
  - `edges`: ribbons from beyond the frame.
  - `field`: noise-thresholded scatter in a rectangle.
  - `annulus`: born in a ring.
  - `assetPixels`.
- **Phases** select `members` (`population`, `range`, `hero`, `near`) and combine forces:
  - `flock`, `noise`, `attract` (point, track or lissajous), `contain`, `damping`, `maxSpeed`.
  - `seek`: targets `text`, `textChar`, `cluster`, `grid`, `line`, `point`; `assign`; `delayBy`; `arrive`; `consumeAt`.
  - `orbit`: `center`, `radius` band, `omega`, or `laps {count, start, end}`; `enter` delay.
  - `impulse`, `wind` (with a moving `front`), `vibrate`.
  - `attach`: rides a node, with an optional glow and `except` window.
  - `path`: explicit points and times, or `followPathNode`.
- **Hero:** `hero` designates one particle and where it is born.
- **Gates:** `gates` fire `onPass` effects (rim, flash, labels from a copy list).
- **Render:** `render` sets `streak`, `maxStreak`, `blend`, `breathe`, timed `pulse` and `streakOverride`, and an optional stop-motion `step`.

**Flow.**
- `paths {asset, elements}`.
- `routes`: a start path with an `emit` rate track and `branches {at (fraction along the path), path, share, open (time)}`.
- `speed` track (u/s).
- `spacing`, `pulse {size, halo, tail, colors, blend}`.
- `wire {color, litColor, width, glow}`.
- `wireDraw`: per-path draw-on tracks.

**Sphere.**
- `mask` (equirectangular asset), `samples`, `seed`.
- `center`, `radius`, `lon`, `lat` tracks.
- `point {size, color, alpha, backfaceAlpha}`.
- `lights {cities, size, color, glow}`.
- `arcs [{from, to, lift, flow}]`, `arcStyle`, `arcPulse`, `arcSpeed` track.
- `limbGlow {color, width track, arc}`, `atmosphere`.

**Zoomstack.**
- `handoff {node, cameraAt}`: from `cameraAt`, the referenced world node is drawn through the zoomstack (frozen camera × zoom), not by its scene.
- `layers`: `ref` (an existing node) or `node` (defined here), plus:
  - `unitsPerWorld`: how big one layer unit is in world units.
  - `anchor`: the layer point that coincides with the zoom center.
  - `visible [minZoom, maxZoom]`: where the layer is drawn, crossfaded over `fade` (in log-zoom).
  - `after: "hold"`: keeps the last layer live after the zoom ends.
  - `clip {center, radius, edgeShade?}`: draws the layer only inside a circle (layer units; `radius` is a track). `edgeShade {width, alpha, color}` darkens a ramp just inside the edge.
- Nodes referenced by a layer are drawn only by the zoomstack during its time window.

**Swarm density.** `swarmDensity {of, radius, color, alpha}` paints a soft glow under dense regions of a swarm.
