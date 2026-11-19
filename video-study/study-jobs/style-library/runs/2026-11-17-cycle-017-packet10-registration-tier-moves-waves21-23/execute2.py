#!/usr/bin/env python3
"""Cycle-017 E3: packet #10 registration (family entries + pointers + packet keys)."""
import pathlib

LIB = pathlib.Path.home() / "workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library"
P10KEY = ' · **P10** = `hidden_files/study/video-digests/2026-11-16-vimeo-watchtower/` ("Watchtower of Turkey", Leonardo Dalessandri)'
P9KEY_FULL = ' · **P9** = `hidden_files/study/video-digests/2026-11-16-vimeo-sixmap/` ("SixMap", nez&pez for SixMap)'

def sub(path, old, new, count=1):
    t = path.read_text()
    n = t.count(old)
    assert n == count, f"{path.name}: anchor count {n} (want {count}) for {old[:70]!r}"
    path.write_text(t.replace(old, new))
    print(f"OK {path.name}: {old[:60]!r}")

def insert_before_also_feeds(fname, block):
    p = LIB / fname
    anchor = "## Also feeds this family (pointers — full entry in its canonical file)"
    sub(p, anchor, block.rstrip() + "\n\n" + anchor)

def append_pointer(fname, line):
    p = LIB / fname
    t = p.read_text()
    assert line not in t
    if not t.endswith("\n"):
        t += "\n"
    p.write_text(t + line + "\n")
    print(f"OK {fname}: pointer appended {line[:50]!r}")

# ---------- packet keys ----------
for f in ["techniques-openings.md", "techniques-transitions.md", "techniques-diagrams.md",
          "techniques-word-animation.md", "techniques-endings.md", "techniques-cross-container.md"]:
    t = (LIB / f).read_text()
    if "**P10**" in t:
        print(f"SKIP {f}: P10 key already present (partial first run)")
        continue
    sub(LIB / f, '("SixMap", nez&pez for SixMap)', '("SixMap", nez&pez for SixMap)' + P10KEY)
# thumbnails keys stop at P8 (no P9/P10 technique feeds it; key list completed for consistency)
_t = (LIB / "techniques-thumbnails.md").read_text()
if "**P10**" not in _t:
    sub(LIB / "techniques-thumbnails.md",
        '("Why Aliens Might Already Be On Their Way To Us", Kurzgesagt – In a Nutshell)',
        '("Why Aliens Might Already Be On Their Way To Us", Kurzgesagt – In a Nutshell)' + P9KEY_FULL + P10KEY)
# TECHNIQUES.md governance header missed the P9 key at Cycle-016 — add P9 + P10 now
sub(LIB / "TECHNIQUES.md",
    '("Why Aliens Might Already Be On Their Way To Us", Kurzgesagt – In a Nutshell)._',
    '("Why Aliens Might Already Be On Their Way To Us", Kurzgesagt – In a Nutshell)' + P9KEY_FULL + P10KEY + '._')

# ---------- openings: canonical T178, T179, T181 ----------
insert_before_also_feeds("techniques-openings.md", """
### T178 — Fade-from-black colonnade reveal (P10 T01) ◆ — OWED #85
- Tier: **DESCRIBED — OWED #85**
- Mechanics: the film opens on black; the first image is a shaded colonnade with a hanging red textile, revealed as exposure/motion settles over 0.00–3.04 s. No title, no logo — the place itself is the first statement, and the dark-to-place reveal sets the journey's contract (watch, don't listen for plot) in the first three seconds.
- Feeds: opening — P10 @ 0.00–3.04 — ev/000-open-black.jpg, ev/001-open-colonnade.jpg

### T179 — Single voiceover passage (transcript device) (P10 T02)
- Tier: **DESCRIBED — not owed**
- Mechanics: a single poetic spoken passage (credited "voice off meryem aboulouafa") rides over the opening images at 11.5–32.2 s — the film's only speech segment in 212.68 s — then never returns; the remaining ~180 s are instrumental music only. Its scarcity is the device: one voice passage frames the montage as a spoken invocation, then withdraws. **Limit carried at registration: the passage's exact wording is UNVERIFIED (ASR garbled, not quoted as transcript).**
- Feeds: opening — P10 @ 11.5–32.2 — ASR census record (named data record, packet production record) · ev/020-poster-graphic.jpg

### T181 — Portrait holds (rest beats) (P10 T04)
- Tier: **DESCRIBED — not owed**
- Mechanics: a face to camera, held well past information delivery (exemplar 28.8–36.4 s, ~7.6 s — the film's longest shot class), at intervals inside fast montage; the subject does not act, the hold itself is the beat. Holds are the montage's rests — they reset the eye and make the surrounding density feel faster by contrast. (Static holds — not owed; the transferable lesson is pacing, registered asset-side.)
- Feeds: opening · transition — P10 @ throughout; exemplar 28.8–36.4 — ev/031-portrait-elder.jpg, ev/191-portrait-hold.jpg
""")
append_pointer("techniques-openings.md",
    "- T188 — Continuous-music sound bridge (whole-film glue) (P10 T11) · tier DESCRIBED — not owed · P10 @ 0–212.68 (throughout) · canonical: techniques-transitions.md")

