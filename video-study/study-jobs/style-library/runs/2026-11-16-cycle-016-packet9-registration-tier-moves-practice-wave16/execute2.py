#!/usr/bin/env python3
"""Cycle-016 Execute part 2: ASSETS, INDEX, VIEWS, GROWTH + T175 asset-reference fix."""
import pathlib, re
LIB = pathlib.Path.home() / "workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library"
def load(n): return (LIB/n).read_text(errors="ignore")
def save(n,t): (LIB/n).write_text(t)
def rep(t, old, new, label):
    n=t.count(old); assert n==1, f"{label}: {n} occurrences: {old[:100]!r}"; return t.replace(old,new)

# fix T175 reference AS-71 -> AS-74 in endings
e = load("techniques-endings.md")
e = rep(e, "a production borrowing this form holds the result ≥1 s — asset AS-71",
           "a production borrowing this form holds the result ≥1 s — asset AS-74", "T175 ref")
save("techniques-endings.md", e)

# ---------- ASSETS ----------
a = load("ASSETS.md")
a = rep(a, "**Assets registered: 66**", "**Assets registered: 71**", "assets count")
a = rep(a, "AS-59…AS-69 from packet #8, registered 2026-11-16, style-library Cycle-015 (jev-asset fired on all 13 lesson candidates: 11 REGISTER · 2 REGISTER-AS-VARIANT folded under AS-06 and AS-07 · 0 REJECT)",
           "AS-59…AS-69 from packet #8, registered 2026-11-16, style-library Cycle-015 (jev-asset fired on all 13 lesson candidates: 11 REGISTER · 2 REGISTER-AS-VARIANT folded under AS-06 and AS-07 · 0 REJECT); AS-70…AS-74 from packet #9, registered 2026-11-16, style-library Cycle-016 (jev-asset fired on all 9 lesson candidates L1–L9: 5 REGISTER · 4 REGISTER-AS-VARIANT folded under AS-09, AS-22, AS-52 and AS-19 · 0 REJECT)", "assets provenance")
# variants
a = rep(a, "- Evidence: P1 T25 (throughout) — consumer: all containers (design systems).",
           "- Evidence: P1 T25 (throughout) — consumer: all containers (design systems).\n- Variant (Cycle-016, jev-asset REGISTER-AS-VARIANT): **colour reserved for the frame** — the two-register separation applied to frame vs working diagram: the diagram stays monochrome (structure carries the information) and the palette is spent only on static brand furniture (P9 L6 / T173+T176) — consumer: diagram · opening. jev-asset Cycle-016 profile: reusability 0.80 · evidence binding 0.65 · consumer namedness 0.85 · non-duplication 0.35 — REGISTER-AS-VARIANT (parent AS-09).", "AS-09 variant")
a = rep(a, "- Evidence: P3 L1 / T53 + T55 — consumer: story architecture (all explainers).",
           "- Evidence: P3 L1 / T53 + T55 — consumer: story architecture (all explainers).\n- Variant (Cycle-016, jev-asset REGISTER-AS-VARIANT): **accumulation is the argument** — the count-as-argument instantiated in a diagram build: when the claim is \"more than you knew\", accumulate one countable unit at a time until the count itself persuades, and let the final still be countable (P9 L7 / T169) — consumer: diagram (DLC assembler). jev-asset Cycle-016 profile: reusability 0.85 · evidence binding 0.60 · consumer namedness 0.90 · non-duplication 0.20 — REGISTER-AS-VARIANT (parent AS-22).", "AS-22 variant")
a = rep(a, "jev-asset Cycle-013 profile: reusability 0.87 · evidence binding 0.85 · consumer namedness 0.83 · non-duplication 0.76 — REGISTER.",
           "jev-asset Cycle-013 profile: reusability 0.87 · evidence binding 0.85 · consumer namedness 0.83 · non-duplication 0.76 — REGISTER.\n- Variant (Cycle-016, jev-asset REGISTER-AS-VARIANT): **accelerating burst cadence** — compression-contrast applied to burst-plus-hold builds: the burst period tightens ≈3:1 from ceremony to plateau, acceleration signalling a system gaining on the problem (P9 L8 / T174, §4 tempo table as its parameter evidence) — consumer: diagram · transition. jev-asset Cycle-016 profile: reusability 0.85 · evidence binding 0.85 · consumer namedness 0.85 · non-duplication 0.35 — REGISTER-AS-VARIANT (parent AS-52).", "AS-52 variant")
