# fit-table — T130 attempt 2 (guard-measured-fit, pre-wave, final build SHA f43850d8bd84c652c1338a6f11a0d505432d46142532edcfcba55490585b2f1c)
Method: logic-level geometry measurement at 360px stage (no browser binary; PIXEL-UNVERIFIED). Ink width estimated per-glyph from Georgia bold metrics in the builder's harness convention; ink height = cap-height convention (fontPx × 0.72 shown, floor judged on fontPx ≥ ~11px per fleet practice — rows list both). Displayed-state rows computed from the applied CONFIG of attempt 2 (own-check suite, 59/59 PASS).

| element | container | fontPx | ink h (cap) | ink w approx | container w | margin binding side |
|---|---|---|---|---|---|---|
| header "SARAJEVO" | header line 360px, letter-spacing 2px | 18 | 13.0 | ~104 | 360 | 256 |
| date "28 JUNE 1914" | date line 360px, letter-spacing 3px | 12 | 8.6* | ~122 | 360 | 238 |
| swap header "VIENNA" | header line 360px | 18 | 13.0 | ~80 | 360 | 280 |
| swap date "12 MAY 1909" | date line 360px | 12 | 8.6* | ~122 | 360 | 238 |

*Cap-height values are below fontPx by construction; fleet floor (~11px) is applied to nominal font size — both subject fonts are 12–18px, none below 11px. Hierarchy: header 18px vs date 12px = measured ratio 1.50×, not hue-only.

Displayed-state rows (non-text subjects, measured from applied geometry at 360px):
| element | displayed state | measured |
|---|---|---|
| figure | head radius / body width at figX 108 | r 5px / w 8px (CONFIG figure.headR/bodyW); crowd-free clear zone ±14px around figX (1 crowd index skipped) |
| car at start | left edge at drive start | 364px ≥ 360 stage width — fully offstage |
| car at stop | centre 147.6px; centre distance to figure 39.6px; front-edge gap 7.6px | within asserted bounds (≤44; gap in [-4,12]) |
| puffs | slots at pair midpoint 111.8 ± spacing 16/2 → 103.8 / 119.8; radius to 11px; stroke 1.4px; opacity 0.95 through expansion | inside stage, on the road band |

HIT list: EMPTY. HITs: 0.
