# Plan — T100 pencil-check task sting · practice Cycle 023 Wave 22 · attempt 2

**Item:** T100 — Pencil-check task sting (School of Motion 'Six Essential Motion Design Transitions', packet P5 / digest T02, technique window 3–7 s)
**Artifact:** `hidden_files/study/recreations/T100-pencil-check-task-sting/`
**Prior state (attempt 1, recreation Cycle 016 Wave 14):** avg **84.0** · motion 74 · timing 78 · purity 100 · reusability 82 · readability 86 · min 74. Bound build sha256 `a8c80b2a674e476c06789e0cd5046629a126be38f6ce8e34c71aa2d78b925fab`.
**Bar:** avg ≥ 85 AND no lens < 70. Attempt 1 verdict FAIL (average only) — tier IN PROGRESS.
**Practice history:** `verdict-history.md` contains **zero T100 rows** (verified firsthand this plan, count 0) — this is the first practice attempt; no prior practice delta or WHY exists.
**Schedule basis honesty (standing):** attempt 1's basis was `t=0 ALLOCATION` (Amendment A7) — printed as allocation, never as measured. This plan keeps that honesty throughout: every duration in §4's table is ALLOCATION; only event ORDER and frame contents are claimed as measured, from identifiable segment evidence (§4).
**Plan-only:** this file modifies no recreation source, builds nothing, scores nothing.

## Probe record (bounded_probe_discipline — every probe capped in code ≤6000 chars aggregate)

Probes run, each foreground, one named target, `head -c 6000` / sliced reads in code: (1) practice INSTRUCTION.md heading map + §1–§2 slices; (2) `guards/jev-plan-exit.md` §2 (incl. §2.4 standing failure points a–g); (3) artifact directory inventory (names+sizes only); (4) `scores.md` in full (3,961 chars); (5) final Codex lens returns `codex/lens-{motion,timing,purity,reusability,readability}.md` in full; (6) interim returns `codex/lens-*-interim1.md` in full; (7) `codex/codex-observe.md` + `codex/codex-plan-review.md` in full; (8) `fit-table.md` + `config-census.md` in full; (9) `comparison.html` in full; (10) `recreation.html` in full (two slices); (11) `build-record.md` in full (three slices, incl. measured frame table); (12) `jev-prewave.md` head; (13) packet digest `video-digests/2026-11-14-som-six-transitions/digest.md` T02 section (one wider file-scan probe backgrounded once and completed, 121 chars output, no truncation/discarded result used as evidence — the T02 text was then read by a capped targeted probe); (14) `verdict-history.md` T100 count + head; (15) TECHNIQUES.md T100 register line; (16) contrast recomputation (script, pencil candidates vs field `#4148c0`). **Breaches: 0 discarded/truncated results relied on.**

---

## 1. Cure inventory — every priced finding from attempt-1 returns, convergent-lens first

**Owner cures headed for this item: NONE — verified.** `scores.md` (attempt 1) carries no owner-cure header; its "Priced cures for the next attempt (practice job)" list is the governing cure list, and it is convergent/single-lens Codex pricing only. The fleet Owner Cure 1 (intensity separation ≥4.5:1) and Owner Cure 2 (phase exclusivity) were already applied inside attempt 1 (tick/burst `#3df063` = 4.75:1 on field; exclusive phase machine) and bind attempt 2 as guards, not as new cures — every new color introduced by §3 must re-satisfy Cure 1 by measurement, and phase exclusivity must survive the restructure.

### Convergent cures (two lenses, or scores.md's convergent heads — outrank single-lens)

**C1 — Motion (−26) + Timing (−22), convergent head: the sting's event sequence and tempo are the extraction's fidelity debt.** Scores.md cure 1, verbatim substance: restore top-right entry, curved tick drawn by the travelling pencil, checkbox exiting after the check, punctuation as two successive beats (red then green) instead of one radial burst; shorten the pencil beat (measured presence ≈3.5–4.5 s) and cut the 77.9%-of-cycle static hold. Priced components:
- C1a · motion **−9**: top-left entry reverses the measured top-right movement.
- C1b · motion **−7**: straight angular check replaces the measured curved stroke.
- C1c · motion **−7**: fixed-position radial burst marks scale outward locally; the separate curved-arrow and scattered-confetti movement is omitted.
- C1d · motion **−3**: persistent checkbox + held checked state change the measured disappearance sequence.
- C1e · timing **−12**: stretched pencil beat — ENTER+DRAW occupies 2,300 ms against sampled pencil presence ≈3.5–4.0 s replaced by punctuation at 4.5 s (segment coordinates; see §4 re-observation).
- C1f · timing **−6**: punctuation rhythm compressed — distinct red (4.5 s) and green (5.0 s) beats collapsed into one uninterrupted 800 ms burst.
- C1g · timing **−4** (interim timing also −7 on the same fact): extended static tail — HOLD 10,900 ms = 77.9% of the 14,000 ms cycle; the measured source proceeds into cursor/transition beats instead.

