import {useLayoutEffect,useRef,useState} from 'react';
import * as T from 'three';
import {buildSpatialWorld} from './SpatialToasterWorld';
import FullSongProps from './FullSongProps';
import type {Scene,Setting} from './scene.mjs';

// Same editable world and clock as v21; use a depth buffer instead of triangle painter order.
export default function DepthToasterWorld({project,frame,setting,onUnavailable}:{project:Scene;frame:number;setting:Setting;onUnavailable?:()=>void}) {
 const host=useRef<HTMLDivElement>(null), renderer=useRef<T.WebGLRenderer|null>(null);
 const [failure,setFailure]=useState<string|null>(null);
 useLayoutEffect(()=>{
  try {renderer.current=new T.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});renderer.current.setSize(1280,720);renderer.current.setClearColor('#293d44',1);renderer.current.domElement.style.cssText='width:100%;height:100%';host.current?.append(renderer.current.domElement);}
  catch {onUnavailable?.();setFailure('Depth preview unavailable in this browser. Use the rendered diagnostic; this view is not a verified preview.');}
  return()=>{renderer.current?.dispose();renderer.current?.forceContextLoss();renderer.current=null;host.current?.replaceChildren();};
 },[]);
 useLayoutEffect(()=>{
  if(!renderer.current)return;
  const objects=project.objects.filter(o=>setting.objectIds.includes(o.id)&&o.spatial&&!o.hidden);
  const world=buildSpatialWorld(objects,frame), c=setting.spatialCamera!;
  const camera=new T.PerspectiveCamera(c.fov,1280/720,.02,100);camera.position.set(...c.position);camera.lookAt(...c.target);
  const extra:Array<{geometry:T.PlaneGeometry;material:T.MeshBasicMaterial;texture:T.CanvasTexture}>=[];
  for(const label of world.labels){
   const canvas=document.createElement('canvas');canvas.width=1000;canvas.height=640;
   const ctx=canvas.getContext('2d')!;ctx.fillStyle='#eee4c9';ctx.fillRect(0,0,1000,640);ctx.fillStyle='#243d40';
   label.lines.forEach((line,i)=>{ctx.font=`${i===0?75:58}px sans-serif`;ctx.fillText(line,55,105+i*120);});
   const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
   const material=new T.MeshBasicMaterial({map:texture}),geometry=new T.PlaneGeometry(...label.size);
   const plane=new T.Mesh(geometry,material);plane.position.set(...label.at);if(label.floor)plane.rotation.x=-Math.PI/2;
   label.group.add(plane);extra.push({geometry,material,texture});
  }
  renderer.current.render(world.scene,camera);
  extra.forEach(x=>{x.geometry.dispose();x.material.dispose();x.texture.dispose();});world.dispose();
 },[project,frame,setting]);
 return <div style={{position:'relative',width:'100%',height:'100%'}}>
  <div ref={host} style={{position:'absolute',inset:0}}/>
  {failure&&<span role="status">Loading editable scene preview…</span>}
  <svg viewBox="0 0 1280 720" style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none'}}>
   {project.objects.filter(o=>setting.objectIds.includes(o.id)&&o.kind==='lyric-block'&&!o.hidden&&frame>=o.enterFrame&&frame<o.exitFrame).map(o=><g key={o.id} transform={`translate(${o.x} ${o.y})`}><FullSongProps object={o} frame={frame}/></g>)}
  </svg>
 </div>;
}
