# scores — T123 step-card segmentation · attempt 1 · wave opened Cycle 020 Wave 17, completed Cycle 021 Wave 18
Hash binding: recreation.html SHA-256 49e2e08318bcd973038f099e35f246b58392f87070e107421ed27baf7ff570c2 — recomputed at completion, unchanged. Identical in all five lens payloads (codex/payload-<lens>.txt, binding line "This payload binds recreation.html SHA-256: …") and in the three Wave-18 returns (codex/lens-purity.md, lens-reusability.md, lens-readability.md). The two Wave-17 returns (lens-motion.md, lens-timing.md) are verdict-only filings and do not echo the literal hash; their binding runs through their payloads, which carry it — noted, not overstated.
Schedule basis: segment-anchored (step 1 at 2000 ms, step 2 at 12000 ms, Cycle-020 §2b).
PIXEL-UNVERIFIED: no browser binary in this seat; verification logic-level, comparison.html is the render surface.
Pre-wave: jev-prewave FIRE-WAVE (parameterization 0.92 · purity 0.95 · own-checks 0.90 · fidelity-plan 0.88) — jev-prewave.md.
Wave completion: Wave 17 fired motion + timing; purity, reusability and readability fired in Cycle 021 Wave 18 from the standing payloads, one Codex stream each, every return ending SCORE + BODY-WRITE on first firing — no firing defects, no re-fires.

| lens | score | return |
|---|---|---|
| motion | 82 | codex/lens-motion.md |
| timing | 60 | codex/lens-timing.md |
| purity | 98 | codex/lens-purity.md |
| reusability | 79 | codex/lens-reusability.md |
| readability | 86 | codex/lens-readability.md |

Arithmetic: 82+60+98+79+86 = 405; 405/5 = 81.0 average. Minimum = 60 (timing).
Verdict vs bar (avg ≥85 AND min ≥70): 81.0 < 85 AND 60 < 70 → **FAIL → IN PROGRESS**.

Priced cures (lenses <85):
- timing 60 — PRIMARY (below the 70 floor): the build follows binding §2b exactly, but the firsthand segment frames contradict §2b's step-2 timing — tile 02 is present by seg 7.0 s and headline 2 by 8.5 s in the frames, vs the build's 12.0–12.6 s entrance (≥5 s and ≥3.5 s late); tile 01 also arrives ~1–1.5 s early, losing the headline-to-card pause, and the 0–2 s empty grid is 14.3% of the cycle. Cure: resolve the conflicting timing records (RUN §1b census vs firsthand frames) and amend §2b BEFORE changing the schedule; separate the headline and tile anchors (headline 1 ≈2 s · tile 01 ≈3–3.5 s · tile 02 by 7 s · headline 2 by 8.5 s, on tighter frame brackets); measure entrance durations independently, distinguishing onset from fully-visible state; specify the opening and post-12.5 s treatment explicitly within the deferred-layer scope.
- motion 82 — cure: animate tile 01's repositioning when tile 02 joins (it currently snaps 85 px left as flex layout reflows; only tile 02 receives an entrance animation), or establish evidence-backed fixed slots that avoid the snap; separate headline and tile anchors to restore the observed stagger (after the §2b Plan amendment the timing cure requires); verify entrance easing and replacement boundaries in rendered playback (the incoming headline begins at zero opacity, leaving no visible headline at the exact replacement boundary).
- reusability 79 — cure: (1) make `?cfg=` array overrides replace atomically (deepMerge currently retains trailing base entries — a one-step override leaves step 02) and demonstrate two steps → one plus a shorter headline; (2) demonstrate three steps with fitting geometry (three default tiles occupy 498 px in a clipped 360 px stage) and a changed operative style; (3) support separate headline/tile anchors with shared-anchor defaults; (4) move the remaining shaping literals into CONFIG (page background `#070a18`, grid-line `1px` in gridCSS, easing, headline line-height) and document the palette relationship honestly (numerals/blue spans use `palette.blue`; card borders use the separate `palette.cardEdge`); (5) validate timing/layout constraints and record rejected invalid configurations.
- readability 86 — at/above the cure threshold; watch item carried: tile title/sub ink models at 11.46 px, only 0.46 px above the floor — next attempt inspects settled frames at native 360 px width (clean wrap of "link in the description", blue emphasis distinct) and raises tile text size if that check fails.

Convergent-lens note: THREE lenses name the same root defect — the shared per-step headline/tile anchor (one `atMs` per step). Motion: the shared anchor removes the observed stagger. Timing: the shared anchors compress distinct beats (its primary defect). Reusability: independent anchors are unavailable through CONFIG (cure 3). One cure — separate headlineAtMs/tileAtMs, gated on the §2b amendment — serves all three. Secondary convergence: purity (98) and reusability both name the residual out-of-CONFIG literals (page background `#070a18`, grid-line `1px`).

A6 legs: fit-table.md HITs 0 · config-census.md HITs 0 (both pre-wave, final build).

