# THE EMPTY THEATER ROOM — PLAN (stage3d, new OPEVC job)

**Phase: OBSERVE + PLAN only. No build in this job.** Iterated three times
inside the job (draft → blind-spot hunt 1 → revision → blind-spot hunt 2 →
final), then taken through **seven more professional passes (4–10,
2026-11-07, owner's order)** — independent seats for geometry, sightlines,
materials, WebGL engineering, set design, failure modes (FMEA, §13), and
verification — scored on ten dimensions (§12). **Plan front score: 8/10**
(weakest dimensions: materials, phone reality, extensibility — each with
its named residual). The iteration log and blind-spot register stand in
§12 — the plan is final only because the register's open items are
accepted risks, never unexamined items. There are **zero blocking owner
questions**.

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
- Sightline method (passes 5, added 2026-11-07): Wikipedia, "Sightline
  (architecture)" — the **C-value** discipline (a fixed point of focus;
  the sightline from each eye must clear the obstruction in front of
  it), the split into vertical + horizontal sightline exercises, and
  the auditorium viewing-angle bands (30° no head movement · 60°
  slight movement · 110° eye/shoulder — Neufert-derived auditorium
  proportions, via the same source).
- Set design for camera (pass 8): the **wild wall** tradition — wall
  sections built to be removed/flown so a camera can occupy the
  wall's place, invisible in the finished shot (production accounts:
  Chet Thomas's set tour, 2026-10-28; Shaun Russell's set-construction
  explainers; the 2001 EVA-pod interior set's "floating / wild /
  flyaway" panels, The Age of Plastic production notes). Sets are
  built as framed **flats** — panels, not solid architecture.
