# RUN — recreation Cycle 005 · Wave 3 · 2026-11-14

Opened BEFORE any building (INSTRUCTION §0). Trigger: cron study-recreation 2026-11-14 09:20 EST.
Queue basis: QUEUE.md RECREATION QUEUE — #1–#11 are IN PROGRESS (attempt 2 routes to practice, A3 division of labour) or RECREATED, so first attempts here are #12–#16, in queue order.
Governing: recreation INSTRUCTION.md (§0 wave form, §1–§9, Amendments A1/A2/A3/A5), bounded_probe_discipline skill (all probes capped in code, ≤6000 chars).

## Wave manifest (5 items, parallel fan-out, one subagent per item)
| # | Item | Packet window | Consumer | Artifact dir |
|---|---|---|---|---|
| 12 | T05 — Pop-in collage grid | P1 @ 0:24–0:35, ev/t27.jpg | transitions · diagram | study/recreations/T05-pop-in-collage-grid/ |
| 13 | T04 — Waveform + step sequencer | P1 @ 0:21–0:29, ev/t23.jpg, ev/t27.jpg | diagram / music surfaces | study/recreations/T04-waveform-step-sequencer/ |
| 14 | T11 — Code-review UI + stamp slam | P1 @ 0:56–1:05, ev/t61.jpg | verdict moments · diagram/ending | study/recreations/T11-code-review-stamp-slam/ |
| 15 | T07 — Permission-dialog gag | P1 @ 0:35–0:43, ev/t41.jpg | openings (hook) · fake-UI family | study/recreations/T07-permission-dialog-gag/ |
| 16 | T23 — Comic chapter-map motif | P1 @ 1:05, 2:12, 2:51, ev/t132.jpg, ev/t171.jpg | series design · openings | study/recreations/T23-comic-chapter-map/ |

