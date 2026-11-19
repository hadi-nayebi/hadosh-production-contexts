# config-census — T122 attempt 2 (guard-config-census v3.1, pre-wave, final build SHA fafb1e68a866dc4497dbd09c3ecc36b263ab13e7bc6faf9cc658cea4ba52d03c)

## Literal scan outside CONFIG — per-literal whitelist (each named)
- `0` — CSS margin/padding reset, left/right/inset offsets, JS opacity state '0' (structural state, not a subject value).
- `1` — JS opacity state '1' (structural state).
- `800` — CSS font-weight of headline (bold construction weight, structural).
- `100vh` — body centering min-height (page chrome, structural).
- flex/display/position keywords — layout modes (structural).
- estWidth factors 0.55/0.32/0.68/0.30/0.90 — measurement-model constants of the fit estimator, not rendered values (structural, model-only).
- Loop indices, dataset index parsing, modulo arithmetic (structural).
No color, duration, geometry, padding, radius, border, glyph, or label literal outside CONFIG remains. HIT list: EMPTY (0 HITs).

## Key → effect mapping (every CONFIG key asserted consumed; harness + swap suite)
stage.w/h → stage size · cycleMs → tick modulo + seek wrap · grid.cellPx → backgroundSize · grid.linePx → gradient line thickness · enterMs → deterministic enter opacity (local/enterMs) · headline.top/fontPx → headline position/size · headline.chipRadius → chip radius · headline.padX → headline padding + overflow available width · headline.chipPadY/chipPadX → chip padding · headline.cardRadius/checkRadius/warnRadius → card/row/warning radii · headline.overflow + headline.minFontPx → headlineFont shrink policy (dataset.fontPx asserted) · support.top → support position · insert.w/h/fontPx/pad/borderW → insert card geometry/border · check.w/rowH/gap/fontPx → row geometry/type · check.offsets/warnAt → effCheck reveals · check.baseBeatMs → effCheck scaling denominator (identity at defaults asserted) · check.warnFontPx/warnW → warning type/width · check.borderW/rowPadY/rowPadX/warnPadY/warnPadX → row/warning border+padding · check.glyph → row text prefix (asserted) · font → fontFamily · bodyBg → body background · beats[].headline/support + atMs → DOM construction + beat selection · palette.field/grid/ink/blue/chipBg/chipInk/card/warnBg/warnInk → backgrounds, grid, ink, spans, chip, cards, warning. palette.cardEdge REMOVED: card/row borders derive from palette.blue (single source; swap suite asserts old blue absent from all rendered borders).
Bound-but-unconsumed keys: 0. CSS var --blue set from palette.blue, consumed by .headline .blue — PASS.
Magnitude sweep: 41 numeric leaves probed with non-finite (400-nines class) values — validateConfig rejects all 41 (bounded/rejected per field, filed in swap suite output).
