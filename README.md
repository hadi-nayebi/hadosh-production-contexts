# stage3d — share-branch checkpoint: THEATER v2b (the control-room round)

The current stage3d build: the empty paper theater (§ theater v2 below)
plus the glass ball scene on it, plus — new in this checkpoint — the
control-room package from the owner's cycle-2 steers 2–6. The director
view is the control room: the movement pad stands there, one gate
holds every camera adjustment from both views, a pin keeps the
owner's own framing across reloads, and the corner speaks the
single-tap / double-tap grammar.

- `stage.html` — 288,897 B, sha256
  `367c9e6bbc63f0f51e61550964b83522c5b1ccfc459d924fd81453e807e0c8a5`
- `assets/seed/stage-seed.html` — the bootable seed (stage + 294 B,
  4 injected lines; the seed law in the branch AGENTS.md)
- `assets/three-vendor.js` — three.js r186, the one library
  (743,139 B, sha256 prefix `1ba21d75`)
- `AGENTS.md`, `CHECKPOINT.md`, `assets/plan/room-plan.md` — the
  branch record at this checkpoint
- `checkpoint-stable-v1/` — the frozen pre-room build, untouched

Boot it from this folder (`stage.html` beside `assets/`); the live
served copy is the production board:
https://hadi-nayebi.github.io/hadosh-production-contexts/dashboard/stage3d/

## What the control-room package adds (steers 2–6, one ship)

- The movement pad stands in the DIRECTOR view as well as the camera
  view — its show condition is the camera's presence, and it stays
  up while the gate is open.
- One control gate, both views: the gear panel carries the camera
  adjustments directly — Heading / Tilt / Lens / Lift sliders with
  live readouts — plus PIN, SAVE, the six-number pose readout and
  FILM. It opens from the gear in both views and from the corner
  tap, anchored at the PiP then.
- PIN + HADI'S HOME: one tap saves the live pose to the device; the
  pin seats at scene entry, is RESET CAMERA's and FILM's target in
  the room, and the readout names it HADI'S HOME with its six
  numbers (until pinned, the readout prints the shipped FILMING
  HOME pose).
- The PiP tap grammar: in the director view a single tap opens the
  gate at the corner; a double tap enters the camera view. In the
  camera view a clean tap still swaps straight back. Drag-aim and
  pinch on the corner are unchanged.
- The true frame: the camera view draws the exact 16:9 capture
  frame (bright edge, dimmed surround) — what REC records is what
  the view shows.
- The ••• menu in the PiP's corner: CONTROLS (the gate at the
  corner) · COPY POSE (the pose to the clipboard, confirmed COPIED)
  · SAVE AS ISSUE… (name the pose on-page, then a prefilled GitHub
  issue carrying the pose JSON — the file-side home for a framing).

## The layers under this checkpoint (same order as the branch)

1. **platform v3** — the void, the paper grid, the camera, PHOTO +
   REC capture, and the deterministic physics core (deck 23 units
   = 1 m; gravity 225.4 u/s²; the 23-unit fall measures 0.4500 s,
   impact 101.43 u/s, deterministic to 1e-9).
2. **theater v2** — the empty paper theater on the platform: back
   wall, side walls, deck, ceiling; red curtains on poles at both
   sides; house lights + spot; the paper grain and mottling; the
   six-direction pad; the derived FILMING HOME.
3. **the ball scene** — the glass ball: drop → shatter into 14
   shards → settle → hold 3.0 s → fade 1.0 s, on the shared physics
   clock; FILM plays it from FILMING HOME (or the pin).
4. **the control room** — this checkpoint (above).

Suite state on these bytes: the cycle-2 harness's gate cells pass
in the real browser, including the PIN reload acceptance test;
the migration harness's census chains are re-derived to these
bytes (88 static + 156 @reason + 2 dynamic = 246 reasons; 15
wrap180 call sites; 57 addEventListener sites), and the harness
reads 85 passed, 0 failed in two consecutive full runs
(2026-11-08).

Build record:
`hidden_files/delivery-gate/records-20261105-stage3d/stage3d-cycle2-build-record.md`
§§1–13 in the goal tree.
