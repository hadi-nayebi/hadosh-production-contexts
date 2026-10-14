import {expect,it} from 'vitest';
import {CapsuleGeometry,SphereGeometry,Vector3} from 'three';
import {capsuleSurfacePose,CAPSULE_STARTS,CAPSULE_CONTACTS} from './capsuleSurfaceContact';
import current from './foundationSurfaceStudy';
import previous from './foundationSpaceStudy';
it('preserves the source and every shot boundary and camera in the surface repair',()=>{
 for(const key of ['source','words','composition','arrangement','objects','assets'] as const)expect(current[key]).toEqual(previous[key]);
 expect(current.scenes.map(s=>[s.start,s.end,s.spatialCamera,s.cutEvidence])).toEqual(previous.scenes.map(s=>[s.start,s.end,s.spatialCamera,s.cutEvidence]));
});
it('keeps all rendered capsule vertices outside Earth until the specified surface-contact frame',()=>{
 const body=new CapsuleGeometry(.095,.28,6,16),cap=new SphereGeometry(.096,16,10,0,Math.PI*2,0,Math.PI/2);cap.translate(0,.14,0);
 for(let i=0;i<3;i++)for(const size of [.7,1,1.3])for(let f=CAPSULE_STARTS[i];f<=CAPSULE_CONTACTS[i];f++){
  const pose=capsuleSurfacePose(f,i,size);let nearest=Infinity;
  for(const geometry of [body,cap])for(let v=0;v<geometry.attributes.position.count;v++){
   const p=new Vector3().fromBufferAttribute(geometry.attributes.position,v).multiplyScalar(pose.scale).applyQuaternion(pose.orientation).add(pose.center);nearest=Math.min(nearest,p.length());
  }
  expect(nearest,`capsule${i} frame${f} size${size}`).toBeGreaterThanOrEqual(1-1e-7);
  if(f<CAPSULE_CONTACTS[i])expect(pose.gap).toBeGreaterThan(0);
  else {expect(pose.gap).toBeCloseTo(0,12);expect(nearest).toBeCloseTo(1,6);}
 }
 body.dispose();cap.dispose();
});
it('anchors the leading surface while the capsule disappears, rather than floating away',()=>{
 for(let i=0;i<3;i++)for(let f=CAPSULE_CONTACTS[i];f<=CAPSULE_CONTACTS[i]+12;f++)expect(capsuleSurfacePose(f,i).tip.length()).toBeCloseTo(1,12);
});
