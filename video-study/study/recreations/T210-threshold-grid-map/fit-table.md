# T210 — fit-table (guard-measured-fit leg, A6/A12.2)

Build bound: recreation.html sha256 `254add09d9893154b845977434d620affb04b635146c56f3705ef806085e5df5` (16,597 B; the prewave-HOLD cure round changed no CONFIG value this table measures — label/plate/palette values are identical to the first bound build, so every measurement below stands for this build; the cure's diff is named in build-record §6).
Instrument for every row: **rendered measurement with a named stand-in font** (A12.2 form ii) — PIL (Pillow) rendering with **DejaVuSans-Bold.ttf** (`/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf`), the build's browser font being a generic bold serif/sans stack in this seat. Rows labeled PROXY per the guard. No character-width × factor model is used anywhere: every bound below is a measured textbbox of rendered glyphs.
Subject text inventory: the ONLY subject text element in the build is the threshold label on the post plate. There are no region labels (specimen carries none), no tally readouts (removed in the fit cure below), and no captions (fleet law).

| # | Element | Container | Instrument | Measured ink (rendered) | Container bounds | Margin | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | Threshold label "270" (`plateText`, font-size = CONFIG `labelFontPx` 28) | Post plate rect (CONFIG `plateWPx` 76 × `plateHPx` 40), top layer, opaque `palette.plate` | PIL rendered measurement, DejaVuSans-Bold @ 28 px (stage-native size) — PROXY | ink 58 × 20 px (textbbox of "270" @ 28 px) | 76 × 40 px | W (76−58)/2 = 9.0 px/side · H (40−20)/2 = 10.0 px/side | PASS — ink fits with margin on both axes |
| 2 | Threshold label "270" at the 360 px stage (stage scale 360/640 = 0.5625; effective font 28 × 0.5625 = 15.75 px) | Same plate, scaled: 42.8 × 22.5 px | PIL rendered measurement, DejaVuSans-Bold @ 16 px (nearest integer render to 15.75 px) — PROXY | ink height 12 px @ 16 px render ("270" textbbox h = 12) | plate height at scale 22.5 px | ink height 12 px ≥ ~11 px legibility floor | PASS |
| 3 | Contrast row (amendment C10): plate ink vs plate paper | Plate | Computed from CONFIG hex values by the check harness (relative-luminance formula) | `palette.plateInk` #111111 vs `palette.plate` #ffffff = **18.88 : 1** | — | — | PASS |
| 4 | Contrast row: post vs ground | Field | Same instrument | `palette.post` #1a1a1a vs `palette.ground` #f4f1ea = **15.43 : 1** | — | — | PASS |

## Cure applied on this leg's first pass (before this filing)
First-pass measurement at the record's original `labelFontPx` 20: ink height at the 360 px stage measured 8 px (< ~11 px floor) — a HIT. Cured in CONFIG only: `labelFontPx` 20 → 28, `labelMinPx` 20 → 28 (validation now enforces labelFontPx ≥ labelMinPx), `plateWPx` 64 → 76, `plateHPx` 36 → 40. The same first pass found the renderer's two tally readout texts would measure ~6.8 px ink at the 360 px stage; the readouts were REMOVED instead of enlarged — the specimen shows no numeric readouts on this map (the map is the count), so enlarging them would have cured a fit defect by adding non-specimen content. Rows 1–4 above are measured on the cured, final build.

## HIT list
**0 HITs** on the final build (the first-pass label-floor HIT was cured pre-filing as recorded above; no hit is carried into the wave).
