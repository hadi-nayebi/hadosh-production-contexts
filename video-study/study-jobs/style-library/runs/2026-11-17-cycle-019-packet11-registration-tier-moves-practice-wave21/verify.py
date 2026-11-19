#!/usr/bin/env python3
"""Cycle-019 Verify V1, V3, V5, V6, V7: mechanical guards over the changed surfaces. Read-only."""
import pathlib, re

HOME = pathlib.Path.home() / "workspace/goals/diy-building-and-real-learning/hidden_files"
LIB = HOME / "study/style-library"
DIG = HOME / "study/video-digests"
REC = HOME / "study/recreations"

# V1a INDEX packet paths
idx = (LIB / "INDEX.md").read_text()
paths = sorted(set(re.findall(r"hidden_files/study/video-digests/([0-9a-z\-]+)/", idx)))
ok = sum(1 for d in paths if (DIG / d).is_dir())
print(f"V1a INDEX packet paths: {ok}/{len(paths)} exist -> {paths}")

# V1b cited frames for all 34 new entries: parse Feeds lines in family files for T190-T223
fams = ["techniques-openings.md","techniques-transitions.md","techniques-diagrams.md",
        "techniques-word-animation.md","techniques-endings.md","techniques-thumbnails.md","techniques-cross-container.md"]
new_ids = [f"T{n}" for n in range(190,224)]
pkt_of = {}
for t in new_ids:
    n = int(t[1:])
    pkt_of[t] = "2026-11-17-lia-caption-with-intention" if n <= 201 else "2026-11-17-yt-ajavsmbcapy"
tot = hit = 0; missing = []
canon = {}
for fname in fams:
    lines = (LIB / fname).read_text().splitlines()
    cur = None
    for l in lines:
        m = re.match(r"### (T\d+) ", l)
        if m: cur = m.group(1)
        if cur in new_ids and l.startswith("- Feeds:"):
            canon.setdefault(cur, []).append(fname)
            for fr in re.findall(r"ev/([A-Za-z0-9._\-]+\.jpg)", l):
                tot += 1
                if (DIG / pkt_of[cur] / "ev" / fr).exists(): hit += 1
                else: missing.append(f"{cur} {fr}")
print(f"V1b new-entry cited frames: {hit}/{tot} exist; missing={missing}")
print(f"V1b canonical homes: {sum(1 for v in canon.values() if v)} techniques with a Feeds line in exactly {sorted(set(len(v) for v in canon.values()))} file(s); entries found: {len(canon)}/34")

# V1c recreation artifacts for the 4 moved techniques
moved = {"T07":"T07-permission-dialog-gag","T122":"T122-headline-card-grammar","T132":"T132-serial-presentation","T100":"T100-pencil-check-task-sting"}
good = sum(1 for d in moved.values() if (REC/d/"recreation.html").exists() and (REC/d/"scores.md").exists())
print(f"V1c recreation artifacts (recreation.html + scores.md): {good}/{len(moved)}")

# V3 existence audit: P11/P12 rows re-probed
for slug in ["2026-11-17-lia-caption-with-intention","2026-11-17-yt-ajavsmbcapy"]:
    d = DIG / slug
    ev = len([x for x in (d/"ev").iterdir() if x.suffix==".jpg"])
    cl = len([x for x in (d/"clips").iterdir() if x.suffix==".mp4"])
    print(f"V3 {slug}: digest.md={(d/'digest.md').exists()} digest.pdf={(d/'digest.pdf').exists()} ev_jpg={ev} clips_mp4={cl}")

# V7 register recount from TECHNIQUES.md tier register rows
tech = (LIB / "TECHNIQUES.md").read_text()
rows = [l for l in tech.splitlines() if re.match(r"\| T[0-9]", l)]
rec_n = sum(1 for l in rows if "| **RECREATED** |" in l)
inp_n = sum(1 for l in rows if "| **IN PROGRESS** |" in l)
desc_rows = [l for l in rows if "DESCRIBED" in l.split("|")[2]]
print(f"V7 register rows={len(rows)} RECREATED={rec_n} IN_PROGRESS={inp_n} DESCRIBED-rows={len(desc_rows)}")

# Family Tier-line census for all 223
tier_count = {"RECREATED":0,"IN PROGRESS":0,"DESCRIBED":0}
owed = 0; seen=set()
for fname in fams:
    lines = (LIB / fname).read_text().splitlines()
    cur=None
    for l in lines:
        m = re.match(r"### (T\d+) ", l)
        if m: cur=m.group(1)
        if l.startswith("- Tier:") and cur:
            seen.add(cur)
            if "RECREATED" in l: tier_count["RECREATED"]+=1
            elif "IN PROGRESS" in l: tier_count["IN PROGRESS"]+=1
            elif "DESCRIBED" in l:
                tier_count["DESCRIBED"]+=1
                if "OWED #" in l: owed+=1
print(f"V7 family census: techniques with Tier lines={len(seen)} tiers={tier_count} DESCRIBED-OWED={owed}")

# V5 views cross-check (sampled mechanically): every new technique appears in VIEWS at least once; moved labels
views = (LIB / "VIEWS.md").read_text()
absent = [t for t in new_ids if f"| {t} " not in views]
print(f"V5 new techniques present in VIEWS: {34-len(absent)}/34; absent={absent}")
for t,lab in [("T07","RECREATED"),("T100","RECREATED"),("T122","RECREATED"),("T132","RECREATED")]:
    rows_t = [l for l in views.splitlines() if l.startswith(f"| {t} ")]
    print(f"V5 {t}: {len(rows_t)} VIEWS row(s), all RECREATED-labelled: {all('**RECREATED**' in r for r in rows_t)}")

# V6 consumption
cons = (LIB / "CONSUMPTION.md").read_text()
print("V6 CONSUMPTION prints 'Pulls recorded: 0':", "Pulls recorded: 0" in cons)

# ASSETS count
assets = (LIB / "ASSETS.md").read_text()
print("V-ASSETS headings:", len(re.findall(r"^### AS-\d+", assets, re.M)), "| header says 96:", "Assets registered: 96" in assets)
print("INDEX state line Cycle-019:", "State at Cycle-019" in idx, "| in-flight none:", "In flight" in idx and "_None" in idx)
