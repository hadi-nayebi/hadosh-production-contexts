import previous from './browserReadabilityStudy';
import timing from './foundation-word-timing.json';
import {validateScene,type SceneObject} from './scene.mjs';
const p=structuredClone(previous);p.documentId='full-song-foundation-v34';p.revision=1;
p.origin='v34 speech-to-cortex foundation: retained seated character, cortex in shared workspace, source-timed word journeys in profile views. Reading and physical alignment review pending.';
const spoken=timing.words.filter(w=>w.startFrame>=3308&&w.endFrame<=5000);
const birth=Array.from({length:30},(_,i)=>spoken[Math.floor(i*(spoken.length-1)/29)].endFrame);
for(const o of p.objects){
 if(!['v28-side-cortex','v27-recovered:owned-cortex'].includes(o.parentId??''))continue;
 if(['story-fragment','story-arc','story-file'].includes(o.kind)||o.id.includes('crown-')){o.hidden=true;}
 if(!o.hidden){const side=o.parentId==='v28-side-cortex';o.x+=side?320:276;o.y+=side?156:51;}
 const n=o.id.match(/neural-node-(\d+)$/);if(n){o.enterFrame=birth[Number(n[1])];o.width=14;o.height=14;o.textColor='#94e7ef';}
 const e=o.id.match(/neural-edge-(\d+)-(\d+)$/);if(e){o.enterFrame=Math.max(birth[Number(e[1])],birth[Number(e[2])]);o.textColor='#8bd6e4';}
}
for(const s of p.scenes){
 if(s.start<3240||s.end>5000)continue;
 const side=s.objectIds.includes('v28-side-cortex'),wide=s.objectIds.includes('v27-recovered:owned-cortex');
 if(side||wide)s.camera=[{frame:s.start,zoom:1,x:.5,y:.5}];
 if(!side)continue;
 if(s.start===3307)s.title='Speech builds the owned cortex';
 const mouth:SceneObject={id:`v34-mouth-${s.start}`,kind:'lyric-anchor',parentId:null,x:453,y:327,width:4,height:4,enterFrame:s.start,exitFrame:s.end,timeOffset:0,cue:null,note:'Registered mouth origin for profile speech. Move this anchor if the character registration changes.',suggestion:''};
 const read:SceneObject={...mouth,id:`v34-reading-${s.start}`,x:550,y:290,width:300,height:90,wordJourney:{mouthObjectId:mouth.id,targetGroupId:'v28-side-cortex'},note:'Each sung word starts at the mouth, grows into this reading area and travels to the cortex. Short cues stay full size for readability. No subtitle box. Shared camera coordinates; cue timing inherited, not listened approval.'};
 p.objects.push(read,mouth);s.objectIds=[read.id,mouth.id,...s.objectIds];
 s.description+=' v34: profile speech travels mouth→reading area→user-owned cortex between person and monitor. Nodes enter on selected source-word endings and persist across returns. Very short words hold full size; no listening or creative acceptance claimed.';
}
export default validateScene(p);
