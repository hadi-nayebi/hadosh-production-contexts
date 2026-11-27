"""Carry the reviewed rack replay and dialogue edit into a compatible four-unit cut.

Run with Python 3: remount.py revised.html next-cut.html output.html
Use a new output filename. The operation verifies that source stems, timing
and camera mounting are compatible before writing the next candidate.
"""
import argparse
import base64
import json
from pathlib import Path
import re

PACK = re.compile(rb'(?<=<script type="application/x-film-files">).*?(?=</script>)', re.S)
GROUP = 'same-words-server-blades'
def read(path):
    source = path.read_bytes()
    match = PACK.search(source)
    if match is None:
        raise ValueError(f'No embedded film directory in {path}')
    return source, match, json.loads(match[0])

def unit(files, key):
    return json.loads(base64.b64decode(files[key][1]))

def nodes(node):
    yield node
    for child in node.get('children', []):
        yield from nodes(child)

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    for name in ('revision', 'base', 'output'):
        parser.add_argument(name, type=Path)
    args = parser.parse_args()
    _, _, reviewed = read(args.revision)
    source, match, target = read(args.base)
    cues = json.loads(Path(__file__).with_name("rack-cues.json").read_text())
    for folder in ['01-scale', '02', '03', '04']:
        prefix = f'units/{folder}/'
        key = prefix + 'unit.json'
        ref = unit(reviewed, key)
        dest = unit(target, key)
        if ref['duration'] != dest['duration']:
            raise ValueError(f'Unit duration changed in {folder}. Realign the audio first.')
        originals = {n['id']: n for n in nodes(ref['root'])}
        if folder == '01-scale':
            if ref['visualTimeline'] != dest['visualTimeline'] or ref['tracks'] != dest['tracks']:
                raise ValueError('The scale timeline or camera changed. Re-register the blades.')
            if any(n['id'] == GROUP for n in nodes(dest['root'])):
                raise ValueError('The rack replay is already present.')
            for n in nodes(dest['root']):
                if n['id'] in cues['labelY']:
                    n['box'][1] = cues['labelY'][n['id']]
            group = cues['group']
            dest['root']['children'].append(group)
            for n in group['children']:
                asset = n['asset']
                desc = ref['assets'][asset]
                dest['assets'][asset] = desc
                target[prefix + desc['src']] = reviewed[prefix + desc['src']]
        for n in nodes(dest['root']):
            if n.get('type') != 'audio':
                continue
            old_path = prefix + dest['assets'][n['asset']]['src']
            if reviewed.get(old_path) != target[old_path]:
                raise ValueError(f'The source mix changed at {old_path}. Recheck this passage.')
            new_asset = originals[n['id']]['asset']
            desc = ref['assets'][new_asset]
            dest['assets'][new_asset] = desc
            n['asset'] = new_asset
            target[prefix + desc['src']] = reviewed[prefix + desc['src']]
        raw = json.dumps(dest, separators=(',', ':')).encode()
        target[key] = ['application/json', base64.b64encode(raw).decode()]
    result = source[:match.start()] + json.dumps(target, separators=(',', ':')).encode() + source[match.end():]
    with args.output.open('xb') as file:
        file.write(result)
if __name__ == '__main__':
    main()
