#!/usr/bin/env python3
"""Style-library Cycle-015 split migration generator.
Parses TECHNIQUES.md entries + tier register, generates the seven family files
(canonical entries with tier printed + pointer lines), and censuses the result.
Modes: --census (parse only, print counts) | --generate (write family files).
"""
import re, sys, os, collections

LIB = os.path.expanduser('~/workspace/goals/diy-building-and-real-learning/hidden_files/study/style-library')
TECH = os.path.join(LIB, 'TECHNIQUES.md')

FAMILY_FILE = {
    'opening': 'techniques-openings.md',
    'transition': 'techniques-transitions.md',
    'diagram': 'techniques-diagrams.md',
    'word animation': 'techniques-word-animation.md',
    'ending': 'techniques-endings.md',
    'thumbnail': 'techniques-thumbnails.md',
    'cross-container': 'techniques-cross-container.md',
}
FAMILY_TITLE = {
    'opening': 'Openings', 'transition': 'Transitions', 'diagram': 'Diagrams',
    'word animation': 'Word animation', 'ending': 'Endings', 'thumbnail': 'Thumbnails',
    'cross-container': 'Cross-container systems',
}

def normalize_label(raw):
    s = raw.strip().lower()
    if s.startswith('all containers'):
        return 'cross-container', True
    s = re.sub(r'\s*\(.*\)\s*$', '', s)          # opening (hook) -> opening
    s = s.replace('cross-container system', 'cross-container')
    return s, False

def parse_register(lines):
    """Return dict Tnum -> tier short text from the tier register (lines 13..94)."""
    tiers = {}
    in_reg = False
    for ln in lines:
        if ln.startswith('## Tier register'):
            in_reg = True; continue
        if in_reg and ln.startswith('## '):
            break
        if not in_reg or not ln.startswith('| T'):
            continue
        cells = [c.strip() for c in ln.strip().strip('|').split('|')]
        if len(cells) < 2:
            continue
        names, tier = cells[0], cells[1]
        tier_clean = tier.replace('**', '')
        # expand the technique list in the names cell
        nums = []
        for part in re.split(r'[,·]', names):
            part = part.strip()
            m = re.match(r'T(\d+)\s*[–-]\s*T?(\d+)', part)
            if m:
                nums.extend(range(int(m.group(1)), int(m.group(2)) + 1)); continue
            m = re.match(r'T(\d+)', part)
            if m:
                nums.append(int(m.group(1)))
        for n in nums:
            tiers[n] = tier_clean
    return tiers

def parse_entries(lines):
    entries = []
    cur = None
    for ln in lines:
        m = re.match(r'### T(\d+) — (.*)', ln)
        if m:
            if cur: entries.append(cur)
            cur = {'num': int(m.group(1)), 'heading': ln.rstrip(), 'body': []}
            continue
        if ln.startswith('## ') and cur:
            entries.append(cur); cur = None; continue
        if cur is not None:
            cur['body'].append(ln.rstrip())
    if cur: entries.append(cur)
    for e in entries:
        feeds = None
        for b in e['body']:
            if b.startswith('- Feeds:'):
                feeds = b[len('- Feeds:'):].strip(); break
        e['feeds_raw'] = feeds
        labels_part = feeds.split('—')[0].strip() if feeds else ''
        labels, all_containers = [], False
        for part in labels_part.split('·'):
            if part.strip():
                if re.match(r'P\d+ @', part.strip()):
                    continue  # coords segment in the 'labels · P# @ ...' form (e.g. T01)
                lab, ac = normalize_label(part)
                labels.append(lab); all_containers = all_containers or ac
        e['labels'] = labels
        e['all_containers'] = all_containers
        m = re.search(r'(P\d+ @ [^—]+)', feeds or '')
        e['coords'] = m.group(1).strip() if m else ''
        # packet key from coords
        m = re.match(r'(P\d+)', e['coords'])
        e['packet'] = m.group(1) if m else ''
    return entries

