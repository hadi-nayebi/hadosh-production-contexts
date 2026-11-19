#!/usr/bin/env python3
"""Cycle-017 E4: VIEWS.md regeneration for changed items (tier lines + new rows per Feeds/consumer fields)."""
import pathlib

LIB = pathlib.Path.home() / "workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library"
V = LIB / "VIEWS.md"

def sub(old, new, count=1):
    t = V.read_text()
    n = t.count(old)
    assert n == count, f"VIEWS anchor count {n} (want {count}) for {old[:70]!r}"
    V.write_text(t.replace(old, new))
    print(f"OK VIEWS: {old[:60]!r}")

sub("**Views regenerated: 2026-11-16, style-library Cycle-016 (packet #9 registered — 12 techniques T166–T177 + 5 assets AS-70…AS-74 added per their Feeds/consumer fields, 4 variants folded under AS-09/AS-22/AS-52/AS-19 · tier moves on practice Wave 16 clean re-scores — T91/T123/T130 to RECREATED; T129's clean floor FAIL records no move).**",
    "**Views regenerated: 2026-11-17, style-library Cycle-017 (packet #10 registered — 12 techniques T178–T189 + 7 assets AS-75…AS-81 added per their Feeds/consumer fields, 3 variants folded under AS-19/AS-22/AS-41 · tier moves on recreation Waves 21–23 + practice Wave 18 scores — T145/T149/T151/T154/T167/T168/T170/T175 to RECREATED on first-attempt PASSes, T153/T156/T157 to RECREATED on attempt-2 PASSes, T160/T162 to IN PROGRESS).**")

tier_updates = [
    ("| T145 Scale-cascade cold open | DESCRIBED — **OWED #72** |", "| T145 Scale-cascade cold open | **RECREATED** (attempt 1: 87.4 PASS) |"),
    ("| T149 Isometric hard-steps path | DESCRIBED — **OWED #73** |", "| T149 Isometric hard-steps path | **RECREATED** (attempt 1: 92.8 PASS) |"),
    ("| T151 Galaxy-of-candles emergence field | DESCRIBED — **OWED #74** |", "| T151 Galaxy-of-candles emergence field | **RECREATED** (attempt 1: 90.4 PASS) |"),
    ("| T153 Duration-as-rows comparison bars | DESCRIBED — **OWED #75** |", "| T153 Duration-as-rows comparison bars | **RECREATED** (attempt 2: 92.0 PASS) |"),
    ("| T154 Window ellipse + players-joined chart | DESCRIBED — **OWED #76** |", "| T154 Window ellipse + players-joined chart | **RECREATED** (attempt 1: 86.0 PASS) |"),
    ("| T156 Isometric settlement diorama | DESCRIBED — **OWED #77** |", "| T156 Isometric settlement diorama | **RECREATED** (attempt 2: 87.2 PASS) |"),
    ("| T157 Detection-UI gag | DESCRIBED — **OWED #78** |", "| T157 Detection-UI gag | **RECREATED** (attempt 2: 94.6 PASS) |"),
    ("| T167 Hub growth | DESCRIBED — **OWED #81** |", "| T167 Hub growth | **RECREATED** (attempt 1: 92.0 PASS) |"),
    ("| T168 Spoke draw-on with dot landing | DESCRIBED — **OWED #82** |", "| T168 Spoke draw-on with dot landing | **RECREATED** (attempt 1: 95.4 PASS) |"),
    ("| T175 Name-exit ending | DESCRIBED — **OWED #84** |", "| T175 Name-exit ending | **RECREATED** (attempt 1: 94.2 PASS) |"),
]
for old, new in tier_updates:
    sub(old, new)
sub("| T160 Expansion-front envelopment | DESCRIBED — **OWED #79** |", "| T160 Expansion-front envelopment | **IN PROGRESS** (attempt 1: 84.2) |", count=2)
sub("| T162 Galaxy race table | DESCRIBED — **OWED #80** |", "| T162 Galaxy race table | **IN PROGRESS** (attempt 2: 87.0, floor FAIL) |")
sub("| T170 Vertical name-roll ticker | DESCRIBED — **OWED #83** |", "| T170 Vertical name-roll ticker | **RECREATED** (attempt 1: 94.4 PASS) |", count=2)

def insert_before_section(next_header, rows):
    t = V.read_text()
    anchor = "\n" + next_header
    assert anchor in t, f"section header missing: {next_header}"
    V.write_text(t.replace(anchor, "\n" + "\n".join(rows) + anchor, 1))
    print(f"OK VIEWS: {len(rows)} rows before {next_header}")

