# T210 — Plan Amendment · Cycle 037 · Wave 34

Filed BEFORE any build script is written (RUN.md §2b disposition form). The item record (`runs/2026-11-18-cycle-037-wave-34/item-T210-observe-plan.md`) is NOT retro-edited; this amendment governs where it differs. Gates consumed: jev-observe-exit ADVANCE-WITH-GAPS (all dimensions 1.0) · jev-plan-exit REVISE, primary UNBOUND-SCHEDULE (param 0.55 · construction 0.90 · execute 0.65 · verify 0.60 · failure 0.80 · plateau 0.95). Schedule basis stands: **segment-anchored** (buildMs = segment-relative ms; segment = source 139–147 s).

## Charges cured — 15

### From jev-plan-exit (4 charges, all sub-points)
- **C1 — CP2 reconciled (census 1000 ms: partial outlines).** Draw starts now begin at 600 ms (not 1000 ms). At the census instant 1000 ms, regions R01–R06 are strictly inside their draw intervals (start < 1000 < end) — partial outlines on both sides, no fills (earliest fillStart 1500 ms), no post. Assertion CP2 probes AT 1000 ms.
- **C2 — CP3 RESTORED as the distinct first-fill checkpoint (census 1500 ms).** The item record's §2.3 demoted CP3 to non-governed evidence; that demotion is WITHDRAWN. Earliest fillStart = R01 at exactly 1500 ms (derived: drawStart 600 + drawDur 700 + fillDelay 200). CP3 assertion probes the interior instant 1600 ms: R01 fill progress = (1600−1500)/1900 ≈ 0.0526 > 0 and R02 ≈ 0.025 > 0, credited weight still 0/0 — the first-fill event is governed separately from CP4's established fills.
- **C3 — CP4 reconciled (census 2000 ms: established fills).** Under the amended schedule, at 2000 ms fill progress is R01 0.263 · R02 0.225 · R03 0.190 · R04 0.156 · R05 0.106 · R06 0.080 · R07 0.038 · R08 0.018 — ≥3 regions per side strictly between 0 and 1 (established, not just started, curing the filed schedule's 100/25 ms defect); R13–R16 still drawing; credited weight 0/0 (first fillEnd 3400 ms); post absent (tPostMs 2700 ms).
- **C4 — CP5 reconciled (census 3000 ms: post descending + label emerging AT 3000 ms).** `tPostMs` moves 3000 → **2700 ms**, `postDurMs` 600 ms → post interval (2700, 3300). CP5 probes AT the census instant 3000 ms, which is now an interior instant: post height fraction = (3000−2700)/600 = 0.5, label plate present in the top layer and OPAQUE. (The record's 3300 ms probe is superseded.) Intentional-departure note: no departure — the census shows the post already descending at 3000 ms, so an onset at 3000 ms exactly was the contradiction; 2700 ms is the latest onset consistent with CP4's "post still not standing" at 2000 ms and CP5's mid-descent at 3000 ms.
- **C5 — CP7 pockets vs never-claimed cells cited SEPARATELY; the 16-unit remainder is NOT coverage evidence.** Two distinct quantities: (a) POCKETS = cells of regions R10–R16 whose fills complete in (5000, 6000] — filled by CP8; at CP7 (5000 ms) pending region cells = 356 − (cells of regions with fillEnd ≤ 5000) > 0. (b) NEVER-CLAIMED cells = the 8 cells listed in C7 belonging to NO region — unfilled at every instant including CP8/CP9. The weight arithmetic 538 − (258 + 264) = 16 is a tally remainder only; it is NOT used as cell-coverage evidence anywhere in the build or its checks. CP7/CP8 assertions probe cells and credited weight as separate quantities with separate denominators (364 cells · `total` 538).
- **C6 — ONE authoritative CONFIG schedule; advertised values REPLACED.** The record's §2.1 line "fills start 1500–4100 ms" and the `fillDurMs` 900 ms default are WITHDRAWN. Authoritative schedule = the table in C6b below. Inputs vs derived, exhaustively:
  - INPUTS (CONFIG literals): per region `id · side · weight · cells · startMs · fillEndMs`; globals `drawDurMs` 700 · `fillDelayMs` 200 · `tGridSettleMs` 500 · `tPostMs` 2700 · `postDurMs` 600 · `holdMs` 2000.
  - DERIVED (never stored): `fillStartMs = startMs + drawDurMs + fillDelayMs` (= startMs + 900; range 1500–2550 ms) · `fillDurMs = fillEndMs − fillStartMs` (range 1900–3450 ms; no default exists) · `completeAtMs = max(tGridSettleMs, latest drawEnd, latest fillEnd, tPostMs + postDurMs)` = max(500, 2350, 6000, 3300) = **6000** · `durationMs = completeAtMs + holdMs` = 6000 + 2000 = **8000** · `thresholdLabel = String(threshold)` · post x-fraction = `threshold / total` · all geometry (cellPx, gapPx, field rect, plate size) per the record's derivation keys.
- **C6b — Exact 16-region schedule (the Phase A plan-review cure's form, census-reconciled onsets).** Weights unchanged from the record §2.1b (A = 258 · B = 264 · credited 522 of 538):

  | Region | Side | Weight | drawStart (input) | fillStart (derived) | fillEnd (input) | fillDur (derived) |
  |---|---|---|---|---|---|---|
  | R01 | A | 34 | 600 | 1500 | 3400 | 1900 |
  | R02 | B | 31 | 650 | 1550 | 3550 | 2000 |
  | R03 | A | 29 | 700 | 1600 | 3700 | 2100 |
  | R04 | B | 27 | 750 | 1650 | 3900 | 2250 |
  | R05 | A | 21 | 850 | 1750 | 4100 | 2350 |
  | R06 | B | 19 | 900 | 1800 | 4300 | 2500 |
  | R07 | A | 38 | 1000 | 1900 | 4550 | 2650 |
  | R08 | B | 36 | 1050 | 1950 | 4800 | 2850 |
  | R09 | A | 17 | 1150 | 2050 | 5000 | 2950 |
  | R10 | B | 23 | 1200 | 2100 | 5200 | 3100 |
  | R11 | A | 25 | 1300 | 2200 | 5400 | 3200 |
  | R12 | B | 28 | 1350 | 2250 | 5550 | 3300 |
  | R13 | A | 42 | 1450 | 2350 | 5700 | 3350 |
  | R14 | B | 47 | 1500 | 2400 | 5850 | 3450 |
  | R15 | A | 52 | 1600 | 2500 | 5950 | 3450 |
  | R16 | B | 53 | 1650 | 2550 | 6000 | 3450 |

  Last fill ends 6000 ms; latest drawEnd = 1650 + 700 = 2350 ms; postEnd 3300 ms < completeAt 6000 ms ✓.
- **C7 — Geometry set FILED (16 schematic footprints, 28×13 grid).** Regions are rectangular cell blocks (cols 0–27, rows 0–12); footprints below are generated in CONFIG as explicit `cells` lists from these block definitions at build-authoring time and stored as literal cell arrays in CONFIG (A9.6 data, not code literals):

  | Region | Cols | Rows | Cells | | Region | Cols | Rows | Cells |
  |---|---|---|---|---|---|---|---|---|
  | R01 | 0–6 | 0–2 | 21 | | R09 | 0–6 | 6–9 | 28 |
  | R02 | 21–27 | 0–2 | 21 | | R10 | 21–27 | 6–9 | 28 |
  | R03 | 7–13 | 0–2 | 21 | | R11 | 7–13 | 6–9 | 27 |
  | R04 | 14–20 | 0–2 | 21 | | R12 | 14–20 | 6–9 | 27 |
  | R05 | 0–6 | 3–5 | 21 | | R13 | 0–6 | 10–12 | 21 |
  | R06 | 21–27 | 3–5 | 21 | | R14 | 21–27 | 10–12 | 21 |
  | R07 | 7–13 | 3–5 | 19 | | R15 | 7–13 | 10–12 | 20 |
  | R08 | 14–20 | 3–5 | 19 | | R16 | 14–20 | 10–12 | 20 |

  Carved out (never-claimed, 8 cells): R07 minus (10,4),(11,4) · R08 minus (17,4),(18,4) · R11 minus (10,7) · R12 minus (17,7) · R15 minus (10,11) · R16 minus (17,11). **Expected coverage: region cells 356 of 364 grid cells; never-claimed 8; unique ownership (no cell in two regions) is a named validation + count check.** Side A occupies cols 0–13, side B cols 14–27 (the post at fraction 270/538 ≈ 0.5019 falls at the A/B boundary, x ≈ col 14.05).
- **C8 — `accumulationDirection` unambiguous effect.** The `regions[]` array order IS the stagger rank order under `"inward"`. Under `"outward"`, each region's effective startMs is mirrored across the schedule span: `effStart = (minStart + maxStart) − startMs` (span 600–1650 ms), reversing the stagger; fillStart/fillEnd derive from the effective start with each region's derived fill duration preserved (fillEnd shifts by the same delta). The harness asserts the mirroring numerically under swap. No other reading of the key exists.
- **C9 — Swap made valid under its own guard (plan-exit charge 3).** The record's §2.4 weight edits alone left 463 credited units against a swapped total of 200, which Execute step 3b validation must reject. CURE: the swap keeps `threshold 270 → 80`, `total 538 → 200` (fraction 0.400, ~2.9-cell displacement — the strengthened swap stands) AND replaces the full weight set with a valid swapped set summing to 187 ≤ 200, preserving the two named edits (R07 38 → 12 · R16 53 → 20): swapped weights R01 12 · R02 11 · R03 10 · R04 10 · R05 8 · R06 7 · R07 12 · R08 13 · R09 6 · R10 8 · R11 9 · R12 10 · R13 15 · R14 17 · R15 19 · R16 20 → **swapped credited finals A = 91, B = 96, total 187**. Exact tally assertions use these numbers. Validation passes on the swapped CONFIG (threshold 80 < total 200 · sums ≤ total).
- **C10 — Opaque plate + CONFIG ink/paper + 360 px contrast check.** `palette.plate` = `#ffffff` OPAQUE (plate rect opacity 1.0 at every instant, asserted at CP5), `palette.plateInk` = `#111111`, `palette.post` = `#1a1a1a` — all CONFIG keys resolved to application sites by the census leg. The fit leg carries, beside the ink-measurement row, a **contrast row**: relative-luminance contrast plateInk vs plate = 17.9:1 (computed from the CONFIG hex values by the harness) and post vs ground, each printed with its ratio; the 360 px stage row enforces label ink height ≥ 11 px effective.
- **C11 — Fill-start derivation + validation + tally credit rule.** fillStart is DERIVED only (C6); no CONFIG field stores it. Validation at init rejects (loudly, diagnostics object on the harness surface): any region whose derived fillStart < its drawEnd, non-finite/out-of-range numerics, threshold ≥ total, weight sums > total, duplicate cell ownership, zero/negative durations. Tally credit: a region's weight enters its side's credited tally ONLY at t ≥ fillEndMs; fill PROGRESS (0–1 interpolation) is a separate probed quantity and never credits.
- **C12 — Swap assertion sets SEPARATED; onset semantics defined.** Onset semantics: a phase is in progress at t iff start < t < end (continuous interpolation); assertions probe interior instants or census instants that are interior under the governing schedule, printed per assertion. DEFAULT assertion set = CP1–CP9 on the default CONFIG. SWAPPED assertion set (separate, on the §2.4+C9 CONFIG): post x-fraction = 80/200 = 0.400 exactly (CONFIG evaluation) · label text "80" · credited finals A 91 / B 96 · timing probe (i) `tPostMs 2700 → 1800`: post in progress at interior 1950 ms (fraction 0.25), `durationMs` UNCHANGED at 8000 (post is not controlling) · timing probe (ii) `holdMs 2000 → 1200`: `durationMs` = 7200 exactly · palette `palette.sideA #d94f5c → #2e9e6b` reflected in outline + fill colour evaluations. Default CP assertions do NOT apply to the swapped schedule and vice versa.
- **C13 — Count check SPLIT (A9.3).** SOURCE-FIDELITY counts (against the census): grid 28×13 = 364 cells built · governed instants CP1–CP9 vs §2.3-as-amended · segment window/duration. SCHEMATIC counts (against this amendment's declared targets): regions = 16 · per-region cell counts per C7 · weight sums A 258 / B 264 · region cells 356 · never-claimed 8 · unique ownership. Each set prints source-vs-built (or target-vs-built) and halts on mismatch.
- **C14 — Comparison instrumented + handled clip clock bound (plan-exit charge 4).** Segment cut: source.webm (the digest directory's archived source, 488.301 s — this file, not the census clip, is the media covering the 138.5 s in-handle; the census clip `clips/t08-gridmap-formation.mp4` begins at 139.0 s and cannot supply handles) cut **138.5–147.5 s** (window 139–147 ± 0.5 s handles) → `segment.mp4`, 9.0 s. Clock binding: segment.mp4 time 0.5 s = source 139.0 s = buildMs 0; the comparison player applies `buildMs = (video.currentTime − 0.5) × 1000` clamped to [0, 8000]. Verify instruments (harness/structural, filed as receipts): shared-seek check (one control set drives video.currentTime and the recreation clock from the same value; seek mapping asserted at 3 instants) · offset check (the −0.5 s handle offset constant appears once, in CONFIG/comparison code, and the mapping evaluates correctly) · responsive check (comparison.html carries the phone-width stacking rule + controls outside the stacked flow; structural grep + CSS census filed; browser playback itself is PIXEL-UNVERIFIED in this seat and printed as such).

### From jev-observe-exit (ADVANCE-WITH-GAPS — charges carried into Plan, discharged here)
- **C15 — Completion bracket + 538 scope.** (a) Last-fill timing stands as the observed 5000–6000 ms bracket: CP7/CP8 are comparison STATES; 6000 ms is the configured completion (C6b), not a pinpointed frame claim. (b) `total` 538 stays a non-displayed CONFIG data value; its absence claim is scoped to the checked material (the window's narration anchor + census frames), never printed film-wide.

## Amended census-anchor mapping (governing; supersedes record §2.3 where different)

| Checkpoint | Census instant | Probe instant | Prescribed state |
|---|---|---|---|
| CP1 | 500 | 500 | Zero state: drawn 0 · fill progress 0 · credited 0/0 · post absent (command-8 probe) |
| CP2 | 1000 | 1000 | ≥4 regions drawing (R01–R06 interior) · fill progress 0 · credited 0/0 · post absent |
| CP3 | 1500 | 1600 | First fills: R01, R02 fill progress > 0 · credited 0/0 · draws continuing |
| CP4 | 2000 | 2000 | ≥3 regions/side fill progress ∈ (0,1) · ≥1 region still drawing · credited 0/0 · post absent |
| CP5 | 3000 | 3000 | Post fraction 0.5 · plate present, top layer, opaque (B3 cured by construction — named departure from the specimen's defect, not from its timing) |
| CP6 | 4000 | 4000 | Post complete · credited A 63 > 0, B 58 > 0 · not-yet-filled cells > 0 |
| CP7 | 5000 | 5000 | Pending region cells > 0 (pockets, fill by CP8) · never-claimed = 8 (separate) · credited total 252 < 522 |
| CP8 | 6000 | 6000 | All region fills complete · credited A 258 / B 264 · never-claimed still 8 |
| CP9 | 7000 | 7000 | State identical to CP8 (hold; no dissolve/fade) |

Departures named: (1) CP0 lead-in not recreated (record §2.3, stands). (2) CP5 plate legibility cured vs the specimen's covered label (B3 — a defect, not a mechanic). (3) CP10 lead-out not recreated (stands). No timing departures from the census remain: every onset above is consistent with its census instant.
