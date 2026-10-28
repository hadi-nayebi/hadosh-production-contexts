# DIRECTOR'S SCORE — soa-01 (Academy), L13–L21 — the differentiator, the asset, the invitation

*Written 2026-10-28 (JOB FULL-FILM-SCORE-PREP), revised the same day under
Hadi's #107 steer (the segment scored 55: assets passed, MOVEMENT failed as
renderer-default randomness). This score therefore carries, for every asset
in every beat, a full MOVEMENT SPEC — entry path + velocity, named easing
curve, anticipation/overshoot values, idle micro-motion (or decided
stillness with its reason), emphasis peaks and their timing, opacity curve,
exit path + velocity. **A movement value that is not in this score does not
ship.** Doctrine: DIRECTORIAL DERANDOMIZATION (Hadi, 2026-10-27 ~22:49 ET) —
anything the build must decide outside this document (or its machine twin,
`directors-score-full-remainder.json`) is an improvisation and a defect.*

*Scenes: C — A-S03 Mechanism Stage, return (L13–L14) · D — A-S05 Accumulation
Workshop (L15–L16) · E — A-S06 Open Archive / Invitation (L17–L21). The
segment (L5–L12) is scored in `directors-score-L05-L12.md`; the opening in
`directors-score-L01-L04.md`. Fork restaging for the full film: revision R-1,
appended to the segment score.*

*Cast: `specimen/cast-design-1/` (blessed, ruling #103 A) — plus three new
OBJECT assets named in this score (§ New cast), in the same locked engraved
family, to be produced by the cast-design process to the stated spec before
the build and verified at Gate 1. No new characters. The Thinker is ONE
character (Consistency Law): `assets/thinker-master.png` / its bust crop.*

*Canvas 1080×1920 @ 30 fps. Stage everywhere: void `#05090F`, vignette 0.2,
floor glow (540,1605) rx 640 ry 140 α .10.*

## Audio of record — and the projected timeline

No audio is produced by this score. Assembly of record: v2 programme takes
for the unchanged lines + phase-A7 takes for L3/L10, gaps per
`inherited-base/phases/phase-26/audio/gaps-v2.json` (gaps[X] = silence AFTER
line X), bed continuous, master ≈ −14 LUFS / TP ≤ −1 dBTP. All times are on
the **projected v3 timeline** (total **77.023 s ≈ 2311 frames**; the segment
block sits at +14.756 s); the build re-anchors every event to the assembled
master's measured word times before render.

| line | start | end | text |
|---|---|---|---|
| L13 | 46.733 | 49.633 | The model is rented intelligence — the same for everyone. |
| L14 | 50.183 | 53.803 | Your harness works the other way. Everything you put into it stays. |
| L15 | 54.253 | 59.489 | Every session adds to it. Every fix makes it sharper. It grows and matures by use. |
| L16 | 60.389 | 62.672 | It becomes an asset — yours. |
| L17 | 63.222 | 65.816 | On your computer, nothing in it is hidden from you. |
| L18 | 66.266 | 70.366 | Open it, read it, change it — any time, without asking anyone. |
| L19 | 71.166 | 72.362 | Understand the harness. |
| L20 | 72.762 | 73.813 | Build your own harness. |
| L21 | 74.213 | 75.023 | Keep an eye on it. |
| tail | 75.023 | 77.023 | (living tableau, then the fade — scored in Scene E) |

## Word anchors — measured

Source: `inherited-base/phases/phase-28/scene/scene-v2-default.json` words[]
(measured on the takes of record; all nine lines verbatim in v3), converted
by line-start offset. **No anchor in this score is estimated** (defect-5
lesson). Key sync words:

- **L13:** The 46.900 · rented 47.414 · **intelligence 47.691–48.204** ·
  **same 48.789** · everyone. 49.145–49.524
- **L14:** Your 50.349 · **harness 50.559** · works 50.895 · way. ends 52.285 ·
  **Everything 52.285** · stays. 53.526–53.803
- **L15:** **session 54.703** · adds 55.081 · it. ends 56.177 · **fix 56.667** ·
  **sharper. 57.282–58.137** · **grows 58.279** · matures 58.751–59.130 ·
  use. ends 59.489
- **L16:** becomes 60.690 · **asset 61.195–62.199** · **yours. 62.291–62.672**
- **L17:** **computer, 63.674–63.999** · **nothing 63.999–64.663** ·
  hidden 64.979–65.224
- **L18:** **Open 66.429** · **read 67.055** · **change 67.812–68.087** ·
  **any 68.815** · anyone. ends 70.250
- **L19:** Understand 71.327 · **harness. 71.930–72.362**
- **L20:** **Build 72.926–73.133** · harness. 73.443–73.740
- **L21:** Keep 74.376 · **eye 74.619–74.740** · it. ends 74.940

## MOVEMENT GRAMMAR — the named curves and idle laws (binding on all three scores)

Every movement in this score names one of these curves. Control points are
exact; the renderer's curve library must implement THESE, not its defaults.

| curve | cubic-bezier | behaviour |
|---|---|---|
| **TRAVEL** | (0.42, 0, 0.58, 1) | rest → rest; peak velocity ≈ 1.5 × average at midpoint |
| **SETTLE** | (0.22, 1, 0.36, 1) | fast start, lands at rest — arrivals, growths, fades-in |
| **LAUNCH** | (0.55, 0, 1, 0.45) | rest start, fast exit — departures, falls, fades-out |
| **STAMP** | easeOutBack, overshoot s = 1.2 | tiles/plaques only |
| **SWELL** | sinusoidal value pulse | glows, brights, breathing, halo pulses |
| **CONST** | linear | constant velocity — light travel, orbits, scans, fronts, the gear |

- **Velocity convention:** v_avg = path length ÷ duration, stated per
  movement; endpoint velocities are the named curve's own (TRAVEL and SETTLE
  end at 0 px/s; LAUNCH starts at 0 px/s).
- **Opacity:** α changes use SETTLE (in) / LAUNCH (out) unless marked LINEAR
  (scene crossfades are LINEAR — decided) or SWELL (pulses).
- **Idle grammar** (applies everywhere; per-beat overrides are stated):
  - *Nodes:* breathing — scale 1 ± 0.008 SWELL, period 5.0 + 0.7 × slot-index
    s (phases staggered by slot), pool/glow α ± .02 in phase. Pooled emphasis
    rides on top, multiplicatively.
  - *Links:* a shimmer front travels each link at **120 px/s CONST**, one
    pass per 4 s, staggered by link index.
  - *Bands (streams):* texture flow scrolls at the beat's stated rate. A band
    is still ONLY when scored empty or drained — stillness is a state, never
    a default.
  - *Light points at rest:* perfectly still (decided — points are precise;
    they do not drift).
  - *Models:* halo breathing SWELL ± .05, period 4.2 s.
  - *Engraved figures, houses, furniture:* **decided stillness** — reason:
    they are plates in a diorama world; motion lives in light, the web,
    streams, and type. The one exception is the Gear (scored rotation).
  - *Type:* holds exact; never breathes, never drifts.
- **Emphasis grammar:** an emphasis names its channel (bright / scale /
  glow α), peak value, attack (curve + duration), decay (curve + duration),
  and hold value. A peak that HOLDS is stated as a hold.
- **Anticipation / overshoot:** stated in px (or %) and seconds wherever
  used. "None" is recorded where the absence is itself the decision.

## Viewer-learning expectations (viewer terms, written before production)

- **L13:** *The model itself keeps nothing: what it pours out comes back and
  is gone — rented means nothing accumulates there, and it's the same for
  everyone.*
- **L14:** *My harness works the opposite way: what flows into it stays in
  it — and my memory holds the most.*
- **L15:** *On my side the same sessions make it grow: each one adds, each
  fix sharpens, and using it is what matures it.*
- **L16:** *It stops being a tool setting and becomes an asset — something
  I own.*
