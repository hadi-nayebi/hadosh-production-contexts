# 3.2 Quadrillion Tokens — Claude cut · Director's plan (r3)

## r3: the plan now lives in the JSON and assets

The shot list below (r2) is still the creative source. As of r3, every decision in it is written into the film's own files:
- `units/*/unit.json`: scenes, nodes, times, positions, tracks, easing, camera, swarm and flow parameters, audio placement and ducking.
- `units/*/assets/copy.json`: every on-screen string.
- `units/*/assets/audio-spec.json`: notes, chords, tempo and every effect event.
- `units/*/assets/svg/*.svg`: every designed object.
- `ASSETS.md`: the images requested from ChatGPT.

The rules for these files are in `CONTRACT.md` and `schema/film.schema.json`, checked by `tools/validate.mjs`.

**Changes from r2, made while writing the JSON:**
- **Timing re-anchored** on the delivered re-takes (L01, L04, L07, L20, L22, L23). Unit lengths are now U1 41.4 s, U2 49.4 s, U3 37.4 s, U4 23.6 s, total 151.8 s. Cue tables in each unit list the line and phrase times; word-level cues marked "estimated" are confirmed by listening.
- **Cold open (1.1–1.3):** per Codex's review, one agent message at a time at the center of the frame, each matched to the clause you hear, parked aside when the dial moves on. The 60 micro-lines and edge ribbons supply the swarm.
- **Unit 2:** all devices sit above the bus (the design has one port, on the device bottom). Search answers appear as cards below the bus.
- **Unit 2 globe:** the land map comes from ChatGPT (A5), with a coarse fallback mask drawn by Claude in the branch.
- **Fallbacks are assets,** never drawing code in the compiler.

**Decisions recorded before building:** about 10,500 values in JSON, plus 36 SVG designs and five specified image requests.

**What remains open (expected under 15%):**
- How the compiler's generic renderers look in detail: chalk grain, glow falloff, grain shape. Their parameters are fixed in the JSON; the algorithms get approved through style frames.
- The timbre recipes in `tools/make_audio.py`. The notes and events are fixed in the audio specs.
- The look of the five ChatGPT images, which is set by the prompts and acceptance criteria.

Anything new found during the build is added to the JSON first.

---


Status: for Hadi's review. Nothing in r2 gets built until this plan is approved. Every visual, timing, motion and sound decision is made here. If something isn't in this plan, it doesn't go in the film. If implementation shows something here won't work, I change the plan first, then build.

---

## 0. The film in one paragraph

A token is the smallest unit of language a machine reads or writes. This film turns that abstraction into a character: a single point of light, and the swarm it belongs to. We follow it through four worlds.

1. **Unit 1** shows how much: so many tokens that all human writing is a tenth of one month.
2. **Unit 2** shows what they do: tokens flow like current and do work, the way electrons do, until civilization runs on them.
3. **Unit 3** shows where it began: a desk, a paper, a sentence with a blank.
4. **Unit 4** shows where we go next: a blackboard and the plan for the series.

The point of light changes material in each world (light, current, sand and ink, chalk), but it is always the same character, and the camera never loses it.

## 1. The protagonist: the token

| Property | Decision | Why |
|---|---|---|
| Form | A round point: a 1.3 u core (u = artboard unit; 1000 u = frame width) with a soft halo of 3.5 u at 25% opacity. | One shape everywhere, so the eye learns "dot = token." |
| Motion signature | It stretches along its velocity. The tail is a line from the position back along the velocity, length = speed × 0.018 s, max 9 u, fading to 0. It never moves on a straight tween. Every move is either steered (it has a velocity and turns toward goals) or follows a path with ease-in-out. | Living, not slid. |
| At rest | It breathes: a micro-orbit of 0.6 u radius, period 2–3 s, random phase. It is never perfectly still. | A character, not a pixel. |
| Social behavior | In groups it flocks. Separation radius 6 u, alignment radius 14 u, cohesion radius 24 u, plus a curl-noise current. No group ever takes a geometric outline (ellipse, rectangle) unless the story gives a reason (a ring = a month; a cluster = a measured amount). | You asked whether birds fly in an ellipse. They don't. |
| Arriving | It arrives with a spring. Max speed 520 u/s, slowing radius 40 u, critically under-damped (k = 60, damping = 9), so it overshoots slightly and settles in about 0.5 s. | Purposeful. |
| Color = origin | **Machine tokens**: cool spectrum, randomly per token: cyan #5FD4FF, teal #3EE6C1, blue #5B8CFF, violet #A78BFA. **Human-written tokens**: warm: cream #F3E6C8, amber #FFB547. A warm token that passes through processing gains a 0.6 u cyan rim. It stays warm, because it is the same words, processed again. | Color carries the story of "the same words again and again." |
| Blending | Additive ("lighter") on dark worlds (Units 1–2). Normal blending with shadows on the desk (Unit 3). Chalk-grain texture on the board (Unit 4). | Material changes with the world. |

**The hero token.** One token is the hero: core 1.8× size, white core, cyan halo. It is born as the period at the end of the first agent sentence. Its arc:

