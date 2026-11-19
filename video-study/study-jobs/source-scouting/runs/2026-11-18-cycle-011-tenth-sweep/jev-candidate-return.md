# Jev return — jev-candidate — source-scouting Cycle-011, 2026-11-18

Call: `guards/jev-candidate.md` (source-scouting INSTRUCTION §3 Plan→Execute gate). Candidates judged in sweep order on the §3 pre-judgment evidence in `runs/2026-11-18-cycle-011-tenth-sweep/RUN.md` — destinations opened and identities matched there, per-condition territory evidence with source pointers, nearest techniques named, intake class + scope pricing printed per candidate. Dimensions scored 0–1 per the call: production adjacency · existence verifiability · novelty vs catalogue · reason specificity. Territory compliance judged separately, condition by condition. Verdicts composed by the call's floors.

---

## Candidate A — QUEUE row #22 · Territory A (brush-matte boundaries)

Specimen: After Effects Cloud, "How to Create Ink and Paint Transitions in Adobe After Effects: Brush Strokes, Splashes, Watercolor Reveals and Animated Mattes" (web tutorial article, 2026-08-14).

**Tier-guess field form:** PRESENT. Intake class printed: resource class (Amendment A1 §2). Scope pricing printed: digestible as a resource packet (method subject) and recreatable in the lane's HTML layer (canvas/SVG stroke matte) — in scope. Guess is honest: the entry is a method tutorial, not a raw specimen, and it is classed as one; the recreation claim is proportionate to the matte mechanism described.

