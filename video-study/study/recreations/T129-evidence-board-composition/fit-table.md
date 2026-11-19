# fit-table — T129 attempt 2 (guard-measured-fit, pre-wave, recreation.html SHA 936578a6dd7cff92df7a043dca70dd2191673ad640021d011c2a933e88106553)
Method: logic-level geometry measurement at the 360 px stage (no browser binary; PIXEL-UNVERIFIED). All rows are POST-FIT measurements from the build's own computeLayout() run by the builder's node harness on the final source (not formula assertions — the harness recomputes widths from the glyph model, wraps the exhibit labels at their actual inner widths, enumerates wrapped states, and checkpointsOk rejects any overflow/ink-floor breach; final CONFIG: ok, errs [], warnings []). Ink height = fontPx × 0.716 (the build's ink model); the legibility floor is ~11 px ink.

| element | container | fontPx | ink h | ink w (measured) | container inner w | margin (total, binding side) |
|---|---|---|---|---|---|---|
| map label "AUSTRIA-HUNGARY" | black chip, h 24, at (10,12) | 16 | 11.46 | 147.5 | 147.5 (chip w 157.5 − 2×padX 5) | 0 by construction — chip width derives from ink; pad 5/side stands outside the ink |
| map label "SERBIA" | black chip, h 24, at (170,12) | 16 | 11.46 | 60.7 | 60.7 (chip w 70.7 − 10) | 0 by construction; pad 5/side |
| map label "BOSNIA" | black chip, h 24, at (12,52) | 16 | 11.46 | 60.7 | 60.7 (chip w 70.7 − 10) | 0 by construction; pad 5/side |
| exhibit label "GAVRILO PRINCIP" (portrait chip, wraps 2 lines: GAVRILO / PRINCIP) | chip 88×44 below portrait card (card 104×54 at (242,8); chip at y 64, bottom 108) | 16 | 11.46 | 70.8 per line | 78 (88 − 2×padX 5) | 7.2 |
| exhibit label "FIRST ATTEMPT: BOMB" (photo caption zone, wraps 2 lines: FIRST / ATTEMPT: BOMB) | photo card 138×89 at (202,110); caption zone at (204,155), 134×40, bottom 195 vs card inner bottom 197 | 16 | 11.46 | 50.6 / 121.7 | 128 (138 − 2×padX 5) | 6.3 (line 2, binding); vertical clearance 2 px below caption zone inside the card |
| stamp "FAILED" (rotated −8°) | stamp zone at the top of the photo card; rotated bbox 106.1×40.1 centred (271,132.5), spanning y 112.4–152.6 | 22 | 15.75 | 83.5 (box w 103.5 − 2×padX 10) | 83.5 | bbox fully inside the stage (x 218.0–324.0) and DISJOINT from the caption zone (caption top 155; gap 2.4 px) — measured at the hold state |
| note title "28 JUNE 1914" | note card 184×84 at (8,116) | 16 | 11.46 | 111.6 | 168 (184 − 2×padX 8) | 56.4 |
| note line "TOWN HALL" | note card | 16 | 11.46 | 86.2 | 168 | 81.8 |
| note line "RECEPTION" | note card | 16 | 11.46 | 91.1 | 168 | 76.9 |
| note line "VISIT WOUNDED" | note card | 16 | 11.46 | 126.6 | 168 | 41.4 |

Wrapped states enumerated (A-C006-3): the photo caption model measures the actual wrap of the current label (2 lines) and the card height is the asserted sum over that wrap count; a 4-line wrap of a longer label grows the card to the same formula's sum (129 px) in the own-check suite (E8). Portrait chip height is likewise the wrapped sum (2 lines → 44 px).
Hold state: typing ends 13950 ms; the completed board (all elements at final positions, stamp bbox and caption as above) holds unchanged from 13950 ms to cycle end 16950 ms (3000 ms), asserted at both endpoints in the own-check suite.
Hierarchy: stamp 22 px vs all board/note text 16 px = measured ratio 1.38× (the stamp is the board's dominant text, as in the specimen); map labels, exhibit labels and note text are uniform 16 px by design (no hierarchy claimed among them, so no hue-only hierarchy arises).
Watch (not a HIT): every 16 px subject element measures ink 11.46 px — 0.46 px above the ~11 px floor. Carried from the prior attempt unchanged (type size was not a priced defect; enlarging it was a deferred item in the plan).
HIT list: EMPTY.
