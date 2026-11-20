# Packet #9 — "SixMap | Organizational Mapping & Digital Footprint Animation" — nez&pez for SixMap

_Digested by video-digestion Cycle-015 (2026-11-16). Markdown twin is canonical; digest.pdf is its presentation form. Bulk media (source.mp4, work/) is cited as a local evidence pointer and does not travel with the synced packet (INSTRUCTION §7 sync scope); the packet's cited evidence frames (ev/) and census frames (frames/) are local-path citations in the same sense._

## 1. Specimen identity + technical facts

- **Title:** "SixMap | Organizational Mapping & Digital Footprint Animation by nez&pez" (Vimeo page title; player metadata agrees).
- **Creator:** nez&pez (brand/motion studio), made for SixMap (external exposure management). **Platform:** Vimeo, id 1235931636. **Canonical URL:** https://vimeo.com/1235931636
- **Published:** 2026-10-14T17:18:37+00:00 (Vimeo page). Part of SixMap's rebrand/website motion system; the creator's case study (nezandpez.com/case-studies/sixmap-cybersecurity-brand) embeds it as a background loop.
- **Access route (deviation D1):** the canonical watch route is login-walled to anonymous tooling (yt-dlp: "The web client only works when logged-in"; no credential route used). Digested via the player-embed route the creator's own case-study page publishes (player.vimeo.com/video/1235931636?background=1); identity cross-checked across page + player metadata (title · uploader · id agree).
- **Technical facts (probe.json, ffprobe of the archived 1080 rendition):** duration 10.04 s · 1080×1080 (square) · 25 fps · H.264 (avc1), ≈280 kbps video / 284 kbps overall · **no audio stream** — a silent loop by design · 251 frames decoded · source.mp4 archived in this packet directory (356,711 B).
- **What it is:** a hub-and-spoke network that builds itself one entity at a time. A single white seed dot grows into a hub; 22 spokes draw out one by one, each landing a satellite dot; a footer name-ticker rolls in step, naming the hub and then each satellite as it joins — 23 names for 23 nodes. Final state: 23 nodes (1 hub, radius ≈32 px · 22 satellites, radius ≈21 px), 22 spokes, all white on black inside a static brand frame (two gradient ring marks joined by a rule line along the bottom).
- **Counts in this packet** come from one counter (production record): node counts are distance-transform centre counts over the decoded frames; burst boundaries are frame-difference runs at native 25 fps, deliverer-verified. External prior art for this creator/form is PROVISIONAL (codex-observe's external retrieval failed; the lane record and the creator's case study are the priced basis).

## 2. Consumer + production surface

- **Primary consumer: DLC assembler — diagram containers.** This packet teaches the assembler's diagram container a form it does not have: progressive link disclosure as a hub-and-spoke build — a fixed hub, spokes that draw on one at a time, each new node named by a synchronised label the moment it lands (catalogue T03/T05/T06), inside an accelerating burst-and-hold cadence (T04/T09). The assembler can build FROM T03+T05 directly: both are parameterized (node list + name list + cadence table) and cheap in HTML/canvas.
- **Secondary consumer: Hadosh Academy explainer production — diagram/word-animation surfaces.** The burst–name synchrony (T06) is the transferable device for any "one more thing joins the picture" moment in a lesson: the diagram event and its name are one event, never two.
- **How the consumer uses this packet in Observe:** cite the technique numbers (T03 draw-on spoke · T05 name-roll ticker · T06 synchrony) in the piece's Observe record, take the cadence table in §4 as the timing starting point, and price the §5 bads (no completion hold · no in-graph labels) as design constraints to cure, not copy.

## 3. Technique catalogue

### T01 — Seed-dot opening state (0.00–0.36 s)
- **Mechanics:** the piece opens on near-nothing: one small white dot (radius ≈5 px) at centre, the static brand frame (footer rings + rule) already in place, and the first name already beginning its roll at the footer's edge. The opening state holds unchanged for 0.36 s (frames 0–8 identical by frame-difference).
- **Why it works:** the discovery story needs a "before" the viewer can remember; a single dot is the smallest possible before, and because the frame furniture is already present, the only thing that can change is the network.
- **Evidence:** ev/000.00-first-frame.jpg (first frame) · ev/000.20-seed-dot.jpg (the held seed state at 0.20 s).

