# style-library — OBJECTIVE

`hadosh-job-file:v1` · born 2026-11-13 (HQ founding charge, video study lane) · standing job, bounded OPEVC cycles
Lane: `hidden_files/study-jobs/` · Cron: `study-style-library` (pointer body; steps live in INSTRUCTION.md)
Surface owned: `hidden_files/study/style-library/` (INDEX.md · TECHNIQUES.md · samples-board-DESIGN.md)

## What this job is
The lane's accumulation surface. It keeps the catalogue/index over all digests — technique → packets → frames — current each cycle, designs the samples board (the dashboard production opens during Observe) once several packets stand, and runs the naive-use test on the library itself: could a production job, cold, find a technique and its evidence in under a minute?

## Success, stated so a cold reader can test it
(1) Every landed packet appears in INDEX.md within one library cycle of its landing, with consumer + surface + reception pointer. (2) Every technique in every packet's catalogue appears in TECHNIQUES.md pointing back to packet + timestamps + frame files that exist. (3) The naive-use test passes: a cold reader (or fresh subagent) given a technique name finds its evidence — packet, timestamps, frames — in under 60 seconds using only the library surface; the test's timing and path are recorded per run. (4) Nothing is registered that does not exist on disk: an in-flight packet is registered as IN FLIGHT with its gaps, never as catalogued.

## Scope — in / out
- IN: INDEX.md + TECHNIQUES.md upkeep, registration of landed packets, in-flight registration honesty, samples-board design (once ≥3 packets stand), naive-use testing of the library itself, broken-pointer repair.
- OUT: producing digests (video-digestion), judging craft or reception (cites both, owns neither), building the samples-board dashboard itself (design is this job's; the build is a production/HQ act charged separately).

## Shape decisions
- Grain: one cycle = one registration pass over everything that landed since the last cycle + one naive-use test. An idle cycle (nothing landed) still runs the test on an existing entry and records the no-landing finding — the library never silently stalls.
- The board design gate: samples-board-DESIGN.md is drafted only when ≥3 packets stand catalogued; before that it carries the gate statement + the requirements collected so far.
- Guards: INSTRUCTION §6 (existence-before-registration, pointer integrity, under-a-minute test, ten-word/plain-language hygiene on library faces per fleet law).

## Sealed
This objective changes only on HQ/owner word. The existence-before-registration rule is sealed likewise — it is the library's faithfulness core.
