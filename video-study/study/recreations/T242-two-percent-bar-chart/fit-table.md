# T242 — fit-table (guard-measured-fit) · final build sha c93bc67e… · REFILED Cycle 042 Wave 39 completion (cure 6: margins recomputed from the cured CONFIG; fresh PIL re-measurement this cycle, values reproduced exactly)

Instrument: PIL rendered measurement, stand-in font **DejaVu Sans Bold** (`/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf`) — PROXY rows (no browser binary in this seat). Stage 640 px wide; phone stage 360 px (scale 0.5625). Measured = PIL `getbbox` ink bounds of the actual CONFIG strings at CONFIG font sizes, AFTER the fit cure below. The 2% stub itself is 6.8 px tall by design (the technique's claim is the ratio); its LABEL is the subject text and is measured. Cured CONFIG geometry used for every margin below: axisX **110**, axisLabelGapPx 14, barAxisGapPx 26, barW 56, barGap 40, groupGap 88.

| Element | CONFIG font | String | Measured ink @640 (w×h) | Ink @360 | Container | Margin | Verdict |
|---|---|---|---|---|---|---|---|
| axisTopLabel | axisFontPx 28 | 100% | 87×20 | 48.9×11.2 | axis label zone left of axisX **110** | text ends at axisX−14=96; ink starts 96−87 = **9 px** @640 | OK |
| axisMidLabel | axisFontPx 28 | 50% | 67×20 | 37.7×11.2 | same zone | text ends at 96; ink starts 96−67 = **29 px** @640 | OK |
| stubLabel | stubFontPx 28 | 2% | 48×20 | 27.0×11.2 | bar width 56, centred | (56−48)/2 = 4 px/side @640 | OK (≥11 px floor) |
| fullLabel | stubFontPx 28 | 100% | 87×20 | 48.9×11.2 | above bar 4, centred on bar centre **500** (barX(3)=110+26+3×96+(88−40)=472; centre 472+28=500) | spans 456.5–543.5, stage 640 | OK |
| barLabels | barLabelFontPx 26 | Chance / Wait | 107×20 / 67×20 | 60.2×11.2 / 37.7×11.2 | per-bar pitch 96 (barW 56 + barGap 40, cured build) | alternating Chance/Wait: half-widths 53.5+33.5 = 87 < 96 — no neighbour overlap | OK |
| groupLabels | groupFontPx 30 | ME / YOU (swap THEM) | 50×22 / 96×22 | 28.1×12.4 / 54.0×12.4 | group span 160 (2 bars + gap) | ≥32 px/side | OK |

**Cure recorded:** at first-draft fonts (axis 20 / stub 22 / barLabel 20 / group 26) measured ink heights @360 were 8.4–9.0 px — below the ~11 px floor. Cured in CONFIG only (28/28/26/30) + bar labels shortened ("Waiting"→"Wait") + barGap 28→48 / groupGap 68→88 / figureX 522→545 to hold label pitch; re-measured rows above.
**Width cure (jev-prewave cure round, Wave 38):** the first-draft axis (axisX 92) put the "100%" ink 9 px past the left edge in the PROXY font. Cured in CONFIG/geometry: axisX 92→110, barGap 48→40 (pitch 96, label non-overlap re-verified above).
**Completion cure 6 (Cycle 042):** the Wave-38 filing of this table still carried three stale-geometry values — axisX named 92 in the axisTop row, axis-mid margin 11 px, full-label centre 498. All three recomputed from the cured CONFIG above (axisX 110 · axis-mid margin **29 px** · full-label centre **500**) and the PIL ink widths re-measured fresh this cycle (87 / 67 / 48 / 107 / 50 / 96 px — identical to the cured-build measurement). HITs: **0**.

HIT list: **empty (0 HITs)**.
