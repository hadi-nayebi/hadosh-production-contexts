# T38 — Headline-card chaptering · build record (attempt 2)

Artifact dir: `hidden_files/study/recreations/T38-headline-card-chaptering/`
recreation.html sha256 (final, bound to all five lens returns of this attempt):
`3530310a61d5a7e24756c1ec47f6a19f48394f38e8c8b8fdd4b9bc4754ba34b2`

## Technique facts (neutral)
Every section of the specimen opens on a designed title card in one visual system:
a headline, often with a date/provenance chip, plus the section's key object
(a computed pie; a formula with a legend). Cards double as the video's chapter
map. Anchor frames: card 1 (headline "Dark energy", provenance line, pie with
segment labels, takeaway pill) fully formed at segment t≈4s; card 2 (headline
"Albert Einstein", date pill chip "1905", formula hero with legend, takeaway
pill) is a specimen from elsewhere in the same video. The digest grid-change
census (2s bins) at the two anchors reads 0.022 (t=302) and 0.030 (t=718),
0.21 (t=722): no blank interval at a card anchor.

## Construction facts
- One self-contained HTML file; all content, timing, palette, geometry and
  style values live in CONFIG; construction reads CONFIG only.
- Timeline is derived, not hand-set: each card carries durationMs (formation
  start → chapter boundary) and relative entrance offsets; deriveTimeline()
  computes absolute checkpoints, the handover overlap (incoming formation
  starts handoverMs before the boundary; the outgoing card stays fully opaque
  until its boundary, then fades over fadeOutMs), formed times and holds.
  validateConfig() rejects non-increasing offsets, formation ending after the
  handover start, invalid pie data, and a timeline total ≠ totalDurationMs.
- Per-card information load is computed by loadUnits() (headline + chip +
  takeaway + hero words, plus the demonstration tag where present); the hold
  pool is shared in proportion to load.
- Derived timeline (ms): card 1 — start 0, boundary 7000, end 7300, formed
  3420, hold 2980, load 26 units, load-proportional hold target 3440
  (residual −460). Card 2 — start 6400, boundary/end 14000, formed 9570,
  hold 4430, load 30 units, target 3970 (residual +460). Both residuals are
  inside the model's stated ±600ms uncertainty.
- Card 2 carries role "demonstration" and a rendered tag
  "SYSTEM DEMONSTRATION — SECOND CHAPTER FORM"; the timing model states the
  segment's second half is a labelled demonstration, not a source claim.
- Pie segment label text is generated from segment values; a segment spanning
  ≥359.99° renders a full-ellipse case; a zero/empty total is a validation
  error and renders no paths.
- Every CSS variable used in the stylesheet or SVG is bound from CONFIG
  (geometry keys and style keys — weights, gradient endpoint, formula style —
  are bound through the same setProperty loops as the other geometry).
- Formula and legend occupy separate layout zones: the formula sits in a
  56%-wide zone at the left of the hero row; the legend is positioned from
  60% of stage width rightward. Card 1's provenance line sits on its own
  right-aligned row below the headline.
- Full-segment onset/hold measurement beyond the two anchors was not
  performed; intermediate checkpoints are an allocation model with stated
  ±600ms uncertainty (timingModel in CONFIG).

## Own checks (node suite, effect mappings — 34 assertions, all PASS)
- validate-clean · total-14000 · card2-start-is-boundary-minus-handover (6400)
- checkpoints-derived · loads-differ (26 vs 30) · move-effect (extending
  card 1's duration by 500ms shifts every card-2 checkpoint by exactly 500)
- incoherent-rejected (a mismatched totalDurationMs produces an error)
- pie-spans-sum360 · label-generated ("DARK ENERGY ≈ 70%" from value 70/100)
- pie-360-case (single segment → full case) · pie-zero-total-error
- override-effect (?headline= / ?pill= change the configured card text)
- binding-census-0-unbound · geom-keys-all-bound · style-keys-all-bound
- css-no-weight-literals · css-no-style-literals · css-gradient-uses-var
- handover-no-blank (no sampled t in 6300–7400ms where both cards are at 0)
- handover-minmax≥0.9 (from 6805ms on, max(outgoing opacity, incoming
  headline opacity) ≥ 0.9 through the fade) · outgoing-opaque-until-boundary
- Displayed-state model at 360px and 390px stage widths (rects computed from
  the source's own layout rules): formula∩legend disjoint · headline row ∩
  provenance row disjoint · all modelled rects inside the stage · smallest
  modelled text size 11.02px at 360px (floor 11px).
- purity: no media/external references in the recreation source.
- Regression guards: hero element appended to its card · standalone autoplay
  call present at load.
- node --check on the inline script: OK.

PIXEL-UNVERIFIED: no rendered-pixel verification was performed in this
environment; layout statements rest on the source-bound displayed-state model
above, which is a supplement, not a rendered verification.

## Comparison
Interface unchanged (total duration 14000ms, same control set, same sides);
comparison.html was not modified and its ORIGINAL side is untouched.
