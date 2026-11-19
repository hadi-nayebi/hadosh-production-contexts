# Iteration Research — Seat D: Similar Constructs on the Web

_Sourced precedents for three design questions on the stage3d file (single-file
HTML/CSS/JS, CSS preserve-3d, director view + PiP camera view, glass controls,
draggable camera object). Researched 2026-11-06 at the owner's order
("you can use the web for similar constructs"). Each finding ends with what it
means for this file._

---

## 1. Grab proxies — making a small 3D object easy to grab on touch

**1.1 Pick against an invisible, simplified proxy — never the visible mesh.**
three.js picking practice: the Raycaster tests geometry, not visibility, so
"an invisible simple proxy can stand in for a complex model"; decorative parts
explicitly opt out (`raycast = () => {}`). Production guides say the same:
"use a separate invisible mesh with simple geometry for hit testing."
- https://meloskill.com/skills/threejs-interaction/
- https://intelligentgraphicandcode.com/development/threejs-interfaces
→ _For this file: the camera object gets one invisible, oversized hit volume
(the CSS analogue: a transparent `.camHit` slab larger than the drawn camera);
the visible faces stay exactly as drawn and never carry the hit test alone._

**1.2 The documented pattern is literally "a second, invisible, fatter mesh."**
The b3d-manipulator (web 3D gizmo library) states it as a rule: "Every drawn
handle carries a second, invisible, fatter mesh that exists only to be picked,
because a gizmo that is visually thin is impossible to grab with a controller
at arm's length or a finger on a phone."
- https://3d.tosijs.net/b3d-manipulator/
→ _For this file: fattening the hit area is not a hack, it is the industry
pattern — the drawn camera can stay small and elegant while its grab zone is
finger-sized._

**1.3 The floor for any touch target is 44×44 pt, achieved with invisible padding.**
Apple's Human Interface Guidelines: minimum hit target 44×44 pt on touch
platforms, and a visually small control is made compliant by expanding its
hit area invisibly, not by enlarging the artwork.
- https://github.com/allexp1/apple-hig/blob/HEAD/apple-hig/references/accessibility.md
→ _For this file: the camera's grab zone should never project to less than
~44 CSS px on screen at any legal dolly — the proxy must grow (or the grab
must fall back to a handle) when the camera is far away._

**1.4 When direct grabbing is unreliable, tools attach a gizmo to the selection
instead of asking the finger to hold the object itself.** Babylon's
GizmoManager is the canonical web implementation: `attachToMesh()` binds
Position/Rotation/Scale/Bounding-Box gizmos to the picked object, picking is
restricted to a whitelist (`attachableMeshes`), and `usePointerToAttachGizmos`
makes the tap itself do the attaching. The gizmo lives on a utility layer
rendered above the scene.
- https://pub.dev/documentation/babylon_dart/1.2.0/babylon/GizmoManager-class.html
→ _For this file: a "selected" state for the camera — tap once to select and
show a ground ring / move pad, then drag anywhere on the ground plane to move
it — is a legitimate, precedented alternative to pixel-hunting the object._

**1.5 Selection must be visible, and a tap on the object is also the focus
command.** Sketchfab's viewer: double-tap on the object zooms/focuses it,
double-tap on the background zooms back out. model-viewer: "Tapping on the
model focuses on that point, while tapping off the model zooms back to the
original framing."
- https://www.samgreer3d.com/zynga-sketchfab/
- https://pub.dev/documentation/sni_model_viewer/latest/sni_model_viewer/ModelViewer-class.html
→ _For this file: keep the double-tap-to-visit behaviour, and add a visible
selected outline/ring the moment a grab starts, so the user can see the grab
landed before they drag._

**1.6 Precise placement is finished with nudges, not with the finger.** Figma's
Move tool (V) pairs dragging with arrow-key nudge: small nudge 1 pt, Shift for
big nudge 10 pt, both user-configurable in Preferences.
- https://help.figma.com/hc/en-us/articles/360039956914-Adjust-alignment-rotation-position-and-dimensions
→ _For this file: once the camera is selected, on-screen nudge buttons
(a glass D-pad in the panel) give the fine control a fingertip drag cannot —
cheap to build, directly precedented._

