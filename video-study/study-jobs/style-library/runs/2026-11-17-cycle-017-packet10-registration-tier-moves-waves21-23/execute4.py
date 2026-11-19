#!/usr/bin/env python3
"""Cycle-017 E3c: INDEX.md packet #10 row + state lines."""
import pathlib

LIB = pathlib.Path.home() / "workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library"

def sub(path, old, new, count=1):
    t = path.read_text()
    n = t.count(old)
    assert n == count, f"{path.name}: anchor count {n} (want {count}) for {old[:70]!r}"
    path.write_text(t.replace(old, new))
    print(f"OK {path.name}: {old[:60]!r}")

I = LIB / "INDEX.md"
t = I.read_text()
# state line: replace the Cycle-016 state paragraph's opening counts sentence up to the T23 warning
import re
m = re.search(r"\*\*State at Cycle-016, 2026-11-16: catalogued packets: 9 · in flight: 0 · techniques catalogued: 177 — by tier: DESCRIBED 106 \(of which \*\*OWED 13\*\* under the universal recreation rule · not owed 93\) · IN PROGRESS 18 · RECREATED 53\*\*", t)
assert m, "state line not found"
new_state = ("**State at Cycle-017, 2026-11-17: catalogued packets: 10 · in flight: 0 · techniques catalogued: 189 — by tier: DESCRIBED 105 (of which **OWED 4** under the universal recreation rule · not owed 101) · IN PROGRESS 20 · RECREATED 64**")
t = t.replace(m.group(0), new_state)
# extend the state paragraph with this cycle's acts, before the T23 warning sentence
anchor = " ⚠ T23's and T100's cited packet frames remain flagged"
assert anchor in t
t = t.replace(anchor,
    " Cycle-017 registered packet #10 (Watchtower of Turkey — T178–T189, 4 OWED at queue #85–#88). On filed recreation Waves 21–23 + practice Wave 18 scores it moved T145, T149, T151, T154, T167, T168, T170, T175 to RECREATED on first-attempt PASSes, T153, T156, T157 to RECREATED on practice attempt-2 PASSes, and T160, T162 to IN PROGRESS — the Wave 21/22 evidence was filed 2026-11-16 and is registered this cycle (Cycle-016's Observe did not read it; the lag is printed here, not smoothed). ⚠ T160's cited before-frame (ev/445-expansion-front-before.jpg) is flagged in its family entry — it shows a timeline/birth chart, not the expansion-front before state (recreation Cycle-025 census); correction charged to video-digestion." + anchor)
I.write_text(t)
print("OK INDEX.md state paragraph")

# packet #10 row: insert after packet #9 row (anchor on its closing consumer cell)
row_anchor = '| 9 | `hidden_files/study/video-digests/2026-11-16-vimeo-sixmap/`'
assert row_anchor in t
# insert after the full row 9 line
lines = t.splitlines(keepends=True)
for i, l in enumerate(lines):
    if l.startswith(row_anchor):
        row10 = ('| 10 | `hidden_files/study/video-digests/2026-11-16-vimeo-watchtower/` — digest.pdf (16,433 B, 6 pp, sha 915a0d91…) + digest.md (21,807 B, sha 8e260b59…) | "Watchtower of Turkey" — Leonardo Dalessandri, Vimeo 108018156 · 212.68 s, transition-led travel short film | 12 techniques (T178–T189 in library numbering) · density map (§4 — jointly-supported form only: 150–180 s rest · 180–210 s peak · single end boundary; **shot count UNVERIFIED**) · goods 7 / bads 6 in-packet (§5) · 10-row lessons table (§6) · 7-item idea bank (§7) · 20 evidence frames in ev/ + 213 census frames in frames/ + 4 clips in clips/ | DLC assembler — transition containers (primary); Hadosh Academy explainer production — opening/ending surfaces (secondary) — named in the packet itself (§2) |\n')
        lines.insert(i + 1, row10)
        break
I.write_text("".join(lines))
print("OK INDEX.md packet #10 row")

# adoption note for packet #10, after packet #9's adoption note
sub(I, "**Adoption note (packet #9):** ADOPTED CLEAN by video-digestion Cycle-015 (jev-packet ADOPT). Registration limit carried: easing is UNMEASURED for the hub growth, spoke draw-on and name-roll techniques (T167/T168/T170) — the packet prescribes durations, sizes, positions and cadence only; a rebuilder supplies its own interpolation curves. Reception: NOT YET RUN — charged to reception-analysis (counts NOT DISPLAYED on the access route; no baseline exists).",
       "**Adoption note (packet #9):** ADOPTED CLEAN by video-digestion Cycle-015 (jev-packet ADOPT). Registration limit carried: easing is UNMEASURED for the hub growth, spoke draw-on and name-roll techniques (T167/T168/T170) — the packet prescribes durations, sizes, positions and cadence only; a rebuilder supplies its own interpolation curves. Reception: NOT YET RUN — charged to reception-analysis (counts NOT DISPLAYED on the access route; no baseline exists).\n\n**Adoption note (packet #10):** ADOPTED CLEAN by video-digestion Cycle-016 (jev-packet ADOPT on the exact adopted version). Registration limits carried from the hand-off (Cycle-016 codex-condense CC-1): the packet's shot count is **UNVERIFIED** (two detector ledgers do not bound a true count) and its density shape is registered only in the jointly-supported form (150–180 s rest · 180–210 s peak · single end boundary); the single voiceover passage's wording is **UNVERIFIED** (T179/AS-79 bind on its existence and scarcity, not its words); whether an edit hides inside T186's foreground pass is NOT established. Reception: NOT YET RUN — charged to reception-analysis.")

# in-flight section restated
sub(I, "_None — no packet stands in flight at Cycle-016 (2026-11-16). Packet #9 (SixMap) moved to catalogued above — the intake stub noted at Cycle-015 has landed as a full packet (digest.md + digest.pdf + ev/ verified this cycle)._",
       "_None — no packet stands in flight at Cycle-017 (2026-11-17). Packet #10 (Watchtower of Turkey) moved to catalogued above (digest.md + digest.pdf + ev/ verified this cycle)._")

# also-in-library assets count
sub(I, "- `ASSETS.md` — markdown-first assets (tricks · textures · storytelling patterns · transcript devices · pacing principles) with evidence pointers — 71 registered.",
       "- `ASSETS.md` — markdown-first assets (tricks · textures · storytelling patterns · transcript devices · pacing principles) with evidence pointers — 78 registered.")
print("INDEX done")
