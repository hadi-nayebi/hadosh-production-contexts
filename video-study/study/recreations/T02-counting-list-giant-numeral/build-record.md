# T02 — Counting list + giant numeral · BUILD RECORD

Technique: T02 (packet P1, "Look What I Can Do" @aditazzz.music) · Cycle 004 Wave 2 · Attempt 1 · 2026-11-14
Artifact dir: `hidden_files/study/recreations/T02-counting-list-giant-numeral/`
Consumer: vocabulary progress visual (per wave RUN.md) — a counting/escalation visual for production containers.

## §1 Observe (viewed firsthand, this run)

- TECHNIQUES.md T02: "list types line by line while a huge numeral climbs in sync; lands on a caption with the zero punchline." Feeds: word animation · diagram — P1 @ 0:14–0:21 — ev/t17.jpg, ev/t20.jpg.
- digest.md T02: fake directory listing ('ls ~/Original Music') types out line by line, each line a joke project name; beside it a huge orange numeral climbs in sync with the list's growth (20 projects at t=0:17, 37 at t=0:20); lands on caption '39 projects - 0 video editors'. Why: quantity becomes visible proof; the numeral is a progress bar for the brag; the zero in the final caption is the punchline.
- Evidence frames viewed firsthand this run (muse.read, both):
  - `ev/t17.jpg` (source 0:17): dark terminal; header `> ls ~/Original\ Music`; left column of green-check (✓) monospace lines ending in `/`, 13 visible, first visible "Deployed on a Friday (Fable)/" through "Mirror, Mirror, Look at Us/" — i.e. the listing has scrolled, earlier (alphabetically prior) lines are above the viewport. Right: giant orange "20" with white "projects" beneath.
  - `ev/t20.jpg` (source 0:20): same layout, 13 visible lines from "Ragnarök or Reach for Mars/" through "Thirsty (The Data Center Next Door)/"; giant orange "37" + "projects".
  - Derived facts: listing is alphabetical; viewport holds ~13 lines; visible-at-20 window = lines 8–20, visible-at-37 window = lines 25–37 (consistent alphabetical scroll); numeral = total lines revealed so far, not visible count.
- Source: source.mp4 1916×1078, 30 fps, 198.413 s (ffprobe, vp9+aac). Segment cut §3: window 0:13.5–0:21.5 (catalogue 0:14–0:21 ± 0.5 s handles), re-encoded h264/yuv420p + aac → segment.mp4 (1916×1078, 8.000 s, 1,903,965 bytes).
- Checkpoint table (TIMING LAW — lane hand-off, checkpoint-priced timing; attribution caveat: checkpoint pricing is a bundled cure family, applied here and labeled as such, per RUN.md lane-2026-11-14-001):

  | Window time | Count | Source |
  |---|---|---|
  | 0 ms | 0 | window start (0:14) |
  | ~3000 ms | 20 | ev/t17.jpg at source 0:17 |
  | ~6000 ms | 37 | ev/t20.jpg at source 0:20 |
  | ~7000 ms | 39 + caption | digest: sequence lands on '39 projects - 0 video editors' at window end |

- Variables (§1.3): directory command text · list lines (content + count) · checkpoint table (times + counts) · final count · caption text + caption time · numeral color/size/label · visible-lines window · palette (bg/text/check/prompt/caption/zero) · numeral pulse scale/duration · total duration · prompt typing span.
- Guards at Observe/Plan: jev-observe-exit / jev-plan-exit / codex-observe / codex-plan-review — SKIPPED-WITH-REASON: phase Jev/Codex guards are BUILT-NOT-FIRED / UNBUILT in this seat (per wave RUN.md + guards.md); the five-lens scoring wave is the armed deliverable gate.

## §2 Plan

### CONFIG parameter table (every variable = named key; specimen value = default)

| Key | Type | Default (specimen) | Role |
|---|---|---|---|
| `directoryCommand` | string | `ls ~/Original\ Music` | the fake listing command (subject text) |
| `lines` | string[39] | frame-evidenced names at positions 8–20 & 25–37; alphabetical joke names filling 1–7, 21–24, 38–39 | listing lines in reveal order |
| `finalCount` | number | `39` | validated against lines.length at load |
| `checkpoints` | {timeMs,count}[] | `0/0 · 3000/20 · 6000/37 · 7000/39` | measured schedule anchors (TIMING LAW) |
| `captionAtMs` | number | `7000` | landing beat |
| `captionText` | string | `39 projects - 0 video editors` | punchline caption (subject text) |
| `totalDurationMs` | number | `8000` | window incl. caption hold |
| `visibleLines` | number | `13` | listing viewport height (frame-evidenced) |
| `numeralColor` | string | `#f59e2c` | giant numeral orange |
| `numeralLabel` | string | `projects` | word under the numeral |
| `numeralSizeVmin` | number | `34` | numeral size |
| `pulseScale` / `pulseMs` | number | `1.055` / `130` | numeral pop per increment |
| `palette` | object | bg `#050505`, text `#d9d9d9`, check `#43b581`, prompt `#e8e8e8`, caption `#ffffff`, zero `#f59e2c` | all colors |
| `promptTypeMs` | number | `260` | command typing span |

