# T21 Attempt 2 — Cure Plan (practice Cycle 006 Wave 5)

Prior: motion 81 · timing 83 · purity 95 · reuse 64 · readability 64 → avg 77.4, min 64, FAIL.
Bar: avg ≥85 AND no lens <70. Blocking lenses: reusability 64, readability 64.
Delta target: reuse + readability ≥70 primary; hold motion/timing/purity; aim avg ≥85.

## Convergent cures first

### C1 (timing+reuse) — override coherence, general not bounded
- Duration scaling scales ALL subordinate durations (cardsFadeMs, phoneRiseMs, typeDelayMs, replyPopMs) by the same ratio as checkpoints.
- Subordinate durations are additionally DERIVED/CLAMPED from neighbouring checkpoint spans at validation time: cardsFade ≤ 0.8×(phoneAt−cardsAt); phoneRise ≤ 0.8×(typedAt−phoneAt); typing window = typedAt − (phoneAt+typeDelay) must be ≥ 25% of (typedAt−phoneAt); replyPop ≤ 0.8×(durationMs−replyAt). Derived effective values are exposed as CONFIG.effective (inspectable, asserted by own checks).
- Checkpoint validation at override time: strict ordering printStart < receiptFull < cardsAt < phoneAt < typedAt < replyAt < bridgeAt < durationMs, each span ≥ a named minimum fraction. An override that breaks ordering or leaves no completion/hold space is REJECTED explicitly: the override is not applied, the rejection is recorded in CONFIG.rejectedOverrides (key, value, reason), and a console warning fires. No silent acceptance.
- The typing denominator collapse is removed: no Math.max(1, …) on the typing window; if the validated window were ≤0 the state carries a validation error and typedChars stays 0 (unreachable after validation — asserted).
- Adversarial swaps asserted by own checks: durationMs=1000 (typing starts after phoneAt, completes by typedAt, reply completes before loop end) and phoneAt=11000 (rejected explicitly; timeline unchanged; typing never starts after typedAt/replyAt).
- Build-record correction: coherence is claimed only for demonstrated swaps (default range + the two adversarial cases above), never generally.

### C2 (purity+reuse) — full color census + prompt prefix
- The three rgba() shadows become CONFIG keys (shadowReceipt, shadowCard, shadowPhone) applied from JS; CSS carries NO color syntax at all (no hex, no rgba, no named colors).
- The prompt prefix becomes CONFIG.promptPrefix, consumed by render.
- Own-check purity grep covers hex + rgba/hsla + named colors + external loads; census asserts zero color syntax outside the CONFIG block.

## Single-lens cures

### Readability (64)
- Substantive copy floors raised toward 14–16px at 360px: LED 14, receipt header 15, receipt rows 14, post 16, system title 15, system reset 14, prompt 15, reply 14, input 14, tabs 13 (chrome, non-substantive).
- Mobile (≤520px) layout gives beats width: left column 94% wide for the print beat; cards column becomes a full-width row under it; phone min(94%, 320px). Separate full-width beats in space, sequenced by the existing phase timing.
- Fit recomputed from the NESTED receipt width: at 360px, stage pad 3% → leftCol 94% ≈ 325px… receiptWrap 96% of it, receipt padding 9px×2 → text width modelled in the own-check suite from source constants; wrapping allowed on all widths for receipt rows (no nowrap clipping).
- Complete receipt height verified after enlargement in the source-bound model: paper height = padTop + headerH + Σ line heights (wrapping-aware estimate) vs receipt window at receiptMaxHPct of the column height; capacity policy (below) bounds it.

### Motion (81)
- Paper feed: the receipt element itself translates through the slot aperture — render sets receipt transform translateY(−(1−printProgress)×paperHeightPx) inside the clipping wrap anchored directly under the slot, so paper + print move together through the aperture instead of the window unveiling static paper.
- Row exposure derived from feed geometry: computeState models paper geometry from CONFIG geometry keys (receiptPadTopPx, receiptHeaderHPx, receiptLineHPx); a row is exposed when its bottom offset ≤ fed length (printProgress × total paper height). No row-count proportions.
- Reply-to-restart bridge beat (RUN.md C4): new checkpoint bridgeAt (11200) + bridgeMs; during the bridge the reply bubble pulses the accent outline once and a bridge badge (CONFIG.bridgeText) fades in on the phone while the phone eases down — the rival reply visibly hands back to the printer engine before the loop restarts.

### Reusability (64) — shaping + capacity
- Shaping constants move into CONFIG: cardTravelPx, phoneTravelPct, replyScaleFrom, plus layout keys (receiptMaxHPct already present; new receiptGrowCapHPct).
- Capacity policies, explicit and in CONFIG: receiptMaxLines (8) — lines beyond it are rendered at a reduced row size tier (CONFIG.receiptOverflowScale) and the window grows up to receiptGrowCapHPct; beyond that the state flags receiptOverflow=true (explicit, asserted, never silent). Unbroken rows: word-break:break-all fallback class when a single token exceeds the modelled text width. Reply: replySoftChars tiering — replies longer than CONFIG.replySoftChars render at CONFIG.replyLongScale font tier and the chat area is flex-column with the reply allowed to grow (phone height is % of stage; overflow flags replyOverflow=true past CONFIG.replyMaxChars instead of silently clipping).
- Adversarial swaps asserted: many-line receipt (10 lines), unbroken 40-char row, long reply (180 chars), minimum durationMs=1000, late phoneAt=11000.
- accent documented honestly: prompt outline + active tab background (tab application implemented, curing the documented-but-absent claim).

## Deferred (with reasons)
- Pixel/rendered 360px hold checks: agent-session Chrome route blocked fleet-wide (A-C002-2) — filed as PIXEL-UNVERIFIED; geometry rests on the source-bound displayed-state model (A-C003-3/A-C004-2). Not claimed as modelled compliance for the rendered cure (RUN.md C2/G4 analogue).
- No change to segment.mp4, comparison ORIGINAL side, or checkpoint defaults except adding bridgeAt.

## Attribution / instrumentation
Per-cure own-checks run BEFORE the wave, each named for its cure (C1 coherence suite, C2 census, readability geometry model, motion feed-geometry assertions, capacity suite), so a lens movement can be attributed cure-by-cure in scores.md.

## WHY scaffold (if non-beating)
Cure-by-cure outcome slots in scores.md Attempt 2 + stuck-lens hypothesis + next-attempt difference, per INSTRUCTION §5.4.
