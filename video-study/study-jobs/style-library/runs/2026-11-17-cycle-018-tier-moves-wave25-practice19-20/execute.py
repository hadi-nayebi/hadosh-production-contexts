#!/usr/bin/env python3
"""Cycle-018 Execute E1-E4: tier moves, delta registrations, INDEX, VIEWS.
Exact-string replacements, each asserted exactly once (or the stated count)."""
import pathlib

LIB = pathlib.Path.home() / "workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library"
REC = "hidden_files/study/recreations"

def sub(path, old, new, count=1):
    t = path.read_text()
    n = t.count(old)
    assert n == count, f"{path.name}: anchor count {n} != {count} for {old[:80]!r}"
    path.write_text(t.replace(old, new))
    print(f"OK {path.name}: {old[:64]!r} -> ...")

def move_described(fname, tid, owed, feeds_line, rec_line):
    p = LIB / fname
    sub(p, f"- Tier: **DESCRIBED — OWED #{owed}**", "- Tier: **RECREATED**")
    sub(p, feeds_line, feeds_line + "\n" + rec_line)

def move_inprogress(fname, heading, old_rec, new_rec):
    p = LIB / fname
    sub(p, heading + "\n- Tier: **IN PROGRESS**", heading + "\n- Tier: **RECREATED**")
    sub(p, old_rec, new_rec)

# ---------- E1 family files ----------
# T178 (openings)
move_described("techniques-openings.md", "T178", 85,
    "- Feeds: opening — P10 @ 0.00–3.04 — ev/000-open-black.jpg, ev/001-open-colonnade.jpg",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 25, Cycle 028) avg 86.4, min 76, PASS at `{REC}/T178-fade-from-black-colonnade-reveal/` (consumed artifact: recreation.html + scores.md) (moved Cycle-018)")
# T182 (transitions)
move_described("techniques-transitions.md", "T182", 86,
    "- Feeds: transition — P10 @ cut at 81.8 — ev/081-hand-detail.jpg, ev/082-gozleme-wide.jpg · clips/081-match-action-1.4s.mp4",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 25, Cycle 028) avg 87.0, min 76, PASS at `{REC}/T182-detail-to-wide-match-on-action/` (consumed artifact: recreation.html + scores.md) (moved Cycle-018)")
# T184 (transitions)
move_described("techniques-transitions.md", "T184", 87,
    "- Feeds: transition — P10 @ cut at 102.40 — ev/102-minaret-pan.jpg, ev/103-guitar-occluded.jpg",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 25, Cycle 028) avg 90.4, min 78, PASS at `{REC}/T184-occlusion-framed-cut-landing/` (consumed artifact: recreation.html + scores.md) (moved Cycle-018)")
# T186 (transitions)
move_described("techniques-transitions.md", "T186", 88,
    "- Feeds: transition — P10 @ ~189.3 — ev/190-foreground-pass.jpg",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 25, Cycle 028) avg 87.2, min 78, PASS at `{REC}/T186-foreground-pass-mid-coverage/` (consumed artifact: recreation.html + scores.md) (moved Cycle-018)")
# T109 (transitions)
move_inprogress("techniques-transitions.md",
    "### T109 — Element morph / scene morph (P5 T11) ◆ — OWED #56",
    f"- Recreation: IN PROGRESS — attempt 1 (recreation Wave 16) avg 82.4, min 77, FAIL (average only) at `{REC}/T109-element-morph/` (consumed artifact: recreation.html + scores.md)",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 16) avg 82.4, min 77, FAIL (average only) · attempt 2 (practice Wave 19, Cycle 020) avg 86.8, min 80, PASS (+4.4) at `{REC}/T109-element-morph/` (consumed artifact: recreation.html + scores.md) (moved Cycle-018)")