insert_before_section("## Transitions", [
    "| T178 Fade-from-black colonnade reveal | DESCRIBED — **OWED #85** | a dark-to-place reveal; the place is the first statement | P10 @ 0.00–3.04 |",
    "| T179 Single voiceover passage | DESCRIBED — not owed | one spoken passage frames the piece, then none (wording UNVERIFIED) | P10 @ 11.5–32.2 |",
    "| T181 Portrait holds (rest beats) | DESCRIBED — not owed | held faces as the montage's rests | P10 @ throughout; exemplar 28.8–36.4 |",
    "| T188 Continuous-music sound bridge | DESCRIBED — not owed | one unbroken music bed under every cut | P10 @ 0–212.68 |",
    "| AS-79 Single-passage voice framing | asset | one voice passage in the first 15%, then none | P10 lessons (§6 L6) |",
    "| AS-78 Continuous bed licenses density | asset | density lawful only over an unbroken bed | P10 lessons (§6 L4) |",
    "| AS-19 variant — portrait holds as rests | asset | held faces scheduled against density (under AS-19) | P10 lessons (§6 L5) |",
    "| AS-22 variant — journey-as-accumulation | asset | the set of shots itself is the portrait (under AS-22) | P10 lessons (§6 L8) |",
])
insert_before_section("## Diagrams", [
    "| T180 Graphic poster insert (icon as shot) | DESCRIBED — not owed | a flat graphic held as a full shot; a chapter marker | P10 @ ~19.0–22.2 |",
    "| T182 Detail-to-wide match on action | DESCRIBED — **OWED #86** | cut on the shared action, scale jumps, no cover | P10 @ cut at 81.8 |",
    "| T183 Foreground-arch framing | DESCRIBED — not owed | a panorama through a dark silhouette frame | P10 @ ~98.0–102.4 |",
    "| T184 Occlusion-framed cut landing | DESCRIBED — **OWED #87** | the new scene lands already occluded | P10 @ cut at 102.40 |",
    "| T185 Same-event multi-angle performance cutting | DESCRIBED — not owed | one event, many angles, rhythm licenses the cuts | P10 @ ~132.8–138.8 |",
    "| T186 Foreground pass, mid-coverage | DESCRIBED — **OWED #88** | a close pass covers the frame (hidden cut NOT established) | P10 @ ~189.3 |",
    "| T187 Rhythmic insert montage | DESCRIBED — not owed | sub-second inserts as percussion (shot count UNVERIFIED) | P10 @ 188.48–192.96 |",
    "| T188 Continuous-music sound bridge | DESCRIBED — not owed | one unbroken music bed under every cut | P10 @ 0–212.68 |",
    "| AS-75 Match-on-action scale jump | asset | detail and wide share subject + action phase | P10 lessons (§6 L1) |",
    "| AS-76 Occluded landing | asset | land the new scene behind foreground silhouettes | P10 lessons (§6 L2) |",
    "| AS-77 Pass-cover primitive | asset | a produced full-coverage pass hides the change | P10 lessons (§6 L3) |",
    "| AS-78 Continuous bed licenses density | asset | density lawful only over an unbroken bed | P10 lessons (§6 L4) |",
    "| AS-80 Graphic-insert chaptering | asset | a designed graphic frame chapters the sequence | P10 lessons (§6 L7) |",
    "| AS-19 variant — portrait holds as rests | asset | held faces scheduled against density (under AS-19) | P10 lessons (§6 L5) |",
    "| AS-41 variant — warm-grade coherence | asset | one warm grade unifies unlike locations (under AS-41) | P10 lessons (§6 L9) |",
])
insert_before_section("## Word animation", [
    "| T180 Graphic poster insert (icon as shot) | DESCRIBED — not owed | a flat graphic held as a full shot; a chapter marker | P10 @ ~19.0–22.2 |",
    "| AS-80 Graphic-insert chaptering | asset | a designed graphic frame chapters the sequence | P10 lessons (§6 L7) |",
    "| AS-41 variant — warm-grade coherence | asset | one warm grade unifies unlike locations (under AS-41) | P10 lessons (§6 L9) |",
])
insert_before_section("## Thumbnails", [
    "| T189 End card over final shot, then black hold | DESCRIBED — not owed | the film ends twice: as image, then as text | P10 @ ~209–212.68 |",
    "| T188 Continuous-music sound bridge | DESCRIBED — not owed | one unbroken music bed under every cut | P10 @ 0–212.68 |",
    "| AS-81 Double ending: card over image, then card on black | asset | credits borrow the best shot, then hold on black | P10 lessons (§6 L10) |",
    "| AS-78 Continuous bed licenses density | asset | density lawful only over an unbroken bed | P10 lessons (§6 L4) |",
    "| AS-22 variant — journey-as-accumulation | asset | the set of shots itself is the portrait (under AS-22) | P10 lessons (§6 L8) |",
])
# cross-container section is last: append T183 row at EOF
t = V.read_text()
row = "| T183 Foreground-arch framing | DESCRIBED — not owed | a panorama through a dark silhouette frame | P10 @ ~98.0–102.4 |"
assert row not in t
V.write_text(t.rstrip() + "\n" + row + "\n")
print("OK VIEWS: cross-container T183 row appended")
print("E4 VIEWS done")
