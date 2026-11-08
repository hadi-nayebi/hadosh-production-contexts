# STABLE CHECKPOINT V1 — the empty stage (owner-declared 2026-11-06 23:50 EST)

**Owner's words (2026-11-06 23:50 EST, with his phone screenshot of the live
Pages build):** "this is very good — let's make this as a stable checkpoint
that later we can come back here for starting another scene."

## The checkpoint artifact

- `checkpoint-stable-v1/stage.html` — 168,994 B ·
  sha256 `2aedd01b406f28fa3d7b614d8af58ec20a6d7cc2f867ee921e9dfa8212cb0edb`
- `checkpoint-stable-v1/assets/three-vendor.js` — 743,139 B ·
  sha256 `1ba21d75008c308711ff4a0907b6faf43ebdc987dd2152a50a7f90f69508246c`
- Copies are byte-identical to the build the owner viewed (the fix-round-9
  bytes). Frozen: nothing edits this folder. Ever.

## What the scene is

Essentially empty: the void, the shader wireframe grid ground (minor/major
tiers + dyed-paper axes), the origin ring, the paper camera object with its
true frustum, the orientation gizmo, and the full chrome (view bar, PiP
camera view, heading chip, hint, settings panel). No assets, no props.
RESET STAGE returns here.

## How to come back to it

1. **This folder** — open `checkpoint-stable-v1/stage.html` (self-contained
   with its vendor copy).
