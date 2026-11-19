# T123 — Step-card segmentation · build record, SCORE-BLIND (attempt 1, Cycle 020 Wave 17, queue #60)

## Observe gate-out
- **Consumer: DLC assembler / Academy tutorial surfaces** — diagram/transition step segmentation (per wave RUN.md §1).
- **Mechanics:** the procedure is chopped into numbered, titled step cards that appear as the narration reaches them; each card a promise the next screen insert redeems; tiles accumulate and the viewer always knows which step they are inside. Designed layer: headline per step at top on a dark-navy grid ground, operative span blue or in a white chip; numbered tiles below (blue numeral + title + sub).
- **Schedule basis: `segment-anchored`** (Amendment A7) — segment 270–284 s of the Packet #6 source; per §2b the build's steps sit at atMs 2000 / 12000 inside a 14000 ms cycle.
- **Named deferral (printed, §2b):** the specimen's screen inserts are NOT recreated — they are specimen media (purity-barred in any case). The technique recreated is the step-card segmentation layer (headlines + accumulating numbered tiles); the ORIGINAL side of the comparison carries the inserts.
- **Guard firings at Observe/Plan:** codex-observe → **CONFIRMED-WITH-GAPS** (`codex/codex-observe.md`); codex-plan-review → **REVISE**, dispositions below. Wave gates: jev-observe-exit T123 ADVANCE · jev-plan-exit T123 REVISE cured by §2b amendments (per-step atMs; deferral named; G1-A instruments).

## codex-observe gaps — dispositions
1. *ev/t285.jpg timestamp vs the [270,284) cut* — CLOSED firsthand: the builder's own 0.25 s census of the cut segment (below) establishes the card states directly from the segment itself; ev/t285 (source ≈285 s) sits just past the cut and is not load-bearing for this build.
2. *Verify the 264–283 s sub-beats against the source* — CLOSED by the segment census below (segment covers 270–284 s; the pre-270 insert portion is outside the cut and outside the recreated layer per the named deferral).
3. *No-prior-attempt census + sibling status* — CLOSED firsthand: RUN §1's binding artifact census found no T123 directory before this wave (58 directories, none T123); this directory was created by this attempt. T102's scores.md was read firsthand by the builder (88/86/100/86/84 = 444/5 = 88.8, recomputes exactly); T45 PASS 88.2 is carried as a labeled family reference only — no sibling score enters this attempt's average (INSTRUCTION §6.3).
4. *ffprobe evidence for 638.494 s* — CLOSED: builder re-ran ffprobe on the archived source this attempt: **638.494 s** (matches the seat census).

## codex-plan-review — dispositions (REVISE; advisory per the 2026-11-14 ruling)
1. *Accumulation promised, not guaranteed* — **CURED BY CONSTRUCTION:** one persistent tile node per step, created once at build; presence is monotonic within a cycle (`u >= atMs`, harness-swept at 50 ms steps: tile count never decreases inside a cycle); only the cycle wrap clears tiles. Numeral legibility is measured, not asserted (fit-table: numeral ink 17.18 px).
2. *Headline exclusivity + separate headlineAtMs/tileAtMs* — exclusivity **CURED BY CONSTRUCTION:** exactly one active headline (the latest step whose atMs has passed), selected in stateAt; entrances cannot produce two active headlines. The separate-anchors revision is **SET ASIDE with reason:** RUN §2b — the wave's binding Plan amendment, consumed by the seat before Execute — fixes per-step `atMs` (step 1 headline+tile at 2000 ms, step 2 headline+tile at 12000 ms), and the builder's charge binds to §2 as amended. The measured tension is printed as a deviation below, not hidden; re-anchoring is the seat's/Condense's call, not the builder's.
3. *Parameterization incomplete* — **CURED:** typography (sizes, weights, line-heights), grid cell, tile geometry, gaps, chip geometry, entrance distance/scale/opacity are all CONFIG keys (config-census.md, HIT list EMPTY; the census caught CSS line-height literals during Execute and they were moved into CONFIG pre-wave). Headline emphasis is the `style` field on each span with defined plain/blue/chip rendering branches. Added boundary checks beyond the swap: state sweeps at every event boundary + cycle reset (recorded under Own checks).
4. *Bar arithmetic / five-lens forecast* — recorded: PASS needs sum ≥ 425 AND every lens ≥ 70. The bar's two gates are recorded above; the builder's priced risk, on the firsthand census, sits with the step-2 anchor deviation printed in the Segment section.
5. *Size discipline* — noted: build scoped to headlines + accumulating tiles + grid ground only; inserts deferred.

## Segment + measured frames
- Segment: cut from `hidden_files/study/video-digests/2026-11-15-yt-l2pkb1ebmq/source.mp4` at 270.0–284.0 s, re-encoded (libx264/yuv420p/aac, faststart). ffprobe: **14.000 s**, 1920×1012, 1149456 bytes.
- Frames extracted at 0.25 s steps (56 frames, `frames/seg-00.00.jpg` … `seg-13.75.jpg`), viewed firsthand by the builder. Measured table (segment time → source time → state):
  - 0.00 s (src 270.0): screen-insert tail (ElevenLabs page) — the deferred layer.
  - 2.00 s (src 272.0): headline 1 "First, **download the free plugin**" (blue operative) present on the grid ground; no tile yet.
  - 2.75 s (src 272.75): headline 1, still no tile. 3.50 s (src 273.5): tile 01 present — centred card, blue "01", white "Download", grey "link in the description", blue edge, connector stub right.
  - 5.00 s (src 275.0): headline 1 + tile 01, unchanged.
  - 7.00 s (src 277.0): headline 1 + BOTH tiles (01 Download · 02 "Add it / to Claude") side by side with connector — accumulation confirmed inside the segment.
  - 8.50 s (src 278.5): headline 2 "Ask Claude to **install it**" (chip) + prompt bar ("Instal|…") — the prompt bar is insert-layer support, outside the recreated layer.
  - 10.00–12.00 s: headline 2 + completed prompt bar. 12.50 s (src 282.5): next headline "The plugin: **Kaz Documentary**" (blue) — outside this technique's two steps.
