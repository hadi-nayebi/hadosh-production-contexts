# scores — T132 Serial presentation (RSVP replacement) · attempt 1 · Cycle 022 Wave 19 (2026-11-16)
recreation.html SHA-256: c8423a660141fd240dfbdabee84c345c2bd5200a54d957f8d0c4a81c5293ae04 (identical across all five lens payloads and returns)
Schedule basis: segment-anchored (segment 3.00–17.00 s; onsets/dwells measured)
PIXEL-UNVERIFIED: no browser binary in this seat; lens scores are source/logic-level, comparison.html is the render surface.
jev-prewave: HOLD (ASSERTED-CHECKS) interim → cured with raw harness output appended to build-record.md → re-fire FIRE-WAVE (jev-prewave-refire.md)
A6 legs (pre-wave, final build): fit-table.md HITs 0 · config-census.md HITs 0.

| lens | score | return |
|---|---|---|
| motion | 76 | codex/lens-motion.md |
| timing | 82 | codex/lens-timing.md |
| purity | 100 | codex/lens-purity.md |
| reusability | 76 | codex/lens-reusability.md |
| readability | 82 | codex/lens-readability.md |

Arithmetic (seat-recomputed from the filed SCORE lines): 76+82+100+76+82 = 416; average 83.2; minimum 76. Bar: average ≥85 AND minimum ≥70.
**Verdict: FAIL — IN PROGRESS (attempt 2 routes to practice).**

Priced cures (lenses <85):
- motion 76 (<85): the plate pan wraps by 120 px every ~6.67 s without matching repeated geometry — visible jumps, plus a reset at the cycle boundary. Cure: seamless tiled landscape (repeat period = pan wrap) on a continuous pan clock that does not reset at cycle wrap. CONVERGENT with T137 motion and T135 motion — the shared engine's primary cure.
- timing 82 (<85): the lens finds no 80 ms dwell in the segment table against the packet's 80 ms floor claim — the floor dwells stand in the film outside this segment window; priced for attempt 2 as a table audit against onset-table rows 8–57 (any sub-120 ms dwell found there enters the table verbatim).
- reusability 76 (<85): swap semantics for the dwell table are harness-side (onsets recomputed outside buildTimeline in the probe); cure: move onset derivation into the engine (CONFIG carries words + dwells; onsets derived) so a table swap is CONFIG-only end to end.
- readability 82 (<85): red #e63329 on sky #a9c6d4 ≈ 2.4:1 contrast leaves thin margin at 80–160 ms dwells. Cure priced with the convergent contrast cure below.
CONVERGENT-LENS RULE: background-motion defect (motion on T132/T135/T137 — tiled-pan cure for the RSVP family; T137's own cure is a still plate, see RUN §9.1) and red-on-pale contrast (readability on T132/T134/T135) are the wave's two convergent defects; both lead attempt 2.


---

# Attempt 2 · Practice Cycle 022 Wave 21 (2026-11-17)
recreation.html SHA-256: f2c89c1b8fbd7dc7e1ee65e346dd587216dc21a2d6e138f7ba213988c13b685e (identical across all five lens payloads and returns)
PIXEL-UNVERIFIED: no browser binary in this seat; lens scores are source/logic-level, comparison.html is the render surface.
Own legs (pre-wave): fit-table.md HITs 0 · config-census.md HITs 0 · table audit 56/56 rows + transition accounted.
Anchor resolutions filed (plan §A): R1 — no 80 ms dwell exists in the segment; measured floor is 120 ms; the table was NOT altered to invent one. R2 — the 160 ms at 13120–13280 ms is the measured transition beat (onset-table row 59), modelled as a typed transition phase. R3 — the recreation's rows are 8–64; the final word ends at 14040 ms and plays in full.

| lens | score | return |
|---|---|---|
| motion | 96 | codex/attempt-2/lens-motion.md |
| timing | 100 | codex/attempt-2/lens-timing.md |
| purity | 100 | codex/attempt-2/lens-purity.md |
| reusability | 78 | codex/attempt-2/lens-reusability.md |
| readability | 80 | codex/attempt-2/lens-readability.md |

Arithmetic (seat-recomputed from the filed SCORE lines): 96+100+100+78+80 = 454; average 90.8; minimum 78. Bar: average ≥85 AND minimum ≥70.
**Verdict: PASS — RECREATED candidate (tier hand-off to style-library's board is the seat's close act).**
**Delta vs attempt 1: 90.8 − 83.2 = +7.6 (signed).** Per-lens deltas: motion 76→96 (+20) · timing 82→100 (+18) · purity 100→100 (0) · reusability 76→78 (+2) · readability 82→80 (−2). Score attribution: BUNDLED (staged checkpoints isolate construction, not score movement).

Cure outcomes (from the filed returns):
- C1 seamless tiled pan + continuous clock + sun un-panned: MOVED — motion return credits tile closure and total-elapsed pan verbatim ("Each tile closes at its opening height… ridges advance from total elapsed time through every word cut, the blank beat, and the text loop"), motion +20.
- C2 darkened red #b91f16: PARTIALLY — readability return computes 3.58:1 vs sky but prices the far ridge behind the lower glyphs at 3.12:1 and prescribes a darker red (≥4.5:1 against all plate colours) for a future attempt; readability −2 despite the sky-contrast cure landing as computed.
- C3 derived onsets + dwellScale: MOVED on schedule claims (timing 100; reusability credits CONFIG-only table swaps) but reusability's residual findings cap its movement at +2.
- C4 swap semantics + validation + overflow: PARTIALLY — the final dwell plays in full (both motion and timing returns credit 13920–14040); validation is priced incomplete by reusability: rejection does not stop page startup (a rejected build still touches the DOM and a zero tile period would loop), mode contracts lack value-shape checks (derived word shapes, bands zero WPM, countdown array lengths, dwells rounding to zero).
- C5 table audit + R1 correction: MOVED — timing 100, no re-pricing of the absent 80 ms dwell; the return verifies the filed reconciliation.
- C6 typed transition: MOVED — motion and timing both price the 160 ms as an accounted beat, not a hole.
- C7/C8/C9 geometry / fit / contracts: PARTIALLY — canvas and fit are consumed and credited; reusability prices one unresolved resize case (a word impossible at the live stage width displays at the minimum size instead of a defined overflow response; countdown scaling applies after fitting).
Residual priced findings for the next attempt (filed, not hidden): renderer must return before DOM/geometry work on a rejected build · per-mode value-shape validation + constructed-timeline checks · defined overflow response at live stage widths · darker red for ridge-level contrast (readability's prescription, ≥4.5:1 vs all plate colours).

Firing history note (A-C003-1): the first firing wave's motion and reusability sessions were terminated (SIGTERM, parallel load) with no return produced, and its timing/purity/readability returns were written to /tmp and LOST when /tmp was wiped before the content-copy step — that material is recorded UNAVAILABLE (their observed tails are not filed as scores). All five lenses were re-fired once, sequentially, with -o destinations under the workspace; the re-fired returns above are the governing preserved returns, sha-verified at filing, each with a session read-scope receipt in codex/attempt-2/.