## Attempt 2 — plan scaffold (practice Cycle 017)

_Pre-drafted at Plan (practice Cycle 017 Wave 16, `plan-T123.md` in the cycle's run directory) per INSTRUCTION §2: if attempt 2 does not beat attempt 1's 81.0 average, the WHY is filed by completing this scaffold at close, not improvised at close. Append-only section; attempt-1 text above is untouched._

**Plan basis (for the close to price against):** delta target 81.0 → 90.8 (timing 60→88 · motion 82→90 · purity 98→98 hold · reusability 79→90 · readability 86→88). Premise resolution: the §2b shared-anchor schedule (2000/12000 ms) is superseded for attempt 2 by the segment-frame basis — both bases + dispute filed at Execute Stage 0 (A-C010-3): headline 1 at 2000 ms · tile 01 at 3250 ms (bracket (2.75, 3.50]) · tile 02 at 6500 ms (bracket (5.00, 7.00]) · headline 2 at 8000 ms (bracket (7.00, 8.50]), time origin segment 0.00 s = source 270.0 s.

**Cure-by-cure outcome slots (complete at close with the return wording, not the score alone):**
- C1 separate headline/tile anchors (convergent: timing · motion · reusability) — landed / partial / missed: …
- T2 independent entrance durations, onset vs fully-visible distinguished — …
- T3 opening (0–2 s) + post-12.5 s hold treatment named and fed to the lenses — …
- M1 tile-01 reposition animated (85 px snap cured) — …
- M2 headline crossfade at the replacement boundary — …
- R1 atomic `?cfg=` array replacement (two→one + shorter-headline demonstrations) — …
- R2 three steps demonstrated with measured fitting geometry + changed operative style — …
- R4/C-P1 literals into CONFIG (`palette.pageBg` · `grid.linePx` · `geom.enterEasing` · `type.headlineLH`) + palette relationship documented honestly — …
- R5 timing/layout validation + rejected-configurations record — …
- W1 readability settled-state check at 360 px — passed / conditional raise landed / failed-unraised: …

**Stuck-lens hypothesis (pre-committed):** timing is the hypothesized sticking lens — (i) the tile-02 / headline-2 brackets are the widest (±0.75–1.0 s) and a midpoint miss is the cheapest remaining deduction; (ii) the lens may retain the RUN §1b census basis despite the A-C010-3 both-bases feeding. Secondary: motion sticks if the lens prices the logic-level boundary evidence as unrendered (PIXEL-UNVERIFIED) rather than as programmed behaviour.

**Plateau evidence slots (per `jev-plateau.md`'s dimensions):**
- causal — which cure's construction change failed to move which lens, quoted from the return: …
- specificity — the exact anchor/bracket or construction term named: …
- lens attribution — convergent vs single-lens pricing of the residue: …
- consequence — what attempt 3 must change (construction-family change vs re-tune): …
- evidence citation — frame ids / checkpoint ids / return lines the claim rests on: …

**Plateau vs failed cure (pre-committed test):** a plateau is named only if a cure landed as constructed (staged checkpoints + own-checks green) AND its lens return prices the SAME defect in the SAME terms as attempt 1. A miss where the construction did not land, or the return prices a new defect, is a failed cure, not a plateau, and files as such.

## Attempt 2 — Stage 0: §2b amendment filing (practice Cycle 018, executing Cycle 017 plan)

_Preservation preceded this append (plan-review point 1 consumed): `recreation-attempt-1.html`, `comparison-attempt-1.html`, `fit-table-attempt-1.md`, `config-census-attempt-1.md`, `build-record-attempt-1.md`, and `scores-attempt-1.md` stand as create-once content copies, hash-verified against the Cycle 018 preservation baseline before any mutation (recreation 49e2e083…, comparison 4067d1b3…, scores a4fe6ab4…). This append and the later comparison re-caption are intentional changes, checked as appends/changes — not as byte-identical preservation._

**Amendment (A-C006-1 + A-C008-1 + A-C010-3):** the binding §2b schedule basis is superseded FOR THIS ITEM by the segment-frame basis.
- Basis A (§2b, superseded): per-step shared `atMs` — step 1 headline+tile at 2000 ms, step 2 headline+tile at 12000 ms, cycle 14000 ms. The recreation RUN §1b census (step 2 at source ~282–283 s, segment ~12–13 s) agrees with Basis A and is superseded with it for step-2 timing.
- Basis B (segment frames, governing): builder's firsthand 0.25 s census of `segment.mp4` (14.000 s; time origin segment 0.00 s = source 270.0 s; frames `frames/seg-*.jpg`): headline 1 present by 2.00 s; tile 01 absent 2.75 s, present 3.50 s → onset bracket (2.75, 3.50]; tile 02 absent at 5.00 s (only tile 01), present 7.00 s → onset bracket (5.00, 7.00]; headline 2 absent at 7.00 s (headline 1 active), present 8.50 s → onset bracket (7.00, 8.50]; next non-technique headline at 12.50 s.
- Dispute printed: Basis A places step 2 ≥3.5–5 s later than Basis B's frames show, and tile 01 ~1–1.5 s earlier. Attempt 1 followed Basis A and its timing return priced Basis B.
- Resolved anchors (attempt 2): headline 1 `headlineAtMs` 2000 · tile 01 `tileAtMs` 3250 · tile 02 `tileAtMs` 6500 · headline 2 `headlineAtMs` 8000. Midpoint correction (Codex plan review point 2, consumed): the true bracket midpoints are 3125 / 6000 / 7750 ms; 3250 / 6500 / 8000 are NOT midpoints — they are late-bracket picks inside their brackets, chosen so each event is visibly present by its bracket's closing frame after its entrance begins. Onset vs fully-visible are distinguished per event in the own-check suite (onset = anchor; fully-visible = anchor + entrance duration). Entrance durations: independent measurement beyond the frames is UNRESOLVED — the frames support only the attempt-1 600 ms value, so `headlineEnterMs` and `tileEnterMs` are split as separate keys both defaulting to 600, printed as an unresolved bracket, not as independent measurements.
- Treatment (T3): 0–2000 ms = grid ground only, standing in for the deferred insert tail (D1); 12500–14000 ms = accumulated state (headline 2 + both tiles) held to the cycle wrap, printed as a cycle-hold, not a specimen claim; the specimen's next headline at 12.50 s is outside this technique's two steps (D4).
- Scoring-risk note: the scoring payloads carry a separately authored factual timing statement (both bases + dispute, no scores, no targets, no evaluative wording from this filing).

## Attempt 2 — result (practice Cycle 018 Wave 17, executing the Cycle 017 plan)

Hash binding: recreation.html SHA-256 3928315188461b72ef8103012d699064d36711f74da445c68246546e392b197a — identical in all five payloads (`codex/attempt-2/instr-<lens>.txt`, manifest at `codex/attempt-2/payload-manifest.md`); every filed return states its disk-read source hash matches the binding. PIXEL-UNVERIFIED stands.
Firing record: motion, reusability, and readability filed on their first firings. Timing and purity each had a first firing whose `-o` return file was written empty (0 bytes) while the session streamed unrelated text — both empty returns are preserved create-once (`lens-timing.md`, `lens-purity.md`, 0 bytes, run 1, NOT scored) and each lens was re-fired on a fresh run-tagged payload copy; the scores below bind to the run-2 returns (`lens-timing-run2.md`, `lens-purity-run2.md`).

| lens | Attempt 1 | Attempt 2 | Δ | return |
|---|---|---|---|---|
| motion | 82 | 94 | +12 | codex/attempt-2/lens-motion.md |
| timing | 60 | 85 | +25 | codex/attempt-2/lens-timing-run2.md |
| purity | 98 | 100 | +2 | codex/attempt-2/lens-purity-run2.md |
| reusability | 79 | 88 | +9 | codex/attempt-2/lens-reusability.md |
| readability | 86 | 84 | −2 | codex/attempt-2/lens-readability.md |

Arithmetic: 94+85+100+88+84 = 451; 451/5 = **90.2 average**. Minimum = 84 (readability).
Delta vs attempt 1: **90.2 − 81.0 = +9.2** (signed, one decimal).
Verdict vs bar (avg ≥85 AND min ≥70): 90.2 ≥ 85 AND 84 ≥ 70 → **PASS → RECREATED** (tier move is style-library's act; this filing is its pointer). WHY: not owed — the attempt beats the prior average. Attribution prints BUNDLED within stages (staged checkpoints in `checkpoints/attempt-2/`).

Cure outcomes (return wording, condensed): split anchors + frame basis — timing return prices the Record-2 schedule as filed and lands at 85 with the bracket uncertainty as the residue; motion credits the separate tile anchors, computed slots, and eased reposition (tile 01 sampled 101 → 51.9 → 26.6 → 16, no blackout at replacement). Atomic arrays, validation, and the literal moves land reusability at 88; its residue is nested-shape validation depth (validate nested object shapes and supported easing/style values before dereferencing). Purity 100: every visual generated in-code from CONFIG, no specimen media. Readability 84 (−2): settled text passes on measured contrast, but the return prices the crossfade itself — at ≈8124 ms two different sentences share the same baseline at 50% opacity each; its named next-attempt cure is to sequence the fade (outgoing fully out before the incoming reveals) or otherwise eliminate simultaneous overlapping glyphs, inspected at native 360 px. That residue is recorded here as attempt 3's first cure if the item is re-opened; it does not block this PASS.
Pre-scoring legs: fit-table-attempt-2.md HITs 0 · config-census-attempt-2.md HITs 0 (standing fit-table.md / config-census.md refreshed to match). Own-check suite on the final source: 50/50 PASS, CONFIG consumption census 64/64 leaves consumed.
