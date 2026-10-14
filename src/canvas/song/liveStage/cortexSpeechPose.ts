export type Point={x:number;y:number};
const lerp=(a:Point,b:Point,t:number)=>({x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t-20*Math.sin(Math.PI*t)});
export function cortexSpeechPose(frame:number,start:number,end:number,mouth:Point,read:Point,target:Point){
 const length=end-start,age=frame-start;
 if(length<9)return {...read,scale:1,opacity:1,phase:'read'};
 const entrance=Math.min(3,Math.floor(length*.2)),exit=Math.min(3,Math.floor(length*.2));
 if(age<entrance){const t=age/entrance;return {...lerp(mouth,read,t),scale:.3+.7*t,opacity:1,phase:'enter'};}
 if(age>=length-exit){const t=(age-(length-exit))/exit;return {...lerp(read,target,t),scale:1-.7*t,opacity:1-.8*t,phase:'join'};}
 return {...read,scale:1,opacity:1,phase:'read'};
}
