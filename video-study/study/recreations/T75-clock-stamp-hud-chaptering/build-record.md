# T75 — Clock-stamp HUD chaptering · build record (attempt 1, Cycle 013 Wave 11)

Queue #36 · Packet #4 (The Good Takeoff, YouTube jkDBk8QFcyY) · P4-T02
Artifact dir: `hidden_files/study/recreations/T75-clock-stamp-hud-chaptering/`
Governing: recreation INSTRUCTION.md §1–§6 + Amendments A1/A2/A3/A5/A6; wave RUN.md §1/§2/§2b (amended Plan governs — hud{tickColor,tickWidthPx} bound; chapters[] carry {clock,scene,sceneBg}).
Consumer: DLC assembler TRANSITION/section surface (persistent HUD chaptering) — the DLC (multilingual) production lane, via the style library.

## §1 Observe — gate-out
- **Mechanics:** every frame carries the same top-left furniture — a year line ("2037 · A POSSIBLE TUESDAY") above a large diegetic clock with a small progress tick (horizontal line + dot); chapters begin exactly on the clock's turns; the scene below changes while the HUD persists; no title cards or transitions inside the chapter system — the clock flipping inside the standing HUD is the segmentation (digest P4-T02 + TECHNIQUES.md T75 agree).
- **Caption exclusion (named):** the specimen frame's bottom line ("Six-fifteen, in your kitchen.") is narration CAPTION text — fleet law bans captions/subtitles in the recreation. It is NOT reproduced anywhere in the build; the HUD is the subject.
- **Evidence viewed firsthand:** ev/t12.jpg (06:15 HUD over night city, tick visible right of the clock), ev/t81.jpg (07:30, furniture identical, only the clock changed); segment frames f01/f03/f05/f07/f10/f12/f14 viewed firsthand.
- **codex-observe:** CONFIRMED-WITH-GAPS (verbatim at `codex/codex-observe.md`). Gaps closed/disposed: (1) packet "every frame" persistence is overstated for the cold open — within the window the year line stands alone during the title/zoom beats and the full HUD assembles by seg ~6 s; that assembly belongs to the P4-T01 cold open, NOT the chaptering mechanic — the recreation models the standing HUD state (named deferral, fidelity-plan honesty). (2) Chapter turns beyond the window remain allocation-model CONFIG (below). (3) T38 arithmetic re-verified by the audit (76.0 / 77.2 / 86.8).
- **SUB-BEAT TIMING TABLE** (segment t; source t = segment + 5 s; 1 fps frames + ev frames):
  | Seg t | Source t | State |
  |---|---|---|
  | 0–1 s | 5–6 s | Title-card tail: giant "2037 / A POSSIBLE TUESDAY" (cold open, P4-T01 — not the HUD state) |
  | ~2–4 s | ~7–9 s | Year line alone, small, top-left; NO clock (zoom beats, interior → city) |
  | ~6 s | ~11 s | Full HUD present: year line + "06:15" + tick, over night city (ev/t12 at 12 s matches this state) |
  | ~9–11 s | ~14–16 s | HUD persists unchanged; slow camera drift over the city |
  | ~12–13 s | ~17–18 s | Scene CUT to kitchen interior; HUD persists identical across the cut (f14) |
  | (beyond window) | 81/191/312 s | ev frames: same furniture, clocks 07:30 / 12:00 / 19:00 |
  Recreation schedule: the recreation models the chapter system itself — 3 CONFIG chapters × (chapterMs 4200 + holdMs 800) = 15 000 ms total; the clock flips exactly at each 5 000 ms boundary and the scene swaps under the never-rebuilt HUD. In-window evidence proves HUD persistence + first clock state only; **chapter turns are ALLOCATION-MODEL** (digest throughout-claim), with ≥2 turns inside the recreation's own duration, per RUN §1 window-scope.
- **Variables:** hud{yearLine,tickColor,tickWidthPx} · chapters[{clock,scene,sceneBg}] · palette{hudInk,bg,accent} · chapterMs · holdMs · stage{width,height} · type{yearPx,yearSpacingPx,clockPx} · geom{…}.
- **Segment binding:** source ffprobe duration 619.914 s; segment cut at 5 s, exactly 14.000 s (ffprobe-verified), libx264+aac faststart, 11 314 821 bytes, sha256 896a434fc054237fe9dd78ee01d5b6461797033bc65208ab796e3c7e41f52a73.

