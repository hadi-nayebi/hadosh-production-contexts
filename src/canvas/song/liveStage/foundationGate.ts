import type {Scene} from './scene.mjs';
import visualReview from './visual-review-status.json';
export type Dimension={id:string;label:string;values:(number|null)[];expected:number;hardFailures:string[]};
export function evaluateDimension(d:Dimension){
 const measured=d.values.filter((v):v is number=>typeof v==='number'&&Number.isFinite(v)&&v>=0&&v<=100);
 const complete=d.expected>0&&d.values.length===d.expected&&measured.length===d.expected;
 const mean=measured.length?measured.reduce((a,b)=>a+b,0)/measured.length:null;
 const minimum=measured.length?Math.min(...measured):null;
 return {...d,measured:measured.length,mean,minimum,complete,passed:complete&&mean!>90&&minimum!>=80&&d.hardFailures.length===0};
}
export function foundationGate(project:Scene){
 const mapping=JSON.stringify([project.source.inMs,project.source.outMs,project.arrangement]);
 const cuts=project.scenes.slice(1);const timingFailures:string[]=[];
 const values=cuts.map(s=>{
  const e=s.cutEvidence;
  if(!e||e.sourceSha256!==project.source.sha256||e.sourceMapping!==mapping||e.measuredFrame!==s.start){timingFailures.push(`Unmeasured or stale cut at frame ${s.start}`);return null;}
  return e.score;
 });
 let end=0;
 for(const s of project.scenes){if(s.start!==end||s.end<=s.start)timingFailures.push(`Coverage gap/overlap at frame ${s.start}`);end=s.end;}
 if(end!==project.composition.durationInFrames)timingFailures.push('Incomplete song coverage');
 const badDurations=project.scenes.filter(s=>(s.end-s.start)/project.composition.fps<2||(s.end-s.start)/project.composition.fps>4);
 if(badDurations.length)timingFailures.push(`${badDurations.length} shots outside 2–4 seconds`);
 const dimensions=[evaluateDimension({id:'music',label:'Measured boundary timing',values,expected:cuts.length,hardFailures:timingFailures}),
 ...[['story','Story and cause/consequence'],['lyric','Lyric meaning and vocal timing'],['visible','Meaningful scene changes'],['physical','Physical staging and action clarity'],['reading','Phone/laptop reading'],['unity','Visual coherence']].map(([id,label])=>evaluateDimension({id,label,values:project.scenes.map(()=>null),expected:project.scenes.length,hardFailures:id==='unity'?['User oneness rejection remains unresolved; no current accepted review.']:id==='story'&&!visualReview.superseded?[`Hadi’s visual review remains failed: ${visualReview.assessment} ${visualReview.reason}`]:[]}))];
 return {dimensions,detailsUnlocked:dimensions.every(d=>d.passed),score:dimensions.every(d=>d.complete)?Math.min(...dimensions.map(d=>d.mean!)):null};
}
