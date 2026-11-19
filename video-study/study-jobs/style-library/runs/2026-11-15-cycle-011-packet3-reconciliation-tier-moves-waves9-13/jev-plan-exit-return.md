# jev-plan-exit — raw return · style-library Cycle-011

Call: jev-plan-exit (guards/jev-plan-exit.md), §2 instruction, §3 context contract, §4 output space, §5 floors. Named deviation class: STALE-VIEW.
Cycle: 2026-11-15-cycle-011-packet3-reconciliation-tier-moves-waves9-13
Date: 2026-11-15
Context judged (per §3, text only): RUN.md §1 Observe inventory (as amended through jev-observe-exit firing 2) + §2 Plan (registration plan · Execute E1–E8 · Verify V1–V7 · failure-point evaluation) · jev-asset verdicts for the six packet-#3 candidates as recorded in RUN §1 with the raw return in this run directory · TECHNIQUES.md Feeds/tier excerpts for the 13 changed techniques (T11, T14, T54, T57, T76, T81, T82, T83, T90, T91, T92, T94, T96) plus T56/T68 · VIEWS.md header + derivation note (last regenerated Cycle-010) · GROWTH.md latest entry (Cycle-010 update) · board-gate state (samples-board-DESIGN.md drafted in full at Cycle-009, 4,776 B on disk — gate OPEN, confirmed).

## Verdict

**REVISE** — primary class: **STALE-VIEW**

The Plan is executable in almost every leg — tier evidence, reconciliation, checklists, failure points and growth pairing are all priced — but it touches the tier register (13 techniques) and the asset register (3 new entries) while its VIEWS.md derivation cross-check, as written, verifies only the technique leg. Under §5 the stale-view floor is absolute: stale-view prevention < 1.0 on any plan that touches a Feeds field, a tier, or the register → REVISE with primary class STALE-VIEW. The fixes are Plan-text amendments only; the inventory carries this plan, so this is not a RETURN-TO-OBSERVE. Per §4, only the changed checklist items re-enter this gate.

## Dimension profile

| Dimension | Score | Floor (§5) | Result |
|---|---|---|---|
| Registration completeness | 0.95 | < 0.60 → REVISE / RETURN | Pass |
| Stale-view prevention | 0.90 | < 1.0 on a tier/register-touching plan → REVISE, STALE-VIEW | **Fail — floor triggers** |
| Checklist instrumentedness | 0.85 | < 0.60 → REVISE | Pass |
| Failure-point coverage | 0.90 | — | Pass |
| Growth pairing | 0.95 | — (PRODUCTION-ONLY-GROWTH class) | Pass |

## Findings

### 1. Registration completeness — 0.95