# ---------- transitions: canonical T180, T182, T183, T184, T185, T186, T187, T188 ----------
insert_before_also_feeds("techniques-transitions.md", """
### T180 — Graphic poster insert (icon as shot) (P10 T03)
- Tier: **DESCRIBED — not owed**
- Mechanics: a printed portrait poster on a red flag fills the whole frame at ~19.0–22.2 s — a flat graphic treated as a full shot inside a photographic montage, held long enough to read as an icon, not a detail; a national icon lands as a chapter marker without a title card. (Static graphic held as a shot — not owed.)
- Feeds: transition · diagram — P10 @ ~19.0–22.2 — ev/020-poster-graphic.jpg

### T182 — Detail-to-wide match on action (P10 T05) ◆ — OWED #86
- Tier: **DESCRIBED — OWED #86**
- Mechanics: an extreme close-up of hands rolling dough (motion-blurred, frame-filling) cuts at 81.8 s to the wide shot of the same activity — a woman making flatbread at her griddle. The action and subject are continuous; only the scale jumps. The viewer completes the scale change themselves because the action never breaks: detail first, context second, no cover needed. The packet prices this the film's single most transferable transition (good G1).
- Feeds: transition — P10 @ cut at 81.8 — ev/081-hand-detail.jpg, ev/082-gozleme-wide.jpg · clips/081-match-action-1.4s.mp4

### T183 — Foreground-arch framing (panorama through a silhouette) (P10 T06)
- Tier: **DESCRIBED — not owed**
- Mechanics: a city panorama (rooftops, harbour, Bosphorus) at ~98.0–102.4 s is viewed through the dark silhouette of a tower's arch openings — the foreground is near-black, static in frame, and occupies both edges while the lit city sits in the aperture. The silhouette gives the wide shot a frame inside the frame and a viewing position: the difference between a postcard and a witness shot. (Static framing device — not owed.)
- Feeds: transition · cross-container system — P10 @ ~98.0–102.4 — ev/100-tower-arch-panorama.jpg

### T184 — Occlusion-framed cut landing (P10 T07) ◆ — OWED #87
- Tier: **DESCRIBED — OWED #87**
- Mechanics: a panning townscape with minaret cuts at 102.40 s to a dark interior where a guitarist is seen between passing foreground silhouettes — the new shot lands already occluded, so the cut's discontinuity is spent on the dark foreground, not on the subject; by the time the guitarist is legible the new scene is already established. The packet prices this a scene change the viewer never has to process as an edit (good G2).
- Feeds: transition — P10 @ cut at 102.40 — ev/102-minaret-pan.jpg, ev/103-guitar-occluded.jpg

### T185 — Same-event multi-angle performance cutting (P10 T08)
- Tier: **DESCRIBED — not owed**
- Mechanics: one musical performance (singer with frame drum, violin beside him) is cut across angles inside the event at ~132.8–138.8 s — wide singer → violin close → singer profile — at sub-second to ~1 s intervals, all inside one room and one song. The event's own rhythm licenses the cut rate; acceleration reads as excitement, not scene change, because place and sound never change. (An editorial cutting system across one event — not owed.)
- Feeds: transition — P10 @ ~132.8–138.8 — ev/135-drummer.jpg, ev/136-violin.jpg · clips/135-sound-bridge-2.5s.mp4

### T186 — Foreground pass, mid-coverage (P10 T09) ◆ — OWED #88
- Tier: **DESCRIBED — OWED #88**
- Mechanics: at ~189.3 s, inside the 188.5–193.9 s rapid cluster, a bright foreground body/object passes so close to the lens that the frame's right half is a white blur while the street scene continues legible at left — a photographed wipe caught mid-pass. A full-coverage pass is the strongest cover a photographed transition can have; even without a cut, it resets the frame's composition. **Limit carried at registration: whether the edit hides inside this pass is NOT established at the packet's evidence level.**
- Feeds: transition — P10 @ ~189.3 — ev/190-foreground-pass.jpg

### T187 — Rhythmic insert montage (sub-second inserts) (P10 T10)
- Tier: **DESCRIBED — not owed**
- Mechanics: four unlike inserts in about a second at 188.48–192.96 s — a hand holding a BB pistol → street man with a foreground pass → an elder woman's portrait → a night tram — each ~0.2–0.5 s, none returning. At this speed the inserts stop being scenes and become percussion. (A montage/pacing system — not owed; its density lesson registers asset-side, in the jointly-supported density form only — the packet's shot count is UNVERIFIED.)
- Feeds: transition — P10 @ 188.48–192.96 — ev/189-gun-insert.jpg, ev/191-portrait-hold.jpg, ev/192-tram-night.jpg · clips/189-rhythmic-montage-1.6s.mp4

### T188 — Continuous-music sound bridge (whole-film glue) (P10 T11)
- Tier: **DESCRIBED — not owed**
- Mechanics: one instrumental track (credited ludovico einaudi) runs unbroken under every cut for the whole 212.68 s — loudness census: mean −11.5 dB, max 0.0 dB, ZERO silence gaps ≥1.5 s at −35 dB. No cut is ever exposed to silence, so no cut needs visual cover to survive: this is the precondition for the film's cut rate. (An audio system with no visual motion content — not owed; its lesson registers asset-side.)
- Feeds: transition · opening · ending — P10 @ 0–212.68 (throughout) — loudness/silence record (named data record, packet production record) · clips/135-sound-bridge-2.5s.mp4
""")
# T160 pointer tier update in this file
sub(LIB / "techniques-transitions.md",
    "- T160 — Expansion-front envelopment (territory as an approaching blob) · tier DESCRIBED — OWED #79 · P8 @ 7:26–7:36 · canonical: techniques-diagrams.md",
    "- T160 — Expansion-front envelopment (territory as an approaching blob) · tier IN PROGRESS (attempt 1: 84.2 FAIL) · P8 @ 7:26–7:36 · canonical: techniques-diagrams.md")
