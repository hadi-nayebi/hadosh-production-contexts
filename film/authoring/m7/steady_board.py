"""Place L r4's existing animated chalk layers at their final board positions.

The chapter clock, its narration, the drawing sequences, wipe masks and both
physical slate turns retain the L-radio timings. Run against an unpacked
L-radio runtime: python steady_board.py input/units/04/unit.json unit.json.
"""
import argparse
import json
from pathlib import Path

def flatten(node):
    yield node
    for child in node.get('children', []):
        yield from flatten(child)

def steady(source, target):
    unit=json.loads(source.read_bytes())
    nodes={n['id']:n for n in flatten(unit['root'])}
    camera=nodes['chalk-reading-camera']
    assert set(camera['tracks']) == {'scale','x','y'}
    camera['tracks']={}
    area=nodes['fixed-writing-area']
    changed=[]
    for layer in area['children']:
        if not layer['id'].endswith('-bounds'):
            continue
        tracks=layer.get('tracks',{})
        if not tracks:
            continue
        assert set(tracks) <= {'x','y','scale','opacity'}, layer['id']
        # box is the permanent mounting position on the complete chalk drawing.
        del layer['tracks']
        changed.append(layer['id'])
    assert len(changed)>20
    assert unit['duration']==22.75 and 'series-invitation' in nodes
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_text(json.dumps(unit,ensure_ascii=False,separators=(',',':')))
    return changed

if __name__=='__main__':
    args=argparse.ArgumentParser(description=__doc__)
    args.add_argument('source',type=Path); args.add_argument('target',type=Path)
    a=args.parse_args()
    print(json.dumps(steady(a.source,a.target),indent=2))