### T02 — Hub growth (0.36–1.12 s)
- **Mechanics:** the seed dot scales up in place from ≈5 px to its full hub radius ≈32 px over ≈0.76 s — the longest single motion in the piece — while the hub's name ("Nalpak, INC.") rolls into the footer and settles. No spokes exist yet. Easing: UNMEASURED — this packet prescribes durations and cadence (§4), not interpolation curves.
- **Why it works:** the subject of the map gets size before it gets company; the hub's larger radius (≈1.5× every satellite's) is established by growth, not by a cut, so the hierarchy reads as earned.
- **Evidence:** ev/000.76-hub-growing.jpg (mid-growth, name settled with its roll sheen still on it) · ev/001.16-hub-complete.jpg (hold after the burst: full hub, name flat white).

### T03 — Spoke draw-on with dot landing (per satellite, first at 1.44–1.92 s)
- **Mechanics:** each satellite arrives the same way: a thin white line (1–2 px) extends from the hub toward the satellite's position over the burst (≈0.16–0.48 s), and the satellite dot (radius ≈21 px) materialises at the line's end as the draw completes. Mid-draw frames show the line present with no dot yet. No arrowheads, no direction markers — the line is a relationship, not a flow. Easing: UNMEASURED (durations in §4; no interpolation curve claimed).
- **Why it works:** the eye rides the line out and is delivered to the new node; the relationship is drawn before the entity exists, so the viewer reads "connected to the hub" before "another dot".
- **Evidence:** ev/001.40-spoke-before.jpg (before: hub alone) · ev/001.60-spoke-drawing.jpg (during: line extended, no dot at its end; ticker mid-roll below) · ev/001.96-first-satellite.jpg (after: dot landed, first spoke complete).

### T04 — One-burst-one-entity cadence (0.36–9.64 s)
- **Mechanics:** the whole build is 23 discrete motion bursts separated by completely static holds — no continuous motion anywhere. Bursts B01–B23 each add exactly one node (verified: the centre count rises by exactly 1 across every burst, 0→23); a 24th burst (9.76–9.88 s) is footer-only (see T10). Burst durations shrink from 0.76 s (B01) to ≈0.16–0.24 s; holds shrink from 0.32 s to ≈0.12 s.
- **Why it works:** discreteness is legibility — the viewer can count the discoveries because each one owns its own time slice and its own still beat afterwards.
- **Evidence:** the burst table in §4 (a named data record: frame-difference runs + centre counts) · frames/00_50-census.jpg … frames/09_52-census.jpg (the 1 fps census shows a different node count at every step).

### T05 — Vertical name-roll ticker (footer, throughout)
- **Mechanics:** entity names occupy one line in the footer, centred between the two brand rings. On each burst the settled name rolls upward and out while the next name rises from below the rule line; mid-roll frames show both names clipped against the line with a vertical gradient sheen on the moving text, settling to flat white at each hold. Easing: UNMEASURED (roll durations in §4; no interpolation curve claimed). The 23 names, in order: Nalpak, INC. (hub) · NALPAK, INTL. · NALPAK, LLC. · NALPAK LOGISTICS · NALPAKHOLDINGS · NALPAK & SCHUSTER · NALPAK FINANCE · NAL-PAK LTD · NALPAK LONDON · NP CARTIER · PAK SYSTEMS · NALPAK SWEDEN · NALPAK CO INC · NAL & PENN · N PAK SYSTEMS · NALPAK LABS · NAL MICROTEK · NP GLOBAL · WESTERN NALPAK · NP LIMITED · NALPAK OPS · SHANGHAI NP · NALPAK 3001.
- **Why it works:** the ticker is the piece's only text and its only naming device — a slot-machine roll makes each name an event with anticipation, and the sheen marks "in motion" vs "settled" without any extra UI.
- **Evidence:** ev/001.60-spoke-drawing.jpg (mid-roll: "Nalpak, INC." exiting up, "NALPAK, INTL." rising, both sheened) · ev/004.88-ticker-midroll.jpg (a later mid-roll: "NAL-PAK LTD" settled with its sheen, "NALPAK LONDON" rising clipped below the rule; the same frame also catches a spoke mid-draw) · the name census in the production record (footer crops at all 24 hold states, read in full).

