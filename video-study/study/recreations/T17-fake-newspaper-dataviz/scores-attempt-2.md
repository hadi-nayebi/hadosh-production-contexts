# T17 — Fake-newspaper animated dataviz · SCORES

Technique: T17 (packet P1, "Look What I Can Do" @ 1:40–2:02) · Consumer: diagram container (DLC sentence diagrams)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 1:39.5–2:02.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 004, Wave 2)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 78 | codex/lens-motion.md |
| Timing / tempo match | 68 | codex/lens-timing.md |
| Construction purity | 100 | codex/lens-purity.md |
| Reusability / parameterization | 64 | codex/lens-reusability.md |
| Readability | 28 | codex/lens-readability.md |

**Arithmetic:** (78 + 68 + 100 + 64 + 28) / 5 = 338 / 5 = **67.6 average** · minimum lens **28**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 17.4; three lenses under the 70 floor (readability 28, reusability 64, timing 68). Tier: **IN PROGRESS** — attempt 2 routes to the practice job (A3 division of labour); the tier move itself is the style-library job's act on this evidence.

### Priced gaps — what attempt 2 (practice) must cure

**CONVERGENT (Amendment A1 — ≥2 lenses name the same defect; primary cures):**
1. **FIG.20 draw-on dash length** (motion 78 + timing 68): hardcoded dash length 520 exceeds the actual ~190px path, so visible drawing stalls ~1.6s then rushes. Cure: `path.getTotalLength()` for dasharray/dashoffset.
2. **FIG.24 counter–graph divergence + no final hold** (motion 78 + timing 68): counter loses ~94% of its value halfway through the cliff while the graph has dropped only ~33%; both must derive from one normalized collapse function. The exact endpoint 1 renders only within ~6ms of replacement, and `render(22.5)` hides FIG.25 entirely (exclusive end boundary) — no final reading hold. Cure: shared collapse trajectory, explicit completion states, hold the final figure at duration end.

**Single-lens, priced:**
3. **Readability 28 — the blocking defect:** fixed 960px-stage typography/charts inside a `max-width:100vw` shrinking 16:9 stage: at 390px wide the stage is 219px tall, figures start at 118px, 42px masthead and 30px titles wrap, fixed 380–420px SVGs overflow beside cards, `overflow:hidden` clips figure content (waffle summary, stack counter, org badge, counter card, notes). Cure: coherent phone layout — minimum readable type, reflow charts/cards, reserve wrapped-heading space, verify all six figures at 360px and 390px at fullest states.
4. **Reusability 64:** unused CONFIG fields (`chartTitle`, `xLabels`, `barLabels` never render; `scale` has no effect); animation parameters (draw/typing/node/stamp/note rates, FIG.24 pre-cliff decrement 1,800,000, graph constants) are literals; content-dependent logic (`lab==='doomed'` red rule, hardcoded "you →"); builders bound to fixed `figEls.fig20–fig25` keys — not independently mountable factories; fixed spacing/timing breaks at other data counts (a 6th org node at p>1 never appears); counter uses `counterEnd` only as a floor. Cure: consumed-only config, parameterized animation rates, factories taking (container, figure data, palette), layout/timing derived from data length, explicit endpoint interpolation, visible-output swap tests across data sizes.
5. **Timing 68:** labeled allocation is not measured fidelity; completion-and-hold rhythm is weak — FIG.21 summary finishes ~0.20s before replacement, FIG.23 badge leaves 0.43s, FIG.25 second note needs until 22.58s (past the end). Cure: finish typing/badge/notes earlier, explicit completion-and-hold checkpoints as timing gates.

**What passed:** purity 100 — fully procedural DOM/SVG from CONFIG, no specimen media, no external assets; core sequence and all six figure mechanisms present (motion 78).

## Attempt 2 — 2026-11-14 (practice Cycle 003 Wave 2)