- three.js transparency + colour (pass 7): the renderer sorts
  transparent objects **per object by centroid distance**, not per
  triangle, and `renderOrder` is the explicit override (Cornell
  CS4620 graphics notes, quoting three.js's own maintainer: three.js
  has no order-independent transparency in the blending path);
  `alphaHash` (r154+) is the named modern alternative. Colour: r152+
  defaults are sRGB output with colour management on; **ACES filmic
  tone mapping washes flat textures out and shifts hues** (three.js
  discourse #15484) — a measured-contrast plan must name its transfer
  function, and this file sets none (§6).

---

## 1. Headline decisions

| # | Decision | Value |
|---|----------|-------|
| D1 | Scene model | Two scenes, one file: a Layer-2 `scene` field (`'void'` \| `'room'`); boot is ALWAYS the checkpoint (void). The room is additive — every checkpoint behaviour is the regression floor. |
| D2 | Room interior | **1104 wide × 1196 deep × 460 high** (12 × 13 × 5 grid cells of 92), centred on CENTRE (430, 53) **in x**; in z, CENTRE is the *stage's* centre — the room's own z-centre is 513 (pass 4 wording cure, R7). |
| D3 | Stage | **644 wide × 276 deep × 23 high** ("a bit raised" = 23 — derived, §2), back edge flush with the back wall, centred on CENTRE; wings 230 each side. |
| D4 | Grid fate | The shader grid **survives unchanged, everywhere**; the room stands on it (group raised +2). Inside the room the floor's plank seams carry the 92 measuring scale as print. |
| D5 | Director rule | **Dollhouse ghost**: shell panels between a director eye and the room centre fade to 0.07 opacity (depthWrite off) for that pass only; the floor never fades; camera passes never fade. Never a sealed box. |
| D6 | Room camera home | **(430, 1052), heading 180°, tilt +0.6°, focal 360** — covers the whole stage at both aspects; binding aspect is portrait 20:9 (0.444), margin ≥ 1.0°. Arithmetic in §5. (Pass 4 moved the seat from the drafted 1071: at 1071 the camera object's body interpenetrated the front wall by 11 units — R1.) |
| D7 | Materials | One procedural grain-texture family (512² canvas tiles, wrap-drawn), per-surface dyes derived by **computed composited luminance** against the unchanged rig (pass 6, §6's prediction table: walls **#C8A668**, ceiling **#A87F45**, floor/deck/riser keep the checkpoint tones); face separation by dye steps + normal shading (no shadow maps). |
| D8 | Scene selection | Two pills in the view bar's existing second row: **STAGE** (the checkpoint) and **THEATER** (the room) — one word each. RESET STAGE resets the CURRENT scene to its own seed. |
| D9 | Capture | Not built (owner's postponement stands). The room keeps the five capture invariants of §10, so CAPTURE later is an addition, never a rebuild. Answer to his question: it is an issue in **neither** version — postponed in the checkpoint by his order, possible by construction on this engine. |

---

## 2. Geometry — the room, in numbers

World axes as the file keeps them: x across, y up from the ground, z along
aim; the grid's measuring cell is 92 units. All room heights below are
measured from the room's floor top unless marked *abs* (world y).

**Placement.** The room is centred on the checkpoint's own stage centre
**in x**: CENTRE (430, 53) is the stage deck's centre in plan, and the
stage sits against the back wall, so the room extends 920 of audience
floor in front of it — the room's own z-centre is 513, not 53 (pass 4
wording cure, R7: the draft's "centred on CENTRE" was false in z and a
builder reading it literally would misplace every downstream number).
The room group stands raised **+2** in y (§3, the grid clearance), so
the floor top is abs y = 2. Interior: width **1104** (inner faces
x = −122 and 982), depth **1196** (back wall inner face z = −85, front
wall inner face z = 1111), height **460** (ceiling underside abs 462).

**Construction table — every mesh, sized and seated** (pass 4: the
draft carried interior dimensions and left the boxes to inference; a
builder now needs no interpretation):

| Mesh | Box (w × h × d) | Centre (x, y, z) abs | Faces / notes |
|---|---|---|---|
| Floor slab | 1128 × 14 × 1220 | (430, −5, 513) | Top at abs y = 2; spans the interior + under the walls |
| Back wall | 1104 × 460 × 12 | (430, 232, −91) | Spans between the side walls; inner face z = −85 |
| Front wall | 1104 × 460 × 12 | (430, 232, 1117) | Spans between the side walls; inner face z = 1111 |
| West wall | 12 × 460 × 1220 | (−128, 232, 513) | Runs the full depth (behind the back/front walls' spans — corner joints overlap inside the stock, never on a visible face); inner face x = −122 |
| East wall | 12 × 460 × 1220 | (988, 232, 513) | As the west; inner face x = 982 |
| Ceiling slab | 1128 × 12 × 1220 | (430, 468, 513) | Underside abs 462, top abs 474; spans the walls |
| Stage | 644 × 23 × 276 | (430, 13.5, 53) | Top (deck) abs 25; plan x 108..752, z −85..191, back edge flush with the back wall's inner face; centre = CENTRE. Multi-material box: deck top in stage tone, front + sides + bottom in riser tone (§6) |

Wings: 230 of open floor each side of the stage — the brief's "stage
side". Audience floor: z 191..1111 = **920 deep**, fully empty — no
chairs, no marks but the plank seams and (west wing) the origin ring,
§3. Walls stand on the floor top (abs 2..462); every wall is its own
mesh with its own material (§6, R3).

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
recorded here as a priced alternative, not taken. (The finite-deck
form of the same proof — the grazing sightline from the seated eye
over the deck's front edge, in the theatre discipline's own terms —
stands in §5, pass 5.)

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
3. **Per-eye dollhouse ghost — DECIDED.** The five ghostable shell
   panels (4 walls + ceiling; **the floor is exempt forever** — pass 4
   count cure, R11: the draft said "six") are registered in Layer 1
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

**The professional ancestor (pass 8).** This rule is the **wild wall**
of film/TV set design, translated: on a soundstage, wall sections are
built as framed flats that fly or roll away so the camera can occupy
the wall's place, and the craft's first rule is that the mechanism is
never visible in the shot. The mapping here is exact in both halves:
the *director* is the one who needs to occupy the walls' places (the
in-world camera already lives inside, so the set itself never needs
to fly for it), and the camera passes never ghost — the mechanism
never appears in the shot. Two disciplines come with the translation
and are part of the decision: (a) **per-panel state** — a wild wall
moves independently or it is not wild; §6 therefore gives every shell
panel its own material instance (R3), and (b) **restore discipline**
— the ghost is applied and restored inside the pass's *protected*
section, under the branch's total-isolation discipline (a thrown
render costs one frame, never the loop): a restore that an exception
could skip would strand a panel at 0.07 into a later camera pass and
break capture invariant 4 (§10) in fact, not just in wording (R10).
The ghost's paint order is likewise constructed, not assumed: three.js
sorts transparent objects per frame by centroid distance, so a ghosted
panel's order against the (also transparent) grid is **pinned by
explicit `renderOrder`** — a ghosted panel renders at the grid's own
renderOrder + 1 for the pass, restored with the ghost state (R4;
supersedes B10's "standing render order" wording, which described no
mechanism). `alphaHash` (r154+, present in the vendored r186) was
considered as the order-independent alternative and not adopted: the
ghost set is at most two large planes at 0.07 alpha with depthWrite
off, where blending order between them is below visibility, and the
checkpoint's material discipline stays untouched.

---

## 5. Camera home for the room — framing, with the arithmetic

The lens law (from the file): frame height at distance *d* =
640·d/focal; width = height × aspect. The camera stands on the audience
floor; its eye is at floor + 34 (abs 36). It must cover the **whole
stage**: width 644 (front corners bind — the back corners are farther
and narrower in view), deck top 23, from a centred seat.

**The seat:** on the room's axis, x = 430, near the front wall —
**z = 1052**. The seat is set by two constraints, and the draft only
honoured one: framing wants distance, but the camera is an *object*
102 deep (half 51) — at the drafted z = 1071 its back face reached
z = 1122, **11 units inside the front wall** (inner face 1111), and
its grab pads 19 (pass 4, R1 — the single most serious defect the
professional passes found). At 1052 the body's back face sits at
1103, 8 clear of the wall, and the seat satisfies §8's own interior
clamp (z ≤ 1060). Distance to the stage's front plane (z = 191):
**861**. No near-plane interaction (near = 1). Heading **180°**
(facing −z, straight at the stage). Aimed at the deck centre point
(430, 25, 53): drop 11 over run 999 → **tilt +0.6°**.

**The lens — focal 360, derived from the binding aspect.** Phone
portrait is the binding case; the design floor is the narrowest common
portrait aspect, **20:9 → 0.444** (the owner's phone class is 0.462).
At focal *f*, the horizontal half-angle is atan(tan(atan(320/f)) ×
aspect). The stage's front corner needs atan(322/861) = **20.50°**.

| Focal | FOVv | Half-width @ 0.444 | Half-width @ 0.462 | Verdict |
|---|---|---|---|---|
| 800 (checkpoint) | 43.6° | 10.1° | 10.5° | fails — covering even the narrowed 644 stage would need ≈1810 units of camera distance (≈2070 for the drafted 736); the room offers 861 |
| 400 | 77.3° | 19.6° | 20.3° | fails at 0.444 (needs 20.50°) |
| **360** | **83.3°** | **21.6°** | **22.3°** | **covers, margin 1.0° / 1.8°** |

- Back corners (z = −85, d = 1137): need 15.8° — covered everywhere.
- Vertical: half-FOV 41.7° against a stage that spans ~±3° around the
  aim — covered with the whole back wall in frame above it.
- Desktop landscape (1.78) and 4:3 (1.33): horizontal coverage is
  trivially wider; the stage sits smaller in a taller-feeling frame —
  covered, named, accepted (the brief's coverage is a floor, not a
  fill; framing for the binding aspect is the standing portrait law's
  own logic, applied to the lens).

**ROOM_CAM_HOME = { x: 430, z: 1052, heading: 180, tilt: 0.6, focal:
360 }** (Layer 2). The checkpoint's CAM_HOME is untouched; each scene
carries its own.

**The sightline proof, in the theatre discipline's own terms (pass
5).** FOV containment proves the stage's *corners* land in frame; the
professional sightline method asks the second question — from the
fixed eye, does the line of sight to the **lowest point of interest**
(here the deck's back edge, the far end of the surface the brief says
must be covered) clear the obstruction in front of it (the deck's own
front edge)? Eye at abs 36, front edge top abs 25 at d = 861, back
edge at d = 1137: the sightline passes the front edge at abs **27.67 —
clearance 2.67 units** — the whole deck surface is visible, proved
the C-value way. The same arithmetic prices the read honestly: the
grazing angle to the back edge is **0.55°**, so the deck's full 276
of depth projects to ≈0.73° of frame height — the deck reads as a
low, heavily foreshortened band, its board seams compressing toward
the back wall. That is inherent to a floor-standing camera before a
low stage (the theatre's own cure is raked seating, which this brief
does not contain), and it is recorded as accepted failure mode FM-4
rather than discovered by the owner. Horizontally, the stage
subtends **41.0°** at the seat — inside the 60° "slight head
movement" band of auditorium proportion practice: the whole stage
takes in one comfortable look. And the design floor is restated
honestly: at a 21:9 phone (aspect 0.4286, the narrowest in
production) the half-width at focal 360 is 20.86° against 20.50°
needed — covered, margin 0.36°; no production phone is narrower.

**Director home in the room.** The checkpoint's director posture (yaw
0, pitch −6, dolly 60) transplants inside: its eye lands at (500, 254,
985) — inside the room, in the audience air — looking at the orbit
target over the stage. ROOM_DIR_HOME keeps yaw 0 / pitch −6 / roll 0 /
dolly 60 and solves pan through the rig's own formulas so the deck
centre projects to frame centre: starting estimates **panX ≈ 70,
panY ≈ −40** (target (500,150,0) → ≈(430, 110, 0) — pan is a
two-vector and never moves the target's z; the draft's stray z
component is struck, R11); Execute solves
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
grain scale is a world constant, not a per-surface accident. Repeats
are **exact and fractional** — surface size ÷ 368, no rounding: a
wrap-drawn tile is seamless at *any* repeat (the seam class lives at
the tile's own border, which wrap-drawing cures), and the seamed
surfaces stay exact because each tile carries exactly 4 seams — the
spacing is 92 at every repeat, and a seam cut mid-line at a surface
edge hides under the neighbouring panel. (Pass 7 simplification, R5:
the draft's integral-repeat rule contradicted itself — measured
against its own "≤ 4% drift" claim, rounding produced 8–25% grain
drift on four of five axes. The simpler rule is exact everywhere.)
Two disciplines ride on the family: **repeat is a texture property**,
so faces sharing a texture inherit its repeat — the boxes' 12–14-unit
edge faces take a squished grain, accepted as sub-visible; and **every
shell panel owns its material instance and its texture clone** (the
clones share the one drawn canvas — no extra memory of consequence),
because §4's ghost sets opacity per panel and three.js opacity is a
material property: one shared wall material would fade all four walls
together or none (pass 7, R3). On wall textures the repeat is
(width/368, 1): v spans the wall's full height so the tile's **foot
gradient** — a multiply to 0.80 across the bottom 10% — lands at the
floor line on every wall, the flat-shading era's baked contact shade;
the 25% vertical grain stretch this causes is invisible in speckle
with horizontal fibres.

| Surface | Dye | Texture | Notes |
|---|---|---|---|
| Walls (back, sides, front) | **#C8A668** mid-kraft (re-derived pass 6) | grain + foot gradient, no seams | One dye, four shadings (prediction table below); dark enough for the deck to separate from the back wall (1.62:1 predicted) |
| Floor | **#B78D4C** (checkpoint side tone) | grain + **plank seams every 92** across x | Seams run across the room's width; the 92 scale as print (§3) |
| Stage deck (top) | **#CCA45F** (checkpoint top tone) | grain + **board seams every 92** along z | The stage is the room's subject; its tone is the checkpoint object's own top |
| Stage riser (front + sides) | **#77572A** (checkpoint body tone) | grain, no seams | The dark step edge — the deck's boundary reads at a glance |
| Ceiling slab (all faces) | **#A87F45** dark kraft (re-derived pass 6) | grain, no seams | The room's **dark lid** — the theatre convention, and the only dye class that separates from every wall under ambient-only light (1.56–2.19:1 predicted). The draft's palest dye (#E8D9B0) computed *into* the walls' own band (1.02–1.09:1) — "palest + ambient-only = dimmer" was a plausible story the arithmetic disproves; struck (R2) |

**Lighting — the rig is unchanged** (ambient 0xffe9c4 × 0.85 +
directional 0xfff2d8 × 1.15 from (300, 800, 200)), and the room is
designed *for* it:
- There are **no shadow maps** in this engine, so the directional
  reaches interior faces by their normals — a fact the checkpoint
  already lives on. The room turns it into the differentiation
  mechanism instead of fighting it: the floor (up normal) takes the
  full sun; the ceiling's underside (down normal) takes ambient
  only, and its dye is chosen *for* that light (above) so the lid
  reads darkest by design, not by accident; the +x/+z walls take
  partial sun, the −x/−z walls ambient only. §9 sets the measured
  floors for face separation; Execute verifies them on the
  rendered frame, and if two adjacent faces land too close, the cure
  is a dye step (a Layer-2 number), never a new light.
- No light fixture is depicted (the no-candle law's spirit: nothing
  in the scene depicts a light source).

**The prediction table (pass 6 — the computed leg of §9).** Face
separation is *computed here*, not hoped for in Execute: each dye's
relative luminance (WCAG sRGB linearisation — Class N's own
arithmetic) × the rig's face factor (ambient 0.85 + directional
1.15 × max(0, n·L̂), L̂ = (0.342, 0.912, 0.228) from the light's
position) gives the predicted composited luminance; specular is
ignored (roughness 0.85–0.9 matte) and the grain's ±6% averages out
of any region median. Face factors: up faces **1.90** · back wall
(+z) **1.11** · west wall (+x) **1.24** · front wall, east wall,
ceiling underside **0.85** (ambient only).

| Face | Dye L | × factor | Predicted composited L |
|---|---|---|---|
| Deck | 0.402 | 1.90 | **0.76** |
| Floor | 0.296 | 1.90 | **0.56** |
| Back wall | 0.406 | 1.11 | **0.45** |
| West wall | 0.406 | 1.24 | **0.50** |
| Front / east walls | 0.406 | 0.85 | **0.35** |
| Ceiling underside | 0.239 | 0.85 | **0.20** |
| Riser (front) | 0.109 | 1.11 | **0.12** |

Predicted pair ratios ((L₁+.05)/(L₂+.05)): deck↔back wall **1.62** ·
deck↔riser **4.8** · riser↔floor **3.6** · floor↔back wall **1.22** ·
floor↔west wall **1.11** · floor↔front/east walls **1.55** ·
walls↔ceiling **1.56–2.19** · wall↔wall corners **1.11** · the west
wall's foot-gradient strip against the floor **1.35** (a local step
at the junction, not a region ratio). §9's floors are set from this
table; §11's measured census rules where the two legs disagree.