### T06 — Burst–name synchrony (the naming is the event)
- **Mechanics:** the ticker roll and the spoke draw are locked to the same burst: the name that settles at a burst's hold is the entity that burst just added (verified across all 23 bursts — hold-state name index = node index, hub first). There is no narration, no caption, and no in-graph label; the synchrony is the only thing that binds a name to a dot.
- **Why it works:** one event, two channels — the viewer never has to match a label to a node by position or colour, because time does the matching.
- **Evidence:** ev/001.96-first-satellite.jpg (first satellite + "NALPAK, INTL." settled together) · ev/005.12-nine-nodes.jpg (9 nodes, 9th name settled) · §4's burst table (names column).

### T07 — Radial fan layout, fixed hub (layout, throughout)
- **Mechanics:** the hub never moves (centre (482, 484) in 1080 coordinates, per the positional census in positions-final.json). All 22 spokes are hub–satellite only — no satellite-to-satellite edges. Satellites fan predominantly north/north-east/east (17 of 22 by octant: N 6 · NE 7 · E 4), with one southern, one north-western, and a western/south-western group of 3 (W 1 · SW 2) as counterweight; one north-east ray carries two satellites collinearly (a mid dot at (691, 258) and the far outlier at (813, 131)), the far dot being the layout's single depth accent. Satellites never overlap; minimum spacing keeps every dot individually countable in the final state.
- **Why it works:** a fixed hub + fan means the viewer's spatial model never has to update — new dots extend the fan, nothing rearranges — and the one long ray gives the accumulation a direction to grow into.
- **Evidence:** ev/007.16-fifteen-nodes.jpg (fan at 15 nodes) · ev/009.72-final-network-last-name.jpg (final 23-node fan) · positions-final.json (the named positional-census record: all 23 centres + radii from the one counter, final frame).

### T08 — Persistent brand frame (static, 0.00–10.04 s)
- **Mechanics:** two gradient ring marks (teal→orange) sit at the bottom corners, joined by a thin gradient rule line at y≈905; the name line sits just above the rule. The frame is present from the first frame, never moves, and is the only colour in the piece.
- **Why it works:** the frame brands a silent, monochrome loop without touching the diagram; because it never animates, it also serves as the stillness reference that makes the bursts read as events.
- **Evidence:** ev/000.00-first-frame.jpg · ev/010.00-end-state.jpg (frame identical at both ends of the piece).

### T09 — Accelerating cadence (pacing shape, 0.36–9.64 s)
- **Mechanics:** burst start-to-start period falls from 1.08 s (B01→B02) through ≈0.40 s mid-piece to a ≈0.32 s plateau, with burst durations and holds shrinking in step (§4 table). The acceleration is smooth, not stepped: no two consecutive periods differ by more than ≈0.36 s, and the largest drop is the first.
- **Why it works:** the discovery story speeds up as the network effect compounds — early entities get ceremony, later ones arrive at the pace of a system finding them faster than a human could list them.
- **Evidence:** §4 tempo map (period column, from the burst table).

### T10 — Name-exit ending (9.76–10.04 s)
- **Mechanics:** after the last satellite lands (B23 ends 9.64 s) and its name settles, one final footer-only burst (9.76–9.88 s, network change 0.00% by frame-difference) rolls "NALPAK 3001" up and out, leaving the footer empty; the complete network then holds alone for the final ≈0.16 s.
- **Why it works:** emptying the label hands the last beat to the diagram itself — the network, not any single entity, is the final image.
- **Evidence:** ev/009.72-final-network-last-name.jpg (full network + last name) · ev/009.88-name-exited.jpg (same network, footer empty).

