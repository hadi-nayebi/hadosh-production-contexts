# fit-table — T182 detail-to-wide match on action · attempt 1 (guard-measured-fit leg, A6)

## Text elements
The recreation is TEXT-FREE by construction (RUN §2: no text is the subject in this technique; no rendered text, no captions, no labels inside the scene). Mechanical proof on the final recreation.html (SHA-256 80221825fd720b36084ca54a0578309b8b0ff1811927023800b4de8244420497):
- `grep -c '<text' recreation.html` → 0
- No DOM text nodes are created by the build script (scene built exclusively from SVG shape elements: rect / ellipse / circle / line).
- The only text strings in the file are the HTML `<title>` (browser chrome, never rendered on the stage) and the CONFIG data-only `accentLabel` (never rendered; swap-harness identifier only, RUN §2c.1(e)).

**Text-fit rows: NONE — priced N/A.** There is no subject text element to measure, so the leg's fit class (fit asserted, not measured) has no instance in this build. This is a priced N/A, not an omitted leg: the guard's checks 1–4 each require a text element, and the census above proves the set is empty.

## Geometry measurement (in place of text rows — the scene's legibility geometry, measured from the final build's CONFIG via the node harness)
Stage 960×540 (16:9). All values evaluated from the filed CONFIG, not formula-claimed:
- Dough centre: (480.0, 334.8) = (doughCxFrac 0.50 × 960, doughCyFrac 0.62 × 540).
- Dough disc (wide view): 240 × 88 px (doughRx 120 × doughRy 44) — the action's subject, centred.
- Pin: length 430 px, height 17 px; hands 68 × 48 px each (handRx 34 × handRy 24), inset 62 px from the pin ends, riding the pin group.
- Detail view: the same scene at detailScale 3.2 about the dough centre — the dough disc presents at 768 × 281.6 px effective, frame-filling as the specimen's detail act does; the pin presents at 1376 px effective length (cropped by the frame, as in the specimen).
- Table ellipse: 660 × 210 px; griddle 170 × 92 px; dough balls r 21 px (ry 16.8 px via ballRyFrac 0.8).

## HIT list
EMPTY — PASS for this leg (0 hits). Text class: no instances (priced N/A above). Geometry: every subject-shaping value above is a CONFIG value (see config-census.md).
