"""Retain native files, reconstruct stems, and compare time origins without editing anchors."""
import hashlib,json,os,re,subprocess
from pathlib import Path
import numpy as np
from scipy import signal
ROOT=Path(__file__).resolve().parents[1]
TAKES=[('0c977d97-2f49-42c9-bc89-fab28a565175',Path('/home/hadinayebi/Downloads/v0-3-51'),Path('/home/hadinayebi/Downloads/v0-3-51/3-51-v0.wav')),
       ('91fa4d7d-c411-4272-abf3-7c184bbd3875',Path('/home/hadinayebi/Downloads/v0-3-58'),Path('/home/hadinayebi/Downloads/v0-3-58/3-58-v0.wav'))]
def sha(p):
 h=hashlib.sha256()
 with p.open('rb') as f:
  for b in iter(lambda:f.read(1024*1024),b''):h.update(b)
 return h.hexdigest()
def probe(p):return json.loads(subprocess.check_output(['ffprobe','-v','error','-show_format','-show_streams','-of','json',str(p)]))
def pcm(p,rate=16000,channels=1):
 return np.frombuffer(subprocess.check_output(['ffmpeg','-v','error','-i',str(p),'-vn','-ac',str(channels),'-ar',str(rate),'-f','f32le','pipe:1']),dtype='<f4').copy().reshape(-1,channels)
def compare(reference,other,rate=16000):
 rows=[]
 for start in [5,len(reference)/rate/2,len(reference)/rate-16]:
  k=int(start*rate);r=reference[k:k+10*rate].ravel();a=other[k:k+10*rate].ravel()
  corr=signal.correlate(a,r,method='fft');center=len(r)-1;window=corr[center-3200:center+3201];lag=int(np.argmax(window))-3200
  aa=a[max(0,lag):min(len(a),len(a)+lag)];rr=r[max(0,-lag):min(len(r),len(r)-lag)]
  coefficient=float(np.dot(aa,rr)/(np.linalg.norm(aa)*np.linalg.norm(rr)+1e-20))
  rows.append({'atSeconds':round(start,3),'lagMs':round(lag/rate*1000,4),'correlation':round(coefficient,6)})
 return rows
def retain(p,target):
 digest=sha(p);dest=target/(re.sub(r'[^a-z0-9-]','-',p.stem.lower()).strip('-')+'-'+digest[:12]+p.suffix.lower())
 if not dest.exists():os.link(p,dest)
 assert sha(dest)==digest
 info=probe(dest);stream=next(s for s in info['streams'] if s['codec_type']=='audio')
 return {'name':p.name,'sha256':digest,'path':str(dest),'url':'/@fs'+str(dest),'duration':float(info['format']['duration']),'codec':stream['codec_name'],'sampleRate':int(stream['sample_rate']),'channels':stream['channels'],'bits':stream.get('bits_per_sample'), 'retention':'hard link; no duplicated audio blocks'}
def onset_lane(p,label,canonical,offset=0):
 a=pcm(p).ravel();f,t,z=signal.stft(a,16000,nperseg=1024,noverlap=864,boundary='zeros');mag=np.log1p(100*np.abs(z));flux=np.maximum(0,np.diff(mag,axis=1,prepend=mag[:,:1])).mean(axis=0)
 flux=np.maximum(0,flux-signal.medfilt(flux,31));scale=max(float(np.percentile(flux,98)),1e-8);flux=flux/scale
 peaks,_=signal.find_peaks(flux,prominence=.18,distance=16)
 return {'id':'stem-'+label.lower().replace(' ','-'),'label':label+' · isolated WAV','events':[{'id':'stem-'+label.lower().replace(' ','-')+'-'+str(i),'time':round(float(t[k])+offset,4),'strength':round(min(1,float(flux[k])),4)} for i,k in enumerate(peaks)],'sourceSha256':sha(p),'canonicalAudioHash':canonical,'confidence':'isolated-stem onset candidates; listening approval pending'}
def main():
 manifest=[]
 for ident,folder,master in TAKES:
  target=ROOT/'.origin/song-media/hq'/ident;target.mkdir(parents=True,exist_ok=True)
  canonical=ROOT/'.origin/song-media/v0-candidates'/(ident+'.mp3');canonical_hash=sha(canonical)
  comment=probe(master)['format'].get('tags',{}).get('comment','');assert ('id='+ident) in comment,'Wrong native master take'
  native=retain(master,target);assets=[]
  for p in sorted(folder.iterdir()):
   if p.is_file() and p.suffix.lower() in ['.wav','.mp3','.m4a','.mp4']:assets.append(retain(p,target))
  stems=[a for a in assets if a['name'].endswith('.wav') and '(' in a['name']];assert len(stems)==12,'Incomplete WAV stem set'
  mixed=None
  for a in stems:
   data=pcm(Path(a['path']),48000,2)
   if mixed is None:mixed=np.zeros_like(data)
   assert len(data)==len(mixed),'Stem duration mismatch';mixed+=data
  peak=float(np.max(np.abs(mixed)));gain=min(1,.999/max(peak,1e-10));mixed*=gain
  reconstructed=target/'reconstructed-stems-24bit.wav'
  if not reconstructed.exists():
   temp=target/'reconstructed-stems-24bit.partial.wav'
   subprocess.run(['ffmpeg','-v','error','-y','-f','f32le','-ar','48000','-ac','2','-i','pipe:0','-c:a','pcm_s24le',str(temp)],input=mixed.astype('<f4').tobytes(),check=True);os.replace(temp,reconstructed)
  reference=pcm(canonical);master_pcm=pcm(master);origin=compare(reference,master_pcm)
  verified=abs(len(reference)-len(master_pcm))<=1 and all(abs(r['lagMs'])<=2 and r['correlation']>.98 for r in origin)
  rebuilt=compare(master_pcm,pcm(reconstructed))
  lanes=[]
  for stem in stems:
   name=re.search(r'\(([^)]+)\)',stem['name']).group(1)
   lanes.append(onset_lane(Path(stem['path']),name,canonical_hash))
  row={'id':ident,'canonicalAudioHash':canonical_hash,'master':native,'masterTakeIdVerified':True,'timeOriginVerified':verified,'alignment':origin,'assets':assets,'reconstruction':{'path':str(reconstructed),'url':'/@fs'+str(reconstructed),'sha256':sha(reconstructed),'gain':gain,'unscaledPeak':peak,'codec':'pcm_s24le','comparisonToNative':rebuilt,'status':'derived stem sum, not provider master'},'lanes':lanes,'wordTimingStatus':'isolated-vocal analysis pending; human anchor edits retained'}
  manifest.append(row)
  print(json.dumps({'id':ident,'nativeVerified':verified,'masterAlignment':origin,'reconstructionPeak':peak,'reconstructionGain':gain,'rebuiltComparison':rebuilt,'onsets':{l['label']:len(l['events']) for l in lanes}}),flush=True)
 out=ROOT/'src/canvas/song/lyricFocus/hqAudioAssets.json';temp=out.with_suffix('.swap');temp.write_text(json.dumps(manifest,indent=2)+'\n');os.replace(temp,out)
if __name__=='__main__':main()
