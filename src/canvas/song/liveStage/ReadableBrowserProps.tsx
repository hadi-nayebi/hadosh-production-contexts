import type {SceneObject} from './scene.mjs';
const ramp=(f:number,start:number,length=10)=>Math.max(0,Math.min(1,(f-start)/length));
/** v33: large, causal UI actions on the retained physical monitor. */
export default function ReadableBrowserProps({object:o,frame}:{object:SceneObject;frame:number}){
 const added=frame>=1476,inspected=frame>=1588,changed=frame>=1678;
 if(o.kind.endsWith('-shell'))return <g data-readable-browser="shell">
  <rect width="1280" height="720" fill="#e8deca"/><path d="M0 0H1280V110H0Z" fill="#23333d"/>
  <path d="M35 57H74M35 57L53 39M35 57L53 75" fill="none" stroke="#c5d4d4" strokeWidth="7"/>
  <rect x="110" y="22" width="695" height="67" rx="16" fill="#172c34"/><text x="137" y="69" fontSize="43" fill="#c5d4c7">workshop.local</text>
  <text x="50" y="197" fontSize="74" fontFamily="Georgia,serif" fill="#264d48">My workshop</text>
  {[0,1].map(i=><g key={i} transform={`translate(${50+i*605} 250)`}><rect width="575" height="410" rx="22" fill={changed?['#3e7373','#ce954c'][i]:['#a6b3a2','#a6b3a2'][i]}/><circle cx="100" cy="90" r="48" fill="#f1d991"/><path d="M0 385L125 168L260 307L384 131L575 385Z" fill="#234b49"/><path d="M0 377Q110 327 280 385T575 368" fill="none" stroke={changed?'#f6d9a0':'#73978c'} strokeWidth="24"/></g>)}
 </g>;
 if(o.kind.endsWith('-controls'))return <g data-readable-browser="controls">
  {added&&<g data-control-state="installed">
   <rect width="500" height="212" rx="22" fill="#203e47" stroke="#92bdac" strokeWidth="4"/>
   <path d="M60 27L99 44V84L60 112L21 84V44Z" fill="#94dec0"/><path d="M39 65L57 84L84 49" stroke="#183f42" strokeWidth="9" fill="none"/>
   <text x="125" y="76" fill="#f4e8cf" fontSize="66">Tracking</text>
   <text x="25" y="174" fill="#a6efd1" fontSize="61">Blocked</text>
   <rect x="315" y="119" width="154" height="69" rx="35" fill="#648e80"/>
   <circle cx={350+84*ramp(frame,1476)} cy="153" r="27" fill="#f5d387"/>
  </g>}
 </g>;
 return <g data-readable-browser="inspection">{inspected&&<g>
  <rect width="1280" height="292" fill="#182b38"/><path d="M0 0H1280" stroke="#8ac6b4" strokeWidth="6"/>
  <text x="36" y="82" fill="#efcf91" fontSize="66">Style editor</text>
  <text x="36" y="190" fill="#c5e5d1" fontSize="72" fontFamily="monospace">color:</text>
  {['#3e7373','#ce954c','#86ac93'].map((color,i)=><g key={color}><rect x={385+i*165} y="123" width="122" height="102" rx="12" fill={color}/>{changed&&i===0&&<path d="M404 168L428 195L487 139" fill="none" stroke="#fff3d1" strokeWidth="12"/>}</g>)}
  <path d="M934 205L934 125L995 174L965 177L953 205Z" fill="#f4e9cf" stroke="#152d36" strokeWidth="4" transform={`translate(${-480*ramp(frame,1666,12)} 0)`}/>
 </g>}</g>;
}