- No new packet is claimed: §1 prints NONE explicitly, and the SOM packet keeps its IN FLIGHT row on the corrected, explicit ground (files landed during the cycle — digest.md + digest.pdf + 14-technique catalogue present — but the producing video-digestion Cycle-011 is still open and no adoption/hand-off stands). That is a priced deferral, not a silent omission; per-packet INDEX fields are therefore not owed this cycle beyond the E5 row update.
- Tier moves are individually evidenced, not bulk prose: all 13 techniques carry an exact scores.md path in §1 with averages recomputed from the filed lens lines (T57 90.0/79 PASS · T14 91.6/84 PASS · T76 88.8/80 · T81 86.0/78 · T82 87.2/80 · T83 90.6/80 · T90 88.4/76 · T94 89.8/82 → RECREATED · T91 76.4/62 · T92 82.4/76 · T96 73.8/50 FAIL → IN PROGRESS · T11 81.0/72 and T54 75.2/58 deltas). No move contradicts its evidence — no UNEVIDENCED-TIER-MOVE. Plan §2.1 carries each move as one act in both the tier register and the per-technique Recreation line, dissolves the grouped P4 OWED row into nine individual rows, and removes the ◆ OWED marks as the obligations discharge (OWED 9 → 0, projected counts 98 · DESCRIBED 53 · IN PROGRESS 17 · RECREATED 28 recompute cleanly).
- Packet-#3 reconciliation is complete on the register's face: 7 of AS-P3-01..13 already standalone (AS-22…AS-28), the remaining 6 put to jev-asset with verdicts recorded (3 REGISTER → AS-42/43/44 in candidate order, each with its profile line in E3 · 3 REJECT-DUPLICATE with their standing variant homes under AS-19/AS-21/AS-14 verified on disk). No candidate is silently dropped and no duplicate is re-registered.
- Citation flags are specified to the frame: T68 ev/t910.jpg mistimed (910 s outside its 13:21–14:16 window; entry stands on ev/t815.jpg) and T56 ev/t815.jpg conflated (the packet's evidence line equates the t=810 grid frame with ev/t815.jpg — different moments), plus the packet ev-count discrepancy (stated 28 vs 27 on disk) priced with no INDEX change owed.
- Held back from 1.0 only by the asset-placement underspecification priced under stale-view below: the three new assets' VIEWS homes are not named per asset in the Plan.

### 2. Stale-view prevention — 0.90 → REVISE (primary class STALE-VIEW)

What is right: the Plan touches tiers and the register and prints the no-Feeds-change finding explicitly (§1 + E4); E4 is a same-cycle VIEWS.md regeneration step enumerating the full 13-technique changed set correctly (8 → RECREATED: T14, T57, T76, T81, T82, T83, T90, T94 · 3 → IN PROGRESS: T91, T92, T96 · 2 delta-only: T11, T54) with the header restated. This is not the constructed exemplar whose Execute ends at TECHNIQUES.md.

What fails the §2(2) charge: the derivation is from amended Feeds fields **+ ASSETS consumer lines**, with the derivation cross-check named in Verify. E4 places the new asset lines only "per their consumer lines" — no per-asset view section is named for AS-42 (transcript craft / Opening), AS-43 (Plan, all surfaces / story architecture) or AS-44 (visual craft, all containers) — and V5's cross-check as written verifies techniques only ("every technique appears in exactly the views its Feeds name, with tier text matching the register"). No Verify item counts or checks the three new asset view lines against their ASSETS.md consumer lines. Execute would have to improvise the placements and Verify could not catch a missing or misplaced asset line — which is exactly gap G1 from the Observe-exit gate, recorded as "carried by E4/V5": E4 gestures at it, V5 does not carry it. A regeneration step whose cross-check omits one of its two derivation sources is not the 1.0 the floor prices.

Required fixes (Plan-text only, then re-judge the changed items):
- **R1 (E4):** name the VIEWS section for each new asset line — AS-42, AS-43, AS-44 each with the view its consumer line derives (e.g. AS-42 → Openings · AS-43/AS-44 → Cross-container systems & principles, or the sections the runner prices — but named in the checklist, not left to "per their consumer lines").
- **R2 (V5):** extend the views-derivation cross-check to the asset leg: every new/changed asset line appears in exactly the view(s) its ASSETS.md consumer line names, counted (3 new lines this cycle), with a fail action (fix in-cycle before any face is reported).

### 3. Checklist instrumentedness — 0.85

Execute E1–E8 is complete against the registration plan: tier moves + register/entry dual write (E1), citation flags (E2), jev-asset dispositions with the ASSETS header restated from a body count (E3), VIEWS regeneration (E4), INDEX state + SOM row (E5), GROWTH update (E6), HQ.json/heartbeat/verdict-history bookkeeping with parse-validation and the heartbeat `}{` fusion check (E7), and broken-pointer repair (E8 — none known at Plan, census decides). The board-gate step is priced, not missed: gate already OPEN, samples-board-DESIGN.md drafted in full at Cycle-009 (verified on disk), no board work this cycle and codex-plan-review correctly not fired — no BOARD-GATE-MISSED.
Verify names an instrument per property in the main: V1 pointer census counted, not sampled (disk probe; fail = repair in-cycle or mark broken) · V2 naive-use test with target technique (T94, newest RECREATED — rotation priced: newest entry first) and cold reader named (fresh subagent, library surface only), timer running, <60 s bar, filed report, and the extended target priced (recreation artifact + the Cycle-010 disputed-citation flag on ev/t582.jpg must both be located) · V3 existence audit on every changed row with flag texts grep-verified · V4 tier-move evidence check against scores.md average/minimum with register/entry agreement for all 13 · V6 consumption-claim check (CONSUMPTION.md still 0 absent a cited production Observe record — none read) · V7 count agreement against exact targets (98 · 53/17/28 · OWED 0; ASSETS header = counted entries).
Held back: V3–V7 state their checks more fully than their fail actions (explicit for V1/V2, implied for the rest), and V5's asset-leg omission (priced above) is also an instrument gap here.

### 4. Failure-point coverage — 0.90

The evaluation prices this job's failure points with dispositions, not intentions: register/entry divergence on the dissolved grouped OWED row (→ V4 dual check) · unevidenced tier claims (→ scores.md path required on every register line, V4) · citation flags lost inside E1's restatement of the same entries (→ V3 grep) · AS-P3 double-count inflating the asset census (→ jev-asset non-duplication leg + E3/V7 body count) · GROWTH without its consumption side (→ E6) · the stale-view path itself (→ E4 before any face is reported) · practice-pool headline mispricing (→ E6 must print the A4 composition-vs-rate pricing explicitly) · naive-use launch contamination, Cycle-009's demonstrated failure (→ test fires only after Execute lands). The frames-cannot-be-named failure is carried in substance by the SOM disposition (no TECHNIQUES entry is improvised for a packet whose producing cycle has not closed; registration defers with the gap named) rather than restated in the failure list — noted, not scored as a gap in coverage of this cycle's actual risks.

One carrying step is not yet in the checklist text it names — required fix:
- **R3 (E5, carrying Observe-exit finding F1 + gap G2):** E5 as written hardcodes the SOM figures from Observe (digest.md 23,594 B · digest.pdf 196,787 B), but firing 2 already found digest.pdf rewritten after that probe (196,573 B, still moving) — followed literally, E5 would print stale figures on the INDEX face. Amend E5 to print SOM figures from a fresh Execute-time re-probe (V3 already re-probes SOM; make the re-probe the source of the printed line, not a check after it), and copy G2's charge into E6's stall line in words: if video-digestion Cycle-011 is still unclosed at the next cycle, that cycle prints SOM STALLED with the owner named.

### 5. Growth pairing — 0.95

A same-day (2026-11-15) GROWTH update is owed and planned: E6 appends the Cycle-011 update with production and consumption (0, printed as zero) side by side, score deltas for all 13 evidenced techniques, the P3 reconciliation outcome, one stall-owner line, and the throughput line — first attempts 0 owed = 0.0 d (queue CLEAR) · practice pool 17 ≈ 0.7 d nominal. The two-consecutive-growth headline rule is armed in the entry, not smoothed: E6 requires the A4 pricing printed explicitly — the pool's rise (15 → 16 → 17 across Cycles 009–011) is composition (three first-attempt FAILs entering net of two PASS exits), not a measured rate loss. No PRODUCTION-ONLY-GROWTH. Held back from 1.0 only on precision: at the printed ≈0.7 d rounding the days figure is flat while the pool count rises, so the entry must show the pool-count movement beside the rounded days figure for the headline pricing to be checkable — E6's composition sentence does this in substance; keep it verbatim.

## Reductions check

No silent reduction found beyond the items above: the obligation marks, the consumption side of GROWTH, the same-cycle VIEWS duty, and the board-gate check are all present or explicitly priced as not owed (board gate OPEN at Cycle-009; no new packet registration). No SILENT-REDUCTION, CHECKLIST-GAP (as primary), VERIFY-BY-INTENTION, UNEVIDENCED-TIER-MOVE, PRODUCTION-ONLY-GROWTH or BOARD-GATE-MISSED class applies — the single floor breach is the stale-view asset leg, and it classifies the verdict.

## Disposition

Verdict is advisory (per the call's §5): the runner applies R1–R3 as Plan-text amendments and re-enters this gate for the changed items only (E4, V5, E5/E6 stall line), recording the re-judgment in RUN.md, or sets this verdict aside with the miss recorded in Condense — noting that setting aside a stale-view floor verdict records the §5 pricing (if the step is absent, the view will be stale) as the miss. No Execute step should fire on E4/V5 until the asset leg is named.

— jev-plan-exit judge, Cycle-011 (raw return; verdict advisory — the executing agent applies it or sets it aside with the miss recorded in Condense).
