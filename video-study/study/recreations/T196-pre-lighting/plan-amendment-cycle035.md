# T196 — Plan Amendment · Cycle 035 Wave 32 (filed BEFORE any build script, per A9.2 + wave RUN §2b)

Source: jev-plan-exit REVISE (T196) + jev-observe-exit charges, consumed in wave RUN §2b. This amendment amends the Cycle-034 item record's Plan; the build executes the Plan AS AMENDED. The Cycle-034 record is not retro-edited (A8).

## A1 — CP3b source-fidelity result (separate from the schedule assertions)
CP3b is a SOURCE-FIDELITY checkpoint, reported separately from CP3a's schedule result:
- Census state at source 55.0 s (ev/t055): prefix through "gets" spoken; "louder or softer" WHITE + unscaled.
- Build state at the corresponding instant (build 7,240 ms = source 55.0): the ASR-anchored schedule has "louder" (onset 6,880 ms) ALREADY SPOKEN.
- **Expected departure (priced, D3):** SOURCE-FIDELITY at CP3b = DEPARTURE-EXPECTED. The build follows the ASR onset series (the only complete onset series); the source's visual flip for "louder" lags ASR by >360 ms. CP3b does NOT pass as fidelity and does NOT fail the schedule: it is recorded as a named, priced departure. No revised visual onset is adopted for "louder" alone, because a single-word visual onset without the full per-word visual series would invent precision the census does not carry (D3 stays an explicit ASR-based approximation until visual flip times are measured).

## A2 — Flip checks evaluate at onset + ε
Every flip assertion evaluates at `onsetMs + ε`, ε = 1 ms (CONFIG-derived where the onset is CONFIG). CP5a's strict `spoken iff onset < t` at exactly t = 8,640 ms is untestable as filed (at t = onset the tie rule yields UNSPOKEN); CP5a therefore evaluates at 8,641 ms. The tie rule itself (`spoken iff onsetMs < t`) is unchanged and is asserted separately at the exact onset instant (state = unspoken).

## A3 — End sample / terminal state
CP5b evaluates at `totalMs − ε` (10,559 ms), inside card 3's half-open interval. Explicit terminal state: for t ≥ totalMs the stage holds card 3 fully spoken (the phase machine clamps to the final state); this terminal state is specified here and implemented as clamp, not as an interval extension.

## A4 — Comparison uses ONE clock
The comparison expression uses file-local `currentTime` only, with the head handle: **core build zero ≡ video 0.5 s**. The segment is cut with a 0.5 s head handle (source 47.26 s) and a 0.5 s tail handle (source 58.82 s), duration 11.56 s. Mapping: `buildMs = (video.currentTime − 0.5) × 1000` (at timingScale 1). The 47.76 s source timestamp never appears in the comparison's clock expression; it appears only in the label and in this record.

## A5 — The 28 ms all-white interval: LOGIC vs PAINTED-FRAME outcomes kept separate
CP1 reports two outcomes: (a) LOGIC — the state function at t = 5,032 ms yields card 3 with 11/11 spans present + unspoken (asserted mechanically); (b) PAINTED-FRAME — whether a painted frame in [5,032, 5,060) actually displayed the all-white card during continuous playback. This seat has no browser binary (PIXEL-UNVERIFIED, T132 precedent): PAINTED-FRAME = NOT EXERCISABLE IN THIS SEAT, recorded as such, never merged into the LOGIC result.

## A6 — D2 act (observe-exit charge)
Before card 2's visual anchor is frozen, a frame-measurement refresh is run inside the 49–50 s bracket (frames at 49.60 / 49.70 / 49.78 / 49.90 / 50.00 s extracted from source.mp4 and viewed). The measured result is recorded in build-record.md; the anchor is frozen only from that measurement (or the bracket is narrowed and the residual named).

## A7 — D3 status
D3 stays an explicit ASR-based approximation until per-word visual flip times are measured. No visual onset is claimed for any individual word.

## A8 — Swap verification: three exact replacement cards + onset tables
Swap words (film wording replaced wholesale; expectations derived from these tables, no harness edits):
| Card | onsetMs | Words (word @ onsetMs) |
|---|---|---|
| S1 | 0 | Presence @0 · precedes @300 · emphasis @700 · entirely @1200 |
| S2 | 2000 | Every @2000 · word @2300 · waits @2700 · visible @3200 |
| S3 | 4500 | State @4500 · changes @4900 · nothing @5500 · appears @5900 · here @6600 |
Derived expectations: counts 4/4/5 = 13 words; totalMs = last onset 6,600 + finalHoldMs 1,920 = 8,520 ms; card S1 word 1 tie at entry (onset 0, t=0 → unspoken at exact 0, spoken at 0+ε).
Timing swap: `timingScale` 1.25 → every onset ×1.25, totalMs 10,650 ms; assertion instants re-derive from swapped CONFIG.
Palette swap: `spoken.color` #ffe600 → #00e676.

## A9 — Pair-difference metric + threshold (palette-swap check)
Metric: **CIE76 ΔE in CIELAB** between spoken and unspoken colors, computed in the harness from the CONFIG hex values. Threshold: **ΔE ≥ 30** for BOTH the default palette and the swapped palette. (In addition, each state color's WCAG contrast ratio vs bg must be ≥ 7:1, per the Plan's contrastFloor.)

## A10 — Stage-box percentages bound (fit check)
CONFIG gains `stageBox: { widthPct: 88, heightPct: 62 }` — the stage box is 88% of stage width and 62% of stage height, reserved before first paint. The fit check measures against exactly these percentages at the 360 px stage (box = 316.8 × 223.2 px at 16:9 stage height 360×9/16=202.5 → box height 125.55 px; the harness computes from the actual stage geometry, these percentages are the bound values).

## A11 — Cross-item record (observe-exit, from T197)
This build's window (§1) records a new header ("Character Identification") first appearing at source 57.167 s, inside T197's window. The build-record records what this item's window evidence shows at 57.167 s (census frame t057.6 + pf057/pf058 bracket) so the seat can reconcile the two items' accounts.
