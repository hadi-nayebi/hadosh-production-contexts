"""Build M5 PCM stems from the fixed M4 film directory and supplied performances.
Usage: python build_audio.py M4_FILM_FOLDER OUTPUT
"""
from pathlib import Path
from scipy import signal, ndimage
from scipy.io import wavfile
import numpy as np
import subprocess, argparse, json
HERE = Path(__file__).resolve().parent
SR = 24000
FPS = 24
PER_FRAME = SR // FPS
U1 = 1030
U2 = 753
RADIO_LINES = [
    ("I'm an agent using a language model.",10/24,3.75,0),
    ("It predicts the next word.",4,6.33,-5),
    ("I read what comes before.",6+16/24,8.96,-15),
    ("I write what comes next.",9.25,11.375,-24),
]
FORMED = 'The Transformer was born. A language model is formed through training on vast collections of text.'
def decode(path, filters=None):
    args=['ffmpeg','-nostdin','-v','error','-i',str(path)]
    if filters:
        args+=['-af',filters]
    return np.frombuffer(subprocess.check_output(args+['-ar',str(SR),'-ac','1','-f','f32le','-']),'<f4').astype(float)
def write(path,x):
    path.parent.mkdir(exist_ok=True,parents=True)
    if np.abs(x).max()>=1: raise ValueError('Clipping at '+str(path))
    wavfile.write(path,SR,np.clip(np.rint(x*32768),-32768,32767).astype('<i2'))
def normalized(x,db):
    return x*10**(db/20)/np.sqrt(np.mean(x*x))
def receiver():
    rf=decode(HERE/'AM-Tuning-CC0.mp3')
    # Crosslap portions of recording's quiet station noise; use selected lock at native rate.
    texture=rf[round(5.15*SR):round(5.70*SR)]
    overlap=round(.075*SR); window=np.ones_like(texture)
    window[:overlap]=np.sin(np.linspace(0,np.pi/2,overlap))
    window[-overlap:]=window[:overlap][::-1]
    output=np.zeros(round(12*SR));step=len(texture)-overlap
    for p in range(0,len(output),step):
        n=min(len(texture),len(output)-p)
        output[p:p+n]+=(texture*window)[:n]
    clock=np.arange(len(output))/SR
    output=normalized(output,-35)*10**(np.interp(clock,[0,3.75,6.33,9,10.5,11.875,12],[-3,-4,-4,5.5,7,-60,-90])/20)
    cue=normalized(rf[27000:60000],-23)
    edge=round(.017*SR)
    cue[:edge]*=np.linspace(0,1,edge)
    cue[-2*edge:]*=np.linspace(1,0,2*edge)
    output[252000:285000]+=cue
    return .65*np.tanh(output/.65)
def opening(out):
    voice=np.zeros(round(12*SR))
    for n,(text,start,end,db) in enumerate(RADIO_LINES,1):
        file=HERE/f'radio-{n}.wav'
        raw=decode(file)
        positions=np.flatnonzero(abs(raw)>abs(raw).max()*.008)
        a=max(0,positions[0]-int(.010*SR))
        b=min(len(raw),positions[-1]+int(.030*SR))
        # Stretch the entire gesture with pitch/formant preservation to the planned speaking rate.
        target=round((end-start)*SR)
        ratio=(b-a)/target
        take=decode(file,f'atrim=start_sample={a}:end_sample={b},asetpts=PTS-STARTPTS,rubberband=tempo={ratio:.10f}:formant=preserved')
        take=np.pad(take,(0,max(0,target-len(take))))[:target]
        band=signal.butter(2,[100+40*n,7200-680*n],btype='bandpass',fs=SR,output='sos')
        take=signal.sosfilt(band,take)
        take=normalized(take,-21.8+db)
        take*=10**(np.linspace(.35,-.65,len(take))/20)
        take=.82*np.tanh(take/.82)
        tail=round(.022*SR);take[-tail:]*=np.linspace(1,0,tail)
        voice[round(start*SR):round(start*SR)+len(take)] = take
        write(out/f'line-{n}.wav',take)
    station=receiver()
    write(out/'receiver.wav',station)
    write(out/'radio-voice.wav',voice)
    return voice,station
def readstem(film,unit,name):
    return decode(film/'units'/unit/'m1'/f'{name}.wav')
