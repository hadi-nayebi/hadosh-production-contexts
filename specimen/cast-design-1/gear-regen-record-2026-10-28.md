# JOB GEAR-REGEN — report (2026-10-28)

**Scope:** one bounded regeneration round for the Gear asset only — meet
the scored prescription (12 teeth) before amending the score (ask-triage:
the score prescribes; amend only if the tool demonstrably can't). Up to 3
attempts. Assets only — no scene renders, no pushes, nobody asked anything.

**Outcome: PRESCRIPTION MET on attempt 1 of 3. The 12-tooth gear is
installed as `cast-design-1/assets/gear.png`; no score amendment was
needed; `directors-score-L13-L21.md` is unchanged (it already prescribes
12 teeth, and the artifact now matches it).**

---

## Route (unchanged from cast production)

Generate on pure black with the locked family style block + an existing
cast member (model.png) as style reference → luminance-key
(`build_cast.key`, black=10, soft=26, ^0.9) → trim → symmetry-centre
search → sub-pixel recenter onto a square canvas. Code keys, crops, pads
and measures; it never draws a member. Processing script of record:
`cast-design-1/gear_regen_process.py` (the build's GEAR section with the
symmetry fold following the measured tooth count).

## Attempt 1 — PASS (installed)

- **Prompt engineering for the count:** "a brass cog, a 12-tooth gear…
  EXACTLY twelve teeth — twelve teeth only, a 12-tooth gear, one tooth at
  each clock-hour position, the twelve teeth evenly spaced 30 degrees
  apart around the rim like the twelve hours of a clock face. Count the
  teeth: 12, no more, no fewer." Plus the family block (vintage etching,
  etched cross-hatch, deep navy shadows, brass gold, cream highlights,
  pure black ground, single centred object, plain hub ring, no text).
- **Raw generation:** `raw/media-generation-media-generation-obj-gear12-a1-0-1539107d-3e4a-4563-b650-8a83525452e9.png`
  (1600×1600). Visual count by eye: 12 teeth, evenly spaced — agrees with
  the measured count below.
- **Teeth — 12, by the family check's own method.** The silhouette-peak
  count from `family_check_expansion.py`, run against the processed
  candidate: **12 peaks**, at angles 28.5° / 58.2° / 88.5° / 118.8° /
  149.0° / 178.5° / 208.2° / 238.5° / 268.8° / 299.0° / 329.0° / 358.8° —
  spacing 29.7–30.3°, i.e. the scored clock-hour 30° spacing. After
  installation, the family check was re-run on the shipped file itself:
  `family-check-measurements.json → gear_teeth_shipped: 12`.
- **Centre — PASS.** Processed canvas 1376×1376 was padded symmetrically
  to **1476×1476** (the shipped file's exact canvas size; padding is
  symmetric so the centre stays the centre). Symmetry cost at the image
  centre **3.67 px** mean radial mismatch (the 16-tooth gear's was 4.27);
  the ±2 px grid search finds its optimum at offset **(−1, 0)** — the
  rotation centre is the image centre **within ≤1 px** (at staging scale,
  1 asset px = 0.06 scene px), the same Gate-1 class the 16-tooth file
  passed at (0, +1). Alpha centroid (735.3, 737.5) vs centre (738, 738),
  the same tooth-length-variance offset class as before.
- **Palette family — PASS.** Over opaque pixels: navy **.171** · gold
  **.498** · cream **.219** · red **.0003** (trace; the 16-tooth read
  .000) · other **.238**. Band-mean distances to token: gold **39.7**
  (16-tooth 41.5; cast envelope 22.8–68.5), navy **29.0** (deep-shadow
  navy, the same profile the 16-tooth showed at 24.8), cream **51.2**
  (at the cast envelope's 51.2 edge; 16-tooth 46.4). Profile matches the
  gear it replaces: a brass-dominant cog with navy shadow mass.
- **Texture note (recorded, not hidden):** Laplacian **.3123** — denser
  turning-hatch than the 16-tooth gear's .268, which was itself noted in
  the cast-expansion report as the family's densest. Same etched
  treatment class, finer concentric hand. Alpha fringe **.115** (soft
  keyed edge; cast range .098–.320 on standing members, gear was .092).

## Attempts 2–3

Not used. Attempt 1 satisfied every scored requirement (12 teeth +
centre ≤1 px + family), so the round stopped — generating further
candidates against a met prescription would be waste, not diligence.

## Disposition of files

- `cast-design-1/assets/gear.png` — **now the 12-tooth gear** (1476×1476).
- `raw/gear-16tooth-rejected-candidate.png` — the previous shipped
  16-tooth gear, preserved as the rejected candidate (its own raw
  generation also remains in raw/).
- `cast-design-1/regen-candidates/gear12-a1.png` (unpadded processed
  candidate) and `gear12-a1-final.png` (the padded file that was
  installed) — the round's working record.
- `family-check-measurements.json` + `cast-expansion-measurements.json` +
  the contact sheet were re-run/updated against the new file, so every
  measurement of record describes the artifact now on disk.
- The outcome is also appended to
  `hidden_files/jobs/2026-10-28-cast-expansion.md` (Appendix — JOB
  GEAR-REGEN outcome).

## Decision record

The deviation the cast-expansion report left open — decision (a) accept
16 with a score amendment vs (b) a dedicated regeneration round — was
resolved by Archer in favour of (b) under the ask-triage doctrine (a
visual-detail question with a determinable answer is Archer's to settle,
not Hadi's), and (b) succeeded. **The score and the artifact now agree:
12 teeth.** Nothing is left open on the Gear.
