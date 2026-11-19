#!/usr/bin/env python3
"""Cycle-017 E1: tier moves. Exact-string replacements, each asserted exactly once."""
import pathlib

LIB = pathlib.Path.home() / "workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library"
REC = "hidden_files/study/recreations"

def sub(path, old, new):
    t = path.read_text()
    n = t.count(old)
    assert n == 1, f"{path.name}: anchor count {n} for {old[:80]!r}"
    path.write_text(t.replace(old, new))
    print(f"OK {path.name}: {old[:60]!r} -> tier/rec line")

def tier_move(fname, owed, tier, feeds_line, rec_line):
    p = LIB / fname
    sub(p, f"- Tier: **DESCRIBED — OWED #{owed}**", f"- Tier: **{tier}**")
    sub(p, feeds_line, feeds_line + "\n" + rec_line)

# --- openings: T145 ---
tier_move("techniques-openings.md", 72, "RECREATED",
    "- Feeds: opening — P8 @ 0:00–0:20 — ev/8-opening-galaxy-web.jpg, ev/18-emptiness-where-is-everyone.jpg (before/after pair; the move between them is continuous)",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 21, Cycle 024) avg 87.4, min 78, PASS at `{REC}/T145-scale-cascade-cold-open/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017 — Wave 21 evidence filed 2026-11-16, registered this cycle)")

D = "techniques-diagrams.md"
tier_move(D, 73, "RECREATED",
    "- Feeds: diagram — P8 @ 1:20–1:50 (returns 2:20, 5:10) — ev/85-hard-steps-isometric-path.jpg · sheet-1.jpg tiles 00:02:20 / 00:05:10",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 21, Cycle 024) avg 92.8, min 78, PASS at `{REC}/T149-isometric-hard-steps-path/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017)")
tier_move(D, 74, "RECREATED",
    "- Feeds: diagram — P8 @ ~2:25–2:40 — ev/150-galaxy-candles-civs.jpg",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 21, Cycle 024) avg 90.4, min 82, PASS at `{REC}/T151-galaxy-of-candles-emergence/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017)")
tier_move(D, 75, "RECREATED",
    "- Feeds: diagram — P8 @ 4:00–4:15 — ev/250-red-dwarf-lifespan-rows.jpg · sheet-1.jpg tile 00:04:00 (single-bar Sun state, before)",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 21, Cycle 024) avg 81.6, min 45, FAIL · attempt 2 (practice Wave 18, Cycle 019) avg 92.0, min 86, PASS (+10.4) at `{REC}/T153-duration-as-rows-bars/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017)")
tier_move(D, 76, "RECREATED",
    "- Feeds: diagram — P8 @ 4:30–4:51 — ev/272-window-before.jpg, ev/280-window-joining-bars.jpg, ev/288-window-after.jpg (before/during/after triplet) · clips/274-window-bars-build.mp4 · transcript.txt [04:32.17], [04:42.25], [04:51.91]",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 21, Cycle 024) avg 86.0, min 78, PASS at `{REC}/T154-window-ellipse-players-joined/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017)")
tier_move(D, 77, "RECREATED",
    "- Feeds: diagram — P8 @ 5:30–5:55 — ev/335-isometric-village.jpg · sheet-2.jpg tile 00:05:40 (the launch)",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 22, Cycle 025) avg 78.2, min 68, FAIL · attempt 2 (practice Wave 18, Cycle 019) avg 87.2, min 81, PASS (+9.0) at `{REC}/T156-isometric-settlement-diorama/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017)")
tier_move(D, 78, "RECREATED",
    "- Feeds: diagram — P8 @ 6:20–6:35 — ev/390-interference-detected.jpg",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 22, Cycle 025) avg 76.8, min 58, FAIL · attempt 2 (practice Wave 18, Cycle 019) avg 94.6, min 88, PASS (+17.8) at `{REC}/T157-detection-ui-gag/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017)")
tier_move(D, 79, "IN PROGRESS",
    "- Feeds: diagram · transition — P8 @ 7:26–7:36 — ev/445-expansion-front-before.jpg, ev/452-expansion-front-envelopment.jpg, ev/460-expansion-front-after.jpg (triplet) · clips/446-expansion-front-growth.mp4 · transcript.txt [07:26.47], [07:36.55]",
    f"- Recreation: IN PROGRESS — attempt 1 (recreation Wave 22, Cycle 025) avg 84.2, min 68, FAIL (both bar terms missed: average by 0.8, floor by 2) at `{REC}/T160-expansion-front-envelopment/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017). Catalogue-fidelity note (recreation Cycle-025 census): this entry's ev/445-expansion-front-before.jpg shows a timeline/birth chart, not the expansion-front before state — the before state binds via the Cycle-025 census at 447/449 s; the flag stands here until video-digestion files its correction.")
tier_move(D, 80, "IN PROGRESS",
    "- Feeds: diagram — P8 @ ~8:38–8:50 — ev/525-galaxy-race-table.jpg",
    f"- Recreation: IN PROGRESS — attempt 1 (recreation Wave 22, Cycle 025) avg 82.0, min 64, FAIL · attempt 2 (practice Wave 18, Cycle 019) avg 87.0, min 64, FAIL (+5.0, beating-below-bar — readability 64: the speech bubble occludes the ring head at the hold) at `{REC}/T162-galaxy-race-table/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017)")
tier_move(D, 81, "RECREATED",
    "- Feeds: diagram — P9 @ 0.36–1.12 — ev/000.76-hub-growing.jpg, ev/001.16-hub-complete.jpg",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 23, Cycle 026) avg 92.0, min 82, PASS at `{REC}/T167-hub-growth/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017)")
tier_move(D, 82, "RECREATED",
    "- Feeds: diagram — P9 @ per satellite, first at 1.44–1.92 — ev/001.40-spoke-before.jpg, ev/001.60-spoke-drawing.jpg, ev/001.96-first-satellite.jpg",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 23, Cycle 026) avg 95.4, min 87, PASS at `{REC}/T168-spoke-draw-on-dot-landing/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017)")

tier_move("techniques-word-animation.md", 83, "RECREATED",
    "- Feeds: word animation · diagram — P9 @ throughout — ev/001.60-spoke-drawing.jpg, ev/004.88-ticker-midroll.jpg",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 23, Cycle 026) avg 94.4, min 86, PASS at `{REC}/T170-vertical-name-roll-ticker/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017)")
tier_move("techniques-endings.md", 84, "RECREATED",
    "- Feeds: ending — P9 @ 9.76–10.04 — ev/009.72-final-network-last-name.jpg, ev/009.88-name-exited.jpg",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 23, Cycle 026) avg 94.2, min 90, PASS at `{REC}/T175-name-exit-ending/` (consumed artifact: recreation.html + scores.md) (moved Cycle-017)")

print("E1 done: 13 techniques tier-changed in family files")
