import {expect,it} from 'vitest';
import {renderToStaticMarkup} from 'react-dom/server';
import previous from './foundationUpgradeStudy';
import recovered from './foundationCortexRecovery';
import retained from './cortex-recovery-source-v9-r3.json';
import SceneArtwork from './SceneArtwork';
import {validateScene} from './scene.mjs';
it('preserves the recording, words, measured cuts and unrelated chapters',()=>{
 for(const k of ['source','words','phrases','arrangement','composition'] as const)expect(recovered[k]).toEqual(previous[k]);
 expect(recovered.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
 expect(recovered.scenes.filter(s=>s.end<=3240||s.start>=5000)).toEqual(previous.scenes.filter(s=>s.end<=3240||s.start>=5000));
 expect(validateScene(JSON.parse(JSON.stringify(recovered)))).toEqual(recovered);
});
it('restores saved cortex edits and keeps growth persistent through the last wide shot',()=>{
 const saved=retained.objects.filter(o=>o.id==='owned-cortex'||o.parentId==='owned-cortex');
 expect(saved.length).toBeGreaterThan(80);
 for(const o of saved){
  const r=recovered.objects.find(x=>x.id===`v27-recovered:${o.id}`)!;
  expect(r).toBeDefined();
  expect([r.x,r.y,r.width,r.height,r.enterFrame]).toEqual([o.x,o.y,o.width,o.height,o.enterFrame]);
  if(o.exitFrame===4980)expect(r.exitFrame).toBe(5000);
 }
 for(const frame of [3370,3450,4870,4999]){
  const html=renderToStaticMarkup(<SceneArtwork project={recovered} frame={frame}/>);
  expect(html).toContain('v27-recovered:headset-seated-character');
  expect(html).toContain('data-harness-component="node"');
  expect(html).not.toMatch(/NaN|undefined/);
 }
});
it('keeps independently editable registered character assets and valid parent links',()=>{
 const ids=new Set(recovered.objects.map(o=>o.id));
 for(const o of recovered.objects)if(o.parentId)expect(ids.has(o.parentId)).toBe(true);
 for(const s of recovered.scenes)for(const id of s.objectIds)expect(ids.has(id)).toBe(true);
 for(const s of recovered.scenes.filter(s=>s.start>=3240&&s.end<=5000)){
  const html=renderToStaticMarkup(<SceneArtwork project={recovered} frame={Math.floor((s.start+s.end)/2)}/>);
  expect(html).not.toMatch(/NaN|undefined/);
  expect(s.description).toContain('unverified');
 }
});
