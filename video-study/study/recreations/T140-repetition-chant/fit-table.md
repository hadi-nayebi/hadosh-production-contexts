# fit-table — T140 Repetition chant · attempt 1 (guard-measured-fit, A6 leg)

Measuring instrument: Python PIL `ImageFont.getbbox` with DejaVuSans-Bold at 40 px as the Arial-metric proxy for the CONFIG font stack (Arial, Helvetica, sans-serif) at fontWeight 700 — no browser binary exists in this seat, so this is a font-metric measurement, printed as PIXEL-UNVERIFIED at the render level. Stage: 360 px wide (CONFIG stageW), word slot centred, white-space:nowrap, single word at a time.

| element | container | measured ink width | measured ink height | container bounds | margin (binding side) |
|---|---|---|---|---|---|
| word "improve" (longest token) | centre word slot, 360 px stage | 184 px | 38 px | 360 px wide | 88.0 px per side |
| word "To" | centre word slot | 49 px | 29 px | 360 px wide | 155.5 px per side |
| word "and" | centre word slot | 84 px | 30 px | 360 px wide | 138.0 px per side |
| swap word "Build" | centre word slot | 115 px | 30 px | 360 px wide | 122.5 px per side |
| swap word "again" | centre word slot | 125 px | 39 px | 360 px wide | 117.5 px per side |

Raw instrument output:
```
font used: /usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf
word='improve' inkWidthPx=184 inkHeightPx=38 stageW=360 marginTotal=176 marginPerSide=88.0
word='To' inkWidthPx=49 inkHeightPx=29 stageW=360 marginTotal=311 marginPerSide=155.5
word='and' inkWidthPx=84 inkHeightPx=30 stageW=360 marginTotal=276 marginPerSide=138.0
word='Build' inkWidthPx=115 inkHeightPx=30 stageW=360 marginTotal=245 marginPerSide=122.5
word='again' inkWidthPx=125 inkHeightPx=39 stageW=360 marginTotal=235 marginPerSide=117.5
```

Legibility floor: ~11 px ink height at the 360 px stage. Every subject text element measures 29–39 px ink height — above floor. The single subject text element is the centre word slot; all tokens (and swap tokens) are measured above. No hierarchy claim between neighbouring text elements exists in this build (one word at a time).

HITs: 0 — PASS for this leg.
