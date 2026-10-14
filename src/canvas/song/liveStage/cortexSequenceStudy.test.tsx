import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import previous from './foundationCortexRecovery';
import p from './cortexSequenceStudy';
import SceneArtwork from './SceneArtwork';
import {validateScene} from './scene.mjs';
it('preserves the complete recording, lyric wording, cut evidence and outside chapters',()=>{
 for(const key of ['source','words','phrases','arrangement','composition'] as const)expect(p[key]).toEqual(previous[key]);
 expect(p.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
 expect(p.scenes.filter(s=>s.end<=3240||s.start>=5000)).toEqual(previous.scenes.filter(s=>s.end<=3240||s.start>=5000));
 expect(validateScene(JSON.parse(JSON.stringify(p)))).toEqual(p);
});
it('carries the same accumulated cortex across viewpoints instead of restarting growth',()=>{
 for(const side of p.objects.filter(o=>o.id.startsWith('v28-side:v27-recovered:'))){
  const original=p.objects.find(o=>o.id===side.id.replace('v28-side:',''))!;
  expect([side.enterFrame,side.exitFrame,side.text]).toEqual([original.enterFrame,original.exitFrame,original.text]);
 }
 const a=p.objects.find(o=>o.id==='v27-recovered:s08-model-a')!;
 const b=p.objects.find(o=>o.id==='v27-recovered:s08-model-b')!;
 expect(a.exitFrame).toBe(b.enterFrame);
 const graph=p.objects.filter(o=>o.id.startsWith('v27-recovered:neural-'));
 expect(graph.length).toBeGreaterThan(80);
 expect(graph.every(o=>o.exitFrame!>b.enterFrame!)).toBe(true);
});
it('keeps cards recoverable but hidden, and renders every shot boundary without invalid geometry',()=>{
 for(const id of ['s08-model-card','s08-files'])expect(p.objects.find(o=>o.id===`v27-recovered:${id}`)?.hidden).toBe(true);
 for(const shot of p.scenes.filter(s=>s.start>=3240&&s.end<=5000)){
  for(const frame of [shot.start,Math.floor((shot.start+shot.end)/2),shot.end-1]){
   const html=renderToStaticMarkup(<SceneArtwork project={p} frame={frame}/>);
   expect(html).not.toMatch(/NaN|undefined/);
   expect(html).not.toContain('data-scene-object="v27-recovered:s08-files"');
  }
 }
});
it('places comparisons and plans on the monitor and orders approval before its result',()=>{
 const shots=p.scenes.filter(s=>s.start>=3240&&s.end<=5000);
 for(const i of [5,10,11,14]){
  expect(shots[i].views?.[0].assetId).toBe('ai-monitor-clean-v1');
  const rows=p.objects.filter(o=>shots[i].objectIds.includes(o.id)&&o.id.startsWith('v28-screen-')&&o.kind==='text');
  expect(rows.length).toBeGreaterThan(3);
  expect(rows.every(o=>!!o.textPlane)).toBe(true);
 }
 const hand=p.objects.find(o=>o.id==='v27-recovered:s04-forearm')!;
 const result=p.objects.find(o=>o.id==='v27-recovered:s04-saved')!;
 expect(hand.animation!.endFrame).toBeLessThan(result.enterFrame!);
});
