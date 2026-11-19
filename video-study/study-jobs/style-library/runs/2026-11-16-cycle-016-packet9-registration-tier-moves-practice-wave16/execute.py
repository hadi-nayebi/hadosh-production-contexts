#!/usr/bin/env python3
"""Cycle-016 Execute: tier moves T91/T123/T130, packet #9 registration T166-T177, assets AS-70..74 + 4 variants.
All edits are exact-string replacements; the script asserts each replacement happened exactly once."""
import pathlib, re, sys

LIB = pathlib.Path.home() / "workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library"

def load(name):
    return (LIB / name).read_text(errors="ignore")

def save(name, text):
    (LIB / name).write_text(text)

def rep(text, old, new, label):
    n = text.count(old)
    assert n == 1, f"{label}: found {n} occurrences of: {old[:120]!r}"
    return text.replace(old, new)

P9KEY = ' · **P9** = `hidden_files/study/video-digests/2026-11-16-vimeo-sixmap/` ("SixMap", nez&pez for SixMap)'

# ---------- family files: packet key append ----------
FAM = {
    "techniques-openings.md":      dict(canon_add=1, d=1, ip=0, r=0, ptr_add=0),
    "techniques-transitions.md":   dict(canon_add=1, d=1, ip=0, r=0, ptr_add=1),
    "techniques-diagrams.md":      dict(canon_add=7, d=7, ip=-3, r=3, ptr_add=1),
    "techniques-word-animation.md":dict(canon_add=1, d=1, ip=0, r=0, ptr_add=1),
    "techniques-endings.md":       dict(canon_add=1, d=1, ip=0, r=0, ptr_add=1),
    "techniques-cross-container.md":dict(canon_add=1, d=1, ip=0, r=0, ptr_add=1),
}
texts = {}
for name, delta in FAM.items():
    t = load(name)
    # packet key: append P9 to the line containing **P8** key end marker — append at end of the Packet keys line (the line that starts with **Packet keys:**)
    lines = t.splitlines(True)
    for i, l in enumerate(lines):
        if l.startswith("**Packet keys:**"):
            assert "P9" not in l, f"{name} already has P9 key"
            lines[i] = l.rstrip("\n") + P9KEY + "\n"
            break
    else:
        raise AssertionError(f"{name}: no Packet keys line")
    t = "".join(lines)
    # canonical count line recompute
    m = re.search(r"\*\*Canonical entries here: (\d+) — by tier: DESCRIBED (\d+) · IN PROGRESS (\d+) · RECREATED (\d+)\.\*\* Only RECREATED is substrate; DESCRIBED / IN PROGRESS are inspiration, tier printed on every entry\. Pointer lines into this family: (\d+)\.", t)
    assert m, f"{name}: canonical line not found"
    c, d, ip, r, ptr = map(int, m.groups())
    new_line = (f"**Canonical entries here: {c+delta['canon_add']} — by tier: DESCRIBED {d+delta['d']} · IN PROGRESS {ip+delta['ip']} · RECREATED {r+delta['r']}."
                f"** Only RECREATED is substrate; DESCRIBED / IN PROGRESS are inspiration, tier printed on every entry. Pointer lines into this family: {ptr+delta['ptr_add']}.")
    t = t.replace(m.group(0), new_line)
    texts[name] = t

# ---------- E1 tier moves in diagrams ----------
d = texts["techniques-diagrams.md"]
d = rep(d, "### T91 — Answer-per-exhibit Q&A with quote cards (P4 T18) ◆ — OWED #42\n- Tier: **IN PROGRESS**",
           "### T91 — Answer-per-exhibit Q&A with quote cards (P4 T18) ◆ — OWED #42\n- Tier: **RECREATED**", "T91 tier")
