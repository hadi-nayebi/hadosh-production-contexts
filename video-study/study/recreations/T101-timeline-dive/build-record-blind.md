# T101 — Timeline dive · build record (attempt 1, recreation Cycle 016 Wave 14)

Artifact dir: `hidden_files/study/recreations/T101-timeline-dive/` · Queue #48 · Packet #5 (School of Motion "Six Essential Motion Design Transitions", YxQ7JqVmqgY), technique P5-T03 @ 7–12 s · Segment 4–18 s.
Consumer: **TRANSITION · OPENING** (timeline dive; the transition surface — itself a dynamic-zoom transition used before it is taught).
Schedule basis (Amendment A7): **`t=0 allocation`** — the dive lifecycle is re-based to build zero inside the 14 s cycle (travel → dive → hold), named allocation, never presented as measured.
Final build: recreation.html sha256 30564a530a7cee20d6a6bd0193fe76c302829304e5bef97f150fe653678f0067 (interim build 1ebe868f… superseded by the cure in §7 — its five lens returns are preserved as codex/lens-*-interim1.md and never enter the final average) · PIXEL-UNVERIFIED (no browser binary in this seat; verification is logic-level via the node harness + the comparison page as render surface).

## 1. Observe gate-out
Mechanics: the view pushes into a stylized editor timeline (colored clip blocks, easing-curve panel, "QUICK TIPS" title card riding the timeline), travelling along it until one card fills the frame.
Evidence viewed firsthand by the builder: ev/7.5 (via RUN §1) + the builder's own segment frames (§3).
Variables (all CONFIG-bound): clips[{color,w,h}] · card{brand,title,x,y,w,h} · curve{show,points[{x,y}×4]} · panels{curve{x,y,w,h},toolbar{h}} · dive{endScale,travelX} · palette{bg,toolbar,cardFrom,cardTo,ink} · layout{worldW,clipsX,clipsY,gap,panelBg,gridLine,curveStroke,curveStrokeW,gridDiv,gradAngle,flankGap,flankTopGap,clipBorder,clipBorderW} · graph{y,h,color,bg,lineW,span} · type{font,brandSize,titleSize} · diveMs · travelMs · holdMs · stage{width,height}.

## 2. Guard dispositions
- **codex-observe** (fired FIRST, one stream): CONFIRMED-WITH-GAPS — verbatim at codex/codex-observe.md. Dispositions: G1 frame contents unverified by auditor → closed firsthand (segment frames extracted + viewed, §3) · G2 sibling scores summary-only → T83 scores.md read firsthand by builder (95/94/100/80/84 = 453/5 = 90.6, five lenses, returns on file — recomputed ✓); T90 not re-read (its average is context only, no lens-level claim is used) · G3 rebase explicit → schedule basis line above, t=0 allocation · G4 source duration → ffprobe 80.994 s firsthand (§3) · T10↔T108 mapping: digest T03 names the dive "itself a dynamic-zoom transition (T10)" in packet-local numbering; register T108 is dynamic/infinite zoom — consistent, priced as packet-local vs library numbering.
- **codex-plan-review** (one stream): REVISE — verbatim at codex/codex-plan-review.md. All points APPLIED as construction requirements: (1) card-fill derived, not asserted — end pose computed from CONFIG card bounds + stage center; harness verifies card at endScale covers the stage (509.6×327.6 px ≥ 360×203) and phase-boundary pose jumps measure 0.000 · (2) contrast checked at the worst gradient point (u=0, cardFrom): white on #e11d48 = **4.70:1 ≥ 4.5:1** (full gradient sweep 4.70–7.10:1, §4) — Owner Cure 1 recorded · (3) all geometry bound in CONFIG (curve points concrete, panels concrete, card geometry, stage height, layout group) — residual literals found by the census cured (§5) · (4) swap diveMs semantics named: the scratch cycle becomes 12 800 ms (holdMs is a CONFIG duration, not a derived residual — the swap tests re-drive, not cycle preservation) · (5) scope held to the core mechanic: panels/clips are static spatial cues, no independent panel animation, one title card.

## 3. Segment + measured frames
Source: `hidden_files/study/video-digests/2026-11-14-som-six-transitions/source.mp4` — ffprobe: h264 1280×720, 30 fps, duration 80.994 s.
Segment cut: ffmpeg `-ss 4 -t 14`, re-encoded libx264/yuv420p + aac → segment.mp4, ffprobe **duration 14.000 s**, size 1 147 604 bytes.
Frames extracted at 0.5 s steps (28 frames, frames/f_00.0–f_13.5.jpg). Measured table (segment t = source t − 4 s):