- **DEVIATION (printed, priced):** the segment's own frames place tile 02 at seg ≈6–7 s and headline 2 at seg ≈8–8.5 s, while binding §2b anchors step 2 (headline+tile) at 12000 ms and step 1's tile with its headline at 2000 ms (segment: headline 1 by 2.00 ✓, tile 01 at ≈3.0–3.5). The build follows §2b exactly; the discrepancy is the timing lens's to price. The tile-01 lag (≈1–1.5 s after its headline) is likewise absorbed into the shared atMs by §2b's form.

## Build
- `recreation.html` — ONE self-contained file; CONFIG at top; DOM construction; JS-clock state machine (stateAt: exclusive active headline + monotonic tile accumulation, 14000 ms cycle, loops); grid ground from CONFIG; no captions/subtitles (headline/tile text is the technique's subject, per INSTRUCTION §3.2); no external assets; logic reads only CONFIG; `?cfg=` override supported.
- `comparison.html` — labels "ORIGINAL — Grow With Kaz @ 4:30–4:44" / "RECREATION — T123 step-card segmentation, parameterized"; ONE synchronized control set (Play/Pause drive the video and postMessage the recreation's clock; Restart zeroes both); phone stacking at ≤560 px with 48 px-minimum controls.

## Own checks (§5 legs 1–3, recorded — not asserted)
1. **Swap test (EXACT §2 values, §2b timing form), node harness on a scratch copy:** words — step 1 title "Download" → "Prepare" · timing — step atMs scaled by the §2 ratio 6500→4000 (×0.6154): step 1 atMs 2000 → 1231, step 2 atMs 12000 → 7385 · palette — blue "#3b82f6" → "#3ac95c" (drives numeral, operative span, and tile edge via the single palette key). Result: **PASS** — swapped title "Prepare" re-measures 64.4 px (fits the 140 px tile inner), states at the swapped anchors are correct (t=1231: step 1 active, tile 01 present; t=7385: step 2 active, both tiles present), accumulation stays monotonic, cycle still exactly 14000 ms, headlines re-measure within the stage (288.0 / 225.8 px).
2. **Purity:** grep over recreation.html for the G1-A patterns `segment\.mp4|source\.mp4|<video|<img|url\(|l2_pKB1EbMQ|t[0-9]+\.jpg` = **0 hits**. Asset inventory: recreation.html loads NO external assets (no src/href loads; grid, tiles, and chip are generated in-code from CONFIG). comparison.html legitimately references segment.mp4 + recreation.html and is not purity-grepped.
3. **Comparison check (LOGIC level):** both sides present with the exact labels; video duration 14.000 s vs recreation cycle 14000 ms (CONFIG, harness-verified); shared controls wired to both sides; phone stacking CSS present. PIXEL-UNVERIFIED — no browser binary in this seat.
4. **Syntax:** `node --check` on both inline scripts — clean (re-run after the line-height cure; clean).
5. **Boundary checks (plan-review point 3 addition):** stateAt sampled at 0/1999/2000/2300/2600/6000/11999/12000/12600/13999/14000 — headline exclusivity holds at every sample (active ∈ {−1, 0, 1}, single value), tile presence is exactly {01} on [2000,12000) and {01,02} on [12000,14000), reset at the wrap is the only clearing event.

## A6 legs (pre-wave, on the final build)
- guard-measured-fit → `fit-table.md`: rows for both headlines, numeral, both titles, all sub lines (+ swap row); **HIT list EMPTY** (title/sub ink 11.46 px vs the ~11 px floor — margin 0.46 px, printed as a watch).
- guard-config-census → `config-census.md`: literal scan classified, every CONFIG key resolved to an application site (incl. steps[] array-member keys), no CSS variables; **HIT list EMPTY** (one pre-wave cure: CSS line-heights moved into CONFIG).

## Pre-wave Jev gate
jev-prewave: filed at `jev-prewave.md`.

## Faithfulness trace
- Trace: §1 Observe (RUN §1/§1b + this record's gate-out) · §2 Plan (RUN §2 + §2b amendments, binding) · §3 Execute (segment, frames, builds above) · §5 Verify (own checks above, A6 legs, jev-prewave, five-lens wave in `codex/`) · §9 Condense is the seat's act.
- Choice log: (1) DOM over canvas (RUN §2; A1 disposition — card text is DOM text, runtime sampling governs formed letterforms) · (2) shared per-step atMs per §2b over plan-review's separate anchors (set-aside with reason, above) · (3) two-line sub wrap inside a taller tile (112 px) over a smaller sub font (fit floor owns: 16 px sub keeps ink at 11.46 px).
- Deviation register: step-2 anchor vs segment frames (tile 02 ≈ seg 6–7 s, headline 2 ≈ seg 8–8.5 s vs §2b 12000 ms) — printed in the Segment section · screen inserts deferred — NAMED DEFERRAL (§2b) · prompt bar under headline 2 not recreated (insert-layer support, same deferral class). No other deviations.
- Evidence binding: segment.mp4 ffprobe 14.000 s · frames/ 56 files · recreation.html sha256 in scores.md · codex returns verbatim in `codex/`.
- Git corroboration: UNCORROBORATED-BY-LOCAL-GIT at build time (lane sync is JOB-14's act).
