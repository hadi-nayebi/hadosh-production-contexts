# guard-measured-fit — the measured-fit leg (recreation + practice)

_Built 2026-11-15 on HQ's charge (owed checks, 2026-11-15 ~08:02 EST), from the candidate spec filed in recreation Cycle-007 Wave-5's Condense and applied ad hoc since. This file is the leg's standing definition; before this build the leg existed only as candidacy text inside RUN records (Waves 5–6) and as a builder-side instrument — never as a guard with a call point. It owns ONE defect class: readability failures whose mechanism is **fit asserted, not measured** (readability stuck/under-floor in Waves 2, 3, 4, 5 and again in Wave 10 — T54 density, T57 attribution typography). It does NOT own timing anchors, density judgment, or any content-level failure; those classes stay with their own guards._

## What the leg checks (per item, on the final recreation.html)
For EVERY text element that carries subject content (titles, labels, captions-in-scene, cards, marquees, counters):
1. **A measurement row exists, with provenance.** The item's build record contains a fit table with one row per subject text element: element id · container (box/strip/line) · the INSTRUMENT (harness run or rendered-measurement tool that produced the row) · the fitted element + stage geometry · MEASURED ink bounds after fitting (glyph ink height and width, from post-fit measurement of the rendered geometry at the 360 px stage) · container bounds · margin on the binding side. A text element with no row, or a row missing its measurement provenance, is a HIT. *(Provenance form added 2026-11-18, recreation Cycle 035 Condense — Amendment A12's paired landing: T196 + T197's model rows.)*
2. **Fit is measured, never formula-claimed.** A row whose bounds are derived from the fitting formula's own assertion (font size × assumed factor — a character-width × factor MODEL) rather than from a post-fit measurement of the rendered geometry is a HIT — the formula is the claim, not the evidence (founding instances: T20's glyph-height overstatement, ink at 76% of claimed cell pitch; T19's floored 11 px phrase in a box that could not hold it; T57's attribution lines). In a seat with no browser binary, the lawful measurements are (i) harness post-fit ink measurement of the built spans, or (ii) rendered measurement with a NAMED stand-in font, the row labeled PROXY with the font named (demonstrations: T195 harness post-fit · T190 PIL rendered measurement, Cycle 035).
3. **Legibility floor.** Measured subject-text ink height below ~11 px at the 360 px stage width is a HIT, whatever the formula claimed.
4. **Hierarchy is measured too.** Where the design claims an intensity/size hierarchy between neighbouring text elements, the rows must show the measured ratio; a hue-only hierarchy against near-equal measured sizes is a HIT (T20's neighbour-window failure).

## Output form (filed per item, pre-wave)
`fit-table.md` in the item's artifact directory: the full row set (each row carrying its instrument/provenance per check 1; stand-in rows labeled PROXY with the font named) + a HIT list (empty = PASS for this leg). The wave's RUN cites the table's path + hit count per item. The leg's verdict is ADVISORY (owner's 2026-11-14 ruling): hits are priced into the build before scoring where the builder can cure them; hits carried into the scoring wave are printed in the RUN with their disposition. What is NOT advisory is the firing: a wave whose record lacks the fit table for any item prints INCOMPLETE.

## Call point
Pre-wave, per item, after the build and BEFORE the five-lens scoring wave (wired into recreation INSTRUCTION Amendment A6 and practice INSTRUCTION Amendment A-C008 — the legs run before scoring, not after). Practice re-attempts fire the same leg on the new attempt's file.

## Scope honesty
This leg proves text fits its container at phone width, measured. It does not prove the text is the right text, the right density, or readable in motion — timing, density judgment, and content stay with the scoring wave and their own guards.

## Firing record
- 2026-11-15: BUILT (this file). First firing owed: the next recreation wave + the next practice wave, unconditionally.
