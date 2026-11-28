"""Tighten two demonstration holds in the L r4 radio edition on its 24 fps clock."""
from argparse import ArgumentParser
from hashlib import sha256
import json
from pathlib import Path
import wave
import numpy as np
from scipy.interpolate import PchipInterpolator

FPS=24
UNIT_FRAMES=1489
# Each pair is the end of a source-camera cue and its presentation length.
# Document: summary lands, source highlights, underlined digest, reading stop, exit.
# Q&A: establish questions, reveal soup, hold, move to music, hold,
# move to map, hold, reveal all, enter English plaque, settle for narration.
DOCUMENT=(247, [(255,5),(305,7),(349,8),(383,12),(409,4),(428,12)])
QUESTIONS=(504, [(533,16),(540,6),(578,20),(604,12),(658,24),(674,10),
                 (698,17),(724,12),(734,8),(758,4)])
BASE_AUDIO_HASH='79ac74a6266b592aacf853ff39c214569d79956105620c341cdf6684ba5b4a0d'

def map_frames():
    old=[0];new=[0];removed=0
    for start,segments in [DOCUMENT,QUESTIONS]:
        old.append(start);new.append(start-removed)
        for source_end,frames in segments:
            old.append(source_end);new.append(new[-1]+frames)
        removed=old[-1]-new[-1]
    old.append(UNIT_FRAMES);new.append(UNIT_FRAMES-removed)
    new_clock=np.arange(new[-1]+1)
    # Interpolate accumulated omitted frames. Flat stretches guarantee 1:1
    # playback for unedited passages, and no slowed/repeated frames at a join.
    skip=PchipInterpolator(new,np.asarray(old)-new)(new_clock)
    frame_map=new_clock+np.rint(skip).astype(int)
    assert np.all(np.diff(frame_map)>=1)
    return frame_map.tolist(),list(zip(old,new))

def choose_join(pcm,first,last,length,per_frame,fade):
    """Find the quietest, most phase-compatible cut in the verified speech gap."""
    best=(-float('inf'),None)
    for start in range(first,last+1):
        a=start*per_frame;b=(start+length)*per_frame
        left=pcm[a-fade:a].astype(float);right=pcm[b-fade:b].astype(float)
        la,lb=np.linalg.norm(left),np.linalg.norm(right)
        corr=np.dot(left,right)/max(la*lb,1)
        penalty=abs(np.log((la+1)/(lb+1)))
        score=corr-penalty*.4
        if score>best[0]:best=(score,start)
    return [best[1],best[1]+length]

def contiguous(indices):
    spans=[]
    for f in indices:
        if spans and spans[-1][1]==f:spans[-1][1]+=1
        else:spans.append([f,f+1])
    return spans

def build(src,out):
    out.mkdir(parents=True,exist_ok=True)
    unit=json.loads((src/'unit.json').read_bytes())
    assert round(unit['duration']*FPS)==UNIT_FRAMES
    if sha256((src/'audio.wav').read_bytes()).hexdigest()!=BASE_AUDIO_HASH:
        raise ValueError('Expected the pinned unedited L radio Unit Two PCM mix.')
    with wave.open(str(src/'audio.wav')) as w:
        sr=w.getframerate();assert w.getnchannels()==1 and w.getsampwidth()==2 and sr%FPS==0
        pcm=np.frombuffer(w.readframes(w.getnframes()),'<i2').copy()
    per=sr//FPS;assert len(pcm)==UNIT_FRAMES*per
    mapping,anchors=map_frames();length=len(mapping)-1
    doc_removed=DOCUMENT[1][-1][0]-DOCUMENT[0]-sum(s for _,s in DOCUMENT[1])
    answers_removed=QUESTIONS[1][-1][0]-QUESTIONS[0]-sum(s for _,s in QUESTIONS[1])
    # Start after the final consonants and reserve a clean lead-in to the next
    # take. Crossfade only the score. Retained speech remains sample-identical.
    fade=round(sr*.040)
    cuts=[choose_join(pcm,251,280,doc_removed,per,fade),
          choose_join(pcm,582,619,answers_removed,per,fade)]
    for first,end in reversed(cuts):
        i,j=first*per,end*per
        a,b=pcm[i-fade:i].astype(float),pcm[j-fade:j].astype(float)
        t=np.linspace(0,1,fade)
        h=(1-np.cos(np.pi*t))/2
        blended=a*(1-h)+b*h
        pcm=np.concatenate([pcm[:i-fade],np.rint(blended).astype('<i2'),pcm[j:]])
    assert len(pcm)==length*per
    with wave.open(str(out/'audio.wav'),'wb') as w:
        w.setparams((1,2,sr,len(pcm),'NONE','not compressed'));w.writeframes(pcm.tobytes())
    times=np.asarray(unit['visualTimeline'],float)
    old_t=np.asarray(mapping)/FPS
    visual=np.interp(old_t,times[:,0],times[:,1])
    # Preserve unedited subframe knots for HTML continuity between encoded frames.
    pts={i/FPS:float(v) for i,v in enumerate(visual)}
    for t,v in times:
        if t>QUESTIONS[1][-1][0]/FPS:
            pts[t-(UNIT_FRAMES-length)/FPS]=v
    unit['visualTimeline']=[[t,v] for t,v in sorted(pts.items())]
    unit['duration']=length/FPS
    for n in unit['root']['children']:
        if n.get('type')=='audio':n['time']=[0,unit['duration']]
    for k,t in unit['audioCues'].items():
        unit['audioCues'][k]=t-sum((b-a)/FPS for a,b in cuts if b/FPS<=t)
    (out/'unit.json').write_text(json.dumps(unit,ensure_ascii=False,separators=(',',':')))
    keep=list(map(int,mapping[:-1]));used=set(keep)
    log={'fps':FPS,'inputUnitFrames':UNIT_FRAMES,'outputUnitFrames':length,
         'outputFrameToSourceFrame':keep,'pictureRetainedSourceIntervals':contiguous(keep),
         'pictureRemovedSourceIntervals':contiguous(i for i in range(UNIT_FRAMES) if i not in used),
         'pictureAnchorOldNewFrames':anchors,'removedAudioIntervals':cuts,
         'audioCrossfadeSamples':fade,'audioSampleRate':sr}
    (out/'edit-map.json').write_text(json.dumps(log,indent=2))
    return log

if __name__=='__main__':
    p=ArgumentParser(description=__doc__);p.add_argument('source_unit_dir',type=Path);p.add_argument('out',type=Path)
    a=p.parse_args();r=build(a.source_unit_dir,a.out);print(r['outputUnitFrames'],r['removedAudioIntervals'])