**C2 — Readability (−14) + Motion (related), convergent head: pencil contrast and burst onset.** Scores.md cure 2:
- C2a · readability **−10** (interim −8): pencil contrast **1.96:1** (`#2b2b2b` on `#4148c0`, recomputed this plan = 1.96 ✓) reduces recognition during ENTER/DRAW; measured pencil is yellow. Cure: lighten the pencil fill.
- C2b · readability **−4**: burst initial marks only **4.8×1.5 px** (start scale 0.3 × 16×5 px). Cure: raise burst start scale/thickness.
- Motion relation: the same weak silhouette and fragile onset are the marks motion must carry; C2's recovery is also priced into motion's target in §2 (bundled, not double-counted as a separate motion cure).

**C3 — Reusability (−18), scores.md cure 3 (single-lens lens, but convergent with the interim wave — see below):**
- C3a · reusability **−8**: coupled geometry remains manual — changing `tick.path` requires hand-matching `geom.pencilTipX/Y` to its start; moving the checkbox requires coordinating absolute tick coordinates. Cure: derive ENTER landing from `tick.path`, anchor tick geometry to the checkbox.
- C3b · reusability **−4**: swap coverage narrow — recorded swap proved field color, burst count, draw duration only; not a different path, entry corner, pencil shape, or checkbox layout.
- C3c · reusability **−3**: stage geometry partly fixed outside CONFIG — SVG `viewBox="0 0 360 360"` and field rect 360×360 hardcoded. Cure: derive viewBox (and field rect) from CONFIG.
- C3d · reusability **−3**: timing controls lack a safe contract — `endHoldMs` is inert/documentary; no validation rejects phase totals exceeding `cycleMs`. Cure: remove or activate `endHoldMs`; validate phase totals against `cycleMs`.

### Single-lens findings not already headed above
- Timing's remaining points are exactly C1e+C1f+C1g (−22 = timing's full deduction). Motion's remaining points are exactly C1a–C1d (−26 = motion's full deduction). Readability's are exactly C2a+C2b (−14). Reusability's are exactly C3a–C3d (−18). **No priced point in any final return is unmapped.**
- **Purity 100: no cure required.** Guard only — every §3 change must keep purity at 100 (no specimen media, no tracing; arrows/confetti are geometric constructions from CONFIG, never traced from frames).

### Interim-wave findings (fired on interim build `40972611…`, cured pre-filing, NOT in the final average — carried as regression guards, not cures)
- **≈48 px ENTER→DRAW jump** (interim motion 62, major; interim timing −3): ENTER ended at tick END (205,181), DRAW began at tick START (160,198). Cured in attempt 1 by landing at (160,198). Attempt 2's structural cure is C3a (landing derived from the path) — the jump must be impossible by construction, and §7 asserts it mechanically on default AND swapped paths.
- Interim readability **−2**: opaque pencil renders above tick/checkbox, locally obscuring them during DRAW (final return did not re-price it; hold resolves it). Not a priced final cure — carried into §7's occlusion-pair enumeration as a watch pair.
- Interim reusability −7/−5/−3/−3 map onto C3a/C3c/C3d (same defects, pre-cure pricing) — no additional cure.

### Attempt-1 plan-gate findings already disposed (bind attempt 2 as standing guards)
- codex-plan-review (REVISE, all disposed): burst marks independently allocated per cycle, rebuilt at loop boundary, lifetime = burst phase only (must survive C1c's arrow/confetti rebuild); fixed-total cycle invariant with residual hold (interacts with C1g/C3d — see §3 Stage 3 decision); predicted minimum priced (this plan §2); extraction honesty (attempt 2 *reverses* the attempt-1 extraction deviations toward the measured sequence — the deviations list in attempt 1's build-record ALLOCATION section is the checklist C1/C2 close out).
- codex-observe (CONFIRMED-WITH-GAPS): the cited packet frame `ev/5.0-pencil-checkbox.jpg` in fact shows the green arrow/confetti beat, not the pencil — attempt 1 closed this by firsthand frames; §4 re-uses those frames, and no plan row may cite the packet frame as pencil evidence.

---

## 2. Delta target — prior avg 84.0 + specific lens movements per cure

| Lens | Prior | C1 | C2 | C3 | Target | Movement |
|---|---|---|---|---|---|---|
| motion | 74 | +11 | +3 (bundled visibility) | — | **88** | +14 |
| timing | 78 | +10 | — | — | **88** | +10 |
| purity | 100 | 0 (guard) | 0 | 0 | **100** | 0 |
| reusability | 82 | — | — | +11 | **93** | +11 |
| readability | 86 | — | +7 | — | **93** | +7 |
| **Average** | **84.0** | | | | **92.4** | **+8.4** |

Arithmetic: (88+88+100+93+93) = 462 · 462/5 = **92.4**. Discount honesty: full priced recovery would be motion +26, timing +22, reusability +18, readability +14 (avg 100.0) — the target claims roughly half of each, pricing execution risk (curved/distressed fidelity, the cycle-basis dispute in §3 Stage 3, new-color contrast risk). **Minimum beating outcome** is any avg > 84.0 with the PASS bar at ≥85 and min ≥70; the forecast above is the plan's aim, not the floor. Attribution prints **BUNDLED** unless the §3 staged checkpoints isolate a stage's effect (A-C010-1a).

---

## 3. Cure plan — construction change per cure, staged checkpoints