d = rep(d, "- Recreation: IN PROGRESS — attempt 1 (recreation Wave 13) avg 76.4, min 62, FAIL · attempt 2 (practice Wave 10) avg 82.4, min 62, FAIL (+6.0, beating-below-bar) at `hidden_files/study/recreations/T91-qa-quote-cards/` (consumed artifact: recreation.html + scores.md)",
           "- Recreation: RECREATED — attempt 1 (recreation Wave 13) avg 76.4, min 62, FAIL · attempt 2 (practice Wave 10) avg 82.4, min 62, FAIL (+6.0, beating-below-bar) · attempt 3 (practice Wave 16, Cycle 018) clean re-score avg 88.4, min 76, PASS (+6.0; the contaminated run-1 wave's 88.0 is preserved as evidence, the clean wave governs) at `hidden_files/study/recreations/T91-qa-quote-cards/` (consumed artifact: recreation.html + scores.md) — moved Cycle-016", "T91 recreation")
d = rep(d, "### T123 — Step-card segmentation (P6 T11) [TUT] ◆ — OWED #60\n- Tier: **IN PROGRESS**",
           "### T123 — Step-card segmentation (P6 T11) [TUT] ◆ — OWED #60\n- Tier: **RECREATED**", "T123 tier")
d = rep(d, "- Recreation: IN PROGRESS — attempt 1 (recreation Wave 17/18) avg 81.0, min 60, FAIL at `hidden_files/study/recreations/T123-step-card-segmentation/` (consumed artifact: recreation.html + scores.md); attempt 2 routes to practice",
           "- Recreation: RECREATED — attempt 1 (recreation Wave 17/18) avg 81.0, min 60, FAIL · attempt 2 (practice Wave 16, Cycle 018) avg 90.2, min 84, PASS (+9.2) at `hidden_files/study/recreations/T123-step-card-segmentation/` (consumed artifact: recreation.html + scores.md) — moved Cycle-016", "T123 recreation")
d = rep(d, "### T130 — Vintage 2D diagram animation (P6 T18) [PRD] ◆ — OWED #64\n- Tier: **IN PROGRESS**",
           "### T130 — Vintage 2D diagram animation (P6 T18) [PRD] ◆ — OWED #64\n- Tier: **RECREATED**", "T130 tier")
d = rep(d, "- Recreation: IN PROGRESS — attempt 1 (recreation Wave 17/18) avg 79.2, min 68, FAIL at `hidden_files/study/recreations/T130-vintage-2d-diagram-animation/` (consumed artifact: recreation.html + scores.md); attempt 2 routes to practice",
           "- Recreation: RECREATED — attempt 1 (recreation Wave 17/18) avg 79.2, min 68, FAIL · attempt 2 (practice Wave 16, Cycle 018) clean re-score avg 89.0, min 80, PASS (+9.8; the contaminated run-1 wave's 90.2 is preserved as evidence, the clean wave governs) at `hidden_files/study/recreations/T130-vintage-2d-diagram-animation/` (consumed artifact: recreation.html + scores.md) — moved Cycle-016", "T130 recreation")
texts["techniques-diagrams.md"] = d

