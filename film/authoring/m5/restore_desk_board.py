"""Restore the L r4 title gesture and board. Inputs are an unpacked M4 film
and the verified editable L r4 HTML. Writes an overlay with paths relative
to the film root. Run before retiming narration or replacing stems.
"""
import argparse
import base64
import copy
import json
import math
import re
import posixpath
from pathlib import Path

def descendants(node):
    yield node
    for child in node.get('children', []):
        yield from descendants(child)

def remove_audio(node):
    if 'children' in node:
        node['children'] = [child for child in node['children'] if child['type'] != 'audio']
        for child in node['children']:
            remove_audio(child)

def write_json(path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2)+'\n')

def gesture(keys):
    # Monotone cubic interpolation keeps interior waypoints moving and
    # brings the object gently to rest at each deliberate reading hold.
    from scipy.interpolate import PchipInterpolator
    t, v = zip(*keys)
    f = PchipInterpolator(t,v)
    result = []
    for a,b in zip(t,t[1:]):
        if f(a) == f(b):
            samples = [a]
        else:
            count = math.ceil((b-a)*48)
            samples = [a+(b-a)*i/count for i in range(count)]
        result.extend([round(x,7),round(float(f(x)),7),'linear'] for x in samples)
    return result + [[t[-1],v[-1],'linear']]

def restore(m4, reference, output):
    source = reference.read_bytes()
    block = re.search(rb'<script type="application/x-film-files">(.*?)</script>',source,re.S)
    files = json.loads(block[1])
    def earlier(path):
        return base64.b64decode(files[path][1])

    unit = 'units/03/unit.json'
    desk = json.loads((m4/unit).read_bytes())
    old = json.loads(earlier(unit))
    old_paper = next(n for n in descendants(old['root']) if n['id']=='folded-title-sheet')
    nodes = {n['id']:n for n in descendants(desk['root'])}
    paper = nodes['folded-title-sheet']
    assert paper['asset']=='m1-paper-credit'
    # Keep the original L trajectory to its first upper-left resting
    # position, then allow only the parent desk camera to move the sheet.
    keys = {}
    for prop in ('x','y','scale','angle'):
        original = old_paper['tracks'][prop]
        motion = [key[:2] for key in original if key[0]<=89.04]
        motion.append([old_paper['time'][1],motion[-1][1]])
        keys[prop] = gesture(motion)
    keys['opacity'] = 1
    paper['tracks'] = keys
    paper['time'] = list(old_paper['time'])
    shadow = nodes['m1-sheet-shadow']
    shadow['time'] = list(paper['time'])
    shadow['tracks'] = copy.deepcopy(keys)
    for prop,delta in [('x',2),('y',3)]:
        for key in shadow['tracks'][prop]:
            key[1] += delta
    shadow['tracks']['opacity'] = 0.42
    # The wooden stamp originally landed on the enlarged sheet. Map
    # its contact and permanent ink into the settled sheet's coordinates.
    # Keeping the later legacy keys would leave the ink moving on wood.
    ratio = .83/1.55
    x_on_sheet = lambda x: round(225+(x-148)*ratio,6)
    y_on_sheet = lambda y: round(112+(y-65)*ratio,6)
    stamp = nodes['wooden-stamp']['tracks']
    stamp['x'] = x_on_sheet(stamp['x'])
    stamp['y'] = [[t,y_on_sheet(y)] for t,y in stamp['y']]
    stamp['scale'] = .83
    ink = nodes['four-colour-impression']['tracks']
    ink.update(x=x_on_sheet(393), y=y_on_sheet(139), scale=ratio)
    write_json(output/unit, desk)

    unit = 'units/04/unit.json'
    board = json.loads((m4/unit).read_bytes())
    reference_board = json.loads(earlier(unit))
    sound = [n for n in descendants(board['root']) if n['type']=='audio']
    assert {n['id'] for n in sound}=={'m1-music','m1-speech'}
    # Restore every wipe, the three groups of drawing elements, and the
    # original invitation as one composition, including the camera.
    approved_root = reference_board['root']
    remove_audio(approved_root)
    board['root'] = approved_root
    board['root']['children'].extend(sound)
    sound_assets = {n['asset']:board['assets'][n['asset']] for n in sound}
    approved_assets = {k:v for k,v in reference_board['assets'].items()
                       if v['type'] != 'audio'}
    board['assets'] = {**approved_assets, **sound_assets}
    for spec in approved_assets.values():
        relative = (Path(unit).parent/spec['src'])
        # ../03/ paths refer to the shared library image in the desk unit.
        source_name = posixpath.normpath(relative.as_posix())
        data = earlier(source_name)
        target = m4/source_name
        if not target.exists() or target.read_bytes()!=data:
            dest = output/source_name
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(data)
    write_json(output/unit,board)

if __name__ == '__main__':
    parser=argparse.ArgumentParser(description=__doc__)
    for name in ['m4','reference','output']:
        parser.add_argument(name,type=Path)
    a=parser.parse_args()
    restore(a.m4,a.reference,a.output)
