# codex-plan-review — Return — video-digestion Cycle-023

- Call: codex-plan-review (guards/codex-plan-review.md — fed form, ONE stream: cat prompt-file | codex exec -, no second stdin stream)
- Cycle: video-digestion Cycle-023 — Motion Boutique "Collision-Driven Typography in After Effects" (Packet #15)
- Firing: local Codex binary (~/workspace/codex-local/node_modules/.bin/codex, OpenAI Codex v0.169.0), session 01a1f0ca-ab31-75d3-a862-c150d58d2af0, tokens used 33,758. Prompt filed at /tmp/codex-plan-review-023-prompt.txt (82,335 B).
- Feed manifest (all PRESENT, assembled from the guard's contract text): (1) guard charge · (2) RUN.md fed whole (Observe + Plan incl. both checklists, clip table, failure-point evaluation, P-A1–P-A6) · (3) INSTRUCTION.md §2–§3 · (4) jev-plan-exit-return.md (filed BEFORE this firing — serialisation satisfied) · (5) jev-observe-exit-return.md · (6) codex-observe-return.md.
- Raw output: codex-plan-review-return-raw.txt (111,020 B, includes prompt echo; Codex's review printed twice identically — verified by diff). Below is Codex's review verbatim.

---

## FINDINGS

**Cycle-023 requires revision in Plan before Execute.** The procedural-phase model survives. The sampling and tempo rules need executable definitions, and the packet checklist still leaves G1 and G2 open. The fed P-B block is empty, so the filed `jev-plan-exit` REVISE receipt supplies proposed cures without showing their application.

1. **REVISE-IN-PLAN — Ground the tutorial boundaries in the tutorial.**  
   RUN.md §2, Segmentation model

   > - [TUT] the tutorial/breakdown itself (233.154 s video + the article's 5-step text): segmentation is PROCEDURAL-PHASE — the atom is the STEP (pre-state → action → post-state): S1 concept · S2 first simulation test · S3 the expression · S4 scaling to ~50 layers · S5 final render. Evidence keys to step boundaries.

   **Cure.** Make S1–S5 candidate labels and make P-A4’s observed pre-state → action → post-state the rule for confirming each video boundary. Locate the exported slider’s appearance, the first demonstrated expression output, the transition to the duplicated setup, and the result reveal. Use the sparse net to bracket each transition and inspect within that bracket. Record phases that are combined, reordered, or only described in the article. Section-first materially changes the catalogue here. It keeps the simulation test, contact export, expression evaluation, and scale-up in their procedural contexts even where they use similar screen actions or show the same falling text. Beat-first belongs to the standalone result, where entrances, impacts, bounces, and rewrites are the evidence.

2. **EXECUTE-DEFECT — The frame rules leave motion beats unsampled in both videos.**  
   RUN.md §2, Extraction plan

   > - Tutorial: uniform safety net 1 frame / 10 s (24 frames) + evidence frames at every step boundary and every cited technique moment (before/during/after per technique), named `ev/t<t>-<beat>.jpg`. Tier: A3 beat-level for >5 min does not apply (233 s < 300 s) — full-census rule for ≤5 min applies to the FINAL (25 s, 1 fps = 26 frames); the tutorial at 233 s takes the beat-level rule by analogy with its step structure, stated here as the tier decision.
   >
   > - Final result: 1 fps census (26 frames) into frames/, evidence set promoted to ev/.

   **Cure.** Resolve the tutorial’s stated ≤5-minute census rule and its proposed exception in the operative line. Apply the stated census tier unless the governing text supports the exception. For both videos, add the explicit INSTRUCTION §2.2 pass for every distinct motion beat, every applicable boundary, and before/during/after each technique. Use the sparse frames as locators, then inspect the source at native cadence to locate beats and extract evidence, including impacts between census frames. Put pitchable frame references in the packet’s `frames/` tree and reconcile the `ev/` naming with the citation census. Recount actual outputs from the extraction command and files. The 24 and 26 in the Plan are targets. Reconcile the tutorial target with P-A4’s `tut001–tut023` reference.

3. **EXECUTE-DEFECT — The clip table assigns purpose without a reproducible selection rule.**  
   RUN.md §2, Clip table

   > | Entry (candidate) | Ruling | Reason |
   > |---|---|---|
   > | Collision-as-onset word swap [SYS/PRD] | CLIP (final-result, ~3 s around a clear impact) | The swap happens AT the impact frame; stills show before/after, not the onset binding |
   > | Free-fall "Weee" hold → first reaction [PRD] | CLIP (final-result opening seconds) | The hold's duration before the first swap is the mechanic |
   > | Rigid-body tumble/bounce of text layers [PRD] | CLIP (same impact clip may serve if it shows the bounce) | Motion quality (bounce/angular velocity) is temporal |

   **Cure.** After the beat pass and before clip extraction, record the source, in/out times, duration, and event markers for each clip. For onset, choose a legible layer and mark first visible contact, body response, and first visible text change independently. Treat same-frame onset as the claim being tested. For the hold, mark first visible `Weee` and the first observable reaction on the same layer. Reuse the impact clip for bounce when it contains a readable approach, contact, and rebound. Resolve each conditional candidate as supported, limited, or unverified after inspection. The `[SYS]` link to acceptance also needs tutorial or expression evidence showing the contact stream and filter. A rendered product clip can time visible outcomes.

4. **EXECUTE-DEFECT — The tempo plan has timestamps and no counting method.**  
   RUN.md §2, Failure-point evaluation

   > - Tempo-without-timestamps: the final's impact beats must be timed from the 1 fps census + clip inspection; no tempo claim without timestamps (§6.2).

   **Cure.** Put a timing ledger in Execute and use it to build §3.3(4). For each verified tutorial phase, record its duration, hard cuts, and intra-shot demonstration events such as simulation start, slider export, first expression output, and scale-up changes. For the standalone result, time entrances, visible impacts, and visible rewrites separately. Define the inclusion threshold for each event class before counting, including how simultaneous impacts and obscured contacts are handled. Give counts and rates per phase or stated product interval, with denominators, timestamp precision, and uncertainty. Keep accepted-event counts separate and report them only where the stream and expression support a count, as P-A3 requires. This makes acceleration or stalls traceable to the ledger and applies the guard’s Packet #1 lesson about intra-shot density.

5. **REVISE-IN-PLAN — P-A2 sends filter comparison to a source that can only show visible outcomes.**  
   RUN.md §2, P-A2

   > - **P-A2 (filter demonstration):** the packet's filter entry records the observed contact, the slider data, and the text before/after; a rejected contact beside an accepted one is shown if observable in the final piece's census, else the absence prints. Slider units and the delta comparison's exact semantics print UNVERIFIED; the tutorial recording's 60 fps is NOT the composition's frameDuration — the packet never equates them.

   **Cure.** Use the tutorial’s slider/keyframe and text evidence to show a classified pair if the data are legible. Use the article’s expression for the rule, including the start-time gate alongside spacing and delta. Cite the same layer and time reference across the input and output evidence. Print “acceptance unverified” where the inputs cannot be read or aligned. A visible contact with unchanged text can be recorded in `[PRD]`. P-A3 supplies two live explanations for it, rejection or reselection of the same word. Preserve the distinction between recording fps and composition frame duration.

6. **REVISE-IN-PLAN — Execute needs producer duties for G1 and G2 and a complete packet checklist.**  
   RUN.md §2, Execute checklist

   > 1. probe.json + post.json in packet dir (from P1/P2 records). 2. Frames per extraction plan (tutorial net + step evidence; final 1 fps census + ev set). 3. Clips per clip table. 4. digest.md with §3.3's eight sections exactly, lessons tagged by B1 class + consumer, reception slot printing "not yet run — charged to reception-analysis". 5. digest.pdf rendered from the md (pandoc/weasyprint route used by prior packets — check at Execute). 6. A5 build-time censuses: lesson-class coverage (all PRESENT classes in §3.3(6) or printed absence) + stated-count recount from disk. 7. Hand-off entry filed for style-library (its HQ.json + INDEX act is style-library's; this job files the hand-off in §10 + the lane board). 8. QUEUE.md: row #9 moved to Digested at packet close.

   **Cure.** Replace step 4 with a section-by-section drafting charge, carrying forward the catalogue and the charged G3 reception print. Bind identity and technical facts to the article and probe records, and the tempo section to the timing ledger. For **G1**, have the producer write both goods and bads with source and timestamp, claim, evidence, and consequence. Candidate prices include the legibility of an impact-to-reaction beat and the excluded `Ow!` choice. Anchor code and prose findings to the relevant article location and to a tutorial timestamp where the corresponding behavior or code is shown. For **G2**, have the producer write how the DLC assembler’s word-animation container can use the packet during Observe to evaluate a filtered contact onset for body response and source-text replacement. Keep that duty distinct from style-library hand-off. Map each lesson to a container, an implied change, and a build-cost rationale. Give each idea-bank variant a catalogue or tempo evidence reference.

   Also record the archive already landed at Observe-exit, verify the required probe fields including bitrate, and put P-A6’s full timestamped English transcript in the numbered checklist before drafting. Select the canonical Markdown-to-PDF route in Plan. This incorporates the applicable cures from the filed `jev-plan-exit` GAP-1 through GAP-6 into the steps the builder follows.

7. **REVISE-IN-PLAN — Verify can pass a timestamped bad without checking its substance.**  
   RUN.md §2, Verify checklist

   > - Goods/bads: ≥1 bad with a timestamp (§6.4/§6.6 gate).
   >
   > - Own-eyes: deliverer views key frames personally before completion is claimed.

   **Cure.** Retain the bad-with-timestamp gate and verify both sides of §3.3(5) against their cited frames, clips, or expression evidence. Check that the evidence supports the claimed consequence and severity. Name the deliverer’s inspection set, including tutorial boundary evidence, the filter evidence, every selected temporal clip, and native-resolution evidence for any small-UI claim. Record any unresolved small-text paraphrase on its catalogue entry and mark any exact claim `UNVERIFIED` where the source cannot support it. Add the §6 guard set to the Verify checklist for preparation during Execute, as INSTRUCTION §3 and `jev-plan-exit` GAP-7 require.

8. **REVISE-IN-PLAN — The product-passage amendment leaves the withdrawn measure in the operative segmentation text.**  
   RUN.md §2, Segmentation model

   > - [PRD] the nested finished product (final-result.mp4, 25.394 s vertical): a measured passage with observability tag UNINTERRUPTED (it plays whole, no voice-over) — its impact beats are timed from frame inspection; its aggregate share of the specimen is computed (25.394 / (233.154+25.394) ≈ 9.8% by runtime; the article is its primary frame).

   **Cure.** Edit the base line in place as P-A5 requires. Keep the 25.394 s embed as a separate [PRD] object. In `[TUT]`, confirm the reported opening and closing product passages and their tags against playback, including the audio where the tag depends on voice-over. Compute the union of confirmed in-tutorial passage durations over 233.154 s. Label any share from coarse bounds approximate and cite those bounds. The feed reports passage estimates without supplying frames or audio that would confirm them.

9. **REVISE-IN-PLAN — Make the split recheck early enough to protect the extraction.**  
   RUN.md §2, Failure-point evaluation

   > - Split decision: priced above (no split) — recheck at Execute if the tutorial's step structure proves denser than the article's 5 steps.

   **Cure.** Use the boundary and beat-locator pass to check scope before full extraction. Keep the single packet if the confirmed phases, result beat inventory, and evidence duties fit one cycle. If the check changes that decision, return the split to Plan, cut at a confirmed procedural boundary, and record the first group and a named queue continuation identifying its remaining phases and where the standalone result will be covered. The reported durations sum to 258.548 s, supporting the Plan’s rounded 258.5 s. The feed supplies no observed inventory that verifies the 10–13 entry estimate.

## PLAN STRENGTHS THAT SURVIVED

- **The catalogue structure fits the specimen.** RUN.md §1’s five article steps give the long tutorial procedural cues, and §2’s `[TUT]`, `[SYS]`, and `[PRD]` namespaces give each kind of evidence a home. P-A1 and P-A3 preserve the distinctions among rigid-body response, contact export, filter acceptance, and visible text change.
- **The clip rationale is entry-specific.** RUN.md §2’s clip table calls for motion evidence for onset, hold, and tumble or bounce. It assigns a still to the slider state, expression text to the filter rule, and a before/after pair to the scale-up claim. Those evidence choices survive the timing and source repairs.
- **G3 survives.** RUN.md §1 charges reception at intake and §2 Execute step 4 gives §3.3(8) an explicit print. Execute step 1 routes the raw counts to `post.json`, consistent with INSTRUCTION §3.1.
- **The failure points address this specimen.** RUN.md §2 names the small Newton and expression UI, the `Weee`/`Weeee` discrepancy, and the need to retain reaction words as specimen text. P-A6 provides a transcript route and reprices the tutorial transcript device as undetermined before the subtitle content is inspected. RUN.md §1 also records the owner-routing and notes-search cures against the historical Observe receipt.

**Commentary — review limits.** The run-specific fed-form instruction supersedes the standing disk-read instruction for this firing. I assessed the supplied record only. Media, frames, audio, subtitle contents, the full expression, raw probe outputs, and disk filing are unverified. The feed supports the Plan findings above and leaves actual boundary times, clip selections, passage tags, and tempo counts for source inspection.

**Body-write: none (read-only run)**
