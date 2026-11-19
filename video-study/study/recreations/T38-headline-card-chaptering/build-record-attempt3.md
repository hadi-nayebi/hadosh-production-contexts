# T38 — Headline-card chaptering · build record (attempt 3)

**PIXEL-UNVERIFIED** — no render route exists in this seat; no rendered verification was performed or is claimed. All geometry below rests on a source-bound displayed-state model computed from the recreation's own layout rules; the browser-font caveat stands (the configured font stack renders in the browser; model glyph estimates use the named factor below).

## Bound build
- recreation.html sha256: `2f4348b6cb88833e001647ef86ef7b1b0e0d3f150ca77daad116904c9f2c8e74`
- Frozen content copy: `recreation-attempt3-frozen.html` (sha256 identical to the bound build, verified at freeze). All scoring payloads embed the frozen copy's content and bind to this sha; the working file is re-verified against it before any scores are filed.
- Prior builds preserved untouched as content copies: `recreation-attempt-1.html`, `recreation-attempt-2.html`. Preservation census after the working file's first overwrite this attempt: both preserved copies and `comparison.html` match their pre-attempt baseline hashes exactly.

## Plan and evidence
Built under the item plan filed for this attempt in the practice run directory (cure plan with its plan-review consumption section; the build follows the plan as amended there). Evidence the construction rests on:
- The technique packet's catalogue mechanics: every section opens on a designed title card in one visual system — headline + date/provenance chip + the section's key object — and cards double as the chapter map.
- Two cited formed-card anchor frames from the packet (a pie card: headline top-left, provenance line top-right, segmented pie with coloured pill labels, yellow takeaway pill; a formula card: yellow year pill chip, formula hero with legend).
- A grid-change census at the two anchors (2s bins): both anchors occupied, no blank interval AT THE TWO ANCHORS, no large cut spike at a card anchor. The census establishes occupied anchors only — it does not establish any transition shape, and the artifact's timing model says so.
- The artifact's own source layout rules, from which the displayed-state model below is computed.

