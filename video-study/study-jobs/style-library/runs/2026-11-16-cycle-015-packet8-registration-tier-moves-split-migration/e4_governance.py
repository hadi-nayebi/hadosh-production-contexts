#!/usr/bin/env python3
"""Cycle-015 E4/E7a: refresh family-file headers from their actual Tier lines,
and build the governance TECHNIQUES.md from the register head + a locator
computed from the family files."""
import re, os, collections
RUN = os.path.dirname(os.path.abspath(__file__))
LIB = os.path.expanduser('~/workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library')
FAMS = ['techniques-openings.md','techniques-transitions.md','techniques-diagrams.md','techniques-word-animation.md','techniques-endings.md','techniques-thumbnails.md','techniques-cross-container.md']

locator = {}
for fname in FAMS:
    path = os.path.join(LIB, fname)
    t = open(path).read()
    canon_section = t.split('## Also feeds this family')[0]
    nums = [int(x) for x in re.findall(r'^### T(\d+) ', canon_section, re.M)]
    tiers = re.findall(r'^- Tier: \*\*([A-Z ]+?)(?:\s|—|\*\*)', canon_section, re.M)
    tc = collections.Counter(x.strip() for x in tiers)
    ptr_count = len(re.findall(r'^- T\d+ — ', t.split('## Also feeds this family')[-1], re.M)) if '## Also feeds this family' in t else 0
    headline = (f"**Canonical entries here: {len(nums)} — by tier: DESCRIBED {tc.get('DESCRIBED',0)} · "
                f"IN PROGRESS {tc.get('IN PROGRESS',0)} · RECREATED {tc.get('RECREATED',0)}.** "
                f"Only RECREATED is substrate; DESCRIBED / IN PROGRESS are inspiration, tier printed on every entry. Pointer lines into this family: {ptr_count}.")
    t = re.sub(r'\*\*Canonical entries here:.*?Pointer lines into this family: \d+\.', headline, t, count=1, flags=re.S)
    open(path, 'w').write(t)
    locator[fname] = nums
    print(fname, 'canonical', len(nums), dict(tc), 'pointers', ptr_count)

draft = open(os.path.join(RUN, 'governance_head_draft.md')).read()
# Replace the old header block (everything before '## Tier register') with the new governance header.
reg_idx = draft.find('## Tier register')
rest = draft[reg_idx:]
loc_lines = '\n'.join(
    f"- `{f}` — " + ', '.join(f'T{n:02d}' for n in locator[f]) for f in FAMS)
header = f"""# STYLE LIBRARY — TECHNIQUES (governance surface)

_Technique register's governance surface: counts · packet keys · locator · tier register. The ENTRIES live in the seven family files below (split by container family, style-library Cycle-015, executing TECHNIQUES-SPLIT-DESIGN.md — the register outgrew a single cold read: naive-use FAILs at 112 and 131 entries). An entry's full text (mechanics · Feeds · timestamps · exact frame filenames) lives ONCE, in its canonical family file; in every other family it feeds it appears as a pointer line. Owner: style-library job. Packet keys: **P1** = `hidden_files/study/video-digests/2026-11-13-ig-dfk4sfvvjjq/` ("Look What I Can Do", @aditazzz.music) · **P2** = `hidden_files/study/video-digests/2026-11-14-yt-rkb3ig46sqo/` ("If energy cannot be created from nothing, where did it come from", Infinite Physics) · **P3** = `hidden_files/study/video-digests/2026-11-14-yt-o1fsb1nyewi/` ("Van Hollen vs Schumer: Who Has the Votes?", Epochs in Ink) · **P4** = `hidden_files/study/video-digests/2026-11-15-yt-jkdbk8qfcyY/` ("A Day in 2037 With Superintelligence", The Good Takeoff) · **P5** = `hidden_files/study/video-digests/2026-11-14-som-six-transitions/` ("Six Essential Motion Design Transitions", School of Motion) · **P6** = `hidden_files/study/video-digests/2026-11-15-yt-l2pkb1ebmq/` ("I Made a Full Documentary Using ONLY Claude AI (No Editing!)", Grow With Kaz) · **P7** = `hidden_files/study/video-digests/2026-11-16-vimeo-honda-keep-up/` ("Keep Up", Honda — ManvsMachine / Wieden+Kennedy London) · **P8** = `hidden_files/study/video-digests/2026-11-16-yt-gdsf2h9-39i/` ("Why Aliens Might Already Be On Their Way To Us", Kurzgesagt – In a Nutshell)._

**Techniques catalogued: 165** (P1's 25 · P2's 23 · P3's 25 · P4's 25 · P5's 14 · P6's 19 · P7's 13 · P8's 21, registered 2026-11-16, style-library Cycle-015 as T145–T165 — continuing library numbers; each entry also names its packet-local number.)
**Tiers (owner's recreation law, 2026-11-13): DESCRIBED 94 · IN PROGRESS 21 · RECREATED 50.** Only RECREATED counts as a complete catalogue item; the counts print separately, never merged. Tier moves only on recreation evidence (a filed scores.md verdict — see the tier register; last moves: style-library Cycle-015, 2026-11-16, on recreation Waves 19/20 + practice Wave 15 scores: T133/T134/T135/T137/T139/T140/T105/T107 → RECREATED, T132 → IN PROGRESS — packet #7's first-attempt queue thereby fully discharged).
**Obligation (owner's refinement, 2026-11-13): recreation is UNIVERSAL for motion graphics — of the 94 DESCRIBED, 9 are OWED (queue #72–#80, all from packet #8, registered Cycle-015) and 85 are NOT OWED (priced in the register). The other obligation form is the practice pool: the 21 IN PROGRESS techniques, each owed re-attempts until it passes or plateaus with a filed WHY.**

## Locator — canonical home per technique (family file holding the full entry)
{loc_lines}

"""
out = header + rest
open(os.path.join(LIB, 'TECHNIQUES.md'), 'w').write(out)
print('governance TECHNIQUES.md bytes', len(out))
