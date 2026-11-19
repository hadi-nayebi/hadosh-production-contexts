# T17 fake-newspaper dataviz — construction facts (neutral)

A single self-contained HTML file recreates a fake-newspaper animated dataviz: a broadsheet masthead, then six figures arriving in sequence on one stage — a line chart with a side card, a waffle chart with a typed summary card, a stacked-bars figure with a bar chart and donut, an org chart with a badge, a counter-and-graph collapse figure, and a correction figure with a stamp and margin notes. All construction is procedural from one configuration object; no specimen media, no external assets.

Construction facts a reviewer can verify in the source:

- A stub-DOM mount harness executes the file's own builders and asserts the mounted structure: each modelled claim is checked against its mounted counterpart (parent and sibling order, emitted class inventory, mounted font sizes, per-node connector endpoints at two phone widths). The harness's claim census prints with the check packet.
- The org chart mounts one connector layer per report row, each layer directly above its row; every connector line ends at its own report node's anchor in that layer.
- The correction figure's stamp wrapper carries a real top padding equal to the modelled upward-extension reserve for that width, and its minimum height includes that reserve.
- The badge's handwritten segment is mounted at the same font size the measurement model uses for that segment; the sans segment uses the body size. One size source per segment.
- Figure transitions keep the outgoing figure visible under a floor and release it through a continuous ramp; the displayed outgoing opacity is continuous at both joins of the release (asserted at 1 ms sampling).
- The waffle callout label is placed on the side of its dot that its arrow points toward, clear of the dot and of the neighbouring dot's space.
- The non-wrapping title rule targets the class the title builder actually emits; a stylesheet census asserts every class selector in the stylesheet matches an emitted class.
- Stack units carry an explicit line height equal to their inner height (unit height minus both borders), and the unit height floor includes both borders.
- Validation is a total function over a declarative schema: group presence (palette, fonts, timing, layout, bounds, formatting, type floors), strict types (a string-typed number is a named error, never coerced), finite and safe-integer bounds, positive bounded ranges for rates and steps, per-figure required fields per type, and absence classes (missing group, missing figure, missing member) — every malformed shape returns named errors; validation never throws.
- The fit report retains rejected figures with their errors and reports not-ok if any figure is rejected or over-wide; stack geometry reports its actual consumed width on desktop (column + gap + chart).
- Rebuild is atomic: the replacement is validated first, construction happens against a snapshot, and a construction failure restores the prior configuration and scene and returns a named error; a successful rebuild's readers (palette, meta row) resolve against the newly mounted scene.
- Values that exist in both a rendered form and a modelled form have one configuration source with two consumers: stamp padding and letter-spacing, label line height, desktop stage width and aspect. The pre-cliff diagnostic prints its bound derived from the configuration value it names.
- Playback self-starts when the file is the top-level document; the final counter value's displayed hold is at least 0.6 s.
- Verification limitation: no rendered-pixel evidence exists for this file. A headless Chromium launch was attempted and failed at startup ("Hatch WebGL domain policy is required for browser startup"), so all geometry evidence is logic-level: emitted-structure assertions on a stub DOM plus source-derived geometry. No claim in this packet rests on rendered pixels.
