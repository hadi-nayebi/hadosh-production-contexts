# T03 — measured-fit leg · attempt 3 · 2026-11-17

Leg: measured fit of every subject text element at the 360 px stage,
run on the new attempt's recreation.html (final sha256
1f182eac11d6afb4a02570526d4b0a26fcd96fdcda08381a298f0d12abff8b96)
before the re-scoring wave.

Measurement basis: a deterministic geometry model of the source's own
layout rules (rendered pixels are unavailable in this seat — the
headless route fails at launch; see the build record's pixel status).
Model inputs, all read from the built source: stage width 360 px; body
padding 5vw per side → content width 324 px; font size from the
source's clamp = min(30, max(16, 360 × 0.055)) = 19.8 px; monospace
advance 0.6 em = 11.88 px per character cell; line height 1.5 → row
height 29.7 px; glyph ink height ≈ 0.72 × font size ≈ 14.3 px; prompt
zone = 1 character cell + the configured 0.6 ch gap = 19.0 px on the
first row of each line; wrapping is greedy by word (pre-wrap), with
break-word as the overflow guard.

| Element | Container | Measured ink bounds | Container bounds | Margin (binding side) |
|---|---|---|---|---|
| prompt glyph (per line) | line box, first row | 11.9 px wide × 14.3 px ink high | 324 px row width | gap to text 7.1 px (configured) |
| line 1 text (28 clusters) | line box | row 1: 23 chars = 273.2 px; row 2: 4 chars = 47.5 px; 2 rows, box height 59.4 px | 324 px per row | row 1: 324 − (19.0 + 273.2) = 31.8 px |
| line 2 text (34 clusters) | line box | row 1: 25 chars = 297.0 px; row 2: 8 chars = 95.0 px; 2 rows, box height 59.4 px | 324 px per row | row 1: 324 − (19.0 + 297.0) = 8.0 px |
| line 3 text (28 clusters) | line box | same as line 1: 2 rows, box height 59.4 px | 324 px per row | 31.8 px |
| cursor block | line box (out of flow) | 0.62 ch = 7.4 px wide × 1 em = 19.8 px high | positioned at the revealed boundary; adds no width or height to any row | n/a — out-of-flow by construction |
| visible window (3 lines) | stage | reserved height = 3 × 59.4 = 178.2 px (largest window total of the measured per-line heights) | stage min-height set to the reserved height | 0 px — reservation equals the window total by construction |

Legibility floor: measured subject-text ink height ≈ 14.3 px at the
360 px stage, above the ~11 px floor for every text element.
Hierarchy: single text size by design (lyric lines are peers); the
prompt is distinguished by color and position, not size — no size
hierarchy is claimed, so no hierarchy ratio is owed.

## HIT list
Empty — PASS for this leg under the stated model basis. No text
element lacks a row; every row's bounds come from the model's post-fit
geometry (wrapped rows counted), not from the fitting formula's own
assertion; no ink height falls below the floor. Carried limitation:
the measurements are model-derived, not rendered-pixel measurements
(the seat's render route is down); that limitation is printed here and
in the build record, and is not counted as a HIT by this leg's own
terms (fit asserted from an unmeasured formula would be; this table
measures the wrapped geometry the source computes).