## Construction facts (what was built)
- One self-contained HTML file; no external loads, no specimen media, no traced artwork. All content, timing, palette, geometry and style values live in a single CONFIG object; construction reads CONFIG only.
- Two cards in one visual system. Card 1: headline, plain provenance chip (top-right, on its own row below the headline), segmented pie hero with one pill label per segment, takeaway pill. Card 2 (labelled in the artifact as a demonstration of the second chapter form, via a rendered demonstration tag): headline, pill year chip, formula hero with legend, takeaway pill.
- Sequential handover: a non-last card fades out over the configured fade-out duration ENDING at its boundary; the next card's formation starts AT the boundary — no incoming checkpoint precedes the boundary. The stage background is painted at every instant; the boundary is a single instant, not an interval. The last card has no fade-out; its end is the derived total. The loop restarts at the derived total (a chapter-restart cut; not claimed as an observed loop point).
- formedMs is the latest completion across ALL of a card's elements (headline, chip, hero, every staggered label, takeaway pill). Validation checks formation for every card: non-last cards against their fade-out start, the last card against its end.
- Fail-closed validation: when validation reports errors, construction renders the configured invalid state (stage carries data-invalid) and builds NO card content over the errors. Pie labels are generated only from valid pie spans, so invalid pie data (zero total, negative segment) yields no label elements.
- The derived timeline total is the sole duration authority; there is no separate total-duration configuration value. Card durations are the only duration inputs.
- Every CONFIG key is either consumed by a CSS rule, an SVG/DOM construction path, a timeline computation, or a stage data attribute (metadata keys: the timing model's kind, uncertainty, hold rule, gesture note and anchor note are carried as stage data attributes). Two formerly bound-but-unconsumed geometry keys are now wired into the legend's CSS rule (top and right). One duplicate chip-offset key and the former early-start handover key were removed entirely (key, binding and references).
- Segment labels sit in a stepped column arrangement beside the pie; the demonstration tag sits on its own row below the chip row, priced by its own gap key and a chip-row-height key, both consumed by its CSS rule. The hero zone top was shifted via CONFIG so the demonstration row clears it (see the C3 model results).
- Entrance gestures (headline rise, hero scale-from, staggered label fade) are labelled IN the artifact as reconstruction choices — inferred, not observed — in the header timing-model comment and in a stage data attribute.
- The timing model is labelled an allocation model: checkpoints are allocated, per-card holds are the hold pool shared in proportion to each card's information load, and the stated ±600ms is a chosen allocation tolerance, distinct from measured uncertainty (no onset measurement exists). Full-segment onset/hold measurement remains deferred for lack of priced frame evidence in the packet.

## Derived timeline (from the artifact's own deriveTimeline)
| Card | Start | Boundary/End | formedMs | Deadline | Hold (deadline − formed) | Load-proportional hold target | Load units |
|---|---|---|---|---|---|---|---|
| 1 | 0 | 7000 | 3420 | 6700 (fade-out start) | 3280 | 3301 | 26 |
| 2 | 7000 | 14000 | 10170 | 14000 (end) | 3830 | 3809 | 30 |
Derived total: 14000ms. Hold residuals vs targets: −21ms / +21ms.

## Own-check evidence (all run against the bound build's source; suite result 72 pass / 0 fail; script syntax check passes)
- **Consumption census:** 82 of 82 CONFIG keys classified APPLIED (CSS var consumed by a rule or a JS construction path, SVG/timeline computation) or METADATA (named stage data attribute effect). The two removed keys are asserted absent (key, binding, reference) — as are the former handover key and the former total-duration key.
- **Swap / effect tests:** text overrides change the configured card text; a one-segment pie produces the full-ellipse case; a zero-total pie produces a validation error and zero constructible label spans; a negative segment is rejected at validation; lengthening one card's duration shifts every later checkpoint and the derived total by the same delta; the legend's modelled rect moves when its top/right keys are mutated; the demonstration row moves when its gap key is mutated; the modelled pie bounds change when the pie-size key is mutated.
- **Discriminating formation tests:** with five segments and label timing extended so the final staggered label completes after every other element, formedMs equals that label's exact completion (6090ms in the test configuration), and that configuration validates; pushing the same formation past the deadline fails validation; a last-card overrun fails validation against the end deadline.
- **Handover trace:** sampled every 25ms across the boundary window — never both headlines above 0.10 opacity; outgoing opacity monotonic to 0 at the boundary with intermediate values (no instant vanish); no incoming checkpoint before the boundary. Loop seam traced separately: the last card holds fully formed to the derived total, then the first card's formation restarts; no both-headlines state in the pre-seam window; the seam is a hard chapter-restart cut over a persistent background.
- **Purity:** zero external loads, zero media elements, zero specimen/frame references in the source; the asset inventory is the single self-contained HTML file only.

## Displayed-state model (source-bound; glyph factor 0.62 × font size for text widths; padding-inclusive rects; stage heights 202.5px at 360px width, 219.4px at 390px)
Every simultaneously displayed pair per card was enumerated and asserted DISJOINT on the modelled rects at BOTH widths: 36 of 36 pairs disjoint at 360px and 36 of 36 at 390px; every rect inside the stage; every text size ≥11px at 360px (smallest: provenance/demo text 11.0px, labels and legend 11.2px). Entrance/exit transforms priced: the hero scale runs from below 1 to 1 about its centre, so formed-state hero bounds are the maximal extents; the headline rise completes before the chip checkpoint on both cards, so no rise-state headline rect coexists with a visible chip; fades change opacity only, not rects. All text elements are single-line (nowrap) by construction — exactly one reachable wrap state per element — and the corresponding overflow state (glyph-extent width vs available row width) was checked for the default content at both widths: all fit. Hypothetical 2-line states were also modelled as a priced baseline: a 2-line takeaway pill stays disjoint from the pie; a 2-line demonstration tag's bottom would reach 76.7px at 360px against a hero-zone top of 72.9px (a priced baseline only — that state is unreachable under the current nowrap construction).

### C2 results (segment labels) — filed separately
Label tops at 360px: 85.0 / 113.4 / 141.8px (consecutive separations 28.4px and 28.4px); at 390px: 92.1 / 122.9 / 153.6px (separations 30.8px). Every label rect is separated from the pie's PAINTED bounds (ellipse plus depth face, computed from the pie geometry as displayed, not the SVG box): minimum rect gaps at 360px are 2.8 / 2.8 / 5.2px per label; at 390px, 3.0 / 3.0 / 5.6px. All label rects inside the stage and disjoint from the takeaway pill at both widths.

### C3 results (demonstration tag row) — filed separately
At 360px: chip row top 33.8px, demonstration row top 54.6px (its own row, below the chip row's bottom), demonstration row bottom 65.6px, hero-zone top 72.9px — the row clears the hero zone by 7.3px. At 390px: chip row top 36.6px, demonstration row top 59.2px, bottom 71.1px, hero-zone top 79.0px — clearance 7.9px. The tag's glyph-extent width fits its row alone at both widths, and the tag is disjoint from the chip, formula, legend and pill rects at both widths.

## Comparison
Interface unchanged (derived duration 14000ms, same controls, same sides): comparison.html was not re-pointed; its ORIGINAL side is byte-identical to its pre-attempt baseline hash.

## Limitations
- PIXEL-UNVERIFIED (above): modelled separations — in particular the 2.8px minimum label-to-pie rect gaps — rest on the 0.62 glyph factor and the configured font stack; rendered browser metrics may differ.
- Timing fidelity is capped by the allocation model: only the two anchor frames plus the anchor census are priced evidence; intermediate onsets and holds are allocated, not measured.
- The second card is a labelled demonstration of the chapter form, not a measured second specimen chapter.

## Scoring payload manifest
Five lens payloads are preserved under `codex/attempt-3/` as `instr-<lens>.txt`, each binding to the frozen sha above. Each payload contains ONLY: the lens charge (adapted from the standing lens-instruction form), neutral technique facts, this build record, and the bound recreation source. No other material is fed to any lens; each payload was scanned before firing for numerical and qualitative anchors (scores, averages, deltas, target or verdict language) — none present. No lens sees another lens's return.
