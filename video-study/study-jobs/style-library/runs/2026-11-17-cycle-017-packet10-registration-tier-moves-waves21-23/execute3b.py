#!/usr/bin/env python3
"""Cycle-017 E2/E3b part 2 (assets append + TECHNIQUES governance). First part applied in the execute3.py run."""
import pathlib

LIB = pathlib.Path.home() / "workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library"

def sub(path, old, new, count=1):
    t = path.read_text()
    n = t.count(old)
    assert n == count, f"{path.name}: anchor count {n} (want {count}) for {old[:70]!r}"
    path.write_text(t.replace(old, new))
    print(f"OK {path.name}: {old[:60]!r}")

A = LIB / "ASSETS.md"
# new assets appended at end of ASSETS.md
new_assets = """
### AS-75 — Match-on-action scale jump (technique)
- Lesson: cut on the shared action and let the scale jump — outgoing detail shot and incoming wide shot must share subject + action phase; the viewer completes the scale change because the action never breaks. Detail first, context second, no cover needed.
- Evidence: P10 §6 L1 + §3 T182 (P10-T05) (cut at 81.8 s; ev/081-hand-detail.jpg · ev/082-gozleme-wide.jpg · clips/081-match-action-1.4s.mp4) — consumer: transition (DLC assembler). jev-asset Cycle-017 profile: reusability 0.92 · evidence binding 0.95 · consumer namedness 0.88 · non-duplication 0.90 — REGISTER.

### AS-76 — Occluded landing (technique)
- Lesson: land the new scene behind foreground silhouettes — the incoming shot's first ~0.5 s majority-occluded by a photographed foreground, so the cut's discontinuity is spent on darkness and the scene is established before it is legible.
- Evidence: P10 §6 L2 + §3 T184 (P10-T07) (cut at 102.40 s; ev/102-minaret-pan.jpg · ev/103-guitar-occluded.jpg) — consumer: transition (DLC assembler). jev-asset Cycle-017 profile: reusability 0.88 · evidence binding 0.92 · consumer namedness 0.88 · non-duplication 0.88 — REGISTER.

### AS-77 — Pass-cover primitive (trick)
- Lesson: a foreground element crossing at full coverage at a boundary can hide any change behind it — a produced pass, not a found one, in HTML pieces; alignment spec: direction, coverage, duration. Registered on the pass evidence itself: the specimen's exemplar shows right-half coverage mid-pass, and whether an edit hides inside it is NOT established — the full-coverage claim is the form to build, not a specimen fact.
- Evidence: P10 §6 L3 + §3 T186 (P10-T09) (~189.3 s; ev/190-foreground-pass.jpg) — consumer: transition (DLC assembler). jev-asset Cycle-017 profile: reusability 0.82 · evidence binding 0.58 · consumer namedness 0.85 · non-duplication 0.85 — REGISTER.

### AS-78 — Continuous bed licenses density (pacing principle)
- Lesson: a cut-rate/density claim is lawful only over an unbroken music bed — state the precondition in the transition spec and prove it with a silence-gap census (the specimen: zero silence gaps ≥1.5 s at −35 dB across 212.68 s); remove the bridge and the same edit reads as a slideshow.
- Evidence: P10 §6 L4 + §3 T188 (P10-T11) (loudness census: mean −11.5 dB, max 0.0 dB; clips/135-sound-bridge-2.5s.mp4) — consumer: transition · opening · ending. jev-asset Cycle-017 profile: reusability 0.90 · evidence binding 0.92 · consumer namedness 0.85 · non-duplication 0.72 — REGISTER.

### AS-79 — Single-passage voice framing (transcript device)
- Lesson: one spoken passage in the first 15% of a piece, then none — a single voice passage frames an otherwise wordless piece as a spoken invocation, and its scarcity is the device. (Hand-off AS-P10-01; the specimen passage's wording is UNVERIFIED — the device binds on its existence and scarcity, not its words.)
- Evidence: P10 §6 L6 + §3 T179 (P10-T02) (one ASR segment 11.5–32.2 s in 212.68 s) — consumer: openings (Hadosh Academy explainer production). jev-asset Cycle-017 profile: reusability 0.82 · evidence binding 0.78 · consumer namedness 0.75 · non-duplication 0.88 — REGISTER.

### AS-80 — Graphic-insert chaptering (storytelling pattern)
- Lesson: a flat graphic filling the frame can chapter a photographic sequence — permit designed card/poster frames as full shots in montage sequences instead of title cards; the icon lands as a chapter marker. (Single-instance evidence in the specimen — binding limited accordingly.)
- Evidence: P10 §6 L7 + §3 T180 (P10-T03) (~19.0–22.2 s; ev/020-poster-graphic.jpg) — consumer: transition · diagram. jev-asset Cycle-017 profile: reusability 0.78 · evidence binding 0.68 · consumer namedness 0.72 · non-duplication 0.58 — REGISTER.

### AS-81 — Double ending: card over image, then card on black (technique)
- Lesson: end twice — credits over the piece's best shot first (the overlay borrows the shot's emotion), then the same card held on black (a clean room for the music/score to end in). A two-stage ending form for the ending container.
- Evidence: P10 §6 L10 + §3 T189 (P10-T12) (ev/205-balloons-dawn.jpg · ev/210-endcard-shot.jpg at 209.9 s · ev/211-endcard-black.jpg at 210.7 s) — consumer: endings. jev-asset Cycle-017 profile: reusability 0.88 · evidence binding 0.95 · consumer namedness 0.85 · non-duplication 0.82 — REGISTER.
"""
t = A.read_text()
assert "### AS-75 " not in t
A.write_text(t.rstrip() + "\n" + new_assets)
print("OK ASSETS.md: AS-75..AS-81 appended")

