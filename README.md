# Paper Stage — a tiny 3D stage that lives in one HTML file

An empty 3D stage you direct with a real camera object, built to grow
into a paper theater. Everything runs from **one HTML file** plus one
vendored library — no build step, no server, no dependencies to install.

**▶ Play it live:** https://hadi-nayebi.github.io/hadosh-production-contexts/dashboard/stage3d/
(serves the current build — the empty theater room, with capture)

## Run it yourself

Download this branch (Code → Download ZIP, or clone and switch to the
`stage3d` branch), then open `stage.html` in any modern browser —
double-click works; it runs from `file://` with no network.

- **DIRECTOR view** — drag to orbit, pinch/scroll to zoom, two-finger
  twist to roll. Drag the paper camera itself to move it.
- **CAMERA view** — the shot through the camera's own lens. Drag to
  look, pinch to fly.
- The small corner window always shows the other eye, live. Tap it to
  swap. **FIND CAMERA** flies you to the camera; **AIM AT CENTRE**
  re-aims it; the gear opens settings (speeds, smoothing, director
  aids). **RESET STAGE** returns the current scene to its seed state.
- **STAGE / THEATER** switches between the empty checkpoint void and
  the empty paper theater room. In the room, **PHOTO** saves a still
  from the camera's own lens and **REC** records video from it — the
  camera films the stage it stands in front of.
- On a phone: open the live link in Chrome (in-app preview windows
  can't run WebGL; a real browser can).

## What's inside

| Path | What it is |
|---|---|
| `stage.html` | The whole stage — scene, state, and engine in three layers |
| `assets/three-vendor.js` | three.js r186, pre-bundled into one classic script so the file boots offline |
| `assets/seed/` | The generated empty-stage seed (RESET STAGE state), pressed from `stage.html` — never hand-edited |
| `checkpoint-stable-v1/` | **Stable Checkpoint V1** — the frozen empty stage the owner passed on his phone (see `CHECKPOINT.md`) |
| `AGENTS.md` | The branch's standing law: scene rules, camera mechanics, perception standards |
| `assets/plan/room-plan.md` | The theater room's plan — derived, blind-spot-hunted, iterated by independent reviewers, then built (§15–§16 carry the build and fix entries) |

## The idea

The scene is *computed, not random*: every element that will ever
appear in it is decided first — what it is, why it's there, where it
sits, how it moves — and the render is derived from those decisions.
A camera object stands in the world, so a scene can be **filmed**:
framed, aimed, and recorded from the camera's own view. The
world is paper — flat dyed-paper materials and procedural grain.

Follow the build: the **Paper Stage** playlist on Let's Build It
Together carries a short or post most days — new assets, textures,
physics, and the scenes they make.

## Status

Stable Checkpoint V1 (2026-11-06): void + grid + camera, verified and
owner-passed — frozen in `checkpoint-stable-v1/`.
The empty theater room + camera capture (2026-11-07): walls, ceiling,
a raised stage, an empty floor, and the camera standing in it —
**PHOTO** and **REC** film from the camera's own lens. Built to the
plan in `assets/plan/room-plan.md` and independently verified
(contrast measured on rendered pixels; the dollhouse ghost view lets
a director orbit outside the room and still see in).