# T92 (diagrams)
move_inprogress("techniques-diagrams.md",
    "### T92 — Data beats inside the dialogue (P4 T19) ◆ — OWED #43",
    f"- Recreation: IN PROGRESS — attempt 1 (recreation Wave 13) avg 82.4, min 76, FAIL at `{REC}/T92-data-beats/` (consumed artifact: recreation.html + scores.md)",
    f"- Recreation: RECREATED — attempt 1 (recreation Wave 13) avg 82.4, min 76, FAIL · attempt 2 (practice Wave 19, Cycle 020) avg 82.2, min 77, FAIL (−0.2, non-beating) · attempt 3 (practice Wave 20, Cycle 021) avg 90.2, min 82, PASS (+8.0) at `{REC}/T92-data-beats/` (consumed artifact: recreation.html + scores.md) (moved Cycle-018)")
# T03 (word-animation)
move_inprogress("techniques-word-animation.md",
    "### T03 — Live-typed lyric text",
    f"- Recreation: IN PROGRESS — attempt 1 avg 79.2 FAIL · attempt 2 (practice) avg 83.2, min 68, FAIL at `{REC}/T03-live-typed-lyric-text/` (consumed artifact: recreation.html + scores.md)",
    f"- Recreation: RECREATED — attempt 1 avg 79.2 FAIL · attempt 2 (practice) avg 83.2, min 68, FAIL · attempt 3 (practice Wave 20, Cycle 021) avg 89.0, min 78, PASS (+5.8) at `{REC}/T03-live-typed-lyric-text/` (consumed artifact: recreation.html + scores.md) (moved Cycle-018)")
# T17 delta (diagrams, tier unchanged)
p = LIB / "techniques-diagrams.md"
sub(p,
    f"- Recreation: IN PROGRESS — attempt 1 avg 67.6 FAIL · attempt 2 (practice) avg 81.8, min 65, FAIL · attempt 3 (practice Wave 11) avg 82.6, min 64, FAIL (+0.8, beating-below-bar) at `{REC}/T17-fake-newspaper-dataviz/` (consumed artifact: recreation.html + scores.md)",
    f"- Recreation: IN PROGRESS — attempt 1 avg 67.6 FAIL · attempt 2 (practice) avg 81.8, min 65, FAIL · attempt 3 (practice Wave 11) avg 82.6, min 64, FAIL (+0.8, beating-below-bar) · attempt 4 (practice Wave 19, Cycle 020) avg 83.8, min 78, FAIL (+1.2, beating-below-bar, floor cleared) at `{REC}/T17-fake-newspaper-dataviz/` (consumed artifact: recreation.html + scores.md)")
# T128 delta (diagrams, tier unchanged)
sub(p,
    f"- Recreation: IN PROGRESS — attempt 1 (recreation Wave 17/18) avg 83.0, min 74, FAIL (average only; floor cleared) at `{REC}/T128-title-card-chaptering/` (consumed artifact: recreation.html + scores.md); attempt 2 routes to practice",
    f"- Recreation: IN PROGRESS — attempt 1 (recreation Wave 17/18) avg 83.0, min 74, FAIL (average only; floor cleared) · attempt 2 (practice Wave 20, Cycle 021) avg 84.6, min 76, FAIL (+1.6, beating, below bar by 0.4) at `{REC}/T128-title-card-chaptering/` (consumed artifact: recreation.html + scores.md)")
# T23 delta (openings, tier unchanged)
p = LIB / "techniques-openings.md"
sub(p,
    f"attempt 5 (practice Wave 8) avg 83.0, min 76, FAIL (+8.0) at `{REC}/T23-comic-chapter-map/` (consumed artifact: recreation.html + scores.md)",
    f"attempt 5 (practice Wave 8) avg 83.0, min 76, FAIL (+8.0) · attempt 6 (practice Wave 19, Cycle 020) avg 79.0, min 68, FAIL (−4.0, non-beating) · attempt 7 (practice Wave 20, Cycle 021) avg 79.8, min 69, FAIL (+0.8, beating; floor breached — reusability 69 < 70) at `{REC}/T23-comic-chapter-map/` (consumed artifact: recreation.html + scores.md)")

