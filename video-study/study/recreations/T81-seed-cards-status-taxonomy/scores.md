# T81 — Seed cards with status taxonomy · scores (attempt 1, Cycle 014 Wave 12)

Bound build: recreation.html sha256 `b7d84a63dcc8bb73d4dc8a16bec6eb3f3ae62c73d0ef71b1cdafb3936f5d0294` (identical in all five lens payloads; verified unchanged after the wave). Feeding: score-blind allowed packet per lens (standing header + lens instruction + neutral technique facts + score-blind build record + full recreation.html); scores.md never fed; no lens saw another lens's return. Payloads preserved at `codex/payload-<lens>.txt`.
Plan gates: codex-observe **CONFIRMED-WITH-GAPS** (`codex/codex-observe.md`; gaps dispositioned in build-record) · codex-plan-review **EXECUTE** (`codex/codex-plan-review.md`).
Pre-wave gate: jev-prewave **FIRE-WAVE** (parameterization 0.95 · purity pre-check 1.00 · own-checks completeness 0.85 · fidelity-plan honesty 1.00; return at `jev-prewave.md`).
A6 legs (final build): guard-measured-fit → `fit-table.md` (14 rows; 1 marginal HIT carried — source caps ink 9.0 px on two cards, disposition printed there) · guard-config-census → `config-census.md` (HIT list EMPTY after pre-wave cures).

| Lens | Score | Return |
|---|---|---|
| motion | 86 | codex/lens-motion.md |
| timing | 88 | codex/lens-timing.md |
| purity | 96 | codex/lens-purity.md |
| reusability | 78 | codex/lens-reusability.md |
| readability | 82 | codex/lens-readability.md |

Arithmetic (shown, no rounding up): sum = 86 + 88 + 96 + 78 + 82 = 430 · average = 430 / 5 = **86.0** · minimum = **78**.
Bar: average ≥ 85 AND minimum ≥ 70 → 86.0 ≥ 85 ✓ · 78 ≥ 70 ✓.
**VERDICT: PASS — tier RECREATED.**

## Plateau WHY (first attempt below the card-family averages — T56 90.8 · T59 86.8)
86.0 clears the bar but sits below both card-family siblings. The stuck lens is **reusability (78)**, as predicted in Plan: the taxonomy IS an indexed CONFIG list (that part landed), but the override machinery around it is shallow — per-index array merge cannot shorten the cards/taxonomy lists, validation diagnoses without guarding execution, there is no content-fit contract for longer claims, and every card shares one global rhythm (no per-card cue times, which the motion lens's claim-coupling finding also touches). Second drag: **readability (82)** — the carried fit HIT (source foot-line caps ink 9.0 px) is exactly the deduction the lens took. What was changed vs the family's failure record: phase exclusivity and intensity separation are construction properties (motion 86, no overlap finding), and purity 96 shows the parameter surface is nearly clean — the remaining gap is override/validation depth, not the card mechanic.

## Priced cures for the next attempt (practice job) — convergent first
1. **Reusability (−22) + motion (−14, related): claim-coupled scheduling** — add optional per-card cue times/durations to CONFIG so a card fires at its claim moment rather than on a uniform carousel rhythm; keep the uniform cycle as the default.
2. **Reusability (−22): override semantics + enforced validation** — an explicit wholesale-replace mode for array keys (demonstrate 1-card and 4-card configurations with correct derived cycles), and validation that stops rendering with an actionable error on malformed CONFIG instead of merely exposing PROBLEMS.
3. **Readability (−18) + reusability fit contract (related): source foot line** — reach ~11 px actual ink by permitting a taller card / two-line source zone (card height growth within the stage), then browser-verify all settled cards at 360 px; define the fit contract (minimum sizes + overflow behavior) the reusability lens asked for.
4. **Purity (−4): residual literals** — page background `#0b1526`, status boldness, and the place·year separator sit outside CONFIG (census classified the first as page chrome; the lens prices all three) — move them into CONFIG/type for a fully accurate parameter-surface claim.
5. **Timing (−12) / motion (−14): entrance evidence** — measure the original's card entrance/replacement events from the source at finer frame steps before claiming more than the labeled allocation; browser playback verification of slot boundaries and the loop wrap (PIXEL-UNVERIFIED ceiling).

## Limitations carried
PIXEL-UNVERIFIED (no exercisable browser binary in this seat): all lens verdicts are source/record-based; fit evidence is PIL font-metric measurement (DejaVu stand-ins for Georgia) + node-harness logic tests; the comparison page is the render surface. Schedule basis `t=0 allocation`: the settled card form is OBSERVED; the 3-card sequence, entrance, and per-card cycle are allocation — and the OBSERVED segment stacks two cards where the build sequences one (governing Cure-2 allocation, named in build-record). The taxonomy's sixth state (ALREADY TESTED) is text-named in the digest but frame-unverified — CONFIG carries the five evidenced states; the sixth is UNRESOLVED in the source record as an evidenced state (catalogue-fidelity observation for style-library/digestion). ev/t452 firsthand reads "ALREADY PLANNED"; ev/t392's frame shows no MEASURED card (text-evidenced only).
