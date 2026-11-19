# Naive Consumer Return — Packet #5: "Six Essential Motion Design Transitions"

Cold read from the packet alone: `2026-11-14-som-six-transitions/digest.md`

## (1) Specimen identity — could you name it in under a minute from the packet's face?
**PASS**

- Title: "Six Essential Motion Design Transitions" — a Quick Tips tutorial video with a companion article of the same name.
- Creator: Jacob Richardson (tutorial creator; School of Motion alum), with Ryan Plummer (article). Publisher: School of Motion.
- Platform: YouTube `YxQ7JqVmqgY`, https://www.youtube.com/watch?v=YxQ7JqVmqgY (uploaded 2019-09-09); article — https://schoolofmotion.com/blog/six-essential-motion-design-transitions-tutorial (published 2019-09-09, "6 min read").
- Duration: 80.99 s
- Format: "short form, 80.99 s — a tutorial + technique breakdown (resource class)." Probe: video h264, 1280×720, 30 fps · audio Opus · overall bitrate 418,607 bps.

Yes — all of this is stated in §1 "Specimen identity + technical facts" at the face of the packet.

## (2) Any two techniques: timestamps, mechanics, and cited frame evidence as the packet states them
**PASS**

**T07 — Dissolve (≈23–30 s)**
- Mechanics: "the webpage scene cross-fades into the logo/laptop imagery over roughly a second — both scenes coexist at partial opacity at the midpoint — ending on the mark." The article's when-to-use: passage of time, change of location, flashback/retrospection, scene-end fades.
- Cited frame evidence: "ev/26.0-dissolve-mid.jpg (sequence state: the incoming laptop scene at dissolve) · ev/29.5-dissolve-logo.jpg (the resolved mark) · clips/25.0-dissolve.mp4 (the blend's duration — the timing claim's binding)."

**T09 — Match cut (≈37–44 s)**
- Mechanics: "elements are pushed into frame and the cut lands at their fastest movement, on a shared anchor shape" — in the article's words, Jacob "illustrates this transition technique with the shapes in the School of Motion logo, pushing into them as they come into view and cutting to the next clip at their fastest movement," with "the logo acting as an anchor for the viewer." "The countdown frames show the webpage header element highlighted/framed as the anchor candidate before the cut."
- Cited frame evidence: "ev/40.0-matchcut-before.jpg (pre-cut state) · ev/42.5-matchcut-anchor.jpg (countdown state "Match cut in 2": the webpage scene with its header element highlighted — cited as the anchor-selection state, not as the cut itself) · clips/39.5-match-cut.mp4 (the motion claim's binding: the push-in and the cut at peak movement)."

## (3) What does the packet price as bad about the specimen, with timestamps?
**PASS**

From §5 "Bads":

- B1 (62–81 s) — "the end card eats 23% of the film. A static CTA holds ~19 s of an 81 s tutorial whose subject is motion between scenes; it demonstrates none of the six techniques and teaches nothing."
- B2 (≈17–59 s) — "the countdown metronome becomes predictable cost. Six identical ~3 s countdowns spend ~18 s of the 42 s demo span on announcement; by the fourth demo the device no longer adds information, it only delays."
- B3 (≈53–59 s) — "the morph demo is the least legible. The hardest technique gets a demo whose pre-state (ev/55.0) reads as an ordinary webpage frame; the deformation is fast and dark, and a viewer who blinks misses the one moment the film exists to show."
- B4 (whole film) — "no real-project footage. Every demo uses the same two synthetic scenes; the film never shows a transition inside a finished piece of work … so transfer to real scenes is asserted, not demonstrated."
- B5 (720p frames) — "small-text resolution limit. Ladder sub-lines and timeline panel text do not resolve at phone size in the 1280×720 source."
- B6 (whole packet) — "no verbatim transcript. The caption fetch failed (HTTP 429, not retried); narration wording is therefore not quoted anywhere in this packet."

## (4) One lesson mapped to a named container with its build-cost note
**PASS**

- L1 — Lesson: "Choose the transition by narrative job, from this tutorial's six-row table (hard cut = impact/beat · dissolve = time/location change · cut on action = angle change inside motion · match cut = compositional rhyme · dynamic zoom = enter a sub-frame · morph = identity-through-change)"
- Class: technique
- Container: transition
- Change it implies: "The assembler's transition container gains a `job` field whose value selects the transition type; no transition is chosen by habit or decoration"
- Build cost: "cheap — a configuration table + the six mechanics in §3"

## (5) Named consumer and production surface it feeds
**PASS**

- Named consumer (§2): "DLC / multilingual production — the assembler's **transition containers**, inside the stacking grammar (opening → transition → repeat-after-me → transition → diagram → transition → ending → final), where transitions are full containers, not glue."
- Production surface it feeds: the assembler's transition containers. As the packet states its use in Observe: "when a production cycle designs a transition container, it opens §3 to choose the transition by its narrative job (the choice table in §6, Lesson L1), takes the mechanics (anchor element, cut point, easing, duration band) from the chosen entry, and builds FROM a RECREATED-tier recreation where the style library holds one."