# ---------- E2 TECHNIQUES.md register + header ----------
p = LIB / "TECHNIQUES.md"
sub(p, "**Tiers (owner's recreation law, 2026-11-13): DESCRIBED 105 · IN PROGRESS 20 · RECREATED 64.**",
       "**Tiers (owner's recreation law, 2026-11-13): DESCRIBED 101 · IN PROGRESS 17 · RECREATED 71.**")
sub(p, "last moves: style-library Cycle-017, 2026-11-17, on recreation Waves 21–23 + practice Wave 18 scores: T145/T149/T151/T154/T167/T168/T170/T175 → RECREATED on first-attempt PASSes, T153/T156/T157 → RECREATED on practice attempt-2 PASSes, T160 → IN PROGRESS on its first-attempt FAIL, T162 → IN PROGRESS with its attempt-2 beating-below-bar FAIL (87.0, min 64) recorded as a non-move to RECREATED. The Wave 21/22 moves were filed 2026-11-16 and registered this cycle — Cycle-016's Observe did not read them; the lag is printed, not smoothed.)",
       "last moves: style-library Cycle-018, 2026-11-17, on recreation Wave 25 + practice Waves 19–20 scores: T178/T182/T184/T186 → RECREATED on first-attempt PASSes (the packet-#10 OWED queue #85–#88 is discharged — OWED now 0), T109 → RECREATED on practice attempt-2 PASS, T92/T03 → RECREATED on practice attempt-3 PASSes; attempt deltas for T17 (a4 83.8 FAIL), T23 (a6 79.0 · a7 79.8, floor breached) and T128 (a2 84.6 FAIL) recorded with no tier change.)")