## Per-item Observe summary (seat, from digest.md + TECHNIQUES.md, this run)
- T05: over a dark field, rectangular panels (waveform, sequencer, 3D-scene stills, golden-spiral card) pop into a loose grid one at a time, each a small reveal, lyric line typing below; grid never shown empty — discovered panel by panel. Each pop is a micro-reveal on the beat.
- T04: DAW-style panel — song waveform as vertical bars, played portion orange / unplayed grey, playhead sweeping; step-sequencer grid beside/under lights cells in time with the beat. Waveform doubles as progress bar.
- T11: GitHub-like PR screen cycles cards (#1111, #1115…): approvals counter spins up (111→800), checks panel flips states (build/tests/prod, red 'prod is down'), stick-figure reviewers multiply, PR body is ASCII/pointillist arch art; cards swap with horizontal motion-blur whip transitions ~1.3 s apart; green rotated LGTM stamp slams at the merge moment.
- T07: Claude-Code-style permission modal center-frame cycles escalating requests ('Allow Adita to direct?' → 'produce?' → 'win an Oscar?'), options '1. Yes / 2. Yes, and don't ask again / 3. No, let's not get ahead—'; selection highlight steps down the options across the three modals — highlight stepping is the timing device.
- T23: storyboard grid flashes between acts: 'ADITAZZZ — A COMIC OF EVERYTHING WE MADE — ISSUE #1', numbered panels naming scenes (03 SHIP IT, 04 THE COMMENTS, 07 THE DAILY STANDUP, 09 THE SEERESS, 10 I KNEW IT, 11 PLEASE HOLD, 12 USAGE LIMIT); later appearances show more panels filled — a series progress tracker.

## Per-item Plan summary (full tables in each artifact's build-record.md)
- Parameter table: every variable (text/panels, timings, palette, scale, counts) = named CONFIG key, specimen value as default; URL/config overrides for swap test.
- Construction: T05 DOM loose grid, panels pop in sequentially (code-drawn panel contents only); T04 canvas/DOM waveform bars + playhead sweep + sequencer grid lighting on beat checkpoints; T11 DOM fake PR UI with spinning counters, flipping checks, whip card swaps, rotated stamp slam; T07 DOM modal cycling requests with highlight stepping down options; T23 DOM storyboard grid with config-driven filled-panel count per appearance.
- Verification plan per item: swap test (words + 1 timing + 1 palette), purity grep + asset inventory, comparison sync check, five-lens Codex wave (motion · timing · purity · reusability · readability), bar avg ≥85 AND min ≥70.
- Wave-2 lesson applied in Plan (priced): readability was Wave 2's stuck lens (phone-width fitting failures on 4/5 items). Every build this wave must be designed at 360 px width first: computed fit (declared stage model in build-record.md), no clipping, font floors respected, comparison stacks vertically on phone with controls reachable.
- Checkpoint-priced timing (lane hand-off, demonstrated): derive schedules from measured specimen checkpoints where frames/digest give anchors, not one global cadence.
- Guards cited: jev-observe-exit / jev-plan-exit / jev-prewave / codex-observe / codex-plan-review — BUILT-NOT-FIRED / UNBUILT per guards.md; printed SKIPPED-WITH-REASON per item: these phase guards are not armed executables in this seat; the five-lens scoring wave IS the armed deliverable gate and fires per item. Codex-condense likewise SKIPPED-WITH-REASON at Condense.

## Wave outcome (seat-verified 2026-11-14 — arithmetic recomputed from filed lens SCORE lines, all 25 match; purity grep re-run by seat on recreation.html: 0 hits ×5)
| Item | Motion · Timing · Purity · Reuse · Readability | Avg | Min | Verdict |
|---|---|---|---|---|
| T04 waveform + step sequencer | 94 · 88 · 100 · 74 · 84 | 88.0 | 74 | PASS → RECREATED (tier move is style-library's act) |
| T11 code-review UI + stamp slam | 74 · 78 · 100 · 72 · 78 | 80.4 | 72 | FAIL → IN PROGRESS, attempt 2 → practice |
| T07 permission-dialog gag | 86 · 78 · 96 · 68 · 72 | 80.0 | 68 | FAIL → IN PROGRESS, attempt 2 → practice |
| T05 pop-in collage grid | 76 · 74 · 97 · 62 · 78 | 77.4 | 62 | FAIL → IN PROGRESS, attempt 2 → practice |
| T23 comic chapter-map motif | 76 · 76 · 96 · 56 · 62 | 73.2 | 56 | FAIL → IN PROGRESS, attempt 2 → practice |

Wave: 1 PASS / 4 FAIL of 5 first attempts — a FAIL with its priced gap is a complete cycle (§10); no score hidden or rounded. Per-item cost: 1 bounded build + 5 Codex lens runs each, all 5 inside one wave window (parallel fan-out) — wave size 5 CONFIRMED a third time; no re-pricing change. Backlog after this wave: OWED first attempts remaining = T10, T09, T21, T14, T18, T20, T19 (7 items ≈ 1.4 waves).
Process incidents (recorded per item, not hidden): T11's first motion return (66, on the initial build) named three mechanical defects — fixed in-build, motion re-run = 74, superseded return preserved at codex/lens-motion-run1-superseded.md and excluded from the average (disclosed in its scores.md); T05's builder self-caught a grid/lyric collision pre-wave and cured it before Codex; T23 found the catalogue evidence frames ev/t132.jpg + ev/t171.jpg MISLABELED (neither shows the chapter map) and verified the technique firsthand from source stills — a catalogue-fidelity finding for digestion/style-library, recorded in T23's build-record.md (digest timestamps also run ≈4 s early for the 2:12 flash; the real flash sits at ≈136 s, inside the charged segment's tail); several Codex returns noted their own file tools failed and were captured via stdout, filed verbatim by the builders (T07, T23).

## Condense
- REUSABILITY IS THE WAVE'S STUCK LENS (pattern rule §9 — same defect class across techniques): reuse under the 70 floor on T23 (56), T05 (62), T07 (68), and the mechanism is one family — the CONFIG-completeness claim leaks: constants that shape the build live in code/CSS (T05 transition tracks + design spaces + an unused config key; T23 art palette/inscriptions in code + unvalidated URL overrides; T07 font floors overriding the measured fit; T04 a declared-but-unapplied panelBg + checkpoint table not rebuilt on duration-only overrides). The builders' own legs assert config-driven-ness from the CONFIG object's existence, not from a census of shaping constants outside it. CANDIDATE GUARD (filed, not promoted — HQ to price): a config-census mechanical leg before the wave — grep/count shaping literals (durations, sizes, colors) outside the CONFIG block per item, filed in build-record.md; a build whose outside-CONFIG shaping count is non-trivial returns to Execute before any Codex run. Citations exceed the two minimum: T05 scores.md (3 lenses converge), T23 lens-reusability.md, T07 lens-reusability.md, T04 scores.md.
- READABILITY IMPROVED under the Wave-2 lesson, not cured: this wave's readability (84 · 78 · 78 · 72 · 62) vs Wave 2's (28 · 48 · 64 · 64 · 86) — phone-first design + declared fit moved the lens, but T23's label-fit guarantee still fails at 360 px by the same floor-override mechanism as T07's — the candidate computed-fit guard from Wave 2's Condense remains the named not-yet-built judge; this wave adds two more citations (T23, T07) to it.
- Purity held at 96–100 across all 25 lens runs (third consecutive wave) — construction discipline DEMONSTRATED.
- Checkpoint-priced timing: timing scores this wave (88 · 78 · 78 · 74 · 76) — no timing score under 70 for the first time in a first-attempt wave; consistent with the CANDIDATE checkpoint note, status unchanged.
- Convergent cures filed per item in scores.md (T05 pop-scale override ×2 lenses + config completeness ×3; T11 counter lifecycle/absolute timeline ×2 + stamp culmination ×2; T07 highlight trajectory reset ×2; T23 label-fit at phone width ×2; T04 checkpoint-table coherence ×2).
- JUDGMENT LAYER: INCOMPLETE — mechanical guards demonstrated this wave (purity re-grep by seat 0 hits ×5, swap tests ×5, arithmetic re-computation from SCORE lines 25/25 match, segment binding via ffprobe ×5); five-lens wave demonstrated in full ×5; jev-prewave / jev-observe-exit / jev-plan-exit / codex-observe / codex-plan-review / codex-condense remain BUILT-NOT-FIRED / UNBUILT — SKIPPED-WITH-REASON printed per item; build charges carry. This cycle's named not-yet-built judge additions: the candidate config-census leg (above) + Wave 2's candidate computed-fit guard (still unbuilt, citations now ×4 items).

## Faithfulness trace
| Step | Disposition | Evidence |
|---|---|---|
| §1 Observe | EXECUTED per item | build-record.md in each artifact dir; evidence frames viewed firsthand per item reports (T23: frames found mislabeled, source stills substituted and recorded) |
| §2 Plan | EXECUTED per item | parameter tables + checklists + failure points in build-record.md; phase guards SKIPPED-WITH-REASON (unbuilt, printed) |
| §3 Execute | EXECUTED ×5 | segment.mp4 + recreation.html + comparison.html per artifact dir |
| §5 Verify legs 1–3 | EXECUTED ×5 | swap PASS (T04 20/20 logic harness; T05 measured pop reordering; T11 logic-level titles/stamp/timing/palette; T07 sequence + 360 px fit held; T23 titles/filled-count/timing/palette); purity 0 hits (seat re-grep ×5); comparison labeled + shared controls |
| §5 leg 4 wave | EXECUTED ×5 | codex/lens-*.md verbatim per item; seat recomputed averages/min from SCORE lines — all 25 match scores.md (T11 motion = post-fix re-run 74; superseded run-1 return preserved + disclosed) |
| §5 leg 3b / §9 Codex points | SKIPPED-WITH-REASON | jev-prewave + codex-condense UNBUILT/BUILT-NOT-FIRED per guards.md |
| Choice log | ≥2 alternatives per item construction choice in build-record.md — not SINGLE-PATH |
| Deviation register | T11 motion-lens re-run after in-build fix (superseded return preserved, disclosed); T23 catalogue-frame mislabeling worked around via source stills (recorded in its build-record); otherwise EMPTY-BY-CHECK (purity greps + arithmetic re-checks run by seat) |
| Evidence binding | scores.md + codex returns + segment ffprobe facts per artifact dir |
| Git corroboration | UNCORROBORATED-BY-LOCAL-GIT until JOB-14's sync extension lands lane files and is verified (standing print; scoped git status for this wave's paths returned no tracked changes — the lane tree is not git-tracked) |
| Size discipline (§8) | 5 items, one artifact directory each, parallel fan-out; no item held the wave hostage — T11's in-build fix completed inside its item |
