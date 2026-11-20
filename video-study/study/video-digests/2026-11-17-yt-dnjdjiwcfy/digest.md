# Packet #13 — "Fresh Guacamole" by PES

## 1. Specimen identity + technical facts
- **Title:** Fresh Guacamole by PES | Oscar Nominated Short (platform title)
- **Creator:** PES (Adam Pesapane) · **Platform:** YouTube (channel: PES) · **URL:** https://www.youtube.com/watch?v=dNJdJIwCF_Y
- **Uploaded:** 2013-03-07 · **Duration:** 100.894 s · **Format:** 1920×1080 @ 24 fps, VP9 + Opus, 37,333,954 B archived as source.mp4 (probe.json)
- **Displayed counts at capture (post.json, copied not interpreted):** 495,478,875 views · 3,119,792 likes · 80,000 comments. Caption (creator's description) identifies it as the 2013 Academy Award–nominated film and the 2nd in PES's Food Film Trilogy.
- **Speech record:** no platform subtitles or auto-captions exist for this upload; a full-track ASR/VAD census (faster-whisper base, VAD filter) returned **0 speech segments** in 100.894 s (asr-segments.json). The film is music + performed sound effects only.
- **Evidence on disk:** 101-frame 1 fps census (frames/) · 29 evidence frames (ev/) · 7 clips (clips/) · scene census 31 candidate boundaries @0.35 / 83 @0.20 (distinct pts_time; true shot count UNVERIFIED — threshold sensitivity, see §4).

## 2. Consumer + production surface
**Primary consumer: the DLC assembler — transition containers.** This packet's surface is the **substitution-at-action transition**: a hidden (or action-covered) swap in which the object changes identity inside a performed action, and the action itself assigns the new identity. The assembler's transition containers use this packet in their Observe by building FROM §3's mechanism entries — each entry records the visible substitution separately from the inferred edit (before state · after state · spanning action · whether a shot boundary is visible), so a container can be built from the evidence fields rather than from an impression of the trick.
**Secondary consumer: Hadosh Academy explainer production — diagram and word-animation surfaces**, for object-metaphor substitution: an object cast in one role is re-read by the verb performed on it (casting vs literalization, §3 T07/T09), the mechanism an explainer needs when a diagram object must change meaning mid-argument without a cutaway.

## 3. Technique catalogue
_Evidence form (A4 cl.3): a frame binds visual claims; a clip binds sequence/timing claims; the ASR/VAD census binds the speech claim in §1. Frame citations are local-disk evidence (the packet's bulk media does not travel with the synced record)._

### T01 — Bookend title cards (author mark as frame)
- **Timestamps:** 0–4 s (PES card, title card) · 95–100.9 s (end card, PES card)
- **Mechanics:** Black field, single line of green type ("FRESH GUACAMOLE / BY PES"), held in silence (the 0–4.45 s near-silent window) before any object appears; the same card pair closes the film in reverse order. Nothing moves inside the cards — the bookend works by stillness against the dense action it frames.
- **Why it works:** the cards price the film as an authored object before the first gag, and their return at the end converts a sequence of tricks into a signed piece.
- **Evidence:** ev/t001-pes-card.jpg (the opening PES author card) · ev/t002-title-card.jpg (the opening title card) · ev/t093-end-card.jpg (the closing title card) · ev/t099-pes-card-end.jpg (the closing PES author card)

### T02 — Tool-preparation ritual as opening beat
- **Timestamps:** 4–7 s (S1)
- **Mechanics:** Before any ingredient appears, hands draw the chef's knife across a whetstone block in repeated passes, in close-up on the wooden board that will host every later action. The camera, the board, and the light are all established by a real preparatory act, not an establishing shot.
- **Why it works:** the ritual promises competence — everything after it reads as cooking, however absurd the ingredients, because the procedure's grammar was established honestly first.
- **Evidence:** ev/t005-knife-sharpen.jpg (knife mid-pass on the whetstone block)

### T03 — Object casting: grenade as avocado
- **Timestamps:** 7–9 s (S2)
- **Mechanics:** A wooden bowl holds three hand grenades where avocados should sit. A hand selects one exactly as a cook selects fruit — by heft, in the palm. The casting is done by shape (oval, segmented dark-green shell), colour, and context (the bowl, the board, the knife) before any transformation occurs; the grenade is never disguised.
- **Why it works:** the viewer performs the casting themselves from resemblance + context, so the film never has to assert it; the joke and the legibility arrive in the same instant.
- **Evidence:** ev/t008-grenade-bowl.jpg (grenades in the bowl, hand selecting one)

### T04 — Substitution-at-action: the halving that reveals flesh
- **Timestamps:** 9–14 s (S2) · **Clip:** clips/grenade-halving.mp4 (9–16 s)
- **Mechanics:** The knife saws through the grenade's equator in stop-motion steps; as the blade completes the pass, the cut face is no longer metal — it is bright green avocado flesh, with the shell's segmentation now reading as skin. Visible substitution: metal shell + blade pass → green flesh face. Inferred edit: the swap is covered by the blade and the hands; whether it is a frame-step replacement inside a continuous shot or a cut is NOT resolved by the evidence and is not claimed. The spanning action (sawing) is what licenses the change: cutting an avocado in half is exactly when flesh should appear.
- **Why it works:** the transformation lands at the one moment the real procedure predicts a reveal, so the impossible content arrives as the expected event.
- **Evidence:** ev/t012-grenade-halving.jpg (blade through the grenade, green flesh showing at the cut)

### T05 — Nested casting: billiard ball as the pit
- **Timestamps:** 14–17 s (S2)
- **Mechanics:** The two halves twist apart; set in the flesh of one half is a red billiard ball — the avocado's pit, cast by position, roundness, and gloss, one level inside the first casting. The hand lifts it out with the same care as the real gesture.
- **Why it works:** nesting proves the casting rule is recursive — any object in the pit's position becomes the pit — which teaches the viewer the film's grammar faster than any second example at the same level.
- **Evidence:** ev/t015-pit-reveal.jpg (halved grenade-avocado open, red billiard-ball pit seated in the flesh)

### T06 — Cumulative bowl state: the recipe as visible progress
- **Timestamps:** 16–21 s (S2), recurring at every episode boundary
- **Mechanics:** The flesh is spooned from the shell into a stone molcajete that stays on the table for the rest of the film. Every later episode ends with its product deposited into the same bowl, whose contents visibly accumulate (green flesh → + white dice → + red cubes → + green houses). The bowl is the film's progress bar.
- **Why it works:** substitution gags are episodic; the accumulating bowl is what makes them a single procedure with a state, so the ending (mashing this exact mixture) is earned.
- **Evidence:** ev/t018-scoop-molcajete.jpg (flesh being spooned from the shell toward the molcajete) · ev/t015-pit-reveal.jpg (the shell the spoon works from) · ev/t089-accumulated-bowl.jpg (the accumulated bowl state at serving — the mashed mixture still showing its dice, cubes, and houses)

### T07 — Casting by disassembly: the baseball onion
- **Timestamps:** 21–24 s (S3)
- **Mechanics:** A hand takes a worn baseball from its bowl and peels its outer skin away; inside is a clean white baseball — the "onion" revealed by performing peeling, the onion's own defining action, on an object whose layered construction (cover over core) makes the action physically plausible.
- **Why it works:** where T03 casts by appearance, T07 casts by structure: the object earns its role because the procedure can actually be performed on it.
- **Evidence:** ev/t022-baseball-peel.jpg (baseball skin peeled back, white core in hand)

### T08 — Slice integrity: cuts that hold together
- **Timestamps:** 24–29 s (S3)
- **Mechanics:** The white baseball is set on the board and sliced; the slices separate slightly but hold their arrangement, their red stitching now reading as onion-ring patterning. The knife work is ordinary; the reading is done by the stitching's geometry.
- **Why it works:** a restraint beat — not every action transforms; holding the object stable here makes the next beat's transformation legible by contrast.
- **Evidence:** ev/t027-baseball-slice.jpg (knife through the baseball on the board, slices forming)

### T09 — Verb literalization: dicing produces dice
- **Timestamps:** 29–36 s (S3) · **Clip:** clips/baseball-dicing.mp4 (28–36 s)
- **Mechanics:** The slices are gathered and — at the moment the knife begins to dice them — they are a small stack of white dice. Successive chops multiply the dice: each pass lands more, smaller dice, until the board carries a pile of tiny dice, which the hands gather like chopped onion. Two mechanisms are coded separately (P-A4): the initial CASTING (baseball as onion, T07–T08) and the LITERALIZATION — the verb "to dice" made visible as its homonym. The multiplication is an intra-shot change: visible object-state changes with no shot boundary claimed.
- **Why it works:** the pun is executed as procedure, not caption — the viewer watches the word happen, which is why it survives translation to any language.
- **Evidence:** ev/t032-dice-stack.jpg (the slices landed as a stack of dice under the knife) · ev/t035-tiny-dice.jpg (the multiplied pile of tiny dice on the board) · ev/t038-dice-sprinkle.jpg (the tiny dice sprinkled into the molcajete over the green flesh)

### T10 — Tool transformation: pincushion tomato through the grid press
- **Timestamps:** 39–46 s (S4) · **Clip:** clips/pincushion-grid.mp4 (41–46 s)
- **Mechanics:** A tomato-red pincushion is de-pinned (its pins read as the tomato's stem-points), set into a grid cutter, and pressed through; what emerges is a slab of translucent red cubes — diced tomato — gathered by hand and added to the molcajete. The transformation is performed by a real kitchen tool doing its real job; the substitution rides inside the press's occlusion.
- **Why it works:** the tool's function is the argument — a grid cutter can only output cubes, so the output's identity is forced by the instrument, not by the object's resemblance.
- **Evidence:** ev/t041-pincushion-tomato.jpg (pincushion in hand, pins visible) · ev/t044-grid-press.jpg (the grid cutter pressing the pincushion)

### T11 — Halving reveal + press: the golf-ball lime
- **Timestamps:** 46–54 s (S5) · **Clip:** clips/golf-lime-press.mp4 (48–54 s)
- **Mechanics:** A green golf ball rolls onto the board and is stopped by a palm (its dimples read as lime peel at this scale and colour). Halved, its cut face is a lime's cross-section — segments and pith drawn by the reveal. One half goes into a metal citrus press and is squeezed over the molcajete; the press's handles and leverage are the real tool's.
- **Why it works:** two reveals are chained — the halving proves the casting, the pressing spends it — so the episode teaches that a cast object must survive being used, not just being seen.
- **Evidence:** ev/t047-golf-ball-lime.jpg (green golf ball on the board) · ev/t050-lime-half.jpg (the halved ball showing the lime cross-section) · ev/t052-citrus-press.jpg (the half seated in the citrus press)

### T12 — Source-shot casting: the jalapeño tree
- **Timestamps:** 54–57 s (S6)
- **Mechanics:** The film's only location change: a potted plant against a wall bears green Christmas-light bulbs as its fruit. A hand picks one bulb exactly as one picks a pepper — the casting is completed by the plant, the picking gesture, and the bulb's pepper silhouette (elongated, glossy green, stemmed by its screw base).
- **Why it works:** moving the casting into the object's "habitat" extends the grammar from the board to the world; the recipe's supply chain is as invented as its ingredients.
- **Evidence:** ev/t055-bulb-tree.jpg (hand picking a green bulb from the plant)

### T13 — De-seeding + chop-to-houses
- **Timestamps:** 57–67 s (S6) · **Clip:** clips/bulb-chop-houses.mp4 (58–67 s)
- **Mechanics:** On the board, the bulb is opened and its filament assembly is picked out — the pepper's seeds, removed with the pepper gesture. Chopping follows; the pieces accumulate not as pepper dice but as a neat pile of green Monopoly houses, which the hand gathers and adds to the bowl. As in T09 the landing identity is assigned by the action's product-shape: chopped pieces are house-shaped because the pieces are houses.
- **Why it works:** the de-seeding beat sells the pepper reading at maximum literalness (a filament is not seed-like at all — the gesture alone carries it) immediately before the chop replaces the object again, so the viewer feels the grammar flex twice in ten seconds.
- **Evidence:** ev/t059-bulb-open.jpg (opened bulb, filament exposed) · ev/t064-bulb-filament.jpg (the filament "seeds" being picked out of the opened bulb) · ev/t067-houses-pile.jpg (the chopped pieces landed as a pile of green Monopoly houses under the knife)

### T14 — Seasoning by grinding: chess pawns as salt and pepper
- **Timestamps:** 67–75 s (S7)
- **Mechanics:** A white pawn and a black pawn are held over the molcajete and twisted against each other / ground down over the mixture — the pepper-mill gesture performed with the two most grindable-shaped, colour-coded objects in the house. No visible product falls; the seasoning is asserted by gesture and colour pairing alone (white = salt, black = pepper).
- **Why it works:** the film's most economical casting — pure gesture + colour, zero resemblance of substance — placed late, when the viewer's fluency in the grammar makes it sufficient.
- **Evidence:** ev/t073-chess-grind.jpg (pawns being ground over the molcajete)

### T15 — Identity collapse: the pestle mash
- **Timestamps:** 75–81 s (S7) · **Clip:** clips/pestle-mash.mp4 (75–81 s)
- **Mechanics:** The pestle works the molcajete in repeated strokes; across them, the discrete objects (dice, cubes, houses, green flesh) progressively lose their identities and merge into a uniform green paste — real guacamole texture, flecked with the objects' colours. Stop-motion carries the collapse in visible increments: each stroke, fewer readable objects.
- **Why it works:** the mash is the grammar's payoff and its proof — every casting is spent at once, and the mixture's plausibility as food is the film's final claim that the procedure was real all along.
- **Evidence:** ev/t078-pestle-mash.jpg (pestle mid-stroke, mixture collapsing into paste)

### T16 — Serving substitution: poker-chip tortilla chips + the dip
- **Timestamps:** 82–94 s (S8) · **Clip:** clips/chip-dip.mp4 (89–95 s)
- **Mechanics:** A serape is unrolled (the film's second location-scale change, done as a table dressing), the bowl is plated, and poker chips are scattered around it as tortilla chips — cast by shape, stacking behaviour, and table context. A hand dips one chip into the guacamole; the chip breaks under the dip, exactly as a chip does, and the payoff lands.
- **Why it works:** the substitution grammar survives the move from preparation to eating — the viewer is finally cast as a participant, and the break is the one physical failure the film allows, which certifies all the successes before it.
- **Evidence:** ev/t084-plating-chips.jpg (plated bowl with poker chips scattered as tortilla chips) · ev/t088-chip-dip.jpg (poker chips scattered over the plate by the handful) · ev/t092-chip-dip.jpg (a poker chip dipping into the guacamole)

## 4. Tempo map
Segmentation is by ingredient episode (procedural sections; boundary cues and census mapping in production-record.md). Performed-action beats are counted from the 1 fps census (production record's enumeration; an intra-shot change = a visible object-state change with no shot boundary).
| Section | Span | Length | Beats | Beats/s | Character |
|---|---|---|---|---|---|
| S1 Titles + mise en place | 0–7 s | 7 s | 3 | 0.43 | stillness, then the sharpening ritual |
| S2 Avocado (grenade) | 7–21 s | 14 s | 6 | 0.43 | the grammar's slow, careful teaching episode |
| S3 Onion (baseball→dice) | 21–39 s | 18 s | 8 | 0.44 | longest episode; acceleration is INTRA-episode — chop cadence tightens as the dice multiply |
| S4 Tomato (pincushion) | 39–46 s | 7 s | 6 | 0.86 | first fast episode — one tool, one press, done |
| S5 Lime (golf ball) | 46–54 s | 8 s | 5 | 0.63 | roll-in entrance, two chained reveals |
| S6 Jalapeño (bulb→houses) | 54–67 s | 13 s | 7 | 0.54 | location change resets pace; de-seed slows, chop re-accelerates |
| S7 Season + mash | 67–80 s | 13 s | 6 | 0.46 | grinding slows; the mash's strokes are the section's pulse |
| S8 Plating + payoff | 80–100.9 s | 20.9 s | 6 | 0.29 | deliberate stall — serving, the dip at ~92 s, then the closing cards from ~95 s |
**Pacing curve:** episode lengths do NOT monotonically shrink (7·14·18·7·8·13·13·20.9 s) — the Observe hypothesis of preparation-wide acceleration is **withdrawn** on this evidence. What accelerates is local: chop cadence inside S3/S6 and the S4 press episode's compression (0.86 beats/s, the film's peak). The sound track prices the same shape: near-silent gaps of 1.2–1.6 s separate early action sounds, while RMS accents cluster at the transformation moments (26.25 · 34–35.5 · 43.25 · 51.25 · 66–67 s). Scene-detection totals (31 @0.35 · 83 @0.20) are threshold-sensitive on stop-motion and are printed as candidate counts only; the true shot count is UNVERIFIED.

## 5. Goods and bads
### Goods
- **G1 (7–14 s):** The first casting is taught slowly and completely — selection, halving, reveal — before any faster episode spends the viewer's fluency.
- **G2 (29–36 s):** The dicing literalization (T09) is a wordless pun executed as pure procedure; it needs no caption in any language.
- **G3 (16–21 s, recurring):** The molcajete's accumulating contents (T06) give a sequence of gags a single visible state — the recipe is never in doubt.
- **G4 (41–46 s):** The grid press (T10) lets a real tool force the transformation; instrument-forced identity is more convincing than resemblance alone.
- **G5 (75–81 s):** The mash (T15) spends every casting at once and converts the trick into food — the payoff is procedural, not a final gag.
- **G6 (89–94 s):** The chip break in the dip (T16) is the film's one allowed physical failure, and it certifies the physical honesty of everything before it.
### Bads
- **B1 (95–100.9 s):** The end cards hold the final ~6 s of the 100.9 s runtime in bookend stillness, and the closing PES card repeats information the opening already gave.
- **B2 (67–75 s):** The pawn seasoning (T14) asserts its product by gesture alone — nothing visibly falls — the one casting the film does not evidence; a first-time viewer can miss that seasoning happened at all.
- **B3 (54–57 s):** The tree shot (T12) is the only flatly lit, grey-wall composition in a warm wooden film; the location change reads as a different production for its first second.
- **B4 (24–29 s):** The slicing beat (T08) is the longest stretch with no transformation (≈5 s); priced as restraint in §3, it is also where the film's pulse sags before the dice payoff.
- **B5 (39–41 s):** The de-pinning of the pincushion is fumbled in small hand movements at the edge of legibility — the pins' removal, which carries the tomato reading, is the least readable action in the film at normal speed.
- **B6 (0–4 s):** The opening holds two cards (PES, then title) before the sharpening ritual — four seconds of black before the film's world appears is a slow door for a 101 s piece.

## 6. Lessons mapped to our containers
| # | Lesson | Class | Container | Change it implies | Cost |
|---|---|---|---|---|---|
| L1 | Substitution-at-action: swap the object inside a performed action whose real outcome predicts the reveal; record before/after/spanning action/boundary-visibility as separate evidence fields | technique | transition | Add a substitution transition type to the assembler: action spans the swap; the incoming object's identity is the action's expected product | moderate — needs before/after asset pairs per use, but the container logic is one rule |
| L2 | Object casting by shape + colour + context, asserted by handling (selecting, hefting), never by label | technique | transition · diagram | Diagram objects may be cast by resemblance and used in role without an explanatory caption | cheap — a casting rule, not new machinery |
| L3 | Verb literalization: when the spoken verb has a concrete homonym or product-shape, the visual can land as that product (dicing → dice) | trick | word animation | Word-animation containers gain a literalization beat: the word's action produces its literal object on its onset | moderate — per-word asset, but the beat structure is reusable |
| L4 | Casting and literalization are separate mechanisms and must be planned separately: an object is first cast in a role, then an action may re-read it | trick | transition · word animation | Transition plans carry two fields (cast-as · re-read-as) instead of one "transformation" note | cheap — a plan-field change |
| L5 | Material honesty: the transformation is convincing where the object's real structure permits the action (baseball's layered cover peels; the press forces cubes) | texture | diagram · transition | Choose cast objects whose construction survives the performed action; texture is evidence, not decoration | cheap — a selection criterion at asset choice |
| L6 | A persistent accumulating state object (the molcajete) turns episodic beats into one procedure with progress | storytelling pattern | opening · diagram · ending | Explainer containers carry a visible state that each section deposits into, so sections accumulate instead of replacing | moderate — one persistent element per piece, designed once |
| L7 | The full procedure is the story: ingredient list → preparation → dish → serving needs no narration when each step's gesture is the real gesture | storytelling pattern | opening · ending | A wordless procedural arc is a lawful explainer skeleton for process topics | cheap — an arc template |
| L8 | Tool preparation as the opening beat establishes the procedure's grammar and the performer's competence before any content | pacing principle | opening | Openings may spend their first beat on an honest preparatory act instead of a hook graphic | cheap — one beat, reused |
| L9 | Acceleration is local, not global: tighten cadence inside the action episode (chops multiply faster); do not promise a whole-piece speed-up the episode lengths contradict | pacing principle | transition · diagram | Tempo maps price per-episode beat rates; a pacing claim must name its episode | cheap — a measurement rule |
| L10 | One allowed physical failure (the chip break) certifies the physical honesty of the successes around it | trick | ending | A payoff may include one genuine failure beat to price the rest as real | cheap — one beat |
| L11 | Gesture + colour alone can carry a casting late in a piece, once the audience is fluent (pawns as salt/pepper) — and it is the weakest form, to be spent sparingly | technique | word animation · diagram | Late-piece castings may drop resemblance, but the packet prices this as the failure-prone form (see B2) | cheap — a rule with its warning attached |
| L12 | Transcript device: ABSENT — priced, with ground: the specimen carries no narration, no captions, and a 0-segment VAD census; its ordering device is the recipe procedure itself, which is filed under storytelling (L7), not as a transcript device | transcript device | — | No container change; the absence is the finding — a procedure can replace a transcript where the performed order is self-evident | cheap — an absence recorded, per A4 cl.1 |

## 7. Idea bank
- A DLC transition where a word is "diced" by the knife of the next section break and lands as its component letters (stands on T09).
- An explainer opening that sharpens its tool — cursor, pen, prompt — before the first claim (stands on T02).
- A diagram whose central bowl accumulates each section's product until the final mash produces the conclusion (stands on T06 + T15).
- A vocabulary short where each word is cast as a household object and re-read by the verb performed on it (stands on T03 + T07).
- A counting piece where the counted objects multiply under the counting action itself (stands on T09's multiplication).
- An ending where the finished diagram is "served" and one element genuinely breaks (stands on T16 + L10).
- A transition catalogue entry pairing substitution-at-action against Packet #5's cut-on-action demo, same action, two mechanisms (stands on T04 vs Packet #5).

## 8. Reception link
Reception: not yet run — charged to reception-analysis. (Displayed counts stand in §1 as raw material, copied from post.json, not interpreted here.)
