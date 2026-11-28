"""Assemble an L-r4-based opening from its editable unit and the checked M5 radio donor.
python build_intro.py L_unit_folder M5_unit_folder output_unit_folder
"""
from copy import deepcopy
from pathlib import Path
import argparse,hashlib,json,shutil
import numpy as np
from scipy.io import wavfile

FPS=24
RATE=24000
SAMPLES_PER_FRAME=RATE//FPS
def walk(node):
    yield node
    for c in node.get('children',[]):yield from walk(c)
def stringrefs(obj):
    if isinstance(obj,dict):
        for v in obj.values():yield from stringrefs(v)
    elif isinstance(obj,list):
        for v in obj:yield from stringrefs(v)
    elif isinstance(obj,str):yield obj
def replace(obj,mapping):
    if isinstance(obj,dict):return {k:replace(v,mapping) for k,v in obj.items()}
    if isinstance(obj,list):return [replace(v,mapping) for v in obj]
    return mapping.get(obj,obj) if isinstance(obj,str) else obj
def patch(lbase,m5base,out):
    out.mkdir(parents=True,exist_ok=True)
    u=json.loads((lbase/'unit.json').read_bytes());oldassets=dict(u['assets'])
    donor=json.loads((m5base/'unit.json').read_bytes())
    assert u['id']==donor['id']=='unit-01' and u['duration']==48.75
    scene={n['id']:n for n in walk(u['root'])};m={n['id']:n for n in walk(donor['root'])}
    # Global L time 14.0 is local 9.0, and moves to 12.0 in this version.
    start=9.0;newstart=12.0;offset=newstart-start
    u['duration']+=offset
    orig=np.array(u['visualTimeline'])
    first=float(np.interp(12,*np.array(donor['visualTimeline']).T))
    u['visualTimeline']=[[0,0],[12,first]]+[[round(t+offset,8),v] for t,v in orig if t>start]
    def vt(t):return round(float(np.interp(t,*np.array(u['visualTimeline']).T)),8)
    u['tracks'].update({k:v for k,v in donor['tracks'].items() if k.startswith('opening-camera-')})
    # During the receiver opening, the original L field sits behind the complete
    # donor star-and-type plate. Cross from one field to the other before the
    # spoken number starts, while both carry ambient stars.
    donor_set=deepcopy(m['persistent-set'])
    donor_set['children']=[c for c in donor_set['children'] if c['id'] in ['quiet-backdrop','depth-lights','farther-moving-school','resident-swarm']]
    head={'id':'radio-introduction','type':'group','time':[0,vt(12)],'children':[donor_set,deepcopy(m['opening-sentence-scene']),deepcopy(m['receiver-trace'])],
        'tracks':{'opacity':[[0,1],[vt(11.625),1],[vt(12),0]]}}
    for n in walk(head):
        n['id']='radio-'+n['id']
        if n['id']=='radio-resident-swarm':
            # Formation belongs to the L number, not the receiver field.
            n['targets']=[]
    assetmap={}
    for asset in set(stringrefs(head)) & donor['assets'].keys():
        a=donor['assets'][asset]
        l=oldassets.get(asset);same=l and (lbase/l['src']).read_bytes()==(m5base/a['src']).read_bytes()
        if same:continue
        name='radio-'+asset;assetmap[asset]=name
        path='radio-assets/'+a['src'];u['assets'][name]={**a,'src':path}
        dst=out/path;dst.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(m5base/a['src'],dst)
    head=replace(head,assetmap)
    # Restore L's own star positions and original artwork after the handoff.
    # Leave the original masks allocated so their seeded descendants retain L's
    # geometry, while retiring the obsolete paragraph before the station lock.
    for g in scene['resident-swarm']['targets']:
        name=g.get('mask','')
        if name.startswith(('R01-','R02-')):g['weight']=[[0,0]]
        if name in ('Quadrillion-title-attraction-mask','Tokens-title-attraction-mask'):
            count=name.startswith('Quadrillion')
            a,b=(12,12.82) if count else (13.33,13.77)
            g['weight']=[[vt(a),0],[vt(a+(b-a)*.43),.58],[vt(b),1]]+[k for k in g['weight'] if k[0]>10]
    u['root']['children']=[n for n in u['root']['children'] if n['id']!='opening-sentence-scene']+[head]
    # Reuse the L-rendered graph, rack camera and both L year plates beneath the racks.
    # The two requested amounts and numeric ratio use the exact marked production art.
    growth=scene['processing-growth']
    for key,box,on in [('m-base-value',[48,13,400,53],13.23),('m-current-value',[505,13,455,53],14.93),('m-growth-result',[630,113,244,55],16.18)]:
        path=donor['assets'][key]['src'];dest=out/path;dest.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(m5base/path,dest)
        u['assets'][key]=donor['assets'][key]
        n={'id':key,'asset':key,'type':'image','box':box,'time':[on,20.08],
           'tracks':{'opacity':[[on,0],[on+.32,1],[19.59,1],[20.08,0]]}}
        if key=='m-growth-result':
            n['id']='growth-multiplier'
            growth['children']=[c for c in growth['children'] if c['id']!=n['id']]
        growth['children'].append(n)
    # Sound from the L master resumes at source time 8.75, including the quiet lead
    # into "three". The RF stem is separate; the music crossfade ends on the cue.
    duration=round(u['duration']*RATE);edit=12*RATE;src=int(start*RATE)
    audio_nodes={n['id']:n for n in walk(u['root']) if n['type']=='audio'}
    for n in walk(u['root']):
        if 'children' in n:n['children']=[c for c in n['children'] if c['type']!='audio']
    def read(p):
        rate,a=wavfile.read(p);assert rate==RATE and a.dtype==np.int16
        return a.astype(float)
    auddir=out/'audio';auddir.mkdir(exist_ok=True)
    for key,original,donorid,sp in [('speech','narration-master','m1-speech',.18),('music','background-music','m1-music',.28),('receiver',None,'m5-receiver',0)]:
        dn=m[donorid] if donorid in m else next(v for v in m.values() if v['type']=='audio' and key in v['asset'])
        signal=read(m5base/donor['assets'][dn['asset']]['src'])
        result=np.zeros(duration);result[:edit]=signal[:edit]
        if original:
            oldnode=audio_nodes[original];a=oldassets[oldnode['asset']];source=read(lbase/a['src'])
            win=round(sp*RATE);f=np.linspace(0,np.pi/2,win)
            result[edit-win:edit]=result[edit-win:edit]*np.cos(f)+source[src-win:src]*np.sin(f)
            result[edit:]=source[src:]
        dest='audio/'+key+'.wav';wavfile.write(out/dest,RATE,np.rint(result).clip(-32768,32767).astype('int16'))
        id='chapter-'+key;u['assets'][id]={'type':'audio','src':dest}
        if key=='music':u['assets'][id]['credit']=oldassets[audio_nodes['background-music']['asset']]['credit']
        u['root']['children'].append({'id':id,'asset':id,'type':'audio','time':[0,u['duration']],'gain':1})
    # Replace old editorial references to removed word scenes with their retained radio equivalents.
    live={c['id'] for c in walk(u['root'])}
    for n in [*walk(u['root']),*u['shots']]:
        for field in ('items','refs'):
            if field in n:
                n[field]=[k if k in live else 'radio-word-plates' for k in n[field]]
    used=set(stringrefs(u['root']))
    u['assets']={k:v for k,v in u['assets'].items() if k in used}
    for k in u['assets'].keys()&oldassets.keys():
        a=u['assets'][k];dest=out/a['src'];dest.parent.mkdir(parents=True,exist_ok=True)
        if not dest.exists():shutil.copyfile(lbase/a['src'],dest)
    (out/'unit.json').write_text(json.dumps(u,separators=(',',':')))
if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__)
    for k in ('lbase','m5base','out'):p.add_argument(k,type=Path)
    a=p.parse_args();patch(a.lbase,a.m5base,a.out)