## §2 Plan (as amended by §2b)
- **Parameter table:** CONFIG at the top of recreation.html exactly per §2b: hud{yearLine:"2037 · A POSSIBLE TUESDAY", tickColor:"#e8c86a", tickWidthPx:34} · chapters[{06:15,kitchen,#101c3a},{07:00,street,#1a2a4a},{08:30,office,#24365e}] · palette{hudInk:"#f5f2e6",bg:"#101c3a",accent:"#e8c86a"} · chapterMs 4200 · holdMs 800. Supporting groups (stage/type/geom) bind size/typography/scene-generation constants so no shaping literal stands outside CONFIG.
- **Construction:** DOM HUD (built once, positioned OUTSIDE #sceneBox) + procedurally generated SVG scene silhouettes (seeded by chapter.scene) swapping per chapter under the HUD. HUD persistence at chapter turns holds BY CONSTRUCTION: render(t) only replaces #sceneBox content and the clock text; the HUD node is never re-created (harness asserts node identity across turns). Rejected: detailed city illustration (scene is context, §8) · video background (purity refusal) · rebuilding the HUD per chapter (breaks the technique).
- **Plateau (A2):** family sibling T38 headline-card chaptering: attempt 1 FAIL 76.0 (min 68) → practice attempt 3 PASS 86.8 (min 82). Expected stuck lens for T75: motion (RUN §2). This attempt prices against that line: a PASS requires beating the family's first-attempt 76.0 by reaching the bar itself (avg ≥85, min ≥70).

## §3 Execute
1. codex-observe fired FIRST (one stream, `cat instr payload | codex exec --skip-git-repo-check -`, no stdin field); return verbatim at `codex/codex-observe.md`. ✓
2. Segment cut ✓ (facts above).
3. Sub-beat table ✓ (§1, before the build was finalized).
4. recreation.html ✓ — self-contained; CONFIG at top; logic reads ONLY CONFIG; seekable render(t); no captions; no specimen media.
5. comparison.html ✓ — ORIGINAL (labeled "ORIGINAL — The Good Takeoff @ 5–19 s", segment.mp4) + live recreation iframe, ONE synchronized control set (play/pause + restart drive both; recreation slaved to the video's currentTime via __render), phone-width stacking (flex-wrap, 360 px figures).

## §5 Own checks (recorded, not asserted)
- **(a) EXACT §2b T75 swap test** (node harness, stubbed DOM, `?cfg=` override): hud.yearLine → "2040 · A TEST MONDAY" · chapters → [{09:05,lab,#101c3a},{10:40,roof,#1a2a4a}] (3→2 chapters) · chapterMs 4200→2000 · palette.accent "#e8c86a"→"#7fd4c1" with hud.tickColor following by explicit assignment in the swap config. PASS criteria + results: total 5600 ms = 2×(2000+800) ✓ · ch0 clock "09:05" ✓ · yearLine renders swapped ✓ · tick fill + year color = #7fd4c1 ✓ · turn at exactly 2800 ms → "10:40" ✓ · HUD node identical across the turn ✓ · scene swapped lab→roof ✓ · no specimen clock (06:15/07:00/08:30) survives ✓. **SWAP: PASS.**
- **Default-build harness:** total 15 000 ms; turns at exactly 5000/10000 ms; tick fill 17 px at frac 0.5 (34×0.5); loop at total; tick width bound 34 px. 20/20 assertions PASS (harness output preserved in this run's working notes).
- **(b) Purity:** `grep -E "segment\.mp4|source\.mp4|o1FsB1nyEWI|jkDBk8QFcyY|video-digests|t[0-9]+\.jpg" recreation.html` → **0 hits**; `<video` count 0; `<img` count 0. Asset inventory: recreation.html loads NO external assets — scenes are inline generated SVG strings; the only media in the artifact dir is segment.mp4 (evidence, comparison side only). The words "caption/subtitle" appear only in the header comment documenting their exclusion.
- **(c) Syntax:** inline script extracted, `node --check` → OK.
- **(d) Comparison:** both sides labeled; shared controls drive video + recreation render(t) from video.currentTime; durations: segment 14.000 s vs recreation loop 15.000 s (chapter system duration, named — the recreation is a looping chapter system, not a frame copy); stacking verified by CSS (flex-wrap + max-width:100%).
- **(e) 360 px fit arithmetic:** see `fit-table.md` (A6 leg) — year line ink ≈265 px wide / 11.5 px high in a 336 px usable row; clock ink ≈85 px / 23.5 px; clock-row total ≈127 px. All inside bounds, ink ≥ ~11 px floor.

## A6 pre-wave legs (Amendment A6 — on the FINAL build, before the wave)
- `fit-table.md` — HITs: 0.
- `config-census.md` — HITs: 0 (one pre-census cure applied: body background hex moved under palette.bg control; scene-generation constants bound into geom).

## Guard firings after own checks
- codex-plan-review: see `codex/codex-plan-review.md` + disposition in scores.md.
- jev-prewave: see `jev-prewave.md` + scores.md pre-wave line.

## Limitations
PIXEL-UNVERIFIED: no browser binary exercisable in this seat; verification is LOGIC level (node harness) + the comparison page as render surface. Chapter turns + the 07:00/08:30 chapter states are allocation-model (digest throughout-claim + later ev frames), not in-window evidence. The cold-open HUD assembly (title → year-only → full HUD) is a named deferral to P4-T01's technique, not silently absent.