def zero_join(stem,left,right):
    # For voice, cut at quiet edge and dip the crossing over 5 ms.
    x,y=stem[:left].copy(),stem[right:].copy()
    p=120;x[-p:]*=np.linspace(1,0,p);y[:p]*=np.linspace(0,1,p)
    return np.r_[x,y]
def matched_join(stem,left,right,fade=.100):
    # Center a same-duration equal-power crossfade on the edit.
    n=round(SR*fade/2)
    f=np.linspace(0,np.pi/2,2*n)
    return np.r_[stem[:left-n],stem[left-n:left+n]*np.cos(f)+stem[right-n:right+n]*np.sin(f),stem[right+n:]]
def extend_bed(bed,where,frames):
    n=frames*PER_FRAME
    # Repeat a preceding piece of the same score in a continuous equal-power overlap.
    return matched_join(bed,where,where-n,.240)
def build(film,out):
    out.mkdir(exist_ok=True,parents=True)
    intro,rf=opening(out)
    m4u1=readstem(film,'01-scale','speech')
    m4bed=readstem(film,'01-scale','music')
    # Original head lasted 2.5s; Hadi starts at 10.340s global, 7.840s U1-local.
    # Keep the actual consonant; the cut lies a fraction earlier, at 7.833s.
    start=188*PER_FRAME; n=U1*PER_FRAME
    v1=np.r_[intro,m4u1[start:]]
    assert len(v1)==n
    # The score enters just before station lock. Music advances to the original source clock at the narrator entrance.
    m1=np.zeros(n);fade=round(.9*SR);lock=288*PER_FRAME
    m1[lock-fade:lock]=m4bed[start-fade:start]*np.sin(np.linspace(0,np.pi/2,fade))
    m1[lock:]=m4bed[start:]
    receiver_stem=np.pad(rf,(0,n-len(rf)))
    write(out/'01-scale'/'receiver.wav',receiver_stem)
    tracks={'01-scale':(v1,m1)}
    # Drop M4 51.125–70.125, preserve its first distinct use examples and translation.
    # 1.125s between complete analogy thoughts, 2.5s traveling to desk after the full sentence.
    v=readstem(film,'02','speech');m=readstem(film,'02','music')
    left,right=237*PER_FRAME,693*PER_FRAME
    v=zero_join(v,left,right);m=matched_join(m,left,right)
    between=(1911-990-456)*PER_FRAME
    v=np.r_[v[:between],np.zeros(27*PER_FRAME),v[between:]]
    m=extend_bed(m,between,27)
    tailpos=len(v)-8*PER_FRAME
    v=np.r_[v[:tailpos],np.zeros(60*PER_FRAME),v[tailpos:]]
    m=extend_bed(m,tailpos,60)
    assert len(v)==len(m)==U2*PER_FRAME
    tracks['02']=(v,m)
    # Preserve M4's opening clause and insert only the naturally timed new formation sentence.
    v3=readstem(film,'03','speech');m3=readstem(film,'03','music')
    take=decode(HERE/'formed-take.wav')[int(1.35*SR):]
    old_phrase=v3[round(26.42*SR):round(29.42*SR)]
    new_phrase=take[:round(3.32*SR)]
    gain=np.sqrt(np.mean(old_phrase**2)/np.mean(new_phrase**2))
    voice3=np.zeros(730*PER_FRAME)
    keep=round(26.355*SR)
    voice3[:keep]=v3[:keep]
    insert=round(26.50*SR)
    voice3[insert:insert+len(take)]=gain*take
    # Match the score's continuation into Unit Four. Preserve the existing cut edges.
    music3=extend_bed(m3,round(26.5*SR),9)
    tracks['03']=(voice3,music3)
    tracks['04']=(readstem(film,'04','speech'),readstem(film,'04','music'))
    for unit,(v,m) in tracks.items():
        for name,stem in [('speech',v),('music',m),('mix',v+m+(receiver_stem if unit=='01-scale' else 0))]:
            write(out/unit/(name+'.wav'),stem)
    for name in ['speech','music','mix']:
        full=np.concatenate([decode(out/u/(name+'.wav')) for u in tracks])
        write(out/f'full-{name}.wav',full)
    return tracks
if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('film',type=Path);p.add_argument('out',type=Path);a=p.parse_args()
    build(a.film,a.out)
