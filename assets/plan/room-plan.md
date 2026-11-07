# THE EMPTY THEATER ROOM — PLAN (stage3d, new OPEVC job)

**Phase: OBSERVE + PLAN only. No build in this job.** Iterated three times
inside the job (draft → blind-spot hunt 1 → revision → blind-spot hunt 2 →
final). The iteration log and blind-spot register stand in §12 — the plan is
final only because the register's open items are accepted risks, never
unexamined items. There are **zero blocking owner questions**.

**Owner's brief (2026-11-06 23:50 EST, verbatim substance):** create the
whole empty room — a tiny theater room, all paper: the theater's wall, a
stage "a bit raised", the stage side, a ceiling, and the area where the
chairs would be EMPTY — just a basic floor, no chairs, no curtain. The
camera stands in the empty area in front of the stage, between ceiling and
floor, and its view covers the whole stage. Plan it as its own OPEVC job,
iterated until executable with no blind spots. He also asked whether camera
CAPTURE is fixed in this version or an issue — answered in §10.

**Starting point:** STABLE CHECKPOINT V1 (`../CHECKPOINT.md`) — the WebGL
empty stage: three.js r186 vendored, void + shader grid + paper camera
object + the full gesture/chrome law; stage.html sha `2aedd01b` as the owner
viewed it. The room forks from the checkpoint line and inherits the CURRENT
working file's engine and chrome (the working file also carries the
fix-round-10 panel fence). The checkpoint bytes stay returnable forever via
`checkpoint-stable-v1/` regardless of anything this plan does.

---

## 0. Observe — sources

**The record (read in full):**
- `../CHECKPOINT.md` — the checkpoint artifact, its two return routes, and
  the owner's room brief as the recorded next build.
- `../AGENTS.md` (branch law) — the scene law, the split (Layer 1 ASSETS /
  Layer 2 STATE / Layer 3 MECHANICS), the seed law, phone-hardening caps
  (textured surfaces ≤ 4096px; coordinates within ±3600; the WebGL rider
  names exactly two oversize shader geometries — the grid plane and the
  dome — and no third joins without being named), perception classes N/O/P.
- `../../AGENTS.md` (branches form law) — one HTML file per branch, evolved
  in place; the room is therefore a scene inside the same `stage.html`,
  never a new branch and never a second file.
- `stage.html` itself (working bytes) — the engineering facts this plan's
  arithmetic stands on:
  - The scene camera's lens law: **FOVv = 2·atan(320/focal)** over a
    640-unit reference height — at distance *d* the frame's height is
    **640·d/focal**, its width that × aspect. Focal range 240..1700;
    checkpoint home focal 800 → FOVv 43.6°.
  - The camera object's eye stands **34 units above its floor**
    (GY − EYE = 34); the drawn object is 118 wide × 73 tall × 102 deep.
  - The director rig: orbit target base **(500, 150, 0)** carried by pan;
    eye distance D = max(30, 1050 − dolly); portrait framing law holds the
    director's horizontal field at 52° on narrow frames.
  - Render passes: `renderPass(camObj, isDirView)` already applies
    per-pass visibility (the camera object stands in director passes
    only) — per-eye state applied and restored inside the pass is the
    file's standing discipline, and §4's rule is built on it.
  - Both engine cameras: near 1, far 20000. The renderer is created
    WITHOUT `preserveDrawingBuffer` (matters in §10).
  - The paper material approach as built: flat dyed-paper
    `MeshStandardMaterial`s (roughness 0.85–0.9) in the kraft family —
    #CCA45F (top), #B78D4C (side), #77572A (body), #54390F, #38260F — lit
    by warm ambient (0xffe9c4, 0.85) + one directional (0xfff2d8, 1.15)
    from (300, 800, 200). **No shadow maps anywhere.** Canvas textures
    exist only for the contact shadow and the gizmo letters. The grid is
    a transparent, depthWrite-off shader plane at y=0; the origin ring
    stands at (0, 0.5, 0); CENTRE = (430, 53); CAM_HOME = (742, 150),
    heading −107.3°, tilt 6°, focal 800.
- The Academy's settled paper-stage aesthetics (memory record, 2026-11-03):
  Unit 1's world is a **paper-cutout amphitheater** — tan/kraft folded
  paper, torn-paper frame, curved **segmented** paper stage floor; the
  empty stage picture is backdrop + floor + frame, plain flat-panel wall.
  The room's palette and its floor/deck seam treatment (§6) are drawn
  from that family and from the checkpoint camera object's own dyes —
  one paper world, not a new one.

