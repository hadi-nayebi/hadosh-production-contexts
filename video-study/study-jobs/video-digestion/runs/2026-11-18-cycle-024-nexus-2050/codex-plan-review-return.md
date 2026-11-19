# codex-plan-review — Return — video-digestion Cycle-024

- Call: codex-plan-review (guards/codex-plan-review.md) — local Codex binary, read-only, fed per the A10 feed manifest in codex-plan-review-instruction.md (RUN.md snapshot at firing: 19,905 B class record — jev-plan-exit return filed before firing, A8 cl.4 serialisation observed).
- Raw log: codex-plan-review-return-raw.txt (169,275 B).

## FINDINGS

### 1. Segmentation

**REVISE-IN-PLAN — `RUN.md:77`, “VERIFIED from transcript question placements + section-boundary frames.”** A recurring question can connect dayparts without marking where they begin. The P1 description supports a wake → work → lunch progression but supplies no timed boundaries or evidence of recurring question placement (`RUN.md:63–65`). Amend lines 77 and 110 to log each candidate boundary with the timed narration pivot and the visual or audio transition, where present. Log the question's wording, timestamp, and role separately. If the cues disagree, record which cue governs the boundary and why. Apply the same test to the ending to determine whether it restates, answers, or leaves the question open.

The catalogue changes materially with this choice. A beat-first pass could file a card onset, a scene change, and a recurring line as separate events. A sections-first pass can establish whether those events work together as a reusable daypart transition, or whether the question recurs independently of the transition. That distinction is the basis of the Packet #4 comparison (`RUN.md:35–38,78,135`).

### 2. Sampling and clips

**EXECUTE-DEFECT — `RUN.md:82`, “evidence frames at every section boundary + every cited technique moment … + sparse net 1 frame/10 s”; line 98, “viewing of the net + boundary frames against the transcript”; line 130, “transcript-cued spot checks.”** This discovers techniques only where a sampled image or narration gives the producer a cue. A brief visual-only event between net frames could disappear from both the catalogue and verification. `INSTRUCTION.md:24,95` requires beat-boundary evidence as well as the net. Amend lines 82, 98, 109–110 and 130 to include a continuous playback pass of every section, a timestamped ledger of motion beats, and evidence at each beat boundary and section boundary. Capture before/during/after states for each visual technique where those phases exist. Record how the beat ledger and extracted evidence reconcile.

**REVISE-IN-PLAN — `RUN.md:89`, “Any dissolve / zoom / morph / match-cut technique found at viewing | CLIP”; line 93, “at packet close re-lists this table against the final catalogue entry-by-entry.”** A6 gives temporal techniques a clip default, while `INSTRUCTION.md:24,108` requires a ruling tied to what the specific claim needs. A before/after pair can establish a compositional match. It cannot establish a timed handoff through motion. Amend lines 85–93 and 110 to make the table a decision rule used before clip extraction. For each provisional entry identified during viewing, record its ID and claim, then record either CLIP with in/out timestamps and duration, or NO-CLIP with the stills that carry the claim and why. Keep command 7 as the close census.

### 3. Tempo method

**EXECUTE-DEFECT — `RUN.md:99`, “source: P3 census + transcript section timestamps; per-section lengths and beat rates”; line 133, “no tempo claim without the P3 census + section timestamps.”** The P3 method counts distinct scene-detection timestamps at two stated thresholds (`RUN.md:72,108`). Those measurements support detector sensitivity. They cannot supply intra-shot beat counts or tell whether a daypart gains energy through animation while edit frequency stays flat. The guard names this exact failure mode in its Packet #1 example (`guards/codex-plan-review.md:15`). Amend lines 99, 108–110 and 133 to publish, per measured section, its span and duration, P3 candidate counts at each threshold, and playback-logged intra-shot motion beats with counts and rates. Define the beat unit and deduplication rule before counting. Use a playback-verified edit ledger for any hard-cut count, and cite the ledger spans supporting claims of acceleration or sag. Carry the cut tests and compression floor through that same evidence.