Staging order is deliberate: geometry derivation first (it makes C1's continuity structural), then the gesture, then the rhythm, then visibility. **After each stage: a create-once checkpoint (CONTENT copy of the working source + that stage's own-check output), checkpoint inode ≠ working-file inode asserted, sha frozen at filing (A-C010-1a). Gate A-C012-4 applies at Plan close / Execute open:** Execute may not open unless RUN.md §2 names the skeleton entry id + heartbeat beat and both are read back at that moment (board parses with exactly one entry of that id; heartbeat parses with the beat in its planned state); a missing/failed read-back blocks Execute and prints D-SKELETON with consumer (the seat's close) and consequence (cycle closes INCOMPLETE).

### Stage 1 — C3 (reusability core; also the anti-jump structural cure)
- **C3a:** delete `geom.pencilTipX/Y` as hand-matched inputs. ENTER landing = `tickPath.getPointAtLength(0)` computed at build; DRAW already travels `getPointAtLength(p·len)` — ENTER and DRAW then share one source point by construction. Tick geometry anchored to the checkbox: `tick.path` expressed as offsets from the checkbox centre (`geom.checkboxCx/Cy`) — a CONFIG `tick` defined by relative control points, with the absolute path derived at build; moving the checkbox moves the tick.
- **C3c:** `viewBox` and field-rect width/height set at build from CONFIG stage geometry (`stage.width` × `geom.stageH`); no `360 360` literal remains in markup.
- **C3d:** `endHoldMs` **removed** (the residual-hold derivation is the single timing contract; a documentary duplicate is the defect). Validation at startup: enter+draw+punct1+punct2 (+ any active phase) totals are checked against `cycleMs`; an invalid total is rejected visibly (console + a named validation state in the build record's terms), never silently truncating a phase or deleting the hold.
- **C3b (construction half):** the swap surface is widened by Stages 1–2 themselves (path, entry corner, pencil shape, checkbox layout all become single-point CONFIG changes); the *proof* half is a §7 Verify item.
- Checkpoint 1: own-checks = landing-equals-path-start assertion (default path), viewBox-derivation assertion, validation accepts default totals / rejects an over-total case.

### Stage 2 — C1a + C1b + C1d (the gesture and the box)
- **C1a:** `pencil.enterFrom: "top-right"` (measured; §4) — the existing corner-sign reader already consumes this key; entry vector signs flip, magnitude stays CONFIG (`geom.pencilEnterDx/Dy`).
- **C1b:** `tick.path` becomes a **curved** stroke (cubic/quadratic segments, descending-left curve per the 4.0 s frame) drawn by the travelling pencil — the existing dashoffset + `getPointAtLength` coupling carries it unchanged; the pencil tip follows the same curved path the stroke reveals.
- **C1d:** checkbox **exits after the check begins**: box opacity/visibility is phase-bound inside DRAW — present at ENTER and at tick onset (3.5 s frame), gone before DRAW completes (4.0 s frame: box no longer visible while the pencil still draws). Construction: a CONFIG box-exit point (fraction of draw progress, ALLOCATION — see §4) at which the box fades/cuts out; the tick persists after the box exits. HOLD therefore no longer shows a persistent box by default — the held state is the completed curved tick (plus Stage-3 punctuation resolved), which is what the measured sequence supports.
- Checkpoint 2: own-checks = ENTER-end point == DRAW-start point on the curved path (0 px discontinuity asserted, not eyeballed); box visible at draw p=0, absent at draw p=1; pencil-tip-on-path sampled at ≥5 draw progresses.

### Stage 3 — C1c + C1e + C1f + C1g (punctuation, tempo, hold) — EVENT-SEQUENCE RESTRUCTURE
- **C1c+C1f:** the single radial BURST phase is replaced by **two successive punctuation beats**: beat 1 RED, beat 2 GREEN, each a curved-arrow path + scattered confetti rects (all geometric, CONFIG-driven: arrow path, confetti count/spread/size, per-beat color). The radial-mark generator is retired or reduced to the confetti scatter under per-beat CONFIG. Per-beat lifetime/reset follows attempt 1's disposed plan-review rule (independently allocated, rebuilt per cycle, no remnants in hold or across boundaries). Both beats' colors are measured against the field for Owner Cure 1 (≥4.5:1) before the wave; a beat color that cannot reach 4.5:1 on the field is lightened within its hue family and the measured pair filed (the attempt-1 tick precedent).
- **C1e:** pencil beat shortened: ENTER+DRAW allocation 2,300 ms → **1,500 ms** (800 + 700, §4 table — ALLOCATION, scaled from the measured relative spacing, not a measured duration).
- **C1g + cycle decision (premise, printed for the lenses under A-C010-3):** attempt 1's timing return said "preserve the exact cycle"; its own −4 priced the 77.9% hold that the 14,000 ms cycle forces. This plan resolves the conflict **against the preserved-cycle basis and for the segment basis**: `cycleMs` shortens to **6,000 ms ALLOCATION**, hold becomes the residual 3,200 ms = 53.3% (from 77.9%). Both bases + this dispute + the scoring risk (a lens may price the cycle change itself) are printed in the neutral facts fed to the scoring lenses; the comparison page's interface changes (recreation cycle ≠ 14 s segment) and is re-pointed only under §6's rule, with the change disclosed in the build record. If the Plan-review gate returns against the cycle change, the fallback is 14,000 ms with the same active beats and the hold deduction knowingly re-accepted — that fallback is a printed deviation, never a silent swap.
- Checkpoint 3: own-checks = phase-total validation under the new table; beat exclusivity (red beat fully cleared before green beat opens; no confetti remnant at hold); hold fraction recomputed from CONFIG (= 53.3% at defaults).

### Stage 4 — C2 (visibility)
- **C2a:** pencil fill lightened to a **yellow** in the measured family. Candidate measured this plan: `#ffd94d` = **5.25:1** on `#4148c0` (also `#ffe066` = 5.53:1; the attempt-1 `#2b2b2b` recomputes to the priced 1.96:1). Execute binds one yellow, files its measured pair, and asserts ≥4.5:1 (Owner Cure 1) in the own-check suite — including under the §7 swap field, per attempt 1's precedent of measuring both fields.
- **C2b:** burst/confetti onset raised: start scale and thickness move into CONFIG per beat with a starting mark ≥ the priced failure inverted — initial marks must exceed 4.8×1.5 px by a named margin (plan floor: start scale ≥0.6 of full mark size AND base thickness ≥3 px, both CONFIG values, asserted by measurement in the own-check suite, not by the constants' names).
- **Tick color (attached to C1b, priced here):** the measured tick is **cyan**, attempt 1's is green. Stage 2's curved tick takes a cyan-family stroke **only if** its measured contrast on the field is ≥4.5:1, filed as a measured pair; otherwise the green `#3df063` (4.75:1, already passing) is retained and the color deviation is printed as a deliberate deferral in §3's deferral list — form (curved) is the priced cure (−7), color is not separately priced in any final return.
- Checkpoint 4: own-checks = all contrast pairs measured (pencil, tick, beat-1, beat-2, checkbox vs field, default + swap field); onset mark dimensions measured at beat p=0.

### Deferrals — deliberately NOT attempted, risk priced under every lens (A-C009-3)
| # | Deferred | Reason | Motion | Timing | Purity | Reuse | Readability |
|---|---|---|---|---|---|---|---|
| D1 | Cursor beat (5.5 s) + gradient transition-out (6.0 s) as full beats | Out of the sting's device scope (cursor/timeline are the following devices); scores.md cure 1 does not name them | −0 to −3: disappearance sequence still ends earlier than the source's | −0 to −4: part of C1g's priced basis ("proceeds into cursor and transition beats") may re-price despite the shortened cycle | 0 (deferral protects purity) | 0 | 0 |
| D2 | Distressed/grunge texture of the measured arrows/confetti | Texture by tracing would breach purity; procedural distress is unproven machinery | −0 to −3: flat geometric arrow may price as simplified vs the distressed original | 0 | 0 (protects the 100) | 0 | −0 to −2: flat marks read cleaner but less faithful |
| D3 | Sub-0.25 s timing precision (finer onset/exit boundaries) | Attempt-1 evidence is 0.5 s-step frames; Execute re-observes at finer steps around 3.25–5.25 s (§4) but exact boundaries remain sampling-limited | −0 to −2 | −0 to −5 if allocation spacing misjudges a boundary | 0 | 0 | 0 |
| D4 | Phone-size PIXEL verification | No browser binary on this seat (attempt-1 PIXEL-UNVERIFIED standing fact); logic-level (node harness) + comparison page as render surface | pixel claims unverified — limitation printed, never a scoring exemption | same | 0 | 0 | pixel claims unverified — limitation printed |
| D5 | Exact sampled cyan hex for the tick (if the ≥4.5:1 gate fails for cyan candidates) | See Stage 4 tick-color rule | −0 to −2 (hue fidelity) | 0 | 0 | 0 | 0 if the retained green's 4.75:1 stands |

No other cure or priced finding is deferred. Anything absent from §3's stages AND this table is a silent drop — none is intended; the Plan-exit gate prices this claim.

---

## 4. Anchor re-observation (A-C006-1) + observed event sequence (A-C008-1) + plan tables as premises (A-C020-1, A-C020-2)

**Time origin:** segment coordinates = source coordinates (`segment.mp4` is the source's 0–14 s cut, ffprobe 14.000 s, attempt-1 build record). Evidence: attempt-1 builder's firsthand frame table (0.5 s steps, frames filed under the artifact's `frames/`) — identifiable evidence, not an observation narrative alone. The packet digest's T02 text conflicts with these frames on entry direction; **frames govern** (A-C006-1: conflict resolved against segment evidence, filed here).

### Observed event sequence (segment evidence — the premise C1 restructures toward)
| Seg t | Frame shows | Event |
|---|---|---|
| 3.0 s | Teal wipe + red triangle + white stars on indigo (previous scene exiting) | neither device |
| 3.5 s | Large **yellow** pencil, diagonal from **TOP-RIGHT**, tip inside a white square checkbox at centre; small **cyan** tick beginning inside the box | pencil + checkbox present; tick onset |
| 4.0 s | Pencil (top-right) drawing a cyan **CURVED** check descending left; **checkbox no longer visible** | box exits during the draw |
| 4.5 s | **Red** distressed curved arrow + red confetti on indigo; no pencil/box | punctuation beat 1 (red) |
| 5.0 s | **Green** distressed curved arrow + green confetti on indigo (the packet's mis-cited "pencil-checkbox" frame) | punctuation beat 2 (green) |
| 5.5 s | White cursor arrow alone on indigo | cursor beat (deferred, D1) |
| 6.0 s | Purple-pink gradient field + white cursor | transition out (deferred, D1) |
| 6.5 s | Timeline / "QUICK TIPS" scene | next device (out of scope) |

Relative spacing from pencil onset (3.5 s = relative 0): tick drawing underway +0.5 · pencil gone / red beat +1.0 · green beat +1.5 · cursor +2.0. Pencil presence ≈3.5–4.5 s segment span (≈1.0 s between first and last pencil frames at 0.5 s sampling; the timing lens's "presence around 3.5–4.0, replacement at 4.5" is consistent with this at sampling granularity — D3 prices the residual uncertainty).

### Quantitative anchor re-observation
| Anchor | Priced/attempt-1 value | Segment evidence | Resolution |
|---|---|---|---|
| Entry direction | digest "top-left"; attempt 1 built top-left | frames 3.5/4.0: top-right | **top-right governs** (C1a) |
| Pencil color | attempt 1 `#2b2b2b`, 1.96:1 | frames: yellow pencil | yellow family, ≥4.5:1 measured (C2a) |
| Tick form/color | attempt 1 straight, green `#3df063` | frames: curved, cyan | curved governs (C1b); cyan conditional on ≥4.5:1 (Stage 4) |
| Checkbox persistence | attempt 1 persists through hold | visible ≈3.5 s only; gone by 4.0 s | box exits during draw (C1d) |
| Punctuation | attempt 1 one 800 ms radial burst | two successive beats, red 4.5 → green 5.0, curved arrow + confetti | two beats govern (C1c/C1f) |
| Pencil beat | attempt 1 ENTER+DRAW 2,300 ms | presence span ≈1.0–1.5 s relative (sampling-limited) | shortened allocation 1,500 ms (C1e) |
| Hold share | 10,900/14,000 = 77.9% | source proceeds to cursor/transition by 5.5–6.0 s | cycle 6,000 allocation, hold 53.3% (C1g, dispute printed) |
| ENTER→DRAW continuity | interim jump ≈48 px: (205,181)→(160,198) | DRAW starts at the tick's first point | landing derived from path (C3a); 0 px asserted |
| Burst onset size | 4.8×1.5 px priced | — (build measurement, not segment) | Stage 4 floor (C2b) |

### Attempt-2 phase table — PREMISE (A-C020-1: every row cites its evidence or prints ALLOCATION)
| Phase | Duration | Evidence / basis |
|---|---|---|
| ENTER (top-right → tick start) | 800 ms | ORDER+DIRECTION measured (3.5 s frame); duration **ALLOCATION** |
| DRAW (curved tick by travelling pencil; box exits mid-draw) | 700 ms | ORDER+FORM measured (3.5→4.0 s frames); box-exit fraction and duration **ALLOCATION** |
| PUNCT-1 (red curved arrow + confetti) | 650 ms | ORDER+COLOR measured (4.5 s frame); duration **ALLOCATION** |
| PUNCT-2 (green curved arrow + confetti) | 650 ms | ORDER+COLOR measured (5.0 s frame); duration **ALLOCATION** |
| HOLD (completed tick state) | 3,200 ms residual | **ALLOCATION** — residual of `cycleMs` 6,000; no measured hold exists in the window |
| **Cycle** | **6,000 ms** | **ALLOCATION** (`t=0`-style re-based basis, printed as allocation, never as measured) |

**A-C020-2 presented-endpoint:** no hold/pause in this plan is zero or below one frame interval (hold = 3,200 ms) — the amendment's trigger is **ruled out with this reason**. As a belt-and-braces Verify item (§7), the own-check suite still asserts the final held state is *presented* (painted frame at the hold state) before the loop reset consumes it; logical phase selection alone is not accepted as presentation evidence.

---

## 5. Preservation plan (before any mutation)

- **Complete prior-evidence inventory (A-C010-1b)** — inventoried + hashed before Execute touches anything: `recreation.html` · `comparison.html` · `scores.md` · `build-record.md` · `fit-table.md` · `config-census.md` · `jev-prewave.md` · `segment.mp4` (**the ORIGINAL asset `comparison.html` references**) · `frames/` (15 frame files f-0.0…f-12.0) · `codex/` complete (5 final lens returns + 5 interim returns + observe/plan-review returns + all payloads + all raw returns) · the artifact/codex/frames `AGENTS.md` files. The inventory list itself files in the run directory.
- **Machine-written baseline (A-C003-2):** `sha256sum` output redirected to the baseline file in a write-first exec invocation (or generated by script) — never hand-transcribed. At capture: every hash validated as exactly 64 hex chars, file count matched against the inventory list; a malformed capture is refused and re-captured BEFORE any mutation; the original capture is preserved unedited (corrections appended as dated notes only).
- **CONTENT copies, never hardlinks (A-C004-1):** working-file preservation is a content copy to `recreation-attempt-1.html`; `comparison.html` → `comparison-attempt-1.html`; overwritten legs take attempt-tagged create-once paths (`fit-table-attempt-1.md`, `config-census-attempt-1.md`) before the new legs overwrite the live names. Copy independence asserted mechanically (preserved inode ≠ working inode) and the preservation census **re-verifies preserved copies AFTER the working file's first overwrite**, not only at close.
- **Create-once (A-C005-1):** every preservation/checkpoint/payload/return destination is create-once — an existing destination is never overwritten: matching sha → reused untouched; mismatching sha → execution stops and reports. Re-fires take fresh run-tagged paths.
- **Comparison rule:** `comparison.html` is re-pointed only after the new attempt passes its own checks, and only because the interface changed (cycle 14,000 → 6,000 ms, Stage 3); its ORIGINAL side (segment.mp4 video element, labels) never changes.

---

## 6. Execute checklist (in cure order; any step taken outside this list prints as a deviation)

1. ☐ Preservation per §5 complete: inventory filed, machine baseline validated (64-hex + count), content copies taken + inode-independence asserted — **before** the working file is touched.
2. ☐ Skeleton gate (A-C012-4): RUN.md §2 names the HQ.json skeleton entry id + heartbeat beat; both read back at that moment (board: exactly one entry of that id; heartbeat: beat present in planned state); read-back result printed in RUN.md §2 before the first Execute act.
3. ☐ Finer frame re-observation around segment 3.25–5.25 s (D3 mitigation); any premise contradiction files a **mid-cycle premise amendment** (A-C008-1: premise, contradicting evidence, revised construction) and the build follows the EVIDENCE.
4. ☐ Stage 1 (C3a/C3c/C3d + validation) → checkpoint 1 (create-once content copy + own-check output, sha frozen).
5. ☐ Stage 2 (C1a/C1b/C1d) → checkpoint 2.
6. ☐ Stage 3 (C1c/C1e/C1f/C1g; cycle-basis dispute text prepared for the lens neutral facts, A-C010-3) → checkpoint 3.
7. ☐ Stage 4 (C2a/C2b + tick-color rule) → checkpoint 4.
8. ☐ Full own-check suite (§7 items that are build-side) green on the final build; syntax `node --check` on both HTML files' inline scripts.
9. ☐ A-C008 legs on the NEW attempt (§7) filed; only then comparison re-point (interface changed; ORIGINAL side untouched).
10. ☐ Payload manifest filed before any lens firing (A-C010-1c: allowlist, neutral-packet schema, exclusions, anchor scan incl. filenames/labels/comments) — prior scores named in seat tasking only, **never** inside a lens payload.

## 7. Verify checklist (instrument-named; "will verify quality" satisfies nothing)

1. ☐ **Swap test** (logic level minimum, node harness; pixel only if a browser exists — D4 limitation printed): prior swaps (field color, burst/confetti count, draw duration) PLUS the C3b widened set — **different tick path** (assert ENTER landing follows the new path's start, 0 px jump), **different entry corner**, **different pencil shape**, **different checkbox layout** (assert tick follows the moved box). Each swap asserts its rendered effect, not its count.
2. ☐ **Purity grep + asset inventory:** attempt-1 pattern set (`segment\.mp4|source\.mp4|video-digests|ev/|\.jpg|\.png|<video|<img`) = 0 hits on the new `recreation.html`; inventory states no external assets; segment.mp4 appears only in comparison.html as the labeled ORIGINAL.
3. ☐ **A-C008 legs on the NEW attempt** (non-skippable, pre-wave): guard-measured-fit → new `fit-table.md` (expected TEXTLESS, HIT list empty by scope — re-derived from the new source, not copied) and guard-config-census → new `config-census.md` (against the attempt's own CONFIG); RUN cites each leg's path + hit count; a missing leg prints INCOMPLETE.
4. ☐ **Effect-mapping + CONFIG-consumption assertions (A-C002-1 / A-C006-2):** for **every** CONFIG key incl. all new keys (arrow path, confetti geometry, per-beat colors, box-exit fraction, stage geometry, validation bounds), the suite asserts key → consumed rendered/computed effect; a bound-but-unconsumed key fails the suite. The removed `endHoldMs` asserts as absent, not inert.
5. ☐ **Displayed-state incl. occlusion pairs (A-C006-3 / A-C019-1):** TEXTLESS, so no wrap states exist (ruled out with that reason); the occlusion model enumerates the **complete ordered pair set** among co-present elements at each checkpoint (ENTER-mid, DRAW-start, DRAW-mid, DRAW-end, PUNCT-1, PUNCT-2, HOLD): pairs incl. pencil-over-tick, pencil-over-checkbox (the interim −2 watch pair), checkbox-over-tick-start, arrow-over-field, confetti-over-field, tick-over-field; each priced-as-present element's visible fraction asserted ≥50% at its hold checkpoint or the build record names why less is faithful. A scoped pair set, if any, prints as the model's stated scope — no unscoped "all visible" claim.
6. ☐ **Literal census (A-C008-3):** source scanned for numeric/color literals outside CONFIG against a build-record whitelist of named structural constants only (2·π circle identity, 0/1 clamp+opacity bounds, SVG namespace URI, postMessage protocol words, CSS `margin:0`); every structural classification prints per-literal; any unlisted literal — and any *content* literal (arrow/confetti geometry, colors, phase numbers) classified as structural — fails the suite.
7. ☐ **Validation completeness (A-C011-2 / A-C021-3 / A-C022-1):** adversarial set beyond the priced cases — non-finite values, null/absent CONFIG groups, single-oversized-token overflow, resize recompute, warning/error display paths; **magnitude sweep: a 400-nines-class input for EVERY numeric field** (not only named ones); **direct-edit path**: the same classes applied by editing CONFIG in source (string in a numeric field, negative duration, impractically large confetti count) beside the `?cfg=` override path. Rejection must be visible and must not reach the renderer as Infinity/NaN.
8. ☐ **Self-start (A-C010-2):** the suite asserts the piece auto-starts under its own startup path (rAF loop, no external caller, no postMessage required) and reaches its scheduled ending (HOLD presented) unaided; any external-start dependency prints as a named limitation, never as a scoring exemption.
9. ☐ **Presented-endpoint assertion:** final held state is a painted frame before loop reset (see §4 A-C020-2 ruling).
10. ☐ **Continuity assertion:** ENTER end point == DRAW start point == `getPointAtLength(0)`, exactly, on default and on the swapped path (the interim 48 px defect's mechanical guard).
11. ☐ **Re-scoring wave** via `guards/codex-rescore-wave.md`, five lenses, score-blind payloads bound to the new build's sha; **delta arithmetic recomputed mechanically** from both attempts' filed returns (guard 1); **attempt-preservation census**, sha before/after (guard 2); **floor-rule gate check** (guard 3).
12. ☐ On PASS: tier hand-off filed to the style-library board (the tier move is style-library's act). On non-beating: WHY filed from §9's scaffold + `jev-plateau` fired. On beating-but-below-bar: gaps filed in scores.md as attempt 2's priced cures.

## 8. Failure-point evaluation (jev-plan-exit §2.4 — priced or ruled out, per point)

- **(a) Big-rebuild unattributability — PRICED HIGH.** C1+C3 together rebuild geometry, gesture, rhythm, and cycle in one attempt; a lens regression cannot be attributed cure-by-cure from the final wave alone. Mitigation is structural, not rhetorical: §3's four staged checkpoints (A-C010-1a) isolate stage effects, and attribution prints BUNDLED wherever a checkpoint does not isolate an effect. Residual risk accepted and named.
- **(b) Cure interaction — PRICED.** (i) Yellow pencil (C2a) over the cyan tick/white box during DRAW: contrast pairs re-measured per beat, occlusion pair pencil-over-tick watched (§7.5). (ii) Box exit (C1d) vs tick legibility: the tick must remain readable after its container leaves — tick-on-field contrast is the binding pair, measured at Stage 4. (iii) Red punctuation (C1c) vs Owner Cure 1: red-family on indigo is the likeliest contrast failure in the plan; the lighten-within-hue rule + filed measured pair is the gate, and failure there degrades C1c to a printed deviation, not a silent pass. (iv) Cycle shortening (C1g) vs the fixed-total invariant and comparison sync: totals validation (C3d) plus the disclosed comparison re-point; the dispute is fed to the lenses (A-C010-3). (v) Curved path length (C1b) changes draw distance at fixed duration — pencil speed changes; priced inside C1e's allocation, re-observed at checkpoint 2.
- **(c) Prior-attempt overwrite / early comparison re-point — RULED OUT by construction:** §5 preservation precedes any mutation, the census re-verifies after the first overwrite, and §6 orders comparison re-pointing after the new attempt's own checks (step 9, after step 8).
- **(d) Anchor leak — RULED OUT by procedure:** prior scores (84.0 and per-lens) appear in this plan and in seat tasking only; §6.10's payload manifest + anchor scan bars them from lens payloads, filenames, labels, and comments; the seat computes the delta from filed returns, never the lenses.
- **(e) Instrument-change misread — RULED OUT with reason:** both attempts are five-lens averages over the same five lenses (motion, timing, purity, reusability, readability); 84.0 → attempt-2 average is a like-for-like comparison. No 4-lens/5-lens conversion is involved for T100.
- **(f) Wave fan-out cross-contamination — PRICED LOW:** this plan covers one item in one artifact directory; the wave's other items write to their own directories (§8 per-item rule). The plan file, checkpoints, and payload paths are all T100-tagged; a path that does not contain `T100` is a stop-and-report condition for the Execute agent.
- **(g) Size-split evasion — RULED OUT with reason:** the source is a single 7,665-byte file; the §3 four-stage split IS the §8 split for a rebuild of this size, with the remainder (D1–D5) deferred in writing in §3. No whole-rebuild-in-one-pass is planned.

## 9. Pre-drafted WHY scaffold (filed now, completed at close if the attempt does not beat 84.0)

**Outcome slots (one per cure — fill with: landed / partial / failed + the checkpoint + return evidence):**
- C1a top-right entry: ___ · C1b curved tick: ___ · C1c two-beat arrow/confetti: ___ · C1d box exit: ___ · C1e pencil beat 1,500 ms: ___ · C1f successive beats: ___ · C1g cycle 6,000 / hold 53.3%: ___
- C2a yellow pencil (filed pair ___:1): ___ · C2b onset size (filed measurement ___ px): ___
- C3a derived landing/anchored tick: ___ · C3b widened swap: ___ · C3c derived viewBox: ___ · C3d validation + endHoldMs removal: ___

**Stuck-lens hypothesis (pre-committed):** **motion** is the likeliest stuck lens — it owns the most priced points (−26) and two of its cures (curved gesture, arrow/confetti form) are fidelity judgments a flat geometric construction may only partly satisfy (D2's texture gap); **timing** is second — the C1g cycle-basis dispute (§3 Stage 3) may be priced against the attempt even if the hold cures. If motion lands <80 or timing <78 while the other lenses collect, the WHY attributes there first.

**Plateau evidence the filing will need (jev-plateau dimensions — causal specificity · lens attribution · consequence · evidence citation):** per stuck lens — the exact priced deduction text from the attempt-2 return, the checkpoint whose stage owned that cure, whether the deduction repeats attempt 1's wording on the same construction fact (plateau signal) or prices a new fact (execution signal), and the consequence (next cure, deferral with A-C009-3 pricing, or escalation). A WHY that cannot cite the return's own deduction lines against a checkpoint stage is an excuse, not a plateau filing.

**Lawful outcomes only:** a higher average filed (PASS at ≥85 + min ≥70, or beating-but-below-bar with gaps filed), or this WHY filed completed — no third outcome.

## Cycle-024 Resumption Correction (Codex Observe correction 4 — APPLIED 2026-11-17)
The filed cure wording is preserved verbatim: scores.md cure 1 states the checkbox is **"exiting after the check"**. Separately, as the §4 frame-based re-observation resolution (A-C006-1): the sampled frames show the checkbox present with tick onset at **3.5 s** and **no longer visible at 4.0 s** while the pencil still draws — i.e. the exit resolves DURING the draw. C1d's construction (box-exit point inside DRAW) implements the frame resolution, not the filed wording; both are recorded, the conflict and its resolution against segment evidence are filed here per A-C006-1, and the lenses are fed the amended basis under A-C010-3.

## Cycle-024 Plan-Review Consumption (Codex plan review T100: PLAN: REVISE BEFORE GATE — 6 findings, ALL ACCEPTED as amendments, 2026-11-17)
1. **Attribution BUNDLED for C1 as staged.** Checkpoint 2 (C1a+C1b+C1d) and Checkpoint 3 (C1c+C1e+C1f+C1g) carry controlled before/after probes for any effect claimed individually (entry vector, rendered curve vs its reveal, actual box-disappearance time; confetti displacement / pencil-gesture duration against stationary or overlong controls); lens movement stays BUNDLED where checkpoints cannot isolate. Stage 4's tick-hue change is bundled with pencil contrast + onset size — the forecast's separate +3 motion visibility credit has no isolated basis and is read as bundled. Every checkpoint files BEFORE the next stage starts (A-C012-4 gate); §7 verifies filing order.
2. **Tick persistence RESOLVED against the frames (A-C008-1 premise amendment, filed in Plan):** the eight filed frames show the completed cyan tick ABSENT during punctuation (f-4.5 red, f-5.0 green — no tick) and a cursor alone at f-5.5. The plan's "completed tick carried into HOLD" claim is therefore NOT evidence-supported. Construction: the tick CLEARS with/after the box exit (its absence during punctuation + tail is the evidenced state); the build record specifies and the suite verifies exactly when the tick clears. Any synthetic return of the tick in HOLD would be a priced departure — none is built. Timing claim corrected: the first/last pencil-positive samples are 500 ms apart; the pencil-beat allocation states its interval basis accordingly.
3. **Both-bases neutral entry is a REQUIRED manifest item** (with payload read-back): the 14,000 ms segment + prior logical allocation incl. its 10,900 ms residual, AND the proposed 6,000 ms authored-cycle allocation incl. its 3,200 ms residual; which segment observations govern the new schedule; 6,000 ms disclosed as an authored cycle; the disagreement over retaining the segment-length period stated — without prior scores or deduction language. **Fallback made executable:** the fallback (cycleMs + residual HOLD) yields an 11,200 ms hold = 80.0% of cycle, WORSE than the original 77.9% — its decision point is named in the build record (fire only if the 6,000 ms basis is itself invalidated, never as a tempo cure) with fallback-specific checks incl. comparison playback over the full residual.
4. **Execution gaps closed:** C1c — arrow reveal/movement + confetti displacement are defined and sampled inside each beat (two static groups toggling in sequence do NOT pass). C2b — BOTH displayed onset dimensions must exceed 4.8 × 1.5 px by a stated margin at the intended viewport on the first visible frame (nominal 1.8 px thickness at unit scale is not a floor). C3b–d — a combined path+corner+pencil+box swap with continuity is required, plus a non-square stage swap checking viewport alignment + field coverage; validation defined for positive active durations, integer confetti counts, and a residual large enough to present HOLD (zero residual handled explicitly under A-C020-2). The interim ≈48.1 px jump guard is retained on default + swapped paths.
5. **Red-beat contrast priced before reliance:** a passing candidate is NAMED on both configured fields before the cure is relied on (review's illustrative opaque pairs on the default field: #ff0000 = 1.80:1, #ffb3b3 = 4.24:1 — neither assumed passing); effective contrast is checked at the first frame claimed readable if opacity is animated; the lightening's cost to the red–green distinction is priced in the build record. The same visible-frame check applies to the pencil entry. (Filed arithmetic verified: yellow 5.25:1, old pencil 1.96:1 on the default field.)
6. **Window accounting printed with bounds (A-C007-1/A-C020-1):** three clocks print separately — source technique window 3–7 s · comparison cut 0–14 s · recreation clock 0–6000 ms. Deferred source beats are marked OMITTED COVERAGE with the omission priced. The 3,200 ms tail's actual displayed state + full duration are verified including the wrap — a residual variable alone does not satisfy the window.
