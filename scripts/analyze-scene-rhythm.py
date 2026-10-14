"""Estimate onset/beat candidates from the retained recording; never claim human alignment."""
import argparse, hashlib, json, subprocess, tempfile
from pathlib import Path
import numpy as np
from scipy.io import wavfile
from scipy import signal
parser=argparse.ArgumentParser()
parser.add_argument('--in-ms',type=int,default=48100)
parser.add_argument('--out-ms',type=int,default=72100)
parser.add_argument('--output',default='src/canvas/song/liveStage/rhythm-candidates.json')
args=parser.parse_args()
duration=(args.out_ms-args.in_ms)/1000
assert 0 < duration <= 60
last_frame=round(duration*30)-1
source=Path('.origin/song-media/r7/L1-combined.mp3')
expected='f47512d5ec38dd1030630e1f7ac343b4734516ee84f3e184191529014f52bf67'
assert hashlib.sha256(source.read_bytes()).hexdigest()==expected
with tempfile.TemporaryDirectory(prefix='canvas-rhythm-',dir='/dev/shm') as temp:
 wav=Path(temp)/'excerpt.wav'
 subprocess.run(['ffmpeg','-v','error','-y','-ss',str(args.in_ms/1000),'-i',str(source),'-t',str(duration),'-ac','1','-ar','22050',str(wav)],check=True)
 sr,a=wavfile.read(wav);a=a.astype(float)/32768
 hop=220;nfft=1024
 f,t,z=signal.stft(a,sr,nperseg=nfft,noverlap=nfft-hop,boundary='zeros')
 # Median masks suppress sustained/harmonic energy before low/high transient analysis.
 from scipy.ndimage import median_filter
 magnitude=np.abs(z)
 harmonic=median_filter(magnitude,size=(1,31));percussive=median_filter(magnitude,size=(31,1))
 mask=percussive**2/(percussive**2+harmonic**2+1e-12)
 mag=np.log1p(100*magnitude*mask);flux=np.maximum(0,np.diff(mag,axis=1,prepend=mag[:,:1]))
 low=flux[(f>=40)&(f<=180)].mean(axis=0)
 high=flux[(f>=2000)&(f<=8000)].mean(axis=0)
 low/=max(np.percentile(low,95),1e-12);high/=max(np.percentile(high,95),1e-12)
 env=.7*low+.3*high
 env=np.maximum(0,env-signal.medfilt(env,31));env/=max(env.max(),1e-12)
 peaks,_=signal.find_peaks(env,distance=14,prominence=.065)
 corr=signal.correlate(env-env.mean(),env-env.mean(),mode='full')[len(env)-1:]
 lo,hi=round(.32*sr/hop),round(.8*sr/hop)
 candidates=signal.find_peaks(corr[lo:hi])[0]+lo
 lag=int(max(candidates,key=lambda x:corr[x])) if len(candidates) else int(np.argmax(corr[lo:hi])+lo)
 period=lag*hop/sr
 phases=np.arange(0,period,.01)
 score=lambda ph:sum(env[min(len(env)-1,round(x*sr/hop))] for x in np.arange(ph,duration,period))
 phase=float(max(phases,key=score))
 beats=[]
 for x in np.arange(phase,duration,period):
  nearby=[k for k in peaks if abs(t[k]-x)<=.075]
  snapped=float(t[max(nearby,key=lambda k:env[k])]) if nearby else float(x)
  frame=min(last_frame,max(0,round(snapped*30)))
  if frame not in [b['frame'] for b in beats]:beats.append({'frame':frame,'observedOnset':bool(nearby),'strength':round(float(env[min(len(env)-1,round(snapped*sr/hop))]),3)})
 out={'schema':'canvas-rhythm-candidates-v2','sourceSha256':expected,'sourceInMs':args.in_ms,'sourceOutMs':args.out_ms,'sampleRate':sr,'hopSamples':hop,'method':'Time/frequency median masks suppress sustained harmonic energy; positive log spectral flux weighted 70% at 40–180Hz and 30% at 2–8kHz; median-baseline removal; autocorrelation 75–187 BPM and phase search; onset snap within 75ms. Not source separation: vocal transients can remain. Interpolated beats do not drive default accents.','status':'percussion-weighted estimate; musical alignment unapproved','confidence':'medium-low: no isolated percussion stem; tempo octave and phase remain reviewable','estimatedBpm':round(60/period,2),'phaseSeconds':round(phase,3),'detectedBeatFrames':[b['frame'] for b in beats],'beatFrames':[b['frame'] for b in beats],'beats':beats,'onsets':[{'frame':min(last_frame,round(float(t[k])*30)),'strength':round(float(env[k]),3)} for k in peaks]}
 Path(args.output).write_text(json.dumps(out,indent=2)+'\n')
 print(json.dumps({'bpm':out['estimatedBpm'],'beats':len(beats),'snapped':sum(b['observedOnset'] for b in beats),'first':beats[:8]}))
