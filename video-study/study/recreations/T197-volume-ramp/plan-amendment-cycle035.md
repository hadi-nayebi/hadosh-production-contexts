# plan-amendment — T197 volume ramp · Cycle 035 Wave 32 (completion wave)

Filed BEFORE any build script (A9.2), per the task charge: the jev-plan-exit REVISE + jev-observe-exit charges for T197, as carried verbatim in Cycle 035 RUN.md §2b. The Cycle-034 item record (`runs/2026-11-18-cycle-034-wave-31/item-T197-observe-plan.md`) is NOT retro-edited (A8); the build executes the filed Plan AS AMENDED by this file. Where this amendment and the filed Plan conflict, this amendment governs and the conflict is printed here.

## A. Evaluation instants moved to the ACTUAL source twins (gate charge 1)

Build t=0 ≡ source 48.0 s. Census twins (build ms): sizes peak state 51.0 s → **3000** · weights bold 51.5 s → **3500** · Line B base / louder still base 55.0 s → **7000** · louder peak 55.5 s → **7500** · shared shrink ALREADY SMALL 56.0 s → **8000** · louder decayed + shrink landed 56.5 s → **8500 (CP4)** · shrink persists 57.5 s → **9500 (CP5)**.

The filed CP instants evaluated the CONFIG expressions instead of the census states (CP1 2480, CP2 3260, CP4 8560, CP5 9800) and three filed envelopes contradict the census at the twins. Cures (envelope values are CONFIG data; the evaluator semantics in §F are unchanged in form):

| Word / envelope | Filed | Amended | Reason (census) |
|---|---|---|---|
| `sizes,` rampUpMs | 400 (peak 2480 ≡ 50.48 s) | **920** (peak **3000** ≡ 51.0 s) | At the filed values the envelope is 520 ms into its 900 ms decay at the census peak instant and reads ≈1.12× where the census reads ~1.35×. Amended: env(3000)=1 exactly. Decay 900 ms retained → base at 3900 (51.9 s); census bracket: back at base by 52.0–52.5 ✓. |
| `weights` envelope | onset 2760, rampUp 500, rampDown 900 (peak 3260) | **unchanged values; assertion instant moved to the twin 3500** | At 3500 the envelope is 240 ms into decay: env = 1 − easeInOut(240/900 = 0.2667) = 1 − 0.1422 = 0.8578 → wght ≈ 743, size exactly 1.0 (weight-only) — matches census "bold at 51.5". |
| `louder` envelope | env onset = speech onset 6640, rampUp 860 (peak 7500) | **visual onset separated: `envOnsetMs` 7300, rampUpMs 200 (peak 7500)** | Filed form is 360 ms into its rise at build 7000 (source 55.0) where the census says BASE. Codex-observe G2 + packet: first visible change ≈55.3 s, peak 55.5 s. Amended: env(7000)=0 (base, wght 400) ✓ · env(7500)=1 (size 2.0, wght 820) ✓ · rampDown 1000 → base at 8500 (56.5) ✓. Speech/color onset stays 6640 (color flips at speech onset; visual envelope timing is separate — plan-review finding 3's own rule). Schema consequence: every word carries `envOnsetMs` (defaults to `onsetMs`); only `louder` and the shared shrink set it differently in the specimen CONFIG. |
| shared shrink (`or`+`softer`) | onset 7760, rampMs 700 (lands 8460) | **`envOnsetMs` 7560, rampMs 340 (lands 7900 ≡ 55.9 s)** | Filed form is 240 ms into 700 ms at build 8000 (source 56.0) where the census says ALREADY SMALL. Amended: env(8000)=1 → size 0.45, wght 300 ✓. Census bracket honoured: base at 55.5 (env(7500)=0, shrink not started) · small by 56.0–56.5 ✓. |

**CP table as amended (A11 — checkpoint · assertion · CONFIG expression → instant · expected result):**

| CP | Twin (build ms) | Assertion | CONFIG expression | Expected |
|---|---|---|---|---|
| CP1 | **3000** | sizes size ∈ [1.28, 1.42] AND wght ≥ 700 | envOnset+rampUp = 2080+920 = 3000 | size 1.35, wght 760 → PASS |
| CP2 | **3500** | weights size ∈ [0.97, 1.03] AND wght ≥ 740 | twin-anchored (source state); envelope value derived from onset 2760 + rampUp 500 + decay position | size 1.00, wght ≈743 → PASS |
| CP2b | **7000** | louder size ∈ [0.97, 1.03] AND wght ∈ [380, 420] (BASE at 55.0) | envOnset 7300 not yet reached | size 1.00, wght 400 → PASS |
| CP3 | **7500** | louder size ∈ [1.90, 2.10] AND wght ≥ 780 | envOnset+rampUp = 7300+200 = 7500 | size 2.00, wght 820 → PASS |
| CP3b | **8000** | or/softer size ∈ [0.40, 0.50] AND wght ≤ 340 (ALREADY SMALL at 56.0) | shrink envOnset+ramp = 7560+340 = 7900 ≤ 8000 | size 0.45, wght 300 → PASS |
| CP4 | **8500** | louder size ≤ 1.08 AND or/softer size ∈ [0.40, 0.50] AND wght ≤ 340 | louder decay end 7500+1000 = 8500; shrink persist | louder 1.00 · shrink 0.45/300 → PASS |
| CP5 | **9500** | softer size ∈ [0.40, 0.50] at end hold | persist envelope, t inside core | size 0.45, wght 300 → PASS |

A timing swap must move CP3's instant via the same expression (envOnset+rampUp) — see §D.

## B. Comparison policy (gate charge 2 — the 10,000 + 1,800 vs 11,000 reconciliation)

Filed numbers: recreation core 10,000 ms (source 48.0–58.0) + endHoldMs 1,800 = an 11,800 ms standalone loop; the comparison clip (segment 47.5–58.5 s) is 11,000 ms. 11,800 ≠ 11,000, so the two cannot run in sync through the clip without a policy. **Policy (binding):**

- The comparison clock is the segment's `currentTime`. Build time = clamp(videoMs + segmentHandleOffsetMs, 0, coreMs) with segmentHandleOffsetMs = −500: video 0.0–0.5 s (source 47.5–48.0, the header handle) maps to build 0 (both lines pre-visible at baseline — the source's own pre-state); video 0.5–10.5 s maps 1:1 onto build 0–10,000.
- Video 10.5–11.0 s (source 58.0–58.5): the recreation HOLDS its end state (build time clamped at 10,000; the persisted shrink state) — matching the source, whose 58.0 census frame is "the tail of the hold". No loop restart occurs inside the comparison; restart happens only via the Restart control.
- Standalone, recreation.html loops with period coreMs + endHoldMs = 11,800 ms (the end hold is a standalone-loop property; in comparison the hold is supplied by the clamp, and endHoldMs still governs how long the end state persists after core end before a standalone loop resets — printed here so the two numbers never read as a contradiction again).

