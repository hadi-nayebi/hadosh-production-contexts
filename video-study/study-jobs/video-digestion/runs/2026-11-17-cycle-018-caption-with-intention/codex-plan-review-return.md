# codex-plan-review return — Cycle-018 (Packet #11, Caption with Intention, LIA entry 106334)

_Fired 2026-11-17 at the §2 call point, after jev-plan-exit-return.md was filed on disk (A8 clause 4). Feed: FED-FORM header · guards/codex-plan-review.md charge · RUN.md whole (Observe product + Plan + §2b gate receipts incl. the A10 clause 2 feed manifest) · INSTRUCTION §2–§3 text · jev-plan-exit-return.md. Transport: single stream `cat <feed> | codex exec -`, no second stdin (fleet Codex feeding rule). Return persisted verbatim below by the runner from the captured stream; the return's own BODY-WRITE line records it wrote nothing — persistence is the runner's act, per the guard's firing-record rule._

## FINDINGS

The Plan needs revision before Execute: its sampling rule omits the motion-beat census, and its tempo and speech claims lack sufficient verification steps.

1. **Condemned Plan line:** “frames at 1 fps (frames/) + evidence set (ev/) at every technique's before/during/after + every section boundary.”
   
   **Class: REVISE-IN-PLAN.** INSTRUCTION §2.2 also requires frames at **every motion beat**. Native-rate extraction around already selected technique moments does not establish that uncatalogued beats will be found.
   
   **Cure:** Add a full-film motion-beat identification pass within the discovered sections, recording beat timestamps and corresponding frames. Retain 1 fps as an overview, with native-rate evidence around identified events.

2. **Condemned Plan line:** “Tempo method: per-section word-onset/dwell measurement from the transcript + frame census where the film demonstrates captions.”
   
   **Class: REVISE-IN-PLAN.** This measures caption timing but does not operationalize visual energy within shots—the recurring risk named in the charge. “Tempo claims carry timestamps” establishes location, not a reproducible counting method. The Plan also leaves onset and dwell measurement rules unspecified.
   
   **Cure:** Define onset, dwell, and animation-event counting rules before measurement. For each section, record its span, caption onsets, dwell measurements, and intra-shot animation events such as anticipation, size, and weight changes. Record cuts separately where relevant. State thresholds, time resolution, and denominators; print UNMEASURED for unsupported dimensions.

3. **Condemned Plan line:** “Full ASR transcript + speech-segment census → transcript record.”
   
   **Class: REVISE-IN-PLAN.** The fed A11 clause 2 requires a segment census **plus verification**. The Plan says ASR wording is “priced,” but neither checklist specifies listening verification. ASR timestamps alone cannot establish word-level synchronization, especially over music or demonstration audio.
   
   **Cure:** Add full-audio verification of the speech-segment census and transcript, marking uncertain wording and boundaries. Verify every word onset used in a synchronization or anticipation claim against source audio and native-rate frames; record uncertainty where alignment remains unresolved.

4. **Condemned Plan line:** “Goods and bads — producer-written, both sides, every bad timestamp-bound.”
   
   **Class: REVISE-IN-PLAN.** INSTRUCTION §3.3 requires **both sides** to be timestamp-bound. The Verify item—“≥1 bad priced with a timestamp”—leaves praise unchecked.
   
   **Cure:** Require each good and bad to cite a timestamp or span and explain the observed effect. Extend verification to both sides. Keep the existing producer-written consumer section and explicit reception charge; those address G2/G3.

5. **Condemned Plan line:** “Evidence binding (§5.2): sample ≥3 catalogue entries — open cited frames, confirm each shows its claimed beat AS LABELLED.”
   
   **Class: REVISE-IN-PLAN.** The clip table correctly identifies temporal mechanics, but verification only opens stills. Stills cannot independently establish the timing properties that justified making clips.
   
   **Cure:** Add playback verification for every temporal catalogue entry’s cited clip: confirm it exists, covers the relevant before/during/after sequence, and demonstrates the claimed synchronization, anticipation, or modulation against source audio where applicable. Record findings separately from frame-label checks.

## PLAN STRENGTHS THAT SURVIVED

- **Segmentation:** RUN §2 selects sections first, beats within sections, labels the genre spine a hypothesis, and requires audio/image support for actual boundaries. It avoids imposing clock intervals or treating every speaker turn as a top-level section.
- **Binding and provenance:** Execute step 1 gates catalogue reliance on film identification; the failure evaluation provides an INCOMPLETE outcome if neither candidate binds.
- **Confusable mechanics:** The extraction schema distinguishes onset from dwell, highlighting from anticipation, speaker identity from expression, and visible weight changes from unverified font implementation.
- **Clip restraint:** Temporal entry classes receive clips; persistent color, texture, and structure receive explicit stills-sufficiency rationales. Final entry-specific rulings remain an Execute obligation.
- **G2/G3:** The consumer section is explicitly producer-written, and reception has a charged printed slot.
- **Specimen-specific risks:** Third-party provenance, small caption text, rapid caption turnover, and source-caption preservation receive concrete treatment.
- **Split:** The declared 113.73-second duration supports a plausible whole-film plan, with no named section deferred. Actual workload sufficiency remains NOT ASSESSED.

**Limits:** Media identity, duration, actual section boundaries, technique presence, prior-art claims, file presence, and completed verification are NOT ASSESSED. Evidence is the fed text only. OBJECTIVE’s five tests were not supplied verbatim, so their exact reproduction is NOT ASSESSED. The feed manifest’s claim that P-A2 is operatively wired is not established by the supplied Plan: external prior art should remain explicitly NOT ASSESSED unless supported.

Body-write: none (read-only run)
