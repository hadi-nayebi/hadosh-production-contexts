# T16 — Particle Document Flip · BUILD RECORD (attempt 1)

Technique: T16 (packet #1, "Look What I Can Do" @ 1:35–1:40) · Queue #11 · Cycle 004 Wave 2
Consumer: document/progress beats in production; shares the T15 particle machinery (word animation · transitions).
Artifacts: `recreation.html` (18,276 B) · `comparison.html` (2,615 B) · `segment.mp4` (5,440,140 B, evidence only)
Phase guards (jev-observe-exit / jev-plan-exit / jev-prewave / codex-observe / codex-plan-review): **SKIPPED-WITH-REASON** — BUILT-NOT-FIRED / UNBUILT in this seat per RUN.md; the five-lens scoring wave is the armed deliverable gate and fires below.

## §1 Observe

**Catalogue mechanics (digest T16 + TECHNIQUES.md T16, evidence frames viewed firsthand):**
- ev/t96.jpg (t=1:36): a resume page rendered in bright white particles on black — a crisp page RECTANGLE (glowing outline), the header word "RÉSUMÉ" in large particle type, horizontal text-line texture beneath it, and 2–3 stacked page outlines offset behind the front page. Right of frame, solid (non-particle) DOM-style readout: small blue-grey "page" label over a huge white "6/14".
- ev/t99.jpg (t=1:39): the sequence has resolved — small solid mono label "title:" at left, and "AI GURU" in very large, dense, bright particle letters filling the frame width; a faint dust stream still drifts behind/above.
- Digest: pages flip rapidly through the counter (caught at 1/14, 6/14, 14/14 across ~2 s), then a title line condenses out of the dust — "title: AI GURU" — as a glowing halo ring forms above it.
- Sub-beats (6.0 s window 1:34.5–1:40.5): flip ≈0–2.6 s (checkpoints 1/14 @0, 6/14 @~1.1 s in-window, 14/14 @~2.2 s) → page dissolves ≈2.6–3.1 s → title condenses ≈3.1–4.6 s (halo joining ~0.35 s after title starts) → hold to 6.0 s.

**T15 family findings carried in (REQUIRED family record — T15 scores.md + build-record-attempt2.md):**
- Attempt 1 (4-lens): motion 68 · timing 82 · purity 100 · reuse 64 → avg 78.5 FAIL. Convergent defect (A1): motion + reuse both named the surplus-particle FREEZE during FORM.
- OWNER CURE 1: borrowed/forming particles = FOREGROUND intensity; reserve = BACKGROUND dimmer — same-intensity fields make formed words unreadable.
- OWNER CURE 2: strict sequencing — one lifecycle owns the stage at a time; a formation begins only after the previous dissolve completes.
- A5 flow-field model: ONE constant flow field; forming = BORROWING onto targets (low-amplitude jitter, never zero velocity); guaranteed reserve fraction never borrowed; dissolving = RELEASING back to full stream velocity with continuity.
- A1 precedent: runtime sampling of config-rendered text is the lawful letterform construction (purity 100) — reused here for page header, page lines, title, and halo.
- Attempt 2 (practice, 5-lens): 65/93/100/58/84 → 80.0 FAIL. Standing gaps inherited as design inputs: config validation clamps, restart determinism (re-seed on resize/restart), original-tempo proportions, reserve extremes coverage. Attempt-2 motion note: trajectories should ride the stream; reusability note: hardcoded motion constants are priced against the build — all motion constants here are CONFIG keys.

**Variables extracted (§1.3):** page count · page header word · per-page line pattern · page geometry/stack · title label + title text · halo geometry/colour · flip checkpoints + phase durations · travel times · particle count drivers (sampleGap, radius) · reserve fraction · palette (particle range, halo, counter, label, background) · intensities (foreground/reserve/surplus/stack/halo) · wind · jitter · seed.

## §2 Plan

**Parameter table (CONFIG keys, specimen defaults):** pageCount 14 · pageHeader "RÉSUMÉ" · pageLinePattern [0.55…0.66] (13 lines, per-page seeded jitter) · pageLinesTopRatio 0.30 · pageLineGapRatio 0.052 · page X/Y/W/H ratios 0.17/0.13/0.33/0.74 · stackCount 2 · stackOffsetPx 11 · stackAlpha 0.45 · titleLabel "title:" · titleText "AI GURU" · titleFontPx 150 (fit to maxWidthRatio 0.86) · haloRxR 0.17 · haloRyR 0.055 · haloCyR 0.30 · haloColor #ffd98a · haloAlpha 0.95 · sampleGap 4 · particleRadius 1.6 · colorA #f6f9fd · colorB #93a7bd · background #000000 · flipCheckpoints [{1,0},{6,1100},{14,2200}] · flipMs 2600 · releaseMs 500 · formMs 1500 · haloDelayMs 350 · holdMs 1400 · travelFlipMs 230 · travelFormMs 950 · windX 26 · windY −9 · jitter 0.35 · reserveFraction 0.22 · foregroundAlpha 1.0 · reserveAlpha 0.28 · surplusAlpha 0.16 · seed 20261. URL overrides: title, titleLabel, pageHeader, pageCount, flip/release/form/hold Ms, sampleGap, reserveFraction, palette, flipCheckpoints.

**Construction:** canvas particle system implementing the A5 flow field. Page/title/halo targets all obtained by runtime sampling of config-rendered content on offscreen canvases (page = strokeRect outline + stack outlines + fillText header + fillRect text lines, sampled per page with page-seeded line jitter; title = fillText; halo = ellipse stroke). The counter and "title:" label are solid DOM text, matching the original frames where both read as solid type, styled from CONFIG. Scheduler: flip → release → form → hold, strictly sequential (Owner Cure 2). Intensity rides the borrow flag (Owner Cure 1), with stack-kind borrowed particles at stackAlpha and halo-kind at haloAlpha/haloColor.
**Rejected alternatives:** (a) DOM/CSS page flip with 3D rotateY — wrong material: the original page is dust, not a card; a CSS flip would not share T15's physics. (b) One combined target set for page+title cross-faded simultaneously — violates Owner Cure 2 phase exclusivity. (c) Baked per-page target tables — traced, not parameterized; fails the swap test by construction. (d) Counter as particle text — the original counter is solid type (t96); particles would misread the mechanic.

**Verification plan:** leg 1 swap test (node harness, stubbed canvas: new title words + pageCount 9 + flipMs timing + gold palette; geometry must regenerate); leg 2 purity grep + asset inventory; leg 3 comparison check (labels, one control set, phone stacking); then the five-lens Codex wave. Bar: avg ≥85 AND min ≥70.

**Failure points priced:**
- *Fitting/form risk (this item's named risk):* the page must read as a PAGE — rectangle + header + line texture — not a blob. Mitigation: outline sampled at full density, header fitted to 84% of page width, 13-line texture; leg-1 harness asserts target bounds match the page rectangle and both page/stack kinds exist.
- *Convergent freeze (T15's defect):* surplus particles freezing during FORM. Mitigation: A5 model — non-borrowed particles stream in every phase; harness asserts reserve violations = 0 and phase order strict.
- *Intensity collapse (Owner Cure 1):* page/title at reserve intensity would be unreadable. Mitigation: alpha assigned per frame from borrow flag; harness asserts borrowed set includes 1.0 and reserve set is exactly {0.28}.
- *Flip legibility:* at 230 ms travel + ~185 ms per page step, mid-flip pages are transient by design (as in the original); checkpoints, not every integer, are the priced anchors.
- *Halo evidence:* the halo is faint/absent in the t99 still; it is built per the digest's explicit mechanic ("glowing halo ring forms above it") at haloAlpha 0.95 gold — if Codex prices it as invention, that finding is recorded, not hidden.
- *Render-proof limitation:* no Chrome binary usable in this seat (T15 attempt-2 record: headless launch blocked by WebGL domain policy) — verification is logic-level (stubbed-canvas harness) + the comparison page as the human render surface. PIXEL-UNVERIFIED stands.

## §3 Execute
1. Segment cut: ffmpeg −ss 94.5, −t 6.0 from source.mp4 (1916×1078, 30 fps, 198.413 s), libx264 crf 23 / yuv420p / aac / faststart → segment.mp4: **6.000 s, h264 1916×1078, 5,440,140 B** (ffprobe-verified; first encode attempt was killed mid-write and re-cut — the invalid file was discarded, never filed).
2. recreation.html built per Plan (single self-contained file, CONFIG at top, no external assets).
3. comparison.html built: ORIGINAL (segment.mp4) + RECREATION (iframe) side by side at matched 16:9, labels as charged, ONE control set (Play/Pause/Restart drives the video and posts play/pause/restart to the recreation), phone-width stacking via media query with sticky reachable controls.

## §5 Own checks (legs 1–3, before Codex)
- **Leg 1 — swap test (logic level, node harness with stubbed canvas, Wave-1/T15 precedent): ALL 17 checks PASS.** Default instance: page targets 3,338 (page 2,420 + stack 918), bounds x 164..505 / y 57..472 against the configured page rectangle + stack — the page reads as a rectangle, not a blob; checkpoints pageAtTime 0→1, 1100→6, 2200→14; title targets 5,510; halo targets 890; sim phases strictly flip→release→form→hold; max borrowed during flip 3,370; reserve violations 0; hold borrows title+halo kinds; borrowed alphas {1.0, 0.95}; reserve alpha exactly {0.28}. Swapped instance (?title=DATA WIZARD&pageCount=9&flipMs=1800&colorA=#ffd75e): title/pageCount/timing all moved by config alone, pageAtTime clamps at 9, title target count regenerated 5,510 → 6,633, gold palette reaches particle colours. Both inline scripts pass node --check.
- **Leg 2 — purity:** grep over recreation.html for segment/source filenames, frame names, image extensions, <video>/<img>, external URLs: **ZERO hits**. Asset inventory: recreation.html loads NOTHING external (one inline script, one canvas, two DOM labels); comparison.html loads only segment.mp4 (labeled ORIGINAL side) + recreation.html. The recreation's content is 100% code-rendered from CONFIG.
- **Leg 3 — comparison check:** both sides present at matched 16:9; labels read ORIGINAL — "Look What I Can Do" @ 1:35–1:40 · RECREATION — T16 Particle document flip, parameterized; one shared control set; recreation duration 6,000 ms loop = segment 6.000 s; @media ≤640 px stacks the sides vertically and controls stay sticky/reachable at the bottom. No captions/subtitles anywhere — "title:" and the counter are the technique's own subject matter, as in the original frames.