# ---------- E3 packet #9 canonical entries (append at end of canonical section, before "## Also feeds") ----------
ENTRIES = {
"techniques-openings.md": """
### T166 — Seed-dot opening state (P9 T01)
- Tier: **DESCRIBED — not owed**
- Mechanics: the piece opens on near-nothing: one small white dot (radius ≈5 px) at centre, the static brand frame already in place, and the first name already beginning its roll at the footer's edge; the opening state holds unchanged for 0.36 s.
- Feeds: opening — P9 @ 0.00–0.36 — ev/000.00-first-frame.jpg, ev/000.20-seed-dot.jpg
""",
"techniques-diagrams.md": """
### T167 — Hub growth (P9 T02) ◆ — OWED #81
- Tier: **DESCRIBED — OWED #81**
- Mechanics: the seed dot scales up in place from ≈5 px to its full hub radius ≈32 px over ≈0.76 s — the longest single motion in the piece — while the hub's name rolls into the footer and settles; no spokes exist yet. **Limit carried at registration: easing is UNMEASURED — durations, sizes and cadence are prescribed, interpolation curves are not; a rebuilder supplies its own.**
- Feeds: diagram — P9 @ 0.36–1.12 — ev/000.76-hub-growing.jpg, ev/001.16-hub-complete.jpg

### T168 — Spoke draw-on with dot landing (P9 T03) ◆ — OWED #82
- Tier: **DESCRIBED — OWED #82**
- Mechanics: each satellite arrives the same way: a thin white line (1–2 px) extends from the hub toward the satellite's position over the burst (≈0.16–0.48 s), and the satellite dot (radius ≈21 px) materialises at the line's end as the draw completes; no arrowheads — the line is a relationship, not a flow. **Limit carried at registration: easing is UNMEASURED (see T167).**
- Feeds: diagram — P9 @ per satellite, first at 1.44–1.92 — ev/001.40-spoke-before.jpg, ev/001.60-spoke-drawing.jpg, ev/001.96-first-satellite.jpg

### T169 — One-burst-one-entity cadence (P9 T04)
- Tier: **DESCRIBED — not owed**
- Mechanics: the whole build is 23 discrete motion bursts separated by completely static holds — no continuous motion anywhere; bursts B01–B23 each add exactly one node (centre count rises by exactly 1 across every burst, 0→23); burst durations shrink from 0.76 s to ≈0.16–0.24 s, holds from 0.32 s to ≈0.12 s.
- Feeds: diagram — P9 @ 0.36–9.64 — the §4 burst table (a named data record) · frames/00_50-census.jpg … frames/09_52-census.jpg

### T171 — Burst–name synchrony (P9 T06)
- Tier: **DESCRIBED — not owed**
- Mechanics: the ticker roll and the spoke draw are locked to the same burst: the name that settles at a burst's hold is the entity that burst just added (verified across all 23 bursts); there is no narration, no caption and no in-graph label — the synchrony is the only thing that binds a name to a dot.
- Feeds: diagram · word animation — P9 @ throughout — ev/001.96-first-satellite.jpg, ev/005.12-nine-nodes.jpg · the §4 burst table (names column)

### T172 — Radial fan layout, fixed hub (P9 T07)
- Tier: **DESCRIBED — not owed**
- Mechanics: the hub never moves (centre (482, 484) in 1080 coordinates); all 22 spokes are hub–satellite only; satellites fan predominantly north/north-east/east (17 of 22) with a western/south-western counterweight of 3 and one north-east ray carrying two satellites collinearly; satellites never overlap, so every dot stays individually countable.
- Feeds: diagram — P9 @ throughout — ev/007.16-fifteen-nodes.jpg, ev/009.72-final-network-last-name.jpg · positions-final.json (the named positional-census record)

### T174 — Accelerating cadence (P9 T09)
- Tier: **DESCRIBED — not owed**
- Mechanics: burst start-to-start period falls from 1.08 s (B01→B02) through ≈0.40 s mid-piece to a ≈0.32 s plateau, with burst durations and holds shrinking in step; the acceleration is smooth, not stepped — no two consecutive periods differ by more than ≈0.36 s.
- Feeds: diagram · transition — P9 @ 0.36–9.64 — the §4 tempo map (period column, from the burst table)

### T176 — Monochrome network, colour reserved (P9 T11)
- Tier: **DESCRIBED — not owed**
- Mechanics: every diagram element — hub, satellites, spokes, names — is flat white on pure black; no shading, no glow, no satellite colour-coding; colour exists only in the static brand frame (T173), so the diagram's information is purely structural (count, position, connection).
- Feeds: diagram · cross-container system — P9 @ throughout — ev/005.12-nine-nodes.jpg, ev/010.00-end-state.jpg
""",
"techniques-word-animation.md": """
### T170 — Vertical name-roll ticker (P9 T05) ◆ — OWED #83
- Tier: **DESCRIBED — OWED #83**
- Mechanics: entity names occupy one line in the footer, centred between the two brand rings; on each burst the settled name rolls upward and out while the next name rises from below the rule line — mid-roll frames show both names clipped against the line with a vertical gradient sheen on the moving text, settling to flat white at each hold; 23 names for 23 nodes. **Limit carried at registration: easing is UNMEASURED (see T167).**
- Feeds: word animation · diagram — P9 @ throughout — ev/001.60-spoke-drawing.jpg, ev/004.88-ticker-midroll.jpg
""",
"techniques-cross-container.md": """
### T173 — Persistent brand frame (P9 T08)
- Tier: **DESCRIBED — not owed**
- Mechanics: two gradient ring marks (teal→orange) sit at the bottom corners, joined by a thin gradient rule line at y≈905 with the name line just above it; the frame is present from the first frame, never moves, and is the only colour in the piece — it also serves as the stillness reference that makes the bursts read as events.
- Feeds: cross-container system — P9 @ 0.00–10.04 (throughout) — ev/000.00-first-frame.jpg, ev/010.00-end-state.jpg
""",
"techniques-endings.md": """
### T175 — Name-exit ending (P9 T10) ◆ — OWED #84
- Tier: **DESCRIBED — OWED #84**
- Mechanics: after the last satellite lands and its name settles, one final footer-only burst (9.76–9.88 s, network change 0.00%) rolls the last name up and out, leaving the footer empty; the complete network then holds alone for the final ≈0.16 s — emptying the label hands the last beat to the diagram itself (the packet prices the short hold as bad B1; a production borrowing this form holds the result ≥1 s — asset AS-71).
- Feeds: ending — P9 @ 9.76–10.04 — ev/009.72-final-network-last-name.jpg, ev/009.88-name-exited.jpg
""",
"techniques-transitions.md": """
### T177 — Hard loop restart (P9 T12)
- Tier: **DESCRIBED — not owed**
- Mechanics: the file ends on the complete network (footer empty) and the loop point cuts directly back to the seed-dot opening state — no fade, no reverse build, no transition of any kind (verified on the joined end→start evidence clip, join at 1.0 s); priced as a bad in the packet (B2) — registered as the form to recognise and cure, not to copy.
- Feeds: transition · ending — P9 @ 10.04 → 0.00 — clips/loop-seam-joined.mp4 · ev/010.00-end-state.jpg vs ev/000.20-seed-dot.jpg
""",
}
POINTERS = {
"techniques-diagrams.md": "\n- T170 — Vertical name-roll ticker (P9 T05) ◆ — OWED #83 · tier DESCRIBED · P9 @ throughout · canonical: techniques-word-animation.md\n",
"techniques-word-animation.md": "\n- T171 — Burst–name synchrony (P9 T06) · tier DESCRIBED — not owed · P9 @ throughout · canonical: techniques-diagrams.md\n",
"techniques-transitions.md": "\n- T174 — Accelerating cadence (P9 T09) · tier DESCRIBED — not owed · P9 @ 0.36–9.64 · canonical: techniques-diagrams.md\n",
"techniques-endings.md": "\n- T177 — Hard loop restart (P9 T12) · tier DESCRIBED — not owed · P9 @ 10.04 → 0.00 · canonical: techniques-transitions.md\n",
"techniques-cross-container.md": "\n- T176 — Monochrome network, colour reserved (P9 T11) · tier DESCRIBED — not owed · P9 @ throughout · canonical: techniques-diagrams.md\n",
}
for name, block in ENTRIES.items():
    t = texts[name]
    marker = "\n## Also feeds this family"
    assert marker in t, f"{name}: no Also-feeds section"
    t = t.replace(marker, "\n" + block.rstrip("\n") + "\n" + marker, 1)
    texts[name] = t
