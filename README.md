# Paper Stage — THEATER checkpoint, cycle 2 (layer 2 of the studio)

> **This commit is the THEATER layer at cycle 2** — the platform
> checkpoint at cycle 2 (previous commit: void stage, grid, camera +
> pad/lift controls + PiP, PHOTO/REC capture, seed/reset machinery,
> deterministic physics core) **plus the paper theater room,
> dressed**: walls, ceiling, a raised stage deck, an empty audience
> floor — and now the room's full cycle-2 build: a **three-octave
> paper texture** (speckle, mottling, fibres, with bump), a
> **four-spot lighting rig** with its visible paper fixtures (the
> house bar, its cans, the ceiling mount), **two stage poles**, and
> **gathered curtains** pleated in geometry at the deck's edges.
> The room is a *scene*: it registers into the platform's scene
> registry and can be lifted back out without touching a platform
> line (the separation is mechanically proven lossless — the
> transform round-trips these bytes exactly). Video scenes build
> on top of this layer next.
>
> The room also gains its **FILMING HOME** — the derived camera
> pose that frames exactly the stage, curtains at the edges, a
> little of the step below (x 430, z 830, heading −180, tilt −4.8,
> focal 1080, lift 84) — seated by the one-word **FILM** preset in
> the camera panel, its state shown on the button's face.
>
> `stage.html` here: 249,834 bytes, sha256
> `f1a84e90b8452d3de38528f8a87b24def20e89618f647e3236f5957a182807fc`
> (seed: stage + 294 bytes). Verified: the full standing battery
> reproduces on these layered bytes — migration 85 · fix-8 15 ·
> fix-9 45 · fix-10 17 · room 101 · capture 37 · physics 19 ·
> cycle-2 55 — plus the rendered censuses: every §4.3 pair over
> its floor (the tight back↔west pair reads 1.182 against 1.10),
> and the FILMING HOME frame holding all seven of the plan's
> framing points.

An empty 3D stage you direct with a real camera object, grown into
a paper theater. Everything runs from **one HTML file** plus one
vendored library — no build step, no server, no dependencies to
install.

**▶ Play it live:** https://hadi-nayebi.github.io/hadosh-production-contexts/dashboard/stage3d/
(serves the current build — the cycle-2 theater room, with capture)

## Run it yourself

Download this branch (Code → Download ZIP, or clone and switch to
the `stage3d` branch), then open `stage.html` in any modern
browser — double-click works; it runs from `file://` with no
network.

- **DIRECTOR view** — drag to orbit, pinch/scroll to zoom,
  two-finger twist to roll. Drag the paper camera itself to move
  it.
- **CAMERA view** — the shot through the camera's own lens. Drag
  to look (the world stays put); the glyph pad flies and lifts
  the camera. In the room, the panel's **FILM** preset seats the
  FILMING HOME framing.
- The small corner window always shows the other eye, live. Tap
  it to swap. **FIND CAMERA** flies you to the camera; **AIM AT
  CENTRE** re-aims it; the gear opens settings (speeds, smoothing,
  director aids). **RESET STAGE** returns the current scene to its
  seed state.
- **STAGE / THEATER** switches between the empty checkpoint void
  and the empty paper theater room. In the room, **PHOTO** saves a
  still from the camera's own lens and **REC** records video from
  it — the camera films the stage it stands in front of.
- On a phone: open the live link in Chrome (in-app preview
  windows can't run WebGL; a real browser can).

## What's inside

| Path | What it is |
|---|---|
| `stage.html` | The whole stage — platform + theater room, in three layers |
| `assets/three-vendor.js` | three.js r186, pre-bundled into one classic script so the file boots offline |
| `assets/seed/` | The generated empty-stage seed (RESET STAGE state), pressed from `stage.html` — never hand-edited |
| `checkpoint-stable-v1/` | **Stable Checkpoint V1** — the frozen empty stage the owner passed on his phone (see `CHECKPOINT.md`) |
| `AGENTS.md` | The branch's standing law: scene rules, camera mechanics, perception standards |
| `assets/plan/room-plan.md` | The theater room's plan — derived, blind-spot-hunted, iterated by independent reviewers, then built (§15–§17 carry the build, fix and cycle-2 entries) |

## The idea

The scene is *computed, not random*: every element that will ever
appear in it is decided first — what it is, why it's there, where
it sits, how it moves — and the render is derived from those
decisions. A camera object stands in the world, so a scene can be
**filmed**: framed, aimed, and recorded from the camera's own view.
The world is paper — flat dyed-paper materials and procedural
grain. The layers are the studio's memory: platform below, theater
above it, each video's scene on top.

## Status

Stable Checkpoint V1 (2026-11-06): void + grid + camera, verified
and owner-passed — frozen in `checkpoint-stable-v1/`.
The empty theater room + camera capture (2026-11-07): walls,
ceiling, a raised stage, an empty floor, and the camera standing
in it — **PHOTO** and **REC** film from the camera's own lens.
Cycle 2 (2026-11-07): the dressed room — texture v2, rig v3 with
visible fixtures, poles, gathered curtains — and the FILMING
HOME with its FILM preset.
