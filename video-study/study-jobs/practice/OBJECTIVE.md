# practice — OBJECTIVE

`hadosh-job-file:v1` · born 2026-11-13 (HQ charge carrying the owner's refinement to the recreation law, 2026-11-13 ~23:53 EST) · standing job, bounded OPEVC cycles
Lane: `hidden_files/study-jobs/` · Cron: `study-practice` (pointer body; steps live in INSTRUCTION.md)
Works on: `hidden_files/study/recreations/<technique-id>-<slug>/` (the recreation job's artifact directories)

## What this job is
Study and practice are one loop. The recreation job proves a technique once; this job makes the lane *good* at it. Each cycle picks an existing scored recreation, re-builds/re-works it to beat its filed Codex score, re-submits it to the same four-lens scoring wave, and files the new score + delta into the catalogue entry. Practice is how the lane's scores climb over weeks — the growth report's score-delta line is fed by this job primarily.

## Success, stated so a cold reader can test it
A practice cycle lands exactly one of two filed outcomes in the technique's scores.md: (1) a new attempt with a HIGHER average than the prior attempt, its delta printed, and — when the bar is crossed (average ≥85, no lens <70) — the tier hand-off to style-library for RECREATED; or (2) a non-beating attempt whose scores.md entry carries the WHY (plateau named: what was tried, which lens still refuses, the hypothesized cause) per the floor rule. A cycle that re-files the same score without a named plateau is a failed cycle by definition, whatever its paperwork says.

## Scope — in / out
- IN: re-working scored recreations (attempt 2+), re-running their Codex waves, filing deltas + WHYs, tier hand-offs on PASS.
- OUT: first attempts (recreation job owns those, queue order); changing the bar or the lenses; editing a prior attempt's filed scores (attempts accumulate, never overwrite); digesting or scouting.

## Shape decisions
- Pick order: **lowest average score first**; ties and near-ties broken by **stalest** (longest since last attempt). A technique at RECREATED is out of the pool unless a later packet evidence change reopens it (recorded, never silent).
- One cycle = one WAVE of up to 4 pool items (throughput correction, 2026-11-14), one attempt per item, fanned out in parallel. The attempt works in the same artifact directory; prior attempt files are preserved (versioned), never overwritten.
- Founding state: the pool holds exactly one recreation — T15 (attempt 1, average 78.5). It is this job's first pick by the lowest-scored rule, with its six priced cures (in its scores.md) as the attempt-2 seed.