### T11 — Monochrome network, colour reserved (texture, throughout)
- **Mechanics:** every diagram element — hub, satellites, spokes, names — is flat white on pure black; no shading, no glow, no satellite colour-coding of any kind. Colour exists only in the static brand frame (T08).
- **Why it works:** with colour spent nowhere, the diagram's information is purely structural (count, position, connection); the piece cannot be misread as encoding risk or type by colour, because it visibly doesn't.
- **Evidence:** ev/005.12-nine-nodes.jpg · ev/010.00-end-state.jpg.

### T12 — Hard loop restart (10.04 s → 0.00 s)
- **Mechanics:** the file ends on the complete network (footer empty) and the loop point cuts directly back to the seed-dot opening state — no fade, no reverse build, no transition of any kind (verified on the joined end→start evidence clip, join at 1.0 s: full network at 0.96 s of the clip, seed state at 1.04 s).
- **Why it works (and its price):** as a website background loop the cut restarts the discovery story for the next viewer; the price is priced as a bad in §5 — the payoff state gets almost no dwell before it vanishes.
- **Evidence:** clips/loop-seam-joined.mp4 (last 1.0 s + first 1.0 s, join at 1.0 s) · ev/010.00-end-state.jpg vs ev/000.20-seed-dot.jpg.

## 4. Tempo map

One section only (10 s specimen): the build. All figures from the burst table — frame-difference runs at 25 fps (a burst = a maximal run of frames with mean absolute difference > 0.1 on a 135×135 grayscale reduction), each burst's node delta from the centre counter, each burst's settled name from the footer census.

| Burst | Window (s) | Dur. (s) | Adds | Name settling at its hold |
|---|---|---|---|---|
| B01 | 0.36–1.12 | 0.76 | hub (seed grows) | Nalpak, INC. |
| B02 | 1.44–1.92 | 0.48 | satellite 1 | NALPAK, INTL. |
| B03 | 2.16–2.56 | 0.40 | satellite 2 | NALPAK, LLC. |
| B04 | 2.76–3.04 | 0.28 | satellite 3 | NALPAK LOGISTICS |
| B05 | 3.20–3.48 | 0.28 | satellite 4 | NALPAKHOLDINGS |
| B06 | 3.64–3.88 | 0.24 | satellite 5 | NALPAK & SCHUSTER |
| B07 | 4.04–4.28 | 0.24 | satellite 6 | NALPAK FINANCE |
| B08 | 4.44–4.68 | 0.24 | satellite 7 | NAL-PAK LTD |
| B09 | 4.80–5.04 | 0.24 | satellite 8 | NALPAK LONDON |
| B10 | 5.20–5.40 | 0.20 | satellite 9 | NP CARTIER |
| B11 | 5.52–5.76 | 0.24 | satellite 10 | PAK SYSTEMS |
| B12 | 5.88–6.12 | 0.24 | satellite 11 | NALPAK SWEDEN |
| B13 | 6.24–6.44 | 0.20 | satellite 12 | NALPAK CO INC |
| B14 | 6.56–6.76 | 0.20 | satellite 13 | NAL & PENN |
| B15 | 6.88–7.08 | 0.20 | satellite 14 | N PAK SYSTEMS |
| B16 | 7.20–7.40 | 0.20 | satellite 15 | NALPAK LABS |
| B17 | 7.52–7.72 | 0.20 | satellite 16 | NAL MICROTEK |
| B18 | 7.84–8.04 | 0.20 | satellite 17 | NP GLOBAL |
| B19 | 8.16–8.32 | 0.16 | satellite 18 | WESTERN NALPAK |
| B20 | 8.44–8.64 | 0.20 | satellite 19 | NP LIMITED |
| B21 | 8.76–8.92 | 0.16 | satellite 20 | NALPAK OPS |
| B22 | 9.04–9.28 | 0.24 | satellite 21 | SHANGHAI NP |
| B23 | 9.40–9.64 | 0.24 | satellite 22 | NALPAK 3001 |
| B24 | 9.76–9.88 | 0.12 | — (ticker exit only) | (footer empties) |

