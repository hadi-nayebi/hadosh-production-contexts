import {expect,it} from 'vitest';
import previous from './foundationDepthStudy';
import project from './foundationSpaceStudy';
import {spaceState} from './SpaceFoundationWorld';
import {validateScene} from './scene.mjs';
it('preserves the recording, words, props and every cut while changing four space views',()=>{
 for(const key of ['source','words','objects','assets','arrangement','composition'] as const)expect(project[key]).toEqual(previous[key]);
 expect(project.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
 expect(project.scenes.slice(0,4)).toEqual(previous.scenes.slice(0,4));expect(project.scenes.slice(8)).toEqual(previous.scenes.slice(8));
 expect(new Set(project.scenes.slice(4,8).map(s=>JSON.stringify(s.spatialCamera))).size).toBe(4);
 expect(validateScene(JSON.parse(JSON.stringify(project)))).toEqual(project);
});
it('keeps travel and rotation continuous across cuts and response after assigned contact',()=>{
 for(const f of [444,545,623]){
  expect(Math.abs(spaceState(f).travel-spaceState(f-1).travel)).toBeLessThan(.003);
  expect(Math.abs(spaceState(f).rotation-spaceState(f-1).rotation)).toBeLessThan(.003);
 }
 for(const [i,f] of [511,600,690].entries()){
  expect(spaceState(f-1).contacts[i]).toBe(0);expect(spaceState(f).contacts[i]).toBe(0);expect(spaceState(f+1).contacts[i]).toBeGreaterThan(0);
 }
});
