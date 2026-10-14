import {describe,it,expect} from 'vitest';
import sources from './v0Performance.json';
import type {Annotation} from './audioAnnotation';
import {activeWord} from './WordVideoFrame';
import {wordTiming,adjustWord} from './wordTiming';
describe('word-only video source timing',()=>{
 for(const source of sources)it(`covers every vocal interval and leaves gaps empty: ${source.id}`,()=>{
  const a=source.annotation as Annotation,words=wordTiming(a).intervals;
  for(let i=0;i<words.length;i++){
   const w=words[i];expect(activeWord(a,(w.start+w.end)/2)?.id).toBe(w.id);
   if(i&&words[i-1].end<w.start)expect(activeWord(a,(words[i-1].end+w.start)/2)).toBeNull();
  }
  expect(activeWord(a,a.duration)).toBeNull();
  const w=words[0],next=adjustWord(a,w.id,'start',(w.start+w.end)/2);
  expect(activeWord(next,w.start)).toBeNull();
  expect(activeWord(a,w.start)?.id).toBe(w.id);
 });
});
