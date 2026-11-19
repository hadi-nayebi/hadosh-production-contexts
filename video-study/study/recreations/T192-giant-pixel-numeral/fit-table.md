# T192 — guard-measured-fit leg output (Amendment A6, pre-wave) — RE-FILED Cycle 036 Wave 33 (A12.3 completion, on the cured build)

Build judged: recreation.html SHA-256 `2b80f53973790e295db0c9c128b51923d20f48f58a194003eb72f3c5c9644cdd` · 12,754 B. (Supersedes the Wave 32 filing on d01198b7…; the completion cures changed only the clock-control surface — seek clamp + follower flag — and no geometry, text, or fit property, but every row below was RE-MEASURED on the cured build per A12.3.)
Measurement basis (A12.2 form (ii) — rendered measurement with a named stand-in font, PROXY): PIL 10.2.0 rendered measurement, stand-in font **DejaVu Sans Mono Bold** (`/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf`) for the build's CONFIG monospace stacks, rendered at 4× logical size and measured from the rendered alpha bbox. Instrument run: `python3 /tmp/t192-fit.py` on the cured build's CONFIG values. Stage scale for the 360 px check = 360/960 = 0.375. Browser pixel rendering is UNVERIFIED from this seat (lane standing limitation). No row is a character-width model: every bound below is a post-fit rendered ink measurement (the fitted fontPx for the numeral was itself derived by rendering the stand-in at trial size and fitting to CONFIG.numeral.widthFraction, then re-rendered and measured).

Raw instrument output:
```
NUMERAL stand-in trial300 width=722.4 fitted fontPx=279.06 (cap 330.0)
NUMERAL ink logical x=169.5 y=145.0 w=633.2 h=210.5 | at 360px stage: w=237.5 h=78.9 x-margin=61.3px
LINE ink logical x=219.0 y=466.5 w=522.2 h=13.2 | at 360px stage: w=195.8 h=5.0 side-margin=82.1px
SWAPLINE ink logical w=261.5 h=13.2 | at 360px stage: w=98.1 h=5.0
HIERARCHY ratio = 15.9:1
```

| Element | Container | Measured ink bounds (logical 960×540, PROXY rendered) | At 360 px stage | Container bounds | Margin (binding side) | Row verdict |
|---|---|---|---|---|---|---|
| Numeral glyph "1971" (rendered at fitted fontPx 279.06) | full canvas | x 169.5–802.7 (w 633.2), y 145.0–355.5 (h 210.5) | ink height 78.9 px — ≥ 11 px floor; ink width 237.5 px | 960×540 (360×202.5 at phone) | x-margin 61.3 px at phone | PASS |
| Line text "DESPITE THIS, CAPTIONS HAVE REMAINED UNCHANGED, SINCE 1971" (font 15.12 logical px = line.sizeFraction 0.028×540) | bottom line strip at yFraction 0.875 | x 219.0–741.2 (w 522.2), ink h 13.2 | ink height 5.0 px — BELOW the ~11 px floor; width 195.8 px fits the 360 px stage | strip width 960 (360 at phone), centred | width side-margin 82.1 px at phone | HIT (carried, see disposition) |
| Swapped line "SAME FRAME, FIFTY YEARS LATER" (same font) | bottom line strip at yFraction 0.875 | w 261.5, ink h 13.2 | ink height 5.0 px; width 98.1 px fits | strip width 960 (360 at phone), centred | width side-margin ≈130.9 px at phone | HIT class shared with the line row (same carried disposition; width PASS) |

Hierarchy: numeral ink height vs line ink height, measured ratio 210.5 / 13.2 = **15.9:1** — the design's hierarchy is size-carried, not hue-only. PASS.

## HIT list (1)
- HIT-1 (line ink height at 360 px stage = 5.0 px measured < ~11 px floor). Disposition: CARRIED into the scoring wave, printed — carried ONLY as a carried HIT with its specimen-geometry disposition: the line's size is census-measured specimen geometry (small pixel type standing at y≈0.875 under a numeral at ≈44% frame height; plan parameter line.sizeFraction 0.028 priced from the census); enlarging it to clear the floor would falsify the measured composition the recreation exists to prove. The technique subject — the numeral — clears the floor by ~7× (78.9 px measured). The readability lens is charged with pricing the numeral's legibility (its own brief); this HIT is named here so the lens prices the line knowingly, not as a discovery. (This re-filing replaces the Wave 32 row's model-derived ≈4.1 px figure with the rendered measurement 5.0 px; the HIT and its disposition are unchanged in substance.)

Leg verdict (advisory): 1 HIT, carried with disposition above. Firing: FIRED, pre-wave, on the cured build (Cycle 036 completion).