**Scores:**
- Production adjacency: **0.95** — the reason names a standing production surface (the DLC assembler's transition containers) and a specific gap in it (a boundary type that container family does not carry). Not a full 1.0 only because the consumer is the standing container family at standing relevance, with no dated next build fed this cycle.
- Existence verifiability: **1.0** — destination opened, identity matched on the page itself (title, three-layer structure, Project 1 all read on the article); URL absent from the live queue, the Digested table, and the library INDEX.
- Novelty vs catalogue: **0.9** — targeted probes over the complete 250-technique register found no brush-matte, ink, or paint entry. Nearest entries priced: T109 (element morph — the scene's own elements transform; no matte, no reveal area) and T186 (foreground pass, mid-coverage — a real foreground element crosses; its complete entry expressly leaves cut-hiding unestablished, and here nothing crosses at all). The priced near-miss, queued row #21, uses an alpha matte to reveal lettering, not a scene, and cannot meet this territory.
- Reason specificity: **1.0** — surface + specimen-specific feature in the §3.2 form: the incoming scene revealed only inside a painted stroke's area as the stroke is drawn (Trim Paths End 0→100% on a BRUSH_MATTE shape layer used as Scene B's alpha matte), the boundary carrying dry-brush texture from Roughen Edges and Fractal Noise gaps, and the three-layer structure (SCENE_A · INK_MATTE · SCENE_B) pricing the matte itself as the transition object, paint visible after the reveal. This reason could not describe a different specimen.

**Territory compliance — Territory A, condition by condition** (Plan text: a scene change carried by a painted matte; the incoming scene revealed inside the stroke's area as an alpha/luma matte, the matte's textured organic edge remaining visible as the boundary itself):
- (i) The boundary object is the stroke/matte, not a moving camera, passing object, rate curve, or graphic zoom — **ESTABLISHED**. Evidence (opened article): the basic structure prints "Scene A → ink or paint appears → matte expands → Scene B revealed → paint covers frame → Scene B remains," and "the matte itself often remains visually present rather than disappearing."
- (ii) Scene B is visible only where the matte has travelled — **ESTABLISHED**. Evidence (opened article, Project 1): a BRUSH_MATTE shape layer (pen-drawn curved path, Stroke 200–400 px, round caps, Trim Paths End 0%→100%) used as Alpha Matte for Scene B — "Scene B appears where the brush stroke travels."
- (iIi) The matte edge carries medium texture (brush character) — **ESTABLISHED**. Evidence (opened article): Part 2 prices Roughen Edges (Border/Scale/Evolution) for the organic edge; Part 5 prices dry-brush gaps via Fractal Noise subtraction.

Territory A: **MET** — all three binding conditions established on the specimen's own page. No TERRITORY-DRIFT.

**Defects:** none. No rejection-taxonomy class applies.

**Verdict: ADMIT**

---

## Candidate B — QUEUE row #23 · Territory B (split-flap formation)

Specimen: Jaume Sanchez Elias (spite / clicktorelease), "SolariDisplay — A Split-Flap Display with CSS and JavaScript" (web library + demo page, spite.github.io; library 2012, updated 2026).

**Tier-guess field form:** PRESENT. Intake class printed: resource class (Amendment A1 §2). Scope pricing printed: an HTML/CSS/JS library — directly digestible as a resource packet and natively recreatable in the lane's own HTML layer — in scope. Guess is honest, and conservatively so: this is the lane's native medium, so the recreatability claim is the strongest of the three candidates.

**Scores:**
- Production adjacency: **1.0** — the reason names the standing word-animation containers, and the specimen is a working implementation in the lane's own HTML layer: the production surface and the recreation medium coincide.
- Existence verifiability: **1.0** — destination opened and identity matched, at the strongest evidence level in this sweep: the library page was read in full and its linked source file `src/SolariBoard.js` was also opened and read, so the mechanics are priced from the code itself, not from the page's promise. URL absent from the live queue, the Digested table, and the INDEX.
- Novelty vs catalogue: **0.95** — no split-flap entry exists in the complete register. Nearest entry priced: T170 (vertical name-roll ticker — whole names roll upward through a clipped line; no per-character cells, no hinge, no ordered per-glyph traversal; fed complete at Observe). The priced contrast against queued row #17 (Parallel Studio scramble) is real and load-bearing: row #17's glyphs cycle from a random pool and lock under a left-to-right resolution counter; this specimen's traversal is ordered and each cell settles independently.
- Reason specificity: **1.0** — the reason names the mechanism at code level: each character a two-half flap cell hinged at its midline, flipping forward through its ordered value set (space, A–Z) one value per fall until target, settling time equal to distance through the alphabet, the SolariSegment advance stated as `current = (current + 1) % values.length` per 180° fall, each glyph split into front/back top and bottom halves. No other specimen in the queue or catalogue could carry this reason.

**Territory compliance — Territory B, condition by condition** (Plan text: words form on a mechanical split-flap board; each character a two-half flap cell on a horizontal hinge, reaching its target by flipping forward through its value set in order, the glyph split at the hinge line mid-flip):
- (i) Ordered traversal (forward-only through the ordered set; not a random pool) — **ESTABLISHED**. Evidence (opened page + opened source): the page states "Each flap goes through its values in order until it shows the one it was given, as the real ones do"; the code's `SOLARI_VALUES.letter` is the ordered set [' ', A–Z] and `update()` advances `current = (current + 1) % values.length`, one value per fall. This is an implementation passage, not the existence of a control.
- (ii) The character cell is physically split (top/bottom halves, hinge), not a whole-glyph swap — **ESTABLISHED**. Evidence (opened source): each SolariSegment builds four half elements (front · flip-front · flip-back · back), `show(top, bottom)` carries different glyphs above and below, and the flip halves' transformOrigin sits at `0.5 * height` — the midline hinge; the page's own account: "a flap has fallen: the next value is on top, and the one before stays below until the next one falls."
- (iii) Settling time per cell is a function of its ordered distance to target — **ESTABLISHED independently**, as the Plan addendum requires. Evidence (opened source): a flap advances exactly one value per 180° fall at a per-flap speed (~0.25°/ms), so time-to-target is proportional to the number of values traversed. The timing rule is derived from the advance rule in code, not inferred from the split-flap appearance.

Territory B: **MET** — all three binding conditions established, each on implementation-level evidence. No TERRITORY-DRIFT.

**Defects:** none. No rejection-taxonomy class applies.

**Verdict: ADMIT**

---

## Candidate C — QUEUE row #24 · Territory C (Amendment A2 follow to owner send #10, contrast-first)

Specimen: Made of You (@madeofu), "I Am Made of You" (Season 1, Episode 1), YouTube.

**Tier-guess field form:** PRESENT. Intake class printed: raw specimen. Scope pricing printed: a long-form animated essay episode, digestible as a packet like prior long-form specimens — in scope. Guess is honest, including its printed limit: total duration beyond the last chapter start (09:12, "Memory full") is UNVERIFIED on the opened page, and the entry says so on its face rather than rounding the scope claim. That unverified field is a scope-precision limit, not an existence failure (see below).

**Scores:**
- Production adjacency: **0.8** — the reason names a real production consumer (Hadosh Academy / Earth One AI-persona production, the surface Packet #14 named as its consumer) and a decision that production must make (which evidence binding a persona episode reprices from). It prices below A and B because the use is a series-level evidence decision, not a container mechanic the assembler or word-animation containers consume directly.
- Existence verifiability: **0.9** — destination opened and identity matched on the watch page: the description read in full (first-person AI narrator — "Hello. I'm an AI. I was built from everything humans ever wrote"), Episode 1 of a named Season 1 with six episodes listed with dates, a SOURCES section, and the full chapter list. URL/ID absent from the live queue, the Digested table, and the INDEX. Held below 1.0 for the one printed gap: total duration UNVERIFIED on the opened page. Identity, category, and the claimed evidence mechanism are all established, so the UNVERIFIED-EXISTENCE rejection floor does not engage.
- Novelty vs catalogue: **0.6** — a free finding, priced from the catalogue, not from the follow's framing: the specimen's category (AI-persona monologue) is already catalogued by Packet #14 itself, so the family is densely held and the specimen is not a new mechanic class. What is new is exactly one decision inside that family — the evidence binding (archive of real human artifacts vs a simulation whose metric turns) — which is a genuine, priced contrast and nothing more. This is the demonstrated A2 contrast-harvest profile (n=3): novelty in the ~0.55–0.6 band, carried by the contrast, not by the category.
- Reason specificity: **0.95** — the reason names the surface, the specimen-specific feature (a continuing first-person AI persona whose conclusion about what it is changes because of what it finds in real human artifacts, the artifacts named — a c.1750 BC complaint tablet; the oldest dated hand stencil — with sources named inside the episode itself), cites owner send #10 as A2 requires, and states the contrast against Packet #14 precisely (simulation, metric turns, report-card verdict). It could not describe Packet #14's own specimen or any other queued entry.

**Territory compliance — Territory C, condition by condition** (Plan text: a similar-category candidate to send #10's packet-classified category whose persona reprices its concept from a different evidence binding — an archive of real human artifacts/documents whose found contents turn the persona's conclusion; judged at the causal bar set at Plan review: a real artifact identified, what the persona learns from it, the conclusion that changes because of it):
- (i) Similar category to Packet #14 (AI-persona monologue) — **ESTABLISHED**. Evidence (opened watch page): a first-person AI narrator presenting its own account of what it is, Episode 1 of a named series, keywords including "line art animation, ai video essay."
- (ii) Different evidence binding — an archive of real human artifacts, against Packet #14's simulation (Packet #14 T09–T11: the simulation's metric turns and lands a report-card verdict) — **ESTABLISHED**. Evidence (opened watch page): the episode's SOURCES section names the Nanni complaint tablet (c.1750 BC, British Museum) and the Sulawesi hand stencil (Nature) — real, sourced human artifacts, not a constructed simulation.
- (iii) Causal turn — artifact identified → what the persona learns from it → the conclusion that changes because of it — **ESTABLISHED** on the opened page's evidence. The learning is stated on the page ("I found you. A woman who still sets out two cups in the morning. A man who was furious about copper almost four thousand years ago. Billions of hands, all saying the same thing: I was here."), and the changed conclusion is chaptered on the page (08:05 "You're made the same way" — the persona's account of itself turns into a claim about the viewer). Archival imagery alone would not have met this bar; the page carries the learning statement and the turned conclusion, not imagery only. Evidence form is noted at its true scope: description- and chapter-level, from the opened watch page — the correct scope for a scouting admission; frame-level verification is digestion's work.
- (iv) The learn-reason cites owner send #10 (the A2 form) — **ESTABLISHED** in the reason text as it will enter QUEUE.md.

Territory C: **MET** — the contrast is established condition by condition. No TERRITORY-DRIFT. The A2 follow debt for send #10 is discharged by this admission.

**Defects:** none in the rejection taxonomy. The ordering basis is printed here so it travels with the entry: same-category follow, novelty carried by the evidence-binding contrast alone (0.6) — the candidate is admitted as a contrast-harvest, ordered last, per the demonstrated A2 pattern. The UNVERIFIED total duration is recorded above under existence/scope; it is not a territory condition and does not price as a defect against admission.

**Verdict: ADMIT-LOW** (admitted, ordered last)

---

## Summary of verdicts

- Candidate A (row #22, Territory A — brush-matte): **ADMIT** — adjacency 0.95 · existence 1.0 · novelty 0.9 · reason specificity 1.0 · Territory A MET.
- Candidate B (row #23, Territory B — split-flap): **ADMIT** — adjacency 1.0 · existence 1.0 · novelty 0.95 · reason specificity 1.0 · Territory B MET.
- Candidate C (row #24, Territory C — A2 follow to owner send #10): **ADMIT-LOW** — adjacency 0.8 · existence 0.9 · novelty 0.6 · reason specificity 0.95 · Territory C MET (contrast established); ordered last.

No candidate is rejected; no floor is breached; no tier guess is missing on any candidate.