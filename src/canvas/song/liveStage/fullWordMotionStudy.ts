import previous from './cortexSpeechStudy';
import {validateScene,type SceneObject} from './scene.mjs';
import {songWordDirections} from './songWordDirections';
const p=structuredClone(previous);p.documentId='full-song-foundation-v35';p.revision=1;p.lyricBoundaryPolicy='word-start-scene';
p.origin='v35 full-song word-motion blocking proposal. Every lyric cue has an independent travel/read treatment or explicit short-cue hold. Scene-relative destinations are editable proposals, not proven physical/creative alignment. Source and scene timing unchanged.';
for(const s of p.scenes){
 let read=p.objects.find(o=>o.kind==='lyric-anchor'&&s.objectIds.includes(o.id));
 if(read?.wordJourney)continue;
 const direction=songWordDirections.find(d=>s.start>=d.from&&s.start<d.to)!;
 if(!read){read={id:`v35-read-${s.start}`,kind:'lyric-anchor',parentId:null,x:360,y:105,width:560,height:90,enterFrame:s.start,exitFrame:s.end,timeOffset:0,cue:null,note:'',suggestion:''};p.objects.push(read);s.objectIds.push(read.id);}
 const center=Math.max(300,Math.min(980,read.x+read.width/2));read.x=center-280;read.width=560;
 const base={kind:'lyric-anchor',parentId:null,width:16,height:16,enterFrame:s.start,exitFrame:s.end,timeOffset:0,cue:null,suggestion:''} as const;
 const entry:SceneObject={...base,id:`v35-entry-${s.start}`,x:direction.entry[0],y:direction.entry[1],note:'Editable word-entry point. Directorial blocking proposal; does not assert a physical speaker here.'};
 const exit:SceneObject={...base,id:`v35-exit-${s.start}`,x:direction.exit[0],y:direction.exit[1],note:`Editable word destination. ${direction.intent} Verify against actual viewpoint, faces and controls.`};
 p.objects.push(entry,exit);s.objectIds.push(entry.id,exit.id);
 read.wordRoute={entryId:entry.id,exitId:exit.id,intent:direction.intent};
 read.note=`v35 agent-authored word blocking: ${direction.intent} One sung word, source clock unchanged. Read here at full size, then leave toward the destination. Shorter-than-nine-frame cues hold for reading. All paths need per-shot visual review.`;
 s.description+=' v35 independent word path: '+direction.intent+' Agent proposal; reading, occlusion and motion quality unreviewed.';
}
// Repair the observed saved/closed/reopened collision in the retained note shot.
// Keep original v34 objects untouched; this version resumes identical content after reopening.
const noteScene=p.scenes.find(s=>s.start===4030)!;
for(const suffix of ['file','heading-after','body-clear','body-pitch']){
 const o=p.objects.find(o=>o.id===`v27-recovered:s06-${suffix}`)!;
 const reopened={...structuredClone(o),id:`v35-reopened-${suffix}`,enterFrame:4104};
 o.exitFrame=4092;p.objects.push(reopened);noteScene.objectIds.push(reopened.id);
}
p.objects.find(o=>o.id==='v27-recovered:s06-saved')!.exitFrame=4092;
p.objects.find(o=>o.id==='v27-recovered:s06-closed')!.exitFrame=4104;
noteScene.description+=' v35 visibility repair: saved content closes4092, closed prompt alone until4104, same note reopens4104. No simultaneous saved/closed/reopened labels.';
export default validateScene(p);
