# T21 — Printed Receipt Gag + App Switch · SCORES

Technique: T21 (packet P1, "Look What I Can Do" @ 2:50–3:02) · Consumer: endings (physical-prop gag + app-switch loop restart)
Artifacts: `recreation.html` · `comparison.html` (the face) · `segment.mp4` (ORIGINAL cut 2:49.5–3:02.5, evidence only, local)

## Attempt 1 — 2026-11-14 (recreation Cycle 006, Wave 4)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 81 | codex/lens-motion.md |
| Timing / tempo match | 83 | codex/lens-timing.md |
| Construction purity | 95 | codex/lens-purity.md |
| Reusability / parameterization | 64 | codex/lens-reusability.md |
| Readability | 64 | codex/lens-readability.md |

**Arithmetic:** (81 + 83 + 95 + 64 + 64) / 5 = 387 / 5 = **77.4 average** · minimum lens **64**.
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: FAIL** — average misses by 7.6; two lenses sit under the 70 floor (reusability 64, readability 64). Tier: **IN PROGRESS** (attempt 1 filed here; attempt 2 routes to the practice job, lowest-scored first).

### Priced gap (what the next attempt — practice job — must cure)

**CONVERGENT 1 (Amendment A1 — timing 83 + reusability 64 name it; primary cure): override coherence is bounded, not general.** Checkpoints scale under a duration-only override, but the subordinate durations (`cardsFadeMs`, `phoneRiseMs`, `typeDelayMs`, `replyPopMs`) do not — at the accepted minimum `durationMs=1000` typing starts (~983 ms) after the reply (~858 ms) and neither rise nor pop can finish before the loop. A late `phoneAt=11000` is likewise accepted: typing starts at 11400 ms, past `typedAt` and `replyAt`, so the reply precedes the question. Cure: derive/scale subordinate durations from neighboring checkpoint spans, validate checkpoint ordering + completion/hold space at override time, and reject invalid combinations explicitly instead of letting `Math.max(1, …)` collapse the typing window. Add swap tests at minimum duration and late phoneAt. (This also corrects build-record.md §2/§5: the coherence claim stands only for the demonstrated default-range swaps.)

**CONVERGENT 2 (purity 95 + reusability 64 name it): the color census covered only hex.** Three CSS shadows hardcode `rgba(0,0,0,.35/.3/.45)` outside CONFIG, and the prompt prefix `› ` lives in render logic. Not refusal-class (purity still 95 — no specimen media, no external loads, all substantive text/timing/hex from CONFIG), but the census must cover every CSS color syntax, and shadows + prefix become CONFIG keys.

1. **Phone-size legibility (readability 64):** at 360 px every subject text resolves to its clamp floor — receipt rows 8 px (critically small), header 10 px, LED 9 px, system reset 9 px, reply 10 px, prompt 11 px — while contrast is strong (paper ≈14.5:1, LED ≈11.3:1, reply ≈15:1). The fit arithmetic also used the column width: the receipt is actually 149.2 px wide (~131 px of text width). Cure: enlarge mobile typography toward 14–16 px for substantive copy (separate full-width beats where needed), recompute fit from the nested receipt width, verify complete receipt height after enlarging, and record rendered 360 px hold checks when a render surface exists.
2. **Unveiling vs physical feed (motion 81):** the receipt window grows and rows un-hide on one shared printProgress, but the paper itself does not translate through the slot — the effect reads as an unveiling, and row thresholds are proportional to row count while real row positions depend on padding/header/wrap. Cure: anchor emergence to the slot — translate the paper through the aperture and derive row exposure from feed geometry.
3. **Shaping constants + capacity (reusability 64):** card travel 18 px, phone travel 60%, reply scale 0.7→1 and the layout proportions live in render/CSS rather than CONFIG (all declared keys ARE consumed — no dead keys; `accent` is documented as coloring tabs but only outlines the prompt bubble). Extreme content fails silently: many receipt lines overflow the fixed %-height window, long unbroken rows clip, a long reply overflows the hidden chat area. Cure: expose motion endpoints + layout constraints as config keys, define receipt/chat capacity policies (measured growth or explicit supported limits), and test many-lines / long-reply swaps.
4. **Loop handoff (motion 81):** modulo looping is exact, but the reply cuts straight to the empty printer state — no visible causal handoff makes the rival app restart the engine. Cure: a brief reply-to-restart bridge beat in the checkpoint table.

Own checks before the wave (build-record.md §5): swap test PASS 39/39 at logic level (new receipt lines + new prompt/reply + accent `#ff2e88` + phoneAt 6000 + duration-scaling, all asserted per-element) · purity grep zero hits · hex census outside CONFIG zero (rgba gap named above by the wave) · syntax compile PASS · segment ffprobe-verified (960×540, 13.000 s). Pixel render not exercisable from the build seat (no Chrome binary) — the comparison page is the render surface; the readability return's 360 px findings are computed from source, not from a rendered check.

## Attempt 2 — 2026-11-14 (practice Cycle 006, Wave 5)

| Lens | Score | Return |
|---|---|---|
| Motion fidelity | 79 | codex/attempt-2/lens-motion.md |
| Timing / tempo match | 98 | codex/attempt-2/lens-timing.md |
| Construction purity | 100 | codex/attempt-2/lens-purity.md |
| Reusability / parameterization | 74 | codex/attempt-2/lens-reusability.md |
| Readability | 88 | codex/attempt-2/lens-readability.md |

