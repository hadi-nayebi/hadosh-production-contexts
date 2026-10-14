import {Quaternion,Vector3} from 'three';
export const CAPSULE_STARTS=[444,545,623] as const;
export const CAPSULE_CONTACTS=[511,600,690] as const;
export const CAPSULE_RADIUS=.095;
export const CAPSULE_HALF_SEGMENT=.14;
const smooth=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
// Sphere radius1. The inward capsule tip, not its center, reaches this surface.
export function capsuleSurfacePose(frame:number,index:number,size=1){
 const normal=new Vector3(.9,[.35,-.35,.7][index],.3).normalize();
 const progress=smooth((frame-CAPSULE_STARTS[index])/(CAPSULE_CONTACTS[index]-CAPSULE_STARTS[index]));
 const scale=size*(1-smooth((frame-CAPSULE_CONTACTS[index])/12));
 const radius=1+(CAPSULE_HALF_SEGMENT+CAPSULE_RADIUS)*scale+(1-progress)*1.7;
 const center=normal.clone().multiplyScalar(radius);
 const orientation=new Quaternion().setFromUnitVectors(new Vector3(0,1,0),normal);
 const tip=center.clone().addScaledVector(normal,-(CAPSULE_HALF_SEGMENT+CAPSULE_RADIUS)*scale);
 return {center,orientation,scale,tip,gap:tip.length()-1};
}