- **Unit 1:** it becomes the decimal point in "3.2", then leads the swarm out of Unit 1.
- **Unit 2:** it leads the current down the wire. It is the last moving thing at "Think about it." It becomes the city light the camera dives into.
- **Unit 3:** it falls and lands on the desk as a grain of sand. It becomes the dot of the question mark, then the light in the next-word blank, then the core of the Transformer.
- **Unit 4:** it becomes the chalk dot that starts every stroke, and finally the decimal point in the closing title "3.2 Quadrillion Tokens."

The film starts and ends on the same point.

## 2. Film-wide rules

- **No static frames.** Every second has something moving with purpose: the swarm, the camera, or type. There are two exceptions, both written into the plan: 1.12 ("Let me say that again") and 2.13 ("Think about it"). These two are the film's only stillnesses, and that's why they land.
- **Camera.** Each unit is one continuous take with no cuts. Moves are eased in-out (smootherstep). Zoom changes are exponential when they cross more than 3× (infinity zooms).
- **On-screen words.** Only numbers, names and the key phrase of a line, appearing on the spoken word. No sentence duplicates the narration. Minimum text size 11 u (21 px at 1080p). Text stays at least 40 u from frame edges.
- **Type system.** Unit 1: Inter Display / Inter. Unit 2: DejaVu Sans Mono for machine input and output, Inter for labels. Unit 3: Crimson Text (the paper), Anonymous Pro (typewriter tiles). Unit 4: Montserrat Light as chalk. All are SIL OFL or free licenses, bundled in the branch.
- **Kinetic type.** Text reveals word by word: rise of 0.45 × size, blur 4 → 0, 0.55 s per word, 0.06 s stagger, unless a shot says otherwise.
- **Transitions.** Units hand off through the hero token in motion, never a fade or a cut.
- **Sound.** Narration on top. The music bed sits at least 20 dB under speech. Every on-screen event that has weight gets a synthesized sound, listed per shot.

## 3. Timeline and narration placement

All times are film seconds. Within a line, cue times come from the master WAV's silence map; lines with new takes get re-anchored when the takes arrive.

| Unit | Span | Lines (film start → end) |
|---|---|---|
| 1 · The scale | 0.0–44.0 | cold open 0.0–6.4 · L01 6.50–9.35 · L02 9.63–13.21 · L03 13.49–18.24 · L04 18.52–26.02 · L05 26.30–29.50 · L06 29.78–31.60 · L07 31.88–41.68 |
| 2 · Tokens at work | 44.0–95.0 | L08 44.60–49.72 · L09 50.30–53.51 · L10 53.90–57.50 · L11 57.90–60.73 · L12 61.10–64.31 · L13 64.70–68.20 · L14 69.00–76.46 · L15 77.00–81.76 · L16 82.60–83.87 · L17 85.00–92.49 |
| 3 · What set this in motion? | 95.0–138.0 | L18 95.80–103.29 · L19 103.80–110.49 · L20 111.00–116.25 · L21 116.80–121.17 · L22 121.70–128.77 · L23 129.40–136.09 |
| 4 · Words to work | 138.0–162.0 | L24 139.00–147.64 · L25 148.20–158.76 · end card 158.8–162.0 |

Word cues used below (film s):
- **L01:** "3.2 quadrillion" 6.54–7.98 · "tokens processed every month" 8.30–9.12
- **L02:** "And that is Google alone" 9.76–11.24 · "by Google's own count" 11.64–13.08
- **L03:** 13.54–18.04 ("more than 300 times" ≈ 15.9)
- **L04:** "To understand the scale" 18.98–20.10 · "consider this" 20.44–21.04 · rest 21.42–25.90 ("300 trillion tokens" ≈ 24.6)
- **L05:** 26.36–29.26 ("a tenth" ≈ 27.4)
- **L06:** 29.88–31.32
- **L07:** "Every month … people" 32.12–38.78 · "the same words, passing through again and again" 38.98–41.52
- **L08:** "And here is what it does" 44.62–46.08 · "every token of it goes to work" 46.96–49.14
- **L10:** "A voice becomes text" 54.09–55.37 · "a long document, a summary" 55.57–57.27
- **L14:** "If the electron stream…energy" 69.08–72.34 · "the token stream…intelligence" 72.76–76.36
- **L17:** "If industrialization…physical power" 85.01–88.11 · "this could be the start…cognitive power" 88.47–92.27
- **L18:** "What set this in motion?" 96.26–97.46 · "The trail leads back to a paper from 2017" 98.12–101.20 · "Attention Is All You Need" 101.52–103.00
- **L19:** "By then, building AI models" 103.83–105.79 · "that could understand…holy grail" 106.03–110.21
- **L23:** "The Transformer was born" 129.74–131.44 · rest 131.94–135.80
- **L24:** "In this series" 139.01–140.25 · "we will learn how one ability grew into another" 140.61–143.01 · "how predicting…doing jobs" 143.77–147.53
- **L25:** "We will trace how it matured" 148.77–150.43 · "from 2017 to today" 150.71–152.79 · "and build an intuitive understanding of it" 153.35–155.47 · "how to use it, and how to live through it" 156.01–158.39

