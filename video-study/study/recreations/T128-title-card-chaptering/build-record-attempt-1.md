# T128 — Title-card chaptering · build record (attempt 1, Cycle 020 Wave 17, queue #62)

## Observe gate-out
- **Consumer:** DLC assembler / Academy tutorial surfaces — chaptering title cards (per wave RUN.md §1).
- **Mechanics:** inside the product's playback, content (portrait exhibit) gives way to a darkened field; a small tracked eyebrow line fades in; a large white serif main line builds and holds — the thesis stated as a full-screen card, narration unpacks after.
- **Schedule basis: `segment-anchored`** (Amendment A7) — segment 385–399 s; build phases at the RUN §2b amended anchors: exhibit 0–7500 ms · eyebrow 8000 ms · main words 10000 / 11100 ms.
- **A1 disposition (RUN §2b):** DOM text, not sampled letterforms — runtime text sampling governs typography whose shape is the technique; this is DOM card text, measured-fit owns legibility.
- **Guard firings at Observe/Plan:** codex-observe → **CONFIRMED-WITH-GAPS** (`codex/codex-observe.md`); codex-plan-review → **REVISE**, dispositions below.

## codex-observe gaps — dispositions
1. *Evidence-frame identity (ev/t385.jpg vs title card ~393 s)* — CLOSED firsthand: the builder's segment census (below) shows t=0 (source 385 s) is the portrait exhibit card; the title card builds at segment ~7–10 s (source ~392–395 s). The ev filename marks the segment's start, not the card's onset — no contradiction once both are read as their own facts.
2. *Direct media verification* — CLOSED: segment cut by the builder (ffprobe **14.000 s**, 1664452 bytes) + foreground 0.25 s census (56 frames, `frames/f001.jpg`…`f056.jpg`), viewed firsthand; measured sub-beats below — which produced deviation D1.
3. *T75 provenance (PASS 85.2 unchecked)* — carried as a labeled family reference only; no sibling score enters this attempt's average (INSTRUCTION §6.3). T38's arithmetic was recomputed by the auditor and by the builder (78+72+94+68+68=380/5=76.0, five lenses, FAIL).

## Segment + measured frames (builder, 0.25 s steps, segment = source 385–399 s)
- 0.00 s (f001): portrait exhibit card — Archduke Franz Ferdinand and Sophie postcard, caption "† 28. Juni 1914", on the dark teal field.
- ~5.00 s (f021): period map ground ("AUSTRO-HUNGARIAN EMPIRE") under the dark teal field; exhibit gone.
- 7.00 s (f029): eyebrow present — "NOT JUST A MURDER." in WHITE slab/typewriter caps, no strike yet.
- 8.00 s (f033): a RED STRIKE has drawn through the eyebrow text.
- 9.50 s (f039): main line TYPEWRITING letter-by-letter — "A SP" visible.
- 10.00 s (f041): main line complete — "A SPARK." in large white serif, final period in RED.
- 12.00 s (f049): card holds unchanged.

## Deviation register
- **D1 — MEASURED-CENSUS vs AMENDED-PLAN conflict (printed, priced by the wave):** the builder's firsthand census differs from RUN §1b/§2b on three points — (a) eyebrow is WHITE with a red strike drawn through it, not red caps; (b) eyebrow onset ~7.0 s, not 8.0 s; (c) the main line typewrites letter-by-letter (complete ~10.0 s), not word-by-word at 10000/11100 ms; eyebrow punctuation is a period, not an ellipsis. **Disposition:** the build follows the §2b amended Plan as charged (the builder's binding instruction for this wave; the seat owns the Plan), the discrepancy is recorded here and fed to every lens as a neutral fact, and the seat is asked to reconcile §1b's census with this segment census at wave close. This is a deviation from the specimen, NOT a silent one.
- **D2 — cycle length:** the derived cycle is 15600 ms (mainAtMs 10000 + wordMs 1100 + holdMs 4500) vs the segment's 14.000 s. The specimen card's hold continues past the segment window's end; the recreation's hold likewise extends past 14 s and loops at 15.6 s. Printed here and in scores.md.

