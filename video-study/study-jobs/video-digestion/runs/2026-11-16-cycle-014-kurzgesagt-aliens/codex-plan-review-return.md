# codex-plan-review return — Cycle-014 (Packet #8, Kurzgesagt GDSf2h9_39I)

_Fired 2026-11-16 at the §2 call point, AFTER the jev-plan-exit return was filed on disk (A8 clause 4 serialisation — the receipt was fed with this call). Feed: guards/codex-plan-review.md charge · RUN.md §2 Plan · jev-plan-exit receipt line. Transport: `cat <feed> | codex exec -`, single stream. Return persisted verbatim below by the runner from the captured stream; the return's own BODY-WRITE line records that its sandbox could not write files — persistence is the runner's act, per the firing-record rule._

## FINDINGS

1. **Condemned Plan line:** “tempo-without-timestamps … every pacing claim binds to transcript timestamps + the scene census, never to impressions.”

   **REVISE-IN-PLAN.** Timestamps locate claims but do not establish tempo. The Plan lacks a per-section method for measuring intra-shot animation density; scene changes could miss the specimen’s movement over static plates.

   **Cure:** Require a tempo table per section: duration, cuts at stated thresholds, intra-shot motion events under an explicit counting rule, and resulting rates. Compare detector output with a manually annotated pilot containing static plates with animated elements. Distinguish measured rates from qualitative judgments.

2. **Condemned Plan line:** “evidence frames at every beat boundary + every cited technique moment.”

   **REVISE-IN-PLAN.** A boundary frame or unspecified “moment” does not guarantee before/during/after coverage. This particularly affects sphere growth, rescaling, zooms, and transformations.

   **Cure:** Require timestamped before/during/after evidence for every temporal technique, including motion beats inside shots. For each catalogue entry, record whether those stills establish the claim or a clip is required.

3. **Condemned Plan line:** “NO-CLIP … diagram states (before/after pairs show the state change; rates bind to the scene census data record).”

   **REVISE-IN-PLAN.** Before/after pairs establish endpoints; scene-census data does not necessarily establish diagram growth rate, acceleration, or synchronization. The blanket ruling could suppress necessary motion evidence.

   **Cure:** Limit this NO-CLIP ruling to endpoint-state claims. Require a clip or independently measured temporal sequence whenever the entry claims rate, continuity, easing, synchronization, or a moving explanatory relationship. Retain final per-entry adjudication.

4. **Condemned Plan line:** “§3.3(2) consumer section and §3.3(8) reception slot as named producer steps.”

   **REVISE-IN-PLAN.** Naming steps does not specify their production or evidence routes. Goods/bads have a viewing-and-timestamp route; these two sections do not have comparable instructions.

   **Cure:** Specify that the producer writes the consumer section against the standing packet requirements, without treating it as adoption. Specify the reception retrieval route and required printed outcome: observed reception with provenance and retrieval date, or explicit unavailable/not-retrieved status with reason. Neither slot may remain silent.

5. **Condemned Plan line:** “if the scene census returns >400 beat boundaries, the catalogue splits by section group and the remainder is charged to Cycle-015 as a named continuation.”

   **REVISE-IN-PLAN.** The continuation has a cycle number but no name or section assignment. The trigger also depends on the detector whose under-firing risk the Plan already recognizes.

   **Cure:** Name the continuation now, define how completed sections and remaining sections will be recorded and queued, and apply the trigger to the reconciled beat census after the instrument pilot. Permit a section-preserving split when evidence workload exceeds capacity even below 400 boundaries.

## PLAN STRENGTHS THAT SURVIVED

- Three-map segmentation grounds argumentative sections in semantic, visual, and musical evidence. Section-first analysis can preserve the deadline argument and scenario dependencies that beat-first extraction could fragment.
- The detector pilot explicitly addresses animated elements over static plates; the uniform net is appropriately restricted to a safety net.
- Goods/bads are producer-written during viewing and timestamp-bound. Length receives explicit buys, sag, and compression analysis.
- Arithmetic reconstruction, epistemic-language inventory, and confusable-pair checks materially constrain unsupported catalogue claims.
- Most failure points are specimen-specific, especially diagram legibility, detector fit, model-versus-narrative distinctions, and deadline arithmetic.

**Review scope:** The supplied feed contains §2 and the plan-exit receipt, but omits the required Observe product and INSTRUCTION §2–§3. Findings above remain actionable; full feeding-contract compliance is unverified.

**BODY-WRITE:** none (read-only run). File creation was unavailable because the execution tool failed to start. This return is **UNFILED**; the consumer must persist it verbatim in the run directory before recording a firing receipt.

_Runner's persistence note (2026-11-16): filed at this path by the runner in the same act; consumption line stands in RUN.md §2 (Plan amendments P-B1–P-B5). The review-scope note is priced: the feeding contract's omitted items (Observe product, INSTRUCTION §2–§3 text) are a feed defect of this firing, recorded in the deviation register; the five findings were each independently checkable against the fed Plan and are disposed on their merits._
