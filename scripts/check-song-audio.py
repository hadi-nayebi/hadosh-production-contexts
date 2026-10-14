import array,subprocess,math,json,hashlib,sys
source,video=sys.argv[1:3]
def pcm(f):return array.array('f',subprocess.check_output(['ffmpeg','-v','error','-i',f,'-vn','-ac','1','-ar','8000','-f','f32le','pipe:1']))
a=pcm(source);b=pcm(video);n=min(len(a),len(b));report={'sourceSha256':hashlib.sha256(open(source,'rb').read()).hexdigest(),'videoSha256':hashlib.sha256(open(video,'rb').read()).hexdigest(),'sourceSamples':len(a),'outputSamples':len(b),'sampleRate':8000,'windows':[]}
for start in range(0,n,6*8000):
 x=a[start:min(start+6*8000,n)];y=b[start:min(start+6*8000,n)];aa=sum(v*v for v in x);bb=sum(v*v for v in y);ab=sum(u*v for u,v in zip(x,y));report['windows'].append({'start':start/8000,'duration':len(x)/8000,'correlation':round(ab/math.sqrt(aa*bb),6) if aa*bb else None,'gain':round(ab/aa,6) if aa else None,'outputRms':round(math.sqrt(bb/len(y)),6)})
print(json.dumps(report,indent=2))
