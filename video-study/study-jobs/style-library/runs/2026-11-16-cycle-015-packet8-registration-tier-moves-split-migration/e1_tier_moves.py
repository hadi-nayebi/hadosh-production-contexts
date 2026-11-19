#!/usr/bin/env python3
"""Cycle-015 E1: apply the nine evidenced tier moves to TECHNIQUES.md."""
import re, os
LIB = os.path.expanduser('~/workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library')
p = os.path.join(LIB, 'TECHNIQUES.md')
t = open(p).read()

REC = {
 'T132': '- Recreation: IN PROGRESS — attempt 1 (recreation Wave 19) avg 83.2, min 76, FAIL at `hidden_files/study/recreations/T132-serial-presentation/` (consumed artifact: recreation.html + scores.md); attempt 2 routes to practice',
 'T133': '- Recreation: RECREATED — attempt 1 (recreation Wave 19) avg 88.0, min 74, PASS at `hidden_files/study/recreations/T133-countdown-scaling-numerals/` (consumed artifact: recreation.html + scores.md)',
 'T134': '- Recreation: RECREATED — attempt 1 (recreation Wave 19) avg 89.6, min 76, PASS at `hidden_files/study/recreations/T134-sentence-band-acceleration/` (consumed artifact: recreation.html + scores.md)',
 'T135': '- Recreation: RECREATED — attempt 1 (recreation Wave 19) avg 87.6, min 82, PASS at `hidden_files/study/recreations/T135-sentence-final-dwell-weighting/` (consumed artifact: recreation.html + scores.md)',
 'T137': '- Recreation: RECREATED — attempt 1 (recreation Wave 19) avg 91.0, min 80, PASS at `hidden_files/study/recreations/T137-case-emphasis-stream/` (consumed artifact: recreation.html + scores.md)',
 'T139': '- Recreation: RECREATED — attempt 1 (recreation Wave 20) avg 88.4, min 78, PASS at `hidden_files/study/recreations/T139-product-flash-phrase-boundary/` (consumed artifact: recreation.html + scores.md)',
 'T140': '- Recreation: RECREATED — attempt 1 (recreation Wave 20) avg 88.0, min 78, PASS at `hidden_files/study/recreations/T140-repetition-chant/` (consumed artifact: recreation.html + scores.md)',
 'T105': '- Recreation: RECREATED — attempt 1 (recreation Wave 15-retake) avg 80.0, min 62, FAIL · attempt 2 (practice Wave 15) avg 91.6, min 84, PASS at `hidden_files/study/recreations/T105-dissolve/` (consumed artifact: recreation.html + scores.md)',
 'T107': '- Recreation: RECREATED — attempt 1 (recreation Wave 15-retake) avg 82.0, min 76, FAIL (average only) · attempt 2 (practice Wave 15) avg 87.8, min 80, PASS at `hidden_files/study/recreations/T107-match-cut/` (consumed artifact: recreation.html + scores.md)',
}

# 1. Entry Recreation lines: replace existing or insert after the Feeds line.
lines = t.splitlines()
out = []
cur = None
done = set()
for ln in lines:
    m = re.match(r'### (T\d+) —', ln)
    if m: cur = m.group(1)
    if cur in REC and ln.startswith('- Recreation:'):
        out.append(REC[cur]); done.add(cur); continue
    out.append(ln)
    if cur in REC and cur not in done and ln.startswith('- Feeds:'):
        # only insert immediately if this entry has no Recreation line later;
        # handled by a second pass check below
        out.append(('__PENDING__' + cur))
t2 = '\n'.join(out)
# Resolve pendings: if the entry already had a Recreation line replaced, drop pending.
res = []
for ln in t2.splitlines():
    if ln.startswith('__PENDING__'):
        tid = ln.replace('__PENDING__', '')
        if tid in done: continue
        res.append(REC[tid]); done.add(tid)
    else:
        res.append(ln)
t = '\n'.join(res)
assert done == set(REC), f'missing {set(REC)-done}'