- **L17:** *On my computer the layer is open: I can see every part of it —
  nothing is hidden from me.*
- **L18:** *And I can act on it directly — open it, read it, change it —
  any time, with nobody's permission.*
- **L19:** *So the first move is to understand this layer — it is already
  there, growing, and mine to understand.*
- **L20:** *The second move is to build my own — and building it makes it
  grow.*
- **L21:** *And the third is to keep an eye on it — it stays mine because I
  watch it.*

## Standing laws and carried defect fixes

- **Statue-still Thinker** (the segment's named adaptation 5): the figure
  never moves in these scenes; CAST's hand actions and turns are carried by
  node-side motion and staging (adaptation A-R5 below).
- **Type — the ration is RETIRED (owner doctrine, 2026-10-28).** The
  six-event ration (F-T1…F-T6) was an invention of the score-prep, and
  Hadi's #108 verdict (the two-paragraph piece scored 55–60) named its
  cost: the closing mantra — *learn it · understand it · build it · keep
  an eye on it* — is the prime kinetic-type site of the film, and it
  carried almost no type; L21's title phrase was scored "type leaves."
  The ration is replaced by the standing rule: **type appears wherever
  the words carry the story, and every appearance is fully decided**
  (words, placement, choreography, scale, residence, exit — decision
  model §9A). The film's type set is now: F-T1 (L1) · F-T2 NOTHING (L6)
  · F-T3 HARNESS (L8) · F-T4 TWO PLACES (L9) · the **mantra layer** —
  M-T1 (L18) · M-T2 UNDERSTAND + F-T5 (L19) · F-T6 (L20) · M-T3 (L21) —
  plus per-line FORECLOSED absences, each with its reason recorded in
  the scenes' type notes. Absence remains a decision; scarcity is no
  longer a reason.
- **Defect 1 (legible scale):** the bolt appears NOWHERE in L13–L21
  (decided). Every stream here is a band of width 36–44 on a stage-wide arc.
- **Defect 3 (no unscored stillness):** every gap carries scored motion;
  events start early / overlap into the next beat (loop 2's tail completes
  inside the L13 gap; pool point 4 completes inside the L14 gap; the tile
  exit begins inside the L20→L21 gap).
- **Defect 4 (one focus per beat):** Scene C reuses the uncrowded Mechanism
  stage; Scene D's work house is background mass at bright .55 while the web
  is the focus; L17's spacing REDUCES density as its subject.
- **Defect 5:** all anchors measured (above). The film's one missing record
  (L3 word-times) was discharged 2026-10-28: measured and locked in the
  L01–L04 score (governing amendment §17A.6-A).

## New cast — object assets in the locked engraved family (no new characters)

*Family spec (binding on production): engraved illustration — deep-blue ink
line, brass accents, cream highlights, cross-hatch shading, transparent
ground, single object, no text, no face. Produced by the cast-design process
to this spec BEFORE the build; family match and centre-of-rotation checks
are Gate-1 items. Naming them here is the score-level decision the #107
steer authorizes ("add more assets"); drawing them is build work.*

- **`lens.png` — the Lens.** A brass-rimmed inspection lens, short handle,
  glass disc with a cream glint wedge. In scene: **w 150** (disc Ø ≈ 110).
  Serves L17 (the inspection circuit) and L18 (the reading hover). Its glass
  centre carries a fixed glint point (r 5, α .9) — the light rides the lens.
- **`archive-wall.png` — the Archive Wall.** A wall of small drawers (card
  catalogue), several drawers open with cream cards visible, a ledge along
  its base. Backdrop plate for A-S06: box **(40,520)–(1040,1500)**, drawn
  dimmable; the drawers' openness is a STATE in the artwork, never an event.
- **`gear.png` — the Gear.** A brass cog, 12 teeth, hub ring; image centre =
  rotation centre exactly (production requirement, Gate-1 checked). In
  scene: **w 92** (r 46), mounted on the work house's wall at **(1010,1180)**.
  The workshop's one moving piece of furniture.

*Expansion 2 (2026-10-28, JOB FULL-FILM SCORE CLOSURE — Hadi's order to
expand the visual asset category, serving beats that lacked furniture):*

- **`key.png` — the Key.** A single ornate brass key drawn lying
  horizontally (bow left, bit right), cream highlights on the bow ring.
  Serves access, made object: in the L01–L04 score's Scene B it rests
  OUTSIDE the Case's glass on the floor at the case's base — in their
  room, not yet his; here in Scene E it rests on the Archive Wall's base
  ledge at **(880,1428)**, **w 120** — in reach, his. Movement rows in
  both scores: decided stillness everywhere.
- **`ledger.png` — the Ledger.** A heavy closed register book: navy
  binding, brass corners and clasp, cream page-block edges, three-quarter
  view. Serves L16 ("It becomes an asset — yours."): materializes at the
  work-house doorstep, centre **(830,1505)**, **w 210**, and rests there
  through Scene E's tableau.
- **`archive-box.png` — the Archive Box.** An open brass-bound card tray,
  cream session cards standing inside, several card edges above the rim
  (a STATE in the artwork). Serves L15: on the workshop floor at the
  Thinker's feet, centre **(215,1475)**, **w 230**, taking each node
  birth as a pulse of light; carried into Scene E at the same seat.

## Named adaptations (score level, recorded — not improvised)

- **A-R2:** the segment's standalone final fade-to-void (segment 32.15–33.15)
  is a segment-boundary device; in the full film, L12 **crossfades** into
  Scene C (45.933–46.733, LINEAR). The segment film itself is unchanged.
- **A-R3:** cast-design-1 has no Work Trio and no Paper Pair (segment
  adaptation 1 precedent): L14's warming is carried by pooled glow; L15's
  "sharper" by the kinked link straightening.
- **A-R4:** no computer asset exists (segment adaptation 2 precedent):
  "on your computer" is carried by the work house, the archive, and the open
  web.
- **A-R5:** CAST L18's hand actions are performed node-side: the node
  enlarges itself, the scan light reads it, the nodes exchange their own
  slots. The Thinker does not reach, turn, or gesture.

---

## SCENE C — A-S03 · The Mechanism Stage, return (45.933–54.253) · L13–L14

*Tempo: MEASURED (L13), BUILDING (L14). Web state: worn-receded (L13) →
worn-retaining (L14). Staging = the segment score's Scene 2 geometry,
verbatim: bust w 860, box (30,690)–(890,1305); head centre (490,845);
protected ellipse (490,845) r (245,265) — streams and links never enter it;
ring r 400; slots Cards −118° w 190 · Book −64° w 180 · Folder −6° w 185 ·
Note +38° w 130; Model w 300 centre (560,250). Entry state (from L12): four
nodes at slots, bright .80; links Cards–Book and Book–Folder present at
α .45 (they persist, per the segment's recorded decision); Note unlinked;
Model halo .55.*

**Beat C·1 — L13 (46.733–49.633): the rented loop.** Figure and web recede;
the Model pours a loop of stream that returns into itself and is consumed;
then the IDENTICAL loop again. Nothing is retained: no node bright changes,
no link changes — retention = 0, staged literally.

**Beat C·2 — L14 (50.183–53.803): the retained current.** Focus returns; a
current flows from the Model into the web and STAYS: pool points travel the
links and stop inside the nodes (Book pools brightest, 1.35 — memory holds
the most); a new link Book–Note forms; the band thins to a held thread
instead of vanishing.

### Movement spec — Scene C

| asset | beat | movement |
|---|---|---|
| bust + 4 nodes | C·1 | Recede **in place** (decided: recession is scale + light, never travel): scale 1.0→.965 about (490,845), bright bust 1.0→.55 / nodes .80→.55, **TRAVEL**, 46.73–47.40 (0.67 s). Anticipation none. Idle in recession: node breathing continues (grammar), halo breathing continues. |
| bust + 4 nodes | C·2 | Return: scale →1.0, bright →1.0, **SETTLE**, 50.18–50.90 (focus comes back decisively). |
| Model | C·1–C·2 | Halo α .55→.90 **TRAVEL-value** 46.90–47.40; →.55 across 49.633–50.90. Idle: halo breathing (grammar). Body: decided stillness. |
| loop band (bandA w 44) | C·1 | Head travels the scored arc [(560,250)→(900,380)→(950,640)→(880,400)→(560,250)] (≈1232 px, never entering the ellipse, crossing no node): head progress **TRAVEL**, 46.95–47.85 (0.90 s), v_avg ≈ 1369 px/s, ends at rest at the Model's rim. Flow scroll **900 px/s CONST**. Tail = head profile delayed 0.5 s (a 0.5 s ribbon of light); fully consumed by 48.35. Bright pulse ×1.2 **SWELL** (0.3 s) on "intelligence" (47.69). **Loop 2 = the identical baked track at +1.65 s** (head 48.60–49.50, consumption completes 50.00, inside the gap) — sameness by construction. |
| retained band (bandC w 36) | C·2 | Head grows Model→Book along [(640,300)→(700,420)→(755,470)] (≈208 px): **SETTLE**, 52.30–53.00 (0.70 s), v_avg ≈ 297 px/s, ends at 0 px/s at the Book's right edge (the scene's one allowed touch; starts on "Everything", 52.285). Flow scroll 300 px/s. Then width 36→14 **TRAVEL-value** + flow slows to 60 px/s, 53.00–53.90: a held thread, never consumed, never still. |
| pool points ×4 (r 8) | C·2 | Travel **SETTLE** (fast start, decelerate in, end at rest INSIDE the node): P1 via the retained band to Book, arrives 52.95; P2 Book→Cards along the link arc (≈377 px, 0.40 s, v_avg ≈ 940 px/s), arrives 53.15; P3 Book→Folder, arrives 53.35; P4 via the NEW link to Note, arrives 53.60–53.90 (completes inside the gap). On arrival each point merges: α fades into the node's pool glow over 0.15 s, SETTLE. |
| nodes (emphasis) | C·2 | Pooling emphasis **HOLDS** (decided — retention means the emphasis stays): Book bright →1.35 + pool glow α →.30 (attack SWELL 0.2 s from 52.95); Cards →1.20 / .22 (53.15); Folder →1.20 / .22 (53.35); Note →1.10 / .15 (by 53.90). No decay inside the scene. |
| link Book–Note | C·2 | Forms 53.45–53.75: α 0→.70 **SETTLE** + a formation front travels Book→Note **CONST** (arc ≈ 573 px ÷ 0.30 s ≈ 1900 px/s — a light front, decided fast). Links Cards–Book / Book–Folder: α .45 constant; idle shimmer (grammar). |

**Type:** FORECLOSED at L13 and L14 (word-placement re-audit, 2026-10-28 —
reasons, not ration): at L13 "rented" is *enacted* by the loop's
consumption — nothing stays — and the word was already struck at L6–L7;
at L14 retention is *enacted* by the pooling points coming to rest inside
the nodes, so type would caption an enacted claim. **Transitions:** in —
crossfade from the fork tableau 45.933–46.733 LINEAR (A-R2); out —
crossfade to Scene D
53.90–54.253 LINEAR, with pool point 4 completing inside it.

---

## SCENE D — A-S05 · The Accumulation Workshop (53.90–63.222) · L15–L16

*Tempo: BUILDING (L15, clause-timed growth), HELD (L16). Web state: GROWING
→ DENSE. Staging: Thinker master h 700 (w 509), box (80,742)–(589,1442),
head centre (334,917); web centre (394,917); web ring = ellipse rx 300,
ry 215 about the web centre (the cortex spreads sideways, never over the
head; the head zone keeps Scene 2's protection grammar). Slots: Cards
(−118°) centre (253,727) w 150 · Book (−64°) (526,724) w 145 · Folder (−6°)
(692,895) w 150 · Note (+38°) (630,1049) w 110 — and three empty slots
waiting: Cards II (−165°) (104,861) w 125 · Folder II (+140°) (164,1055)
w 115 · Note II (+75°) (472,1125) w 95. Work House h 520 (w 602), box
(478,1040)–(1080,1560), bright .55 — background mass (defect-4 lesson: one
focus per beat); its door lit. The Gear is mounted on its wall at
(1010,1180). Model w 170 centre (150,300), halo .50 — present, secondary.
Entry state: the four nodes pooled-bright from L14 (Book 1.35 · Cards 1.20 ·
Folder 1.20 · Note 1.10); links Cards–Book, Book–Folder, Book–Note at α .70.
**The scored flaw:** a fourth link, Folder–Note, forms hastily during the
entry crossfade (53.90–54.25) WITH a visible 12° dogleg — accumulation's
haste leaves it crooked, and L15's fix is its subject.*

**Beat D·1 — L15 (54.253–59.489), three clauses.**
Clause 1 ("session", 54.703): Cards II condenses at its slot and links in —
a session adds. Clause 2 ("fix", 56.667): two points race the kinked link
from both ends; the kink straightens across "makes it sharper." (the
corrected Folder pulses and stays brighter). Clause 3 ("grows… matures",
58.137–59.489): Folder II and Note II condense; three more links form; the
web's collective glow arrives. **End state: 7 nodes, 8 links — DENSE.**
On the floor at the Thinker's feet the **Archive Box** (§ New cast) takes
each birth as a pulse of light — the sessions land somewhere.

**Beat D·2 — L16 (60.389–62.672): the asset.** Traffic calms (periods
× 1.6). A gold gleam sweeps the full ring on "asset" (61.195) — the web
reads as ONE object; at the work-house doorstep the **Ledger** (§ New
cast) materializes — the asset made thing. The Model recedes to dormant.
On "yours." (62.291) a
light-point travels from the web centre to the Thinker's cap brim and RESTS
there — the L2 singling point's rhyme, closed: singled out → owner.

### Movement spec — Scene D

| asset | beat | movement |
|---|---|---|
| Thinker | D·1–D·2 | Decided stillness (statue law). |
| Work House | D·1–D·2 | Decided stillness; bright .55 constant in D·1, →.70 **TRAVEL-value** across D·2 (the workshop warms behind the asset tableau). Door glow idle: SWELL ±.03, 5 s. |
| the Gear | D·1–D·2 (+E) | Rotation **CONST 6°/s clockwise**, continuous, no event response (decided — machinery idles; it does not act). Bright = house bright × 1.1. |
| Model | D·2 | Recede: drift (−24,−18) px **TRAVEL** 60.39–62.20 (v_avg ≈ 17 px/s — a slow sink), scale →.92, halo .50→.22 SWELL-value. |
| Cards II | D·1 cl.1 | Entry = **condensation** (decided: session-nodes arise from use, in place — they do not travel): scale .35→1.0 + α 0→1, **SETTLE**, 54.70–55.60, with birth overshoot — scale peaks 1.05 at 85% of the window, settles to 1.00. Then link Cards–Cards II forms (55.60–55.90: α SETTLE + formation front CONST ≈ arc ÷ 0.30 s); a pool point travels it and pools (55.75–56.15, SETTLE; bright →1.15, HOLD). Ring breathes: rx 300→315 **TRAVEL-value** 54.70–55.90 (every birth = a ring breath, +5%). |
| fix points ×2 (r 7) | D·1 cl.2 | Race the kinked link from BOTH ends **CONST ≈ 365 px/s** (path ≈ 175 px incl. the dogleg), 56.67–57.15, starting on "fix" (56.667). Constant speed is the decision: urgency does not ease. They meet at the kink. |
| kinked link | D·1 cl.2 | The dogleg point migrates to the clean arc: lateral displacement ≈ 35 px, **TRAVEL**, 56.85–57.30 (v_peak ≈ 78 px/s). After: path state clean, α .70→.80. |
| Folder (emphasis) | D·1 cl.2 | Bright ×1.3 **SWELL** attack 0.15 s on "sharper." (57.282), decay to **held 1.28** over 0.4 s (peak-and-hold-near — decided). |
| Folder II · Note II | D·1 cl.3 | Condense (birth grammar, identical to Cards II): Folder II 58.20–58.90, Note II 58.45–59.15, SETTLE + 5% overshoot. Links form staggered — Folder–Folder II 58.30–58.65 · Book–Note II 58.55–58.90 · Folder II–Note II 58.80–59.15 (α SETTLE + CONST fronts) — each with a pooling point (SETTLE) arriving by 59.40. Ring breathes to rx 325 / ry 222; web glow disc (centre web centre, rx 380) α →.16 **TRAVEL-value** 58.137–59.489. All motion completes by "use." (59.489). |
| web traffic | D·1–D·2 | Link traffic points **CONST 120 px/s**; at L16 all traffic slows to **75 px/s** (maturity = calm — stated as speeds, never zero). Link shimmer per grammar. |
| gleam sweep | D·2 | A gold rim light (span 30°, width 50) travels the full ring perimeter (≈1734 px at rx 325/ry 222) **CONST ≈ 1825 px/s**, 61.10–62.05, on "asset" (61.195). CONST is the decision: light does not accelerate. |
| cap point (r 7) | D·2 | Path web centre (394,917) → cap brim (318,803) (≈137 px): **SETTLE**, 62.29–62.60 (v_avg ≈ 442 px/s), ends at rest ON the brim, on "yours." (62.291). Rest α .85, perfectly still, through the crossfade. |
| Archive Box | D·1 | Present from the scene's entry at its seat (215,1475), w 230 (§ New cast): α rides the entry crossfade LINEAR to 1 by 54.253. **Decided stillness** (floor furniture; its cards are a state in the artwork). Emphasis = light only: an inner glow (GOLD disc rx 90 at its centre) pulses α 0→.18 **SWELL**, 0.5 s, at each birth (54.70 · 58.20 · 58.45) — every session that adds a node also lands in the box. Rotation 0°. |
| the Ledger | D·2 | Absent through D·1 (α 0 — decided: the asset exists when it is named). Materializes at the work-house doorstep, centre (830,1505), w 210, foreground z above the house: α 0→1 **SETTLE** + scale .96→1.0 **SETTLE**, 60.55–61.20, complete on "asset" (61.195). Emphasis on "yours." (62.291): warm under-glow (GOLD, rx 150 at its base) α 0→.20 **SWELL**, held into the crossfade. Rotation 0°; no anticipation (facts arrive without wind-up, M8). |

**Type:** FORECLOSED at L15 and L16 (word-placement re-audit, 2026-10-28 —
reasons, not ration): at L15 growth is *enacted* by the ring's births and
breaths, so type would caption an enacted claim; at L16 the gleam sweep
and the cap point ARE the ownership image, and a YOURS stamp would break
the beat's held quiet. **Transitions:** in — crossfade 53.90–54.253
LINEAR (the kinked link forms inside it); out — crossfade 62.67–63.222
LINEAR, the cap point resting, the Open Cortex spacing already beginning
under it (Scene E).

---

## SCENE E — A-S06 · The Open Archive / Invitation Stage (62.67–77.023) · L17–L21

*Tempo: MEASURED (L17), MEASURED (L18), SURGE in three held strikes
(L19–L21). Web state: OPEN (L17–L18) → DENSE-invitation (L19–L21). Staging
carries from Scene D (same room, closer attention), with one redress: **the
Archive Wall fades in behind everything during the entry crossfade** —
the workshop becomes the archive. Thinker h 700, box (80,742)–(589,1442);
web centre (394,917); Work House right, bright .70, the Gear on its wall;
Model dormant top-left (150,300), halo .22. Entry state: DENSE web — 7
nodes, 8 links, pooled brights (Book 1.35 · Folder 1.28 corrected · Cards
1.20 · Note 1.10 · Cards II 1.15 · Folder II 1.15 · Note II 1.15), ring glow
α .16, cap point resting at α .85.*

**Beat E·1 — L17 (63.222–65.816): the Open Cortex.** The dense web spaces
itself apart — ring rx 300→375, ry 215→265, web centre shifts (394,917)→
(434,927) — every node clear of every other, links stretched, unbroken.
The Lens rides the expanded ring; each node swells as it passes. Nothing
is hidden.

**Beat E·2 — L18 (66.266–70.366): handled directly, in clause order.**
"Open it," — the Cards node enlarges toward the viewer while the Lens
hovers over it. "read it," — a scan light reads it, twice. "change it" —
Folder and Note EXCHANGE slots on bowed arcs; the web holds the new
arrangement. "any time, without asking anyone" — NO gate event: a free
point runs the whole ring unimpeded, and a pulse ripple follows it around.

**Beat E·3 — L19 (71.166–72.362): understand.** The staging widens; the
**Recommendation Current** arcs Model → web → the work-house door; the
imperative **UNDERSTAND** strikes first as tiles (M-T2, on "Understand,"
71.327), and the word HARNESS returns as tiles beneath it (F-T5, restaged
to the stack) — the sentence assembles in its spoken order.

**Beat E·4 — L20 (72.762–73.813): build.** BUILD stamps beneath HARNESS
(F-T6, restaged) — the stack stands complete: UNDERSTAND / HARNESS /
BUILD, three rows held. At the word, an eighth node sparks alight in the
ring's east gap and links in — building is enacted, not merely said; the
workshop door glows ready.

**Beat E·5 — L21 + tail (74.213–77.023): keep an eye.** The three stacked
rows clear (73.95–74.30), and the final strike lands in the vacated seat:
**KEEP AN EYE ON IT** — three word-plaques stamping in on the line's own
words (M-T3) — and HOLDS through the tail: the title phrase is the film's
last type, leaving only inside the global fade. Beneath it, a single
point takes a slow orbit of the ring — a kept eye. The full cast holds in
a LIVING tableau; the orbit continues past the last word into the fade.

### Movement spec — Scene E

| asset | beat | movement |
|---|---|---|
| Archive Wall | E·1–E·5 | Entry: α 0→.30 **LINEAR** inside the entry crossfade (62.67–63.222), bright .30. Then **decided stillness** (furniture; its drawers' openness is a state in the artwork). Never competes: α and bright capped as stated. |
| the Gear | E·1–E·5 | Rotation **CONST 6°/s** continues (same wall, same law as Scene D). |
| 7 nodes (expansion) | E·1 | Glide outward along their slot rays — **straight radial paths** (decided: the web stretches radially, not along arcs), **TRAVEL**, 63.30–64.60 (1.30 s), all start and end at rest: Cards (253,727)→(258,693) 34 px · Book (526,724)→(598,689) 80 px · Folder (692,895)→(807,899) 115 px · Note (630,1049)→(730,1090) 108 px · Cards II (104,861)→(72,848) 35 px · Folder II (164,1055)→(147,1097) 45 px · Note II (472,1125)→(531,1183) 83 px (v_avg 26–88 px/s — a held breath, not a snap). Anticipation none. Links stretch with their endpoints; α .70→.85 TRAVEL-value. Starts on "computer," (63.674) — the glide begins a breath BEFORE the word completes: overlap, defect-3 pattern. |
| the Lens (w 150) | E·1 | Entry: α 0→1 **SETTLE** + scale .9→1.0, 64.30–64.70, at the ring's west rim. **The inspection circuit:** the Lens rides the expanded ring itself (perimeter ≈ 2026 px) **CONST ≈ 1350 px/s**, 64.40–65.90; each node swells as it passes (bright ×1.15 **SWELL**, 0.25 s wide, proximity-timed). Then glides **TRAVEL** 65.90–66.40 to its hover post above the Cards slot, (340,700) — arriving inside the L17→L18 gap, posted before "Open it," (66.429). Glint point rides the glass centre throughout. |
| the Lens (hover) | E·2 | Hover bob: ±4 px vertical **SWELL**, period 2.6 s (decided — a held lens trembles slightly; it is the one furniture-class asset with an idle, because it is HELD, not mounted). |
| Cards node | E·2 | "Open it,": anticipation — scale dips to .97 over 0.08 s **TRAVEL** (66.35–66.43); then opens: scale 1.0→1.55 + centre (258,693)→(340,780) (straight path, ≈120 px), **TRAVEL**, 66.43–67.00 (v_avg ≈ 210 px/s). Return: 68.20–68.74 **TRAVEL** to its expanded slot and scale, during "change it". |
| scan glow (w 90) | E·2 | Reads the enlarged Cards: **CONST 720 px/s**, two full passes left→right across its 233 px width, 67.10–67.75, on "read it," (67.055). Constant speed = a reading eye does not ease. The Lens hovers above; the scan passes beneath its disc. |
| Folder ⇄ Note | E·2 | Slot exchange: two **bowed arcs, bowed apart by 60 px** at midpoint (decided bow), **TRAVEL**, 67.95–68.70 (path ≈ 230 px, v_avg ≈ 307 px/s), on "change it" (67.812). Mid-transit separation ≥ 150 px at ≈68.32 (Gate-1 check). Links re-draw to the exchanged positions during the swap. Anticipation none — the swap is brisk and businesslike (decided). |
| free point (r 8) | E·2 | The whole expanded ring **CONST ≈ 1842 px/s** (2026 px in 1.10 s), 68.85–69.95: it slows for NO node, stops at NO node — ungated motion is the meaning. Then a link ripple: a bright front follows around the ring **CONST ≈ 1690 px/s**, 69.0–70.2, each link's α peaking .85→1.0 SWELL as the front passes. |
| **M-T1 OPEN IT plaque** | E·2 | **Mantra layer, first strike.** Word plaque (§9A.3-A geometry) at the Scene E type seat, centre (540,438), z above all cast. Entry on "Open" (66.429): drop 26 px **STAMP** (easeOutBack 1.2), 0.22 s, + squash scaleY .92→1.0 **SETTLE** 0.08 s; α materializes 0.10 s (M11 plaque rule). Holds while the clause completes; exit α →0 **LAUNCH** 66.90–67.05 — the seat passes to the next word. |
| **M-T1 READ IT plaque** | E·2 | Same seat, same entry, on "read" (67.055) — stamping as the scan light begins its passes beneath the Lens. Exit α →0 **LAUNCH** 67.66–67.81. |
| **M-T1 CHANGE IT plaque** | E·2 | Same seat, same entry, on "change" (67.812) — stamping as Folder ⇄ Note begin their exchange. Holds through the clause; exit α →0 **LAUNCH** 68.70–68.88, completing as "any time" (68.815) gives way to the free point's ungated run (68.85): type yields the stage to unimpeded motion — the exit IS the clause's meaning. |
| Archive Box | E·1–E·5 | Carried at its seat (215,1475), α rides the entry crossfade with the room. **Decided stillness**; emphasis foreclosed in E (decided — the invitation beats belong to the Lens, the Current, and the type). Rotation 0°. |
| the Ledger | E·1–E·5 | Carried at its doorstep seat (830,1505), foreground. Under-glow decays .20→.10 **TRAVEL-value** across E·1, then holds .10. **Decided stillness** — the asset rests in the tableau. Rotation 0°. |
| the Key | E·1–E·5 | Rests on the Archive Wall's base ledge at (880,1428), w 120 (§ New cast): enters with the wall's redress, α 0→1 **SETTLE** inside the entry crossfade; bright .80 (a real object on a dim backdrop). **Decided stillness** in every beat; emphasis foreclosed — at L18 the free point is the event, and the key's mere presence is the access claim. Rotation 0°. |
| staging group | E·3 | Widen: figure + web scale 1.05→.97, dy +30, **TRAVEL**, 70.60–71.60. Room furniture (wall, house, gear) does NOT widen (decided — only the figure and his layer pull back). |
| the Lens (exit) | E·3 | Retires during the widen: path hover post (340,700) → the work-house roof (950,1030) (≈694 px), **TRAVEL**, 70.60–71.60 (v_avg ≈ 694 px/s); α →.80; then still for the rest of the film (furniture). No pop-out, no fade-out — it is put away, in view. |
| Recommendation Current (bandA w 40) | E·3 | Head path Model (150,300) → web west edge (59,927) → work-house door (790,1330) (≈1469 px): **CONST ≈ 1335 px/s**, 71.20–72.30, with a SETTLE tail-landing in the final 0.15 s (the drape settles into the door). Flow scroll 1000 px/s; as it passes the web (71.75) the ring glow bumps +.05. Settles as a held drape: α .80, flow slows to 120 px/s — a held connection, never zero. The onward carry: the viewer's eye lands on the workshop door. |
| **M-T2 UNDERSTAND tiles** | E·3 | **Mantra layer, second strike.** 9 letter tiles (tile 56, pitch 62; row width 552), centre **(540,290)** — the top row of the mantra stack, z above all cast. Stagger-rise (the HARNESS family entry): from 71.27 + i×0.06, rise 26 px, **STAMP** easeOutBack(1.2), α materializes 0.10 s per tile (M11) — the first tile lands on "Understand" (71.327, ±1 frame per M24), the row complete ≈ 72.0. **Residence: holds as the stack's first row through E·4**; exit shared (below). Type never breathes (grammar). |
| F-T5 HARNESS tiles | E·3 | **The segment F-T3 movement spec, verbatim except its seat** (tile 64, pitch 70; stagger-rise from 71.90 + i×0.07: rise 26 px, STAMP easeOutBack(1.2)) — the word returns with its own decided motion, assembling on "harness." (71.930). **Seat restaged 2026-10-28 (mantra layer): centre (460,330) → (540,438)** — the Scene E type seat, the stack's second row, directly beneath UNDERSTAND. Exit shared (below). |
| F-T6 BUILD tiles | E·4 | Plaques tile 72, pitch 78 — larger than HARNESS (the imperative is bigger). Drop 30 px **STAMP** from 72.90 + 0.20 s, then squash scaleY .92→1.0 **SETTLE** 0.08 s — the NOTHING stamp's energy, gentled. Lands on "Build" (72.926). **Seat restaged 2026-10-28 (mantra layer): centre (470,478) → (540,586)** — the stack's third row, beneath HARNESS; its base (622) clears the web's top (662) by 40 px. Exit shared (below). |
| eighth node (cards w 60→95) | E·4 | Birth at the ring's −30° slot, centre (759,795): the Scene D birth grammar — scale .35→1.0 **SETTLE** with 5% overshoot, α 0→1, 72.926–73.60, width growing 60→95; birth flare bright ×1.6 **SWELL** decaying to held 1.15. Link Folder–NewNode forms 73.30–73.70 (α SETTLE + CONST front). Door glow α .35→.55 **TRAVEL-value** 73.0–73.813. |
| M-T2 + F-T5 + F-T6 (exit) | E·5 | All three stack rows: shrink-to-centre + α →0 **SETTLE**, **73.95–74.30** — begun inside the L20→L21 gap (overlap, defect-3 pattern), complete before "Keep" (74.376). The stack clears so the final phrase lands alone. |
| **M-T3 KEEP AN EYE ON IT plaques** | E·5 | **Mantra layer, final strike — replaces the retired "type leaves."** Three word plaques (§9A.3-A geometry) in one row, centre **(540,438)** — HARNESS's vacated seat — gaps 24 px, z above all cast: **KEEP** stamps on "Keep" (74.376) · **AN EYE** on "eye" (74.619) · **ON IT** completing on "it." (74.940). Each: drop 26 px **STAMP** 0.22 s + squash **SETTLE** 0.08 s, α materializes 0.10 s. **Residence: the completed phrase HOLDS through the living tableau (75.023–76.023) — there is no exit event; it leaves only inside the global fade, its α riding the fade LINEAR with the cast.** The title phrase is the film's last type, watched over by the orbiting point beneath it. |
| watch point (r 8, α .85) | E·5 | A slow full orbit of the expanded ring (centre (434,927), rx 375, ry 265; perimeter ≈ 2026 px) **CONST, period 5.2 s (≈390 px/s)**, from 74.30, starting on "eye" (74.619). Decided: the orbit is NOT required to complete — by the fade's end it has covered ≈ 52% of the ring. The watching outlives the words; that is the beat. No ease, no pulse — a kept eye is steady. |
| full cast | tail | LIVING tableau 75.023–76.023: traffic at mature speeds (75 px/s), ring glow held .16, door glow held .55, cap point resting α .5, gear turning, lens at rest on the roof. **Global fade to void 76.023–77.023 LINEAR**, aligned with the audio tail. No freeze precedes the fade — the film ends alive, then dark. |

**Type:** the mantra layer + F-T5/F-T6 (M-T1 at L18 · M-T2 + F-T5 at L19 ·
F-T6 at L20 · M-T3 at L21). FORECLOSED at L17 (word-placement re-audit,
2026-10-28 — reason, not ration): openness at L17 is *staged* — the web
spacing itself apart and the Lens's inspection circuit — so type would
caption a staged claim.
**Web state:** OPEN (L17–L18) → DENSE-invitation (L19–L21).

## THE MANTRA KINETIC-TYPE LAYER (added 2026-10-28, JOB FULL-FILM SCORE CLOSURE)

*Owner doctrine (Hadi, 2026-10-28, on scoring the two-paragraph piece
55–60): intentional decisions about where the words appear — kinetic
typography — and the closing mantra is the best place in the film for
word animation. This layer is the repair. Its design, in one paragraph:
the mantra is staged as a STACK that builds in spoken order at the top
of Scene E's stage — the hands-on triad first as single word-plaques
passing through one seat (OPEN IT → READ IT → CHANGE IT, L18, each
exiting as its clause completes, the last yielding to the ungated free
point); then UNDERSTAND strikes as letter tiles (L19) and HARNESS
returns beneath it, BUILD stamps beneath that (L20) — three rows held
together, the invitation accumulating exactly as the film says the layer
does; then the stack clears and the final phrase lands alone in the
vacated middle seat — KEEP AN EYE ON IT, one plaque per spoken word
(L21) — and HOLDS through the tail, the film's last type, watched by
the orbiting point. Placement is decided against the staging: the type
seat (540,438) and the stack rows (y 290 / 438 / 586) sit in the stage's
clear band — above the web's top (662), clear of the dormant Model
(x ≤ 225), clear of the Thinker's head (top 742) — and every row's span
fits the safe zone at phone size (glyph heights 46–72 px ≈ 17–26 px at
390 wide, legible).*

*Word-plaque geometry is closed film-wide as governing amendment
§9A.3-A (below): height 76 px; width = the word's measured glyph width
at 46 px cap height in the chosen face + 56 px padding (the measurement
is a build step; the rule is the decision); corner radius 0.14 × height;
fill NAVY `#16233C`, outline GOLD `#D9A94E` width max(2, height/20) = 4,
letters CREAM `#F1E7CE`. Plaque entry is the gentled stamp (drop 26 px
STAMP + squash SETTLE), promoted from F-T6; plaque α materializes at
0.10 s under M11. Letter-tile entries keep their scored family forms.*

## The Ending Standard — compliance, stated

The Academy ending standard (carry the viewer onward + plug the Academy in
the piece's own terms; no silent bridge card) is satisfied inside the
piece's own terms: **(1)** the spoken triad IS the plug — *Understand the
harness. Build your own harness. Keep an eye on it.* — the Academy
invitation, verbatim canon, staged as held strikes (the mantra type
stack and its held final phrase, the node's birth, the watch orbit),
not read off a card. **(2)** The viewer is carried ONWARD visually:
the Recommendation Current lands the eye on the workshop door (L19 — the
place where building happens); the eighth node's birth shows the way
onward is growth (L20); the watch orbit continues past the final word
(L21 — the practice continues after the video ends). **(3)** The film ends
on a living tableau and a scored fade — never a freeze, never a silent
card.

## Gates for these scenes (build-time, by the segment score's method)

- **Gate 1 (staging maps):** Scene C geometry pixel-equal to the segment
  Scene 2 map; Scene D slot ellipse and the kink's 12° dogleg verified as
  INTENTIONAL (the scored flaw is drawn, measured, and labelled in the
  map); Scene E expanded centres as tabled; new-asset family match (line,
  palette, hatch) against cast-design-1, and the Gear's rotation centre =
  image centre; Lens path ∩ head zone = ∅; swap mid-transit separation
  ≥ 150 px.
- **Gate 2 (per-scene stills):** 50% / 80% frames per scene — C: loop 1
  mid-arc, Book pooled; D: kink mid-straighten, the gleam mid-ring; E: Lens
  mid-circuit, Cards enlarged under the hover, the swap mid-transit, the
  final tableau.
- **Gate 3 (frame-difference, QC V-19):** no zero-motion stretch ≥ 2.0 s in
  45.933–77.023; the tail tableau must REGISTER as living (traffic + gear +
  breathing) in the difference report.
- **Gate 4 (movement audit — NEW, per the #107 doctrine):** every movement
  in the render is traced to a movement-spec row in this score (asset,
  beat, curve, velocity); any rendered motion without a row is an
  improvisation and fails the gate. Spot-verify three velocities by frame
  measurement (loop head, gleam, free point) against their stated v_avg
  ± 10%.
- **Gate 5 (phone size):** 390×693 frames at t = 48.0 / 57.0 / 61.5 / 68.3 /
  75.5 — loop legible at band scale, kink readable, gleam readable, swap
  readable, tableau alive.

---

## RE-AUDIT CLOSURE — residual variables (2026-10-28, JOB SCORE-RE-AUDIT)

*The movement spec and grammar above carry most of §11 for these
scenes. This appendix closes what they did not state: anticipation and
settle rows the tables omitted, rotation for every mover, z-order in
transit, and the velocities of the link-formation fronts and Scene D
pool points (numbers, computed from the scored slot geometry — ellipse
rx 300 / ry 215 in Scene D, rx 375 / ry 265 in Scene E). The film-wide
GOVERNING CLOSURE (identical in all three scores) follows.*

### Anticipation — closed for every event

None, decided, for: both Scene C loops (the Model pours without
wind-up — pouring is continuous behaviour, not a departure) · the
retained band's growth · every pool point (they are already moving on
their links; a wind-up on a link is meaningless) · every link
formation (light fronts do not prepare) · every condensation birth
(scale begins at .35 visibly — growth is its own onset; a pre-dip
would read as shrinking) · the kink-straightening (the fix points'
CONST race is the urgency; the link does not prepare to be fixed) ·
the gleam sweep · the Model's recede · the nodes' expansion glides ·
the Lens's entry and circuit · the slot exchange (stated in the spec:
"brisk and businesslike") · the free point · the Recommendation
Current · both tile stamps in Scene E · the eighth node's birth ·
the watch orbit. **Scored anticipations in these scenes: exactly
one** — the Cards node's dip to .97 before it opens (L18, in the
spec). Anticipation is rationed here exactly as type is.

### Settle — closed for every arrival

Loop heads: TRAVEL ends at rest at the Model's rim; the tail's
consumption (head profile delayed 0.5 s) is the settle — the loop
settles by being eaten, recorded. Pool points: the 0.15 s α merge
into the node's pool glow (spec) is the settle — absorption, light
rule. Link fronts: hard stop at the far node's edge, recorded
(absorption). Condensation births: the 5% overshoot peaks at 85% of
the window and returns to 1.00 by window's end on the same SETTLE —
the return is the settle (spec's birth grammar, named here). Kink
straightening: the migrated point lands on the clean arc and holds —
hard stop, recorded (a corrected thing stays corrected; α .70→.80 is
its after-state). Expansion glides: TRAVEL ends at rest, no secondary
settle — decided (the web breathes open; it does not bounce open).
Lens at its hover post: TRAVEL rest + the hover bob begins — the bob
IS the settle's continuation (a held thing trembles into stillness).
Cards enlarged (L18): holds at 1.55 until its scored return. Cap
point: rest on the brim, perfectly still (spec) — its settle is
absolute stillness, the rhyme's point. Eighth node: birth flare
decays to held 1.15 (spec). Watch point: **no settle, by design** —
the orbit continues past the fade (spec); a settle would end the
watching, which is the one thing the ending refuses to do.

### Rotation — closed for every mover

0° for every asset in these scenes except the Gear (CONST 6°/s cw,
scored). Written per mover because the policy must reach the transit
rows: nodes glide LEVEL along their radial paths and bowed arcs ·
the Lens rides LEVEL (a held instrument does not bank) · the
exchanging Folder and Note stay LEVEL on their bowed arcs · pool/free/
watch points are radial (rotation entailed-n/a) · bands follow their
path tangent (entailed).

### Z-order in transit — closed

Lens circuit: the Lens passes IN FRONT of the nodes it inspects (it
rides the ring's near side) and its glint point rides above its glass.
Scan glow: above the enlarged Cards, BELOW the Lens's disc (spec).
Slot exchange: Folder passes IN FRONT, Note behind (Folder is the
nearer file — the bow separates them vertically by 60 px and in z by
this decision; mid-transit separation ≥ 150 px is Gate-1's check).
Free point + ripple: above the link lines, below the node bodies at
endpoints (merge rule). Recommendation Current: BELOW the web's nodes
(it passes behind the web's west edge), ABOVE the houses and the
wall. Expansion: links stretch BELOW their nodes throughout. Archive
Wall: behind everything, always (its α cap is the enforcement).
Tiles (F-T5/F-T6): above the web, below nothing.

### Velocities — the remaining numbers

Link-formation fronts (CONST, front = arc ÷ formation window):
Scene C Book–Note ≈ 573 px ÷ 0.30 s ≈ **1,900 px/s** (spec) · Scene D
Cards–Cards II: arc ≈ 213 px ÷ 0.30 s ≈ **710 px/s** · Folder–Folder II:
arc ≈ 640 px ÷ 0.35 s ≈ **1,830 px/s** · Book–Note II: arc ≈ 600 px
÷ 0.35 s ≈ **1,710 px/s** · Folder II–Note II: arc ≈ 280 px ÷ 0.35 s
≈ **800 px/s** · Scene E Folder–NewNode: arc ≈ 300 px ÷ 0.40 s ≈
**750 px/s**. Pool points, Scene D clause 3 (windows assigned here —
the spec required arrival by 59.40): Folder II's point travels
Book→Folder II 58.65–59.05 (≈ 701 px, ≈ **1,753 px/s**, SETTLE) ·
Note II's point Book→Note II 58.90–59.30 (≈ 600 px, ≈ **1,500 px/s**)
· the Folder II–Note II point 59.05–59.40 (≈ 280 px, ≈ **800 px/s**).
Scene D clause 1's pool point is already windowed in the spec
(55.75–56.15; arc 213 px ≈ 533 px/s). Link shimmer and traffic speeds
are the grammar's (120 px/s; 75 px/s at maturity).

> **Correction (2026-10-28, recorded by Archer after the two-paragraph
> build):** the Book→Folder II pool-point arc above was originally stated
> as ≈640 px / ≈1,600 px/s. The score's own slot geometry gives ≈701 px
> on the base radii, hence ≈1,753 px/s over the scored 0.40 s window. The
> build followed the scored endpoints, window, and SETTLE profile, so the
> rendered movement was always the decided one; only this derived figure
> was wrong. No decision changes. (Source: build report
> `hidden_files/jobs/2026-10-28-two-paragraph-build.md`, defect 1.)

### Residences — the remaining rows

Archive Wall after entry: decided stillness; emphasis FORECLOSED
(it is the room, never the subject). Lens retired on the roof
(E·3–E·5): decided stillness; emphasis foreclosed — it has done its
work. Gear: its rotation is its idle AND its only behaviour (decided:
machinery idles; it never emphasizes). Work House in Scene E: bright
.70 hold + door glow as scored; emphasis foreclosed (the web and the
type carry L19–L21). Dormant Model (E): halo .22 hold with grammar
breathing; emphasis foreclosed — dormancy is the point.


## GOVERNING CLOSURE — film-wide (RE-AUDIT, 2026-10-28)

*Added by JOB SCORE-RE-AUDIT under decision-model §22: every governing
variable that applies to this film is closed here, in the score of
record. This table is identical in all three scores; a value that lives
only in build code does not count as decided, so each row names where
the value now lives.*

| # | Variable | Closure |
|---|---|---|
| M22 | Easing vocabulary | **DECIDED.** The only curves the film may use are the six named curves of the Movement Grammar (TRAVEL · SETTLE · LAUNCH · STAMP · SWELL · CONST), with their written control points. The segment code's functions map 1:1 and are foreclosed beyond this set: `eio`→TRAVEL, `eout`→SETTLE, `ein`→LAUNCH, `eoutback(s=1.2)`→STAMP, `bump` (sine)→SWELL, `lin`→CONST. |
| M23 | Realization fidelity | **DECIDED.** The full-film bake samples EVERY track at dt = 1/30 s (the segment's mixed 1/15 vs 1/30 densities are superseded); the renderer interpolates linearly between baked keys. Uniform density, chosen so no scene's motion smoothness differs by code habit. |
| M24 | Sync tolerance | **DECIDED.** Every named anchor lands within ±1 frame (0.033 s) of its MEASURED word time, verified post-render; an anchor that cannot be measured does not ship as an estimate (see the L3/L12 rows below). |
| M25 | Transition system | **DECIDED.** Scene joins are LINEAR crossfades only, at the durations scored per join; inside scenes, exits are events, never cuts. |
| M26 | Camera / viewport | **FORECLOSED.** Fixed frame in every scene of the film. Reason: the diorama stage grammar — all motion is the cast's; a camera move would be a new decision requiring a score amendment, not a build choice. |
| M13 | Rotation policy | **DECIDED.** Every asset's rotation is 0° at every moment, with ONE scored exception: the Gear (Scene D/E), rotating CONST 6°/s clockwise. Per class, with reasons: engraved figures, houses, furniture and the Case are plates — they do not tilt; the session cards fly LEVEL (they are documents, not birds — banking in flight is exactly the cartoon read the #107 verdict flagged); the bolt stays unrotated (its wipe reveal is its motion); tiles stay level; the Lens stays level (a held instrument); bands and light points follow their path tangent, which is entailed by the band/point realization, not a rotation choice. A decided 0° is a decision; it is written here so the renderer default is never again mistaken for one. |
| M8 | Anticipation | **DECIDED (governing rule).** Anticipation exists ONLY where a closure table scores it (Cards lift dip, L4 · Cards node dip, L18). Everywhere else anticipation is **none, decided**: furniture settles without warning, facts arrive without wind-up, the flinch has none by definition. An unscored anticipation in a render is an improvisation. |
| M10 | Settle | **DECIDED (governing rule).** Every arrival ends in exactly one of: a scored settle (duration + curve named), a scored squash (tiles), a scored glow/bright decay, or a recorded hard stop with its reason (session cards: dead stop = custody finality; light fronts: absorption at the node edge). Arrivals not covered by a row do not ship. |
| M11 | Opacity shapes | **DECIDED.** The only opacity shapes are SETTLE (in), LAUNCH (out), SWELL (pulses) and LINEAR (scene crossfades + the glass-crossing crossfade). The short linear ramps baked inside events (stamp α 0.05 s · HARNESS α 0.10 s · TWO PLACES α 0.12 s · flight in 0.08 s / out 0.10 s · slot-card 0.10 s) are promoted from `score.py` and decided as written in R-2: they are plaque/card materializations, not fades. |
| M12 | Brightness shapes | **DECIDED.** SWELL (the sine bump) is the film's one pulse shape — promoted from code, where it was universal by default; it is now universal by decision. Non-pulse brightness changes are value ramps on TRAVEL or SETTLE as tabled per event. |
| §9A.2 | Kinetic typeface | **DECIDED — CHOSEN: Noto Serif Display Bold** (`/usr/share/fonts/truetype/noto/NotoSerifDisplay-Bold.ttf`), for every type event in the film (all six tile events + F-T1's number). Reason: the cast world is vintage-engraving bookplate work (CAST-DESIGN: etched hatch, deep blue + brass + cream); a high-contrast display serif with engraved, bookplate letterforms belongs to that world, where DejaVu Serif Bold — a system default chosen by nobody, with screen-document letterforms — did not. The face is a designed face, installed on the build system, and its glyph coverage spans every scored render string (digits, capitals, the minus/hyphen set of the script-forms standard). DejaVu Serif Bold is foreclosed for type events from this closure on. |
| §9A.3 | Plaque design | **DECIDED (promoted from `render.py:plaque_img`, where it lived as code).** Per tile: rounded rectangle inset 2 px; corner radius 0.14 × tile; fill (22,35,60) = cast NAVY `#16233C`; outline (217,169,78) = cast GOLD `#D9A94E`, width max(2, tile/20); glyph height 0.60 × tile, centred (baseline offset −1 px as drawn); letter colour (241,231,206) = cast CREAM `#F1E7CE`. Reason: the plaque furniture is built from the cast's own palette tokens — that is why it read as belonging; it is now decided as score values, and any change is a score amendment. |
| §10B.2 | Glow falloff | **DECIDED (promoted).** Radial sprite 256 px; profile a = (0.5 + 0.5·cos(π·r))^1.6, r normalized to the sprite edge. Reason: the cosine falloff matches the soft halo in the cast plates; exponent 1.6 keeps the core tight so pools read as light, not fog. |
| §10B.6 | Stage light | **DECIDED (promoted).** Vignette: distance field centred (540,900), radii (760,1150), darkening 0.20 × clipped-distance². Floor glow as staged in the scores (centre (540,1605), rx 640, ry 140, GOLD, α .10). |
| §10B.7 | Light points | **DECIDED + FORECLOSED.** Point radii are scored per point (r 7/8/9 as tabled). Trails are **foreclosed**: points draw no trail — the one glow head is the coil's head point, drawn as a glow sprite at r × 3.2 (promoted from `draw_coil`). |
| §10B.5 | Sheen / glint / arc-glow | **DECIDED (promoted).** Case sheen: crop rect_frac [0.325, 0.115, 0.675, 0.805] at α 0.30 (both Cases). Glass glint: strip width 130 px, profile (1−|x|^1.6), sweep angle 18°. Arc-glow: Gaussian blur 0.35 × width. Link arcs draw in the link gold (228,183,92) — distinct from stream gold by decision: links are connections, streams are flow. |
| §10A.4 | Bust edge treatment | **DECIDED.** The bust's alpha dissolves over its bottom 110 rows with ramp (linear)^1.5 (declared in appendix A-2; the exponent is promoted from `render.py` here). |
| §11A.5 | Band anatomy | **DECIDED (promoted).** Texture crops: bandA [0,0,1920,330] · bandB [0,330,1920,642] · bandC [0,60,1920,330] + horizontal flip. Stamping: step = max(6 px, 0.45 × width); slice width 2.4 × step — the overlap hides the seams at band scale. |
| §11A.6 | Coil anatomy | **DECIDED (promoted from `render.py:coil_points`).** Radial profile r = rx · (0.55 + 0.45 · frac) along the trail; vertical squash 0.42; trail 260°; polyline sample step 4°. The wind widens as it newer-end approaches the head — that widening is the custody spiral's shape, now scored. |
| §13 | Audio joins | **DECIDED (promoted from `assemble_segment.py`).** Splice crossfades 0.010 s; bed-patch loop crossfade 0.30 s; master fade-out 1.0 s cosine. The bed never stops (standing law); these are its only joins. |
| §17A | Verification apparatus | **DECIDED.** The gate set is fixed for the whole film, in order: (1) staging maps, (2) per-scene stills, (3) frame-difference (every 0.5 s; no zero-motion stretch ≥ 2.0 s outside the named holds), (4) movement audit (every rendered motion traced to a score row; three velocities spot-measured ±10%), (5) phone size (390×693), (6) loudness/format re-measurement. The named-holds list = every "decided stillness" row in the three scores' closure tables. Sampling densities are as stated here, not per build. |
| §17A.6 | Estimate flags | **FORECLOSED (by measurement).** L3's missing word-times are NOT an undecided variable: they are foreclosed by a measurement mandate — Whisper-measure `line-L03-default.wav` before render, lock the Cards' arrival to the measured "accumulating," record the anchors in the build's score appendix. The same mandate is extended to L12: the segment's estimated anchors (≈29.45 / ≈30.35) are re-measured when the full build re-anchors the segment block; the halo pulse and Case return land measured, not estimated. |
| §12/§14 | Foreclosures | **FORECLOSED:** SFX layer · ambience beds (narration + bed only, lane law) · mechanical loop seam (an excerpt/film ending on a scored fade has no loop to design) · word-by-word subtitle containers (the rationed-type form forecloses them). |
| §3–§8 | Inherited compartments | **ENTAILED.** Objective, content, script text, delivery and voice are decided upstream in the tree (transcript v3 of record, phase-A7 adoptions, verified takes, gaps record) and entailed by those records; this score set inherits them decided and does not re-open them. |
| §9A.1-A | Type-event set (amendment, 2026-10-28) | **DECIDED — the six-event ration is RETIRED** (owner doctrine from Hadi's #108 verdict: the closing mantra is the prime kinetic-type site; type appears wherever the words carry the story, every appearance fully decided). The film's set is now: F-T1 (L1) · F-T2 NOTHING (L6) · F-T3 HARNESS (L8) · F-T4 TWO PLACES (L9) · **M-T1** OPEN IT / READ IT / CHANGE IT plaques (L18) · **M-T2** UNDERSTAND tiles + F-T5 HARNESS (L19; F-T5 seat restaged into the mantra stack) · F-T6 BUILD (L20; seat restaged) · **M-T3** KEEP AN EYE ON IT plaques (L21; held through the tail — replaces the retired "type leaves"). Every other line carries a FORECLOSED type absence with its reason in the scene type notes. §9A.2's typeface decision extends to all mantra events. |
| §9A.3-A | Word-plaque geometry (amendment, 2026-10-28) | **DECIDED.** Height 76 px; width = the word's measured glyph width at 46 px cap height in the chosen face + 56 px total padding (the measurement is a build step; the rule is the decision); corner radius 0.14 x height; fill NAVY #16233C; outline GOLD #D9A94E, width max(2, height/20) = 4 px; letters CREAM #F1E7CE, glyph height 46 px, centred. Entry: drop 26 px STAMP (easeOutBack 1.2), 0.22 s + squash scaleY .92->1.0 SETTLE 0.08 s; alpha materializes 0.10 s (M11 plaque rule). |
| §17A.6-A | L3 measurement (amendment, 2026-10-28) | **DISCHARGED.** The L3 mandate is executed: faster-whisper "small" measured `line-L03-default.wav` (take duration 4.260 s, matching the A7 record); the per-word anchors are recorded in the L01-L04 score's Word anchors section and the Cards' arrival is locked to the measured "accumulating" (projected 9.416). L3 word-times are DECIDED from measurement. The L12 half of the mandate stands for the build. |
