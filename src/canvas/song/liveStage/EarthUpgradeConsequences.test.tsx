import {expect,it} from 'vitest';
import {Group} from 'three';
import {earthUpgradeState,buildEarthUpgrades} from './EarthUpgradeConsequences';
import current from './foundationUpgradeStudy';
import previous from './foundationSurfaceStudy';
it('preserves every source/cut/camera and changes no retained visual geometry before the consequence stage',()=>{
 for(const key of ['source','words','assets','composition','arrangement'] as const)expect(current[key]).toEqual(previous[key]);
 expect(current.scenes.map(s=>[s.start,s.end,s.spatialCamera,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.spatialCamera,s.cutEvidence]));
});
it('adds lights then connections then operating windows, after each contact',()=>{
 expect(earthUpgradeState(511,current.objects)).toEqual([0,0,0]);
 expect(earthUpgradeState(600,current.objects)).toEqual([1,0,0]);
 expect(earthUpgradeState(690,current.objects)).toEqual([1,1,0]);
 expect(earthUpgradeState(710,current.objects)).toEqual([1,1,1]);
 const counts=[535,620,710].map(frame=>{const earth=new Group();const built=buildEarthUpgrades(earth,frame,current.objects);let meshes=0;earth.traverse(o=>{if(o.type==='Mesh')meshes++;});built.dispose();expect(earth.children.length).toBe(0);return meshes;});
 expect(counts[1]).toBeGreaterThan(counts[0]);expect(counts[2]).toBeGreaterThan(counts[1]);
});
it('honors hidden capabilities and prevents an edited early entry from preceding contact',()=>{
 const objects=structuredClone(current.objects);const network=objects.find(o=>o.id==='v13-capability-switch')!;network.enterFrame=400;
 expect(earthUpgradeState(599,objects)[1]).toBe(0);network.hidden=true;expect(earthUpgradeState(710,objects)[1]).toBe(0);
});
