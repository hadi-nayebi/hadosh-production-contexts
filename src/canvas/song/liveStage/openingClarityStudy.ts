import previous from './registeredSequenceStudy';
import {validateScene,type SceneObject} from './scene.mjs';
const p=structuredClone(previous);p.documentId='full-song-foundation-v31';p.revision=1;
p.origin='v31 opening clarity candidate from v29: remove detached hand, sequential internet questions, named persistent Earth consequences. Source music/lyrics/cuts unchanged. SVG foundation; motion, reading and human acceptance unverified.';
// Existing versions preserve every removed component and its historical context.
for(const s of p.scenes.slice(0,8))s.objectIds=s.objectIds.filter(id=>!id.includes('inside-narrator')&&!id.includes('inside-window-sash')&&!id.startsWith('v13-capsule-')&&!id.startsWith('v13-capability-')&&id!=='v13-window-grip');
p.scenes[1].views=[{id:'seated',name:'Established seated person',assetId:'ai-reverse-blocking-v1'}];p.scenes[1].defaultView='seated';p.scenes[1].viewCues=[];p.scenes[1].camera=[{frame:119,zoom:1,x:.5,y:.5}];p.scenes[1].title='The seated host invites us in';
p.scenes[2].title='The workshop window opens the journey';
const earth=p.objects.find(o=>o.id==='v13-earth')!;
for(const s of p.scenes.slice(3,8)){delete s.spatialCamera;s.boundaryTransitionFrames=0;s.camera=[{frame:s.start,zoom:1,x:.5,y:.5}];s.description+=' v31: no detached hand or capsule. Shared Earth translation and persistent city/electronics/computer consequences; physically stylized, not realism approved.';}
const add=(o:SceneObject)=>{p.objects.push(o);for(const s of p.scenes.slice(3,8))if(s.start<o.exitFrame&&s.end>o.enterFrame)s.objectIds.push(o.id);};
const base={parentId:null,timeOffset:0,cue:null,note:'User-directed opening foundation; separately editable. Proposed source-gap timing, not listening approval.',suggestion:''};
function word(text:string,start:number,end:number,id:string){add({...base,id,kind:'text',role:'explanatory',text,x:775,y:85,width:470,height:85,enterFrame:start,exitFrame:end,textBackground:false,textColor:'#f3e9d0',textStyle:{family:'serif',fontSize:46,weight:700},note:`Visual prompt ${text}; instrumental-gap editorial text, not a changed sung lyric. Display interval ${start}–${end}.`});}
for(const [n,text] of ['What','is','the','Internet?'].entries())word(text,354+n*15,369+n*15,`v31-question-what-${n}`);
word('Electricity',474,545,'v31-name-electricity');
for(const [n,text] of ['Where','is','the','Internet?'].entries())word(text,414+n*15,429+n*15,`v31-question-where-${n}`);
word('Transistors',545,623,'v31-name-transistors');word('Computers',623,724,'v31-name-computers');
for(const [name,start,end] of [['electricity',511,535],['transistors',600,622],['computers',690,713]] as const){add({...base,id:`v31-earth-${name}`,kind:`story-earth-${name}`,x:earth.x,y:earth.y,width:earth.width,height:earth.height,enterFrame:start,exitFrame:724,motion:structuredClone(earth.motion),animation:{startFrame:start,endFrame:end},note:`${name} visibly changes the same Earth; enters at inherited measured event${start}, persists until browser chapter. Shared geographic sites preserve consequence continuity. Still and moving review required.`});}
for(const [i,title] of ['Earth and the internet question','Electricity brings powered cities','Transistors connect and switch the system','Computers operate across those connections'].entries())p.scenes[4+i].title=title;
export default validateScene(p);