## C. The `louder`-onset vs Line-A-release conflict — ONE outcome chosen (gate charge 3a)

Filed Plan prescribed both rejection and clamp-and-print for a CONFIG whose next line's first envelope onset precedes the prior line's release (Line A release = max(speechEnd 4500, lastTransientEnd 4160) + lineExitMs 350 + lineGapMs 320 = **5170 ms**), which yield different outcomes. **Chosen outcome: CLAMP-AND-PRINT.** The evaluator clamps the offending envelope's effective onset to the release instant, sets a machine-readable `ownershipClamp` record ({word, requestedOnset, clampedOnset, releaseMs}) on the build's state, and prints the clamp in the build-record. Rejection (throw/halt) is NOT used: a clamped build still demonstrates the technique, and the print makes the violation visible rather than silent. This choice is CONFIG-visible: `ownershipPolicy: 'clamp-and-print'` is a CONFIG key; the alternative string is not implemented.

## D. Swap separation + complete replacement envelope table (gate charge 3b)

The filed swap conflated two different tests. They are now separate:

**D1 — Intentional-violation test (NOT a reuse swap):** set `louder.envOnsetMs` = 5000 (< release 5170) on a scratch copy. Expected: `ownershipClamp` = {word:'louder', requestedOnset:5000, clampedOnset:5170, releaseMs:5170}; CP3's instant moves to 5170+200 = 5370 via the expression; the build still renders. This test proves the clamp; it is never presented as a content swap.

**D2 — Valid reuse swap (content + timing + palette), complete replacement envelope table.** Replacement phrase (single line, own envelope set): "watch the quiet part grow still"

| word | onsetMs | envOnsetMs | sizePeak | weightPeak | rampUpMs | rampDownMs | peakHoldMs | persist |
|---|---|---|---|---|---|---|---|---|
| watch | 0 | 0 | 1.0 | 400 | 0 | 0 | 0 | false |
| the | 300 | 300 | 1.0 | 400 | 0 | 0 | 0 | false |
| quiet | 600 | 600 | 1.0 | 400 | 0 | 0 | 0 | false |
| part | 1000 | 1000 | 1.0 | 400 | 0 | 0 | 0 | false |
| grow | 1400 | 1400 | 1.7 | 780 | 500 | 800 | 0 | false |
| still | 2400 | 2400 | 0.5 | 300 | 400 | 0 | 0 | true |

Expected outputs (evaluator, easeInOut): grow at its peak instant 1400+500 = **1900 → size 1.70, wght 780** · grow mid-decay at 2300 (p = 400/800 = 0.5 → env 0.5) → **size 1.35, wght 590** · still landed at 2400+400 = **2800 → size 0.50, wght 300**, persisting at 5000 → **0.50 / 300**. Palette leg (same scratch copy): spokenColor #ffe600 → **#ff9f1c**, guideColor #7fd4e6 → **#3a86ff**; expected: a spoken word's computed color = #ff9f1c, guide-rule background = #3a86ff (asserted at the CONFIG-consumption sites).