# ---------------- TECHNIQUES.md governance ----------------
T = LIB / "TECHNIQUES.md"
sub(T, "**Techniques catalogued: 177** (P1's 25 · P2's 23 · P3's 25 · P4's 25 · P5's 14 · P6's 19 · P7's 13 · P8's 21 · P9's 12, registered 2026-11-16, style-library Cycle-016 as T166–T177 — continuing library numbers; each entry also names its packet-local number.)",
       "**Techniques catalogued: 189** (P1's 25 · P2's 23 · P3's 25 · P4's 25 · P5's 14 · P6's 19 · P7's 13 · P8's 21 · P9's 12, registered 2026-11-16, style-library Cycle-016 as T166–T177 · P10's 12, registered 2026-11-17, style-library Cycle-017 as T178–T189 — continuing library numbers; each entry also names its packet-local number.)")
sub(T, "**Tiers (owner's recreation law, 2026-11-13): DESCRIBED 106 · IN PROGRESS 18 · RECREATED 53.** Only RECREATED counts as a complete catalogue item; the counts print separately, never merged. Tier moves only on recreation evidence (a filed scores.md verdict — see the tier register; last moves: style-library Cycle-016, 2026-11-16, on practice Wave 16 clean re-scores: T91/T123/T130 → RECREATED; T129's clean floor FAIL (89.2, min 68) recorded as a non-move, its contaminated PASS withdrawn).",
       "**Tiers (owner's recreation law, 2026-11-13): DESCRIBED 105 · IN PROGRESS 20 · RECREATED 64.** Only RECREATED counts as a complete catalogue item; the counts print separately, never merged. Tier moves only on recreation evidence (a filed scores.md verdict — see the tier register; last moves: style-library Cycle-017, 2026-11-17, on recreation Waves 21–23 + practice Wave 18 scores: T145/T149/T151/T154/T167/T168/T170/T175 → RECREATED on first-attempt PASSes, T153/T156/T157 → RECREATED on practice attempt-2 PASSes, T160 → IN PROGRESS on its first-attempt FAIL, T162 → IN PROGRESS with its attempt-2 beating-below-bar FAIL (87.0, min 64) recorded as a non-move to RECREATED. The Wave 21/22 moves were filed 2026-11-16 and registered this cycle — Cycle-016's Observe did not read them; the lag is printed, not smoothed.)")
