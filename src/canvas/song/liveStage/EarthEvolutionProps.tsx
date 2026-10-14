import type {SceneObject} from './scene.mjs';
const sites=[[.28,.29],[.51,.24],[.62,.51]];
const ease=(f:number,a:number,b:number)=>{const t=Math.max(0,Math.min(1,(f-a)/(b-a)));return t*t*(3-2*t);};
/** Persistent, geographically registered consequences; objects remain separately editable. */
export default function EarthEvolutionProps({object:o,frame}:{object:SceneObject;frame:number}){
 const t=ease(frame,o.animation?.startFrame??o.enterFrame,o.animation?.endFrame??o.enterFrame+24);
 const w=o.width,h=o.height;
 if(o.kind==='story-earth-electricity')return <g data-earth-consequence="electricity" opacity={t}>
  {sites.map(([x,y],i)=><g key={i} transform={`translate(${x*w} ${y*h})`} fill="#233c48" stroke="#ffd98c" strokeWidth="1.6">
   <path d="M-29 20V-12H-15V-29H0V-7H17V-20H29V20Z"/>
   {[-23,-7,10,23].map((x,j)=><path key={x} d={`M${x} ${j===1?-20:-5}v6 m0 6v6`} stroke="#fff0bd" strokeWidth="4"/>)}
   <path d="M-43 20V-17m-9 5h18m-16 9h14M-43-12Q-12-27 19-16" fill="none"/>
  </g>)}
 </g>;
 if(o.kind==='story-earth-transistors')return <g data-earth-consequence="transistors" stroke="#99f0ce" fill="none" strokeWidth="2.2">
  <path pathLength="1" strokeDasharray="1" strokeDashoffset={1-t} d={`M${sites[0][0]*w} ${sites[0][1]*h+22} Q${w*.37} ${h*.38} ${sites[1][0]*w} ${sites[1][1]*h+22} Q${w*.73} ${h*.32} ${sites[2][0]*w} ${sites[2][1]*h+22}`}/>
  {sites.map(([x,y],i)=><g opacity={t} key={i} transform={`translate(${x*w+33} ${y*h+27})`}><rect x="-10" y="-9" width="20" height="18" rx="2" fill="#153c39"/>{[-5,0,5].map(v=><path key={v} d={`M${v}-14v5m0 18v5M-15 ${v}h5m20 0h5`}/>)}<path d="M-4 4V-4H4V4Z"/></g>)}
 </g>;
 return <g data-earth-consequence="computers" opacity={t} stroke="#d5f4ef" strokeWidth="2">{sites.map(([x,y],i)=><g key={i} transform={`translate(${x*w-20} ${y*h+40})`}><rect width="40" height="27" rx="3" fill="#102c37"/><rect x="5" y="5" width="30" height="17" fill="#3c8a8f" stroke="none"/><path d="M20 27V34M8 34H32M10 11H29M10 16H23" fill="none"/><circle cx={10+(frame%24)} cy="20" r="1.5" fill="#e2f7cd" stroke="none"/></g>)}</g>;
}
