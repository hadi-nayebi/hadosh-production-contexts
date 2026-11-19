OpenAI Codex v0.169.0
--------
workdir: /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
model: gpt-6.2-sol
provider: openai
approval: never
sandbox: workspace-write [workdir, /tmp, $TMPDIR]
reasoning effort: none
reasoning summaries: none
session id: 01a1ef2a-97e6-7f21-be3c-801a96c4af8e
--------
user
TASK: You are the jev-observe-exit judge for the recreation job, Wave 34. Judge ONLY item T205 from the record below, per the call definition that follows. Return ONE verdict for T205 (ADVANCE, ADVANCE-WITH-GAPS, or RETURN-TO-OBSERVE) with the six dimension scores (0-1), the primary classification if returned, and named gaps if any. End with a BODY-WRITE: line naming what your return files.

# Jev call — jev-observe-exit (recreation)

_Per-call definition from jev-call-template.md. Built 2026-11-14 (phase-guard augmentation). The judgment: a recreation wave may not enter Plan on a catalogue summary alone — Observe must have priced the queue, read the prior scores where they exist, seen the evidence frames, and carried the standing construction guidance into working memory._

## 1. What it judges
- Deliverable: the wave's Observe working memory — RUN.md gate-out block (§1: mechanics summary + sub-beat timings + variable list + named consumer) for each item in the wave (up to 5 owed items).
- Call point: recreation INSTRUCTION §1, at the gate out of Observe, before §2 Plan opens for any item in the wave. The verdict is advisory per item: applied, a RETURN-TO-OBSERVE item is held out of the wave's Plan (the wave proceeds with its advancing items; a held item never holds the wave hostage — same rule as jev-prewave §5); set aside, the miss is recorded in Condense. An unfired call makes the cycle INCOMPLETE.