**The web (named):**
- Room construction in three.js: the standard forms are (a) one
  BoxGeometry with a `BackSide` material (renders the interior only;
  from outside the box is invisible), (b) assembled PlaneGeometry
  panels, (c) thin BoxGeometry panels — the gallery pattern (DeepWiki,
  theringsofsaturn 3D-art-gallery: walls as thin boxes, DoubleSide,
  box-over-plane "prevents z-fighting when viewed edge-on").
  threejs.org discourse, "How to hide faces of a model facing the
  camera?" — the dollhouse problem and its per-face visibility answer.
- Procedural canvas textures: CanvasTexture + RepeatWrapping +
  `texture.repeat` is the canonical route; canvas-generated textures
  cost ~1–5 ms per 256² tile at init and zero asset bytes (Luminaries
  WebGL FPS guide, r172+). The known failure class is **repeat-border
  seams** (threejs.org discourse #15512): edge-sampling artifacts at
  tile borders — cured by drawing the tile wrap-aware and integral
  repeat counts.
- Capture: MDN-pattern `canvas.captureStream()` + `MediaRecorder` for
  video and `toBlob`/`toDataURL` for stills (threejs.org discourse
  #49872 and the production write-ups it links). The standing caveat,
  confirmed by every source: **a WebGL canvas reads blank unless the
  read happens in the same task as a render, or the renderer preserves
  the drawing buffer** — and the higher-resolution route is rendering
  the shot to a WebGLRenderTarget / offscreen size, never reading the
  composited page canvas (which on this page multiplexes three passes).

---

## 1. Headline decisions

| # | Decision | Value |
|---|----------|-------|
| D1 | Scene model | Two scenes, one file: a Layer-2 `scene` field (`'void'` \| `'room'`); boot is ALWAYS the checkpoint (void). The room is additive — every checkpoint behaviour is the regression floor. |
| D2 | Room interior | **1104 wide × 1196 deep × 460 high** (12 × 13 × 5 grid cells of 92), centred on CENTRE (430, 53). |
| D3 | Stage | **644 wide × 276 deep × 23 high** ("a bit raised" = 23 — derived, §2), back edge flush with the back wall, centred on CENTRE; wings 230 each side. |
| D4 | Grid fate | The shader grid **survives unchanged, everywhere**; the room stands on it (group raised +2). Inside the room the floor's plank seams carry the 92 measuring scale as print. |
| D5 | Director rule | **Dollhouse ghost**: shell panels between a director eye and the room centre fade to 0.07 opacity (depthWrite off) for that pass only; the floor never fades; camera passes never fade. Never a sealed box. |
| D6 | Room camera home | **(430, 1071), heading 180°, tilt +0.6°, focal 360** — covers the whole stage at both aspects; binding aspect is portrait 20:9 (0.444), margin ≥ 1.4°. Arithmetic in §5. |
| D7 | Materials | One procedural grain-texture family (512² canvas tiles, wrap-drawn), per-surface dyes from the checkpoint palette; lighting rig unchanged; face separation by dye steps + normal shading (no shadow maps). |
| D8 | Scene selection | Two pills in the view bar's existing second row: **STAGE** (the checkpoint) and **THEATER** (the room) — one word each. RESET STAGE resets the CURRENT scene to its own seed. |
| D9 | Capture | Not built (owner's postponement stands). The room keeps the five capture invariants of §10, so CAPTURE later is an addition, never a rebuild. Answer to his question: it is an issue in **neither** version — postponed in the checkpoint by his order, possible by construction on this engine. |

---

## 2. Geometry — the room, in numbers

World axes as the file keeps them: x across, y up from the ground, z along
aim; the grid's measuring cell is 92 units. All room heights below are
measured from the room's floor top unless marked *abs* (world y).

**Placement.** The room is centred on the checkpoint's own stage centre:
CENTRE (430, 53) is the stage deck's centre in plan. The room group stands
raised **+2** in y (§3, the grid clearance), so the floor top is abs y = 2.

| Element | Numbers |
|---|---|
| Interior width (x) | **1104** — inner faces at x = −122 and x = 982 (430 ± 552) |
| Interior depth (z) | **1196** — back wall inner face z = −85; front wall inner face z = 1111 |
| Interior height | **460** — ceiling underside at abs y = 462 |
| Floor slab | One box spanning the interior + under the walls: top at abs y = 2, thickness 14 (abs y −12..2) |
| Walls | Four boxes, **thickness 12**, height 460 from floor top; side walls run the full depth, back/front walls span between them (corner joints overlap in plan, hidden inside the stock) |
| Ceiling slab | One box, thickness 12, top at abs y = 474 |
| Stage | **One box, 644 × 23 × 276**, plan x 108..752, z −85..191 (back edge flush with the back wall's inner face; centre (430, 53) = CENTRE). Multi-material: deck top in stage tone, front + sides in riser tone (§6) |
| Wings | 230 of open floor each side of the stage — the brief's "stage side" |
| Audience floor | z 191..1111 = **920 deep**, fully empty — no chairs, no marks but the plank seams and (west wing) the origin ring, §3 |

**Why 23 for "a bit raised" — a derivation, not a taste pick.** The camera
object's eye is fixed at 34 above its floor. A stage deck at or above 34
would hide its own top surface from the camera standing on the floor (an
eye below a plane never sees the plane's top) — the camera would see a
riser and no deck, and "the view covers the whole stage" would fail in
kind, not in margin. 23 = 92/4 (a quarter of the measuring cell) keeps the
deck a full 11 below the eye: the deck reads as a low raised platform
(≈⅓ of the camera object's own height), its top fully visible from the
audience floor, and the riser still reads as a step edge. Any taller stage
is a different brief (it would need the camera raised with it); it is
recorded here as a priced alternative, not taken.

**Caps check.** Every room coordinate sits within ±1111 (cap ±3600 ✓);
every geometry is a plain box ≤ 1196 long (cap: the 4096px textured-
surface cap is met by §6's 512² textures; no geometry joins the WebGL
rider — the rider still names exactly two oversize surfaces, the grid
and the dome).

**Openings.** None. No door, no window — the brief is a closed tiny room;
the director gets in via §4's rule, the camera is already inside.

---

## 3. The grid question — decided

The checkpoint's ground is the infinite shader grid at y=0 (transparent,
depthWrite off, both sides). The room has a paper floor. Three candidate
fates were weighed:

1. **Grid as the floor's print inside the room** — rejected: it would
   duplicate the measuring scale in a second, static medium whose
   anti-aliasing and distance behaviour differ from the shader's, and
   the two grids would disagree at the room's threshold.
2. **Grid retired in room state** — rejected: from outside, the room
   would float in the void with no ground under it (a Class O failure —
   the ground is the orientation anchor), and the director's exterior
   views would lose the floor the whole checkpoint stands on.
3. **Grid survives unchanged; the room stands on it** — **DECIDED.**
   The floor slab is opaque: from inside the room and from any view
   above the floor, the slab occludes the grid beneath it by ordinary
   depth. Outside the room the grid runs to the walls and stops against
   the slab's side — the room reads as *sitting in* the ground plane,
   grounded, exactly as the camera object already stands on it.

Two construction details make (3) true instead of approximate:
- **The +2 raise.** The slab's top is at abs y = 2, its body spans
  −12..2: the grid plane (y=0) passes through the slab's *side*, never
  coplanar with any face — no z-fighting pair exists anywhere in the
  room (coplanarity is the only way two static surfaces shimmer).
- **The scale survives as print.** The floor's grain texture carries
  plank seams every 92 units (§6), so the measuring scale the grid
  teaches outside is the same scale the floor reads inside; the deck's
  board seams do the same on the stage.
- **The origin ring** (at (0, 0.5, 0), on the grid at the world origin)
  falls, in plan, on the room's west wing floor (x=0 is 108 west of the
  stage's west edge; z=0 within the stage's depth band, on open wing
  floor). In room state the ring's y follows the floor: **2.5 abs**
  (floor top + 0.5, its standing offset) — it reads as a floor mark on
  the wing, which is honest: that is where the origin is. The Class O
  edge marker projects (0,0,0); the 2.5-unit offset is sub-pixel at
  room distances and the marker law is unchanged (priced in §12, B7).

---

## 4. The director problem — the dollhouse ghost rule

A closed box with a ceiling occludes every exterior director view. The
candidate rules:

1. **BackSide shell** (one inverted box) — rejected: from outside the
   room is *invisible*, so the tiny-room-in-the-void read dies; wall
   thickness and card edges vanish; and the stage/floor would need a
   second construction anyway. It solves occlusion by deleting the room.
2. **Cutaway by fixed rule** (ceiling always off in director view, etc.)
   — rejected: it lies in poses where the hidden panel should be seen
   (a low exterior view should show the front wall), and it cannot
   follow the eye.
3. **Per-eye dollhouse ghost — DECIDED.** The six shell panels (4 walls,
   ceiling; **the floor is exempt forever**) are registered in Layer 1
   with their outward normals. On every **director** pass (main or PiP —
   the rule keys on the eye, via the pass's existing `isDirView`), each
   panel tests: *is the rendering eye outside this panel's plane, with
   the room centre on the panel's far side?* If yes, the panel renders
   this pass at **opacity 0.07, depthWrite off** (a ghost — its extent
   still reads, so the room's size and the user's place in it never
   vanish); if no, it renders solid. State is applied and restored
   inside the pass, exactly as `renderPass` already handles the camera
   object's per-pass visibility — no shared material state is left
   changed for any other pass (this is capture invariant 4, §10).

Consequences, all intended: orbiting above the room ghosts the ceiling
(the standard top-down diorama view); orbiting in front ghosts the front
wall; the FIND CAMERA flight, wherever it solves to, sees the camera
object (any panel between its eye and the object ghosts by the same
test); a director who dollies *inside* the room sees every panel solid —
a true interior. **The camera's own passes (main or PiP) never ghost:**
the shot is the true room, always — what the camera sees is what a
capture would record.

The floor exemption is deliberate: from below the room (the director's
pitch range allows under-floor poses) the slab's underside and the grid
read as the room's base; ghosting the floor would float the stage and
the camera in space and break Class O's ground answer.

---

## 5. Camera home for the room — framing, with the arithmetic

The lens law (from the file): frame height at distance *d* =
640·d/focal; width = height × aspect. The camera stands on the audience
floor; its eye is at floor + 34 (abs 36). It must cover the **whole
stage**: width 644 (front corners bind — the back corners are farther
and narrower in view), deck top 23, from a centred seat.

**The seat:** on the room's axis, x = 430, near the front wall —
**z = 1071** (40 clear of the front wall's inner face; no near-plane
interaction: near = 1). Distance to the stage's front plane (z = 191):
**880**. Heading **180°** (facing −z, straight at the stage). Aimed at
the deck centre point (430, 25, 53): drop 11 over run 1018 →
**tilt +0.6°**.

**The lens — focal 360, derived from the binding aspect.** Phone
portrait is the binding case; the design floor is the narrowest common
portrait aspect, **20:9 → 0.444** (the owner's phone class is 0.462).
At focal *f*, the horizontal half-angle is atan(tan(atan(320/f)) ×
aspect). The stage's front corner needs atan(322/880) = **20.09°**.

| Focal | FOVv | Half-width @ 0.444 | Half-width @ 0.462 | Verdict |
|---|---|---|---|---|
| 800 (checkpoint) | 43.6° | 10.1° | 10.5° | fails — covering even the narrowed 644 stage would need ≈1810 units of camera distance (≈2070 for the drafted 736); the room offers 880 |
| 400 | 77.3° | 19.6° | 20.3° | fails at 0.444 (needs 20.09°) |
| **360** | **83.3°** | **21.6°** | **22.3°** | **covers, margin 1.5° / 2.2°** |

- Back corners (z = −85, d = 1156): need 15.6° — covered everywhere.
- Vertical: half-FOV 41.7° against a stage that spans ~±3° around the
  aim — covered with the whole back wall in frame above it.
- Desktop landscape (1.78) and 4:3 (1.33): horizontal coverage is
  trivially wider; the stage sits smaller in a taller-feeling frame —
  covered, named, accepted (the brief's coverage is a floor, not a
  fill; framing for the binding aspect is the standing portrait law's
  own logic, applied to the lens).

**ROOM_CAM_HOME = { x: 430, z: 1071, heading: 180, tilt: 0.6, focal:
360 }** (Layer 2). The checkpoint's CAM_HOME is untouched; each scene
carries its own.

**Director home in the room.** The checkpoint's director posture (yaw
0, pitch −6, dolly 60) transplants inside: its eye lands at (500, 254,
985) — inside the room, in the audience air — looking at the orbit
target over the stage. ROOM_DIR_HOME keeps yaw 0 / pitch −6 / roll 0 /
dolly 60 and solves pan through the rig's own formulas so the deck
centre projects to frame centre: starting estimates **panX ≈ 70,
panY ≈ −40** (target (500,150,0) → ≈(430, 110, 4)); Execute solves
exactly by projection and verifies by frame, the way FIND flights are
solved. At that seat the portrait law's 52° horizontal field spans
≈965 at the target's distance — the stage (644) and both wings read
whole; the landscape vertical (33.9°) spans ≈604 against the room's
460 height — the room reads whole.

---

## 6. Materials, textures, lighting

**One texture family, procedurally generated in Layer 1** (the branch
law: no external images; every texture is generated by the file
itself). A single grain generator draws a **512×512** canvas: the
surface's dye as its base, per-pixel speckle noise (±6% luminance),
faint horizontal fibre streaks, and — for seamed surfaces — seam lines
drawn as darker rules. The tile is **wrap-drawn** (every speckle and
streak is also drawn at its ±512 offsets), so the tile repeats
seamlessly; `wrapS = wrapT = RepeatWrapping`, `colorSpace =
SRGBColorSpace`, anisotropy set from the renderer's maximum (≤ 8).
One tile covers **368 world units** (4 grid cells) on every surface, so
grain scale is a world constant, not a per-surface accident. Repeat
counts are integral per surface (width/368 rounded to the nearest
whole tile, the tile's world size adjusted by the same ratio — grain
scale never drifts more than the rounding, ≤ 4%).

| Surface | Dye | Texture | Notes |
|---|---|---|---|
| Walls (back, sides, front) | **#D9BC82** cream-kraft | grain, no seams | The room's lightest large face; the stage reads against it |
| Floor | **#B78D4C** (checkpoint side tone) | grain + **plank seams every 92** across x | Seams run across the room's width; the 92 scale as print (§3) |
| Stage deck (top) | **#CCA45F** (checkpoint top tone) | grain + **board seams every 92** along z | The stage is the room's subject; its tone is the checkpoint object's own top |
| Stage riser (front + sides) | **#77572A** (checkpoint body tone) | grain, no seams | The dark step edge — the deck's boundary reads at a glance |
| Ceiling (underside) | **#E8D9B0** palest kraft | grain, no seams | Palest dye, but lit by ambient only (below) → reads dimmer than the walls: the lid |

**Lighting — the rig is unchanged** (ambient 0xffe9c4 × 0.85 +
directional 0xfff2d8 × 1.15 from (300, 800, 200)), and the room is
designed *for* it:
- There are **no shadow maps** in this engine, so the directional
  reaches interior faces by their normals — a fact the checkpoint
  already lives on. The room turns it into the differentiation
  mechanism instead of fighting it: the floor (up normal) takes the
  full sun; the ceiling's underside (down normal) takes ambient
  only and sits darkest of the pale faces; the +x/+z walls take
  partial sun, the −x/−z walls less — four-plus distinguishable face
  tones from one rig, before the dye steps are counted. §9 sets the
  measured floor for face separation; Execute verifies it on the
  rendered frame, and if two adjacent faces land too close, the cure
  is a dye step (a Layer-2 number), never a new light.
- No light fixture is depicted (the no-candle law's spirit: nothing
  in the scene depicts a light source).

**Geometry discipline.** Panels and slabs are thin **boxes**, built
with the file's own face-by-face `solid()`-era discipline carried into
the GL builders — real card thickness with real edges (a paper
diorama is made of card, not of infinitely thin planes; the gallery
pattern agrees), front-side materials (backface culling stands — it
is load-bearing in this file), one mesh per element: floor 1,
ceiling 1, walls 4, stage 1 (multi-material box) = **7 meshes** in the
room group.

---

## 7. State, seed, reset, and scene selection

- **Layer 2 gains** a `scene` field (`'void'` | `'room'`) with current
  + target discipline like every other state, and per-scene constants:
  `ROOM` (the §2 dimensions as one record), `ROOM_CAM_HOME`,
  `ROOM_DIR_HOME`, `ROOM_SEED_STATE`, per-scene aim points (void:
  CENTRE at ground; room: **(430, 25, 53)**, the deck centre in the
  air), per-scene floor heights (void 0; room 2, with the deck
  footprint's 25 — §8's floor function).
- **Boot is always the checkpoint.** The file boots void; the seed
  file boots void; `?seed=1` is unchanged. The room is entered only
  by its pill or by a new test door `?scene=room`. This is a standing
  constraint, not an implementation detail: the seed press generates
  the seed file from stage.html, so the room's code will exist inside
  the seed file — the *default* scene must therefore remain `'void'`
  forever, or the seed's contract (it boots the empty stage) breaks.
- **Scene selection in the chrome:** two pills in the view bar's
  **existing second row** (the FIND CAMERA / ADD CAMERA row — never a
  third row; the panel's top fence is built on a two-row bound, §12
  B16): **STAGE** and **THEATER**, one word each, `aria-pressed`
  synced like the role pills. A scene switch is a layout change: it
  runs through the role boundary's cancellation (both pointer maps
  emptied, chains wiped) exactly as a role application does.
- **Entering the room** applies ROOM_SEED_STATE: director to
  ROOM_DIR_HOME, camera **present at ROOM_CAM_HOME** — if the camera
  was absent (void seed), entering the room seats it (a theater
  without its camera is outside the brief); currents snap, no glide
  across scenes.
- **RESET STAGE** resets the *current* scene to its own seed: in
  void, today's contract field-for-field (the checkpoint, unchanged);
  in the room, ROOM_SEED_STATE field-for-field. Returning to the
  checkpoint from the room is the STAGE pill (or RESET's sibling —
  no: the pill; RESET never changes scene, so each scene's reset
  contract stays pure).
- **The seed file and press:** `make-seed.py` is unchanged; the seed
  remains the checkpoint (void, no camera). The room has no seed file
  of its own — its seed is a Layer-2 constant, not a file (the form
  law allows one asset directory, and the seed's meaning is the
  checkpoint's).

---

## 8. Layer placement (the split holds)

- **Layer 1 — ASSETS (builders):** `buildRoom()` — the 7 meshes of §6
  under one `roomGroup`, the panel registry (each shell panel + its
  outward normal, for §4), the grain-texture generator family, the
  room's materials. Group visibility is the scene switch's scene-side
  act. Nothing about *when* or *how much* lives here.
- **Layer 2 — STATE (numbers):** `scene` + target; the `ROOM`
  dimension record; `ROOM_CAM_HOME`, `ROOM_DIR_HOME`,
  `ROOM_SEED_STATE`; per-scene aim points and floor parameters; the
  camera state's new chased pair **`camY` / `tCamY`** (the camera's
  height above the world ground — 0 in void; in the room, the floor
  function below). Every number the room obeys is readable here
  without reading a builder.
- **Layer 3 — MECHANICS (engine):** the scene switch (group
  visibility + state application through the role-boundary
  cancellation); the ghost evaluation inside `renderPass`, keyed on
  `isDirView`; the **floor function** `floorAt(x, z)` (void: 0; room:
  25 inside the deck footprint, else 2) whose value chases into
  `camY` with the loop's own τ, and which `syncSceneCam` /
  `syncCamObj` add to the eye/object height; the room-state camera
  clamp (position writes — drag, flights, strafe — clamp to the room
  interior shrunk by the object's half-extents; the deck is *not* an
  exclusion: standing on it is the floor function's business);
  `aimCentre` reading the per-scene aim point; the `?scene=` door in
  the test-view wiring.

---

## 9. Perception — classes N/O re-earned on the room

The checkpoint's classes stand untouched on the void scene. The room
earns its own:

- **N (rendered legibility), room form.** The room has no reference
  *lines*; its legibility question is **face discrimination**: from
  the camera's home frame and the director's home frame, every pair
  of adjacent faces (deck/riser, deck/back wall, riser/floor,
  floor/wall, wall/ceiling) must separate by **≥ 1.6:1 composited**
  (true-WCAG arithmetic, the hook's own method, region medians on
  settled frames) — a floor set for *surfaces that must read as
  different planes*, distinct from the 3:1 line floor, and stated
  here so Verify measures against a number the plan chose, not one
  it invents. The deck's front edge (riser against floor) is the
  binding pair and is named as such.
- **O (orientation), room form.** The four glance questions, answered
  inside a room: *up* — the ceiling/floor tone split + the pale lid;
  *horizon* — the room's own horizontal seams (wall↔floor and
  wall↔ceiling lines are true world horizontals; the dome's band is
  occluded inside and is not claimed); *facing* — the stage itself
  is the room's anchor (you face the stage or you face away from it),
  + heading chip + gizmo, unchanged; *origin* — the ring on the west
  wing floor (§3) + the edge marker, unchanged law. Scale: the 92
  seams on floor and deck carry the measuring scale indoors (§3).
- **P (scoring).** The room's first delivery face scores the same
  five dimensions on the room frames; the weakest is the front
  score, as always. The checkpoint's certification state is
  unaffected by the room's existence (the owner superseded that
  sequence when he declared the checkpoint and directed building
  forward from it).

---

## 10. Capture-readiness — the owner's question, answered

**Is capture fixed in this version, or is it an issue?** Neither
version has it, and in neither is it a defect of the engine: capture
was **postponed by the owner's own order** for the checkpoint
(2026-11-06 12:44 EST), and on this engine it is **possible by
construction** — the scene camera is a real `THREE.PerspectiveCamera`
whose pose comes only from camera state, rendered every frame. The
standard WebGL routes all apply: a photo is a same-task render +
`canvas.toBlob`; a video is `captureStream()` + `MediaRecorder`;
full-camera-resolution capture (beyond the screen) renders the shot
to a `WebGLRenderTarget` at the chosen size — never the composited
page canvas, which on this page carries the director, PiP and gizmo
passes and would record the chrome's layout, not the shot.

The room build must keep five invariants true so CAPTURE is later an
addition and never a rebuild:
1. **One scene graph, state-driven** (already law) — the room joins
   the same scene, under its group; no parallel room world.
2. **The scene camera's pose comes only from camera state** (already
   true) — including its height: `camY` is state, so a capture pass
   reads the same eye the owner sees.
3. **No scene content outside the scene graph** — the room is pure
   Layer-1 content; nothing of it lives in DOM/CSS or in a
   pass-specific overlay (the aids law already keeps instruments out
   of the camera pass).
4. **Pass-scoped effects stay pass-scoped** — §4's ghost is applied
   and restored inside director passes; a capture (camera) pass can
   never catch a faded panel, in code or in a mid-frame state.
5. **Static geometry** — the room builds once at init; a capture
   pass at another resolution is a pure re-render of the same graph.
   (And a corollary the capture job must honour, recorded now so it
   is not rediscovered as a bug: the renderer does **not** preserve
   the drawing buffer — photo capture must render-then-read in the
   same task. Flipping `preserveDrawingBuffer` on is *not* the fix;
   it costs phone performance every frame for a per-photo need.)

---

## 11. Verify design for the future Execute (checks named now)

1. **Framing coverage, measured:** the stage's 8 corners projected
   through the scene camera at ROOM_CAM_HOME at aspects **0.444,
   0.462, 1.33, 1.78** — all inside the frame with NDC margin ≥ 0.02;
   plus a rendered phone-size camera frame, viewed: deck, riser and
   both stage sides visible whole.
2. **Emptiness census:** the room group's children enumerated —
   exactly the 7 meshes of §6 + the camera object; no chairs, no
   curtain, no extras; the audience floor empty in the rendered
   frames (west-wing ring excepted, named).
3. **Occlusion frames:** director poses — front-high, top-down,
   inside-centre, behind the back wall, below the floor — each
   panel's ghost state asserted (opacity read + frame viewed);
   camera-pass frames at the same world poses show **no** ghosting.
   FIND CAMERA in room state lands a frame with the camera object
   visible (ghosting serves the flight).
4. **Regression:** the full checkpoint harness suites stay green;
   RESET in void reproduces SEED_STATE field-for-field; RESET in
   room reproduces ROOM_SEED_STATE field-for-field; scene round-trip
   (void → room → void) restores the checkpoint state exactly.
5. **Chrome law:** ten-word census re-run including the new pills
   (1 word each) and the room's hint maps (the ghost rule's line —
   "Walls fade when you orbit outside", 6 words — lives inside the
   tap-gated map); view-bar height census in the room scene at every
   width — never above the two-row bound the panel fence is built on.
6. **Perception:** §9's face-separation census (binding pair named)
   on settled frames in both home views; the four room glance
   questions answered from frames by the verifier, not inferred.
7. **Caps:** room coordinates, texture sizes, and geometry sizes
   re-censused against the phone-hardening law; the WebGL rider
   still names exactly two exceptions.

---

## 12. Iteration log + blind-spot register

**Iteration 1 — draft.** Geometry at room 1104 × 920 × 460, stage
736 × 276 × 46, camera home focal 800 inherited, grid retired inside
the room, BackSide shell for the director, reset = room seed replaces
the seed.

**Hunt 1 (against the draft) — 8 findings:**
- **B1.** Stage height 46 > eye height 34 → the deck's top is
  invisible from the camera on the floor; "covers the whole stage"
  fails in kind. → **Cured:** stage 23, derived in §2.
- **B2.** Floor slab top coplanar with the grid plane (both y=0) →
  z-fighting shimmer across the whole floor. → **Cured:** the +2
  raise; the grid passes through the slab's side (§3).
- **B3.** Framing impossible as drafted: the 736-wide stage at focal
  800 needs ≈1990 units of distance in portrait — more than the
  room holds; even focal 400 fails a 20:9 phone. → **Cured:** stage
  644, room depth 1196, focal 360, binding aspect named (§5).
- **B4.** A BackSide shell deletes the room from outside (and its
  card edges everywhere). → **Cured:** assembled box panels + the
  dollhouse ghost (§4, §6).
- **B5.** The directional sun reaches interior faces (no shadow
  maps): a draft "fix" would have added shadow maps — new cost and
  a new failure class on phone GPUs. → **Cured by design:** no
  shadow maps; normal shading + dye steps are the differentiation
  mechanism, measured in §9.
- **B6.** The camera object can be dragged through walls, and onto
  the deck footprint with a floor-locked height (it would sink into
  the riser). → **Cured:** room-state interior clamp + the two-level
  floor function with a chased `camY` (§8).
- **B7.** The origin ring at (0, 0.5, 0) sits *under* the room's
  floor (top y=2) — hidden in room state, and the wing floor it
  stands on went unnoticed in the draft's placement. → **Cured:**
  ring y follows the scene floor (2.5 in the room, on the west wing,
  named in §3).
- **B8.** `aimCentre` aims at a ground point; in the room the aim
  target is the deck centre *in the air* (430, 25, 53) — as drafted,
  AIM would have driven the camera's aim into the riser. →
  **Cured:** per-scene aim points (§7, §8).

**Iteration 2 — revision** (geometry, grid, director rule, framing,
state model as they now stand in §§2–8).

**Hunt 2 (against the revision) — 9 findings:**
- **B9.** The ghost rule as first revised keyed on the *surface*
  (main vs PiP); but the PiP shows the director whenever the main
  view is the camera — a surface-keyed rule would fade panels in a
  camera-context surface and, worse, could leave a camera PiP
  unfaded-but-wrong in the opposite swap. → **Cured:** the rule
  keys on the *eye* (`isDirView` in the pass), never the surface (§4).
- **B10.** Ghost panels (transparent, depthWrite off) sort against
  the grid (also transparent, depthWrite off): through a ghosted
  front wall, grid lines could paint over the room's interior.
  → **Cured in plan:** ghost opacity is shallow (0.07) but the
  panels keep their standing render order after the grid, and the
  ghost test only ever fades panels *between the eye and the
  centre* — the far side's panels stay solid, so the interior is
  always read against a solid back. Named as Verify check 3's
  frame census.
- **B11.** `captureStream` on the page canvas would record all
  three passes (director + PiP + gizmo), not the shot. → **Cured
  as a recorded invariant:** capture renders the scene camera to
  its own target (§10); nothing in the room build may assume the
  page canvas is the shot.
- **B12.** `preserveDrawingBuffer` is off (verified in the bytes):
  a naive photo capture reads a blank canvas. → **Recorded** as
  §10's corollary — render-then-read in the same task; the flag
  stays off on purpose.
- **B13.** Canvas-texture repeat seams are a known artifact class;
  the draft's grain was not wrap-aware. → **Cured:** wrap-drawn
  tiles + integral repeats (§6).
- **B14.** The seed file will contain the room's code (it is
  generated from stage.html): if the default scene were ever
  'room', the seed would boot the wrong scene and the checkpoint
  contract would break silently. → **Cured as a standing
  constraint:** boot is always 'void' (§7).
