# T106 — guard-measured-fit output (A6 leg 1, FINAL build, pre-wave)

Method: geometric measurement from CONFIG values at the 360×203 px stage (hinge/trig for the lid, framing-transform windows for scene B). PIXEL-UNVERIFIED (no browser binary; font-metric measurement does not arise — see the text row).

## Subject text elements
**None exist.** The technique is textless: recreation.html creates only divs, sets no text content anywhere (no text key exists in CONFIG — the RUN §2 words leg is priced N/A for this item). The guard's text rows therefore have no subject to measure; the leg's containment discipline is applied to the subject SHAPES below, which are this build's readability carriers.

## Subject shape rows (measured)
| Element | Container | Measured bounds | Container bounds | Margin / verdict |
|---|---|---|---|---|
| Lid tip at θ=64° (action end) | scene A, framingA 1.0 | tip at (154.1, 63.7) px from hinge (112,150), len 96 | stage 360×203 | inside, ≥63.7 px on the binding (top) side ✓ |
| Lid + base at θ=8° (closed) | scene A | base x 112–262, lid along base plane y ≈146–155 | stage 360×203 | inside ✓ |
| Beam (screen glow) | scene A | x 118–192, y 78–124 | stage 360×203 | inside ✓ |
| Desk line | scene A | x 89–285, y 162–164 | stage 360×203 | inside ✓ |
| Scene-B hero card | scene B under framingB (visible local window x [20.7, 269.0], y [9.7, 149.7]) | local (52,32)–(202,94) | visible window above | fully visible ✓ |
| Scene-B card 1 | scene B | local (52,100)–(202,122) | visible window | fully visible ✓ |
| Scene-B card 2 | scene B | local (52,126)–(202,148) | visible window (bottom edge 149.7) | fully visible, 1.7 local px margin ✓ |
| Scene-B header bar | scene B | local (0,0)–(360,16) | visible window | FULL-BLEED by construction: it spans past the scaled frame on both sides so its visible portion covers the full stage width; it carries no content — measured and printed, not a containment failure |
| Card bars (×2 per card) | inside cards h=22 | stack height 5 + 2×4 + 5 = 18 px | card height 22 px | fits, 4 px margin ✓ |

Hierarchy (measured): subject (lid/screen, opacity 1.0, screen-on-body contrast **6.00:1**) vs background elements (beam ≤0.30 · desk 0.45 · bars 0.50 opacity) — intensity separation is an opacity/contrast fact, not hue-only. Ink-on-card contrast 12.01:1 (bars). Body-on-field 2.51:1 is the silhouette pair the specimen itself uses (dark-blue laptop on pink); the reading pair (screen on body) clears 4.5:1.

## Pre-wave cures found by this leg's geometry (cured in CONFIG, re-verified)
1. Scene-B card 2 at the Plan-form values (y 140, h 26) ended at local y 166 > 149.7 — clipped under framingB. Cured: cards re-based to y 100/126, h 22.
2. Card bars at the first-pass values (count 3, h 5, gap 7, inset 8) needed 37 px inside a 26 px card — overflow. Cured: count 2, h 4, gap 5, inset 5 (18 px ≤ 22 px).

HIT list: **empty — PASS for this leg (0 HITs on the final build).**