sub(T, "**Obligation (owner's refinement, 2026-11-13): recreation is UNIVERSAL for motion graphics — of the 106 DESCRIBED, 13 are OWED (queue #72–#80 from packet #8, registered Cycle-015 · #81–#84 from packet #9, registered Cycle-016) and 93 are NOT OWED (priced in the register). The other obligation form is the practice pool: the 18 IN PROGRESS techniques, each owed re-attempts until it passes or plateaus with a filed WHY.**",
       "**Obligation (owner's refinement, 2026-11-13): recreation is UNIVERSAL for motion graphics — of the 105 DESCRIBED, 4 are OWED (queue #85–#88 from packet #10, registered Cycle-017; queue #72–#84 were all discharged by recreation Waves 21–23 first attempts) and 101 are NOT OWED (priced in the register). The other obligation form is the practice pool: the 20 IN PROGRESS techniques, each owed re-attempts until it passes or plateaus with a filed WHY.**")

# locator updates
sub(T, "- `techniques-openings.md` — T01, T07, T09, T14, T18, T20, T23, T26, T27, T28, T49, T50, T51, T74, T79, T99, T100, T102, T120, T121, T127, T133, T145, T146, T147, T148, T166",
       "- `techniques-openings.md` — T01, T07, T09, T14, T18, T20, T23, T26, T27, T28, T49, T50, T51, T74, T79, T99, T100, T102, T120, T121, T127, T133, T145, T146, T147, T148, T166, T178, T179, T181")
sub(T, "T101, T104, T105, T106, T107, T108, T109, T110, T122, T155, T177",
       "T101, T104, T105, T106, T107, T108, T109, T110, T122, T155, T177, T180, T182, T183, T184, T185, T186, T187, T188")
sub(T, "- `techniques-endings.md` — T21, T24, T46, T47, T68, T69, T70, T71, T89, T93, T94, T98, T111, T112, T125, T142, T164, T165, T175",
       "- `techniques-endings.md` — T21, T24, T46, T47, T68, T69, T70, T71, T89, T93, T94, T98, T111, T112, T125, T142, T164, T165, T175, T189")

