"""Offline scene-cut foundation using the existing FFmpeg/SciPy analysis stack."""
import argparse, hashlib, json, subprocess
from pathlib import Path
import numpy as np
from scipy import signal
from scipy.ndimage import median_filter, maximum_filter1d

BANDS = {'low': (45, 220), 'mid': (300, 2200), 'high': (2500, 7000)}
FPS, SR, HOP, NFFT = 30, 16000, 160, 1024

def analyze(source):
    raw = subprocess.run(['ffmpeg','-v','error','-i',str(source),'-ac','1','-ar',str(SR),'-f','f32le','pipe:1'],capture_output=True,check=True).stdout
    audio=np.frombuffer(raw,dtype='<f4')
    f,t,z=signal.stft(audio,SR,nperseg=NFFT,noverlap=NFFT-HOP,boundary='zeros')
    magnitude=np.abs(z)
    harmonic=median_filter(magnitude,size=(1,31))
    percussive=median_filter(magnitude,size=(31,1))
    mask=percussive**2/(percussive**2+harmonic**2+1e-12)
    flux=np.maximum(0,np.diff(np.log1p(100*magnitude*mask),axis=1,prepend=np.log1p(100*magnitude[:,:1]*mask[:,:1])))
    bands={}
    for name,(lo,hi) in BANDS.items():
        selected=(f>=lo)&(f<hi)
        values=flux[selected].mean(axis=0)
        bands[name]={'flux':values,'db':20*np.log10(np.maximum(1e-10,np.sqrt((magnitude[selected]**2).mean(axis=0))))}
    # Same low/high percussion weighting as analyze-scene-rhythm.py.
    low=bands['low']['flux']/max(np.percentile(bands['low']['flux'],95),1e-12)
    high=bands['high']['flux']/max(np.percentile(bands['high']['flux'],95),1e-12)
    env=np.maximum(0,0.7*low+0.3*high-signal.medfilt(0.7*low+0.3*high,31))
    peaks,_=signal.find_peaks(env,distance=14,prominence=max(.03,float(np.percentile(env,95))*.08))
    observed=[]; windows=[]
    # Independent local grid estimate before any scene-cut information is read.
    for start in np.arange(0,t[-1],8):
        a=max(0,start-4); b=min(t[-1],start+12)
        indices=np.where((t>=a)&(t<b))[0]; local=env[indices]
        corr=signal.correlate(local-local.mean(),local-local.mean(),mode='full',method='fft')[len(local)-1:]
        lo,hi=32,81
        candidates=signal.find_peaks(corr[lo:hi])[0]+lo
        lag=int(max(candidates,key=lambda q:corr[q])) if len(candidates) else int(np.argmax(corr[lo:hi])+lo)
        period=lag*.01
        # Nearby peak envelope avoids rejecting a valid grid solely for a 10ms bin mismatch.
        expanded=maximum_filter1d(env,size=9)
        phases=np.arange(0,period,.01)
        def fit(phase):
            times=np.arange(a+phase,b,period)
            return float(np.mean(expanded[np.minimum(len(env)-1,np.rint(times/.01).astype(int))]))
        phase=float(max(phases,key=fit)); grid=np.arange(a+phase,b,period)
        local_scale=max(float(np.percentile(local,95)),1e-9)
        strength=float(corr[lag]/max(corr[0],1e-9))
        windows.append({'startSeconds':round(float(start),3),'endSeconds':round(float(min(start+8,t[-1])),3),'estimatedBpm':round(60/period,3),'periodicity':round(strength,4),'phaseSeconds':round(a+phase,3)})
        for k in peaks[(t[peaks]>=start)&(t[peaks]<start+8)]:
            distance=float(np.min(abs(grid-t[k])))
            if distance<=.075:
                observed.append({'seconds':round(float(t[k]),4),'analysisIndex':int(k),'strength':round(min(1,float(env[k])/local_scale),4),'gridErrorMs':round(distance*1000,2),'estimatedBpm':round(60/period,3),'periodicity':round(strength,4)})
    return t,env,bands,observed,windows