- **Pacing curve:** opening hold 0.36 s → B01's slow ceremony (0.76 s burst, 0.32 s hold) → periods tighten (start-to-start 1.08 → 0.72 → 0.60 → ≈0.40 s) → a ≈0.32 s-period plateau from B13 on, with holds at ≈0.12 s → B24's exit and a 0.16 s tail. Motion occupies ≈5.5 s of the 10.04 s; stillness ≈4.5 s — nearly half the piece is holds, which is what makes 23 additions countable.
- **Where it accelerates/stalls:** it never stalls; the only deceleration is structural — B01 is deliberately ≈3× slower than the plateau bursts, and B22–B23 (0.24 s) are marginally slower than B19–B21 (0.16–0.20 s) as the fan reaches its densest region.

## 5. Goods and bads

### Goods
- **G1 — Perfect 1:1:1 synchrony (whole piece, first instance 1.44–1.96 s):** every burst adds exactly one node and settles exactly one name; nothing is ever added unnamed or named unadded. The discovery claim ("we find entities you didn't know were connected") is demonstrated by the form, not asserted by copy.
- **G2 — Holds make accumulation countable (e.g. hold at 5.12 s):** each addition is followed by a completely still beat (0.12–0.32 s); at no point do two satellites enter together, so a viewer can literally count the attack surface growing.
- **G3 — Draw-on order teaches the relationship (1.60 s):** the spoke draws before the dot lands, so "connected" is read before "exists" — the correct order for a mapping product.
- **G4 — Restraint of means (whole piece):** one hub, one line weight, one dot size, one text line, no camera move, no colour in the diagram — the entire argument is carried by count and cadence, both of which survive any reformat.
- **G5 — The name-exit ending (9.76–10.04 s):** emptying the ticker for the final beat promotes the network itself to the subject — a genuine ending inside a 10 s loop.
- **G6 — Honest fan geometry (9.72 s):** satellites never overlap and spokes never cross except at the hub, so the final state is a legible diagram, not a hairball — 23 nodes remain individually countable in a still frame.

### Bads
- **B1 — Almost no completion dwell (9.64–10.04 s):** the full network and its last name coexist for only ≈0.12 s before the name exits (9.76 s), and the network alone holds for ≈0.16 s before the file ends — the payoff state, the whole point of the build, gets the least time of any state in the piece.
- **B2 — Hard loop restart (10.04→0.00 s):** the complete network cuts instantly to a lone seed dot; on a looping background embed the discovery's result vanishes without a beat, and a viewer who looks up at the wrong moment sees an empty frame and no brand message at all.
- **B3 — Late names are unreadable at speed (9.04–9.88 s):** at the ≈0.32 s plateau a name is settled for ≈0.12 s before the next roll begins; "SHANGHAI NP" and "NALPAK 3001" register as flicker, not information — the ticker degrades from naming device to texture exactly where the count climaxes.
- **B4 — Inconsistent name forms fight the counting (2.16–9.64 s):** "NALPAKHOLDINGS" (no space), "NAL-PAK LTD" vs "N PAK SYSTEMS" vs "PAK SYSTEMS" — near-duplicate forms make a careful viewer unsure whether entities are new or repeated, taxing the very count the piece is built on.
- **B5 — No relationship semantics are encoded (whole piece):** every spoke is the same plain line — no arrowheads, no weight, no colour, no risk marking — so the platform description's claim (these entities "contribute to an external attack surface") is nowhere visible in the diagram; known vs previously-unknown entities, the description's own headline distinction, are visually indistinguishable.
- **B6 — Meaning lives in the footer (whole piece):** the hub is never labelled in-graph; crop the footer band (y≈790–960 of 1080) for a social reformat and the diagram becomes anonymous dots — the naming, the hub's identity, and the brand all sit in one strip.

## 6. Lessons mapped to our containers