**D3 — Timing swap (on the specimen CONFIG, scratch copy):** louder envOnsetMs 7300 → **5300** (≥ release 5170, so NO clamp fires — this is what makes it a valid timing swap rather than the D1 violation), rampUpMs 200 → **300**. Expected: CP3 instant moves 7500 → **5600** via envOnset+rampUp; at 5600 → size 2.00, wght 820; at the old instant 7500 louder is fully decayed (decay 5600+1000 = 6600) → size 1.00.

## E. Bound defaults (gate charge 4)

- `guideInsetPct: 8` — horizontal inset of each guide rule, as % of stage width (rules are horizontal, above and below the text block; geometry is CONFIG data per A9.6). Companion key bound in the same act: `guideThicknessPx: 2`, `guideGapPctOfStage: 34` (rule offset from stage centre, % of stage height).
- `fontStack: "'Roboto Flex','Inter var',system-ui,-apple-system,'Segoe UI',sans-serif"` — Roboto Flex is named first because the packet demonstrates it as the system's own design font (digest §3 T05/T08; register limit: mechanism DEMONSTRATED as stated design). **No webfont is fetched** (purity: zero external assets); the stack resolves to whatever variable font the playback stack holds locally, else its static faces — see §G.
- Canonical reference to the shared shrink envelope (gate charge 5): CONFIG carries `sharedEnvelopes: { shrink: { envOnsetMs: 7560, rampMs: 340, sizePeak: 0.45, weightPeak: 300, persist: true } }` as the SINGLE definition. The words `or` and `softer` carry `envelopeRef: 'shrink'` and NO inline envelope peaks; the evaluator resolves the reference. Any other form (duplicated inline copies) is a census HIT by construction. In the per-word schema, a referenced word's own ramp fields are absent, not duplicated.

**Release derivation source (clarified at Execute, own-check catch):** the release formula's speech-end term is a line-level CONFIG field `speechEndMs` (Line A 4500 ≡ source 52.50 speech end; Line B 8800 ≡ 56.80), NOT the last word's onset — the filed derivation "max(speechEnd 4500, …)" prices the ASR segment end. First-draft harness computed releases [4830, …] from last-onset and the D1 clamp test exposed it (no clamp fired at onset 5000); cured by binding `speechEndMs` as CONFIG data, releases recompute to [5170, 10670]. Recorded in build-record as the first-draft defect + cure (A9.4 raw outputs filed for both drafts).

## F. Evaluator semantics (as amended — one schema, A9.6)

Per word: `{text, onsetMs, envOnsetMs, sizePeak, weightPeak, rampUpMs, rampDownMs, peakHoldMs, persist}` or `{text, onsetMs, envelopeRef}`. env(t): 0 before envOnset · easeInOut ramp over rampUpMs · 1 through peakHoldMs · if persist, 1 until loop end · else 1 − easeInOut over rampDownMs · 0 after. For a referenced envelope, rampUpMs := the shared `rampMs` and there is no decay (persist). sizeRatio = 1 + (sizePeak − 1)·env, floored at minSizePctOfStage / baseSizePctOfStage = 2.7/6.1 ≈ 0.4426 (softer's 0.45 clears the floor: 6.1 × 0.45 = 2.745 ≥ 2.7 ✓); a computed size below minSizePctOfStage raises the visible FIT-FAIL state (plan-review finding 2). wght = baseWeight + (weightPeak − baseWeight)·env, applied as `font-variation-settings 'wght'`. Spoken color flips at `onsetMs` (speech), independent of `envOnsetMs` (visual). Line A fades out over lineExitMs starting at the derived release (5170); envelopes only are gated by ownership (Line B speech onsets are segment-anchored and unmoved — filed Plan disposition stands).

## G. 57.167 s boundary + weight-evidence charges (jev-observe-exit, applied)

- T196's record (Cycle-034 item-T196 §1) shows the next section header ("Character Identification") first appearing at source **57.167 s** = build **9167 ms**, inside T197's claimed hold through 57.5–58.0. Execute must play/evaluate across that boundary and record the last visible ramp state in build-record: the expected state at 9167, 9500 and 10000 is IDENTICAL (shrink persisted: or/softer 0.45× / wght 300, all other words base, Line A exited) — the header is the next section's furniture (T196/T09's surface), not a T197 state change; the build neither builds it nor lets it disturb the hold. Segment-frame evidence at the boundary is filed in build-record.
- Continuous weight is claimed ONLY with rendered intermediate-weight evidence from the actual playback stack (plan-review finding 1). If the seat's stack offers no browser render, the build-record files the evaluator's mid-ramp `font-variation-settings` values as logic-level evidence and the limitation prints on the build's face (build-record + scores.md): continuous weight UNVERIFIED on this stack; static/stepped fallback = declared limitation, never a silent claim.

Filed: Cycle 035 Wave 32, before Execute (A9.2 satisfied for this item by this filing).