# 2. Tier register rows.
def sub_row(t, prefix, newrow):
    lines = t.splitlines()
    for i, ln in enumerate(lines):
        if ln.startswith(prefix):
            lines[i] = newrow
            return '\n'.join(lines)
    raise SystemExit(f'row not found: {prefix}')

t = sub_row(t, '| T105 dissolve (from P5) |',
 '| T105 dissolve (from P5) | **RECREATED** | attempt 1 (recreation Wave 15-retake, Cycle 018): avg 80.0, min 62, FAIL · attempt 2 (practice Wave 15, Cycle 016): avg 91.6, min 84, PASS (+11.6) — `hidden_files/study/recreations/T105-dissolve/scores.md` (moved Cycle-015) |')
t = sub_row(t, '| T107 match cut (from P5) |',
 '| T107 match cut (from P5) | **RECREATED** | attempt 1 (recreation Wave 15-retake, Cycle 018): avg 82.0, min 76, FAIL (average only) · attempt 2 (practice Wave 15, Cycle 016): avg 87.8, min 80, PASS (+5.8) — `hidden_files/study/recreations/T107-match-cut/scores.md` (moved Cycle-015) |')
t = sub_row(t, '| T132 serial presentation (from P7) |',
 '| T132 serial presentation (from P7) | **IN PROGRESS** | classified OWED #65 at registration (Cycle-014) · attempt 1 (recreation Wave 19, Cycle 022): avg 83.2, min 76, FAIL — `hidden_files/study/recreations/T132-serial-presentation/scores.md` (moved Cycle-015); attempt 2 routes to practice |')
t = sub_row(t, '| T133 countdown pre-announcement, scaling numerals (from P7) |',
 '| T133 countdown pre-announcement, scaling numerals (from P7) | **RECREATED** | classified OWED #66 at registration (Cycle-014) · attempt 1 (recreation Wave 19, Cycle 022): avg 88.0, min 74, PASS — `hidden_files/study/recreations/T133-countdown-scaling-numerals/scores.md` (moved Cycle-015) |')
t = sub_row(t, '| T134 sentence-band acceleration (from P7) |',
 '| T134 sentence-band acceleration (from P7) | **RECREATED** | classified OWED #67 at registration (Cycle-014) · attempt 1 (recreation Wave 19, Cycle 022): avg 89.6, min 76, PASS — `hidden_files/study/recreations/T134-sentence-band-acceleration/scores.md` (moved Cycle-015) |')
t = sub_row(t, '| T135 sentence-final dwell weighting (from P7) |',
 '| T135 sentence-final dwell weighting (from P7) | **RECREATED** | classified OWED #68 at registration (Cycle-014) · attempt 1 (recreation Wave 19, Cycle 022): avg 87.6, min 82, PASS — `hidden_files/study/recreations/T135-sentence-final-dwell-weighting/scores.md` (moved Cycle-015) |')
t = sub_row(t, '| T137 case emphasis inside a level stream (from P7) |',
 '| T137 case emphasis inside a level stream (from P7) | **RECREATED** | classified OWED #69 at registration (Cycle-014) · attempt 1 (recreation Wave 19, Cycle 022): avg 91.0, min 80, PASS — `hidden_files/study/recreations/T137-case-emphasis-stream/scores.md` (moved Cycle-015) |')
t = sub_row(t, '| T139 product flash at a phrase boundary (from P7) |',
 '| T139 product flash at a phrase boundary (from P7) | **RECREATED** | classified OWED #70 at registration (Cycle-014) · attempt 1 (recreation Wave 20, Cycle 023): avg 88.4, min 78, PASS — `hidden_files/study/recreations/T139-product-flash-phrase-boundary/scores.md` (moved Cycle-015) |')
t = sub_row(t, '| T140 repetition chant (from P7) |',
 '| T140 repetition chant (from P7) | **RECREATED** | classified OWED #71 at registration (Cycle-014) · attempt 1 (recreation Wave 20, Cycle 023): avg 88.0, min 78, PASS — `hidden_files/study/recreations/T140-repetition-chant/scores.md` (moved Cycle-015) |')

open(p, 'w').write(t)
print('E1 applied; new size', os.path.getsize(p))