a = rep(a, "- Variant (Cycle-009, jev-asset REGISTER-AS-VARIANT): **seam pauses as the minimum viable dynamics**",
           "- Variant (Cycle-016, jev-asset REGISTER-AS-VARIANT): **a still beat after every addition** — structural pacing with a quantified hold parameter: budget ≈40–45% of runtime to complete stillness after each unit lands, so a fast build stays countable instead of frantic (P9 L9 / T169) — consumer: diagram. jev-asset Cycle-016 profile: reusability 0.82 · evidence binding 0.70 · consumer namedness 0.85 · non-duplication 0.40 — REGISTER-AS-VARIANT (parent AS-19).\n- Variant (Cycle-009, jev-asset REGISTER-AS-VARIANT): **seam pauses as the minimum viable dynamics**", "AS-19 variant")
# new assets at end
a = a.rstrip("\n") + """

### AS-70 — Draw-on link, then node (technique)
- Lesson: a new node enters a diagram by drawing its connection first and landing the node at the line's end — the viewer reads "connected" before "exists", the correct order for any mapping or relationship diagram; parameterized by a node list (positions + names), one line tween + one dot per node.
- Evidence: P9 §6 L1 + §3 T168 (P9-T03) (first satellite 1.44–1.92) — consumer: diagram (DLC assembler). jev-asset Cycle-016 profile: reusability 0.90 · evidence binding 0.95 · consumer namedness 0.90 · non-duplication 0.90 — REGISTER.

### AS-71 — Burst–name synchrony (technique)
- Lesson: lock a label's arrival to the diagram event it names — same burst, settle together; never animate a diagram change and its caption on separate clocks. Time does the matching, so the viewer never has to bind a name to a node by position or colour.
- Evidence: P9 §6 L2 + §3 T171 (P9-T06) (verified across all 23 bursts; §4 burst table, names column) — consumer: diagram · word animation (DLC assembler, explainer production). jev-asset Cycle-016 profile: reusability 0.92 · evidence binding 0.90 · consumer namedness 0.90 · non-duplication 0.92 — REGISTER.

### AS-72 — Name-roll ticker as the labelling device (technique)
- Lesson: label a changing diagram from a one-line slot roll outside the diagram — the old name exits up, the new name rises from below the rule, a sheen marks "in motion" vs flat white "settled" — so naming never clutters the diagram itself.
- Evidence: P9 §6 L3 + §3 T170 (P9-T05) (ev/001.60-spoke-drawing.jpg mid-roll · ev/004.88-ticker-midroll.jpg) — consumer: word animation. jev-asset Cycle-016 profile: reusability 0.85 · evidence binding 0.90 · consumer namedness 0.85 · non-duplication 0.95 — REGISTER.

### AS-73 — Seed-state opening (trick)
- Lesson: open a build piece on the smallest possible before-state — one dot, the frame furniture already in place — and hold it, so every later addition is measured against a remembered emptiness.
- Evidence: P9 §6 L4 + §3 T166/T167 (P9-T01/T02) (0.00–1.12) — consumer: openings. jev-asset Cycle-016 profile: reusability 0.88 · evidence binding 0.70 · consumer namedness 0.80 · non-duplication 0.90 — REGISTER.

### AS-74 — Name-exit ending, with the hold cure (trick)
- Lesson: end an accumulation piece by emptying its label — the last name rolls away and the bare result holds alone as the final image; cure the specimen's own bad (its result held only ≈0.16 s) by holding the result ≥1 s, not 0.16 s.
- Evidence: P9 §6 L5 + §3 T175 (P9-T10) (9.76–10.04; packet bad B1) — consumer: endings. jev-asset Cycle-016 profile: reusability 0.80 · evidence binding 0.65 · consumer namedness 0.75 · non-duplication 0.80 — REGISTER.
"""
save("ASSETS.md", a)
print("assets done")

# ---------- INDEX ----------
idx = load("INDEX.md")
idx = rep(idx, "**State at Cycle-015, 2026-11-16: catalogued packets: 8 · in flight: 0 · techniques catalogued: 165 — by tier: DESCRIBED 94 (of which **OWED 9** under the universal recreation rule · not owed 85) · IN PROGRESS 21 · RECREATED 50**",
               "**State at Cycle-016, 2026-11-16: catalogued packets: 9 · in flight: 0 · techniques catalogued: 177 — by tier: DESCRIBED 106 (of which **OWED 13** under the universal recreation rule · not owed 93) · IN PROGRESS 18 · RECREATED 53**", "index state")