## codex-plan-review — dispositions (REVISE; advisory)
1. *Census conflict — reconcile before Execute / follow the census* — **SET ASIDE with reason:** the builder binds to RUN §2b as amended (the wave's Plan gate already consumed its own gate verdicts); switching construction basis mid-Execute on a per-item review would break the wave's trace. The conflict is instead printed as D1 and fed to the scoring lenses verbatim. Miss recorded for Condense: §1b's seat census and this builder census disagree — one of them misread the eyebrow's color/strike and the main line's reveal mode.
2. *Parameterization incomplete* — **CURED:** every shaping value is a CONFIG key (type sizes, tracking, geometry, exhibit geometry, fades, darken ramp, border width, palette, serif stack); config-census HIT list EMPTY.
3. *Phase exclusivity not enforced* — **CURED:** one pure phase function `stateAt()` with exclusive phases EXHIBIT → DARKEN → EYEBROW → MAIN → HOLD; the eyebrow persisting through MAIN/HOLD is the specimen's own relationship (f041/f049), named here.
4. *Hold anchor / 14 s conflict (11100 + 4500 = 15600 > 14000)* — **CURED BY DERIVATION + PRINTED:** cycle is derived (`mainAtMs + (n−1)·wordMs + holdMs`), no second authority; the 15.6 s vs 14.0 s difference is D2, printed.
5. *Predicted minima (reusability 68 under floor)* — carried as the RUN's honest pricing, not raised; the charged countermeasures (full CONFIG binding + measured-fit rows) were executed and their outputs filed (`config-census.md`, `fit-table.md`).

## Build
- `recreation.html` — ONE self-contained file; CONFIG at top; DOM construction; JS-clock exclusive phase machine; exhibit is a code-drawn typographic card (monogram + label + sub, NO specimen imagery); no captions/subtitles (the title text IS the technique); no external assets; `?cfg=` override supported. Bound sha256 `5ab7c6ceb8f0d4891731b7c801b0860916a41018514b705811a958922465e398`.
- `comparison.html` — labels "ORIGINAL — Grow With Kaz (product playback) @ 6:25–6:39" / "RECREATION — T128 title-card chaptering, parameterized"; ONE synchronized control set (Play/Pause/Restart drive the video and postMessage the recreation's clock); phone stacking at ≤560 px, 48 px-minimum controls.

## Own checks (§5 legs 1–3, recorded — not asserted)
1. **Swap test (exact §2 values), node harness over the build's own stateAt/fitRows:** words — mainWords ["A","SPARK."] → ["ONE","SPARK."] · timing — wordMs 1100 → 600 · palette — accent "#c0392b" → "#3b82f6". Result: **PASS** — swap main ink 253.12 px wide (fits 360, 53.4 px/side), word 2 onset moves 11100 → 10600 ms, derived cycle 15600 → 15100 ms, phases exclusive at every sampled t, eyebrow recolors from CONFIG, card still builds and holds.
2. **Purity:** grep over recreation.html for `segment\.mp4|source\.mp4|<video|<img|url\(|l2_pKB1EbMQ|t[0-9]+\.jpg` = **0 hits**. Asset inventory: recreation.html loads NO external assets (exhibit card, field and text are code/DOM only). comparison.html legitimately references segment.mp4 + recreation.html and is not purity-grepped.
3. **Comparison check (LOGIC level):** both sides present with the charged labels; shared controls wired to both sides; phone stacking CSS present; recreation cycle 15600 ms vs video 14.000 s — difference printed (D2). PIXEL-UNVERIFIED — no browser binary in this seat.
4. **Syntax:** `node --check` on the inline script — clean. Harness state samples: EXHIBIT opaque 0–7100, exhibit fade 7100–7500, darken ramp 7500–8000, eyebrow fade 8000–8600, word 1 fade 10000–10400, word 2 fade 11100–11500, HOLD to 15600, loop.

## A6 legs (pre-wave, on the final build)
- guard-measured-fit → `fit-table.md`: rows for eyebrow + main line + exhibit label/sub (+ swap main row); **HIT list EMPTY** after the pre-wave type-size cure (exhibit-sub ink margin 0.16 px printed as a watch).
- guard-config-census → `config-census.md` (v3.1): literal scan classified, every CONFIG key resolved to an application site (incl. mainWords[] array members), no CSS variables; **HIT list EMPTY** after two pre-scoring cures.

## Pre-wave Jev gate
jev-prewave: **FIRE-WAVE** (parameterization 0.92 · purity pre-check 0.95 · own-checks completeness 0.88 · fidelity-plan honesty 0.80; return at `jev-prewave.md`). Disposition: APPLIED — the wave fired; its watches (D1/D2 pricing, PIXEL-UNVERIFIED, exhibit-sub margin) are carried into scores.md.

## Faithfulness trace
- Trace: §1 Observe (RUN §1/§1b + this record's gate-out + segment census) · §2 Plan (RUN §2 + §2b amendments) · §3 Execute (segment, frames, builds above) · §5 Verify (own checks above, A6 legs, jev-prewave, five-lens wave in `codex/`) · §9 Condense is the seat's act.
- Choice log: (1) DOM over canvas/SVG (RUN §2; A1 disposition — DOM text) · (2) derived cycle over a fixed 14000 ms literal (plan-review cure 4) · (3) code-drawn typographic exhibit card over any specimen-derived exhibit (purity; §2b parameterization).
- Deviation register: D1 (census vs amended Plan, printed above) · D2 (cycle 15.6 s vs segment 14.0 s, printed above). No other deviations.
- Evidence binding: segment.mp4 ffprobe 14.000 s · frames/ 56 files · recreation.html sha256 in scores.md · codex returns verbatim in `codex/`.
- Git corroboration: UNCORROBORATED-BY-LOCAL-GIT at build time (lane sync is JOB-14's act).
