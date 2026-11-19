# T103 — config-census leg v3.1 (guard-config-census) · final build
Build: recreation.html (final; hash bound in scores.md).

## Key → application-site resolution (every CONFIG key applied)
| Key | Site(s) |
|---|---|
| rows[].name | build(): rname textContent |
| rows[].items[] | build(): li textContent per item |
| rows.length | totalMs() + stateAt() step cap + build loop |
| marker.color | build(): triangle borderLeftColor / non-triangle background |
| marker.shape | build(): class + geometry branch (triangle/square/circle) |
| marker.startRow | stateAt(): rowIndex = (startRow + step) % rows.length |
| palette.card | build(): card background |
| palette.ink | render(): active row name color + item text color |
| palette.inkDim | render(): inactive row name color |
| palette.accent | build(): card.style.setProperty("--acc", accent) → li::before bullet color |
| stepMs | totalMs() + stateAt() step derivation |
| holdMs | totalMs() |
| stage.width | build(): stage width |
| type.font | build(): stage fontFamily |
| type.namePx | build(): name fontSize + marker vertical centering in render() |
| type.itemPx | build(): li fontSize |
| geom.padX / rowTop / rowH | build(): row positions + padding; render(): marker top |
| geom.markerX / markerSize | build(): marker left/size; render(): marker top |
| geom.nameItemGap / itemGap | build(): items marginTop / li marginTop |

## CSS-variable setter check
--acc: referenced by .items li::before; setter = build() setProperty("--acc", palette.accent) — ASSIGNED ✓ (fallback value removed pre-wave so no literal hides outside CONFIG).

## All-literal scan (outside CONFIG)
- Colors: `#10131f` (CSS body background — page chrome OUTSIDE the stage; structural presentation frame, not subject-shaping: the subject is the card on the stage) · `#000`/`#fff` none in recreation.html. No other hex/rgba literals.
- Font stack in CSS `html,body{font-family:Arial,...}`: page chrome only; the STAGE font is set from CONFIG type.font in build() — classified structural (chrome), with the subject-shaping stack owned by type.font.
- Numbers in logic: 0/1/2 loop & modulo indices, (s/2) triangle half-height identity, 1000 none — all structural (indices / mathematical identities), printed per v3.1.
- Strings: "px", class names, "• " bullet glyph in CSS content (the bullet is a list marker, its COLOR is CONFIG-driven via --acc; glyph itself structural typography).
HIT list: EMPTY — PASS for this leg (one pre-cure: the --acc CSS fallback carried a duplicate accent hex; removed before this census was filed).
