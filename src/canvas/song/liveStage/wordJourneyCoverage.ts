import type {Scene} from './scene.mjs';
import timing from './foundation-word-timing.json';
/** Renderer capability coverage, never a reading or storytelling quality score. */
export function wordJourneyCoverage(project:Scene){
 const sourceMatches=project.source.sha256===timing.sourceSha256;
 const cues=sourceMatches?timing.words.filter(w=>project.words.some(p=>p.id===w.wordId)):[];
 const rows=cues.map(w=>{
  const word=project.words.find(p=>p.id===w.wordId)!;
  const block=project.objects.find(o=>o.id===`foundation-${word.phraseId}`);
  const scenes=project.scenes.filter(s=>s.start<w.endFrame&&s.end>w.startFrame);
  const treatmentScenes=project.lyricBoundaryPolicy==='word-start-scene'?scenes.filter(s=>w.startFrame>=s.start&&w.startFrame<s.end):scenes;
  const states=treatmentScenes.map(s=>{
   const anchor=project.objects.find(o=>o.kind==='lyric-anchor'&&s.objectIds.includes(o.id));
   if(block?.hidden||anchor?.hidden)return 'hidden';
   if(!anchor?.wordJourney&&!anchor?.wordRoute)return 'static';
   return w.endFrame-w.startFrame<9?'short-hold':'journey';
  });
  const covered=scenes.reduce((sum,s)=>sum+Math.max(0,Math.min(s.end,w.endFrame)-Math.max(s.start,w.startFrame)),0);
  const status=covered!==w.endFrame-w.startFrame?'missing':new Set(states).size===1?states[0]:'mixed';
  return {wordId:w.wordId,text:word.text,startFrame:w.startFrame,endFrame:w.endFrame,status,sceneIds:scenes.map(s=>s.id)};
 });
 const count=(status:string)=>rows.filter(r=>r.status===status).length;
 return {sourceMatches,crossingBoundaries:rows.filter(r=>r.sceneIds.length>1).length,total:project.words.length,timed:rows.length,journey:count('journey'),shortHold:count('short-hold'),static:count('static'),mixed:count('mixed'),hidden:count('hidden'),missing:count('missing'),rows};
}
