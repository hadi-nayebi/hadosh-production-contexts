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
