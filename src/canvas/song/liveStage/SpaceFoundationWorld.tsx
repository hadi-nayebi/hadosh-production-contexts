import {buildEarthUpgrades} from "./EarthUpgradeConsequences";
import {capsuleSurfacePose} from "./capsuleSurfaceContact";
import {useLayoutEffect,useRef,useState} from 'react';
import * as T from 'three';
import land from './earth-land.json';
import type {Scene,Setting} from './scene.mjs';
const smooth=(v:number)=>{const t=Math.max(0,Math.min(1,v));return t*t*(3-2*t);};
export function spaceState(frame:number){return {travel:(frame-377)/347*.7,rotation:(frame-377)/347*.9,phase:frame<444?0:frame<545?1:frame<623?2:3,contacts:[511,600,690].map(f=>smooth((frame-f)/25))};}
export default function SpaceFoundationWorld({project,frame,setting,onUnavailable}:{project:Scene;frame:number;setting:Setting;onUnavailable?:()=>void}){
 const host=useRef<HTMLDivElement>(null),renderer=useRef<T.WebGLRenderer|null>(null);const [failed,setFailed]=useState(false);
 useLayoutEffect(()=>{try{const r=new T.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});r.setSize(1280,720);r.setClearColor('#040d1b');r.domElement.style.cssText='width:100%;height:100%';renderer.current=r;host.current?.append(r.domElement);}catch{setFailed(true);onUnavailable?.();}return()=>{renderer.current?.dispose();renderer.current?.forceContextLoss();renderer.current=null;host.current?.replaceChildren();};},[]);
 useLayoutEffect(()=>{
  const r=renderer.current;if(!r)return;
  const scene=new T.Scene(),s=spaceState(frame),c=setting.spatialCamera!;
  const camera=new T.PerspectiveCamera(c.fov,1280/720,.01,100);camera.position.set(c.position[0]+s.travel,c.position[1],c.position[2]);camera.lookAt(c.target[0]+s.travel,c.target[1],c.target[2]);
  scene.add(new T.AmbientLight('#c5ddff',1.1));const sun=new T.DirectionalLight('#fff1d3',2.6);sun.position.set(-3,4,5);scene.add(sun);
  const geometries:T.BufferGeometry[]=[],materials:T.Material[]=[],textures:T.Texture[]=[];
  function mesh(g:T.Object3D,geo:T.BufferGeometry,mat:T.Material,pos:number[]){geometries.push(geo);materials.push(mat);const m=new T.Mesh(geo,mat);m.position.set(pos[0],pos[1],pos[2]);g.add(m);return m;}
  const earthObject=project.objects.find(o=>o.id==='v13-earth');
  const earth=new T.Group();earth.position.set(s.travel+((earthObject?.x??420)-420)/200,((earthObject?.y??140)-140)/200,0);earth.rotation.y=s.rotation-.6;earth.visible=!earthObject?.hidden;scene.add(earth);
  const map=document.createElement('canvas');map.width=2048;map.height=1024;const ctx=map.getContext('2d')!;ctx.fillStyle='#154b78';ctx.fillRect(0,0,2048,1024);ctx.fillStyle='#648d6d';
  for(const ring of land.rings){ctx.beginPath();ring.forEach(([lon,lat],i)=>{const x=(lon+180)/360*2048,y=(90-lat)/180*1024;if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);});ctx.closePath();ctx.fill();}
  const texture=new T.CanvasTexture(map);texture.colorSpace=T.SRGBColorSpace;textures.push(texture);
  mesh(earth,new T.SphereGeometry(1,64,32),new T.MeshStandardMaterial({map:texture,roughness:.8}),[0,0,0]);
  const points=[];for(let i=0;i<240;i++)points.push(Math.sin(i*127.1)*15,Math.cos(i*73.9)*8,-3-(i%17)*.5);
  const starGeo=new T.BufferGeometry();starGeo.setAttribute('position',new T.Float32BufferAttribute(points,3));const starMat=new T.PointsMaterial({size:.025,color:'#d6e6ff'});geometries.push(starGeo);materials.push(starMat);scene.add(new T.Points(starGeo,starMat));
  const names=['power','switch','computer'],starts=[444,545,623],contacts=[511,600,690];
  for(let i=0;i<3;i++){
   if(frame<starts[i])continue;
   const progress=smooth((frame-starts[i])/(contacts[i]-starts[i]));
   const prop=project.objects.find(o=>o.id===`v13-capsule-${names[i]}`);if(prop?.hidden)continue;
   const group=new T.Group();scene.add(group);const angle=[.35,-.35,.7][i];
   const contact=new T.Vector3(.9,angle,.3).normalize();
   group.position.set(s.travel+2.5*(1-progress)+contact.x*progress+((prop?.x??75)-75)/300,(angle+.35)*(1-progress)+contact.y*progress+((prop?.y??110)-110)/300,.7*(1-progress)+contact.z*progress);
   group.rotation.z=-1.1+progress*.7;group.rotation.y=(1-progress)*2;
   const visible=1-smooth((frame-contacts[i])/12);group.scale.setScalar(visible*(prop?.width??82)/82);
   if(['full-song-foundation-v24','full-song-foundation-v25'].includes(project.documentId)){
    const pose=capsuleSurfacePose(frame,i,(prop?.width??82)/82);
    group.position.copy(earth.position).add(pose.center);
    group.position.x+=((prop?.x??75)-75)/300;group.position.y+=((prop?.y??110)-110)/300;
    group.quaternion.copy(pose.orientation);group.scale.setScalar(pose.scale);
   }
   mesh(group,new T.CapsuleGeometry(.095,.28,6,16),new T.MeshStandardMaterial({color:'#eee6ca',roughness:.3}),[0,0,0]);
   mesh(group,new T.SphereGeometry(.096,16,10,0,Math.PI*2,0,Math.PI/2),new T.MeshStandardMaterial({color:['#d79844','#b0d8bd','#75bfd8'][i],roughness:.3}),[0,.14,0]);
   if(s.contacts[i]>0&&project.documentId!=='full-song-foundation-v25'){
    for(let j=0;j<14;j++){
     const a=j*.42+i*.3,b=.35*Math.sin(j*.7+i),v=new T.Vector3(Math.cos(a)*Math.cos(b),Math.sin(b),Math.sin(a)*Math.cos(b));
     const size=.025*smooth(s.contacts[i]*2-j/14);
     mesh(earth,new T.SphereGeometry(size,8,6),new T.MeshBasicMaterial({color:['#ffd56a','#b2ffd3','#8ce2ff'][i]}),v.multiplyScalar(1.013).toArray());
    }
   }
  }
  if(s.contacts[2]>0&&project.documentId!=='full-song-foundation-v25'){const portal=mesh(earth,new T.BoxGeometry(.3,.22,.035),new T.MeshBasicMaterial({color:'#d4f5ec'}),[.9,.25,.42]);portal.scale.setScalar(s.contacts[2]);}
  const upgrades=project.documentId==='full-song-foundation-v25'?buildEarthUpgrades(earth,frame,project.objects):null;
  r.render(scene,camera);upgrades?.dispose();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());
 },[project,frame,setting]);
 return <div style={{position:'relative',width:'100%',height:'100%'}}><div ref={host} style={{position:'absolute',inset:0}}/>{failed&&<span role="status">Loading editable scene preview…</span>}</div>;
}