# tier register: replace the OWED rows for moved techniques
reg_moves = [
    ("| T145 scale-cascade cold open (from P8) | DESCRIBED — **OWED #72** | classified at registration (Cycle-015): a continuous zoom/dissolve cascade — the lesson is the motion itself |",
     "| T145 scale-cascade cold open (from P8) | **RECREATED** | classified OWED #72 at registration (Cycle-015) · attempt 1 (recreation Wave 21, Cycle 024): avg 87.4, min 78, PASS — `hidden_files/study/recreations/T145-scale-cascade-cold-open/scores.md` (moved Cycle-017) |"),
    ("| T149 isometric hard-steps path (from P8) | DESCRIBED — **OWED #73** | classified at registration (Cycle-015): a diagram that builds tile by tile and is re-entered — build motion is the lesson |",
     "| T149 isometric hard-steps path (from P8) | **RECREATED** | classified OWED #73 at registration (Cycle-015) · attempt 1 (recreation Wave 21, Cycle 024): avg 92.8, min 78, PASS — `hidden_files/study/recreations/T149-isometric-hard-steps-path/scores.md` (moved Cycle-017) |"),
    ("| T151 galaxy-of-candles emergence field (from P8) | DESCRIBED — **OWED #74** | classified at registration (Cycle-015): lights kindling one by one across a plate — emergence as timed motion |",
     "| T151 galaxy-of-candles emergence field (from P8) | **RECREATED** | classified OWED #74 at registration (Cycle-015) · attempt 1 (recreation Wave 21, Cycle 024): avg 90.4, min 82, PASS — `hidden_files/study/recreations/T151-galaxy-of-candles-emergence/scores.md` (moved Cycle-017) |"),
    ("| T153 duration-as-rows comparison bars (from P8) | DESCRIBED — **OWED #75** | classified at registration (Cycle-015): rows filling the frame — the fill is the quantity and the motion |",
     "| T153 duration-as-rows comparison bars (from P8) | **RECREATED** | classified OWED #75 at registration (Cycle-015) · attempt 1 (recreation Wave 21, Cycle 024): avg 81.6, min 45, FAIL · attempt 2 (practice Wave 18, Cycle 019): avg 92.0, min 86, PASS (+10.4) — `hidden_files/study/recreations/T153-duration-as-rows-bars/scores.md` (moved Cycle-017) |"),
    ("| T154 window ellipse + players-joined chart (from P8) | DESCRIBED — **OWED #76** | classified at registration (Cycle-015): bars rising and swelling into territories inside a window — clip-ruled build |",
     "| T154 window ellipse + players-joined chart (from P8) | **RECREATED** | classified OWED #76 at registration (Cycle-015) · attempt 1 (recreation Wave 21, Cycle 024): avg 86.0, min 78, PASS — `hidden_files/study/recreations/T154-window-ellipse-players-joined/scores.md` (moved Cycle-017) |"),
    ("| T156 isometric settlement diorama (from P8) | DESCRIBED — **OWED #77** | classified at registration (Cycle-015): a diorama filling its tile — growth staging as motion |",
     "| T156 isometric settlement diorama (from P8) | **RECREATED** | classified OWED #77 at registration (Cycle-015) · attempt 1 (recreation Wave 22, Cycle 025): avg 78.2, min 68, FAIL · attempt 2 (practice Wave 18, Cycle 019): avg 87.2, min 81, PASS (+9.0) — `hidden_files/study/recreations/T156-isometric-settlement-diorama/scores.md` (moved Cycle-017) |"),
    ("| T157 detection-UI gag (from P8) | DESCRIBED — **OWED #78** | classified at registration (Cycle-015): an interface alert staging; precedent T07 permission-dialog gag OWED |",
     "| T157 detection-UI gag (from P8) | **RECREATED** | classified OWED #78 at registration (Cycle-015) · attempt 1 (recreation Wave 22, Cycle 025): avg 76.8, min 58, FAIL · attempt 2 (practice Wave 18, Cycle 019): avg 94.6, min 88, PASS (+17.8) — `hidden_files/study/recreations/T157-detection-ui-gag/scores.md` (moved Cycle-017) |"),
    ("| T160 expansion-front envelopment (from P8) | DESCRIBED — **OWED #79** | classified at registration (Cycle-015): a territory front growing continuously — clip-ruled; the approach is the mechanic |",
     "| T160 expansion-front envelopment (from P8) | **IN PROGRESS** | classified OWED #79 at registration (Cycle-015) · attempt 1 (recreation Wave 22, Cycle 025): avg 84.2, min 68, FAIL — `hidden_files/study/recreations/T160-expansion-front-envelopment/scores.md` (moved Cycle-017) · frame-fidelity flag on its family entry: ev/445 does not depict the before state (recreation Cycle-025 census) — correction charged to video-digestion |"),
    ("| T162 galaxy race table (from P8) | DESCRIBED — **OWED #80** | classified at registration (Cycle-015): a board populating with markers; precedent T82 countable multitude OWED |",
     "| T162 galaxy race table (from P8) | **IN PROGRESS** | classified OWED #80 at registration (Cycle-015) · attempt 1 (recreation Wave 22, Cycle 025): avg 82.0, min 64, FAIL · attempt 2 (practice Wave 18, Cycle 019): avg 87.0, min 64, FAIL (+5.0, beating-below-bar — readability floor) — `hidden_files/study/recreations/T162-galaxy-race-table/scores.md` (moved Cycle-017) |"),
    ("| T167 hub growth (from P9) | DESCRIBED — **OWED #81** | classified at registration (Cycle-016): a scale growth that establishes the hub's hierarchy — the motion is the lesson; easing UNMEASURED in the packet, carried on the entry |",
     "| T167 hub growth (from P9) | **RECREATED** | classified OWED #81 at registration (Cycle-016) · attempt 1 (recreation Wave 23, Cycle 026): avg 92.0, min 82, PASS — `hidden_files/study/recreations/T167-hub-growth/scores.md` (moved Cycle-017) |"),
    ("| T168 spoke draw-on with dot landing (from P9) | DESCRIBED — **OWED #82** | classified at registration (Cycle-016): the relational-entry move the DLC diagram container builds from (packet §2); easing UNMEASURED, carried on the entry |",
     "| T168 spoke draw-on with dot landing (from P9) | **RECREATED** | classified OWED #82 at registration (Cycle-016) · attempt 1 (recreation Wave 23, Cycle 026): avg 95.4, min 87, PASS — `hidden_files/study/recreations/T168-spoke-draw-on-dot-landing/scores.md` (moved Cycle-017) |"),
    ("| T170 vertical name-roll ticker (from P9) | DESCRIBED — **OWED #83** | classified at registration (Cycle-016): a masked one-line roll labelling a changing diagram — motion is the device; easing UNMEASURED, carried on the entry |",
     "| T170 vertical name-roll ticker (from P9) | **RECREATED** | classified OWED #83 at registration (Cycle-016) · attempt 1 (recreation Wave 23, Cycle 026): avg 94.4, min 86, PASS — `hidden_files/study/recreations/T170-vertical-name-roll-ticker/scores.md` (moved Cycle-017) |"),
    ("| T175 name-exit ending (from P9) | DESCRIBED — **OWED #84** | classified at registration (Cycle-016): a roll-out ending that empties the label and holds the bare result — distinct from T170 (the exit + hold is the ending's grammar) |",
     "| T175 name-exit ending (from P9) | **RECREATED** | classified OWED #84 at registration (Cycle-016) · attempt 1 (recreation Wave 23, Cycle 026): avg 94.2, min 90, PASS — `hidden_files/study/recreations/T175-name-exit-ending/scores.md` (moved Cycle-017) |"),
]
for old, new in reg_moves:
    sub(T, old, new)

