# T103 — config-census leg v3.1 (guard-config-census) · attempt 2 (practice C012)
Build: recreation.html sha256 04a53914f71e55eb8a777d6abddc72c2a54cea8f195f9607a2b5d88f5260e38a (census against attempt 2's own CONFIG)

## Key → application-site resolution (every CONFIG key applied; suite-asserted: each key name occurs outside the CONFIG block, plus mutation spot-checks)
| Key | Site(s) |
|---|---|
| rows[].name | build(): rname textContent |
| rows[].items[] | build(): li textContent per item; rowHeight(): items.length drives derived height |
| rows.length | totalMs() stepping branch + stateAt() + build loop + validateConfig range check |
| marker.color | build(): triangle borderLeftColor / non-triangle background |
| marker.shape | build(): class + geometry branch (triangle/circle/square) + borderRadius branch |
| marker.startRow | stateAt(): both acts derive their first row from it; validateConfig integer/range |
| palette.card | build(): card background |
| palette.ink | render(): marked row name color + build(): item text color |
| palette.inkDim | render(): unmarked row name color |
| palette.accent | build(): card.style.setProperty("--acc", accent) → li::before bullet color |
| act | totalMs() + stateAt(): act selection |
| seg.totalMs / assemblyStartMs / namesAtMs / itemsAtMs / departAtMs | stateAt() segment branch phase boundaries; validateConfig finiteness + ordering |
| stepMs | totalMs() + stateAt() stepping branch per-tier marked span; validateConfig > 0 |
| holdMs | totalMs() + stateAt() stepping branch terminal hold on the final marked state |
| allocNamesMs | totalMs() + stateAt() stepping branch per-tier names span |
| allocReturnMs | totalMs() + stateAt() stepping branch per-tier return gap |
| stage.width | build(): stage width |
| type.font | build(): stage fontFamily |
| type.namePx | build(): name fontSize; render(): marker vertical centering; rowHeight() via lineScale |
| type.itemPx | build(): li fontSize; rowHeight() via lineScale |
| type.nameWeight | build(): name fontWeight |
| type.itemStyle | build(): li fontStyle |
| type.lineScale | build(): name/li lineHeight; rowHeight(): line allowances |
| style.bullet | build(): generated stylesheet rule for li::before content |
| geom.padX | build(): row paddingLeft |
| geom.rowTop | rowTops() first offset + stageHeight() bottom margin |
| geom.rowPad | rowHeight(): per-row slack |
| geom.markerX / markerSize | build(): marker left/size; render(): marker centering + assembly entry position |
| geom.markerRadius | build(): square-marker borderRadius branch |
| geom.itemGap / nameItemGap | build(): li marginTop / ul marginTop; rowHeight() allowances |
| geom.entryDy | render(): assembly vertical offset at settle < 1 |

Retired / re-scoped keys (disposition printed): geom.rowH — RETIRED (layout is driven by derived row heights; the key exists nowhere in attempt 2). stepMs / holdMs — RE-SCOPED to the stepping act only (segment act boundaries live in seg.*).

## CSS-variable setter check
--acc: referenced by .items li::before; setter = build() setProperty("--acc", palette.accent) — ASSIGNED ✓. The bullet glyph is applied by a generated stylesheet rule built from style.bullet at build time (no CSS variable involved).

## All-literal scan (outside CONFIG), per-literal classification
- Colors: `#10131f` (CSS body background — page chrome outside the stage; structural presentation frame, not subject-shaping: the subject is the card on the stage). No other hex/rgba literals outside CONFIG.
- Numbers: 0 / 1 / 2 — loop bounds, array indices, modulo and the (s/2) triangle half-height identity — structural. 50 in the string "50%" — circle marker border-radius percentage, a CSS geometric identity for the circle branch — structural. 8 in "utf-8" / viewport meta — document boilerplate — structural.
- Font stack in CSS `html,body{font-family:Arial,Helvetica,sans-serif}`: page chrome only; the STAGE font is set from CONFIG type.font in build() — classified structural (chrome), with the subject-shaping stack owned by type.font. (Re-priced explicitly for attempt 2, not inherited.)
- Strings: phase labels ("absent"/"assembly"/"names"/"marked"/"departed"/"return") — internal state vocabulary, never displayed — structural. Class names, "px", element tag names — structural. Validation message strings — diagnostic text, never displayed on the stage — structural.
- Content literals: the bullet glyph lives IN CONFIG (style.bullet) — it is visible technique text, classified CONTENT and therefore never whitelisted as structural; name/item text lives in rows[] in CONFIG. No content literal stands outside CONFIG.
HIT list: EMPTY — PASS for this leg (one pre-census finding, cured before this census was filed: an unused --bullet variable assignment in build() promised no control and exerted none; it was removed, the suite re-ran green, and the source was re-frozen — the glyph is consumed through the generated stylesheet rule).
