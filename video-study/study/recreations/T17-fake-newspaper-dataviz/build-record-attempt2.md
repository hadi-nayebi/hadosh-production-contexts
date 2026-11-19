# T17 — Fake-newspaper animated dataviz · BUILD RECORD (attempt 2)

Technique: T17 (packet P1, "Look What I Can Do" @ 1:40–2:02) · practice Cycle 003 Wave 2 · Attempt 2 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T17-fake-newspaper-dataviz/`
Consumer: diagram container (DLC sentence diagrams) — a static frame whose internal figures animate in sequence.
Final source: `recreation.html` · sha256 `813318f8118436e6aa3272ed67c613fc75f0ab82a50c70827b07a77a0cbcd073`

## E1 pre-build filing — constraints carried from the full prior lens returns

Read in full before building: build-record.md (attempt 1), scores.md, and all five prior
lens returns (codex/lens-motion.md, lens-timing.md, lens-purity.md, lens-reusability.md,
lens-readability.md). Constraints found in those returns that the scores.md gap list does
not separately price, filed here BEFORE building began:

1. Figure changes are instantaneous opacity switches — the construction does not describe
   them as a crossfade anywhere (source comments included).
2. Secondary / muted text (source lines, counter sub-label, fading margin notes) needs
   sufficient visibility during its short reading window — muted styling stays
   subordinate to a minimum-opacity / size treatment for reading text.
3. The stamp entrance's temporary enlarged scale must remain contained inside the stage
   at its largest state (a fullest-state containment case, not only a resting-state one).

## Construction facts

- One self-contained HTML file. All visuals are DOM/SVG generated in code from a CONFIG
  object (masthead, date line, clock, price, palette, timing parameters, data bounds,
  type floors, and one data record per figure). No external assets, no embedded media.
- Figure mounting is data-driven: a builder registry keyed by figure `type`
  (lineChart · waffle · stackBars · orgChart · counterGraph · correction). Each builder
  takes a mount point, its figure data record and the palette, builds DOM/SVG sized from
  the layout model, and returns a progress renderer. Builders are mounted within this
  stage; the figure order, windows and content all come from the CONFIG figure records.
- Every CONFIG field is consumed by a builder or by the layout/validation model; there
  are no inert fields. Animation rates (draw, waffle fill, summary typing, stack, bars,
  node thresholds, badge, stamp, notes, collapse shape) are named values in
  CONFIG.timing or in the figure's own data record. Chart emphasis is a data flag on the
  label record; the waffle annotation text is a data field.
- Layout and timing derive from data length: org-node reveal thresholds divide the
  node window by the node count; bar geometry divides the plot width by the bar count;
  waffle dot size and grid shape derive from total and columns; stack unit height
  derives from the stack count and the layout block.
- Draw-on chart: the path's dash pattern is set from the path's own measured length
  (`getTotalLength()` in the browser; a polyline-length computation over the same
  points is the DOM-free equivalent used by the logic harness).
- Giant counter and its graph: both sample ONE normalized collapse function of window
  progress. The counter value is the start value plus the normalized value times
  (end − start); the graph y is its own top endpoint plus the same normalized value
  times its own displacement. The normalized function reaches exactly 1 at the end of
  the animation portion and stays there through the hold.
- End boundary: the scene state function clamps time to the duration and treats the
  final figure's window as inclusive at t = duration, so the final figure renders its
  completed state at the end of the scene.

## Duration-allocation policy

- Each figure window is allocated as: animation portion → completion → minimum hold.
  The minimum hold is a named CONFIG value (`timing.minHoldSec` = 0.6 s). Every
  sub-animation is expressed as a fraction of the animation portion, so completion
  happens at the same relative point in every window and the hold that follows is
  never consumed by animation.
- Data growth consumes animation budget first, never the hold: reveal thresholds,
  fill counts and typing lengths are fractions of the animation portion divided or
  scaled by the data length.
- Supported data boundary (CONFIG.bounds): figures ≤ 8 · waffle total ≤ 60 · bars ≤ 8 ·
  stack count ≤ 14 · org nodes ≤ 8 · margin notes ≤ 4 · chart points ≤ 8 · counter
  cliff position within 0.1–0.95 · pre-cliff drop within (0, 5% of the counter range).
  Out-of-boundary data is rejected by validation with a named warning, and the figure
  is replaced in place by a visible "Unsupported data" notice naming the problem —
  it is never silently mistimed.

## Phone-fit specification + modelled measurements

- Stage geometries: phone 360 px and 390 px wide (stage = full width; on phone the
  stage height grows to the tallest figure's computed requirement instead of clipping
  a fixed frame) and desktop 960×540.
- Type floors (CONFIG.typeFloors, px): masthead 20 · figure title 17 · body 12 ·
  label 11 · big counter 20 · handwritten 14. Type scales with stage width above the
  floors and never below them. If type at the floor does not fit, the layout stacks
  blocks vertically; the floor is never reduced.
- Heading space is reserved per figure from the modelled wrap of its title at the
  stage width (longest default title at 360 px: 2 lines, 40.8 px reserved).
- Measurement moments are each figure's fullest (completion) state, from the same
  layout model the builders build with. Modelled fit table (required / allocated, px):

| Figure | 360 px | 390 px | 960 px (alloc. 432.5) |
|---|---|---|---|
| FIG. 20 line chart | 284.1 / 388.2 | 284.1 / 388.2 | 346.6 |
| FIG. 21 waffle | 236.2 / 388.2 | 242.2 / 388.2 | 294.3 |
| FIG. 22 stack + bars | 388.2 / 388.2 | 388.2 / 388.2 | 304.8 |
| FIG. 23 org chart | 226.2 / 388.2 | 205.8 / 388.2 | 231.4 |
| FIG. 24 counter + graph | 287.9 / 388.2 | 267.5 / 388.2 | 304.4 |
| FIG. 25 correction | 229.0 / 388.2 | 229.0 / 388.2 | 308.5 |

  Stage height: 458.5 px at both phone widths (header 70.3 + tallest figure 388.2);
  540 px on desktop. At every width, every figure's widest element is within the
  content width and every font is at or above its floor.

## Own-check evidence (logic harness, node; 42 checks, all PASS)

- Syntax: the inline script parses (vm.Script) with no errors.
- Measured-length draw: polyline length for the default points at desktop plot
  geometry = 386.4 (computed from the configured points); the draw state maps progress
  0 → full offset, mid → partial, completion → 0; a swapped point set changes the
  measured length to 693.9.
- Normalized collapse checkpoints (asserted independently of the agreement check):
  value at window start = counter start; at half the cliff position the counter has
  lost exactly half the named pre-cliff drop (3,411,183,117); at the cliff position
  (0.68 of the window) it has lost exactly the pre-cliff drop (3,410,283,117); the
  loss just before the cliff stays within the pre-cliff fraction (0.00053 of range);
  at the end of the animation portion and at p = 1 the counter is exactly 1 and the
  graph sits exactly at its own endpoint; both stay constant through the hold.
- Counter ↔ graph agreement: at 7 sampled progress values, counter loss normalized
  to its own range equals graph displacement normalized to its own range (≤1e-9).
  The graph path is drawn through stepped samples plus an exact endpoint at the
  current progress, and the endpoint sampling was verified at 5 progress values
  (0.37 · 0.83 · 0.85 · 0.9 · 1): the rendered path ends at the exact
  current-progress point at each.
- Inclusive end boundary: state at t = duration is the final figure at p = 1;
  state at t = 0 is the first figure.
- Completion allocation: at the end of each window's animation portion, the waffle
  is full and its summary fully typed, the stack and bars and donut are complete,
  all org nodes and the badge are present, the stamp rests at scale 1, and all
  margin notes are fully visible; the consumed minimum hold equals the named
  CONFIG value (0.6 s).
- Computed fit: the fit table above passes at 360, 390 and 960 px (containment,
  width, floors, heading reserve).
- Visible-output data swaps: waffle total 15 → 30 changes the filled count at mid
  progress (13 → 27); org nodes 4 → 6 puts a 6th node on screen at completion with
  thresholds derived from the count; bars 4 → 7 changes bar count and widths;
  a changed counter range changes the mid-window displayed text
  (1,588,449,887 vs 2,282 for the swapped range).
- Boundary validation: default data produces zero warnings; data beyond the named
  boundary (waffle 500, bars 20, nodes 20) is rejected with named warnings.
- Purity: source grep for specimen/segment filenames, video/img tags and media
  extensions returns 0 hits; the file loads nothing external.

PIXEL-UNVERIFIED: a rendered-pixel check was attempted with the Chromium build present
in this environment (`/opt/meta-chromium/chrome --headless=new --window-size=390,844
--screenshot`); startup failed with "Hatch WebGL domain policy is required for browser
startup" and no screenshot was produced. All geometry evidence above therefore rests
on the deterministic layout model, not on rendered pixels.

## Lens-wave binding

All five lens payloads were assembled against the final source sha256
`813318f8118436e6aa3272ed67c613fc75f0ab82a50c70827b07a77a0cbcd073` and each complete
payload was inspected before firing: every payload contains only its lens instruction,
the technique facts, this record and the final source — no earlier scores, targets or
return excerpts. The exact payloads are preserved as codex/attempt-2/instr-<lens>.txt.
