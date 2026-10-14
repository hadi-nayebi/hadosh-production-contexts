import {describe,it,expect} from "vitest";
import {verseStreamPositions as stream} from "./verseWordFlight";
import {roomStreamPositions} from "./verseWordFlight";
const words=[{id:"a",text:"Netscape",start:10},{id:"b",text:"faced",start:10.4},{id:"c",text:"Explorer",start:10.8}];
describe("continuous verse stream",()=>{
it("centers irregularly spaced sung words without smoothing drift",()=>{const irregular=words.map((w,i)=>({...w,start:[10,10.16,10.9][i]}));for(const w of irregular)expect(stream(irregular,w.start).find(x=>x.id===w.id)!.x).toBeCloseTo(50,8);});
it("highlights the spoken word and softly fades its neighbors",()=>{
  const s=roomStreamPositions(words,10.6,8);
  expect(s[1].highlight).toBe(1);
  expect(s[1].opacity).toBeGreaterThan(s[2].opacity);
  expect(s[0].highlight).toBeLessThan(s[1].highlight);
  expect(stream(words,10.39999)[1].highlight).toBeCloseTo(stream(words,10.40001)[1].highlight);
});
it("establishes the room first and centers each opening word at its vocal anchor without catch-up",()=>{
 const before=JSON.stringify(words), end=8.6;
 expect(roomStreamPositions(words,8.94,end)).toEqual([]);
 for(const w of words){
  const at=(t:number)=>roomStreamPositions(words,t,end).find(x=>x.id===w.id)!;
  expect(at(w.start).x).toBeCloseTo(50);
  expect(at(w.start).opacity).toBe(1);
  expect(at(w.start-.2).x).toBeGreaterThan(50);
  expect(at(w.start+.2).x).toBeLessThan(50);
  expect(at(w.start+.1).x).toBeLessThan(at(w.start-.1).x);
 }
 expect(JSON.stringify(words)).toBe(before);
});
it("crosses center on unchanged anchors and travels right to left",()=>{for(const w of words){expect(stream(words,w.start).find(x=>x.id===w.id)!.x).toBeCloseTo(50);expect(stream(words,w.start-.1).find(x=>x.id===w.id)!.x).toBeGreaterThan(50);expect(stream(words,w.start+.1).find(x=>x.id===w.id)!.x).toBeLessThan(50);}});
it("has continuous positions and velocity at each lyric anchor",()=>{for(const w of words){const eps=.00001, x=(t:number)=>stream(words,t)[0].x;expect(Math.abs(x(w.start-eps)-x(w.start+eps))).toBeLessThan(.01);const before=(x(w.start)-x(w.start-eps))/eps,after=(x(w.start+eps)-x(w.start))/eps;expect(Math.abs(before-after)).toBeLessThan(.1);}});
it("keeps ordered spacing with no independent word jumps",()=>{for(let t=9;t<12;t+=.02){const s=stream(words,t);expect(s[1].x-s[0].x).toBeGreaterThan(11);expect(s[2].x-s[1].x).toBeGreaterThan(11);}});
});
