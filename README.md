# Paper Stage — THEATER checkpoint (layer 2 of the studio)

> **This commit is the THEATER layer** — the platform checkpoint
> (previous commit: void stage, grid, camera + controls + PiP,
> PHOTO/REC capture, seed/reset machinery, deterministic physics
> core) **plus the empty paper theater room**: walls, ceiling, a
> raised stage deck, and an empty audience floor — no chairs, no
> curtain. The room is a *scene*: it registers into the platform's
> scene registry and can be lifted back out without touching a
> platform line (the separation is mechanically proven lossless).
> Video scenes build on top of this layer next.
>
> `stage.html` here: 224,204 bytes, sha256
> `b003188a7827f4047aa8e6392c3fa91c1126148b00fce04f9d5faf01d9be84d3`
> (seed: stage + 294 bytes). Verified: the full standing battery
> reproduces on these layered bytes — 272 cells, 0 failed
> (migration 85 · fix-8 15 · fix-9 45 · fix-10 17 · room 73 ·
> capture 37) — plus the physics suite, 19/0.

An empty 3D stage you direct with a real camera object, grown into
a paper theater. Everything runs from **one HTML file** plus one
vendored library — no build step, no server, no dependencies to
install.

**▶ Play it live:** https://hadi-nayebi.github.io/hadosh-production-contexts/dashboard/stage3d/
(serves the current build — the empty theater room, with capture)

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
| `assets/plan/room-plan.md` | The theater room's plan — derived, blind-spot-hunted, iterated by independent reviewers, then built (§15–§16 carry the build and fix entries) |

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
Layered checkpoints (2026-11-07): the platform and the theater
now stand as separate commits, so either floor of the studio can
be returned to exactly.