---

## 2. Settings panels that render empty/unstyled in mobile WebViews

**2.1 `backdrop-filter` silently does nothing where it is unsupported — and the
glass look collapses with it.** Support is Chrome 76+, Safari 9+ (_with_
`-webkit-` prefix), Firefox 103+; the legacy stock Android Browser and
pre-Chromium WebViews never got it. The documented requirement is a
translucent background behind the blur; without support "any pre-Chromium
WebView fallback has to use a translucent background-color without the blur."
- https://www.testmuai.com/learning-hub/css-backdrop-filter-browser-support/
→ _For this file: glass must be an enhancement, never the structure — the
panel needs an opaque-enough `rgba()` background that reads as a panel with
zero blur support, plus the `-webkit-` prefixed property alongside the
standard one._

**2.2 The robust pattern is progressive enhancement: solid default first,
blur inside `@supports`.** "You define a safe default style first, then
enhance it within an `@supports` feature query when the browser supports the
property… start with a solid or semi-translucent background that works
everywhere, then reduce opacity and add blur only in browsers that support
`backdrop-filter`."
- https://copyprogramming.com/howto/css-fallback-for-backdrop-filter-css-code-example
- https://runebook.dev/en/docs/css/backdrop-filter
→ _For this file: restructure the panel CSS as base (solid, works everywhere)
→ `@supports (backdrop-filter: blur(1px))` (glass). If the panel "opens
empty," suspect that its only visible styling lived in the enhanced layer._

**2.3 `@layer` is the catastrophic version of the same failure: an old WebView
discards the entire block, not one property.** Cascade layers shipped in
Chrome 99 / Firefox 97 / Safari 15.4 (2022). "An engine that does not
recognise the at-rule discards everything inside it, so a layered stylesheet
served to a pre-2022 browser renders unstyled rather than degraded." A real
project (Luotopia) shipped a fix titled "legacy WebView floor" for exactly
this in the wild: older Android WebViews "which on out-of-support devices
never update — discard an entire `@layer` block they cannot parse, so every
utility vanishes and the page collapses to unstyled HTML."
- https://www.modern-css-layouts.com/mastering-container-queries-responsive-layouts/modern-css-reset-strategies/cascade-layers-for-reset-and-tokens/
- https://github.com/closedwhu/luotopia/commit/b4b23b02a46b845977488b2cc5c4b5d8439f21fd
→ _For this file: a single-file tool aimed at an in-app WebView should use
**no `@layer` at all** — plain, unlayered CSS in source order is the only
form that cannot be wholesale discarded by an old engine._

**2.4 A blank panel in a WebView is also a JavaScript failure mode, not only a
CSS one.** WebView white-screen guides list the root causes: JavaScript
disabled by default in WebView configuration, unhandled JS errors on the
page, and the WebView content process terminating under memory pressure —
with no error surfaced to the user.
- https://copyprogramming.com/howto/how-to-check-if-a-webview-is-white-screen
→ _For this file: if the panel's contents are built or revealed by JS, one
early exception empties it while the rest of the page still paints. The panel
markup should exist in the HTML as static content; JS may only toggle a
class on it._

**2.5 Nested `backdrop-filter` fails in Chrome/Edge even where a single level
works, and blur is a GPU cost on low-end Android.** Guides document nested
backdrop filters failing to display while the parent works, and advise
limiting the effect to a handful of elements and keeping the radius small
(~8 px) on mobile.
- https://copyprogramming.com/howto/backdrop-filter-not-working-for-nested-elements-in-chrome
- https://copyprogramming.com/howto/fallback-color-for-backdrop-filter-blur
→ _For this file: one glass surface at a time (the panel), no glass inside
glass, small blur radius — nested glass panels are a named failure mode, not
a style choice._

