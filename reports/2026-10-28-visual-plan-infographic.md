# JOB VISUAL PLAN INFOGRAPHIC — report (2026-10-28)

**Standing instruction served:** Hadi (2026-10-28) — Archer regularly produces
infographic-style 2D visual plans (whole video / part / single scenes) laying
out WHAT IS SAID, WHAT IS SEEN, and WHAT MOVES, so he can visually inspect
the planning and judge direction early. This job built the first one (the
soa-01 scenes film, whole film) AND the reusable generator that makes it a
regular production step. Nothing pushed, nothing delivered to Hadi.

## Deliverables

- Generator: [visual_plan.py](sandbox://workspace/goals/diy-building-and-real-learning/hidden_files/soa01-scenes/work/visual_plan.py)
  (`soa01-scenes/work/visual_plan.py`)
- Pages (1242 px wide, film palette — ink-navy / cream / gold):
  - [page-1.png](sandbox://workspace/goals/diy-building-and-real-learning/hidden_files/soa01-scenes/work/visual-plan/page-1.png) — S01–S12 (1242×4882)
  - [page-2.png](sandbox://workspace/goals/diy-building-and-real-learning/hidden_files/soa01-scenes/work/visual-plan/page-2.png) — S13–S24 (1242×4700)
  - [page-3.png](sandbox://workspace/goals/diy-building-and-real-learning/hidden_files/soa01-scenes/work/visual-plan/page-3.png) — S25–S36 + word-layer footer (1242×4934)
- Phone-check evidence (420 px-wide downscales, kept beside the pages):
  `check-p1-420.png`, `check-p2-420.png`, `check-p3-420.png` in the same folder.

## What the pages show

- **Header (page 1):** title (from the plan's `piece`), runtime 88.7 s ·
  36 scenes · 38 word events · 1080×1920; the cadence rule from the plan
  (switches land on narration words; dwell target 2.0–3.5 s, floor 1.4,
  ceiling 5.0); a legend (gold chip = expressive word, outlined chip = calm
  word, ▼ = scene switch). Pages 2–3 carry a compact header (scene range +
  chip key).
- **One row per scene:** the scene thumbnail (gold-ruled) · scene id +
  built time window + dwell + line (ending scenes tagged NEW ENDING) ·
  **SAID** — the narration line in full on the first scene of the line;
  continuation scenes show "L*n* continues — at '<anchor words>'" ·
  **SEEN** — the scored subject (a `subject_clarification_*` override wins
  where the plan carries one, e.g. S13) · **MOVES** — one chip per word
  event seated in the scene: expressive events as gold chips in the spec
  format ("the HARNESS — SWELL, top centre", "TWO PLACES — TRAVERSE →,
  top centre", "YOURS — IMAGE WORD · SETTLE, centre"), calm events as
  outlined chips ("DISTILLED — calm · rises ↑, mid right").
- **Between rows:** a switch marker — "▼ CROSSFADE 0.4s · switch on
  '<anchor words>'" whenever the next scene's plan anchor names the word.
- **Footer (page 3):** the word-layer dosage from the plan's own records —
  7/34 expressive (E22 = 1 event, 3 strikes; mantra holds 3 of 7); after
  the ending revision 8 of 37 entries, ≈15% of the 'Mad As Hell!' kinetic
  extreme, inside the 10–20% band — plus the style line (moody cinematic
  illustration · ink-navy / gold / cream palette · no text in images).

## Data sources (no film facts hardcoded)

- `scene-plan.json`: scenes + subjects, cadence rule, image style,
  word-layer enrichment (expressive set, dosage, calibration),
  ending revision (L22/L23 texts, its 3 events, tally-after).
- `transcript-v4.md`: narration line texts (`## L<n>` sections).
- `render_v6.py` (auto-discovered as the highest `render_v*.py` beside the
  generator; `--render-py` overrides, `--no-render` disables): its
  SCENES / EV / OVR literals + TOTAL give the BUILT switch anchors, event
  entry times and expressive forms — the pages report the film as built,
  not as first planned (e.g. E7 DISTILLED's corrected exit, the mantra
  strikes' exit at S34's anchor, the 88.66 s runtime).
- **Seating rule:** an event sits on the row of the scene on screen at its
  entry anchor. (So UNDERSTAND sits on S30 though it exits inside S31, and
  the KEEP / AN EYE / ON IT strikes sit on S33, exiting at S34's switch.)
- **Fallback (smoke-tested):** with `--no-render`, windows come from the
  plan's own `window`/`window_v3clock` fields and events seat by line
  order; scenes whose plan window "locks at build" simply show no times.
  Decision records in `word_events` without a `text` (the FORECLOSED
  L7 no-event record) are skipped.

## Layout spec

- Page width 1242 px; 12 scenes/page (36 scenes → 3 pages); row = panel on
  deep ink-navy (#0A0F1A / panel #121B2C), thumbnail 176×313 with gold rule.
- Type (canvas px): title 54 (Noto Serif Display Black), scene id 42,
  SAID 32 (Noto Serif Display Bold, cream), SEEN 28, chips 27, scene meta
  31, labels 23 gold caps. Strong hierarchy, one idea per labelled block —
  built for a dyslexic reader: no tiny print, no clutter.
- Arrow glyphs (↑ ↓ → ←) are drawn in DejaVu Sans (Noto Sans Display lacks
  them and showed tofu boxes in v1); the ▼ switch marker is a drawn
  triangle, font-independent.

## Phone-legibility self-check — PASS

Page 1 downscaled to 420 px wide and read in full by the job agent, then
pages 2 and 3 likewise (check files above). Every content element stays
legible at phone width without zooming: title, cadence line, legend, scene
ids/windows/dwells, SAID lines, SEEN subjects, all chips incl. arrows, and
switch markers. Smallest tier is SEEN at 28 px canvas (≈9.5 px at 420) —
readable; the tall-page format also invites pinch-zoom for detail.

Defects the check caught and the generator fixed before this report:
1. SEEN/SAID text wrapped at full text width but drawn beside its label →
   lines ran off the panel's right edge. Wrap widths now subtract the
   label offset.
2. Arrow/▼ glyphs rendered as tofu boxes in Noto Sans Display → DejaVu
   arrow segments + drawn triangle marker.
3. The transcript parser's L8 capture was overwritten by the later
   marked-synthesis section (S12's SAID showed the Clean/Marked/Intent
   annotation instead of the line). Parser now takes the first `## L<n>`
   occurrence and stops at bullets/notes.

## Reuse (the regular step)

```bash
cd <piece>/work
python3 visual_plan.py            # defaults = the piece tree around the script
# another piece / overrides:
python3 visual_plan.py --plan <scene-plan.json> --transcript <transcript.md> \
    --scenes-dir <scenes/> --render-py <render_vN.py> \
    --out-dir <out/> --per-page 12
```

The generator expects only the family's standing shapes: a plan JSON with
`piece / scenes[] (id, line, subject, anchor_in) / word_events[] /
cadence_rule_C1 / image_style / word_layer_enrichment / ending_revision`,
a transcript with `## L<n>` sections, scene PNGs named `S01.png…`, and
(optionally) a renderer exposing `SCENES / EV / OVR / TOTAL` literals.
Run it at plan time (fallback mode, before any render exists) to put the
plan in front of Hadi, and again after a build so the pages show the film
as built.

## Notes for the parent

- The plan now carries 36 scenes / 38 rendered event entries (the brief's
  33-scene film grew by the ending revision: S34–S36, E23a/b, E24) — the
  pages reflect the current film of record, 88.66 s.
- Dwells shown are the built ones (render_v6 anchors); two sit outside the
  plan's target band on paper (S08 0.6 s bridge, S06 1.2 s) — reported as
  built, not adjusted; flagging them is a film question, not a plan-graphic
  question.
