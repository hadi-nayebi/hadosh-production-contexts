# T11 — Code-review UI + stamp slam · BUILD RECORD (Attempt 1, recreation Cycle 005 Wave 3, 2026-11-14)

Governing: recreation INSTRUCTION.md §1–§5 · bounded_probe_discipline (all probes ≤6000 chars) · Consumer: verdict moments · diagram/ending containers.

## §1 Observe
- Digest T11 (P1 @ 0:56–1:05) + TECHNIQUES.md T11 read. Mechanics: GitHub-like PR screen cycles cards ('#1111 ship: please-hold.mp4', '#1115 ship: asking-for-a-friend.mp4'); approvals counter spins 111→800; checks panel flips states (build/tests/prod, red 'prod is down'); stick-figure reviewers multiply below; PR body is ASCII/pointillist arch art; cards swap with horizontal motion-blur whip transitions ~1.3 s apart; green rotated 'LGTM' stamp slams at merge moment.
- Evidence frame ev/t61.jpg viewed firsthand: frame actually shows card '#1113 ship: rage-against-the-ml.mp4', approvals 150, lines read 0, Checks build/tests/prod all ✓ (prod 'hotfix', temperature 0.00), green '● fixed' pill, central pointed-arch window in red/white/grey pointillist brick characters, rows of robed reviewer figures with ✓ heads below left/right, 'Ready to merge / Merge pull request' panel at right edge. (Digest's 'LGTM stamp over arch at t61' not visible in this still — stamp taken on digest+task authority as the section's merge-moment beat.)
- Segment watched via cut: segment.mp4 0:55.5–1:05.5 (10.0 s, h264 1916×1078, ffprobe-verified after encode completed; an interim probe during encoding read moov-less — re-probed clean, no re-encode needed).
- Variables: PR numbers/titles, approvals from/to, lines read, check rows+states+status pill, reviewer counts, card interval, whip duration, counter duration, stamp text/angle/color/at-time, loop length, arch size/density chars, palette.
- Consumer: verdict moments · diagram/ending containers.
- Phase guards: SKIPPED-WITH-REASON — jev-observe-exit / codex-observe: BUILT-NOT-FIRED / UNBUILT per INSTRUCTION arming states; five-lens Codex wave is the armed gate.

## §2 Plan
Parameter table (CONFIG key → specimen default): prs[] (#1111/#1115/#1113/#1119 + titles, approvalsFrom/To chaining 111→800, linesRead 0) · cardIntervalMs 1300 · whipMs 180 · counterMs 950 · loopMs 10000 · stampAtMs 8600 · stampText 'LGTM' · stampAngleDeg −14 · stampColor #3fb950 · checksCycle[4] (incl. red 'prod is down' state) · statusPills[4] · reviewersPerCard [4,8,12,16] · archCols 44 / archRows 34 · palette{bg,panel,fg,muted,green,red,amber,arch*}.
Construction: DOM fake-UI (chosen — UI is DOM in the specimen; text stays crisp/selectable at phone size) + JS-generated ASCII arch from a pointed-arch shape function (no image/tracing) + JS-built reviewer figures. Alternatives rejected: canvas (text legibility + fit harder at 360 px), SVG arch (path tracing risk vs purity), CSS-only (counter/check state sequencing needs JS clock).
Checklists — Execute: [x] segment cut+ffprobe · [x] recreation.html CONFIG-first · [x] comparison.html one sync control set, exact labels, phone stacking. Verify: [x] swap test · [x] purity grep · [x] comparison check (structure) · [ ] five-lens wave (below).
Failure points priced: readability at 360 px (Wave-2 trap — designed small first: 10–13 px UI text, checks 42% column, arch ~121 px wide; fit estimate 280 px ≤ 360 px) · counter legibility while spinning · stamp covering arch (intended, brief) · whip blur masking card swap (intended mechanic) · render-proof limitation (no Chrome render from this seat; comparison page is the render surface).
Phase guards: SKIPPED-WITH-REASON — jev-plan-exit / codex-plan-review / jev-prewave: BUILT-NOT-FIRED / UNBUILT; five-lens wave armed.

## §3 Execute
- segment.mp4: ffmpeg cut 55.5–65.5 s, libx264/yuv420p + aac, faststart; ffprobe: 10.000 s, 1916×1078, 7,189,868 bytes.
- recreation.html: one self-contained file, CONFIG at top, URL overrides (titles/stamp/cardMs/accent/bg), DOM PR card, rAF approvals counter, state-flipping checks, code-drawn ASCII arch + reviewer figures, whip transitions (translateX + blur), stamp slam (scale 3.2→1, overshoot easing, rotated −14°). No specimen media, no captions/subtitles.
- comparison.html: side-by-side, labels 'ORIGINAL — P1 “Look What I Can Do” @ 0:56–1:05' / 'RECREATION — T11 Code-review UI + stamp slam, parameterized', one Play/Pause/Restart/Swap control set (postMessage sync), panels stack ≤640 px.

## §5 Verify legs 1–3 (own, before Codex)
1. Swap test: PASS at logic level — URL overrides verified present and wired (titles→prs titles, stamp→stampText, cardMs 900→cardIntervalMs, accent #ffd75e→stampColor+palette.green, bg→palette.bg); node --check PASS on extracted script; exact swap values: titles 'ship: docs-first.mp4|ship: tiny-fix.mp4', stamp 'MERGED', cardMs 900, accent #ffd75e (also the comparison Swap button's values).
2. Purity grep: 0 hits for segment.mp4, source.mp4, <video, <img, t61.jpg, http://, https:// in recreation.html; caption/subtitle grep 0 in both files. Asset inventory: zero external assets — all DOM/ASCII/code.
3. Comparison check: PASS structurally — both panels, one control set driving video + iframe via postMessage, durations matched (segment 10.0 s = loopMs 10000), labels exact, stacking media query present. Pixel render not exercisable from this seat (standing limitation).

## §5 Verify leg 4–5 — Codex wave + consolidation (2026-11-14)
- Wave incident + cure: first motion return scored 66 on the initial build and named three mechanical defects (stamp not re-slamming on loop; card period 1.48 s not 1.3 s; no merge state at stamp). Fixed in-build before completing the wave (see scores.md wave note); motion re-run on the fixed build = 74. Superseded return kept at codex/lens-motion-run1-superseded.md, excluded from the average.
- Five-lens wave on the final build (returns verbatim in codex/): motion 74 · timing 78 · purity 100 · reusability 72 · readability 78.
- Consolidation: (74+78+100+72+78)/5 = 402/5 = 80.4 avg · min 72 → bar (≥85, min ≥70) NOT met → **FAIL, tier IN PROGRESS**, re-attempt routes to the practice job with scores.md's convergent cures first (A1): (1) counter lifecycle/absolute timeline, (2) stamp as settled terminal culmination.
- Faithfulness trace: §1 Observe ✓ (digest+TECHNIQUES+ev/t61 firsthand) · §2 Plan ✓ · §3 Execute ✓ · §5 Verify legs 1–3 ✓, leg 4 ✓ (5 lenses), leg 5 ✓ · Choice log: DOM over canvas/SVG (build-record §2) — not single-path · Deviation register: phase Jev/Codex guards SKIPPED-WITH-REASON (BUILT-NOT-FIRED/UNBUILT) as charged; motion lens run twice with reason recorded (defect fix, not score-shopping — first return preserved) · Evidence binding: segment ffprobe 10.000 s / 1916×1078 / 7,189,868 B · Git: UNCORROBORATED-BY-LOCAL-GIT at filing (JOB-14 sync is the lane's route).
