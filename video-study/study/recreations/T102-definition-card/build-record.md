# T102 — Definition card · build record (attempt 1, Cycle 016 Wave 14, queue #49)

## Observe gate-out
- **Consumer: OPENING · DIAGRAM** — definition card; section-opener / diagram surface (per wave RUN.md §1).
- **Mechanics:** a full-screen gradient card lands and holds: "TRANSITIONS — Animated changes between two scenes to provide visual continuity" (text verified verbatim in ev/12.0-definition-card.jpg, viewed firsthand by the builder). Lower motif: cyan dotted arch path over a yellow-green capsule, bottom-left of the card, quiet.
- **Schedule basis: `t=0 allocation`** (Amendment A7) — land + hold re-based to build zero; cycle = landMs 1100 + holdMs 12900 = exactly 14000 ms, looping.
- **Guard firings at Observe/Plan:** codex-observe → **CONFIRMED-WITH-GAPS** (`codex/codex-observe.md`); codex-plan-review → **REVISE**, all points disposed below before building.

## codex-observe gaps — dispositions
1. *Motion gap ("lands" vs "scale/opacity settle" not provable from a still)* — CLOSED by segment-frame extraction (below): the card is present in portrait form at segment t=4.5 s with its second body line still settling (soft/low-opacity) and the capsule just rising; by t=5.0 s the card is fully settled. A land/settle beat exists in motion; its exact easing is **ALLOCATION** (the build's easeOutCubic settle over landMs).
2. *Prior-attempt absence unverified in the fed excerpts* — CLOSED firsthand: the wave RUN's binding artifact census found no T102 directory before this wave; this directory was created by this attempt. No scores.md or verdict-history attempt line for T102 exists.
3. *Sibling scores (T91 76.4 five-lens FAIL · T56 90.8 PASS) supplied, arithmetic not recomputed* — carried as labeled sibling references only; no sibling score enters this attempt's average (INSTRUCTION §6.3). T91's filed scores.md (76/62/96/72/76 = 382/5 = 76.4) was read firsthand by the builder and recomputes exactly.
4. *Segment facts require ffprobe* — CLOSED: source ffprobe 80.994 s (seat census); segment cut by the builder, ffprobe duration **14.000 s**, 1280×720, h264 + aac, 912229 bytes.
5. *Frame appearance not independently checked by the auditor* — CLOSED firsthand: builder viewed ev/12.0 and segment frames seg-04.0/04.5/05.0/13.5 (below).

## codex-plan-review — dispositions (REVISE; every point cured or carried named)
1. *Contrast fails by construction (white on #22d3ee ≈1.81:1, on #ef4444 ≈3.76:1, swap #f59e0b ≈2.15:1)* — **CURED BY CONSTRUCTION:** a CONFIG-driven text backing (`textBack{color:"#0a0e2e", opacity:0.55}`) spans the whole text footprint inside the card; the harness's worstCaseContrast composites the backing over every gradient stop AND every interpolated midpoint and returns **6.38:1** default, **7.31:1** under the swap — both ≥4.5:1 (Cure 1). Recorded deviation: the specimen carries no visible backing panel; the backing is a soft dark wash, adopted because Cure 1 (owner law) outranks pixel-identity of the gradient under the text. The measured specimen text zones (title over #4449af ≈7.45:1, body over #4c46a6 ≈7.68:1, sampled from seg-05.0) already pass — the cure binds the stops the text does not cross in the specimen but could cross under a swap.
2. *Phase exclusivity + footer lifecycle + attribution* — phase machine has exactly two states (LAND, HOLD); title, rule, body and footer are children of the single card node and land as ONE unit (T91 cure); no child reveal animations exist. Footer lifecycle: the footer motif is inside the card node, so it shares the card's LAND/HOLD lifecycle — no separate phase. Attribution: **inapplicable by the technique's nature** — the verified card carries no attribution (it is a definition, not a quotation); the T91 attribution clause binds quote cards. Named here, not silently absent.
3. *Parameterization inventory + swap timing contradiction (600+12900=13500 ≠ 14000)* — inventory completed: all geometry/type/footer/motion values are CONFIG keys (census, `config-census.md`, HIT list EMPTY). Timing resolved by construction: the cycle is DERIVED (`landMs + holdMs`, no cycle literal in logic); under the swap the cycle is 13500 ms and loops exactly there — no undefined 500 ms exists in either build.
4. *Bar arithmetic* — noted: PASS requires sum ≥425 AND every lens ≥70; predicted minimum lens = readability (RUN failure-point evaluation), honest against T91's 76.4 FAIL.
5. *Size discipline* — build scoped to the gradient card + footer motif only; no surrounding scene.

## Segment + measured frames
- Segment: cut from `hidden_files/study/video-digests/2026-11-14-som-six-transitions/source.mp4` at 7–21 s, re-encoded (libx264/yuv420p/aac, faststart). ffprobe: **14.000 s**, 1280×720, 912229 bytes.
- Frames extracted at 0.5 s steps (28 frames, `frames/seg-00.0.jpg` … `seg-13.5.jpg`). Measured table (segment time → source time → state):
  - 0.0–4.0 s (src 7–11 s): editor-timeline scene (T101's dive; at 4.0 s a red-purple "TRANSITIONS" title card rides the timeline) — not this technique's settled form.
  - 4.5 s (src 11.5 s): portrait definition card present on indigo field; body line 2 still settling (soft); capsule just rising at bottom; dotted arch not yet visible → land in progress.
  - 5.0–12.5 s (src 12–19.5 s): settled card, unchanged — title "TRANSITIONS" white bold caps + white rule; body in two lines ("Animated changes between two scenes" / "to provide visual continuity"); footer motif settled (cyan dotted arch over yellow→green capsule, bottom-left of card).
  - 13.5 s (src 20.5 s): ladder card (T103) — definition card gone.
- Measured card geometry (1280×720 settled frame): field sampled #4149ae; card x≈280–1000 (56% of frame width), full frame height; title zone over blue #4449af; body zone over purple #4c46a6; a red-pink band sits right of/behind the body block; cyan blob at the card's top-left corner. The RUN's CONFIG gradient stops (#22d3ee → #3b5bdb → #7c3aed → #ef4444) stand as the Plan-bound specimen values; the layered band/blob detail of the specimen's gradient is simplified to the Plan's single diagonal gradient — **ALLOCATION** (gradient micro-structure), printed here and in scores.md.
- Stage-form allocation: the recreation stage is 360×440 (portrait canvas centred on the card, field at the sides) rather than a 16:9 frame replica — at 360×203 the measured body ink falls under the fit leg's 11 px floor and the title overflows the 202 px card (harness-measured during Execute; cured by the stage-form allocation). **ALLOCATION** (stage aspect), printed here and in scores.md.

## Build
- `recreation.html` — ONE self-contained file; CONFIG at top; DOM/SVG construction; JS-clock phase machine (LAND → HOLD, exclusive); card lands as one unit; footer motif inside the card; no captions/subtitles (the card's title/body are the technique's subject text, per INSTRUCTION §3.2); no external assets; logic reads only CONFIG; `?cfg=` override supported.
- `comparison.html` — side-by-side, labels "ORIGINAL — School of Motion 'Six Essential Motion Design Transitions' @ 7–21 s" / "RECREATION — T102 definition card, parameterized"; ONE synchronized control set (Play/Pause drive the video and postMessage the recreation's clock; Restart zeroes both); phone stacking at ≤560 px with 48 px-minimum controls.

## Own checks (§5 legs 1–3, recorded — not asserted)
1. **Swap test (exact §2 values as amended by §2b A-10), scratch copy:** card.title "TRANSITIONS"→"OPENINGS" · card.body →"A designed first frame that teaches the eye where to look" · gradient.stops[0] "#22d3ee"→"#f59e0b" · landMs 1100→600. Result: **PASS** — title re-measures 159.2 px (fits), body re-wraps to two lines ("A designed first frame that teaches" / "the eye where to look"), worst-case contrast 7.31:1, phase machine LAND (600 ms) → HOLD verified at t=0/300/599/600/5000/13499/13500, derived cycle 13500 ms loops cleanly; the card still lands as one unit and reads. All four CONFIG groups touched (card · gradient · timing; palette ink/field unchanged — the untouched group is `palette`, named: its contrast duty is re-proven by the swap's worst-case computation over the changed stop).
2. **Purity:** grep over recreation.html for `segment\.mp4|source\.mp4|video-digests|ev/|\.jpg|\.png|<video|<img` = **0 hits**. Asset inventory: recreation.html loads NO external assets (no src/href loads; the footer SVG and gradient are generated in-code from CONFIG). comparison.html legitimately references segment.mp4 + recreation.html and is not purity-grepped (A-2).
3. **Comparison check (LOGIC level):** both sides present with correct labels; video duration 14.000 s vs recreation cycle 14000 ms (derived landMs+holdMs, harness-verified); shared controls wired to both sides; phone stacking CSS present. PIXEL-UNVERIFIED — no browser binary in this seat.
4. **Syntax:** `node --check` on both inline scripts — clean.
5. **Contrast line (Observe cure 3 / Cure 1):** worst-case ink contrast 6.38:1 default · 7.31:1 swap — both ≥4.5:1, computed over stops + interpolations (see fit-table.md).

## A6 legs (pre-wave, on the final build)
- guard-measured-fit → `fit-table.md`: rows for title + both body lines (+ swap rows); **HIT list EMPTY** (body ink 11.25 px vs the ~11 px floor — margin 0.25 px, printed as a watch).
- guard-config-census → `config-census.md`: literal scan classified, every CONFIG key resolved to an application site (incl. footer.motif as construction branch), no CSS variables; **HIT list EMPTY**.

## Pre-wave Jev gate
jev-prewave: **FIRE-WAVE** (parameterization 0.95 · purity pre-check 1.00 · own-checks completeness 0.90 · fidelity-plan honesty 0.90; return at `jev-prewave.md`). Disposition: APPLIED — the wave fired; its two watches (thin body-ink margin · PIXEL-UNVERIFIED) are carried into scores.md.

## Faithfulness trace
- Trace: §1 Observe (RUN §1 + this record's gate-out) · §2 Plan (RUN §2 + §2b A-10) · §3 Execute (segment, frames, builds above) · §5 Verify (own checks above, A6 legs, jev-prewave, five-lens wave in `codex/`) · §9 Condense is the seat's act.
- Choice log: (1) DOM/SVG over canvas (RUN §2, fleet choice) · (2) text backing wash over text-footprint constraint (plan-review cure 1: footprint constraint cannot bind the swap stop; the wash binds every stop) · (3) portrait stage over 16:9 replica (harness-measured fit failure at 16:9; allocation printed).
- Deviation register: gradient micro-structure simplified to the Plan's diagonal gradient — ALLOCATION, printed · stage aspect allocated — printed · land easing allocated — printed. No other deviations.
- Evidence binding: segment.mp4 ffprobe 14.000 s · frames/ 28 files · recreation.html sha256 in scores.md · codex returns verbatim in `codex/`.
- Git corroboration: UNCORROBORATED-BY-LOCAL-GIT at build time (lane sync is JOB-14's act).
