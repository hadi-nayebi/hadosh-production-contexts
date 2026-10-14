import type {SceneObject} from './scene.mjs';
/** A growing, usable-looking browser surface, performed on the physical monitor. */
export default function BrowserCustomizationProps({object:o,frame}:{object:SceneObject;frame:number}){
 const added=frame>=1476,inspected=frame>=1588,changed=frame>=1678;
 const w=o.width,h=o.height;
 if(o.kind==='story-browser-customization-shell')return <g data-browser-customization="shell">
  <rect width={w} height={h} fill="#e7e4da"/><path d={`M0 0H${w}V112H0Z`} fill="#23333d"/>
  <path d="M28 30H56M28 30L39 19M28 30L39 41" stroke="#c5d4d4" strokeWidth="5" fill="none"/>
  <rect x="87" y="12" width="254" height="38" rx="10" fill="#475763"/><text x="109" y="39" fill="#f5e7cf" fontSize="25">Firefox · Workshop</text>
  <rect x="88" y="64" width={w-230} height="32" rx="12" fill="#172c34"/><text x="110" y="88" fill="#9ec9bd" fontSize="22">my-workshop.local</text>
  <g transform="translate(48 154)"><text fontSize="57" fill="#264d48" fontFamily="Georgia,serif">Make room for your ideas.</text><path d={`M0 24H${w-98}`} stroke="#bb9c6a" strokeWidth="3"/>
   {[0,1,2].map(i=><g key={i} transform={`translate(${i*(w-106)/3} 57)`}><rect width={(w-160)/3} height="220" rx="12" fill={changed?['#355c62','#d8ab65','#6e9080'][i]:['#75958e','#d8b888','#b1c2ad'][i]}/><path d={`M0 205L75 90L140 162L200 70L${(w-160)/3} 205Z`} fill="#163c40" opacity=".7"/><circle cx="60" cy="47" r="24" fill="#f5dc9f"/><path d="M8 197Q80 160 160 192T315 179" stroke="#a6cfc0" strokeWidth="10" fill="none"/></g>)}
   <text y="335" fontSize="29" fill="#365753">A page you can change.</text>
  </g>
 </g>;
 if(o.kind==='story-browser-customization-controls')return <g data-browser-customization="controls" transform="translate(-930 0)">
  {added&&<g data-control-state="installed"><rect x="1014" y="16" width="48" height="36" rx="8" fill="#e9c16c"/><path d="M1038 23V45M1027 34H1049" stroke="#24444b" strokeWidth="4"/><path d="M1100 16L1120 25V40L1100 54L1080 40V25Z" fill="#87d5b6"/><path d="M1089 34L1098 42L1111 27" stroke="#20474a" strokeWidth="4" fill="none"/>
  <rect x="930" y="120" width="286" height="128" rx="12" fill="#23444c"/><text x="952" y="156" fontSize="26" fill="#f5e9d2">Your controls</text><text x="952" y="192" fontSize="23" fill="#9ae6c5">Tracking blocked</text><path d="M952 220H1178" stroke="#94bdb4" strokeWidth="4"/><circle cx={changed?1150:1030} cy="220" r="9" fill="#edc57a"/></g>}
 </g>;
 return <g data-browser-customization="inspection">{inspected&&<g><rect x="0" y="480" width={w} height="240" fill="#182b38"/><path d={`M0 480H${w}`} stroke="#80c7b5" strokeWidth="4"/><g fontFamily="monospace" fontSize="25" fill="#b3ddcc"><text x="35" y="523">Inspector</text><text x="35" y="570">{changed?'theme: your-colors;':'theme: default;'}</text><text x="35" y="612">tracking: blocked;</text><text x="35" y="654">controls: yours;</text></g><text x="825" y="540" fill="#ebc67e" fontSize="28">HTML   CSS   JS</text><path d="M827 567H1193M827 607H1155M827 647H1173" stroke={changed?'#8cddb7':'#587e88'} strokeWidth="9"/></g>}</g>;
}