## 2. Instruction (the model's charge)
Judge whether this Observe record can support a Plan for THIS recreation wave, item by item. Price, in order:
(1) QUEUE STATE PRICED — does the record state the recreation queue's current position (../QUEUE.md read this cycle), each item's queue number and OWED status, and the ownership split (Amendment A3 §3: this job owns FIRST attempts; an already-scored technique belongs to practice — a wave item that is a re-attempt is a routing defect, named)? T15 is the standing example: attempt 1 scored FAIL 78.5 on 2026-11-13, so T15 attempt 2 is practice's charge, never this job's wave item.
(2) PRIOR SCORES READ — for any item whose technique already has a scores.md or a verdict-history line (a techniques' family sibling counts: e.g. T16 shares T15's particle machinery), does the record cite the actual filed scores and cure list, or does it plan from the catalogue description alone? Planning that ignores a filed failure is the defect this leg exists to catch.
(3) MECHANICS SEEN, NOT SUMMARIZED — does the record carry the packet section's mechanics + sub-beat timings from firsthand viewing of the evidence frames and the source segment in motion (§1.1–1.2), with timings in seconds — or only a restatement of the TECHNIQUES.md one-liner? A mechanic the builder has not seen is a guess (§1.1).
(4) VARIABLES EXTRACTED — is the §1.3 variable list complete for this technique (text content, phrase count, timing/durations, palette, scale, direction, density — plus technique-specific variables), so Plan's parameter table has something to bind? A variable missing here becomes a hardcoded accident in Execute (§1.3).
(5) CONSTRUCTION GUIDANCE CARRIED — where the technique's family has standing guidance, is it IN the working memory, named? For particle-field techniques: the flow-field model (Amendment A5 §4: one constant flow field, borrowing with low-amplitude jitter, never-borrowed reserve fraction, release with velocity continuity) AND Owner Cure 1 (foreground/background intensity separation riding the borrow flag) AND Owner Cure 2 (strict phrase sequencing / phase exclusivity). For typography techniques: the typography construction precedent (Amendment A1 §2: runtime sampling of config-rendered text). Guidance that exists in INSTRUCTION but is absent from the wave's working memory is scored as absent.
(6) CONSUMER NAMED — §1.4: which production surface lifts this machinery (container type + owning lane), named per item, not "production generally."
(7) CODEX/OWNER INPUTS — were any Codex calls fired in this Observe (e.g. a record audit of a prior attempt's codex/ returns) with receipts filed, or is the absence printed? Does the wave need owner-only information (it almost never does — recreation prices from packets and filed scores); if claimed, is it routed as a named gap rather than silently assumed?
Score 0–1 per dimension (§4), classify defects from the taxonomy, return one verdict per item.

## 3. Context contract (masked view)
- FED: RUN.md Observe gate-out blocks · ../QUEUE.md recreation-queue section (current) · each item's packet digest.md technique section + TECHNIQUES.md entry · prior scores.md + verdict-history.md lines for the item and its named family siblings · INSTRUCTION Amendments A1/A3/A5 guidance lines relevant to the item's family · any Observe-phase Codex receipts filed this cycle.
- NEVER FED: the builder's confidence prose · HQ's supervision faces · scores from attempts not yet filed (unfiled scores do not exist).
- Ceiling: ≤32k tokens; packet sections enter as the technique's section only, never the whole digest; evidence frames are referenced by path/timestamp, never fed as images (text-only judge).

## 4. Output space
- Verdict classes (per item): **ADVANCE · ADVANCE-WITH-GAPS · RETURN-TO-OBSERVE**.
- Dimensions (0–1): queue-state-priced · prior-scores-read · mechanics-seen · variables-extracted · guidance-carried · consumer-named. (1.0 = evidenced in the record with citations; 0.5 = asserted without citation; 0.0 = absent.)
- Rejection taxonomy (one primary per returned item): QUEUE-STALE (queue position/status not read this cycle) · REATTEMPT-MISROUTED (scored technique in a first-attempt wave) · SCORES-UNREAD (prior scores/cures exist, uncited) · MECHANICS-UNSEEN (no firsthand sub-beat record) · VARIABLES-THIN (variable list cannot bind a parameter table) · GUIDANCE-DROPPED (standing family guidance absent from working memory) · CONSUMER-VAGUE.
- Accepted profiles travel: cited in RUN.md at the Plan gate; ADVANCE-WITH-GAPS items carry their gap list into §2 as named Plan charges.

## 5. Floors and disposition
- Any dimension < 0.5 → RETURN-TO-OBSERVE for that item. GUIDANCE-DROPPED on a particle-field or typography item → RETURN-TO-OBSERVE at any other score (T15 attempt 1's founding lesson: the frozen-flow defect and both owner catches were guidance-shaped failures discovered only after the wave was spent).
- ADVANCE-WITH-GAPS requires every gap named with its Plan-phase cure; an unnamed gap is a RETURN.
- Disposition: the verdict is advisory — reviewed by the runner, applied or set aside with the miss recorded in Condense. The verdict + primary classification + disposition land in RUN.md either way.

## Call command
- Defined prompt + context assembly per §3, executed through the fleet's sealed decision-model route named in guards.md when bound. Binding the exact runner command here is the first firing's own first step. **Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.**

## 6. Firing record and improvement
- Exemplars: (a) T15 Cycle-002's Observe record reconstructed from its RUN.md (must ADVANCE — mechanics, timings and consumer were recorded before building). (b) A constructed record proposing T15 as a wave item for attempt 2 (must RETURN-TO-OBSERVE as REATTEMPT-MISROUTED). (c) A constructed particle-technique record with no flow-field / Owner Cure 1 / Owner Cure 2 lines (must RETURN as GUIDANCE-DROPPED). (d) A constructed record whose variable list names only "text and color" for a timed multi-phrase technique (must RETURN as VARIABLES-THIN).
- Firing: this call fires at its step on every cycle; its firing record and misses are its improvement material. No test precedes firing. The exemplars above stand as its first firing cases — all four must classify correctly when fired, and a miss is recorded in Condense as improvement material, never as a bar to firing.

## 7. Iteration (Condense)
Amendments name forcing evidence + before/after. A text change takes effect on the call's next firing; the call keeps firing every cycle, and Condense prices the change against the returns that follow it. First expected amendment pressure: whether family-sibling scores (leg 2) should be mandatory for all items or only same-machinery families — priced from the first waves' returns.
# Item T205 — vote-to-grid conversion diagram · Phase A (Observe + Plan) · Wave 34 / Cycle 037

- Queue #96 · Packet #12 (Vox "The Electoral College, explained", YouTube ajavsMbCapY, 488.301 s) · digest-local ID T04 · TECHNIQUES T205.
- Phase A ONLY (A9.2 gate-order): no build script, no artifact directory in this phase. Artifact slug at Execute: `T205-vote-to-grid-conversion-diagram/`.
- Sources read firsthand this run: INSTRUCTION.md (§1/§2, A1/A2/A3/A5/A6/A7/A9/A10/A11/A12/A13) · RUN.md §§0b/1/2 · digest.md §3 T04 + §2/§6 · techniques-diagrams.md T205 entry · guards/codex-observe.md + codex-plan-review.md + guards.md · family scores.md (T53, T59) + verdict-history lines (T53/T59/T82/T92).

## §1 OBSERVE

### 1.1 Catalogue mechanics (cited)
- Digest §3 T04 (0:37–1:00): "The ballot icon connects by a red bar to a grid of squares that fills red in blocks — a vote entering at left exits as allocated blocks at right. Operation: dot/square fill as conversion, drawn left-to-right in reading order." Why: "your vote is converted, not counted" drawn as a literal machine before any state is named. Evidence cited: ev/t52-vote-to-grid.jpg.
- TECHNIQUES.md (techniques-diagrams.md:345): "a grid fills in blocks, left to right, as conversion" — agrees with digest on operation + direction; tier DESCRIBED — OWED #96.
- Transcript anchors (sentences.json): 37.05 s "It's made up of delegates from each US state." · 39.64 s "When Americans vote for president, what they're actually voting for, is who their state will vote for." · 45.05 s "This is why, every so often, someone wins the presidency without winning the popular vote."

### 1.2 Motion census (A10.3) — firsthand, ≤2 s spacing, 23 frames
Extracted by this agent from `source.webm` (ffmpeg, -ss seeks) into this run's `census/` as `T205-census-<t>s.jpg`; all 23 viewed firsthand (key frames at full size: 37/39/40/41/43/44/45/46/47/52 s; remainder compared). Full SHA-256 per frame:

| Source t | File | SHA-256 | State (segment-relative ms from 37.0 s window start in brackets) |
|---|---|---|---|
| 36.0 | T205-census-36.0s.jpg | 48649b657f6412af9eb95a564164b68b124f59b8d63edc2d5e2986882d8a7917 | Pre-window: full grid, outlines still drawing |
| 37.0 | T205-census-37.0s.jpg | b879a527cd3ac493eee8d7163caeceaee6cb403a05955474cf3386bc7352b4c3 | [0] Full-frame black-square grid (~34 cols × 18 rows visible) on newsprint ground; grey state outlines PARTIAL (gaps top/right) — draw-on in progress |
| 38.0 | T205-census-38.0s.jpg | 60ddf3756ce14ff2e786ec16428608c6faf1f7455bed3dad2be06a7edc4b8599 | [1000] Outlines nearly complete |
| 39.0 | T205-census-39.0s.jpg | 2cc008095655c74833a206c0a28641d117a4a229bacb8c91f2fcb1fb5c6d03fa | [2000] Outlines COMPLETE + outer frame closed — substrate HOLD begins |
| 40.0 | T205-census-40.0s.jpg | 0c87b3495262044da3a39ee1793696b0e71e128cda94a532fa48fe3cf80c12b2 | [3000] LAYOUT SHIFT DONE: grid cropped to right ~55% of frame; black disc + ballot box ("VOTE") at left; ballot paper = short stub, tiny red tick start; NO connector, NO fill |
| 41.0 | T205-census-41.0s.jpg | 3eb5f5982af7110215f645cc578b266590de32518343fb8f3c1f62e3a82bff1e | [4000] Ballot paper grown taller; check stroke drawing (blue-grey) |
| 42.0 | T205-census-42.0s.jpg | d78b47a2bfa1d67f9e39f2eaadfecbfdb86b30886c5c41b3f94bf118d6a2a00f | [5000] Paper full height; check + ruled lines complete (still blue-grey) |
| 43.0 | T205-census-43.0s.jpg | 54bf2a5d80ddf736fe1ea3ddfc9cda2d5897fab3245b5f5ad88854f29973d82b | [6000] Red connector bar EXTENDED ~60% of the gap, not yet touching grid; no fill |
| 43.2 | T205-census-43.2s.jpg | f348d11deabd9f8903007f33507d50a67a14545adc175540a2d257243cf5ac55 | [6200] FINE PROBE (added on codex-observe G-T205-3, viewed firsthand): ballot paper RETRACTED into the box (slot only — the vote is cast); connector fully extended, touching grid edge; NO fill yet |
| 43.4 | T205-census-43.4s.jpg | 35f890037b6ca9d3c03e2c952e72f6b9a14106879af4ef83985c165566943917 | [6400] FINE PROBE: paper reappears HIGH above the box with check; wash beginning |
| 43.6 | T205-census-43.6s.jpg | 3b0641475932068c7771ce096d822d6889f9f413eced580979b9a1a773edeb07 | [6600] FINE PROBE (viewed firsthand): paper tall, check RED; block wash PALE pink — graded fill in progress |
| 43.8 | T205-census-43.8s.jpg | 04f293eb81574eb6606addf36981fc75fc31ebc6a140a22a39006715be2467ae | [6800] FINE PROBE: wash strengthening toward full |
| 44.0 | T205-census-44.0s.jpg | a6e345e1a15fd23b3001570307b2b7017fed09d0ba9069389950d7c01c5851c3 | [7000] Connector REACHES grid; leftmost state block (5 cols × 11 rows of squares, California-shaped column) washed solid muted red BEHIND the black squares (squares stay black); ballot check turned RED |
| 45.0 | T205-census-45.0s.jpg | 903a404ae56026861a2375dec667722d54315884972831919f1bf5845d5aa510 | [8000] Identical composition — converted state HOLDS |
| 46.0 | T205-census-46.0s.jpg | d5967afb6aff761c16285c0d58e5631ed1ef714a06f851c46a206da1196d61d4 | [9000] Whole diagram FADING to pale grey wash; portrait disc (John Quincy Adams, 1824) popping in centre — diagram dissolving, next beat entering |
| 47.0 | T205-census-47.0s.jpg | 67c38658649f7e107c2fc2737c088782c3d41aece4445aeb08370f5a5305e396 | Diagram GONE; full-frame portrait card (different technique — consequence illustration) |
| 48.0 | T205-census-48.0s.jpg | 9d44caf0cd2fa205b4174b42f10b14d068d1cfac774ca8867b107f46f0a613a8 | Portrait holds |
| 49.0 | T205-census-49.0s.jpg | 1ef5eff5405bb636a21f8c1c87595875484a478f065c80a74903dd47d152d75e | Portrait holds |
| 50.0 | T205-census-50.0s.jpg | 116ca96b51a1c726cecfdfa434466ea1da777dc4ce8cd09550b60903d5769481 | Portrait carousel beginning (second portrait entering) |
| 51.0 | T205-census-51.0s.jpg | eada8b7289c9e111adceedc67c6ba970fb3794b3d867305debc92452ff497f3b | Carousel mid-move |
| 52.0 | T205-census-52.0s.jpg | c4e480893d4c2851e16b71eca756a5f9e658eac6ed668c05d0214fa13e2c7b1f | Three portraits (Harrison 1888 · Bush 2000 · Trump 2016) |
| 53.0 | T205-census-53.0s.jpg | 6a8c45addf3d7d173be5c04394fad9ef34f0af060882f7ceb0933bded1c17bd9 | Portraits hold |
| 54.0 | T205-census-54.0s.jpg | 817aa27471f9a12237a57cd53375fdcb839af10335246a9e24c157e5170d2022 | Portraits hold (Gallup chart beat begins in narration) |
| 55.0 | T205-census-55.0s.jpg | 82893e2aea0fcaffa94b736c4b13938c61b657bc48d31949e474c4c3c6aaa428 | Portraits hold |
| 56.0 | T205-census-56.0s.jpg | 14e526ab7afa8b760e2769a0483dd1529f478a395fa2c2002468eefa62efb340 | Portraits hold |
| 58.0 | T205-census-58.0s.jpg | ec1b60169d94867c30a1b59734fd5ee5a664d0a16abc397a229cd871789c5fdc | Portraits hold |
| 60.0 | T205-census-60.0s.jpg | 9a180882b547de3c3e83d438917cdb45a8bdd5d17858f1c7987fac6740f63690 | Portraits/chart transition zone — no conversion diagram |

**Motion findings (A10.3 form; REVISED on codex-observe G-T205-3 with fine probes at 43.2/43.4/43.6/43.8 s, census now 27 frames):** Motion instants: outline draw-on 37–39 s · layout shift ≤39–40 s (between census frames; sub-second, priced as ≤1000 ms) · ballot paper growth + check draw 40–43 s · connector extension 42–43.2 s · **paper RETRACT at ~43.2 s (the ballot drops into the box — the casting beat)** · paper reappear-high + check recolour + **GRADED block wash 43.4–44.0 s** (pale at 43.6, full by 44.0 — a ~600 ms eased wash of ONE block whole, not squares lighting sequentially) · global fade-out 45–46 s. Holds: substrate complete 39–40 s (~1 s) · pre-connector diagram 40–42 s · converted state 44–46 s (~2 s, incl. fade onset). Dissolve: the diagram never exits by parts — it fades globally to a pale wash under the incoming portrait (46 s frame). Sub-beats: (i) substrate draw-on is the T204/T210 shared grid, not conversion motion; (ii) the retract→reappear is the conversion's causal hinge: vote cast (paper in) → allocation appears (paper back up, checked red, block washing); (iii) only ONE block ever fills in this window. Correction (codex-observe G-T205-1): the 36.0 s pre-window frame carries the preceding title beat, not only drawing outlines — its table description stands corrected here.

**⚠ PACKET GAPS priced (for codex-observe):**
- G-T205-1 (window overstatement): digest claims 0:37–1:00 (23 s) for this technique; the census shows the conversion diagram lives 37.0–46.0 s (9.0 s). 46–60 s is a portrait-carousel consequence beat (different visual technique, photographic content — not recreatable as this technique and not part of it). Plan therefore cuts 37.0–46.0 s (see §2).
- G-T205-2 (evidence frame does not depict the technique): the digest's sole cited evidence frame ev/t52-vote-to-grid.jpg is byte-identical to census 52.0 s (SHA-256 c4e480893d4c2851e16b71eca756a5f9e658eac6ed668c05d0214fa13e2c7b1f, verified by hash equality) and shows the three portraits, NOT the ballot→grid diagram. The technique's true evidence frames are this census's 40/43/44 s frames. Observe proceeds on the census, not the cited frame.
- G-T205-3 (fill granularity): digest/TECHNIQUES prose ("a grid fills in blocks", "fills red in blocks") is ambiguous between per-square and per-block fill; census resolves it: per-BLOCK wash (one state block at a time), squares unchanged on top. Plan binds per-block.

### 1.3 Variables (§1.3 — every property that could change without changing the technique)
Content: ballot label text ("VOTE") · check glyph/colour states · block label (none in specimen — absence is a value) · ground texture on/off. Counts/geometry: grid columns × rows · cell size + gap · block partition (which cells form the converting block; block cell count) · number of blocks filled (specimen: 1) · disc diameter · ballot-box scale · connector thickness/length. Timing: outline draw duration · substrate hold · layout-shift duration · paper-growth duration · check-draw duration · connector-extend duration · fill duration · converted hold · fade-out duration · phase start offsets. Palette: ground colour · cell colour · outline colour · disc colour · box/paper colours · connector/fill colour (specimen muted red #d94f5c-family, measured from frame as pink-red wash) · check idle colour (blue-grey) vs active colour (red). Direction/order: conversion direction (specimen left→right) · fill order across blocks (specimen: leftmost first) · layout (disc left / grid right vs mirrored). Density: cells per block · grid density at fixed stage size.

### 1.4 Consumer
Diagram containers — the DLC assembler's count-board / diagram surface. Priced: the assembler's core need is exactly this operation — an input (a vote, a count, a choice) entering one side and exiting as allocated blocks whose whole-block flip carries the argument (digest §2: block-weighted count board; §6 L1/L4). T205 is the minimal pure form of that operation (one input → one block) with no tally arithmetic on top, so it is the reusable primitive the count-board family composes; T53's board already proves the composed form passes (85.6). Secondary: explainer production's mechanism-diagram beats.

### 1.5 Prior / family scores read (filed scores only)
- T53 ballot-arc count board (same packet family of count-boards, Cycle 012): motion 92 · timing 88 · purity 94 · reusability 74 · readability 80 → avg 85.6 PASS. Prices: count-board constructions pass; reusability is the family minimum (bracket dispatch on VALUES, geometry literals outside CONFIG — both cured in Plan §2 via ID-keyed blocks + full CONFIG geometry).
- T59 column cards (Cycle 012): 100/84/96/70/84 → 86.8 PASS; reusability again the minimum at exactly 70 (validation domains + residual literals).
- T82 countable multitude: 87.2 PASS (verdict-history). T92 data beats: attempt 1 = 82.4 FAIL (timing 76) — diagram-family timing risk is real when schedule is not census-anchored. CORRECTION (codex-observe finding 4): T92's current filed disposition is RECREATED after practice attempt 3 (90.2, timing 95); the 82.4/76 figures describe attempt 1 only and are used here only as the timing-risk evidence, not as T92's standing state.
- Packet siblings this wave (T204/T208/T210) have NO filed scores (first attempts, records in this same run dir) — nothing priced from them; T208/T210 share the grid substrate, so their censuses corroborate substrate geometry only.
- Family average (filed diagram/count PASS siblings T53+T59+T82): (85.6+86.8+87.2)/3 = 86.5.

### 1.6 Standing-guidance dispositions (A9.5 — reasoning inline)
- **A1.2 runtime text sampling: NOT-BINDING.** That precedent governs typography constructions whose letterforms are sampled from config-rendered text (T15 particle typography, purity 100). T205's only text is the ballot-box label "VOTE" — a flat vector label inside a drawn icon, not formed/samples letterforms; no text is sampled, formed, or dissolved. Binding it would import a particle-text pipeline for a diagram. The label is instead CONFIG text rendered as DOM/SVG text (swap-visible).
- **A5 flow-field model + Owner Cures 1–2: NOT-BINDING.** A5 binds particle fields (borrow/reserve flow, intensity separation, phrase exclusivity). Census shows no particles: the field is a static lattice of drawn squares; nothing flows, nothing is borrowed. Owner Cure 1's underlying concern (figure/ground separation) is carried by construction differently: the fill is a wash BEHIND persistent black cells, so filled vs unfilled reads by background colour, never by cell intensity competition. Owner Cure 2's sequencing concern maps to the phase machine (one phase owns the stage; §2), not to phrase lifecycles.
- **A9.1 plate construction: BINDS in its still-plate branch.** The background is the newsprint-textured ground — a still plate. Census: the ground does not pan, tile, or scroll in any of the 23 frames (texture static while grid/disc move over it). Any background motion would exceed the technique; Plan therefore prices a STILL plate (flat colour + optional static texture via CSS, no pan clock, no tiling). The seamless-tiled-pan branch is rejected with reason: no plate motion exists in the specimen to reproduce.
- **Reserved-band badge note (HQ board practice-2026-11-18-t06-construction-note): NOT-BINDING for T205, with reason.** The note binds labels that SCALE WITH a container (badge text inside a scaling tile needs a reserved band + legibility floor). T205's only label, "VOTE", sits on the ballot box at a fixed design size inside the disc; it does not scale with the grid container, and the converting block carries NO label at all in the specimen. There is no container-scaled label to reserve a band for. The legibility floor still applies to the "VOTE" label via the A6 measured-fit leg (fit row at 360 px stage, ~11 px floor) — priced in the Verify checklist, not via the reserved-band construction.

### 1.7 Codex-observe disposition
**Verdict: CONFIRMED-WITH-GAPS** (return filed verbatim: `item-T205-codex-observe-return.md`; full session raw: `item-T205-codex-observe-return.raw`, 1,480,336 B). **4 findings, ALL APPLIED:**
1. G-T205-1 (window) — confirms the 37.0–46.0 s / 9.0 s cut; adds: bind the segment endpoint to the decoded transition at Execute and record the emitted clip's duration under guards cmd 5 (carried into Execute checklist E1); 36 s frame description corrected in §1.2.
2. G-T205-2 (evidence frame) — confirms hash-identity and that census 40/43/44 s frames are the technique's true evidence; Plan's comparison label cites those instants.
3. G-T205-3 (fill + ballot motion) — APPLIED WITH FIRSTHAND VERIFICATION: fine probes at 43.2/43.4/43.6/43.8 s extracted and viewed by this agent (hashes in §1.2); mechanics revised — paper retract (casting) + graded ~600 ms wash replace my earlier "single-step wash" claim; Plan timings + anchor table updated (§2.1/§2.3: paperRetract phase, fillMs 400→600 graded, fill window 6400–7000 ms).
4. Score binding — family arithmetic recomputed and confirmed (86.5 mean correct); T92 attempt-3 correction applied in §1.5; T59 hash-binding noted UNVERIFIED by the auditor (no action for this item — T59 is not this item's build input).

## §2 PLAN

### 2.1 Parameter table (every §1.3 variable = named CONFIG key; specimen value = default)
| CONFIG key | Default (specimen) |
|---|---|
| content.ballotLabel | "VOTE" |
| content.checkGlyph | "✓" (drawn path) |
| grid.cols / grid.rows | 34 / 18 (census-counted visible lattice in cropped view; builder re-counts at Execute and prints source-vs-built count per A9.3) |
| grid.cellPx / grid.gapPx | 14 / 10 (at 960 px stage width; scaled by stage) |
| blocks[] | [{id:"west", cells:"leftmost column-block 5×11", fillOrder:1}] — ID-keyed, never value-dispatched (T53 cure) |
| blocksToFill | 1 |
| palette.ground | #f4f1ea (newsprint off-white) |
| palette.cell | #111111 |
| palette.outline | #4a4a4a |
| palette.disc | #111111 |
| palette.box / palette.paper | #e8e6e1 / #ffffff |
| palette.connector / palette.fill | #d94f5c (muted red wash, fill at 0.82 alpha behind cells) |
| palette.checkIdle / palette.checkActive | #5b7a99 / #d94f5c |
| timing.outlineDrawMs | 2000 |
| timing.substrateHoldMs | 1000 |
| timing.layoutShiftMs | 600 (census bound: ≤1000) |
| timing.paperGrowMs | 1500 |
| timing.checkDrawMs | 1000 (overlaps paper tail — see anchor table) |
| timing.connectorMs | 1000 |
| timing.paperRetractMs | 300 (ballot drops into box at ~6200 ms, census 43.2 s) |
| timing.fillMs | 600 (graded wash, census 43.4–44.0 s: pale at 6600, full at 7000) |
| timing.convertedHoldMs | 1500 |
| timing.fadeOutMs | 800 |
| direction.conversion | "left-to-right" |
| stage.widthPx | 960 (16:9 stage, phone-stacks in comparison) |

**CONFIG-derived phase schedule (REVISE cure, codex-plan-review finding 2 — replaces any runtime summation; the earlier printed sum was stale at 9,800 ms and is REMOVED):** phases are CONFIG data (`phases[]` with explicit startMs/endMs); stateAt(ms) derives every progress value from this table alone, and the swap derives its moved boundaries from the same table.
| Phase | startMs | endMs | Notes |
|---|---|---|---|
| outlineDraw | 0 | 1900 | substrate draw-on |
| substrateHold | 1900 | 2500 | full-frame hold |
| layoutShift | 2500 | 3000 | split layout COMPLETE at the 3000 ms anchor |
| paperGrow | 3000 | 4500 | ballot paper rises |
| checkDraw | 4000 | 5000 | DECLARED OVERLAP with paperGrow tail — same ballot lifecycle (census 41–42 s) |
| connectorExtend | 5000 | 6200 | bar grows toward grid |
| paperRetract (cast) | 5900 | 6200 | DECLARED OVERLAP with connector tail (census 43.2 s: connector full + paper in) |
| reappear + wash | 6400 | 7000 | wash GATED on connector contact (6200) AND cast completion (6200); graded, full at 7000 |
| convertedHold | 7000 | 8200 | |
| fadeOut | 8200 | 9000 | segment end |
Additional CONFIG bindings (REVISE cure, finding 3): `content.blockLabel = null` (absence is a value) · `ground.textureOn = true` (static CSS texture, still plate) · `geom.discDiameterPx = 340` · `geom.boxScale = 1.0` · `geom.connectorThicknessPx = 26` (endpoints DERIVED: disc right edge → grid left edge at layout) · `layout.side = "disc-left"` (mirror = "disc-right"; renderer must pass a mirrored-layout exercise with no surviving left-edge assumption) · `palette.fillAlpha = 0.82` · `content.checkPath` = SVG path data for the check stroke (not a font glyph) · `blocks[]` membership is machine-readable cell ranges: `{id:"west", colRange:[0,4], rowRange:[3,13], fillOrder:1}` — block size, clip geometry and wash rect DERIVED from ranges + grid pitch; fill order resolved by stable ID + fillOrder, never by value or position literal. Split-view geometry: the lattice is NOT rescaled — native pitch (34×14 + 33×10 = 806 px wide) is CROPPED: the split view translates the full lattice right so its left ~55% viewport shows the western blocks at identical cell size (census: cell size identical between 39 s full view and 40 s split view); the A9.3 count comparison expects the full 34×18 lattice in the full view and the cropped subset in split view, both printed. Init validation (before render): unique block IDs, ranges inside grid bounds, blocksToFill ≤ blocks.length, every phase endMs > startMs and phases within [0, 9000] — invalid CONFIG refuses loudly (T59 cure).

### 2.2 Construction choice
**Chosen: SVG + DOM phase machine (single rAF clock, state function of elapsed ms).** The grid, outlines, disc, ballot box, paper, check path, connector and block wash are all SVG geometry generated from CONFIG — outlines as simplified rectilinear state-block borders (data polygons in CONFIG), cells as generated rects, fill as a wash rect clipped to the block polygon behind the cells. A pure stateAt(ms) function makes every A11 census assertion executable headlessly.
Rejected alternatives (one line each):
- Canvas 2D particle/cell renderer — no particles exist; canvas forfeits DOM text fit measurement for the label and adds nothing.
- CSS keyframes only — phase state cannot be probed by the A11/A13 harness at governed instants; keyframe timelines hide literals.
- Traced bitmap/SVG copy of the census frame — refusal-class (§6.1); also fails the swap test by construction.
- Full US-map fidelity (real state polygons for all blocks) — §8 size violation: the technique is ONE block converting; the full partition is substrate dressing, kept as simplified rectilinear blocks in CONFIG data.

### 2.3 Schedule basis + census-anchor mapping (A7 / A10.2)
**Window-scope line: schedule basis = segment-anchored.** Segment = source 37.0–46.0 s, duration 9.0 s to cut (digest window 37–60 s narrowed per gap G-T205-1, printed as a departure below). buildMs = sourceMs − 37000.

| Census state (source t) | Segment-relative ms | Prescribed state at that instant (stateAt) |
|---|---|---|
| 37.0 outlines partial | 0 | outline draw progress < 1 (≈0.0–0.3), no disc, no fill |
| 39.0 outlines complete | 2000 | outlineProgress = 1, substrate full-frame, fill = 0 |
| 40.0 disc+box, stub paper | 3000 | layout = split, paperProgress ≈ 0.15, connector = 0, fill = 0 |
| 42.0 paper full, check drawn idle | 5000 | paperProgress = 1, checkProgress = 1, check colour = idle, connector = 0 |
| 43.0 connector ~60% | 6000 | connectorProgress ∈ (0.3, 0.9), fill = 0 |
| 43.2 paper retracted | 6200 | paperProgress = 0 (cast), connector = 1, fill = 0 |
| 43.6 wash pale, check red | 6600 | fillProgress ∈ (0.2, 0.8) for block "west", check colour = active |
| 44.0 connector done, block washed, check red | 7000 | connectorProgress = 1, fillProgress = 1 for block "west", check colour = active |
| 45.0 converted hold | 8000 | identical to 7000 state (hold), fade = 0 |
| 46.0 fade underway | 9000 (segment end) | fadeProgress > 0, diagram opacity < 1 |

Departure table (A10.2): (1) window end 60.0 → 46.0 s — census shows 46–60 s is a different technique (portrait carousel); including it would build a whole scene under one technique's name (§8). (2) Layout-shift instant is bounded (3000±500 ms), not frame-exact — census spacing 1 s brackets it between the 39 s and 40 s frames; timing lens risk priced in §2.6. No other departures: every governed instant above is a census state.

### 2.4 Swap design (exact altered values)
Scratch copy with: content.ballotLabel "VOTE" → "CAST" · phases.connectorExtend endMs 6200 → 6950 (duration 1200→1950 via the CONFIG schedule — must move the A11 assertion instants for cast/wash: wash window 6400–7000 → 7150–7750 ms segment-relative, derived from the same schedule) · palette.fill/palette.connector/palette.checkActive #d94f5c → #2563eb (blue; checkActive included per codex-plan-review finding 3). PASS = diagram still reads as conversion (label renders fitted, connector extends at new duration, west block washes blue, check turns blue-active), verified by harness state probes + fit re-measurement. Additional renderer exercise (finding 3): one run with layout.side mirrored + a changed block partition (different colRange) to expose any surviving "west"/left-edge literal.

### 2.5 Purity checks
guards.md cmd 1 grep over recreation.html for `segment\.mp4|source\.webm|source\.mp4|<video|<img|ajavsMbCapY|t52-vote` — zero hits required (in-file `url(#id)` clip references classified per 2026-11-17 precision note, not hits). Asset inventory: recreation loads ZERO external assets (all geometry generated; newsprint ground is CSS colour/gradient, not an image).

### 2.6 Execute + Verify checklists (instruments) · failure points · plateau
**Execute checklist:** (E1) cut segment 37.0–46.0 s (±0.5 s handles trimmed to exact in comparison sync) → segment.mp4 + ffprobe facts filed (guards cmd 5); endpoint bound to the decoded transition per codex-observe G-T205-1 (diagram faintly visible at PTS 46.004, gone by 46.04 seek) and the emitted clip's duration recorded. (E2) build recreation.html: CONFIG top, stateAt(ms) phase machine, SVG generated from CONFIG; source-count vs built-count printed for grid cells + blocks (A9.3), halt on mismatch. (E3) build comparison.html: ORIGINAL | RECREATION side-by-side, one shared control set, recreation clock slaved to video currentTime, phone stacking. (E4) own-checks with RAW output filed from first draft (A9.4): swap (§2.4) · purity grep · node --check + seeded-RNG census (no RNG expected — print NONE-BY-DESIGN) · A11 assertions at every §2.3 governed instant incl. zero-fill probes at 2000/5000 ms (guards cmd 8). (E5) A6 legs: fit-table.md (harness post-fit ink measurement of "VOTE" label at 360 px stage, A12.2 form (i)) + config-census.md (v3.1, nested blocks[] keys resolved). (E6) RECEIPT INDEX reconciled per A13 before any prewave payload.
**Verify checklist:** (V1) swap result with exact altered values + moved assertion instant. (V2) purity grep raw output + asset inventory. (V2b) filled-vs-unfilled block contrast check at 360 px stage (codex-plan-review finding 2): harness ink/colour sampling of the washed block vs an unwashed block at phone scale, limits of unrendered evidence printed. (V3) comparison check (shared controls drive both, durations match 9.0 s, labels correct, phone stack). (V4) jev-prewave fired AFTER legs 1–3 + A6 outputs verbatim in payload (A10.1) — FIRE-WAVE spends the wave, HOLD returns to Execute. (V5) five-lens Codex wave (motion · timing · purity · reusability · readability), returns verbatim under artifact codex/, identical build hash. (V6) consolidation arithmetic recomputed (guards cmd 4): PASS iff avg ≥ 85 AND min ≥ 70.
**Failure-point evaluation:** convergent freeze — LOW: no particle pool; the analogue (static substrate misread as frozen) is priced: substrate hold is only 1000 ms and every later phase moves a distinct element. Intensity collapse — LOW-MED: fill wash behind black cells could wash out at small scale if alpha too low; bound by fill alpha 0.82 + readability lens + fit/ink checks at 360 px. Overlap — LOW: phases are strictly sequential in the phase machine (paper → check → connector → fill); the only overlap is check-draw over paper tail, which the census itself shows. Fitting limits — LOW: one 4-letter label; risk is swap label length ("CAST" same length by design; longer labels priced by fitFont floor in the A6 leg). Render-proof limitation — STANDS (fleet-wide): no browser binary in this seat; lens verdicts are source-based, comparison page is the render surface, printed in scores.md.
**Plateau priced (A2, before Execute):** family average 86.5 (T53/T59/T82 filed). Predicted minimum lens: **reusability** — it is the minimum in both closest siblings (74, 70) on exactly the classes this Plan must defeat (value-dispatched blocks, geometry literals, unapplied CONFIG keys); second risk is **timing** (T92 failed at 76; this item's layout-shift instant is census-bracketed, not frame-exact). If attempt 1 lands ≤86.5, scores.md carries the WHY naming which of these two lenses stuck.

### 2.7 Codex-plan-review disposition
**Verdict: REVISE** (return filed verbatim: `item-T205-codex-plan-review-return.md`; full session raw: `item-T205-codex-plan-review-return.raw`, 230,059 B). **5 findings; disposition: ALL APPLIED** (verdicts advisory per 2026-11-14 ruling; the REVISE cures are adopted as Plan amendments, so Execute opens on the amended Plan):
1. Convergent freeze — CLEARED by construction (no particle pool); no action.
2. Phase exclusivity / schedule — APPLIED: §2.1 now carries ONE CONFIG-derived phase schedule with explicit start/end boundaries (layout complete at the 3000 ms anchor), declared overlaps (checkDraw∩paperGrow, retract∩connector) inside the single ballot lifecycle, wash gated on connector contact + cast completion, A11 probes at 6200 (contact, zero fill) / 6400 (reappear + wash onset) / 6600 (graded) / 7000 (full) — all already in or added to the §2.3 anchor table; stale runtime sum removed; filled-vs-unfilled contrast check added as Verify V2b.
3. Parameterization — APPLIED: §2.1 bindings added (blockLabel null, textureOn, disc/box/connector geometry, layout mirror, fillAlpha, checkPath, machine-readable block ranges with derived clip/endpoints, crop-not-scale split geometry with expected counts, init validation, mirrored/partition renderer exercise); swap now includes palette.checkActive.
4. Bar arithmetic — CONFIRMED: reusability stands as predicted minimum (pooled family mean 86.5 verified); noted: A2's formal floor binds re-attempts against the technique's OWN prior average — §2.6's family WHY is a first-attempt diagnostic and is labeled as such.
5. Size discipline — PASSES at planned scope; E1 endpoint binding already carried.
# RUN — recreation Cycle 037 · Wave 34 · 2026-11-18 (T199 completion under A12.3 + first attempts queue #95–#98: T204 · T205 · T208 · T210, Packet #12)

Opened BEFORE any building (INSTRUCTION §0). Trigger: cron `study-recreation` 2026-11-18 09:20 EST.
Governing: recreation INSTRUCTION.md (§0 wave form incl. completion-wave form Amendment A8 + skeleton-record step · §1–§9 · Amendments A1/A2/A3/A5/A6/A7/A9/A10/A11/A12/A13 + 2026-11-14 ruling: arming=firing, verdicts advisory), bounded_probe_discipline (probes named in advance, capped in code ≤6,000 chars: QUEUE recreation section in capped slices · TECHNIQUES.md OWED lines · Cycle-036 RUN.md in capped slices · per-item scores.md tails · artifact census · HQ.json tail entries · heartbeat tail; breaches: 0).
Pre-action judgment: (1) objective — carry T199 shout scaling (queue #94, Packet #11) to its scored verdict via its authorized A12.3 completion re-fire (cures filed in its scores.md at Wave 33 close), and carry the next four owed first attempts in queue order — #95 T204 dot-grid identity system + withheld title · #96 T205 vote-to-grid conversion diagram · #97 T208 paired dot counts, House stage · #98 T210 threshold grid-map (all Packet #12, Vox "The Electoral College, explained") — each to a scored verdict; 5 items, the §0 cap. (2) Forward movement — the NO-VERDICT pool drops from 4 toward 3 (T199 scored; T190/T196/T197 stay parked, see §0b.1) and the DESCRIBED-OWED pool drops from 11 toward 7. (3) Cost to owner — none; no ask, no schedule change; the T190/T196/T197 authorization ask stands with HQ (consumer named, §0b.1) and is NOT re-asked here. (4) Why now — scheduled firing; A12.3 makes T199's completion the next cycle's first charge, and queue order is the only triage (A3). (5) Body-write — this RUN.md, per-item records + builds under `hidden_files/study/recreations/`, HQ.json skeleton→closed entry (same id `rec-2026-11-18-wave34`), heartbeat skeleton→closed beat 117, verdict-history lines, QUEUE.md rows #95–#98 (+ #94 status update). (6) Order check — this record's §1 prices T199's on-disk state BEFORE any firing (A8) and the fresh pool census before any build; each new item's Phase A record (Observe+Plan + codex-observe + codex-plan-review) is filed and the wave-level exit gates are fired and consumed in §2b BEFORE its build script is written (A9.2); T199's build is a cure of its already-gated plan (Cycles 034–036 §2b stand consumed), so its Execute opens on the filed cure list. Skeleton board/heartbeat entries are written at Plan close (§0 skeleton rule) — this cycle complies, no D-SKELETON.

## §0b — Replan items carried
1. **T199 completion (Cycle 036 §9/§0b.1, first charge, AUTHORIZED under A12.3):** T199's second HOLD landed in Cycle 036, so its first completion re-fire in THIS cycle is authorized by A12.3 as written. Cure list = the four items in its scores.md (census-twin CONFIG-derived receipts · hail-prescription reconciliation printed in the payload mapping section · overlap intersections from positioned bounds · CP11 joined receipt), rebuilt under Amendment A13 (receipt index + reconciliation against guards.md commands 1–8 + the item's whole inherited assertion set + expected CONFIG keys; every line carries its executable receipt or a NOT-DEMANDED line with a governing citation).
2. **T190/T196/T197 — PENDING AUTHORIZATION (consumer: HQ), NOT taken this wave:** each spent its A12.3 completion re-fire in Cycle 036 and that re-fire HOLDed; A12.3 does not expressly renew a re-fire after a completion HOLD (Cycle 036 codex-condense firing 3). No HQ authorization entry stands on this job's board after `rec-2026-11-18-wave33` (board re-read this run: 49 entries, last = wave33). Their slots therefore fill from queue #95 onward, exactly as Cycle 036 §0b.1 prescribed. They remain mid-attempt HERE (A3 §3) and do NOT route to practice.
3. **Practice census-guard proposal** (carried Cycles 034–036): consumer = the next Condense with ≥3 scored items. Price at §9 if ≥3 verdicts land this wave.
4. **Feed standard (Cycle 035 §9.1, followed since):** payload size+tail-verified → one-stream `cat payload | codex exec` (local binary `~/workspace/codex-local/node_modules/.bin/codex`, per TOOLS.md working route; instructions + artifact in ONE stream, never pipe + stdin field together) with redirect → return size+tail-verified → on empty/truncated, ONE re-fire via stdout capture + file-tool filing; a second failure files honestly and stops.
5. **Practice construction note** (HQ board `practice-2026-11-18-t06-construction-note`, sent): reserved-band badge treatment for container-scaled labels — consumer is recreation's next first attempt whose labels scale with a container. Priced for this wave at §2 per item; Packet #12's grid/diagram items carry tally labels — the item whose labels scale with its container prices it in its Phase A record, the others print NOT-BINDING with reason.
6. Standing forms (A10/A11/A12/A13): every new item's schedule table prints its census-anchor mapping (A10.2); §1 files a frame census at ≤2 s spacing with full SHA-256 per item (A10.3); jev-prewave payloads carry both A6 leg outputs verbatim (A10.1); every build-record carries the A13 RECEIPT INDEX reconciled before payload assembly; fit evidence is (i) harness post-fit ink measurement or (ii) rendered measurement with a named stand-in font, never a character-width model (A12.2).

## §1 — Observe (completion form for T199 per A8; first-attempt form for T204/T205/T208/T210 — per-item detail in each item's Phase A record in this run directory)

**Wave manifest: 5 items** — 1 completion (queue #94 T199, Packet #11) + 4 new first attempts (queue #95–#98, all Packet #12: Vox "The Electoral College, explained", YouTube ajavsMbCapY, 488.301 s; digest at `hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/`; adopted WITH GAPS by video-digestion Cycle-019; registered by style-library Cycle-019).
Consumer (T199): word-animation containers. Consumer (Packet #12 items): diagram containers (the DLC assembler's diagram/count-board surfaces) — T204 additionally the opening/identity surface. In every build the technique's text/marks ARE the subject, not captions (INSTRUCTION §3.2/§6.5).

### Pool census (fresh this run, 2026-11-18 09:20 EST)
1. QUEUE.md RECREATION QUEUE: rows #1–#94 filed. #94 T199 IN PROGRESS NO VERDICT (completion authorized, this wave). Rows #95+ do not yet exist as rows — entered by recreation at this wave's close from the style-library register (standing precedent).
2. Catalogue register (style-library TECHNIQUES.md, read this run; Cycle-020 state): 239 techniques · DESCRIBED-OWED 12 at Cycle-036 read (queue #94 T199 · #95 T204 · #96 T205 · #97 T208 · #98 T210 · #99 T212 · #100 T218 · #101 T219 · #102 T227 · #103 T232 · #104 T233 · #105 T238); style-library Cycle-020 (closed after Wave 33) registered Packet #13 and prints catalogue 239 (DESCRIBED 146 · IN PROGRESS 15 · RECREATED 78 on its accounting, which includes practice re-attempt moves). This wave takes #94 (completion) + #95–#98; #99–#105 (7 items) stand for later waves.
3. Artifact census (binding): 94 directories under `hidden_files/study/recreations/` (directory listing this run) — 90 with verdicts + 4 NO VERDICT (T190 · T196 · T197 · T199). The four new items' directories do not yet exist; created at their Plans.
4. Ownership split (A3 §3): all five items are first attempts / a mid-attempt completion → this job. All other IN PROGRESS techniques are practice's re-attempt pool. T190/T196/T197 stay parked PENDING AUTHORIZATION (§0b.2) — printed, not silently skipped.

### Per-item state (A8 pricing for the completion item; catalogue lines for the new items)
- **T199 — shout scaling inside a real scene** (`T199-shout-scaling-in-real-scene/`): build on disk recreation.html sha256 `edad0b81…` (14,730 B at Wave 33), UNCHANGED across both Wave-33 prewave firings (its cure round touched records only). Filed: segment.mp4 (9.000 s, source 66.5–75.5 s) · comparison.html · build-record.md · fit-table.md · config-census.md · plan-amendment-cycle036.md · jev-prewave ×2 HOLD (both bind this build). NOT present: lens returns · verdict. Completion charge (scores.md cure list, verbatim pricing in §0b.1): restructure the harness so every census twin is a CONFIG expression with CONFIG-derived receipts incl. a timing swap that moves a twin · print the hail-prescription reconciliation in the payload mapping section (amendment governs over the census-anchor table wording) · overlap rows as intersections from positioned peak + neighbour ink bounds · CP11 as ONE joined receipt (CONFIG expression + band sample together). Then: fresh own-checks + A6 legs on the (record-cured; build changes only if a cure requires it — any build change re-binds all payloads to the new hash) + A13 receipt index reconciled + ONE jev-prewave re-fire (authorized, A12.3) → five-lens wave on FIRE-WAVE only.
- **T204 — dot-grid identity system + withheld title** (P12; TECHNIQUES.md: "the dot field assembles and the title lands across it — the assembly order is the claim (clip-cited)"; container: openings + diagrams): no directory, no prior calls. Mechanics/timestamps/evidence frames priced in its Phase A record from the Packet #12 digest section + firsthand frame census (A10.3) before Plan.
- **T205 — vote-to-grid conversion diagram** (P12; "a grid fills in blocks, left to right, as conversion"; container: diagrams): same Phase A charge.
- **T208 — paired dot counts, House stage** (P12; "dots land in grids timed to the spoken count (clip-cited)"; container: diagrams): same Phase A charge.
- **T210 — threshold grid-map (the road to 270)** (P12; "state outlines draw themselves over the tally grid and regions accumulate toward the 270 post (clip-cited)"; container: diagrams): same Phase A charge.

### Standing guidance dispositions (restated for this cycle, per A8)
A13 receipt index + reconciliation binds every item (see §0b.6). A1.2 runtime text sampling binds typography constructions that sample config-rendered text; the Packet #12 items are grid/diagram constructions — each Phase A record prices its applicability with reasoning in its Observe gate-out (A9.5). A5 flow-field + Owner Cures bind particle fields only; no item this wave is a particle field unless its Phase A census shows one (priced per item there). A9.1: any moving background plate is priced in the item's parameter table (seamless tiled pan where a plate IS the technique; a still plate where motion exceeds the technique). A9.6: every subject-shaping value is CONFIG data in all five items. A11: every census checkpoint maps to an executable assertion with a CONFIG-derived instant + an A12 receipt.

## §2 — Plan (summary; per-item authority = each item's Phase A record in this run directory)
- **T199 (completion):** parameter table, construction, verification plan and checklists stand as filed in Cycles 034–036 (item record + `plan-amendment-cycle036.md`) AS AMENDED by the scores.md cure list — consumed, not re-authored (A8). Execute checklist = the four cures (§0b.1) + fresh own-checks (swap · purity · syntax, raw output filed) + A6 legs re-filed + A13 receipt index reconciled + ONE jev-prewave re-fire (payload carries build-record + CONFIG + packet section + guards list + both A6 outputs verbatim + the binding census-anchor mapping, A10.1) + five-lens wave on FIRE-WAVE only (identical-hash binding; timing payload carries the census-anchor mapping). Bar (standing §2.3): five-lens average ≥85 AND no lens <70. Schedule basis stands: segment-anchored (segment = source 66.5–75.5 s; buildMs = segmentTimeMs − 500).
- **T204/T205/T208/T210 (new):** each item's Phase A record is its Plan authority: parameter table (every §1 variable a named CONFIG key, specimen values as defaults) · construction choice with rejected alternatives · schedule basis + census-anchor mapping (A7/A10.2 — segment-anchored, t=0 allocation, or two-act, named on the window-scope line) · swap design (different content + one timing + one palette value, exact values) · purity checks · Execute + Verify checklists as instruments · failure-point evaluation (priced from this job's record: convergent freeze · intensity collapse · phrase/state overlap · fitting limits · render-proof limitation) · plateau priced in Plan (A2: family/prior average + stuck-lens hypothesis stated before Execute). Per-item codex-observe + codex-plan-review fire in Phase A; the wave-level jev-observe-exit + jev-plan-exit fire on the four Phase A records before any build script is written (§2b).
- **Wave gate form for this cycle:** jev-observe-exit + jev-plan-exit fire for the four new items; for T199 they print NOT-DEMANDED-BY-FORM — its Observe/Plan gates fired and were consumed in Cycles 034–036, and A8 consumes filed gate returns, never re-fires them; T199's demanded gate is the A12.3 prewave re-fire. codex-observe + codex-plan-review fire per item for the four new items in Phase A; for T199, NOT-DEMANDED-BY-FORM (consumed Cycles 034/036, returns on file). codex-condense fires at this cycle's Condense, unconditionally.

## §2b — Wave gate dispositions
_(Filled after the four Phase A records land and both gates fire; Execute for new items opens only on this section standing consumed. T199 proceeds in parallel on Cycle 036's consumed §2b.)_

## §3 — Execute
_(Per item, on landing.)_

## §5 — Verify
_(Seat-verified at close.)_

## §9 — Condense
_(At close.)_

## §7 — Faithfulness trace
_(At close.)_

warning: Codex could not find bubblewrap on PATH. Install bubblewrap with your OS package manager. See the sandbox prerequisites: https://developers.openai.com/codex/concepts/sandboxing#prerequisites. Codex will use the bundled bubblewrap in the meantime.
warning: Loaded only 32768 of 99110 bytes from `/home/hatch/AGENTS.md` in environment `local` under the 32768-byte project instruction budget. Trim your project instructions to fit the budget. If you need to keep them all, increase `project_doc_max_bytes`.
warning: Skipped project instructions in environment `local` starting at `/home/hatch/workspace/AGENTS.md` because the 32768-byte budget was exhausted. Trim your project instructions to fit the budget. If you need to keep them all, increase `project_doc_max_bytes`.
warning: Combined user instructions use 37824 bytes, above the 32768-byte `project_doc_max_bytes` setting. The total includes global and thread instructions. The limit applies only to project files.
codex
I’ll check the Wave 34 files for T205 and score its Observe record against the six gate criteria.
exec
/bin/bash -lc 'pwd; ls -a; ls -a ..; rg --files | head -45' in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
 succeeded in 0ms:
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
.
..
.agents
.aws
.codex
.git
AGENTS.md
RUN.md
census
hdr-obs-T204.txt
hdr-obs-T205.txt
hdr-obs-T208.txt
hdr-obs-T210.txt
hdr-plan-T204.txt
hdr-plan-T205.txt
hdr-plan-T208.txt
hdr-plan-T210.txt
item-T204-codex-observe-return.md
item-T204-codex-plan-review-return.md
item-T204-observe-plan.md
item-T205-codex-observe-return.md
item-T205-codex-observe-return.raw
item-T205-codex-plan-review-return.md
item-T205-codex-plan-review-return.raw
item-T205-observe-plan.md
item-T208-codex-observe-return.md
item-T208-codex-plan-review-return.md
item-T208-observe-plan.md
item-T210-codex-observe-return.md
item-T210-codex-plan-review-return.md
item-T210-observe-plan.md
jev-observe-exit-T204-return.raw
jev-observe-exit-T205-return.raw
payload-observe-exit-T204.txt
payload-observe-exit-T205.txt
payload-observe-exit-T208.txt
payload-observe-exit-T210.txt
payload-plan-exit-T204.txt
payload-plan-exit-T205.txt
payload-plan-exit-T208.txt
payload-plan-exit-T210.txt
.
..
2026-11-13-cycle-001-founding
2026-11-13-cycle-002-t15-particle-typography
2026-11-14-cycle-003-wave-1
2026-11-14-cycle-004-wave-2
2026-11-14-cycle-005-wave-3
2026-11-14-cycle-006-wave-4
2026-11-14-cycle-007-wave-5
2026-11-14-cycle-008-wave-6
2026-11-14-cycle-009-wave-7
2026-11-15-cycle-010-wave-8
2026-11-15-cycle-011-wave-9
2026-11-15-cycle-012-wave-10
2026-11-15-cycle-013-wave-11
2026-11-15-cycle-014-wave-12
2026-11-15-cycle-015-wave-13
2026-11-15-cycle-016-wave-14
2026-11-15-cycle-017-wave-15
2026-11-16-cycle-018-wave-15-retake
2026-11-16-cycle-019-wave-16
2026-11-16-cycle-020-wave-17
2026-11-16-cycle-021-wave-18
2026-11-16-cycle-022-wave-19
2026-11-16-cycle-023-wave-20
2026-11-16-cycle-024-wave-21
2026-11-16-cycle-025-wave-22
2026-11-17-cycle-026-wave-23
2026-11-17-cycle-027-wave-24
2026-11-17-cycle-028-wave-25
2026-11-17-cycle-029-wave-26
2026-11-17-cycle-030-wave-27
2026-11-17-cycle-031-wave-28
2026-11-17-cycle-032-wave-29
2026-11-17-cycle-033-wave-30
2026-11-18-cycle-034-wave-31
2026-11-18-cycle-035-wave-32
2026-11-18-cycle-036-wave-33
2026-11-18-cycle-037-wave-34
AGENTS.md
jev-observe-exit-T205-return.raw
jev-observe-exit-T204-return.raw
payload-plan-exit-T210.txt
hdr-plan-T210.txt
payload-observe-exit-T210.txt
hdr-obs-T210.txt
payload-plan-exit-T208.txt
hdr-plan-T208.txt
payload-observe-exit-T208.txt
hdr-obs-T208.txt
payload-plan-exit-T205.txt
hdr-plan-T205.txt
payload-observe-exit-T205.txt
hdr-obs-T205.txt
payload-plan-exit-T204.txt
hdr-plan-T204.txt
hdr-obs-T204.txt
payload-observe-exit-T204.txt
item-T204-codex-plan-review-return.md
item-T205-codex-plan-review-return.md
item-T210-codex-plan-review-return.md
item-T204-observe-plan.md
item-T205-codex-plan-review-return.raw
item-T205-codex-observe-return.md
item-T204-codex-observe-return.md
item-T208-codex-plan-review-return.md
item-T210-codex-observe-return.md
item-T208-codex-observe-return.md
item-T205-codex-observe-return.raw
item-T208-observe-plan.md
item-T210-observe-plan.md
item-T205-observe-plan.md
AGENTS.md
RUN.md
census/T205-census-43.8s.jpg
census/T205-census-43.6s.jpg
census/T205-census-43.4s.jpg
census/T205-census-43.2s.jpg
census/T208-102.5s.jpg
census/T208-94.5s.jpg
census/T208-94.0s.jpg
census/T204-census-src36.2s.jpg
census/T204-census-src36.0s.jpg
census/T204-census-c6.9s.jpg
census/T204-census-c6.8s.jpg

exec
/bin/bash -lc "realpath ../../../..; ls ../../; cat hdr-obs-T205.txt; cat item-T205-codex-observe-return.md; rg -n 'T205|RECREATION QUEUE|#94' ../../QUEUE.md; rg -n '"'^#{1,4} '"' item-T205-observe-plan.md RUN.md; ls census | rg T205 | wc -l" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
 succeeded in 77ms:
/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files
AGENTS.md
HQ.json
INSTRUCTION.md
OBJECTIVE.md
guards
runs
verdict-history.md
TASK: You are the jev-observe-exit judge for the recreation job, Wave 34. Judge ONLY item T205 from the record below, per the call definition that follows. Return ONE verdict for T205 (ADVANCE, ADVANCE-WITH-GAPS, or RETURN-TO-OBSERVE) with the six dimension scores (0-1), the primary classification if returned, and named gaps if any. End with a BODY-WRITE: line naming what your return files.

# codex-observe return — T205 (Wave 34) — filed verbatim (final answer; full session raw at item-T205-codex-observe-return.raw)

**CONFIRMED-WITH-GAPS — Wave 34 can Observe T205 from the archived source and the filed family scores. Packet #12 needs corrections to its window, evidence frame, and motion description.**

1. **G‑T205‑1 · Source window.** The digest and register agree on 37–60 s, a 23 s span. Direct seeks into `source.webm` show the preceding title at the 36 s sample, state outlines drawing at 37 s, and the conversion diagram still faintly visible at source PTS 46.004 s. The first frame returned by a 46.04 s seek shows only the portrait and ground. A 37.0–46.0 s cut is 9.0 s and captures the conversion and most of its dissolve. If the cut needs to show the diagram fully gone, bind its endpoint to the decoded transition and record the emitted clip’s duration under guard command 5. The filed 36 s census image also shows the title, so its description as outlines drawing needs correction. [Digest §3 T04](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/digest.md:43) · [Register T205](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library/techniques-diagrams.md:345) · [Census §1.2](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34/item-T205-observe-plan.md:14) · [Guard command 5](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/guards/guards.md:16)
2. **G‑T205‑2 · Evidence frame.** The JPEG cited by both records is byte-identical to the filed 52 s census JPEG. A direct source seek at 52 s shows three presidential portraits. The 40, 43, and 44 s frames show the ballot and grid before connection, the extending connector, and the filled block. Those three frames document the operation the catalogue describes. [Digest evidence](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/digest.md:47) · [Register evidence](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library/techniques-diagrams.md:348) · [Census §1.2](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34/item-T205-observe-plan.md:14)
3. **G‑T205‑3 · Fill and ballot motion.** Direct source samples show one state block taking on a red wash behind persistent black squares. The wash is pale at the 43.6 s seek and stronger at 43.8 and 44.0 s, so the one-second census brackets a graded change. The ballot paper also retracts out of view at the 43.2 s seek and reappears high in the disc at 43.4 s. Observe should carry these intermediate states and bracket their timing before treating the wash and check recolour as a single synchronized step. [Digest mechanics](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/video-digests/2026-11-17-yt-ajavsmbcapy/digest.md:45) · [Register mechanics](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library/techniques-diagrams.md:347) · [Filed motion findings and gap](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34/item-T205-observe-plan.md:43)
4. **Prior attempts and score binding.** T205 and packet siblings T204, T208, and T210 have no prior attempt directories or verdict rows in the records checked, consistent with the wave manifest. For the scored family, every governing score below has a filed lens return. The recomputed vectors agree with `scores.md` and the relevant recreation or practice history rows. [Wave 34 manifest](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34/RUN.md:15) · [Recreation verdict history](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/verdict-history.md:41) · [Practice verdict history](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/practice/verdict-history.md:68)

   | Attempt | Filed scores in motion, timing, purity, reusability, readability order | Lenses | Recomputed mean | Min | Verdict |
   |---|---|---:|---:|---:|---|
   | [T53 A1](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T53-ballot-arc-count-board/scores.md:6) | 92 + 88 + 94 + 74 + 80 | 5 | 428/5 = 85.6 | 74 | PASS |
   | [T59 A1](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T59-column-cards/scores.md:6) | 100 + 84 + 96 + 70 + 84 | 5 | 434/5 = 86.8 | 70 | PASS |
   | [T82 A1](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T82-countable-multitude/scores.md:8) | 80 + 89 + 100 + 80 + 87 | 5 | 436/5 = 87.2 | 80 | PASS |
   | [T92 A1](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T92-data-beats/scores.md:9) | 84 + 76 + 90 + 80 + 82 | 5 | 412/5 = 82.4 | 76 | FAIL |
   | [T92 A2](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T92-data-beats/scores.md:42) | 77 + 87 + 84 + 77 + 86 | 5 | 411/5 = 82.2 | 77 | FAIL |
   | [T92 A3](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T92-data-beats/scores.md:89) | 82 + 95 + 100 + 86 + 88 | 5 | 451/5 = 90.2 | 82 | PASS |

   The 86.5 mean is correct to one decimal for the three named passes T53, T59, and T82, using `(85.6 + 86.8 + 87.2) / 3`. T92’s 82.4 and timing 76 describe attempt 1. Its current filed disposition is RECREATED after attempt 3, with timing 95. T53’s five return hashes match its HTML. All five saved payloads per attempt match the recorded build for T82 and T92. T59’s five returns support its scores, and the current HTML matches the hash in `scores.md`. The claim that all five T59 firings used those exact bytes remains **UNVERIFIED** because the returns give no hash and no saved final lens payloads were found in its `codex/` directory. [Filed family summary](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34/item-T205-observe-plan.md:55) · [T92 register disposition](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library/techniques-diagrams.md:164) · [T59 build claim](/home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study/recreations/T59-column-cards/scores.md:2)

**Limits.** `ffprobe` reported 488.301 s for the archived source. Targeted frame seeks establish the sampled states above. Exact motion onset and duration between samples remain unmeasured. The emitted `segment.mp4` is **NOT ASSESSED** at this pre-cut stage.

Body-write: none (read-only run)
rg: ../../QUEUE.md: IO error for operation on ../../QUEUE.md: No such file or directory (os error 2)
RUN.md:1:# RUN — recreation Cycle 037 · Wave 34 · 2026-11-18 (T199 completion under A12.3 + first attempts queue #95–#98: T204 · T205 · T208 · T210, Packet #12)
RUN.md:7:## §0b — Replan items carried
RUN.md:15:## §1 — Observe (completion form for T199 per A8; first-attempt form for T204/T205/T208/T210 — per-item detail in each item's Phase A record in this run directory)
RUN.md:20:### Pool census (fresh this run, 2026-11-18 09:20 EST)
RUN.md:26:### Per-item state (A8 pricing for the completion item; catalogue lines for the new items)
RUN.md:33:### Standing guidance dispositions (restated for this cycle, per A8)
RUN.md:36:## §2 — Plan (summary; per-item authority = each item's Phase A record in this run directory)
RUN.md:41:## §2b — Wave gate dispositions
RUN.md:44:## §3 — Execute
RUN.md:47:## §5 — Verify
RUN.md:50:## §9 — Condense
RUN.md:53:## §7 — Faithfulness trace
item-T205-observe-plan.md:1:# Item T205 — vote-to-grid conversion diagram · Phase A (Observe + Plan) · Wave 34 / Cycle 037
item-T205-observe-plan.md:7:## §1 OBSERVE
item-T205-observe-plan.md:9:### 1.1 Catalogue mechanics (cited)
item-T205-observe-plan.md:14:### 1.2 Motion census (A10.3) — firsthand, ≤2 s spacing, 23 frames
item-T205-observe-plan.md:54:### 1.3 Variables (§1.3 — every property that could change without changing the technique)
item-T205-observe-plan.md:57:### 1.4 Consumer
item-T205-observe-plan.md:60:### 1.5 Prior / family scores read (filed scores only)
item-T205-observe-plan.md:67:### 1.6 Standing-guidance dispositions (A9.5 — reasoning inline)
item-T205-observe-plan.md:73:### 1.7 Codex-observe disposition
item-T205-observe-plan.md:80:## §2 PLAN
item-T205-observe-plan.md:82:### 2.1 Parameter table (every §1.3 variable = named CONFIG key; specimen value = default)
item-T205-observe-plan.md:126:### 2.2 Construction choice
item-T205-observe-plan.md:134:### 2.3 Schedule basis + census-anchor mapping (A7 / A10.2)
item-T205-observe-plan.md:152:### 2.4 Swap design (exact altered values)
item-T205-observe-plan.md:155:### 2.5 Purity checks
item-T205-observe-plan.md:158:### 2.6 Execute + Verify checklists (instruments) · failure points · plateau
item-T205-observe-plan.md:164:### 2.7 Codex-plan-review disposition
27

exec
/bin/bash -lc "find ../../../.. -name QUEUE.md; cat RUN.md item-T205-observe-plan.md >/dev/null; rg -n 'T53 |T59 |T82 |T92 |T205 ' ../../verdict-history.md ../../../practice/verdict-history.md; sed -n '43,48p' ../../../../study/video-digests/2026-11-17-yt-ajavsmbcapy/digest.md; sed -n '345,350p' ../../../../study/style-library/techniques-diagrams.md; rg -n 'A1|A3|A5|firsthand' ../../INSTRUCTION.md | head -22" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
 succeeded in 4721ms:
../../../../supervision/codex-runs/QUEUE.md
../../../../study-jobs/QUEUE.md
../../verdict-history.md:41:| 2026-11-15 | cycle-012-wave-10 | T53 ballot-arc count board, attempt 1 | 92 · 88 · 94 · 74 · 80 | 85.6 | PASS → RECREATED (tier move: style-library) | `hidden_files/study/recreations/T53-ballot-arc-count-board/scores.md` + codex/ returns |
../../verdict-history.md:45:| 2026-11-15 | cycle-012-wave-10 | T59 column cards, attempt 1 | 100 · 84 · 96 · 70 · 84 | 86.8 | PASS → RECREATED (tier move: style-library) | `hidden_files/study/recreations/T59-column-cards/scores.md` + codex/ returns |
../../verdict-history.md:53:| 2026-11-15 | cycle-014-wave-12 | T82 countable multitude, attempt 1 | 80 · 89 · 100 · 80 · 87 | 87.2 | PASS → RECREATED (tier move: style-library) | `hidden_files/study/recreations/T82-countable-multitude/scores.md` + codex/ returns |
../../verdict-history.md:57:| 2026-11-15 | cycle-015-wave-13 | T92 data beats, attempt 1 | 84 · 76 · 90 · 80 · 82 | 82.4 | FAIL → IN PROGRESS (attempt 2: practice) | `hidden_files/study/recreations/T92-data-beats/scores.md` + codex/ returns |
../../../practice/verdict-history.md:68:| 2026-11-17 | 2026-11-17-cycle-020-wave-19 | T92 | 2 | 82.4 | 82.2 | -0.2 | FAIL (non-beating; floor met, min 77) | scores.md Attempt 2 WHY (plateau NAMED, seat judging: plan-premise Table H lead row vs measured HUD 2037 priced convergently by motion+timing; validation-depth gaps by purity+reusability; timing cure itself collected 76→87) |
../../../practice/verdict-history.md:74:| 2026-11-17 | 2026-11-17-cycle-021-wave-20 | T92 | 3 | 82.2 | 90.2 | +8.0 | PASS (RECREATED hand-off filed practice-2026-11-17-t92-a3) | — (beat) |
### T04 — Vote-to-grid conversion diagram
- **Timestamps:** 0:37–1:00
- **Mechanics:** The ballot icon connects by a red bar to a grid of squares that fills red in blocks — a vote entering at left exits as allocated blocks at right. Operation: dot/square fill as conversion, drawn left-to-right in reading order.
- **Why it works:** The film's central abstraction (your vote is converted, not counted) is drawn as a literal machine before any state is named.
- **Evidence:** ev/t52-vote-to-grid.jpg (ballot icon → filling grid, 52 s)

### T205 — Vote-to-grid conversion diagram (P12 T04) ◆ — OWED #96
- Tier: **DESCRIBED — OWED #96**
- Mechanics: the ballot icon connects by a red bar to a grid of squares that fills red in blocks — a vote entering at left exits as allocated blocks at right. Operation: dot/square fill as conversion, drawn left-to-right in reading order. The film's central abstraction (your vote is converted, not counted) drawn as a literal machine before any state is named.
- Feeds: diagram — P12 @ 0:37–1:00 — ev/t52-vote-to-grid.jpg

### T206 — Support-trend chart (Gallup line) (P12 T05)
7:- **Fan-out:** each item's build + Codex wave is an independent agent task — the cycle spawns one subagent per item with the item's full §1–§5 charge; the seat coordinates, verifies each item's filings firsthand (scores.md arithmetic, purity of the filed build), and closes the cycle record. T15's attempt is the measured unit: one bounded build + four Codex runs, not a 6-hour job.
17:1. Read the technique's catalogue entry (packet digest.md section + TECHNIQUES.md entry): mechanics, timestamps, why-it-works, evidence frames. View the evidence frames firsthand — the recreation is built from the technique's mechanics, and a mechanic the builder has not seen is a guess.
22:- **RESOURCE LIST (read in this order, every wave):** (1) `../QUEUE.md` recreation-queue section — current positions, OWED status, ownership split (first attempts here; scored techniques route to practice) · (2) the item's packet section in its digest.md + TECHNIQUES.md entry (style-library) · (3) the item's prior scores.md + codex/ returns + `verdict-history.md` lines, including named family siblings (e.g. T16 reads T15's filings) · (4) the evidence frames + archived source segment in motion · (5) this file's Amendments A1/A3/A5 guidance for the item's family (flow-field model + Owner Cures 1–2 for particle fields; runtime text sampling for typography) · (6) `guards/guards.md` command list.
39:4. **Self-verify before Codex** (§5 legs 1–3); a build that fails its own swap test does not spend a Codex wave. Self-verify files the A12 executable receipts (§5 leg 3b) in the build-record's first draft; a build-record missing receipts does not spend the prewave call either.
49:3b. **Pre-wave Jev gate:** `guards/jev-prewave.md` judges the build record after legs 1–3 and before the wave (leg 4): FIRE-WAVE spends the wave; HOLD returns the build to Execute with its classification and the wave moves to its next item. **Receipt readiness check (Amendment A12, 2026-11-18 — performed by the builder BEFORE the payload is assembled):** every A11 checkpoint in the build-record carries its executable receipt — the harness command or run, the CONFIG expression evaluated, and the raw result from the build under review; for a CONFIG timing swap the receipt shows the changed evaluation instant. A checkpoint with a claim but no receipt returns the record to the builder before the call is spent. **Receipt-index reconciliation (Amendment A13, 2026-11-18):** the build-record carries a RECEIPT INDEX enumerating (a) every guards.md command applicable to the item and (b) every A11 assertion for the item; before the payload is assembled the builder reconciles the index against the applicable guard commands, the item's planned A11 assertions, and — for a completion or re-attempt — the assertion sets established in the filed prior harnesses and their amendments, and, for census receipts, against the build's expected CONFIG keys (nested/array keys included). Every index line carries its executable receipt or an explicit NOT-DEMANDED line whose disposition cites the governing plan or guard; a missing expected line, an unsupported exclusion, or a line with neither returns the record to the builder. A receipt is valid only if it carries the evidence its assertion requires: for each CONFIG-derived input, the CONFIG expression and its evaluated value; for each check, the raw observed result. A populated receipt lacking that evidence returns the record to the builder on the same form. This check is a readiness check for the mandatory call, not a gate on it: the call still fires at its step on every cycle, and a cycle in which it did not fire prints INCOMPLETE under the standing firing ruling. The deliverable-class judgment for this job IS the five-lens scoring wave (leg 4, defined in `guards/codex-scoring-wave.md`) — no separate jev-verify file exists, by design: the wave's per-lens verdicts + leg 5's mechanical consolidation are the deliverable gate, and a second Jev over the same deliverable would duplicate them.
50:4. **Codex scoring wave (external):** FIVE reviewers, distinct lenses — **motion fidelity · timing/tempo match · construction purity · reusability/parameterization · readability** (the fifth lens is permanent since 2026-11-14, Amendment A5: formed-word legibility against the particle field — word-vs-reserve intensity separation present and sufficient · the word readable at phone size during its hold · background particles never competing at word intensity). Each run: instruction file opens with the standing header (consumer + the decision the run prices; the working record it builds from and writes to; the return must name what it wrote into the body), carries the technique's catalogue mechanics + the recreation's full source, and returns ONE lens score (0–100) + priced findings. Feeding follows the fleet's Codex rule (instructions + artifact in ONE stream; never pipe + stdin field together). Returns are filed verbatim under the artifact's `codex/` directory.
68:## Amendment A1 (2026-11-13, from Cycle-002 — T15 attempt 1)
75:## Amendment A3 (2026-11-13, owner's refinement to the recreation law — UNIVERSAL obligation)
77:2. **Tier accounting consequence:** a motion-graphic technique at DESCRIBED prints as **OWED + its queue position** (style-library Amendment A3 enforces the face).
80:## Amendment A5 (2026-11-14, the owner's own read on T15 attempt 1 — two cures + the fifth lens)
113:5. **Gate-out reasoning inline (A9.5).** A gate-out section carries its dispositions' reasoning inline — the construction-precedent dispositions (A1 §2's scope, A5's applicability) are stated with their reasoning in the Observe gate-out itself, not only in a later Plan section the gate judge is not fed. (Founding miss: Cycle 023's jev-observe-exit GUIDANCE-DROPPED return — the reasoning stood in §2 while the judged record was §1.)
116:## Amendment A10 (2026-11-17, Cycle 026 Condense — the three bundled restatements whose named consumer was this Condense)
118:1. **Prewave payload completeness (A10.1 — restates §5 leg 3b at instruction level; operative since Cycle 024 in jev-prewave.md's context contract).** The jev-prewave payload for every item MUST carry that item's A6 leg outputs (fit-table.md + config-census.md) verbatim. A payload lacking either leg's output is a feeder defect printed in the wave's §5; a prewave verdict priced without them does not discharge leg 3b.
119:2. **Plan census-anchor mapping (A10.2 — restates the Cycle-025 Plan form at instruction level).** Every schedule table in a wave's Plan prints its census-anchor mapping: the window-start offset (segment-anchored or t=0 allocation), the census states in segment-relative ms, and the prescribed state at each instant the table governs. A schedule that departs from its census prints its departure table beside it (the Wave-22 defect class: census printed in §1, schedule derived from other numbers, the gap found only by the timing lens at verdict cost). Plan-exit judges price an absent mapping or departure table as REVISE.
120:3. **Motion-census Observe form (A10.3 — restates the Cycle-025 Observe form at instruction level).** §1 files a frame census at ≤2 s spacing across each item's transitions (seat-extracted, viewed firsthand by the seat), full SHA-256 per frame, with the motion findings stated per item: which instants carry motion, which are holds, and what changes between census states. Findings priced from a digest's prose alone, without the census, do not close Observe.
122:## Amendment A11 (2026-11-17, Cycle 028 Condense — census-checkpoint assertions; adopting the practice job's census-checkpoint note, practice Cycle 019 Condense, carried as a candidate by Cycle 027 §9.1 and adopted here on three independent demonstrations)
125:## Amendment A12 (2026-11-18, Cycle 035 Condense — the ASSERTED-CHECKS pattern: T190 · T192 · T196 · T197 prewave HOLDs in one wave; T195's cure path as the positive demonstration)
126:1. **Receipt form (operative step: §5 leg 3b's readiness check, referenced from §3 step 4).** Every A11 assertion in a build-record files its EXECUTABLE RECEIPT beside the claim — the harness command or run, the CONFIG expression evaluated, and the raw result from the build under review; for a CONFIG timing swap the receipt shows the changed evaluation instant. A9.4 already required raw output; this clause names the receipt's three parts and wires the check into the prewave step itself. A build-record whose assertions carry claims without receipts is incomplete at the builder's own gate: jev-prewave is not spent on it (the call's firing obligation is unchanged — the readiness check precedes payload assembly, and an unfired call still prints the cycle INCOMPLETE).
128:3. **The two-HOLD stop + completion re-fire.** The two-HOLD stop stands unchanged: a second HOLD files NO VERDICT with cures priced, and the wave is not fired on that build. The item's completion — cures filed, fresh own-checks + A6 legs on the cured build, then ONE jev-prewave re-fire, and on FIRE-WAVE the five-lens wave bound to that build — is the next recreation cycle's first charge in completion form (§0 A8). This clause explicitly authorizes that single completion-cycle re-fire so A8's consume-don't-refire rule (which binds gate returns and hash-bound payloads of the ORIGINAL attempt) is not read as barring it: the re-fire judges a cured build that no prior return has seen. The item does not route to practice unscored (A3 §3: a technique mid-attempt here finishes its verdict here).
130:## Amendment A13 (2026-11-18, Cycle 036 Condense — the receipt-completeness pattern: T190 · T196 · T197 · T199 prewave HOLDs in one wave; T192's 1.0-clearance as the positive demonstration; re-encoded under codex-condense REVISE before landing)
131:1. **Receipt index + reconciliation (operative step: §5 leg 3b's readiness check, extended in the same landing).** Every build-record carries a RECEIPT INDEX enumerating (a) every guards.md command applicable to the item (1 purity · 2 swap · 3 syntax + seeded-RNG census · 4 arithmetic, seat-side · 5 segment binding · 6 fit leg · 7 census leg · 8 census-anchor probes where a zero-state anchor stands) and (b) every A11 assertion for the item. Readiness REQUIRES the reconciliation, not just the index: against the applicable guard commands, the item's planned A11 assertions, and — for a completion or re-attempt — the assertion sets established in the filed prior harnesses and their amendments; census receipts reconcile against the build's expected CONFIG keys (nested/array keys included — founding miss: T190's `scenes[].id` row). Every line carries its executable receipt or an explicit NOT-DEMANDED line whose disposition cites the governing plan or guard; a missing expected line, an unsupported exclusion, or a line with neither is incomplete at the builder's own gate: jev-prewave is not spent on it (the firing obligation is unchanged — the readiness check precedes payload assembly, per A12.1's form).

exec
/bin/bash -lc "rg -n 'RECREATION QUEUE|94.*T199|96.*T205' ../../../QUEUE.md; sed -n '68,89p' ../../INSTRUCTION.md; for f in ../../../../study/recreations/T{53,59,82,92}-*/scores.md; do rg -in 'cure|validation|dispatch|timing' \""'$f" | head -7; done; sed -n '"'43,67p' item-T205-observe-plan.md" in /home/hatch/workspace/goals/diy-building-and-real-learning/hidden_files/study-jobs/recreation/runs/2026-11-18-cycle-037-wave-34
 succeeded in 101ms:
90:## RECREATION QUEUE (owner: recreation job — head = next build)
191:| 94 | T199 — Shout scaling inside a real scene | P11 @ 67–75 s | OWED at Packet-11 registration (style-library Cycle-019): per-word size peaks coinciding with shouted onsets inside scene footage; word-animation containers | IN PROGRESS — attempt 1 NO VERDICT 2026-11-18 wave-33 (built, sha edad0b81; jev-prewave HOLD ×2 ASSERTED-CHECKS, wave not fired); completion is recreation's next-cycle first charge, authorized under A12.3 |
## Amendment A1 (2026-11-13, from Cycle-002 — T15 attempt 1)
1. **Convergent-lens rule (§5 reading rule):** when two or more lenses independently name the same defect, that defect is priced as the next attempt's primary cure, ahead of single-lens findings. (T15 attempt 1: motion 68 + reuse 64 both named the surplus-particle freeze during FORM.)
2. **Typography construction precedent:** runtime sampling of config-rendered text is the lawful letterform construction (purity 100, T15 attempt 1) — future typography recreations start from it rather than re-deriving purity.

## Amendment A2 (2026-11-13, the funnel design — score-delta floor rule, HQ's priced addition)
**Re-attempt floor rule:** a re-attempt whose average does NOT beat the technique's prior attempt average is not filed as silent progress — its scores.md entry carries a WHY section naming the plateau (what was changed, what did not move, which lens is stuck and the hypothesized cause). Grinding the same score without a named plateau is the ceremony pattern in miniature and is a deviation (PLATEAU-UNNAMED) in the attempt's RUN. Score deltas are reported in the library's growth accounting (style-library GROWTH.md) per attempt, not only at consolidation.

## Amendment A3 (2026-11-13, owner's refinement to the recreation law — UNIVERSAL obligation)
1. **The queue orders; it never exempts.** If a catalogued lesson is a motion graphic that can be recreated as HTML, its recreation MUST be created. Triage survives only as ordering + pacing. Classification rule, applied per technique at registration and printed in the open: (a) is it a motion graphic (its lesson is motion/animation behavior, not a still, a system, or a story structure)? (b) can HTML/CSS/JS + generated assets carry that motion? Yes+yes = **OWED**. A no on either leg is priced with its reason in QUEUE.md and the tier register (T24 static end card: no motion content — documentation asset; T25 two-world system: a design system whose component techniques are individually owed — not itself one recreation).
2. **Tier accounting consequence:** a motion-graphic technique at DESCRIBED prints as **OWED + its queue position** (style-library Amendment A3 enforces the face).
3. **Division of labor with the practice job:** this job owns FIRST attempts (unattempted techniques, queue order). Re-attempts of already-scored recreations belong to the practice job (lowest-scored first). A technique mid-attempt here finishes its verdict here before practice can pick it up.

## Amendment A5 (2026-11-14, the owner's own read on T15 attempt 1 — two cures + the fifth lens)
The owner heard the four Codex returns verbatim, converged with the wave on the frozen-flow defect, and caught TWO defects no lens named. Both are standing law now:
1. **OWNER CURE 1 — foreground/background intensity separation (readability):** particles forming the word render FOREGROUND (contrast/opacity/intensity separated); reserve particles render BACKGROUND (dimmer). Same-intensity fields make formed words unreadable — in the original, the separation is part of why the words read at all. Any particle-field recreation carries this separation by construction.
2. **OWNER CURE 2 — strict phrase sequencing (phase exclusivity):** a phrase's formation may not begin until the previous phrase's dissolve has completed; one word's lifecycle owns the stage at a time. Overlapping lifecycles are a defect class in any sequenced recreation.
3. **THE FIFTH LENS — READABILITY (permanent, §5.4):** the founding evidence is priced: four lenses scored a recreation whose words fight their own background, and none owned legibility. The owner's expectation now has a judge (the golden rule). Attempt 2 onward is scored by five lenses; the bar form is unchanged (average ≥85, no lens <70) with the fifth lens inside both terms. Attempts scored under the four-lens wave keep their filed averages — cross-wave comparisons print the lens count (a 4-lens 78.5 and a 5-lens score are different instruments; deltas across the boundary are labeled as such).
4. **Flow-field construction model (HQ's implementation note, standing guidance for particle techniques):** model the pool as ONE constant flow field, not per-phase animations — every particle always carries the stream's directional velocity; forming = BORROWING particles out of the flow onto targets, where they keep low-amplitude jitter (never zero velocity), with a guaranteed reserve fraction that is never borrowed; dissolving = RELEASING them back to full stream velocity with continuity (no velocity replacement at phase boundaries). The intensity separation rides the borrow flag: borrowed = foreground, reserve = background. This single model carries Owner Cure 1, Owner Cure 2's clean stage handover, and attempt 1's convergent defect (frozen surplus) at once.

## §9 — Condense
Read the run's traces + Codex returns → candidate lessons (which constructions scored well on which lenses; recurring Codex findings across techniques) → label demonstrated/candidate/planned → promote into this file (dated, technique cited) + verdict-history.md → next cycle inherits. A lens finding that recurs across two techniques is a pattern: it becomes a §6 guard candidate with the two citations.
- **Condense Codex call point:** `guards/codex-condense.md` fires at Condense close — it attacks the cycle's drafted amendments for faithfulness (does the amended text encode the lesson) and four-layer coverage (steps · mechanical guards · Jev definitions · Codex prompts; each untouched layer carries a NO-DEFECT proof or a named not-yet-amended reason). A REVISE returns the named amendment for re-encoding before the cycle record closes. Firing: this call fires at its step on every cycle; a cycle in which it did not fire prints INCOMPLETE. (Built 2026-11-14.)
3:Feeding: score-blind allowed packet per lens (lens instruction with standing header + neutral technique facts + recreation.html + score-blind build record); scores.md never fed; no lens saw a prior score or another lens's return. Interim firings on superseded builds are preserved verbatim and NEVER averaged: codex/lens-motion-interim1.md (62, build 239795fb…) · codex/lens-purity-interim1.md (100, same build) · codex/lens-motion-interim2.md (78, build f181276b…) · codex/lens-timing-interim1.md (59, same build). Each interim defect was cured and the wave re-fired in full on the final build (identical-hash rule).
9:| timing | 88 | codex/lens-timing.md |
18:## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
19:1. CONVERGENT (reusability −10 + purity −4): segment bracket scheduling dispatches on bracket VALUES — `segmentBracketAt` hides the bracket whose value is 19 and delays the one whose value is 9, so a value swap silently re-times the segment act (in the §2b swap the swapped 9 appears at entry and the against-value 4 is delayed). Cure: give brackets stable IDs + explicit segment membership/anchor fields in CONFIG; dispatch on those; extend the swap test to assert segment bracket flags at entry, ~6 s, and hold under swapped values.
20:2. CONVERGENT (timing −4 + readability −4): the always-present legend announces "19 still needs" during Act 1, before that state exists, and bracket meanings need cross-reference (two brackets share the phrase "still needs"; chips are uniformly gold; tabs carry no color key). Cure: generate the legend per act from the annotations available in that act, name whose votes each bracket counts, and add a compact colored bloc key for the tab colors.
21:3. CONVERGENT (reusability −2 + purity −2): card geometry/styling/typography and several box/board offsets remain renderer literals outside CONFIG. Cure: move them into named CONFIG fields (card block + offsets), completing the CONFIG surface.
22:4. Reusability (−6, single lens): bracket arc fractions are independently supplied; the "to win" bracket does not re-derive from threshold, and spans do not follow column/count changes. Cure: semantic anchors — derive bracket spans from threshold + column totals where the specimen's semantics allow, with explicit overrides.
9:| timing | 84 | codex/lens-timing.md |
19:- Interim 1 (sha 9254233c…): motion 84 · timing 82 · purity 68 → purity caught the unvalidated-override external-asset defect + motion caught fade²/unevidenced motion; cured (allowlisted schema, geom CONFIG, opacity-only entrances, single row fade). Returns: codex/lens-{motion,timing,purity}-interim1.md.
20:- Interim 2 (sha b588a6ca…): motion 94 · timing 84 · purity 92 · reusability 68 → reusability caught unenforced validation + no text-fit guarantee + residual literals; cured (enforced full validation with defaults fallback, measured/estimated fitFont, CONFIG.geom/type completed, derived stage height). Returns: codex/lens-{motion,timing,purity,reusability}-interim2.md.
22:## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
23:1. CONVERGENT (reusability −10 + readability residual): fitFont() stops at fitMinPx (9 px) even when text still overflows; overflow then clips silently. Cure: validation rejects (falls back) any config whose text cannot fit at fitMinPx, and add an opposition-label height-fit check.
24:2. Reusability (−11): validation domains incomplete — negative gap/padding/offsets/delays can pass; typography bounds unchecked. Cure: per-domain range validation for every CONFIG group + cross-field constraints.
25:3. Reusability (−5): residual constants outside CONFIG — line-height bounds 8/26, title divisor 15, label divisor 5, font family/weights; textWidth() reads global CONFIG instead of the caller's cfg. Cure: move into CONFIG.type; pass cfg through textWidth/fitFont.
11:| timing | 89 | codex/lens-timing.md |
22:## Priced cures for the next attempt (practice job) — convergent defects first (Amendment A1)
23:1. **CONVERGENT (motion −16 + timing −7): the reveal shape.** The measured original expands as an OVAL from the lit cell before completing the rectangle; the build populates in index (row-major) order, so at 5000 ms it shows a top-half rectangle instead of the reference's oval. Cure: order cell reveals by distance from the lit cell (expanding oval/ellipse front), reaching the full rectangle by buildMs 5500; re-measure the mid-build frame against segment b-frames.
24:2. **Motion (−4): pulse onset.** Pulsing runs during the amber phase and its absolute-time sine jumps at onset. Cure: start the pulse at amberDoneMs (6500) computed from elapsed hold time.
25:3. **Timing (−4): amber starts slightly late.** At 5500 ms the build shows zero amber cells while the reference already shows a partial block at wall completion. Cure: begin amber growth marginally before/with wall completion inside the measured window, retaining completion by 6500 ms.
26:4. **Reusability (−8/−6/−4/−2): CONFIG surface limits.** Canvas backing size (720×640) is fixed in markup while stageW/stageH/dpr are CONFIG — resizing CONFIG clips; panel padding (8), cell gutters (0.6/1.2), amber gutters (0.5/1) and glyph alpha constants (0.85/0.9/0.95, classified structural in the census) sit in rendering code; no CONFIG validation (lit index clamped at draw but not at the skip site); glyph structure + reveal order are fixed code. Cure: initialize canvas from CONFIG, move padding/gutter/alpha constants into geom, validate + normalize CONFIG once (one lit-index normalization), expose reveal-order as a CONFIG option (pairs with cure 1).
27:5. **Readability (next-attempt evidence, no score cure claimed):** demonstrate with a rendered 360 px frame that cell boundaries survive downsampling and the lit cell's white dominance holds — the lens's named evidence gap, tied to the PIXEL-UNVERIFIED limitation below.
4:Plan gates: codex-observe **proceed on the two-act basis, Act 1 unresolved** (`codex/codex-observe.md`; gaps dispositioned in build-record — Act 1 was then MEASURED in the segment) · codex-plan-review **REVISE, all 4 cures applied** (`codex/codex-plan-review.md`).
5:Pre-wave gate: jev-prewave **FIRE-WAVE** (parameterization 0.95 · purity pre-check 1.00 · own-checks completeness 0.90 · fidelity-plan honesty 1.00; return at `jev-prewave.md`; fired on the interim build's record — the final build's changes are the wave cures below, recorded in build-record).
6:A6 legs (final build): guard-measured-fit → `fit-table.md` (15 rows; 1 marginal HIT carried — HUD day-line caps ink 9.0 px, disposition printed there) · guard-config-census → `config-census.md` (HIT list EMPTY after cures).
7:Interim wave (build `2c6f0691…`, preserved, NEVER averaged): motion 62 · timing 58 · purity 90 · reusability 78 · readability 83 (avg 74.2, min 58). Returns at `codex/lens-<lens>-interim1.md`, payloads at `codex/payload-<lens>-interim1.txt`. Its convergent HUD defect was cured and the wave re-fired in full on the final build (identical-hash rule) — see build-record's interim-wave section.
12:| timing | 76 | codex/lens-timing.md |
22:The stuck lens is **timing (76)**, as predicted in Plan — but the mechanism is sharper than predicted: it is a structural tension inside the two-act form itself. Act 1's measured anchors consume ~10 s of the 14 s segment window (scene lead → border ~4 s → settled 5–10 s → clear + HUD restore ~11 s); Act 2, whose schedule is allocation, then has only the remainder, and the lenses price BOTH sides of the squeeze: timing wants Act 1's settled card preserved through ~10 s with a visible scene-restoration beat before Act 2, while readability wants Act 2's settled hold extended to ~6 s. Both cannot fit a 14 s loop at the measured Act-1 anchors — the attempt chose Act-1 anchor fidelity (timing 58→76, motion 62→84 after the cures) and Act 2 paid for it (3.5 s settled). The interim wave's convergent HUD bug (three lenses) is fully cured and no longer costs anything. What was proven this attempt: the Act-1 card is MEASURED (form, text, standing window, HUD coupling, clear) — stronger than the Plan's allocation fallback; the chart draws on with value-derived geometry (purity 90); the remaining gap is the two-act time budget plus override-depth machinery, not the data-beat mechanic.
24:## Priced cures for the next attempt (practice job) — convergent first
| 56.0 | T205-census-56.0s.jpg | 14e526ab7afa8b760e2769a0483dd1529f478a395fa2c2002468eefa62efb340 | Portraits hold |
| 58.0 | T205-census-58.0s.jpg | ec1b60169d94867c30a1b59734fd5ee5a664d0a16abc397a229cd871789c5fdc | Portraits hold |
| 60.0 | T205-census-60.0s.jpg | 9a180882b547de3c3e83d438917cdb45a8bdd5d17858f1c7987fac6740f63690 | Portraits/chart transition zone — no conversion diagram |

**Motion findings (A10.3 form; REVISED on codex-observe G-T205-3 with fine probes at 43.2/43.4/43.6/43.8 s, census now 27 frames):** Motion instants: outline draw-on 37–39 s · layout shift ≤39–40 s (between census frames; sub-second, priced as ≤1000 ms) · ballot paper growth + check draw 40–43 s · connector extension 42–43.2 s · **paper RETRACT at ~43.2 s (the ballot drops into the box — the casting beat)** · paper reappear-high + check recolour + **GRADED block wash 43.4–44.0 s** (pale at 43.6, full by 44.0 — a ~600 ms eased wash of ONE block whole, not squares lighting sequentially) · global fade-out 45–46 s. Holds: substrate complete 39–40 s (~1 s) · pre-connector diagram 40–42 s · converted state 44–46 s (~2 s, incl. fade onset). Dissolve: the diagram never exits by parts — it fades globally to a pale wash under the incoming portrait (46 s frame). Sub-beats: (i) substrate draw-on is the T204/T210 shared grid, not conversion motion; (ii) the retract→reappear is the conversion's causal hinge: vote cast (paper in) → allocation appears (paper back up, checked red, block washing); (iii) only ONE block ever fills in this window. Correction (codex-observe G-T205-1): the 36.0 s pre-window frame carries the preceding title beat, not only drawing outlines — its table description stands corrected here.

**⚠ PACKET GAPS priced (for codex-observe):**
- G-T205-1 (window overstatement): digest claims 0:37–1:00 (23 s) for this technique; the census shows the conversion diagram lives 37.0–46.0 s (9.0 s). 46–60 s is a portrait-carousel consequence beat (different visual technique, photographic content — not recreatable as this technique and not part of it). Plan therefore cuts 37.0–46.0 s (see §2).
- G-T205-2 (evidence frame does not depict the technique): the digest's sole cited evidence frame ev/t52-vote-to-grid.jpg is byte-identical to census 52.0 s (SHA-256 c4e480893d4c2851e16b71eca756a5f9e658eac6ed668c05d0214fa13e2c7b1f, verified by hash equality) and shows the three portraits, NOT the ballot→grid diagram. The technique's true evidence frames are this census's 40/43/44 s frames. Observe proceeds on the census, not the cited frame.
- G-T205-3 (fill granularity): digest/TECHNIQUES prose ("a grid fills in blocks", "fills red in blocks") is ambiguous between per-square and per-block fill; census resolves it: per-BLOCK wash (one state block at a time), squares unchanged on top. Plan binds per-block.

### 1.3 Variables (§1.3 — every property that could change without changing the technique)
Content: ballot label text ("VOTE") · check glyph/colour states · block label (none in specimen — absence is a value) · ground texture on/off. Counts/geometry: grid columns × rows · cell size + gap · block partition (which cells form the converting block; block cell count) · number of blocks filled (specimen: 1) · disc diameter · ballot-box scale · connector thickness/length. Timing: outline draw duration · substrate hold · layout-shift duration · paper-growth duration · check-draw duration · connector-extend duration · fill duration · converted hold · fade-out duration · phase start offsets. Palette: ground colour · cell colour · outline colour · disc colour · box/paper colours · connector/fill colour (specimen muted red #d94f5c-family, measured from frame as pink-red wash) · check idle colour (blue-grey) vs active colour (red). Direction/order: conversion direction (specimen left→right) · fill order across blocks (specimen: leftmost first) · layout (disc left / grid right vs mirrored). Density: cells per block · grid density at fixed stage size.

### 1.4 Consumer
Diagram containers — the DLC assembler's count-board / diagram surface. Priced: the assembler's core need is exactly this operation — an input (a vote, a count, a choice) entering one side and exiting as allocated blocks whose whole-block flip carries the argument (digest §2: block-weighted count board; §6 L1/L4). T205 is the minimal pure form of that operation (one input → one block) with no tally arithmetic on top, so it is the reusable primitive the count-board family composes; T53's board already proves the composed form passes (85.6). Secondary: explainer production's mechanism-diagram beats.

### 1.5 Prior / family scores read (filed scores only)
- T53 ballot-arc count board (same packet family of count-boards, Cycle 012): motion 92 · timing 88 · purity 94 · reusability 74 · readability 80 → avg 85.6 PASS. Prices: count-board constructions pass; reusability is the family minimum (bracket dispatch on VALUES, geometry literals outside CONFIG — both cured in Plan §2 via ID-keyed blocks + full CONFIG geometry).
- T59 column cards (Cycle 012): 100/84/96/70/84 → 86.8 PASS; reusability again the minimum at exactly 70 (validation domains + residual literals).
- T82 countable multitude: 87.2 PASS (verdict-history). T92 data beats: attempt 1 = 82.4 FAIL (timing 76) — diagram-family timing risk is real when schedule is not census-anchored. CORRECTION (codex-observe finding 4): T92's current filed disposition is RECREATED after practice attempt 3 (90.2, timing 95); the 82.4/76 figures describe attempt 1 only and are used here only as the timing-risk evidence, not as T92's standing state.
- Packet siblings this wave (T204/T208/T210) have NO filed scores (first attempts, records in this same run dir) — nothing priced from them; T208/T210 share the grid substrate, so their censuses corroborate substrate geometry only.
- Family average (filed diagram/count PASS siblings T53+T59+T82): (85.6+86.8+87.2)/3 = 86.5.

### 1.6 Standing-guidance dispositions (A9.5 — reasoning inline)

codex
**T205 — ADVANCE-WITH-GAPS**

| Dimension | Score | Evidence |
|---|---:|---|
| queue-state-priced | 1.0 | `RUN.md` §1 records the current queue read through #94. The catalogue assigns T205 **OWED #96**, and A3 §3 routes its first attempt to recreation. `QUEUE.md` recreation section and `techniques-diagrams.md:345`. |
| prior-scores-read | 1.0 | The filed family scores inform ID-keyed block dispatch, CONFIG geometry and validation, and census-anchored timing. The record distinguishes T92’s attempt-1 failure from its attempt-3 pass. `item-T205-observe-plan.md` §§1.5, 1.7 and the filed Codex Observe return, finding 4. |
| mechanics-seen | 1.0 | The firsthand census brackets connector contact and ballot retraction at 43.2 s, then shows the graded wash of one block from 43.4–44.0 s behind persistent black cells. The 40, 43, and 44 s samples replace the digest’s portrait frame at 52 s. `item-T205-observe-plan.md` §1.2. |
| variables-extracted | 0.5 | The Observe inventory covers content, counts, geometry, timing, palette, direction, and density. It omits the explicit retraction and reappearance timing exposed by the fine probes. `item-T205-observe-plan.md` §§1.2–1.3, 2.1. |
| guidance-carried | 1.0 | Observe names the A1 typography and A5 particle guidance and explains their scope. It carries the applicable A9.1 still-plate guidance. `item-T205-observe-plan.md` §1.6. |
| consumer-named | 1.0 | Diagram containers for the DLC assembler’s count-board surface. `item-T205-observe-plan.md` §1.4. |

**Plan charges**

- **Ballot timing.** Carry the cast and reappearance explicitly into the parameter table. Bind retraction and reappearance to the CONFIG phase schedule and print anchor checks at 6,200 ms for contact, ballot retracted, and zero fill, and at 6,400 ms for reappearance and wash onset. §2.7 claims the latter check was added, but §2.3 skips it.
- **Source-motion playback.** Record a continuous playback pass over the selected window and reconcile it with the fine probes before locking the schedule. §1.2 documents firsthand frame seeks. Continuous playback is unverified.

The Observe Codex receipt is filed and its four findings are dispositioned in §1.7. No owner-only input is identified.

BODY-WRITE: none (read-only run). This verdict, its six scores, and the two Plan charges are for the runner to file in `RUN.md` §2b with its disposition.
tokens used
39,871
**T205 — ADVANCE-WITH-GAPS**

| Dimension | Score | Evidence |
|---|---:|---|
| queue-state-priced | 1.0 | `RUN.md` §1 records the current queue read through #94. The catalogue assigns T205 **OWED #96**, and A3 §3 routes its first attempt to recreation. `QUEUE.md` recreation section and `techniques-diagrams.md:345`. |
| prior-scores-read | 1.0 | The filed family scores inform ID-keyed block dispatch, CONFIG geometry and validation, and census-anchored timing. The record distinguishes T92’s attempt-1 failure from its attempt-3 pass. `item-T205-observe-plan.md` §§1.5, 1.7 and the filed Codex Observe return, finding 4. |
| mechanics-seen | 1.0 | The firsthand census brackets connector contact and ballot retraction at 43.2 s, then shows the graded wash of one block from 43.4–44.0 s behind persistent black cells. The 40, 43, and 44 s samples replace the digest’s portrait frame at 52 s. `item-T205-observe-plan.md` §1.2. |
| variables-extracted | 0.5 | The Observe inventory covers content, counts, geometry, timing, palette, direction, and density. It omits the explicit retraction and reappearance timing exposed by the fine probes. `item-T205-observe-plan.md` §§1.2–1.3, 2.1. |
| guidance-carried | 1.0 | Observe names the A1 typography and A5 particle guidance and explains their scope. It carries the applicable A9.1 still-plate guidance. `item-T205-observe-plan.md` §1.6. |
| consumer-named | 1.0 | Diagram containers for the DLC assembler’s count-board surface. `item-T205-observe-plan.md` §1.4. |

**Plan charges**

- **Ballot timing.** Carry the cast and reappearance explicitly into the parameter table. Bind retraction and reappearance to the CONFIG phase schedule and print anchor checks at 6,200 ms for contact, ballot retracted, and zero fill, and at 6,400 ms for reappearance and wash onset. §2.7 claims the latter check was added, but §2.3 skips it.
- **Source-motion playback.** Record a continuous playback pass over the selected window and reconcile it with the fine probes before locking the schedule. §1.2 documents firsthand frame seeks. Continuous playback is unverified.

The Observe Codex receipt is filed and its four findings are dispositioned in §1.7. No owner-only input is identified.

BODY-WRITE: none (read-only run). This verdict, its six scores, and the two Plan charges are for the runner to file in `RUN.md` §2b with its disposition.
