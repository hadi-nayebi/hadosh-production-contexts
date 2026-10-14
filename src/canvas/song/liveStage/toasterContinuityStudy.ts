import previous from './registeredSequenceStudy';
import assets from './toaster-continuity-assets.json';
import {validateScene,type SceneObject} from './scene.mjs';
const p=structuredClone(previous);
p.documentId='full-song-foundation-v30';p.revision=1;
p.origin='v29 plus illustrated toaster and finale continuity. Original recording, words and all 76 cuts preserved. New action plates and a bread-arm rig replace block geometry; final physical/motion review remains pending.';
p.assets!.push(...assets);
const objects=new Map(previous.objects.map(o=>[o.id,o]));
function anchor(index:number,x=910,y=55){
 const s=p.scenes[index];const o:SceneObject={id:`v30-lyric-${index}`,kind:'lyric-anchor',parentId:null,x,y,width:280,height:90,enterFrame:s.start,exitFrame:s.end,timeOffset:0,cue:null,note:'One sung word, screen-space anchor clear of the main physical action.',suggestion:'',label:'Single lyric word position'};p.objects.push(o);s.objectIds.push(o.id);
}
function plate(index:number,assetId:string,title:string,zoom=1,x=.5,y=.5){
 const s=p.scenes[index];delete s.spatialCamera;
 s.views=[{id:'illustrated',name:title,assetId}];s.defaultView='illustrated';s.viewCues=[];s.camera=[{frame:s.start,zoom,x,y}];s.approachCamera=true;s.boundaryTransitionFrames=0;
 s.objectIds=s.objectIds.filter(id=>objects.get(id)?.kind==='lyric-block');s.title=title;s.description=`v30: ${title}. Same established illustrated person and workshop. Source lyric cues ${s.cutEvidence?.lyricPhraseIds.join(', ')||'instrumental'}; original cut preserved. Still artwork is not proof of moving action or human acceptance.`;anchor(index);return s;
}
function reprise(index:number,sourceIndex:number,title:string){
 const dest=p.scenes[index],source=previous.scenes[sourceIndex],delta=dest.start-source.start;
 const ids=source.objectIds.filter(id=>!objects.get(id)?.hidden&&!['lyric-block','lyric-anchor'].includes(objects.get(id)?.kind??''));
 // Keep hierarchy intact and shift only the visual performance clocks.
 for(const id of [...ids]){let parent=objects.get(id)?.parentId;while(parent){if(!ids.includes(parent))ids.push(parent);parent=objects.get(parent)?.parentId;}}
 const clones=ids.map(id=>{
  const o=structuredClone(objects.get(id)!);o.id=`v30-${index}-${id}`;o.parentId=o.parentId?`v30-${index}-${o.parentId}`:null;
  if(o.kind!=='group'){o.enterFrame=Math.max(0,o.enterFrame+delta);o.exitFrame=Math.min(dest.end,o.exitFrame+delta);}
  o.cue=null;
  if(o.animation)o.animation={startFrame:o.animation.startFrame+delta,endFrame:o.animation.endFrame+delta};
  const remap=(id:string)=>ids.includes(id)?`v30-${index}-${id}`:id;
  if(o.textAnchor)o.textAnchor.objectId=remap(o.textAnchor.objectId);
  if(o.screenFor)o.screenFor=remap(o.screenFor);
  if(o.textFlow?.speakerId)o.textFlow.speakerId=remap(o.textFlow.speakerId);
  if(o.textFlow?.target?.objectId)o.textFlow.target.objectId=remap(o.textFlow.target.objectId);
  if(o.attachment)o.attachment.settingId=dest.id;
  if(o.fade?.in)o.fade.in=[o.fade.in[0]+delta,o.fade.in[1]+delta];
  if(o.fade?.out)o.fade.out=[o.fade.out[0]+delta,o.fade.out[1]+delta];
  if(o.actionCues)o.actionCues={add:o.actionCues.add+delta,block:o.actionCues.block+delta,inspect:o.actionCues.inspect+delta,change:o.actionCues.change+delta};
  if(o.motion)o.motion=o.motion.map(k=>({...k,frame:k.frame+delta}));
  if(o.viewCues)o.viewCues=o.viewCues.map(k=>({...k,frame:k.frame+delta}));
  if(o.performanceClock)o.performanceClock={...o.performanceClock,timelineStart:o.performanceClock.timelineStart+delta,timelineEnd:o.performanceClock.timelineEnd+delta};
  o.note=`Finale reprise of ${id}: same component identity and intent. ${o.note}`;return o;
 }).filter(o=>o.kind==='group'||o.enterFrame<o.exitFrame);
 p.objects.push(...clones);const caption=dest.objectIds.filter(id=>objects.get(id)?.kind==='lyric-block');
 delete dest.spatialCamera;dest.views=structuredClone(source.views);dest.defaultView=source.defaultView;dest.viewCues=source.viewCues?.map(c=>({...c,frame:c.frame+delta}));dest.camera=source.camera?.map(c=>({...c,frame:c.frame+delta}));dest.approachCamera=true;dest.boundaryTransitionFrames=0;
 dest.objectIds=[...clones.map(o=>o.id),...caption];dest.title=title;dest.description=`v30 reprise: ${title}. Reuses ${source.id} and its established person/space/components. Visual clocks shifted by${delta}frames; recording and lyric clocks unchanged. Continuity and moving playback review remain pending.`;anchor(index);
}
plate(56,'toaster-bread-clean-v30','The owner and the same workshop');
plate(57,'toaster-bread-clean-v30','Choose and lower the bread',1.45,.63,.55);
plate(58,'toaster-power-v30','Power connects to the owned appliance');
plate(59,'toaster-dial-v30','The owner controls the dial',1.9,.67,.72);
plate(60,'toaster-dial-v30','The notebook remains beside the tool',2.1,.77,.84);
plate(61,'toaster-dial-v30','Notes and chosen tools stay together');
reprise(62,49,'Change the model; keep the same cortex and work');
plate(63,'toaster-result-v30','The result returns to the owner');
// Reprise the same worlds rather than switching back to unrelated flat figures.
plate(64,'doorway-open-world-v3','The same doorway and inside handle',1.35,.44,.52);
reprise(65,29,'The same person chooses on the phone');
reprise(66,48,'The same owned cortex and tool rules');
plate(67,'toaster-dial-v30','The same hand controls the toaster',1.9,.67,.72);
reprise(68,53,'The person’s edited page remains');
reprise(69,55,'The workspace belongs to the person');
reprise(70,54,'The saved context remains with the owner');
reprise(71,55,'Return to the owner and their work');
plate(72,'inside-workshop-window-v2','The workshop window returns',1.45,.7,.4);
plate(73,'town-workshop-approach-v1','Outside the same workshop');
// Bread and attached arm are one editable image limb. The unchanged original
// restores every pixel outside the removed limb; toaster front occludes insertion.
const unit=1280/1672;
const points=(v:number[][])=>v.map(([x,y])=>({x:x*unit,y:y*unit}));
const limb=points([[810,357],[874,371],[920,367],[955,353],[990,333],[1011,333],[1025,342],[1048,340],[1066,359],[1080,411],[1070,414],[1090,425],[1095,450],[1087,458],[1090,533],[1075,538],[990,528],[984,520],[986,452],[980,436],[988,417],[970,411],[940,435],[883,465],[854,467],[828,460],[791,449],[762,439],[770,406],[787,376]]);
function imageObject(id:string,inverse:boolean,degrees:number,polygon=limb):SceneObject{return {id,kind:'image',parentId:null,x:0,y:0,width:1280,height:720,enterFrame:5000,exitFrame:5169,timeOffset:0,cue:null,note:'Registered original bread-arm artwork. One shoulder pivot keeps the hand and held bread together; insertion concludes at measured event5136. Occlusion must be visually checked.',suggestion:'',views:[{id:'base',name:'Registered toaster action',assetId:'toaster-bread-v30'}],defaultView:'base',viewCues:[],limb:{polygon,pivot:{x:785*unit,y:410*unit},degrees,inverse},animation:{startFrame:5106,endFrame:5136}};}
const restore=imageObject('v30-bread-static',true,0,points([[802,350],[845,361],[960,340],[998,323],[1068,334],[1096,387],[1112,550],[970,551],[967,444],[902,480],[841,480],[749,450],[760,405],[784,367]])),arm=imageObject('v30-bread-arm',false,16),front=imageObject('v30-toaster-front',false,0,points([[842,601],[861,581],[900,592],[1062,597],[1129,588],[1162,611],[1176,780],[1079,812],[838,778]]));
p.objects.push(restore,arm,front);
for(const i of [56,57])p.scenes[i].objectIds.unshift(restore.id,arm.id,front.id);
// Earlier versions retain the original objects. This candidate retains only
// objects reachable from its scene lists and their structural references.
const reachable=new Set(p.scenes.flatMap(s=>s.objectIds));
let changed=true;
while(changed){changed=false;for(const o of p.objects){if(!reachable.has(o.id))continue;for(const id of [o.parentId,o.textAnchor?.objectId,o.screenFor,o.textFlow?.speakerId,o.textFlow?.target?.objectId]){if(id&&!reachable.has(id)){reachable.add(id);changed=true;}}}}
p.objects=p.objects.filter(o=>reachable.has(o.id));
export default validateScene(p);
