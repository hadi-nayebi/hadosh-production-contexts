import {add,blend,spatialToasterState,type Vec3} from './spatialToasterState';
export const REACH_SEGMENT=.36;
export const REACH_SHOULDER:Vec3=[.25,1.55,.62];
const ease=(f:number,a:number,b:number)=>{const t=Math.max(0,Math.min(1,(f-a)/(b-a)));return t*t*(3-2*t)};
export function reachableToasterState(frame:number,offsets:{bread:Vec3;plug:Vec3;dial:Vec3}={bread:[0,0,.3],plug:[0,0,0],dial:[0,0,.3]}) {
 const base=spatialToasterState(frame);
 const rest:Vec3=[.3,1.08,.56];
 let bread:Vec3=[-.2,1.18,.15];
 if(frame>=5069&&frame<5122)bread=blend(bread,[0,1.69,0],ease(frame,5069,5122));
 else if(frame>=5122&&frame<5136)bread=blend([0,1.69,0],[0,1.48,0],ease(frame,5122,5136));
 else if(frame>=5136)bread=[0,1.48,0];
 if(frame>=5680)bread=blend([0,1.48,0],[0,1.69,0],ease(frame,5680,5711));
 if(frame>5711)bread=blend([0,1.69,0],[-.12,1.68,.1],ease(frame,5711,5755));
 const plug=blend([.66,1.2,.65],[.66,1.2,.33],ease(frame,5169,5253));
 const breadGrip=add(add(bread,offsets.bread),[.13,.08,.015]);
 const plugGrip=add(add(plug,offsets.plug),[0,0,.075]);
 const dialGrip=add([.23,1.26,.245],offsets.dial);
 let wrist=rest;
 if(frame>=5034&&frame<5069)wrist=blend(rest,breadGrip,ease(frame,5034,5069));
 if(frame>=5069&&frame<5150)wrist=blend(breadGrip,rest,ease(frame,5136,5150));
 if(frame>=5150&&frame<5169)wrist=blend(rest,plugGrip,ease(frame,5150,5169));
 if(frame>=5169&&frame<5255)wrist=plugGrip;
 if(frame>=5255&&frame<5307)wrist=blend(plugGrip,dialGrip,ease(frame,5255,5291));
 if(frame>=5307&&frame<5328)wrist=blend(dialGrip,rest,ease(frame,5306,5328));
 if(frame>=5658&&frame<5680)wrist=blend(rest,breadGrip,ease(frame,5658,5680));
 if(frame>=5680)wrist=breadGrip;
 return {...base,bread,plug,wrist};
}