- **L1 — Draw-on spoke + dot landing** · Class: technique · Container: diagram · A new node enters by drawing its connection first and landing the node at the line's end (T03); the DLC diagram container gains a relational-entry move distinct from its count-board and roster forms. Build cost: cheap — one line tween + one dot per node, fully parameterized by a node list.
- **L2 — Burst–name synchrony** · Class: technique · Container: diagram / word animation · Lock the label's arrival to the diagram event it names — same burst, settle together (T06); never animate a diagram change and its caption on separate clocks. Build cost: cheap — one shared event clock per addition.
- **L3 — Vertical name-roll as a labelling device** · Class: technique · Container: word animation · A one-line slot roll (old name exits up, new rises from below the rule, sheen while moving, flat at rest, T05) labels a changing diagram without cluttering the diagram itself. Build cost: cheap — a masked one-line roll with two text states.
- **L4 — Seed-state opening** · Class: trick · Container: opening · Open a build piece on the smallest possible before-state (one dot, furniture already in place, T01/T02) so every later addition is measured against a remembered emptiness. Build cost: cheap — a held first frame and a growth tween.
- **L5 — Name-exit ending** · Class: trick · Container: ending · End an accumulation piece by emptying its label and holding the bare result for the last beat (T10) — with our cure for B1: hold the result ≥1 s, not 0.16 s. Build cost: cheap — one roll-out + a hold.
- **L6 — Colour reserved for the frame** · Class: texture · Container: diagram / opening · Keep the working diagram monochrome and spend the palette only on static brand furniture (T08/T11); structure carries the information, colour carries the brand. Build cost: cheap — a palette rule, no assets.
- **L7 — Accumulation is the argument** · Class: storytelling pattern · Container: diagram · When the claim is "more than you knew", don't narrate it — accumulate it one countable unit at a time until the count itself persuades (T04); the final still must let the viewer count the total. Build cost: moderate — the discipline is editorial (one unit per beat, no batching), the build is L1 repeated.
- **L8 — Accelerating burst cadence** · Class: pacing principle · Container: diagram / transition · Shape a build as bursts + holds with the period tightening ≈3:1 from ceremony to plateau (T09, §4); acceleration signals a system gaining on the problem. Build cost: cheap — a period table, as in §4.
- **L9 — A still beat after every addition** · Class: pacing principle · Container: diagram · Budget ≈40–45% of runtime to complete stillness after each unit lands (T04); the holds are what make a fast build countable instead of frantic. Build cost: cheap — hold durations in the same period table.
- **L10 — Transcript device: ABSENT, with ground** · Class: transcript device · No narration, no captions, and no spoken text exist in the specimen (probe: no audio stream); its naming function is carried entirely by the synchronised ticker, which is why that device is priced as technique in L2/L3 rather than as a transcript device here. A production borrowing this form must supply its naming channel deliberately — silence plus an unlabelled diagram teaches nothing (see B6).

## 7. Idea bank

- **I1 — Harness-network opening for Academy shorts:** a seed dot labelled with the viewer's name for their agent grows one spoke per harness compartment as the opener names them — T02+T03+T06, with L5's cured ≥1 s final hold. _Evidence: T02, T03, T06._
- **I2 — "How many apps touch your data?" diagram short:** one hub (your phone), satellites accumulating at §4's cadence, each named by a synchronised roll — the count is the lesson. _Evidence: T04, T05, T09._
- **I3 — Vocabulary constellation for Earth One:** each new word lands as a satellite of a root word, named by the ticker as it lands; the final still is the episode's word map. _Evidence: T03, T07, L7._
- **I4 — Subscriber/community growth card:** a channel-update visual where each milestone joins as a named satellite; colour stays in the frame, per L6. _Evidence: T07, T08, T11._
- **I5 — Two-colour cure variant:** keep the specimen's form but colour the last three satellites amber — a controlled test of whether a single colour exception can encode "previously unknown" (the distinction B5 prices as missing) without breaking T11's discipline. _Evidence: B5, T11._
- **I6 — Loop-seam cure variant:** rebuild the ending as build → hold ≥1 s → spokes retract in reverse order to the seed dot, making a truly seamless loop; A/B against the specimen's hard cut for website use. _Evidence: T12, B1, B2._
- **I7 — Ticker-as-progress-bar:** in longer diagram pieces, let the name-roll double as a progress indicator (names remaining = spokes remaining), exploiting the 1:1:1 synchrony viewers learn in the first three bursts. _Evidence: T05, T06, G1._