def cut_score(seconds,t,env,bands,beats):
    nearest=min(beats,key=lambda b:abs(b['seconds']-seconds)) if beats else None
    delta=abs(nearest['seconds']-seconds) if nearest else float('inf')
    timing=100*max(0,1-(delta/.150)**2)
    # Onset support refers to observed beat energy; it cannot make an off-beat cut pass.
    support=100*nearest['strength'] if nearest and delta<=.15 else 0
    values={}
    k=min(len(t)-1,max(0,round(seconds/.01)))
    for name,band in bands.items():
        values[name]={'rangeHz':list(BANDS[name]),'spectralFlux':round(float(band['flux'][k]),7),'energyDb':round(float(band['db'][k]),3)}
    return {'seconds':round(seconds,6),'score':round(.7*timing+.3*support,3),'timingScore':round(timing,3),'onsetSupportScore':round(support,3),'beatDistanceMs':round(delta*1000,3) if nearest else None,'observedBeat':nearest,'frequencyBands':values}

def cue_allows_interval(shot, start, end, vocal_ranges):
    """The planned decisive moment must fall in its explicit source lyric cue.

    This verifies a time relationship, not whether the picture expresses meaning.
    Old schedules without expectedPhraseIds stay diagnostic and unconstrained.
    """
    if 'expectedPhraseIds' not in shot:
        return True
    middle=(start+end)/2
    ranges=shot.get('lyricCueFrameRanges',[])
    if shot['expectedPhraseIds']:
        return any(a<=middle<b for a,b in ranges)
    return not any(a<=middle<b for a,b in vocal_ranges)

def select_cuts(schedule,t,env,bands,beats):
    # Preserve order and story intent. Allow up to 1.5 seconds of editorial retiming.
    rows=schedule['shots']; previous={0:(0,[])}
    for index,shot in enumerate(rows[1:],1):
        radius=shot.get('maxRetimeFrames',45)
        target=shot['startFrame']; choices=range(max(1,target-radius),min(6804,target+radius+1))
        current={}
        for frame in choices:
            evidence=cut_score(frame/FPS,t,env,bands,beats)
            # Per-cut floor is a constraint, not something the mean can trade away.
            if evidence['score'] < 80:
                continue
            for prev,(score,path) in previous.items():
                if 60<=frame-prev<=120 and cue_allows_interval(rows[index-1],prev,frame,schedule.get('vocalPhraseFrameRanges',[])):
                    # Evidence dominates; a small distance cost preserves intended editorial timing.
                    value=score+evidence['score']-abs(frame-target)*.02
                    if frame not in current or value>current[frame][0]: current[frame]=(value,path+[frame])
        if not current: raise ValueError('No cadence-preserving path for '+shot['id'])
        previous=current
    options=[v for frame,v in previous.items() if 60<=6804-frame<=120 and cue_allows_interval(rows[-1],frame,6804,schedule.get('vocalPhraseFrameRanges',[]))]
    if not options: raise ValueError('No valid final shot')
    return [0]+max(options,key=lambda v:v[0])[1]+[6804]

