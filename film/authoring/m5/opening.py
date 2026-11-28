"""Build revision 3 Unit One from the page-10 M4 runtime unit and a mono receiver mix.
Usage: python opening.py path/to/M4/film/units/01-scale output/units/01-scale receiver.wav word-onsets.json
The timing JSON is a flat list of the 22 spoken word onsets on the new film clock.
The integration stage owns the final two chapter-length audio WAVs.
"""
import argparse, json, math, shutil
from pathlib import Path
from itertools import groupby
import numpy as np
from PIL import Image, ImageDraw
from scipy.io import wavfile
from scipy.interpolate import PchipInterpolator
from scipy.ndimage import gaussian_filter1d

FPS = 24
END = 1030 / FPS
LINES = ["I’m an agent using a language model.", "It predicts the next word.", "I read what comes before.", "I write what comes next."]
def nodes(n):
    yield n
    for c in n.get('children',[]): yield from nodes(c)

def build(source,out,receiver,cuefile):
    out.mkdir(parents=True,exist_ok=True)
    srcfile=source/'unit.json'
    u=json.loads(srcfile.read_bytes())
    previous=np.array(u['visualTimeline'])
    source_at_join=float(np.interp(10+8/24-2.5,*previous.T))
    def clock(t):
        return round(source_at_join*t/12,8)
    u['visualTimeline']=[[0,0],[12,source_at_join]]+[[round(t+100/24,9),v] for t,v in previous if t>7+20/24]
    u['duration']=END
    lookup={n['id']:n for n in nodes(u['root'])}
    art=out/'m5';art.mkdir(exist_ok=True)
    oldart=u['assets'].copy()
    def writeimg(name,im):
        p=art/(name+'.png')
        im.save(p,optimize=True)
        u['assets'][name]={'type':'image','src':'m5/'+p.name,'size':list(im.size)}
    def original(i):
        n=lookup[i]
        return Image.open(source/oldart[n['asset']]['src']).convert('RGBA'),n['box']
    def glyph(i,idx):
        im,box=original(i)
        occupied=(np.asarray(im)[:,:,3]>150).any(axis=0)
        runs=[list(g) for yes,g in groupby(range(im.width),key=lambda x:bool(occupied[x])) if yes]
        # Include the original soft edge without stealing neighbouring strokes.
        cols=runs[idx];a=max(0,cols[0]-4);b=min(im.width,cols[-1]+5)
        pix=4*box[2]/im.width
        pos=box[1]+box[3]
        baseline=208 if i.startswith('opening') and int(i[-2:])<=6 else 272 if i.startswith('opening') else 353
        return im.crop((a,0,b,im.height)).resize((max(1,round((b-a)*pix)),round(im.height*pix)),Image.Resampling.LANCZOS),round((pos-baseline-box[3])*4)
    def compound(name,parts):
        x=0; pieces=[]
        for p in parts:
            if isinstance(p,tuple):im,y=glyph(*p)
            else:
                im,box=original(p)
                y=round((box[1]-(208 if p=='opening-word-06' else 272))*4)
                im=im.resize((round(box[2]*4),round(box[3]*4)),Image.Resampling.LANCZOS)
            pieces.append((x,y,im));x+=im.width+6
        top=min(y for _,y,_ in pieces);bottom=max(y+a.height for _,y,a in pieces)
        im=Image.new('RGBA',(x-6,bottom-top))
        for x,y,a in pieces:im.alpha_composite(a,(x,y-top))
        writeimg(name,im)
        return (name,im.width/4,im.height/4,top/4)
    a='opening-word-'
    created={
        'language':compound('receiver-language',[(a+'06',4),(a+'02',0),(a+'02',1),(a+'03',1),(a+'04',0),(a+'02',0),(a+'03',1),(a+'03',2)]),
        'It':compound('receiver-it',[('read-word-01',0),(a+'03',4)]),
        'predicts':compound('receiver-predicts',[a+'10',(a+'04',1)]),
        'model.':compound('receiver-model',[a+'06',(a+'13',3)])
    }
    # Reuse the individual original illuminated letter plates; omitted words get
    # new plates assembled from the same artwork, with the donors' baselines.
    painted={}
    for key,idx,base in [('I’m',1,208),('an',2,208),('agent',3,208),('using',4,208),('a',5,208),('the',11,272),('next',12,272),('word.',13,272)]:
        n=lookup[a+str(idx).zfill(2)];_,y,w,h=n['box'];painted[key]=(n['asset'],w,h,y-base)
    for line,prefix,base in [(LINES[2],'read',353),(LINES[3],'write',410)]:
        for i,word in enumerate(line.split(),1):
            n=lookup[f'{prefix}-word-{i:02}'];_,y,w,h=n['box'];painted[word]=(n['asset'],w,h,y-base)
    painted.update(created)
    times=json.loads(cuefile.read_text())
    assert len(times)==22 and all(a<b for a,b in zip(times,times[1:]))
    positions=[(318,236),(230,302),(270,365),(270,429),(270,493)]
    rows=[LINES[0].split()[:3],LINES[0].split()[3:],*map(str.split,LINES[1:])]
    plates=[];i=0
    for (x,y),row in zip(positions,rows):
        for word in row:
            asset,w,h,dy=painted[word]
            t=times[i];i+=1
            plates.append({'type':'image','id':f'receiver-word-{i:02}','asset':asset,'box':[round(x,3),round(y+dy,3),round(w,3),round(h,3)],
                'time':[clock(t),clock(11.375)],'contentCSS':{'filter':'grayscale(1) brightness(1.17)'},'tracks':{'opacity':[[clock(t),.7],[clock(t+.06),1]]}})
            x+=w+11
    # A continuous optical pullback. One focal point applies to every word and
    # the near particles. The farther field has its own depth and remains visible.
    stops=[0,10/24,4,160/24,9.25,11.375,12]
    octaves=PchipInterpolator(stops,[-.115,0,1,2,3,4.1,4.42])
    first_height=painted['I’m'][2];start_scale=40/(first_height*.39)
    samples=sorted(set([j/24 for j in range(289)]+stops))
    for k in ['scale','x','y']:
        vals=[]
        for t in samples:
            scale=start_scale*2**-float(octaves(t))
            val=scale if k=='scale' else (1-scale)*(500 if k=='x' else 281.25)
            vals.append([clock(t),round(val,7),'linear'])
        u['tracks']['opening-camera-'+k]=vals
    tr={k:{'use':'opening-camera-'+k} for k in ['x','y','scale']}
    plates_node=lookup['word-plates'];plates_node['children']=plates;plates_node['tracks']={**tr,'opacity':[[clock(0),1],[clock(8.8),1],[clock(10.4),.68],[clock(11.375),0]]}
    near=[];lights=lookup['depth-lights']
    for n in lights['children']:
        if n.get('box',[0]*4)[2]>=17:
            copy=dict(n,id='receiver-near-'+n['id'])
            n['time']=[clock(10.5),n['time'][1]]
            # The continued distant set emerges as the near focal plane recedes.
            prior=n.get('tracks',{}).get('opacity',1)
            opacity=float(np.interp(clock(12),*[np.array(prior,dtype=object)[:,:2].astype(float)[:,j] for j in [0,1]])) if isinstance(prior,list) else prior
            n['tracks']={**n.get('tracks',{}),'opacity':[[clock(10.5),0],[clock(12),opacity]]+([k for k in prior if k[0]>clock(12)] if isinstance(prior,list) else [])}
            near.append(copy)
    near_node={'id':'receiver-near-particles','type':'group','children':near,'time':[0,clock(11.875)],'tracks':{**tr,'opacity':[[0,1],[clock(10.5),1],[clock(11.875),0]]}}
    lights['children'].append(near_node)
    swarm=lookup['resident-swarm']
    swarm['targets']=[g for g in swarm['targets'] if not g.get('mask','').startswith(('R01-','R02-'))]
    swarm['depthTravel']=[[0,0],[clock(12),0]]+[p for p in swarm.get('depthTravel',[]) if p[0]>clock(12)]
    for g in swarm['targets']:
        mask=g.get('mask','')
        if mask in ('Quadrillion-title-attraction-mask','Tokens-title-attraction-mask'):
            # Interpolate in the final film clock. The 3.2 starts on "three";
            # the noun gathers only once Hadi reaches its own consonant.
            is_count=mask.startswith('Quadrillion')
            begin,land=(12.0,12.82) if is_count else (13+8/24,13.77)
            def film_time(t):
                return round(float(np.interp(t,*np.array(u['visualTimeline']).T)),8)
            onset,settle=film_time(begin),film_time(land)
            g['weight']=[[onset,0],[film_time(begin+(land-begin)*.43),.58],[settle,1]]+[p for p in g['weight'] if p[0]>10]
            g['displayAlpha']=[[onset,.28],[film_time(begin+(land-begin)*.45),.88],[settle,1]]
    rate,data=wavfile.read(receiver);data=data.astype('float64')
    if data.ndim>1:data=data.mean(axis=1)
    assert len(data)/rate>=11.865,'Receiver stem must start at frame 0'
    # Retain the temporal envelope of the actual received audio in each frame.
    # The moving, smoothed spectral envelope creates a continuous trace across
    # frequency rather than an unrelated oscillator or stock animation.
    nframes=285;w,h=925,44;cols=4
    atlas=Image.new('RGBA',(cols*w,math.ceil(nframes/cols)*h))
    windows=[];freq=np.fft.rfftfreq(2048,1/rate)
    for f in range(nframes):
        center=round((f+.5)/24*rate);i=np.arange(center-1024,center+1024)
        spec=np.abs(np.fft.rfft(data[np.clip(i,0,len(data)-1)]*np.hanning(2048)))
        windows.append(np.interp(np.geomspace(75,min(8500,rate*.48),w),freq,spec))
    windows=gaussian_filter1d(np.asarray(windows),1.6,axis=0)
    windows=gaussian_filter1d(windows,4.4,axis=1)
    windows=np.minimum(1,(windows/max(np.percentile(windows,99),1e-6))**.65)
    taper=np.sin(np.linspace(0,np.pi,w))**.55
    for f,envelope in enumerate(windows):
        x=np.arange(w);y=23-18*envelope*taper
        tile=Image.new('RGBA',(w,h));ImageDraw.Draw(tile).line(list(zip(range(w),map(float,y))),fill=(158,211,216,211),width=2)
        atlas.paste(tile,(f%cols*w,f//cols*h))
    writeimg('receiver-trace-atlas',atlas)
    trace={'id':'receiver-trace','type':'group','box':[37.5,36,w,h],'time':[0,clock(11.875)],'css':{'overflow':'hidden'},
           'tracks':{'opacity':[[0,.90],[clock(11.55),.90],[clock(11.875),0]]},
           'children':[{'id':'receiver-trace-strip','type':'image','asset':'receiver-trace-atlas','box':[0,0,*atlas.size],'tracks':{
               k:[[clock(f/FPS),-(f%cols*w if k=='x' else f//cols*h),'hold'] for f in range(nframes)] for k in ['x','y']}}]}
    lookup['opening-sentence-scene']['children']=[plates_node]
    u['root']['children'].append(trace)
    retire={'m1-next-word-slot','opening-handoff-grain','m-public-source-heading','m-public-source-detail','book-to-source-strand','book-source-travel','m-moving-source-page','m-page-first','m-page-second','m-tenth','m-tenfold','ratio-marker','google-volume','public-text'}
    for n in nodes(u['root']):
        if 'children' in n:n['children']=[c for c in n['children'] if c['id'] not in retire]
        if n['type']=='audio':n['time']=[0,END]
    live={n['id'] for n in nodes(u['root'])}
    for n in nodes(u['root']):
        if 'refs' in n:n['refs']=[r for r in n['refs'] if r in live]
    for n in u['shots']:
        n['items']=[r for r in n['items'] if r in live]
    lookup['shot-03']['refs']=['resident-swarm','receiver-trace']
    u['shots'][2].update(title='Receiver settles as the station locks',items=lookup['shot-03']['refs'])
    used=set()
    def refs(v):
        if isinstance(v,dict):
            for a in v.values():refs(a)
        elif isinstance(v,list):
            for a in v:refs(a)
        elif isinstance(v,str):used.add(v)
    refs(u['root']);u['assets']={k:v for k,v in u['assets'].items() if k in used}
    for k,asset in u['assets'].items():
        if k in oldart:
            src=source/asset['src'];dest=out/asset['src']
            dest.parent.mkdir(parents=True,exist_ok=True)
            if not dest.exists():shutil.copy2(src,dest)
    (out/'unit.json').write_text(json.dumps(u,separators=(',',':')))
if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('source',type=Path);p.add_argument('output',type=Path)
    p.add_argument('receiver',type=Path);p.add_argument('onsets',type=Path)
    a=p.parse_args();build(a.source,a.output,a.receiver,a.onsets)