Plus URL overrides (`?color= ?caption= ?lines= ?speed= ?checkpoint2=`) for swap test / production reuse.

### Construction choice
DOM terminal listing + checkpoint-driven numeral (chosen): lines are DOM rows revealed by a pure checkpoint schedule function; the numeral IS the revealed-line count, so list↔numeral sync holds by construction, and the listing scrolls by hiding rows above the 13-line window (matching the frames' scrolled state).
Rejected alternatives: canvas rendering (text legibility + DOM simplicity lose, no gain for a text technique) · CSS keyframes per line (39 hardcoded animations = traced, not parameterized; checkpoint table impossible) · single global typing cadence (violates the TIMING LAW — checkpoints are non-uniform: 20 lines/3 s, then 17/3 s, then 2/1 s).

### Verification plan
Swap test (logic level, node harness over the delimited pure SCHEDULE block + CONFIG): different words, one changed timing (checkpoint2 3000→2500), one changed palette value (numeralColor → #22ccff). Purity grep + asset inventory. Comparison structural check (labels, one control set, phone stacking, duration match). Five-lens Codex wave, bar avg ≥85 AND min ≥70.

### Failure points priced
Convergent freeze (n/a — no particle field) · intensity collapse (numeral vs list contrast: orange on near-black, high) · phrase overlap (n/a — single sequence) · fitting limits (long line at phone width may overflow the 56% column — nowrap; priced as a readability risk for the wave) · render-proof limitation (no Chrome binary in this seat: verification is logic-level + comparison page as render surface, T15/Wave-1 precedent).

## §3 Execute notes
- Segment: first ffmpeg attempt was killed mid-write by a service restart (moov atom missing, ffprobe "Invalid data"); re-encoded clean and ffprobe-verified (h264, 1916×1078, 8.000 s). The corrupt first cut was overwritten, never filed as evidence.
- recreation.html: one self-contained file, CONFIG at top, no external assets. Clock is drivable (window.T02 + postMessage play/pause/restart/seek) so comparison.html can slave it to the video.
- comparison.html: ORIGINAL (segment.mp4) + live recreation side by side at matched 16:9, one synchronized control set, recreation seek-slaved to video currentTime − 500 ms (the segment's pre-window handle), labels per §3.3, phone-width stacking via max-width 700px grid collapse, 44px-min control buttons.

## §5 Verify — own legs (before Codex)
- **Leg 1 — Swap test: PASS (after one fix).** First harness run FAILED 2 checks: the pure helper `lineTimeMs` returned the final checkpoint time for indices beyond the final count, so `countAtMs` over-counted past 39. Fixed in the build (returns Infinity beyond the final count) and re-ran: **PASS 8/8** — defaults hit 20@3000 / 37@6000 / 39@7000 exactly with correct boundaries (19@2999, 36@5999, 38@6999), count caps at 39, monotonic; swapped words ("Zebra Launch Party/", "Final Swap Tune/") still complete at 39; swapped timing checkpoint2=2500 moves the 20-boundary to 2500 exactly; swapped palette numeralColor=#22ccff stored. (The page render path caps at the 39 DOM rows regardless; the defect lived in the schedule helper the harness — and any production consumer — would reuse, so it was a real fix, not a test artifact.)
- **Leg 2 — Purity: PASS.** grep of recreation.html for `segment.mp4|source.mp4|<video|<img>|.jpg|.png|frames/` → **zero hits** (an initial comment mention of an evidence-frame filename was reworded so the grep is clean). Asset inventory: recreation.html loads NOTHING external — no assets at all; all content is code + CONFIG text. segment.mp4 appears only in comparison.html, labeled ORIGINAL.
- **Leg 3 — Comparison check: PASS (structural).** Both sides 16:9 at matched width; one control set (Play both / Pause both / Restart both) drives video + recreation (postMessage + 250 ms seek-slave); durations matched (segment 8.000 s; recreation totalDurationMs 8000); labels exact per §3.3; phone stacking + reachable controls verified in source. Pixel render not exercisable from this seat (no Chrome binary) — comparison page is the render surface.
- **Leg 3b — Pre-wave Jev gate: SKIPPED-WITH-REASON** — jev-prewave is UNBUILT in this seat (INSTRUCTION judgment-layer founding print); the five-lens Codex wave is the armed deliverable gate and fires next.

## §6 Wave outcome (pointer)
Five-lens Codex wave fired after legs 1–3: motion 86 · timing 94 · purity 97 · reusability 54 · readability 48 → average 75.8, min 48 → **FAIL** (both bar terms). Full arithmetic, priced gaps, and convergent findings (A1: numeral pulse — motion+readability; caption innerHTML — purity+reusability) in `scores.md`. Tier: IN PROGRESS; attempt 2 routes to practice.
