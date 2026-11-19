# T128 — Title-card chaptering · score-blind build record (attempt 1, Cycle 020 Wave 17, queue #62)

## Technique facts
- **Consumer:** DLC assembler / Academy tutorial surfaces — chaptering title cards.
- **Mechanics:** inside the product's playback, content (portrait exhibit) gives way to a darkened field; a small tracked eyebrow line fades in; a large white serif main line builds and holds — the thesis stated as a full-screen card.
- **Schedule basis: `segment-anchored`** — segment 385–399 s (14.000 s, ffprobe-verified, 1664452 bytes); build anchors: exhibit 0–7500 ms · eyebrow 8000 ms · main words 10000 / 11100 ms.
- **Construction disposition:** DOM text (browser text engine), not sampled letterforms.

## Segment census (builder, 0.25 s steps, 56 frames)
- 0.00 s: portrait exhibit card (Archduke Franz Ferdinand and Sophie postcard, "† 28. Juni 1914") on the dark teal field.
- ~5.00 s: period map ground under the dark teal field; exhibit gone.
- 7.00 s: eyebrow present — "NOT JUST A MURDER." in WHITE slab/typewriter caps, no strike yet.
- 8.00 s: a RED STRIKE has drawn through the eyebrow text.
- 9.50 s: main line TYPEWRITING letter-by-letter — "A SP" visible.
- 10.00 s: main line complete — "A SPARK." in large white serif, final period in RED.
- 12.00 s: card holds unchanged.

## Printed deviation (D1)
The build follows the wave Plan's amended anchors and treatments (accent-colored eyebrow caps at 8000 ms; main line building word-by-word from 10000 ms, words at 10000/11100; eyebrow text "NOT JUST A MURDER…"). The segment census above differs on: eyebrow color (white + red strike vs accent caps), eyebrow onset (~7000 vs 8000 ms), main reveal mode (letter-by-letter typewriter vs word-by-word), eyebrow punctuation (period vs ellipsis). The deviation is printed, not silent; the Plan is the builder's binding instruction for this wave.
## Printed deviation (D2)
Derived cycle 15600 ms (mainAtMs 10000 + wordMs 1100 + holdMs 4500) vs segment 14.000 s — the specimen card's hold continues past the segment window; the recreation's hold likewise extends past 14 s.

## Build
- `recreation.html` — ONE self-contained file; CONFIG at top with every shaping literal (exhibit {label "ARCHDUKE FRANZ FERDINAND", sub "28 JUNE 1914", atMs 0, untilMs 7500, geometry, type sizes}, eyebrow, mainWords, eyebrowAtMs, mainAtMs, wordMs, holdMs, fade/darken durations, serif stack, type sizes/tracking, geometry, palette {field #10201e, fieldDark, ink #f5f0e6, accent #c0392b, exhibit colors}, stage 360×203); DOM construction; JS-clock exclusive phase machine (EXHIBIT → DARKEN → EYEBROW → MAIN → HOLD); exhibit is a code-drawn typographic card (monogram + label + sub, no specimen imagery); no external assets; `?cfg=` override supported.
- `comparison.html` — ORIGINAL segment + live recreation, ONE synchronized control set, charged labels, phone stacking.

## Own checks (recorded)
1. **Swap test (exact Plan values):** mainWords → ["ONE","SPARK."] · wordMs 1100 → 600 · accent "#c0392b" → "#3b82f6". PASS — swap main ink 253.12 px (fits 360), word 2 onset 11100 → 10600 ms, derived cycle 15100 ms, phases exclusive at every sampled t.
2. **Purity:** grep for specimen-media patterns over recreation.html = 0 hits. Asset inventory: no external assets; code/DOM only.
3. **Comparison check (LOGIC):** labels correct, shared controls drive both sides, phone stacking present; cycle-vs-segment difference printed (D2). PIXEL-UNVERIFIED.
4. **Syntax:** node --check on the inline script — clean.
5. **A6 legs:** measured-fit — rows for eyebrow (219.76 × 11.52 px ink, 360 box), main line (198.56 × 31.68), exhibit label (227.84 × 11.52, 276 box), exhibit sub (96.10 × 11.16, 276 box); all ink heights ≥ ~11 px floor; HIT list EMPTY. Config-census (v3.1) — every CONFIG key resolved to an application site, no CSS variables, subject-shaping literals outside CONFIG: 0; HIT list EMPTY.
