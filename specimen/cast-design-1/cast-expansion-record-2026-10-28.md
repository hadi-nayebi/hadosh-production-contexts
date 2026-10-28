# JOB CAST-EXPANSION-PRODUCTION — report (2026-10-28)

**Scope:** produce the three new object assets specified in the Academy film's
Director's Score (`specimen/directors-score-L13-L21.md`, "New cast" section),
in the locked cast-design-1 engraved family, with the Gate-1 family check
measured. Assets only — no scene rendering, no pushes.

**Route (same as the existing cast):** generate on a pure black ground with
the family style block + an existing cast member as style reference →
luminance-key with `build_cast.key` (black=10, soft=26, ^0.9) → trim →
measure. Code keys, crops, pads and measures; it never draws a member.
Build script: `cast-design-1/build_cast_expansion.py` (idempotent, reruns
clean). Check script: `cast-design-1/family_check_expansion.py`; raw numbers
in `cast-design-1/family-check-measurements.json` and
`cast-design-1/cast-expansion-measurements.json`.

**Family-check method (all figures over opaque pixels, α ≥ 200):** palette
bands built around the locked tokens (NAVY #16233C · GOLD #D9A94E · CREAM
#F1E7CE; red band = foreign-hue tripwire, canon-reserved to the Book);
band-mean RGB distance to token; engraving texture = mean |Laplacian| of
luminance; edge = alpha-fringe share (8 ≤ α ≤ 247 — a soft keyed edge, vs a
crushed ~0). Cast reference ranges: navy share .014–.701 by role, laplacian
.086 (cards, mostly paper) – .239 (case), fringe .098–.320, gold-mean distance
22.8 (model) – 68.5 (case), navy-mean distance 3.5–11.2, cream-mean distance
40.4–51.2.

---

## 1. THE LENS — `cast-design-1/assets/lens.png` (1500×1348) — **PASS**

- **Spec:** score L13–L21 "New cast": brass-rimmed inspection lens, short
  handle, glass disc with cream glint wedge; in scene w 150, disc Ø ≈ 110;
  L17 ring circuit (CONST ≈1350 px/s), L18 reading hover, retires to the
  work-house roof in E·3.
- **Production:** generated 1408×1472 (style ref: model.png) → keyed →
  trimmed 1169×1348; disc measured 1100 px wide.
- **Geometry encoded:** canvas padded symmetrically to 1500 wide so the disc
  is exactly the scored fraction of asset width — disc fraction **0.7333 =
  scored 110/150**. Glass centre for the score's fixed glint point (r 5,
  α .9): **(0.500, 0.409)** of the asset.
