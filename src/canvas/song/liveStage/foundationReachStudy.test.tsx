import {it,expect} from 'vitest';
import {Vector3} from 'three';
import previous from './foundationSpatialStudy';
import project from './foundationReachStudy';
import {reachableToasterState,REACH_SEGMENT,REACH_SHOULDER} from './reachableToasterState';
import {elbowFor,add,spatialToasterState} from './spatialToasterState';
import {validateScene} from './scene.mjs';
const distance=(a:number[],b:number[])=>new Vector3(...a).distanceTo(new Vector3(...b));
it('preserves the complete source/cut clocks and previous spatial version',()=>{
 for(const key of ['source','words','arrangement','assets','composition'] as const)expect(project[key]).toEqual(previous[key]);
 expect(project.scenes.map(s=>[s.start,s.end,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.cutEvidence]));
 expect(previous.objects.find(o=>o.spatial?.role==='bread')!.spatial!.position).toEqual([0,0,0]);
 expect(validateScene(JSON.parse(JSON.stringify(project)))).toEqual(project);
 expect(project.scenes.slice(0,56)).toEqual(previous.scenes.slice(0,56));expect(project.scenes.slice(64)).toEqual(previous.scenes.slice(64));
});
it('keeps every default pose reachable with shorter fixed arm lengths and no wrist teleport',()=>{
 for(let f=5000;f<5756;f++){
  const s=reachableToasterState(f),elbow=elbowFor(REACH_SHOULDER,s.wrist,REACH_SEGMENT,[1,-.4,.1]);
  expect(distance(REACH_SHOULDER,s.wrist),`reach at${f}`).toBeLessThan(REACH_SEGMENT*2);
  expect(distance(REACH_SHOULDER,elbow)).toBeCloseTo(REACH_SEGMENT,6);expect(distance(elbow,s.wrist)).toBeCloseTo(REACH_SEGMENT,6);
  if(f>5000)expect(distance(s.wrist,reachableToasterState(f-1).wrist),`jump at${f}`).toBeLessThan(.08);
 }
});
it('keeps grip registered to the bread and the power plug at the source action frames',()=>{
 for(let f=5069;f<=5136;f++)expect(reachableToasterState(f).wrist).toEqual(add(reachableToasterState(f).bread,[.13,.08,.315]));
 for(let f=5169;f<=5254;f++)expect(reachableToasterState(f).wrist).toEqual(add(reachableToasterState(f).plug,[0,0,.075]));
 expect(reachableToasterState(5253).powered).toBe(false);expect(reachableToasterState(5254).powered).toBe(true);
 for(const f of [5136,5254,5306,5576,5711])for(const key of ['powered','inserted','dial','model','toastReady'] as const)expect(reachableToasterState(f)[key]).toEqual(spatialToasterState(f)[key]);
});
it('maintains grip after editable bread offsets, rather than moving the bread alone',()=>{
 const s=reachableToasterState(5118,{bread:[.02,0,.3],plug:[0,0,0],dial:[0,0,.3]});
 expect(s.wrist).toEqual(add(s.bread,[.15,.08,.315]));
});
