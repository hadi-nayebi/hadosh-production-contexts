# T11 attempt 4 — STEP 0 timeline basis (filed BEFORE any recreation.html write)

Method: segment.mp4 (10.000 s, sha256 7f145c8e9090d7d152386cb52b58fea052d27c615f07d4f78a5d3ef7ef2bbfea) re-extracted firsthand this cycle at 4 fps (40 frames, /tmp/t11frames) + consecutive-frame mean-difference scan + visual reads at 2.5 s / 6.5 s / 7.5 s.

Re-observation findings:
- Stamps recur per merged card in the specimen (green LGTM stamp seen held over a merged card at the 6.5 s frame and over #1115 at the 7.5 s frame); the merged side-panel state accompanies the stamp.
- At 7.5 s the specimen shows #1115 with its stamp HELD (full size, settled) — consistent with the filed state-at-sample anchor.
- At 2.5 s the specimen shows #1111 (first card) still on screen — a uniform 2000 ms cadence with loop origin = card-0 start would already show card 2 at 2500 ms; the plan §0 conflict is confirmed firsthand. Large frame-difference spikes at ≈1.25–2.0 s and ≈9.5–9.75 s show the specimen's own event spacing is non-uniform.
- The specimen's own card numbering/dwell details differ from the recreation's CONFIG data set; the recreation's data is its own parameterized set. The BINDING anchors are the plan's filed state-at-sample observations (plan §0 resolution): stamped #1111 at ≈2.5 s · unstamped #1115-equivalent at ≈6.5 s · stamped-and-HELD #1115-equivalent at ≈7.5 s. Those three are jointly satisfiable by the timeline below, so NO A-C008-1 mid-cycle premise amendment is owed; construction (i) from plan C1a is adopted (first-card dwell extended, later boundaries re-derived).

## Resolved timeline (default CONFIG, loop 10000 ms, 5 cards)

Card durations: [3000, 1000, 2000, 2000, 2000] ms → starts [0, 3000, 4000, 6000, 8000].
- Card 0 (#1111, merged): counter span 1400 ms (0–1400). Stamp: offset = min(0.63×3000, 3000−150−100−130) = 1890 → slam 1890–2020 · HELD 2020–2750 · hide 2750–2850 (hide completes exactly as the whip window opens at 2850). Stamped window 1890–2850 CONTAINS 2500 ms, held at scale 1 at 2500 ms ✓.
- Card 1 (#1112): 3000–4000, on screen at the ≈3.5 s sample ✓, no stamp.
- Card 2 (#1113): 4000–6000, on screen at the ≈4.5 s sample ✓, no stamp.
- Card 3 (#1115-equivalent, merged): 6000–8000. At 6500 ms NO stamp (slam starts 7260) ✓. Stamp: offset = min(0.63×2000, 2000−150−100−130) = 1260 → slam 7260–7390 (completes ≤7500) · HELD 7390–7750 · hide 7750–7850 (completes before the whip window opens at 7850). At 7500 ms the stamp is HELD at scale 1 ✓.
- Card 4 (#1116): 8000–10000, no stamp.
- Whips: 300 ms envelope centred on every card start (3000/4000/6000/8000) AND across the loop boundary (window 9850–10000 ∪ 0–150, centred on 10000/0), same envelope family — the transition rhythm closes (C1c).
- Stamp derivation (all cards): offset = min(stampOffsetFrac × dwell, dwell − whipMs/2 − stampHideMs − slamMs); hideEnd = cardStart + dwell − whipMs/2; holdEnd = hideEnd − stampHideMs; hold = holdEnd − slamEnd (derived remainder; under the documented 900 ms swap dwell the hold compresses to 0 and the stamp still completes before its whip).

Feasibility: all three filed state-at-sample observations hold simultaneously under this timeline; loop totals 10000 ms; every stamp hide completes at or before its whip window opens.