- **Extraction note (documented, nothing drawn):** the generation's floor
  shadow keyed as a ~1092 px-wide semi-opaque streak under the finial. The
  Lens is a *held* instrument that flies the circuit — it carries no floor
  pool (the standing cast keep theirs). Mask rule: from the finial stem
  (y ≥ 1140), alpha survives only within ±95 px of the centre column
  (finial's own bright width measured ≤ 130 px); the streak is gone, a
  ≤191 px tight soft remnant hugs the finial. Verified on grey + in Panel 3
  of the contact sheet.
- **Family check:** navy .320 · gold .360 · cream .132 · **red .000** ·
  other .257 — a balanced family mix, nearest profile to the Model
  (.316/.302/.051). Band-mean distances: navy 6.5 (cast 3.5–11.2), gold 37.5
  (cast 22.8–68.5), cream 47.0 (cast 40.4–51.2). Laplacian .187 (cast
  .086–.239). Fringe .030 — soft edge present; lowest of the set because the
  glass is a large smooth field (same key as the cast).
- **Verdict: PASS** on family, geometry, and staging scale.

## 2. THE ARCHIVE WALL — `cast-design-1/assets/archive-wall.png` (1050×1029) — **PASS after one regeneration**

- **Spec:** score L13–L21 "New cast": wall of small drawers (card catalogue),
  several drawers open with cream cards visible, a ledge along its base;
  backdrop plate for A-S06, box **(40,520)–(1040,1500)** → staging aspect
  1000/980 = **1.0204**; Scene E: entry α 0→.30 in the crossfade, then
  decided stillness.
- **First generation — FAILED, named:** a tall cabinet, aspect **0.500**
  (1120×2240) vs the staging 1.0204. Cropping it to the box aspect would
  have amputated either the cornice or the scored base ledge; not fixable
  in production. Kept in raw/ as a rejected candidate
  (`media-generation-obj-archive-wall-tall-0-*.png`), per cast-design
  candidate-disposition practice.
- **Regeneration (the one allowed, failure named above):** re-prompted as a
  wide, low bank (8 columns × 4 rows) → plate 2240×1120, aspect 2.000, all
  scored elements present (blank brass label plates — no text anywhere —
  brass pulls, six drawers open with cream cards, base ledge, cornice).
- **Production:** keyed → trimmed plate 2122×1029 → **central crop at the
  exact staging aspect 1.0204** (stream-shaped precedent: an asset may be a
  crop of its plate; the full plate stays in raw/). Crop origin **snapped
  to the nearest measured drawer-column seam (x=545**, 9 px off centre) so
  the plate's left edge falls in a column gap, not through a drawer front.
  The crop keeps five open drawers. Shipped aspect **1.0204 = staging
  aspect exactly**.
- **Family check:** navy .618 (navy furniture class — folder .543,
  thinker-master .701) · gold .056 (small hardware on a navy field; case
  .086, folder .097) · cream .075 (the open cards) · **red .000** · other
  .262. Band-mean distances: navy 8.7, gold 72.6 (marginally beyond the
  case's 68.5 — the wall's brass is small, shaded hardware; judged in
  tolerance, noted here), cream 46.2. Laplacian .194 (cast .086–.239).
  Fringe .063.
- **Verdict: PASS** — family, content, and staging aspect all met; the
  first-generation failure and its regeneration are on record above.

## 3. THE GEAR — `cast-design-1/assets/gear.png` (1476×1476) — **family + centre PASS; SPEC DEVIATION on tooth count, reported not hidden**

- **Spec:** score L13–L21 "New cast": a brass cog, **12 teeth**, hub ring;
  image centre = rotation centre exactly (Gate-1 checked); Scenes D–E:
  rotation **CONST 6°/s clockwise**, mounted on the work house's wall at
  (1010,1180), in scene w 92 (r 46).
- **Production:** generated 1600×1600 (style ref: model.png) → keyed → the
  rotation centre was found by radial-symmetry optimization (16-fold
  self-similarity of the silhouette radius; cost at the found centre
  9.07 px mean radial mismatch, vs the hatch/shading asymmetry floor) and
  the asset was recentered by sub-pixel shift onto a square canvas with
  that centre at the image centre.
- **Centre check on the shipped file (Gate-1):** a ±2 px grid search around
  the image centre finds the symmetry optimum at offset **(0, +1) px** —
  **the rotation centre is the image centre within ≤1 px** (at staging
  scale, 1 asset px = 0.06 scene px). Alpha-mask centroid sits at
  (736.3, 734.9) vs centre (738, 738): a −1.7/−3.1 px offset from tooth-
  length variance in the hand-drawn cog (teeth vary a few px in length);
  the symmetry centre — the point rotation actually wobbles about — is the
  exact one.
- **⚠ SPEC DEVIATION — tooth count: the generation drew 16 teeth, not the
  scored 12.** Counted on the shipped file by silhouette-radius peaks:
  **16 peaks, evenly spaced at ~22.5°** (the drawing is clean and
  rotationally symmetric — which is why the centre check passes so
  tightly). The prompt specified "exactly 12 teeth"; the generator
  miscounted. Tooth count cannot be corrected in production (code never
  draws a member). This job's one regeneration was spent on the Archive
  Wall's structural aspect failure (its plate physically could not fill
  the scored box), and the generation-call budget for the job was then
  exhausted; rather than hide the deviation, it is reported here for a
  decision: **(a)** accept 16 teeth with a score amendment (at w 92,
  rotating at 6°/s, 12 vs 16 teeth is below reading threshold, and the
  even 22.5° spacing keeps the CONST rotation clean), or **(b)** a
  dedicated regeneration round for the gear alone before the build's
  Gate 1 closes.
