import previous from './foundationCortexRecovery';
import blocking from './foundation-harness-blocking.json';
import {validateScene,type SceneObject} from './scene.mjs';
const p=structuredClone(previous);
p.documentId='full-song-foundation-v28';p.revision=3;
p.origin='v28 character-led AI sequence: retained illustrated viewpoints, unobscured cumulative cortex, scene-specific framing and visible crown attachment. Audio, lyrics and measured cuts unchanged. Whole-chapter review required; no creative acceptance.';
const prefix='v27-recovered:';
const shots=p.scenes.filter(s=>s.start>=3240&&s.end<=5000);
const get=(id:string)=>p.objects.find(o=>o.id===prefix+id)!;
// Large explanatory cards obstructed the very thing this chapter must show.
// Preserve them, hidden and editable, in this independent candidate.
for(const id of ['s08-model-card','s08-files','s08-files-title','s08-notes','s08-rules','s08-page'])get(id).hidden=true;
for(const id of ['s08-model-label','s08-model-a','s08-model-b']){
 const o=get(id);o.x=935;o.y=id==='s08-model-label'?100:138;o.width=290;
 o.textStyle={...o.textStyle,family:'sans',fontSize:23,weight:600};
 o.textBackground=false;o.note+=' v28: compact external model label above monitor; no card over cortex.';
}
// The model changes on the measured event within its own shot, while context stays.
get('s08-model-a').exitFrame=blocking.shots[13].eventFrame;
get('s08-model-b').enterFrame=blocking.shots[13].eventFrame;
const group=get('owned-cortex');
const children=p.objects.filter(o=>o.parentId===group.id);
const root:SceneObject={id:'v28-crown-root',kind:'story-node',parentId:group.id,x:-6,y:-6,width:12,height:12,enterFrame:3308,exitFrame:5000,timeOffset:0,cue:null,note:'Visible attachment at the registered headphone crown; context belongs to the person.',suggestion:''};
const branch:SceneObject={...root,id:'v28-crown-branch',kind:'story-edge',x:-36.02,y:-84.07,width:36.02,height:84.07,text:''};
p.objects.push(root,branch);
for(const s of shots)if(s.objectIds.includes(group.id))s.objectIds.push(root.id,branch.id);
// Same logical nodes and global entrance clocks, registered for the side view.
const sideGroup:SceneObject={...structuredClone(group),id:'v28-side-cortex',x:340,y:154};
const sideChildren=[...children,root,branch].map(o=>({...structuredClone(o),id:`v28-side:${o.id}`,parentId:sideGroup.id,note:`Same persistent component ${o.id}, registered to the side-view crown. ${o.note}`}));
// Compress the graph vertically around the crown so the retained upper branches
// stay in-frame in this closer viewpoint; preserve all logical timing and IDs.
for(const o of sideChildren){o.y*=0.6;if(o.kind==='story-edge'||o.kind==='story-arc')o.height*=0.6;}
// Keep explanatory words above/right of the face; the graph remains attached.
for(const o of sideChildren.filter(o=>o.kind==='story-fragment')){
 const n=sideChildren.filter(x=>x.kind==='story-fragment').indexOf(o);
 o.x=150+(n%2)*180;o.y=-65+Math.floor(n/2)*70;
}
const sidePerson:SceneObject={...structuredClone(get('s05-person')),id:'v28-side-person',enterFrame:3240,exitFrame:5000};
p.objects.push(sidePerson,sideGroup,...sideChildren);
const sideIds=[sidePerson.id,sideGroup.id,...sideChildren.map(o=>o.id)];
for(const index of [1,8,12,18]){
 const s=shots[index],captions=s.objectIds.filter(id=>p.objects.find(o=>o.id===id)?.kind==='lyric-block');
 s.views=[{id:'v28-side',name:'Registered character profile',assetId:'ai-side-clean-v1'}];s.defaultView='v28-side';s.viewCues=[];
 s.objectIds=[...sideIds,...captions];
}
// Large, motivated differences in framing; these are editorial proposals, not
// automatic proof of meaningful scene changes. Action and lyric review stays open.
const framing:[number,number,number][]=[
 [1,.5,.5],[1,.5,.5],[1.65,.43,.34],[1,.5,.5],[1.5,.68,.36],
 [1,.5,.5],[1,.5,.5],[1.8,.74,.59],[1,.5,.5],[1.35,.68,.36],
 [1,.5,.5],[1.7,.65,.44],[1.2,.49,.34],[1.1,.52,.42],[1,.5,.5],
 [1.65,.68,.53],[1,.5,.5],[1.45,.66,.39],[1,.5,.5],[1,.5,.5],
];
const titles=['Enter the owned workspace','Words grow from the character’s crown','Notes join the existing cortex','Inspect the generated draft','Correct the sales pitch','Compare the date and source','The person decides','Confirm with the physical control','Retain the instruction in the cortex','Reopen and edit the saved note','Inspect tool access','Read the permission rule','Keep rules with your context','Change model; retain the cortex','Read the proposed plan','Choose the allowed scope','Edit the actual page','Keep the final decision','The cortex survives the task','Return to the person and their work'];
for(const [i,s] of shots.entries()){
 const [zoom,x,y]=framing[i];s.approachCamera=true;s.camera=[{frame:s.start,zoom,x,y}];
 s.title=titles[i];
 s.description=`v28 shot ${i+1}: ${titles[i]}. Source phrases: ${blocking.shots[i].expectedPhraseIds.join(', ')||'instrumental'}. Existing musical event ${blocking.shots[i].eventFrame}; this is not certification of the visible action. ${s.description}`;
}
// r3 follows the r1 visual audit (r2 is the local note-edit checkpoint).
// Information appears on the physical screen, with the registered person in
// the foreground. Every line remains a separate editable projected object.
const plane=structuredClone(get('s06-file').textPlane!);
function screenShot(index:number,rows:{text:string;x?:number;y:number;enter?:number;exit?:number}[]){
 const s=shots[index];
 const person:SceneObject={...structuredClone(get('ai-monitor-foreground')),id:`v28-screen-person-${index}`,enterFrame:s.start,exitFrame:s.end};
 const text=rows.map((r,j):SceneObject=>({id:`v28-screen-${index}-${j}`,kind:'text',parentId:null,x:r.x??30,y:r.y,width:r.x?250:545,height:45,enterFrame:r.enter??s.start,exitFrame:r.exit??s.end,timeOffset:0,cue:null,text:r.text,textColor:'#244b4b',textBackground:false,textStyle:{family:'sans',fontSize:28,weight:600},textPlane:structuredClone(plane),role:'explanatory',note:`${s.title}: editable content on the retained physical monitor. Source phrase ${blocking.shots[index].expectedPhraseIds.join(',')}; illustrative task, not a real publication.`,suggestion:''}));
 p.objects.push(person,...text);
 s.views=[{id:'v28-monitor',name:'Character looking at the physical screen',assetId:'ai-monitor-clean-v1'}];s.defaultView='v28-monitor';s.viewCues=[];
 s.objectIds=[person.id,...text.map(o=>o.id),...s.objectIds.filter(id=>p.objects.find(o=>o.id===id)?.kind==='lyric-block')];
 s.camera=[{frame:s.start,zoom:1.25,x:.61,y:.43}];
}
screenShot(5,[{text:'Source note',x:30,y:25},{text:'Page preview',x:325,y:25},{text:'OCT 14',x:30,y:100},{text:'OCT 14',x:325,y:100},{text:'Date matches',y:180,enter:3696},{text:'Link opens preview',y:240,enter:3696}]);
screenShot(10,[{text:'Model suggests words',y:25},{text:'Your app controls tools',y:95},{text:'Read notes.txt: allowed',y:175},{text:'Publish: ask me first',y:245}]);
screenShot(11,[{text:'tool-rules.json',y:25},{text:'Read notes.txt',y:100},{text:'Allowed by your rule',y:160,enter:4275},{text:'Publish: ask me first',y:245}]);
shots[11].camera=[{frame:shots[11].start,zoom:1.65,x:.68,y:.43}];
screenShot(14,[{text:'Proposed plan',y:25},{text:'1. Read notes.txt',y:100},{text:'2. Preview changes',y:170},{text:'Publish: ask me first',y:245}]);
for(const id of ['s09-plan','s09-plan-title','s09-plan-read','s09-plan-preview','s09-plan-wait'])get(id).hidden=true;
// The decision gesture precedes its visible consequence; clocks are the
// measured foundation event candidates, not a claim of approved performance.
get('s04-forearm').animation={startFrame:3789,endFrame:3807};
for(const id of ['s04-wait','s04-local-choice'])get(id).exitFrame=3808;
for(const id of ['s04-saved','s04-preview-kept'])get(id).enterFrame=3808;
get('s09-forearm').animation={startFrame:4569,endFrame:4587};
// Keep captions above recovered imagery and components. Registered character
// and room coordinates stay together under each shot camera.
const captions=p.objects.filter(o=>o.kind==='lyric-block');
p.objects=[...p.objects.filter(o=>o.kind!=='lyric-block'),...captions];
export default validateScene(p);
