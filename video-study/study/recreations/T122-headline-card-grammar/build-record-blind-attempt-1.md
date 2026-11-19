# build-record — T122 headline-card grammar · Cycle 020 Wave 17 · attempt 1
Artifact: hidden_files/study/recreations/T122-headline-card-grammar/
Technique: Packet #6 T122 — dark-navy grid ground, headline top white bold, operative spans blue or white chip, support zone below (insertCard / none / checklist accumulating + warning). Beats atMs [0,4000,7000,11000], segment-anchored.
Faithfulness trace: packet mechanics → CONFIG beats (4 beats exactly as RUN §1b census: chip insert beat, blue beat, chip checklist beat, chip closing beat); variables (§1.3) → headline lines/spans/styles, support list, insert presence, beat durations (atMs), palette, grid density (grid.cellPx) — all CONFIG keys. Construction: DOM (A1 disposition in RUN §2b: DOM card text lawful, measured-fit owns legibility).
Segment: source 638.494s; segment.mp4 cut -ss 18 -t 14, re-encode libx264/aac faststart; ffprobe duration 14.000000s. Foreground census: frames/ 56 frames at 0.25s (fps=4) + contact-sheet.jpg. Measured sub-beats confirmed vs §1b: beat boundaries at ~0/4/7/11s segment-relative.
Asset inventory: code only — recreation loads no external/generated assets. Lawful set per G1-A.
codex-observe: fired, return codex/codex-observe.md — verdict sufficient to begin Observe, gaps named (onset order, exact boundaries, insert role). Disposition: APPLIED — census frames + §1b measured beats used as binding; gaps closed by seat census already on file.
codex-plan-review: fired, return codex/codex-plan-review.md — REVISE. Disposition: APPLIED in build — (1) swap span-exact (plain "We build it " + chip "piece by piece" via span array), (2) hierarchy bound via CONFIG headline/support typography + fit-table ratio, (3) checklist offsets [0,600,1200] + warnAt 1800 named keys, fits compressed beat (2514ms: offsets scale with atMs in swap harness logic — reveals at 0/377/754 + warning 1131 < 2514 ✓), (4) stage/typography/layout keys added to CONFIG, (5) predicted minimum corrected: reusability is risk lens vs T38's 68, no 76 claim made.
Own checks:
- Swap test (EXACT §2 values): words beat1 headline → "We build it piece by piece" (spans: "We build it " + chip "piece by piece") PASS in scratch copy; timing atMs ×(2200/3500) → [0,2514,4400,6914] PASS; palette blue #3b82f6 → #e879a0 PASS (old blue absent in scratch).
- Purity grep over recreation.html for segment\.mp4|source\.mp4|<video|<img|url\(|l2_pKB1EbMQ|t[0-9]+\.jpg: 0 hits PASS.
- Syntax: node --check on extracted inline JS: PASS.
- Comparison check: comparison.html carries ORIGINAL label "ORIGINAL — Grow With Kaz @ 0:18–0:32" + RECREATION label, one control set (Play/Pause/Restart) driving video + recreation seek via window.__T122.seek(slaved to video currentTime), vertical stacking max-width 380px — PASS (logic-level).
A6 legs: fit-table.md HITs 0 (warning 10→12px cured pre-wave); config-census.md HITs 0.
jev-prewave: see jev-prewave.md (fired on this record).
Final recreation.html SHA-256: 195211513bc9d38c0ee5df5e92eeb251c2a656825929711d9e325055802da382
PIXEL-UNVERIFIED: no browser binary; verification logic-level.