**The measurement basis, named (pass 7, R12).** Read from the file:
the renderer sets antialias on and caps the pixel ratio at 2 — and
sets nothing else. The inherited transfer is therefore three.js
r186's default: **sRGB output, colour management on, NoToneMapping**.
Every ratio in this plan is stated under that transfer. Standing
warning: adopting a filmic tone mapping later (ACES/AgX) compresses
exactly the highlight band these ratios live in (and washes flat
textures, §0) — §6/§9's numbers would stand invalidated until
re-derived. Tone mapping is a new decision whenever it is proposed,
never a silent upgrade.

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
- **Entry semantics, both ways (pass 9, R8):** entering a scene
  applies *that scene's seed state*, always. Returning via STAGE
  therefore lands on the checkpoint exactly — not on wherever the
  void scene was left — and re-entering THEATER lands on
  ROOM_SEED_STATE. Nothing persists across scenes, by decision: the
  switcher is a pair of doors between two known states, not a state
  keeper. (§11 check 4 enforces both halves.)
- **Pill coexistence census (pass 9, R9):** the second row never
  carries more than three pills in any state — void with camera:
  FIND CAMERA + STAGE + THEATER · void seed: ADD CAMERA + STAGE +
  THEATER (FIND leaves with the camera controls) · room: FIND
  CAMERA + STAGE + THEATER (ADD CAMERA never renders; the room
  always seats its camera). The two-row bound the panel fence is
  built on is preserved by construction in every state; §11
  check 5 censuses it per state.
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
  interior shrunk by the object's half-extents — admitted z-range
  [−34, 1060], and ROOM_CAM_HOME at 1052 sits inside it with margin,
  pass 4 / R1; the deck is *not* an
  exclusion: standing on it is the floor function's business);
  `aimCentre` reading the per-scene aim point; the `?scene=` door in
  the test-view wiring.

