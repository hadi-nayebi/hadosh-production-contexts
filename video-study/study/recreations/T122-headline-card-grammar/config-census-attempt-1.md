# config-census — T122 (guard-config-census v3.1, pre-wave, final build SHA 195211513bc9d38c0ee5df5e92eeb251c2a656825929711d9e325055802da382)

## All-literal scan (outside CONFIG)
- Colors/durations/geometry in CSS/JS body: stage sizing, grid, transitions, borders, padding all read from CONFIG. Remaining literals classified: `1px` grid line thickness (structural — line rule, does not scale subject), `0`/`1` opacity states (structural), loop indices and `performance.now()` arithmetic (structural), `'\u2713  '` check glyph prefix in checklist row text (subject content derived from checklist kind — classified subject-shaping but inseparable from kind; noted, not a HIT as it carries no specimen value and changes with kind), `'0 10px'` checklist row padding (structural layout constant inside row box already bounded by CONFIG check.w/rowH — noted).
- Font stack: CONFIG.font applied via stage.style.fontFamily — subject-shaping and CONFIG-bound ✓.

## Key → application site resolution
stage.w/h → stage width/height · cycleMs → tick modulo · grid.cellPx → backgroundSize · enterMs → beat transition · headline.top/fontPx/chipRadius → headline style · support.top → support style · insert.w/h/fontPx/pad → insert card · check.w/rowH/gap/fontPx/offsets/warnAt/warnFontPx → checklist rows + warning · font → fontFamily · beats[].headline/support → DOM construction · atMs → tick beat selection + checklist local time · palette.field/grid/ink/blue/chipBg/chipInk/card/cardEdge/warnBg/warnInk → background, gradients, spans, chip, cards, warning (blue also via CSS var --blue setter: stage.style.setProperty('--blue', palette.blue) — setter present ✓).

## CSS-variable setter check
--blue set from CONFIG.palette.blue and consumed by .headline .blue — PASS, no unset variable.

HIT list: EMPTY.
