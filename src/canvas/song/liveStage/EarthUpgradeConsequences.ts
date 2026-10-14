import * as T from 'three';
import type {SceneObject} from './scene.mjs';
const kinds=['power','switch','computer'] as const;
const contacts=[511,600,690];
export function earthUpgradeState(frame:number,objects:SceneObject[]){
 return kinds.map((kind,i)=>{
  const o=objects.find(o=>o.id===`v13-capability-${kind}`),start=Math.max(o?.enterFrame??Infinity,contacts[i]+1);
  return !o||o.hidden||frame<start||frame>=o.exitFrame?0:Math.min(1,(frame-start+1)/20);
 });
}
// Shared geographic anchors make each upgrade build on the previous visible capability.
const places=[[-74,41],[0,51],[31,30],[73,19],[140,36],[-46,-24],[151,-34]];
export const upgradeAnchors=places.map(([lon,lat])=>{const a=lon*Math.PI/180,b=lat*Math.PI/180;return new T.Vector3(Math.cos(a)*Math.cos(b),Math.sin(b),-Math.sin(a)*Math.cos(b));});
export function buildEarthUpgrades(earth:T.Group,frame:number,objects:SceneObject[]){
 const [power,network,computer]=earthUpgradeState(frame,objects),group=new T.Group();earth.add(group);
 const geometries:T.BufferGeometry[]=[],materials:T.Material[]=[];
 function mesh(parent:T.Object3D,geo:T.BufferGeometry,color:string,pos:T.Vector3){const mat=new T.MeshBasicMaterial({color});geometries.push(geo);materials.push(mat);const m=new T.Mesh(geo,mat);m.position.copy(pos);parent.add(m);return m;}
 if(power>0)for(const normal of upgradeAnchors)mesh(group,new T.SphereGeometry(.033*power,10,8),'#ffd875',normal.clone().multiplyScalar(1.018));
 if(network>0){
  for(let i=0;i<upgradeAnchors.length-1;i++){
   const points=[];for(let j=0;j<=16;j++){const t=j/16*network;points.push(upgradeAnchors[i].clone().lerp(upgradeAnchors[i+1],t).normalize().multiplyScalar(1.025+.075*Math.sin(t*Math.PI)));}
   mesh(group,new T.TubeGeometry(new T.CatmullRomCurve3(points),24,.005,5,false),'#6cddcc',new T.Vector3());
  }
 }
 if(computer>0)for(let i=0;i<upgradeAnchors.length;i++){
  const normal=upgradeAnchors[i],window=new T.Group();window.position.copy(normal).multiplyScalar(1.075);window.quaternion.setFromUnitVectors(new T.Vector3(0,0,1),normal);window.scale.setScalar(computer);group.add(window);
  mesh(window,new T.BoxGeometry(.29,.21,.025),'#274f64',new T.Vector3());
  mesh(window,new T.PlaneGeometry(.26,.18),'#e6eee0',new T.Vector3(0,0,.013));
  mesh(window,new T.PlaneGeometry(.26,.032),'#467d9a',new T.Vector3(0,.073,.014));
  // Page columns and a changing selection make this an operating window, not a title card.
  for(let row=0;row<3;row++)mesh(window,new T.PlaneGeometry(.17-row*.02,.008),'#769196',new T.Vector3(-.025,.03-row*.025,.014));
  const selected=Math.floor((frame-691)/8)%3;
  mesh(window,new T.PlaneGeometry(.02,.014),'#d39947',new T.Vector3(.09,.03-selected*.025,.015));
 }
 return {dispose:()=>{earth.remove(group);geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}};
}