rows = [
 ("| T178 fade-from-black colonnade reveal (from P10) | DESCRIBED — **OWED #85** | classified at registration (Cycle-017): the dark-to-place fade/exposure reveal is the motion lesson and HTML can carry it — two-leg rule both yes |",
  f"| T178 fade-from-black colonnade reveal (from P10) | **RECREATED** | classified OWED #85 at registration (Cycle-017) · attempt 1 (recreation Wave 25, Cycle 028): avg 86.4, min 76, PASS — `{REC}/T178-fade-from-black-colonnade-reveal/scores.md` (moved Cycle-018) |"),
 ("| T182 detail-to-wide match on action (from P10) | DESCRIBED — **OWED #86** | classified at registration (Cycle-017): precedent T106 cut on action (RECREATED as an HTML recreation) — the scale-jump cut on the shared action is the lesson, HTML scenes can carry it |",
  f"| T182 detail-to-wide match on action (from P10) | **RECREATED** | classified OWED #86 at registration (Cycle-017) · attempt 1 (recreation Wave 25, Cycle 028): avg 87.0, min 76, PASS — `{REC}/T182-detail-to-wide-match-on-action/scores.md` (moved Cycle-018) |"),
 ("| T184 occlusion-framed cut landing (from P10) | DESCRIBED — **OWED #87** | classified at registration (Cycle-017): the landing shot's foreground silhouettes move across the subject while the eye settles — motion behaviour, HTML-carriable with silhouette plates |",
  f"| T184 occlusion-framed cut landing (from P10) | **RECREATED** | classified OWED #87 at registration (Cycle-017) · attempt 1 (recreation Wave 25, Cycle 028): avg 90.4, min 78, PASS — `{REC}/T184-occlusion-framed-cut-landing/scores.md` (moved Cycle-018) |"),
 ("| T186 foreground pass, mid-coverage (from P10) | DESCRIBED — **OWED #88** | classified at registration (Cycle-017): the pass itself is the motion; the packet's L3 names it a primitive production must produce in HTML pieces. Limit: whether an edit hides inside the specimen's pass is NOT established |",
  f"| T186 foreground pass, mid-coverage (from P10) | **RECREATED** | classified OWED #88 at registration (Cycle-017; limit stands: whether an edit hides inside the specimen's pass is NOT established) · attempt 1 (recreation Wave 25, Cycle 028): avg 87.2, min 78, PASS — `{REC}/T186-foreground-pass-mid-coverage/scores.md` (moved Cycle-018) |"),
 ("| T109 element morph / scene morph (from P5) | **IN PROGRESS** | attempt 1 (recreation Wave 16, Cycle 019): avg 82.4, min 77, FAIL (average only) — `hidden_files/study/recreations/T109-element-morph/scores.md` (moved Cycle-013); attempt 2 routes to practice |",
  f"| T109 element morph / scene morph (from P5) | **RECREATED** | attempt 1 (recreation Wave 16, Cycle 019): avg 82.4, min 77, FAIL (average only) · attempt 2 (practice Wave 19, Cycle 020): avg 86.8, min 80, PASS (+4.4) — `{REC}/T109-element-morph/scores.md` (moved Cycle-018; was IN PROGRESS at Cycle-013) |"),
 ("| T92 data beats (from P4) | **IN PROGRESS** | attempt 1 (recreation Wave 13): 82.4, min 76, FAIL — `hidden_files/study/recreations/T92-data-beats/scores.md` (moved Cycle-011; was DESCRIBED OWED #43) |",
  f"| T92 data beats (from P4) | **RECREATED** | attempt 1 (recreation Wave 13): 82.4, min 76, FAIL · attempt 2 (practice Wave 19, Cycle 020): 82.2, min 77, FAIL (−0.2, non-beating) · attempt 3 (practice Wave 20, Cycle 021): 90.2, min 82, PASS (+8.0) — `{REC}/T92-data-beats/scores.md` (moved Cycle-018; was IN PROGRESS at Cycle-011) |"),
 ("| T03 live-typed lyric text | **IN PROGRESS** | attempt 1: 79.2/55 FAIL · attempt 2 (practice Wave 1): 83.2, min 68, FAIL — `hidden_files/study/recreations/T03-live-typed-lyric-text/scores.md` (moved Cycle-005) |",
  f"| T03 live-typed lyric text | **RECREATED** | attempt 1: 79.2/55 FAIL · attempt 2 (practice Wave 1): 83.2, min 68, FAIL · attempt 3 (practice Wave 20, Cycle 021): 89.0, min 78, PASS (+5.8) — `{REC}/T03-live-typed-lyric-text/scores.md` (moved Cycle-018; was IN PROGRESS at Cycle-005) |"),
 ("| T17 fake-newspaper dataviz | **IN PROGRESS** | attempt 1: 67.6, min 28, FAIL · attempt 2 (practice Wave 2): 81.8, min 65, FAIL · attempt 3 (practice Wave 11): 82.6, min 64, FAIL (+0.8, beating-below-bar) — `hidden_files/study/recreations/T17-fake-newspaper-dataviz/scores.md` (moved Cycle-006, delta Cycle-012) |",
  "| T17 fake-newspaper dataviz | **IN PROGRESS** | attempt 1: 67.6, min 28, FAIL · attempt 2 (practice Wave 2): 81.8, min 65, FAIL · attempt 3 (practice Wave 11): 82.6, min 64, FAIL (+0.8, beating-below-bar) · attempt 4 (practice Wave 19, Cycle 020): 83.8, min 78, FAIL (+1.2, beating-below-bar, floor cleared) — `hidden_files/study/recreations/T17-fake-newspaper-dataviz/scores.md` (moved Cycle-006, deltas Cycle-012 + Cycle-018) |"),
 ("| T23 comic chapter-map motif | **IN PROGRESS** | attempt 1 (recreation Wave 3): 73.2, min 56, FAIL · attempt 2 (practice Wave 3): 75.8, min 62, FAIL (+2.6) · attempt 3 (practice Wave 4): 80.0, min 65, FAIL (+4.2) · attempt 4 (practice Wave 7): 75.0, min 60, FAIL (−5.0) · attempt 5 (practice Wave 8): 83.0, min 76, FAIL (+8.0) — `hidden_files/study/recreations/T23-comic-chapter-map/scores.md` (moved Cycle-006, deltas Cycle-007 + Cycle-010) · ⚠ frame-fidelity flag on this technique's entry below: its cited packet frames are disputed |",
  "| T23 comic chapter-map motif | **IN PROGRESS** | attempt 1 (recreation Wave 3): 73.2, min 56, FAIL · attempt 2 (practice Wave 3): 75.8, min 62, FAIL (+2.6) · attempt 3 (practice Wave 4): 80.0, min 65, FAIL (+4.2) · attempt 4 (practice Wave 7): 75.0, min 60, FAIL (−5.0) · attempt 5 (practice Wave 8): 83.0, min 76, FAIL (+8.0) · attempt 6 (practice Wave 19, Cycle 020): 79.0, min 68, FAIL (−4.0, non-beating) · attempt 7 (practice Wave 20, Cycle 021): 79.8, min 69, FAIL (+0.8, beating; floor breached) — `hidden_files/study/recreations/T23-comic-chapter-map/scores.md` (moved Cycle-006, deltas Cycle-007 + Cycle-010 + Cycle-018) · ⚠ frame-fidelity flag on this technique's entry below: its cited packet frames are disputed |"),
 ("| T128 title-card chaptering (from P6) | **IN PROGRESS** | attempt 1 (recreation Wave 17/18, Cycles 020/021): avg 83.0, min 74, FAIL (average only; floor cleared) — `hidden_files/study/recreations/T128-title-card-chaptering/scores.md` (moved Cycle-014; was DESCRIBED OWED #62); attempt 2 routes to practice |",
  "| T128 title-card chaptering (from P6) | **IN PROGRESS** | attempt 1 (recreation Wave 17/18, Cycles 020/021): avg 83.0, min 74, FAIL (average only; floor cleared) · attempt 2 (practice Wave 20, Cycle 021): avg 84.6, min 76, FAIL (+1.6, beating, below bar by 0.4) — `hidden_files/study/recreations/T128-title-card-chaptering/scores.md` (moved Cycle-014, delta Cycle-018; was DESCRIBED OWED #62) |"),
]
for old, new in rows:
    sub(p, old, new)

