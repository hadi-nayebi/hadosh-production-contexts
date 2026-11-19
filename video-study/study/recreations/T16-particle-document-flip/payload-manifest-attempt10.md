# T16 attempt 10 — wave payload manifest (filed BEFORE firing, Verify 9–13)

Final source bound by every packet: recreation.html, sha256
f9f9462a985c1e3f8cceb97eebeb6b26e9b3d594305951d8155f7490cfafc4e4.

## Allowlist (the ONLY content in each payload, in order)

1. The standing header (scale line + SCORE line requirement).
2. The lens instruction (consumer + decision priced · working record ·
   body-write requirement) — carries the BAR only (avg >= 85 AND no
   lens < 70, with both outcomes stated symmetrically), never a prior
   score.
3. The lens brief (technique questions for that lens alone).
4. The score-blind build record (build-record-blind-attempt10.md,
   verbatim minus its title line).
5. The final recreation source, verbatim.

Payload sha256 (identical bytes in the build scratch and in each
per-lens firing cwd):
- motion      777c8e4683795a498de4cabb9a6d8ed0ddac9b0616f6b33c56489257dd1045c5
- timing      62256d71ea6ead0148d45aed121a0787588f6d7e8252e99f2a8751ec62c6ebe1
- purity      635f5edfa15845b056a74969d35300200543a5c209c88b7ccb71d32da4060334
- reusability f03b6f0e7909161dc85444cafa791dce30cfc74291df0bacb534915d11ecd8bb
- readability bec689819a863c4deed3bcf684479d35a81df2ea9cd0ce940e98b0d39ff2cf4d

## Exclusions (never in any payload)

scores.md · all prior-attempt returns and payloads · the non-blind
build record · own-check files · the plan · any prior score, delta, or
verdict about this item.

## Contamination scans (run on the assembled payloads pre-firing)

- Instruction + brief + build-record sections scanned for inherited
  values and outcome-presupposing wording ("84.2", "attempt 9",
  "prior score", "previous attempt", standalone PASS/FAIL claims
  about this attempt): CLEAN. The only lexical hits are this
  attempt's own neutral facts ("84-char title" — a character count;
  "gate verdict" — the validation gate's function).
- Two inherited-anchor sentences present in the prior attempt's
  briefs were DROPPED under the widened gate: a sibling item's score
  ("scored purity 100 in the T15 family") and a "lost points"
  family-history framing; the defect classes they named are priced
  in the briefs in neutral terms.
- Source comments scanned at freeze (step 15a): no attempt, score,
  lens, or outcome language.

## Session form (per the wave guard's firing-form amendments)

Local Codex binary; fed stream (the payload file as a stdin redirect,
no second input stream); per-lens dedicated scratch cwd
(~/workspace/.scratch/cycle-030/lens-a10-<lens>/) containing ONLY the
byte-identical payload copy — that cwd is the session's working
scope; --skip-git-repo-check; -o original written to
~/workspace/.scratch/cycle-030/T16-<lens>.txt, then content-copied
create-once to codex/attempt-10/ with sha256 verified against the
original. Every firing is preserved create-once before any re-fire.
