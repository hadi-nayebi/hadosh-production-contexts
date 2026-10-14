"""Bounded, offline band-energy onset candidates, not a beat detector."""
import array,hashlib,json,math,statistics,subprocess,sys
from pathlib import Path
source=Path(sys.argv[1]); target=Path(sys.argv[2]); rate=16000; hop=320
bands={"low":("highpass=f=45,lowpass=f=220",.25),"mid":("highpass=f=300,lowpass=f=2200",.18),"high":("highpass=f=2500,lowpass=f=7000",.12)}
result={"schema":"canvas-audio-onset-map-v1","sourceSha256":hashlib.sha256(source.read_bytes()).hexdigest(),"method":"FFmpeg band filtering, 20ms RMS envelope, positive log-energy difference, local robust threshold and refractory interval. Not BPM/beat certainty; vocals and transients can trigger candidates.","sampleRate":rate,"hopMs":20,"confidence":"unverified onset candidates; manual override wins","bands":{}}
for name,(filters,refractory) in bands.items():
 pcm=subprocess.run(['ffmpeg','-v','error','-i',str(source),'-vn','-af',filters,'-ac','1','-ar',str(rate),'-f','s16le','pipe:1'],capture_output=True,check=True).stdout
 samples=array.array('h',pcm);energy=[math.sqrt(sum(v*v for v in samples[i:i+hop])/max(1,len(samples[i:i+hop])))/32768 for i in range(0,len(samples),hop)]
 flux=[0]+[max(0,math.log(energy[i]+1e-5)-math.log(energy[i-1]+1e-5)) for i in range(1,len(energy))]
 events=[];last=-1000
 for i in range(2,len(flux)-2):
  window=flux[max(0,i-50):i+51];med=statistics.median(window);mad=statistics.median(abs(v-med) for v in window);threshold=max(.12,med+3*mad)
  if energy[i]>.002 and flux[i]>threshold and flux[i]>=max(flux[i-2:i+3]) and (i-last)*.02>=refractory:
   events.append({'ms':i*20,'strength':round(min(1,flux[i]/max(.5,threshold*3)),3),'confidence':'candidate'});last=i
 result['bands'][name]={'filter':filters,'minimumSpacingMs':int(refractory*1000),'events':events,'energyPerSecond':[round(statistics.mean(energy[i:i+50]),4) for i in range(0,len(energy),50)]}
result['manualOverrides']=[]
target.write_text(json.dumps(result,separators=(',',':'))+'\n')
print({k:len(v['events']) for k,v in result['bands'].items()})