# ---------- E3 INDEX.md ----------
p = LIB / "INDEX.md"
sub(p, "**State at Cycle-017, 2026-11-17: catalogued packets: 10 · in flight: 0 · techniques catalogued: 189 — by tier: DESCRIBED 105 (of which **OWED 4** under the universal recreation rule · not owed 101) · IN PROGRESS 20 · RECREATED 64**",
       "**State at Cycle-018, 2026-11-17: catalogued packets: 10 · in flight: 1 · techniques catalogued: 189 — by tier: DESCRIBED 101 (of which **OWED 0** under the universal recreation rule · not owed 101) · IN PROGRESS 17 · RECREATED 71**")
sub(p, " ⚠ T160's cited before-frame",
       " Cycle-018 registered recreation Wave 25 + practice Waves 19–20: T178, T182, T184, T186 → RECREATED on first-attempt PASSes (packet #10's OWED queue #85–#88 discharged — OWED now 0), T109, T92, T03 → RECREATED on practice PASSes, and attempt deltas for T17, T23, T128 recorded with no tier change (T23 attempt 7 beats at 79.8 but breaches the floor at reusability 69 — no move). Packet #11 (Caption with Intention) stands IN FLIGHT below: its digestion resumption began during Cycle-018 (source + transcript + frames on disk; digest.md/digest.pdf not yet landed; video-digestion Cycle-017 stands incomplete on the same queue row). ⚠ T160's cited before-frame")
