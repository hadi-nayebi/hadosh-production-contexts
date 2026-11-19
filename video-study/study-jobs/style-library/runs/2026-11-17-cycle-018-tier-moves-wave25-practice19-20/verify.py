#!/usr/bin/env python3
"""Cycle-018 Verify V1-V5, V7: mechanical guards over the changed surfaces."""
import pathlib, re

HOME = pathlib.Path.home() / "workspace/goals/diy-building-and-real-learning/hidden_files"
LIB = HOME / "study/style-library"
DIG = HOME / "study/video-digests"
REC = HOME / "study/recreations"

# V1 pointer census: INDEX packet paths (parse packet dirs cited in INDEX)
idx = (LIB / "INDEX.md").read_text()
paths = sorted(set(re.findall(r"hidden_files/study/video-digests/([0-9a-z\-]+)/", idx)))
ok = sum(1 for d in paths if (DIG / d).is_dir())
print(f"V1a INDEX packet paths: {ok}/{len(paths)} exist")

# V1b recreation artifacts for the ten touched techniques
touched = {
 "T178": "T178-fade-from-black-colonnade-reveal", "T182": "T182-detail-to-wide-match-on-action",
 "T184": "T184-occlusion-framed-cut-landing", "T186": "T186-foreground-pass-mid-coverage",
 "T109": "T109-element-morph", "T92": "T92-data-beats", "T03": "T03-live-typed-lyric-text",
 "T17": "T17-fake-newspaper-dataviz", "T23": "T23-comic-chapter-map", "T128": "T128-title-card-chaptering"}
good = 0
for tid, d in touched.items():
    rd = REC / d
    if (rd / "recreation.html").exists() and (rd / "scores.md").exists():
        good += 1
    else:
        print(f"  MISSING artifact: {tid} {d}")
print(f"V1b recreation artifacts (recreation.html + scores.md): {good}/{len(touched)}")

# V1c cited frames for the seven moved techniques exist in their packets
frames = {
 "T178": ("2026-11-16-vimeo-watchtower", ["ev/000-open-black.jpg", "ev/001-open-colonnade.jpg"]),
 "T182": ("2026-11-16-vimeo-watchtower", ["ev/081-hand-detail.jpg", "ev/082-gozleme-wide.jpg"]),
 "T184": ("2026-11-16-vimeo-watchtower", ["ev/102-minaret-pan.jpg", "ev/103-guitar-occluded.jpg"]),
 "T186": ("2026-11-16-vimeo-watchtower", ["ev/190-foreground-pass.jpg"]),
 "T109": ("2026-11-14-som-six-transitions", ["ev/55.0-scene-morph.jpg"]),
 "T92": ("2026-11-15-yt-jkdbk8qfcyY", ["ev/t392.jpg", "ev/t492.jpg"]),
 "T03": ("2026-11-13-ig-dfk4sfvvjjq", ["ev/t23.jpg"])}
tot = hit = 0
for tid, (pkt, fs) in frames.items():
    for f in fs:
        tot += 1
        if (DIG / pkt / f).exists(): hit += 1
        else: print(f"  MISSING frame: {tid} {pkt}/{f}")
print(f"V1c cited frames for moved techniques: {hit}/{tot}")

# V2 existence audit: in-flight gaps re-probed
d11 = DIG / "2026-11-17-lia-caption-with-intention"
print(f"V2 packet #11: dir exists={d11.is_dir()} digest.md={(d11/'digest.md').exists()} digest.pdf={(d11/'digest.pdf').exists()} (row claims both absent)")

# Register recount from TECHNIQUES.md tier register rows
tech = (LIB / "TECHNIQUES.md").read_text()
rows = [l for l in tech.splitlines() if re.match(r"\| T[0-9]+ ", l)]
rec_n = sum(1 for l in rows if "| **RECREATED** |" in l)
inp_n = sum(1 for l in rows if "| **IN PROGRESS** |" in l)
desc_n = sum(1 for l in rows if "DESCRIBED" in l.split("|")[2])
owed_n = sum(1 for l in rows if "DESCRIBED — **OWED" in l)
print(f"V7 register recount: rows={len(rows)} RECREATED={rec_n} IN_PROGRESS={inp_n} DESCRIBED={desc_n} of which OWED={owed_n}")

# Family-file Tier-line recount
fam_rec = fam_inp = fam_desc = 0
for f in LIB.glob("techniques-*.md"):
    for line in f.read_text().splitlines():
        if line.startswith("- Tier: **RECREATED**"): fam_rec += 1
        elif line.startswith("- Tier: **IN PROGRESS**"): fam_inp += 1
        elif line.startswith("- Tier: **DESCRIBED"): fam_desc += 1
print(f"V7 family Tier lines: RECREATED={fam_rec} IN_PROGRESS={fam_inp} DESCRIBED={fam_desc} total={fam_rec+fam_inp+fam_desc}")

# V3 views cross-check for the ten touched techniques
views = (LIB / "VIEWS.md").read_text()
expect = {"T178": "RECREATED", "T182": "RECREATED", "T184": "RECREATED", "T186": "RECREATED",
          "T109": "RECREATED", "T92": "RECREATED", "T03": "RECREATED",
          "T17": "IN PROGRESS", "T23": "IN PROGRESS", "T128": "IN PROGRESS"}
bad = 0
for tid, tier in expect.items():
    for line in views.splitlines():
        if re.match(rf"\| {tid} ", line):
            if f"**{tier}**" not in line:
                bad += 1; print(f"  VIEWS MISMATCH {tid}: {line[:120]}")
print(f"V3 views cross-check: {'EXACT for all touched rows' if bad == 0 else str(bad) + ' mismatches'}")

# V4 consumption
cons = (LIB / "CONSUMPTION.md").read_text()
print("V4 consumption:", "Pulls recorded: 0" in cons)

# V5 tier-evidence re-read (latest verdict per scores.md)
for tid, want in [("T178","PASS"),("T182","PASS"),("T184","PASS"),("T186","PASS"),("T109","PASS"),("T92","PASS"),("T03","PASS")]:
    s = (REC / touched[tid] / "scores.md").read_text()
    verdicts = re.findall(r"(PASS|FAIL)", s)
    print(f"V5 {tid}: last verdict token in scores.md = {verdicts[-1] if verdicts else 'NONE'} (expected {want})")
print("VERIFY SCRIPT DONE")