---

## 9. Perception — classes N/O re-earned on the room

The checkpoint's classes stand untouched on the void scene. The room
earns its own:

- **N (rendered legibility), room form.** The room has no reference
  *lines*; its legibility question is **face discrimination**, and
  pass 6 split it into the two classes the physics actually offers
  (true-WCAG arithmetic, the hook's own method, region medians on
  settled frames, from the camera's home frame and the director's
  home frame):
  - **Subject pairs** — the stage against what touches it:
    deck↔riser, deck↔back wall, riser↔floor must separate by
    **≥ 1.6:1 composited**. The binding pair is **deck↔back wall,
    predicted 1.62** — the draft named riser↔floor, which the
    computed table shows is the *strongest* pair (3.6); a plan that
    names the wrong binding pair sends Verify to watch the wrong
    junction (R2).
  - **Shell pairs** — the enclosure: floor↔walls, wall↔wall
    corners, walls↔ceiling must separate by **≥ 1.10:1 region
    median AND a junction step ≥ 1.25:1** measured on a 12-unit
    strip pair straddling the junction line. Flat-shaded rooms are
    read at their edges: the foot gradient and the shading step
    across each corner are the mechanism, and the strip census is
    its measure. Predicted: region ratios 1.11–2.19, binding strip
    (the sun-side west junction) 1.35.
  A single 1.6:1 floor for every pair — the draft's form — is
  arithmetically unreachable for same-dye shell pairs under one
  directional light (§6's table: floor↔back wall computed 1.03,
  wall↔ceiling 1.02 under the draft's own dyes). A floor the plan
  knows the build cannot meet is not a standard; it is a trap laid
  for Execute. The two-class form states what each surface group
  must actually do, and every number in it is one the plan computed
  before it demanded.
- **O (orientation), room form.** The four glance questions, answered
  inside a room: *up* — the ceiling/floor tone split + the dark lid;
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
   through the scene camera at ROOM_CAM_HOME at aspects **0.4286,
   0.444, 0.462, 1.33, 1.78** — all inside the frame with NDC margin ≥ 0.02;
   plus a rendered phone-size camera frame, viewed: deck, riser and
   both stage sides visible whole. Two pass-4/5 guards ride here:
   the camera object's **body AABB at ROOM_CAM_HOME strictly inside
   the interior** (no face within 0 of a wall — R1's regression
   check; framing corners alone would have passed the interpenetrating
   seat), and the deck's **projected height** on the phone-size frame
   measured against §5's predicted ≈0.73° (±25%) — the foreshortening
   is verified as designed, never discovered by the owner.
2. **Emptiness census:** the room group's children enumerated —
   exactly the 7 meshes of §6 + the camera object; no chairs, no
   curtain, no extras; the audience floor empty in the rendered
   frames (west-wing ring excepted, named).
3. **Occlusion frames:** director poses — front-high, top-down,
   inside-centre, behind the back wall, below the floor — each
   panel's ghost state asserted (opacity read + frame viewed);
   camera-pass frames at the same world poses show **no** ghosting.
   FIND CAMERA in room state lands a frame with the camera object
   visible (ghosting serves the flight). Plus a state inspection,
   not a frame inference: each ghosted panel's material is its own
   instance, and its renderOrder reads grid+1 during the pass and
   restored after it (R3/R4 verified in the state, where they live).
4. **Regression:** the full checkpoint harness suites stay green;
   RESET in void reproduces SEED_STATE field-for-field; RESET in
   room reproduces ROOM_SEED_STATE field-for-field; scene round-trip
   (void → room → void) restores the checkpoint state exactly.
5. **Chrome law:** ten-word census re-run including the new pills
   (1 word each) and the room's hint maps (the ghost rule's line —
   "Walls fade when you orbit outside", 6 words — lives inside the
   tap-gated map); view-bar height census in the room scene at every
   width — never above the two-row bound the panel fence is built on.
   The per-state pill coexistence census of §7 (R9) belongs to this
   check: row 2's pill count and the bar's height are measured in
   void-with-camera, void-seed, and room states alike.