- **B15.** Ten-word law on new chrome: the pills are 1 word each,
  but the ghost rule is undiscoverable without a hint line. →
  **Cured:** one 6-word line inside the tap-gated hint map (§11
  check 5); the short hint lines are unchanged.
- **B16.** The view bar's two-row bound (86px) is what the settings
  panel's top fence is built on: scene pills in a *third* row
  would reopen the fix-round-9/10 defect class on the room scene.
  → **Cured:** pills join the existing second row; the bar-height
  census is a Verify check (§7, §11).
- **B17.** FIND CAMERA's solved pose in the room may sit above the
  ceiling or behind a wall — the draft assumed the flight "just
  works". → **Cured by the rule's generality:** the ghost test is
  per-panel against the actual eye, so any solved pose sees the
  object; Verify check 3 names the FIND case explicitly.
- **B18.** The room's exterior in the void is a plain paper box;
  the dome's horizon band behind it is the only backdrop. →
  **Accepted risk:** the diorama read is the Academy's paper
  family; if the owner wants the exterior dressed, that is a
  later scene decision, not this job. Priced: zero work now.
- **B19/B20 (counted together in the hunt, separated here).**
  B19: caps re-check — room coordinates ≤ 1111, textures 512², no
  new rider exception. **Cured** (verified in §2/§6). B20: the
  AIDS frustum helper draws through walls in the director view —
  it is an instrument, off by default, aids law already governs
  it. **Accepted, priced zero.**

**Iteration 3 — final.** All hunts applied; §§1–11 are the revised
text. **Register tally: 20 findings — 17 cured in the plan (B5 by
design: the no-shadow-map fact became the differentiation mechanism),
1 recorded as a standing invariant for the future capture job (B12),
2 accepted risks (B18, B20), 0 unexamined, 0 blocking owner
questions.** (The desktop-framing headroom of §5 is a named property
of decision D6, not a register item.)

---

## 13. What Execute inherits (in order)

1. Layer 2 constants (§7) → Layer 1 `buildRoom()` (§6) → Layer 3
   mechanics (§8) → chrome (pills, hint line) → seed press re-run
   (seed still boots the checkpoint) → the §11 verify battery →
   delivery face with the §9 Class P score on room frames.
2. The two numbers Execute must *solve*, not copy: ROOM_DIR_HOME's
   pan pair (projection solve through the rig, §5) and any dye step
   the §9 census forces (a Layer-2 change, recorded with its
   measurement).
3. Non-goals for Execute, restated: no chairs, no curtain, no
   openings, no capture controls, no new library, no change to the
   checkpoint scene's behaviour or bytes-path.
