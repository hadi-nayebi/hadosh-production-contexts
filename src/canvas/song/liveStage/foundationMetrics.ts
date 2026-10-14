import type {Scene} from './scene.mjs';
import timing from './foundation-word-timing.json';

/** Schedule facts only. These do not establish meaningful visual changes. */
export function foundationMetrics(project:Scene){
 const fps=project.composition.fps;
 const durations=project.scenes.map(s=>(s.end-s.start)/fps);
 const sourceMatches=project.source.sha256===timing.sourceSha256;
 return {
  seconds:project.composition.durationInFrames/fps,
  shots:durations.length,
  cuts:Math.max(0,durations.length-1),
  declaredHolds:project.scenes.slice(1).filter(s=>s.boundaryIntent?.kind==='hold').length,
  minimum:durations.length?Math.min(...durations):null,
  maximum:durations.length?Math.max(...durations):null,
  mean:durations.length?durations.reduce((a,b)=>a+b,0)/durations.length:null,
  outsideCadence:durations.filter(d=>d<2||d>4).length,
  words:project.words.length,
  timedWords:sourceMatches?timing.words.filter(c=>project.words.some(w=>w.id===c.wordId)).length:0,
  sourceMatches,
 };
}