append_pointer("techniques-transitions.md",
    "- T181 — Portrait holds (rest beats) (P10 T04) · tier DESCRIBED — not owed · P10 @ throughout; exemplar 28.8–36.4 · canonical: techniques-openings.md")

# ---------- endings: canonical T189 ----------
insert_before_also_feeds("techniques-endings.md", """
### T189 — End card over final shot, then black hold (P10 T12)
- Tier: **DESCRIBED — not owed**
- Mechanics: the credits are overlaid in small tracked-out caps on the film's most beautiful shot (hot-air balloons at dawn) from ~209 s, then the same card is held on black from the cut at 210.32 s to 212.68 s. The film ends twice: once as image, once as text — the overlay borrows the shot's emotion for the credits; the black hold gives the music a clean room to end in. (Precedents T24/T112 static cards — not owed; the two-stage form is a configuration, its lesson an asset candidate.)
- Feeds: ending — P10 @ ~209–212.68 — ev/205-balloons-dawn.jpg, ev/210-endcard-shot.jpg, ev/211-endcard-black.jpg
""")
append_pointer("techniques-endings.md",
    "- T188 — Continuous-music sound bridge (whole-film glue) (P10 T11) · tier DESCRIBED — not owed · P10 @ 0–212.68 (throughout) · canonical: techniques-transitions.md")

# ---------- diagrams pointer: T180 ----------
append_pointer("techniques-diagrams.md",
    "- T180 — Graphic poster insert (icon as shot) (P10 T03) · tier DESCRIBED — not owed · P10 @ ~19.0–22.2 · canonical: techniques-transitions.md")

# ---------- cross-container pointer: T183 ----------
append_pointer("techniques-cross-container.md",
    "- T183 — Foreground-arch framing (panorama through a silhouette) (P10 T06) · tier DESCRIBED — not owed · P10 @ ~98.0–102.4 · canonical: techniques-transitions.md")

print("E3 family registration done")
