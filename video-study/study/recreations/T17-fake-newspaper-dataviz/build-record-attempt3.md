# T17 — Fake-newspaper animated dataviz · BUILD RECORD (attempt 3)

Technique: T17 (packet P1, "Look What I Can Do" @ 1:40–2:02) · practice Cycle 012 Wave 11 · Attempt 3 · 2026-11-15
Artifact dir: `hidden_files/study/recreations/T17-fake-newspaper-dataviz/`
Consumer: diagram container (DLC sentence diagrams) — a static frame whose internal figures animate in sequence.
Final source: `recreation.html` · sha256 `b2012a7a9fd8eaef1b6187754f52d233699be0528357fbd29949819a7bf0fc91`

## Construction facts

- One self-contained HTML file. All visuals are DOM/SVG generated in code from a CONFIG
  object (masthead, date line, clock, price, palette, font stacks, timing parameters,
  layout parameters, data bounds, type floors, and one data record per figure). No
  external assets, no embedded media.
- Figure construction is factory-based: a registry maps each figure type
  (lineChart · waffle · stackBars · orgChart · counterGraph · correction) to a factory
  with the signature `factory(mount, figData, deps)`, where
  `deps = { palette, timing, layout, dom, fonts, config }` (dom = the element/SVG
  helper set; layout = the computed layout model for the stage width). No factory body
  references scene-level state; a separate scene-assembly function builds the frame
  (masthead, rule, metadata line) and mounts every factory with the dependency set.
  The factories mount into any container element supplied as the mount point, with any
  palette and figure record supplied through deps.
- The public interface is unchanged: `window.T17 = { config, render, fitReport,
  validate, setTime, play, pause, restart }` plus the `time` getter, exactly as the
  comparison page consumes it. comparison.html is byte-unchanged.
- Every CONFIG field is consumed: a mutation census over all 240 leaf keys (mutate the
  key, observe a changed rendered/computed effect across state curves, geometry at two
  layouts, fit reports, validation outcomes and mounted scene traces) found no
  unconsumed key. The secondary-text palette entry is consumed by the source lines and
  the counter sub-label; the warning colour reaches its rule through a palette-driven
  CSS variable.
- Layout model and builders share single named values for every gap, margin and
  line-height the model budgets (figure-block gap, unit gap, row gaps, line heights,
  type scales and caps, chart heights and width fractions are CONFIG layout entries).
- Masthead metadata: the layout model measures the three metadata spans at the label
  size and enumerates the arrangement — one row where the measured widths plus minimum
  gaps fit the metadata width, two rows (date + clock, then price) where they do not.
  The header height and the figure offset derive from the enumerated row count
  (2 rows at 360px and 390px, 1 row at 960px).
- Fit constraint: phone stage height is capped by a named budget
  (`layout.phoneStageBudgetPx` = 640); the phone stage grows to content inside that
  budget and does not scroll. The stack unit height derives from the stack count and
  the budget that remains after the counter, the figure-block gap, the chart and an
  arrival reserve are allocated, clamped between a legibility floor (label size + 2)
  and a named maximum; a count whose derived height would fall below the floor at the
  phone probe width is rejected by validation. The maximum supported stack count (14)
  fits the budget together with the two-row masthead and the arrival reserve
  (608.8px of 640px at 360px).
- Line chart endpoint labels are anchored inward (first label start-anchored, last
  label end-anchored at the axis ends); the fit model asserts every label's displayed
  bounds (anchor ± half the measured width at the named per-character estimator) inside
  the SVG at 360/390/960, for the default labels and for a longer swapped label set.
- Waffle summary timing is content-derived: a named reading rate
  (`timing.readMsPerChar` = 12 milliseconds per character; reading seconds = character
  count × 12 / 1000) sets the completed-text hold — 89 characters → 1.068s — and the
  typing duration is what remains between the named typing start and that hold,
  bounded below by a named minimum typing duration and a named minimum fill duration.
  A summary too long to type at the minimum duration and still hold is rejected by
  validation with a named warning.
- Correction stamp: its entrance scale is capped by its rotated bounding box
  (width × |cos θ| + height × |sin θ|, θ = the named rotation) against the block width
  and a named area budget — caps 1.83 at 360px, 1.99 at 390px, 1.91 at 960px — instead
  of being clipped. The scale curve is a rapid eased approach to an overshoot state,
  a brief compression, then a settle, all inside the existing stamp allocation; the
  fit model prices the bounding box at the entrance, overshoot and settle states.
  The stamp element's display type in the cascade is a transformable type
  (inline-block). PIXEL-UNVERIFIED for the rendered state.
- Margin-note timing is distributed inside the animation budget: note starts derive
  from the note count so the last of any permitted count (1–4) completes inside the
  animation portion (last completion at normalized 0.925 for four notes) with the
  hold intact. Validation requires the cliff position to sit below the figure's
  animation fraction minus a named margin; the boundary pair 0.79 accepted /
  0.81 rejected is asserted.