6. **Perception:** §9's two-class census on settled frames in both
   home views — subject pairs against the 1.6 floor (deck↔back wall
   binding), shell pairs against the 1.10 region floor and the 1.25
   junction-strip floor — compared line-by-line with §6's prediction
   table; any pair disagreeing with its prediction by more than
   ±0.15 is reported as a finding, not silently passed. The four
   room glance questions answered from frames by the verifier, not
   inferred.
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

**Passes 4–10 — the professional iteration (2026-11-07, owner's
order: "iterate… make sure this plan is the best professionals in
this field would develop").** Each pass is an independent seat,
argued from the §0 professional sources, scored on ten dimensions
(0–10; the plan's front is its weakest). The as-found scores are the
honest grade of the 3-iteration plan above: its register had hunted
well inside its own framing and still missed the round's most
serious defect — the standing pathology, recorded, not excused.

**Pass 4 — Geometry & arithmetic audit** (every number recomputed
from the file's constants, none taken from the plan's own tables).
The plan's framing table re-verified exact. Found **R1 (critical)**,
R7, R11. Geometry 5→9 · Clarity 6→8.
**Pass 5 — Sightline seat** (C-value method, viewing-angle bands).
Found R6; the grazing-line proof and the 21:9 floor now stand in §5.
Sightline 6→9.
**Pass 6 — Materials & perception seat** (composited-luminance
arithmetic on the plan's own dyes × the rig's face factors). Found
**R2 (critical)**: the draft's §9 was unmeetable and its binding
pair wrong. Dyes re-derived, §6's prediction table added, §9 split
into subject/shell classes. Materials 5→8.
**Pass 7 — WebGL engineering seat** (transparency sorting, colour
management, texture practice). Found R3, R4, R5, R12. WebGL 6→9 ·
Clarity 8→9.
**Pass 8 — Set-design-for-camera seat** (wild walls, flats). The
ghost confirmed as the wild-wall translation; its two craft
disciplines (per-panel state, restore discipline) folded into §4.
No score moved; the seat's value was confirmation from the tradition
the draft had reinvented unnamed.
**Pass 9 — Failure-mode pass (FMEA)** — the executed scene in the
owner's hands, §13. Found R8, R9, R10. Failure modes 5→9 · Phone 7→8.
**Pass 10 — Verification design + full re-read.** §11's battery
re-aimed at this round's defect classes (AABB guard, deck
projection, renderOrder/material inspection, pill census, two-class
perception census with prediction comparison). Verification 6→9.
Full re-read: no unexecutable instruction remains (the construction
table, per-panel materials, and the exact-repeat rule closed the
last interpretation gaps).

**R-register (this round): 12 findings — 2 critical, 3 major,
4 moderate, 3 minor — all cured in the plan body; 0 owner
decisions; 0 unexamined.**
- **R1 (critical).** ROOM_CAM_HOME at z = 1071 put the camera
  object's back face 11 units *inside* the front wall (grab pads
  19): the framing seat was chosen by lens distance alone and never
  checked against the object's own body. → Seat moved to 1052
  (8 clear, inside §8's clamp), framing re-derived (margin 1.0° at
  the design floor), §11 check 1 gains the AABB guard.
- **R2 (critical).** §9's single 1.6:1 floor was unmeetable and its
  named binding pair was the strongest pair, not the weakest:
  computed on the draft's own dyes × rig, floor↔back wall 1.03,
  wall↔ceiling 1.02–1.09, floor↔west wall 1.14 — the ceiling's
  "palest + ambient" reasoning was a story the arithmetic disproves.
  → §6 prediction table; walls re-dyed #C8A668; ceiling re-dyed
  #A87F45 (dark lid); §9 two-class floors (subject 1.6, binding
  deck↔back wall 1.62 predicted; shell 1.10 region + 1.25 junction
  strip).
- **R3 (major).** §6's one-dye wall table invited one shared wall
  material; §4's ghost sets opacity per panel, and opacity is a
  material property — as written, the ghost was unbuildable as
  specified. → Every shell panel owns its material + texture clone
  (§6).
- **R4 (major).** B10's cure ("panels keep their standing render
  order") named no mechanism: three.js sorts transparent objects by
  centroid per frame, so a ghosted panel's order against the grid
  could flip with the eye. → Explicit renderOrder pinned (grid+1
  during the pass, restored with the ghost state), §4 + §11.
- **R5 (major).** The integral-repeat texture rule contradicted its
  own ≤ 4% drift claim (measured 8–25% on four of five axes). →
  Exact fractional repeats on a wrap-drawn tile; seams exact by
  construction; the rule is simpler than the one it replaces (§6).
- **R6 (moderate).** Framing proof was FOV-containment only — no
  sightline proof that the deck *surface* is visible, and its
  foreshortening unstated. → §5: grazing-line clearance 2.67,
  grazing angle 0.55°, 41.0° viewing band, FM-4 accepted with its
  reason.
- **R7 (moderate).** "Centred on CENTRE" was false in z (room
  z-centre 513) and no per-mesh construction numbers existed. →
  §2 wording cured + the full construction table.
- **R8 (moderate).** Scene-entry state semantics were implicit —
  whether the STAGE pill restores the checkpoint or the void's
  left state was decidable two ways. → §7: entry applies the
  entered scene's seed, both ways, by decision.
- **R9 (moderate).** Pill coexistence was never censused against
  the two-row bound the panel fence stands on. → §7 census (max 3
  in every state) + §11 check 5.
- **R10 (minor).** Ghost apply/restore was not stated to sit inside
  the pass's protected section; a thrown render could strand a
  panel ghosted into a camera pass. → §4 restore discipline.
- **R11 (minor).** §4's "six shell panels" (the ghostable set is
  five) and §5's director estimate carried an unexplained z
  component pan cannot produce. → Both struck in place.
