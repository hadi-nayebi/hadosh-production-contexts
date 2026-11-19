#!/usr/bin/env python3
"""Cycle-015 E6+E4: insert packet #8 entries (T145-T165) into the family files
(canonical + pointers, tier printed), add their tier-register rows, and shrink
TECHNIQUES.md to the governance surface."""
import re, os, collections
RUN = os.path.dirname(os.path.abspath(__file__))
LIB = os.path.expanduser('~/workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library')
FAMILY_FILE = {'opening':'techniques-openings.md','transition':'techniques-transitions.md','diagram':'techniques-diagrams.md','word animation':'techniques-word-animation.md','ending':'techniques-endings.md','thumbnail':'techniques-thumbnails.md','cross-container':'techniques-cross-container.md'}

def norm(raw):
    s = raw.strip().lower()
    if s.startswith('all containers'): return 'cross-container'
    s = re.sub(r'\s*\(.*\)\s*$', '', s)
    return s.replace('cross-container system','cross-container')

# --- parse p8 entries
raw = open(os.path.join(RUN,'p8_entries.md')).read()
blocks = re.split(r'\n(?=### T)', raw)
entries = []
for b in blocks:
    m = re.match(r'### (T\d+) — (.*?)\n', b)
    if not m: continue
    num = int(m.group(1)[1:]); title = m.group(2)
    feeds = re.search(r'^- Feeds: (.+)$', b, re.M).group(1)
    labels = [norm(x) for x in feeds.split('—')[0].split('·') if x.strip() and not re.match(r'P\d+ @', x.strip())]
    coords = re.search(r'(P\d+ @ [^—]+)', feeds).group(1).strip()
    entries.append({'num':num,'title':title,'block':b.strip(),'labels':labels,'coords':coords})
assert len(entries)==21, len(entries)

# --- insert into family files
for fam, fname in FAMILY_FILE.items():
    path = os.path.join(LIB, fname)
    t = open(path).read()
    canon = [e for e in entries if e['labels'][0]==fam]
    ptrs = [e for e in entries if fam in e['labels'][1:]]
    if canon:
        add = '\n\n'.join(e['block'] + '\n- Tier: **DESCRIBED**' if False else e['block'] for e in canon)
        # insert tier line after heading for each block
        fixed = []
        for e in canon:
            bl = e['block'].splitlines()
            owed = re.search(r'◆ — OWED #(\d+)', bl[0])
            tierline = f"- Tier: **DESCRIBED — OWED #{owed.group(1)}**" if owed else "- Tier: **DESCRIBED — not owed**"
            fixed.append('\n'.join([bl[0], tierline] + bl[1:]))
        add = '\n\n'.join(fixed)
        marker = '## Also feeds this family (pointers'
        t = t.replace(marker, add + '\n\n' + marker)
    if ptrs:
        plines = []
        for e in ptrs:
            name = re.sub(r'\s*\(P8 T\d+\).*$', '', e['title'])
            name = re.sub(r'\s*◆.*$', '', name)
            owed = re.search(r'◆ — OWED #(\d+)', e['block'].splitlines()[0])
            tier = f"DESCRIBED — OWED #{owed.group(1)}" if owed else "DESCRIBED — not owed"
            plines.append(f"- T{e['num']} — {name} · tier {tier} · {e['coords']} · canonical: {FAMILY_FILE[e['labels'][0]]}")
        t = t.rstrip() + '\n' + '\n'.join(plines) + '\n'
    open(path,'w').write(t)
    print(fname, 'canonical added', len(canon), 'pointers added', len(ptrs))

# --- governance TECHNIQUES.md
tech_path = os.path.join(LIB,'TECHNIQUES.md')
tech = open(tech_path).read()
head = tech.split('## Entries')[0]  # header + tier register + easing rule lives after register; check order
# The easing rule section sits between register and Entries in the original; head contains it if it precedes '## Entries'.
assert 'Tier register' in head
# Append P8 register rows at the end of the register: insert before the easing-rule heading if present, else at head end.
new_rows = """| T145 scale-cascade cold open (from P8) | DESCRIBED — **OWED #72** | classified at registration (Cycle-015): a continuous zoom/dissolve cascade — the lesson is the motion itself |
| T149 isometric hard-steps path (from P8) | DESCRIBED — **OWED #73** | classified at registration (Cycle-015): a diagram that builds tile by tile and is re-entered — build motion is the lesson |
| T151 galaxy-of-candles emergence field (from P8) | DESCRIBED — **OWED #74** | classified at registration (Cycle-015): lights kindling one by one across a plate — emergence as timed motion |
| T153 duration-as-rows comparison bars (from P8) | DESCRIBED — **OWED #75** | classified at registration (Cycle-015): rows filling the frame — the fill is the quantity and the motion |
| T154 window ellipse + players-joined chart (from P8) | DESCRIBED — **OWED #76** | classified at registration (Cycle-015): bars rising and swelling into territories inside a window — clip-ruled build |
| T156 isometric settlement diorama (from P8) | DESCRIBED — **OWED #77** | classified at registration (Cycle-015): a diorama filling its tile — growth staging as motion |
| T157 detection-UI gag (from P8) | DESCRIBED — **OWED #78** | classified at registration (Cycle-015): an interface alert staging; precedent T07 permission-dialog gag OWED |
| T160 expansion-front envelopment (from P8) | DESCRIBED — **OWED #79** | classified at registration (Cycle-015): a territory front growing continuously — clip-ruled; the approach is the mechanic |
| T162 galaxy race table (from P8) | DESCRIBED — **OWED #80** | classified at registration (Cycle-015): a board populating with markers; precedent T82 countable multitude OWED |
| T146–T148, T150, T152, T155, T158, T159, T161, T163–T165 (12 techniques, from P8) | DESCRIBED — not owed | priced at registration (Cycle-015): transcript devices (T146, T147 — T147's lesson is disclaimer PLACEMENT, its pour one staged gag, not a motion grammar), story structure (T148), static stagings and held cards (T150, T152, T155, T158, T159, T161, T163, T164, T165 — precedents T112, T142) |
"""
if '## Standing decision rule' in head:
    head = head.replace('## Standing decision rule', new_rows + '\n## Standing decision rule')
else:
    head = head.rstrip() + '\n' + new_rows
open(os.path.join(RUN,'governance_head_draft.md'),'w').write(head)
print('governance head draft bytes', len(head))