def main():
    lines = open(TECH).read().splitlines()
    tiers = parse_register(lines)
    entries = parse_entries(lines)
    print(f'entries parsed: {len(entries)}')
    print(f'register tiers: {len(tiers)}')
    missing_tier = [e['num'] for e in entries if e['num'] not in tiers]
    print(f'entries without register tier: {missing_tier}')
    no_feeds = [e['num'] for e in entries if not e['labels']]
    print(f'entries without feeds labels: {no_feeds}')
    bad_label = collections.Counter()
    for e in entries:
        for lab in e['labels']:
            if lab not in FAMILY_FILE: bad_label[lab] += 1
    print(f'unmapped labels: {dict(bad_label)}')
    canon = collections.Counter()
    pointers = 0
    fam_sizes = collections.Counter()
    for e in entries:
        if not e['labels']: continue
        home = e['labels'][0]
        canon[home] += 1
        others = [] if e['all_containers'] else [l for l in dict.fromkeys(e['labels'][1:])]
        pointers += len(others)
        text_len = len(e['heading']) + sum(len(b) + 1 for b in e['body'])
        fam_sizes[FAMILY_FILE[home]] += text_len
    print(f'canonical per family: {dict(canon)}')
    print(f'total pointer placements: {pointers}')
    print(f'canonical text bytes per family file (before headers/pointers): {dict(fam_sizes)}')
    if '--generate' in sys.argv:
        by_family = collections.defaultdict(list)
        ptr_by_family = collections.defaultdict(list)
        packet_keys = (
            '**Packet keys:** **P1** = `hidden_files/study/video-digests/2026-11-13-ig-dfk4sfvvjjq/` ("Look What I Can Do", @aditazzz.music) · '
            '**P2** = `hidden_files/study/video-digests/2026-11-14-yt-rkb3ig46sqo/` ("If energy cannot be created from nothing, where did it come from", Infinite Physics) · '
            '**P3** = `hidden_files/study/video-digests/2026-11-14-yt-o1fsb1nyewi/` ("Van Hollen vs Schumer: Who Has the Votes?", Epochs in Ink) · '
            '**P4** = `hidden_files/study/video-digests/2026-11-15-yt-jkdbk8qfcyY/` ("A Day in 2037 With Superintelligence", The Good Takeoff) · '
            '**P5** = `hidden_files/study/video-digests/2026-11-14-som-six-transitions/` ("Six Essential Motion Design Transitions", School of Motion) · '
            '**P6** = `hidden_files/study/video-digests/2026-11-15-yt-l2pkb1ebmq/` ("I Made a Full Documentary Using ONLY Claude AI (No Editing!)", Grow With Kaz) · '
            '**P7** = `hidden_files/study/video-digests/2026-11-16-vimeo-honda-keep-up/` ("Keep Up", Honda — ManvsMachine / Wieden+Kennedy London) · '
            '**P8** = `hidden_files/study/video-digests/2026-11-16-yt-gdsf2h9-39i/` ("Why Aliens Might Already Be On Their Way To Us", Kurzgesagt – In a Nutshell)._\n')
        for e in entries:
            home = e['labels'][0]
            tier = tiers.get(e['num'], 'DESCRIBED')
            block = [e['heading'], f'- Tier: **{tier}**'] + [b for b in e['body']]
            by_family[home].append((e['num'], '\n'.join(block).rstrip()))
            if not e['all_containers']:
                for lab in dict.fromkeys(e['labels'][1:]):
                    name = re.sub(r'^### T\d+ — ', '', e['heading'])
                    name = re.sub(r'\s*◆.*$', '', name)
                    ptr_by_family[lab].append((e['num'],
                        f'- T{e["num"]:02d} — {name} · tier {tier} · {e["coords"]} · canonical: {FAMILY_FILE[home]}'))
        for fam, fname in FAMILY_FILE.items():
            items = sorted(by_family.get(fam, []))
            ptrs = sorted(ptr_by_family.get(fam, []))
            tc = collections.Counter(tiers.get(n, 'DESCRIBED').split(' ')[0] for n, _ in items)
            out = [f'# STYLE LIBRARY — TECHNIQUES: {FAMILY_TITLE[fam]}',
                   '',
                   '_One family file of the technique register, split by container family (style-library Cycle-015, executing TECHNIQUES-SPLIT-DESIGN.md). Full entries live here only for techniques whose first-named Feeds family this is (canonical home); other techniques that also feed this family appear as pointer lines below. The governance surface (counts · tier register · locator) is `TECHNIQUES.md`._',
                   '',
                   packet_keys.rstrip(),
                   f'**Canonical entries here: {len(items)} — by tier: DESCRIBED {tc.get("DESCRIBED",0)} · IN PROGRESS {tc.get("IN",0)} · RECREATED {tc.get("RECREATED",0)}.** Only RECREATED is substrate; DESCRIBED / IN PROGRESS are inspiration, tier printed on every entry. Pointer lines into this family: {len(ptrs)}.',
                   '',
                   '## Canonical entries', '']
            for _, block in items:
                out.append(block); out.append('')
            out.append('## Also feeds this family (pointers — full entry in its canonical file)')
            out.append('')
            for _, p in ptrs:
                out.append(p)
            out.append('')
            path = os.path.join(LIB, fname)
            open(path, 'w').write('\n'.join(out))
            print(f'wrote {fname}: {os.path.getsize(path)} B · canonical {len(items)} · pointers {len(ptrs)}')

if __name__ == '__main__':
    main()
