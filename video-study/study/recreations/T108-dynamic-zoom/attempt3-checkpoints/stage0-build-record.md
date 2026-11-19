# T108 — Dynamic / infinite zoom · build record (attempt 3, practice Cycle 025 Wave 24)

Artifact dir: `hidden_files/study/recreations/T108-dynamic-zoom/` · Governing: plan-T108.md + BINDING plan-review addendum (codex-plan-review-T108-return.md, 7 findings, all accepted — finding applications recorded in §10, finding-numbered) · practice INSTRUCTION §3 + §5. PIXEL-UNVERIFIED stands (A-C002-2 — no browser binary in this seat; verification is logic-level via the node harness + PIL font-metric geometry).

## 0. Preservation re-verification (E1, before any mutation)
- Baseline: `runs/2026-11-18-cycle-025-wave-24/preservation-baseline-T108-attempt3.txt` (98 files, machine-captured at Plan, diff-clean).
- Machine-side sha256sum at Execute open: recreation.html = recreation-attempt-2.html = 6ae2a834e76fa17959a1de375ba1c740439b998d1d51349816dea5e5d0e6628f · comparison.html = comparison-preserved-attempt-2.html = ae854fdc8e9b5117636d83ca1d7fe12d7ea68ba18c8d58d07b8f1175dcdf4841. Both attempt-2 content copies verified BEFORE the working file was touched. Post-first-overwrite re-verification is filed at §3 (Stage 1 close).

## 1. Stage 0 — fresh brackets + event criteria + regenerated ledger (E2, finding 1)

Frame pairs re-observed firsthand at this Execute from the census frames on disk (0.25 s steps, segment time = source − 43.0 s). Each event carries its criterion and the pair that brackets it:

| Event | Criterion (observable) | Last frame WITHOUT | First frame WITH | Bracket |
|---|---|---|---|---|
| Camera onset | laptop framing begins to grow / push underway | 7.50 — laptop small, centred, cursor right of screen, screen blank teal | 7.75 — push underway | (7.50, 7.75] |
| Cursor entry | cursor hotspot inside the screen rectangle | 7.50 — cursor right of the screen, outside it | 8.00 — cursor on the teal screen | (7.50, 8.00] |
| Camera completion (inside pose) | teal fills the whole frame; laptop no longer visible | 8.00 — laptop close, still framed | 8.25 — teal fills frame, cursor small on teal, yellow pill seed dot at centre | (8.00, 8.25] |
| Pill growth onset | pill wider than its seed dot, typing begun | 8.25 — seed dot only, no pill bar, no text | 8.50 — pill bar present, typing underway (bar + partial text by 8.75: "Mo…") | (8.25, 8.50] |
| Pill/typing completion | pill at full width with full text | 9.00 — typing still completing | 9.50 — pill full ("Motion Design Training") in the arrived state | (9.00, 9.50] |
| First card present | first result card visible below the pill — DISTINCT from settlement completion | 9.50 — arrived webpage state, card not yet the settled composition | 10.00 — card present with pill complete | (9.50, 10.00] |
| Settlement completion | arrived composition holds unchanged | 9.75 — arrived state holds | 10.00 — settled composition (pill + card) | (9.75, 10.00] |

**Camera fraction derivation (finding 1 — exact, not rounded):** endpoint policy prices travel from the outer checkpoint pair: completion first-with (8.25) − onset last-without (7.50) = 750 ms, the bracket's upper endpoint estimate. Bound value: `cameraTravelMs = 750`, `cameraFraction = 750/2600 = 0.28846…` — derived in source as travelMs ÷ zoomMs; "0.29" appears only as a rounded display. Shared-onset limiting ratios (finding 1): (8.00−7.75)/(10.00−7.75) ≈ 0.111 and (8.25−7.50)/(9.75−7.50) ≈ 0.333 — the plan's earlier [0.10, 0.375] range combined incompatible onsets and is superseded by these.
**Pill beat binding (finding 4 — offset and duration separate):** settle span (inside pose → settlement completion) = 8.25 → 10.00 = 1750 ms segment. Pill growth onset 8.50 → offset = (8.50−8.25)/1750 = 0.1429 of the settle span; typing/growth duration 8.50–9.00 = 500 ms → span fraction 0.2857. Both bound as separate CONFIG keys (`settle.pillGrow.offsetFraction`, `settle.pillGrow.spanFraction`).

