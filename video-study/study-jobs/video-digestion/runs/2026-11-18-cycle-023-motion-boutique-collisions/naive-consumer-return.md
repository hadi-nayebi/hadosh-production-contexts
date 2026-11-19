# Naive-consumer test — Cycle-023 Packet #15

Reader note: This test was performed cold, from the packet alone — `2026-11-18-motionboutique-text-react-collisions/digest.md` (Packet #15 — Collision-Driven Typography in After Effects). No other specimen, queue, or job material was used to answer.

## (1) Can you name the specimen and its technical facts in under a minute? State them.

**Result: PASS**

Yes. From §1 "Specimen identity + technical facts" on the packet's face:

The specimen is a three-part Motion Boutique object — described in the packet header as: "Motion Boutique — physics-driven reactive typography: a word's filtered physical impact triggers both its rigid-body reaction and a rewrite of the word itself into a reaction word."

- Breakdown page: "Make Your Text React to Collisions in After Effects (Newton + Expressions Tutorial)" — Motion Boutique, motionboutique.com learn page, https://www.motionboutique.com/learn/text-react-collisions · 5 written steps · the full expression printed in Step 3 · 3 stills (fichiers/reactcol/rectcol01–03.png).
- Tutorial video [TUT]: Same title — YouTube U41fYDLFJzk, Motion Boutique, uploaded 2025-05-27 · 233.154 s · 1920×1080 · 60 fps · AV1 + Opus · 13,553,319 B (archived as `source.mp4`) · narration 582 words at ~150 wpm · 23,232 views · 723 likes · 36 comments at capture.
- Finished piece [PRD]: "Cheer up, it's Monday. ✊😵" — YouTube nJYxWO5ZZGE, Motion Boutique, uploaded 2025-05-26 · 25.394 s · 608×1080 vertical · 30 fps · AV1 + Opus · 2,099,608 B (archived as `final-result.mp4`) · 1,171 views · 16 likes at capture.

## (2) Can you find each technique with its timestamps, mechanics, and frame evidence? Pick three techniques at random and show where each is found.

**Result: PASS**

Yes. §3 "Technique catalogue" lists T01–T11, each with timestamps, mechanics, and named evidence. Three picked at random:

- **T01 — Collision-as-onset source-text replacement** — found in §3, [SYS].
  Timestamps: "tutorial 1:37–2:23 (expression applied); final piece throughout, first impacts by ~0:03."
  Mechanics: a text layer is simulated as a rigid body in Newton; when the body collides, an expression on its Source Text replaces the word it displays. The falling state displays "Weee"; each accepted impact (T03's filter) advances a counter, and the counter selects the next displayed word from a 12-word reaction list.
  Frame evidence: `ev/f10-first-impacts.jpg` (falling "Weee" instances above; a settled heap of reaction words — "Whoa", "Thud", "Ouch", "Yikes", "Aaah" — below) · `clips/impact-word-swaps.mp4` (8–13 s: swaps at impacts, in motion) · transcript [00:01:37] "Here's how the expression works."

- **T03 — The significance filter (spacing + delta + start gate)** — found in §3, [SYS].
  Timestamps: "article Step 3 (printed expression); tutorial 1:37–1:57."
  Mechanics: iterate the Contacts slider's keys; skip any key before `startTime = inPoint + 10 × frameDuration`; accept the first remaining key; accept a later key only if it is at least `minSpacing = 3 × frameDuration` after the last accepted key and its slider value differs from the last accepted key's value by more than `minDelta = 30`.
  Frame evidence: `ev/t105-expression-editor.jpg` (the expression open in the tutorial, lines 1–35 legible: `slider`, `minSpacing = 3 * frameDur`, `minDelta = 30`, the words list, the acceptance condition at line 27) · article Step 3 code block.

- **T10 — The accumulation heap: impacts settle into a pile that stays** — found in §3, [PRD].
  Timestamps: "final piece ~0:03–0:25."
  Mechanics: landed words do not exit; bodies come to rest on the floor and on each other, so the lower frame fills with a growing heap of reaction words at mixed scales and rotations while new "Weee" instances keep falling through the upper frame.
  Frame evidence: `ev/f16-heap-mid.jpg` (t = 16 s: heap formed, falls continuing) · `ev/f23-final-pile.jpg` (t = 23 s: the closing pile) · `frames/f008.jpg` (t = 7 s, viewed firsthand: heap nucleated at the floor, "Weee" still falling above).

## (3) Can you read an honest goods/bads pricing? Quote one good and one bad with their timestamps/evidence.

**Result: PASS**

Yes. §5 "Goods and bads" prices G1–G5 and B1–B5 separately, each with timestamps and/or evidence.

- Good — G1: "Reproducibility is designed in (tutorial 1:37–2:23)." — "`seedRandom(count, true)` makes every word choice a function of the impact count: the piece is auditable and re-renderable, a property most physics-driven pieces give up."
- Bad — B1: ""Ow!" can never appear (expression, article Step 3)." — "The selection index `1 + Math.floor(random(words.length - 1))` ranges over indices 1–11 of the 12-word list; index 0, "Ow!", is unreachable — dead code in the list's first slot, invisible unless the formula is read closely. Priced from the printed code (A4 cl.3 evidence form: the code text)."

## (4) Can you lift at least one lesson mapped to a named container (opening · transition · word animation · diagram · ending) with a build-cost note? Quote it.

**Result: PASS**

Yes. §6 "Lessons mapped to our containers" gives L1–L10, each with container, change, and build cost. One lifted verbatim in substance:

- L1: "Collision-as-onset for word landings. Container: **word animation**. Change: a vocabulary word that "arrives" (drops into a sentence, lands on its slot) can carry its own reaction — on landing it swaps to its spoken/emphasised form. Cost: **moderate** — the onset logic is an event + a filter; the physics can be a simple deterministic bounce in our HTML containers, no Newton licence needed for the *pattern* (B4 prices the original's dependency, not the pattern's). Class: technique."

Other containers are also present on the face of §6, e.g. L6 mapped to **ending** and L7 mapped to **transition / word animation**, each with its own cost note.

## (5) Can you see the packet's named consumer and production surface on its face? Name them.

**Result: PASS**

Yes. §2 is headed "Consumer + production surface" and names them on the packet's face:

- Named consumer: "the DLC assembler — word-animation containers." The packet states: "Consumer: the DLC assembler — word-animation containers. The assembler's word-animation containers currently key every onset to a spoken-word timestamp: a word appears, scales, or highlights when the narration says it."
- Production surface: the DLC assembler's word-animation containers (with, in §6, L8 naming its build workflow as the production surface for that lesson: "Consumer: DLC assembler (production surface: its build workflow)").
- Secondary consumer named for the hand-off: "the **studio lane** (openings — the falling-word cold open is an opening-container candidate)."

The packet explicitly does not claim a generic consumer: ""General inspiration" is not claimed for anyone."

## Summary

- Test (1) — specimen + technical facts: **PASS**
- Test (2) — techniques with timestamps, mechanics, frame evidence: **PASS**
- Test (3) — honest goods/bads pricing: **PASS**
- Test (4) — lesson mapped to a named container with build-cost note: **PASS**
- Test (5) — named consumer and production surface on the face: **PASS**

No test failed.
