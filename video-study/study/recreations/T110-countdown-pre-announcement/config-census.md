# T110 — guard-config-census output v3.1 (A6 leg 2, FINAL build, pre-wave)

Build: recreation.html sha256 dfe79000d21f9455366e58d1cccf091e01c5b068b66d6bff85087bb3ff8d4dfc (post-cure; the census ran on the pre-cure build first, its hits were cured, and this filing is the re-run on the final build).

## 1. All-literal scan (outside CONFIG block)
Style block literals: `0` margins/paddings (structural — page chrome reset), `hidden`/`absolute`/`nowrap` keywords (structural — construction syntax).
Script literals outside CONFIG, each classified:
- Hex colors in code tail: **none** (every color is a palette/band key).
- Numbers in code tail: `0`, `1`, `2`, `100` — all structural: `0`/`1` are initial states, indices and the modulo identity `((t % CYCLE) + CYCLE) % CYCLE`; `2` is the symmetric-padding doubling (`width − pad × 2`, a mathematical identity over a CONFIG dimension); `100` is the percent identity in `height × heightPct / 100`.
- Strings in code tail: `"block"`/`"none"` (structural — the binary display states of the phase machine), `"px"` suffixes and `"px dashed "` border format (structural — construction syntax; width and color are CONFIG-derived: geom.groundW + palette.body), phase/scene names `"pre"/"count"/"demo"/"demo-hold"/"fade"/"out"` (structural — state-machine state labels, not subject content), `"{name}"/"{n}"` (structural — the label.template's own substitution tokens, resolved against CONFIG.label), element ids/class names (structural — construction syntax).
- First-pass HITs found by this census and CURED before this filing (re-verified by harness + re-scan after cure): cycle duration `14000` → `anchor.cycleMs` · hero line offsets `24`/`21` → `geom.lineTop`/`geom.lineGap` · tile glyph `"▲"` → `demo.marker` · unapplied `palette.cardInk` → removed · unapplied `geom.radius` → applied (borderRadius on laptop body/screen, search bar, hero, result cards) · declarative-only `demoTrigger` → read by stateAt (the same-frame cut branch keys off its value).

## 2. Application-site resolution (every CONFIG key → ≥1 site)
- stage.width/height → stage sizing + every layer's width/height + band/strip widths.
- label.template → labelText() replace chain · label.name → labelText() · label.steps[] → stateAt step index + labelText numeral · label.stepMs → stateAt step derivation + stateAt demoTrigger branch.
- scene.kind → buildOutgoing dispatch (`=== "laptop"`) · scene.label → outgoing layer aria-label.
- demo.kind → buildDemo dispatch (`=== "webpage"`) · demo.heading/title/lines[]/marker → demo text nodes.
- demoTrigger → stateAt cut-branch condition. band.heightPct → band height derivation · band.align → band top derivation · band.fontSizePx/fontWeight → band text style · band.strip → strip background · band.stripOpacity → strip opacity.
- anchor.countStartMs → COUNT_START (stateAt) · anchor.cutMs → CUT (stateAt) · anchor.cycleMs → CYCLE (stateAt/seamOpacity modulo + phase bounds).
- holdAfterMs → HOLD_START derivation (demo-hold phase boundary, harness-verified at t=10800) · loopFadeMs → FADE_START + seamOpacity ramp.
- palette.field → body background + outgoing layer background + seam background (the swap-test leg re-colors all three) · palette.bandInk → band text + hero title/lines + tile glyph · palette.accent → search bar background · palette.teal → demo layer background · palette.body → laptop body + hero background + ground line · palette.screen → laptop screen · palette.dark → laptop base + search-bar text + tile background · palette.card → result cards · palette.dim → result-card strips.
- type.font → body fontFamily · type.headSize/titleSize/lineSize → demo text sizes · type.titleWeight/lineWeight → demo text weights · type.lineHeight → txt() line-height.
- geom (31 keys: laptopX/Y/W/H · baseX/Y/W/H · screenPad · groundW/X/Y/Wpx · pagePad · barY/H · heroY/H · cardY · cardH · card2Y · radius · tileW/X/Y · textX · stripH/Gap/Top · headY · titleDY · tileGlyphX/Y · lineTop · lineGap) → each read at its named element's construction in buildOutgoing/buildDemo (scan-verified: every key has ≥1 property read in the code tail).
- CSS-variable setter check: the build uses NO CSS variables — no setter can be missing; check prints N/A-by-construction.

## 3. HIT list
**0 HITs on the final build.** Six first-pass hits (cycle literal · two geometry literals · glyph literal · two unapplied keys, one of which — demoTrigger — was cured by application rather than removal) were cured pre-wave and re-verified; none is carried into the scoring wave.
