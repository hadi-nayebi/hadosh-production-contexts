# Navigation research — the complete movement set for stage3d

_Researched 2026-11-05/06 at the owner's order ("find all different types of
movements and rotations for these type of environments and include all of
them"). Full sourced report: ~/workspace/research_notes/
touch-3d-navigation-gesture-catalogue-20261106-0458/report.md (per-source
extracts in its notes/sources.md). This file is the branch's own record: what
the world of 3D tools agrees on, and the exact set stage.html now carries._

## The seven quantities (every system is an alias set for these)

Six degrees of freedom plus the lens:

| Quantity | Names in the wild |
|---|---|
| Dolly — move forward/back | Maya Dolly, Blender Dolly View, Cesium zoom |
| Truck — move left/right | Maya Track (horizontal), Unreal track |
| Pedestal — move up/down | Maya Track (vertical), Unreal WASDQE up/down |
| Yaw — turn left/right | Maya Tumble azimuth / Yaw-Pitch, Babylon alpha |
| Pitch — tilt up/down | Maya Tumble elevation, Babylon beta |
| Roll — tilt the horizon | Blender Roll, Maya Fly; **almost no phone tool ships it** |
| Focal zoom — change the lens, not the position | Maya Zoom Tool ("to move without changing viewing angle use Dolly") |

Dolly ≠ zoom: dolly moves the eye (perspective and parallax change); zoom
changes focal length only (the eye stays). Dolly + opposite zoom together =
the dolly-zoom/vertigo effect.

## The structural fact about touch

A two-finger gesture carries three channels at once — pinch distance,
midpoint movement, and twist — and systems differ only in how they allocate
them. three.js OrbitControls: TWO = DOLLY_PAN (pinch + midpoint pan; the
twist is discarded; TOUCH.DOLLY_ROTATE swaps pan for twist — never both).
Google Maps: midpoint move = tilt, twist = bearing, pinch = zoom. Cesium:
pinch zoom, two-finger drag tilt, twist rotate. The complete set allocates
all three channels deliberately.

## The stage.html set (as built, with its precedents)

**Director view (orbit family)**
- 1-finger drag — orbit: yaw continuous (no limit; OrbitControls' azimuth
  default is ±infinity), pitch −89°..+89° (just short of the poles, where
  azimuth is undefined and gimbal jarring lives).
- Drag on the camera object — moves the object on the ground.
- Pinch / wheel — dolly, −6000..+2600 (≈30× apparent).
- 2-finger midpoint drag — pan (truck + pedestal of the view).
- 2-finger twist — **ROLL**. Deviation from Maps/Earth, where twist is
  bearing: there, bearing is a separate quantity; here bearing would merely
  duplicate the orbit drag, and roll is otherwise unreachable on touch
  (it exists as a deliberate tool only in Blender/Maya). A phone tool must
  allocate roll deliberately and ship a reset — RESET VIEW and the home
  flight level it.
- Double-tap the camera — frame/focus it (Sketchfab double-tap on object,
  Unity F, Blender NumpadPeriod: set target to the object, set distance to
  fit, keep direction).
- Double-tap empty space — fly home / frame all.
- Double-tap, hold, drag — one-hand zoom (Google Maps: slide down zooms
  in, up zooms out).

**Camera view (first-person family)**
- 1-finger drag — look in place: heading the full circle (wraps), tilt
  −70°..+70°.
- Pinch / wheel — fly forward/back along the look (Babylon's UniversalCamera
  is the precedent family for touch-translation in first person).
- 2-finger midpoint drag — strafe sideways; vertical flies.
- 2-finger twist — roll the shot (same allocation as the director view —
  consistency across views is the rule).
- 3-finger slide — focal zoom (Feather's documented three-finger swipe
  changes FOV/focal length; slide down zooms in). Needed because the pinch
  is already spent on flying.
- Double-tap — level the roll and re-aim at the centre (the reset-shot
  gesture; Maps' compass tap resetting bearing+tilt is the precedent
  family).

**The corner (picture-in-picture)**
- Tap — swap main ⇄ corner (the FaceTime/iOS PiP tap-to-expand convention;
  no 3D library documents it — borrowed deliberately, with the guard that
  corner touches never reach the main view's gestures).
- Drag — works the other eye through the same ranges as the main view.
- Wheel — that eye's zoom (the camera's focal, or the director's dolly).

## Named gaps and non-adoptions

- **Long-press to set the orbit target** (Feather: tap-and-hold pins the
  orbit point) — NOT built. Target-setting exists via double-tap focus on
  the camera; a ground-point target needs inverse projection verified in
  pixels, and this build cannot yet be pixel-verified (test browser down).
  Owed with the pixel pass; recorded here so the gap is a decision, not an
  oversight. (Everywhere else, long-press means selection/pin, never
  continuous navigation.)
- **Edge swipes** — documented in NO 3D product (OS conflict). Not used.
- **Three-finger double-tap** (Feather: perspective ↔ orthographic) — the
  stage has no orthographic mode; not applicable.
- Blender and Unity document **no native touch navigation set** (mouse /
  keyboard / trackpad only) — nothing to adopt from them on touch.
- Google Maps/Earth publish **no numeric maximum tilt** — the −89..+89 /
  −70..+70 clamps here follow the first-person convention (±~89°) and the
  camera object's own aim design instead.

## Sources (as read by the research, 2026-11-06)

Google Maps SDK controls (developers.google.com/maps) · Google Earth support ·
three.js OrbitControls docs · Cesium ScreenSpaceCameraController ·
Sketchfab help (navigation/controls) · Babylon camera guides · PlayCanvas
orbit tutorial + SuperSplat · SketchUp Viewer help · Blender manual
(navigation, Turntable vs Trackball) · Unity SceneView navigation · Maya
Camera Tools / Camera Aim (Autodesk) · Unreal navigation cheat sheet ·
Apple AR Quick Look (WWDC18) · Google model-viewer · Feather gesture docs.
