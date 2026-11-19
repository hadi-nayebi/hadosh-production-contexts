# T38 Attempt 2 — cure plan (pre-plan-review draft)

Prior: motion 78 · timing 72 · purity 94 · reuse 68 · readability 68 → avg 76.0, min 68, FAIL.
Bar: avg ≥85 AND no lens <70. Regression guards (interim motion, score 35): hero element
appended to its card; standalone autoplay at load. Never regress; not priced cures.

## Evidence read firsthand
- scores.md full; ALL codex returns incl. lens-motion-interim1.md; build-record.md;
  recreation.html; comparison.html; digest T13 (packet 2) mechanics + frames t302/t722
  as recorded in build-record §1; grid_change_census.json (digest): change score at the
  Einstein anchor t=302 is 0.022 (low) and at the dark-energy anchor t=718 is 0.030,
  t=722 0.21 — no large cut spike and NO blank interval at either anchor; cards are
  present/building inside a continuous flow. This is the handover evidence base:
  the attempt-1 instant vanish + 150 ms empty background + serial reassembly has no
  support in it.

## Cure groups (RUN.md C2 order, convergent first)

### G1 (convergent motion+timing) — chapter handover, no blank interval
Construction: CONFIG anim.handoverMs (600). The outgoing card fades out over
handoverMs ENDING at the boundary; the incoming card's headline phase STARTS
handoverMs BEFORE the boundary (overlap window), incoming stacked above outgoing.
At every t at least one card has opacity > 0 (own-check asserts min over the
handover window of max-card-opacity > 0.9 at window midpoint, and no t where both
are 0). Card visibility windows derive from the timeline deriver (G3), not hand-set
flags. Risk: overlap could read as crossfade invention — mitigated by labelling it
in timingModel as modelled from the census evidence above (no blank frame exists
in the source anchors), uncertainty retained.

### G2 (convergent motion+timing) — measured/allocation-v2 entrances + per-card holds from information load
Construction: pure function loadUnits(card) = headline words + chip tokens +
hero items (pie: segment names' words; formula: formula parts + legend words) +
takeaway words. Formation offsets become RELATIVE per-card offsets; card 2's
legend-heavy load gets later labels/pill offsets than card 1. Each card's hold
(formed → handover start) is printed in the build record with its load units and
the allocation rule (holdMs ≈ base + perUnit × units, values in CONFIG
timingModel), so the two cards' schedules DIFFER by construction and the
difference is traceable to load, not copied. Entrance gestures (rise, hero scale,
stagger) stay, explicitly labelled allocation-model proposals (anchors cannot
prove gestures — honesty retained from attempt 1).

### G3 (reuse 68 + purity pieSize note) — CONFIG completeness + coordinated timing
- geom.pieSize added to the CSS-var binding loop; census is BINDING-based:
  own-check extracts every var(--x) used in CSS/SVG and asserts a matching
  setProperty binding exists, and every geom key is bound (name-grep false
  negative of attempt 1 is the defect being cured).
- New CONFIG style group bound as vars: headlineWeight 800, chipWeight 700,
  labelWeight 800, pillWeight 800, formulaWeight 700, gradientEnd "70%",
  formulaStyle "italic". No shaping literal remains in CSS outside vars.
- Pie: percentage label text GENERATED from segment values (segment carries
  name only); one-segment / ≥359.99° span renders a full-ellipse case;
  zero/empty total → validateConfig error, stage data-invalid, no NaN paths.
- Coordinated timing: cards carry startMs + relative offsets only; a pure
  deriveTimeline() computes absolute checkpoints; validateTimeline() rejects
  non-increasing offsets, formation ending after handover start, overlapping
  non-adjacent cards, and totalDurationMs ≠ last card end. Moving a card =
  editing its startMs; incoherence is a validation error, not a silent render.
- timingModel.anchorNote becomes applied or is reclassified: census in the
  build record distinguishes applied rendering keys from documentary metadata
  keys explicitly (anchorNote listed as metadata, not counted as applied).

### G4 (readability 68) — distinct formula/legend regions + provenance separation
- Formula hero becomes a two-zone row: formula zone (flex-basis 56%, left,
  padX) and legend zone (remaining width, own left padding) — disjoint by
  construction (flex row, no absolute overlap). Legend line 3 returns to the
  packet-recorded text "c — speed of light" (attempt 1's added
  "≈ 300,000 km/s" suffix is removed; it was not in the build-record legend).
- Card 1 provenance chip moves to its own right-aligned row below the headline
  (top = padY + headlinePx + chipGapY) — the priced cure's "separate row"
  option; explicit vertical gap replaces the ≈5.5px ink gap.
- Verification: PIXEL-UNVERIFIED stands (fleet A-C002-2, Chrome route blocked).
  Supplement (never a rendered-verification claim): source-bound displayed-state
  model in the node suite — rects computed from the source's own layout rules
  (cqw at 360/390px stage, flex zone split, row offsets) asserting formula∩legend
  = ∅, chip row disjoint from headline row, all rects inside the stage, and
  every text size ≥ 11px at 360px.

### G5 (timing 72) — second-card segment semantics
Card 2 keeps its slot but is labelled a demonstration in the artifact itself:
CONFIG cards[1].role = "demonstration" + demoTag text rendered as a small
config-driven tag on card 2 only ("SYSTEM DEMONSTRATION — SECOND CHAPTER FORM"),
placed in the provenance row zone (right-aligned, card 2's chip is pill-bl so
no collision), and timingModel states the segment's second half is a labelled
demonstration, not a source claim. Total duration stays 14000ms so
comparison.html's interface (duration, controls) is unchanged.

## Deferred (with reasons)
- Real rendered-pixel verification: blocked fleet-wide (A-C002-2); filed
  PIXEL-UNVERIFIED, modelled supplement only.
- Extending the segment to a real second chapter boundary in the source video:
  would change segment.mp4/comparison duration; the labelled-demonstration
  branch of the priced cure is taken instead.
- New entrance gestures beyond handover overlap: anchors cannot price them;
  inventing more gesture is the attempt-1 defect, not a cure.

## Own checks (Verify checklist mapping)
V1 swap test with EFFECT mappings: headline/chip/pill overrides change the
rendered text nodes; pieSize swap changes the svg width style var; one-segment
pie swap produces the ellipse case; zero-total swap produces a validation
error; moving card 2 startMs shifts ALL its derived checkpoints by the same
delta; weight/gradient swaps change bound var values.
V2 purity grep: 0 specimen media/external loads.
V3 comparison check: interface unchanged (14000ms, same controls) → comparison
not re-pointed; ORIGINAL side untouched.
V4 displayed-state containment + legibility model (G4) at 360/390px.
V5 five-lens rescore, allowlist-only payloads, identical final sha.

## WHY scaffold (if avg does not beat 76.0)
Slots per group G1–G5: tried / lens response / did-not-move. Stuck-lens
hypothesis pre-drafted: readability/reuse are the floor lenses (68); if the
binding census + region split land and they still sit <70, the plateau is the
PIXEL-UNVERIFIED evidence ceiling (lenses pricing unverified layout), and the
next attempt's difference is a working render route, not more construction.
PASS branch: scores.md Attempt 2 entry carries the tier hand-off pointer for
style-library (its act to move the tier).