### 4. G1/G2/G3 recurrence

**REVISE-IN-PLAN — G1, `RUN.md:100`, “source: the viewing record … every bad timestamp-bound”; line 121, “both present, timestamp-bound.”** The producer duty and presence check are in place. The listed verification can still pass a timestamped judgment unsupported by the cited span, a limitation also identified by the filed Jev review (`jev-plan-exit-return.md:25,58`). Amend lines 100 and 121 so the producer binds each good and bad to its observed event, timestamp or span, and craft consequence. Verify each judgment against the viewing record, including what the proposed cut would lose for any sag finding. This also gives the length-as-craft duty in `INSTRUCTION.md:96` a route into goods/bads.

**G2 — No finding.** Observe names Academy explainer production, its production surfaces, and its intended use. Plan makes the producer write that into packet §2 and verifies its presence there (`RUN.md:37–39,97,122`).

**G3 — No finding.** The producer has a raw-count source, a `post.json` step, and the explicit charged print for packet §8 if reception is pending (`RUN.md:49–50,103,106`). The governing form supplies the record-pointer branch (`INSTRUCTION.md:44,85`).

### 5. Failure points and split

**REVISE-IN-PLAN — `RUN.md:128`, “YouTube auto-caption variant may 429 … fallback: another en variant, then local ASR”; line 106, “Archive source + captions + info.json into the packet dir.”** The caption contingency is specific and useful. The combined archive step leaves source-video access failure without its own branch. Metadata success at P1 does not establish media access (`RUN.md:59–63`). Amend lines 106 and 128 to distinguish media access from caption access. If the video cannot be archived, log the error and actual access route per `INSTRUCTION.md:34`. Continue only the work that route can substantiate, and record any probe or evidence obligation it leaves unresolved.

**Split — No finding on the recorded decision.** The Plan prices one cycle for one specimen on the provisional section estimate and names how a nested object would be handled (`RUN.md:134`). The record establishes no distinct section group requiring deferral. A continuation name becomes due if the measured scope triggers a split under `INSTRUCTION.md:26`. The sampling and tempo cures above still apply to the one-cycle Plan.

## PLAN STRENGTHS THAT SURVIVED

- P1 establishes the long-form tier in the record, and the Plan treats the queue's dayparts as a hypothesis to test. The Packet #4 comparison gives the section decisions a concrete production use (`RUN.md:55–65,76–78,135`).
- Both checklists stand in the initial Plan alongside the eight packet sections. The frame-label sample and exact-version receipt tie verification to inspectable evidence (`RUN.md:95–125`).
- The filed Jev return is **EXECUTE**, primary **NONE**. Its recorded snapshot matches the disk read at **18,479 bytes**, SHA-256 prefix `1d59ab56362c`, from `wc -c` and `sha256sum` on `RUN.md` (`jev-plan-exit-return.md:10,16,31`). The findings above price the extraction and verification methods against the same Plan.

**Limits.** This was a text-only review. Actual daypart boundaries, question recurrence, clip necessity, and detector yield remain unverified. The direct disk-read charge governs over the guard's generic fed-only transport form. The supplied manifest lacks an assembly timestamp, and `RUN.md:140–147` contains the call declaration and Observe receipt but no recorded Plan-exit disposition. The filed Jev return and matching hash establish the reviewed version. Feed assembly timing and recorded disposition are **NOT ASSESSED**.

**Body-write: none (read-only run).** The runner is to persist this return verbatim in the Cycle-024 run directory. Proposed `RUN.md` amendments are specified in the findings.
**REVISE BEFORE EXECUTE.** Keep the sections-first model and one-cycle decision. The Plan needs an evidence route for motion beats between cuts and a separate count of intra-shot activity before it can support the catalogue and tempo map.