## 8. Reception link

- **Baseline counts (post.json, captured 2026-11-16 at this cycle's reads):** views / likes / comments NOT DISPLAYED on the access route used (the embed route exposes no counts; the watch page is login-walled) — recorded as not displayed, not estimated.
- **Status:** reception: not yet run — charged to reception-analysis. This packet prices craft only; no engagement claim is made or implied.

## Production record

- **Archive:** source.mp4 (356,711 B) via the player-embed route (deviation D1 — canonical route login-walled, no credentials used; identity cross-checked). ffprobe agrees with the embed metadata (10.04 s vs 10 s nominal — no disagreement).
- **Extraction:** 251 frames decoded (work/all-*.png, local working set). Census: 10 frames at 1 fps (frames/, timestamps 0.50–9.52 s). Evidence: 14 frames in ev/. Clips: clips/sixmap-full-loop.mp4 (the full 10.04 s, stream copy) + clips/loop-seam-joined.mp4 (last 1.0 s + first 1.0 s, join at 1.0 s).
- **Counter rule (one counter, Amendment A9 clause 2):** node counts = local maxima of the distance transform of the white mask (threshold >128, network region y<740, peak distance >10 px) — final state 23 centres (1 hub r≈31.6 px + 22 satellites r≈21 px), independently corroborated by a visual count of the final frame (23). An erosion-based counter was run first and DISCARDED (it overcounted to 27 on line-junction artefacts); no packet number comes from it. Burst boundaries = frame-difference runs (mean |Δ| > 0.1, 135×135 grayscale), counting unit = distinct frames at 25 fps (Amendment A9 clause 1 form). Scene-change census is not applicable as a separate instrument on a 10 s single-scene loop; the burst table is its priced equivalent.
- **Text census:** footer crops at all 24 hold states were read in full by the deliverer (two contact sheets) — the 23 names in T05 are those reads, letter for letter. No other text exists in any frame; no captions or subtitles appear in any extracted frame or clip (the extraction pipeline adds no overlays; §6.3 guard priced in the cycle RUN).
- **Lesson-class coverage (build-time census, Amendment A5 clause 1):** classes priced PRESENT at Observe — technique (L1–L3) · trick (L4–L5) · texture (L6) · storytelling pattern (L7) · pacing principle (L8–L9) — all tagged in §6; transcript device priced ABSENT at Observe and printed as an absence-with-ground in §6 (L10). 6 of 6 classes accounted for.
- **Clip rulings (Amendment A6 — every catalogue entry enumerated):** T01 no-clip (a static held state; bound to its cited frames) · T02 CLIP (clips/sixmap-full-loop.mp4 — the growth is a continuous scale change) · T03 CLIP (full-loop clip) · T04 CLIP (full-loop clip; the cadence is also bound to the burst table, a named data record) · T05 CLIP (full-loop clip — the roll is temporal) · T06 CLIP (full-loop clip — synchrony is a temporal relation; also bound to the burst table's name column) · T07 no-clip (a static layout; bound to its cited frames + positions-final.json) · T08 no-clip (static frame furniture; bound to its cited frames) · T09 CLIP (full-loop clip; also bound to the burst table's period figures) · T10 CLIP for the name-exit roll (full-loop clip) + no-clip for the completion hold's duration (bound to the burst table) · T11 no-clip (a static texture property; bound to its cited frames) · T12 CLIP ×2 (full-loop clip + clips/loop-seam-joined.mp4, join at 1.0 s).
- **Length (Amendment A3):** 10.04 s — the ≤5 min tier; transcript immunity does not arise (no narration exists); length is priced inside §5 (B1–B3 are length/cadence findings).