2. **Live** — https://hadi-nayebi.github.io/hadosh-production-contexts/dashboard/stage3d/
   serves these bytes at commit `7b36ea28` on branch `dashboard` (later
   versions re-publish over the same path; the commit preserves this state
   in the repo's history).

## Standing

- Route check PASSED on the owner's phone (Chrome, Pages): the stage
  renders — grid, camera object, PiP, gizmo, heading chip all live in his
  screenshot.
- The checkpoint declaration supersedes the pending empty-stage
  certification sequence: the owner has seen this build on his phone,
  judged it "very good", and directed building forward from it. The
  fix-round-10 / verify work on the base line continues as foundation
  hygiene; it does not gate the owner's direction.
- **What starts here:** the EMPTY THEATER ROOM scene (owner brief
  2026-11-06 23:50 EST) — paper room: back wall, a slightly raised stage,
  stage side, ceiling, plain paper floor, the chair area EMPTY (no chairs,
  no curtain), the camera standing in the empty area in front of the stage
  framed so its view covers the whole stage. Built as its own OPEVC job
  (Observe → Plan, iterated → Execute → Verify → Condense) forking from
  this checkpoint line.

## Owner direction — the studio + the layer split (2026-11-07 ~12:48–12:51 EST)

- **What this project IS (owner's words, paraphrased tight):** a private
  movie studio inside a web page — a new world. Next: test PHYSICS in it;
  then add characters; then build our scenes in this environment — assets
  one at a time, animated one at a time, with real physics — so placements
  and scene creation happen here instead of being struggled over in 2D.
- **Layer law (owner, 2026-11-07 12:48 EST):** checkpoints are LAYERED and
  separate in git — (P) the PLATFORM checkpoint carries what every video
  uses: the void stage, grid, camera + controls + PiP, PHOTO/REC capture,
  the seed/reset machinery, and the physics core (fall/bounce/settle);
  (T) the THEATER checkpoint sits on P and adds the empty paper room as a
  scene; (S) each specific video's scene builds on T (or P) and never
  writes its content down into P or T. Going back to P must always find
  recording + physics intact.
- **Measured gap at the time of the order:** checkpoint-stable-v1 holds
  void + grid ONLY (no capture, no room); capture and the room exist only
  merged in the working stage.html — the separation job (spawned
  2026-11-07 ~12:55 EST) derives P and T properly, stamps each, and
  prepares the git checkpoints for the main agent to fire.
- **First physics test (owner's pick):** the GLASS BALL — dropped from
  ~1 m in scale (deck height 23 units = 1 m ⇒ drop = 23 units above the
  deck), falls under gravity, shatters on the deck — glass only, NO smoke —
  shards settle, hold, fade. The paper side-boxes ride the same engine as
  the second test (fall, bounce like cardboard, settle at the sides).

## Owner direction — scene playback in the page (2026-11-07 ~17:29 EST)

Hadi: "I want to play the scene inside the studio and also adjust the
camera location and record myself. The screen play is what being
played. On the stage." — The stage page gains a PLAY control for the
current scene's choreography: the scene plays LIVE on the stage (not
as a video file), every camera control stays live while it plays
(director moves, look, pad, lift), and REC captures the in-scene
camera for the whole take he directs — his own directed takes, in the
page. Sent to the running cycle-2 build as an addendum phase the same
turn (generic scene {play()} registration; the ball scene first;
replayable via the choreography's auto-reset).

## Owner direction — THE TWO BOOKS: screenplay (events) + scene & props (2026-11-07 ~17:45 EST)

Hadi's architecture order, superseding the simple playback addendum
above: the studio becomes programmable through two books PER LOCATION.
(1) THE SCREENPLAY BOOK — a series of EVENT objects (JSON, rendered as
HTML cards, collapsed by default behind a book symbol in the controls):
every event carries start time, end time (decided, or CALCULATED —
e.g. by physics — with the rule named), its actors' actions, and
EXPLICIT demands for camera movement, light movement, and audio —
"none" is a written decision, never an absent field; nothing is left
to randomness (the ball's color and quality live in its objects).
Events may overlap in time, but their demands on the shared channels
(camera, lights, audio) may NOT conflict — a conflict is a defect to
resolve, checked in the book. When playing, the book drives the
screen, and the screen is verified against the book. A stabilized
event can be closed/hidden to focus elsewhere, and reopened.
(2) THE SCENE & PROPS BOOK — things that EXIST: geometry, texture,
material, presence, what they do, and VISIBILITY (a prop is visible
only when the scene or an event shows it). A prop joins an event when
the event animates it; its description stays in this book.
(3) LOCATIONS — the theater is the first location object; later
locations carry their own book pair; a video can span locations.
(4) CONTROLS GO SYMBOLIC — glyphs instead of words; words live in
hover/tap labels. (5) PROCESS ORDER (his explicit demand): a
significant planning phase first — consolidation + plan, iterated —
rather than jumping into building buggy play software. The cycle-2
build keeps its mechanics (they are the actuators events command);
its hardcoded playback phase is DROPPED in favor of a registration
stub the book player will attach to. Planning job spawned the same
turn; its worked example is the delivered ball film rewritten in the
schema.

**Refinement (2026-11-07 ~17:51 EST):** the owner reviewed the live
interface and sharpened the design: (1) the current menu is "getting
very out of hand" — measured by the main agent on the live build: NINE
word buttons in two rows (DIRECTOR · CAMERA · AIM AT CENTRE · FIND
CAMERA · ADD CAMERA · STAGE · THEATER · PHOTO · REC) + MORE + hint +
readout chips; only the ⚙ is a symbol (evidence:
~/workspace/glproof/ui-review/). ALL controls become intuitive
symbols; words live in hovers/tap labels. (2) LOCATION IS A DROP-DOWN:
choose among saved locations (the theater = location #1; the
STAGE/THEATER pills go away); under it, the book symbol opens the
chosen location's books. (3) The compartment stack is explicit:
LOCATION → PROPS (each with texture + visibility; some persist through
the whole video, some change per scene) → SCENES formed from the
props → EVENTS in scenes (props go through phases: movements, audio,
camera) → the location's SCREENPLAY = its series of events.
(4) Demand channels include CAMERA ACCESS beside camera movement,
audio playout, and light movement — none may overlap between events.
(5) Process law, his words: "making sure that they are defined before
we go and create them — that is the whole process."

**Posture correction (2026-11-07 ~17:54 EST):** the owner stopped the
transcription: the specifics above (two books, drop-down, book symbol)
are CANDIDATES he is offering, not a spec to parrot back — "think
about it as a category and what is the absolute best way to do it."
The planning job is re-briefed to compare at least three genuinely
different compartment designs against named criteria and RECOMMEND
one; the worked example is written in the recommended design. The
invariants that remain law under any design: defined-before-created ·
explicit-none completeness · channel demands never conflict ·
decided-vs-calculated ends · playback renders from the event metadata
and is verified against it · stabilized units close/hide · symbolic
controls · fast location switching. Main-agent candidate entered into
the comparison (to be judged, not adopted by default): one production
object — a locations shelf + the screenplay as a SCORE (channel lanes
over time, events as blocks, conflicts visible as collisions, scene =
a foldable stretch of the score) — and play gated by the checker: an
invalid book refuses to play and lists its defects.

**The authoring half (2026-11-07 ~18:22 EST):** the owner added how
things are BORN: the location selector always offers the EMPTY STAGE
(location zero) beside saved locations; anywhere, he adds by
describing ("add a wall", "change the texture") — requests ACCUMULATE
in the dashboard as prompt-seeds (chat is a second intake) for Archer
to apply. Every object (location, prop, event) starts as a prompt and
matures iteratively into a complete JSON object. A new prop starts
invisible; an event casts it visible. A prop's definition must carry
the capabilities its events demand (the ball must be able to deliver
"explodes"). He ordered an honest gap audit of the Pass 1–4 plan
against this: Pass 5 spawned the same turn with charges A–H (intake +
persistence · object lifecycle + open-decision counts · location zero
+ workshop state + save-as — incl. the saved-rule flaw: an unfinished
location must be enterable to be built · capability feasibility as a
checker leg · definition vs placement · provenance · industry anchors
· the ball's birth as an authoring worked example), closing into a
gap-closure table at the plan's front.

**Pass 5+6 landed (2026-11-07 ~18:36 EST)** — plan now 146,205 B.
All eight charges CLOSED (intake as ONE queue/two doors in-file ·
`undecided` marker + derived open-counts · shelf tiers ZERO/WORKSHOP/
SAVED with fork semantics · checker leg 5 INFEASIBLE · definitions vs
placements · birth+history provenance · five industry anchors ·
§7.7 the ball's birth). Pass 6's feasibility hand-run caught EV-30
demanding `spawn` — an action the registry never listed: the worked
example was INVALID under its own rules for four passes; §2.3
amended. **Main-agent rulings on the two carried flags (2026-11-07
~18:40 EST):** (a) spot×spot NEVER (audio layering) STANDS —
amendment by plan revision only, never a checker exception; (b)
dissolve: CUT-only v1 accepted; dissolve is a priced extra step when
a real multi-location production asks for it. Books build sequence is
now §8's six steps (intake UI ships at step 2, before the player).

**OWNER-TOUCHABLE FIRST (main-agent ruling, 2026-11-07 ~19:12 EST,
from the owner's 18:55 escalation):** a control or surface the owner
has asked to TOUCH ships to the live link first and alone, as soon as
its own layer's bytes exist — never bundled behind a multi-phase
build's completion, and never reported as progress while it is only
"running." A plan, a probe, and a running job are not delivery; the
live page is. The pad ordered 15:09 reached his phone at ~19:12
(commit 3340cd2e, served sha f1a84e90) — four hours late by this rule.

**THE OWNER'S FRAMING HOME + THE POSE-SAVE GAP (2026-11-07 ~19:29
EST):** the owner drove the camera (pad, camera view) to a framing he
chose by eye — curtain-to-curtain exactly, a little stage deck, a
little ceiling (PiP in his screenshot) — chips read heading S 179°,
LENS 360. His framing SUPERSEDES the derived FILMING HOME as the
spec (his eye over the arithmetic; note he framed WIDE at 360 where
the derivation chose 1080 tele). The pose's exact numbers live only
in his open page — the bytes carry NO pose save (localStorage holds
settings only; btnHome/FILM recall shipped values). Dispositions:
(1) rescue = derive the numeric pose from his framing spec and
prove it against his PiP bands; (2) fix = PIN control (steer 3):
one tap saves the pose to localStorage as the device home + the six
numbers readable in the panel under the name HADI'S HOME.

**PiP GRAMMAR + CONTROL GATE + SAVE-AS-ISSUE (owner, 2026-11-07
~19:51 EST; steers 5 to the build, Pass 7 to the plan):** in director
view the PiP is the aiming instrument — SINGLE tap opens the camera
CONTROL GATE at the PiP; DOUBLE tap enters camera view (the current
PiP clean-tap swap retires into the double-tap). One gate, two doors
(PiP tap · gear), same contents, both views. His sharper catch: the
full-screen camera view does NOT show the true capture frame (the
PiP does) — camera view gains the marked true frame (WYSIWYG).
Saving has two tiers: PIN (instant, on-device) + SAVE AS ISSUE
(prefilled GitHub issue: pose JSON + his comment + scene — the DLC
dashboard pattern; the issue is Archer's queue). Poses and MOVES
{from,to,duration,easing,focal path} become event-config vocabulary
in the plan (Pass 7). His standing verdict this hour: direction
right, deliverable not yet passing the basic requirements.

**THE PiP ••• MENU (owner, 2026-11-07 ~20:01 EST; steer 6):** the
PiP carries a ••• chip in its corner (visible whenever the PiP shows
the camera's eye). Its menu: CONTROLS (the gate, in director view) ·
COPY POSE (pose as readable text + JSON to the clipboard) · SAVE AS
ISSUE… (asks a NAME on the page first, then the prefilled issue
carries it as the pose's title). Rationale recorded: a bare tap is a
hidden gesture; the ••• advertises itself and carries the two
actions a tap cannot (copy, named save). Single-tap = gate stays as
fast path; double-tap = camera view stands.

## 2026-11-07 ~23:12 EST — CONTROL-ROOM PACKAGE LIVE (theater-v2b, 367c9e6b)

Published to the Pages link (commit 72298736, served sha verified 367c9e6b).
Steers 2-6 in one ship, independently tap-verified by the main agent's
verifier + frameMark screenshot viewed by the main agent. Owner phone pass
owed on these bytes (bar >50). Remaining cycle-2 phases (film re-attempt,
census re-derivation, build record, share staging, stamp) continue as a
fresh job; browser route = glproof/browsers-restore (see publish record).