for name, ptr in POINTERS.items():
    texts[name] = texts[name].rstrip("\n") + ptr

for name, t in texts.items():
    save(name, t)
print("family files done")

# ---------- TECHNIQUES.md governance ----------
g = load("TECHNIQUES.md")
g = rep(g, "**Techniques catalogued: 165** (P1's 25 · P2's 23 · P3's 25 · P4's 25 · P5's 14 · P6's 19 · P7's 13 · P8's 21, registered 2026-11-16, style-library Cycle-015 as T145–T165 — continuing library numbers; each entry also names its packet-local number.)",
           "**Techniques catalogued: 177** (P1's 25 · P2's 23 · P3's 25 · P4's 25 · P5's 14 · P6's 19 · P7's 13 · P8's 21 · P9's 12, registered 2026-11-16, style-library Cycle-016 as T166–T177 — continuing library numbers; each entry also names its packet-local number.)", "gov total")
g = rep(g, "**Tiers (owner's recreation law, 2026-11-13): DESCRIBED 94 · IN PROGRESS 21 · RECREATED 50.**",
           "**Tiers (owner's recreation law, 2026-11-13): DESCRIBED 106 · IN PROGRESS 18 · RECREATED 53.**", "gov tiers")
g = rep(g, "**Obligation (owner's refinement, 2026-11-13): recreation is UNIVERSAL for motion graphics — of the 94 DESCRIBED, 9 are OWED (queue #72–#80, all from packet #8, registered Cycle-015) and 85 are NOT OWED (priced in the register). The other obligation form is the practice pool: the 21 IN PROGRESS techniques, each owed re-attempts until it passes or plateaus with a filed WHY.**",
           "**Obligation (owner's refinement, 2026-11-13): recreation is UNIVERSAL for motion graphics — of the 106 DESCRIBED, 13 are OWED (queue #72–#80 from packet #8, registered Cycle-015 · #81–#84 from packet #9, registered Cycle-016) and 93 are NOT OWED (priced in the register). The other obligation form is the practice pool: the 18 IN PROGRESS techniques, each owed re-attempts until it passes or plateaus with a filed WHY.**", "gov obligation")
