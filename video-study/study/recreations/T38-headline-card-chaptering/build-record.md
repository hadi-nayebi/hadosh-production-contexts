# T38 — Headline-card chaptering · build record (attempt 1, Cycle 008 Wave 6)

Artifact dir: `hidden_files/study/recreations/T38-headline-card-chaptering/`
recreation.html sha256 (final, bound to all five lens returns): `4fd3304c89a0c817344aedfd3fac09aa29f2b437d03f02c66912ad3a585d7c3a`
Interim binding note: a first motion-lens run fired against sha a6338cce… caught two real defects (hero element built but never appended to its card; no standalone autoplay) and scored 35 — preserved verbatim at codex/lens-motion-interim1.md. Both defects were cured (c.appendChild(hero); window.__rec.play() at load), self-verify re-run PASS, and ALL five lenses re-fired against the final sha above per the identical-binding rule.
segment.mp4 sha256: `a8f26a2609bf0ac664fccd4608c4381e4039e1df7b73058ccf28ad800bc01a41` · duration 14.000 s (ffprobe), 1,058,514 bytes, h264/aac re-encode of source 718–732 s (11:58–12:12).

## §1 Observe
Mechanics (digest T13, Packet 2 — Infinite Physics, YouTube Rkb3IG46sQo): every section opens on a designed title card in ONE visual system — a headline, often with a date/provenance chip, plus the section's key object. Cards double as the video's chapter map (no YouTube chapter markers exist); the consistent system makes 22 sections feel like one object. Why it works: the viewer always knows the current question's name; cards are screenshot-able.
Frames viewed firsthand by the builder this run:
- ev/t722.jpg (12:02): deep violet cosmos field; headline "Dark energy" top-left, bold white; provenance line top-right "PLANCK 2018: ≈ 68% · 27% · 5%"; hero = 3D pie (dark energy ≈70% purple, dark matter ≈25% cyan, ordinary matter ≈5% yellow) with colored pill labels on the segments; bottom yellow pill takeaway "ROUGHLY 70% OF ALL THE ENERGY CONTENT".
- ev/t302.jpg (5:02): same system — headline "Albert Einstein", yellow date pill chip "1905" under the headline; hero = E = mc² formula drawn large with a legend (E — energy · m — mass · c — speed of light) and a mass→energy object row.
Variables: headline text · chip text/style/position · hero-object type + its data/labels/colors · takeaway line · palette · card entrance/hold timing · chapter sequence (card list cardinality/order).
Consumer: DLC assembler headline-card container (headline + chip + one object) as the standard section opener (diagram · transition slots).
Sub-beat note: only anchor frames are timed in the packet (card 1 fully formed at 12:02, i.e. ≈4 s into the segment; card 2 is the 5:02 specimen from elsewhere in the video). Intermediate entrance timings are therefore an allocation model (§2), not measured fact.