lines = idx.splitlines(True)
for i, l in enumerate(lines):
    if l.startswith("| 8 |"):
        row9 = ('| 9 | `hidden_files/study/video-digests/2026-11-16-vimeo-sixmap/` — digest.pdf (20,082 B, sha c3715585…) + digest.md (28,532 B, sha 2a94b4d7…) | "SixMap | Organizational Mapping & Digital Footprint Animation" — nez&pez for SixMap, Vimeo 1235931636, published 2026-10-14 · 10.04 s, 1080×1080, silent loop | 12 techniques (T166–T177) · burst/tempo table (24 bursts) · goods 6 / bads 6 · 10 lessons (L10 transcript device ABSENT with ground) · 14 evidence frames in ev/ + 10 census frames in frames/ | DLC assembler — diagram containers |\n')
        lines.insert(i+1, row9)
        break
else:
    raise AssertionError("row 8 not found")
idx = "".join(lines)
idx = rep(idx, "**Adoption note (packet #8):**",
               "**Adoption note (packet #9):** ADOPTED CLEAN by video-digestion Cycle-015 (jev-packet ADOPT). Registration limit carried: easing is UNMEASURED for the hub growth, spoke draw-on and name-roll techniques (T167/T168/T170) — the packet prescribes durations, sizes, positions and cadence only; a rebuilder supplies its own interpolation curves. Reception: NOT YET RUN — charged to reception-analysis (counts NOT DISPLAYED on the access route; no baseline exists).\n\n**Adoption note (packet #8):**", "index adoption9")
# in-flight section: replace the Cycle-015 paragraph (starts with _None — no packet stands in flight at Cycle-015)
m = re.search(r"_None — no packet stands in flight at Cycle-015.*?registere[^\n]*\n", idx, re.S)
assert m, "in-flight paragraph not found"
idx = idx.replace(m.group(0), "_None — no packet stands in flight at Cycle-016 (2026-11-16). Packet #9 (SixMap) moved to catalogued above — the intake stub noted at Cycle-015 has landed as a full packet (digest.md + digest.pdf + ev/ verified this cycle)._\n")
idx = rep(idx, "- `ASSETS.md` — markdown-first assets (tricks · textures · storytelling patterns · transcript devices · pacing principles) with evidence pointers — 66 registered.",
               "- `ASSETS.md` — markdown-first assets (tricks · textures · storytelling patterns · transcript devices · pacing principles) with evidence pointers — 71 registered.", "index assets count")
save("INDEX.md", idx)
print("index done")

# ---------- VIEWS ----------
v = load("VIEWS.md")
# header regeneration line: replace the first "**Views regenerated:" paragraph chunk up to the first "\n\n"
m = re.search(r"\*\*Views regenerated: 2026-11-16, style-library Cycle-015.*?tier moves on[^\n]*\n", v, re.S)
if not m:
    # fallback: replace through first blank line after the marker
    start = v.find("**Views regenerated:")
    assert start >= 0
    end = v.find("\n\n", start)
    old = v[start:end]
    v = v.replace(old, "**Views regenerated: 2026-11-16, style-library Cycle-016 (packet #9 registered — 12 techniques T166–T177 + 5 assets AS-70…AS-74 added per their Feeds/consumer fields, 4 variants folded under AS-09/AS-22/AS-52/AS-19 · tier moves on practice Wave 16 clean re-scores — T91/T123/T130 to RECREATED; T129's clean floor FAIL records no move).**")
else:
    v = v.replace(m.group(0), "**Views regenerated: 2026-11-16, style-library Cycle-016 (packet #9 registered — 12 techniques T166–T177 + 5 assets AS-70…AS-74 added per their Feeds/consumer fields, 4 variants folded under AS-09/AS-22/AS-52/AS-19 · tier moves on practice Wave 16 clean re-scores — T91/T123/T130 to RECREATED; T129's clean floor FAIL records no move).**\n")
# tier updates
v = v.replace("| T123 Step-card segmentation | **IN PROGRESS** (attempt 1: 81.0) |", "| T123 Step-card segmentation | **RECREATED** (attempt 2: 90.2 PASS) |")
v = v.replace("| T130 Vintage 2D diagram animation | **IN PROGRESS** (attempt 1: 79.2) |", "| T130 Vintage 2D diagram animation | **RECREATED** (attempt 2, clean: 89.0 PASS) |")
v = v.replace("| T91 Q&A quote cards | **IN PROGRESS** (attempt 2: 82.4) |", "| T91 Q&A quote cards | **RECREATED** (attempt 3, clean: 88.4 PASS) |")
assert v.count("**RECREATED** (attempt 2: 90.2 PASS)") == 2, v.count("**RECREATED** (attempt 2: 90.2 PASS)")
assert v.count("**RECREATED** (attempt 2, clean: 89.0 PASS)") == 2
assert v.count("**RECREATED** (attempt 3, clean: 88.4 PASS)") == 1
# section appends: insert before the next "## " header
def add_rows(text, section, rows):
    start = text.find(f"## {section}\n")
    assert start >= 0, section
    nxt = text.find("\n## ", start+1)
    if nxt < 0: nxt = len(text)
    block = text[start:nxt].rstrip("\n") + "\n" + rows + "\n"
    return text[:start] + block + text[nxt:]
