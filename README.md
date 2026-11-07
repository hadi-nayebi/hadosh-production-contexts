# Paper Stage — PLATFORM checkpoint (layer 1 of the studio)

> **This commit is the PLATFORM layer** — the checkpoint every video
> built in this studio stands on. It carries what every production
> uses and nothing scene-specific: the void stage, the grid ground,
> the camera object with its controls and picture-in-picture,
> **PHOTO / REC capture** from the camera's own lens, the seed/reset
> machinery, and the **deterministic physics core** (gravity derived
> from the stage's own scale: 23 world units = 1 m, so
> g = 225.4 units/s²; seeded, reproducible motion — no runtime
> randomness). The theater room is NOT in this layer: it stands on
> top of it in the next checkpoint, and any video's scene builds on
> top of that — never down into this one. Return here and recording
> + physics are always intact.
>
> `stage.html` here: 203,572 bytes, sha256
> `fd4dfeec48dbbb8fc928082f4b8f4b95fdf27fd3abd878a57f882258b648e3a2`
> (seed: stage + 294 bytes, as always). Verified: the platform
> suites green — migration 85 · fix-8 15 · fix-9 45 · fix-10 17 ·
> physics 19 (measured drop: fall 0.4500 s vs 0.452 predicted,
> impact 101.43 vs 101.8 units/s).

An empty 3D stage you direct with a real camera object, built to
grow into a paper theater. Everything runs from **one HTML file**
plus one vendored library — no build step, no server, no
dependencies to install.

## Run it yourself

Download this branch (Code → Download ZIP, or clone and switch to
the `stage3d` branch), then open `stage.html` in any modern
browser — double-click works; it runs from `file://` with no
network.

- **DIRECTOR view** — drag to orbit, pinch/scroll to zoom,
  two-finger twist to roll. Drag the paper camera itself to move
  it.
- **CAMERA view** — the shot through the camera's own lens. Drag
  to look, pinch to fly.
- The small corner window always shows the other eye, live. Tap
  it to swap. **FIND CAMERA** flies you to the camera; **AIM AT
  CENTRE** re-aims it; the gear opens settings (speeds, smoothing,
  director aids). **RESET STAGE** returns the stage to its seed
  state.
- **PHOTO** saves a still from the camera's own lens and **REC**
  records video from it — the camera films the stage it stands in.
- On a phone: open in a real browser (in-app preview windows
  can't run WebGL).

## What's inside

| Path | What it is |
|---|---|
| `stage.html` | The whole platform — scene, state, and engine in three layers, physics core included |
| `assets/three-vendor.js` | three.js r186, pre-bundled into one classic script so the file boots offline |
| `assets/seed/` | The generated empty-stage seed (RESET STAGE state), pressed from `stage.html` — never hand-edited |
| `checkpoint-stable-v1/` | **Stable Checkpoint V1** — the frozen empty stage the owner passed on his phone (see `CHECKPOINT.md`) |
| `AGENTS.md` | The branch's standing law: scene rules, camera mechanics, perception standards |
| `assets/plan/room-plan.md` | The theater room's plan — the next layer's document, carried here for reference |

## The idea

The scene is *computed, not random*: every element that will ever
appear in it is decided first — what it is, why it's there, where
it sits, how it moves — and the render is derived from those
decisions. A camera object stands in the world, so a scene can be
**filmed**: framed, aimed, and recorded from the camera's own view.
The world is paper — flat dyed-paper materials and procedural
grain. The layers are the studio's memory: platform below, theater
above it, each video's scene on top — so a scene can always be
rebuilt without disturbing the floors beneath it.
