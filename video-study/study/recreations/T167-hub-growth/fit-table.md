# T167 — fit-table (A6 measured-fit leg, pre-wave)

Instrument (printed as such): node canvas-free character-width estimate — the lane's standing character-width instrument in this seat (no browser binary exists in this seat; rendered-geometry measurement is not exercisable). Arial per-character em widths summed for the CONFIG string; cap-height factor 0.716 × fontPx for ink height. Values below are font-metrics approximations produced by that instrument, not formula assertions by the build itself (the build contains no fitting formula — the name is live DOM text in a fixed CONFIG clip box).

Stage scale: ×360/1080 = 1/3. Name at fontPx 54 → stage-scaled font 18px at the 360px stage.

## Rows

| element | container | measured ink width | container width | margin | measured ink height | floor check |
|---|---|---|---|---|---|---|
| nameText "Nalpak, INC." (only subject text element) | footer.clip {x 190, y 831, w 700, h 74} | 312.1 px @1080 stage (5.780 em × 54) = 104.0 px @360 | 700 px @1080 = 233.3 px @360 | 387.9 px @1080 (129.3 px @360), centred | 38.7 px @1080 (0.716 × 54) = 12.89 px @360 | 12.89 ≥ 11px floor → PASS |

Raw instrument output:
```
char "N" em 0.722
char "a" em 0.556
char "l" em 0.278
char "p" em 0.556
char "a" em 0.556
char "k" em 0.556
char "," em 0.278
char " " em 0.278
char "I" em 0.278
char "N" em 0.722
char "C" em 0.722
char "." em 0.278
total em: 5.780
ink width @1080 stage: 312.1 px vs clip width 700 -> margin 387.9 px
ink width @360 stage: 104.0 px vs clip 233.3 px
scaled fontPx @360: 18 px
ink (cap) height @1080: 38.7 px ; @360: 12.89 px ; floor 11px -> PASS
lineH 64 @360: 21.3 px ; clip h 74 @360: 24.7 px
```

Hierarchy: single text element; no neighbouring subject text exists to price a ratio against (the hub is a shape, not text).

## HITs
HITs: 0 — with the standing instrument limitation printed above (approximation instrument, charged knowingly; see jev-prewave disposition in scores.md).