---

## 4. Unit 1 · The scale (0.0–44.0)

**What this unit says.** 3.2 quadrillion is not a number anyone can feel. So we give it a body (a swarm) and then measure that body against everything humans have ever published.

**World: "the data dark."** A radial gradient from #071426 at the center to #02060D at the edges. A faint haze glows under dense swarm regions: radius 60 u, 6% cyan, following the density. No stars, no grid, no floor.

**Depth.** Each token is in one of three depth bands, randomly: near (size ×1.5, alpha .55, parallax 1.25), mid (×1, alpha .9, parallax 1), far (×.6, alpha .5, parallax .8).

**Cast.** 3,200 machine tokens (cool), 320 human tokens (warm; exactly one tenth, so the comparison in 1.11 is literal), and the hero.

| # | Film s | Narration | What we see (every element, position, motion) | Camera | Sound |
|---|---|---|---|---|---|
| 1.1 | 0.0–2.2 | (agent voice A1 under radio static) | Black. One terminal line types at (300, 281), DejaVu Mono 15 u, cyan, 38 chars/s: "> Forty-page contract read. Here's the summary." The cursor blinks twice after the line ends. | Starts at zoom 2.6 on (360, 281), drifting right at 6 u/s. | Static fades in from silence over 0.4 s. A1 voice at -8 dB under it. |
| 1.2 | 2.2–4.6 | (A2–A4 voices, dial sweeping) | The pull-back reveals A2 at (560, 120), A3 at (140, 430) and A4 at (560, 450), each typing as the camera passes. Also 60 micro-lines (Mono 6 u, cool colors, 35% alpha) type at once across a jittered 6×10 grid covering the frame. Each is a different real agent task, e.g. "> booked 3 flights", "> fixed failing test", "> translated menu to Thai", "> reconciled March invoices" (list of 60 in the unit JSON). Thousands of agents, each writing. | Zoom 2.6 → 1.0 over 2.4 s (exponential, ease in-out), center moving (360, 281) → (500, 281). | The radio dial sweeps. Each agent voice swells for about 0.6 s as its line crosses the frame center. |
| 1.3 | 3.2–6.4 | — | **Words become tokens.** 0.9 s after a character is typed, its glyph breaks into 2–4 tokens sampled from its pixels. Each token keeps the line's color and gets an outward velocity of 20–40 u/s. The character disappears as its tokens leave, so lines dissolve in reading order. The tokens join the flock right away. A moving attractor traces a figure-eight centered (500, 281), amplitude (260, 110), period 5 s, so the swarm folds and turns as one body twice: a murmuration. From 4.0 s, six ribbons of tokens stream in from beyond the frame (left, right, top-left, top-right, bottom-left, bottom-right): the agents we can't see. The total reaches 3,200 by 6.4. At 3.4 the period of A1 becomes the hero (white core) and flies at the front of the flock. | Holds at zoom 1.0. A slight follow of the swarm's centroid (20% weight). | Static thins out. A swarm "air" sound: noise band-passed at 600–3,000 Hz, gain following the swarm's mean speed. Radio "lock" click at 6.15. |
| 1.4 | 6.4–8.3 | "3.2 quadrillion" | The attractor stops. Every token gets a target pixel in the glyphs of "3.2 quadrillion" (Inter Display 112 u, centered (500, 245)). Targets are assigned by angle around the swarm centroid, so tokens sweep in like a spiral rather than crossing. Each target's start is delayed by its x position (0 → 0.6 s, left to right), so the swarm writes the number in reading order, in time with the voice. **The hero lands as the decimal point.** Tokens arrive with the spring and settle by 8.0. | Push in, zoom 1.0 → 1.06. | Air sound swells and resolves into a soft chord bloom at 7.9 (music enters). |
| 1.5 | 8.3–9.6 | "tokens processed every month" | "tokens" (Inter Display 40 u, #EEF4FF) rises in at (500, 333) on the word. "processed every month" (Inter 18 u, #8592AA) follows at (500, 368) at 8.75. The number stays alive: each token's brightness rides a wave traveling left → right along the glyphs (period 1.6 s, ±25%), showing the tokens being processed. | Holds. | Music bed. |
| 1.6 | 9.6–13.3 | "And that is Google alone, by Google's own count" | "Google alone · by Google's own count" (Inter 15 u, amber) reveals word by word at (500, 398) from 9.76. **The month becomes visible:** a thin dial (radius 230 u around (500, 290), 1 u stroke, 30% white) draws clockwise from 12 o'clock over 9.8–13.0, with 30 day ticks. The dial's tip carries a bright head, and as it passes over the number, the tokens beneath flare: one month passing over the work. | Push in continues to 1.10. | Faint tick for every 5th day (6 ticks, -30 dB). |
| 1.7 | 13.3–14.2 | L03 begins | Targets release in reverse reading order. The tokens pour out of the glyphs into the dial's lane (orbiting at r 230 ± 18 u, angular speed 1.2 rad/s), becoming a glowing ring: the month made of tokens. "tokens", "every month" and the Google line fade 13.3–13.8. | Zoom back to 0.95. | Whoosh as the ring forms. |
| 1.8 | 14.2–18.3 | "Its monthly processing grew by more than 300 times in two years." | The ring splits in two. **2024 ring:** center (230, 300), radius 46 u, exactly 11 tokens (1/300 of 3,200). It orbits sparse and lonely, labeled "2024" (Inter 14 u, dim) below it. **2026 ring:** center (660, 290), a dense band from r 140 to 200, with the other 3,189 tokens, labeled "2026". An arc arrow draws from the small ring to the large one (15.6–16.4) with "2 years" (Inter 12 u) at its apex. Beside the 2026 ring at (880, 170), a counter rolls "×1 → ×300" (Inter Display 54 u, amber, ease-out over 1.2 s, starting on "more than 300 times" ≈ 15.9). | Dolly to the small ring first (14.2–15.4: center → (300, 300), zoom 1.25). Then a whip-pan right on "more than 300" (15.6–16.2: center → (640, 285), zoom 0.95). | Two low thumps: the small ring forming at 14.6, and the big ring's mass arriving at 16.0. Rising tone under the counter. |
| 1.9 | 18.3–21.4 | "To understand the scale, consider this:" | The 2026 ring condenses into one dense, breathing swarm-sphere (cohesion target radius 150 u) and drifts to (300, 290). The 2024 ring flows into it. Label "Google · one month" (Inter Display 20 u, cyan) under it at (300, 470). The right half of the frame empties for human writing. | Pull back to zoom 0.9, center (500, 285). | Music opens up. |
| 1.10 | 21.4–26.0 | "the usable public text written by people is estimated at 300 trillion tokens" | **Human writing appears on the right, as real writing, not icons.** Six fragments, each in a different human medium, write themselves in warm cream ink within the region centered (740, 280): a handwritten-style line in Crimson Text italic (21.6), a newspaper column block with a headline (22.2), a book spread of serif lines (22.8), a web paragraph with a link underline (23.4), a typed letter in Anonymous Pro (24.0), and a poem stanza (24.6). Each fragment is short, original text, written in the JSON. On "300 trillion tokens" (≈ 24.6) all the writing lifts off its baselines: the glyph pixels become warm tokens, exactly 320, which gather into a warm cluster (radius 48 u) at (760, 290). Label "≈ 300 trillion tokens" (Inter Display 22 u, cream) at (760, 405), and "all usable public text written by people (est.)" (Inter 12 u, dim) below. | Holds, with a slight drift right (+15 u). | Six soft pen-scratch sounds (synthesized), then a warm shimmer as the writing lifts. |
| 1.11 | 26.3–29.6 | "That's about a tenth of Google's monthly volume." | The cool sphere divides into ten clusters of 320 tokens each, the same size as the warm cluster (radius 48 u), arranged 5 × 2 at x 100–500 (step 100), y 230 and 350. Ten equal cool clusters against one warm one. A small count (Inter 10 u, dim) appears under each cool cluster in sequence, "1" … "10", 26.8–28.6. "≈ 1/10" (Inter Display 56 u, cream) rises in at (500, 110) on "a tenth". | Holds. | A soft tick per count. |
| 1.12 | 29.8–31.6 | "Let me say that again." | **Stillness by design.** All eleven clusters breathe together (radius × 1.08, period 1.6 s). Nothing else moves. | Locked. | Music thins to a single note. |
| 1.13 | 31.9–38.8 | "Every month, Google alone processes more than ten times that whole estimate." | The dial returns: radius 210 u around (500, 290), with day ticks. Cool clusters unspool into the dial's outer lane (r 220). The warm cluster unspools into the inner lane (r 180) and laps the dial **ten times** between 32.6 and 38.6 (about 0.6 s per lap, accelerating gently). At 12 o'clock sits a processing gate, a short bright arc. Each warm token gets a cyan rim as it passes the gate, and its glow flares. A lap counter at the dial center ticks "×1" … "×10" (Inter Display 64 u, amber), one per lap. At ×10 it becomes "more than 10×". "≈ 1/10" flips out at 32.0. | Slow rotation of the frame (0 → 2°) for vertigo. Zoom 1.0. | A gate "tick" on each lap (ten ticks, rising pitch). |
| 1.14 | 38.8–41.7 | "the same words, passing through again and again" | Close on the gate. Individual warm tokens stream through it, and as each one passes, the word it carries flashes above it in cream (Inter 12 u): "the", "same", "words", "again", "and", "again". The words repeat. | Push to zoom 2.2 on the gate at (500, 80). | Ticks continue, softer. |
| 1.15 | 41.7–44.0 | — | The hero breaks out of the dial at the gate and flies right. The whole swarm follows into a tight beam converging on the line y = 281, heading off-screen right. | Whip right after the hero (center x → 1,400 over 2.3 s, zoom 2.2 → 1.0). Motion streaks long. | A rising whoosh into Unit 2's hum. |

---

## 5. Unit 2 · Tokens at work (44.0–95.0)

**What this unit says.** Tokens aren't stored; they flow and do work, the way current flows through a circuit and does work. Every example is a machine turning one form into another. Then the electricity analogy is made literal, and we pull back until it's civilization.

**World: a living schematic.** Background #041019 with a 20 u grid at 6% cyan. Wires are 1.4 u, #2B4F6B, and glow cyan when tokens run through them. Devices are rounded rectangles (radius 6 u) in 1.2 u cyan outlines with schematic port symbols. Device labels are DejaVu Mono, 10 u, uppercase, tracking 0.12 em.

**The token here** is current: the same dots, single file on wires at 260 u/s, with comet tails. At junctions, streams split.

**The world is one long circuit** from x 0 to 3,600 (world units), with the bus at y 281. Devices sit at SEARCH x 900 (above the bus), VOICE/DOC x 1,350 (below), SPEECH-AT-SCALE x 1,800 (above), SEARCH-AT-SCALE x 2,250 (below), TRANSLATE x 2,700 (above).

| # | Film s | Narration | What we see | Camera | Sound |
|---|---|---|---|---|---|
| 2.1 | 44.0–46.1 | "And here is what it does" | Unit 1's beam enters from the left and becomes the bus wire, drawing itself forward ahead of the camera. The hero is at the front. A terminal at x 120 lights up with the label "TOKENS". | Tracks the hero, x 0 → 500, zoom 1.0. | Electrical hum fades in (60 Hz with soft harmonics). |
| 2.2 | 46.1–49.7 | "every token of it goes to work" | Branches sprout from the bus to all five device sockets in sequence (46.9, 47.4, 47.9, 48.4, 48.9), each drawn on by the first token reaching it. Streams split at junctions. | Pull back to zoom 0.32 to show the whole circuit at work (46.5–48.5), then push to SEARCH (48.5–50.2, zoom 1.1). | A soft relay click per branch. |
| 2.3 | 50.3–53.5 | "A search comes back as a written answer." | **SEARCH.** An input field (Mono 12 u) types "how can I tell if a flood photo is current?" from 50.3. Tokens flow into the device, and its internal 6×4 dot grid flickers. The output panel streams the answer word by word from 51.8, the way a model writes: "Look for older copies of the photo first. If it was online before the flood, it isn't current." | Holds on the device, with a slight push. | Typing ticks; a soft data chatter while processing. |
| 2.4 | 53.9–55.4 | "A voice becomes text" | **VOICE** (dolly to x 1,350). An amber waveform (40 animated bars) flows along the wire into the device. Out comes a transcript, streaming: "Panel 3: slight lifting of paint at the lower left corner." | Dolly x 900 → 1,350 (53.7–54.4). | A short, low voice-like warble under the waveform (synthesized formant noise). |
| 2.5 | 55.6–57.5 | "a long document, a summary" | Same device. A long document (36 lines of small grey text) slides in and enters. Out comes a two-line summary, and we see the compression: the 36 lines squash vertically into 2, with an ease-in-out squash and stretch (0.6 s). Summary text: "Cheaper bid leaves out the repair cost. Revise both bids." | Holds. | A paper whoosh, then a soft "thunk" on compression. |
| 2.6 | 57.9–60.7 | "Millions of hours of speech become text." | **SPEECH AT SCALE** (x 1,800). 200 tiny waveforms rain into the device from the top, and a wall of transcript lines builds on its right, growing upward. Label: "millions of hours". | Dolly and pull back to zoom 0.6. | Layered warbles. |
| 2.7 | 61.1–64.3 | "Billions of searches are answered in written words." | **SEARCH AT SCALE** (x 2,250). Hundreds of tiny search bars stream in and each one pops into an answer card. Three are readable: "soup too salty?" → "Add unsalted stock or a peeled potato." · "slow down a song?" → "Lower the tempo; keep the pitch." · "how steep is this trail?" → "Read the contour lines: closer = steeper." Label: "billions of searches". | Dolly to x 2,250, zoom 0.7. | Many tiny pops. |
| 2.8 | 64.7–68.2 | "Words written in one language are read in another." | **TRANSLATE** (x 2,700). "Shelter entrance: use the side door." Every character cycles through random glyphs for 0.3 s (staggered left to right) and resolves into Spanish: "Entrada al refugio: use la puerta lateral." | Dolly to x 2,700, zoom 1.1. | Glyph-roll ticks. |
| 2.9 | 68.2–69.0 | — | Tokens keep flowing through all devices. | Crane out begins. | — |
| 2.10 | 69.0–72.4 | "If the electron stream was a general form of energy," | The whole token circuit shrinks into the lower half. Above it, a mirror circuit draws on with the same topology but amber electrons (small amber dots, no color variety) feeding classic loads: a bulb that lights, a motor whose rotor spins, a heater coil that glows, and a radio emitting waves. Label at left: "ELECTRONS → ENERGY". | Zoom 0.45, center (1,800, 281). | Hum rises a fifth. |
| 2.11 | 72.8–76.5 | "the token stream is a general form of intelligence." | The lower token circuit's devices relabel as their cognitive counterparts (SEARCH → ANSWER, VOICE → TEXT, DOC → SUMMARY, TRANSLATE → MEANING). Label: "TOKENS → INTELLIGENCE". Both streams pulse in sync, and the hero sits at the bottom circuit's main junction. | Holds. | Hum and music align on one chord. |
| 2.12 | 77.0–81.8 | "So humanity, with its machines, is now processing language at this scale." | **Infinity zoom out.** The double circuit shrinks into the lit footprint of one building, inside a city grid with token routes running its streets (zoom 1 → 0.25 in 1.4 s). The city becomes one cluster of light among many in a region (0.25 → 0.03). The region becomes a lit patch on a dot-globe Earth: an orthographic projection with land as 6,000 dots from a land mask (asset A5), plus token arcs between cities (60 arcs, tokens flowing along them). The globe rotates at 6°/s. | Exponential zoom out 1 → 0.004 effective (world swaps at scale thresholds, invisible because each layer is drawn at its own scale). | Wind rising; the hum fades into the music. |
| 2.13 | 82.6–83.9 | "Think about it." | **Stillness by design.** The arcs freeze, the globe eases to a stop, and the music drops to silence. One heartbeat ring expands from the hero's city. | Locked. | Silence, then one low pulse. |
| 2.14 | 85.0–88.1 | "If industrialization multiplied humanity's physical power," | The globe sinks to the bottom of the frame (center y 640, half visible). Upper left: a line-art steam engine (piston and flywheel, amber, 1.2 u lines) pumps, driven by electrons. It duplicates ×2, ×4, ×8 over 1.5 s, tiling outward. Label "PHYSICAL POWER" (Mono 11 u). | Holds, zoom 1. | Mechanical chuff, multiplied. |
| 2.15 | 88.5–92.5 | "this could be the start of an era that multiplies humanity's cognitive power." | Upper right: a cognitive engine, a 12-node graph with tokens flowing through its edges. It duplicates ×2, ×4, ×8, ×16, faster and further than the left side, until it fills the right half. Label "COGNITIVE POWER". On "start of an era" (≈ 89.3), the globe's limb glows with a sunrise line. | Slight push in. | The music swells for the first time. |
| 2.16 | 92.5–95.0 | — | The camera dives into the hero's city light. The light grows into the hero token, the frame goes dark, and the hero falls, accelerating downward and stretching. | Push in, then tilt down following the fall. | Falling whistle. |

---

## 6. Unit 3 · What set this in motion? (95.0–138.0)

**What this unit says.** An origin story at human scale. After two units of glowing abstraction, we land on a desk, where ideas become a paper. It is tactile, warm and analog.

**World.** A top-down walnut desk under a warm lamp from the upper left (asset A1), with a vignette.
- **Object shadows:** offset (4, 6) u, blur 8 u, 35% black.
- **Stop-motion cadence:** object poses update at 12 fps, with ±0.3 u jitter per pose step. The camera stays smooth at 30 fps, so it reads as stop-motion photographed by a smooth camera.
- **Paper** uses texture A2.

**The token here** is matter: sand grains (irregular 1.5–2.5 u specks, beige #D8C3A0 to #B89B72) and, later, ink.

| # | Film s | Narration | What we see | Camera | Sound |
|---|---|---|---|---|---|
| 3.1 | 95.0–96.2 | — | The hero lands at desk center (500, 300) with a small puff of 12 grains. 2,600 grains lie in loose drifts across the desk. | Top-down, zoom 1.15 → 1.0 (settling after the fall). | A tiny tick, then room tone. |
| 3.2 | 96.2–97.5 | "What set this in motion?" | The grains slide into letters, like sand on a vibrating plate: "What set this in motion?" (Crimson Bold 48 u, centered (500, 250)), word by word on the spoken words. **The hero becomes the dot of "?"**. | Holds. | Sand hiss per word. |
| 3.3 | 97.5–98.1 | — | A breath of air from the left: the grains blow off to the right with turbulence (curl noise), and the desk is clear. The hero stays. | — | Soft breath. |
| 3.4 | 98.1–101.3 | "The trail leads back to a paper from 2017" | The hero rolls toward the upper left, leaving a dotted trail of grains. A folded paper (300 × 200 u, cream, texture A2) slides in along the trail from the top-left to the center (stop-motion steps), with "2017" printed in its corner (Crimson 14 u). | Pans with the hero. | Paper slide. |
| 3.5 | 101.5–103.0 | "Attention Is All You Need" | The paper unfolds in three stop-motion panels to show the title "Attention Is All You Need" (Crimson Bold 30 u) and "Vaswani et al. · 2017" (Crimson 13 u). | Slight push in to 1.12. | A crisp unfold. |
| 3.6 | 103.0–103.8 | — | The paper slides to the upper-left corner and parks, rotated -4°. | Back to 1.0. | Slide. |
| 3.7 | 103.8–106.0 | "By then, building AI models" | An old dictionary (top-down, dark red cloth, 150 × 200 u) slides into the upper right and opens in two stop-motion steps. | — | Book thump, page flutter. |
| 3.8 | 106.0–110.5 | "that could understand and translate language had long been a holy grail" | Four English word tiles (paper 60 × 26 u, Anonymous Pro 14 u) lift out of the dictionary and line up at y 250: I · missed · the · train. German tiles lift out and arrange beneath at y 320: Ich · habe · den · Zug · verpasst. Thin red threads connect the matches. "missed" connects to both "habe" and "verpasst", showing that translation splits and reorders words. On "holy grail" (≈ 109.6) a soft gold halo glows around the tiles. | Holds. | Tile clacks. A thread "ping". |
| 3.9 | 110.5–111.1 | — | A gust clears the tiles to the right. | — | Gust. |
| 3.10 | 111.0–116.3 | "Predicting the next word offered a way into the patterns of language." | Tiles drop one by one to form "She took the bread out of the ____", with a dashed blank tile. Above the blank, four candidate tiles hover and jostle: "oven", "bag", "fridge", "box", each with a paper probability strip (0.62, 0.17, 0.12, 0.09). On "patterns of language", grammar tabs slide under the tiles: SUBJECT (She), VERB (took), OBJECT (the bread), on colored paper tabs. **The hero glows inside the blank.** | Push to 1.15 on the sentence. | Tile clacks. |
| 3.11 | 116.8–121.2 | "So, a team at Google built a new architecture around attention." | A rubber stamp comes down on the parked paper in three stop-motion frames, then lifts. Red ink in a rectangular frame reads "GOOGLE · 2017" (text only, no logo). A paper block labeled "ATTENTION" (typewriter 13 u) slides between the sentence and the candidates. | Pans to the paper, then back. | Stamp thump. |
| 3.12 | 121.7–128.8 | "It could weigh which earlier words mattered and pay more attention to them when predicting the next word." | Red threads run from the blank to every earlier tile. On "weigh", they tighten, with thickness by weight: bread 4 u, took 2 u, out 1.5 u, She 0.8 u, the 0.5 u. The tiles tug toward the blank in proportion (bread moves 6 u). The hero rides the bread thread into the blank. "oven" drops into the blank on "predicting the next word" (≈ 128.0), and its probability strip fills. | Holds, slight drift. | Threads creak; a soft "click" as oven seats. |
| 3.13 | 129.4–131.5 | "The Transformer was born" | The parked paper flies to the center and unfolds upward into a stack: six paper layers pop up one per stop-motion beat, each labeled "attention + feed-forward", with a tab reading "Transformer". The hero is at its core. | Push in to 1.2. | Six paper pops. |
| 3.14 | 131.9–136.1 | "a model of language built from vast collections of text" | **Lift into the library.** The desk becomes small at the center of a top-down library (asset A3): bookshelves radiating in rows. The desk plane is clipped to the library's round clearing, so no rectangle corners cross the shelves. From every shelf, warm ink tokens (4,000) lift off the book spines and stream toward the desk, into the stack, which glows. | Zoom 1.2 → 0.3 (exponential). | A rising choir-like pad. |
| 3.15 | 136.1–138.0 | — | The glowing stack collapses into a single bright point: the hero. Everything else dims to black; the hero stays lit above the dim. | Holds center. | All sound draws in to one tone. |

---

## 7. Unit 4 · Words to work (138.0–162.0)

**What this unit says.** The lesson outline. It's human and hand-made: chalk is learning. The hero is the chalk dot that starts every stroke.

**World.** A blackboard (asset A4): #1F2A26 with erased-chalk smudges and a wooden rail at the bottom edge.
- **Chalk lines:** white #F2F2EA, 1.6 u, with grain made from multiple jittered sub-strokes.
- **Strokes:** revealed along their path at 220 u/s, with chalk dust particles shed at the tip.
- **Writing:** Montserrat Light, revealed left to right behind the chalk tip, with the same grain mask.

| # | Film s | Narration | What we see | Camera | Sound |
|---|---|---|---|---|---|
| 4.1 | 138.0–139.0 | — | The hero glows on black, carried over from the library at the same screen point and size. The board fades up around it in 0.5 s, framed low so the wooden chalk rail is in shot; the hero, now a chalk dot, travels to (90, 70) as the camera tilts up. | Opens on the lower board (y 618.75), tilts up to y 281 by 1.5 s. | Room tone, a chalk tap. |
| 4.2 | 139.0–140.3 | "In this series" | "In this series" is written from the dot (Chalk 30 u, weight 300), top left. | — | Chalk scratch for each stroke. |
| 4.3 | 140.6–143.0 | "we will learn how one ability grew into another" | A left box is drawn (240 × 140 u at (230, 250)) with "predict the next word" and a mini example: "the cat sat on the → mat". An arrow grows to the right. A right box is drawn, empty. | — | Scratches. |
| 4.4 | 143.8–147.5 | "how predicting the next word became agentic systems doing jobs" | Inside the right box: an agent loop, a circle with four nodes ("read · plan · act · check") and four small chalk icons (file, terminal "> _", globe, check mark), with "agents doing jobs" beneath. The arrow between the boxes gets "this series" written on it. | — | Scratches. |
| 4.5 | 148.2–150.5 | "We will trace how it matured" | The board pans up as if we slid it. A long timeline line is drawn across the lower half. | Pan down 240 u. | Long scratch. |
| 4.6 | 150.7–152.8 | "from 2017 to today" | Ticks and labels are drawn in order: 2017 Transformer · 2018–2020 GPT, GPT-2, GPT-3 · 2022 ChatGPT · 2023–2024 tools and agents · today: agents at work. The hero rides the line to "today". | Follows the hero. | Taps per tick. |
| 4.7 | 153.3–155.5 | "and build an intuitive understanding of it" | A curved underline under the whole timeline, and a small lightbulb doodle at its end. | — | Scratch. |
| 4.8 | 156.0–158.4 | "how to use it, and how to live through it" | Two lines written below, each ticked: "how to use it ✓" and "how to live through it ✓". | — | Scratches, two ticks. |
| 4.9 | 158.8–162.0 | — | An eraser wipes the board in two broad strokes, leaving only the title "3.2 Quadrillion Tokens" (Chalk 44 u, weight 600) with **the hero as its decimal point**, and "Episode 1" (Chalk 16 u) beneath. Fade to black over the last 0.8 s. | Holds. | Eraser swish; the music resolves. |

---

## 8. Sound plan

- **Narration:** Hadi's master, plus the new takes (L01, L04, L07, L20, L22, L23) from Codex. Each line is placed as its own clip at the times in §3.
- **Agent voices:** A1–A4, from Codex, in synthetic voices that aren't Hadi's. They run through the radio dial (band-pass 300–3,400 Hz, static bed) only in 1.1–1.3.
- **Music:** synthesized in the branch, so it's license-clear, with one motif and four arrangements.
  - Unit 1: airy pad in D minor 9, with the bloom at 7.9.
  - Unit 2: a pulsing 110 BPM arpeggio locked to the token pulses, silent at 2.13, swelling at 2.15.
  - Unit 3: warm plucked notes and room tone.
  - Unit 4: a simple, piano-like statement of the motif, resolving on the title.
  - Ducked at least 20 dB under speech, measured on every line.
- **Effects:** synthesized, one per weighted event, as listed per shot.
- **Final mix:** integrated about -16 LUFS, true peak ≤ -1.5 dBTP.

## 9. Assets

**Made in code (in the branch):**
- All tokens, swarms, wires, devices, globe, engines, tiles, threads, stamp, chalk strokes, and all type.
- All music and sound effects.

**Requested from ChatGPT** (prompts below). If an asset doesn't arrive, there's a code-drawn fallback, noted for each.

| ID | Asset | Prompt for ChatGPT image generation | Fallback |
|---|---|---|---|
| A1 | Desk | "Top-down photograph of an empty dark walnut desk surface, warm desk lamp light from the upper left falling off to soft shadow at the edges, subtle wood grain, no objects, 3840×2160, photographic, even exposure in the center 60%." | Procedural wood grain with a radial lamp gradient. |
| A2 | Paper | "Seamless tileable texture of off-white cotton paper, very subtle fibers and tooth, no folds, no text, flat even light, 2048×2048." | Procedural noise paper. |
| A3 | Library | "Top-down view straight down onto a large library: rows of tall bookshelves seen from above radiating around a small empty clearing in the exact center, warm light, thousands of colorful book spines visible along shelf tops, 3840×3840, no people, no text." | Procedural shelf rows with colored spine strips. |
| A4 | Blackboard | "Front-on photograph of a large, slightly worn green-black school blackboard filling the whole frame, faint erased chalk haze, wooden chalk rail along the bottom edge, no writing, even light, 3840×2160." | Procedural board with smudge noise. |
| A5 | World land mask | "Equirectangular world map, land pure white, ocean pure black, no borders or labels, 2048×1024, accurate coastlines (Natural Earth style)." | A dot-globe with only a latitude/longitude graticule and city-light clusters. |

## 10. Checks before you see it

For every shot:
- A 5 fps contact sheet across the shot, checked for purposeful motion, clean layouts, and no text overlaps or edge crowding (≥ 40 u from the edge).
- A frame-pair motion check confirming nothing is static outside 1.12 and 2.13.
- A phone-width check (390 px wide) for text legibility.
- Speech-to-music separation measured per line, true peak and loudness for the full mix, and the opening syllable checked by waveform.

Listening: I can measure the mix but not hear it, so a human (you) or Codex does the final listening pass.

## 11. Facts to verify before the final render

- 3.2 quadrillion tokens/month and >300× in two years (Alphabet, June 2026).
- ~300 trillion tokens of usable public human text (Epoch AI).
- Paper title, year, first author (Vaswani et al., 2017).
- Timeline dates: GPT 2018, GPT-2 2019, GPT-3 2020, ChatGPT November 2022.
