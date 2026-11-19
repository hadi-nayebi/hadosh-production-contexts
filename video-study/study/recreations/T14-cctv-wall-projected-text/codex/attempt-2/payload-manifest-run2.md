# T14 attempt 2 — payload manifest, run 2 (filed BEFORE the re-fire)

Reason for run 2: the run-1 wave (returns preserved as `lens-<lens>-run1.md`, sha 2c5a897e…) priced two real defects in the interim source; both were cured in-cycle (build-record-attempt2.md, in-cycle cures section) and the wave re-fires on the final source per the hash-binding rule. Run-1 returns never enter the filing average.

Final source bound to every run-2 payload: `recreation.html` sha256 **b530b7372e768f291053dfa5ab1523cc633597fa117cec4702121fce04ee1525**.

## Allowlist (exact, per lens payload `payload-<lens>-run2.txt`)
Identical composition to run 1: (1) the same create-once lens instruction `instr-<lens>.txt`; (2) `neutral-build-extract.md` as updated for the final source (new sha, 27 check names + results, no scores or cure labels); (3) the final `recreation.html` appended verbatim.

## Exclusions
Same as run 1: plan, RUN.md, scores.md, all prior returns (including run-1 returns), cure commentary, targets.

## Assembled-payload anchor scan (run on all five run-2 payloads before firing)
Numeric anchors (prior average / per-lens values / run-1 values / deltas): 0 hits. Qualitative anchors (amendment codes, "CONVERGENT", "plateau", "prior average", "attempt 1", "run-1", "run 1"): 0 hits beyond the standing header's generic "cures" sentence, as in run 1. Source comments scanned as payload content: no cure codes or cure-to-lens commentary — clean, no neutralization needed.

Firing: one stream per lens (`cat payload-<lens>-run2.txt | codex exec - -o lens-<lens>-run2.md`); the run-2 returns are the attempt's final returns.
