# codex-plan-review return — Cycle-015 (Packet #9, SixMap Vimeo 1235931636)

_Fired 2026-11-16 at the §2 gate, AFTER the jev-plan-exit return was filed on disk (Amendment A8 clause 4 serialisation) and after the A8 clause 1 wiring pre-check passed. Feed: guards/codex-plan-review.md charge · RUN.md full (Observe + Plan + receipts + P-B cures) · jev-plan-exit return. Transport: `cat <feed> | codex exec -`, single stream, no second stdin. Return persisted verbatim below by the runner from the captured stream. Scope note in the return (INSTRUCTION §2–§3 text not in the feed) is recorded as a feed defect of this firing, priced in Condense._

## FINDINGS

1. **Condemned Plan line:** “Loop seam / reset … CLIP — same full-loop clip.”

   **REVISE-IN-PLAN.** A single 0–10 s playback does not show the transition from the final frame back to the first. Player looping may also introduce its own delay.

   **Cure:** Plan a joined end→start evidence clip with the join timestamp marked. Inspect the last and first decoded frames separately. Distinguish continuity in the source from playback behaviour; do not claim a seamless loop from the full-length clip alone.

2. **Condemned Plan line:** “onset scan is exhaustive at native rate, so sampling gaps are limited to sub-frame events (<0.04 s).”

   **REVISE-IN-PLAN.** Scanning every frame establishes temporal coverage, not event-detection completeness. A frame-difference detector can miss a faint edge, merge concurrent entrances, or mistake fading/scaling for topology changes. Verifying detected candidates does not find missed candidates.

   **Cure:** Add a complete sequential visual pass independent of candidate detection. Reconcile the event table against identifiable nodes and edges, recording ambiguous or occluded events. State 0.04 s as the nominal frame interval; qualify timestamp precision and detection completeness separately.

3. **Condemned Plan line:** “a captioned frame is deleted and re-extracted.”

   **EXECUTE-DEFECT.** Re-extracting the same timestamp cannot remove captions burned into the source. Deleting a required evidence frame can also break beat coverage and before/during/after evidence.

   **Cure:** Distinguish extraction-added overlays from source-burned captions. Re-extract without overlays where possible. For source-burned captions, preserve the source evidence and record the guard failure; use a verified clean source if available. Do not silently omit the timestamp or alter the specimen.

4. **Condemned Plan line:** “residual risk: HLS rendition download blocked → fallback is the nezandpez case-study page’s own embed (same player route).”

   **REVISE-IN-PLAN.** This names the same media dependency twice. It provides no independent fallback if that player’s HLS delivery fails.

   **Cure:** State that no independent download fallback is established. Plan bounded retries or another publicly available rendition from the same verified specimen; if acquisition still fails, record Execute as blocked before making frame-based claims.

## PLAN STRENGTHS THAT SURVIVED

- Motion-beat segmentation fits the reported short form. Boundaries follow observable changes, and the queue’s proposed sequence remains a hypothesis.
- Tempo measures extend beyond cuts to entrances, edge starts/completions, concurrency, pauses, and dwell. This addresses the recorded risk of missing intra-shot animation density.
- Sampling explicitly covers beat boundaries and each technique’s before/during/after states. Clip rulings are named per entry; shared footage is reasonable for this short specimen, subject to the seam correction.
- The P-B amendments give G1, G2, and G3 operative production routes: producer-written timestamped goods/bads, a consumer section distinct from adoption, and the exact charged reception print.
- The no-split decision is proportionate to the reported duration; no continuation is owed.
- The hold’s no-clip ruling is defensible if its duration is supported by a verified onset table.

**Review scope:** The supplied stream contains RUN.md and the jev-plan-exit receipt, but omits the contracted INSTRUCTION §2–§3 text. Findings above apply to the supplied Plan; full instruction compliance remains unverified.

**BODY-WRITE:** none (read-only run). The consumer must persist this return verbatim in the run directory and record each finding’s disposition in RUN.md. This chat return alone is not a filed firing receipt.
