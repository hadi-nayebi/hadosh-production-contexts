# RUN — recreation Cycle 002 (T15 particle typography, attempt 1) · 2026-11-13

Phase: Verify (Codex wave) · Artifact: `hidden_files/study/recreations/T15-particle-typography/`
Charge: HQ.json hq-2026-11-13-002 + recreation queue head (owner-named).

## Observe (§1)
- Technique (packet #1, digest.md T15 + TECHNIQUES entry): silver particle streams flow across black; they condense into letterforms, hold readable, dissolve back to streams, re-form as the next phrase. Specimen @ 1:25–1:40: streams in by 1:25 (ev/t85), "WHAT I CAN DO!" condensing 1:28 (ev/t88, viewed firsthand at digestion Cycle-002 — phrase fully formed, dust still streaming above/below), follow-up at 1:34 (ev/t94); a binary-tree counter beat ("things: 1 -> 2 -> 8") sits inside the window as an interlude prop, not part of the typography mechanic itself.
- Sub-beats priced from the packet: form ≈ 3 s incl. stream travel · hold ≈ 2–3 s · dissolve ≈ 2 s · two phrase cycles across the 15 s window plus the interlude.
- Variables (§1.3): phrases + phrase count · font/weight · particle density (sample gap) + size · palette (silver range) · form/hold/dissolve/gap durations · wind drift · jitter · canvas size.
- Consumer: DLC/multilingual production — word animation + transition containers (the owner's vanishing-words device).

## Plan (§2)
- **Parameter table:** all variables above are CONFIG keys in recreation.html (defaults = specimen values); URL overrides (?phrases=…&holdMs=…&colorA=…) exist for the swap test.
- **Construction choice:** canvas 2D particle system with offscreen text sampling (targets = alpha-sampled letterform points; a persistent particle pool re-forms between phrases, so dissolve→form is one continuous stream, as in the original). Rejected: CSS keyframes on DOM text (cannot dissolve letterforms into streams) · SVG paths (requires traced letterforms — purity risk) · WebGL (overweight for one technique; canvas 2D carries it).
- **Scope split (§8):** the binary-tree interlude is NOT part of attempt 1 — the typography mechanic is the technique; the interlude is a separate prop (it belongs to T16's neighbourhood). Printed here so the omission is a decision, not a miss.
- **Verification plan:** swap test (words + holdMs + palette via the build's own URL overrides, driven at logic level in a node harness — no browser render is available from this session: no Chrome binary stands on this box and headless launch is a known trap, TOOLS.md) · purity grep + asset inventory · comparison sync by shared controls · Codex wave (four lenses).

## Execute (§3)
- `segment.mp4` — cut 1:24–1:40 from the archived source (16.0 s, 960 px wide, h264; 6,417,408 B), labeled ORIGINAL in the comparison only.
- `recreation.html` (7,678 B) — config-first canvas build: mulberry32 seeded RNG (same config = same choreography), phases FORM (ease-out converge with per-particle stagger) → HOLD (sub-pixel jitter, ambient dust drifts) → DISSOLVE (wind + velocity scatter) → GAP → next phrase; trail fade via translucent background fill, matching the original's stream smear.
- `comparison.html` (3,884 B) — side-by-side at matched 16:9, one control set (play/pause/restart postMessage-synced to the recreation's clock), a Swap-test button that reloads the recreation with VANISHING|WORDS + gold palette, labels + sync note + cycle arithmetic on the face; panels wrap to stacked on phone widths.

## Verify (§5, own legs — run this cycle)
1. **Swap test: PASS at logic level.** Node harness stubbing the canvas surface, running the recreation's real script: default phrase "LOOK WHAT I CAN DO!" → 5,060 letterform targets, all 5,060 particles assigned active; after CONFIG.phrases = ["VANISHING","WORDS"], "VANISHING" → 2,728 targets, all assigned — new words produce new letterforms and the pool re-forms on them. Palette/timing swaps ride the same config path (URL overrides implemented; exercised values: holdMs + colorA in the comparison's swap button). LIMIT printed: pixel-level render was not exercised from this session (no browser); the comparison page is the render surface for HQ/owner.
2. **Construction purity: PASS.** grep of recreation.html for `segment.mp4|source.mp4|<video|<img>|.jpg|.png|frames/` = zero hits; asset inventory = the file itself + zero external assets; specimen media appears only as comparison.html's labeled ORIGINAL video element.
3. **Syntax:** both files' scripts pass `node --check`.
4. **Comparison check:** durations — segment 16.0 s; recreation cycle ≈ 9.1 s for two phrases vs the original's ≈15 s window including its interlude; disclosed on the comparison face itself. Labels verified in the markup.
5. **Codex wave:** fired this cycle — returns filed verbatim in the artifact's `codex/`; verdict + arithmetic in `scores.md`.

## Condense (completed post-wave)
- **Wave result:** motion 68 · timing 82 · purity 100 · reuse 64 → avg 78.5 → **FAIL** (bar 85/70). Tier filed: IN PROGRESS. Full arithmetic + priced gap in the artifact's scores.md.
- **Demonstrated (promoted to INSTRUCTION as Amendment A1, this cycle):** two independent lenses (motion + reuse) found the same defect — surplus particles freeze during FORM. Convergent findings across lenses are the wave's signal amplifier: when two lenses name one defect, it is priced as the attempt's primary cure. Added to §5 as a reading rule.
- **Demonstrated:** the purity lens at 100 confirms runtime text sampling is the lawful construction for typography techniques — letterform targets from config text, never specimen geometry. Recorded in scores.md per the return's BODY-WRITE.
- **Candidate:** original-tempo presets as config (timing BODY-WRITE) — attempt 2 implements it as cure #5 in scores.md; promotion waits on attempt 2's timing score.

## Faithfulness trace
### Trace table
| Step | Disposition | Reason | Evidence |
|---|---|---|---|
| §1 Observe | EXECUTED | — | Observe above (packet + frames firsthand at digestion Cycle-002) |
| §2 Plan | EXECUTED | — | parameter table + construction choice + scope split above |
| §3 Execute | EXECUTED | — | three artifacts on disk (sizes in Execute) |
| §5 Verify | EXECUTED | — | own legs 1–4 above; Codex wave = leg 5, returns in artifact codex/ |
| §9 Condense | EXECUTED | — | post-wave note appended below |

### Choice log
| # | Decision | Alternatives | Chosen | Why | Authority |
|---|---|---|---|---|---|
| C1 | Interlude (binary tree) in attempt 1 | include · exclude | exclude | the technique is the typography; the tree is a neighbour prop — §8 scope discipline | INSTRUCTION §8 |
| C2 | Rendering verification | claim visual pass from code · logic-level test + printed limit | logic-level + limit | no browser render exists in this session; claiming pixels unseen would be a false claim | artifact-is-the-source doctrine |

### Deviation register
| # | Class | What happened | Handling | § | Recurrence |
|---|---|---|---|---|---|
| D1 | GATE-FAIL (partial) | §5.1 swap test could not be exercised at pixel level from this session (no browser) | logic-level harness substituted + limit printed on this record and in the HQ report; comparison page stands as the render surface | §5.1 | 1 |

### Evidence binding
segment.mp4 6,417,408 B / 16.000 s (ffprobe) · recreation.html 7,678 B · comparison.html 3,884 B · swap-test output: {defaultTargets 5060, activeDefault 5060, swappedTargets 2728, activeSwapped 2728} · purity grep zero hits · scores.md (post-wave).

### Git corroboration
UNCORROBORATED-BY-LOCAL-GIT — lane board lane-2026-11-13-003 (segment.mp4 bulk media stays local regardless; scores.md + HTML are sync-class records once JOB-14's extension lands).

### Size discipline
One technique, core mechanic only (interlude split out at Plan) — inside norm.
