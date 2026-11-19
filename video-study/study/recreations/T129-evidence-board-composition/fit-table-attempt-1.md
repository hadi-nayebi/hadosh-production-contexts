# fit-table — T129 (guard-measured-fit, pre-wave, final build SHA 84491b05e3d38bae5111c61fe3ff43077d5fbe489dc0f55b942194ab1b4dabf6)
Method: logic-level geometry measurement at the 360 px stage (no browser binary; PIXEL-UNVERIFIED). All rows are POST-FIT measurements from the build's own computeLayout() run by the completer's node harness on the shipped script (not formula assertions — the harness recomputes widths from the glyph model, wraps the exhibit labels, and checkpointsOk rejects any overflow/ink-floor breach; default CONFIG: ok, errs [], warnings []). Ink height = fontPx × 0.716 (the build's ink model); the legibility floor is ~11 px ink.

| element | container | fontPx | ink h | ink w (measured) | container inner w | margin (total, binding side) |
|---|---|---|---|---|---|---|
| map label "AUSTRIA-HUNGARY" | black chip, h 24, at (10,12) | 16 | 11.46 | 147.5 | 147.5 (chip w 157.5 − 2×padX 5) | 0 by construction — chip width derives from ink; pad 5/side stands outside the ink |
| map label "SERBIA" | black chip, h 24, at (170,12) | 16 | 11.46 | 60.7 | 60.7 (chip w 70.7 − 10) | 0 by construction; pad 5/side |
| map label "BOSNIA" | black chip, h 24, at (12,52) | 16 | 11.46 | 60.7 | 60.7 (chip w 70.7 − 10) | 0 by construction; pad 5/side |
| exhibit label "GAVRILO PRINCIP" (portrait chip, wraps 2 lines: GAVRILO / PRINCIP) | chip 88×42 below portrait card | 16 | 11.46 | 70.8 per line | 78 (88 − 2×padX 5) | 7.2 |
| exhibit label "FIRST ATTEMPT: BOMB" (photo card, wraps 2 lines: FIRST / ATTEMPT: BOMB) | photo card 138×66 | 16 | 11.46 | 50.6 / 121.7 | 128 (138 − 2×padX 5) | 6.3 (line 2, binding) |
| stamp "FAILED" (rotated −8°) | stamp box on photo card; rotated bbox 106.9×46.1 centred (271,161) | 22 | 15.75 | 83.5 (box w 103.5 − 2×padX 10) | 83.5 | 0 by construction; bbox stands inside stage (217.5–324.5 × 138.0–184.1) and inside the photo card's span |
| note title "28 JUNE 1914" | note card 184×84 at (8,116) | 16 | 11.46 | 111.6 | 168 (184 − 2×padX 8) | 56.4 |
| note line "TOWN HALL" | note card | 16 | 11.46 | 86.2 | 168 | 81.8 |
| note line "RECEPTION" | note card | 16 | 11.46 | 91.1 | 168 | 76.9 |
| note line "VISIT WOUNDED" | note card | 16 | 11.46 | 126.6 | 168 | 41.4 |

Hierarchy: stamp 22 px vs all board/note text 16 px = measured ratio 1.38× (the stamp is the board's dominant text, as in the specimen); map labels, exhibit labels and note text are uniform 16 px by design (no hierarchy claimed among them, so no hue-only hierarchy arises).
Watch (not a HIT): every 16 px subject element measures ink 11.46 px — 0.46 px above the ~11 px floor. This is the family's known binding margin (T54 readability 55 · T17 readability 28 priced it in the Plan); it is printed here for the readability lens, not cured by enlarging text in a completion cycle that does not rebuild.
HIT list: EMPTY.