# locator appends
LOC = {
 "- `techniques-openings.md` —": "T166",
 "- `techniques-transitions.md` —": "T177",
 "- `techniques-diagrams.md` —": "T167, T168, T169, T171, T172, T174, T176",
 "- `techniques-word-animation.md` —": "T170",
 "- `techniques-endings.md` —": "T175",
 "- `techniques-cross-container.md` —": "T173",
}
lines = g.splitlines(True)
for i, l in enumerate(lines):
    for prefix, add in LOC.items():
        if l.startswith(prefix):
            lines[i] = l.rstrip("\n") + ", " + add + "\n"
g = "".join(lines)
# tier register moves
g = rep(g, "| T91 Q&A quote cards (from P4) | **IN PROGRESS** | attempt 1 (recreation Wave 13): 76.4, min 62, FAIL · attempt 2 (practice Wave 10): 82.4, min 62, FAIL (+6.0, beating-below-bar) — `hidden_files/study/recreations/T91-qa-quote-cards/scores.md` (moved Cycle-011, delta Cycle-012; was DESCRIBED OWED #42) |",
           "| T91 Q&A quote cards (from P4) | **RECREATED** | attempt 1 (recreation Wave 13): 76.4, min 62, FAIL · attempt 2 (practice Wave 10): 82.4, min 62, FAIL (+6.0, beating-below-bar) · attempt 3 (practice Wave 16, Cycle 018): clean re-score 88.4, min 76, PASS (+6.0; contaminated run-1 wave preserved, clean wave governs) — `hidden_files/study/recreations/T91-qa-quote-cards/scores.md` (moved Cycle-016; was DESCRIBED OWED #42) |", "reg T91")
g = rep(g, "| T123 step-card segmentation (from P6) | **IN PROGRESS** | attempt 1 (recreation Wave 17/18, Cycles 020/021): avg 81.0, min 60, FAIL — `hidden_files/study/recreations/T123-step-card-segmentation/scores.md` (moved Cycle-014; was DESCRIBED OWED #60); attempt 2 routes to practice |",
           "| T123 step-card segmentation (from P6) | **RECREATED** | attempt 1 (recreation Wave 17/18, Cycles 020/021): avg 81.0, min 60, FAIL · attempt 2 (practice Wave 16, Cycle 018): avg 90.2, min 84, PASS (+9.2) — `hidden_files/study/recreations/T123-step-card-segmentation/scores.md` (moved Cycle-016; was DESCRIBED OWED #60) |", "reg T123")
