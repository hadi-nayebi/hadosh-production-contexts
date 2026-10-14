import previous from './cortexSequenceStudy';
import assets from './registered-phone-assets.json';
import {validateScene,type SceneObject} from './scene.mjs';
const p=structuredClone(previous);
p.documentId='full-song-foundation-v29';p.revision=1;
p.origin='v28r3 with browser and phone staged in the established illustrated workspace. Source recording, words and all 76 musical boundaries preserved. New registered views are a foundation candidate; motion, physical interaction, other chapters and human acceptance remain unresolved.';
p.assets!.push(...assets);
const monitor={width:1280,height:720,corners:[{x:622,y:195},{x:1135,y:148},{x:1125,y:469},{x:609,y:440}]};
const phone={width:340,height:525,corners:[{x:830,y:243},{x:936,y:251},{x:883,y:492},{x:781,y:474}]};
const originals=new Map(p.objects.map(o=>[o.id,o]));
function view(index:number,assetId:string,title:string,zoom=1,x=.5,y=.5){
 const s=p.scenes[index];s.views=[{id:'registered',name:title,assetId}];s.defaultView='registered';s.viewCues=[];s.approachCamera=true;s.boundaryTransitionFrames=0;s.camera=[{frame:s.start,zoom,x,y}];s.title=title;
 s.description=`v29 foundation: ${title}. Source lyric cues ${s.cutEvidence?.lyricPhraseIds.join(', ')||'instrumental'}. Preserve the same person and physical workshop across the cut. Registered screen components retain source-bound performance clocks; a new view is not creative acceptance. Inherited action intent: ${s.description}`;
 return s;
}
function screen(index:number,which:'monitor'|'phone',crop:{x:number;y:number;width:number;height:number}){
 const s=p.scenes[index],plane=which==='monitor'?monitor:phone,sx=plane.width/crop.width,sy=plane.height/crop.height;
 const ids:string[]=[];
 for(const id of s.objectIds){
  const o=originals.get(id);if(!o)continue;
  if(o.kind==='lyric-block'){ids.push(id);continue;}
  if(!o.kind.startsWith('story-browser-')&&!o.kind.startsWith('story-feed-'))continue;
  if(['story-browser-bench','story-browser-hand','story-feed-phone'].includes(o.kind))continue;
  const n:SceneObject={...structuredClone(o),id:`v29-${index}-${id}`,parentId:null,contentPlane:structuredClone(plane),x:(o.x-crop.x)*sx,y:(o.y-crop.y)*sy,width:o.width*sx,height:o.height*sy,note:`Editable content registered inside the ${which}. ${o.note}`};
  if(n.motion)n.motion=n.motion.map(k=>({...k,x:k.x*sx,y:k.y*sy}));
  p.objects.push(n);ids.push(n.id);
 }
 s.objectIds=ids;
}
function person(index:number,assetId:string,title:string,zoom=1,x=.5,y=.5){const s=view(index,assetId,title,zoom,x,y);s.objectIds=s.objectIds.filter(id=>originals.get(id)?.kind==='lyric-block');}
// Browser: screen action, insert, person, consequence, and the literal doorway.
const browserShots:[string,number,number,number][]=[
 ['First window on the person’s monitor',1,.5,.5],['Two browsers compete inside the screen',1.45,.67,.41],
 ['Netscape window comes forward',1.8,.59,.42],['Explorer window comes forward',1.8,.74,.41],
 ['Open the browser source',1.75,.68,.40],['The person works with the open source',1,.5,.5],
 ['Shared source changes',1.65,.67,.4],['Firefox replaces the earlier window',1.35,.65,.43],
 ['The person chooses a control',1,.5,.5],['Inspect beneath the interface',1.7,.68,.4],
 ['Change the source, inspect the result',1.35,.64,.43],['Handle on the inside of the doorway',1.6,.44,.54],
 ['Look through the open doorway',1,.5,.5],['The person considers the view',1.15,.54,.43],
 ['The chosen browser setting takes effect',1.65,.66,.41],['The person keeps the final choice',1,.5,.5],
];
for(const [i,[title,z,x,y]] of browserShots.entries()){
 const index=8+i;view(index,'ai-monitor-ots-v1',title,z,x,y);screen(index,'monitor',{x:95,y:15,width:1090,height:595});
}
person(13,'ai-side-blocking-v1',browserShots[5][0]);
person(16,'ai-reverse-blocking-v1',browserShots[8][0],1.15,.56,.52);
person(19,'doorway-open-world-v3',browserShots[11][0],1.6,.44,.54);
person(20,'doorway-open-world-v3',browserShots[12][0]);
person(21,'ai-reverse-blocking-v1',browserShots[13][0],1.15,.54,.43);
person(23,'ai-reverse-blocking-v1',browserShots[15][0]);
// Phone: visible person, over-shoulder screen and legible inserts. Queue content
// remains an illustrative internal view, not a claim that the app exposes it.
for(let i=24;i<36;i++){
 const close=[26,28,30,32,34].includes(i);
 view(i,'phone-shoulder-v29',previous.scenes[i].title,close?1.9:1,close?.67:.5,close?.52:.5);
 const queue=previous.scenes[i].objectIds.some(id=>originals.get(id)?.kind==='story-feed-queue');
 screen(i,'phone',queue?{x:110,y:20,width:1040,height:510}:{x:453,y:42,width:334,height:503});
}
person(24,'phone-reverse-v29','The person opens the phone');
person(29,'phone-reverse-v29','The person chooses who to follow',1.1,.48,.52);
person(31,'phone-reverse-v29','The person questions the unseen order',1.35,.44,.42);
person(33,'phone-reverse-v29','The choice stays with the person',1.1,.48,.5);
person(35,'phone-reverse-v29','Return from the feed to the person',1,.5,.5);
// Per-shot lyric positions are independent editable anchors in screen space.
for(let i=8;i<36;i++){
 const s=p.scenes[i],asset=s.views?.[0].assetId??'';
 const reverse=asset.includes('reverse'),phoneView=asset.includes('phone'),close=(s.camera?.[0].zoom??1)>1.5;
 const x=reverse?900:phoneView?(close?100:850):490;
 const y=reverse||phoneView?35:100;
 const a:SceneObject={id:`v29-lyric-anchor-${i}`,kind:'lyric-anchor',parentId:null,x,y,width:280,height:90,enterFrame:s.start,exitFrame:s.end,timeOffset:0,cue:null,note:'Screen-space position for one active sung word. Keep clear of faces, fingers and essential screen content. Editable independently of the camera.',suggestion:'',label:'Single lyric word position'};
 p.objects.push(a);s.objectIds.push(a.id);
}
const used=new Set(p.scenes.flatMap(s=>s.objectIds));
p.objects=p.objects.filter(o=>!o.id.startsWith('v29-')||used.has(o.id));
export default validateScene(p);