def run(args):
    source=Path(args.source); config=json.loads(Path(args.config).read_text())
    source_hash=hashlib.sha256(source.read_bytes()).hexdigest()
    baseline=json.loads(Path(args.baseline).read_text())
    if source_hash!=baseline['source']['sha256']: raise ValueError('Source audio hash mismatch')
    t,env,bands,beats,windows=analyze(source)
    schedule=json.loads(Path(args.sequence).read_text())
    phrases={}
    for word in baseline['words']:
        old=phrases.get(word['phraseId'],[word['enterFrame'],word['exitFrame']])
        phrases[word['phraseId']]=[min(old[0],word['enterFrame']),max(old[1],word['exitFrame'])]
    schedule['vocalPhraseFrameRanges']=list(phrases.values())
    for shot in schedule['shots']:
        if 'expectedPhraseIds' in shot:
            shot['lyricCueFrameRanges']=[phrases[pid] for pid in shot['expectedPhraseIds']]
    boundaries=select_cuts(schedule,t,env,bands,beats)
    score=lambda frames:[cut_score(f/FPS,t,env,bands,beats) for f in frames]
    cuts=score(boundaries[1:-1]); old=score([s['start'] for s in baseline['scenes'][1:]])
    shifted=score([f+7.5 for f in boundaries[1:-1]])
    summary=lambda rows:{'mean':round(float(np.mean([r['score'] for r in rows])),3),'minimum':min(r['score'] for r in rows),'count':len(rows),'below80':sum(r['score']<80 for r in rows)}
    result=summary(cuts)
    cadence=all(60<=b-a<=120 for a,b in zip(boundaries,boundaries[1:]))
    score_pass=result['mean']>90 and result['minimum']>=80 and cadence
    for i,shot in enumerate(schedule['shots']):
        shot.update(startFrame=boundaries[i],endFrame=boundaries[i+1],startSeconds=round(boundaries[i]/FPS,6),endSeconds=round(boundaries[i+1]/FPS,6),cutEvidence=cuts[i-1] if i else None)
        active=[w for w in baseline['words'] if w['enterFrame']<boundaries[i+1] and w['exitFrame']>boundaries[i]]
        shot['sourcePhraseIds']=list(dict.fromkeys(w['phraseId'] for w in active))
        shot['lyricEvidence']={'phraseIds':shot['sourcePhraseIds'],'text':' '.join(w['text'] for w in active),'timingStatus':'Inherited edited phrase timing; word stress and phoneme alignment not verified','semanticCutScore':None}
        shot['plannedCueTimingPassed']=cue_allows_interval(shot,boundaries[i],boundaries[i+1],schedule['vocalPhraseFrameRanges']) if 'expectedPhraseIds' in shot else None
    schedule['cutTiming']='Audio-measured local observed-beat candidates, quantized to 30fps; listening verification pending.'
    schedule['tempoAlignment']=result
    schedule['numericTimingGatePassed']=score_pass
    schedule['detailWorkUnlocked']=False
    schedule['detailGateReason']='Changing-shot rough cut and full playback still required; numeric timing alone is insufficient.'
    target=Path(args.output);target.mkdir(parents=True,exist_ok=True)
    (target/'scene-sequence-scored-v10.json').write_text(json.dumps(schedule,indent=2)+'\n')
    report={'schema':'canvas-scene-foundation-analysis-v1','sourceSha256':source_hash,'scoringConfigSha256':hashlib.sha256(Path(args.config).read_bytes()).hexdigest(),'algorithmSha256':hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),'config':config,'sampleRate':SR,'hopMs':10,'fftSize':NFFT,'analyzedSeconds':round(float(t[-1]),3),'observedBeatCount':len(beats),'tempoWindows':windows,'observedBeats':beats,'baseline':summary(old),'baselineCuts':old,'proposed':result,'delayed250msControl':summary(shifted),'numericTimingGatePassed':score_pass,'detailWorkUnlocked':False,'cuts':cuts}
    (target/'scene-foundation-analysis-v10.json').write_text(json.dumps(report,indent=2)+'\n')
    print(json.dumps({k:report[k] for k in ['baseline','proposed','delayed250msControl','numericTimingGatePassed','detailWorkUnlocked']}))

if __name__=='__main__':
    parser=argparse.ArgumentParser();parser.add_argument('--source',required=True);parser.add_argument('--baseline',required=True);parser.add_argument('--sequence',required=True);parser.add_argument('--output',required=True);parser.add_argument('--config',default='scripts/scene-foundation-scoring-v1.json');run(parser.parse_args())