| Seg t | Source t | Measured state |
|---|---|---|
| 0.0 | 4.0 | Pencil sting tail (T100's device) — pre-dive handle |
| 1.5 | 5.5 | Plain indigo field, white cursor only — the timeline has not entered |
| 2.0–2.5 | 6.0–6.5 | Timeline present at close framing: yellow toolbar top, curve panel left (grid + white bezier), gradient card centre "SCHOOL OF MOTION / QUICK TIPS", clip blocks flanking, blue graph strip bottom with red playhead + red bezier |
| 3.0 | 7.0 | Same framing, camera panned slightly along the timeline (clip positions shift) |
| 5.0 | 9.0 | Card selected (dashed outline), graph-strip bezier animating — editor at work on the card |
| 6.5 | 10.5 | Camera travelled right along the timeline (playhead advanced right); the card now reads "TRANSITIONS" — the dive has carried the view to the next card |
| 7.5–13.5 | 11.5–17.5 | Definition card full-frame (T102's device) — post-dive handle |

Settled mechanics: the timeline's layout (toolbar · curve panel · clips · graph strip with playhead + bezier) is MEASURED. The measured segment shows the timeline entering already close and travelling laterally; the Plan's wide → travel → card-fills-frame progression inside one 14 s cycle is the named **t=0 allocation** (schedule basis above) — the build implements the catalogue mechanic (travel + continuous push-in until the card fills the frame), it does not claim the segment's exact camera path. No element is unverifiable beyond this named allocation.

## 4. Construction
DOM/SVG, one self-contained file, CONFIG at top, logic reads only CONFIG. Camera = one continuous JS-clock pose function: TRAVEL (0–2600 ms, translateX 0→travelX at scale 1) → DIVE (2600–6800 ms, scale 1→endScale 2.6, translation interpolated to the derived card-centred end pose; pose at both phase boundaries identical — continuity measured 0.000) → HOLD (6800–14000 ms). Phase exclusivity by the pose function (one phase owns the stage at a time — Owner Cure 2). Playhead advances with camera progress across travel+dive. `window.__render(t)` exposes the clock for the comparison's synchronized control.
Owner Cure 1 (contrast): white ink on the card gradient — worst point (u=0, #e11d48) **4.70:1**, midpoint 6.41:1, end (#6d28d9) 7.10:1 — all ≥ 4.5:1. Recorded.
Card-fill derivation: end pose = stage centre − card centre × endScale; card rendered 196×126 → 509.6×327.6 px at endScale vs stage 360×203 — fills frame on both axes. ✓

## 5. Own checks (recorded, not asserted)
- **Swap test (EXACT RUN §2 values, scratch copy):** card.title "QUICK TIPS"→"DEEP DIVE" · clips[0].color #22c55e→#f97316 · diveMs 4200→3000. Result (node harness on the scratch script): title text node = "DEEP DIVE" ✓ · orange clip present ✓ · phase boundaries still continuous (jump 0.000) ✓ · card still fills frame ✓ · scratch cycle = 12 800 ms (named semantics, §2). Untouched groups (named per §2b A-9): palette{bg,toolbar} · panels — placement re-driven by the dive transform (panels ride the world transform; verified in the pose harness).
- **Purity grep** over recreation.html, pattern `segment\.mp4|source\.mp4|video-digests|ev/|\.jpg|\.png|<video|<img`: **0 hits**. Asset inventory: recreation.html loads NO external assets — all elements are DOM/SVG generated from CONFIG in code. segment.mp4 appears only in comparison.html as the labeled ORIGINAL.
- **node --check** on the extracted inline script: OK. Harness (default build): travel→dive jump 0.000 · dive→hold jump 0.000 · hold pose scale 2.6 · loop pose at 14 000 ms == pose at 0 ✓ · cycle = 4200+2600+7200 = **14 000 ms exactly**.
- **Comparison check:** labels exact per charge · one control set drives both (video currentTime slaves the recreation via __render) · durations matched (segment 14.000 s; recreation cycle 14 000 ms) · phone stacking via flex-wrap with controls above the panels, reachable.

## 6. A6 legs
- guard-measured-fit → fit-table.md: interim build 0 HITs (superseded — its hold-state blind spot is what the interim readability lens caught); **FINAL build: 1 HIT carried** — brand wide-state ink height 8.6 px vs the ~11 px floor, disposition in fit-table.md (brand's reading state is the hold at 22.3 px; title clears the floor in both states and fits the hold-visible width with 15.0 px margin). [This line corrected after jev-prewave-refire finding 5 priced the stale summary.]
- guard-config-census → config-census.md: **0 HITs** on the final build (first-pass hits cured pre-wave; the jev-prewave census MISS and its cure are recorded in the census addendum).