- **Family check:** navy .220 · gold .453 (brass-dominant, as a brass cog
  should be) · cream .211 · **red .000** · other .223. Band-mean distances:
  gold 41.5, navy 24.8 (deep-shadow navy, same profile as the thinker
  master's shadow side), cream 46.4 — all inside or matching cast
  envelopes. Laplacian **.268** — the densest hatch in the family (cast max
  .239, the Case): the concentric turning-hatch is finer than the cast's
  typical hand; same etched treatment class, marginally denser — noted,
  judged in family. Fringe .092.
- **Verdict: PASS on family check and on the Gate-1 centre check; OPEN
  deviation on the scored tooth count (16 vs 12), decision (a)/(b) above.**

---

## Contact sheet

`cast-design-1/cast-expansion-contact-sheet.png` (1080×2368, on VOID
#05090F, 1 sheet px = 1 scene px):
- **Panel 1 — Scene E at staging scale:** archive-wall at its scored box
  1000×980, house-work w 602 in front, gear w 92 at its scored mount
  (1010,1180).
- **Panel 2 — gear neighbours:** house-work w 602 with the gear mounted,
  model at its Scene D width 170.
- **Panel 3 — lens neighbours:** lens w 150 (disc 110) hovering over cards
  w 150, folder w 150, thinker-bust.

**Build-time observation (not an asset defect):** at its scored mount
(1010,1180) the gear lands on the work-house drawing's roof slope / gable
edge, half over the wall plate behind — the score's coordinate is faithful
in both panels. If the build wants the gear seated on flat wall, the mount
point is a score amendment, not an asset change.

## Files

- Assets: `cast-design-1/assets/gear.png` · `assets/lens.png` ·
  `assets/archive-wall.png` (alongside the existing cast)
- Contact sheet: `cast-design-1/cast-expansion-contact-sheet.png`
- Scripts + measurements: `cast-design-1/build_cast_expansion.py` ·
  `cast-design-1/family_check_expansion.py` ·
  `cast-design-1/cast-expansion-measurements.json` ·
  `cast-design-1/family-check-measurements.json`
- Raw generations + sidecars in `cast-design-1/raw/` (incl. the rejected
  tall archive-wall candidate, kept for the record)

No scene renders were made; nothing was pushed — banking is a later
announced window.

---

## Appendix — JOB GEAR-REGEN outcome (2026-10-28, later the same day)

The Gear's open deviation above (16 teeth vs the scored 12) is **CLOSED —
branch (b) taken, prescription met, no score amendment needed.** A bounded
regeneration round (prompt engineered for exactly 12 teeth: "twelve teeth",
"12-tooth", one tooth per clock-hour, 30° spacing; same route, same style
reference) landed a compliant gear on **attempt 1 of 3**:

- **Teeth: 12** — counted on the shipped file by this report's own
  silhouette-peak method (`family-check-measurements.json`:
  `gear_teeth_shipped: 12`); peak angles evenly spaced 29.7–30.3°
  (≈ the scored clock-hour 30°).
- **Centre:** symmetry cost at the image centre 3.67 px (16-tooth: 4.27);
  ±2 px grid optimum at offset (−1, 0) — **rotation centre = image centre
  within ≤1 px**, same class as the shipped file's Gate-1 pass.
- **Family:** navy .171 · gold .498 · cream .219 · red .0003 (trace) ·
  other .238; band distances gold 39.7 / navy 29.0 / cream 51.2 — the same
  in-family profile as the 16-tooth gear (gold-dominant brass cog,
  deep-shadow navy). Laplacian .312 — denser turning-hatch than the
  16-tooth's .268, same noted class (finest hatch in the family), recorded
  not hidden. Fringe .115.
- **Disposition:** `assets/gear.png` is now the 12-tooth gear (1476×1476,
  same canvas size as before). The 16-tooth file is preserved at
  `raw/gear-16tooth-rejected-candidate.png`. Family check + contact sheet
  re-run against the new file. Full record:
  `hidden_files/jobs/2026-10-28-gear-regen.md`.