## §2 Plan
### CONFIG parameter table (all values in recreation.html CONFIG; specimen value = default)
| Key | Default | Role |
|---|---|---|
| totalDurationMs | 14000 | full sequence duration (= segment) |
| stageRatio | "16 / 9" | stage aspect |
| fontStack | Segoe UI/Arial/Helvetica | typeface |
| palette.pageBg / bg / bgGlow | #0b0620 / #160a38 / #3b1470 | page + card field + radial glow |
| palette.ink | #ffffff | headline/formula text |
| palette.chipInkPlain / chipInkPill / chipBgPill | #cfc4ee / #14100a / #ffd21f | chip forms |
| palette.labelInk / pillBg / pillInk / accentCyan | #14100a / #ffd21f / #14100a / #4fe3e0 | labels, takeaway pill, formula accent |
| geom.padX / padY / glowX / glowY / heroTop | 4.5% / 6% / 72% / 88% / 27% | layout geometry |
| geom.headlinePx / headlineTrack | 4.8cqw / 0.01em | headline size (17.28px @360) |
| geom.chipPx / chipTrack / chipOffsetY | 3.06cqw / 0em / 0.6cqw | plain chip (11.02px @360) |
| geom.chipPillPx / chipGapY / chipPadY / chipPadX | 3.2cqw / 1.2cqw / 0.7cqw / 1.8cqw | pill chip |
| geom.labelPx / labelPadY / labelPadX | 3.1cqw / 0.65cqw / 1.5cqw | segment labels (11.16px @360) |
| geom.formulaPx / legendPx / legendLine | 8cqw / 3.1cqw / 1.65 | formula hero + legend |
| geom.pillPx / pillPadY / pillPadX / pillBottom / pillRadius | 3.3cqw / 1cqw / 2.6cqw / 5.5% / 999px | takeaway pill (11.88px @360) |
| geom.pieSize / legendRight / legendTop | 34cqw / 6% / 30% | hero sizing/legend anchor |
| pieGeom (vbW/vbH/cx/cy/rx/ry/depth/startDeg/strokeW/sideOpacity/heroScaleFrom) | 100/62/50/28/34/17/7/−90/1.1/0.55/0.92 | SVG pie construction geometry |
| anim.fadeMs / risePx / heroMs / labelStaggerMs / pillMs | 450 / 26 / 700 / 160 / 420 | entrance motion |
| timingModel | kind "ALLOCATION MODEL", uncertaintyMs 600 | labeled timing uncertainty (below) |
| cards[0] | headline "Dark energy"; chip plain-tr "PLANCK 2018: ≈ 68% · 27% · 5%"; hero pie segments 70/25/5 (#a678f0/#4fc9d8/#ffd94d) with labels + labelTop/labelOff per segment; takeaway "ROUGHLY 70% OF ALL THE ENERGY CONTENT"; 0–7000ms; checkpoints headline 150 / chip 650 / hero 1100 / labels 1900 / pill 3000 | specimen card |
| cards[1] | headline "Albert Einstein"; chip pill-bl "1905"; hero formula parts "E = m " + accent "c²", legend 3 lines; takeaway "MASS AND ENERGY ARE ONE THING"; 7000–14000ms; checkpoints 7150 / 7650 / 8100 / 8900 / 10000 | system-proof card |

Timings/checkpoints as CONFIG data with LABELED ALLOCATION MODEL: only anchor frames are timed (card 1 formed by ≈4000ms into the segment). All intermediate checkpoints are ALLOCATED with stated uncertainty ±600ms per checkpoint (timingModel.uncertaintyMs, also exposed as a data attribute at runtime). Card 2's placement in the sequence is a model choice proving the chaptering system, not a claim about the original's edit at 12:05.

Construction choice: DOM/CSS/SVG headline-card system — cards built from the CONFIG card list; pie hero drawn as SVG paths computed from CONFIG segment values; formula hero as styled DOM text + legend from CONFIG. Rejected: canvas (text layout/pill fitting harder to keep config-pure); traced specimen artwork (refusal-class, §6.1); video/frame embedding (refusal-class).

Execute checklist: (1) cut segment 718–732s re-encoded h264/aac + ffprobe ✓; (2) recreation.html one file, CONFIG-driven, no external assets, no captions ✓; (3) comparison.html matched size, one synchronized control set, recreation slaved to video currentTime, labels, phone stacking ✓.
Verify checklist: swap test (words + 1 timing + 1 palette + cardinality) · purity grep + asset inventory · config-census · checkpoint postconditions · measured-fit @360px · node --check · five-lens Codex wave, bar avg ≥85 AND min ≥70.
Failure points priced: fitting limits at phone width (chip vs headline ink — measured, §5f) · config leaks (census, §5c) · checkpoint incoherence (postconditions, §5d) · render-proof limitation (no exercisable Chrome → PIXEL-UNVERIFIED, §5).

## §3 Execute record
- segment.mp4 cut with ffmpeg `-ss 718 -t 14`, libx264/yuv420p + aac, faststart; ffprobe duration=14.000000, size=1058514.
- recreation.html built per Plan; two cures during self-verify (below) landed BEFORE the Codex wave and the sha above is post-cure.
- comparison.html: video + iframe recreation side by side at matched 16:9, Play/Pause/Restart drive both, recreation clock slaved via `vid.currentTime / vid.duration * rec.durationMs` on timeupdate/seeked; stacks vertically ≤640px with controls above, reachable.

## §5 Self-verify (legs 1–3, BEFORE Codex) — all PASS, with PIXEL-UNVERIFIED limitation
(a) Swap test (node harness /tmp/t38-harness.js on a scratch-modified copy): headlines "Dark energy"→"Quantum foam", "Albert Einstein"→"Marie Curie"; chip →"KEPLER 2021: ≈ 50% · 30% · 20%"; pie data 70/25/5→50/30/20 (sum 100); timing pillMs 3000→2600; palette pillBg #ffd21f→#39d98a; cardinality 2→3 cards (third card "Ada Lovelace", 14000–21000ms, checkpoints +7000). Result: PASS — structure, checkpoint postconditions and sequence intact; technique still reads as headline-card chaptering.
(b) Purity grep on recreation.html for `segment.mp4|source.mp4|t722|t302`: 0 hits (one initial hit — a frame filename inside a CONFIG note — cured by rewording the note before the wave). `<video>`/`<img>` tags: 0. Asset inventory: recreation.html loads NO external assets (no link/img/video/iframe/url); comparison.html loads only segment.mp4 (ORIGINAL side, labeled) + recreation.html.
(c) Config-census: hex outside CONFIG 0 · rgba outside CONFIG 0 · ms durations outside CONFIG 0 · percent literals in JS construction 0. Numeric literals in construction: only structural constants {0, 1 (clamps/indices), 180, 360 (circle math), 2000 (SVG namespace URI)} — none shapes content/timing/palette. Unapplied CONFIG keys: 0 after cure (timingModel kind + uncertaintyMs now applied as runtime data attributes).
(d) Checkpoint postconditions (node harness, base + swap): per card strictly increasing ✓, within [startMs,endMs] ✓, finite positive spans ✓, globally ordered ✓, totalDurationMs ≥ last card end ✓.
(e) Measured-fit @360px (PIL DejaVu raster measurement of glyph ink vs layout-derived boxes — real font-metrics measurement, not a formula claim): headline c1 ink 121.7/box 327.6 @17.28px · headline c2 147.1/327.6 · chip c1 200.4/205.9 @11.02px · chip c2 pill 32.1/327.6 · labels 143.8 & 166.9 within boxes @11.16px · pill c1 320.0/356.0 @11.88px · pill c2 256.2/356.0 · legend 193.7/230.4 @11.16px. All fit OK, all subject text ≥11px floor @360px. First pass caught chip ink 212.7 > box 181.8 (overlap risk beside headline) + legend 10.98px under floor — cured (chipTrack 0em, headlinePx 4.8cqw, legendPx 3.1cqw) and re-measured PASS before the wave.
(f) node --check on inline scripts of recreation.html and comparison.html: OK.
PIXEL-UNVERIFIED: no Chrome/Chromium binary is exercisable in this environment, so no pixel screenshot comparison was performed; layout claims rest on the PIL ink measurement + DOM structure, printed as a limitation.
Comparison check (own, structural): both sides 16:9, durations matched (video 14.000s = recreation totalDurationMs 14000), labels exact per charge, controls single set, phone stacking via media query. Playback itself is PIXEL-UNVERIFIED (same limitation).
