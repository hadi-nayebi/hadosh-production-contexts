import previous from './openingClarityStudy';
import {validateScene,type SceneObject} from './scene.mjs';
const p=structuredClone(previous);p.documentId='full-song-foundation-v32';p.revision=1;
p.origin='v32 continuous physical monitor during browser customization; user-authorized camera hold1438–1723 with internal action events1476/1588/1678. Source recording, words and cut metadata preserved. Logo montage, visual and listening approval pending.';
const plane={width:1280,height:720,corners:[{x:622,y:195},{x:1135,y:148},{x:1125,y:469},{x:609,y:440}]};
const ids:string[]=[];
for(const part of ['shell','controls','inspection']){
 const o:SceneObject={id:`v32-browser-${part}`,kind:`story-browser-customization-${part}`,parentId:null,x:0,y:0,width:1280,height:720,enterFrame:1438,exitFrame:1723,timeOffset:0,cue:null,contentPlane:structuredClone(plane),note:`User-directed intentional screen hold. ${part}: preserve physical monitor registration; editable independently. Events1476/1588/1678 are retained measured audio cues, not visual acceptance.`,suggestion:'Foundation: motion/readability review and framework logo montage pending.'};if(part==='controls'){o.x=930;o.width=286;o.height=248;}p.objects.push(o);ids.push(o.id);
}
for(const i of [16,17,18]){
 const s=p.scenes[i];if(i>16)s.boundaryIntent={kind:'hold',reason:'Maintain browser-screen camera while controls and page internals develop.',source:'Hadi explicit browser-screen hold correction, relayed2026-10-11; Departments job current directions.'};s.views=[{id:'monitor',name:'Continuous browser customization',assetId:'ai-monitor-ots-v1'}];s.defaultView='monitor';s.viewCues=[];s.camera=[{frame:s.start,zoom:1.65,x:.68,y:.4}];s.boundaryTransitionFrames=0;s.approachCamera=true;
 s.objectIds=[...ids,...s.objectIds.filter(id=>p.objects.find(o=>o.id===id)?.kind==='lyric-block')];
 const a:SceneObject={id:`v32-lyric-${i}`,kind:'lyric-anchor',parentId:null,x:900,y:35,width:280,height:90,enterFrame:s.start,exitFrame:s.end,timeOffset:0,cue:null,note:'One sung word above the held monitor view, independent of its editable content.',suggestion:''};p.objects.push(a);s.objectIds.push(a.id);
 s.description+=' v32 camera-hold exception explicitly requested by Hadi: keep screen view through add/control/inspect/change; these are internal action boundaries, not camera cuts. Numeric cut alignment must not be reported as three actual cuts. Actual lyric interval1450–1726; visual hold1438–1723. Framework logos unimplemented; no historical product reconstruction claimed.';
}
p.scenes[16].title='Hold screen: install a control and block tracking';p.scenes[17].title='Hold screen: expose the page inspector';p.scenes[18].title='Hold screen: change the page and keep the controls';
export default validateScene(p);