**Arithmetic:** (79 + 98 + 100 + 74 + 88) / 5 = 439 / 5 = **87.8 average** · minimum lens **74**.
**Delta vs Attempt 1:** 87.8 − 77.4 = **+10.4** (signed, one decimal).
**Bar:** average ≥ 85 AND no lens under 70.
**VERDICT: PASS** — average clears by 2.8 and every lens clears the 70 floor. Tier recommendation: **RECREATED** (the tier move itself is style-library's act, from this pointer + `build-record-attempt2.md`).
**Source binding:** all five final returns judge the identical final source, recreation.html sha256 `ef5aa80b3af0b0cf8e689a8f6ca0a31d18ac20d78481f11513784e2b3ac63e7b`. Payloads anchor-scanned before firing (allowlist only; scan record at `codex/attempt-2/anchor-scan.md`); payloads + returns preserved create-once under `codex/attempt-2/`.
**Firing history (A-C002-4 / A-C003-1):** a first complete firing against the interim source `874e3283…` (motion 68 · timing 96 · purity 98 · reusability 79 · readability 78) caught a real defect — the receipt window height resolved as a percentage of a modelled column whose actual height differs (final-row clipping risk) and row visibility ran opposite to the translating sheet. Those returns are preserved verbatim as `codex/attempt-2/lens-<lens>-run1.md` (payloads `instr-<lens>-run1.txt`) and are NOT the filed scores. The defect was cured in-cycle (window height = fed length in pixels; exposure = slot-crossing condition on the shared geometry model; bridge dimming literal removed; receipt padding applied from the CONFIG geometry keys; standalone-`computeState` fallback corrected; comment hex examples removed), own checks re-run 50/50 PASS, and all five lenses re-fired against the final source (`instr-<lens>-run2.txt` payloads). The filed scores above come only from that final set. Attribution note (per the plan review): the wave measures the combined attempt; per-cure lens contributions below are the seat's reading of the returns, not separately staged measurements.

### Cure-by-cure outcome

- **CONVERGENT 1 (override coherence): CURED.** Duration scaling now scales checkpoints AND subordinate durations together; subordinate durations derive from neighbouring checkpoint spans at validation (`CONFIG.effective`); ordering, minimum spans, typing-window space, reply-before-bridge and rise-before-typed completion are validated in a fixed order; an invalid override (e.g. `phoneAt=11000`) is rejected atomically and recorded in `CONFIG.rejectedOverrides`; the collapsed typing denominator is gone. Timing 83 → **98** (return: "Overrides remain coherent… Invalid checkpoint changes are rejected and recorded"); reusability return confirms the 1000 ms case scales coherently and shorter durations are explicitly rejected. Own checks assert both adversarial cases as effect mappings.
- **CONVERGENT 2 (color census + prefix): CURED.** Shadows are CONFIG keys applied from JS, the prompt prefix is `CONFIG.promptPrefix`, and the census covers hex + rgba + hsl + named colors. Purity 95 → **100** (return: "zero color literals outside CONFIG" confirmed on direct inspection; the interim firing's comment-example nit was cured by removing hex examples from the override documentation).
- **Readability (phone legibility + nested-width fit): CURED.** Substantive floors now 14–16px (LED 14, header 15, rows 14, post 16, system title 15, reset 14, prompt 15, reply 14, input 14); mobile beats take full width (94% print column, 94% cards row, phone `min(94%, 320px)`); fit modelled from the nested receipt width (~307px text width at 360px, per the return). Readability 64 → **88**. Remaining uncertainty is rendered-only (PIXEL-UNVERIFIED stands): short-viewport receipt-to-card clearance and exact glyph rendering await a working render route.
- **Motion (slot-anchored feed): PARTIALLY CURED — score fell on the interim construction, recovered on the cure.** Attempt-2 construction replaced the unveiling with a translating sheet whose window, translation and exposure share one `fedPx`; the first firing priced the percentage-height mismatch + reversed visibility at 68, the in-cycle cure re-fired at **79** (prior 81; −2). The final return credits shared-`fedPx` emergence but prices two residuals: the sheet feeds bottom-first (last row crosses the slot before the header — the crossing geometry's consequence, specimen feed direction unverified from frames) and the wrap begins below the torso rather than exactly at the slot aperture.
- **Loop handoff (bridge beat): BUILT, lens-disputed.** The checkpoint table carries `bridgeAt` 11200 + `bridgeMs`, with the phone easing down and a bridge badge fading in, per the priced cure in Attempt 1's filing and RUN.md correction C4. The motion return prices the dip/badge as unsupported by the specimen and explanatory rather than demonstrative (a named tension between the seat's priced cure and the lens; carried to the next attempt / Condense, not silently dropped).
- **Shaping + capacity: PARTIALLY CURED.** Card/phone travel and reply-scale endpoints are CONFIG keys; capacity policies exist as explicit CONFIG limits with state flags (receipt tiers + grown cap, long-reply tier, overflow flags for 20-line receipts and 300-char replies — all asserted). Reusability 64 → **74**. The return's residuals: geometry keys govern the model but CSS still fixes rendered header/line heights independently; the receipt cap is diagnostic (render does not apply it); typography/layout literals remain in CSS; direct CONFIG edits lack validation enforcement.

**WHY:** not owed — the attempt beats the prior average (+10.4) and passes the bar.

**Next-attempt pointers (not owed this cycle; filed for the pool record):** verify feed direction + slot anchoring against specimen frames and anchor the wrap at the slot; replace or specimen-ground the bridge's dip/badge; make receipt geometry keys govern rendered layout (single source for model + CSS geometry) and apply the capacity cap in render; rendered hold checks at a recorded 360px viewport height when a render route opens (PIXEL-UNVERIFIED until then).