# tier register: new P10 rows appended after the P9 grouped row
sub(T, "| T166, T169, T171–T174, T176, T177 (8 techniques, from P9) | DESCRIBED — not owed |",
       "| T178 fade-from-black colonnade reveal (from P10) | DESCRIBED — **OWED #85** | classified at registration (Cycle-017): the dark-to-place fade/exposure reveal is the motion lesson and HTML can carry it — two-leg rule both yes |\n| T182 detail-to-wide match on action (from P10) | DESCRIBED — **OWED #86** | classified at registration (Cycle-017): precedent T106 cut on action (RECREATED as an HTML recreation) — the scale-jump cut on the shared action is the lesson, HTML scenes can carry it |\n| T184 occlusion-framed cut landing (from P10) | DESCRIBED — **OWED #87** | classified at registration (Cycle-017): the landing shot's foreground silhouettes move across the subject while the eye settles — motion behaviour, HTML-carriable with silhouette plates |\n| T186 foreground pass, mid-coverage (from P10) | DESCRIBED — **OWED #88** | classified at registration (Cycle-017): the pass itself is the motion; the packet's L3 names it a primitive production must produce in HTML pieces. Limit: whether an edit hides inside the specimen's pass is NOT established |\n| T179–T181, T183, T185, T187–T189 (8 techniques, from P10) | DESCRIBED — not owed | priced at registration (Cycle-017): a transcript device (T179 single voiceover passage — wording UNVERIFIED, carried on its entry), static forms (T180 graphic held as a shot · T181 held portrait beats · T183 static framing · T189 static end card, precedents T24/T112), and systems (T185 multi-angle cutting system · T187 montage/pacing system, precedents T169/T174 · T188 audio system with no visual motion) — their transferable lessons register as ASSETS.md assets (AS-79…AS-81 + variants) |\n| T166, T169, T171–T174, T176, T177 (8 techniques, from P9) | DESCRIBED — not owed |")

print("E2/E3 governance done")
