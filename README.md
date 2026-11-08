# Paper Stage — PLATFORM checkpoint, cycle 2 (layer 1 of the studio)

> **This commit is the PLATFORM layer at cycle 2** — the checkpoint
> every video built in this studio stands on, advanced by the owner's
> phone pass of 2026-11-07. It carries what every production uses and
> nothing scene-specific: the void stage, the grid ground, the camera
> object with its controls and picture-in-picture, **PHOTO / REC
> capture** from the camera's own lens, the seed/reset machinery, and
> the **deterministic physics core** (gravity derived from the
> stage's own scale: 23 world units = 1 m, so g = 225.4 units/s²;
> seeded, reproducible motion — no runtime randomness).
>
> **Cycle 2 platform changes** (the owner's camera spec, ruled
> 2026-11-07): in CAMERA view, a finger drag now moves the *camera's
> aim*, never the world — the heading sign is flipped on both the
> main view and the corner view, so the world no longer follows the
> finger like a photograph. A **six-direction movement pad** (glyph
> buttons, no words) rides the camera view's right edge: a diamond
> that flies the camera forward / back / left / right relative to
> where it looks, plus a lift pair that raises and lowers it on the
> new **lift axis** (0–360, composed over the floor). The modified
> drag and the double-tap-hold slide are retired in camera view;
> pinch, two-finger pan, twist, double-tap focal and the arrow keys
> all stand. The theater room is NOT in this layer: it stands on top
> of it in the next checkpoint, and any video's scene builds on top
> of that — never down into this one.
>
> `stage.html` here: 212,751 bytes, sha256
> `f26f69f8f1b4151460fece48a397ba58cf0cc5baa292f5efe668f8e21c98ed5b`
> (seed: stage + 294 bytes, as always). Verified: the platform
> suites green — migration 85 · fix-8 15 · fix-9 45 · fix-10 17 ·
> physics 19 · cycle-2 harness 55 (drag D1–D5, the pad cells, the
> lift clamps; measured drop: fall 0.4500 s vs 0.452 predicted,
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
  to look (the aim follows your intent, the world stays put); the
  glyph pad flies and lifts the camera itself.
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
| `assets/plan/room-plan.md` | The theater room's plan — the next layer's document, carried here for reference (now through §17) |

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