Final source: `recreation.html` sha256 `813318f8118436e6aa3272ed67c613fc75f0ab82a50c70827b07a77a0cbcd073` (attempt-1 source preserved byte-identical at `recreation-attempt-1.html`, sha e76948bf… per the run's preservation baseline; all immutable files — build-record.md, segment.mp4, codex/lens-*.md — hash-match the baseline at filing).

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 90 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 82 | codex/attempt-2/lens-timing.md |
| Construction purity | 100 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 72 | codex/attempt-2/lens-reusability.md |
| Readability | 65 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (90 + 82 + 100 + 72 + 65) / 5 = 409 / 5 = **81.8 average** · minimum lens **65**.
**Signed delta vs attempt 1:** 81.8 − 67.6 = **+14.2** (beats the prior average — floor rule satisfied, no WHY owed).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 3.2; one lens under the 70 floor (readability 65). Tier stays **IN PROGRESS**; attempt 3 routes to the practice job.

**Own-check summary (logic harness, node — 42 checks, all PASS; evidence in build-record-attempt2.md):** measured-length draw-on (386.4 computed for default points; draw state maps 0→full offset, completion→0; swapped points change the length); normalized collapse checkpoints asserted separately (half-cliff loss = exactly half the pre-cliff drop · cliff onset at 0.68 of window with exactly the pre-cliff drop lost · endpoint exactly 1 at animation end and at p=1 · constant through the hold) plus counter↔graph normalized agreement at 7 samples and an exact current-progress graph endpoint at 5 progress values; inclusive end boundary (state at t=duration = FIG.25 at p=1); completion allocation with the 0.6s minimum hold consumed from CONFIG (waffle full + summary fully typed, stack/bars/donut complete, all org nodes + badge present, stamp at rest scale, all notes fully visible at animation-portion end); computed fit at 360/390/960px (all six figures contained, widths within content width, type at floors — masthead 20 · title 17 · body 12 · label 11 · big counter 20 · hand 14; longest title reserves 2 lines / 40.8px at 360px); visible-output swaps across data sizes (waffle 15→30 filled 13→27 at mid progress · org nodes 4→6 with the 6th present at completion · bars 4→7 geometry changes · counter-range change changes mid-window text); boundary validation (defaults zero warnings; waffle 500 / bars 20 / nodes 20 rejected with named warnings); purity grep 0 hits; inline script parses.
**PIXEL-UNVERIFIED:** rendered-pixel check attempted with the environment's Chromium build (`/opt/meta-chromium/chrome --headless=new --window-size=390,844 --screenshot`); startup failed with "Hatch WebGL domain policy is required for browser startup", no screenshot produced. Geometry evidence rests on the deterministic layout model, not rendered pixels.
**comparison.html:** unchanged — the config interface it consumes (`T17.render` / shared clock) did not change; ORIGINAL side semantically unchanged (file hash still matches the preservation baseline).

**DEFERRED (per the run's Plan amendment for this item):** figure factories' extraction as independently mountable modules for OTHER containers — separable API work beyond this stage. This attempt made the builders data-driven within the stage (registry keyed by figure type, per-figure data records, layout/timing from data length). Attempt 3's plan carries the extraction at its head or prints why the item rests; the attempt-2 reusability return (72) prices the remaining coupling directly (builders close over scene globals; no palette argument in the actual signatures).

**Private cure → neutral-check mapping (seat record, per the lens-packet hygiene rule):** dash cure → "measured-length draw" checks · collapse+hold cure → "normalized collapse checkpoints" + "counter↔graph agreement" + "inclusive end boundary" + "completion allocation" checks · phone-layout cure → "computed fit" table at 360/390/960 · reuse cure → "visible-output data swaps" + "boundary validation" checks · timing cure → "completion allocation" checks. The lens-facing build record (build-record-attempt2.md) carries only the neutral names and construction facts.

### Priced gaps — what attempt 3 (practice) must cure

1. **Readability 65 (the blocking lens):** (a) the fit model and the builder disagree on FIG.22 spacing (model budgets an 8px phone gap; the builder uses 26px) and FIG.22 already consumes its entire modelled allocation — reconcile modelled gaps/margins/line-heights with the builder's actual values and re-verify the source line stays visible; (b) masthead metadata crowds at 360px (three spans in 304px, no wrap policy) — specify a phone arrangement and derive the figure offset from the header's actual height; (c) FIG.20's final x-label is centred 10px from the SVG right edge and can extend past it — reserve measured text gutters or anchor endpoint labels inward; (d) the stamp's 2.4× rotated entrance state is absent from the fit model — allocate its transformed bounds or constrain the entrance scale; (e) completed-text reading time is short (summary gets ~0.77s after typing) — a content-sensitive completed hold (see gap 3).
2. **Reusability 72:** (a) `palette.muted` is never consumed — consume or remove it; the warning colour is hardcoded in CSS — route it through the palette; (b) embedded literals remain: badge scale 1.6, stamp rotation −8, graph sampling step 0.02, cliff-marker threshold p>0.5 — move them into CONFIG; (c) supported-boundary data can overrun its animation budget: 4 permitted notes need normalized progress 1.24 (the 4th never appears) — distribute note timing within the budget or tighten the boundary; a permitted cliffAt beyond the animation fraction loses its cliff segment — validate cliff position against the budget; (d) stack unit height is fixed per device mode, not derived from count as the build record claimed — derive it or correct the claim; (e) factory extraction (deferred above) — inject palette/timing dependencies instead of scene globals.
3. **Timing 82:** (a) summary typing needs a reading-time budget that scales with text length (its ~100 characters type in ~1.5s); (b) the allocation claim must print per-figure completion/hold timestamps (sub-animations complete at different relative points; the guarantee is ≥0.6s after completion, not a uniform point); (c) verify the stamp's transformable display type in the rendered state; (d) playback verification remains outstanding (PIXEL-UNVERIFIED above).
4. **Motion 90:** (a) stack units arrive as opacity steps in final positions — add short downward arrivals that settle onto the pile; (b) the stamp entrance is a linear shrink — give it an impact shape (rapid eased approach, brief compression/rebound, settle inside the existing allocation); (c) the counter graph keeps extending horizontally during its completion hold (x uses raw window progress while value/y freeze) — complete the trace at animation completion and freeze the whole path through the hold.

**What passed:** purity 100 held; motion 90 and timing 82 confirm the two convergent animation repairs and the shared collapse construction; readability rose 28 → 65 and reusability 64 → 72 on the layout and parameterization rework, with the remaining distance concentrated in the priced gaps above.
