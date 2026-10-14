import previous from './illustratedToasterStudy';
import {validateScene,type SceneObject} from './scene.mjs';
const p=structuredClone(previous);p.documentId='full-song-foundation-v37';p.revision=1;
p.origin='v37 ownership reprise: retain the established illustrated person, workshop, phone and toaster through the final refrain. Recording, words and every scheduled boundary unchanged. Scene continuity proposal; performed actions and creative acceptance remain incomplete.';
const originals=new Map(previous.objects.map(o=>[o.id,o]));
function reprise(index:number,sourceIndex:number,title:string){
 const dest=p.scenes[index],source=previous.scenes[sourceIndex],delta=dest.start-source.start;
 const ids=source.objectIds.filter(id=>!originals.get(id)?.hidden&&!['lyric-block','lyric-anchor'].includes(originals.get(id)?.kind??''));
 for(const id of [...ids]){let parent=originals.get(id)?.parentId;while(parent){if(!ids.includes(parent))ids.push(parent);parent=originals.get(parent)?.parentId;}}
 const remap=(id:string)=>ids.includes(id)?`v37-${index}-${id}`:id;
 const clones=ids.map(id=>{
  const o:SceneObject=structuredClone(originals.get(id)!);o.id=remap(id);o.parentId=o.parentId?remap(o.parentId):null;
  o.enterFrame=Math.max(0,o.enterFrame+delta);o.exitFrame=Math.min(dest.end,o.exitFrame+delta);
  o.cue=null;
  if(o.animation)o.animation={startFrame:o.animation.startFrame+delta,endFrame:o.animation.endFrame+delta};
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
  // This is the already-built context, not a replay that erases later nodes.
  if(/neural-(node|edge)-/.test(id)){o.enterFrame=dest.start;o.exitFrame=dest.end;}
  if([70,71].includes(index)&&id.endsWith('s08-model-b'))o.text='Disconnected';
  if([70,71].includes(index)&&id.endsWith('s08-model-a'))o.hidden=true;
  o.note=`v37 reprise of ${id} from ${source.id}: retain the same owner, tool and material world. Visual clock shifted ${delta} frames; source lyric clock unchanged. ${o.note}`;
  return o;
 }).filter(o=>o.kind==='group'||o.enterFrame<o.exitFrame);
 const lyricIds=dest.objectIds.filter(id=>['lyric-block','lyric-anchor'].includes(originals.get(id)?.kind??''));
 p.objects.push(...clones);dest.objectIds=[...clones.map(o=>o.id),...lyricIds];
 delete dest.spatialCamera;
 dest.views=structuredClone(source.views);dest.defaultView=source.defaultView;dest.viewCues=source.viewCues?.map(c=>({...c,frame:c.frame+delta}));dest.camera=source.camera?.map(c=>({...c,frame:dest.start+Math.round((c.frame-source.start)*(dest.end-dest.start-1)/(source.end-source.start-1))}));dest.approachCamera=true;dest.boundaryTransitionFrames=0;
 dest.title=title;dest.description=`v37 agent-proposed final reprise: ${title}. Exact source visual scene ${source.id}; source cut evidence and sung words unchanged. The viewer should recognize their earlier choice returning to the same owner. Mature cortex retained; no reset. Character motion, interaction, transition quality and full playback are unreviewed.`;
}
reprise(62,49,'Change the model; keep the illustrated workspace and cortex');
reprise(64,19,'Return to the same inside doorway handle');
reprise(65,32,'Return to the same phone and chosen controls');
reprise(66,47,'Return to the same visible permission rules');
reprise(67,59,'Return to the same owner and toaster dial');
reprise(68,52,'Return to the same edited workshop page');
reprise(69,55,'The same owner keeps the completed work');
reprise(70,55,'Disconnect the model; retain the completed cortex and page');
reprise(71,55,'Leave the work with its owner as the view prepares to return');
reprise(72,2,'Return through the same workshop window');
reprise(73,0,'Return outside the same illustrated workshop');
// Remove only unreachable candidate objects. Previous documents remain intact.
const reachable=new Set(p.scenes.flatMap(s=>s.objectIds));let changed=true;
while(changed){changed=false;for(const o of p.objects){if(!reachable.has(o.id))continue;for(const id of [o.parentId,o.textAnchor?.objectId,o.screenFor,o.textFlow?.speakerId,o.textFlow?.target?.objectId,o.wordRoute?.entryId,o.wordRoute?.exitId,o.wordJourney?.mouthObjectId,o.wordJourney?.targetGroupId])if(id&&!reachable.has(id)){reachable.add(id);changed=true;}}}
p.objects=p.objects.filter(o=>reachable.has(o.id));
export default validateScene(p);