- Stack units arrive by short downward translation from a named offset above their
  slots over a span-derived duration and settle onto the pile; the fit model reserves
  the arrival offset inside the figure block.
- Counter graph: the trace's horizontal progression is driven by the animation
  progress, so the complete path is drawn at animation completion and the path string
  at completion is identical to the path string at the end of the hold.
- Validation covers, beyond the supported data boundaries: non-finite values
  (windows, points, counter values), absent figure records, absent summary text,
  single oversized content (stack count, summary length) and the budget checks above.
  Default data produces zero warnings.

## Per-figure completion / hold timestamps (computed from the state functions)

| Figure | Window start (s) | Completion (s) | Hold after completion (s) |
|---|---|---|---|
| FIG. 20 line chart | 0.0 | 3.000 | 0.600 |
| FIG. 21 waffle | 3.6 | 6.432 | 1.068 |
| FIG. 22 stack + bars | 7.5 | 10.500 | 0.600 |
| FIG. 23 org chart | 11.1 | 14.100 | 0.600 |
| FIG. 24 counter + graph | 14.7 | 18.100 | 0.600 |
| FIG. 25 correction | 18.7 | 21.900 | 0.600 |

The guarantee is stated per figure: each figure's own sub-animations complete at its
completion timestamp and the hold that follows is at least the named minimum hold
(0.6s); the waffle's completed summary holds for its content-derived 1.068s.

## Modelled fit summary

| Width | Stage height | Meta rows | Fit |
|---|---|---|---|
| 360 px | 528.8 px | 2 | all six figures inside the 640px budget; FIG.22 source-line bottom at the stage bottom (528.8px), inside |
| 390 px | 528.8 px | 2 | same |
| 960 px | 540 px | 1 | all six figures inside the 432.5px content height |

Type floors (CONFIG.typeFloors, px): masthead 20 · figure title 17 · body 12 ·
label 11 · big counter 20 · handwritten 14 — asserted at every width.

## Own-check evidence (logic harness, node; 84 checks, all PASS)

- Syntax parses; the public interface surface is present and unchanged.
- Factory mounting: all six factories mount into a foreign container with a foreign
  palette and foreign font stacks; the mounted trace uses only the injected palette
  values, and no factory references scene-level state.
- Retained-mechanism consistency: draw, org-assembly and counter states agree with
  the previous build's state functions at the sampled checkpoints; the stack is
  complete at the end of its window.
- Effect mappings: each correction note maps to its own displayed opacity in order;
  each stack unit maps to its own arrival transform and opacity, settling at zero
  offset; the waffle fill maps to its dot count and typed character count.
- Content-derived summary timing: reading seconds = characters × rate; typing and
  fill durations at or above their named minima; the hold scales with a longer
  swapped summary.
- Stamp: transformable display type in the cascade model; rotated bounding box
  inside the block at entrance/overshoot/settle at 360/390/960; the scale curve
  passes through its overshoot and compression states; the notes band starts below
  the stamp's bounding-box bottom at the capped entrance scale.
- Fit: fit report passes at 360/390/960; the metadata line enumerates 2 rows at
  phone widths and 1 at desktop; FIG.22 fits the budget with the wrapped masthead,
  including at the maximum supported stack count with the arrival reserve; the
  derived unit height sits within its floor and maximum and is the height the
  builder uses.
- Endpoint labels: displayed bounds inside the SVG at all three widths, default and
  longer swapped labels.
- Budget: notes of every permitted count complete inside the animation portion;
  the cliff boundary pair is accepted/rejected as specified.
- Trace freeze: the counter path at animation completion equals the path at hold
  end exactly; the path still animates before completion.
- Consumption census: all 240 CONFIG leaves consumed (see above).
- Data swaps: waffle total, org nodes 4→6 (sixth present at completion), bars 4→7,
  counter range, notes 1→4, longer endpoint labels, longer summary (hold scales) —
  visible/computed output changes in each case.
- Adversarial validation: non-finite cliff, absent figure record, oversized summary,
  oversized stack and non-finite points are each rejected with named warnings;
  defaults produce zero warnings.
- Purity: source grep for specimen/segment filenames, media tags/extensions and
  external URLs returns no subject hits (the only URL string is the SVG namespace);
  the file loads nothing external.

## Named limitation (self-start)

The piece renders its first frame on load but does not start playback on its own:
playback requires the Play control or an external clock driving `render` (the
comparison page's slave clock). This is printed as a limitation of the construction,
not as an exemption from any timing judgment.

PIXEL-UNVERIFIED: a rendered-pixel check was re-attempted with the Chromium build
present in this environment (`/opt/meta-chromium/chrome --headless=new
--window-size=390,844 --screenshot`); startup failed with "Hatch WebGL domain policy
is required for browser startup" and no screenshot was produced. All geometry
evidence above therefore rests on the deterministic layout model, not on rendered
pixels.
