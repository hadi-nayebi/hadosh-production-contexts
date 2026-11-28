"""Keep the L-radio-tight example cabinet and screen together in a locked wide shot."""
from argparse import ArgumentParser
from pathlib import Path
import json,hashlib

BASE_SHA = '49b1dab788704cf913a843698ccc6537fb564c6467f5e4673f50d335faea1874'
FPS = 24
CAMERA_FRAME = 571
PANEL = (205,62.5,779)  # left, top, width in the 1000 × 562.5 source scene
CABINET = (17,140,170)
def write(path, data):
    path.write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')))
def make(source, dest):
    raw=source.read_bytes()
    if hashlib.sha256(raw).hexdigest()!=BASE_SHA:raise ValueError('Use the checked L-radio-tight Unit Two scene.')
    unit=json.loads(raw)
    def walk(n):
        yield n
        for c in n.get('children',[]): yield from walk(c)
    nodes={n['id']:n for n in walk(unit['root'])}
    camera=nodes['reading-camera-on-server-examples']
    camera['tracks']={}
    bank=nodes['group-2']
    # The rack bank dissolves in place. Only its selected cabinet changes
    # size and position on its way to the side of the fixed screen.
    bank['time'][1]=39.25
    bank['tracks']={'opacity':[[35.457,1],[36.12,1],[37.55,.84],[38.55,.18],[39.25,0]]}
    for peer in bank['children']:
        if peer['time'][1] < 39.25:peer['time'][1]=39.25
    hero=nodes['image-315']; x,y,w,h=hero['box']; left,top,width=CABINET
    scale=width/w
    # Leave the initial matched rack field in place. The selected rack's original
    # entrance comes to rest beside the screen before the monitor turns on.
    final={'scale':scale,'x':left+(scale-1)*w/2,'y':top+(scale-1)*h/2}
    base={'x':209,'y':264,'scale':4.05}
    stages={35.457:0,36.12:0,36.95:.14,37.8:.66,38.65:1}
    for key, value in final.items():
        keys=hero['tracks'][key]
        hero['tracks'][key]=[[39.25 if t==38.65 else t,round(v+stages[t]*(value-base[key]),7)] for t,v,*_ in keys if t in stages]
    hero['tracks']['opacity']=1
    # The display's artwork uses coordinates in the original screen glass.
    # One affine transform places every existing item inside the same bezel.
    display=nodes['group-316']
    scale=PANEL[2]/576
    display['tracks']={'x':PANEL[0]-361*scale,'y':PANEL[1]-119*scale,'scale':scale}
    for key in ('inner-glass','image-317'):
        bezel=nodes[key];bezel['tracks']={'opacity':[[39.25,0],[40.28,1]]}
    # Selection remains visible through the original highlight/opacity action.
    nodes['selected-interview']['tracks'].pop('scale',None)
    dest.parent.mkdir(parents=True,exist_ok=True);write(dest,unit)
if __name__=='__main__':
    ap=ArgumentParser(description=__doc__);ap.add_argument('source',type=Path);ap.add_argument('dest',type=Path)
    a=ap.parse_args();make(a.source,a.dest)
