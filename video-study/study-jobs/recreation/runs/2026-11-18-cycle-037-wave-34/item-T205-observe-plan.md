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