v = add_rows(v, "Openings", "| T166 Seed-dot opening state | DESCRIBED — not owed | the smallest possible before-state, held | P9 @ 0.00–0.36 |\n| AS-73 Seed-state opening | asset | open on remembered emptiness (trick) | P9 lessons (§6 L4) |")
v = add_rows(v, "Transitions", "| T174 Accelerating cadence | DESCRIBED — not owed | burst period tightening ≈3:1 to a plateau | P9 @ 0.36–9.64 |\n| T177 Hard loop restart | DESCRIBED — not owed | hard cut back to the seed state — a form to cure, not copy | P9 @ 10.04 → 0.00 |\n| AS-52 variant — accelerating burst cadence | asset | compression-contrast for burst-plus-hold builds (under AS-52) | P9 lessons (§6 L8) |")
v = add_rows(v, "Diagrams", "| T167 Hub growth | DESCRIBED — **OWED #81** | the hub earns its size by growth (easing UNMEASURED) | P9 @ 0.36–1.12 |\n| T168 Spoke draw-on with dot landing | DESCRIBED — **OWED #82** | the relationship drawn before the entity exists | P9 @ first at 1.44–1.92 |\n| T169 One-burst-one-entity cadence | DESCRIBED — not owed | 23 bursts, each adding exactly one node | P9 @ 0.36–9.64 |\n| T170 Vertical name-roll ticker | DESCRIBED — **OWED #83** | the diagram's names roll in the footer (easing UNMEASURED) | P9 @ throughout |\n| T171 Burst–name synchrony | DESCRIBED — not owed | the settling name is the entity just added | P9 @ throughout |\n| T172 Radial fan layout, fixed hub | DESCRIBED — not owed | a fan that only extends, never rearranges | P9 @ throughout |\n| T174 Accelerating cadence | DESCRIBED — not owed | burst period tightening ≈3:1 to a plateau | P9 @ 0.36–9.64 |\n| T176 Monochrome network, colour reserved | DESCRIBED — not owed | structure carries information, colour carries brand | P9 @ throughout |\n| AS-70 Draw-on link, then node | asset | connection first, entity at the line's end | P9 lessons (§6 L1) |\n| AS-71 Burst–name synchrony | asset | one event, two channels — time does the matching | P9 lessons (§6 L2) |\n| AS-19 variant — a still beat after every addition | asset | ≈40–45% stillness budget (under AS-19) | P9 lessons (§6 L9) |\n| AS-22 variant — accumulation is the argument | asset | the count itself persuades (under AS-22) | P9 lessons (§6 L7) |")
v = add_rows(v, "Word animation", "| T170 Vertical name-roll ticker | DESCRIBED — **OWED #83** | a one-line slot roll labels a changing diagram | P9 @ throughout |\n| T171 Burst–name synchrony | DESCRIBED — not owed | the label and the event share one clock | P9 @ throughout |\n| AS-71 Burst–name synchrony | asset | one event, two channels — time does the matching | P9 lessons (§6 L2) |\n| AS-72 Name-roll ticker as the labelling device | asset | naming without cluttering the diagram | P9 lessons (§6 L3) |")
v = add_rows(v, "Endings", "| T175 Name-exit ending | DESCRIBED — **OWED #84** | the label empties, the bare result holds | P9 @ 9.76–10.04 |\n| T177 Hard loop restart | DESCRIBED — not owed | hard cut back to the seed state — a form to cure, not copy | P9 @ 10.04 → 0.00 |\n| AS-74 Name-exit ending, with the hold cure | asset | empty the label, hold the result ≥1 s (trick) | P9 lessons (§6 L5) |")
v = add_rows(v, "Cross-container systems & principles", "| T173 Persistent brand frame | DESCRIBED — not owed | static brand furniture, present from frame one | P9 @ throughout |\n| T176 Monochrome network, colour reserved | DESCRIBED — not owed | structure carries information, colour carries brand | P9 @ throughout |\n| AS-09 variant — colour reserved for the frame | asset | monochrome work, colour only on the frame (under AS-09) | P9 lessons (§6 L6) |")
save("VIEWS.md", v)
print("views done")
print("OK2")