- **R12 (minor).** §9's ratios named no transfer function. → §6
  names the inherited basis (sRGB output, colour management on,
  NoToneMapping, DPR ≤ 2, antialias on — read from the file) and
  the standing warning on filmic mappings.

**Final radial scores (pass 10):**

| Dimension | As found | Final |
|---|---|---|
| Clarity / executability | 6 | **9** |
| Geometric soundness | 5 | **9** |
| Sightline / framing proof | 6 | **9** |
| Failure modes | 5 | **9** |
| Materials / texture practice | 5 | **8** |
| WebGL engineering soundness | 6 | **9** |
| Phone reality | 7 | **8** |
| Scope discipline | 9 | **9** |
| Extensibility | 8 | **8** |
| Verification design | 6 | **9** |

**Front score: 8.** Stop condition met: no dimension below 8, no
unexamined failure mode (§13), no unexecutable instruction. The
three 8s carry named residuals, not hidden ones — Materials: §6's
table is the *computed* leg; Execute's measured census rules where
they disagree, with the dye step as the standing cure. Phone: the
room adds no render surface beyond the checkpoint's audited
envelope (7 boxes, ≤ 512² textures, DPR ≤ 2, one extra transparent
layer in exterior director views). Extensibility: provision is
deliberately thin — the five capture invariants and a general
`floorAt` — because anything more would be building for scenes the
owner has not briefed.

---

## 13. Failure-mode table (FMEA) — the executed scene in the owner's hands (pass 9)

| # | Failure | Cause | Effect on the owner's use | Guard in this plan | Residual |
|---|---|---|---|---|---|
| FM-1 | Camera object clipped into the front wall at room entry | Home chosen by lens distance only (R1) | The first thing he sees in the room is the camera buried in a wall | Home 1052 (8 clear); §11 AABB check | None known |
| FM-2 | All walls fade together, or fading is impossible | Shared wall material (R3) | The dollhouse rule lies or cannot be built | Per-panel materials (§6) | None |
| FM-3 | Grid paints over the interior through a ghosted wall, flickering as he orbits | Transparent sorting by centroid (R4) | The room reads broken exactly when he orbits outside it | renderOrder pinned grid+1 (§4) | Two ghosted panels overlapping on screen blend in either order at 0.07 — below visibility, named |
| FM-4 | The stage reads as a sliver from the camera seat | Grazing angle 0.55° (§5) | "Covers the whole stage" is true and still disappoints | Numbers published in §5; §11 verifies projection as designed | **Accepted** — inherent to a floor-standing camera + low stage; the theatre cure (raked seating) is outside this brief |
| FM-5 | Camera grazes the riser corner crossing the deck edge | Floor height steps 2→25 at the footprint | A visible clip during a drag onto the stage | `camY` chases with the loop's τ — a glide, not a step (§8) | A sub-τ graze at the corner is possible; accepted, named |
| FM-6 | STAGE pill "loses" his void arrangement | Entry semantics unexamined (R8) | Surprise state loss reads as a bug | §7: entry applies the entered scene's seed, stated as the contract | None — behaviour is now specified |
| FM-7 | A panel stays ghosted in the camera's shot after a glitch | Thrown render skips the restore (R10) | The shot — and any future capture — shows a faded wall | Restore inside the pass's protected section (§4) | None known |
| FM-8 | View bar wraps to a third row on his phone | Pill coexistence uncensused (R9) | The fix-9/10 panel-fence defect class reopens | §7 census (max 3 pills/state) + §11 check 5 | None |
| FM-9 | Ceiling indistinguishable from the walls on his phone | Dye/lighting arithmetic (R2) | The room reads as one undifferentiated box — the checkpoint's phone-pass failure, repeated indoors | §6 prediction table + re-derived dyes + §9 two-class census | Predictions are the computed leg; Execute's measured leg rules |
| FM-10 | A narrower phone than the design floor crops the stage's corners at home | Aspect below 0.444 | Two corners lost at the seat (recoverable by zooming out the lens by hand) | §5: 21:9 (0.4286) computed — covered, margin 0.36° | Aspects narrower than 0.4286: none in production; named |
| FM-11 | The first asset later stands half-sunk at the deck edge | A camera-only floor rule | Asset placement inherits a hidden trap | `floorAt(x, z)` is a general Layer-3 function (§8), not a camera special case | None for this plan's scope |
| FM-12 | Capture, when built, records a faded panel or the chrome | Pass-state leak / page-canvas capture | The film carries the mechanism | §10 invariants 3–4 + R10's restore discipline | None known |

## 14. What Execute inherits (in order)

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

## 15. Execute entry — the room as built (2026-11-07)

Built exactly as §§0–14 specify, on the post-fix-10 stage.html, in the
§14 order: Layer 2 scene state → Layer 1 `buildRoom()` → Layer 3
mechanics → chrome → seed press → the §11 battery. The full evidence
stands in the build record
(`records-20261105-stage3d/stage3d-room-build-record.md`); this entry
carries the outcomes and the two numbers §14 told Execute to solve.

- **Solved, not copied — ROOM_DIR_HOME's pan pair:** panX **70.39**,
  panY **−130.57** (projection solve through the rig; the stage centre
  projects to NDC (0.001, 0.002) at the director home; the plan's
  panY estimate of −40 was superseded by the solve, as §14 directed).
- **The dye step the §9 census forced (§14 item 2):** on the §6 dyes,
  the binding subject pair deck↔back wall measured **1.48** against
  its 1.6 floor (director home, rendered frames). §6's own cure was
  taken: deck dye **#CCA45F → #D8B068**, one step, deck only.
  Re-measured: **1.654** — pass. All other subject pairs pass
  (deck↔riser 3.37, riser↔floor 2.43); shell region medians pass or
  read at the 1.10 floor within disc noise (floor↔west 1.099,
  back↔west 1.092), with every junction step ≥ 1.53 against the 1.25
  floor — the plan's stated edge mechanism carries them.
