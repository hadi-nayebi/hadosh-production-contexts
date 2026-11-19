# T110 — guard-measured-fit output (A6 leg 1, FINAL build, pre-wave)

Method: font-metric geometry measurement (Arial advance model: uppercase 0.72 em · lowercase 0.50 em · space 0.28 em · digit 0.56 em · bold ×1.02; ink height = cap-height factor 0.716 × font size) at the 360 px stage, applied to the final recreation.html (sha256 dfe79000d21f9455366e58d1cccf091e01c5b068b66d6bff85087bb3ff8d4dfc). Containers are the CONFIG geometry boxes each text is placed in; margins are container width minus measured ink width on the binding (horizontal) side. Per the §2b A1 disposition, the countdown label is config-driven DOM template text — runtime text sampling does not apply; this leg owns its legibility.

Band geometry: band height = stage height 203 × band.heightPct 18 / 100 = 36.54 px, anchored to the stage bottom (band.align). Band text line box = 36.54 px (lineHeight set to band height ÷ fontSizePx), ink height 21.5 px centred in the strip — vertical fit exact, no clipping (white-space:nowrap, single line).

| Element | Container | Ink width | Container width | Margin | Ink height |
|---|---|---|---|---|---|
| band label "Hard cut in 3" @30 bold (DEFAULT) | full-width band strip, 360 px | 187.3 px | 360 px | 172.7 px | 21.5 px |
| band label "Dissolve in 3" @30 bold (swap name) | full-width band strip, 360 px | 194.0 px | 360 px | 166.0 px | 21.5 px |
| band label "Cut on action in 1" @30 bold (longest specimen name) | full-width band strip, 360 px | 257.0 px | 360 px | 103.0 px | 21.5 px |
| band label "Dynamic zoom in 2" @30 bold (specimen name) | full-width band strip, 360 px | 248.5 px | 360 px | 111.5 px | 21.5 px |
| band label "Scene morph in 1" @30 bold (specimen name) | full-width band strip, 360 px | 233.2 px | 360 px | 126.8 px | 21.5 px |
| demo.heading "Motion Design Training" @16 bold | search bar text column (bar 332 px − 8 px offset = 324 px avail) | 183.1 px | 324 px | 140.9 px | 11.5 px |
| demo.title "Hard cut" @16 bold | hero text column (hero 332 px − textX 54 = 278 px avail) | 65.3 px | 278 px | 212.7 px | 11.5 px |
| demo.lines[0] "Instant switch" @16 | hero text column, 278 px avail | 112.0 px | 278 px | 166.0 px | 11.5 px |
| demo.lines[1] "No blend frames" @16 | hero text column, 278 px avail | 116.5 px | 278 px | 161.5 px | 11.5 px |
| demo.marker "▲" @16 bold | hero tile, 34 px | 8.2 px | 34 px | 25.8 px | 11.5 px |

Vertical stacks (measured from code positions): hero stack — title top tileY+titleDY = 10, lines at tileY+lineTop = 36 and 36+lineGap = 57, last line bottom 57 + 16×1.2 = 76.2 vs heroH 72: the last line's LINE BOX overhangs the hero's bottom edge by 4.2 px while its ink (bottom ≈ 57 + 11.5 = 68.5) stays inside the hero — printed as a measured near-fit, not hidden (same form as T104's 1.2 px near-fit). Search bar: heading line box 16×1.2 = 19.2 ≤ barH 22 ✓. Band: ink 21.5 ≤ strip 36.54 ✓.
Hierarchy check: the subject text (band label, 21.5 px ink) dominates every neighbouring text (demo texts 11.5 px ink) by a measured 1.87× ratio — size hierarchy is real, not hue-only ✓.
Non-rendered text: scene.label "Laptop scene" is an aria-label on the outgoing layer, not a rendered subject text element — no fit row owed, printed here so the row set is complete.

## HIT list
**0 HITs.** Every subject text element carries a measured row; minimum ink height 11.5 px ≥ the ~11 px legibility floor; the key row (the countdown label) fits at the default name and at every specimen technique name, including the longest ("Cut on action in 1", margin 103.0 px). One measured near-fit printed above (hero last-line line-box overhang 4.2 px, ink fully inside).