g = rep(g, "| T130 vintage 2D diagram animation (from P6) | **IN PROGRESS** | attempt 1 (recreation Wave 17/18, Cycles 020/021): avg 79.2, min 68, FAIL — `hidden_files/study/recreations/T130-vintage-2d-diagram-animation/scores.md` (moved Cycle-014; was DESCRIBED OWED #64); attempt 2 routes to practice |",
           "| T130 vintage 2D diagram animation (from P6) | **RECREATED** | attempt 1 (recreation Wave 17/18, Cycles 020/021): avg 79.2, min 68, FAIL · attempt 2 (practice Wave 16, Cycle 018): clean re-score avg 89.0, min 80, PASS (+9.8; contaminated run-1 wave preserved, clean wave governs) — `hidden_files/study/recreations/T130-vintage-2d-diagram-animation/scores.md` (moved Cycle-016; was DESCRIBED OWED #64) |", "reg T130")
# T129 register: append the clean-fail note (no tier change)
g = rep(g, "| T129 evidence-board composition (from P6) | **IN PROGRESS** | attempt 1 (recreation Wave 17/18, Cycles 020/021): avg 81.0, min 62, FAIL — `hidden_files/study/recreations/T129-evidence-board-composition/scores.md` (moved Cycle-014; was DESCRIBED OWED #63); attempt 2 routes to practice |",
           "| T129 evidence-board composition (from P6) | **IN PROGRESS** | attempt 1 (recreation Wave 17/18, Cycles 020/021): avg 81.0, min 62, FAIL · attempt 2 (practice Wave 16, Cycle 018): clean re-score avg 89.2, min 68, FAIL — average clears, reusability floor does not (68 < 70); the contaminated run-1 PASS (90.2) is superseded and its hand-off was withdrawn by the practice seat's correction entry — `hidden_files/study/recreations/T129-evidence-board-composition/scores.md` (non-move recorded Cycle-016; was DESCRIBED OWED #63) |", "reg T129")
# P9 tier register rows: append after the P8 grouped row
anchor = "| T146–T148, T150, T152, T155, T158, T159, T161, T163–T165 (12 techniques, from P8) | DESCRIBED — not owed |"
idx = g.find(anchor)
assert idx >= 0, "P8 grouped row not found"
end = g.find("\n", idx)
rows = """
| T167 hub growth (from P9) | DESCRIBED — **OWED #81** | classified at registration (Cycle-016): a scale growth that establishes the hub's hierarchy — the motion is the lesson; easing UNMEASURED in the packet, carried on the entry |
| T168 spoke draw-on with dot landing (from P9) | DESCRIBED — **OWED #82** | classified at registration (Cycle-016): the relational-entry move the DLC diagram container builds from (packet §2); easing UNMEASURED, carried on the entry |
| T170 vertical name-roll ticker (from P9) | DESCRIBED — **OWED #83** | classified at registration (Cycle-016): a masked one-line roll labelling a changing diagram — motion is the device; easing UNMEASURED, carried on the entry |
| T175 name-exit ending (from P9) | DESCRIBED — **OWED #84** | classified at registration (Cycle-016): a roll-out ending that empties the label and holds the bare result — distinct from T170 (the exit + hold is the ending's grammar) |
| T166, T169, T171–T174, T176, T177 (8 techniques, from P9) | DESCRIBED — not owed | priced at registration (Cycle-016): static states/layout/frame/texture (T166 held seed state · T172 fixed-hub fan layout · T173 static brand frame · T176 palette rule), pacing systems (T169 burst cadence · T174 accelerating cadence — their lessons register as assets), a system relation (T171 synchrony — its components T168/T170 are owed individually), and a hard cut (T177 — no animation to recreate; registered as a form to cure) |
"""
g = g[:end] + rows.rstrip("\n") + g[end:]
save("TECHNIQUES.md", g)
print("governance done")
print("OK")