**Regenerated window ledger (finding 1 — allocations labelled; this ledger supersedes the plan's §7 table):**

| Phase (build clock) | Span | ms | Basis |
|---|---|---|---|
| Distant hold [0, 1400) | cursor approach inside a laptop-centred frame | 1400 | ALLOCATION |
| Zoom window [1400, 4000) | the whole window | 2600 | ALLOCATION (window) |
| — camera sub-span | scale travel; inside pose at its end | 750 | MEASURED-bracket endpoint (750/2600 exact) |
| — settle sub-span | settle envelope + pill growth/typing + row arrivals | 1850 | DERIVED REMAINDER of the allocated window (2600 − 750); internal beats cite the 8.50–9.00 + 10.00 checkpoints |
| Hold [4000, 14000) | arrived webpage state, single phase (K3) | 10000 | ALLOCATION — derived as cycleMs − holdBeforeMs − zoomMs |
| **Total** | | **14000** | = cycleMs = segment duration |

**Both-bases dispute (A-C010-3, as fed to the lenses):** Basis A — the retained builder basis of the prior build: camera travel bound as an allocation of 45% of the 2.6 s transition (1.170 s), from an earlier coarser estimate of ≈1.1 s travel. Basis B — the segment-evidence basis: quarter-second census brackets bound travel to [0.25, 0.75] s; the endpoint reading gives 0.75 s → fraction 750/2600 ≈ 0.288. This build binds Basis B; Basis A survives only in this dispute text.

**Adverse pricing on a common baseline (finding 2):** pre-charge timing baseline = **88** (judgment estimate: the timing score if the zoom-window cures are fully credited under the endpoint reading with NO tail charge; attempt 2 supplies no component points, so all deductions below are judgment estimates, labelled as such). Each scenario charges camera + tail ONCE:
| Scenario | Camera | Tail | Timing | Five-lens avg (others at §3 aims: motion 88 · purity 97 · reusability 84 · readability 89) |
|---|---|---|---|---|
| Endpoint (Basis B, as built) + partial tail | 0 | −2 | 86 | (88+86+97+84+89)/5 = 88.8 |
| Midpoint reading (travel 0.50 s) + partial tail | −3..−6 | −2 | 80–83 | 87.6–88.2 |
| Inner-edge reading (travel 0.25 s) + partial tail | −8..−12 | −2 | 74–78 | 86.4–87.2 |
| Inner-edge + FULL tail (−5) | −8..−12 | −5 | 71–75 | 85.8–86.6 (min lens 71 — floor holds) |
| Basis A sensitivity (lens credits the older ≈1.1 s estimate; built 750 ms reads short) + partial tail | −2..−4 | −2 | 82–84 | 88.0–88.4 |
Motion's exposure to the same dispute: −0..−3 (continuity/handoff priced, not the ratio).

**D-HIT1 re-inventory for the PRESENTED state (finding 5):** under K10's construction the pre-arrival presented elements are: the title "Webpage" (the ONLY visible text pre-arrival; distant ink 5.5 px), the pill SHELL (yellow bar at its from-fraction width, NO text — text is empty until the beat), and the rows ABSENT (opacity 0 by construction, priced absent). The prior filing's "all inner text 3.6–5.5 px" does NOT carry forward — pill text and row text are not presented pre-arrival. Re-priced for this presented state: readability −1..−4 (title only, vs −2..−5 for four texts) · motion −0..−1 · purity −0..−1 (pre-arrival states are new surface) · timing 0 · reusability 0. The specimen's distant screen is blank teal; the title remains the residual.

**D3′ distinction (finding 5):** two different changes are deferred, not one: (a) shortening the 10.0 s hold WITHIN the 14 s cycle (reallocating its ms to other phases) — deferred, priced −0..−5 timing; (b) shortening cycleMs itself — deferred separately: it desyncs the comparison page's synchronized 14 s control. K3's phase merge changes neither duration. **K3 reconciliation with RUN.md §1:** RUN §1 named the cure as "holdAfterMs given a real rendered effect"; the plan (K3) and the attempt-2 WHY discriminator ("give the boundary a visible difference OR remove the boundary's claim") govern the form actually built — the claim is REMOVED (phases merged honestly); no visible difference is invented without specimen basis. Recorded here as the reconciliation finding 5 requires.

**Model basis = render basis (A-C012-1), updated for K7:** all geometry is screen-local px under the single world pose; cursor clip-path percentages resolve against the cursor's own box. Cover row (new): endScale unit = stage px per screen-local px → basis box = max(stageW/screenW, stageH/screenH) → rendered consequence at 360 px: at default geometry the width ratio (2.034) exceeds the height ratio (203/113 ≈ 1.796), so endScale and the centre mapping are asserted IDENTICAL to the prior build at default; short-rect fixtures fill the frame under the height ratio.

**Checkpoint 0:** this build record at this Stage-0 state, content-copied to `attempt3-checkpoints/stage0-build-record.md` (named evidence file, finding 3); its sha + the seat read-back print at §2 before Stage 1 opens.