**2.6 The reliable tools separate content from state: HTML first, JS last.**
The progressive-enhancement pattern used across the web: content and layout
exist without JS (the `no-js` class pattern — start from a working baseline,
JS removes the class and enhances), so a script failure degrades the page
instead of blanking a region.
- https://brennan.day/respecting-the-no-js-choice-making-your-site-work-for-everyone/
→ _For this file: the settings panel should be fully readable with the script
deleted — sliders as real `<input>` elements with labels in static HTML,
visibility driven by one class toggle, never by JS-generated DOM._

---

## 3. Seed / empty-scene reset patterns

**3.1 Blender: the "default scene" is not empty — and true empty is a separate,
explicit command.** Blender's startup file contains a cube, a camera and a
light; a genuinely empty file requires `read_factory_settings(use_empty=True)`.
Users can also overwrite the seed itself: File → Defaults → Save Startup File
makes the current scene the new startup state.
- https://docs.blender.org/api/3.5/info_advanced_blender_as_bpy.html
→ _For this file: distinguish the two ideas the owner is combining — the
_SEED_ (a stored, named state the file boots into) and _RESET_ (the command
that returns to it). Blender keeps both; the seed is data, not a rebuild
routine._

**3.2 Unity: an "empty" scene still contains exactly a camera and a light.**
"A new empty Scene, with the default 3D objects: a Main Camera and a
directional Light." The ground-looking plane in the editor is a reference
grid only — "it is not even a rigid surface," i.e. not scene content.
- https://learn.unity.com/course/unity-essentials/tutorial/work-with-gameobjects-in-a-3d-scene?version=2019.4
→ _For this file: the industry definition of "empty" is "no content objects;
infrastructure persists." The owner's seed — void + one light — matches this
pattern almost exactly, with one deliberate deviation to record: in Unity and
Blender the camera object persists in the seed; in the owner's seed it does
not._

**3.3 Godot is the opposite pole: truly empty means no root node at all.** An
empty Godot scene has zero nodes; the editor dock offers one-click root
presets ("3D Scene" adds a Node3D) as a convenience, explicitly "not
mandatory."
- https://docs.godotengine.org/en/4.0/getting_started/step_by_step/nodes_and_scenes.html
→ _For this file: Godot proves a seed can be literally nothing and still be
usable — but every other major tool chose infrastructure-included. The
owner's void + light sits between the poles and should be documented as a
choice, not treated as the obvious default._

**3.4 three.js Editor: "New" is a menu command that replaces the scene with a
blank one; scene state is serialized data.** File → New starts a blank scene;
editor forks persist scenes as serialized JSON in localStorage, and deleting
a scene is removing its stored entry plus resetting the current-scene name.
- https://copyprogramming.com/howto/three-js-editor-how-to-access-main-script-in-an-example
- https://deepwiki.com/z2586300277/three-editor/3.2-scene-management
→ _For this file: reset should load a stored SEED state object (one JSON
literal in the file), not run a hand-written "remove everything" procedure —
the same object the file boots from, so boot and reset can never drift apart._

**3.5 Mature tools split "reset" into separate, named scopes.** A three.js
pose editor's reset row separates them: `all_reset` (reset camera, remove all
bodies except the default, reset poses), `reset_camera`, `reset_pose`,
`reset_bg` — each its own button.
- https://deepwiki.com/hnmr293/posex/4.1-3d-pose-editor-(posex.js)
→ _For this file: the owner's RESET (clear to seed) should sit next to, not
replace, the existing view resets (RESET VIEW / DEFAULTS) — three different
scopes, three labels: view, settings, scene._

**3.6 The seed is a checkpoint other work forks from — tools treat it as a
file, not a moment.** Blender's startup file, Unity's scene templates ("Save
As Scene Template"), and the three.js editor's saved scene JSON all make the
empty state a stored artifact that new projects instantiate.
- https://docs.blender.org/api/3.5/info_advanced_blender_as_bpy.html
- https://learn.unity.com/course/unity-essentials/tutorial/work-with-gameobjects-in-a-3d-scene?version=2019.4
→ _For this file: the owner's plan — this HTML, reset to seed, becomes the
checkpoint other project types start from — is exactly the startup-file
pattern. Worth naming the seed state inside the file (e.g. a `SEED`
constant) so a future fork copies the state, not the whole history._
