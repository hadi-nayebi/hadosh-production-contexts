import type {Scene,Setting} from './scene.mjs';
import ImageLayer from './ImageLayer';
import OpeningProps from './OpeningProps';
import {cameraAt} from './camera.mjs';
import {imagePose} from './views.mjs';
import {planeMatrix} from './textPlane.mjs';

// Retained, editable story components perform on a registered physical screen.
// Screen geometry also drives editor selection via the editor plane projection.
export default function RegisteredSceneStage({project,setting,frame,assetBase=''}:{project:Scene;setting:Setting;frame:number;assetBase?:string}){
 const camera=cameraAt(setting,frame);
 const objects=project.objects.filter(o=>setting.objectIds.includes(o.id)&&o.contentPlane&&!o.hidden);
 const plane=objects.find(o=>o.contentPlane)?.contentPlane;
 return <svg viewBox="0 0 1280 720" role="img" aria-label="Character and physical screen" style={{width:'100%',height:'100%',display:'block',background:'#142a2d'}}>
  <g transform={`translate(${camera.tx} ${camera.ty}) scale(${camera.zoom})`}>
   <ImageLayer owner={setting} project={project} frame={frame} width={1280} height={720} assetBase={assetBase}/>
   {plane&&<foreignObject x={0} y={0} width={1280} height={720} style={{overflow:'visible',pointerEvents:'none'}}>
    <div style={{width:plane.width,height:plane.height,transformOrigin:'0 0',transform:planeMatrix(plane)}}>
     <svg width={plane.width} height={plane.height} style={{overflow:'hidden'}}>
      {objects.map(o=>{const n=imagePose(project,o.id,frame,false);if(frame<n.enter||frame>=n.exit)return null;return <g key={o.id} data-scene-object={o.id} transform={`translate(${n.x} ${n.y}) scale(${n.scale??1})`}><OpeningProps object={o} frame={frame}/></g>;})}
     </svg>
    </div>
   </foreignObject>}
  </g>
 </svg>;
}
