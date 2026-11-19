# Jev call — jev-observe-exit (video-digestion)

_Per-call definition, instantiated from jev-call-template.md in substance. Phase-guard augmentation 2026-11-14 (HQ phase-guard build spec, owner's order 2026-11-14 ~01:24 EST). This is the Observe→Plan gate for a digestion cycle — it did not exist before this pass; jev-packet (Verify) is unchanged and is not duplicated here._

## 1. What it judges
- Surface judged: the cycle's Observe working memory in `runs/<date>-cycle-<NNN>-<slug>/RUN.md` — queue citation, specimen identity, media-properties summary, prior-art citations, named consumer, lesson-class naming, reception-slot charge, and the one-sentence Observe product.
- OPEVC call point: INSTRUCTION §1, at its Gate out. The phase advances on the verdict's recorded disposition (applied, or set aside with reason). An unfired call makes the cycle INCOMPLETE.

## 2. Instruction (the model's charge)
Judge whether this Observe is good enough to plan a digestion from — not whether it is tidy. Price, in order: (1) Intake verification — is the specimen the HEAD entry of `../QUEUE.md`, cited verbatim with who entered it and why, and is its identity (platform, URL/identifier, creator, access/archive route) stated from a read, not assumed? An invented or queue-less specimen fails here. An empty queue lawfully produces an empty-queue finding, not a specimen — judge that form on its own terms. (2) Media-properties grounding — are the specimen's actual properties known well enough to choose a segmentation model in Plan: duration and form class (short ≤90 s vs long >90 s), dimensions/fps/codecs or a named probe step still owed, and the musical/visual section signals visible in the record (for long form: sections, not beats, lead — the 198.41 s founding specimen, Packet #1, is the anchor: 15 sections, ~133 BPM, energy in intra-shot density, not cut rate)? Properties asserted without a probe or a viewing record are ungrounded. (3) Prior art — were `hidden_files/study/notes/`, `hidden_files/study/LEDGER.md`, and the style-library `INDEX.md` actually searched, with citations for anything already catalogued on this specimen/creator/style, so Plan cites rather than re-derives? (4) Consumer specificity — is a real consumer named as a job + the surface it will use this packet on + the intended use (e.g. "DLC/multilingual production — openings + word-animation containers, to build FROM"), such that the consumer could act? A generic consumer ("production", "general inspiration") is the G2 failure from Packet #1 and scores reject-side. (5) Lesson classes (funnel Amendment B1) — does Observe name which lesson classes this specimen carries — technique · trick · texture · storytelling pattern · transcript device · pacing principle — each marked present/absent with a ground in the record? A techniques-only naming for a specimen whose record shows story/transcript material is a blind spot, not a scoping choice. (6) Reception slot — is reception charged at intake, not at packet close: post counts captured as raw material for `post.json`, and the §3.3(8) slot's charge to reception-analysis recorded (or the pointer placeholder named)? Silence here is the G3 failure from Packet #1. (7) Owner-information routing — is any owner-only information this cycle genuinely needs (intent/ear/taste/law boundary alone) identified and routed through HQ, or explicitly recorded as none? Digestion ordinarily needs none; an unrecorded need and an invented need both fail. Score each dimension 0–1 against its anchors, classify every defect by the taxonomy (one primary class by precedence), and return the verdict the floors compose. You judge text paperwork only; whether media truly shows a claimed property is a separate inspection gate.

## 3. Context contract (masked view)
- FED: RUN.md Observe section (queue citation · specimen identity · media-properties/probe summary · prior-art citations · consumer line · lesson-class naming · reception charge · one-sentence Observe product) · the head line of `../QUEUE.md` as cited · the §1 resource list from INSTRUCTION.md.
- NEVER FED: the analyst's rationale prose about why the specimen is interesting · any draft Plan · the builder's self-assessment of Observe quality · prior verdicts on this cycle.
- Ceiling: ≤32,000 tokens text. Packing rule: RUN.md Observe fields first, queue line second; overflow = preflight FAIL (the call does not fire on a truncated record), never a silent trim.
- Output must validate against the call's local output schema (verdict + dimensional scores + one primary classification + evidence pointers); malformed output = protocol failure, not a verdict.

## 4. Output space
- Verdict classes: **ADVANCE · ADVANCE-WITH-GAPS · RETURN-TO-OBSERVE**. ADVANCE-WITH-GAPS is narrow: only a gap with a designed boundary and a recorded downstream consequence (e.g. probe fields completable at Execute §3.1 before any segmentation is relied on) may ride; intake, consumer, and reception-charge gaps never ride — they return.
- Dimensional scores (0–1; anchors: 0.0 = absent/false · 0.5 = present but partial, generic, or ungrounded · 1.0 = complete, specific, and evidence-bound):
  - intake verification
  - media-properties grounding
  - prior-art completeness
  - consumer specificity (usable recipient + surface + intended use, not name-presence — the G2 standard, shared in form with jev-packet)
  - lesson-class coverage (all six funnel classes priced, present/absent grounded)
  - reception-slot readiness
  - owner-information routing (explicit none = 1.0 when true)
- Rejection taxonomy (one primary, by this precedence): MISSING-INTAKE · NO-CONSUMER (includes GENERIC-CONSUMER as its named sub-form) · UNPROBED-MEDIA · PRIOR-ART-BLIND · LESSON-CLASS-BLIND · RECEPTION-UNCHARGED · UNROUTED-OWNER-NEED.
- Accepted profiles travel downstream: the dimensional profile + receipt are cited in RUN.md's Plan section, so a weak Observe dimension is visible to the planner and to Condense.

## 5. Floors and disposition
- Floors: intake verification < 1.0 → RETURN-TO-OBSERVE · consumer specificity < 0.5 → RETURN-TO-OBSERVE · media-properties grounding < 0.5 → RETURN-TO-OBSERVE · reception-slot readiness < 1.0 on the charge itself (charged or explicitly not-yet-run with the charge recorded) → RETURN-TO-OBSERVE · any dimension < 0.4 → RETURN-TO-OBSERVE · all dimensions ≥ 0.7 with no blocking gap → ADVANCE · nonblocking-boundary gaps only → ADVANCE-WITH-GAPS.
- Disposition: the verdict is advisory — reviewed by the runner, applied or set aside with the miss recorded in Condense. The verdict + receipt land in RUN.md either way.

## Call command
- Defined prompt + context assembly the runner executes: assemble the FED fields above from RUN.md and `../QUEUE.md` into a single text context (≤32k, preflight-checked), fire this file's §2 instruction over it via the fleet's sealed decision-model (Jev) transport — the same transport jev-packet binds in Cycle-003 — and file the validated output + receipt (context hash + definition version) in RUN.md before the phase field moves.
- Firing: this call fires at its step on every cycle. A cycle in which it did not fire prints INCOMPLETE.

## 6. Firing record and improvement
- Exemplars (job-specific, from this job's own record): (a) Packet #1 / Cycle-002 Observe as reconstructed — consumer named only generically at packet level (G2) → must classify NO-CONSUMER / consumer specificity reject-side; (b) a controlled variant of (a) with the reception charge absent from the record (G3 form) → RECEPTION-UNCHARGED; (c) the founding specimen's long-form grounding (198.41 s, section signals present) → media-properties grounding ≥ 0.7, ADVANCE-side; (d) the empty-queue Observe (queue stood empty after Packet #1) → lawful ADVANCE on the empty-queue finding form, not a specimen verdict; (e) a short-form (≤90 s) specimen with beat signals and all classes priced → ADVANCE; (f) an overlapping-fault case (generic consumer + unprobed media) → precedence picks NO-CONSUMER as primary. Plus threshold-boundary tests (consumer exactly 0.5) and stale-receipt refusal.
- Firing: this call fires at its step on every cycle; its firing record and misses are its improvement material. No test precedes firing. The exemplars above stand as its first firing cases — (a) must classify reject-side on consumer specificity when fired, and a miss is recorded in Condense as improvement material, never as a bar to firing.

## 7. Iteration (Condense)
This file is one of the four layers Condense iterates. Amendments name the forcing evidence (a Plan that failed for a context Observe should have caught · a return that cost a cycle) + before/after. A text change takes effect on the call's next firing; the call keeps firing every cycle, and Condense prices the change against the returns that follow it.

## Firing-record rule (2026-11-15, Cycle-012 Condense — judgment-transport cure)
A firing IS the return FILE on disk in the run directory. The runner verifies the file's presence before recording any receipt; a chat summary is not a return, is never quoted as a verdict, and where a summary diverges from the filed return, the divergence is recorded in RUN.md WITH the summary's divergent claim quoted verbatim. A claimed firing with no file is UNFILED and the cycle prints INCOMPLETE for this call (guards.md command 8 censuses this mechanically from Cycle-013).
