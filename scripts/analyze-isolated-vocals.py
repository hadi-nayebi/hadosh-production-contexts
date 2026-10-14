"""Offline isolated-vocal word suggestions; never overwrite reviewed anchors."""
from pathlib import Path
import difflib,hashlib,json,os,re
from faster_whisper import WhisperModel
ROOT=Path(__file__).resolve().parents[1]
sources=json.loads((ROOT/'src/canvas/song/lyricFocus/v0Performance.json').read_text())
model=WhisperModel('small.en',device='cpu',compute_type='int8',cpu_threads=6,local_files_only=True)
results=[]
for duration,ident,prefix in [('3-51','0c977d97-2f49-42c9-bc89-fab28a565175','3-51-v0'),('3-58','91fa4d7d-c411-4272-abf3-7c184bbd3875','3-58-v0')]:
 path=Path('/home/hadinayebi/Downloads')/('v0-'+duration)/(prefix+' (Vocals).wav')
 digest=hashlib.sha256(path.read_bytes()).hexdigest()
 segments,info=model.transcribe(str(path),language='en',beam_size=5,word_timestamps=True,vad_filter=True,temperature=0)
 words=[];texts=[]
 for segment in segments:
  texts.append({'start':segment.start,'end':segment.end,'text':segment.text})
  words.extend({'start':w.start,'end':w.end,'text':w.word.strip(),'probability':w.probability} for w in segment.words or [])
  print(json.dumps({'take':duration,'throughSeconds':round(segment.end,2),'words':len(words)}),flush=True)
 source=next(s for s in sources if s['id']==ident);expected=[i for i in source['annotation']['items'] if i['kind']=='lyric']
 normalize=lambda text:re.sub(r'[^a-z0-9]','',text.lower())
 matcher=difflib.SequenceMatcher(None,[normalize(i['text']) for i in expected],[normalize(w['text']) for w in words],autojunk=False)
 suggestions=[]
 for e,o,n in matcher.get_matching_blocks():
  for k in range(n):
   i,w=expected[e+k],words[o+k]
   suggestions.append({'id':i['id'],'text':i['text'],'start':round(w['start'],4),'end':round(w['end'],4),'probability':round(w['probability'],4),'oldObservedStart':i.get('observedStart'),'oldObservedEnd':i.get('observedEnd'),'status':'isolated-vocal estimate; current human anchors authoritative'})
 result={'id':ident,'canonicalAudioHash':source['annotation']['audioHash'],'stemSha256':digest,'model':'small.en CPU int8','method':'Independent ASR on isolated native WAV vocals; no lyric prompt. Ordered exact-token matches mapped to stable lyric IDs. Unmatched tokens remain unresolved.','duration':info.duration,'suggestions':suggestions,'recognizedWords':words,'segments':texts,'expectedWords':len(expected),'matchedWords':len(suggestions),'unmatchedWords':len(expected)-len(suggestions)}
 target=ROOT/'.origin/song-media/hq'/ident/'vocal-analysis.json';target.parent.mkdir(parents=True,exist_ok=True);target.write_text(json.dumps(result,indent=2)+'\n');results.append(result)
 print(json.dumps({'take':duration,'complete':True,'matched':len(suggestions),'expected':len(expected)}),flush=True)
target=ROOT/'src/canvas/song/lyricFocus/hqWordSuggestions.json';temp=target.with_suffix('.swap');temp.write_text(json.dumps(results,indent=2)+'\n');os.replace(temp,target)