sub(p, "_None — no packet stands in flight at Cycle-017 (2026-11-17). Packet #10 (Watchtower of Turkey) moved to catalogued above (digest.md + digest.pdf + ev/ verified this cycle)._",
       "| # | Packet | Specimen | Gaps (disk-verified at Cycle-018, 2026-11-17) | Consumer |\n|---|---|---|---|---|\n| 11 | `hidden_files/study/video-digests/2026-11-17-lia-caption-with-intention/` — IN FLIGHT: source.mp4 (10,213,125 B) + transcript.json + post.json + probe.json + frames/ (115 .jpg) present | \"Caption With Intention PR FILM\" — ReelChicago Reel360, YouTube xmo3_URTIlg, posted 2025-05-02 · 114 s (metadata) — FCB Chicago / Chicago Hearing Society caption-design case film (QUEUE row #6) | **digest.md ABSENT · digest.pdf ABSENT · ev/ holds no evidence frames · clips/ empty · no technique catalogue · no adoption verdict** — video-digestion Cycle-017 closed INCOMPLETE on this row (Observe only); a digestion resumption created this directory during style-library Cycle-018 (file timestamps 2026-11-17). Completion is video-digestion's act; nothing is registered from this packet until the digest lands. | Word animation (caption design) — named by the queue row; consumer surface priced at adoption, not before |")

# ---------- E4 VIEWS.md ----------
p = LIB / "VIEWS.md"
sub(p, "**Views regenerated: 2026-11-17, style-library Cycle-017 (packet #10 registered — 12 techniques T178–T189 + 7 assets AS-75…AS-81 added per their Feeds/consumer fields, 3 variants folded under AS-19/AS-22/AS-41 · tier moves on recreation Waves 21–23 + practice Wave 18 scores — T145/T149/T151/T154/T167/T168/T170/T175 to RECREATED on first-attempt PASSes, T153/T156/T157 to RECREATED on attempt-2 PASSes, T160/T162 to IN PROGRESS).**",
       "**Views regenerated: 2026-11-17, style-library Cycle-018 (no Feeds changes; tier labels updated on recreation Wave 25 + practice Waves 19–20 scores — T178/T182/T184/T186 to RECREATED on first-attempt PASSes, T109 to RECREATED on attempt-2 PASS, T92/T03 to RECREATED on attempt-3 PASSes · T17/T23/T128 attempt labels updated, tiers unchanged).**")
view_rows = [
 ("| T178 Fade-from-black colonnade reveal | DESCRIBED — **OWED #85** |", "| T178 Fade-from-black colonnade reveal | **RECREATED** (attempt 1: 86.4 PASS) |"),
 ("| T182 Detail-to-wide match on action | DESCRIBED — **OWED #86** |", "| T182 Detail-to-wide match on action | **RECREATED** (attempt 1: 87.0 PASS) |"),
 ("| T184 Occlusion-framed cut landing | DESCRIBED — **OWED #87** |", "| T184 Occlusion-framed cut landing | **RECREATED** (attempt 1: 90.4 PASS) |"),
 ("| T186 Foreground pass, mid-coverage | DESCRIBED — **OWED #88** |", "| T186 Foreground pass, mid-coverage | **RECREATED** (attempt 1: 87.2 PASS) |"),
 ("| T109 Element morph / scene morph | **IN PROGRESS** (attempt 1: 82.4) |", "| T109 Element morph / scene morph | **RECREATED** (attempt 2: 86.8 PASS) |"),
 ("| T17 Fake-newspaper animated dataviz | **IN PROGRESS** (attempt 3: 82.6) |", "| T17 Fake-newspaper animated dataviz | **IN PROGRESS** (attempt 4: 83.8) |"),
 ("| T23 Comic chapter-map motif | **IN PROGRESS** (attempt 5: 83.0) |", "| T23 Comic chapter-map motif | **IN PROGRESS** (attempt 7: 79.8) |"),
]
for old, new in view_rows:
    sub(p, old, new)
sub(p, "| T92 Data beats in dialogue | **IN PROGRESS** (attempt 1: 82.4) |", "| T92 Data beats in dialogue | **RECREATED** (attempt 3: 90.2 PASS) |", count=2)
sub(p, "| T128 Title-card chaptering | **IN PROGRESS** (attempt 1: 83.0) |", "| T128 Title-card chaptering | **IN PROGRESS** (attempt 2: 84.6) |", count=2)
sub(p, "| T03 Live-typed lyric text | **IN PROGRESS** (attempt 2: 83.2) |", "| T03 Live-typed lyric text | **RECREATED** (attempt 3: 89.0 PASS) |")

print("EXECUTE E1-E4 COMPLETE")
