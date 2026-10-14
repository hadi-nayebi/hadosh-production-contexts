import {describe,it,expect} from 'vitest';
import performances from './v0Performance.json';
import type {Annotation} from './audioAnnotation';
import {adjustWord,wordTiming,undoWordTiming} from './wordTiming';
import {buildWordPreview,previewKeys,previewHistory,previewStale} from './wordPreviewStore';
import {activeWord} from './WordVideoFrame';
function store(){const map=new Map<string,string>();return {getItem:(k:string)=>map.get(k)??null,setItem:(k:string,v:string)=>{map.set(k,v);}};}
describe('saved editor to versioned preview',()=>{
 for(const p of performances){const source=p.annotation as Annotation;
  it(`saved correction, unsaved isolation, undo and history: ${p.id}`,async()=>{
   const s=store(),keys=previewKeys(source,true),w=wordTiming(source).intervals[0];
   const first=await buildWordPreview(s,source,true,async()=>{});
   const draft=adjustWord(source,w.id,'start',(w.start+w.end)/2);
   expect(previewStale(first.version.annotation,source)).toBe(false);
   expect(activeWord(first.version.annotation,w.start)?.id).toBe(w.id);
   s.setItem(keys.saved,JSON.stringify(draft));
   expect(previewStale(first.version.annotation,draft)).toBe(true);
   const second=await buildWordPreview(s,source,true,async()=>{});
   expect(activeWord(second.version.annotation,w.start)).toBeNull();
   expect(second.stale).toBe(false);
   s.setItem(keys.saved,JSON.stringify(undoWordTiming(draft)));
   expect(previewStale(second.version.annotation,undoWordTiming(draft))).toBe(true);
   const third=await buildWordPreview(s,source,true,async()=>{});
   expect(activeWord(third.version.annotation,w.start)?.id).toBe(w.id);
   expect(previewHistory(s,source,keys.history)).toHaveLength(3);
   expect(first.version.annotation).toEqual(source);
  });
  it(`concurrent save and invalid recovery: ${p.id}`,async()=>{
   const s=store(),keys=previewKeys(source,true),w=wordTiming(source).intervals[0];
   const changed=adjustWord(source,w.id,'start',(w.start+w.end)/2);
   const result=await buildWordPreview(s,source,true,async()=>s.setItem(keys.saved,JSON.stringify(changed)));
   expect(result.stale).toBe(true);expect(result.version.annotation).toEqual(source);
   const history=s.getItem(keys.history);s.setItem(keys.saved,'{"invalid":true}');
   await expect(buildWordPreview(s,source,true,async()=>{})).rejects.toThrow();
   expect(s.getItem(keys.history)).toBe(history);
  });
 }
 it('rejects history from another source',async()=>{
  const s=store(),a=performances[0].annotation as Annotation,b=performances[1].annotation as Annotation;
  await buildWordPreview(s,a,true,async()=>{});
  s.setItem(previewKeys(b,true).history,s.getItem(previewKeys(a,true).history)!);
  await expect(buildWordPreview(s,b,true,async()=>{})).rejects.toThrow();
 });
});