- **A §6 model correction the census exposed:** the plan's absolute
  luminance predictions run uniformly ≈3.9× above the rendered
  absolutes (the face-factor arithmetic omits the physical-lighting
  1/π and the light colours' weights). The model's *ratios* were
  right (raw-L deck/back predicted 1.69, measured 1.686); only its
  absolutes — and so its WCAG-form margins — were optimistic, which
  is precisely why the binding pair needed the step above. §6's
  table should be re-based on the measured absolutes (director home:
  deck 0.226, floor 0.149, back wall 0.117, west 0.130, east/front
  0.086, ceiling 0.051, riser 0.032) at its next iteration.
- **Framing:** all 8 stage corners inside at all five aspects
  (worst |NDC|: 0.982 @ 0.4286, 0.948 @ 0.444, 0.911 @ 0.462,
  0.316 @ 1.33, 0.236 @ 1.78). One named tension: §11's 0.02 NDC
  margin bound vs §5's angular derivation at 21:9 — measured margin
  0.018; focal 360 (folded decision) kept; the other four aspects
  clear the bound.
- **Deck projected height:** measured 0.29° by NDC span against
  §5's ≈0.73° prediction (0.73° is the near edge's depression angle,
  not the deck's span). FM-4's accepted conclusion stands, stronger
  than stated; from the camera seat the deck is not disc-samplable
  at its centre point (the §9 deck pairs are therefore proven on
  the director-home frame, where the face is resolvable).
- **Chrome cure (plan-required, §11 check 5):** pre-cure the room
  bar wrapped to 3 rows at 320px (bottom 136px, through the 94px
  panel fence). Cured in CSS (narrow button bands tightened at
  ≤560px and ≤400px); post-cure census: rows ≤2 at every width
  ≥320px in every state, bar bottom max 71px at narrow widths.
- **Harnesses:** migration 85/0 · fix-8 15/0 · fix-9 45/0 ·
  fix-10 17/0 · room harness (new) 67/0 — scene switching, pill
  behaviour, reset-per-scene, the ghost rule measured mid-pass,
  framing coverage, body-vs-interior AABB, emptiness census.
- **Final bytes:** stage.html 196,078 B, sha256 `46426865…`;
  seed re-pressed by `assets/plan/make-seed.py` (196,372 B =
  stage + 294, sha `8bc32f4a…`), seed default scene 'void',
  checkpoint untouched. GL frames under `~/workspace/glproof/room-build/`,
  viewed by the builder.

## 16. Fix round 1 amendments (2026-11-07) — the corrected lighting model, dye/light table v2, the ghost's construction, the deck-band correction

_This section amends the plan after Verify W-R1 (Seats 1 and 2). Earlier sections are NOT rewritten: where §16 and an earlier section disagree, §16 governs, and each amendment below names what it supersedes._

### 16.1 The corrected lighting model (Seat 2's D1 — §6's model is retired)

§6 priced the faces with a legacy model whose face factors ({up 1.90, back 1.11, west 1.24, dark 0.85}) omit two facts of three r186's physical lighting: **diffuse is divided by π**, and **the light colours weight the terms**. Everything therefore rendered at ≈0.26× of §6's predictions (the absolutes run uniformly ≈3.9× under prediction; §15 already recorded this). The corrected model, per face:

**L(face) = dyeLinearLuminance × mapFactor × bracket**, where
**bracket = (Iamb · La + Isun · Ls · cosθ) / π**,
La = 0.8352 (ambient 0xffe9c4), Ls = 0.8972 (sun 0xfff2d8), and the sun direction from its (300, 800, 200) seat is (0.3419, 0.9117, 0.2279) — so cosθ is 0.9117 (up faces), 0.2279 (back/front bracket), 0.3419 (west inner face), 0 (ambient-only faces: east/front walls, ceiling underside).

Validation against Seat 2's bisection anchors, at the checkpoint rig (0.85 / 1.15): ambient-only floor modelled 0.063–0.067 vs measured **0.0651**; sun-only back wall modelled 0.030 vs measured **0.0312**. The model's ratios were always right (raw-L deck/back predicted 1.69, measured 1.686); only its absolutes were wrong. Map factors fitted from Seat 2's measured medians: deck 0.925 · floor 0.946 · walls 0.937 · ceiling 0.945 · riser 1.0. One soft spot, recorded honestly: the deck's rendered pool reads ≈0.07 under the model at the room rig (0.754 measured vs 0.821 modelled — the tone curve compresses the brightest face); every other face lands within ≈0.01, and no pair floor depends on the gap.

### 16.2 Dye/light table v2 — this table SUPERSEDES §6's dye table

**§16's dye/light table v2 supersedes §6's table explicitly: no future reader should treat §6's dyes or §6's lighting arithmetic as live.** The dyes themselves do not change — walls `#C8A668` · floor `#B78D4C` · deck `#D8B068` (the §14 step, now ratified here, closing Seat 1's D-4) · riser `#77572A` · ceiling `#A87F45`. What changes is the room's light exposure, a Layer-2 decision recorded on the ROOM record and applied by the scene-state door (`applySceneState`): **ROOM.amb 2.70 · ROOM.sun 4.55** while the room stands; the void/checkpoint keeps the rig's build values 0.85 / 1.15, restored at the same door.

Why lights, not dyes: with one wall dye (§6's "one dye, four shadings" design, kept), the target absolutes (back wall ≈0.4) would need a wall-dye luminance beyond the paper palette at the old exposure — dyes alone cannot reach both the ratios and the absolutes. Why the sun carries the larger share (≈4.0× vs ambient ≈3.2×): the back↔west separation comes only from the sun's cosines (0.2279 vs 0.3419) — an equal-scale lift (3.01/4.07) measured **1.0955** on that pair against its 1.10 floor; the rebalanced rig measures **1.113**.

Measured on rendered pixels (fix round 1 census; 5×5 pool medians at projected face points, the deck from the camera seat by row scan — its pool straddles the 0.178° band, Seat 2's D6 method note):

| face | camera phone | camera desktop | director phone | director desktop |
|---|---|---|---|---|
| deck | 0.7486 (row) | 0.7486 (row) | 0.7539 | 0.7539 |
| back wall | 0.3873 | 0.3922 | 0.3873 | 0.3937 |
| floor | 0.5359 | 0.5359 | 0.5376 | 0.5299 |
| riser | 0.110 | 0.110 | 0.110 | 0.110 |
| ceiling | 0.1607 | 0.1607 | 0.1607 | — |
| west wall | — | 0.4421 | — | — |
| east wall (= front bracket) | — | 0.2734 | — | — |

Pairs (WCAG ratio): **binding deck↔back wall: 1.83 phone camera · 1.81 desktop camera · 1.84 phone director · 1.81 desktop director — ≥1.6 on all four** · deck↔riser 4.99 · riser↔floor 3.66 · shells (desktop camera, the full-shell seat): floor↔back 1.33 · floor↔west 1.19 · floor↔east 1.81 · floor↔ceiling 2.78 · **back↔west 1.113** · back↔east 1.37 · back↔ceiling 2.10 · west↔east 1.52 · west↔ceiling 2.34 · east↔ceiling 1.54 — **all ≥1.10**. Absolutes in bright-paper territory: deck in the 0.7s, back wall ≈0.39, west 0.44, floor ≈0.53.

### 16.3 The ghost's construction (Seat 2's D3 — the rule now engages by construction)

Diagnosis (isolated experimentally): the trigger, the pass identity and the restore were all correct — the failure was in the material program. three r186's program-change census omits the `transparent` flag: a material first compiled with the OPAQUE program keeps it when `transparent` is toggled without `needsUpdate`, and the OPAQUE program forces fragment alpha to 1.0 — so the pass set opacity 0.07 on a program that discards it. Proven in isolation: a manually ghosted back panel (state persisted across passes, pass machinery never touching it) read exactly its opaque baseline, 0.1135 vs 0.1135.

Cure, at the class level: **the five shell panels' materials are born transparent** (`transparent: true` at construction; standing opacity 1, depthWrite on). The classification the engine compiles never toggles; the pass-scoped ghost writes only the opacity uniform, depthWrite and renderOrder — all honoured live. The ghost rule's trigger is unchanged (director pass, eye on a panel's outward side of its plane; camera passes never). Proof: Seat 2's exterior pose (eye 500, 630, 3416) reads the interior through the front wall (deck 0.71, floor 0.52 — baseline was a uniform 0.1143 solid); the top pose (pitch −72) reads floor 0.52 / deck 0.72 through the ceiling; the builder's behind-back pose reads deck 0.70 / floor 0.51 through the back wall; and after all three pose passes, a re-seeded camera pass samples **digit-for-digit identical** to a fresh page's camera census — no panel is ever stranded ghosted. Frames: `~/workspace/glproof/room-fix1/fix1-ghost-*.png`, `fix1-final-*.png`, viewed by the fixer.

### 16.4 The deck band, corrected (Seat 2's D2 — record only, no geometry change)

The deck band from the camera seat is **0.178°** (Seat 2's row scan of the rendered phone frame). This supersedes §5's 0.73° and the build's 0.29° figure. Disposition: **accepted as inherent to the owner's brief** — a 23-high stage seen from a camera standing at the back of a 920-deep empty audience floor is a sliver by geometry, not by defect. The deck-as-surface read is recovered by camera movement (the proof-of-concept push-in), not by geometry. No geometry changes in this round.

### 16.5 The room home heading's representation (Seat 1's D-3)

`ROOM_CAM_HOME.heading` and `ROOM_SEED_STATE`'s heading/tHeading are stored as **−180**, the frame loop's wrap180 normal form ([−180, 180)). The geometry is unchanged (+180 and −180 are the same aim); the representation is now path-independent — pill switch, `?scene=room` door and RESET land on byte-identical state (room harness R1 D-3 cells, raw JSON equality; confirmed on the real stack by probe: all three state strings identical, heading −180 on every path).

### 16.6 Fix outcome

Suites on the final bytes: migration 85/0 · fix-8 15/0 · fix-9 45/0 · fix-10 17/0 · room harness 73/0 (67 + 6: the two D-3 cells, the born-transparent cell, the §16 model cells) — **235 passed / 0 failed**. Final bytes: stage.html 198,878 B, sha256 `4eae18f3…`; seed re-pressed (199,172 B = stage + 294, equality proven apart from the flag block; seed default scene 'void'); the frozen checkpoint is untouched (`2aedd01b…`). Full record: `stage3d-roomfix1-record.md` in the delivery-gate records folder.

## 17. Cycle 2 amendment (2026-11-07) — the census-point ruling: the key's low-strip spill is designed cyc glow; binding pairs read at the upper wall

_Approved by the main agent on the owner's behalf at the cycle-2 plan's §9 flag, and recorded here as the cycle-2 plan directed. This section amends the cycle-2 rig's census method (the cycle-2 plan's §4.3/§9), not §16's model: where the two speak of different rigs, each governs its own._

Cycle 2's rig v3 seats a KEY spot above the house bar aiming at the deck; its cone (0.30 rad, penumbra 0.6) overshoots the deck's back edge and paints a low strip of the back wall (centred near (430, 80, −85)) at ≈0.51 absolute — brighter than the wall's working field. **Ruling: that low strip is designed cyc glow** — the pool of light a stage's back wall is meant to catch under a key — **not a wall-brightness defect, and not a census point.** The back wall's binding reads (every pair that names the back wall, deck↔back first among them) are taken at the **upper wall, point (430, 350, −85)**, where the wall works as the room's backdrop field; the plan's §4.2 absolutes and §4.3 forecasts are read there (upper-wall absolute ≈0.20; deck↔back-upper forecast 3.67 against its 1.6 subject floor).

Measured at the build (region medians, FILM_HOME + room-home frames, cycle-2 build record): back-upper 0.2003–0.2186 across the two seats ✓ the forecast absolute; deck↔back-upper 3.35 ✓; back↔west — the tight shell pair, forecast 1.129 against the 1.10 floor — rendered **1.182** ✓ (the pre-priced sun fallback 2.60→2.75 was NOT spent: the pair it was priced for passed, and by the bracket arithmetic it would have moved floor↔west the wrong way). The low strip itself is mostly occluded from the seats that matter (the deck and riser stand between the house and it) and reads on camera as the glow behind the stage picture — kept, by design, from this ruling forward: no future round "fixes" the cyc glow, and no census may quote the low strip as the back wall's value.
